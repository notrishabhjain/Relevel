/* Client script for /worksheet/. Inlined into the page by worksheet/build.mjs.

   1. Status: every row carries the route steps it stands for (data-steps).
      Its tick comes from the one shared progress record (/progress.js): app
      chapters marked complete, book chapters read, and look-backs and tries
      ticked on the plan or the route. Nothing is ticked here by hand.
   2. Your own marks: "I can explain this" and a note per topic, and the
      before-you-start and project checklists. Saved in this browser always,
      and in the plan's notes document (/api/plan) when you are signed in,
      where each entry keeps its newest edit.
   3. Save as PDF (the browser's print, with every topic open and your notes
      printed in full) and a spreadsheet of the whole worksheet (CSV). */
(function () {
  'use strict';
  var P = window.AIFZ_PROGRESS || null, L = window.WS_UI || {}, STEPS = window.WS_STEPS || [], TOPICS = window.WS_TOPICS || [];
  var KEY = 'aifz-worksheet-v1', base = document.body.getAttribute('data-base') || '../';
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function fill(s, o) { return String(s).replace(/\{(\w+)\}/g, function (_, k) { return o[k] != null ? o[k] : ''; }); }

  /* ---------- progress ---------- */
  var S = P ? P.load() : {};
  var byId = {};
  STEPS.forEach(function (s, i) { byId[s[0]] = { id: s[0], kind: s[1], ch: s[1] === 'chapter' ? s[2] : undefined, book: s[1] === 'read' ? s[2] : undefined, t: s[3], title: s[4], href: s[5], i: i }; });
  function done(id) { var s = byId[id]; return !!(s && P && P.stepDone(s, S)); }
  function paint() {
    var total = 0, got = 0, per = {};
    $$('[data-steps]').forEach(function (el) {
      var ids = el.getAttribute('data-steps').split(' ').filter(Boolean), d = 0;
      ids.forEach(function (id) { if (done(id)) d++; });
      el.classList.toggle('done', ids.length > 0 && d === ids.length);
      el.classList.toggle('half', d > 0 && d < ids.length);
      var st = $('.st', el); if (st) st.setAttribute('title', d === ids.length ? L.done : d ? L.half : L.notYet);
      var t = el.closest('[data-topic]').getAttribute('data-topic');
      per[t] = per[t] || { d: 0, n: 0 }; per[t].d += d; per[t].n += ids.length; got += d; total += ids.length;
    });
    drawJourney(per);
    Object.keys(per).forEach(function (t) {
      var sec = document.getElementById(t), x = per[t], pct = x.n ? Math.round(x.d * 100 / x.n) : 0;
      var bar = $('summary .pbar i', sec); if (bar) bar.style.width = pct + '%';
      var tc = $('summary .tc', sec); if (tc) tc.textContent = x.d + '/' + x.n;
      var toc = $('[data-tc="' + t + '"]'); if (toc) toc.textContent = x.d + '/' + x.n;
    });
    $('#overview .pbar i').style.width = (total ? Math.round(got * 100 / total) : 0) + '%';
    $('#ov-steps').textContent = fill(L.overall, { n: got, of: total });
    var can = TOPICS.filter(function (t) { return (mine.topics[t[0]] || {}).can; }).length;
    $('#ov-can').textContent = fill(L.explained, { n: can, of: TOPICS.length });
    var nx = null;
    for (var i = 0; i < STEPS.length; i++) if (!done(STEPS[i][0])) { nx = byId[STEPS[i][0]]; break; }
    var box = $('#ov-next'); box.innerHTML = '';
    if (!nx) box.textContent = L.allDone;
    else {
      box.appendChild(document.createTextNode(L.next + ': '));
      var a = document.createElement('a'); a.href = base + nx.href; a.textContent = nx.title; box.appendChild(a);
      var tp = TOPICS.filter(function (t) { return t[0] === nx.t; })[0];
      if (tp) { box.appendChild(document.createTextNode(' · ')); var b = document.createElement('a'); b.href = '#' + tp[0]; b.textContent = L.topic + ' ' + tp[0].slice(1) + ': ' + tp[1]; box.appendChild(b); }
    }
    redate();
  }

  /* the topics as one path: how much of each is done, and which you can explain */
  function drawJourney(per) {
    var el = document.getElementById('ws-journey');
    if (!el || !window.FIGS) return;
    var firstOpen = null;
    TOPICS.forEach(function (t) { var x = per[t[0]]; if (!firstOpen && x && x.d < x.n) firstOpen = t[0]; });
    window.FIGS.journey(el, { label: L.journey, nodes: TOPICS.map(function (t) {
      var x = per[t[0]] || { d: 0, n: 0 };
      return { id: t[0], n: t[0].slice(1), label: t[1], pct: x.n ? x.d / x.n : 0, can: !!(mine.topics[t[0]] || {}).can, here: t[0] === firstOpen };
    }), onPick: function (id) { location.hash = '#' + id; openHash(true); } });
  }

  /* plan weeks follow a restarted calendar */
  function startDate() {
    var v = S && S.routeStart, orig = document.body.getAttribute('data-start');
    return typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v + 'T00:00:00Z')) ? v : orig;
  }
  function fmtDay(ms, year) { var o = { day: 'numeric', month: 'short', timeZone: 'UTC' }; if (year) o.year = 'numeric'; return new Date(ms).toLocaleDateString('en-GB', o); }
  function redate() {
    var s0 = Date.parse(startDate() + 'T00:00:00Z'), custom = startDate() !== document.body.getAttribute('data-start');
    $$('[data-w]').forEach(function (el) {
      if (!el.hasAttribute('data-orig')) el.setAttribute('data-orig', el.textContent);
      if (!custom) { el.textContent = el.getAttribute('data-orig'); return; }
      var n = +el.getAttribute('data-w'), x = s0 + (n - 1) * 7 * 86400000, y = x + 6 * 86400000;
      var cross = new Date(x).getUTCFullYear() !== new Date(y).getUTCFullYear();
      el.textContent = fmtDay(x, cross) + ' – ' + fmtDay(y, cross);
    });
  }

  /* ---------- your marks ---------- */
  var mine = { topics: {}, ticks: {} };
  function loadMine() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && typeof s === 'object') mine = { topics: s.topics || {}, ticks: s.ticks || {} }; } catch (e) { }
  }
  function keep() { try { localStorage.setItem(KEY, JSON.stringify(mine)); } catch (e) { } }
  function merge(a, b) {
    var out = { topics: {}, ticks: {} };
    ['topics', 'ticks'].forEach(function (part) {
      var keys = {}; Object.keys(a[part] || {}).concat(Object.keys(b[part] || {})).forEach(function (k) { keys[k] = 1; });
      Object.keys(keys).forEach(function (k) {
        var x = (a[part] || {})[k], y = (b[part] || {})[k];
        out[part][k] = !x ? y : !y ? x : ((y.u || 0) >= (x.u || 0) ? y : x);
      });
    });
    return out;
  }
  function show() {
    $$('[data-tick]').forEach(function (el) { el.checked = !!(mine.ticks[el.getAttribute('data-tick')] || {}).on; });
    $$('[data-can]').forEach(function (el) {
      var t = el.getAttribute('data-can'), on = !!(mine.topics[t] || {}).can;
      el.checked = on;
      var badge = $('#' + t + ' summary .tcan'); if (badge) badge.hidden = !on;
    });
    $$('[data-note]').forEach(function (el) { if (document.activeElement !== el) el.value = (mine.topics[el.getAttribute('data-note')] || {}).note || ''; });
  }
  var signedIn = false, putT = null;
  function saved(msg) { var el = $('#ws-saved'); if (el) el.textContent = msg; }
  function edit(part, key, fields) {
    var cur = mine[part][key] || {}, next = {};
    Object.keys(cur).forEach(function (k) { next[k] = cur[k]; });
    Object.keys(fields).forEach(function (k) { next[k] = fields[k]; });
    next.u = Date.now(); mine[part][key] = next; keep();
    saved(signedIn ? L.saved + '…' : L.savedHere);
    if (signedIn) { clearTimeout(putT); putT = setTimeout(send, 900); }
    paint(); show();
  }
  function call(path, opts) {
    opts = opts || {};
    return fetch(base + path, { method: opts.method || 'GET', credentials: 'same-origin',
      headers: opts.body ? { 'content-type': 'application/json', 'x-aifz': '1' } : { 'x-aifz': '1' },
      body: opts.body ? JSON.stringify(opts.body) : undefined })
      .then(function (r) { return r.json().catch(function () { return null; }).then(function (b) { return { status: r.status, body: b }; }); });
  }
  function send() {
    return call('api/plan', { method: 'PUT', body: { data: { topics: mine.topics, ticks: mine.ticks } } }).then(function (r) {
      if (r.status === 200 && r.body && r.body.data) { mine = merge(mine, r.body.data); keep(); show(); paint(); saved(L.savedAcct); }
      else saved(L.savedHere);
    }, function () { saved(L.savedHere); });
  }
  function sync() {
    return call('api/me').then(function (r) {
      if (!(r.status === 200 && r.body && r.body.user)) { saved(L.savedHere); return; }
      signedIn = true;
      return call('api/plan').then(function (g) {
        if (g.status !== 200 || !g.body || !g.body.data) return;
        var srv = { topics: g.body.data.topics || {}, ticks: g.body.data.ticks || {} };
        var both = merge(mine, srv);
        /* merge keeps the winning entry itself, so anything not the server's own object is newer here */
        var newer = ['topics', 'ticks'].some(function (part) { return Object.keys(both[part]).some(function (k) { return both[part][k] !== srv[part][k]; }); });
        mine = both; keep(); show(); paint();
        if (newer) send(); else saved(L.savedAcct);
      });
    }, function () { saved(L.savedHere); });
  }

  /* ---------- events ---------- */
  document.addEventListener('change', function (e) {
    var el = e.target;
    if (el.hasAttribute('data-tick')) edit('ticks', el.getAttribute('data-tick'), { on: el.checked });
    else if (el.hasAttribute('data-can')) edit('topics', el.getAttribute('data-can'), { can: el.checked });
  });
  var noteT = {};
  document.addEventListener('input', function (e) {
    var el = e.target;
    if (!el.hasAttribute('data-note')) return;
    var t = el.getAttribute('data-note');
    clearTimeout(noteT[t]);
    noteT[t] = setTimeout(function () { edit('topics', t, { note: el.value.slice(0, 2000) }); }, 500);
  });
  document.addEventListener('focusout', function (e) {
    var el = e.target;
    if (!el.hasAttribute || !el.hasAttribute('data-note')) return;
    var t = el.getAttribute('data-note');
    if (noteT[t]) { clearTimeout(noteT[t]); noteT[t] = null; if (((mine.topics[t] || {}).note || '') !== el.value) edit('topics', t, { note: el.value.slice(0, 2000) }); }
  });
  /* a link to a topic opens it */
  function openHash(initial) {
    var id = location.hash.slice(1), el = id && document.getElementById(id);
    if (!el) return;
    var d = el.querySelector('details.tp') || el.closest('details');
    /* arriving on a topic's link: show that topic, not the two open by default above it */
    if (initial === true) $$('details.tp').forEach(function (x) { if (x !== d) x.open = false; });
    if (d) d.open = true;
    var go = function () { el.scrollIntoView(); };
    go(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(go);
    el.classList.add('flash'); setTimeout(function () { el.classList.remove('flash'); }, 1400);
  }
  window.addEventListener('hashchange', openHash);
  var allOpen = false;
  $('#ws-open').addEventListener('click', function () {
    allOpen = !allOpen;
    $$('details.tp').forEach(function (d) { d.open = allOpen; });
    this.textContent = allOpen ? L.collapse : L.expand;
  });

  /* Save as PDF: every topic open, notes printed as text, the date printed */
  var was = [];
  function beforePrint() {
    was = $$('details').map(function (d) { return d.open; });
    $$('details').forEach(function (d) { d.open = true; });
    $$('textarea[data-note]').forEach(function (ta) {
      var pn = ta.nextElementSibling;
      if (!pn || !pn.classList.contains('pnote')) { pn = document.createElement('div'); pn.className = 'pnote'; pn.hidden = true; ta.parentNode.insertBefore(pn, ta.nextSibling); }
      pn.textContent = ta.value;
    });
    if (window.FIGS) window.FIGS.mount(document, { now: true });
    var pd = $('#ws-printed'); pd.textContent = fill(L.print_note, { d: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }); pd.hidden = false;
  }
  function afterPrint() { $$('details').forEach(function (d, i) { if (i < was.length) d.open = was[i]; }); $('#ws-printed').hidden = true; }
  window.addEventListener('beforeprint', beforePrint);
  window.addEventListener('afterprint', afterPrint);
  $('#ws-print').addEventListener('click', function () { beforePrint(); window.print(); });

  /* Download as a spreadsheet: one row per thing to do, with its status */
  $('#ws-csv').addEventListener('click', function () {
    var rows = [L.csvHead], q = function (v) { v = String(v == null ? '' : v); return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var abs = function (h) { try { return new URL(h, location.href).href; } catch (e) { return h; } };
    $$('section.topic').forEach(function (sec) {
      var tname = $('summary .tn', sec).textContent + '. ' + $('summary .tt', sec).textContent;
      $$('[data-tick]', sec).forEach(function (el) {
        var kind = el.getAttribute('data-tick').indexOf('pre-') === 0 ? L.kPre : L.kMake;
        rows.push([tname, kind, el.parentNode.textContent.trim(), el.checked ? L.done : L.notYet, '']);
      });
      $$('[data-steps]', sec).forEach(function (el) {
        var k = el.getAttribute('data-k'), a = $('a', el);
        var kind = k === 'chapter' ? L.kDo : k === 'read' ? L.kRead : k === 'try' ? L.kTry : L.kLook;
        rows.push([tname, kind, a ? a.textContent : '', el.classList.contains('done') ? L.done : el.classList.contains('half') ? L.half : L.notYet, a ? abs(a.getAttribute('href')) : '']);
      });
      var t = sec.getAttribute('data-topic'), m = mine.topics[t] || {};
      rows.push([tname, L.kCan, '', m.can ? L.yes : L.no, '']);
      if (m.note) rows.push([tname, L.kNote, m.note, '', '']);
    });
    var csv = '﻿' + rows.map(function (r) { return r.map(q).join(','); }).join('\r\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    a.download = 'ai-from-zero-worksheet' + (document.body.getAttribute('data-lang') === 'hi' ? '-hinglish' : '') + '.csv';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  });

  $('#theme').addEventListener('click', function () {
    var r = document.documentElement, cur = r.getAttribute('data-theme');
    var dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark'; r.setAttribute('data-theme', next);
    try { localStorage.setItem('aipm-plan-theme', next); } catch (e) { }
  });

  /* ---------- the reading panel ----------
     A link to the app, the book or the plan opens beside the worksheet
     instead of replacing it, so you can read and come straight back. The
     page in the panel is the real page: its links work, and a chapter marked
     complete there ticks here at once (it writes the shared progress record,
     and this page hears it). A click with Ctrl, Cmd or Shift, or the middle
     button, still opens a new tab as usual.

     History: opening adds one entry, so Back (a phone's system back) closes
     the panel. The frame is made fresh for each opening and removed on
     closing, so pages read inside it never leave entries behind that a later
     Back would step through invisibly. */
  var reader = document.getElementById('ws-reader'), lastRow = null, hashAtOpen = '';
  var PORTAL = /\/(app|book|plan)\//;
  function readerOpen() { return reader && !reader.hidden; }
  function frameEl() { return reader.querySelector('.rd-frame'); }
  function showReader(href, title, row) {
    if (!reader) return false;
    if (lastRow) lastRow.classList.remove('reading');
    lastRow = row || null; if (lastRow) lastRow.classList.add('reading');
    reader.querySelector('.rd-title').textContent = title || '';
    reader.querySelector('.rd-new').href = href;
    var fr = frameEl();
    if (readerOpen() && fr) {
      /* already reading: change page in place, without a new history entry */
      fr._first = true;
      try { fr.contentWindow.location.replace(href); } catch (e) { fr.src = href; }
    } else {
      hashAtOpen = location.hash;
      try { history.pushState({ wsReader: true }, ''); } catch (e) { }
      if (fr) fr.remove();
      fr = document.createElement('iframe');
      fr.className = 'rd-frame'; fr.title = reader.getAttribute('aria-label') || '';
      fr._first = true;
      fr.addEventListener('load', function () {
        try {
          var w = fr.contentWindow, t = w.document.title;
          if (w.location.href === 'about:blank') return;
          reader.querySelector('.rd-new').href = w.location.href;
          /* the link's own words name the first page; a page reached inside the panel names itself */
          if (t && !fr._first) reader.querySelector('.rd-title').textContent = t.replace(/\s*[—|]\s*AI From Zero.*$/, '');
          fr._first = false;
          /* Links followed inside the panel replace its page rather than add to
             the browser's history, so Back always means "close the panel". A
             link back to the worksheet just closes it. */
          var doc = w.document;
          if (!doc._wsHooked) {
            doc._wsHooked = true;
            doc.addEventListener('click', function (ev) {
              if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
              var a = ev.target.closest && ev.target.closest('a[href]');
              if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
              var u; try { u = new URL(a.getAttribute('href'), w.location.href); } catch (er) { return; }
              if (u.origin !== location.origin || /\/api\//.test(u.pathname)) return;
              ev.preventDefault();
              if (/\/worksheet\//.test(u.pathname)) { hideReader(false); return; }
              w.location.replace(u.href);
            });
          }
        } catch (e) { }
      });
      fr.src = href;
      reader.appendChild(fr);
      reader.hidden = false; document.body.classList.add('reading');
    }
    reader.querySelector('.rd-close').focus({ preventScroll: true });
    return true;
  }
  function hideReader(fromHistory) {
    if (!readerOpen()) return;
    var fr = frameEl(); if (fr) fr.remove();
    reader.hidden = true; document.body.classList.remove('reading');
    if (!fromHistory && history.state && history.state.wsReader) history.back();
    if (P) { S = P.load(); paint(); }
    if (lastRow) { var r = lastRow; setTimeout(function () { r.classList.remove('reading'); }, 1600); var a = r.querySelector('a'); if (a) a.focus({ preventScroll: true }); }
  }
  if (reader) {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || reader.contains(a) || a.target === '_blank' || a.hasAttribute('download')) return;
      var u; try { u = new URL(a.getAttribute('href'), location.href); } catch (er) { return; }
      if (u.origin !== location.origin || !PORTAL.test(u.pathname) || /\/api\//.test(u.pathname)) return;
      e.preventDefault();
      showReader(u.href, a.textContent.trim(), a.closest('.it, .wk, li'));
    });
    reader.querySelector('.rd-close').addEventListener('click', function () { hideReader(false); });
    /* Back closes the panel. Jumping to a topic on the worksheet while reading
       also moves through history; that keeps it open. */
    window.addEventListener('popstate', function () {
      if (readerOpen() && !(history.state && history.state.wsReader) && location.hash === hashAtOpen) hideReader(true);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && readerOpen()) { e.preventDefault(); hideReader(false); } });
  }

  /* ---------- start ---------- */
  loadMine(); show(); paint(); openHash(true);
  if (P) {
    P.onChange(function (s) { S = s; paint(); });
    P.pull().then(function (s) { S = s || S; paint(); }, function () { });
  }
  window.addEventListener('storage', function (e) { if (e.key === KEY) { loadMine(); show(); paint(); } });
  sync();
})();
