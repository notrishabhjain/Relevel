/* The curriculum itself lives in the database, so it can be edited from the
   portal and take effect immediately — no rebuild, no redeploy.

   GET  /api/content            everything, with a version per kind
   GET  /api/content?kind=items just one kind
   PUT  /api/content            {kind, baseVersion, data}  — editors only
   POST /api/content?reset=items                            — back to built-in
   Reading is public so the app works for a signed-out visitor; writing needs
   an editor. */

import { createHash } from 'node:crypto';
import { query, send, readJson, defaults, CONTENT_KINDS } from './_lib/db.js';
import { guard, isEditor } from './_lib/auth.js';

const KEEP = 30;

/* Shape checks. Not a schema validator — just enough that a bad paste cannot
   leave the app unable to render, since this content is what the whole site
   is built from. */
function validate(kind, data) {
  const fail = m => { throw new Error(m); };
  if (kind === 'chapters') {
    if (!Array.isArray(data) || !data.length) fail('chapters must be a non-empty array');
    data.forEach((c, i) => {
      if (!c || typeof c !== 'object') fail(`chapter ${i} is not an object`);
      ['id', 'title', 'concept'].forEach(k => { if (typeof c[k] !== 'string' || !c[k]) fail(`chapter ${i} needs ${k}`); });
      if (typeof c.num !== 'number') fail(`chapter ${i} needs a numeric num`);
      /* Only the reading is required. A chapter that is one flow simply omits
         the vocabulary list, the code track and the rest, and the renderer
         shows what is there. */
      if (!Array.isArray(c.story) || !c.story.length) fail(`chapter ${c.id} needs a story`);
      ['words', 'handson', 'homework', 'check', 'wrong', 'takeaway', 'labs'].forEach(k => {
        if (c[k] !== undefined && !Array.isArray(c[k]))
          fail(`chapter ${c.id} has ${k} but it is not a list`); });
    });
    const ids = data.map(c => c.id);
    if (new Set(ids).size !== ids.length) fail('chapter ids must be unique');
    /* Checkpoint blocks store an answer under their id, so a missing or
       duplicated one silently loses or mixes up what somebody wrote. */
    const cp = new Set();
    for (const c of data) {
      for (const b of chapterBlocks(c)) {
        if (b[0] !== 'pred' && b[0] !== 'try') continue;
        const o = b[1];
        if (!o || typeof o.id !== 'string' || !o.id)
          fail(`a ${b[0]} checkpoint in ${c.id} needs an id`);
        if (cp.has(o.id)) fail(`two checkpoints share the id ${o.id}`);
        cp.add(o.id);
      }
    }
  }
  if (kind === 'items') {
    if (!Array.isArray(data) || !data.length) fail('items must be a non-empty array');
    const ids = new Set();
    data.forEach((it, i) => {
      if (!Array.isArray(it) || it.length < 7) fail(`item ${i} must be an array of at least 7 parts`);
      const [id, sk, diff, type, stem, opts, ans] = it;
      if (typeof id !== 'string' || !id) fail(`item ${i} needs an id`);
      if (ids.has(id)) fail(`duplicate item id ${id}`);
      ids.add(id);
      if (typeof sk !== 'string') fail(`item ${id} needs a skill id`);
      if (![1, 2, 3].includes(diff)) fail(`item ${id} difficulty must be 1, 2 or 3`);
      if (!['mcq', 'multi', 'num', 'order', 'judge'].includes(type)) fail(`item ${id} has an unknown type`);
      if (typeof stem !== 'string' || !stem) fail(`item ${id} needs a stem`);
      if (type === 'mcq') {
        if (!Array.isArray(opts) || opts.length < 2) fail(`item ${id} needs at least two options`);
        if (typeof ans !== 'number' || ans < 0 || ans >= opts.length) fail(`item ${id} answer must index its options`);
      }
      if (type === 'multi') {
        if (!Array.isArray(opts) || !Array.isArray(ans) || !ans.length) fail(`item ${id} needs options and an answer array`);
        if (ans.some(a => typeof a !== 'number' || a < 0 || a >= opts.length)) fail(`item ${id} answer indexes are out of range`);
      }
      if (type === 'order') {
        if (!Array.isArray(opts) || !Array.isArray(ans) || ans.length !== opts.length) fail(`item ${id} order answer must list every option once`);
      }
      if (type === 'num' && (!Array.isArray(ans) || typeof ans[0] !== 'number')) fail(`item ${id} needs [value, tolerance]`);
      if (type === 'judge' && typeof ans !== 'string') fail(`item ${id} needs a model answer`);
      /* Every gradeable type also carries the explanation shown after answering.
         A judge item's model answer is that explanation, so it stops at seven. */
      if (type !== 'judge' && (typeof it[7] !== 'string' || !it[7]))
        fail(`item ${id} needs an explanation as its eighth part`);
    });
  }
  if (kind === 'skills') {
    if (!Array.isArray(data) || !data.length) fail('skills must be a non-empty array');
    data.forEach((s, i) => {
      if (typeof s.id !== 'string' || !s.id) fail(`skill ${i} needs an id`);
      if (typeof s.n !== 'string' || !s.n) fail(`skill ${s.id} needs a name`);
      if (!Array.isArray(s.L) || s.L.length !== 4) fail(`skill ${s.id} needs four level descriptors`);
    });
  }
  if (kind === 'exercises') {
    if (!Array.isArray(data)) fail('exercises must be an array');
    data.forEach(e => {
      if (typeof e.id !== 'string') fail('every exercise needs an id');
      if (!Array.isArray(e.rubric)) fail(`exercise ${e.id} needs a rubric array`);
      e.rubric.forEach(r => { if (!Array.isArray(r.l) || r.l.length !== 4)
        fail(`exercise ${e.id} rubric rows need four levels`); });
    });
  }
  if (kind === 'processes' && !Array.isArray(data)) fail('processes must be an array');
  if (kind === 'reference' && (!data || typeof data !== 'object')) fail('reference must be an object');
  /* The Hinglish layer is a flat lookup: English line in, Hinglish line out.
     Anything missing simply reads in English, so a partial map is valid — but a
     non-string on either side would render as "[object Object]" in the page. */
  if (kind === 'hinglish') {
    if (!data || typeof data !== 'object' || Array.isArray(data)) fail('hinglish must be an object');
    for (const [k, v] of Object.entries(data)) {
      if (typeof v !== 'string') fail(`hinglish entry for "${k.slice(0, 40)}" is not text`);
      if (!k.trim()) fail('hinglish has an entry with an empty English key');
    }
  }
}

/* Every block in a chapter, including the ones nested inside a hands-on step. */
function chapterBlocks(c) {
  const out = [];
  for (const b of c.story || []) if (Array.isArray(b)) out.push(b);
  for (const st of c.handson || []) for (const b of (st && st.b) || []) if (Array.isArray(b)) out.push(b);
  return out;
}

/* Cross-references the editors can break: a question pointing at a skill that
   no longer exists would vanish from every drill without saying so, and a
   checkpoint pointing at a deleted question would quietly stop asking. */
async function crossCheck(kind, data) {
  if (!['items', 'skills', 'chapters'].includes(kind)) return [];
  const rows = await query('SELECT kind, data FROM content WHERE kind IN ($1,$2,$3)',
    ['items', 'skills', 'chapters']);
  const map = Object.fromEntries(rows.map(r => [r.kind, r.data]));
  const items = kind === 'items' ? data : map.items || [];
  const skills = kind === 'skills' ? data : map.skills || [];
  const chapters = kind === 'chapters' ? data : map.chapters || [];
  const warn = [];

  const skillIds = new Set(skills.map(s => s.id));
  const orphans = [...new Set(items.filter(it => !skillIds.has(it[1])).map(it => it[1]))];
  if (orphans.length) warn.push(`questions reference missing skills: ${orphans.join(', ')}`);
  const empty = skills.filter(s => !items.some(it => it[1] === s.id)).map(s => s.id);
  if (empty.length) warn.push(`skills with no questions: ${empty.join(', ')}`);

  const itemIds = new Set(items.map(it => it[0]));
  const asked = new Set();
  const missing = new Set();
  for (const c of chapters) {
    for (const b of chapterBlocks(c)) {
      if (b[0] !== 'q') continue;
      for (const id of b.slice(1).flat()) {
        asked.add(id);
        if (!itemIds.has(id)) missing.add(`${id} (${c.id})`);
      }
    }
  }
  if (missing.size)
    warn.push(`chapter checkpoints ask questions that are not in the bank: ${[...missing].join(', ')}`);
  return warn;
}

export default guard(async (req, res, user) => {
  const url = new URL(req.url, 'http://x');

  if (req.method === 'GET') {
    const kind = url.searchParams.get('kind');
    const rows = kind
      ? await query('SELECT kind, version, updated_at, updated_by, data FROM content WHERE kind=$1', [kind])
      : await query('SELECT kind, version, updated_at, updated_by, data FROM content');
    const out = {};
    for (const r of rows) out[r.kind] = { version: r.version, updatedAt: Number(r.updated_at),
      updatedBy: r.updated_by, data: r.data };
    return send(res, 200, { content: out, kinds: CONTENT_KINDS,
      editor: !!(user && isEditor(user.login)) });
  }

  if (req.method === 'POST' && url.searchParams.get('reset')) {
    if (!user || !isEditor(user.login)) return send(res, 403, { error: 'not_an_editor' });
    const kind = url.searchParams.get('reset');
    if (!CONTENT_KINDS.includes(kind)) return send(res, 400, { error: 'unknown_kind' });
    const d = await defaults();
    /* Reset means "follow the build again", so the row goes back to being
       built-in-owned. Who asked for it is recorded in the history entry. */
    return await writeKind(res, kind, d[kind], user, 'reset to built-in', null, true);
  }

  if (req.method !== 'PUT') return send(res, 405, { error: 'method' });
  if (!user || !isEditor(user.login)) return send(res, 403, { error: 'not_an_editor' });

  let body;
  try { body = await readJson(req); } catch { return send(res, 400, { error: 'bad_json' }); }
  const { kind, baseVersion, data } = body || {};
  if (!CONTENT_KINDS.includes(kind)) return send(res, 400, { error: 'unknown_kind' });
  if (typeof baseVersion !== 'number') return send(res, 400, { error: 'bad_request' });

  try { validate(kind, data); }
  catch (e) { return send(res, 422, { error: 'invalid_content', detail: e.message }); }

  const cur = (await query('SELECT version FROM content WHERE kind=$1', [kind]))[0];
  const version = cur ? cur.version : 0;
  if (baseVersion !== version) {
    const full = (await query('SELECT version, data FROM content WHERE kind=$1', [kind]))[0];
    return send(res, 409, { error: 'version_conflict', version,
      data: full ? full.data : null });
  }
  const warnings = await crossCheck(kind, data);
  return await writeKind(res, kind, data, user, null, warnings);
}, { auth: false, write: true });

async function writeKind(res, kind, data, user, note, warnings, toBuiltIn) {
  const t = Date.now();
  const who = (user ? user.login : 'system') + (note ? ' · ' + note : '');
  /* A reset hands the kind back to the build, so the live row is marked
     built-in and later deploys may update it again. Who asked for that is not
     lost — it is what the history entry records. */
  const by = toBuiltIn ? 'built-in' : who;
  const s = JSON.stringify(data);
  const hash = createHash('sha1').update(s).digest('hex');
  const cur = (await query('SELECT version FROM content WHERE kind=$1', [kind]))[0];
  const next = (cur ? cur.version : 0) + 1;
  if (cur) {
    await query(`UPDATE content SET version=$1, updated_at=$2, updated_by=$3, data=$4,
                        defaults_hash=$5 WHERE kind=$6`,
      [next, t, by, s, toBuiltIn ? hash : null, kind]);
  } else {
    await query(`INSERT INTO content (kind,version,updated_at,updated_by,data,defaults_hash)
                 VALUES ($1,$2,$3,$4,$5,$6)`,
      [kind, next, t, by, s, toBuiltIn ? hash : null]);
  }
  await query('INSERT INTO content_history (kind,version,saved_at,updated_by,data) VALUES ($1,$2,$3,$4,$5)',
    [kind, next, t, who, s]);
  await query(
    `DELETE FROM content_history WHERE kind=$1 AND id NOT IN
       (SELECT id FROM content_history WHERE kind=$1 ORDER BY id DESC LIMIT $2)`, [kind, KEEP]);
  return send(res, 200, { kind, version: next, updatedAt: t, warnings: warnings || [] });
}
