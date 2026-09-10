import { createHash } from 'node:crypto';
import { send, configured, ready, query, role, defaults } from './_lib/db.js';

/* What this deployment is actually serving.

   The failure this exists for is the one that already happened twice: the
   build is right, the tests pass, the deploy is green, and the site serves
   chapters from an older build anyway. None of that is visible from the
   outside, so this reports the shape of what the database currently holds for
   chapter 1 — openable in a browser, no sign-in, no guessing. */
export default async function handler(req, res) {
  const hasDb = configured();
  let dbOk = false, why = null, content = null;
  if (hasDb) {
    try {
      await ready();
      dbOk = true;
      content = await serving();
    } catch (e) { why = e.message; }
  }
  send(res, 200, {
    ok: true, deployment: role(), database: hasDb, dbReady: dbOk, dbError: why,
    signIn: !!(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET),
    content
  });
}

/* Read chapter 1 back out of the database rather than off disk: the point is
   to describe what a reader gets, not what this build shipped. */
async function serving() {
  const [row] = await query(
    'SELECT version, updated_at, updated_by, defaults_hash, data FROM content WHERE kind=$1',
    ['chapters']);
  if (!row) return { chapters: 'not seeded yet' };
  const ch1 = (row.data || []).find(c => c.num === 1) || null;
  const built = await defaults();
  return {
    version: row.version,
    updatedBy: row.updated_by,
    updatedAt: new Date(Number(row.updated_at)).toISOString(),
    matchesThisBuild: row.defaults_hash === hashOf(built.chapters),
    chapter1: ch1 && {
      title: ch1.title,
      handsOnBeats: (ch1.story || [])
        .filter(b => Array.isArray(b) && b[0] === 'do').map(b => b[1]),
      capstone: ch1.capstone ? ch1.capstone.title : null,
      separateHandsOnSection: (ch1.handson || []).length > 0
    }
  };
}
function hashOf(v) {
  return createHash('sha1').update(JSON.stringify(v)).digest('hex');
}
