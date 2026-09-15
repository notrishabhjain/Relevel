/* Hinglish: Part V chapters 33 and the start of 34. */
Object.assign(window.HING = window.HING || {}, {

  'The AI evidence that settles it':
    'Woh AI saboot jo faisla kar de',
  'Will it create enough value?':
    'Kya isse kaafi faayda hoga?',
  'Capability, evaluation and total cost of ownership':
    'Kshamta, evaluation aur poora kharcha',
  'Ship or hold':
    'Bhejein ya rokein',
  'Is failure cheap enough?':
    'Kya galat hone ki keemat kaafi kam hai?',
  'Quality, safety and incident readiness':
    'Quality, suraksha aur hadse ke liye taiyaari',
  'Model A or B':
    'Model A ya B',
  'Which wins for this task?':
    'Is kaam ke liye kaun jeetta hai?',
  'A task-specific benchmark':
    'Isi kaam ka benchmark',
  'Human in the loop':
    'Beech mein insaan',
  'Where is autonomy unsafe?':
    'Khud-mukhtari kahan asurakshit hai?',
  'Error cost and reversibility':
    'Galti ki keemat aur use palat paana',
  'Write the one-line rollback trigger for a feature you would like to ship. It has to be specific enough that someone could act on it at 2am without calling you.':
    'Jo feature aap bhejna chahte hain uske liye ek line ki wapas-lene ki shart likhiye. Woh itni saaf honi chahiye ki koi raat do baje bina aapko phone kiye uspar amal kar sake.',
  'If it needs your judgement to interpret, it is not a trigger. It is a hope.':
    'Agar use samajhne ke liye aapki soch chahiye, to woh shart nahi hai. Woh ek ummeed hai.',
  'AI acceptance criterion':
    'AI ki acceptance criteria',
  'A metric, a named test set and a stated tolerance — because “always correct” is not something a probabilistic system can be held to.':
    'Ek number, ek naam waala test set aur likhi hui chhoot — kyunki "hamesha sahi" aisi cheez nahi hai jiske liye andaazon par chalne waale system ko pakda jaa sake.',
  'Product metric':
    'Product ka number',
  'What the user achieved. Kept separate from system quality metrics and from operating cost, because mixing them makes a dashboard unable to answer anything.':
    'User ne kya haasil kiya. Ise system ki quality ke numbers aur chalane ke kharche se alag rakha jaata hai, kyunki milane par dashboard kisi bhi sawaal ka jawaab nahi de paata.',
  'Rollback trigger':
    'Wapas lene ki shart',
  'The specific, observable condition that causes a change to be withdrawn, written so someone can act on it without you.':
    'Woh saaf aur dikhne waali shart jispar badlaav wapas le liya jaata hai, aise likhi ki koi aapke bina uspar amal kar sake.',
  'Non-goal':
    'Jo nahi karna hai',
  'Something you have deliberately decided not to do, written down so it cannot be assumed back in later.':
    'Woh cheez jo aapne soch-samajh kar na karne ka faisla kiya, likh li gayi taaki baad mein koi use chupke se wapas na maan le.',

  /* ---- chapter 33 ---- */
  'Write the production delta for your prototype from memory, before looking anything up.':
    'Apne prototype ke liye production ki kami yaad se likhiye, kuch bhi dekhne se pehle.',
  'Add architecture decisions, environments, CI/CD, responsibilities, SLOs, security, rollback and vendor exit thinking.':
    'Architecture ke faisle, alag-alag maahaul, CI/CD, zimmedariyan, SLO, suraksha, wapas lena aur vendor chhodne ki soch joriye.',
  'Model three shocks — a provider outage, ten times the traffic, and a doubling of token price.':
    'Teen jhatke sochiye — provider band ho jaaye, traffic das guna ho jaaye, aur token ka daam dugna ho jaaye.',
  'A technical decision pack: architecture, alternatives, evaluation, security, cost and rollout.':
    'Ek technical decision pack: architecture, doosre vikalp, evaluation, suraksha, cost aur rollout.',
  'Defend build-versus-buy and your provider choice with weighted criteria rather than preference.':
    'Khud banayein ya khareedein, aur provider ka chunaav — dono ko pasand ki jagah tole hue maapdandon se defend kijiye.',
  'Architecture, delivery and vendor strategy':
    'Architecture, delivery aur vendor ki rannneeti',
  'Book chapter 20. From prototype to production — and defending the system, the provider and the cost outside the notebook.':
    'Kitaab ka chapter 20. Prototype se production tak — aur notebook ke bahar system, provider aur kharche ko defend karna.',
  'List what a prototype is missing before it can be production.':
    'Batana ki prototype ko production banne se pehle kya-kya chahiye.',
  'Treat latency as a budget spent across a chain of stages.':
    'Latency ko ek budget maanna jo kai padavon mein bant kar kharch hota hai.',
  'Score providers on more axes than price and quality.':
    'Providers ko daam aur quality ke alawa aur bhi cheezon par number dena.',
  'A ten-slide technical decision pack':
    'Das slide ka technical decision pack',
  'Problem, baseline, proposed architecture, alternatives, evaluation, security, cost, rollout, risks, decision. Built from memory first, then checked — because the parts you cannot produce from memory are the parts you do not yet understand.':
    'Samasya, abhi ka tareeka, prastavit architecture, doosre vikalp, evaluation, suraksha, cost, rollout, khatre, faisla. Pehle yaad se banaiye, phir jaanchiye — kyunki jo hisse aap yaad se nahi bana paate, wahi hisse aap abhi samajh nahi paaye hain.',
  'State the problem and the baseline it must beat.':
    'Samasya likhiye aur woh tareeka jise ise haraana hai.',
  'Draw the proposed architecture on one slide.':
    'Prastavit architecture ek slide par banaiye.',
  'Show two alternatives you rejected and why.':
    'Do aise vikalp dikhaiye jinhe aapne chhoda, aur kyun.',
  'Put the evaluation results in, with the test set named.':
    'Evaluation ke nateeje daaliye, test set ke naam ke saath.',
  'Summarise the security position and the residual risks.':
    'Suraksha ki sthiti aur bache hue khatre saaransh mein likhiye.',
  'Give cost per task and cost at expected volume.':
    'Har kaam ki cost aur ummeed ke traffic par kul cost likhiye.',
  'Give the rollout plan and the rollback trigger.':
    'Rollout ka plan aur wapas lene ki shart likhiye.',
  'Score three providers across nine criteria, weighted.':
    'Teen providers ko nau maapdandon par tole hue number dijiye.',
  'End with the decision and who owns it.':
    'Aakhir mein faisla likhiye aur uska zimmedaar kaun hai.',
  'The alternatives are real — each had a reason to be considered.':
    'Vikalp asli hon — har ek ke paas socha jaane ki ek wajah thi.',
  'The provider scorecard includes exit cost.':
    'Provider ke scorecard mein chhodne ka kharcha bhi ho.',
  'Someone else could present the pack from the slides alone.':
    'Koi doosra sirf slides dekhkar yeh pack pesh kar sake.',
  'Build or buy is a decision with criteria':
    'Khud banayein ya khareedein — yeh maapdandon waala faisla hai',
  'Chapter 18.5 framed it; here it gets weighted.':
    'Chapter 18.5 ne ise rakha tha; yahan ise tola jaata hai.',
  'Cost per task is computable':
    'Har kaam ki cost nikaali jaa sakti hai',
  'Chapter 30 instrumented it.':
    'Chapter 30 ne uspar maapak lagaye the.',
  'A release gate decides what ships':
    'Release ka gate tay karta hai ki kya jaayega',
  'Chapter 29.':
    'Chapter 29.',
  'A dish you cook well for two people is not a menu item. The recipe survives; almost nothing else does — you now need consistent supply, a price that works, someone else able to cook it, and a plan for the night four hundred people order it.':
    'Jo cheez aap do logon ke liye achchi banate hain woh menu ka item nahi hai. Recipe bach jaati hai; uske alawa lagbhag kuch nahi — ab aapko har roz ek jaisa saamaan chahiye, chalne waala daam, koi aur jo ise bana sake, aur us raat ke liye yojana jab chaar sau log order kar dein.',
  'Everything you have built so far runs because you are the only user and you forgive it. Production takes away both of those at once. This chapter is the list of what that actually costs.':
    'Aapne ab tak jo banaya hai woh isliye chalta hai ki user sirf aap hain aur aap use maaf kar dete hain. Production yeh dono ek saath chheen leta hai. Yeh chapter uski asli keemat ki list hai.',
  'Latency is a budget spent across the whole chain. Retrieval, reranking, tool calls, model reasoning and final generation each take a share, and the largest contributor is rarely the one people optimise first.':
    'Latency ek budget hai jo poori zanjeer mein bant kar kharch hota hai. Retrieval, reranking, tool calls, model ka sochna aur aakhri jawaab — sab apna hissa lete hain, aur jo sabse zyada leta hai woh aksar woh nahi hota jise log pehle theek karne baithte hain.',
  'Typical responsibility':
    'Aam zimmedari',
  'The question to ask about it':
    'Ispar poochhne waala sawaal',
  'Client and UI':
    'Client aur screen',
  'User interaction':
    'User ke saath len-den',
  'What uncertainty or approval must the user see?':
    'User ko kya anishchitta ya approval dikhni chahiye?',
  'Orchestrator':
    'Nirdeshak',
  'State and routing':
    'State aur raasta chunna',
  'Where would determinism be safer?':
    'Kahan pakka tareeka zyada surakshit hoga?',
  'Model layer':
    'Model ki parat',
  'Reasoning and generation':
    'Sochna aur jawaab banana',
  'What evidence supports this model choice?':
    'Is model ke chunaav ke peechhe kya saboot hai?',
  'Knowledge and tools':
    'Jaankari aur tools',
  'Data and actions':
    'Data aur kaam',
  'Who can access what, and how is it audited?':
    'Kaun kya dekh sakta hai, aur uska hisaab kaise rakha jaata hai?',
  'Evaluation':
    'Evaluation',
  'Quality gates':
    'Quality ke gate',
  'What blocks a release?':
    'Release ko kya rokta hai?',
  'Observability':
    'Observability',
  'Runtime evidence':
    'Chalte waqt ka saboot',
  'How would we know it had degraded?':
    'Humein kaise pata chalega ki yeh bigad gaya?',
  'Platform':
    'Platform',
  'Deploy, scale, secure':
    'Deploy karna, badhana, surakshit rakhna',
  'How does this survive traffic and failure?':
    'Yeh traffic aur kharaabi mein kaise tikega?',
  'Vendor selection is a multi-objective decision: quality, data controls, latency, cost, region, tooling, interoperability, support and exit cost. A provider that wins on the first two and loses badly on the last one is a decision you make once and live inside for years.':
    'Vendor chunna kai lakshyon waala faisla hai: quality, data par control, latency, cost, kaun se ilaake mein, tools, doosron se mel, support, aur chhodne ka kharcha. Jo provider pehli do mein jeette aur aakhri mein buri tarah haare — woh faisla aap ek baar lete hain aur uske andar saalon rehte hain.',
  'Teams that ship AI well tend to keep four dull habits, and the names attached to them matter less than the habits: <strong>write down why you chose things</strong>, so nobody re-litigates it in six months; <strong>have somewhere safe to try changes</strong> before real users meet them; <strong>be able to switch it off</strong>, quickly, without a meeting; and <strong>know what you would do</strong> if the provider changed the deal tomorrow.':
    'Jo teams AI achche se bhejti hain unki chaar boring aadatein hoti hain, aur unke naam aadaton se kam maayne rakhte hain: <strong>likh lijiye ki aapne kya kyun chuna</strong>, taaki chhe maheene baad koi phir se bahas na chhede; <strong>badlaav aazmane ki ek surakshit jagah rakhiye</strong>, asli users tak pahunchne se pehle; <strong>use band kar paiye</strong>, jaldi, bina meeting ke; aur <strong>yeh pata rakhiye ki kya karenge</strong> agar provider kal sauda badal de.',
  'Your provider doubles its price on ninety days’ notice. Write what you would do in the first week.':
    'Aapka provider nabbe din ka notice dekar daam dugna kar deta hai. Likhiye ki pehle hafte mein aap kya karenge.',
  'If the answer requires re-running an evaluation you do not have, the exit plan is the evaluation set. That is usually the finding.':
    'Agar jawaab mein aisa evaluation dobara chalana padta hai jo aapke paas hai hi nahi, to nikalne ki yojana wahi evaluation set hai. Aam taur par yahi nateeja nikalta hai.',
  'Production delta':
    'Production ki kami',
  'The list of everything a working prototype does not yet have: auth, limits, retries, persistence, monitoring, secrets, backups, deployment, rollback.':
    'Un sab cheezon ki list jo chalte hue prototype mein abhi nahi hain: pehchaan, seemayein, dobara koshish, data bachana, nazar rakhna, raaz, backup, deploy, aur wapas lena.',
  'Latency budget':
    'Latency ka budget',
  'The total time a user will wait, divided across the stages that consume it.':
    'Kul itna samay jitna user intezaar karega, un padavon mein bata hua jo use kharch karte hain.',
  'Architecture decision record':
    'Architecture ke faisle ka record',
  'A short note saying what was decided, what the alternatives were, and why — written when the decision is made, not reconstructed afterwards.':
    'Ek chhota note jisme likha ho ki kya tay hua, doosre vikalp kya the, aur kyun — faisle ke waqt likha gaya, baad mein yaad karke banaya hua nahi.',
  'Exit cost':
    'Chhodne ka kharcha',
  'What it would take to leave a provider. Usually the least examined column in a vendor comparison and the one you live inside longest.':
    'Kisi provider ko chhodne mein kya lagega. Vendor ki tulna mein aam taur par sabse kam dekha jaane waala column, aur wahi jiske andar aap sabse lamba rehte hain.'

});
