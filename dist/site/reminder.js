/* The daily 12:00 reminder switch, shared by the workbook, the book and the plan.

   One small bell in the bottom-left corner. Tapping it opens a panel that
   signs you in, turns the reminder on or off for this device, or sends a
   test. It talks only to /api/nudge and the site's own service worker, and
   draws nothing at all when there is no account server (the single-file
   build, or offline). Self-contained: no page script or stylesheet needed. */
(function () {
  if (window.__aifzReminder) return; window.__aifzReminder = 1;
  var supported = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
  var st = { key: '', signedIn: false, on: false, open: false, msg: '', warn: false };

  function get(url, opts) {
    opts = opts || {};
    return fetch(url, { method: opts.method || 'GET', credentials: 'same-origin',
      headers: opts.body ? { 'content-type': 'application/json' } : {},
      body: opts.body ? JSON.stringify(opts.body) : undefined })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (b) { return { status: r.status, body: b }; }); });
  }
  function bytes(b) {
    var p = b.replace(/-/g, '+').replace(/_/g, '/'); while (p.length % 4) p += '=';
    var r = atob(p), o = new Uint8Array(r.length); for (var i = 0; i < r.length; i++) o[i] = r.charCodeAt(i); return o;
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
    '#aifz-rem .panel{position:absolute;left:0;bottom:calc(100% + 8px);width:min(19rem,calc(100vw - 24px));padding:14px;border-radius:12px;' +
    'background:#23302a;box-shadow:0 6px 24px rgb(0 0 0/.3);display:grid;gap:10px}' +
    '#aifz-rem .panel p{margin:0;font-weight:400}' +
    '#aifz-rem .panel .warn{color:#f2c27b}' +
    '#aifz-rem .row{display:flex;flex-wrap:wrap;gap:8px}' +
    '#aifz-rem .row button,#aifz-rem .row a{font:inherit;border-radius:8px;padding:7px 12px;cursor:pointer;text-decoration:none;' +
    'border:1px solid #f3efe655;background:transparent;color:#f3efe6}' +
    '#aifz-rem .row .main{background:#e2b04a;border-color:#e2b04a;color:#1d1a14}' +
    '#aifz-rem .x{position:absolute;top:6px;right:8px;border:0;background:none;color:#f3efe6aa;font-size:18px;cursor:pointer;line-height:1}' +
    /* room under the last line of every page, so the bell never sits on top of it */
    'body{padding-bottom:calc(60px + env(safe-area-inset-bottom,0px))}' +
    '@media print{#aifz-rem{display:none}}';

  var root;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function render() {
    var bell = '<span aria-hidden="true">&#128276;</span>';
    var pill = st.on
      ? '<button type="button" class="pill on" data-r="toggle-panel" aria-expanded="' + st.open + '" aria-label="Daily 12:00 reminder is on">' + bell + '<span class="dot"></span></button>'
      : '<button type="button" class="pill" data-r="toggle-panel" aria-expanded="' + st.open + '">' + bell + '<span>12:00 reminder</span></button>';
    var body;
    if (!supported) {
      body = '<p><strong>Daily 12:00 reminder</strong></p><p class="warn">This browser cannot show reminders. On an iPhone, tap Share, then “Add to Home Screen”, and open the site from that icon.</p>';
    } else if (!st.signedIn) {
      var next = encodeURIComponent(location.pathname + location.hash);
      body = '<p><strong>Daily 12:00 reminder</strong></p><p>A short note at noon on weekdays with one ten-minute step. Sign in so the reminder knows it is you.</p>' +
        '<div class="row"><a class="main" href="/api/auth/login?next=' + next + '">Sign in with GitHub</a></div>';
    } else {
      body = '<p><strong>Daily 12:00 reminder</strong></p><p>' + (st.on ? 'On for this device, weekdays at noon.' : 'Off for this device.') + '</p>' +
        '<div class="row">' + (st.on
          ? '<button type="button" data-r="test" class="main">Send a test</button><button type="button" data-r="toggle">Turn off</button>'
          : '<button type="button" data-r="toggle" class="main">Turn on</button>') + '</div>';
    }
    if (st.msg) body += '<p class="' + (st.warn ? 'warn' : '') + '" role="status">' + esc(st.msg) + '</p>';
    root.innerHTML = pill + (st.open ? '<div class="panel" role="dialog" aria-label="Daily reminder">' +
      '<button type="button" class="x" data-r="close" aria-label="Close">&times;</button>' + body + '</div>' : '');
  }
  function say(m, warn) { st.msg = m; st.warn = !!warn; render(); }

  function toggle() {
    reg().then(function (r) {
      return r.pushManager.getSubscription().then(function (sub) {
        if (sub) {
          var ep = sub.endpoint;
          return sub.unsubscribe().then(function () { return get('/api/nudge', { method: 'POST', body: { unsubscribe: ep } }); })
            .then(function () { st.on = false; say('Turned off.'); });
        }
        return Notification.requestPermission().then(function (perm) {
          if (perm !== 'granted') { say('Notifications are blocked for this site. Allow them in the browser settings, then try again.', true); return; }
          return r.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: bytes(st.key) }).then(function (s) {
            return get('/api/nudge', { method: 'POST', body: { subscription: s.toJSON() } }).then(function (res) {
              if (res.status === 200) { st.on = true; say('On. Tap “Send a test” to check it arrives.'); }
              else { s.unsubscribe(); say('Could not save the reminder. Try again.', true); }
            });
          });
        });
      });
    }).catch(function () { say('Could not change the reminder on this device.', true); });
  }
  function test() {
    say('Sending a test…');
    get('/api/nudge', { method: 'POST', body: { test: true } }).then(function (r) {
      var ok = r.status === 200 && r.body.sent;
      say(ok ? 'Test sent. It should appear in a few seconds.' : 'The test did not go through. Turn the reminder off and on again.', !ok);
    });
  }

  function start() {
    get('/api/nudge').then(function (r) {
      if (r.status !== 200 || !r.body.key) return;              // no account server here: stay invisible
      st.key = r.body.key; st.signedIn = !!r.body.signedIn;
      var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
      root = document.createElement('div'); root.id = 'aifz-rem'; document.body.appendChild(root);
      root.addEventListener('click', function (e) {
        var t = e.target.closest('[data-r]'); if (!t) return;
        var a = t.getAttribute('data-r');
        if (a === 'toggle-panel') { st.open = !st.open; st.msg = ''; render(); }
        else if (a === 'close') { st.open = false; render(); }
        else if (a === 'toggle') toggle();
        else if (a === 'test') test();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && st.open) { st.open = false; render(); } });
      if (supported && st.signedIn) {
        reg().then(function (g) { return g.pushManager.getSubscription(); })
          .then(function (sub) { st.on = !!sub; render(); }, render);
      } else render();
    }).catch(function () {});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
