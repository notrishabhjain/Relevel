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
  'tokens':  { title: 'Count tokens in Hindi and English', mins: 10, app: '#/ch/ch05',
    what: 'Open Chapter 0.5 and paste one Hindi sentence and one English sentence with the same meaning into its token counter. Write the two counts in your notepad. Do the rest of the chapter in Week 5.' },
  'conversation': { title: 'One real conversation', mins: 20, app: '#/ch/a3',
    what: 'Pick one person who handles other people’s personal details at work. Ask two questions from Chapter A3 about the last time the problem happened. Write five lines of notes in a folder called research.' },
  'postings': { title: 'Three postings, one table, a first door', mins: 30, app: '#/ch/b7',
    what: 'Find three AI product postings in India. For each, write in one line what it asks for. Then choose your first door: an AI-native product company, a consulting firm building AI systems for clients, or a public-sector body. Chapter B7 shows the table.' },
  'post-key': { title: 'Your first small public post', mins: 20,
    what: 'Follow the small publish recipe on the plan. Write three sentences: your sorter’s score as a number, one thing that surprised you, and a link. Made-up data only. Add the Hindi and English token counts from Week 2 if you like.' },
  'gov-project': { title: 'One government project, in product words', mins: 20,
    what: 'Take one project you delivered. Write three lines in your decision log. The date you promised becomes the outcome you promised. The scope you delivered becomes the number that moved. The risk you escalated becomes the kill criterion you would have written.' },
  'publish-v0': { title: 'Publish findings v0, and make the repository public', mins: 30,
    what: 'Move your findings page from the notes box into the README of your repository, following the small publish recipe on the plan. Open with the number and show one honest failure. Check the history for keys and real personal details, then make the repository public.' },
  'aloud-1': { title: 'Answer one question aloud', mins: 15, app: '#/ch/b7',
    what: 'Take practice question 10 on the Curriculum tab of the plan, on prompt caching. Answer it aloud for two minutes and record it. Write one line on what to fix.' },
  'post-attack': { title: 'Post: I attacked my own tool', mins: 20,
    what: 'Follow the small publish recipe. Write three sentences: what happened when you attacked your own tool, the agreement figure for your judge, and a link. Say what you changed. Made-up data only.' },
  'cv-lines': { title: 'Three CV lines and a headline', mins: 25, app: '#/ch/b7',
    what: 'Write three CV lines as action, decision, result, using work from this route. Then write your LinkedIn headline in one line that says what you build and measure. Chapter B7 shows the form.' },
  'conversations': { title: 'Two more conversations', mins: 30, app: '#/ch/a3',
    what: 'Talk to two more people who have the problem, one in a different role from Week 3. Ask the same two questions and write five lines each. With Week 3 that makes three, enough to start the capstone.' },
  'post-agent': { title: 'Post: workflow against agent', mins: 25,
    what: 'Follow the small publish recipe. Post the four numbers from your workflow-against-agent test and say which one you would ship and why. Three sentences, made-up data only, with a link.' },
  'aloud-2': { title: 'Answer one more question aloud', mins: 15, app: '#/ch/b7',
    what: 'Take practice question 11 on the Curriculum tab, on MCP and its risks. Answer it aloud for two minutes and record it. Write one line on what to fix.' },
  'timed-prd': { title: 'A 45-minute timed PRD', mins: 45, app: '#/ch/ch18',
    what: 'Ask a model for a one-line product idea you have not seen. Set a timer for 45 minutes and write a one-page requirements document from the Chapter 18 skeleton. Stop when the timer rings.' },
  'role-matrix': { title: 'A role matrix from ten postings', mins: 45, app: '#/ch/b7',
    what: 'Build the role matrix that Chapter B7 describes. Take ten real postings and list the skills they ask for. Mark each skill as proven, partly proven or missing. Pick the three gaps that matter most for your first door, and write what you will do about each.' },
  'case-study': { title: 'The Bharat Privacy Guard case study', mins: 75, app: '#/ch/b7',
    what: 'Write the case study in the form Chapter B7 shows, on one or two pages: the problem, your decisions, the numbers from your findings page, one honest failure and what you would do next. Real numbers from your own runs only. Save it in your repository as docs/case-study.md.' },
  'finish': { title: 'Finish the portfolio page', mins: 120,
    what: 'Do the portfolio site recipe on the plan, about two hours. The page you started in Week 26 is the first draft. Add a link to the case study, and the three lines from your role matrix that say what you can show today.' },
  'retro': { title: 'Review the 28 weeks and set the next loop', mins: 90,
    what: 'Do the retro recipe on the plan, about 90 minutes: count what shipped, what slipped and what you cut, write what you would change, and set the weekly loop for after the route.' },
  'setup':   { title: 'Connect a model, once', mins: 15, app: '#/setup',
    what: 'Do the Connect page, one section at a time: get a free key, paste it in, and run the test call. You saw tokens and cost in Chapter 0.5, so you know what the key pays for. If a step fails, the page says why; copy the exact error into your notes.' },
  'capstone-plan': { title: 'Plan your capstone', mins: 15,
    what: 'Read the capstone chapter’s brief and write, on one page, the smallest version you can ship in about eight hours over two weeks. Everything else goes on a “later” list.' },
  'capstone-build': { title: 'Capstone, first half: build and break it', mins: 240, app: '#/ch/ch21cap',
    what: 'Work through the capstone chapter up to its measuring step: put the pieces you built in earlier chapters together, then try to break it. Stop at about four hours, even if you want to keep going. Next week you measure it, ship it and defend it.' },
  'portfolio': { title: 'Put the project where people can see it', mins: 60, app: '#/project',
    what: 'Publish your findings page and the capstone write-up as one page with a link. Keep it plain. A page that exists beats a page that is pretty. If the repository is still private, check its history for keys and real personal details, make it public, and link the one command that runs your answer key.' },
  'interviews': { title: 'Practice interviews and a timed build', mins: 135, app: '#/ch/b7#record',
    what: 'Use the interview practice in Chapter B7 and the nineteen practice questions on the Curriculum tab. Answer two questions aloud and record them. Ask a model to score each against the rubric, and repeat your worst answer. Then, in 45 minutes, build a paste-and-clean screen for Bharat Privacy Guard in a free prototyping tool while talking aloud, and record it.' },
};

/* What each kind of step asks for. Kept to a few sentences so they translate once. */
const WHAT = {
  read: 'Read the chapter. The page ticks itself when you reach the end.',
  readPart1: n => 'Read sections ' + SPLIT[n][1] + ', then stop, even if you want to keep going.',
  readPart2: n => 'Read from section ' + SPLIT[n][2].split(' ')[0] + ' to the end of the chapter.',
  chapter: 'Read it, answer the boxes and run its hands-on steps. Then do the short version of its project task: a few lines, not the whole build. Press “Mark chapter complete” at the end.',
  firstPass: 'First pass: read it and answer the boxes, then press “Mark chapter complete”. The long “Build it” section is optional; leave it for later.',
  review: 'Three lines in your notepad: what made sense, what didn’t, and one question. Take a photo if you keep a log.',
  reviewStory: 'Three lines in your notepad: what made sense, what didn’t, and one question. Then write one story from your own career in six lines: the situation, what you decided, and the result with a number.'
};
/* The short version of a chapter's project task, in minutes, added to every core chapter that has one. It is part of the route. */
const TASK = 15;
/* Look backs that also add one career story. Six stories exist by Week 24. */
const STORY_WEEKS = [4, 8, 12, 16, 20, 24];

/* The route, in the book's order. Each week reads a book chapter (the story)
   and then does the course chapter(s) that practise it, in the same sitting
   or the next day, so the story and the practice are never weeks apart.
   [week title, ship line, how-to ids, items, light, why, job]
   `why` is one or two sentences: what the week builds on, and what it adds.
   `job` is one sentence: what the week is worth to the job you are aiming at. */
const W = [
  ['Start: a problem worth solving', 'Three lines in your notepad, and the boxes in A1 answered.', ['first-pass'],
    ['ch:ch0', 'bk:pre', 'bk:1', 'ch:a1', 'ch:a1g', 'review'], false,
    'Nothing is assumed. The book opens on a real finding in a week of customer chats, and A1 turns that finding into the project you will carry to the end.',
    'Every door asks which problem you chose and why. This week you choose one you can talk about for six months.'],
  ['Is it worth building?', 'The boxes in A2 and A3 answered: how products win, and a problem statement from what users actually did.', ['first-pass'],
    ['bk:2', 'ch:a2', 'bk:3', 'ch:a3', 'try:tokens', 'review'], false,
    'Last week named a problem. This week tests whether it deserves building: first how products win, then how to ask people about what really happened.',
    'Product-sense rounds ask how you know users have the problem. This week you practise asking what they really did.'],
  ['The market, and what not to do', 'A rough market size, and a short “not doing” list.', ['first-pass'],
    ['bk:4', 'ch:a4s', 'ch:a4', 'bk:5', 'ch:a5', 'try:conversation', 'review'], false,
    'You know who has the problem. Now you look at who else serves them and how many there are, and then you choose the one thing to do first.',
    'Consulting and public-sector roles ask for a sized market and a clear choice of what not to do. You make both for your own project.'],
  ['A plan, and writing it down', 'One objective with three key results, and a one-page spec outline.', ['first-pass'],
    ['bk:6', 'ch:a6', 'bk:7', 'ch:a7', 'try:postings', 'review'], false,
    'With a choice made, you turn it into a plan people can believe and a spec someone could build from. That finishes the product half. Next week you meet the machine.',
    'A hiring manager wants an objective with three results and a short spec. These are your first two pieces of paper in product language.'],
  ['Meet the machine', 'One line on what a token is, in your own words, and a model connected.', ['first-pass', 'setup'],
    ['bk:8:1', 'bk:8:2', 'ch:a8', 'ch:ch05', 'try:setup', 'review'], false,
    'Your plan needs a model, so now you meet one. The book explains what it is. Chapter 0.5 shows tokens and cost on your own text, before anything is set up.',
    'Technical drill-downs start with tokens and cost. Count tokens on Hindi and English text and you can say what an Indic product costs.'],
  ['Your first conversation with a model', 'Your first model call, with its token count and cost written down.', ['first-pass'],
    ['bk:9', 'ch:chpy', 'ch:ch1', 'review'], false,
    'The course talks to a model in a few lines of Python, so first you learn to read them: five small shapes, nothing to memorise. Then you send your first real message and read its bill.',
    'Interviewers ask what one model call costs. You have the number from your own run.'],
  ['Why it forgets, and giving instructions', 'A system prompt that stops the model inventing, tested on one trick question.', ['first-pass'],
    ['bk:10', 'ch:ch15b', 'bk:11', 'ch:ch2', 'ch:ch21', 'review'], false,
    'Your first call raises a question: if the model starts from zero each time, how does a chat remember? You find out, and then use the answer to give the model standing instructions.',
    'Prompt design is the first thing an AI-native company tests. You write a system prompt and test it on a trick question.'],
  ['Checking it, and sorting', 'Your first answer key, and a sorter with a score.', ['first-pass', 'small-publish'],
    ['bk:12', 'ch:ch22', 'ch:ch23', 'bk:13', 'ch:ch24', 'try:post-key', 'review'], false,
    'Instructions only help if you can tell whether they worked. So you build a small answer key, then use it on the job a model does most: sorting messages into kinds.',
    'Owning the evaluation is the strongest sign in a product interview. An answer key you built by hand is the smallest honest version.'],
  ['Summaries, long text, and finding by words', 'A summary test, a rule for cutting text without splitting an ID, and pattern rules scored by hand.', ['first-pass'],
    ['ch:ch25', 'bk:14', 'ch:ch3', 'bk:15', 'ch:ch4', 'try:gov-project', 'review'], false,
    'The answer key now tests summaries too. Then a new problem: real documents are too long to send at once, so you learn to cut them up and to find the right piece by its words.',
    'Many roles ask when not to use a model. A pattern rule that beats a model on some cases is your example.'],
  ['Holiday week, light: finding by meaning', 'Search by meaning tried on your own pieces of text.', ['first-pass'],
    ['bk:16', 'ch:ch5', 'review'], true,
    'Last week’s word search missed things written differently. This week’s search goes by meaning instead. It is a short week on purpose.',
    'Search by meaning matters most for Indian-language text, where the words differ and the idea is the same.'],
  ['Holiday week, light: how good is good', 'The scoreboard: words against meaning, with a ship-or-not note.', ['first-pass'],
    ['bk:17', 'ch:ch6', 'review'], true,
    'You now have two ways to find things. This week you measure which one finds more, with the same answer-key habit from Week 8.',
    'Hiring managers ask how you decided to ship. A scoreboard and a ship-or-not note is that decision on paper.'],
  ['Your first complete system', 'Version 0 of the findings page, published.', ['first-pass', 'small-publish'],
    ['bk:18', 'ch:ch7', 'ch:ch75', 'bk:19', 'ch:ch8', 'try:publish-v0', 'review'], false,
    'Every piece is in place: cutting, finding, measuring and instructions. This week they join into one system that answers from your documents, and its answers come back in a shape a program can use.',
    'A consulting firm wants a case study with real numbers. Your findings page is the first one, and it is public.'],
  ['Dependable answers, and letting it act', 'An extractor that says “not sure” instead of guessing, and a model that calls one tool.', ['first-pass', 'mock-interviews'],
    ['ch:ch85', 'bk:20', 'ch:ch9', 'bk:21', 'ch:ch10', 'try:aloud-1', 'review'], false,
    'Structured answers make two things possible: a model that can trigger an action, and careful choices about what it sees. Both build directly on last week.',
    'Agents and tool use are on most postings. A model that calls one tool and says “not sure” is the smallest honest case.'],
  ['Thinking models, the wait, and better search', 'A budget for what is sent onward, a design for the wait, and search made better one change at a time.', ['first-pass'],
    ['bk:22', 'ch:ch11', 'ch:ch115', 'bk:23', 'ch:ch12', 'review'], false,
    'Some models think before they answer, which costs time and money. You decide when that is worth it, then improve the search from Weeks 9 to 11 with your scoreboard as the judge.',
    'AI-native postings name latency and cost per task. This week you set a budget and design for the wait.'],
  ['When the page gives orders, and grading at scale', 'Your own tool attacked, and an automatic marker you have checked.', ['first-pass', 'small-publish'],
    ['bk:24', 'ch:ch13', 'bk:25', 'ch:ch14', 'ch:ch145', 'try:post-attack', 'review'], false,
    'Your system reads documents, and a document can carry hidden instructions. After you attack your own tool, you grade a thousand answers the same way you graded ten.',
    'Interviewers ask how you would attack your own product. After this week you have done it, with a number.'],
  ['What it costs, documents, and what you may send', 'A cost model from measurements, a reader for scanned pages, and the sharing rule.', ['first-pass'],
    ['bk:26', 'ch:ch15', 'bk:27', 'ch:ch16', 'bk:28', 'ch:ch165', 'try:cv-lines', 'review'], false,
    'You can now measure quality at scale. This week you put a price on it, handle paper and photos, and decide which data may leave your hands at all.',
    'A consulting firm or a public body is asked for cost estimates. This week’s cost model is how you would produce one.'],
  ['The rules, and the spec', 'A system card, and a requirements document that survives a change of model.', ['first-pass'],
    ['bk:29', 'ch:ch17', 'bk:30', 'ch:ch18', 'review'], false,
    'With quality, cost and data rules in hand, you can write down what the system must do and who is responsible when it is wrong. The spec in A7 gets its AI version.',
    'Governance is on every consulting posting. The system card is what you would hand a ministry’s review committee.'],
  ['Build or buy, and designing for the wrong answer', 'A build-or-buy call, the four answers the tool can give, and a pilot design.', ['first-pass'],
    ['bk:31', 'ch:ch185', 'ch:ch19', 'bk:32', 'ch:ch20', 'ch:ch205', 'try:conversations', 'review'], false,
    'The spec raises two decisions that stay yours: whether to build, buy or train, and what the product does when the model is wrong. Then you plan how to prove it helps. That closes Parts I to IV.',
    'Build or buy is the first question a ministry or a client asks. You make the call and defend it.'],
  ['Production depth begins: the plumbing, and choosing a model', 'A test harness in Git, and your model choice with a back-up.', ['first-pass'],
    ['bk:33', 'ch:ch8f', 'bk:34', 'ch:ch9m', 'review'], false,
    'Part V goes over the same ideas again, this time at the depth a real launch needs. You know every idea already; now you learn the plumbing under it and pick a model on your own cases.',
    'AI-native companies ask which model you chose and why. You choose on your own cases and name a back-up.'],
  ['Context and retrieval, at production depth', 'What the model sees, decided on purpose, and retrieval that survives a review.', ['first-pass'],
    ['ch:ch10c', 'bk:35', 'ch:ch11r', 'review'], false,
    'Weeks 12 to 14 built context and search for a prototype. This week does them again for real users: access rules, freshness and a budget.',
    'Context engineering is among the skills rising toward 2027. This week you decide on purpose what the model sees.'],
  ['Workflows and agents', 'A workflow that cannot make risky changes alone, and a workflow-against-agent result you have posted.', ['first-pass', 'small-publish'],
    ['bk:36', 'ch:ch12t', 'ch:ch13a', 'try:post-agent', 'review'], false,
    'Week 13 let a model call one tool. This week chains tools into workflows and agents, with limits on what they may do alone.',
    'Built agents are the evidence the hardest door asks for. You build a workflow and an agent and publish the numbers.'],
  ['The standard plug, pictures and voice, gates and traces', 'The tool access policy, the release gate and the watch plan.', ['first-pass'],
    ['ch:ch14p', 'bk:37', 'ch:ch15mm', 'bk:38', 'ch:ch16e', 'ch:ch17o', 'review'], false,
    'Last week’s agents need a standard way to reach tools, so this week starts with that plug. More kinds of input mean more ways to fail, so it also turns your answer keys into a release gate and decides what to watch after launch.',
    'Release gates and standard tool connections show you can run AI, not only specify it. Both are in this week.'],
  ['Security, and the product spec', 'The risk register, the full requirements and a ten-slide decision pack.', ['first-pass', 'mock-interviews'],
    ['bk:39', 'ch:ch18s', 'bk:40', 'ch:ch19pm', 'ch:ch20d', 'try:aloud-2', 'try:timed-prd', 'review'], false,
    'You assume the worst about the model, then write the spec and the decision pack that the capstone will be judged against.',
    'The case or PRD round gives you a prompt and a clock. The risk register, the spec and the decision pack are your practice.'],
  ['Capstone, part 1: build it and break it', 'The capstone plan, and a first version you have tried to break.', ['first-pass'],
    ['bk:41', 'try:capstone-plan', 'try:capstone-build', 'review'], false,
    'Every chapter so far built one piece of Bharat Privacy Guard. These two weeks put the pieces together. This week you plan the smallest version and build it.',
    'A shipped product is what separates you from someone who has read about AI. This week you build the first version.'],
  ['Capstone, part 2: ship it and defend it', 'Bharat Privacy Guard shipped, with its findings document and a short demo.', ['publish', 'demo-video'],
    ['ch:ch21cap', 'ch:b8', 'review'], false,
    'Last week’s version gets measured, shipped and defended. It is the heaviest week on the route, so nothing else is added to it.',
    'Artifacts over claims. This week turns the build into a shipped product with a number and a demo that a recruiter can open.'],
  ['The business', 'First-pass notes on the business chapters, and the project put on a page people can open.', ['first-pass', 'portfolio-site'],
    ['bk:42', 'ch:b1', 'bk:43', 'ch:b2', 'bk:44', 'ch:b3', 'bk:45', 'ch:b4', 'ch:b5', 'bk:46', 'ch:b6', 'try:portfolio', 'review'], false,
    'You have a shipped product. Now the questions a client or a ministry asks next: who pays for it, how do people find it and stay, and how will you know it works. This is a first pass; the long builds can wait for May.',
    'Consulting and public-sector roles ask who pays and how you would measure success. This week you can answer both for your own project.'],
  ['The job', 'A role matrix from ten postings, a case study with real numbers, and a finished portfolio page.', ['portfolio-site'],
    ['bk:47', 'ch:b7', 'try:role-matrix', 'try:case-study', 'try:finish', 'review'], false,
    'With the business side in view, this week turns the project into evidence for the job: what ten postings ask for, a case study with your numbers, and one page that carries both.',
    'A recruiter reads one page. The matrix shows that you know what the role asks, and the case study shows a number you moved.'],
  ['Interviews', 'Practice answers recorded, a timed build recorded, and a review of the 28 weeks.', ['mock-interviews', 'retro'],
    ['try:interviews', 'try:retro', 'review'], false,
    'Everything is written down. This last week is for saying it aloud under a clock, and then for looking back over the 28 weeks to decide what comes next.',
    'Interviews test whether you can say your story aloud and build while talking. You practise both, then set the loop that keeps you current after the route.'],
];

const START = Date.UTC(2026, 9, 19);
const fmt = (ms, withYear) => new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC', ...(withYear ? { year: 'numeric' } : {}) });
const weeks = W.map(([title, ship, how, items, light, why, job], i) => {
  const a = START + i * 7 * 864e5, b = a + 6 * 864e5;
  const dates = fmt(a) + ' – ' + fmt(b, new Date(a).getUTCFullYear() !== new Date(b).getUTCFullYear() || i === 27);
  const steps = items.map(it => {
    const [k, ref, part] = it.split(':');
    if (k === 'ch') {
      const c = ch(ref), fp = FIRST_PASS(ref);
      return { id: 'c:' + ref, kind: 'chapter', ch: ref, num: String(c.num), title: c.title,
        mins: fp ? (ref === 'ch21cap' ? 240 : ref === 'b8' ? 10 : 20) : c.minutes + (c.capstone ? TASK : 0), firstPass: fp || undefined,
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
    if (it === 'review') { const st = STORY_WEEKS.includes(i + 1);
      return { id: 't:review-' + (i + 1), kind: 'look', title: 'Look back', mins: st ? 10 : 5, what: st ? WHAT.reviewStory : WHAT.review }; }
    throw new Error('bad item ' + it);
  });
  if (!why) throw new Error('week ' + (i + 1) + ' has no why line');
  if (!job) throw new Error('week ' + (i + 1) + ' has no job line');
  return { n: i + 1, start: new Date(a).toISOString().slice(0, 10), dates, title, ship, how, light: !!light, why, job,
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
    goal: 'An hour to an hour and a half a week. The book’s first seven chapters, each followed straight away by its app chapter on a first pass. No code and nothing to install.' },
  { n: 2, name: 'Month 2: Meet the machine', from: 5, to: 9,
    goal: 'What a model is, tokens on your own text, a model connected, just enough Python to read the code, your first call, instructions, an answer key, and the first jobs: sorting and summarising.' },
  { n: 3, name: 'Month 3: Finding, and your first system', from: 10, to: 13,
    goal: 'Two light holiday weeks on search by meaning and measuring it, then your first complete system, answers a program can use, and a model that can act.' },
  { n: 4, name: 'Month 4: What real systems add', from: 14, to: 18,
    goal: 'Thinking models, better search, attacks, grading at scale, cost, documents, the rules, the spec, build or buy, and designing for wrong answers.' },
  { n: 5, name: 'Month 5: The same ideas, at production depth', from: 19, to: 23,
    goal: 'Part V goes over everything again, deeper: the plumbing, model choice, context, retrieval, workflows and agents, pictures and voice, release gates, watching, security and the product spec.' },
  { n: 6, name: 'Month 6: Ship it, and get the job', from: 24, to: 28,
    goal: 'The capstone over two weeks, then the business chapters, the job (a role matrix, a case study and a portfolio page) and practice interviews.' },
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
/* Week number (1-28) for an India-time date string, 0 before the start, 29 after. */
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
