/* The daily 12:00 reminder, sent by the site itself.

   No library and no service account: a push with no body needs only a signed
   header (VAPID, ES256) that node:crypto can make. The device wakes, asks
   /api/nudge?today=1 for the day's message, and shows it. The signing key is
   created on first use and kept in the database, so there is nothing to set up
   in a dashboard. */
import crypto from 'node:crypto';
import { query } from './db.js';
import { MESSAGES, SAYS } from './nudge-messages.js';
import { WEEKS as ROUTE_WEEKS, nextStep, stepHref, weekOf } from '../../src/data/route.mjs';

export const START = '2026-10-19';        // day 1: the route's first Monday
/* The send window. The trigger is Vercel's own scheduler (vercel.json), which
   on the free plan fires once a day somewhere inside the hour it is given:
   hour 06 UTC is 11:30–12:29 in India, so the window opens at 11:30. The
   GitHub schedule stays as a backup, but GitHub routinely runs it hours late,
   so the window stays open until 20:00: a late reminder still beats none. */
export const SEND_FROM_MINUTE = 11 * 60 + 30;  // 11:30 India time
export const SEND_UNTIL_MINUTE = 20 * 60;      // after 20:00, today's reminder is skipped
const IST = 330 * 60 * 1000;
const SITE = 'https://relevel-steel.vercel.app';

/* Only real browser push services may be written to. */
const PUSH_HOSTS = [/(^|\.)fcm\.googleapis\.com$/, /(^|\.)push\.services\.mozilla\.com$/,
  /(^|\.)push\.apple\.com$/, /(^|\.)notify\.windows\.com$/, /(^|\.)push\.api\.mozilla\.com$/];
export function allowedEndpoint(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' && !u.username && !u.password && PUSH_HOSTS.some(r => r.test(u.hostname));
  } catch { return false; }
}

export function istParts(ms = Date.now()) {
  const d = new Date(ms + IST);
  const date = d.toISOString().slice(0, 10);
  return { date, weekday: d.getUTCDay(), minutes: d.getUTCHours() * 60 + d.getUTCMinutes() };
}
const dayNum = s => Math.floor(Date.parse(s + 'T00:00:00Z') / 86400000);
export function weekdaysSince(start, date) {
  let n = 0;
  for (let d = dayNum(start); d <= dayNum(date); d++) { const w = new Date(d * 86400000).getUTCDay(); if (w >= 1 && w <= 5) n++; }
  return n;
}
/* The task line for a route step. */
const mins = m => m >= 90 ? 'about ' + (Math.round(m / 30) / 2) + ' hours' : 'about ' + m + ' min';
export function taskFor(step) {
  if (step.kind === 'read') return 'Today: read “' + step.title + '” in the book' + (step.part ? ' (' + (step.part === 1 ? 'first' : 'second') + ' half)' : '') + ', ' + mins(step.mins) + '.';
  if (step.kind === 'chapter') return 'Today: ' + (step.firstPass && step.mins <= 30 ? 'a first pass on ' : '') + 'Chapter ' + step.num + ', “' + step.title + '”, ' + mins(step.mins) + '.';
  if (step.kind === 'look') return 'Today: your look back. Three lines in your notepad, then tick it.';
  return 'Today: ' + step.title + ', ' + mins(step.mins) + '.';
}
/* `st` is the signed-in person's saved progress, when there is one. With it,
   the task is their next step on the route, wherever they are. Without it
   (signed out), the calendar names the week and the site works out the step. */
export function messageFor(date, st) {
  const D = Math.max(1, weekdaysSince(START, date));
  const n = ((D - 1) % MESSAGES.length) + 1;
  const say = SAYS[n - 1];
  const title = 'Day ' + n + ' of 30: your ten minutes';
  if (st && typeof st === 'object') {
    const s = nextStep(st);
    if (!s) return { n, title, url: '/app/#/start', body: say + ' Every step on the route is done. Ten minutes: a second pass on one “Build it”.' };
    const href = stepHref(s, st.lang === 'hi');
    return { n, title, body: say + ' ' + taskFor(s), url: href, step: s.id };
  }
  const w = ROUTE_WEEKS[Math.min(Math.max(weekOf(date), 1), ROUTE_WEEKS.length) - 1];
  return { n, title, url: '/app/#/start', body: say + ' This week: ' + w.title + '. Open the site and do the step marked next.' };
}

/* ---------- VAPID ---------- */
const b64u = b => Buffer.from(b).toString('base64url');
export function makeKeys() {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' });
  const jwk = publicKey.export({ format: 'jwk' });
  const pub = b64u(Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]));
  return { priv: privateKey.export({ format: 'jwk' }), pub };
}
export async function vapid() {
  let row = (await query(`SELECT v FROM kv WHERE k='vapid'`))[0];
  if (!row) {
    await query(`INSERT INTO kv (k, v) VALUES ('vapid', $1) ON CONFLICT (k) DO NOTHING`, [JSON.stringify(makeKeys())]);
    row = (await query(`SELECT v FROM kv WHERE k='vapid'`))[0];
  }
  return row.v;
}
export function vapidHeader(keys, endpoint, now = Date.now()) {
  const head = b64u(JSON.stringify({ typ: 'JWT', alg: 'ES256' }));
  const claims = b64u(JSON.stringify({ aud: new URL(endpoint).origin, exp: Math.floor(now / 1000) + 12 * 3600, sub: SITE }));
  const sig = crypto.sign('sha256', Buffer.from(head + '.' + claims),
    { key: crypto.createPrivateKey({ key: keys.priv, format: 'jwk' }), dsaEncoding: 'ieee-p1363' });
  return 'vapid t=' + head + '.' + claims + '.' + b64u(sig) + ', k=' + keys.pub;
}

/* A push with no body. 201 means accepted; 404/410 mean the device is gone.
   Returns the push service's status code (0 if it could not be reached), so a
   failed test can say why instead of just "it did not go through". */
export async function pushOne(keys, endpoint, fetcher = fetch) {
  const r = await fetcher(endpoint, {
    method: 'POST',
    headers: { Authorization: vapidHeader(keys, endpoint), TTL: '21600', Urgency: 'high', 'Content-Length': '0' }
  });
  if (r.status === 404 || r.status === 410) await query('DELETE FROM push_subs WHERE endpoint=$1', [endpoint]);
  return r.status;
}
export async function pushEach(rows, fetcher) {
  const keys = await vapid();
  const statuses = [];
  for (const r of rows) {
    try { statuses.push(await pushOne(keys, r.endpoint, fetcher)); } catch { statuses.push(0); }
  }
  return { sent: statuses.filter(c => c >= 200 && c < 300).length, statuses };
}
export async function pushMany(rows, fetcher) { return (await pushEach(rows, fetcher)).sent; }

/* What the last scheduled run did, so the bell can show it. */
async function logRun(entry) {
  await query(`INSERT INTO kv (k, v) VALUES ('nudge_log', $1) ON CONFLICT (k) DO UPDATE SET v=$1`, [JSON.stringify(entry)]);
}
export async function lastRun() {
  const r = (await query(`SELECT v FROM kv WHERE k='nudge_log'`))[0];
  return r ? r.v : null;
}

/* The scheduled run: weekdays, from 12:00 India time, once per day. The
   workflow calls it a few times as a backup, so it must be harmless to repeat:
   the first call of the day claims it, the rest do nothing. */
export async function runDaily(now = Date.now(), fetcher) {
  const t = istParts(now);
  if (t.weekday < 1 || t.weekday > 5) return { sent: 0, skipped: 'weekend' };
  if (t.date < START) return { sent: 0, skipped: 'before_start' };
  if (t.minutes < SEND_FROM_MINUTE) return { sent: 0, skipped: 'too_early' };
  if (t.minutes > SEND_UNTIL_MINUTE) {
    const last = await lastRun();
    if (!last || last.date !== t.date) await logRun({ date: t.date, at: now, outcome: 'too_late', sent: 0, devices: 0 });
    return { sent: 0, skipped: 'too_late' };
  }
  await query(`INSERT INTO kv (k, v) VALUES ('nudge_last', '{"date":"1970-01-01"}') ON CONFLICT (k) DO NOTHING`);
  const claim = await query(
    `UPDATE kv SET v=$2 WHERE k='nudge_last' AND v->>'date' <> $1 RETURNING k`, [t.date, JSON.stringify({ date: t.date })]);
  if (!claim.length) return { sent: 0, skipped: 'already_sent' };
  const subs = await query('SELECT endpoint FROM push_subs');
  const { sent, statuses } = await pushEach(subs, fetcher);
  if (subs.length && !sent)                    // nobody got it: let the next backup try again
    await query(`UPDATE kv SET v='{"date":"1970-01-01"}' WHERE k='nudge_last'`);
  await logRun({ date: t.date, at: now, outcome: !subs.length ? 'no_devices' : sent ? 'sent' : 'failed',
    sent, devices: subs.length, statuses });
  return { sent, devices: subs.length };
}
