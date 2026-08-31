import { query, send } from './_lib/db.js';
import { guard } from './_lib/auth.js';
export default guard(async (req, res, user) => {
  const rows = await query(
    `SELECT version, saved_at, device, length(data::text) AS bytes
       FROM progress_history WHERE user_id=$1 ORDER BY id DESC LIMIT 20`, [user.id]);
  send(res, 200, { versions: rows.map(r => ({
    version: r.version, saved_at: Number(r.saved_at), device: r.device, bytes: Number(r.bytes) })) });
}, { auth: true });
