import { send } from './_lib/db.js';
import { sameOriginWrite, currentUser } from './_lib/auth.js';

/* The relay for the notebook and the playground inside the app.

   The course's code talks to an OpenAI-style API (NVIDIA Build by default).
   A browser cannot call most of those APIs directly: they do not send the
   cross-origin headers a page needs. So the page sends the request here and
   this passes it on, unchanged, to the provider the page names, with the key
   the page sends. Nothing is stored and nothing is logged.

   It is a relay, not an open proxy:
   - only the providers below, and only the three endpoints the course uses;
   - only from this site's own pages (the same check every write here uses);
   - the reader's own key, or, if the deployment set LLM_API_KEY, the site's
     key for a signed-in reader and only for the site's own provider.          */

export const BASES = {
  nvidia: 'https://integrate.api.nvidia.com/v1',
  gemini: 'https://generativelanguage.googleapis.com/v1beta/openai',
  openai: 'https://api.openai.com/v1',
  openrouter: 'https://openrouter.ai/api/v1',
  groq: 'https://api.groq.com/openai/v1'
};
const PATHS = new Set(['chat/completions', 'embeddings', 'models']);
const LIMIT = 4.4 * 1024 * 1024;            // a scanned page as base64 fits; Vercel's cap is 4.5 MB

/* Extra bases for the test suite's fake provider. Never set in production. */
const extra = () => (process.env.LLM_EXTRA_BASES || '').split(',').map(s => s.trim()).filter(Boolean);
export const allowedBase = b => Object.values(BASES).includes(b) || extra().includes(b);
const siteBase = () => (process.env.LLM_BASE || BASES.nvidia).replace(/\/+$/, '');

async function rawBody(req) {
  if (typeof req.body === 'string') return req.body;
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return JSON.stringify(req.body);
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > LIMIT) throw Object.assign(new Error('too_large'), { code: 413 }); chunks.push(c); }
  return Buffer.concat(chunks).toString('utf8');
}

async function signedIn(req) {
  try {
    const { configured, ready } = await import('./_lib/db.js');
    if (!configured()) return null;
    await ready();
    return await currentUser(req);
  } catch { return null; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') return send(res, 405, { error: 'method_not_allowed' });
  if (!sameOriginWrite(req)) return send(res, 403, { error: 'forbidden' });
  const url = new URL(req.url, 'http://local');
  const path = url.searchParams.get('path') || 'chat/completions';
  if (!PATHS.has(path)) return send(res, 400, { error: 'path_not_allowed' });
  const base = String(req.headers['x-llm-base'] || siteBase()).trim().replace(/\/+$/, '');
  if (!allowedBase(base)) return send(res, 400, { error: 'provider_not_allowed', base });

  let auth = String(req.headers.authorization || '').trim();
  if (!/^Bearer\s+\S+/.test(auth)) {
    if (!process.env.LLM_API_KEY) return send(res, 401, { error: 'no_key',
      message: 'No API key was sent. Add yours on the Connect page.' });
    if (base !== siteBase()) return send(res, 401, { error: 'no_key',
      message: 'The site key only works with the site provider. Add your own key for this one.' });
    if (!(await signedIn(req))) return send(res, 401, { error: 'sign_in',
      message: 'Sign in to use the key this site provides, or add your own key.' });
    auth = 'Bearer ' + process.env.LLM_API_KEY;
  }

  let body;
  try { body = req.method === 'POST' ? await rawBody(req) : undefined; }
  catch (e) { return send(res, e.code === 413 ? 413 : 400, { error: e.code === 413 ? 'too_large' : 'bad_body' }); }

  let r;
  try {
    r = await fetch(base + '/' + path, {
      method: req.method,
      headers: { authorization: auth, 'content-type': 'application/json', accept: 'application/json' },
      body,
      signal: AbortSignal.timeout(55000)
    });
  } catch (e) {
    const timeout = e && (e.name === 'TimeoutError' || e.name === 'AbortError');
    return send(res, timeout ? 504 : 502, { error: timeout ? 'upstream_timeout' : 'upstream_unreachable',
      message: timeout ? 'The provider took longer than 55 seconds.' : 'The provider could not be reached.' });
  }
  res.statusCode = r.status;
  res.setHeader('content-type', r.headers.get('content-type') || 'application/json');
  res.setHeader('cache-control', 'no-store');
  /* A streamed answer is passed on as it arrives, so the playground can show
     how long the first words take; anything else is passed on whole. */
  if (r.body && /event-stream/.test(r.headers.get('content-type') || '')) {
    const reader = r.body.getReader();
    for (;;) { const { done, value } = await reader.read(); if (done) break; res.write(Buffer.from(value)); }
    return res.end();
  }
  res.end(await r.text());
}
