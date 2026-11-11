/* Figures: the course's diagrams, drawn as SVG in the page and made to be
   touched. One file serves all four portals (the app, the book, the plan and
   the worksheet), so a picture means the same thing wherever it appears.

   window.FIGDATA (src/data/figs-*.js) holds what each figure says, in English
   and Hinglish as [en, hi] pairs. This file only draws. Every figure is
   redrawn for the width it actually has, so a phone gets a layout made for a
   phone rather than a desktop drawing shrunk until the words cannot be read.

   FIGS.render(el, id, {lang, bare, nocap})   draw figure `id` into el
   FIGS.weeks(el, {weeks, months, onPick})     the 26 weeks as one strip
   FIGS.journey(el, {nodes, onPick})           the topics as one path
   FIGS.mount(root)                            draw every [data-fig] under root
   Colours come from the page's own tokens (see .fx in the style below), so a
   figure follows the light and dark themes of whichever page it is on. */
(function () {
  'use strict';
  if (window.FIGS) return;
  var DATA = window.FIGDATA || {};
  var seq = 0;

  /* ---------- small helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function docLang() {
    var b = document.body;
    if (b && b.getAttribute('data-lang') === 'hi') return 'hi';
    try { var S = JSON.parse(localStorage.getItem('aifz2027') || '{}'); if (S && S.lang === 'hi' && /\/app\//.test(location.pathname)) return 'hi'; } catch (e) { }
    return /^hi/.test(document.documentElement.lang || '') ? 'hi' : 'en';
  }
  function tx(v, lang) { return Array.isArray(v) ? (lang === 'hi' && v[1] ? v[1] : v[0]) : (v == null ? '' : String(v)); }
  /* a line of text broken to fit a width; character widths are estimated */
  function wrap(text, maxW, fs) {
    var cw = fs * 0.54, max = Math.max(4, Math.floor(maxW / cw)), out = [], line = '';
    String(text).split(/\s+/).forEach(function (w) {
      if (!w) return;
      if (!line) line = w;
      else if ((line + ' ' + w).length <= max) line += ' ' + w;
      else { out.push(line); line = w; }
      while (line.length > max) { out.push(line.slice(0, max - 1) + '-'); line = line.slice(max - 1); }
    });
    if (line) out.push(line);
    return out.length ? out : [''];
  }
  function lines(x, y, ls, fs, anchor, cls, lh) {
    lh = lh || fs * 1.25;
    return '<text x="' + x + '" y="' + y + '" font-size="' + fs + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + (cls ? ' class="' + cls + '"' : '') + '>' +
      ls.map(function (l, i) { return '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>';
  }
  function r1(n) { return Math.round(n * 10) / 10; }

  /* ---------- icons: 24-unit line drawings. "O x,y,r" is a circle. ---------- */
  var ICONS = {
    doc: 'M6 3h9l4 4v14H6z M15 3v4h4 M9 12h7 M9 16h7',
    chat: 'M4 5h16v11H9l-5 4z M8 9h8 M8 12h5',
    person: 'O12,8,3.5 M5 20c1-4 4-6 7-6s6 2 7 6',
    people: 'O8.5,9,3 M3 19c.8-3 3-4.5 5.5-4.5S13 16 14 19 O16,8,2.6 M16 13.6c2.4.2 4.2 1.8 5 5',
    search: 'O10.5,10.5,6 M15 15l5 5',
    db: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6 M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3',
    chip: 'M7 7h10v10H7z M10 10h4v4h-4z M9 3v4 M15 3v4 M9 17v4 M15 17v4 M3 9h4 M3 15h4 M17 9h4 M17 15h4',
    key: 'O8,15,4 M11 12l9-9 M17 6l2 2 M14.5 8.5l2 2',
    money: 'M3 7h18v10H3z O12,12,2.5 M6 10v4 M18 10v4',
    chart: 'M4 20V4 M4 20h16 M8 16v-4 M12 16V8 M16 16v-6',
    check: 'M5 12.5l4.5 4.5L19 7',
    warn: 'M12 3l10 18H2z M12 10v5 M12 18v.4',
    gear: 'O12,12,3 M12 3v3 M12 18v3 M3 12h3 M18 12h3 M5.6 5.6l2.1 2.1 M16.3 16.3l2.1 2.1 M5.6 18.4l2.1-2.1 M16.3 7.7l2.1-2.1',
    tool: 'M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z',
    shield: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z M8.5 12l2.5 2.5 4.5-4.5',
    clock: 'O12,12,8.5 M12 7.5V12l3 2',
    flag: 'M5 21V4 M5 4h11l-2 4 2 4H5',
    code: 'M8 8l-4 4 4 4 M16 8l4 4-4 4 M13.5 6l-3 12',
    scissors: 'O6,7,2.5 O6,17,2.5 M8 8.5L20 17 M8 15.5L20 7',
    target: 'O12,12,8.5 O12,12,4.5 O12,12,1',
    map: 'M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14',
    rocket: 'M12 3c3 2 5 5.5 5 10l-2.5 2.5h-5L7 13c0-4.5 2-8 5-10z M9.5 15.5L7 20l3.5-1.5 M14.5 15.5L17 20l-3.5-1.5 O12,9,1.8',
    eye: 'M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z O12,12,3',
    lock: 'M6 11h12v10H6z M8.5 11V8a3.5 3.5 0 0 1 7 0v3',
    cloud: 'M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.5 3.5 0 0 0 7 18z',
    idea: 'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.6 1.5 2.6V17h4v-.5c0-1 .6-1.9 1.5-2.6A6 6 0 0 0 12 3z',
    list: 'M9 6h11 M9 12h11 M9 18h11 M4 6h1 M4 12h1 M4 18h1',
    tag: 'M3 12V4h8l10 10-8 8z O7.5,7.5,1.3',
    image: 'M3 5h18v14H3z M3 16l5-5 4 4 3-3 6 6 O15.5,9,1.5',
    mic: 'M9 4a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0z M5 11a7 7 0 0 0 14 0 M12 18v3',
    link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
    loop: 'M4 12a8 8 0 0 1 14-5.3 M20 4v4h-4 M20 12a8 8 0 0 1-14 5.3 M4 20v-4h4',
    scale: 'M12 4v16 M7 20h10 M5 8h14 M5 8l-3 6a3 3 0 0 0 6 0z M19 8l-3 6a3 3 0 0 0 6 0z',
    book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 19V5 M8 7h7',
    pen: 'M4 20l4-1 11-11-3-3L5 16z M14 6l3 3',
    send: 'M3 11l18-8-8 18-2-8z M11 13l10-10',
    bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
    star: 'M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.3l1-6.2L3 9.7l6.2-.9z',
    filter: 'M3 5h18l-7 8v6l-4 2v-8z',
    layers: 'M12 3l9 5-9 5-9-5z M3 13l9 5 9-5 M3 17.5l9 5 9-5',
    stop: 'M8 3h8l5 5v8l-5 5H8l-5-5V8z M9 12h6',
    globe: 'O12,12,9 M3 12h18 M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z',
    calendar: 'M4 6h16v15H4z M4 10h16 M8 3v5 M16 3v5',
    grid: 'M4 4h16v16H4z M4 10h16 M4 15h16 M10 4v16 M15 4v16',
    trend: 'M3 17l6-6 4 4 8-8 M15 7h6v6'
  };
  function iconPath(name) {
    var src = ICONS[name]; if (!src) return '';
    return src.replace(/O(-?[\d.]+),(-?[\d.]+),([\d.]+)/g, function (_, x, y, r) {
      x = +x; y = +y; r = +r;
      return 'M' + (x - r) + ' ' + y + 'a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0';
    });
  }
  function icon(name, x, y, size, cls) {
    if (!ICONS[name]) return '';
    var s = (size || 22) / 24;
    return '<g class="fx-ic' + (cls ? ' ' + cls : '') + '" transform="translate(' + r1(x) + ',' + r1(y) + ') scale(' + r1(s * 100) / 100 + ')"><path d="' + iconPath(name) + '"/></g>';
  }
  function defs(uid) {
    return '<defs><marker id="' + uid + 'a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fx-ah"/></marker>' +
      '<marker id="' + uid + 'b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="fx-ah on"/></marker></defs>';
  }
  function svg(W, H, body, uid, label) {
    return '<svg class="fx-svg" viewBox="0 0 ' + W + ' ' + Math.ceil(H) + '" width="' + W + '" height="' + Math.ceil(H) + '" role="img" aria-label="' + esc(label) + '">' + defs(uid) + body + '</svg>';
  }
  /* Indian grouping for rupees, and the units the course talks in */
  function fmt(v, f) {
    if (!isFinite(v)) return '—';
    var neg = v < 0; v = Math.abs(v);
    var s;
    if (f === 'inr') {
      if (v >= 1e7) s = '₹' + (Math.round(v / 1e5) / 100) + ' crore';
      else if (v >= 1e5) s = '₹' + (Math.round(v / 1e3) / 100) + ' lakh';
      else s = '₹' + (v >= 100 ? Math.round(v).toLocaleString('en-IN') : (Math.round(v * 100) / 100).toFixed(2));
    } else if (f === 'usd') s = '$' + (v >= 100 ? Math.round(v).toLocaleString('en-US') : (Math.round(v * 100) / 100).toFixed(2));
    else if (f === 'pct') s = (Math.round(v * 10) / 10) + '%';
    else if (f === 's') s = (Math.round(v * 100) / 100) + ' s';
    else if (f === 'ms') s = Math.round(v) + ' ms';
    else if (f === 'x') s = (Math.round(v * 10) / 10) + '×';
    else if (f === 'dec') s = (Math.round(v * 100) / 100).toString();
    else s = Math.round(v).toLocaleString('en-IN');
    return (neg ? '−' : '') + s;
  }

  /* ---------- the templates ----------
     Each returns { svg|html, n, detail(i), init?(f) }. n is how many things
     can be selected; detail(i) is what the panel under the figure says. */
  var TPL = {};

  /* flow: steps in order, left to right, wrapping into rows on a narrow page */
  TPL.flow = function (f, W) {
    var d = f.def, L = f.lang, st = d.steps, n = st.length, gap = 30, fs = 13.5;
    var per = n, bw;
    for (;;) { bw = (W - (per - 1) * gap) / per; if (bw >= 108 || per <= 1) break; per--; }
    per = Math.ceil(n / Math.ceil(n / per)); bw = Math.min((W - (per - 1) * gap) / per, 178);
    var rows = Math.ceil(n / per), labels = st.map(function (s) { return wrap(tx(s.l, L), bw - 16, fs); });
    var hasIc = st.some(function (s) { return s.ic; });
    var bh = Math.max.apply(null, labels.map(function (l) { return l.length; })) * fs * 1.25 + 22 + (hasIc ? 28 : 0);
    var rowW = per * bw + (per - 1) * gap, x0 = (W - rowW) / 2, rg = 40, out = '', top = 8;
    var pos = st.map(function (_, i) { var r = Math.floor(i / per), c = i % per; return { x: x0 + c * (bw + gap), y: top + r * (bh + rg), r: r, c: c }; });
    for (var i = 0; i < n; i++) {
      var p = pos[i];
      if (i < n - 1) {
        var q = pos[i + 1];
        if (q.r === p.r) out += '<line class="fx-ln" data-e="' + i + '" x1="' + r1(p.x + bw + 2) + '" y1="' + r1(p.y + bh / 2) + '" x2="' + r1(q.x - 3) + '" y2="' + r1(q.y + bh / 2) + '" marker-end="url(#' + f.uid + 'a)"/>';
        else out += '<path class="fx-ln" data-e="' + i + '" d="M' + r1(p.x + bw / 2) + ' ' + r1(p.y + bh + 2) + 'V' + r1(p.y + bh + rg / 2) + 'H' + r1(q.x + bw / 2) + 'V' + r1(q.y - 3) + '" marker-end="url(#' + f.uid + 'a)"/>';
      }
    }
    if (d.loop && n > 1) {
      var a = pos[n - 1], b = pos[0], yb = Math.max(a.y, b.y) + bh + 18;
      out += '<path class="fx-ln fx-back" d="M' + r1(a.x + bw / 2) + ' ' + r1(a.y + bh + 2) + 'V' + r1(yb) + 'H' + r1(b.x + bw / 2) + 'V' + r1(b.y + bh + 3) + '" marker-end="url(#' + f.uid + 'a)"/>';
      if (d.loopL) out += lines((a.x + b.x + bw) / 2, yb - 5, [tx(d.loopL, L)], 11.5, 'middle', 'fx-mu');
    }
    st.forEach(function (s, i) {
      var p = pos[i], ly = p.y + 16 + fs + (s.ic ? 28 : 0);
      out += '<g class="fx-node" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(tx(s.l, L)) + '">' +
        '<rect x="' + r1(p.x) + '" y="' + r1(p.y) + '" width="' + r1(bw) + '" height="' + r1(bh) + '" rx="10"/>' +
        '<text class="fx-num" x="' + r1(p.x + 9) + '" y="' + r1(p.y + 15) + '" font-size="10.5">' + (i + 1) + '</text>' +
        (s.ic ? icon(s.ic, p.x + bw / 2 - 12, p.y + 10, 24) : '') +
        lines(p.x + bw / 2, ly, labels[i], fs, 'middle', 'fx-lb') + '</g>';
    });
    var H = top + rows * bh + (rows - 1) * rg + (d.loop ? 34 : 10);
    return { svg: svg(W, H, out, f.uid, tx(d.title, L)), n: n, step: true, detail: function (i) { return '<b>' + (i + 1) + '. ' + esc(tx(st[i].l, L)) + '</b> ' + esc(tx(st[i].d, L)); } };
  };

  /* cycle: the same steps, as a loop that never ends */
  TPL.cycle = function (f, W) {
    var d = f.def, L = f.lang, st = d.steps, n = st.length, fs = 13;
    var bw = Math.min(150, Math.max(96, W / 3.6)), R = Math.min(W / 2 - bw / 2 - 6, 170), labels = st.map(function (s) { return wrap(tx(s.l, L), bw - 14, fs); });
    var bh = Math.max.apply(null, labels.map(function (l) { return l.length; })) * fs * 1.25 + 18 + (st.some(function (s) { return s.ic; }) ? 24 : 0);
    var Ry = R * 0.78 + bh * 0.2, cx = W / 2, cy = Ry + bh / 2 + 8, out = '';
    var pts = st.map(function (_, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return { x: cx + R * Math.cos(a), y: cy + Ry * Math.sin(a), a: a }; });
    /* arcs between neighbours, on the ellipse */
    for (var i = 0; i < n; i++) {
      var a0 = pts[i].a, a1 = pts[(i + 1) % n].a + (i === n - 1 ? 2 * Math.PI : 0), m = (a0 + a1) / 2, span = (a1 - a0) * 0.28;
      var s0 = m - span, s1 = m + span;
      out += '<path class="fx-ln" data-e="' + i + '" d="M' + r1(cx + R * Math.cos(s0)) + ' ' + r1(cy + Ry * Math.sin(s0)) + 'A' + r1(R) + ' ' + r1(Ry) + ' 0 0 1 ' + r1(cx + R * Math.cos(s1)) + ' ' + r1(cy + Ry * Math.sin(s1)) + '" marker-end="url(#' + f.uid + 'a)"/>';
    }
    if (d.center) out += lines(cx, cy - 4, wrap(tx(d.center, L), Math.max(80, R * 1.1 - bw * 0.3), 13.5), 13.5, 'middle', 'fx-ctr');
    st.forEach(function (s, i) {
      var p = pts[i], x = p.x - bw / 2, y = p.y - bh / 2;
      out += '<g class="fx-node" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(tx(s.l, L)) + '"><rect x="' + r1(x) + '" y="' + r1(y) + '" width="' + r1(bw) + '" height="' + r1(bh) + '" rx="' + r1(bh / 2 > 22 ? 14 : bh / 2) + '"/>' +
        (s.ic ? icon(s.ic, p.x - 11, y + 7, 22) : '') + lines(p.x, y + 13 + fs + (s.ic ? 22 : 0), labels[i], fs, 'middle', 'fx-lb') + '</g>';
    });
    return { svg: svg(W, cy + Ry + bh / 2 + 10, out, f.uid, tx(d.title, L)), n: n, step: true, detail: function (i) { return '<b>' + (i + 1) + '. ' + esc(tx(st[i].l, L)) + '</b> ' + esc(tx(st[i].d, L)); } };
  };

  /* seq: who sends what to whom, one message at a time */
  TPL.seq = function (f, W) {
    var d = f.def, L = f.lang, A = d.actors, M = d.msgs, k = A.length, fs = 12.5;
    var colW = W / k, top = 50, rowH = 46, out = '';
    var xs = A.map(function (_, i) { return colW * i + colW / 2; });
    A.forEach(function (a, i) {
      var lb = wrap(tx(a.l || a, L), colW - 14, 13), bw = Math.min(colW - 10, 150);
      out += '<g class="fx-actor"><rect x="' + r1(xs[i] - bw / 2) + '" y="4" width="' + r1(bw) + '" height="' + (lb.length > 1 ? 40 : 32) + '" rx="8"/>' +
        lines(xs[i], lb.length > 1 ? 18 : 25, lb, 13, 'middle', 'fx-lb') + '</g>' +
        '<line class="fx-life" x1="' + r1(xs[i]) + '" y1="' + (top - 4) + '" x2="' + r1(xs[i]) + '" y2="' + (top + M.length * rowH + 4) + '"/>';
    });
    M.forEach(function (m, i) {
      var y = top + i * rowH + 28, x1 = xs[m.a], x2 = xs[m.b], self = m.a === m.b, left = self && m.a === k - 1, sd = left ? -1 : 1;
      var lb = wrap(tx(m.l, L), Math.max(90, Math.abs(x2 - x1) - 10), fs).slice(0, 2);
      out += '<g class="fx-msg" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(tx(m.l, L)) + '">' +
        '<rect class="fx-hit" x="' + r1(Math.min(x1, x2) - 6 - (left ? 150 : 0)) + '" y="' + (y - 30) + '" width="' + r1(Math.abs(x2 - x1) + 12 + (self ? 150 : 0)) + '" height="40" rx="6"/>' +
        (self ? '<path class="fx-ln" d="M' + r1(x1) + ' ' + (y - 8) + 'h' + 40 * sd + 'v14h' + -36 * sd + '" marker-end="url(#' + f.uid + 'a)"/>'
          : '<line class="fx-ln" x1="' + r1(x1) + '" y1="' + y + '" x2="' + r1(x2 + (x2 > x1 ? -3 : 3)) + '" y2="' + y + '" marker-end="url(#' + f.uid + 'a)"' + (m.dash ? ' stroke-dasharray="5 4"' : '') + '/>') +
        lines(self ? x1 + 46 * sd : (x1 + x2) / 2, y - 6 - (lb.length - 1) * fs * 1.2, lb, fs, self ? (left ? 'end' : 'start') : 'middle', 'fx-lb', fs * 1.2) + '</g>';
    });
    return { svg: svg(W, top + M.length * rowH + 12, out, f.uid, tx(d.title, L)), n: M.length, step: true, past: true,
      detail: function (i) { return '<b>' + (i + 1) + '. ' + esc(tx(A[M[i].a].l || A[M[i].a], L)) + ' → ' + esc(tx(A[M[i].b].l || A[M[i].b], L)) + '</b> ' + esc(tx(M[i].d, L)); } };
  };

  /* stack: layers, one on top of another; an optional slice cuts through all */
  TPL.stack = function (f, W) {
    var d = f.def, L = f.lang, Ls = d.layers, n = Ls.length, fs = 13.5, out = '', y = 6, pad = 12;
    var x0 = 6, w = W - 12, sliceW = d.slice ? Math.min(150, w * 0.28) : 0, labW = w - sliceW - (d.slice ? 14 : 0);
    var hs = Ls.map(function (l) { var ls = wrap(tx(l.l, L), labW - 70 - (l.s ? 0 : 0), fs); var ss = l.s ? wrap(tx(l.s, L), labW - 70, 11.5) : []; return { ls: ls, ss: ss, h: Math.max(44, 16 + ls.length * fs * 1.25 + ss.length * 14) }; });
    Ls.forEach(function (l, i) {
      var h = hs[i];
      out += '<g class="fx-node fx-layer" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(tx(l.l, L)) + '"><rect x="' + x0 + '" y="' + r1(y) + '" width="' + r1(w) + '" height="' + r1(h.h) + '" rx="8"/>' +
        (l.ic ? icon(l.ic, x0 + 14, y + h.h / 2 - 12, 24) : '') +
        lines(x0 + 52, y + pad + fs, h.ls, fs, 'start', 'fx-lb') + (h.ss.length ? lines(x0 + 52, y + pad + fs + h.ls.length * fs * 1.25, h.ss, 11.5, 'start', 'fx-mu', 14) : '') + '</g>';
      y += h.h + 6;
    });
    if (d.slice) {
      var sx = x0 + w - sliceW - 6;
      out += '<g class="fx-slice"><rect x="' + r1(sx) + '" y="2" width="' + r1(sliceW) + '" height="' + r1(y - 2) + '" rx="10"/>' + lines(sx + sliceW / 2, 22, wrap(tx(d.slice, L), sliceW - 12, 12), 12, 'middle', 'fx-lb') + '</g>';
    }
    if (d.arrow) out += lines(W - 8, y + 12, [tx(d.arrow, L)], 11.5, 'end', 'fx-mu');
    return { svg: svg(W, y + (d.arrow ? 20 : 2), out, f.uid, tx(d.title, L)), n: n, step: true, detail: function (i) { return '<b>' + esc(tx(Ls[i].l, L)) + '</b> ' + esc(tx(Ls[i].d, L)); },
      toggle: d.slice ? [tx(d.sliceBtn || ['Show the slice', 'Slice dikhaiye'], L)] : null };
  };

  /* tree: a question that branches; columns by depth, open one branch at a time */
  TPL.tree = function (f, W) {
    var d = f.def, L = f.lang, flat = [], fs = 12.5;
    (function walk(n, depth, parent) { var me = { n: n, d: depth, p: parent, i: flat.length }; flat.push(me); (n.kids || []).forEach(function (k) { walk(k, depth + 1, me); }); })(d.root, 0, null);
    var depth = Math.max.apply(null, flat.map(function (x) { return x.d; })) + 1, gap = 26, cw = (W - (depth - 1) * gap - 8) / depth;
    flat.forEach(function (x) { x.ls = wrap(tx(x.n.l, L), cw - 14, fs); x.h = Math.max(32, 14 + x.ls.length * fs * 1.22); });
    /* leaves stack down the page; a parent sits beside the middle of its children */
    var y = 4, out = '', colB = [];
    /* leaves stack down; a parent sits by its children, never over the box above it */
    (function place(x) {
      var kids = flat.filter(function (k) { return k.p === x; });
      if (!kids.length) { x.y = Math.max(y, colB[x.d] || 4); y = x.y + x.h + 8; colB[x.d] = y; return; }
      kids.forEach(place);
      var a = kids[0], b = kids[kids.length - 1];
      x.y = Math.max(colB[x.d] || 4, (a.y + b.y + b.h) / 2 - x.h / 2);
      colB[x.d] = x.y + x.h + 8;
      if (colB[x.d] > y) y = colB[x.d];
    })(flat[0]);
    flat.forEach(function (x) { x.x = 4 + x.d * (cw + gap); });
    flat.forEach(function (x) { if (!x.p) return; var p = x.p;
      out += '<path class="fx-ln" data-e="' + x.i + '" d="M' + r1(p.x + cw) + ' ' + r1(p.y + p.h / 2) + 'C' + r1(p.x + cw + gap / 2) + ' ' + r1(p.y + p.h / 2) + ' ' + r1(x.x - gap / 2) + ' ' + r1(x.y + x.h / 2) + ' ' + r1(x.x - 2) + ' ' + r1(x.y + x.h / 2) + '"/>'; });
    flat.forEach(function (x) {
      out += '<g class="fx-node' + (x.n.tone ? ' t-' + x.n.tone : '') + '" data-i="' + x.i + '" tabindex="0" role="button" aria-label="' + esc(tx(x.n.l, L)) + '"><rect x="' + r1(x.x) + '" y="' + r1(x.y) + '" width="' + r1(cw) + '" height="' + r1(x.h) + '" rx="8"/>' +
        lines(x.x + 8, x.y + 10 + fs * 0.95, x.ls, fs, 'start', 'fx-lb', fs * 1.22) + '</g>';
    });
    return { svg: svg(W, y, out, f.uid, tx(d.title, L)), n: flat.length, step: true, path: function (i) { var on = [], x = flat[i]; while (x) { on.push(x.i); x = x.p; } return on; },
      detail: function (i) { return '<b>' + esc(tx(flat[i].n.l, L)) + '</b> ' + esc(tx(flat[i].n.d, L)); } };
  };

  /* venn: two or three sets; tap a region to see what lives there */
  TPL.venn = function (f, W) {
    var d = f.def, L = f.lang, S = d.sets, k = S.length, r = Math.min(W * 0.23, k === 3 ? 112 : 125), H = k === 3 ? 3 * r + 16 : 2 * r + 30, cx = W / 2, cy = k === 3 ? 1.38 * r + 8 : H / 2, out = '';
    var cs = k === 2 ? [{ x: cx - r * 0.62, y: cy }, { x: cx + r * 0.62, y: cy }] : [{ x: cx - r * 0.6, y: cy - r * 0.38 }, { x: cx + r * 0.6, y: cy - r * 0.38 }, { x: cx, y: cy + r * 0.62 }];
    var keys = 'ABC';
    S.forEach(function (s, i) { out += '<circle class="fx-set s' + i + '" cx="' + r1(cs[i].x) + '" cy="' + r1(cs[i].y) + '" r="' + r1(r) + '"/>'; });
    /* label each set on its outer side */
    S.forEach(function (s, i) {
      var c = cs[i], dx = c.x - cx, dy = c.y - cy, len = Math.sqrt(dx * dx + dy * dy) || 1, lx = c.x + dx / len * r * 0.5, ly = c.y + dy / len * r * 0.45;
      out += lines(lx, ly, wrap(tx(s.l, L), r * 0.9, 13), 13, 'middle', 'fx-lb fx-setl');
    });
    var R = d.regions || {}, order = d.order || Object.keys(R);
    order.forEach(function (key) {
      var idx = key.split('').map(function (ch) { return keys.indexOf(ch); }), x = 0, y = 0;
      idx.forEach(function (j) { x += cs[j].x; y += cs[j].y; }); x /= idx.length; y /= idx.length;
      if (idx.length === 1) { var c = cs[idx[0]], dx = c.x - cx, dy = c.y - cy, len = Math.sqrt(dx * dx + dy * dy) || 1; x = c.x + dx / len * r * 0.45; y = c.y + dy / len * r * 0.45 + 30; }
      if (k === 3 && idx.length === 2) { var o = 3 - idx[0] - idx[1], ox = x - cs[o].x, oy = y - cs[o].y, l2 = Math.sqrt(ox * ox + oy * oy) || 1; x += ox / l2 * r * 0.22; y += oy / l2 * r * 0.22; }
      var lb = wrap(tx(R[key].l, L), r * (idx.length > 1 ? 0.75 : 0.9), 12);
      out += '<g class="fx-node fx-reg" data-i="' + order.indexOf(key) + '" tabindex="0" role="button" aria-label="' + esc(tx(R[key].l, L)) + '"><rect class="fx-hit" x="' + r1(x - r * 0.42) + '" y="' + r1(y - 16) + '" width="' + r1(r * 0.84) + '" height="' + (lb.length * 15 + 12) + '" rx="8"/>' +
        lines(x, y, lb, 12, 'middle', 'fx-lb', 15) + '</g>';
    });
    return { svg: svg(W, H, out, f.uid, tx(d.title, L)), n: order.length, step: true,
      regions: function (i) { return order[i].split('').map(function (ch) { return keys.indexOf(ch); }); },
      detail: function (i) { var g = R[order[i]]; return '<b>' + esc(tx(g.l, L)) + '</b> ' + esc(tx(g.d, L)); } };
  };

  /* matrix: two axes and four quadrants; drag a point to see where it lands */
  TPL.matrix = function (f, W) {
    var d = f.def, L = f.lang, P = f.pts || (f.pts = d.pts.map(function (p) { return { x: p.x, y: p.y }; }));
    var H = Math.min(Math.max(W * 0.66, 280), 400), ml = 30, mb = 30, pw = W - ml - 8, ph = H - mb - 6, out = '';
    out += '<rect class="fx-plot" x="' + ml + '" y="4" width="' + r1(pw) + '" height="' + r1(ph) + '" rx="6"/>' +
      '<line class="fx-ax" x1="' + r1(ml + pw / 2) + '" y1="4" x2="' + r1(ml + pw / 2) + '" y2="' + r1(4 + ph) + '"/><line class="fx-ax" x1="' + ml + '" y1="' + r1(4 + ph / 2) + '" x2="' + r1(ml + pw) + '" y2="' + r1(4 + ph / 2) + '"/>';
    /* quadrants: 0 top-left, 1 top-right, 2 bottom-left, 3 bottom-right */
    d.q.forEach(function (q, i) {
      var qx = ml + (i % 2 ? pw * 0.75 : pw * 0.25), qy = 4 + (i < 2 ? 18 : ph / 2 + 18);
      out += lines(qx, qy, wrap(tx(q.l, L), pw / 2 - 16, 12.5), 12.5, 'middle', 'fx-q q' + i);
    });
    out += lines(ml + pw / 2, H - 8, [tx(d.xl, L) + '  →'], 11.5, 'middle', 'fx-mu fx-axl');
    out += '<text class="fx-mu fx-axl" font-size="11.5" text-anchor="middle" transform="translate(13,' + r1(4 + ph / 2) + ') rotate(-90)">' + esc(tx(d.yl, L) + '  →') + '</text>';
    d.pts.forEach(function (p, i) {
      var x = ml + P[i].x * pw, y = 4 + (1 - P[i].y) * ph, lb = tx(p.l, L), right = P[i].x < 0.72;
      out += '<g class="fx-node fx-pt" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(lb) + '"><circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="9"/>' +
        lines(right ? x + 13 : x - 13, y + 4, [lb], 12, right ? 'start' : 'end', 'fx-lb') + '</g>';
    });
    var quad = function (i) { return (P[i].y >= 0.5 ? 0 : 2) + (P[i].x >= 0.5 ? 1 : 0); };
    return { svg: svg(W, H, out, f.uid, tx(d.title, L)), n: d.pts.length, drag: { ml: ml, pw: pw, ph: ph, top: 4 },
      detail: function (i) { var q = d.q[quad(i)]; return '<b>' + esc(tx(d.pts[i].l, L)) + '</b> ' + esc(tx(d.pts[i].d, L)) + ' <span class="fx-land">' + esc(tx(d.landsIn || ['Lands in', 'Yahan aata hai'], L)) + ': <b>' + esc(tx(q.l, L)) + '</b>. ' + esc(tx(q.d, L)) + '</span>'; } };
  };

  /* bars: one picture, several cases; switch case to watch the bars move */
  TPL.bars = function (f, W) {
    var d = f.def, L = f.lang, set = d.sets[f.set || 0], items = d.items, fs = 13, labW = Math.min(170, W * 0.36), out = '', y = 6;
    var max = d.max || Math.max.apply(null, d.sets.map(function (s) { return Math.max.apply(null, s.v); }));
    var vlen = Math.max.apply(null, d.sets.map(function (s) { return Math.max.apply(null, s.v.map(function (v) { return (fmt(v, d.fmt) + (d.unit ? ' ' + tx(d.unit, L) : '')).length; })); }));
    var bw = W - labW - vlen * 7.4 - 14;
    items.forEach(function (it, i) {
      var ls = wrap(tx(it, L), labW - 8, fs), h = Math.max(28, ls.length * fs * 1.2 + 10), v = set.v[i], w = Math.max(2, bw * v / max);
      out += '<g class="fx-bar' + (set.hi === i ? ' on' : '') + '">' + lines(labW - 6, y + h / 2 + 4 - (ls.length - 1) * fs * 0.6, ls, fs, 'end', 'fx-lb', fs * 1.2) +
        '<rect x="' + labW + '" y="' + r1(y + 5) + '" width="' + r1(w) + '" height="' + r1(h - 10) + '" rx="4" style="width:' + r1(w) + 'px"/>' +
        '<text class="fx-val" x="' + r1(labW + w + 6) + '" y="' + r1(y + h / 2 + 4) + '" font-size="12.5">' + esc(fmt(v, d.fmt) + (d.unit ? ' ' + tx(d.unit, L) : '')) + '</text></g>';
      y += h + 4;
    });
    return { svg: svg(W, y + 4, out, f.uid, tx(d.title, L)), n: 0, sets: d.sets.map(function (s) { return tx(s.l, L); }),
      detail: function () { return set.d ? esc(tx(set.d, L)) : ''; } };
  };

  /* scale: a dial along one line; slide it to see which zone you are in */
  TPL.scale = function (f, W) {
    var d = f.def, L = f.lang, Z = d.zones, v = f.val != null ? f.val : d.v, min = d.min, max = d.max, out = '', x0 = 10, w = W - 20, top = 30;
    var X = function (t) { return x0 + w * (t - min) / (max - min); }, from = min;
    Z.forEach(function (z, i) {
      var a = X(from), b = X(z.to), on = v >= from && (v < z.to || (i === Z.length - 1));
      out += '<g class="fx-zone z' + i + (on ? ' on' : '') + '"><rect x="' + r1(a) + '" y="' + top + '" width="' + r1(Math.max(1, b - a - 2)) + '" height="34" rx="6"/>' +
        lines((a + b) / 2, top + 54, wrap(tx(z.l, L), Math.max(50, b - a - 4), 12), 12, 'middle', 'fx-lb') + '</g>';
      from = z.to;
    });
    var mx = X(v);
    out += '<g class="fx-mark"><line x1="' + r1(mx) + '" y1="' + (top - 8) + '" x2="' + r1(mx) + '" y2="' + (top + 40) + '"/><circle cx="' + r1(mx) + '" cy="' + (top - 12) + '" r="11"/><text x="' + r1(mx) + '" y="' + (top - 8) + '" font-size="10.5" text-anchor="middle">' + esc(fmt(v, d.fmt || 'dec')) + '</text></g>';
    out += lines(x0, 12, [tx(d.lo, L)], 11.5, 'start', 'fx-mu') + lines(x0 + w, 12, [tx(d.hi, L)], 11.5, 'end', 'fx-mu');
    var zi = 0, acc = min; for (var i = 0; i < Z.length; i++) { if (v < Z[i].to || i === Z.length - 1) { zi = i; break; } acc = Z[i].to; }
    return { svg: svg(W, top + 90, out, f.uid, tx(d.title, L)), n: 0, slider: { min: min, max: max, step: d.step || (max - min) / 100, v: v, l: tx(d.sl, L) },
      detail: function () { return '<b>' + esc(tx(Z[zi].l, L)) + '</b> ' + esc(tx(Z[zi].d, L)); } };
  };

  /* calc: sliders in, numbers out, worked out as you move them */
  TPL.calc = function (f, W) {
    var d = f.def, L = f.lang, V = f.vals || (f.vals = {}), out = '';
    d.inputs.forEach(function (x) { if (V[x.id] == null) V[x.id] = x.v; });
    var res = d.outputs.map(function (o) { var r; try { r = o.f(V); } catch (e) { r = NaN; } return r; });
    var max = 0; d.outputs.forEach(function (o, i) { if (o.bar && isFinite(res[i])) max = Math.max(max, Math.abs(res[i])); });
    var y = 6, labW = Math.min(200, W * 0.42);
    d.outputs.forEach(function (o, i) {
      var big = o.big, fs = big ? 15 : 13, ls = wrap(tx(o.l, L), labW - 6, 12.5), h = Math.max(big ? 40 : 30, ls.length * 15 + 12);
      out += '<g class="fx-out' + (big ? ' big' : '') + '">' + lines(6, y + h / 2 + 4 - (ls.length - 1) * 7.5, ls, 12.5, 'start', 'fx-lb', 15);
      if (o.bar && max) { var w = Math.max(2, (W - labW - 120) * Math.abs(res[i]) / max); out += '<rect x="' + labW + '" y="' + r1(y + 7) + '" width="' + r1(w) + '" height="' + (h - 14) + '" rx="4" style="width:' + r1(w) + 'px"/>' + '<text class="fx-val" x="' + r1(labW + w + 6) + '" y="' + r1(y + h / 2 + 5) + '" font-size="' + fs + '">' + esc(fmt(res[i], o.fmt)) + '</text>'; }
      else out += '<text class="fx-val" x="' + labW + '" y="' + r1(y + h / 2 + 5) + '" font-size="' + fs + '">' + esc(fmt(res[i], o.fmt)) + '</text>';
      out += '</g>'; y += h + 2;
    });
    return { svg: svg(W, y + 4, out, f.uid, tx(d.title, L)), n: 0, inputs: d.inputs,
      detail: function () { return d.note ? esc(tx(typeof d.note === 'function' ? d.note(V, res) : d.note, L)) : ''; } };
  };

  /* funnel: how many are left at each step; slide a rate and watch the end */
  TPL.funnel = function (f, W) {
    var d = f.def, L = f.lang, R = f.rates || (f.rates = d.stages.map(function (s) { return s.rate; })), out = '', y = 4, v = d.start, vals = [];
    d.stages.forEach(function (s, i) { v = i === 0 ? d.start : v * R[i] / 100; vals.push(v); });
    var cx = W / 2, maxW = W - 20, rowH = 44;
    d.stages.forEach(function (s, i) {
      var w = Math.max(70, maxW * Math.sqrt(vals[i] / d.start)), lb = tx(s.l, L);
      out += '<g class="fx-node fx-stage" data-i="' + i + '" tabindex="0" role="button" aria-label="' + esc(lb) + '"><rect x="' + r1(cx - w / 2) + '" y="' + y + '" width="' + r1(w) + '" height="' + (rowH - 6) + '" rx="8"/>' +
        '<text class="fx-lb" x="' + r1(cx) + '" y="' + (y + 16) + '" font-size="13" text-anchor="middle">' + esc(lb) + '</text>' +
        '<text class="fx-val" x="' + r1(cx) + '" y="' + (y + 32) + '" font-size="12.5" text-anchor="middle">' + esc(fmt(vals[i], d.fmt) + (i ? '  ·  ' + R[i] + '%' : '')) + '</text></g>';
      y += rowH;
    });
    return { svg: svg(W, y + 2, out, f.uid, tx(d.title, L)), n: d.stages.length, step: true,
      inputs: d.stages.slice(1).map(function (s, j) { return { id: j + 1, l: tx(s.l, L) + ' %', min: 1, max: 100, step: 1, v: R[j + 1], rate: true }; }),
      detail: function (i) { return '<b>' + esc(tx(d.stages[i].l, L)) + '</b> ' + esc(tx(d.stages[i].d, L)); } };
  };

  /* compare: options side by side, criterion by criterion; pick one to read why */
  TPL.compare = function (f, W) {
    var d = f.def, L = f.lang, C = d.cols, rows = d.rows || [];
    var narrow = W < 150 * C.length + 120;
    var h = '<div class="fx-cmp' + (narrow ? ' narrow' : '') + '" style="--n:' + C.length + '">';
    if (!narrow && rows.length) h += '<div class="fx-cr fx-rh"></div>';
    C.forEach(function (c, i) {
      h += '<button type="button" class="fx-ch fx-node t-' + (c.tone || 'n') + '" data-i="' + i + '">' + (c.ic ? '<svg viewBox="0 0 24 24" class="fx-ci">' + '<path d="' + iconPath(c.ic) + '"/></svg>' : '') + '<span>' + esc(tx(c.l, L)) + '</span></button>';
    });
    if (narrow) {
      h = '<div class="fx-cmp narrow" style="--n:' + C.length + '">';
      C.forEach(function (c, i) {
        h += '<div class="fx-card" data-c="' + i + '"><button type="button" class="fx-ch fx-node t-' + (c.tone || 'n') + '" data-i="' + i + '">' + (c.ic ? '<svg viewBox="0 0 24 24" class="fx-ci"><path d="' + iconPath(c.ic) + '"/></svg>' : '') + '<span>' + esc(tx(c.l, L)) + '</span></button><dl>' +
          rows.map(function (r, j) { return '<dt>' + esc(tx(r, L)) + '</dt><dd>' + esc(tx(c.v[j], L)) + '</dd>'; }).join('') + '</dl></div>';
      });
    } else {
      rows.forEach(function (r, j) {
        h += '<div class="fx-cr fx-rh">' + esc(tx(r, L)) + '</div>';
        C.forEach(function (c, i) { h += '<div class="fx-cr" data-c="' + i + '">' + esc(tx(c.v[j], L)) + '</div>'; });
      });
    }
    h += '</div>';
    return { html: h, n: C.length, detail: function (i) { return '<b>' + esc(tx(C[i].l, L)) + '</b> ' + esc(tx(C[i].d, L)); } };
  };

  /* ---------- the frame every figure sits in ---------- */
  var UI = {
    en: { fig: 'Figure', back: 'Back', next: 'Next', play: 'Play', stop: 'Pause', tap: 'Tap any part of the picture.', drag: 'Drag a dot, or pick one and use the arrow keys.', slide: 'Move the slider.', of: 'of' },
    hi: { fig: 'Figure', back: 'Peechhe', next: 'Aage', play: 'Chalaiye', stop: 'Rokiye', tap: 'Picture ke kisi bhi hisse ko tap kijiye.', drag: 'Koi dot kheenchiye, ya ek chunkar arrow keys chalaiye.', slide: 'Slider ko khiskaiye.', of: 'mein se' }
  };

  function render(el, id, opts) {
    opts = opts || {};
    var def = typeof id === 'string' ? DATA[id] : id;
    if (!el || !def || !TPL[def.t]) return null;
    var f = el._fx || { uid: 'fx' + (++seq) + '_', sel: def.start != null ? def.start : def.t === 'compare' ? -1 : 0, set: 0 };
    f.def = def; f.id = typeof id === 'string' ? id : (def.id || ''); f.lang = opts.lang || f.lang || docLang(); f.opts = opts; f.el = el;
    el._fx = f;
    el.classList.add('fx'); el.classList.add('noterm');
    if (f.id) el.setAttribute('data-fx', f.id);
    var L = UI[f.lang] || UI.en;
    if (!el.querySelector(':scope > .fx-stage')) {
      var cap = opts.nocap ? '' : (def.cap ? '<p class="fx-cap">' + esc(tx(def.cap, f.lang)) + '</p>' : '');
      el.insertAdjacentHTML('beforeend', (opts.bare ? '' : '<div class="fx-head"><span class="fx-k">' + esc(opts.label || L.fig) + '</span><b>' + esc(tx(def.title, f.lang)) + '</b></div>') +
        '<div class="fx-stage"></div><div class="fx-ctl"></div><div class="fx-detail" aria-live="polite"></div>' + cap);
    }
    draw(f);
    if (!f.ro && window.ResizeObserver) {
      f.w = 0;
      f.ro = new ResizeObserver(function () { var w = Math.round(el.clientWidth); if (Math.abs(w - f.w) > 24) { clearTimeout(f.rt); f.rt = setTimeout(function () { draw(f); }, 60); } });
      f.ro.observe(el);
    }
    return f;
  }

  function stageWidth(f) {
    var w = Math.round(f.el.clientWidth || 0);
    if (!w) { var p = f.el.parentElement; while (p && !p.clientWidth) p = p.parentElement; w = p ? p.clientWidth : 640; }
    return Math.max(300, Math.min(760, w - 2));
  }

  function draw(f) {
    var el = f.el, L = UI[f.lang] || UI.en, W = stageWidth(f);
    f.w = Math.round(el.clientWidth);
    var r = TPL[f.def.t](f, W);
    f.r = r;
    var stage = el.querySelector(':scope > .fx-stage'), ctl = el.querySelector(':scope > .fx-ctl');
    stage.innerHTML = r.svg || r.html;
    /* controls */
    var c = '';
    if (r.step && r.n > 1) c += '<button type="button" class="fx-b" data-a="back" aria-label="' + L.back + '">◀ ' + L.back + '</button><span class="fx-pos"></span><button type="button" class="fx-b" data-a="next" aria-label="' + L.next + '">' + L.next + ' ▶</button><button type="button" class="fx-b fx-play" data-a="play">▷ ' + L.play + '</button>';
    if (r.sets) c += '<span class="fx-seg" role="group">' + r.sets.map(function (s, i) { return '<button type="button" class="fx-b' + (i === (f.set || 0) ? ' on' : '') + '" data-a="set" data-v="' + i + '" aria-pressed="' + (i === (f.set || 0)) + '">' + esc(s) + '</button>'; }).join('') + '</span>';
    if (r.toggle) c += '<button type="button" class="fx-b' + (f.tog ? ' on' : '') + '" data-a="tog" aria-pressed="' + !!f.tog + '">' + esc(r.toggle[0]) + '</button>';
    if (r.slider) c += '<label class="fx-sl"><span>' + esc(r.slider.l || '') + '</span><input type="range" data-a="val" min="' + r.slider.min + '" max="' + r.slider.max + '" step="' + r.slider.step + '" value="' + r.slider.v + '"></label>';
    if (r.inputs) c += '<div class="fx-ins">' + r.inputs.map(function (x) {
      var v = x.rate ? f.rates[x.id] : f.vals[x.id];
      return '<label class="fx-sl"><span>' + esc(tx(x.l, f.lang)) + ' <b>' + esc(x.rate ? v + '%' : fmt(v, x.fmt)) + '</b></span><input type="range" data-a="' + (x.rate ? 'rate' : 'in') + '" data-k="' + x.id + '" min="' + x.min + '" max="' + x.max + '" step="' + x.step + '" value="' + v + '"></label>';
    }).join('') + '</div>';
    if (r.drag) c += '<span class="fx-hint">' + L.drag + '</span>';
    else if (!r.step && r.n > 1 && !f.def.cap) c += '<span class="fx-hint">' + L.tap + '</span>';
    ctl.innerHTML = c;
    el.classList.toggle('fx-tog', !!f.tog);
    if (f.sel >= r.n) f.sel = 0;
    wire(f);
    select(f, r.n ? f.sel : -1, true);
    if (f.sel < 0 && r.n) el.querySelector(':scope > .fx-detail').innerHTML = '';
  }

  function select(f, i, quiet) {
    var r = f.r, el = f.el, L = UI[f.lang] || UI.en;
    f.sel = i;
    var on = i < 0 ? [] : r.path ? r.path(i) : [i];
    el.querySelectorAll('.fx-stage [data-i]').forEach(function (n) {
      var k = +n.getAttribute('data-i');
      n.classList.toggle('on', on.indexOf(k) >= 0);
      if (r.past) n.classList.toggle('past', k < i);
      if (r.past) n.classList.toggle('later', k > i);
    });
    el.querySelectorAll('.fx-stage [data-c]').forEach(function (n) { n.classList.toggle('on', +n.getAttribute('data-c') === i); });
    el.querySelectorAll('.fx-stage [data-e]').forEach(function (n) { var k = +n.getAttribute('data-e'); n.classList.toggle('on', r.path ? on.indexOf(k) >= 0 : (f.def.t === 'flow' || f.def.t === 'cycle') && k === i - 1 || (f.def.t === 'cycle' && i === 0 && k === r.n - 1)); });
    if (r.regions) {
      var ss = i >= 0 ? r.regions(i) : [];
      el.querySelectorAll('.fx-set').forEach(function (c, j) { c.classList.toggle('on', ss.indexOf(j) >= 0); });
    }
    if (f.def.t === 'compare') el.classList.toggle('fx-picked', i >= 0);
    var pos = el.querySelector('.fx-pos'); if (pos) pos.textContent = (i + 1) + ' ' + L.of + ' ' + r.n;
    var det = el.querySelector(':scope > .fx-detail');
    var html = i >= 0 || !r.n ? r.detail(i) : '';
    if (det.innerHTML !== html) det.innerHTML = html;
    if (!quiet && typeof f.opts.onSelect === 'function') f.opts.onSelect(i);
  }

  function stopPlay(f) { if (f.play) { clearInterval(f.play); f.play = null; var b = f.el.querySelector('.fx-play'); if (b) b.textContent = '▷ ' + (UI[f.lang] || UI.en).play; } }

  function wire(f) {
    var el = f.el, r = f.r;
    if (!f.wired) {
      f.wired = true;
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-a],[data-i]');
        if (!b || !el.contains(b) || b.tagName === 'INPUT') return;
        var a = b.getAttribute('data-a');
        if (a === 'back') { stopPlay(f); select(f, (f.sel - 1 + f.r.n) % f.r.n); }
        else if (a === 'next') { stopPlay(f); select(f, (f.sel + 1) % f.r.n); }
        else if (a === 'play') {
          if (f.play) return stopPlay(f);
          b.textContent = '❚❚ ' + (UI[f.lang] || UI.en).stop;
          if (f.sel >= f.r.n - 1) select(f, 0);
          f.play = setInterval(function () { if (f.sel >= f.r.n - 1) return stopPlay(f); select(f, f.sel + 1); }, 1700);
        }
        else if (a === 'set') { f.set = +b.getAttribute('data-v'); draw(f); }
        else if (a === 'tog') { f.tog = !f.tog; draw(f); }
        else if (b.hasAttribute('data-i') && !f.dragged) { stopPlay(f); select(f, +b.getAttribute('data-i')); }
        f.dragged = false;
      });
      el.addEventListener('keydown', function (e) {
        var n = e.target.closest && e.target.closest('[data-i]');
        if (!n || !el.contains(n)) return;
        var i = +n.getAttribute('data-i');
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(f, i); return; }
        if (f.r.drag && /^Arrow/.test(e.key)) {
          e.preventDefault(); var p = f.pts[i], s = 0.04;
          if (e.key === 'ArrowLeft') p.x = Math.max(0.02, p.x - s); if (e.key === 'ArrowRight') p.x = Math.min(0.98, p.x + s);
          if (e.key === 'ArrowUp') p.y = Math.min(0.98, p.y + s); if (e.key === 'ArrowDown') p.y = Math.max(0.02, p.y - s);
          f.sel = i; draw(f); var g = el.querySelector('.fx-stage [data-i="' + i + '"]'); if (g) g.focus();
        }
      });
      el.addEventListener('input', function (e) {
        var t = e.target, a = t.getAttribute && t.getAttribute('data-a');
        if (a === 'val') { f.val = +t.value; redrawKeep(f, t); }
        else if (a === 'in') { f.vals[t.getAttribute('data-k')] = +t.value; redrawKeep(f, t); }
        else if (a === 'rate') { f.rates[+t.getAttribute('data-k')] = +t.value; redrawKeep(f, t); }
      });
      /* dragging the matrix's dots */
      el.addEventListener('pointerdown', function (e) {
        if (!f.r.drag) return;
        var g = e.target.closest('.fx-pt'); if (!g) return;
        var i = +g.getAttribute('data-i'), sv = el.querySelector('.fx-svg'), box = sv.getBoundingClientRect(), k = sv.viewBox.baseVal.width / box.width, D = f.r.drag;
        f.sel = i; f.dragged = false; e.preventDefault();
        var move = function (ev) {
          var x = (ev.clientX - box.left) * k, y = (ev.clientY - box.top) * k;
          f.pts[i].x = Math.min(0.98, Math.max(0.02, (x - D.ml) / D.pw));
          f.pts[i].y = Math.min(0.98, Math.max(0.02, 1 - (y - D.top) / D.ph));
          f.dragged = true;
          var c = g.querySelector('circle'); c.setAttribute('cx', D.ml + f.pts[i].x * D.pw); c.setAttribute('cy', D.top + (1 - f.pts[i].y) * D.ph);
          var t = g.querySelector('text'); if (t) { t.setAttribute('x', D.ml + f.pts[i].x * D.pw + 13); t.setAttribute('y', D.top + (1 - f.pts[i].y) * D.ph + 4); t.querySelectorAll('tspan').forEach(function (s) { s.setAttribute('x', D.ml + f.pts[i].x * D.pw + 13); }); }
        };
        var up = function () { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); draw(f); select(f, i); };
        window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);
      });
    }
  }
  /* redraw for a slider without losing the slider under the finger */
  function redrawKeep(f, input) {
    var r = TPL[f.def.t](f, stageWidth(f));
    f.r = r;
    f.el.querySelector(':scope > .fx-stage').innerHTML = r.svg || r.html;
    f.el.querySelectorAll('.fx-ins .fx-sl').forEach(function (lab) {
      var inp = lab.querySelector('input'), b = lab.querySelector('b'); if (!b) return;
      var k = inp.getAttribute('data-k'), rate = inp.getAttribute('data-a') === 'rate', x = (r.inputs || []).filter(function (q) { return String(q.id) === k; })[0];
      b.textContent = rate ? inp.value + '%' : fmt(+inp.value, x && x.fmt);
    });
    select(f, r.n ? Math.min(f.sel, r.n - 1) : -1, true);
  }

  /* ---------- the route as one strip: 26 weeks, coloured by where you are ---------- */
  function weeks(el, o) {
    o = o || {}; var W = Math.max(300, Math.min(980, el.clientWidth || 640)), ws = o.weeks || [], n = ws.length || 26, lang = o.lang || docLang();
    var perRow = W < 560 ? 13 : 26, rows = Math.ceil(n / perRow), cw = (W - 4) / perRow, ch = 30, out = '', mh = 18;
    var months = o.months || [];
    for (var r = 0; r < rows; r++) {
      var y0 = r * (ch + mh + 26) + mh + 2;
      months.forEach(function (m, mi) {
        var a = Math.max(m.from, r * perRow + 1), b = Math.min(m.to, (r + 1) * perRow);
        if (a > b) return;
        var x = 2 + (a - 1 - r * perRow) * cw, w = (b - a + 1) * cw;
        out += '<g class="fx-mo m' + (mi % 2) + '"><rect x="' + r1(x) + '" y="' + (y0 - mh) + '" width="' + r1(w - 2) + '" height="' + (mh - 3) + '" rx="3"/>' +
          '<text x="' + r1(x + 5) + '" y="' + (y0 - 6) + '" font-size="10.5">' + esc((function (ls) { return ls.length > 1 ? ls[0].replace(/[-,:;]$/, '') + '…' : ls[0]; })(wrap(m.l, w - 16, 10.5))) + '</text></g>';
      });
      ws.slice(r * perRow, (r + 1) * perRow).forEach(function (w, j) {
        var x = 2 + j * cw;
        out += '<g class="fx-wk s-' + (w.status || 'todo') + '" data-w="' + w.n + '" tabindex="0" role="button" aria-label="' + esc((lang === 'hi' ? 'Week ' : 'Week ') + w.n + ': ' + (w.title || '') + ' (' + (w.statusL || w.status || '') + ')') + '"><title>' + esc('W' + w.n + ' · ' + (w.title || '')) + '</title>' +
          '<rect x="' + r1(x) + '" y="' + y0 + '" width="' + r1(cw - 3) + '" height="' + ch + '" rx="5"' + (w.pct != null ? ' style="--p:' + w.pct + '"' : '') + '/>' +
          (w.pct != null && w.pct > 0 && w.pct < 1 ? '<rect class="fx-wkp" x="' + r1(x) + '" y="' + (y0 + ch - 5) + '" width="' + r1((cw - 3) * w.pct) + '" height="5" rx="2"/>' : '') +
          '<text x="' + r1(x + (cw - 3) / 2) + '" y="' + (y0 + 19) + '" font-size="11" text-anchor="middle">' + w.n + '</text></g>';
      });
    }
    var H = rows * (ch + mh + 26) - 20;
    var leg = (o.legend || []).map(function (l) { return '<span class="fx-lg s-' + l[0] + '"><i></i>' + esc(l[1]) + '</span>'; }).join('');
    el.classList.add('fx', 'fx-weeks', 'noterm');
    el.innerHTML = '<svg class="fx-svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="group" aria-label="' + esc(o.label || 'Weeks') + '">' + out + '</svg>' + (leg ? '<div class="fx-legend">' + leg + '</div>' : '');
    if (!el._wk) {
      el._wk = true;
      var pick = function (e) { var g = e.target.closest('[data-w]'); if (g && o.onPick) o.onPick(+g.getAttribute('data-w')); };
      el.addEventListener('click', pick);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(e); } });
      if (window.ResizeObserver) { var last = W; new ResizeObserver(function () { var w = el.clientWidth; if (Math.abs(w - last) > 40) { last = w; weeks(el, o); } }).observe(el); }
    }
    el._wo = o;
  }

  /* ---------- the topics as one path, each with how much is done ---------- */
  function journey(el, o) {
    o = o || {}; var N = o.nodes || [], W = Math.max(300, Math.min(980, el.clientWidth || 640));
    var per = W < 520 ? 3 : W < 760 ? 4 : 5, rows = Math.ceil(N.length / per), cw = W / per, rh = 112, out = '', pts = [];
    N.forEach(function (nd, i) {
      var r = Math.floor(i / per), c = i % per; if (r % 2) c = per - 1 - c;
      pts.push({ x: cw * c + cw / 2, y: r * rh + 40 });
    });
    var d = '';
    pts.forEach(function (p, i) {
      if (!i) { d += 'M' + r1(p.x) + ' ' + r1(p.y); return; }
      var q = pts[i - 1];
      if (q.y === p.y) d += 'L' + r1(p.x) + ' ' + r1(p.y);
      else { var bx = (p.x < W / 2 ? -1 : 1) * 0 + p.x; var side = Math.floor((i - 1) / per) % 2 ? -1 : 1; var ex = side > 0 ? Math.min(W - 6, q.x + cw * 0.5) : Math.max(6, q.x - cw * 0.5); d += 'C' + r1(ex) + ' ' + r1(q.y) + ' ' + r1(ex) + ' ' + r1(p.y) + ' ' + r1(bx) + ' ' + r1(p.y); }
    });
    out += '<path class="fx-path" d="' + d + '"/>';
    N.forEach(function (nd, i) {
      var p = pts[i], pc = Math.max(0, Math.min(1, nd.pct || 0)), R = 21, C = 2 * Math.PI * R;
      var ls = wrap(nd.label, Math.min(cw - 14, 150), 11.5).slice(0, 3);
      out += '<g class="fx-jn' + (pc >= 1 ? ' done' : pc > 0 ? ' part' : '') + (nd.can ? ' can' : '') + (nd.here ? ' here' : '') + '" data-t="' + esc(nd.id) + '" tabindex="0" role="button" aria-label="' + esc(nd.n + '. ' + nd.label + ' · ' + Math.round(pc * 100) + '%') + '">' +
        '<circle class="bg" cx="' + r1(p.x) + '" cy="' + r1(p.y) + '" r="' + R + '"/>' +
        (pc > 0 ? '<circle class="pr" cx="' + r1(p.x) + '" cy="' + r1(p.y) + '" r="' + R + '" stroke-dasharray="' + r1(C * pc) + ' ' + r1(C) + '" transform="rotate(-90 ' + r1(p.x) + ' ' + r1(p.y) + ')"/>' : '') +
        '<text class="nn" x="' + r1(p.x) + '" y="' + r1(p.y + 5) + '" font-size="14" text-anchor="middle">' + (nd.can ? '✓' : esc(nd.n)) + '</text>' +
        lines(p.x, p.y + R + 16, ls, 11.5, 'middle', 'fx-lb', 13.5) + '</g>';
    });
    el.classList.add('fx', 'fx-journey', 'noterm');
    el.innerHTML = '<svg class="fx-svg" viewBox="0 0 ' + W + ' ' + (rows * rh + 6) + '" width="' + W + '" height="' + (rows * rh + 6) + '" role="group" aria-label="' + esc(o.label || 'Topics') + '">' + out + '</svg>';
    if (!el._jn) {
      el._jn = true;
      var pick = function (e) { var g = e.target.closest('[data-t]'); if (g && o.onPick) o.onPick(g.getAttribute('data-t')); };
      el.addEventListener('click', pick);
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(e); } });
      if (window.ResizeObserver) { var last = W; new ResizeObserver(function () { var w = el.clientWidth; if (Math.abs(w - last) > 40) { last = w; journey(el, el._jo); } }).observe(el); }
    }
    el._jo = o;
  }

  /* draw every placeholder under root; lazily, when it comes near the screen */
  function mount(root, opts) {
    var list = (root || document).querySelectorAll('[data-fig]:not([data-fx])');
    var go = function (el) { render(el, el.getAttribute('data-fig'), Object.assign({ nocap: el.hasAttribute('data-nocap'), bare: el.hasAttribute('data-bare'), label: el.getAttribute('data-label') || undefined }, opts || {})); };
    if (!('IntersectionObserver' in window) || (opts && opts.now)) { list.forEach(go); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); go(e.target); } }); }, { rootMargin: '600px 0px' });
    list.forEach(function (el) { io.observe(el); });
  }

  /* ---------- style, shared by every page; colours from the page's tokens ---------- */
  var CSS = '.fx{--fi:var(--ink,#1d2125);--fm:var(--muted,#6b7268);--fl:var(--rule,#cfd3cb);--fb:var(--fx-bg,var(--raised,var(--card,#f6f7f4)));--fs:var(--fx-sunk,var(--sunk,var(--panel,#e6e9e3)));' +
    '--fa:var(--fx-accent,var(--accent,#1F6F5C));--fa2:var(--fx-accent2,var(--accent2,var(--amber,#8a6212)));--fr:var(--red,#b33a2b);--fg:var(--good,var(--verified,#2c7a4b));' +
    'margin:1.6rem 0;padding:.9rem 1rem .8rem;border:1px solid var(--fl);border-radius:10px;background:var(--fb);color:var(--fi);font-family:var(--sans,system-ui,sans-serif);line-height:1.45}' +
    '.fx-head{display:flex;gap:.6rem;align-items:baseline;margin:0 0 .6rem;font-size:.98rem}.fx-head .fx-k{white-space:nowrap;flex:none;font:600 .68rem/1 var(--mono,ui-monospace,monospace);text-transform:uppercase;letter-spacing:.08em;color:var(--fa)}' +
    '.fx-stage{overflow:hidden}.fx-svg{display:block;max-width:100%;height:auto;margin:0 auto;overflow:visible;font-family:var(--sans,system-ui,sans-serif)}' +
    '.fx-svg text{fill:var(--fi)}.fx-svg .fx-mu{fill:var(--fm)}.fx-svg .fx-num{fill:var(--fm);font-family:var(--mono,monospace)}' +
    '.fx-ln{fill:none;stroke:var(--fm);stroke-width:1.6;opacity:.75;transition:stroke .25s,opacity .25s}.fx-ln.on{stroke:var(--fa);opacity:1;stroke-width:2.2}.fx-back{stroke-dasharray:5 5}.fx-ah{fill:var(--fm)}' +
    '.fx-node{cursor:pointer;outline:none}.fx-node rect,.fx-node circle{fill:var(--fs);stroke:var(--fl);stroke-width:1.3;transition:fill .25s,stroke .25s}' +
    '.fx-node:hover rect,.fx-node:focus-visible rect,.fx-node:hover circle{stroke:var(--fa)}.fx-node.on rect,.fx-node.on>circle{fill:color-mix(in srgb,var(--fa) 16%,var(--fb));stroke:var(--fa);stroke-width:2.2}' +
    '.fx-node:focus-visible rect{stroke-width:2.4}.fx-ic path{fill:none;stroke:var(--fa);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}' +
    '.fx-ctr{fill:var(--fm)!important;font-style:italic}' +
    '.fx-actor rect{fill:var(--fs);stroke:var(--fl)}.fx-life{stroke:var(--fl);stroke-dasharray:3 4}.fx-msg{cursor:pointer;transition:opacity .3s}.fx-msg .fx-hit{fill:transparent;stroke:none}.fx-msg.later{opacity:.28}.fx-msg.on .fx-hit{fill:color-mix(in srgb,var(--fa) 12%,transparent)}.fx-msg.on .fx-ln{stroke:var(--fa);opacity:1;stroke-width:2.2}' +
    '.fx-slice rect{fill:color-mix(in srgb,var(--fa2) 14%,transparent);stroke:var(--fa2);stroke-dasharray:6 4;opacity:0;transition:opacity .35s}.fx-slice text{opacity:0}.fx-tog .fx-slice rect,.fx-tog .fx-slice text{opacity:1}' +
    '.fx-set{fill:color-mix(in srgb,var(--fa) 9%,transparent);stroke:var(--fa);stroke-width:1.5;transition:fill .3s}.fx-set.s1{fill:color-mix(in srgb,var(--fa2) 9%,transparent);stroke:var(--fa2)}.fx-set.s2{fill:color-mix(in srgb,var(--fr) 8%,transparent);stroke:var(--fr)}.fx-set.on{fill:color-mix(in srgb,var(--fa) 24%,transparent)}.fx-set.s1.on{fill:color-mix(in srgb,var(--fa2) 24%,transparent)}.fx-set.s2.on{fill:color-mix(in srgb,var(--fr) 20%,transparent)}' +
    '.fx-setl{font-weight:600}.fx-reg .fx-hit{fill:transparent;stroke:transparent}.fx-reg.on .fx-hit{fill:var(--fb);stroke:var(--fa)}' +
    '.fx-plot{fill:var(--fs);stroke:var(--fl)}.fx-ax{stroke:var(--fl);stroke-dasharray:4 4}.fx-q{fill:var(--fm)!important;font-weight:600;opacity:.85}.fx-pt circle{fill:var(--fa)!important;stroke:var(--fb)!important;stroke-width:2.5!important}.fx-pt{cursor:grab;touch-action:none}.fx-pt.on circle{fill:var(--fa2)!important;r:11}.fx-pt text{font-weight:600}' +
    '.fx-bar rect,.fx-out rect{fill:var(--fa);transition:width .5s ease}.fx-bar.on rect{fill:var(--fa2)}.fx-val{fill:var(--fi);font-family:var(--mono,monospace)}.fx-out.big .fx-val{font-weight:600;fill:var(--fa)}' +
    '.fx-zone rect{fill:var(--fs);stroke:var(--fl);transition:fill .25s}.fx-zone.on rect{fill:color-mix(in srgb,var(--fa) 22%,var(--fb));stroke:var(--fa)}.fx-zone.z0 rect{fill:color-mix(in srgb,var(--fg) 10%,var(--fs))}.fx-zone.on.z0 rect{fill:color-mix(in srgb,var(--fg) 26%,var(--fb))}' +
    '.fx-mark line{stroke:var(--fi);stroke-width:2}.fx-mark circle{fill:var(--fi)}.fx-mark text{fill:var(--fb)!important;font-family:var(--mono,monospace)}' +
    '.fx-stage .fx-node.t-good rect{stroke:var(--fg)}.fx-stage .fx-node.t-bad rect{stroke:var(--fr)}.fx-stage .fx-node.t-warn rect{stroke:var(--fa2)}' +
    '.fx-ctl{display:flex;flex-wrap:wrap;gap:.4rem .5rem;align-items:center;margin:.7rem 0 0}.fx-b{font:500 .8rem/1 var(--sans,system-ui);padding:.42rem .65rem;border-radius:6px;border:1px solid var(--fl);background:var(--fs);color:var(--fi);cursor:pointer}.fx-b:hover{border-color:var(--fa)}.fx-b.on{background:var(--fa);color:var(--fb);border-color:var(--fa)}' +
    '.fx-seg{display:inline-flex;flex-wrap:wrap;gap:.3rem}.fx-pos{font:.76rem var(--mono,monospace);color:var(--fm)}.fx-hint{font-size:.78rem;color:var(--fm)}' +
    '.fx label,.fx .fx-sl span{text-transform:none;letter-spacing:normal;font-family:var(--sans,system-ui,sans-serif)}.fx-ins{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.5rem 1rem;width:100%}.fx-sl{display:flex;flex-direction:column;gap:.15rem;font-size:.8rem;color:var(--fm);flex:1 1 220px}.fx-sl b{color:var(--fi);font-family:var(--mono,monospace);font-weight:600}.fx-sl input{width:100%;accent-color:var(--fa)}' +
    '.fx-detail{margin:.65rem 0 0;padding:.6rem .75rem;border-left:3px solid var(--fa);background:var(--fs);border-radius:0 6px 6px 0;font-size:.9rem;min-height:1.2rem}.fx-detail:empty{display:none}.fx-detail b{color:var(--fi)}.fx-land{display:block;margin-top:.3rem;color:var(--fm)}' +
    '.fx-cap{margin:.55rem 0 0;font-size:.84rem;color:var(--fm)}' +
    '.fx-cmp{display:grid;grid-template-columns:minmax(90px,.8fr) repeat(var(--n),minmax(0,1fr));gap:4px;font-size:.86rem}.fx-cmp.narrow{grid-template-columns:1fr;gap:.5rem}.fx-ch{display:flex;gap:.4rem;align-items:center;justify-content:center;font:600 .86rem var(--sans,system-ui);padding:.5rem;border-radius:8px;border:1.5px solid var(--fl);background:var(--fs);color:var(--fi);cursor:pointer}' +
    '.fx-ch.t-good{border-color:var(--fg)}.fx-ch.t-bad{border-color:var(--fr)}.fx-ch.t-warn{border-color:var(--fa2)}.fx-ch.on{background:color-mix(in srgb,var(--fa) 16%,var(--fb));border-color:var(--fa)}.fx-ci{width:18px;height:18px;flex:none}.fx-ci path{fill:none;stroke:var(--fa);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}' +
    '.fx-cr{padding:.45rem .55rem;background:var(--fs);border-radius:6px;transition:opacity .25s,background .25s}.fx-rh{background:none;font-weight:600;color:var(--fm);font-size:.8rem}.fx-picked .fx-cr[data-c]:not(.on){opacity:.45}.fx-cr.on{background:color-mix(in srgb,var(--fa) 12%,var(--fb))}' +
    '.fx-card{border:1px solid var(--fl);border-radius:8px;padding:.5rem;transition:opacity .25s}.fx-picked .fx-card:not(.on){opacity:.5}.fx-card dl{margin:.4rem 0 0;display:grid;grid-template-columns:auto 1fr;gap:.2rem .6rem;font-size:.84rem}.fx-card dt{color:var(--fm);font-weight:600}.fx-card dd{margin:0}' +
    '.fx-weeks,.fx-journey{padding:.6rem .7rem}.fx-wk{cursor:pointer;outline:none}.fx-wk rect{fill:var(--fs);stroke:var(--fl)}.fx-wk text{fill:var(--fm)!important;font-family:var(--mono,monospace)}.fx-wk.s-done rect{fill:var(--fg);stroke:var(--fg)}.fx-wk.s-done text{fill:var(--fb)!important}' +
    '.fx-wk.s-part rect{fill:color-mix(in srgb,var(--fg) 25%,var(--fs))}.fx-wk.s-now rect{stroke:var(--fa);stroke-width:2.4;fill:color-mix(in srgb,var(--fa) 15%,var(--fs))}.fx-wk.s-now text{fill:var(--fa)!important;font-weight:700}.fx-wk.s-behind rect{stroke:var(--fr);stroke-width:1.8}.fx-wk .fx-wkp{fill:var(--fg);stroke:none}.fx-wk:hover rect,.fx-wk:focus-visible rect{stroke:var(--fa);stroke-width:2.2}' +
    '.fx-mo rect{fill:var(--fs);stroke:none}.fx-mo.m1 rect{fill:color-mix(in srgb,var(--fa) 9%,var(--fs))}.fx-mo text{fill:var(--fm)!important;font-weight:600}' +
    '.fx-legend{display:flex;flex-wrap:wrap;gap:.3rem 1rem;margin-top:.4rem;font-size:.76rem;color:var(--fm)}.fx-lg i{display:inline-block;width:.8rem;height:.8rem;border-radius:3px;margin-right:.3rem;vertical-align:-.1rem;background:var(--fs);border:1px solid var(--fl)}.fx-lg.s-done i{background:var(--fg);border-color:var(--fg)}.fx-lg.s-now i{border:2px solid var(--fa)}.fx-lg.s-behind i{border:2px solid var(--fr)}.fx-lg.s-part i{background:color-mix(in srgb,var(--fg) 25%,var(--fs))}' +
    '.fx-path{fill:none;stroke:var(--fl);stroke-width:5;stroke-linecap:round;stroke-dasharray:1 10}.fx-jn{cursor:pointer;outline:none}.fx-jn .bg{fill:var(--fb);stroke:var(--fl);stroke-width:5}.fx-jn .pr{fill:none;stroke:var(--fg);stroke-width:5;stroke-linecap:round}.fx-jn .nn{fill:var(--fm)!important;font-weight:700;font-family:var(--mono,monospace)}' +
    '.fx-jn.done .bg{fill:color-mix(in srgb,var(--fg) 16%,var(--fb))}.fx-jn.can .nn{fill:var(--fg)!important}.fx-jn.here .bg{stroke:var(--fa)}.fx-jn.here .nn{fill:var(--fa)!important}.fx-jn:hover .bg,.fx-jn:focus-visible .bg{stroke:var(--fa)}.fx-jn .fx-lb{font-weight:500}' +
    '@media (prefers-reduced-motion:reduce){.fx *{transition:none!important}}' +
    '@media print{.fx-ctl{display:none}.fx{break-inside:avoid}}';
  function style() {
    if (document.getElementById('fx-css')) return;
    var s = document.createElement('style'); s.id = 'fx-css'; s.textContent = CSS;
    (document.head || document.documentElement).appendChild(s);
  }
  style();

  window.FIGS = { render: render, mount: mount, weeks: weeks, journey: journey, has: function (id) { return !!DATA[id]; }, data: DATA, icons: Object.keys(ICONS), fmt: fmt, tx: tx };
  if (document.readyState !== 'loading') mount(document); else document.addEventListener('DOMContentLoaded', function () { mount(document); });
})();
