#!/usr/bin/env node
/* Checks the reading edition (book/) against the course app.

   The book is only worth having if it stays in step with the course, so this
   fails on anything that would let it drift:

     coverage    every app chapter is retold in exactly one book chapter
     order       a book chapter never comes before an app chapter it depends on
     vocabulary  a word the book teaches is not used before the chapter that
                 teaches it, and is used in that chapter
     voice       none of the stock phrases that make prose read as machine-made
     links       every page the builder writes links only to pages that exist  */
import fs from 'node:fs';
import os from 'node:os';
import p from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadBook, buildBook, termRegex } from '../book/build.mjs';

const R = p.resolve(p.dirname(fileURLToPath(import.meta.url)), '..');
const C = JSON.parse(fs.readFileSync(p.join(R, 'content/defaults.json'), 'utf8'));
const problems = [];
const fail = m => problems.push(m);

/* `node tools/book-check.mjs` checks the English edition and, when it exists,
   the Hinglish one too; `node tools/book-check.mjs book/hi` checks only that. */
const ARG = process.argv[2];
const IS_HI = !!ARG;
const ROOT = p.join(R, ARG || 'book');
let B;
try { B = loadBook(ROOT); } catch (e) { console.error('book: ' + e.message); process.exit(1); }

/* every unit of text, in reading order */
const units = [];
if (B.preface) units.push({ key: 'preface', label: 'the preface', u: B.preface, index: 0 });
B.chapters.forEach(c => units.push({ key: c.file, label: `chapter ${c.n} (${c.title})`, u: c, index: units.length }));
if (B.afterword) units.push({ key: 'afterword', label: 'the afterword', u: B.afterword, index: units.length });

if (!B.chapters.length) fail('the book has no chapters');

/* the Hinglish edition says the same things in the same order: same files, same app chapters, same words taught */
if (IS_HI) {
  const E = loadBook(p.join(R, 'book'));
  if (E.chapters.length !== B.chapters.length) fail(`the Hinglish edition has ${B.chapters.length} chapters; the English one has ${E.chapters.length}`);
  E.chapters.forEach((e, i) => {
    const h = B.chapters[i];
    if (!h) return;
    if (h.file !== e.file) fail(`chapter ${e.n}: the Hinglish file is ${h.file}; it must be ${e.file}`);
    if (h.course.join(' ') !== e.course.join(' ')) fail(`chapter ${e.n}: Hinglish retells "${h.course.join(' ')}"; English retells "${e.course.join(' ')}"`);
    if (h.goals.length !== e.goals.length) fail(`chapter ${e.n}: ${h.goals.length} goals in Hinglish, ${e.goals.length} in English`);
    if (h.terms.map(x => x.term).join('|') !== e.terms.map(x => x.term).join('|')) fail(`chapter ${e.n}: the words taught differ from the English chapter`);
  });
  for (const k of ['preface', 'afterword']) if (!!E[k] !== !!B[k]) fail(`the Hinglish edition ${B[k] ? 'has' : 'lacks'} the ${k}; the English one ${E[k] ? 'has' : 'lacks'} it`);
}

/* ---- coverage and order against the course ---- */
const courseIds = new Set(C.chapters.map(c => c.id));
const home = new Map();
for (const un of units) {
  for (const id of un.u.course || []) {
    if (!courseIds.has(id)) fail(`${un.label} retells "${id}", which is not a chapter in the app`);
    else if (home.has(id)) fail(`app chapter ${id} is retold twice (${home.get(id).label} and ${un.label})`);
    else home.set(id, un);
  }
}
const missing = C.chapters.filter(c => !home.has(c.id));
for (const c of C.chapters) {
  const mine = home.get(c.id);
  if (!mine) continue;
  for (const pre of c.prerequisites || []) {
    const theirs = home.get(pre);
    if (theirs && theirs.index > mine.index)
      fail(`${mine.label} retells ${c.id}, which needs ${pre}, but ${pre} is not retold until ${theirs.label}`);
  }
}

/* ---- vocabulary: taught once, and not used before ---- */
const seenTerm = new Map();
const plainText = u => [u.title, u.summary, u.body].join('\n').replace(/[*_`]/g, '');
units.forEach(un => {
  for (const t of un.u.terms || []) {
    const key = t.term.toLowerCase();
    if (seenTerm.has(key)) fail(`"${t.term}" is taught twice (${seenTerm.get(key).label} and ${un.label})`);
    else seenTerm.set(key, un);
  }
});
for (const [key, un] of seenTerm) {
  const t = un.u.terms.find(x => x.term.toLowerCase() === key);
  const re = termRegex(t);
  if (!re.test(plainText(un.u))) fail(`${un.label} teaches "${t.term}" but never uses the word`);
  for (const earlier of units) {
    if (earlier.index >= un.index) break;
    const m = plainText(earlier.u).match(re);
    if (m) {
      const text = plainText(earlier.u), at = text.search(re);
      fail(`"${m[0]}" is used in ${earlier.label} before ${un.label} teaches it: …${text.slice(Math.max(0, at - 40), at + 40).replace(/\s+/g, ' ')}…`);
    }
  }
}

/* ---- voice ---- */
const STOCK = [
  /\bdelv(e|es|ing)\b/i, /\btapestry\b/i, /let['’]s dive/i, /\bgame[- ]chang/i, /\bunlock(s|ing)? (the )?(power|potential)/i,
  /\bleverag(e|es|ing)\b/i, /in today['’]s (fast[- ]paced|digital|ever)/i, /it['’]s worth noting/i, /\bseamless(ly)?\b/i,
  /\brobust\b/i, /\bcutting[- ]edge\b/i, /\bin the realm of\b/i, /\bat the end of the day\b/i, /\bnavigate the (complex|landscape)/i,
  /\bjourney of a thousand\b/i, /\bwithout further ado\b/i,
  /\bimagine (a|an|you|that)\b/i, /\bpicture (this|a|an)\b/i, /\bnot just\b[^.]{0,60}\bbut\b/i, /\bit['’]s not (about )?[^.]{1,60}[,;] it['’]s\b/i,
  /\bhere['’]s the (thing|catch)\b/i, /\bthe (real|hidden) (magic|power)\b/i, /\bsilver bullet\b/i, /\bwhisper(ed|s)?\b/i, /\bdance of\b/i
];
const HANDS_ON = [/\bexercise\s*\d/i, /\bhomework\b/i, /\bopen (a|your) (notebook|colab|terminal)\b/i, /\bpip install\b/i, /\byour task\b/i];
for (const un of units) {
  const text = [un.u.summary, un.u.body].join('\n');
  for (const re of STOCK) { const m = text.match(re); if (m) fail(`${un.label}: stock phrase "${m[0]}"`); }
  for (const re of HANDS_ON) { const m = text.match(re); if (m) fail(`${un.label}: reads like instructions ("${m[0]}"); the exercises live in the app`); }
  const dashes = (un.u.body.match(/—/g) || []).length;
  if (dashes > 4) fail(`${un.label} has ${dashes} em dashes; use full stops or commas`);
  const w = un.u.words;
  const lo = 1100, hi = IS_HI ? 6500 : 3600;   // Hinglish takes about half as many words again
  if (un.key !== 'preface' && un.key !== 'afterword' && (w < lo || w > hi))
    fail(`${un.label} is ${w} words; a chapter runs ${lo.toLocaleString()} to ${hi.toLocaleString()}`);
  const sentences = un.u.body.replace(/```[\s\S]*?```/g, ' ').replace(/^\|.*$/gm, ' ').replace(/[*_]/g, '').split(/(?<=[.!?]["”’']?)\s+/).filter(s => s.trim().length > 0);
  const lens = sentences.map(s => (s.match(/\S+/g) || []).length);
  const longest = Math.max(0, ...lens);
  if (longest > 70) fail(`${un.label} has a sentence of ${longest} words; split it: "${sentences[lens.indexOf(longest)].trim().slice(0, 70)}…"`);
}

/* ---- links in the built pages ---- */
const tmp = fs.mkdtempSync(p.join(os.tmpdir(), 'book-'));
let built = null;
try {
  built = buildBook(ROOT, tmp, { siteBase: '/book/', appUrl: '/', hasOther: false, assetsFrom: p.join(R, 'book') });
  for (const f of fs.readdirSync(tmp).filter(f => f.endsWith('.html'))) {
    const html = fs.readFileSync(p.join(tmp, f), 'utf8');
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
    for (const m of html.matchAll(/\ssrc="([^"]+)"/g)) if (!m[1].startsWith('/') && !/^https?:/.test(m[1])) fail(`${f}: relative script or image ${m[1]}`);
    for (const m of html.matchAll(/href="([^"#]*)(#[^"]*)?"/g)) {
      const [, file, hash] = m;
      if (/^(https?:|mailto:)/.test(file)) continue;
      /* a relative link breaks when the page is opened as /book (no slash) */
      if (file && !file.startsWith('/')) fail(`${f}: relative link ${file}; every link must start from the site root`);
      /* pages link from the site root: /book/... is the book (the Hinglish pages under /book/hi/), anything else is the app */
      if (file.startsWith('/') && !file.startsWith('/book/')) continue;
      const rel = file.replace(/^\/book\/(hi\/)?/, '');
      if (file && rel && !fs.existsSync(p.join(tmp, rel)) && !(IS_HI && /^(style\.css|reader\.js)$/.test(rel)))
        fail(`${f}: links to ${file}, which does not exist`);
      if (!file && hash && hash.length > 1 && !ids.has(hash.slice(1))) fail(`${f}: links to ${hash}, which is not on the page`);
      if (rel && hash && hash.length > 1 && fs.existsSync(p.join(tmp, rel))) {
        const target = fs.readFileSync(p.join(tmp, rel), 'utf8');
        if (!target.includes(`id="${hash.slice(1)}"`)) fail(`${f}: links to ${file}${hash}, which is not on that page`);
      }
    }
  }
} catch (e) { fail('building the book failed: ' + e.message); }
finally { fs.rmSync(tmp, { recursive: true, force: true }); }

if (built) {
  console.log(`${B.chapters.length} chapters · ${built.words.toLocaleString('en')} words · ${built.terms} words in the glossary`);
  console.log(`${home.size} of ${C.chapters.length} app chapters retold`);
}
if (missing.length) {
  fail(`${missing.length} app chapter(s) not retold anywhere: ${missing.slice(0, 8).map(c => c.num).join(', ')}${missing.length > 8 ? ', …' : ''}`);
}
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.slice(0, 40).forEach(m => console.error('  ' + m));
  if (problems.length > 40) console.error(`  …and ${problems.length - 40} more`);
  process.exit(1);
}
console.log('the book is in step with the course');
if (!IS_HI && fs.existsSync(p.join(R, 'book/hi/book.json'))) {
  console.log('\nHinglish edition:');
  const r = spawnSync(process.execPath, [fileURLToPath(import.meta.url), 'book/hi'], { stdio: 'inherit' });
  if (r.status) process.exit(r.status);
}
