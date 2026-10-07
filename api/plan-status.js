import { query, send } from './_lib/db.js';
import { guard } from './_lib/auth.js';
import { status } from './_lib/plan.js';

/* Read-only progress summary for a check-in (a scheduled reminder, for example).
   Reachable only with the unguessable id the owner created on the plan page, and it
   exposes counts and week numbers, never links, notes or the parking lot. */
export default guard(async (req, res) => {
  const id = new URL(req.url, 'http://x').searchParams.get('id') || '';
  if (!/^[0-9a-f]{32}$/.test(id)) return send(res, 404, { error: 'not_found' });
  const row = (await query('SELECT data FROM plan_progress WHERE share_id=$1', [id]))[0];
  if (!row) return send(res, 404, { error: 'not_found' });
  send(res, 200, status(row.data));
});
