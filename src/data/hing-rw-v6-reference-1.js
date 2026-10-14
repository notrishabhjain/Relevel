/* Hinglish: setup and glossary, plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'This page is optional. Every chapter teaches its ideas without it, and the interactive tools in each chapter need no setup at all. Do it only if you want to see the same ideas as real code.':
    'Yeh page optional hai. Har chapter iske bina bhi apne ideas sikhata hai, aur har chapter ke interactive tools ko koi setup nahi chahiye. Ise tabhi kijiye jab aap wahi ideas real code mein dekhna chahte hain.',
  'You need two free things: an online place to run code (Google Colab) and an API key (from NVIDIA Build), which lets your programs talk to AI models. It takes about forty-five minutes, once, and you don’t have to do it again.':
    'Aapko do free cheezein chahiye: code chalane ki ek online jagah (Google Colab) aur ek API key (NVIDIA Build se), jo aapke programs ko AI models se baat karne deti hai. Isme lagbhag 45 minute lagte hain, sirf ek baar, aur dobara nahi karna padta.',
  'Colab is a free service from Google. It gives you a temporary computer in Google’s datacentre, and you control it from a browser tab. Nothing gets installed on your own machine.':
    'Colab Google ki ek free service hai. Yeh aapko Google ke datacentre mein ek temporary computer deti hai, aur aap use browser ke ek tab se control karte hain. Aapki apni machine par kuch install nahi hota.',
  'You’ll see an empty grey box. That box is a <strong>cell</strong>. Type an instruction in it and press <kbd>Shift</kbd>+<kbd>Enter</kbd> to run it.':
    'Aapko ek khaali grey box dikhega. Woh box ek <strong>cell</strong> hai. Usmein ek instruction likhiye aur chalane ke liye <kbd>Shift</kbd>+<kbd>Enter</kbd> dabaiye.',
  'The word <code>hello</code> appears below the cell, with a small green tick. That was a program. You wrote it and you ran it.':
    'Cell ke neeche <code>hello</code> word dikhega, ek chhote green tick ke saath. Yeh ek program tha. Aapne use likha aur chalaya.',
  'Cells run from top to bottom, and they remember each other. A value you make in cell 1 can be used in cell 5, as long as the machine is still on.':
    'Cells upar se neeche chalte hain, aur woh ek doosre ko yaad rakhte hain. Cell 1 mein banayi hui value cell 5 mein use ho sakti hai, jab tak machine on hai.',
  'The machine switches itself off after roughly 90 minutes of sitting idle. The cells you typed stay, but their results disappear. To bring them back, click <strong>Runtime → Run all</strong>. This is just how the service behaves. It isn’t a failure.':
    'Machine lagbhag 90 minute khaali padi rehne ke baad apne aap band ho jaati hai. Aapke likhe hue cells bache rehte hain, lekin unke results gayab ho jaate hain. Unhe wapas laane ke liye <strong>Runtime → Run all</strong> par click kijiye. Service aise hi kaam karti hai. Yeh koi failure nahi hai.',
  'Give each notebook a name by clicking its name at the top-left, for example <code>chapter-1</code>, <code>chapter-2</code> and so on.':
    'Har notebook ko naam dijiye. Upar-left mein uske naam par click kijiye, jaise <code>chapter-1</code>, <code>chapter-2</code> aur aise hi aage.',
  'NVIDIA’s Build platform gives you free access to a large catalogue of models, and it doesn’t ask for a credit card. This book needs well under 400 requests, and the free allowance is roughly 1,000. It also lets you swap one model for another by changing a single line, which is a useful skill to have.':
    'NVIDIA ka Build platform aapko bahut saare models ka free access deta hai, aur credit card nahi maangta. Is book ko 400 se kaafi kam requests chahiye, aur free allowance lagbhag 1,000 ka hai. Isse aap sirf ek line badalkar ek model ki jagah doosra model laga sakte hain, jo ek kaam ki skill hai.',
  'Search for <code>llama-3.1-8b-instruct</code> and open the model page.':
    '<code>llama-3.1-8b-instruct</code> search kijiye aur model page kholiye.',
  'Find <strong>Get API Key</strong>. On some pages it is under <em>Build with this NIM → Generate Key</em>. Click it.':
    '<strong>Get API Key</strong> dhoondhiye. Kuch pages par woh <em>Build with this NIM → Generate Key</em> ke andar hota hai. Us par click kijiye.',
  'A long code starting with <code>nvapi-</code> appears. Copy it straight away and keep it somewhere private, like a password manager or a private note. Treat it like an ATM PIN.':
    '<code>nvapi-</code> se shuru hone wala ek lamba code dikhega. Use turant copy kijiye aur kisi private jagah rakhiye, jaise password manager ya ek private note. Ise ATM PIN ki tarah samajhiye.',
  'Keys that sit inside code get copied, shared and leaked. It is one of the most common security failures in software. If you know how to store them properly, and why, you can speak with confidence in a meeting.':
    'Jo keys code ke andar padi hoti hain, woh copy hoti hain, share hoti hain aur leak ho jaati hain. Software mein yeh sabse common security failures mein se ek hai. Agar aapko pata hai ki unhe sahi tareeke se kaise rakhna hai, aur kyun, toh aap meeting mein bharose se baat kar sakte hain.',
  'Click <strong>+ Add new secret</strong>. For the name, type <code>NVIDIA_API_KEY</code> exactly. For the value, paste your <code>nvapi-…</code> code.':
    '<strong>+ Add new secret</strong> par click kijiye. Name mein bilkul <code>NVIDIA_API_KEY</code> likhiye. Value mein apna <code>nvapi-…</code> code paste kijiye.',
  'You’ll see <code>Key loaded, starts with: nvapi-xx</code>. We print only the first 8 characters, so the full key never shows on your screen.':
    'Aapko <code>Key loaded, starts with: nvapi-xx</code> dikhega. Hum sirf pehle 8 characters print karte hain, isliye poori key aapki screen par kabhi nahi dikhti.',
  'You’ll see a few progress lines, and then silence. Silence means it worked.':
    'Aapko kuch progress lines dikhengi, aur phir shaanti. Shaanti ka matlab hai ki kaam ho gaya.',
  'You’ll see <code>setup works</code>. Your setup is complete.':
    'Aapko <code>setup works</code> dikhega. Aapka setup poora ho gaya.',
  'One thing is worth knowing. The library is called <code>openai</code>, but we are not using OpenAI’s service. OpenAI published the first request format that many people adopted, and much of the industry copied it. So one library works with many providers. Later, switching providers may need only a one-line change. Knowing this earns you respect in conversations with vendors.':
    'Ek baat jaanne laayak hai. Library ka naam <code>openai</code> hai, lekin hum OpenAI ki service use nahi kar rahe. OpenAI ne woh pehla request format publish kiya jise bahut logon ne apnaya, aur industry ke zyadatar log usse copy karne lage. Isliye ek hi library kai providers ke saath chalti hai. Aage jaakar provider badalne ke liye shaayad sirf ek line badalni pade. Yeh baat jaanne se vendors ke saath baatcheet mein aapki izzat badhti hai.',
  'Create one folder in Google Drive and name it <code>my-corpus</code>. Put 10–15 documents in it that you know well from your own work. For example: policies, SOPs, product manuals, contracts, handbooks or published standards.':
    'Google Drive mein ek folder banaiye aur uska naam <code>my-corpus</code> rakhiye. Usmein 10–15 documents rakhiye jinhe aap apne kaam se achhi tarah jaante hain. Jaise: policies, SOPs, product manuals, contracts, handbooks ya published standards.',
  'The second half of this book builds a system that answers questions from your corpus. Sometimes it will answer wrongly, and you need to catch that at once, without anyone’s help. Your own domain knowledge is your quality check. With documents you don’t know, you would need an expert on call. With your own, you are the expert.':
    'Is book ka doosra half ek aisa system banata hai jo aapke corpus se sawaalon ke jawaab deta hai. Kabhi kabhi woh galat jawaab dega, aur aapko use turant pakadna hai, kisi ki madad ke bina. Aapki apni domain knowledge hi aapka quality check hai. Jin documents ko aap nahi jaante, unke liye aapko call par ek expert chahiye hoga. Apne documents mein expert aap khud hain.',
  '<strong>For Part II, add some deliberately awkward material:</strong> at least two scanned pages, one document with a real table in it, and, if you can, an old version of a policy next to its current one. Chapters 12 and 16 need these. A corpus that is too clean will make you think everything works.':
    '<strong>Part II ke liye, jaan-boojhkar thoda mushkil material bhi daaliye:</strong> kam se kam do scanned pages, ek document jisme asli table ho, aur agar ho sake toh kisi policy ka purana version uske current version ke saath. Chapters 12 aur 16 ko inki zaroorat hai. Agar corpus bahut saaf-suthra hoga, toh aapko lagega ki sab kuch chal jaata hai.',
  'Before Chapter 9, check that your model catalogue offers the models below. If one is missing, that chapter’s <em>If Something Goes Wrong</em> section shows a way around it.':
    'Chapter 9 se pehle check kijiye ki aapke model catalogue mein neeche likhe models hain. Agar koi ek nahi hai, toh us chapter ka <em>If Something Goes Wrong</em> section uska ek raasta dikhata hai.',
  'A model that supports <code>response_format</code> / JSON schema (Ch. 8). If you don’t have one, the validation loop is the fallback.':
    'Ek model jo <code>response_format</code> / JSON schema support karta ho (Ch. 8). Agar aapke paas nahi hai, toh validation loop fallback hai.',
  'The key was not loaded':
    'Key load nahi hui',
  'Click the 🔑 in the sidebar, switch it ON for this notebook, then run the key cell again':
    'Sidebar mein 🔑 par click kijiye, is notebook ke liye use ON kijiye, phir key wala cell dobara chalaiye',
  'The Colab session restarted':
    'Colab session restart ho gaya',
  'Click Runtime → Run all':
    'Runtime → Run all par click kijiye',
  'The model name has a typo':
    'Model ke naam mein typo hai',
  'Use the exact string. Copy it from the model page on build.nvidia.com':
    'Bilkul exact string use kijiye. Use build.nvidia.com par model page se copy kijiye',
  'Your loop hit the per-minute rate limit':
    'Aapka loop per-minute rate limit tak pahunch gaya',
  '<code>extra_body</code> is missing':
    '<code>extra_body</code> missing hai',
  'The embedding model must have <code>extra_body={"input_type": …}</code>':
    'Embedding model ke liye <code>extra_body={"input_type": …}</code> hona zaroori hai',
  'A temporary or unknown problem':
    'Temporary ya anjaan problem',
  'Note down the exact red text, close the notebook, and come back with fresh eyes tomorrow':
    'Red text ko jaise ka taisa note kar lijiye, notebook band kijiye, aur kal taaza nazar ke saath wapas aaiye',
  'A prediction machine trained on huge amounts of text. It continues a piece of text in a way that sounds likely. It does not look things up.':
    'Ek prediction machine, jise bahut saare text par train kiya gaya hai. Woh kisi text ko aise aage badhata hai jo sunne mein sahi lage. Woh kuch bhi look up nahi karta.',
  'One question goes in, one answer comes out, and you get charged for it once. Your app sends a request to the model’s servers and waits for the reply.':
    'Ek sawaal andar jaata hai, ek jawaab bahar aata hai, aur uska ek baar charge lagta hai. Aapka app model ke servers ko request bhejta hai aur reply ka wait karta hai.',
  'A small piece of a word. It is the unit a model reads, writes and bills in. One token is roughly ¾ of an English word.':
    'Word ka ek chhota tukda. Model isi unit mein padhta hai, likhta hai, aur isi mein bill banta hai. Ek token lagbhag ek English word ka ¾ hota hai.',
  'The most text a model can handle in one request. It counts everything that goes in and everything that comes out, together. Think of it as the size of one envelope.':
    'Ek request mein model jitna zyada se zyada text sambhal sakta hai. Isme jo andar jaata hai aur jo bahar aata hai, dono saath mein gine jaate hain. Ise ek envelope ka size samajhiye.',
  'The model remembers nothing between requests. Each request starts from a blank slate on the model’s side.':
    'Model do requests ke beech kuch yaad nahi rakhta. Model ki taraf se har request bilkul khaali slate se shuru hoti hai.',
  'The receipt for a request. It shows how many prompt tokens were read in and how many completion tokens were written out.':
    'Request ki receipt. Isme dikhta hai ki kitne prompt tokens andar padhe gaye aur kitne completion tokens bahar likhe gaye.',
  'A standing instruction that goes along with every message, out of the user’s sight. It tells the AI how to behave.':
    'Ek hamesha wali instruction, jo har message ke saath jaati hai, user ko dikhe bina. Woh AI ko batati hai ki use kaise behave karna hai.',
  'A setting that decides whether the AI always picks its most likely next guess, or sometimes picks a less likely one. A low setting gives repeatable answers. It doesn’t make them true.':
    'Ek setting, jo tay karti hai ki AI hamesha apna sabse likely agla andaaza chune, ya kabhi kam likely wala bhi chun le. Low setting se jawaab baar baar ek jaise aate hain. Isse woh sach nahi ho jaate.',
  'When the AI gives you something that sounds fluent but is made up, because it had no evidence to go on. This isn’t a malfunction. It is how a guessing machine normally behaves when it has nothing to go on.':
    'Jab AI aisi cheez de jo sunne mein bilkul sahi lage lekin banayi hui ho, kyunki uske paas koi evidence nahi tha. Yeh koi kharabi nahi hai. Jab andaaza lagane wali machine ke paas kuch nahi hota, toh woh aise hi behave karti hai.',
  'Anything that reduces harmful or wrong outputs. The simplest kind is a single sentence in the system prompt.':
    'Koi bhi cheez jo harmful ya galat outputs ko kam kare. Sabse simple guardrail system prompt ka ek sentence hota hai.',
  'One piece of a document after it has been cut up. It is the unit that gets stored, searched and sent to the model.':
    'Document ko kaatne ke baad bana ek tukda. Isi unit ko store kiya jaata hai, search kiya jaata hai, aur model ko bheja jaata hai.',
  'The cutting itself. It looks like a boring chore, but it is a real design decision.':
    'Kaatne ka kaam. Yeh ek boring chore jaisa lagta hai, lekin asal mein yeh ek design decision hai.',
  'Cutting after every N words, whatever the text means.':
    'Har N words ke baad kaat dena, chahe text ka matlab kuch bhi ho.',
  'Cutting at the places where the document’s own structure divides it.':
    'Wahan kaatna jahan document ka apna structure use baantta hai.',
  'Repeating the last lines of one chunk at the start of the next one. That way, an answer that sits across the boundary isn’t lost.':
    'Ek chunk ki aakhri lines ko agle chunk ki shuruaat mein dobara rakhna. Isse jo jawaab do chunks ke beech mein pada ho, woh kho nahi jaata.',
  'Fetching, from all the stored chunks, the few that are most likely to answer a question.':
    'Saare stored chunks mein se woh thode se nikaalna, jinmein sawaal ka jawaab hone ka sabse zyada chance ho.',
  'Finding text by the words it shares with the question. It matches spelling and is blind to meaning.':
    'Sawaal ke saath jo words common hain, unse text dhoondhna. Yeh spelling match karta hai, matlab ko nahi dekhta.',
  'The question that comes in.':
    'Jo sawaal andar aata hai.',
  'Running keyword search and semantic search together, then merging their results.':
    'Keyword search aur semantic search ko saath mein chalana, phir dono ke results ko milana.',
  'Take only the best k results. The number k is a dial between recall and precision.':
    'Sirf sabse achhe k results lena. Yeh number k recall aur precision ke beech ka ek dial hai.',
  'The position a piece of text gets on the meaning map, written as a list of numbers. A small AI whose only job is placing text produces it.':
    'Meaning map par text ke tukde ko jo jagah milti hai, jo numbers ki ek list ke roop mein likhi hoti hai. Ise ek chhota AI banata hai, jiska sirf ek kaam hai text ko map par rakhna.',
  'The mapmaker. It reads text and gives back its address on the map.':
    'Map banane wala. Woh text padhta hai aur map par uska address wapas deta hai.',
  'A quick test of how close two pieces of text are. The higher the number, the closer they are in meaning.':
    'Yeh dekhne ka ek tez test ki do text ek doosre ke kitne paas hain. Number jitna zyada, matlab mein utne hi paas.',
  'Finding text by its address on the meaning map, instead of by its spelling.':
    'Spelling ki jagah meaning map par text ke address se use dhoondhna.',
  'A label you give when you create an embedding, saying whether the text is a question or a piece of a document. If you skip it, quality drops quietly and nothing warns you.':
    'Embedding banate waqt aap ek label dete hain, jo batata hai ki text sawaal hai ya document ka ek hissa. Agar aap ise chhod dein, toh quality chupchaap gir jaati hai aur koi warning nahi aati.',
  'A system that stores embeddings and can quickly find the ones nearest to a given one.':
    'Ek system jo embeddings ko store karta hai aur kisi diye hue embedding ke sabse paas wale embeddings jaldi dhoondh leta hai.',
  'Grading your system against answers you have already checked. It is like acceptance testing, but for AI.':
    'Apne system ko un jawaabon se grade karna jo aap pehle hi check kar chuke hain. Yeh acceptance testing jaisa hai, bas AI ke liye.',
  'The answer key: a set of questions with verified correct answers, written before you test anything. Without one, “is it good?” has no answer.':
    'Answer key: sawaalon ka ek set, jinke sahi jawaab pehle se check kiye hue hain, aur jo aapne kuch bhi test karne se pehle likhe hain. Iske bina “kya yeh achha hai?” ka koi jawaab nahi hota.',
  'Out of everything that mattered, how much did you fetch? Low recall means you missed files.':
    'Jo kuch zaroori tha, usmein se aapne kitna nikaala? Low recall matlab kuch files chhoot gayi.',
  'Out of everything you fetched, how much mattered? Low precision means a desk buried in paper.':
    'Jo kuch aapne nikaala, usmein se kitna zaroori tha? Low precision matlab ek desk jo kaagaz ke dher mein dabi hai.',
  'The numbers and behaviours you agree on in advance, which the system must meet before it goes live.':
    'Woh numbers aur behaviour jo aap pehle se tay kar lete hain, aur jinhe system ko go-live se pehle poora karna hota hai.',
  'Retrieval-Augmented Generation. First you retrieve text that has been checked, then the model writes its answer from that text.':
    'Retrieval-Augmented Generation. Pehle aap check kiya hua text retrieve karte hain, phir model usi text se apna jawaab likhta hai.',
  'A formal description of the shape an output must have: which fields it has, their types, and which are required.':
    'Output ki shakl ka ek pakka description: usmein kaun se fields hain, unke types kya hain, aur kaun se zaroori hain.',
  'Model output that is held to a schema, instead of free-flowing prose.':
    'Model ka woh output jo khule text ki jagah ek schema ke hisaab se bandha hota hai.',
  'At each step, the model is allowed to pick only tokens that fit the schema. That makes invalid output impossible, not just unlikely.':
    'Har step par model ko sirf woh tokens chunne diye jaate hain jo schema mein fit hote hain. Isse galat output sirf kam sambhav nahi hota, impossible ho jaata hai.',
  'A field that can only hold a value from a fixed list.':
    'Ek field jisme sirf ek tay list mein se hi value aa sakti hai.',
  'What the product does when it should not answer. It gives a structured way to say “cannot determine” instead of inventing something. You design it on purpose, or it happens by accident.':
    'Jab product ko jawaab nahi dena chahiye, tab woh kya karta hai. Kuch invent karne ki jagah “cannot determine” kehne ka ek structured tareeka. Ise aap soch-samajh kar design karte hain, nahi toh yeh galti se ho jaata hai.',
  'Parse the output, validate it, and if it fails, ask again with the error attached.':
    'Output ko parse kijiye, validate kijiye, aur agar fail ho jaaye toh error saath lagakar dobara poochiye.',
  'You describe functions that can be called, so the model can ask for one to be run instead of answering in prose.':
    'Aap batate hain ki kaun se functions call kiye ja sakte hain, taaki model text mein jawaab dene ki jagah unmein se ek chalane ki maang kar sake.',
  'The model asks for a tool, your code runs it, the result goes back to the model, and this repeats.':
    'Model ek tool maangta hai, aapka code use chalata hai, result model ko wapas jaata hai, aur yeh baar baar hota hai.',
  'A hard limit on how many times the loop may run. It is not optional.':
    'Loop kitni baar chal sakta hai, uski ek pakki limit. Yeh optional nahi hai.',
  'The recorded list of steps, calls, arguments and results for one run.':
    'Ek run ke steps, calls, arguments aur results ki record ki hui list.',
  'The line between tools that only read and tools that change something in the world.':
    'Un tools ke beech ki line jo sirf padhte hain, aur un tools ke beech jo duniya mein kuch badal dete hain.',
  'Deciding what goes into the envelope, in what order, and what gets pushed out. It is about the contents, not about how the prompt is worded.':
    'Yeh tay karna ki envelope mein kya jaayega, kis order mein jaayega, aur kya bahar nikaala jaayega. Yeh andar ki cheezon ke baare mein hai, is baare mein nahi ki prompt kaise likha gaya.',
  'The model uses its context less well as the context grows, long before it hits the limit.':
    'Context jaise jaise badhta hai, model use utni achhi tarah use nahi kar paata, limit tak pahunchne se kaafi pehle hi.',
  'The model finds material at the start and the end far more reliably than material in the middle.':
    'Model ko shuru aur aakhir ka material beech wale material se kaafi zyada bharose ke saath mil jaata hai.',
  'The provider reuses the part at the start of a request that it has already processed. Put the stable parts first and the changing parts last.':
    'Provider request ke shuru ka woh hissa dobara use karta hai jo woh pehle process kar chuka hai. Isliye na badalne wali cheezein pehle rakhiye aur badalne wali cheezein aakhir mein.',
  'Summarising older context to free up budget, while keeping the most recent part word for word.':
    'Purane context ka summary banana taaki budget khaali ho, aur sabse naya hissa jaise ka taisa rakhna.',
  'A model that does some working-out of its own before it gives its answer.':
    'Ek model jo jawaab dene se pehle apne aap thoda working-out karta hai.',
  'Paying for more accuracy on each query while the model runs, instead of paying for it during training.':
    'Accuracy ke liye training ke dauraan paise lagane ki jagah, har query par model chalte waqt zyada paise lagana.',
  'The setting that controls how much working-out the model is allowed. Setting it is a product decision.':
    'Woh setting jo tay karti hai ki model ko kitna working-out karne diya jaaye. Ise set karna ek product decision hai.',
  'The median response time, and the response time of the slow tail. Users feel the tail.':
    'Median response time, aur slow tail ka response time. User ko tail hi mehsoos hoti hai.',
  'A statistical way of ranking keyword matches that gives more weight to rare words. It is Chapter 4’s scoreboard, done properly.':
    'Keyword matches ko rank karne ka ek statistical tareeka, jo rare words ko zyada weight deta hai. Yeh Chapter 4 ka scoreboard hai, bas sahi tareeke se banaya hua.',
  'A way to merge ranked lists by adding up 1/(rank) for each item. It is simple, sturdy and hard to beat.':
    'Ranked lists ko milane ka ek tareeka, jisme har item ke liye 1/(rank) jodte hain. Yeh simple hai, mazboot hai, aur ise harana mushkil hai.',
  'A model that scores a (question, chunk) pair by reading both together. You apply it only to a short list.':
    'Ek model jo (question, chunk) ki jodi ko dono saath padhkar score deta hai. Ise aap sirf ek chhoti list par lagate hain.',
  'Before embedding each chunk, you add a sentence, written by a model, that says where the chunk comes from. This fixes orphan chunks, the ones that make no sense on their own.':
    'Har chunk ko embed karne se pehle aap usmein ek sentence jodte hain, jo model likhta hai aur batata hai ki chunk kahan se aaya hai. Isse orphan chunks theek ho jaate hain, yaani woh chunks jinka akele koi matlab nahi banta.',
  'Turning a half-sentence from a conversation into a complete question that can be searched on its own.':
    'Baatcheet ke beech ke adhoore sentence ko ek poora sawaal bana dena, jise akele search kiya ja sake.',
  'Dropping chunks that are out of scope, such as the wrong version, date or department, before any scoring happens.':
    'Score karne se pehle un chunks ko hata dena jo scope ke bahar hain, jaise galat version, date ya department ke chunks.',
  'Instructions slipped into a model’s input that change how it behaves.':
    'Model ke input mein chupchaap daali gayi instructions, jo uska behaviour badal deti hain.',
  'The attack comes inside content the system reads, such as a document, email, ticket or page.':
    'Attack us content ke andar aata hai jo system padhta hai, jaise koi document, email, ticket ya page.',
  'Private data, untrusted content and a way to communicate outside, all in one system. Any two of the three are safe.':
    'Ek hi system mein private data, untrusted content, aur bahar baat karne ka tareeka, teeno ek saath. Inme se koi bhi do hon toh safe hai.',
  'Getting private data out, for example through an email, a webhook, a URL parameter or a rendered image.':
    'Private data ko bahar nikaal lena, jaise email, webhook, URL parameter ya rendered image ke through.',
  'A component with special privileges is tricked into using them for someone who has none.':
    'Khaas privileges wale ek component ko bevakoof banakar, uski power ek aise insaan ke liye use karwa lena jiske paas koi privilege nahi hai.',
  'A closed list of destinations that are allowed. It still protects you after an injection succeeds.':
    'Allowed destinations ki ek band list. Injection chal bhi jaaye, tab bhi yeh aapko bachaati hai.',
  'How often the judge agrees with human labels. This number tells you whether the judge is usable.':
    'Judge kitni baar human labels se agree karta hai. Yeh number batata hai ki judge use karne laayak hai ya nahi.',
  'Reading real outputs and sorting the failures into named groups as you go. It is the most useful single activity in the field.':
    'Asli outputs padhna aur jaise jaise aap padhte hain, failures ko naam wale groups mein baantna. Is field mein yeh sabse kaam ki activity hai.',
  'Your own named categories of failure, taken from your own traffic.':
    'Failure ki aapki apni named categories, jo aapke apne traffic se nikali hain.',
  'The cases that must pass before any release ships.':
    'Woh cases jo kisi bhi release ke ship hone se pehle pass hone chahiye.',
  'Offline means testing against an answer key before release. Online means looking at what users get after release.':
    'Offline matlab release se pehle answer key ke saamne test karna. Online matlab release ke baad dekhna ki users ko kya mil raha hai.',
  'The full cost of one request the user can see, including retries and agent steps.':
    'User ko dikhne wali ek request ki poori cost, retries aur agent steps milakar.',
  'Try the cheap model first, and move up to a bigger one if a check fails. It is the main pattern for controlling cost in production.':
    'Pehle sasta model try kijiye, aur agar check fail ho jaaye toh bade model par chale jaaiye. Production mein cost ko control karne ka yeh sabse main pattern hai.',
  'Choosing a model for each request, based on how hard that request is.':
    'Har request ke liye model chunna, is hisaab se ki woh request kitni mushkil hai.',
  'The cost and revenue for each unit of use. This number decides whether a feature survives.':
    'Use ki har unit par cost aur revenue kitna hai. Yahi number tay karta hai ki koi feature bachega ya nahi.',
  'Using a whole rendered page as the unit you retrieve, instead of a span of text.':
    'Text ke ek hisse ki jagah poore rendered page ko retrieve hone wali unit banana.',
  'Information that is on the page but missing from the text pulled out of it.':
    'Woh information jo page par hai, lekin usse nikaale gaye text mein nahi hai.',
  'Deciding when a speaker has finished talking. It is the core problem of voice interfaces.':
    'Yeh tay karna ki bolne wala kab bol chuka hai. Voice interfaces ki sabse badi problem yahi hai.',
  'How strict your obligations are. It depends on what happens if the system is wrong, not on the technology.':
    'Aapki zimmedariyan kitni sakht hain. Yeh is par depend karta hai ki system galat hua toh kya hoga, technology par nahi.',
  'Where data came from, what right you have to use it, where it is kept, and for how long.':
    'Data kahan se aaya, use istemaal karne ka aapko kya haq hai, woh kahan rakha hai, aur kitne time ke liye.',
  'A defined point where a person can review the output, and has the authority to overrule it.':
    'Ek tay jagah jahan koi insaan output review kar sakta hai, aur use badalne ka haq bhi rakhta hai.',
  'Staff using AI tools that nobody approved. This really happens and can be measured. It isn’t a hypothetical.':
    'Staff ka aise AI tools use karna jinhe kisi ne approve nahi kiya. Yeh asli mein hota hai aur ise measure kiya ja sakta hai. Yeh sirf andaaza nahi hai.',
  'A product specification where the acceptance criteria are eval thresholds, measured on a named dataset.':
    'Ek product specification, jisme acceptance criteria eval thresholds hote hain, jo ek named dataset par measure kiye jaate hain.',
  'Fixing an exact model version, so the behaviour doesn’t change underneath you.':
    'Model ka ek exact version fix kar dena, taaki aapke neeche se behaviour na badle.',
  'The re-evaluation you have to do when a provider retires the model you use.':
    'Jab provider aapka model band kar deta hai, tab aapko jo dobara evaluation karna padta hai.',
  'A flag you can flip at once to send traffic to the path that doesn’t use AI. It is not a rollback.':
    'Ek flag jise aap turant palat sakte hain, taaki traffic us raaste par chala jaaye jo AI use nahi karta. Yeh rollback nahi hai.',
  'A program someone uses, the thing with buttons. It is the app that talks to the model. The model itself has no interface, no memory and no idea that a person exists.':
    'Ek program jise koi use karta hai, jisme buttons hote hain. Model se baat app karta hai. Model ke paas khud koi interface nahi hota, koi memory nahi hoti, aur use pata bhi nahi hota ki koi insaan hai.',
  'Training a small model to copy a large one on one narrow job. You get most of the quality at a fraction of the cost.':
    'Ek chhote model ko ek hi narrow kaam par bade model ki nakal karna sikhana. Aapko zyadatar quality milti hai, cost ke ek chhote hisse mein.',
  'What the feature can still do when the AI part is switched off.':
    'AI wala hissa band hone par bhi feature kya kuch kar sakta hai.',
});
