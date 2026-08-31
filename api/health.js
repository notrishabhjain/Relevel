import { send, configured, ready } from './_lib/db.js';
export default async function handler(req, res) {
  const hasDb = configured();
  let dbOk = false, why = null;
  if (hasDb) { try { await ready(); dbOk = true; } catch (e) { why = e.message; } }
  send(res, 200, {
    ok: true, database: hasDb, dbReady: dbOk, dbError: why,
    signIn: !!(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET)
  });
}
