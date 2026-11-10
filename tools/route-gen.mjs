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
};
const FIRST_PASS = id => /^[ab]\d$/.test(id) || id === 'ch21cap';

const TRY = {
  'setup':   { title: 'Connect a model, once', mins: 15, app: '#/setup',
    what: 'Do the Connect page, one section at a time: get a free key, paste it in, and run the test call. You saw tokens and cost in Chapter 0.5, so you know what the key pays for. If a step fails, the page says why; copy the exact error into your notes.' },
  'capstone-plan': { title: 'Plan your capstone', mins: 15,
    what: 'Read the capstone chapter’s brief and write, on one page, the smallest version you can ship in about eight hours over two weeks. Everything else goes on a “later” list.' },
  'capstone-build': { title: 'Capstone, first half: build and break it', mins: 240, app: '#/ch/ch21cap',
    what: 'Work through the capstone chapter up to its measuring step: put the pieces you built in earlier chapters together, then try to break it. Stop at about four hours, even if you want to keep going. Next week you measure it, ship it and defend it.' },
  'portfolio': { title: 'Put the project where people can see it', mins: 60, app: '#/project',
    what: 'Publish your findings page and the capstone write-up as one page with a link. Keep it plain. A page that exists beats a page that is pretty.' },
  'interviews': { title: 'Three practice interviews', mins: 90, app: '#/ch/b7#record',
    what: 'Use the interview practice in Chapter B7. Answer three questions out loud, record yourself, and write down one thing to say better next time.' },
};

/* What each kind of step asks for. Kept to a few sentences so they translate once. */
const WHAT = {
  read: 'Read the chapter. The page ticks itself when you reach the end.',
  readPart1: n => 'Read sections ' + SPLIT[n][1] + ', then stop, even if you want to keep going.',
  readPart2: n => 'Read from section ' + SPLIT[n][2].split(' ')[0] + ' to the end of the chapter.',
  chapter: 'Read it, answer the boxes and run its hands-on steps. Press “Mark chapter complete” at the end.',
  firstPass: 'First pass: read it and answer the boxes, then press “Mark chapter complete”. The long “Build it” section is optional; leave it for later.',
  review: 'Three lines in your notepad: what made sense, what didn’t, and one question. Take a photo if you keep a log.'
};

/* The route, in the book's order. Each week reads a book chapter (the story)
   and then does the course chapter(s) that practise it, in the same sitting
   or the next day, so the story and the practice are never weeks apart.
   [week title, ship line, how-to ids, items, light, why]
   `why` is one or two sentences: what the week builds on, and what it adds. */
const W = [
  ['Start: a problem worth solving', 'Three lines in your notepad, and the boxes in A1 answered.', ['first-pass'],
    ['ch:ch0', 'bk:pre', 'bk:1', 'ch:a1', 'review'], false,
    'Nothing is assumed. The book opens on a real finding in a week of customer chats, and A1 turns that finding into the project you will carry to the end.'],
  ['Is it worth building?', 'The boxes in A2 and A3 answered: how products win, and a problem statement from what users actually did.', ['first-pass'],
    ['bk:2', 'ch:a2', 'bk:3', 'ch:a3', 'review'], false,
    'Last week named a problem. This week tests whether it deserves building: first how products win, then how to ask people about what really happened.'],
  ['The market, and what not to do', 'A rough market size, and a short “not doing” list.', ['first-pass'],
    ['bk:4', 'ch:a4', 'bk:5', 'ch:a5', 'review'], false,
    'You know who has the problem. Now you look at who else serves them and how many there are, and then you choose the one thing to do first.'],
  ['A plan, and writing it down', 'One objective with three key results, and a one-page spec outline.', ['first-pass'],
    ['bk:6', 'ch:a6', 'bk:7', 'ch:a7', 'review'], false,
    'With a choice made, you turn it into a plan people can believe and a spec someone could build from. That finishes the product half. Next week you meet the machine.'],
  ['Meet the machine', 'One line on what a token is, in your own words, and a model connected.', ['first-pass', 'setup'],
    ['bk:8:1', 'bk:8:2', 'ch:a8', 'ch:ch05', 'try:setup', 'review'], false,
    'Your plan needs a model, so now you meet one. The book explains what it is. Chapter 0.5 shows tokens and cost on your own text, before anything is set up.'],
  ['Your first conversation with a model', 'Your first model call, with its token count and cost written down.', ['first-pass'],
    ['bk:9', 'ch:chpy', 'ch:ch1', 'review'], false,
    'The course talks to a model in a few lines of Python, so first you learn to read them: five small shapes, nothing to memorise. Then you send your first real message and read its bill.'],
  ['Why it forgets, and giving instructions', 'A system prompt that stops the model inventing, tested on one trick question.', ['first-pass'],
    ['bk:10', 'ch:ch15b', 'bk:11', 'ch:ch2', 'ch:ch21', 'review'], false,
    'Your first call raises a question: if the model starts from zero each time, how does a chat remember? You find out, and then use the answer to give the model standing instructions.'],
  ['Checking it, and sorting', 'Your first answer key, and a sorter with a score.', ['first-pass'],
    ['bk:12', 'ch:ch22', 'ch:ch23', 'bk:13', 'ch:ch24', 'review'], false,
    'Instructions only help if you can tell whether they worked. So you build a small answer key, then use it on the job a model does most: sorting messages into kinds.'],
  ['Summaries, long text, and finding by words', 'A summary test, a rule for cutting text without splitting an ID, and pattern rules scored by hand.', ['first-pass'],
    ['ch:ch25', 'bk:14', 'ch:ch3', 'bk:15', 'ch:ch4', 'review'], false,
    'The answer key now tests summaries too. Then a new problem: real documents are too long to send at once, so you learn to cut them up and to find the right piece by its words.'],
  ['Holiday week, light: finding by meaning', 'Search by meaning tried on your own pieces of text.', ['first-pass'],
    ['bk:16', 'ch:ch5', 'review'], true,
    'Last week’s word search missed things written differently. This week’s search goes by meaning instead. It is a short week on purpose.'],
  ['Holiday week, light: how good is good', 'The scoreboard: words against meaning, with a ship-or-not note.', ['first-pass'],
    ['bk:17', 'ch:ch6', 'review'], true,
    'You now have two ways to find things. This week you measure which one finds more, with the same answer-key habit from Week 8.'],
  ['Your first complete system', 'Version 0 of the findings page, published.', ['first-pass', 'publish'],
    ['bk:18', 'ch:ch7', 'ch:ch75', 'bk:19', 'ch:ch8', 'review'], false,
    'Every piece is in place: cutting, finding, measuring and instructions. This week they join into one system that answers from your documents, and its answers come back in a shape a program can use.'],
  ['Dependable answers, and letting it act', 'An extractor that says “not sure” instead of guessing, and a model that calls one tool.', ['first-pass'],
    ['ch:ch85', 'bk:20', 'ch:ch9', 'bk:21', 'ch:ch10', 'review'], false,
    'Structured answers make two things possible: a model that can trigger an action, and careful choices about what it sees. Both build directly on last week.'],
  ['Thinking models, the wait, and better search', 'A budget for what is sent onward, a design for the wait, and search made better one change at a time.', ['first-pass'],
    ['bk:22', 'ch:ch11', 'ch:ch115', 'bk:23', 'ch:ch12', 'review'], false,
    'Some models think before they answer, which costs time and money. You decide when that is worth it, then improve the search from Weeks 9 to 11 with your scoreboard as the judge.'],
  ['When the page gives orders, and grading at scale', 'Your own tool attacked, and an automatic marker you have checked.', ['first-pass'],
    ['bk:24', 'ch:ch13', 'bk:25', 'ch:ch14', 'ch:ch145', 'review'], false,
    'Your system reads documents, and a document can carry hidden instructions. After you attack your own tool, you grade a thousand answers the same way you graded ten.'],
  ['What it costs, documents, and what you may send', 'A cost model from measurements, a reader for scanned pages, and the sharing rule.', ['first-pass'],
    ['bk:26', 'ch:ch15', 'bk:27', 'ch:ch16', 'bk:28', 'ch:ch165', 'review'], false,
    'You can now measure quality at scale. This week you put a price on it, handle paper and photos, and decide which data may leave your hands at all.'],
  ['The rules, and the spec', 'A system card, and a requirements document that survives a change of model.', ['first-pass'],
    ['bk:29', 'ch:ch17', 'bk:30', 'ch:ch18', 'review'], false,
    'With quality, cost and data rules in hand, you can write down what the system must do and who is responsible when it is wrong. The spec in A7 gets its AI version.'],
  ['Build or buy, and designing for the wrong answer', 'A build-or-buy call, the four answers the tool can give, and a pilot design.', ['first-pass'],
    ['bk:31', 'ch:ch185', 'ch:ch19', 'bk:32', 'ch:ch20', 'ch:ch205', 'review'], false,
    'The spec raises two decisions that stay yours: whether to build, buy or train, and what the product does when the model is wrong. Then you plan how to prove it helps. That closes Parts I to IV.'],
  ['Production depth begins: the plumbing, and choosing a model', 'A test harness in Git, and your model choice with a back-up.', ['first-pass'],
    ['bk:33', 'ch:ch8f', 'bk:34', 'ch:ch9m', 'review'], false,
    'Part V goes over the same ideas again, this time at the depth a real launch needs. You know every idea already; now you learn the plumbing under it and pick a model on your own cases.'],
  ['Context and retrieval, at production depth', 'What the model sees, decided on purpose, and retrieval that survives a review.', ['first-pass'],
    ['ch:ch10c', 'bk:35', 'ch:ch11r', 'review'], false,
    'Weeks 12 to 14 built context and search for a prototype. This week does them again for real users: access rules, freshness and a budget.'],
  ['Workflows, agents and the standard plug', 'A workflow that cannot make risky changes alone, and the tool access policy.', ['first-pass'],
    ['bk:36', 'ch:ch12t', 'ch:ch13a', 'ch:ch14p', 'review'], false,
    'Week 13 let a model call one tool. This week chains tools into workflows and agents, with limits on what they may do alone.'],
  ['Pictures and voice, gates and traces', 'The release gate, and the watch plan.', ['first-pass'],
    ['bk:37', 'ch:ch15mm', 'bk:38', 'ch:ch16e', 'ch:ch17o', 'review'], false,
    'More kinds of input mean more ways to fail, so this week also turns your answer keys into a release gate and decides what to watch after launch.'],
  ['Security, and the product spec', 'The risk register, the full requirements and a ten-slide decision pack.', ['first-pass'],
    ['bk:39', 'ch:ch18s', 'bk:40', 'ch:ch19pm', 'ch:ch20d', 'review'], false,
    'You assume the worst about the model, then write the spec and the decision pack that the capstone will be judged against.'],
  ['Capstone, part 1: build it and break it', 'The capstone plan, and a first version you have tried to break.', ['first-pass'],
    ['bk:41', 'try:capstone-plan', 'try:capstone-build', 'review'], false,
    'Every chapter so far built one piece of Bharat Privacy Guard. These two weeks put the pieces together. This week you plan the smallest version and build it.'],
  ['Capstone, part 2: ship it and defend it', 'Bharat Privacy Guard shipped, with its findings document and a short demo.', ['publish', 'demo-video'],
    ['ch:ch21cap', 'ch:b8', 'try:portfolio', 'review'], false,
    'Last week’s version gets measured, shipped and defended, then published where people can see it.'],
  ['The business, and the job', 'The business chapters on a first pass, three practice interviews and a look back over six months.', ['portfolio-site', 'mock-interviews', 'retro'],
    ['bk:42', 'ch:b1', 'bk:43', 'ch:b2', 'bk:44', 'ch:b3', 'bk:45', 'ch:b4', 'ch:b5', 'bk:46', 'ch:b6', 'bk:47', 'ch:b7', 'try:interviews', 'review'], false,
    'You have a shipped product. The last week asks who pays for it, how people find it, how you count what matters, and how you talk about all of it in an interview.'],
];

const START = Date.UTC(2026, 9, 19);
const fmt = (ms, withYear) => new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC', ...(withYear ? { year: 'numeric' } : {}) });
const weeks = W.map(([title, ship, how, items, light, why], i) => {
  const a = START + i * 7 * 864e5, b = a + 6 * 864e5;
  const dates = fmt(a) + ' – ' + fmt(b, new Date(a).getUTCFullYear() !== new Date(b).getUTCFullYear() || i === 25);
  const steps = items.map(it => {
    const [k, ref, part] = it.split(':');
    if (k === 'ch') {
      const c = ch(ref), fp = FIRST_PASS(ref);
      return { id: 'c:' + ref, kind: 'chapter', ch: ref, num: String(c.num), title: c.title,
        mins: fp ? (ref === 'ch21cap' ? 240 : ref === 'b8' ? 10 : 20) : c.minutes, firstPass: fp || undefined,
        what: ref === 'ch21cap' ? 'Second half of the capstone: measure the version you built last week, ship it and defend it. The chapter allows about thirty hours in all; the smallest version that works is enough here. Press “Mark chapter complete” when it is shipped.'
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
  if (!why) throw new Error('week ' + (i + 1) + ' has no why line');
  return { n: i + 1, start: new Date(a).toISOString().slice(0, 10), dates, title, ship, how, light: !!light, why,
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
  { n: 1, name: 'Month 1: The problem and the plan', from: 1, to: 4,
    goal: 'About an hour a week. The book’s first seven chapters, each followed straight away by its app chapter on a first pass. No code and nothing to install.' },
  { n: 2, name: 'Month 2: Meet the machine', from: 5, to: 9,
    goal: 'What a model is, tokens on your own text, a model connected, just enough Python to read the code, your first call, instructions, an answer key, and the first jobs: sorting and summarising.' },
  { n: 3, name: 'Month 3: Finding, and your first system', from: 10, to: 13,
    goal: 'Two light holiday weeks on search by meaning and measuring it, then your first complete system, answers a program can use, and a model that can act.' },
  { n: 4, name: 'Month 4: What real systems add', from: 14, to: 18,
    goal: 'Thinking models, better search, attacks, grading at scale, cost, documents, the rules, the spec, build or buy, and designing for wrong answers.' },
  { n: 5, name: 'Month 5: The same ideas, at production depth', from: 19, to: 23,
    goal: 'Part V goes over everything again, deeper: the plumbing, model choice, context, retrieval, workflows and agents, pictures and voice, release gates, watching, security and the product spec.' },
  { n: 6, name: 'Month 6: Ship it, and get the job', from: 24, to: 26,
    goal: 'The capstone over two weeks, then the business chapters, a portfolio page and practice interviews.' },
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
   The route follows the book's order. Each book chapter (the story) is followed
   in the same week by the course chapter(s) that practise it. */

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
  if (step.kind === 'chapter') return '/app/#/ch/' + step.ch;
  if (step.kind === 'read') return (hi ? '/book/hi/' : '/book/') + step.book + (step.at ? '#' + step.at : '');
  if (step.app) return '/app/' + step.app;
  return '/app/#/start';
}
/* The day week 1 starts. START, unless the person restarted the calendar from
   a day of their own choosing (S.routeStart, set on the route page or the
   plan). Ticks are never touched by a restart; only the dates move. */
export function startOf(S) {
  const v = S && S.routeStart;
  return typeof v === 'string' && /^\\d{4}-\\d{2}-\\d{2}$/.test(v) && !isNaN(Date.parse(v + 'T00:00:00Z')) ? v : START;
}
/* Week number (1-26) for an India-time date string, 0 before the start, 27 after. */
export function weekOf(date, start) {
  const d = Math.floor((Date.parse(date + 'T00:00:00Z') - Date.parse((start || START) + 'T00:00:00Z')) / 864e5);
  return d < 0 ? 0 : Math.min(WEEKS.length + 1, Math.floor(d / 7) + 1);
}
/* The dates of weeks a..b counted from a start: "4 Nov – 10 Nov" for one week,
   "4 Nov – 1 Dec 2026" for a month (withYear), the way the route prints them. */
export function datesOf(a, b, start, withYear) {
  const day = 864e5, s0 = Date.parse((start || START) + 'T00:00:00Z');
  const x = s0 + (a - 1) * 7 * day, y = s0 + (b * 7 - 1) * day;
  const f = (ms, yr) => new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC', ...(yr ? { year: 'numeric' } : {}) });
  const ya = new Date(x).getUTCFullYear(), yb = new Date(y).getUTCFullYear();
  return withYear ? f(x) + (ya !== yb ? ' ' + ya : '') + ' – ' + f(y) + ' ' + yb : f(x, ya !== yb) + ' – ' + f(y, ya !== yb);
}
`;
fs.writeFileSync(R + '/src/data/route.mjs', src);
console.log(weeks.map(w => 'W' + w.n + ' ' + w.dates + ' ' + w.mins + 'min ' + w.steps.length + ' steps · ' + w.title).join('\n'));
console.log(MONTHS.map(m => m.name + ' | ' + m.dates).join('\n'));
