/* Interactive labs. Everything here runs offline — no API key, no network.
   Simulations are shaped to reproduce the *behaviour* each chapter teaches,
   so a reader without credits still meets the failure with their own hands. */

(function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>e.appendChild(typeof x==='string'?document.createTextNode(x):x));
  return e;};
const $=(s,r)=>(r||document).querySelector(s);
const fmt=(n,d)=>Number(n).toFixed(d===undefined?2:d);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

function ctl(label,node){return h('div',{},[h('label',{text:label}),node]);}
function slider(min,max,val,step,oninput){
  const i=h('input',{type:'range',min,max,step:step||1,value:val});
  i.addEventListener('input',()=>oninput(parseFloat(i.value)));return i;}
function stats(items){
  return h('div',{class:'stats'},items.map(([l,v,cls,s])=>
    h('div',{class:'stat'},[h('span',{class:'l',text:l}),
      h('span',{class:'v '+(cls||''),text:v}),s?h('span',{class:'s',text:s}):h('span')])));}
function seeded(s){let x=s;return()=>{x=(x*1103515245+12345)&0x7fffffff;return x/0x7fffffff;};}

/* ---------------- 1. Tokenizer & receipt ---------------- */
function tokenize(text){
  // Approximation of BPE behaviour: common short words stay whole,
  // long/rare words split. Good enough to make the ¾-of-a-word rule visible.
  const out=[];
  text.split(/(\s+)/).forEach(w=>{
    if(!w.trim()){if(w)out.push({t:w,ws:true});return;}
    const lead=w.match(/^[^\w]*/)[0], tail=w.match(/[^\w]*$/)[0];
    const core=w.slice(lead.length,w.length-tail.length||undefined);
    if(lead)out.push({t:lead});
    if(core.length<=4)out.push({t:core});
    else{let i=0;const n=core.length<=7?2:Math.ceil(core.length/4);
      const size=Math.ceil(core.length/n);
      while(i<core.length){out.push({t:core.slice(i,i+size),sub:i>0});i+=size;}}
    if(tail)out.push({t:tail});
  });
  return out.filter(x=>!x.ws&&x.t!=='');
}
const LABS={};

LABS.tokenizer={title:'The receipt, read live',k:'lab 1.1',
  note:'A close approximation of how models split text. The exact boundaries vary by model; the ratio does not. Notice which words survive whole and which shatter — and try a sentence in a second language.',
  render(el){
    const ta=h('textarea',{rows:3},'The reimbursement of approved claim amounts shall be effected within sixty days.');
    const viz=h('div',{class:'toks'}), out=h('div');
    const rate=h('input',{type:'number',value:'0.20',step:'0.05',min:'0'});
    const rout=h('input',{type:'number',value:'0.60',step:'0.05',min:'0'});
    const outLen=h('input',{type:'number',value:'220',min:'0',step:'10'});
    function run(){
      const toks=tokenize(ta.value);
      viz.innerHTML='';
      toks.slice(0,220).forEach(t=>viz.appendChild(h('span',{class:'tok'+(t.sub?' alt':''),text:t.t})));
      if(toks.length>220)viz.appendChild(h('span',{class:'tok dim',text:'… +'+(toks.length-220)}));
      const words=ta.value.trim().split(/\s+/).filter(Boolean).length;
      const ci=parseFloat(rate.value)||0, co=parseFloat(rout.value)||0;
      const ol=parseInt(outLen.value)||0;
      const per=(toks.length/1e6)*ci+(ol/1e6)*co;
      out.innerHTML='';
      out.appendChild(stats([
        ['tokens in',toks.length],
        ['words',words],
        ['tokens/word',words?fmt(toks.length/words):'—','',
          words&&toks.length/words>1.45?'above the 1.33 rule':'near the 1.33 rule'],
        ['cost / query','₹'+fmt(per,5)],
        ['at 10k queries','₹'+fmt(per*10000,0),'red','per month']
      ]));
    }
    ta.addEventListener('input',run);[rate,rout,outLen].forEach(i=>i.addEventListener('input',run));
    el.append(ta,viz,h('div',{class:'ctl'},[
      ctl('input rate / 1M',rate),ctl('output rate / 1M',rout),ctl('answer tokens',outLen)]),out);
    run();
  }};

LABS.receipt={title:'Why message 50 costs more than message 1',k:'lab 1.2',
  note:'The stage trick, metered. Each turn re-sends everything before it, so cost grows with the square of the conversation — not with the number of messages.',
  render(el){
    const n=h('span',{class:'readout',text:'30'}), per=h('span',{class:'readout',text:'180'});
    const cv=h('canvas',{height:'150'}); cv.style.width='100%';
    const out=h('div');
    let N=30,P=180;
    function draw(){
      const w=cv.clientWidth||600; cv.width=w*2; cv.height=300; cv.style.height='150px';
      const g=cv.getContext('2d'); g.scale(2,2); g.clearRect(0,0,w,150);
      const cs=getComputedStyle(document.documentElement);
      const red=cs.getPropertyValue('--red').trim(), rule=cs.getPropertyValue('--rule').trim();
      const mut=cs.getPropertyValue('--muted').trim();
      let cum=0; const pts=[];
      for(let i=1;i<=N;i++){cum+=i*P;pts.push(cum);}
      const max=pts[pts.length-1]||1;
      g.strokeStyle=rule;g.lineWidth=1;
      for(let i=0;i<=4;i++){const y=140-i*32;g.beginPath();g.moveTo(28,y);g.lineTo(w-4,y);g.stroke();}
      g.strokeStyle=red;g.lineWidth=2;g.beginPath();
      pts.forEach((p,i)=>{const x=28+(i/(N-1||1))*(w-34),y=140-(p/max)*128;
        i?g.lineTo(x,y):g.moveTo(x,y);});g.stroke();
      g.fillStyle=mut;g.font='9px ui-monospace,monospace';
      g.fillText('cumulative tokens',30,12);
      g.fillText('turn '+N,w-46,150);
      out.innerHTML='';
      out.appendChild(stats([
        ['tokens, turn 1',P],
        ['tokens, turn '+N,N*P],
        ['conversation total',(pts[pts.length-1]||0).toLocaleString()],
        ['vs. flat billing','×'+fmt((pts[pts.length-1]||0)/(N*P)),'red','the compounding']
      ]));
    }
    el.append(h('div',{class:'ctl'},[
      ctl('messages',(()=>{const s=slider(2,60,30,1,v=>{N=v;n.textContent=v;draw();});
        return h('div',{},[s,n]);})()),
      ctl('tokens per message',(()=>{const s=slider(40,600,180,20,v=>{P=v;per.textContent=v;draw();});
        return h('div',{},[s,per]);})())
    ]),cv,out);
    setTimeout(draw,30); window.addEventListener('resize',()=>draw());
  }};

/* ---------------- 2. Temperature ---------------- */
LABS.temperature={title:'The variety dial',k:'lab 2.1',
  note:'Real sampling mathematics on a fixed candidate set. At 0 the top continuation wins every time; raise it and the distribution flattens until the unlikely becomes routine.',
  render(el){
    const CAND=[['Move More. Live Better.',3.2],['Fit for Work, Fit for Life',2.6],
      ['Your Health, Our Priority',2.1],['Step Up Every Day',1.7],['Stronger Together at Work',1.2],
      ['Sweat Equity',0.5],['The Corridor Marathon',0.1]];
    const t=h('span',{class:'readout',text:'0.0'}), bars=h('div'), samp=h('div');
    let T=0, rnd=seeded(7);
    function probs(){
      const tt=Math.max(T,0.001);
      // subtract the max logit before exponentiating, or tt→0 overflows to Infinity
      const mx=Math.max.apply(null,CAND.map(c=>c[1]));
      const ex=CAND.map(c=>Math.exp((c[1]-mx)/tt)); const s=ex.reduce((a,b)=>a+b,0);
      return ex.map(e=>e/s);
    }
    function draw(){
      const p=probs(); bars.innerHTML='';
      CAND.forEach((c,i)=>{
        bars.appendChild(h('div',{style:'display:flex;gap:.6rem;align-items:center;margin:.25rem 0'},[
          h('span',{style:'flex:1;font-size:.83rem',text:c[0]}),
          h('span',{style:'width:120px;height:7px;background:var(--sunk);border-radius:2px;overflow:hidden'},
            [h('i',{style:`display:block;height:100%;width:${(p[i]*100).toFixed(1)}%;background:var(--red)`})]),
          h('span',{class:'readout dim',style:'font-size:.72rem;width:3.2em;text-align:right',
            text:(p[i]*100).toFixed(1)+'%'})]));
      });
      const p2=probs(); samp.innerHTML='';
      samp.appendChild(h('label',{text:'three runs at this setting'}));
      for(let r=0;r<3;r++){
        let x=rnd(),acc=0,pick=CAND[0][0];
        for(let i=0;i<CAND.length;i++){acc+=p2[i];if(x<=acc){pick=CAND[i][0];break;}}
        samp.appendChild(h('div',{class:'mono',style:'font-size:.8rem;padding:.15rem 0',text:'→ '+pick}));
      }
    }
    el.append(h('div',{class:'ctl'},[ctl('temperature',
      (()=>{const s=slider(0,1.2,0,0.05,v=>{T=v;t.textContent=fmt(v,2);draw();});
        return h('div',{},[s,t]);})()),
      h('div',{style:'flex:0'},[h('label',{text:' '}),
        h('button',{class:'sm',onclick:()=>{rnd=seeded(Math.floor(Math.random()*9999));draw();}},'Re-run')])
    ]),bars,h('hr',{class:'hr',style:'margin:1rem 0'}),samp);
    draw();
  }};

/* ---------------- 3. Chunker ---------------- */
/* A back-reference anywhere near the opening of a chunk means the chunk depends on
   text that may no longer travel with it. Tested against the opening clause only — a back-reference later in a chunk
   usually has its antecedent inside the same chunk. */
const ORPHAN=/(the aforesaid|the foregoing|notwithstanding|in continuation|as stated above|the same shall|thereof|therein|hereinabove|said (amount|limit|clause|section)|such (cases|requests|amount)|accordingly|as mentioned)/i;
LABS.chunker={title:'Scissors, with a damage report',k:'lab 3.1',
  note:'Paste your own document. The orphan test flags chunks opening with a back-reference; the boundary test flags chunks that begin or end mid-sentence. These are the two injuries Chapter 3 asks you to hunt by hand.',
  render(el){
    const DEF=`4.1 Reimbursement of Travel Expenses. Employees shall be reimbursed for expenses incurred during authorised business travel. The maximum claimable amount for domestic travel is INR 25,000 per trip.\n\n4.2 Exceptions. Notwithstanding the foregoing, the aforesaid limit shall not apply where prior written approval has been obtained from the Head of Department. In such cases the limit shall be INR 60,000.\n\n4.3 Timelines. Disbursement of approved claim amounts shall be effected within sixty days of submission of a complete claim. Incomplete claims shall be returned within ten working days.\n\n5.1 Equipment. Requests for equipment exceeding INR 40,000 require procurement review. Such requests shall be submitted through the standard requisition form.`;
    const ta=h('textarea',{rows:6},DEF);
    const mode=h('select',{},[h('option',{value:'fixed'},'Fixed size'),
      h('option',{value:'semantic'},'Semantic (split on structure)')]);
    const sz=h('span',{class:'readout',text:'30'}), ov=h('span',{class:'readout',text:'0'});
    const out=h('div'), rep=h('div');
    let S=30,O=0;
    function chunk(){
      const txt=ta.value;
      if(mode.value==='semantic')
        return txt.split(/\n\s*\n/).flatMap(b=>b.split(/(?=\n?\s*\d+\.\d+\s)/))
                  .map(s=>s.trim()).filter(Boolean);
      const w=txt.split(/\s+/).filter(Boolean); const out=[];
      const stepSz=Math.max(1,S-O);
      for(let i=0;i<w.length;i+=stepSz){out.push(w.slice(i,i+S).join(' '));if(i+S>=w.length)break;}
      return out;
    }
    function run(){
      const cs=chunk(); out.innerHTML=''; let orph=0,brk=0;
      cs.forEach((c,i)=>{
        const isOrph=ORPHAN.test(c.slice(0,50));
        const startsMid=!/^\s*(\d|[A-Z"“(])/.test(c);
        const endsMid=!/[.:;!?]["”)]?\s*$/.test(c.trim());
        if(isOrph)orph++; if(startsMid||endsMid)brk++;
        const tags=[];
        if(isOrph)tags.push(h('span',{class:'pill red',text:'orphan'}));
        if(startsMid)tags.push(h('span',{class:'pill red',text:'starts mid'}));
        if(endsMid)tags.push(h('span',{class:'pill red',text:'ends mid'}));
        if(!tags.length)tags.push(h('span',{class:'pill ok',text:'intact'}));
        out.appendChild(h('div',{class:'card',style:'padding:.6rem .8rem'},[
          h('div',{style:'display:flex;gap:.5rem;align-items:center;margin-bottom:.3rem'},
            [h('span',{class:'mono dim',style:'font-size:.65rem',text:'chunk '+i}),...tags]),
          h('div',{style:'font-size:.82rem;line-height:1.5;color:var(--ink-2)',
            text:c.length>230?c.slice(0,230)+'…':c})]));
      });
      rep.innerHTML='';
      rep.appendChild(stats([['chunks',cs.length],
        ['orphans',orph,orph?'red':'ok'],
        ['boundary breaks',brk,brk?'red':'ok'],
        ['avg words',cs.length?Math.round(cs.reduce((a,c)=>a+c.split(/\s+/).length,0)/cs.length):0]]));
    }
    ta.addEventListener('input',run); mode.addEventListener('change',run);
    el.append(ta,h('div',{class:'ctl'},[
      ctl('method',mode),
      ctl('chunk size (words)',(()=>{const s=slider(15,120,30,5,v=>{S=v;sz.textContent=v;run();});
        return h('div',{},[s,sz]);})()),
      ctl('overlap (words)',(()=>{const s=slider(0,40,0,5,v=>{O=v;ov.textContent=v;run();});
        return h('div',{},[s,ov]);})())
    ]),rep,h('div',{class:'cards'},[out]));
    run();
  }};

/* ---------------- 5. Meaning map ---------------- */
const MAPTERMS=[
  ['contract',[.82,.71]],['agreement',[.86,.66]],['MoU',[.78,.61]],['undertaking',[.74,.70]],
  ['reimbursement',[.24,.79]],['disbursement of approved amounts',[.29,.83]],
  ['when do I get my money back?',[.20,.74]],['refund',[.27,.72]],
  ['termination for convenience',[.66,.24]],['cancelling early',[.60,.20]],
  ['notice period',[.72,.30]],
  ['sandwich',[.10,.14]],['cricket',[.16,.08]],['monsoon',[.06,.22]],
  ['clause 4.2',[.90,.44]],['section 7(b)',[.93,.40]]
];
LABS.meaningmap={title:'Meaning as geometry',k:'lab 5.1',
  note:'A two-dimensional stand-in for a 1024-dimensional map, with the neighbourhoods placed to match what an embedding model actually produces. Pick any two terms; the cosine is computed live, exactly as in the chapter\'s one line of code.',
  render(el){
    const cv=h('canvas'); cv.style.width='100%'; cv.style.cursor='crosshair';
    const a=h('select'),b=h('select'); const out=h('div');
    MAPTERMS.forEach((t,i)=>{a.appendChild(h('option',{value:i},t[0]));
      b.appendChild(h('option',{value:i},t[0]));});
    a.value=6;b.value=5;
    function cos(p,q){const d=p[0]*q[0]+p[1]*q[1];
      return d/(Math.hypot(p[0],p[1])*Math.hypot(q[0],q[1]));}
    function draw(){
      const w=cv.clientWidth||600,ht=340; cv.width=w*2;cv.height=ht*2;cv.style.height=ht+'px';
      const g=cv.getContext('2d');g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,w,ht);
      const cs=getComputedStyle(document.documentElement);
      const red=cs.getPropertyValue('--red').trim(),rule=cs.getPropertyValue('--rule').trim(),
            ink=cs.getPropertyValue('--ink').trim(),mut=cs.getPropertyValue('--muted').trim();
      const X=v=>18+v*(w-40),Y=v=>ht-24-v*(ht-48);
      g.strokeStyle=rule;g.lineWidth=1;
      g.beginPath();g.moveTo(X(0),Y(0));g.lineTo(X(1),Y(0));g.moveTo(X(0),Y(0));g.lineTo(X(0),Y(1));g.stroke();
      const ai=+a.value,bi=+b.value;
      // arrows from origin for the two selected
      [[ai,red],[bi,red]].forEach(([i,c])=>{
        g.strokeStyle=c;g.lineWidth=1.5;g.globalAlpha=.55;g.beginPath();
        g.moveTo(X(0),Y(0));g.lineTo(X(MAPTERMS[i][1][0]),Y(MAPTERMS[i][1][1]));g.stroke();g.globalAlpha=1;});
      MAPTERMS.forEach((t,i)=>{
        const sel=i===ai||i===bi;
        g.fillStyle=sel?red:mut;
        g.beginPath();g.arc(X(t[1][0]),Y(t[1][1]),sel?4.5:2.8,0,7);g.fill();
        g.fillStyle=sel?ink:mut;g.font=(sel?'600 ':'')+'10px system-ui,sans-serif';
        const lbl=t[0].length>26?t[0].slice(0,24)+'…':t[0];
        const tw=g.measureText(lbl).width;
        let lx=X(t[1][0])+7; if(lx+tw>w-4)lx=X(t[1][0])-tw-7;
        g.fillText(lbl,lx,Y(t[1][1])+3.5);
      });
      const c=cos(MAPTERMS[ai][1],MAPTERMS[bi][1]);
      out.innerHTML='';
      out.appendChild(stats([['cosine similarity',fmt(c,3),c>.9?'ok':(c<.6?'red':''),
        c>.9?'same neighbourhood':(c<.6?'distant suburb':'related')]]));
    }
    a.addEventListener('change',draw);b.addEventListener('change',draw);
    el.append(h('div',{class:'ctl'},[ctl('text A',a),ctl('text B',b)]),cv,out);
    setTimeout(draw,30);window.addEventListener('resize',draw);
  }};

/* ---------------- 6. Precision / recall dial ---------------- */
const TOYQ=[
  {q:'reimbursement timeline',rel:[2,7]},{q:'travel limit',rel:[0]},
  {q:'approval exception',rel:[1]},{q:'equipment threshold',rel:[9]},
  {q:'incomplete claim handling',rel:[7]},{q:'who approves overruns',rel:[1,3]},
  {q:'when do I get money back',rel:[2]},{q:'procurement review trigger',rel:[9]},
  {q:'notice for cancellation',rel:[5]}
];
// simulated ranking: correct chunks appear at varying depths
const RANKS=[[1,4],[1],[2],[3],[6],[1,8],[4],[2],[7]];
LABS.prdial={title:'The trade-off, under your own hand',k:'lab 6.1',
  note:'Nine answerable questions with the correct chunks planted at realistic depths. Move k and watch recall climb while precision — and your bill — move the other way. This is the most-cited chart in applied AI, produced in one slider.',
  render(el){
    const kk=h('span',{class:'readout',text:'3'}); const out=h('div'),tbl=h('div');
    let K=3;
    function run(){
      let hits=0,rel=0,fetched=0;
      const rows=[];
      TOYQ.forEach((q,i)=>{
        const inTop=RANKS[i].filter(r=>r<=K);
        if(inTop.length)hits++;
        rel+=inTop.length; fetched+=K;
        rows.push([q.q,RANKS[i].join(', '),inTop.length?'✓':'—']);
      });
      const recall=hits/TOYQ.length, prec=rel/fetched;
      out.innerHTML='';
      out.appendChild(stats([
        ['k',K],
        ['recall-style',hits+'/9',recall>=.78?'ok':'red',(recall*100).toFixed(0)+'%'],
        ['precision-style',rel+'/'+fetched,prec>=.35?'ok':'red',(prec*100).toFixed(0)+'%'],
        ['token cost','×'+K,'red','vs k=1, forever']
      ]));
      tbl.innerHTML='';
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'question'}),
        h('th',{text:'correct chunk at rank'}),h('th',{text:'in top-k'})])));
      const tb=h('tbody');
      rows.forEach(r=>tb.appendChild(h('tr',{},[h('td',{text:r[0]}),
        h('td',{class:'num',text:r[1]}),
        h('td',{html:r[2]==='✓'?'<span style="color:var(--verified)">✓</span>'
          :'<span style="color:var(--red)">—</span>'})])));
      t.appendChild(tb); tbl.appendChild(h('div',{class:'tblwrap'},t));
    }
    el.append(h('div',{class:'ctl'},[ctl('top-k',
      (()=>{const s=slider(1,10,3,1,v=>{K=v;kk.textContent=v;run();});return h('div',{},[s,kk]);})())]),
      out,tbl);
    run();
  }};

/* ---------------- 8. Schema trap ---------------- */
LABS.schema={title:'The trap you build yourself',k:'lab 8.1',
  note:'Twenty simulated extractions against a document that contains no amount. Watch the invention rate respond to one schema decision — whether the model has a legal way to say "not present".',
  render(el){
    const nullable=h('input',{type:'checkbox'}), refusal=h('input',{type:'checkbox'});
    const constrained=h('input',{type:'checkbox',checked:'checked'});
    const out=h('div'),log=h('div');
    function run(){
      const rnd=seeded(41); const rows=[];
      let invented=0,parsefail=0,refused=0;
      for(let i=0;i<20;i++){
        let r;
        if(!constrained.checked&&rnd()<0.22){r={k:'parse',v:'```json\\n{…'};parsefail++;}
        else if(nullable.checked||refusal.checked){
          if(rnd()<0.08&&!refusal.checked){r={k:'inv',v:'amount: 42000'};invented++;}
          else{r={k:'ok',v:refusal.checked?'status: insufficient_evidence':'amount: null'};refused++;}
        } else {
          const amt=[42000,35000,25000,40000][Math.floor(rnd()*4)];
          r={k:'inv',v:'amount: '+amt};invented++;
        }
        rows.push(r);
      }
      out.innerHTML='';
      out.appendChild(stats([
        ['invented values',invented+'/20',invented?'red':'ok'],
        ['parse failures',parsefail+'/20',parsefail?'red':'ok'],
        ['honest refusals',refused+'/20',refused?'ok':''],
        ['schema safe',invented+parsefail===0?'yes':'no',invented+parsefail?'red':'ok']
      ]));
      log.innerHTML='';
      log.appendChild(h('div',{class:'toks'},rows.map(r=>
        h('span',{class:'tok'+(r.k==='ok'?'':' alt'),text:r.v}))));
    }
    [nullable,refusal,constrained].forEach(c=>c.addEventListener('change',run));
    const cb=(n,l)=>h('label',{style:'display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:.85rem;color:var(--ink)'},
      [n,document.createTextNode(l)]);
    el.append(h('div',{style:'display:grid;gap:.45rem;margin-bottom:1rem'},[
      cb(constrained,'Constrained decoding (schema enforced by the provider)'),
      cb(nullable,'amount is nullable'),
      cb(refusal,'status enum includes insufficient_evidence')]),out,log);
    run();
  }};

/* ---------------- 9. Agent loop ---------------- */
LABS.agentloop={title:'Step through the loop',k:'lab 9.1',
  note:'The whole of agency: model asks, your code runs, result goes back. Break one thing at a time and watch which failure you get — including the one that matters most, where the agent narrates a success that never happened.',
  render(el){
    const vague=h('input',{type:'checkbox'}), fail=h('input',{type:'checkbox'});
    const nobudget=h('input',{type:'checkbox'});
    const out=h('div'),trace=h('div');
    function run(){
      const steps=[]; let status='ok',tokens=0,base=420;
      const push=(s,t,d)=>{tokens+=base+steps.length*180;steps.push([s,t,d]);};
      if(vague.checked){
        push('1','get_exchange_rate({"frm":"equipment","to":"INR"})','→ {"rate": null}');
        push('2','get_exchange_rate({"frm":"USD","to":"policy"})','→ {"rate": null}');
        push('3','final','"I was unable to determine the limit."');
        status='wrong-tool';
      } else if(fail.checked){
        push('1','get_exchange_rate({"frm":"USD","to":"INR"})','→ {"error":"service unavailable"}');
        push('2','get_policy_limit({"category":"equipment"})','→ {"limit": 60000}');
        push('3','final','"USD 300 is approximately INR 26,460 — within the INR 60,000 limit."');
        status='narrated';
      } else if(nobudget.checked){
        for(let i=1;i<=12;i++)
          push(String(i),'get_policy_limit({"category":"interstellar travel"})','→ {"limit": null}');
        push('…','budget would have stopped this at step 5','runaway');
        status='runaway';
      } else {
        push('1','get_exchange_rate({"frm":"USD","to":"INR"})','→ {"rate": 88.2}');
        push('2','get_policy_limit({"category":"equipment"})','→ {"limit": 60000}');
        push('3','final','"USD 300 = INR 26,460, within the INR 60,000 equipment limit."');
      }
      trace.innerHTML='';
      steps.forEach(([s,t,d])=>trace.appendChild(
        h('div',{class:'mark'+(status!=='ok'&&s==='3'?' got':'')},[
          h('span',{class:'mc',text:'step '+s}),
          h('span',{class:'mt'},[h('span',{class:'mono',style:'font-size:.78rem',text:t}),
            h('div',{class:'dim',style:'font-size:.78rem;margin-top:.15rem',text:d})])])));
      const verdicts={ok:['sound','ok'],'wrong-tool':['wrong tool chosen','red'],
        narrated:['SUCCESS NARRATED OVER A TOOL ERROR','red'],runaway:['unbounded loop','red']};
      out.innerHTML='';
      out.appendChild(stats([['steps',steps.length],
        ['tokens (est.)',tokens.toLocaleString(),tokens>6000?'red':''],
        ['vs. one call','×'+fmt(tokens/base,1),'red'],
        ['outcome',verdicts[status][0],verdicts[status][1]]]));
    }
    [vague,fail,nobudget].forEach(c=>c.addEventListener('change',()=>{
      if(c.checked)[vague,fail,nobudget].forEach(o=>{if(o!==c)o.checked=false;});run();}));
    const cb=(n,l)=>h('label',{style:'display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:.85rem;color:var(--ink)'},
      [n,document.createTextNode(l)]);
    el.append(h('div',{style:'display:grid;gap:.45rem;margin-bottom:1rem'},[
      cb(vague,'Vague tool description'),cb(fail,'Rate tool returns an error'),
      cb(nobudget,'No step budget, unanswerable question')]),out,
      h('div',{class:'marks'},[trace]));
    run();
  }};

/* ---------------- 10. Context rot + cache ---------------- */
LABS.contextrot={title:'Needle in your haystack',k:'lab 10.1',
  note:'Recovery rate by depth, following the curve these models actually exhibit: strong at the edges, sagging in the middle, and worsening as the context grows. Note that the ceiling is never reached — degradation arrives long before capacity does.',
  render(el){
    const cv=h('canvas');cv.style.width='100%';
    const ln=h('span',{class:'readout',text:'32k'}); const out=h('div');
    let L=32;
    const recovery=(depth,len)=>{
      const stress=clamp((len-4)/200,0,1);
      const mid=1-Math.pow(Math.abs(depth-0.5)*2,1.7);       // 1 at middle, 0 at edges
      return clamp(1-stress*(0.15+0.62*mid),0,1);
    };
    function draw(){
      const w=cv.clientWidth||600,ht=190;cv.width=w*2;cv.height=ht*2;cv.style.height=ht+'px';
      const g=cv.getContext('2d');g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,w,ht);
      const cs=getComputedStyle(document.documentElement);
      const red=cs.getPropertyValue('--red').trim(),rule=cs.getPropertyValue('--rule').trim(),
            mut=cs.getPropertyValue('--muted').trim(),ok=cs.getPropertyValue('--verified').trim();
      const X=d=>34+d*(w-46),Y=v=>ht-24-v*(ht-46);
      g.strokeStyle=rule;g.lineWidth=1;
      [0,.25,.5,.75,1].forEach(v=>{g.beginPath();g.moveTo(34,Y(v));g.lineTo(w-8,Y(v));g.stroke();
        g.fillStyle=mut;g.font='9px ui-monospace,monospace';g.fillText((v*100)+'%',4,Y(v)+3);});
      g.strokeStyle=red;g.lineWidth=2;g.beginPath();
      for(let i=0;i<=100;i++){const d=i/100,y=Y(recovery(d,L));i?g.lineTo(X(d),y):g.moveTo(X(d),y);}
      g.stroke();
      [[.05,'5%'],[.5,'50%'],[.95,'95%']].forEach(([d,lbl])=>{
        const v=recovery(d,L);g.fillStyle=v>.8?ok:red;
        g.beginPath();g.arc(X(d),Y(v),4,0,7);g.fill();
        g.fillStyle=mut;g.font='9px ui-monospace,monospace';g.fillText(lbl,X(d)-8,ht-8);});
      out.innerHTML='';
      out.appendChild(stats([
        ['at 5% depth',(recovery(.05,L)*100).toFixed(0)+'%',recovery(.05,L)>.8?'ok':'red'],
        ['at 50% depth',(recovery(.5,L)*100).toFixed(0)+'%',recovery(.5,L)>.8?'ok':'red','the middle'],
        ['at 95% depth',(recovery(.95,L)*100).toFixed(0)+'%',recovery(.95,L)>.8?'ok':'red'],
        ['context used',L+'k','', 'ceiling not reached']]));
    }
    el.append(h('div',{class:'ctl'},[ctl('context length',
      (()=>{const s=slider(4,200,32,4,v=>{L=v;ln.textContent=v+'k';draw();});
        return h('div',{},[s,ln]);})())]),cv,out);
    setTimeout(draw,30);window.addEventListener('resize',draw);
  }};

LABS.cache={title:'Stable first, volatile last',k:'lab 10.2',
  note:'The same tokens, the same answer, two orderings. Only one of them is cacheable — which makes envelope order a cost decision rather than a stylistic one.',
  render(el){
    const order=h('select',{},[h('option',{value:'good'},'Stable prefix first (system, docs, then question)'),
      h('option',{value:'bad'},'Question first, then documents')]);
    const q=h('span',{class:'readout',text:'10000'}); const out=h('div');
    let Q=10000;
    function run(){
      const stable=3200,vol=280,outT=220,rIn=0.20,rOut=0.60,disc=0.10;
      const good=order.value==='good';
      const billedIn=good?stable*disc+vol:stable+vol;
      const per=(billedIn/1e6)*rIn+(outT/1e6)*rOut;
      const full=((stable+vol)/1e6)*rIn+(outT/1e6)*rOut;
      out.innerHTML='';
      out.appendChild(stats([
        ['billed input tokens',Math.round(billedIn).toLocaleString()],
        ['cost / query','₹'+fmt(per,5)],
        ['monthly at '+Q.toLocaleString(),'₹'+fmt(per*Q,0),good?'ok':'red'],
        ['saved vs uncached','₹'+fmt((full-per)*Q,0),good?'ok':'','per month']]));
    }
    order.addEventListener('change',run);
    el.append(h('div',{class:'ctl'},[ctl('envelope order',order),
      ctl('queries / month',(()=>{const s=slider(1000,100000,10000,1000,v=>{Q=v;q.textContent=v;run();});
        return h('div',{},[s,q]);})())]),out);
    run();
  }};

/* ---------------- 11. Reasoning 2x2 ---------------- */
LABS.reasoning={title:'What thought costs',k:'lab 11.1',
  note:'Two task types, two settings. The asymmetry is the entire chapter: on lookups you pay several times over for nothing, and on genuinely multi-step work you occasionally buy the only correct answer available.',
  render(el){
    const task=h('select',{},[h('option',{value:'lookup'},'Lookup — "what is the travel limit?"'),
      h('option',{value:'multi'},'Multi-step — eligibility across three conditions'),
      h('option',{value:'bad'},'Multi-step, but retrieval returned the wrong chunk')]);
    const eff=h('select',{},[h('option',{value:'off'},'Fast model, no reasoning'),
      h('option',{value:'low'},'Reasoning — low effort'),h('option',{value:'high'},'Reasoning — high effort')]);
    const out=h('div'),note=h('div');
    const M={lookup:{off:[0,180,1.1,'correct'],low:[640,190,4.2,'correct'],high:[2100,205,11.4,'correct']},
             multi:{off:[0,240,1.4,'wrong'],low:[980,260,5.1,'correct'],high:[3400,280,15.2,'correct']},
             bad:{off:[0,230,1.3,'wrong'],low:[1020,300,5.4,'wrong'],high:[3600,410,16.1,'wrong']}};
    function run(){
      const [think,outT,secs,verdict]=M[task.value][eff.value];
      const cost=((1800/1e6)*0.20)+(((think+outT)/1e6)*0.60);
      out.innerHTML='';
      out.appendChild(stats([
        ['thinking tokens',think.toLocaleString(),think>2000?'red':''],
        ['answer tokens',outT],
        ['latency',secs+'s',secs>8?'red':(secs<2?'ok':'')],
        ['cost / query','₹'+fmt(cost,5),think>2000?'red':''],
        ['verdict',verdict,verdict==='correct'?'ok':'red']]));
      const msgs={
        lookup:eff.value==='off'?'Correct, fast, cheap. This is most of your production traffic.'
          :'Identical answer, several times the tokens and latency. This is the waste cell of the 2×2.',
        multi:eff.value==='off'?'The fast model fails a genuinely multi-step task. This is the one cell that justifies the spend.'
          :'Correct — and worth paying for. Note the latency: unusable in chat, fine in batch.',
        bad:'Wrong at every setting, and <strong>longer and more persuasive</strong> at high effort. Reasoning cannot manufacture evidence — this is a retrieval problem wearing a thinking costume.'};
      note.innerHTML='<p class="labnote">'+msgs[task.value]+'</p>';
    }
    task.addEventListener('change',run);eff.addEventListener('change',run);
    el.append(h('div',{class:'ctl'},[ctl('task',task),ctl('setting',eff)]),out,note);
    run();
  }};

/* ---------------- 12. Rank fusion ---------------- */
LABS.fusion={title:'Two scoreboards, one list',k:'lab 12.1',
  note:'Reciprocal rank fusion on a live example. Try the exact-string query, where semantic search fumbles and keyword search is flawless — then watch fusion keep both strengths without you choosing between them.',
  render(el){
    const qsel=h('select',{},[
      h('option',{value:'syn'},'Synonym query — "when do I get my money back?"'),
      h('option',{value:'exact'},'Exact string — "clause 4.2"'),
      h('option',{value:'plain'},'Plain language — "can my boss approve more?"')]);
    const out=h('div');
    const DOCS=['4.1 travel limit INR 25,000','4.2 exception: HoD written approval, INR 60,000',
      '4.3 disbursement of approved amounts within sixty days','4.3b incomplete claims returned in ten days',
      '5.1 equipment over INR 40,000 needs procurement review','2.1 definitions and interpretation'];
    const R={syn:{sem:[2,3,0,1,4,5],key:[5,0,4,1,3,2]},
             exact:{sem:[0,5,1,2,4,3],key:[1,0,5,2,3,4]},
             plain:{sem:[1,0,4,2,5,3],key:[5,4,0,1,2,3]}};
    function run(){
      const {sem,key}=R[qsel.value],K=60;
      const rank=l=>{const m={};l.forEach((d,i)=>m[d]=i+1);return m;};
      const rs=rank(sem),rk=rank(key);
      const fused=DOCS.map((_,i)=>({i,s:1/(K+rs[i])+1/(K+rk[i])}))
        .sort((a,b)=>b.s-a.s);
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},[h('th',{text:'#'}),h('th',{text:'chunk'}),
        h('th',{text:'semantic'}),h('th',{text:'keyword'}),h('th',{text:'fused'})])));
      const tb=h('tbody');
      fused.forEach((f,pos)=>{
        tb.appendChild(h('tr',{},[
          h('td',{class:'num',text:pos+1}),
          h('td',{html:(pos===0?'<strong>':'')+DOCS[f.i]+(pos===0?'</strong>':'')}),
          h('td',{class:'num',text:rs[f.i]}),h('td',{class:'num',text:rk[f.i]}),
          h('td',{class:'num',text:fmt(f.s,4)})]));
      });
      t.appendChild(tb);
      out.innerHTML='';
      out.appendChild(h('div',{class:'tblwrap'},t));
      const win=fused[0].i;
      const notes={syn:'Semantic found it at rank 1; keyword had it last. Fusion keeps the win.',
        exact:'Keyword nailed clause 4.2 instantly; semantic ranked it third. Fusion recovers it — this is the case that keeps keyword search alive forever.',
        plain:'Both were mediocre alone; fusion promotes the chunk that placed respectably on both lists.'};
      out.appendChild(h('p',{class:'labnote',text:notes[qsel.value]}));
    }
    qsel.addEventListener('change',run);
    el.append(h('div',{class:'ctl'},[ctl('query type',qsel)]),out);
    run();
  }};

/* ---------------- 13. Injection + trifecta ---------------- */
LABS.injection={title:'Capture rate, per defence',k:'lab 13.1',
  note:'Ten injected questions against each defence. Notice two things: no defence reaches zero, and the adaptive attack — written for your defence specifically — climbs straight back up. A filter is not a wall.',
  render(el){
    const stern=h('input',{type:'checkbox'}),delim=h('input',{type:'checkbox'});
    const adaptive=h('input',{type:'checkbox'}),allow=h('input',{type:'checkbox'});
    const out=h('div'),verdict=h('div');
    function run(){
      let cap=9;
      if(stern.checked)cap-=4; if(delim.checked)cap-=2;
      if(adaptive.checked)cap+=Math.min(5,(stern.checked?3:0)+(delim.checked?2:0));
      cap=clamp(cap,0,10);
      const exfil=allow.checked?0:cap;
      out.innerHTML='';
      out.appendChild(stats([
        ['injections captured',cap+'/10',cap>2?'red':(cap?'':'ok')],
        ['data exfiltrated',exfil+'/10',exfil?'red':'ok'],
        ['defence type',allow.checked?'structural':'model-dependent',allow.checked?'ok':'red']]));
      verdict.innerHTML='<p class="labnote">'+(
        allow.checked
          ? 'The injection still succeeds — the model still tries — but the destination allowlist means the data has nowhere to go. <strong>This is a control that does not depend on the model behaving.</strong> Everything above it is a filter.'
          : (cap===0?'Zero captures against the attacks you thought of. An adaptive attacker writes for your filter — tick the adaptive box.'
             :'Captures reduced but non-zero, and every one of these defences depends on the model choosing to obey. Break a leg of the trifecta instead.'))+'</p>';
    }
    [stern,delim,adaptive,allow].forEach(c=>c.addEventListener('change',run));
    const cb=(n,l)=>h('label',{style:'display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:.85rem;color:var(--ink)'},
      [n,document.createTextNode(l)]);
    el.append(h('div',{style:'display:grid;gap:.45rem;margin-bottom:1rem'},[
      cb(stern,'Stern instruction-hierarchy system prompt'),
      cb(delim,'Delimiters — context wrapped in <doc> tags'),
      cb(adaptive,'Attacker writes for your defence (adaptive)'),
      cb(allow,'Structural: outbound destination allowlist')]),out,verdict);
    run();
  }};

LABS.trifecta={title:'The trifecta auditor',k:'lab 13.2',
  note:'Three questions about any AI system in your organisation. Answer them honestly. Three yeses is an exfiltration channel regardless of what a vendor security page says.',
  render(el){
    const a=h('input',{type:'checkbox'}),b=h('input',{type:'checkbox'}),c=h('input',{type:'checkbox'});
    const out=h('div');
    function run(){
      const n=[a,b,c].filter(x=>x.checked).length;
      const legs=['Private data','Untrusted content','External communication'];
      const on=[a,b,c].map((x,i)=>x.checked?legs[i]:null).filter(Boolean);
      out.innerHTML='';
      const state=n===3?['EXFILTRATION CHANNEL','red']:n===2?['manageable — do not add the third','']:['safe','ok'];
      out.appendChild(stats([['legs present',n+'/3',n===3?'red':(n<2?'ok':'')],
        ['verdict',state[0],state[1]]]));
      if(n===3)out.appendChild(h('p',{class:'labnote',html:
        '<strong>Break a leg.</strong> Remove the outbound channel, remove the private data from that path, or eliminate the untrusted content. Mitigations that ask the model to behave are filters; this is the only control on the list that is architectural.'}));
      else if(on.length)out.appendChild(h('p',{class:'labnote',
        text:'Present: '+on.join(', ')+'. Safe today — and one feature request from being unsafe. Write this down in the system card.'}));
    }
    [a,b,c].forEach(x=>x.addEventListener('change',run));
    const cb=(n,l,s)=>h('label',{style:'display:flex;gap:.5rem;align-items:flex-start;text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:.85rem;color:var(--ink)'},
      [n,h('span',{},[h('span',{text:l}),h('span',{class:'dim',style:'display:block;font-size:.78rem',text:s})])]);
    el.append(h('div',{style:'display:grid;gap:.7rem;margin-bottom:1rem'},[
      cb(a,'Can it read anything not already public?','Internal documents, customer records, credentials'),
      cb(b,'Does any input come from outside your control?','Email, uploads, web pages, tickets, supplier PDFs'),
      cb(c,'Can it send, post, write, or call a URL?','Including rendering a remote image')]),out);
    run();
  }};

/* ---------------- 14. Judge bias ---------------- */
LABS.judge={title:'Verbosity bias, measured',k:'lab 14.1',
  note:'The same three correct claims, padded with hedging and structure. The content never changes. Watch a naive judge reward the padding — then switch to a rubric that asks for the unsupported claim instead of a score.',
  render(el){
    const pad=h('span',{class:'readout',text:'0'});
    const rubric=h('select',{},[h('option',{value:'naive'},'Naive — "rate quality 1–10"'),
      h('option',{value:'rubric'},'Rubric — groundedness only, quote the unsupported claim')]);
    const out=h('div'),prev=h('div');
    let P=0;
    const BASE='Claims must be submitted within 60 days. The limit is INR 25,000. Approval is by the Head of Department.';
    const PADS=['','It is important to note that ','Based on a careful review of the provided documentation, it is important to note that ',
      'Based on a careful and thorough review of the provided documentation, and taking into account the relevant policy framework, it is important to note that, generally speaking, '];
    function run(){
      const text=PADS[P]+BASE+(P>1?' This should be verified against the official policy document, as circumstances may vary.':'');
      const words=text.split(/\s+/).length;
      const naive=clamp(5.5+P*1.1,1,10);
      const score=rubric.value==='naive'?naive:7.0;
      out.innerHTML='';
      out.appendChild(stats([
        ['words',words],['correct claims','3/3','ok'],
        ['judge score',fmt(score,1),rubric.value==='naive'&&P>0?'red':'ok',
          rubric.value==='naive'?'moves with length':'flat — content unchanged']]));
      prev.innerHTML='';
      prev.appendChild(h('div',{style:'font-family:var(--serif);font-size:.95rem;line-height:1.6;padding:.7rem .85rem;background:var(--paper);border:1px solid var(--rule);border-radius:3px',text:text}));
      if(rubric.value==='naive'&&P>0)
        prev.appendChild(h('p',{class:'labnote',html:'The judge rewarded <strong>'+(words-BASE.split(/ /).length)+' extra words carrying no extra information</strong>. Any leaderboard built on a naive judge inherits this.'}));
    }
    rubric.addEventListener('change',run);
    el.append(h('div',{class:'ctl'},[
      ctl('padding',(()=>{const s=slider(0,3,0,1,v=>{P=v;pad.textContent=v;run();});
        return h('div',{},[s,pad]);})()),ctl('judge design',rubric)]),out,prev);
    run();
  }};

/* ---------------- 15. Cost model ---------------- */
LABS.costmodel={title:'The bill, with the four multipliers',k:'lab 15.1',
  note:'Start with the naive estimate everyone puts in the business case, then switch on the four things that are always left out. The ratio at the bottom is the number to carry into a budget meeting.',
  render(el){
    const F={inTok:1800,outTok:240,q:10000,inR:0.20,outR:0.60,k:3,retry:10,steps:1,think:0,cache:0};
    const ui={},out=h('div');
    const rows=[['inTok','base input tokens',400,8000,200],['outTok','answer tokens',80,1200,20],
      ['q','queries / month',1000,200000,1000],['k','top-k',1,10,1],
      ['retry','retry rate %',0,40,1],['steps','agent steps',1,12,1],
      ['think','reasoning ×',0,5,0.5],['cache','cache hit %',0,90,5]];
    function calc(){
      const kScale=F.k/3;
      const eIn=F.inTok*kScale*F.steps*(1-(F.cache/100)*0.9);
      const eOut=F.outTok*F.steps*(1+F.think);
      let per=(eIn/1e6)*F.inR+(eOut/1e6)*F.outR;
      per*=(1+F.retry/100);
      const naive=((F.inTok/1e6)*F.inR+(F.outTok/1e6)*F.outR);
      return {per,naive,month:per*F.q,naiveMonth:naive*F.q,ratio:per/naive};
    }
    function run(){
      const r=calc();
      out.innerHTML='';
      out.appendChild(stats([
        ['naive / query','₹'+fmt(r.naive,5)],
        ['loaded / query','₹'+fmt(r.per,5),'red'],
        ['multiplier','×'+fmt(r.ratio,1),'red','what the business case missed'],
        ['naive / month','₹'+fmt(r.naiveMonth,0)],
        ['actual / month','₹'+fmt(r.month,0),'red'],
        ['annual','₹'+fmt(r.month*12,0),'red']]));
    }
    const grid=h('div',{style:'display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.8rem;margin-bottom:1rem'});
    rows.forEach(([k,l,mn,mx,st])=>{
      const v=h('span',{class:'readout',text:String(F[k])});
      const s=slider(mn,mx,F[k],st,x=>{F[k]=x;v.textContent=x;run();});
      grid.appendChild(ctl(l,h('div',{},[s,v])));
      ui[k]=s;
    });
    el.append(grid,out,h('p',{class:'labnote',html:'Rates default to a mid-range model. The multipliers map to the chapters that produced them: <strong>k</strong> → Ch.6, <strong>retries</strong> → Ch.8, <strong>agent steps</strong> → Ch.9, <strong>reasoning</strong> → Ch.11, <strong>cache</strong> → Ch.10.'}));
    run();
  }};

window.LABS=LABS;
})();
