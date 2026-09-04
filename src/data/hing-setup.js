/* Hinglish: the setup walkthrough.

   Generated alongside the English source: the key is the English line exactly
   as it appears in the course, so a line that is later edited in English falls
   back to English rather than showing a translation of something else. */
Object.assign(window.HING = window.HING || {}, {
  /* Setup walkthrough */
  'Setup':
    'Setup',
  'Optional. Only if you want to run real code. Entirely optional. Every chapter teaches what it teaches without any of this, and the interactive tools in each chapter need no setup at all. Do this only if you want to see the same ideas as real code.':
    'Optional. Sirf tab jab aap asli code chalana chahte hain. Poori tarah optional hai. Har chapter jo sikhata hai woh iske bina bhi sikhata hai, aur har chapter ke andar wale interactive tools ko koi setup chahiye hi nahi. Yeh tab kijiye jab aap wahi ideas asli code mein dekhna chahein.',
  'You need a free online coding environment (Google Colab) and a free API key (NVIDIA Build) that lets your programs talk to AI models. Forty-five minutes, once, done permanently.':
    'Aapko do cheezein chahiye: ek free online coding environment (Google Colab) aur ek free API key (NVIDIA Build) jo aapke programs ko AI models se baat karne deti hai. Pentaalis minute, ek baar, phir hamesha ke liye ho gaya.',
  'A1. Google Colab — a free place to run code':
    'A1. Google Colab — code chalane ki ek free jagah',
  'Colab is a free service giving you a temporary computer in Google\'s datacentre, controlled from a browser tab. Nothing is installed on your machine.':
    'Colab ek free service hai jo aapko Google ke datacentre mein ek temporary computer deti hai, jise aap browser tab se chalate hain. Aapki machine par kuchh install nahi hota.',
  'Go to <code>colab.research.google.com</code> and sign in with any Google account.':
    '<code>colab.research.google.com</code> kholiye aur kisi bhi Google account se sign in kijiye.',
  'Click <strong>+ New notebook</strong>.':
    '<strong>+ New notebook</strong> par click kijiye.',
  'You see an empty grey box. That box is a <strong>cell</strong> — type an instruction and press <kbd>Shift</kbd>+<kbd>Enter</kbd> to run it.':
    'Aapko ek khaali grey box dikhega. Wahi box ek <strong>cell</strong> hai — usme instruction likhiye aur chalane ke liye <kbd>Shift</kbd>+<kbd>Enter</kbd> dabaiye.',
  'Type <code>print("hello")</code> and press <kbd>Shift</kbd>+<kbd>Enter</kbd>.':
    '<code>print("hello")</code> likhiye aur <kbd>Shift</kbd>+<kbd>Enter</kbd> dabaiye.',
  'The word <code>hello</code> appears below the cell with a small green tick. That was a program. You wrote it and ran it.':
    'Cell ke neeche <code>hello</code> shabd aur ek chhota hara tick dikhega. Woh ek program tha. Aapne likha aur chalaya.',
  'Cells run top to bottom and remember each other — a value made in cell 1 is usable in cell 5, as long as the machine is on.':
    'Cells upar se neeche chalte hain aur ek doosre ko yaad rakhte hain — cell 1 mein banayi gayi value cell 5 mein bhi kaam karti hai, jab tak machine chalu hai.',
  'The machine switches off when idle, roughly 90 minutes. Your typed cells survive; only their results vanish. Fix: <strong>Runtime → Run all</strong>. This is weather, not failure.':
    'Machine khaali padi rahe to lagbhag 90 minute mein band ho jaati hai. Aapke likhe cells bache rehte hain; sirf unke results gayab hote hain. Ilaaj: <strong>Runtime → Run all</strong>. Yeh mausam hai, failure nahi.',
  'Rename each notebook by clicking its name at top-left: <code>chapter-1</code>, <code>chapter-2</code>, and so on.':
    'Har notebook ka naam upar-baayen uske naam par click karke badal dijiye: <code>chapter-1</code>, <code>chapter-2</code>, waghairah.',
  'A2. An API key — your access code to the AI':
    'A2. Ek API key — AI tak pahunchne ka aapka code',
  'NVIDIA\'s Build platform provides free access to a large catalogue of models with no credit card. This book needs well under 400 requests; the free allowance is roughly 1,000. It also lets you swap models with a one-line change — a genuinely useful skill.':
    'NVIDIA ka Build platform bina credit card ke bahut saare models tak free access deta hai. Is course mein 400 se kaafi kam requests lagti hain; free allowance lagbhag 1,000 hai. Ismein ek line badalkar model swap karna bhi aata hai — sach mein kaam ki skill.',
  'Go to <code>build.nvidia.com</code>. Sign up or log in with any email.':
    '<code>build.nvidia.com</code> kholiye. Kisi bhi email se sign up ya log in kijiye.',
  'Search <code>llama-3.1-8b-instruct</code> and open the model page.':
    '<code>llama-3.1-8b-instruct</code> search karke uska model page kholiye.',
  'Find <strong>Get API Key</strong> (on some pages: <em>Build with this NIM → Generate Key</em>). Click it.':
    '<strong>Get API Key</strong> dhoondhiye (kuchh pages par: <em>Build with this NIM → Generate Key</em>). Us par click kijiye.',
  'A long code beginning <code>nvapi-</code> appears. Copy it somewhere private immediately — a password manager or private note. Treat it like an ATM PIN.':
    '<code>nvapi-</code> se shuru hone wala ek lamba code dikhega. Use turant kahin private jagah copy kar lijiye — password manager ya private note mein. Ise ATM PIN ki tarah samajhiye.',
  'Why this matters professionally':
    'Yeh professionally kyun maayne rakhta hai',
  'Keys embedded in code get copied, shared, and leaked — one of the most common security failures in software. Knowing how to store them correctly, and why, is itself meeting-grade knowledge.':
    'Code ke andar likhi keys copy hoti hain, share hoti hain, aur leak ho jaati hain — software ki sabse aam security galtiyon mein se ek. Inhe theek se rakhna aata ho, aur kyun rakhna hai yeh pata ho, yeh khud meeting-level jaankaari hai.',
  'A3. Storing the key so it is not visible':
    'A3. Key ko aise rakhna ki woh dikhe nahi',
  'Never paste an API key into a code cell. Colab has a secrets locker for exactly this.':
    'API key kabhi code cell mein paste mat kijiye. Colab mein isi kaam ke liye ek secrets locker hai.',
  'Click the key icon (🔑) in the left sidebar.':
    'Baayen sidebar mein key icon (🔑) par click kijiye.',
  'Click <strong>+ Add new secret</strong>. Name: <code>NVIDIA_API_KEY</code> exactly. Value: your <code>nvapi-…</code> code.':
    '<strong>+ Add new secret</strong> par click kijiye. Name: bilkul <code>NVIDIA_API_KEY</code>. Value: aapka <code>nvapi-…</code> code.',
  'Switch <strong>Notebook access</strong> ON.':
    '<strong>Notebook access</strong> ON kar dijiye.',
  '<code>Key loaded, starts with: nvapi-xx</code> — showing only the first 8 characters keeps the full key off your screen.':
    '<code>Key loaded, starts with: nvapi-xx</code> — sirf pehle 8 characters dikhane se poori key screen par nahi aati.',
  'A4. The test call':
    'A4. Test call',
  'A few progress lines, then silence. Silence is success.':
    'Kuchh progress lines, phir chuppi. Chuppi hi safalta hai.',
  '<code>setup works</code>. Setup is complete.':
    '<code>setup works</code>. Setup poora ho gaya.',
  'One note worth filing: the library is called <code>openai</code>, yet we are not using OpenAI\'s service. OpenAI published the first widely-adopted request format and much of the industry copied it. One library therefore works with many providers. Changing providers later may require only a one-line change — exactly the kind of architectural fact that earns respect in vendor conversations.':
    'Ek baat note kar lijiye: library ka naam <code>openai</code> hai, lekin hum OpenAI ki service istemaal nahi kar rahe. OpenAI ne pehla widely-adopted request format publish kiya tha aur zyadatar industry ne wahi copy kar liya. Isliye ek hi library kai providers ke saath chalti hai. Aage provider badalna sirf ek line ka kaam ho sakta hai — theek wahi kism ka architectural fact jo vendor ki baithak mein izzat dilata hai.',
  'A5. Collect your raw material':
    'A5. Apna raw material jama kijiye',
  'Create one folder in Google Drive named <code>my-corpus</code>. Put in it 10–15 documents you know deeply from your own work: policies, SOPs, product manuals, contracts, handbooks, published standards.':
    'Google Drive mein <code>my-corpus</code> naam ka ek folder banaiye. Usme apne kaam ke 10–15 aise documents daaliye jinhe aap gehraai se jaante hain: policies, SOPs, product manuals, contracts, handbooks, published standards.',
  'Why your own documents matter':
    'Aapke apne documents kyun zaroori hain',
  'The second half of this book builds a system that answers questions from your corpus. When it answers wrongly — and it will — you must catch the error instantly, without outside help. Your domain knowledge is your quality-control department. With unfamiliar documents you would need an expert on call; with your own, you are the expert.':
    'Is course ka doosra hissa aisa system banata hai jo aapke corpus se sawaalon ke jawaab deta hai. Jab woh galat jawaab dega — aur dega — aapko galti turant pakadni hai, bina kisi ki madad ke. Aapka domain knowledge hi aapka quality-control department hai. Anjaan documents ke saath aapko ek expert bulana padta; apne documents ke saath expert aap hain.',
  '<strong>For Part II, add deliberately awkward material:</strong> at least two scanned pages, one document containing a real table, and — if you can — a superseded version of a policy alongside its current one. Chapters 12 and 16 need these, and a corpus that is too clean will teach you that everything works.':
    '<strong>Part II ke liye jaanbujhkar mushkil material bhi daaliye:</strong> kam se kam do scanned pages, ek document jisme asli table ho, aur — agar ho sake — kisi policy ka purana version uske naye version ke saath. Chapter 12 aur 16 ko yeh chahiye, aur bahut saaf corpus aapko yeh sikha dega ki sab kuchh theek chalta hai.',
  'A6. Part II additions':
    'A6. Part II ke liye extra',
  'Before Chapter 9, confirm your model catalogue offers these. Any one of them missing is worked around in that chapter\'s <em>If Something Goes Wrong</em>.':
    'Chapter 9 se pehle dekh lijiye ki aapke model catalogue mein yeh sab hain. Inme se koi na ho, to us chapter ke <em>If Something Goes Wrong</em> mein uska rasta likha hai.',
  'A <strong>tool-calling</strong> capable instruct model (Ch. 9)':
    'Ek <strong>tool-calling</strong> kar sakne wala instruct model (Ch. 9)',
  'A <strong>reasoning</strong> model, or simply two models of clearly different size and price (Ch. 11)':
    'Ek <strong>reasoning</strong> model, ya bas do model jinke size aur daam saaf alag hon (Ch. 11)',
  'A <strong>vision</strong> capable model (Ch. 16)':
    'Ek <strong>vision</strong> wala model (Ch. 16)',
  'A model supporting <code>response_format</code> / JSON schema (Ch. 8) — the validation loop is the fallback':
    'Ek model jo <code>response_format</code> / JSON schema support karta ho (Ch. 8) — validation loop iska fallback hai',
  '401 Unauthorized':
    '401 Unauthorized',
  'Key not loaded':
    'Key load nahi hui',
  'Sidebar 🔑 → toggle ON for this notebook → re-run the key cell':
    'Sidebar 🔑 → is notebook ke liye ON kijiye → key wala cell dobara chalaiye',
  'NameError: key not defined':
    'NameError: key not defined',
  'Colab session restarted':
    'Colab session restart ho gaya',
  'Runtime → Run all':
    'Runtime → Run all',
  '404 model not found':
    '404 model not found',
  'Typo in the model name':
    'Model ke naam mein typo',
  'Exact strings only — copy from the model page on build.nvidia.com':
    'Bilkul exact string chahiye — build.nvidia.com ke model page se copy kijiye',
  '429 Too Many Requests':
    '429 Too Many Requests',
  'Loop hit the per-minute rate limit':
    'Loop per-minute rate limit se takra gaya',
  'Add <code>import time; time.sleep(2)</code> inside the loop':
    'Loop ke andar <code>import time; time.sleep(2)</code> daal dijiye',
  '4xx on embeddings':
    'Embeddings par 4xx',
  'Missing <code>extra_body</code>':
    '<code>extra_body</code> chhoot gaya',
  '<code>extra_body={"input_type": …}</code> is mandatory for the embedding model':
    'Embedding model ke liye <code>extra_body={"input_type": …}</code> zaroori hai',
  'Anything else':
    'Aur kuchh bhi',
  'Transient or unknown':
    'Aarzi ya anjaan',
  'Note the exact red text, close, return with fresh eyes tomorrow':
    'Laal text jaisa hai waisa likh lijiye, band kijiye, kal taazi nazar se wapas aaiye'
});
