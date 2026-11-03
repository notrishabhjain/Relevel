#!/usr/bin/env node
/* The hands-on work inside the app: Python in the page, the model relay, the
   Connect panel, the Playground and the reading lists.

   Python comes from the npm copy of Pyodide (the dev server serves it at
   /_pyodide/), and the "model" is a small fake provider started here, so the
   suite needs no network and no key. tools/test.mjs gives the dev server
   LLM_EXTRA_BASES so the relay will forward to it. */
import fs from 'node:fs';
import http from 'node:http';
import p from 'node:path';
import vm from 'node:vm';
import { chromium } from 'playwright';

const ROOT = p.resolve(new URL('..', import.meta.url).pathname);
const BASE = process.env.BASE;
const FAKE_PORT = Number(process.env.FAKE_LLM_PORT || 0);
const FAKE = 'http://127.0.0.1:' + FAKE_PORT + '/v1';
let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? (pass++, console.log('  ok  ', m)) : (fail++, console.log('  FAIL', m, extra ?? '')); };

/* ---------- a fake OpenAI-style provider ---------- */
const fake = http.createServer((req, res) => {
  let b = ''; req.on('data', c => b += c); req.on('end', () => {
    const j = b ? JSON.parse(b) : {};
    res.setHeader('content-type', 'application/json');
    if (!/Bearer test-key/.test(req.headers.authorization || '')) { res.statusCode = 401; return res.end(JSON.stringify({ error: { message: 'bad key' } })); }
    if (req.url.endsWith('/embeddings')) {
      const inp = Array.isArray(j.input) ? j.input : [j.input];
      return res.end(JSON.stringify({ object: 'list', model: j.model, data: inp.map((t, i) => ({ index: i, embedding: [t.length, 1, 0] })), usage: { prompt_tokens: 3 } }));
    }
    if (req.url.endsWith('/models')) return res.end(JSON.stringify({ data: [{ id: 'fake-chat' }] }));
    const last = (j.messages || []).slice(-1)[0] || {};
    const text = /setup works/.test(last.content) ? 'setup works' : (j.model === 'fake-two' ? 'two: ' : 'echo: ') + String(last.content).slice(0, 60);
    if (j.stream) {
      res.setHeader('content-type', 'text/event-stream');
      for (const w of text.split(' ')) res.write('data: ' + JSON.stringify({ model: j.model, choices: [{ delta: { content: w + ' ' } }] }) + '\n\n');
      res.write('data: ' + JSON.stringify({ model: j.model, choices: [], usage: { prompt_tokens: 9, completion_tokens: 4 } }) + '\n\n');
      res.write('data: [DONE]\n\n'); return res.end();
    }
    res.end(JSON.stringify({ id: 'x', model: j.model, choices: [{ index: 0, message: { role: 'assistant', content: text }, finish_reason: 'stop' }], usage: { prompt_tokens: 12, completion_tokens: 3 } }));
  });
});
if (FAKE_PORT) await new Promise(r => fake.listen(FAKE_PORT, '127.0.0.1', r));

/* ---------- which code blocks get a Run button ---------- */
console.log('\n— which code blocks are Python —');
{
  const ctx = { window: {}, location: { href: 'http://x/' } }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p.join(ROOT, 'src/pyrun.js'), 'utf8'), ctx);
  const isPy = ctx.window.PY.isPython;
  const C = JSON.parse(fs.readFileSync(p.join(ROOT, 'content/defaults.json'), 'utf8'));
  const blocks = [];
  const walk = (b, ch) => { if (!Array.isArray(b)) return; if (b[0] === 'code') blocks.push({ ch, src: b[1], local: b[2] === 'local' }); else if (b[0] === 'do') (b[2] || []).forEach(x => walk(x, ch)); };
  C.chapters.forEach(c => (c.story || []).forEach(b => walk(b, c.id)));
  const modelCalls = blocks.filter(b => /client\.|print\(/.test(b.src));
  ok(modelCalls.every(b => isPy(b.src)), 'every block that calls the model or prints is runnable', modelCalls.filter(b => !isPy(b.src)).map(b => b.ch).join(' '));
  const templates = blocks.filter(b => ['a1', 'a3', 'a4', 'a5', 'a6', 'a7'].includes(b.ch));
  ok(templates.length > 5 && templates.every(b => !isPy(b.src)), 'and the templates and formulas in Track A are not', templates.filter(b => isPy(b.src)).map(b => b.src.slice(0, 30)).join(' | '));
  ok(blocks.some(b => b.local && /bertviz/.test(b.src)), 'the PyTorch example in A8 is marked as one for your own computer');
}

console.log('\n— the formulas Sheets understands —');
{
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p.join(ROOT, 'src/sheets.js'), 'utf8'), ctx);
  const SH = ctx.window.SHEETS;
  const rows = [['q', 'in', 'out', 'cost'], ['a', '1200', '300', '=(B2*0.2+C2*0.6)/1000000'], ['b', '800', '200', '=(B3*0.2+C3*0.6)/1000000'],
    ['', '', 'total', '=SUM(D2:D3)'], ['', '', 'per month', '=ROUND(D4*10000*30, 2)'], ['', '', 'loop', '=D6'], ['', '', 'text', '=A2*2']];
  const v = SH.evaluate(rows), show = (r, c) => SH.show(v(r, c));
  ok(show(3, 3) === '0.0007' && show(4, 3) === '210', 'arithmetic, ranges, SUM and ROUND work as a cost model needs', show(3, 3) + ' ' + show(4, 3));
  ok(show(5, 3) === '#CYCLE' && show(6, 3) === '#VALUE', 'and a loop or text in a sum says so instead of guessing');
  ok(SH.toCSV({ rows: [['a, b', '1'], ['x', '=B1+1']] }) === '"a, b",1\nx,2\n', 'the CSV keeps commas quoted and shows computed values');
}

if (!BASE || !FAKE_PORT) {
  console.log(`\n${pass} passed, ${fail} failed (browser half skipped: no BASE or FAKE_LLM_PORT)`);
  fake.close(); process.exit(fail ? 1 : 0);
}

/* ---------- the relay ---------- */
console.log('\n— the relay passes requests on, and only those —');
{
  const post = (path, body, headers) => fetch(BASE + '/api/llm?path=' + path, { method: 'POST', body: JSON.stringify(body),
    headers: Object.assign({ 'content-type': 'application/json' }, headers) });
  const good = { 'x-aifz': '1', 'x-llm-base': FAKE, authorization: 'Bearer test-key' };
  let r = await post('chat/completions', { model: 'm', messages: [{ role: 'user', content: 'hi' }] }, good);
  let j = await r.json();
  ok(r.status === 200 && j.choices[0].message.content === 'echo: hi', 'a request from the site reaches the provider and comes back', r.status);
  r = await post('chat/completions', {}, { ...good, 'x-aifz': '' });
  ok(r.status === 403, 'without the site’s own header it is refused', r.status);
  r = await post('chat/completions', {}, { ...good, 'x-llm-base': 'https://evil.example/v1' });
  ok(r.status === 400, 'a provider that is not on the list is refused', r.status);
  r = await post('files', {}, good);
  ok(r.status === 400, 'an endpoint the course does not use is refused', r.status);
  r = await post('chat/completions', {}, { 'x-aifz': '1', 'x-llm-base': FAKE });
  ok(r.status === 401, 'with no key and no site key it says so', r.status);
  r = await post('chat/completions', { model: 'm', stream: true, messages: [{ role: 'user', content: 'a b c' }] }, good);
  const t = await r.text();
  ok(/text\/event-stream/.test(r.headers.get('content-type') || '') && /data: \[DONE\]/.test(t), 'a streamed answer is passed on as a stream');
  const h = await (await fetch(BASE + '/api/health')).json();
  ok(h.llm && h.llm.relay === true, 'and /api/health says the relay is there');
}

/* ---------- the browser ---------- */
const browser = await chromium.launch({ args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] });
const ctx = await browser.newContext();
await ctx.grantPermissions(['microphone'], { origin: BASE });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto(BASE + '/app/');
await page.evaluate(f => {
  localStorage.setItem('aifz.pyodideUrl', '/_pyodide/');
  localStorage.setItem('aifz.llm', JSON.stringify({ provider: 'custom', base: f, keys: { custom: 'test-key' }, route: 'site', chat: 'fake-chat', embed: 'fake-embed' }));
}, FAKE);
const runCell = async (loc) => {
  await loc.locator('.pyrun').click();
  await loc.locator('.pystat.ok, .pystat.bad').waitFor({ timeout: 120000 });
  return loc.locator('.pyout').innerText();
};

console.log('\n— a chapter’s code runs in the page —');
await page.goto(BASE + '/app/#/ch/ch1');
await page.waitForSelector('.pycell');
ok(await page.locator('.pkbar').count() === 1, 'the chapter has one notebook bar');
ok(await page.locator('.prose .pycell').count() >= 3, 'and its three code blocks are cells with a Run button', await page.locator('.prose .pycell').count());
const first = page.locator('.prose .pycell').first();
let out = await runCell(first);
ok(/Python ready/.test(out) && /echo: What is compound interest/.test(out), 'Run starts Python, connects, and prints the model’s answer', out.slice(0, 200));
out = await runCell(page.locator('.prose .pycell').nth(1));
ok(/tokens read:\s+12/.test(out), 'the next cell reads the same response: one session for the page', out.slice(0, 120));
ok(await page.locator('#notebook .pyscratch .pycell').count() >= 1, 'and the chapter has a notebook of its own at the end');

console.log('\n— the course’s code runs unchanged —');
await page.goto(BASE + '/app/#/workbench');
await page.waitForSelector('.pyscratch textarea');
const wb = page.locator('.pyscratch .pycell').first();
const type = async (code) => { await wb.locator('textarea').fill(code); };
await type('from google.colab import userdata\nkey = userdata.get("NVIDIA_API_KEY")\nprint("Key loaded, starts with:", key[:4])\n!pip -q install openai\nfrom openai import OpenAI\nc = OpenAI(base_url="https://integrate.api.nvidia.com/v1", api_key=key)\ne = c.embeddings.create(model="nvidia/nv-embedqa-e5-v5", input=["abc"], extra_body={"input_type": "query"})\nprint(len(e.data[0].embedding))\ndef helper(n):\n    return n + 1\nCARDS = ["one", "two"]');
out = await runCell(wb);
ok(/Key loaded, starts with: test/.test(out), 'the Colab key cell works here', out.slice(0, 160));
ok(/built into this page/.test(out), '!pip install openai is answered, not run');
ok(/\n3\n|^3$/m.test(out), 'embeddings come back in the shape the code expects');
await type('import requests\nr = requests.get("' + BASE + '/api/health")\nprint(r.status_code, r.json()["ok"])\nopen("note.txt", "w").write("kept")');
out = await runCell(wb);
ok(/200 True/.test(out), 'requests works for a site that allows it', out.slice(0, 120));
await type('print(undefined_name)');
out = await runCell(wb);
ok(/NameError/.test(out) && /Restore/.test(out), 'an error says what to do', out.slice(0, 200));

console.log('\n— a reload keeps your work —');
await type('print(helper(41), len(CARDS))');
await page.reload();
await page.waitForSelector('.pyscratch textarea');
ok((await page.locator('.pyscratch textarea').first().inputValue()).includes('helper(41)'), 'your own cell is still there after a reload');
await page.locator('.pkbar button', { hasText: 'Restore' }).click();
await page.locator('.pklog').filter({ hasText: /Restored definitions/ }).waitFor({ timeout: 120000 });
const log = await page.locator('.pklog').innerText();
ok(/helper/.test(log) && /CARDS/.test(log), 'Restore brings back functions and data without calling the model', log.slice(0, 200));
out = await runCell(page.locator('.pyscratch .pycell').first());
ok(/42 2/.test(out), 'and the next cell can use them', out.slice(0, 120));
await page.locator('.pyscratch textarea').first().fill('print(open("note.txt").read())');
out = await runCell(page.locator('.pyscratch .pycell').first());
ok(/kept/.test(out), 'a file written by your code is still there after a reload', out.slice(0, 120));

console.log('\n— Connect and the Playground —');
await page.goto(BASE + '/app/#/setup');
await page.waitForSelector('.connect');
ok(/Connected/.test(await page.locator('.llmstat').first().innerText()), 'the setup page shows the connection');
await page.locator('.connect button', { hasText: 'Run the test call' }).click();
await page.locator('.connect .pyout.good, .connect .pyout.bad').waitFor({ timeout: 20000 });
ok(/setup works/.test(await page.locator('.connect .pyout').innerText()), 'and its test call prints “setup works”');
ok(!/colab\.research\.google\.com/.test(await page.content()), 'it no longer sends you to Colab');
await page.goto(BASE + '/app/#/playground');
await page.waitForSelector('.pg textarea');
await page.locator('.pg textarea').nth(1).fill('hello there');
await page.locator('.pgctl input[list=pgmodels]').fill('fake-two');
await page.locator('.pgbtns button', { hasText: 'Send' }).first().click();
await page.locator('.pgpair .pgmsg .pgmeta').nth(1).waitFor({ timeout: 20000 });
const pair = await page.locator('.pgpair').innerText();
ok(/echo: hello there/.test(pair) && /two: hello there/.test(pair), 'Compare with sends one message to two models, side by side', pair.slice(0, 160));
ok(/9 in \/ 4 out/.test(pair), 'and each reply carries its receipt', pair.slice(0, 300));
await page.locator('#batch textarea').nth(1).fill('my number is 98765 || echo: my number is 98765\nnothing here || no');
await page.locator('#batch button', { hasText: 'Run them all' }).click();
await page.locator('.pgscore strong').waitFor({ timeout: 20000 });
await page.waitForFunction(() => !document.querySelector('#batch button.primary').disabled, null, { timeout: 20000 });
ok(/Score: 1 \/ 2/.test(await page.locator('.pgscore').innerText()), 'Mark a test set runs each line and pre-marks the clear matches', await page.locator('.pgscore').innerText());

console.log('\n— spreadsheets and recordings, here too —');
await page.goto(BASE + '/app/#/ch/ch22');
await page.waitForSelector('#sheet .shcell');
const cell = (r, c) => page.locator(`#sheet .shcell[data-r="${r}"][data-c="${c}"]`);
await cell(0, 0).fill('runs'); await cell(0, 0).press('Enter');
await cell(1, 0).fill('4'); await cell(1, 0).press('Enter');
await cell(1, 1).fill('=A2*25'); await cell(1, 1).press('Enter');
ok(await cell(1, 1).inputValue() === '100', 'a chapter that asks for a spreadsheet has one, with formulas', await cell(1, 1).inputValue());
await page.goto(BASE + '/app/#/workbench');
await page.waitForSelector('.pyscratch textarea');
await page.locator('.pyscratch textarea').first().fill('print(open("sheets/2-2-testing-prompts.csv").read())');
out = await runCell(page.locator('.pyscratch .pycell').first());
ok(/runs,\n4,100/.test(out), 'and the notebook reads it as a CSV file', out.slice(0, 160));
await page.goto(BASE + '/app/#/project');
await page.locator('button', { hasText: 'Open these ten as your answer key' }).click();
await page.waitForSelector('.sheet .shcell');
ok(/#\/sheets\/answer-key/.test(page.url()) && (await page.locator('.shcell[data-r="1"][data-c="2"]').inputValue()).includes('Rahul Verma'),
  'the project page opens its ten starter sentences as the answer key');
ok(await page.locator('.shname').inputValue() === 'answer-key-v1', 'named so that Download CSV gives answer-key-v1.csv');
await page.goto(BASE + '/app/#/ch/b7');
await page.waitForSelector('#record .recbox');
await page.locator('#record button', { hasText: 'Record' }).click();
await page.waitForTimeout(1600);
await page.locator('#record button', { hasText: 'Stop' }).click();
await page.locator('#record .reclist audio').first().waitFor({ timeout: 10000 });
ok(await page.locator('#record .reclist li').count() === 1, 'the interview chapter records an answer and keeps the take');

console.log('\n— going deeper, and nothing left outside —');
await page.goto(BASE + '/app/#/ch/ch7');
await page.waitForSelector('#reading');
const rd = page.locator('#reading');
ok(await rd.locator('a[href^="https://arxiv.org/abs/2005.11401"]').count() === 1, 'a chapter lists its research, linked to the paper');
ok(/In the real world/i.test(await rd.innerText()), 'and where its idea mattered in the real world');
await page.goto(BASE + '/app/#/ch/a8');
await page.waitForSelector('figure.embed iframe');
ok(await page.locator('figure.embed iframe[src*="transformer-explainer"]').count() === 1, 'A8 shows the attention viewer inside the page');
ok(await page.locator('.localcode pre').count() === 1 && await page.locator('.localcode .pyrun').count() === 0, 'and its PyTorch code without a Run button');
await page.evaluate(() => { window.STORE.S.lang = 'hi'; window.STORE.flush(); });
for (const route of ['#/playground', '#/workbench', '#/setup']) {
  await page.goto(BASE + '/app/' + route); await page.reload(); await page.waitForTimeout(400);
  const txt = await page.locator('#main').innerText();
  ok(!/nothing here is translated/i.test(txt) && /kijiye|aapka|aapki|chalaiye|Bhejiye/i.test(txt), 'in Hinglish, ' + route + ' is translated', txt.slice(0, 120));
}
await page.goto(BASE + '/app/#/ch/ch7'); await page.reload();
await page.waitForSelector('#reading');
ok(/Asli duniya mein/i.test(await page.locator('#reading').innerText()), 'and the reading list speaks Hinglish');
const bookFiles = fs.readdirSync(p.join(ROOT, 'dist/site/book')).filter(f => /^\d\d-.*\.html$/.test(f));
ok(bookFiles.filter(f => fs.readFileSync(p.join(ROOT, 'dist/site/book', f), 'utf8').includes('class="deeper"')).length === bookFiles.length,
  'every book chapter ends with its reading list');
ok((fs.readFileSync(p.join(ROOT, 'dist/site/plan/index.html'), 'utf8').match(/Research and the real world/g) || []).length === 26, 'and every week of the plan has one');
ok(!errors.length, 'no page errors', errors.slice(0, 3).join(' | '));

await browser.close();
fake.close();
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
