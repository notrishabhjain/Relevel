/* The Connect panel and the Playground.

   Connect is where the key goes, once: the provider, the key, the models, and
   a test call that proves it works. It replaces the half of the old setup that
   happened in a provider's console and in Colab's secrets panel.

   The Playground is the model with no code: a system prompt, a message, a
   temperature, and the receipt (tokens in, tokens out, seconds). It is where
   the "give it to a chat assistant" steps happen now, and its batch mode marks
   a list of test messages, which is the course's first evaluation.          */
window.PLAYGROUND = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else if(a[k]!=null&&a[k]!==false)e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const T=s=>window.T?window.T(s):s;
const L=()=>window.LLM;
const store=()=>window.STORE;
const PS=()=>{ const s=store().S; s.play=s.play||{}; s.play.runs=s.play.runs||[]; s.play.batch=s.play.batch||{}; return s.play; };

/* ---------- the status line used everywhere ---------- */
function status(){
  const el=h('div',{class:'llmstat'});
  const draw=async()=>{
    const pl=await L().plan();
    el.className='llmstat '+(pl.ready?'ok':'warn');
    el.innerHTML='';
    el.append(h('span',{class:'dotx'}),
      h('span',{text:pl.ready
        ? T('Connected')+': '+pl.name+' · '+pl.models.chat+' · '+(pl.mode==='site'?T('through this site'):T('direct from this page'))+(pl.siteKey?' · '+T('the site’s key'):'')
        : T('Not connected')+' — '+T(pl.why)}),
      h('a',{href:'#/setup',text:pl.ready?T('Change'):T('Connect')+' →'}));
  };
  draw(); L().onChange(draw);
  return el;
}

/* ---------- Connect ---------- */
function connect(){
  const box=h('div',{class:'connect'});
  function draw(){
    const s=L().settings();
    box.innerHTML='';
    box.appendChild(status());
    /* 1. provider */
    const plist=h('div',{class:'provlist',role:'radiogroup','aria-label':T('Provider')});
    Object.entries(L().PROVIDERS).forEach(([id,p])=>{
      const r=h('input',{type:'radio',name:'prov',value:id});
      if(id===s.provider) r.checked=true;
      r.addEventListener('change',()=>{ L().set({provider:id}); draw(); });
      plist.appendChild(h('label',{class:'prov'+(id===s.provider?' on':'')},[r,
        h('span',{},[h('strong',{text:p.name}),id==='nvidia'?h('span',{class:'tagx',text:T('recommended')}):null,
          h('span',{class:'dim',text:T(p.note)})])]));
    });
    box.appendChild(h('div',{class:'cstep'},[h('h4',{text:'1 · '+T('Choose who runs the model')}),plist]));
    /* 2. key */
    const p=s.p;
    const key=h('input',{type:'password',class:'mono',placeholder:p.keyHint||T('your API key'),autocomplete:'off',spellcheck:'false','aria-label':T('API key')});
    key.value=s.key;
    const show=h('button',{class:'sm',type:'button'},T('Show'));
    show.addEventListener('click',()=>{ key.type=key.type==='password'?'text':'password'; show.textContent=key.type==='password'?T('Show'):T('Hide'); });
    const saveB=h('button',{class:'primary sm',type:'button'},T('Save key'));
    const forget=h('button',{class:'sm',type:'button'},T('Forget key'));
    const said=h('span',{class:'dim'});
    saveB.addEventListener('click',()=>{ L().set({provider:s.provider,key:key.value}); said.textContent=T('Saved in this browser.'); draw(); });
    forget.addEventListener('click',()=>{ L().set({provider:s.provider,key:''}); draw(); });
    box.appendChild(h('div',{class:'cstep'},[h('h4',{text:'2 · '+T('Paste your key')}),
      p.keyUrl?h('p',{class:'dim',html:T('Get one at')+' <a href="'+p.keyUrl+'" target="_blank" rel="noopener">'+p.keyUrl.replace(/^https:\/\//,'').replace(/\/$/,'')+' ↗</a> — '+
        T('the one step that happens on another site, once.')}):null,
      h('div',{class:'keyrow'},[key,show,saveB,forget]),said,
      h('p',{class:'dim small',text:T('Kept only in this browser. It is not part of the progress that syncs to your account, and it is sent only with your own requests: through this site’s relay, or straight to the provider.')})]));
    /* 3. test */
    const out=h('pre',{class:'pyout',hidden:true});
    const test=h('button',{class:'primary sm',type:'button'},'▶ '+T('Run the test call'));
    test.addEventListener('click',async()=>{
      test.disabled=true; out.hidden=false; out.textContent=T('Calling the model…');
      const r=await L().request('chat/completions',{model:L().settings().chat,temperature:0,
        messages:[{role:'user',content:'Reply with exactly: setup works'}]});
      test.disabled=false;
      if(!r.ok){ out.textContent='✕ '+r.error; out.className='pyout bad'; return; }
      const m=r.json.choices&&r.json.choices[0]&&r.json.choices[0].message;
      const u=r.json.usage||{};
      out.className='pyout good';
      out.textContent=(m&&m.content||'').trim()+'\n\n'+r.json.model+' · '+(u.prompt_tokens||'?')+' '+T('tokens in')+', '+(u.completion_tokens||'?')+' '+T('out')+' · '+(r.ms/1000).toFixed(1)+' s';
    });
    box.appendChild(h('div',{class:'cstep'},[h('h4',{text:'3 · '+T('Check it works')}),
      h('p',{class:'dim',html:T('You should see <code>setup works</code>, the model’s name, the tokens it read and wrote, and how long it took.')}),test,out]));
    /* advanced */
    const field=(label,k,val,ph)=>{ const i=h('input',{class:'mono',value:val||'',placeholder:ph||''});
      i.addEventListener('change',()=>{ L().set({[k]:i.value.trim()}); });
      return h('label',{class:'advf'},[h('span',{text:T(label)}),i]); };
    const route=h('select',{},[['auto','Automatic: this site’s relay if there is one, else direct'],['site','Always through this site'],['direct','Always direct from this page']]
      .map(([v,t])=>{ const o=h('option',{value:v,text:T(t)}); if(v===s.route) o.selected=true; return o; }));
    route.addEventListener('change',()=>{ L().set({route:route.value}); draw(); });
    box.appendChild(h('details',{class:'adv'},[h('summary',{text:T('Models and routing')}),
      h('p',{class:'dim small',text:T('The course’s code names NVIDIA’s models. On another provider each call uses the models below instead, and the output says so.')}),
      s.provider==='custom'?field('API base address','base',s.base,'https://…/v1'):null,
      field('Everyday model','chat',s.chat,p.chat),
      field('Stronger model','strong',s.strong,p.strong),
      field('Embedding model','embed',s.embed,p.embed||T('this provider has none')),
      field('Vision model','vision',s.vision,p.vision),
      h('label',{class:'advf'},[h('span',{text:T('How requests leave the page')}),route])]));
  }
  draw();
  return box;
}

/* ---------- streaming read of an SSE response ---------- */
async function streamed(res, onText){
  const reader=res.body.getReader(), dec=new TextDecoder();
  let buf='', text='', usage=null, model='', finish='';
  for(;;){
    const {done,value}=await reader.read(); if(done) break;
    buf+=dec.decode(value,{stream:true});
    let i; while((i=buf.indexOf('\n'))>=0){
      const line=buf.slice(0,i).trim(); buf=buf.slice(i+1);
      if(!line.startsWith('data:')) continue;
      const d=line.slice(5).trim(); if(d==='[DONE]') continue;
      try{ const j=JSON.parse(d); model=j.model||model; if(j.usage) usage=j.usage;
        const c=j.choices&&j.choices[0]; if(c){ if(c.finish_reason) finish=c.finish_reason;
          const t=c.delta&&c.delta.content; if(t){ text+=t; onText(t); } } }catch(e){}
    }
  }
  return {text,usage,model,finish};
}

/* One chat call from the playground: streamed if asked, with timings. */
async function chat(body, onText){
  const pl=await L().plan();
  if(!pl.ready) return {ok:false,error:pl.why};
  const a=L().adapt('chat/completions',body,pl);
  const t0=performance.now(); let first=null;
  let res;
  /* Ask for the token counts at the end of a stream; a provider that does not
     know the option gets the request again without it. */
  if(a.body.stream) a.body.stream_options={include_usage:true};
  const send=()=>fetch(L().urlFor(pl,'chat/completions'),{method:'POST',headers:L().headers(pl),body:JSON.stringify(a.body),credentials:'same-origin'});
  try{ res=await send();
    if(res.status===400&&a.body.stream_options){ delete a.body.stream_options; res=await send(); } }
  catch(e){ return {ok:false,error:L().explain(0,null,pl)}; }
  if(!res.ok){ let j=null; try{ j=await res.json(); }catch(e){} return {ok:false,error:L().explain(res.status,j,pl)}; }
  if(a.body.stream && res.body && /event-stream/.test(res.headers.get('content-type')||'')){
    const r=await streamed(res,t=>{ if(first===null) first=performance.now()-t0; onText&&onText(t); });
    return {ok:true,text:r.text,usage:r.usage||{},model:r.model||a.body.model,finish:r.finish,ms:performance.now()-t0,first,swapped:a.swapped};
  }
  const j=await res.json();
  const c=j.choices&&j.choices[0]||{};
  const text=(c.message&&c.message.content)||'';
  onText&&onText(text);
  return {ok:true,text,usage:j.usage||{},model:j.model||a.body.model,finish:c.finish_reason,ms:performance.now()-t0,first:null,swapped:a.swapped};
}

/* ---------- the Playground page ---------- */
function page(){
  const P=PS();
  P.form=P.form||{system:'',user:'',temp:0.7,max:400,model:'',keep:false,stream:true,cmp:''};
  const F=P.form;
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:T('Hands-on, in this page')})]),
    h('h1',{text:T('Playground')}),
    h('p',{html:T('Talk to the model without writing code. Every reply comes with its receipt: the tokens it read, the tokens it wrote and the seconds it took. Use it wherever a chapter says to try a prompt, and use <strong>Mark a test set</strong> to score a list of messages.')})]));
  w.appendChild(status());

  const sys=h('textarea',{class:'pgta',rows:3,placeholder:T('System prompt (optional): the standing instruction the user never sees')});
  sys.value=F.system;
  const usr=h('textarea',{class:'pgta',rows:4,placeholder:T('Your message')});
  usr.value=F.user;
  const temp=h('input',{type:'range',min:0,max:2,step:0.1,value:F.temp});
  const tval=h('span',{class:'mono',text:String(F.temp)});
  const max=h('input',{type:'number',min:16,max:8000,step:16,value:F.max,class:'mono',style:'width:6rem'});
  const s=L().settings();
  const model=h('select',{},[['', T('Everyday')+' · '+s.chat],['strong',T('Stronger')+' · '+s.strong],['vision',T('Vision')+' · '+s.vision]]
    .filter(o=>o[0]===''||o[1].split(' · ')[1]).map(([v,t])=>{ const o=h('option',{value:v,text:t}); if(v===F.model) o.selected=true; return o; }));
  const keep=h('input',{type:'checkbox'}); keep.checked=!!F.keep;
  /* A second model for the same message, side by side: the course's model
     comparisons happen here rather than in two vendors' consoles. */
  const cmp=h('input',{class:'mono',placeholder:T('another model name (optional)'),value:F.cmp||'',style:'width:16rem',list:'pgmodels'});
  const known=h('datalist',{id:'pgmodels'},[s.chat,s.strong,s.vision].filter(Boolean).map(m=>h('option',{value:m})));
  const stream=h('input',{type:'checkbox'}); stream.checked=F.stream!==false;
  const persist=()=>{ Object.assign(F,{system:sys.value,user:usr.value,temp:+temp.value,max:+max.value,model:model.value,keep:keep.checked,stream:stream.checked,cmp:cmp.value.trim()}); store().save(); };
  [sys,usr,max,model,keep,stream,cmp].forEach(x=>x.addEventListener('change',persist));
  temp.addEventListener('input',()=>{ tval.textContent=temp.value; persist(); });

  const send=h('button',{class:'primary',type:'button'},'▶ '+T('Send'));
  const five=h('button',{type:'button',title:T('Send the same message five times, to see how much the answer varies')},T('Send 5 times'));
  const clear=h('button',{type:'button'},T('Clear'));
  const convo=h('div',{class:'pgconvo'});
  const history=()=>P.history=P.history||[];

  function card(role,text,meta,into,label){
    const c=h('div',{class:'pgmsg '+role},[h('span',{class:'pgrole',text:label||T(role==='user'?'You':role==='assistant'?'Model':'System')}),h('div',{class:'pgtext',text}),meta?h('div',{class:'pgmeta mono',text:meta}):null]);
    (into||convo).appendChild(c); return c;
  }
  const receipt=r=>{ const u=r.usage||{};
    return (r.model||'')+' · '+(u.prompt_tokens!=null?u.prompt_tokens:'?')+' '+T('in')+' / '+(u.completion_tokens!=null?u.completion_tokens:'?')+' '+T('out')+
      ' · '+(r.first!=null?T('first words')+' '+(r.first/1000).toFixed(1)+' s · ':'')+T('whole answer')+' '+(r.ms/1000).toFixed(1)+' s'+(r.finish?' · '+r.finish:'')+(r.swapped?' · '+r.swapped:''); };
  async function into(c, body){
    const txt=c.querySelector('.pgtext'); txt.textContent='…';
    let got='';
    const r=await chat(body,t=>{ got+=t; txt.textContent=got; });
    if(!r.ok){ txt.textContent='✕ '+r.error; c.classList.add('bad'); return null; }
    c.appendChild(h('div',{class:'pgmeta mono',text:receipt(r)}));
    return r;
  }
  function drawHistory(){ convo.innerHTML=''; (P.keep?history():[]).forEach(m=>card(m.role,m.content,m.meta||'')); }
  function messages(user){
    const m=[]; if(sys.value.trim()) m.push({role:'system',content:sys.value});
    if(keep.checked) history().forEach(x=>m.push({role:x.role,content:x.content}));
    m.push({role:'user',content:user}); return m;
  }
  async function once(user, label){
    const body={model:model.value?s[model.value]:s.chat,temperature:+temp.value,max_tokens:+max.value,messages:messages(user)};
    if(stream.checked) body.stream=true;
    card('user',user+(label?'   ('+label+')':''));
    const other=cmp.value.trim();
    const pair=other?h('div',{class:'pgpair'}):null;
    if(pair) convo.appendChild(pair);
    const c=card('assistant','',null,pair,other?T('Model')+' · '+body.model:null);
    const c2=other?card('assistant','',null,pair,T('Model')+' · '+other):null;
    const [r]=await Promise.all([into(c,body), c2?into(c2,Object.assign({},body,{model:other})):null]);
    if(!r) return null;
    const meta=receipt(r);
    P.runs.unshift({at:Date.now(),system:sys.value,user,reply:r.text,meta}); P.runs=P.runs.slice(0,30);
    if(keep.checked){ history().push({role:'user',content:user},{role:'assistant',content:r.text,meta}); }
    store().save();
    return r;
  }
  send.addEventListener('click',async()=>{ const u=usr.value.trim(); if(!u) return usr.focus(); persist(); send.disabled=true; await once(u); send.disabled=false; });
  five.addEventListener('click',async()=>{ const u=usr.value.trim(); if(!u) return usr.focus(); persist(); five.disabled=true;
    for(let i=1;i<=5;i++) await once(u,i+'/5'); five.disabled=false; });
  clear.addEventListener('click',()=>{ P.history=[]; convo.innerHTML=''; store().save(); });
  usr.addEventListener('keydown',e=>{ if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){ e.preventDefault(); send.click(); } });
  keep.addEventListener('change',()=>{ P.keep=keep.checked; drawHistory(); });
  P.keep=keep.checked; drawHistory();

  w.appendChild(h('section',{class:'part pg'},[
    h('label',{class:'pglbl',text:T('System prompt')}),sys,
    h('label',{class:'pglbl',text:T('Message')}),usr,
    h('div',{class:'pgctl'},[
      h('label',{},[h('span',{text:T('Temperature')+' '}),temp,tval]),
      h('label',{},[h('span',{text:T('Most tokens out')+' '}),max]),
      h('label',{},[h('span',{text:T('Model')+' '}),model]),
      h('label',{title:T('Send the earlier turns again with each message — the way chat apps fake memory')},[keep,h('span',{text:' '+T('Keep the conversation')})]),
      h('label',{},[stream,h('span',{text:' '+T('Stream the answer')})]),
      h('label',{title:T('Send each message to a second model too, and show the two answers side by side')},[h('span',{text:T('Compare with')+' '}),cmp,known])]),
    h('div',{class:'pgbtns'},[send,five,clear,h('span',{class:'dim small',text:'Ctrl+Enter'})]),
    convo]));

  /* ---------- Mark a test set ---------- */
  const B=P.batch; B.lines=B.lines||''; B.rows=B.rows||[];
  const bta=h('textarea',{class:'pgta mono',rows:8,placeholder:T('One test message per line. Optionally add the right answer after two bars, e.g. “Call me on 98765 43210 || yes”')});
  bta.value=B.lines;
  bta.addEventListener('change',()=>{ B.lines=bta.value; store().save(); });
  const bInstr=h('textarea',{class:'pgta',rows:2,placeholder:T('The instruction sent before each message, e.g. “Does this message contain a phone number? Answer yes or no.”')});
  bInstr.value=B.instr||'';
  bInstr.addEventListener('change',()=>{ B.instr=bInstr.value; store().save(); });
  const runAll=h('button',{class:'primary',type:'button'},'▶ '+T('Run them all'));
  const score=h('div',{class:'pgscore'});
  const table=h('div',{class:'tblwrap'});
  function drawRows(){
    table.innerHTML='';
    if(!B.rows.length){ score.textContent=''; return; }
    const t=h('table',{},[h('thead',{},h('tr',{},[h('th',{text:'#'}),h('th',{text:T('Message')}),h('th',{text:T('Right answer')}),h('th',{text:T('Model said')}),h('th',{text:T('Your mark')})]))]);
    const tb=h('tbody');
    B.rows.forEach((r,i)=>{
      const mk=(v,lbl)=>{ const b=h('button',{class:'sm'+(r.mark===v?' on':''),type:'button'},lbl);
        b.addEventListener('click',()=>{ r.mark=r.mark===v?null:v; store().save(); drawRows(); }); return b; };
      tb.appendChild(h('tr',{},[h('td',{text:String(i+1)}),h('td',{text:r.msg}),h('td',{text:r.truth||'—'}),
        h('td',{class:r.err?'bad':'',text:r.reply}),h('td',{},[mk('y','✓'),' ',mk('n','✕')])]));
    });
    t.appendChild(tb); table.appendChild(t);
    const marked=B.rows.filter(r=>r.mark), right=B.rows.filter(r=>r.mark==='y').length;
    score.innerHTML='';
    score.append(h('strong',{text:T('Score')+': '+right+' / '+B.rows.length}),
      h('span',{class:'dim',text:'  ('+marked.length+' '+T('of')+' '+B.rows.length+' '+T('marked')+'. '+T('Mark each one yourself; where you gave the right answer, the obvious matches are pre-marked.')+')'}));
  }
  runAll.addEventListener('click',async()=>{
    const lines=bta.value.split('\n').map(x=>x.trim()).filter(Boolean).slice(0,50);
    if(!lines.length) return bta.focus();
    B.lines=bta.value; B.instr=bInstr.value; runAll.disabled=true;
    B.rows=lines.map(l=>{ const [msg,truth]=l.split('||').map(x=>x.trim()); return {msg,truth:truth||'',reply:'…',mark:null}; });
    drawRows();
    for(const r of B.rows){
      const res=await chat({model:s.chat,temperature:0,max_tokens:200,messages:[
        ...(bInstr.value.trim()?[{role:'system',content:bInstr.value.trim()}]:[]),{role:'user',content:r.msg}]});
      r.reply=res.ok?res.text.trim():'✕ '+res.error; r.err=!res.ok;
      if(res.ok&&r.truth){ const a=r.reply.toLowerCase(), t=r.truth.toLowerCase();
        if(a===t||a.startsWith(t+'.')||a.startsWith(t+' ')||a.startsWith(t+',')) r.mark='y'; }
      store().save(); drawRows();
    }
    B.at=Date.now(); store().save(); runAll.disabled=false;
  });
  drawRows();
  w.appendChild(h('section',{class:'part pg',id:'batch'},[
    h('h2',{class:'pgh',text:T('Mark a test set')}),
    h('p',{class:'dim',html:T('Your first evaluation: a small job, ten messages, the right answer for each, and a score out of ten. Write the messages below, run them, and mark each reply yourself.')}),
    h('label',{class:'pglbl',text:T('Instruction')}),bInstr,
    h('label',{class:'pglbl',text:T('Test messages')}),bta,
    h('div',{class:'pgbtns'},[runAll]),score,table]));

  if(P.runs.length){
    const past=h('details',{class:'pgpast'},[h('summary',{text:T('Earlier runs')+' ('+P.runs.length+')'})]);
    P.runs.forEach(r=>past.appendChild(h('div',{class:'pgpastrow'},[
      h('div',{class:'dim small mono',text:new Date(r.at).toLocaleString()+' · '+r.meta}),
      r.system?h('div',{class:'small',text:'⟂ '+r.system}):null,
      h('div',{text:'› '+r.user}),h('div',{class:'pgtext',text:r.reply})])));
    w.appendChild(past);
  }
  return w;
}

return { connect, status, page, chat };
})();
