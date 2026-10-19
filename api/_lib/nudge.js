/* The daily 12:00 reminder, sent by the site itself.

   No library and no service account: a push with no body needs only a signed
   header (VAPID, ES256) that node:crypto can make. The device wakes, asks
   /api/nudge?today=1 for the day's message, and shows it. The signing key is
   created on first use and kept in the database, so there is nothing to set up
   in a dashboard. */
import crypto from 'node:crypto';
import { query } from './db.js';
import { MESSAGES, DAYS } from './nudge-messages.js';

export const START = '2026-10-19';        // day 1: the first Monday after the plan was set up
export const SEND_FROM_MINUTE = 12 * 60;  // 12:00 India time
export const SEND_UNTIL_MINUTE = 16 * 60; // later than this, today's reminder is skipped
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
/* The next unticked day of the gentle start (1–20), 0 once it is all ticked.
   Days 1–20 of DAYS are the gentle start's days, in the same order. */
const GENTLE_DAYS = 20;
export function gentleDay(st) {
  const done = (st && st.gentle) || {};
  for (let i = 1; i <= GENTLE_DAYS; i++) if (!done['g' + i]) return i;
  return 0;
}
/* `st` is the signed-in person's saved progress, when there is one. With it,
   the task follows where they actually are, so a skipped day never makes the
   reminder run ahead of them. Without it, the calendar decides. */
export function messageFor(date, st) {
  const D = Math.max(1, weekdaysSince(START, date));
  const n = ((D - 1) % MESSAGES.length) + 1;
  const d = DAYS[n - 1];
  const title = 'Day ' + n + ' of 30: your ten minutes';
  if (st && typeof st === 'object' && st.path !== 'full') {
    const g = gentleDay(st);
    if (g) return { n, title, body: d.say + ' ' + DAYS[g - 1].task, url: '/#/start' };
    return { n, title, url: '/#/', body: d.say + ' Ten minutes: open the site and do the step marked “Next”.' };
  }
  /* The first thirty follow the gentle start and Chapters 1–2 step by step.
     After that the firm line repeats and the task is "the step marked Next",
     which the site works out from where he actually is. */
  if (D > DAYS.length)
    return { n, title, url: '/#/', body: d.say + ' Ten minutes: open the site and do the step marked “Next”.' };
  return { n, title, body: d.say + ' ' + d.task, url: d.url };
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

/* A push with no body. 201 means accepted; 404/410 mean the device is gone. */
export async function pushOne(keys, endpoint, fetcher = fetch) {
  const r = await fetcher(endpoint, {
    method: 'POST',
    headers: { Authorization: vapidHeader(keys, endpoint), TTL: '21600', Urgency: 'high', 'Content-Length': '0' }
  });
  if (r.status === 404 || r.status === 410) await query('DELETE FROM push_subs WHERE endpoint=$1', [endpoint]);
  return r.status >= 200 && r.status < 300;
}
export async function pushMany(rows, fetcher) {
  const keys = await vapid();
  let sent = 0;
  for (const r of rows) { try { if (await pushOne(keys, r.endpoint, fetcher)) sent++; } catch { /* next device */ } }
  return sent;
}

/* The scheduled run: weekdays, from 12:00 India time, once per day. The
   workflow calls it a few times as a backup, so it must be harmless to repeat:
   the first call of the day claims it, the rest do nothing. */
export async function runDaily(now = Date.now(), fetcher) {
  const t = istParts(now);
  if (t.weekday < 1 || t.weekday > 5) return { sent: 0, skipped: 'weekend' };
  if (t.date < START) return { sent: 0, skipped: 'before_start' };
  if (t.minutes < SEND_FROM_MINUTE) return { sent: 0, skipped: 'too_early' };
  if (t.minutes > SEND_UNTIL_MINUTE) return { sent: 0, skipped: 'too_late' };
  await query(`INSERT INTO kv (k, v) VALUES ('nudge_last', '{"date":"1970-01-01"}') ON CONFLICT (k) DO NOTHING`);
  const claim = await query(
    `UPDATE kv SET v=$2 WHERE k='nudge_last' AND v->>'date' <> $1 RETURNING k`, [t.date, JSON.stringify({ date: t.date })]);
  if (!claim.length) return { sent: 0, skipped: 'already_sent' };
  const subs = await query('SELECT endpoint FROM push_subs');
  const sent = await pushMany(subs, fetcher);
  if (subs.length && !sent)                    // nobody got it: let the next backup try again
    await query(`UPDATE kv SET v='{"date":"1970-01-01"}' WHERE k='nudge_last'`);
  return { sent, devices: subs.length };
}
