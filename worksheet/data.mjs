/* The worksheet's own words. Everything else on the page (chapter titles, the
   project stages, reading, glossary, weeks) comes from the course, the book and
   the route, so it cannot drift from them. What is here is what only the
   worksheet says: the topic headings, the "Before you start" checklist, and the
   page's labels, each in English and Hinglish.

   Topic 0 is "Before you start". Topics 1 to 13 follow the thirteen stages of
   the project (src/data/project.js), in order. */

export const TOPICS = [
  { id: 't0',
    title: 'Before you start', hi: 'Shuru karne se pehle',
    intro: 'What you need before week 1: some time, a device, a few free accounts and five people to talk to. No coding, maths or AI background is assumed. Tick each line off as you sort it out.',
    introHi: 'Week 1 se pehle aapko kya chahiye: thoda samay, ek device, kuch free accounts aur baat karne ke liye paanch log. Coding, ganit ya AI ka koi pichhla gyaan zaroori nahi. Jaise-jaise har cheez taiyaar ho, us line par tick kijiye.' },
  { id: 't1',
    title: 'Product foundations: the problem, the people and the plan', hi: 'Product ki neev: problem, log aur plan',
    intro: 'Before any code, you do a product manager’s first work. You name a problem, talk to the people who have it, size the market, choose what to do first and write it down. Month 1 needs nothing installed.',
    introHi: 'Kisi bhi code se pehle aap woh kaam karte hain jo product manager sabse pehle karta hai. Aap ek problem ka naam rakhte hain, jinhe woh problem hai unse baat karte hain, market ka size nikaalte hain, pehle kya karna hai chunte hain aur use likhte hain. Month 1 mein kuch install nahi karna.' },
  { id: 't2',
    title: 'Meet the machine: tokens, your first call, memory and instructions', hi: 'Machine se milna: tokens, pehli call, yaadasht aur instructions',
    intro: 'You meet a model on your own text. You learn to read a few lines of Python, connect a free model, send your first call and read its bill. Then you find out why it forgets, and how instructions change its answers.',
    introHi: 'Aap apne hi text par ek model se milte hain. Python ki kuch lines padhna seekhte hain, ek free model connect karte hain, pehli call bhejte hain aur uska bill padhte hain. Phir pata chalta hai ki woh bhoolta kyun hai, aur instructions uske jawaab kaise badalti hain.' },
  { id: 't3',
    title: 'Testing it, and the first jobs: sorting and summarising', hi: 'Use parakhna, aur pehle kaam: chhaantna aur saar likhna',
    intro: 'Before you trust a model, you build an answer key to check it against. Then you give it its first two jobs: sorting messages into groups, and summarising them.',
    introHi: 'Model par bharosa karne se pehle aap ek answer key banate hain jisse use jaancha ja sake. Phir aap use pehle do kaam dete hain: messages ko groups mein chhaantna, aur unka saar likhna.' },
  { id: 't4',
    title: 'Finding things: cutting text, words and meaning', hi: 'Cheezein dhoondhna: text kaatna, shabd aur matlab',
    intro: 'Long text has to be cut into pieces before a model can use it. Then you find the right piece two ways: by matching words, and by matching meaning.',
    introHi: 'Lamba text model ke kaam aane se pehle tukdon mein kaatna padta hai. Phir aap sahi tukda do tarah se dhoondhte hain: shabd milakar, aur matlab milakar.' },
  { id: 't5',
    title: 'Measuring search, and your first complete system', hi: 'Search ko naapna, aur aapka pehla poora system',
    intro: 'You measure how good your search is, with numbers rather than a feeling. Then you join the parts into your first complete system: one that finds the right text and answers from it.',
    introHi: 'Aap naapte hain ki aapki search kitni achhi hai, andaaze se nahi, numbers se. Phir aap hisson ko jodkar apna pehla poora system banate hain: jo sahi text dhoondhe aur usi se jawaab de.' },
  { id: 't6',
    title: 'Dependable output, tools, context, thinking and the wait', hi: 'Bharosemand output, tools, context, sochna aur intezaar',
    intro: 'A real product needs answers in a fixed shape, a model that can use tools, and the right text in front of it. You also meet thinking models, and design for the seconds a user waits.',
    introHi: 'Asli product ko ek tay shape mein jawaab chahiye, aisa model jo tools chala sake, aur uske saamne sahi text. Aap thinking models se bhi milte hain, aur un seconds ke liye design karte hain jab user intezaar karta hai.' },
  { id: 't7',
    title: 'Better search, attacks, and grading at scale', hi: 'Behtar search, hamle, aur bade paimaane par grading',
    intro: 'You make search better, then attack your own system the way a stranger would. Then you grade many answers at once, with code and with a model, and read the failures by hand.',
    introHi: 'Aap search ko behtar banate hain, phir apne hi system par waise hamla karte hain jaise koi anjaan karega. Phir aap code aur model se ek saath bahut saare jawaab grade karte hain, aur galtiyon ko haath se padhte hain.' },
  { id: 't8',
    title: 'Cost, real documents and data rules', hi: 'Keemat, asli documents aur data ke niyam',
    intro: 'You work out what the feature costs to run, pull text out of real documents such as scans and tables, and learn what data you may and may not send to a model.',
    introHi: 'Aap hisaab lagate hain ki feature chalane mein kitna kharch aata hai, scans aur tables jaise asli documents se text nikaalte hain, aur seekhte hain ki model ko kaunsa data bhej sakte hain aur kaunsa nahi.' },
  { id: 't9',
    title: 'Governance, the spec, and the product decisions', hi: 'Governance, spec, aur product ke faisle',
    intro: 'You write the rules the system must keep and a spec someone could build from. Then you make the product calls: build or buy, fine-tune or not, how it behaves when it is wrong, and how a pilot proves it works.',
    introHi: 'Aap woh niyam likhte hain jo system ko maanne hain, aur aisa spec jisse koi bana sake. Phir aap product ke faisle lete hain: banaye ya khareedein, fine-tune karein ya nahi, galat hone par woh kaise bartaav kare, aur pilot kaise saabit kare ki yeh kaam karta hai.' },
  { id: 't10',
    title: 'Production depth: building it properly', hi: 'Production ki gehraai: ise theek se banana',
    intro: 'The same ideas again, at the depth a production team works at: software basics, choosing a model, context, retrieval, workflows, agents, standard connections, pictures and voice, and release gates.',
    introHi: 'Wahi ideas dobara, us gehraai par jahan production team kaam karti hai: software basics, model chunna, context, retrieval, workflows, agents, standard connections, tasveerein aur awaaz, aur release gates.' },
  { id: 't11',
    title: 'Production depth: running it safely', hi: 'Production ki gehraai: ise surakshit chalana',
    intro: 'Running it for real: traces, cost and rollback, security controls around a model you cannot fully trust, a spec for a system that is sometimes wrong, and how it is delivered.',
    introHi: 'Ise asal mein chalana: traces, keemat aur rollback, ek aise model ke aas-paas security controls jis par poora bharosa nahi kiya ja sakta, kabhi-kabhi galat hone wale system ka spec, aur use deliver kaise kiya jaata hai.' },
  { id: 't12',
    title: 'Capstone: ship it and defend it', hi: 'Capstone: ise ship kijiye aur iska bachaav kijiye',
    intro: 'You build the whole project, break it on purpose, measure it, ship it where people can use it, and defend your choices as you would in a review.',
    introHi: 'Aap poora project banate hain, jaan-boojhkar use todte hain, naapte hain, use wahan ship karte hain jahan log use kar sakein, aur apne faislon ka bachaav waise karte hain jaise kisi review mein karte.' },
  { id: 't13',
    title: 'The business, and your career', hi: 'Business, aur aapka career',
    intro: 'The business around the product: pricing, growth, analytics, tools and real users. Then the job itself: your portfolio, your story and practice interviews.',
    introHi: 'Product ke aas-paas ka business: pricing, growth, analytics, tools aur asli users. Phir naukri khud: aapka portfolio, aapki kahani aur practice interviews.' }
];

/* Try steps on the route are not chapters, so they say here which topic they
   practise. build.mjs fails if the route gains a try step that is not listed. */
export const TRY_TOPIC = {
  't:setup': 't2',
  't:capstone-plan': 't12',
  't:capstone-build': 't12',
  't:portfolio': 't12',
  't:interviews': 't13'
};

/* "Before you start". Each line is a tick. `links` are [label, labelHi, href];
   an href that starts with /app/, /book/ or /plan/ is on this site. */
export const BEFORE = [
  { group: 'Time', groupHi: 'Samay', items: [
    { id: 'pre-time',
      text: 'Block the time. About an hour a week in month 1, rising to four or five hours a week in the last month. Every week on the plan shows its minutes.',
      hi: 'Samay nikaaliye. Month 1 mein hafte mein lagbhag ek ghanta, jo aakhri mahine tak badhkar hafte mein chaar-paanch ghante ho jaata hai. Plan ka har week apne minute dikhata hai.',
      links: [['The plan', 'Plan', '/plan/']] },
    { id: 'pre-restart',
      text: 'Know the way back. If life gets in the way, restart the calendar on the plan. Your ticks stay as they are; only the dates move.',
      hi: 'Wapas aane ka raasta jaaniye. Agar zindagi beech mein aa jaaye, to plan par calendar dobara shuru kijiye. Aapke ticks jaise hain waise rahenge; sirf tareekhein khiskengi.',
      links: [['Restart the calendar', 'Calendar dobara shuru kijiye', '/plan/#restart']] }
  ] },
  { group: 'Things', groupHi: 'Saamaan', items: [
    { id: 'pre-device',
      text: 'A laptop or desktop with an up-to-date browser, such as Chrome, Edge, Firefox or Safari. A phone is fine for reading the book and ticking the plan. The code chapters are easier on a laptop.',
      hi: 'Ek laptop ya desktop jisme naya browser ho, jaise Chrome, Edge, Firefox ya Safari. Kitaab padhne aur plan par tick karne ke liye phone theek hai. Code wale chapters laptop par aasaan hain.' },
    { id: 'pre-notepad',
      text: 'A notepad, on paper or on your phone. Every week ends with three lines in it: what made sense, what didn’t, and one question.',
      hi: 'Ek notepad, kaagaz par ya phone par. Har hafta isme teen lines ke saath khatam hota hai: kya samajh aaya, kya nahi, aur ek sawaal.' }
  ] },
  { group: 'Accounts, all free', groupHi: 'Accounts, sab free', items: [
    { id: 'pre-github',
      text: 'A GitHub account, in week 1. Chapter A1.5 walks you through it, and sets up the repository your work will live in.',
      hi: 'Ek GitHub account, week 1 mein. Chapter A1.5 aapko step by step le jaata hai, aur woh repository banata hai jisme aapka kaam rahega.',
      links: [['A1.5 GitHub basics', 'A1.5 GitHub basics', '/app/#/ch/a1g']] },
    { id: 'pre-signin',
      text: 'Sign in to this site with that GitHub account, so your progress and these notes follow you to every device.',
      hi: 'Usi GitHub account se is site par sign in kijiye, taaki aapki progress aur yeh notes har device par saath chalein.',
      links: [['Sign in', 'Sign in', '/api/auth/login?next=/worksheet/']] },
    { id: 'pre-key',
      text: 'A free model key, in week 5 and not before. The Connect page walks you through NVIDIA Build, which is free and needs no card.',
      hi: 'Ek free model key, week 5 mein, usse pehle nahi. Connect page aapko NVIDIA Build tak le jaata hai, jo free hai aur card nahi maangta.',
      links: [['Connect a model', 'Model connect kijiye', '/app/#/setup']] },
    { id: 'pre-later',
      text: 'Later, not now: Track B asks for a free analytics account in B3, such as PostHog, Mixpanel or Google Analytics. B4 names the rest of a product team’s tools.',
      hi: 'Baad mein, abhi nahi: Track B, B3 mein ek free analytics account maangta hai, jaise PostHog, Mixpanel ya Google Analytics. B4 product team ke baaki tools ke naam batata hai.',
      links: [['B3', 'B3', '/app/#/ch/b3'], ['B4', 'B4', '/app/#/ch/b4']] }
  ] },
  { group: 'Skills', groupHi: 'Skills', items: [
    { id: 'pre-skills',
      text: 'None assumed. Three short chapters teach what the course needs, just before it needs it: GitHub in A1.5, spreadsheets in A3.5, and reading Python in Chapter 0.8. Adding, multiplying and percentages are all the maths.',
      hi: 'Kuch bhi pehle se maana nahi gaya. Teen chhote chapters wahi sikhate hain jo course ko chahiye, theek zaroorat se pehle: A1.5 mein GitHub, A3.5 mein spreadsheets, aur Chapter 0.8 mein Python padhna. Jodna, guna karna aur percentages, bas itna hi ganit hai.',
      links: [['A1.5', 'A1.5', '/app/#/ch/a1g'], ['A3.5', 'A3.5', '/app/#/ch/a4s'], ['0.8', '0.8', '/app/#/ch/chpy']] }
  ] },
  { group: 'People', groupHi: 'Log', items: [
    { id: 'pre-people',
      text: 'Five people to interview, lined up by week 2. A3 asks you to talk to five people who have the problem you chose in A1, about what they actually did. Start asking in week 1.',
      hi: 'Interview ke liye paanch log, week 2 tak tay. A3 kehta hai ki A1 mein chuni problem jinhe hai, aise paanch logon se baat kijiye ki unhone asal mein kya kiya. Week 1 mein hi poochhna shuru kar dijiye.',
      how: 'Where to find them: former colleagues, friends of friends, LinkedIn, or an online group where such people gather. Ask for twenty minutes. Say you are not selling anything, and that you want to hear about the last time the problem happened.',
      howHi: 'Unhe kahan dhoondhein: purane saathi, doston ke dost, LinkedIn, ya koi online group jahan aise log milte hain. Bees minute maangiye. Bataiye ki aap kuch bech nahi rahe, aur aap pichhli baar jab yeh problem hui uske baare mein sunna chahte hain.',
      links: [['A3', 'A3', '/app/#/ch/a3']] }
  ] },
  { group: 'Money', groupHi: 'Paisa', items: [
    { id: 'pre-money',
      text: 'Nothing to pay. Every tool the course uses has a free tier that is enough. If a sign-up asks for a card, stop and check the Connect page: there is always a free way.',
      hi: 'Kuch bhi dena nahi. Course ke har tool ka free tier kaafi hai. Agar koi sign-up card maange, to ruk jaiye aur Connect page dekhiye: hamesha ek free raasta hota hai.' }
  ] }
];

/* The page's labels. {n} and {of} are filled in by the page. */
export const UI = {
  en: {
    lang: 'en', title: 'The worksheet', brand: 'AI From Zero worksheet',
    desc: 'The whole course on one page, arranged by topic: what to read in the book, what to do in the app, the project step it builds, the plan weeks it falls in, and your own notes.',
    lead: 'The whole course on one page, arranged by topic. Each topic lists what to read in the book, what to do in the app, the project step it builds and the plan weeks it falls in. The ticks come from your progress in all three, live. Your notes save here.',
    app: 'Workbook', book: 'Book', plan: 'Plan', other: 'Hinglish', otherHref: 'hi/',
    print: 'Save as PDF', csv: 'Download as a spreadsheet', expand: 'Open every topic', collapse: 'Close every topic',
    overall: '{n} of {of} steps done', explained: '{n} of {of} topics you can explain', next: 'Your next step',
    allDone: 'Every step is done. Well done.', loading: 'Loading your progress…',
    topics: 'Topics', topic: 'Topic', builds: 'Builds on', buildsNone: 'Nothing from an earlier topic.',
    read: 'Read in the book', do: 'Do in the app', onPlan: 'On the plan', project: 'Your project', deeper: 'Go deeper', words: 'Words in this topic',
    handsOn: '{n} hands-on exercises', handsOne: '1 hands-on exercise', capstone: 'Project task', inFull: 'in full about {n}',
    lookBack: 'Look back', paper: 'Paper', kase: 'Case', endWith: 'By the end of this topic you have',
    can: 'I can explain this topic to someone else, in my own words', ready: 'I have everything on this list, and I know how the course works', notes: 'Your notes', notesPh: 'What made sense, what didn’t, questions, links to what you made',
    done: 'Done', notYet: 'Not yet', half: 'Part 1 read', saved: 'Saved', savedHere: 'Saved on this device. Sign in to keep it on every device.',
    savedAcct: 'Saved on this device and to your account.', min: 'min', h: 'h', week: 'Week', from: 'from',
    print_note: 'Printed from the AI From Zero worksheet on {d}.',
    stageLabel: 'Project stage', checklist: 'Checklist', topicDone: 'done',
    csvHead: ['Topic', 'Kind', 'Item', 'Status', 'Link'], kRead: 'Book', kDo: 'App chapter', kTry: 'Try', kLook: 'Look back', kMake: 'Deliverable', kPre: 'Before you start', kCan: 'I can explain this', kNote: 'Notes',
    yes: 'Yes', no: 'No'
  },
  hi: {
    lang: 'hi', title: 'Worksheet', brand: 'AI From Zero worksheet',
    desc: 'Poora course ek page par, topic ke hisaab se: kitaab mein kya padhna hai, app mein kya karna hai, isse project ka kaunsa step banta hai, plan ke kaunse hafte aate hain, aur aapke apne notes.',
    lead: 'Poora course ek page par, topic ke hisaab se. Har topic batata hai ki kitaab mein kya padhna hai, app mein kya karna hai, isse project ka kaunsa step banta hai aur yeh plan ke kaunse hafton mein aata hai. Ticks teeno jagah ki aapki progress se, usi waqt aate hain. Aapke notes yahin save hote hain.',
    app: 'Workbook', book: 'Kitaab', plan: 'Plan', other: 'English', otherHref: '../',
    print: 'PDF ke roop mein save kijiye', csv: 'Spreadsheet ke roop mein download kijiye', expand: 'Har topic kholiye', collapse: 'Har topic band kijiye',
    overall: '{of} mein se {n} steps ho gaye', explained: '{of} mein se {n} topics aap samjha sakte hain', next: 'Aapka agla step',
    allDone: 'Har step ho gaya. Shabaash.', loading: 'Aapki progress load ho rahi hai…',
    topics: 'Topics', topic: 'Topic', builds: 'Kis par tika hai', buildsNone: 'Kisi pichhle topic se kuch nahi.',
    read: 'Kitaab mein padhiye', do: 'App mein kijiye', onPlan: 'Plan par', project: 'Aapka project', deeper: 'Aur gehraai mein', words: 'Is topic ke shabd',
    handsOn: '{n} hands-on exercises', handsOne: '1 hands-on exercise', capstone: 'Project ka kaam', inFull: 'poora karne mein lagbhag {n}',
    lookBack: 'Peechhe dekhiye', paper: 'Paper', kase: 'Case', endWith: 'Is topic ke ant tak aapke paas hoga',
    can: 'Main yeh topic kisi aur ko apne shabdon mein samjha sakta/sakti hoon', ready: 'Is list ki har cheez mere paas hai, aur main jaanta/jaanti hoon ki course kaise chalta hai', notes: 'Aapke notes', notesPh: 'Kya samajh aaya, kya nahi, sawaal, aur jo banaya uske links',
    done: 'Ho gaya', notYet: 'Abhi nahi', half: 'Pehla hissa padha', saved: 'Save ho gaya', savedHere: 'Is device par save hua. Har device par rakhne ke liye sign in kijiye.',
    savedAcct: 'Is device par aur aapke account mein save hua.', min: 'min', h: 'ghante', week: 'Week', from: 'se',
    print_note: 'AI From Zero worksheet se {d} ko print kiya gaya.',
    stageLabel: 'Project stage', checklist: 'Checklist', topicDone: 'ho gaye',
    csvHead: ['Topic', 'Kism', 'Cheez', 'Sthiti', 'Link'], kRead: 'Kitaab', kDo: 'App chapter', kTry: 'Try', kLook: 'Peechhe dekhiye', kMake: 'Deliverable', kPre: 'Shuru karne se pehle', kCan: 'Main samjha sakta/sakti hoon', kNote: 'Notes',
    yes: 'Haan', no: 'Nahi'
  }
};
