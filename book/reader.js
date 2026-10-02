/* The only script in the book: colours, text size, a progress line, and a
   remembered place. Every line is optional; the pages read fine without it. */
(function () {
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* colours: follow the device, or force light or dark */
  var order = [null, 'light', 'dark'];
  var themeBtn = document.getElementById('theme');
  var label = function (t) { return t ? 'Colours: ' + t : 'Colours: follow the device'; };
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
  var size = function () { return parseFloat(getComputedStyle(root).getPropertyValue('--fs')) || 1.22; };
  var setSize = function (v) {
    v = Math.min(1.7, Math.max(0.95, v));
    root.style.setProperty('--fs', v + 'rem');
    store.set('aifz-book-size', String(v));
  };
  var dn = document.getElementById('size-down'), up = document.getElementById('size-up');
  if (dn) dn.addEventListener('click', function () { setSize(size() - 0.08); });
  if (up) up.addEventListener('click', function () { setSize(size() + 0.08); });

  /* the contents list is open when there is room for it beside the text */
  var toc = document.getElementById('toc');
  if (toc && window.matchMedia) {
    var wide = window.matchMedia('(min-width:1100px)');
    var sync = function () { toc.open = wide.matches; };
    sync();
    if (wide.addEventListener) wide.addEventListener('change', sync);
    var here = toc.querySelector('li.here');
    if (here && here.scrollIntoView && wide.matches) here.scrollIntoView({ block: 'center' });
  }

  /* progress through the page */
  var bar = document.querySelector('#progress i');
  if (bar) {
    var tick = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
    };
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* remember the chapter you were in, and offer to go back to it */
  var art = document.querySelector('article[data-file]');
  if (art && art.getAttribute('data-file') !== 'index.html' && art.getAttribute('data-file') !== 'glossary.html') {
    store.set('aifz-book-last', art.getAttribute('data-file') + '|' + art.getAttribute('data-title'));
  }
  var resume = document.getElementById('resume');
  var last = (store.get('aifz-book-last') || '').split('|');
  if (resume && last[0]) {
    resume.href = last[0];
    resume.textContent = 'Continue: ' + (last[1] || 'where you left off');
    resume.hidden = false;
  }
})();
