#!/usr/bin/env node
/* tools/narrate.mjs against a pretend Gemini.

   The pretend voice "speaks" each paragraph as a tone whose pitch says which
   paragraph it is (Para 3 → its own pitch), with short pauses between
   sentences and longer ones between paragraphs, the way a real narrator
   does. So the test can check, from the audio alone, that each start time in
   a chapter's JSON lands on the right paragraph. It also checks that a
   finished chapter is not recorded twice, that a per-minute limit is waited
   out, that the end of the day's quota stops the run cleanly without half a
   chapter, and that the voice samples list Indian voices first. */
import fs from 'node:fs';
import p from 'node:path';
import os from 'node:os';
import http from 'node:http';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = p.dirname(p.dirname(fileURLToPath(import.meta.url)));
let pass = 0, fail = 0;
const ok = (c, m, extra) => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (extra ? ' ' + extra : '')); } };

const RATE = 24000;
const freqOf = n => 300 + 70 * (n % 9);
function tone(sec, f, amp = 6000) {
  const a = new Int16Array(Math.round(sec * RATE));
  for (let i = 0; i < a.length; i++) a[i] = Math.round(amp * Math.sin(2 * Math.PI * f * i / RATE)) + Math.round((Math.random() - 0.5) * 30);
  return a;
}
const hush = sec => tone(sec, 50, 0);
function wav(pcm) {
  const b = Buffer.alloc(44 + pcm.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + pcm.length * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(RATE, 24);
  b.writeUInt32LE(RATE * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(pcm.length * 2, 40);
  for (let i = 0; i < pcm.length; i++) b.writeInt16LE(pcm[i], 44 + i * 2);
  return b;
}
function speakLike(text) {
  const parts = [hush(0.4)];
  text.split('\n\n').forEach((para, k) => {
    if (k) parts.push(hush(0.75));
    const m = /Para (\d+)/.exec(para);
    const f = m ? freqOf(+m[1]) : 1500;
    const sents = para.split(/(?<=\.)\s+/);
    sents.forEach((s, j) => { if (j) parts.push(hush(0.3)); parts.push(tone(Math.max(0.4, s.length * 0.018), f)); });
  });
  parts.push(hush(0.5));
  const n = parts.reduce((a, x) => a + x.length, 0), out = new Int16Array(n);
  let o = 0; for (const x of parts) { out.set(x, o); o += x.length; }
  return out;
}

/* ---- the pretend service ---- */
const state = { calls: 0, dailyAfter: Infinity, minuteOnce: false, voices: 0, styles: [] };
const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', d => body += d);
  req.on('end', () => {
    const send = (code, j) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(j)); };
    if (req.headers['x-goog-api-key'] !== 'test-key') return send(403, { error: { code: 403, message: 'bad key' } });
    if (req.method === 'GET' && req.url.startsWith('/v1beta/voices')) {
      state.voices++;
      return send(200, { voices: [
        { name: 'voices/asha-in', voice: 'asha-in', display_name: 'Asha', language_codes: ['en-IN'], gender: 'female', accent: 'Indian' },
        { name: 'voices/ravi-hi', voice: 'ravi-hi', display_name: 'Ravi', language_codes: ['hi-IN'], gender: 'male', accent: 'Indian' }] });
    }
    if (req.method === 'POST' && req.url === '/v1beta/interactions') {
      if (state.minuteOnce) { state.minuteOnce = false; return send(429, { error: { code: 429, message: 'Resource exhausted: requests per minute', details: [{ '@type': 'type.googleapis.com/google.rpc.RetryInfo', retryDelay: '1s' }] } }); }
      if (state.calls >= state.dailyAfter) return send(429, { error: { code: 429, message: 'You exceeded your current quota', details: [
        { '@type': 'type.googleapis.com/google.rpc.QuotaFailure', violations: [{ quotaId: 'GenerateRequestsPerDayPerProjectPerModel-FreeTier' }] },
        { '@type': 'type.googleapis.com/google.rpc.RetryInfo', retryDelay: '40000s' }] } });
      state.calls++;
      const j = JSON.parse(body);
      const text = j.input[0].content[0].text;
      state.styles.push((j.input[0].content[0].annotations[0] || {}).style || '');
      if (!j.generation_config || !j.generation_config.speech_config[0].voice) return send(400, { error: { message: 'no voice' } });
      return send(200, { id: 'x', steps: [{ type: 'model_output', content: [{ type: 'audio', data: wav(speakLike(text)).toString('base64') }] }] });
    }
    send(404, { error: { message: 'no such route ' + req.url } });
  });
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const API = `http://127.0.0.1:${server.address().port}/v1beta`;

/* ---- a small pretend book ---- */
const tmp = fs.mkdtempSync(p.join(os.tmpdir(), 'narrate-'));
const words = n => Array.from({ length: n }, (_, i) => ['plain', 'words', 'about', 'a', 'machine', 'that', 'reads'][i % 7]).join(' ');
function chapter(lang, file, n) {
  const segs = [[0, `Chapter ${n}. Title ${n}.`]];
  for (let i = 1; i <= 9; i++) {
    const sents = 1 + (i * 7 % 4);
    segs.push([i, Array.from({ length: sents }, (_, s) => (s ? '' : `Para ${i}. `) + words(8 + (i * 13 + s * 5) % 30) + '.').join(' ')]);
  }
  /* one paragraph longer than a request, which has to be split */
  segs.push([10, 'Para 10. ' + Array.from({ length: 12 }, () => words(30) + '.').join(' ')]);
  const dir = p.join(tmp, 'book', lang === 'hi' ? 'hi/say' : 'say');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(p.join(dir, file.replace('.html', '.json')), JSON.stringify({ v: 1, lang, file, title: 'T' + n, n, hash: 'h' + lang + n, segs }));
  return segs;
}
const books = { en: ['01-one.html', '02-two.html', '03-three.html'].map((f, i) => [f, chapter('en', f, i + 1)]), hi: [['01-ek.html', chapter('hi', '01-ek.html', 1)]] };
chapter('en', 'preface.html', 0);
const cfg = JSON.parse(fs.readFileSync(p.join(ROOT, 'book/narration.json'), 'utf8'));
cfg.en.voice = 'asha-in'; cfg.hi.voice = 'Kore'; cfg.chunkChars = 900;
fs.writeFileSync(p.join(tmp, 'narration.json'), JSON.stringify(cfg));

const run = (...a) => new Promise(res => {
  const c = spawn(process.execPath, [p.join(ROOT, 'tools/narrate.mjs'), ...a], { env: { ...process.env, GEMINI_API_KEY: 'test-key', NARRATE_API: API,
    NARRATE_ENCODE: 'wav', NARRATE_GAP_MS: '0', NARRATE_SITE: tmp, NARRATE_CONFIG: p.join(tmp, 'narration.json') } });
  let out = ''; c.stdout.on('data', d => out += d); c.stderr.on('data', d => out += d);
  c.on('exit', code => res({ code, out }));
});
function readWav(f) {
  const b = fs.readFileSync(f), pcm = new Int16Array((b.length - 44) / 2);
  for (let i = 0; i < pcm.length; i++) pcm[i] = b.readInt16LE(44 + i * 2);
  return pcm;
}
function pitchAt(pcm, t) {
  const a = Math.round((t + 0.12) * RATE), n = Math.round(0.2 * RATE);
  let z = 0;
  for (let i = a + 1; i < Math.min(pcm.length, a + n); i++) if ((pcm[i - 1] < 0) !== (pcm[i] < 0)) z++;
  return z / 2 / 0.2;
}

console.log('\n— recording a chapter, and where each paragraph starts —');
let r = await run('record', '--lang', 'en', '--max', '2');
ok(r.code === 0, 'a run records chapters and exits cleanly', r.out.slice(-400));
const m1 = JSON.parse(fs.readFileSync(p.join(tmp, 'audio/en/preface.json'), 'utf8'));
ok(m1.src === 'preface.wav' && m1.voice === 'asha-in' && m1.hash === 'hen0' && m1.segs.length === 11, 'the preface comes first, with one start time per paragraph', JSON.stringify(m1).slice(0, 200));
const m2 = JSON.parse(fs.readFileSync(p.join(tmp, 'audio/en/01-one.json'), 'utf8'));
const pcm = readWav(p.join(tmp, 'audio/en/01-one.wav'));
const wrong = m2.segs.slice(1).filter(([id, t]) => Math.abs(pitchAt(pcm, t) - freqOf(id)) > 25).map(([id, t]) => `${id}@${t}:${Math.round(pitchAt(pcm, t))}≠${freqOf(id)}`);
ok(!wrong.length, 'every paragraph’s start time lands on that paragraph’s own voice', wrong.join(' '));
ok(m2.segs.every((s, i) => i === 0 || s[1] > m2.segs[i - 1][1]), 'and the start times only move forward');
ok(Math.abs(m2.dur - pcm.length / RATE) < 0.05, 'the length in the JSON is the length of the audio', m2.dur + ' vs ' + pcm.length / RATE);
ok(!fs.existsSync(p.join(tmp, 'audio/en/02-two.json')), '--max stops after that many chapters');
ok(state.styles.every(s => !/Indian English accent/.test(s)), 'an Indian voice is not told to put on an accent');
const idx = JSON.parse(fs.readFileSync(p.join(tmp, 'audio/en/index.json'), 'utf8'));
ok(idx.done === 2 && idx.total === 4 && idx.voice === 'asha-in', 'the edition’s index counts what is recorded', JSON.stringify(idx).slice(0, 200));

console.log('\n— running again —');
let before = state.calls;
state.minuteOnce = true;
r = await run('record', '--lang', 'en', '--max', '1');
ok(r.code === 0 && fs.existsSync(p.join(tmp, 'audio/en/02-two.json')), 'a per-minute limit is waited out, and the next chapter is recorded', r.out.slice(-300));
ok(!/recording preface|recording 01-one/.test(r.out), 'chapters already recorded from the same words are skipped');

console.log('\n— the end of the day’s quota —');
state.dailyAfter = state.calls + 1;
r = await run('record', '--lang', 'en,hi');
ok(r.code === 0 && /quota for today is used up/.test(r.out), 'the run stops cleanly when the day’s quota is used up', r.out.slice(-300));
ok(!fs.existsSync(p.join(tmp, 'audio/en/03-three.json')) && !fs.existsSync(p.join(tmp, 'audio/en/03-three.wav')), 'and leaves no half-recorded chapter behind');
state.dailyAfter = Infinity;
before = state.calls;
r = await run('record', '--lang', 'en,hi');
ok(r.code === 0 && fs.existsSync(p.join(tmp, 'audio/en/03-three.json')) && fs.existsSync(p.join(tmp, 'audio/hi/01-ek.json')), 'the next day carries on where it stopped, in both editions', r.out.slice(-300));
ok(state.styles.slice(-3).some(s => /Indian accent/.test(s) && /Hindi written in English letters/.test(s)), 'a general voice is told to speak with an Indian accent, and how to read Hinglish');

console.log('\n— a changed chapter is recorded again —');
const f1 = p.join(tmp, 'book/say/01-one.json');
const j1 = JSON.parse(fs.readFileSync(f1, 'utf8')); j1.hash = 'changed'; fs.writeFileSync(f1, JSON.stringify(j1));
r = await run('record', '--lang', 'en');
ok(/recording 01-one/.test(r.out) && !/recording 02-two/.test(r.out), 'only the chapter whose words changed', r.out.slice(-300));

console.log('\n— voice samples —');
r = await run('samples');
const sm = JSON.parse(fs.readFileSync(p.join(tmp, 'audio/samples/samples.json'), 'utf8'));
ok(r.code === 0 && state.voices === 1, 'the voice library is asked for Indian voices', r.out.slice(-300));
ok(sm.en[0].voice === 'asha-in' && sm.en[0].indian && sm.hi[0].voice === 'ravi-hi', 'Indian voices come first in each edition', JSON.stringify(sm.en.map(x => x.voice)));
ok(sm.en.length === 6 && sm.en.every(x => x.src && fs.existsSync(p.join(tmp, 'audio/samples', x.src))), 'six samples per edition, each with its audio', JSON.stringify(sm.en.map(x => x.src)));

console.log('\n— the nightly run —');
fs.rmSync(p.join(tmp, 'audio/samples'), { recursive: true, force: true });
let v0 = state.voices;
r = await run('auto');
ok(r.code === 0 && state.voices === v0 + 1 && fs.existsSync(p.join(tmp, 'audio/samples/samples.json')), 'with no samples yet, it records them first', r.out.slice(-300));
ok(/::notice title=Voice samples::en: 6 of 6 recorded/.test(r.out) && /::notice title=Narration::en: 4 of 4 chapters/.test(r.out), 'and leaves a short summary on the run', r.out.slice(-400));
v0 = state.voices;
r = await run('auto');
ok(r.code === 0 && state.voices === v0, 'the next night it does not record the samples again');

console.log('\n— the real file format —');
{
  const ff = spawnSync('ffmpeg', ['-hide_banner', '-encoders'], { encoding: 'utf8' });
  ok(ff.status === 0 && /libopus/.test(ff.stdout), 'ffmpeg with Opus is installed (CI installs it; so does the narration workflow)');
  if (ff.status === 0) {
    const e = await new Promise(res => {
      const c = spawn(process.execPath, [p.join(ROOT, 'tools/narrate.mjs'), 'record', '--lang', 'en', '--only', '02-two.html'], { env: { ...process.env, GEMINI_API_KEY: 'test-key', NARRATE_API: API,
        NARRATE_GAP_MS: '0', NARRATE_SITE: tmp, NARRATE_CONFIG: p.join(tmp, 'narration.json') } });
      let out = ''; c.stdout.on('data', d => out += d); c.stderr.on('data', d => out += d); c.on('exit', code => res({ code, out }));
    });
    const m = JSON.parse(fs.readFileSync(p.join(tmp, 'audio/en/02-two.json'), 'utf8'));
    const f = p.join(tmp, 'audio/en/02-two.webm');
    const size = fs.existsSync(f) ? fs.statSync(f).size : 0;
    const probe = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration:stream=codec_name', '-of', 'json', f], { encoding: 'utf8' });
    const info = probe.status === 0 ? JSON.parse(probe.stdout) : {};
    const dur = Number((info.format || {}).duration);
    ok(e.code === 0 && m.src === '02-two.webm' && size > 0 && size < m.dur * 4500 && (info.streams || [])[0].codec_name === 'opus' && Math.abs(dur - m.dur) < 0.2,
       'a chapter is saved as Opus at about 24 kbit/s, as long as its JSON says', JSON.stringify({ code: e.code, size, dur, json: m.dur, out: e.out.slice(-200) }));
  }
}

console.log('\n— without a key —');
const nk = await new Promise(res => {
  const c = spawn(process.execPath, [p.join(ROOT, 'tools/narrate.mjs'), 'record'], { env: { ...process.env, GEMINI_API_KEY: '', NARRATE_SITE: tmp } });
  let out = ''; c.stdout.on('data', d => out += d); c.on('exit', code => res({ code, out }));
});
ok(nk.code === 0 && /GEMINI_API_KEY is not set/.test(nk.out), 'it says what is missing and records nothing', nk.out);

server.close();
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
