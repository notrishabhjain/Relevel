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
  const meta = { terms: [], goals: [] };
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
    if (item && key === 'goals') { meta.goals.push(item[1].trim()); continue; }
    const kv = line.match(/^([a-z]+):\s*(.*)$/);
    if (!kv) throw new Error(`${file}: cannot read header line: ${line}`);
    key = kv[1];
    if (key === 'terms' || key === 'goals') continue;
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
      title: meta.title, summary: meta.summary, course: meta.course || [], terms: meta.terms, goals: meta.goals, body, words: words(body) };
  });
  const page = (name, extra) => {
    const f = p.join(root, name + '.md');
    if (!fs.existsSync(f)) return null;
    const { meta, body } = splitMeta(fs.readFileSync(f, 'utf8'), name + '.md');
    return { file: name + '.html', src: name + '.md', title: meta.title, summary: meta.summary || '', course: meta.course || [],
      terms: meta.terms, goals: meta.goals, body, words: words(body), ...extra };
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
    const bx = L.match(/^:::\s*([a-z]+)\s*(.*)$/);
    if (bx) {
      const buf = []; i++;
      while (i < lines.length && !/^:::\s*$/.test(lines[i])) buf.push(lines[i++]);
      i++; out.push({ t: 'box', kind: bx[1], title: bx[2].trim(), inner: blocks(buf.join('\n')) }); continue;
    }
    const cap = L.match(/^Table:\s+(.*)$/);
    if (cap) { out.push({ t: 'cap', text: cap[1] }); i++; continue; }
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
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}\s|```|>|\||:::|\* \* \*\s*$|- |\d+\. )/.test(lines[i])) buf.push(lines[i++]);
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

const SUMMARY_HEADS = /^(chapter summary|summary|saaransh|chapter ka saaransh)$/i;

/* Turns a chapter's blocks into a flat list of html pieces. Chapters number their
   sections 3.1, 3.2 and their tables Table 3.1; boxes and the closing summary
   are opened and closed by pieces of their own so term links can reach inside. */
function render(chapter, termsHere, glossHref, ui, num) {
  const bl = blocks(chapter.body);
  const out = [];
  let sec = 0, tbl = 0, cap = null;
  const one = b => {
    switch (b.t) {
      case 'break': out.push('<p class="scenebreak" aria-hidden="true"><span></span></p>'); break;
      case 'h2':
        if (SUMMARY_HEADS.test(b.text.trim())) { out.push(`<aside class="carry"><h2>${esc(ui.summary)}</h2>`); out.closeLater = true; break; }
        sec++;
        out.push(num ? `<h2 id="s-${num}-${sec}"><span class="sn">${num}.${sec}</span>${inline(b.text)}</h2>` : `<h2>${inline(b.text)}</h2>`); break;
      case 'h3': out.push(`<h3>${inline(b.text)}</h3>`); break;
      case 'pre': out.push(`<pre class="transcript">${esc(b.text)}</pre>`); break;
      case 'quote': out.push(`<blockquote><p>${inline(b.text)}</p></blockquote>`); break;
      case 'ul': out.push(`<ul>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`); break;
      case 'ol': out.push(`<ol>${b.items.map(x => `<li>${inline(x)}</li>`).join('')}</ol>`); break;
      case 'cap': cap = b.text; break;
      case 'table': {
        tbl++;
        const label = num ? `${ui.table} ${num}.${tbl}` : `${ui.table} ${tbl}`;
        out.push(`<figure class="tblfig"${cap ? '' : ' aria-label="' + esc(label) + '"'}>${cap ? `<figcaption><b>${label}.</b> ${inline(cap)}</figcaption>` : ''}<div class="tblwrap"><table><thead><tr>${b.head.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${
          b.rows.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></figure>`);
        cap = null; break;
      }
      case 'box': {
        const kind = ui.boxes[b.kind] ? b.kind : 'key';
        out.push(`<aside class="box box-${kind}"><p class="boxlabel">${esc(ui.boxes[kind])}</p>${b.title ? `<h4>${inline(b.title)}</h4>` : ''}`);
        b.inner.forEach(one);
        out.push('</aside>'); break;
      }
      default: out.push(`<p>${inline(b.text)}</p>`);
    }
  };
  bl.forEach(one);
  if (out.closeLater) out.push('</aside>');
  /* the first time the chapter uses a word it teaches, link it to the glossary */
  for (const t of termsHere) {
    const re = termRegex(t);
    for (let k = 0; k < out.length; k++) {
      if (!out[k].startsWith('<p>') && !out[k].startsWith('<blockquote>') && !out[k].startsWith('<li>') && !out[k].startsWith('<ul><li>') && !out[k].startsWith('<ol><li>')) continue;
      const w = wrapFirst(out[k], re, m => `<a class="term" href="${glossHref}#t-${slugify(t.term)}" title="${esc(t.plain)}">${m}</a>`);
      if (w) { out[k] = w; break; }
    }
  }
  return out.join('\n');
}

/* ---------- pages ---------- */

const UI = {
  en: {
    lang: 'en', edition: 'The reading edition', skip: 'Skip to the text', contents: 'Contents', smaller: 'Smaller text', larger: 'Larger text',
    colours: 'Change colours', app: 'Course app', appTitle: 'Open the course app', chapter: 'Chapter', minRead: 'min read',
    begin: 'Begin reading', resume: 'Continue', words: 'Key terms', wordsSub: 'Plain meanings, in the order you meet them.',
    inapp: 'The same ideas, with the work to do, in the course app', before: 'Before', next: 'Next', search: 'Find a chapter or a word',
    searchNone: 'Nothing matches that.', read: 'read', ofN: 'of', chaptersRead: 'chapters read', preface: 'Preface', afterword: 'Afterword',
    glossary: 'Words, in plain language', glossaryDek: n => `Every word the book teaches, in alphabetical order, with the chapter that first explains it. ${n} words.`,
    glossaryShort: 'Every word the book teaches, with the chapter that explains it.', chapterWord: 'Chapter', chapters: 'chapters', approx: 'about', k: 'k words',
    explained: 'words explained', summary: 'Chapter summary', table: 'Table', goals: 'In this chapter', keyTerms: 'Key terms',
    boxes: { key: 'Key idea', def: 'Definition', example: 'Worked example', case: 'Case', watch: 'Common mistake' }, switchTo: 'Hinglish', switchTitle: 'Read this in Hinglish', front: 'Front and back', theStory: 'The story',
    scrollTop: 'Back to top', fromThe: 'From the book', readEdition: 'This is the reading edition. The exercises, tools and tracking live in the course app, and every chapter here says which app chapters it retells.',
    openApp: 'Open the course app', otherEdition: 'Hinglish edition', carryHint: 'To take with you', meet: 'Words you will meet', pagerKinds: 'Previous and next chapter', filterOn: 'Showing chapters that match'
  },
  hi: {
    lang: 'hi', edition: 'Padhne wala edition (Hinglish)', skip: 'Seedhe text par jaaiye', contents: 'Vishay-soochi', smaller: 'Chhota text', larger: 'Bada text',
    colours: 'Rang badliye', app: 'Course app', appTitle: 'Course app kholiye', chapter: 'Chapter', minRead: 'min padhai',
    begin: 'Padhna shuru kariye', resume: 'Wahin se jaari rakhiye', words: 'Mukhya shabd', wordsSub: 'Saral matlab, usi kram mein jis kram mein aap inse milenge.',
    inapp: 'Yahi ideas, kaam ke saath, course app mein', before: 'Pichhla', next: 'Agla', search: 'Chapter ya shabd dhoondhiye',
    searchNone: 'Kuch nahi mila.', read: 'padha', ofN: 'mein se', chaptersRead: 'chapter padhe gaye', preface: 'Shuruaat se pehle', afterword: 'Aakhri baat',
    glossary: 'Shabd, saral bhasha mein', glossaryDek: n => `Kitaab mein sikhaaye gaye har shabd ka matlab, alphabet ke kram mein, us chapter ke saath jahan woh pehli baar samjhaya gaya. Kul ${n} shabd.`,
    glossaryShort: 'Kitaab ke har shabd ka saral matlab, chapter ke saath.', chapterWord: 'Chapter', chapters: 'chapter', approx: 'lagbhag', k: ' hazaar shabd',
    explained: 'shabd samjhaaye gaye', summary: 'Chapter ka saaransh', table: 'Table', goals: 'Is chapter mein', keyTerms: 'Mukhya shabd',
    boxes: { key: 'Mukhya vichaar', def: 'Paribhasha', example: 'Hal kiya hua udaharan', case: 'Case', watch: 'Aam galti' }, switchTo: 'English', switchTitle: 'Read this in English', front: 'Shuru aur ant', theStory: 'Kahani',
    scrollTop: 'Upar jaaiye', fromThe: 'Kitaab se', readEdition: 'Yeh padhne wala edition hai. Exercises, tools aur tracking course app mein hain, aur har chapter batata hai ki woh app ke kaun se chapters ko kahani mein sunata hai.',
    openApp: 'Course app kholiye', otherEdition: 'English edition', carryHint: 'Saath le jaane layak', meet: 'Jin shabdon se milenge', pagerKinds: 'Pichhla aur agla chapter', filterOn: 'Milte-julte chapter'
  }
};

const SECTION_HUES = ['#b4492a', '#2f6f73', '#6b5ca5', '#9a7b1f', '#3f7a4a', '#a2455e', '#2d5d8f'];

function cover(book, ui) {
  /* a chat message with the personal details covered, and a shield: the book in one picture */
  return `<svg class="art" viewBox="0 0 420 320" role="img" aria-label="${esc(book.artLabel || 'A chat message with the personal details hidden behind bars')}">
<defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--a1)"/><stop offset="1" stop-color="var(--a2)"/></linearGradient></defs>
<rect x="18" y="26" width="300" height="190" rx="22" fill="var(--card)" stroke="var(--rule)"/>
<circle cx="52" cy="62" r="14" fill="url(#g1)"/><rect x="76" y="54" width="92" height="9" rx="4.5" fill="var(--rule)"/><rect x="76" y="68" width="56" height="7" rx="3.5" fill="var(--rule)" opacity=".6"/>
<rect x="44" y="96" width="228" height="74" rx="16" fill="var(--wash)"/>
<rect x="60" y="112" width="84" height="9" rx="4.5" fill="var(--ink2)" opacity=".55"/><rect x="152" y="112" width="52" height="9" rx="4.5" fill="var(--ink2)" opacity=".55"/>
<rect x="60" y="136" width="64" height="12" rx="3" fill="var(--ink)"/><rect x="130" y="136" width="64" height="12" rx="3" fill="var(--ink)"/><rect x="200" y="136" width="48" height="12" rx="3" fill="var(--accent)"/>
<rect x="92" y="188" width="226" height="64" rx="16" fill="url(#g1)"/><rect x="112" y="206" width="150" height="8" rx="4" fill="#fff" opacity=".85"/><rect x="112" y="224" width="98" height="8" rx="4" fill="#fff" opacity=".6"/>
<path d="M352 120l52 18v44c0 34-22 58-52 70-30-12-52-36-52-70v-44z" fill="var(--card)" stroke="url(#g1)" stroke-width="5"/>
<path d="M330 184l16 16 30-34" fill="none" stroke="var(--accent)" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="378" cy="48" r="7" fill="var(--a2)" opacity=".5"/><circle cx="398" cy="78" r="4" fill="var(--a1)" opacity=".5"/><circle cx="40" cy="282" r="6" fill="var(--a1)" opacity=".4"/>
</svg>`;
}

export function buildBook(root, outDir, opts = {}) {
  const B = loadBook(root);
  const lang = B.book.language === 'hi' ? 'hi' : 'en';
  const ui = UI[lang];
  /* Everything links from the site root, so a page works whether it is opened
     as /book, /book/ or /book/index.html. */
  const siteBase = (opts.siteBase || '/book/').replace(/\/?$/, '/');
  const assetBase = siteBase;
  const pageBase = lang === 'hi' ? siteBase + 'hi/' : siteBase;
  const otherBase = lang === 'hi' ? siteBase : siteBase + 'hi/';
  const appUrl = opts.appUrl || '/';
  const hasOther = opts.hasOther !== false;
  const book = { ...B.book, appUrl };
  const full = { ...B, book };
  fs.mkdirSync(outDir, { recursive: true });
  if (!opts.noAssets) {
    const asset = p.join(opts.assetsFrom || root);
    fs.copyFileSync(p.join(asset, 'style.css'), p.join(outDir, 'style.css'));
    fs.copyFileSync(p.join(asset, 'reader.js'), p.join(outDir, 'reader.js'));
  }
  const write = (f, s) => fs.writeFileSync(p.join(outDir, f), s);
  const href = f => pageBase + f;
  const sections = (B.book.sections || []).map((s, i) => ({ ...s, hue: s.hue || SECTION_HUES[i % SECTION_HUES.length], i }));
  const sectionOf = n => sections.find(s => n >= s.from && n <= s.to) || null;
  const mins = c => Math.max(1, Math.round(c.words / 220));

  const seq = [];
  if (B.preface) seq.push({ file: B.preface.file, title: B.preface.title, kind: ui.preface });
  B.chapters.forEach(c => seq.push({ file: c.file, title: c.title, n: c.n }));
  if (B.afterword) seq.push({ file: B.afterword.file, title: B.afterword.title, kind: ui.afterword });
  const around = f => { const i = seq.findIndex(x => x.file === f); return { prev: seq[i - 1], next: seq[i + 1] }; };

  /* ----- the frame ----- */
  const shell = ({ title, desc, nav, main, bodyClass = '', file, hue }) => `<!doctype html>
<html lang="${lang === 'hi' ? 'hi-Latn' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#f7f2e8" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#14110e" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
${hasOther ? `<link rel="alternate" hreflang="${lang === 'hi' ? 'en' : 'hi-Latn'}" href="${otherBase}${file === 'index.html' ? '' : file}">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap">
<link rel="stylesheet" href="${assetBase}style.css">
<script>try{var t=localStorage.getItem('aifz-book-theme');if(t)document.documentElement.setAttribute('data-theme',t);var s=localStorage.getItem('aifz-book-size');if(s)document.documentElement.style.setProperty('--fs',s+'rem')}catch(e){}</script>
</head>
<body class="${bodyClass}" data-lang="${lang}" data-base="${pageBase}" style="${hue ? `--hue:${hue}` : ''}">
<a class="skip" href="#text">${ui.skip}</a>
<div class="progress" id="progress" aria-hidden="true"><i></i></div>
<header class="bar">
  <button class="b menu" id="menu" type="button" aria-controls="toc" aria-expanded="false" aria-label="${ui.contents}"><span aria-hidden="true">☰</span><span class="lbl">${ui.contents}</span></button>
  <a class="brand" href="${href('')}"><span class="mark">${esc(book.title)}</span><span class="ed">${ui.edition}</span></a>
  <span class="sp"></span>
  ${hasOther ? `<a class="b lang" href="${otherBase}${file === 'index.html' ? '' : file}" hreflang="${lang === 'hi' ? 'en' : 'hi-Latn'}" title="${ui.switchTitle}" data-switch>${ui.switchTo}</a>` : ''}
  <button class="b" id="size-down" type="button" aria-label="${ui.smaller}" title="${ui.smaller}">A−</button>
  <button class="b" id="size-up" type="button" aria-label="${ui.larger}" title="${ui.larger}">A+</button>
  <button class="b" id="theme" type="button" aria-label="${ui.colours}" title="${ui.colours}">◐</button>
  <a class="b app" href="${appUrl}" title="${ui.appTitle}">${ui.app} →</a>
</header>
<div class="layout">
${nav}
<div class="scrim" id="scrim" hidden></div>
<main id="text">
${main}
</main>
</div>
<script src="${assetBase}reader.js" defer></script>
</body>
</html>
`;

  const tocNav = current => {
    const item = (url, label, key, n, extra = '') => `<li${current === key ? ' class="here"' : ''} data-t="${esc(label.toLowerCase())}"><a href="${url}"${current === key ? ' aria-current="page"' : ''} data-file="${key}">${n ? `<span class="n">${n}</span>` : '<span class="n dot"></span>'}<span class="t">${esc(label)}</span></a></li>${extra}`;
    const parts = [`<li class="top${current === 'index.html' ? ' here' : ''}"><a href="${href('')}"><span class="n dot"></span><span class="t">${ui.contents}</span></a></li>`];
    if (B.preface) parts.push(item(href(B.preface.file), B.preface.title, B.preface.file, ''));
    let last = null;
    for (const c of B.chapters) {
      const s = sectionOf(c.n);
      if (s && s !== last) { parts.push(`<li class="sec" style="--hue:${s.hue}"><span>${esc(s.title)}</span></li>`); last = s; }
      parts.push(item(href(c.file), c.title, c.file, String(c.n)).replace('<li', `<li style="--hue:${s ? s.hue : 'var(--accent)'}"`));
    }
    if (B.afterword) parts.push(item(href(B.afterword.file), B.afterword.title, B.afterword.file, ''));
    parts.push(item(href('glossary.html'), ui.glossary, 'glossary.html', ''));
    return `<nav class="toc" id="toc" aria-label="${ui.contents}">
<div class="tochead"><label class="find"><span class="sr">${ui.search}</span><input id="q" type="search" placeholder="${ui.search}" autocomplete="off"></label></div>
<ol>
${parts.join('\n')}
</ol>
<p class="nomatch" hidden>${ui.searchNone}</p>
</nav>`;
  };

  const pager = f => {
    const { prev, next } = around(f);
    const side = (x, cls, dir) => x ? `<a class="${cls}" href="${href(x.file)}" rel="${cls}"><span class="dir">${dir}</span><span class="nm">${x.n ? `<b>${x.n}</b>` : ''}${esc(x.title)}</span></a>` : '<span></span>';
    return `<nav class="pager" aria-label="${ui.pagerKinds}">${side(prev, 'prev', '← ' + ui.before)}${side(next, 'next', ui.next + ' →')}</nav>`;
  };
  const courseLine = ids => ids && ids.length
    ? `<aside class="inapp"><span class="lead">${ui.inapp}</span><span class="chips">${ids.map(id => `<a href="${appUrl}#/ch/${id}">${esc(opts.courseTitle ? (opts.courseTitle(id) || id) : id)}<span aria-hidden="true"> →</span></a>`).join('')}</span></aside>` : '';
  const wordsBox = terms => terms.length ? `<aside class="wordsbox" aria-label="${ui.words}"><h2>${ui.words}</h2><p class="sub">${ui.wordsSub}</p><dl>${
    terms.map(t => `<div><dt id="w-${slugify(t.term)}">${esc(t.term)}</dt><dd>${inline(t.plain)}</dd></div>`).join('')}</dl></aside>` : '';

  const goalsBox = g => g && g.length ? `<aside class="goals"><h2>${ui.goals}</h2><ul>${g.map(x => `<li>${inline(x)}</li>`).join('')}</ul></aside>` : '';

  /* ----- chapters ----- */
  const gloss = href('glossary.html');
  for (const c of B.chapters) {
    const s = sectionOf(c.n);
    const main = `<article class="chapter" data-file="${c.file}" data-title="${esc(c.title)}" data-n="${c.n}">
<header class="chead">
<p class="eyebrow"><span class="num">${c.n}</span><span>${ui.chapter} ${c.n}${s ? ` <i>·</i> ${esc(s.title)}` : ''}</span></p>
<h1>${esc(c.title)}</h1><p class="dek">${inline(c.summary)}</p>
<p class="meta"><span>${mins(c)} ${ui.minRead}</span>${c.terms.length ? `<span>${c.terms.length} ${lang === 'hi' ? 'naye shabd' : 'new words'}</span>` : ''}</p>
</header>
${goalsBox(c.goals)}
<div class="prose">
${render(c, c.terms, gloss, ui, c.n)}
</div>
${wordsBox(c.terms)}
${courseLine(c.course)}
${pager(c.file)}
</article>`;
    write(c.file, shell({ title: `${c.title} · ${ui.chapter} ${c.n} · ${book.title}`, desc: c.summary, nav: tocNav(c.file), main, bodyClass: 'is-chapter', file: c.file, hue: s && s.hue }));
  }

  /* ----- preface and afterword ----- */
  for (const pg of [B.preface, B.afterword]) {
    if (!pg) continue;
    const kind = pg === B.preface ? ui.preface : ui.afterword;
    const main = `<article class="chapter plain" data-file="${pg.file}" data-title="${esc(pg.title)}">
<header class="chead"><p class="eyebrow"><span>${kind}</span></p><h1>${esc(pg.title)}</h1>${pg.summary ? `<p class="dek">${inline(pg.summary)}</p>` : ''}</header>
<div class="prose">
${render(pg, pg.terms, gloss, ui, null)}
</div>
${courseLine(pg.course)}
${pager(pg.file)}
</article>`;
    write(pg.file, shell({ title: `${pg.title} · ${book.title}`, desc: pg.summary || book.subtitle, nav: tocNav(pg.file), main, bodyClass: 'is-front', file: pg.file }));
  }

  /* ----- glossary ----- */
  const all = [];
  for (const c of B.chapters) for (const t of c.terms) all.push({ ...t, ch: c });
  all.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
  const letters = [...new Set(all.map(t => t.term[0].toUpperCase()))];
  const gl = `<article class="chapter plain glossary-page" data-file="glossary.html" data-title="${esc(ui.glossary)}">
<header class="chead"><p class="eyebrow"><span>${ui.front}</span></p><h1>${esc(ui.glossary)}</h1><p class="dek">${ui.glossaryDek(all.length)}</p></header>
<p class="azrow">${letters.map(l => `<a href="#a-${l}">${l}</a>`).join('')}</p>
<div class="prose glossary">
${letters.map(l => `<h2 id="a-${l}">${l}</h2><dl>${all.filter(t => t.term[0].toUpperCase() === l).map(t =>
  `<div id="t-${slugify(t.term)}"><dt>${esc(t.term)}</dt><dd>${inline(t.plain)} <a class="where" href="${href(t.ch.file)}">${ui.chapter} ${t.ch.n}</a></dd></div>`).join('')}</dl>`).join('\n')}
</div>
</article>`;
  write('glossary.html', shell({ title: `${ui.glossary} · ${book.title}`, desc: ui.glossaryShort, nav: tocNav('glossary.html'), main: gl, bodyClass: 'is-front', file: 'glossary.html' }));

  /* ----- the cover and contents ----- */
  const totalWords = B.chapters.reduce((a, c) => a + c.words, 0) + (B.preface ? B.preface.words : 0) + (B.afterword ? B.afterword.words : 0);
  const card = c => {
    const s = sectionOf(c.n);
    return `<li style="--hue:${s ? s.hue : 'var(--accent)'}" data-t="${esc((c.title + ' ' + c.summary).toLowerCase())}" data-file="${c.file}"><a href="${href(c.file)}" data-file="${c.file}"><span class="n">${c.n}</span><span class="bd"><span class="ct">${esc(c.title)}</span><span class="cs">${esc(c.summary)}</span><span class="cm">${mins(c)} ${ui.minRead}<i class="tick" aria-label="${ui.read}">✓ ${ui.read}</i></span></span></a></li>`;
  };
  const front = (pg, kind) => pg ? `<li class="front" data-t="${esc((pg.title + ' ' + kind).toLowerCase())}"><a href="${href(pg.file)}" data-file="${pg.file}"><span class="n dot"></span><span class="bd"><span class="ct">${esc(pg.title)}</span><span class="cs">${esc(pg.summary)}</span></span></a></li>` : '';
  const groups = sections.length
    ? sections.map(s => `<section class="group" style="--hue:${s.hue}" data-sec><header><span class="rn">${s.i + 1}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.blurb || '')}</p></div></header><ol class="cards">${B.chapters.filter(c => c.n >= s.from && c.n <= s.to).map(card).join('\n')}</ol></section>`).join('\n')
    : `<ol class="cards">${B.chapters.map(card).join('\n')}</ol>`;
  const idx = `<article class="cover" data-file="index.html" data-title="${esc(ui.contents)}">
<header class="hero">
<div class="herotext">
<p class="eyebrow">${esc(book.edition)}</p>
<h1>${esc(book.title)}</h1>
<p class="subtitle">${esc(book.subtitle)}</p>
<p class="tag">${esc(book.tagline)}</p>
<p class="startrow"><a class="go" id="begin" href="${href(B.preface ? B.preface.file : B.chapters[0].file)}">${ui.begin}</a><a class="go ghost" id="resume" href="#" hidden>${ui.resume}</a></p>
<p class="meta"><span>${B.chapters.length} ${ui.chapters}</span><span>${ui.approx} ${Math.round(totalWords / 1000)}${ui.k}</span><span>${all.length} ${ui.explained}</span></p>
<div class="prog" id="prog" hidden><span class="bar"><i></i></span><span class="txt"></span></div>
</div>
<div class="heroart">${cover(book, ui)}</div>
</header>
<section aria-label="${ui.contents}" class="contents-wrap">
<div class="tochd"><h2 class="toch">${ui.contents}</h2>
<label class="find big"><span class="sr">${ui.search}</span><input id="q2" type="search" placeholder="${ui.search}" autocomplete="off"></label></div>
<ol class="frontlist">${front(B.preface, ui.preface)}</ol>
${groups}
<ol class="frontlist">${front(B.afterword, ui.afterword)}<li class="front" data-t="${esc(ui.glossary.toLowerCase())}"><a href="${href('glossary.html')}" data-file="glossary.html"><span class="n dot"></span><span class="bd"><span class="ct">${esc(ui.glossary)}</span><span class="cs">${esc(ui.glossaryShort)}</span></span></a></li></ol>
<p class="nomatch" id="nomatch" hidden>${ui.searchNone}</p>
</section>
<aside class="inapp end"><span class="lead">${ui.readEdition}</span><span class="chips"><a href="${appUrl}">${ui.openApp} →</a>${hasOther ? `<a href="${otherBase}">${ui.otherEdition} →</a>` : ''}</span></aside>
</article>`;
  write('index.html', shell({ title: `${book.title} · ${book.edition}`, desc: book.subtitle, nav: '', main: idx, bodyClass: 'is-cover', file: 'index.html' }));

  return { chapters: B.chapters.map(c => ({ n: c.n, file: c.file, title: c.title, course: c.course })), words: totalWords, terms: all.length };
}
