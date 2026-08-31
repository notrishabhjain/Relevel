/* The Content Studio.

   Everything the app teaches — chapters, skills, questions, exercises,
   processes, reference tables — is data held in the database, not code baked
   into the bundle. This is the screen that edits it. A save here is a row
   update; the next page load anywhere reads it. Nothing is rebuilt and nothing
   is redeployed.

   Edits are held as a local draft first, so a half-finished chapter survives a
   closed tab and nobody publishes a paragraph by accident. Publishing sends the
   whole kind with the version it was based on, so two editors cannot silently
   overwrite each other. */

window.STUDIO = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else if(a[k]!=null)e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x!=null)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const CT=()=>window.CONTENT;
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const clone=x=>JSON.parse(JSON.stringify(x));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);

const KINDS=[
  ['chapters','Chapters','The reading. Each one is a story, a vocabulary list, hands-on steps, homework and comprehension questions.'],
  ['skills'  ,'Skills'  ,'The thirty things you are actually trying to get good at. Mastery is tracked per skill, so this list is the spine of the tracker.'],
  ['items'   ,'Questions','The practice bank. Every question names the skill it measures and the difficulty it sits at.'],
  ['exercises','Exercises','Longer pieces of real work, with a rubric you score yourself against.'],
  ['processes','Processes','Recurring loops you run on a cadence rather than finish once.'],
  ['reference','Reference','The supporting tables: domains, glossary, vendor claims, failure map, setup, level names.']];
const KINDNAME=Object.fromEntries(KINDS.map(k=>[k[0],k[1]]));

/* ============ draft store ============ */
const DKEY='aifz2027:drafts';
let drafts={};
try{ drafts=JSON.parse(localStorage.getItem(DKEY)||'{}')||{}; }catch(e){ drafts={}; }
function persist(){ try{ localStorage.setItem(DKEY,JSON.stringify(drafts)); }catch(e){} }

const pub=kind=>CT()?CT().current(kind):null;
function draft(kind){
  if(!drafts[kind]) drafts[kind]={base:CT().versionOf(kind),at:Date.now(),data:clone(pub(kind))};
  return drafts[kind].data;
}
function touch(kind){ if(drafts[kind]){drafts[kind].at=Date.now();persist();} }
function dirty(kind){ return !!drafts[kind]&&!same(drafts[kind].data,pub(kind)); }
function discard(kind){ delete drafts[kind]; persist(); }
const dirtyKinds=()=>KINDS.map(k=>k[0]).filter(dirty);

/* The published copy this device knows about may have moved on while a draft
   sat here. Rebasing is only safe when the draft has not diverged. */
function staleDraft(kind){
  return !!drafts[kind]&&drafts[kind].base!==CT().versionOf(kind);
}

/* Publishing republishes into the running app too, so the change is visible on
   the very next click rather than after a reload. */
async function publish(kind){
  const d=drafts[kind];
  if(!d) throw new Error('nothing to publish');
  const bad=validate(kind,d.data);
  if(bad.length) throw new Error(bad[0]);
  const res=await CT().save(kind,d.data,d.base);
  const all={};
  KINDS.forEach(k=>all[k[0]]=pub(k[0]));
  all[kind]=clone(d.data);
  CT().apply(all);
  if(window.BIND_CONTENT) window.BIND_CONTENT();
  discard(kind);
  return res;
}

/* ============ validation (mirrors the server, so errors show before a save) ============ */
const TYPES=['mcq','multi','num','order','judge'];
function validate(kind,data){
  const e=[];
  const need=(c,m)=>{ if(!c) e.push(m); };
  if(kind==='chapters'){
    need(Array.isArray(data)&&data.length,'Chapters must be a non-empty list.');
    (data||[]).forEach((c,i)=>{
      ['id','title','concept'].forEach(k=>need(typeof c[k]==='string'&&c[k],`Chapter ${i+1} needs a ${k}.`));
      need(typeof c.num==='number',`Chapter ${c.id||i+1} needs a number.`);
      ['story','words','handson','homework','check'].forEach(k=>
        need(Array.isArray(c[k]),`Chapter ${c.id||i+1} needs ${k} as a list.`));
    });
    const ids=(data||[]).map(c=>c.id);
    need(new Set(ids).size===ids.length,'Two chapters share an id.');
  }
  if(kind==='skills'){
    need(Array.isArray(data)&&data.length,'Skills must be a non-empty list.');
    (data||[]).forEach((s,i)=>{
      need(typeof s.id==='string'&&s.id,`Skill ${i+1} needs an id.`);
      need(typeof s.n==='string'&&s.n,`Skill ${s.id||i+1} needs a name.`);
      need(Array.isArray(s.L)&&s.L.length===4,`Skill ${s.id||i+1} needs four level descriptions.`);
    });
  }
  if(kind==='items'){
    need(Array.isArray(data)&&data.length,'Questions must be a non-empty list.');
    const seen=new Set();
    (data||[]).forEach((it,i)=>{
      if(!Array.isArray(it)||it.length<7){ e.push(`Question ${i+1} is malformed.`); return; }
      const [id,sk,diff,type,stem,opts,ans]=it;
      need(typeof id==='string'&&id,`Question ${i+1} needs an id.`);
      need(!seen.has(id),`Two questions share the id ${id}.`); seen.add(id);
      need([1,2,3].includes(diff),`Question ${id} needs a difficulty of 1, 2 or 3.`);
      need(TYPES.includes(type),`Question ${id} has an unknown type.`);
      need(typeof stem==='string'&&stem,`Question ${id} needs a question.`);
      if(type==='mcq'){
        need(Array.isArray(opts)&&opts.length>=2,`Question ${id} needs at least two options.`);
        need(typeof ans==='number'&&ans>=0&&ans<(opts||[]).length,`Question ${id} needs one option marked correct.`);
      }
      if(type==='multi'){
        need(Array.isArray(opts)&&Array.isArray(ans)&&ans.length,`Question ${id} needs at least one correct option.`);
      }
      if(type==='order'){
        need(Array.isArray(opts)&&Array.isArray(ans)&&ans.length===opts.length,`Question ${id}'s order answer must cover every option.`);
      }
      if(type==='num') need(Array.isArray(ans)&&typeof ans[0]==='number',`Question ${id} needs a numeric answer.`);
      if(type==='judge') need(typeof ans==='string'&&ans,`Question ${id} needs a model answer.`);
      else need(typeof it[7]==='string'&&it[7],`Question ${id} needs an explanation.`);
    });
  }
  if(kind==='exercises'){
    need(Array.isArray(data),'Exercises must be a list.');
    (data||[]).forEach((x,i)=>{
      need(typeof x.id==='string'&&x.id,`Exercise ${i+1} needs an id.`);
      need(Array.isArray(x.rubric),`Exercise ${x.id||i+1} needs a rubric.`);
      (x.rubric||[]).forEach(r=>need(Array.isArray(r.l)&&r.l.length===4,
        `A rubric row in ${x.id||i+1} does not have four levels.`));
    });
  }
  if(kind==='processes') need(Array.isArray(data),'Processes must be a list.');
  if(kind==='reference') need(data&&typeof data==='object'&&!Array.isArray(data),'Reference must be an object.');
  return e;
}
/* Links the editors can break without noticing. */
function warnings(){
  const items=pub('items')||[], skills=pub('skills')||[], chs=pub('chapters')||[];
  const dI=drafts.items?drafts.items.data:items, dS=drafts.skills?drafts.skills.data:skills;
  const ids=new Set(dS.map(s=>s.id));
  const w=[];
  const orph=[...new Set(dI.filter(it=>!ids.has(it[1])).map(it=>it[1]))];
  if(orph.length) w.push('Questions point at skills that do not exist: '+orph.join(', '));
  const bare=dS.filter(s=>!dI.some(it=>it[1]===s.id)).map(s=>s.id);
  if(bare.length) w.push('Skills with no questions, so mastery can never be measured: '+bare.join(', '));
  const nums=new Set(chs.map(c=>c.num));
  const badRef=[...new Set(dS.flatMap(s=>(s.ch||[])).filter(n=>!nums.has(n)))];
  if(badRef.length) w.push('Skills cite chapters that do not exist: '+badRef.join(', '));
  return w;
}

/* ============ small form pieces ============ */
function fld(label,node,hint){
  return h('div',{class:'sfield'},[h('label',{text:label}),node,
    hint?h('span',{class:'shint',text:hint}):null]);
}
function inp(v,on,ph){
  const e=h('input',{type:'text',placeholder:ph||null}); e.value=v==null?'':String(v);
  e.addEventListener('input',()=>on(e.value)); return e;
}
function ta(v,on,rows,ph){
  const e=h('textarea',{rows:String(rows||4),placeholder:ph||null}); e.value=v==null?'':String(v);
  e.addEventListener('input',()=>on(e.value)); return e;
}
function numin(v,on,step,ph){
  const e=h('input',{type:'number',step:step||'1',placeholder:ph||null});
  e.value=v==null?'':String(v);
  e.addEventListener('input',()=>on(e.value===''?null:Number(e.value))); return e;
}
function sel(v,opts,on){
  const e=h('select',{});
  opts.forEach(([val,lab])=>{
    const o=h('option',{value:String(val),text:lab});
    if(String(val)===String(v))o.setAttribute('selected','selected');
    e.appendChild(o);});
  e.value=String(v);
  e.addEventListener('change',()=>on(e.value)); return e;
}
const btn=(label,on,cls)=>h('button',{class:cls||'sm',onclick:on},label);

/* A repeating list with add, delete and reorder. `row(item,i)` renders one
   entry's editor; `blank()` makes a new one. */
function repeat(arr,row,blank,on,label,hint,addLabel){
  const box=h('div',{class:'srepeat'});
  const draw=()=>{
    box.innerHTML='';
    arr.forEach((it,i)=>{
      box.appendChild(h('div',{class:'srow'},[
        h('div',{class:'srowtools'},[
          h('span',{class:'sidx',text:String(i+1)}),
          btn('↑',()=>{if(i){arr.splice(i-1,0,arr.splice(i,1)[0]);on();draw();}}),
          btn('↓',()=>{if(i<arr.length-1){arr.splice(i+1,0,arr.splice(i,1)[0]);on();draw();}}),
          btn('×',()=>{arr.splice(i,1);on();draw();},'sm red')]),
        h('div',{class:'srowbody'},[row(it,i)])]));
    });
    box.appendChild(btn('+ '+(addLabel||'Add'),()=>{arr.push(blank());on();draw();}));
  };
  draw();
  return label?fld(label,box,hint):box;
}
/* Plain list of strings, one per line — the cheapest editor that fits. */
function linesField(label,arr,on,hint,rows){
  return fld(label,ta(arr.join('\n'),v=>{
    arr.length=0; v.split('\n').forEach(x=>arr.push(x)); on();},rows||4),
    hint||'One per line.');
}
function csvField(label,arr,on,hint,numeric){
  return fld(label,inp(arr.join(', '),v=>{
    const parts=v.split(',').map(s=>s.trim()).filter(Boolean);
    arr.length=0; parts.forEach(x=>arr.push(numeric?Number(x):x)); on();}),
    hint||'Comma separated.');
}

/* ============ prose blocks ============ */
const BLOCKS=[['p','Paragraph'],['key','Key line'],['l','Bullets'],['n','Numbered'],
  ['c','Callout'],['code','Code'],['x','What you should see'],['tb','Table'],
  ['q','Checkpoint — questions'],['pred','Checkpoint — predict'],
  ['try','Checkpoint — your turn'],['lab','Interactive lab']];
/* The interactive blocks carry an object or an id list rather than prose, so
   converting one to a paragraph cannot keep its text. */
const INTERACTIVE=['q','pred','try','lab'];
function blockText(b){
  if(b[0]==='l'||b[0]==='n') return (b[1]||[]).join('\n');
  if(b[0]==='c') return b[2]||'';
  if(b[0]==='tb'||INTERACTIVE.includes(b[0])) return '';
  return b[1]||'';
}
function newId(prefix){
  return prefix + '-' + Math.random().toString(36).slice(2,7);
}
function recast(b,t){
  const txt=blockText(b);
  b.length=0; b.push(t);
  if(t==='l'||t==='n') b.push(txt?txt.split('\n'):['']);
  else if(t==='c') b.push('A note',txt);
  else if(t==='tb') b.push(['Column A','Column B'],[['','']]);
  else if(t==='q') b.push((window.ALL_ITEMS&&window.ALL_ITEMS[0]&&window.ALL_ITEMS[0][0])||'I001');
  else if(t==='lab') b.push(Object.keys(window.LABS||{})[0]||'tokenizer');
  else if(t==='pred') b.push({id:newId('pred'),short:true,ask:txt||'What do you think happens?',
    reveal:'What actually happens.',ph:'Your prediction'});
  else if(t==='try') b.push({id:newId('try'),task:txt||'Write the thing.',ph:'Write it here',
    after:'What a strong answer contains.',rows:4});
  else b.push(txt);
}
function tableEditor(b,on){
  const heads=b[1]||(b[1]=['Column A','Column B']);
  const rows =b[2]||(b[2]=[]);
  const box=h('div',{class:'stable'});
  const draw=()=>{
    box.innerHTML='';
    const g='grid-template-columns:repeat('+heads.length+',minmax(110px,1fr)) 2.2rem';
    const hr=h('div',{class:'stbrow',style:g});
    heads.forEach((x,i)=>hr.appendChild(inp(x,v=>{heads[i]=v;on();},'Heading')));
    hr.appendChild(btn('−',()=>{ if(heads.length>1){heads.pop();rows.forEach(r=>r.pop());on();draw();} },'sm red'));
    box.appendChild(hr);
    rows.forEach((r,ri)=>{
      while(r.length<heads.length) r.push('');
      const rr=h('div',{class:'stbrow',style:g});
      heads.forEach((_,ci)=>rr.appendChild(inp(r[ci],v=>{r[ci]=v;on();})));
      rr.appendChild(btn('×',()=>{rows.splice(ri,1);on();draw();},'sm red'));
      box.appendChild(rr);
    });
    box.appendChild(h('div',{class:'srowtools'},[
      btn('+ Row',()=>{rows.push(heads.map(()=>''));on();draw();}),
      btn('+ Column',()=>{heads.push('Column '+(heads.length+1));rows.forEach(r=>r.push(''));on();draw();})]));
  };
  draw(); return box;
}
/* A checkpoint question is a reference into the question bank, not a copy of
   one — so it is edited once, in the question editor, and stays the same
   measured item wherever it is asked. */
function questionRefEditor(b,on){
  const box=h('div');
  const ids=b.slice(1).flat();
  const draw=()=>{
    box.innerHTML='';
    const known=window.ENG?window.ENG.byItem:{};
    box.appendChild(fld('question ids',inp(ids.join(', '),v=>{
      const list=v.split(',').map(x=>x.trim()).filter(Boolean);
      b.length=1; list.forEach(x=>b.push(x));
      ids.length=0; list.forEach(x=>ids.push(x));
      on(); preview();
    },'I001, I002'),'From the question bank. Several ids ask them one after another.'));
    const pv=h('div',{class:'slist'});
    box.appendChild(pv);
    function preview(){
      pv.innerHTML='';
      b.slice(1).flat().forEach(id=>{
        const it=known[id];
        pv.appendChild(h('div',{class:'sitem'},[
          h('span',{class:'sitemm mono '+(it?'dim':'')  ,text:id}),
          h('span',{class:'sitemd',style:'flex:1',
            text:it?String(it.stem).replace(/<[^>]+>/g,'').slice(0,90)
                  :'not in the bank — this checkpoint will not render'}),
          it?h('a',{class:'backlink',href:'#/studio/items/'+encodeURIComponent(id),text:'edit'}):null]));
      });
    }
    preview();
  };
  draw(); return box;
}

function checkpointEditor(b,on){
  const o=b[1]||(b[1]={});
  const box=h('div',{class:'sform',style:'gap:.7rem'});
  box.appendChild(fld('id',inp(o.id,v=>{o.id=v;on();}),
    'Where the answer is stored. Changing it forgets what was written here.'));
  if(b[0]==='pred'){
    box.appendChild(fld('what to predict',ta(o.ask,v=>{o.ask=v;on();},3),'HTML allowed.'));
    box.appendChild(fld('what actually happens',ta(o.reveal,v=>{o.reveal=v;on();},4),
      'Shown only after they commit.'));
    box.appendChild(fld('and therefore',ta(o.then,v=>{o.then=v;on();},2),
      'Optional. The consequence worth carrying forward.'));
    box.appendChild(h('div',{class:'sgrid2'},[
      fld('placeholder',inp(o.ph,v=>{o.ph=v;on();})),
      fld('input',sel(o.short?'1':'0',[['1','One line'],['0','A few lines']],
        v=>{o.short=v==='1';on();}))]));
  } else {
    box.appendChild(fld('the task',ta(o.task,v=>{o.task=v;on();},4),'HTML allowed.'));
    box.appendChild(fld('what a strong answer contains',ta(o.after,v=>{o.after=v;on();},4),
      'Unlocks once they have written something of their own.'));
    box.appendChild(h('div',{class:'sgrid3'},[
      fld('placeholder',inp(o.ph,v=>{o.ph=v;on();})),
      fld('minutes',numin(o.mins,v=>{o.mins=v;on();})),
      fld('box height',numin(o.rows,v=>{o.rows=v;on();}),'Rows.')]));
  }
  return box;
}

function blockEditor(b,on){
  const box=h('div',{class:'sblock'});
  const draw=()=>{
    box.innerHTML='';
    box.appendChild(h('div',{class:'sblockhead'},[
      sel(b[0],BLOCKS,v=>{recast(b,v);on();draw();}),
      h('span',{class:'shint',text:
        b[0]==='p'?'HTML is allowed: <em>, <strong>, <code>.':
        b[0]==='key'?'Pulled out as the sentence that must survive.':
        b[0]==='c'?'A boxed aside with its own small heading.':
        b[0]==='x'?'What the learner should see after running the step.':
        b[0]==='code'?'Shown as a copyable code block.':''})]));
    if(b[0]==='l'||b[0]==='n'){
      const arr=b[1]||(b[1]=['']);
      box.appendChild(ta(arr.join('\n'),v=>{arr.length=0;v.split('\n').forEach(x=>arr.push(x));on();},4));
      box.appendChild(h('span',{class:'shint',text:'One bullet per line. HTML allowed.'}));
    } else if(b[0]==='c'){
      box.appendChild(inp(b[1],v=>{b[1]=v;on();},'Callout heading'));
      box.appendChild(ta(b[2],v=>{b[2]=v;on();},3,'Callout text'));
    } else if(b[0]==='tb'){
      box.appendChild(tableEditor(b,on));
    } else if(b[0]==='q'){
      box.appendChild(questionRefEditor(b,on));
    } else if(b[0]==='lab'){
      const labs=Object.keys(window.LABS||{}).map(k=>[k,(window.LABS[k].title||k)]);
      box.appendChild(fld('which lab',sel(b[1],labs.length?labs:[[b[1],b[1]]],v=>{b[1]=v;on();}),
        'Dropped into the reading at this point.'));
    } else if(b[0]==='pred'||b[0]==='try'){
      box.appendChild(checkpointEditor(b,on));
    } else {
      box.appendChild(ta(b[1],v=>{b[1]=v;on();},b[0]==='code'?6:4));
    }
  };
  draw(); return box;
}
const blocksField=(label,arr,on,hint)=>
  repeat(arr,b=>blockEditor(b,on),()=>['p',''],on,label,hint,'Block');

/* ============ page furniture ============ */
function phead(eyebrow,title,sub){
  return h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:eyebrow})]),
    h('h1',{text:title}), sub?h('p',{html:sub}):null]);
}
function rel(t){
  if(!t) return 'never';
  const s=Math.floor((Date.now()-t)/1000);
  if(s<60) return 'just now';
  if(s<3600) return Math.floor(s/60)+' min ago';
  if(s<86400) return Math.floor(s/3600)+' h ago';
  return Math.floor(s/86400)+' d ago';
}
const reroute=()=>{ window.dispatchEvent(new HashChangeEvent('hashchange')); };

/* The one place that explains, in plain terms, why an edit may not be publishable. */
function statusBanner(){
  const c=CT();
  const src=c?c.source:'built-in';
  const editor=!!(c&&c.editor);
  if(src==='server'&&editor) return null;
  const lines=[];
  if(src==='built-in') lines.push(
    'This page is not talking to a database — it is running on the copy built into the file. '+
    'Edits below are kept in this browser and can be downloaded as JSON, but there is nowhere to publish them to.');
  else if(src==='cache') lines.push(
    'The database did not answer, so this is the last copy this browser saw. Publishing is off until it responds again.');
  else if(!editor) lines.push(
    'You are reading the live content but you are not an editor on this deployment, so Publish is off. '+
    'Add your GitHub login to the <code>CONTENT_EDITORS</code> environment variable (or <code>ALLOWED_LOGINS</code>) '+
    'in your hosting dashboard and sign in again. Your drafts are kept here in the meantime.');
  return h('div',{class:'callout'},[
    h('span',{class:'lbl',text:'Read-only'}),
    h('p',{html:lines.join(' ')})]);
}

function draftBar(kind,onChanged){
  const bar=h('div',{class:'sbar'});
  /* Held outside draw() so the result of a publish survives the redraw that
     follows it — otherwise the one message worth reading disappears. */
  let note={cls:'',text:''};
  const draw=()=>{
    bar.innerHTML='';
    const d=dirty(kind), c=CT(), can=c&&c.source==='server'&&c.editor;
    const errs=d?validate(kind,drafts[kind].data):[];
    const msg=h('span',{class:'sbarmsg '+note.cls,text:note.text});
    bar.appendChild(h('span',{class:'pill '+(d?'red':'ok'),
      text:d?'unpublished draft':'published v'+(c?c.versionOf(kind):0)}));
    if(d&&staleDraft(kind)) bar.appendChild(h('span',{class:'pill red',text:'based on an older version'}));
    bar.appendChild(h('span',{class:'sp'}));
    if(errs.length) bar.appendChild(h('span',{class:'sbarmsg bad',text:errs.length+' problem'+(errs.length>1?'s':'')+' — '+errs[0]}));
    bar.appendChild(msg);
    const pubBtn=h('button',{class:'primary sm',onclick:async()=>{
      pubBtn.disabled=true;
      note={cls:'',text:'Publishing…'}; msg.className='sbarmsg'; msg.textContent=note.text;
      try{
        const r=await publish(kind);
        note={cls:'ok',text:'Published as v'+r.version+
          ((r.warnings&&r.warnings.length)?' — '+r.warnings.join('; '):'')};
        if(onChanged)onChanged();
        draw();
      }catch(err){
        note={cls:'bad',text:err.message};
        msg.className='sbarmsg bad'; msg.textContent=note.text; pubBtn.disabled=false;
      }
    }},'Publish');
    if(!d||!can||errs.length) pubBtn.disabled=true;
    pubBtn.setAttribute('title', !d?'No changes to publish':
      !can?'Publishing needs a database and editor rights':
      errs.length?'Fix the problems first':'Send this to the database');
    bar.appendChild(pubBtn);
    if(d) bar.appendChild(btn('Discard draft',()=>{
      if(!confirm('Throw away your unpublished changes to '+KINDNAME[kind].toLowerCase()+'?'))return;
      discard(kind); note={cls:'',text:''}; if(onChanged)onChanged(); draw(); reroute();},'sm red'));
    bar.appendChild(btn('Download JSON',()=>download(kind)));
  };
  draw(); return bar;
}

function download(kind){
  const data=dirty(kind)?drafts[kind].data:pub(kind);
  const text=JSON.stringify(data,null,2);
  try{
    const a=document.createElement('a');
    a.href=URL.createObjectURL(new Blob([text],{type:'application/json'}));
    a.download='aifz-'+kind+'.json'; a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),2000);
  }catch(e){
    navigator.clipboard&&navigator.clipboard.writeText(text);
    alert('Download is blocked here, so the JSON was copied to your clipboard instead.');
  }
}

/* ============ overview ============ */
function overview(){
  const w=h('div',{class:'wrap-wide'});
  const c=CT();
  w.appendChild(phead('Content','Studio',
    'Everything this app teaches is stored as data, not baked into the page. Edit it here and publish; '+
    'the change is live on the next load, on every device. There is no build step and nothing to redeploy.'));
  const b=statusBanner(); if(b) w.appendChild(b);

  const counts={chapters:(pub('chapters')||[]).length,skills:(pub('skills')||[]).length,
    items:(pub('items')||[]).length,exercises:(pub('exercises')||[]).length,
    processes:(pub('processes')||[]).length,
    reference:Object.keys(pub('reference')||{}).length};
  const unit={chapters:'chapters',skills:'skills',items:'questions',exercises:'exercises',
    processes:'processes',reference:'tables'};

  const warn=warnings();
  if(warn.length) w.appendChild(h('div',{class:'callout'},[
    h('span',{class:'lbl',text:'Worth a look'}),
    h('ul',{class:'plain'},warn.map(x=>h('li',{text:x})))]));

  const grid=h('div',{class:'domgrid',style:'margin:1.5rem 0'});
  KINDS.forEach(([kind,name,blurb])=>{
    const v=c?(c.versions[kind]||{}):{};
    grid.appendChild(h('a',{class:'domcard',href:'#/studio/'+kind},[
      h('div',{class:'domtop'},[
        h('h3',{style:'margin:0;font-size:1rem',text:name}),
        h('span',{class:'sp'}),
        dirty(kind)?h('span',{class:'pill red',text:'draft'}):null,
        h('span',{class:'dommet',text:counts[kind]+' '+unit[kind]})]),
      h('p',{class:'domblurb',text:blurb}),
      h('span',{class:'domsub',text:v.version?('v'+v.version+' · '+(v.updatedBy||'unknown')+' · '+rel(v.updatedAt))
        :'built-in, never edited'})]));
  });
  w.appendChild(grid);

  const d=dirtyKinds();
  const sec=h('section',{class:'part'});
  sec.appendChild(h('div',{class:'parthead'},[h('h2',{text:'Publishing'})]));
  if(!d.length) sec.appendChild(h('p',{class:'empty',text:'No unpublished drafts. What you see in the app is what is in the database.'}));
  else{
    const msg=h('div');
    sec.appendChild(h('p',{class:'prose',style:'font-size:1rem',
      html:'Unpublished drafts in <strong>'+d.map(k=>esc(KINDNAME[k].toLowerCase())).join(', ')+
      '</strong>. They live in this browser until you publish them.'}));
    const all=h('button',{class:'primary',onclick:async()=>{
      all.disabled=true; msg.innerHTML='';
      for(const k of d){
        try{ const r=await publish(k);
          msg.appendChild(h('div',{class:'verdict good'},[h('span',{class:'vt',text:KINDNAME[k]}),
            h('span',{class:'vs',text:'published as v'+r.version})])); }
        catch(err){ msg.appendChild(h('div',{class:'verdict bad'},[h('span',{class:'vt',text:KINDNAME[k]}),
            h('span',{class:'vs',text:err.message})])); }
      }
      all.disabled=false; reroute();
    }},'Publish everything');
    if(!(c&&c.source==='server'&&c.editor)) all.disabled=true;
    sec.appendChild(h('div',{style:'display:flex;gap:.5rem;flex-wrap:wrap;margin:.9rem 0'},[all,
      btn('Discard all drafts',()=>{ if(!confirm('Throw away every unpublished change?'))return;
        drafts={};persist();reroute();},'red')]));
    sec.appendChild(msg);
  }
  w.appendChild(sec);

  const sec2=h('section',{class:'part'});
  sec2.appendChild(h('div',{class:'parthead'},[h('h2',{text:'How this works'})]));
  sec2.appendChild(h('dl',{class:'words'},[
    row2('Where content lives','A row per kind in the database, holding the whole list as JSON with a version number.'),
    row2('What Publish does','Sends your draft with the version it was based on. If someone else published first, the save is refused rather than overwriting them.'),
    row2('Who can publish','Anyone whose GitHub login is in CONTENT_EDITORS (or ALLOWED_LOGINS if that is unset) in your hosting dashboard.'),
    row2('If the database is down','The app falls back to the last copy this browser saw, and then to the copy built into the page. It never fails to open.'),
    row2('Undo','Every publish keeps the previous thirty versions server-side, and each kind can be reset to the copy shipped with the build.')]));
  w.appendChild(sec2);
  return w;
}
function row2(a,b){ return h('div',{class:'word'},[h('dt',{text:a}),h('dd',{html:b})]); }

/* ============ list pages ============ */
function kindPage(kind){
  if(kind==='reference') return referencePage();
  const w=h('div',{class:'wrap-wide'});
  const arr=draft(kind);
  const on=()=>touch(kind);
  w.appendChild(phead('Studio · '+KINDNAME[kind],KINDNAME[kind],
    'Editing a draft. Nothing here reaches the database until you publish.'));
  const b=statusBanner(); if(b) w.appendChild(b);
  w.appendChild(h('p',{},[h('a',{href:'#/studio',class:'backlink',text:'← All content'})]));
  const bar=draftBar(kind); w.appendChild(bar);

  const list=h('div',{class:'slist'});
  const q=h('input',{type:'search',placeholder:'Filter…',style:'margin:1rem 0 .5rem;max-width:340px'});
  const drawList=()=>{
    list.innerHTML='';
    const f=q.value.toLowerCase().trim();
    const rows=arr.map((x,i)=>({x,i})).filter(({x})=>!f||summary(kind,x).join(' ').toLowerCase().includes(f));
    if(!rows.length) list.appendChild(h('div',{class:'empty',text:'Nothing matches.'}));
    rows.forEach(({x,i})=>{
      const [t,d,m]=summary(kind,x);
      list.appendChild(h('div',{class:'sitem'},[
        h('a',{class:'sitemmain',href:'#/studio/'+kind+'/'+encodeURIComponent(idOf(kind,x,i))},[
          h('span',{class:'sitemt',text:t}),
          h('span',{class:'sitemd',text:d})]),
        h('span',{class:'sitemm mono dim',text:m||''}),
        btn('Duplicate',()=>{ const c2=clone(x); reid(kind,c2,arr); arr.splice(i+1,0,c2); on(); drawList(); }),
        btn('Delete',()=>{ if(confirm('Delete "'+t+'" from your draft?')){arr.splice(i,1);on();drawList();
          bar.replaceWith(draftBar(kind));} },'sm red')]));
    });
  };
  q.addEventListener('input',drawList);
  drawList();
  w.appendChild(h('div',{style:'display:flex;gap:.5rem;align-items:center;flex-wrap:wrap'},[q,
    h('span',{class:'sp'}),
    btn('+ New '+KINDNAME[kind].replace(/s$/,'').toLowerCase(),()=>{
      const n=blankOf(kind,arr); arr.push(n); on();
      location.hash='#/studio/'+kind+'/'+encodeURIComponent(idOf(kind,n,arr.length-1));},'primary sm'),
    btn('Edit as JSON',()=>{location.hash='#/studio/'+kind+'/~json';})]));
  w.appendChild(list);
  return w;
}
function idOf(kind,x,i){ return x&&x.id!=null?x.id:(Array.isArray(x)?x[0]:String(i)); }
function summary(kind,x){
  if(kind==='chapters') return [x.num+'. '+x.title,x.concept||'',(x.story||[]).length+' blocks · '+(x.check||[]).length+' checks'];
  if(kind==='skills')   return [x.id+' · '+x.n,x.core||'',(x.ch||[]).join(', ')];
  if(kind==='items')    return [x[0]+' · '+String(x[4]||'').slice(0,90),(x[1]||'')+' · '+(x[3]||''),'L'+x[2]];
  if(kind==='exercises')return [x.id+' · '+x.t,x.brief||'',(x.mins||0)+' min'];
  if(kind==='processes')return [x.id+' · '+x.n,x.why||'',x.cad||''];
  return [String(x),'',''];
}
function nextId(prefix,taken,width){
  let n=1; const pad=v=>String(v).padStart(width,'0');
  while(taken.has(prefix+pad(n))) n++;
  return prefix+pad(n);
}
function blankOf(kind,arr){
  if(kind==='chapters'){
    const nums=arr.map(c=>c.num||0);
    const n=(nums.length?Math.max.apply(null,nums):0)+1;
    return {id:nextId('ch',new Set(arr.map(c=>c.id)),0)||('ch'+n),num:n,part:1,minutes:45,labs:[],
      title:'Untitled chapter',concept:'One sentence a reader could repeat a week later.',
      story:[['p','']],words:[],handson:[],wrong:[],homework:[],check:[],red:[]};
  }
  if(kind==='skills') return {id:nextId('S',new Set(arr.map(s=>s.id)),2),d:(window.DOMAINS&&window.DOMAINS[0]||{}).id||'mech',
    n:'Untitled skill',ch:[],labs:[],core:'What someone can do when they have this.',
    L:['Has heard of it','Can follow it with help','Can do it unaided','Can defend it under challenge']};
  if(kind==='items') return [nextId('I',new Set(arr.map(i=>i[0])),3),
    (window.SKILLS&&window.SKILLS[0]||{}).id||'S01',1,'mcq','New question',
    ['Option A','Option B'],0,'Why the right answer is right.'];
  if(kind==='exercises') return {id:nextId('E',new Set(arr.map(x=>x.id)),2),t:'Untitled exercise',
    sk:[],ch:1,mins:30,tier:1,brief:'',deliverable:'',steps:[],
    rubric:[{c:'A dimension to score yourself on',l:['Not yet','Partly','Solidly','Convincingly']}],iterate:''};
  return {id:nextId('P',new Set(arr.map(x=>x.id)),2),n:'Untitled process',cad:'Weekly',
    why:'',metric:'',phases:[{n:'Phase one',s:[['Step','What to actually do.']]}]};
}
function reid(kind,x,arr){
  if(kind==='items') x[0]=nextId('I',new Set(arr.map(i=>i[0])),3);
  else if(x.id) x.id=nextId(x.id.replace(/[0-9]+$/,''),new Set(arr.map(y=>y.id)),
    (x.id.match(/[0-9]+$/)||[''])[0].length||2);
  if(kind==='chapters') x.num=(arr.length?Math.max.apply(null,arr.map(c=>c.num||0)):0)+1;
}

/* ============ record editors ============ */
function recordPage(kind,id){
  if(id==='~json') return jsonPage(kind);
  if(kind==='reference') return referenceKeyPage(id);
  const arr=draft(kind);
  const i=arr.findIndex((x,n)=>String(idOf(kind,x,n))===String(id));
  const w=h('div',{class:'wrap-wide'});
  if(i<0){ w.appendChild(h('div',{class:'empty',text:'No such record in your draft.'}));
    w.appendChild(h('p',{},[h('a',{href:'#/studio/'+kind,text:'← Back'})])); return w; }
  const x=arr[i];
  const on=()=>{ touch(kind); bar.replaceWith(bar=draftBar(kind)); };
  const [t]=summary(kind,x);
  w.appendChild(phead('Studio · '+KINDNAME[kind],t,'Every change here is saved to your draft as you type.'));
  w.appendChild(h('p',{},[h('a',{href:'#/studio/'+kind,class:'backlink',text:'← All '+KINDNAME[kind].toLowerCase()}),
    h('span',{class:'dim',text:'  ·  '}),
    h('a',{href:'#/studio/'+kind+'/~json',class:'backlink',text:'Edit the whole list as JSON'})]));
  let bar=draftBar(kind); w.appendChild(bar);
  const form=h('div',{class:'sform'});
  ({chapters:chapterForm,skills:skillForm,items:itemForm,
    exercises:exerciseForm,processes:processForm}[kind])(form,x,on,arr);
  w.appendChild(form);
  return w;
}

function chapterForm(f,c,on){
  f.appendChild(h('div',{class:'sgrid4'},[
    fld('id',inp(c.id,v=>{c.id=v;on();}),'Used in links. Changing it breaks bookmarks.'),
    fld('number',numin(c.num,v=>{c.num=v;on();})),
    fld('part',sel(c.part,[[1,'I — Foundations'],[2,'II — Building'],[3,'III — Judgement']],v=>{c.part=Number(v);on();})),
    fld('minutes',numin(c.minutes,v=>{c.minutes=v;on();}),'Honest reading + doing time.')]));
  f.appendChild(fld('title',inp(c.title,v=>{c.title=v;on();})));
  f.appendChild(fld('concept',ta(c.concept,v=>{c.concept=v;on();},2),
    'The one sentence someone should still be able to say a week later.'));
  f.appendChild(csvField('labs',c.labs||(c.labs=[]),on,'Ids of interactive labs shown in this chapter.'));
  f.appendChild(linesField('red marks',c.red||(c.red=[]),on,'Failure modes this chapter teaches you to spot. One per line.',3));
  f.appendChild(h('hr',{class:'hr'}));
  f.appendChild(blocksField('The reading',c.story||(c.story=[]),on,
    'The narrative. Mix paragraphs, key lines, callouts and tables.'));
  f.appendChild(repeat(c.words||(c.words=[]),wd=>h('div',{class:'sgrid2'},[
      inp(wd[0],v=>{wd[0]=v;on();},'Term'), ta(wd[1],v=>{wd[1]=v;on();},2,'Plain-language definition')]),
    ()=>['',''],on,'Vocabulary','Words the reader must own before moving on.','Word'));
  f.appendChild(repeat(c.handson||(c.handson=[]),st=>h('div',{},[
      inp(st.h,v=>{st.h=v;on();},'Step heading'),
      blocksField('',st.b||(st.b=[]),on)]),
    ()=>({h:'New step',b:[['p','']]}),on,'Hands-on','The part where they type things and see output.','Step'));
  f.appendChild(repeat(c.wrong||(c.wrong=[]),wr=>h('div',{class:'sgrid3'},[
      inp(wr[0],v=>{wr[0]=v;on();},'What they see'),
      inp(wr[1],v=>{wr[1]=v;on();},'Why'),
      inp(wr[2],v=>{wr[2]=v;on();},'Fix')]),
    ()=>['','',''],on,'When it goes wrong','Real errors, their cause, and the fix.','Error'));
  f.appendChild(repeat(c.homework||(c.homework=[]),hw=>h('div',{},[
      inp(hw[0],v=>{hw[0]=v;on();},'Title'), ta(hw[1],v=>{hw[1]=v;on();},3,'What to do')]),
    ()=>['',''],on,'Homework','Work done away from the page.','Task'));
  f.appendChild(repeat(c.check||(c.check=[]),ck=>h('div',{},[
      ta(ck[0],v=>{ck[0]=v;on();},2,'Question'), ta(ck[1],v=>{ck[1]=v;on();},3,'The answer they should have reached')]),
    ()=>['',''],on,'Comprehension check','Answered from memory, then revealed.','Question'));
}

function skillForm(f,s,on){
  const doms=(window.DOMAINS||[]).map(d=>[d.id,d.name]);
  f.appendChild(h('div',{class:'sgrid3'},[
    fld('id',inp(s.id,v=>{s.id=v;on();}),'Questions point at this.'),
    fld('domain',sel(s.d,doms.length?doms:[[s.d,s.d]],v=>{s.d=v;on();})),
    fld('name',inp(s.n,v=>{s.n=v;on();}))]));
  f.appendChild(fld('what it means',ta(s.core,v=>{s.core=v;on();},2),
    'Finish the sentence "someone with this skill can…".'));
  f.appendChild(h('div',{class:'sgrid2'},[
    csvField('chapters',s.ch||(s.ch=[]),on,'Chapter numbers that teach it.',true),
    csvField('labs',s.labs||(s.labs=[]),on,'Lab ids that exercise it.')]));
  f.appendChild(h('hr',{class:'hr'}));
  f.appendChild(h('p',{class:'shint',text:'The four levels. Mastery is reported against these, so write them as things a person can be seen doing — not as feelings of confidence.'}));
  const names=(window.LEVEL_NAMES||['Level 1','Level 2','Level 3','Level 4']);
  (s.L||(s.L=['','','',''])).forEach((_,i)=>
    f.appendChild(fld(names[i]||('level '+(i+1)),ta(s.L[i],v=>{s.L[i]=v;on();},2))));
}

function itemForm(f,it,on){
  const skills=(window.SKILLS||[]).map(s=>[s.id,s.id+' · '+s.n]);
  f.appendChild(h('div',{class:'sgrid4'},[
    fld('id',inp(it[0],v=>{it[0]=v;on();})),
    fld('skill',sel(it[1],skills.length?skills:[[it[1],it[1]]],v=>{it[1]=v;on();})),
    fld('difficulty',sel(it[2],[[1,'1 — recall'],[2,'2 — apply'],[3,'3 — judge']],v=>{it[2]=Number(v);on();})),
    fld('type',sel(it[3],[['mcq','One right answer'],['multi','Several right answers'],
      ['num','A number'],['order','Put in order'],['judge','Written, self-scored']],
      v=>{ retype(it,v); on(); redraw(); }))]));
  f.appendChild(fld('question',ta(it[4],v=>{it[4]=v;on();},3),'HTML allowed.'));
  const body=h('div'); f.appendChild(body);
  const why=h('div');
  function redraw(){
    body.innerHTML=''; why.innerHTML='';
    const type=it[3];
    if(type==='mcq'||type==='multi'){
      const opts=it[5]||(it[5]=['','']);
      if(type==='mcq'&&typeof it[6]!=='number') it[6]=0;
      if(type==='multi'&&!Array.isArray(it[6])) it[6]=[];
      body.appendChild(repeat(opts,(o,i)=>{
        const mark=h('input',{type:type==='mcq'?'radio':'checkbox',name:'ans'});
        mark.checked=type==='mcq'?it[6]===i:(it[6]||[]).includes(i);
        mark.addEventListener('change',()=>{
          if(type==='mcq'){ it[6]=i; redraw(); }
          else{ const set=new Set(it[6]||[]);
            mark.checked?set.add(i):set.delete(i); it[6]=[...set].sort((a,b)=>a-b); }
          on();});
        return h('div',{class:'sopt'},[mark,inp(o,v=>{opts[i]=v;on();},'Option text')]);
      },()=>'',on,'Options',
        type==='mcq'?'Tick the one that is right. Wrong options should be wrong for a reason worth explaining.'
                   :'Tick every option that is right.','Option'));
    }
    if(type==='num'){
      const o=it[5]||(it[5]=['','']);
      if(!Array.isArray(it[6])) it[6]=[0,10];
      body.appendChild(h('div',{class:'sgrid4'},[
        fld('unit',inp(o[0],v=>{o[0]=v;on();},'e.g. paise')),
        fld('hint',inp(o[1],v=>{o[1]=v;on();},'The formula, shown as a nudge')),
        fld('answer',numin(it[6][0],v=>{it[6][0]=v;on();},'any')),
        fld('tolerance %',numin(it[6][1],v=>{it[6][1]=v;on();}),'How far off still counts.')]));
    }
    if(type==='order'){
      const opts=it[5]||(it[5]=['','']);
      it[6]=opts.map((_,i)=>i);
      body.appendChild(repeat(opts,(o,i)=>inp(o,v=>{opts[i]=v;on();},'Item'),
        ()=>'',()=>{it[6]=(it[5]||[]).map((_,i)=>i);on();},'Correct order',
        'List them in the right order — the app shuffles them before asking.','Item'));
    }
    if(type==='judge'){
      it[5]=null;
      body.appendChild(fld('model answer',ta(it[6],v=>{it[6]=v;on();},6),
        'What a strong answer contains. Shown after they commit theirs, to score against.'));
    }
    if(type!=='judge') why.appendChild(fld('explanation',ta(it[7],v=>{it[7]=v;on();},4),
      'Shown after answering, right or wrong. This is where the teaching happens.'));
  }
  redraw(); f.appendChild(why);
}
function retype(it,t){
  const from=it[3]; if(from===t) return;
  it[3]=t;
  if(t==='mcq'){ if(!Array.isArray(it[5]))it[5]=['','']; it[6]=Array.isArray(it[6])?(it[6][0]||0):0; }
  else if(t==='multi'){ if(!Array.isArray(it[5]))it[5]=['','']; it[6]=typeof it[6]==='number'?[it[6]]:[]; }
  else if(t==='order'){ if(!Array.isArray(it[5]))it[5]=['','']; it[6]=it[5].map((_,i)=>i); }
  else if(t==='num'){ it[5]=['','']; it[6]=[0,10]; }
  else if(t==='judge'){ it[5]=null; it[6]=typeof it[6]==='string'?it[6]:(it[7]||''); }
  if(t!=='judge'&&typeof it[7]!=='string') it[7]='';
}

function exerciseForm(f,x,on){
  const skills=(window.SKILLS||[]).map(s=>s.id);
  f.appendChild(h('div',{class:'sgrid4'},[
    fld('id',inp(x.id,v=>{x.id=v;on();})),
    fld('chapter',numin(x.ch,v=>{x.ch=v;on();})),
    fld('minutes',numin(x.mins,v=>{x.mins=v;on();})),
    fld('tier',sel(x.tier,[[1,'1 — do first'],[2,'2 — builds on tier 1'],[3,'3 — capstone']],v=>{x.tier=Number(v);on();}))]));
  f.appendChild(fld('title',inp(x.t,v=>{x.t=v;on();})));
  f.appendChild(csvField('skills it exercises',x.sk||(x.sk=[]),on,
    'Skill ids'+(skills.length?' — e.g. '+skills.slice(0,3).join(', '):'')+'.'));
  f.appendChild(fld('brief',ta(x.brief,v=>{x.brief=v;on();},3),'Why this is worth 45 minutes.'));
  f.appendChild(fld('deliverable',ta(x.deliverable,v=>{x.deliverable=v;on();},2),
    'The artifact that exists at the end. Be concrete enough to check.'));
  f.appendChild(linesField('steps',x.steps||(x.steps=[]),on,'One step per line.',6));
  f.appendChild(repeat(x.rubric||(x.rubric=[]),r=>h('div',{},[
      inp(r.c,v=>{r.c=v;on();},'What is being scored'),
      h('div',{class:'sgrid4'},(r.l||(r.l=['','','',''])).map((_,i)=>
        inp(r.l[i],v=>{r.l[i]=v;on();},'Level '+(i+1))))]),
    ()=>({c:'',l:['','','','']}),on,'Rubric',
    'Four levels per row, worst to best. Self-scored, so make the difference between levels observable.','Row'));
  f.appendChild(fld('how to iterate',ta(x.iterate,v=>{x.iterate=v;on();},3),
    'What version 2 and 3 of this artifact should change.'));
}

function processForm(f,p,on){
  f.appendChild(h('div',{class:'sgrid3'},[
    fld('id',inp(p.id,v=>{p.id=v;on();})),
    fld('name',inp(p.n,v=>{p.n=v;on();})),
    fld('cadence',inp(p.cad,v=>{p.cad=v;on();},'e.g. Every release'))]));
  f.appendChild(fld('why it exists',ta(p.why,v=>{p.why=v;on();},3)));
  f.appendChild(fld('what it moves',ta(p.metric,v=>{p.metric=v;on();},2),
    'The number that should change if the loop is working.'));
  f.appendChild(repeat(p.phases||(p.phases=[]),ph=>h('div',{},[
      inp(ph.n,v=>{ph.n=v;on();},'Phase name'),
      repeat(ph.s||(ph.s=[]),st=>h('div',{class:'sgrid2'},[
          inp(st[0],v=>{st[0]=v;on();},'Step'),
          ta(st[1],v=>{st[1]=v;on();},2,'What doing it actually involves')]),
        ()=>['',''],on,'','','Step')]),
    ()=>({n:'New phase',s:[['','']]}),on,'Phases','','Phase'));
}

/* ============ reference + raw JSON ============ */
function referencePage(){
  const w=h('div',{class:'wrap-wide'});
  const ref=draft('reference');
  w.appendChild(phead('Studio · Reference','Reference tables',
    'The supporting data the app reads directly. These are edited as JSON because their shapes differ from each other.'));
  const b=statusBanner(); if(b) w.appendChild(b);
  w.appendChild(h('p',{},[h('a',{href:'#/studio',class:'backlink',text:'← All content'})]));
  w.appendChild(draftBar('reference'));
  const list=h('div',{class:'slist'});
  Object.keys(ref).sort().forEach(k=>{
    const v=ref[k];
    list.appendChild(h('div',{class:'sitem'},[
      h('a',{class:'sitemmain',href:'#/studio/reference/'+encodeURIComponent(k)},[
        h('span',{class:'sitemt',text:k}),
        h('span',{class:'sitemd',text:REFNOTE[k]||''})]),
      h('span',{class:'sitemm mono dim',text:Array.isArray(v)?v.length+' rows':typeof v})]));
  });
  w.appendChild(list);
  return w;
}
const REFNOTE={DOMAINS:'The five skill domains and their blurbs.',PARTS:'Part titles and descriptions.',
  RULES:'The working rules shown on the dashboard.',SETUP:'The setup walkthrough.',
  GLOSSARY:'Every term, defined once.',VENDOR:'Vendor claims and what to ask instead.',
  LATER:'The LATER page — parked questions.',PIPELINE:'Stages of the red-mark map.',
  REDMARKS:'Known failure modes, by stage.',LEVEL_NAMES:'What the four mastery levels are called.',
  LEVEL_BANDS:'The mastery cutoffs between levels.'};

function referenceKeyPage(key){
  const w=h('div',{class:'wrap-wide'});
  const ref=draft('reference');
  if(!(key in ref)){ w.appendChild(h('div',{class:'empty',text:'No such table.'})); return w; }
  w.appendChild(phead('Studio · Reference',key,REFNOTE[key]||''));
  w.appendChild(h('p',{},[h('a',{href:'#/studio/reference',class:'backlink',text:'← All reference tables'})]));
  let bar=draftBar('reference'); w.appendChild(bar);
  w.appendChild(editorFor(()=>ref[key],v=>{ref[key]=v;touch('reference');bar.replaceWith(bar=draftBar('reference'));}));
  return w;
}
function jsonPage(kind){
  const w=h('div',{class:'wrap-wide'});
  const d=draft(kind);
  w.appendChild(phead('Studio · '+KINDNAME[kind],KINDNAME[kind]+' as JSON',
    'The whole list at once. Useful for a bulk paste, a find-and-replace, or moving content between deployments.'));
  w.appendChild(h('p',{},[h('a',{href:'#/studio/'+kind,class:'backlink',text:'← Back to the list'})]));
  let bar=draftBar(kind); w.appendChild(bar);
  w.appendChild(editorFor(()=>drafts[kind].data,v=>{drafts[kind].data=v;touch(kind);
    bar.replaceWith(bar=draftBar(kind));},kind));
  return w;
}
/* A JSON textarea that refuses to hand back anything unparseable. */
function editorFor(get,set,kind){
  const box=h('div');
  const t=h('textarea',{rows:'26',spellcheck:'false',style:'width:100%'});
  t.value=JSON.stringify(get(),null,2);
  const msg=h('div',{class:'sbarmsg'});
  const apply=()=>{
    let v; try{ v=JSON.parse(t.value); }
    catch(err){ msg.className='sbarmsg bad'; msg.textContent='Not valid JSON: '+err.message; return; }
    if(kind){ const errs=validate(kind,v);
      if(errs.length){ msg.className='sbarmsg bad'; msg.textContent=errs[0]; return; } }
    set(v); msg.className='sbarmsg ok'; msg.textContent='Applied to your draft. Publish to make it live.';
  };
  box.appendChild(t);
  box.appendChild(h('div',{style:'display:flex;gap:.5rem;margin:.6rem 0;align-items:center;flex-wrap:wrap'},[
    h('button',{class:'sm primary',onclick:apply},'Apply to draft'),
    btn('Reformat',()=>{ try{ t.value=JSON.stringify(JSON.parse(t.value),null,2);
      msg.className='sbarmsg';msg.textContent=''; }catch(e){ msg.className='sbarmsg bad';msg.textContent='Not valid JSON.'; } }),
    btn('Revert',()=>{ t.value=JSON.stringify(get(),null,2); msg.className='sbarmsg'; msg.textContent=''; }),
    msg]));
  return box;
}

/* ============ entry ============ */
function studio(parts){
  if(!window.CONTENT) return h('div',{class:'wrap',text:'Content layer unavailable.'});
  const kind=parts[1];
  if(!kind) return overview();
  if(!KINDS.some(k=>k[0]===kind)) return overview();
  if(parts[2]!=null) return recordPage(kind,decodeURIComponent(parts.slice(2).join('/')));
  return kindPage(kind);
}
return {studio, dirtyKinds, KINDS};
})();
