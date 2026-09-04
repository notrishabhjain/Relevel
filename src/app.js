/* Engine: routing, rendering, persistence, and the stateful instruments
   (notebook, prediction ledger, red-mark map, glossary drill, system card). */
(function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const $=(s,r)=>(r||document).querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

/* Parts are data, so the numeral has to be computed rather than looked up in a
   list of three. */
const ROMAN=n=>['','I','II','III','IV','V','VI','VII','VIII','IX','X'][n]||String(n);

/* Rebuilt from whatever content was loaded, before the first render. */
let CH=[];
const byId={};
let IDX=null;                     // command palette index, rebuilt with content
function bindContent(){
  CH = window.CHAPTERS ||
       (window.PARTS||[]).reduce((a,p)=>a.concat(window['PART'+p.n]||[]),[]);
  Object.keys(byId).forEach(k=>delete byId[k]);
  CH.forEach(c=>byId[c.id]=c);
  if(window.ENG && window.ENG.reinit) window.ENG.reinit();
  IDX=null;                       // command palette index is content-derived
}
bindContent();
window.BIND_CONTENT=bindContent;

/* ---------------- storage ---------------- */
const KEY='aifz2027';
const defaults=()=>({done:{},notes:{},grades:{},marks:{},later:{},pred:[],card:{},drill:{},
  railmore:false,   // the rest of the instruments, out of the way until wanted
  cp:{},       // inline checkpoint answers: predictions and written activities
  sittings:[],theme:null,lang:null,   // null = English; 'hi' = Hinglish
  /* tracker state */
  sk:{},      // per-skill mastery {m,n,ok,last,hist,peak}
  srs:{},     // per-item schedule {ease,ivl,reps,due,seen}
  att:[],     // attempt log
  cal:[],     // calibration log {t,c,k}
  sess:[],    // session log
  ex:{},      // exercise iterations
  proc:{}     // process runs
});
let S=defaults();
try{const raw=localStorage.getItem(KEY); if(raw)S=Object.assign(S,JSON.parse(raw));}catch(e){}
/* keep last session's state recoverable before this one writes over it */
try{window.SYNC&&window.SYNC.takeSessionBackup();}catch(e){}
let saveT, suspended=false, lastBody=null;
try{ const u=S.updatedAt; delete S.updatedAt; lastBody=JSON.stringify(S); S.updatedAt=u; }catch(e){}
/* After progress is replaced underneath us (import, restore, erase) the page is
   about to reload, and the in-memory copy is stale. Writing it on the way out —
   pagehide fires on reload — would silently undo the replacement. */
function suspend(){suspended=true;clearTimeout(saveT);saveT=null;}
function writeNow(){
  if(suspended)return;
  clearTimeout(saveT); saveT=null;
  /* updatedAt must mark a real change, not merely a write. Navigation and tab
     switches call this too, and bumping the clock on those made an idle device
     look newer than the server — which pushed stale progress over newer work. */
  const keep=S.updatedAt; delete S.updatedAt;
  const body=JSON.stringify(S);
  if(body===lastBody){ S.updatedAt=keep; return; }
  lastBody=body;
  S.updatedAt=Date.now();
  try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){
    /* quota or a browser blocking storage: tell the user rather than losing work silently */
    if(!writeNow._warned){writeNow._warned=true;
      console.warn('Progress could not be saved to this browser.',e);
      const b=document.getElementById('savewarn');
      if(b)b.hidden=false;}
    return;
  }
  if(window.ACCOUNT) window.ACCOUNT.onChange();
  if(window.SYNC){const c=window.SYNC.gh.config();
    if(c.auto&&c.token){clearTimeout(writeNow._push);
      writeNow._push=setTimeout(()=>{window.SYNC.gh.push().catch(()=>{});},20000);}}
}
function save(){clearTimeout(saveT);saveT=setTimeout(writeNow,250);}
/* A debounced write loses the last answer if the tab is closed or navigated
   within the debounce window, so flush on every way out. */
addEventListener('pagehide',()=>{writeNow();
  if(window.ACCOUNT)window.ACCOUNT.flush();
  if(window.SYNC)window.SYNC.pushOnExit();});
addEventListener('online',()=>{if(window.ACCOUNT)window.ACCOUNT.onChange(true);});
addEventListener('beforeunload',writeNow);
addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')writeNow();});
addEventListener('hashchange',writeNow);
/* views.js and engine.js read state through here */
/* Swap state contents in place — views and the engine hold a reference to S,
   so reassigning the binding would leave them pointing at the old object. */
function replace(data){
  const theme=S.theme;
  Object.keys(S).forEach(k=>{delete S[k];});
  Object.assign(S, defaults(), data||{});
  if(theme && !data.theme) S.theme=theme;
  suspended=false;
  const u=S.updatedAt; delete S.updatedAt; lastBody=JSON.stringify(S); S.updatedAt=u;
  try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
}
window.STORE={get S(){return S;}, save, flush:writeNow, suspend, replace, KEY};
function flash(node){if(!node)return;node.classList.add('show');setTimeout(()=>node.classList.remove('show'),1400);}

/* ---------------- language ----------------

   The course is written in English. It can also be read in Hinglish — the
   English-Hindi mix people in Indian offices actually speak — because a
   familiar register lowers the effort of reading, and effort spent on the
   sentence is effort not spent on the idea.

   It is a lookup on the English string rather than a second copy of the
   curriculum: a line with no translation yet renders in English, so coverage
   can grow one paragraph at a time and nothing is ever missing from the page.
   Industry terms — token, prompt, retrieval, eval, latency — are deliberately
   left in English inside the translations. They are what the rest of the
   industry says, and translating them would teach a vocabulary nobody else
   uses. */
let Thit=0, Tmiss=0;
function T(s){
  if(S.lang!=='hi'||s==null)return s;
  const v=(window.HING||{})[String(s).trim()];
  if(v===undefined){ Tmiss++; return s; }
  Thit++; return v;
}
function Tl(list){ return (list||[]).map(T); }
window.T=T;

/* ---------------- block renderer ---------------- */
function blocks(list){
  const f=document.createDocumentFragment();
  (list||[]).forEach(b=>{
    const [k,...r]=b;
    if(k==='p')f.appendChild(h('p',{html:T(r[0])}));
    else if(k==='key')f.appendChild(h('div',{class:'keyline',html:T(r[0])}));
    else if(k==='c')f.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:T(r[0])}),h('p',{html:T(r[1])})]));
    else if(k==='l')f.appendChild(h('ul',{class:'bul'},Tl(r[0]).map(i=>h('li',{html:i}))));
    else if(k==='n')f.appendChild(h('ol',{class:'num'},Tl(r[0]).map(i=>h('li',{html:i}))));
    else if(k==='code')f.appendChild(h('pre',{},h('code',{text:r[0]})));
    else if(k==='x')f.appendChild(h('div',{class:'expect'},[h('div',{class:'tag',text:'expect'}),h('div',{html:T(r[0])})]));
    else if(k==='tb'){
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},Tl(r[0]).map(c=>h('th',{html:c})))));
      t.appendChild(h('tbody',{},r[1].map(row=>h('tr',{},Tl(row).map(c=>h('td',{html:c}))))));
      f.appendChild(h('div',{class:'tblwrap'},t));
    }
    /* The interactive blocks. A paragraph can teach a thing; only one of these
       can tell you whether you took it. They sit inline, where the idea was
       just explained, rather than being saved up for the end of the chapter. */
    else if(k==='q')f.appendChild(cpQuestion(r.flat()));
    else if(k==='pred')f.appendChild(cpPredict(r[0]));
    else if(k==='try')f.appendChild(cpTry(r[0]));
    else if(k==='lab'){const b=r[0]==='redmap'?redMapBlock():labBlock(r[0]); if(b)f.appendChild(b);}
  });
  return f;
}

/* ---------------- never a dead end ----------------

   The single most common moment a reader gives up is meeting a word they do not
   know and having nowhere to go with it. So the first time a chapter uses a
   term that is defined anywhere in this book, the word itself becomes tappable:
   a plain-language definition appears in place, with the chapter that teaches it
   properly. Forward references are marked as such rather than hidden, because
   "you will build this in Chapter 7" is itself an answer — it tells you that not
   knowing it yet is expected rather than a gap in you. */

let TERMS=null;
function termIndex(){
  if(TERMS) return TERMS;
  const map=new Map();
  const add=(raw,def,ch)=>{
    /* "Model / LLM" and "Top-k (k)" name the same idea more than one way */
    String(raw).split(/\s*\/\s*/).forEach(part=>{
      const forms=[part.replace(/\s*\([^)]*\)\s*/g,' ').trim()];
      const paren=part.match(/\(([^)]+)\)/);
      if(paren) forms.push(paren[1].trim());
      forms.filter(f=>f.length>2).forEach(f=>{
        const k=f.toLowerCase();
        if(!map.has(k)) map.set(k,{term:f,def,ch});
      });
    });
  };
  (window.GLOSSARY||[]).forEach(([t,d,ch])=>add(t,d,ch));
  /* a chapter's own vocabulary list covers anything the glossary misses */
  (window.CHAPTERS||[]).forEach(c=>(c.words||[]).forEach(([t,d])=>{
    if(!map.has(String(t).toLowerCase())) add(t,d,c.num);
  }));
  TERMS=[...map.values()].sort((a,b)=>b.term.length-a.term.length);
  return TERMS;
}

let popEl=null;
function closeTerm(){ if(popEl){popEl.remove();popEl=null;} }
document.addEventListener('click',e=>{ if(popEl && !popEl.contains(e.target) && !e.target.closest('.term')) closeTerm(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeTerm(); });

function openTerm(btn,entry,here){
  closeTerm();
  const ahead = entry.ch && here && entry.ch > here;
  popEl=h('div',{class:'termpop'},[
    h('div',{class:'termhead'},[
      h('strong',{text:entry.term}),
      entry.ch?h('a',{class:'termch',href:'#/ch/ch'+entry.ch,
        text:(ahead?'you build this in ':'explained in ')+'Chapter '+entry.ch}):null]),
    h('p',{html:T(entry.def)}),
    ahead?h('p',{class:'termahead',
      text:'You are not meant to know this yet. Carry the one-line version and keep going.'}):null,
    h('button',{class:'sm',onclick:closeTerm},'Got it')]);
  btn.appendChild(popEl);
  /* keep it on screen on a narrow phone */
  const r=popEl.getBoundingClientRect();
  if(r.right>innerWidth-8) popEl.style.left=Math.max(8-btn.getBoundingClientRect().left,-r.width+60)+'px';
}

const SKIP_TERMS=new Set(['PRE','CODE','BUTTON','A','TEXTAREA','INPUT','DT','SUMMARY']);
/* Enough marks that nothing goes unexplained, few enough that a paragraph still
   reads as prose rather than as a field of links. */
const PER_BLOCK=4;
/* `seen` is shared across a whole chapter, so a term is marked once — enough to
   be discoverable, not so often the page looks like a minefield. */
function markTerms(root, seen, here){
  const terms=termIndex();
  if(!terms.length) return root;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
    acceptNode(n){
      if(!n.nodeValue||n.nodeValue.length<3) return NodeFilter.FILTER_REJECT;
      for(let p=n.parentNode;p&&p!==root;p=p.parentNode)
        if(SKIP_TERMS.has(p.nodeName)||(p.classList&&p.classList.contains('noterm')))
          return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }});
  const targets=[];
  while(walker.nextNode()) targets.push(walker.currentNode);
  const esc=t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const button=(entry,word)=>{
    const btn=h('button',{class:'term',type:'button',title:'What does this mean?',
      onclick:e=>{e.stopPropagation();
        if(btn.querySelector('.termpop')) closeTerm(); else openTerm(btn,entry,here);}},word);
    return btn;
  };
  targets.forEach(node=>{
    const text=node.nodeValue;
    const marks=[];
    for(const entry of terms){
      if(marks.length>=PER_BLOCK) break;
      const k=entry.term.toLowerCase();
      if(seen.has(k)) continue;
      /* Prose says "tokens" and "chunks"; the glossary lists the singular. */
      const plural=entry.term.length>3&&!/s$/i.test(entry.term)?'s?':'';
      const m=new RegExp('\\b'+esc(entry.term)+plural+'\\b','i').exec(text);
      if(!m) continue;
      const start=m.index, end=start+m[0].length;
      /* terms are sorted longest first, so a longer phrase claims its span
         before a word inside it can */
      if(marks.some(x=>start<x.end&&end>x.start)) continue;
      marks.push({start,end,entry,word:m[0]});
      seen.add(k);
    }
    if(!marks.length) return;
    marks.sort((a,b)=>a.start-b.start);
    const frag=document.createDocumentFragment();
    let pos=0;
    marks.forEach(mk=>{
      if(mk.start>pos) frag.appendChild(document.createTextNode(text.slice(pos,mk.start)));
      frag.appendChild(button(mk.entry,mk.word));
      pos=mk.end;
    });
    if(pos<text.length) frag.appendChild(document.createTextNode(text.slice(pos)));
    node.parentNode.replaceChild(frag,node);
  });
  return root;
}

/* ---------------- inline checkpoints ---------------- */
function lastAttempt(id){
  for(let i=S.att.length-1;i>=0;i--) if(S.att[i].i===id) return S.att[i];
  return null;
}
function cpHead(kind, note){
  return h('div',{class:'cphead'},[h('span',{class:'cpk',text:kind}),
    note?h('span',{class:'cpn',text:note}):null]);
}

/* A real question from the bank, asked here. Same engine as a drill: it moves
   mastery, schedules its own review, and records how sure you were. */
function cpQuestion(ids){
  const box=h('div',{class:'cp'});
  box.appendChild(cpHead('checkpoint', ids.length>1?ids.length+' questions':'counts towards your mastery'));
  ids.forEach(id=>box.appendChild(qSlot(id)));
  return box;
}
function qSlot(id){
  const slot=h('div',{class:'qslot'});
  function draw(force){
    slot.innerHTML='';
    const it=window.ENG&&window.ENG.byItem[id];
    if(!it){slot.appendChild(h('p',{class:'dim',text:'Question '+id+' is not in the bank.'}));return;}
    const shown=force?null:S.cp['shown:'+id];
    if(shown && !lastAttempt(id)){
      slot.appendChild(h('div',{class:'qdone'},[
        h('div',{class:'qparked'},[
          h('span',{class:'pill',text:shown.skipped?'parked for later':'answer shown'}),
          h('span',{text:shown.skipped
            ? 'You set this aside. It is not a gap in your record — it will come back.'
            : 'Shown rather than answered, so nothing was scored against you.'})]),
        h('div',{class:'qstem qsm',html:it.stem}),
        shown.skipped?null:h('div',{class:'why'},[
          h('span',{class:'lbl',text:it.type==='judge'?'Model answer':'Why'}),
          h('p',{html:it.type==='judge'?it.ans:(it.why||'')})]),
        h('button',{class:'sm',onclick:()=>{delete S.cp['shown:'+id];save();draw(true);
          updateProgress();refreshCpBars();}},'Try it properly now')]));
      return;
    }
    const a=force?null:lastAttempt(id);
    if(a){
      slot.appendChild(h('div',{class:'qdone'},[
        h('div',{class:'qmeta'},[
          h('span',{class:'pill '+(a.k?'ok':'red'),text:a.k?'answered · correct':'answered · missed'}),
          h('span',{class:'dim',style:'font-size:.75rem',text:relTime(a.t)})]),
        h('div',{class:'qstem qsm',html:it.stem}),
        h('div',{class:'why'},[h('span',{class:'lbl',text:it.type==='judge'?'Model answer':'Why'}),
          h('p',{html:it.type==='judge'?it.ans:(it.why||'')})]),
        h('button',{class:'sm',onclick:()=>draw(true)},'Ask me again')]));
      return;
    }
    const card=window.VIEWS.questionCard(it,{inline:true,
      onSettled:()=>{updateProgress();refreshCpBars();}});
    slot.appendChild(card);
    /* The way out that is not the close button.

       Being stuck on a question is the moment people leave, and the only thing
       that reliably prevents it is somewhere else to go that is still inside
       the app. Neither of these is scored: being shown a worked answer is not
       the same as claiming you knew it, so mastery is untouched and the
       question comes back later, which is what you would want anyway. */
    const stuck=h('div',{class:'stuck'},[h('span',{class:'stucklbl',text:'Stuck?'})]);
    const note=h('p',{class:'stucknote'});
    stuck.append(
      h('button',{class:'sm',onclick:()=>{
        S.cp['shown:'+id]={v:'shown',at:Date.now()};
        if(window.ENG.scheduleItem) window.ENG.scheduleItem(S,id,2);   // resurface soon
        save();
        card.querySelectorAll('button,input,textarea').forEach(x=>x.disabled=true);
        card.appendChild(h('div',{class:'why'},[
          h('span',{class:'lbl',text:it.type==='judge'?'Model answer':'The answer, and why'}),
          h('p',{html:it.type==='judge'?it.ans:(it.why||'')})]));
        stuck.querySelectorAll('button').forEach(b=>b.remove());
        note.textContent='Shown, not scored — your mastery is untouched. It will come back in a day or two, and you will probably have it then.';
        updateProgress(); refreshCpBars();
      }},'Show me the answer'),
      h('button',{class:'sm',onclick:()=>{
        S.cp['shown:'+id]={v:'parked',skipped:true,at:Date.now()};
        save(); draw();
        updateProgress(); refreshCpBars();
      }},'Park it and move on'),
      note);
    slot.appendChild(stuck);
  }
  draw();
  return slot;
}

/* Predict, then look. Writing a number down before you see the answer is what
   turns reading into a measurement of your own intuition — and the gap between
   the two is the thing worth knowing. */
function cpPredict(o){
  const box=h('div',{class:'cp cp-pred'});
  function draw(){
    box.innerHTML='';
    box.appendChild(cpHead('predict','commit before you look'));
    box.appendChild(h('div',{class:'prose cpq',html:T(o.ask)}));
    const cur=S.cp[o.id];
    if(cur&&cur.v!=null){
      box.appendChild(h('div',{class:'cpans'},[
        h('span',{class:'lbl',text:'You predicted'}),h('p',{text:cur.v})]));
      box.appendChild(h('div',{class:'why'},[
        h('span',{class:'lbl',text:'What actually happens'}),h('p',{html:T(o.reveal)})]));
      if(o.then)box.appendChild(h('p',{class:'prose cpthen',html:T(o.then)}));
      box.appendChild(h('button',{class:'sm',onclick:()=>{delete S.cp[o.id];save();draw();refreshCpBars();}},
        'Predict again'));
      return;
    }
    const inp=o.short
      ? h('input',{type:'text',placeholder:T(o.ph)||'Your prediction'})
      : h('textarea',{rows:3,placeholder:T(o.ph)||'Your prediction — one line is enough'});
    const go=h('button',{class:'primary',disabled:'true',onclick:()=>{
      S.cp[o.id]={v:inp.value.trim(),at:Date.now()};save();draw();updateProgress();refreshCpBars();}},
      'Commit prediction');
    inp.addEventListener('input',()=>{go.disabled=inp.value.trim().length<1;});
    box.append(inp,go);
  }
  draw();
  return box;
}

/* A small piece of work, done here, kept. Not graded — the point is that you
   produced something rather than recognised something. */
function cpTry(o){
  const box=h('div',{class:'cp cp-try'});
  function draw(){
    box.innerHTML='';
    box.appendChild(cpHead('your turn', o.mins?('~'+o.mins+' min'):null));
    box.appendChild(h('div',{class:'prose cpq',html:T(o.task)}));
    const cur=S.cp[o.id]||{};
    const ta=h('textarea',{rows:o.rows||4,placeholder:T(o.ph)||'Write it here'});
    ta.value=cur.v||'';
    const saved=h('span',{class:'saved',text:'saved'});
    let t=null;
    ta.addEventListener('input',()=>{
      clearTimeout(t);
      t=setTimeout(()=>{S.cp[o.id]={v:ta.value,at:Date.now()};save();flash(saved);
        gate();updateProgress();refreshCpBars();},400);
    });
    box.appendChild(ta);
    const row=h('div',{class:'cprow'});
    const rev=h('button',{class:'sm',onclick:()=>{
      rev.remove();
      box.appendChild(h('div',{class:'why'},[
        h('span',{class:'lbl',text:'What a strong answer contains'}),h('p',{html:T(o.after)})]));
    }},'Show what a strong answer contains');
    function gate(){
      const enough=(ta.value||'').trim().length>=(o.min||15);
      rev.disabled=!enough;
      rev.title=enough?'':'Write your own answer first — that is the whole exercise.';
    }
    if(o.after){row.appendChild(rev);gate();}
    row.appendChild(saved);
    box.appendChild(row);
  }
  draw();
  return box;
}

function relTime(t){
  const s=Math.floor((Date.now()-t)/1000);
  if(s<3600)return Math.max(1,Math.floor(s/60))+' min ago';
  if(s<86400)return Math.floor(s/3600)+' h ago';
  return Math.floor(s/86400)+' d ago';
}

/* Every interactive block in a chapter, and how many are behind you. */
function cpWalk(c){
  const out=[];
  const scan=list=>(list||[]).forEach(b=>{
    if(!Array.isArray(b))return;
    if(b[0]==='q')b.slice(1).flat().forEach(id=>out.push({k:'q',id}));
    else if(b[0]==='pred'||b[0]==='try')out.push({k:b[0],id:b[1].id});
  });
  scan(c.story);
  (c.handson||[]).forEach(st=>scan(st.b));
  return out;
}
function cpProgress(c){
  const all=cpWalk(c);
  const done=all.filter(x=>x.k==='q'
    ? (!!lastAttempt(x.id) || !!S.cp['shown:'+x.id])
    : !!(S.cp[x.id]&&String(S.cp[x.id].v||'').trim())).length;
  return {total:all.length, done};
}
let cpBars=[];
function refreshCpBars(){ cpBars.forEach(f=>{try{f();}catch(e){}}); }

function labBlock(key){
  const L=(window.LABS||{})[key]; if(!L)return null;
  const body=h('div',{class:'labbody'});
  const box=h('div',{class:'lab'},[
    h('div',{class:'labhead'},[h('span',{class:'k',text:L.k||'lab'}),h('h4',{text:T(L.title)})]),body]);
  try{L.render(body);}catch(e){body.appendChild(h('p',{class:'dim',text:'Lab unavailable.'}));}
  if(L.note)body.appendChild(h('p',{class:'labnote',html:T(L.note)}));
  return box;
}

/* ---------------- chapter page ---------------- */
function sectionHead(idx,title,time){
  return h('div',{class:'parthead'},[h('span',{class:'idx',text:idx}),h('h2',{text:T(title)}),
    time?h('span',{class:'t',text:time}):null]);
}

function renderChapter(c){
  const w=h('div',{class:'wrap'});
  const part=window.PARTS[c.part-1];
  cpBars=[];                       // stale refreshers from the last chapter
  w.appendChild(h('header',{class:'chead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Part '+ROMAN(c.part)+' · '+T(part.title)}),
      h('span',{class:'dot'}),h('span',{text:'~'+c.minutes+' min'}),
      h('span',{class:'dot'}),h('span',{text:'one sitting'})]),
    h('div',{class:'chnum',text:String(c.num).padStart(2,'0')}),
    h('h1',{text:T(c.title)}),
    h('p',{class:'concept',text:T(c.concept)})]));

  /* What this chapter stands on.

     A word you do not know announces itself; a concept you missed three
     chapters ago does not — the sentence still parses, so you read on and
     understand a little less each paragraph until the whole thing feels like it
     was written for somebody else. Naming the load-bearing ideas up front makes
     losing the thread visible, and going back a normal move rather than an
     admission. */
  /* The declared prerequisites are the two or three ideas you genuinely cannot
     proceed without — a curated list, because a wall of ten is its own way of
     losing someone. But a chapter also mentions others in passing, and a
     reader who does not recognise one of those has the same problem in a
     smaller size. So the rest are derived from the prose itself, every render:
     nothing to maintain, and it cannot drift from what the chapter actually
     says. */
  const alsoRefs=(()=>{
    const declared=new Set((c.needs||[]).map(n=>n[2]));
    const text=[];
    const push=b=>{ if(!Array.isArray(b))return; const [k,...r]=b;
      if(k==='p'||k==='key'||k==='x')text.push(String(r[0]||''));
      else if(k==='l'||k==='n')text.push((r[0]||[]).join(' '));
      else if(k==='c')text.push(String(r[1]||''));
      else if(k==='pred')text.push([r[0].ask,r[0].reveal,r[0].then].filter(Boolean).join(' '));
      else if(k==='try')text.push([r[0].task,r[0].after].filter(Boolean).join(' ')); };
    (c.story||[]).forEach(push);
    (c.handson||[]).forEach(st=>(st.b||[]).forEach(push));
    const joined=text.join(' ').replace(/<[^>]+>/g,' ');
    const found=new Set();
    const re=/Chapters?\s*\.?\s*\d+(?:\s*(?:,|and|to|–|-)\s*\d+)*/gi;
    let m;
    while((m=re.exec(joined))!==null)
      (m[0].match(/\d+/g)||[]).forEach(n=>{const v=+n;
        if(v<c.num && !declared.has(v) && byId['ch'+v]) found.add(v);});
    return [...found].sort((a,b)=>a-b);
  })();

  if((c.needs||[]).length||alsoRefs.length){
    const nd=h('section',{class:'needs'});
    nd.appendChild(h('div',{class:'needshead'},[
      h('span',{class:'cplbl',text:'This chapter stands on'}),
      h('span',{class:'dim',style:'font-size:.78rem',
        text:'if any of these are blank, go back first — that is the fast route, not the slow one'})]));
    if((c.needs||[]).length)
      nd.appendChild(h('ul',{class:'needlist'},c.needs.map(([what,why,ch])=>
        h('li',{},[
          h('div',{},[h('strong',{text:T(what)}),
            h('span',{class:'needwhy',text:' — '+T(why)})]),
          h('a',{class:'chip',href:'#/ch/ch'+ch,text:'Chapter '+ch+' →'})]))));
    if(alsoRefs.length){
      const row=h('div',{class:'alsoref'},[
        h('span',{class:'needwhy',text:'It also refers back to '})]);
      alsoRefs.forEach((n,i)=>{
        row.appendChild(h('a',{href:'#/ch/ch'+n,text:'Chapter '+n}));
        if(i<alsoRefs.length-2) row.appendChild(document.createTextNode(', '));
        else if(i===alsoRefs.length-2) row.appendChild(document.createTextNode(' and '));
      });
      row.appendChild(document.createTextNode('. Any of those a blank? Open it in a second tab rather than pushing on.'));
      nd.appendChild(row);
    }
    w.appendChild(nd);
  }

  /* A chapter is not a thing you read to the end of; it is a thing you answer
     your way through. This says how far through the answering you are. */
  const cpStrip=h('div',{class:'cpstrip'});
  const drawStrip=()=>{
    const {total,done}=cpProgress(c);
    cpStrip.innerHTML='';
    if(!total){cpStrip.hidden=true;return;}
    cpStrip.hidden=false;
    cpStrip.append(
      h('span',{class:'cplbl',text:'Checkpoints'}),
      h('span',{class:'bar',style:'flex:1;max-width:220px'},
        [h('i',{style:'width:'+Math.round(done/total*100)+'%'})]),
      h('span',{class:'cpcount mono',text:done+' / '+total}),
      h('span',{class:'dim',style:'font-size:.78rem',
        text:done>=total?'all done — the questions still come back for review'
          :'answer them as you meet them, not at the end'}));
  };
  drawStrip(); cpBars.push(drawStrip);
  w.appendChild(cpStrip);

  let n=1;
  // Story
  const story=h('section',{class:'part',id:'story'});
  /* A chapter with nothing but its reading is one flow, so it gets no section
     headings to navigate between — there is only one place to be. */
  const plain=!((c.words||[]).length||(c.wrong||[]).length||(c.homework||[]).length
    ||(c.check||[]).length);
  if(!plain) story.appendChild(sectionHead(c.num+'.'+n++,'The Story'));
  const seenTerms=new Set();
  story.appendChild(markTerms(h('div',{class:'prose'},[blocks(c.story)]),seenTerms,c.num));
  w.appendChild(story);

  // Words
  if((c.words||[]).length){
  const words=h('section',{class:'part',id:'words'});
  words.appendChild(sectionHead(c.num+'.'+n++,'Words You Now Own'));
  words.appendChild(h('dl',{class:'words noterm'},c.words.map(([t,d])=>
    h('div',{class:'word'},[h('dt',{text:t}),h('dd',{html:d})]))));
  w.appendChild(words);
  }

  // Hands-on
  /* The labs run here, in the page, needing nothing. The notebook work needs a
     Colab account, an API key and knowing what a cell is — none of which this
     course hands you, and all of which used to sit under a heading that read
     like the main event. It is a genuine extra, and now says so. */
  /* A lab placed inline in the reading must not appear a second time in its own
     section — the same tool twice on one page reads as a mistake, and is. */
  const inlineLabs=new Set();
  const scanLabs=list=>(list||[]).forEach(b=>{ if(Array.isArray(b)&&b[0]==='lab') inlineLabs.add(b[1]); });
  scanLabs(c.story);
  (c.handson||[]).forEach(st=>scanLabs(st.b));
  const spareLabs=(c.labs||[]).filter(k=>!inlineLabs.has(k));
  if(spareLabs.length){
    const lb=h('section',{class:'part',id:'tools'});
    lb.appendChild(sectionHead(c.num+'.'+n++,'Try it yourself'));
    spareLabs.forEach(k=>{const b=k==='redmap'?redMapBlock():labBlock(k);if(b)lb.appendChild(b);});
    w.appendChild(lb);
  }
  if((c.handson||[]).length){
  const ho=h('section',{class:'part',id:'handson'});
  ho.appendChild(sectionHead(c.num+'.'+n++,'Optional — the same thing in real code'));
  ho.appendChild(h('div',{class:'callout'},[
    h('span',{class:'lbl',text:'You can skip all of this'}),
    h('p',{html:'Everything this chapter teaches is above, and the checkpoints have already measured it. '+
      'What follows writes the same ideas as a few lines of Python, which some people find makes it stick. '+
      'It needs a free Google Colab account and an API key — about twenty minutes, once, from the '+
      '<a href="#/setup">setup page</a>. If you do not want to, skip to the next chapter. Nothing later depends on it.'})]));
  c.handson.forEach(s=>{
    const st=h('div',{class:'step'},[h('h3',{text:T(s.h)})]);
    st.appendChild(markTerms(h('div',{class:'prose'},[blocks(s.b)]),seenTerms,c.num));
    ho.appendChild(st);
  });
  w.appendChild(ho);
  }

  // If something goes wrong
  if(c.wrong&&c.wrong.length){
    const sw=h('section',{class:'part',id:'wrong'});
    sw.appendChild(sectionHead(c.num+'.'+n++,'If Something Goes Wrong'));
    const t=h('table');
    t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'What you see'}),
      h('th',{text:'Most likely cause'}),h('th',{text:'Fix'})])));
    t.appendChild(h('tbody',{},c.wrong.map(r=>h('tr',{},Tl(r).map(x=>h('td',{html:x}))))));
    sw.appendChild(h('div',{class:'tblwrap'},t));
    w.appendChild(sw);
  }

  // Homework
  if((c.homework||[]).length){
  const hw=h('section',{class:'part',id:'homework'});
  hw.appendChild(sectionHead(c.num+'.'+n++,'Homework'));
  hw.appendChild(h('div',{class:'cards'},c.homework.map(([t,d])=>
    h('div',{class:'card'},[h('h3',{text:T(t)}),h('p',{html:T(d)})]))));
  hw.appendChild(notebookBlock(c,'hw','Homework notes — rough, five bullets maximum',
    'The Rough-Notes Law applies. If it looks presentable it cost too much.'));
  w.appendChild(hw);
  }

  // Check yourself
  if((c.check||[]).length){
  const cy=h('section',{class:'part',id:'check'});
  cy.appendChild(sectionHead(c.num+'.'+n++,'Check Yourself'));
  cy.appendChild(h('p',{class:'dim',style:'font-size:.87rem;margin:0 0 1rem',
    text:'Answer aloud before opening. Grade yourself honestly — this is private and nothing is reported anywhere.'}));
  c.check.forEach((qa,i)=>{
    const gk=c.id+':'+i;
    const gwrap=h('div',{class:'grade'});
    const mk=(lbl,val,cls)=>{
      const b=h('button',{class:'sm '+cls+(S.grades[gk]===val?' on':''),text:lbl,
        onclick:()=>{S.grades[gk]=S.grades[gk]===val?null:val;save();
          [...gwrap.querySelectorAll('button')].forEach(x=>x.classList.remove('on'));
          if(S.grades[gk])b.classList.add('on');updateProgress();}});
      return b;};
    gwrap.append(h('span',{text:'self-grade'}),mk('Got it','y',''),mk('Shaky','m',''),mk('Missed','n','red'));
    cy.appendChild(h('details',{class:'qa'},[
      h('summary',{text:T(qa[0])}),h('div',{class:'ans',html:T(qa[1])}),gwrap]));
  });
  w.appendChild(cy);
  }

  // Close the sitting
  const cs=h('section',{class:'part',id:'close'});
  if(!plain){
    cs.appendChild(sectionHead(c.num+'.'+n++,'Close the Sitting'));
    cs.appendChild(h('p',{class:'prose',html:'Three rough lines, then stop — even if you feel like continuing. <em>Especially</em> if you feel like continuing. That leftover energy is what brings you back next sitting.'}));
    cs.appendChild(notebookBlock(c,'close','Three lines: what confused me / what clicked / what to try next',
      'Three minutes. Then close it.'));
  }

  if((c.takeaway||[]).length){
    cs.appendChild(h('div',{class:'takeaway'},[
      h('span',{class:'cplbl',text:'You can now'}),
      h('ul',{class:'plain'},c.takeaway.map(t=>h('li',{html:T(t)})))]));
  }
  const doneRow=h('div',{style:'display:flex;gap:.6rem;align-items:center;margin-top:1.2rem;flex-wrap:wrap'});
  const db=h('button',{class:'primary',onclick:()=>{
    S.done[c.id]=!S.done[c.id];
    if(S.done[c.id])S.sittings.push({ch:c.id,at:Date.now()});
    save();updateProgress();renderRail();
    db.textContent=S.done[c.id]?'✓ Chapter complete':'Mark chapter complete';
    db.classList.toggle('on',!!S.done[c.id]);
    guard.innerHTML=sittingGuard();
  }},S.done[c.id]?'✓ Chapter complete':'Mark chapter complete');
  if(S.done[c.id])db.classList.add('on');
  const next=CH[CH.indexOf(c)+1];
  doneRow.append(db);
  if(next)doneRow.appendChild(h('a',{class:'chip',href:'#/ch/'+next.id,
    text:'Next: '+next.num+'. '+T(next.title)+' →'}));
  cs.appendChild(doneRow);
  const guard=h('div',{style:'margin-top:.8rem',html:sittingGuard()});
  cs.appendChild(guard);
  w.appendChild(cs);

  w.appendChild(h('div',{class:'foot'},[
    CH[CH.indexOf(c)-1]?h('a',{href:'#/ch/'+CH[CH.indexOf(c)-1].id,
      text:'← '+CH[CH.indexOf(c)-1].num+'. '+T(CH[CH.indexOf(c)-1].title)}):h('span'),
    next?h('a',{href:'#/ch/'+next.id,text:next.num+'. '+T(next.title)+' →'}):h('span')]));
  return w;
}

function sittingGuard(){
  const today=S.sittings.filter(s=>Date.now()-s.at<10*3600*1000).length;
  if(today>=2)return '<div class="callout" style="border-left-color:var(--red)"><span class="lbl">Standing rule one</span><p>That is '+today+' chapters in one sitting. The rule exists because the energy you spend tonight is the energy that brings you back next time. Stop here.</p></div>';
  if(today===1)return '<p class="dim" style="font-size:.85rem">One chapter done this sitting. The rule says stop — come back tomorrow.</p>';
  return '';
}

/* ---------------- notebook field ---------------- */
function notebookBlock(c,kind,label,hint){
  const k=c.id+':'+kind;
  const ta=h('textarea',{rows:kind==='close'?3:5,placeholder:hint||''},S.notes[k]||'');
  const saved=h('span',{class:'saved',text:'saved'});
  ta.addEventListener('input',()=>{S.notes[k]=ta.value;save();flash(saved);updateProgress();});
  return h('div',{class:'nbentry',style:'margin-top:1.2rem'},[
    h('h3',{},[document.createTextNode(label),saved]),ta]);
}

/* ---------------- red-mark map ---------------- */
function redMapBlock(){
  const box=h('div',{class:'lab'});
  box.appendChild(h('div',{class:'labhead'},[h('span',{class:'k',text:'the credential'}),
    h('h4',{text:'Red-Mark Map'})]));
  const body=h('div',{class:'labbody'});
  const pipe=h('div',{class:'pipe'});
  const marks=h('div',{class:'marks'});
  const summary=h('div');
  let filter=null;
  function counts(){const m={};window.REDMARKS.forEach(r=>{
    if(S.marks[r.id])m[r.node]=(m[r.node]||0)+1;});return m;}
  function drawPipe(){
    const cnt=counts(); pipe.innerHTML='';
    window.PIPELINE.forEach(nd=>{
      const el=h('div',{class:'pnode'+(filter===nd.id?' sel':''),onclick:()=>{
        filter=filter===nd.id?null:nd.id;drawPipe();drawMarks();}},[
        h('span',{class:'pl',text:nd.label}),h('span',{class:'ps',text:nd.sub}),
        h('span',{class:'pc',text:'Ch '+nd.ch})]);
      if(cnt[nd.id])el.appendChild(h('span',{class:'badge',text:String(cnt[nd.id])}));
      pipe.appendChild(el);
    });
  }
  function drawMarks(){
    marks.innerHTML='';
    const list=window.REDMARKS.filter(r=>!filter||r.node===filter);
    list.forEach(r=>{
      const cb=h('input',{type:'checkbox'});
      cb.checked=!!S.marks[r.id];
      cb.addEventListener('change',()=>{S.marks[r.id]=cb.checked?1:0;save();
        drawPipe();drawMarks();updateProgress();});
      marks.appendChild(h('div',{class:'mark'+(S.marks[r.id]?' got':'')},[
        cb,h('span',{class:'mc',text:'Ch '+r.ch}),h('span',{class:'mt',text:r.t})]));
    });
    const got=window.REDMARKS.filter(r=>S.marks[r.id]).length;
    summary.innerHTML='';
    summary.appendChild(h('div',{class:'stats'},[
      h('div',{class:'stat'},[h('span',{class:'l',text:'marked from memory'}),
        h('span',{class:'v '+(got>=20?'ok':got>=6?'':'red'),text:got+' / '+window.REDMARKS.length}),
        h('span',{class:'s',text:got>=20?'architect':got>=6?'passing — Ch.7 threshold':'below the Ch.7 threshold of six'})])]));
  }
  body.append(h('p',{style:'font-size:.87rem;color:var(--ink-2);margin:0 0 .9rem;line-height:1.55'},
    'Draw the pipeline on paper first, from memory, and mark where you have personally watched it fail. Only then tick them here. Click a stage to filter.'),
    h('div',{class:'mapwrap'},pipe),summary,marks);
  box.appendChild(body);
  box.appendChild(h('div',{class:'labbody',style:'padding-top:0'},
    h('p',{class:'labnote',html:'Anyone can draw the boxes. <strong>The red ink is the credential</strong> — every mark should have an evidence line in your notebook: <em>saw it, Chapter X, my document, my numbers.</em>'})));
  drawPipe();drawMarks();
  return box;
}

/* ---------------- pages ---------------- */
function pageHome(){
  const w=h('div',{class:'wrap-wide'});
  const doneN=CH.filter(c=>S.done[c.id]).length;
  w.appendChild(h('header',{class:'hero'},[
    h('div',{class:'kicker',text:'Reference library · '+CH.length+' chapters'}),
    h('h1',{text:'The Library'}),
    h('p',{class:'sub',html:'The knowledge base behind the tracker. You do not read it front to back — the dashboard sends you to the chapter that moves the skill you are weakest in.'}),
    h('div',{style:'display:flex;gap:.6rem;flex-wrap:wrap'},[
      h('a',{class:'chip',href:'#/',style:'padding:.5rem .9rem'},'← Dashboard'),
      h('a',{class:'chip',href:'#/setup',style:'padding:.5rem .9rem'},'Setup (once, 45 min)'),
      h('a',{class:'chip',href:'#/ch/'+(CH.find(c=>!S.done[c.id])||CH[0]).id,style:'padding:.5rem .9rem'},
        doneN?'Continue reading':'Chapter 1')])]));

  w.appendChild(h('div',{class:'meta'},[
    h('div',{},[h('span',{class:'l',text:'For'}),h('span',{class:'v',text:'Product managers, analysts, consultants, team leads'})]),
    h('div',{},[h('span',{class:'l',text:'Length'}),h('span',{class:'v',text:CH.length+' chapters · one per sitting'})]),
    h('div',{},[h('span',{class:'l',text:'Prerequisites'}),h('span',{class:'v',text:'A browser, a Google account, a willingness to type'})]),
    h('div',{},[h('span',{class:'l',text:'Cost'}),h('span',{class:'v',text:'None — free tiers throughout'})])]));

  w.appendChild(h('div',{class:'prose',style:'max-width:66ch'},[blocks([
    ['p','This book has one purpose: getting you to the point where you can hold a credible, evidence-based conversation about AI systems — not by reading about them, but by building one yourself, then breaking it on purpose and writing down what happened.'],
    ['p','Parts I and II build and then interrogate a document-answering system. Part III is the half most curricula omit entirely: what it costs, how you prove it works, what paperwork it ships with, and what happens when your provider retires the model underneath you.'],
    ['key','Vocabulary acquired before experience becomes jargon — words you can recognize but cannot defend. Vocabulary acquired after experience becomes testimony.']
  ])]));

  window.PARTS.forEach(p=>{
    const chs=CH.filter(c=>c.part===p.n);
    w.appendChild(h('div',{class:'partcard'},[
      h('div',{class:'pn',text:'Part '+ROMAN(p.n)+' — Chapters '+chs[0].num+'–'+chs[chs.length-1].num}),
      h('h3',{text:T(p.title)}),h('p',{text:T(p.blurb)}),
      h('div',{class:'chips'},chs.map(c=>h('a',{class:'chip'+(S.done[c.id]?' done':''),
        href:'#/ch/'+c.id,text:c.num+'. '+T(c.title)})))]));
  });

  w.appendChild(h('h2',{style:'font-family:var(--serif);font-size:1.5rem;font-weight:500;margin:2.5rem 0 1rem',text:'The standing rules'}));
  w.appendChild(h('div',{class:'cards'},window.RULES.map(([t,d])=>
    h('div',{class:'card'},[h('h3',{text:t}),h('p',{text:d})]))));
  return w;
}

function pageSetup(){
  const w=h('div',{class:'wrap'});
  const S2=window.SETUP;
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Before Chapter 1'}),h('span',{class:'dot'}),
      h('span',{text:'~45 min, once'})]),
    h('h1',{text:T(S2.title)}),h('p',{text:T(S2.blurb)})]));
  w.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:'In one sentence'}),
    h('p',{text:T(S2.oneline)})]));
  S2.sections.forEach((s,i)=>{
    const sec=h('section',{class:'part'});
    sec.appendChild(sectionHead(String(i+1).padStart(2,'0'),s.h,s.t));
    sec.appendChild(h('div',{class:'prose'},[blocks(s.b)]));
    w.appendChild(sec);
  });
  const t=h('table');
  t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'Error'}),h('th',{text:'Likely cause'}),h('th',{text:'Fix'})])));
  t.appendChild(h('tbody',{},S2.trouble.map(r=>h('tr',{},Tl(r).map(x=>h('td',{html:x}))))));
  const sec=h('section',{class:'part'});
  sec.appendChild(sectionHead('★','Universal Troubleshooting'));
  sec.appendChild(h('div',{class:'tblwrap'},t));
  w.appendChild(sec);
  w.appendChild(h('div',{class:'foot'},[h('span'),h('a',{href:'#/ch/ch1',text:'Chapter 1 →'})]));
  return w;
}

function pageNotebook(){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'One notebook of record'})]),
    h('h1',{text:'The Notebook'}),
    h('p',{html:'Everything you wrote, in one place. Chapter 18 will ask you to return to the first entry — the distance between what you wrote then and what you understand now is the honest measurement of this book.'})]));
  const ex=h('button',{class:'primary',onclick:exportNotebook},'Export as Markdown');
  w.appendChild(h('div',{style:'display:flex;gap:.5rem;margin-bottom:1.5rem;flex-wrap:wrap'},[ex,
    h('button',{onclick:()=>{if(confirm('Clear every notebook entry? This cannot be undone.')){
      S.notes={};save();route();}}},'Clear all entries')]));
  let any=false;
  CH.forEach(c=>{
    const hw=S.notes[c.id+':hw'],cl=S.notes[c.id+':close'];
    if(!hw&&!cl)return; any=true;
    w.appendChild(h('div',{class:'nbentry'},[
      h('h3',{},[h('a',{href:'#/ch/'+c.id,style:'text-decoration:none',
        text:c.num+'. '+T(c.title)})]),
      hw?h('div',{},[h('label',{text:'homework'}),
        h('div',{class:'mono',style:'font-size:.82rem;white-space:pre-wrap;line-height:1.6;color:var(--ink-2)',text:hw})]):null,
      cl?h('div',{style:'margin-top:.7rem'},[h('label',{text:'close the sitting'}),
        h('div',{class:'mono',style:'font-size:.82rem;white-space:pre-wrap;line-height:1.6;color:var(--ink-2)',text:cl})]):null]));
  });
  if(!any)w.appendChild(h('p',{class:'empty',text:'Nothing written yet. Entries appear here as you complete each chapter\'s homework and three-line close.'}));
  return w;
}

function exportNotebook(){
  let md='# AI From Zero — Notebook of Record\n\n_Exported '+new Date().toISOString().slice(0,10)+'_\n\n';
  const doneN=CH.filter(c=>S.done[c.id]).length;
  const marked=window.REDMARKS.filter(r=>S.marks[r.id]);
  md+='Chapters complete: '+doneN+'/'+CH.length+'  \nRed marks claimed: '+marked.length+'/'+window.REDMARKS.length+'\n\n---\n\n';
  if(S.pred.length){
    md+='## Prediction Ledger\n\n| Chapter | What | Predicted | Measured | Gap |\n|---|---|---|---|---|\n';
    S.pred.forEach(p=>md+='| '+p.ch+' | '+p.what+' | '+p.pred+' | '+(p.act||'—')+' | '+
      (p.act!==''&&p.act!=null?(Number(p.act)-Number(p.pred)).toFixed(1):'—')+' |\n');
    md+='\n';
  }
  CH.forEach(c=>{
    const hw=S.notes[c.id+':hw'],cl=S.notes[c.id+':close'];
    if(!hw&&!cl)return;
    md+='## '+c.num+'. '+c.title+'\n\n';
    if(hw)md+='**Homework**\n\n'+hw+'\n\n';
    if(cl)md+='**Close the sitting**\n\n'+cl+'\n\n';
  });
  if(marked.length){
    md+='---\n\n## What I know breaks\n\n';
    marked.forEach(r=>md+='- '+r.t+' _(Ch. '+r.ch+')_\n');
  }
  const unmarked=window.REDMARKS.filter(r=>!S.marks[r.id]);
  if(unmarked.length){
    md+='\n## Not yet witnessed first-hand\n\n';
    unmarked.forEach(r=>md+='- '+r.t+' _(Ch. '+r.ch+')_\n');
  }
  const still=window.LATER.filter(l=>!l.resolved);
  md+='\n## What this book did not cover — my next syllabus\n\n';
  still.forEach(l=>md+='- '+l.t+'\n');
  download('notebook-of-record.md',md);
}
function download(name,text){
  const b=new Blob([text],{type:'text/markdown'});
  const a=h('a',{href:URL.createObjectURL(b),download:name});
  document.body.appendChild(a);a.click();a.remove();
}

function pageLedger(){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Standing rule four'})]),
    h('h1',{text:'Prediction Ledger'}),
    h('p',{html:'Every measurement in this book is preceded by a written guess. The gap between the two <em>is</em> the lesson — without the guess, a number is just a number. Most people over-predict, and the record of how much is the most useful thing you will build about yourself.'})]));

  const form=h('div',{class:'nbentry'});
  const ch=h('select'),what=h('input',{placeholder:'e.g. hits at k=3, out of 9'}),
        pv=h('input',{type:'number',step:'any',placeholder:'your guess'});
  CH.forEach(c=>ch.appendChild(h('option',{value:c.num},c.num+'. '+c.title)));
  form.append(h('h3',{text:'Commit a prediction — before you run anything'}),
    h('div',{class:'ctl'},[ctlL('chapter',ch),ctlL('what you are predicting',what),ctlL('prediction',pv),
      h('div',{style:'flex:0'},[h('label',{text:' '}),h('button',{class:'primary',onclick:()=>{
        if(!what.value)return;
        S.pred.push({ch:+ch.value,what:what.value,pred:pv.value,act:''});save();route();}},'Commit')])]));
  w.appendChild(form);

  if(!S.pred.length){w.appendChild(h('p',{class:'empty',
    text:'No predictions yet. Chapters 6, 8, 10, 11, 13, 14, 15 and 16 each ask for one before you measure.'}));return w;}
  const t=h('table');
  t.appendChild(h('thead',{},h('tr',{},['Ch','What','Predicted','Measured','Gap',''].map(x=>h('th',{text:x})))));
  const tb=h('tbody');
  let gaps=[];
  S.pred.forEach((p,i)=>{
    const av=h('input',{type:'number',step:'any',value:p.act||'',style:'max-width:90px'});
    av.addEventListener('input',()=>{S.pred[i].act=av.value;save();
      const g=av.value!==''?(Number(av.value)-Number(p.pred)):null;
      gc.textContent=g===null?'—':(g>0?'+':'')+g.toFixed(1);
      gc.style.color=g===null?'':(Math.abs(g)>0.001?'var(--red)':'var(--verified)');});
    const g0=p.act!==''&&p.act!=null?(Number(p.act)-Number(p.pred)):null;
    if(g0!==null)gaps.push(g0);
    const gc=h('td',{class:'num',text:g0===null?'—':(g0>0?'+':'')+g0.toFixed(1),
      style:g0===null?'':'color:'+(Math.abs(g0)>0.001?'var(--red)':'var(--verified)')});
    tb.appendChild(h('tr',{},[h('td',{class:'num',text:p.ch}),h('td',{text:p.what}),
      h('td',{class:'num',text:p.pred}),h('td',{},av),gc,
      h('td',{},h('button',{class:'sm',onclick:()=>{S.pred.splice(i,1);save();route();}},'×'))]));
  });
  t.appendChild(tb);
  w.appendChild(h('div',{class:'tblwrap',style:'margin-top:1.2rem'},t));
  if(gaps.length){
    const over=gaps.filter(g=>g<0).length;
    const mean=gaps.reduce((a,b)=>a+b,0)/gaps.length;
    w.appendChild(h('div',{class:'stats'},[
      h('div',{class:'stat'},[h('span',{class:'l',text:'measured'}),h('span',{class:'v',text:gaps.length})]),
      h('div',{class:'stat'},[h('span',{class:'l',text:'over-predicted'}),
        h('span',{class:'v '+(over>gaps.length/2?'red':''),text:over+'/'+gaps.length})]),
      h('div',{class:'stat'},[h('span',{class:'l',text:'mean gap'}),
        h('span',{class:'v '+(Math.abs(mean)>1?'red':'ok'),text:(mean>0?'+':'')+mean.toFixed(1)})])]));
    w.appendChild(h('p',{class:'labnote',html:over>gaps.length/2
      ?'You over-predict. So does almost everyone — and that is precisely why a demo should never again close a decision in your presence.'
      :'Well calibrated so far. Keep logging; calibration is the one skill in this book that compounds.'}));
  }
  return w;
}
function ctlL(l,n){return h('div',{},[h('label',{text:l}),n]);}

function pageLater(){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Standing rule two'})]),
    h('h1',{text:'The LATER Page'}),
    h('p',{html:'Every temptation to explore gets written here and immediately abandoned. These topics are not unimportant; they are valuable only after the path is solid. Items unlock as the chapter that covers them is completed — the rest stay parked, deliberately.'})]));
  const unlocked=window.LATER.filter(l=>l.resolved&&S.done['ch'+l.resolved]);
  const pending=window.LATER.filter(l=>l.resolved&&!S.done['ch'+l.resolved]);
  const parked=window.LATER.filter(l=>!l.resolved);
  const group=(title,items,cls)=>{
    if(!items.length)return null;
    const sec=h('section',{class:'part'});
    sec.appendChild(sectionHead(String(items.length),title));
    sec.appendChild(h('div',{class:'marks'},items.map(l=>
      h('div',{class:'mark'+(cls==='got'?' got':'')},[
        h('span',{class:'mc',text:l.resolved?'Ch '+l.resolved:'—'}),
        h('span',{class:'mt'},[h('strong',{text:l.t}),
          h('div',{class:'dim',style:'font-size:.8rem;margin-top:.2rem',text:l.note})]),
        l.resolved?h('a',{class:'chip',href:'#/ch/ch'+l.resolved,text:'Ch '+l.resolved}):null]))));
    return sec;};
  const g1=group('Collected — you did the chapter',unlocked,'got');if(g1)w.appendChild(g1);
  const g2=group('Unlocks later in this book',pending);if(g2)w.appendChild(g2);
  const g3=group('Still parked — your next syllabus',parked);if(g3)w.appendChild(g3);
  w.appendChild(h('div',{class:'callout',style:'margin-top:2rem'},[
    h('span',{class:'lbl',text:'The rough-notes law'}),
    h('p',{html:'Five bullets maximum. No formatting. No headings. No polish. If a note looks presentable, it consumed time and energy that belonged to the next experiment. For professionals whose working life rewards polished output, this is the hardest rule in the book — and the most protective.'})]));
  return w;
}

function pageGlossary(){
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:window.GLOSSARY.length+' terms'})]),
    h('h1',{text:'Master Glossary'}),
    h('p',{html:'Test yourself from memory. The answer to each term is <em>the chapter where you built it</em> — because a definition you can recite and a thing you have done are different possessions.'})]));
  const q=h('input',{placeholder:'Filter terms…',style:'max-width:320px'});
  const drill=h('button',{onclick:()=>{mode=mode==='drill'?'list':'drill';
    drill.textContent=mode==='drill'?'Show definitions':'Drill from memory';
    drill.classList.toggle('on',mode==='drill');render();}},'Drill from memory');
  const body=h('div');
  let mode='list';
  function render(){
    const f=q.value.toLowerCase();
    const items=window.GLOSSARY.filter(g=>!f||g[0].toLowerCase().includes(f)||g[1].toLowerCase().includes(f));
    body.innerHTML='';
    if(mode==='drill'){
      const known=Object.values(S.drill).filter(v=>v==='y').length;
      body.appendChild(h('div',{class:'stats'},[
        h('div',{class:'stat'},[h('span',{class:'l',text:'held from memory'}),
          h('span',{class:'v '+(known>60?'ok':''),text:known+' / '+window.GLOSSARY.length})])]));
      items.forEach(([t,d,ch])=>{
        const key=t;
        const ans=h('div',{class:'ans',style:'display:none'},[
          h('div',{html:T(d)}),h('div',{class:'dim',style:'margin-top:.4rem;font-size:.82rem',
            text:'Built in Chapter '+ch})]);
        const btns=h('div',{class:'grade',style:'display:none'},[
          h('span',{text:'did you have it?'}),
          h('button',{class:'sm'+(S.drill[key]==='y'?' on':''),onclick:e=>{
            S.drill[key]='y';save();render();}},'Yes'),
          h('button',{class:'sm red'+(S.drill[key]==='n'?' on':''),onclick:e=>{
            S.drill[key]='n';save();render();}},'Not really')]);
        const sum=h('summary',{},[h('span',{text:t}),
          S.drill[key]?h('span',{class:'pill '+(S.drill[key]==='y'?'ok':'red'),
            style:'margin-left:auto',text:S.drill[key]==='y'?'held':'revisit'}):null]);
        const det=h('details',{class:'qa'},[sum,ans,btns]);
        det.addEventListener('toggle',()=>{ans.style.display=det.open?'':'none';
          btns.style.display=det.open?'':'none';});
        body.appendChild(det);
      });
    } else {
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'Term'}),h('th',{text:'Plain definition'}),
        h('th',{text:'Built in'})])));
      t.appendChild(h('tbody',{},items.map(([term,d,ch])=>h('tr',{},[
        h('td',{},h('strong',{text:term})),h('td',{html:T(d)}),
        h('td',{},h('a',{class:'chip',href:'#/ch/ch'+ch,text:'Ch '+ch}))]))));
      body.appendChild(h('div',{class:'tblwrap'},t));
    }
  }
  q.addEventListener('input',render);
  w.append(h('div',{class:'ctl'},[ctlL('filter',q),h('div',{style:'flex:0'},[h('label',{text:' '}),drill])]),body);
  render();
  return w;
}

function pageVendor(){
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:window.VENDOR.length+' claims'})]),
    h('h1',{text:'Vendor Interrogation Deck'}),
    h('p',{html:'Every claim you will hear in an AI vendor meeting, with the questions that separate a specification from evidence. Each one is earned by a chapter you did — take it into the room.'})]));
  const q=h('input',{placeholder:'Search claims and questions…',style:'max-width:340px'});
  const tags=['all','retrieval','evidence','cost','security','agents','governance','capability','hype'];
  const sel=h('select',{},tags.map(t=>h('option',{value:t},t==='all'?'All categories':t)));
  const body=h('div',{class:'cards'});
  function render(){
    const f=q.value.toLowerCase(),tg=sel.value;
    body.innerHTML='';
    const items=window.VENDOR.filter(v=>(tg==='all'||v.tag===tg)&&
      (!f||v.claim.toLowerCase().includes(f)||v.qs.join(' ').toLowerCase().includes(f)));
    if(!items.length){body.appendChild(h('p',{class:'empty',text:'No claims match.'}));return;}
    items.forEach(v=>{
      body.appendChild(h('div',{class:'card'},[
        h('div',{style:'display:flex;gap:.5rem;align-items:center;margin-bottom:.5rem;flex-wrap:wrap'},[
          h('span',{class:'pill red',text:v.tag}),
          h('a',{class:'pill',href:'#/ch/ch'+v.ch,style:'text-decoration:none',text:'Ch '+v.ch})]),
        h('h3',{style:'font-family:var(--serif);font-size:1.08rem;font-weight:500',text:v.claim}),
        h('ul',{class:'bul',style:'font-size:.9rem;margin:.6rem 0 0'},v.qs.map(x=>h('li',{text:x})))]));
    });
  }
  q.addEventListener('input',render);sel.addEventListener('change',render);
  w.append(h('div',{class:'ctl'},[ctlL('search',q),ctlL('category',sel),
    h('div',{style:'flex:0'},[h('label',{text:' '}),
      h('button',{onclick:()=>window.print()},'Print deck')])]),body);
  render();
  return w;
}

function pageMap(){
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Chapters 7 and 18'})]),
    h('h1',{text:'The Red-Mark Map'}),
    h('p',{html:'The complete 2027 pipeline and every place it is known to bleed. Draw it on paper from memory first — then come here and tick only what you have <em>personally watched fail</em>. The boxes are the easy half.'})]));
  w.appendChild(redMapBlock());
  return w;
}

function pageCard(){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Chapter 17 deliverable'})]),
    h('h1',{text:'System Card'}),
    h('p',{html:'The single most portable artifact in this book. Every section below is already in your notebook — Chapters 6, 12, 13, 14 and 15 were the research; this is the write-up. Someone who skipped those chapters can only fill this page with adjectives.'})]));
  const F=[['name','System name','e.g. Policy Answer Assistant'],
    ['purpose','Purpose — what it does, for whom','Two sentences.'],
    ['scope','Explicitly out of scope','Three to five bullets. The most valuable section — it prevents use-case drift.'],
    ['tier','Risk tier and why','Minimal / limited / high — and the one sentence justifying it.'],
    ['data','Data — sources, right to use, retention, residency',''],
    ['eval','Evaluation — your Ch.6 numbers, at a stated k, on a stated date','e.g. 7/9 correct-chunk hits at k=3, 41% precision, measured 12 Nov against a 10-question ground truth including 1 unanswerable.'],
    ['limits','Known limitations','Your red marks, in plain sentences, each with the evidence that produced it.'],
    ['oversight','Human oversight — which outputs, by whom, seeing what, with what authority',''],
    ['security','Security posture — trifecta audit and the leg you broke',''],
    ['cost','Unit economics — cost/query, p50, p95',''],
    ['logging','Logging and incident path',''],
    ['change','Change control — model pinned, prompts versioned, eval re-run on change','']];
  const fields=h('div',{class:'fields'});
  F.forEach(([k,l,ph])=>{
    const saved=h('span',{class:'saved',text:'saved'});
    const el=k==='name'?h('input',{placeholder:ph,value:S.card[k]||''})
      :h('textarea',{rows:k==='purpose'||k==='tier'?2:3,placeholder:ph},S.card[k]||'');
    el.addEventListener('input',()=>{S.card[k]=el.value;save();flash(saved);});
    fields.appendChild(h('div',{},[h('label',{},[document.createTextNode(l),saved]),el]));
  });
  w.appendChild(h('div',{class:'nbentry'},[fields]));
  w.appendChild(h('div',{style:'display:flex;gap:.5rem;margin-top:1rem;flex-wrap:wrap'},[
    h('button',{class:'primary',onclick:()=>{
      let md='# System Card — '+(S.card.name||'Untitled')+'\n\n_Generated '+new Date().toISOString().slice(0,10)+'_\n\n';
      F.slice(1).forEach(([k,l])=>{md+='## '+l.split(' — ')[0]+'\n\n'+(S.card[k]||'_Not documented._')+'\n\n';});
      const marked=window.REDMARKS.filter(r=>S.marks[r.id]);
      if(marked.length){md+='## Failure modes witnessed first-hand\n\n';
        marked.forEach(r=>md+='- '+r.t+' _(Ch. '+r.ch+')_\n');}
      download('system-card.md',md);}},'Export system card'),
    h('a',{class:'chip',href:'#/ch/ch17',style:'padding:.4rem .8rem',text:'Back to Chapter 17'})]));
  w.appendChild(h('div',{class:'callout',style:'margin-top:1.5rem'},[
    h('span',{class:'lbl',text:'The test of this document'}),
    h('p',{html:'Read the <strong>Known limitations</strong> section back. If it could have been written about any AI system, it was written from imagination. Real ones name a specific failure, on a specific document, with a number beside it.'})]));
  return w;
}

function pageProgress(){
  const w=h('div',{class:'wrap-wide'});
  const doneN=CH.filter(c=>S.done[c.id]).length;
  const marked=window.REDMARKS.filter(r=>S.marks[r.id]).length;
  const graded=Object.values(S.grades).filter(Boolean);
  const notes=Object.values(S.notes).filter(v=>v&&v.trim()).length;
  const held=Object.values(S.drill).filter(v=>v==='y').length;
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Private — stored only in this browser'})]),
    h('h1',{text:'Where You Are'}),
    h('p',{html:'Nothing here is reported anywhere. The only audience for these numbers is you, and the only useful way to read them is honestly.'})]));
  w.appendChild(h('div',{class:'stats'},[
    tile('chapters complete',doneN+' / '+CH.length,doneN===CH.length?'ok':''),
    tile('red marks claimed',marked+' / '+window.REDMARKS.length,marked>=20?'ok':marked>=6?'':'red',
      marked>=20?'architect':marked>=6?'above the Ch.7 threshold':'below six'),
    tile('glossary held',held+' / '+window.GLOSSARY.length,held>60?'ok':''),
    tile('notebook entries',notes),
    tile('predictions logged',S.pred.length),
    tile('self-graded answers',graded.length)]));

  const byPart=h('div',{class:'cards'});
  window.PARTS.forEach(p=>{
    const chs=CH.filter(c=>c.part===p.n);
    const d=chs.filter(c=>S.done[c.id]).length;
    byPart.appendChild(h('div',{class:'card'},[
      h('div',{style:'display:flex;align-items:baseline;gap:.6rem'},[
        h('h3',{style:'flex:1',text:'Part '+ROMAN(p.n)+' — '+T(p.title)}),
        h('span',{class:'mono dim',style:'font-size:.75rem',text:d+'/'+chs.length})]),
      h('div',{class:'bar',style:'margin:.5rem 0 .7rem'},
        [h('i',{style:'width:'+(d/chs.length*100)+'%'})]),
      h('div',{class:'chips'},chs.map(c=>h('a',{class:'chip'+(S.done[c.id]?' done':''),
        href:'#/ch/'+c.id,text:String(c.num)})))]));
  });
  w.appendChild(byPart);

  const miss=Object.entries(S.grades).filter(([k,v])=>v==='n'||v==='m');
  if(miss.length){
    w.appendChild(h('h2',{style:'font-family:var(--serif);font-size:1.4rem;font-weight:500;margin:2.2rem 0 .8rem',
      text:'Questions you marked shaky or missed'}));
    w.appendChild(h('div',{class:'marks'},miss.map(([k,v])=>{
      const [cid,i]=k.split(':'); const c=byId[cid]; if(!c||!c.check[+i])return null;
      return h('div',{class:'mark'+(v==='n'?' got':'')},[
        h('span',{class:'mc',text:'Ch '+c.num}),
        h('span',{class:'mt'},[h('a',{href:'#/ch/'+cid,style:'text-decoration:none',text:c.check[+i][0]})]),
        h('span',{class:'pill '+(v==='n'?'red':''),text:v==='n'?'missed':'shaky'})]);
    }).filter(Boolean)));
  }
  w.appendChild(h('div',{style:'display:flex;gap:.5rem;margin-top:2rem;flex-wrap:wrap'},[
    h('button',{class:'primary',onclick:exportNotebook},'Export findings + notebook'),
    h('button',{onclick:()=>{if(confirm('Reset ALL progress, notes, marks and predictions? This cannot be undone.')){
      localStorage.removeItem(KEY);location.reload();}}},'Reset everything')]));
  return w;
}
function tile(l,v,cls,s){return h('div',{class:'stat'},[h('span',{class:'l',text:l}),
  h('span',{class:'v '+(cls||''),text:v}),s?h('span',{class:'s',text:s}):h('span')]);}

function pageLabs(){
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'No API key required'})]),
    h('h1',{text:'The Labs'}),
    h('p',{html:'Every simulation here is shaped to reproduce the behaviour its chapter teaches, so you can meet each failure with your own hands before — or without — spending a single credit. They are not substitutes for the notebook work; they are rehearsals for it.'})]));
  const order=[['tokenizer',1],['receipt',1],['temperature',2],['chunker',3],['meaningmap',5],
    ['prdial',6],['schema',8],['agentloop',9],['contextrot',10],['cache',10],['reasoning',11],
    ['fusion',12],['injection',13],['trifecta',13],['judge',14],['costmodel',15]];
  order.forEach(([k,ch])=>{
    const L=window.LABS[k];if(!L)return;
    const b=labBlock(k);
    b.querySelector('.labhead').appendChild(
      h('a',{class:'pill',style:'margin-left:auto;text-decoration:none',href:'#/ch/ch'+ch,text:'Ch '+ch}));
    w.appendChild(b);
  });
  return w;
}

/* ---------------- shell ---------------- */
function renderRail(){
  const r=$('#rail');r.innerHTML='';
  const m=window.ENG?window.ENG.overall(S):0;
  const tested=window.ENG?window.SKILLS.filter(s=>window.ENG.skillState(S,s.id).n>0).length:0;
  r.appendChild(h('div',{class:'brand'},[
    h('a',{href:'#/',style:'text-decoration:none;color:inherit'},[h('h1',{text:'AI From Zero'})]),
    h('span',{class:'ed',text:'Skill tracker · 2027'}),
    h('div',{class:'prog'},[h('div',{class:'bar'},[h('i',{style:'width:'+m+'%'})]),
      h('span',{class:'pct',text:Math.round(m)+'% mastery · '+tested+'/'+window.SKILLS.length+' skills measured'})])]));
  const sec=(title,items)=>{
    const s=h('div',{class:'railsec'},[h('h2',{text:title})]);
    s.appendChild(h('ul',{class:'navlist'},items.map(([href,num,label])=>
      h('li',{},[h('a',{href,class:location.hash===href?'on':''},[
        h('span',{class:'nnum',text:num}),h('span',{style:'flex:1',text:label}),
        (href.startsWith('#/ch/')&&S.done[href.slice(5)])?h('span',{class:'ndone',text:'✓'}):null])]))));
    return s;};
  const dueN=window.ENG?window.ENG.dueList(S).length:0;
  /* Four things to start with.

     There were sixteen, in four groups, several named after metaphors from the
     book — Red-Mark Map, LATER Page, Prediction Ledger. You had to learn the
     app before you could learn anything in it. The instruments are still all
     here; they are just not in the way until you go looking. */
  r.appendChild(sec('',[
    ['#/','◉','Continue'],
    ['#/library','▤','Chapters'],
    ['#/practice','▶','Practice'+(dueN?'  ('+dueN+' due)':'')],
    ['#/skills','▦','My progress'],
    /* Setup was in the drawer with everything else, on the reasoning that it is
       optional. It is — but it is also the one thing you cannot start without
       if you do want the code, and a reader who cannot find it concludes the
       course expects an environment they were never told how to build. */
    ['#/setup','⚙','Set up Colab + API key'],
    ['#/install','▢','Install on iPad or phone']]));

  const openMore=!!S.railmore;
  const nDraft=window.STUDIO?window.STUDIO.dirtyKinds().length:0;
  const more=h('div',{class:'railsec'});
  /* An unpublished draft is not something to hide behind a disclosure. */
  const tog=h('button',{class:'railtog',onclick:()=>{S.railmore=!S.railmore;save();renderRail();}},
    (openMore?'▾ ':'▸ ')+'Everything else'+
    (nDraft?('  ('+nDraft+' draft'+(nDraft>1?'s':'')+')'):''));
  more.appendChild(tog);
  if(openMore){
    const list=(items)=>more.appendChild(h('ul',{class:'navlist'},items.map(([href,num,label])=>
      h('li',{},[h('a',{href,class:location.hash===href?'on':''},[
        h('span',{class:'nnum',text:num}),h('span',{style:'flex:1',text:label})])]))));
    const nd=nDraft;
    list([
      ['#/analytics','◔','How I am doing over time'],
      ['#/exercises','✎','Longer exercises'],
      ['#/labs','◧','Interactive tools'],
      ['#/glossary','∎','Glossary of every term'],
      ['#/data','⇄','My data and backups'],
      ['#/processes','⟳','Repeatable work routines'],
      ['#/map','◆','Where AI systems break'],
      ['#/ledger','∆','My predictions vs reality'],
      ['#/card','▣','Governance doc builder'],
      ['#/vendor','⌗','Questions to ask vendors'],
      ['#/notebook','✐','My notes'],
      ['#/later','⋯','Topics I parked'],
      ['#/language','अ','Language — English or Hinglish'],
      ['#/studio','✦','Edit this course'+(nd?'  ('+nd+' draft'+(nd>1?'s':'')+')':'')]]);
  }
  r.appendChild(more);
}

function updateProgress(){
  const m=window.ENG?window.ENG.overall(S):0;
  const tested=window.ENG?window.SKILLS.filter(s=>window.ENG.skillState(S,s.id).n>0).length:0;
  const b=$('.brand .bar i'),p=$('.brand .pct');
  if(b)b.style.width=m+'%';
  if(p)p.textContent=Math.round(m)+'% mastery · '+tested+'/'+window.SKILLS.length+' skills measured';
}

/* ---------------- install as an app ----------------

   The tracker is a web page that also installs to a home screen, which matters
   more than it sounds: installed, it opens full-screen with no address bar, it
   keeps working on a train, and it sits next to everything else you actually
   open. Android and desktop Chrome offer this themselves. iPhone and iPad never
   prompt — the only route is Share → Add to Home Screen, and a reader who does
   not know that concludes the app simply does not support their tablet. */
let deferredInstall=null;
window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); deferredInstall=e;
  const b=$('#installnow'); if(b)b.hidden=false; });

function platformGuess(){
  const ua=navigator.userAgent||'';
  const ios=/iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);   // iPadOS says Mac
  if(ios)return 'ios';
  if(/Android/.test(ua))return 'android';
  return 'desktop';
}
function isInstalled(){
  return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone===true;
}

function pageInstall(){
  const w=h('div',{class:'wrap'});
  const here=platformGuess();
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Two minutes'}),h('span',{class:'dot'}),
      h('span',{text:'nothing to download'})]),
    h('h1',{text:'Put this on your home screen'}),
    h('p',{text:'It installs as an app — full screen, no address bar, opens offline. '+
      'There is no app store involved and nothing is downloaded; the page you are reading becomes the app.'})]));

  if(isInstalled())
    w.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:'Already installed'}),
      h('p',{text:'You are reading this inside the installed app. Nothing left to do.'})]));

  const step=(title,tag,mine,lines,note)=>{
    const sec=h('section',{class:'part'});
    sec.appendChild(h('div',{class:'parthead'},[
      h('span',{class:'idx',text:tag}),h('h2',{text:title}),
      mine?h('span',{class:'t',text:'you are on this'}):null]));
    const d=h('div',{class:'prose'});
    d.appendChild(h('ol',{class:'num'},lines.map(l=>h('li',{html:l}))));
    if(note)d.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:'Worth knowing'}),h('p',{html:note})]));
    sec.appendChild(d);
    return sec;
  };

  const order=[here].concat(['ios','android','desktop'].filter(x=>x!==here));
  const cards={
    ios: ()=>step('iPad and iPhone','◲',here==='ios',[
      'Open this site in <strong>Safari</strong>. Chrome on iOS cannot add to the home screen reliably — Safari can.',
      'Tap the <strong>Share</strong> button — the square with an arrow coming out of the top. On an iPad it is in the top toolbar; on an iPhone it is at the bottom.',
      'Scroll the share sheet down and tap <strong>Add to Home Screen</strong>.',
      'Tap <strong>Add</strong>. The icon appears on your home screen.'],
      'iOS gives an installed app its own storage, separate from Safari. So the first time you open it from the home screen, sign in again on the <a href="#/data">Progress &amp; Backup</a> page — after that both stay in step, because progress syncs through your account rather than through the browser.'),
    android: ()=>step('Android','◱',here==='android',[
      'Open this site in <strong>Chrome</strong>.',
      'Chrome usually offers <strong>Install app</strong> by itself. If it does, take it and you are done.',
      'Otherwise open the <strong>⋮</strong> menu and choose <strong>Install app</strong> (older versions say <em>Add to Home screen</em>).'],
      null),
    desktop: ()=>step('Windows and Mac','▭',here==='desktop',[
      'In <strong>Chrome</strong> or <strong>Edge</strong>, look for the install icon at the right-hand end of the address bar — a small screen with an arrow.',
      'Or open the menu and choose <strong>Install AI From Zero</strong>. It then opens in its own window, like any other application.'],
      'Safari on a Mac does not install web apps this way. Add it to your Favourites instead, or use Chrome or Edge for the installed version.')
  };
  const btn=h('button',{class:'primary',id:'installnow',hidden:deferredInstall?null:'hidden',
    onclick:async()=>{ if(!deferredInstall)return; deferredInstall.prompt();
      await deferredInstall.userChoice; deferredInstall=null; btn.hidden=true; }},
    'Install it now');
  w.appendChild(h('div',{style:'margin:0 0 1.4rem'},[btn]));
  order.forEach(k=>w.appendChild(cards[k]()));

  const sec=h('section',{class:'part'});
  sec.appendChild(sectionHead('★','If it does not work'));
  const t=h('table');
  t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'What you see'}),h('th',{text:'Why'}),h('th',{text:'Fix'})])));
  t.appendChild(h('tbody',{},[
    ['No <em>Add to Home Screen</em> in the share sheet','You are in Chrome or another browser on iOS, or in an in-app browser opened from WhatsApp or Gmail','Open the address in Safari itself — tap the ⋯ or the compass icon and choose <em>Open in Safari</em>'],
    ['The icon is a grey screenshot of the page','An older copy of the site is cached on the device','Pull down to refresh the page once, then add it again'],
    ['Installed app shows no progress','Installed apps get their own storage on iOS','Sign in inside the installed app on the <a href="#/data">Progress &amp; Backup</a> page. Your progress is on your account, not on the device'],
    ['No install option on desktop','Safari and Firefox do not install web apps','Use Chrome or Edge, or just bookmark it — everything works the same in a normal tab']
  ].map(r=>h('tr',{},r.map(x=>h('td',{html:x}))))));
  sec.appendChild(h('div',{class:'tblwrap'},t));
  w.appendChild(sec);

  w.appendChild(h('div',{class:'foot'},[h('span'),h('a',{href:'#/setup',text:'Set up Colab + API key →'})]));
  return w;
}

/* ---------------- language ---------------- */
function pageLanguage(){
  const w=h('div',{class:'wrap'});
  const cov=hingCoverage();
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Reading language'})]),
    h('h1',{text:'English or Hinglish'}),
    h('p',{text:'The course is written in English. It can also be read in Hinglish — the '+
      'English-Hindi mix people actually speak at work. The ideas, the questions and the '+
      'order are identical; only the sentences change.'})]));

  const pick=(label,sub,val)=>{
    const on=(S.lang||null)===val;
    return h('button',{class:'opt'+(on?' sel':''),style:'text-align:left',
      onclick:()=>{ S.lang=val; save(); applyLang(); }},
      [h('span',{class:'ok',text:on?'✓':'·'}),
       h('span',{},[h('strong',{text:label}),h('span',{class:'needwhy',text:' — '+sub})])]);
  };
  w.appendChild(h('div',{class:'qbody',style:'margin-bottom:1.6rem'},[
    pick('English','As written. Every line, everywhere.',null),
    pick('Hinglish','Roman script. Technical terms stay in English on purpose.','hi')]));

  w.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:'Which words stay in English'}),
    h('p',{html:'Token, prompt, context, retrieval, embedding, chunk, eval, latency, '+
      'hallucination, agent, injection — and every other term the industry uses. '+
      'Translating those would teach you a vocabulary nobody else speaks, and the whole '+
      'point of the glossary is that you can use these words in a meeting. '+
      'The explanation around them is what changes.'})]));

  const sec=h('section',{class:'part'});
  sec.appendChild(sectionHead('☰','How much is translated so far'));
  sec.appendChild(h('p',{class:'dim',style:'font-size:.87rem;margin:0 0 1rem',
    text: cov.pct >= 100
      ? 'Every line of the course has a Hinglish version. If a line is ever edited in English '+
        'its translation stops applying and that line reads in English again — never blank, '+
        'and the figure below will say so.'
      : 'Hinglish is being added a section at a time. Anything not translated yet is shown '+
        'in English rather than left blank, so nothing is ever missing from a page — you will '+
        'just see the two mixed while this fills in.'}));
  const bar=(label,o)=>{
    const pct=o.total?Math.round(o.have*100/o.total):0;
    return h('div',{class:'skrow'},[
      h('span',{class:'skn'},[h('strong',{text:label})]),
      h('span',{class:'skm'},[
        h('span',{class:'meter'},[h('i',{class:pct>=70?'ok':pct>=30?'':'low',
          style:'width:'+Math.max(2,pct)+'%'})]),
        h('span',{class:'skpct',text:pct+'%'})])]);
  };
  const list=h('div',{class:'skrows'});
  cov.groups.forEach(o=>list.appendChild(bar(o.label,o)));
  sec.appendChild(list);
  sec.appendChild(h('div',{class:'stats',style:'margin-top:1rem'},[
    tile('overall',cov.pct+'%',cov.pct>66?'ok':''),
    tile('lines translated',cov.have+' / '+cov.total,'')]));
  w.appendChild(sec);
  return w;
}

const V=()=>window.VIEWS;
const ROUTES={'':()=>V().dashboard(),'library':pageHome,
  'skills':()=>V().skills(),'analytics':()=>V().analytics(),
  'exercises':()=>V().exercises(),'processes':()=>V().processes(),
  'setup':pageSetup,'install':pageInstall,'language':pageLanguage,
  'notebook':pageNotebook,'ledger':pageLedger,
  'later':pageLater,'glossary':pageGlossary,'vendor':pageVendor,'map':pageMap,'card':pageCard,
  'progress':pageProgress,'labs':pageLabs,'data':()=>V().data(),
  'studio':()=>window.STUDIO.studio([])};
const CRUMB={'':'Dashboard','library':'Library','skills':'Skill Matrix','analytics':'Analytics',
  'exercises':'Exercises','processes':'Processes','practice':'Practice','skill':'Skill',
  'data':'Progress & Backup','studio':'Content Studio','install':'Install as an app',
  'language':'Language','setup':'Setup'};

function route(){
  const hash=location.hash.replace(/^#\/?/,'').split('#')[0];
  const parts=hash.split('/').filter(Boolean);
  const main=$('#main');main.innerHTML='';
  Thit=0; Tmiss=0;
  let node,crumb='Dashboard';
  if(parts[0]==='ch'&&byId[parts[1]]){
    const c=byId[parts[1]];node=renderChapter(c);
    crumb='Part '+ROMAN(c.part)+' · Chapter '+c.num;
    document.title=c.num+'. '+c.title+' — AI From Zero';
  } else if(parts[0]==='practice'){
    node = parts[1] ? V().practice(parts[1],parts[2]) : V().practiceMenu();
    crumb='Practice'+(parts[1]?' · '+parts[1]:'');
    document.title='Practice — AI From Zero';
  } else if(parts[0]==='studio'){
    node=window.STUDIO.studio(parts);
    crumb='Content Studio'+(parts[1]?' · '+parts[1]:'');
    document.title='Content Studio — AI From Zero';
  } else if(parts[0]==='skill'&&parts[1]){
    node=V().skillPage(parts[1]);
    crumb='Skill · '+parts[1];
    document.title='Skill — AI From Zero';
  } else {
    const f=ROUTES[parts[0]||''];
    node=(f||(()=>V().dashboard()))();
    crumb=CRUMB[parts[0]||'']||(parts[0]?parts[0][0].toUpperCase()+parts[0].slice(1):'Dashboard');
    document.title='AI From Zero — 2027 Edition';
  }
  main.appendChild(node);
  /* Hinglish on and not one line of this page had a translation. That is a
     real fault — most likely this device is reading content the translations
     were not written against — and it used to look exactly like the switch
     doing nothing. Say so, on the page, rather than leaving it to be guessed. */
  if(S.lang==='hi' && Thit===0 && Tmiss>3){
    const warn=h('div',{class:'callout',style:'border-color:var(--red);margin-bottom:1.2rem'},[
      h('span',{class:'lbl',text:'Hinglish is on, but nothing here is translated'}),
      h('p',{html:'Every line on this page fell back to English. That normally means the '+
        'text on this device is not the text the translations were written against. '+
        '<a href="#/language">The Language page</a> shows how much of the course this '+
        'device can actually translate.'})]);
    main.insertBefore(warn, main.firstChild);
  }
  const cb=$('#crumb');if(cb)cb.textContent=crumb;
  renderRail();
  /* a secondary hash (#/exercises#E01) targets an element on the rendered page */
  const anchor=location.hash.split('#')[2];
  if(anchor){const el=document.getElementById(anchor);
    if(el){el.scrollIntoView({block:'start'});return;}}
  window.scrollTo(0,0);
  $('#rail').classList.remove('open');
}

/* ---------------- command palette ---------------- */
function buildIndex(){
  const idx=[];
  idx.push({k:'page',t:'Dashboard',h:'#/'},{k:'page',t:'Practice',h:'#/practice'},
    {k:'page',t:'Skill Matrix',h:'#/skills'},{k:'page',t:'Analytics',h:'#/analytics'},
    {k:'page',t:'Exercises',h:'#/exercises'},{k:'page',t:'Processes',h:'#/processes'},
    {k:'page',t:'Library — '+CH.length+' chapters',h:'#/library'},
    {k:'page',t:'Progress & Backup',h:'#/data'},
    {k:'page',t:'Content Studio — edit the curriculum',h:'#/studio'},
    {k:'page',t:'Setup',h:'#/setup'},
    {k:'page',t:'The Labs',h:'#/labs'},{k:'page',t:'Red-Mark Map',h:'#/map'},
    {k:'page',t:'Prediction Ledger',h:'#/ledger'},{k:'page',t:'Notebook',h:'#/notebook'},
    {k:'page',t:'System Card',h:'#/card'},{k:'page',t:'Vendor Deck',h:'#/vendor'},
    {k:'page',t:'Glossary',h:'#/glossary'},{k:'page',t:'LATER Page',h:'#/later'},
    {k:'page',t:'Where You Are',h:'#/progress'});
  CH.forEach(c=>{
    idx.push({k:'ch '+c.num,t:T(c.title),d:T(c.concept),h:'#/ch/'+c.id});
    c.words.forEach(([t,d])=>idx.push({k:'term',t,d:'Ch '+c.num+' · '+d.replace(/<[^>]+>/g,''),h:'#/ch/'+c.id}));
    c.check.forEach(q=>idx.push({k:'question',t:q[0],d:'Ch '+c.num,h:'#/ch/'+c.id}));
  });
  window.VENDOR.forEach(v=>idx.push({k:'claim',t:v.claim,d:'Ch '+v.ch,h:'#/vendor'}));
  window.REDMARKS.forEach(r=>idx.push({k:'failure',t:r.t,d:'Ch '+r.ch,h:'#/map'}));
  window.SKILLS.forEach(s=>idx.push({k:'skill',t:s.n,d:s.core,h:'#/skill/'+s.id}));
  window.EXERCISES.forEach(e=>idx.push({k:'exercise',t:e.t,d:'~'+e.mins+' min',h:'#/exercises#'+e.id}));
  window.PROCESSES.forEach(p=>idx.push({k:'process',t:p.n,d:p.cad,h:'#/processes#'+p.id}));
  return idx;
}
let palCur=0,palItems=[];
function openPal(){
  const p=$('#pal');p.classList.add('open');
  const i=$('#palinput');i.value='';i.focus();palSearch('');
}
function closePal(){$('#pal').classList.remove('open');}
function palSearch(q){
  if(!IDX)IDX=buildIndex();
  const res=$('#palres');res.innerHTML='';palCur=0;
  const f=q.toLowerCase().trim();
  palItems=(f?IDX.filter(x=>x.t.toLowerCase().includes(f)||(x.d||'').toLowerCase().includes(f))
    :IDX.filter(x=>x.k==='page'||x.k.startsWith('ch'))).slice(0,40);
  palItems.forEach((x,i)=>{
    res.appendChild(h('a',{href:x.h,class:i===0?'cur':'',onclick:()=>closePal()},[
      h('span',{class:'pk',text:x.k}),h('span',{style:'flex:1',text:x.t}),
      x.d?h('span',{class:'pd',text:x.d.slice(0,42)}):null]));
  });
  if(!palItems.length)res.appendChild(h('div',{class:'empty',style:'padding:1rem',text:'Nothing found.'}));
}
function palMove(d){
  const as=[...$('#palres').querySelectorAll('a')];if(!as.length)return;
  as[palCur]&&as[palCur].classList.remove('cur');
  palCur=(palCur+d+as.length)%as.length;
  as[palCur].classList.add('cur');as[palCur].scrollIntoView({block:'nearest'});
}

/* ---------------- theme ---------------- */
function applyTheme(){
  if(S.theme)document.documentElement.setAttribute('data-theme',S.theme);
  else document.documentElement.removeAttribute('data-theme');
  const b=$('#themebtn');
  if(b)b.textContent=S.theme==='dark'?'Light':S.theme==='light'?'Dark':'Theme';
}

/* The button says the language you would switch to, like the theme button. */
function applyLang(reroute){
  const b=$('#langbtn');
  if(b){ const o=b.querySelectorAll('.lgo');
    if(o[0])o[0].classList.toggle('on',S.lang!=='hi');
    if(o[1])o[1].classList.toggle('on',S.lang==='hi'); }
  document.documentElement.setAttribute('data-lang',S.lang==='hi'?'hi':'en');
  if(reroute!==false){ TERMS=null; route(); renderRail(); }
}

/* Every line the Hinglish layer could carry, in reading order, grouped the way
   a reader thinks about the course. Derived from the content itself rather than
   listed by hand, so it cannot drift — it is what drives both the coverage
   figures on the Language page and the editor in the Studio. */
function hingStrings(){
  const groups=[], seen=new Set();
  const g=label=>{ const o={label,strings:[]}; groups.push(o); return o; };
  const add=(o,v)=>{ if(typeof v!=='string')return; const k=v.trim();
    if(!k||seen.has(k))return; seen.add(k); o.strings.push(k); };
  /* An id is a key, not a sentence: translating "ch0-tap" would break the
     checkpoint it names. */
  const SKIPKEY=new Set(['id']);
  const walk=(o,v)=>{ if(typeof v==='string')return add(o,v);
    if(Array.isArray(v))return v.forEach(x=>walk(o,x));
    if(v&&typeof v==='object')
      Object.keys(v).forEach(k=>{ if(!SKIPKEY.has(k))walk(o,v[k]); }); };

  (window.PARTS||[]).forEach(p=>{
    const o=g('Part '+ROMAN(p.n)+' — '+p.title);
    add(o,p.title); add(o,p.blurb);
    CH.filter(c=>c.part===p.n).forEach(c=>{
      add(o,c.title); add(o,c.concept);
      walk(o,c.takeaway);
      (c.needs||[]).forEach(n=>{ add(o,n[0]); add(o,n[1]); });
      /* code samples are code, and a lab or question block is only an id */
      (c.story||[]).forEach(b=>{ if(['code','lab','q'].includes(b[0]))return; walk(o,b.slice(1)); });
      (c.handson||[]).forEach(st=>{ add(o,st.h);
        (st.b||[]).forEach(b=>{ if(b[0]==='code')return; walk(o,b.slice(1)); }); });
    });
  });

  const q=g('Practice questions');
  ((window.ENG&&window.ENG.ITEMS)||[]).forEach(i=>{
    add(q,i.stem); add(q,i.why);
    if(i.type==='judge') add(q,i.ans);
    else if(i.type!=='num') walk(q,i.opts);
  });

  const su=g('Setup walkthrough');
  const S2=window.SETUP||{};
  add(su,S2.title); add(su,S2.blurb); add(su,S2.oneline);
  (S2.sections||[]).forEach(x=>{ add(su,x.h);
    (x.b||[]).forEach(b=>{ if(b[0]==='code')return; walk(su,b.slice(1)); }); });
  walk(su,S2.trouble);

  /* What each skill claims you can do, and the ladder of levels under it. The
     names of skills and domains are labels rather than prose, and stay in
     English along with the rest of the interface. */
  const sk=g('Skills and levels');
  (window.DOMAINS||[]).forEach(d=>add(sk,d.blurb));
  (window.SKILLS||[]).forEach(x=>{ add(sk,x.core); walk(sk,x.L); });
  (window.LEVEL_NAMES||[]).forEach(x=>add(sk,x));

  const lb=g('In-page tools');
  Object.values(window.LABS||{}).forEach(l=>{ add(lb,l.title); add(lb,l.note); });

  const gl=g('Glossary definitions');
  (window.GLOSSARY||[]).forEach(x=>add(gl,x[1]));
  return groups;
}
window.HINGSTRINGS=hingStrings;

function hingCoverage(){
  const H=window.HING||{};
  const groups=hingStrings().map(o=>({label:o.label,total:o.strings.length,
    have:o.strings.filter(k=>H[k]!==undefined).length}));
  const have=groups.reduce((a,o)=>a+o.have,0), total=groups.reduce((a,o)=>a+o.total,0);
  return {groups,have,total,pct:total?Math.round(have*100/total):0};
}

/* ---------------- boot ---------------- */
function boot(){
  document.body.appendChild(h('div',{class:'shell'},[
    h('nav',{class:'rail',id:'rail'}),
    h('div',{},[
      h('div',{class:'tbar'},[
        h('button',{class:'sm railtoggle',onclick:()=>$('#rail').classList.toggle('open')},'☰'),
        h('span',{class:'crumb',id:'crumb'}),
        h('a',{class:'savewarn',id:'savewarn',hidden:'hidden',href:'#/data',
          text:'⚠ Progress is not being saved — open Progress & Backup'}),
        h('span',{class:'sp'}),
        h('a',{class:'syncpill',id:'syncpill',href:'#/data',hidden:'hidden'}),
        h('button',{class:'sm',onclick:openPal},'Search  ⌘K'),
        /* Both languages, always visible, the live one filled in. The old
           button showed only the one you would switch to, which read as a
           label for the language you were already in. */
        h('button',{class:'sm langtog',id:'langbtn',title:'Reading language',
          onclick:()=>{ S.lang=S.lang==='hi'?null:'hi';save();applyLang(); }},
          [h('span',{class:'lgo',text:'EN'}),h('span',{class:'lgo',text:'HI'})]),
        h('button',{class:'sm',id:'themebtn',onclick:()=>{
          S.theme=S.theme==='dark'?'light':S.theme==='light'?null:'dark';save();applyTheme();}},'Theme')]),
      h('main',{class:'main',id:'main'})])]));
  document.body.appendChild(h('div',{class:'pal',id:'pal',onclick:e=>{if(e.target.id==='pal')closePal();}},
    [h('div',{class:'palbox'},[
      h('input',{id:'palinput',placeholder:'Search chapters, terms, questions, vendor claims, failures…',
        oninput:e=>palSearch(e.target.value)}),
      h('div',{class:'palres',id:'palres'})])]));
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPal();return;}
    if(!$('#pal').classList.contains('open'))return;
    if(e.key==='Escape')closePal();
    else if(e.key==='ArrowDown'){e.preventDefault();palMove(1);}
    else if(e.key==='ArrowUp'){e.preventDefault();palMove(-1);}
    else if(e.key==='Enter'){const a=$('#palres a.cur');if(a){location.hash=a.getAttribute('href');closePal();}}
  });
  applyTheme();
  applyLang(false);
  window.addEventListener('hashchange',route);
  route();
  ACCOUNT.boot().then(()=>{ if(ACCOUNT.state==='off') runAutoSync(); });
}
function setSyncPill(state,text,cls){
  const el=$('#syncpill'); if(!el)return;
  if(state==='off'){el.hidden=true;return;}
  el.hidden=false; el.textContent=text;
  el.className='syncpill'+(cls?' '+cls:'');
}
/* ---------------- account sync ----------------
   The server is the record when signed in; this device is a cache. On open we
   pull, on change we push, and a version mismatch means another device wrote
   first — we never resolve that silently. */
const ACCOUNT=(function(){
  let state='off';          // off | signedout | syncing | ok | offline | conflict | error
  let detail='';
  let pushT=null, inFlight=false, dirty=false, serverCopy=null;

  const M=()=>window.REMOTE.meta();
  const setM=m=>window.REMOTE.setMeta(m);
  const marker=()=>S.updatedAt||0;
  /* version 0 is a real, synced state — the server simply has no row yet — so
     "never synced" has to be the absence of a version, not a falsy one. */
  const localChanged=()=>{const m=M();
    return m.version==null || (S.updatedAt||0)!==(m.marker||0);};

  function show(st,d){ state=st; detail=d||''; paint(); }
  function paint(){
    const el=$('#syncpill'); if(!el)return;
    const map={
      off:      null,
      signedout:['Sign in to sync','warn'],
      syncing:  ['syncing…','busy'],
      ok:       ['synced','ok'],
      pulled:   ['synced — loaded your latest','ok'],
      offline:  ['offline — will sync later','warn'],
      conflict: ['another device wrote first — open','warn'],
      error:    ['sync problem — open','warn']
    };
    const v=map[state];
    if(!v){el.hidden=true;return;}
    el.hidden=false; el.textContent=v[0]; el.className='syncpill '+v[1];
  }

  /* The page renders before this probe resolves, so any view that shows account
     state has to be redrawn once we know it. */
  function reroute(){ if(location.hash.indexOf('#/data')===0) route(); }
  async function boot(){
    if(!window.REMOTE) return;
    const a=await window.REMOTE.probe();
    if(!a){ show('off'); reroute(); return; }
    const u=await window.REMOTE.me();
    if(!u){ clearIfStale(); show('signedout'); reroute(); return; }
    show('syncing');
    try{
      const srv=await window.REMOTE.pull();
      if(srv.signedOut){ show('signedout'); return; }
      await reconcile(srv);
    }catch(e){ show(navigator.onLine?'error':'offline', e.message); }
    reroute();
  }
  /* Signed out on a device that had synced: keep the data, drop the pointer. */
  function clearIfStale(){ const m=M(); if(m.version) window.REMOTE.clearMeta(); }

  async function reconcile(srv){
    const m=M();
    const localEmpty=window.SYNC.isEmptyState(S);
    const serverEmpty=!srv.data || window.SYNC.isEmptyState(srv.data);

    if(serverEmpty && !localEmpty) return pushNow(srv.version, 'ok');
    if(serverEmpty && localEmpty){ setM({version:srv.version, marker:marker()}); return show('ok'); }

    if(localEmpty || !localChanged()){
      window.SYNC.takeSessionBackup();
      replace(srv.data);
      setM({version:srv.version, marker:marker()});
      route();
      return show(localEmpty?'pulled':'ok');
    }
    /* both sides moved */
    if((m.version||0) === srv.version) return pushNow(srv.version, 'ok');
    serverCopy=srv; show('conflict');
  }

  async function pushNow(baseVersion, okState){
    if(inFlight){ dirty=true; return; }
    inFlight=true;
    try{
      const r=await window.REMOTE.push(S, baseVersion);
      if(r.signedOut){ show('signedout'); return; }
      if(r.tooLarge){ show('error','Progress is too large to save.'); return; }
      if(r.conflict){ serverCopy=r.server; show('conflict'); return; }
      setM({version:r.version, marker:marker()});
      show(okState||'ok');
    }catch(e){ show(navigator.onLine?'error':'offline', e.message); }
    finally{
      inFlight=false;
      if(dirty){ dirty=false; onChange(true); }
    }
  }

  /* Nothing to send is not the same as something to send. Coming back online,
     or leaving a page, used to push an unchanged copy — which spent a version
     and could collide with a device that had actually done some work. */
  function onChange(immediate){
    if(state==='off'||state==='signedout'||state==='conflict') return;
    clearTimeout(pushT);
    const go=()=>{ const m=M();
      if(m.version==null || !localChanged()) return; pushNow(m.version); };
    if(immediate) go(); else pushT=setTimeout(go, 2500);
  }
  function flush(){
    if(state==='off'||state==='signedout'||state==='conflict') return;
    const m=M(); if(m.version==null || !localChanged()) return;
    clearTimeout(pushT);
    /* keepalive lets this outlive the page so the last answers are not stranded */
    try{
      fetch('/api/state',{method:'PUT',keepalive:true,credentials:'same-origin',
        headers:{'content-type':'application/json','x-aifz':'1'},
        body:JSON.stringify({baseVersion:m.version,data:S,device:window.REMOTE.deviceName()})});
    }catch(e){}
  }

  async function takeServer(){
    if(!serverCopy) return;
    window.SYNC.takeSessionBackup();
    replace(serverCopy.data);
    setM({version:serverCopy.version, marker:marker()});
    serverCopy=null; route(); show('pulled');
  }
  async function takeLocal(){
    if(!serverCopy) return;
    const v=serverCopy.version; serverCopy=null;
    await pushNow(v,'ok');
  }

  return {boot, onChange, flush, paint, takeServer, takeLocal,
    get state(){return state;}, get detail(){return detail;},
    get server(){return serverCopy;}, get user(){return window.REMOTE&&window.REMOTE.user;},
    refresh:boot};
})();
window.ACCOUNT=ACCOUNT;

window.REFRESH_SYNC=function(){ runAutoSync(); };
function runAutoSync(){
  if(!window.SYNC)return;
  const c=window.SYNC.gh.config();
  if(!c.token){setSyncPill('off');return;}
  setSyncPill('busy','syncing…','busy');
  window.SYNC.autoSync().then(r=>{
    if(r.state==='pulled'){
      setSyncPill('ok','synced — pulled newer progress','ok');
      route();                                   // re-render with the pulled state
    }
    else if(r.state==='pushed') setSyncPill('ok','synced','ok');
    else if(r.state==='synced') setSyncPill('ok','synced','ok');
    else if(r.state==='conflict') setSyncPill('warn','this device and your gist differ — compare','warn');
    else if(r.state==='behind') setSyncPill('warn','newer progress in your gist — open to pull','warn');
    else setSyncPill('warn','sync failed — open','warn');
  }).catch(()=>setSyncPill('warn','sync failed — open','warn'));
}
/* Content first, then render — the whole app is built from it. */
function start(){
  const go=()=>{
    const p = window.CONTENT ? window.CONTENT.load() : Promise.resolve({source:'built-in'});
    p.then(()=>{ bindContent(); boot(); })
     .catch(()=>{ bindContent(); boot(); });
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',go);
  else go();
}
start();
})();
