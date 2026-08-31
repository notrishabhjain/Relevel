/* Account-backed storage.

   When the app is served with its API and you are signed in, the database holds
   your progress and this device is a cache. Every write goes up; every open
   pulls down. Sign in on a new machine and your record is simply there.

   When there is no backend (opened from disk, or on a static host) every call
   here fails fast and the app keeps working on localStorage alone. */

window.REMOTE = (function(){
const KEY  = () => (window.STORE && window.STORE.KEY) || 'aifz2027';
const MKEY = () => KEY() + ':srv';        // {version, marker, pending}

let available = null;                     // null = not probed yet
let user = null;

function meta(){
  try{ return JSON.parse(localStorage.getItem(MKEY()) || '{}'); }catch(e){ return {}; }
}
function setMeta(m){
  try{ localStorage.setItem(MKEY(), JSON.stringify(m)); }catch(e){}
}
function clearMeta(){ try{ localStorage.removeItem(MKEY()); }catch(e){} }

function deviceName(){
  const ua = navigator.userAgent || '';
  const os = /iPhone|iPad/.test(ua) ? 'iPhone/iPad'
           : /Android/.test(ua)     ? 'Android'
           : /Mac OS X/.test(ua)    ? 'Mac'
           : /Windows/.test(ua)     ? 'Windows'
           : /Linux/.test(ua)       ? 'Linux' : 'device';
  const br = /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome'
           : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'browser';
  return os + ' · ' + br;
}

async function api(path, opts){
  const o = Object.assign({ credentials:'same-origin', headers:{} }, opts||{});
  o.headers = Object.assign({ 'x-aifz':'1' }, o.headers);
  if(o.body && typeof o.body !== 'string'){
    o.headers['content-type'] = 'application/json';
    o.body = JSON.stringify(o.body);
  }
  const res = await fetch(path, o);
  let body = null;
  try{ body = await res.json(); }catch(e){}
  return { ok: res.ok, status: res.status, body };
}

/* Is there a backend behind this page at all? One probe per load. */
async function probe(){
  if(available !== null) return available;
  try{
    const r = await api('/api/health');
    available = !!(r.ok && r.body && r.body.ok);
    if(available) available = { signIn: !!r.body.signIn,
      database: !!r.body.database, dbReady: !!r.body.dbReady, dbError: r.body.dbError || null };
  }catch(e){ available = false; }
  return available;
}

async function me(){
  const a = await probe();
  if(!a) return null;
  try{
    const r = await api('/api/me');
    user = (r.ok && r.body && r.body.user) ? r.body.user : null;
    return user;
  }catch(e){ return null; }
}

const loginUrl = () => '/api/auth/login';
async function logout(){
  try{ await api('/api/auth/logout', {method:'POST'}); }catch(e){}
  clearMeta(); user = null;
}

async function pull(){
  const r = await api('/api/state');
  if(r.status === 401) return {signedOut:true};
  if(!r.ok) throw new Error('load failed (' + r.status + ')');
  return r.body;                          // {version, updatedAt, data}
}

/* Writes carry the version they were based on, so a device that has been idle
   cannot overwrite newer work from another one — the server refuses and returns
   its copy instead. */
async function push(data, baseVersion){
  const r = await api('/api/state', {method:'PUT',
    body:{ baseVersion, data, device: deviceName() }});
  if(r.status === 401) return {signedOut:true};
  if(r.status === 409) return {conflict:true, server:r.body};
  if(r.status === 413) return {tooLarge:true};
  if(!r.ok) throw new Error('save failed (' + r.status + ')');
  return {version:r.body.version, updatedAt:r.body.updatedAt};
}

async function history(){
  const r = await api('/api/history');
  return r.ok && r.body ? (r.body.versions || []) : [];
}
async function restore(version){
  const r = await api('/api/restore', {method:'POST', body:{version}});
  if(!r.ok) throw new Error('restore failed (' + r.status + ')');
  return r.body;
}

return { probe, me, logout, loginUrl, pull, push, history, restore,
         meta, setMeta, clearMeta, deviceName,
         get user(){ return user; },
         get available(){ return available; } };
})();
