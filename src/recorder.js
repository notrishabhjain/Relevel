/* Record yourself, inside the page.

   The interview chapters ask you to answer out loud and listen back: the
   metrics question in ten minutes, the system-design question in twenty-five.
   That used to mean a phone's voice recorder. It happens here: record, see the
   clock against the time you were given, play it back, keep the takes.

   Takes are kept in this browser (IndexedDB), never uploaded and never part of
   the progress that syncs. Download one to keep it elsewhere.              */
window.RECORDER = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else if(a[k]!=null&&a[k]!==false)e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const T=s=>window.T?window.T(s):s;
const DB='aifz-takes';

function db(){
  return new Promise((res,rej)=>{
    const r=indexedDB.open(DB,1);
    r.onupgradeneeded=()=>{ const s=r.result.createObjectStore('takes',{keyPath:'id'}); s.createIndex('key','key'); };
    r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error);
  });
}
async function tx(mode,fn){ const d=await db(); return new Promise((res,rej)=>{ const t=d.transaction('takes',mode); const out=fn(t.objectStore('takes')); t.oncomplete=()=>res(out&&out.result!==undefined?out.result:out); t.onerror=()=>rej(t.error); }); }
const put=take=>tx('readwrite',s=>s.put(take));
const del=id=>tx('readwrite',s=>s.delete(id));
async function list(key){ const r=await tx('readonly',s=>s.index('key').getAll(key)); return (r||[]).sort((a,b)=>b.at-a.at); }

const clock=s=>{ s=Math.max(0,Math.round(s)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); };

/* key: where the takes belong (a chapter id); minutes: the time the question gives you */
function panel(key, minutes){
  const box=h('div',{class:'recbox'});
  const btn=h('button',{class:'primary sm',type:'button'},'● '+T('Record'));
  const time=h('span',{class:'mono rectime',text:'0:00'+(minutes?' / '+clock(minutes*60):'')});
  const msg=h('span',{class:'dim small'});
  const takes=h('ul',{class:'reclist'});
  let rec=null, chunks=[], t0=0, tick=null, stream=null;
  async function draw(){
    let items=[]; try{ items=await list(key); }catch(e){ msg.textContent=T('This browser cannot keep recordings.'); }
    takes.innerHTML='';
    items.forEach((tk,i)=>{
      const url=URL.createObjectURL(tk.blob);
      const dl=h('a',{class:'sm',href:url,download:'take-'+(items.length-i)+'.'+(tk.type.includes('ogg')?'ogg':tk.type.includes('mp4')?'m4a':'webm'),text:T('Download')});
      const rm=h('button',{class:'sm',type:'button'},'✕');
      rm.addEventListener('click',async()=>{ if(!confirm(T('Delete this take?'))) return; await del(tk.id); draw(); });
      takes.appendChild(h('li',{},[h('span',{class:'mono small',text:T('Take')+' '+(items.length-i)+' · '+clock(tk.secs)+' · '+new Date(tk.at).toLocaleString()}),
        h('audio',{controls:true,src:url,preload:'metadata'}),dl,rm]));
    });
  }
  async function start(){
    if(!navigator.mediaDevices||!window.MediaRecorder){ msg.textContent=T('This browser cannot record audio. Try Chrome, Edge or Safari.'); return; }
    try{ stream=await navigator.mediaDevices.getUserMedia({audio:true}); }
    catch(e){ msg.textContent=T('The microphone was not allowed. Allow it for this site in the browser’s address bar, then press Record again.'); return; }
    chunks=[]; const r=rec=new MediaRecorder(stream), s=stream;
    r.ondataavailable=e=>{ if(e.data&&e.data.size) chunks.push(e.data); };
    /* stop() lets go of `rec` at once; this runs later, so it keeps its own */
    r.onstop=async()=>{
      s.getTracks().forEach(t=>t.stop());
      const secs=(performance.now()-t0)/1000;
      const blob=new Blob(chunks,{type:r.mimeType||'audio/webm'});
      try{ await put({id:key+':'+Date.now(),key,at:Date.now(),secs,type:blob.type,blob}); }
      catch(e){ msg.textContent=T('The take could not be saved in this browser. Download it before you leave.'); }
      draw();
    };
    rec.start(1000); t0=performance.now();
    btn.textContent='■ '+T('Stop'); btn.classList.add('red'); msg.textContent=T('Recording. Answer out loud, as you would in the room.');
    tick=setInterval(()=>{ const s=(performance.now()-t0)/1000; time.textContent=clock(s)+(minutes?' / '+clock(minutes*60):'');
      time.classList.toggle('over',!!minutes&&s>minutes*60); },250);
  }
  function stop(){ clearInterval(tick); if(rec&&rec.state!=='inactive') rec.stop(); rec=null;
    btn.textContent='● '+T('Record'); btn.classList.remove('red'); msg.textContent=T('Saved. Listen back before you read the model answer.'); }
  btn.addEventListener('click',()=>rec?stop():start());
  box.append(h('div',{class:'recrow'},[btn,time,msg]),takes,
    h('p',{class:'dim small',text:T('Recordings stay in this browser. They are never uploaded and never part of the progress that syncs.')}));
  draw();
  return box;
}

return { panel, list };
})();
