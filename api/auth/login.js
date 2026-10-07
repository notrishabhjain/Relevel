import { send } from '../_lib/db.js';
import { OAUTH_COOKIE, cookieHeader, randomToken, origin } from '../_lib/auth.js';
/* Only same-site paths: a sign-in link must not become an open redirect. */
const safeNext = n => (typeof n === 'string' && /^\/[A-Za-z0-9\/_.-]*$/.test(n) && !n.startsWith('//') ? n : '');
export default async function handler(req, res) {
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET)
    return send(res, 501, { error: 'sign_in_not_configured' });
  const state = randomToken();
  const to = new URL('https://github.com/login/oauth/authorize');
  to.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
  to.searchParams.set('redirect_uri', `${origin(req)}/api/auth/callback`);
  to.searchParams.set('scope', 'read:user');
  to.searchParams.set('state', state);
  res.statusCode = 302;
  const next = safeNext(new URL(req.url, origin(req)).searchParams.get('next'));
  res.setHeader('set-cookie', [cookieHeader(OAUTH_COOKIE, state, 600, req)]
    .concat(next ? [cookieHeader('aifz_next', next, 600, req)] : []));
  res.setHeader('location', to.toString());
  res.end();
}
