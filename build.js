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

const R = p.dirname(fileURLToPath(import.meta.url));
const read = f => fs.readFileSync(p.join(R, f), 'utf8');
const out = (f, s) => { fs.mkdirSync(p.dirname(p.join(R, f)), { recursive: true });
  fs.writeFileSync(p.join(R, f), s); };
const outBin = out;

const css = read('src/styles.css');
const js = [
  'src/data/part1.js',
  'src/data/part2.js',
  'src/data/part3.js',
  'src/data/part4.js',
  'src/data/reference.js',
  'src/data/skills.js',
  'src/data/items1.js',
  'src/data/items2.js',
  'src/data/items3.js',
  'src/data/items4.js',
  'src/data/work.js',
  /* The Hinglish reading layer. Keyed on the English line, so these load after
     the content they translate and are merged into one lookup. */
  'src/data/hing-glossary.js',
  'src/data/hing-setup.js',
  'src/data/hing-part1.js',
  'src/data/hing-labs.js',
  'src/remote.js',
  'src/content.js',
  'src/studio.js',
  'src/labs.js',
  'src/engine.js',
  'src/sync.js',
  'src/views.js',
  'src/app.js'
];
const jsSource = js.map(read).join('\n');

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

function iconPixels(size, maskable) {
  const SS = 4, r = maskable ? 0 : 10;
  const px = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) for (let pxi = 0; pxi < size; pxi++) {
    let R2 = 0, G = 0, B = 0, A = 0;
    for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
      const ux = (pxi + (sx + 0.5) / SS) * 64 / size;
      const uy = (py + (sy + 0.5) / SS) * 64 / size;
      if (!inGround(ux, uy, r)) continue;
      let col = GROUND;
      for (const [bx, by, bw, bh, c] of BARS)
        if (ux >= bx && ux < bx + bw && uy >= by && uy < by + bh) col = c;
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

function png(size, maskable) {
  const px = iconPixels(size, maskable);
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

/* ---- deploy directory ---- */
const SITE_HEAD =
`<link rel="manifest" href="manifest.webmanifest">
<script>
if('serviceWorker' in navigator)addEventListener('load',function(){
  navigator.serviceWorker.register('sw.js').catch(function(){});
});
</script>`;
out('dist/site/index.html', head(SITE_HEAD, 'icon-180.png'));
out('dist/site/icon.svg', ICON);
out('dist/site/.nojekyll', '');
outBin('dist/site/icon-180.png', APPLE_180);
outBin('dist/site/icon-192.png', png(192, false));
outBin('dist/site/icon-512.png', png(512, false));
outBin('dist/site/icon-maskable-512.png', png(512, true));
out('dist/site/manifest.webmanifest', JSON.stringify({
  name: 'AI From Zero — Skill Tracker',
  short_name: 'AI From Zero',
  description: DESC,
  start_url: './',
  scope: './',
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
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg',
  './icon-180.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;          // fonts, GitHub API: leave alone
  if (u.pathname.startsWith('/api/')) return;        // never cache account calls
  e.respondWith(
    fetch(r).then(res => {
      const copy = res.clone();
      caches.open(C).then(c => c.put(r, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(r).then(m => m || caches.match('./index.html')))
  );
});
`);

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
  items: [].concat(W.ITEMS1, W.ITEMS2, W.ITEMS3, W.ITEMS4 || []),
  exercises: W.EXERCISES,
  processes: W.PROCESSES,
  hinglish: W.HING || {},
  reference: {
    DOMAINS: W.DOMAINS, PARTS: W.PARTS, RULES: W.RULES, SETUP: W.SETUP,
    GLOSSARY: W.GLOSSARY, VENDOR: W.VENDOR, LATER: W.LATER,
    PIPELINE: W.PIPELINE, REDMARKS: W.REDMARKS,
    LEVEL_NAMES: W.LEVEL_NAMES, LEVEL_BANDS: W.LEVEL_BANDS
  }
};
for (const [k, v] of Object.entries(defaults))
  if (v === undefined || (Array.isArray(v) && !v.length))
    throw new Error('content defaults: ' + k + ' is empty — did a data file move?');
out('content/defaults.json', JSON.stringify(defaults));

const kb = f => (fs.statSync(p.join(R, f)).size / 1024).toFixed(0) + ' KB';
console.log('dist/index.html     ' + kb('dist/index.html') + '   (standalone / hosting)');
console.log('dist/artifact.html  ' + kb('dist/artifact.html') + '   (Claude Artifact)');
console.log('dist/site/          deploy directory, sw version ' + VERSION);
console.log('content/defaults.json ' + kb('content/defaults.json') + ' (' +
  defaults.chapters.length + ' chapters, ' + defaults.items.length + ' questions, ' +
  defaults.skills.length + ' skills)');
