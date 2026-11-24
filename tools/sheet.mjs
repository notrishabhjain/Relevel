#!/usr/bin/env node
/* Rewrite a piece of the course safely: pull its text out into a sheet, edit
   the sheet, and put it back.

   The course text lives in hand-written JS data files, and every English line
   has a Hinglish translation keyed on that exact line, spread over many files.
   Editing a line by hand means finding the literal, escaping it, and moving its
   translation key in another file in the same change. Done by hand across a
   whole chapter that is slow and easy to get wrong. So:

     node tools/sheet.mjs extract chapter:ch1 sheets/ch1.json
       writes every line of the chapter a reader sees, in reading order, with
       its Hinglish: [{n, where, en, hi}], plus a read-only copy of the original
       (sheets/ch1.orig.json).

     (edit "en" and "hi" in sheets/ch1.json; nothing else)

     node tools/sheet.mjs apply chapter:ch1 sheets/ch1.json
       replaces each changed English line in the chapter's source, and writes
       the chapter's Hinglish to src/data/hing-rw-zz-simple-ch1.js, which loads
       last and so wins over older translations of the same line.

   Then `node tools/hing-prune.mjs` removes translations whose English no
   longer appears anywhere, which the content check would otherwise fail on.

   Other targets: items:items1 (the questions in src/data/items1.js),
   glossary, project, setup.

   Lines used in more than one place (a callout label shared by many chapters)
   are marked "shared" and are not changed by apply; change them centrally.
   Lines that the technical guard (tools/v31-content-check.mjs) requires are
   listed under "keep" and must survive the rewrite word for word. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { literals, encode } from './jslit.mjs';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const rd = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

/* ---------- load the data the way the build does ---------- */
function dataFiles() {
  const b = rd('build.js');
  const listed = [...b.matchAll(/'(src\/data\/[\w.-]+\.js)'/g)].map(m => m[1]);
  const rw = fs.readdirSync(path.join(ROOT, 'src/data')).filter(f => /^hing-rw-.*\.js$/.test(f)).sort().map(f => 'src/data/' + f);
  const at = listed.indexOf('src/data/hing-skills.js');
  const order = [...listed.slice(0, at + 1), ...rw, ...listed.slice(at + 1)];
  return [...new Set(order)];
}
export function load() {
  const W = {};
  for (const f of dataFiles()) new Function('window', rd(f))(W);
  const chapters = (W.PARTS || []).reduce((a, p) => a.concat(W['PART' + p.n] || []), []);
  return { W, chapters, HING: W.HING || {} };
}

/* ---------- what a reader sees: the same walk as tools/content-check.mjs ---------- */
function walker() {
  const list = [];
  const add = (where, v) => { if (typeof v === 'string' && v.trim()) list.push({ where, en: v }); };
  const walk = (where, v) => {
    if (typeof v === 'string') return add(where, v);
    if (Array.isArray(v)) return v.forEach((x, i) => walk(where + '[' + i + ']', x));
    if (v && typeof v === 'object') Object.keys(v).forEach(k => { if (k !== 'id') walk(where + '.' + k, v[k]); });
  };
  const prose = (where, b) => {
    if (!Array.isArray(b)) return;
    if (['code', 'lab', 'q', 'embed'].includes(b[0])) return;
    if (b[0] === 'do') { add(where + ' do-title', b[1]); (b[2] || []).forEach((x, i) => prose(where + ' > ' + i + ':' + (Array.isArray(x) ? x[0] : '?'), x)); return; }
    if (b[0] === 'unit') { add(where + ' unit-title', b[2]); walk(where + ' unit', b[3]); return; }
    walk(where + ' ' + b[0], b.slice(1));
  };
  return { list, add, walk, prose };
}
function chapterLines(c) {
  const w = walker();
  if (c.plan) w.walk('plan', c.plan);
  (c.words || []).forEach(([t, d], i) => { w.add('words[' + i + '].term', t); w.add('words[' + i + '].meaning', d); });
  w.add('title', c.title); w.add('concept', c.concept); w.walk('takeaway', c.takeaway);
  if (c.capstone) {
    w.add('capstone.title', c.capstone.title); w.add('capstone.brief', c.capstone.brief); w.add('capstone.where', c.capstone.where);
    w.walk('capstone.steps', c.capstone.steps); w.walk('capstone.done', c.capstone.done);
  }
  (c.needs || []).forEach((n, i) => { w.add('needs[' + i + '].what', n[0]); w.add('needs[' + i + '].why', n[1]); });
  (c.story || []).forEach((b, i) => w.prose('story[' + i + ']:' + (Array.isArray(b) ? b[0] : '?'), b));
  (c.handson || []).forEach((st, i) => { w.add('handson[' + i + '].h', st.h); (st.b || []).forEach((b, j) => w.prose('handson[' + i + '].b[' + j + ']', b)); });
  return w.list;
}
function itemLines(items) {
  const w = walker();
  items.forEach(([id, , , type, stem, opts, ans, why]) => {
    w.add(id + ' question', stem); w.add(id + ' explanation', why);
    if (type === 'judge') w.add(id + ' model answer', ans);
    else if (type !== 'num') w.walk(id + ' options', opts);
  });
  return w.list;
}

/* ---------- targets ---------- */
const PARTFILES = ['partA', 'part1', 'part2', 'part3', 'part4', 'part5', 'partB'].map(f => 'src/data/' + f + '.js');
const idRe = id => new RegExp('\\bid:\\s*[\'"]' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\'"]');
function target(spec, D) {
  const [kind, arg] = spec.split(':');
  if (kind === 'chapter') {
    const c = D.chapters.find(x => x.id === arg);
    if (!c) throw new Error('no chapter ' + arg);
    const file = PARTFILES.find(f => idRe(arg).test(rd(f)));
    if (!file) throw new Error('chapter ' + arg + ' not found in the part files');
    const src = rd(file), start = src.search(idRe(arg));
    /* the chapter ends where the next chapter of the same file begins */
    let end = src.length;
    for (const o of D.chapters) {
      if (o.id === arg) continue;
      const m = src.search(idRe(o.id));
      if (m > start && m < end) end = m;
    }
    return { file, start, end, title: c.title, lines: chapterLines(c), locked: new Set([c.title]) };
  }
  if (kind === 'items') {
    const file = 'src/data/' + arg + '.js';
    const sb = {}; new Function('window', rd(file))(sb);
    const items = Object.values(sb).find(Array.isArray) || [];
    return { file, start: 0, end: rd(file).length, title: arg, lines: itemLines(items), locked: new Set() };
  }
  if (kind === 'glossary') {
    const file = 'src/data/reference.js', src = rd(file);
    const start = src.indexOf('window.GLOSSARY'), end = src.indexOf('window.', start + 10);
    const w = walker();
    (D.W.GLOSSARY || []).forEach(([t, d], i) => w.add('glossary[' + i + '] ' + t, d));
    return { file, start, end: end < 0 ? src.length : end, title: 'Glossary', lines: w.list, locked: new Set() };
  }
  if (kind === 'project') {
    const file = 'src/data/project.js', w = walker();
    w.walk('project', D.W.PROJECT);
    return { file, start: 0, end: rd(file).length, title: 'Project page', lines: w.list, locked: new Set(),
      /* identifiers and sample data, not prose */
      lockWhere: /\.chapters\[|\.ids\.rows|\.samples\.rows|\.answerKey\.versions\[|\.tech$/ };
  }
  if (kind === 'setup') {
    const file = 'src/data/reference.js', src = rd(file);
    const start = src.indexOf('window.SETUP'), end = src.indexOf('window.', start + 10);
    const w = walker(), SU = D.W.SETUP || {};
    w.add('title', SU.title); w.add('blurb', SU.blurb); w.add('oneline', SU.oneline);
    (SU.sections || []).forEach((x, i) => { w.add('section[' + i + '].h', x.h); (x.b || []).forEach((b, j) => w.prose('section[' + i + '].b[' + j + ']', b)); });
    w.walk('trouble', SU.trouble);
    return { file, start, end: end < 0 ? src.length : end, title: 'Setup page', lines: w.list, locked: new Set() };
  }
  throw new Error('unknown target ' + spec);
}

/* Which lines appear in more than one place: other chapters, the questions,
   the reference pages, or the app's own code. Those are not one chapter's to
   change. */
function usage(D) {
  const count = new Map();
  const bump = (scope, s) => { s = s.trim(); if (!count.has(s)) count.set(s, new Set()); count.get(s).add(scope); };
  D.chapters.forEach(c => chapterLines(c).forEach(l => bump('chapter:' + c.id, l.en)));
  const items = [].concat(D.W.ITEMS1 || [], D.W.ITEMS2 || [], D.W.ITEMS3 || [], D.W.ITEMS4 || [], D.W.ITEMS5 || [], D.W.ITEMS6 || [], D.W.ITEMS7 || []);
  itemLines(items).forEach(l => bump('items', l.en));
  const ref = walker();
  ['GLOSSARY', 'SETUP', 'PROJECT', 'PARTS', 'APPENDIX', 'LATER', 'DOMAINS'].forEach(k => ref.walk(k, D.W[k]));
  ref.list.forEach(l => bump('reference', l.en));
  const chrome = ['src/app.js', 'src/views.js', 'src/labs.js', 'src/studio.js', 'src/engine.js', 'src/playground.js', 'src/sheets.js', 'src/pyrun.js', 'src/llm.js']
    .map(rd).join('\n');
  return { count, chrome };
}

/* the phrases the technical guard requires, as regexes */
function guardPhrases() {
  const g = rd('tools/v31-content-check.mjs');
  const req = g.slice(g.indexOf('const require'));
  return [...req.matchAll(/\[\/(.+?)\/i,/g)].map(m => new RegExp(m[1], 'i'));
}

/* ---------- commands ---------- */
function extract(spec, out) {
  const D = load(), T = target(spec, D), U = usage(D);
  const scopeOf = spec.startsWith('chapter:') ? spec : null;
  const seen = new Set(), entries = [];
  for (const l of T.lines) {
    if (seen.has(l.en)) continue;
    seen.add(l.en);
    const key = l.en.trim(), uses = U.count.get(key) || new Set();
    const shared = T.locked.has(l.en) || (T.lockWhere && T.lockWhere.test(l.where)) || [...uses].some(s => s !== scopeOf && s !== 'items' && scopeOf) ||
      (scopeOf && uses.has('items')) || (!scopeOf && uses.size > 1) || (key.length < 60 && U.chrome.includes(key));
    entries.push({ n: entries.length, where: l.where, ...(shared ? { shared: true } : {}), en: l.en, hi: D.HING[key] ?? null });
  }
  const text = T.lines.map(l => l.en).join('\n');
  const keep = guardPhrases().filter(r => r.test(text)).map(r => r.source);
  const sheet = { target: spec, file: T.file, title: T.title, keep, entries };
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(sheet, null, 1));
  fs.writeFileSync(out.replace(/\.json$/, '') + '.orig.json', JSON.stringify(sheet, null, 1));
  const words = entries.reduce((a, e) => a + e.en.split(/\s+/).length, 0);
  console.log(`${spec}: ${entries.length} lines (${entries.filter(e => e.shared).length} shared), ~${words} words → ${out}`);
}

const tags = s => (String(s).match(/<\/?[a-z]+[^>]*>/gi) || []).map(t => t.replace(/\s.*>/, '>').toLowerCase()).sort().join(' ');
const holes = s => (String(s).match(/\{[a-z]+\}/gi) || []).sort().join(' ');

function apply(spec, file) {
  const origFile = file.replace(/\.json$/, '') + '.orig.json';
  const appliedFile = file.replace(/\.json$/, '') + '.applied.json';
  /* After a first apply the source holds the applied lines, so later applies
     start from those. The originals stay the reference for shared lines,
     required phrases and the Hinglish that existed before. */
  const first = JSON.parse(fs.readFileSync(origFile, 'utf8'));
  const orig = fs.existsSync(appliedFile) ? JSON.parse(fs.readFileSync(appliedFile, 'utf8')) : first;
  orig.entries.forEach((e, i) => { const f = first.entries[i]; if (f) { e.shared = f.shared; e.where = f.where; if (e.hi == null) e.hi = f.hi; } });
  orig.keep = first.keep;
  const edit = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (orig.target !== spec || edit.target !== spec) throw new Error('sheet is for ' + orig.target + ', not ' + spec);
  const D = load(), T = target(spec, D);
  const problems = [], warnings = [];
  const byN = new Map(edit.entries.map(e => [e.n, e]));
  const changes = new Map(), hi = new Map();
  for (const o of orig.entries) {
    const e = byN.get(o.n);
    if (!e) { problems.push(`line ${o.n} is missing from the edited sheet`); continue; }
    const en = typeof e.en === 'string' ? e.en : '', h = typeof e.hi === 'string' ? e.hi : '';
    if (!en.trim()) { problems.push(`line ${o.n} (${o.where}): English is empty`); continue; }
    if (o.hi !== null && !h.trim()) { problems.push(`line ${o.n} (${o.where}): Hinglish is empty`); continue; }
    if (/[ऀ-ॿ]/.test(h)) problems.push(`line ${o.n}: Hinglish contains Devanagari`);
    if (tags(en) !== tags(o.en)) warnings.push(`line ${o.n}: HTML tags changed (${tags(o.en) || 'none'} → ${tags(en) || 'none'})`);
    if (holes(en) !== holes(o.en)) problems.push(`line ${o.n}: placeholders changed (${holes(o.en)} → ${holes(en)})`);
    if (o.shared) {
      if (en !== o.en || (o.hi !== null && h !== o.hi)) warnings.push(`line ${o.n} is shared with other pages; left unchanged`);
      continue;
    }
    if (en !== o.en) changes.set(o.en, en);
    if (o.hi !== null || h) {
      const k = en.trim();
      if (hi.has(k) && hi.get(k) !== h) warnings.push(`line ${o.n}: two lines now read the same in English; kept the first Hinglish`);
      else hi.set(k, h);
    }
  }
  /* the technical guard's phrases must survive */
  const after = orig.entries.map(o => { const e = byN.get(o.n); return (o.shared || !e) ? o.en : e.en; }).join('\n');
  for (const k of orig.keep || []) if (!new RegExp(k, 'i').test(after)) problems.push(`a required phrase is gone: /${k}/ — keep it word for word`);
  if (problems.length) { console.error('Not applied:\n  - ' + problems.join('\n  - ')); process.exit(1); }

  /* replace the literals inside the target's span only */
  let src = rd(T.file);
  const lits = literals(src).filter(l => l.start >= T.start && l.end <= T.end);
  const found = new Map();
  let out = '', at = 0;
  for (const l of lits) {
    if (!changes.has(l.value)) continue;
    out += src.slice(at, l.start) + encode(changes.get(l.value));
    at = l.end;
    found.set(l.value, (found.get(l.value) || 0) + 1);
  }
  out += src.slice(at);
  const missing = [...changes.keys()].filter(k => !found.has(k));
  if (missing.length) { console.error('Not applied: could not find these lines as plain strings in ' + T.file + ':\n  - ' + missing.map(m => m.slice(0, 80)).join('\n  - ')); process.exit(1); }
  /* the file must still evaluate */
  try { new Function('window', out)({}); } catch (e) { console.error('Not applied: the edited file does not run: ' + e.message); process.exit(1); }
  fs.writeFileSync(path.join(ROOT, T.file), out);

  const slug = spec.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
  const hf = 'src/data/hing-rw-zz-simple-' + slug + '.js';
  const body = [...hi.entries()].map(([k, v]) => '  ' + encode(k) + ':\n    ' + encode(v) + ',').join('\n');
  fs.writeFileSync(path.join(ROOT, hf),
    `/* Hinglish for ${T.title} (${spec}), in simple words.\n   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */\n` +
    `Object.assign(window.HING = window.HING || {}, {\n${body}\n});\n`);
  fs.writeFileSync(appliedFile, JSON.stringify({ ...edit, entries: orig.entries.map(o => { const e = byN.get(o.n);
    return o.shared ? o : { ...o, en: e.en, hi: typeof e.hi === 'string' ? e.hi : o.hi }; }) }, null, 1));
  console.log(`${spec}: ${changes.size} English lines changed in ${T.file}; ${hi.size} Hinglish lines → ${hf}`);
  if (warnings.length) console.log('Notes:\n  - ' + warnings.slice(0, 30).join('\n  - ') + (warnings.length > 30 ? `\n  - …and ${warnings.length - 30} more` : ''));
}

function list() {
  const D = load();
  for (const f of PARTFILES) {
    const src = rd(f);
    const ids = D.chapters.filter(c => idRe(c.id).test(src)).map(c => c.id + '(' + chapterLines(c).reduce((a, l) => a + l.en.split(/\s+/).length, 0) + 'w)');
    console.log(f + ': ' + ids.join(' '));
  }
}

if (import.meta.url === 'file://' + process.argv[1]) {
  const [cmd, spec, file] = process.argv.slice(2);
  if (cmd === 'extract' && spec && file) extract(spec, file);
  else if (cmd === 'apply' && spec && file) apply(spec, file);
  else if (cmd === 'list') list();
  else { console.error('usage: node tools/sheet.mjs extract|apply <target> <sheet.json>  |  node tools/sheet.mjs list'); process.exit(2); }
}
