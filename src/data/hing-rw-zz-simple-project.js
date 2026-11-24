/* Hinglish for Project page (project), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'The one thing you build across the whole course':
    'Woh ek cheez jo aap poore course mein banate hain',
  'From the first chapter to the last, every capstone question (the big exercise at the end of a chapter) is about one real project. So you do not end up with sixty small exercises that have nothing to do with each other. You end up with one piece of work. You can show it to an employer, and you understand it from the inside.':
    'Pehle chapter se aakhri chapter tak, har capstone sawaal (chapter ke end ki badi exercise) ek hi asli project ke baare mein hai. Isliye aapke paas 60 chhote exercises nahi bachte jinka aapas mein koi lena-dena na ho. Aapke paas ek poora kaam hota hai. Aap use kisi employer ko dikha sakte hain, aur use andar se samajhte hain.',
  'The project is called <strong>Bharat Privacy Guard</strong>. Think of a guard at a society gate. This small tool stands between a person and a website, an app or an AI chatbot. Say someone types “my Aadhaar number is 4321 5678 9012”. The tool notices it. Before the number goes anywhere, the website can hide it, mask it, or ask if it really needs it.':
    'Project ka naam hai <strong>Bharat Privacy Guard</strong>. Society ke gate par baithe guard ko sochiye. Yeh chhota tool kisi insaan aur website, app ya AI chatbot ke beech mein khada rehta hai. Maan lijiye koi type karta hai “my Aadhaar number is 4321 5678 9012”. Tool use pakad leta hai. Number kahin aage jaane se pehle, website use hide kar sakti hai, mask kar sakti hai, ya pooch sakti hai ki use sach mein yeh number chahiye bhi ya nahi.',
  'This page explains the project once, in plain words. Every capstone links back to one stage on this page. So you always know which piece you are building, and why.':
    'Yeh page project ko ek baar, saaf words mein samjhata hai. Har capstone is page ke ek stage se juda hai. Isliye aapko hamesha pata rehta hai ki aap kaun sa hissa bana rahe hain, aur kyun.',
  'Why this project, and why not just use Rampart':
    'Yeh project kyon, aur sirf Rampart kyon nahi',
  'Rampart is an existing open tool (anyone can use it) that finds personal details in text. It was built and tested on English and six other European languages. All of them use the Latin alphabet. Its own published model card (the tool’s report card) says it does poorly on Hindi in Devanagari script. When this page was written, it found only about 14 out of every 100 personal details there. That model card may have changed since. Other tools for Hindi may exist. So in Chapter A2 you check the number yourself. Do not just trust this page.':
    'Rampart ek maujooda open tool hai (koi bhi use kar sakta hai) jo text mein personal details dhoondhta hai. Ise English aur 6 doosri European languages par banaya aur test kiya gaya. Yeh sab Latin alphabet mein likhi jaati hain. Uska apna published model card (tool ka report card) kehta hai ki Devanagari script ki Hindi par woh kamzor hai. Jab yeh page likha gaya, tab woh wahan har 100 personal details mein se sirf lagbhag 14 dhoondh paata tha. Woh model card tab se badal chuka ho sakta hai. Hindi ke liye doosre tools bhi ho sakte hain. Isliye Chapter A2 mein aap yeh number khud check karte hain. Sirf is page par bharosa mat kijiye.',
  'People in India type in English, in Hindi, and in Hinglish. Hinglish is Hindi written in English letters. Often they switch inside one sentence. They also type things a European tool was never built to know: Aadhaar numbers, PAN cards, UPI IDs, mobile numbers that start with 98. A tool that handles only one kind of writing leaves most of the problem untouched.':
    'India mein log English, Hindi aur Hinglish mein type karte hain. Hinglish matlab English letters mein likhi Hindi. Aksar woh ek hi sentence ke andar ek se doosri par chale jaate hain. Woh aisi cheezein bhi type karte hain jinhe pehchaanne ke liye koi European tool bana hi nahi tha: Aadhaar numbers, PAN cards, UPI IDs, 98 se shuru hone wale mobile numbers. Jo tool sirf ek tarah ki writing sambhalta hai, woh problem ka zyadatar hissa jaisa ka taisa chhod deta hai.',
  'So this project is not a copy of Rampart. It asks one question. Can a small tool find personal details in English, Hindi and Hinglish, and say honestly what it misses? The tool must be light enough to run inside a browser or on a phone.':
    'Isliye yeh project Rampart ki copy nahi hai. Yeh ek hi sawaal poochta hai. Kya ek chhota tool English, Hindi aur Hinglish mein personal details dhoondh sakta hai, aur imaandaari se bata sakta hai ki usse kya chhoot gaya? Tool itna halka hona chahiye ki browser ya phone ke andar chal sake.',
  'What this project is not':
    'Yeh project kya nahi hai',
  'It is not a “DPDP compliance engine”. India’s data protection law (the Digital Personal Data Protection Act, 2023, and the Rules notified in 2025) is like a thick rulebook. It asks an organisation for much more than a tool that finds personal details. It asks for clear notices, consent, security safeguards, limits on how long data is kept, a way to handle breaches, and more. Finding and hiding personal details is one technical piece. It helps an organisation collect and pass on less data.':
    'Yeh “DPDP compliance engine” nahi hai. India ka data protection law (Digital Personal Data Protection Act, 2023, aur 2025 mein notify hue Rules) ek moti rulebook jaisa hai. Woh kisi organisation se us tool se kaafi zyada maangta hai jo personal details dhoondhta hai. Woh clear notices, consent, security safeguards, data kitne time tak rakha jaye uski limits, breach sambhalne ka tareeka, aur bhi bahut kuch maangta hai. Personal details dhoondhna aur chhupana ek technical hissa hai. Yeh organisation ko kam data collect karne aur aage dene mein madad karta hai.',
  'So in every document you write in this course, describe the project as “a privacy tool that helps an organisation collect and share less personal data”. Never write that it makes anyone compliant. Chapter 17’s system card and Chapter 18’s product requirements both ask you to write this limit down.':
    'Isliye is course mein aap jo bhi document likhein, usmein project ko aise bataiye: “a privacy tool that helps an organisation collect and share less personal data”. Yeh kabhi mat likhiye ki yeh kisi ko compliant bana deta hai. Chapter 17 ka system card aur Chapter 18 ki product requirements, dono aapse yeh limit likhwate hain.',
  'How the tool works: three finders and a rule-keeper':
    'Tool kaise kaam karta hai: teen finders aur ek rule-keeper',
  'Text goes through the parts below in order, like a parcel passing a row of checkpoints. The first two are cheap and fast. The third costs more. So it only looks at the sentences the first two could not settle. Then the rule-keeper decides what to do with everything that was found.':
    'Text neeche diye hisson se order mein guzarta hai, jaise parcel checkpoints ki line se guzarta hai. Pehle do sasta aur fast hain. Teesra zyada mehnga hai. Isliye woh sirf un sentences ko dekhta hai jinhe pehle do settle nahi kar paaye. Phir rule-keeper decide karta hai ki jo kuch mila, uska kya karna hai.',
  'The person types or uploads':
    'Insaan type ya upload karta hai',
  'Pattern checker':
    'Pattern checker',
  'Name-and-place finder':
    'Name-and-place finder',
  'Context judge':
    'Context judge',
  'Rule-keeper':
    'Rule-keeper',
  'Safe text goes on to the website, the server or the AI model':
    'Surakshit text website, server ya AI model tak jaata hai',
  'The pattern checker':
    'Pattern checker',
  'Finds details that always have the same shape, like a train ticket number.':
    'Woh details dhoondhta hai jinki shakl hamesha ek jaisi hoti hai, jaise train ticket ka number.',
  'A PAN is always five capital letters, four digits and one capital letter. An Aadhaar number is twelve digits. A mobile number is ten digits that start with 6, 7, 8 or 9. Fixed rules can find all of these. No AI is needed. So the check is fast and free. It gives the same answer every time.':
    'PAN hamesha 5 capital letters, 4 digits aur 1 capital letter ka hota hai. Aadhaar number 12 digits ka hota hai. Mobile number 10 digits ka hota hai jo 6, 7, 8 ya 9 se shuru hota hai. In sab ko fixed rules se dhoondha ja sakta hai. AI ki zaroorat nahi. Isliye yeh check fast hai aur free hai. Har baar same jawaab deta hai.',
  'The name-and-place finder':
    'Name-and-place finder',
  'Finds details that have no fixed shape, like a name in a crowd.':
    'Woh details dhoondhta hai jinki koi tay shakl nahi hoti, jaise bheed mein koi naam.',
  'Nothing about “Ramesh Jain”, “14 Sector 15, Gurgaon” or “Acme Bank” follows a pattern. So fixed rules cannot find them. Instead, a small language model reads the sentence. It marks people, addresses, workplaces, dates of birth and family relationships. It is small enough to run on a phone or in a browser.':
    '“Ramesh Jain”, “14 Sector 15, Gurgaon” ya “Acme Bank” mein se kisi ka bhi koi pattern nahi hota. Isliye fixed rules inhe nahi pakad sakte. Iske bajaye ek chhota language model sentence padhta hai. Woh logon, addresses, workplaces, dates of birth aur family relationships ko mark karta hai. Yeh itna chhota hai ki phone ya browser mein chal sakta hai.',
  'The context judge':
    'Context judge',
  'Notices sentences that point to one person even with no ID in them.':
    'Aise sentences pakadta hai jo kisi ID ke bina bhi ek insaan ki taraf ishaara karte hain.',
  '“I am the only diabetic patient in my village who had a transplant last year” has no name and no number. Yet it points to one person. So a larger AI model is asked to judge sentences like this. It sees only the few sentences the first two parts could not settle. It costs more and is slower.':
    '“I am the only diabetic patient in my village who had a transplant last year” mein na koi naam hai na koi number. Phir bhi yeh ek insaan ki taraf ishaara karta hai. Isliye aise sentences judge karne ke liye ek bada AI model use hota hai. Woh sirf wahi chand sentences dekhta hai jo pehle do parts settle nahi kar paaye. Woh zyada mehnga aur slow hai.',
  'The rule-keeper':
    'Rule-keeper',
  'Decides what to do with everything that was found, like a guard with a rulebook.':
    'Tay karta hai ki jo kuchh mila uska kya karna hai, jaise rulebook wala guard.',
  'For each detail it picks one action: remove it, mask it (98******12), let it through, or ask the person. The choice depends on why the website collects the data. A delivery address is needed for a delivery. An Aadhaar number is not needed to subscribe to a newsletter.':
    'Har detail ke liye woh ek action chunta hai: use hata do, mask kar do (98******12), jaane do, ya insaan se pooch lo. Yeh choice is par depend karti hai ki website data kyun collect kar rahi hai. Delivery ke liye delivery address chahiye. Newsletter subscribe karne ke liye Aadhaar number nahi chahiye.',
  'What you build, and what you only plan':
    'Aap kya banate hain, aur kya sirf plan karte hain',
  'One learner cannot build the whole idea in one course. So the course draws a line, like a chalk line on a playground. In your own documents, say clearly which side of the line each piece is on.':
    'Ek learner ek course mein poora idea nahi bana sakta. Isliye course ek line kheenchta hai, jaise maidan par chalk ki line. Apne documents mein saaf likhiye ki har hissa line ke kis taraf hai.',
  'You build this':
    'Yeh aap banate hain',
  'Three kinds of writing: English, Hindi (Devanagari script) and Hinglish.':
    'Teen tarah ki likhai: English, Hindi (Devanagari script) aur Hinglish.',
  'Eleven kinds of ID that have a fixed shape: PAN, Aadhaar, mobile number, email, IFSC code, bank account number, UPI ID, GSTIN, passport number, vehicle registration and PIN code.':
    'Gyarah tarah ki ID jinki shakl tay hoti hai: PAN, Aadhaar, mobile number, email, IFSC code, bank account number, UPI ID, GSTIN, passport number, vehicle registration aur PIN code.',
  'Six kinds of detail that have no fixed shape: a person’s name, an address, an organisation, a date of birth, a family relationship and a profession.':
    'Chhe tarah ki details jinki koi tay shakl nahi hoti: kisi insaan ka naam, pata, sanstha, janm tithi, parivaar ka rishta aur peshha.',
  'A risk score for sentences that point to one person with no ID in them.':
    'Un sentences ke liye risk score jo bina kisi ID ke ek insaan ki taraf ishaara karte hain.',
  'A rule-keeper that decides what to do with each finding. You build it twice: as a fixed workflow and as a bounded agent (a helper with a step limit). A person approves the risky actions. You measure and compare the two.':
    'Ek rule-keeper jo har finding ke saath kya karna hai yeh tay karta hai. Aap ise do baar banate hain: ek fixed workflow aur ek bounded agent (step limit wala helper). Risky actions ko ek insaan approve karta hai. Aap dono ko naap kar compare karte hain.',
  'One finished product: a developer kit (SDK). It is a small library (ready-made code others can borrow) plus a demo page. You paste text on the page and see it cleaned.':
    'Ek poora product: ek developer kit (SDK). Yeh ek chhoti library hai (taiyaar code jo doosre use kar sakte hain) aur ek demo page. Aap page par text paste karte hain aur use saaf hota dekhte hain.',
  'You design this on paper':
    'Yeh aap kaagaz par design karte hain',
  'The gateway: a version that sits in front of a company’s servers, logs and AI traffic. You write its plan, its architecture and its risks. You do not have to build it.':
    'The gateway: ek aisa version jo company ke servers, logs aur AI traffic ke aage baithta hai. Aap uska plan, architecture aur risks likhte hain. Use banana zaroori nahi hai.',
  'The browser extension: a version that warns a person before they submit a form. You design this on paper only.':
    'Browser extension: ek version jo form submit karne se pehle insaan ko chetavni deta hai. Ise aap sirf kaagaz par design karte hain.',
  'You leave this for later, and say so':
    'Yeh aap baad ke liye chhodte hain, aur kehte hain ki chhoda hai',
  'Other Indian languages such as Tamil, Bengali, Telugu, Marathi and Gujarati. In your documents, say plainly that these are not covered yet.':
    'Doosri Indian languages, jaise Tamil, Bengali, Telugu, Marathi aur Gujarati. Apne documents mein saaf likhiye ki yeh abhi cover nahi hui hain.',
  'A phone app version of the developer kit.':
    'Developer kit ka phone app version.',
  'The eleven kinds of ID the pattern checker looks for':
    'Gyarah tarah ki ID jo pattern checker dhoondhta hai',
  'Every example below is made up. Use made-up values like these in your own work. Never put a real person’s details into a test file.':
    'Neeche ka har example banaya hua hai. Apne kaam mein bhi aise hi banaye hue values use kijiye. Kisi asli insaan ki details kabhi test file mein mat daliye.',
  'Kind of ID':
    'ID ka prakaar',
  'Made-up example':
    'Banaya hua example',
  'The shape the rule looks for':
    'Woh shakl jo rule dhoondhta hai',
  'The starter sentences':
    'Shuruaati sentences',
  'Here are ten made-up sentences you can use from your very first chapter. They are the first ten rows of your answer key (the teacher’s list of right answers, explained below). Version 1 adds two messy sentences of your own. Copy them into a spreadsheet. Whenever a capstone says “the starter sentences”, use these.':
    'Yeh 10 banaye hue sentences hain jo aap bilkul pehle chapter se use kar sakte hain. Yeh aapke answer key ki pehli 10 rows hain (answer key matlab teacher ki sahi jawaabon ki list, neeche samjhaya hai). Version 1 mein aapke apne do messy sentences jodte hain. Inhe ek spreadsheet mein copy kar lijiye. Jab bhi koi capstone “the starter sentences” kahe, inhe use kijiye.',
  'What is hidden inside it':
    'Isme kya chhupa hai',
  'The answer key: one test file that grows through the whole course':
    'Answer key: ek test file jo poore course mein badhti hai',
  'A tool like this is only as good as its test. The answer key is a spreadsheet of sentences. For each one, you have already written down by hand what the tool should find, like a teacher’s answer key. You run the tool. You compare its answers with yours. You count the mistakes. You start the answer key in Chapter 2.2 and add to it in later chapters. Each time, save it as a new version of the same file. Do not start a new file.':
    'Aisa tool utna hi achha hota hai jitna uska test. Answer key sentences ki ek spreadsheet hai. Har sentence ke liye aap pehle se haath se likh dete hain ki tool ko kya dhoondhna chahiye, bilkul teacher ki answer key jaisa. Aap tool chalate hain. Uske jawaab apne jawaabon se compare karte hain. Galtiyan gin lete hain. Answer key aap Chapter 2.2 mein shuru karte hain aur aage ke chapters mein usmein jodte jaate hain. Har baar use usi file ke naye version ki tarah save kijiye. Nayi file mat banaiye.',
  'Every row has six columns. First comes a number. Then the kind of writing (English, Hindi or Hinglish). Then the sentence. After that come what should be found (the kind and the exact words), what should happen to it (remove, mask or leave alone), and a note.':
    'Har row mein 6 columns hote hain. Pehle ek number. Phir kis tarah ki writing hai (English, Hindi ya Hinglish). Phir sentence. Uske baad kya milna chahiye (kaun si kism ka detail aur exact words), uska kya hona chahiye (remove, mask ya chhod dena), aur ek note.',
  'Where you make it':
    'Kahan banate hain',
  'Size':
    'Size',
  'What goes in':
    'Isme kya jaata hai',
  'Tricky rows to add as you go':
    'Mushkil rows jo aap aage badhte hue jodte hain',
  'A number written with extra spaces or dashes, such as 4321-5678-9012.':
    'Ek number jo extra spaces ya dash ke saath likha hai, jaise 4321-5678-9012.',
  'A number broken across two lines.':
    'Ek number jo do lines mein toot gaya hai.',
  'A spelling mistake in the word next to an ID, such as “adhar” or “mobil”.':
    'ID ke paas wale shabd mein spelling ki galti, jaise “adhar” ya “mobil”.',
  'Text that came out of a photo scan, where the letter O is mixed up with the digit 0.':
    'Photo scan se nikla text, jisme letter O aur digit 0 aapas mein mile hote hain.',
  'Speech typed by voice, with no punctuation at all.':
    'Awaaz se type kiya gaya text, jisme koi punctuation hi nahi.',
  'A sentence that changes from Hindi script to English letters halfway through.':
    'Ek sentence jo beech mein Hindi script se English letters mein badal jaata hai.',
  'An invisible character hidden inside a number.':
    'Ek number ke andar chhipa hua invisible character.',
  'How the capstone questions work':
    'Capstone sawaal kaise kaam karte hain',
  'Each chapter ends with a capstone, written like an exam question. It has four parts. <strong>The situation</strong> tells you where you are in the project and what you already have. <strong>Your task</strong> is a numbered list. Do the steps in order. <strong>What to hand in</strong> lists exactly what you must have at the end. <strong>Where you do this</strong> says if the work happens in a notebook (code) or on paper or in a document (writing).':
    'Har chapter ek capstone par khatam hota hai, jo exam ke sawaal jaisa likha hota hai. Uske 4 parts hote hain. <strong>The situation</strong> batata hai ki aap project mein kahan hain aur aapke paas pehle se kya hai. <strong>Your task</strong> ek numbered list hai. Steps order mein kijiye. <strong>What to hand in</strong> mein likha hota hai ki aakhir mein aapke paas exactly kya hona chahiye. <strong>Where you do this</strong> batata hai ki kaam notebook mein hoga (code) ya paper par ya document mein (writing).',
  'Every capstone also shows which stage of the project it belongs to, with a link back to this page. Keep everything you make in the repository (an online folder that remembers every change) you set up in Chapter A1. Use the folders that chapter asks for. By the last chapter, that repository is the project.':
    'Har capstone yeh bhi dikhata hai ki woh project ke kis stage ka hai, aur is page ka link bhi deta hai. Jo kuch aap banaate hain, woh sab us repository (ek online folder jo har badlaav yaad rakhta hai) mein rakhiye jo aapne Chapter A1 mein set up ki thi. Un folders ka use kijiye jo woh chapter batata hai. Aakhri chapter tak, wahi repository aapka project ban jaati hai.',
  'The thirteen stages of the project':
    'Project ke terah stages',
  'Work through the stages in order. Each stage lists its chapters, says what the stage is for, and tells you what you will have when it is finished. Chapter 34 has its own eleven stages, from discover to defend. Together they make up stage 12 here.':
    'Stages ko order mein kijiye. Har stage mein uske chapters likhe hain, yeh bataya gaya hai ki stage kis kaam ka hai, aur yeh bhi ki khatam hone par aapke paas kya hoga. Chapter 34 ke apne gyarah stages hain, discover se defend tak. Milkar woh yahan stage 12 banate hain.',
  'Decide what you are building, and why':
    'Tay kijiye ki aap kya bana rahe hain, aur kyon',
  'Before any code, you do the work a product manager does first. You name the problem and study the existing tool. You talk to real people, size the market and choose a strategy. Then you plan the work and write the requirements. You also run first experiments. They show how AI models behave on Indian text.':
    'Code se pehle, aap woh kaam karte hain jo product manager sabse pehle karta hai. Aap problem ka naam rakhte hain aur maujooda tool ko study karte hain. Asli logon se baat karte hain, market ka size nikaalte hain aur strategy chunte hain. Phir kaam plan karte hain aur requirements likhte hain. Saath mein pehle experiments chalate hain. Unse dikhta hai ki AI models Indian text par kaise behave karte hain.',
  'A scorecard of your own skills, and a repository with a decision log':
    'Aapke apne skills ka scorecard, aur decision log ke saath ek repository',
  'A written teardown of Rampart, checked against its own model card':
    'Rampart ka likha hua teardown, uske apne model card se jaancha hua',
  'Notes from five real interviews and a ranked problem brief':
    'Paanch asli interviews ke notes aur ek ranked problem brief',
  'A market estimate, a strategy memo and a roadmap':
    'Ek market estimate, ek strategy memo aur ek roadmap',
  'A requirements document and a clickable first prototype':
    'Ek requirements document aur ek clickable pehla prototype',
  'First contact: what does an AI model do with Indian text?':
    'Pehla samparka: Bharatiya text ke saath AI model kya karta hai?',
  'You try ready-made AI models on the starter sentences. You see how text is cut into small pieces (tokens, like Lego bricks) and what one check costs. Then you learn to write clear instructions that get a model to find personal details.':
    'Aap ready-made AI models ko starter sentences par try karte hain. Aap dekhte hain ki text chhote tukdon (tokens, Lego ki eent jaise) mein kaise kata jaata hai aur ek check ki cost kitni aati hai. Phir aap seekhte hain ki saaf instructions kaise likhein jisse model personal details dhoondh le.',
  'Token counts for English, Hindi and Hinglish side by side':
    'English, Hindi aur Hinglish ke token counts saath-saath',
  'The measured cost of checking one message, and a thousand':
    'Ek message jaanchne ka, aur ek hazaar ka, naapa hua cost',
  'A written instruction (a prompt) that finds personal details, tested on the starter sentences':
    'Ek likha hua instruction (prompt) jo nijee details dhoondhta hai, shuruaati sentences par test kiya hua',
  'The answer key and the first sorter':
    'Answer key aur pehla sorter',
  'You build the answer key, the test file the whole project depends on. Then you break the big job into small tasks. You also build a sorter. It says whether a piece of text is a PAN, an Aadhaar number or a mobile number.':
    'Aap answer key banate hain, yaani woh test file jis par poora project tika hai. Phir bade kaam ko chhote tasks mein todte hain. Saath mein ek sorter bhi banate hain. Woh batata hai ki text ka ek tukda PAN hai, Aadhaar number hai ya mobile number.',
  'Answer key version 1, with twelve labelled rows':
    'Answer key version 1, baarah label ki hui rows ke saath',
  'A task breakdown of the whole tool':
    'Poore tool ka ek task breakdown',
  'A tested sorter for the kind of ID':
    'ID ke prakaar ke liye ek test kiya hua sorter',
  'A privacy summary that has been checked against the facts':
    'Ek privacy summary jo tathyon se jaanchi gayi hai',
  'The pattern checker and the meaning finder':
    'Pattern checker aur meaning finder',
  'You build the first real part of the tool, the pattern checker. You find where fixed rules fail. Then you try finding things by their meaning, not their exact shape.':
    'Aap tool ka pehla asli hissa banate hain, pattern checker. Aap dekhte hain ki fixed rules kahan fail hote hain. Phir aap cheezein exact shape ke bajaye unke matlab se dhoondhne ki koshish karte hain.',
  'A rule for cutting long text without splitting an ID in half':
    'Lambe text ko kaatne ka aisa rule jo kisi ID ko beech se na tode',
  'A working pattern checker for the eleven kinds of ID, with its failures written down':
    'Gyarah tarah ki ID ke liye kaam karta hua pattern checker, uski failures likhi hui',
  'A side-by-side comparison of rule-based and meaning-based finding':
    'Rule-based aur meaning-based dhoondhne ki saath-saath tulna',
  'Measure it, then take stock':
    'Ise naapiye, phir hisaab lagaiye',
  'You put a number on how good the tool is. Then you write an honest page about what it cannot do yet.':
    'Aap tool kitna achha hai, us par ek number lagate hain. Phir ek imaandaar page likhte hain ki woh abhi kya nahi kar sakta.',
  'A scoreboard: how many details were found, missed or wrongly flagged, for each kind of ID and each kind of writing':
    'Ek scoreboard: har ID prakaar aur har likhai ke prakaar ke liye kitni details mili, chhooti ya galat flag hui',
  'A note saying whether this version is good enough to ship':
    'Ek note ki yeh version ship karne ke liye kaafi achha hai ya nahi',
  'An inventory of the gaps in version 0':
    'Version 0 ki kamiyon ki list',
  'A dependable output and the rule-keeper':
    'Bharosemand output aur rule-keeper',
  'You make the tool always answer in the same fixed format, so other software can rely on it. Then you build the rule-keeper and work out how much text can be sent onward. You also decide when the expensive AI is worth paying for. Last, you check that the tool is fast enough for a live chat.':
    'Aap tool ko hamesha ek hi fixed format mein jawaab dene wala banate hain, taaki doosra software us par bharosa kar sake. Phir rule-keeper banate hain aur nikaalte hain ki aage kitna text bheja ja sakta hai. Aap yeh bhi decide karte hain ki mehnga AI kab paise dene layak hai. Aakhir mein check karte hain ki tool live chat ke liye kaafi fast hai ya nahi.',
  'A fixed answer format that never breaks':
    'Ek tay jawab format jo kabhi nahi tootta',
  'An extractor that says “not sure” instead of guessing':
    'Ek extractor jo andaaza lagane ki jagah “pakka nahi” kehta hai',
  'A rule-keeper with its limits written down first':
    'Ek rule-keeper jiski seemayein pehle likhi gayi hain',
  'A budget for what is sent onward':
    'Aage kya bheja jaata hai uska budget',
  'A rule for when to use the expensive model':
    'Mehnge model ko kab use karna hai uska rule',
  'A speed target for live chat':
    'Live chat ke liye speed target',
  'Make it better, then attack it':
    'Ise behtar banaiye, phir ispar hamla kijiye',
  'You improve the tool one change at a time and measure each change. Then you try to break it. Can a sentence hidden in the text give orders to the AI? You build an automatic marker (a second student who marks the homework) to check the tool’s work. And you read a hundred real outputs by hand, to learn what goes wrong.':
    'Aap tool ko ek-ek change karke behtar banate hain aur har change measure karte hain. Phir use todne ki koshish karte hain. Kya text mein chhupa ek sentence AI ko orders de sakta hai? Aap tool ka kaam check karne ke liye ek automatic marker banate hain (ek doosra student jo homework check karta hai). Aur 100 asli outputs haath se padhte hain, yeh jaanne ke liye ki kya galat hota hai.',
  'A table showing which improvement helped and what it cost':
    'Ek table jo dikhata hai ki kaun sa sudhaar kaam aaya aur uska cost kya tha',
  'A security audit of your own tool':
    'Aapke apne tool ka security audit',
  'An automatic marker that you have checked against your own marking':
    'Ek automatic marker jise aapne apni marking se milaakar jaancha hai',
  'A ranked, counted list of the ways the tool fails':
    'Tool ke fail hone ke tareekon ki ranked, gini hui list',
  'Cost, real documents and the sharing rule':
    'Cost, asli documents aur sharing rule',
  'You work out what the tool costs at real volume. You try it on scanned documents such as photos of ID cards, where reading mistakes are common. You also write the rule for what the tool itself may send to an outside AI provider.':
    'Aap nikaalte hain ki tool ka asli volume par kitna cost hai. Aap ise scan kiye hue documents par aazmate hain, jaise ID cards ki photos, jahan padhne ki galtiyan aam hain. Aap woh rule bhi likhte hain ki tool khud kya bahar ke AI provider ko bhej sakta hai.',
  'A cost model built from measurements':
    'Naapi hui cheezon se banaya hua cost model',
  'An audit of how well text is read from scans':
    'Scans se text kitna achha padha jaata hai uska audit',
  'A one-page “may I send this?” rule':
    'Ek page ka “kya main yeh bhej sakta hoon?” rule',
  'Write the plan and the paperwork':
    'Plan aur kaagzi kaam likhiye',
  'You write the documents a real team would ask for. These are a system card, a requirements document and a build-or-buy recommendation. You also write an answer on whether to fine-tune a model (coach it on many examples). You design the screens for the four ways the tool can answer, and write a pilot plan.':
    'Aap woh documents likhte hain jo ek asli team maangegi. Yeh hain: ek system card, ek requirements document aur ek build-or-buy recommendation. Aap yeh bhi likhte hain ki model fine-tune karna chahiye ya nahi (use bahut saare examples se coach karna). Tool ke jawaab dene ke 4 tareekon ki screens design karte hain, aur ek pilot plan likhte hain.',
  'A system card that says what the tool can and cannot do':
    'Ek system card jo batata hai ki tool kya kar sakta hai aur kya nahi',
  'A requirements document that survives a change of model':
    'Ek requirements document jo model badalne par bhi tikta hai',
  'A build-or-buy recommendation with a review date':
    'Ek build-ya-buy sifarish, review tareekh ke saath',
  'A reasoned answer to a fine-tuning proposal':
    'Fine-tuning ke prastaav ka tark ke saath jawab',
  'A design for the four answer screens':
    'Chaar jawab screens ka design',
  'A pilot plan that could fail':
    'Ek pilot plan jo fail bhi ho sakta hai',
  'Build it properly':
    'Ise theek se banaiye',
  'You move from experiments to engineering. You set up one test harness (a ready test rig) kept in Git, and choose a model with a back-up. You plan what the model sees and design the gateway. Then you build a workflow that can propose but not act alone, and compare it with an agent. After that you write an access policy for tools and plan for images and voice. Last, you build a release gate.':
    'Aap experiments se engineering ki taraf badhte hain. Aap Git mein rakha ek test harness (taiyaar test rig) set up karte hain, aur back-up ke saath ek model chunte hain. Plan karte hain ki model ko kya dikhega, aur gateway design karte hain. Phir ek aisa workflow banate hain jo propose kar sake lekin akele act na kare, aur use ek agent se compare karte hain. Uske baad tools ke liye access policy likhte hain aur images aur voice ka plan banate hain. Aakhir mein ek release gate banate hain.',
  'A test harness in Git that runs the answer key and prints the scoreboard':
    'Git mein ek test harness jo answer key chalata hai aur scoreboard chhaapta hai',
  'A model choice with a named back-up':
    'Naam wale back-up ke saath ek model chunav',
  'A one-page design for the gateway':
    'Gateway ka ek page ka design',
  'A comparison of a fixed workflow and an agent, with numbers':
    'Ek tay workflow aur ek agent ki numbers ke saath tulna',
  'A release gate that stops a bad change':
    'Ek release gate jo kharab badlaav ko rokta hai',
  'Run it safely':
    'Ise surakshit tareeke se chalaiye',
  'You decide how to watch the tool once it is live. You list what can go wrong and how you would notice. Then you write the full product requirements. You pull everything into a ten-slide decision pack.':
    'Aap decide karte hain ki tool live hone ke baad use kaise watch karna hai. Aap likhte hain ki kya galat ho sakta hai aur aapko kaise pata chalega. Phir poori product requirements likhte hain. Sab kuch ek 10-slide decision pack mein jod dete hain.',
  'A six-panel plan for watching the tool in use':
    'Tool ko use hote dekhne ka chhe-panel ka plan',
  'A risk register in which every risk ends with a test':
    'Ek risk register jisme har risk ek test par khatam hota hai',
  'A full requirements document for the tool':
    'Tool ke liye poora requirements document',
  'A ten-slide technical decision pack':
    'Das slides ka technical decision pack',
  'Ship it and defend it':
    'Ise ship kijiye aur iska bachaav kijiye',
  'You put everything together: the working tool, its evidence and its limits. You write one findings document. Then you prepare to explain it to a non-technical leader. You also prepare for an engineer who will try to find holes in it.':
    'Aap sab kuch ek saath jodte hain: chalta hua tool, uska evidence aur uski limits. Aap ek findings document likhte hain. Phir taiyaari karte hain ki use ek non-technical leader ko samjha sakein. Ek engineer ke liye bhi taiyaari karte hain jo usmein chhed dhoondhne ki koshish karega.',
  'A repository that works on a clean machine':
    'Ek repository jo saaf machine par chalti hai',
  'A findings document: what you built, what broke, who used it and what the evidence shows':
    'Ek findings document: aapne kya banaya, kya toota, kisne use kiya aur evidence kya dikhata hai',
  'A five-minute explanation and a twenty-minute defence':
    'Paanch minute ki samjhaish aur bees minute ka bachaav',
  'The business, and your career':
    'Business, aur aapka career',
  'You decide how to charge for it, how it spreads and how to measure it. You decide which tools to use, how to release it safely and how to put it in front of real users. Last, you turn the project into evidence for your next job.':
    'Aap decide karte hain ki uske paise kaise lene hain, woh kaise failega aur use kaise measure karna hai. Aap decide karte hain ki kaun se tools use karne hain, use safely kaise release karna hai aur asli users ke saamne kaise rakhna hai. Aakhir mein aap project ko apni agli job ke liye evidence bana dete hain.',
  'A pricing recommendation with a cost model':
    'Cost model ke saath ek pricing sifarish',
  'A growth plan and a tracking plan':
    'Ek growth plan aur ek tracking plan',
  'A live demo used by real people, and one improvement made because of what they did':
    'Asli logon dwara use kiya gaya live demo, aur unke karne ki wajah se kiya gaya ek sudhaar',
  'A role matrix, two case studies and a rehearsed interview answer':
    'Ek role matrix, do case studies aur ek rehearse kiya hua interview jawab',
  'Words this project uses':
    'Is project mein use hone wale shabd',
  'PII':
    'PII (nijee pehchaan wali jaankari)',
  'Personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an Aadhaar number.':
    'Personally identifiable information: koi bhi detail jo ek asli insaan ki taraf ishaara kar sakti hai, jaise naam, phone number ya Aadhaar number.',
  'Quasi-identifier':
    'Quasi-identifier (aanshik pehchaan)',
  'A detail that is harmless alone but can point to one person when you put it together with others, such as age, village and a rare illness.':
    'Ek detail jo akeli nirdosh hai lekin doosri details ke saath milkar ek insaan ki taraf ishaara kar sakti hai, jaise umar, gaon aur koi durlabh bimari.',
  'Redact':
    'Redact (poori tarah hatana)',
  'To remove a detail completely, for example by replacing it with [PAN].':
    'Ek detail ko poori tarah hata dena, jaise use [PAN] se badal dena.',
  'Mask':
    'Mask (aadha chhupana)',
  'To hide part of a detail but keep its shape, for example 98******12.':
    'Ek detail ka kuchh hissa chhupana lekin uski shakl rakhna, jaise 98******12.',
  'Found, missed, false alarm':
    'Found (mila), missed (chhoota), false alarm (jhootha alarm)',
  'Found means the tool caught a real detail. Missed means a real detail got through. False alarm means the tool flagged something that is not personal.':
    'Found ka matlab tool ne ek asli detail pakdi. Missed ka matlab ek asli detail nikal gayi. False alarm ka matlab tool ne aisi cheez flag ki jo nijee nahi hai.',
  'Recall: of all the fish in the pond, how many did your net catch? Here, of all the real personal details, the share the tool found. If there are 100 and it finds 90, recall is 90%.':
    'Recall: talaab ki saari machhliyon mein se, aapke jaal ne kitni pakdi? Yahan, sabhi asli nijee details mein se, tool ne jitne ka hissa dhoondha. Agar 100 hain aur woh 90 dhoondhta hai, to recall 90% hai.',
  'Precision: of what is in your net, how much is really fish? Here, of everything the tool flagged, the share that really was personal. If it flags 100 and 80 are real, precision is 80%.':
    'Precision: aapke jaal mein jo hai, usme se kitna sach mein machhli hai? Yahan, tool ne jo kuchh flag kiya uske andar, jitna sach mein nijee tha uska hissa. Agar woh 100 flag karta hai aur 80 asli hain, to precision 80% hai.',
  'A small ready-made library (code others wrote) that a developer adds to their own website or app. Then they do not have to build the feature themselves.':
    'Ek chhoti taiyaar library (doosron ka likha code) jise developer apni website ya app mein jodta hai. Tab use woh feature khud nahi banana padta.',
  'Hindi written in English letters, often mixed with English words.':
    'English letters mein likhi Hindi, aksar English shabdon ke saath mili hui.',
});
