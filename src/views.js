/* Tracker views: dashboard, practice runner, skill matrix, analytics,
   exercise tracker, process runner. Reads state via window.STORE. */

window.VIEWS = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x!=null)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const E=()=>window.ENG;
const S=()=>window.STORE.S;
const save=()=>window.STORE.save();
const pct=v=>Math.round(v)+'%';
const LN=()=>window.LEVEL_NAMES;

function tile(l,v,cls,s){return h('div',{class:'stat'},[h('span',{class:'l',text:l}),
  h('span',{class:'v '+(cls||''),text:String(v)}),s?h('span',{class:'s',text:s}):h('span')]);}
function phead(eyebrow,title,sub){
  return h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:eyebrow})]),
    h('h1',{text:title}), sub?h('p',{html:sub}):null]);
}
function meter(v,cls){
  return h('span',{class:'meter'},[h('i',{class:cls||'',style:'width:'+Math.max(2,v)+'%'})]);
}
function lvlPill(m,n){
  const L=E().levelOf(m);
  return h('span',{class:'pill lv'+L, text:n?LN()[L]:'L'+L});
}

/* ================= DASHBOARD ================= */
function dashboard(){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap-wide'});
  const ov=eng.overall(st), dm=eng.domainMastery(st);
  const due=eng.dueList(st).length, str=eng.streak(st);
  const tested=window.SKILLS.filter(s=>eng.skillState(st,s.id).n>0).length;
  const oc=eng.overconfidence(st);
  const vel=eng.velocity(st);

  w.appendChild(h('header',{class:'dash-head'},[
    h('div',{},[
      h('div',{class:'eyebrow'},[h('span',{text:'Skill tracker'}),h('span',{class:'dot'}),
        h('span',{text:new Date().toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'})})]),
      h('h1',{text:'Where you actually are'}),
      h('p',{class:'dash-sub',html:window.SKILLS.length+' tracked skills. Mastery moves on measured evidence and decays without practice — so this number is a claim about <em>now</em>, not a record of what you once read.'})]),
    h('div',{class:'bigring'},[ring(ov), h('span',{class:'ringlab',text:'overall mastery'})])]));

  w.appendChild(h('div',{class:'stats'},[
    tile('skills measured',tested+' / '+window.SKILLS.length,tested===30?'ok':''),
    tile('due for review',due,due>0?'red':'ok',due?'decaying now':'all current'),
    tile('day streak',str,str>=3?'ok':''),
    tile('7-day gain',(vel.now>=0?'+':'')+Math.round(vel.now),vel.now>vel.prev?'ok':'',
      'prev '+(vel.prev>=0?'+':'')+Math.round(vel.prev)),
    tile('calibration',oc==null?'—':(oc>0?'+':'')+Math.round(oc*100)+'%',
      oc==null?'':(Math.abs(oc)<0.08?'ok':'red'),
      oc==null?'log some answers':(oc<0?'overconfident':'underconfident'))]));

  /* next actions */
  const recs=eng.recommend(st);
  if(recs.length){
    w.appendChild(h('h2',{class:'sec',text:'Do this next'}));
    w.appendChild(h('div',{class:'cards'},recs.slice(0,3).map((r,i)=>
      h('a',{class:'card act'+(i===0?' lead':''),href:r.h},[
        h('h3',{text:r.t}),h('p',{text:r.d}),
        h('span',{class:'go',text:i===0?'Start →':'Open →'})]))));
  }

  /* domains */
  w.appendChild(h('h2',{class:'sec',text:'Domains'}));
  const grid=h('div',{class:'domgrid'});
  dm.forEach(d=>{
    const sk=window.SKILLS.filter(s=>s.d===d.id);
    grid.appendChild(h('a',{class:'domcard',href:'#/skills#'+d.id},[
      h('div',{class:'domtop'},[
        h('h3',{text:d.name}),
        h('span',{class:'dommet',text:pct(d.m)})]),
      meter(d.m, d.m>=70?'ok':d.m>=45?'':'low'),
      h('p',{class:'domblurb',text:d.blurb}),
      h('div',{class:'sparks'},sk.map(s=>{
        const m=eng.shown(st,s.id);
        return h('span',{class:'spark l'+eng.levelOf(m),title:s.n+' — '+pct(m)});
      })),
      h('span',{class:'domsub',text:d.tested+' of '+d.total+' skills measured'})]));
  });
  w.appendChild(grid);

  /* recent activity */
  const acc=eng.accuracyByDay(st,21);
  if(st.att.length){
    w.appendChild(h('h2',{class:'sec',text:'Last three weeks'}));
    w.appendChild(h('div',{class:'card'},[dayBars(acc)]));
  } else {
    w.appendChild(h('div',{class:'callout',style:'margin-top:2rem'},[
      h('span',{class:'lbl',text:'Nothing measured yet'}),
      h('p',{html:'The placement check takes about twelve minutes and sets your baseline across all six domains. Everything after it is measured as a change from that number — which is the entire point of tracking rather than reading.'}),
      h('a',{class:'chip',style:'margin-top:.7rem;display:inline-block;padding:.45rem .9rem',
        href:'#/practice/diagnostic',text:'Take the placement check →'})]));
  }
  return w;
}

function ring(v){
  const c=h('canvas',{width:'220',height:'220',class:'ringc'});
  setTimeout(()=>{
    const g=c.getContext('2d'); const cs=getComputedStyle(document.documentElement);
    const rule=cs.getPropertyValue('--rule').trim(), ok=cs.getPropertyValue('--verified').trim();
    const red=cs.getPropertyValue('--red').trim(), ink=cs.getPropertyValue('--ink').trim();
    g.clearRect(0,0,220,220);
    g.lineWidth=14; g.lineCap='round';
    g.strokeStyle=rule; g.beginPath(); g.arc(110,110,86,0,Math.PI*2); g.stroke();
    g.strokeStyle = v>=70?ok : v>=45?ink : red;
    g.beginPath(); g.arc(110,110,86,-Math.PI/2,-Math.PI/2+Math.PI*2*(v/100)); g.stroke();
    g.fillStyle=ink; g.textAlign='center';
    g.font='600 46px ui-monospace,monospace'; g.fillText(Math.round(v),110,122);
  },30);
  return c;
}
function dayBars(acc){
  const wrap=h('div',{class:'daybars'});
  acc.forEach(d=>{
    const r=d.n? d.ok/d.n : null;
    const bar=h('span',{class:'db'+(d.n?'':' empty'),
      title:d.n? d.n+' answered, '+Math.round(r*100)+'% correct' : 'no activity'});
    if(d.n){
      bar.appendChild(h('i',{style:'height:'+Math.max(8,Math.min(100,d.n*9))+'%;'+
        'background:'+(r>=0.75?'var(--verified)':r>=0.5?'var(--ink-2)':'var(--red)')}));
    }
    wrap.appendChild(bar);
  });
  return wrap;
}

/* ================= PRACTICE RUNNER ================= */
/* One question, asked properly.

   The same ask -> commit -> verdict -> explanation loop wherever a question
   appears: in a drill, and inline in the middle of a chapter. Sharing it is the
   whole point — a question met while reading is the same measured thing as one
   met in a drill. It moves the same mastery, enters the same review schedule,
   and lands in the same calibration record. There is no such thing here as a
   question that does not count. */
function questionCard(it, o){
  o = o || {};
  const st=S(), eng=E();
  const card=h('div',{class:'qcard'+(o.inline?' inline':'')});
  if(!it){ card.appendChild(h('p',{class:'empty',text:'That question is not in the bank.'})); return card; }
  const sk=eng.SK[it.sk];
  const qt0=Date.now();

  const meta=h('div',{class:'qmeta'});
  if(o.showSkill!==false && sk) meta.appendChild(h('a',{class:'pill',href:'#/skill/'+sk.id,text:sk.n}));
  meta.appendChild(h('span',{class:'pill d'+it.diff,
    text:['recall','application','analysis'][it.diff-1]}));
  card.appendChild(meta);
  card.appendChild(h('div',{class:'qstem',html:it.stem}));

  let response=null, conf=null;
  const body=h('div',{class:'qbody'});

  if(it.type==='mcq'){
    it.opts.forEach((op,i)=>{
      const b=h('button',{class:'opt',onclick:()=>{response=i;
        [...body.querySelectorAll('.opt')].forEach(x=>x.classList.remove('sel'));
        b.classList.add('sel'); enable();}},
        [h('span',{class:'ok',text:String.fromCharCode(65+i)}),h('span',{html:op})]);
      body.appendChild(b);
    });
  } else if(it.type==='multi'){
    response=[];
    card.appendChild(h('p',{class:'qhint',text:'Select all that apply.'}));
    it.opts.forEach((op,i)=>{
      const b=h('button',{class:'opt',onclick:()=>{
        const p=response.indexOf(i);
        if(p<0){response.push(i);b.classList.add('sel');}else{response.splice(p,1);b.classList.remove('sel');}
        enable();}},[h('span',{class:'ok',text:'✓'}),h('span',{html:op})]);
      body.appendChild(b);
    });
  } else if(it.type==='num'){
    const inp=h('input',{type:'number',step:'any',placeholder:it.opts[1]||'Your answer'});
    inp.addEventListener('input',()=>{response=inp.value;enable();});
    body.appendChild(h('div',{class:'numrow'},[inp,h('span',{class:'unit',text:it.opts[0]||''})]));
    if(it.opts[1])body.appendChild(h('p',{class:'qhint',text:it.opts[1]}));
  } else if(it.type==='order'){
    response=[];
    card.appendChild(h('p',{class:'qhint',text:'Click in order, highest first.'}));
    const pool=h('div',{class:'orderpool'});
    it.opts.forEach((op,i)=>{
      const b=h('button',{class:'opt',onclick:()=>{
        if(response.includes(i))return;
        response.push(i); b.classList.add('sel');
        b.querySelector('.ok').textContent=response.length; enable();}},
        [h('span',{class:'ok',text:'·'}),h('span',{html:op})]);
      pool.appendChild(b);
    });
    body.appendChild(pool);
    body.appendChild(h('button',{class:'sm',style:'margin-top:.5rem',onclick:()=>{
      response=[];[...pool.querySelectorAll('.opt')].forEach(x=>{x.classList.remove('sel');
        x.querySelector('.ok').textContent='·';});enable();}},'Reset order'));
  } else if(it.type==='judge'){
    const ta=h('textarea',{rows:o.inline?5:6,
      placeholder:'Write your answer before revealing the model answer. Rough is fine — this is judged on reasoning, not polish.'});
    ta.addEventListener('input',()=>{response=ta.value;enable();});
    body.appendChild(ta);
  }
  card.appendChild(body);

  const confRow=h('div',{class:'confrow'},[h('span',{class:'clab',text:'How sure are you?'})]);
  ['Guessing','Leaning','Fairly sure','Certain'].forEach((l,i)=>{
    const b=h('button',{class:'sm conf',onclick:()=>{conf=eng.CONF[i];
      [...confRow.querySelectorAll('.conf')].forEach(x=>x.classList.remove('on'));
      b.classList.add('on');enable();}},l);
    confRow.appendChild(b);
  });
  card.appendChild(confRow);

  const go=h('button',{class:'primary big',disabled:'true',onclick:()=>reveal()},
    it.type==='judge'?'Reveal model answer':'Submit');
  card.appendChild(go);

  function enable(){
    const has = it.type==='multi'||it.type==='order' ? response.length>0
      : it.type==='judge' ? (response||'').trim().length>10
      : response!==null && response!=='';
    go.disabled = !(has && conf!=null);
  }

  function reveal(){
    const ms=Date.now()-qt0;
    go.remove(); confRow.remove();
    card.querySelectorAll('button,input,textarea').forEach(x=>x.disabled=true);

    if(it.type==='judge'){
      card.appendChild(h('div',{class:'model'},[
        h('span',{class:'lbl',text:'Model answer'}),h('p',{html:it.ans})]));
      const sc=h('div',{class:'selfscore'},[h('span',{class:'clab',text:'How did yours compare?'})]);
      ['Missed it','Partial','Solid','Sharper than the model'].forEach((l,i)=>{
        sc.appendChild(h('button',{class:'sm',onclick:()=>{
          const ok=eng.submit(st,it,response,conf,ms,i);
          save(); sc.remove(); if(o.onAnswered)o.onAnswered(ok,it,conf); after(ok);}},l));
      });
      card.appendChild(sc);
      return;
    }

    const ok=eng.submit(st,it,response,conf,ms,null);
    save();
    const opts=[...card.querySelectorAll('.opt')];
    if(it.type==='mcq') opts.forEach((x,i)=>{
      if(i===it.ans)x.classList.add('right');
      else if(i===response)x.classList.add('wrong');});
    if(it.type==='multi') opts.forEach((x,i)=>{
      if(it.ans.includes(i))x.classList.add('right');
      else if(response.includes(i))x.classList.add('wrong');});
    if(it.type==='order') opts.forEach((x,i)=>{
      x.querySelector('.ok').textContent=it.ans.indexOf(i)+1;
      x.classList.add(response[it.ans.indexOf(i)]===i?'right':'wrong');});
    if(o.onAnswered)o.onAnswered(ok,it,conf);
    after(ok);
  }

  function after(ok){
    card.appendChild(h('div',{class:'verdict '+(ok?'good':'bad')},[
      h('span',{class:'vt',text:ok?'Correct':'Not quite'}),
      it.type==='num'&&!ok?h('span',{class:'vs',text:'Answer: '+it.ans[0]+' (±'+it.ans[1]+'%)'}):null,
      conf>=0.75&&!ok?h('span',{class:'vs',text:'— and you were confident. Worth noting.'}):null,
      conf<=0.5&&ok?h('span',{class:'vs',text:'— correct but unsure. Also worth noting.'}):null]));
    if(it.why) card.appendChild(h('div',{class:'why'},[
      h('span',{class:'lbl',text:'Why'}),h('p',{html:it.why})]));
    if(o.onNext) card.appendChild(h('button',{class:'primary big',onclick:o.onNext},
      o.nextLabel||'Next question'));
    if(o.scrollOnReveal) card.scrollIntoView({block:'start'});
    if(o.onSettled) o.onSettled(ok);
    if(window.updateProgress) window.updateProgress();
  }

  enable();
  return card;
}

function practice(mode, arg){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap'});
  const items=eng.buildSession(st, mode, {skill:arg, domain:arg,
    n: mode==='exam'?30 : mode==='diagnostic'?18 : 10});
  if(!items.length){
    w.appendChild(phead('Practice','Nothing queued',
      'No items match this session type right now. Try a mixed set, or come back when reviews fall due.'));
    w.appendChild(h('a',{class:'chip',href:'#/practice',text:'← Practice modes'}));
    return w;
  }

  const TITLES={diagnostic:'Placement check',due:'Review — due today',weak:'Weakest skills',
    exam:'Full assessment',analysis:'Analytical items only',mixed:'Mixed practice',
    skill:'Skill drill',domain:'Domain drill'};
  let idx=0, correctN=0, t0=Date.now();
  const before={}; window.SKILLS.forEach(s=>before[s.id]=eng.shown(st,s.id));
  const results=[];

  const bar=h('div',{class:'qbar'},[h('i')]);
  const head=h('div',{class:'qhead'},[
    h('span',{class:'qcount'}), h('span',{class:'qtitle',text:TITLES[mode]||'Practice'}),
    h('button',{class:'sm',onclick:()=>{if(confirm('End this session? Answers so far are already saved.'))finish();}},'End')]);
  const stage=h('div',{class:'stage'});
  w.append(h('div',{class:'qwrap'},[head,bar,stage]));

  function render(){
    const it=items[idx];
    stage.innerHTML='';
    bar.querySelector('i').style.width=(idx/items.length*100)+'%';
    head.querySelector('.qcount').textContent=(idx+1)+' / '+items.length;
    stage.appendChild(questionCard(it,{
      onAnswered:(ok,item,c)=>{ results.push({it:item, ok, conf:c}); if(ok)correctN++; },
      nextLabel: idx+1>=items.length?'See results':'Next question',
      onNext:()=>{ idx++; if(idx>=items.length)finish(); else render(); },
      scrollOnReveal:true
    }));
  }

  function finish(){
    const mins=Math.round((Date.now()-t0)/60000);
    st.sess.push({t:Date.now(),mode,n:results.length,ok:correctN,ms:Date.now()-t0});
    save();
    stage.innerHTML=''; bar.querySelector('i').style.width='100%';
    head.querySelector('.qcount').textContent='done';
    const rate=results.length?Math.round(correctN/results.length*100):0;
    stage.appendChild(h('div',{class:'donehead'},[
      h('div',{class:'bigscore',text:correctN+'/'+results.length}),
      h('p',{class:'donesub',text:rate+'% correct · '+(mins||'<1')+' min'})]));

    /* skill movement */
    const moved=window.SKILLS.map(s=>({s,b:before[s.id],a:eng.shown(st,s.id)}))
      .filter(x=>Math.abs(x.a-x.b)>=1).sort((a,b)=>(b.a-b.b)-(a.a-a.b));
    if(moved.length){
      stage.appendChild(h('h3',{class:'sec2',text:'Skills that moved'}));
      stage.appendChild(h('div',{class:'moves'},moved.map(x=>{
        const d=x.a-x.b;
        return h('div',{class:'move'},[
          h('span',{class:'mn',text:x.s.n}),
          meter(x.a, x.a>=70?'ok':x.a>=45?'':'low'),
          h('span',{class:'md '+(d>0?'up':'down'),text:(d>0?'+':'')+Math.round(d)})]);
      })));
    }
    /* misses */
    const misses=results.filter(r=>!r.ok);
    if(misses.length){
      stage.appendChild(h('h3',{class:'sec2',text:'Review these'}));
      stage.appendChild(h('div',{class:'marks'},misses.map(r=>{
        const sk=eng.SK[r.it.sk];
        return h('div',{class:'mark got'},[
          h('span',{class:'mc',text:sk.id}),
          h('span',{class:'mt'},[h('span',{html:r.it.stem}),
            h('div',{class:'dim',style:'font-size:.78rem;margin-top:.2rem',
              text:sk.n+' · chapters '+sk.ch.join(', ')})]),
          h('a',{class:'chip',href:'#/skill/'+sk.id,text:'Skill'})]);
      })));
    }
    const overconf=results.filter(r=>!r.ok&&r.conf>=0.75).length;
    if(overconf>=2) stage.appendChild(h('div',{class:'callout'},[
      h('span',{class:'lbl',text:'Calibration note'}),
      h('p',{text:'You were confident and wrong on '+overconf+' items in this session. That pattern is more useful than the score — it tells you which of your intuitions to stop trusting.'})]));

    stage.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin-top:1.5rem'},[
      h('a',{class:'chip',style:'padding:.5rem .9rem',href:'#/',text:'← Dashboard'}),
      h('a',{class:'chip',style:'padding:.5rem .9rem',href:'#/analytics',text:'Analytics'}),
      h('button',{class:'primary',onclick:()=>{location.hash='#/practice/'+mode+(arg?'/'+arg:'');
        setTimeout(()=>location.reload(),40);}},'Another set')]));
    window.scrollTo(0,0);
  }

  render();
  return w;
}

function practiceMenu(){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap-wide'});
  const due=eng.dueList(st).length;
  w.appendChild(phead('Practice','Choose a session',
    'Every answer carries a confidence rating, because tracking whether you <em>knew</em> you knew is as useful as tracking whether you were right.'));
  const modes=[
    ['diagnostic','Placement check','18 questions across all six domains. Sets your baseline.','~12 min'],
    ['due','Review what is due',due?due+' items have decayed back into the queue.':'Nothing due right now.','~'+Math.max(3,Math.ceil(due*0.8))+' min'],
    ['weak','Weakest skills','Ten items drawn from your six lowest skills.','~8 min'],
    ['analysis','Analysis only','Judgment and multi-step items. No recall questions.','~10 min'],
    ['mixed','Mixed practice','Ten items, difficulty matched to your current level.','~8 min'],
    ['exam','Full assessment','One item per skill. Run it monthly and compare.','~25 min']
  ];
  w.appendChild(h('div',{class:'grid2'},modes.map(([k,t,d,mins])=>
    h('a',{class:'card act'+(k==='due'&&!due?' off':''),href:'#/practice/'+k},[
      h('h3',{text:t}),h('p',{text:d}),
      h('span',{class:'go',text:mins+'  →'})]))));

  w.appendChild(h('h2',{class:'sec',text:'Drill one domain'}));
  w.appendChild(h('div',{class:'chips'},window.DOMAINS.map(d=>
    h('a',{class:'chip',href:'#/practice/domain/'+d.id,text:d.name}))));
  return w;
}

/* ================= SKILL MATRIX ================= */
function skills(){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(phead('30 tracked skills','Skill Matrix',
    'Mastery is earned by measured evidence and decays without practice. A skill you have not exercised in six weeks is shown as it stands <em>today</em>, not at its peak.'));
  const legend=h('div',{class:'legend'},LN().map((n,i)=>
    h('span',{class:'lgi'},[h('span',{class:'spark l'+i}),h('span',{text:n})])));
  w.appendChild(legend);

  window.DOMAINS.forEach(d=>{
    const sec=h('section',{class:'part',id:d.id});
    const sk=window.SKILLS.filter(s=>s.d===d.id);
    const avg=sk.reduce((a,s)=>a+eng.shown(st,s.id),0)/sk.length;
    sec.appendChild(h('div',{class:'parthead'},[
      h('span',{class:'idx',text:pct(avg)}),h('h2',{text:d.name}),
      h('a',{class:'t',href:'#/practice/domain/'+d.id,text:'drill →'})]));
    sec.appendChild(h('div',{class:'skrows'},sk.map(s=>{
      const m=eng.shown(st,s.id), stt=eng.skillState(st,s.id);
      const L=eng.levelOf(m);
      const dueN=(eng.bySkill[s.id]||[]).filter(i=>{const c=st.srs[i.id];return c&&c.due&&c.due<=Date.now();}).length;
      return h('a',{class:'skrow',href:'#/skill/'+s.id},[
        h('span',{class:'skid',text:s.id}),
        h('span',{class:'skn'},[h('strong',{text:s.n}),
          h('span',{class:'skcore',text:s.core})]),
        dueN?h('span',{class:'pill red',text:dueN+' due'}):null,
        h('span',{class:'skm'},[meter(m,m>=70?'ok':m>=45?'':'low'),
          h('span',{class:'skpct',text:stt.n?pct(m):'—'})]),
        h('span',{class:'pill lv'+L,text:'L'+L})]);
    })));
    w.appendChild(sec);
  });
  return w;
}

function skillPage(id){
  const st=S(), eng=E(), s=eng.SK[id];
  const w=h('div',{class:'wrap'});
  if(!s){w.appendChild(h('p',{class:'empty',text:'Unknown skill.'}));return w;}
  const m=eng.shown(st,id), stt=eng.skillState(st,id), L=eng.levelOf(m);
  const dom=window.DOMAINS.find(d=>d.id===s.d);

  w.appendChild(h('header',{class:'chead'},[
    h('div',{class:'eyebrow'},[h('span',{text:dom.name}),h('span',{class:'dot'}),h('span',{text:s.id})]),
    h('h1',{text:s.n}),
    h('p',{class:'concept',text:s.core})]));

  w.appendChild(h('div',{class:'stats'},[
    tile('mastery',stt.n?pct(m):'untested',m>=70?'ok':m>=45?'':'red'),
    tile('level',LN()[L],L>=3?'ok':''),
    tile('answered',stt.n,''),
    tile('accuracy',stt.n?pct(stt.ok/stt.n*100):'—',stt.n&&stt.ok/stt.n>=0.75?'ok':''),
    tile('to next level',L>=4?'at ceiling':Math.max(0,Math.ceil(eng.nextBand(m)-m))+' pts','')]));

  if(stt.hist.length>1) w.appendChild(h('div',{class:'card'},[
    h('span',{class:'lbl',text:'Mastery over time'}),trendChart(stt.hist)]));

  w.appendChild(h('h2',{class:'sec',text:'What each level looks like'}));
  w.appendChild(h('div',{class:'levels'},s.L.map((d,i)=>
    h('div',{class:'lvrow'+(L===i+1?' cur':'')+(L>i+1?' past':'')},[
      h('span',{class:'pill lv'+(i+1),text:'L'+(i+1)+' '+LN()[i+1]}),
      h('span',{text:d}),
      L===i+1?h('span',{class:'pill ok',text:'you are here'}):null]))));

  w.appendChild(h('h2',{class:'sec',text:'How to move it'}));
  const res=h('div',{class:'cards'});
  res.appendChild(h('a',{class:'card act lead',href:'#/practice/skill/'+id},[
    h('h3',{text:'Drill this skill'}),
    h('p',{text:(eng.bySkill[id]||[]).length+' questions available, difficulty matched to your level.'}),
    h('span',{class:'go',text:'Start →'})]));
  const exs=window.EXERCISES.filter(e=>e.sk.includes(id));
  exs.forEach(e=>res.appendChild(h('a',{class:'card act',href:'#/exercises#'+e.id},[
    h('h3',{text:'Exercise: '+e.t}),h('p',{text:e.brief.slice(0,130)+'…'}),
    h('span',{class:'go',text:'~'+e.mins+' min →'})])));
  s.ch.forEach(c=>{
    const ch=(window.PART1.concat(window.PART2,window.PART3)).find(x=>x.num===c);
    if(ch)res.appendChild(h('a',{class:'card act',href:'#/ch/'+ch.id},[
      h('h3',{text:'Read: Chapter '+c+' — '+ch.title}),h('p',{text:ch.concept}),
      h('span',{class:'go',text:'~'+ch.minutes+' min →'})]));
  });
  (s.labs||[]).forEach(k=>{
    const l=(window.LABS||{})[k]; if(!l)return;
    res.appendChild(h('a',{class:'card act',href:'#/labs',
      onclick:()=>{}},[h('h3',{text:'Lab: '+l.title}),
      h('p',{text:(l.note||'').slice(0,120)+'…'}),h('span',{class:'go',text:'Open →'})]));
  });
  w.appendChild(res);
  return w;
}

function trendChart(hist){
  const c=h('canvas'); c.style.width='100%';
  setTimeout(()=>{
    const wd=c.clientWidth||600, ht=140;
    c.width=wd*2; c.height=ht*2; c.style.height=ht+'px';
    const g=c.getContext('2d'); g.setTransform(2,0,0,2,0,0); g.clearRect(0,0,wd,ht);
    const cs=getComputedStyle(document.documentElement);
    const rule=cs.getPropertyValue('--rule').trim(), ok=cs.getPropertyValue('--verified').trim();
    const mut=cs.getPropertyValue('--muted').trim();
    const X=i=>26+(i/Math.max(1,hist.length-1))*(wd-34);
    const Y=v=>ht-18-(v/100)*(ht-30);
    g.strokeStyle=rule; g.lineWidth=1;
    [0,50,100].forEach(v=>{g.beginPath();g.moveTo(26,Y(v));g.lineTo(wd-6,Y(v));g.stroke();
      g.fillStyle=mut;g.font='9px ui-monospace,monospace';g.fillText(String(v),4,Y(v)+3);});
    g.strokeStyle=ok; g.lineWidth=2; g.beginPath();
    hist.forEach((p,i)=>{i?g.lineTo(X(i),Y(p.m)):g.moveTo(X(i),Y(p.m));}); g.stroke();
    const last=hist[hist.length-1];
    g.fillStyle=ok; g.beginPath(); g.arc(X(hist.length-1),Y(last.m),4,0,7); g.fill();
  },30);
  return c;
}

/* ================= ANALYTICS ================= */
function analytics(){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(phead('Measurement','Analytics',
    'Four questions: is mastery rising, do you know when you know, where is the decay, and what has actually been practised.'));
  if(!st.att.length){
    w.appendChild(h('p',{class:'empty',text:'Nothing measured yet. Run the placement check and this fills in.'}));
    w.appendChild(h('a',{class:'chip',href:'#/practice/diagnostic',
      style:'padding:.5rem .9rem',text:'Placement check →'}));
    return w;
  }
  const oc=eng.overconfidence(st), br=eng.brier(st);
  const totMs=eng.timeInvested(st);
  w.appendChild(h('div',{class:'stats'},[
    tile('items answered',st.att.length),
    tile('overall accuracy',pct(st.att.reduce((a,x)=>a+x.k,0)/st.att.length*100)),
    tile('analysis-item accuracy',(()=>{const a=st.att.filter(x=>x.d===3);
      return a.length?pct(a.reduce((s,x)=>s+x.k,0)/a.length*100):'—';})(),''),
    tile('brier score',br==null?'—':br.toFixed(3),br!=null&&br<0.18?'ok':'','lower is better'),
    tile('time on questions',Math.round(totMs/60000)+' min'),
    tile('sessions',(st.sess||[]).length)]));

  /* calibration */
  w.appendChild(h('h2',{class:'sec',text:'Calibration — do you know when you know?'}));
  const cur=eng.calibrationCurve(st);
  w.appendChild(h('div',{class:'card'},[calChart(cur), h('p',{class:'labnote',html:
    oc==null ? 'Not enough data yet.'
    : oc < -0.10 ? '<strong>You are overconfident by about '+Math.round(-oc*100)+' points.</strong> When you say “fairly sure”, you are right less often than that implies. This is the single most valuable thing on the page: it means your instinct that a system is working should be discounted, which is exactly why the book insists on measuring before believing a demo.'
    : oc > 0.10 ? '<strong>You are underconfident by about '+Math.round(oc*100)+' points.</strong> You know more than you are claiming — worth noticing in rooms where you are the one who has actually measured something.'
    : '<strong>Well calibrated.</strong> Your confidence tracks your accuracy within ten points. Keep logging; this is the skill that compounds into better judgment everywhere else.'})]));

  /* domain radar */
  w.appendChild(h('h2',{class:'sec',text:'Mastery by domain'}));
  w.appendChild(h('div',{class:'card'},[radar(eng.domainMastery(st))]));

  /* review forecast */
  w.appendChild(h('h2',{class:'sec',text:'Review load, next 21 days'}));
  const fc=eng.dueForecast(st,21);
  w.appendChild(h('div',{class:'card'},[forecastBars(fc),
    h('p',{class:'labnote',text:'Spaced repetition spreads reviews out as items stick. A flat low line means your schedule is healthy; a spike means a lot of material was learned on the same day and will come back on the same day.'})]));

  /* weakest / strongest */
  const ranked=window.SKILLS.map(s=>({s,m:eng.shown(st,s.id),n:eng.skillState(st,s.id).n}))
    .filter(x=>x.n>0).sort((a,b)=>a.m-b.m);
  if(ranked.length){
    w.appendChild(h('div',{class:'grid2',style:'margin-top:2rem'},[
      h('div',{class:'card'},[h('h3',{text:'Weakest five'}),
        h('div',{class:'skrows tight'},ranked.slice(0,5).map(x=>
          h('a',{class:'skrow',href:'#/skill/'+x.s.id},[
            h('span',{class:'skn'},[h('strong',{text:x.s.n})]),
            h('span',{class:'skm'},[meter(x.m,'low'),h('span',{class:'skpct',text:pct(x.m)})])])))]),
      h('div',{class:'card'},[h('h3',{text:'Strongest five'}),
        h('div',{class:'skrows tight'},ranked.slice(-5).reverse().map(x=>
          h('a',{class:'skrow',href:'#/skill/'+x.s.id},[
            h('span',{class:'skn'},[h('strong',{text:x.s.n})]),
            h('span',{class:'skm'},[meter(x.m,'ok'),h('span',{class:'skpct',text:pct(x.m)})])])))])]));
  }
  return w;
}

function calChart(cur){
  const c=h('canvas'); c.style.width='100%';
  setTimeout(()=>{
    const wd=c.clientWidth||600, ht=220;
    c.width=wd*2;c.height=ht*2;c.style.height=ht+'px';
    const g=c.getContext('2d');g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,wd,ht);
    const cs=getComputedStyle(document.documentElement);
    const rule=cs.getPropertyValue('--rule').trim(),red=cs.getPropertyValue('--red').trim(),
      mut=cs.getPropertyValue('--muted').trim(),ok=cs.getPropertyValue('--verified').trim();
    const P=34, W=wd-P-14, H=ht-P-16;
    const X=v=>P+v*W, Y=v=>ht-P+6-v*H;
    g.strokeStyle=rule;g.lineWidth=1;
    [0,.25,.5,.75,1].forEach(v=>{g.beginPath();g.moveTo(P,Y(v));g.lineTo(P+W,Y(v));g.stroke();
      g.fillStyle=mut;g.font='9px ui-monospace,monospace';g.fillText(Math.round(v*100)+'%',4,Y(v)+3);});
    /* perfect calibration diagonal */
    g.strokeStyle=mut;g.setLineDash([3,3]);g.beginPath();g.moveTo(X(0),Y(0));g.lineTo(X(1),Y(1));g.stroke();
    g.setLineDash([]);
    const pts=cur.filter(b=>b.n>0);
    g.strokeStyle=red;g.lineWidth=2;g.beginPath();
    pts.forEach((b,i)=>{const x=X(b.c),y=Y(b.rate);i?g.lineTo(x,y):g.moveTo(x,y);});g.stroke();
    pts.forEach(b=>{g.fillStyle=Math.abs(b.gap)<0.1?ok:red;
      g.beginPath();g.arc(X(b.c),Y(b.rate),5,0,7);g.fill();
      g.fillStyle=mut;g.font='9px ui-monospace,monospace';
      g.fillText('n='+b.n,X(b.c)-8,Y(b.rate)-10);});
    g.fillStyle=mut;g.font='9px ui-monospace,monospace';
    ['Guessing','Leaning','Fairly sure','Certain'].forEach((l,i)=>{
      g.fillText(l,X(window.ENG.CONF[i])-14,ht-8);});
    g.fillText('stated confidence →',P,14);
  },30);
  return c;
}
function radar(dm){
  const c=h('canvas'); c.style.width='100%';
  setTimeout(()=>{
    const wd=c.clientWidth||600, ht=300;
    c.width=wd*2;c.height=ht*2;c.style.height=ht+'px';
    const g=c.getContext('2d');g.setTransform(2,0,0,2,0,0);g.clearRect(0,0,wd,ht);
    const cs=getComputedStyle(document.documentElement);
    const rule=cs.getPropertyValue('--rule').trim(),ok=cs.getPropertyValue('--verified').trim(),
      mut=cs.getPropertyValue('--muted').trim(),ink=cs.getPropertyValue('--ink').trim();
    const cx=wd/2, cy=ht/2+6, R=Math.min(wd,ht)/2-52;
    const N=dm.length;
    const ang=i=>-Math.PI/2 + i*2*Math.PI/N;
    g.strokeStyle=rule;g.lineWidth=1;
    [0.25,0.5,0.75,1].forEach(f=>{g.beginPath();
      for(let i=0;i<=N;i++){const a=ang(i%N),x=cx+Math.cos(a)*R*f,y=cy+Math.sin(a)*R*f;
        i?g.lineTo(x,y):g.moveTo(x,y);}g.stroke();});
    for(let i=0;i<N;i++){const a=ang(i);g.beginPath();g.moveTo(cx,cy);
      g.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);g.stroke();}
    g.beginPath();
    dm.forEach((d,i)=>{const a=ang(i),f=Math.max(0.02,d.m/100);
      const x=cx+Math.cos(a)*R*f,y=cy+Math.sin(a)*R*f; i?g.lineTo(x,y):g.moveTo(x,y);});
    g.closePath();
    g.fillStyle=ok+'33'; g.fill(); g.strokeStyle=ok; g.lineWidth=2; g.stroke();
    dm.forEach((d,i)=>{const a=ang(i),f=Math.max(0.02,d.m/100);
      g.fillStyle=ok;g.beginPath();g.arc(cx+Math.cos(a)*R*f,cy+Math.sin(a)*R*f,3.5,0,7);g.fill();
      const lx=cx+Math.cos(a)*(R+26), ly=cy+Math.sin(a)*(R+22);
      g.fillStyle=ink;g.font='600 10px system-ui,sans-serif';g.textAlign='center';
      g.fillText(d.name,lx,ly);
      g.fillStyle=mut;g.font='9px ui-monospace,monospace';
      g.fillText(Math.round(d.m)+'%',lx,ly+11);});
  },30);
  return c;
}
function forecastBars(fc){
  const max=Math.max(1,...fc);
  return h('div',{class:'fcbars'},fc.map((n,i)=>
    h('span',{class:'fb',title:(i===0?'due now':'in '+i+' days')+': '+n+' items'},
      [h('i',{style:'height:'+(n/max*100)+'%'})])));
}

/* ================= EXERCISES ================= */
function exercises(){
  const st=S(), eng=E();
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(phead('Applied work','Exercises',
    'Fourteen deliverables you produce against your own documents. Each is scored on a rubric and <strong>versioned</strong> — the point is not to finish one, it is to do it again in six weeks and watch the score move.'));
  const done=window.EXERCISES.filter(e=>((st.ex[e.id]||{}).iters||[]).length).length;
  w.appendChild(h('div',{class:'stats'},[
    tile('started',done+' / '+window.EXERCISES.length,done===14?'ok':''),
    tile('total versions',window.EXERCISES.reduce((a,e)=>a+(((st.ex[e.id]||{}).iters)||[]).length,0)),
    tile('mean rubric score',(()=>{
      const sc=[];window.EXERCISES.forEach(e=>{const it=((st.ex[e.id]||{}).iters||[]);
        if(it.length){const v=eng.exScore(e,it[it.length-1]); if(v!=null)sc.push(v);}});
      return sc.length?pct(sc.reduce((a,b)=>a+b,0)/sc.length):'—';})(),'')]));

  window.EXERCISES.forEach(e=>{
    const est=st.ex[e.id]||{iters:[]};
    const iters=est.iters||[];
    const latest=iters[iters.length-1];
    const score=eng.exScore(e,latest);
    const locked = e.needs && !(((st.ex[e.needs]||{}).iters||[]).length);
    const card=h('section',{class:'excard'+(locked?' locked':''),id:e.id});
    card.appendChild(h('div',{class:'exhead'},[
      h('span',{class:'extier',text:'T'+e.tier}),
      h('div',{style:'flex:1'},[h('h3',{text:e.t}),
        h('div',{class:'exmeta'},[
          h('span',{text:'~'+e.mins+' min'}),
          h('span',{class:'dot'}),h('a',{href:'#/ch/ch'+e.ch,text:'Ch '+e.ch}),
          h('span',{class:'dot'}),
          ...e.sk.map(id=>h('a',{class:'pill',href:'#/skill/'+id,text:eng.SK[id].n}))])]),
      iters.length?h('span',{class:'pill ok',text:'v'+iters.length+(score!=null?' · '+score+'%':'')}):
        locked?h('span',{class:'pill',text:'needs '+e.needs}):h('span',{class:'pill',text:'not started'})]));
    const body=h('div',{class:'exbody'});
    body.appendChild(h('p',{class:'exbrief',text:e.brief}));
    body.appendChild(h('div',{class:'exdel'},[h('span',{class:'lbl',text:'Deliverable'}),
      h('p',{text:e.deliverable})]));
    body.appendChild(h('div',{class:'exsteps'},[h('span',{class:'lbl',text:'Steps'}),
      h('ol',{class:'num'},e.steps.map(s=>h('li',{text:s})))]));

    /* history */
    if(iters.length>1){
      body.appendChild(h('div',{class:'exhist'},[h('span',{class:'lbl',text:'Versions'}),
        h('div',{class:'vrow'},iters.map((it,i)=>{
          const sc=eng.exScore(e,it);
          return h('span',{class:'vchip'},[
            h('strong',{text:'v'+(i+1)}),
            h('span',{text:sc!=null?sc+'%':'—'}),
            h('span',{class:'dim',text:new Date(it.t).toLocaleDateString()})]);
        }))]));
    }

    /* rubric form */
    const form=h('div',{class:'exform'});
    const cur={r:(latest&&latest.r)?[...latest.r]:[], notes:''};
    form.appendChild(h('span',{class:'lbl',text:iters.length?'Score version '+(iters.length+1):'Score this version'}));
    e.rubric.forEach((rb,ri)=>{
      const row=h('div',{class:'rrow'});
      row.appendChild(h('span',{class:'rc',text:rb.c}));
      const btns=h('span',{class:'rb'});
      rb.l.forEach((lbl,li)=>{
        const b=h('button',{class:'sm'+(cur.r[ri]===li?' on':''),title:lbl,text:String(li),
          onclick:()=>{cur.r[ri]=li;[...btns.querySelectorAll('button')].forEach(x=>x.classList.remove('on'));
            b.classList.add('on'); lab.textContent=lbl;}});
        btns.appendChild(b);
      });
      const lab=h('span',{class:'rl',text:cur.r[ri]!=null?rb.l[cur.r[ri]]:'—'});
      row.append(btns,lab);
      form.appendChild(row);
    });
    const notes=h('textarea',{rows:3,placeholder:'What you produced, and what you would change next version. Rough.'});
    form.appendChild(notes);
    form.appendChild(h('div',{style:'display:flex;gap:.5rem;align-items:center;flex-wrap:wrap'},[
      h('button',{class:'primary',onclick:()=>{
        if(cur.r.filter(x=>x!=null).length<e.rubric.length){alert('Score every rubric row first.');return;}
        st.ex[e.id]=st.ex[e.id]||{iters:[]};
        st.ex[e.id].iters.push({t:Date.now(),r:[...cur.r],n:notes.value});
        /* completing an exercise nudges its skills */
        const sc=eng.exScore(e,{r:cur.r});
        e.sk.forEach(id=>{const s2=eng.skillState(st,id);
          s2.m=Math.min(100,s2.m + (sc/100)*7); s2.last=Date.now();
          s2.hist.push({t:Date.now(),m:Math.round(s2.m)});});
        save(); location.reload();
      }},iters.length?'Log version '+(iters.length+1):'Log version 1'),
      h('span',{class:'dim',style:'font-size:.8rem',text:e.iterate})]));
    body.appendChild(form);
    card.appendChild(body);
    w.appendChild(card);
  });
  return w;
}

/* ================= PROCESSES ================= */
function processes(){
  const st=S();
  const w=h('div',{class:'wrap-wide'});
  w.appendChild(phead('Repeatable workflows','Processes',
    'Five workflows you run on real work, not on exercises. Each has an iteration counter — the value is in running the same process a fourth time and finding it takes an afternoon instead of a fortnight.'));
  window.PROCESSES.forEach(p=>{
    const ps=st.proc[p.id]||(st.proc[p.id]={run:0,step:{},log:[]});
    const total=p.phases.reduce((a,ph)=>a+ph.s.length,0);
    const doneN=Object.values(ps.step).filter(Boolean).length;
    const card=h('section',{class:'proccard',id:p.id});
    card.appendChild(h('div',{class:'prochead'},[
      h('div',{style:'flex:1'},[h('h3',{text:p.n}),
        h('div',{class:'exmeta'},[h('span',{text:p.cad}),h('span',{class:'dot'}),
          h('span',{text:doneN+' / '+total+' steps'})])]),
      h('span',{class:'pill'+(ps.run?' ok':''),text:ps.run?'run '+ps.run+'×':'never run'})]));
    const body=h('div',{class:'procbody'});
    body.appendChild(h('p',{class:'exbrief',text:p.why}));
    body.appendChild(h('div',{class:'exdel'},[h('span',{class:'lbl',text:'What it moves'}),
      h('p',{text:p.metric})]));
    body.appendChild(h('div',{class:'bar'},[h('i',{style:'width:'+(doneN/total*100)+'%'})]));

    p.phases.forEach((ph,pi)=>{
      const sec=h('div',{class:'phase'});
      sec.appendChild(h('h4',{text:ph.n}));
      ph.s.forEach((s,si)=>{
        const key=pi+'.'+si;
        const cb=h('input',{type:'checkbox'});
        cb.checked=!!ps.step[key];
        cb.addEventListener('change',()=>{ps.step[key]=cb.checked;save();
          const n=Object.values(ps.step).filter(Boolean).length;
          body.querySelector('.bar i').style.width=(n/total*100)+'%';
          card.querySelector('.exmeta span:last-child').textContent=n+' / '+total+' steps';
          row.classList.toggle('did',cb.checked);});
        const row=h('label',{class:'pstep'+(cb.checked?' did':'')},[cb,
          h('span',{},[h('strong',{text:s[0]}),h('span',{class:'ph',text:s[1]})])]);
        sec.appendChild(row);
      });
      body.appendChild(sec);
    });
    body.appendChild(h('div',{style:'display:flex;gap:.5rem;margin-top:1rem;flex-wrap:wrap'},[
      h('button',{class:'primary',onclick:()=>{
        ps.run=(ps.run||0)+1;
        ps.log.push({t:Date.now(),done:Object.values(ps.step).filter(Boolean).length,total});
        ps.step={}; save(); location.reload();
      }},'Complete run '+((ps.run||0)+1)+' and reset'),
      ps.log.length?h('span',{class:'dim',style:'font-size:.8rem',
        text:'Last run '+new Date(ps.log[ps.log.length-1].t).toLocaleDateString()+
             ' · '+ps.log[ps.log.length-1].done+'/'+ps.log[ps.log.length-1].total+' steps'}):null]));
    card.appendChild(body);
    w.appendChild(card);
  });
  return w;
}

/* ================= PROGRESS & BACKUP ================= */
function data(){
  const st=S(), SY=window.SYNC;
  const w=h('div',{class:'wrap'});
  const signedIn = window.ACCOUNT && window.ACCOUNT.user;
  w.appendChild(phead('Your data','Progress & Backup',
    signedIn
      ? 'Your progress is stored against your account, so it follows you to any device you sign in on. This browser keeps a copy so the app still works offline, and everything below is the safety net under that.'
      : 'Right now your progress lives in this browser only. That makes it private — and fragile, because it is tied to one browser on one device. Sign in below to make it follow you instead.'));

  const s0=SY.stats();
  w.appendChild(h('div',{class:'stats'},[
    tile('storage',s0.ok?'working':'blocked',s0.ok?'ok':'red',
      s0.ok?'':'private window or blocked cookies'),
    tile('progress size',(s0.bytes/1024).toFixed(1)+' KB'),
    tile('skills measured',s0.summary.skills+' / '+window.SKILLS.length),
    tile('answers logged',s0.summary.attempts),
    tile('last local backup',s0.backup?rel(s0.backup.at):'none',s0.backup?'':'red')]));

  if(!signedIn) w.appendChild(h('div',{class:'callout'},[
    h('span',{class:'lbl',text:'Where this data lives'}),
    h('p',{html:'<code>'+esc2(s0.origin)+'</code> — without an account, browser storage is scoped to the exact address. '+
      'Progress saved on one link and on another are <strong>separate stores</strong>. '+
      'Signing in removes that problem entirely; until then, export here and import there.'})]));

  /* --- account --- */
  const secA=h('section',{class:'part'});
  secA.appendChild(sectionHead2('01','Your account','how it follows you'));
  secA.appendChild(accountPanel());
  w.appendChild(secA);

  /* --- file backup --- */
  const sec1=h('section',{class:'part'});
  sec1.appendChild(sectionHead2('02','Backup file','works everywhere, no account'));
  sec1.appendChild(h('p',{class:'prose',style:'font-size:1rem',
    html:'The dependable one. Downloads everything — mastery, answers, calibration, notebook, exercises, processes — as a single JSON file. Keep it wherever you keep things: Drive, Dropbox, email to yourself.'}));
  const impMsg=h('div');
  const fileIn=h('input',{type:'file',accept:'application/json,.json',style:'display:none'});
  fileIn.addEventListener('change',()=>{
    const f=fileIn.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      try{
        const sum=SY.importText(String(r.result));
        impMsg.innerHTML='';
        impMsg.appendChild(h('div',{class:'verdict good'},[
          h('span',{class:'vt',text:'Imported'}),
          h('span',{class:'vs',text:sum.skills+' skills, '+sum.attempts+' answers, '+
            sum.exercises+' exercises. Reloading…'})]));
        setTimeout(()=>location.reload(),900);
      }catch(e){
        impMsg.innerHTML='';
        impMsg.appendChild(h('div',{class:'verdict bad'},[
          h('span',{class:'vt',text:'Could not import'}),h('span',{class:'vs',text:e.message})]));
      }
      fileIn.value='';
    };
    r.readAsText(f);
  });
  const textBox=h('textarea',{rows:6,readonly:'readonly',hidden:'hidden',
    style:'margin-top:.8rem;font-size:.72rem'});
  const copyMsg=h('span',{class:'dim',style:'font-size:.82rem'});
  const dl=SY.canDownload();
  sec1.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0;align-items:center'},[
    dl?h('button',{class:'primary',onclick:()=>SY.exportFile()},'Download backup'):null,
    h('button',{class:dl?'':'primary',onclick:async()=>{
      const t=SY.exportText();
      const ok=await SY.copyText(t);
      copyMsg.textContent = ok ? 'Copied — paste it into a file named '+SY.exportName()
                               : 'Could not reach the clipboard. Use “Show as text” and copy it by hand.';
      if(!ok){textBox.hidden=false;textBox.value=t;textBox.focus();textBox.select();}
    }},'Copy backup to clipboard'),
    h('button',{onclick:()=>{
      if(textBox.hidden){textBox.value=SY.exportText();textBox.hidden=false;
        textBox.focus();textBox.select();}else{textBox.hidden=true;}
    }},'Show as text'),
    h('button',{onclick:()=>fileIn.click()},'Import a backup file'),
    fileIn, copyMsg]));
  sec1.appendChild(textBox);
  if(!dl) sec1.appendChild(h('p',{class:'labnote',html:
    'This viewer does not allow pages to save files, so <strong>copy to clipboard</strong> is the export route here. '+
    'On your hosted link you get a normal download button.'}));
  sec1.appendChild(impMsg);
  if(s0.backup) sec1.appendChild(h('p',{class:'labnote',html:
    'A local snapshot from <strong>'+rel(s0.backup.at)+'</strong> is also kept automatically in this browser. '+
    '<button class="sm" id="restorebak">Restore it</button> — use only if something looks wrong; it replaces current progress.'}));
  w.appendChild(sec1);
  setTimeout(()=>{const b=document.getElementById('restorebak');
    if(b)b.addEventListener('click',()=>{
      if(!confirm('Replace current progress with the snapshot from '+rel(s0.backup.at)+'?'))return;
      try{const at=SY.restoreBackup();alert('Restored from '+new Date(at).toLocaleString());location.reload();}
      catch(e){alert(e.message);}
    });},60);

  /* --- keep on device --- */
  const sec2=h('section',{class:'part'});
  sec2.appendChild(sectionHead2('03','Keep it on this device','one click'));
  sec2.appendChild(h('p',{class:'prose',style:'font-size:1rem',
    html:'Browsers evict storage from sites they consider disposable. Asking for persistent storage tells this one not to.'}));
  const persistMsg=h('span',{class:'dim',style:'font-size:.85rem'});
  sec2.appendChild(h('div',{style:'display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin-top:.8rem'},[
    h('button',{onclick:()=>{SY.requestPersistence().then(ok=>{
      persistMsg.textContent = ok ? 'Granted — this browser will not evict your progress automatically.'
        : 'The browser declined for now. It often grants this once the site is installed or revisited a few times.';
    });}},'Request persistent storage'), persistMsg]));
  sec2.appendChild(h('p',{class:'labnote',html:
    'On a phone, use your browser’s <strong>Add to Home Screen</strong> on the hosted version — it installs as an app, works offline, and makes eviction far less likely.'}));
  w.appendChild(sec2);

  /* --- gist sync --- */
  const sec3=h('section',{class:'part'});
  sec3.appendChild(sectionHead2('04','Sync without an account','for static hosting'));
  sec3.appendChild(h('p',{class:'prose',style:'font-size:1rem',
    html:'This — not the choice of web host — is what lets you pick up where you left off on another machine. '+
      'Your progress is kept in a <strong>secret GitHub Gist</strong> only you can see, pulled when you open the app and pushed when you close it. '+
      'There is no server and no cost: your browser talks straight to GitHub.'}));
  sec3.appendChild(ghPanel());
  w.appendChild(sec3);

  /* --- danger --- */
  const sec4=h('section',{class:'part'});
  sec4.appendChild(sectionHead2('05','Reset',''));
  sec4.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap'},[
    h('button',{class:'red',onclick:()=>{
      if(!confirm('Erase all progress in this browser? Download a backup first if you want to keep it.'))return;
      if(!confirm('Really erase? This cannot be undone.'))return;
      window.STORE.suspend();
      localStorage.removeItem(window.STORE.KEY); location.reload();
    }},'Erase all progress')]));
  w.appendChild(sec4);
  return w;
}

function accountPanel(){
  const box=h('div');
  const A=window.ACCOUNT, R=window.REMOTE;
  if(!A || !R || A.state==='off'){
    box.appendChild(h('p',{class:'prose',style:'font-size:1rem',
      html:'This copy is running without its backend — from a file, from the Claude artifact, or from a plain static host. '+
        'Progress is kept in this browser only. Deploy it with a database (the README walks through it, '+
        'entirely in a browser) and this becomes an account: sign in anywhere and your record follows you.'}));
    return box;
  }
  /* Functions are up but no database is attached: every call would fail, and the
     reason is one environment variable, so say exactly that. */
  if(R.available && R.available.database === false){
    box.appendChild(h('div',{class:'callout',style:'border-left-color:var(--red)'},[
      h('span',{class:'lbl',text:'No database is attached to this deployment'}),
      h('p',{html:'The app is served and its API is running, but there is no <code>DATABASE_URL</code>, '+
        'so there is nowhere to keep your record. Create a free Postgres (Neon, Supabase, Railway or '+
        'Vercel Postgres), paste its connection string into your hosting dashboard as '+
        '<code>DATABASE_URL</code>, and redeploy. Until then progress stays in this browser and the '+
        'backups below are what protects it.'})]));
    return box;
  }
  if(R.available && R.available.database && !R.available.dbReady){
    box.appendChild(h('div',{class:'callout',style:'border-left-color:var(--red)'},[
      h('span',{class:'lbl',text:'The database is not answering'}),
      h('p',{html:'A database is configured but the app could not reach it'+
        (R.available.dbError?(' — <code>'+esc2(R.available.dbError)+'</code>'):'')+
        '. Progress is being kept in this browser in the meantime.'})]));
    return box;
  }
  const u=A.user;
  if(A.state==='signedout' || !u){
    const configured = R.available && R.available.signIn;
    box.appendChild(h('p',{class:'prose',style:'font-size:1rem',
      html:'Sign in and your progress lives on the server instead of in this browser. '+
        'Open the site on any device, sign in, and it is simply there — no files, no tokens, no copying.'}));
    if(configured){
      box.appendChild(h('div',{style:'display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin-top:1rem'},[
        h('a',{class:'btnlink',href:R.loginUrl()},'Sign in with GitHub'),
        h('span',{class:'dim',style:'font-size:.82rem',
          text:'Reads your username only. No repository access.'})]));
    } else {
      box.appendChild(h('div',{class:'callout',style:'border-left-color:var(--red)'},[
        h('span',{class:'lbl',text:'Sign-in is not configured on this deployment'}),
        h('p',{html:'The backend and its database are running, but no GitHub OAuth app is set, so there is '+
          'nothing to sign in with. Create one at <code>github.com/settings/developers</code> with a callback '+
          'of <code>'+esc2(location.origin)+'/api/auth/callback</code>, then add '+
          '<code>GITHUB_CLIENT_ID</code> and <code>GITHUB_CLIENT_SECRET</code> to your hosting dashboard and '+
          'redeploy. The README walks through it — no terminal needed.'})]));
    }
    const q=new URLSearchParams(location.hash.split('?')[1]||'');
    const err=q.get('signin');
    if(err && err!=='ok') box.appendChild(h('div',{class:'verdict bad',style:'margin-top:.9rem'},[
      h('span',{class:'vt',text:'Sign-in did not complete'}),
      h('span',{class:'vs',text:{bad_state:'The sign-in link expired — try again.',
        no_token:'GitHub did not return a token.',profile_failed:'Could not read your GitHub profile.',
        not_allowed:'That GitHub account is not on this app\'s allow list.',
        no_database:'This deployment has no database attached, so there is no account to sign in to.',
        server_error:'Something failed on the server during sign-in. Try again.'}[err]||err})]));
    return box;
  }

  const m=R.meta();
  box.appendChild(h('div',{class:'acct'},[
    u.avatar?h('img',{class:'avatar',src:u.avatar,alt:''}):null,
    h('div',{style:'flex:1;min-width:0'},[
      h('strong',{text:u.name||u.login}),
      h('div',{class:'dim',style:'font-size:.82rem',text:'@'+u.login+' · '+R.deviceName()})]),
    h('span',{class:'pill '+(A.state==='conflict'?'red':'ok'),
      text:{ok:'synced',pulled:'synced',syncing:'syncing',offline:'offline',
            conflict:'needs attention',error:'sync problem'}[A.state]||A.state})]));

  box.appendChild(h('div',{class:'stats'},[
    tile('server version',m.version!=null?'v'+m.version:'—'),
    tile('this device',A.state==='ok'||A.state==='pulled'?'up to date':A.state),
    tile('kept on server','last 20 versions','','automatic')]));

  if(A.state==='conflict' && A.server){
    const srv=A.server, local=window.SYNC.summarise(S());
    const rem=window.SYNC.summarise(srv.data||{});
    box.appendChild(h('div',{class:'callout',style:'border-left-color:var(--red)'},[
      h('span',{class:'lbl',text:'Another device saved first'}),
      h('p',{html:'Nothing has been overwritten. Choose which copy to keep — the other is still '+
        'recoverable from the server history and from your local snapshot.'})]));
    const t=h('table');
    t.appendChild(h('thead',{},h('tr',{},[h('th',{text:''}),h('th',{text:'This device'}),h('th',{text:'Server'})])));
    t.appendChild(h('tbody',{},[
      h('tr',{},[h('td',{text:'skills measured'}),h('td',{class:'num',text:String(local.skills)}),h('td',{class:'num',text:String(rem.skills)})]),
      h('tr',{},[h('td',{text:'answers logged'}),h('td',{class:'num',text:String(local.attempts)}),h('td',{class:'num',text:String(rem.attempts)})]),
      h('tr',{},[h('td',{text:'exercises'}),h('td',{class:'num',text:String(local.exercises)}),h('td',{class:'num',text:String(rem.exercises)})])]));
    box.appendChild(h('div',{class:'tblwrap',style:'margin:.8rem 0'},t));
    box.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap'},[
      h('button',{class:'primary',onclick:()=>{A.takeServer();setTimeout(()=>location.reload(),400);}},'Keep the server copy'),
      h('button',{class:'red',onclick:()=>{A.takeLocal();setTimeout(()=>location.reload(),600);}},'Keep this device and overwrite')]));
  }

  const histBox=h('div');
  box.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin-top:1rem'},[
    h('button',{onclick:async()=>{
      histBox.innerHTML='';
      const vs=await R.history();
      if(!vs.length){histBox.appendChild(h('p',{class:'empty',text:'No saved versions yet.'}));return;}
      const t=h('table');
      t.appendChild(h('thead',{},h('tr',{},['version','saved','from','size',''].map(x=>h('th',{text:x})))));
      t.appendChild(h('tbody',{},vs.map(v=>h('tr',{},[
        h('td',{class:'num',text:'v'+v.version}),
        h('td',{text:new Date(v.saved_at).toLocaleString()}),
        h('td',{text:v.device||'—'}),
        h('td',{class:'num',text:(v.bytes/1024).toFixed(1)+' KB'}),
        h('td',{},h('button',{class:'sm',onclick:async()=>{
          if(!confirm('Restore v'+v.version+'? Current progress is kept in the history too.'))return;
          try{ await R.restore(v.version); location.reload(); }
          catch(e){ alert(e.message); }
        }},'Restore'))]))));
      histBox.appendChild(h('div',{class:'tblwrap',style:'margin-top:.8rem'},t));
    }},'Show server history'),
    h('button',{onclick:async()=>{ await R.logout(); location.reload(); }},'Sign out')]));
  box.appendChild(histBox);
  box.appendChild(h('p',{class:'labnote',html:
    'Progress is saved to your account a couple of seconds after each change, and again as you leave the page. '+
    'If a different device saved while this one was open, the write is refused rather than applied — you are shown both and you choose.'}));
  return box;
}

function esc2(s){return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function sectionHead2(idx,title,note){
  return h('div',{class:'parthead'},[h('span',{class:'idx',text:idx}),h('h2',{text:title}),
    note?h('span',{class:'t',text:note}):null]);
}
function rel(t){
  if(!t)return 'never';
  const s=(Date.now()-t)/1000;
  if(s<90)return 'just now';
  if(s<5400)return Math.round(s/60)+' min ago';
  if(s<172800)return Math.round(s/3600)+' h ago';
  return Math.round(s/86400)+' days ago';
}

function ghPanel(){
  const SY=window.SYNC;
  const box=h('div');
  function render(){
    box.innerHTML='';
    const c=SY.gh.config();
    const msg=h('div',{style:'margin-top:.9rem'});
    const say=(ok,t,d)=>{msg.innerHTML='';
      msg.appendChild(h('div',{class:'verdict '+(ok?'good':'bad')},
        [h('span',{class:'vt',text:t}),d?h('span',{class:'vs',text:d}):null]));};

    if(!c.token){
      box.appendChild(h('div',{class:'exsteps'},[
        h('span',{class:'lbl',text:'One-time setup'}),
        h('ol',{class:'num'},[
          h('li',{html:'Open <a href="https://github.com/settings/tokens/new?scopes=gist&description=AI%20From%20Zero%20progress%20sync" target="_blank" rel="noopener">github.com/settings/tokens/new</a> — the link pre-selects the right scope.'}),
          h('li',{html:'Tick <strong>gist</strong> only. Nothing else. Set an expiry you are happy with.'}),
          h('li',{text:'Generate, copy the token, and paste it below.'})])]));
      const inp=h('input',{type:'password',placeholder:'ghp_… (stored only in this browser)'});
      const auto=h('input',{type:'checkbox',checked:'checked'});
      box.appendChild(h('div',{style:'display:grid;gap:.6rem;max-width:460px'},[
        h('div',{},[h('label',{text:'GitHub token (gist scope)'}),inp]),
        h('label',{style:'display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-family:var(--sans);font-size:.85rem;color:var(--ink)'},
          [auto,document.createTextNode('Push automatically after changes')]),
        h('button',{class:'primary',onclick:async()=>{
          const t=inp.value.trim(); if(!t)return;
          say(true,'Checking…');
          try{
            const r=await SY.gh.connect(t, auto.checked);
            if(r.action==='pulled'){
              say(true,'Connected as '+r.login,
                'Found your existing record and loaded it: '+r.summary.skills+
                ' skills, '+r.summary.attempts+' answers. Reloading…');
              setTimeout(()=>location.reload(),1400); return;
            }
            if(r.action==='conflict'){
              say(false,'Connected as '+r.login+' — but both sides have work',
                'Your gist holds '+r.summary.skills+' skills / '+r.summary.attempts+
                ' answers, and this browser has its own progress. Nothing has been '+
                'changed. Use “Compare with gist” below to choose which one wins.');
              if(window.REFRESH_SYNC)window.REFRESH_SYNC();
              setTimeout(render,2600); return;
            }
            say(true,'Connected as '+r.login,
              r.action==='created' ? 'Created a secret gist and pushed your progress.'
                                   : 'Progress pushed to your existing gist.');
            if(window.REFRESH_SYNC)window.REFRESH_SYNC();
            setTimeout(render,1400);
          }catch(e){ say(false,'Could not connect',e.message); }
        }},'Connect')]));
      box.appendChild(h('p',{class:'labnote',html:
        '<strong>What this token can do:</strong> read and write <em>your gists</em>, nothing else — not your repositories, not your account. '+
        'It is stored in this browser only. Anyone with access to this browser profile could read it, so use a token with an expiry and '+
        '<a href="https://github.com/settings/tokens" target="_blank" rel="noopener">revoke it</a> if the device is lost. '+
        'Sync does not work inside the Claude artifact — its content policy blocks outbound requests — so use your hosted link.'}));
      box.appendChild(msg);
      return;
    }

    /* connected */
    const stat=h('div',{class:'stats'},[
      tile('status','connected','ok'),
      tile('last sync',rel(c.lastSync)),
      tile('auto-push',c.auto?'on':'off',c.auto?'ok':'')]);
    box.appendChild(stat);
    const remoteBox=h('div');
    box.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.9rem'},[
      h('button',{class:'primary',onclick:async()=>{
        say(true,'Pushing…');
        try{const r=await SY.gh.push(); say(true,'Pushed',(r.bytes/1024).toFixed(1)+' KB saved to your gist.');
          if(window.REFRESH_SYNC)window.REFRESH_SYNC();
          setTimeout(render,1200);}
        catch(e){say(false,'Push failed',e.message);}
      }},'Push now'),
      h('button',{onclick:async()=>{
        say(true,'Checking the gist…');
        try{
          const rem=await SY.gh.remote();
          if(!rem){say(false,'Nothing stored yet','Push first.');return;}
          const local=SY.stats().summary;
          const risky=SY.gh.localChangedSinceSync();
          remoteBox.innerHTML='';
          remoteBox.appendChild(h('div',{class:'tblwrap',style:'margin-top:.8rem'},[(()=>{
            const t=h('table');
            t.appendChild(h('thead',{},h('tr',{},[h('th',{text:''}),h('th',{text:'This browser'}),h('th',{text:'In the gist'})])));
            t.appendChild(h('tbody',{},[
              row('skills measured',local.skills,rem.summary.skills),
              row('answers logged',local.attempts,rem.summary.attempts),
              row('exercises',local.exercises,rem.summary.exercises),
              row('last written',rel(local.updatedAt),rel(rem.exportedAt))]));
            return t;})()]));
          remoteBox.appendChild(h('div',{style:'display:flex;gap:.5rem;margin-top:.7rem;flex-wrap:wrap;align-items:center'},[
            h('button',{class:'red',onclick:async()=>{
              if(risky&&!confirm('This browser has changes made since the last sync. Pulling replaces them with the gist copy. A local snapshot is kept. Continue?'))return;
              try{const sum=await SY.gh.pull();
                alert('Pulled: '+sum.skills+' skills, '+sum.attempts+' answers. Reloading.');
                location.reload();}
              catch(e){say(false,'Pull failed',e.message);}
            }},'Replace this browser with the gist copy'),
            risky?h('span',{class:'pill red',text:'local has unsynced changes'}):null]));
          say(true,'Compared','Choose which copy wins.');
        }catch(e){say(false,'Could not read the gist',e.message);}
      }},'Compare with gist'),
      h('button',{onclick:()=>{
        const cc=SY.gh.config(); cc.auto=!cc.auto; SY.gh.save(cc); render();
      }},c.auto?'Turn auto-push off':'Turn auto-push on'),
      h('button',{class:'red',onclick:()=>{
        if(!confirm('Disconnect sync? The gist and your progress both stay where they are; only the saved token is removed from this browser.'))return;
        SY.gh.clear(); render();
      }},'Disconnect')]));
    box.appendChild(remoteBox);
    box.appendChild(msg);
    box.appendChild(h('p',{class:'labnote',html:
      '<strong>On a second device:</strong> open the same link, come to this page and paste the same token. '+
      'It finds this gist automatically and loads your progress — no ids to copy. After that, each device pulls newer '+
      'work when you open it and pushes when you close it.<br><br>'+
      'If both devices have unsynced work, nothing is overwritten: you are shown both and you choose. '+
      'A snapshot is kept locally before any replacement.'}));
  }
  function row(l,a,b){return h('tr',{},[h('td',{text:l}),
    h('td',{class:'num',text:String(a)}),h('td',{class:'num',text:String(b)})]);}
  render();
  return box;
}

return {dashboard, practice, practiceMenu, skills, skillPage, analytics, exercises, processes, data,
  questionCard};
})();
