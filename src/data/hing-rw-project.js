/* Hinglish: the Bharat Privacy Guard project page and the labels around the capstones.
   Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'The one thing you build across the whole course':
    'Woh ek cheez jo aap poore course mein banate hain',

  'Your project: Bharat Privacy Guard':
    'Aapka project: Bharat Privacy Guard',

  'From the first chapter to the last, you answer every capstone question about one real project. That way you do not finish with sixty small exercises that have nothing to do with each other. You finish with one piece of work that you can show an employer, and that you understand from the inside.':
    'Pehle chapter se aakhri chapter tak, har capstone sawaal ka jawab aap ek hi asli project ke baare mein dete hain. Is tarah aap saath chhote-chhote aise exercises par nahi rukte jinka aapas mein koi lena-dena nahi. Aap ek aisa kaam lekar nikalte hain jo aap kisi employer ko dikha sakte hain, aur jise aap andar se samajhte hain.',

  'The project is called <strong>Bharat Privacy Guard</strong>. It is a small tool that sits between a person and a website, an app or an AI chatbot. When someone types “my Aadhaar number is 4321 5678 9012”, the tool notices it. The website can then hide the number, mask it, or ask whether it really needs it, before the number travels anywhere.':
    'Project ka naam hai <strong>Bharat Privacy Guard</strong>. Yeh ek chhota tool hai jo ek insaan aur ek website, app ya AI chatbot ke beech baithta hai. Jab koi likhta hai “mera Aadhaar number 4321 5678 9012 hai”, tool use pakad leta hai. Phir website us number ko chhupa sakti hai, mask kar sakti hai, ya pooch sakti hai ki use sach mein iski zaroorat hai ya nahi, number kahin bhi jaane se pehle.',

  'This page explains the project once, in plain words. Every capstone in the course links back to one stage on this page, so you always know which piece you are building and why.':
    'Yeh page project ko ek baar saaf shabdon mein samjhata hai. Course ka har capstone is page ke ek stage se juda hai, taaki aapko hamesha pata rahe ki aap kaun sa tukda bana rahe hain aur kyon.',

  'Why this project, and why not just use Rampart':
    'Yeh project kyon, aur sirf Rampart kyon nahi',

  'Rampart is an existing open tool that finds personal details in text. It was built and tested on English and six other European languages, all written in the Latin alphabet. Its own published model card says it does poorly on Hindi written in Devanagari script: it reports finding only about 14 out of every 100 personal details there. Chapter A2 asks you to check that number yourself, rather than trusting this page.':
    'Rampart ek maujooda open tool hai jo text mein nijee jaankari dhoondhta hai. Ise English aur chhe aur European bhashaon par banaya aur test kiya gaya hai, jo sab Latin alphabet mein likhi jaati hain. Uska apna published model card kehta hai ki Devanagari script mein likhi Hindi par yeh kamzor hai: wahan yeh har 100 mein se sirf lagbhag 14 nijee details pakadne ki baat karta hai. Chapter A2 aapse kehta hai ki yeh number khud jaanchiye, is page par bharosa mat kijiye.',

  'People in India type in English, in Hindi, and in Hinglish, which is Hindi written in English letters. Often they switch between them inside one sentence. They also type things that a European tool was never built to recognise: Aadhaar numbers, PAN cards, UPI IDs, mobile numbers that begin with 98. A tool that handles only one of these kinds of writing leaves most of the problem untouched.':
    'Bharat mein log English mein, Hindi mein aur Hinglish mein likhte hain, yaani English letters mein likhi Hindi. Aksar woh ek hi sentence ke andar bhasha badal dete hain. Woh aisi cheezein bhi likhte hain jinhein pehchaanne ke liye European tool kabhi bana hi nahi tha: Aadhaar numbers, PAN cards, UPI IDs, 98 se shuru hone wale mobile numbers. Jo tool in mein se sirf ek tarah ki likhai sambhalta hai, woh samasya ka zyadatar hissa chhoo bhi nahi paata.',

  'So this project is not a copy of Rampart. It asks one question: can a small tool, light enough to run inside a browser or on a phone, find personal details in English, Hindi and Hinglish, and be honest about what it misses?':
    'Isliye yeh project Rampart ki nakal nahi hai. Yeh ek sawaal poochta hai: kya ek chhota tool, itna halka ki browser ya phone ke andar chal sake, English, Hindi aur Hinglish mein nijee details dhoondh sakta hai, aur imaandaari se bata sakta hai ki usne kya chhoda?',

  'What this project is not':
    'Yeh project kya nahi hai',

  'It is not a “DPDP compliance engine”. India’s data protection law (the Digital Personal Data Protection Act, 2023, and the Rules notified in 2025) asks an organisation for much more than a tool that finds personal details. It asks for clear notices, consent, security safeguards, limits on how long data is kept, a way to handle breaches, and more. Finding and hiding personal details is one technical piece that helps an organisation collect and pass on less data.':
    'Yeh “DPDP compliance engine” nahi hai. Bharat ka data protection kanoon (Digital Personal Data Protection Act, 2023, aur 2025 mein notify kiye gaye Rules) kisi sanstha se us tool se bahut zyada maangta hai jo nijee details dhoondhe. Woh saaf notices, consent, security safeguards, data kitne samay rakha jaaye uski seema, breach sambhalne ka tareeka, aur bahut kuchh maangta hai. Nijee details dhoondhna aur chhupana ek technical tukda hai jo kisi sanstha ko kam data ikattha karne aur aage dene mein madad karta hai.',

  'So in every document you write in this course, describe the project as “a privacy tool that helps an organisation collect and share less personal data”. Never write that it makes anyone compliant. The system card in Chapter 17 and the product requirements in Chapter 18 both ask you to write this limit down.':
    'Isliye is course mein aap jo bhi document likhein, usmein project ko “ek privacy tool jo kisi sanstha ko kam nijee data ikattha karne aur baantne mein madad karta hai” likhiye. Kabhi mat likhiye ki yeh kisi ko compliant bana deta hai. Chapter 17 ka system card aur Chapter 18 ki product requirements, dono aapse yeh seema likhne ko kehte hain.',

  'How the tool works: three finders and a rule-keeper':
    'Tool kaise kaam karta hai: teen finders aur ek rule-keeper',

  'Text goes through the parts below in order. The first two are cheap and fast. The third is more expensive, so it only looks at the sentences the first two could not settle. The rule-keeper then decides what to do with everything that was found.':
    'Text neeche ke hisson se kram mein guzarta hai. Pehle do sasta aur tez hain. Teesra zyada mehnga hai, isliye woh sirf un sentences ko dekhta hai jinhein pehle do tay nahi kar paaye. Phir rule-keeper tay karta hai ki jo kuchh mila uska kya karna hai.',

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

  'Technical name: deterministic recognisers (regular expressions)':
    'Technical naam: deterministic recognisers (regular expressions)',

  'Finds details that always have the same shape.':
    'Woh details dhoondhta hai jinki shakl hamesha ek jaisi hoti hai.',

  'A PAN is always five capital letters, four digits and one capital letter. An Aadhaar number is twelve digits. A mobile number is ten digits that start with 6, 7, 8 or 9. These are found with fixed rules and no AI at all, so the check is fast, free, and gives the same answer every time.':
    'PAN hamesha paanch capital letters, chaar digits aur ek capital letter hota hai. Aadhaar number baarah digits ka hota hai. Mobile number das digits ka hota hai jo 6, 7, 8 ya 9 se shuru hota hai. Inhein tay rules se dhoondha jaata hai, bina kisi AI ke, isliye jaanch tez, free hoti hai, aur har baar ek hi jawab deti hai.',

  'The name-and-place finder':
    'Name-and-place finder',

  'Technical name: named-entity recognition (NER)':
    'Technical naam: named-entity recognition (NER)',

  'Finds details that have no fixed shape.':
    'Woh details dhoondhta hai jinki koi tay shakl nahi hoti.',

  'Nothing about “Ramesh Jain”, “14 Sector 15, Gurgaon” or “Acme Bank” follows a pattern, so fixed rules cannot find them. A small language model reads the sentence and marks people, addresses, workplaces, dates of birth and family relationships. It is small enough to run on a phone or in a browser.':
    '“Ramesh Jain”, “14 Sector 15, Gurgaon” ya “Acme Bank” mein kuchh bhi kisi pattern par nahi chalta, isliye tay rules inhein nahi dhoondh sakte. Ek chhota language model sentence padhta hai aur logon, pate, kaam ki jagah, janm tithi aur parivaar ke rishton ko mark karta hai. Yeh itna chhota hai ki phone ya browser mein chal sakta hai.',

  'The context judge':
    'Context judge',

  'Technical name: contextual risk scoring (quasi-identifiers)':
    'Technical naam: contextual risk scoring (quasi-identifiers)',

  'Notices sentences that point to one person even though they contain no ID.':
    'Aise sentences pakadta hai jo kisi ID ke bina bhi ek insaan ki taraf ishaara karte hain.',

  '“I am the only diabetic patient in my village who had a transplant last year” has no name and no number, yet it identifies someone. A larger AI model is asked to judge sentences like this, but only the few that the first two parts could not settle, because it costs more and is slower.':
    '“Main apne gaon ka akela diabetic patient hoon jiska pichhle saal transplant hua” mein na naam hai na number, phir bhi yeh kisi ko pehchaan leta hai. Aise sentences ko parakhne ke liye ek bade AI model se poochha jaata hai, lekin sirf un thode sentences ke liye jinhein pehle do hisse tay nahi kar paaye, kyunki woh mehnga aur dheema hai.',

  'The rule-keeper':
    'Rule-keeper',

  'Technical name: policy engine (redaction and masking)':
    'Technical naam: policy engine (redaction aur masking)',

  'Decides what to do with everything that was found.':
    'Tay karta hai ki jo kuchh mila uska kya karna hai.',

  'For each detail it picks one action: remove it, mask it (98******12), let it through, or ask the person. The choice depends on why the website is collecting the data. A delivery address is needed for a delivery. An Aadhaar number is not needed to subscribe to a newsletter.':
    'Har detail ke liye woh ek action chunta hai: hata do, mask kar do (98******12), jaane do, ya insaan se poochho. Chunav is par nirbhar karta hai ki website data kyon ikattha kar rahi hai. Delivery ke liye delivery ka pata chahiye. Newsletter subscribe karne ke liye Aadhaar number nahi chahiye.',

  'What you build, and what you only plan':
    'Aap kya banate hain, aur kya sirf plan karte hain',

  'One learner cannot build everything in the full idea in one course. This is the line the course draws. Say clearly in your own documents which side of the line each piece is on.':
    'Ek learner ek course mein poora idea nahi bana sakta. Course yahan yeh line kheenchta hai. Apne documents mein saaf likhiye ki har tukda line ke kis taraf hai.',

  'You build this':
    'Yeh aap banate hain',

  'Three kinds of writing: English, Hindi (Devanagari script) and Hinglish.':
    'Teen tarah ki likhai: English, Hindi (Devanagari script) aur Hinglish.',

  'Eleven kinds of ID that have a fixed shape: PAN, Aadhaar, mobile number, email, IFSC code, bank account number, UPI ID, GSTIN, passport number, vehicle registration and PIN code.':
    'Gyarah tarah ki ID jinki shakl tay hoti hai: PAN, Aadhaar, mobile number, email, IFSC code, bank account number, UPI ID, GSTIN, passport number, vehicle registration aur PIN code.',

  'Six kinds of detail that have no fixed shape: a person’s name, an address, an organisation, a date of birth, a family relationship and a profession.':
    'Chhe tarah ki details jinki koi tay shakl nahi hoti: kisi insaan ka naam, pata, sanstha, janm tithi, parivaar ka rishta aur peshha.',

  'A risk score for sentences that point to one person without any ID in them.':
    'Un sentences ke liye risk score jo bina kisi ID ke ek insaan ki taraf ishaara karte hain.',

  'One finished product: a developer kit (SDK), meaning a small library plus a demo page where you paste text and see it cleaned.':
    'Ek poora product: ek developer kit (SDK), yaani ek chhoti library aur ek demo page jahan aap text paste karke use saaf hota dekhte hain.',

  'You design this on paper':
    'Yeh aap kaagaz par design karte hain',

  'The gateway: a version that sits in front of a company’s servers, logs and AI traffic. You write its plan, its architecture and its risks, but you do not have to build it.':
    'Gateway: ek version jo kisi company ke servers, logs aur AI traffic ke saamne baithta hai. Aap uska plan, architecture aur risks likhte hain, lekin ise banana zaroori nahi.',

  'The browser extension: a version that warns a person before they submit a form. Also designed on paper only.':
    'Browser extension: ek version jo form submit karne se pehle insaan ko chetavni deta hai. Yeh bhi sirf kaagaz par design hota hai.',

  'You leave this for later, and say so':
    'Yeh aap baad ke liye chhodte hain, aur kehte hain ki chhoda hai',

  'Other Indian languages such as Tamil, Bengali, Telugu, Marathi and Gujarati. Write plainly in your documents that these are not covered yet.':
    'Doosri Bharatiya bhashayein jaise Tamil, Bengali, Telugu, Marathi aur Gujarati. Apne documents mein saaf likhiye ki yeh abhi cover nahi hain.',

  'A phone app version of the developer kit.':
    'Developer kit ka phone app version.',

  'The eleven kinds of ID the pattern checker looks for':
    'Gyarah tarah ki ID jo pattern checker dhoondhta hai',

  'Every example below is made up. Use made-up values like these in your own work. Never put a real person’s details into a test file.':
    'Neeche ke saare examples banaye hue hain. Apne kaam mein bhi aise hi banaye hue values use kijiye. Kabhi kisi asli insaan ki details test file mein mat daaliye.',

  'Kind of ID':
    'ID ka prakaar',

  'Made-up example':
    'Banaya hua example',

  'The shape the rule looks for':
    'Woh shakl jo rule dhoondhta hai',

  'PAN':
    'PAN',

  'five capital letters, four digits, one capital letter':
    'paanch capital letters, chaar digits, ek capital letter',

  'Aadhaar':
    'Aadhaar',

  'twelve digits, often written in groups of four':
    'baarah digits, aksar chaar ke groups mein likhe jaate hain',

  'Indian mobile number':
    'Bharatiya mobile number',

  'ten digits, the first one 6, 7, 8 or 9; sometimes +91 before it':
    'das digits, pehla 6, 7, 8 ya 9; kabhi-kabhi aage +91',

  'Email':
    'Email',

  'letters and digits, an @ sign, then a domain':
    'letters aur digits, ek @ sign, phir ek domain',

  'IFSC code':
    'IFSC code',

  'four letters, then a zero, then six letters or digits':
    'chaar letters, phir ek zero, phir chhe letters ya digits',

  'Bank account number':
    'Bank account number',

  'nine to eighteen digits; usually needs a nearby word such as “account” to be sure':
    'nau se atthaarah digits; pakka karne ke liye aam taur par paas mein “account” jaisa shabd chahiye',

  'UPI ID':
    'UPI ID',

  'letters or digits, an @ sign, then a bank handle':
    'letters ya digits, ek @ sign, phir ek bank handle',

  'GSTIN':
    'GSTIN',

  'fifteen characters: two digits, a PAN, one more character, the letter Z, one check character':
    'pandrah characters: do digits, ek PAN, ek aur character, letter Z, ek check character',

  'Passport number':
    'Passport number',

  'one capital letter followed by seven digits':
    'ek capital letter ke baad saat digits',

  'Vehicle registration':
    'Vehicle registration',

  'state letters, a number, series letters, then four digits':
    'rajya ke letters, ek number, series ke letters, phir chaar digits',

  'PIN code':
    'PIN code',

  'six digits, the first one not zero':
    'chhe digits, pehla zero nahi',

  'The starter sentences':
    'Shuruaati sentences',

  'Ten made-up sentences you can use from your very first chapter. They are the first ten rows of your answer key (see below). Copy them into a spreadsheet and use them whenever a capstone says “the starter sentences”.':
    'Das banaye hue sentences jo aap apne bilkul pehle chapter se use kar sakte hain. Yeh aapke answer key ki pehli das rows hain (neeche dekhiye). Inhein ek spreadsheet mein copy kijiye aur jab bhi koi capstone “shuruaati sentences” kahe, inhein use kijiye.',

  'No.':
    'No.',

  'Kind of writing':
    'Likhai ka prakaar',

  'Sentence':
    'Sentence',

  'What is hidden inside it':
    'Isme kya chhupa hai',

  'English':
    'English',

  'a name, a mobile number, an email':
    'ek naam, ek mobile number, ek email',

  'Hindi':
    'Hindi',

  'a name, an Aadhaar number':
    'ek naam, ek Aadhaar number',

  'Hinglish':
    'Hinglish',

  'a name, a mobile number':
    'ek naam, ek mobile number',

  'an Aadhaar number, and a mobile number that is already partly hidden':
    'ek Aadhaar number, aur ek mobile number jo pehle se aadha chhupa hua hai',

  'a PAN':
    'ek PAN',

  'a name, a family relationship, an address, an organisation':
    'ek naam, ek parivaar ka rishta, ek pata, ek sanstha',

  'a name, a PAN, a bank, the last four digits of an account':
    'ek naam, ek PAN, ek bank, account ke aakhri chaar digits',

  'no ID at all, but it still points to one person':
    'koi ID nahi, phir bhi yeh ek insaan ki taraf ishaara karta hai',

  'nothing personal; a good tool leaves this sentence alone':
    'kuchh bhi nijee nahi; achha tool is sentence ko chhod deta hai',

  'a name, a mobile number, and an order hidden in the text that tries to take over an AI model':
    'ek naam, ek mobile number, aur text ke andar chhipa ek aadesh jo AI model par kabza karne ki koshish karta hai',

  'The answer key: one test file that grows through the whole course':
    'Answer key: ek test file jo poore course mein badhti hai',

  'A tool like this is only as good as its test. The answer key is a spreadsheet of sentences in which you have already written down, by hand, what the tool should find. You run the tool, compare its answers with yours, and count the mistakes. You start the answer key in Chapter 2.2 and add to it in later chapters. Each time, save it as a new version of the same file instead of starting a new file.':
    'Aisa tool utna hi achha hota hai jitna uska test. Answer key sentences ki ek spreadsheet hai jisme aap pehle se haath se likh chuke hote hain ki tool ko kya dhoondhna chahiye. Aap tool chalate hain, uske jawab apne jawab se milate hain, aur galtiyan ginte hain. Aap answer key Chapter 2.2 mein shuru karte hain aur baad ke chapters mein usme jodte hain. Har baar use usi file ke naye version ke roop mein save kijiye, nayi file mat banaiye.',

  'Every row needs six columns: a number, the kind of writing (English, Hindi or Hinglish), the sentence, what should be found (the kind and the exact words), what should happen to it (remove, mask or leave alone), and a note.':
    'Har row mein chhe columns chahiye: ek number, likhai ka prakaar (English, Hindi ya Hinglish), sentence, kya milna chahiye (prakaar aur sahi shabd), uska kya hona chahiye (hatana, mask karna ya chhodna), aur ek note.',

  'Version':
    'Version',

  'Where you make it':
    'Kahan banate hain',

  'Size':
    'Size',

  'What goes in':
    'Isme kya jaata hai',

  '10 rows':
    'das rows',

  'The ten starter sentences, labelled by you.':
    'Das shuruaati sentences, aapke dwara label kiye hue.',

  'about 30 rows':
    'lagbhag 30 rows',

  'Sentences you write yourself, spread evenly across English, Hindi and Hinglish, plus some tricky ones.':
    'Woh sentences jo aap khud likhte hain, English, Hindi aur Hinglish mein barabar baante hue, aur kuchh mushkil wale.',

  'about 50 rows':
    'lagbhag 50 rows',

  'The mistakes you find while reading the tool’s output by hand.':
    'Tool ka output haath se padhte hue aapko jo galtiyan milti hain.',

  '50 rows plus scanned text':
    '50 rows aur scan kiya hua text',

  'Text read from photos of ID cards, with the spelling mistakes that scanning causes.':
    'ID cards ki photos se padha gaya text, scanning ki wajah se hone wali spelling ki galtiyon ke saath.',

  'the release gate':
    'release gate',

  'The version the tool must pass before any change is allowed to ship.':
    'Woh version jise tool ko paas karna hai, uske baad hi koi badlaav ship ho sakta hai.',

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

  'A sentence that changes between Hindi script and English letters halfway through.':
    'Ek sentence jo beech mein Hindi script se English letters mein badal jaata hai.',

  'An invisible character hidden inside a number.':
    'Ek number ke andar chhipa hua invisible character.',

  'How the capstone questions work':
    'Capstone sawaal kaise kaam karte hain',

  'Each chapter ends with a capstone, written like an exam question. It has four parts. <strong>The situation</strong> tells you where you are in the project and what you already have. <strong>Your task</strong> is a numbered list; do the steps in order. <strong>What to hand in</strong> lists exactly what you must have at the end. <strong>Where you do this</strong> says whether the work happens in a notebook (code) or on paper or in a document (writing).':
    'Har chapter ek capstone par khatam hota hai, jo exam ke sawaal ki tarah likha hota hai. Uske chaar hisse hain. <strong>The situation</strong> batata hai ki aap project mein kahan hain aur aapke paas pehle se kya hai. <strong>Your task</strong> ek numbered list hai; steps kram se kijiye. <strong>What to hand in</strong> theek-theek batata hai ki ant mein aapke paas kya hona chahiye. <strong>Where you do this</strong> batata hai ki kaam notebook mein (code) hota hai ya kaagaz par ya document mein (likhna).',

  'Every capstone also shows which stage of the project it belongs to, with a link back to this page. Keep everything you produce in the repository you set up in Chapter A1, in the folders that chapter asks for. By the last chapter, that repository is the project.':
    'Har capstone yeh bhi dikhata hai ki woh project ke kis stage ka hai, is page ki taraf link ke saath. Jo bhi aap banate hain use us repository mein rakhiye jo aapne Chapter A1 mein banayi, un folders mein jo woh chapter maangta hai. Aakhri chapter tak, wahi repository project ban jaati hai.',

  'The thirteen stages of the project':
    'Project ke terah stages',

  'Work through the stages in order. Each one lists the chapters that belong to it, what the stage is for, and what you will have when it is finished.':
    'Stages ko kram se kijiye. Har ek mein woh chapters hain jo uske hain, stage kis kaam ka hai, aur khatam hone par aapke paas kya hoga.',

  'Decide what you are building, and why':
    'Tay kijiye ki aap kya bana rahe hain, aur kyon',

  'Before any code, you do the work a product manager does first. You name the problem, study the existing tool, talk to real people, size the market, choose a strategy, plan the work and write the requirements. You also run first experiments to see how AI models behave on Indian text.':
    'Code se pehle, aap woh kaam karte hain jo ek product manager sabse pehle karta hai. Aap samasya ka naam lete hain, maujooda tool ka adhyayan karte hain, asli logon se baat karte hain, market ka size nikaalte hain, strategy chunte hain, kaam ka plan banate hain aur requirements likhte hain. Aap pehle experiments bhi karte hain ki AI models Bharatiya text par kaise vyavhaar karte hain.',

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

  'You try ready-made AI models on the starter sentences. You see how text is cut into pieces, what one check costs, and how to write clear instructions that make a model find personal details.':
    'Aap taiyaar AI models ko shuruaati sentences par aazmate hain. Aap dekhte hain ki text kaise tukdon mein kaata jaata hai, ek jaanch ka kitna cost hai, aur aise saaf instructions kaise likhte hain jo model se nijee details dhoondhwa lein.',

  'Token counts for English, Hindi and Hinglish side by side':
    'English, Hindi aur Hinglish ke token counts saath-saath',

  'The measured cost of checking one message, and a thousand':
    'Ek message jaanchne ka, aur ek hazaar ka, naapa hua cost',

  'A written instruction (a prompt) that finds personal details, tested on the starter sentences':
    'Ek likha hua instruction (prompt) jo nijee details dhoondhta hai, shuruaati sentences par test kiya hua',

  'The answer key and the first sorter':
    'Answer key aur pehla sorter',

  'You build the answer key, the test file the whole project depends on. You break the big job into small tasks, and you build a sorter that says whether a piece of text is a PAN, an Aadhaar number or a mobile number.':
    'Aap answer key banate hain, woh test file jis par poora project tikha hai. Aap bade kaam ko chhote tasks mein todte hain, aur ek aisa sorter banate hain jo batata hai ki text ka ek tukda PAN hai, Aadhaar number hai ya mobile number.',

  'Answer key version 1, with ten labelled rows':
    'Answer key version 1, das label ki hui rows ke saath',

  'A task breakdown of the whole tool':
    'Poore tool ka ek task breakdown',

  'A tested sorter for the kind of ID':
    'ID ke prakaar ke liye ek test kiya hua sorter',

  'A privacy summary that has been checked against the facts':
    'Ek privacy summary jo tathyon se jaanchi gayi hai',

  'The pattern checker and the meaning finder':
    'Pattern checker aur meaning finder',

  'You build the first real part of the tool, the pattern checker, and find out where fixed rules fail. Then you try finding things by meaning instead of by exact shape.':
    'Aap tool ka pehla asli hissa banate hain, pattern checker, aur dekhte hain ki tay rules kahan fail hote hain. Phir aap cheezein tay shakl ki jagah matlab se dhoondhne ki koshish karte hain.',

  'A rule for cutting long text without splitting an ID in half':
    'Lambe text ko kaatne ka aisa rule jo kisi ID ko beech se na tode',

  'A working pattern checker for the eleven kinds of ID, with its failures written down':
    'Gyarah tarah ki ID ke liye kaam karta hua pattern checker, uski failures likhi hui',

  'A side-by-side comparison of rule-based and meaning-based finding':
    'Rule-based aur meaning-based dhoondhne ki saath-saath tulna',

  'Measure it, then take stock':
    'Ise naapiye, phir hisaab lagaiye',

  'You put a number on how good the tool is. Then you write an honest page about what it cannot do yet.':
    'Aap tool kitna achha hai, us par ek number lagate hain. Phir aap ek imaandaar page likhte hain ki woh abhi kya nahi kar sakta.',

  'A scoreboard: how many details were found, missed or wrongly flagged, for each kind of ID and each kind of writing':
    'Ek scoreboard: har ID prakaar aur har likhai ke prakaar ke liye kitni details mili, chhooti ya galat flag hui',

  'A note saying whether this version is good enough to ship':
    'Ek note ki yeh version ship karne ke liye kaafi achha hai ya nahi',

  'An inventory of the gaps in version 0':
    'Version 0 ki kamiyon ki list',

  'A dependable output and the rule-keeper':
    'Bharosemand output aur rule-keeper',

  'You make the tool always answer in the same fixed format, so that other software can rely on it. You build the rule-keeper, work out how much text can be sent onward, decide when the expensive AI is worth paying for, and check that the tool is fast enough for a live chat.':
    'Aap tool ko hamesha ek hi tay format mein jawab dene layak banate hain, taaki doosra software us par bharosa kar sake. Aap rule-keeper banate hain, tay karte hain ki kitna text aage bheja ja sakta hai, kab mehnga AI paise ke laayak hai, aur jaanchte hain ki tool live chat ke liye kaafi tez hai.',

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

  'You improve the tool one change at a time and measure each change. Then you try to break it: can a sentence hidden in the text give orders to the AI? You build an automatic marker to check the tool’s work, and you read a hundred real outputs by hand to learn what goes wrong.':
    'Aap tool ko ek-ek badlaav karke behtar banate hain aur har badlaav naapte hain. Phir aap ise todne ki koshish karte hain: kya text mein chhipa hua ek sentence AI ko aadesh de sakta hai? Aap tool ka kaam jaanchne ke liye ek automatic marker banate hain, aur sau asli outputs haath se padhte hain ye seekhne ke liye ki kya galat hota hai.',

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

  'You write the documents a real team would ask for: a system card, a requirements document, a build-or-buy recommendation, an answer on whether to fine-tune a model, the screens for the four ways the tool can answer, and a pilot plan.':
    'Aap woh documents likhte hain jo ek asli team maangegi: ek system card, ek requirements document, ek build-ya-buy sifarish, model ko fine-tune karne par ek jawab, tool ke jawab dene ke chaar tareekon ki screens, aur ek pilot plan.',

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

  'You move from experiments to engineering. You set up one test harness kept in Git, choose a model with a back-up, plan what the model sees, design the gateway, build a workflow that can propose but not act alone, compare it with an agent, write an access policy for tools, plan for images and voice, and build a release gate.':
    'Aap experiments se engineering par aate hain. Aap Git mein rakhi ek test harness banate hain, back-up ke saath model chunte hain, plan karte hain ki model kya dekhega, gateway design karte hain, ek aisa workflow banate hain jo prastaav de sakta hai par akela kaam nahi kar sakta, use agent se compare karte hain, tools ke liye access policy likhte hain, images aur awaaz ka plan banate hain, aur ek release gate banate hain.',

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

  'You decide how to watch the tool once it is live, list what can go wrong and how you would notice, write the full product requirements, and pull everything into a ten-slide decision pack.':
    'Aap tay karte hain ki tool live hone ke baad use kaise dekhna hai, list banate hain ki kya galat ho sakta hai aur aap kaise jaanenge, poori product requirements likhte hain, aur sab kuchh ek das-slide ke decision pack mein khinch laate hain.',

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

  'You put everything together: the working tool, its evidence and its limits. You write one findings document and prepare to explain it to a non-technical leader and to an engineer who will try to find holes in it.':
    'Aap sab kuchh ek saath rakhte hain: kaam karta hua tool, uska evidence aur uski seemayein. Aap ek findings document likhte hain aur use ek non-technical leader ko, aur ek aise engineer ko samjhane ki taiyaari karte hain jo isme chhed dhoondhne ki koshish karega.',

  'A repository that works on a clean machine':
    'Ek repository jo saaf machine par chalti hai',

  'A findings document: what you built, what broke, who used it and what the evidence shows':
    'Ek findings document: aapne kya banaya, kya toota, kisne use kiya aur evidence kya dikhata hai',

  'A five-minute explanation and a twenty-minute defence':
    'Paanch minute ki samjhaish aur bees minute ka bachaav',

  'The business, and your career':
    'Business, aur aapka career',

  'You decide how to charge for it, how it spreads, how to measure it, which tools to use, how to release it safely and how to put it in front of real users. Last, you turn the project into evidence for your next job.':
    'Aap tay karte hain ki ise kaise charge karna hai, yeh kaise failega, ise kaise naapna hai, kaun se tools use karne hain, ise surakshit tareeke se kaise release karna hai aur asli users ke saamne kaise rakhna hai. Ant mein, aap project ko apni agli naukri ke evidence mein badalte hain.',

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

  'Personally identifiable information: any detail that can point to one real person, such as a name, a phone number or an Aadhaar number.':
    'Personally identifiable information: koi bhi detail jo ek asli insaan ki taraf ishaara kar sakti hai, jaise naam, phone number ya Aadhaar number.',

  'A detail that is harmless alone but can point to one person when combined with others, such as age, village and a rare illness.':
    'Ek detail jo akeli nirdosh hai lekin doosri details ke saath milkar ek insaan ki taraf ishaara kar sakti hai, jaise umar, gaon aur koi durlabh bimari.',

  'To remove a detail completely, for example by replacing it with [PAN].':
    'Ek detail ko poori tarah hata dena, jaise use [PAN] se badal dena.',

  'To hide part of a detail but keep its shape, for example 98******12.':
    'Ek detail ka kuchh hissa chhupana lekin uski shakl rakhna, jaise 98******12.',

  'Found means the tool caught a real detail. Missed means a real detail got through. False alarm means the tool flagged something that is not personal.':
    'Found ka matlab tool ne ek asli detail pakdi. Missed ka matlab ek asli detail nikal gayi. False alarm ka matlab tool ne aisi cheez flag ki jo nijee nahi hai.',

  'Out of all the real personal details, the share the tool found. If there are 100 and it finds 90, recall is 90%.':
    'Sabhi asli nijee details mein se, tool ne jitne ka hissa dhoondha. Agar 100 hain aur woh 90 dhoondhta hai, to recall 90% hai.',

  'Out of everything the tool flagged, the share that really was personal. If it flags 100 and 80 are real, precision is 80%.':
    'Tool ne jo kuchh flag kiya uske andar, jitna sach mein nijee tha uska hissa. Agar woh 100 flag karta hai aur 80 asli hain, to precision 80% hai.',

  'A small ready-made library that a developer adds to their own website or app, so they do not have to build the feature themselves.':
    'Ek chhoti taiyaar library jise developer apni website ya app mein jodta hai, taaki use woh feature khud na banana pade.',

  'Hindi written in English letters, often mixed with English words.':
    'English letters mein likhi Hindi, aksar English shabdon ke saath mili hui.',

  'The situation':
    'Sthiti',

  'Where you do this':
    'Yeh kaam kahan karna hai',

  'Your task':
    'Aapka kaam',

  'What to hand in':
    'Kya jama karna hai',

  'Your project':
    'Aapka project',

  'Bharat Privacy Guard':
    'Bharat Privacy Guard',

  'Stage':
    'Stage',

  'See the whole project':
    'Poora project dekhiye',

  'This answer is part of Bharat Privacy Guard, stage':
    'Yeh jawab Bharat Privacy Guard ka hissa hai, stage',

  'chapters finished':
    'chapters poore hue',

  'When this stage is finished you will have':
    'Is stage ke khatam hone par aapke paas hoga',

  'What you produced, and anything that surprised you':
    'Aapne kya banaya, aur jo kuchh aapko chauka gaya',

  'Rough notes. The artifact above, code or written, is the deliverable, not this box.':
    'Kachche notes. Upar ka artifact, code ya likha hua, hi deliverable hai, yeh box nahi.',

  'PII':
    'PII (nijee pehchaan wali jaankari)',

  'Quasi-identifier':
    'Quasi-identifier (aanshik pehchaan)',

  'Redact':
    'Redact (poori tarah hatana)',

  'Mask':
    'Mask (aadha chhupana)',

  'Found, missed, false alarm':
    'Found (mila), missed (chhoota), false alarm (jhootha alarm)',

  'SDK':
    'SDK (developer kit)'

});
