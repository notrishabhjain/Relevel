#!/usr/bin/env node
/* Every name a runnable code cell reads must be defined where a reader can see it.

   A chapter's cells run in one Python session that starts with only the
   warm-up (key, OpenAI, client). The reader may open any chapter on its own, so
   a cell that calls ask() or reads `testset` has to find that name assigned in
   the same cell, in an earlier cell of the same chapter, in the warm-up, or
   among Python's builtins and imports. This reads the built content, lists
   every name that is not, and fails if there is one.

   `node tools/code-names-check.mjs` — run by `npm test` after the build. */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(ROOT, 'content/defaults.json');
if (!fs.existsSync(file)) { console.error('content/defaults.json missing — run the build first'); process.exit(1); }
const C = JSON.parse(fs.readFileSync(file, 'utf8'));

/* The same test the page uses to decide which blocks get a Run button. */
const ctx = { window: {}, location: { href: 'http://x/' } }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'src/pyrun.js'), 'utf8'), ctx);
const isPy = ctx.window.PY.isPython;

/* The warm-up cell that runs before the first cell of any chapter. */
const WARMUP = 'from google.colab import userdata\ntry:\n    key = userdata.get("NVIDIA_API_KEY")\nexcept Exception:\n    key = None\nfrom openai import OpenAI\nclient = OpenAI(base_url="x", api_key=key)';

const chapters = [];
for (const c of C.chapters) {
  const cells = [];
  const walk = b => {
    if (!Array.isArray(b)) return;
    if (b[0] === 'code' && b[2] !== 'read' && b[2] !== 'local' && isPy(b[1])) cells.push(b[1]);
    else if (b[0] === 'do') (b[2] || []).forEach(walk);
  };
  (c.story || []).forEach(walk);
  (c.handson || []).forEach(s => (s.b || []).forEach(walk));
  if (cells.length) chapters.push({ id: c.id, cells });
}

const PY = String.raw`
import ast, builtins, json, sys
data = json.load(sys.stdin)
SCOPES = (ast.FunctionDef, ast.AsyncFunctionDef, ast.Lambda, ast.ClassDef)
def argnames(a):
    return {x.arg for x in a.posonlyargs + a.args + a.kwonlyargs + [a.vararg, a.kwarg] if x}
def own(nodes):
    """Yield the nodes of one scope, without going into the scopes nested in it."""
    stack = list(nodes)
    while stack:
        n = stack.pop()
        yield n
        if isinstance(n, SCOPES):
            stack.extend(n.decorator_list if hasattr(n, "decorator_list") else [])
            continue
        stack.extend(ast.iter_child_nodes(n))
def stores_of(nodes):
    out = set()
    for n in own(nodes):
        if isinstance(n, ast.Name) and isinstance(n.ctx, (ast.Store, ast.Del)): out.add(n.id)
        elif isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)): out.add(n.name)
        elif isinstance(n, (ast.Import, ast.ImportFrom)):
            for al in n.names: out.add((al.asname or al.name).split(".")[0])
        elif isinstance(n, ast.ExceptHandler) and n.name: out.add(n.name)
        elif isinstance(n, (ast.Global, ast.Nonlocal)): out.update(n.names)
    return out
def check(nodes, avail, bad):
    avail = avail | stores_of(nodes)
    for n in own(nodes):
        if isinstance(n, ast.Name) and isinstance(n.ctx, ast.Load) and n.id not in avail:
            bad.append((n.id, n.lineno))
        elif isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
            check(n.body, avail | argnames(n.args), bad)
        elif isinstance(n, ast.Lambda):
            check([n.body], avail | argnames(n.args), bad)
        elif isinstance(n, ast.ClassDef):
            check(n.body, avail, bad)
    return avail
known = set(dir(builtins)) | {"__name__", "__file__"}
known |= stores_of(ast.parse(data["warmup"]).body)
out = []
for ch in data["chapters"]:
    seen = set(known)
    for i, src in enumerate(ch["cells"], 1):
        try: tree = ast.parse(src)
        except SyntaxError as e:
            out.append({"ch": ch["id"], "cell": i, "syntax": str(e)}); continue
        bad = []
        seen = check(tree.body, seen, bad)
        for nm, ln in bad: out.append({"ch": ch["id"], "cell": i, "name": nm, "line": ln})
print(json.dumps(out))
`;

const r = spawnSync('python3', ['-I', '-c', PY], { input: JSON.stringify({ warmup: WARMUP, chapters }), encoding: 'utf8', maxBuffer: 1 << 26 });
if (r.status !== 0) { console.error('code-names-check: python3 failed\n' + (r.stderr || r.error)); process.exit(1); }
const found = JSON.parse(r.stdout);
const bad = found.filter(f => f.name);
const syn = found.filter(f => f.syntax);
const byCh = new Map();
for (const f of bad) { const k = f.ch + ' cell ' + f.cell; (byCh.get(k) || byCh.set(k, new Set()).get(k)).add(f.name); }
for (const [k, s] of byCh) console.error('  ' + k + ' reads a name nothing has defined: ' + [...s].join(', '));
for (const f of syn) console.error('  ' + f.ch + ' cell ' + f.cell + ' is not valid Python: ' + f.syntax);
const cells = chapters.reduce((n, c) => n + c.cells.length, 0);
if (bad.length || syn.length) {
  console.error(`code-names-check: ${byCh.size} cell(s) read undefined names, ${syn.length} cell(s) do not parse`);
  process.exit(1);
}
console.log(`code-names-check: ${cells} runnable cells in ${chapters.length} chapters, every name is defined where the reader can see it`);
