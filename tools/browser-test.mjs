/* Drives the built site in a real browser against the dev server.

   The second device is a separate browser context, not a second tab: tabs share
   storage and would pass even if nothing reached the database. */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
/* Expected counts come from the build output rather than being typed here, so
   adding a chapter does not mean editing the tests to agree with it. */
const EXPECT = JSON.parse(readFileSync(new URL('../content/defaults.json', import.meta.url), 'utf8'));
const N = { chapters: EXPECT.chapters.length, items: EXPECT.items.length, skills: EXPECT.skills.length };

const B = process.env.BASE || 'http://127.0.0.1:8788';
let pass = 0, fail = 0;
const ok = (c, m, extra) => { c ? (pass++, console.log('  ok  ', m))
  : (fail++, console.log('  FAIL', m, extra ?? '')); };

/* This container ships a Chromium at a fixed path; anywhere else, let
   Playwright find the one it installed. */
import fs from 'node:fs';
const HERE = '/opt/pw-browsers/chromium';
const browser = await chromium.launch(fs.existsSync(HERE) ? { executablePath: HERE } : {});
const newDevice = async (signedIn, login = 'localdev') => {
  const ctx = await browser.newContext({ serviceWorkers: 'block' });
  /* The page pulls webfonts from Google; there is no egress here and each
     attempt costs seconds, so nothing leaves localhost during a test. */
  await ctx.route('**/*', r => r.request().url().startsWith(B) ? r.continue() : r.abort());
  const page = await ctx.newPage();
  page.on('pageerror', e => console.log('    [page error]', e.message));
  if (signedIn) { await page.goto(B + '/api/dev/login?login=' + login); }
  return { ctx, page };
};
/* .pill and .lbl are CSS-uppercased, so read the DOM text, not the rendered text. */
const text = (page, sel) => page.evaluate(s => {
  const e = document.querySelector(s); return e ? e.textContent.trim() : '(missing)'; }, sel);
const mainText = page => text(page, '#main');
/* Going to the hash the page is already on fires no hashchange, so nothing
   re-renders. A revisit has to be a real load. */
const revisit = async page => {
  await page.reload();
  await page.waitForFunction(() => window.CONTENT && window.STUDIO && document.querySelector('#main'));
  await page.waitForTimeout(300);
};
const boot = async (page, hash = '') => {
  await page.goto(B + '/' + hash);
  await page.waitForFunction(() => window.CONTENT && window.STUDIO && document.querySelector('#main'));
  await page.waitForTimeout(250);
};

console.log('\n— the app loads from the database —');
const a = await newDevice(false);
await boot(a.page);
ok(await a.page.evaluate(() => window.CONTENT.source) === 'server', 'content came from the server, not the bundle');
ok(await a.page.evaluate(() => window.CHAPTERS.length) === N.chapters, `all ${N.chapters} chapters arrived`);
ok(await a.page.evaluate(() => window.ENG.ITEMS.length) === N.items, `the engine sees all ${N.items} questions`);
ok(await a.page.evaluate(() => window.SKILLS.length) === N.skills, `all ${N.skills} skills arrived`);

console.log('\n— the studio is read-only when signed out —');
await boot(a.page, '#/studio');
ok(await text(a.page, '.phead h1') === 'Studio', 'the studio renders', await text(a.page, '.phead h1'));
ok(await a.page.locator('.domcard').count() === 6, 'six kinds of content are listed');
ok(await text(a.page, '.callout .lbl') === 'Read-only', 'a read-only banner explains why',
   await text(a.page, '.callout .lbl'));
await boot(a.page, '#/studio/items');
ok(await a.page.locator('.sitem').count() === N.items, 'the question list shows every question');
ok(await a.page.locator('.sbar button.primary').isDisabled(), 'publish is off for a signed-out visitor');

console.log('\n— an editor edits a question —');
const b = await newDevice(true);
await boot(b.page, '#/studio/items');
ok(!(await b.page.locator('.callout .lbl').count()), 'no read-only banner for an editor');
await b.page.locator('.sitem .sitemmain').first().click();
await b.page.waitForSelector('.sform');
const stemBox = b.page.locator('.sform textarea').first();
await stemBox.fill('How many tokens is a 300-word answer, roughly?');
await b.page.waitForTimeout(150);
ok(await text(b.page, '.sbar .pill') === 'unpublished draft', 'the edit becomes a draft',
   await text(b.page, '.sbar .pill'));
ok(!(await b.page.locator('.sbar button.primary').isDisabled()), 'publish is available');

console.log('\n— a draft survives a reload —');
await boot(b.page, '#/studio/items');
ok(await text(b.page, '.sbar .pill') === 'unpublished draft', 'the draft is still there after a reload',
   await text(b.page, '.sbar .pill'));
ok(/1 draft/.test(await b.page.locator('.rail').innerText()), 'the sidebar says a draft is waiting');

console.log('\n— publishing —');
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
const msg = await text(b.page, '.sbar .sbarmsg.ok');
ok(/Published as v2/.test(msg), 'the publish reports a new version', msg);
ok(await text(b.page, '.sbar .pill') === 'published v2', 'the draft is gone',
   await text(b.page, '.sbar .pill'));
ok(await b.page.evaluate(() => window.ENG.byItem['I001'].stem) === 'How many tokens is a 300-word answer, roughly?',
   'the running app already uses the new text — no reload needed');

console.log('\n— a different device sees it, with nothing rebuilt —');
const c = await newDevice(false);
await boot(c.page);
ok(await c.page.evaluate(() => window.ENG.byItem['I001'].stem) === 'How many tokens is a 300-word answer, roughly?',
   'a browser that never saw the edit gets the new text');
ok(await c.page.evaluate(() => window.ENG.ITEMS.length) === N.items, 'and the rest of the bank is intact');

console.log('\n— two editors cannot overwrite each other —');
const d = await newDevice(true);
await boot(d.page, '#/studio/items');                       // d is now based on v2
await d.page.locator('.sitem .sitemmain').first().click();
await d.page.waitForSelector('.sform');
await d.page.locator('.sform textarea').first().fill('Device D wrote this');
await b.page.reload(); await b.page.waitForFunction(() => window.STUDIO);
await boot(b.page, '#/studio/items');                       // b publishes v3 first
await b.page.locator('.sitem .sitemmain').first().click();
await b.page.waitForSelector('.sform');
await b.page.locator('.sform textarea').first().fill('Device B wrote this');
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
ok(/v3/.test(await text(b.page, '.sbar .sbarmsg.ok')), 'device B publishes v3',
   await text(b.page, '.sbar .sbarmsg.ok'));
await d.page.locator('.sbar button.primary').first().click();
await d.page.waitForSelector('.sbar .sbarmsg.bad', { timeout: 15000 });
const conflict = await text(d.page, '.sbar .sbarmsg.bad');
ok(/saved this first/.test(conflict), 'device D is told, not silently overwritten', conflict);
const stillB = await c.page.evaluate(async () => (await (await fetch('/api/content?kind=items')).json())
  .content.items.data[0][4]);
ok(stillB === 'Device B wrote this', "device D's draft did not overwrite device B", stillB);

console.log('\n— bad content cannot be published —');
await boot(b.page, '#/studio/items/~json');
await b.page.locator('textarea').first().fill('{ not json');
await b.page.getByText('Apply to draft').click();
ok(/Not valid JSON/.test(await text(b.page, '.sbarmsg.bad')), 'unparseable JSON is caught before it can be saved',
   await text(b.page, '.sbarmsg.bad'));
const items = await b.page.evaluate(() => JSON.stringify(window.ALL_ITEMS));
const broken = JSON.parse(items); broken[0][6] = 42;
await b.page.locator('textarea').first().fill(JSON.stringify(broken));
await b.page.getByText('Apply to draft').click();
ok(/one option marked correct/.test(await text(b.page, '.sbarmsg.bad')),
   'an answer that indexes nothing is caught in the browser', await text(b.page, '.sbarmsg.bad'));

console.log('\n— the structured editors, not just the JSON —');
await boot(b.page, '#/studio/chapters');
ok(await b.page.locator('.sitem').count() === N.chapters, 'every chapter is listed');
await b.page.locator('.sitem .sitemmain').first().click();
await b.page.waitForSelector('.sform');
const titleBox = b.page.locator('.sform > .sfield:has(> label:text-is("title")) input');
ok(await titleBox.count() === 1, 'the chapter form has a title field');
await titleBox.fill('What Actually Happens When You Ask');
/* add a paragraph to the end of the reading */
const reading = b.page.locator('.sform > .sfield:has(> label:text-is("The reading"))');
await reading.getByText('+ Block', { exact: true }).click();
await reading.locator('.srow').last().locator('textarea').fill('A sentence added from the Studio.');
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
ok(/Published/.test(await text(b.page, '.sbar .sbarmsg.ok')), 'the chapter publishes',
   await text(b.page, '.sbar .sbarmsg.ok'));
ok(await b.page.evaluate(() => window.CHAPTERS[0].title) === 'What Actually Happens When You Ask',
   'the new title is live in the running app');
await boot(b.page, '#/ch/' + await b.page.evaluate(() => window.CHAPTERS[0].id));
ok((await b.page.locator('#main').innerText()).includes('A sentence added from the Studio.'),
   'the added paragraph renders inside the chapter');
ok((await b.page.locator('#main').innerText()).includes('What Actually Happens When You Ask'),
   'and the chapter heading uses the new title');

console.log('\n— adding a skill from scratch —');
const before = await b.page.evaluate(() => window.SKILLS.length);
await boot(b.page, '#/studio/skills');
await b.page.getByText('+ New skill', { exact: true }).click();
await b.page.waitForSelector('.sform');
await b.page.locator('.sform .sfield:has(> label:text-is("name")) input').fill('Reading a model card');
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
ok(await b.page.evaluate(() => window.SKILLS.length) === before + 1, 'the new skill is live');
ok(await b.page.evaluate(() => window.SKILLS[window.SKILLS.length - 1].n) === 'Reading a model card',
   'with the name that was typed');
await boot(b.page, '#/skills');
ok((await b.page.locator('#main').innerText()).includes('Reading a model card'),
   'and it appears in the skill matrix, which is what mastery is tracked against');

console.log('\n— writing a question against it —');
const skillId = await b.page.evaluate(() => window.SKILLS[window.SKILLS.length - 1].id);
await boot(b.page, '#/studio/items');
await b.page.getByText('+ New question', { exact: true }).click();
await b.page.waitForSelector('.sform');
await b.page.locator('.sform .sfield:has(> label:text-is("skill")) select').selectOption(skillId);
await b.page.locator('.sform > .sfield:has(> label:text-is("question")) textarea')
  .fill('What does a model card tell you that a benchmark score does not?');
const opts = b.page.locator('.sform .sfield:has(> label:text-is("Options")) .srow');
await opts.nth(0).locator('input[type=text]').fill('Its intended use and known limits');
await opts.nth(1).locator('input[type=text]').fill('Its rank on a leaderboard');
await b.page.locator('.sform .sfield:has(> label:text-is("explanation")) textarea')
  .fill('A card states what the model is for and where it fails; a score does not.');
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
const pubmsg = await text(b.page, '.sbar .sbarmsg.ok');
ok(/Published/.test(pubmsg), 'the new question publishes', pubmsg);
ok(await b.page.evaluate(() => window.ENG.ITEMS.length) === N.items + 1, 'the engine picked it up');
ok((await b.page.evaluate(sk => (window.ENG.bySkill[sk] || []).length, skillId)) === 1,
   'and filed it under the new skill, so that skill can now be practised');

console.log('\n— reference tables —');
await boot(b.page, '#/studio/reference');
ok(await b.page.locator('.sitem').count() === 11, 'all eleven reference tables are listed');
const glossBefore = await b.page.evaluate(() => window.GLOSSARY.length);
await boot(b.page, '#/studio/reference/GLOSSARY');
const grown = await b.page.evaluate(() => {
  const g = JSON.parse(JSON.stringify(window.GLOSSARY));
  g.push(JSON.parse(JSON.stringify(g[0])));
  return JSON.stringify(g, null, 2);
});
await b.page.locator('textarea').first().fill(grown);
await b.page.getByText('Apply to draft').click();
ok(/Applied/.test(await text(b.page, '.sbarmsg.ok')), 'the reference edit applies to the draft',
   await text(b.page, '.sbarmsg.ok'));
await b.page.locator('.sbar button.primary').first().click();
await b.page.waitForSelector('.sbar .sbarmsg.ok', { timeout: 15000 });
ok(await b.page.evaluate(() => window.GLOSSARY.length) === glossBefore + 1,
   'and publishing makes it live');

console.log('\n— everything above survives on a device that was never touched —');
const g = await newDevice(false);
await boot(g.page);
ok(await g.page.evaluate(() => window.SKILLS.length) === before + 1, 'the new skill is there');
ok(await g.page.evaluate(() => window.ENG.ITEMS.length) === N.items + 1, 'the new question is there');
ok(await g.page.evaluate(() => window.CHAPTERS[0].title) === 'What Actually Happens When You Ask',
   'the retitled chapter is there');

console.log('\n— the reading asks questions, and they count —');
const r0 = await newDevice(true, 'chapterreader');   // its own account: the section below asserts a clean one
await boot(r0.page, '#/ch/ch1');
await r0.page.waitForSelector('.chead');
ok(await r0.page.locator('.cp').count() >= 5, 'chapter 1 interleaves checkpoints through the reading',
   await r0.page.locator('.cp').count());
ok(/0 \/ \d+/.test(await text(r0.page, '.cpstrip')), 'and the header counts them',
   await text(r0.page, '.cpstrip'));
const inlineQ = r0.page.locator('.cp .qcard').first();
await inlineQ.scrollIntoViewIfNeeded();
const stem = await inlineQ.locator('.qstem').innerText();
await inlineQ.locator('.opt').first().click();
await inlineQ.locator('.conf').first().click();
await inlineQ.locator('button.primary.big').click();
await r0.page.waitForTimeout(400);
ok(await r0.page.locator('.cp .verdict').count() >= 1, 'answering one gives a verdict there and then');
ok(await r0.page.locator('.cp .why').count() >= 1, 'with the explanation attached');
ok(await r0.page.evaluate(() => Object.values(window.STORE.S.sk).some(x => x && x.n > 0)),
   'a question answered while reading moves real mastery');
ok(await r0.page.evaluate(() => window.STORE.S.att.length) === 1,
   'and lands in the attempt log like any other answer');
ok(await r0.page.evaluate(() => Object.keys(window.STORE.S.srs).length) === 1,
   'and schedules itself for review');
ok(/1 \/ \d+/.test(await text(r0.page, '.cpstrip')), 'the header count moves as you answer',
   await text(r0.page, '.cpstrip'));

console.log('\n— a checkpoint is not asked twice by accident —');
await revisit(r0.page);
ok(await r0.page.locator('.qdone').count() === 1, 'on the next visit it shows as already answered');
ok((await r0.page.locator('.qdone').innerText()).includes(stem.slice(0, 30)),
   'with the question and its explanation still there');
ok(await r0.page.evaluate(() => window.STORE.S.att.length) === 1,
   'and re-reading did not re-score it');

console.log('\n— predict before you look —');
const pred = r0.page.locator('.cp-pred').first();
await pred.scrollIntoViewIfNeeded();
ok(await pred.locator('.why').count() === 0, 'the answer is hidden until a prediction is committed');
await pred.locator('input, textarea').first().fill('It makes something up');
await pred.locator('button.primary').click();
await r0.page.waitForTimeout(300);
ok(await pred.locator('.why').count() === 1, 'committing reveals what actually happens');
ok((await pred.innerText()).includes('It makes something up'), 'and keeps your prediction beside it');
await revisit(r0.page);
ok((await r0.page.locator('.cp-pred').first().innerText()).includes('It makes something up'),
   'a committed prediction survives a reload');

console.log('\n— your turn —');
const tryb = r0.page.locator('.cp-try').first();
await tryb.scrollIntoViewIfNeeded();
const reveal = tryb.getByText('Show what a strong answer contains');
ok(await reveal.isDisabled(), 'the model answer is locked until you write your own');
await tryb.locator('textarea').fill('It forgets everything between messages, so we resend the whole conversation each time and pay for it.');
await r0.page.waitForTimeout(700);
ok(!(await reveal.isDisabled()), 'writing something unlocks it');
await reveal.click();
ok(await tryb.locator('.why').count() === 1, 'and it appears');
await revisit(r0.page);
ok((await r0.page.locator('.cp-try').first().locator('textarea').inputValue()).length > 20,
   'what you wrote is still there next time');
ok(/3 \/ \d+/.test(await text(r0.page, '.cpstrip')), 'all three kinds count towards the chapter',
   await text(r0.page, '.cpstrip'));

console.log('\n— reading the app does not write to it —');
/* Its own account, so nothing above can move the version underneath it. */
const r1 = await newDevice(true, 'reader');
const srvVersion = p => p.evaluate(async () =>
  (await (await fetch('/api/state', { headers: { 'x-aifz': '1' } })).json()).version);
await boot(r1.page);
await r1.page.waitForFunction(() => ['ok', 'pulled'].includes(window.ACCOUNT.state), null, { timeout: 20000 });
for (const hash of ['#/skills', '#/analytics', '#/practice', '#/library', '#/']) await boot(r1.page, hash);
await r1.page.waitForTimeout(3500);          // longer than the 2.5s push debounce
ok(await srvVersion(r1.page) === 0, 'browsing five pages saved nothing to the server',
   await srvVersion(r1.page));
ok(await r1.page.evaluate(() => Object.keys(window.STORE.S.sk).length) === 0,
   'and wrote no skill records for skills that were only looked at',
   await r1.page.evaluate(() => Object.keys(window.STORE.S.sk).length));
await r1.page.evaluate(async () => {
  window.dispatchEvent(new Event('online'));
  await new Promise(r => setTimeout(r, 1200));
});
ok(await srvVersion(r1.page) === 0, 'and coming back online with nothing to send pushes nothing',
   await srvVersion(r1.page));
/* But a real change still goes up, so the guard is not simply switching pushing off. */
await r1.page.evaluate(async () => {
  window.STORE.S.done = Object.assign({}, window.STORE.S.done, { chReal: Date.now() });
  window.STORE.flush();
  window.ACCOUNT.onChange(true);
  await new Promise(r => setTimeout(r, 2000));
});
ok(await srvVersion(r1.page) === 1, 'while actual work is still pushed', await srvVersion(r1.page));

/* And the record a real answer is supposed to create still gets created. */
await boot(r1.page, '#/practice/mixed');
await r1.page.waitForSelector('.qstem');
const askedSkill = await r1.page.evaluate(() => window.STORE.S.sk);
ok(Object.keys(askedSkill).length === 0, 'opening a drill has still written nothing');
await r1.page.locator('.qbody .opt, .qbody input, .qbody button').first().click();
await r1.page.locator('.confrow .conf').first().click();
await r1.page.locator('button.primary.big').first().click();
await r1.page.waitForTimeout(400);
const measured = await r1.page.evaluate(() => window.STORE.S.sk);
ok(Object.values(measured).some(x => x && x.n > 0),
   'answering one question does record mastery against its skill',
   JSON.stringify(measured).slice(0, 160));
await r1.page.waitForTimeout(3500);
ok(await srvVersion(r1.page) === 2, 'and that answer reaches the server on its own',
   await srvVersion(r1.page));

console.log('\n— progress still syncs across devices —');
/* A fresh pair, because b and d have deliberately diverged above. */
const settled = () => ['ok', 'pulled'].includes(window.ACCOUNT.state);
const h1 = await newDevice(true);
await boot(h1.page, '#/practice');
await h1.page.waitForFunction(settled, null, { timeout: 20000 });
await h1.page.evaluate(async () => {
  window.STORE.S.done = Object.assign({}, window.STORE.S.done, { chSync: Date.now() });
  window.STORE.flush();            // write now rather than on the 250ms debounce
  window.ACCOUNT.onChange(true);   // and push it rather than 2.5s later
  await new Promise(r => setTimeout(r, 2000));
});
ok(await h1.page.evaluate(settled), 'the push left the account in sync',
   await h1.page.evaluate(async () => {
     const srv = await (await fetch('/api/state', { headers: { 'x-aifz': '1' } })).json();
     return JSON.stringify({ state: window.ACCOUNT.state, detail: window.ACCOUNT.detail,
       meta: window.REMOTE.meta(), serverVersion: srv.version, serverDevice: srv.device,
       serverDone: srv.data && Object.keys(srv.data.done || {}) }); }));
const e = await newDevice(true);
await boot(e.page);
await e.page.waitForFunction(() => window.STORE.S.done && window.STORE.S.done.chSync,
  null, { timeout: 20000 });
ok(await e.page.evaluate(() => !!window.STORE.S.done.chSync),
   'a chapter marked done on one device shows up on another');
ok(await e.page.evaluate(() => window.ENG.ITEMS.length) === N.items + 1,
   'and that device has the edited curriculum too — one account, both halves');

console.log('\n— telling the truth about a half-configured deployment —');
const noDb = await newDevice(false);
await noDb.ctx.route('**/api/health', r => r.fulfill({ status: 200,
  contentType: 'application/json',
  body: JSON.stringify({ ok: true, database: false, dbReady: false, dbError: null, signIn: false }) }));
await boot(noDb.page, '#/data');
await noDb.page.waitForTimeout(600);
ok(/No database is attached/.test(await mainText(noDb.page)),
   'a deployment with no DATABASE_URL says so, and says what to do',
   (await mainText(noDb.page)).slice(0, 120));
const noAuth = await newDevice(false);
await noAuth.ctx.route('**/api/health', r => r.fulfill({ status: 200,
  contentType: 'application/json',
  body: JSON.stringify({ ok: true, database: true, dbReady: true, dbError: null, signIn: false }) }));
await boot(noAuth.page, '#/data');
await noAuth.page.waitForTimeout(600);
const t = await mainText(noAuth.page);
ok(/no GitHub OAuth app is set/.test(t), 'a deployment with no OAuth app says so');
ok(/\/api\/auth\/callback/.test(t), 'and quotes the callback URL to paste in', t.slice(0, 200));
ok(!/wrangler|npx /.test(t), 'without telling anyone to run a command-line tool');

console.log('\n— falling back when the database is unreachable —');
const f = await newDevice(false);
await f.ctx.route('**/api/content*', r => r.abort());
await f.page.goto(B + '/');
await f.page.waitForFunction(() => window.CONTENT && window.CHAPTERS);
ok(await f.page.evaluate(() => window.CHAPTERS.length) === N.chapters, 'the app still opens with a full curriculum');
ok(['built-in', 'cache'].includes(await f.page.evaluate(() => window.CONTENT.source)), 'and says where the content came from');

await browser.close();
console.log('\n' + pass + ' passed, ' + fail + ' failed\n');
process.exit(fail ? 1 : 0);
