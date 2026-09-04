/* Exercises the API against the dev server. `node tools/api-test.mjs` */
import { readFileSync } from 'node:fs';
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

console.log('\n— signing out —');
await api('/api/auth/logout', { method: 'POST' });
r = await api('/api/me');
ok(r.body.user === null, 'the session is gone after logout', r.body);
r = await api('/api/state');
ok(r.status === 401, 'progress is unreachable again', r.status);

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);
