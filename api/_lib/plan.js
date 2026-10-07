/* The 26-week plan tracker: merge rules and the public status summary.

   The page keeps one small document per person:
     { weeks:   { "1": { learn, build, ship, floor, link, note, u }, ... },
       gates:   { "M1": { passed, note, u }, ... },
       parking: { "<id>": { text, u, del } } }
   Every entry carries `u`, the time it was last edited on the device that edited
   it. Two devices that both edited different weeks keep both edits; for the same
   entry the later `u` wins. Nothing is ever refused for being out of date. */

export const START = Date.UTC(2026, 9, 7);          // week 1 starts Wed 7 Oct 2026
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
    out.weeks[n] = { learn: !!v.learn, build: !!v.build, ship: !!v.ship, floor: !!v.floor,
      link: /^https?:\/\//i.test(v.link || '') ? str(v.link, 500) : '', note: str(v.note, 500), u: num(v.u) };
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
   parking-lot text. */
export function status(data, now = Date.now()) {
  const d = clean(data), { today, cur } = weekAt(now);
  const w = n => d.weeks[n] || {};
  let shipped = 0, due = 0, behind = 0, floor = 0, streak = 0, updated = 0;
  const shippedWeeks = [], missedWeeks = [];
  for (let n = 1; n <= WEEKS; n++) {
    if (w(n).ship) { shipped++; shippedWeeks.push(n); if (w(n).floor) floor++; }
    if (n < cur) { due++; if (!w(n).ship) { behind++; missedWeeks.push(n); } }
    updated = Math.max(updated, w(n).u || 0);
  }
  let n = Math.min(cur, WEEKS);
  if (n >= 1 && !w(n).ship) n--;
  while (n >= 1 && w(n).ship) { streak++; n--; }
  const level = Math.min(3, behind);
  const cw = cur >= 1 && cur <= WEEKS ? w(cur) : {};
  return { today: new Date(today).toISOString().slice(0, 10), week: cur, of: WEEKS, shipped, due, behind, floor,
    streak, level, shippedWeeks, missedWeeks, thisWeek: { learn: !!cw.learn, build: !!cw.build, ship: !!cw.ship },
    lastEdit: updated ? new Date(updated).toISOString() : null };
}
