/* The Applied AI PM plan: ONE page, /plan/, with three tabs, built from the Markdown
   beside this file. No dependencies. Every link is relative, so it works at the site
   root and under a project sub-path such as /Relevel/plan/.

   Source             Tab
   plan/weekly.md     Plan: the tracker, week cards, gates, rules
   plan/ship.md       Build: how to build and ship each artifact
   plan/curriculum.md Curriculum: the reasoning, resources, projects, interviews
   plan/tracker.js    the page's script (tabs, tracker, sync); inlined
   plan/data.mjs      weeks, links, gates, rules: the single source for all three

   /plan/curriculum.html and /plan/ship.html remain as redirects to the tabs.

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

const CSS = `
:root{--paper:#ECEEEA;--raised:#F6F7F4;--sunk:#E2E5E0;--ink:#14181C;--ink-2:#3D454A;--muted:#697169;--rule:#C9CDC5;--rule-soft:#D9DCD5;--accent:#1F6F5C;--accent-wash:#1F6F5C14;--good:#2c7a4b;--good-bg:#e1f0e6;--warn:#8a5a00;--warn-bg:#fbf0d4;--crit:#b3342b;--crit-bg:#f9e0dd;
--serif:'Newsreader',Georgia,'Times New Roman',serif;--sans:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;--mono:'IBM Plex Mono',ui-monospace,Menlo,monospace}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--paper:#121517;--raised:#191D20;--sunk:#0D1012;--ink:#E4E7E2;--ink-2:#B4BBB6;--muted:#8A928C;--rule:#2E3438;--rule-soft:#232A2D;--accent:#4FB89A;--accent-wash:#4FB89A1A;--good:#6fcf97;--good-bg:#1a2e22;--warn:#e8b84a;--warn-bg:#33290f;--crit:#ff8a80;--crit-bg:#3a1c19;color-scheme:dark}}
:root[data-theme="dark"]{--paper:#121517;--raised:#191D20;--sunk:#0D1012;--ink:#E4E7E2;--ink-2:#B4BBB6;--muted:#8A928C;--rule:#2E3438;--rule-soft:#232A2D;--accent:#4FB89A;--accent-wash:#4FB89A1A;--good:#6fcf97;--good-bg:#1a2e22;--warn:#e8b84a;--warn-bg:#33290f;--crit:#ff8a80;--crit-bg:#3a1c19;color-scheme:dark}
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

html.js [data-tab]{display:none}
html.js [data-tab].on{display:block}
[data-tab]>*{max-width:68ch}
[data-tab]>.tw,[data-tab]>.toc,[data-tab]>.panel,[data-tab]>details.month,[data-tab]>#gates-box{max-width:none}
.flash{animation:flash 1.6s ease-out}
@keyframes flash{0%{background:var(--accent-wash);box-shadow:0 0 0 .4rem var(--accent-wash)}100%{background:transparent;box-shadow:none}}
.panel{background:var(--raised);border:1px solid var(--rule);border-radius:4px;padding:1rem;margin:1rem 0;display:flex;flex-direction:column;gap:.8rem;font:.9rem/1.5 var(--sans)}
.row{display:flex;flex-wrap:wrap;gap:.6rem 1.4rem;align-items:baseline}
.stat{display:flex;flex-direction:column;min-width:0}
.stat .v{font:600 1.4rem/1.2 var(--serif);font-variant-numeric:tabular-nums}
.stat .v small{font-size:.9rem;color:var(--muted);font-weight:400}
.stat .k,.stat .jump{font:500 .7rem/1.3 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.stat .jump{color:var(--accent)}
.pill{font:600 .75rem/1 var(--sans);padding:.25rem .65rem;border-radius:999px;border:1px solid var(--rule);background:var(--sunk)}
.lvl-0{background:var(--good-bg);color:var(--good);border-color:transparent}
.lvl-1{background:var(--warn-bg);color:var(--warn);border-color:transparent}
.lvl-2,.lvl-3{background:var(--crit-bg);color:var(--crit);border-color:transparent}
.msg{padding:.6rem .8rem;border-radius:3px;margin:0}
.strip{display:grid;grid-template-columns:repeat(auto-fill,minmax(34px,1fr));gap:6px}
.cell{height:34px;border-radius:4px;border:1px solid var(--rule);background:var(--sunk);color:var(--muted);font:500 .72rem/1 var(--mono);display:flex;align-items:center;justify-content:center;text-decoration:none;font-variant-numeric:tabular-nums}
.cell.shipped{background:var(--good);color:var(--paper);border-color:transparent}
.cell.partial{background:var(--warn-bg);color:var(--warn);border-color:transparent}
.cell.missed{background:var(--crit-bg);color:var(--crit);border-color:transparent}
.cell.current{outline:2px solid var(--accent);outline-offset:1px;color:var(--ink)}
.legend{display:flex;flex-wrap:wrap;gap:.3rem 1rem;font-size:.75rem;color:var(--muted)}
.legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;vertical-align:-1px;border:1px solid var(--rule)}
.legend .sh{background:var(--good);border-color:transparent}.legend .pa{background:var(--warn-bg)}.legend .mi{background:var(--crit-bg)}.legend .cu{outline:2px solid var(--accent)}
details.month,details.box{background:var(--raised);border:1px solid var(--rule);border-radius:4px;margin:.8rem 0}
details>summary{cursor:pointer;padding:.8rem 1rem;display:flex;flex-wrap:wrap;gap:.2rem 1rem;align-items:baseline;list-style:none;font:600 .95rem/1.3 var(--sans)}
details>summary::-webkit-details-marker{display:none}
details>summary::before{content:"+";font-family:var(--mono);color:var(--muted);width:.8rem}
details[open]>summary::before{content:"\\2212"}
details>summary .count{font-weight:400;color:var(--muted);font-size:.82rem}
details.month>.inner,details.box>.inner{padding:0 1rem 1rem;display:flex;flex-direction:column;gap:.8rem}
.month-intro{margin:2.2rem 0 .2rem;font:.95rem/1.5 var(--serif);color:var(--ink-2)}
article.wk{border:1px solid var(--rule);border-radius:4px;padding:.9rem 1rem;display:flex;flex-direction:column;gap:.5rem;background:var(--paper);min-width:0;font:.9rem/1.5 var(--sans)}
article.wk.current{border-color:var(--accent)}
article.wk.shipped{border-left:4px solid var(--good)}
article.wk.missed{border-left:4px solid var(--crit)}
article.wk header{display:flex;flex-wrap:wrap;gap:.3rem .7rem;align-items:center}
article.wk h4{font:600 1rem/1.35 var(--serif);margin:.1rem 0;color:var(--ink)}
article.wk p{margin:0}
article.wk p b{font:500 .68rem/1.3 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-right:.5rem}
.wn{font:500 .9rem var(--mono)}.dates{font:.75rem var(--mono);color:var(--muted)}
.cx{font:500 .68rem/1 var(--mono);padding:.2rem .5rem;border-radius:999px;background:var(--sunk)}
.cx-high{background:var(--crit-bg);color:var(--crit)}.cx-medium{background:var(--warn-bg);color:var(--warn)}.cx-low{background:var(--good-bg);color:var(--good)}
.tag{display:inline-block;font:600 .65rem/1 var(--sans);letter-spacing:.05em;text-transform:uppercase;border:1px solid var(--rule);border-radius:2px;padding:.15rem .3rem;color:var(--muted)}
.lk a{display:inline-block;margin-right:.9rem}
.ctl{display:flex;flex-direction:column;gap:.6rem;border-top:1px dashed var(--rule);padding-top:.7rem;margin-top:.2rem}
.checks{display:flex;flex-wrap:wrap;gap:.4rem 1.2rem}
.chk{display:inline-flex;gap:.5rem;align-items:center;cursor:pointer}
.chk input{width:1.15rem;height:1.15rem;accent-color:var(--accent);margin:0}
.fields{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.6rem}
.fields label{display:flex;flex-direction:column;gap:.2rem;font:500 .68rem/1.3 var(--sans);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);min-width:0}
input[type=text],input[type=url]{font:.88rem var(--sans);letter-spacing:0;text-transform:none;color:var(--ink);background:var(--raised);border:1px solid var(--rule);border-radius:3px;padding:.45rem .6rem;width:100%;min-width:0}
button,.filebtn{font:inherit;font-size:.85rem;background:var(--accent);color:var(--paper);border:0;border-radius:3px;padding:.45rem .9rem;cursor:pointer}
button.quiet,.filebtn{background:transparent;color:var(--ink-2);border:1px solid var(--rule);padding:.2rem .6rem;font-size:.78rem}
.shiplink{word-break:break-all;font-size:.8rem}
.gate{display:flex;flex-direction:column;gap:.5rem;padding:.8rem;border:1px solid var(--rule);border-radius:4px;background:var(--paper);font:.9rem/1.5 var(--sans)}
.gate p{margin:0}
.plist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.4rem}
.plist li{display:flex;flex-wrap:wrap;gap:.3rem .8rem;justify-content:space-between;align-items:baseline;padding:.45rem .6rem;border:1px solid var(--rule);border-radius:3px;background:var(--paper)}
.addrow{display:flex;gap:.5rem}
.empty,.small{color:var(--muted);font-size:.82rem;margin:0}
.warn{color:var(--crit)}
#sync{display:flex;flex-direction:column;gap:.5rem}
.rules-list{max-width:68ch}
.tw table{min-width:640px}
.code{max-width:none}
@media (max-width:560px){.addrow{flex-direction:column}}
`;

const TRACKER_JS = fs.readFileSync(new URL('./tracker.js', import.meta.url), 'utf8');

const TABS = [
  { id: 'plan', label: 'Plan & tracker', md: 'weekly.md' },
  { id: 'build', label: 'How to build', md: 'ship.md' },
  { id: 'curriculum', label: 'Curriculum', md: 'curriculum.md' }
];

function page({ title, desc, panels }) {
  const nav = TABS.map(t => `<a class="nav" data-go="${t.id}" href="#${t.id}">${t.label}</a>`).join('\n  ');
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
<script>document.documentElement.classList.add('js');try{var t=localStorage.getItem('aipm-plan-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
</head>
<body>
<header class="bar">
  <a class="brand" href="#plan">Applied AI PM plan</a>
  ${nav}
  <a class="nav" href="../">Workbook &rarr;</a>
  <button id="theme" type="button" aria-label="Switch colour theme">&#9680;</button>
</header>
<main>
${panels}
<p class="note">Planning document, not advice. Dates, prices and regulatory details were checked on 7 October 2026 and will change; confirm anything that matters at the source.</p>
</main>
<script>
document.getElementById('theme').addEventListener('click',function(){
  var r=document.documentElement,cur=r.getAttribute('data-theme');
  var dark=cur?cur==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  var next=dark?'light':'dark';r.setAttribute('data-theme',next);
  try{localStorage.setItem('aipm-plan-theme',next)}catch(e){}
});
document.querySelectorAll('.code').forEach(function(b){
  var btn=document.createElement('button');btn.type='button';btn.className='copy';btn.textContent='Copy';
  btn.addEventListener('click',function(){
    var t=b.querySelector('code').textContent;
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){btn.textContent='Copied'},function(){
      var r=document.createRange();r.selectNodeContents(b.querySelector('code'));var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected'});
    setTimeout(function(){btn.textContent='Copy'},1500);
  });
  b.appendChild(btn);
});
</script>
<script>
${TRACKER_JS}
</script>
</body>
</html>
`;
}

const stub = target => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=./#${target}">
<title>Moved</title></head><body>
<p>This page moved. <a href="./#${target}">Open the plan</a>.</p>
<script>location.replace('./'+(location.hash||'#${target}'))</script>
</body></html>
`;

/* ---------- generated blocks ---------- */
const lvl = cx => 'cx-' + cx.split(' ')[0].toLowerCase();

function weekCard(w, recipes) {
  const learn = w.learn.length
    ? '<span class="lk">' + w.learn.map(k => `<a href="${RESOURCES[k][1]}" target="_blank" rel="noopener noreferrer">${esc(RESOURCES[k][0])}</a>`).join('') + '</span>'
    : '<span class="muted">Your own ship log. No new material.</span>';
  const how = w.how.map(id => `<a href="#${id}">${esc(recipes.get(id) || id)}</a>`).join('<br>');
  const chk = (f, label, cls = '') => `<label class="chk ${cls}"><input type="checkbox" data-f="${f}"><span>${label}</span></label>`;
  return `<article class="wk" id="w${w.n}" data-week="${w.n}">` +
    `<header><span class="wn">W${w.n}</span><span class="dates">${esc(w.dates)}</span><span class="cx ${lvl(w.cx)}">${esc(w.cx)}</span>${w.light ? '<span class="tag">light week, about 6 hours</span>' : ''}</header>` +
    `<h4>${inline(w.topic)}</h4>` +
    `<p><b>Learn from</b>${learn}</p><p><b>Ship</b>${inline(w.ship)}</p><p><b>How to build it</b>${how}</p>` +
    `<div class="ctl"><div class="checks">${chk('learn', 'Learned')}${chk('build', 'Built')}${chk('ship', 'Shipped', 'shipbox')}${chk('floor', 'Floor week')}</div>` +
    `<div class="fields"><label>Link to what you shipped<input type="url" data-f="link" placeholder="https://github.com/..." autocomplete="off"></label>` +
    `<label>Note<input type="text" data-f="note" placeholder="What blocked you, what you learned" autocomplete="off"></label></div><div class="shiplink"></div></div></article>`;
}

function makeExpand(recipes, seen) {
  return (name, arg) => {
    if (name === 'status') return { html: '<section id="status" class="panel" aria-label="Progress and drift status"><p class="small">Loading your progress&hellip;</p></section>' };
    if (name === 'sync') return { html: '<section id="sync" class="panel" aria-label="Saving"></section>' };
    if (name === 'month') {
      const m = MONTHS.find(x => x.n === +arg);
      const id = slug(m.name);
      const ws = WEEKS.filter(w => w.n >= m.from && w.n <= m.to);
      ws.forEach(w => seen.push(w.n));
      return {
        html: `<h2 id="${id}">${esc(m.name)}</h2><p class="month-intro"><strong>${esc(m.dates)}.</strong> Goal: ${inline(m.goal)}</p>` +
          `<details class="month" data-from="${m.from}" data-to="${m.to}"><summary>Weeks ${m.from}–${m.to}<span class="count"></span></summary><div class="inner">` +
          ws.map(w => weekCard(w, recipes)).join('') + '</div></details>',
        heads: [{ n: 2, id, text: m.name }]
      };
    }
    if (name === 'rules') return { html: '<ol class="rules-list">' + RULES.map(r => `<li>${inline(r)}</li>`).join('') + '</ol>' };
    if (name === 'gates') {
      return { html: `<p><strong id="gate-count"></strong></p>` + GATES.map(g =>
        `<div class="gate" data-gate="${g.id}"><div class="row"><span class="wn">${g.id}</span><span class="dates">${esc(g.date)}</span></div>` +
        `<p>${inline(g.pass)}</p><p class="small">If behind, cut: ${inline(g.cut)}</p>` +
        `<label class="chk"><input type="checkbox" data-f="passed"><span>Gate passed (every criterion has a link)</span></label>` +
        `<div class="fields"><label>What you cut or decided<input type="text" data-f="note" autocomplete="off"></label></div></div>`).join('') };
    }
    if (name === 'parking') {
      return { html: '<section class="panel"><div class="addrow"><input type="text" id="park-input" placeholder="New idea, course or side project" aria-label="New parking lot item" autocomplete="off"><button type="button" id="park-add">Park it</button></div>' +
        '<p class="small" id="parking-count"></p><div id="parking-list"></div></section>' };
    }
    if (name === 'weeklinks') {
      const [a, b] = arg.split('-').map(Number);
      const ws = WEEKS.filter(w => w.n >= a && w.n <= b);
      return { html: '<div class="tw"><table><thead><tr><th>Week</th><th>Dates</th><th>Focus (opens the week on the Plan tab)</th><th>Build</th></tr></thead><tbody>' +
        ws.map(w => `<tr><td class="k"><a href="#w${w.n}">W${w.n}</a></td><td>${esc(w.dates)}${w.light ? ' <span class="tag">light</span>' : ''}</td><td>${inline(w.topic)}</td>` +
          `<td>${w.how.map(id => `<a href="#${id}">${esc(id)}</a>`).join(', ')}</td></tr>`).join('') + '</tbody></table></div>' };
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
    if (!w.how.length) errs.push(`W${w.n}: no how-to-build recipe`);
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
  const s = [...pages.weeksSeen].sort((a, b) => a - b).join();
  if (s !== ids.join()) errs.push(`weekly.md: month blocks must cover W1-W26 exactly once (got ${s})`);
  const cw = [...pages.text['curriculum.md'].matchAll(/<!--\s*weeklinks\s+(\d+)-(\d+)\s*-->/g)].flatMap(m => Array.from({ length: m[2] - m[1] + 1 }, (_, i) => +m[1] + i));
  if (cw.sort((a, b) => a - b).join() !== ids.join()) errs.push(`curriculum.md: weeklinks blocks must cover W1-W26 exactly once (got ${cw.join()})`);
  for (const m of MONTHS) if (!pages.text['curriculum.md'].includes(m.dates)) errs.push(`curriculum.md never mentions "${m.dates}" (${m.name})`);
  /* one page: ids unique, every link lands */
  const all = pages.html;
  const idList = [...all.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const seenId = new Set();
  for (const i of idList) { if (seenId.has(i)) errs.push(`duplicate id "${i}" on the page`); seenId.add(i); }
  for (const m of all.matchAll(/<a [^>]*href="([^"]*)"/g)) {
    const h = m[1];
    if (/^(https?:|mailto:|\.\.\/)/.test(h)) continue;
    if (!h.startsWith('#')) { errs.push(`link "${h}" should be an in-page #anchor`); continue; }
    const frag = h.slice(1);
    if (!['plan', 'build', 'curriculum'].includes(frag) && !seenId.has(frag)) errs.push(`link "${h}" has no matching anchor`);
  }
  if (errs.length) throw new Error('plan out of sync:\n  - ' + errs.join('\n  - '));
}

export function buildPlan(root, outDir) {
  const src = p.join(root, 'plan');
  fs.mkdirSync(outDir, { recursive: true });
  const text = {};
  for (const t of TABS) text[t.md] = fs.readFileSync(p.join(src, t.md), 'utf8');

  /* recipes first: id -> title, and the weeks each recipe says it serves */
  const recipes = new Map(), recipeWeeks = new Map();
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

  const seen = [];
  let words = 0, panels = '';
  for (const t of TABS) {
    const { html: body, heads } = md(text[t.md], makeExpand(recipes, t.id === 'plan' ? seen : []));
    const top = heads.filter(h => h.n === 2);
    const toc = top.length > 4
      ? `<details class="toc"><summary>On this tab</summary><ol>${top.map(h => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></details>` : '';
    panels += `<section data-tab="${t.id}" id="tab-${t.id}">\n` + body.replace(/(<h1[^>]*>.*?<\/h1>)/, '$1' + toc) + '\n</section>\n';
    words += text[t.md].split(/\s+/).length;
  }
  check({ html: panels, text, weeksSeen: new Set(seen.length === new Set(seen).size ? seen : [...seen, -1]) }, recipeWeeks);
  fs.writeFileSync(p.join(outDir, 'index.html'), page({
    title: 'Applied AI PM plan | AI From Zero',
    desc: 'One page for the 26-week plan to become an Applied AI product manager: a tracker with a row per week, linked resources, step-by-step build recipes, and the full curriculum.',
    panels
  }));
  fs.writeFileSync(p.join(outDir, 'curriculum.html'), stub('curriculum'));
  fs.writeFileSync(p.join(outDir, 'ship.html'), stub('build'));
  return { pages: 1, words, weeks: WEEKS.length, recipes: recipes.size };
}

/* run directly: node plan/build.mjs [outDir] */
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = p.resolve(p.dirname(process.argv[1]), '..');
  const r = buildPlan(root, p.resolve(process.argv[2] || p.join(root, 'dist/site/plan')));
  console.log('plan: one page, ' + r.words + ' words, ' + r.weeks + ' weeks, ' + r.recipes + ' recipes');
}
