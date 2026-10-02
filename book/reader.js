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
  var size = function () { return parseFloat(getComputedStyle(root).getPropertyValue('--fs')) || 1.2; };
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
  if (menu) menu.addEventListener('click', function () { setDrawer(!toc.classList.contains('open')); });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });
  var here = toc && $('li.here', toc);
  if (here && toc.scrollTo) toc.scrollTo({ top: Math.max(0, here.offsetTop - toc.clientHeight / 3) });

  /* what has been read: a set of "lang/file" keys */
  var readKey = 'aifz-book-read';
  var readSet = function () { try { return JSON.parse(store.get(readKey) || '[]'); } catch (e) { return []; } };
  var isRead = function (f) { return readSet().indexOf(lang + '/' + f) >= 0; };
  var markRead = function (f) {
    var s = readSet(), k = lang + '/' + f;
    if (s.indexOf(k) < 0) { s.push(k); store.set(readKey, JSON.stringify(s)); }
  };
  var paintRead = function () {
    $$('[data-file]', document).forEach(function (el) {
      if (el.tagName === 'ARTICLE') return;
      var f = el.getAttribute('data-file');
      if (!/^\d\d-/.test(f)) return;
      var li = el.tagName === 'LI' ? el : el.closest('li');
      if (li && isRead(f)) li.classList.add('read');
    });
  };

  /* progress through the page, and the chapter counted as read near its end */
  var art = $('article[data-file]');
  var file = art && art.getAttribute('data-file');
  var bar = $('#progress i');
  var tick = function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var frac = h > 0 ? Math.min(1, window.scrollY / h) : 0;
    if (bar) bar.style.width = (frac * 100) + '%';
    if (file && /^\d\d-/.test(file) && frac > 0.9) { markRead(file); }
  };
  window.addEventListener('scroll', tick, { passive: true });
  tick();
  paintRead();

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
  var prog = $('#prog');
  if (prog) {
    var total = $$('.cards li').length;
    var done = readSet().filter(function (k) { return k.indexOf(lang + '/') === 0 && /\/\d\d-/.test(k); }).length;
    if (done) {
      prog.hidden = false;
      $('.bar i', prog).style.width = (done * 100 / total) + '%';
      $('.txt', prog).textContent = done + ' ' + (hi ? 'mein se' : 'of') + ' ' + total + ' ' + (hi ? 'chapter padhe gaye' : 'chapters read');
    }
  }

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
