#!/usr/bin/env node
/* The figures (src/figs.js, src/data/figs-*.js): every one complete, in both
   languages, and every page that should have one has one.

   - each figure uses a known kind and has what that kind needs
   - every line it shows is an [English, Hinglish] pair, both filled in
   - a calculator works out a real number from its starting values
   - every app chapter has at least one figure, placed at a heading it has
   - every book chapter, plan week and worksheet topic shows at least one
   Run after `node build.js`: the last three are read from dist/site. */
import fs from 'node:fs';
import p from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const R = p.resolve(p.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['figs-a.js', 'figs-core.js', 'figs-b.js']) vm.runInContext(fs.readFileSync(p.join(R, 'src/data', f), 'utf8'), ctx);
const D = ctx.window.FIGDATA || {}, PL = ctx.window.FIGPLACE || {};
const C = JSON.parse(fs.readFileSync(p.join(R, 'content/defaults.json'), 'utf8'));
const errs = [];
const fail = m => errs.push(m);

/* figures the app's own pages use, not a chapter */
const PAGE_ONLY = new Set(['spaced-review']);
const NEEDS = {
  flow: ['steps'], cycle: ['steps'], seq: ['actors', 'msgs'], stack: ['layers'], tree: ['root'], venn: ['sets', 'regions'],
  matrix: ['q', 'pts', 'xl', 'yl'], bars: ['items', 'sets'], scale: ['zones', 'min', 'max', 'v'], calc: ['inputs', 'outputs'],
  funnel: ['stages', 'start'], compare: ['cols']
};
const NOT_TEXT = new Set(['t', 'fmt', 'ic', 'tone', 'id', 'order']);
const isPair = v => Array.isArray(v) && v.length === 2 && v.every(x => typeof x === 'string');

function walk(v, path, id) {
  if (isPair(v)) {
    if (!v[0].trim() || !v[1].trim()) fail(`${id}: ${path} is missing its ${v[0].trim() ? 'Hinglish' : 'English'}`);
    return;
  }
  if (typeof v === 'string') { if (/[a-z]{3,}\s+[a-z]{2,}/i.test(v)) fail(`${id}: ${path} is English only: "${v.slice(0, 40)}"`); return; }
  if (Array.isArray(v)) { v.forEach((x, i) => walk(x, path + '[' + i + ']', id)); return; }
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (!NOT_TEXT.has(k)) walk(x, path ? path + '.' + k : k, id); }
}

for (const [id, f] of Object.entries(D)) {
  if (!NEEDS[f.t]) { fail(`${id}: unknown kind "${f.t}"`); continue; }
  if (!isPair(f.title)) fail(`${id}: needs a title in both languages`);
  for (const k of NEEDS[f.t]) if (f[k] == null) fail(`${id}: a ${f.t} needs ${k}`);
  walk(f, '', id);
  if (f.t === 'calc') {
    const v = {}; f.inputs.forEach(x => { v[x.id] = x.v; if (!(x.min <= x.v && x.v <= x.max)) fail(`${id}: input ${x.id} starts outside its range`); });
    f.outputs.forEach((o, i) => { const r = o.f(v); if (!Number.isFinite(r)) fail(`${id}: output ${i} is not a number at the start`); });
  }
  if (f.t === 'bars') f.sets.forEach((s, i) => { if (s.v.length !== f.items.length) fail(`${id}: set ${i} has ${s.v.length} values for ${f.items.length} bars`); });
  if (f.t === 'compare') f.cols.forEach((c, i) => { if ((c.v || []).length !== (f.rows || []).length) fail(`${id}: column ${i} has ${(c.v || []).length} cells for ${(f.rows || []).length} rows`); });
  if (f.t === 'scale') { let last = f.min; for (const z of f.zones) { if (!(z.to > last)) fail(`${id}: zones must rise`); last = z.to; } if (last !== f.max) fail(`${id}: the last zone must end at max`); }
  if (f.t === 'venn') for (const k of f.order || Object.keys(f.regions)) if (!f.regions[k]) fail(`${id}: region ${k} is listed but not described`);
  if (f.t === 'seq') f.msgs.forEach((m, i) => { if (!(m.a in f.actors) || !(m.b in f.actors)) fail(`${id}: message ${i} names an actor that is not there`); });
}

/* placement: every chapter, at a heading it has */
const byId = Object.fromEntries(C.chapters.map(c => [c.id, c]));
const used = new Set();
for (const [ch, list] of Object.entries(PL)) {
  const c = byId[ch];
  if (!c) { fail(`FIGPLACE names chapter ${ch}, which does not exist`); continue; }
  const heads = (c.story || []).filter(b => Array.isArray(b) && b[0] === 'h').length;
  for (const [id, rule] of list) {
    used.add(id);
    if (!D[id]) fail(`${ch}: places figure ${id}, which does not exist`);
    const m = /^h:(\d+)$/.exec(rule);
    if (!m && rule !== 'top' && rule !== 'key') fail(`${ch}: ${id} has an unknown place "${rule}"`);
    if (m && +m[1] > heads) fail(`${ch}: ${id} is placed under heading ${m[1]}, but the chapter has ${heads}`);
  }
}
const bare = C.chapters.filter(c => !(PL[c.id] || []).length).map(c => c.id);
if (bare.length) fail(`chapters with no figure: ${bare.join(', ')}`);
for (const id of Object.keys(D)) if (!used.has(id) && !PAGE_ONLY.has(id)) fail(`figure ${id} is never shown`);

/* the other portals, as built */
const site = p.join(R, 'dist/site');
let bookN = 0, planN = 0, wsN = 0;
if (fs.existsSync(p.join(site, 'figs.js'))) {
  for (const dir of ['book', 'book/hi']) {
    for (const f of fs.readdirSync(p.join(site, dir)).filter(f => /^(\d\d-.*|preface|afterword)\.html$/.test(f))) {
      const html = fs.readFileSync(p.join(site, dir, f), 'utf8'), ids = [...html.matchAll(/class="bookfig" data-fig="([^"]+)"/g)].map(m => m[1]);
      if (!ids.length) fail(`${dir}/${f} has no figure`);
      ids.forEach(id => { if (!D[id]) fail(`${dir}/${f} shows unknown figure ${id}`); });
      if (dir === 'book') bookN++;
      if (!/src="\/figs\.js"/.test(html)) fail(`${dir}/${f} does not load /figs.js`);
    }
  }
  const plan = fs.readFileSync(p.join(site, 'plan/index.html'), 'utf8');
  planN = (plan.match(/class="ideafig" data-fig="/g) || []).length;
  if (planN !== 26) fail(`the plan shows a figure in ${planN} of 26 weeks`);
  const ws = fs.readFileSync(p.join(site, 'worksheet/index.html'), 'utf8');
  for (const t of ws.split('<section class="topic"').slice(1)) { wsN++; if (!/data-fig="/.test(t)) fail(`worksheet topic ${(t.match(/id="(t\d+)"/) || [])[1]} has no figure`); }
} else fail('dist/site/figs.js is missing: run node build.js first');

if (errs.length) { console.error(errs.length + ' problem(s):\n  ' + errs.join('\n  ')); process.exit(1); }
console.log(`${Object.keys(D).length} figures · ${C.chapters.length} of ${C.chapters.length} chapters illustrated · ${bookN} book chapters (and their Hinglish) · ${planN} plan weeks · ${wsN} worksheet topics`);
console.log('every figure is complete in English and Hinglish');
