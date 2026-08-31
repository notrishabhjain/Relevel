import { query, send, readJson } from './_lib/db.js';
import { guard } from './_lib/auth.js';

const MAX_BYTES = 3_000_000;
const KEEP = 20;

export default guard(async (req, res, user) => {
  if (req.method === 'GET') {
    const rows = await query(
      'SELECT version, updated_at, device, data FROM progress WHERE user_id = $1', [user.id]);
    if (!rows.length) return send(res, 200, { version: 0, updatedAt: 0, data: null });
    const r = rows[0];
    return send(res, 200, { version: r.version, updatedAt: Number(r.updated_at),
                            device: r.device, data: r.data });
  }
  if (req.method !== 'PUT') return send(res, 405, { error: 'method' });

  let body;
  try { body = await readJson(req); } catch { return send(res, 400, { error: 'bad_json' }); }
  const { baseVersion, data, device } = body || {};
  if (typeof baseVersion !== 'number' || !data || typeof data !== 'object')
    return send(res, 400, { error: 'bad_request' });

  const serialized = JSON.stringify(data);
  if (serialized.length > MAX_BYTES)
    return send(res, 413, { error: 'too_large', limit: MAX_BYTES });

  const cur = (await query('SELECT version, updated_at, data FROM progress WHERE user_id = $1',
    [user.id]))[0];
  const version = cur ? cur.version : 0;

  /* The client tells us which version it edited. If the server has moved on,
     another device wrote first: refuse and hand back the current copy so the
     app can show both rather than silently discarding one. */
  if (baseVersion !== version)
    return send(res, 409, { error: 'version_conflict', version,
      updatedAt: cur ? Number(cur.updated_at) : 0, data: cur ? cur.data : null });

  const next = version + 1, t = Date.now();
  const dev = typeof device === 'string' ? device.slice(0, 60) : null;
  if (cur) {
    await query('UPDATE progress SET version=$1, updated_at=$2, device=$3, data=$4 WHERE user_id=$5',
      [next, t, dev, serialized, user.id]);
  } else {
    await query('INSERT INTO progress (user_id,version,updated_at,device,data) VALUES ($1,$2,$3,$4,$5)',
      [user.id, next, t, dev, serialized]);
  }
  await query('INSERT INTO progress_history (user_id,version,saved_at,device,data) VALUES ($1,$2,$3,$4,$5)',
    [user.id, next, t, dev, serialized]);
  await query(
    `DELETE FROM progress_history WHERE user_id=$1 AND id NOT IN
       (SELECT id FROM progress_history WHERE user_id=$1 ORDER BY id DESC LIMIT $2)`,
    [user.id, KEEP]);
  send(res, 200, { version: next, updatedAt: t });
}, { auth: true, write: true });
