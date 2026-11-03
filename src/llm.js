/* Connecting a model, inside the app.

   The hands-on work used to start in two other windows: a Colab notebook to
   run the code, and a provider's console to get a key and try prompts. Both
   now happen here. This file holds the connection the notebook (pyrun.js) and
   the playground share: which provider, which key, which models, and how a
   request leaves the page.

   The key is kept in this browser only (localStorage), never in the progress
   record that syncs to the database. It goes out with your own requests and
   nowhere else.

   How a request leaves the page:
     site    through this site's relay, /api/llm. Needed for NVIDIA Build, whose
             API does not accept calls from a web page. Exists wherever the
             app runs with its API (the Vercel deployment, the dev server).
     direct  straight from the page to the provider. Works for providers that
             accept browser calls (Gemini, OpenAI, OpenRouter), and is the only
             way on a static copy of the site with no API behind it.          */
window.LLM = (function(){
const KEY = 'aifz.llm';

const PROVIDERS = {
  nvidia: { name:'NVIDIA Build', note:'Free, no card. The model the course was written against.',
    base:'https://integrate.api.nvidia.com/v1', keyUrl:'https://build.nvidia.com/', keyHint:'nvapi-…',
    chat:'meta/llama-3.1-8b-instruct', strong:'meta/llama-3.3-70b-instruct',
    embed:'nvidia/nv-embedqa-e5-v5', vision:'meta/llama-3.2-11b-vision-instruct', direct:false },
  gemini: { name:'Google Gemini', note:'Free tier with a Google account. Works on every copy of the site.',
    base:'https://generativelanguage.googleapis.com/v1beta/openai', keyUrl:'https://aistudio.google.com/apikey', keyHint:'AIza…',
    chat:'gemini-2.5-flash', strong:'gemini-2.5-pro', embed:'gemini-embedding-001', vision:'gemini-2.5-flash', direct:true },
  openrouter: { name:'OpenRouter', note:'One key for many vendors’ models. Pay as you go; some models are free.',
    base:'https://openrouter.ai/api/v1', keyUrl:'https://openrouter.ai/keys', keyHint:'sk-or-…',
    chat:'meta-llama/llama-3.1-8b-instruct', strong:'meta-llama/llama-3.3-70b-instruct',
    embed:'', vision:'meta-llama/llama-3.2-11b-vision-instruct', direct:true },
  openai: { name:'OpenAI', note:'Paid. Small models cost fractions of a cent per call.',
    base:'https://api.openai.com/v1', keyUrl:'https://platform.openai.com/api-keys', keyHint:'sk-…',
    chat:'gpt-4o-mini', strong:'gpt-4o', embed:'text-embedding-3-small', vision:'gpt-4o-mini', direct:true },
  groq: { name:'Groq', note:'Free tier, very fast open models.',
    base:'https://api.groq.com/openai/v1', keyUrl:'https://console.groq.com/keys', keyHint:'gsk_…',
    chat:'llama-3.1-8b-instant', strong:'llama-3.3-70b-versatile', embed:'', vision:'', direct:true },
  custom: { name:'Another OpenAI-style API', note:'Any provider with the same request format. Calls go direct.',
    base:'', keyUrl:'', keyHint:'', chat:'', strong:'', embed:'', vision:'', direct:true }
};

function read(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}')||{}; }catch(e){ return {}; } }
function write(c){ try{ localStorage.setItem(KEY, JSON.stringify(c)); }catch(e){} listeners.forEach(f=>{try{f();}catch(e){}}); }
const listeners = [];
function onChange(f){ listeners.push(f); }

/* The settings, with the provider's defaults filled in for anything left blank. */
function settings(){
  const c = read();
  const id = PROVIDERS[c.provider] ? c.provider : 'nvidia';
  const p = PROVIDERS[id];
  return { provider:id, p, key:(c.keys||{})[id]||'', route:c.route||'auto',
    base:(id==='custom' ? (c.base||'') : p.base).replace(/\/+$/,''),
    chat:c.chat||p.chat, strong:c.strong||p.strong, embed:c.embed||p.embed, vision:c.vision||p.vision };
}
function set(patch){
  const c = read();
  if('key' in patch){ const id = patch.provider || c.provider || 'nvidia';
    c.keys = Object.assign({}, c.keys); if(patch.key) c.keys[id] = patch.key.trim(); else delete c.keys[id]; delete patch.key; }
  /* switching provider clears model overrides: they name the old provider's models */
  if(patch.provider && patch.provider !== c.provider){ delete c.chat; delete c.strong; delete c.embed; delete c.vision; }
  write(Object.assign(c, patch));
}
function forget(){ try{ localStorage.removeItem(KEY); }catch(e){} listeners.forEach(f=>{try{f();}catch(e){}}); }

/* What the site behind this page offers, from /api/health (null: no API here). */
async function relayInfo(){
  const a = window.REMOTE ? await window.REMOTE.probe() : false;
  return a && a.llm && a.llm.relay ? a.llm : null;
}

/* How a request would leave the page right now, and whether it can. */
async function plan(){
  const s = settings();
  const relay = await relayInfo();
  let mode = s.route === 'direct' ? 'direct' : s.route === 'site' ? 'site' : (relay ? 'site' : 'direct');
  const siteKey = !s.key && relay && relay.siteKey && relay.siteBase === s.base;
  let ready = true, why = '';
  if(mode === 'site' && !relay){ ready = false;
    why = 'This copy of the site has no relay behind it. Choose a provider that accepts direct calls, such as Gemini.'; }
  else if(mode === 'direct' && !s.p.direct && s.provider !== 'custom'){ ready = false;
    why = s.provider === 'nvidia' ? 'NVIDIA Build does not accept calls straight from a web page. Use the main site, where the relay runs, or choose Gemini.'
      : s.p.name + ' does not accept calls straight from a web page. Use the main site, where the relay runs, or choose Gemini.'; }
  else if(!s.base){ ready = false; why = 'Enter the API’s base address.'; }
  else if(!s.chat){ ready = false; why = 'Name the model to use, under Models and routing.'; }
  else if(!s.key && !siteKey){ ready = false;
    why = relay && relay.siteKey ? 'Paste your key, or sign in to use the key this site provides.' : 'Paste your API key.'; }
  return { mode, ready, why, siteKey:!!siteKey, provider:s.provider, name:s.p.name, base:s.base, key:s.key,
    models:{ chat:s.chat, strong:s.strong, embed:s.embed, vision:s.vision },
    relay: mode === 'site' ? new URL('/api/llm', location.href).href : null };
}

/* The course's code names NVIDIA's models. On another provider the same line
   should still run, so a model name from NVIDIA's catalogue is swapped for
   that provider's nearest model of the same kind. The swap is reported in the
   output, never silent. */
const NVIDIA_NAME = /^(meta|nvidia|mistralai|google|microsoft|qwen|deepseek-ai|ibm|writer|baai|snowflake)\//i;
function mapModel(requested, kind, pl){
  if(pl.provider === 'nvidia' || pl.provider === 'custom') return requested || pl.models[kind] || pl.models.chat;
  if(!requested) return pl.models[kind] || pl.models.chat;
  if(pl.provider === 'openrouter' && kind !== 'embed') return requested.toLowerCase().replace(/^meta\//,'meta-llama/');
  if(NVIDIA_NAME.test(requested)){
    if(kind === 'chat' && /70b|405b|large|super|ultra/i.test(requested)) return pl.models.strong || pl.models.chat;
    return pl.models[kind] || pl.models.chat;
  }
  return requested;
}
/* Body adjustments for a provider other than NVIDIA: NVIDIA's embedding
   models take an input_type the others reject. */
function adapt(path, body, pl){
  const b = Object.assign({}, body);
  const kind = path === 'embeddings' ? 'embed'
    : JSON.stringify(b.messages||[]).includes('"image_url"') ? 'vision' : 'chat';
  const want = b.model;
  b.model = mapModel(want, kind, pl);
  if(pl.provider !== 'nvidia' && path === 'embeddings'){ delete b.input_type; delete b.truncate; }
  return { body:b, swapped: want && b.model !== want ? want + ' → ' + b.model : '' };
}

function headers(pl){
  const hd = { 'content-type':'application/json' };
  if(pl.key) hd.authorization = 'Bearer ' + pl.key;
  if(pl.mode === 'site'){ hd['x-aifz'] = '1'; hd['x-llm-base'] = pl.base; }
  return hd;
}
function urlFor(pl, path){ return pl.mode === 'site' ? pl.relay + '?path=' + encodeURIComponent(path) : pl.base + '/' + path; }

/* Plain-language reasons for the errors people actually hit. */
function explain(status, body, pl){
  const m = body && (body.message || (body.error && (body.error.message || body.error))) || '';
  const msg = typeof m === 'string' ? m : JSON.stringify(m);
  if(status === 0) return pl.mode === 'direct'
    ? 'The browser could not reach ' + pl.name + ' directly. It may not accept calls from a web page; the main site’s relay avoids this.'
    : 'The request did not reach this site’s relay. Check your connection.';
  if(status === 401 || status === 403) return 'The provider refused the key (' + status + '). Check it on the Connect page.' + (msg ? ' — ' + msg : '');
  if(status === 404) return 'Not found (404): usually a model name the provider does not have.' + (msg ? ' — ' + msg : '');
  if(status === 429) return 'Too many requests (429). Wait a few seconds and run it again, or add time.sleep(2) inside a loop.';
  if(status === 504) return 'The provider took too long to answer.';
  return 'Error ' + status + (msg ? ': ' + msg : '');
}

/* One request from the page (the playground and the Connect page use this;
   the notebook makes the same request from its worker, synchronously). */
async function request(path, body, method){
  const pl = await plan();
  if(!pl.ready) return { ok:false, status:0, error:pl.why, plan:pl };
  const a = body ? adapt(path, body, pl) : { body:null, swapped:'' };
  const t0 = performance.now();
  let res, json = null;
  try{
    res = await fetch(urlFor(pl, path), { method:method || (body ? 'POST' : 'GET'), headers:headers(pl),
      body:a.body ? JSON.stringify(a.body) : undefined, credentials:'same-origin' });
    try{ json = await res.json(); }catch(e){}
  }catch(e){ return { ok:false, status:0, error:explain(0, null, pl), plan:pl }; }
  const ms = Math.round(performance.now() - t0);
  if(!res.ok) return { ok:false, status:res.status, error:explain(res.status, json, pl), json, ms, plan:pl };
  return { ok:true, status:res.status, json, ms, swapped:a.swapped, plan:pl };
}

/* The notebook's worker makes the same request without this page, so it gets
   the same functions as source rather than a second copy to keep in step. */
function _workerSource(){
  return 'const NVIDIA_NAME='+NVIDIA_NAME.toString()+';\n'+
    [mapModel, adapt, headers, urlFor, explain].map(f=>f.toString()).join('\n');
}

return { PROVIDERS, settings, set, forget, plan, request, mapModel, adapt, explain, headers, urlFor, relayInfo, onChange, _workerSource };
})();
