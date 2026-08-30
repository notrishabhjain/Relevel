/* Durability layer.

   localStorage alone is per-origin, per-device, and disappears when someone
   clears site data — so progress gets three defences:
     1. a rolling local backup taken at the start of every session
     2. export / import of a plain JSON file (works anywhere, needs no account)
     3. optional sync to a *private* GitHub Gist, which gives cross-device
        continuity with no server and no cost

   Gist sync talks straight from the browser to api.github.com. That request is
   blocked by the Content-Security-Policy inside a Claude Artifact, so sync only
   works on the hosted build; the UI says so rather than failing silently. */

window.SYNC = (function(){
const FILE = 'ai-from-zero-progress.json';
const API  = 'https://api.github.com';
const KEY  = () => (window.STORE && window.STORE.KEY) || 'aifz2027';
const GKEY = () => KEY() + ':gh';
const BKEY = () => KEY() + ':bak';

/* ---------- local backup ---------- */
function takeSessionBackup(){
  try{
    const cur = localStorage.getItem(KEY());
    if(!cur) return;
    JSON.parse(cur);                              // only back up parseable state
    localStorage.setItem(BKEY(), JSON.stringify({at:Date.now(), data:cur}));
  }catch(e){}
}
function backupInfo(){
  try{
    const raw = localStorage.getItem(BKEY());
    if(!raw) return null;
    const b = JSON.parse(raw);
    return {at:b.at, bytes:b.data.length};
  }catch(e){ return null; }
}
function restoreBackup(){
  const raw = localStorage.getItem(BKEY());
  if(!raw) throw new Error('No backup found.');
  const b = JSON.parse(raw);
  JSON.parse(b.data);
  if(window.STORE) window.STORE.suspend();
  localStorage.setItem(KEY(), b.data);
  return b.at;
}

/* ---------- export / import ---------- */
function snapshot(){
  return {app:'ai-from-zero', v:1, exportedAt:Date.now(),
    data: window.STORE ? window.STORE.S : JSON.parse(localStorage.getItem(KEY())||'{}')};
}
function exportText(){
  if(window.STORE) window.STORE.flush();
  return JSON.stringify(snapshot(), null, 2);
}
function exportName(){
  return 'ai-from-zero-' + new Date().toISOString().slice(0,10) + '.json';
}
/* Some hosts (the Claude artifact viewer among them) never grant a page
   download permission, so a link click is inert. Callers must offer the
   clipboard path as well — see canDownload. */
function exportFile(){
  const s = exportText();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([s],{type:'application/json'}));
  a.download = exportName();
  document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},0);
  return s.length;
}
function canDownload(){
  /* the artifact viewer runs the page in a sandboxed frame without downloads */
  try{
    if(window.self !== window.top) return false;
  }catch(e){ return false; }
  return 'download' in document.createElement('a');
}
async function copyText(text){
  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(text); return true;
    }
  }catch(e){}
  try{
    const ta=document.createElement('textarea');
    ta.value=text; ta.setAttribute('readonly','');
    ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    const ok=document.execCommand('copy'); ta.remove();
    return ok;
  }catch(e){ return false; }
}
function parsePayload(text){
  const j = JSON.parse(text);
  const data = j && j.app === 'ai-from-zero' ? j.data : j.data ? j.data : j;
  if(!data || typeof data !== 'object' || !('sk' in data || 'done' in data))
    throw new Error('That file does not look like AI From Zero progress.');
  return {data, exportedAt: j.exportedAt || 0};
}
function applyState(data){
  takeSessionBackup();                             // never overwrite without a copy
  if(window.STORE) window.STORE.suspend();         // stop the stale in-memory copy writing back
  localStorage.setItem(KEY(), JSON.stringify(data));
}
function importText(text){
  const {data} = parsePayload(text);
  applyState(data);
  return summarise(data);
}
function summarise(d){
  const skills = Object.values(d.sk||{}).filter(s=>s.n>0).length;
  return {skills, attempts:(d.att||[]).length, chapters:Object.keys(d.done||{}).length,
    exercises:Object.keys(d.ex||{}).length, updatedAt:d.updatedAt||0};
}

/* ---------- storage diagnostics ---------- */
function usable(){
  try{ localStorage.setItem('__t','1'); localStorage.removeItem('__t'); return true; }
  catch(e){ return false; }
}
function stats(){
  let bytes = 0;
  try{ bytes = (localStorage.getItem(KEY())||'').length; }catch(e){}
  const d = window.STORE ? window.STORE.S : {};
  return {ok:usable(), bytes, backup:backupInfo(), summary:summarise(d),
    origin: location.origin === 'null' ? 'local file' : location.origin,
    persistent: null};
}
/* Ask the browser to exempt this origin from storage eviction. */
function requestPersistence(){
  if(navigator.storage && navigator.storage.persist) return navigator.storage.persist();
  return Promise.resolve(false);
}

/* ---------- GitHub Gist sync ---------- */
function ghConfig(){
  try{ return JSON.parse(localStorage.getItem(GKEY())||'{}'); }catch(e){ return {}; }
}
function ghSave(c){ localStorage.setItem(GKEY(), JSON.stringify(c)); }
function ghClear(){ localStorage.removeItem(GKEY()); }

async function ghCall(path, opts){
  const c = ghConfig();
  if(!c.token) throw new Error('No token saved.');
  let r;
  try{
    r = await fetch(API + path, Object.assign({
      headers:{ 'Authorization':'Bearer ' + c.token,
                'Accept':'application/vnd.github+json',
                'X-GitHub-Api-Version':'2022-11-28' }
    }, opts||{}));
  }catch(e){
    throw new Error('Could not reach api.github.com. Inside the Claude artifact this ' +
      'is blocked by its content policy — sync works on the hosted version.');
  }
  if(r.status === 401) throw new Error('GitHub rejected the token (401). It may be expired or lack the gist scope.');
  if(r.status === 403) throw new Error('GitHub refused the request (403). Check the token has gist read and write.');
  if(r.status === 404) throw new Error('Gist not found (404). It may have been deleted — disconnect and reconnect to make a new one.');
  if(!r.ok) throw new Error('GitHub returned ' + r.status + '.');
  return r.json();
}

async function ghVerify(token){
  const r = await fetch(API + '/user', {headers:{
    'Authorization':'Bearer ' + token, 'Accept':'application/vnd.github+json'}});
  if(!r.ok) throw new Error('Token rejected (' + r.status + ').');
  const u = await r.json();
  return u.login;
}

async function ghPush(){
  if(window.STORE) window.STORE.flush();
  const c = ghConfig();
  const content = JSON.stringify(snapshot(), null, 2);
  const files = {}; files[FILE] = {content};
  let g;
  if(c.gistId){
    g = await ghCall('/gists/' + c.gistId, {method:'PATCH', body:JSON.stringify({files})});
  } else {
    g = await ghCall('/gists', {method:'POST', body:JSON.stringify({
      description:'AI From Zero — skill tracker progress (private)',
      public:false, files})});
    c.gistId = g.id;
  }
  c.lastSync = Date.now();
  c.lastPushAt = Date.now();
  ghSave(c);
  return {id:c.gistId, url:g.html_url, bytes:content.length, at:c.lastSync};
}

async function ghRemote(){
  const c = ghConfig();
  if(!c.gistId) return null;
  const g = await ghCall('/gists/' + c.gistId);
  const f = g.files && g.files[FILE];
  if(!f) throw new Error('The gist has no ' + FILE + ' file.');
  let text = f.content;
  if(f.truncated && f.raw_url){
    const r = await fetch(f.raw_url); text = await r.text();
  }
  const p = parsePayload(text);
  return {exportedAt:p.exportedAt, summary:summarise(p.data), data:p.data,
    updatedAt:g.updated_at, url:g.html_url};
}

async function ghPull(){
  const rem = await ghRemote();
  if(!rem) throw new Error('Nothing synced yet — push first.');
  applyState(rem.data);
  const c = ghConfig(); c.lastSync = Date.now(); c.lastPullAt = Date.now(); ghSave(c);
  return rem.summary;
}

/* Is it safe to overwrite local with remote, or the other way round?
   Compares the local clock against the last sync so a straight overwrite is
   never silent when both sides have moved. */
function localChangedSinceSync(){
  const c = ghConfig();
  const d = window.STORE ? window.STORE.S : {};
  if(!c.lastSync) return true;
  return (d.updatedAt || 0) > c.lastSync;
}

return {takeSessionBackup, backupInfo, restoreBackup,
        exportFile, exportText, exportName, canDownload, copyText,
        importText, snapshot, summarise,
        stats, usable, requestPersistence,
        gh:{config:ghConfig, save:ghSave, clear:ghClear, verify:ghVerify,
            push:ghPush, pull:ghPull, remote:ghRemote, localChangedSinceSync}};
})();
