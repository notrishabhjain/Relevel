/* Hinglish: the route (src/data/route.mjs) and the route page, keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  /* the page */
  'Your route': 'Aapka raasta',
  'Your route: 26 weeks, one order': 'Aapka raasta: 26 hafte, ek hi order',
  '26 weeks, one order': '26 hafte, ek hi order',
  'Month 1 is the gentle start: the book from its first page, ten minutes a weekday, and nothing to install. After that, each chapter’s story comes first in the book, then the chapter itself here. On a day when ten minutes feels like too much, do one page and tick it anyway.':
    'Mahina 1 aaram se shuruaat hai: kitaab pehle page se, har weekday das minute, aur kuch install nahi karna. Uske baad har chapter ki kahani pehle kitaab mein aati hai, phir wahi chapter yahan. Jis din das minute bhi zyada lagein, ek page kijiye aur phir bhi tick kar dijiye.',
  'steps done': 'steps poore',
  'Every step is done. Well done.': 'Har step poora ho gaya. Shabaash.',
  'This is calendar week {cal}, and you are on week {at}. That is fine: carry on from the first open step, and never miss twice.':
    'Calendar ke hisaab se yeh week {cal} hai, aur aap week {at} par hain. Koi baat nahi: pehle khule step se aage badhiye, aur lagaataar do din kabhi mat chhodiye.',
  'You are ahead of the calendar. Keep the pace that keeps you coming back.': 'Aap calendar se aage hain. Wahi raftaar rakhiye jo aapko roz wapas laaye.',
  'You are on schedule. Do the step marked today.': 'Aap samay par hain. Jo step “next” likha hai, woh kijiye.',
  'By Sunday': 'Ravivaar tak',
  'Chapter': 'Chapter',
  'Book': 'Kitaab',
  'Try': 'Try',
  'Look back': 'Peeche mudkar dekhiye',
  'Done': 'Ho gaya',
  'Ticks itself when you mark the chapter complete': 'Chapter complete mark karte hi apne aap tick ho jaata hai',
  'Read in the book': 'Kitaab mein padhiye',
  'Open the chapter': 'Chapter kholiye',
  'Open': 'Kholiye',
  'next': 'agla',
  'step': 'step',
  'Week': 'Week',
  'See the whole route': 'Poora raasta dekhiye',
  'See the week': 'Woh week dekhiye',
  'Open the plan': 'Plan kholiye',
  'first pass, about 20 minutes: read it and answer the boxes. The Build it section is optional.': 'pehli baar, lagbhag 20 minute: padhiye aur boxes ka jawaab dijiye. “Build it” wala hissa optional hai.',
  'One page': 'Ek page',

  /* what each kind of step asks */
  'Read it, answer the boxes and do its hands-on steps. Press “Mark chapter complete” at the end.':
    'Padhiye, boxes ka jawaab dijiye aur hands-on steps kijiye. Aakhir mein “Mark chapter complete” dabaiye.',
  'Read the chapter. The page ticks itself when you reach the end.': 'Chapter padhiye. End tak pahunchte hi page apne aap tick ho jaata hai.',
  'Three lines in your notepad: what made sense, what didn’t, and one question. Take a photo if you keep a log.':
    'Notepad mein teen lines: kya samajh aaya, kya nahi aaya, aur ek sawaal. Agar aap log rakhte hain to photo le lijiye.',
  'Read sections 8.1 to 8.3, then stop, even if you want to keep going.': 'Section 8.1 se 8.3 tak padhiye, phir ruk jaiye, chahe aage padhne ka mann ho.',
  'Read from section 8.4 to the end of the chapter.': 'Section 8.4 se chapter ke end tak padhiye.',
  'Read sections 11.1 to 11.4, then stop, even if you want to keep going.': 'Section 11.1 se 11.4 tak padhiye, phir ruk jaiye, chahe aage padhne ka mann ho.',
  'Read from section 11.5 to the end of the chapter.': 'Section 11.5 se chapter ke end tak padhiye.',
  'First pass: read it and answer the boxes, then press “Mark chapter complete”. You read its story in the book already. The “Build it” section is optional; leave it for later.':
    'Pehli baar: padhiye aur boxes ka jawaab dijiye, phir “Mark chapter complete” dabaiye. Iski kahani aap kitaab mein padh chuke hain. “Build it” wala hissa optional hai; use baad ke liye chhod dijiye.',
  'The chapter allows about thirty hours. Ship the smallest version that works in about eight, then keep improving. Press “Mark chapter complete” when it is shipped.':
    'Yeh chapter lagbhag tees ghante ka hai. Sabse chhota version jo kaam kare, use lagbhag aath ghante mein ship kijiye, phir sudhaarte rahiye. Ship hone par “Mark chapter complete” dabaiye.',

  /* tries */
  'Count your own words in tokens': 'Apne words ko tokens mein giniye',
  'Open Chapter 0.5 and do only its first experiment. Paste a message you wrote today, once in English and once in Hinglish, and compare the counts.':
    'Chapter 0.5 kholiye aur sirf uska pehla experiment kijiye. Aaj likha hua koi message paste kijiye, ek baar English mein aur ek baar Hinglish mein, aur dono counts compare kijiye.',
  'Ten test messages, marked': 'Das test messages, number ke saath',
  'Pick one small job, such as “does this message contain a phone number?”. On paper, write ten short messages and the right answer for each. Give them to a chat assistant one at a time and mark each answer. Your score out of ten is your first evaluation.':
    'Ek chhota kaam chuniye, jaise “kya is message mein phone number hai?”. Kaagaz par das chhote messages likhiye aur har ek ka sahi jawaab. Unhe ek-ek karke chat assistant ko dijiye aur har jawaab ko mark kijiye. Das mein se aapka score hi aapka pehla evaluation hai.',
  'The one-time setup': 'Ek baar ka setup',
  'Do the setup page, one section at a time. You know what the key is for now. If a step fails, copy the exact error and ask a chat assistant.':
    'Setup page kijiye, ek baar mein ek section. Ab aapko pata hai ki key kis kaam ki hai. Agar koi step fail ho, to exact error copy kijiye aur chat assistant se poochiye.',
  'Plan your capstone week': 'Capstone wale hafte ki planning',
  'Read the capstone chapter’s brief and write, on one page, the smallest version you can ship in about eight hours. Everything else goes on a “later” list.':
    'Capstone chapter ka brief padhiye aur ek page par likhiye ki sabse chhota version kya hai jo aap lagbhag aath ghante mein ship kar sakte hain. Baaki sab “baad mein” wali list mein.',
  'Put the project where people can see it': 'Project ko wahan rakhiye jahan log dekh sakein',
  'Publish your findings page and the capstone write-up as one page with a link. Keep it plain. A page that exists beats a page that is pretty.':
    'Apna findings page aur capstone write-up ek page par, link ke saath, publish kijiye. Saada rakhiye. Jo page maujood hai, woh sundar page se behtar hai.',
  'Three practice interviews': 'Teen practice interview',
  'Use the interview practice in Chapter B7. Answer three questions out loud, record yourself, and write down one thing to say better next time.':
    'Chapter B7 ki interview practice use kijiye. Teen sawaalon ke jawaab bol kar dijiye, khud ko record kijiye, aur ek baat likhiye jo agli baar behtar kahenge.',

  /* week titles and what each week leaves you with */
  'Start, and the problem worth solving': 'Shuruaat, aur woh problem jo solve karne layak hai',
  'Your first three lines in your notepad.': 'Notepad mein aapki pehli teen lines.',
  'Deciding what to build': 'Kya banana hai, yeh tay karna',
  'Three lines for the week. You now know the story the project comes from.': 'Hafte ki teen lines. Ab aap woh kahani jaante hain jahan se project aata hai.',
  'Meet the machine': 'Machine se mulaqat',
  'One line on what a token is, in your own words.': 'Token kya hai, apne shabdon mein ek line.',
  'Talking to it, and checking it': 'Usse baat karna, aur use jaanchna',
  'Your first evaluation: ten messages and a score out of ten.': 'Aapka pehla evaluation: das messages aur das mein se score.',
  'Product foundations, first pass': 'Product ki neenv, pehli baar',
  'The boxes in A1 to A5 answered: your problem, users and market in your own words.': 'A1 se A5 ke boxes ke jawaab: aapki problem, users aur market, apne shabdon mein.',
  'Product foundations, then the setup': 'Product ki neenv, phir setup',
  'The boxes in A6 to A8 answered, and a working setup.': 'A6 se A8 ke boxes ke jawaab, aur ek chalta hua setup.',
  'First contact: your first model call': 'Pehla sampark: aapki pehli model call',
  'Your first model call, with its token count and cost written down.': 'Aapki pehli model call, uske token count aur kharch ke saath likhi hui.',
  'Instructions that work': 'Instructions jo kaam karein',
  'The helper’s instructions, tested on your first answer key.': 'Helper ke instructions, aapki pehli answer key par test kiye hue.',
  'Sorting and summarising': 'Chhaantna aur summary banana',
  'A sorter for the kind of ID, with its score.': 'ID ki kism chhaantne wala sorter, uske score ke saath.',
  'Holiday week, light: cutting long text': 'Chhutti ka hafta, halka: lamba text kaatna',
  'A rule for cutting text without splitting an ID.': 'Text kaatne ka niyam, bina kisi ID ko beech se tode.',
  'Holiday week, light: finding by words': 'Chhutti ka hafta, halka: words se dhoondhna',
  'Your pattern rules, scored by hand.': 'Aapke pattern rules, haath se score kiye hue.',
  'Finding by meaning, and measuring it': 'Matlab se dhoondhna, aur use naapna',
  'The scoreboard: words against meaning, with a ship-or-not note.': 'Scoreboard: words banaam matlab, ship karein ya nahi ke note ke saath.',
  'Your first complete system': 'Aapka pehla poora system',
  'Version 0 of the findings page, published.': 'Findings page ka version 0, publish kiya hua.',
  'Answers a program can use': 'Jawaab jo program use kar sake',
  'An extractor that says “not sure” instead of guessing.': 'Ek extractor jo andaaza lagane ke bajaye “pakka nahi” kehta hai.',
  'Context, thinking models and the wait': 'Context, sochne wale models aur intezaar',
  'A budget for what is sent onward, and a design for the wait.': 'Aage kya bheja jaaye uska budget, aur intezaar ka design.',
  'Better search, and the page that gives orders': 'Behtar search, aur woh page jo hukm deta hai',
  'Finding made better one change at a time, and your own tool attacked.': 'Ek-ek badlaav se behtar dhoondhna, aur apne hi tool par hamla.',
  'Grading at scale, and what it costs': 'Badi sankhya mein grading, aur uska kharch',
  'An automatic marker you have checked, and a cost model from measurements.': 'Ek automatic marker jise aapne jaancha hai, aur naap se bana cost model.',
  'Real documents, and the rules': 'Asli documents, aur niyam',
  'The sharing rule, and the system card.': 'Sharing ka niyam, aur system card.',
  'The spec, and build or buy': 'Spec, aur banayein ya khareedein',
  'A requirements document that survives a change of model, and a build-or-buy call.': 'Ek requirements document jo model badalne par bhi tike, aur banayein-ya-khareedein ka faisla.',
  'Wrong answers, impact, and the plumbing': 'Galat jawaab, asar, aur andar ki plumbing',
  'The four answers the tool can give, a pilot design, and a test harness in Git.': 'Tool ke chaar mumkin jawaab, ek pilot design, aur Git mein test harness.',
  'Production depth: models, context, retrieval': 'Production ki gehraai: models, context, retrieval',
  'Your model choice with a back-up, and the gateway on one page.': 'Back-up ke saath aapka model chunaav, aur ek page par gateway.',
  'Production depth: tools, agents, pictures and voice': 'Production ki gehraai: tools, agents, tasveerein aur awaaz',
  'A workflow that cannot make risky changes alone, and the tool access policy.': 'Ek workflow jo akele jokhim bhare badlaav nahi kar sakta, aur tool access policy.',
  'Production depth: gates, watching, security': 'Production ki gehraai: gates, nigraani, security',
  'The release gate, the watch plan and the risk register.': 'Release gate, nigraani ka plan aur risk register.',
  'The product spec and the decision pack': 'Product spec aur decision pack',
  'The full requirements and a ten-slide decision pack.': 'Poori requirements aur das slide ka decision pack.',
  'Capstone: ship it and defend it': 'Capstone: ship kijiye aur uska bachaav kijiye',
  'Bharat Privacy Guard shipped, with its findings document and a short demo.': 'Bharat Privacy Guard ship hua, findings document aur ek chhote demo ke saath.',
  'The business, and the job': 'Business, aur naukri',
  'Your portfolio page, three practice interviews and a look back over six months.': 'Aapka portfolio page, teen practice interview aur chhe mahinon par ek nazar.',
  /* the one-view page */
  'One view of everything': 'Sab kuch ek jagah',
  'the playbook, the book, the plan and the curriculum, week by week': 'playbook, kitaab, plan aur curriculum, hafte-dar-hafte',
  'The other views': 'Baaki views',
  'The book': 'Kitaab',
  'the same chapters as one story': 'wahi chapters, ek kahani ki tarah',
  'The plan': 'Plan',
  'these weeks, with reviews and a parking lot': 'yahi hafte, review aur parking lot ke saath',
  'The curriculum': 'Curriculum',
  'why the route is in this order': 'raasta isi order mein kyun hai',
  'Do it': 'Kijiye',
  'The story': 'Kahani',
  'What blocked you, what you learned': 'Kya rukawat aayi, kya seekha',
  'Your note': 'Aapka note',
  'Link to what you made': 'Jo banaya uska link',
  'How to': 'Kaise karein',
  'Going further (optional)': 'Aur aage (optional)',
  'This week in the plan': 'Plan mein yeh hafta',
  'Why this month': 'Yeh mahina kyun',
  'Monthly review': 'Mahine ka review',
  'If behind': 'Agar peeche hain',
  'Reviewed': 'Review ho gaya',
  'In the plan': 'Plan mein',
  'The plan has the same weeks, plus the parking lot and the rules.': 'Plan mein yahi hafte hain, saath mein parking lot aur niyam.',
  /* how-to recipes (plan/ship.md) */
  'A chapter on its first pass': 'Chapter ki pehli baar',
  'The one-time setup': 'Ek baar ka setup',
  'Publish a project': 'Project publish kijiye',
  'Demo video: three minutes, no editing': 'Demo video: teen minute, bina editing',
  'Portfolio site': 'Portfolio site',
  'Mock interviews': 'Practice interview',
  'Retro: review the six months': 'Retro: chhe mahinon ka review',
  /* months (src/data/route.mjs) */
  'Month 1: Read first (the gentle start)': 'Mahina 1: pehle padhiye (aaram se shuruaat)',
  'Ten minutes a weekday. The book from its first page to chapter 12, three small tries and your first evaluation. Nothing to install.':
    'Har weekday das minute. Kitaab pehle page se chapter 12 tak, teen chhote try aur aapka pehla evaluation. Kuch install nahi karna.',
  'Month 2: Product foundations and first contact': 'Mahina 2: product ki neenv aur pehla sampark',
  'Track A’s boxes answered (your home ground), the setup working, your first model call, and a sorter with a score.':
    'Track A ke boxes ke jawaab (aapka apna maidaan), chalta hua setup, aapki pehli model call, aur score ke saath ek sorter.',
  'Month 3: Finding and measuring': 'Mahina 3: dhoondhna aur naapna',
  'Search by words and by meaning, a scoreboard, and version 0 of the findings page published. Weeks 10 and 11 are light holiday weeks.':
    'Words aur matlab se search, ek scoreboard, aur findings page ka version 0 publish. Week 10 aur 11 halke, chhutti wale hafte hain.',
  'Month 4: What real systems add': 'Mahina 4: asli systems mein kya judta hai',
  'Dependable output, context and thinking models, better search, prompt injection, grading at scale, cost, documents and the rules.':
    'Bharose layak output, context aur sochne wale models, behtar search, prompt injection, badi sankhya mein grading, kharch, documents aur niyam.',
  'Month 5: Decisions and production depth': 'Mahina 5: faisle aur production ki gehraai',
  'The spec, build or buy, wrong answers and impact, then the production chapters: models, retrieval, tools, agents, gates, watching and security.':
    'Spec, banayein ya khareedein, galat jawaab aur asar, phir production ke chapters: models, retrieval, tools, agents, gates, nigraani aur security.',
  'Month 6: Ship it, defend it, get the job': 'Mahina 6: ship kijiye, bachaav kijiye, naukri paaiye',
  'The decision pack, the capstone shipped and defended, the business chapters, a portfolio page and practice interviews.':
    'Decision pack, capstone ship aur uska bachaav, business ke chapters, ek portfolio page aur practice interview.',
  /* monthly reviews (plan/data.mjs) */
  'The first four weeks ticked, or nearly: the book read to chapter 12, three small tries done, and your first evaluation scored out of ten.':
    'Pehle chaar hafte tick, ya lagbhag: kitaab chapter 12 tak padhi hui, teen chhote try poore, aur aapka pehla evaluation das mein se score ke saath.',
  'If you missed days, do not catch up in one go. Carry on from the first open step and let the dates slide.':
    'Agar din chhoot gaye, to ek saath poora mat kijiye. Pehle khule step se aage badhiye aur tareekhon ko khisakne dijiye.',
  'Track A’s boxes answered, the setup working, your first model call costed, and a sorter with a score.':
    'Track A ke boxes ke jawaab, chalta hua setup, pehli model call ka kharch likha hua, aur score ke saath ek sorter.',
  'Leave Track A’s Build sections for later. Never cut the first model call.':
    'Track A ke Build hisse baad ke liye chhod dijiye. Pehli model call kabhi mat chhodiye.',
  'Search by words and by meaning compared on a scoreboard, and version 0 of the findings page published with a link.':
    'Words aur matlab wali search scoreboard par compare, aur findings page ka version 0 link ke saath publish.',
  'Publish the findings page with whatever numbers you have. An honest short page beats a perfect missing one.':
    'Jo bhi numbers hain unke saath findings page publish kijiye. Imaandaar chhota page, gayab perfect page se behtar hai.',
  'Dependable output, the attack on your own tool, a checked automatic marker, a cost model, and the system card.':
    'Bharose layak output, apne tool par hamla, jaancha hua automatic marker, cost model, aur system card.',
  'Do the chapters on a first pass and keep one hands-on result per week.':
    'Chapters pehli baar ki tarah kijiye aur har hafte ek hands-on nateeja rakhiye.',
  'The requirements document, the build-or-buy call, the release gate and the risk register.':
    'Requirements document, banayein-ya-khareedein ka faisla, release gate aur risk register.',
  'If time is short, keep the release gate and the risk register; the others can be one page each.':
    'Agar samay kam hai, to release gate aur risk register rakhiye; baaki ek-ek page ke ho sakte hain.',
  'Bharat Privacy Guard shipped with its findings document and demo, a portfolio page, and three practice interviews.':
    'Bharat Privacy Guard findings document aur demo ke saath ship, ek portfolio page, aur teen practice interview.',
  'Do not cut this one. Move it into May rather than skip it.':
    'Ise mat kaatiye. Chhodne ke bajaye May tak khisaa dijiye.'
});
