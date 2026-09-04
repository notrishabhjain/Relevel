/* Where the curriculum comes from.

   The chapters, skills, questions, exercises and processes are data, not code.
   When a backend is present they are loaded from its database, so editing them
   in the portal takes effect on the next load — no rebuild, no redeploy. The
   copy bundled into this file is the fallback: it is what a backend-less build
   uses, what seeds the database on first boot, and what the app falls back to
   if the network is unavailable before the cache is warm. */

window.CONTENT = (function(){
const CKEY = 'aifz2027:content';
let source = 'built-in';        // built-in | server | cache
let versions = {};
let editor = false;

/* The built-ins, captured before anything overwrites the globals. */
const BUILT_IN = {
  chapters: (window.PARTS || []).reduce((a, p) => a.concat(window['PART' + p.n] || []), []),
  skills: window.SKILLS || [],
  items: [].concat(window.ITEMS1 || [], window.ITEMS2 || [], window.ITEMS3 || [], window.ITEMS4 || []),
  exercises: window.EXERCISES || [],
  processes: window.PROCESSES || [],
  hinglish: window.HING || {},
  reference: {
    DOMAINS: window.DOMAINS, PARTS: window.PARTS, RULES: window.RULES,
    SETUP: window.SETUP, GLOSSARY: window.GLOSSARY, VENDOR: window.VENDOR,
    LATER: window.LATER, PIPELINE: window.PIPELINE, REDMARKS: window.REDMARKS,
    LEVEL_NAMES: window.LEVEL_NAMES, LEVEL_BANDS: window.LEVEL_BANDS
  }
};

/* Publish a content set into the globals the rest of the app reads. */
function apply(c){
  const ch = c.chapters && c.chapters.length ? c.chapters : BUILT_IN.chapters;
  window.CHAPTERS = ch;
  /* Republish one global per part, however many parts there are. */
  const parts = (c.reference && c.reference.PARTS) || BUILT_IN.reference.PARTS || [];
  parts.forEach(p => { window['PART' + p.n] = ch.filter(x => x.part === p.n); });
  window.SKILLS = (c.skills && c.skills.length) ? c.skills : BUILT_IN.skills;
  window.ALL_ITEMS = (c.items && c.items.length) ? c.items : BUILT_IN.items;
  window.EXERCISES = c.exercises || BUILT_IN.exercises;
  window.PROCESSES = c.processes || BUILT_IN.processes;
  /* The one content kind that merges rather than replaces. It is a lookup, so
     a server copy that is empty or half-written should add to what shipped in
     the page, never wipe it — a missing translation must always fall back to
     the built-in one before it falls back to English. */
  window.HING = Object.assign({}, BUILT_IN.hinglish, c.hinglish || {});
  const ref = c.reference || BUILT_IN.reference;
  Object.keys(BUILT_IN.reference).forEach(k => {
    window[k] = ref[k] !== undefined ? ref[k] : BUILT_IN.reference[k];
  });
}

function cached(){
  try{ return JSON.parse(localStorage.getItem(CKEY) || 'null'); }catch(e){ return null; }
}
function cache(c, v){
  try{ localStorage.setItem(CKEY, JSON.stringify({at:Date.now(), versions:v, content:c})); }
  catch(e){ /* quota: the built-ins still work */ }
}

async function fetchServer(){
  const r = await fetch('/api/content', {credentials:'same-origin', headers:{'x-aifz':'1'}});
  if(!r.ok) throw new Error('content ' + r.status);
  const j = await r.json();
  const c = {}, v = {};
  Object.entries(j.content || {}).forEach(([kind, row]) => { c[kind] = row.data; v[kind] = row; });
  if(!Object.keys(c).length) throw new Error('content empty');
  editor = !!j.editor;
  return {content:c, versions:v};
}

/* Called once before the app boots. Never rejects: the built-ins always work. */
async function load(){
  const c0 = cached();
  try{
    const {content, versions:v} = await fetchServer();
    versions = v; source = 'server';
    apply(content); cache(content, v);
    return {source};
  }catch(e){
    if(c0 && c0.content){
      versions = c0.versions || {}; source = 'cache';
      apply(c0.content);
      return {source, error:e.message};
    }
    source = 'built-in';
    apply(BUILT_IN);
    return {source, error:e.message};
  }
}

/* Editor writes. Returns {version} or throws with a readable message. */
async function save(kind, data, baseVersion){
  const r = await fetch('/api/content', {method:'PUT', credentials:'same-origin',
    headers:{'content-type':'application/json','x-aifz':'1'},
    body: JSON.stringify({kind, baseVersion, data})});
  const j = await r.json().catch(() => ({}));
  if(r.status === 403) throw new Error('You are not an editor on this deployment.');
  if(r.status === 422) throw new Error(j.detail || 'That content did not validate.');
  if(r.status === 409) throw new Error('Someone else saved this first — reload and redo your edit.');
  if(!r.ok) throw new Error(j.error || ('save failed (' + r.status + ')'));
  versions[kind] = Object.assign(versions[kind] || {}, {version:j.version, updatedAt:j.updatedAt});
  return j;
}
async function reset(kind){
  const r = await fetch('/api/content?reset=' + encodeURIComponent(kind),
    {method:'POST', credentials:'same-origin', headers:{'x-aifz':'1'}});
  if(!r.ok) throw new Error('reset failed (' + r.status + ')');
  return r.json();
}
function current(kind){
  const live = {chapters:window.CHAPTERS, skills:window.SKILLS, items:window.ALL_ITEMS,
    exercises:window.EXERCISES, processes:window.PROCESSES, hinglish:window.HING};
  if(kind === 'reference'){
    const o = {}; Object.keys(BUILT_IN.reference).forEach(k => o[k] = window[k]); return o;
  }
  return live[kind];
}
function versionOf(kind){ return (versions[kind] || {}).version || 0; }

return {load, save, reset, apply, current, versionOf, BUILT_IN,
  get source(){ return source; },
  get versions(){ return versions; },
  get editor(){ return editor; }};
})();
