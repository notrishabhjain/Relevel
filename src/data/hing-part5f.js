/* Hinglish: Part V chapters 29 and 30. */
Object.assign(window.HING = window.HING || {}, {

  'Write twenty tests before you improve anything: normal, paraphrase, ambiguous, no-answer, multilingual, adversarial and tool-use cases.':
    'Kuch bhi sudhaarne se pehle bees test likhiye: aam, ghuma-phira kar poochha gaya, dhundhla, bina-jawaab waala, doosri bhasha, hamla karne waala, aur tool chalane waala.',
  'Automate retrieval, schema, tool and end-to-end checks. Reach for a model judge only where a deterministic check cannot do the job.':
    'Retrieval, schema, tool aur poore-safar ki jaanchein apne aap chalaiye. Model waale judge ki taraf tabhi jaaiye jab pakki jaanch kaam na kar sakti ho.',
  'Change the prompt, the model and the index in turn and run the regression. Compare judge labels against human labels on a sample.':
    'Baari-baari prompt, model aur index badliye aur purane test dobara chalaiye. Kuch namoonon par judge ke aur insaan ke faisle milaiye.',
  'An evaluation harness and a release gate.':
    'Ek evaluation harness aur ek release ka gate.',
  'No change ships because a demo looked better. It ships because it passed the gate.':
    'Koi badlaav isliye nahi jaata ki demo achcha laga. Woh isliye jaata hai ki gate paar kiya.',
  'Evaluation engineering':
    'Evaluation engineering',
  'Book chapter 16. Chapter 6 taught you to measure. This one turns measuring into a release discipline — the thing that decides whether a change ships.':
    'Kitaab ka chapter 16. Chapter 6 ne naapna sikhaya tha. Yeh naapne ko release ka anushasan bana deta hai — woh cheez jo tay karti hai ki badlaav jaayega ya nahi.',
  'Build a versioned test set that survives a prompt, model or index change.':
    'Aisa version waala test set banana jo prompt, model ya index badalne par bhi kaam aaye.',
  'Score at three levels so a good final number cannot hide a broken subsystem.':
    'Teen level par number dena, taaki achcha aakhri number kisi toote hisse ko chhipa na sake.',
  'Say where a model judge is acceptable and where it is not.':
    'Batana ki model waala judge kahan chalega aur kahan nahi.',
  'A release gate':
    'Ek release ka gate',
  'The gate is the deliverable that makes every other measurement in this track matter. Without it, evaluation is a report nobody is obliged to act on.':
    'Gate wahi cheez hai jo is track ki baaki har naap ko maayne deti hai. Iske bina evaluation ek report hai jispar kaam karne ki kisi par zimmedari nahi.',
  'Set the quality threshold, naming the metric, the test set and the number.':
    'Quality ka threshold tay kijiye, aur usme number ka naam, test set aur aankda likhiye.',
  'Set the safety threshold, including attack success rate.':
    'Safety ka threshold tay kijiye, jisme hamle ke kaamyaab hone ki dar bhi ho.',
  'Set the latency SLO and the cost ceiling per task.':
    'Latency ka SLO aur har kaam ki cost ki upri seema tay kijiye.',
  'Set the regression tolerance: how much may a previously-passing case degrade?':
    'Yeh tay kijiye ki purane paas hote case kitna gir sakte hain.',
  'Define the rollback trigger and who is allowed to pull it.':
    'Wapas lene ki shart tay kijiye aur yeh ki use kaun kheench sakta hai.',
  'Run the gate against your current system and record whether it passes today.':
    'Gate ko apne aaj ke system par chalaiye aur likhiye ki aaj paas hota hai ya nahi.',
  'Every threshold is a number against a named test set.':
    'Har threshold ek number ho, kisi naam waale test set ke against.',
  'The gate has been run at least once and produced a verdict.':
    'Gate kam se kam ek baar chala ho aur faisla diya ho.',
  'The rollback trigger names a person or a role.':
    'Wapas lene ki shart mein kisi vyakti ya pad ka naam ho.',
  'Ground truth, recall and precision':
    'Ground truth, recall aur precision',
  'Chapter 6 built the instrument this chapter industrialises.':
    'Chapter 6 ne woh auzaar banaya tha jise yeh chapter poore paimane par le jaata hai.',
  'A model can grade output at scale':
    'Model bade paimane par number de sakta hai',
  'Chapter 14 introduced the judge and its blind spots.':
    'Chapter 14 ne judge aur uski andhi jagahein dikhayi thi.',
  'Reading failures by hand is where improvement comes from':
    'Sudhaar wahin se aata hai jahan aap failure haath se padhte hain',
  'Chapter 14.5. Automation does not replace it.':
    'Chapter 14.5. Machine ise badal nahi sakti.',
  'A school does not decide whether a student has learned by watching them answer one question well. There is a paper, the same paper for everyone, marked the same way, with a pass mark agreed before anyone sat down.':
    'School yeh nahi tay karta ki bachche ne seekha ya nahi sirf ek sawaal ka achcha jawaab dekh kar. Ek paper hota hai, sabke liye wahi paper, ek hi tarah se jaancha gaya, aur paas ke number pehle se tay — kisi ke baithne se pehle hi.',
  'Chapter 6 gave you one answer key. This chapter turns that into the thing that decides whether a change ships: a fixed set of questions, a consistent way of marking, and a pass mark set in advance — so that “the demo looked better” stops being an argument anyone can win.':
    'Chapter 6 ne aapko ek answer key di thi. Yeh chapter use woh cheez bana deta hai jo tay karti hai ki badlaav jaayega ya nahi: ek tay set of sawaal, jaanchne ka ek hi tareeka, aur pehle se tay paas ka number — taaki "demo behtar lag raha tha" ek aisi dalil ban jaaye jo koi jeet hi na sake.',
  'Every AI feature needs a test dataset, and it needs to be versioned. An evaluation you cannot re-run after a change is an anecdote with a number attached.':
    'Har AI feature ko ek test dataset chahiye, aur uska version rakha jaana chahiye. Aisa evaluation jo badlaav ke baad dobara na chalaya jaa sake, woh ek kissa hai jispar number chipka hua hai.',
  'You need several levels of evaluation at once. A good end-to-end score can sit on top of a badly broken retriever, because a fluent model can cover for missing evidence often enough to look fine in a demo.':
    'Aapko ek saath kai level par evaluation chahiye. Ek achcha aakhri number ek buri tarah toote retriever ke upar baith sakta hai, kyunki fluent model gayab saboot ko itni baar dhak leta hai ki demo mein sab theek lagta hai.',
  'Layer':
    'Parat',
  'Example metric':
    'Udaharan ke taur par number',
  'The release question it answers':
    'Yeh release ka kaun sa sawaal hal karta hai',
  'Retrieval':
    'Retrieval',
  'Recall@k, Precision@k':
    'Recall@k, Precision@k',
  'Did we fetch the right evidence?':
    'Kya humne sahi saboot uthaya?',
  'Generation':
    'Jawaab banana',
  'Groundedness, task success':
    'Saboot par tika hona, kaam poora hona',
  'Did the answer use the evidence correctly?':
    'Kya jawaab ne saboot ka sahi istemaal kiya?',
  'Tool use':
    'Tool ka istemaal',
  'Tool-selection accuracy':
    'Sahi tool chunne ki dar',
  'Did it call the right capability?':
    'Kya usne sahi cheez chalayi?',
  'Operations':
    'Chalane ka kaam',
  'p95 latency, cost per task':
    'p95 latency, har kaam ki cost',
  'Can we afford to run it?':
    'Kya hum ise chala sakne layak hain?',
  'Safety':
    'Suraksha',
  'Attack success rate':
    'Hamle ke kaamyaab hone ki dar',
  'Can adversarial input break the controls?':
    'Kya dushmani waala input controls tod sakta hai?',
  'There are a lot of names in this area, and they are all answers to three questions: <strong>what do we test on</strong> (a fixed set you keep, real cases where you can get them), <strong>who marks it</strong> (an exact check where one is possible, a person where it matters, a model where neither scales), and <strong>what score lets it ship</strong>. Any evaluation tool you are shown is selling one of those three.':
    'Is ilaake mein bahut naam hain, aur sab teen sawaalon ke jawaab hain: <strong>hum kis par test karte hain</strong> (ek tay set jo aap rakhte hain, aur jahan mil jaayein wahan asli cases), <strong>jaanchta kaun hai</strong> (jahan mumkin ho wahan pakki jaanch, jahan maayne rakhe wahan insaan, aur jahan dono na chal sakein wahan model), aur <strong>kitna number aane par jaayega</strong>. Jo bhi evaluation tool aapko dikhaya jaaye woh inhi teen mein se ek bech raha hai.',
  'Write the sentence that stops a release. Not a policy — the actual sentence, with numbers in it, that you would say in the room.':
    'Woh line likhiye jo ek release rok de. Koi policy nahi — asli line, jisme numbers hon, jo aap kamre mein kahenge.',
  'If your sentence contains the word "seems", it will not stop anything. Thresholds stop releases; impressions do not.':
    'Agar aapki line mein "lagta hai" aata hai to woh kuch nahi rokegi. Release thresholds rokte hain, andaaze nahi.',
  'Golden set':
    'Golden set',
  'The curated, versioned cases every change is measured against.':
    'Chhaante hue, version waale cases jinke against har badlaav naapa jaata hai.',
  'LLM-as-judge':
    'Model ko judge banana',
  'Using a model to score output. A scorer, not an oracle — its disagreement with human labels is a number you should know.':
    'Jawaab ko number dene ke liye model ka istemaal. Yeh number dene waala hai, bhagwaan nahi — insaan se yeh kitna asehmat hota hai, woh number aapko pata hona chahiye.',
  'Regression test':
    'Regression test',
  'A case that passed before and must still pass now.':
    'Aisa case jo pehle paas hota tha aur ab bhi paas hona chahiye.',
  'Release gate':
    'Release ka gate',
  'The thresholds a change has to clear before it ships, whatever the demo looked like.':
    'Woh thresholds jo badlaav ko jaane se pehle paar karne hain, demo chaahe jaisa bhi laga ho.',

  /* ---- chapter 30 ---- */
  'Trace one request by hand and time every stage with a stopwatch.':
    'Ek request ko haath se traciye aur har padav ka samay stopwatch se naapiye.',
  'Record request id, model and prompt version, retrieval ids, tool calls, latency, tokens, status and evaluation result.':
    'Likhiye: request id, model aur prompt ka version, nikaale gaye chunks ki ids, tool calls, latency, tokens, status aur evaluation ka nateeja.',
  'Deliberately create a slow request, an expensive one and a low-quality one, then diagnose each from its trace alone.':
    'Jaanbujhkar ek dheemi request banaiye, ek mehngi, aur ek kharaab quality waali — phir sirf trace dekhkar teeno ki wajah pata lagaiye.',
  'A six-panel observability specification.':
    'Chhe panel waala observability ka khaka.',
  'Say which signals trigger an investigation, which trigger a rollback, and which are noise.':
    'Batayiye ki kaun se ishaare jaanch shuru karwate hain, kaun se wapas lene ki, aur kaun se sirf shor hain.',
  'Observability and LLMOps':
    'Observability aur LLMOps',
  'Book chapter 17. Operate what you built. When an answer is wrong, slow or expensive, a production system has to let you find out why without guessing.':
    'Kitaab ka chapter 17. Jo banaya hai use chalaiye. Jab jawaab galat, dheema ya mehnga ho, to production system ko aapko bina andaaze ke wajah dhoondhne dena chahiye.',
  'Design a trace record that can answer "why was this answer wrong?" after the fact.':
    'Aisa trace record banana jo baad mein "yeh jawaab galat kyun tha?" ka jawaab de sake.',
  'Treat cost as an architecture metric rather than a finance report.':
    'Cost ko finance ki report nahi, architecture ka number maanna.',
  'Name what must be versioned so a change can be rolled back.':
    'Batana ki kis-kis cheez ka version rakhna zaroori hai taaki badlaav wapas liya jaa sake.',
  'A six-panel production dashboard, specified':
    'Chhe panel ka production dashboard, poora likha hua',
  'Quality, safety, latency, cost, traffic and failures. The discipline is naming the source for every panel — a panel with no source is a wish.':
    'Quality, suraksha, latency, cost, traffic aur failures. Anushasan yeh hai ki har panel ka source likha jaaye — bina source ka panel ek khwaahish hai.',
  'Quality: which metric, computed from what, how often.':
    'Quality: kaun sa number, kis cheez se nikala, kitni baar.',
  'Safety: attack success rate and refusal behaviour, from which test set.':
    'Suraksha: hamla kitni baar chala aur mana karne ka bartav, kis test set se.',
  'Latency: p50 and p95, broken down by stage.':
    'Latency: p50 aur p95, har padav ke hisaab se toda hua.',
  'Cost: per task and per day, with the components visible.':
    'Cost: har kaam ki aur har din ki, jisme hisse dikhte hon.',
  'Traffic: volume and mix, so you can see the input change.':
    'Traffic: kitna aur kis tarah ka, taaki input badalta dikhe.',
  'Failures: error classes with counts, not one error rate.':
    'Failures: error ki shreniyaan ginti ke saath, ek hi error rate nahi.',
  'For each panel, write the threshold that triggers investigation and the one that triggers rollback.':
    'Har panel ke liye woh threshold likhiye jispar jaanch shuru hogi, aur woh jispar wapas lena hoga.',
  'Every panel names its data source.':
    'Har panel apne data ka source bataye.',
  'Latency is broken down by stage, not reported as one number.':
    'Latency har padav ke hisaab se toodi ho, ek number mein nahi.',
  'Each panel has an investigate threshold and a rollback threshold.':
    'Har panel ke do threshold hon: jaanch ka aur wapas lene ka.',
  'Latency is something the user experiences':
    'Latency woh cheez hai jo user mehsoos karta hai',
  'Chapter 11.5. A trace is how you find where it went.':
    'Chapter 11.5. Trace se aap pata lagate hain ki samay gaya kahan.',
  'Cost is measurable per request':
    'Cost har request ki naapi jaa sakti hai',
  'Chapter 15 built the arithmetic this chapter instruments.':
    'Chapter 15 ne woh ganit banaya tha jise yeh chapter maapak-yantra lagakar naapta hai.',
  'A release gate needs evidence':
    'Release ke gate ko saboot chahiye',
  'Chapter 29. Traces are where that evidence comes from in production.':
    'Chapter 29. Production mein woh saboot traces se hi aata hai.',
  'When a parcel goes missing, the courier can tell you where it was last scanned. Not because anyone expected that parcel to go missing — because they scan every parcel, everywhere, all the time. Without that, every lost parcel is a shrug.':
    'Koi parcel gum ho jaaye to courier bata deta hai ki woh aakhri baar kahan scan hua tha. Isliye nahi ki kisi ko us parcel ke gumne ki ummeed thi — balki isliye ki woh har parcel ko, har jagah, hamesha scan karte hain. Yeh na ho to har gum parcel par bas kandhe uchak diye jaate hain.',
  'Your system will give a wrong answer one day, and somebody will ask why. Everything in this chapter exists so the answer is not “we cannot tell”.':
    'Aapka system ek din galat jawaab dega, aur koi poochhega kyun. Is chapter mein jo bhi hai woh isliye hai ki us waqt jawaab "pata nahi chal sakta" na ho.',
  'A trace is a map of one request through the system. If you can only see what went in and what came out, every diagnosis is speculation.':
    'Trace ek request ka poore system se hokar guzarne ka naksha hai. Agar aapko sirf yeh dikhta hai ki andar kya gaya aur bahar kya aaya, to har nateeja bas andaaza hai.',
  'Cost is an architecture metric, not a monthly surprise. Model one user task end to end — input tokens, output tokens, embedding, retrieval, tool and API calls — and you can compare two designs before building either.':
    'Cost architecture ka number hai, har maheene milne waala jhatka nahi. Ek user ke ek kaam ka poora hisaab lagaiye — input tokens, output tokens, embedding, retrieval, tool aur API calls — aur aap do design ko banane se pehle hi mila sakte hain.',
  'The names in this area — canary release, shadow traffic, rollback, drift — all come from the same instinct: change one thing at a time, let a few people meet it first, keep the old version ready, and keep watching after you ship. That instinct is the chapter. The names are in the list at the end.':
    'Is ilaake ke naam — canary release, shadow traffic, rollback, drift — sab ek hi samajh se nikalte hain: ek baar mein ek cheez badlo, pehle thode logon ko dikhao, purana version taiyaar rakho, aur bhejne ke baad bhi dekhte raho. Wahi samajh yeh chapter hai. Naam aakhir waali list mein hain.',
  'The operational pattern that prevents most incidents: change one variable at a time; version prompts, models, indexes and tool contracts; keep every artifact rollbackable; and never let a prompt update bypass evaluation. That last one is the rule people break first, because a prompt edit does not feel like a deploy.':
    'Zyadatar hadse rokne waala tareeka: ek baar mein ek cheez badlein; prompts, models, index aur tool contracts ke version rakhein; har cheez ko wapas liya jaa sakne layak rakhein; aur prompt ke badlaav ko kabhi evaluation se bachkar nikalne na dein. Aakhri niyam hi sabse pehle tuta hai, kyunki prompt badalna deploy jaisa lagta hi nahi.',
  'Your assistant got slower this week and nobody deployed anything. Name three things that could have changed.':
    'Is hafte aapka assistant dheema ho gaya aur kisi ne kuch deploy nahi kiya. Teen cheezein bataiye jo badal sakti thi.',
  'Traffic mix, document volume, and the provider’s own latency. None of them are in your repository, which is why they have to be in your dashboard.':
    'Kis tarah ka traffic aa raha hai, kitne documents hain, aur khud provider ki latency. Inme se koi bhi aapki repository mein nahi hai — isiliye yeh dashboard mein hone chahiye.',
  'Trace':
    'Trace',
  'The record of one request’s journey through the system: what was retrieved, which prompt version ran, what each stage cost in time and tokens.':
    'Ek request ke poore safar ka record: kya nikala gaya, kaun sa prompt version chala, aur har padav mein kitna samay aur kitne tokens lage.',
  'Telemetry':
    'Telemetry',
  'The measurements a running system emits about itself — timings, counts, errors, usage — gathered so somebody can see what it is doing without reading the code.':
    'Chalta hua system apne baare mein jo naap bhejta hai — samay, ginti, errors, usage — taaki koi bina code padhe dekh sake ki woh kya kar raha hai.'

});
