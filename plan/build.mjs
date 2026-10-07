/* The Applied AI PM plan: three static pages built from the Markdown beside this file.
   No dependencies. Every link is relative, so the pages work at the site root and
   under a project sub-path such as /Relevel/plan/.

   Source             Output
   plan/weekly.md     dist/site/plan/index.html       the week-by-week working plan
   plan/curriculum.md dist/site/plan/curriculum.html  the full curriculum
   plan/ship.md       dist/site/plan/ship.html        how to build and ship each artifact

   Week tables, gates and rules are not typed into the Markdown. A marker such as
   <!-- weeks 1-4 --> expands to a table built from plan/data.mjs, so the weekly plan
   and the curriculum cannot disagree. check() fails the build when they would.
*/
import fs from 'node:fs';
import p from 'node:path';
import { RESOURCES, MONTHS, WEEKS, GATES, RULES } from './data.mjs';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slug = s => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';

/* ---------- inline ---------- */
function inline(s) {
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
    const ext = /^https?:/.test(u);
    return `<a href="${u}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${t}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => '<code>' + esc(codes[+i]) + '</code>');
}

/* ---------- blocks ---------- */
const isTableRow = l => /^\s*\|.*\|\s*$/.test(l);
const listMatch = l => l.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);

function renderList(lines, i) {
  const base = listMatch(lines[i])[1].length;
  const ordered = /\d/.test(listMatch(lines[i])[2]);
  const first = parseInt(listMatch(lines[i])[2], 10);
  let html = ordered ? (first > 1 ? `<ol start="${first}">` : '<ol>') : '<ul>';
  while (i < lines.length) {
    const m = listMatch(lines[i]);
    if (!m || m[1].length < base) break;
    if (m[1].length > base) {
      const [inner, next] = renderList(lines, i);
      html = html.replace(/<\/li>$/, inner + '</li>');
      i = next;
      continue;
    }
    html += '<li>' + inline(m[3]) + '</li>';
    i++;
    /* continuation lines of the same item */
    while (i < lines.length && lines[i].trim() && !listMatch(lines[i]) && /^\s{2,}/.test(lines[i])) {
      html = html.replace(/<\/li>$/, ' ' + inline(lines[i].trim()) + '</li>');
      i++;
    }
  }
  return [html + (ordered ? '</ol>' : '</ul>'), i];
}

export function md(src, expand = () => '') {
  const lines = src.replace(/\r/g, '').split('\n');
  const out = [];
  const heads = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^```(\w*)\s*$/))) {
      const code = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) { code.push(lines[i]); i++; }
      i++;
      out.push(`<div class="code"><pre><code${m[1] ? ` data-lang="${esc(m[1])}"` : ''}>${esc(code.join('\n'))}</code></pre></div>`);
      continue;
    }
    if ((m = l.match(/^<!--\s*(\S+)\s*(.*?)\s*-->\s*$/))) {
      const r = expand(m[1], m[2]);
      out.push(r.html);
      for (const h of r.heads || []) heads.push(h);
      i++; continue;
    }
    if ((m = l.match(/^(#{1,4})\s+(.*)$/))) {
      const n = m[1].length;
      let text = m[2].trim();
      let id = '';
      const idm = text.match(/^(.*?)\s*\{#([\w-]+)\}$/);
      if (idm) { text = idm[1]; id = idm[2]; }
      id = id || slug(text);
      if (n === 2 || n === 3) heads.push({ n, id, text: text.replace(/[*`]/g, '') });
      out.push(`<h${n} id="${id}">${inline(text)}</h${n}>`);
      i++; continue;
    }
    if (/^---+\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    if (isTableRow(l) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const cells = r => r.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = cells(l);
      i += 2;
      const rows = [];
      while (i < lines.length && isTableRow(lines[i])) { rows.push(cells(lines[i])); i++; }
      out.push('<div class="tw"><table><thead><tr>' + head.map(c => `<th>${inline(c)}</th>`).join('') +
        '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map((c, k) => `<td${k === 0 ? ' class="k"' : ''}>${inline(c)}</td>`).join('') + '</tr>').join('') +
        '</tbody></table></div>');
      continue;
    }
    if (/^>\s?/.test(l)) {
      const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push('<blockquote>' + inline(q.join(' ')) + '</blockquote>');
      continue;
    }
    if (listMatch(l)) {
      const [html, next] = renderList(lines, i);
      out.push(html); i = next; continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|```|<!--|\s*\|.*\|\s*$|---+\s*$)/.test(lines[i]) && !listMatch(lines[i])) { para.push(lines[i].trim()); i++; }
    out.push('<p>' + inline(para.join(' ')) + '</p>');
  }
  return { html: out.join('\n'), heads };
}

/* ---------- page ---------- */
const CSS = `
:root{--paper:#ECEEEA;--raised:#F6F7F4;--sunk:#E2E5E0;--ink:#14181C;--ink-2:#3D454A;--muted:#697169;--rule:#C9CDC5;--rule-soft:#D9DCD5;--accent:#1F6F5C;--accent-wash:#1F6F5C14;
--serif:'Newsreader',Georgia,'Times New Roman',serif;--sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;--mono:'IBM Plex Mono',ui-monospace,Menlo,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--paper:#121517;--raised:#191D20;--sunk:#0D1012;--ink:#E4E7E2;--ink-2:#B4BBB6;--muted:#8A928C;--rule:#2E3438;--rule-soft:#232A2D;--accent:#4FB89A;--accent-wash:#4FB89A1A;color-scheme:dark}}
:root[data-theme="dark"]{--paper:#121517;--raised:#191D20;--sunk:#0D1012;--ink:#E4E7E2;--ink-2:#B4BBB6;--muted:#8A928C;--rule:#2E3438;--rule-soft:#232A2D;--accent:#4FB89A;--accent-wash:#4FB89A1A;color-scheme:dark}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
[id]{scroll-margin-top:5.5rem}
body{margin:0;background:var(--paper);color:var(--ink);font:17px/1.65 var(--serif);-webkit-text-size-adjust:100%}
a{color:var(--accent);text-underline-offset:2px}
header.bar{position:sticky;top:0;z-index:5;background:var(--raised);border-bottom:1px solid var(--rule);display:flex;flex-wrap:wrap;align-items:center;gap:.25rem 1rem;padding:.6rem max(16px,env(safe-area-inset-right)) .6rem max(16px,env(safe-area-inset-left));font:500 .84rem/1.2 var(--sans)}
header.bar .brand{font-weight:600;color:var(--ink);text-decoration:none;margin-right:auto}
header.bar a.nav{color:var(--ink-2);text-decoration:none;padding:.3rem .1rem;border-bottom:2px solid transparent}
header.bar a.nav[aria-current="page"]{color:var(--ink);border-bottom-color:var(--accent)}
header.bar a.nav:hover{color:var(--ink)}
header.bar button{font:inherit;background:none;border:1px solid var(--rule);color:var(--ink-2);border-radius:3px;padding:.2rem .5rem;cursor:pointer}
main{max-width:1000px;margin:0 auto;padding:2rem 16px 5rem}
main>*{max-width:68ch}
main>.tw,main>.toc{max-width:none}
h1{font:600 clamp(1.7rem,4.5vw,2.4rem)/1.15 var(--serif);letter-spacing:-.01em;margin:.2rem 0 1rem;text-wrap:balance}
h2{font:600 1.45rem/1.25 var(--serif);margin:2.6rem 0 .8rem;padding-top:1rem;border-top:1px solid var(--rule);text-wrap:balance}
h3{font:600 1.1rem/1.3 var(--sans);margin:1.8rem 0 .5rem}
h4{font:600 .95rem/1.3 var(--sans);margin:1.4rem 0 .4rem;color:var(--ink-2)}
p,li{hyphens:manual}
ul,ol{padding-left:1.3rem}
li{margin:.25rem 0}
li>ul,li>ol{margin:.3rem 0}
strong{font-weight:600}
code{font:.85em var(--mono);background:var(--sunk);padding:.08em .3em;border-radius:3px}
blockquote{margin:1.2rem 0;padding:.2rem 0 .2rem 1rem;border-left:3px solid var(--accent);color:var(--ink-2);font-style:italic}
hr{border:0;border-top:1px solid var(--rule);margin:2rem 0}
.tw{overflow-x:auto;margin:1rem 0;border:1px solid var(--rule);border-radius:3px;background:var(--raised)}
table{border-collapse:collapse;width:100%;min-width:640px;font:.84rem/1.45 var(--sans);font-variant-numeric:tabular-nums}
th{text-align:left;font:600 .72rem/1.2 var(--sans);text-transform:uppercase;letter-spacing:.06em;color:var(--muted);background:var(--sunk);padding:.55rem .7rem;white-space:nowrap}
td{padding:.6rem .7rem;border-top:1px solid var(--rule-soft);vertical-align:top}
td.k{font-weight:600;white-space:nowrap}
.toc{background:var(--raised);border:1px solid var(--rule);border-radius:3px;padding:.7rem 1rem;margin:1.2rem 0 0;font:.9rem/1.5 var(--sans)}
.toc summary{cursor:pointer;font-weight:600}
.toc ol{columns:2 280px;margin:.6rem 0 0;padding-left:1.1rem}
.toc a{text-decoration:none}
.note{font:.85rem/1.5 var(--sans);color:var(--muted);margin-top:3rem;border-top:1px solid var(--rule);padding-top:1rem}
@media (max-width:560px){body{font-size:16px}}

.code{position:relative;margin:1rem 0;max-width:none}
pre{margin:0;overflow-x:auto;background:var(--sunk);border:1px solid var(--rule);border-radius:3px;padding:.8rem 1rem;font:.8rem/1.55 var(--mono);tab-size:2}
pre code{background:none;padding:0;font:inherit;white-space:pre}
.code button{position:absolute;top:.4rem;right:.4rem;font:500 .7rem/1 var(--sans);background:var(--raised);color:var(--ink-2);border:1px solid var(--rule);border-radius:3px;padding:.3rem .5rem;cursor:pointer}
table.wk{min-width:880px}
table.wk td.k small{display:block;font-weight:400;color:var(--muted);margin-top:.15rem}
table.wk .lk,table.wk .hw{list-style:none;margin:0;padding:0}
table.wk .lk li,table.wk .hw li{margin:0 0 .3rem}
table.wk tr:target td{background:var(--accent-wash)}
.tag{display:inline-block;font:600 .65rem/1 var(--sans);letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--rule);border-radius:2px;padding:.15rem .3rem;color:var(--muted)}
.muted{color:var(--muted)}
@media (max-width:700px){
  table.wk{min-width:0}
  table.wk thead{display:none}
  table.wk,table.wk tbody,table.wk tr,table.wk td{display:block;width:100%}
  table.wk tr{border-top:1px solid var(--rule);padding:.5rem 0}
  table.wk tr:first-child{border-top:0}
  table.wk td{border:0;padding:.25rem .8rem}
  table.wk td[data-l]::before{content:attr(data-l);display:block;font:600 .65rem/1.2 var(--sans);text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:.1rem}
  table.wk td.k{white-space:normal}
}
`;

function page({ title, desc, file, main, toc }) {
  const nav = (f, label) => `<a class="nav" href="${f}"${f === file ? ' aria-current="page"' : ''}>${label}</a>`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="noindex">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="../icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap">
<style>${CSS}</style>
<script>try{var t=localStorage.getItem('aipm-plan-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
</head>
<body>
<header class="bar">
  <a class="brand" href="./">Applied AI PM plan</a>
  ${nav('./', 'Weekly plan')}
  ${nav('curriculum.html', 'Curriculum')}
  ${nav('ship.html', 'How to ship')}
  <a class="nav" href="../">Workbook &rarr;</a>
  <button id="theme" type="button" aria-label="Switch colour theme">&#9680;</button>
</header>
<main>
${main}
${toc || ''}
<p class="note">Planning document, not advice. Dates, prices and regulatory details were checked on 7 October 2026 and will change; confirm anything that matters at the source.</p>
</main>
<script>
document.querySelectorAll('.code').forEach(function(b){
  var btn=document.createElement('button');btn.type='button';btn.textContent='Copy';
  btn.addEventListener('click',function(){
    var t=b.querySelector('code').textContent;
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){btn.textContent='Copied'},function(){
      var r=document.createRange();r.selectNodeContents(b.querySelector('code'));var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected'});
    setTimeout(function(){btn.textContent='Copy'},1500);
  });
  b.appendChild(btn);
});
document.getElementById('theme').addEventListener('click',function(){
  var r=document.documentElement,cur=r.getAttribute('data-theme');
  var dark=cur?cur==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  var next=dark?'light':'dark';r.setAttribute('data-theme',next);
  try{localStorage.setItem('aipm-plan-theme',next)}catch(e){}
});
</script>
</body>
</html>
`;
}

/* ---------- generated blocks ---------- */
function weekTable(from, to, recipes) {
  const rows = WEEKS.filter(w => w.n >= from && w.n <= to).map(w => {
    const learn = w.learn.length
      ? '<ul class="lk">' + w.learn.map(k => `<li><a href="${RESOURCES[k][1]}" target="_blank" rel="noopener noreferrer">${esc(RESOURCES[k][0])}</a></li>`).join('') + '</ul>'
      : '<span class="muted">Your own ship log. No new material.</span>';
    const how = '<ul class="hw">' + w.how.map(id => `<li><a href="ship.html#${id}">${esc(recipes.get(id) || id)}</a></li>`).join('') + '</ul>';
    return `<tr id="w${w.n}"><td class="k" data-l="Week">W${w.n}<small>${esc(w.dates)}</small>${w.light ? '<span class="tag">light</span>' : ''}</td>` +
      `<td data-l="Learn this week">${inline(w.topic)}</td><td data-l="Where to learn">${learn}</td>` +
      `<td data-l="Complexity">${esc(w.cx)}</td><td data-l="Ship this week">${inline(w.ship)}</td><td data-l="How to build it">${how}</td></tr>`;
  });
  return '<div class="tw"><table class="wk"><thead><tr><th>Week</th><th>Learn this week</th><th>Where to learn</th><th>Complexity</th><th>Ship this week</th><th>How to build it</th></tr></thead><tbody>' + rows.join('') + '</tbody></table></div>';
}

function makeExpand(recipes, seen) {
  return (name, arg) => {
    if (name === 'weeks') {
      const [a, b] = arg.split('-').map(Number);
      for (let n = a; n <= b; n++) seen.push(n);
      return { html: weekTable(a, b, recipes) };
    }
    if (name === 'month') {
      const m = MONTHS.find(x => x.n === +arg);
      const id = slug(m.name);
      return {
        html: `<h2 id="${id}">${esc(m.name)} (W${m.from}–${m.to})</h2><p><strong>${esc(m.dates)}.</strong> Goal: ${inline(m.goal)}</p>`,
        heads: [{ n: 2, id, text: m.name + ` (W${m.from}–${m.to})` }]
      };
    }
    if (name === 'rules') return { html: '<ol>' + RULES.map(r => `<li>${inline(r)}</li>`).join('') + '</ol>' };
    if (name === 'gates') {
      return { html: '<div class="tw"><table><thead><tr><th>Gate</th><th>Date</th><th>Pass criteria (each needs a link)</th><th>If behind, cut</th></tr></thead><tbody>' +
        GATES.map(g => `<tr><td class="k">${g.id}</td><td>${esc(g.date)}</td><td>${inline(g.pass)}</td><td>${inline(g.cut)}</td></tr>`).join('') + '</tbody></table></div>' };
    }
    throw new Error('plan: unknown marker <!-- ' + name + ' -->');
  };
}

/* ---------- consistency check ---------- */
const RECIPES_NOT_IN_A_WEEK = new Set(['ship-log']);

export function check(pages, recipeWeeks) {
  const errs = [];
  const ids = WEEKS.map(w => w.n);
  if (ids.join() !== Array.from({ length: 26 }, (_, i) => i + 1).join()) errs.push('data.mjs must define weeks 1..26 in order');
  for (const w of WEEKS) {
    for (const k of w.learn) {
      if (!RESOURCES[k]) errs.push(`W${w.n}: unknown resource "${k}"`);
      else if (!/^https:\/\//.test(RESOURCES[k][1])) errs.push(`W${w.n}: resource "${k}" is not an https link`);
    }
    if (!w.learn.length && w.n !== 26) errs.push(`W${w.n}: no learning link`);
    if (!w.how.length) errs.push(`W${w.n}: no how-to-ship recipe`);
    for (const id of w.how) if (!recipeWeeks.has(id)) errs.push(`W${w.n}: recipe "${id}" is not in ship.md`);
  }
  const used = new Map();
  for (const w of WEEKS) for (const id of w.how) used.set(id, (used.get(id) || new Set()).add(w.n));
  for (const [id, stated] of recipeWeeks) {
    if (!used.has(id)) { if (!RECIPES_NOT_IN_A_WEEK.has(id)) errs.push(`ship.md: recipe "${id}" is not used by any week`); continue; }
    const want = [...used.get(id)].sort((a, b) => a - b).join();
    const got = [...stated].sort((a, b) => a - b).join();
    if (want !== got) errs.push(`ship.md: recipe "${id}" says weeks [${got}] but data.mjs uses it in [${want}]`);
  }
  for (const [file, seen] of Object.entries(pages.weeksSeen)) {
    const s = [...seen].sort((a, b) => a - b).join();
    if (s !== ids.join()) errs.push(`${file}: week tables must cover W1-W26 exactly once (got ${s})`);
  }
  for (const m of MONTHS) if (!pages.text['curriculum.md'].includes(m.dates)) errs.push(`curriculum.md never mentions "${m.dates}" (${m.name})`);
  /* internal links resolve */
  const idsOf = html => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const have = { './': idsOf(pages.html['index.html']), 'curriculum.html': idsOf(pages.html['curriculum.html']), 'ship.html': idsOf(pages.html['ship.html']) };
  const outFile = { 'index.html': './', 'curriculum.html': 'curriculum.html', 'ship.html': 'ship.html' };
  for (const [f, html] of Object.entries(pages.html)) {
    for (const m of html.matchAll(/<a href="([^"]*)"/g)) {
      const h = m[1];
      if (/^(https?:|mailto:|\.\.\/)/.test(h)) continue;
      const [pg, frag] = h.split('#');
      const target = pg === '' ? outFile[f] : (pg === './' || pg === 'index.html') ? './' : pg;
      if (!(target in have)) { errs.push(`${f}: link to unknown page "${h}"`); continue; }
      if (frag && !have[target].has(frag)) errs.push(`${f}: link "${h}" has no matching anchor`);
    }
  }
  if (errs.length) throw new Error('plan out of sync:\n  - ' + errs.join('\n  - '));
}

export function buildPlan(root, outDir) {
  const src = p.join(root, 'plan');
  fs.mkdirSync(outDir, { recursive: true });
  const jobs = [
    { md: 'weekly.md', out: 'index.html', desc: 'Week-by-week working plan for becoming an Applied AI product manager: topics, linked resources, complexity, one thing to ship each week, and anti-drift rules.' },
    { md: 'curriculum.md', out: 'curriculum.html', desc: 'A 26-week learn-by-doing curriculum for an Applied AI product manager: evals, RAG, agents and MCP, Indic AI, governance, with four portfolio projects.' },
    { md: 'ship.md', out: 'ship.html', desc: 'Step-by-step recipes, code and links for building and shipping every artifact in the Applied AI PM plan, entirely in GitHub Codespaces and Actions.' }
  ];
  const text = {};
  for (const j of jobs) text[j.md] = fs.readFileSync(p.join(src, j.md), 'utf8');

  /* recipes first: id -> title, and the weeks each recipe says it serves */
  const recipes = new Map();
  const recipeWeeks = new Map();
  {
    const lines = text['ship.md'].split('\n');
    lines.forEach((l, i) => {
      const m = l.match(/^## (.*?)\s*\{#([\w-]+)\}\s*$/);
      if (!m) return;
      recipes.set(m[2], m[1]);
      const nums = new Set();
      const b = (lines.slice(i + 1, i + 4).join('\n').match(/^\*\*(Weeks? [^*]*)\*\*/m) || [, ''])[1];
      for (const n of b.matchAll(/\d+/g)) nums.add(+n[0]);
      recipeWeeks.set(m[2], nums);
    });
  }

  const html = {}, weeksSeen = {};
  let words = 0;
  for (const j of jobs) {
    const seen = [];
    const { html: body, heads } = md(text[j.md], makeExpand(recipes, seen));
    if (seen.length) weeksSeen[j.md] = new Set(seen.length === new Set(seen).size ? seen : [...seen, -1]);
    const h1 = (text[j.md].match(/^#\s+(.*)$/m) || [, 'Applied AI PM plan'])[1];
    const top = heads.filter(h => h.n === 2);
    const tocHtml = top.length > 4
      ? `<details class="toc"><summary>On this page</summary><ol>${top.map(h => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></details>`
      : '';
    const main = body.replace(/(<h1[^>]*>.*?<\/h1>)/, '$1' + tocHtml);
    html[j.out] = page({ title: h1 + ' | AI From Zero', desc: j.desc, file: j.out === 'index.html' ? './' : j.out, main, toc: '' });
    words += text[j.md].split(/\s+/).length;
  }
  check({ html, text, weeksSeen }, recipeWeeks);
  for (const j of jobs) fs.writeFileSync(p.join(outDir, j.out), html[j.out]);
  return { pages: jobs.length, words, weeks: WEEKS.length, recipes: recipes.size };
}

/* run directly: node plan/build.mjs [outDir] */
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = p.resolve(p.dirname(process.argv[1]), '..');
  const r = buildPlan(root, p.resolve(process.argv[2] || p.join(root, 'dist/site/plan')));
  console.log('plan: ' + r.pages + ' pages, ' + r.words + ' words, ' + r.weeks + ' weeks, ' + r.recipes + ' recipes');
}
