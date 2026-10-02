/* Builds the reading edition: book/*.md  ->  dist/site/book/*.html

   Plain Node, no dependencies. The markdown it understands is deliberately
   small (see book/README.md). The same loader is used by tools/book-check.mjs,
   so what the checker reads is exactly what the builder prints. */
import fs from 'node:fs';
import p from 'node:path';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const words = s => (String(s).match(/[\p{L}\p{N}’'-]+/gu) || []).length;

/* ---------- reading the source ---------- */

function splitMeta(text, file) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: no header block`);
  const meta = { terms: [] };
  let key = null;
  for (const line of m[1].split('\n')) {
    if (!line.trim()) continue;
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && key === 'terms') {
      const [term, plain, alt] = item[1].split('|').map(s => s.trim());
      if (!term || !plain) throw new Error(`${file}: a term needs "term | plain meaning": ${item[1]}`);
      meta.terms.push({ term, plain, alt: alt ? alt.split(',').map(s => s.trim()).filter(Boolean) : [] });
      continue;
    }
    const kv = line.match(/^([a-z]+):\s*(.*)$/);
    if (!kv) throw new Error(`${file}: cannot read header line: ${line}`);
    key = kv[1];
    if (key === 'terms') continue;
    meta[key] = key === 'course' ? kv[2].split(/[\s,]+/).filter(Boolean) : kv[2];
  }
  return { meta, body: m[2].replace(/^\n+/, '') };
}

export function loadBook(root) {
  const book = JSON.parse(fs.readFileSync(p.join(root, 'book.json'), 'utf8'));
  const dir = p.join(root, 'chapters');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /^\d\d-.*\.md$/.test(f)).sort() : [];
  const chapters = files.map((f, i) => {
    const { meta, body } = splitMeta(fs.readFileSync(p.join(dir, f), 'utf8'), 'chapters/' + f);
    const num = Number(f.slice(0, 2));
    if (num !== i + 1) throw new Error(`chapters/${f}: expected number ${String(i + 1).padStart(2, '0')}, the files must run 01, 02, 03 with no gaps`);
    for (const k of ['title', 'summary']) if (!meta[k]) throw new Error(`chapters/${f}: missing ${k}`);
    return { n: num, file: f.replace(/\.md$/, '.html'), src: 'chapters/' + f, slug: f.slice(3).replace(/\.md$/, ''),
      title: meta.title, summary: meta.summary, course: meta.course || [], terms: meta.terms, body, words: words(body) };
  });
  const page = (name, extra) => {
    const f = p.join(root, name + '.md');
    if (!fs.existsSync(f)) return null;
    const { meta, body } = splitMeta(fs.readFileSync(f, 'utf8'), name + '.md');
    return { file: name + '.html', src: name + '.md', title: meta.title, summary: meta.summary || '', course: meta.course || [],
      terms: meta.terms, body, words: words(body), ...extra };
  };
  return { book, chapters, preface: page('preface'), afterword: page('afterword') };
}

/* ---------- markdown, the small version ---------- */

function inline(s) {
  let t = esc(s);
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/(^|[^*\w])\*([^*\n]+)\*(?!\w)/g, '$1<em>$2</em>');
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, a, u) => `<a href="${u}">${a}</a>`);
  return t;
}

function blocks(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const L = lines[i];
    if (!L.trim()) { i++; continue; }
    if (/^\* \* \*\s*$/.test(L)) { out.push({ t: 'break' }); i++; continue; }
    const h = L.match(/^(#{2,3})\s+(.*)$/);
    if (h) { out.push({ t: 'h' + h[1].length, text: h[2] }); i++; continue; }
    if (/^```/.test(L)) {
      const buf = []; i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++; out.push({ t: 'pre', text: buf.join('\n') }); continue;
    }
    if (/^>\s?/.test(L)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      out.push({ t: 'quote', text: buf.join(' ') }); continue;
    }
    if (/^\|/.test(L)) {
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = r => r.replace(/^\||\|\s*$/g, '').split('|').map(c => c.trim());
      const [head, , ...body] = rows;
      out.push({ t: 'table', head: cells(head), rows: body.map(cells) }); continue;
    }
    if (/^(- |\d+\. )/.test(L)) {
      const ordered = /^\d+\. /.test(L), items = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) items.push(lines[i++].replace(/^(- |\d+\. )/, ''));
      out.push({ t: ordered ? 'ol' : 'ul', items }); continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|```|>|\||\* \* \*\s*$|- |\d+\. )/.test(lines[i])) buf.push(lines[i++]);
    out.push({ t: 'p', text: buf.join(' ') });
  }
  return out;
}

/* Wrap the first plain-text match of a pattern, never inside a tag or a link. */
function wrapFirst(html, re, wrap) {
  const parts = html.split(/(<[^>]+>)/);
  let depth = 0;
  for (let k = 0; k < parts.length; k++) {
    const part = parts[k];
    if (part.startsWith('<')) {
      if (/^<a[\s>]/i.test(part)) depth++;
      else if (/^<\/a>/i.test(part)) depth = Math.max(0, depth - 1);
      continue;
    }
    if (depth) continue;
    const m = part.match(re);
    if (m) { parts[k] = part.slice(0, m.index) + wrap(m[0]) + part.slice(m.index + m[0].length); return parts.join(''); }
  }
  return null;
}

export function termRegex(t) {
  const forms = [t.term, ...t.alt].map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`(?<![\\p{L}\\p{N}-])(?:${forms.join('|')})(?:s|es)?(?![\\p{L}\\p{N}-])`, 'iu');
}

function render(chapter, termsHere) {
  const bl = blocks(chapter.body);
  const html = bl.map(b => {
    switch (b.t) {
      case 'break': return '<p class="scenebreak" aria-hidden="true">· · ·</p>';
      case 'h2': return `<h2>${inline(b.text)}</h2>`;
      case 'h3': return `<h3>${inline(b.text)}</h3>`;
      case 'pre': return `<pre class="transcript">${esc(b.text)}</pre>`;
      case 'quote': return `<blockquote><p>${inline(b.text)}</p></blockquote>`;
      case 'ul': return `<ul>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`;
      case 'ol': return `<ol>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ol>`;
      case 'table': return `<div class="tblwrap"><table><thead><tr>${b.head.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${
        b.rows.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      default: return `<p>${inline(b.text)}</p>`;
    }
  });
  /* the first time the chapter uses a word it teaches, link it to the glossary */
  for (const t of termsHere) {
    const re = termRegex(t);
    for (let k = 0; k < html.length; k++) {
      if (!html[k].startsWith('<p>') && !html[k].startsWith('<blockquote>') && !html[k].startsWith('<li>')) continue;
      const w = wrapFirst(html[k], re, m => `<a class="term" href="glossary.html#t-${slugify(t.term)}" title="${esc(t.plain)}">${m}</a>`);
      if (w) { html[k] = w; break; }
    }
  }
  return html.join('\n');
}

/* ---------- pages ---------- */

const nn = n => String(n).padStart(2, '0');

function shell({ book, title, desc, nav, main, bodyClass = '', current = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="color-scheme" content="light dark">
<link rel="icon" href="../icon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap">
<link rel="stylesheet" href="style.css">
<script>try{var t=localStorage.getItem('aifz-book-theme');if(t)document.documentElement.setAttribute('data-theme',t);var s=localStorage.getItem('aifz-book-size');if(s)document.documentElement.style.setProperty('--fs',s+'rem')}catch(e){}</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#text">Skip to the text</a>
<div class="progress" id="progress" aria-hidden="true"><i></i></div>
<header class="bar">
  <a class="brand" href="index.html"><span class="mark">AI From Zero</span><span class="ed">The reading edition</span></a>
  <span class="sp"></span>
  <button class="b" id="size-down" type="button" aria-label="Smaller text" title="Smaller text">A−</button>
  <button class="b" id="size-up" type="button" aria-label="Larger text" title="Larger text">A+</button>
  <button class="b" id="theme" type="button" aria-label="Change colours" title="Change colours">◐</button>
  <a class="b app" href="${book.appUrl}" title="Open the course app">The course app →</a>
</header>
<div class="layout">
${nav}
<main id="text">
${main}
</main>
</div>
<script src="reader.js"></script>
</body>
</html>
`;
}

function tocNav(B, current) {
  const li = (href, label, key, n) => `<li${current === key ? ' class="here"' : ''}><a href="${href}"${current === key ? ' aria-current="page"' : ''}>${n ? `<span class="n">${n}</span>` : ''}<span class="t">${esc(label)}</span></a></li>`;
  const items = [li('index.html', 'Contents', 'index', ''),
    B.preface ? li('preface.html', B.preface.title, 'preface', '') : '',
    ...B.chapters.map(c => li(c.file, c.title, c.file, String(c.n))),
    B.afterword ? li('afterword.html', B.afterword.title, 'afterword', '') : '',
    li('glossary.html', 'Words, in plain language', 'glossary', '')].join('\n');
  return `<nav class="toc" aria-label="Contents"><details id="toc"><summary>Contents</summary><ol>
${items}
</ol></details></nav>`;
}

export function buildBook(root, outDir, opts = {}) {
  const B = loadBook(root);
  const book = { ...B.book, appUrl: opts.appUrl || '../' };
  const full = { ...B, book };
  fs.mkdirSync(outDir, { recursive: true });
  fs.copyFileSync(p.join(root, 'style.css'), p.join(outDir, 'style.css'));
  fs.copyFileSync(p.join(root, 'reader.js'), p.join(outDir, 'reader.js'));
  const write = (f, s) => fs.writeFileSync(p.join(outDir, f), s);
  const seq = [];
  if (B.preface) seq.push({ file: B.preface.file, title: B.preface.title });
  B.chapters.forEach(c => seq.push({ file: c.file, title: c.title, n: c.n }));
  if (B.afterword) seq.push({ file: B.afterword.file, title: B.afterword.title });
  const around = f => { const i = seq.findIndex(x => x.file === f); return { prev: seq[i - 1], next: seq[i + 1] }; };
  const pager = f => {
    const { prev, next } = around(f);
    const side = (x, cls, dir) => x ? `<a class="${cls}" href="${x.file}"><span class="dir">${dir}</span><span class="nm">${x.n ? `Chapter ${x.n} · ` : ''}${esc(x.title)}</span></a>` : '<span></span>';
    return `<nav class="pager" aria-label="Previous and next">${side(prev, 'prev', '← Before')}${side(next, 'next', 'Next →')}</nav>`;
  };
  const courseLine = ids => ids && ids.length
    ? `<p class="inapp">In the course app: ${ids.map(id => `<a href="${book.appUrl}#/ch/${id}">${esc(opts.courseTitle ? (opts.courseTitle(id) || id) : id)}</a>`).join(' · ')}</p>` : '';
  const wordsBox = terms => terms.length ? `<aside class="wordsbox" aria-label="Words from this chapter"><h2>Words from this chapter</h2><dl>${
    terms.map(t => `<div><dt id="w-${slugify(t.term)}">${esc(t.term)}</dt><dd>${inline(t.plain)}</dd></div>`).join('')}</dl></aside>` : '';

  /* chapters */
  for (const c of B.chapters) {
    const mins = Math.max(1, Math.round(c.words / 220));
    const main = `<article class="chapter" data-file="${c.file}" data-title="${esc(c.title)}">
<header class="chead"><p class="eyebrow">Chapter ${c.n}</p><h1>${esc(c.title)}</h1><p class="dek">${inline(c.summary)}</p><p class="meta">${mins} minute read</p></header>
<div class="prose">
${render(c, c.terms)}
</div>
${wordsBox(c.terms)}
${courseLine(c.course)}
${pager(c.file)}
</article>`;
    write(c.file, shell({ book, title: `${c.title} · Chapter ${c.n} · ${book.title}`, desc: c.summary, nav: tocNav(full, c.file), main, bodyClass: 'is-chapter' }));
  }

  /* preface and afterword */
  for (const pg of [B.preface, B.afterword]) {
    if (!pg) continue;
    const main = `<article class="chapter plain" data-file="${pg.file}" data-title="${esc(pg.title)}">
<header class="chead"><h1>${esc(pg.title)}</h1>${pg.summary ? `<p class="dek">${inline(pg.summary)}</p>` : ''}</header>
<div class="prose">
${render(pg, pg.terms)}
</div>
${courseLine(pg.course)}
${pager(pg.file)}
</article>`;
    write(pg.file, shell({ book, title: `${pg.title} · ${book.title}`, desc: pg.summary || book.subtitle, nav: tocNav(full, pg.file === 'preface.html' ? 'preface' : 'afterword'), main, bodyClass: 'is-front' }));
  }

  /* glossary */
  const all = [];
  for (const c of B.chapters) for (const t of c.terms) all.push({ ...t, ch: c });
  all.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  const letters = [...new Set(all.map(t => t.term[0].toUpperCase()))];
  const gl = `<article class="chapter plain" data-file="glossary.html" data-title="Words, in plain language">
<header class="chead"><h1>Words, in plain language</h1><p class="dek">Every word the book teaches, in the order of the alphabet, with the chapter that first explains it. ${all.length} words.</p></header>
<p class="azrow">${letters.map(l => `<a href="#a-${l}">${l}</a>`).join('')}</p>
<div class="prose glossary">
${letters.map(l => `<h2 id="a-${l}">${l}</h2><dl>${all.filter(t => t.term[0].toUpperCase() === l).map(t =>
  `<div id="t-${slugify(t.term)}"><dt>${esc(t.term)}</dt><dd>${inline(t.plain)} <a class="where" href="${t.ch.file}">Chapter ${t.ch.n}</a></dd></div>`).join('')}</dl>`).join('\n')}
</div>
</article>`;
  write('glossary.html', shell({ book, title: `Words, in plain language · ${book.title}`, desc: 'Every word the book teaches, with its plain meaning.', nav: tocNav(full, 'glossary'), main: gl, bodyClass: 'is-front' }));

  /* contents */
  const totalWords = B.chapters.reduce((a, c) => a + c.words, 0) + (B.preface ? B.preface.words : 0) + (B.afterword ? B.afterword.words : 0);
  const idx = `<article class="cover" data-file="index.html" data-title="Contents">
<header class="coverhead">
<p class="eyebrow">${esc(book.edition)}</p>
<h1>${esc(book.title)}</h1>
<p class="subtitle">${esc(book.subtitle)}</p>
<p class="tag">${esc(book.tagline)}</p>
<p class="startrow"><a class="go" id="begin" href="${B.preface ? 'preface.html' : (B.chapters[0] ? B.chapters[0].file : '#')}">Begin reading</a><a class="go ghost" id="resume" href="#" hidden>Continue where you left off</a></p>
<p class="meta">${B.chapters.length} chapters · about ${Math.round(totalWords / 1000)}k words · ${all.length} words explained in the glossary</p>
</header>
<section aria-label="Contents">
<h2 class="toch">Contents</h2>
<ol class="contents">
${B.preface ? `<li class="front"><a href="preface.html"><span class="n"></span><span class="bd"><span class="ct">${esc(B.preface.title)}</span><span class="cs">${esc(B.preface.summary)}</span></span></a></li>` : ''}
${B.chapters.map(c => `<li><a href="${c.file}"><span class="n">${c.n}</span><span class="bd"><span class="ct">${esc(c.title)}</span><span class="cs">${esc(c.summary)}</span></span></a></li>`).join('\n')}
${B.afterword ? `<li class="front"><a href="afterword.html"><span class="n"></span><span class="bd"><span class="ct">${esc(B.afterword.title)}</span><span class="cs">${esc(B.afterword.summary)}</span></span></a></li>` : ''}
<li class="front"><a href="glossary.html"><span class="n"></span><span class="bd"><span class="ct">Words, in plain language</span><span class="cs">Every word the book teaches, with the chapter that explains it.</span></span></a></li>
</ol>
</section>
<p class="inapp">This is the reading edition. The exercises, tools and tracking live in <a href="${book.appUrl}">the course app</a>, and every chapter here says which app chapters it retells.</p>
</article>`;
  write('index.html', shell({ book, title: `${book.title} · ${book.edition}`, desc: book.subtitle, nav: '', main: idx, bodyClass: 'is-cover' }));

  return { chapters: B.chapters.map(c => ({ n: c.n, file: c.file, title: c.title, course: c.course })), words: totalWords, terms: all.length };
}
