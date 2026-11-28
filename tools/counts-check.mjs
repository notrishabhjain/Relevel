#!/usr/bin/env node
/* One source of truth for every total the learner sees.

   The course app, the plan, the worksheet and the book each show totals:
   weeks on the route, steps, app chapters, book chapters. They once disagreed
   (a "16-week map" beside a 28-week route; "68 chapters" on one page and a
   different count on another), because each page typed its own number. Now
   the totals live once, in COUNTS (src/data/route.mjs, written by
   tools/route-gen.mjs from the route, the course and the book), and every
   page reads them from there. This check holds that line:

   1. COUNTS matches the data it summarises.
   2. No page's source types a total by hand: the route length is written
      {weeks} (app, route spec) or {{weeks}} (plan Markdown) and filled in.
   3. No built page shows a route length other than the one in COUNTS.

   Run after `node build.js` (it reads dist/). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { COUNTS, WEEKS, STEPS } from '../src/data/route.mjs';
import { loadBook } from '../book/build.mjs';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const rd = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const fails = [];
const fail = m => fails.push(m);

/* 1. COUNTS is true */
const C = JSON.parse(rd('content/defaults.json'));
const B = loadBook(path.join(ROOT, 'book'));
const want = { weeks: WEEKS.length, steps: STEPS.length, appChapters: C.chapters.length, bookChapters: B.chapters.length };
for (const [k, v] of Object.entries(want))
  if (COUNTS[k] !== v) fail(`COUNTS.${k} is ${COUNTS[k]} but the data has ${v}; run node tools/route-gen.mjs`);
if (!COUNTS.routes || !COUNTS.routes.full || COUNTS.routes.full.coreWeeks !== WEEKS.length)
  fail('COUNTS.routes.full.coreWeeks must equal the number of route weeks');
if (!COUNTS.routes || !COUNTS.routes.experienced || COUNTS.routes.experienced.includesTrackC !== true)
  fail('COUNTS.routes.experienced must say whether it includes Track C (it does: includesTrackC: true)');

/* 2. No hand-typed totals in the pages' sources. Comments are skipped: a
   comment may explain the number; only shown text matters. */
const SOURCES = ['src/app.js', 'src/views.js', 'src/sheets.js', 'src/progress.js', 'worksheet/build.mjs', 'worksheet/worksheet.js',
  'worksheet/data.mjs', 'plan/build.mjs', 'plan/tracker.js', 'plan/data.mjs', 'plan/weekly.md', 'plan/ship.md', 'plan/curriculum.md',
  'book/build.mjs', 'tools/route-gen.mjs'];
const WORDS = { 28: 'twenty-eight', 16: 'sixteen', 26: 'twenty-six' };
const stripComments = s => s.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ').replace(/<!--[\s\S]*?-->/g, ' ');
const totals = [
  [COUNTS.weeks, /\b(\d+)[ -]weeks?\b/gi, 'route length'],
  [COUNTS.appChapters, /\b(\d+)[ -](?:app |course |playbook )?chapters?\b/gi, 'app chapter count'],
  [COUNTS.steps, /\b(\d+) (?:route )?steps\b/gi, 'step count']
];
for (const f of SOURCES) {
  if (!fs.existsSync(path.join(ROOT, f))) continue;
  const text = stripComments(rd(f));
  for (const [n, re, what] of totals) {
    for (const m of text.matchAll(re)) if (+m[1] === n) fail(`${f}: "${m[0]}" types the ${what} by hand; use the COUNTS value`);
  }
  const w = WORDS[COUNTS.weeks];
  if (w && new RegExp(`\\bruns ${w}\\b|\\b${w}[ -]weeks?\\b`, 'i').test(text)) fail(`${f}: the route length "${w}" is typed by hand; use {weeks}`);
}

/* 3. Built pages show only the route length COUNTS holds. Any "N weeks"
   between 20 and 40 on a page is a route length (shorter spans, like "two
   weeks" or "every 4 weeks", are not), and must match. */
const PAGES = ['dist/site/plan/index.html', 'dist/site/worksheet/index.html', 'dist/site/worksheet/hi/index.html'];
const allowed = new Set([COUNTS.weeks, COUNTS.routes.full.withTrackCWeeks, COUNTS.routes.experienced.weeks].filter(Boolean));
for (const f of PAGES) {
  if (!fs.existsSync(path.join(ROOT, f))) { fail(`${f} is missing; run node build.js first`); continue; }
  const text = rd(f).replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const m of text.matchAll(/\b(\d+)[ -](?:weeks?|hafte|hafton)\b/gi)) {
    const n = +m[1];
    if (n >= 20 && n <= 40 && !allowed.has(n)) fail(`${f}: shows "${m[0]}", but the route is ${[...allowed].join(' or ')} weeks`);
  }
}

/* 4. Every book page says which app chapters it retells, and the list is the
   chapter's own course list (book front matter), so the two never drift. */
for (const c of B.chapters) {
  const f = 'dist/site/book/' + c.file;
  if (!fs.existsSync(path.join(ROOT, f)) || !c.course.length) continue;
  const m = rd(f).match(/<p class="retells">([\s\S]*?)<\/p>/);
  if (!m) { fail(`${f}: no "Retells app chapter" line`); continue; }
  const ids = [...m[1].matchAll(/#\/ch\/([\w-]+)/g)].map(x => x[1]);
  if (ids.join() !== c.course.join()) fail(`${f}: retells ${ids.join(',')} but its course list is ${c.course.join(',')}`);
}

if (fails.length) {
  console.error(fails.map(m => '  - ' + m).join('\n'));
  console.error(`\n${fails.length} total(s) out of step with COUNTS`);
  process.exit(1);
}
console.log(`counts: ${COUNTS.weeks} weeks · ${COUNTS.steps} steps · ${COUNTS.appChapters} app chapters · ${COUNTS.bookChapters} book chapters, one source for every page`);
