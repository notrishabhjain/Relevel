/* The only script in the book: colours, text size, a progress line, a contents
   drawer, a search box, a remembered place and a tick on what you have read.
   Every part is optional; the pages read fine without it. */
(function () {
  var root = document.documentElement;
  var body = document.body;
  var lang = body.getAttribute('data-lang') || 'en';
  var hi = lang === 'hi';
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* colours: follow the device, or force light or dark */
  var order = [null, 'light', 'dark'];
  var themeBtn = $('#theme');
  var label = function (t) { return (hi ? 'Rang: ' : 'Colours: ') + (t || (hi ? 'device ke hisaab se' : 'follow the device')); };
  if (themeBtn) {
    themeBtn.title = label(root.getAttribute('data-theme'));
    themeBtn.addEventListener('click', function () {
      var i = order.indexOf(root.getAttribute('data-theme') || null);
      var next = order[(i + 1) % order.length];
      if (next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
      store.set('aifz-book-theme', next || '');
      themeBtn.title = label(next);
    });
  }

  /* text size */
  var size = function () { return parseFloat(getComputedStyle(root).getPropertyValue('--fs')) || 1.14; };
  var setSize = function (v) {
    v = Math.min(1.7, Math.max(0.95, v));
    root.style.setProperty('--fs', v + 'rem');
    store.set('aifz-book-size', String(v));
  };
  var dn = $('#size-down'), up = $('#size-up');
  if (dn) dn.addEventListener('click', function () { setSize(size() - 0.08); });
  if (up) up.addEventListener('click', function () { setSize(size() + 0.08); });

  /* the contents drawer on small screens */
  var toc = $('#toc'), menu = $('#menu'), scrim = $('#scrim');
  var setDrawer = function (open) {
    if (!toc) return;
    toc.classList.toggle('open', open);
    if (menu) menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (scrim) scrim.hidden = !open;
  };
  if (menu && toc) menu.addEventListener('click', function () { setDrawer(!toc.classList.contains('open')); });
  else if (menu) menu.hidden = true;
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });
  var here = toc && $('li.here', toc);
  if (here && toc.scrollTo) toc.scrollTo({ top: Math.max(0, here.offsetTop - toc.clientHeight / 3) });

  /* What has been read. One record for the whole site: the playbook's saved
     progress (read[file]), shared through /progress.js with the plan and your
     account, and the same whichever edition you read in. Reaching the end of a
     chapter ticks it; for a chapter split over two days, reaching the start of
     its second half ticks the first. */
  var P = window.AIFZ_PROGRESS || null;
  var readOf = function () { return (P ? P.load().read : null) || {}; };
  var counts = function (f) { return /^\d\d-/.test(f) || f === 'preface.html'; };
  var isRead = function (f) { return !!readOf()[f]; };
  var marked = {};
  var markRead = function (f) {
    if (!P || marked[f] || isRead(f)) return;
    marked[f] = 1;
    P.markRead(f).then(paintAll, paintAll);
  };
  var paintRead = function () {
    $$('[data-file]', document).forEach(function (el) {
      if (el.tagName === 'ARTICLE') return;
      var f = el.getAttribute('data-file');
      if (!counts(f)) return;
      var li = el.tagName === 'LI' ? el : el.closest('li');
      if (li) li.classList.toggle('read', isRead(f));
    });
  };
  var box = $('.routebox');
  var paintBox = function () {
    if (!box) return;
    var f = box.getAttribute('data-route-file'), done = isRead(f);
    var b = $('.rbmark', box), d = $('.rbdone', box);
    if (b) b.hidden = done; if (d) d.hidden = !done;
  };
  if (box) {
    var mb = $('.rbmark', box);
    if (mb) mb.addEventListener('click', function () { markRead(box.getAttribute('data-route-file')); });
    if (!P) box.hidden = true;
    else P.signedIn().then(function (yes) { var sg = $('.rbsign', box); if (sg) sg.hidden = yes; });
  }
  var paintAll = function () { paintRead(); paintBox(); paintCount(); };

  /* progress through the page, and the chapter counted as read near its end */
  var art = $('article[data-file]');
  var file = art && art.getAttribute('data-file');
  var bar = $('#progress i');
  var half = box && box.getAttribute('data-half'), upto = box && box.getAttribute('data-upto');
  var halfDone = false;
  var tick = function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var frac = h > 0 ? Math.min(1, window.scrollY / h) : 0;
    if (bar) bar.style.width = (frac * 100) + '%';
    if (file && counts(file) && frac > 0.9) { markRead(file); }
    if (P && half && !halfDone) {
      var el = document.getElementById(upto);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
        halfDone = true;
        var st = P.load().steps || {};
        if (!st[half]) P.tick(half);
      }
    }
  };
  window.addEventListener('scroll', tick, { passive: true });
  /* listening counts like reading (book/listen.js says which paragraph it is on) */
  document.addEventListener('aifz:heard', function (e) {
    var d = e.detail || {};
    if (d.end && file && counts(file)) markRead(file);
    if (P && half && !halfDone && d.el) {
      var a = document.getElementById(upto);
      if (a && (a === d.el || (a.compareDocumentPosition(d.el) & 4))) {
        halfDone = true;
        var st = P.load().steps || {};
        if (!st[half]) P.tick(half);
      }
    }
  });

  /* remember the chapter you were in */
  if (art && file !== 'index.html' && file !== 'glossary.html') {
    store.set('aifz-book-last-' + lang, file + '|' + art.getAttribute('data-title'));
  }
  var resume = $('#resume');
  var last = (store.get('aifz-book-last-' + lang) || '').split('|');
  if (resume && last[0]) {
    resume.href = body.getAttribute('data-base') + last[0];
    resume.textContent = (hi ? 'Wahin se jaari rakhiye: ' : 'Continue: ') + (last[1] || '');
    resume.hidden = false;
    var begin = $('#begin'); if (begin) begin.classList.add('quiet');
  }

  /* the count on the cover */
  function paintCount() {
    var prog = $('#prog');
    if (!prog) return;
    var total = $$('.cards li').length;
    var r = readOf(), done = Object.keys(r).filter(function (k) { return /^\d\d-/.test(k) && r[k]; }).length;
    prog.hidden = !done;
    if (done) {
      $('.bar i', prog).style.width = (done * 100 / total) + '%';
      $('.txt', prog).textContent = done + ' ' + (hi ? 'mein se' : 'of') + ' ' + total + ' ' + (hi ? 'chapter padhe gaye' : 'chapters read');
    }
  }
  paintAll();
  tick();
  /* the account may know more than this device: show that too */
  if (P) { P.pull().then(paintAll, function () {}); P.onChange(paintAll); }

  /* search: one box on the sidebar and one on the cover */
  var filter = function (q) {
    q = q.trim().toLowerCase();
    var any = false;
    $$('.toc ol > li, .cards > li, .frontlist > li').forEach(function (li) {
      if (li.classList.contains('sec')) return;
      var hit = !q || (li.getAttribute('data-t') || '').indexOf(q) >= 0;
      li.hidden = !hit;
      if (hit) any = true;
    });
    $$('.toc li.sec').forEach(function (li) { li.hidden = !!q; });
    $$('[data-sec]').forEach(function (g) {
      var vis = $$('li', g).some(function (li) { return !li.hidden; });
      g.hidden = !vis;
    });
    $$('.nomatch').forEach(function (n) { n.hidden = any; });
  };
  ['#q', '#q2'].forEach(function (id) {
    var el = $(id);
    if (el) el.addEventListener('input', function () {
      filter(el.value);
      var other = $(id === '#q' ? '#q2' : '#q'); if (other) other.value = el.value;
    });
  });

  /* "Save the whole book offline": ask the service worker to keep every page
     of this edition, so a phone can read it on a train. */
  var off = $('#offline'), offmsg = $('#offmsg');
  if (off) {
    if (!('serviceWorker' in navigator)) off.hidden = true;
    off.addEventListener('click', function () {
      var base = body.getAttribute('data-base') || '/book/';
      var urls = [base].concat($$('.cards a[href], .frontlist a[href]').map(function (a) { return new URL(a.getAttribute('href'), location.href).pathname; }))
        .concat($$('.cards a[href], .frontlist a[href]').map(function (a) {
          /* the words for Listen, so the phone's voice can read offline too */
          var u = new URL(a.getAttribute('href'), location.href).pathname;
          return /\.html$/.test(u) && !/glossary\.html$/.test(u) ? u.replace(/[^/]+\.html$/, function (f) { return 'say/' + f.replace(/\.html$/, '.json'); }) : null;
        }).filter(Boolean))
        .concat(['/book/style.css', '/book/reader.js', '/book/listen.js', '/progress.js', '/install.js', '/book/manifest.webmanifest'])
        .filter(function (u, i, all) { return all.indexOf(u) === i; });
      if (offmsg) offmsg.textContent = hi ? 'Save ho raha hai…' : 'Saving…';
      navigator.serviceWorker.ready.then(function (reg) {
        var sw = navigator.serviceWorker.controller || reg.active;
        if (!sw) throw new Error('no worker');
        navigator.serviceWorker.addEventListener('message', function on(e) {
          if (!e.data || e.data.type !== 'cached-pages') return;
          navigator.serviceWorker.removeEventListener('message', on);
          if (offmsg) offmsg.textContent = hi ? (e.data.ok + ' mein se ' + e.data.of + ' page save ho gaye. Ab yeh bina internet ke khulegi.')
            : (e.data.ok + ' of ' + e.data.of + ' pages saved. The book now opens without internet.');
        });
        sw.postMessage({ type: 'cache-pages', urls: urls });
      }).catch(function () { if (offmsg) offmsg.textContent = hi ? 'Is browser mein offline save nahi ho sakta.' : 'This browser cannot save pages offline.'; });
    });
  }

  /* arrow keys turn the page */
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target && e.target.tagName;
    if (t === 'INPUT' || t === 'TEXTAREA') return;
    var a = e.key === 'ArrowRight' ? $('.pager .next') : e.key === 'ArrowLeft' ? $('.pager .prev') : null;
    if (a) { window.location.href = a.href; }
  });

  /* a small way back to the top */
  var top = document.createElement('button');
  top.type = 'button'; top.className = 'b to-top'; top.textContent = '↑';
  top.setAttribute('aria-label', hi ? 'Upar jaaiye' : 'Back to top');
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  document.body.appendChild(top);
  window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 900); }, { passive: true });
})();
