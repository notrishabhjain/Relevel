/* The 26-week plan: merge rules for its notes, and the public status summary.

   Progress itself is the route's (src/data/route.mjs), read from the one
   progress record the playbook keeps. The plan page keeps only its own notes:
     { weeks:   { "1": { link, note, u }, ... },
       gates:   { "M1": { passed, note, u }, ... },
       parking: { "<id>": { text, u, del } } }
   Every entry carries `u`, the time it was last edited on the device that edited
   it. Two devices that both edited different weeks keep both edits; for the same
   entry the later `u` wins. Nothing is ever refused for being out of date. */

import { WEEKS as ROUTE_WEEKS, START as ROUTE_START, stepDone, nextStep } from '../../src/data/route.mjs';

export const START = Date.parse(ROUTE_START + 'T00:00:00Z');  // week 1 starts Mon 19 Oct 2026
export const DAY = 86400000;
export const WEEKS = 26;
const GATE_IDS = new Set(['M1', 'M2', 'M3', 'M4', 'M5', 'M6']);
const str = (v, n) => (typeof v === 'string' ? v.slice(0, n) : '');
const num = v => (Number.isFinite(v) ? Math.max(0, Math.min(v, 8.64e15)) : 0);

/* Whatever arrives is reduced to the shape above, so a bad client cannot store
   anything else. */
export function clean(d) {
  const out = { weeks: {}, gates: {}, parking: {} };
  const src = d && typeof d === 'object' ? d : {};
  for (const [k, v] of Object.entries(src.weeks || {})) {
    const n = Number(k);
    if (!Number.isInteger(n) || n < 1 || n > WEEKS || !v || typeof v !== 'object') continue;
    out.weeks[n] = { link: /^https?:\/\//i.test(v.link || '') ? str(v.link, 500) : '', note: str(v.note, 500), u: num(v.u) };
  }
  for (const [k, v] of Object.entries(src.gates || {})) {
    if (!GATE_IDS.has(k) || !v || typeof v !== 'object') continue;
    out.gates[k] = { passed: !!v.passed, note: str(v.note, 500), u: num(v.u) };
  }
  let kept = 0;
  for (const [k, v] of Object.entries(src.parking || {})) {
    if (!/^[\w-]{1,24}$/.test(k) || !v || typeof v !== 'object' || kept >= 200) continue;
    out.parking[k] = { text: str(v.text, 300), del: !!v.del, u: num(v.u) };
    kept++;
  }
  return out;
}

export function merge(a, b) {
  const x = clean(a), y = clean(b), out = { weeks: {}, gates: {}, parking: {} };
  for (const part of ['weeks', 'gates', 'parking']) {
    for (const k of new Set([...Object.keys(x[part]), ...Object.keys(y[part])])) {
      const p = x[part][k], q = y[part][k];
      out[part][k] = !p ? q : !q ? p : (q.u >= p.u ? q : p);
    }
  }
  return out;
}

/* Week number for a moment: 0 before the plan starts, 1-26 during it, 27 after.
   Days are counted in India time, because that is when the person is awake. */
export function weekAt(now) {
  const ist = new Date(now + 5.5 * 3600000);
  const today = Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate());
  const idx = Math.round((today - START) / DAY);
  return { today, cur: idx < 0 ? 0 : Math.min(WEEKS + 1, Math.floor(idx / 7) + 1) };
}

/* What a check-in needs to know, and nothing private: no links, no notes, no
   parking-lot text, no answers. Counts come from the route and the person's
   progress record; `data` is the plan page's own document (for lastEdit). */
export function status(data, progress, now = Date.now()) {
  const d = clean(data), P = progress && typeof progress === 'object' ? progress : {};
  const { today, cur } = weekAt(now);
  let complete = 0, stepsDone = 0, steps = 0, updated = 0;
  const completeWeeks = [], behindWeeks = [];
  for (const w of ROUTE_WEEKS) {
    const done = w.steps.filter(x => stepDone(x, P)).length;
    steps += w.steps.length; stepsDone += done;
    if (done === w.steps.length) { complete++; completeWeeks.push(w.n); }
    else if (w.n < cur) behindWeeks.push(w.n);
    updated = Math.max(updated, (d.weeks[w.n] || {}).u || 0);
  }
  const nx = nextStep(P), at = nx ? nx.week : WEEKS + 1;
  const behind = cur >= 1 && cur <= WEEKS ? Math.max(0, cur - at) : 0;
  const cw = ROUTE_WEEKS[Math.min(Math.max(at, 1), WEEKS) - 1];
  return { today: new Date(today).toISOString().slice(0, 10), week: cur, of: WEEKS, onWeek: at > WEEKS ? null : at,
    stepsDone, steps, complete, behind, level: Math.min(3, behind), completeWeeks, behindWeeks,
    thisWeek: { done: cw.steps.filter(x => stepDone(x, P)).length, of: cw.steps.length },
    next: nx ? { kind: nx.kind, title: nx.title, week: nx.week } : null,
    lastEdit: Math.max(updated, P.updatedAt || 0) ? new Date(Math.max(updated, P.updatedAt || 0)).toISOString() : null };
}
