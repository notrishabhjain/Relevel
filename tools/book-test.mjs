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
ok(/href="\/app\/"/.test(read('index.html')), 'the contents page links back to the app');
const appJs = fs.readFileSync(p.join(ROOT, 'dist/site/app/index.html'), 'utf8');
const bm = appJs.match(/window\.BOOK=(\{.*?\});/);
const BOOK = bm && JSON.parse(bm[1]);
ok(BOOK && Object.keys(BOOK.chapters).length === new Set([...covered, ...(B.preface ? B.preface.course : [])]).size && BOOK.chapters.ch0 && BOOK.chapters.ch0.file === 'preface.html',
   'the app knows which book chapter retells which of its chapters, the preface included');
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

console.log('\n— the words Listen reads —');
{
  const bad = [], hiOut = p.join(OUT, 'hi');
  let chars = 0;
  for (const [dir, list] of [[OUT, pages], [hiOut, pages]]) {
    for (const f of list) {
      if (!/^\d\d-|^preface|^afterword/.test(f)) continue;
      const sf = p.join(dir, 'say', f.replace(/\.html$/, '.json'));
      if (!fs.existsSync(sf)) { bad.push('no script for ' + sf); continue; }
      const j = JSON.parse(fs.readFileSync(sf, 'utf8'));
      const html = fs.readFileSync(p.join(dir, f), 'utf8');
      const ids = [...html.matchAll(/data-s="(\d+)"/g)].map(m => +m[1]);
      if (ids.length !== j.segs.length || ids.some((x, i) => x !== i) || j.segs.some((s, i) => s[0] !== i)) bad.push(f + ': the page and its script disagree (' + ids.length + ' vs ' + j.segs.length + ')');
      if (!/^[0-9a-f]{16}$/.test(j.hash)) bad.push(f + ': no hash');
      for (const [, t] of j.segs) {
        chars += t.length;
        if (!t.trim() || /[`*]|\]\(|<\/?[a-z]/.test(t)) bad.push(f + ': markup left in "' + t.slice(0, 60) + '"');
        if (/^\s*[{\[]|"role"|Traceback/.test(t)) bad.push(f + ': code read aloud "' + t.slice(0, 60) + '"');
      }
    }
  }
  ok(!bad.length, 'every chapter, in both editions, has the words to say for each block it shows, in the same order', bad.slice(0, 4).join(' | '));
  ok(chars > 800000 && chars < 1200000, 'about a million characters in all, which is what recording both editions costs', String(chars));
  const t1 = JSON.parse(fs.readFileSync(p.join(OUT, 'say', B.chapters[0].file.replace('.html', '.json')), 'utf8'));
  ok(t1.segs[0][1] === 'Chapter 1. ' + B.chapters[0].title + '.' && t1.segs.some(s => /^Table 1\.1/.test(s[1]) && /Aadhaar number\./.test(s[1])), 'a chapter starts with its number and title, and its tables are read row by row', t1.segs[0][1]);
  ok(/data-s="0">[^<]*<\/h1>/.test(read(B.chapters[0].file)) && /id="listen"/.test(read(B.chapters[0].file)), 'the title is the first thing highlighted, and the page has a Listen button');
  ok(fs.existsSync(p.join(OUT, 'listen.js')) && fs.existsSync(p.join(OUT, 'voices.html')), 'with the player script and the narrator voices page');
}

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

  await page.goto(base + '/app/#/library');
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

  console.log('\n— listening —');
  {
    /* a pretend speech engine: each sentence "takes" 150 ms */
    const lc = await browser.newContext({ serviceWorkers: 'block', viewport: { width: 390, height: 800 } });
    await lc.route('**/*', r => r.request().url().startsWith(base) ? r.continue() : r.abort());
    await lc.addInitScript(() => {
      const said = window.__said = [];
      const voices = [{ name: 'Google US English', lang: 'en-US', voiceURI: 'us', localService: false },
                      { name: 'Google English (India)', lang: 'en-IN', voiceURI: 'in', localService: false },
                      { name: 'Google हिन्दी', lang: 'hi-IN', voiceURI: 'hi', localService: false }];
      const synth = { speaking: false, paused: false, getVoices: () => voices, addEventListener() {},
        speak(u) { said.push({ t: u.text, v: u.voice && u.voice.voiceURI, r: u.rate }); const me = this; me.cur = u; me.speaking = true;
          setTimeout(() => { if (me.cur === u) { me.speaking = false; u.onend && u.onend({}); } }, window.__ms || 150); },
        cancel() { this.cur = null; this.speaking = false; }, pause() {}, resume() {} };
      Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true });
      window.SpeechSynthesisUtterance = function (t) { this.text = t; };
    });
    const lp = await lc.newPage();
    const errs = []; lp.on('pageerror', e => errs.push(e.message));
    const f9 = B.chapters[8].file;
    const say9 = JSON.parse(fs.readFileSync(p.join(OUT, 'say', f9.replace('.html', '.json')), 'utf8'));
    await lp.goto(base + '/book/' + f9);
    await lp.waitForSelector('#listen:not([hidden])');
    await lp.click('#listen');
    await lp.waitForFunction(() => window.__said.length > 0);
    const s0 = await lp.evaluate(() => ({ first: window.__said[0], src: document.querySelector('.player .psrc').textContent, voice: document.querySelector('.pvoice').value }));
    ok(s0.first && s0.first.t === 'Chapter 9.' && s0.first.v === 'in', 'Listen starts with the chapter’s title, in the phone’s Indian English voice', JSON.stringify(s0));
    await lp.waitForFunction(() => +document.querySelector('.speaking').getAttribute('data-s') >= 2, null, { timeout: 8000 }).catch(() => {});
    const at = await lp.evaluate(() => +document.querySelector('.speaking').getAttribute('data-s'));
    ok(at >= 2, 'and moves the highlight along as it reads', String(at));
    await lp.click('.player .rate');
    await lp.waitForTimeout(400);
    ok(await lp.evaluate(() => window.__said[window.__said.length - 1].r === 1.15), 'the speed button reads faster');
    const target = 20;
    await lp.evaluate(n => document.querySelector('[data-s="' + n + '"]').scrollIntoView(), target);
    await lp.click('[data-s="' + target + '"]', { position: { x: 5, y: 5 } });
    await lp.waitForTimeout(100);
    const jumped = await lp.evaluate(() => ({ s: +document.querySelector('.speaking').getAttribute('data-s'), t: window.__said[window.__said.length - 1].t }));
    ok(jumped.s === target && say9.segs[target][1].startsWith(jumped.t.slice(0, 20)), 'tapping a paragraph reads from there', JSON.stringify(jumped));
    await lp.click('.player .close');
    ok(await lp.evaluate(() => document.getElementById('player').hidden && !document.querySelector('.speaking')), 'closing the player stops it and clears the highlight');
    /* the last paragraph: finishing ticks the chapter as read */
    await lp.evaluate(() => { window.__ms = 20; });
    await lp.click('#listen');
    const last = say9.segs.length - 1;
    await lp.evaluate(n => document.querySelector('[data-s="' + n + '"]').scrollIntoView(), last);
    await lp.click('[data-s="' + last + '"]', { position: { x: 5, y: 5 } });
    await lp.waitForSelector('.pend:not([hidden])', { timeout: 8000 }).catch(() => {});
    const end = await lp.evaluate(f => ({ shown: !document.querySelector('.pend').hidden, next: document.querySelector('.pnext').getAttribute('href'), read: !!(window.AIFZ_PROGRESS.load().read || {})[f] }), f9);
    ok(end.shown && end.read && /10-.*\.html#listen$/.test(end.next), 'listening to the end ticks the chapter as read and offers the next one', JSON.stringify(end));
    ok(!errs.length, 'nothing in the page breaks while listening', errs.join(' | '));

    /* a recorded chapter: its JSON and audio (here, a few seconds of silence) */
    const wavOf = sec => { const n = Math.round(sec * 8000), b = Buffer.alloc(44 + n * 2);
      b.write('RIFF', 0); b.writeUInt32LE(36 + n * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
      b.writeUInt32LE(8000, 24); b.writeUInt32LE(16000, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 2, 40); return b; };
    const segs = say9.segs.map((s, i) => [s[0], i * 0.4]);
    const dur = segs.length * 0.4 + 1;
    let hashOk = true;
    await lc.route('**/audio/en/09-the-first-conversation.json', r => r.fulfill({ contentType: 'application/json', body: JSON.stringify({ v: 1, hash: hashOk ? say9.hash : 'old', src: 'test.wav', dur, segs, voice: 'asha' }) }));
    await lc.route('**/audio/en/test.wav', r => r.fulfill({ contentType: 'audio/wav', body: wavOf(dur) }));
    const rp = await lc.newPage();
    await rp.goto(base + '/book/' + f9);
    await rp.waitForSelector('#listen:not([hidden])');
    await rp.evaluate(() => localStorage.removeItem('aifz-listen-en-09-the-first-conversation'));
    await rp.click('#listen');
    await rp.waitForTimeout(1500);
    const rec = await rp.evaluate(() => ({ src: document.querySelector('.player .psrc').textContent, time: document.querySelector('.ptime').textContent,
      at: +(document.querySelector('.speaking') || { getAttribute: () => -1 }).getAttribute('data-s'), said: window.__said.length }));
    ok(rec.src === 'Recorded voice' && rec.said === 0, 'a recorded chapter plays the recording, not the phone’s voice', JSON.stringify(rec));
    ok(rec.at >= 2 && rec.time.endsWith('/ 0:' + Math.round(dur)), 'and the highlight follows the recording’s own timings', JSON.stringify(rec));
    await rp.click('.player .play');
    await rp.click('.player .next');
    const nx = await rp.evaluate(() => +document.querySelector('.speaking').getAttribute('data-s'));
    ok(nx === rec.at + 1 || nx === rec.at + 2, 'Next paragraph jumps to where it starts in the recording', nx + ' after ' + rec.at);
    hashOk = false;
    const op = await lc.newPage();
    await op.goto(base + '/book/' + f9);
    await op.waitForSelector('#listen:not([hidden])');
    await op.click('#listen');
    await op.waitForTimeout(300);
    ok(await op.evaluate(() => document.querySelector('.player .psrc').hidden && !!document.querySelector('.pvoice:not([hidden])')), 'a recording made from older words is not used: the phone’s voice reads instead');

    /* the narrator voices page lists the samples and how far the recording is */
    await lc.route('**/audio/samples/samples.json', r => r.fulfill({ contentType: 'application/json', body: JSON.stringify({
      en: [{ voice: 'asha-in', label: 'Asha', desc: 'female · Indian', indian: true, src: 'en-asha-in.webm' }, { voice: 'Sulafat', label: 'Sulafat', src: 'en-sulafat.webm' }],
      hi: [{ voice: 'ravi-hi', label: 'Ravi', indian: true, error: 'HTTP 400 unknown voice' }] }) }));
    await lc.route('**/audio/en/index.json', r => r.fulfill({ contentType: 'application/json', body: JSON.stringify({ voice: 'asha-in', total: 49, done: 12, seconds: 9060 }) }));
    const vp = await lc.newPage();
    await vp.goto(base + '/book/voices.html');
    await vp.waitForSelector('.vcard');
    const vv = await vp.evaluate(() => ({ cards: document.querySelectorAll('.vcard').length, audio: document.querySelectorAll('.vcard audio').length,
      chosen: (document.querySelector('.vcard.chosen .vname b') || {}).textContent, stat: document.querySelector('.vstat').textContent, err: /could not be recorded/.test(document.body.innerText) }));
    ok(vv.cards === 3 && vv.audio === 2 && vv.chosen === 'Asha' && /12 of 49 chapters \(2 h 31 min\)/.test(vv.stat) && vv.err,
       'the voices page plays each sample, marks the chosen voice and says how much is recorded', JSON.stringify(vv));
    await lc.close();
  }

  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(base + '/book/' + B.chapters[2].file);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(overflow <= 1, 'on a phone the page does not scroll sideways', String(overflow));
  await browser.close();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
