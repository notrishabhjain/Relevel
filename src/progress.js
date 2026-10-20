/* Shared progress, for the pages that are not the playbook: the book and the
   plan. Served as /progress.js; build.js fills in STEP_DONE from the route
   (src/data/route.mjs), so every page decides "done" the same way.

   There is ONE progress record: the playbook's own saved state. It lives in
   this browser under the key the playbook uses, and in your account when you
   are signed in. These pages read it, and write to it only to tick what they
   own: a book chapter read (read[file]) and a route step done (steps[id]).

   Writing safely next to the playbook's own sync:
   - if this device has nothing else waiting to be sent, the tick is added to
     the server's copy and saved there at once, and this device takes that copy;
   - if the playbook has unsent work here, the tick is saved on this device and
     the playbook sends it with everything else on its next open.
   Either way nothing is overwritten and no "another device wrote first"
   question is raised for a tick. */
(function () {
  if (window.AIFZ_PROGRESS) return;
  var KEY = 'aifz2027', MKEY = KEY + ':srv';
  var stepDone = /*STEP_DONE*/null;

  function get(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v == null ? d : v; } catch (e) { return d; } }
  function put(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function load() { var S = get(KEY, {}); return S && typeof S === 'object' ? S : {}; }
  function meta() { return get(MKEY, {}) || {}; }

  /* The book used to keep its own list ("en/08-….html"). Fold it in once. */
  function migrate(S) {
    var old = get('aifz-book-read', null), changed = false;
    if (Array.isArray(old) && old.length) {
      S.read = S.read || {};
      old.forEach(function (k) {
        var f = String(k).split('/').pop();
        if (/^\d\d-.*\.html$/.test(f) && !S.read[f]) { S.read[f] = Date.now(); changed = true; }
      });
      try { localStorage.removeItem('aifz-book-read'); } catch (e) {}
    }
    return changed;
  }
  /* Anything the playbook would want to send: more than reading ticks. */
  function hasWork(S) {
    return Object.keys(S || {}).some(function (k) {
      if (k === 'read' || k === 'steps' || k === 'updatedAt' || k === 'lang' || k === 'theme') return false;
      var v = S[k];
      if (Array.isArray(v)) return v.length > 0;
      if (v && typeof v === 'object') return Object.keys(v).length > 0;
      return false;
    });
  }
  function unsent(S, m) {
    if (m.version == null) return hasWork(S);
    return (S.updatedAt || 0) !== (m.marker || 0);
  }
  function union(a, b) {
    var out = JSON.parse(JSON.stringify(b || {}));
    ['read', 'steps', 'done'].forEach(function (k) {
      out[k] = out[k] || {};
      Object.keys((a || {})[k] || {}).forEach(function (x) { if (a[k][x] && !out[k][x]) out[k][x] = a[k][x]; });
    });
    return out;
  }

  function call(path, opts) {
    opts = opts || {};
    var h = { 'x-aifz': '1' };
    if (opts.body) h['content-type'] = 'application/json';
    return fetch(path, { method: opts.method || 'GET', credentials: 'same-origin', headers: h,
      body: opts.body ? JSON.stringify(opts.body) : undefined })
      .then(function (r) { return r.json().catch(function () { return null; }).then(function (b) { return { status: r.status, body: b }; }); });
  }
  var who = null;
  function me() {
    if (!who) who = call('/api/me').then(function (r) { return r.status === 200 && r.body && r.body.user ? r.body.user : null; }, function () { return null; });
    return who;
  }
  function device() {
    var ua = navigator.userAgent || '';
    return (/Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iPhone/iPad' : /Mac OS X/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : 'device') + ' · book or plan';
  }

  /* The freshest copy this page can show. Takes the server's copy when it is
     newer and this device has nothing waiting; otherwise shows both merged. */
  function pull() {
    var S = load();
    if (migrate(S)) { S.updatedAt = Date.now(); put(KEY, S); }
    return me().then(function (u) {
      if (!u) return S;
      return call('/api/state').then(function (r) {
        if (r.status !== 200 || !r.body || !r.body.data) return S;
        var srv = r.body, m = meta(), L = load();
        if (!unsent(L, m)) {
          if (srv.version > (m.version || 0) || m.version == null) {
            put(KEY, srv.data); put(MKEY, { version: srv.version, marker: srv.data.updatedAt || 0 });
            /* ticks made here before signing in still count */
            if (L.read || L.steps) { var both = union(L, srv.data); if (JSON.stringify(both) !== JSON.stringify(srv.data)) return mark(function () {}, both); }
            return srv.data;
          }
          return L;
        }
        return union(L, srv.data);
      }, function () { return S; });
    });
  }

  /* Apply a tick, save it here, and send it if that is safe. */
  /* Same content, ignoring key order (the database reorders keys) and the clock. */
  function canon(v) {
    if (Array.isArray(v)) return '[' + v.map(canon).join(',') + ']';
    if (v && typeof v === 'object') return '{' + Object.keys(v).filter(function (k) { return k !== 'updatedAt'; }).sort()
      .map(function (k) { return JSON.stringify(k) + ':' + canon(v[k]); }).join(',') + '}';
    return JSON.stringify(v);
  }
  function same(a, b) { return canon(a) === canon(b); }
  function mark(fn, base) {
    var S = base || load(), m = meta(), waiting = unsent(S, m), before = JSON.parse(JSON.stringify(S));
    fn(S); S.updatedAt = Date.now(); put(KEY, S);
    emit(S);
    return me().then(function (u) {
      if (!u) return S;
      if (waiting) {
        /* the playbook has its own unsent work here: try to send all of it on
           the version it was based on. If the server moved on only because the
           playbook's last save (sent as the page closed) arrived, the server's
           copy is this device's copy: add the tick to it and save. Anything
           else is a real conflict, and the playbook shows it. */
        if (m.version == null) return S;
        return call('/api/state', { method: 'PUT', body: { baseVersion: m.version, data: S, device: device() } }).then(function (r) {
          if (r.status === 200) { put(MKEY, { version: r.body.version, marker: S.updatedAt }); return S; }
          if (r.status === 409 && r.body && r.body.data && same(r.body.data, before)) {
            var next = union(S, r.body.data); fn(next); next.updatedAt = Date.now();
            return call('/api/state', { method: 'PUT', body: { baseVersion: r.body.version, data: next, device: device() } }).then(function (w) {
              if (w.status === 200) { put(KEY, next); put(MKEY, { version: w.body.version, marker: next.updatedAt }); emit(next); return next; }
              return S;
            });
          }
          return S;
        }, function () { return S; });
      }
      return call('/api/state').then(function (r) {
        if (r.status !== 200 || !r.body) return S;
        var srv = r.body, next = union(S, srv.data || {});
        fn(next); next.updatedAt = Date.now();
        return call('/api/state', { method: 'PUT', body: { baseVersion: srv.version, data: next, device: device() } }).then(function (w) {
          if (w.status === 200) { put(KEY, next); put(MKEY, { version: w.body.version, marker: next.updatedAt }); emit(next); return next; }
          return S;
        });
      }).catch(function () { return S; });
    });
  }

  var listeners = [];
  function emit(S) { listeners.forEach(function (f) { try { f(S); } catch (e) {} }); }
  window.addEventListener('storage', function (e) { if (e.key === KEY) emit(load()); });

  window.AIFZ_PROGRESS = {
    load: load, pull: pull, stepDone: stepDone, signedIn: function () { return me().then(function (u) { return !!u; }); },
    markRead: function (file) { return mark(function (S) { S.read = S.read || {}; if (!S.read[file]) S.read[file] = Date.now(); }); },
    unmarkRead: function (file, id) { return mark(function (S) { if (S.read) delete S.read[file]; if (S.steps && id) delete S.steps[id]; }); },
    tick: function (id, on) { return mark(function (S) { S.steps = S.steps || {}; if (on === false) delete S.steps[id]; else if (!S.steps[id]) S.steps[id] = Date.now(); }); },
    onChange: function (f) { listeners.push(f); }
  };
})();
