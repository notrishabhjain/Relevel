/* Generates src/data/route.mjs from the compact spec below, pulling titles,
   files and minutes from the book and the course so they cannot drift.
   Run after changing the spec, a chapter title or a book chapter:
     node build.js && node tools/route-gen.mjs && node build.js
   (the first build writes content/defaults.json, which this reads). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadBook } from '../book/build.mjs';
const R = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const B = loadBook(R + '/book'), H = loadBook(R + '/book/hi');
const C = JSON.parse(fs.readFileSync(R + '/content/defaults.json', 'utf8'));
const ch = id => { const c = C.chapters.find(x => x.id === id); if (!c) throw new Error('no chapter ' + id); return c; };
const bk = n => n === 'pre' ? B.preface : B.chapters[n - 1];
const bkHi = n => n === 'pre' ? H.preface : H.chapters[n - 1];
const rmin = w => Math.max(5, Math.round(w / 200));

/* Book chapters split over two days: [upto anchor of part 1, from anchor of part 2, label 1, label 2] */
const SPLIT = {
  8: ['s-8-4', '8.1 to 8.3', '8.4 to the end'],
  11: ['s-11-5', '11.1 to 11.4', '11.5 to the end'],
};
const FIRST_PASS = id => /^[ab]\d$/.test(id) || id === 'ch21cap';

const TRY = {
  'tokens':  { title: 'Count your own words in tokens', mins: 10, app: '#/ch/ch05',
    what: 'Open Chapter 0.5 and do only its first experiment. Paste a message you wrote today, once in English and once in Hinglish, and compare the counts.' },
  'tenmsgs': { title: 'Ten test messages, marked', mins: 15,
    what: 'Pick one small job, such as “does this message contain a phone number?”. On paper, write ten short messages and the right answer for each. Give them to a chat assistant one at a time and mark each answer. Your score out of ten is your first evaluation.' },
  'setup':   { title: 'The one-time setup', mins: 45, app: '#/setup',
    what: 'Do the setup page, one section at a time. You know what the key is for now. If a step fails, copy the exact error and ask a chat assistant.' },
  'capstone-plan': { title: 'Plan your capstone week', mins: 15,
    what: 'Read the capstone chapter’s brief and write, on one page, the smallest version you can ship in about eight hours. Everything else goes on a “later” list.' },
  'portfolio': { title: 'Put the project where people can see it', mins: 60, app: '#/project',
    what: 'Publish your findings page and the capstone write-up as one page with a link. Keep it plain. A page that exists beats a page that is pretty.' },
  'interviews': { title: 'Three practice interviews', mins: 90,
    what: 'Use the interview practice in Chapter B7. Answer three questions out loud, record yourself, and write down one thing to say better next time.' },
};

/* What each kind of step asks for. Kept to a few sentences so they translate once. */
const WHAT = {
  read: 'Read the chapter. The page ticks itself when you reach the end.',
  readPart1: n => 'Read sections ' + SPLIT[n][1] + ', then stop, even if you want to keep going.',
  readPart2: n => 'Read from section ' + SPLIT[n][2].split(' ')[0] + ' to the end of the chapter.',
  chapter: 'Read it, answer the boxes and do its hands-on steps. Press “Mark chapter complete” at the end.',
  firstPass: 'First pass: read it and answer the boxes, then press “Mark chapter complete”. You read its story in the book already. The “Build it” section is optional; leave it for later.',
  review: 'Three lines in your notepad: what made sense, what didn’t, and one question. Take a photo if you keep a log.'
};

/* The route. [week title, ship line, how-to ids, items] */
const W = [
  ['Start, and the problem worth solving', 'Your first three lines in your notepad.', ['first-pass'],
    ['ch:ch0', 'bk:pre', 'bk:1', 'bk:2', 'review']],
  ['Deciding what to build', 'Three lines for the week. You now know the story the project comes from.', ['first-pass'],
    ['bk:3', 'bk:4', 'bk:5', 'bk:6', 'bk:7', 'review']],
  ['Meet the machine', 'One line on what a token is, in your own words.', ['first-pass'],
    ['bk:8:1', 'bk:8:2', 'try:tokens', 'bk:9', 'review']],
  ['Talking to it, and checking it', 'Your first evaluation: ten messages and a score out of ten.', ['first-pass'],
    ['bk:10', 'bk:11:1', 'bk:11:2', 'bk:12', 'try:tenmsgs', 'review']],
  ['Product foundations, first pass', 'The boxes in A1 to A5 answered: your problem, users and market in your own words.', ['first-pass'],
    ['ch:a1', 'ch:a2', 'ch:a3', 'ch:a4', 'ch:a5', 'review']],
  ['Product foundations, then the setup', 'The boxes in A6 to A8 answered, and a working setup.', ['first-pass', 'setup'],
    ['ch:a6', 'ch:a7', 'ch:a8', 'try:setup', 'review']],
  ['First contact: your first model call', 'Your first model call, with its token count and cost written down.', ['first-pass'],
    ['ch:ch05', 'ch:ch1', 'ch:ch15b', 'review']],
  ['Instructions that work', 'The helper’s instructions, tested on your first answer key.', ['first-pass'],
    ['ch:ch2', 'ch:ch21', 'ch:ch22', 'bk:13', 'review']],
  ['Sorting and summarising', 'A sorter for the kind of ID, with its score.', ['first-pass'],
    ['ch:ch23', 'ch:ch24', 'ch:ch25', 'bk:14', 'review']],
  ['Holiday week, light: cutting long text', 'A rule for cutting text without splitting an ID.', ['first-pass'],
    ['ch:ch3', 'bk:15', 'review'], true],
  ['Holiday week, light: finding by words', 'Your pattern rules, scored by hand.', ['first-pass'],
    ['ch:ch4', 'bk:16', 'review'], true],
  ['Finding by meaning, and measuring it', 'The scoreboard: words against meaning, with a ship-or-not note.', ['first-pass'],
    ['ch:ch5', 'bk:17', 'ch:ch6', 'bk:18', 'review']],
  ['Your first complete system', 'Version 0 of the findings page, published.', ['first-pass', 'publish'],
    ['ch:ch7', 'ch:ch75', 'bk:19', 'review']],
  ['Answers a program can use', 'An extractor that says “not sure” instead of guessing.', ['first-pass'],
    ['ch:ch8', 'ch:ch85', 'bk:20', 'ch:ch9', 'review']],
  ['Context, thinking models and the wait', 'A budget for what is sent onward, and a design for the wait.', ['first-pass'],
    ['bk:21', 'ch:ch10', 'bk:22', 'ch:ch11', 'ch:ch115', 'review']],
  ['Better search, and the page that gives orders', 'Finding made better one change at a time, and your own tool attacked.', ['first-pass'],
    ['bk:23', 'ch:ch12', 'bk:24', 'ch:ch13', 'review']],
  ['Grading at scale, and what it costs', 'An automatic marker you have checked, and a cost model from measurements.', ['first-pass'],
    ['bk:25', 'ch:ch14', 'ch:ch145', 'bk:26', 'ch:ch15', 'review']],
  ['Real documents, and the rules', 'The sharing rule, and the system card.', ['first-pass'],
    ['bk:27', 'ch:ch16', 'bk:28', 'ch:ch165', 'bk:29', 'ch:ch17', 'review']],
  ['The spec, and build or buy', 'A requirements document that survives a change of model, and a build-or-buy call.', ['first-pass'],
    ['bk:30', 'ch:ch18', 'bk:31', 'ch:ch185', 'ch:ch19', 'review']],
  ['Wrong answers, impact, and the plumbing', 'The four answers the tool can give, a pilot design, and a test harness in Git.', ['first-pass'],
    ['bk:32', 'ch:ch20', 'ch:ch205', 'bk:33', 'ch:ch8f', 'review']],
  ['Production depth: models, context, retrieval', 'Your model choice with a back-up, and the gateway on one page.', ['first-pass'],
    ['bk:34', 'ch:ch9m', 'ch:ch10c', 'bk:35', 'ch:ch11r', 'review']],
  ['Production depth: tools, agents, pictures and voice', 'A workflow that cannot make risky changes alone, and the tool access policy.', ['first-pass'],
    ['bk:36', 'ch:ch12t', 'ch:ch13a', 'ch:ch14p', 'bk:37', 'ch:ch15mm', 'review']],
  ['Production depth: gates, watching, security', 'The release gate, the watch plan and the risk register.', ['first-pass'],
    ['bk:38', 'ch:ch16e', 'ch:ch17o', 'bk:39', 'ch:ch18s', 'review']],
  ['The product spec and the decision pack', 'The full requirements and a ten-slide decision pack.', ['first-pass'],
    ['bk:40', 'ch:ch19pm', 'ch:ch20d', 'bk:41', 'try:capstone-plan', 'review']],
  ['Capstone: ship it and defend it', 'Bharat Privacy Guard shipped, with its findings document and a short demo.', ['publish', 'demo-video'],
    ['ch:ch21cap', 'try:portfolio', 'review']],
  ['The business, and the job', 'Your portfolio page, three practice interviews and a look back over six months.', ['portfolio-site', 'mock-interviews', 'retro'],
    ['bk:42', 'ch:b1', 'bk:43', 'ch:b2', 'bk:44', 'ch:b3', 'bk:45', 'ch:b4', 'ch:b5', 'bk:46', 'ch:b6', 'bk:47', 'ch:b7', 'ch:b8', 'try:interviews', 'review']],
];

const START = Date.UTC(2026, 9, 19);
const fmt = (ms, withYear) => new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC', ...(withYear ? { year: 'numeric' } : {}) });
const weeks = W.map(([title, ship, how, items, light], i) => {
  const a = START + i * 7 * 864e5, b = a + 6 * 864e5;
  const dates = fmt(a) + ' – ' + fmt(b, new Date(a).getUTCFullYear() !== new Date(b).getUTCFullYear() || i === 25);
  const steps = items.map(it => {
    const [k, ref, part] = it.split(':');
    if (k === 'ch') {
      const c = ch(ref), fp = FIRST_PASS(ref);
      return { id: 'c:' + ref, kind: 'chapter', ch: ref, num: String(c.num), title: c.title,
        mins: fp ? (ref === 'ch21cap' ? 480 : 20) : c.minutes, firstPass: fp || undefined,
        what: ref === 'ch21cap' ? 'The chapter allows about thirty hours. Ship the smallest version that works in about eight, then keep improving. Press “Mark chapter complete” when it is shipped.'
          : fp ? WHAT.firstPass : WHAT.chapter };
    }
    if (k === 'bk') {
      const n = ref === 'pre' ? 'pre' : +ref, b = bk(n), h = bkHi(n);
      const s = { id: 'b:' + b.file + (part ? '#' + part : ''), kind: 'read', book: b.file, n: n === 'pre' ? 0 : n,
        title: b.title, titleHi: h.title, mins: rmin(b.words), what: WHAT.read };
      if (part) {
        const sp = SPLIT[n];
        s.part = +part; s.mins = Math.round(s.mins / 2) + 1;
        if (part === '1') { s.upto = sp[0]; s.what = WHAT.readPart1(n); }
        else { s.at = sp[0]; s.what = WHAT.readPart2(n); }
      }
      return s;
    }
    if (k === 'try') return { id: 't:' + ref, kind: 'try', ...TRY[ref], ...(TRY[ref].app ? { app: TRY[ref].app } : {}) };
    if (it === 'review') return { id: 't:review-' + (i + 1), kind: 'look', title: 'Look back', mins: 5, what: WHAT.review };
    throw new Error('bad item ' + it);
  });
  return { n: i + 1, start: new Date(a).toISOString().slice(0, 10), dates, title, ship, how, light: !!light,
    mins: steps.reduce((s, x) => s + x.mins, 0), steps };
});

/* every course chapter and every book chapter appears exactly once */
const chs = weeks.flatMap(w => w.steps.filter(s => s.kind === 'chapter').map(s => s.ch));
const missing = C.chapters.map(c => c.id).filter(id => !chs.includes(id));
const dup = chs.filter((x, i) => chs.indexOf(x) !== i);
const books = new Set(weeks.flatMap(w => w.steps.filter(s => s.kind === 'read').map(s => s.book)));
const bmiss = B.chapters.map(c => c.file).filter(f => !books.has(f));
if (missing.length || dup.length || bmiss.length) throw new Error('coverage: missing ' + missing + ' dup ' + dup + ' book missing ' + bmiss);

const MONTHS = [
  { n: 1, name: 'Month 1: Read first (the gentle start)', from: 1, to: 4,
    goal: 'Ten minutes a weekday. The book from its first page to chapter 12, three small tries and your first evaluation. Nothing to install.' },
  { n: 2, name: 'Month 2: Product foundations and first contact', from: 5, to: 9,
    goal: 'Track A’s boxes answered (your home ground), the setup working, your first model call, and a sorter with a score.' },
  { n: 3, name: 'Month 3: Finding and measuring', from: 10, to: 13,
    goal: 'Search by words and by meaning, a scoreboard, and version 0 of the findings page published. Weeks 10 and 11 are light holiday weeks.' },
  { n: 4, name: 'Month 4: What real systems add', from: 14, to: 18,
    goal: 'Dependable output, context and thinking models, better search, prompt injection, grading at scale, cost, documents and the rules.' },
  { n: 5, name: 'Month 5: Decisions and production depth', from: 19, to: 23,
    goal: 'The spec, build or buy, wrong answers and impact, then the production chapters: models, retrieval, tools, agents, gates, watching and security.' },
  { n: 6, name: 'Month 6: Ship it, defend it, get the job', from: 24, to: 26,
    goal: 'The decision pack, the capstone shipped and defended, the business chapters, a portfolio page and practice interviews.' },
].map(m => {
  const a = Date.parse(weeks[m.from - 1].start), b = Date.parse(weeks[m.to - 1].start) + 6 * 864e5;
  const ya = new Date(a).getUTCFullYear(), yb = new Date(b).getUTCFullYear();
  return { ...m, dates: fmt(a) + (ya !== yb ? ' ' + ya : '') + ' – ' + fmt(b) + ' ' + yb };
});

const src = `/* The route: one ordered list of steps that the playbook, the book, the plan
   and the daily reminder all read. GENERATED by tools/route-gen.mjs: edit the spec
   there, not this file, and keep it in course order.

   Week 1 starts Monday 19 October 2026. Each step is one of:
     chapter  a playbook chapter; done when it is marked complete
     read     a book chapter (or half of one); done when the book has ticked it
     try      a small task off the page; done when ticked
     look     the weekly look back; done when ticked
   Month 1 is the gentle start: reading and tries only, ten minutes a weekday. */

export const START = '2026-10-19';
export const WEEKS = ${JSON.stringify(weeks, null, 1)};
export const MONTHS = ${JSON.stringify(MONTHS, null, 1)};

/* Has this step been done, given a progress record (the playbook's saved state)? */
export function stepDone(step, S) {
  S = S || {};
  if (step.kind === 'chapter') return !!(S.done && S.done[step.ch]);
  if (step.kind === 'read' && S.read && S.read[step.book]) return true;
  return !!(S.steps && S.steps[step.id]);
}
export const STEPS = WEEKS.flatMap(w => w.steps.map(s => Object.assign({ week: w.n }, s)));
/* The first step not yet done, in route order, or null when all are done. */
export function nextStep(S) { return STEPS.find(s => !stepDone(s, S)) || null; }
/* Where a step opens. Book pages are absolute so they work from any page. */
export function stepHref(step, hi) {
  if (step.kind === 'chapter') return '/#/ch/' + step.ch;
  if (step.kind === 'read') return (hi ? '/book/hi/' : '/book/') + step.book + (step.at ? '#' + step.at : '');
  if (step.app) return '/' + step.app;
  return '/#/start';
}
/* Week number (1-26) for an India-time date string, 0 before the start, 27 after. */
export function weekOf(date) {
  const d = Math.floor((Date.parse(date + 'T00:00:00Z') - Date.parse(START + 'T00:00:00Z')) / 864e5);
  return d < 0 ? 0 : Math.min(WEEKS.length + 1, Math.floor(d / 7) + 1);
}
`;
fs.writeFileSync(R + '/src/data/route.mjs', src);
console.log(weeks.map(w => 'W' + w.n + ' ' + w.dates + ' ' + w.mins + 'min ' + w.steps.length + ' steps · ' + w.title).join('\n'));
console.log(MONTHS.map(m => m.name + ' | ' + m.dates).join('\n'));
