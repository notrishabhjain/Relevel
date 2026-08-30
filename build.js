#!/usr/bin/env node
/* Concatenates src/* into a single self-contained page.
   - dist/index.html  : Artifact-ready (no doctype/html/head/body — the host wraps it)
   - dist/preview.html: full document, for opening locally in a browser */
const fs = require('fs');
const p = require('path');

const R = __dirname;
const read = f => fs.readFileSync(p.join(R, f), 'utf8');

const css = read('src/styles.css');
const js = [
  'src/data/part1.js',
  'src/data/part2.js',
  'src/data/part3.js',
  'src/data/reference.js',
  'src/data/skills.js',
  'src/data/items1.js',
  'src/data/items2.js',
  'src/data/items3.js',
  'src/data/work.js',
  'src/labs.js',
  'src/engine.js',
  'src/views.js',
  'src/app.js'
].map(read).join('\n');

const FONTS =
`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">`;

const TITLE = 'AI From Zero';

const body =
`<title>${TITLE}</title>
${FONTS}
<style>
${css}
</style>
<script>
${js}
</script>`;

fs.mkdirSync(p.join(R, 'dist'), { recursive: true });
fs.writeFileSync(p.join(R, 'dist/index.html'), body);

fs.writeFileSync(p.join(R, 'dist/preview.html'),
`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>:root{color-scheme:light dark}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style>
${body}
</head><body></body></html>`);

const kb = n => (fs.statSync(p.join(R, n)).size / 1024).toFixed(0) + ' KB';
console.log('built dist/index.html   ' + kb('dist/index.html'));
console.log('built dist/preview.html ' + kb('dist/preview.html'));
