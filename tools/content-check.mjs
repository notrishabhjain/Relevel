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
  ...(c.handson || []).flatMap(s => s.b || [])
];

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
for (const s of C.skills)
  for (const n of s.ch || [])
    if (!chapterNums.has(n)) fail(`skill ${s.id} cites chapter ${n}, which does not exist`);

console.log(`${C.chapters.length} chapters · ${C.items.length} questions · ${C.skills.length} skills`);
console.log(`${checkpoints} checkpoints across the reading · ${asked.size} of the bank asked in a chapter`);
if (silent.length) console.log(`chapters with no checkpoints yet: ${silent.map(c => c.num).join(', ')}`);
if (problems.length) {
  console.error('\n' + problems.length + ' problem(s):');
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}
console.log('content is structurally sound');
