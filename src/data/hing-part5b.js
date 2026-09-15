/* Hinglish: Part V chapters 21 (rest) and 22. */
Object.assign(window.HING = window.HING || {}, {

  'Three passing tests, one of which covers a failure.':
    'Teen test paas hote hue, jinme se ek failure ka case dekhta ho.',
  'One saved record produced by a run that failed.':
    'Ek save kiya hua record jo fail hone waale run se bana ho.',
  'An API call is a request and a reply':
    'API call matlab ek request aur ek jawaab',
  'You have been making them since chapter 1; this chapter looks at the plumbing around them.':
    'Aap chapter 1 se yeh kar rahe hain; yeh chapter unke aas-paas ki plumbing dekhta hai.',
  'Which is why a harness that records usage is worth building once.':
    'Isiliye ek harness jo usage likh le, ek baar banane layak hai.',
  'Think about ordering food on an app. You tap a button, and somewhere a message goes to a restaurant, comes back with a price, and your screen updates. None of that is mysterious once somebody shows you the messages going back and forth — it only feels mysterious while it is hidden.':
    'App par khaana order karne ka socho. Aap ek button dabate hain, kahin ek message restaurant tak jaata hai, daam ke saath wapas aata hai, aur aapki screen badal jaati hai. Isme kuch bhi rahasya nahi rehta jab koi aapko aate-jaate messages dikha de — rahasya sirf tab tak lagta hai jab tak woh chhipe hue hain.',
  'AI features are the same. You have spent twenty chapters looking at the model. This chapter looks at the ordinary plumbing around it, so that when an engineer shows you a system diagram you see parts you recognise instead of fog.':
    'AI features bilkul aise hi hain. Bees chapter aapne model ko dekhne mein lagaye. Yeh chapter uske aas-paas ki aam plumbing dekhta hai, taaki jab koi engineer aapko system ka diagram dikhaye to aapko dhundh ki jagah pehchaane hue hisse dikhein.',
  'Why this comes first':
    'Yeh pehle kyun aata hai',
  'Applied AI work expects hands-on contact with APIs, Python, cloud services, retrieval, evaluation and production systems. You cannot challenge an architecture if JSON, HTTP, environment variables, tests and logs still feel like someone else’s language. This is the floor, not the ceiling.':
    'Applied AI ka kaam aapse APIs, Python, cloud services, retrieval, evaluation aur production systems se seedha waasta rakhne ki ummeed karta hai. Aap kisi architecture par sawaal nahi utha sakte agar JSON, HTTP, environment variables, tests aur logs abhi bhi kisi aur ki bhasha lagte hon. Yeh zameen hai, chhat nahi.',
  'An AI system is a software system with a probabilistic component. Everything you already know about software going wrong still applies — and now there is one more thing that can go wrong, quietly, without raising an error.':
    'AI system ek software system hi hai, jisme ek hissa andaazon par chalta hai. Software ke bigadne ke baare mein aap jo jaante hain woh sab abhi bhi laagu hai — aur ab ek cheez aur hai jo chupke se bigad sakti hai, bina koi error uthaye.',
  'The second reflex is about what happens when the shape is not what you expected. An AI application is assembled out of contracts — this field will be here, it will be a number, the list will not be empty — and every one of those is an assumption that will eventually be wrong in production.':
    'Doosri aadat yeh hai ki jab cheez us shakal mein na aaye jaisi aapne socha thi tab kya hota hai. AI application contracts se bana hota hai — yeh field yahan hoga, yeh number hoga, yeh list khaali nahi hogi — aur inme se har ek woh maan-liya-hua sach hai jo production mein kabhi na kabhi galat nikalta hai.',
  'Production systems need to detect contract failures rather than silently continue. Most of the AI incidents you will actually meet look like this: nothing threw, and the answer was built on nothing.':
    'Production systems ko contract toot-ne ko pakadna chahiye, chupchaap aage nahi badhna chahiye. Aap asal mein jitne AI incidents dekhenge unme se zyadatar aise hi hote hain: koi error nahi aaya, aur jawaab khaali jagah par khada kar diya gaya.',
  'So what is “enough”? Not much, and it is a fixed list rather than an endless one. You have the floor when none of these makes you want to leave the room:':
    'To "kaafi" hai kya? Zyada nahi, aur yeh ek tay list hai, kabhi na khatam hone waali nahi. Aapke paas zameen hai jab inme se koi bhi cheez aapko kamre se bahar nahi bhagati:',
  'Writing a small function, and keeping a few labelled values together in one place.':
    'Ek chhota function likhna, aur kuch naam-wale values ek jagah rakh lena.',
  '<strong>Status codes</strong> — 200 worked, 4xx you asked wrong, 5xx their end broke.':
    '<strong>Status codes</strong> — 200 matlab ho gaya, 4xx matlab aapne galat maanga, 5xx matlab unki taraf gadbad hai.',
  '<strong>JSON</strong> — labels and values, the format almost every system talks in.':
    '<strong>JSON</strong> — naam aur values, woh format jisme lagbhag har system baat karta hai.',
  'Keeping a password or key out of your code, in a setting instead.':
    'Password ya key ko code se bahar rakhna, ek setting mein.',
  'Saving your work in Git so you can go back to yesterday’s version.':
    'Apna kaam Git mein save karna taaki kal waale version par wapas ja sakein.',
  'Reading an error message from the bottom up, where the real cause usually sits.':
    'Error message ko neeche se upar padhna, kyunki asli wajah aksar wahin baithi hoti hai.',
  'Writing a test that fails on purpose, so you know it is actually checking something.':
    'Aisa test likhna jo jaanbujhkar fail ho, taaki pata chale ki woh sach mein kuch jaanch raha hai.',
  'That is the list. Two more ideas — jobs that run in the background, and queues that hold work until something is free to do it — you only need as ideas, not as code.':
    'Bas itni si list hai. Do aur baatein — background mein chalne waale kaam, aur queues jo kaam ko tab tak rokti hain jab tak koi khaali na ho — yeh sirf samajhne ke liye chahiye, likhne ke liye nahi.',
  'Take the last AI feature you were shown a demo of. Write down, in plain words, what its request probably contained and what its response probably looked like. Where are you guessing?':
    'Pichhli baar jis AI feature ka demo aapko dikhaya gaya tha use lijiye. Saade shabdon mein likhiye ki uski request mein shayad kya gaya hoga aur jawaab kaisa dikha hoga. Kahan aap andaaza laga rahe hain?',
  'The places you had to guess are the questions to ask the team that built it. That list is the whole skill this chapter teaches.':
    'Jahan aapko andaaza lagana pada, wahi sawaal us team se poochhne hain jisne ise banaya. Wahi list is chapter ka poora hunar hai.',
  'Explain it upward: a model API call is a normal software dependency. The engineering risk lives in interfaces, failure handling, secrets, retries, observability and contracts — at least as much as it lives in the model.':
    'Upar tak samjhaiye: model API call ek aam software dependency hai. Engineering ka risk interfaces, failure sambhalne, secrets, retries, nazar rakhne aur contracts mein rehta hai — kam se kam utna hi jitna model mein.',
  'Contract':
    'Contract',
  'An assumption your code makes about the shape of data it receives — that a field exists, that it is a number, that a list is not empty. Every one of them is a thing that will eventually be wrong.':
    'Woh maan-liya-hua sach jo aapka code aane waale data ki shakal ke baare mein maan leta hai — ki yeh field hoga, ki yeh number hoga, ki list khaali nahi hogi. Inme se har ek kabhi na kabhi galat nikalta hai.',
  'Status code':
    'Status code',
  'The number a server sends back to say what happened: 200 worked, 4xx you got it wrong, 5xx the server did.':
    'Woh number jo server wapas bhejta hai yeh batane ko ki kya hua: 200 ho gaya, 4xx aapse galti, 5xx server se galti.',
  'Stack trace':
    'Stack trace',
  'The list of calls that were in progress when something failed, innermost first. It tells you where, not why.':
    'Un calls ki list jo fail hone ke waqt chal rahi thi, sabse andar waali pehle. Yeh batati hai kahan, kyun nahi.',
  'Experiment harness':
    'Experiment harness',
  'A small tool that records every run identically — request, response, latency, usage, error — so two runs can actually be compared.':
    'Ek chhota auzaar jo har run ko ek hi tarah likhta hai — request, response, latency, usage, error — taaki do run sach mein mile jaa sakein.',

  /* ---- chapter 22 ---- */
  'Pick two models available to you and write down, before testing, which one you expect to win on quality, on speed, and on cost.':
    'Do aise models chuniye jo aapke paas hain, aur test se pehle likh lijiye ki quality, speed aur cost — teeno mein kaun jeetega.',
  'Run a ten-case benchmark covering factual recall, reasoning, extraction, multilingual and refusal behaviour.':
    'Das case ka benchmark chalaiye jisme facts, sochne waale sawaal, cheezein nikaalna, doosri bhasha aur mana karna — sab shaamil ho.',
  'Change one variable at a time — model, sampling, prompt — and work out which change actually caused what.':
    'Ek baar mein ek hi cheez badliye — model, sampling, prompt — aur pata lagaiye ki kis badlaav se kya hua.',
  'A Model Selection Card: quality, latency, cost, and the fallback when your first choice is unavailable.':
    'Ek Model Selection Card: quality, latency, cost, aur backup jab pehli pasand na mile.',
  'Recommend a model from evidence, and defend it against someone who prefers a different one.':
    'Evidence par ek model suggest kijiye, aur use us aadmi ke saamne defend kijiye jise doosra pasand hai.',
  'Model literacy, and choosing one on evidence':
    'Model ki samajh, aur evidence par ek chunna',
  'Book chapter 9. What actually changes when you change the model — and how to recommend one from measurement rather than reputation.':
    'Kitaab ka chapter 9. Model badalne se asal mein kya badalta hai — aur naam ki jagah naap par ek model kaise suggest karein.',
  'Explain what changes when the model changes, beyond a benchmark score.':
    'Batana ki model badalne par kya badalta hai, benchmark ke number se aage.',
  'State when retrieval, prompting and fine-tuning are each the right answer.':
    'Batana ki retrieval, prompting aur fine-tuning — teeno mein se kaun kab sahi jawaab hai.',
  'Produce a model recommendation that survives the question "measured how?"':
    'Aisi model recommendation banana jo "naapa kaise?" waale sawaal ko jhel jaaye.',
  'A Model Selection Card':
    'Ek Model Selection Card',
  'One page a stakeholder can read and an engineer can act on, for a hypothetical government assistant. The card is the deliverable; the benchmark behind it is the evidence.':
    'Ek page jo stakeholder padh le aur engineer uspar kaam kar le, ek kalpanik sarkari assistant ke liye. Card deliverable hai; uske peechhe ka benchmark evidence hai.',
  'State the task and the quality bar in measurable terms.':
    'Kaam aur quality ka bar aise likhiye ki naapa jaa sake.',
  'State the data sensitivity, and what that rules out immediately.':
    'Data kitna sanvedansheel hai yeh likhiye, aur usse turant kya kat jaata hai.',
  'Set a latency SLO and a cost ceiling per task.':
    'Har kaam ke liye latency ka SLO aur cost ki upri seema tay kijiye.',
  'Shortlist two or three models and put your ten-case results beside each.':
    'Do-teen model chhaantiye aur har ek ke saath apne das case ke result likhiye.',
  'Name the fallback: what runs when the first choice is down, degraded, or repriced.':
    'Backup ka naam lijiye: jab pehli pasand band ho, kharaab chale, ya mehngi ho jaaye tab kya chalega.',
  'Name the evaluation dataset by which the choice will be re-checked in three months.':
    'Us evaluation dataset ka naam lijiye jisse teen maheene baad yeh chunaav dobara jaancha jaayega.',
  'Every claim on the card traces to a run in your harness.':
    'Card par har daawa aapke harness ke kisi run tak jaata ho.',
  'A reader can tell which constraint decided it.':
    'Padhne waala bata sake ki kis bandhan ne faisla kiya.',
  'The fallback is named and has been tried at least once.':
    'Backup ka naam likha ho aur kam se kam ek baar aazmaya gaya ho.',
  'Temperature is a variety dial':
    'Temperature ek variety ka dial hai',
  'You proved it at chapter 2; here it becomes one variable among several.':
    'Aapne chapter 2 mein yeh saabit kiya tha; yahan yeh kai cheezon mein se ek ban jaata hai.',
  'Ground truth comes before measurement':
    'Ground truth naapne se pehle aata hai',
  'No answer key, no benchmark.':
    'Answer key nahi, to benchmark nahi.',
  'An experiment harness that records runs':
    'Ek experiment harness jo runs likhta ho',
  'You built it last chapter and this is the first chapter that needs it.':
    'Aapne ise pichhle chapter mein banaya tha, aur yeh pehla chapter hai jise iski zaroorat hai.',
  'Nobody buys a car because it won a magazine award. You want to know whether it fits your family, survives your roads, and what it costs to run for a year. You would test-drive it.':
    'Koi gaadi isliye nahi khareedta ki use magazine ka award mila hai. Aap yeh jaanna chahte hain ki usme aapka parivaar aata hai ya nahi, aapki sadkon par tikegi ya nahi, aur saal bhar chalane mein kitna kharcha aayega. Aap test drive lenge.',
  'Models are the same, and almost nobody test-drives them. A leaderboard tells you how a model did on somebody else’s task. This chapter is about getting your own numbers, on your own questions, in one afternoon — which turns out to be enough.':
    'Models bhi aise hi hain, aur lagbhag koi unki test drive nahi leta. Leaderboard yeh batata hai ki model ne kisi aur ke kaam par kaisa kiya. Yeh chapter aapke apne sawaalon par, aapke apne numbers ek dopahar mein nikaalne ke baare mein hai — aur woh kaafi nikalta hai.',
  'Models differ along several axes at once: capability, latency, context size, tool-use behaviour and cost. A model that wins on one can lose badly on another, and which axis matters is a property of your use case, not of the model.':
    'Models ek saath kai cheezon mein alag hote hain: kaabiliyat, latency, context ka size, tools chalane ka tareeka, aur cost. Jo model ek mein jeette hai woh doosre mein buri tarah haar sakta hai — aur kaun si cheez maayne rakhti hai yeh aapke kaam ki baat hai, model ki nahi.',
  'Then change exactly one thing. This is the discipline that separates a benchmark from an anecdote: if you change the model and the prompt together and the result improves, you have learned nothing about either.':
    'Ab theek ek cheez badliye. Yahi anushasan benchmark ko kisse se alag karta hai: agar aap model aur prompt dono ek saath badal dein aur result behtar ho jaaye, to aapne dono mein se kisi ke baare mein kuch nahi seekha.',
  'The literacy you need is real but bounded: supervised versus unsupervised learning, classification versus regression, train/validation/test, overfitting, precision and recall, embeddings, transformers at the level of an idea, attention as “which parts of the context matter right now”, inference versus training, and pretraining versus fine-tuning versus retrieval. That is the list. You do not need more to hold your own in an architecture conversation.':
    'Jitni samajh chahiye woh asli hai par seemit hai: supervised aur unsupervised learning, classification aur regression, train/validation/test, overfitting, precision aur recall, embeddings, transformers sirf ek idea ke taur par, attention matlab "abhi context ka kaun sa hissa maayne rakhta hai", inference aur training, aur pretraining, fine-tuning aur retrieval ka farak. Bas itni list. Architecture ki baat-cheet mein tikne ke liye isse zyada nahi chahiye.',
  'The question that comes up in every one of those conversations is whether to fine-tune. There is a usable rule, as long as you hold it as a hypothesis to be tested rather than a law.':
    'Aisi har baat-cheet mein ek sawaal aata hai: fine-tune karein ya nahi. Ek kaam ka niyam hai, bashartey aap use kanoon ki jagah ek aisi baat maanein jise test karna hai.',
  '<strong>Retrieval</strong> when the problem is changing knowledge or private data.':
    '<strong>Retrieval</strong> jab masla badalti hui jaankari ya niji data ka ho.',
  '<strong>Prompting</strong> when the behaviour can be steered with instructions and examples.':
    '<strong>Prompting</strong> jab behaviour ko nirdeshon aur udaharan se mod sakte hon.',
  '<strong>Fine-tuning</strong> when the behaviour, style or task pattern is stable, repeated, and worth changing weights for.':
    '<strong>Fine-tuning</strong> jab behaviour, style ya kaam ka pattern sthir ho, baar-baar aaye, aur model ke weights badalne layak ho.',
  'Decision':
    'Faisla',
  'Ask first':
    'Pehle yeh poochhiye',
  'The common mistake':
    'Aam galti',
  'Model choice':
    'Model ka chunaav',
  'Which constraint binds — quality, latency or cost?':
    'Kaun sa bandhan asli hai — quality, latency ya cost?',
  'Picking the “smartest” model by reputation':
    'Naam dekhkar "sabse tez" model chun lena',
  'Fine-tune':
    'Fine-tune',
  'Is the gap knowledge, or behaviour?':
    'Kami jaankari ki hai, ya behaviour ki?',
  'Fine-tuning to inject documents that change monthly':
    'Har maheene badalne waale documents daalne ke liye fine-tune karna',
  'Reasoning level':
    'Sochne ka level',
  'Does more reasoning move the acceptance metric?':
    'Zyada sochne se acceptance ka number hilta hai kya?',
  'Paying for more reasoning without measuring it':
    'Bina naape zyada sochne ke paise dena',
  'Context size':
    'Context ka size',
  'Do we genuinely need the larger window?':
    'Kya sach mein bade window ki zaroorat hai?',
  'Treating a big window as a substitute for retrieval':
    'Bade window ko retrieval ka vikalp maan lena',
  'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.':
    'Woh ek line likhiye jo aap tab kahenge jab koi stakeholder us model par jaane ko kahe jo abhi leaderboard mein pehle number par aaya hai.',
  'The sentence that works is some version of: on which of our cases, and at what latency and cost? A leaderboard is a result on someone else’s test set.':
    'Jo line kaam karti hai woh kuch aisi hoti hai: hamare kaun se cases par, aur kitni latency aur cost par? Leaderboard kisi aur ke test set ka result hai.',
  'Inference':
    'Inference',
  'Running a trained model to get an answer. Distinct from training, which is the process that produced the model in the first place — and it is inference you pay for, per request, forever.':
    'Jawaab paane ke liye ek train kiye hue model ko chalana. Yeh training se alag hai, jo woh kaam hai jisne model banaya tha — aur paisa aap inference ka dete hain, har request par, hamesha.',
  'Sampling':
    'Sampling',
  'How the next word-piece gets picked from the several the model thinks plausible. Temperature is one control over it.':
    'Agla shabd-tukda un kai mein se kaise chuna jaata hai jinhe model mumkin maanta hai. Temperature uska ek control hai.',
  'Benchmark':
    'Benchmark'

});
