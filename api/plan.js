import crypto from 'node:crypto';
import { query, send, readJson } from './_lib/db.js';
import { guard } from './_lib/auth.js';
import { clean, merge } from './_lib/plan.js';

/* Tracker for the 26-week plan, one document per signed-in person.
   GET  -> { data, updatedAt, shareId }
   PUT  { data }           merges the device's copy into the stored one, returns the result
   POST { share: true }    creates an unguessable id for the read-only status link
   POST { share: false }   removes it (the old link stops working) */
export default guard(async (req, res, user) => {
  const row = (await query('SELECT updated_at, data, share_id FROM plan_progress WHERE user_id=$1', [user.id]))[0];
  const cur = row ? row.data : { weeks: {}, gates: {}, parking: {} };

  if (req.method === 'GET')
    return send(res, 200, { data: clean(cur), updatedAt: row ? Number(row.updated_at) : 0, shareId: row ? row.share_id : null });

  let body;
  try { body = await readJson(req); } catch { return send(res, 400, { error: 'bad_json' }); }

  if (req.method === 'PUT') {
    if (!body || typeof body.data !== 'object') return send(res, 400, { error: 'bad_request' });
    const next = merge(cur, body.data), t = Date.now();
    await query(
      `INSERT INTO plan_progress (user_id, updated_at, data) VALUES ($1,$2,$3)
       ON CONFLICT (user_id) DO UPDATE SET updated_at=$2, data=$3`, [user.id, t, JSON.stringify(next)]);
    return send(res, 200, { data: next, updatedAt: t, shareId: row ? row.share_id : null });
  }

  if (req.method === 'POST') {
    const id = body && body.share === true ? crypto.randomBytes(16).toString('hex') : null;
    if (!body || typeof body.share !== 'boolean') return send(res, 400, { error: 'bad_request' });
    await query(
      `INSERT INTO plan_progress (user_id, updated_at, data, share_id) VALUES ($1,$2,$3,$4)
       ON CONFLICT (user_id) DO UPDATE SET share_id=$4`,
      [user.id, Date.now(), JSON.stringify(clean(cur)), id]);
    return send(res, 200, { shareId: id });
  }
  return send(res, 405, { error: 'method' });
}, { auth: true, write: true });
