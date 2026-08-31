import { query, send, readJson } from './_lib/db.js';
import { guard } from './_lib/auth.js';
export default guard(async (req, res, user) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'method' });
  const body = await readJson(req);
  if (typeof body.version !== 'number') return send(res, 400, { error: 'bad_request' });
  const row = (await query('SELECT data FROM progress_history WHERE user_id=$1 AND version=$2',
    [user.id, body.version]))[0];
  if (!row) return send(res, 404, { error: 'not_found' });
  const cur = (await query('SELECT version FROM progress WHERE user_id=$1', [user.id]))[0];
  const next = (cur ? cur.version : 0) + 1, t = Date.now(), tag = 'restore v' + body.version;
  const s = JSON.stringify(row.data);
  await query('UPDATE progress SET version=$1, updated_at=$2, device=$3, data=$4 WHERE user_id=$5',
    [next, t, tag, s, user.id]);
  await query('INSERT INTO progress_history (user_id,version,saved_at,device,data) VALUES ($1,$2,$3,$4,$5)',
    [user.id, next, t, tag, s]);
  send(res, 200, { version: next, updatedAt: t, data: row.data });
}, { auth: true, write: true });
