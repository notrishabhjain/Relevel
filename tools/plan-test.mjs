/* The /plan/ page in a real browser against the dev server: tabs, anchors, the
   tracker, saving to an account, and the old URLs. `node tools/plan-test.mjs` */
import { chromium } from 'playwright';
import fs from 'node:fs';

const B = process.env.BASE || 'http://127.0.0.1:8788';
let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? (pass++, console.log('  ok  ', m)) : (fail++, console.log('  FAIL', m, extra ?? '')); };

const HERE = '/opt/pw-browsers/chromium';
const browser = await chromium.launch(fs.existsSync(HERE) ? { executablePath: HERE } : {});
const device = async (signedIn, vp) => {
  const ctx = await browser.newContext({ serviceWorkers: 'block', viewport: vp || { width: 1100, height: 900 } });
  await ctx.route('**/*', r => r.request().url().startsWith(B) ? r.continue() : r.abort());
  const page = await ctx.newPage();
  page.on('pageerror', e => { fail++; console.log('  FAIL [page error]', e.message); });
  if (signedIn) await page.goto(B + '/api/dev/login?login=localdev');
  return { ctx, page };
};
const visible = (page, tab) => page.evaluate(t => { const e = document.querySelector(`[data-tab="${t}"]`); return !!e && e.offsetParent !== null; }, tab);
const sleep = ms => new Promise(r => setTimeout(r, ms));

console.log('\n— tabs and anchors —');
{
  const { ctx, page } = await device(false);
  await page.goto(B + '/plan/');
  ok(await visible(page, 'plan') && !(await visible(page, 'build')) && !(await visible(page, 'curriculum')), 'opens on the Plan tab with the others hidden');
  await page.click('header.bar a[data-go="build"]');
  await page.waitForFunction(() => location.hash === '#build').catch(() => {});
  await sleep(300);                        // the panel switches on hashchange, a tick after the click
  ok(await visible(page, 'build') && !(await visible(page, 'plan')), 'the How to build tab switches panels without a page load');
  await page.goto(B + '/plan/#publish'); await page.reload();
  ok(await visible(page, 'build'), 'a recipe anchor opens the build tab');
  await sleep(1200);                       // smooth scrolling takes a moment
  const inView = await page.evaluate(() => { const r = document.getElementById('publish').getBoundingClientRect(); return r.top >= 0 && r.top < innerHeight / 2; });
  ok(inView, 'and scrolls to that recipe');
  await page.goto(B + '/plan/#w13'); await page.reload();
  const opened = await page.evaluate(() => document.getElementById('w13').closest('details').open && document.getElementById('w13').offsetParent !== null);
  ok(await visible(page, 'plan') && opened, 'a week anchor opens the plan tab and expands its month');
  const w13 = await page.evaluate(() => ({ steps: [...document.querySelectorAll('#w13 li.st')].map(li => li.getAttribute('data-step')),
    chapter: (document.querySelector('#w13 li[data-step="c:ch7"] a') || {}).getAttribute && document.querySelector('#w13 li[data-step="c:ch7"] a').getAttribute('href'),
    recipe: !!document.querySelector('#w13 a[href="#publish"]') }));
  ok(w13.steps.length >= 3 && w13.chapter === '../app/#/ch/ch7' && w13.recipe, 'week 13 lists its route steps, links each to the playbook, and links its recipe', JSON.stringify(w13));
  await sleep(1200);
  await page.click('#w13 a[href="#publish"]');
  await page.waitForFunction(() => location.hash === '#publish');
  ok(await visible(page, 'build'), 'clicking a week’s recipe link jumps to the build tab');
  await page.goto(B + '/plan/ship.html#publish');
  await page.waitForURL(/\/plan\/#publish$/);
  ok(await visible(page, 'build'), 'the old ship.html link redirects into the tab');
  await page.goto(B + '/plan/curriculum.html');
  await page.waitForURL(/\/plan\/#curriculum$/);
  ok(await visible(page, 'curriculum'), 'the old curriculum.html link redirects into the tab');
  await ctx.close();
}

console.log('\n— tracker in this browser —');
{
  const { ctx, page } = await device(false);
  await page.goto(B + '/plan/#w1'); await page.reload();
  await page.check('#w1 li[data-step="t:review-1"] input');
  await page.fill('#w1 input[data-f="link"]', 'https://example.com/my-notes');
  await page.press('#w1 input[data-f="link"]', 'Tab');
  await page.fill('#park-input', 'Learn Rust'); await page.click('#park-add');
  await page.reload();
  ok(await page.isChecked('#w1 li[data-step="t:review-1"] input'), 'a ticked step survives a reload');
  ok(await page.evaluate(() => !!JSON.parse(localStorage.getItem('aifz2027')).steps['t:review-1']), 'and is saved in the one shared progress record');
  ok(await page.isDisabled('#w1 li[data-step="c:ch0"] input'), 'a chapter step is ticked from the playbook, not here');
  ok((await page.inputValue('#w1 input[data-f="link"]')).includes('my-notes'), 'the week’s link survives too');
  ok((await page.textContent('#parking-list')).includes('Learn Rust'), 'and the parking lot');
  const done = await page.evaluate(() => [...document.querySelectorAll('#status .stat')].find(s => /Steps done/.test(s.textContent)).querySelector('.v').textContent);
  ok(/^1\b/.test(done), 'the status panel counts it', done);
  ok((await page.textContent('#sync')).includes('this browser only'), 'it says the tracker is saved in this browser only');
  await page.click('#parking-list [data-del]');
  ok(!(await page.textContent('#parking-list')).includes('Learn Rust'), 'a parked item can be removed');
  await ctx.close();
}

console.log('\n— tracker in an account —');
{
  const a = await device(true);
  await a.page.goto(B + '/plan/');
  await a.page.waitForFunction(() => /Synced to your account/.test(document.querySelector('#sync').textContent));
  ok(true, 'a signed-in visitor is told it syncs to their account');
  await a.page.check('#w2 li[data-step="t:review-2"] input');
  await a.page.fill('#w2 input[data-f="note"]', 'embeddings were the hard part');
  await a.page.press('#w2 input[data-f="note"]', 'Tab');
  await a.page.waitForFunction(() => /Saved to your account/.test(document.querySelector('#sync-text').textContent));
  const b = await device(true);
  await b.page.goto(B + '/plan/');
  await b.page.waitForFunction(() => document.querySelector('#w2 li[data-step="t:review-2"] input').checked, null, { timeout: 8000 });
  ok((await b.page.inputValue('#w2 input[data-f="note"]')).includes('embeddings'), 'a second device sees the same ticks and notes');
  await b.page.check('#share-on');
  await b.page.waitForFunction(() => /api\/plan-status\?id=/.test(document.querySelector('#sync').textContent));
  const url = await b.page.evaluate(() => document.querySelector('#sync code').textContent);
  const s = await (await fetch(url)).json();
  ok(s.of === 26 && s.stepsDone >= 1 && !JSON.stringify(s).includes('embeddings'), 'the check-in link returns route counts and no notes', s);
  await b.page.uncheck('#share-on');
  await sleep(500);
  ok((await fetch(url)).status === 404, 'switching sharing off kills the link');
  await a.ctx.close(); await b.ctx.close();
}

console.log('\n— phone width —');
{
  const { ctx, page } = await device(false, { width: 390, height: 800 });
  for (const t of ['plan', 'build', 'curriculum']) {
    await page.goto(B + '/plan/#' + t); await page.reload();
    const w = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    ok(w <= 1, 'the ' + t + ' tab does not scroll sideways', w);
  }
  await ctx.close();
}

await browser.close();
console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);
