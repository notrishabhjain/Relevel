#!/usr/bin/env node
/* What a deploy does to a database that already exists.

   This is the suite that would have caught the bug it is named for: seeding
   only inserted kinds the database was missing, so once a kind existed no
   later deploy could change it. Rewritten chapters shipped, CI was green, and
   the live app kept serving the copy it was seeded with months earlier.

   Nothing here needs a server. It boots api/_lib/db.js against one in-process
   Postgres the way a cold instance would, twice, with a different build's
   content each time.

   `node tools/seed-test.mjs` — run by the test suite and by CI. */

import { PGlite } from '@electric-sql/pglite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const LIVE = path.join(ROOT, 'content/defaults.json');
const shipped = fs.readFileSync(LIVE, 'utf8');

let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? (pass++, console.log('  ok  ', m))
  : (fail++, console.log('  FAIL', m, extra ?? '')); };

const pg = new PGlite();
const pool = { async query(sql, params) {
  if (params && params.length) return pg.query(sql, params);
  const out = await pg.exec(sql); return out[out.length - 1] || { rows: [] }; } };

/* A cold instance: a module registry of its own, so ready() and the defaults
   cache both start from nothing, exactly as on a newly deployed build. */
async function deploy(content) {
  fs.writeFileSync(LIVE, JSON.stringify(content));
  const db = await import('../api/_lib/db.js?v=' + Math.random());
  db.setPool(pool);
  await db.ready();
  return db;
}
const row = async kind => (await pool.query(
  'SELECT kind, version, updated_by, data FROM content WHERE kind=$1', [kind])).rows[0];
const title = r => r.data.find(c => c.id === 'ch1').title;

try {
  const now = JSON.parse(shipped);
  /* the build that seeded the database first: an older chapter, no Hinglish */
  const before = JSON.parse(shipped);
  delete before.hinglish;
  before.chapters = before.chapters.map(c =>
    c.id === 'ch1' ? { ...c, title: 'A TITLE FROM AN OLDER BUILD' } : c);

  console.log('\n— a first deploy seeds an empty database —');
  await deploy(before);
  ok(title(await row('chapters')) === 'A TITLE FROM AN OLDER BUILD',
     'the chapters it shipped are what the database holds');
  ok(!(await row('hinglish')), 'a kind that build did not have is simply absent');

  console.log('\n— a later deploy carrying new content —');
  await deploy(now);
  const ch = await row('chapters');
  ok(title(ch) === now.chapters.find(c => c.id === 'ch1').title,
     'the rewritten chapter reaches the database', title(ch));
  ok(ch.version === 2 && ch.updated_by === 'built-in',
     'as a new version, still owned by the build', ch.version + '/' + ch.updated_by);
  ok((await pool.query(
     "SELECT count(*)::int n FROM content_history WHERE kind='chapters'")).rows[0].n === 1,
     'and the copy it replaced is kept in the history');
  const hing = await row('hinglish');
  ok(hing && Object.keys(hing.data).length === Object.keys(now.hinglish).length,
     'a newly added kind is seeded in full',
     hing && Object.keys(hing.data).length);

  console.log('\n— nothing changes when the same build boots again —');
  await deploy(now);
  ok((await row('chapters')).version === 2, 'the version does not creep on every cold start');

  console.log('\n— an edit made in the Studio outranks the build —');
  const cur = await row('chapters');
  await pool.query(
    `UPDATE content SET version=$1, updated_at=$2, updated_by='someone', data=$3
     WHERE kind='chapters'`,
    [cur.version + 1, Date.now(),
     JSON.stringify(cur.data.map(c => c.id === 'ch1' ? { ...c, title: 'EDITED IN THE PORTAL' } : c))]);
  const newer = JSON.parse(shipped);
  newer.chapters = newer.chapters.map(c =>
    c.id === 'ch1' ? { ...c, title: 'A LATER BUILD STILL' } : c);
  await deploy(newer);
  ok(title(await row('chapters')) === 'EDITED IN THE PORTAL',
     'a published edit survives every deploy after it', title(await row('chapters')));

  console.log('\n— resetting a kind hands it back to the build —');
  const r = await row('chapters');
  await pool.query(
    `UPDATE content SET version=$1, updated_at=$2, updated_by='built-in', data=$3,
            defaults_hash=null WHERE kind='chapters'`,
    [r.version + 1, Date.now(), JSON.stringify(newer.chapters)]);
  await deploy(now);
  ok(title(await row('chapters')) === now.chapters.find(c => c.id === 'ch1').title,
     'and it follows the build again from then on', title(await row('chapters')));
} finally {
  fs.writeFileSync(LIVE, shipped);
}

console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);
