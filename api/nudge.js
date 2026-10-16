import { query, send, readJson } from './_lib/db.js';
import { guard } from './_lib/auth.js';
import { allowedEndpoint, istParts, messageFor, pushMany, runDaily, vapid } from './_lib/nudge.js';

/* The daily 12:00 reminder.
   GET  ?today=1  the day's message (the service worker asks for it when a push arrives)
   GET  ?run=1    the scheduled send; safe to call many times a day (see runDaily)
   GET            { key, devices } for the signed-in person (key is public)
   POST { subscription }  remember this device
   POST { unsubscribe: endpoint }  forget it
   POST { test: true }  send to this person's devices now */
export default guard(async (req, res, user) => {
  const q = new URL(req.url, 'http://x').searchParams;

  if (req.method === 'GET') {
    if (q.get('today')) return send(res, 200, messageFor(istParts().date));
    if (q.get('run')) return send(res, 200, await runDaily());
    const keys = await vapid();
    const devices = user ? Number((await query('SELECT COUNT(*) AS n FROM push_subs WHERE user_id=$1', [user.id]))[0].n) : 0;
    return send(res, 200, { key: keys.pub, devices, signedIn: !!user });
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
    return send(res, 200, { sent: await pushMany(rows), devices: rows.length });
  }
  return send(res, 400, { error: 'bad_request' });
}, { write: true });
