#!/usr/bin/env node
/* Records the book's narration with Gemini's speech models.

   node tools/narrate.mjs samples [--lang en,hi]
       Records a short passage in several candidate voices for each edition,
       into dist/site/audio/samples/, listed by /book/voices.html. Indian voices
       from Gemini's voice library come first, then a few general voices told
       to speak with an Indian accent.

   node tools/narrate.mjs auto [--lang en,hi]
       What the nightly run does: samples, when there are none yet for this
       round (samples.round in book/narration.json), then record.

   node tools/narrate.mjs record [--lang en,hi] [--max N] [--only 09-the-first-conversation.html]
       Records whole chapters in the voices set in book/narration.json, into
       dist/site/audio/<lang>/<chapter>.webm with <chapter>.json beside it. The
       JSON says when each paragraph starts, so the book can highlight the one
       being read. A chapter already recorded from the same words, voice, style
       and model is skipped, so this can run every day until the book is done;
       it stops cleanly when the day's free quota runs out.

   It reads the words from the built book (dist/site/book/say/*.json and
   dist/site/book/hi/say/*.json), so run `node build.js` first.

   Environment: GEMINI_API_KEY (required), NARRATE_API (another endpoint, for
   the tests), NARRATE_ENCODE=wav (skip ffmpeg, for the tests), NARRATE_GAP_MS
   (pause between requests), NARRATE_MINUTES (stop starting new chapters after
   this long), NARRATE_SITE (output root). */
import fs from 'node:fs';
import p from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = p.dirname(p.dirname(fileURLToPath(import.meta.url)));
const SITE = process.env.NARRATE_SITE || p.join(ROOT, 'dist/site');
const API = (process.env.NARRATE_API || 'https://generativelanguage.googleapis.com/v1beta').replace(/\/$/, '');
const KEY = process.env.GEMINI_API_KEY || '';
const CFG = JSON.parse(fs.readFileSync(process.env.NARRATE_CONFIG || p.join(ROOT, 'book/narration.json'), 'utf8'));
const ENCODE = process.env.NARRATE_ENCODE || 'opus';
let gap = Number(process.env.NARRATE_GAP_MS ?? 4000);
const DEADLINE = Date.now() + Number(process.env.NARRATE_MINUTES || 270) * 60000;
const FORMAT = 1;                       // bump to re-record everything after a change to how audio is made
const RATE = 24000;

const args = process.argv.slice(2);
const mode = args[0];
const opt = (name, d) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : d; };
const langs = String(opt('lang', 'en,hi')).split(',').map(s => s.trim()).filter(x => x === 'en' || x === 'hi');
const maxChapters = Number(opt('max', 1000));
const only = opt('only', '');

const sleep = ms => new Promise(r => setTimeout(r, ms));
const log = (...a) => console.log(...a);
class Quota extends Error {}

/* ---------- the words ---------- */
const sayDir = lang => p.join(SITE, 'book', lang === 'hi' ? 'hi/say' : 'say');
const outDir = lang => p.join(SITE, 'audio', lang);
function chapters(lang) {
  const dir = sayDir(lang);
  if (!fs.existsSync(dir)) throw new Error(dir + ' is missing: run `node build.js` first');
  const order = f => f.startsWith('preface') ? -1 : f.startsWith('afterword') ? 1e6 : parseInt(f, 10);
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort((a, b) => order(a) - order(b))
    .map(f => JSON.parse(fs.readFileSync(p.join(dir, f), 'utf8')));
}

/* ---------- talking to Gemini ---------- */
function styleFor(lang, indian) {
  const c = CFG[lang] || {};
  return [c.style, indian ? '' : c.accent, c.hint].filter(Boolean).join(' ');
}
function findAudio(o, found = []) {
  if (!o || typeof o !== 'object') return found;
  if (Array.isArray(o)) { o.forEach(x => findAudio(x, found)); return found; }
  if (o.type === 'audio' && typeof o.data === 'string') found.push({ data: o.data, mime: o.mime_type || o.mimeType || '' });
  const inl = o.inlineData || o.inline_data;
  if (inl && typeof inl.data === 'string') found.push({ data: inl.data, mime: inl.mimeType || inl.mime_type || '' });
  for (const k of Object.keys(o)) if (k !== 'data') findAudio(o[k], found);
  return found;
}
function pcmOf(b64, mime) {
  const buf = Buffer.from(b64, 'base64');
  let rate = Number((/rate=(\d+)/.exec(mime || '') || [])[1]) || RATE, data = buf;
  if (buf.length > 12 && buf.toString('ascii', 0, 4) === 'RIFF') {
    let o = 12; data = null;
    while (o + 8 <= buf.length) {
      const id = buf.toString('ascii', o, o + 4), n = buf.readUInt32LE(o + 4);
      if (id === 'fmt ') rate = buf.readUInt32LE(o + 12);
      if (id === 'data') { data = buf.subarray(o + 8, Math.min(buf.length, o + 8 + n)); break; }
      o += 8 + n + (n % 2);
    }
    if (!data) throw new Error('a WAV reply with no audio in it');
  }
  const pcm = new Int16Array(Math.floor(data.length / 2));
  for (let i = 0; i < pcm.length; i++) pcm[i] = data.readInt16LE(i * 2);
  return { pcm, rate };
}
function quotaOf(body) {
  const e = (body && body.error) || {};
  const det = e.details || [];
  const retry = det.find(d => /RetryInfo/.test(d['@type'] || '')) || {};
  const wait = parseFloat(String(retry.retryDelay || '').replace('s', '')) || 0;
  const daily = det.some(d => (d.violations || []).some(v => /PerDay|per_day|daily/i.test((v.quotaId || '') + (v.quotaMetric || ''))))
    || /per day|daily/i.test(e.message || '');
  return { wait, daily, message: e.message || '' };
}
async function call(url, body, method = 'POST') {
  const r = await fetch(url, { method, headers: { 'x-goog-api-key': KEY, 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const text = await r.text();
  let json = null; try { json = JSON.parse(text); } catch (e) {}
  return { status: r.status, ok: r.ok, json, text };
}
async function once(text, voice, style, model) {
  if (/(^|-)2\.5-/.test(model)) {
    /* the older generateContent form, for the 2.5 preview models */
    return call(`${API}/models/${model}:generateContent`, {
      contents: [{ parts: [{ text: style ? `${style}\n\n${text}` : text }] }],
      generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } }
    });
  }
  return call(`${API}/interactions`, {
    model,
    input: [{ type: 'user_input', content: [{ type: 'text', text, annotations: style ? [{ type: 'speech_metadata', style }] : [] }] }],
    response_format: { type: 'audio' },
    generation_config: { speech_config: [{ voice }] }
  });
}
let workingModel = null;
async function speak(text, voice, style) {
  const models = workingModel ? [workingModel] : [CFG.model].concat(CFG.fallbackModels || []);
  let last = null;
  for (const model of models) {
    for (let attempt = 0; attempt < 6; attempt++) {
      if (gap) await sleep(gap);
      const r = await once(text, voice, style, model);
      if (r.ok) {
        const a = findAudio(r.json).pop();
        if (!a) throw new Error(`${model}: a reply with no audio. Keys: ${Object.keys(r.json || {}).join(', ')}`);
        workingModel = model;
        return { ...pcmOf(a.data, a.mime), model };
      }
      last = `${model}: HTTP ${r.status} ${(r.json && r.json.error && r.json.error.message) || r.text.slice(0, 300)}`;
      if (r.status === 429) {
        const q = quotaOf(r.json);
        if (q.daily || q.wait > 120) throw new Quota(q.message || 'quota used up for today');
        gap = Math.min(30000, Math.max(gap * 2, 4000));
        log(`  slowing down: ${q.message.slice(0, 120)} (waiting ${Math.ceil(q.wait || 30)} s)`);
        await sleep((q.wait || 30) * 1000 + 500);
        continue;
      }
      if (r.status >= 500) { await sleep(5000 * 2 ** attempt); continue; }
      break;                                 // 4xx: this model will not do, try the next one
    }
    if (workingModel) break;
    log('  ' + last);
  }
  throw new Error(last || 'no model answered');
}

/* ---------- listening to the result: where the pauses are ---------- */
function rms(pcm, rate, ms = 20) {
  const n = Math.round(rate * ms / 1000), out = new Float32Array(Math.ceil(pcm.length / n));
  for (let f = 0; f < out.length; f++) {
    let s = 0, c = 0;
    for (let i = f * n; i < Math.min(pcm.length, (f + 1) * n); i++) { s += pcm[i] * pcm[i]; c++; }
    out[f] = c ? Math.sqrt(s / c) : 0;
  }
  return { out, step: ms / 1000 };
}
function threshold(r) {
  const s = Array.from(r).sort((a, b) => a - b);
  const loud = s[Math.floor(s.length * 0.9)] || 0;
  return Math.max(loud * 0.06, 40);
}
export function pauses(pcm, rate, minLen = 0.28) {
  const { out, step } = rms(pcm, rate), thr = threshold(out), res = [];
  let a = -1;
  for (let f = 0; f <= out.length; f++) {
    const quiet = f < out.length && out[f] < thr;
    if (quiet && a < 0) a = f;
    if (!quiet && a >= 0) { if ((f - a) * step >= minLen) res.push({ a: a * step, b: f * step }); a = -1; }
  }
  return res;
}
function trim(pcm, rate, keep = 0.12) {
  const { out, step } = rms(pcm, rate), thr = threshold(out);
  let s = 0, e = out.length - 1;
  while (s < out.length && out[s] < thr) s++;
  while (e > s && out[e] < thr) e--;
  const from = Math.max(0, Math.floor((s * step - keep) * rate)), to = Math.min(pcm.length, Math.ceil(((e + 1) * step + keep) * rate));
  return pcm.subarray(from, to);
}
/* Where each paragraph after the first starts, in seconds from the start of
   the clip: the pause nearest to where its share of the characters says it
   should be, preferring longer pauses; the estimate itself if none is near. */
export function boundaries(pcm, rate, texts) {
  const dur = pcm.length / rate, n = texts.length;
  if (n < 2) return [];
  /* a paragraph takes time for its letters and a little more for each
     sentence (the small pause and the fall of the voice at its end) */
  const PARA = 0.6, SENT = 0.25;
  const lens = texts.map(t => t.length), sents = texts.map(t => Math.max(1, (t.match(/[.!?…]+(\s|$)/g) || []).length));
  const total = lens.reduce((a, b) => a + b, 0), totalS = sents.reduce((a, b) => a + b, 0);
  const per = Math.max(0.005, (dur - (n - 1) * PARA - totalS * SENT) / total);
  const cand = pauses(pcm, rate);
  const out = [];
  let est = 0, prev = 0;
  for (let k = 1; k < n; k++) {
    est += lens[k - 1] * per + sents[k - 1] * SENT;
    const want = est + (k - 0.5) * PARA;
    const win = Math.max(4, 0.3 * (lens[k - 1] * per + sents[k - 1] * SENT));
    let best = null, score = Infinity;
    for (const c of cand) {
      if (c.b <= prev + 0.3) continue;
      const mid = (c.a + c.b) / 2, d = Math.abs(mid - want);
      if (d > win) continue;
      /* paragraph breaks are the longer pauses: length counts for more than nearness */
      const sc = d - 2.5 * (c.b - c.a);
      if (sc < score) { score = sc; best = c; }
    }
    const at = best ? Math.max(prev + 0.3, best.b - 0.08) : Math.max(prev + 0.3, want);
    out.push(at); prev = at;
  }
  return out;
}

/* ---------- files ---------- */
function wav(pcm, rate) {
  const b = Buffer.alloc(44 + pcm.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + pcm.length * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(rate, 24);
  b.writeUInt32LE(rate * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(pcm.length * 2, 40);
  for (let i = 0; i < pcm.length; i++) b.writeInt16LE(pcm[i], 44 + i * 2);
  return b;
}
function save(pcm, rate, target) {
  fs.mkdirSync(p.dirname(target), { recursive: true });
  if (ENCODE === 'wav') { fs.writeFileSync(target.replace(/\.webm$/, '.wav'), wav(pcm, rate)); return p.basename(target).replace(/\.webm$/, '.wav'); }
  const tmp = p.join(os.tmpdir(), 'narrate-' + process.pid + '-' + Date.now() + '.wav');
  fs.writeFileSync(tmp, wav(pcm, rate));
  const r = spawnSync(process.env.NARRATE_FFMPEG || 'ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-ac', '1', '-c:a', 'libopus', '-b:a', '24k', '-application', 'audio', target], { stdio: 'inherit' });
  fs.rmSync(tmp, { force: true });
  if (r.status !== 0) throw new Error('ffmpeg could not encode ' + target);
  return p.basename(target);
}
function joinPcm(parts) {
  const n = parts.reduce((a, x) => a + x.length, 0), out = new Int16Array(n);
  let o = 0; for (const x of parts) { out.set(x, o); o += x.length; }
  return out;
}
const readJSON = f => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return null; } };

/* ---------- one chapter ---------- */
function pieces(segs, limit) {
  /* a paragraph longer than one request is split at sentence ends; only its
     first piece marks where the paragraph starts */
  const items = [];
  for (const [id, text] of segs) {
    if (text.length <= limit) { items.push({ id, text, first: true }); continue; }
    const sents = text.match(/[^.!?…]+[.!?…]+["”’)\]]*\s*|[^.!?…]+$/g) || [text];
    let buf = '', first = true;
    for (const s of sents) {
      if (buf && (buf + s).length > limit) { items.push({ id, text: buf.trim(), first }); first = false; buf = ''; }
      buf += s;
    }
    if (buf.trim()) items.push({ id, text: buf.trim(), first });
  }
  const chunks = [];
  let cur = [], len = 0;
  for (const it of items) {
    if (cur.length && len + it.text.length > limit) { chunks.push(cur); cur = []; len = 0; }
    cur.push(it); len += it.text.length + 2;
  }
  if (cur.length) chunks.push(cur);
  return chunks;
}
async function recordChapter(lang, ch, voice, style, recHash) {
  const chunks = pieces(ch.segs, CFG.chunkChars || 2200);
  const parts = [], starts = {};
  let t = 0, rate = RATE, model = null;
  const GAP = 0.45;
  for (let c = 0; c < chunks.length; c++) {
    const items = chunks[c];
    process.stdout.write(`  ${ch.file} ${c + 1}/${chunks.length}\r`);
    const a = await speak(items.map(x => x.text).join('\n\n'), voice, style);
    if (parts.length && a.rate !== rate) throw new Error('the voice changed sample rate mid-chapter');
    rate = a.rate; model = a.model;
    const pcm = trim(a.pcm, rate);
    const at = [0].concat(boundaries(pcm, rate, items.map(x => x.text)));
    items.forEach((it, i) => { if (it.first && starts[it.id] == null) starts[it.id] = +(t + at[i]).toFixed(2); });
    parts.push(pcm);
    t += pcm.length / rate;
    if (c < chunks.length - 1) { parts.push(new Int16Array(Math.round(GAP * rate))); t += GAP; }
  }
  const base = ch.file.replace(/\.html$/, '');
  const src = save(joinPcm(parts), rate, p.join(outDir(lang), base + '.webm'));
  const man = { v: FORMAT, hash: ch.hash, rec: recHash, voice, model, dur: +t.toFixed(2), src,
    segs: ch.segs.map(([id]) => [id, starts[id] ?? 0]), at: new Date().toISOString() };
  fs.writeFileSync(p.join(outDir(lang), base + '.json'), JSON.stringify(man));
  return man;
}
function writeIndex(lang) {
  const dir = outDir(lang);
  if (!fs.existsSync(dir)) return;
  const all = chapters(lang), list = {};
  let secs = 0;
  for (const ch of all) {
    const m = readJSON(p.join(dir, ch.file.replace(/\.html$/, '.json')));
    if (m && m.hash === ch.hash) { list[ch.file] = { dur: m.dur, voice: m.voice }; secs += m.dur; }
  }
  fs.writeFileSync(p.join(dir, 'index.json'), JSON.stringify({ voice: (CFG[lang] || {}).voice, total: all.length,
    done: Object.keys(list).length, seconds: Math.round(secs), chapters: list }));
}

/* ---------- the two jobs ---------- */
async function record() {
  let made = 0;
  for (const lang of langs) {
    const c = CFG[lang] || {};
    if (!c.voice) { log(`${lang}: no voice chosen yet. Listen on /book/voices.html, then set "voice" in book/narration.json.`); continue; }
    const indian = !(CFG.samples && (CFG.samples.prebuilt || []).includes(c.voice));
    const style = c.styleOverride || styleFor(lang, indian);
    fs.mkdirSync(outDir(lang), { recursive: true });
    for (const ch of chapters(lang)) {
      if (only && ch.file !== only) continue;
      const recHash = crypto.createHash('sha1').update(JSON.stringify([FORMAT, ch.hash, c.voice, style, CFG.model])).digest('hex').slice(0, 16);
      const old = readJSON(p.join(outDir(lang), ch.file.replace(/\.html$/, '.json')));
      if (!only && old && old.rec === recHash) continue;
      if (made >= maxChapters) { log(`stopping: ${maxChapters} chapters this run`); writeIndex(lang); return; }
      if (Date.now() > DEADLINE) { log('stopping: out of time for this run'); writeIndex(lang); return; }
      log(`${lang}: recording ${ch.file} (${ch.segs.reduce((a, s) => a + s[1].length, 0)} characters)`);
      try {
        const m = await recordChapter(lang, ch, c.voice, style, recHash);
        made++;
        log(`  ${ch.file}: ${Math.round(m.dur / 60)} min with ${m.model}`);
        writeIndex(lang);
      } catch (e) {
        writeIndex(lang);
        if (e instanceof Quota) { log(`stopping: the free quota for today is used up (${e.message.slice(0, 160)}). The next run carries on.`); summary(); return; }
        throw e;
      }
    }
    writeIndex(lang);
  }
  log(`done: ${made} chapter(s) recorded`);
  summary();
}
function summary() {
  const parts = langs.map(l => { const ix = readJSON(p.join(outDir(l), 'index.json')); return ix ? `${l}: ${ix.done} of ${ix.total} chapters (${Math.round(ix.seconds / 60)} min)` : `${l}: no voice yet`; });
  log(`::notice title=Narration::${parts.join('; ')}`);
}

async function listVoices() {
  const q = new URLSearchParams();
  ['en-IN', 'hi-IN'].forEach(l => q.append('language_code', l));
  q.set('page_size', '50');
  const r = await call(`${API}/voices?${q}`, null, 'GET');
  if (!r.ok) { log(`voice library: HTTP ${r.status} ${r.text.slice(0, 200)}`); return []; }
  const arr = (r.json && (r.json.voices || Object.values(r.json).find(Array.isArray))) || [];
  return arr.map(v => ({
    id: v.voice || v.voice_id || v.voiceId || v.id || String(v.name || '').replace(/^voices\//, ''),
    label: v.display_name || v.displayName || v.title || v.name || v.id,
    langs: [].concat(v.language_codes || v.languageCodes || v.language_code || v.languageCode || []).map(String),
    desc: [v.gender, v.accent, v.description, (v.contexts || v.context || []).join ? (v.contexts || v.context || []).join(', ') : v.context].filter(Boolean).join(' · '),
    raw: v
  })).filter(v => v.id);
}
async function samples() {
  const lib = await listVoices();
  log(`voice library: ${lib.length} Indian voice(s) found`);
  const dir = p.join(SITE, 'audio', 'samples');
  fs.mkdirSync(dir, { recursive: true });
  const old = readJSON(p.join(dir, 'samples.json')) || {};
  const res = { at: new Date().toISOString(), round: (CFG.samples && CFG.samples.round) || 1, model: CFG.model, library: lib.map(v => ({ id: v.id, label: v.label, langs: v.langs, desc: v.desc })), en: old.en || [], hi: old.hi || [] };
  const per = (CFG.samples && CFG.samples.perEdition) || 6;
  for (const lang of langs) {
    const code = lang === 'hi' ? 'hi-in' : 'en-in';
    const indian = lib.filter(v => v.langs.some(l => l.toLowerCase() === code)).slice(0, Math.max(2, per - 2));
    const cands = indian.map(v => ({ id: v.id, label: v.label, desc: v.desc, indian: true }))
      .concat(((CFG.samples && CFG.samples.prebuilt) || []).map(n => ({ id: n, label: n, desc: '', indian: false }))).slice(0, per);
    const first = chapters(lang).find(c => /^01-/.test(c.file)) || chapters(lang)[0];
    let text = '';
    for (const [, s] of first.segs.slice(1)) { if (text.length > 450) break; text += (text ? '\n\n' : '') + s; }
    res[lang] = [];
    for (const v of cands) {
      try {
        const a = await speak(text, v.id, styleFor(lang, v.indian));
        const slug = String(v.id).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const src = save(trim(a.pcm, a.rate), a.rate, p.join(dir, `${lang}-${slug}.webm`));
        res[lang].push({ voice: v.id, label: v.label, desc: v.desc, indian: v.indian, src, model: a.model });
        log(`  ${lang}: ${v.label} ✓`);
      } catch (e) {
        if (e instanceof Quota) { log('stopping: quota used up'); break; }
        res[lang].push({ voice: v.id, label: v.label, desc: v.desc, indian: v.indian, error: String(e.message).slice(0, 300) });
        log(`::warning title=Voice sample ${lang} ${v.label}::${e.message.slice(0, 300).replace(/[\r\n]+/g, ' ')}`);
      }
    }
  }
  fs.writeFileSync(p.join(dir, 'samples.json'), JSON.stringify(res, null, 1));
  log(`::notice title=Voice samples::${langs.map(l => `${l}: ${res[l].filter(x => x.src).length} of ${res[l].length} recorded`).join('; ')}. Library voices: ${lib.map(v => v.id).join(', ') || 'none'}`);
}
function samplesDue() {
  const sm = readJSON(p.join(SITE, 'audio', 'samples', 'samples.json'));
  const round = (CFG.samples && CFG.samples.round) || 1;
  return !sm || (sm.round || 0) < round || langs.some(l => !(CFG[l] || {}).voice && !(sm[l] || []).some(x => x.src));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === p.resolve(process.argv[1])) {
  if (!['samples', 'record', 'auto'].includes(mode)) { console.error('usage: node tools/narrate.mjs auto|samples|record [--lang en,hi] [--max N] [--only file.html]'); process.exit(2); }
  if (!KEY) { log('::warning title=Narration::GEMINI_API_KEY is not set, so nothing was recorded. Add it under Settings → Secrets and variables → Actions.'); process.exit(0); }
  const job = mode === 'samples' ? samples() : mode === 'record' ? record() : (async () => {
    if (samplesDue()) { try { await samples(); } catch (e) { if (!(e instanceof Quota)) throw e; } }
    await record();
  })();
  job.catch(e => { log(`::error title=Narration::${String(e.message).slice(0, 400).replace(/[\r\n]+/g, ' ')}`); console.error(e.stack || e.message); process.exit(1); });
}
