#!/usr/bin/env node
/* The whole test suite. Each suite gets its own dev server on a free port,
   backed by a fresh in-memory Postgres, so version numbers and seeded content
   are the same whether you run one suite or both, and in any order.

   `node tools/test.mjs`  |  `node tools/test.mjs api`  |  `... browser` */

import { spawn } from 'node:child_process';
import net from 'node:net';

const freePort = () => new Promise(res => {
  const s = net.createServer();
  s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => res(p)); });
});

async function withServer(fn) {
  const port = await freePort();
  const base = 'http://127.0.0.1:' + port;
  const env = { ...process.env, PORT: String(port), CONTENT_EDITORS: 'localdev', BASE: base };
  delete env.PGLITE_DIR;                       // always a fresh database
  const server = spawn(process.execPath, ['tools/dev-server.js'],
    { env, stdio: ['ignore', 'ignore', 'inherit'] });
  try {
    for (let i = 0; ; i++) {
      try {
        const j = await (await fetch(base + '/api/health')).json();
        if (j.dbReady) break;
        if (i > 60) throw new Error('database never became ready: ' + JSON.stringify(j));
      } catch (e) {
        if (i > 60) throw e;
        await new Promise(r => setTimeout(r, 500));
      }
    }
    return await fn(env);
  } finally { server.kill('SIGKILL'); }
}

/* The curriculum is data, and its failures are silent — check it before
   spending two minutes booting browsers. */
{
  const code = await new Promise(res =>
    spawn(process.execPath, ['tools/content-check.mjs'], { stdio: 'inherit' }).on('exit', res));
  if (code) { console.error('\ncontent check failed\n'); process.exit(1); }
}

const only = process.argv[2];
const suites = [['api', 'tools/api-test.mjs'], ['browser', 'tools/browser-test.mjs']]
  .filter(([n]) => !only || n === only);
if (!suites.length) { console.error('unknown suite: ' + only); process.exit(2); }

let failed = 0;
for (const [name, file] of suites) {
  console.log('\n════ ' + name + ' ════');
  const code = await withServer(env => new Promise(res =>
    spawn(process.execPath, [file], { env, stdio: 'inherit' }).on('exit', res)));
  if (code) failed++;
}
console.log(failed ? '\n' + failed + ' suite(s) failed\n' : '\nall suites passed\n');
process.exit(failed ? 1 : 0);
