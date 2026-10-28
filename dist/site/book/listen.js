/* Listen: a chapter read aloud, with the paragraph being read highlighted.

   Two voices, the same script. The words come from say/<file>.json, which the
   build writes from the very same blocks the page shows (each block carries
   data-s="N"), so the highlight always sits on the words being spoken.

   - Recorded voice: when /audio/<lang>/<file>.json exists and was recorded
     from this exact script (the hashes match), an <audio> file plays it. It
     keeps playing with the screen off and shows on the lock screen.
   - Phone voice: otherwise the device's own speech engine reads it, choosing
     an Indian English voice where the phone has one. The listener can pick
     another voice, and the choice is remembered.

   Reaching the end ticks the chapter as read, like scrolling to the end does.
   Tapping a paragraph while the player is open listens from there. */
(function () {
  var btn = document.getElementById('listen');
  var art = document.querySelector('article[data-file]');
  if (!btn || !art) return;
  var body = document.body;
  var lang = body.getAttribute('data-lang') === 'hi' ? 'hi' : 'en', hi = lang === 'hi';
  var file = art.getAttribute('data-file');
  var name = file.replace(/\.html$/, '');
  var base = body.getAttribute('data-base') || '/book/';
  var L = hi ? {
    listen: 'Suniye', pause: 'Rokiye', play: 'Chalaiye', prev: 'Pichhla paragraph', next: 'Agla paragraph', close: 'Band kijiye',
    rec: 'Record ki hui awaaz', tts: 'Phone ki awaaz', speed: 'Raftaar', nextCh: 'Agla chapter', cont: 'Sunna jaari rakhiye',
    none: 'Is device par padhkar sunane wali koi awaaz nahi hai.', done: 'Khatam. Chapter padha hua tick ho gaya.',
    region: 'Chapter suniye', para: 'Paragraph'
  } : {
    listen: 'Listen', pause: 'Pause', play: 'Play', prev: 'Previous paragraph', next: 'Next paragraph', close: 'Stop and close',
    rec: 'Recorded voice', tts: 'Phone voice', speed: 'Reading speed', nextCh: 'Next chapter', cont: 'Continue listening',
    none: 'This device has no voice for reading aloud.', done: 'Finished. The chapter is ticked as read.',
    region: 'Listen to this chapter', para: 'Paragraph'
  };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var posKey = 'aifz-listen-' + lang + '-' + name;
  var RATES = [0.85, 1, 1.15, 1.3, 1.5];
  var rate = parseFloat(store.get('aifz-listen-rate')) || 1;
  if (RATES.indexOf(rate) < 0) rate = 1;

  var script = null, segs = [], els = [], rec = null, mode = null;
  var cur = 0, playing = false, finished = false, ui = null, audio = null;
  var synth = window.speechSynthesis || null;

  function getJSON(u) {
    return fetch(u, { credentials: 'same-origin' }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }
  var canOpus = (function () { try { return !!document.createElement('audio').canPlayType('audio/webm; codecs="opus"'); } catch (e) { return false; } })();

  Promise.all([getJSON(base + 'say/' + name + '.json'), getJSON('/audio/' + lang + '/' + name + '.json')]).then(function (r) {
    script = r[0];
    if (!script || !script.segs || !script.segs.length) return;
    segs = script.segs;
    els = segs.map(function (s) { return art.querySelector('[data-s="' + s[0] + '"]'); });
    var m = r[1];
    if (m && m.hash === script.hash && m.src && m.segs && m.segs.length === segs.length && canOpus) rec = m;
    if (!rec && !synth) return;
    btn.hidden = false;
    btn.title = rec ? L.rec : L.tts;
    if (location.hash === '#listen') {
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
      open(true);
    }
  });

  btn.addEventListener('click', function () { if (ui && !ui.root.hidden) toggle(); else open(true); });

  /* ---------- the player bar ---------- */
  function build() {
    var root = document.createElement('div');
    root.className = 'player'; root.id = 'player';
    root.setAttribute('role', 'region'); root.setAttribute('aria-label', L.region);
    root.innerHTML =
      '<div class="pbar" aria-hidden="true"><i></i></div>' +
      '<div class="prow">' +
      '<button type="button" class="pb prev" aria-label="' + L.prev + '" title="' + L.prev + '">⏮</button>' +
      '<button type="button" class="pb play" aria-label="' + L.play + '">▶</button>' +
      '<button type="button" class="pb next" aria-label="' + L.next + '" title="' + L.next + '">⏭</button>' +
      '<div class="pinfo"><span class="ptime"></span><span class="psrc"></span><select class="pvoice" aria-label="' + L.tts + '" hidden></select></div>' +
      '<button type="button" class="pb rate" aria-label="' + L.speed + '" title="' + L.speed + '"></button>' +
      '<button type="button" class="pb close" aria-label="' + L.close + '" title="' + L.close + '">✕</button>' +
      '</div>' +
      '<p class="pend" hidden><span class="pdone">' + L.done + '</span> <a class="pnext" hidden></a></p>';
    document.body.appendChild(root);
    var q = function (s) { return root.querySelector(s); };
    ui = { root: root, play: q('.play'), prev: q('.prev'), next: q('.next'), time: q('.ptime'), src: q('.psrc'),
      voice: q('.pvoice'), rate: q('.rate'), close: q('.close'), bar: q('.pbar i'), end: q('.pend'), nextLink: q('.pnext') };
    ui.play.addEventListener('click', toggle);
    ui.prev.addEventListener('click', function () { step(-1); });
    ui.next.addEventListener('click', function () { step(1); });
    ui.close.addEventListener('click', close);
    ui.rate.addEventListener('click', function () {
      rate = RATES[(RATES.indexOf(rate) + 1) % RATES.length];
      store.set('aifz-listen-rate', String(rate));
      if (audio) audio.playbackRate = rate;
      if (mode === 'tts' && playing) speakFrom(cur);
      paint();
    });
    ui.voice.addEventListener('change', function () {
      store.set('aifz-listen-voice', ui.voice.value);
      if (playing) speakFrom(cur);
    });
    var nx = document.querySelector('.pager .next');
    if (nx) { ui.nextLink.href = nx.getAttribute('href') + '#listen'; ui.nextLink.textContent = L.nextCh + ' →'; ui.nextLink.hidden = false; }
  }

  function open(start) {
    if (!segs.length) return;
    if (!ui) build();
    ui.root.hidden = false;
    body.classList.add('listening');
    if (!mode) {
      mode = rec ? 'rec' : 'tts';
      var saved = null; try { saved = JSON.parse(store.get(posKey) || 'null'); } catch (e) {}
      if (saved && saved.i > 0 && saved.i < segs.length - 1) cur = saved.i;
      if (mode === 'rec') setupAudio(saved && saved.i === cur ? saved.t : null);
      else fillVoices();
    }
    paint(); highlight(false);
    if (start) play();
  }
  function close() {
    pause();
    if (ui) ui.root.hidden = true;
    body.classList.remove('listening');
    els.forEach(function (e) { if (e) e.classList.remove('speaking'); });
  }
  function toggle() { if (playing) pause(); else play(); }
  function play() {
    finished = false; if (ui) ui.end.hidden = true;
    if (mode === 'rec') {
      var p = audio.play();
      playing = true;
      if (p && p.catch) p.catch(function () { playing = false; paint(); });
    } else {
      if (!synth || !pickVoice()) { if (ui) { ui.src.textContent = L.none; } return; }
      playing = true;
      speakFrom(cur);
    }
    paint();
  }
  function pause() {
    playing = false;
    if (audio) audio.pause();
    if (synth && mode === 'tts') { token++; synth.cancel(); }
    savePos();
    paint();
  }
  function step(d) {
    var i = cur + d;
    if (mode === 'rec') {
      if (d < 0 && audio.currentTime - rec.segs[cur][1] > 3) i = cur;
      i = Math.max(0, Math.min(segs.length - 1, i));
      audio.currentTime = rec.segs[i][1] + 0.01;
      cur = i; highlight(true); paint();
    } else {
      i = Math.max(0, Math.min(segs.length - 1, i));
      cur = i; highlight(true); paint();
      if (playing) speakFrom(cur);
    }
    savePos();
  }
  function jump(i) {
    if (mode === 'rec') { audio.currentTime = rec.segs[i][1] + 0.01; cur = i; highlight(false); if (!playing) play(); }
    else { cur = i; highlight(false); if (playing) speakFrom(cur); else play(); }
    paint(); savePos();
  }
  function done() {
    playing = false; finished = true;
    store.set(posKey, JSON.stringify({ i: 0, t: 0 }));
    document.dispatchEvent(new CustomEvent('aifz:heard', { detail: { el: els[els.length - 1], end: true } }));
    if (ui) ui.end.hidden = false;
    paint();
  }

  /* ---------- what the bar shows ---------- */
  function clock(s) { s = Math.max(0, Math.round(s || 0)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  function paint() {
    if (!ui) return;
    ui.play.textContent = playing ? '⏸' : '▶';
    ui.play.setAttribute('aria-label', playing ? L.pause : L.play);
    ui.play.title = playing ? L.pause : L.play;
    ui.rate.textContent = (rate === 1 ? '1' : String(rate)) + '×';
    btn.classList.toggle('on', playing);
    btn.querySelector('.li').textContent = playing ? '⏸' : '▶';
    if (mode === 'rec') {
      var dur = audio && isFinite(audio.duration) ? audio.duration : rec.dur;
      ui.time.textContent = clock(audio ? audio.currentTime : 0) + ' / ' + clock(dur);
      ui.src.textContent = L.rec;
      ui.bar.style.width = (dur ? (audio.currentTime / dur) * 100 : 0) + '%';
    } else {
      ui.time.textContent = L.para + ' ' + (cur + 1) + ' / ' + segs.length;
      ui.src.textContent = L.tts;
      ui.bar.style.width = ((finished ? segs.length : cur) / segs.length * 100) + '%';
    }
    ui.src.hidden = mode === 'tts' && !ui.voice.hidden;
  }
  var lastUser = 0;
  ['wheel', 'touchmove', 'keydown'].forEach(function (t) { window.addEventListener(t, function () { lastUser = Date.now(); }, { passive: true }); });
  function highlight(follow) {
    els.forEach(function (e, i) { if (e) e.classList.toggle('speaking', i === cur && !(ui && ui.root.hidden)); });
    var el = els[cur];
    if (!el) return;
    document.dispatchEvent(new CustomEvent('aifz:heard', { detail: { el: el, end: false } }));
    if (!follow && Date.now() - lastUser < 4000) return;
    /* keep the paragraph being read in the upper part of the screen, clear of
       the header above and the player below */
    var r = el.getBoundingClientRect(), bottom = window.innerHeight - (ui ? ui.root.offsetHeight : 0);
    if (r.top < 64 || r.top > bottom * 0.55 || (r.bottom > bottom && r.top > bottom * 0.3)) {
      window.scrollTo({ top: Math.max(0, window.scrollY + r.top - Math.max(72, bottom * 0.22)), behavior: 'smooth' });
    }
  }
  var saveT = 0;
  function savePos() {
    store.set(posKey, JSON.stringify({ i: cur, t: audio ? audio.currentTime : 0 }));
  }

  /* tap a paragraph to listen from there */
  art.addEventListener('click', function (e) {
    if (!ui || ui.root.hidden) return;
    if (e.target.closest('a,button,input,select,summary')) return;
    var el = e.target.closest('[data-s]');
    if (!el) return;
    var i = els.indexOf(el);
    if (i >= 0) jump(i);
  });

  /* ---------- the recorded voice ---------- */
  function setupAudio(t) {
    audio = new Audio();
    audio.preload = 'metadata';
    audio.src = '/audio/' + lang + '/' + rec.src;
    audio.playbackRate = rate;
    if (t) audio.addEventListener('loadedmetadata', function once() { audio.removeEventListener('loadedmetadata', once); audio.currentTime = t; });
    else if (cur) audio.addEventListener('loadedmetadata', function once() { audio.removeEventListener('loadedmetadata', once); audio.currentTime = rec.segs[cur][1]; });
    audio.addEventListener('timeupdate', function () {
      var t = audio.currentTime, i = cur;
      while (i + 1 < rec.segs.length && rec.segs[i + 1][1] <= t + 0.05) i++;
      while (i > 0 && rec.segs[i][1] > t + 0.05) i--;
      if (i !== cur) { cur = i; highlight(false); }
      if (Date.now() - saveT > 4000) { saveT = Date.now(); savePos(); }
      paint();
    });
    audio.addEventListener('play', function () { playing = true; paint(); });
    audio.addEventListener('pause', function () { if (!audio.ended) { playing = false; paint(); } });
    audio.addEventListener('ended', done);
    audio.addEventListener('ratechange', function () { if (audio.playbackRate !== rate) audio.playbackRate = rate; });
    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: art.getAttribute('data-title') || document.title,
          artist: 'AI From Zero', album: hi ? 'Kitaab (Hinglish)' : 'The book',
          artwork: [{ src: '/book/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/book/icon-512.png', sizes: '512x512', type: 'image/png' }]
        });
        var h = navigator.mediaSession.setActionHandler.bind(navigator.mediaSession);
        h('play', play); h('pause', pause);
        h('previoustrack', function () { step(-1); }); h('nexttrack', function () { step(1); });
        h('seekbackward', function () { audio.currentTime = Math.max(0, audio.currentTime - 10); });
        h('seekforward', function () { audio.currentTime = Math.min(audio.duration || 1e9, audio.currentTime + 10); });
      } catch (e) {}
    }
  }

  /* ---------- the phone's own voice ---------- */
  var token = 0, keep = null;
  function rank(v) {
    var l = String(v.lang || '').replace('_', '-').toLowerCase(), n = String(v.name || '').toLowerCase(), s;
    if (l === 'en-in') s = 100; else if (l === 'hi-in') s = hi ? 90 : 50;
    else if (/^en-(gb|au|us|ie|za|nz|ca)/.test(l)) s = 40; else if (/^en/.test(l)) s = 35; else return -1;
    if (/google|natural|neural|online|enhanced|premium/.test(n)) s += 8;
    if (v.localService === false) s += 2;
    return s;
  }
  function usable() {
    return (synth ? synth.getVoices() : []).filter(function (v) { return rank(v) >= 0; })
      .sort(function (a, b) { return rank(b) - rank(a) || String(a.name).localeCompare(String(b.name)); });
  }
  function fillVoices() {
    if (!ui) return;
    var vs = usable();
    if (!vs.length) { ui.voice.hidden = true; return; }
    var want = store.get('aifz-listen-voice');
    var pick = vs.filter(function (v) { return v.voiceURI === want; })[0] || vs[0];
    ui.voice.innerHTML = '';
    vs.slice(0, 12).concat(vs.indexOf(pick) >= 12 ? [pick] : []).forEach(function (v) {
      var o = document.createElement('option');
      o.value = v.voiceURI; o.textContent = v.name.replace(/^(Microsoft|Google)\s+/, '') + ' · ' + v.lang;
      if (v === pick) o.selected = true;
      ui.voice.appendChild(o);
    });
    ui.voice.hidden = false;
    paint();
  }
  if (synth && synth.addEventListener) synth.addEventListener('voiceschanged', function () { if (mode === 'tts') fillVoices(); });
  function pickVoice() {
    var vs = usable();
    if (!vs.length) return null;
    var want = ui && ui.voice.value || store.get('aifz-listen-voice');
    return vs.filter(function (v) { return v.voiceURI === want; })[0] || vs[0];
  }
  function sentences(t) {
    var out = String(t).match(/[^.!?…]+[.!?…]+["”’)\]]*\s*|[^.!?…]+$/g) || [t];
    /* very long sentences are split at commas so no single utterance runs on */
    var res = [];
    out.forEach(function (s) {
      s = s.trim(); if (!s) return;
      while (s.length > 220) {
        var cut = s.lastIndexOf(', ', 200);
        if (cut < 60) cut = s.indexOf(' ', 200);
        if (cut < 0) break;
        res.push(s.slice(0, cut + 1)); s = s.slice(cut + 1).trim();
      }
      if (s) res.push(s);
    });
    return res;
  }
  function speakFrom(i) {
    var my = ++token;
    synth.cancel();
    var v = pickVoice();
    var parts = sentences(segs[i][1]), k = 0;
    cur = i; highlight(false); paint();
    var say = function () {
      if (my !== token) return;
      if (k >= parts.length) {
        if (cur + 1 < segs.length) { speakNext(my); } else { token++; done(); }
        return;
      }
      var u = new SpeechSynthesisUtterance(parts[k++]);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-IN';
      u.rate = rate;
      u.onend = function () { if (my === token) say(); };
      u.onerror = function (e) {
        if (my !== token || e.error === 'interrupted' || e.error === 'canceled') return;
        /* the browser wants a tap first (opening the next chapter by itself) */
        if (e.error === 'not-allowed') { token++; playing = false; paint(); return; }
        say();
      };
      synth.speak(u);
    };
    /* Chrome on a computer stops a voice after about 15 seconds unless nudged */
    if (keep) clearInterval(keep);
    if (!/Android/i.test(navigator.userAgent)) keep = setInterval(function () { if (my !== token) { clearInterval(keep); return; } if (synth.speaking && !synth.paused) { synth.pause(); synth.resume(); } }, 10000);
    setTimeout(say, 60);
  }
  function speakNext(my) {
    if (my !== token) return;
    cur++; savePos();
    speakFrom(cur);
  }
  window.addEventListener('pagehide', function () { if (synth && mode === 'tts') synth.cancel(); savePos(); });
})();
