/* Hinglish for AI governance: risk tiers, system cards and oversight (chapter:ch17), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'An AI feature now comes with governance documents (papers that show a system is safe and watched). Almost every question in them is a product choice. You put your system in a risk tier (a box for how much harm it could do) and write a system card (a one-page description). Then you run a deletion drill. You also design oversight that still works at real volume.':
    'Ab AI feature ke saath governance documents aate hain (kaagaz jo dikhate hain ki system safe hai aur us par nazar hai). Unke lagbhag har sawaal ka jawaab ek product choice hai. Aap apne system ko risk tier mein rakhenge (ek dibba jo batata hai ki woh kitna nuksaan kar sakta hai) aur system card likhenge (ek page ka description). Phir deletion drill chalayenge. Aur aisi oversight design karenge jo asli volume par bhi kaam kare.',
  'Say why the same system can be low risk for one use and high risk for another.':
    'Bataiye ki ek hi system ek use ke liye kam risky aur doosre ke liye zyada risky kyun ho sakta hai.',
  'Say which part of a governance document is hardest to fake, and why that makes it worth the most.':
    'Bataiye ki governance document ka kaun sa hissa nakli banana sabse mushkil hai, aur isliye woh sabse keemti kyun hai.',
  'Describe what human oversight (a real person checking the system) must include before it counts.':
    'Bataiye ki human oversight (system ko asli insaan ka check karna) mein kya hona zaroori hai, tabhi woh oversight maani jaayegi.',
  'Write the system card for Bharat Privacy Guard':
    'Bharat Privacy Guard ka system card likhiye',
  'Almost every compliance question is really a product question. A system card is the one-page paper that answers them for one system, like the label on a medicine box. You saw that one system can be low risk for one use and high risk for another. You saw which part of a governance document is hardest to fake, and what human oversight must include. Now you write the system card for your own tool.':
    'Rules maanne ka lagbhag har sawaal asal mein product ka sawaal hai. System card ek page ka kaagaz hai jo ek system ke liye unke jawaab deta hai, jaise dawai ke dibbe par label. Aapne dekha ki ek system ek use ke liye kam risky aur doosre ke liye zyada risky ho sakta hai. Aapne dekha ki governance document ka kaun sa hissa nakli banana sabse mushkil hai, aur human oversight mein kya hona chahiye. Ab aap apne tool ka system card likhenge.',
  'You only write, no code. Gather the numbers and notes from earlier chapters. Then write the card in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 4.':
    'Aap sirf likhenge, koi code nahi. Pehle ke chapters ke numbers aur notes jama kijiye. Phir card neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 2, 3 aur 4.',
  'Give the tool a risk level and say why. Ask three things: what could it hurt, how badly, and who bears the harm? A tool that hides details before data goes to an AI is not low risk if it can miss an Aadhaar number.':
    'Tool ko ek risk level dijiye aur wajah likhiye. Teen cheezein poochhiye: woh kya bigaad sakta hai, kitna bura, aur nuksaan kisko hoga? Jo tool AI ko data jaane se pehle details chhupata hai, woh kam risky nahi hai agar woh Aadhaar number chhod sakta hai.',
  'Write the card with five headings: what it is for; what data it handles; what it can do, with its measured quality from your scoreboard; the failures you know about; and what it must never be used for.':
    'Card paanch headings ke saath likhiye: yeh kis kaam ke liye hai; yeh kaun sa data sambhalta hai; yeh kya kar sakta hai, aapke scoreboard ki naapi hui quality ke saath; jo failures aap jaante hain; aur ise kis kaam mein kabhi use nahi karna.',
  'Include this sentence: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Write two lines on why that sentence matters.':
    'Yeh sentence zaroor likhiye: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Do lines mein likhiye ki yeh sentence kyun zaroori hai.',
  'Run a deletion drill. Imagine someone asks you to delete everything about them. Follow the request through every place the tool saves or notes anything, and time it. Write down where you could not tell.':
    'Deletion drill chalaiye. Maan lijiye koi kehta hai ki mere baare mein sab kuch mita dijiye. Us request ko un har jagah tak follow kijiye jahan tool kuch bhi save ya note karta hai, aur time naapiye. Likhiye ki kahan aap bata nahi paaye.',
  'Design the human oversight: who can overrule the tool, how they learn there is something to overrule, and what they see on their screen.':
    'Human oversight design kijiye: tool ki baat kaun palat sakta hai, unhe kaise pata chalta hai ki kuch palatna hai, aur unki screen par kya dikhta hai.',
  'Write what you would need from an outside provider so you can answer all of the above about their part of the system.':
    'Likhiye ki outside provider se aapko kya chahiye, taaki aap upar ki sab baatein unke hisse ke baare mein bhi bata sakein.',
  'Give the card to someone who did not build the tool. Ask what is still unclear. Fix those parts.':
    'Card kisi aise insaan ko dijiye jisne tool nahi banaya. Poochhiye ki abhi kya samajh nahi aaya. Un hisson ko theek kijiye.',
  'Save the card as <code>docs/system-card.md</code> in your repository (an online folder that remembers every change). The system card tool above has an “Export system card” button that gives you the file.':
    'Card ko apni repository mein (ek online folder jo har badlaav yaad rakhta hai) <code>docs/system-card.md</code> ke naam se save kijiye. Upar ke system card tool mein “Export system card” button hai jo aapko file de deta hai.',
  'A risk level, with the reason.':
    'Ek risk level, wajah ke saath.',
  'A system card with the five headings.':
    'Paanch headings wala ek system card.',
  'The sentence about not making anyone compliant, and why it matters.':
    'Kisi ko compliant na banane wala sentence, aur woh kyun zaroori hai.',
  'The result of the deletion drill, with the time it took.':
    'Deletion drill ka result, usme laga time ke saath.',
  'A description of the human oversight, and a list of what you need from a provider.':
    'Human oversight ka description, aur provider se aapko kya chahiye uski list.',
  'The questions your reader still had, and how you fixed them.':
    'Aapke reader ke bachche hue sawaal, aur aapne unhe kaise theek kiya.',
  'You measured it, so you can say it with a number':
    'Aapne ise naapa hai, isliye number ke saath bol sakte hain',
  'An answer key (questions with the right answers) and a list of failures turn a claim into a number.':
    'Answer key (sawaal aur sahi jawaab) aur failures ki list daave ko number bana deti hai.',
  'Version and access filters (rules that hide what a person may not see) are applied before ranking':
    'Version aur access filters (woh rules jo woh chhupate hain jo insaan ko nahi dekhna chahiye) ranking se pehle lagte hain',
  'That is why they are the only promises you can make.':
    'Isiliye yehi akele vaade hain jo aap kar sakte hain.',
  'No complete defence against injection (a hidden note that tells the model to ignore its rules) exists':
    'Injection (chhupi parchi jo model se kehti hai ki apne rules bhool jao) ke khilaaf poori suraksha nahi hai',
  'So the safety controls sit outside the model, not in the prompt (the note you hand the model).':
    'Isliye safety controls model ke bahar rehte hain, prompt (model ko di jaane wali parchi) mein nahi.',
  'Keep three things close: your Chapter 6 numbers, your Chapter 14.5 failure list and your Chapter 7 system. Most of this chapter just gathers work you have already done.':
    'Teen cheezein paas rakhiye: aapke Chapter 6 ke numbers, Chapter 14.5 ki failure list, aur Chapter 7 ka system. Is chapter ka zyadatar hissa aapka kiya hua kaam ek jagah jama karta hai.',
  'Over the last few chapters you built a system, measured it and tried to break it. Now every team meets one question sooner or later: how do you show other people it is safe to use?':
    'Pichhle kuch chapters mein aapne ek system banaya, use naapa aur todne ki koshish ki. Ab har team ko kabhi na kabhi ek sawaal milta hai: doosron ko kaise dikhayein ki yeh use karne ke liye safe hai?',
  'A normal feature ships with code, tests and release notes. An AI feature increasingly ships with a folder of papers that prove it is safe too. Teams often think the legal team writes them.':
    'Aam feature code, tests aur release notes ke saath aata hai. AI feature ke saath ab kaagaz jo saabit karte hain ki yeh safe hai ka ek folder bhi aane laga hai. Teams aksar sochti hain ki legal team inhe likhti hai.',
  'Almost every question in that folder is really a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what proof shows it works? The product owner should answer them.':
    'Us folder ka lagbhag har sawaal asal mein product ka sawaal hai. Yeh kis kaam ke liye hai? Yeh kispar asar daalta hai? Galat hone par kya hota hai? Ise kaun check karta hai, aur kaun sa saboot dikhata hai ki yeh kaam karta hai? In sabka jawaab product owner ko dena chahiye.',
  'The generator below gives you a feel for this. It builds a system card from your answers, like filling in a form. In a moment we write one by hand.':
    'Neeche ka generator aapko iska ehsaas dilata hai. Woh aapke jawaabon se system card banata hai, jaise form bharna. Thodi der mein hum haath se ek likhenge.',
  'Risk depends on the use, not the model':
    'Risk use par tikta hai, model par nahi',
  'Rules for AI are slowly settling on one idea: <strong>the more harm a wrong answer can cause, the more you must do</strong>, whatever technology you use. It is like a road: a lane near a school needs more care than an empty highway. The EU AI Act made this idea well known. Companies that buy software now ask the same questions everywhere.':
    'AI ke rules dheere-dheere ek idea par tik rahe hain: <strong>galat jawaab jitna zyada nuksaan kar sakta hai, aapko utna zyada karna padta hai</strong>, chahe technology koi bhi ho. Yeh sadak jaisa hai: school ke paas ki lane ko khaali highway se zyada dhyaan chahiye. EU AI Act ne is idea ko mashhoor kiya. Software kharidne wali companies ab har jagah yahi sawaal poochhti hain.',
  'The table below shows four levels of risk. Read it from top to bottom. As you go down, what is required gets lighter.':
    'Neeche ki table risk ke chaar levels dikhati hai. Ise upar se neeche padhiye. Neeche jaate hue zaroori cheezein halki hoti jaati hain.',
  'What is required':
    'Kya karna zaroori hai',
  'Typical examples':
    'Aam udaaharan',
  'Not allowed':
    'Allowed nahi',
  'Nothing makes it acceptable':
    'Kuch bhi ise theek nahi banata',
  'Social scoring (ranking people by their behaviour), some sorting of people by their faces or bodies':
    'Social scoring (logon ko unke vyavhaar se rank karna), chehre ya sharir se logon ko baantna',
  'High risk':
    'Zyada risk',
  'Papers, a real human check, proof it is accurate, a record of what happened, a formal check by others':
    'Kaagaz, asli insaan ka check, saboot ki yeh sahi hai, kya hua uska record, doosron ki aupchaarik jaanch',
  'Hiring, loans, who gets into school, essential services':
    'Naukri dena, loan, school mein daakhla, zaroori sewaayein',
  'Only say it is AI':
    'Bas batana ki yeh AI hai',
  'Say it is AI; label made-up pictures, video and audio':
    'Batayiye ki yeh AI hai; banaye hue pictures, video aur audio par label lagaiye',
  'Chatbots, AI-made images':
    'Chatbots, AI se bani images',
  'Ordinary good habits':
    'Aam achhi aadatein',
  'Most tools staff use inside the office':
    'Office ke andar staff ke zyadatar tools',
  'Two things in this table often surprise teams. First, <strong>the use sets the risk level, not the model.</strong> Your Chapter 7 system is minimal risk as an internal FAQ (a list of common questions and answers). The very same system is high risk if it decides who gets a benefit.':
    'Is table ki do baatein teams ko aksar chaunkati hain. Pehli, <strong>risk level use tay karta hai, model nahi.</strong> Aapka Chapter 7 ka system internal FAQ (aam sawaal-jawaab ki list) ke roop mein minimal risk hai. Wahi system zyada risk wala ban jaata hai agar woh tay kare ki kisko benefit milega.',
  'Second, <strong>the level changes when the use changes</strong>. That often happens after launch, and nobody updates the papers.':
    'Doosri, <strong>use badalne par level badal jaata hai</strong>. Yeh aksar launch ke baad hota hai, aur koi kaagaz update nahi karta.',
  'Two more points on the EU AI Act. The duties differ for whoever <em>provides</em> a system and whoever <em>deploys</em> it (puts it to work), so find out which one you are. Also, chatbots and made-up media have a duty to be open: people must be told they are talking to an AI, and AI-made images and audio must be labelled.':
    'EU AI Act par do baatein aur. Jo system <em>banakar deta hai</em> aur jo use <em>kaam par lagata hai</em>, dono ki duties alag hain, isliye pata kijiye ki aap kaun hain. Saath hi, chatbots aur banaye hue media par khulkar batane ki duty hai: logon ko bataya jaana chahiye ki woh AI se baat kar rahe hain, aur AI se bani images aur audio par label lagna chahiye.',
  'Put your system in a risk tier':
    'Apne system ko ek risk tier mein rakhiye',
  'Take your Chapter 7 RAG system (the one that finds pages first, then answers from them). Place it in a real use in your organisation. Pick a tier and defend it in one sentence. Then change the use, for example from internal FAQ to checking if a customer is eligible, and pick the tier again.':
    'Apna Chapter 7 ka RAG system lijiye (jo pehle pages dhoondhta hai, phir unse jawaab deta hai). Use apne organisation ke ek asli use mein rakhiye. Ek tier chuniye aur ek sentence mein uski wajah likhiye. Phir use badaliye, jaise internal FAQ se customer eligible hai ya nahi yeh dekhna, aur tier dobara chuniye.',
  'The same code moves to a different tier. That is why choosing a risk tier is a product decision, not an engineering one.':
    'Wahi code doosre tier mein chala jaata hai. Isiliye risk tier chunna product ka faisla hai, engineering ka nahi.',
  'Write a system card':
    'System card likhiye',
  'Once you know the tier, you need a way to show your work, like a student showing steps in a maths answer. That is what a <strong>system card</strong> is for. It is a one-page description of an AI system: what it is for, what data it uses, how it was tested, and what it gets wrong. For anything above minimal risk, you need one.':
    'Tier pata chalne ke baad aapko apna kaam dikhane ka tareeka chahiye, jaise maths ke jawaab mein student steps dikhata hai. <strong>System card</strong> isi ke liye hai. Yeh AI system ka ek page ka description hai: yeh kis kaam ka hai, kaun sa data use karta hai, kaise test hua, aur kya galat karta hai. Minimal risk se upar ki har cheez ke liye aapko ek chahiye.',
  'A system card is the security-audit and sign-off file for one system. The difference is that you write the limits section yourself, with proof, instead of leaving it for the auditor to find.':
    'System card ek system ki security-audit aur sign-off file hai. Fark yeh hai ki limits wala hissa aap khud saboot ke saath likhte hain, auditor ke dhoondhne ke liye nahi chhodte.',
  'Write the system card':
    'System card likhiye',
  'Use the generator on this page, or write it by hand under these headings.':
    'Is page ka generator use kijiye, ya in headings ke neeche haath se likhiye.',
  '<strong>Purpose.</strong> Say what it does and for whom, in two sentences.':
    '<strong>Purpose.</strong> Do sentences mein likhiye ki yeh kya karta hai aur kiske liye.',
  '<strong>Explicitly out of scope.</strong> List three to five things it must not be used for. This is the most useful part.':
    '<strong>Explicitly out of scope.</strong> Teen se paanch cheezein likhiye jinke liye ise use nahi karna. Yeh sabse kaam ka hissa hai.',
  '<strong>Data.</strong> Say where the data comes from, your right to use it, how long you keep it, and where it is stored.':
    '<strong>Data.</strong> Likhiye ki data kahan se aata hai, use karne ka aapka haq kya hai, aap use kitne time rakhte hain, aur woh kahan store hota hai.',
  '<strong>Evaluation.</strong> Give your Chapter 6 numbers, at a stated k (how many pages you fetch), on a stated date, against a described ground truth (the answer key).':
    '<strong>Evaluation.</strong> Apne Chapter 6 ke numbers dijiye, ek bataye hue k par (kitne pages laaye gaye), ek bataayi hui date par, ek samjhaayi hui ground truth ke saamne (answer key).',
  '<strong>Known limitations.</strong> Write your red marks as plain sentences, each with the proof that found it.':
    '<strong>Known limitations.</strong> Apne red marks saaf sentences mein likhiye, har ek ke saath woh saboot jisse woh mila.',
  '<strong>Human oversight.</strong> Say which outputs are checked, by whom, seeing what, and with what power to say no.':
    '<strong>Human oversight.</strong> Likhiye ki kaun se outputs check hote hain, kisse, woh kya dekhte hain, aur unke paas mana karne ka kitna haq hai.',
  '<strong>Logging &amp; incidents.</strong> Say what is written down, how long it is kept, and who is told when something goes wrong.':
    '<strong>Logging &amp; incidents.</strong> Likhiye ki kya record hota hai, kitne time rakha jaata hai, aur kuch galat hone par kise bataya jaata hai.',
  '<strong>Change control.</strong> Say that the model is pinned to one version (fixed, so it does not change by itself), prompts are versioned, and the eval (the test run) is re-run on every change.':
    '<strong>Change control.</strong> Likhiye ki model ek version par pinned hai (tay hai, apne aap badalta nahi), prompts ke versions rakhe jaate hain, aur eval (test) har badlaav par dobara chalta hai.',
  'You now have one page, and every section came from your earlier work. Chapters 6, 12, 13, 14 and 15 were the research. This is the write-up. Someone who skipped those chapters could only fill this page with fancy words.':
    'Ab aapke paas ek page hai, aur har hissa aapke pehle ke kaam se aaya. Chapters 6, 12, 13, 14 aur 15 research the. Yeh uska likhit roop hai. Jisne woh chapters chhode, woh is page ko sirf bade-bade shabdon se bhar sakta.',
  'The “known limitations” part is the hardest to fake, and that makes it the most believable. It lists real failures with the proof behind them. The “out of scope” list is the most useful. It stops the use from sliding into a higher risk tier without anyone noticing.':
    '“Known limitations” wala hissa nakli banana sabse mushkil hai, aur isliye sabse bharose ke laayak hai. Isme asli failures aur unke peeche ka saboot hota hai. “Out of scope” list sabse kaam ki hai. Yeh use ko bina kisi ke dekhe zyada risk wale tier mein phislne se rokti hai.',
  'Run a deletion drill':
    'Deletion drill chalaiye',
  'Now a very practical test, like a fire drill. Suppose someone asks you to delete their data. Where would you have to look?':
    'Ab ek bahut kaam ka test, fire drill jaisa. Maan lijiye koi aapse apna data mitane ko kehta hai. Aapko kahan-kahan dekhna padega?',
  'It may sit in seven places. Three hold the data itself: the original documents, the chunks (small cut-out pieces) and the search copy. Next are the cache (a quick-grab copy kept nearby), the provider’s logs and your own logs. Last is any test set built from real traffic. Many teams find at least two they cannot reach.':
    'Woh saat jagah ho sakta hai. Teen mein data khud hota hai: asli documents, chunks (kate hue chhote tukde) aur search copy. Phir hain cache (paas mein rakhi jaldi wali copy), provider ke logs aur aapke apne logs. Aakhri hai asli traffic se bana koi bhi test set. Kai teams ko kam se kam do aisi jagah milti hain jahan woh pahunch nahi paati.',
  'This is the erasure duty from Chapter 16.5 in real life. Under the Indian Act a person can ask you to wipe their data. The places you cannot reach are where you would fail them.':
    'Yeh Chapter 16.5 ki erasure duty asal zindagi mein hai. Indian Act ke tahat insaan aapse apna data mitane ko keh sakta hai. Jin jagahon tak aap pahunch nahi paate, wahin aap unhe nirash karenge.',
  'Trace one document':
    'Ek document ka peecha kijiye',
  'Pick one document from your collection. List every place a copy of it, or something made from it, exists. Next to each, write how you would remove it.':
    'Apne collection se ek document chuniye. Un sab jagahon ki list banaiye jahan uski copy, ya usse bani koi cheez, maujood hai. Har ek ke saamne likhiye ki aap use kaise hataenge.',
  'Location':
    'Jagah',
  'How to remove it':
    'Hataane ka tareeka',
  'Can you really do it?':
    'Kya aap sach mein kar sakte hain?',
  'The folder of original documents':
    'Asli documents ka folder',
  'The store of cut-out pieces':
    'Kate hue tukdon ka store',
  'The search copy (vector index)':
    'Search copy (vector index)',
  'The quick-grab copy (prompt cache)':
    'Jaldi wali copy (prompt cache)',
  'The provider’s own logs':
    'Provider ke apne logs',
  'Your own request logs':
    'Aapke apne request logs',
  'A test set built from real traffic':
    'Asli traffic se bana test set',
  'Count the rows where the honest answer is no. Report that number today.':
    'Un rows ko giniye jahan imaandaar jawaab na hai. Woh number aaj hi bataiye.',
  'Name the store':
    'Us store ka naam bataiye',
  'Someone asks for their data to be deleted. It is in the document store, the chunk store, the search copy, your logs, your test sets and the cache. Which one do teams usually forget?':
    'Koi apna data mitane ko kehta hai. Woh document store, chunk store, search copy, aapke logs, aapke test sets aur cache mein hai. Teams aksar kise bhool jaati hain?',
  'Most often the test sets and the logs. Someone copied the data into them for a good reason, without thinking about deletion, and nothing in them points back to a person. The cache comes next, and the provider’s cache is the hardest to see: it holds pieces of documents, and no list names the person.':
    'Sabse aksar test sets aur logs. Kisi ne achhi wajah se data unme copy kiya, mitane ke baare mein soche bina, aur unme kuch bhi wapas insaan ki taraf ishaara nahi karta. Phir cache aata hai, aur provider ka cache sabse mushkil se dikhta hai: usme documents ke tukde hote hain, aur koi list insaan ka naam nahi batati.',
  'So write down where data came from when you collect it, instead of trying to work it out later. A deletion request you cannot finish is a failure to follow the rules, with a date on it.':
    'Isliye data jama karte waqt hi likh lijiye ki woh kahan se aaya, baad mein pata lagane ki koshish mat kijiye. Jo deletion request aap poori nahi kar sakte, woh rules na maanne ki galti hai, jis par date padi hoti hai.',
  'Design oversight that works at volume':
    'Aisi oversight design kijiye jo bhaari volume mein kaam kare',
  'Almost every system card says “a human reviews the output”. It sounds comforting. But does it still work when thousands of outputs arrive every day? Try designing one and see. It is like one teacher marking a whole city’s exam papers.':
    'Lagbhag har system card kehta hai “a human reviews the output”. Yeh tasalli deta hai. Lekin kya yeh tab bhi kaam karta hai jab roz hazaaron outputs aate hain? Ek design karke dekhiye. Yeh ek teacher dwara poore shehar ki exam copies jaanchne jaisa hai.',
  'Design a human check that works at real volume: four thousand outputs a day, and one reviewer. Write what the reviewer sees, which outputs reach them, and what they can do. Then say why “a human reviews every output” is not an answer.':
    'Aisa human check design kijiye jo asli volume par kaam kare: roz chaar hazaar outputs, aur ek reviewer. Likhiye ki reviewer kya dekhta hai, kaun se outputs unke paas pahunchte hain, aur woh kya kar sakte hain. Phir bataiye ki “a human reviews every output” jawaab kyun nahi hai.',
  'they see … routed by … can do … and reviewing everything fails because …':
    'woh dekhte hain … bheje jaate hain … kar sakte hain … aur sab kuch review karna isliye fail hota hai kyunki …',
  'Reviewing everything at that volume is not realistic, and people usually give up within two weeks. That makes it worse than no claim, because the paper then lies about the control. What works is checking the right ones: send outputs by how sure the model was, by how harmful the action is, and by a mismatch between what was found and what was answered. The reviewer sees the proof as well as the output, and can say no.':
    'Us volume par sab kuch review karna asli nahi hai, aur log aksar do hafte mein haar maan lete hain. Yeh daava na karne se bhi bura hai, kyunki tab kaagaz control ke baare mein jhooth bolta hai. Jo kaam karta hai woh sahi wale outputs ko check karna hai: outputs ko is hisaab se bhejiye ki model kitna pakka tha, action kitna nuksaan wala hai, aur jo mila aur jo jawaab diya unme mel nahi hai. Reviewer ko output ke saath saboot dikhta hai, aur woh mana kar sakta hai.',
  'Now do the same for your own system.':
    'Ab yahi aap apne system ke liye kijiye.',
  'Write down one review point':
    'Ek review point likhiye',
  'Take your riskiest output and write down the review. Which outputs are reviewed: all, a sample, or those that fail a check? What does the reviewer see: the answer alone, or also the pieces found and the quote? How long do they have, and can they overrule it?':
    'Apna sabse risky output lijiye aur review likhiye. Kaun se outputs review hote hain: sab, ek sample, ya jo kisi check mein fail ho? Reviewer kya dekhta hai: sirf jawaab, ya mile hue tukde aur quote bhi? Unke paas kitna time hai, aur kya woh baat palat sakte hain?',
  'Then check: at your expected volume, can this review really happen? At 4,000 outputs a day, a promise to review every one will not be kept. It lives only on paper. The structured output from Chapter 8 and the code checks from Chapter 14 make targeted review possible.':
    'Phir check kijiye: aapke expected volume par kya yeh review sach mein ho sakta hai? Roz 4,000 outputs par har ek ko review karne ka vaada nibhaya nahi jaayega. Woh sirf kaagaz par rehta hai. Chapter 8 ka structured output aur Chapter 14 ke code checks nishaane par review ko mumkin banate hain.',
  'Build a vendor file':
    'Vendor file banaiye',
  'So far we looked at your own system. But most organisations also lean on AI from outside vendors (companies that sell it to you). Your papers must cover their part too, like checking the farmer as well as the shop.':
    'Ab tak humne aapka apna system dekha. Lekin zyadatar organisations outside vendors ke AI par bhi tikti hain (woh companies jo use aapko bechti hain). Aapke kaagaz unke hisse ko bhi cover karein, jaise dukaan ke saath kisan ko bhi jaanchna.',
  'Collect four answers from each vendor':
    'Har vendor se chaar jawaab lijiye',
  'For any AI vendor your organisation uses, get four things in writing. First, the list of subprocessors (other companies the vendor passes your data to), and where data is stored. Then whether your data trains their models, and how to opt out. Last, how much notice they give before retiring a model.':
    'Aapki organisation jo bhi AI vendor use kare, uske liye chaar cheezein likhit mein lijiye. Pehli, subprocessors ki list (woh doosri companies jinhe vendor aapka data deta hai), aur data kahan store hota hai. Phir, kya aapka data unke models ko train karta hai, aur isse bahar kaise nikalein. Aakhri, model retire karne se pehle woh kitna notice dete hain.',
  'People often leave out the last one, and it is the subject of Chapter 18. A 30-day notice to retire the model your high-risk system was tested on is an emergency with a date.':
    'Log aksar aakhri wali chhod dete hain, aur yahi Chapter 18 ka vishay hai. Jis model par aapka zyada risk wala system test hua, use retire karne ka 30 din ka notice ek emergency hai jis par date padi hai.',
  'There is one more risk, and it sits outside every system you build. Staff are already pasting office documents into public chat tools. This is called shadow AI, like a back-door shop nobody told the owner about.':
    'Ek aur risk hai, aur woh aapke banaye har system ke bahar baitha hai. Staff pehle se office documents public chat tools mein paste kar rahe hain. Ise shadow AI kehte hain, jaise peeche ke darwaaze ki dukaan jiske baare mein malik ko kisi ne nahi bataya.',
  'A ban rarely works, because the tools are useful. A ban changes the policy, not what people really do. A better answer is an approved option that is good enough, plus clear guidance on what may be pasted.':
    'Pabandi shaayad hi kaam karti hai, kyunki tools kaam ke hain. Pabandi policy badalti hai, logon ka asli vyavhaar nahi. Behtar jawaab hai ek manzoor kiya hua vikalp jo kaafi achha ho, aur saaf guidance ki kya paste kiya ja sakta hai.',
  'That completes the picture: a risk tier, a system card, a deletion drill, real oversight and a vendor file. Next, in Chapter 18, you pull your artifacts together into one requirements document (a paper that says what to build) and plan for the day your model is retired.':
    'Isse poori tasveer ban gayi: ek risk tier, ek system card, ek deletion drill, asli oversight aur ek vendor file. Agle Chapter 18 mein aap apne saare artifacts ko ek requirements document mein jodenge (ek kaagaz jo batata hai kya banana hai) aur us din ki taiyaari karenge jab aapka model retire hoga.',
});
