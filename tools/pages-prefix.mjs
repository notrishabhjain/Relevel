/* Rewrites root-absolute URLs in a built site so it works under a sub-path.
   GitHub project Pages serves at https://<user>.github.io/<repo>/, where an
   href of "/book/" would leave the site. Vercel and any root host do not need this.

   usage: node tools/pages-prefix.mjs <dir> <base>     e.g. dist/site /Relevel

   Only the book pages and the book map in the app carry absolute URLs; /api/...
   is left alone on purpose (there is no backend on Pages, and the app falls back
   to the browser store when it cannot reach one). */
import fs from 'node:fs';
import p from 'node:path';

const [dir, rawBase] = process.argv.slice(2);
if (!dir || !rawBase) { console.error('usage: node tools/pages-prefix.mjs <dir> <base>'); process.exit(1); }
const base = '/' + rawBase.replace(/^\/+|\/+$/g, '');

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = p.join(d, e.name);
    e.isDirectory() ? walk(f, out) : out.push(f);
  }
  return out;
}

let files = 0, edits = 0;
for (const f of walk(dir)) {
  if (!/\.(html|js|css|webmanifest)$/.test(f) || /\/sw\.js$/.test(f)) continue;
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  /* HTML attributes that start at the site root (but not protocol-relative //) */
  s = s.replace(/\b(href|src|data-base|action)="\/(?!\/)/g, `$1="${base}/`);
  /* the book map the app is built with */
  s = s.replace(/"(base|hiBase)":"\/book\//g, `"$1":"${base}/book/`);
  if (s !== before) { fs.writeFileSync(f, s); files++; edits += (before.length === s.length ? 0 : 1); }
}
console.log(`pages-prefix: ${files} files rewritten for base ${base}`);
