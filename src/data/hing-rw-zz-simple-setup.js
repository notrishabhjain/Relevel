/* Hinglish for Setup page (setup), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Every chapter’s interactive tools work without this step. Do it once, when you reach Chapter 1. Then the code in the chapters can talk to a real model. The code runs right here on this page. You do not open any other window.':
    'Har chapter ke interactive tools is step ke bina bhi chalte hain. Ise ek baar kijiye, jab aap Chapter 1 par pahunchein. Tab chapters ka code ek asli model se baat kar sakega. Code yahin isi page par chalta hai. Aapko koi doosri window nahi kholni.',
  'You need one free thing from outside this site: an API key (a secret password for the model). It lets the code in the chapters talk to a model. You paste it here once. The code runs on this page, in Python that starts inside your browser. So you install nothing, and you open no notebook anywhere else.':
    'Aapko is site ke bahar se sirf ek free cheez chahiye: ek API key (model ka secret password). Isse chapters ka code model se baat kar pata hai. Ise yahan ek baar paste kijiye. Code isi page par chalta hai, us Python mein jo aapke browser ke andar start hota hai. Isliye kuch install nahi karna, aur kahin aur notebook nahi kholni.',
  'A1. Connect a model':
    'A1. Ek model connect kijiye',
  'A model runs on a provider’s computers (the company that hosts it, like a shop owner). The provider must know who is asking. The API key tells it. This course was written with NVIDIA Build. It is free and does not ask for a credit card. Google Gemini works too. So do the others in the list.':
    'Model ek provider ke computers par chalta hai (woh company jo use host karti hai, jaise dukaan ka maalik). Provider ko pata hona chahiye ki kaun pooch raha hai. API key use yeh batati hai. Yeh course NVIDIA Build ke saath likha gaya tha. Woh free hai aur credit card nahi maangta. Google Gemini bhi chalta hai. List ke baaki providers bhi chalte hain.',
  'Choose NVIDIA Build below. Pick another only if you have a reason.':
    'Neeche NVIDIA Build chuniye. Doosra tabhi chuniye jab aapke paas koi wajah ho.',
  'Open the key page from the link. Sign up or log in with any email. Search for <code>llama-3.1-8b-instruct</code>. Press <strong>Get API Key</strong>. On some pages it is under <em>Build with this NIM → Generate Key</em>.':
    'Link se key wala page kholiye. Kisi bhi email se sign up ya log in kijiye. <code>llama-3.1-8b-instruct</code> search kijiye. <strong>Get API Key</strong> dabaiye. Kuch pages par yeh <em>Build with this NIM → Generate Key</em> ke neeche hota hai.',
  'Copy the long code that starts with <code>nvapi-</code>. Paste it below. Press <strong>Save key</strong>. Keep it safe, like an ATM PIN.':
    '<code>nvapi-</code> se shuru hone wala lamba code copy kijiye. Neeche paste kijiye. <strong>Save key</strong> dabaiye. Ise ATM PIN ki tarah sambhaal kar rakhiye.',
  'Press <strong>Run the test call</strong>.':
    '<strong>Run the test call</strong> dabaiye.',
  'You see <code>setup works</code>, the model’s name and a receipt. The receipt shows the tokens (small pieces of words) it read, the tokens it wrote and the seconds it took.':
    'Aapko <code>setup works</code>, model ka naam aur ek receipt dikhegi. Receipt mein dikhta hai ki usne kitne tokens (shabdon ke chhote tukde) padhe, kitne likhe aur kitne second lage.',
  'Why this matters professionally':
    'Yeh professionally kyun maayne rakhta hai',
  'Keys that sit inside code get copied, shared and leaked. This is one of the most common security failures in software. Here the key never appears in your code. The page adds it to each request. Learn how to store keys properly, and why. Then you can speak with confidence in a meeting.':
    'Code ke andar rakhi keys copy hoti hain, share hoti hain aur leak ho jaati hain. Software mein yeh sabse aam security failures mein se ek hai. Yahan key aapke code mein kabhi nahi dikhti. Page use har request ke saath jod deta hai. Seekhiye ki keys theek se kaise rakhte hain, aur kyun. Phir aap meeting mein bharose se baat kar sakte hain.',
  'A2. Python, in this page':
    'A2. Python, isi page mein',
  'Every code block in a chapter has a <strong>Run</strong> button. The first time you press one, Python starts inside your browser. It downloads about 10 MB, only once. After that it starts in a few seconds.':
    'Chapter ke har code block mein ek <strong>Run</strong> button hai. Pehli baar dabane par Python aapke browser ke andar start hota hai. Yeh lagbhag 10 MB download karta hai, sirf ek baar. Uske baad yeh kuch second mein start ho jaata hai.',
  'Try it now. Press <strong>Run</strong> on the cell below (one box of code). Or click in it and press <kbd>Shift</kbd>+<kbd>Enter</kbd>.':
    'Abhi try kijiye. Neeche wale cell (code ka ek dibba) par <strong>Run</strong> dabaiye. Ya usme click karke <kbd>Shift</kbd>+<kbd>Enter</kbd> dabaiye.',
  'The word <code>hello</code> appears below the cell, with a green tick. That was a program. You wrote it and you ran it.':
    'Cell ke neeche <code>hello</code> shabd dikhta hai, ek hare tick ke saath. Woh ek program tha. Aapne use likha aur chalaya.',
  'Cells run from top to bottom, and they remember each other. A value you make in one cell works in any later cell. That holds in this chapter and the next. One Python session runs the whole course.':
    'Cells upar se neeche chalte hain, aur ek doosre ko yaad rakhte hain. Ek cell mein banayi value baad ke kisi bhi cell mein kaam karti hai. Yeh isi chapter mein bhi chalta hai aur agle mein bhi. Poora course ek hi Python session mein chalta hai.',
  'A reload, or closing the tab, ends the session. Your typed cells stay. The page remembers which ones you ran. Press <strong>Restore</strong> in the notebook bar. Your functions and data come back, and the model is not called again.':
    'Page reload karne ya tab band karne se session khatam ho jaata hai. Aapke likhe cells bache rehte hain. Page yaad rakhta hai ki aapne kaun se chalaye the. Notebook bar mein <strong>Restore</strong> dabaiye. Aapke functions aur data wapas aa jaate hain, aur model dobara call nahi hota.',
  'You can change any code before you run it. <strong>Undo edits</strong> brings back the chapter’s version.':
    'Chalane se pehle aap koi bhi code badal sakte hain. <strong>Undo edits</strong> chapter wala version wapas le aata hai.',
  'A3. The warm-up the page does for you':
    'A3. Woh warm-up jo page aapke liye karta hai',
  'Code needs three things before it can call a model: the key, the library (ready-made code someone else wrote) and a client (the messenger that carries your note to the model). The page does all three for you before your first cell. Here they are, as you would write them anywhere else. Run each one.':
    'Model ko call karne se pehle code ko teen cheezein chahiye: key, library (kisi aur ka likha taiyaar code) aur ek client (woh messenger jo aapka note model tak le jaata hai). Page yeh teeno aapke pehle cell se pehle khud kar deta hai. Yeh rahe woh, waise hi jaise aap kahin aur likhte. Har ek ko chalaiye.',
  'You see <code>Key loaded, starts with: nvapi-xx</code>. We print only the first 8 characters. So the full key never shows on your screen.':
    'Aapko <code>Key loaded, starts with: nvapi-xx</code> dikhega. Hum sirf pehle 8 characters print karte hain. Isliye poori key aapki screen par kabhi nahi dikhti.',
  'Here it says the library is already built in. On your own computer, this line installs it.':
    'Yahan likha aata hai ki library pehle se built-in hai. Aapke apne computer par yeh line use install karti hai.',
  'You see <code>setup works</code>. Your setup is complete.':
    'Aapko <code>setup works</code> dikhega. Aapka setup poora ho gaya.',
  'One thing is worth knowing. The library is called <code>openai</code>, but we do not use OpenAI’s service. OpenAI published the first request format that many people liked. Much of the industry copied it. So one library works with many providers. Later, you may switch providers by changing one line. Knowing this earns you respect when you talk to vendors.':
    'Ek baat jaanne laayak hai. Library ka naam <code>openai</code> hai, lekin hum OpenAI ki service use nahi karte. OpenAI ne woh pehla request format publish kiya jo bahut logon ko pasand aaya. Industry ke zyadatar log usse copy karne lage. Isliye ek hi library kai providers ke saath chalti hai. Aage jaakar aap sirf ek line badal kar provider badal sakte hain. Yeh jaanne se vendors se baat karte waqt aapki izzat badhti hai.',
  'The same three cells run unchanged in Google Colab, in Jupyter or on your own computer. There, <code>userdata</code> reads the secret you stored. The code you write here goes with you. The <a href="#/workbench">Workbench</a> can download every cell you ran as a notebook file.':
    'Yahi teen cells bina badle Google Colab mein, Jupyter mein ya aapke apne computer par chalte hain. Wahan <code>userdata</code> aapka rakha hua secret padhta hai. Jo code aap yahan likhte hain woh aapke saath jaata hai. <a href="#/workbench">Workbench</a> aapke chalaye har cell ko ek notebook file ke roop mein download kar sakta hai.',
  'A4. Collect your raw material':
    'A4. Apna raw material ikattha kijiye',
  'The second half of the course builds a system that answers questions from documents. Press <strong>Add files</strong> below. Add 10–15 documents you know well from your own work. For example: policies, SOPs, product manuals, contracts, handbooks or published standards. They stay in this browser. Your code opens them by name, like this: <code>open("leave-policy.txt").read()</code>.':
    'Course ka doosra hissa ek aisa system banata hai jo documents se sawaalon ke jawab deta hai. Neeche <strong>Add files</strong> dabaiye. Apne kaam ke 10–15 aise documents jodiye jinhe aap achhi tarah jaante hain. Jaise: policies, SOPs, product manuals, contracts, handbooks ya published standards. Yeh isi browser mein rehte hain. Aapka code inhe naam se kholta hai, aise: <code>open("leave-policy.txt").read()</code>.',
  'Why your own documents matter':
    'Aapke apne documents kyun zaroori hain',
  'The second half of this book builds a system that answers questions from your corpus (your pile of documents). Sometimes it will answer wrongly. You must catch that at once, without anyone’s help. Your own domain knowledge is your quality check, like a teacher who knows the answer key. With documents you do not know, you would need an expert on call. With your own, you are the expert.':
    'Is book ka doosra half ek aisa system banata hai jo aapke corpus (aapke documents ke dher) se sawaalon ke jawaab deta hai. Kabhi kabhi woh galat jawaab dega. Aapko use turant pakadna hai, kisi ki madad ke bina. Aapki apni domain knowledge hi aapka quality check hai, jaise woh teacher jise answer key pata hai. Jin documents ko aap nahi jaante, unke liye call par ek expert chahiye hoga. Apne documents mein expert aap khud hain.',
  '<strong>For Part II, add some deliberately awkward material:</strong> at least two scanned pages, one document with a real table in it, and, if you can, an old version of a policy next to its current one. Chapters 12 and 16 need these. A corpus that is too clean will make you think everything works.':
    '<strong>Part II ke liye, jaan-boojhkar thoda mushkil material bhi daaliye:</strong> kam se kam do scanned pages, ek document jisme asli table ho, aur agar ho sake toh kisi policy ka purana version uske current version ke saath. Chapters 12 aur 16 ko inki zaroorat hai. Bahut saaf-suthra corpus aapko lagayega ki sab kuch chal jaata hai.',
  'Text files (.txt and .md) open straight away. For a PDF or a Word file, copy its text into a .txt file for now. Chapter 16 covers scans and images.':
    'Text files (.txt aur .md) seedhe khul jaati hain. PDF ya Word file ke liye, abhi uska text ek .txt file mein copy kar lijiye. Scans aur images Chapter 16 mein aate hain.',
  'A5. Part II additions':
    'A5. Part II ke liye kuch aur',
  'Before Chapter 9, check your model catalogue (the menu of models you can use). It should offer the models below. If one is missing, that chapter’s <em>If Something Goes Wrong</em> section shows a way around it.':
    'Chapter 9 se pehle apna model catalogue (jin models ko aap use kar sakte hain unka menu) dekhiye. Usme neeche likhe models hone chahiye. Agar koi ek nahi hai, toh us chapter ka <em>If Something Goes Wrong</em> section uska ek raasta dikhata hai.',
  'A <strong>tool-calling</strong> model (one that can ask you to press a button for it), of the instruct kind (Ch. 9)':
    'Ek <strong>tool-calling</strong> kar sakne wala model (jo aapse apne liye button dabwa sake), instruct kism ka (Ch. 9)',
  'A <strong>reasoning</strong> model (one that thinks on rough paper first), or two models of clearly different size and price (Ch. 11)':
    'Ek <strong>reasoning</strong> model (jo pehle kachche kaagaz par sochta hai), ya do model jinke size aur daam saaf alag hon (Ch. 11)',
  'A <strong>vision</strong> model (one that can look at pictures) (Ch. 16)':
    'Ek <strong>vision</strong> wala model (jo tasveerein dekh sake) (Ch. 16)',
  'A model that supports <code>response_format</code> / JSON schema (a form with fixed boxes for the answer) (Ch. 8). If you do not have one, the validation loop is the fallback.':
    'Ek model jo <code>response_format</code> / JSON schema (jawaab ke liye fixed khaanon wala form) support karta ho (Ch. 8). Agar aapke paas nahi hai, toh validation loop fallback hai.',
  '<em>Models and routing</em>, in the Connect panel above, shows which model each kind of call uses. You can change it there.':
    'Upar Connect panel mein <em>Models and routing</em> dikhata hai ki har tarah ki call kaun sa model use karti hai. Aap use wahin badal sakte hain.',
  '401 Unauthorized':
    '401 Unauthorized',
  'The key was not loaded':
    'Key load nahi hui',
  'Open the Connect panel above. Paste the key again. Save it. Press <strong>Run the test call</strong>':
    'Upar Connect panel kholiye. Key dobara paste kijiye. Save kijiye. <strong>Run the test call</strong> dabaiye',
  'NameError: key not defined':
    'NameError: key not defined',
  'The page was reloaded, so the Python session started again':
    'Page reload hua, isliye Python session phir se shuru hua',
  'Press <strong>Restore</strong> in the notebook bar, or run the cells above again':
    'Notebook bar mein <strong>Restore</strong> dabaiye, ya upar ke cells dobara chalaiye',
  '404 model not found':
    '404 model not found',
  'The model name has a typo':
    'Model ke naam mein typo hai',
  'Use the exact name. Copy it from the model page on build.nvidia.com':
    'Bilkul exact naam use kijiye. Use build.nvidia.com par model page se copy kijiye',
  '429 Too Many Requests':
    '429 Too Many Requests',
  'Your loop (a step done again and again) hit the per-minute rate limit (too many requests too fast)':
    'Aapka loop (baar-baar hone wala step) per-minute rate limit tak pahunch gaya (bahut zyada requests bahut tezi se)',
  'Wait a little. Add <code>import time; time.sleep(2)</code> inside the loop':
    'Thoda rukiye. Loop ke andar <code>import time; time.sleep(2)</code> daal dijiye',
  '4xx on embeddings':
    'Embeddings par 4xx',
  '<code>extra_body</code> is missing':
    '<code>extra_body</code> missing hai',
  'The embedding model needs <code>extra_body={"input_type": …}</code>':
    'Embedding model ko <code>extra_body={"input_type": …}</code> chahiye',
  'The browser could not download Python from cdn.jsdelivr.net':
    'Browser cdn.jsdelivr.net se Python download nahi kar paaya',
  'Check your connection, or try another network. Some office networks block it':
    'Apna connection check kijiye, ya koi doosra network try kijiye. Kuch office networks ise block karte hain',
  'Anything else':
    'Aur kuchh bhi',
  'A temporary or unknown problem':
    'Temporary ya anjaan problem',
  'Write down the exact red text. Come back with fresh eyes tomorrow':
    'Laal text bilkul waisa ka waisa note kar lijiye. Kal taaza nazar se wapas aaiye',
});
