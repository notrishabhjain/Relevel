#!/usr/bin/env node
/* The reading lists (src/data/reading.js) are hand-written links, and their
   failures are quiet: a chapter that lost its list, a row with a field missing,
   a Hinglish line left out, a link to a page that moved off https. None of that
   throws. This does.

   `node tools/reading-check.mjs` — run by the test suite. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['partA', 'part1', 'part2', 'part3', 'part4', 'part5', 'partB', 'reading'])
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'src/data', f + '.js'), 'utf8'), ctx);
const W = ctx.window, R = W.READING || {};
const chapters = Object.keys(W).filter(k => /^PART/.test(k)).flatMap(k => W[k]).filter(c => c && c.id);
const ids = new Set(chapters.map(c => c.id));

const problems = [];
const fail = m => problems.push(m);
let rows = 0;
const urls = new Set();
for (const c of chapters) {
  const list = R[c.id];
  if (!list || !list.length) { fail(`${c.id} (${c.num}) has no reading list`); continue; }
  if (!list.some(r => r[0] === 'paper')) fail(`${c.id} has no research paper`);
  if (!list.some(r => r[0] === 'case') && c.id !== 'b8') fail(`${c.id} has no real-world case`);
  const seen = new Set();
  for (const r of list) {
    rows++;
    const [kind, title, who, url, why, hi] = r;
    const at = `${c.id}: "${String(title).slice(0, 50)}"`;
    if (r.length !== 6) fail(`${at} has ${r.length} fields, not 6`);
    if (kind !== 'case' && kind !== 'paper') fail(`${at} has kind "${kind}"`);
    if (!title || !who) fail(`${at} is missing its title or source`);
    if (!/^https:\/\/[^\s]+$/.test(url || '')) fail(`${at} has no https link`);
    if (/arxiv\.org\/(pdf|html)\//.test(url)) fail(`${at} links a PDF or HTML copy; link the abstract page`);
    if (!why || why.length < 30) fail(`${at} has no line saying why to read it`);
    if (!hi || hi.length < 30) fail(`${at} has no Hinglish line`);
    if (/[ऀ-ॿ]/.test(hi || '')) fail(`${at} has Devanagari in its Hinglish line`);
    if (seen.has(url)) fail(`${at} is listed twice in the same chapter`);
    seen.add(url); urls.add(url);
  }
}
for (const id of Object.keys(R)) if (!ids.has(id)) fail(`reading list for unknown chapter "${id}"`);

console.log(`${rows} reading items across ${chapters.length} chapters · ${urls.size} distinct links`);
if (problems.length) {
  console.error('\n' + problems.length + ' problem(s):');
  problems.forEach(p => console.error('  ' + p));
  process.exit(1);
}
console.log('every chapter has the real world and the research');
