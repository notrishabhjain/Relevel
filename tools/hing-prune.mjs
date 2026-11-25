#!/usr/bin/env node
/* Remove Hinglish translations whose English line no longer appears anywhere.

   The Hinglish layer is keyed on the exact English line. Rewrite a line and its
   old translation can never fire again, and tools/content-check.mjs fails the
   build on it. After a rewrite with tools/sheet.mjs, run this: it builds, asks
   the content check for the stale keys, and deletes exactly those properties
   from the src/data/hing-*.js files, checking each file still loads with every
   other key and value unchanged.

   `node tools/hing-prune.mjs` (add --dry to only report). */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { literals } from './jslit.mjs';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dry = process.argv.includes('--dry');
execFileSync(process.execPath, ['build.js'], { cwd: ROOT, stdio: 'ignore' });
const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'prune-')), 'stale.json');
try { execFileSync(process.execPath, ['tools/content-check.mjs'], { cwd: ROOT, stdio: 'ignore', env: { ...process.env, HING_STALE_OUT: tmp } }); } catch (e) { /* it fails while there are stale keys; that is why we are here */ }
const stale = new Set(JSON.parse(fs.readFileSync(tmp, 'utf8')));
if (!stale.size) { console.log('no stale Hinglish keys'); process.exit(0); }

const evalMap = src => { const W = {}; new Function('window', src)(W); return W.HING || {}; };
let removed = 0, files = 0;
for (const f of fs.readdirSync(path.join(ROOT, 'src/data')).filter(f => /^hing-.*\.js$/.test(f))) {
  const p = path.join(ROOT, 'src/data', f), src = fs.readFileSync(p, 'utf8');
  const lits = literals(src), at = new Map(lits.map(l => [l.start, l]));
  const cuts = [];
  for (const l of lits) {
    if (!stale.has(l.value.trim())) continue;
    /* is it a key? the next thing after it must be a colon */
    let i = l.end; while (/\s/.test(src[i])) i++;
    if (src[i] !== ':') continue;
    /* the value runs to the next comma (or closing brace) outside strings */
    let j = i + 1, depth = 0;
    for (;;) {
      if (j >= src.length) throw new Error(f + ': ran off the end after key ' + l.raw.slice(0, 40));
      if (at.has(j)) { j = at.get(j).end; continue; }
      if (src.startsWith('//', j)) { j = src.indexOf('\n', j); continue; }
      if (src.startsWith('/*', j)) { j = src.indexOf('*/', j) + 2; continue; }
      const c = src[j];
      if (c === '(' || c === '[') depth++;
      else if (c === ')' || c === ']') depth--;
      else if (depth === 0 && c === ',') { j++; break; }
      else if (depth === 0 && c === '}') break;
      j++;
    }
    /* take the whole line(s) when the property stands alone */
    let s = l.start; const ls = src.lastIndexOf('\n', s - 1) + 1;
    if (/^\s*$/.test(src.slice(ls, s))) s = ls;
    let e = j; const nl = src.indexOf('\n', e);
    if (nl >= 0 && /^[ \t]*$/.test(src.slice(e, nl))) e = nl + 1;
    cuts.push([s, e, l.value]);
  }
  if (!cuts.length) continue;
  let out = '', pos = 0;
  for (const [s, e] of cuts.sort((a, b) => a[0] - b[0])) { out += src.slice(pos, s); pos = e; }
  out += src.slice(pos);
  const before = evalMap(src), after = evalMap(out), gone = new Set(cuts.map(c => c[2]));
  for (const k of Object.keys(before)) {
    if (gone.has(k)) { if (k in after) throw new Error(f + ': key survived removal: ' + k.slice(0, 50)); continue; }
    if (after[k] !== before[k]) throw new Error(f + ': removal changed another key: ' + k.slice(0, 50));
  }
  removed += cuts.length; files++;
  if (!dry) fs.writeFileSync(p, out);
}
console.log(`${dry ? 'would remove' : 'removed'} ${removed} stale Hinglish key(s) from ${files} file(s) (${stale.size} stale)`);
