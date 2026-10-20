/* Exercises the API against the dev server. `node tools/api-test.mjs` */
import { readFileSync } from 'node:fs';
import crypto from 'node:crypto';
import { messageFor, weekdaysSince, istParts, allowedEndpoint, makeKeys, vapidHeader, START, SEND_FROM_MINUTE, SEND_UNTIL_MINUTE } from '../api/_lib/nudge.js';
import { MESSAGES } from '../api/_lib/nudge-messages.js';
import { STEPS, stepDone } from '../src/data/route.mjs';
const EXPECT = JSON.parse(readFileSync(new URL('../content/defaults.json', import.meta.url), 'utf8'));
const B = process.env.BASE || 'http://127.0.0.1:8788';
let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? pass++ : (fail++, console.log('  FAIL', m, extra ?? '')); 
  if (c) console.log('  ok  ', m); };

let cookie = '';
async function api(p, o = {}) {
  const h = Object.assign({ 'x-aifz': '1' }, o.headers || {});
  if (cookie) h.cookie = cookie;
  if (o.body && typeof o.body !== 'string') { h['content-type'] = 'application/json'; o.body = JSON.stringify(o.body); }
  const r = await fetch(B + p, Object.assign({ redirect: 'manual' }, o, { headers: h }));
  const sc = r.headers.get('set-cookie');
  if (sc) cookie = sc.split(';')[0];
  let body = null; try { body = await r.json(); } catch {}
  return { status: r.status, body, headers: r.headers };
}

console.log('\n— anonymous —');
let r = await api('/api/health');
ok(r.status === 200 && r.body.ok && r.body.dbReady, 'health reports a ready database', r.body);
r = await api('/api/me');
ok(r.status === 200 && r.body.user === null, 'me is null when signed out', r.body);
r = await api('/api/state');
ok(r.status === 401, 'progress needs a session', r.status);
r = await api('/api/content');
ok(r.status === 200 && r.body.content.items.data.length === EXPECT.items.length,
  'content reads without a session');
ok(r.body.editor === false, 'anonymous is not an editor');
const v0 = r.body.content.items.version;
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: v0, data: [] } });
ok(r.status === 403, 'anonymous cannot write content', r.status);

console.log('\n— signed in as an editor —');
await api('/api/dev/login?login=localdev');
r = await api('/api/me');
ok(r.status === 200 && r.body.user && r.body.user.login === 'localdev', 'me returns the user', r.body);
r = await api('/api/content');
ok(r.body.editor === true, 'the configured editor is recognised');

console.log('\n— progress —');
r = await api('/api/state');
ok(r.status === 200 && r.body.version === 0, 'a new account starts at version 0', r.body);
r = await api('/api/state', { method: 'PUT', body: { baseVersion: 0, data: { done: { ch1: 1 } }, device: 'test' } });
ok(r.status === 200 && r.body.version === 1, 'first write lands at version 1', r.body);
r = await api('/api/state', { method: 'PUT', body: { baseVersion: 0, data: { done: { ch2: 1 } }, device: 'stale' } });
ok(r.status === 409, 'a stale device is refused', r.status);
ok(r.body && r.body.data && r.body.data.done.ch1 === 1, 'the refusal carries the server copy back', r.body && r.body.data);
r = await api('/api/state', { method: 'PUT', body: { baseVersion: 1, data: { done: { ch1: 1, ch2: 1 } }, device: 'test' } });
ok(r.status === 200 && r.body.version === 2, 'the rebased write succeeds');
r = await api('/api/history');
ok(r.status === 200 && r.body.versions.length === 2, 'history has both versions', r.body.versions && r.body.versions.length);
r = await api('/api/restore', { method: 'POST', body: { version: 1 } });
ok(r.status === 200, 'restore accepts an earlier version', r.status);
r = await api('/api/state');
ok(r.body.data.done.ch2 === undefined, 'restore actually rolled the data back', r.body.data);
r = await api('/api/state', { method: 'PUT', headers: { 'x-aifz': '' }, body: { baseVersion: 9, data: {} } });
ok(r.status === 403, 'a progress write without the same-origin header is refused', r.status);
r = await api('/api/state', { headers: { 'x-aifz': '' } });
ok(r.status === 200, 'a read without it still works', r.status);

console.log('\n— editing content —');
r = await api('/api/content');
const items = r.body.content.items.data, iv = r.body.content.items.version;
const edited = JSON.parse(JSON.stringify(items));
edited[0][4] = 'EDITED STEM';
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: iv, data: edited } });
ok(r.status === 200 && r.body.version === iv + 1, 'an editor can publish questions', r.body);
r = await api('/api/content?kind=items');
ok(r.body.content.items.data[0][4] === 'EDITED STEM', 'the edit is what comes back');
ok(r.body.content.items.updatedBy === 'localdev', 'the row records who wrote it', r.body.content.items.updatedBy);
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: iv, data: edited } });
ok(r.status === 409, 'publishing on a stale version is refused', r.status);

console.log('\n— validation —');
const bad = JSON.parse(JSON.stringify(items));
bad[0][6] = 99;
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: iv + 1, data: bad } });
ok(r.status === 422 && /answer must index/.test(r.body.detail || ''), 'an out-of-range answer is rejected', r.body);
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: iv + 1, data: [] } });
ok(r.status === 422, 'an empty question bank is rejected', r.status);
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: iv + 1, data: items } });
ok(r.status === 200, 'the untouched built-in bank still validates', r.body && r.body.detail);
r = await api('/api/content', { method: 'PUT', body: { kind: 'chapters', baseVersion: 1, data: (await api('/api/content?kind=chapters')).body.content.chapters.data } });
ok(r.status === 200, 'the untouched built-in chapters still validate', r.body && r.body.detail);
r = await api('/api/content', { method: 'PUT', body: { kind: 'nope', baseVersion: 1, data: [] } });
ok(r.status === 400, 'an unknown kind is refused', r.status);
r = await api('/api/content', { method: 'PUT', headers: { 'x-aifz': '' },
  body: { kind: 'items', baseVersion: 99, data: items } });
ok(r.status === 403, 'a content write without the same-origin header is refused', r.status);

console.log('\n— cross-references —');
const orph = JSON.parse(JSON.stringify(items));
orph[0][1] = 'S99';
const cv = (await api('/api/content?kind=items')).body.content.items.version;
r = await api('/api/content', { method: 'PUT', body: { kind: 'items', baseVersion: cv, data: orph } });
ok(r.status === 200 && (r.body.warnings || []).some(w => /S99/.test(w)), 'a question pointing at a missing skill warns', r.body.warnings);

console.log('\n— reset —');
r = await api('/api/content?reset=items', { method: 'POST' });
ok(r.status === 200, 'reset succeeds', r.status);
r = await api('/api/content?kind=items');
ok(r.body.content.items.data[0][4] !== 'EDITED STEM', 'reset restored the built-in text');
/* A reset hands the kind back to the build, so the live row goes back to
   being built-in-owned and later deploys may update it again — which is the
   whole point of resetting. Who asked for it is recorded in the history entry
   (there is no endpoint that reads content history, so the seeding suite
   covers the ownership rule end to end instead). */
ok(r.body.content.items.updatedBy === 'built-in',
   'reset hands the kind back to the build', r.body.content.items.updatedBy);

console.log('\n— plan tracker —');
{
  const saved = cookie;
  cookie = '';
  r = await api('/api/plan');
  ok(r.status === 401, 'the tracker needs a session', r.status);
  r = await api('/api/plan-status?id=' + 'a'.repeat(32));
  ok(r.status === 404, 'an unknown status link is a 404', r.status);
  cookie = saved;
  r = await api('/api/plan');
  ok(r.status === 200 && Object.keys(r.body.data.weeks).length === 0 && r.body.shareId === null, 'a new tracker is empty and unshared', r.body);
  r = await api('/api/plan', { method: 'PUT', body: { data: { weeks: {
    1: { link: 'https://github.com/x/y', note: 'done', u: 100 },
    2: { note: 'week two', u: 100 }, 99: { note: 'x', u: 1 } }, gates: { M1: { passed: true, u: 5 }, X9: { passed: true } },
    parking: { p1: { text: 'learn Rust', u: 3 } } } } });
  ok(r.status === 200 && r.body.data.weeks[1].note === 'done' && !r.body.data.weeks[99] && !r.body.data.gates.X9, 'saves the plan notes and drops unknown weeks and gates', r.body);
  r = await api('/api/plan', { method: 'PUT', body: { data: { weeks: { 1: { note: 'older', u: 50 }, 3: { note: 'three', u: 60 } } } } });
  ok(r.body.data.weeks[1].note === 'done', 'an older edit does not overwrite a newer one', r.body.data.weeks[1]);
  ok(r.body.data.weeks[3].note === 'three' && r.body.data.weeks[2].note === 'week two', 'edits to different weeks are both kept');
  r = await api('/api/plan', { method: 'PUT', body: { data: { weeks: { 1: { note: 'newer', link: 'javascript:alert(1)', u: 500 } } } } });
  ok(r.body.data.weeks[1].note === 'newer' && r.body.data.weeks[1].link === '', 'a newer edit wins and a non-http link is dropped', r.body.data.weeks[1]);
  r = await api('/api/plan', { method: 'POST', body: { share: true } });
  const sid = r.body.shareId;
  ok(r.status === 200 && /^[0-9a-f]{32}$/.test(sid), 'sharing creates an unguessable id', r.body);
  cookie = '';
  r = await api('/api/plan-status?id=' + sid);
  ok(r.status === 200 && r.body.of === 26 && r.body.steps > 100 && !('link' in r.body) && !JSON.stringify(r.body).includes('learn Rust'), 'the status link shows route counts only', r.body);
  cookie = saved;
  r = await api('/api/plan', { method: 'POST', body: { share: false } });
  cookie = '';
  r = await api('/api/plan-status?id=' + sid);
  ok(r.status === 404, 'turning sharing off kills the old link', r.status);
  cookie = saved;
}

console.log('\n— daily reminder —');
{
  ok(MESSAGES.length === 30 && MESSAGES.every((m, i) => m.startsWith('Day ' + (i + 1) + '. ')), 'there are thirty messages, numbered in order');
  ok(START === '2026-10-19' && istParts(Date.parse('2026-10-19T06:30:00Z')).minutes === 720, '06:30 UTC is 12:00 in India');
  {
    const V = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
    const hours = (V.crons || []).filter(c => c.path.startsWith('/api/nudge?run=1')).map(c => +c.schedule.split(' ')[1]);
    ok(hours.includes(6), 'Vercel’s scheduler triggers the reminder in hour 06 UTC', JSON.stringify(V.crons));
    const inWin = iso => { const m = istParts(Date.parse(iso)).minutes; return m >= SEND_FROM_MINUTE && m <= SEND_UNTIL_MINUTE; };
    ok(inWin('2026-10-21T06:00:00Z') && inWin('2026-10-21T06:59:00Z'), 'anywhere in that hour (11:30–12:29 in India) is inside the send window');
    ok(inWin('2026-10-20T11:57:40Z'), 'and a GitHub backup that runs hours late still sends the same day');
  }
  ok(messageFor('2026-10-19').n === 1 && messageFor('2026-10-23').n === 5 && messageFor('2026-10-26').n === 6, 'weekdays count up from day 1, skipping weekends');
  ok(weekdaysSince(START, '2026-10-25') === 5 && messageFor('2026-10-24').n === 5, 'a weekend repeats the last weekday');
  ok(messageFor('2026-11-27').n === 30 && messageFor('2026-11-30').n === 1, 'after thirty weekdays it starts again');
  ok(messageFor('2026-10-19').title === 'Day 1 of 30: your ten minutes' && !messageFor('2026-10-19').body.startsWith('Day'), 'title and body are split');
  ok(MESSAGES.every(m => !/Chapter \d|chapter \d/.test(m)), 'the firm lines never name a chapter, so they cannot disagree with the route');
  {
    const fresh = messageFor('2026-10-19', {});
    ok(fresh.url === '/#/ch/ch0' && /Chapter 0/.test(fresh.body), 'signed in and new: the task is the route’s first step, Start here', fresh);
    const behind = messageFor('2026-11-03', { done: { ch0: 1 }, read: { 'preface.html': 1 } });
    ok(behind.url === '/book/01-the-number-in-the-chat.html' && /The Number in the Chat/.test(behind.body), 'behind the calendar: the task is the next open step, not the calendar’s', behind);
    ok(messageFor('2026-11-03', { lang: 'hi', done: { ch0: 1 }, read: { 'preface.html': 1 } }).url.startsWith('/book/hi/'), 'and it opens the Hinglish book for a Hinglish reader');
    const half = messageFor('2026-11-03', { steps: Object.fromEntries(STEPS.slice(0, 12).map(x => [x.id, 1])), done: { ch0: 1 }, read: Object.fromEntries(STEPS.slice(0, 12).filter(x => x.book).map(x => [x.book, 1])) });
    ok(/second half/.test(half.body) || /first half/.test(half.body) || /Today:/.test(half.body), 'a half chapter is named as a half', half.body);
    const all = { done: {}, read: {}, steps: {} };
    STEPS.forEach(x => { if (x.kind === 'chapter') all.done[x.ch] = 1; else if (x.kind === 'read') all.read[x.book] = 1; else all.steps[x.id] = 1; });
    ok(STEPS.every(x => stepDone(x, all)) && /Every step on the route is done/.test(messageFor('2026-12-01', all).body), 'with every step done, it says so');
    const anon = messageFor('2026-11-03');
    ok(anon.url === '/#/start' && /This week: Meet the machine/.test(anon.body), 'signed out: the calendar names the week, the site names the step', anon);
  }
  ok(allowedEndpoint('https://fcm.googleapis.com/fcm/send/abc') && allowedEndpoint('https://updates.push.services.mozilla.com/wpush/v2/x') &&
     allowedEndpoint('https://web.push.apple.com/abc') && !allowedEndpoint('http://fcm.googleapis.com/x') &&
     !allowedEndpoint('https://evil.example.com/fcm.googleapis.com') && !allowedEndpoint('https://127.0.0.1/x') && !allowedEndpoint('nonsense'),
     'only real push services are accepted as destinations');
  {
    const k = makeKeys(), h = vapidHeader(k, 'https://fcm.googleapis.com/fcm/send/abc', 1700000000000);
    const m = /^vapid t=([\w-]+)\.([\w-]+)\.([\w-]+), k=([\w-]+)$/.exec(h);
    ok(!!m && m[4] === k.pub && Buffer.from(m[4], 'base64url').length === 65, 'the signing header has a 65-byte public key');
    const pubKey = crypto.createPublicKey({ key: { kty: 'EC', crv: 'P-256', x: Buffer.from(m[4], 'base64url').subarray(1, 33).toString('base64url'), y: Buffer.from(m[4], 'base64url').subarray(33).toString('base64url') }, format: 'jwk' });
    ok(crypto.verify('sha256', Buffer.from(m[1] + '.' + m[2]), { key: pubKey, dsaEncoding: 'ieee-p1363' }, Buffer.from(m[3], 'base64url')), 'the signature verifies against that key');
    ok(JSON.parse(Buffer.from(m[2], 'base64url')).aud === 'https://fcm.googleapis.com', 'and names the push service it is for');
  }
  const saved = cookie;
  cookie = '';
  r = await api('/api/nudge?today=1');
  ok(r.status === 200 && /^Day \d+ of 30/.test(r.body.title) && typeof r.body.url === 'string' && r.body.url.startsWith('/'), 'today’s message is public', r.body);
  r = await api('/api/nudge');
  ok(r.status === 200 && r.body.key.length === 87 && r.body.devices === 0 && r.body.signedIn === false, 'the public key is available signed out', r.body);
  r = await api('/api/nudge', { method: 'POST', body: { test: true } });
  ok(r.status === 401, 'turning a device on needs a session', r.status);
  cookie = saved;
  r = await api('/api/nudge', { method: 'POST', body: { subscription: { endpoint: 'https://evil.example.com/x' } } });
  ok(r.status === 400, 'a destination that is not a push service is refused', r.status);
  r = await api('/api/nudge', { method: 'POST', body: { subscription: { endpoint: 'https://fcm.googleapis.com/fcm/send/test-device-1' } } });
  ok(r.status === 200, 'a device can be added', r.status);
  r = await api('/api/nudge');
  ok(r.body.devices === 1 && r.body.signedIn === true, 'and is counted for this person', r.body);
  r = await api('/api/nudge?endpoint=' + encodeURIComponent('https://fcm.googleapis.com/fcm/send/test-device-1'));
  ok(r.body.known === true, 'the bell can ask whether its own device is on file', r.body);
  r = await api('/api/nudge', { method: 'POST', headers: { 'x-aifz': '' }, body: { subscription: { endpoint: 'https://fcm.googleapis.com/fcm/send/x' } } });
  ok(r.status === 403, 'a write without the site header is refused (so every page must send it)', r.status);
  r = await api('/api/nudge', { method: 'POST', body: { unsubscribe: 'https://fcm.googleapis.com/fcm/send/test-device-1' } });
  r = await api('/api/nudge');
  ok(r.body.devices === 0, 'and can be removed', r.body);
  r = await api('/api/nudge?run=1');
  ok(r.status === 200 && ('sent' in r.body), 'the scheduled run answers without sending when nobody has asked', r.body);
}

console.log('\n— signing out —');
await api('/api/auth/logout', { method: 'POST' });
r = await api('/api/me');
ok(r.body.user === null, 'the session is gone after logout', r.body);
r = await api('/api/state');
ok(r.status === 401, 'progress is unreachable again', r.status);

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);
