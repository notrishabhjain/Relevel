/* The worksheet: the whole course on one page, arranged by topic, at
   /worksheet/ (English) and /worksheet/hi/ (Hinglish).

   Nothing on it is typed twice. Each topic is one stage of the project
   (src/data/project.js), and gathers from the three portals:
     - the app chapters of that stage, with their hands-on exercises and
       project task (src/data/part*.js)
     - the book chapters whose course list starts with one of them (book/)
     - the plan weeks they fall in, with the look-back and try steps
       (src/data/route.mjs)
     - the stage's own description and deliverables, the further reading,
       the glossary words, and what the topic builds on (each chapter's needs)
   Topic 0, "Before you start", adds the prerequisites checklist from
   worksheet/data.mjs, where the topic headings also live.

   check() fails the build unless every app chapter, every book chapter and
   every step of the route appears on the page exactly once. So a chapter
   added anywhere shows up here, or the build says why it cannot. */
import fs from 'node:fs';
import p from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { loadBook } from '../book/build.mjs';
import { WEEKS, STEPS, START } from '../src/data/route.mjs';
import { TOPICS, TRY_TOPIC, BEFORE, UI } from './data.mjs';
import { CSS as PLAN_CSS } from '../plan/build.mjs';

const HERE = p.dirname(fileURLToPath(import.meta.url));
const READING = (() => {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p.join(HERE, '../src/data/reading.js'), 'utf8'), ctx);
  return ctx.window.READING || {};
})();

const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/* Course text carries a little inline HTML (<strong>, <code>, <em>). Keep those
   and drop anything else, so a line reads the same here as in the app. */
const rich = s => String(s == null ? '' : s).replace(/<(?!\/?(strong|em|code|b|i)>)[^>]*>/g, '');
const plain = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '');
/* the course's figures (src/data/figs-*.js), drawn in the page by /figs.js */
const FIG = (() => {
  const ctx = { window: {} }; vm.createContext(ctx);
  for (const f of ['figs-a.js', 'figs-core.js', 'figs-b.js']) vm.runInContext(fs.readFileSync(p.join(HERE, '../src/data/' + f), 'utf8'), ctx);
  return { data: ctx.window.FIGDATA || {}, place: ctx.window.FIGPLACE || {} };
})();

/* ---------- the model of the page ---------- */
export function model(root, C) {
  const H = C.hinglish || {};
  const stages = C.reference.PROJECT.stages;
  const chapters = C.chapters;
  const byId = Object.fromEntries(chapters.map(c => [c.id, c]));
  const byNum = Object.fromEntries(chapters.map(c => [String(c.num), c]));
  if (stages.length !== TOPICS.length - 1) throw new Error(`worksheet: ${TOPICS.length - 1} topics for ${stages.length} project stages`);

  /* app chapter -> topic. A chapter no stage names (a short bridge chapter such
     as 0.8 or A1.5) goes with the next chapter in reading order. */
  const topicOf = { ch0: 't0' };
  stages.forEach((s, i) => s.chapters.forEach(id => { topicOf[id] = 't' + (i + 1); }));
  for (let i = chapters.length - 1; i >= 0; i--) {
    const id = chapters[i].id;
    if (topicOf[id]) continue;
    let j = i + 1; while (j < chapters.length && !topicOf[chapters[j].id]) j++;
    if (j >= chapters.length) throw new Error(`worksheet: chapter ${id} has no topic`);
    topicOf[id] = topicOf[chapters[j].id];
  }

  const en = loadBook(p.join(root, 'book'));
  const hiRoot = p.join(root, 'book/hi');
  const hi = fs.existsSync(p.join(hiRoot, 'book.json')) ? loadBook(hiRoot) : null;
  const hiOf = {};
  if (hi) for (const c of [hi.preface, ...hi.chapters, hi.afterword].filter(Boolean)) hiOf[c.file] = c;
  const books = [en.preface, ...en.chapters, en.afterword].filter(Boolean);
  const bookTopic = {};
  for (const b of books) {
    if (b === en.preface) bookTopic[b.file] = 't0';
    else if (b === en.afterword) bookTopic[b.file] = TOPICS[TOPICS.length - 1].id;
    else {
      const first = (b.course || []).find(id => topicOf[id]);
      if (!first) throw new Error(`worksheet: book chapter ${b.file} names no course chapter`);
      bookTopic[b.file] = topicOf[first];
    }
  }

  for (const s of STEPS) if (s.kind === 'try' && !TRY_TOPIC[s.id]) throw new Error(`worksheet: route step ${s.id} has no topic in worksheet/data.mjs TRY_TOPIC`);
  const stepTopic = s => s.kind === 'chapter' ? topicOf[s.ch] : s.kind === 'read' ? bookTopic[s.book] : s.kind === 'try' ? TRY_TOPIC[s.id] : null;
  const order = new Map(STEPS.map((s, i) => [s.id, i]));

  /* each week's look-back belongs to the topic the week ends in */
  const weekOwner = {};
  for (const w of WEEKS) {
    const last = [...w.steps].reverse().find(s => s.kind !== 'look');
    weekOwner[w.n] = last ? stepTopic(last) : null;
  }

  const idx = t => TOPICS.findIndex(x => x.id === t);
  const topics = TOPICS.map((T, ti) => {
    const stage = ti ? stages[ti - 1] : null;
    const apps = chapters.filter(c => topicOf[c.id] === T.id);
    const reads = books.filter(b => bookTopic[b.file] === T.id);
    const tries = STEPS.filter(s => s.kind === 'try' && TRY_TOPIC[s.id] === T.id);
    const weeks = WEEKS.filter(w => w.steps.some(s => stepTopic(s) === T.id) || weekOwner[w.n] === T.id).map(w => ({
      n: w.n, title: w.title, titleHi: H[w.title] || w.title, dates: w.dates, start: w.start,
      look: weekOwner[w.n] === T.id ? w.steps.filter(s => s.kind === 'look') : []
    }));
    /* what it builds on: needs that point to an earlier topic */
    const seen = new Set(), builds = [];
    for (const c of apps) for (const [what, why, num] of c.needs || []) {
      const from = byNum[String(num)];
      if (!from || idx(topicOf[from.id]) >= ti || seen.has(what)) continue;
      seen.add(what);
      builds.push({ what, whatHi: H[what] || what, why, whyHi: H[why] || why, num: String(num), ch: from.id, topic: topicOf[from.id] });
    }
    const nums = new Set(apps.map(c => String(c.num)));
    const words = (C.reference.GLOSSARY || []).filter(r => nums.has(String(r[2])))
      .map(r => ({ term: r[0], def: r[1], defHi: H[r[1]] || r[1] }));
    const urls = new Set(), reading = [];
    for (const c of apps) for (const r of READING[c.id] || []) if (!urls.has(r[3])) { urls.add(r[3]); reading.push(r); }
    reading.sort((a, b) => (a[0] === b[0] ? 0 : a[0] === 'case' ? -1 : 1));
    const figs = ti === 0 ? ['how-course-works'] : [];
    if (ti) for (const c of apps) for (const [id] of FIG.place[c.id] || []) if (!figs.includes(id)) figs.push(id);
    return {
      ...T, n: ti, stage, builds, words, reading, weeks, figs,
      apps: apps.map(c => {
        const st = STEPS.filter(s => s.kind === 'chapter' && s.ch === c.id);
        const mins = st.reduce((a, s) => a + (s.mins || 0), 0);
        return { id: c.id, num: String(c.num), title: c.title, titleHi: H[c.title] || c.title, mins, full: c.minutes,
          steps: st.map(s => s.id), hands: (c.story || []).filter(b => Array.isArray(b) && b[0] === 'do').length,
          cap: c.capstone && c.capstone.title ? { en: c.capstone.title, hi: H[c.capstone.title] || c.capstone.title } : null };
      }),
      reads: reads.map(b => {
        const st = STEPS.filter(s => s.kind === 'read' && s.book === b.file);
        const h = hiOf[b.file] || b;
        return { file: b.file, n: b.n, title: b.title, titleHi: h.title, summary: b.summary || '', summaryHi: h.summary || b.summary || '',
          mins: st.reduce((a, s) => a + (s.mins || 0), 0), steps: st.map(s => s.id), parts: st.length };
      }),
      tries: tries.map(s => ({ id: s.id, title: s.title, titleHi: H[s.title] || s.title, what: s.what, whatHi: H[s.what] || s.what, mins: s.mins, app: s.app }))
    };
  });

  /* steps in route order, for "your next step" and the topic counts */
  const steps = STEPS.map(s => ({ id: s.id, k: s.kind, ch: s.ch, book: s.book, t: stepTopic(s) || weekOwner[s.week], w: s.week,
    title: s.kind === 'chapter' ? s.num + '. ' + s.title : s.title,
    titleHi: s.kind === 'chapter' ? s.num + '. ' + (H[s.title] || s.title) : (s.titleHi || H[s.title] || s.title),
    href: s.kind === 'chapter' ? 'app/#/ch/' + s.ch : s.kind === 'read' ? 'BOOK' + s.book + (s.at ? '#' + s.at : '') : s.app ? 'app/' + s.app : 'plan/#w' + s.week }));
  return { topics, steps, order, books, chapters, H };
}

/* ---------- consistency ---------- */
export function check(M, html) {
  const errs = [];
  const count = (attr, v) => (html.match(new RegExp(attr + '="' + v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"', 'g')) || []).length;
  for (const c of M.chapters) { const n = count('data-ch', c.id); if (n !== 1) errs.push(`app chapter ${c.id} appears ${n} times`); }
  for (const b of M.books) { const n = count('data-book', b.file); if (n !== 1) errs.push(`book chapter ${b.file} appears ${n} times`); }
  const ids = [...html.matchAll(/data-steps="([^"]*)"/g)].flatMap(m => m[1].split(' ').filter(Boolean));
  for (const s of STEPS) { const n = ids.filter(x => x === s.id).length; if (n !== 1) errs.push(`route step ${s.id} appears ${n} times`); }
  for (const w of WEEKS) if (!new RegExp(`data-w="${w.n}"`).test(html)) errs.push(`plan week ${w.n} is on no topic`);
  for (const t of M.topics) if (t.stage) t.stage.endWith.forEach((_, i) => { if (count('data-tick', t.id + '-e' + (i + 1)) !== 1) errs.push(`${t.id}: deliverable ${i + 1} missing`); });
  for (const g of BEFORE) for (const it of g.items) if (count('data-tick', it.id) !== 1) errs.push(`before-you-start ${it.id} missing`);
  const idList = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]), seen = new Set();
  for (const i of idList) { if (seen.has(i)) errs.push(`duplicate id "${i}"`); seen.add(i); }
  if (errs.length) throw new Error('worksheet out of step with the course:\n  - ' + errs.join('\n  - '));
}

/* ---------- rendering ---------- */
function render(M, lang) {
  const L = UI[lang], hi = lang === 'hi';
  const base = hi ? '../../' : '../';
  const bookBase = base + (hi ? 'book/hi/' : 'book/');
  const href = h => (h.startsWith('/') ? base + h.slice(1) : h).replace('next=/worksheet/', hi ? 'next=/worksheet/hi/' : 'next=/worksheet/');
  const pick = (en, h) => hi ? h : en;
  const fm = m => !m ? '' : m >= 90 ? (Math.round(m / 30) / 2) + ' ' + L.h : m + ' ' + L.min;
  const ext = u => `href="${esc(u)}" target="_blank" rel="noopener noreferrer"`;
  const status = `<span class="st" aria-hidden="true"></span>`;

  const appRow = c => {
    const meta = ['~' + fm(c.mins)];
    if (c.full >= 120 && c.full > c.mins * 1.5) meta.push(L.inFull.replace('{n}', fm(c.full)));
    const sub = [];
    if (c.hands) sub.push(c.hands === 1 ? L.handsOne : L.handsOn.replace('{n}', c.hands));
    if (c.cap) sub.push(`${L.capstone}: ${esc(pick(c.cap.en, c.cap.hi))}`);
    return `<li class="it" data-k="chapter" data-ch="${c.id}" data-steps="${c.steps.join(' ')}">${status}<span class="ib">` +
      `<a href="${base}app/#/ch/${c.id}"><b>${esc(c.num)}</b> ${esc(pick(c.title, c.titleHi))}</a> <span class="sm">${meta.join(' · ')}</span>` +
      (sub.length ? `<span class="sw">${sub.join(' · ')}</span>` : '') + `</span></li>`;
  };
  const readRow = b => `<li class="it" data-k="read" data-book="${esc(b.file)}" data-steps="${b.steps.join(' ')}">${status}<span class="ib">` +
    `<a href="${bookBase}${esc(b.file)}"><b>${b.n ? (hi ? 'Kitaab ' : 'Book ') + b.n : (b.file === 'preface.html' ? (hi ? 'Bhumika' : 'Preface') : (hi ? 'Upsanhaar' : 'Afterword'))}</b> ${esc(pick(b.title, b.titleHi))}</a>` +
    ` <span class="sm">~${fm(b.mins)}</span>` + (b.summary ? `<span class="sw">${esc(plain(pick(b.summary, b.summaryHi)))}</span>` : '') + `</span></li>`;
  const tryRow = s => `<li class="it" data-k="try" data-steps="${esc(s.id)}">${status}<span class="ib">` +
    `<a href="${s.app ? base + 'app/' + esc(s.app) : base + 'plan/'}"><b>Try</b> ${esc(pick(s.title, s.titleHi))}</a> <span class="sm">~${fm(s.mins)}</span>` +
    `<span class="sw">${esc(plain(pick(s.what, s.whatHi)))}</span></span></li>`;
  const weekRow = w => `<li class="wk${w.look.length ? '' : ' shared'}"${w.look.length ? ` data-k="look" data-steps="${w.look.map(s => s.id).join(' ')}"` : ''}>` +
    (w.look.length ? status : '<span class="st none" aria-hidden="true"></span>') +
    `<span class="ib"><a href="${base}plan/#w${w.n}"><b>${L.week} ${w.n}</b> ${esc(pick(w.title, w.titleHi))}</a> <span class="sm" data-w="${w.n}">${esc(w.dates)}</span>` +
    (w.look.length ? `<span class="sw">${L.lookBack}</span>` : '') + `</span></li>`;

  const before = () => BEFORE.map(g => `<div class="grp"><h4>${esc(pick(g.group, g.groupHi))}</h4><ul class="ticks">` +
    g.items.map(it => `<li><label class="chk"><input type="checkbox" data-tick="${it.id}"><span>${esc(pick(it.text, it.hi))}</span></label>` +
      (it.how ? `<p class="how">${esc(pick(it.how, it.howHi))}</p>` : '') +
      (it.links ? `<p class="lk">${it.links.map(([a, b, u]) => `<a href="${esc(href(u))}">${esc(pick(a, b))} →</a>`).join(' ')}</p>` : '') + '</li>').join('') +
    '</ul></div>').join('');

  const topic = t => {
    const parts = [];
    parts.push(`<p class="intro">${esc(pick(t.intro, t.introHi))}</p>`);
    /* the topic in pictures: the first two diagrams here, the rest a tap away */
    if (t.figs.length) parts.push(`<div class="wsfigs">${t.figs.slice(0, 2).map(id => `<div class="wsfig" data-fig="${id}"></div>`).join('')}</div>` +
      (t.figs.length > 2 ? `<details class="sub morefigs"><summary>${L.moreFigs} <span class="sm">(${t.figs.length - 2})</span></summary>${t.figs.slice(2).map(id => `<div class="wsfig" data-fig="${id}"></div>`).join('')}</details>` : ''));
    if (t.n === 0) parts.push(`<h3>${L.checklist}</h3>` + before());
    if (t.n > 0) parts.push(`<div class="builds"><h3>${L.builds}</h3>` + (t.builds.length
      ? `<ul>${t.builds.map(b => `<li><b>${rich(pick(b.what, b.whatHi))}</b> <span class="sm">${hi ? '' : 'from '}<a href="${base}app/#/ch/${b.ch}">${esc(b.num)}</a>${hi ? ' se' : ''}, <a href="#${b.topic}">${L.topic} ${b.topic.slice(1)}</a></span> <span class="sw">${esc(plain(pick(b.why, b.whyHi)))}</span></li>`).join('')}</ul>`
      : `<p class="sm">${t.n === 1 ? `<a href="#t0">${esc(pick(TOPICS[0].title, TOPICS[0].hi))}</a>` : L.buildsNone}</p>`) + '</div>');
    parts.push(`<div class="cols"><div><h3>${L.read}</h3><ol class="items">${t.reads.map(readRow).join('')}</ol></div>` +
      `<div><h3>${L.do}</h3><ol class="items">${t.apps.map(appRow).join('')}${t.tries.map(tryRow).join('')}</ol></div></div>`);
    parts.push(`<h3>${L.onPlan}</h3><ol class="items weeks">${t.weeks.map(weekRow).join('')}</ol>`);
    if (t.stage) parts.push(`<div class="proj"><h3>${L.project}</h3><p class="stage"><span class="tag">${L.stageLabel} ${t.n}</span> ${esc(pick(t.stage.title, M.H[t.stage.title] || t.stage.title))}</p>` +
      `<p>${esc(plain(pick(t.stage.plain, M.H[t.stage.plain] || t.stage.plain)))}</p><p class="sm"><b>${L.endWith}</b></p><ul class="ticks">` +
      t.stage.endWith.map((e, i) => `<li><label class="chk"><input type="checkbox" data-tick="${t.id}-e${i + 1}"><span>${esc(plain(pick(e, M.H[e] || e)))}</span></label></li>`).join('') + '</ul></div>');
    if (t.reading.length) parts.push(`<details class="sub"><summary>${L.deeper} <span class="sm">(${t.reading.length})</span></summary><ul class="rd">` +
      t.reading.map(r => `<li><span class="tag">${r[0] === 'paper' ? L.paper : L.kase}</span> <a ${ext(r[3])}>${esc(r[1])}</a> <span class="sm">${esc(r[2])}</span><span class="sw">${esc(pick(r[4], r[5] || r[4]))}</span></li>`).join('') + '</ul></details>');
    if (t.words.length) parts.push(`<details class="sub"><summary>${L.words} <span class="sm">(${t.words.length})</span></summary><dl class="words">` +
      t.words.map(w => `<dt>${esc(w.term)}</dt><dd>${esc(plain(pick(w.def, w.defHi)))}</dd>`).join('') + '</dl></details>');
    parts.push(`<div class="mine"><label class="chk can"><input type="checkbox" data-can="${t.id}"><span>${t.n === 0 ? L.ready : L.can}</span></label>` +
      `<label class="nt"><span>${L.notes}</span><textarea data-note="${t.id}" rows="3" placeholder="${esc(L.notesPh)}"></textarea></label></div>`);
    return `<section class="topic" id="${t.id}" data-topic="${t.id}"><details class="tp"${t.n <= 1 ? ' open' : ''}>` +
      `<summary><span class="tn">${t.n}</span><span class="tt">${esc(pick(t.title, t.hi))}</span>` +
      `<span class="tprog"><span class="pbar"><i></i></span><span class="tc"></span></span><span class="tcan" hidden>✓</span></summary>` +
      `<div class="tbody">${parts.join('')}</div></details></section>`;
  };

  const toc = `<nav class="toc" aria-label="${L.topics}"><h2>${L.topics}</h2><ol start="0">` +
    M.topics.map(t => `<li><a href="#${t.id}"><span class="tt">${esc(pick(t.title, t.hi))}</span><span class="tc" data-tc="${t.id}"></span></a></li>`).join('') + '</ol></nav>';
  const steps = M.steps.map(s => [s.id, s.k, s.ch || s.book || '', s.t, pick(s.title, s.titleHi), s.href.replace(/^BOOK/, hi ? 'book/hi/' : 'book/')]);

  const body = `
<header class="bar">
  <a class="brand" href="./">${esc(L.brand)}</a>
  <a class="nav" href="${base}app/#/start">${L.app} &rarr;</a>
  <a class="nav" href="${bookBase}">${L.book} &rarr;</a>
  <a class="nav" href="${base}plan/">${L.plan} &rarr;</a>
  <a class="nav" href="${L.otherHref}" hreflang="${hi ? 'en' : 'hi'}">${L.other}</a>
  <button id="theme" type="button" aria-label="Switch colour theme">&#9680;</button>
</header>
<main>
<h1>${esc(L.title)}</h1>
<p class="lead">${esc(L.lead)}</p>
<section id="overview" class="panel" aria-live="polite">
  <div class="ov"><span class="pbar big"><i></i></span><span id="ov-steps">${esc(L.loading)}</span><span id="ov-can"></span></div>
  <div id="ws-journey" aria-label="${esc(L.journey)}"></div>
  <p id="ov-next" class="small"></p>
  <div class="actions"><button type="button" id="ws-print">${L.print}</button><button type="button" id="ws-csv">${L.csv}</button><button type="button" class="quiet" id="ws-open">${L.expand}</button></div>
  <p id="ws-saved" class="small"></p>
  <p class="small rd-tip">${esc(L.rdHint)}</p>
</section>
${toc}
${M.topics.map(topic).join('\n')}
<p class="note">${hi
  ? 'Yeh page har baar site banne par course, kitaab aur plan se banta hai, isliye hamesha unse milta hai. Ticks un teeno jagah se aate hain; notes aur “samjha sakta/sakti hoon” yahan save hote hain.'
  : 'This page is built from the course, the book and the plan every time the site is built, so it always matches them. The ticks come from all three; your notes and “I can explain this” ticks save here.'}</p>
<p class="pnote" id="ws-printed" hidden></p>
</main>
<aside id="ws-reader" class="reader" role="dialog" aria-label="${esc(L.rdLabel)}" hidden>
  <div class="rd-bar"><span class="rd-title"></span><a class="rd-new" href="#" target="_blank" rel="noopener">${esc(L.rdNew)} &#8599;</a><button type="button" class="rd-close" aria-label="${esc(L.rdClose)}">&#10005;<span> ${esc(L.rdClose)}</span></button></div>
</aside>`;
  return { body, steps };
}

/* the plan's colour tokens, light and dark, so the two pages look like one site */
const TOKENS = PLAN_CSS.split('*{box-sizing:border-box}')[0];
if (!/--accent:/.test(TOKENS) || !/prefers-color-scheme:dark/.test(TOKENS)) throw new Error('worksheet: the plan\'s colour tokens moved');
export const CSS = TOKENS + `*{box-sizing:border-box}
html{scroll-behavior:smooth}
[id]{scroll-margin-top:4.5rem}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 var(--sans);-webkit-text-size-adjust:100%}
a{color:var(--accent);text-underline-offset:2px}
header.bar{position:sticky;top:0;z-index:5;background:var(--raised);border-bottom:1px solid var(--rule);display:flex;flex-wrap:wrap;align-items:center;gap:.25rem 1rem;padding:.6rem max(16px,env(safe-area-inset-right)) .6rem max(16px,env(safe-area-inset-left))}
header.bar .brand{font-weight:600;color:var(--ink);text-decoration:none;margin-right:auto}
header.bar a.nav{color:var(--ink-2);text-decoration:none;padding:.3rem .1rem}
header.bar a.nav:hover{color:var(--ink)}
button{font:inherit;font-size:.9rem;background:var(--raised);border:1px solid var(--rule);color:var(--ink);border-radius:4px;padding:.4rem .75rem;cursor:pointer}
button:hover{border-color:var(--accent)}
button.quiet{background:none;color:var(--ink-2)}
header.bar button{padding:.2rem .5rem;background:none;color:var(--ink-2)}
main{max-width:980px;margin:0 auto;padding:1.6rem 16px 5rem}
h1{font:600 clamp(1.7rem,4.5vw,2.3rem)/1.15 var(--serif);margin:.2rem 0 .6rem}
h2{font:600 1.15rem/1.3 var(--serif);margin:0 0 .5rem}
h3{font:600 .78rem/1.3 var(--sans);text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:1.3rem 0 .45rem}
h4{font:600 .9rem/1.3 var(--sans);margin:.9rem 0 .3rem}
.lead{font:1.05rem/1.6 var(--serif);color:var(--ink-2);max-width:46rem;margin:0 0 1.2rem}
.small,.sm{font-size:.82rem;color:var(--muted)}
.panel{background:var(--raised);border:1px solid var(--rule);border-radius:6px;padding:1rem 1.1rem;margin:0 0 1.2rem}
.ov{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem 1rem;font-weight:600}
.ov #ov-can{font-weight:400;color:var(--ink-2)}
.pbar{display:inline-block;width:5.5rem;height:6px;border-radius:3px;background:var(--sunk);overflow:hidden;vertical-align:middle}
.pbar.big{width:min(16rem,100%);height:8px}
.pbar i{display:block;height:100%;width:0;background:var(--accent);transition:width .3s}
.actions{display:flex;flex-wrap:wrap;gap:.5rem;margin:.7rem 0 .2rem}
.toc{background:var(--raised);border:1px solid var(--rule);border-radius:6px;padding:.9rem 1.1rem;margin:0 0 1.5rem}
.toc ol{margin:0;padding-left:1.6rem;columns:2 300px;column-gap:2rem}
.toc li{margin:.2rem 0;break-inside:avoid}
.toc a{text-decoration:none;color:var(--ink);display:flex;gap:.5rem;justify-content:space-between}
.toc a:hover .tt{text-decoration:underline}
.tc{font:.8rem var(--mono);color:var(--muted);white-space:nowrap}
.topic{margin:0 0 .8rem}
details.tp{background:var(--raised);border:1px solid var(--rule);border-radius:6px}
details.tp>summary{list-style:none;cursor:pointer;display:flex;flex-wrap:wrap;align-items:center;gap:.3rem .8rem;padding:.85rem 1.1rem}
details.tp>summary::-webkit-details-marker{display:none}
details.tp>summary .tn{font:600 .85rem var(--mono);color:var(--accent);min-width:1.4rem}
details.tp>summary .tt{font:600 1.08rem/1.3 var(--serif);flex:1 1 18rem}
details.tp>summary .tprog{display:flex;align-items:center;gap:.5rem}
details.tp>summary .tcan{color:var(--good);font-weight:600}
details.tp[open]>summary{border-bottom:1px solid var(--rule-soft)}
.tbody{padding:.3rem 1.1rem 1.1rem}
.intro{font:1rem/1.6 var(--serif);color:var(--ink-2);margin:.6rem 0 .2rem;max-width:46rem}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:0 1.6rem}
@media (max-width:760px){.cols{grid-template-columns:1fr}}
@media (max-width:560px){header.bar{position:static}[id]{scroll-margin-top:.5rem}header.bar .brand{flex-basis:100%}}
ol.items,ul.ticks,.builds ul,ul.rd{list-style:none;margin:0;padding:0}
.it,.wk,.builds li,ul.rd li{display:flex;gap:.6rem;padding:.45rem 0;border-top:1px solid var(--rule-soft)}
.builds li,ul.rd li{display:block}
.ib{min-width:0;flex:1}
.ib a{text-decoration:none;color:var(--ink)}
.ib a:hover{text-decoration:underline;color:var(--accent)}
.ib a b{font:600 .8rem var(--mono);color:var(--accent);margin-right:.2rem}
.sw{display:block;font-size:.84rem;color:var(--ink-2);margin-top:.1rem}
.st{flex:none;width:1.1rem;height:1.1rem;margin-top:.2rem;border:1.5px solid var(--rule);border-radius:50%}
.st.none{border-style:dotted;opacity:.5}
.done>.st{background:var(--good);border-color:var(--good);position:relative}
.done>.st::after{content:'';position:absolute;left:.3rem;top:.12rem;width:.28rem;height:.5rem;border:solid var(--raised);border-width:0 2px 2px 0;transform:rotate(45deg)}
.half>.st{background:linear-gradient(90deg,var(--good) 50%,transparent 50%);border-color:var(--good)}
.done .ib>a{color:var(--muted)}
.tag{display:inline-block;font:600 .68rem/1.4 var(--sans);text-transform:uppercase;letter-spacing:.05em;color:var(--accent);background:var(--accent-wash);border-radius:3px;padding:.05rem .4rem;vertical-align:.1em}
.proj{margin-top:.4rem}
.proj .stage{font-weight:600;margin:.2rem 0}
ul.ticks li{padding:.3rem 0}
label.chk{display:flex;gap:.55rem;align-items:flex-start;cursor:pointer}
label.chk input{flex:none;width:1.05rem;height:1.05rem;margin:.2rem 0 0;accent-color:var(--accent)}
.how{margin:.25rem 0 0 1.6rem;font-size:.86rem;color:var(--ink-2)}
.lk{margin:.2rem 0 0 1.6rem;font-size:.84rem;display:flex;flex-wrap:wrap;gap:.2rem 1rem}
.grp h4{margin-top:1rem}
details.sub{margin:.9rem 0 0;border-top:1px solid var(--rule-soft);padding-top:.5rem}
details.sub>summary{cursor:pointer;font:600 .78rem/1.3 var(--sans);text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}
dl.words{margin:.5rem 0 0;display:grid;grid-template-columns:minmax(7rem,12rem) 1fr;gap:.35rem 1rem;font-size:.88rem}
dl.words dt{font-weight:600}
dl.words dd{margin:0;color:var(--ink-2)}
@media (max-width:560px){dl.words{grid-template-columns:1fr}dl.words dd{margin-bottom:.4rem}}
.mine{margin-top:1.1rem;padding:.8rem .9rem;background:var(--sunk);border-radius:5px}
.mine .can{font-weight:600}
.mine .nt{display:block;margin-top:.6rem}
.mine .nt span{display:block;font:600 .78rem/1.3 var(--sans);text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:.25rem}
textarea{width:100%;font:.92rem/1.5 var(--sans);color:var(--ink);background:var(--raised);border:1px solid var(--rule);border-radius:4px;padding:.5rem .6rem;resize:vertical}
.pnote{white-space:pre-wrap;font-size:.9rem;border:1px solid var(--rule);border-radius:4px;padding:.4rem .6rem;min-height:2.5rem}
.note{font-size:.82rem;color:var(--muted);margin-top:2.5rem;border-top:1px solid var(--rule);padding-top:1rem}
#ws-journey{margin:.9rem 0 .2rem}
#ws-journey.fx{margin:.9rem 0 .2rem;background:var(--paper)}
.wsfigs .fx,.morefigs .fx{margin:1rem 0}
.wsfig.fx{background:var(--paper)}
.flash{outline:2px solid var(--accent);outline-offset:2px}
/* the reading panel: the page a link points to, beside the worksheet */
.reader{position:fixed;z-index:20;top:0;right:0;bottom:0;width:min(62vw,1100px);display:flex;flex-direction:column;background:var(--raised);border-left:1px solid var(--rule);box-shadow:-12px 0 32px -18px #0006}
.reader[hidden]{display:none}
.rd-bar{display:flex;align-items:center;gap:.6rem;padding:.5rem .7rem;border-bottom:1px solid var(--rule);background:var(--sunk);font-size:.86rem}
.rd-title{flex:1;min-width:0;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rd-new{white-space:nowrap}
.rd-close{white-space:nowrap}
.rd-frame{flex:1;width:100%;border:0;background:var(--paper)}
body.reading{padding-right:min(62vw,1100px)}
body.reading header.bar{position:sticky}
body.reading .cols{grid-template-columns:1fr}
body.reading .toc ol{columns:1}
.it.reading,.wk.reading{background:var(--accent-wash);border-radius:6px}
@media (max-width:900px){.reader{width:100vw;border-left:0}body.reading{padding-right:0;overflow:hidden}.rd-close span{display:none}}
@media print{.reader{display:none!important}body.reading{padding-right:0}}
@media print{
  :root{--paper:#fff;--raised:#fff;--sunk:#f3f4f1;--ink:#000;--ink-2:#222;--muted:#555;--rule:#bbb;--rule-soft:#ddd;--accent:#1F6F5C;--good:#2c7a4b}
  body{font-size:11pt;background:#fff}
  header.bar,.actions,.toc,#ws-saved{display:none!important}
  main{padding:0;max-width:none}
  details.tp{border:0;border-top:2px solid #000;border-radius:0;break-before:auto}
  details.tp>summary{padding:.5rem 0}
  .tbody{padding:0 0 .6rem}
  .topic{break-inside:auto}
  .it,.wk,ul.ticks li,.builds li,ul.rd li{break-inside:avoid}
  textarea{display:none}
  .pnote{display:block!important}
  a{color:#000;text-decoration:none}
  .pbar i{print-color-adjust:exact;-webkit-print-color-adjust:exact}
  .done>.st,.half>.st,.pbar i{print-color-adjust:exact;-webkit-print-color-adjust:exact}
}
`;

function page(lang, body, steps, M) {
  const L = UI[lang], hi = lang === 'hi', base = hi ? '../../' : '../';
  return `<!doctype html>
<html lang="${hi ? 'hi-Latn' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(L.title)} | AI From Zero</title>
<meta name="description" content="${esc(L.desc)}">
<meta name="robots" content="noindex">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="${base}icon.svg" type="image/svg+xml">
<link rel="alternate" hreflang="${hi ? 'en' : 'hi'}" href="${L.otherHref}">
<meta name="theme-color" content="#ECEEEA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#121517" media="(prefers-color-scheme: dark)">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap">
<style>${CSS}</style>
<script>document.documentElement.classList.add('js');try{var t=localStorage.getItem('aipm-plan-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
</head>
<body data-start="${START}" data-base="${base}" data-lang="${lang}">
${body}
<script>window.WS_STEPS=${JSON.stringify(steps).replace(/</g, '\\u003c')};window.WS_UI=${JSON.stringify(L).replace(/</g, '\\u003c')};window.WS_TOPICS=${JSON.stringify(M.topics.map(t => [t.id, hi ? t.hi : t.title])).replace(/</g, '\\u003c')};</script>
<script src="${base}figs.js"></script>
<script src="${base}progress.js"></script>
<script>
${CLIENT}
</script>
</body>
</html>
`;
}

const CLIENT = fs.readFileSync(p.join(HERE, 'worksheet.js'), 'utf8');

export function buildWorksheet(root, outDir, C) {
  const M = model(root, C);
  let words = 0;
  for (const lang of ['en', 'hi']) {
    const { body, steps } = render(M, lang);
    check(M, body);
    const dir = lang === 'hi' ? p.join(outDir, 'hi') : outDir;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(p.join(dir, 'index.html'), page(lang, body, steps, M));
    if (lang === 'en') words = plain(body).split(/\s+/).length;
  }
  return {
    topics: M.topics.length, words,
    apps: M.topics.reduce((a, t) => a + t.apps.length, 0),
    books: M.topics.reduce((a, t) => a + t.reads.length, 0),
    steps: STEPS.length
  };
}
