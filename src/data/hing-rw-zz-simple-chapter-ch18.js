/* Hinglish for The AI PRD: specs, migrations and kill switches (chapter:ch18), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A normal spec says what a feature must do. An AI spec says how good it is, as a measured range, because the model can answer a little differently each time. You will draw the whole system from memory. You will put a PRD (the recipe card for your feature) together from the artifacts (pieces of work) you made earlier. You will plan how to collect feedback. You will also plan for the day your model is retired.':
    'Normal spec batata hai ki feature ko kya karna hai. AI spec batata hai ki woh kitna accha hai, ek naapi hui range mein, kyunki model har baar thoda alag jawaab de sakta hai. Aap poora system yaad se banayenge. Un artifacts (bane hue kaam) se ek PRD (feature ka recipe card) jodenge jo aapne pehle banaye. Feedback lene ka tareeka sochenge. Aur us din ki bhi taiyari karenge jab aapka model hata diya jayega.',
  'Say what takes the place of pass-or-fail acceptance criteria in an AI spec, and why.':
    'Batayiye ki AI spec mein pass ya fail wale acceptance criteria ki jagah kya aata hai, aur kyun.',
  'List what you test again when your provider retires the model you built on.':
    'Likhiye ki jab provider aapka model hata de, to aap kya kya dobara test karte hain.',
  'Say why a kill switch (an off button for the AI) is different from a rollback (going back to the old version).':
    'Batayiye ki kill switch (AI ka off button) rollback (purane version par wapas jaana) se alag kyun hai.',
  'Write a requirements document that still works when the model changes':
    'Aisa requirements document likhiye jo model badalne par bhi kaam kare',
  'An AI requirements document is like a recipe card for a dish that never tastes exactly the same twice. It says how good the dish should be, as a range, and what to do when it falls outside the range. In this chapter you saw what replaces pass or fail. You saw what to test again when a provider retires your model. You saw why a kill switch is not a rollback. Now write the requirements for Bharat Privacy Guard, and practise the day its model changes.':
    'AI requirements document us recipe card jaisa hai jiska dish kabhi bilkul ek jaisa nahi banta. Isme likha hota hai ki dish kitna accha hona chahiye, ek range mein, aur range se bahar jaye to kya karna hai. Is chapter mein aapne dekha ki pass ya fail ki jagah kya aata hai. Aapne dekha ki provider model hataye to kya dobara test karna hai. Aapne dekha ki kill switch rollback nahi hota. Ab Bharat Privacy Guard ke requirements likhiye, aur us din ka abhyas kijiye jab uska model badalta hai.',
  'This task is written only, with no code. Collect the notes and numbers the chapter names. Then write the document in the notes box below. Short version for the route, about 20 minutes: steps 2, 4 and 6.':
    'Yeh task sirf likhne ka hai, code nahi hai. Chapter mein jo notes aur numbers aaye, unhe ikattha kijiye. Phir document neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 2, 4 aur 6.',
  'First draw the whole system from memory, like drawing your street map without looking. Do not look at your earlier diagrams. Then compare with your records and mark what you forgot.':
    'Pehle poora system yaad se banayiye, jaise bina dekhe apni gali ka naksha banate hain. Purane diagrams mat dekhiye. Phir apne records se milayiye aur jo bhool gaye the use mark kijiye.',
  'Write the requirements document. In the quality part, write ranges, not promises. For example: “finds at least 95 of every 100 Aadhaar numbers on the answer key (your list of questions with the right answers), give or take 3.” For each failure, write what the user sees on screen.':
    'Requirements document likhiye. Quality wale hisse mein range likhiye, vaade nahi. Jaise: “answer key (sahi jawaabon wali aapki list) par har 100 mein se kam se kam 95 Aadhaar numbers dhoondhta hai, 3 upar neeche.” Har failure ke liye likhiye ki user ko screen par kya dikhta hai.',
  'Write down what you save on every request. Then, next quarter, you can tell whether quality got worse. It is like a shop keeping a bill book.':
    'Likhiye ki har request par aap kya save karte hain. Tab agle quarter mein aap bata sakenge ki quality bigdi ya nahi. Yeh dukaan ki bill book jaisa hai.',
  'Practise the day the model provider retires your model. You get sixty days’ notice. Write exactly what you will test again, and what result would make you stop and not switch.':
    'Us din ka abhyas kijiye jab model provider aapka model hata deta hai. Aapko sixty din ka notice milta hai. Theek theek likhiye ki aap kya dobara test karenge, aur kaun sa result aapko switch karne se rok dega.',
  'Name the three numbers you would put on a dashboard (one screen that shows how things are going). Say who looks at them.':
    'Un teen numbers ke naam likhiye jo aap dashboard par rakhenge (ek screen jo dikhati hai ki sab kaisa chal raha hai). Likhiye ki unhe kaun dekhta hai.',
  'Write the findings page: what you now know can break, and the chapter that showed you each one.':
    'Findings page likhiye: ab aap kya jaante hain jo toot sakta hai, aur kaun sa chapter ne aapko har ek dikhaya.',
  'A drawing from memory, with the things you forgot marked.':
    'Yaad se banaya hua drawing, jisme jo cheezein bhooli thi woh mark hain.',
  'A requirements document with measured ranges, and a plain description of what the user sees for each failure.':
    'Naapi hui ranges wala requirements document, aur har failure par user ko kya dikhta hai uska saaf vivaran.',
  'A note of what you save on every request.':
    'Ek note ki aap har request par kya save karte hain.',
  'The model-retirement practice: what you test again, and what result would stop you.':
    'Model hatne ka abhyas: aap kya dobara test karenge, aur kaun sa result aapko rokega.',
  'The dashboard numbers and who owns them, and the findings page.':
    'Dashboard ke numbers aur unka malik kaun hai, aur findings page.',
  'A test set (questions with known right answers) and a list of your own failures':
    'Ek test set (sahi jawaab pehle se pata wale sawaal) aur aapke apne failures ki list',
  'They turn a rule like “it must work well” into a number.':
    'Yeh “accha kaam karna chahiye” jaise niyam ko ek number bana dete hain.',
  'A real cost figure':
    'Ek asli kharch ka number',
  'The full number, with all four things that multiply it.':
    'Poora number, un chaaron cheezon ke saath jo use badhati hain.',
  'A risk tier (how risky the feature is) and a human check':
    'Ek risk tier (feature kitna risky hai) aur ek insaan ki jaanch',
  'The things that ship alongside the code, like a warranty card in the box.':
    'Woh cheezein jo code ke saath jaati hain, jaise dabbe mein warranty card.',
  'Collect your work from earlier chapters: the answer key (Chapter 6), the list of failure types (14.5), the trifecta audit (13), the cost table (15) and the system card (17). This chapter joins them into one document.':
    'Purane chapters ka kaam ikattha kijiye: answer key (Chapter 6), failure types ki list (14.5), trifecta audit (13), cost table (15) aur system card (17). Yeh chapter inhe ek document mein jodta hai.',
  'In the last chapter you wrote a system card and planned who checks the AI. That was one page. Now you gather everything you have made into one requirements document for an AI feature. You also plan for the day the model underneath it changes.':
    'Pichhle chapter mein aapne ek system card likha aur socha ki AI ko kaun jaanchega. Woh ek page tha. Ab aap jo kuch banaya hai woh sab ek requirements document mein jodte hain, ek AI feature ke liye. Aap us din ki bhi taiyari karte hain jab uske neeche ka model badal jata hai.',
  'How an AI spec is different':
    'AI spec alag kaise hai',
  'Think of an ordinary spec. It says what the feature must do. A tester (QA) checks it, and it passes or fails. This works because the same input always gives the same output, like a calculator.':
    'Ek normal spec sochiye. Usme likha hota hai feature ko kya karna hai. Tester (QA) use check karta hai, aur woh pass ya fail hota hai. Yeh isliye chalta hai kyunki same input se hamesha same output milta hai, calculator ki tarah.',
  'AI does not work like that. The same input gives a <em>range</em> of answers, like a parrot that says things a little differently each time. The range can also shift when your provider updates a model that you do not control.':
    'AI aise kaam nahi karta. Same input se jawaabon ki ek <em>range</em> milti hai, jaise tota jo har baar thoda alag bolta hai. Range tab bhi badal sakti hai jab provider woh model update kar de jo aapke haath mein nahi hai.',
  'An AI spec says three things: how good the feature is, as a measured range; the proof that you measured it; and what happens when it drifts (slips away from its range).':
    'AI spec teen baatein batata hai: feature kitna accha hai, ek naapi hui range mein; aapne use naapa uska saboot; aur jab woh drift kare (range se khisak jaye) to kya hota hai.',
  'So what changes in a spec? Four things, and you have already built all four. The table puts the normal way next to the AI way. The last column shows which chapters taught it.':
    'To spec mein kya badalta hai? Chaar cheezein, aur aap chaaron pehle hi bana chuke hain. Table normal tareeka aur AI wala tareeka saath rakhti hai. Aakhri column batata hai kaun se chapters ne sikhaya.',
  'Normal spec':
    'Normal spec',
  'AI spec':
    'AI spec',
  'Acceptance criteria (the rule that says a feature is done) as pass or fail':
    'Acceptance criteria (woh niyam jo kehta hai feature poora hua) pass ya fail ke roop mein',
  'A score you must reach on a named answer key, at stated settings':
    'Ek score jo aapko ek naam wali answer key par, bataye hue settings par, paana hai',
  'Ch. 6, 14':
    'Ch. 6, 14',
  'A QA test plan (the tester’s checklist)':
    'QA test plan (tester ki checklist)',
  'A fixed set of test cases that must pass, plus the free code checks, run at every release':
    'Test cases ka ek tay set jo pass hona zaroori hai, saath mein muft code checks, har release par chalaye jaate hain',
  'Ch. 8, 14':
    'Ch. 8, 14',
  'Done when the features work':
    'Poora tab jab features chal jaayein',
  'Done when it is measured at stated numbers, and the known failures are written down':
    'Poora tab jab woh bataye hue numbers par naapa ja chuka ho, aur jaane hue failures likhe ho',
  'Ch. 6, 17':
    'Ch. 6, 17',
  'Rollback means putting the last version back, like going back to yesterday’s notes':
    'Rollback ka matlab pichhla version wapas lagana, jaise kal ke notes par laut jaana',
  'Rollback means a fixed model version, saved copies of your prompts, and a switch that turns the AI off':
    'Rollback ka matlab ek tay model version, aapke prompts ki saved copies, aur ek switch jo AI ko band kar de',
  'Ch. 10, 17':
    'Ch. 10, 17',
  'Draw the whole system from memory':
    'Poora system yaad se banayiye',
  'Before you write anything, find out how much of the system you hold in your head. Draw it without looking, like drawing the route to your office from memory.':
    'Kuch likhne se pehle dekhiye ki system ka kitna hissa aapke dimaag mein hai. Bina dekhe banayiye, jaise daftar ka raasta yaad se banana.',
  'Draw the map':
    'Naksha banayiye',
  'Close everything. Take a blank page. Draw the whole system. It is much bigger than the Chapter 7 drawing.':
    'Sab kuch band kijiye. Ek khaali page lijiye. Poora system banayiye. Yeh Chapter 7 ke drawing se bahut bada hai.',
  'Next to every arrow, write one line in your own words. Then, in red, mark every place where you have <em>seen it fail yourself</em>. Write the chapter too. Aim for twenty.':
    'Har teer ke paas apne shabdon mein ek line likhiye. Phir laal rang mein har woh jagah mark kijiye jahan aapne <em>use khud fail hote dekha</em>. Chapter bhi likhiye. Bees ka lakshya rakhiye.',
  'Now check yourself against the Red-Mark Map on this site. Draw on paper first. The gap between your drawing and the map is your list of things to revise, like the questions you got wrong in a test.':
    'Ab is site ke Red-Mark Map se apna drawing milayiye. Pehle kagaz par banayiye. Aapke drawing aur map ke beech ka fark aapki revision list hai, jaise test mein galat hue sawaal.',
  'Write the PRD':
    'PRD likhiye',
  'A PRD is a product requirements document. Think of it as the recipe card for a dish: what it is, who it is for, and how you know it came out right. You have made most of the pieces already. The tool on this page helps you put them in order.':
    'PRD ka matlab product requirements document hai. Isse dish ka recipe card samjhiye: woh kya hai, kiske liye hai, aur kaise pata chalega ki sahi bani. Zyaadatar tukde aap pehle bana chuke hain. Is page ka tool unhe kram mein rakhne mein madad karta hai.',
  'Put the PRD together':
    'PRD jodiye',
  'Pick one real feature. Every section comes from something you already made, so this is mostly copying pieces in, not writing new ones. The table shows where each section comes from.':
    'Ek asli feature chuniye. Har section aapke pehle bane kaam se aata hai, isliye yeh zyaadatar tukde jodna hai, naya likhna nahi. Table dikhati hai ki har section kahan se aata hai.',
  'Section':
    'Section',
  'The problem and the user':
    'Samasya aur user',
  'What you already know about your own field':
    'Aap apne kshetra ke baare mein jo pehle se jaante hain',
  'What it covers, and what it will not do':
    'Woh kya cover karta hai, aur kya nahi karega',
  'Ch.17 system card':
    'Ch.17 system card',
  'Acceptance criteria (eval thresholds: score targets, at stated settings)':
    'Acceptance criteria (eval thresholds: score ke lakshya, bataye hue settings par)',
  'Ch.6 ground truth (right answers) + Ch.14 failure taxonomy (list of failure types)':
    'Ch.6 ground truth (sahi jawaab) + Ch.14 failure taxonomy (failure types ki list)',
  'Regression suite (fixed test cases): five that stop a release if they fail':
    'Regression suite (tay test cases): paanch jo fail hon to release rok dete hain',
  'Ch.14 homework':
    'Ch.14 homework',
  'Ch.13':
    'Ch.13',
  'Unit economics (money per question): cost per query, typical and slowest speed (p50, p95), and the profit line':
    'Unit economics (har sawaal ka paisa): cost per query, aam aur sabse dheemi speed (p50, p95), aur munafe ki line',
  'Ch.15 table':
    'Ch.15 table',
  'Human oversight: who checks the AI’s work, and when':
    'Human oversight: AI ke kaam ko kaun aur kab jaanchta hai',
  'Ch.17':
    'Ch.17',
  'Rollout: first a small share of users, the live numbers, and the kill switch':
    'Rollout: pehle thode users, live numbers, aur kill switch',
  'This chapter':
    'Yeh chapter',
  'Model pinning (fixing one model version) and a plan to move to a new model':
    'Model pinning (ek model version ko tay karna) aur naye model par jaane ki yojana',
  'Your red map':
    'Aapka red map',
  'Read the finished document once. Every number in it was measured by you, on your own documents. Very few AI PRDs can say that.':
    'Poora document ek baar padhiye. Isme har number aapne apne documents par khud naapa hai. Bahut kam AI PRD yeh keh sakte hain.',
  'The hardest part to write is the acceptance criteria, the rule that says the feature is good enough. Try it now, for a feature you own.':
    'Likhne mein sabse mushkil hissa acceptance criteria hai, woh niyam jo kehta hai feature kaafi accha hai. Ab ek aise feature ke liye try kijiye jo aapka hai.',
  'Write the acceptance criteria for one feature you own, as numbers, not sentences. What do you measure? On which answer key? At what score? What happens if the number falls below it? Then add the line most specs leave out: what the kill switch turns off, and what the product still does afterwards.':
    'Apne ek feature ke acceptance criteria numbers mein likhiye, vaakyon mein nahi. Aap kya naapte hain? Kaun si answer key par? Kitne score par? Number usse neeche gira to kya hoga? Phir woh line jodiye jo zyaadatar specs chhod dete hain: kill switch kya band karta hai, aur uske baad product phir bhi kya karta hai.',
  'metric — answer key — threshold — what happens on breach … kill switch: …':
    'metric — answer key — seema — seema tootne par kya hoga … kill switch: …',
  'A good answer can be checked by someone who doubts you. It names the answer key and who wrote it. It gives scores as numbers. It gives an action for each time the score falls short: stop the release, tell someone, or switch to a safe mode. The kill-switch line matters because a rollback only goes back to the old code. That does not help when both versions share the same bad behaviour.':
    'Accha jawaab woh hai jise shak karne wala bhi jaanch sake. Usme answer key ka naam aur use kisne likha woh hota hai. Score numbers mein hote hain. Score kam padne par har baar ek kaam likha hota hai: release rokiye, kisi ko batayiye, ya safe mode par jaiye. Kill switch ki line isliye zaroori hai kyunki rollback sirf purane code par jaata hai. Jab dono versions mein wahi bura vyavahaar ho, to isse madad nahi milti.',
  'Plan for the day your model is retired':
    'Us din ki taiyari jab model hata diya jaye',
  'Every AI team learns this sooner or later. <strong>Your model will be retired.</strong> Your provider decides when, like a shop closing a product line. You do not choose the notice period.':
    'Har AI team yeh der se ya jaldi seekhti hai. <strong>Aapka model hata diya jayega.</strong> Kab, yeh provider tay karta hai, jaise dukaan koi product band kar de. Notice kitna milega, yeh aap tay nahi karte.',
  'Switching to a new model is not a small settings change. You must measure everything again. Run the answer key again, and your fixed test cases. Test again whether the model can be tricked into bad behaviour. Measure cost and speed again. Teams that did Chapter 6 can do all this in an afternoon.':
    'Naye model par jaana chhoti settings badalna nahi hai. Sab kuch dobara naapna padta hai. Answer key dobara chalaiye, aur apne tay test cases bhi. Phir dekhiye ki model ko bahkaakar bura vyavahaar karwaya ja sakta hai ya nahi. Kharch aur speed dobara naapiye. Jinhone Chapter 6 kiya, woh yeh sab ek dopahar mein kar lete hain.',
  'What you test again, and what you skip':
    'Kya dobara test karna hai, aur kya chhodna hai',
  'Your provider gives thirty days’ notice. The model behind your live feature is being retired. Before you read on, write what you test again, in order, and what you can safely skip.':
    'Aapka provider tees din ka notice deta hai. Aapke live feature ke peechhe ka model hataya ja raha hai. Aage padhne se pehle likhiye ki aap kya dobara test karenge, kram se, aur kya surakshit roop se chhod sakte hain.',
  'Test again everything you measured on the old model, because the old numbers no longer count. That means the full test set against your answer key. It means checking the marker model (a second model that marks answers, like a second student marking homework) against your own marks. This is also a model call. It means your costs at the new prices, and your slowest response times. Do not skip the marker check. A marker checked against the old model has not been checked against the new one.':
    'Jo kuch aapne purane model par naapa tha woh sab dobara test kijiye, kyunki purane numbers ab maayne nahi rakhte. Matlab poora test set answer key ke saamne. Matlab marker model (doosra model jo jawaab check karta hai, jaise doosra student homework check kare) ko apne marks se milana. Yeh bhi ek model call hai. Matlab naye daamon par aapka kharch, aur aapke sabse dheeme response times. Marker ki jaanch mat chhodiye. Jo marker purane model par jaancha gaya, woh naye par nahi jaancha gaya.',
  'This is why a test set lasts for years. It is not a one-time launch paper. Teams without one do not find the problems within thirty days. They find them in production, when real users are already using it.':
    'Isliye test set saalon chalta hai. Yeh sirf launch ka kaagaz nahi hai. Jin teams ke paas nahi hota, unhe tees din mein samasya nahi milti. Unhe woh production mein milti hai, jab asli users use kar rahe hote hain.',
  'Now turn that into a plan you could hand to a colleague, like a recipe you pass to a friend.':
    'Ab ise ek aisi yojana mein badaliye jo aap saathi ko de sakein, jaise dost ko recipe dena.',
  'Write a migration runbook':
    'Migration runbook likhiye',
  'Imagine your model will be retired in 30 days. Write the runbook (a list of steps for the day). Say which tests to run again. Say which numbers must match, and within what gap. Say who signs off. Say how you go back if the new model is worse.':
    'Maan lijiye aapka model 30 din mein hata diya jayega. Runbook likhiye (us din ke steps ki list). Likhiye ki kaun se tests dobara chalane hain. Likhiye ki kaun se numbers milne chahiye, aur kitne fark ke andar. Likhiye ki kaun manzoori deta hai. Likhiye ki naya model kharab nikla to wapas kaise jaana hai.',
  'Guess how long it would take. If you say more than two days, you are probably missing the Chapter 6 answer key. That key turns a migration into an afternoon’s work.':
    'Andaza lagaiye ki kitna waqt lagega. Agar aap do din se zyaada kehte hain, to shayad aapke paas Chapter 6 ki answer key nahi hai. Wahi key migration ko ek dopahar ka kaam bana deti hai.',
  'Collect feedback you can use':
    'Aisa feedback lijiye jo kaam aaye',
  'Think of the thumbs-down button in a chat app. On its own, it is almost useless, like a customer who says “bad” and walks out. You cannot repeat what happened. And you cannot tell a wrong answer from a right one the user just did not like.':
    'Chat app ke thumbs-down button ko sochiye. Akela woh lagbhag bekaar hai, jaise graahak jo “kharab” kehkar chala jaye. Aap dobara nahi dekh sakte ki kya hua. Aur aap galat jawaab ko us sahi jawaab se alag nahi kar sakte jo user ko bas pasand nahi aaya.',
  'Now attach the full trace (the record of what happened) to that thumbs-down: the question, the chunks (pieces of text) the system found, the prompt, the model version, and the answer. It becomes a ready-made test case. The difference is about two days of engineering work.':
    'Ab us thumbs-down ke saath poora trace (kya hua ka record) jodiye: sawaal, system ko mile chunks (text ke tukde), prompt, model version, aur jawaab. Yeh ek taiyaar test case ban jaata hai. Fark lagbhag do din ke engineering kaam ka hai.',
  'Design the feedback record':
    'Feedback record banayiye',
  'Write exactly what a single thumbs-down must save. Then it can become a test case with no more digging.':
    'Theek theek likhiye ki ek thumbs-down ko kya save karna chahiye. Tab woh bina aur khoj ke test case ban sakta hai.',
  'Compare this with what your organisation saves today. The gap is usually big. Closing it is the cheapest improvement on this page.':
    'Ise us se milaiye jo aapka sangathan aaj save karta hai. Fark aam taur par bada hota hai. Use bharna is page ka sabse sasta sudhaar hai.',
  'You already roll out changes in steps, like any product. For AI, add one more thing: a <strong>kill switch</strong>. It is like the main switch of the electric board.':
    'Aap pehle se badlaav ko charanon mein laate hain, jaise kisi bhi product mein. AI ke liye ek aur cheez jodiye: <strong>kill switch</strong>. Yeh bijli ke board ke main switch jaisa hai.',
  'The difference is speed. A rollback needs a new release. A kill switch is a flag (an on/off setting) that sends all traffic to the non-AI path at once. This works only if the non-AI path still exists, and someone tested it recently.':
    'Fark speed ka hai. Rollback ke liye naya release chahiye. Kill switch ek flag (on/off setting) hai jo saara traffic turant bina-AI wale raaste par bhej deti hai. Yeh tabhi chalta hai jab bina-AI wala raasta abhi bhi ho, aur kisi ne use haal mein test kiya ho.',
  'The kill switch is the paper process in a continuity plan, the one you can go back to the same day. Model retirement is the vendor ending support, and you plan for it the same way.':
    'Kill switch continuity plan ki woh kaagaz wali process hai, jis par aap usi din wapas ja sakte hain. Model ka hatna vendor ka support khatam karna hai, aur aap uski taiyari waise hi karte hain.',
  'You are nearly done with this part of the course. The last job is to look back at everything you built and say honestly what you know and what you do not.':
    'Aap course ke is hisse ke lagbhag ant par hain. Aakhri kaam hai jo kuch banaya use dekhna aur imaandari se kehna ki aap kya jaante hain aur kya nahi.',
  'Write your findings page':
    'Apna findings page likhiye',
  'Write one page in two halves, like a report card with two columns.':
    'Do hisson mein ek page likhiye, jaise report card ke do column.',
  '<strong>What I now know breaks.</strong> List your red marks. Give the proof for each, such as “seen in Chapter X, on my document, with these numbers”.':
    '<strong>Ab main jaanta hoon kya toot jaata hai.</strong> Apne red marks likhiye. Har ek ka saboot dijiye, jaise “Chapter X mein dekha, mere document par, in numbers ke saath”.',
  '<strong>What I still cannot judge.</strong> Make this list honest. It is your plan for what to learn next.':
    '<strong>Jo main abhi nahi parakh sakta.</strong> Is list ko imaandaar rakhiye. Yeh aapki agle seekhne ki yojana hai.',
  'Then go back to your Chapter 1 guesses and compare them with this page.':
    'Phir Chapter 1 ke apne andaazon par jaiye aur unhe is page se milaiye.',
  'This course has not covered how models are trained, or GPU costs and running models on your own machines. It also skips running many agents at large scale, formal proofs that code is correct, and making up practice data. Part IV covers two topics that belong to product managers: whether to fine-tune or use a smaller model, and what the user sees when the system is wrong. The LATER page on this site lists the rest.':
    'Is course mein yeh sab nahi aaya: models kaise train hote hain, aur GPU ka kharch aur model ko apni machines par chalana. Bahut saare agents ko bade star par chalana, code sahi hone ka formal saboot, aur banawati practice data banana bhi nahi aaya. Part IV mein product managers ke do vishay hain: fine-tune karna ya chhota model lena, aur system galat hone par user ko kya dikhta hai. Baaki ki list is site ke LATER page par hai.',
  'Next comes a very common decision. A vendor offers to sell you what you have learned to build. Should you build it yourself or buy it?':
    'Agla ek bahut aam faisla hai. Ek vendor aapko wahi bechne aata hai jo aapne banana seekha hai. Khud banayein ya kharidein?',
});
