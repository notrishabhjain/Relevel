#!/usr/bin/env node
/* Builds three things from src/:
     dist/index.html    full standalone document — what gets hosted, and what
                        you can open straight off disk
     dist/artifact.html body-only fragment for publishing as a Claude Artifact
                        (the host supplies doctype/html/head/body)
     dist/site/         the deploy directory: index.html + PWA manifest +
                        service worker + .nojekyll                            */
import fs from 'node:fs';
import p from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { loadBook, buildBook } from './book/build.mjs';
import { buildPlan } from './plan/build.mjs';
import * as ROUTE from './src/data/route.mjs';
import * as PLAN from './plan/data.mjs';

const R = p.dirname(fileURLToPath(import.meta.url));
const read = f => fs.readFileSync(p.join(R, f), 'utf8');
const out = (f, s) => { fs.mkdirSync(p.dirname(p.join(R, f)), { recursive: true });
  fs.writeFileSync(p.join(R, f), s); };
const outBin = out;

const css = read('src/styles.css');
const js = [
  'src/data/partA.js',
  'src/data/part1.js',
  'src/data/part2.js',
  'src/data/part3.js',
  'src/data/part4.js',
  'src/data/part5.js',
  'src/data/partB.js',
  'src/data/reference.js',
  'src/data/project.js',
  'src/data/skills.js',
  'src/data/items1.js',
  'src/data/items2.js',
  'src/data/items3.js',
  'src/data/items4.js',
  'src/data/items5.js',
  'src/data/items6.js',
  'src/data/items7.js',
  'src/data/work.js',
  'src/data/exercises5.js',
  /* The Hinglish reading layer. Keyed on the English line, so these load after
     the content they translate and are merged into one lookup. */
  'src/data/hing-glossary.js',
  'src/data/hing-setup.js',
  'src/data/hing-part1.js',
  'src/data/hing-part1b.js',
  'src/data/hing-labs.js',
  'src/data/hing-part2.js',
  'src/data/hing-part3.js',
  'src/data/hing-part4.js',
  'src/data/hing-interleaved.js',
  'src/data/hing-onramp.js',
  'src/data/hing-ui.js',
  'src/data/hing-prompting.js',
  'src/data/hing-arcs.js',
  'src/data/hing-bridges.js',
  'src/data/hing-part5a.js',
  'src/data/hing-part5b.js',
  'src/data/hing-part5c.js',
  'src/data/hing-part5d.js',
  'src/data/hing-part5e.js',
  'src/data/hing-part5f.js',
  'src/data/hing-part5g.js',
  'src/data/hing-part5h.js',
  'src/data/hing-part5i.js',
  'src/data/hing-part5j.js',
  'src/data/hing-part5k.js',
  'src/data/hing-part5n.js',
  'src/data/hing-part5o.js',
  'src/data/hing-appx42.js',
  'src/data/hing-ui42.js',
  'src/data/hing-units42a.js',
  'src/data/hing-units42b.js',
  'src/data/hing-units42c.js',
  'src/data/hing-units42d.js',
  'src/data/hing-units42e.js',
  'src/data/hing-units42f.js',
  'src/data/hing-units42g.js',
  'src/data/hing-v31.js',
  'src/data/hing-items.js',
  'src/data/hing-skills.js',
  /* The coding-book rewrite and the playbook tracks translate into files of
     their own, one per batch; later files win, so they load last. */
  ...fs.readdirSync(p.join(R, 'src/data')).filter(f => /^hing-rw-.*\.js$/.test(f)).sort()
    .map(f => 'src/data/' + f),
  'src/remote.js',
  'src/content.js',
  'src/studio.js',
  'src/labs.js',
  'src/engine.js',
  'src/sync.js',
  'src/views.js',
  'src/app.js'
];
/* The reading edition (book/) is built beside the app. The app only needs to
   know which book chapter retells which course chapter, so it can offer the
   story version from each chapter page. */
const BOOK_SRC = loadBook(p.join(R, 'book'));
const BOOK_MAP = { base: '/book/', hiBase: '/book/hi/', title: BOOK_SRC.book.title, edition: BOOK_SRC.book.edition, chapters: {}, list: [] };
/* The Hinglish edition's own titles and summaries, so the app can show the
   book in the reader's language without a second lookup. */
const BOOK_HI = fs.existsSync(p.join(R, 'book/hi/book.json')) ? loadBook(p.join(R, 'book/hi')) : null;
const hiOf = f => BOOK_HI ? [...BOOK_HI.chapters, BOOK_HI.preface].filter(Boolean).find(x => x.file === f) : null;
for (const pg of [BOOK_SRC.preface].filter(Boolean)) {
  const h = hiOf(pg.file);
  BOOK_MAP.list.push({ n: 0, file: pg.file, title: pg.title, summary: pg.summary || '', course: pg.course,
    titleHi: h ? h.title : '', summaryHi: h ? h.summary || '' : '' });
  for (const id of pg.course || []) BOOK_MAP.chapters[id] = { n: 0, file: pg.file, title: pg.title };
}
for (const c of BOOK_SRC.chapters) {
  const h = hiOf(c.file);
  BOOK_MAP.list.push({ n: c.n, file: c.file, title: c.title, summary: c.summary, course: c.course,
    titleHi: h ? h.title : '', summaryHi: h ? h.summary : '' });
  for (const id of c.course) BOOK_MAP.chapters[id] = { n: c.n, file: c.file, title: c.title };
}
const bookJs = 'window.BOOK=' + JSON.stringify(BOOK_MAP) + ';\n' + 'window.PLANX=' + JSON.stringify(planExtras()) + ';';
/* What the plan adds on top of the route, for the one-page view in the app:
   the how-to recipes' titles, the optional reading per week, the monthly
   reviews. Read from the plan's own sources, so the app and /plan/ agree. */
function planExtras() {
  const how = {};
  for (const m of read('plan/ship.md').matchAll(/^## (.*?)\s*\{#([\w-]+)\}\s*$/gm)) how[m[2]] = m[1];
  const further = {};
  for (const w of PLAN.WEEKS) further[w.n] = w.further.map(k => PLAN.RESOURCES[k]);
  return { how, further, gates: PLAN.GATES };
}
/* The route (src/data/route.mjs) is the one order that the playbook, the book,
   the plan and the reminder all follow. The browser gets the same data and the
   same functions, copied from the module's source, so "done" and "next" can
   never be decided two different ways. */
const routeJs = '(function(){\nconst START=' + JSON.stringify(ROUTE.START) + ', WEEKS=' + JSON.stringify(ROUTE.WEEKS) +
  ', MONTHS=' + JSON.stringify(ROUTE.MONTHS) + ';\nconst STEPS=WEEKS.flatMap(w=>w.steps.map(s=>Object.assign({week:w.n},s)));\n' +
  [ROUTE.stepDone, ROUTE.nextStep, ROUTE.stepHref, ROUTE.weekOf].map(f => f.toString()).join('\n') +
  '\nwindow.ROUTE={START,WEEKS,MONTHS,STEPS,stepDone,nextStep,stepHref,weekOf};\n})();';
const jsSource = js.map(f => f === 'src/app.js' ? bookJs + '\n' + routeJs + '\n' + read(f) : read(f)).join('\n');

const TITLE = 'AI From Zero';
const DESC = 'A skill tracker for AI product managers: measured competencies, ' +
             'a question bank asked inside the reading, spaced repetition and ' +
             'calibration scoring.';

const FONTS =
`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">`;

/* the mark: a filled square on a rule, the "measured" green */
const ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="10" fill="#14181C"/>
<rect x="14" y="40" width="36" height="3" rx="1.5" fill="#3D454A"/>
<rect x="14" y="30" width="9" height="9" fill="#1F6F5C"/>
<rect x="27" y="24" width="9" height="15" fill="#4FB89A"/>
<rect x="40" y="16" width="9" height="23" fill="#B33A2B"/>
</svg>`;

/* ---- the same mark as PNG ----

   iOS ignores an SVG in apple-touch-icon, and a home-screen icon it cannot
   read is drawn as a grey screenshot of the page. Android's install prompt
   wants a 192 and a 512 as well. The mark is nothing but axis-aligned
   rectangles, so it rasterises exactly here rather than needing a toolchain:
   supersample four times, average down, deflate, wrap in a PNG. */
const HEX = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const BARS = [               // x, y, w, h, colour — in the SVG's 64-unit space
  [14, 40, 36, 3, '#3D454A'],
  [14, 30, 9, 9, '#1F6F5C'],
  [27, 24, 9, 15, '#4FB89A'],
  [40, 16, 9, 23, '#B33A2B']
].map(([x, y, w, hh, c]) => [x, y, w, hh, HEX(c)]);
const GROUND = HEX('#14181C');

/* Inside the rounded square? Radius 10 in 64-unit space; 0 for maskable icons,
   which the launcher masks to its own shape and would clip twice. */
function inGround(x, y, r) {
  if (x < 0 || y < 0 || x > 64 || y > 64) return false;
  const cx = x < r ? r : x > 64 - r ? 64 - r : x;
  const cy = y < r ? r : y > 64 - r ? 64 - r : y;
  if (cx === x && cy === y) return true;
  return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
}

/* A design is a ground colour and rectangles drawn in order. A maskable icon
   fills the whole square and shrinks the drawing to the launcher's safe zone
   (the middle 80%), so a round or squircle mask never cuts into it. */
function iconPixels(size, maskable, design = { ground: GROUND, bars: BARS }) {
  const SS = 4, r = maskable ? 0 : 10, k = maskable ? 0.8 : 1;
  const px = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) for (let pxi = 0; pxi < size; pxi++) {
    let R2 = 0, G = 0, B = 0, A = 0;
    for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
      const ux = (pxi + (sx + 0.5) / SS) * 64 / size;
      const uy = (py + (sy + 0.5) / SS) * 64 / size;
      if (!inGround(ux, uy, r)) continue;
      const dx = 32 + (ux - 32) / k, dy = 32 + (uy - 32) / k;
      let col = design.ground;
      for (const [bx, by, bw, bh, c] of design.bars)
        if (dx >= bx && dx < bx + bw && dy >= by && dy < by + bh) col = c;
      R2 += col[0]; G += col[1]; B += col[2]; A += 255;
    }
    const n = SS * SS, o = (py * size + pxi) * 4;
    /* Averaging colour over covered samples only keeps the edge from being
       darkened by the transparent ones outside it. */
    const cov = A / 255;
    px[o] = cov ? Math.round(R2 / cov) : 0;
    px[o + 1] = cov ? Math.round(G / cov) : 0;
    px[o + 2] = cov ? Math.round(B / cov) : 0;
    px[o + 3] = Math.round(A / n);
  }
  return px;
}

const CRC = (() => { const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) { let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c; }
  return b => { let c = -1;
    for (let i = 0; i < b.length; i++) c = t[(c ^ b[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ -1) >>> 0; };
})();

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(body));
  return Buffer.concat([len, body, crc]);
}

/* The book and the plan install as apps of their own, so each gets its own
   mark: an open book on the book's terracotta, a calendar on the plan's green. */
const design = (ground, bars) => ({ ground: HEX(ground), bars: bars.map(([x, y, w, hh, c]) => [x, y, w, hh, HEX(c)]) });
const BOOK_ICON = design('#B4492A', [
  [12, 44, 40, 4, '#8C3720'],
  [12, 16, 19, 30, '#F7F2E8'], [33, 16, 19, 30, '#F7F2E8'],
  ...[22, 26, 30, 34, 38].flatMap(y => [[15, y, 13, 1.6, '#CDB99A'], [36, y, 13, 1.6, '#CDB99A']])
]);
const PLAN_ICON = design('#1F6F5C', [
  [14, 18, 36, 30, '#F6F7F4'], [14, 18, 36, 7, '#14181C'],
  [20, 14, 3, 8, '#14181C'], [41, 14, 3, 8, '#14181C'],
  ...[29, 35, 41].flatMap((y, ri) => [18, 28, 38].map((x, ci) => [x, y, 8, 4,
    ri * 3 + ci < 4 ? '#4FB89A' : ri * 3 + ci === 4 ? '#B33A2B' : '#C9CDC5']))
]);
function png(size, maskable, d) {
  const px = iconPixels(size, maskable, d);
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {            // filter byte 0 = none, per scanline
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6;                   // 8-bit, RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

const body =
`<title>${TITLE}</title>
${FONTS}
<style>
${css}
</style>
<script>
${jsSource}
</script>`;

/* ---- artifact fragment ---- */
out('dist/artifact.html', body);

/* ---- standalone document (hosting + local) ---- */
const head = (extra, appleIcon) =>
`<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="${DESC}">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#ECEEEA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#121517" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="${TITLE}">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(ICON)}">
<link rel="apple-touch-icon" sizes="180x180" href="${appleIcon}">
${extra}
<style>html{color-scheme:light dark}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${body}
</head><body></body></html>`;

/* The single-file build has nowhere to put a sibling PNG, so its Apple icon is
   inlined. Home-screen installs come from the deployed site, which links files. */
const APPLE_180 = png(180, false);
out('dist/index.html', head('', 'data:image/png;base64,' + APPLE_180.toString('base64')));

/* ---- deploy directory ----
   The playbook lives at /app/, not at the site root. An installed web app owns
   every address under its scope, so an app scoped to "/" also owned /book/ and
   /plan/, and a phone with it installed refused to install the book or the plan
   as apps of their own ("This app is already installed"). Three sibling scopes,
   /app/, /book/ and /plan/, make three separate apps. The root only forwards to
   /app/ (the host redirects it; this page is the fallback, and a redirect keeps
   the #/... part of the address). Paths here are relative so the GitHub Pages
   copy, which lives under /<repo>/, works too. */
const APP_DIR = 'app';
const SITE_HEAD =
`<link rel="manifest" href="../manifest.webmanifest">
<script>
if('serviceWorker' in navigator)addEventListener('load',function(){
  navigator.serviceWorker.register('../sw.js').catch(function(){});
});
</script>
<script src="/reminder.js" defer></script>`;
out(`dist/site/${APP_DIR}/index.html`, head(SITE_HEAD, '../icon-180.png'));
out('dist/site/index.html',
`<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${TITLE}</title>
<script>location.replace('${APP_DIR}/' + location.search + location.hash);</script>
<noscript><meta http-equiv="refresh" content="0; url=${APP_DIR}/"></noscript>
<style>body{font:16px/1.5 system-ui,sans-serif;margin:2rem 1rem;background:#ECEEEA;color:#1D2125}a{color:inherit}</style>
</head><body><p><a href="${APP_DIR}/">Open ${TITLE}</a></p></body></html>`);
out('dist/site/icon.svg', ICON);
out('dist/site/reminder.js', fs.readFileSync(p.join(R, 'src/reminder.js'), 'utf8'));
/* Shared progress for the book and the plan, with the route's own "done" rule. */
{
  const src = read('src/progress.js');
  if (!src.includes('/*STEP_DONE*/null')) throw new Error('src/progress.js lost its STEP_DONE marker');
  out('dist/site/progress.js', src.replace('/*STEP_DONE*/null', '(' + ROUTE.stepDone.toString() + ')'));
}
out('dist/site/.nojekyll', '');
outBin('dist/site/icon-180.png', APPLE_180);
outBin('dist/site/icon-192.png', png(192, false));
outBin('dist/site/icon-512.png', png(512, false));
outBin('dist/site/icon-maskable-512.png', png(512, true));
out('dist/site/manifest.webmanifest', JSON.stringify({
  name: 'AI From Zero — Skill Tracker',
  short_name: 'AI From Zero',
  description: DESC,
  /* "id" stays what it was when the app lived at "/", so a phone that
     installed it there sees the same app with a new, narrower scope. */
  id: '/',
  start_url: APP_DIR + '/',
  scope: APP_DIR + '/',
  display: 'standalone',
  orientation: 'any',
  background_color: '#ECEEEA',
  theme_color: '#ECEEEA',
  icons: [
    { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
  ]
}, null, 2));

/* Network-first for the page so a deploy is picked up on the next online load,
   cache as fallback so the tracker works on a train. Progress lives in
   localStorage and is never touched by the cache. */
const VERSION = 'aifz-' + crypto.createHash('sha1')
  .update(css + jsSource).digest('hex').slice(0, 12);
out('dist/site/sw.js',
`/* generated by build.js — cache name changes whenever the app changes */
const C = '${VERSION}';
const ASSETS = ['./${APP_DIR}/', './manifest.webmanifest', './icon.svg',
  './icon-180.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== C && k !== PAGES).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
/* The daily reminder. The push itself carries no text; the message is asked
   for here, so it is always the day's current one. */
self.addEventListener('push', e => {
  e.waitUntil(fetch('/api/nudge?today=1').then(r => r.json()).catch(() => null).then(m => {
    m = m && m.title ? m : { title: 'Your ten minutes', body: 'Open the plan and do the next small step.', url: '/plan/' };
    return self.registration.showNotification(m.title, { body: m.body, icon: '/icon-192.png', badge: '/icon-192.png',
      tag: 'daily-nudge', renotify: true, data: { url: m.url || '/plan/' } });
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/plan/';
  /* Reuse an open tab of this site if there is one, and take it to the day's
     step; otherwise open a new one. */
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(cs => {
    const c = cs[0];
    if (!c) return self.clients.openWindow(url);
    return c.navigate(url).then(w => (w || c).focus()).catch(() => self.clients.openWindow(url));
  }));
});
/* The book and the plan are kept in a cache of their own that a new version
   of the app does not wipe, so a chapter read once stays readable offline. */
const PAGES = 'aifz-pages-v1';
const pageCache = u => u.pathname.startsWith('/book/') || u.pathname.startsWith('/plan/') ||
  ['/progress.js', '/install.js', '/reminder.js'].includes(u.pathname);
const fallback = u => u.pathname.startsWith('/book/hi/') ? '/book/hi/' : u.pathname.startsWith('/book/') ? '/book/'
  : u.pathname.startsWith('/plan/') ? '/plan/' : './${APP_DIR}/';
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;          // fonts, GitHub API: leave alone
  if (u.pathname.startsWith('/api/')) return;        // never cache account calls
  if (u.pathname.startsWith('/audio/')) return;      // narration streams; long files, range requests
  const name = pageCache(u) ? PAGES : C;
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(name).then(c => c.put(r, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match(fallback(u))))
  );
});
/* "Keep the whole book on this phone": the book sends its page list. */
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type !== 'cache-pages' || !Array.isArray(d.urls)) return;
  const urls = d.urls.filter(x => typeof x === 'string' && (x.startsWith('/book/') || x.startsWith('/plan/') ||
    ['/progress.js', '/install.js', '/reminder.js'].includes(x))).slice(0, 400);
  e.waitUntil(caches.open(PAGES).then(c => Promise.all(urls.map(x => c.add(x).catch(() => null))))
    .then(done => { if (e.source) e.source.postMessage({ type: 'cached-pages', ok: done.filter(x => x !== null).length, of: urls.length }); }));
});
`);

/* A service worker that does not parse never installs, and then neither the
   12:00 reminder nor offline reading works, silently. Fail the build instead. */
for (const f of ['dist/site/sw.js', 'dist/site/progress.js', 'dist/site/reminder.js']) {
  try { new Function(read(f)); } catch (e) { throw new Error(f + ' does not parse: ' + e.message); }
}

/* ---- content defaults ----
   The curriculum lives in the database at runtime so it can be edited from the
   portal. These are the built-ins the database is seeded from on first boot,
   and what the app falls back to when there is no backend. */
const sandbox = { window: {} };
/* Derived from the bundle list, so a new data file is never in one and not the
   other — which silently produced a build whose defaults were missing a part. */
js.filter(f => f.startsWith('src/data/'))
  .forEach(f => { new Function('window', read(f))(sandbox.window); });

const W = sandbox.window;
const defaults = {
  chapters: (W.PARTS || []).reduce((a, p) => a.concat(W['PART' + p.n] || []), []),
  skills: W.SKILLS,
  items: [].concat(W.ITEMS1, W.ITEMS2, W.ITEMS3, W.ITEMS4 || [], W.ITEMS5 || [],
                  W.ITEMS6 || [], W.ITEMS7 || []),
  exercises: [].concat(W.EXERCISES || [], W.EXERCISES5 || []),
  processes: W.PROCESSES,
  hinglish: W.HING || {},
  reference: {
    DOMAINS: W.DOMAINS, PARTS: W.PARTS, RULES: W.RULES, SETUP: W.SETUP,
    GLOSSARY: W.GLOSSARY, VENDOR: W.VENDOR, LATER: W.LATER,
    PIPELINE: W.PIPELINE, REDMARKS: W.REDMARKS,
    LEVEL_NAMES: W.LEVEL_NAMES, LEVEL_BANDS: W.LEVEL_BANDS,
    /* The appendices were left out of this bundle when they were added, which
       meant the content-check's translation rules for them walked an empty
       object and passed silently, and the Studio could not see them at all. */
    APPENDIX: W.APPENDIX, PROJECT: W.PROJECT
  }
};
for (const [k, v] of Object.entries(defaults))
  if (v === undefined || (Array.isArray(v) && !v.length))
    throw new Error('content defaults: ' + k + ' is empty — did a data file move?');
out('content/defaults.json', JSON.stringify(defaults));

/* ---- the reading edition ---- */
const courseTitles = {};
for (const c of defaults.chapters) courseTitles[c.id] = c.title;
const HI_ROOT = p.join(R, 'book/hi');
const hasHi = fs.existsSync(p.join(HI_ROOT, 'book.json'));
const builtBook = buildBook(p.join(R, 'book'), p.join(R, 'dist/site/book'),
  { siteBase: '/book/', appUrl: '/' + APP_DIR + '/', hasOther: hasHi, courseTitle: id => courseTitles[id] });
const hingTitles = defaults.hinglish || {};
const builtHi = hasHi ? buildBook(HI_ROOT, p.join(R, 'dist/site/book/hi'),
  { siteBase: '/book/', appUrl: '/' + APP_DIR + '/', hasOther: true, noAssets: true, courseTitle: id => hingTitles[courseTitles[id]] || courseTitles[id] }) : null;

/* ---- the Applied AI PM plan (static pages at /plan/) ---- */
const builtPlan = buildPlan(R, p.join(R, 'dist/site/plan'));

const SITE_ORIGIN = 'https://relevel-steel.vercel.app';
/* ---- the book and the plan as installable apps ----
   Each has its own manifest, scope and icon, so a phone can keep them as
   three separate apps next to the playbook. They share the site's one
   service worker (scope "/"), which keeps pages for reading offline. */
for (const [dir, name, short, desc, bg, theme, d] of [
  ['book', 'AI From Zero: the book', 'AFZ Book', 'The reading edition: the course told as one story, in English and Hinglish.', '#F7F2E8', '#F7F2E8', BOOK_ICON],
  ['plan', 'Applied AI PM plan', 'AI PM Plan', 'The 26-week route, week by week, with shared progress.', '#ECEEEA', '#ECEEEA', PLAN_ICON]
]) {
  outBin(`dist/site/${dir}/icon-180.png`, png(180, false, d));
  outBin(`dist/site/${dir}/icon-192.png`, png(192, false, d));
  outBin(`dist/site/${dir}/icon-512.png`, png(512, false, d));
  outBin(`dist/site/${dir}/icon-maskable-512.png`, png(512, true, d));
  out(`dist/site/${dir}/manifest.webmanifest`, JSON.stringify({
    id: `/${dir}/`, name, short_name: short, description: desc,
    start_url: `/${dir}/`, scope: `/${dir}/`, display: 'standalone', orientation: 'any',
    /* naming itself lets a browser tab ask "is this app already installed?"
       (navigator.getInstalledRelatedApps), so the page can say so instead of
       offering to install it again */
    related_applications: [{ platform: 'webapp', url: `${SITE_ORIGIN}/${dir}/manifest.webmanifest` }],
    prefer_related_applications: false,
    background_color: bg, theme_color: theme,
    icons: [
      { src: `/${dir}/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: `/${dir}/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: `/${dir}/icon-maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  }, null, 2));
}
out('dist/site/install.js', read('src/install.js'));
try { new Function(read('dist/site/install.js')); } catch (e) { throw new Error('dist/site/install.js does not parse: ' + e.message); }

const kb = f => (fs.statSync(p.join(R, f)).size / 1024).toFixed(0) + ' KB';
console.log('dist/index.html     ' + kb('dist/index.html') + '   (standalone / hosting)');
console.log('dist/artifact.html  ' + kb('dist/artifact.html') + '   (Claude Artifact)');
console.log('dist/site/          deploy directory, sw version ' + VERSION);
console.log('dist/site/book/      ' + builtBook.chapters.length + ' chapters, ' + builtBook.words + ' words' + (builtHi ? '; Hinglish ' + builtHi.words + ' words' : '') + '; to narrate ' + Math.round((builtBook.sayChars + (builtHi ? builtHi.sayChars : 0)) / 1000) + 'k characters');
console.log('dist/site/plan/      ' + builtPlan.pages + ' pages, ' + builtPlan.words + ' words');
console.log('content/defaults.json ' + kb('content/defaults.json') + ' (' +
  defaults.chapters.length + ' chapters, ' + defaults.items.length + ' questions, ' +
  defaults.skills.length + ' skills)');
