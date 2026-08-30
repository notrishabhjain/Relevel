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

const CH=[].concat(window.PART1,window.PART2,window.PART3);
const byId={}; CH.forEach(c=>byId[c.id]=c);

/* ---------------- storage ---------------- */
const KEY='aifz2027';
let S={done:{},notes:{},grades:{},marks:{},later:{},pred:[],card:{},drill:{},sittings:[],theme:null,
  /* tracker state */
  sk:{},      // per-skill mastery {m,n,ok,last,hist,peak}
  srs:{},     // per-item schedule {ease,ivl,reps,due,seen}
  att:[],     // attempt log
  cal:[],     // calibration log {t,c,k}
  sess:[],    // session log
  ex:{},      // exercise iterations
  proc:{}     // process runs
};
try{const raw=localStorage.getItem(KEY); if(raw)S=Object.assign(S,JSON.parse(raw));}catch(e){}
let saveT;
function writeNow(){
  clearTimeout(saveT); saveT=null;
  try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
}
function save(){clearTimeout(saveT);saveT=setTimeout(writeNow,250);}
/* A debounced write loses the last answer if the tab is closed or navigated
   within the debounce window, so flush on every way out. */
addEventListener('pagehide',writeNow);
addEventListener('beforeunload',writeNow);
addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')writeNow();});
addEventListener('hashchange',writeNow);
/* views.js and engine.js read state through here */
window.STORE={get S(){return S;}, save, flush:writeNow};
function flash(node){if(!node)return;node.classList.add('show');setTimeout(()=>node.classList.remove('show'),1400);}

/* ---------------- block renderer ---------------- */
function blocks(list){
  const f=document.createDocumentFragment();
  (list||[]).forEach(b=>{
    const [k,...r]=b;
    if(k==='p')f.appendChild(h('p',{html:r[0]}));
    else if(k==='key')f.appendChild(h('div',{class:'keyline',html:r[0]}));
    else if(k==='c')f.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:r[0]}),h('p',{html:r[1]})]));
    else if(k==='l')f.appendChild(h('ul',{class:'bul'},r[0].map(i=>h('li',{html:i}))));
    else if(k==='n')f.appendChild(h('ol',{class:'num'},r[0].map(i=>h('li',{html:i}))));
    else if(k==='code')f.appendChild(h('pre',{},h('code',{text:r[0]})));
    else if(k==='x')f.appendChild(h('div',{class:'expect'},[h('div',{class:'tag',text:'expect'}),h('div',{html:r[0]})]));
    else if(k==='tb'){
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},r[0].map(c=>h('th',{html:c})))));
      t.appendChild(h('tbody',{},r[1].map(row=>h('tr',{},row.map(c=>h('td',{html:c}))))));
      f.appendChild(h('div',{class:'tblwrap'},t));
    }
  });
  return f;
}

function labBlock(key){
  const L=(window.LABS||{})[key]; if(!L)return null;
  const body=h('div',{class:'labbody'});
  const box=h('div',{class:'lab'},[
    h('div',{class:'labhead'},[h('span',{class:'k',text:L.k||'lab'}),h('h4',{text:L.title})]),body]);
  try{L.render(body);}catch(e){body.appendChild(h('p',{class:'dim',text:'Lab unavailable.'}));}
  if(L.note)body.appendChild(h('p',{class:'labnote',html:L.note}));
  return box;
}

/* ---------------- chapter page ---------------- */
function sectionHead(idx,title,time){
  return h('div',{class:'parthead'},[h('span',{class:'idx',text:idx}),h('h2',{text:title}),
    time?h('span',{class:'t',text:time}):null]);
}

function renderChapter(c){
  const w=h('div',{class:'wrap'});
  const part=window.PARTS[c.part-1];
  w.appendChild(h('header',{class:'chead'},[
    h('div',{class:'eyebrow'},[h('span',{text:'Part '+['I','II','III'][c.part-1]+' · '+part.title}),
      h('span',{class:'dot'}),h('span',{text:'~'+c.minutes+' min'}),
      h('span',{class:'dot'}),h('span',{text:'one sitting'})]),
    h('div',{class:'chnum',text:String(c.num).padStart(2,'0')}),
    h('h1',{text:c.title}),
    h('p',{class:'concept',text:c.concept})]));

  let n=1;
  // Story
  const story=h('section',{class:'part',id:'story'});
  story.appendChild(sectionHead(c.num+'.'+n++,'The Story'));
  story.appendChild(h('div',{class:'prose'},[blocks(c.story)]));
  w.appendChild(story);

  // Words
  const words=h('section',{class:'part',id:'words'});
  words.appendChild(sectionHead(c.num+'.'+n++,'Words You Now Own'));
  words.appendChild(h('dl',{class:'words'},c.words.map(([t,d])=>
    h('div',{class:'word'},[h('dt',{text:t}),h('dd',{html:d})]))));
  w.appendChild(words);

  // Hands-on
  const ho=h('section',{class:'part',id:'handson'});
  ho.appendChild(sectionHead(c.num+'.'+n++,'Hands-On','~'+Math.round(c.minutes*0.6)+' min'));
  c.handson.forEach(s=>{
    const st=h('div',{class:'step'},[h('h3',{text:s.h})]);
    st.appendChild(h('div',{class:'prose'},[blocks(s.b)]));
    ho.appendChild(st);
  });
  (c.labs||[]).forEach(k=>{const b=k==='redmap'?redMapBlock():labBlock(k);if(b)ho.appendChild(b);});
  w.appendChild(ho);

  // If something goes wrong
  if(c.wrong&&c.wrong.length){
    const sw=h('section',{class:'part',id:'wrong'});
    sw.appendChild(sectionHead(c.num+'.'+n++,'If Something Goes Wrong'));
    const t=h('table');
    t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'What you see'}),
      h('th',{text:'Most likely cause'}),h('th',{text:'Fix'})])));
    t.appendChild(h('tbody',{},c.wrong.map(r=>h('tr',{},r.map(x=>h('td',{html:x}))))));
    sw.appendChild(h('div',{class:'tblwrap'},t));
    w.appendChild(sw);
  }

  // Homework
  const hw=h('section',{class:'part',id:'homework'});
  hw.appendChild(sectionHead(c.num+'.'+n++,'Homework'));
  hw.appendChild(h('div',{class:'cards'},c.homework.map(([t,d])=>
    h('div',{class:'card'},[h('h3',{text:t}),h('p',{html:d})]))));
  hw.appendChild(notebookBlock(c,'hw','Homework notes — rough, five bullets maximum',
    'The Rough-Notes Law applies. If it looks presentable it cost too much.'));
  w.appendChild(hw);

  // Check yourself
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
      h('summary',{text:qa[0]}),h('div',{class:'ans',html:qa[1]}),gwrap]));
  });
  w.appendChild(cy);

  // Close the sitting
  const cs=h('section',{class:'part',id:'close'});
  cs.appendChild(sectionHead(c.num+'.'+n++,'Close the Sitting'));
  cs.appendChild(h('p',{class:'prose',html:'Three rough lines, then stop — even if you feel like continuing. <em>Especially</em> if you feel like continuing. That leftover energy is what brings you back next sitting.'}));
  cs.appendChild(notebookBlock(c,'close','Three lines: what confused me / what clicked / what to try next',
    'Three minutes. Then close it.'));

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
    text:'Next: '+next.num+'. '+next.title+' →'}));
  cs.appendChild(doneRow);
  const guard=h('div',{style:'margin-top:.8rem',html:sittingGuard()});
  cs.appendChild(guard);
  w.appendChild(cs);

  w.appendChild(h('div',{class:'foot'},[
    CH[CH.indexOf(c)-1]?h('a',{href:'#/ch/'+CH[CH.indexOf(c)-1].id,
      text:'← '+CH[CH.indexOf(c)-1].num+'. '+CH[CH.indexOf(c)-1].title}):h('span'),
    next?h('a',{href:'#/ch/'+next.id,text:next.num+'. '+next.title+' →'}):h('span')]));
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
    h('div',{class:'kicker',text:'Reference library · 18 chapters'}),
    h('h1',{text:'The Library'}),
    h('p',{class:'sub',html:'The knowledge base behind the tracker. You do not read it front to back — the dashboard sends you to the chapter that moves the skill you are weakest in.'}),
    h('div',{style:'display:flex;gap:.6rem;flex-wrap:wrap'},[
      h('a',{class:'chip',href:'#/',style:'padding:.5rem .9rem'},'← Dashboard'),
      h('a',{class:'chip',href:'#/setup',style:'padding:.5rem .9rem'},'Setup (once, 45 min)'),
      h('a',{class:'chip',href:'#/ch/'+(CH.find(c=>!S.done[c.id])||CH[0]).id,style:'padding:.5rem .9rem'},
        doneN?'Continue reading':'Chapter 1')])]));

  w.appendChild(h('div',{class:'meta'},[
    h('div',{},[h('span',{class:'l',text:'For'}),h('span',{class:'v',text:'Product managers, analysts, consultants, team leads'})]),
    h('div',{},[h('span',{class:'l',text:'Length'}),h('span',{class:'v',text:'18 chapters · one per sitting'})]),
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
      h('div',{class:'pn',text:'Part '+['I','II','III'][p.n-1]+' — Chapters '+chs[0].num+'–'+chs[chs.length-1].num}),
      h('h3',{text:p.title}),h('p',{text:p.blurb}),
      h('div',{class:'chips'},chs.map(c=>h('a',{class:'chip'+(S.done[c.id]?' done':''),
        href:'#/ch/'+c.id,text:c.num+'. '+c.title})))]));
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
    h('h1',{text:S2.title}),h('p',{text:S2.blurb})]));
  w.appendChild(h('div',{class:'callout'},[h('span',{class:'lbl',text:'In one sentence'}),
    h('p',{text:S2.oneline})]));
  S2.sections.forEach((s,i)=>{
    const sec=h('section',{class:'part'});
    sec.appendChild(sectionHead(String(i+1).padStart(2,'0'),s.h,s.t));
    sec.appendChild(h('div',{class:'prose'},[blocks(s.b)]));
    w.appendChild(sec);
  });
  const t=h('table');
  t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'Error'}),h('th',{text:'Likely cause'}),h('th',{text:'Fix'})])));
  t.appendChild(h('tbody',{},S2.trouble.map(r=>h('tr',{},r.map(x=>h('td',{html:x}))))));
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
        text:c.num+'. '+c.title})]),
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
          h('div',{html:d}),h('div',{class:'dim',style:'margin-top:.4rem;font-size:.82rem',
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
        h('td',{},h('strong',{text:term})),h('td',{html:d}),
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
        h('h3',{style:'flex:1',text:'Part '+['I','II','III'][p.n-1]+' — '+p.title}),
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
  r.appendChild(sec('Track',[
    ['#/','◉','Dashboard'],
    ['#/practice','▶','Practice'+(dueN?'  ('+dueN+' due)':'')],
    ['#/skills','▦','Skill Matrix'],
    ['#/analytics','◔','Analytics']]));
  r.appendChild(sec('Do',[
    ['#/exercises','✎','Exercises'],
    ['#/processes','⟳','Processes'],
    ['#/labs','◧','The Labs'],
    ['#/map','◆','Red-Mark Map'],
    ['#/ledger','∆','Prediction Ledger'],
    ['#/card','▣','System Card']]));
  r.appendChild(sec('Reference',[
    ['#/library','▤','Library — 18 chapters'],['#/setup','A','Setup'],
    ['#/vendor','⌗','Vendor Deck'],['#/glossary','∎','Glossary'],
    ['#/notebook','✐','Notebook'],['#/later','⋯','LATER Page']]));
}

function updateProgress(){
  const m=window.ENG?window.ENG.overall(S):0;
  const tested=window.ENG?window.SKILLS.filter(s=>window.ENG.skillState(S,s.id).n>0).length:0;
  const b=$('.brand .bar i'),p=$('.brand .pct');
  if(b)b.style.width=m+'%';
  if(p)p.textContent=Math.round(m)+'% mastery · '+tested+'/'+window.SKILLS.length+' skills measured';
}

const V=()=>window.VIEWS;
const ROUTES={'':()=>V().dashboard(),'library':pageHome,
  'skills':()=>V().skills(),'analytics':()=>V().analytics(),
  'exercises':()=>V().exercises(),'processes':()=>V().processes(),
  'setup':pageSetup,'notebook':pageNotebook,'ledger':pageLedger,
  'later':pageLater,'glossary':pageGlossary,'vendor':pageVendor,'map':pageMap,'card':pageCard,
  'progress':pageProgress,'labs':pageLabs};
const CRUMB={'':'Dashboard','library':'Library','skills':'Skill Matrix','analytics':'Analytics',
  'exercises':'Exercises','processes':'Processes','practice':'Practice','skill':'Skill'};

function route(){
  const hash=location.hash.replace(/^#\/?/,'').split('#')[0];
  const parts=hash.split('/').filter(Boolean);
  const main=$('#main');main.innerHTML='';
  let node,crumb='Dashboard';
  if(parts[0]==='ch'&&byId[parts[1]]){
    const c=byId[parts[1]];node=renderChapter(c);
    crumb='Part '+['I','II','III'][c.part-1]+' · Chapter '+c.num;
    document.title=c.num+'. '+c.title+' — AI From Zero';
  } else if(parts[0]==='practice'){
    node = parts[1] ? V().practice(parts[1],parts[2]) : V().practiceMenu();
    crumb='Practice'+(parts[1]?' · '+parts[1]:'');
    document.title='Practice — AI From Zero';
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
    {k:'page',t:'Library — 18 chapters',h:'#/library'},
    {k:'page',t:'Setup',h:'#/setup'},
    {k:'page',t:'The Labs',h:'#/labs'},{k:'page',t:'Red-Mark Map',h:'#/map'},
    {k:'page',t:'Prediction Ledger',h:'#/ledger'},{k:'page',t:'Notebook',h:'#/notebook'},
    {k:'page',t:'System Card',h:'#/card'},{k:'page',t:'Vendor Deck',h:'#/vendor'},
    {k:'page',t:'Glossary',h:'#/glossary'},{k:'page',t:'LATER Page',h:'#/later'},
    {k:'page',t:'Where You Are',h:'#/progress'});
  CH.forEach(c=>{
    idx.push({k:'ch '+c.num,t:c.title,d:c.concept,h:'#/ch/'+c.id});
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
let IDX=null,palCur=0,palItems=[];
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

/* ---------------- boot ---------------- */
function boot(){
  document.body.appendChild(h('div',{class:'shell'},[
    h('nav',{class:'rail',id:'rail'}),
    h('div',{},[
      h('div',{class:'tbar'},[
        h('button',{class:'sm railtoggle',onclick:()=>$('#rail').classList.toggle('open')},'☰'),
        h('span',{class:'crumb',id:'crumb'}),h('span',{class:'sp'}),
        h('button',{class:'sm',onclick:openPal},'Search  ⌘K'),
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
  window.addEventListener('hashchange',route);
  route();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
