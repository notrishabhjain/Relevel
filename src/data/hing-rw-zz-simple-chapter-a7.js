/* Hinglish for Specs, stories and prototypes: from decision to delivery (chapter:a7), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'You have a plan. Now you take one decision from it and turn it into something engineers can build and users can try. You will write a PRD (a recipe card for the product) that starts from the problem. You will break it into user stories (short notes about what a user wants), with edge cases (odd situations). Then you will cut an MVP (the smallest first version), plan two sprints (short work rounds), and test a clickable prototype (a rough model of the screens) with real users.':
    'Aapke paas plan hai. Ab aap usmein se ek faisla lekar use aisi cheez banate hain jo engineers bana sakein aur users aazma sakein. Aap PRD likhenge (product ka recipe card), jo samasya se shuru hota hai. Use user stories mein todenge (user kya chahta hai, uske chhote note), edge cases ke saath (anokhi sthitiyan). Phir aap MVP kaatenge (sabse chhota pehla version), do sprints plan karenge (kaam ke chhote daur), aur asli users ke saath clickable prototype test karenge (screens ka rough model).',
  'Write a PRD that starts from the problem. Give it acceptance criteria (tests that say when it is done) that you can measure.':
    'Aisa PRD likhiye jo samasya se shuru ho. Usmein acceptance criteria dijiye (jaanch jo batayein ki kaam kab poora hua) jinhe aap naap sakein.',
  'Write user stories and job stories. Cover the odd cases, including what the user sees when the AI gets it wrong.':
    'User stories aur job stories likhiye. Anokhe cases bhi shamil kijiye, aur yeh bhi ki AI ke galat hone par user kya dekhta hai.',
  'Cut an MVP into one thin slice that works from start to end. It tests the thing you are most afraid of getting wrong.':
    'MVP ko ek patle tukde mein kaatiye jo shuru se aakhir tak chalta hai. Woh us cheez ko test karta hai jiske galat hone ka aapko sabse zyaada darr hai.',
  'Plan sprints. For AI work you cannot guess, set a time limit (a time-box). Then hold a retrospective (a look back at what happened).':
    'Sprints plan kijiye. Jis AI kaam ka andaaza nahi lag sakta, uske liye time limit lagaiye (time-box). Phir retrospective kijiye (peeche mudkar dekhna ki kya hua).',
  'Pick how rough or polished the prototype should be. Run a usability test (watching people try it) without hinting.':
    'Chuniye ki prototype kitna rough ya polished ho. Usability test chalaiye (logon ko use karte dekhna) bina ishaara diye.',
  'Write the requirements, test a first prototype and plan two sprints':
    'Requirements likhiye, pehla prototype test kijiye aur do sprints plan kijiye',
  'Now you describe exactly what version 1 of the developer kit must do. You show a rough version to real people. And you plan the work. In this chapter you learned to write a requirements document (a PRD), which starts from the problem. You learned to choose how polished a prototype should be. You learned to plan sprints that include work you cannot guess. Here you do all three.':
    'Ab aap bilkul saaf likhte hain ki developer kit ka version 1 kya karega. Aap asli logon ko ek rough version dikhate hain. Aur kaam ka plan banate hain. Is chapter mein aapne requirements document (PRD) likhna seekha, jo samasya se shuru hota hai. Aapne seekha ki prototype kitna polished ho. Aapne un sprints ka plan banana seekha jinmein aisa kaam hai jiska andaaza nahi. Yahan aap teeno karte hain.',
  'Written only for the requirements and the plan, plus a prototype with no code. The <a href="#/playground">Playground</a> in this app is enough for a first version. Google AI Studio or Lovable can turn it into a clickable screen. No Python needed.':
    'Requirements aur plan sirf likhne hain, aur ek prototype bina code ke. Pehle version ke liye is app ka <a href="#/playground">Playground</a> kaafi hai. Google AI Studio ya Lovable use clickable screen bana sakte hain. Python ki zaroorat nahi.',
  'Write a requirements document (a PRD) with these headings: the problem and the proof for it; who it is for; what is in version 1; what is not in version 1; what the user sees in each situation, including when the tool is unsure or wrong; how the AI behaves; how you will test it; how you will measure success; how it will be released; security; and open questions.':
    'Requirements document (PRD) in headings ke saath likhiye: samasya aur uska saboot; yeh kiske liye hai; version 1 mein kya hai; version 1 mein kya nahi hai; har sthiti mein user kya dekhta hai, tab bhi jab tool pakka nahi ya galat ho; AI kaise vyavhaar karta hai; aap ise kaise test karenge; safalta kaise naapenge; ise kaise release karenge; security; aur khule sawaal.',
  'Under “what is in version 1” and “what is not in version 1”, draw a clear line. Say which kinds of writing, which IDs, and which of the kit, the gateway and the extension you will really build.':
    '“Version 1 mein kya hai” aur “version 1 mein kya nahi hai” ke neeche saaf line kheenchiye. Likhiye ki kis tarah ki likhawat, kaun se IDs, aur kit, gateway aur extension mein se kya aap sach mein banayenge.',
  'Write six user stories in the form “As a [who], I want [what], so that [why]”. At least two must be about something going wrong. For example: “As a developer, I want to be told when the tool is unsure, so that I can ask the user.”':
    'Chhe user stories likhiye is dhang mein: “Main [kaun] hoon, mujhe [kya] chahiye, taaki [kyun]”. Kam se kam do mein kuch galat hona hona chahiye. Jaise: “Main developer hoon, mujhe tab bataya jaye jab tool pakka na ho, taaki main user se pooch sakoon.”',
  'Build a clickable prototype. It is a page with a text box, a button and a result area. The result shows the text with personal details swapped out. The quickest first version is the <a href="#/playground">Playground</a> in this app: the system prompt (the standing instructions on the shop wall) is your detector, and the message box is the text box. For a screen you can hand to a user, Google AI Studio or Lovable will make one. The detection can be fake for now, because you are testing the screen, not how right it is.':
    'Ek clickable prototype banaiye. Yeh ek page hai jismein text box, ek button aur result ki jagah hai. Result mein woh text dikhta hai jisme nijee jaankari badal di gayi hai. Sabse tez pehla version is app ka <a href="#/playground">Playground</a> hai: system prompt (deewar par lage niyam) aapka detector hai, aur message box text box hai. User ko dene layak screen ke liye Google AI Studio ya Lovable ek bana denge. Abhi detection nakli ho sakta hai, kyunki aap screen test kar rahe hain, sahi hone ki jaanch nahi.',
  'Ask three real people to try it. Give each the same task, such as “paste this message and tell me what you think happened to it”. Do not help them. Write down where each person got stuck.':
    'Teen asli logon se ise aazmane ko kahiye. Sabko ek hi kaam dijiye, jaise “yeh message paste kijiye aur bataiye aapko kya lagta hai iske saath kya hua”. Unki madad mat kijiye. Likhiye ki har insaan kahan atka.',
  'Plan two one-week sprints in a spreadsheet or in Jira (a tool teams use to track work). For each story, write what counts as done, what it needs from others, and what you will show at the end. After the first sprint, hold a short review. Write down what you will change.':
    'Ek spreadsheet ya Jira mein (jis tool se teams kaam ka hisaab rakhti hain) do ek-hafte ke sprints plan kijiye. Har story ke liye likhiye ki “ho gaya” kise maana jayega, use doosron se kya chahiye, aur aakhir mein aap kya dikhayenge. Pehle sprint ke baad chhota review kijiye. Likhiye ki aap kya badlenge.',
  'A requirements document that an engineer could size up without asking you what success means.':
    'Ek requirements document jiska andaaza engineer aapse poochhe bina laga sake ki safalta ka matlab kya hai.',
  'Six user stories. At least two are about things going wrong.':
    'Chhe user stories. Kam se kam do mein kuch galat ho raha hai.',
  'A clickable prototype, and notes from three people who tried it.':
    'Ek clickable prototype, aur use aazmane wale teen logon ke notes.',
  'A two-sprint plan, with a review after the first sprint.':
    'Do sprints ka plan, pehle sprint ke baad review ke saath.',
  'An outcome roadmap (a map of changes you want, in order)':
    'Outcome roadmap (aap jo badlav chahte hain, unka kram se naksha)',
  'The PRD describes the first item in its “now” column, like a recipe card for the first dish on the menu.':
    'PRD uske “now” column ka pehla item batata hai, jaise menu ki pehli dish ka recipe card.',
  'Your riskiest unknown (the thing you are least sure about)':
    'Aapka sabse risky anjaan (jis cheez par aap sabse kam pakke hain)',
  'The MVP should test it, like tasting the soup before you cook the whole meal.':
    'MVP ko ise test karna chahiye, jaise poora khana banane se pehle soup chakhna.',
  'In full, this chapter takes about 14 hours, spread across a week or more because of the user tests. For the prototype, the <a href="#/playground">Playground</a> in this app is enough to start. A free account on Figma, Lovable or Google AI Studio gives you a nicer screen. For the sprint plan you need Jira (free tier) or a spreadsheet. Core chapter 18 goes deeper on AI PRDs. This chapter covers the basics of managing a product.':
    'Poora karne mein is chapter ko lagbhag 14 ghante lagte hain, jo user tests ki wajah se ek hafte ya zyaada mein failte hain. Prototype ke liye is app ka <a href="#/playground">Playground</a> shuru karne ko kaafi hai. Figma, Lovable ya Google AI Studio ka free account behtar screen deta hai. Sprint plan ke liye aapko Jira (free tier) ya spreadsheet chahiye. Core chapter 18 AI PRDs par aur gehraai se jata hai. Yeh chapter product sambhalne ki buniyaad batata hai.',
  'In A6 you made a plan: a roadmap, goals with numbers, and a map of the people involved. But an engineer still cannot start building from it on Monday. For that, the first item on your roadmap needs a detailed description, like a recipe a cook can follow.':
    'A6 mein aapne plan banaya: ek roadmap, numbers wale goals, aur jude logon ka naksha. Phir bhi engineer Monday ko ismein se banana shuru nahi kar sakta. Uske liye aapke roadmap ke pehle item ka vistaar se vivaran chahiye, aise recipe jaisa jise cook follow kar sake.',
  'This chapter shows you how. You will write that description. You will cut the work into small pieces. You will build a rough model of the screens. And you will watch real people use it.':
    'Yeh chapter aapko tareeka dikhata hai. Aap woh vivaran likhenge. Kaam ko chhote tukdon mein kaatenge. Screens ka rough model banayenge. Aur asli logon ko use karte dekhenge.',
  'Idea 1: Start the PRD from the problem':
    'Idea 1: PRD ko samasya se shuru kijiye',
  'Let us start with the description itself. It is called a <strong>PRD</strong>, short for product requirements document. Think of it as the recipe card for a dish: it says what to build and why.':
    'Chaliye vivaran se hi shuru karte hain. Ise <strong>PRD</strong> kehte hain, yaani product requirements document. Ise dish ka recipe card samajhiye: yeh batata hai ki kya banana hai aur kyun.',
  'A good PRD starts with the problem and the proof for it. Only then does it describe the answer. Why this order? Engineers decide better when they know the problem they are solving.':
    'Achha PRD samasya aur uske saboot se shuru hota hai. Uske baad hi woh hal batata hai. Yeh kram kyun? Engineers behtar faisle lete hain jab unhe pata ho ki woh kaun si samasya hal kar rahe hain.',
  'A PRD for an AI feature has these parts, in this order.':
    'AI feature ke PRD mein yeh hisse is kram mein hote hain.',
  '<strong>Problem and evidence.</strong> What is wrong today, for whom, and how you know.':
    '<strong>Samasya aur saboot.</strong> Aaj kya galat hai, kiske liye, aur aapko kaise pata.',
  '<strong>Users.</strong> Who this is for, and who it is not for.':
    '<strong>Users.</strong> Yeh kiske liye hai, aur kiske liye nahi.',
  '<strong>Scope and non-goals.</strong> What is in, and what you leave out on purpose.':
    '<strong>Scope aur non-goals.</strong> Kya andar hai, aur kya aap jaanbujh kar bahar rakhte hain.',
  '<strong>UX states.</strong> What the user sees when it works, when it is unsure, when it fails and when it refuses.':
    '<strong>UX states.</strong> User kya dekhta hai jab yeh chalta hai, jab pakka nahi hota, jab fail hota hai aur jab mana kar deta hai.',
  '<strong>AI behaviour.</strong> What the model does, what you hand it, and what it must never do.':
    '<strong>AI ka vyavhaar.</strong> Model kya karta hai, aap use kya dete hain, aur woh kya kabhi nahi kar sakta.',
  '<strong>Evaluations.</strong> The test set (questions with known answers) and the pass mark.':
    '<strong>Evaluations.</strong> Test set (jawaab pata wale sawaal) aur pass hone ka number.',
  '<strong>Metrics, rollout and security.</strong> How you will measure success, release step by step, and keep data safe.':
    '<strong>Metrics, rollout aur security.</strong> Safalta kaise naapenge, kadam-kadam par release kaise karenge, aur data surakshit kaise rakhenge.',
  '<strong>Open questions.</strong> What you do not know yet.':
    '<strong>Khule sawaal.</strong> Jo aapko abhi nahi pata.',
  'The most important part is the <strong>acceptance criteria</strong>. They are the tests that tell you the feature is done, like the answer key for a homework. Each one must be something you can check.':
    'Sabse zaroori hissa hai <strong>acceptance criteria</strong>. Yeh woh jaanch hain jo batati hain ki feature poora ho gaya, jaise homework ki answer key. Har ek aisi hona chahiye jise aap check kar sakein.',
  'An AI feature gives slightly different answers each time. So its criteria describe a rate over a test set, not one right answer. The table puts vague wishes next to criteria you can really check.':
    'AI feature har baar thode alag jawaab deta hai. Isliye uske criteria ek test set par dar batate hain, ek sahi jawaab nahi. Table dhundhli ichchhaon ko aise criteria ke saath rakhta hai jinhe aap sach mein check kar sakte hain.',
  'Cannot be checked':
    'Check nahi ho sakta',
  'Can be checked':
    'Check ho sakta hai',
  'Themes (topic labels) are accurate':
    'Themes (topic ke label) sahi hain',
  'On the 50-ticket test set, at least 85% of themes match the lead’s own grouping':
    '50-ticket ke test set par, kam se kam 85% themes lead ki apni grouping se milte hain',
  'It is fast':
    'Yeh tez hai',
  'The weekly report is ready within 2 minutes for up to 1,000 tickets':
    '1,000 tickets tak ki weekly report 2 minute ke andar taiyaar ho jati hai',
  'It handles bad input':
    'Yeh kharab input sambhalta hai',
  'If fewer than 20 tickets are imported, it says so and does not make themes':
    'Agar 20 se kam tickets aate hain, to yeh bata deta hai aur themes nahi banata',
  'Government projects often start from a requirements specification: a long list of what the system must do. It says what to build. A PRD starts one step earlier, with the problem and the proof. It ends with a pass rate you can check. If you have signed off a specification, rewrite one line of it as a criterion you can check.':
    'Sarkari projects aksar requirements specification se shuru hote hain: system ko kya karna hai, uski lambi list. Yeh batati hai kya banana hai. PRD ek kadam pehle shuru hota hai, samasya aur saboot se. Yeh ek aise pass rate par khatam hota hai jise aap check kar sakein. Agar aapne koi specification sign ki hai, to uski ek line ko check ho sakne wale criterion ki tarah dobara likhiye.',
  'There is a fillable AI PRD template (a blank form) in the <a href="#/templates/prd">workbench</a>. Use it for the Build it task.':
    '<a href="#/templates/prd">workbench</a> mein bharne wala AI PRD template (khaali form) hai. Build it task ke liye ise use kijiye.',
  'Write three acceptance criteria for your capstone’s first feature. Make each one checkable: a number, a test set or a clear condition.':
    'Apne capstone ke pehle feature ke liye teen acceptance criteria likhiye. Har ek ko check ke laayak banaiye: ek number, ek test set ya saaf shart.',
  'You should have three criteria. For each one, ask yourself: could two people disagree about whether it passed? If yes, it cannot be checked yet.':
    'Aapke paas teen criteria hone chahiye. Har ek ke liye khud se poochiye: kya do log is baat par asahmat ho sakte hain ki yeh pass hua ya nahi? Agar haan, to ise abhi check nahi kiya ja sakta.',
  'Idea 2: Break the work into stories, including the odd cases':
    'Idea 2: Kaam ko stories mein todiye, anokhe cases ke saath',
  'A PRD describes the whole feature. To build it, the team needs smaller pieces, like cutting a big roti into bites. The usual piece is a <strong>user story</strong>. It describes one bit of value from the user’s point of view.':
    'PRD poore feature ko batata hai. Ise banane ke liye team ko chhote tukde chahiye, jaise badi roti ko nivalon mein todna. Aam tukda hai <strong>user story</strong>. Yeh user ki nazar se ek chhota fayda batati hai.',
  'There is a second kind. A <strong>job story</strong> starts from the situation, not the role. This often gives engineers more useful context.':
    'Ek doosri tarah bhi hai. <strong>Job story</strong> role se nahi, sthiti se shuru hoti hai. Isse engineers ko aksar zyaada kaam ka sandarbh milta hai.',
  'Every story needs acceptance criteria. It also needs <strong>edge cases</strong>. These are the unusual inputs and states that break things, like a rainy day that breaks the cricket match plan. AI features have extra edge cases that ordinary software does not. The table lists the common ones, with what should happen in each.':
    'Har story ko acceptance criteria chahiye. Use <strong>edge cases</strong> bhi chahiye. Yeh woh anokhe inputs aur sthitiyan hain jo cheezein tod deti hain, jaise barish ka din jo cricket match ka plan bigaad deta hai. AI features mein extra edge cases hote hain jo aam software mein nahi hote. Table mein aam wale hain, aur har ek mein kya hona chahiye.',
  'Edge case (an odd situation)':
    'Edge case (anokhi sthiti)',
  'No clear themes this week':
    'Is hafte koi saaf themes nahi',
  'Say so. Do not make up themes.':
    'Yeh bata dijiye. Themes gadhiye mat.',
  'Tickets in another language':
    'Doosri bhasha mein tickets',
  'Group them, or mark them clearly. Never drop them without telling anyone.':
    'Unhe group kijiye, ya saaf mark kijiye. Chupchaap kabhi mat girayiye.',
  'Model takes too long and gives up (times out)':
    'Model bahut der leta hai aur ruk jata hai (time out)',
  'Show last week’s report with a notice':
    'Pichle hafte ki report ek notice ke saath dikhaiye',
  'Model is unsure':
    'Model pakka nahi hai',
  'Mark the theme as low confidence':
    'Theme ko low confidence mark kijiye',
  'Ticket has personal data (someone’s private details)':
    'Ticket mein nijee data hai (kisi ki private jaankari)',
  'Take it out before you send the text to the model':
    'Text model ko bhejne se pehle use hata dijiye',
  'Write one user story for your capstone, with two acceptance criteria and three edge cases. Make at least one edge case about AI.':
    'Apne capstone ke liye ek user story likhiye, do acceptance criteria aur teen edge cases ke saath. Kam se kam ek edge case AI ke baare mein rakhiye.',
  'You should have one story, two criteria and three edge cases. The AI one is usually about doubt, wrong answers or the model saying no.':
    'Aapke paas ek story, do criteria aur teen edge cases hone chahiye. AI wala aksar shak, galat jawaab ya model ke mana karne ke baare mein hota hai.',
  'Idea 3: Build a thin slice that works from start to end':
    'Idea 3: Ek patla tukda banaiye jo shuru se aakhir tak chalta ho',
  'You have stories. Which one do you build first? The answer is an <strong>MVP</strong>, a minimum viable product. It is the smallest thing that tests your riskiest guess with real users. It is not a small copy of the whole product.':
    'Aapke paas stories hain. Pehle kaun si banayein? Jawaab hai <strong>MVP</strong>, yaani minimum viable product. Yeh sabse chhoti cheez hai jo asli users ke saath aapke sabse risky andaaze ko test karti hai. Yeh poore product ki chhoti nakal nahi hai.',
  'How you cut the work makes a big difference. There are two ways.':
    'Aap kaam ko kaise kaatate hain, isse bahut fark padta hai. Do tareeke hain.',
  '<strong>Horizontal slices</strong> build one layer at a time, like laying one floor of a building at a time. First all the data import, then all the processing, then all the screen. Nothing works for a user until the last layer is done.':
    '<strong>Horizontal slices</strong> ek baar mein ek layer banate hain, jaise imaarat ki ek manzil ek baar mein. Pehle poora data import, phir poori processing, phir poori screen. Aakhri layer poori hone tak user ke liye kuch nahi chalta.',
  '<strong>Vertical slices</strong> build a thin version of every layer, like a thin slice of layered cake. A user can try something from the first week.':
    '<strong>Vertical slices</strong> har layer ka patla version banate hain, jaise layer wale cake ka patla tukda. User pehle hafte se kuch aazma sakta hai.',
  'Vertical slices are the better choice here. For the ticket example, the first vertical slice looks like this.':
    'Yahan vertical slices behtar hain. Ticket ke udaharan mein pehla vertical slice aisa dikhta hai.',
  'Build the thinnest slice that lets a real user try the core value. Everything else can wait until you know it works.':
    'Sabse patla tukda banaiye jisse asli user mukhya fayda aazma sake. Baaki sab tab tak ruk sakta hai jab tak aapko pata na chale ki yeh chalta hai.',
  'Draw your capstone’s first vertical slice as one line, like the example above. Then list what you are leaving out on purpose.':
    'Apne capstone ka pehla vertical slice ek line mein banaiye, upar ke udaharan ki tarah. Phir likhiye ki aap jaanbujh kar kya chhod rahe hain.',
  'You should have one line from input to user value, and a list of things left out. If the line has more than six steps, look for a step you can do by hand in the first version.':
    'Aapke paas input se user ke fayde tak ek line, aur chhodi gayi cheezon ki list honi chahiye. Agar line mein chhe se zyaada kadam hain, to dekhiye ki kaun sa kadam pehle version mein haath se ho sakta hai.',
  'Idea 4: Plan sprints, guess honestly, and look back after each one':
    'Idea 4: Sprints plan kijiye, imaandaari se andaaza lagaiye, aur har ek ke baad peeche dekhiye',
  'Once you know what to build first, you need a rhythm for building it. Many teams work in <strong>sprints</strong>, which are fixed work rounds of one or two weeks, like a school term. Each sprint starts with planning. It ends with a demo (showing what works) and a retrospective (looking back).':
    'Jab aap jaan lein ki pehle kya banana hai, to use banane ki ek lay chahiye. Bahut si teams <strong>sprints</strong> mein kaam karti hain, yaani ek ya do hafte ke tay kaam ke daur, school term ki tarah. Har sprint planning se shuru hota hai. Woh demo (jo chalta hai use dikhana) aur retrospective (peeche dekhna) par khatam hota hai.',
  '<strong>Planning.</strong> Pick the stories that fit what the team can do. Start with the most important.':
    '<strong>Planning.</strong> Woh stories chuniye jo team ki kshamta mein fit hon. Sabse zaroori se shuru kijiye.',
  '<strong>Estimation.</strong> Size stories against each other, using points or T-shirt sizes (S, M, L). It is easier to agree on small, medium and large than on hours.':
    '<strong>Estimation.</strong> Stories ko ek doosre se naapiye, points ya T-shirt sizes (S, M, L) se. Ghanton se zyaada small, medium aur large par sahmat hona aasaan hai.',
  '<strong>Demo.</strong> Show software that works, not slides.':
    '<strong>Demo.</strong> Chalta hua software dikhaiye, slides nahi.',
  '<strong>Retrospective.</strong> Ask three questions: what went well, what did not, and what will we change next sprint?':
    '<strong>Retrospective.</strong> Teen sawaal poochiye: kya achha gaya, kya nahi, aur agle sprint mein hum kya badlenge?',
  'AI work is hard to guess, because you do not know how good the model will be until you try. So <strong>time-box</strong> the unsure work instead. A time-box is a fixed amount of time, like a timer on a kitchen counter. For example: “Spend three days. If precision on the test set is below 70%, stop and rethink the approach.”':
    'AI ke kaam ka andaaza lagana mushkil hai, kyunki model kitna achha hoga yeh try kiye bina pata nahi chalta. Isliye anjaan kaam ko <strong>time-box</strong> kijiye. Time-box tay samay hota hai, jaise rasoi ke counter par timer. Jaise: “Teen din lagaiye. Agar test set par precision 70% se neeche ho, to ruk kar tareeka dobara sochiye.”',
  'A time-box turns a guess you cannot make into a stop-and-decide point you can plan around.':
    'Time-box us andaaze ko, jo aap laga nahi sakte, ek aise rukne-aur-faisla-karne ke bindu mein badal deta hai jiske aas-paas aap plan bana sakte hain.',
  'Pick the most unsure story in your plan. Write a time-box for it: how long you will spend, what result counts as success, and what you will do if you do not reach it.':
    'Apne plan ki sabse anjaan story chuniye. Uske liye time-box likhiye: kitna samay lagayenge, kaun sa nateeja safalta maana jayega, aur agar wahan na pahunche to kya karenge.',
  'You should have one time-box with a length of time, a pass mark and a fallback (what you do instead). The fallback matters most, because it turns a failed try into a decision.':
    'Aapke paas ek time-box hona chahiye jismein samay ki lambai, pass hone ka number aur ek fallback (uske bajaye kya karenge) ho. Fallback sabse zaroori hai, kyunki woh fail hue prayaas ko faisle mein badal deta hai.',
  'Idea 5: Make the prototype as polished as you need, and test without helping':
    'Idea 5: Prototype utna hi polished banaiye jitna zaroori ho, aur bina madad diye test kijiye',
  'Before the team builds anything real, it helps to show people a rough version, like a paper model of a house. How rough? That depends on what you want to learn. <strong>Fidelity</strong> is how close a prototype is to the real thing. Match it to your question.':
    'Team kuch asli banaye us se pehle logon ko rough version dikhana madad karta hai, jaise ghar ka kaagaz ka model. Kitna rough? Yeh is par nirbhar hai ki aap kya seekhna chahte hain. <strong>Fidelity</strong> yeh hai ki prototype asli cheez ke kitne kareeb hai. Ise apne sawaal se milaiye.',
  'Fidelity (how close to real)':
    'Fidelity (asli ke kitne kareeb)',
  'Tool (what you make it with)':
    'Tool (ise kis se banate hain)',
  'Good for testing':
    'Kis ki jaanch ke liye achha',
  'Paper sketch':
    'Kaagaz par sketch',
  'Whether the steps make sense':
    'Kya kadam samajh mein aate hain',
  'Clickable mock-up in Figma (a design tool)':
    'Figma mein clickable mock-up (ek design tool)',
  'Whether users can find their way around':
    'Kya users apna raasta dhoondh sakte hain',
  'Working prototype: the Playground, Lovable or Google AI Studio':
    'Chalta hua prototype: Playground, Lovable ya Google AI Studio',
  'Whether users trust the real AI answer and act on it':
    'Kya users asli AI jawaab par bharosa karke kaam karte hain',
  'For AI features, use real model replies in your prototype, not perfect made-up ones. Users react differently to answers that are sometimes wrong. That reaction is exactly what you need to learn about.':
    'AI features ke liye prototype mein model ke asli jawaab use kijiye, perfect banaye hue nahi. Users un jawaabon par alag react karte hain jo kabhi-kabhi galat hote hain. Wahi reaction aapko jaanna hai.',
  'Then you run a <strong>usability test</strong>. That means you watch a person try your prototype. Give the user a task, not instructions. For example: “It is Monday morning. Find the biggest new problem from last week.” Then watch and stay quiet. Note where they pause, click the wrong thing or look lost.':
    'Phir aap <strong>usability test</strong> chalate hain. Matlab aap ek insaan ko apna prototype aazmate dekhte hain. User ko kaam dijiye, nirdesh nahi. Jaise: “Monday subah hai. Pichle hafte ki sabse badi nayi samasya dhoondhiye.” Phir dekhiye aur chup rahiye. Likhiye ki woh kahan ruke, galat cheez par click kiya ya uljhe hue lage.',
  'The hardest part is not helping. When a user gets stuck, that is your finding. Three to five users will show you most of the serious problems.':
    'Sabse mushkil hai madad na karna. Jab user atak jata hai, wahi aapki khoj hai. Teen se paanch users aapko zyaadatar gambhir samasyayein dikha denge.',
  'Write a usability test plan for your prototype: two task prompts, what you will watch for, and the one thing you most want to learn.':
    'Apne prototype ke liye usability test plan likhiye: do kaam, aap kya dekhenge, aur woh ek cheez jo aap sabse zyaada seekhna chahte hain.',
  'Two task prompts, what to watch for, key question…':
    'Do kaam, kya dekhna hai, mukhya sawaal…',
  'A strong plan: <strong>Task 1:</strong> “It is Monday morning. Find the biggest new problem from last week.” <strong>Task 2:</strong> “You think one theme is wrong. Tell the tool.” <strong>Watch for:</strong> whether they open the themes or scroll the raw tickets first, how long before they trust a theme, and whether they find the correction button. <strong>Key question:</strong> would they paste these themes into their report without checking? If not, what would they need to see first?':
    'Ek mazboot plan: <strong>Task 1:</strong> “Monday subah hai. Pichle hafte ki sabse badi nayi samasya dhoondhiye.” <strong>Task 2:</strong> “Aapko lagta hai ek theme galat hai. Tool ko bataiye.” <strong>Kya dekhna hai:</strong> kya woh pehle themes kholte hain ya kachche tickets scroll karte hain, theme par bharosa karne mein kitni der lagti hai, aur kya unhe correction button milta hai. <strong>Mukhya sawaal:</strong> kya woh in themes ko bina check kiye apni report mein paste karenge? Agar nahi, to pehle unhe kya dekhna padega?',
  'Let us pull the chapter together. A PRD starts from the problem and has acceptance criteria you can check. User stories and edge cases break it into pieces. The AI edge cases are the ones teams forget most often.':
    'Chaliye chapter ko ek saath rakhte hain. PRD samasya se shuru hota hai aur uske acceptance criteria aise hote hain jinhe aap check kar sakein. User stories aur edge cases ise tukdon mein todte hain. AI wale edge cases woh hain jinhe teams sabse zyaada bhoolti hain.',
  'You also learned three more things. Build a thin vertical slice first. Put a time-box on AI work you cannot guess. Test a prototype by watching quietly, not by helping.':
    'Aapne teen cheezein aur seekhin. Pehle patla vertical slice banaiye. Jis AI kaam ka andaaza nahi, us par time-box lagaiye. Prototype ko chupchaap dekhkar test kijiye, madad karke nahi.',
  'Next, in A8, you will step back from product management. You will learn how generative AI models (models that write new words for you) really work.':
    'Aage A8 mein aap product management se ek kadam peeche hatenge. Aap seekhenge ki generative AI models (jo aapke liye naye shabd likhte hain) asal mein kaise kaam karte hain.',
});
