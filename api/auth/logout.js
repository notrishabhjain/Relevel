import { query, send } from '../_lib/db.js';
import { COOKIE, readCookie, sha256, clearCookie } from '../_lib/auth.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  try {
    const t = readCookie(req, COOKIE);
    if (t) await query('DELETE FROM sessions WHERE token_hash = $1', [sha256(t)]);
  } catch (e) { /* clearing the cookie still signs them out */ }
  res.setHeader('set-cookie', clearCookie(COOKIE, req));
  send(res, 200, { ok: true });
}
