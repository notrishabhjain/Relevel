#!/usr/bin/env node
/* The house style, measured.

   CONTENT-GUIDELINES.md §8 describes the voice: the one technical books and
   good engineering blogs use — say the thing plainly, show it, explain what
   happened, move on. A description of a voice is easy to agree with and easy to
   drift from, so this file turns the parts of it that can be counted into
   numbers, per chapter, and fails the build on the ones that are hard limits.

   What it cannot check is whether the explanation is right, or whether the
   example is a good one. That is still a reader's job. What it can check is
   the texture that makes a page tiring to follow: long sentences, long
   paragraphs, a dash every other clause, and the rhetorical "that is not X —
   it is Y" turn that reads well once and wears badly thirty times.

   Usage:  node tools/style-check.mjs            summary + failures
           node tools/style-check.mjs --all      every chapter's numbers
           node tools/style-check.mjs --json     machine-readable */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(ROOT, 'content/defaults.json');
if (!fs.existsSync(file)) { console.error('content/defaults.json missing — run the build first'); process.exit(1); }
const C = JSON.parse(fs.readFileSync(file, 'utf8'));
const argv = new Set(process.argv.slice(2));

/* ---- the limits ----
   Chosen from what the chapters that read best already do, not from a
   readability formula: a formula scores "The cat sat." as ideal prose. */
const LIMIT = {
  avgSentence: 18,     // words per sentence, averaged over a chapter's prose
  longSentence: 32,    // any single sentence past this is flagged
  longShare: 0.06,     // at most 6% of a chapter's sentences may be that long
  paragraph: 75,       // words in one paragraph block
  dashesPerPara: 2,    // em dashes in one paragraph
  inversions: 0        // "That is not X. It is Y." and its relatives
};

const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
const words = s => strip(s).split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w));
/* Sentence split that survives "e.g.", "vs." and decimals. */
const sentences = s => strip(s)
  .replace(/\b(e\.g|i\.e|vs|etc|approx|Mr|Ms|Dr)\./gi, '$1')
  .replace(/(\d)\.(\d)/g, '$1$2')
  .split(/(?<=[.!?])\s+(?=[A-Z0-9"“‘(])/)
  .map(x => x.trim()).filter(x => words(x).length > 0);

/* The rhetorical turn. Each of these is a way of withholding the point for a
   beat so it lands harder — which is exactly what a reader following steps
   does not need. */
const INVERSION = [
  /\bis not (?:a|an|the)?\s*[^.;:]{1,60}[.;—–-]\s*(?:It|That|This) is\b/i,
  /\bNot [^.]{1,60}, but [^.]{1,60}\./,
  /\bThat is not [^.]{1,60}\. (?:It|That) is\b/i,
  /\bThe (?:real|honest|useful) (?:question|answer) is (?:not|never)\b/i
];

/* Prose blocks only: code is code, questions are questions, and a table cell
   is not a paragraph. */
function prose(c) {
  const out = [];
  const take = (kind, t) => { if (t && strip(t).trim()) out.push({ kind, t }); };
  const walk = b => {
    if (!Array.isArray(b)) return;
    const [k, ...r] = b;
    if (k === 'p' || k === 'key') take(k, r[0]);
    else if (k === 'c') take('c', r[1]);
    else if (k === 'l' || k === 'n') (r[0] || []).forEach(x => take('li', x));
    else if (k === 'x') take('x', r[0]);
    else if (k === 'do') (r[1] || []).forEach(walk);
    else if (k === 'unit') Object.values(r[2] || {}).forEach(v => take('unit', v));
  };
  (c.story || []).forEach(walk);
  (c.handson || []).forEach(st => (st.b || []).forEach(walk));
  take('concept', c.concept);
  return out;
}

function measure(c) {
  const blocks = prose(c);
  let nWords = 0, nSent = 0, longS = 0, longP = 0, dashy = 0, inv = 0;
  const flags = [];
  for (const b of blocks) {
    const w = words(b.t).length;
    nWords += w;
    const ss = sentences(b.t);
    nSent += ss.length;
    for (const s of ss) {
      const n = words(s).length;
      if (n > LIMIT.longSentence) { longS++; if (flags.length < 40) flags.push(['long sentence', n, s]); }
    }
    if ((b.kind === 'p' || b.kind === 'c') && w > LIMIT.paragraph) {
      longP++; if (flags.length < 40) flags.push(['long paragraph', w, strip(b.t).slice(0, 90)]);
    }
    const d = (strip(b.t).match(/—/g) || []).length;
    if (d > LIMIT.dashesPerPara) { dashy++; if (flags.length < 40) flags.push(['dashes', d, strip(b.t).slice(0, 90)]); }
    for (const re of INVERSION) {
      const m = strip(b.t).match(re);
      if (m) { inv++; if (flags.length < 40) flags.push(['inversion', 0, m[0]]); break; }
    }
  }
  return {
    id: c.id, num: c.num, title: c.title, words: nWords, sentences: nSent,
    avg: nSent ? +(nWords / nSent).toFixed(1) : 0,
    longShare: nSent ? +(longS / nSent).toFixed(3) : 0,
    longSentences: longS, longParagraphs: longP, dashyParagraphs: dashy, inversions: inv, flags
  };
}

const rows = C.chapters.map(measure);
const fails = [];
for (const r of rows) {
  const why = [];
  if (r.avg > LIMIT.avgSentence) why.push(`average sentence ${r.avg} words (limit ${LIMIT.avgSentence})`);
  if (r.longShare > LIMIT.longShare) why.push(`${(r.longShare * 100).toFixed(0)}% of sentences over ${LIMIT.longSentence} words`);
  if (r.longParagraphs) why.push(`${r.longParagraphs} paragraph(s) over ${LIMIT.paragraph} words`);
  if (r.dashyParagraphs) why.push(`${r.dashyParagraphs} paragraph(s) with more than ${LIMIT.dashesPerPara} em dashes`);
  if (r.inversions > LIMIT.inversions) why.push(`${r.inversions} rhetorical inversion(s)`);
  if (why.length) fails.push({ r, why });
}

if (argv.has('--json')) { console.log(JSON.stringify(rows, null, 1)); process.exit(0); }

const tot = rows.reduce((a, r) => ({ w: a.w + r.words, s: a.s + r.sentences,
  l: a.l + r.longSentences, p: a.p + r.longParagraphs, d: a.d + r.dashyParagraphs, i: a.i + r.inversions }),
  { w: 0, s: 0, l: 0, p: 0, d: 0, i: 0 });
console.log(`${rows.length} chapters · ${tot.w} words of prose · ${tot.s} sentences`);
console.log(`average sentence ${(tot.w / tot.s).toFixed(1)} words · ${tot.l} long sentences · ` +
            `${tot.p} long paragraphs · ${tot.d} dash-heavy paragraphs · ${tot.i} inversions`);

if (argv.has('--all')) {
  for (const r of rows)
    console.log(`  ${String(r.num).padEnd(5)} ${r.id.padEnd(8)} avg ${String(r.avg).padEnd(5)} long ${String(r.longSentences).padEnd(3)} ` +
                `para ${String(r.longParagraphs).padEnd(3)} dash ${String(r.dashyParagraphs).padEnd(3)} inv ${r.inversions}`);
}
if (argv.has('--flags')) {
  const id = [...argv].find(a => !a.startsWith('--'));
  for (const r of rows.filter(x => !id || x.id === id))
    for (const [k, n, t] of r.flags) console.log(`  ${r.id} ${k}${n ? ' (' + n + ')' : ''}: ${t.slice(0, 140)}`);
}

if (fails.length) {
  console.log(`\n${fails.length} chapter(s) outside the house style:`);
  for (const { r, why } of fails.slice(0, argv.has('--all') ? 999 : 12))
    console.log(`  ${r.num} ${r.title} — ${why.join('; ')}`);
  if (!argv.has('--all') && fails.length > 12) console.log(`  … and ${fails.length - 12} more (--all)`);
  process.exit(1);
}
console.log('every chapter reads in the house style');
