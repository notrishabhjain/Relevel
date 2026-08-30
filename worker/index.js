/* AI From Zero — backend.
   A Cloudflare Worker that serves the app and gives it an account, so progress
   lives on the server and any signed-in device sees the same record.

   Routes
     GET  /api/health          liveness + whether sign-in is configured
     GET  /api/auth/login      start GitHub OAuth
     GET  /api/auth/callback   finish it, set a session cookie
     POST /api/auth/logout     drop this session
     GET  /api/me              who am I
     GET  /api/state           read my progress  -> {version, updatedAt, data}
     PUT  /api/state           write it, guarded by the version I read
     GET  /api/history         recent saved versions (recovery)
     POST /api/restore         roll back to one of them
   Everything else is served from the static assets binding. */

const COOKIE = 'aifz_sess';
const OAUTH_STATE_COOKIE = 'aifz_oauth';
const SESSION_DAYS = 90;
const MAX_STATE_BYTES = 2_000_000;     // ~2 MB; real records are tens of KB
const HISTORY_KEEP = 20;

/* ---------- small helpers ---------- */
const now = () => Date.now();
const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8',
               'cache-control': 'no-store', ...headers }
  });

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function randomToken() {
  const a = new Uint8Array(32);
  crypto.getRandomValues(a);
  return [...a].map(b => b.toString(16).padStart(2, '0')).join('');
}
function readCookie(request, name) {
  const raw = request.headers.get('cookie') || '';
  for (const part of raw.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}
function setCookie(name, value, maxAgeSeconds, url) {
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly${secure}` +
         `; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}
const clearCookie = (name, url) => setCookie(name, '', 0, url);

/* ---------- sessions ---------- */
async function currentUser(request, env) {
  const token = readCookie(request, COOKIE);
  if (!token) return null;
  const hash = await sha256(token);
  const row = await env.DB.prepare(
    `SELECT u.id, u.gh_id, u.login, u.name, u.avatar, s.expires_at
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ?`).bind(hash).first();
  if (!row) return null;
  if (row.expires_at < now()) {
    await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(hash).run();
    return null;
  }
  return row;
}

/* Cross-site requests cannot set this header without a preflight the browser
   will not grant, so it stands in for a CSRF token on state-changing calls. */
function sameOriginWrite(request) {
  if (request.headers.get('x-aifz') !== '1') return false;
  const origin = request.headers.get('origin');
  if (!origin) return true;                    // same-origin fetches may omit it
  try { return new URL(origin).host === new URL(request.url).host; }
  catch { return false; }
}

function allowed(env, login) {
  const list = (env.ALLOWED_LOGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  if (!list.length) return true;               // unset = open to any GitHub user
  return list.some(l => l.toLowerCase() === String(login).toLowerCase());
}

/* ---------- OAuth ---------- */
async function startLogin(request, env, url) {
  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET)
    return json({ error: 'sign_in_not_configured' }, 501);
  const state = randomToken();
  const redirect = `${url.origin}/api/auth/callback`;
  const to = new URL('https://github.com/login/oauth/authorize');
  to.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  to.searchParams.set('redirect_uri', redirect);
  to.searchParams.set('scope', 'read:user');
  to.searchParams.set('state', state);
  return new Response(null, {
    status: 302,
    headers: { location: to.toString(),
               'set-cookie': setCookie(OAUTH_STATE_COOKIE, state, 600, url) }
  });
}

async function finishLogin(request, env, url) {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const expected = readCookie(request, OAUTH_STATE_COOKIE);
  const fail = (msg) => new Response(null, {
    status: 302,
    headers: { location: '/#/data?signin=' + encodeURIComponent(msg),
               'set-cookie': clearCookie(OAUTH_STATE_COOKIE, url) }
  });
  if (!code || !state || !expected || state !== expected) return fail('bad_state');

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/auth/callback`
    })
  });
  const tok = await tokenRes.json().catch(() => ({}));
  if (!tok.access_token) return fail('no_token');

  const ghRes = await fetch('https://api.github.com/user', {
    headers: { authorization: `Bearer ${tok.access_token}`,
               accept: 'application/vnd.github+json',
               'user-agent': 'ai-from-zero' }
  });
  if (!ghRes.ok) return fail('profile_failed');
  const gh = await ghRes.json();
  if (!allowed(env, gh.login)) return fail('not_allowed');

  const t = now();
  await env.DB.prepare(
    `INSERT INTO users (gh_id, login, name, avatar, created_at, last_seen)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(gh_id) DO UPDATE SET
       login = excluded.login, name = excluded.name,
       avatar = excluded.avatar, last_seen = excluded.last_seen`
  ).bind(String(gh.id), gh.login, gh.name || null, gh.avatar_url || null, t, t).run();

  const user = await env.DB.prepare('SELECT id FROM users WHERE gh_id = ?')
    .bind(String(gh.id)).first();

  const token = randomToken();
  const expires = t + SESSION_DAYS * 86400_000;
  await env.DB.prepare(
    'INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?,?,?,?)'
  ).bind(await sha256(token), user.id, t, expires).run();

  const headers = new Headers({ location: '/#/data?signin=ok' });
  headers.append('set-cookie', setCookie(COOKIE, token, SESSION_DAYS * 86400, url));
  headers.append('set-cookie', clearCookie(OAUTH_STATE_COOKIE, url));
  return new Response(null, { status: 302, headers });
}

/* ---------- state ---------- */
async function getState(env, user) {
  const row = await env.DB.prepare(
    'SELECT version, updated_at, device, data FROM state WHERE user_id = ?'
  ).bind(user.id).first();
  if (!row) return json({ version: 0, updatedAt: 0, data: null });
  return json({ version: row.version, updatedAt: row.updated_at,
                device: row.device, data: JSON.parse(row.data) });
}

async function putState(request, env, user) {
  let body;
  try { body = await request.json(); }
  catch { return json({ error: 'bad_json' }, 400); }

  const { baseVersion, data, device } = body || {};
  if (typeof baseVersion !== 'number' || !data || typeof data !== 'object')
    return json({ error: 'bad_request' }, 400);

  const serialized = JSON.stringify(data);
  if (serialized.length > MAX_STATE_BYTES)
    return json({ error: 'too_large', limit: MAX_STATE_BYTES }, 413);

  const cur = await env.DB.prepare('SELECT version, updated_at, data FROM state WHERE user_id = ?')
    .bind(user.id).first();
  const version = cur ? cur.version : 0;

  /* Optimistic concurrency: the client tells us which version it edited. If the
     server has moved on, another device wrote first — refuse and hand back the
     current copy so the client can merge or ask, rather than clobbering. */
  if (baseVersion !== version)
    return json({ error: 'version_conflict', version,
                  updatedAt: cur ? cur.updated_at : 0,
                  data: cur ? JSON.parse(cur.data) : null }, 409);

  const next = version + 1;
  const t = now();
  const dev = typeof device === 'string' ? device.slice(0, 60) : null;

  if (cur) {
    await env.DB.prepare(
      'UPDATE state SET version = ?, updated_at = ?, device = ?, data = ? WHERE user_id = ?'
    ).bind(next, t, dev, serialized, user.id).run();
  } else {
    await env.DB.prepare(
      'INSERT INTO state (user_id, version, updated_at, device, data) VALUES (?,?,?,?,?)'
    ).bind(user.id, next, t, dev, serialized).run();
  }

  await env.DB.prepare(
    'INSERT INTO state_history (user_id, version, saved_at, device, data) VALUES (?,?,?,?,?)'
  ).bind(user.id, next, t, dev, serialized).run();
  await env.DB.prepare(
    `DELETE FROM state_history WHERE user_id = ? AND id NOT IN
       (SELECT id FROM state_history WHERE user_id = ? ORDER BY id DESC LIMIT ?)`
  ).bind(user.id, user.id, HISTORY_KEEP).run();

  return json({ version: next, updatedAt: t });
}

async function history(env, user) {
  const rows = await env.DB.prepare(
    `SELECT version, saved_at, device, length(data) AS bytes
       FROM state_history WHERE user_id = ? ORDER BY id DESC LIMIT ?`
  ).bind(user.id, HISTORY_KEEP).all();
  return json({ versions: rows.results || [] });
}

async function restore(request, env, user) {
  let body; try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const v = body && body.version;
  if (typeof v !== 'number') return json({ error: 'bad_request' }, 400);
  const row = await env.DB.prepare(
    'SELECT data FROM state_history WHERE user_id = ? AND version = ?'
  ).bind(user.id, v).first();
  if (!row) return json({ error: 'not_found' }, 404);

  const cur = await env.DB.prepare('SELECT version FROM state WHERE user_id = ?')
    .bind(user.id).first();
  const next = (cur ? cur.version : 0) + 1;
  const t = now();
  await env.DB.prepare(
    'UPDATE state SET version = ?, updated_at = ?, device = ?, data = ? WHERE user_id = ?'
  ).bind(next, t, 'restore v' + v, row.data, user.id).run();
  await env.DB.prepare(
    'INSERT INTO state_history (user_id, version, saved_at, device, data) VALUES (?,?,?,?,?)'
  ).bind(user.id, next, t, 'restore v' + v, row.data).run();
  return json({ version: next, updatedAt: t, data: JSON.parse(row.data) });
}

/* ---------- router ---------- */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;

    if (!p.startsWith('/api/')) {
      if (env.ASSETS) return env.ASSETS.fetch(request);
      return new Response('Not found', { status: 404 });
    }

    try {
      if (p === '/api/health')
        return json({ ok: true, signIn: !!(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) });

      if (p === '/api/auth/login')    return startLogin(request, env, url);
      if (p === '/api/auth/callback') return finishLogin(request, env, url);

      if (p === '/api/auth/logout') {
        if (request.method !== 'POST') return json({ error: 'method' }, 405);
        const token = readCookie(request, COOKIE);
        if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?')
          .bind(await sha256(token)).run();
        return json({ ok: true }, 200, { 'set-cookie': clearCookie(COOKIE, url) });
      }

      const user = await currentUser(request, env);

      if (p === '/api/me') {
        if (!user) return json({ user: null }, 200);
        return json({ user: { login: user.login, name: user.name, avatar: user.avatar } });
      }

      if (!user) return json({ error: 'unauthorized' }, 401);

      if (p === '/api/state' && request.method === 'GET')  return getState(env, user);
      if (p === '/api/state' && request.method === 'PUT') {
        if (!sameOriginWrite(request)) return json({ error: 'forbidden' }, 403);
        return putState(request, env, user);
      }
      if (p === '/api/history' && request.method === 'GET') return history(env, user);
      if (p === '/api/restore' && request.method === 'POST') {
        if (!sameOriginWrite(request)) return json({ error: 'forbidden' }, 403);
        return restore(request, env, user);
      }
      return json({ error: 'not_found' }, 404);
    } catch (err) {
      /* Never leak internals to the page; the message goes to the Worker log. */
      console.error('api error', p, err && err.message);
      return json({ error: 'server_error' }, 500);
    }
  }
};
