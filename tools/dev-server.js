#!/usr/bin/env node
/* A local stand-in for the hosted deployment.

   Serves dist/site and routes /api/* into the same handler files Vercel runs,
   backed by PGlite — a real Postgres compiled to WebAssembly that runs inside
   this process. That means the API, the schema, the seeding and the version
   conflicts can all be exercised without installing a database.

   Not used in production, and not deployed. `node tools/dev-server.js`. */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { PGlite } from '@electric-sql/pglite';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const PORT = Number(process.env.PORT || 8788);
const SITE = path.join(ROOT, 'dist/site');

const db = new PGlite(process.env.PGLITE_DIR || undefined);
/* PGlite speaks the same SQL but exposes a slightly different object. The one
   real difference: its parameterised query runs a single statement, so the
   schema — several statements in one string — goes through exec instead, which
   is what node-postgres does for an unparameterised query anyway. */
const pool = {
  async query(sql, params) {
    if (params && params.length) return db.query(sql, params);
    const out = await db.exec(sql);
    return out[out.length - 1] || { rows: [] };
  }
};

const dbmod = await import('../api/_lib/db.js');
dbmod.setPool(pool);
const auth = await import('../api/_lib/auth.js');

const routes = {
  '/api/health':        (await import('../api/health.js')).default,
  '/api/me':            (await import('../api/me.js')).default,
  '/api/state':         (await import('../api/state.js')).default,
  '/api/history':       (await import('../api/history.js')).default,
  '/api/restore':       (await import('../api/restore.js')).default,
  '/api/content':       (await import('../api/content.js')).default,
  '/api/auth/login':    (await import('../api/auth/login.js')).default,
  '/api/auth/callback': (await import('../api/auth/callback.js')).default,
  '/api/auth/logout':   (await import('../api/auth/logout.js')).default
};

/* Stands in for the GitHub round trip, which cannot happen from here. Mints a
   real session row through the same code path a real callback would. */
async function devLogin(req, res, url) {
  await dbmod.ready();
  const login = url.searchParams.get('login') || 'localdev';
  const now = Date.now();
  const rows = await dbmod.query(
    `INSERT INTO users (gh_id, login, name, avatar, created_at, last_seen)
     VALUES ($1,$2,$3,'',$4,$4)
     ON CONFLICT (gh_id) DO UPDATE SET login=EXCLUDED.login, last_seen=EXCLUDED.last_seen
     RETURNING id`, ['dev:' + login, login, login, now]);
  const token = auth.randomToken();
  await dbmod.query(
    'INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES ($1,$2,$3,$4)',
    [auth.sha256(token), rows[0].id, now, now + 86400e3]);
  res.setHeader('set-cookie', auth.cookieHeader(auth.COOKIE, token, 86400, req));
  res.statusCode = 302;
  res.setHeader('location', url.searchParams.get('next') || '/');
  res.end();
}

const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml',
  '.png':'image/png', '.ico':'image/x-icon',
  '.webmanifest':'application/manifest+json' };

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost:' + PORT);
  try {
    if (url.pathname === '/api/dev/login') return await devLogin(req, res, url);
    const h = routes[url.pathname];
    if (h) return await h(req, res);
    if (url.pathname.startsWith('/api/')) { res.statusCode = 404; return res.end('{}'); }

    let f = path.join(SITE, url.pathname === '/' ? 'index.html' : url.pathname.slice(1));
    if (!f.startsWith(SITE)) { res.statusCode = 403; return res.end('no'); }
    if (!fs.existsSync(f)) f = path.join(SITE, 'index.html');
    res.setHeader('content-type', MIME[path.extname(f)] || 'application/octet-stream');
    res.setHeader('cache-control', 'no-store');
    res.end(fs.readFileSync(f));
  } catch (err) {
    console.error(req.method, url.pathname, err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'dev_server', detail: String(err && err.message) }));
  }
}).listen(PORT, () => console.log('dev server on http://localhost:' + PORT));
