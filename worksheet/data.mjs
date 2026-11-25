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
    intro: 'Here is what you need before week 1: some time, a device, a few free accounts and a few people to talk to. You do not need to know coding, maths or AI. Tick each line when it is done.',
    introHi: 'Week 1 se pehle aapko yeh chahiye: thoda samay, ek device, kuch free accounts aur baat karne ke liye kuch log. Aapko coding, ganit ya AI aana zaroori nahi. Har line poori ho to us par tick kijiye.' },
  { id: 't1',
    title: 'Product basics: the problem, the people and the plan', hi: 'Product ki buniyaad: problem, log aur plan',
    intro: 'Before any code, you do a product manager’s first job. You name a problem. You talk to the people who have it. You find out how big the market is. You choose what to do first, and you write it down. Month 1 needs nothing installed.',
    introHi: 'Kisi bhi code se pehle aap product manager ka pehla kaam karte hain. Aap ek problem ka naam rakhte hain. Jinhe woh problem hai, unse baat karte hain. Market kitna bada hai, yeh dekhte hain. Pehle kya karna hai, yeh chunte hain aur use likhte hain. Month 1 mein kuch install nahi karna.' },
  { id: 't2',
    title: 'Meet the machine: tokens, your first call, memory and instructions', hi: 'Machine se milna: tokens, pehli call, yaadasht aur instructions',
    intro: 'You meet a model on your own text. You learn to read a few lines of Python. You connect a free model, send your first call and read its bill. Then you find out why the model forgets, and how instructions change its answers.',
    introHi: 'Aap apne hi text par ek model se milte hain. Python ki kuch lines padhna seekhte hain. Ek free model connect karte hain, pehli call bhejte hain aur uska bill padhte hain. Phir dekhte hain ki model bhoolta kyun hai, aur instructions uske jawaab kaise badalte hain.' },
  { id: 't3',
    title: 'Testing it, and the first jobs: sorting and summarising', hi: 'Use parakhna, aur pehle kaam: chhaantna aur saar likhna',
    intro: 'Before you trust a model, you build an answer key, like a teacher’s key, to check it against. Then you give the model its first two jobs: sorting messages into groups, and summarising them.',
    introHi: 'Model par bharosa karne se pehle aap ek answer key banate hain, jaise teacher ki key, jisse use jaancha ja sake. Phir model ko pehle do kaam dete hain: messages ko groups mein chhaantna, aur unka saar likhna.' },
  { id: 't4',
    title: 'Finding things: cutting text, words and meaning', hi: 'Cheezein dhoondhna: text kaatna, shabd aur matlab',
    intro: 'A model cannot use long text in one go. You cut it into pieces, like index cards. Then you find the right piece in two ways: by matching words, and by matching meaning.',
    introHi: 'Model lamba text ek saath use nahi kar sakta. Aap use index cards jaise tukdon mein kaatte hain. Phir sahi tukda do tarah se dhoondhte hain: shabd milakar, aur matlab milakar.' },
  { id: 't5',
    title: 'Measuring search, and your first complete system', hi: 'Search ko naapna, aur aapka pehla poora system',
    intro: 'You measure how good your search is, with numbers and not a feeling. Then you join the parts into your first complete system. It finds the right text and answers from it, like an open-book exam.',
    introHi: 'Aap naapte hain ki aapki search kitni achhi hai, andaaze se nahi, numbers se. Phir hisson ko jodkar apna pehla poora system banate hain. Woh sahi text dhoondhta hai aur usi se jawaab deta hai, jaise open-book exam.' },
  { id: 't6',
    title: 'Reliable answers, tools, context, thinking and the wait', hi: 'Bharosemand jawaab, tools, context, sochna aur intezaar',
    intro: 'A real product needs answers in a fixed shape. It needs a model that can use tools, and the right text in front of it. You also meet thinking models, and you design for the seconds a user waits.',
    introHi: 'Asli product ko tay shape mein jawaab chahiye. Use aisa model chahiye jo tools chala sake, aur uske saamne sahi text. Aap thinking models se bhi milte hain, aur un seconds ke liye design karte hain jab user intezaar karta hai.' },
  { id: 't7',
    title: 'Better search, attacks, and grading many answers', hi: 'Behtar search, hamle, aur bahut saare jawaabon ki grading',
    intro: 'You make search better. Then you attack your own system the way a stranger would. Then you grade many answers at once, with code and with a model, and you read the failures by hand.',
    introHi: 'Aap search ko behtar banate hain. Phir apne hi system par waise hamla karte hain jaise koi anjaan karega. Phir code aur model se ek saath bahut saare jawaab grade karte hain, aur galtiyan haath se padhte hain.' },
  { id: 't8',
    title: 'Cost, real documents and data rules', hi: 'Keemat, asli documents aur data ke niyam',
    intro: 'You work out what the feature costs to run. You pull text out of real documents, such as scans and tables. And you learn what data you may send to a model, and what you may not.',
    introHi: 'Aap hisaab lagate hain ki feature chalane mein kitna kharch aata hai. Scans aur tables jaise asli documents se text nikaalte hain. Aur seekhte hain ki model ko kaunsa data bhej sakte hain aur kaunsa nahi.' },
  { id: 't9',
    title: 'Governance, the spec, and the product decisions', hi: 'Governance, spec, aur product ke faisle',
    intro: 'You write the rules the system must keep. You write a spec, so someone else could build from it. Then you make the product calls: build or buy, fine-tune or not, what happens when the model is wrong, and how a pilot proves it works.',
    introHi: 'Aap woh niyam likhte hain jo system ko maanne hain. Aur ek spec likhte hain, jisse koi aur bana sake. Phir product ke faisle lete hain: banayein ya khareedein, fine-tune karein ya nahi, model galat ho to kya ho, aur pilot kaise saabit kare ki yeh kaam karta hai.' },
  { id: 't10',
    title: 'Production depth: building it the right way', hi: 'Production ki gehraai: ise sahi tareeke se banana',
    intro: 'The same ideas again, as deep as a production team goes: software basics, choosing a model, context, retrieval, workflows, agents, standard connections, pictures and voice, and release gates.',
    introHi: 'Wahi ideas dobara, utni gehraai tak jitni production team jaati hai: software basics, model chunna, context, retrieval, workflows, agents, standard connections, tasveerein aur awaaz, aur release gates.' },
  { id: 't11',
    title: 'Production depth: running it safely', hi: 'Production ki gehraai: ise surakshit chalana',
    intro: 'Running it for real. You learn traces, cost and rollback. You add security controls around a model you cannot fully trust. You write a spec for a system that is sometimes wrong. And you learn how it is delivered.',
    introHi: 'Ise asal mein chalana. Aap traces, cost aur rollback seekhte hain. Aise model ke aas-paas security controls lagate hain jis par poora bharosa nahi kiya ja sakta. Kabhi-kabhi galat hone wale system ka spec likhte hain. Aur seekhte hain ki use deliver kaise karte hain.' },
  { id: 't12',
    title: 'Capstone: ship it and defend it', hi: 'Capstone: ise ship kijiye aur iska bachaav kijiye',
    intro: 'You build the whole project. You break it on purpose and you measure it. You ship it where people can use it. Then you defend your choices, as you would in a review.',
    introHi: 'Aap poora project banate hain. Jaan-boojhkar use todte hain aur naapte hain. Use wahan ship karte hain jahan log use kar sakein. Phir apne faislon ka bachaav karte hain, jaise review mein karte.' },
  { id: 't13',
    title: 'The business, and your career', hi: 'Business, aur aapka career',
    intro: 'The business around the product: pricing, growth, analytics, tools and real users. Then the job itself: your portfolio, your story and practice interviews.',
    introHi: 'Product ke aas-paas ka business: pricing, growth, analytics, tools aur asli users. Phir naukri khud: aapka portfolio, aapki kahani aur practice interviews.' }
];

/* Try steps on the route are not chapters, so they say here which topic they
   practise. build.mjs fails if the route gains a try step that is not listed. */
export const TRY_TOPIC = {
  't:tokens': 't1',
  't:conversation': 't1',
  't:postings': 't1',
  't:setup': 't2',
  't:post-key': 't3',
  't:gov-project': 't4',
  't:publish-v0': 't5',
  't:aloud-1': 't6',
  't:post-attack': 't7',
  't:cv-lines': 't8',
  't:conversations': 't9',
  't:post-agent': 't10',
  't:aloud-2': 't10',
  't:timed-prd': 't11',
  't:finish': 't13',
  't:role-matrix': 't13',
  't:case-study': 't13',
  't:retro': 't13',
  't:capstone-plan': 't12',
  't:capstone-build': 't12',
  't:portfolio': 't13',
  't:interviews': 't13'
};

/* "Before you start". Each line is a tick. `links` are [label, labelHi, href];
   an href that starts with /app/, /book/ or /plan/ is on this site. */
export const BEFORE = [
  { group: 'Time', groupHi: 'Samay', items: [
    { id: 'pre-time',
      text: 'Set time aside. In month 1, give one to one and a half hours a week. In the capstone weeks it grows to about five hours a week. Every week on the plan shows its minutes.',
      hi: 'Samay nikaaliye. Month 1 mein hafte mein ek se derh ghanta dijiye. Capstone ke hafton mein yeh badhkar hafte mein lagbhag paanch ghante ho jaata hai. Plan ka har week apne minute dikhata hai.',
      links: [['The plan', 'Plan', '/plan/']] },
    { id: 'pre-restart',
      text: 'Know the way back. If life gets busy, restart the calendar on the plan. Your ticks stay as they are. Only the dates move.',
      hi: 'Wapas aane ka raasta jaaniye. Agar zindagi mein kaam badh jaayein, to plan par calendar dobara shuru kijiye. Aapke ticks jaise hain waise rahenge. Sirf tareekhein khiskengi.',
      links: [['Restart the calendar', 'Calendar dobara shuru kijiye', '/plan/#restart']] }
  ] },
  { group: 'Things', groupHi: 'Saamaan', items: [
    { id: 'pre-device',
      text: 'A laptop or desktop with a new browser, such as Chrome, Edge, Firefox or Safari. A phone is fine for reading the book and ticking the plan. The code chapters are easier on a laptop.',
      hi: 'Ek laptop ya desktop jisme naya browser ho, jaise Chrome, Edge, Firefox ya Safari. Kitaab padhne aur plan par tick karne ke liye phone theek hai. Code wale chapters laptop par aasaan hain.' },
    { id: 'pre-notepad',
      text: 'A notepad, on paper or on your phone. Every week ends with three lines in it: what made sense, what did not, and one question.',
      hi: 'Ek notepad, kaagaz par ya phone par. Har hafta isme teen lines ke saath khatam hota hai: kya samajh aaya, kya nahi, aur ek sawaal.' }
  ] },
  { group: 'Accounts, all free', groupHi: 'Accounts, sab free', items: [
    { id: 'pre-github',
      text: 'A GitHub account, in week 1. Chapter A1.5 shows you each step. It also makes the repository (an online folder that remembers every change) where your work will live.',
      hi: 'Ek GitHub account, week 1 mein. Chapter A1.5 aapko har step dikhata hai. Woh repository (ek online folder jo har badlaav yaad rakhta hai) bhi banata hai, jisme aapka kaam rahega.',
      links: [['A1.5 GitHub basics', 'A1.5 GitHub basics', '/app/#/ch/a1g']] },
    { id: 'pre-signin',
      text: 'Sign in to this site with that GitHub account. Then your progress and these notes follow you to every device.',
      hi: 'Usi GitHub account se is site par sign in kijiye. Tab aapki progress aur yeh notes har device par saath chalenge.',
      links: [['Sign in', 'Sign in', '/api/auth/login?next=/worksheet/']] },
    { id: 'pre-key',
      text: 'A free model key, in week 5 and not before. A key is a secret password for the model. The Connect page shows you NVIDIA Build, which is free and needs no card.',
      hi: 'Ek free model key, week 5 mein, usse pehle nahi. Key model ka ek gupt password hai. Connect page aapko NVIDIA Build dikhata hai, jo free hai aur card nahi maangta.',
      links: [['Connect a model', 'Model connect kijiye', '/app/#/setup']] },
    { id: 'pre-later',
      text: 'Later, not now. Track B asks for a free analytics account in B3, such as PostHog, Mixpanel or Google Analytics. B4 names the other tools of a product team.',
      hi: 'Baad mein, abhi nahi. Track B, B3 mein ek free analytics account maangta hai, jaise PostHog, Mixpanel ya Google Analytics. B4 product team ke baaki tools ke naam batata hai.',
      links: [['B3', 'B3', '/app/#/ch/b3'], ['B4', 'B4', '/app/#/ch/b4']] }
  ] },
  { group: 'Skills', groupHi: 'Skills', items: [
    { id: 'pre-skills',
      text: 'You do not need any skills yet. Three short chapters teach what the course needs, just before it needs it. A1.5 teaches GitHub. A3.5 teaches spreadsheets. Chapter 0.8 teaches reading Python. The only maths is adding, multiplying and percentages.',
      hi: 'Aapko abhi koi skill nahi chahiye. Teen chhote chapters wahi sikhate hain jo course ko chahiye, theek zaroorat se pehle. A1.5 GitHub sikhata hai. A3.5 spreadsheets sikhata hai. Chapter 0.8 Python padhna sikhata hai. Ganit bas jodna, guna karna aur percentages hai.',
      links: [['A1.5', 'A1.5', '/app/#/ch/a1g'], ['A3.5', 'A3.5', '/app/#/ch/a4s'], ['0.8', '0.8', '/app/#/ch/chpy']] }
  ] },
  { group: 'People', groupHi: 'Log', items: [
    { id: 'pre-people',
      text: 'One person to talk to by week 3, and two more by week 18. In week 3 the route asks for one real conversation, and in week 18 for two more. You ask what people really did. Start thinking in week 1 about who they could be. The full five-interview plan in A3 is a later, optional build.',
      hi: 'Week 3 tak baat karne ke liye ek insaan, aur week 18 tak do aur. Route week 3 mein ek asli baatcheet maangta hai, aur week 18 mein do aur. Aap poochhte hain ki logon ne asal mein kya kiya. Woh kaun ho sakte hain, yeh week 1 mein sochna shuru kijiye. A3 ka paanch interview wala poora plan baad ka, optional build hai.',
      how: 'Where to find them: former colleagues, friends of friends, LinkedIn, or an online group where such people meet. Ask for twenty minutes. Say you are not selling anything. Say you want to hear about the last time the problem happened.',
      howHi: 'Unhe kahan dhoondhein: purane saathi, doston ke dost, LinkedIn, ya koi online group jahan aise log milte hain. Bees minute maangiye. Bataiye ki aap kuch bech nahi rahe. Bataiye ki aap sunna chahte hain ki pichhli baar yeh problem kab hui.',
      links: [['A3', 'A3', '/app/#/ch/a3']] }
  ] },
  { group: 'Money', groupHi: 'Paisa', items: [
    { id: 'pre-money',
      text: 'Nothing to pay. Every tool the course uses has a free tier that is enough. If a sign-up asks for a card, stop and check the Connect page. There is always a free way.',
      hi: 'Kuch bhi dena nahi. Course ke har tool ka free tier kaafi hai. Agar koi sign-up card maange, to ruk jaiye aur Connect page dekhiye. Hamesha ek free raasta hota hai.' }
  ] }
];

/* The page's labels. {n} and {of} are filled in by the page. */
export const UI = {
  en: {
    lang: 'en', title: 'The worksheet', brand: 'AI From Zero worksheet',
    desc: 'The whole course as one path: read, do, check. One step at a time, with your next step always on top.',
    lead: 'One step at a time. Press the big button. Do what it says. Then come back. The order is already worked out for you. The route page in the playbook, the plan and this worksheet show the same steps in the same order.',
    how: ['Press the button on the card below. The book chapter or app lesson opens beside this page.', 'Read it or do it. A book chapter ticks itself when you reach the end. In the app, press “Mark chapter complete”.', 'Close the panel. The next step appears. Do it again.'],
    howTitle: 'How this page works', toolsTitle: 'Tools: save as PDF, spreadsheet, open every topic',
    nextLbl: 'Your next step', forJob: 'For the job', startBtn: 'Start', seeTopic: 'See this topic',
    go_read: 'Start reading', go_chapter: 'Open the lesson', go_try: 'Open it', go_look: 'Open the week',
    how_read: 'Read it in the book. It ticks itself when you reach the end.', how_chapter: 'Do it in the app. At the end, press “Mark chapter complete”.',
    how_try: 'Do it in the app. It ticks when you finish.', how_look: 'Five minutes on the plan: look back at the week and tick it off.',
    v_read: 'Read', v_chapter: 'Do', v_try: 'Try', v_look: 'Check',
    pathTitle: 'Your steps, in order', nextTag: 'Next', finishTitle: 'Finish this topic', extrasTitle: 'Extras, only if you want them', readyTitle: 'Get ready before week 1',
    readyLead: 'Sort these out as you go. Week 1 only needs the first group.', lookWhat: 'Five minutes: what stuck, and what did not.', yourPath: 'Where you are on the course',
    app: 'Workbook', book: 'Book', plan: 'Plan', other: 'Hinglish', otherHref: 'hi/',
    rdLabel: 'Reading beside the worksheet', rdNew: 'Open in a new tab', rdClose: 'Back to the worksheet', rdHint: 'Links to the app, the book and the plan open beside this page, so you never lose your place.',
    signIn: 'Sign in with GitHub', signedIn: 'Signed in as @{u}',
    print: 'Save as PDF', csv: 'Download as a spreadsheet', expand: 'Open every topic', collapse: 'Close every topic',
    overall: '{n} of {of} steps done', explained: '{n} of {of} topics you can explain', next: 'Your next step',
    allDone: 'Every step is done. Well done.', loading: 'Loading your progress…',
    topics: 'Topics', topic: 'Topic', builds: 'Builds on', buildsNone: 'Nothing from an earlier topic.',
    read: 'Read in the book', do: 'Do in the app', onPlan: 'On the plan', project: 'Your project', deeper: 'Go deeper', words: 'Words in this topic',
    handsOn: '{n} hands-on exercises', handsOne: '1 hands-on exercise', capstone: 'Project task', inFull: 'in full about {n}',
    lookBack: 'Look back', paper: 'Paper', kase: 'Case', endWith: 'By the end of this topic you have',
    moreFigs: 'More pictures in this topic', journey: 'The topics as one path', can: 'I can explain this topic to someone else, in my own words', ready: 'I have everything on this list, and I know how the course works', notes: 'Your notes', notesPh: 'What made sense, what didn’t, questions, links to what you made',
    done: 'Done', notYet: 'Not yet', half: 'Part 1 read', saved: 'Saved', savedHere: 'Saved on this device. Sign in to keep it on every device.',
    savedAcct: 'Saved on this device and to your account.', min: 'min', h: 'h', week: 'Week', from: 'from',
    print_note: 'Printed from the AI From Zero worksheet on {d}.',
    stageLabel: 'Project stage', checklist: 'Checklist', topicDone: 'done',
    csvHead: ['Topic', 'Kind', 'Item', 'Status', 'Link'], kRead: 'Book', kDo: 'App chapter', kTry: 'Try', kLook: 'Look back', kMake: 'Deliverable', kPre: 'Before you start', kCan: 'I can explain this', kNote: 'Notes',
    yes: 'Yes', no: 'No'
  },
  hi: {
    lang: 'hi', title: 'Worksheet', brand: 'AI From Zero worksheet',
    desc: 'Poora course ek raaste ki tarah: padhiye, kijiye, parakhiye. Ek samay par ek step, aur aapka agla step hamesha upar.',
    lead: 'Ek samay par ek step. Bada button dabaiye. Jo likha hai woh kijiye. Phir wapas aaiye. Kram pehle se tay hai. Playbook ka route page, plan aur yeh worksheet wahi steps usi kram mein dikhate hain.',
    how: ['Neeche wale card ka button dabaiye. Kitaab ka chapter ya app ka lesson isi page ke bagal mein khulta hai.', 'Use padhiye ya kijiye. Kitaab ka chapter ant tak pahunchte hi khud tick ho jaata hai. App mein “Mark chapter complete” dabaiye.', 'Panel band kijiye. Agla step dikhega. Phir wahi kijiye.'],
    howTitle: 'Yeh page kaise kaam karta hai', toolsTitle: 'Tools: PDF, spreadsheet, har topic kholna',
    nextLbl: 'Aapka agla step', forJob: 'Naukri ke liye', startBtn: 'Shuru kijiye', seeTopic: 'Yeh topic dekhiye',
    go_read: 'Padhna shuru kijiye', go_chapter: 'Lesson kholiye', go_try: 'Kholiye', go_look: 'Hafta kholiye',
    how_read: 'Ise kitaab mein padhiye. Ant tak pahunchte hi khud tick ho jaata hai.', how_chapter: 'Ise app mein kijiye. Ant mein “Mark chapter complete” dabaiye.',
    how_try: 'Ise app mein kijiye. Poora hote hi tick ho jaata hai.', how_look: 'Plan par paanch minute: hafte ko peechhe mudkar dekhiye aur tick kijiye.',
    v_read: 'Padhiye', v_chapter: 'Kijiye', v_try: 'Aazmaiye', v_look: 'Parakhiye',
    pathTitle: 'Aapke steps, kram se', nextTag: 'Agla', finishTitle: 'Yeh topic poora kijiye', extrasTitle: 'Extras, sirf agar chahein', readyTitle: 'Week 1 se pehle taiyaar ho jaiye',
    readyLead: 'Jaise-jaise samay mile, inhe nipta lijiye. Week 1 ko sirf pehla group chahiye.', lookWhat: 'Paanch minute: kya yaad raha, aur kya nahi.', yourPath: 'Course mein aap kahan hain',
    app: 'Workbook', book: 'Kitaab', plan: 'Plan', other: 'English', otherHref: '../',
    rdLabel: 'Worksheet ke saath padhiye', rdNew: 'Naye tab mein kholiye', rdClose: 'Worksheet par wapas', rdHint: 'App, kitaab aur plan ke links isi page ke bagal mein khulte hain, taaki aapki jagah kabhi na khoye.',
    signIn: 'GitHub se sign in kijiye', signedIn: '@{u} sign in hain',
    print: 'PDF ke roop mein save kijiye', csv: 'Spreadsheet ke roop mein download kijiye', expand: 'Har topic kholiye', collapse: 'Har topic band kijiye',
    overall: '{of} mein se {n} steps ho gaye', explained: '{of} mein se {n} topics aap samjha sakte hain', next: 'Aapka agla step',
    allDone: 'Har step ho gaya. Shabaash.', loading: 'Aapki progress load ho rahi hai…',
    topics: 'Topics', topic: 'Topic', builds: 'Kis par tika hai', buildsNone: 'Kisi pichhle topic se kuch nahi.',
    read: 'Kitaab mein padhiye', do: 'App mein kijiye', onPlan: 'Plan par', project: 'Aapka project', deeper: 'Aur gehraai mein', words: 'Is topic ke shabd',
    handsOn: '{n} hands-on exercises', handsOne: '1 hands-on exercise', capstone: 'Project ka kaam', inFull: 'poora karne mein lagbhag {n}',
    lookBack: 'Peechhe dekhiye', paper: 'Paper', kase: 'Case', endWith: 'Is topic ke ant tak aapke paas hoga',
    moreFigs: 'Is topic ki aur tasveerein', journey: 'Topics ek raaste ki tarah', can: 'Main yeh topic kisi aur ko apne shabdon mein samjha sakta/sakti hoon', ready: 'Is list ki har cheez mere paas hai, aur main jaanta/jaanti hoon ki course kaise chalta hai', notes: 'Aapke notes', notesPh: 'Kya samajh aaya, kya nahi, sawaal, aur jo banaya uske links',
    done: 'Ho gaya', notYet: 'Abhi nahi', half: 'Pehla hissa padha', saved: 'Save ho gaya', savedHere: 'Is device par save hua. Har device par rakhne ke liye sign in kijiye.',
    savedAcct: 'Is device par aur aapke account mein save hua.', min: 'min', h: 'ghante', week: 'Week', from: 'se',
    print_note: 'AI From Zero worksheet se {d} ko print kiya gaya.',
    stageLabel: 'Project stage', checklist: 'Checklist', topicDone: 'ho gaye',
    csvHead: ['Topic', 'Kism', 'Cheez', 'Sthiti', 'Link'], kRead: 'Kitaab', kDo: 'App chapter', kTry: 'Try', kLook: 'Peechhe dekhiye', kMake: 'Deliverable', kPre: 'Shuru karne se pehle', kCan: 'Main samjha sakta/sakti hoon', kNote: 'Notes',
    yes: 'Haan', no: 'Nahi'
  }
};
