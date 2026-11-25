/* Hinglish for Production architecture, delivery and vendor strategy (chapter:ch20d), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Before you look anything up, write a list from memory: what is your prototype missing before real people can use it?':
    'Kuch bhi dekhne se pehle, yaad se ek list likhiye: aapke prototype mein kya kam hai, jisse asli log use kar sakein?',
  'Add the decisions: the architecture (how the parts fit together), separate environments (practice room and real room), automated checks before release, who owns what, service targets, security, rolling back, and how you would leave a vendor (the company you buy from).':
    'Yeh faisle jodiye: architecture (hisse kaise jude), alag environments (practice room aur asli room), release se pehle automatic checks, kiski zimmedari kya, service targets, security, rolling back, aur vendor (jis company se aap kharidte hain) ko kaise chhodenge.',
  'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.':
    'Teen jhatkon mein kya hoga, nikaliye: provider band ho jaye, traffic das guna badh jaye, aur token ka daam double ho jaye.',
  'A technical decision pack (a bundle of pages that shows your choices) that covers the architecture, the alternatives, the evaluation, security, cost and rollout.':
    'Ek technical decision pack (aapke faisle dikhane wale pages ka bundle) jisme architecture, alternatives, evaluation, security, cost aur rollout ho.',
  'Defend your build-or-buy choice and your provider choice with weighted criteria (marks that count more or less), not with what you happen to like.':
    'Apna build-or-buy ka faisla aur provider ka faisla weighted criteria se bachaiye (jinke marks kam-zyada ginte hain), apni pasand se nahi.',
  'Production delta':
    'Production delta',
  'The list of everything a working prototype does not have yet: sign-in, limits, retries (trying again), saved data, monitoring (watching it run), secrets, backups, deployment (putting it live) and rollback (going back).':
    'Un sab cheezon ki list jo ek chalte prototype mein abhi nahi hain: sign-in, limits, retries (dobara koshish), saved data, monitoring (use chalte dekhna), secrets, backups, deployment (use live karna) aur rollback (wapas jaana).',
  'Latency budget':
    'Latency budget',
  'The total waiting time a user will accept, shared out across the steps that use it up, like a pocket-money budget.':
    'Kul intezaar ka waqt jo user sah lega, un steps mein baanta hua jo use kha jaate hain, jaise jeb-kharch ka budget.',
  'Architecture decision record':
    'Architecture decision record',
  'A short note: what was decided, what the other choices were, and why. Write it on the day you decide, not later from memory.':
    'Ek chhota note: kya tay hua, baaki vikalp kya the, aur kyun. Ise faisle ke din likhiye, baad mein yaad se nahi.',
  'Exit cost':
    'Exit cost',
  'What it costs to leave a provider. It is usually the column nobody reads in a vendor comparison, and the one you live with longest.':
    'Provider ko chhodne mein kitna kharch hota hai. Vendor ki tulna mein aksar yahi column koi nahi padhta, aur isi ke saath aap sabse lamba waqt rehte hain.',
  'A prototype works because you are the only user and you forgive its mistakes, like a dish cooked at home. Production takes away both. In this chapter you list what a prototype is missing. You treat response time as a budget shared across the steps. You score vendors on more than price and quality.':
    'Prototype isliye chalta hai kyunki aap akele user hain aur uski galtiyan maaf kar dete hain, jaise ghar mein bana khaana. Production dono cheezein chheen leta hai. Is chapter mein aap list banate hain ki prototype mein kya kam hai. Response time ko ek budget maante hain jo steps mein baanta jaata hai. Aur vendors ko sirf price aur quality se zyada par parakhte hain.',
  'List what a prototype is missing before it can go to production (the real, live service).':
    'Likhiye ki prototype mein kya kam hai, production (asli, live service) mein jaane se pehle.',
  'Treat response time as a budget spent across a chain of steps.':
    'Response time ko ek budget maniye jo steps ki ek zanjeer mein kharch hota hai.',
  'Score providers on more than price and quality.':
    'Providers ko sirf price aur quality se zyada par number dijiye.',
  'Make a ten-slide decision pack':
    'Das slides ka decision pack banaiye',
  'Now you explain the whole design to the people who must say yes. In this chapter you learned what a prototype lacks before it can go live. You learned to treat response time as a budget spent across steps. You learned to score providers on more than price and quality. Here you make a ten-slide pack for Bharat Privacy Guard. First draft it from memory. The slides you cannot write from memory are the parts you do not understand yet.':
    'Ab aap poora design un logon ko samjhate hain jinhe haan kehna hai. Is chapter mein aapne seekha ki prototype ko live hone se pehle kya chahiye. Response time ko steps mein kharch hone wala budget maanna seekha. Providers ko price aur quality se zyada par number dena seekha. Yahan aap Bharat Privacy Guard ke liye das slides ka pack banate hain. Pehle use yaad se likhiye. Jo slides yaad se nahi likh paaye, wahi hisse hain jo aapko abhi samajh nahi aaye.',
  'Written work only: a slide deck or a document that uses your earlier measurements. You write no new code.':
    'Sirf likhne ka kaam: ek slide deck ya document jo aapke pehle ke measurements use karta hai. Aap koi naya code nahi likhenge.',
  'Do not look at your notes. Write one line for each of the ten slides, saying what it will say. Mark the slides you could not write from memory.':
    'Apne notes mat dekhiye. Das slides mein se har ek ke liye ek line likhiye ki woh kya kahegi. Jo slides yaad se nahi likh paaye, unpar nishaan lagaiye.',
  'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.':
    'Das slides banaiye: (1) problem aur kise harana hai; (2) ek slide par architecture; (3) do alternatives jo aapne chhode aur kyun; (4) test ke nateeje, test set ke naam ke saath; (5) security aur kya abhi bhi khatarnak hai; (6) har message ka cost aur expected volume par cost; (7) rollout plan aur rollback trigger; (8) teen providers, nau weighted criteria par number diye hue; (9) faisla aur uska owner kaun; (10) jo aapne hal nahi kiya.',
  'Check each slide against your earlier documents. Fix anything that does not match.':
    'Har slide ko apne pehle ke documents se milaiye. Jo na mile, use theek kijiye.',
  'Ask someone else to present the deck using only the slides. Write down where they stopped or hesitated. Fix those slides.':
    'Kisi aur se kahiye ki woh sirf slides dekh kar deck present kare. Likhiye ki woh kahan ruke ya jhijhke. Un slides ko theek kijiye.',
  'The from-memory outline, with the weak slides marked.':
    'Yaad se likha dhaancha, kamzor slides par nishaan ke saath.',
  'Ten slides in the order above.':
    'Upar wale kram mein das slides.',
  'A provider scorecard that counts the cost of leaving.':
    'Provider scorecard jisme chhodne ka kharch bhi ginta ho.',
  'Proof that someone else could present the deck from the slides alone.':
    'Saboot ki koi aur sirf slides se deck present kar sakta hai.',
  'Build or buy is a choice made with marks':
    'Build ya buy ka faisla number dekar liya jaata hai',
  'Chapter 18.5 introduced it. Here the marks (criteria) get weights, so some count more.':
    'Chapter 18.5 mein yeh aaya tha. Yahan marks (criteria) ko weights milte hain, taaki kuch zyada ginein.',
  'You can measure the cost of one task':
    'Ek kaam ka cost naapa ja sakta hai',
  'You wrote it down in Chapter 30.':
    'Aapne ise Chapter 30 mein likha tha.',
  'A release gate (the check before launch) decides what goes live':
    'Release gate (launch se pehle ki jaanch) tay karta hai ki kya live jaayega',
  'You built it in Chapter 29.':
    'Aapne ise Chapter 29 mein banaya tha.',
  'Keep your cost measurements from Chapter 30 and your release gate from Chapter 29 open. You will use both.':
    'Chapter 30 ke apne cost measurements aur Chapter 29 ka release gate khule rakhiye. Aap dono use karenge.',
  'Do units 20.7 and 20.8, then the capstone (the project at the end). Read the other units this time.':
    'Units 20.7 aur 20.8 kijiye, phir capstone (ant ka project). Baaki units is baar sirf padh lijiye.',
  'In the last chapter, the product manager wrote the spec (the recipe card) for a system whose answers can change. This chapter is the other side of the same table: what it takes to run that system for real users.':
    'Pichhle chapter mein product manager ne ek aise system ka spec (recipe card) likha jiske jawaab badal sakte hain. Yeh chapter usi mez ka doosra kinara hai: us system ko asli users ke liye chalane mein kya lagta hai.',
  'Everything you have built so far works because you are the only user, and you forgive it when it fails. Production takes away both. So here you list what that costs you.':
    'Ab tak jo bhi aapne banaya woh isliye chalta hai kyunki aap akele user hain, aur fail hone par aap use maaf kar dete hain. Production dono cheezein chheen leta hai. Toh yahan aap likhte hain ki isse aapko kya kharch padta hai.',
  'Think of cooking. A dish you cook well for two people is not yet a dish on a restaurant menu. The recipe stays the same. But now you also need steady supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.':
    'Khaana pakane ko sochiye. Jo dish aap do logon ke liye achhi banate hain, woh abhi restaurant ke menu ki dish nahi hai. Recipe wahi rehti hai. Par ab aapko pakka saaman, theek daam, doosre cooks jo ise bana sakein, aur us raat ki taiyaari chahiye jab chaar sau log order karein.',
  'The units below cross that gap one piece at a time. Each one has a goal, an idea, something to prove, something to build, something to break, something to hand in, and a question to check yourself. Take them in order.':
    'Neeche ke units us faasle ko ek-ek tukde mein paar karte hain. Har unit mein ek goal, ek idea, kuch saabit karne ko, kuch banane ko, kuch todne ko, kuch jama karne ko, aur khud ko jaanchne ka ek sawaal hai. Inhe kram se kijiye.',
  'List everything that is missing between your notebook (where you tried things out) and a real service.':
    'Aapke notebook (jahan aapne cheezein aazmayi) aur ek asli service ke beech jo kuch kam hai, sab likhiye.',
  'A real service needs many things a notebook does not: sign-in, saved data, retries (trying again), queues (a line of jobs waiting), monitoring, secrets, deployment, backups, access rules and a way to roll back.':
    'Asli service ko bahut kuch chahiye jo notebook mein nahi hota: sign-in, saved data, retries (dobara koshish), queues (intezaar karte kaam ki line), monitoring, secrets, deployment, backups, access rules aur wapas jaane ka tareeka.',
  'Write the production delta list for your own prototype.':
    'Apne prototype ke liye production delta list likhiye.',
  'Sort the items into three piles: must-have, should-have and later.':
    'Cheezon ko teen dher mein baantiye: zaroori, hona chahiye, aur baad mein.',
  'Take away one of the controls, then describe how things would fail without it, like removing a brake from a cycle.':
    'Ek control hata dijiye, phir likhiye ki uske bina cheezein kaise fail hongi, jaise cycle se brake nikaal dena.',
  'A production delta checklist.':
    'Ek production delta checklist.',
  'What would stop you from going live tomorrow?':
    'Kal live jaane se aapko kya rokega?',
  'This is the bridge between how a PM thinks about delivery and what engineering has to build.':
    'Yeh woh pul hai jo jodta hai ki PM delivery ke baare mein kaise sochta hai aur engineering ko asal mein kya banana padta hai.',
  'Reliability and resilience':
    'Reliability and resilience',
  'Plan for provider errors, parts that stop working and retries. Decide how the product slows down gently instead of breaking.':
    'Provider ki errors, kaam rokne wale hisson aur retries ki taiyaari kijiye. Tay kijiye ki product toote nahi, dheere se halka ho jaye.',
  'An AI system leans on services you do not control, so some of them will fail at some point, like a train line you do not own.':
    'AI system un services par tika hai jinpar aapka kaabu nahi, isliye kabhi na kabhi kuch fail hogi, jaise us rail line ki jo aapki nahi hai.',
  'Write failure stories for the model, for retrieval (finding the right page), for the tools and for the network.':
    'Model ke liye, retrieval (sahi page dhoondhna) ke liye, tools ke liye aur network ke liye failure ki kahaniyan likhiye.',
  'For each one, decide the timeout (how long you wait), the retries, the fallback (the plan B) and what the user sees.':
    'Har ek ke liye tay kijiye: timeout (kitna intezaar), retries, fallback (plan B) aur user ko kya dikhega.',
  'Pretend the provider is down. Then pretend it is limiting how many requests you can send.':
    'Maan lijiye provider band hai. Phir maan lijiye ki woh aapko kitni requests bhejne dena hai, us par rok laga raha hai.',
  'A table of failures and fallbacks.':
    'Failures aur fallbacks ki ek table.',
  'What does the user feel when only part of the system fails?':
    'Jab system ka sirf ek hissa fail hota hai, toh user ko kya mehsoos hota hai?',
  'A product that slows down gently when something breaks can be worth more than one that uses a bigger model.':
    'Jo product kuch toote toh dheere se halka ho jaye, woh aksar bade model wale product se zyada kaam ka hota hai.',
  'Scalability and queues':
    'Scalability and queues',
  'Learn the difference between work done while the user waits and work done in the background. Find where a system hits its limit as it grows.':
    'Seekhiye ki user ke intezaar mein hone wale kaam aur peeche chalne wale kaam mein kya farak hai. Dhoondhiye ki system badhne par pehle kahan atakta hai.',
  'Not every AI job belongs in the path where the user sends a request and waits for the answer, like standing at the counter.':
    'Har AI kaam us raaste mein nahi aata jahan user request bhejta hai aur jawaab ka intezaar karta hai, jaise counter par khade rehna.',
  'Draw a long-running job, such as taking in a big document.':
    'Ek lamba chalne wala kaam banaiye, jaise ek bada document andar lena.',
  'Split it into four parts: the upload, the processing, the indexing (making a quick-find list) and the status updates to the user.':
    'Ise chaar hisson mein baantiye: upload, processing, indexing (jaldi dhoondhne ki list banana) aur user ko status updates.',
  'Imagine ten times the work, and find the part that gives way first.':
    'Das guna kaam sochiye aur dhoondhiye ki kaun sa hissa sabse pehle jawaab de jaata hai.',
  'A sketch of how the system grows, with your guesses about how much it can carry.':
    'System kaise badhta hai uska ek khaaka, aur woh kitna bojh utha sakta hai iske aapke andaaze.',
  'Which part has to grow first, and why?':
    'Kaun sa hissa pehle badhna chahiye, aur kyun?',
  'When you plan how much it can carry, count the model’s own limits and the quotas (the allowed amount) set by outside providers.':
    'Jab aap tay karein ki woh kitna utha sakta hai, toh model ki apni seemayein aur bahar ke providers ke quotas (jitni ijaazat hai) bhi ginein.',
  'Deployment and environments':
    'Deployment and environments',
  'Keep development (the practice room), staging (the dress rehearsal) and production (the real show) apart, each with settings you control.':
    'Development (practice room), staging (dress rehearsal) aur production (asli show) ko alag rakhiye, har ek ki settings aapke haath mein.',
  'A live AI system needs settings you can copy exactly, and a safe way to release changes.':
    'Live AI system ko aisi settings chahiye jo aap bilkul waisi hi dohra sakein, aur badlaav release karne ka surakshit tareeka.',
  'For each environment, write down the environment variables (labelled boxes of settings), the model versions, the prompts and the index versions.':
    'Har environment ke liye likhiye: environment variables (settings ke naam wale dibbe), model versions, prompts aur index versions.',
  'Write a deployment checklist, and the command or steps to roll back.':
    'Ek deployment checklist likhiye, aur wapas jaane ka command ya steps.',
  'Send a deliberately bad prompt to staging. Check that production stays exactly as it was.':
    'Jaan-boojh kar ek kharab prompt staging mein bhejiye. Dekhiye ki production bilkul waisa hi rehta hai.',
  'A plan for your environments, and a rollout checklist.':
    'Aapke environments ka plan, aur ek rollout checklist.',
  'What can change without anyone releasing new code?':
    'Bina kisi ke naya code release kiye, kya badal sakta hai?',
  'Settings are part of the system, so they need version control (a record of every change) like everything else.':
    'Settings system ka hissa hain, isliye unhe bhi baaki sab ki tarah version control chahiye (har badlaav ka record).',
  'CI/CD and AI regression':
    'CI/CD aur AI regression',
  'Put your software tests and your evaluation gates (pass-or-fail checks on answer quality) into the same automatic checks.':
    'Apne software tests aur evaluation gates (jawaab ki quality ki pass-ya-fail jaanch) ko ek hi automatic checks mein rakhiye.',
  'A green build is not enough if the model now behaves worse.':
    'Hari build kaafi nahi agar model ab pehle se kharab kaam kar raha hai.',
  'Add ordinary tests, plus your golden evaluation suite (your best answer key), to the automatic checks that run before every release.':
    'Aam tests, aur apna golden evaluation suite (aapki sabse achhi answer key), un automatic checks mein jodiye jo har release se pehle chalte hain.',
  'Decide the thresholds (the lines) that block a release.':
    'Woh thresholds (lines) tay kijiye jo release rok dein.',
  'Change the model, the prompt or the index. Check that the automatic checks catch the drop in quality.':
    'Model, prompt ya index badaliye. Dekhiye ki automatic checks quality ki giraavat pakad lete hain.',
  'A spec for the automatic release checks of an AI product.':
    'AI product ke automatic release checks ka ek spec.',
  'What proof do you need before you release?':
    'Release karne se pehle aapko kaunsa saboot chahiye?',
  'This is how a system whose answers change becomes something a team can deliver again and again.':
    'Isi se woh system jiske jawaab badalte hain, aisi cheez ban jaata hai jise ek team baar-baar bharosemand tareeke se de sake.',
  'Write down the alternatives, the decision, the proof, the results that follow, and the signs that mean you should look again.':
    'Alternatives, faisla, saboot, uske nateeje, aur woh nishaan likhiye jinse pata chale ki dobara dekhna chahiye.',
  'Treat each architecture decision as a guess you are testing, with trade-offs. Write down when you will look at it again.':
    'Har architecture decision ko ek andaaza maniye jise aap parakh rahe hain, trade-offs ke saath. Likhiye ki use dobara kab dekhenge.',
  'Write a record for each of four decisions: the model, the retrieval approach, the workflow or agent (a helper that uses tools in a loop), and the storage.':
    'Chaar faislon mein se har ek ka record likhiye: model, retrieval ka tareeka, workflow ya agent (ek madadgaar jo tools ko loop mein use karta hai), aur storage.',
  'Include the options you turned down and the proof behind your choice.':
    'Jo options aapne thukraye aur chunaav ke peechhe ka saboot, dono jodiye.',
  'Invent a new need that makes one of your decisions wrong.':
    'Ek nayi zaroorat sochiye jo aapke ek faisle ko galat bana de.',
  'A set of architecture decision records.':
    'Architecture decision records ka ek set.',
  'What would make you look at this decision again?':
    'Kya hone par aap is faisle ko dobara dekhenge?',
  'These records keep what the team learned safe, and they let others see how you reason as a technical PM.':
    'Yeh records team ne jo seekha use sambhal kar rakhte hain, aur doosron ko dikhate hain ki aap technical PM ki tarah kaise sochte hain.',
  'Vendor and TCO strategy':
    'Vendor and TCO strategy',
  'Compare provider and model choices on quality, cost, region (where the data sits), data controls, tooling and exit cost.':
    'Provider aur model ke chunaav ko quality, cost, region (data kahan rakha jaata hai), data controls, tooling aur exit cost par tauliye.',
  'Choosing a vendor means balancing several goals at once, and it shapes your architecture.':
    'Vendor chunna matlab kai goals ko ek saath sambhalna, aur isse aapka architecture bhi tay hota hai.',
  'Score at least three realistic options, or two providers plus the idea of running the model yourself.':
    'Kam se kam teen asli options ko number dijiye, ya do providers aur model ko khud chalane ka ek khayal.',
  'Work out what it would cost to move away, and to leave for good.':
    'Nikaliye ki hat jaane mein, aur hamesha ke liye chhodne mein kitna kharch aayega.',
  'Work out what happens if the price doubles, or if a feature you rely on is taken away.':
    'Nikaliye ki daam double ho jaye, ya jis feature par aap tike hain woh hata diya jaye, toh kya hoga.',
  'A scorecard for models and vendors, with an exit plan.':
    'Models aur vendors ka ek scorecard, exit plan ke saath.',
  'What would it cost you to switch?':
    'Badalne mein aapko kitna kharch aayega?',
  'Vendor lock-in (being stuck with one company) is a risk to your costs and to your architecture.':
    'Vendor lock-in (ek hi company se bandh jaana) aapke kharch aur aapke architecture, dono ke liye khatra hai.',
  'Technical decision pack':
    'Technical decision pack',
  'Pack the whole system so that a design review (a meeting where others check your plan) can go through it.':
    'Poore system ko aise bandhiye ki design review (jahan doosre aapka plan jaanchte hain) use dekh sake.',
  'A strong artifact (a finished piece of work) between PM and engineers lets different readers look at the same proof, each as deep as they need.':
    'PM aur engineers ke beech ka ek mazboot artifact (kaam ka poora kiya hua tukda) alag-alag padhne walon ko ek hi saboot dikhata hai, har ek ko utni gehraai tak jitni use chahiye.',
  'Cover the problem, the baseline, the architecture, the alternatives, the evaluation, the security, the cost, the rollout and the risks.':
    'Problem, baseline, architecture, alternatives, evaluation, security, cost, rollout aur risks, sab shaamil kijiye.',
  'Add one architecture diagram and one table of decisions.':
    'Ek architecture diagram aur faislon ki ek table jodiye.',
  'Ask a reviewer to challenge three of your assumptions.':
    'Kisi reviewer se kahiye ki woh aapki teen maanyataon par sawaal uthaye.',
  'A ten-slide technical decision pack.':
    'Das slides ka technical decision pack.',
  'Can you defend every major box and arrow?':
    'Kya aap har bade dibbe aur teer ko bacha sakte hain?',
  'This is the bridge from your portfolio (the folder of your work) to real interviews for technical AI PM roles.':
    'Yeh aapke portfolio (aapke kaam ke folder) se technical AI PM role ke asli interviews tak ka pul hai.',
  'Response time is a budget':
    'Response time ek budget hai',
  'Now look closely at one idea, because it surprises most people. When a user waits for an answer, the wait is a chain of steps, one after the other, like beads on a thread.':
    'Ab ek khayal ko paas se dekhiye, kyunki yeh zyadatar logon ko chaunka deta hai. Jab user jawaab ka intezaar karta hai, toh woh intezaar steps ki ek zanjeer hota hai, ek ke baad ek, jaise dhaage mein moti.',
  'Response time is spent across the whole chain: retrieval (finding the right page), reranking (putting the found pages in a better order), tool calls, the model’s reasoning and the final writing. The biggest share is rarely in the step people speed up first.':
    'Response time poori zanjeer mein kharch hota hai: retrieval (sahi page dhoondhna), reranking (mile pages ko behtar kram mein rakhna), tool calls, model ka reasoning aur aakhri likhna. Sabse bada hissa shayad hi us step mein hota hai jise log pehle tez karte hain.',
  'Think of a courier delivery. The parcel travels in legs, and the longest delay is often not the leg you expected. That is why the total time a user will wait is called a <strong>latency budget</strong>. Divide it across the steps, and check which one uses the most.':
    'Courier ki delivery sochiye. Parcel kai tukdon mein safar karta hai, aur sabse lambi der aksar us tukde mein nahi hoti jisse aap umeed karte hain. Isliye user jitna intezaar karega uske kul waqt ko <strong>latency budget</strong> kehte hain. Ise steps mein baantiye, aur dekhiye ki kaun sabse zyada kha raha hai.',
  'Next, here is a way to look at the whole system, layer by layer, like floors of a building. Read across each row. The last column gives the question to ask about that layer when you review a design.':
    'Ab poore system ko parat-dar-parat dekhne ka ek tareeka, jaise imaarat ki manzilein. Har row ko aadhe mein padhiye. Aakhri column woh sawaal deta hai jo design review karte waqt us parat se poochna hai.',
  'Typical job':
    'Aam kaam',
  'The question to ask about it':
    'Us par poochne ka sawaal',
  'Client and UI':
    'Client and UI',
  'What the user sees and does':
    'User kya dekhta aur karta hai',
  'What doubt or approval must the user see?':
    'User ko kaun sa shak ya manzoori dikhni chahiye?',
  'Orchestrator':
    'Orchestrator',
  'Remembering where things stand and picking the next step, like a conductor':
    'Yaad rakhna ki kaam kahan tak pahuncha aur agla step chunna, jaise conductor',
  'Where would a fixed rule be safer than the model’s own judgement?':
    'Kahan ek tay niyam model ke apne faisle se zyada surakshit hota?',
  'Model layer':
    'Model layer',
  'Reasoning and writing the answer':
    'Sochna aur jawaab likhna',
  'What proof backs this choice of model?':
    'Is model ke chunaav ke peechhe kaunsa saboot hai?',
  'Knowledge and tools':
    'Knowledge and tools',
  'The data it reads and the actions it takes':
    'Woh data jo woh padhta hai aur woh actions jo woh leta hai',
  'Who can reach what, and how is it checked later (audited)?':
    'Kaun kya tak pahunch sakta hai, aur baad mein use kaise jaancha jaata hai (audit)?',
  'Quality gates (pass-or-fail checks)':
    'Quality gates (pass-ya-fail jaanch)',
  'What blocks a release?':
    'Release ko kya rokta hai?',
  'Proof of how it behaves while it runs':
    'Chalte waqt woh kaisa vyavahaar karta hai, uska saboot',
  'How would we know it got worse?':
    'Hamein kaise pata chalega ki woh kharab ho gaya?',
  'Platform':
    'Platform',
  'Putting it live, growing it and keeping it safe':
    'Use live karna, badhana aur surakshit rakhna',
  'How does it survive heavy traffic and failures?':
    'Woh bhaari traffic aur failures mein kaise tikta hai?',
  'Choosing a vendor':
    'Vendor chunna',
  'The same habit of looking at the whole picture works when you choose a provider. Most people compare price and quality, and stop there.':
    'Poori tasveer dekhne ki wahi aadat provider chunte waqt bhi kaam aati hai. Zyadatar log price aur quality tauletay hain, aur wahin ruk jaate hain.',
  'Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability (working well with your other tools), support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can trap you for years.':
    'Vendor chunna matlab tolna: quality, data controls, response time, cost, region, tooling, interoperability (aapke baaki tools ke saath achhe se chalna), support aur exit cost. Jo provider quality aur data controls mein jeete par jiska exit cost bahut zyada ho, woh aapko saalon tak fansa sakta hai.',
  'Exit cost is the one people forget. It is the column you read least when you compare vendors, yet it is the one you live inside the longest.':
    'Exit cost woh hai jise log bhool jaate hain. Vendors ki tulna mein yeh woh column hai jise aap sabse kam padhte hain, phir bhi isi ke andar aap sabse lamba waqt rehte hain.',
  'Teams that ship AI well keep four simple habits:':
    'Jo teams AI achhe se launch karti hain, woh chaar saral aadatein rakhti hain:',
  '<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.':
    '<strong>Likh kar rakhiye ki aapne kyun chuna</strong>, taaki chhe mahine baad koi faisla dobara na khole.',
  '<strong>Have a safe place to try changes</strong> before real users see them, like a practice room.':
    '<strong>Badlaav aazmane ki ek surakshit jagah rakhiye</strong>, asli users ke dekhne se pehle, jaise practice room.',
  '<strong>Be able to switch it off</strong> quickly, without a meeting.':
    '<strong>Ise jaldi band kar sakein</strong>, bina kisi meeting ke.',
  '<strong>Know what you would do</strong> if the provider changed its terms tomorrow.':
    '<strong>Pehle se jaaniye ki aap kya karenge</strong> agar provider kal apni shartein badal de.',
  'The last habit is easy to say and hard to do. So try it now, on paper.':
    'Aakhri aadat kehne mein aasaan hai aur karne mein mushkil. Toh ise abhi kaagaz par aazmaiye.',
  'Your provider doubles its price and gives you ninety days’ notice. Write what you would do in the first week.':
    'Aapka provider apna daam double kar deta hai aur aapko nabbe din ka notice deta hai. Likhiye ki pehle hafte mein aap kya karenge.',
  'Day 1 … by the end of the week …':
    'Din 1 … hafte ke ant tak …',
  'If your plan needs an evaluation you do not have, then the evaluation set (your answer key) is your exit plan. That is usually the main thing you find out.':
    'Agar aapke plan ko aisi evaluation chahiye jo aapke paas nahi hai, toh evaluation set (aapki answer key) hi aapka exit plan hai. Aksar yahi sabse badi baat aap seekhte hain.',
  'Let us pull it together. A prototype works because you are its only user. Production needs a list of everything the prototype lacks. That list is the production delta.':
    'Chaliye sab ek jagah jod lein. Prototype isliye chalta hai kyunki aap uske akele user hain. Production ko un sab cheezon ki list chahiye jo prototype mein nahi hain. Wahi list production delta hai.',
  'You also saw that response time is a budget shared across a chain of steps. And a vendor needs more than a price and quality check. Count data controls, region, support and, above all, the cost of leaving.':
    'Aapne yeh bhi dekha ki response time ek budget hai jo steps ki zanjeer mein baanta jaata hai. Aur vendor ko price aur quality ki jaanch se zyada chahiye. Data controls, region, support, aur sabse upar, chhodne ka kharch bhi ginye.',
  'Next, Chapter 34 brings the whole system together in one capstone project.':
    'Agle Chapter 34 mein poora system ek capstone project mein jud jaata hai.',
});
