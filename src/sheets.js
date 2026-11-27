/* Sheets: the spreadsheet work, inside the app.

   The course asks for spreadsheets in a dozen places: the answer key (the
   project's ten starter sentences, then more), the cost model, the market
   size, the sprint plan, a scored comparison. They used to mean a Google
   Sheets tab. They happen here now, in a small grid with the formulas those
   exercises need (arithmetic, cell references, SUM, AVERAGE, MIN, MAX, COUNT,
   ROUND, ABS), saved with your progress.

   Your code can read them: before each notebook cell runs, every sheet is
   written to the notebook's folder as sheets/<name>.csv, so
   `open("sheets/answer-key-v1.csv")` or `pandas.read_csv(...)` just works.
   Download CSV gives you the file to put in your repository.               */
window.SHEETS = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else if(a[k]!=null&&a[k]!==false)e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const T=s=>window.T?window.T(s):s;
const store=()=>window.STORE;
const all=()=>{ const s=store().S; s.sheets=s.sheets||{}; return s.sheets; };
const MAXR=300, MAXC=26;
const COL=i=>String.fromCharCode(65+i);
const slug=s=>String(s||'sheet').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'sheet';

/* ---------- formulas ---------- */
const ERR=m=>({err:m});
function evaluate(rows){
  const memo={}, busy={};
  const raw=(r,c)=>((rows[r]||[])[c]??'');
  function cell(r,c){
    const k=r+':'+c;
    if(k in memo) return memo[k];
    if(busy[k]) return ERR('#CYCLE');
    const v=String(raw(r,c)).trim();
    let out;
    if(v.startsWith('=')){ busy[k]=1; try{ out=formula(v.slice(1)); }catch(e){ out=ERR(e.message&&e.message.startsWith('#')?e.message:'#ERR'); } busy[k]=0; }
    else if(v==='') out='';
    else if(/^-?\d+(\.\d+)?%$/.test(v)) out=parseFloat(v)/100;
    else if(/^-?(\d+(\.\d*)?|\.\d+)(e-?\d+)?$/i.test(v.replace(/,/g,''))&&!/^0\d/.test(v)) out=parseFloat(v.replace(/,/g,''));
    else out=v;
    memo[k]=out; return out;
  }
  function ref(s){ const m=s.match(/^([A-Z])(\d+)$/); if(!m) throw new Error('#REF'); return [parseInt(m[2],10)-1, m[1].charCodeAt(0)-65]; }
  function formula(src){
    const re=/\s*([A-Z]+\d+:[A-Z]+\d+|[A-Z]+\d+|[A-Z]+(?=\s*\()|\d+(?:\.\d+)?%?|\.\d+%?|[-+*/^(),])\s*/y;
    const up=src.toUpperCase(), t=[]; let m;
    while(re.lastIndex<up.length && (m=re.exec(up))) t.push(m[1]);
    if(!m&&up.trim()||re.lastIndex!==up.length&&up.trim()) throw new Error('#ERR');
    let i=0;
    const peek=()=>t[i], next=()=>t[i++];
    const num=v=>{ if(v&&v.err) throw new Error(v.err); if(v===''||v==null) return 0; if(typeof v!=='number') throw new Error('#VALUE'); return v; };
    function values(arg){ // a range or a value, for aggregates
      if(arg&&arg.range) return arg.range;
      return [arg];
    }
    function primary(){
      const x=next();
      if(x==null) throw new Error('#ERR');
      if(x==='('){ const v=expr(); if(next()!==')') throw new Error('#ERR'); return v; }
      if(x==='-') return -num(primary());
      if(x==='+') return num(primary());
      if(/^\d|^\./.test(x)) return x.endsWith('%')?parseFloat(x)/100:parseFloat(x);
      if(/^[A-Z]\d+:[A-Z]\d+$/.test(x)){
        const [a,b]=x.split(':').map(ref), out=[];
        for(let r=Math.min(a[0],b[0]);r<=Math.max(a[0],b[0]);r++) for(let c=Math.min(a[1],b[1]);c<=Math.max(a[1],b[1]);c++) out.push(cell(r,c));
        return {range:out};
      }
      if(/^[A-Z]\d+$/.test(x)){ const [r,c]=ref(x); return cell(r,c); }
      if(/^[A-Z]+$/.test(x)){
        if(next()!=='(') throw new Error('#ERR');
        const args=[];
        if(peek()!==')'){ args.push(expr(true)); while(peek()===','){ next(); args.push(expr(true)); } }
        if(next()!==')') throw new Error('#ERR');
        const flat=args.flatMap(values);
        flat.forEach(v=>{ if(v&&v.err) throw new Error(v.err); });
        const nums=flat.filter(v=>typeof v==='number');
        switch(x){
          case 'SUM': return nums.reduce((a,b)=>a+b,0);
          case 'AVERAGE': case 'AVG': if(!nums.length) throw new Error('#DIV/0'); return nums.reduce((a,b)=>a+b,0)/nums.length;
          case 'MIN': return nums.length?Math.min(...nums):0;
          case 'MAX': return nums.length?Math.max(...nums):0;
          case 'COUNT': return nums.length;
          case 'COUNTA': return flat.filter(v=>v!=='').length;
          case 'ROUND': { const d=args[1]!=null?num(args[1]):0, f=Math.pow(10,d); return Math.round(num(args[0])*f)/f; }
          case 'ABS': return Math.abs(num(args[0]));
          default: throw new Error('#NAME');
        }
      }
      throw new Error('#ERR');
    }
    function power(){ let v=primary(); if(peek()==='^'){ next(); return Math.pow(num(v),num(power())); } return v; }
    function term(){ let v=power(); while(peek()==='*'||peek()==='/'){ const o=next(), b=num(power()); v=num(v); if(o==='/'&&b===0) throw new Error('#DIV/0'); v=o==='*'?v*b:v/b; } return v; }
    function expr(allowRange){ let v=term(); while(peek()==='+'||peek()==='-'){ const o=next(), b=num(term()); v=num(v); v=o==='+'?v+b:v-b; } if(v&&v.range&&!allowRange) throw new Error('#VALUE'); return v; }
    const v=expr();
    if(i!==t.length) throw new Error('#ERR');
    return v;
  }
  return (r,c)=>cell(r,c);
}
const show=v=>v&&v.err?v.err:typeof v==='number'?(Number.isInteger(v)?String(v):String(+v.toPrecision(10))):String(v??'');

/* ---------- CSV ---------- */
const q=s=>/[",\n\r]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;
function toCSV(sh){
  const val=evaluate(sh.rows);
  let rows=sh.rows.map((row,r)=>row.map((_,c)=>show(val(r,c))));
  while(rows.length&&rows[rows.length-1].every(x=>x==='')) rows.pop();
  const w=Math.max(0,...rows.map(r=>{ let n=r.length; while(n&&r[n-1]==='') n--; return n; }));
  return rows.map(r=>r.slice(0,w).map(q).join(',')).join('\n')+'\n';
}
function fromCSV(text){
  const rows=[]; let row=[], f='', i=0, inq=false;
  for(;i<text.length;i++){
    const ch=text[i];
    if(inq){ if(ch==='"'){ if(text[i+1]==='"'){ f+='"'; i++; } else inq=false; } else f+=ch; }
    else if(ch==='"') inq=true;
    else if(ch===','||ch==='\t'){ row.push(f); f=''; }
    else if(ch==='\n'||ch==='\r'){ if(ch==='\r'&&text[i+1]==='\n') i++; row.push(f); rows.push(row); row=[]; f=''; }
    else f+=ch;
  }
  if(f!==''||row.length){ row.push(f); rows.push(row); }
  return rows.slice(0,MAXR).map(r=>r.slice(0,MAXC));
}
/* Every sheet as a CSV file, for the notebook (pyrun.js writes them before a cell runs). */
function files(){
  const used={};
  return Object.values(all()).filter(s=>s&&s.rows).map(s=>{ let n=slug(s.name); if(used[n]) n+='-'+(++used[n]); else used[n]=1; return {name:n+'.csv',csv:toCSV(s)}; });
}

/* ---------- the grid ---------- */
function blank(r,c){ return Array.from({length:r},()=>Array(c).fill('')); }
function sheetFor(id,name){
  const S=all();
  if(!S[id]) return {id,name:name||T('Untitled sheet'),rows:blank(12,6),fresh:true};
  return Object.assign({id},S[id]);
}
function persist(sh){
  const S=all(); S[sh.id]={name:sh.name,rows:sh.rows,at:Date.now()}; delete sh.fresh; store().save();
}
function download(name,text,type){
  const a=h('a',{href:URL.createObjectURL(new Blob([text],{type:type||'text/csv'})),download:name});
  document.body.appendChild(a); a.click(); a.remove();
}

/* opts: {onDelete, compact} */
function editor(id, name, opts){
  opts=opts||{};
  const sh=sheetFor(id,name);
  const wrap=h('div',{class:'sheet'});
  const nameIn=h('input',{class:'shname',value:sh.name,'aria-label':T('Sheet name')});
  nameIn.addEventListener('change',()=>{ sh.name=nameIn.value.trim()||T('Untitled sheet'); persist(sh); });
  const grid=h('div',{class:'shgrid'});
  const status=h('span',{class:'dim small shstat'});
  let val=evaluate(sh.rows);
  const width=()=>Math.max(...sh.rows.map(r=>r.length));
  function draw(focus){
    val=evaluate(sh.rows);
    const W=width();
    const t=h('table',{class:'shtable'});
    t.appendChild(h('thead',{},h('tr',{},[h('th',{class:'shcorner'})].concat(Array.from({length:W},(_,c)=>h('th',{text:COL(c)}))))));
    const tb=h('tbody');
    sh.rows.forEach((row,r)=>{
      const tr=h('tr',{},[h('th',{text:String(r+1)})]);
      for(let c=0;c<W;c++){
        const rawv=row[c]??'';
        const isF=String(rawv).startsWith('=');
        const inp=h('input',{class:'shcell'+(isF?' f':'')+(r===0?' hd':''),'data-r':r,'data-c':c,'aria-label':COL(c)+(r+1),spellcheck:'false'});
        inp.value=isF?show(val(r,c)):rawv;
        if(isF) inp.title=rawv; else if(String(rawv).length>18) inp.title=rawv;
        inp.addEventListener('focus',()=>{ inp.value=sh.rows[r][c]??''; status.textContent=COL(c)+(r+1)+(isF?'  '+rawv:''); });
        inp.addEventListener('change',()=>{ sh.rows[r][c]=inp.value; persist(sh); draw([r,c]); });
        inp.addEventListener('blur',()=>{ const v=sh.rows[r][c]??''; if(String(v).startsWith('=')) inp.value=show(val(r,c)); });
        inp.addEventListener('keydown',e=>{
          const go=(dr,dc)=>{ const n=grid.querySelector('[data-r="'+(r+dr)+'"][data-c="'+(c+dc)+'"]'); if(n){ e.preventDefault(); if(inp.value!==(sh.rows[r][c]??'')){ sh.rows[r][c]=inp.value; persist(sh); draw([r+dr,c+dc]); } else n.focus(); } };
          if(e.key==='Enter') go(e.shiftKey?-1:1,0);
          else if(e.key==='ArrowDown') go(1,0); else if(e.key==='ArrowUp') go(-1,0);
        });
        tr.appendChild(h('td',{},inp));
      }
      tb.appendChild(tr);
    });
    t.appendChild(tb);
    grid.innerHTML=''; grid.appendChild(t);
    if(focus){ const n=grid.querySelector('[data-r="'+focus[0]+'"][data-c="'+focus[1]+'"]'); if(n) n.focus(); }
  }
  const btn=(label,fn,title)=>{ const b=h('button',{class:'sm',type:'button',title:title||''},label); b.addEventListener('click',fn); return b; };
  const file=h('input',{type:'file',accept:'.csv,.tsv,.txt',hidden:true});
  file.addEventListener('change',async()=>{ const f=file.files[0]; if(!f) return;
    const rows=fromCSV(await f.text()); if(!rows.length) return;
    if(!sh.fresh&&!confirm(T('Replace this sheet with the file?'))) return;
    const W=Math.max(6,...rows.map(r=>r.length)); sh.rows=rows.map(r=>r.concat(Array(W-r.length).fill(''))); persist(sh); draw(); file.value=''; });
  const tools=h('div',{class:'shtools'},[
    nameIn,
    btn('+ '+T('Row'),()=>{ if(sh.rows.length>=MAXR) return; sh.rows.push(Array(width()).fill('')); persist(sh); draw(); }),
    btn('+ '+T('Column'),()=>{ if(width()>=MAXC) return; sh.rows.forEach(r=>{ while(r.length<width()) r.push(''); r.push(''); }); persist(sh); draw(); }),
    btn('− '+T('Last row'),()=>{ if(sh.rows.length<=1) return; sh.rows.pop(); persist(sh); draw(); }),
    btn(T('Open a CSV'),()=>file.click()),file,
    btn(T('Download CSV'),()=>download(slug(sh.name)+'.csv',toCSV(sh)),T('The file to keep in your repository')),
    opts.onDelete?btn(T('Delete sheet'),()=>{ if(!confirm(T('Delete this sheet?'))) return; delete all()[sh.id]; store().save(); opts.onDelete(); }):null]);
  wrap.append(tools,grid,h('p',{class:'dim small shhelp',html:T('Type a value, or a formula that starts with <code>=</code>: <code>=B2*C2</code>, <code>=SUM(D2:D20)</code>, <code>=AVERAGE(…)</code>, <code>=ROUND(B2/C2, 2)</code>. Enter moves down. Your code can read this sheet as')+' <code>sheets/'+slug(sh.name)+'.csv</code>.'}),status);
  draw();
  return wrap;
}

/* The project's ten starter sentences, as the first rows of the answer key. */
function answerKeyRows(){
  const P=window.PROJECT||{};
  const head=['No.','Kind of writing','Sentence','What should be found','What should happen','Note'];
  const rows=((P.samples||{}).rows||[]).map(r=>[String(r[0]),r[1]||'',r[2]||'',r[3]||'','','']);
  return [head].concat(rows);
}
function newAnswerKey(){
  const S=all(); let id='answer-key', n=1; while(S[id]) id='answer-key-'+(++n);
  S[id]={name:'answer-key-v'+n,rows:answerKeyRows(),at:Date.now()}; store().save(); return id;
}

/* ---------- worked starters ----------
   Four sheets most AI work needs, each filled with a made-up example so the
   page never opens empty and every formula has something to compute. Opening
   one makes your own copy; the labels come out in Hinglish when the page is in
   Hinglish. All numbers and names are invented: replace them with yours. */
const L=s=>T(s);
const STARTERS=[
  {id:'cost-model', title:'Cost model', what:'What one answer costs, and a month of them. Change the retry rate or the cache hit rate and watch the cost per successful answer move.',
   rows:()=>[
    [L('Input'),L('Value'),L('Note')],
    [L('Input tokens per call'),'1200',L('the note you send, in tokens (Lego bricks of text)')],
    [L('Output tokens per call'),'300',L('the reply, in tokens')],
    [L('Price per 1M input tokens ($)'),'3',L('made-up price: use your provider’s price page')],
    [L('Price per 1M output tokens ($)'),'15',L('made-up price')],
    [L('Price per 1M cached input tokens ($)'),'0.3',L('a cached prompt is read back cheaply')],
    [L('Prompt cache hit rate (%)'),'60%',L('share of input served from the cache')],
    [L('Retry / failure rate (%)'),'10%',L('share of calls that fail and must be sent again')],
    [L('Successful answers needed per month'),'30000',''],
    [L('Rupees per dollar'),'88',L('check today’s rate')],
    ['','',''],
    [L('Result'),L('Value'),L('How it is worked out')],
    [L('Input cost per call ($)'),'=(B2*(1-B7)*B4+B2*B7*B6)/1000000',L('cached and uncached input, priced apart')],
    [L('Output cost per call ($)'),'=B3*B5/1000000',''],
    [L('Cost per call ($)'),'=B13+B14',''],
    [L('Calls per successful answer'),'=1/(1-B8)',L('retries mean more than one call per answer')],
    [L('Cost per successful answer ($)'),'=B15*B16',L('the number to watch')],
    [L('Cost per month ($)'),'=B17*B9',''],
    [L('Cost per month (₹)'),'=ROUND(B18*B10,0)','']]},
  {id:'eval-scoreboard', title:'25-case eval scoreboard', what:'Twenty-five test messages with the right answer written first, like a teacher’s answer key. Mark each 1 (pass) or 0 (fail) and read the pass rate.',
   rows:()=>{
    const cases=[
      ['My PAN is ABCDE1234F, please update it','PAN'],['Call me on 98765 43210 after 6','Phone'],['Aadhaar 1234 5678 9012 is linked','Aadhaar'],
      ['Account 000123456789, branch ABCD0123456','Bank account + IFSC'],['I live at 12 Lake Road, Pune 411001','Address'],['Mera number nau aath saat chhe paanch hai','Phone (in words)'],
      ['Refund for order 55821 please','Nothing to find'],['PAN: abcde1234f (small letters)','PAN'],['Email me at test.user@example.com','Email'],
      ['DOB 01/01/1990, name Ravi Kumar','Name + date of birth'],['Voter ID ABC1234567 lost','Voter ID'],['My passport is K1234567','Passport'],
      ['UPI id ravi@okexample','UPI ID'],['Card ending 4242, expiry 12/29','Card details'],['Pin code 110001 only','Nothing to find (alone)'],
      ['The meeting is at 10:30 on 5 May','Nothing to find'],['GSTIN 27ABCDE1234F1Z5 on the invoice','GSTIN'],['Vehicle MH12AB1234 towed','Vehicle number'],
      ['Mobile +91-91234-56789','Phone'],['Aadhaar ending 9012 only','Partial Aadhaar'],['Driving licence MH0120200012345','Driving licence'],
      ['Hi, I need help with my bill','Nothing to find'],['IFSC ABCD0123456 for NEFT','IFSC'],['Ration card 1234567890 Pune','Ration card'],['Call 1800 123 4567 toll free','Helpline (not personal)']];
    const pass=[1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1];
    const out=[[L('Case'),L('Made-up message'),L('Right answer (written first)'),L('Model found'),L('Pass (1) or fail (0)'),L('Why it failed')]];
    cases.forEach((c,i)=>out.push([String(i+1),c[0],c[1],pass[i]?c[1]:'',String(pass[i]),pass[i]?'':L('missed: write why')]));
    out.push(['','','','','','']);
    out.push([L('Passed'),'','','','=SUM(E2:E26)','']);
    out.push([L('Pass rate'),'','','','=ROUND(SUM(E2:E26)/COUNT(E2:E26)*100,1)',L('per cent')]);
    return out; }},
  {id:'risk-register', title:'AI risk register', what:'Each risk with how likely and how bad it is, the rule it could break, and the named person who pulls the kill switch.',
   rows:()=>[
    [L('Risk'),L('Likelihood (1–5)'),L('Impact (1–5)'),L('Score'),L('Regulatory trigger (DPDP / CERT-In / EU AI Act / Sectoral)'),L('Kill-switch / fallback owner'),L('Mitigation'),L('Status')],
    [L('A real Aadhaar number reaches an outside model'),'2','5','=B2*C2','DPDP',L('Delivery manager'),L('mask before sending; synthetic data in tests'),L('Open')],
    [L('Model misses phone numbers written in words'),'4','3','=B3*C3',L('Sectoral'),L('AI engineer'),L('add word-number cases to the answer key'),L('Open')],
    [L('Provider retires the model we use'),'3','3','=B4*C4',L('None'),L('Project manager'),L('pin the version; rerun the eval on the new one'),L('Open')],
    [L('A security incident in the logging system'),'2','4','=B5*C5',L('CERT-In (6 hours)'),L('Security lead'),L('incident runbook; log retention checked'),L('Open')],
    [L('Cost per answer doubles after launch'),'3','2','=B6*C6',L('None'),L('Product manager'),L('cache prompts; cap retries; alert on spend'),L('Open')],
    [L('Hidden instructions in a pasted document'),'3','4','=B7*C7',L('EU AI Act / Sectoral'),L('AI engineer'),L('treat pasted text as data; tool permissions'),L('Open')],
    ['','','','','','','',''],
    [L('Highest score'),'','','=MAX(D2:D7)','','','','']]},
  {id:'sprint-plan', title:'Sprint / release plan', what:'Weeks, goals and estimates, with a kill criterion for each experiment: the rule, written before you start, that says stop.',
   rows:()=>[
    [L('Week'),L('Goal'),L('Experiment or task'),L('Estimate (days)'),L('Done (days)'),L('Kill criterion (written first)'),L('Decision (go / kill / change)')],
    ['1',L('Answer key ready'),L('Write 25 cases with right answers'),'2','2',L('—'),L('Go')],
    ['2',L('First finder'),L('Rules for PAN, Aadhaar, phone'),'3','3',L('Stop if recall is under 70% after 3 days'),L('Go')],
    ['3',L('Model finder'),L('Prompt a model on the same 25 cases'),'3','2',L('Stop if it beats rules by under 10 points'),'' ],
    ['4',L('Combine'),L('Rules first, model for what rules miss'),'4','0',L('Stop if cost per answer is over ₹0.50'),'' ],
    ['5',L('Release gate'),L('Pass rate 90%+, no real data in logs'),'2','0',L('Do not ship below the gate'),'' ],
    ['6',L('Pilot'),L('Two teams, shadow mode first'),'5','0',L('Stop if staff override it on over 20% of cases'),'' ],
    ['','','','','','',''],
    [L('Total'),'','','=SUM(D2:D7)','=SUM(E2:E7)','',''],
    [L('Done (%)'),'','','','=ROUND(E9/D9*100,0)','','']]}
];
function newStarter(st){
  const S=all(); let id=st.id, n=1; while(S[id]) id=st.id+'-'+(++n);
  S[id]={name:st.id+(n>1?'-'+n:''),rows:st.rows(),at:Date.now()}; store().save(); return id;
}

/* ---------- the Sheets page ---------- */
function page(sel){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:T('Hands-on, in this page')})]),
    h('h1',{text:T('Sheets')}),
    h('p',{html:T('The spreadsheet work in the course happens here: the answer key, the cost model, the market size, the sprint plan. Sheets are saved with your progress, your notebook code can read them as CSV files, and <em>Download CSV</em> gives you the file for your repository.')})]));
  const S=all();
  const ids=Object.keys(S).sort((a,b)=>(S[b].at||0)-(S[a].at||0));
  const mk=(label,fn)=>{ const b=h('button',{type:'button'},label); b.addEventListener('click',fn); return b; };
  w.appendChild(h('div',{class:'shnew'},[
    mk('+ '+T('New sheet'),()=>{ const id='s'+Date.now().toString(36); all()[id]={name:T('Untitled sheet'),rows:blank(12,6),at:Date.now()}; store().save(); location.hash='#/sheets/'+id; }),
    mk('+ '+T('Answer key from the ten starter sentences'),()=>{ location.hash='#/sheets/'+newAnswerKey(); })]));
  /* the worked starters are always on the shelf, so the page is never empty */
  w.appendChild(h('h2',{class:'shsub',text:T('Worked starters')}));
  w.appendChild(h('p',{class:'dim small',text:T('Each opens your own copy, filled with a made-up example. Change the numbers to yours.')}));
  w.appendChild(h('div',{class:'shstarters'},STARTERS.map(st=>{
    const b=h('button',{type:'button',class:'shstarter'},[h('strong',{text:T(st.title)}),h('span',{text:T(st.what)})]);
    b.addEventListener('click',()=>{ location.hash='#/sheets/'+newStarter(st); });
    return b;
  })));
  if(ids.length) w.appendChild(h('h2',{class:'shsub',text:T('Your sheets')}));
  if(ids.length) w.appendChild(h('ul',{class:'shlist'},ids.map(id=>h('li',{class:id===sel?'on':''},[
    h('a',{href:'#/sheets/'+id,text:S[id].name}),
    h('span',{class:'dim small',text:' · '+((S[id].rows||[]).filter(r=>r.some(x=>x!=='')).length)+' '+T('rows')+' · sheets/'+slug(S[id].name)+'.csv'})]))));
  else w.appendChild(h('p',{class:'dim small',text:T('Your own sheets will appear here. Open a starter above, or start from a chapter that asks for a spreadsheet.')}));
  const open=sel&&S[sel]?sel:null;
  if(open) w.appendChild(h('section',{class:'part'},[editor(open,null,{onDelete:()=>{ location.hash='#/sheets'; }})]));
  return w;
}

/* A chapter's own sheet, inline. */
function panel(ch,name){ return editor('ch:'+ch,name); }

return { page, panel, editor, evaluate, show, toCSV, fromCSV, files, slug, newAnswerKey, answerKeyRows, STARTERS, newStarter };
})();
