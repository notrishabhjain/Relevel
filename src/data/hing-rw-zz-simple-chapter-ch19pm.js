/* Hinglish for AI product management: specs for a probabilistic system (chapter:ch19pm), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Pick the line “return the correct document”. Turn it into an acceptance criterion (a pass mark) that you can really test.':
    '“Sahi document wapas do” wali line uthaiye. Use acceptance criterion (ek pass mark) banaiye jo aap sach mein test kar sakein.',
  'Write a short AI PRD (the recipe card for your feature). Cover the problem, the baseline, the scope, the context, the tools, the failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.':
    'Ek chhota AI PRD likhiye (aapke feature ka recipe card). Isme problem, baseline, scope, context, tools, failure modes, insaan ka role, evaluation, safety, latency, cost, rollout aur rollback likhiye.',
  'Try to break it with three cases: a wrong answer, a refusal that was not needed (an over-refusal), and a harmful action.':
    'Ise teen cases se todne ki koshish kijiye: ek galat jawaab, bina zaroorat ka mana karna (over-refusal), aur ek nuksaan wala action.',
  'An AI PRD, a release gate (the check before launch) and a metric map (a picture of which number means what).':
    'Ek AI PRD, ek release gate (launch se pehle ki jaanch) aur ek metric map (kaun sa number kya batata hai, uski tasveer).',
  'An engineer can build from it. A leader can see the trade-off it makes, like a shop owner seeing what you give up to get something.':
    'Engineer ise dekh kar bana sake. Leader dekh sake ki isme kya chhodkar kya liya gaya hai, jaise dukaandaar dekhta hai ki kya dekar kya mila.',
  'AI acceptance criterion':
    'AI acceptance criterion',
  'A pass mark with three parts: a metric (a number you watch), a named test set (your answer key) and a stated tolerance (how far off is still fine). “Always correct” is a promise a guessing machine cannot keep.':
    'Teen hisson wala pass mark: ek metric (ek number jise aap dekhte hain), ek naam wala test set (aapki answer key) aur ek tolerance (kitna door tak chalega). “Hamesha sahi” aisa vaada hai jo andaaza lagane wali machine nahi nibha sakti.',
  'Product metric':
    'Product metric',
  'What the user got done. Keep it apart from quality numbers and from running-cost numbers. If you mix them on one screen, the screen cannot answer anything.':
    'User ne kya kaam poora kiya. Ise quality ke numbers aur chalane ke kharch se alag rakhiye. Sab ek screen par mila diye, toh woh screen kisi sawaal ka jawaab nahi de paati.',
  'The exact thing you can see that makes you pull a change back. Write it so that someone can act on it without calling you.':
    'Woh saaf cheez jo dikhe aur aap badlaav wapas kheench lein. Aise likhiye ki koi bina aapko phone kiye kaam kar sake.',
  'Non-goal':
    'Non-goal',
  'Something you chose not to do. Write it down, so nobody sneaks it back in later, like a line you draw on the map.':
    'Woh cheez jo aapne na karne ka faisla kiya. Use likh dijiye, taaki baad mein koi chupke se wapas na daal de, jaise naqshe par kheenchi gayi line.',
  'An AI feature cannot promise the same answer every time. It is like a parrot that has read a whole library: it guesses. So the spec must say how often it gets it right, on which test set (your answer key), and what happens the rest of the time. You will write acceptance criteria as ranges. You will keep different kinds of metrics apart. You will design the interface states, the screens the user can land on.':
    'AI feature har baar ek hi jawaab ka vaada nahi kar sakta. Woh us tote jaisa hai jisne poori library padh li ho: woh andaaza lagata hai. Isliye spec mein likhna hoga ki woh kitni baar sahi hota hai, kis test set (aapki answer key) par, aur baaki waqt kya hota hai. Aap acceptance criteria ko ek range ki tarah likhenge. Alag-alag tarah ke metrics ko alag rakhenge. Aur interface states design karenge, yaani woh screens jin par user pahunch sakta hai.',
  'Write an acceptance criterion as a rate with a tolerance, not as a promise.':
    'Acceptance criterion ko rate aur tolerance ke saath likhiye, vaade ki tarah nahi.',
  'Keep business results, model quality numbers and running-cost numbers in separate piles.':
    'Business ke nateeje, model ki quality ke numbers aur chalane ke kharch ke numbers ko alag-alag dher mein rakhiye.',
  'Design the three interface states an AI feature needs: sure, unsure and error.':
    'AI feature ko teen interface states chahiye: pakka, pakka nahi, aur error. Teeno design kijiye.',
  'Take your requirements to version 3 for Bharat Privacy Guard':
    'Bharat Privacy Guard ke liye apni requirements ko version 3 tak le jaiye',
  'Now you take the requirements you wrote in Chapter 18 to version 3. It is a document an engineer can build from. A leader can read it and see exactly what trade-off is being made. In this chapter you learned three things. Write acceptance criteria as a rate with a tolerance. Keep business results, model measures and running-cost measures apart. Design the three states an AI feature needs. Now you update two pages for your own tool.':
    'Ab aap Chapter 18 mein likhi requirements ko version 3 tak le jaate hain. Yeh aisa document hai jisse engineer bana sake. Leader ise padhkar saaf dekh sake ki kaun sa trade-off liya ja raha hai. Is chapter mein aapne teen cheezein seekhi. Acceptance criteria ko rate aur tolerance ke saath likhna. Business ke nateeje, model ke measures aur chalane ke kharch ke measures ko alag rakhna. AI feature ki teen states design karna. Ab aap apne tool ke liye do pages update karenge.',
  'Written work only. The requirements use proof from earlier chapters. You do not write any new code.':
    'Sirf likhne ka kaam. Requirements pichhle chapters ke saboot use karti hain. Aap koi naya code nahi likhenge.',
  'Say what the user’s problem is. Then name the non-AI way your tool has to beat, for example a developer’s own hand-written rules.':
    'Likhiye ki user ki problem kya hai. Phir woh bina-AI wala tareeka bataiye jise aapke tool ko harana hai, jaise developer ke apne haath se likhe niyam.',
  'Draw the scope (the fence around your project). Say clearly what is outside the fence.':
    'Scope tay kijiye (aapke project ke chaaron taraf ki baad). Saaf likhiye ki baad ke bahar kya hai.',
  'Say what the models can see. Say which tools they may use. Say what job a person has.':
    'Likhiye ki models kya dekh sakte hain. Kaun se tools use kar sakte hain. Aur insaan ka kya kaam hai.',
  'List the failures you have really seen in this course.':
    'Is course mein jo failures aapne sach mein dekhe, unki list banaiye.',
  'Name the test set. Write a test plan in five lines.':
    'Test set ka naam likhiye. Paanch line ka test plan likhiye.',
  'Set targets for quality, safety, speed and cost. Write each as a rate with a tolerance. For example: “finds 95 of every 100 Aadhaar numbers, give or take 3, on the answer key”.':
    'Quality, safety, speed aur cost ke targets tay kijiye. Har ek ko rate aur tolerance ke saath likhiye. Jaise: “answer key par har 100 mein se 95 Aadhaar numbers dhoondhta hai, 3 upar-neeche”.',
  'Design the three screens the tool needs: sure, unsure and error.':
    'Tool ko jo teen screens chahiye, unhe design kijiye: sure, unsure aur error.',
  'Write the release plan, a one-line rollback trigger (the sign that says “undo it”), and the name of the owner.':
    'Release plan likhiye, ek line ka rollback trigger (woh nishaan jo kahe “wapas kijiye”), aur owner ka naam.',
  'Two pages an engineer could build from.':
    'Do pages jinse engineer bana sake.',
  'Every quality claim written as a number, against a named test set.':
    'Quality ka har daava ek number ki tarah likha ho, ek naam wale test set ke saamne.',
  'What is out of scope, written down.':
    'Scope ke bahar kya hai, likha hua.',
  'A rollback trigger that someone could act on without asking you.':
    'Aisa rollback trigger jis par koi aapse pooche bina kaam kar sake.',
  'Quality is a number you measure on a test set':
    'Quality ek number hai jo aap test set par napte hain',
  'In Chapter 29 you built the gate (the check before launch) that this PRD points to.':
    'Chapter 29 mein aapne woh gate (launch se pehle ki jaanch) banaya tha jiski taraf yeh PRD ishaara karta hai.',
  'Failure costs differ by use case':
    'Har use case mein failure ka daam alag hota hai',
  'You saw this in Chapter 6. Choosing which failure you can live with is a product decision.':
    'Yeh aapne Chapter 6 mein dekha tha. Kaun sa failure chalega, yeh chunna product ka faisla hai.',
  'What the user sees when it is wrong':
    'Jab woh galat ho, toh user ko kya dikhta hai',
  'In Chapter 20 you designed the failure screens.':
    'Chapter 20 mein aapne failure wali screens design ki thi.',
  'Bring your release gate from Chapter 29 and your four interface states (the screens a user can land on) from Chapter 20.':
    'Chapter 29 ka apna release gate aur Chapter 20 ke chaaron interface states (woh screens jin par user pahunch sakta hai) saath laiye.',
  'Do units 19.2 and 19.7, then the capstone (the project at the end). Read the other units this time.':
    'Units 19.2 aur 19.7 kijiye, phir capstone (ant ka project). Baaki units is baar sirf padh lijiye.',
  'So far you have built, measured, watched and protected an AI system. Now you write the spec (the recipe card) that holds it all together. The first lesson is hard. “It returns the right document” is a promise no probabilistic system (one that guesses, so it can differ each time) can keep.':
    'Ab tak aapne AI system banaya, naapa, dekha aur surakshit kiya. Ab aap woh spec (recipe card) likhte hain jo sab ko jodta hai. Pehla sabak kadva hai. “Yeh sahi document deta hai” aisa vaada koi probabilistic system (jo andaaza lagata hai, isliye har baar alag ho sakta hai) nahi nibha sakta.',
  'So write a promise you can keep. How often does it return the right document? On which cases? And what does it do the rest of the time? That rest is never zero.':
    'Toh aisa vaada likhiye jo aap nibha sakein. Woh kitni baar sahi document deta hai? Kin cases par? Aur baaki waqt woh kya karta hai? Woh baaki kabhi zero nahi hota.',
  'Think of the railway. It cannot promise a train at exactly 9:04. So it tells you how many trains arrive within a few minutes of the time, counted every month. You can plan your day around that number.':
    'Rail ko sochiye. Woh ek hi minute, 9:04, ka vaada nahi kar sakti. Isliye woh batati hai ki kitni trains time ke kuch minute ke andar aati hain, har mahine gin kar. Aap us number se apna din plan kar sakte hain.',
  'For an AI feature, “done” means a measured success rate inside a tolerance. It does not mean one fixed answer.':
    'AI feature mein “ho gaya” ka matlab hai: naapa hua success rate, tolerance ke andar. Iska matlab ek tay jawaab nahi hai.',
  'The seven units below start at the problem and end at the full PRD. Each one gives you something you use in the next.':
    'Neeche ke saat units problem se shuru hote hain aur poore PRD par khatam. Har unit ek cheez deta hai jo agli unit mein kaam aati hai.',
  'AI problem framing':
    'AI problem framing',
  'Decide if AI is worth it here. Say what outcome the user wants.':
    'Tay kijiye ki yahan AI ki zaroorat hai ya nahi. Likhiye ki user ko kya nateeja chahiye.',
  'Start from the work the user does and where it hurts. Do not start from the model.':
    'User ke kaam aur uski taklif se shuru kijiye. Model se shuru mat kijiye.',
  'Write down how it is done today, what hurts the user, the baseline (today’s result, to beat) and an outcome you can measure.':
    'Likhiye ki aaj yeh kaam kaise hota hai, user ko kya khalta hai, baseline (aaj ka nateeja, jise harana hai) kya hai, aur woh nateeja jo aap naap sakein.',
  'If you can, build a baseline that does not use AI.':
    'Ho sake toh ek aisa baseline banaiye jo AI use na kare.',
  'Put your AI idea next to a deterministic option (a fixed-rule way that gives the same output for the same input, like a calculator).':
    'Apne AI idea ko ek deterministic option ke saath rakhiye (tay niyam wala tareeka, jo ek hi input par ek hi output deta hai, calculator ki tarah).',
  'Problem Framing One-Pager.':
    'Problem Framing One-Pager.',
  'Why AI, and not ordinary software?':
    'AI hi kyun, aam software kyun nahi?',
  'This stops you from starting with an “AI-first” answer, like buying a hammer before you look at the nail.':
    'Isse aap “pehle AI” wale jawaab se shuru nahi karte, jaise keel dekhne se pehle hathoda khareed lena.',
  'AI acceptance criteria':
    'AI acceptance criteria',
  'Turn a fuzzy idea of “correct” into pass marks you can measure.':
    '“Sahi” ke dhundhle khayal ko aise pass marks mein badaliye jo aap naap sakein.',
  'AI answers change from run to run. So “done” must describe a spread of results and a tolerance (how far off is fine).':
    'AI ke jawaab har baar badalte hain. Isliye “ho gaya” ko results ka ek phailaav aur ek tolerance (kitna door chalega) batana hoga.',
  'Write pass marks for retrieval (finding the right page), generation (writing the answer), safety, latency (waiting time) and cost.':
    'Retrieval (sahi page dhoondhna), generation (jawaab likhna), safety, latency (intezaar ka waqt) aur cost ke pass marks likhiye.',
  'Link each pass mark to a test set and to a way of measuring.':
    'Har pass mark ko ek test set se aur naapne ke ek tareeke se jodiye.',
  'Make a case where quality gets better but latency breaks the SLO (the wait time you promised, like “chai in five minutes”).':
    'Aisa case banaiye jahan quality behtar ho jaye par latency SLO tod de (jo intezaar ka waqt aapne vaada kiya tha, jaise “paanch minute mein chai”).',
  'AI Acceptance Criteria Sheet.':
    'AI Acceptance Criteria Sheet.',
  'Can engineering run the test without asking you what “good” means?':
    'Kya engineering test chala sakti hai, bina aapse poochhe ki “achha” ka matlab kya hai?',
  'Acceptance criteria are the contract between product and engineering, like a written deal.':
    'Acceptance criteria product aur engineering ke beech ka contract hain, ek likhi hui deal ki tarah.',
  'Failure-first UX':
    'Failure-first UX',
  'Design for the moments the AI is unsure, unclear or wrong. Do not hide them.':
    'Un pal ke liye design kijiye jab AI ko pakka nahi pata, baat saaf nahi, ya jawaab galat hai. Unhe chhupaiye mat.',
  'A good AI screen shows the user where the system stops being reliable, and what to do next, like a sign that says “bridge closed, take the left road”.':
    'Achhi AI screen user ko dikhati hai ki system kahan par bharosemand nahi raha, aur aage kya karna hai, jaise board jo kahe “pul band hai, baayein se jaaiye”.',
  'Design a sure state, an unsure state and a failed state.':
    'Ek sure state, ek unsure state aur ek failed state design kijiye.',
  'Add citations (a note saying where the answer came from), a way to ask a follow-up question, and fallback paths (a second road when the first is shut).':
    'Citations jodiye (ek note ki jawaab kahan se aaya), follow-up sawaal poochne ka tareeka, aur fallback paths (pehla raasta band ho toh doosra raasta).',
  'Take out the citations and the unsure signs. Then compare how users understand the answers.':
    'Citations aur unsure ke nishaan hata dijiye. Phir dekhiye ki users jawaab kaise samajhte hain.',
  'Failure-First UX Flow.':
    'Failure-First UX Flow.',
  'What does the user do when the AI cannot answer?':
    'Jab AI jawaab nahi de paata, toh user kya karta hai?',
  'The fallback is part of the feature. It is not something you add at the end.':
    'Fallback feature ka hissa hai. Yeh ant mein jodi jaane wali cheez nahi hai.',
  'Human-in-the-loop UX':
    'Human-in-the-loop UX',
  'Say when a person checks, approves, edits or overrides what the AI produced.':
    'Likhiye ki insaan kab AI ke banaye hue ko dekhta, manzoor karta, badalta ya palat deta hai.',
  'Put the person where the risk is high or things are unclear, like a teacher checking only the hard questions.':
    'Insaan ko wahan rakhiye jahan khatra zyada ho ya baat saaf na ho, jaise teacher sirf mushkil sawaal jaanchta hai.',
  'Mark the points where someone decides. Write what the person is asked to approve.':
    'Woh jagah chinhit kijiye jahan koi faisla leta hai. Likhiye ki insaan se kya manzoor karne ko kaha jaata hai.',
  'Measure how long a review takes and how often people override the AI.':
    'Naapiye ki ek review mein kitna waqt lagta hai aur log kitni baar AI ko palat dete hain.',
  'Make an approval that no longer matches the action it approves, like signing a form that was changed after you read it.':
    'Aisi manzoori banaiye jo ab us action se mel nahi khaati jise woh manzoor karti hai, jaise padhne ke baad badal diye gaye form par sign karna.',
  'HITL Decision Map.':
    'HITL Decision Map.',
  'What does the human add that nothing else can?':
    'Insaan aisa kya jodta hai jo aur koi nahi jod sakta?',
  'Human review should lower the risk. It should not become a rubber stamp that means nothing.':
    'Insaan ki review se khatra kam hona chahiye. Woh bina matlab ki mohar nahi banni chahiye.',
  'Metrics and experimentation':
    'Metrics aur experimentation',
  'Keep business results apart from model quality numbers and running-cost numbers.':
    'Business ke nateeje, model ki quality ke numbers aur chalane ke kharch ke numbers ko alag rakhiye.',
  'A task getting finished is not the same as an answer being grounded (backed by the real page). And both are different from cost.':
    'Kaam poora hona aur jawaab grounded hona (asli page par tika hona) ek hi baat nahi. Aur dono kharch se alag hain.',
  'Draw a metric tree (a tree of numbers) with one layer each for business, quality, safety, latency and cost.':
    'Ek metric tree banaiye (numbers ka ped) jisme business, quality, safety, latency aur cost ki ek-ek parat ho.',
  'Where it fits, set up an A/B test (two versions side by side, to see which wins) or another fair comparison.':
    'Jahan theek baithe, A/B test lagaiye (do versions saath-saath, dekhne ke liye kaun jeetta hai) ya koi aur nishpaksh tulna.',
  'Make a model number go up while the business result gets worse.':
    'Model ka ek number badhaiye, jabki business ka nateeja bigad jaye.',
  'Metric Map plus Experiment Plan.':
    'Metric Map plus Experiment Plan.',
  'Which number tells you the product is useful?':
    'Kaun sa number batata hai ki product kaam ka hai?',
  'A PM must stop teams from chasing a stand-in number instead of the real goal, like a student chasing marks instead of learning.':
    'PM ko teams ko asli goal ki jagah naqli number ke peechhe bhaagne se rokna hota hai, jaise student seekhne ki jagah sirf marks ke peechhe bhaage.',
  'Work out the cost of tokens (small pieces of text you pay for), retrieval, tools, infrastructure and human review.':
    'Tokens (text ke chhote tukde jinka aap paisa dete hain), retrieval, tools, infrastructure aur insaan ki review ka kharch nikaliye.',
  'The real unit is often the cost of one task that worked, not the cost of one request.':
    'Asli unit aksar ek kaam ka kharch hota hai jo sach mein hua, ek request ka kharch nahi.',
  'Make a spreadsheet with volume, token use, model cost, retries, tools and review time.':
    'Ek spreadsheet banaiye jisme volume, token use, model cost, retries, tools aur review time ho.',
  'Compare cases for model routing (sending easy jobs to a cheaper model) and for caching (keeping an answer to reuse it).':
    'Model routing (aasaan kaam sasti model ko bhejna) aur caching (jawaab sambhal kar dobara use karna) ke cases ki tulna kijiye.',
  'Raise the context size or the retry rate, and watch what happens to your margin (what you keep after costs).':
    'Context ka size ya retry rate badhaiye, aur dekhiye ki aapke margin (kharch ke baad jo bachta hai) ka kya hota hai.',
  'AI Unit Economics Model.':
    'AI Unit Economics Model.',
  'What happens at 10× volume?':
    '10 guna volume par kya hota hai?',
  'Think about cost when you choose the design, from day one.':
    'Design chunte waqt hi kharch ke baare mein sochiye, pehle din se.',
  'AI PRD and release plan':
    'AI PRD aur release plan',
  'Write a PRD that an engineer can build and a leader can judge.':
    'Aisa PRD likhiye jise engineer bana sake aur leader parakh sake.',
  'An AI PRD must say what the context is, what happens when it fails, how you evaluate it, and what its limits are while running.':
    'AI PRD mein likha hona chahiye ki context kya hai, fail hone par kya hota hai, evaluation kaise hoga, aur chalte waqt uski seemayein kya hain.',
  'Fill in all of these: problem, scope, inputs, context, tools, how the model behaves, failures, the human role, metrics, safety, latency, cost, rollout and rollback.':
    'Yeh sab bhariye: problem, scope, inputs, context, tools, model ka vyavahaar, failures, insaan ka role, metrics, safety, latency, cost, rollout aur rollback.',
  'Check the PRD against the system you built.':
    'PRD ko apne banaye system se milaiye.',
  'Ask a reviewer to find a failure your PRD did not cover.':
    'Kisi reviewer se kahiye ki woh ek aisa failure dhoondhe jo aapke PRD mein nahi tha.',
  'AI PRD plus Release Gate plus Metric Map.':
    'AI PRD plus Release Gate plus Metric Map.',
  'Can the PRD answer “what happens when it is wrong?”':
    'Kya PRD “jab yeh galat ho toh kya hota hai?” ka jawaab de sakta hai?',
  'This becomes one of the best pieces in your portfolio (the folder of your work you show to employers).':
    'Yeh aapke portfolio (aapke kaam ka folder jo aap employers ko dikhate hain) ke sabse achhe hisson mein se ek ban jaata hai.',
  'A spec outline':
    'Spec ka dhaancha',
  'Here is an outline you can copy. Every line is a question someone will ask you later. It is cheaper to answer it now, like packing your bag the night before.':
    'Yeh ek dhaancha hai jise aap copy kar sakte hain. Har line ek sawaal hai jo koi aapse baad mein poochhega. Abhi jawaab dena sasta hai, jaise raat ko hi bag pack kar lena.',
  'The user’s problem, and how it is done today without AI.':
    'User ki problem, aur aaj bina AI ke yeh kaise hota hai.',
  'Why AI is the right answer — and what is clearly out of scope.':
    'AI hi sahi jawaab kyun hai — aur scope ke bahar saaf-saaf kya hai.',
  'What goes in: the inputs, the context, and the tools it may call.':
    'Andar kya jaata hai: inputs, context, aur woh tools jinhe woh bula sakta hai.',
  'How it fails, and what a person does when it does.':
    'Woh kaise fail hota hai, aur fail hone par insaan kya karta hai.',
  'The test set, and the scores that count as good enough.':
    'Test set, aur woh scores jo kaafi achhe maane jaate hain.',
  'Safety limits, the speed it must keep, and the cost it must stay under.':
    'Safety ki seemayein, jo speed bani rahni chahiye, aur jis kharch ke neeche rehna hai.',
  'How it rolls out, what you watch afterwards, and what makes you pull it back.':
    'Yeh kaise launch hoga, baad mein aap kya dekhenge, aur kya hone par aap ise wapas kheenchenge.',
  'Whose name is on it.':
    'Isme kiska naam hai.',
  'Keep metric types separate':
    'Metric ke prakaar alag rakhiye',
  'Once the outline is filled in, the next trap is the metrics (numbers you watch). They look alike on a dashboard (one screen of numbers), but they answer different questions.':
    'Dhaancha bhar jaane ke baad agla jaal metrics hain (woh numbers jinhe aap dekhte hain). Dashboard par (numbers ki ek screen) woh ek jaise dikhte hain, par alag sawaalon ke jawaab dete hain.',
  'Keep the metric types apart, like sorting rice, dal and sugar into separate jars. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.':
    'Metric ke prakaar alag rakhiye, jaise chawal, dal aur cheeni ko alag dibbon mein rakhna. Task completion rate product ka nateeja hai. Groundedness system ki quality ka metric hai. Token cost chalane ka metric hai. Complaint rate user ka sanket hai. Jo dashboard inhe mila de, woh koi sawaal saaf nahi suljha sakta.',
  'Metrics also help with big decisions. The table shows four of them, the business question behind each, and the AI proof that settles it.':
    'Metrics bade faisalon mein bhi madad karte hain. Table mein chaar faisle hain, har ek ke peechhe ka business sawaal, aur woh AI saboot jo use suljhata hai.',
  'The business question':
    'Business ka sawaal',
  'The AI proof that settles it':
    'Woh AI saboot jo ise suljhata hai',
  'Will it create enough value?':
    'Kya isse kaafi fayda hoga?',
  'What it can do, how you test it, and the total cost of owning it (total cost of ownership)':
    'Woh kya kar sakta hai, aap use kaise parakhte hain, aur use apne paas rakhne ka poora kharch (total cost of ownership)',
  'Ship or hold':
    'Launch karein ya rokein',
  'Is failure cheap enough?':
    'Kya failure ka daam kaafi kam hai?',
  'Quality, safety and being ready for incidents (when something goes wrong)':
    'Quality, safety, aur incidents ke liye taiyaar rehna (jab kuch gadbad ho jaye)',
  'Model A or B':
    'Model A ya B',
  'Which one wins for this task?':
    'Is kaam ke liye kaun jeetta hai?',
  'A benchmark (a fair test) made for this task':
    'Is kaam ke liye banaya gaya benchmark (ek nishpaksh test)',
  'Human in the loop':
    'Human in the loop',
  'Where is it unsafe to let the AI act alone?':
    'Kahan AI ko akele kaam karne dena khatarnak hai?',
  'What a mistake costs, and whether it can be undone':
    'Galti ka kharch kitna hai, aur kya use palta ja sakta hai',
  'Now try writing one of the hardest lines in the spec.':
    'Ab spec ki sabse mushkil lines mein se ek likhne ki koshish kijiye.',
  'Write a one-line rollback trigger for a feature you want to ship. Make it clear enough that someone could act on it at 2am without calling you.':
    'Jis feature ko aap launch karna chahte hain, uska ek line ka rollback trigger likhiye. Itna saaf likhiye ki koi raat 2 baje bina aapko phone kiye uspar kaam kar sake.',
  'Roll back if …':
    'Roll back kijiye agar …',
  'If someone needs your opinion to read it, it is not a trigger yet. Make it a number and a threshold (the line where you act).':
    'Agar ise samajhne ke liye kisi ko aapki raay chahiye, toh yeh abhi trigger nahi hai. Ise ek number aur ek threshold (woh line jahan aap kaam karte hain) bana dijiye.',
  'So an AI spec stands on a few simple ideas. Promise a rate with a tolerance, not a perfect answer. Keep business, quality and running-cost metrics apart. Plan for the moments the AI is unsure or wrong. And write a rollback trigger that someone can act on without asking you.':
    'Toh AI spec kuch seedhe khayalon par khadi hai. Perfect jawaab ka nahi, tolerance wale rate ka vaada kijiye. Business, quality aur chalane ke kharch ke metrics alag rakhiye. Un pal ki taiyaari kijiye jab AI unsure ya galat ho. Aur aisa rollback trigger likhiye jis par koi aapse pooche bina kaam kar sake.',
  'Next, in Chapter 33, you turn the product into a production architecture (the plan for how all the parts fit) and a delivery plan.':
    'Agle Chapter 33 mein aap product ko production architecture (sab hisse kaise jude, uska naqsha) aur delivery plan mein badlenge.',
});
