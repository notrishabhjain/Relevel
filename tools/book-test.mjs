#!/usr/bin/env node
/* Tests the built reading edition (dist/site/book) and its links to and from
   the course app. Static checks first, then a real browser against the dev
   server. Run after `node build.js`; it needs BASE (set by tools/test.mjs) for
   the browser half and skips that half without it. */
import fs from 'node:fs';
import p from 'node:path';
import { chromium } from 'playwright';
import { loadBook } from '../book/build.mjs';

const ROOT = p.resolve(new URL('..', import.meta.url).pathname);
const OUT = p.join(ROOT, 'dist/site/book');
let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? (pass++, console.log('  ok  ', m)) : (fail++, console.log('  FAIL', m, extra ?? '')); };
const defaults = JSON.parse(fs.readFileSync(p.join(ROOT, 'content/defaults.json'), 'utf8'));
const courseIds = new Set(defaults.chapters.map(c => c.id));
const B = loadBook(p.join(ROOT, 'book'));
const read = f => fs.readFileSync(p.join(OUT, f), 'utf8');

console.log('\n— the book is built, page by page —');
const pages = ['index.html', 'preface.html', ...B.chapters.map(c => c.file), 'afterword.html', 'glossary.html'];
ok(pages.every(f => fs.existsSync(p.join(OUT, f))), 'every page in the contents exists', pages.filter(f => !fs.existsSync(p.join(OUT, f))).join(' '));
ok(fs.existsSync(p.join(OUT, 'style.css')) && fs.existsSync(p.join(OUT, 'reader.js')), 'with its stylesheet and script beside it');
ok(B.chapters.length >= 40, 'and reads as a book, with more than forty chapters', String(B.chapters.length));

console.log('\n— every link on every page lands somewhere —');
const broken = [];
for (const f of pages) {
  const html = read(f);
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|#)/.test(u)) continue;
    if (u.startsWith('/') && !u.startsWith('/book/')) {   // out to the course app, or its icon
      const hash = u.split('#')[1] || '';
      const m2 = hash.match(/^\/ch\/(.+)$/);
      if (m2 && !courseIds.has(m2[1])) broken.push(f + ' → course chapter ' + m2[1]);
      continue;
    }
    if (!u.startsWith('/book/') && !/^[^/]/.test(u)) continue;
    const [fileRaw, anchor] = u.split('#');
    const file = fileRaw.replace(/^\/book\//, '');
    if (file && file !== '' && !fs.existsSync(p.join(OUT, file))) { broken.push(f + ' → ' + u); continue; }
    if (anchor) {
      const target = file ? read(file) : html;
      if (!target.includes(`id="${anchor}"`)) broken.push(f + ' → #' + anchor);
    }
  }
}
ok(!broken.length, 'no broken links, in the book or out to the course app', broken.slice(0, 5).join(' | '));

console.log('\n— the order is the order —');
const seq = ['preface.html', ...B.chapters.map(c => c.file), 'afterword.html'];
let pagerOk = true, why = '';
for (let i = 0; i < seq.length; i++) {
  const html = read(seq[i]);
  const prev = html.match(/class="prev"[^>]*href="([^"]+)"|href="([^"]+)"[^>]*class="prev"/);
  const next = html.match(/class="next"[^>]*href="([^"]+)"|href="([^"]+)"[^>]*class="next"/);
  const strip = s => s && s.replace(/^\/book\//, '');
  const pv = strip(prev && (prev[1] || prev[2])), nx = strip(next && (next[1] || next[2]));
  if (i > 0 && pv !== seq[i - 1]) { pagerOk = false; why = seq[i] + ' prev=' + pv; break; }
  if (i < seq.length - 1 && nx !== seq[i + 1]) { pagerOk = false; why = seq[i] + ' next=' + nx; break; }
}
ok(pagerOk, 'each page points back to the one before and on to the one after', why);
ok(B.chapters.every((c, i) => c.n === i + 1), 'and the chapters are numbered without a gap');

console.log('\n— the glossary has every word —');
const gloss = read('glossary.html');
const termList = B.chapters.flatMap(c => c.terms.map(t => t.term));
ok(termList.every(t => gloss.includes('>' + t.replace(/&/g, '&amp;') + '<')), 'every word the chapters teach is in the glossary',
  termList.filter(t => !gloss.includes('>' + t.replace(/&/g, '&amp;') + '<')).slice(0, 4).join(', '));
const chapterWithTerms = B.chapters.find(c => c.terms.length);
ok(read(chapterWithTerms.file).includes('glossary.html#t-'), 'and a chapter links its words to it');

console.log('\n— both ways between the book and the app —');
const covered = new Set(B.chapters.flatMap(c => c.course));
ok([...courseIds].every(id => id === 'ch0' ? B.preface.course.includes('ch0') : covered.has(id)), 'every course chapter is retold in exactly the book chapters that say so');
ok(/href="\/"/.test(read('index.html')), 'the contents page links back to the app');
const appJs = fs.readFileSync(p.join(ROOT, 'dist/site/index.html'), 'utf8');
const bm = appJs.match(/window\.BOOK=(\{.*?\});/);
const BOOK = bm && JSON.parse(bm[1]);
ok(BOOK && Object.keys(BOOK.chapters).length === [...covered].length, 'the app knows which book chapter retells which of its chapters');
ok(BOOK && Object.values(BOOK.chapters).every(e => fs.existsSync(p.join(OUT, e.file))), 'and every one of those pages exists');

console.log('\n— the Hinglish edition stands beside it —');
const HI_DIR = p.join(OUT, 'hi');
const HB = loadBook(p.join(ROOT, 'book/hi'));
const hiPages = ['index.html', 'preface.html', ...HB.chapters.map(c => c.file), 'afterword.html', 'glossary.html'];
ok(hiPages.every(f => fs.existsSync(p.join(HI_DIR, f))), 'every page exists in Hinglish too', hiPages.filter(f => !fs.existsSync(p.join(HI_DIR, f))).join(' '));
ok(HB.chapters.length === B.chapters.length, 'with the same number of chapters, in the same order');
const hiRead = f => fs.readFileSync(p.join(HI_DIR, f), 'utf8');
const hiBroken = [];
for (const f of hiPages) {
  const html = hiRead(f);
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|#)/.test(u)) continue;
    if (!u.startsWith('/')) { hiBroken.push(f + ' relative ' + u); continue; }
    if (!u.startsWith('/book/')) continue;
    const [fileRaw, anchor] = u.split('#');
    const rel = fileRaw.replace(/^\/book\//, '');
    if (!rel) continue;
    const target = p.join(OUT, rel);
    if (!fs.existsSync(target)) { hiBroken.push(f + ' → ' + u); continue; }
    if (anchor && target.endsWith('.html') && !fs.readFileSync(target, 'utf8').includes(`id="${anchor}"`)) hiBroken.push(f + ' → #' + anchor);
  }
}
ok(!hiBroken.length, 'and no link on any Hinglish page is broken', hiBroken.slice(0, 5).join(' | '));
ok(read('09-the-first-conversation.html').includes('href="/book/hi/09-the-first-conversation.html"'), 'each English page offers its Hinglish twin');
ok(hiRead('09-the-first-conversation.html').includes('href="/book/09-the-first-conversation.html"'), 'and each Hinglish page offers its English twin');
ok(BOOK && BOOK.hiBase === '/book/hi/', 'and the app knows where the Hinglish edition lives');

const base = process.env.BASE;
if (base) {
  console.log('\n— in a browser —');
  const HERE = '/opt/pw-browsers/chromium';
  const browser = await chromium.launch(fs.existsSync(HERE) ? { executablePath: HERE } : {});
  const ctx = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 1280, height: 900 } });
  await ctx.route('**/*', r => r.request().url().startsWith(base) ? r.continue() : r.abort());
  const page = await ctx.newPage();
  page.on('pageerror', e => console.log('    [page error]', e.message));

  /* The first hosted version broke when opened as /book with no slash: the
     stylesheet, the script and every link were looked for at the site root. */
  const failedLoads = [];
  page.on('response', r => { if (r.url().startsWith(base) && r.status() >= 400) failedLoads.push(r.status() + ' ' + r.url()); });
  await page.goto(base + '/book');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  ok(bg !== 'rgb(255, 255, 255)' && bg !== 'rgba(0, 0, 0, 0)', 'opened as /book with no slash, the page still has its design', bg);
  ok(await page.evaluate(() => !!document.querySelector('.progress') && typeof document.querySelector('.go') === 'object'), 'and its cover');
  await page.click('#begin');
  await page.waitForLoadState();
  ok(new URL(page.url()).pathname === '/book/preface.html', 'and its links go to the right place', page.url());
  ok(!failedLoads.length, 'and nothing it asks for is missing', failedLoads.join(' '));

  await page.goto(base + '/book/');
  ok(/AI From Zero/.test(await page.title()), 'the folder opens on the contents page', await page.title());
  const rows = await page.locator('.cards li, .frontlist li').count();
  ok(rows === B.chapters.length + 3, 'which lists the preface, every chapter, the afterword and the glossary', String(rows));

  await page.goto(base + '/book/' + B.chapters[0].file);
  ok(await page.locator('h1').first().innerText() === B.chapters[0].title, 'a chapter opens with its title');
  ok(await page.locator('.wordsbox').count() === 1, 'and lists the words it teaches');
  await page.click('.pager .next');
  await page.waitForLoadState();
  ok(page.url().endsWith(B.chapters[1].file), 'Next goes to the following chapter', page.url());
  await page.click('.pager .prev');
  await page.waitForLoadState();
  ok(page.url().endsWith(B.chapters[0].file), 'and Before comes back');

  await page.goto(base + '/book/' + B.chapters[8].file);          // chapter 9 retells ch1
  await page.click('.inapp a');
  await page.waitForFunction(() => window.CONTENT && document.querySelector('#main'));
  ok(/#\/ch\//.test(page.url()), 'the link to the course app opens a chapter there', page.url());
  const trailLink = await page.evaluate(() => { const a = document.querySelector('.chtrail a.story'); return a && a.getAttribute('href'); });
  ok(trailLink && trailLink.startsWith('/book/'), 'and that chapter offers the story version', String(trailLink));
  await page.click('.chtrail a.story');
  await page.waitForLoadState();
  ok(/\/book\/\d\d-/.test(page.url()), 'which opens the book chapter', page.url());

  await page.goto(base + '/#/library');
  await page.waitForFunction(() => window.CONTENT && document.querySelector('#main'));
  ok(await page.locator('.cmaplinks a[href="/book/"]').count() === 1, 'the course map has a way into the book');

  await page.goto(base + '/book/glossary.html');
  ok(await page.locator('dl dt').count() >= termList.length, 'the glossary page lists every word');

  /* Hinglish: opened as /book/hi with no slash, switched both ways */
  await page.goto(base + '/book/hi');
  const hbg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  ok(hbg !== 'rgb(255, 255, 255)' && hbg !== 'rgba(0, 0, 0, 0)', 'the Hinglish cover opened without a slash keeps its design', hbg);
  ok(/Padhna shuru/.test(await page.locator('#begin').innerText()), 'and speaks Hinglish');
  await page.goto(base + '/book/hi/' + HB.chapters[8].file);
  await page.click('a[data-switch]');
  await page.waitForLoadState();
  ok(new URL(page.url()).pathname === '/book/' + HB.chapters[8].file, 'the switch goes to the same chapter in English', page.url());
  await page.click('a[data-switch]');
  await page.waitForLoadState();
  ok(new URL(page.url()).pathname === '/book/hi/' + HB.chapters[8].file, 'and back to the Hinglish one', page.url());
  await page.click('.pager .next');
  await page.waitForLoadState();
  ok(new URL(page.url()).pathname === '/book/hi/' + HB.chapters[9].file, 'Hinglish Next stays in Hinglish', page.url());
  await page.evaluate(() => { try { localStorage.clear(); } catch (e) {} });

  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(base + '/book/' + B.chapters[2].file);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(overflow <= 1, 'on a phone the page does not scroll sideways', String(overflow));
  await browser.close();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
