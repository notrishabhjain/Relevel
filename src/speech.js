/* Read the page aloud.

   The point is to let a chapter be listened to while doing something else, so
   this is built on the browser's own speech synthesis: nothing to install, no
   key, no cost, and it works with the network off. The whole engine is one
   idea — turn the rendered page into an ordered list of short spoken chunks,
   speak them one at a time, and highlight the one being spoken so that looking
   back at the screen puts you exactly where the voice is.

   What it cannot do, stated here because it is the first thing anybody asks:
   a phone browser stops speech synthesis when the screen locks or the tab goes
   to the background. Real background playback needs an audio file, which needs
   a server-side voice. On a laptop, with the tab open behind other windows,
   this runs fine. The player says so on a touch device rather than leaving it
   to be discovered halfway down a chapter. */
(function(){
const synth = window.speechSynthesis;
const supported = !!(synth && window.SpeechSynthesisUtterance);

/* ---------------- what gets read ----------------

   A chunk is one visible thing with prose in it. The walk takes the outermost
   element that qualifies and then skips its subtree, so a <li> inside a <ul>
   inside a .callout is read once rather than three times. */
const CHUNK_SEL = 'h1,h2,h3,h4,p,li,dt,dd,blockquote,.keyline,.concept,.urow,' +
                  '.expect,summary,figcaption,.smapev,.arttitle,.stat';
/* Read nothing from these. Code read aloud is noise — you cannot type from a
   spoken bracket — but silence in its place is worse, because you would not
   know you had skipped anything, so a code block becomes a one-line marker. */
const SKIP_SEL = 'pre,code,script,style,svg,input,textarea,select,option,' +
                 '.grade,.tplbar,.artstate,.saved,.cpbar,.foot,.mapwrap';

const isHidden = el => {
  if (el.hidden) return true;
  /* A closed <details> is on the page but not on the screen. Reading it would
     narrate text the reader cannot see, which is the fastest way to lose the
     thread. An open one is fair game, summary included. */
  const d = el.closest('details');
  if (d && !d.open && !el.matches('summary') && !el.contains(d.querySelector('summary'))) return true;
  return false;
};

/* textContent glues adjacent elements straight together, so a sentence ending
   in a link comes out as "inside a ceiling.Chapter 1" — which a voice reads as
   one slurred word. A separator at every element boundary is the whole fix. */
function textOf(el){
  let out = '';
  for (const n of el.childNodes) {
    if (n.nodeType === 3) { out += n.nodeValue; continue; }
    if (n.nodeType !== 1) continue;
    const inner = textOf(n);
    if (!inner) continue;
    if (out && !/\s$/.test(out) && !/^\s/.test(inner)) out += ' ';
    out += inner;
  }
  return out;
}

/* Speech is not reading. These substitutions are the difference between a
   sentence and a sequence of symbol names. */
function speakable(raw){
  let s = String(raw || '')
    /* An arrow at either edge is a link decoration ("Chapter 1 →"), not a step
       in a pipeline, so it is dropped rather than spoken. Only the ones
       between two things mean "and then". */
    .replace(/^[\s←→➜➔]+|[\s←→➜➔]+$/g, '')
    .replace(/→|➔|⇒/g, ' then ')     /* → in a pipeline */
    .replace(/←/g, ' back to ')
    .replace(/(\w)@(\d)/g, '$1 at $2')              /* Recall@5 */
    .replace(/≥/g, ' at least ')
    .replace(/≤/g, ' at most ')
    .replace(/(\d)\s*[×x]\s*(?=\s|$)/g, '$1 times ')  /* 10× traffic */
    .replace(/\bp(\d{2})\b/g, 'p $1')               /* p95 → "p ninety-five" */
    .replace(/\s*—\s*/g, ', ')                  /* em dash reads as a pause */
    .replace(/…/g, '. ')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    /* Collapsed last, so a substitution that left a double space is tidied
       rather than preserved. */
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
  return s;
}

/* One utterance per chunk reads most naturally, but a very long paragraph is
   worth splitting: it makes the previous/next buttons useful, keeps the
   highlight honest, and sidesteps the long-utterance cutoff some browsers
   still have. Split on sentence ends only, never mid-clause. */
function split(text, cap){
  if (text.length <= cap) return [text];
  const out = [];
  let buf = '';
  for (const piece of text.split(/(?<=[.!?])\s+/)) {
    if (buf && (buf + ' ' + piece).length > cap) { out.push(buf); buf = piece; }
    else buf = buf ? buf + ' ' + piece : piece;
  }
  if (buf) out.push(buf);
  return out;
}

/* A .urow is a label and a value in a display:contents grid, so its two halves
   are separate elements that belong in one spoken sentence. */
function chunkText(el){
  if (el.matches('.urow')) {
    const l = el.querySelector('.ulbl'), v = el.querySelector('.uval');
    return [l && textOf(l), v && textOf(v)].filter(Boolean).join(': ');
  }
  if (el.matches('.stat')) {
    const l = el.querySelector('.l'), v = el.querySelector('.v');
    return [l && textOf(l), v && textOf(v)].filter(Boolean).join(': ');
  }
  return textOf(el);
}

function collect(root){
  const chunks = [];
  const done = new Set();
  const push = (el, text) => {
    const s = speakable(text);
    if (s.length < 2) return;
    for (const part of split(s, 420)) chunks.push({ el, text: part });
  };
  const walk = el => {
    for (const child of el.children) {
      if (done.has(child)) continue;
      if (child.matches(SKIP_SEL)) {
        if (child.matches('pre')) {
          const n = (child.textContent.match(/\n/g) || []).length + 1;
          chunks.push({ el: child, text: 'Code block, ' + n + ' line' + (n === 1 ? '' : 's') +
                                        '. Skipping — read this one on screen.' });
        }
        continue;
      }
      if (isHidden(child)) continue;
      /* A term and its definition are one spoken sentence: "Break: test what
         happens on deletion" rather than "Break" … "Test what happens on
         deletion", which loses which label the sentence belongs to. */
      if (child.matches('dt')) {
        const dd = child.nextElementSibling;
        if (dd && dd.matches('dd') && !isHidden(dd)) {
          done.add(dd);
          push(child, textOf(child) + ': ' + textOf(dd));
          continue;
        }
      }
      if (child.matches(CHUNK_SEL)) { push(child, chunkText(child)); continue; }
      /* A table is rows, and a row of checkboxes has nothing to say. */
      if (child.matches('tr')) {
        const cells = [...child.children]
          .map(c => textOf(c).trim()).filter(Boolean);
        if (cells.length) push(child, cells.join(', '));
        continue;
      }
      walk(child);
    }
  };
  if (root) walk(root);
  return chunks;
}

/* ---------------- voices ----------------

   The Hinglish reading is Hindi written in the Roman alphabet, so a hi-IN
   voice is the wrong choice: those voices expect Devanagari and mangle Latin
   text. An Indian English voice reads Roman Hindi far closer to right than a
   US English one does, so that is the preference order, and it is why the
   language of the utterance is set from the reading language rather than from
   the document. */
function rank(v, hinglish){
  const lang = (v.lang || '').replace('_', '-');
  if (hinglish) {
    if (lang === 'en-IN') return 0;
    if (lang.startsWith('hi')) return 1;            /* better than nothing */
    if (lang.startsWith('en')) return 2;
    return 9;
  }
  if (lang.startsWith('en-GB')) return 0;
  if (lang.startsWith('en-US')) return 1;
  if (lang.startsWith('en')) return 2;
  return 9;
}
function voices(hinglish){
  if (!supported) return [];
  return synth.getVoices()
    .filter(v => /^(en|hi)/i.test(v.lang || ''))
    .sort((a, b) => rank(a, hinglish) - rank(b, hinglish) ||
                    a.name.localeCompare(b.name));
}

/* The chosen voice is a device fact, not a progress fact: a voice installed on
   a laptop does not exist on a phone, so it is kept out of the synced state
   that everything else lives in. */
const VKEY = 'aifz-voice';
const savedVoiceURI = () => { try { return localStorage.getItem(VKEY) || ''; } catch(e){ return ''; } };
const saveVoiceURI = u => { try { u ? localStorage.setItem(VKEY, u) : localStorage.removeItem(VKEY); } catch(e){} };

function pickVoice(hinglish){
  const list = voices(hinglish);
  if (!list.length) return null;
  const want = savedVoiceURI();
  return list.find(v => v.voiceURI === want) || list[0];
}

/* ---------------- the player ---------------- */
const S = {
  chunks: [], i: 0, playing: false, rate: 1,
  onchange: null,      /* the UI subscribes here rather than polling */
  pulse: null,         /* Chrome stops a long run unless it is nudged */
  watchdog: null,
  error: ''
};

function emit(){ if (S.onchange) S.onchange(state()); }
function state(){
  return { playing: S.playing, i: S.i, n: S.chunks.length, rate: S.rate,
           error: S.error, text: (S.chunks[S.i] || {}).text || '' };
}

/* A machine with no speech engine installed — a bare Linux box, some locked
   down work laptops — has the whole API and zero voices, so speak() accepts
   the utterance and nothing ever happens. Left alone that reads as the button
   being broken. If nothing has started speaking shortly after asking, say so.  */
const NO_VOICE = 'This device has no speech voice installed, so the page cannot be read aloud.';
function armWatchdog(){
  clearWatchdog();
  S.watchdog = setTimeout(() => {
    if (S.playing && !synth.speaking && !synth.pending) fail(NO_VOICE);
  }, 2500);
}
function clearWatchdog(){ if (S.watchdog) { clearTimeout(S.watchdog); S.watchdog = null; } }
function fail(msg){
  S.error = msg;
  S.playing = false;
  stopPulse(); clearWatchdog();
  try { synth.cancel(); } catch(e){}
  document.querySelectorAll('.nowreading').forEach(e => e.classList.remove('nowreading'));
  emit();
}

function mark(){
  document.querySelectorAll('.nowreading').forEach(e => e.classList.remove('nowreading'));
  const c = S.chunks[S.i];
  if (!c || !c.el || !c.el.isConnected) return;
  c.el.classList.add('nowreading');
  const r = c.el.getBoundingClientRect();
  /* Only scroll when the voice has left the screen; scrolling on every
     paragraph fights a reader who is following along with their eyes. */
  if (r.top < 70 || r.bottom > window.innerHeight - 120)
    c.el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function speakCurrent(){
  const c = S.chunks[S.i];
  if (!c) { stop(); return; }
  const hinglish = (window.STORE ? window.STORE.S.lang : null) === 'hi';
  const u = new SpeechSynthesisUtterance(c.text);
  const v = pickVoice(hinglish);
  if (v) { u.voice = v; u.lang = v.lang; }
  else u.lang = hinglish ? 'en-IN' : 'en-GB';
  u.rate = S.rate;
  u.onstart = () => { clearWatchdog(); if (S.error) { S.error = ''; emit(); } };
  u.onend = () => {
    if (!S.playing) return;
    if (S.i + 1 < S.chunks.length) { S.i++; mark(); emit(); speakCurrent(); }
    else stop(true);
  };
  /* 'interrupted' and 'canceled' are what a deliberate stop or skip looks
     like; only a real failure should take the player down. */
  u.onerror = e => {
    if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
    fail(e && (e.error === 'synthesis-unavailable' || e.error === 'synthesis-failed' ||
               e.error === 'language-unavailable' || e.error === 'voice-unavailable')
      ? NO_VOICE
      : 'The browser stopped reading' + (e && e.error ? ' (' + e.error + ')' : '') + '.');
  };
  synth.speak(u);
  armWatchdog();
  mark(); emit();
}

/* Chrome stops speaking after about fifteen seconds unless something touches
   the queue. pause()+resume() on a timer is the long-standing workaround; it
   is a no-op in browsers that do not need it. */
function startPulse(){
  stopPulse();
  S.pulse = setInterval(() => {
    if (!S.playing) return;
    if (synth.speaking && !synth.paused) { synth.pause(); synth.resume(); }
  }, 10000);
}
function stopPulse(){ if (S.pulse) { clearInterval(S.pulse); S.pulse = null; } }

function load(root){
  S.chunks = collect(root || document.getElementById('main'));
  S.i = 0;
  return S.chunks.length;
}

function play(){
  if (!supported) return;
  if (!S.chunks.length) load();
  if (!S.chunks.length) return;
  synth.cancel();
  S.error = '';
  S.playing = true;
  startPulse();
  speakCurrent();
}
function pause(){
  if (!S.playing) return;
  S.playing = false;
  stopPulse(); clearWatchdog();
  synth.cancel();
  emit();
}
function stop(finished){
  S.playing = false;
  stopPulse(); clearWatchdog();
  synth.cancel();
  if (finished) S.i = 0;
  document.querySelectorAll('.nowreading').forEach(e => e.classList.remove('nowreading'));
  emit();
}
function seek(delta){
  const next = Math.min(Math.max(S.i + delta, 0), Math.max(S.chunks.length - 1, 0));
  if (next === S.i && S.playing) return;
  S.i = next;
  if (S.playing) { synth.cancel(); speakCurrent(); }
  else { mark(); emit(); }
}
function setRate(r){
  S.rate = r;
  if (S.playing) { synth.cancel(); speakCurrent(); }
  else emit();
}
function setVoice(uri){
  saveVoiceURI(uri);
  if (S.playing) { synth.cancel(); speakCurrent(); }
}

/* A route change replaces everything the chunks point at, so keeping the old
   list would highlight detached nodes and read the previous page. */
function reset(){
  const wasPlaying = S.playing;
  stop();
  S.chunks = []; S.i = 0;
  return wasPlaying;
}

window.SPEECH = { supported, load, play, pause, stop, seek, setRate, setVoice,
                  voices, reset, state, savedVoiceURI,
                  /* exported for the tests, which assert on extraction rather
                     than on audio nobody can hear in a headless browser */
                  collect, speakable, split,
                  set onchange(fn){ S.onchange = fn; },
                  get onchange(){ return S.onchange; } };
})();
