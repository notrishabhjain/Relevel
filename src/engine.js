/* Tracking engine. Pure logic, no DOM.
   Mastery with decay, SM-2 spaced repetition, calibration scoring,
   session construction, and the analytics the dashboard reads. */

window.ENG = (function(){
/* Content is loaded before boot and can be re-edited from the portal, so these
   are rebuilt on demand rather than captured when this file parses. The
   containers are mutated in place: views hold references to them. */
let ITEMS=[];
const byItem={}, bySkill={}, SK={};
function reinit(){
  const raw = window.ALL_ITEMS ||
    [].concat(window.ITEMS1||[], window.ITEMS2||[], window.ITEMS3||[]);
  ITEMS = raw.map(a=>({id:a[0], sk:a[1], diff:a[2], type:a[3],
                       stem:a[4], opts:a[5], ans:a[6], why:a[7]}));
  Object.keys(byItem).forEach(k=>delete byItem[k]);
  Object.keys(bySkill).forEach(k=>delete bySkill[k]);
  Object.keys(SK).forEach(k=>delete SK[k]);
  ITEMS.forEach(i=>{ byItem[i.id]=i; (bySkill[i.sk]=bySkill[i.sk]||[]).push(i); });
  (window.SKILLS||[]).forEach(s=>SK[s.id]=s);
}
reinit();

const DAY=86400000;
const now=()=>Date.now();
const days=(a,b)=>(b-a)/DAY;

/* ---------- mastery ---------- */
/* Raw mastery moves on evidence; displayed mastery decays with time since last
   practice, to a floor of 70% of raw. Decay is what puts a skill back in the
   review queue without pretending you forgot everything. */
function decayFactor(daysSince){
  if(daysSince<=3) return 1;
  return 1 - 0.30*(1 - Math.exp(-(daysSince-3)/45));
}
function skillState(S, id){
  const st = S.sk[id] || (S.sk[id]={m:0, n:0, ok:0, last:0, hist:[], peak:0});
  return st;
}
function shown(S, id){
  const st=skillState(S,id);
  if(!st.n) return 0;
  return Math.round(st.m * decayFactor(days(st.last, now())));
}
function levelOf(m){
  const B=window.LEVEL_BANDS;
  let L=0; for(let i=1;i<B.length;i++) if(m>=B[i]) L=i;
  return L;
}
function nextBand(m){
  const B=window.LEVEL_BANDS;
  for(let i=1;i<B.length;i++) if(m<B[i]) return B[i];
  return 100;
}

/* Gain is larger for harder items and smaller as mastery rises, so the last
   twenty points require analysis-level items rather than more recall items. */
function applyResult(S, item, correct){
  const st=skillState(S, item.sk);
  const head = Math.max(0, 100 - st.m) / 100;
  if(correct){
    const gain = (3.5 + item.diff*3.2) * (0.35 + 0.65*head);
    st.m = Math.min(100, st.m + gain);
  } else {
    const loss = (4.5 - item.diff*0.7) * (0.4 + 0.6*(st.m/100));
    st.m = Math.max(0, st.m - loss);
  }
  st.n++; if(correct) st.ok++;
  st.last = now();
  st.peak = Math.max(st.peak||0, st.m);
  const last = st.hist[st.hist.length-1];
  if(!last || now()-last.t > 6*3600000) st.hist.push({t:now(), m:Math.round(st.m)});
  else last.m = Math.round(st.m);
  if(st.hist.length>120) st.hist.splice(0, st.hist.length-120);
}

/* ---------- spaced repetition (SM-2, trimmed) ---------- */
function srs(S, itemId){
  return S.srs[itemId] || (S.srs[itemId]={ease:2.5, ivl:0, reps:0, due:0});
}
function scheduleItem(S, itemId, quality){   // quality 0..5
  const c=srs(S,itemId);
  if(quality<3){ c.reps=0; c.ivl=1; }
  else {
    c.reps++;
    if(c.reps===1) c.ivl=1;
    else if(c.reps===2) c.ivl=4;
    else c.ivl=Math.round(c.ivl*c.ease);
    c.ease = Math.max(1.3, c.ease + (0.1 - (5-quality)*(0.08+(5-quality)*0.02)));
  }
  c.ivl = Math.min(c.ivl, 180);
  c.due = now() + c.ivl*DAY;
  c.seen = now();
  return c;
}
function dueList(S){
  const t=now();
  return ITEMS.filter(i=>{const c=S.srs[i.id]; return c && c.due && c.due<=t;});
}
function dueForecast(S, nDays){
  const out=new Array(nDays).fill(0);
  const t=now();
  ITEMS.forEach(i=>{const c=S.srs[i.id]; if(!c||!c.due)return;
    const d=Math.floor((c.due-t)/DAY);
    if(d<0) out[0]++; else if(d<nDays) out[d]++;});
  return out;
}

/* ---------- calibration ---------- */
const CONF=[0.25,0.50,0.75,0.95];
function recordCalibration(S, conf, correct){
  S.cal.push({t:now(), c:conf, k:correct?1:0});
  if(S.cal.length>800) S.cal.splice(0, S.cal.length-800);
}
function calibrationCurve(S){
  const buckets=CONF.map(c=>({c, n:0, ok:0}));
  S.cal.forEach(e=>{
    let bi=0, best=9;
    CONF.forEach((c,i)=>{const d=Math.abs(c-e.c); if(d<best){best=d;bi=i;}});
    buckets[bi].n++; buckets[bi].ok+=e.k;
  });
  return buckets.map(b=>({...b, rate: b.n? b.ok/b.n : null, gap: b.n? (b.ok/b.n)-b.c : null}));
}
function brier(S){
  if(!S.cal.length) return null;
  return S.cal.reduce((a,e)=>a+Math.pow(e.c-e.k,2),0)/S.cal.length;
}
function overconfidence(S){
  const cur=calibrationCurve(S).filter(b=>b.n>=3);
  if(!cur.length) return null;
  const w=cur.reduce((a,b)=>a+b.n,0);
  return cur.reduce((a,b)=>a+b.gap*b.n,0)/w;   // negative = overconfident
}

/* ---------- session construction ---------- */
function weakest(S, n){
  return window.SKILLS
    .map(s=>({s, m:shown(S,s.id), st:skillState(S,s.id)}))
    .sort((a,b)=>{
      if(!a.st.n && b.st.n) return -1;
      if(a.st.n && !b.st.n) return 1;
      return a.m-b.m;
    }).slice(0,n);
}
function pickItems(S, pool, n){
  /* prefer unseen, then least-recently-seen, then harder items as mastery rises */
  const scored = pool.map(i=>{
    const c=S.srs[i.id];
    const seen = c && c.seen ? days(c.seen, now()) : 999;
    const m = shown(S, i.sk);
    const fit = 1 - Math.abs((m/100) - (i.diff-1)/2) * 0.5;   // match difficulty to level
    return {i, score: seen*0.6 + fit*40 + Math.random()*8};
  }).sort((a,b)=>b.score-a.score);
  return scored.slice(0,n).map(x=>x.i);
}
function buildSession(S, mode, opts){
  opts=opts||{};
  const n=opts.n||10;
  if(mode==='due'){
    const d=dueList(S);
    return d.slice(0, Math.max(n, Math.min(d.length, 25)));
  }
  if(mode==='skill'){
    return pickItems(S, bySkill[opts.skill]||[], n);
  }
  if(mode==='domain'){
    const ids=window.SKILLS.filter(s=>s.d===opts.domain).map(s=>s.id);
    return pickItems(S, ITEMS.filter(i=>ids.includes(i.sk)), n);
  }
  if(mode==='weak'){
    const w=weakest(S,6).map(x=>x.s.id);
    return pickItems(S, ITEMS.filter(i=>w.includes(i.sk)), n);
  }
  if(mode==='analysis'){
    return pickItems(S, ITEMS.filter(i=>i.diff===3), n);
  }
  if(mode==='exam'){
    /* one item per skill where possible, difficulty-weighted */
    const out=[];
    window.SKILLS.forEach(s=>{
      const p=bySkill[s.id]||[];
      if(p.length) out.push(pickItems(S,p,1)[0]);
    });
    return out.filter(Boolean);
  }
  if(mode==='diagnostic'){
    /* short placement: 2 per domain, mid difficulty, biased to untested skills */
    const out=[];
    window.DOMAINS.forEach(d=>{
      const ids=window.SKILLS.filter(s=>s.d===d.id).map(s=>s.id);
      const p=ITEMS.filter(i=>ids.includes(i.sk) && i.diff>=2);
      out.push(...pickItems(S,p,3));
    });
    return out;
  }
  return pickItems(S, ITEMS, n);   // mixed
}

/* ---------- grading ---------- */
function grade(item, response){
  if(item.type==='mcq') return response===item.ans;
  if(item.type==='multi'){
    if(!Array.isArray(response)) return false;
    const a=[...item.ans].sort().join(','), b=[...response].sort().join(',');
    return a===b;
  }
  if(item.type==='num'){
    const v=parseFloat(response); if(isNaN(v)) return false;
    const [target,tolPct]=item.ans;
    return Math.abs(v-target) <= Math.abs(target)*(tolPct/100) + 1e-9;
  }
  if(item.type==='order'){
    if(!Array.isArray(response)) return false;
    return response.join(',')===item.ans.join(',');
  }
  return null;   // judge items are self-scored
}

/* ---------- recording ---------- */
function submit(S, item, response, conf, ms, selfScore){
  let correct;
  if(item.type==='judge') correct = selfScore>=2;      // 0-3 self score
  else correct = grade(item, response);
  applyResult(S, item, correct);
  const q = correct ? (conf>=0.75?5:4) : (conf>=0.75?1:2);
  scheduleItem(S, item.id, q);
  if(item.type!=='judge') recordCalibration(S, conf, correct);
  S.att.push({t:now(), i:item.id, sk:item.sk, k:correct?1:0, c:conf, ms, d:item.diff});
  if(S.att.length>2000) S.att.splice(0, S.att.length-2000);
  return correct;
}

/* ---------- analytics ---------- */
function accuracyByDay(S, nDays){
  const t=now(), out=[];
  for(let d=nDays-1; d>=0; d--){
    const lo=t-(d+1)*DAY, hi=t-d*DAY;
    const a=S.att.filter(x=>x.t>lo&&x.t<=hi);
    out.push({d, n:a.length, ok:a.reduce((s,x)=>s+x.k,0)});
  }
  return out;
}
function streak(S){
  const set=new Set(S.att.map(x=>Math.floor(x.t/DAY)));
  (S.sess||[]).forEach(s=>set.add(Math.floor(s.t/DAY)));
  let d=Math.floor(now()/DAY), n=0;
  if(!set.has(d)) d--;                       // today not yet practised is fine
  while(set.has(d)){ n++; d--; }
  return n;
}
function domainMastery(S){
  return window.DOMAINS.map(dm=>{
    const sk=window.SKILLS.filter(s=>s.d===dm.id);
    const vals=sk.map(s=>shown(S,s.id));
    const tested=sk.filter(s=>skillState(S,s.id).n>0).length;
    return {...dm, m: vals.reduce((a,b)=>a+b,0)/sk.length, tested, total:sk.length};
  });
}
function overall(S){
  const vals=window.SKILLS.map(s=>shown(S,s.id));
  return vals.reduce((a,b)=>a+b,0)/vals.length;
}
function velocity(S){
  /* Mastery points gained in the last 7 days vs the 7 before.
     The baseline is the last reading at or before the window opens — sampling
     only points inside the window reads zero whenever nothing was logged in it. */
  const t=now();
  const at=(hist,when)=>{
    let v=null;
    for(const p of hist){ if(p.t<=when) v=p.m; else break; }
    return v;
  };
  const gain=(lo,hi)=>{
    let g=0;
    window.SKILLS.forEach(s=>{
      const hs=skillState(S,s.id).hist;
      if(!hs.length) return;
      const start = at(hs,lo);
      const end = at(hs,hi);
      if(end==null) return;
      g += end - (start==null ? 0 : start);
    });
    return g;
  };
  return {now:gain(t-7*DAY,t), prev:gain(t-14*DAY,t-7*DAY)};
}
function timeInvested(S){
  const ms=S.att.reduce((a,x)=>a+(x.ms||0),0);
  const ex=Object.values(S.ex||{}).reduce((a,e)=>a+(e.iters||[]).length*0,0);
  return ms;
}
function recommend(S){
  /* the single next action — what the dashboard leads with */
  const out=[];
  const d=dueList(S).length;
  const untested=window.SKILLS.filter(s=>!skillState(S,s.id).n).length;
  if(untested===window.SKILLS.length)
    out.push({k:'diagnostic', t:'Take the placement check', d:'18 questions across all six domains. It sets your starting profile so everything after it is measured against something.', h:'#/practice/diagnostic'});
  if(d>0)
    out.push({k:'due', t:d+' item'+(d>1?'s':'')+' due for review', d:'Spaced repetition keeps mastery from decaying. This is the shortest useful session you can run.', h:'#/practice/due'});
  const w=weakest(S,3).filter(x=>skillState(S,x.s.id).n>0);
  if(w.length && w[0].m<70)
    out.push({k:'weak', t:'Drill your weakest skills', d:'Currently '+w.map(x=>x.s.n).join(', ')+'.', h:'#/practice/weak'});
  if(untested>0 && untested<window.SKILLS.length)
    out.push({k:'gap', t:untested+' skills still untested', d:'Untested is not the same as weak — you cannot tell which until you measure.', h:'#/skills'});
  const nextEx=readyExercise(S);
  if(nextEx)
    out.push({k:'ex', t:'Exercise: '+nextEx.t, d:nextEx.brief.slice(0,120)+'…', h:'#/exercises#'+nextEx.id});
  return out;
}
function readyExercise(S){
  return window.EXERCISES.find(e=>{
    const st=(S.ex||{})[e.id];
    if(st && st.iters && st.iters.length) return false;
    if(e.needs){ const p=(S.ex||{})[e.needs]; if(!p||!p.iters||!p.iters.length) return false; }
    return true;
  });
}
function exScore(e, iter){
  if(!iter || !iter.r) return null;
  const vals=e.rubric.map((_,i)=>iter.r[i]).filter(v=>typeof v==='number');
  if(!vals.length) return null;
  return Math.round(vals.reduce((a,b)=>a+b,0)/(e.rubric.length*3)*100);
}

return {get ITEMS(){return ITEMS;}, byItem, bySkill, SK, DAY, reinit,
  shown, levelOf, nextBand, skillState, decayFactor,
  buildSession, grade, submit, scheduleItem, srs, dueList, dueForecast,
  calibrationCurve, brier, overconfidence, CONF,
  accuracyByDay, streak, domainMastery, overall, velocity, timeInvested,
  weakest, recommend, readyExercise, exScore};
})();
