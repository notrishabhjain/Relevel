/* Database layer.

   Any Postgres works — Neon, Supabase, Vercel Postgres, Railway — because the
   only thing this needs is a DATABASE_URL. The schema creates itself on first
   use and content is seeded from the build output, so setting the app up never
   requires a terminal: add the database in the dashboard and open the site. */

import pg from 'pg';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const CONTENT_KINDS = ['chapters', 'skills', 'items', 'exercises', 'processes', 'reference',
  'hinglish'];

let pool = null;
let readyPromise = null;

export function configured() {
  return !!(pool || connectionString());
}
function connectionString() {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL ||
         process.env.POSTGRES_PRISMA_URL || process.env.NEON_DATABASE_URL || '';
}

function getPool() {
  if (pool) return pool;
  const cs = connectionString();
  if (!cs) throw new Error('no_database');
  pool = new pg.Pool({
    connectionString: cs,
    /* Managed Postgres uses certificates a serverless runtime does not carry a
       root for; the connection is still TLS-encrypted. */
    ssl: /sslmode=disable/.test(cs) ? false : { rejectUnauthorized: false },
    max: 1,                       // one socket per warm function instance
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 8_000
  });
  return pool;
}

/* A seam for local testing: the harness in tools/ swaps in an in-process
   Postgres so the API can be exercised without a server to install. Production
   never calls this and goes through getPool() above. */
export function setPool(p) { pool = p; readyPromise = null; defaultsCache = null; }

export async function query(sql, params) {
  const res = await getPool().query(sql, params);
  return res.rows;
}

/* ---------- schema ---------- */
const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  gh_id       TEXT NOT NULL UNIQUE,
  login       TEXT NOT NULL,
  name        TEXT,
  avatar      TEXT,
  created_at  BIGINT NOT NULL,
  last_seen   BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  BIGINT NOT NULL,
  expires_at  BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE TABLE IF NOT EXISTS progress (
  user_id     INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  version     INTEGER NOT NULL DEFAULT 0,
  updated_at  BIGINT NOT NULL,
  device      TEXT,
  data        JSONB NOT NULL
);
CREATE TABLE IF NOT EXISTS progress_history (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  version     INTEGER NOT NULL,
  saved_at    BIGINT NOT NULL,
  device      TEXT,
  data        JSONB NOT NULL
);
CREATE INDEX IF NOT EXISTS ph_user ON progress_history(user_id, id DESC);
CREATE TABLE IF NOT EXISTS content (
  kind        TEXT PRIMARY KEY,
  version     INTEGER NOT NULL DEFAULT 1,
  updated_at  BIGINT NOT NULL,
  updated_by  TEXT,
  data        JSONB NOT NULL
);
/* Which build's copy a still-unedited row came from, so a later deploy can
   tell whether it is carrying newer content than the database holds. */
ALTER TABLE content ADD COLUMN IF NOT EXISTS defaults_hash TEXT;
CREATE TABLE IF NOT EXISTS content_history (
  id          SERIAL PRIMARY KEY,
  kind        TEXT NOT NULL,
  version     INTEGER NOT NULL,
  saved_at    BIGINT NOT NULL,
  updated_by  TEXT,
  data        JSONB NOT NULL
);
CREATE INDEX IF NOT EXISTS ch_kind ON content_history(kind, id DESC);
`;

let defaultsCache = null;
export async function defaults() {
  if (defaultsCache) return defaultsCache;
  const here = path.dirname(fileURLToPath(import.meta.url));
  /* the file is emitted by build.js; try the paths a bundler may leave it at */
  const tries = [
    path.join(here, '../../content/defaults.json'),
    path.join(process.cwd(), 'content/defaults.json')
  ];
  for (const f of tries) {
    try { defaultsCache = JSON.parse(await readFile(f, 'utf8')); return defaultsCache; }
    catch (e) { /* next */ }
  }
  throw new Error('content defaults missing — run the build');
}

/* Runs on the first request of a cold instance. Cheap and idempotent.

   Seeding used to insert only the kinds the database did not have at all,
   which quietly meant the opposite of what it looked like: once a kind
   existed, no later deploy could ever change it. Ship a rewritten chapter and
   the database kept serving the old one — for as long as nobody noticed.

   So a row is now in one of two states. Nobody has published over it
   (updated_by is 'built-in'), in which case it follows the build and is
   refreshed whenever the shipped copy changes. Or somebody has edited it in
   the Studio, in which case their version wins and the build never touches it
   again — that is the whole point of editing content in the portal, and the
   per-kind reset is how you hand a kind back to the build. */
export function ready() {
  if (readyPromise) return readyPromise;
  readyPromise = (async () => {
    await getPool().query(SCHEMA);
    const d = await defaults();
    const rows = await query('SELECT kind, version, updated_by, defaults_hash FROM content');
    const have = new Map(rows.map(r => [r.kind, r]));
    const t = Date.now();
    for (const kind of CONTENT_KINDS) {
      if (d[kind] === undefined) continue;
      const s = JSON.stringify(d[kind]);
      const hash = createHash('sha1').update(s).digest('hex');
      const row = have.get(kind);
      if (!row) {
        await query(
          `INSERT INTO content (kind, version, updated_at, updated_by, data, defaults_hash)
           VALUES ($1, 1, $2, 'built-in', $3, $4) ON CONFLICT (kind) DO NOTHING`,
          [kind, t, s, hash]);
        continue;
      }
      if (row.updated_by !== 'built-in') continue;       // a person owns this now
      if (row.defaults_hash === hash) continue;          // already the shipped copy
      /* A null hash means the row predates this column: it is still marked
         built-in, so nobody has edited it and it is safe — and overdue — to
         bring up to the build. */
      const next = row.version + 1;
      await query(
        `INSERT INTO content_history (kind, version, saved_at, updated_by, data)
         SELECT kind, version, $2, updated_by, data FROM content WHERE kind=$1`, [kind, t]);
      await query(
        `UPDATE content SET version=$1, updated_at=$2, updated_by='built-in',
                data=$3, defaults_hash=$4 WHERE kind=$5`,
        [next, t, s, hash, kind]);
    }
  })().catch(err => { readyPromise = null; throw err; });
  return readyPromise;
}

export { CONTENT_KINDS };

/* ---------- responses ---------- */
export function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(body));
}
export async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  return JSON.parse(raw);
}
