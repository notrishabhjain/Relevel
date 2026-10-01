/* Hinglish: p17 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Observability and LLMOps: traces, cost and rollback':
    'Observability aur LLMOps: traces, cost aur rollback',
  'When an answer is wrong, slow or expensive, you need to find out why without guessing. You will design a trace record, treat cost as an architecture metric, and version every part so any change can be rolled back.':
    'Jab jawab galat, dheema ya mehnga ho, to aapko bina andaaze ke pata lagaana chahiye ki kyun. Aap ek trace record design karenge, cost ko architecture metric maanenge, aur har hisse ka version rakhenge taaki koi bhi badlaav palta ja sake.',
  'Design a trace record that can answer “why was this answer wrong?” after the fact.':
    'Aisa trace record design karna jo baad mein “yeh jawab galat kyun tha?” ka jawab de sake.',
  'Users notice response time':
    'Users response time notice karte hain',
  'From Chapter 11.5. A trace shows where the time went.':
    'Chapter 11.5 se. Trace dikhata hai ki samay kahan gaya.',
  'Cost can be measured per request':
    'Cost per request naapi ja sakti hai',
  'Chapter 15 built the arithmetic this chapter records.':
    'Chapter 15 ne woh arithmetic banaya jo yeh chapter record karta hai.',
  'From Chapter 29. In production, traces provide it.':
    'Chapter 29 se. Production mein traces yeh dete hain.',
  'Open your experiment harness. You will extend its records into full traces.':
    'Apna experiment harness kholiye. Aap uske records ko poore traces mein badhaayenge.',
  'One day your system will give a wrong answer, and someone will ask why. This chapter makes sure the answer is not “we cannot tell”.':
    'Ek din aapka system galat jawab dega, aur koi poochhega kyun. Yeh chapter pakka karta hai ki jawab “hum nahi bata sakte” na ho.',
  'An everyday comparison: when a parcel goes missing, the courier can tell you where it was last scanned, because they scan every parcel at every step. Without that, a lost parcel cannot be traced.':
    'Rozmarra ki tulna: jab parcel kho jaata hai, courier bata sakta hai ki use aakhri baar kahan scan kiya gaya, kyunki woh har parcel ko har step par scan karte hain. Iske bina khoya parcel trace nahi ho sakta.',
  'A <strong>trace</strong> records one request’s path through the system. If you can only see the input and the output, every diagnosis is a guess.':
    '<strong>Trace</strong> ek request ka system mein raasta record karta hai. Agar aap sirf input aur output dekh sakte hain, to har diagnosis andaaza hai.',
  'Cost is an architecture metric':
    'Cost ek architecture metric hai',
  'Model the cost of one user task end to end: input tokens, output tokens, embeddings, retrieval, and tool and API calls. Then you can compare two designs before building either.':
    'Ek user task ki cost shuru se ant tak model kijiye: input tokens, output tokens, embeddings, retrieval, aur tool aur API calls. Tab aap kisi ko banaane se pehle do designs compare kar sakte hain.',
  'Terms such as canary release, shadow traffic, rollback and drift come from the same practice. Change one thing at a time, let a few users see it first, keep the old version ready, and keep watching after release.':
    'Canary release, shadow traffic, rollback aur drift jaise shabd ek hi aadat se aate hain. Ek baar mein ek cheez badaliye, pehle kuchh users ko dikhaiye, purana version taiyaar rakhiye, aur release ke baad dekhte rahiye.',
  'To prevent most incidents: change one variable at a time; version prompts, models, indexes and tool contracts; keep every part able to roll back; and never let a prompt change skip evaluation. Teams break the last rule most often, because editing a prompt does not feel like a deployment.':
    'Zyadatar incidents rokne ke liye: ek baar mein ek variable badaliye; prompts, models, indexes aur tool contracts ka version rakhiye; har hissa rollback laayak rakhiye; aur prompt badlaav ko kabhi evaluation chhodne mat dijiye. Teams aakhri niyam sabse zyada todti hain, kyunki prompt edit karna deployment jaisa nahi lagta.',
  'Your assistant got slower this week, and nobody deployed anything. Name three things that could have changed.':
    'Is hafte aapka assistant dheema ho gaya, aur kisi ne kuchh deploy nahi kiya. Teen cheezein bataiye jo badal sakti thi.',
  'Traffic mix, document volume, and the provider’s own response time. None of these are in your repository, which is why they need to be on your dashboard.':
    'Traffic mix, documents ka volume, aur provider ka apna response time. In mein se koi aapki repository mein nahi, isiliye inhe aapke dashboard par hona chahiye.',
  'Next, Chapter 31 treats the same system as a target for attackers.':
    'Aage, Chapter 31 usi system ko attackers ka nishaana maanta hai.',
  'Security and governance: controls around an untrusted model':
    'Security aur governance: avishwasniya model ke aas-paas controls',
  'Assume the model will be manipulated. The application, retrieved content, tools, identity layer and data pipeline are all part of the attack surface. You will apply least privilege, and build a risk register where every control has a test.':
    'Maaniye ki model ke saath chhedchhaad hogi. Application, retrieve kiya content, tools, identity layer aur data pipeline sab attack surface ka hissa hain. Aap least privilege laagu karenge, aur aisa risk register banayenge jahan har control ka test ho.',
  'Explain why retrieved content is untrusted input, whoever owns the document.':
    'Samjhaana ki retrieve kiya content avishwasniya input kyun hai, document chahe kiska ho.',
  'Apply least privilege to an agent, and show what breaks.':
    'Agent par least privilege laagu karna, aur dikhana ki kya tootta hai.',
  'Produce a risk register where every control has evidence next to it.':
    'Aisa risk register banaana jahan har control ke bagal mein saboot ho.',
  'Prompt injection has no complete fix':
    'Prompt injection ka koi poora fix nahi',
  'Chapter 13 showed this. This chapter builds the controls around it.':
    'Chapter 13 ne yeh dikhaya. Yeh chapter iske aas-paas controls banata hai.',
  'From Chapter 25. Least privilege puts that into practice.':
    'Chapter 25 se. Least privilege ise amal mein laata hai.',
  'Retrieved text can carry attacks':
    'Retrieve kiya text attacks la sakta hai',
  'In Chapter 7.5 you planted one in your own system.':
    'Chapter 7.5 mein aapne apne system mein ek daala.',
  'Bring your Chapter 13 injection audit and the tool classification from Chapter 27.':
    'Apna Chapter 13 injection audit aur Chapter 27 ka tool classification le aaiye.',
  'The model reads everything it is given with equal trust. Whether that is dangerous depends on the system around it: what it is given, and what it is allowed to do next. So most of AI security is about the system, not the model.':
    'Model use diya gaya sab kuchh barabar bharose se padhta hai. Yeh khatarnaak hai ya nahi, yeh aas-paas ke system par nirbhar hai: use kya diya jaata hai, aur use aage kya karne ki ijaazat hai. Isliye AI security ka zyadatar hissa system ke baare mein hai, model ke nahi.',
  'An everyday comparison: someone slips a note into a stack of paperwork saying “approve this one without checking”. The clerk can read perfectly well. The problem is that nothing in the process separates an instruction from a document.':
    'Rozmarra ki tulna: koi kaagazon ke dher mein ek parchi daal deta hai, “ise bina check kiye manzoor karo”. Clerk achhi tarah padh sakta hai. Problem yeh hai ki process mein kuchh bhi instruction ko document se alag nahi karta.',
  'Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the system that assembles the context must enforce the boundary. Asking in the system prompt is not enough.':
    'Prompt injection input par bharose ki problem hai. Model instruction ko data se bharose se alag nahi kar sakta, isliye context jodne wale system ko seema laagu karni chahiye. System prompt mein maangna kaafi nahi.',
  'Least privilege for agents':
    'Agents ke liye least privilege',
  'Apply least privilege to agents. If an agent has a tool it never needs, an attacker can persuade it to use that tool.':
    'Agents par least privilege laagu kijiye. Agar agent ke paas aisa tool hai jiski use kabhi zaroorat nahi, to attacker use woh tool use karne ke liye mana sakta hai.',
  'Test every control':
    'Har control test kijiye',
  'A safeguard nobody has tested only exists on paper. Next to each safeguard, write the test that proves it works, and run it.':
    'Jis suraksha upaay ko kisi ne test nahi kiya woh sirf kaagaz par hai. Har upaay ke bagal mein woh test likhiye jo prove kare ki woh kaam karta hai, aur use chalaiye.',
  'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.':
    'Ek control chuniye jiske hone ka aapka organisation daava karta hai. Likhiye ki kaunsa saboot prove karega ki woh kaam karta hai, aur woh saboot maujood hai ya nahi.',
  'The control … the evidence would be … it exists / does not exist because …':
    'Control … saboot hoga … yeh maujood hai / nahi hai kyunki …',
  'The gap between the claim and the evidence is your real risk. A risk register exists to track that gap.':
    'Daave aur saboot ke beech ka gap aapka asli risk hai. Risk register usi gap ko track karne ke liye hai.',
  'Next, Chapter 32 turns the technical system into a product specification.':
    'Aage, Chapter 32 technical system ko product specification mein badalta hai.',
  'AI product management: specs for a probabilistic system':
    'AI product management: probabilistic system ke liye specs',
  'An AI feature cannot promise the same output every time, so its spec must describe how often it succeeds, on what test set, and what happens otherwise. You will write acceptance criteria as ranges, separate metric types, and design the interface states.':
    'AI feature har baar ek hi output ka vaada nahi kar sakta, isliye uske spec ko batana chahiye ki woh kitni baar safal hota hai, kis test set par, aur baaki samay kya hota hai. Aap acceptance criteria ranges ki tarah likhenge, metric types alag rakhenge, aur interface states design karenge.',
  'Write an acceptance criterion as a rate with a tolerance, not a promise.':
    'Acceptance criterion ko vaade ki jagah tolerance wale rate ki tarah likhna.',
  'Separate business outcomes, model metrics and operating metrics.':
    'Business outcomes, model metrics aur operating metrics ko alag rakhna.',
  'Design the three interface states an AI feature needs.':
    'Woh teen interface states design karna jo AI feature ko chahiye.',
  'Chapter 29 built the gate this PRD refers to.':
    'Chapter 29 ne woh gate banaya jiska yeh PRD zikr karta hai.',
  'From Chapter 6. Choosing which failure to accept is a product decision.':
    'Chapter 6 se. Kaunsa failure sweekaar karna hai, yeh product decision hai.',
  'Chapter 20 designed the failure states.':
    'Chapter 20 ne failure states design kiye.',
  'Bring your release gate from Chapter 29 and the four interface states from Chapter 20.':
    'Chapter 29 ka apna release gate aur Chapter 20 ke chaar interface states le aaiye.',
  '“It returns the right document” is a promise no probabilistic system can keep. Instead, write down how often it does, measured on which cases, and what the system does the rest of the time. The rest of the time is never zero.':
    '“Yeh sahi document lautata hai” aisa vaada hai jo koi probabilistic system nahi nibha sakta. Iski jagah likhiye ki yeh kitni baar karta hai, kin cases par naapa, aur baaki samay system kya karta hai. Baaki samay kabhi zero nahi hota.',
  'An everyday comparison: a railway cannot promise a train at exactly 9:04. So it publishes the share of trains that arrive within a few minutes of schedule, measured every month. You can plan around that number.':
    'Rozmarra ki tulna: railway theek 9:04 par train ka vaada nahi kar sakti. Isliye woh un trains ka hissa prakaashit karti hai jo schedule ke kuchh minute ke andar pahunchti hain, har mahine naap kar. Aap us number ke hisaab se planning kar sakte hain.',
  'For an AI feature, “done” means a measured success rate within a tolerance, not one fixed output.':
    'AI feature ke liye “ho gaya” ka matlab tolerance ke andar naapa success rate hai, ek fixed output nahi.',
  'A spec outline':
    'Spec ka dhaancha',
  'Here is an outline you can copy. Each line is a question someone will ask you later, and it is cheaper to answer it now:':
    'Yeh ek dhaancha hai jise aap copy kar sakte hain. Har line ek sawaal hai jo koi baad mein poochhega, aur abhi jawab dena sasta hai:',
  'Keep metric types separate':
    'Metric types alag rakhiye',
  'Keep the metric types apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.':
    'Metric types ko alag rakhiye. Task completion rate product outcome hai. Groundedness system quality metric hai. Token cost operating metric hai. Complaint rate user signal hai. Inhe milaane wala dashboard kisi sawaal ka saaf jawab nahi de sakta.',
  'Write a one-line rollback trigger for a feature you want to ship. It must be specific enough that someone could act on it at 2am without calling you.':
    'Jo feature aap ship karna chahte hain uske liye ek line ka rollback trigger likhiye. Yeh itna specific ho ki koi raat 2 baje aapko call kiye bina us par kaam kar sake.',
  'Roll back if …':
    'Rollback kijiye agar …',
  'If someone needs your judgement to interpret it, it is not a trigger yet. Make it a number and a threshold.':
    'Agar ise samajhne ke liye kisi ko aapke judgement ki zaroorat hai, to yeh abhi trigger nahi. Ise ek number aur threshold banaiye.',
  'Next, Chapter 33 turns the product into a production architecture and delivery plan.':
    'Aage, Chapter 33 product ko production architecture aur delivery plan mein badalta hai.',
  'Production architecture, delivery and vendor strategy':
    'Production architecture, delivery aur vendor strategy',
  'A prototype runs because you are the only user and you forgive its failures. Production removes both. You will list what a prototype is missing, treat response time as a budget across stages, and score vendors on more than price and quality.':
    'Prototype isliye chalta hai kyunki aap akele user hain aur uske failures maaf kar dete hain. Production dono hata deta hai. Aap list karenge ki prototype mein kya kami hai, response time ko charanon mein baante budget ki tarah dekhenge, aur vendors ko price aur quality se aage score karenge.',
  'List what a prototype is missing before it can go to production.':
    'List karna ki production mein jaane se pehle prototype mein kya kami hai.',
  'Treat response time as a budget spent across a chain of stages.':
    'Response time ko charanon ki chain mein kharch hone wale budget ki tarah dekhna.',
  'Score providers on more criteria than price and quality.':
    'Providers ko price aur quality se zyada criteria par score karna.',
  'Chapter 18.5 introduced it. Here the criteria get weights.':
    'Chapter 18.5 ne ise introduce kiya. Yahan criteria ko weights milte hain.',
  'Cost per task can be measured':
    'Per task cost naapi ja sakti hai',
  'Chapter 30 recorded it.':
    'Chapter 30 ne ise record kiya.',
  'From Chapter 29.':
    'Chapter 29 se.',
  'Bring your cost measurements from Chapter 30 and your release gate from Chapter 29.':
    'Chapter 30 ke cost measurements aur Chapter 29 ka release gate le aaiye.',
  'Everything you have built so far works because you are the only user and you forgive it. Production removes both. This chapter lists what that costs.':
    'Aapka ab tak banaya sab kuchh isliye chalta hai kyunki aap akele user hain aur use maaf karte hain. Production dono hata deta hai. Yeh chapter list karta hai ki iski keemat kya hai.',
  'An everyday comparison: a dish you cook well for two people is not a restaurant menu item. The recipe stays the same. You also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.':
    'Rozmarra ki tulna: do logon ke liye achha banaya khaana restaurant ke menu ka item nahi. Recipe wahi rehti hai. Aapko bharosemand supply, chalne wala price, doosre cooks jo ise bana sakein, aur us raat ki yojana bhi chahiye jab chaar sau log ise order karein.',
  'Treat architecture decisions as hypotheses with trade-offs, and record when to revisit them.':
    'Architecture faislon ko trade-offs wali parikalpanayein maaniye, aur record kijiye ki unhe kab dobara dekhna hai.',
  'Response time is a budget':
    'Response time ek budget hai',
  'Response time is spent across the whole chain: retrieval, reranking, tool calls, model reasoning and final generation. The largest share is rarely in the stage people optimise first.':
    'Response time poori chain mein kharch hota hai: retrieval, reranking, tool calls, model reasoning aur final generation. Sabse bada hissa shayad hi us charan mein hota hai jise log pehle optimise karte hain.',
  'Choosing a vendor':
    'Vendor chunna',
  'Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability, support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can lock you in for years.':
    'Vendor chunne ka matlab quality, data controls, response time, cost, region, tooling, interoperability, support aur exit cost ko tolna hai. Jo provider quality aur data controls mein jeete lekin jiski exit cost bahut oonchi ho, woh aapko saalon tak baandh sakta hai.',
  'Teams that ship AI well tend to keep four simple habits:':
    'AI achhe se ship karne wali teams chaar simple aadatein rakhti hain:',
  '<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.':
    '<strong>Likhiye ki aapne cheezein kyun chuni</strong>, taaki chhe mahine baad koi faisla dobara na khole.',
  '<strong>Have a safe place to try changes</strong> before real users see them.':
    '<strong>Badlaav try karne ki surakshit jagah rakhiye</strong>, asli users ke dekhne se pehle.',
  '<strong>Be able to switch it off</strong> quickly, without a meeting.':
    '<strong>Ise band kar paaiye</strong>, jaldi, bina meeting ke.',
  '<strong>Know what you would do</strong> if the provider changed its terms tomorrow.':
    '<strong>Jaaniye ki aap kya karenge</strong> agar provider kal apni terms badal de.',
  'Your provider doubles its price with ninety days’ notice. Write what you would do in the first week.':
    'Aapka provider nabbe din ke notice ke saath apna price doguna karta hai. Likhiye ki pehle hafte mein aap kya karenge.',
  'Day 1 … by the end of the week …':
    'Din 1 … hafte ke ant tak …',
  'If your plan needs an evaluation you do not have, then the evaluation set is your exit plan. That is usually the main finding.':
    'Agar aapki yojana ko aisa evaluation chahiye jo aapke paas nahi, to evaluation set hi aapka exit plan hai. Aam taur par yahi main finding hoti hai.',
  'Next, Chapter 34 brings the whole system together in one capstone project.':
    'Aage, Chapter 34 poore system ko ek capstone project mein jodta hai.',
  'Explain a system you built from first principles, without relying on a framework to explain it for you.':
    'Apne banaaye system ko buniyaadi siddhaanton se samjhaana, kisi framework ke sahaare bina.',
  'Everything in Part V':
    'Part V ka sab kuchh',
  'The capstone combines all of it.':
    'Capstone in sab ko jodta hai.',
  'Chapters 29 and 31 produce the evidence you defend with.':
    'Chapters 29 aur 31 woh saboot dete hain jisse aap defend karte hain.',
  'When you are done':
    'Aapka kaam kab poora hai',
  'You are done when all of these are true:':
    'Aapka kaam tab poora hai jab yeh sab sach ho:',
  'Anyone can rerun the tests and get the same numbers.':
    'Koi bhi tests dobara chala kar wahi numbers pa sakta hai.',
  'You have broken it in at least three real ways, on purpose.':
    'Aapne ise kam se kam teen asli tareekon se jaan-boojh kar toda hai.',
  'Three of your fixes have before and after numbers.':
    'Aapke teen fixes ke pehle aur baad ke numbers hain.',
  'You attacked your own safeguards and recorded what happened.':
    'Aapne apne hi suraksha upaayon par attack kiya aur record kiya ki kya hua.',
  'You can explain every major choice without saying “the framework handles that”.':
    'Aap har bada faisla “framework sambhaal leta hai” kahe bina samjha sakte hain.',
  'Final self-test':
    'Aakhri self-test',
  'Answer these from memory:':
    'Inka jawab yaad se dijiye:',
  'Why is the model stateless?':
    'Model stateless kyun hai?',
  'Why can retrieval fail, and why do embeddings help?':
    'Retrieval kyun fail ho sakta hai, aur embeddings kyun madad karte hain?',
  'Why does retrieval never say “nothing here” on its own?':
    'Retrieval khud se kabhi “yahan kuchh nahi” kyun nahi kehta?',
  'Why is top-k a trade-off?':
    'Top-k ek trade-off kyun hai?',
  'When does a workflow beat an agent?':
    'Workflow agent ko kab harata hai?',
  'Why are tools a security boundary?':
    'Tools security seema kyun hain?',
  'Why must evaluation come before release, and why does tracing matter?':
    'Release se pehle evaluation kyun hona chahiye, aur tracing kyun maayne rakhti hai?',
  'What makes an AI specification different from a normal one?':
    'AI specification aam specification se alag kya banata hai?'

});
