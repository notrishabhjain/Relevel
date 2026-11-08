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
  '<strong>You don’t need to install anything.</strong> Everything runs in your browser, on these pages. That includes the tools built into each chapter and the code in the chapters that have code: it runs right here, with a <strong>Run</strong> button under each block. The one thing you bring from outside is a free API key, which takes about ten minutes to get, once. The setup page walks you through it.':
    '<strong>Aapko kuch install nahi karna.</strong> Sab kuch aapke browser mein, inhi pages par chalta hai. Isme har chapter ke andar bane tools bhi aate hain aur code wale chapters ka code bhi: woh yahin chalta hai, har block ke neeche ek <strong>Run</strong> button ke saath. Bahar se aapko sirf ek free API key laani hai, jisme lagbhag 10 minute lagte hain, sirf ek baar. Setup page har step mein aapka saath deta hai.',
  'Written for the requirements and the plan, plus a no-code prototype. The <a href="#/playground">Playground</a> in this app is enough for a first version; Google AI Studio or Lovable can turn it into a clickable screen. No Python needed.':
    'Requirements aur plan likhna hai, saath mein ek no-code prototype. Pehle version ke liye is app ka <a href="#/playground">Playground</a> kaafi hai; Google AI Studio ya Lovable use ek clickable screen bana sakte hain. Python ki zaroorat nahi.',
  'Build a clickable prototype. It is a page with a text box, a button and a result area that shows the text with personal details replaced. The quickest first version is the <a href="#/playground">Playground</a> in this app: the system prompt is your detector, and the message box is the text box. For a screen you can hand to a user, Google AI Studio or Lovable will generate one. The detection can be fake at this stage, because you are testing the screen, not the accuracy.':
    'Ek clickable prototype banaiye. Yeh ek page hai jismein ek text box, ek button aur ek result area hai jo personal details replace karke text dikhata hai. Sabse jaldi banne wala pehla version is app ka <a href="#/playground">Playground</a> hai: system prompt aapka detector hai, aur message box aapka text box. Agar user ko dene laayak screen chahiye, toh Google AI Studio ya Lovable ek bana dega. Is stage par detection nakli ho sakta hai, kyunki aap screen test kar rahe hain, accuracy nahi.',
  'Working prototype: the Playground, Lovable or Google AI Studio':
    'Working prototype: Playground, Lovable ya Google AI Studio',
  'The attention viewer embedded in this chapter, for the attention demo. Write what you saw in the notes box below.':
    'Attention demo ke liye is chapter mein laga attention viewer. Jo dekha woh neeche wale notes box mein likhiye.',
  'Take starter sentences 1, 2 and 3 from the project page. They are the same kind of message in English, Hindi and Hinglish. Paste each one in turn into the attention viewer in this chapter.':
    'Project page se starter sentences 1, 2 aur 3 lijiye. Yeh English, Hindi aur Hinglish mein ek hi tarah ka message hain. Har sentence ko baari-baari se is chapter ke attention viewer mein paste kijiye.',
  'Run starter sentences 1 to 8 through two different AI models in the <a href="#/playground">Playground</a>. Fill in <em>Compare with</em>, so that each message goes to both. Use the same instruction for both: “List every piece of personal information in this sentence.”':
    'Starter sentences 1 se 8 ko <a href="#/playground">Playground</a> mein do alag AI models se chalaiye. <em>Compare with</em> bhar dijiye, taaki har message dono ke paas jaaye. Dono ke liye ek hi instruction dijiye: “List every piece of personal information in this sentence.”',
  'You can see attention for yourself, right here. The viewer below runs a small real model, GPT-2, inside your browser. Type a sentence, then pick a word to see which earlier words it pays attention to.':
    'Aap attention khud dekh sakte hain, yahin. Neeche wala viewer ek chhota asli model, GPT-2, aapke browser ke andar chalata hai. Ek sentence likhiye, phir koi word chuniye aur dekhiye ki woh pehle ke kin words par dhyaan deta hai.',
  'Some browsers and office networks block the embedded viewer. Try Chrome, or open the viewer on its own with the link under it. It shows attention without any setup.':
    'Kuch browsers aur office networks embedded viewer ko block kar dete hain. Chrome try kijiye, ya uske neeche wale link se viewer ko alag se kholiye. Woh bina kisi setup ke attention dikhata hai.',
  'Open the <a href="#/playground">Playground</a> and tick <em>Keep the conversation</em>. Tell it a made-up fact, such as “My company’s refund window is 17 days.” Ask it about the refund window. Then press <em>Clear</em>, which starts a brand-new conversation, and ask again.':
    '<a href="#/playground">Playground</a> kholiye aur <em>Keep the conversation</em> tick kijiye. Use ek banayi hui baat bataiye, jaise “Meri company ki refund window 17 din ki hai.” Refund window ke baare mein poochiye. Phir <em>Clear</em> dabaiye, jisse ek bilkul nayi conversation shuru hoti hai, aur dobara poochiye.',
  'Run three of your capstone test cases through two different models, for example one closed and one open-weight model. The <a href="#/playground">Playground</a> does this side by side when you fill in <em>Compare with</em>. Record which gave better answers, how long each took, and what each cost.':
    'Apne capstone ke teen test cases do alag models se chalaiye, jaise ek closed aur ek open-weight model. <em>Compare with</em> bharne par <a href="#/playground">Playground</a> yeh saath-saath kar deta hai. Note kijiye ki kisne behtar jawaab diye, har ek ko kitna time laga, aur har ek ki cost kitni thi.',
  'To send your own questions to a real model, you need one free thing: an API key. Getting it and pasting it in takes about ten minutes, once. The code then runs right here, on these pages: <a href="#/setup">Connect a model</a>.':
    'Kisi asli model ko apne sawaal bhejne ke liye aapko ek free cheez chahiye: ek API key. Use laane aur yahan paste karne mein lagbhag 10 minute lagte hain, sirf ek baar. Uske baad code yahin, inhi pages par chalta hai: <a href="#/setup">Ek model connect kijiye</a>.',
  'Press <strong>Run</strong> on the first code block in this chapter before you read anything else. Make a guess first: is the model finding an answer somewhere, or writing one?':
    'Kuch aur padhne se pehle is chapter ke pehle code block par <strong>Run</strong> dabaiye. Pehle andaaza lagaiye: model kahin se jawaab dhoondh raha hai, ya khud likh raha hai?',
  'Your notebook for this chapter, at the end of the page. The numbers you print are what counts. The notes box below is for a short reflection, not a long write-up.':
    'Is chapter ka aapka notebook, page ke aakhir mein. Jo numbers aap print karte hain, wahi asli cheez hain. Neeche ka notes box ek chhote reflection ke liye hai, lamba likhne ke liye nahi.',
  'In your notebook for this chapter, send starter sentence 7 (the one with Amit Sharma, the PAN and the HDFC account) to the model with the instruction: “List every piece of personal information in this message.”':
    'Is chapter ke apne notebook mein starter sentence 7 (jisme Amit Sharma, PAN aur HDFC account hai) model ko yeh instruction dekar bhejiye: “List every piece of personal information in this message.”',
  'A model connected on the setup page':
    'Setup page par ek model connect ho',
  'The code in this chapter runs right here in the page. Press <strong>Run</strong> under each block, top to bottom. Before your first cell runs, the page does the three warm-up steps from <a href="#/setup">Setup</a> for you: the key, the library and the client. After each idea in this chapter, you’ll find a little code that shows it. Run each block before you read on.':
    'Is chapter ka code yahin page mein chalta hai. Har block ke neeche <strong>Run</strong> dabaiye, upar se neeche. Aapka pehla cell chalne se pehle page <a href="#/setup">Setup</a> ke teeno warm-up steps khud kar deta hai: key, library aur client. Is chapter mein har idea ke baad thoda code aayega jo use dikhata hai. Aage padhne se pehle har block ko run kijiye.',
  'You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Run the cells above it in order, or press <strong>Restore</strong> in the notebook bar if you ran them before a reload. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.':
    'Aapne aisa cell chalaya jise kisi pichhle cell ki cheez chahiye, lekin woh pichhla cell abhi chala hi nahi. Uske upar ke cells order mein chalaiye, ya agar aapne unhe reload se pehle chalaya tha toh notebook bar mein <strong>Restore</strong> dabaiye. Notebook mein sabse common dikkat yahi hai. Yeh sabke saath hota hai, aur iska matlab yeh nahi ki aapka code galat hai.',
  'The code imports a library this page doesn’t have. <code>openai</code> is built in, and numpy and the other common libraries load by themselves the first time a cell imports them. A library that needs PyTorch can’t run inside a web page, and the chapter says so where that happens.':
    'Code ek aisi library import kar raha hai jo is page mein nahi hai. <code>openai</code> built-in hai, aur numpy jaisi common libraries pehli baar import hote hi khud load ho jaati hain. Jis library ko PyTorch chahiye woh web page ke andar nahi chal sakti, aur jahan aisa hota hai wahan chapter bata deta hai.',
  'Use your notebook for this chapter for the calls and the token counts. Write the final sentence in the notes box below.':
    'Calls aur token counts ke liye is chapter ka apna notebook use kijiye. Aakhri sentence neeche ke notes box mein likhiye.',
  'In your notebook for this chapter, write a five-message conversation using starter sentences 1, 3, 6, 7 and 9, in that order, as the customer’s messages. Send them one at a time, each time sending all the earlier messages as well.':
    'Is chapter ke apne notebook mein starter sentences 1, 3, 6, 7 aur 9 ko isi order mein customer ke messages banakar paanch message ki ek conversation likhiye. Unhe ek-ek karke bhejiye, aur har baar saare pichhle messages bhi saath bhejiye.',
  'The cells here share one Python session with Chapter 1, so <code>response</code> and everything else you made there are still defined. You’ll need the usage code from the last chapter. This time you’ll run it in a loop and watch the numbers grow.':
    'Yahan ke cells Chapter 1 ke saath ek hi Python session share karte hain, isliye <code>response</code> aur wahan banayi har cheez abhi bhi defined hai. Aapko pichhle chapter ka usage code chahiye hoga. Is baar aap use ek loop mein chalayenge aur numbers ko badhte dekhenge.',
  'Your notebook for this chapter. Write the system prompt as the system message and test it there. You’ll use the same prompt again in Chapter 2.1.':
    'Is chapter ka aapka notebook. System prompt ko system message ki tarah likhiye aur wahin test kijiye. Wahi prompt aap Chapter 2.1 mein dobara use karenge.',
  'The code runs right here: press <strong>Run</strong> under each block, in order. The page does the warm-up from <a href="#/setup">Setup</a> before your first cell. You’ll make three calls in this chapter, and each one tests the idea just before it.':
    'Code yahin chalta hai: har block ke neeche order mein <strong>Run</strong> dabaiye. Aapke pehle cell se pehle page <a href="#/setup">Setup</a> wala warm-up khud kar deta hai. Is chapter mein aap teen calls karenge, aur har call usse pehle wale idea ko test karti hai.',
  'Your notebook for this chapter. Write and run the prompt there. The notes box below is for what the other person said when they tried it without help.':
    'Is chapter ka aapka notebook. Prompt wahin likhiye aur chalaiye. Neeche ka notes box isliye hai ki doosre insaan ne bina madad ke use try kiya toh unhone kya kaha, woh wahan likh sakein.',
  'In your notebook for this chapter, run your Chapter 2 system prompt on starter sentences 4, 5 and 8 to see where it is weakest.':
    'Is chapter ke apne notebook mein Chapter 2 wala system prompt starter sentences 4, 5 aur 8 par chalaiye, taaki dikhe ki woh kahan sabse kamzor hai.',
  'The code runs right here, in order. Keep the system prompt from the Chapter 2 capstone to hand: it is still in your notebook session, or press <strong>Restore</strong> after a reload. You’ll begin by testing it on a new kind of task.':
    'Code yahin, order mein chalta hai. Chapter 2 ke capstone wala system prompt paas rakhiye: woh abhi bhi aapke notebook session mein hai, ya reload ke baad <strong>Restore</strong> dabaiye. Aap shuruaat usi ko ek naye tarah ke task par test karke karenge.',
  'Your notebook for this chapter, for scoring. The answer key itself is a spreadsheet that you save in your repository.':
    'Scoring ke liye is chapter ka aapka notebook. Answer key khud ek spreadsheet hai jo aap apne repository mein save karenge.',
  'Bring the four prompt versions from the last chapter. They are still in your notebook session, or press <strong>Restore</strong> after a reload. You’ll find out which one is actually better, and it may not be the one that felt better.':
    'Pichhle chapter ke chaaron prompt versions saath rakhiye. Woh abhi bhi aapke notebook session mein hain, ya reload ke baad <strong>Restore</strong> dabaiye. Aap pata lagayenge ki asal mein kaun sa behtar hai, aur ho sakta hai woh wahi na ho jo aapko behtar laga tha.',
  'Your notebook for this chapter. Build and measure the sorter there. Write the numbers for each category in the notes box below.':
    'Is chapter ka aapka notebook. Sorter wahin banaiye aur measure kijiye. Har category ke numbers neeche notes box mein likhiye.',
  'The code runs right here, in order. Bring twenty real examples of something at your work that gets sorted into categories. It could be tickets by type, documents by department or requests by urgency. Paste them into a cell, or add them as a file.':
    'Code yahin, order mein chalta hai. Apne kaam ki koi aisi cheez ke bees asli examples le aaiye jo categories mein sort hoti hai. Jaise type ke hisaab se tickets, department ke hisaab se documents, ya urgency ke hisaab se requests. Unhe ek cell mein paste kijiye, ya file ki tarah jodiye.',
  'Your notebook for this chapter. Build the summary and its fact check there. Write what the check caught in the notes box below.':
    'Is chapter ka aapka notebook. Summary aur uska fact check wahin banaiye. Check ne kya pakda, yeh neeche notes box mein likhiye.',
  'Bring one real document with something important buried in it. It could be a deadline, an exception, a liability or a number that someone would be upset to miss. Add it with the Files panel, or paste it into a cell.':
    'Ek asli document le aaiye jisme koi zaroori cheez chhupi ho. Woh deadline ho sakti hai, koi exception, koi liability, ya aisa number jise miss karne par koi naraaz ho jaye. Use Files panel se jodiye, ya ek cell mein paste kijiye.',
  'Your notebook for this chapter, for the code and the comparison, next to your hand-scored results from Chapter 4. Write up the comparison in the notes box below.':
    'Is chapter ka aapka notebook, code aur comparison ke liye, Chapter 4 ke haath se score kiye results ke saath. Comparison ko neeche notes box mein likhiye.',
  'In your notebook for this chapter, turn your plain-word rules for PAN, Aadhaar, mobile number and email into code. Each one is a short pattern. Run them over the twelve rows of the answer key and print what each finds.':
    'Is chapter ke apne notebook mein PAN, Aadhaar, mobile number aur email ke saade-words wale rules ko code mein badaliye. Har ek ek chhota pattern hai. Unhe answer key ki baarah rows par chalaiye aur print kijiye ki har ek kya dhoondhta hai.',
  'The code runs right here, top to bottom, and the page does the warm-up from <a href="#/setup">Setup</a> for you. Keep the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.':
    'Code yahin, upar se neeche chalta hai, aur <a href="#/setup">Setup</a> wala warm-up page khud kar deta hai. Chapter 3 ke bees cards aur Chapter 4 ke teen mushkil sawaal paas rakhiye. Part I ka yeh sabse lamba hands-on chapter hai, isliye ise ek baar mein poora baith kar kijiye.',
  'Pen and paper for the thinking, plus the notebook for the measurements. Write the note itself in the notes box below.':
    'Sochne ke liye pen aur paper, aur naapne ke liye notebook. Note khud neeche notes box mein likhiye.',
  'You need a pen and paper, plus the notebook for the measurements. Bring the document from Chapter 3. The <code>retrieve</code> function from Chapter 5 is still in your session, or press <strong>Restore</strong> after a reload.':
    'Aapko pen aur paper chahiye, aur naapne ke liye notebook. Chapter 3 ka document saath rakhiye. Chapter 5 ka <code>retrieve</code> function abhi bhi aapke session mein hai, ya reload ke baad <strong>Restore</strong> dabaiye.',
  'Written only. This capstone is not a build. Use the notebook for the numbers, and write the page in the notes box below.':
    'Sirf likhna hai. Yeh capstone koi build nahi hai. Numbers ke liye notebook use kijiye, aur page neeche wale notes box mein likhiye.',
  'Your <code>embed</code>, <code>cosine</code>, <code>chunks</code> and <code>chunk_vecs</code> from Chapter 5 are already defined, because one Python session runs the whole course. If you reloaded since, press <strong>Restore</strong>, then run the cell that makes <code>chunk_vecs</code> again. Nothing in this chapter is new. You are only joining things you already built.':
    'Chapter 5 ke aapke <code>embed</code>, <code>cosine</code>, <code>chunks</code> aur <code>chunk_vecs</code> pehle se defined hain, kyunki poora course ek hi Python session mein chalta hai. Agar beech mein reload kiya tha, toh <strong>Restore</strong> dabaiye, phir <code>chunk_vecs</code> banane wala cell dobara chalaiye. Is chapter mein kuch bhi naya nahi hai. Aap sirf woh cheezein jod rahe hain jo aap pehle bana chuke hain.',
  'Written only. No new code. Use the notebook to check the numbers, then write the page in the notes box below.':
    'Sirf likhna hai. Koi naya code nahi. Numbers check karne ke liye notebook use kijiye, phir page neeche wale notes box mein likhiye.',
  'There is no new setup. Your assembled system from Chapter 7 is in the notebook session; press <strong>Restore</strong> after a reload. Keep the findings page from that capstone next to you.':
    'Koi naya setup nahi hai. Chapter 7 ka aapka assembled system notebook session mein hai; reload ke baad <strong>Restore</strong> dabaiye. Us capstone ka findings page apne paas rakhiye.',
  'Your notebook for this chapter. Run both versions and count the failures in code. Write the comparison in the notes box below.':
    'Is chapter ka aapka notebook. Dono versions chalaiye aur code mein failures ginye. Comparison neeche wale notes box mein likhiye.',
  'The code runs right here: press <strong>Run</strong> under each block, in order.':
    'Code yahin chalta hai: har block ke neeche order mein <strong>Run</strong> dabaiye.',
  'Keep using the notebook. Rebuild and rerun the extractor there. Write what your schema still cannot catch in the notes box below.':
    'Notebook hi use karte rahiye. Extractor ko wahin dobara banaiye aur chalaiye. Aapka schema ab bhi kya nahi pakad sakta, yeh neeche wale notes box mein likhiye.',
  'Keep using the notebook: the schema from the last chapter is still in the session. You’ll also need a document that is missing the one detail people most want to see.':
    'Notebook hi use karte rahiye: pichhle chapter ka schema abhi bhi session mein hai. Aapko ek aisa document bhi chahiye jisme woh ek detail missing ho jo log sabse zyada dekhna chahte hain.',
  'Your notebook for this chapter. Build and break the rule-keeper there. Write the worst-case paragraph in the notes box below.':
    'Is chapter ka aapka notebook. Rule-keeper ko wahin banaiye aur todiye. Worst-case paragraph neeche wale notes box mein likhiye.',
  'Your notebook for this chapter, for the measurements. Write the budget in the notes box below.':
    'Is chapter ka aapka notebook, measurements ke liye. Budget neeche wale notes box mein likhiye.',
  'The code runs right here, in order. Have your Chapter 6 answer key ready. Your Chapter 7 <code>rag_answer</code> function is still in the session; press <strong>Restore</strong> after a reload.':
    'Code yahin, order mein chalta hai. Apna Chapter 6 ka answer key taiyaar rakhiye. Chapter 7 ka aapka <code>rag_answer</code> function abhi bhi session mein hai; reload ke baad <strong>Restore</strong> dabaiye.',
  'Your notebook for this chapter, to run both groups and record the four results. Write the routing rule in the notes box below.':
    'Is chapter ka aapka notebook, dono groups chalane aur chaaron results record karne ke liye. Routing rule neeche notes box mein likhiye.',
  'The code runs right here, in order. Then pick a model that can reason: <code>client.models.list()</code> in a cell lists every model your provider offers.':
    'Code yahin, order mein chalta hai. Phir ek aisa model chuniye jo reason kar sake: kisi cell mein <code>client.models.list()</code> aapke provider ke saare models dikha deta hai.',
  'Your notebook for this chapter, to time the twenty requests. Write the speed rule in the notes box below.':
    'Is chapter ka aapka notebook, bees requests ko time karne ke liye. Speed rule neeche notes box mein likhiye.',
  'Use the feature you costed in Chapter 11. You’ll time the same call twice, without making it any faster. To watch the first words arrive, use the <a href="#/playground">Playground</a> with <em>Stream the answer</em> ticked: it shows when they came.':
    'Chapter 11 mein jis feature ki cost aapne nikaali thi, wahi use kijiye. Aap ek hi call ko do baar time karenge, bina use tez kiye. Pehle words aate hue dekhne ke liye <a href="#/playground">Playground</a> mein <em>Stream the answer</em> tick kijiye: woh batata hai ki woh kab aaye.',
  'Your notebook for this chapter. Make each change and measure it in code. Rank the four changes in the notes box below.':
    'Is chapter ka aapka notebook. Har change karke use code mein naapiye. Chaaron changes ko neeche notes box mein rank kijiye.',
  'Your chunks, <code>chunk_vecs</code> and Chapter 6 answer key carry over in the notebook session. After a reload, press <strong>Restore</strong>, then run the cell that makes <code>chunk_vecs</code> again.':
    'Aapke chunks, <code>chunk_vecs</code> aur Chapter 6 ki answer key notebook session mein aage chalte hain. Reload ke baad <strong>Restore</strong> dabaiye, phir <code>chunk_vecs</code> banane wala cell dobara chalaiye.',
  'Your notebook for this chapter, to try the attack and the wording fix. Write the exposure note in the notes box below.':
    'Is chapter ka aapka notebook, attack aur wording fix try karne ke liye. Exposure note neeche notes box mein likhiye.',
  'You’ll build on the chunks from Chapter 7 and the agent loop from Chapter 9. Both are in your notebook session; press <strong>Restore</strong> after a reload.':
    'Aap Chapter 7 ke chunks aur Chapter 9 ke agent loop par aage kaam karenge. Dono aapke notebook session mein hain; reload ke baad <strong>Restore</strong> dabaiye.',
  'Your notebook for this chapter, to build and run the marker. Mark the fifty outputs by hand as well, and write the agreement figure in the notes box below.':
    'Is chapter ka aapka notebook, marker banane aur chalane ke liye. Pachaas outputs ko haath se bhi mark kijiye, aur agreement ka figure neeche notes box mein likhiye.',
  'You’ll use your structured RAG output from Chapter 8.5 and your Chapter 6 answer key. Both carry over in the notebook session.':
    'Aap Chapter 8.5 ka apna structured RAG output aur Chapter 6 ki answer key use karenge. Dono notebook session mein aage chalte hain.',
  'Your notebook for this chapter, to measure the tokens and build the cascade. Write the three cost numbers in the notes box below.':
    'Is chapter ka aapka notebook, tokens measure karne aur cascade banane ke liye. Teen cost numbers neeche notes box mein likhiye.',
  'You’ll need your Chapter 12 pipeline and your Chapter 6 answer key, because you’ll run both of them here. They carry over in the notebook session; press <strong>Restore</strong> after a reload.':
    'Aapko apni Chapter 12 wali pipeline aur Chapter 6 wali answer key chahiye hogi, kyunki dono ko aap yahan chalayenge. Dono notebook session mein aage chalte hain; reload ke baad <strong>Restore</strong> dabaiye.',
  'Your notebook for this chapter, to read the images and compare. Write the error rate in the notes box below.':
    'Is chapter ka aapka notebook, images padhne aur compare karne ke liye. Error rate neeche notes box mein likhiye.',
  'Find one page from your own documents that contains a real table, such as financial figures, eligibility bands or a rate card. Add a photo or scan of it with the Files panel.':
    'Apne documents mein se ek aisa page dhoondhiye jisme asli table ho, jaise financial figures, eligibility bands ya rate card. Uski photo ya scan Files panel se jodiye.',
  'The <a href="#/workbench">Workbench</a> in this app, or a local folder if you prefer. This is the harness you build in code and keep extending through Chapter 34. The notes box below is for what surprised you, not for the code.':
    'Is app ka <a href="#/workbench">Workbench</a>, ya agar aap chahein toh ek local folder. Yeh woh harness hai jo aap code mein banate hain aur Chapter 34 tak badhate rehte hain. Neeche wala notes box is baat ke liye hai ki aapko kya hairaan kar gaya, code ke liye nahi.',
  'Open the <a href="#/workbench">Workbench</a>, or a local folder if you prefer. In this chapter you’ll build an experiment harness, and you’ll keep adding to it until Chapter 34.':
    '<a href="#/workbench">Workbench</a> kholiye, ya agar aap chahein toh ek local folder. Is chapter mein aap ek experiment harness banayenge, aur Chapter 34 tak ismein cheezein jodte jaayenge.',
  'The machine actually running your code. In this app it is Python inside your browser tab, so a reload starts a fresh one, and Restore puts your definitions back. A hosted notebook such as Colab lends you a machine for a few hours and then takes it back.':
    'Woh machine jo aapka code sach mein chala rahi hai. Is app mein yeh aapke browser tab ke andar ka Python hai, isliye reload karne par naya shuru hota hai, aur Restore aapki definitions wapas le aata hai. Colab jaisa hosted notebook aapko kuch ghanton ke liye ek machine deta hai aur phir wapas le leta hai.',
  'You’ll see your sentence split into tokens and passed through the model. Open an attention head to see which earlier tokens each token pays attention to. Try the trophy sentence and look at “it”: in some heads it links strongly to “trophy”.':
    'Aapka sentence tokens mein bant kar model se guzarta dikhega. Koi attention head kholiye aur dekhiye ki har token pehle ke kin tokens par dhyaan deta hai. Trophy wala sentence try kijiye aur “it” ko dekhiye: kuch heads mein woh “trophy” se mazbooti se judta hai.',
  'On your own computer, with PyTorch installed, the same picture comes from a few lines of code. PyTorch cannot run inside a web page, so this block has no Run button here.':
    'Aapke apne computer par, PyTorch install ho toh, yahi tasveer kuch lines ke code se aati hai. PyTorch web page ke andar nahi chal sakta, isliye yahan is block mein Run button nahi hai.',
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
