/* Hinglish for Observability and LLMOps: traces, cost and rollback (chapter:ch17o), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Trace one request by hand. A trace is the trip record of one request, like the scan list of a parcel. Time every stage with a stopwatch.':
    'Ek request ko haath se trace kijiye. Trace ek request ke safar ka record hai, jaise parcel ki scan list. Har stage ko stopwatch se time kijiye.',
  'Write down these things for the request. Its request id (its parcel number). The model and prompt version. The retrieval ids (which pages were fetched). The tool calls. The latency (the waiting time). The tokens (Lego bricks of text). The status. The evaluation result.':
    'Request ke liye yeh sab likh lijiye. Uska request id (uska parcel number). Model aur prompt version. Retrieval ids (kaun se pages laaye gaye). Tool calls. Latency (intezaar ka time). Tokens (text ki Lego eentein). Status. Evaluation result.',
  'Make three bad requests on purpose: a slow one, an expensive one and a low-quality one. Then find what went wrong in each. Use only its trace, like a detective with scan records.':
    'Jaan-boojhkar teen kharab request banaiye: ek slow, ek mehngi aur ek low-quality. Phir har ek mein kya galat hua, yeh dhoondhiye. Sirf uska trace use kijiye, jaise scan records wala jaasoos.',
  'A specification (a written plan) for a six-panel view of the running system. Think of one screen with six dials, like a car dashboard.':
    'Chalte hue system ke six-panel view ki specification (ek likha hua plan). Socheye ek screen par chhe dial hain, jaise gaadi ka dashboard.',
  'Say which signals should start an investigation, which should trigger a rollback (going back to the old version), and which are just noise, like a rumble that means nothing.':
    'Bataiye kaun se signals investigation shuru karwayein, kaun se rollback karwayein (purane version par wapas jaana), aur kaun se sirf noise hain, jaise ek gadgad jiska koi matlab nahi.',
  'A trace is the record of one request’s trip through the system, like the scan list of a parcel. It shows what was retrieved (fetched), which prompt version ran, and how much time and how many tokens each stage used.':
    'Trace ek request ke system mein safar ka record hai, jaise parcel ki scan list. Isse dikhta hai ki kya retrieve hua (laaya gaya), kaun sa prompt version chala, aur har stage mein kitna time aur kitne tokens lage.',
  'Telemetry':
    'Telemetry',
  'Telemetry is the numbers a running system sends out about itself, like the dials on a car dashboard. Examples are timings, counts, errors and usage. With them, anyone can see what the system is doing without reading the code.':
    'Telemetry woh numbers hain jo chalta hua system apne baare mein bhejta hai, jaise gaadi ke dashboard ke dial. Jaise timings, counts, errors aur usage. Inse koi bhi code padhe bina dekh sakta hai ki system kya kar raha hai.',
  'Canary release':
    'Canary release',
  'A canary release shows a change to a small group of real users first (their real requests are the “traffic”). It is like tasting one spoon of dal before you serve the whole pot.':
    'Canary release mein kisi change ko pehle asli users ke ek chhote group ko dikhate hain (unki asli requests hi “traffic” hain). Yeh aisa hai jaise poori deg parosne se pehle dal ka ek chamach chakhna.',
  'Drift is quality sliding on its own, though nobody released anything. It is like a bicycle wheel that slowly goes out of line. The inputs, the documents or the provider (the company that runs the model) changed underneath you.':
    'Drift matlab quality apne aap girna, jabki kisi ne kuch release nahi kiya. Yeh aisa hai jaise cycle ka pahiya dheere-dheere tedha ho jaaye. Inputs, documents ya provider (jo company model chalati hai) aapke neeche badal gaye.',
  'When an answer is wrong, slow or expensive, you want to know why, without guessing. Think of a lost parcel: the scan list shows where it got stuck. You will design a trace record. You will treat cost as an architecture metric (a number you watch while you design). And you will give every part a version number, so any change can be rolled back (undone).':
    'Jab jawaab galat, slow ya mehnga ho, toh aap bina andaaza lagaye jaanna chahte hain ki kyun. Kho gaye parcel ko yaad kijiye: scan list batati hai ki woh kahan atka. Aap ek trace record design karenge. Cost ko architecture metric (design karte waqt dekhne wala ek number) ki tarah dekhenge. Aur har part ko ek version number denge, taaki koi bhi change rollback (undo) ho sake.',
  'Design a trace record (a scan list for one request) that can answer “why was this answer wrong?” after the fact.':
    'Aisa trace record (ek request ki scan list) design kar paana jo baad mein bata sake ki “yeh jawaab galat kyun tha?”',
  'See cost as an architecture metric (a number you watch while you design), not only a finance report.':
    'Cost ko architecture metric (design karte waqt dekhne wala number) ki tarah dekh paana, sirf finance report ki tarah nahi.',
  'Name what must be versioned (given a number, like v1 and v2), so that a change can be rolled back (undone).':
    'Bata paana ki kis cheez ka version hona zaroori hai (usse v1, v2 jaisa number dena), taaki change rollback (undo) ho sake.',
  'Plan how you will keep watching the tool once real people use it':
    'Plan banaiye ki asli log tool use karein toh aap use kaise dekhte rahenge',
  'A tool in use can go wrong in ways your tests never saw. You only know if you are watching. You learned to design a trace (the scan list of one request) that says why an answer was wrong. You learned to treat cost as an engineering number. And you learned what must be versioned, so a change can be undone. Now you plan six panels, six dials, for Bharat Privacy Guard.':
    'Tool use mein ho toh woh aise tareeke se galat ja sakta hai jo aapke tests ne kabhi nahi dekha. Pata tabhi chalega jab aap dekh rahe honge. Aapne seekha: aisa trace (request ki scan list) jo bataye ki jawaab galat kyun tha. Cost ko engineering number ki tarah dekhna. Aur kis cheez ka version zaroori hai, taaki change undo ho. Ab aap Bharat Privacy Guard ke liye six panels, yaani chhe dial, ka plan banayenge.',
  'Use your test harness (your test rig) from Chapter 21, and extend it in code so it saves full traces. Then write the plan in the notes box below.':
    'Chapter 21 ka apna test harness (test ka dhaancha) use kijiye, aur use code mein badhaiye taaki woh full traces save kare. Phir plan neeche notes box mein likhiye.',
  'Extend your harness so every run saves a full trace: the input, each step, each finding, the time, the tokens, the cost and any error. Never put real personal details into a trace that is shown on a dashboard (one screen of numbers).':
    'Apna harness badhaiye taaki har run ek full trace save kare: input, har step, har finding, time, tokens, cost aur koi bhi error. Asli personal details ko kabhi aise trace mein mat daaliye jo dashboard (numbers ki ek screen) par dikhta hai.',
  'Design six panels, like six dials: quality, safety, response time, cost, traffic and failures. For every panel, write which data feeds it and how often it is worked out. A panel with no data source is only a wish.':
    'Six panels, yaani chhe dial, design kijiye: quality, safety, response time, cost, traffic aur failures. Har panel ke liye likhiye ki use kaun sa data feed karta hai aur woh kitni baar calculate hota hai. Jis panel ka koi data source nahi, woh sirf ek khwaahish hai.',
  'Fill in what each panel shows. Quality: which number, worked out from what. Safety: how often an attack from Chapter 13 gets through. Response time: the median (the middle one) and the slowest, split by stage. Cost: per message and per day, with the parts visible. Traffic: how many messages, and the mix of English, Hindi and Hinglish. Failures: counts by type, not one error rate.':
    'Har panel kya dikhata hai, yeh bhariye. Quality: kaun sa number, kis se calculate hua. Safety: Chapter 13 ka koi attack kitni baar nikal jaata hai. Response time: median (beech wala) aur sabse slow, stage ke hisaab se. Cost: har message aur har din ki, parts dikhte hue. Traffic: kitne messages, aur English, Hindi, Hinglish ka mix. Failures: type ke hisaab se counts, ek error rate nahi.',
  'For each panel, write the level that makes you investigate (look closely) and the level that makes you roll back (go back to the old version).':
    'Har panel ke liye woh level likhiye jahan aap investigate karenge (dhyaan se dekhenge) aur woh level jahan aap rollback karenge (purane version par wapas jayenge).',
  'List what must be versioned (given a number) so a change can be undone: the rules, the model, the instructions, the reference lists and the answer key (the questions with right answers).':
    'Likhiye ki kis cheez ka version hona zaroori hai (usse number dena) taaki change undo ho sake: rules, model, instructions, reference lists aur answer key (sahi jawaab wale sawaal).',
  'Traces saved by your harness, one for every run.':
    'Aapke harness ke save kiye hue traces, har run ke liye ek.',
  'Six panels, each with a named data source (where its numbers come from).':
    'Six panels, har ek ka ek named data source (uske numbers kahan se aate hain).',
  'For every panel, one level that makes you investigate and one that makes you roll back.':
    'Har panel ke liye ek investigation level aur ek rollback level.',
  'A list of what is versioned, like a list of numbered editions.':
    'Jin cheezon ke versions hain, unki list, jaise numbered editions ki list.',
  'Users notice response time, the waiting time':
    'Users ko response time, yaani intezaar ka time, dikhta hai',
  'You saw this in Chapter 11.5. A trace shows you where the time went, like a parcel scan shows where the delay was.':
    'Yeh aapne Chapter 11.5 mein dekha tha. Trace dikhata hai ki time kahan gaya, jaise parcel scan dikhata hai ki der kahan hui.',
  'Cost can be measured for each single request':
    'Cost har ek request ke hisaab se measure ho sakti hai',
  'Chapter 15 built the arithmetic (the sums) that this chapter now records.':
    'Chapter 15 mein jo hisaab (jodh-ghata) banaya tha, yeh chapter use ab record karta hai.',
  'A release gate (the check before launch) needs evidence':
    'Release gate (launch se pehle ki jaanch) ko evidence chahiye',
  'This comes from Chapter 29. Once you are live, traces give you that evidence, like receipts for what happened.':
    'Yeh Chapter 29 se aata hai. Live hone ke baad traces woh evidence dete hain, jaise ho chuki baat ki raseedein.',
  'Open your experiment harness (your test rig). You will grow its records into full traces, like turning a short note into a full scan list.':
    'Apna experiment harness (test ka dhaancha) kholiye. Aap uske records ko full traces mein badlenge, jaise chhoti parchi ko poori scan list bana dena.',
  'Do units 17.1 and 17.6, then the capstone (the chapter’s project). Only read the other units this time.':
    'Units 17.1 aur 17.6 kijiye, phir capstone (is chapter ka project). Baaki units is baar sirf padh lijiye.',
  'In the last chapter you built a gate. It checks a change before it goes live, like a guard at a door. But the story does not end at release. One day your live system will give a wrong answer, and someone will ask why. This chapter makes sure your answer is not “we can’t tell”.':
    'Pichhle chapter mein aapne ek gate banaya tha. Woh kisi change ko live jaane se pehle check karta hai, jaise darwaze par chowkidaar. Lekin kahani release par khatam nahi hoti. Ek din aapka live system galat jawaab dega, aur koi poochega ki kyun. Yeh chapter pakka karta hai ki aapka jawaab “humein nahi pata” na ho.',
  'Think of a parcel that goes missing. The courier can tell you where it was last scanned, because every parcel is scanned at every step. Without those scans, nobody can ever trace a lost parcel.':
    'Ek kho gaye parcel ko socheye. Courier bata sakta hai ki woh aakhri baar kahan scan hua tha, kyunki har parcel har step par scan hota hai. Un scans ke bina kho gaye parcel ko koi kabhi trace nahi kar sakta.',
  'A <strong>trace</strong> records one request’s path through the system, like a parcel’s scan list. If you see only the input and the output, every diagnosis is a guess.':
    '<strong>Trace</strong> ek request ka system mein poora raasta record karta hai, jaise parcel ki scan list. Agar aap sirf input aur output dekh sakte hain, toh har diagnosis ek andaaza hai.',
  'The six units below start with a single trace and end with a full view of the system, like six steps up a staircase. Each one adds a layer to the one before.':
    'Neeche ke chhe units ek akele trace se shuru hote hain aur system ke poore view par khatam hote hain, jaise seedhi ke chhe step. Har unit pichhle unit par ek layer jodta hai.',
  'Trace one request':
    'Trace one request',
  'Build a structured trace (a neat record with fixed boxes) for one AI request.':
    'Ek AI request ke liye ek structured trace (fixed khaanon wala saaf record) banaiye.',
  'A trace is a timeline of one run, like a parcel’s journey, together with the evidence about it.':
    'Trace ek run ki timeline hai, jaise parcel ka safar, uske saath uske baare mein evidence bhi.',
  'Write down the request ID (its parcel number), the model, the prompt version, the retrieved IDs, the tools used, the latency (waiting time), the tokens and the outcome.':
    'Request ID (uska parcel number), model, prompt version, retrieved IDs, use hue tools, latency (intezaar ka time), tokens aur outcome likhiye.',
  'Save the trace as JSON (a form written as labels and values inside curly brackets).':
    'Trace ko JSON (curly brackets ke andar labels aur values wala form) mein save kijiye.',
  'Take one field (one box) out. Then ask yourself: could you still find out what happened in the incident?':
    'Ek field (ek khaana) hata dijiye. Phir khud se poochhiye: kya aap tab bhi incident mein jo hua woh dobara dekh paate?',
  'Trace Schema v1.0.':
    'Trace Schema v1.0.',
  'What is the least evidence you need to debug (find and fix) a problem?':
    'Problem debug karne (dhoondh kar sudharne) ke liye kam se kam kitna evidence chahiye?',
  'Write down what you need to watch before problems happen in real use (production), not after.':
    'Likh lijiye ki asli use (production) mein problem hone se pehle aapko kya dekhna hai, baad mein nahi.',
  'Latency and throughput':
    'Latency aur throughput',
  'Measure the latency (waiting time) of each stage. Learn the difference between p50 (the typical wait) and p95 (the wait that only the slowest 5 in 100 are worse than).':
    'Har stage ki latency (intezaar ka time) measure kijiye. p50 (aam intezaar) aur p95 (woh intezaar jisse sirf sabse slow 100 mein 5 ka intezaar zyada hota hai) ka farq samajhiye.',
  'The average wait can hide the slow cases that some users really live through, like an average train time that hides the day the train came two hours late.':
    'Average intezaar un slow cases ko chhupa sakta hai jo kuch users sach mein jhelte hain, jaise train ka average time us din ko chhupa deta hai jab train do ghante late aayi.',
  'Measure the retrieval (fetching), reranking (putting the fetched pages in order), model and tool stages one by one.':
    'Retrieval (laana), reranking (laaye hue pages ko kram mein lagana), model aur tool stages ko ek-ek karke measure kijiye.',
  'Work out p50 and p95 for a small run, or for a larger sample (a bigger batch) if you have one.':
    'Ek chhote run ke liye p50 aur p95 nikaliye, ya agar bada sample (bada batch) ho toh uske liye.',
  'Add a dependency (a part you rely on) that is slow on purpose, and see how it changes p95.':
    'Ek dependency (woh part jis par aap tikte hain) jaan-boojhkar slow kijiye, aur dekhiye ki p95 par uska kya asar padta hai.',
  'Latency Budget plus a p50/p95 report.':
    'Latency Budget aur ek p50/p95 report.',
  'Which stage causes the slowest cases?':
    'Sabse slow cases ki wajah kaun sa stage hai?',
  'Service-level objectives (SLOs, promises about speed and reliability) should match what users feel, not just what the servers report.':
    'Service-level objectives (SLOs, speed aur bharose ke vaade) ka match users ke mehsoos karne se hona chahiye, sirf servers ki report se nahi.',
  'Token and cost telemetry':
    'Token and cost telemetry',
  'Track the input and output tokens (the bricks you send and the bricks you get back), and other costs that change, for each task.':
    'Har task ke liye input aur output tokens (jo eentein aap bhejte hain aur jo wapas aati hain), aur doosre badalne wale costs track kijiye.',
  'Cost is an architecture metric. The context (the model’s desk), the model, the retries and the routing all decide how much you spend.':
    'Cost ek architecture metric hai. Context (model ki mez), model, retries aur routing sab milkar tay karte hain ki aap kitna kharch karte hain.',
  'When you build the lab, work out the cost per request using the provider’s current pricing, like a price list at a shop.':
    'Lab banate waqt provider ki abhi ki pricing, yaani dukaan ki rate list, se har request ki cost nikaliye.',
  'Compare two strategies (two ways of doing it) for the model and the context.':
    'Model aur context ki do strategies (do tareeke) compare kijiye.',
  'Add retries (trying again) and a large context (a crowded desk), and watch the cost grow.':
    'Retries (dobara koshish) aur bada context (bhari hui mez) jodiye, aur dekhiye ki cost kaise badhti hai.',
  'Unit Economics Model v1.0.':
    'Unit Economics Model v1.0.',
  'What is the cost per successful task, not just the cost per call? Think of paying for a meal that you actually finished eating.':
    'Har successful task ki cost kya hai, sirf har call ki nahi? Socheye aap sirf us khaane ke paise gin rahe hain jo aapne sach mein khatam kiya.',
  'Talking to finance gets easier when every architecture choice has a cost you can measure, like a price tag.':
    'Finance se baat karna aasaan ho jaata hai jab har architecture choice par ek aisi cost ho jise aap naap sakein, jaise price tag.',
  'Drift and feedback':
    'Drift aur feedback',
  'Notice when quality changes after a change in the data, the prompt, the model or how users behave.':
    'Pehchaniye jab data, prompt, model ya users ke tareeke badalne ke baad quality badal jaaye.',
  'An AI system can get worse even when nobody has changed the code, like a bicycle wheel that goes out of line by itself.':
    'Ek AI system tab bhi kharab ho sakta hai jab kisi ne code nahi badla, jaise cycle ka pahiya apne aap tedha ho jaata hai.',
  'Make a baseline evaluation (a first score to compare with), and compare a later sample against it.':
    'Ek baseline evaluation (compare karne ke liye pehla score) banaiye, aur baad ke ek sample ko uske saath compare kijiye.',
  'Keep count of the type of complaint, the no-answer rate, escalations (cases passed to a person) and task success.':
    'Complaint ka type, no-answer rate, escalations (jo cases kisi insaan ko diye gaye) aur task success ginte rahiye.',
  'Change the document format, or add a new way users phrase things, and see what happens.':
    'Document ka format badal dijiye, ya users ke baat karne ka koi naya tareeka daaliye, aur dekhiye kya hota hai.',
  'Drift/Feedback Report.':
    'Drift/Feedback Report.',
  'Which signal tells you quality has changed, before the complaints pile up?':
    'Kaun sa signal aapko batata hai ki quality badli hai, complaints ke dher lagne se pehle?',
  'Signals from live use work together with the offline evaluation (the test before release) you did earlier.':
    'Live use ke signals us offline evaluation (release se pehle ka test) ke saath milkar kaam karte hain jo aapne pehle kiya tha.',
  'Versioning and rollback':
    'Versioning aur rollback',
  'Give version numbers to the prompts, models, indexes (the lookup lists), schemas (the forms with fixed boxes) and tool contracts (what each tool promises).':
    'Prompts, models, indexes (dhoondhne ki lists), schemas (fixed khaanon wale form) aur tool contracts (har tool ka vaada) ko version numbers dijiye.',
  'If you cannot roll back one part at a time, finding the fault turns into guesswork, like changing five things in a recipe at once.':
    'Agar aap ek-ek part ko rollback nahi kar sakte, toh galti dhoondhna andaaze ka khel ban jaata hai, jaise recipe mein ek saath paanch cheezein badal dena.',
  'Make a version ID for the prompt, the model, the index and the tool schema.':
    'Prompt, model, index aur tool schema ke liye version IDs banaiye.',
  'Run two versions side by side, like two shops next door.':
    'Do versions ko saath-saath chalaiye, jaise paas-paas ki do dukaanein.',
  'Pretend a bad prompt release happened (simulate it), and roll it back.':
    'Maan lijiye ek kharab prompt release hua (simulate kijiye), aur use rollback kijiye.',
  'Version Matrix plus Rollback Procedure.':
    'Version Matrix aur Rollback Procedure.',
  'Can you say exactly what changed?':
    'Kya aap bilkul bata sakte hain ki kya badla?',
  'Versioning is how you stay in control of delivery. It is not paperwork.':
    'Versioning se aap delivery par control rakhte hain. Yeh paperwork nahi hai.',
  'Production dashboard':
    'Production dashboard',
  'Turn the telemetry (the numbers the system sends out) into a six-panel view of how the system is running: quality, safety, latency, cost, traffic and failures.':
    'Telemetry (jo numbers system bhejta hai) ko system kaise chal raha hai, iske six-panel view mein badaliye: quality, safety, latency, cost, traffic aur failures.',
  'A dashboard should answer two questions: “is the system healthy?” and “where do I look next?” Think of a doctor’s chart.':
    'Dashboard ko do sawaalon ka jawaab dena chahiye: “kya system healthy hai?” aur “agla kahan dekhun?” Doctor ke chart ki tarah socheye.',
  'For each panel, decide the metric (the number), the source, the owner and the threshold (the line that raises an alarm).':
    'Har panel ke liye metric (number), source, owner aur threshold (woh line jahan alarm bajta hai) tay kijiye.',
  'Make a mock dashboard (a rough sample) or a spreadsheet.':
    'Ek mock dashboard (kaccha namuna) ya spreadsheet banaiye.',
  'Take away one signal at a time, and see which incident becomes harder to understand.':
    'Ek-ek signal hataiye, aur dekhiye ki kaun sa incident samajhna mushkil ho jaata hai.',
  'Six-Panel Observability Specification.':
    'Six-Panel Observability Specification.',
  'Which alerts should wake up a person, and which should only be watched?':
    'Kaun se alerts ko kisi insaan ko jagana chahiye, aur kaun se sirf dekhe jaane chahiye?',
  'A PM (product manager) is responsible for clarity in operations (the daily running), just as much as the platform team is.':
    'Operations (roz ke chalne) mein clarity ki zimmedaari PM (product manager) ki bhi utni hi hai jitni platform team ki.',
  'Cost is an architecture metric':
    'Cost ek architecture metric hai',
  'A trace shows where the time goes. The same is true of money, like a shop till slip. Every token, every search and every call to a tool adds to the bill. So cost is part of how you design the system. It is not only something finance checks at the end of the month.':
    'Trace se aap dekh sakte hain ki time kahan jaata hai. Paise ke saath bhi yahi sach hai, jaise dukaan ki raseed. Har token, har search aur har tool call bill mein jodta hai. Isliye cost system ko design karne ka hissa hai. Yeh sirf aisi cheez nahi jo finance mahine ke aakhir mein check karta hai.',
  'Work out the cost of one user task from start to finish: input tokens, output tokens, embeddings (addresses for meaning), retrieval, and tool and API calls (messages sent over the internet). Then you can compare two designs before building either.':
    'Ek user task ki cost shuru se aakhir tak nikaliye: input tokens, output tokens, embeddings (matlab ke pate), retrieval, aur tool aur API calls (internet par bheje gaye message). Phir aap do designs ko banane se pehle hi compare kar sakte hain.',
  'You will hear terms like canary release, shadow traffic, rollback and drift. They all come from one habit, and it is simple. Change one thing at a time. Let a few users see it first. Keep the old version ready. And keep watching after the release.':
    'Aap canary release, shadow traffic, rollback aur drift jaise terms sunenge. Yeh sab ek hi aadat se aate hain, aur woh saadi hai. Ek baar mein ek hi cheez badaliye. Pehle thode se users ko dikhaiye. Purana version ready rakhiye. Aur release ke baad bhi dekhte rahiye.',
  'Most incidents can be prevented in four ways. Change one thing at a time. Give version numbers to prompts, models, indexes and tool contracts. Make sure every part can be rolled back. And never let a prompt change skip evaluation. Teams break that last rule most often, because editing a prompt does not feel like a release.':
    'Zyadatar incidents chaar tareekon se roke ja sakte hain. Ek baar mein ek hi cheez badaliye. Prompts, models, indexes aur tool contracts ko version numbers dijiye. Pakka kijiye ki har part rollback ho sake. Aur prompt change ko kabhi evaluation skip mat karne dijiye. Teams yeh aakhri rule sabse zyada todti hain, kyunki prompt edit karna release jaisa nahi lagta.',
  'Here is a puzzle about drift. Take a moment to think.':
    'Drift par ek paheli hai. Thoda ruk kar sochiye.',
  'Your assistant got slower this week, and nobody released anything. Name three things that could have changed.':
    'Aapka assistant is hafte slow ho gaya, aur kisi ne kuch release nahi kiya. Teen cheezein bataiye jo badal sakti hain.',
  'The traffic mix, how many documents there are, and the provider’s own response time. None of these sit in your repository (your online folder of code), so they must show on your dashboard.':
    'Traffic ka mix, documents ki ginti, aur provider ka apna response time. Inmein se kuch bhi aapki repository (code ka online folder) mein nahi hai, isliye inhe aapke dashboard par dikhna chahiye.',
  'So a wrong answer should never leave you saying “we can’t tell”. A trace shows you the path of each request, like a parcel scan list. Cost is something you design and measure. And a version number on every part means any change can be rolled back.':
    'Toh galat jawaab ke baad aapko kabhi “humein nahi pata” nahi kehna padna chahiye. Trace har request ka raasta dikhata hai, jaise parcel ki scan list. Cost aisi cheez hai jise aap design aur measure karte hain. Aur har part par version number hone se koi bhi change rollback ho sakta hai.',
  'Next, in Chapter 31, you will look at the same system as an attacker would, like a thief walking round a house.':
    'Agle Chapter 31 mein aap usi system ko ek attacker ki nazar se dekhenge, jaise koi chor ghar ke chakkar laga raha ho.',
});
