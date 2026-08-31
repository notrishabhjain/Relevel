import { query, ready, configured } from '../_lib/db.js';
import { COOKIE, OAUTH_COOKIE, cookieHeader, clearCookie, readCookie,
         randomToken, sha256, maySignIn, SESSION_DAYS, origin } from '../_lib/auth.js';

export default async function handler(req, res) {
  const url = new URL(req.url, origin(req));
  const bail = (why) => {
    res.statusCode = 302;
    res.setHeader('set-cookie', clearCookie(OAUTH_COOKIE, req));
    res.setHeader('location', '/#/data?signin=' + encodeURIComponent(why));
    res.end();
  };
  try {
    if (!configured()) return bail('no_database');
    await ready();
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const expected = readCookie(req, OAUTH_COOKIE);
    if (!code || !state || !expected || state !== expected) return bail('bad_state');

    const tr = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code, redirect_uri: `${origin(req)}/api/auth/callback` })
    });
    const tok = await tr.json().catch(() => ({}));
    if (!tok.access_token) return bail('no_token');

    const gr = await fetch('https://api.github.com/user', {
      headers: { authorization: `Bearer ${tok.access_token}`,
                 accept: 'application/vnd.github+json', 'user-agent': 'ai-from-zero' } });
    if (!gr.ok) return bail('profile_failed');
    const gh = await gr.json();
    if (!maySignIn(gh.login)) return bail('not_allowed');

    const t = Date.now();
    await query(
      `INSERT INTO users (gh_id, login, name, avatar, created_at, last_seen)
       VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (gh_id) DO UPDATE SET login=EXCLUDED.login, name=EXCLUDED.name,
         avatar=EXCLUDED.avatar, last_seen=EXCLUDED.last_seen`,
      [String(gh.id), gh.login, gh.name || null, gh.avatar_url || null, t, t]);
    const rows = await query('SELECT id FROM users WHERE gh_id = $1', [String(gh.id)]);

    const token = randomToken();
    await query('INSERT INTO sessions (token_hash,user_id,created_at,expires_at) VALUES ($1,$2,$3,$4)',
      [sha256(token), rows[0].id, t, t + SESSION_DAYS * 86400000]);

    res.statusCode = 302;
    res.setHeader('set-cookie', [
      cookieHeader(COOKIE, token, SESSION_DAYS * 86400, req),
      clearCookie(OAUTH_COOKIE, req)
    ]);
    res.setHeader('location', '/#/data?signin=ok');
    res.end();
  } catch (e) {
    console.error('callback', e && e.message);
    bail('server_error');
  }
}
