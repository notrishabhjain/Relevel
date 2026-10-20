import { query, send, readJson } from './_lib/db.js';
import { guard } from './_lib/auth.js';
import { allowedEndpoint, istParts, lastRun, messageFor, pushEach, runDaily, vapid } from './_lib/nudge.js';

/* The daily 12:00 reminder.
   GET  ?today=1  the day's message (the service worker asks for it when a push arrives)
   GET  ?run=1    the scheduled send; safe to call many times a day (see runDaily)
   GET            { key, devices, known, last } for the signed-in person (key is public;
                  ?endpoint=… asks whether that device is on file)
   POST { subscription }  remember this device
   POST { unsubscribe: endpoint }  forget it
   POST { test: true }  send to this person's devices now */
export default guard(async (req, res, user) => {
  const q = new URL(req.url, 'http://x').searchParams;

  if (req.method === 'GET') {
    if (q.get('today')) {
      /* The service worker's fetch carries the session cookie, so a signed-in
         person gets the task for the day they are actually on. */
      let st = null;
      if (user) {
        const r = await query('SELECT data FROM progress WHERE user_id = $1', [user.id]).catch(() => []);
        st = r[0] && r[0].data ? (typeof r[0].data === 'string' ? JSON.parse(r[0].data) : r[0].data) : null;
      }
      return send(res, 200, messageFor(istParts().date, st));
    }
    if (q.get('run')) return send(res, 200, await runDaily());
    const keys = await vapid();
    const devices = user ? Number((await query('SELECT COUNT(*) AS n FROM push_subs WHERE user_id=$1', [user.id]))[0].n) : 0;
    /* known: whether this browser's own subscription is on file, so the bell
       can re-save it if the server lost it. */
    const ep = q.get('endpoint');
    const known = user && ep ? (await query('SELECT 1 FROM push_subs WHERE endpoint=$1 AND user_id=$2', [ep, user.id])).length > 0 : null;
    return send(res, 200, { key: keys.pub, devices, signedIn: !!user, known, last: user ? await lastRun() : null });
  }
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  if (!user) return send(res, 401, { error: 'unauthorized' });

  let body;
  try { body = await readJson(req); } catch { return send(res, 400, { error: 'bad_json' }); }
  if (body && body.subscription) {
    const ep = body.subscription.endpoint;
    if (typeof ep !== 'string' || ep.length > 1000 || !allowedEndpoint(ep)) return send(res, 400, { error: 'bad_endpoint' });
    await query(`INSERT INTO push_subs (endpoint, user_id, created_at) VALUES ($1,$2,$3)
                 ON CONFLICT (endpoint) DO UPDATE SET user_id=$2`, [ep, user.id, Date.now()]);
    return send(res, 200, { ok: true });
  }
  if (body && typeof body.unsubscribe === 'string') {
    await query('DELETE FROM push_subs WHERE endpoint=$1 AND user_id=$2', [body.unsubscribe, user.id]);
    return send(res, 200, { ok: true });
  }
  if (body && body.test === true) {
    const rows = await query('SELECT endpoint FROM push_subs WHERE user_id=$1', [user.id]);
    const r = await pushEach(rows);
    return send(res, 200, { sent: r.sent, devices: rows.length, statuses: r.statuses });
  }
  return send(res, 400, { error: 'bad_request' });
}, { write: true });
