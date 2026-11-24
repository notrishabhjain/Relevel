/* Hinglish: hands-on inside the page (November 2026).

   The setup page, the notebook bar, the Connect panel, the Playground and the
   chapters' "before you start" lines, rewritten when the code moved out of
   Colab and into the page. Keyed on the English line, like every other file. */
Object.assign(window.HING = window.HING || {}, {
  /* Setup page */
  'Setup: connect a model':
    'Setup: ek model connect kijiye',
  'Every chapter’s interactive tools work without this. Do it once, when you reach Chapter 1, so that the code in the chapters can call a real model. The code runs right here in the page, so there is no other window to open.':
    'Har chapter ke interactive tools iske bina bhi chalte hain. Ise ek baar kijiye, jab aap Chapter 1 par pahunchein, taaki chapters ka code ek asli model ko call kar sake. Code yahin isi page mein chalta hai, isliye koi doosri window kholne ki zaroorat nahi.',
  'You need one free thing from outside this site: an API key, which lets the code in the chapters talk to a model. You paste it here once. The code itself runs in this page, in Python that starts inside your browser, so there is nothing to install and no notebook to open elsewhere.':
    'Aapko is site ke bahar se sirf ek free cheez chahiye: ek API key, jisse chapters ka code model se baat kar pata hai. Aap ise yahan ek baar paste karte hain. Code khud isi page mein chalta hai, us Python mein jo aapke browser ke andar start hota hai, isliye na kuch install karna hai, na kahin aur notebook kholni hai.',
  'A1. Connect a model':
    'A1. Ek model connect kijiye',
  'A model runs on a provider’s computers, and the provider needs to know who is asking. The API key is how it knows. The course was written against NVIDIA Build, which is free and doesn’t ask for a credit card. Google Gemini works too, and so do the others in the list.':
    'Model ek provider ke computers par chalta hai, aur provider ko pata hona chahiye ki kaun pooch raha hai. API key se use yeh pata chalta hai. Yeh course NVIDIA Build ke saath likha gaya tha, jo free hai aur credit card nahi maangta. Google Gemini bhi chalta hai, aur list ke baaki providers bhi.',
  'Choose NVIDIA Build below, unless you have a reason not to.':
    'Neeche NVIDIA Build chuniye, jab tak aapke paas na chunne ki koi wajah na ho.',
  'Open the key page from the link. Sign up or log in with any email, search for <code>llama-3.1-8b-instruct</code> and press <strong>Get API Key</strong>. On some pages it is under <em>Build with this NIM → Generate Key</em>.':
    'Link se key wala page kholiye. Kisi bhi email se sign up ya log in kijiye, <code>llama-3.1-8b-instruct</code> search kijiye aur <strong>Get API Key</strong> dabaiye. Kuch pages par yeh <em>Build with this NIM → Generate Key</em> ke neeche hota hai.',
  'Copy the long code that starts with <code>nvapi-</code>, paste it below and press <strong>Save key</strong>. Treat it like an ATM PIN.':
    '<code>nvapi-</code> se shuru hone wala lamba code copy kijiye, neeche paste kijiye aur <strong>Save key</strong> dabaiye. Ise ATM PIN ki tarah sambhaal kar rakhiye.',
  'Press <strong>Run the test call</strong>.':
    '<strong>Run the test call</strong> dabaiye.',
  'You see <code>setup works</code>, the model’s name and a receipt: the tokens it read, the tokens it wrote and the seconds it took.':
    'Aapko <code>setup works</code>, model ka naam aur ek receipt dikhegi: usne kitne tokens padhe, kitne likhe aur kitne second lage.',
  'Keys that sit inside code get copied, shared and leaked. It is one of the most common security failures in software. Here the key never appears in your code: the page adds it to each request. If you know how to store keys properly, and why, you can speak with confidence in a meeting.':
    'Code ke andar rakhi keys copy hoti hain, share hoti hain aur leak ho jaati hain. Software mein yeh sabse aam security failures mein se ek hai. Yahan key aapke code mein kabhi nahi dikhti: page use har request ke saath jod deta hai. Agar aap jaante hain ki keys theek se kaise rakhi jaati hain, aur kyun, toh aap meeting mein bharose se baat kar sakte hain.',
  'A2. Python, in this page':
    'A2. Python, isi page mein',
  'Every code block in a chapter has a <strong>Run</strong> button. The first time you press one, Python starts inside your browser. It downloads about 10 MB, once. After that it starts in a few seconds.':
    'Chapter ke har code block mein ek <strong>Run</strong> button hai. Pehli baar dabane par Python aapke browser ke andar start hota hai. Yeh lagbhag 10 MB download karta hai, sirf ek baar. Uske baad yeh kuch second mein start ho jaata hai.',
  'Try it now. Press <strong>Run</strong> on the cell below, or click in it and press <kbd>Shift</kbd>+<kbd>Enter</kbd>.':
    'Abhi try kijiye. Neeche wale cell par <strong>Run</strong> dabaiye, ya usme click karke <kbd>Shift</kbd>+<kbd>Enter</kbd> dabaiye.',
  'The word <code>hello</code> appears below the cell, with a green tick. That was a program. You wrote it and you ran it.':
    'Cell ke neeche <code>hello</code> shabd dikhta hai, ek hare tick ke saath. Woh ek program tha. Aapne use likha aur chalaya.',
  'Cells run from top to bottom, and they remember each other. A value you make in one cell can be used in any later one, in this chapter or the next. One Python session runs the whole course.':
    'Cells upar se neeche chalte hain, aur ek doosre ko yaad rakhte hain. Ek cell mein banayi value baad ke kisi bhi cell mein use ho sakti hai, isi chapter mein ya agle mein. Poora course ek hi Python session mein chalta hai.',
  'A reload, or closing the tab, ends the session. The cells you typed stay, and the page remembers which ones you ran. Press <strong>Restore</strong> in the notebook bar to put your functions and data back without calling the model again.':
    'Page reload karne ya tab band karne se session khatam ho jaata hai. Aapke likhe cells bache rehte hain, aur page yaad rakhta hai ki aapne kaun se chalaye the. Notebook bar mein <strong>Restore</strong> dabaiye, aapke functions aur data model ko dobara call kiye bina wapas aa jaayenge.',
  'You can change any code before you run it. <strong>Undo edits</strong> puts the chapter’s version back.':
    'Chalane se pehle aap koi bhi code badal sakte hain. <strong>Undo edits</strong> chapter wala version wapas le aata hai.',
  'A3. The warm-up the page does for you':
    'A3. Woh warm-up jo page aapke liye karta hai',
  'Before code can call a model it needs three things: the key, the library and a client. The page does these for you before your first cell. Here they are, as you would write them anywhere else. Run each one.':
    'Model ko call karne se pehle code ko teen cheezein chahiye: key, library aur ek client. Page aapke pehle cell se pehle yeh khud kar deta hai. Yeh rahe woh, waise hi jaise aap kahin aur likhte. Har ek ko chalaiye.',
  'Here it says the library is already built in. On your own computer, this line installs it.':
    'Yahan yeh batata hai ki library pehle se built-in hai. Aapke apne computer par yeh line use install karti hai.',
  'The same three cells run unchanged in Google Colab, in Jupyter or on your own computer, where <code>userdata</code> reads the secret you stored there. The code you write here goes with you. The <a href="#/workbench">Workbench</a> can download every cell you have run as a notebook file.':
    'Yahi teen cells bina badle Google Colab mein, Jupyter mein ya aapke apne computer par chalte hain, jahan <code>userdata</code> wahan rakha secret padhta hai. Jo code aap yahan likhte hain woh aapke saath jaata hai. <a href="#/workbench">Workbench</a> aapke chalaye har cell ko ek notebook file ke roop mein download kar sakta hai.',
  'A4. Collect your raw material':
    'A4. Apna raw material ikattha kijiye',
  'The second half of the course builds a system that answers questions from documents. Add 10–15 documents you know well from your own work with <strong>Add files</strong> below. For example: policies, SOPs, product manuals, contracts, handbooks or published standards. They stay in this browser, and your code opens them by name, like this: <code>open("leave-policy.txt").read()</code>.':
    'Course ka doosra hissa ek aisa system banata hai jo documents se sawaalon ke jawab deta hai. Neeche <strong>Add files</strong> se apne kaam ke 10–15 aise documents jodiye jinhe aap achhi tarah jaante hain. Jaise: policies, SOPs, product manuals, contracts, handbooks ya published standards. Yeh isi browser mein rehte hain, aur aapka code inhe naam se kholta hai, aise: <code>open("leave-policy.txt").read()</code>.',
  'Text files (.txt and .md) open straight away. For a PDF or a Word file, copy its text into a .txt file for now. Chapter 16 covers scans and images.':
    'Text files (.txt aur .md) seedhe khul jaati hain. PDF ya Word file ke liye, abhi uska text ek .txt file mein copy kar lijiye. Scans aur images Chapter 16 mein aate hain.',
  'A5. Part II additions':
    'A5. Part II ke liye kuch aur',
  '<em>Models and routing</em>, in the Connect panel above, shows which model each kind of call uses, and lets you change it.':
    'Upar Connect panel mein <em>Models and routing</em> dikhata hai ki har tarah ki call kaun sa model use karti hai, aur aap use badal sakte hain.',
  'Open the Connect panel above, paste the key again, save it and press <strong>Run the test call</strong>':
    'Upar Connect panel kholiye, key dobara paste kijiye, save kijiye aur <strong>Run the test call</strong> dabaiye',
  'The page was reloaded, so the Python session started again':
    'Page reload hua, isliye Python session phir se shuru hua',
  'Press <strong>Restore</strong> in the notebook bar, or run the cells above again':
    'Notebook bar mein <strong>Restore</strong> dabaiye, ya upar ke cells dobara chalaiye',
  'Python could not start':
    'Python start nahi ho paaya',
  'The browser could not download Python from cdn.jsdelivr.net':
    'Browser cdn.jsdelivr.net se Python download nahi kar paaya',
  'Check your connection, or try another network. Some office networks block it':
    'Apna connection check kijiye, ya koi doosra network try kijiye. Kuch office networks ise block karte hain',
  'Note down the exact red text, and come back with fresh eyes tomorrow':
    'Laal text bilkul waisa ka waisa note kar lijiye, aur kal taaza nazar se wapas aaiye',
  /* chapters: the code runs in the page */
  'Working prototype: the Playground, Lovable or Google AI Studio':
    'Working prototype: Playground, Lovable ya Google AI Studio',
  'Run starter sentences 1 to 8 through two different AI models in the <a href="#/playground">Playground</a>. Fill in <em>Compare with</em>, so that each message goes to both. Use the same instruction for both: “List every piece of personal information in this sentence.”':
    'Starter sentences 1 se 8 ko <a href="#/playground">Playground</a> mein do alag AI models se chalaiye. <em>Compare with</em> bhar dijiye, taaki har message dono ke paas jaaye. Dono ke liye ek hi instruction dijiye: “List every piece of personal information in this sentence.”',
  'Some browsers and office networks block the embedded viewer. Try Chrome, or open the viewer on its own with the link under it. It shows attention without any setup.':
    'Kuch browsers aur office networks embedded viewer ko block kar dete hain. Chrome try kijiye, ya uske neeche wale link se viewer ko alag se kholiye. Woh bina kisi setup ke attention dikhata hai.',
  'Open the <a href="#/playground">Playground</a> and tick <em>Keep the conversation</em>. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window. Then press <em>Clear</em>, which starts a brand-new conversation, and ask again.':
    '<a href="#/playground">Playground</a> kholiye aur <em>Keep the conversation</em> tick kijiye. Use ek banayi hui baat bataiye, jaise “Meri company ki refund window 17 din ki hai.” Refund window ke baare mein poochiye. Phir <em>Clear</em> dabaiye, jisse ek bilkul nayi conversation shuru hoti hai, aur dobara poochiye.',
  'A model connected on the setup page':
    'Setup page par ek model connect ho',
  /* the notebook, Connect and the Playground (chrome) */
  'Python code':
    'Python code',
  'Run':
    'Run',
  'Put back the code from the chapter':
    'Chapter wala code wapas laaiye',
  'Undo edits':
    'Undo edits',
  'Delete this cell':
    'Yeh cell hataiye',
  'fill in the … first':
    'pehle … bhariye',
  'running…':
    'chal raha hai…',
  'Done — this cell prints nothing.':
    'Ho gaya — yeh cell kuch print nahi karta.',
  'error':
    'error',
  'Python running':
    'Python chal raha hai',
  'Python starts when you press Run':
    'Run dabate hi Python start hoga',
  'No model connected — Connect':
    'Koi model connect nahi — Connect kijiye',
  'Restore':
    'Restore',
  'Put back the functions and data from every cell you have run, without calling the model':
    'Aapke chalaye har cell ke functions aur data wapas laaiye, model ko call kiye bina',
  'Re-run all':
    'Sab dobara chalaiye',
  'Run every cell you have run before, in course order. Calls the model again.':
    'Pehle chalaya har cell course ke order mein dobara chalaiye. Model ko phir se call karta hai.',
  'Restart':
    'Restart',
  'Stop Python and start a fresh session':
    'Python rokiye aur ek naya session shuru kijiye',
  'Run every cell you have run before, in course order? Cells that call the model will call it again.':
    'Pehle chalaya har cell course ke order mein dobara chalayein? Jo cells model ko call karte hain woh use phir se call karenge.',
  'Python stopped. Press Run on any cell to start again.':
    'Python ruk gaya. Phir shuru karne ke liye kisi bhi cell par Run dabaiye.',
  'Notebook':
    'Notebook',
  'Every code block on this page runs here. Press <strong>Run</strong> (or Shift+Enter) on each one, top to bottom. You can edit the code first; <em>Undo edits</em> puts the chapter’s version back. One Python session runs the whole course, so what you define in one chapter is there in the next. After a reload, press <strong>Restore</strong>.':
    'Is page ka har code block yahin chalta hai. Har ek par upar se neeche <strong>Run</strong> (ya Shift+Enter) dabaiye. Pehle code badal bhi sakte hain; <em>Undo edits</em> chapter wala version wapas le aata hai. Poora course ek hi Python session mein chalta hai, isliye ek chapter mein jo define karte hain woh agle mein milta hai. Reload ke baad <strong>Restore</strong> dabaiye.',
  'Loading…':
    'Load ho raha hai…',
  'No files yet. Add your documents: .txt and .md open as text; a scanned page or photo opens as bytes.':
    'Abhi koi file nahi. Apne documents jodiye: .txt aur .md text ki tarah khulti hain; scanned page ya photo bytes ki tarah khulti hai.',
  'Download':
    'Download',
  'too large (25 MB at most).':
    'bahut badi hai (zyada se zyada 25 MB).',
  'Add files':
    'Files jodiye',
  'Show files':
    'Files dikhaiye',
  'Hide files':
    'Files chhupaiye',
  'Files':
    'Files',
  'Kept in this browser. Open them by name: <code>open("policy.txt").read()</code>':
    'Isi browser mein rehti hain. Naam se kholiye: <code>open("policy.txt").read()</code>',
  'Your cell':
    'Aapka cell',
  'Add a cell':
    'Ek cell jodiye',
  'Hands-on, in this page':
    'Hands-on, isi page mein',
  'Workbench':
    'Workbench',
  'A notebook that needs nothing installed and no other window. It shares one Python session with every chapter, so the functions you built there are here. Use it for the longer “Build it” work, for your own experiments, and to try the model without code in the <a href="#/playground">Playground</a>.':
    'Ek notebook jise na kuch install karna hai, na koi doosri window. Yeh har chapter ke saath ek hi Python session share karta hai, isliye wahan banaye functions yahan milte hain. Ise lambe “Build it” kaam ke liye, apne experiments ke liye use kijiye, aur bina code ke model try karne ke liye <a href="#/playground">Playground</a> hai.',
  'Write Python in the cells below and press <strong>Run</strong> (or Shift+Enter). <code>client</code> is ready-made from your <a href="#/setup">Connect</a> settings. Files you add appear in the folder your code starts in.':
    'Neeche ke cells mein Python likhiye aur <strong>Run</strong> (ya Shift+Enter) dabaiye. <code>client</code> aapki <a href="#/setup">Connect</a> settings se pehle se bana hai. Jo files aap jodte hain woh usi folder mein aati hain jahan se aapka code shuru hota hai.',
  'Download every cell I have run (.ipynb)':
    'Mere chalaye saare cells download kijiye (.ipynb)',
  'Opens in Jupyter, VS Code or Colab, for a portfolio or a code review.':
    'Jupyter, VS Code ya Colab mein khulta hai, portfolio ya code review ke liye.',
  'Connected':
    'Connected',
  'through this site':
    'is site ke through',
  'direct from this page':
    'is page se seedhe',
  'the site’s key':
    'site ki key',
  'Not connected':
    'Connect nahi hai',
  'Change':
    'Badliye',
  'Connect':
    'Connect',
  'Provider':
    'Provider',
  'recommended':
    'recommended',
  'Choose who runs the model':
    'Chuniye ki model kaun chalayega',
  'your API key':
    'aapki API key',
  'API key':
    'API key',
  'Show':
    'Dikhaiye',
  'Hide':
    'Chhupaiye',
  'Save key':
    'Key save kijiye',
  'Forget key':
    'Key bhool jaiye',
  'Saved in this browser.':
    'Is browser mein save ho gayi.',
  'Paste your key':
    'Apni key paste kijiye',
  'Get one at':
    'Yahan se lijiye:',
  'the one step that happens on another site, once.':
    'yahi ek step doosri site par hota hai, sirf ek baar.',
  'Kept only in this browser. It is not part of the progress that syncs to your account, and it is sent only with your own requests: through this site’s relay, or straight to the provider.':
    'Sirf isi browser mein rehti hai. Yeh us progress ka hissa nahi jo aapke account mein sync hoti hai, aur sirf aapki apni requests ke saath jaati hai: is site ke relay se, ya seedhe provider ko.',
  'Run the test call':
    'Run the test call',
  'Calling the model…':
    'Model ko call kar rahe hain…',
  'tokens in':
    'tokens andar',
  'out':
    'bahar',
  'Check it works':
    'Check kijiye ki chalta hai',
  'You should see <code>setup works</code>, the model’s name, the tokens it read and wrote, and how long it took.':
    'Aapko <code>setup works</code>, model ka naam, usne kitne tokens padhe aur likhe, aur kitna time laga, yeh dikhna chahiye.',
  'Models and routing':
    'Models and routing',
  'The course’s code names NVIDIA’s models. On another provider each call uses the models below instead, and the output says so.':
    'Course ke code mein NVIDIA ke models ke naam hain. Doosre provider par har call unki jagah neeche wale models use karti hai, aur output yeh batata hai.',
  'this provider has none':
    'is provider ke paas nahi hai',
  'How requests leave the page':
    'Requests page se kaise jaati hain',
  'API base address':
    'API base address',
  'Everyday model':
    'Roz ka model',
  'Stronger model':
    'Zyada taakatwar model',
  'Embedding model':
    'Embedding model',
  'Vision model':
    'Vision model',
  'Automatic: this site’s relay if there is one, else direct':
    'Automatic: site ka relay ho toh woh, warna seedhe',
  'Always through this site':
    'Hamesha is site ke through',
  'Always direct from this page':
    'Hamesha is page se seedhe',
  'Playground':
    'Playground',
  'Talk to the model without writing code. Every reply comes with its receipt: the tokens it read, the tokens it wrote and the seconds it took. Use it wherever a chapter says to try a prompt, and use <strong>Mark a test set</strong> to score a list of messages.':
    'Bina code likhe model se baat kijiye. Har jawaab ke saath uski receipt aati hai: usne kitne tokens padhe, kitne likhe aur kitne second lage. Jahan bhi chapter prompt try karne ko kahe, ise use kijiye, aur messages ki list ko score karne ke liye <strong>Mark a test set</strong> use kijiye.',
  'System prompt (optional): the standing instruction the user never sees':
    'System prompt (optional): woh pakki instruction jo user kabhi nahi dekhta',
  'Your message':
    'Aapka message',
  'Everyday':
    'Roz ka',
  'Stronger':
    'Zyada taakatwar',
  'Vision':
    'Vision',
  'another model name (optional)':
    'doosre model ka naam (optional)',
  'Send':
    'Bhejiye',
  'Send the same message five times, to see how much the answer varies':
    'Ek hi message paanch baar bhejiye, taaki dikhe ki jawaab kitna badalta hai',
  'Send 5 times':
    '5 baar bhejiye',
  'Clear':
    'Clear',
  'You':
    'Aap',
  'Model':
    'Model',
  'System':
    'System',
  'in':
    'andar',
  'first words':
    'pehle words',
  'whole answer':
    'poora jawaab',
  'System prompt':
    'System prompt',
  'Message':
    'Message',
  'Temperature':
    'Temperature',
  'Most tokens out':
    'Zyada se zyada tokens bahar',
  'Send the earlier turns again with each message — the way chat apps fake memory':
    'Har message ke saath pichhli baatein dobara bhejiye — chat apps aise hi yaaddasht ka bhram banate hain',
  'Keep the conversation':
    'Keep the conversation',
  'Stream the answer':
    'Stream the answer',
  'Send each message to a second model too, and show the two answers side by side':
    'Har message ek doosre model ko bhi bhejiye, aur dono jawaab saath-saath dikhaiye',
  'Compare with':
    'Compare with',
  'One test message per line. Optionally add the right answer after two bars, e.g. “Call me on 98765 43210 || yes”':
    'Har line mein ek test message. Chahein toh do bars ke baad sahi jawaab likhiye, jaise “Call me on 98765 43210 || yes”',
  'The instruction sent before each message, e.g. “Does this message contain a phone number? Answer yes or no.”':
    'Har message se pehle bheji jaane wali instruction, jaise “Does this message contain a phone number? Answer yes or no.”',
  'Run them all':
    'Sab chalaiye',
  'Right answer':
    'Sahi jawaab',
  'Model said':
    'Model ne kaha',
  'Your mark':
    'Aapka mark',
  'marked':
    'mark kiye',
  'Mark each one yourself; where you gave the right answer, the obvious matches are pre-marked.':
    'Har ek ko khud mark kijiye; jahan aapne sahi jawaab diya tha, wahan seedhe match pehle se mark hain.',
  'Mark a test set':
    'Mark a test set',
  'Your first evaluation: a small job, ten messages, the right answer for each, and a score out of ten. Write the messages below, run them, and mark each reply yourself.':
    'Aapka pehla evaluation: ek chhota kaam, das messages, har ek ka sahi jawaab, aur das mein se score. Neeche messages likhiye, unhe chalaiye, aur har jawaab ko khud mark kijiye.',
  'Instruction':
    'Instruction',
  'Test messages':
    'Test messages',
  'Earlier runs':
    'Pichhle runs',
  'On your own computer':
    'Aapke apne computer par',
  'Open on its own':
    'Alag se kholiye',
  'Write and run your own code for this chapter here. It shares the session with the cells above, so <code>client</code> and everything you defined are ready. Bigger experiments have the <a href="#/workbench">Workbench</a>; prompts without code have the <a href="#/playground">Playground</a>.':
    'Is chapter ka apna code yahin likhiye aur chalaiye. Yeh upar ke cells ke saath session share karta hai, isliye <code>client</code> aur aapki define ki hui har cheez taiyaar hai. Bade experiments ke liye <a href="#/workbench">Workbench</a> hai; bina code ke prompts ke liye <a href="#/playground">Playground</a>.',
  'Your notebook for this chapter':
    'Is chapter ka aapka notebook',
  'If something goes wrong':
    'Agar kuch galat ho jaaye',
  'Connect a model':
    'Ek model connect kijiye',
  'Workbench: run code here':
    'Workbench: code yahin chalaiye',
  'Playground: try prompts':
    'Playground: prompts try kijiye',
  'Before Chapter 1':
    'Chapter 1 se pehle',
  '~10 min, once':
    '~10 min, ek baar',
  'In one sentence':
    'Ek sentence mein',
  'Error':
    'Error',
  'Likely cause':
    'Shaayad wajah',
  'Fix':
    'Fix',
  'cell run before':
    'cell pehle chala',
  'cells run before':
    'cells pehle chale',
  'Starting Python (about 10 MB, downloaded once)…':
    'Python start ho raha hai (lagbhag 10 MB, ek hi baar download)…',
  'Starting Python…':
    'Python start ho raha hai…',
  'Free, no card. The model the course was written against.':
    'Free, card nahi chahiye. Course isi model ke saath likha gaya tha.',
  'Free tier with a Google account. Works on every copy of the site.':
    'Google account ke saath free tier. Site ki har copy par chalta hai.',
  'One key for many vendors’ models. Pay as you go; some models are free.':
    'Kai vendors ke models ke liye ek key. Jitna use utna paisa; kuch models free hain.',
  'Paid. Small models cost fractions of a cent per call.':
    'Paid. Chhote models har call par cent ka bhi chhota hissa lete hain.',
  'Free tier, very fast open models.':
    'Free tier, bahut tez open models.',
  'Any provider with the same request format. Calls go direct.':
    'Isi request format wala koi bhi provider. Calls seedhe jaati hain.',
  'This copy of the site has no relay behind it. Choose a provider that accepts direct calls, such as Gemini.':
    'Site ki is copy ke peeche koi relay nahi hai. Aisa provider chuniye jo seedhi calls leta ho, jaise Gemini.',
  'NVIDIA Build does not accept calls straight from a web page. Use the main site, where the relay runs, or choose Gemini.':
    'NVIDIA Build web page se seedhi calls nahi leta. Main site use kijiye, jahan relay chalta hai, ya Gemini chuniye.',
  'Enter the API’s base address.':
    'API ka base address likhiye.',
  'Name the model to use, under Models and routing.':
    'Models and routing mein use hone wale model ka naam likhiye.',
  'Paste your key, or sign in to use the key this site provides.':
    'Apni key paste kijiye, ya is site ki di hui key use karne ke liye sign in kijiye.',
  'Paste your API key.':
    'Apni API key paste kijiye.',
  'A name this cell uses has not been defined in this session. Run the cells above it first, or press Restore if you ran them before a reload.':
    'Is cell ka koi naam is session mein define nahi hua. Pehle iske upar ke cells chalaiye, ya agar reload se pehle chalaye the toh Restore dabaiye.',
  'The model is not connected, or refused the key. Open the Connect page.':
    'Model connect nahi hai, ya usne key mana kar di. Connect page kholiye.',
  'The request did not get through. The Connect page has a Test button.':
    'Request pahunchi nahi. Connect page par ek Test button hai.',
  'Usually a model name your provider does not have. The Connect page lists the models it uses.':
    'Aksar aisa model naam jo aapke provider ke paas nahi hai. Connect page dikhata hai ki kaun se models use ho rahe hain.',
  'Too many requests at once. Wait a few seconds, or add time.sleep(2) inside the loop.':
    'Ek saath bahut zyada requests. Kuch second rukiye, ya loop ke andar time.sleep(2) jodiye.',
  'That library is not in the browser. numpy, pandas, scikit-learn, regex and other common ones load by themselves; pure-Python packages install with !pip install name.':
    'Woh library browser mein nahi hai. numpy, pandas, scikit-learn, regex jaisi common libraries khud load ho jaati hain; pure-Python packages !pip install naam se install hote hain.',
  'Python could not read the code. Look for a missing bracket or quote, or text that still needs filling in.':
    'Python code padh nahi paaya. Koi chhoota bracket ya quote dhoondhiye, ya aisa text jo abhi bharna baaki hai.',
  'Python is downloaded from cdn.jsdelivr.net the first time. If your network blocks it, the cells cannot run.':
    'Pehli baar Python cdn.jsdelivr.net se download hota hai. Agar aapka network use block karta hai, toh cells nahi chal sakte.',
  /* going deeper (src/data/reading.js) */
  'Go deeper: the real world and the research':
    'Aur gehraai mein: asli duniya aur research',
  'In the real world':
    'Asli duniya mein',
  'Research':
    'Research',
  /* Sheets and the recorder */
  'Untitled sheet':
    'Bina naam ki sheet',
  'Sheet name':
    'Sheet ka naam',
  'Replace this sheet with the file?':
    'Is sheet ki jagah file daal dein?',
  'Row':
    'Row',
  'Column':
    'Column',
  'Last row':
    'Aakhri row',
  'Open a CSV':
    'CSV kholiye',
  'Download CSV':
    'CSV download kijiye',
  'The file to keep in your repository':
    'Woh file jo aapke repository mein rahegi',
  'Delete sheet':
    'Sheet hataiye',
  'Delete this sheet?':
    'Yeh sheet hata dein?',
  'Type a value, or a formula that starts with <code>=</code>: <code>=B2*C2</code>, <code>=SUM(D2:D20)</code>, <code>=AVERAGE(…)</code>, <code>=ROUND(B2/C2, 2)</code>. Enter moves down. Your code can read this sheet as':
    'Koi value likhiye, ya <code>=</code> se shuru hone wala formula: <code>=B2*C2</code>, <code>=SUM(D2:D20)</code>, <code>=AVERAGE(…)</code>, <code>=ROUND(B2/C2, 2)</code>. Enter neeche le jaata hai. Aapka code is sheet ko is naam se padh sakta hai:',
  'Sheets':
    'Sheets',
  'The spreadsheet work in the course happens here: the answer key, the cost model, the market size, the sprint plan. Sheets are saved with your progress, your notebook code can read them as CSV files, and <em>Download CSV</em> gives you the file for your repository.':
    'Course ka spreadsheet wala kaam yahin hota hai: answer key, cost model, market size, sprint plan. Sheets aapki progress ke saath save hoti hain, aapka notebook code unhe CSV files ki tarah padh sakta hai, aur <em>CSV download kijiye</em> se aapko repository ke liye file mil jaati hai.',
  'New sheet':
    'Nayi sheet',
  'Answer key from the ten starter sentences':
    'Das starter sentences se answer key',
  'rows':
    'rows',
  'No sheets yet. Start one above, or from a chapter that asks for a spreadsheet.':
    'Abhi koi sheet nahi. Upar se ek shuru kijiye, ya kisi aise chapter se jo spreadsheet maangta hai.',
  'Sheets: spreadsheets here':
    'Sheets: spreadsheets yahin',
  'Your sheet for this chapter':
    'Is chapter ki aapki sheet',
  'Record yourself':
    'Khud ko record kijiye',
  'Where this chapter says “spreadsheet”, use this one. It is saved with your progress, your notebook can read it, and <a href="#/sheets">Sheets</a> keeps all of them.':
    'Jahan yeh chapter “spreadsheet” kahe, yeh wali use kijiye. Yeh aapki progress ke saath save hoti hai, aapka notebook ise padh sakta hai, aur <a href="#/sheets">Sheets</a> mein saari rehti hain.',
  'Where this chapter says to answer out loud and record yourself, do it here. Keep an eye on the clock, then listen back.':
    'Jahan yeh chapter zor se jawaab dekar khud ko record karne ko kahe, woh yahin kijiye. Ghadi par nazar rakhiye, phir sun kar dekhiye.',
  'Open these ten as your answer key, in Sheets':
    'In das ko apni answer key ki tarah Sheets mein kholiye',
  'Kept in this browser. Open them by name: <code>open("policy.txt").read()</code>. Your <a href="#/sheets">Sheets</a> are in <code>sheets/</code>.':
    'Isi browser mein rehti hain. Naam se kholiye: <code>open("policy.txt").read()</code>. Aapki <a href="#/sheets">Sheets</a> <code>sheets/</code> mein hain.',
  'Record':
    'Record',
  'Stop':
    'Stop',
  'This browser cannot keep recordings.':
    'Yeh browser recordings nahi rakh sakta.',
  'Delete this take?':
    'Yeh take hata dein?',
  'Take':
    'Take',
  'This browser cannot record audio. Try Chrome, Edge or Safari.':
    'Yeh browser audio record nahi kar sakta. Chrome, Edge ya Safari try kijiye.',
  'The microphone was not allowed. Allow it for this site in the browser’s address bar, then press Record again.':
    'Microphone ki ijaazat nahi mili. Browser ke address bar mein is site ko ijaazat dijiye, phir Record dobara dabaiye.',
  'The take could not be saved in this browser. Download it before you leave.':
    'Yeh take is browser mein save nahi ho paaya. Jaane se pehle use download kar lijiye.',
  'Recording. Answer out loud, as you would in the room.':
    'Recording chal rahi hai. Zor se jawaab dijiye, jaise interview ke kamre mein dete.',
  'Saved. Listen back before you read the model answer.':
    'Save ho gaya. Model answer padhne se pehle sun kar dekhiye.',
  'Recordings stay in this browser. They are never uploaded and never part of the progress that syncs.':
    'Recordings isi browser mein rehti hain. Woh kabhi upload nahi hotin aur sync hone wali progress ka hissa nahi hotin.'
});
