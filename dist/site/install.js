/* Install the book or the plan as an app of its own. Served as /install.js and
   loaded by every book page and the plan.

   - Registers the site's service worker (scope "/"), which keeps pages for
     reading offline and delivers the 12:00 reminder.
   - Fills any [data-install] button: on Android and desktop Chrome it opens
     the browser's own install prompt; where there is none (iPhone Safari,
     Firefox) it opens short instructions for this phone instead.
   - Hides itself inside the installed app. */
(function () {
  if (window.__aifzInstall) return; window.__aifzInstall = 1;
  var hi = document.body && document.body.getAttribute('data-lang') === 'hi';
  var app = /^\/plan\//.test(location.pathname) ? 'plan' : 'book';
  var L = hi ? {
    btn: 'App banaiye', title: app === 'book' ? 'Kitaab ko app ki tarah rakhiye' : 'Plan ko app ki tarah rakhiye',
    why: 'Yeh home screen par apne icon ke saath khulta hai, bina address bar ke, aur padhe hue page bina internet ke bhi khulte hain.',
    ios: ['Ise <b>Safari</b> mein kholiye.', '<b>Share</b> button dabaiye (upar teer wala chaukor).', '<b>Add to Home Screen</b> chuniye, phir <b>Add</b>.'],
    and: ['Ise <b>Chrome</b> mein kholiye.', '<b>⋮</b> menu kholiye.', '<b>Install app</b> (ya <b>Add to Home screen</b>) chuniye.'],
    desk: ['<b>Chrome</b> ya <b>Edge</b> mein address bar ke daayein install icon dabaiye, ya menu mein <b>Install</b> chuniye.'],
    sync: 'iPhone par installed app ka storage alag hota hai: app ke andar ek baar sign in kar lijiye, taaki ticks har jagah ek jaise rahein.',
    close: 'Band kijiye', done: 'Yeh app installed hai.'
  } : {
    btn: 'Install app', title: app === 'book' ? 'Keep the book as an app' : 'Keep the plan as an app',
    why: 'It opens from its own icon on your home screen, without the address bar, and pages you have read open without internet.',
    ios: ['Open this page in <b>Safari</b>.', 'Tap <b>Share</b> (the square with an arrow).', 'Choose <b>Add to Home Screen</b>, then <b>Add</b>.'],
    and: ['Open this page in <b>Chrome</b>.', 'Open the <b>⋮</b> menu.', 'Choose <b>Install app</b> (or <b>Add to Home screen</b>).'],
    desk: ['In <b>Chrome</b> or <b>Edge</b>, use the install icon at the right of the address bar, or choose <b>Install</b> in the menu.'],
    sync: 'On an iPhone an installed app keeps its own storage: sign in once inside the app so your ticks stay the same everywhere.',
    close: 'Close', done: 'This is installed as an app.'
  };

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(function () {});

  var installed = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  var prompt = null;
  var buttons = function () { return Array.prototype.slice.call(document.querySelectorAll('[data-install]')); };
  var paint = function () {
    buttons().forEach(function (b) {
      b.hidden = installed;
      if (!b.textContent.trim()) b.textContent = L.btn;
      b.classList.toggle('ready', !!prompt);
    });
  };
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); prompt = e; paint(); });
  window.addEventListener('appinstalled', function () { installed = true; prompt = null; paint(); });

  var ua = navigator.userAgent || '';
  var platform = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document) ? 'ios' : /Android/.test(ua) ? 'and' : 'desk';
  function help() {
    var old = document.getElementById('aifz-install'); if (old) { old.remove(); return; }
    var d = document.createElement('div');
    d.id = 'aifz-install'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', L.title);
    var steps = L[platform].map(function (x) { return '<li>' + x + '</li>'; }).join('');
    d.innerHTML = '<div class="ai-card"><button type="button" class="ai-x" aria-label="' + L.close + '">&times;</button>' +
      '<p class="ai-t">' + L.title + '</p><p>' + L.why + '</p><ol>' + steps + '</ol>' +
      (platform === 'ios' ? '<p class="ai-n">' + L.sync + '</p>' : '') + '</div>';
    d.addEventListener('click', function (e) { if (e.target === d || e.target.classList.contains('ai-x')) d.remove(); });
    document.body.appendChild(d);
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-install]');
    if (!b) return;
    e.preventDefault();
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then(function (c) { if (c && c.outcome === 'accepted') installed = true; prompt = null; paint(); });
    } else help();
  });

  var css = document.createElement('style');
  css.textContent =
    '#aifz-install{position:fixed;inset:0;z-index:95;background:rgb(0 0 0/.45);display:flex;align-items:flex-end;justify-content:center;padding:12px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0px))}' +
    '#aifz-install .ai-card{position:relative;max-width:26rem;width:100%;background:#fffdf8;color:#1d1a14;border-radius:14px;padding:16px 18px;font:400 15px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;box-shadow:0 10px 30px rgb(0 0 0/.3)}' +
    '#aifz-install p{margin:0 0 .6rem}#aifz-install ol{margin:0 0 .6rem;padding-left:1.2rem}#aifz-install li{margin:.2rem 0}' +
    '#aifz-install .ai-t{font-weight:600;font-size:16px}#aifz-install .ai-n{font-size:13px;color:#5d564a}' +
    '#aifz-install .ai-x{position:absolute;top:6px;right:10px;border:0;background:none;font-size:22px;line-height:1;cursor:pointer;color:#5d564a}' +
    '@media (prefers-color-scheme:dark){#aifz-install .ai-card{background:#1d1a17;color:#efe8dc}#aifz-install .ai-n,#aifz-install .ai-x{color:#b9b0a2}}';
  document.head.appendChild(css);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint); else paint();
})();
