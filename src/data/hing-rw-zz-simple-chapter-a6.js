/* Hinglish for Roadmaps, OKRs and getting stakeholders on board (chapter:a6), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'You have a strategy, which is your plan for what to build and why. Now you turn it into something a team can follow and bosses can back. You will make a roadmap (a map of what to do, in order), write OKRs (goals with numbers), draw who can say no, and run a pre-mortem (a failure rehearsal).':
    'Aapke paas strategy hai, yaani kya banana hai aur kyun, iski yojana. Ab aap ise aisi cheez banayenge jise team follow kar sake aur bade log support karein. Aap roadmap banayenge (kya kab karna hai, uska naksha), OKRs likhenge (numbers wale goals), dekhenge ki kaun “nahi” bol sakta hai, aur ek pre-mortem karenge (fail hone ki riharsal).',
  'Make a now/next/later roadmap (a map of what to do first, next and later). Each item says what should change, and its kill criterion (when to stop).':
    'Now/next/later roadmap banaiye (kya pehle, phir, aur baad mein karna hai, uska naksha). Har item batata hai ki kya badalna chahiye, aur uska kill criterion (kab rukna hai).',
  'Write one goal in words. Then add key results (numbers that show you got there), input metrics and guardrail metrics. A guardrail is like the railing on a bridge.':
    'Ek goal shabdon mein likhiye. Phir key results jodiye (woh numbers jo dikhate hain ki aap wahan pahunche), input metrics aur guardrail metrics. Guardrail pul ki railing jaisa hota hai.',
  'Draw a grid of people. Mark who has power and who cares. Name the person who can say no and stop the plan.':
    'Logon ka ek grid banaiye. Likhiye kiske paas taakat hai aur kise parwah hai. Us insaan ka naam likhiye jo “nahi” bol kar plan rok sakta hai.',
  'Write a short memo that asks the boss for a yes or no. Before you start, run a pre-mortem: imagine the project failed and ask why.':
    'Ek chhota memo likhiye jo boss se haan ya na maangta hai. Shuru karne se pehle pre-mortem chalaiye: sochiye ki project fail ho gaya, aur poochiye kyun.',
  'List what you need from other people, and what could go wrong. Do it early, so nothing surprises you later.':
    'Likhiye ki aapko doosron se kya chahiye, aur kya galat ho sakta hai. Yeh jaldi kijiye, taaki baad mein koi jhatka na lage.',
  'Turn the strategy into a plan other people can back':
    'Strategy ko aisa plan banaiye jiska doosre log saath dein',
  'A strategy that nobody can follow changes nothing. So you turn yours into a plan with dates and numbers, and you find out who must agree to it. In this chapter you learned to write a roadmap of outcomes (changes you want to see), goals with measurable key results, and a decision memo. Here you do all three. You end the plan at the point where the developer kit is ready to show.':
    'Jis strategy ko koi follow na kar sake, woh kuch nahi badalti. Isliye aap ise dates aur numbers wale plan mein badalte hain, aur dekhte hain ki kiski haan zaroori hai. Is chapter mein aapne seekha: outcomes (jo badlav aap dekhna chahte hain) ka roadmap, naapne layak key results wale goals, aur decision memo. Yahan aap teeno karte hain. Plan wahan khatam hota hai jahan developer kit dikhane ke liye taiyaar ho.',
  'Written only. A plan, a memo and a map of people. No code needed.':
    'Sirf likhna hai. Ek plan, ek memo aur logon ka naksha. Code ki zaroorat nahi.',
  'Draw a roadmap with three columns: Now, Next and Later. Fit it to the rest of this course. Now is the next few chapters. Later ends with a working demo of the developer kit at the Part V capstone. Each item must be an outcome, such as “a developer can paste text and see it cleaned”. A feature name alone is not enough.':
    'Teen columns wala roadmap banaiye: Now, Next aur Later. Ise course ke baaki hisse se milaiye. Now agle kuch chapters hain. Later Part V capstone par developer kit ke chalte demo par khatam hota hai. Har item ek outcome hona chahiye, jaise “developer text paste karke use saaf hote dekh sakta hai”. Sirf feature ka naam kaafi nahi.',
  'For every roadmap item, write four things: an owner, the proof that it matters, what it needs from others, and a stopping rule. The stopping rule is the result that would make you give up. For example: “Stop if fewer than half of the pattern checker’s results are right on my answer key.”':
    'Roadmap ke har item ke liye chaar cheezein likhiye: ek owner, saboot ki yeh zaroori hai, ise doosron se kya chahiye, aur ek stopping rule. Stopping rule woh nateeja hai jis par aap haar maan lenge. Jaise: “Agar pattern checker ke aadhe se kam results meri answer key par sahi hon, to ruk jaiye.”',
  'Write one objective (the goal, in words). Then write three or four key results (the goal’s numbers). Keep two kinds apart. Product results are about people, like “five developers add the kit in under ten minutes”. Quality results are about the tool, like “the tool finds at least 90 of every 100 Aadhaar numbers”.':
    'Ek objective likhiye (goal, shabdon mein). Phir teen ya chaar key results likhiye (goal ke numbers). Do tarah ke results alag rakhiye. Product results logon ke baare mein hote hain, jaise “paanch developers kit ko das minute se kam mein jodte hain”. Quality results tool ke baare mein hote hain, jaise “tool har 100 mein se kam se kam 90 Aadhaar numbers dhoondhta hai”.',
  'Add one guardrail. It is a number you refuse to let get worse while you chase the others, like the railing on a bridge. For example: “False alarms stay below 5 in every 100 sentences.”':
    'Ek guardrail jodiye. Yeh woh number hai jise aap kharab nahi hone dete jab tak aap baaki numbers ke peeche bhaagte hain, pul ki railing ki tarah. Jaise: “Galat alarm har 100 vaakyon mein 5 se kam rahein.”',
  'Make a map of the people who will judge the project or be affected by it. They are: the developer who adds the kit, the compliance reviewer, the end user and an employer reading your portfolio. Mark each one high or low on influence (how much power they have). Mark each one high or low on interest (how much they care). Then name who could say no.':
    'Un logon ka naksha banaiye jo project ko parkhenge ya jin par asar padega. Yeh hain: kit jodne wala developer, compliance reviewer (jo rules check karta hai), end user aur aapka portfolio padhne wala employer. Har ek ko influence (kitni taakat) mein high ya low likhiye. Har ek ko interest (kitni parwah) mein high ya low likhiye. Phir naam likhiye ki kaun “nahi” bol sakta hai.',
  'Imagine it is a year from now and the project has failed. Write five reasons why. This is called a pre-mortem (a rehearsal of failure). For each reason, write one thing you will do now to make it less likely.':
    'Sochiye ki ek saal ho gaya hai aur project fail ho gaya. Iske paanch kaaran likhiye. Ise pre-mortem kehte hain (fail hone ki riharsal). Har kaaran ke liye ek kaam likhiye jo aap abhi karenge taaki woh kam hone ki sambhavna ho.',
  'Write a one-page memo to the person who decides. Ask for a yes or a no on the plan.':
    'Faisla karne wale ko ek page ka memo likhiye. Plan par haan ya na maangiye.',
  'A now, next and later roadmap. Every item is an outcome with a stopping rule.':
    'Ek now, next aur later roadmap. Har item ek outcome hai jiske saath stopping rule hai.',
  'One objective with three or four key results, and one guardrail.':
    'Ek objective, teen ya chaar key results ke saath, aur ek guardrail.',
  'A map of the people involved. The person who could say no is named.':
    'Jude hue logon ka naksha. Jo “nahi” bol sakta hai, uska naam likha ho.',
  'A pre-mortem with five reasons for failure, and an answer to each.':
    'Ek pre-mortem jismein fail hone ke paanch kaaran hon, aur har ek ka jawaab.',
  'A one-page decision memo (a short note that asks the boss to decide).':
    'Ek page ka decision memo (chhota note jo boss se faisla maangta hai).',
  'A written strategy':
    'Likhi hui strategy',
  'The roadmap turns your strategy into outcomes, in a sensible order, like a list of stops on a train route.':
    'Roadmap aapki strategy ko outcomes mein badalta hai, samajhdaar kram mein, jaise train route ke stations ki list.',
  'A prioritised list (a list sorted by what matters most)':
    'Prioritised list (sabse zaroori ke hisaab se lagayi list)',
  'It decides what goes in the “now” column, like choosing which errand to do first.':
    'Yeh tay karti hai ki “now” column mein kya jayega, jaise pehle kaun sa kaam nipatana hai yeh chunna.',
  'In full, this chapter takes about ten hours. Keep your strategy memo and RICE scores (the scores that ranked your ideas) from A5 open next to you. Also think about the people around your capstone: who pays for it, who says yes to it and who uses it.':
    'Poora karne mein is chapter ko lagbhag das ghante lagte hain. A5 ka apna strategy memo aur RICE scores (jin scores se aapke ideas ki ranking hui thi) paas mein khule rakhiye. Apne capstone ke aas-paas ke logon ke baare mein bhi sochiye: kaun paisa deta hai, kaun haan bolta hai aur kaun use karta hai.',
  'In A5 you chose what to do first and what not to do. But a plan on paper is only an idea. To make it real, a team needs steps it can follow. The people who hold the money and the approvals need a reason to say yes.':
    'A5 mein aapne chuna ki pehle kya karna hai aur kya nahi. Lekin kaagaz par likha plan sirf ek vichaar hai. Use asli banane ke liye team ko aise kadam chahiye jo woh follow kar sake. Jin logon ke paas paisa aur manzoori hai, unhe haan kehne ka kaaran chahiye.',
  'This chapter takes you from strategy to that plan. You will build a roadmap. You will set goals with numbers. You will find the people who can help or stop you. And you will imagine failure before it happens, like a fire drill.':
    'Yeh chapter aapko strategy se us plan tak le jata hai. Aap roadmap banayenge. Numbers wale goals tay karenge. Un logon ko dhoondhenge jo madad kar sakte hain ya rok sakte hain. Aur fail hone ko pehle hi sochenge, jaise fire drill.',
  'Idea 1: Roadmaps should promise outcomes, not dates':
    'Idea 1: Roadmap ko outcomes ka waada karna chahiye, dates ka nahi',
  'You have probably seen a roadmap that is a list of features with delivery dates. It looks sure. But the dates are guesses, and the features are hopes about what will help. When either one is wrong, the roadmap becomes a list of broken promises, like a train timetable that is always late.':
    'Aapne shayad aisa roadmap dekha hoga jo features ki list hai aur saath mein delivery ki dates. Woh pakka lagta hai. Par dates andaaze hain, aur features sirf ummeed hain ki kya kaam aayega. Dono mein se koi galat nikle to roadmap toote waadon ki list ban jata hai, jaise hamesha late chalne wali train ka time-table.',
  'There is a better way. An <strong>outcome roadmap</strong> (a map of changes you want, not dates) uses three columns instead of dates. The table shows what each column means and how sure you can be.':
    'Ek behtar tareeka hai. <strong>Outcome roadmap</strong> (dates ka nahi, aap jo badlav chahte hain unka naksha) dates ki jagah teen columns use karta hai. Table dikhata hai ki har column ka matlab kya hai aur aap kitne pakke ho sakte hain.',
  'How sure we are':
    'Hum kitne pakke hain',
  'What we are doing now':
    'Hum abhi kya kar rahe hain',
  'Promised':
    'Pakka waada',
  'What we expect to do after that':
    'Uske baad hum kya karne ki ummeed rakhte hain',
  'Likely, but may change':
    'Shayad hoga, par badal sakta hai',
  'What we are looking into':
    'Hum kya dekh rahe hain',
  'Ideas, sorted by what we think today':
    'Ideas, aaj ki soch ke hisaab se lage',
  'Each item in a column is an outcome, which means a change you want to see. Next to it you write the details that help you manage it, like the label on a file folder. Here is one item filled in.':
    'Column ka har item ek outcome hai, yaani ek badlav jo aap dekhna chahte hain. Uske saath aap woh details likhte hain jo use sambhalne mein madad karti hain, file folder ke label ki tarah. Yahan ek item bhara hua hai.',
  'Support leads (the people who run the help desk) spot new issues within their first week':
    'Support leads (help desk chalane wale log) pehle hafte ke andar naye issues pakad lete hain',
  '3 of 5 interviews described missing a fast-growing issue':
    '5 mein se 3 interviews mein bataya gaya ki tezi se badhta issue chhoot gaya',
  'Product manager and one engineer':
    'Product manager aur ek engineer',
  'Dependency (something you need from others)':
    'Dependency (jo aapko doosron se chahiye)',
  'Read access to the Freshdesk API (a way for programs to talk to Freshdesk)':
    'Freshdesk API tak read access (ek raasta jisse programs Freshdesk se baat karte hain)',
  'Stop if fewer than half of design partners act on an alert within four weeks':
    'Ruk jaiye agar chaar hafte mein aadhe se kam design partners alert par kaam karte hain',
  'Outcome roadmaps matter even more for AI work. You often cannot know in advance if a model will be good enough. It is like a parrot that has read a whole library: you only find out how well it answers when you test it. So a date promised before testing is only a guess.':
    'AI ke kaam mein outcome roadmap aur zaroori hain. Aksar pehle se pata nahi hota ki model kaafi achha hoga ya nahi. Yeh us tote jaisa hai jisne poori library padh li ho: woh kitna achha jawaab deta hai, yeh test karke hi pata chalta hai. Isliye test se pehle di gayi date sirf andaaza hai.',
  'A kill criterion (a rule for when to stop) set in advance makes it much easier to stop work that has gone wrong. Think of agreeing before a trip when you will turn back.':
    'Pehle se tay kiya gaya kill criterion (kab rukna hai, uska niyam) bigde hue kaam ko rokna bahut aasaan bana deta hai. Sochiye safar se pehle tay karna ki kab laut jayenge.',
  'Write one “now” item for your capstone as an outcome. Fill in all five fields from the table.':
    'Apne capstone ke liye ek “now” item outcome ki tarah likhiye. Table ke saare paanch khaane bharein.',
  'You should have one roadmap item. Check the kill criterion. Is it a number you can really measure within a few weeks?':
    'Aapke paas ek roadmap item hona chahiye. Kill criterion check kijiye. Kya yeh aisa number hai jo aap kuch hafton mein sach mein naap sakte hain?',
  'Idea 2: OKRs, input metrics and guardrails':
    'Idea 2: OKRs, input metrics aur guardrails',
  'A roadmap tells you what you will work on. Next you need a way to say what winning looks like. A common way is <strong>OKRs</strong>. The letters stand for objectives and key results.':
    'Roadmap batata hai ki aap kis par kaam karenge. Ab aapko yeh kehne ka tareeka chahiye ki jeetna kaisa dikhta hai. Ek aam tareeka hai <strong>OKRs</strong>. Iske akshar objectives aur key results ke liye hain.',
  'The <strong>objective</strong> says what you want, in words. The <strong>key results</strong> are three or four numbers that show you got there. Think of it like a school report: the goal is “do well”, and the marks prove it. Here is an example for the ticket tool.':
    '<strong>Objective</strong> batata hai ki aap kya chahte hain, shabdon mein. <strong>Key results</strong> teen ya chaar numbers hain jo dikhate hain ki aap wahan pahunch gaye. School report ki tarah sochiye: goal hai “achha karna”, aur marks saboot hain. Yahan ticket tool ka ek udaharan hai.',
  'Notice that KR1 and KR2 are about people. KR3 is about the model. Good key results are <strong>outcomes</strong>, meaning what changes for users. They are not <strong>outputs</strong>, meaning what you ship. “Ship growth alerts” is an output. “Leads catch new issues in their first week” is an outcome.':
    'Dekhiye ki KR1 aur KR2 logon ke baare mein hain. KR3 model ke baare mein hai. Achhe key results <strong>outcomes</strong> hote hain, yaani users ke liye kya badalta hai. Woh <strong>outputs</strong> nahi hote, yaani jo aap bhej dete hain. “Growth alerts bhejna” ek output hai. “Leads pehle hafte mein naye issues pakad lete hain” ek outcome hai.',
  'Two more kinds of number help your OKRs. The first is an <strong>input metric</strong>. It is something the team can change directly, and you expect it to move the outcome. For example, the share of tickets given a theme (a topic label).':
    'Do aur tarah ke number aapke OKRs ki madad karte hain. Pehla hai <strong>input metric</strong>. Yeh woh cheez hai jise team seedha badal sakti hai, aur aap maante hain ki yeh outcome ko hilayegi. Jaise, un tickets ka hissa jinhe theme (topic ka label) diya gaya.',
  'The second is a <strong>guardrail metric</strong>. It is a number that must not get worse while you chase the key results, like the railing on a bridge. For example, the false-alarm rate or the cost per customer.':
    'Doosra hai <strong>guardrail metric</strong>. Yeh woh number hai jo kharab nahi hona chahiye jab aap key results ke peeche bhaag rahe ho, pul ki railing ki tarah. Jaise galat alarm ki dar ya har customer ka kharch.',
  'Keep model numbers and product outcomes apart. A model can score 95% precision (of what it flags, 95% is right) while users still ignore the report because it comes too late. You need both kinds of number. But only the product outcome tells you if users are better off.':
    'Model ke numbers aur product outcomes ko alag rakhiye. Ek model 95% precision la sakta hai (jo woh pakadta hai, uska 95% sahi hai) phir bhi users report ko andekha kar sakte hain kyunki woh der se aati hai. Aapko dono tarah ke number chahiye. Par sirf product outcome batata hai ki users ka bhala hua ya nahi.',
  'Write one objective and three key results for your capstone. Label each key result as a product outcome or a model number. Add one guardrail metric.':
    'Apne capstone ke liye ek objective aur teen key results likhiye. Har key result par label lagaiye: product outcome ya model number. Ek guardrail metric jodiye.',
  'You should have one objective, three labelled key results and a guardrail metric. Now try to cheat each key result. How could a team hit the number and still make things worse for users?':
    'Aapke paas ek objective, teen label wale key results aur ek guardrail metric hona chahiye. Ab har key result ke saath chalaaki karne ki koshish kijiye. Team number hit karke bhi users ke liye cheezein kaise kharab kar sakti hai?',
  'Idea 3: Map the people who can help or stop you':
    'Idea 3: Un logon ka naksha banaiye jo madad kar sakte hain ya rok sakte hain',
  'So far you have been thinking about the work. But a product decision involves many people, and they want different things. A <strong>stakeholder map</strong> (a picture of everyone who cares about the result) helps you see who matters. It puts each person on two lines: how much influence (power) they have over the project, and how much they care about it.':
    'Ab tak aap kaam ke baare mein soch rahe the. Par product ke faisle mein bahut log hote hain, aur sab ki chahat alag hoti hai. <strong>Stakeholder map</strong> (un sab ki tasveer jinhe nateeje ki parwah hai) dekhne mein madad karta hai ki kaun zaroori hai. Yeh har insaan ko do line par rakhta hai: project par unka influence (taakat) kitna hai, aur unhe kitni parwah hai.',
  'The grid tells you how to treat each group. Read the examples in each box to get a feel for it.':
    'Grid batata hai ki har group ke saath kaisa vyavhaar karna hai. Har dibbe ke udaharan padhiye taaki samajh aa jaye.',
  'Low interest (cares little)':
    'Low interest (kam parwah)',
  'High interest (cares a lot)':
    'High interest (bahut parwah)',
  'High influence (lots of power)':
    'High influence (bahut taakat)',
  'Keep satisfied (e.g. CFO, security lead)':
    'Khush rakhiye (jaise CFO, security lead)',
  'Work closely with (e.g. head of support, your manager)':
    'Kareeb se saath kaam kijiye (jaise head of support, aapka manager)',
  'Low influence (little power)':
    'Low influence (kam taakat)',
  'Keep informed (e.g. other product teams)':
    'Khabar dete rahiye (jaise doosri product teams)',
  'Keep involved (e.g. support agents, design partners)':
    'Saath mein rakhiye (jaise support agents, design partners)',
  'For each important stakeholder, write two more things. The first is their <strong>incentive</strong>, which is what they are judged on, like marks in an exam. It tells you how they will react. The second is their <strong>decision right</strong>. Do they decide, do they advise, or can they block it with a veto (a power to say no)?':
    'Har zaroori stakeholder ke liye do cheezein aur likhiye. Pehli hai unka <strong>incentive</strong>, yaani unhe kis cheez par parkha jata hai, jaise exam ke marks. Isse pata chalta hai ki woh kaise react karenge. Doosri hai unka <strong>decision right</strong>. Kya woh faisla karte hain, salaah dete hain, ya veto (“nahi” kehne ki taakat) se rok sakte hain?',
  'In AI products, the security, legal and privacy leads often have a veto but little day-to-day interest. They sit in the “keep satisfied” box until the day before launch, when they say no. Talk to them early.':
    'AI products mein security, legal aur privacy leads ke paas aksar veto hota hai par roz ki parwah kam hoti hai. Woh “khush rakhiye” dibbe mein baithe rehte hain jab tak launch se ek din pehle woh “nahi” nahi bol dete. Unse jaldi baat kijiye.',
  'Place at least five stakeholders for your capstone on the grid. Circle anyone who can veto the project.':
    'Apne capstone ke kam se kam paanch stakeholders ko grid par rakhiye. Jo project ko veto kar sakta hai, use gol ghere mein lijiye.',
  'You should have a filled grid with at least one person circled. If nobody can veto your project, you have probably missed someone. Ask who has to approve new software or new data flows (new ways that data moves around).':
    'Aapke paas bhara hua grid hona chahiye jismein kam se kam ek insaan gol ghere mein ho. Agar koi bhi veto nahi kar sakta, to shayad aap kisi ko bhool gaye. Poochiye ki naye software ya naye data flows (data ke chalne ke naye raaste) ko kaun manzoor karta hai.',
  'Idea 4: Write for bosses, and imagine failure first':
    'Idea 4: Bosses ke liye likhiye, aur pehle fail hone ki kalpana kijiye',
  'Once you know who matters, you have to win them over. Executives (senior bosses) read fast and decide a lot. So write so they can act after the first paragraph. A good decision memo follows this order.':
    'Jab aap jaan lein ki kaun zaroori hai, to unhe apne saath lena hota hai. Executives (bade bosses) tezi se padhte hain aur bahut faisle karte hain. Isliye aise likhiye ki woh pehle paragraph ke baad kaam kar sakein. Achha decision memo is kram mein chalta hai.',
  '<strong>The decision or ask</strong>, in the first sentence.':
    '<strong>Faisla ya maang</strong>, pehle vaakya mein.',
  '<strong>Why now</strong>: the problem and the proof, in two or three sentences.':
    '<strong>Abhi kyun</strong>: samasya aur saboot, do ya teen vaakyon mein.',
  '<strong>Options</strong> you thought about, including doing nothing.':
    '<strong>Options</strong> jinke baare mein aapne socha, kuch na karna bhi shamil.',
  '<strong>Your recommendation</strong> and what it costs.':
    '<strong>Aapki salaah</strong> aur uska kharch.',
  '<strong>Risks</strong>, and what would make you change course.':
    '<strong>Risks</strong>, aur kya cheez aapko raasta badalne par majboor karegi.',
  'Before you send the memo, run a <strong>pre-mortem</strong>. Imagine it is six months from now and the project has failed. Everyone writes down, alone, why it failed. Then you plan to stop the most likely causes.':
    'Memo bhejne se pehle ek <strong>pre-mortem</strong> kijiye. Sochiye ki chhe mahine ho gaye hain aur project fail ho gaya. Har koi akele mein likhta hai ki yeh kyun fail hua. Phir aap sabse mumkin kaaranon ko rokne ka plan banate hain.',
  'Why does this work? Because people will name risks about a pretend failure that they would never mention about a plan that is still alive. It is like a fire drill: you find the blocked door before the fire.':
    'Yeh kaam kyun karta hai? Kyunki log banawati fail hone ke baare mein woh risks bata dete hain jo woh zinda plan ke baare mein kabhi nahi batate. Yeh fire drill jaisa hai: aag lagne se pehle hi band darwaza mil jata hai.',
  'Write three reasons your capstone might fail six months from now. For each one, write one thing you can do this month to make it less likely.':
    'Teen kaaran likhiye ki aapka capstone chhe mahine baad kyun fail ho sakta hai. Har kaaran ke liye ek kaam likhiye jo aap is mahine kar sakte hain taaki woh kam ho.',
  'You should have three reasons for failure, each with a step to prevent it. The best reasons are specific, like “the security review took four months”. Vague ones, like “we ran out of time”, help much less.':
    'Aapke paas fail hone ke teen kaaran hone chahiye, har ek ke saath use rokne ka kadam. Sabse achhe kaaran saaf hote hain, jaise “security review mein chaar mahine lag gaye”. Dhundhle kaaran, jaise “hamare paas time khatam ho gaya”, bahut kam madad karte hain.',
  'Idea 5: Track dependencies and risks':
    'Idea 5: Dependencies aur risks par nazar rakhiye',
  'The last piece is keeping the plan on track. A <strong>dependency</strong> is anything you need from outside your team. It could be another team’s work, a vendor (a company you buy from), access to data, or an approval. Plans slip here, because you do not control these things. It is like waiting for a friend who has your ticket.':
    'Aakhri hissa plan ko patri par rakhna hai. <strong>Dependency</strong> woh har cheez hai jo aapko apni team ke bahar se chahiye. Yeh doosri team ka kaam, vendor (jis company se aap kharidte hain), data tak pahunch, ya manzoori ho sakti hai. Plans yahin phisalte hain, kyunki in cheezon par aapka bas nahi. Yeh us dost ka intezaar karne jaisa hai jiske paas aapka ticket hai.',
  'The best defence is a simple risk list. For each risk, write how likely it is, how much damage it would do, who owns it, and what you are doing about it. The table shows three examples.':
    'Sabse achha bachav ek saadi risk list hai. Har risk ke liye likhiye ki woh kitna mumkin hai, kitna nuksaan karega, kiska zimma hai, aur aap uske liye kya kar rahe hain. Table mein teen udaharan hain.',
  'Security review delays access to ticket data':
    'Security review ki wajah se ticket data milne mein der hoti hai',
  'Start the review in week 1. Prepare the data-flow diagram (a drawing of where data goes) now.':
    'Review hafte 1 mein shuru kijiye. Data-flow diagram (data kahan jata hai, uski drawing) abhi taiyaar kijiye.',
  'Model provider (the company that runs the model) changes its pricing':
    'Model provider (jo company model chalati hai) apni pricing badal deta hai',
  'Engineering lead':
    'Engineering lead',
  'Keep the test set (your list of questions with known answers) free of any one vendor, so switching takes days':
    'Test set (jawaab pata wale sawaalon ki list) ko kisi ek vendor se bandha na rakhiye, taaki badalne mein din lagein',
  'Precision stays below 85%':
    'Precision 85% se neeche rehti hai',
  'PM and engineer':
    'PM aur engineer',
  'Give it a time limit of three weeks, then narrow the use case (make the job smaller)':
    'Teen hafte ki time limit dijiye, phir use case chhota kijiye (kaam ko chhota kijiye)',
  'AI products carry a few risks of their own. The model’s quality may never reach the bar, like a student who never passes. The provider may change the model underneath you. And approvals to use data can take months.':
    'AI products ke apne kuch risks hote hain. Model ki quality shayad kabhi zaroori star tak na pahunche, us student ki tarah jo kabhi pass nahi hota. Provider aapke neeche model badal sakta hai. Aur data use karne ki manzoori mein mahine lag sakte hain.',
  'You already keep a risk and issue log (what could go wrong, and what has) and a stakeholder register (who cares). Keep both. Only the first column changes. A delivery log starts with the milestone and its date. A product log starts with the outcome and its kill criterion. In the stakeholder grid, add each person’s incentive and whether they can veto. Your government experience helps you fill it fast.':
    'Aap pehle se risk and issue log (kya galat ho sakta hai, aur kya hua) aur stakeholder register (kise parwah hai) rakhte hain. Dono rakhiye. Sirf pehla column badalta hai. Delivery log milestone aur uski date se shuru hota hai. Product log outcome aur uske kill criterion se shuru hota hai. Stakeholder grid mein har insaan ka incentive aur yeh jodiye ki woh veto kar sakta hai ya nahi. Aapka sarkari anubhav ise tezi se bharne mein madad karega.',
  'Now turn one thing you delivered into this new style.':
    'Ab jo kuch aapne deliver kiya, uski ek cheez ko is naye dhang mein badaliye.',
  'Take one milestone you delivered on a government project. Rewrite it as an outcome with proof, an owner and a kill criterion. Then write what you would have had to decide, not just deliver.':
    'Sarkari project ka ek milestone lijiye jo aapne deliver kiya. Use outcome ki tarah dobara likhiye, saboot, owner aur kill criterion ke saath. Phir likhiye ki aapko kya tay karna padta, sirf deliver nahi karna.',
  'Milestone… outcome… evidence… owner… kill criterion… what I would have decided…':
    'Milestone… outcome… evidence… owner… kill criterion… main kya tay karta…',
  'A strong answer. <strong>Milestone:</strong> citizen portal live in all districts by 31 March. <strong>Outcome:</strong> at least 60% of grievance applications (complaints) in the pilot districts are filed online within eight weeks of go-live. <strong>Evidence:</strong> the help-desk log shows most applicants still walk to the block office, which costs them a day’s wage. <strong>Owner:</strong> me, with the district nodal officer. <strong>Kill criterion:</strong> if fewer than 20% file online after eight weeks, stop adding districts and fix the form first. <strong>What I would have had to decide:</strong> whether to go live in districts with weak connectivity, instead of delivering to the date. Your numbers will differ.':
    'Ek mazboot jawaab. <strong>Milestone:</strong> citizen portal 31 March tak saare districts mein live. <strong>Outcome:</strong> pilot districts mein kam se kam 60% grievance applications (shikayatein) go-live ke aath hafte ke andar online bhari jayein. <strong>Evidence:</strong> help-desk log dikhata hai ki zyaadatar applicants ab bhi block office paidal jaate hain, jisse unki ek din ki mazdoori jaati hai. <strong>Owner:</strong> main, district nodal officer ke saath. <strong>Kill criterion:</strong> agar aath hafte baad 20% se kam online bharein, to districts jodna band kijiye aur pehle form theek kijiye. <strong>Mujhe kya tay karna padta:</strong> kya kamzor connectivity wale districts mein go-live karna hai, date par deliver karne ke bajaye. Aapke numbers alag honge.',
  'Write the first paragraph of your decision memo to leadership. Start with the decision or ask. Then give the proof, the cost and the biggest risk.':
    'Leadership ko likhe apne decision memo ka pehla paragraph likhiye. Faisle ya maang se shuru kijiye. Phir saboot, kharch aur sabse bada risk dijiye.',
  'The ask, why now, the cost, the biggest risk…':
    'Maang, abhi kyun, kharch, sabse bada risk…',
  'A strong opening: <strong>I am asking for one engineer for eight weeks to pilot Theme Finder with ten support teams.</strong> Three of five support leads we interviewed miss fast-growing issues because tickets are tagged inconsistently, and each spends about three hours every Monday on the report. The pilot costs one engineer and about $200 in model usage. The biggest risk is the security review of sending ticket data to a model provider. We have started it this week, and we will stop the pilot if precision on our test set stays below 85% after three weeks.':
    'Ek mazboot shuruaat: <strong>Main das support teams ke saath Theme Finder ka pilot chalane ke liye aath hafte ke liye ek engineer maang raha hoon.</strong> Jin paanch support leads se humne baat ki, unmein se teen tezi se badhte issues chhod dete hain kyunki tickets par tags ek jaise nahi lagte, aur har koi har Monday report par lagbhag teen ghante lagata hai. Pilot mein ek engineer aur model usage par lagbhag $200 lagenge. Sabse bada risk hai ticket data ko model provider ko bhejne ka security review. Humne ise isi hafte shuru kar diya hai, aur agar teen hafte baad hamare test set par precision 85% se neeche rahi to hum pilot rok denge.',
  'Let us pull the chapter together. A good roadmap promises outcomes, not dates. Every item carries a kill criterion, so you know when to stop. OKRs give you numbers to aim at. Guardrails stop you from winning in a way that hurts users, like a railing on a bridge.':
    'Chaliye chapter ko ek saath rakhte hain. Achha roadmap dates ka nahi, outcomes ka waada karta hai. Har item ke saath kill criterion hota hai, taaki aapko pata ho kab rukna hai. OKRs aapko nishaane ke liye numbers dete hain. Guardrails aapko aise jeetne se rokte hain jo users ko nuksaan pahunchaye, pul ki railing ki tarah.',
  'You also saw that plans fail because of people and surprises. A stakeholder map shows who can say no. A decision memo makes it easy for them to say yes. A pre-mortem and a risk list catch problems early.':
    'Aapne yeh bhi dekha ki plans logon aur jhatkon ki wajah se fail hote hain. Stakeholder map dikhata hai ki “nahi” kaun bol sakta hai. Decision memo unke liye “haan” kehna aasaan banata hai. Pre-mortem aur risk list samasyaon ko jaldi pakad leti hain.',
  'Next, in A7, you will take one decision from this plan and turn it into a written plan for what to build, short stories about users, and a rough model. A team can build from these.':
    'Aage A7 mein aap is plan se ek faisla lekar use banane wali cheez ka likha plan, users ki chhoti kahaniyan, aur ek rough model mein badlenge. Team in par se build kar sakti hai.',
});
