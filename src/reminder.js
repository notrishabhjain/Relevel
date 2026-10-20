/* The daily 12:00 reminder switch, shared by the workbook, the book and the plan.

   One small bell in the bottom-left corner. Tapping it opens a panel that
   signs you in, turns the reminder on or off for this device, or sends a
   test, and says what the last scheduled reminder did. It talks only to
   /api/nudge and the site's own service worker, and draws nothing at all when
   there is no account server (the single-file build, or offline).
   Self-contained: no page script or stylesheet needed.

   Every write carries the x-aifz header: the API refuses writes without it
   (api/_lib/auth.js sameOriginWrite). Leaving it out is what once made
   "Turn on" fail on every page. */
(function () {
  if (window.__aifzReminder) return; window.__aifzReminder = 1;
  var supported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  var st = { key: '', signedIn: false, on: false, open: false, msg: '', warn: false, last: null, devices: 0, busy: false };

  function call(url, opts) {
    opts = opts || {};
    var h = { 'x-aifz': '1' };
    if (opts.body) h['content-type'] = 'application/json';
    return fetch(url, { method: opts.method || 'GET', credentials: 'same-origin', headers: h,
      body: opts.body ? JSON.stringify(opts.body) : undefined })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (b) { return { status: r.status, body: b || {} }; }); });
  }
  function bytes(b) {
    var p = b.replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '=';
    var r = atob(p), o = new Uint8Array(r.length); for (var i = 0; i < r.length; i++) o[i] = r.charCodeAt(i); return o;
  }
  function b64(buf) {
    var s = '', a = new Uint8Array(buf); for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  function reg() { return navigator.serviceWorker.register('/sw.js').then(function () { return navigator.serviceWorker.ready; }); }

  var css =
    '#aifz-rem{position:fixed;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:90;' +
    'font:500 13px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif;color:#f3efe6}' +
    '#aifz-rem *{box-sizing:border-box;text-transform:none;letter-spacing:normal;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}' +
    '#aifz-rem .pill{display:inline-flex;align-items:center;gap:6px;border:0;border-radius:999px;padding:8px 12px;cursor:pointer;' +
    'background:#23302a;color:#f3efe6;box-shadow:0 2px 10px rgb(0 0 0/.25);font:inherit}' +
    '#aifz-rem .pill.on{padding:8px 10px;opacity:.75}' +
    '#aifz-rem .pill:focus-visible,#aifz-rem button:focus-visible,#aifz-rem a:focus-visible{outline:2px solid #e2b04a;outline-offset:2px}' +
    '#aifz-rem .dot{width:7px;height:7px;border-radius:50%;background:#7fd19b}' +
    '#aifz-rem .panel{position:absolute;left:0;bottom:calc(100% + 8px);width:min(20rem,calc(100vw - 24px));padding:14px;border-radius:12px;' +
    'background:#23302a;box-shadow:0 6px 24px rgb(0 0 0/.3);display:grid;gap:10px}' +
    '#aifz-rem .panel p{margin:0;font-weight:400}' +
    '#aifz-rem .panel .warn{color:#f2c27b}' +
    '#aifz-rem .panel .dim{color:#f3efe6b3;font-size:12px}' +
    '#aifz-rem .row{display:flex;flex-wrap:wrap;gap:8px}' +
    '#aifz-rem .row button,#aifz-rem .row a{font:inherit;border-radius:8px;padding:7px 12px;cursor:pointer;text-decoration:none;' +
    'border:1px solid #f3efe655;background:transparent;color:#f3efe6}' +
    '#aifz-rem .row button[disabled]{opacity:.6;cursor:wait}' +
    '#aifz-rem .row .main{background:#e2b04a;border-color:#e2b04a;color:#1d1a14}' +
    '#aifz-rem .x{position:absolute;top:6px;right:8px;border:0;background:none;color:#f3efe6aa;font-size:18px;cursor:pointer;line-height:1}' +
    /* room under the last line of every page, so the bell never sits on top of it */
    'body{padding-bottom:calc(60px + env(safe-area-inset-bottom,0px))}' +
    '@media print{#aifz-rem{display:none}}';

  var root;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function when(ms) {
    try {
      return new Date(ms).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
    } catch (e) { return new Date(ms).toString().slice(0, 21); }
  }
  function lastLine() {
    var l = st.last; if (!l || !l.at) return 'No scheduled reminder has run yet.';
    var at = when(l.at);
    if (l.outcome === 'sent') return 'Last reminder: ' + at + ', delivered to ' + l.sent + ' of ' + l.devices + ' device' + (l.devices === 1 ? '' : 's') + '.';
    if (l.outcome === 'no_devices') return 'Last reminder: ' + at + '. No device had the reminder turned on.';
    if (l.outcome === 'too_late') return 'Last reminder: ' + at + '. Skipped, because the scheduler ran too late in the day.';
    return 'Last reminder: ' + at + '. The push service refused it (' + (l.statuses || []).join(', ') + ').';
  }
  function render() {
    var bell = '<span aria-hidden="true">&#128276;</span>';
    var pill = st.on
      ? '<button type="button" class="pill on" data-r="toggle-panel" aria-expanded="' + st.open + '" aria-label="Daily 12:00 reminder is on">' + bell + '<span class="dot"></span></button>'
      : '<button type="button" class="pill" data-r="toggle-panel" aria-expanded="' + st.open + '">' + bell + '<span>12:00 reminder</span></button>';
    var body = '<p><strong>Daily 12:00 reminder</strong></p>';
    var dis = st.busy ? ' disabled' : '';
    if (!supported) {
      body += '<p class="warn">This browser cannot show reminders. On an iPhone, tap Share, then “Add to Home Screen”, and open the site from that icon.</p>';
    } else if (!st.signedIn) {
      var next = encodeURIComponent(location.pathname + location.hash);
      body += '<p>A short note around noon on weekdays with the day’s ten-minute step. Sign in so the reminder knows it is you.</p>' +
        '<div class="row"><a class="main" href="/api/auth/login?next=' + next + '">Sign in with GitHub</a></div>';
    } else if (Notification.permission === 'denied') {
      body += '<p class="warn">Notifications are blocked for this site in this browser. Open the site settings (the icon left of the address), allow Notifications, then reload.</p>';
    } else {
      body += '<p>' + (st.on ? 'On for this device. Weekdays, between 11:30 and 12:30.' : 'Off for this device.') + '</p>' +
        '<div class="row">' + (st.on
          ? '<button type="button" data-r="test" class="main"' + dis + '>Send a test</button><button type="button" data-r="toggle"' + dis + '>Turn off</button>'
          : '<button type="button" data-r="toggle" class="main"' + dis + '>Turn on</button>') + '</div>' +
        '<p class="dim">' + esc(lastLine()) + (st.devices ? ' Devices on: ' + st.devices + '.' : '') + '</p>';
    }
    if (st.msg) body += '<p class="' + (st.warn ? 'warn' : '') + '" role="status">' + esc(st.msg) + '</p>';
    root.innerHTML = pill + (st.open ? '<div class="panel" role="dialog" aria-label="Daily reminder">' +
      '<button type="button" class="x" data-r="close" aria-label="Close">&times;</button>' + body + '</div>' : '');
  }
  function say(m, warn) { st.msg = m; st.warn = !!warn; st.busy = false; render(); }

  /* Save this browser's subscription on the server. */
  function save(sub) {
    return call('/api/nudge', { method: 'POST', body: { subscription: sub.toJSON() } }).then(function (r) {
      if (r.status !== 200) throw new Error('save ' + r.status);
      return r;
    });
  }
  function subscribe(g) {
    return g.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: bytes(st.key) });
  }
  /* A subscription made with an old signing key can never be delivered to. */
  function sameKey(sub) {
    try { var k = sub.options && sub.options.applicationServerKey; return !k || b64(k) === st.key; } catch (e) { return true; }
  }

  function toggle() {
    st.busy = true; render();
    reg().then(function (g) {
      return g.pushManager.getSubscription().then(function (sub) {
        if (sub) {
          var ep = sub.endpoint;
          return sub.unsubscribe().then(function () { return call('/api/nudge', { method: 'POST', body: { unsubscribe: ep } }); })
            .then(function () { st.on = false; st.devices = Math.max(0, st.devices - 1); say('Turned off for this device.'); });
        }
        return Notification.requestPermission().then(function (perm) {
          if (perm !== 'granted') { say('Notifications are blocked for this site. Allow them in the browser settings, then try again.', true); return; }
          return subscribe(g).then(function (s) {
            return save(s).then(function () {
              st.on = true; st.devices += 1;
              say('On. Tap “Send a test” to check one arrives.');
            }, function (e) {
              s.unsubscribe();
              say('The site could not save this device (' + e.message + '). Try again in a minute.', true);
            });
          });
        });
      });
    }).catch(function (e) { say('This browser would not set up the reminder: ' + (e && e.message || e) + '.', true); });
  }
  function test() {
    st.msg = 'Sending a test…'; st.warn = false; st.busy = true; render();
    call('/api/nudge', { method: 'POST', body: { test: true } }).then(function (r) {
      var b = r.body || {};
      if (r.status === 200 && b.sent) return say('Test sent to ' + b.sent + ' device' + (b.sent === 1 ? '' : 's') + '. It should appear within a few seconds. If it doesn’t on Android, allow Chrome to run in the background in the phone’s battery settings.');
      if (r.status === 200 && !b.devices) return say('No device is on file. Turn the reminder off and on again on this device.', true);
      if (r.status === 200) return say('The push service refused it (' + (b.statuses || []).join(', ') + '). Turn the reminder off and on again on this device.', true);
      say('The test could not be sent (' + r.status + ').', true);
    }, function () { say('The test could not be sent. Check the connection.', true); });
  }

  /* On every page load: if this browser has a subscription, make sure the
     server has it too, and that it was made with the current key. */
  function heal(g, sub) {
    if (!sub) return Promise.resolve(false);
    if (!sameKey(sub)) {
      return sub.unsubscribe().then(function () { return subscribe(g); }).then(function (s) { return save(s).then(function () { return true; }); });
    }
    return call('/api/nudge?endpoint=' + encodeURIComponent(sub.endpoint)).then(function (r) {
      if (r.body && r.body.known === false) return save(sub).then(function () { st.devices += 1; return true; });
      return true;
    });
  }

  function start() {
    call('/api/nudge').then(function (r) {
      if (r.status !== 200 || !r.body.key) return;              // no account server here: stay invisible
      st.key = r.body.key; st.signedIn = !!r.body.signedIn; st.last = r.body.last || null; st.devices = r.body.devices || 0;
      var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
      root = document.createElement('div'); root.id = 'aifz-rem'; document.body.appendChild(root);
      root.addEventListener('click', function (e) {
        var t = e.target.closest('[data-r]'); if (!t || t.disabled) return;
        var a = t.getAttribute('data-r');
        if (a === 'toggle-panel') { st.open = !st.open; st.msg = ''; render(); }
        else if (a === 'close') { st.open = false; render(); }
        else if (a === 'toggle') toggle();
        else if (a === 'test') test();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && st.open) { st.open = false; render(); } });
      render();
      if (supported && st.signedIn && Notification.permission === 'granted') {
        reg().then(function (g) {
          return g.pushManager.getSubscription().then(function (sub) {
            return heal(g, sub).then(function (ok) { st.on = !!ok; render(); });
          });
        }).catch(render);
      }
    }).catch(function () {});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
