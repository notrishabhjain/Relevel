/* The Applied AI PM plan: two static pages built from the Markdown beside this file.
   No dependencies. Every link is relative, so the pages work at the site root and
   under a project sub-path such as /Relevel/plan/.

   Source             Output
   plan/weekly.md     dist/site/plan/index.html       the week-by-week working plan
   plan/curriculum.md dist/site/plan/curriculum.html  the full curriculum
*/
import fs from 'node:fs';
import p from 'node:path';

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
  let html = ordered ? '<ol>' : '<ul>';
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

export function md(src) {
  const lines = src.replace(/\r/g, '').split('\n');
  const out = [];
  const heads = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    let m;
    if ((m = l.match(/^(#{1,4})\s+(.*)$/))) {
      const n = m[1].length, text = m[2].trim();
      const id = slug(text);
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
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\s*\|.*\|\s*$|---+\s*$)/.test(lines[i]) && !listMatch(lines[i])) { para.push(lines[i].trim()); i++; }
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
  <a class="nav" href="../">Workbook &rarr;</a>
  <button id="theme" type="button" aria-label="Switch colour theme">&#9680;</button>
</header>
<main>
${main}
${toc || ''}
<p class="note">Planning document, not advice. Dates, prices and regulatory details were checked on 7 October 2026 and will change; confirm anything that matters at the source.</p>
</main>
<script>
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

export function buildPlan(root, outDir) {
  const src = p.join(root, 'plan');
  fs.mkdirSync(outDir, { recursive: true });
  const jobs = [
    { md: 'weekly.md', out: 'index.html', desc: 'Week-by-week working plan for becoming an Applied AI product manager: topics, resources, complexity, one thing to ship each week, and anti-drift rules.' },
    { md: 'curriculum.md', out: 'curriculum.html', desc: 'A 26-week learn-by-doing curriculum for an Applied AI product manager: evals, RAG, agents and MCP, Indic AI, governance, with four portfolio projects.' }
  ];
  let words = 0;
  for (const j of jobs) {
    const text = fs.readFileSync(p.join(src, j.md), 'utf8');
    const { html, heads } = md(text);
    const h1 = (text.match(/^#\s+(.*)$/m) || [, 'Applied AI PM plan'])[1];
    const top = heads.filter(h => h.n === 2);
    /* contents list goes right after the first paragraphs: put it after the h1 block */
    const toc = '';
    const tocHtml = top.length > 4
      ? `<details class="toc"><summary>On this page</summary><ol>${top.map(h => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join('')}</ol></details>`
      : '';
    const main = html.replace(/(<h1[^>]*>.*?<\/h1>)/, '$1' + tocHtml);
    fs.writeFileSync(p.join(outDir, j.out), page({ title: h1 + ' | AI From Zero', desc: j.desc, file: j.out === 'index.html' ? './' : j.out, main, toc }));
    words += text.split(/\s+/).length;
  }
  return { pages: jobs.length, words };
}

/* run directly: node plan/build.mjs [outDir] */
if (import.meta.url === `file://${process.argv[1]}`) {
  const root = p.resolve(p.dirname(process.argv[1]), '..');
  const r = buildPlan(root, p.resolve(process.argv[2] || p.join(root, 'dist/site/plan')));
  console.log('plan: ' + r.pages + ' pages, ' + r.words + ' words');
}
