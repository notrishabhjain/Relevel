/* Hinglish: skills and project pages, plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'From the first chapter to the last, every capstone question is about one real project. So you don’t end up with sixty small exercises that have nothing to do with each other. You end up with one piece of work that you can show an employer, and that you understand from the inside.':
    'Pehle chapter se aakhri chapter tak, har capstone sawaal ek hi asli project ke baare mein hai. Isliye aapke paas 60 chhote exercises nahi bachte jinka aapas mein koi lena-dena na ho. Aapke paas ek poora kaam hota hai, jo aap kisi employer ko dikha sakte hain aur jise aap andar se samajhte hain.',
  'The project is called <strong>Bharat Privacy Guard</strong>. It’s a small tool that sits between a person and a website, an app or an AI chatbot. Say someone types “my Aadhaar number is 4321 5678 9012”. The tool notices it. Then, before the number travels anywhere, the website can hide it, mask it, or ask whether it really needs it.':
    'Project ka naam hai <strong>Bharat Privacy Guard</strong>. Yeh ek chhota tool hai jo kisi insaan aur website, app ya AI chatbot ke beech mein baithta hai. Maan lijiye koi type karta hai “my Aadhaar number is 4321 5678 9012”. Tool use pakad leta hai. Phir number kahin aage jaane se pehle, website use hide kar sakti hai, mask kar sakti hai, ya pooch sakti hai ki use sach mein yeh number chahiye bhi ya nahi.',
  'This page explains the project once, in plain words. Every capstone links back to one stage on this page. So you always know which piece you’re building, and why.':
    'Yeh page project ko ek baar, saaf words mein samjhata hai. Har capstone is page ke ek stage se juda hai. Isliye aapko hamesha pata rehta hai ki aap kaun sa hissa bana rahe hain, aur kyun.',
  'Rampart is an existing open tool that finds personal details in text. It was built and tested on English and six other European languages, all written in the Latin alphabet. Its own published model card says it does poorly on Hindi written in Devanagari script. It reports finding only about 14 out of every 100 personal details there. Chapter A2 asks you to check that number yourself, not just trust this page.':
    'Rampart ek maujooda open tool hai jo text mein personal details dhoondhta hai. Ise English aur 6 doosri European languages par banaya aur test kiya gaya, aur yeh sab Latin alphabet mein likhi jaati hain. Uska apna published model card kehta hai ki Devanagari script mein likhi Hindi par woh kamzor hai. Wahan woh har 100 personal details mein se sirf lagbhag 14 hi dhoondh paata hai. Chapter A2 mein aapko yeh number khud check karna hai, is page par bharosa karke nahi.',
  'People in India type in English, in Hindi, and in Hinglish, which is Hindi written in English letters. Often they switch between them inside one sentence. They also type things a European tool was never built to recognise: Aadhaar numbers, PAN cards, UPI IDs, mobile numbers that begin with 98. A tool that handles only one kind of writing leaves most of the problem untouched.':
    'India mein log English, Hindi aur Hinglish mein type karte hain. Hinglish matlab English letters mein likhi Hindi. Aksar woh ek hi sentence ke andar ek se doosri par chale jaate hain. Woh aisi cheezein bhi type karte hain jinhe pehchaanne ke liye koi European tool bana hi nahi tha: Aadhaar numbers, PAN cards, UPI IDs, 98 se shuru hone wale mobile numbers. Jo tool sirf ek tarah ki writing sambhalta hai, woh problem ka zyadatar hissa jaisa ka taisa chhod deta hai.',
  'So this project isn’t a copy of Rampart. It asks one question. Can a small tool, light enough to run inside a browser or on a phone, find personal details in English, Hindi and Hinglish, and be honest about what it misses?':
    'Isliye yeh project Rampart ki copy nahi hai. Yeh ek hi sawaal poochta hai. Kya ek chhota tool, itna halka ki browser ya phone ke andar chal sake, English, Hindi aur Hinglish mein personal details dhoondh sakta hai, aur imaandaari se bata sakta hai ki usse kya chhoot gaya?',
  'It is not a “DPDP compliance engine”. India’s data protection law (the Digital Personal Data Protection Act, 2023, and the Rules notified in 2025) asks an organisation for much more than a tool that finds personal details. It asks for clear notices, consent, security safeguards, limits on how long data is kept, a way to handle breaches, and more. Finding and hiding personal details is one technical piece. It helps an organisation collect and pass on less data.':
    'Yeh “DPDP compliance engine” nahi hai. India ka data protection law (Digital Personal Data Protection Act, 2023, aur 2025 mein notify hue Rules) kisi organisation se us tool se kaafi zyada maangta hai jo personal details dhoondhta hai. Woh clear notices, consent, security safeguards, data kitne time tak rakha jaye uski limits, breach sambhalne ka tareeka, aur bhi bahut kuch maangta hai. Personal details dhoondhna aur chhupana ek technical hissa hai. Yeh organisation ko kam data collect karne aur aage dene mein madad karta hai.',
  'So in every document you write in this course, describe the project as “a privacy tool that helps an organisation collect and share less personal data”. Never write that it makes anyone compliant. The system card in Chapter 17 and the product requirements in Chapter 18 both ask you to write this limit down.':
    'Isliye is course mein aap jo bhi document likhein, usmein project ko aise bataiye: “a privacy tool that helps an organisation collect and share less personal data”. Yeh kabhi mat likhiye ki yeh kisi ko compliant bana deta hai. Chapter 17 ka system card aur Chapter 18 ki product requirements, dono aapse yeh limit likhwate hain.',
  'Text goes through the parts below in order. The first two are cheap and fast. The third costs more, so it only looks at the sentences the first two couldn’t settle. Then the rule-keeper decides what to do with everything that was found.':
    'Text neeche diye hisson se order mein guzarta hai. Pehle do sasta aur fast hain. Teesra zyada mehnga hai, isliye woh sirf un sentences ko dekhta hai jinhe pehle do settle nahi kar paaye. Phir rule-keeper decide karta hai ki jo kuch mila, uska kya karna hai.',
  'A PAN is always five capital letters, four digits and one capital letter. An Aadhaar number is twelve digits. A mobile number is ten digits that start with 6, 7, 8 or 9. Fixed rules can find all of these, with no AI at all. So the check is fast, free, and gives the same answer every time.':
    'PAN hamesha 5 capital letters, 4 digits aur 1 capital letter ka hota hai. Aadhaar number 12 digits ka hota hai. Mobile number 10 digits ka hota hai jo 6, 7, 8 ya 9 se shuru hota hai. In sab ko fixed rules se dhoondha ja sakta hai, bina kisi AI ke. Isliye yeh check fast hai, free hai, aur har baar same jawaab deta hai.',
  'Nothing about “Ramesh Jain”, “14 Sector 15, Gurgaon” or “Acme Bank” follows a pattern, so fixed rules can’t find them. Instead, a small language model reads the sentence. It marks people, addresses, workplaces, dates of birth and family relationships. It’s small enough to run on a phone or in a browser.':
    '“Ramesh Jain”, “14 Sector 15, Gurgaon” ya “Acme Bank” mein se kisi ka bhi koi pattern nahi hota, isliye fixed rules inhe nahi pakad sakte. Iske bajaye ek chhota language model sentence padhta hai. Woh logon, addresses, workplaces, dates of birth aur family relationships ko mark karta hai. Yeh itna chhota hai ki phone ya browser mein chal sakta hai.',
  '“I am the only diabetic patient in my village who had a transplant last year” has no name and no number, yet it points to one person. So a larger AI model is asked to judge sentences like this. But it only sees the few that the first two parts couldn’t settle, because it costs more and is slower.':
    '“I am the only diabetic patient in my village who had a transplant last year” mein na koi naam hai na koi number, phir bhi yeh ek insaan ki taraf ishaara karta hai. Isliye aise sentences judge karne ke liye ek bada AI model use hota hai. Lekin woh sirf wahi chand sentences dekhta hai jo pehle do parts settle nahi kar paaye, kyunki woh zyada mehnga aur slow hai.',
  'For each detail it picks one action: remove it, mask it (98******12), let it through, or ask the person. The choice depends on why the website is collecting the data. A delivery address is needed for a delivery. An Aadhaar number isn’t needed to subscribe to a newsletter.':
    'Har detail ke liye woh ek action chunta hai: use hata do, mask kar do (98******12), jaane do, ya insaan se pooch lo. Yeh choice is par depend karti hai ki website data kyun collect kar rahi hai. Delivery ke liye delivery address chahiye. Newsletter subscribe karne ke liye Aadhaar number nahi chahiye.',
  'One learner can’t build everything in the full idea during one course. So the course draws a line. In your own documents, say clearly which side of the line each piece is on.':
    'Ek learner ek course mein poora idea nahi bana sakta. Isliye course ek line kheenchta hai. Apne documents mein saaf likhiye ki har hissa line ke kis taraf hai.',
  'The gateway: a version that sits in front of a company’s servers, logs and AI traffic. You write its plan, its architecture and its risks, but you don’t have to build it.':
    'The gateway: ek aisa version jo company ke servers, logs aur AI traffic ke aage baithta hai. Aap uska plan, architecture aur risks likhte hain, lekin use banana zaroori nahi hai.',
  'Other Indian languages such as Tamil, Bengali, Telugu, Marathi and Gujarati. In your documents, say plainly that these aren’t covered yet.':
    'Doosri Indian languages, jaise Tamil, Bengali, Telugu, Marathi aur Gujarati. Apne documents mein saaf likhiye ki yeh abhi cover nahi hui hain.',
  'Every example below is made up. Use made-up values like these in your own work, and never put a real person’s details into a test file.':
    'Neeche ka har example banaya hua hai. Apne kaam mein bhi aise hi banaye hue values use kijiye, aur kisi asli insaan ki details kabhi test file mein mat daliye.',
  'nine to eighteen digits; to be sure, it usually needs a nearby word such as “account”':
    '9 se 18 digits; pakka karne ke liye aam taur par paas mein “account” jaisa koi word chahiye',
  'Here are ten made-up sentences you can use from your very first chapter. They’re the first ten rows of your answer key (more on that below). Copy them into a spreadsheet. Then use them whenever a capstone says “the starter sentences”.':
    'Yeh 10 banaye hue sentences hain jo aap bilkul pehle chapter se use kar sakte hain. Yeh aapke answer key ki pehli 10 rows hain (is par neeche aur baat hogi). Inhe ek spreadsheet mein copy kar lijiye. Phir jab bhi koi capstone “the starter sentences” kahe, inhe use kijiye.',
  'A tool like this is only as good as its test. The answer key is a spreadsheet of sentences where you have already written down, by hand, what the tool should find. You run the tool, compare its answers with yours, and count the mistakes. You start the answer key in Chapter 2.2 and add to it in later chapters. Each time, save it as a new version of the same file instead of starting a new file.':
    'Aisa tool utna hi achha hota hai jitna uska test. Answer key sentences ki ek spreadsheet hai, jisme aap pehle se haath se likh dete hain ki tool ko kya dhoondhna chahiye. Aap tool chalate hain, uske jawaab apne jawaabon se compare karte hain, aur galtiyan gin lete hain. Answer key aap Chapter 2.2 mein shuru karte hain aur aage ke chapters mein usmein jodte jaate hain. Har baar use usi file ke naye version ki tarah save kijiye, nayi file mat banaiye.',
  'Every row has six columns. First comes a number, then the kind of writing (English, Hindi or Hinglish), and then the sentence. After that come what should be found (the kind and the exact words), what should happen to it (remove, mask or leave alone), and a note.':
    'Har row mein 6 columns hote hain. Pehle ek number, phir kis tarah ki writing hai (English, Hindi ya Hinglish), phir sentence. Uske baad kya milna chahiye (kaun si kism ka detail aur exact words), uska kya hona chahiye (remove, mask ya chhod dena), aur ek note.',
  'Each chapter ends with a capstone, written like an exam question. It has four parts. <strong>The situation</strong> tells you where you are in the project and what you already have. <strong>Your task</strong> is a numbered list, so do the steps in order. <strong>What to hand in</strong> lists exactly what you must have at the end. <strong>Where you do this</strong> says whether the work happens in a notebook (code) or on paper or in a document (writing).':
    'Har chapter ek capstone par khatam hota hai, jo exam ke sawaal jaisa likha hota hai. Uske 4 parts hote hain. <strong>The situation</strong> batata hai ki aap project mein kahan hain aur aapke paas pehle se kya hai. <strong>Your task</strong> ek numbered list hai, isliye steps order mein kijiye. <strong>What to hand in</strong> mein likha hota hai ki aakhir mein aapke paas exactly kya hona chahiye. <strong>Where you do this</strong> batata hai ki kaam notebook mein hoga (code) ya paper par ya document mein (writing).',
  'Every capstone also shows which stage of the project it belongs to, with a link back to this page. Keep everything you make in the repository you set up in Chapter A1, in the folders that chapter asks for. By the last chapter, that repository is the project.':
    'Har capstone yeh bhi dikhata hai ki woh project ke kis stage ka hai, aur is page ka link bhi deta hai. Jo kuch aap banaate hain, woh sab us repository mein rakhiye jo aapne Chapter A1 mein set up ki thi, un folders mein jo woh chapter batata hai. Aakhri chapter tak, wahi repository aapka project ban jaati hai.',
  'Work through the stages in order. Each stage lists its chapters, says what the stage is for, and tells you what you’ll have when it’s finished.':
    'Stages ko order mein kijiye. Har stage mein uske chapters likhe hain, yeh bataya gaya hai ki stage kis kaam ka hai, aur yeh bhi ki khatam hone par aapke paas kya hoga.',
  'Before any code, you do the work a product manager does first. You name the problem and study the existing tool. You talk to real people, size the market and choose a strategy. Then you plan the work and write the requirements. You also run first experiments to see how AI models behave on Indian text.':
    'Code se pehle, aap woh kaam karte hain jo product manager sabse pehle karta hai. Aap problem ka naam rakhte hain aur maujooda tool ko study karte hain. Asli logon se baat karte hain, market ka size nikaalte hain aur strategy chunte hain. Phir kaam plan karte hain aur requirements likhte hain. Saath mein pehle experiments bhi chalate hain, yeh dekhne ke liye ki AI models Indian text par kaise behave karte hain.',
  'You try ready-made AI models on the starter sentences. You see how text is cut into small pieces and what one check costs. Then you learn to write clear instructions that get a model to find personal details.':
    'Aap ready-made AI models ko starter sentences par try karte hain. Aap dekhte hain ki text chhote tukdon mein kaise kata jaata hai aur ek check ki cost kitni aati hai. Phir aap seekhte hain ki saaf instructions kaise likhein jisse model personal details dhoondh le.',
  'You build the answer key, the test file the whole project depends on. Then you break the big job into small tasks. You also build a sorter that says whether a piece of text is a PAN, an Aadhaar number or a mobile number.':
    'Aap answer key banate hain, yaani woh test file jis par poora project tika hai. Phir bade kaam ko chhote tasks mein todte hain. Saath mein ek sorter bhi banate hain jo batata hai ki text ka ek tukda PAN hai, Aadhaar number hai ya mobile number.',
  'You build the first real part of the tool, the pattern checker, and find out where fixed rules fail. Then you try finding things by their meaning instead of their exact shape.':
    'Aap tool ka pehla asli hissa banate hain, pattern checker, aur dekhte hain ki fixed rules kahan fail hote hain. Phir aap cheezein exact shape ke bajaye unke matlab se dhoondhne ki koshish karte hain.',
  'You put a number on how good the tool is. Then you write an honest page about what it can’t do yet.':
    'Aap tool kitna achha hai, us par ek number lagate hain. Phir ek imaandaar page likhte hain ki woh abhi kya nahi kar sakta.',
  'You make the tool always answer in the same fixed format, so other software can rely on it. Then you build the rule-keeper and work out how much text can be sent onward. You also decide when the expensive AI is worth paying for. Last, you check that the tool is fast enough for a live chat.':
    'Aap tool ko hamesha ek hi fixed format mein jawaab dene wala banate hain, taaki doosra software us par bharosa kar sake. Phir rule-keeper banate hain aur nikaalte hain ki aage kitna text bheja ja sakta hai. Aap yeh bhi decide karte hain ki mehnga AI kab paise dene layak hai. Aakhir mein check karte hain ki tool live chat ke liye kaafi fast hai ya nahi.',
  'You improve the tool one change at a time and measure each change. Then you try to break it. Can a sentence hidden in the text give orders to the AI? You build an automatic marker to check the tool’s work. And you read a hundred real outputs by hand, to learn what goes wrong.':
    'Aap tool ko ek-ek change karke behtar banate hain aur har change measure karte hain. Phir use todne ki koshish karte hain. Kya text mein chhupa ek sentence AI ko orders de sakta hai? Aap tool ka kaam check karne ke liye ek automatic marker banate hain. Aur 100 asli outputs haath se padhte hain, yeh jaanne ke liye ki kya galat hota hai.',
  'You write the documents a real team would ask for. These are a system card, a requirements document and a build-or-buy recommendation. You also write an answer on whether to fine-tune a model, the screens for the four ways the tool can answer, and a pilot plan.':
    'Aap woh documents likhte hain jo ek asli team maangegi. Yeh hain: ek system card, ek requirements document aur ek build-or-buy recommendation. Saath mein aap yeh likhte hain ki model fine-tune karna chahiye ya nahi, tool ke jawaab dene ke 4 tareekon ki screens, aur ek pilot plan.',
  'You move from experiments to engineering. You set up one test harness kept in Git, and choose a model with a back-up. You plan what the model sees and design the gateway. Then you build a workflow that can propose but not act alone, and compare it with an agent. After that you write an access policy for tools and plan for images and voice. Last, you build a release gate.':
    'Aap experiments se engineering ki taraf badhte hain. Aap Git mein rakha ek test harness set up karte hain, aur back-up ke saath ek model chunte hain. Plan karte hain ki model ko kya dikhega, aur gateway design karte hain. Phir ek aisa workflow banate hain jo propose kar sake lekin akele act na kare, aur use ek agent se compare karte hain. Uske baad tools ke liye access policy likhte hain aur images aur voice ka plan banate hain. Aakhir mein ek release gate banate hain.',
  'You decide how to watch the tool once it’s live. You list what can go wrong and how you would notice. Then you write the full product requirements and pull everything into a ten-slide decision pack.':
    'Aap decide karte hain ki tool live hone ke baad use kaise watch karna hai. Aap likhte hain ki kya galat ho sakta hai aur aapko kaise pata chalega. Phir poori product requirements likhte hain aur sab kuch ek 10-slide decision pack mein jod dete hain.',
  'You put everything together: the working tool, its evidence and its limits. You write one findings document. Then you prepare to explain it to a non-technical leader, and to an engineer who will try to find holes in it.':
    'Aap sab kuch ek saath jodte hain: chalta hua tool, uska evidence aur uski limits. Aap ek findings document likhte hain. Phir taiyaari karte hain ki use ek non-technical leader ko samjha sakein, aur ek engineer ko bhi jo usmein chhed dhoondhne ki koshish karega.',
  'You decide how to charge for it, how it spreads and how to measure it. You decide which tools to use, how to release it safely and how to put it in front of real users. Last, you turn the project into evidence for your next job.':
    'Aap decide karte hain ki uske paise kaise lene hain, woh kaise failega aur use kaise measure karna hai. Aap decide karte hain ki kaun se tools use karne hain, use safely kaise release karna hai aur asli users ke saamne kaise rakhna hai. Aakhir mein aap project ko apni agli job ke liye evidence bana dete hain.',
  'Finding the right problem, choosing what to try, and showing that it worked.':
    'Sahi problem dhoondhna, chunna ki kya try karna hai, aur dikhana ki woh kaam kiya.',
  'How a request really behaves, and what it costs.':
    'Ek request asal mein kaise behave karti hai, aur uski cost kitni aati hai.',
  'Turning “is it good?” into numbers you measured yourself.':
    '“Kya yeh achha hai?” ko aise numbers mein badalna jo aapne khud measure kiye.',
  'How the pieces fit, how the system acts, what it sees, and how much it may think.':
    'Hisse kaise jude hain, system kaise act karta hai, use kya dikhta hai, aur woh kitna sochega.',
  'Where attackers can break it, and what you must ship alongside it.':
    'Attackers ise kahan tod sakte hain, aur iske saath aapko kya ship karna zaroori hai.',
  'The decisions that are yours to make.':
    'Woh decisions jo aapko hi lene hain.',
  'Given a feature, work out a cost per query that you can defend.':
    'Ek feature diya ho, toh per query ki aisi cost nikaaliye jiska aap defence kar sakein.',
  'Knows that tokens are what you get billed for':
    'Jaanta hai ki billing tokens ke hisaab se hoti hai',
  'Can read a receipt and explain the difference between prompt tokens and completion tokens':
    'Receipt padh sakta hai aur samjha sakta hai ki prompt tokens aur completion tokens mein kya farq hai',
  'Can work out the cost per query, including k and the length of the output':
    'Per query cost nikaal sakta hai, k aur output ki length ko milakar',
  'Can build a monthly cost model with all four multipliers included, and defend it':
    'Chaaron multipliers ke saath ek monthly cost model bana sakta hai, aur uska defence kar sakta hai',
  'Tell apart what fits in the window from what works well, and plan the space on purpose.':
    'Samajhiye ki window mein kya fit hota hai aur kya achhe se kaam karta hai, aur jagah ko soch-samajhkar plan kijiye.',
  'Knows the window is a limit on each request':
    'Jaanta hai ki window har request par lagi ek limit hai',
  'Can split the context budget between the system prompt, tools, chunks and chat history':
    'Context budget ko system prompt, tools, chunks aur chat history ke beech baant sakta hai',
  'Can predict where context rot will cause trouble, and design retrieval around it':
    'Andaaza laga sakta hai ki context rot kahan dikkat degi, aur retrieval ko usi hisaab se design kar sakta hai',
  'Explain any “memory” feature as the plain engineering it really is.':
    'Kisi bhi “memory” feature ko woh simple engineering batakar samjhaiye jo woh asal mein hai.',
  'Knows the model is stateless, which means it remembers nothing between calls':
    'Jaanta hai ki model stateless hai, matlab ek call se doosri call tak use kuch yaad nahi rehta',
  'Can explain the trick of re-sending the chat each time, and how its cost grows':
    'Har baar poori chat dobara bhejne ki trick samjha sakta hai, aur yeh bhi ki uski cost kaise badhti hai',
  'Can question a vendor’s memory claim about storage, control and cost per query':
    'Vendor ke memory claim par storage, control aur per query cost ke baare mein sawaal pooch sakta hai',
  'Write a briefing page that makes the model behave, and know exactly what it can’t do.':
    'Aisa briefing page likhiye jisse model sahi behave kare, aur bilkul sahi jaaniye ki woh kya nahi kar sakta.',
  'Knows the system prompt sets the behaviour that stays the same on every request':
    'Jaanta hai ki system prompt woh behaviour tay karta hai jo har request par ek jaisa rehta hai',
  'Can write one that changes the tone and when the model refuses':
    'Aisa system prompt likh sakta hai jo tone badle aur yeh bhi ki model kab mana kare',
  'Treats it as a versioned file that others can review, and knows that changing it affects the cache':
    'Use ek versioned file ki tarah leta hai jise doosre review kar sakein, aur jaanta hai ki use badalne se cache par asar padta hai',
  'Can say what a prompt can never fix, and what has to be fixed in the structure of the system':
    'Bata sakta hai ki prompt kya kabhi theek nahi kar sakta, aur kya system ke structure mein hi theek karna padega',
  'Predict where a system will make things up, and name what causes it.':
    'Andaaza lagaiye ki system kahan baatein gadhega, aur uski wajah ka naam bataiye.',
  'Knows that hallucination is what a model does by default at the edge of what it knows, not a glitch':
    'Jaanta hai ki hallucination woh hai jo model apni jaankari ke kinaare par default mein karta hai, koi glitch nahi',
  'Can trigger it on purpose, and recognise what it looks like in a given subject area':
    'Use jaan-boojhkar trigger kar sakta hai, aur pehchaan sakta hai ki kisi subject area mein woh kaisa dikhta hai',
  'Can trace a made-up answer back to its cause: missing evidence, or a field the model was forced to fill':
    'Gadhe hue jawaab ki wajah tak pahunch sakta hai: evidence ki kami, ya aisa field jise model ko bharna hi tha',
  'Can design a way for the model to say “I don’t know”, so it is no longer forced to answer':
    'Aisa tareeka design kar sakta hai jisse model “mujhe nahi pata” keh sake, aur use jawaab dene ki majboori na rahe',
  'Choose a cutting rule for a type of document, and say what that rule gives up.':
    'Kisi tarah ke document ke liye cutting rule chuniye, aur bataiye ki woh rule kya chhod deta hai.',
  'Knows documents have to be cut into pieces, and that the piece size is a choice':
    'Jaanta hai ki documents ko tukdon mein katna padta hai, aur tukde ka size ek choice hai',
  'Can name the two kinds of damage: boundary cuts and orphans':
    'Do tarah ke nuksaan ke naam bata sakta hai: boundary cuts aur orphans',
  'Can pick a strategy for the way a particular document is laid out, and explain why':
    'Kisi khaas document ki banawat ke hisaab se strategy chun sakta hai, aur wajah bata sakta hai',
  'Can design the chunking and the added context for a set of documents, and predict which failures will remain':
    'Documents ke set ke liye chunking aur jodi gayi context design kar sakta hai, aur andaaza laga sakta hai ki kaun si failures phir bhi bachengi',
  'Predict which retrieval method will fail on a query, before you run it.':
    'Query chalane se pehle andaaza lagaiye ki kaun sa retrieval method fail hoga.',
  'Knows that keyword search matches spelling, and embeddings match meaning':
    'Jaanta hai ki keyword search spelling match karta hai, aur embeddings matlab match karte hain',
  'Can name the three things keyword search can’t see':
    'Keyword search jo 3 cheezein nahi dekh paata, unke naam bata sakta hai',
  'Can predict which method wins for each query, including when the query is an exact string':
    'Har query ke liye andaaza laga sakta hai ki kaun sa method jeetega, tab bhi jab query ek exact string ho',
  'Can sort a real mix of queries into types, and decide the architecture from that':
    'Asli queries ke mix ko types mein baant sakta hai, aur usi se architecture decide kar sakta hai',
  'Think about the meaning map in plain, down-to-earth terms.':
    'Meaning map ke baare mein saaf, seedhe words mein sochiye.',
  'Knows an embedding works like an address, and similar meanings sit close together':
    'Jaanta hai ki embedding ek address ki tarah kaam karta hai, aur milte-julte matlab paas-paas baithte hain',
  'Knows that queries and passages are treated differently, and that skipping this fails without any warning':
    'Jaanta hai ki queries aur passages ke saath alag tarah se pesh aana padta hai, aur ise chhodne par bina kisi warning ke fail hota hai',
  'Can design an experiment that tests an embedding model on your own set of documents':
    'Aisa experiment design kar sakta hai jo embedding model ko aapke apne documents par test kare',
  'Match each retrieval technique to the failure it fixes.':
    'Har retrieval technique ko us failure se milaiye jise woh theek karti hai.',
  'Can put the techniques in order of value for money, starting from a measured baseline':
    'Techniques ko value for money ke order mein laga sakta hai, measured baseline se shuru karke',
  'Catch the failures that no embedding model can ever notice.':
    'Woh failures pakadiye jinhe koi embedding model kabhi notice nahi kar sakta.',
  'Knows that outdated content is retrieved happily, with a high score':
    'Jaanta hai ki purana content khushi-khushi, high score ke saath retrieve ho jaata hai',
  'Can say which metadata a set of documents needs before it is indexed':
    'Bata sakta hai ki documents ke set ko index karne se pehle kaun sa metadata chahiye',
  'Can check a live set of documents for problems with versions, scope and how recent they are':
    'Live documents ke set mein versions, scope aur kitne naye hain, in cheezon ki dikkatein check kar sakta hai',
  'Build an answer key that looks like real traffic, including questions that have no answer.':
    'Aisa answer key banaiye jo asli traffic jaisa dikhe, un sawaalon ke saath jinka koi jawaab nahi hai.',
  'Knows that evaluation needs an answer key that was checked in advance':
    'Jaanta hai ki evaluation ke liye pehle se check kiya hua answer key chahiye',
  'Can write questions with checked answers and the places where those answers are found':
    'Check kiye hue jawaabon ke saath sawaal likh sakta hai, aur woh jagah bhi jahan jawaab milte hain',
  'Always includes questions with no answer, and the way real users phrase things':
    'Hamesha aise sawaal shaamil karta hai jinka koi jawaab nahi, aur woh tareeka bhi jisse asli users likhte hain',
  'Can build a ground truth from live traffic, and show that it represents real use':
    'Live traffic se ground truth bana sakta hai, aur dikha sakta hai ki woh asli istemaal ko represent karta hai',
  'Set the k dial on purpose for a named use case, and state what it costs.':
    'Kisi named use case ke liye k dial soch-samajhkar set kijiye, aur batayiye ki uski cost kya hai.',
  'Can choose k for a use case, and justify it by what a failure would cost':
    'Use case ke liye k chun sakta hai, aur wajah de sakta hai ki failure ki cost kitni hogi',
  'Can show a measured k-sweep (the results for many values of k) and recommend what to ship':
    'Measured k-sweep (k ki kai values ke results) dikha sakta hai aur recommend kar sakta hai ki kya ship karna hai',
  'Build a grader you can trust, and show why you can trust it.':
    'Aisa grader banaiye jis par bharosa ho sake, aur dikhaiye ki bharosa kyun kiya ja sakta hai.',
  'Knows a judge must be checked against labels given by humans':
    'Jaanta hai ki judge ko insaanon ke diye labels ke saamne check karna padta hai',
  'Can write a rubric that scores one thing at a time, and isn’t fooled by long answers or by the order of answers':
    'Aisa rubric likh sakta hai jo ek baar mein ek hi cheez score kare, aur lambe jawaabon ya jawaabon ke order se bevakoof na bane',
  'Can report how often the judge agrees with humans, and describe where it is wrong again and again':
    'Bata sakta hai ki judge kitni baar insaanon se sehmat hota hai, aur yeh bhi ki woh baar-baar kahan galat hota hai',
  'Read real outputs, and turn the failures into named groups you can count.':
    'Asli outputs padhiye, aur failures ko naam wale groups mein badaliye jinhe gina ja sake.',
  'Can write free-form notes on each failure, instead of jumping to categories too early':
    'Har failure par khule notes likh sakta hai, categories mein bahut jaldi kood jaane ke bajaye',
  'Can group the notes into a set of categories and count each group':
    'Notes ko categories ke set mein group kar sakta hai aur har group gin sakta hai',
  'Can decide the roadmap from the size of each group, and turn each group into regression cases':
    'Har group ke size se roadmap decide kar sakta hai, aur har group ko regression cases mein badal sakta hai',
  'Know, in numbers, how wrong your gut feeling usually is, and correct for it.':
    'Numbers mein jaaniye ki aapka gut feeling aam taur par kitna galat hota hai, aur use sudhaariye.',
  'Writes down a prediction before measuring':
    'Measure karne se pehle prediction likh leta hai',
  'Notices which way their own bias leans':
    'Dekh leta hai ki uska apna bias kis taraf jhukta hai',
  'Tracks the gap between guess and result across many measurements':
    'Kai measurements mein andaaze aur result ke beech ka farq track karta hai',
  'Adjusts estimates and decisions using their own known calibration curve':
    'Apni jaani hui calibration curve ke hisaab se estimates aur decisions adjust karta hai',
  'Design a schema that makes invalid output impossible, and gives the model no reason to make things up.':
    'Aisa schema design kijiye jisse galat output mumkin hi na ho, aur model ke paas kuch gadhne ki wajah na bache.',
  'Knows a schema limits the shape of the output':
    'Jaanta hai ki schema output ke shape ko limit karta hai',
  'Knows that a correct shape doesn’t mean the content is true':
    'Jaanta hai ki shape sahi hone ka matlab yeh nahi ki content sach hai',
  'Uses enums, nullable fields and a clear way for the model to refuse':
    'Enums, nullable fields aur model ke mana karne ka saaf tareeka use karta hai',
  'Designs evidence fields, so every record can be checked in seconds':
    'Evidence fields design karta hai, taaki har record seconds mein check ho sake',
  'Specify an agent that can’t run out of control, and can’t lie about what it did.':
    'Aisa agent specify kijiye jo control se bahar na ho sake, aur jo kiye hue kaam ke baare mein jhooth na bole.',
  'Can describe the loop: the model asks, your code runs the tool, and the result goes back':
    'Loop samjha sakta hai: model maangta hai, aapka code tool chalata hai, aur result wapas jaata hai',
  'Knows that a step budget and a rule for when to stop are a must':
    'Jaanta hai ki step budget aur kab rukna hai uska rule hona zaroori hai',
  'Treats tool descriptions as part of the product, to be reviewed like any other':
    'Tool descriptions ko product ka hissa maanta hai, jinhe baaki cheezon ki tarah review kiya jaata hai',
  'Designs the line between reading and writing, and the points where a human confirms':
    'Reading aur writing ke beech ki line design karta hai, aur woh points bhi jahan insaan confirm karta hai',
  'Decide what goes into the request, in what order, and what gets pushed out.':
    'Decide kijiye ki request mein kya jaayega, kis order mein, aur kya bahar nikaala jaayega.',
  'Can tell prompt engineering and context engineering apart':
    'Prompt engineering aur context engineering ka farq bata sakta hai',
  'Knows that putting the unchanging parts first makes caching possible':
    'Jaanta hai ki na badalne wale hisson ko pehle rakhne se caching possible hoti hai',
  'Can plan the space in a request, and choose what to cut when it’s tight':
    'Request ki jagah plan kar sakta hai, aur jab jagah kam ho toh chun sakta hai ki kya kaatna hai',
  'Can design compaction (shortening) that keeps identifiers instead of losing them':
    'Aisi compaction (chhota karna) design kar sakta hai jo identifiers ko khone ke bajaye bachaye rakhe',
  'Pay for thinking only where it pays off, and know how much waiting time you spent.':
    'Sochne ke paise sirf wahin dijiye jahan woh paisa vasool ho, aur jaaniye ki aapne kitna waiting time kharch kiya.',
  'Can sort real traffic into types and work out the combined cost':
    'Asli traffic ko types mein baant sakta hai aur milakar cost nikaal sakta hai',
  'Knows reasoning can’t fix bad retrieval, and can prove it with an example':
    'Jaanta hai ki reasoning kharab retrieval ko theek nahi kar sakti, aur example se saabit kar sakta hai',
  'Know what your documents really are before you design for them.':
    'Design karne se pehle jaaniye ki aapke documents asal mein kya hain.',
  'Knows real documents are pages, not clean text':
    'Jaanta hai ki asli documents pages hote hain, saaf text nahi',
  'Knows that table extraction quietly destroys the link between rows and columns':
    'Jaanta hai ki table extraction chupchaap rows aur columns ke beech ka rishta tod deti hai',
  'Can check how much of a set of documents is text, scans and tables':
    'Check kar sakta hai ki documents ke set mein kitna text hai, kitne scans hain aur kitne tables',
  'Check any system for the three legs, and name the one you would break.':
    'Kisi bhi system mein teeno legs check kijiye, aur us ek ka naam bataiye jise aap todenge.',
  'Knows instructions can hide inside the content a model reads':
    'Jaanta hai ki instructions us content ke andar chhup sakti hain jo model padhta hai',
  'Can tell direct injection from indirect injection':
    'Direct injection aur indirect injection ka farq bata sakta hai',
  'Can specify the change in design that breaks a leg, rather than a partial fix':
    'Aisa design change specify kar sakta hai jo ek leg tod de, adhoore fix ke bajaye',
  'Tell apart something that only asks from something that enforces.':
    'Jo sirf kehta hai aur jo sach mein rokta hai, dono ka farq pehchaaniye.',
  'Can say whether any defence depends on the model or is built into the structure':
    'Bata sakta hai ki koi bhi defence model par depend karti hai ya system ke structure mein bani hai',
  'Designs the system so that even a successful injection can’t cause harm':
    'System aise design karta hai ki kaamyaab injection bhi nuksaan na kar sake',
  'Place a system in a risk tier, and write the file that tier requires.':
    'System ko ek risk tier mein rakhiye, aur woh file likhiye jo us tier ko chahiye.',
  'Knows that your duties grow with the consequences, not with the technology':
    'Jaanta hai ki aapki zimmedariyan nateeje ke saath badhti hain, technology ke saath nahi',
  'Can place a use case in a tier and explain why':
    'Use case ko tier mein rakh sakta hai aur wajah bata sakta hai',
  'Can spot a governance file that uses adjectives where it should show evidence':
    'Aisi governance file pakad sakta hai jisme evidence ki jagah adjectives bhare hain',
  'Specify a review that people can really carry out at real volume.':
    'Aisa review specify kijiye jo log asli volume par sach mein kar sakein.',
  'Can specify who reviews what, and what they get to see':
    'Bata sakta hai ki kaun kya review karega, aur use kya dikhega',
  'Checks whether the design is feasible at real volume':
    'Check karta hai ki design asli volume par chal sakta hai ya nahi',
  'Uses checks and structure so that reviewers can focus on the right items at scale':
    'Checks aur structure use karta hai, taaki scale par reviewers sahi items par focus kar sakein',
  'Follow one document through every store it reaches, and back out again.':
    'Ek document ko har us store tak follow kijiye jahan woh pahunchta hai, aur phir wapas bahar tak.',
  'Can run the deletion drill and find the stores you can’t reach':
    'Deletion drill chala sakta hai aur woh stores dhoondh sakta hai jinhe aap reach nahi kar sakte',
  'Can specify where data came from (lineage) and how long it is kept, before a set of documents is loaded':
    'Documents ka set load karne se pehle bata sakta hai ki data kahan se aaya (lineage) aur kitne time tak rakha jaayega',
  'Decide whether a feature can still make sense once you see its own bill.':
    'Decide kijiye ki feature ka apna bill dekhne ke baad bhi woh sense banata hai ya nahi.',
  'Can work out a simple cost per query':
    'Ek simple per query cost nikaal sakta hai',
  'Can build a full cost model, and work out the saving from a cascade':
    'Poora cost model bana sakta hai, aur cascade se hone wali bachat nikaal sakta hai',
  'Can state the case for the margin, and decide to stop or fund a feature based on it':
    'Margin ka case bata sakta hai, aur uske aadhaar par feature band karne ya fund karne ka decision le sakta hai',
  'Turn any claim into the question that would make it evidence.':
    'Kisi bhi claim ko woh sawaal banaiye jo use evidence bana de.',
  'Asks for a measurement on OUR ground truth, with a stated configuration':
    'HAMARE ground truth par measurement maangta hai, saaf bataye gaye configuration ke saath',
  'Write acceptance criteria that you can test against a spread of behaviour, not one fixed output.':
    'Aise acceptance criteria likhiye jo behaviour ke poore spread par test ho sakein, ek fixed output par nahi.',
  'Knows an AI feature gives a spread of outputs, not one fixed output':
    'Jaanta hai ki AI feature outputs ka ek spread deta hai, ek fixed output nahi',
  'Can write one acceptance criterion based on an eval threshold':
    'Eval threshold par based ek acceptance criterion likh sakta hai',
  'Can write a full set, including questions with no answer and questions in a second language':
    'Poora set likh sakta hai, jisme bina jawaab wale sawaal aur doosri language ke sawaal bhi hon',
  'Explain it so well that a senior, non-technical person can repeat it themselves.':
    'Itna achha samjhaiye ki ek senior, non-technical insaan use khud dohra sake.',
  'Can explain, in plain words, how it fails and what that means for the business':
    'Saaf words mein samjha sakta hai ki yeh kaise fail hota hai aur business ke liye iska matlab kya hai',
  'Choose between real options using measured evidence, and say what each one costs you.':
    'Measured evidence se asli options mein se chuniye, aur bataiye ki har ek ki aapko kya keemat padti hai.',
  'Can find which component causes a given symptom':
    'Dhoondh sakta hai ki kaun sa component diye gaye symptom ki wajah hai',
  'Can order a roadmap by measured impact, and defend it when challenged':
    'Roadmap ko measured impact ke order mein laga sakta hai, aur challenge hone par uska defence kar sakta hai',
  'Work out whether a failure needs better prompting, retrieval, tuning or a different model, and defend the choice with a measurement.':
    'Pata lagaiye ki failure ko behtar prompting, retrieval, tuning ya doosra model chahiye, aur apni choice ka measurement se defence kijiye.',
  'Can find the cause of a real failure from evidence, pick the lever, and say what would prove the choice right':
    'Evidence se asli failure ki wajah dhoondh sakta hai, lever chun sakta hai, aur bata sakta hai ki kya cheez is choice ko sahi saabit karegi',
  'Can turn “should we fine-tune?” into a decision with costs, owners, an eval and a plan for phasing the model out':
    '“Kya hum fine-tune karein?” ko ek aise decision mein badal sakta hai jisme costs, owners, ek eval aur model ko phase out karne ka plan ho',
  'Can use confidence to decide where a case goes, instead of showing it as a number':
    'Confidence ko number ki tarah dikhane ke bajaye, yeh tay karne mein use kar sakta hai ki case kahan jaayega',
  'Can write all four states, including refusal and a gentle fallback, and compare the time to correct a mistake with the time the manual workaround takes':
    'Chaaron states likh sakta hai, refusal aur ek narm fallback ke saath, aur galti sudharne ke time ko manual workaround ke time se compare kar sakta hai',
  'Can explain why a good feature can still fail on the real mix of users and inputs':
    'Samjha sakta hai ki ek achha feature asli users aur inputs ke mix par phir bhi kyun fail ho sakta hai',
  'Knows that opinions and “what if” answers are weak evidence':
    'Jaanta hai ki raay aur “agar aisa hota” wale jawaab kamzor evidence hain',
  'Can run five interviews and pull them together into a job statement and a ranked list of problems':
    '5 interviews le sakta hai aur unhe milakar ek job statement aur problems ki ranked list bana sakta hai',
  'Knows a market size needs a stated unit and a stated base to divide by':
    'Jaanta hai ki market size ke liye ek bataya gaya unit aur ek bataya gaya base chahiye jisse bhaag diya jaaye',
  'Can map the stakeholders, what each one wants, and who can say no':
    'Stakeholders ka map bana sakta hai, har ek ko kya chahiye, aur kaun mana kar sakta hai',
  'Write a spec that engineers can build from, cut it into thin slices, and test it with users first.':
    'Aisa spec likhiye jisse engineers bana sakein, use patle slices mein kaatiye, aur pehle users ke saath test kijiye.',
  'Can build a prototype, test it with users, and change the spec based on what they did':
    'Prototype bana sakta hai, users ke saath test kar sakta hai, aur unhone jo kiya uske hisaab se spec badal sakta hai',
  'Add tracking to a product, read funnels and cohorts, and run an experiment that can really answer a question.':
    'Product mein tracking jodiye, funnels aur cohorts padhiye, aur aisa experiment chalaiye jo sach mein ek sawaal ka jawaab de sake.',
});
