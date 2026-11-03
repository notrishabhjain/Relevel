/* Python, inside the page.

   The course's hands-on code used to run in a Google Colab notebook, in
   another tab, with the key in Colab's secrets panel. Every code block in a
   chapter now has a Run button and runs here, in the browser, in Pyodide (the
   real Python interpreter compiled to WebAssembly). Nothing is installed.

   What makes the course's code run unchanged:
   - `from openai import OpenAI` is a small stand-in with the same calls the
     course uses (chat.completions.create, embeddings.create, models.list),
     sending each request through the connection on the Connect page;
   - `from google.colab import userdata` hands back that connection's key, so
     the Colab-style warm-up cell still works;
   - `!pip install …` lines install pure-Python packages from PyPI, or say why
     they cannot (anything that needs PyTorch, for one);
   - numpy and the other common libraries load the first time a cell imports them.

   One Python session serves the whole course, like one long notebook: the
   `embed` you write in Chapter 5 is there in Chapter 7. A reload ends the
   session; the page remembers every cell you ran, and Restore puts the
   definitions back without calling the model again.

   Files you add (your documents, a scanned page) live in a folder that stays
   in this browser between visits, at /home/pyodide/files, which is where the
   code starts, so open("policy.txt") just works.                           */
window.PY = (function(){
const h=(t,a,c)=>{const e=document.createElement(t);
  if(a)for(const k in a){if(k==='html')e.innerHTML=a[k];else if(k==='text')e.textContent=a[k];
    else if(k.startsWith('on'))e.addEventListener(k.slice(2),a[k]);else if(a[k]!=null&&a[k]!==false)e.setAttribute(k,a[k]);}
  if(c)(Array.isArray(c)?c:[c]).forEach(x=>{if(x)e.appendChild(typeof x==='string'?document.createTextNode(x):x);});
  return e;};
const T=s=>window.T?window.T(s):s;
const VERSION='0.27.7';
const CDN='https://cdn.jsdelivr.net/pyodide/v'+VERSION+'/full/';
function indexURL(){
  let u=window.PYODIDE_URL; try{ u=u||localStorage.getItem('aifz.pyodideUrl'); }catch(e){}
  return new URL(u||CDN, location.href).href;
}
const store=()=>window.STORE;
const S=()=>{ const s=store().S; s.py=s.py||{}; s.py.edits=s.py.edits||{}; s.py.ran=s.py.ran||{}; s.py.scratch=s.py.scratch||{}; return s.py; };

/* ---------- which code blocks are Python ----------

   A chapter's code blocks are not all Python: Track A shows templates and
   formulas in the same monospace ("RICE score = (Reach × Impact …)"). Only
   Python gets a Run button. */
const PYHINT=/(^|\n)[ \t]*(import [\w.]+|from [\w.]+ import |def \w+\(|class \w+|for .+ in .+:|while .+:|if .+:|try:|print\(|![ \t]*pip )|\b\w+\.(chat|embeddings|choices|usage|append|items|format|split|lower|strip)\b|(^|\n)[ \t]*[A-Za-z_]\w*\s*=\s*([\[{("'\d]|[A-Za-z_][\w.]*\(|"""|f")/;
const NOTPY=/[×÷→├└│]|\[(situation|User|role|target customer|motivation|job)\]|^(RICE|Objective|Outcome|Reach|As a|When I|One help)/m;
function isPython(src){ return PYHINT.test(src||'') && !NOTPY.test(src||''); }

/* ---------- the worker ----------

   Python runs in a worker so a long cell never freezes the page, and so a
   request to the model can be made synchronously, which is what the course's
   code expects (a worker may block; a page may not). */
function WORKER(){
  /* replaced by the build of the source string: INDEX, LLMSRC */
  let py=null, booting=null, files='/home/pyodide/files', cur=0;
  const post=(id,o,tr)=>self.postMessage(Object.assign({id},o),tr||[]);
  self.PLAN='{}';
  self.portal_plan=()=>self.PLAN;
  /* One model request, made synchronously. Returns JSON text: {status, text, ms, swapped}. */
  self.portal_llm=(path, bodyJson)=>{
    const pl=JSON.parse(self.PLAN||'{}');
    if(!pl.ready) return JSON.stringify({status:-1, text:JSON.stringify({message:pl.why||'Not connected. Open the Connect page.'})});
    let body=bodyJson?JSON.parse(bodyJson):null, swapped='';
    if(body){ const a=adapt(path, body, pl); body=a.body; swapped=a.swapped; }
    const x=new XMLHttpRequest();
    const t0=Date.now();
    try{
      x.open(body?'POST':'GET', urlFor(pl, path), false);
      const hd=headers(pl); for(const k in hd) x.setRequestHeader(k, hd[k]);
      x.send(body?JSON.stringify(body):null);
    }catch(e){ return JSON.stringify({status:0, text:'', ms:Date.now()-t0, error:explain(0,null,pl)}); }
    let j=null; try{ j=JSON.parse(x.responseText); }catch(e){}
    return JSON.stringify({status:x.status, text:x.responseText, ms:Date.now()-t0, swapped,
      error: x.status>=200&&x.status<300 ? '' : explain(x.status, j, pl)});
  };
  /* Any other web request from Python (the requests stand-in): {status, text, headers}. */
  self.portal_http=(method, url, headersJson, body)=>{
    const x=new XMLHttpRequest();
    try{
      x.open(method, url, false);
      const hd=JSON.parse(headersJson||'{}'); for(const k in hd) x.setRequestHeader(k, hd[k]);
      x.send(body==null?null:body);
    }catch(e){ return JSON.stringify({status:0, text:'', headers:{}, error:String(e&&e.message||e)}); }
    const headers={}; (x.getAllResponseHeaders()||'').trim().split(/\r?\n/).forEach(l=>{ const i=l.indexOf(':'); if(i>0) headers[l.slice(0,i).trim().toLowerCase()]=l.slice(i+1).trim(); });
    return JSON.stringify({status:x.status, text:x.responseText, headers});
  };
  async function boot(){
    if(py) return py;
    if(booting) return booting;
    booting=(async()=>{
      post(0,{kind:'status',text:'Starting Python (about 10 MB, downloaded once)…'});
      importScripts(INDEX+'pyodide.js');
      py=await loadPyodide({indexURL:INDEX});
      py.setStdout({batched:s=>post(cur,{kind:'out',stream:'stdout',text:s+'\n'})});
      /* A line the stand-ins print to explain themselves starts with \x01 and
         is shown as a note, not in error red. */
      py.setStderr({batched:s=>post(cur,{kind:'out',stream:s.charCodeAt(0)===1?'note':'stderr',text:(s.charCodeAt(0)===1?s.slice(1):s)+'\n'})});
      try{ py.setStdin({stdin:()=>{ throw new Error('input() cannot ask a question inside this page. Put the value in a variable instead.'); }}); }catch(e){}
      try{
        py.FS.mkdirTree(files);
        py.FS.mount(py.FS.filesystems.IDBFS,{},files);
        await new Promise(r=>py.FS.syncfs(true,()=>r()));
      }catch(e){ /* storage blocked: files last for this visit only */ }
      /* The stand-ins live in a module of their own, so your namespace starts clean. */
      py.globals.set('_portal_src',BOOT);
      py.runPython("import sys, types\n_pm = types.ModuleType('_portal'); sys.modules['_portal'] = _pm\nexec(_portal_src, _pm.__dict__)\ndel _pm, _portal_src, sys, types");
      self.PORTAL=py.pyimport('_portal');
      post(0,{kind:'status',text:'Python ready'});
      return py;
    })();
    return booting;
  }
  const sync=()=>new Promise(r=>{ try{ py.FS.syncfs(false,()=>r()); }catch(e){ r(); } });
  /* Lines a notebook treats as commands rather than Python. */
  async function shell(code, id){
    const out=[];
    for(const line of code.split('\n')){
      const m=line.match(/^\s*[!%]\s*(.*)$/);
      if(!m){ out.push(line); continue; }
      out.push('');
      const cmd=m[1].trim();
      const pip=cmd.match(/^pip3?\s+(?:-\S+\s+)*install\s+(.*)$/);
      if(!pip){ post(id,{kind:'out',stream:'stderr',text:'Skipped “'+line.trim()+'”: shell commands do not run inside this page.\n'}); continue; }
      const pk=pip[1].split(/\s+/).filter(x=>x&&!x.startsWith('-'));
      for(const p of pk){
        if(/^openai\b/.test(p)){ post(id,{kind:'out',stream:'stdout',text:'openai: built into this page, nothing to install.\n'}); continue; }
        try{
          await py.loadPackage('micropip');
          const mp=py.pyimport('micropip');
          await mp.install(p);
          post(id,{kind:'out',stream:'stdout',text:'Installed '+p+'.\n'});
        }catch(e){
          post(id,{kind:'out',stream:'stderr',text:'Could not install '+p+' in the browser. '+
            (/torch|transformers|bertviz|tensorflow|sentence.transformers/i.test(p)
              ? 'It needs PyTorch, which cannot run inside a web page.'
              : 'Only pure-Python packages, and the libraries Pyodide ships, install here.')+'\n'});
        }
      }
    }
    return out.join('\n');
  }
  function tidy(msg){
    /* Keep the part of the traceback that is about your code. */
    const lines=String(msg).split('\n');
    const i=lines.findIndex(l=>/File "<exec>"/.test(l));
    const own=i>0?lines.slice(i):lines;
    /* and drop the frames inside this page's own stand-ins ("<string>") */
    const kept=[];
    for(let k=0;k<own.length;k++){
      if(/^\s*File "<string>"/.test(own[k])){ if(own[k+1]&&/^\s{4,}\S/.test(own[k+1])&&!/^\s*File /.test(own[k+1])) k++; continue; }
      kept.push(own[k]);
    }
    return (i>0?['Traceback (most recent call last):'].concat(kept):kept).join('\n').trim();
  }
  async function run(id, m){
    cur=id;
    await boot();
    self.PLAN=JSON.stringify(m.plan||{});
    /* your Sheets, as CSV files the code can open: sheets/<name>.csv */
    if(m.sheets&&m.sheets.length){ try{ py.FS.mkdirTree(files+'/sheets'); m.sheets.forEach(f=>py.FS.writeFile(files+'/sheets/'+f.name,f.csv)); }catch(e){} }
    let code=await shell(m.code, id);
    try{ await py.loadPackagesFromImports(code.replace(/^\s*(import|from)\s+(requests|openai|google)\b.*$/gm,''),{messageCallback:()=>{},errorCallback:()=>{}}); }catch(e){}
    let value='';
    try{
      const r=await py.runPythonAsync(code,{filename:'<exec>'});
      if(r!==undefined && r!==null){
        if(r && typeof r==='object' && typeof r.destroy==='function'){ value=self.PORTAL.repr_of(r); r.destroy(); }
        else value=typeof r==='string'?JSON.stringify(r):String(r);
      }
      await sync();
      post(id,{kind:'done',ok:true,value});
    }catch(e){
      await sync();
      const msg=tidy(e&&e.message||e);
      const last=msg.split('\n').filter(l=>l.trim()).pop()||'';
      const ename=((last.match(/^([\w.]+)(?::|$)/)||[])[1]||'').split('.').pop();
      post(id,{kind:'done',ok:false,error:msg,ename});
    }
  }
  self.onmessage=async e=>{
    const m=e.data, id=m.id;
    try{
      if(m.op==='boot'){ await boot(); post(id,{kind:'done',ok:true}); }
      else if(m.op==='run') await run(id,m);
      else if(m.op==='defs'){ await boot(); const s=self.PORTAL._portal_defs(m.code); post(id,{kind:'done',ok:true,value:s}); }
      else if(m.op==='ls'){ await boot();
        const names=py.FS.readdir(files).filter(n=>n!=='.'&&n!=='..').map(n=>{
          const st=py.FS.stat(files+'/'+n); return {name:n,size:st.size,dir:py.FS.isDir(st.mode)}; });
        post(id,{kind:'done',ok:true,files:names}); }
      else if(m.op==='write'){ await boot(); py.FS.writeFile(files+'/'+m.name,new Uint8Array(m.data)); await sync(); post(id,{kind:'done',ok:true}); }
      else if(m.op==='read'){ await boot(); const d=py.FS.readFile(files+'/'+m.name); post(id,{kind:'done',ok:true,data:d.buffer},[d.buffer]); }
      else if(m.op==='rm'){ await boot(); py.FS.unlink(files+'/'+m.name); await sync(); post(id,{kind:'done',ok:true}); }
      else if(m.op==='vars'){ await boot(); post(id,{kind:'done',ok:true,value:self.PORTAL._portal_vars()}); }
    }catch(err){ post(id,{kind:'done',ok:false,error:String(err&&err.message||err)}); }
  };
}

/* Python run once at start: the stand-in modules and the restore helper. */
const BOOT=String.raw`
import sys, types, json, ast, time, os

# ---------- openai: the calls the course uses, through the page's connection ----------
openai = types.ModuleType("openai")
class OpenAIError(Exception): pass
class APIError(OpenAIError):
    def __init__(self, message, status_code=None, body=None):
        super().__init__(message); self.message = message; self.status_code = status_code; self.body = body
class APIStatusError(APIError): pass
class BadRequestError(APIStatusError): pass
class AuthenticationError(APIStatusError): pass
class PermissionDeniedError(APIStatusError): pass
class NotFoundError(APIStatusError): pass
class UnprocessableEntityError(APIStatusError): pass
class RateLimitError(APIStatusError): pass
class InternalServerError(APIStatusError): pass
class APIConnectionError(APIError): pass
class APITimeoutError(APIConnectionError): pass
_BY_STATUS = {400: BadRequestError, 401: AuthenticationError, 403: PermissionDeniedError,
              404: NotFoundError, 422: UnprocessableEntityError, 429: RateLimitError}
_OPTIONAL = {"tool_calls", "refusal", "function_call", "audio", "reasoning_content", "reasoning",
             "logprobs", "finish_reason", "system_fingerprint", "name", "content", "annotations"}

class _Obj:
    """A response you can read like the real SDK's: response.choices[0].message.content"""
    def __init__(self, d): object.__setattr__(self, "_d", d)
    def __getattr__(self, k):
        d = object.__getattribute__(self, "_d")
        if k in d: return _wrap(d[k])
        if k in _OPTIONAL: return None
        raise AttributeError(f"'{type(self).__name__}' has no field '{k}'. It has: {', '.join(d)}")
    def __getitem__(self, k): return _wrap(object.__getattribute__(self, "_d")[k])
    def __contains__(self, k): return k in object.__getattribute__(self, "_d")
    def get(self, k, default=None): return _wrap(object.__getattribute__(self, "_d").get(k, default))
    def model_dump(self, **kw): return object.__getattribute__(self, "_d")
    to_dict = model_dump
    def model_dump_json(self, indent=None, **kw): return json.dumps(self.model_dump(), indent=indent, ensure_ascii=False)
    def to_json(self, indent=2): return self.model_dump_json(indent=indent)
    def __repr__(self): return json.dumps(object.__getattribute__(self, "_d"), indent=2, ensure_ascii=False)
def _wrap(v):
    if isinstance(v, dict): return _Obj(v)
    if isinstance(v, list): return [_wrap(x) for x in v]
    return v

_told = set()
def _note(msg):
    if msg in _told: return
    _told.add(msg); print("\x01[" + msg + "]", file=sys.stderr)

def _call(client, path, body):
    from js import portal_llm
    if client._base and client._base.rstrip("/") != json.loads(portal_plan()).get("base", "").rstrip("/"):
        pl = json.loads(portal_plan())
        _note("this page sends requests through your Connect settings (" + pl.get("name", "?") + "), not to " + client._base)
    r = json.loads(portal_llm(path, json.dumps(body) if body is not None else None))
    st = r.get("status", 0)
    if r.get("swapped"): _note("model " + r["swapped"] + ", to match your provider")
    if st == -1:
        raise AuthenticationError(json.loads(r.get("text") or "{}").get("message", "Not connected."), status_code=None)
    if st == 0:
        raise APIConnectionError(r.get("error") or "Connection error.")
    try: data = json.loads(r.get("text") or "null")
    except Exception: data = None
    if st < 200 or st >= 300:
        cls = _BY_STATUS.get(st, InternalServerError if st >= 500 else APIStatusError)
        raise cls(f"Error code: {st} - " + (r.get("error") or str(data)), status_code=st, body=data)
    return data

class _Stream:
    def __init__(self, d):
        self._d = d
        _note("streaming arrives all at once in this page's notebook; the Playground shows it word by word")
    def __iter__(self):
        c = self._d["choices"][0]
        text = (c.get("message") or {}).get("content") or ""
        parts = [text[i:i + 24] for i in range(0, len(text), 24)] or [""]
        for i, p in enumerate(parts):
            yield _Obj({"id": self._d.get("id"), "object": "chat.completion.chunk", "model": self._d.get("model"),
                        "choices": [{"index": 0, "delta": {"role": "assistant", "content": p},
                                     "finish_reason": c.get("finish_reason") if i == len(parts) - 1 else None}]})

class _Completions:
    def __init__(self, c): self._c = c
    def create(self, model=None, messages=None, stream=False, extra_body=None, extra_headers=None, timeout=None, **kw):
        body = {k: v for k, v in kw.items() if v is not None}
        body["model"] = model; body["messages"] = messages
        if extra_body: body.update(extra_body)
        d = _call(self._c, "chat/completions", body)
        return _Stream(d) if stream else _Obj(d)
class _Chat:
    def __init__(self, c): self.completions = _Completions(c)
class _Embeddings:
    def __init__(self, c): self._c = c
    def create(self, model=None, input=None, extra_body=None, extra_headers=None, timeout=None, **kw):
        body = {k: v for k, v in kw.items() if v is not None}
        body["model"] = model; body["input"] = input
        if extra_body: body.update(extra_body)
        return _Obj(_call(self._c, "embeddings", body))
class _Models:
    def __init__(self, c): self._c = c
    def list(self):
        d = _call(self._c, "models", None)
        return _wrap(d.get("data", []) if isinstance(d, dict) else d)

class OpenAI:
    def __init__(self, api_key=None, base_url=None, organization=None, timeout=None, max_retries=2, **kw):
        self.api_key = api_key; self._base = base_url or ""
        self.chat = _Chat(self); self.embeddings = _Embeddings(self); self.models = _Models(self)
    @property
    def base_url(self): return self._base or json.loads(portal_plan()).get("base", "")

for _n, _v in list(globals().items()):
    if isinstance(_v, type) and issubclass(_v, Exception) and _n[0] != "_":
        _v.__module__ = "openai"; setattr(openai, _n, _v)
for _c in (OpenAI, _Obj): _c.__module__ = "openai"
openai.OpenAI = OpenAI
openai.Client = OpenAI
sys.modules["openai"] = openai
from js import portal_plan

# ---------- google.colab: the Colab warm-up cell works here too ----------
google = sys.modules.get("google") or types.ModuleType("google")
google.__path__ = []
colab = types.ModuleType("google.colab"); colab.__path__ = []
userdata = types.ModuleType("google.colab.userdata")
class SecretNotFoundError(KeyError): pass
SecretNotFoundError.__module__ = "google.colab.userdata"
def _get(name):
    pl = json.loads(portal_plan())
    if name.upper().endswith(("API_KEY", "_KEY", "TOKEN")):
        if pl.get("key"): return pl["key"]
        if pl.get("siteKey"): return "site-key (held by the site, never shown)"
        raise SecretNotFoundError("No key yet. Add one on the Connect page (Setup in the menu).")
    raise SecretNotFoundError(name)
userdata.get = _get
userdata.SecretNotFoundError = SecretNotFoundError
files_mod = types.ModuleType("google.colab.files")
def _upload(*a, **k):
    print("Use the Files panel above the notebook to add files. They appear in", os.getcwd())
    return {}
def _download(name):
    print("Use the Files panel above the notebook to download", name)
files_mod.upload = _upload; files_mod.download = _download
drive = types.ModuleType("google.colab.drive")
drive.mount = lambda *a, **k: print("No Google Drive here: add your documents with the Files panel. Open them by name, e.g. open('policy.txt').")
colab.userdata = userdata; colab.files = files_mod; colab.drive = drive
google.colab = colab
for _k, _m in {"google": google, "google.colab": colab, "google.colab.userdata": userdata,
               "google.colab.files": files_mod, "google.colab.drive": drive}.items():
    sys.modules[_k] = _m

# ---------- requests: the common calls, made by the browser ----------
import json as _json
from urllib.parse import urlencode as _urlencode
requests = types.ModuleType("requests")
class RequestException(Exception): pass
class HTTPError(RequestException):
    def __init__(self, msg, response=None): super().__init__(msg); self.response = response
class ConnectionError(RequestException): pass
class Timeout(RequestException): pass
class Response:
    def __init__(self, status, text, headers, url):
        self.status_code = status; self.text = text; self.headers = headers; self.url = url
        self.ok = 200 <= status < 400; self.reason = ""
    @property
    def content(self): return self.text.encode("utf-8")
    def json(self, **kw): return _json.loads(self.text)
    def raise_for_status(self):
        if self.status_code >= 400: raise HTTPError(f"{self.status_code} Error for url: {self.url}", response=self)
    def __repr__(self): return f"<Response [{self.status_code}]>"
def request(method, url, params=None, data=None, json=None, headers=None, timeout=None, **kw):
    from js import portal_http
    if params: url += ("&" if "?" in url else "?") + _urlencode(params, doseq=True)
    hd = dict(headers or {}); body = None
    if json is not None:
        body = _json.dumps(json); hd.setdefault("Content-Type", "application/json")
    elif data is not None:
        if isinstance(data, (dict, list)):
            body = _urlencode(data); hd.setdefault("Content-Type", "application/x-www-form-urlencoded")
        else: body = data.decode() if isinstance(data, bytes) else str(data)
    r = _json.loads(portal_http(method.upper(), url, _json.dumps(hd), body))
    if r["status"] == 0:
        raise ConnectionError("Could not reach " + url + ". A request from a web page only works if the site allows it "
                              "(CORS). Many public APIs do; some do not.")
    return Response(r["status"], r["text"], r["headers"], url)
for _m in ("get", "post", "put", "patch", "delete", "head", "options"):
    setattr(requests, _m, (lambda m: lambda url, **kw: request(m, url, **kw))(_m))
requests.request = request; requests.Response = Response
requests.RequestException = RequestException; requests.HTTPError = HTTPError
requests.ConnectionError = ConnectionError; requests.Timeout = Timeout
requests.exceptions = types.SimpleNamespace(RequestException=RequestException, HTTPError=HTTPError,
                                            ConnectionError=ConnectionError, Timeout=Timeout)
for _c in (RequestException, HTTPError, ConnectionError, Timeout, Response): _c.__module__ = "requests"
sys.modules["requests"] = requests

# ---------- time.sleep: wait for real (rate limits rely on it) ----------
_t = time.time(); time.sleep(0.02)
if time.time() - _t < 0.015:
    def _sleep(s):
        end = time.time() + float(s)
        while time.time() < end: pass
    time.sleep = _sleep

# ---------- restore: put definitions back without calling the model ----------
_SAFE = {"list", "dict", "set", "tuple", "range", "len", "sorted", "str", "int", "float", "bool", "zip",
         "enumerate", "frozenset", "Counter", "defaultdict", "OrderedDict", "OpenAI", "userdata.get",
         "re.compile", "json.loads", "json.dumps", "dedent", "textwrap.dedent", "open", "Path"}
def _name(f):
    if isinstance(f, ast.Name): return f.id
    if isinstance(f, ast.Attribute):
        b = _name(f.value); return (b + "." if b else "") + f.attr
    return ""
def _portal_defs(src):
    try: tree = ast.parse(src)
    except SyntaxError: return ""
    keep = []
    for node in tree.body:
        if isinstance(node, (ast.Import, ast.ImportFrom, ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            keep.append(node); continue
        if isinstance(node, (ast.Assign, ast.AnnAssign)) and getattr(node, "value", None) is not None:
            calls = [n for n in ast.walk(node.value) if isinstance(n, ast.Call)]
            if all(_name(c.func) in _SAFE or _name(c.func).endswith((".read", ".strip", ".split", ".splitlines", ".format", ".lower")) for c in calls):
                keep.append(node)
    return ast.unparse(ast.Module(body=keep, type_ignores=[])) if keep else ""
def repr_of(v): return repr(v)
def _portal_vars():
    import __main__
    out = []
    for k, v in vars(__main__).items():
        if k.startswith("_") or isinstance(v, types.ModuleType) or k in ("In", "Out", "exit", "quit", "openai", "google", "colab", "userdata", "drive", "files_mod", "SecretNotFoundError", "OpenAI") or (isinstance(v, type) and issubclass(v, Exception)):
            continue
        out.append(k)
    return ", ".join(sorted(out))
if os.path.isdir("/home/pyodide/files"): os.chdir("/home/pyodide/files")
`;

/* The warm-up cell the setup page used to have you paste at the top of every
   notebook. It runs by itself before your first cell, and says so. */
const PRELUDE='from google.colab import userdata\nkey = userdata.get("NVIDIA_API_KEY")\nfrom openai import OpenAI\nclient = OpenAI(base_url="https://integrate.api.nvidia.com/v1", api_key=key)';
/* The same, but a missing key does not stop it: the first call says what to do instead. */
const WARMUP=PRELUDE.replace('key = userdata.get("NVIDIA_API_KEY")','try:\n    key = userdata.get("NVIDIA_API_KEY")\nexcept Exception:\n    key = None');

/* ---------- kernel: one worker, one Python session ---------- */
let worker=null, seq=0, warmed=false, status='off', statusText='';
const waiting={}, statusListeners=new Set();
function setStatus(s,t){ status=s; statusText=t||''; statusListeners.forEach(f=>{try{f(s,t);}catch(e){}}); }
function source(){
  const llm=window.LLM&&window.LLM._workerSource?window.LLM._workerSource():'';
  return 'const INDEX='+JSON.stringify(indexURL())+';\nconst BOOT='+JSON.stringify(BOOT)+';\n'+llm+'\n('+WORKER.toString()+')();';
}
function ensure(){
  if(worker) return worker;
  worker=new Worker(URL.createObjectURL(new Blob([source()],{type:'text/javascript'})));
  worker.onmessage=e=>{
    const m=e.data;
    if(m.kind==='status'){ setStatus(/ready/i.test(m.text)?'ready':'starting', m.text); return; }
    const w=waiting[m.id]; if(!w) return;
    if(m.kind==='out') w.out&&w.out(m.stream,m.text);
    else if(m.kind==='done'){ delete waiting[m.id]; w.resolve(m); }
  };
  worker.onerror=e=>{
    setStatus('error','Python could not start: '+(e.message||'the download was blocked or failed')+'.');
    Object.keys(waiting).forEach(k=>{ waiting[k].resolve({ok:false,error:statusText,ename:'StartError'}); delete waiting[k]; });
    worker=null; warmed=false;
  };
  setStatus('starting','Starting Python…');
  return worker;
}
function ask(op, extra, out, transfer){
  ensure();
  const id=++seq;
  return new Promise(resolve=>{ waiting[id]={resolve,out}; worker.postMessage(Object.assign({id,op},extra),transfer||[]); });
}
function restart(){
  if(worker){ worker.terminate(); worker=null; }
  Object.keys(waiting).forEach(k=>{ waiting[k].resolve({ok:false,error:'Stopped.',ename:'Stopped'}); delete waiting[k]; });
  warmed=false; setStatus('off','Stopped. Your cells are kept; Restore brings the definitions back.');
}
async function plan(){ return window.LLM ? await window.LLM.plan() : {ready:false,why:'No connection module.'}; }

/* Run code. `out(stream,text)` receives output as it arrives. */
async function run(code, out){
  const pl=await plan();
  if(!warmed){
    const r=await ask('run',{code:WARMUP,plan:pl},()=>{});
    warmed=r.ok;
    if(r.ok) out&&out('note','Python ready · '+(pl.ready?'connected to '+pl.name+(pl.mode==='site'?' through this site':' directly'):'not connected to a model yet (Connect page)')+'\n');
  }
  const sheets=window.SHEETS?window.SHEETS.files():[];
  return ask('run',{code,plan:pl,sheets},out);
}

/* ---------- remembering what you ran ---------- */
function order(ch,i){
  const ids=(window.CHAPTERS||[]).map(c=>c.id);
  const n=ids.indexOf(ch); return (n<0?9999:n)*1000+(i||0);
}
/* Every version of a cell that ran without an error, once each, newest last:
   replaying them in the order they ran rebuilds the session most faithfully,
   even when one cell was reused for many things. */
const hsh=s=>{ let x=5381; for(let i=0;i<s.length;i++) x=((x<<5)+x+s.charCodeAt(i))|0; return (x>>>0).toString(36); };
function remember(key,src,ch,i){
  const ran=S().ran;
  ran[key+'#'+hsh(src)]={key,src,ch,o:order(ch,i),at:Date.now()};
  const all=Object.keys(ran);
  if(all.length>300) all.sort((a,b)=>ran[a].at-ran[b].at).slice(0,all.length-300).forEach(k=>delete ran[k]);
  store().save();
}
function ranHistory(){ return Object.values(S().ran).filter(v=>v&&v.src).sort((a,b)=>a.at-b.at); }
/* The latest version of each cell, in course order: for the export. */
function ranList(){
  const latest={};
  ranHistory().forEach(v=>{ latest[v.key||v.src]=v; });
  return Object.values(latest).sort((a,b)=>a.o-b.o||a.at-b.at);
}

async function restore(mode, out){
  const list=mode==='defs'?ranHistory():ranList();
  if(!list.length){ out&&out('note','Nothing to restore yet: run a cell first.\n'); return {ok:true}; }
  let n=0, skipped=0;
  for(const c of list){
    let code=c.src;
    if(mode==='defs'){ const d=await ask('defs',{code:c.src.split('\n').filter(l=>!/^\s*[!%]/.test(l)).join('\n')}); code=d.ok?d.value:''; if(!code){ skipped++; continue; } }
    const r=await run(code,(s,t)=>{ if(mode!=='defs'&&out) out(s,t); });
    if(!r.ok){ out&&out('stderr','Stopped at a cell from '+c.ch+': '+String(r.error).split('\n').pop()+'\n'); return r; }
    n++;
  }
  const v=await ask('vars',{});
  out&&out('note',(mode==='defs'?'Restored definitions from '+n+' cell'+(n===1?'':'s')+' without calling the model':'Re-ran '+n+' cell'+(n===1?'':'s'))+'.'+(v.ok&&v.value?' Defined now: '+v.value+'.':'')+'\n');
  return {ok:true};
}

/* ---------- a code cell ---------- */
const BLANK=/…|\[paste|<your |YOUR_|# *\.\.\./;
function hintFor(r){
  const e=r.ename||'';
  if(e==='NameError') return 'A name this cell uses has not been defined in this session. Run the cells above it first, or press Restore if you ran them before a reload.';
  if(e==='AuthenticationError') return 'The model is not connected, or refused the key. Open the Connect page.';
  if(e==='APIConnectionError') return 'The request did not get through. The Connect page has a Test button.';
  if(e==='NotFoundError') return 'Usually a model name your provider does not have. The Connect page lists the models it uses.';
  if(e==='RateLimitError') return 'Too many requests at once. Wait a few seconds, or add time.sleep(2) inside the loop.';
  if(e==='ModuleNotFoundError') return 'That library is not in the browser. numpy, pandas, scikit-learn, regex and other common ones load by themselves; pure-Python packages install with !pip install name.';
  if(e==='SyntaxError'||e==='IndentationError') return 'Python could not read the code. Look for a missing bracket or quote, or text that still needs filling in.';
  if(e==='StartError') return 'Python is downloaded from cdn.jsdelivr.net the first time. If your network blocks it, the cells cannot run.';
  return '';
}
function autosize(ta){ ta.style.height='auto'; ta.style.height=Math.min(ta.scrollHeight+2,900)+'px'; }

/* opts: {key, ch, i, label, onRun, scratch, onDelete} */
function cell(src, opts){
  opts=opts||{};
  const key=opts.key||('free:'+(++seq));
  const orig=src;
  const ta=h('textarea',{class:'pycode mono',spellcheck:'false',autocapitalize:'off',autocomplete:'off','aria-label':T('Python code')});
  ta.value=S().edits[key]!=null?S().edits[key]:src;
  const out=h('pre',{class:'pyout',hidden:true,'aria-live':'polite'});
  const stat=h('span',{class:'pystat'});
  const runBtn=h('button',{class:'primary sm pyrun',type:'button',title:'Shift+Enter'},'▶ '+T('Run'));
  const resetBtn=opts.scratch?null:h('button',{class:'sm',type:'button',title:T('Put back the code from the chapter')},T('Undo edits'));
  const delBtn=opts.onDelete?h('button',{class:'sm',type:'button',title:T('Delete this cell')},'✕'):null;
  const blank=BLANK.test(ta.value)?h('span',{class:'pyblank',text:T('fill in the … first')}):null;
  const write=(stream,text)=>{
    out.hidden=false;
    const s=h('span',{class:'py-'+stream}); s.textContent=text; out.appendChild(s);
  };
  async function go(){
    if(runBtn.disabled) return;
    runBtn.disabled=true; out.innerHTML=''; out.hidden=true;
    const t0=performance.now();
    stat.textContent=T('running…'); stat.className='pystat busy';
    const code=ta.value;
    const r=await run(code,write);
    const secs=((performance.now()-t0)/1000).toFixed(1);
    if(r.ok){
      if(r.value) write('value',r.value+'\n');
      remember(key,code,opts.ch||'workbench',opts.i);
      stat.textContent='✓ '+secs+' s'; stat.className='pystat ok';
      if(!out.textContent.trim()) { write('note',T('Done — this cell prints nothing.')+'\n'); }
    } else {
      write('stderr',(r.error||'Error')+'\n');
      const hint=hintFor(r); if(hint) write('hint','→ '+T(hint)+'\n');
      stat.textContent='✕ '+(r.ename||T('error')); stat.className='pystat bad';
    }
    runBtn.disabled=false;
    if(opts.onRun) opts.onRun(r);
  }
  runBtn.addEventListener('click',go);
  if(resetBtn) resetBtn.addEventListener('click',()=>{ ta.value=orig; delete S().edits[key]; store().save(); autosize(ta); });
  if(delBtn) delBtn.addEventListener('click',()=>opts.onDelete());
  ta.addEventListener('input',()=>{
    if(opts.scratch&&opts.onEdit) opts.onEdit(ta.value);
    else { if(ta.value===orig) delete S().edits[key]; else S().edits[key]=ta.value; store().save(); }
    autosize(ta);
  });
  ta.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&(e.shiftKey||e.ctrlKey||e.metaKey)){ e.preventDefault(); go(); }
    else if(e.key==='Tab'&&!e.shiftKey){ e.preventDefault();
      const a=ta.selectionStart,b=ta.selectionEnd; ta.setRangeText('    ',a,b,'end'); ta.dispatchEvent(new Event('input')); }
  });
  const wrap=h('div',{class:'pycell',id:'cell-'+key.replace(/[^\w-]/g,'_')},[
    h('div',{class:'pyhead'},[h('span',{class:'pytag',text:opts.label||'Python'}),blank,stat,h('span',{class:'pygrow'}),delBtn,resetBtn,runBtn]),
    ta,out]);
  requestAnimationFrame(()=>autosize(ta));
  setTimeout(()=>autosize(ta),50);
  wrap.run=go;
  return wrap;
}

/* ---------- the bar above a chapter's first cell ---------- */
function bar(opts){
  opts=opts||{};
  const st=h('span',{class:'pkstat'});
  const conn=h('a',{class:'pkconn',href:'#/setup'});
  const log=h('pre',{class:'pyout pklog',hidden:true});
  const say=(s,t)=>{ log.hidden=false; const x=h('span',{class:'py-'+s}); x.textContent=t; log.appendChild(x); };
  const draw=()=>{
    st.textContent=status==='ready'?'● '+T('Python running'):status==='starting'?'◌ '+T(statusText||'Starting…'):status==='error'?'✕ '+T(statusText):'○ '+T('Python starts when you press Run');
    st.className='pkstat '+status;
  };
  const drawConn=async()=>{
    const pl=await plan();
    conn.textContent=pl.ready?'✓ '+pl.name+' · '+pl.models.chat:'⚠ '+T('No model connected — Connect');
    conn.className='pkconn '+(pl.ready?'ok':'warn');
  };
  draw(); drawConn(); statusListeners.add(draw);
  if(window.LLM) window.LLM.onChange(drawConn);
  const n=ranList().length;
  const btn=(label,title,fn)=>h('button',{class:'sm',type:'button',title},label);
  const rDefs=btn(T('Restore'),T('Put back the functions and data from every cell you have run, without calling the model'));
  const rAll=btn(T('Re-run all'),T('Run every cell you have run before, in course order. Calls the model again.'));
  const rStop=btn(T('Restart'),T('Stop Python and start a fresh session'));
  rDefs.addEventListener('click',async()=>{ log.innerHTML=''; rDefs.disabled=true; await restore('defs',say); rDefs.disabled=false; });
  rAll.addEventListener('click',async()=>{ if(!confirm(T('Run every cell you have run before, in course order? Cells that call the model will call it again.')))return;
    log.innerHTML=''; rAll.disabled=true; await restore('all',say); rAll.disabled=false; });
  rStop.addEventListener('click',()=>{ restart(); log.innerHTML=''; say('note',T('Python stopped. Press Run on any cell to start again.')+'\n'); });
  const files=opts.files?filesPanel():null;
  return h('div',{class:'pkbar'},[
    h('div',{class:'pkrow'},[h('span',{class:'pktag',text:T('Notebook')}),st,conn,h('span',{class:'pygrow'}),
      n?h('span',{class:'dim pkn',text:n+' '+T(n===1?'cell run before':'cells run before')}):null,h('span',{class:'pkbtns'},[rDefs,rAll,rStop])]),
    h('p',{class:'pknote',html:opts.note||T('Every code block on this page runs here. Press <strong>Run</strong> (or Shift+Enter) on each one, top to bottom. You can edit the code first; <em>Undo edits</em> puts the chapter’s version back. One Python session runs the whole course, so what you define in one chapter is there in the next. After a reload, press <strong>Restore</strong>.')}),
    files,log]);
}

/* ---------- files: your documents, kept in this browser ---------- */
function filesPanel(){
  const list=h('ul',{class:'pyfiles'});
  const msg=h('span',{class:'dim pyfmsg'});
  const input=h('input',{type:'file',multiple:true,hidden:true});
  const fmt=n=>n<1024?n+' B':n<1048576?(n/1024).toFixed(1)+' KB':(n/1048576).toFixed(1)+' MB';
  async function draw(){
    msg.textContent=T('Loading…');
    const r=await ask('ls',{});
    msg.textContent='';
    list.innerHTML='';
    if(!r.ok){ msg.textContent=r.error; return; }
    const fs2=(r.files||[]).filter(f=>!f.dir);
    if(!fs2.length) list.appendChild(h('li',{class:'dim',text:T('No files yet. Add your documents: .txt and .md open as text; a scanned page or photo opens as bytes.')}));
    fs2.forEach(f=>{
      const dl=h('button',{class:'sm',type:'button'},T('Download'));
      const rm=h('button',{class:'sm',type:'button'},'✕');
      dl.addEventListener('click',async()=>{ const d=await ask('read',{name:f.name}); if(!d.ok)return;
        const a=h('a',{href:URL.createObjectURL(new Blob([d.data])),download:f.name}); document.body.appendChild(a); a.click(); a.remove(); });
      rm.addEventListener('click',async()=>{ if(!confirm(T('Delete')+' '+f.name+'?'))return; await ask('rm',{name:f.name}); draw(); });
      list.appendChild(h('li',{},[h('code',{text:f.name}),h('span',{class:'dim',text:fmt(f.size)}),h('span',{class:'pygrow'}),dl,rm]));
    });
  }
  input.addEventListener('change',async()=>{
    for(const f of input.files){
      if(f.size>25*1048576){ msg.textContent=f.name+': '+T('too large (25 MB at most).'); continue; }
      const buf=await f.arrayBuffer();
      const name=f.name.replace(/[^\w.\- ]+/g,'_');
      await ask('write',{name,data:buf},null,[buf]);
    }
    input.value=''; draw();
  });
  const add=h('button',{class:'sm',type:'button'},'+ '+T('Add files'));
  add.addEventListener('click',()=>input.click());
  const show=h('button',{class:'sm',type:'button'},T('Show files'));
  const body=h('div',{class:'pyfbody',hidden:true},[list]);
  show.addEventListener('click',()=>{ body.hidden=!body.hidden; show.textContent=body.hidden?T('Show files'):T('Hide files'); if(!body.hidden) draw(); });
  return h('div',{class:'pyfpanel'},[
    h('div',{class:'pkrow'},[h('span',{class:'pktag',text:T('Files')}),
      h('span',{class:'dim',html:T('Kept in this browser. Open them by name: <code>open("policy.txt").read()</code>. Your <a href="#/sheets">Sheets</a> are in <code>sheets/</code>.')}),
      h('span',{class:'pygrow'}),msg,show,add,input]),body]);
}

/* ---------- your own cells, per chapter ---------- */
function scratch(ch, opts){
  opts=opts||{};
  const box=h('div',{class:'pyscratch'});
  const list=()=>{ const s=S().scratch; s[ch]=s[ch]||['']; return s[ch]; };
  function draw(){
    box.innerHTML='';
    list().forEach((src,i)=>{
      box.appendChild(cell(src,{key:ch+':mine:'+i,ch,i:900+i,scratch:true,label:T('Your cell')+' '+(i+1),
        onEdit:v=>{ list()[i]=v; store().save(); },
        onDelete:list().length>1?()=>{ list().splice(i,1); store().save(); draw(); }:null}));
    });
    const add=h('button',{class:'sm',type:'button'},'+ '+T('Add a cell'));
    add.addEventListener('click',()=>{ list().push(''); store().save(); draw();
      const t=box.querySelectorAll('textarea'); if(t.length) t[t.length-1].focus(); });
    box.appendChild(h('div',{class:'pyadd'},[add]));
  }
  draw();
  return box;
}

/* ---------- export: your cells as a Jupyter notebook ---------- */
function ipynb(cells){
  return JSON.stringify({nbformat:4,nbformat_minor:5,metadata:{kernelspec:{name:'python3',display_name:'Python 3',language:'python'},
    language_info:{name:'python'}},cells:cells.map(c=>c.md?{cell_type:'markdown',metadata:{},source:c.md}
    :{cell_type:'code',metadata:{},execution_count:null,outputs:[],source:c.src})},null,1);
}
function exportAll(){
  const list=ranList();
  const byCh=(window.CHAPTERS||[]).reduce((m,c)=>(m[c.id]=c,m),{});
  const cells=[{md:'# My AI From Zero notebook\nEvery cell I ran, in course order. Exported '+new Date().toISOString().slice(0,10)+'.'},
    {src:PRELUDE}];
  let last=null;
  list.forEach(c=>{ if(c.ch!==last){ last=c.ch; const b=byCh[c.ch]; cells.push({md:'## '+(b?b.num+'. '+b.title:c.ch)}); } cells.push({src:c.src}); });
  const a=h('a',{href:URL.createObjectURL(new Blob([ipynb(cells)],{type:'application/x-ipynb+json'})),download:'ai-from-zero.ipynb'});
  document.body.appendChild(a); a.click(); a.remove();
}

/* ---------- the Workbench page ---------- */
function page(){
  const w=h('div',{class:'wrap'});
  w.appendChild(h('header',{class:'phead'},[
    h('div',{class:'eyebrow'},[h('span',{text:T('Hands-on, in this page')})]),
    h('h1',{text:T('Workbench')}),
    h('p',{html:T('A notebook that needs nothing installed and no other window. It shares one Python session with every chapter, so the functions you built there are here. Use it for the longer “Build it” work, for your own experiments, and to try the model without code in the <a href="#/playground">Playground</a>.')})]));
  w.appendChild(bar({files:true,note:T('Write Python in the cells below and press <strong>Run</strong> (or Shift+Enter). <code>client</code> is ready-made from your <a href="#/setup">Connect</a> settings. Files you add appear in the folder your code starts in.')}));
  w.appendChild(scratch('workbench'));
  const ex=h('button',{class:'sm',type:'button'},T('Download every cell I have run (.ipynb)'));
  ex.addEventListener('click',exportAll);
  w.appendChild(h('div',{class:'pyexport'},[ex,h('span',{class:'dim',text:' '+T('Opens in Jupyter, VS Code or Colab, for a portfolio or a code review.')})]));
  return w;
}

return { isPython, cell, bar, scratch, filesPanel, page, run, restore, restart, exportAll, ipynb, indexURL, PRELUDE,
  get status(){ return status; } };
})();
