#!/usr/bin/env node
/* Structural checks on the curriculum itself.

   The block grammar is hand-authored data, and its failures are silent: a
   checkpoint pointing at a deleted question simply stops asking, two
   checkpoints sharing an id quietly overwrite each other's answers, and a
   missing comma between two block literals turns both into one hole that
   renders as nothing at all. None of that throws. This does.

   `node tools/content-check.mjs` — run by the test suite and by CI. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(ROOT, 'content/defaults.json');
if (!fs.existsSync(file)) { console.error('content/defaults.json missing — run the build first'); process.exit(1); }
const C = JSON.parse(fs.readFileSync(file, 'utf8'));

const problems = [];
const fail = m => problems.push(m);

const itemIds = new Set(C.items.map(i => i[0]));
const skillIds = new Set(C.skills.map(s => s.id));
const labIds = new Set(Object.keys(C.reference.LABKEYS || {}).length
  ? Object.keys(C.reference.LABKEYS)
  : ['tokenizer','receipt','temperature','chunker','meaningmap','prdial','schema','agentloop',
     'contextrot','cache','reasoning','fusion','injection','trifecta','judge','costmodel',
     'systemcard','prd','redmap']);

const blocksOf = c => [
  ...(c.story || []),
  ...(c.story || []).filter(b => Array.isArray(b) && b[0] === 'do').flatMap(b => b[2] || []),
  ...(c.handson || []).flatMap(s => s.b || [])
];

/* A missing comma between two block literals does not throw. Between two
   top-level blocks it leaves a hole, which is caught below; inside a hands-on
   beat it parses as an index into the previous block instead, and the block
   simply disappears from the page. That has happened three times. */
for (const c of C.chapters)
  for (const b of c.story || [])
    if (Array.isArray(b) && b[0] === 'do')
      (b[2] || []).forEach((x, i) => {
        if (x == null)
          fail(`${c.id}: beat "${b[1]}" has an empty block at ${i}` +
               ` — a missing comma after the block before it`);
      });

/* A chapter must not go back to having a hands-on section bolted on the end.
   The whole content rule is that doing is interleaved with reading. */
for (const c of C.chapters) {
  if ((c.handson || []).length && (c.story || []).some(b => Array.isArray(b) && b[0] === 'do'))
    fail(`${c.id} has both inline hands-on beats and a separate hands-on section`);
}

/* The course used to carry an optional "same thing in real code" section, and
   the text that sold it as skippable outlived the section itself. Doing is not
   an appendix any more, and nothing may tell a reader it is. */
const SKIPPABLE = /\b(optional section|you can ignore it completely|nothing later depends on it|entirely optional|feel free to skip)\b/i;
for (const c of C.chapters)
  for (const b of blocksOf(c)) {
    const m = SKIPPABLE.exec(JSON.stringify(b));
    if (m) fail(`${c.id} still describes the hands-on work as skippable: "${m[0]}"`);
  }

const cpIds = new Map();
const asked = new Set();
let checkpoints = 0;

for (const c of C.chapters) {
  const all = blocksOf(c);
  all.forEach((b, i) => {
    /* A hole is what a missing comma between two block literals leaves behind. */
    if (b == null) return fail(`${c.id} block ${i} is empty — usually a missing comma in the source`);
    if (!Array.isArray(b)) return fail(`${c.id} block ${i} is not a block`);
    const [k] = b;
    if (k === 'q') {
      const ids = b.slice(1).flat();
      if (!ids.length) fail(`${c.id} has a checkpoint that asks nothing`);
      for (const id of ids) {
        checkpoints++;
        asked.add(id);
        if (!itemIds.has(id)) fail(`${c.id} asks ${id}, which is not in the question bank`);
      }
    } else if (k === 'pred' || k === 'try') {
      checkpoints++;
      const o = b[1] || {};
      if (!o.id) return fail(`${c.id} has a ${k} checkpoint with no id`);
      if (cpIds.has(o.id)) fail(`${o.id} is used by both ${cpIds.get(o.id)} and ${c.id}`);
      cpIds.set(o.id, c.id);
      if (k === 'pred') {
        if (!o.ask) fail(`${o.id} asks for no prediction`);
        if (!o.reveal) fail(`${o.id} never reveals the answer`);
      } else {
        if (!o.task) fail(`${o.id} sets no task`);
        if (!o.after) fail(`${o.id} has nothing to compare an answer against`);
      }
    } else if (k === 'lab') {
      if (!labIds.has(b[1])) fail(`${c.id} embeds an unknown lab: ${b[1]}`);
    }
  });
}

for (const it of C.items) if (!skillIds.has(it[1])) fail(`question ${it[0]} names a skill that does not exist: ${it[1]}`);
for (const s of C.skills) if (!C.items.some(i => i[1] === s.id)) fail(`skill ${s.id} has no questions, so it can never be measured`);

/* Every chapter should ask something. A chapter that only tells you things is
   the thing this whole design is meant to stop existing. */
const silent = C.chapters.filter(c => !blocksOf(c).some(b => Array.isArray(b) && ['q','pred','try'].includes(b[0])));

const chapterNums = new Set(C.chapters.map(c => c.num));
for (const c of C.chapters) {
  if (c.num < 2) continue;
  if (!(c.needs || []).length) fail(`${c.id} does not say what it stands on`);
  for (const [what, why, ch] of c.needs || []) {
    if (!what || !why) fail(`${c.id} has an incomplete prerequisite`);
    if (ch === 'setup') continue;              // the environment, not a chapter
    if (!chapterNums.has(ch)) fail(`${c.id} points back to chapter ${ch}, which does not exist`);
    if (ch >= c.num) fail(`${c.id} says it stands on chapter ${ch}, which comes later`);
  }
}
for (const s of C.skills)
  for (const n of s.ch || [])
    if (!chapterNums.has(n)) fail(`skill ${s.id} cites chapter ${n}, which does not exist`);

/* The Hinglish layer is keyed on the English line. Edit that line in English
   and the translation silently stops applying — the page still reads correctly,
   just in the wrong language, which is exactly the kind of failure nobody
   notices. So every key has to still exist somewhere in the content. */
/* Step size. The methodology caps a chapter at four new terms: a chapter that
   needs eight is two chapters. The chapters below predate the rule and carry
   the debt openly — the list only ever gets shorter, and a chapter not on it
   must obey the cap. */
const TERM_DEBT = new Set(['ch1', 'ch8', 'ch14', 'ch18', 'ch7']);
{
  const seen = new Set();
  const owed = [];
  for (const c of C.chapters) {
    const text = JSON.stringify(c);
    const fresh = [...new Set((C.reference.GLOSSARY || []).map(g => g[0]))]
      .filter(t => !seen.has(t) &&
        new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(text));
    fresh.forEach(t => seen.add(t));
    if (fresh.length > 4) {
      if (TERM_DEBT.has(c.id)) owed.push(`${c.id}:${fresh.length}`);
      else fail(`${c.id} introduces ${fresh.length} new terms in one chapter` +
                ` — the cap is four, so this is two chapters: ${fresh.join(', ')}`);
    }
  }
  if (owed.length) console.log(`chapters still over the four-term cap: ${owed.join(' ')}`);
}

const hing = C.hinglish || {};

/* The other half: every line the reader can be shown needs a Hinglish version,
   or the page mixes the two languages. This walks the same shapes app.js does,
   so the two cannot disagree about what counts as translatable. */
const need = new Set();
const wantAdd = v => { if (typeof v === 'string' && v.trim()) need.add(v.trim()); };
const wantWalk = v => {
  if (typeof v === 'string') return wantAdd(v);
  if (Array.isArray(v)) return v.forEach(wantWalk);
  if (v && typeof v === 'object')
    Object.keys(v).forEach(k => { if (k !== 'id') wantWalk(v[k]); });
};
const prose = b => { if (!Array.isArray(b)) return;
  if (['code', 'lab', 'q'].includes(b[0])) return;
  /* a hands-on beat is a label plus its own blocks — the code inside stays code */
  if (b[0] === 'do') { wantAdd(b[1]); (b[2] || []).forEach(prose); return; }
  wantWalk(b.slice(1)); };
(C.reference.PARTS || []).forEach(p => { wantAdd(p.title); wantAdd(p.blurb); });
C.chapters.forEach(c => {
  wantAdd(c.title); wantAdd(c.concept); wantWalk(c.takeaway);
  /* the capstone renders through the same translator the story does */
  if (c.capstone) { wantAdd(c.capstone.title); wantAdd(c.capstone.brief);
    wantWalk(c.capstone.steps); wantWalk(c.capstone.done); }
  (c.needs || []).forEach(n => { wantAdd(n[0]); wantAdd(n[1]); });
  (c.story || []).forEach(prose);
  (c.handson || []).forEach(st => { wantAdd(st.h); (st.b || []).forEach(prose); });
});
C.items.forEach(([, , , type, stem, opts, ans, why]) => {
  wantAdd(stem); wantAdd(why);
  if (type === 'judge') wantAdd(ans);
  else if (type !== 'num') wantWalk(opts);
});
const SU = C.reference.SETUP || {};
wantAdd(SU.title); wantAdd(SU.blurb); wantAdd(SU.oneline);
(SU.sections || []).forEach(x => { wantAdd(x.h); (x.b || []).forEach(prose); });
wantWalk(SU.trouble);
(C.reference.DOMAINS || []).forEach(d => wantAdd(d.blurb));
C.skills.forEach(x => { wantAdd(x.core); wantWalk(x.L); });
(C.reference.LEVEL_NAMES || []).forEach(wantAdd);
/* Labs live in code rather than in the content rows. */
const labsSrc = fs.readFileSync(path.join(ROOT, 'src/labs.js'), 'utf8');
for (const m of labsSrc.matchAll(/\b(?:title|note):\s*'((?:[^'\\]|\\.)*)'/g))
  wantAdd(m[1].replace(/\\(['\\])/g, '$1'));
(C.reference.GLOSSARY || []).forEach(x => wantAdd(x[1]));

/* Hinglish is Hindi written in the Roman alphabet. A Devanagari character in
   a translation is always a typing slip — it has happened twice — and it reads
   as a broken glyph mid-word rather than as an error anybody would report. */
const devanagari = Object.entries(hing)
  .filter(([, v]) => /[\u0900-\u097F]/.test(String(v)))
  .map(([, v]) => (String(v).match(/\S*[\u0900-\u097F]\S*/) || [''])[0]);
if (devanagari.length)
  fail(`${devanagari.length} Hinglish line(s) contain Devanagari characters` +
       ` — first: "${devanagari[0]}"`);

const untranslated = [...need].filter(k => hing[k] === undefined);
if (untranslated.length) {
  fail(`${untranslated.length} line(s) of ${need.size} have no Hinglish translation` +
       ` — first: "${untranslated[0].slice(0, 70)}…"`);
}
const hay = JSON.stringify(C) + fs.readFileSync(path.join(ROOT, 'src/labs.js'), 'utf8')
  + fs.readFileSync(path.join(ROOT, 'src/app.js'), 'utf8');   /* chrome that T() translates */
const stale = Object.keys(hing).filter(k =>
  !hay.includes(JSON.stringify(k).slice(1, -1)) && !hay.includes(k));
if (stale.length) {
  fail(`${stale.length} Hinglish translation(s) key off English that no longer appears in the course` +
       ` — first: "${stale[0].slice(0, 70)}…"`);
}

console.log(`${C.chapters.length} chapters · ${C.items.length} questions · ${C.skills.length} skills`);
console.log(`${need.size - untranslated.length} of ${need.size} lines carry a Hinglish translation`);
console.log(`${checkpoints} checkpoints across the reading · ${asked.size} of the bank asked in a chapter`);
if (silent.length) console.log(`chapters with no checkpoints yet: ${silent.map(c => c.num).join(', ')}`);
if (problems.length) {
  console.error('\n' + problems.length + ' problem(s):');
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}
console.log('content is structurally sound');
