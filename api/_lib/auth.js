/* Sessions and authorisation.

   Session tokens are random, stored hashed, and carried in an HttpOnly cookie —
   a leaked database row cannot be replayed as a login. Writes additionally
   require a header that a cross-site page cannot set without a preflight the
   browser will not grant, which stands in for a CSRF token. */

import crypto from 'node:crypto';
import { query, send } from './db.js';

export const COOKIE = 'aifz_sess';
export const OAUTH_COOKIE = 'aifz_oauth';
export const SESSION_DAYS = 90;

export const sha256 = s => crypto.createHash('sha256').update(s).digest('hex');
export const randomToken = () => crypto.randomBytes(32).toString('hex');

export function readCookie(req, name) {
  const raw = req.headers.cookie || '';
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    if (part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1));
  }
  return null;
}
export function cookieHeader(name, value, maxAge, req) {
  const proto = (req.headers['x-forwarded-proto'] || 'http').split(',')[0];
  const secure = proto === 'https' ? '; Secure' : '';
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly${secure}` +
         `; SameSite=Lax; Max-Age=${maxAge}`;
}
export const clearCookie = (name, req) => cookieHeader(name, '', 0, req);

export function origin(req) {
  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0];
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${proto}://${host}`;
}

export async function currentUser(req) {
  const token = readCookie(req, COOKIE);
  if (!token) return null;
  const rows = await query(
    `SELECT u.id, u.gh_id, u.login, u.name, u.avatar, s.expires_at
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = $1`, [sha256(token)]);
  const row = rows[0];
  if (!row) return null;
  if (Number(row.expires_at) < Date.now()) {
    await query('DELETE FROM sessions WHERE token_hash = $1', [sha256(token)]);
    return null;
  }
  return row;
}

function list(name) {
  return (process.env[name] || '').split(',').map(s => s.trim()).filter(Boolean);
}
/* ALLOWED_LOGINS unset means anyone with a GitHub account may keep their own
   record; it never implies edit rights. */
export function maySignIn(login) {
  const l = list('ALLOWED_LOGINS');
  return !l.length || l.some(x => x.toLowerCase() === String(login).toLowerCase());
}
/* Editing the curriculum is separate and defaults to the sign-in list, so a
   single-user deployment is an editor without extra configuration. */
export function isEditor(login) {
  const admins = list('CONTENT_EDITORS');
  const pool = admins.length ? admins : list('ALLOWED_LOGINS');
  if (!pool.length) return false;
  return pool.some(x => x.toLowerCase() === String(login).toLowerCase());
}

export function sameOriginWrite(req) {
  if (req.headers['x-aifz'] !== '1') return false;
  const o = req.headers.origin;
  if (!o) return true;
  try {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return new URL(o).host === host;
  } catch { return false; }
}

/* Wraps a handler: ensures the schema exists, resolves the user, and turns any
   unexpected throw into a 500 without leaking internals to the page. */
export function guard(handler, opts = {}) {
  return async (req, res) => {
    try {
      const { ready, configured } = await import('./db.js');
      if (!configured()) return send(res, 503, { error: 'no_database' });
      await ready();
      const user = await currentUser(req);
      if (opts.auth && !user) return send(res, 401, { error: 'unauthorized' });
      /* Only mutating methods need it, so a GET stays inspectable in a browser. */
      const mutating = req.method !== 'GET' && req.method !== 'HEAD';
      if (opts.write && mutating && !sameOriginWrite(req))
        return send(res, 403, { error: 'forbidden' });
      if (opts.editor && (!user || !isEditor(user.login)))
        return send(res, 403, { error: 'not_an_editor' });
      return await handler(req, res, user);
    } catch (err) {
      console.error('api error', req.url, err && err.message);
      const code = err && err.message === 'no_database' ? 503 : 500;
      return send(res, code, { error: code === 503 ? 'no_database' : 'server_error' });
    }
  };
}
