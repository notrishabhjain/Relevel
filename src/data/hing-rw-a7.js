/* Hinglish: a7 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Specs, stories and prototypes: from decision to delivery':
    'Specs, stories aur prototypes: decision se delivery tak',
  'Turn a decision into something engineering can build and users can test. You will write a problem-first PRD, break it into user stories with edge cases, slice an MVP end to end, plan two sprints, and test a clickable prototype with real users.':
    'Ek decision ko aisi cheez mein badaliye jise engineering build kar sake aur users test kar sakein. Aap ek problem-first PRD likhenge, usey edge cases wale user stories mein todenge, ek MVP ko end to end slice karenge, do sprints plan karenge, aur ek clickable prototype ko real users ke saath test karenge.',
  'Write a PRD that starts from the problem and has measurable acceptance criteria.':
    'Ek PRD likhiye jo problem se shuru ho aur uske measurable acceptance criteria hon.',
  'Write user stories and job stories that cover edge cases, including AI failure states.':
    'User stories aur job stories likhiye jo edge cases cover karein, AI failure states samet.',
  'Slice an MVP into a thin end-to-end version that tests your riskiest assumption.':
    'Ek MVP ko ek patli end-to-end version mein slice kijiye jo aapki sabse riskiest assumption test kare.',
  'Plan sprints, estimate uncertain AI work with time-boxes, and run a retrospective.':
    'Sprints plan kijiye, uncertain AI kaam ko time-boxes se estimate kijiye, aur ek retrospective chalayiye.',
  'Choose the right prototype fidelity and run a usability test without leading the user.':
    'Sahi prototype fidelity chuniye aur user ko lead kiye bina ek usability test chalayiye.',
  'PRD, prototype and a sprint plan':
    'PRD, prototype aur ek sprint plan',
  'Three artifacts that take your capstone from decision to delivery.':
    'Teen artifacts jo aapke capstone ko decision se delivery tak le jaate hain.',
  'Write a PRD with these sections: problem evidence, users, scope, non-goals, UX states, AI behaviour, evaluations, metrics, rollout, security and open questions.':
    'In sections ke saath ek PRD likhiye: problem evidence, users, scope, non-goals, UX states, AI behaviour, evaluations, metrics, rollout, security aur open questions.',
  'Build a clickable prototype in Figma, Lovable or Google AI Studio. Test it with three target users using task prompts, and write down where each one got stuck.':
    'Figma, Lovable ya Google AI Studio mein ek clickable prototype banayiye. Teen target users ke saath task prompts se test kijiye, aur likhiye har ek kahan atka.',
  'Create a two-sprint plan in Jira (or a spreadsheet) with stories, acceptance criteria, dependencies and a demo plan. After Sprint 1, run a retrospective and record what you will change.':
    'Jira (ya ek spreadsheet) mein stories, acceptance criteria, dependencies aur ek demo plan ke saath do-sprint plan banayiye. Sprint 1 ke baad, ek retrospective chalayiye aur likhiye aap kya badlenge.',
  'An engineer could estimate the PRD without guessing what success looks like.':
    'Ek engineer bina yeh guess kiye ki success kaisa dikhta hai, PRD estimate kar sake.',
  'The acceptance criteria cover failure, uncertainty and refusal states, not just the happy path.':
    'Acceptance criteria failure, uncertainty aur refusal states cover karte hain, sirf happy path nahi.',
  'The prototype was tested with three real target users, and at least one change came from what they did.':
    'Prototype teen real target users ke saath test kiya gaya, aur kam se kam ek change unke kiye se aaya.',
  'An outcome roadmap':
    'Ek outcome roadmap',
  'The PRD specifies its first “now” item.':
    'PRD uska pehla "now" item specify karta hai.',
  'Your riskiest unknown':
    'Aapki sabse riskiest unknown',
  'The MVP should test it.':
    'MVP isey test karna chahiye.',
  'About 14 hours, across a week or more because of the user tests. You need a free account on Figma, Lovable or Google AI Studio for the prototype, and Jira (free tier) or a spreadsheet for the sprint plan. Core chapter 18 goes deeper on AI PRDs; this chapter covers the product-management basics.':
    'Lagbhag 14 ghante, ek hafte ya zyada mein user tests ki wajah se. Prototype ke liye Figma, Lovable ya Google AI Studio par ek free account chahiye, aur sprint plan ke liye Jira (free tier) ya ek spreadsheet. Core chapter 18 AI PRDs par aur gehraai se jaata hai; yeh chapter product-management basics cover karta hai.',
  'Idea 1: Start the PRD from the problem':
    'Idea 1: PRD ko problem se shuru kijiye',
  'A <strong>PRD</strong> (product requirements document) explains what to build and why. A good one starts with the problem and its evidence, and only then describes the solution. Engineers make better decisions when they know the problem.':
    'Ek <strong>PRD</strong> (product requirements document) samjhata hai kya banana hai aur kyun. Ek achha PRD problem aur uske evidence se shuru hota hai, aur tabhi solution describe karta hai. Engineers behtar decisions lete hain jab unhe problem pata hoti hai.',
  'A PRD for an AI feature has these sections:':
    'AI feature ke liye ek PRD mein yeh sections hote hain:',
  '<strong>Problem and evidence.</strong> What is wrong today, for whom, and how you know.':
    '<strong>Problem aur evidence.</strong> Aaj kya galat hai, kiske liye, aur aapko kaise pata hai.',
  '<strong>Users.</strong> Who this is for, and who it is not for.':
    '<strong>Users.</strong> Yeh kiske liye hai, aur kiske liye nahi.',
  '<strong>Scope and non-goals.</strong> What is included, and what is deliberately left out.':
    '<strong>Scope aur non-goals.</strong> Kya shaamil hai, aur kya jaan-boojhkar chhoda gaya hai.',
  '<strong>UX states.</strong> What the user sees when it works, when it is unsure, when it fails and when it refuses.':
    '<strong>UX states.</strong> User kya dekhta hai jab yeh kaam karta hai, jab unsure hai, jab fail hota hai aur jab refuse karta hai.',
  '<strong>AI behaviour.</strong> What the model does, what it is given, and what it must never do.':
    '<strong>AI behaviour.</strong> Model kya karta hai, usey kya diya jaata hai, aur woh kya kabhi nahi karna chahiye.',
  '<strong>Evaluations.</strong> The test set and the pass threshold.':
    '<strong>Evaluations.</strong> Test set aur pass threshold.',
  '<strong>Metrics, rollout and security.</strong> How you will measure success, release safely and protect data.':
    '<strong>Metrics, rollout aur security.</strong> Aap success kaise naapenge, safely release karenge aur data protect karenge.',
  '<strong>Open questions.</strong> What you do not know yet.':
    '<strong>Open questions.</strong> Aapko abhi kya nahi pata.',
  'The most important part is the <strong>acceptance criteria</strong>. Each one must be something you can test. AI features give slightly different answers each time, so their criteria describe a rate across a test set, not a single correct output:':
    'Sabse zaroori hissa <strong>acceptance criteria</strong> hai. Har ek aisa hona chahiye jise aap test kar sakein. AI features har baar thoda alag jawab dete hain, isliye unke criteria ek single sahi output nahi, ek test set ke across ek rate describe karte hain:',
  'Not testable':
    'Testable nahi',
  'Testable':
    'Testable',
  'Themes are accurate':
    'Themes accurate hain',
  'On the 50-ticket test set, at least 85% of themes match the lead’s own grouping':
    '50-ticket test set par, kam se kam 85% themes lead ke apne grouping se match karte hain',
  'It is fast':
    'Yeh fast hai',
  'The weekly report is ready within 2 minutes for up to 1,000 tickets':
    '1,000 tickets tak weekly report 2 minute mein ready hai',
  'It handles bad input':
    'Yeh bad input handle karta hai',
  'If fewer than 20 tickets are imported, it says so and does not produce themes':
    'Agar 20 se kam tickets import hote hain, to yeh bata deta hai aur themes nahi banata',
  'There is a fillable AI PRD template in the <a href="#/templates/prd">workbench</a>. Use it for the Build it task.':
    '<a href="#/templates/prd">Workbench</a> mein ek fillable AI PRD template hai. Build it task ke liye ise use kijiye.',
  'Write three acceptance criteria for your capstone’s first feature. Make each one testable: a number, a test set or a specific condition.':
    'Apne capstone ke pehle feature ke liye teen acceptance criteria likhiye. Har ek testable banayiye: ek number, ek test set ya ek specific condition.',
  'Three criteria. For each, ask: could two people disagree about whether it passed? If yes, it is not testable yet.':
    'Teen criteria. Har ek ke liye poochiye: kya do log ismein disagree kar sakte hain ki yeh pass hua ya nahi? Agar haan, to yeh abhi testable nahi hai.',
  'Idea 2: Break the work into stories, including the edge cases':
    'Idea 2: Kaam ko stories mein todiye, edge cases samet',
  'A <strong>user story</strong> describes one piece of value from the user’s point of view:':
    'Ek <strong>user story</strong> user ke nazariye se ek value ka tukda describe karti hai:',
  'A <strong>job story</strong> uses the situation instead of the role, which often gives engineers more useful context:':
    'Ek <strong>job story</strong> role ki jagah situation use karti hai, jo aksar engineers ko zyada useful context deti hai:',
  'Every story needs acceptance criteria and <strong>edge cases</strong>: the unusual inputs and states that break things. AI features have extra edge cases that ordinary software does not:':
    'Har story ko acceptance criteria aur <strong>edge cases</strong> chahiye: unusual inputs aur states jo cheezein tod dete hain. AI features mein extra edge cases hote hain jo ordinary software mein nahi hote:',
  'Edge case':
    'Edge case',
  'What should happen':
    'Kya hona chahiye',
  'No clear themes this week':
    'Is hafte koi saaf themes nahi',
  'Say so, rather than inventing themes':
    'Yeh bata dijiye, themes banane ki jagah',
  'Tickets in another language':
    'Tickets doosri bhasha mein',
  'Group them, or flag them clearly; never drop them silently':
    'Unhe group kijiye, ya saaf tarike se flag kijiye; kabhi bhi chupke se drop mat kijiye',
  'Model times out':
    'Model timeout ho jaata hai',
  'Show last week’s report with a notice':
    'Ek notice ke saath pichhle hafte ki report dikhayiye',
  'Model is unsure':
    'Model unsure hai',
  'Mark the theme as low confidence':
    'Theme ko low confidence mark kijiye',
  'Ticket contains personal data':
    'Ticket mein personal data hai',
  'Remove it before sending the text to the model':
    'Text model ko bhejne se pehle usey hata dijiye',
  'Write one user story for your capstone, with two acceptance criteria and three edge cases. Make at least one edge case specific to AI.':
    'Apne capstone ke liye ek user story likhiye, do acceptance criteria aur teen edge cases ke saath. Kam se kam ek edge case AI-specific banayiye.',
  'One story, two criteria and three edge cases. The AI-specific one is usually about uncertainty, wrong answers or refusals.':
    'Ek story, do criteria aur teen edge cases. AI-specific wala usually uncertainty, galat jawabon ya refusals ke baare mein hota hai.',
  'Idea 3: Build a thin slice that works end to end':
    'Idea 3: Ek patli slice banayiye jo end to end kaam kare',
  'An <strong>MVP</strong> (minimum viable product) is the smallest thing that tests your riskiest assumption with real users. It is not a small version of the whole product.':
    'Ek <strong>MVP</strong> (minimum viable product) sabse chhoti cheez hai jo real users ke saath aapki sabse riskiest assumption test kare. Yeh poore product ka ek chhota version nahi hai.',
  'There are two ways to cut work:':
    'Kaam kaatne ke do tareeke hain:',
  '<strong>Horizontal slices</strong> build one layer at a time: all the data import, then all the processing, then all the interface. Nothing works for a user until the last layer is done.':
    '<strong>Horizontal slices</strong> ek waqt mein ek layer banate hain: pehle poora data import, phir poora processing, phir poora interface. Jab tak aakhri layer na ho, user ke liye kuchh kaam nahi karta.',
  '<strong>Vertical slices</strong> build a thin version of every layer, so a user can try something from the first week.':
    '<strong>Vertical slices</strong> har layer ka ek patla version banate hain, taaki ek user pehle hafte se hi kuchh try kar sake.',
  'For the ticket example, the first vertical slice is:':
    'Ticket example ke liye, pehla vertical slice yeh hai:',
  'Build the thinnest slice that lets a real user try the core value. Everything else can wait until you know it works.':
    'Sabse patli slice banayiye jo ek real user ko core value try karne de. Baaki sab tab tak wait kar sakta hai jab tak aapko pata na ho ki yeh kaam karta hai.',
  'Draw your capstone’s first vertical slice as one line, like the example above. Then list what you are deliberately leaving out.':
    'Apne capstone ka pehla vertical slice ek line ki tarah draw kijiye, upar ke example jaisa. Phir list kijiye kya aap jaan-boojhkar chhod rahe hain.',
  'One line from input to user value, and a list of exclusions. If the line has more than six steps, look for a step you can do by hand for the first version.':
    'Input se user value tak ek line, aur exclusions ki ek list. Agar line mein chhe se zyada steps hain, ek aisa step dhoondhiye jo aap pehle version ke liye haath se kar sakein.',
  'Idea 4: Plan sprints, estimate honestly, and review each one':
    'Idea 4: Sprints plan kijiye, honestly estimate kijiye, aur har ek review kijiye',
  'Many teams work in <strong>sprints</strong>: fixed periods of one or two weeks. Each sprint starts with planning and ends with a demo and a retrospective.':
    'Bahut si teams <strong>sprints</strong> mein kaam karti hain: ek ya do hafton ke fixed periods. Har sprint planning se shuru hota hai aur ek demo aur retrospective par khatam hota hai.',
  '<strong>Planning.</strong> Choose the stories that fit the team’s capacity, starting with the highest priority.':
    '<strong>Planning.</strong> Woh stories chuniye jo team ki capacity mein fit hon, sabse high priority se shuru karke.',
  '<strong>Estimation.</strong> Size stories relative to each other, using points or T-shirt sizes (S, M, L). Relative sizes are easier to agree on than hours.':
    '<strong>Estimation.</strong> Stories ko ek doosre ke against size kijiye, points ya T-shirt sizes (S, M, L) use karke. Relative sizes par agree karna hours se aasaan hai.',
  '<strong>Demo.</strong> Show working software, not slides.':
    '<strong>Demo.</strong> Kaam karta hua software dikhayiye, slides nahi.',
  '<strong>Retrospective.</strong> Ask three questions: what went well, what did not, and what will we change next sprint?':
    '<strong>Retrospective.</strong> Teen sawaal poochiye: kya achha hua, kya nahi, aur agle sprint mein hum kya badlenge?',
  'AI work is hard to estimate, because you do not know how good the model will be until you try. So <strong>time-box</strong> uncertain work instead: “Spend three days. If precision on the test set is below 70%, stop and rethink the approach.” A time-box turns an unknown estimate into a known decision point.':
    'AI kaam estimate karna mushkil hai, kyunki try kiye bina aapko nahi pata model kitna achha hoga. Isliye uncertain kaam ko <strong>time-box</strong> kijiye: "Teen din lagayiye. Agar test set par precision 70% se kam hai, to ruk jayiye aur approach par dobara sochiye." Ek time-box ek unknown estimate ko ek known decision point mein badal deta hai.',
  'Pick the most uncertain story in your plan. Write a time-box for it: how long you will spend, what result counts as success, and what you will do if you do not reach it.':
    'Apne plan mein sabse uncertain story chuniye. Uske liye ek time-box likhiye: aap kitna time lagayenge, kaunsa result success ginega, aur agar aap wahan na pahunche to aap kya karenge.',
  'One time-box with a duration, a threshold and a fallback. The fallback matters most: it turns a failed experiment into a decision.':
    'Ek duration, ek threshold aur ek fallback wala time-box. Fallback sabse zyada matter karta hai: yeh ek fail hue experiment ko ek decision mein badal deta hai.',
  'Idea 5: Prototype at the right fidelity, and test without helping':
    'Idea 5: Sahi fidelity par prototype banayiye, aur madad kiye bina test kijiye',
  '<strong>Fidelity</strong> is how close a prototype is to the real thing. Match it to the question you are trying to answer:':
    '<strong>Fidelity</strong> yeh hai ki ek prototype real cheez ke kitna kareeb hai. Isey us sawaal se match kijiye jiska jawab aap dhoondh rahe hain:',
  'Fidelity':
    'Fidelity',
  'Tool':
    'Tool',
  'Good for testing':
    'Test karne ke liye achha',
  'Low':
    'Low',
  'Paper sketch':
    'Paper sketch',
  'Whether the flow makes sense':
    'Kya flow sense banata hai',
  'Clickable mock-up in Figma':
    'Figma mein clickable mock-up',
  'Whether users can find their way around':
    'Kya users apna raasta dhoondh sakte hain',
  'Working prototype in Lovable or Google AI Studio':
    'Lovable ya Google AI Studio mein working prototype',
  'Whether users trust and act on the real AI output':
    'Kya users real AI output par trust karte hain aur action lete hain',
  'For AI features, use real model output in your prototype, not perfect made-up examples. Users react differently to answers that are sometimes wrong, and that reaction is exactly what you need to learn about.':
    'AI features ke liye, apne prototype mein real model output use kijiye, perfect made-up examples nahi. Users un jawabon par alag react karte hain jo kabhi-kabhi galat hote hain, aur woh reaction hi wahi hai jo aapko seekhna hai.',
  'To run a <strong>usability test</strong>, give the user a task, not instructions. For example: “It is Monday morning. Find the biggest new problem from last week.” Then watch and stay quiet. Note where they hesitate, click the wrong thing or look confused.':
    'Ek <strong>usability test</strong> chalane ke liye, user ko ek task dijiye, instructions nahi. Jaise: "Monday morning hai. Pichhle hafte ka sabse bada naya problem dhoondhiye." Phir dekhiye aur chup rahiye. Note kijiye woh kahan hesitate karte hain, galat cheez click karte hain ya confused dikhte hain.',
  'The hardest part is not helping. When a user gets stuck, that is your finding. Three to five users will show you most of the serious problems.':
    'Sabse mushkil hissa madad na karna hai. Jab ek user atak jaata hai, wahi aapka finding hai. Teen se paanch users aapko zyadatar serious problems dikha denge.',
  'Write a usability test plan for your prototype: two task prompts, what you will watch for, and the one thing you most want to learn.':
    'Apne prototype ke liye ek usability test plan likhiye: do task prompts, aap kya dekhenge, aur woh ek cheez jo aap sabse zyada seekhna chahte hain.',
  'Two task prompts, what to watch for, key question…':
    'Do task prompts, kya dekhna hai, key question…',
  'A strong plan: <strong>Task 1:</strong> “It is Monday morning. Find the biggest new problem from last week.” <strong>Task 2:</strong> “You think one theme is wrong. Tell the tool.” <strong>Watch for:</strong> whether they open the themes or scroll the raw tickets first, how long before they trust a theme, and whether they find the correction button. <strong>Key question:</strong> would they paste these themes into their report without checking? If not, what would they need to see first?':
    'Ek strong plan: <strong>Task 1:</strong> "Monday morning hai. Pichhle hafte ka sabse bada naya problem dhoondhiye." <strong>Task 2:</strong> "Aapko lagta hai ek theme galat hai. Tool ko bataiye." <strong>Dekhiye:</strong> kya woh themes kholte hain ya pehle raw tickets scroll karte hain, ek theme par trust karne mein kitna time lagta hai, aur kya unhe correction button milta hai. <strong>Key question:</strong> kya woh check kiye bina in themes ko apni report mein paste karenge? Agar nahi, to pehle unhe kya dekhna chahiye?'

});
