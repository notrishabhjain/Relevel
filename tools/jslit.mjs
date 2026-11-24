/* Find the string literals in a JavaScript data file, with their positions.

   The course content lives in hand-written JS files of arrays and objects. To
   rewrite a line of text safely we have to change exactly one string literal
   and nothing around it, so this walks the source the way a JS parser would
   for these files: comments are skipped, quotes are matched with their escapes,
   and each literal is decoded with JavaScript's own rules.

   It does not understand regular-expression literals; the data files have none,
   and literals() throws if it meets something that looks like one, rather than
   misreading the file. */

export function literals(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  while (i < n) {
    const ch = src[i], nx = src[i + 1];
    if (ch === '/' && nx === '/') { const e = src.indexOf('\n', i); i = e < 0 ? n : e + 1; continue; }
    if (ch === '/' && nx === '*') { const e = src.indexOf('*/', i + 2); if (e < 0) throw new Error('unclosed comment at ' + i); i = e + 2; continue; }
    if (ch === "'" || ch === '"' || ch === '`') {
      let j = i + 1;
      while (j < n && src[j] !== ch) {
        if (src[j] === '\\') j += 2;
        else {
          if (ch === '`' && src[j] === '$' && src[j + 1] === '{') throw new Error('template literal with ${} at ' + i);
          if (ch !== '`' && src[j] === '\n') throw new Error('unterminated string at ' + i);
          j++;
        }
      }
      if (j >= n) throw new Error('unterminated string at ' + i);
      const raw = src.slice(i, j + 1);
      // eslint-disable-next-line no-new-func
      const value = Function('"use strict";return (' + raw + ');')();
      out.push({ start: i, end: j + 1, quote: ch, raw, value });
      i = j + 1;
      continue;
    }
    if (ch === '/') {
      /* a division sign is fine; a regex literal would need a real parser */
      let k = i - 1; while (k >= 0 && /\s/.test(src[k])) k--;
      if (k < 0 || /[=(,:\[!&|?{};]/.test(src[k])) throw new Error('possible regex literal at ' + i);
    }
    i++;
  }
  return out;
}

/* A JS single-quoted literal for any string. */
export function encode(s) {
  return "'" + String(s)
    .replace(/\\/g, '\\\\').replace(/'/g, "\\'")
    .replace(/\n/g, '\\n').replace(/\r/g, '\\r')
    .split(String.fromCharCode(0x2028)).join('\\u2028')
    .split(String.fromCharCode(0x2029)).join('\\u2029') + "'";
}
