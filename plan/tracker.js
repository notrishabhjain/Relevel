/* Client script for /plan/. Inlined into the page by plan/build.mjs.

   Three jobs:
   1. Tabs: Plan, Build, Curriculum are panels of one page. Any #anchor opens the panel it lives in.
   2. Tracker: tick boxes, links and notes on the week cards, gates and parking lot.
      Saved in this browser always; also saved to your account when you are signed in.
   3. Status: where you are in the 26 weeks and how far behind (same rules as api/_lib/plan.js). */
(function () {
  'use strict';
  var START = Date.UTC(2026, 9, 7), DAY = 86400000, WEEKS = 26, KEY = 'aipm-plan-v1';
  var LEVELS = [
    'On track. Do this week’s row and tick it off.',
    'One week behind. Do a floor week (three 45-minute sessions and one commit), then redo the missed ship item in your build slot.',
    'Two weeks behind. Switch to the light plan for 2 weeks (one learning item plus the ship item) and tell your accountability person.',
    'Three or more weeks behind. Stop and decide on purpose: light plan for a month, or move the whole plan back 4 weeks and write down why. Do not drift quietly.'
  ];
  var LEVEL_NAMES = ['On track', '1 week behind', '2 weeks behind', '3+ weeks behind'];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- tabs and anchors ---------- */
  var TABS = { plan: 1, build: 1, curriculum: 1 };
  function activate(tab) {
    $$('[data-tab]').forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-tab') === tab); });
    $$('header.bar a[data-go]').forEach(function (a) {
      if (a.getAttribute('data-go') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function route(initial) {
    var id = ''; try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { id = ''; }
    var tab = 'plan', el = null;
    if (TABS[id]) tab = id;
    else if (id) {
      el = document.getElementById(id);
      var p = el && el.closest('[data-tab]');
      if (p) tab = p.getAttribute('data-tab');
    }
    activate(tab);
    if (el) {
      for (var d = el.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true;
      el.scrollIntoView();
      el.classList.add('flash');
      setTimeout(function () { el.classList.remove('flash'); }, 1600);
    } else if (!initial || TABS[id]) window.scrollTo(0, 0);
  }

  /* ---------- state ---------- */
  var state = { weeks: {}, gates: {}, parking: {} };
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.weeks) state = { weeks: s.weeks || {}, gates: s.gates || {}, parking: s.parking || {} }; } catch (e) { }
  }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { } }
  function mergeInto(a, b) {
    var out = { weeks: {}, gates: {}, parking: {} };
    ['weeks', 'gates', 'parking'].forEach(function (part) {
      var keys = {}; Object.keys(a[part] || {}).concat(Object.keys(b[part] || {})).forEach(function (k) { keys[k] = 1; });
      Object.keys(keys).forEach(function (k) {
        var p = (a[part] || {})[k], q = (b[part] || {})[k];
        out[part][k] = !p ? q : !q ? p : ((q.u || 0) >= (p.u || 0) ? q : p);
      });
    });
    return out;
  }
  function wk(n) { return state.weeks[n] || {}; }

  /* ---------- dates and status ---------- */
  function istToday() { var d = new Date(Date.now() + 19800000); return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()); }
  function currentWeek() {
    var idx = Math.round((istToday() - START) / DAY);
    return idx < 0 ? 0 : Math.min(WEEKS + 1, Math.floor(idx / 7) + 1);
  }
  function summary() {
    var cur = currentWeek(), shipped = 0, due = 0, behind = 0, floor = 0, streak = 0, n;
    for (n = 1; n <= WEEKS; n++) {
      if (wk(n).ship) { shipped++; if (wk(n).floor) floor++; }
      if (n < cur) { due++; if (!wk(n).ship) behind++; }
    }
    n = Math.min(cur, WEEKS);
    if (n >= 1 && !wk(n).ship) n--;
    while (n >= 1 && wk(n).ship) { streak++; n--; }
    return { cur: cur, shipped: shipped, due: due, behind: behind, floor: floor, streak: streak, level: Math.min(3, behind) };
  }
  function renderStatus() {
    var box = $('#status'); if (!box) return;
    var s = summary(), cells = '', n, head, msg, lvl = s.level;
    for (n = 1; n <= WEEKS; n++) {
      var d = wk(n), cls = 'cell';
      if (d.ship) cls += ' shipped'; else if (n < s.cur) cls += ' missed'; else if (d.learn || d.build) cls += ' partial';
      if (n === s.cur) cls += ' current';
      cells += '<a class="' + cls + '" href="#w' + n + '" title="Week ' + n + '">' + n + '</a>';
    }
    if (s.cur === 0) { head = 'Starts 7 Oct'; msg = 'The plan starts on 7 October 2026. Set up your tools ahead of time if you can.'; lvl = 0; }
    else if (s.cur > WEEKS) { head = 'Plan window over'; msg = 'The 26 weeks ended on 6 April 2027. Keep the 3-hours-a-week learning loop.'; lvl = 0; }
    else { head = 'Week ' + s.cur + ' of ' + WEEKS; msg = LEVELS[lvl]; }
    var jump = s.cur >= 1 && s.cur <= WEEKS ? '<a class="jump" href="#w' + s.cur + '">Open this week’s row</a>' : '';
    box.innerHTML =
      '<div class="row"><div class="stat"><span class="v">' + esc(head) + '</span>' + jump + '</div>' +
      '<div class="stat"><span class="v">' + s.shipped + '<small> / ' + s.due + ' due</small></span><span class="k">Weeks shipped</span></div>' +
      '<div class="stat"><span class="v">' + s.streak + '</span><span class="k">Week streak</span></div>' +
      '<div class="stat"><span class="v">' + s.behind + '</span><span class="k">Behind</span></div>' +
      '<div class="stat"><span class="v">' + s.floor + '</span><span class="k">Floor weeks</span></div>' +
      '<span class="pill lvl-' + lvl + '">' + (s.cur >= 1 && s.cur <= WEEKS ? LEVEL_NAMES[lvl] : 'Not running') + '</span></div>' +
      '<p class="msg lvl-' + lvl + '">' + esc(msg) + '</p>' +
      '<div class="strip" aria-label="Weekly progress strip">' + cells + '</div>' +
      '<div class="legend"><span><i class="sh"></i>Shipped</span><span><i class="pa"></i>Started</span><span><i class="mi"></i>Missed</span><span><i class="cu"></i>This week</span></div>';
  }

  /* ---------- the controls on the page ---------- */
  function setVal(el, v) { if (document.activeElement !== el && el.value !== v) el.value = v; }
  function applyControls() {
    var cur = currentWeek();
    $$('article.wk').forEach(function (a) {
      var n = +a.getAttribute('data-week'), d = wk(n);
      $$('input[data-f]', a).forEach(function (i) {
        var f = i.getAttribute('data-f');
        if (i.type === 'checkbox') i.checked = !!d[f]; else setVal(i, d[f] || '');
      });
      a.classList.toggle('shipped', !!d.ship);
      a.classList.toggle('current', n === cur);
      a.classList.toggle('missed', n < cur && !d.ship);
      var lk = $('.shiplink', a);
      if (lk) lk.innerHTML = d.link && /^https?:\/\//i.test(d.link) ? '<a href="' + esc(d.link) + '" target="_blank" rel="noopener noreferrer">' + esc(d.link) + '</a>' : '';
    });
    $$('details.month').forEach(function (m) {
      var from = +m.getAttribute('data-from'), to = +m.getAttribute('data-to'), c = 0;
      for (var i = from; i <= to; i++) if (wk(i).ship) c++;
      var s = $('.count', m); if (s) s.textContent = c + ' of ' + (to - from + 1) + ' shipped';
    });
    var passed = 0;
    $$('div.gate').forEach(function (g) {
      var id = g.getAttribute('data-gate'), d = state.gates[id] || {};
      if (d.passed) passed++;
      $$('input[data-f]', g).forEach(function (i) {
        var f = i.getAttribute('data-f');
        if (i.type === 'checkbox') i.checked = !!d[f]; else setVal(i, d[f] || '');
      });
    });
    var gc = $('#gate-count'); if (gc) gc.textContent = passed + ' of 6 passed';
    renderParking();
    renderStatus();
  }
  function renderParking() {
    var box = $('#parking-list'); if (!box) return;
    var items = Object.keys(state.parking).filter(function (k) { return !state.parking[k].del; })
      .map(function (k) { return { id: k, text: state.parking[k].text, u: state.parking[k].u || 0 }; })
      .sort(function (a, b) { return b.u - a.u; });
    box.innerHTML = items.length
      ? '<ul class="plist">' + items.map(function (p) { return '<li><span>' + esc(p.text) + '</span><button type="button" class="quiet" data-del="' + esc(p.id) + '">Remove</button></li>'; }).join('') + '</ul>'
      : '<p class="empty">Nothing parked. When a new idea, course or tool shows up, write it here and go back to this week’s row.</p>';
    var c = $('#parking-count'); if (c) c.textContent = items.length + ' parked';
  }

  function touch(part, key, patch) {
    var cur = state[part][key] || {};
    var next = {}; Object.keys(cur).forEach(function (k) { next[k] = cur[k]; });
    Object.keys(patch).forEach(function (k) { next[k] = patch[k]; });
    next.u = Date.now();
    state[part][key] = next;
    persist(); applyControls(); schedulePush();
  }
  document.addEventListener('change', function (ev) {
    var t = ev.target, f = t && t.getAttribute && t.getAttribute('data-f');
    if (!f) return;
    var patch = {}; patch[f] = t.type === 'checkbox' ? t.checked : t.value.trim();
    var a = t.closest('article.wk'), g = t.closest('div.gate');
    if (a) touch('weeks', +a.getAttribute('data-week'), patch);
    else if (g) touch('gates', g.getAttribute('data-gate'), patch);
  });
  document.addEventListener('click', function (ev) {
    var t = ev.target; if (!t || !t.closest) return;
    var del = t.closest('[data-del]');
    if (del) { touch('parking', del.getAttribute('data-del'), { del: true }); return; }
    if (t.id === 'park-add') addParking();
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && ev.target && ev.target.id === 'park-input') { ev.preventDefault(); addParking(); }
  });
  function addParking() {
    var i = $('#park-input'); if (!i || !i.value.trim()) return;
    var id = 'p' + Date.now().toString(36);
    touch('parking', id, { text: i.value.trim().slice(0, 300) });
    i.value = '';
  }

  /* ---------- sync with the account (only when the site has an API) ---------- */
  var api = { ok: false, user: null, shareId: null, timer: null, busy: false, again: false };
  function setSync(text, cls) { var s = $('#sync-text'); if (s) { s.textContent = text; s.className = cls || ''; } }
  function call(path, opts) {
    opts = opts || {}; opts.credentials = 'same-origin';
    opts.headers = Object.assign({ 'x-aifz': '1' }, opts.headers || {});
    if (opts.body && typeof opts.body !== 'string') { opts.headers['content-type'] = 'application/json'; opts.body = JSON.stringify(opts.body); }
    return fetch(path, opts).then(function (r) { return r.json().catch(function () { return {}; }).then(function (b) { return { status: r.status, body: b }; }); });
  }
  function renderSync() {
    var bar = $('#sync'); if (!bar) return;
    var share = '';
    if (api.user) {
      var url = api.shareId ? location.origin + '/api/plan-status?id=' + api.shareId : '';
      share = '<label class="chk"><input type="checkbox" id="share-on"' + (api.shareId ? ' checked' : '') + '><span>Let my check-ins read a counts-only summary</span></label>' +
        (url ? '<p class="small">Link for the check-in: <code>' + esc(url) + '</code> It shows week numbers and counts only, never your links or notes. Untick to turn it off.</p>' : '');
    }
    var who = api.user ? 'Synced to your account as @' + esc(api.user.login) + '.' :
      api.ok ? '<a href="../api/auth/login?next=/plan/">Sign in with GitHub</a> to keep this tracker on every device.' : '';
    bar.innerHTML = '<div class="row"><span id="sync-text">' + (api.user ? 'Saved.' : 'Saved in this browser only.') + '</span> <span>' + who + '</span></div>' + share +
      '<div class="row small"><button type="button" class="quiet" id="exp">Download backup</button> <label class="quiet filebtn">Restore backup<input type="file" id="imp" accept="application/json" hidden></label></div>';
  }
  function schedulePush() {
    if (!api.user) return;
    setSync('Saving…');
    clearTimeout(api.timer); api.timer = setTimeout(push, 700);
  }
  function push() {
    if (api.busy) { api.again = true; return; }
    api.busy = true;
    call('../api/plan', { method: 'PUT', body: { data: state } }).then(function (r) {
      api.busy = false;
      if (r.status === 200 && r.body.data) {
        state = mergeInto(state, r.body.data); persist(); applyControls(); setSync('Saved to your account.');
      } else setSync('Could not reach your account. Changes are kept in this browser.', 'warn');
      if (api.again) { api.again = false; schedulePush(); }
    }, function () { api.busy = false; setSync('Offline. Changes are kept in this browser.', 'warn'); });
  }
  document.addEventListener('change', function (ev) {
    var t = ev.target; if (!t) return;
    if (t.id === 'share-on') {
      call('../api/plan', { method: 'POST', body: { share: t.checked } }).then(function (r) {
        if (r.status === 200) { api.shareId = r.body.shareId || null; renderSync(); }
      });
    } else if (t.id === 'imp' && t.files && t.files[0]) {
      var fr = new FileReader();
      fr.onload = function () {
        try { var d = JSON.parse(fr.result); state = mergeInto(state, d); persist(); applyControls(); schedulePush(); setSync('Backup restored.'); }
        catch (e) { setSync('That file is not a tracker backup.', 'warn'); }
      };
      fr.readAsText(t.files[0]);
    }
  });
  document.addEventListener('click', function (ev) {
    if (ev.target && ev.target.id === 'exp') {
      var b = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'ai-pm-plan-progress.json';
      document.body.appendChild(a); a.click(); a.remove();
    }
  });
  function startSync() {
    call('../api/me').then(function (r) {
      if (r.status !== 200 || !('user' in r.body)) { renderSync(); return; }
      api.ok = true; api.user = r.body.user;
      if (!api.user) { renderSync(); return; }
      call('../api/plan').then(function (g) {
        if (g.status === 200) {
          api.shareId = g.body.shareId || null;
          state = mergeInto(g.body.data || {}, state); persist(); applyControls();
        }
        renderSync(); push();
      });
    }, function () { renderSync(); });
  }

  /* ---------- go ---------- */
  load();
  document.documentElement.classList.add('js');
  applyControls(); renderSync(); route(true);
  window.addEventListener('hashchange', function () { route(false); });
  var cm = $('details.month[data-from]');
  $$('details.month').forEach(function (m) {
    var c = currentWeek(); if (c >= +m.getAttribute('data-from') && c <= +m.getAttribute('data-to')) m.open = true;
  });
  if (cm && !$('details.month[open]')) cm.open = true;
  startSync();
})();
