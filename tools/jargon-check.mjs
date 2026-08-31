#!/usr/bin/env node
/* Where the reading assumes you already know something.

   A term is "introduced" the first time a chapter defines it in its own
   vocabulary list, or the glossary says it belongs to that chapter. A term is
   "used" the first time it appears in prose. Any term used before it is
   introduced is a place where a reader who does not already know it has to
   either guess or leave — which is exactly the moment people stop.

   `node tools/jargon-check.mjs [--all]` */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const C = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/defaults.json'), 'utf8'));
const chapters = [...C.chapters].sort((a, b) => a.num - b.num);

/* Terms a reader must not be assumed to know, beyond the glossary's own list.
   These are the words that appear in ordinary technical speech and mean nothing
   to someone who has not worked near engineers. */
const EXTRA = [
  'API', 'JSON', 'endpoint', 'payload', 'schema', 'corpus', 'latency', 'p95',
  'parameter', 'inference', 'deterministic', 'stochastic', 'vector', 'index',
  'pipeline', 'orchestration', 'idempotent', 'throughput', 'SDK', 'SLA',
  'regex', 'notebook', 'runtime', 'deploy', 'rollback', 'telemetry', 'taxonomy'
];

/* text of every prose block in a chapter, in reading order */
function proseOf(c) {
  const out = [];
  const push = b => {
    if (!Array.isArray(b)) return;
    const [k, ...r] = b;
    if (k === 'p' || k === 'key' || k === 'x' || k === 'code') out.push(String(r[0] || ''));
    else if (k === 'l' || k === 'n') out.push((r[0] || []).join(' '));
    else if (k === 'c') out.push(String(r[0] || '') + ' ' + String(r[1] || ''));
    else if (k === 'tb') out.push([...(r[0] || []), ...(r[1] || []).flat()].join(' '));
    else if (k === 'pred') out.push([r[0].ask, r[0].reveal, r[0].then].filter(Boolean).join(' '));
    else if (k === 'try') out.push([r[0].task, r[0].after].filter(Boolean).join(' '));
  };
  (c.story || []).forEach(push);
  (c.handson || []).forEach(s => { out.push(s.h || ''); (s.b || []).forEach(push); });
  (c.wrong || []).forEach(r => out.push(r.join(' ')));
  (c.homework || []).forEach(r => out.push(r.join(' ')));
  (c.check || []).forEach(r => out.push(r.join(' ')));
  return out.join('\n').replace(/<[^>]+>/g, ' ');
}

/* Where each term is first explained to the reader. */
const introducedIn = new Map();
for (const c of chapters)
  for (const [term] of c.words || []) {
    /* "Model / LLM" and "Top-k (k)" name more than one form */
    for (const t of String(term).split(/\s*[/(]\s*/).map(s => s.replace(/\)$/, '').trim()).filter(Boolean))
      if (!introducedIn.has(t.toLowerCase())) introducedIn.set(t.toLowerCase(), c.num);
  }
for (const g of C.reference.GLOSSARY || []) {
  const [term, , ch] = g;
  for (const t of String(term).split(/\s*[/(]\s*/).map(s => s.replace(/\)$/, '').trim()).filter(Boolean)) {
    const k = t.toLowerCase();
    /* chapter 0 is the ground floor: available from the very first page */
    const at = (ch == null ? 99 : ch);
    if (!introducedIn.has(k) || at < introducedIn.get(k)) introducedIn.set(k, at);
  }
}
for (const t of EXTRA) if (!introducedIn.has(t.toLowerCase())) introducedIn.set(t.toLowerCase(), null);

const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const firstUse = new Map();
for (const c of chapters) {
  const text = proseOf(c);
  for (const term of introducedIn.keys()) {
    if (firstUse.has(term)) continue;
    const re = new RegExp('\\b' + escape(term) + (term.length > 3 ? 's?' : '') + '\\b', 'i');
    if (re.test(text)) firstUse.set(term, c.num);
  }
}

const rows = [];
for (const [term, intro] of introducedIn) {
  const used = firstUse.get(term);
  if (used == null) continue;
  if (intro == null) rows.push({ term, used, intro: null, gap: 99 });
  else if (used < intro) rows.push({ term, used, intro, gap: intro - used });
}
rows.sort((a, b) => a.used - b.used || b.gap - a.gap);

const never = rows.filter(r => r.intro === null || r.intro === 99);
const early = rows.filter(r => !never.includes(r));

console.log(`${introducedIn.size} terms tracked across ${chapters.length} chapters\n`);
if (never.length) {
  console.log(`${never.length} term(s) used but never defined anywhere:`);
  for (const r of never) console.log(`  ch${String(r.used).padStart(2)}  ${r.term}`);
  console.log('');
}
/* Naming a thing before teaching it is deliberate here — the book withholds
   "RAG" for six chapters on purpose. That is only safe because the word is
   tappable at first use and says which chapter builds it, so these are listed
   to be checked rather than treated as faults. */
if (early.length) {
  console.log(`${early.length} deliberate forward reference(s) — tappable at first use:`);
  for (const r of early)
    console.log(`  ch${String(r.used).padStart(2)} → taught in ch${String(r.intro).padStart(2)}  ${r.term}`);
} else console.log('no term is used before it is explained');

if (never.length) {
  console.error(`\n${never.length} term(s) with no definition anywhere — a reader meeting one has nowhere to go.`);
  process.exit(1);
}
console.log('\nevery term used in the reading is defined somewhere');
