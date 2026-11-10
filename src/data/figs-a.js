/* Figures for Chapter 0 and Track A (the product half). What each says, in
   English and Hinglish; src/figs.js draws them. FIGPLACE says where each sits
   in its chapter: 'h:N' after the first paragraph under the Nth heading,
   'key' after the chapter's key line, 'top' after its first paragraph. */
window.FIGDATA = Object.assign(window.FIGDATA || {}, {

  'how-course-works': { t: 'cycle',
    title: ['One week of the course', 'Course ka ek hafta'],
    center: ['Every week, the same five moves', 'Har hafte, wahi paanch kadam'],
    steps: [
      { l: ['Read the story', 'Kahani padhiye'], ic: 'book', d: ['A chapter of the book shows the idea happening to a real team.', 'Kitaab ka ek chapter dikhata hai ki yeh idea ek asli team ke saath kaise hota hai.'] },
      { l: ['Do the chapter', 'Chapter kijiye'], ic: 'code', d: ['The app chapter makes you practise it, step by step.', 'App ka chapter aapse ise step by step practice karwata hai.'] },
      { l: ['Answer the boxes', 'Boxes ke jawaab dijiye'], ic: 'pen', d: ['Guess first, then check. Wrong guesses teach the most.', 'Pehle andaaza, phir jaanch. Galat andaaze sabse zyada sikhate hain.'] },
      { l: ['Build the project step', 'Project ka step banaiye'], ic: 'tool', d: ['Each chapter adds one piece to the one project you carry to the end.', 'Har chapter us ek project mein ek hissa jodta hai jo aap ant tak le jaate hain.'] },
      { l: ['Look back', 'Peechhe dekhiye'], ic: 'loop', d: ['Three lines in your notepad: what made sense, what did not, one question.', 'Notepad mein teen lines: kya samajh aaya, kya nahi, ek sawaal.'] }
    ],
    cap: ['Tap a step, or press Play to walk the week.', 'Kisi step par tap kijiye, ya hafta dekhne ke liye Play dabaiye.'] },

  'evidence-loop': { t: 'cycle',
    title: ['How you get better: the evidence loop', 'Behtar kaise hote hain: saboot ka chakra'],
    center: ['Progress is measured in things you made', 'Progress aapki banayi cheezon se naapi jaati hai'],
    steps: [
      { l: ['Score yourself', 'Khud ko score kijiye'], ic: 'chart', d: ['Rate each skill 0 to 3, with a piece of evidence for every score.', 'Har skill ko 0 se 3 tak rate kijiye, har score ke liye ek saboot ke saath.'] },
      { l: ['Pick a weak spot', 'Kamzor jagah chuniye'], ic: 'target', d: ['Practice aimed at your weakest skill moves you fastest.', 'Sabse kamzor skill par nishana lagakar kiya abhyaas sabse tez aage badhata hai.'] },
      { l: ['Make an artifact', 'Ek artifact banaiye'], ic: 'doc', d: ['A document, sheet or prototype someone else can open and check.', 'Aisa document, sheet ya prototype jise koi aur khol kar jaanch sake.'] },
      { l: ['Check it at the gate', 'Gate par jaanchiye'], ic: 'check', d: ['Score it 0 to 3. Move on only when every part scores at least 2.', 'Use 0 se 3 tak score kijiye. Aage tabhi badhiye jab har hissa kam se kam 2 ho.'] },
      { l: ['Log the decision', 'Faisla log kijiye'], ic: 'list', d: ['Date, decision, evidence, and what would change your mind.', 'Tareekh, faisla, saboot, aur kya aapka mann badal dega.'] }
    ],
    cap: ['The loop A1 sets up, and every later chapter runs.', 'Yeh chakra A1 shuru karta hai, aur har agla chapter chalata hai.'] },

  'problem-pick': { t: 'matrix',
    title: ['Which problem to build around', 'Kis problem ke aas-paas banaiye'],
    xl: ['How often it happens', 'Kitni baar hota hai'], yl: ['How much it hurts', 'Kitna dard deta hai'],
    q: [
      { l: ['Painful but rare', 'Dard bhara par kam'], d: ['Worth solving only if each case costs a lot.', 'Tabhi hal karne layak jab har case mehnga pade.'] },
      { l: ['Build here', 'Yahan banaiye'], d: ['Frequent and painful: people already want a fix.', 'Baar-baar aur dard bhara: log pehle se hal chahte hain.'] },
      { l: ['Ignore', 'Chhod dijiye'], d: ['Rare and mild. Nobody will switch tools for this.', 'Kam aur halka. Iske liye koi tool nahi badlega.'] },
      { l: ['Annoying habit', 'Chidhane wali aadat'], d: ['Frequent but mild. Hard to make anyone pay.', 'Baar-baar par halka. Kisi se paise lena mushkil.'] }
    ],
    pts: [
      { l: ['Weekly ticket themes', 'Hafte ke ticket themes'], x: 0.8, y: 0.78, d: ['Support leads read 300 tickets every Monday.', 'Support leads har Monday 300 tickets padhte hain.'] },
      { l: ['Yearly audit report', 'Saalana audit report'], x: 0.15, y: 0.7, d: ['Hard, but only once a year.', 'Mushkil, par saal mein ek baar.'] },
      { l: ['Renaming files', 'Files ka naam badalna'], x: 0.72, y: 0.2, d: ['Constant, but costs seconds.', 'Lagaataar, par kuch second ka kaam.'] },
      { l: ['Office party plan', 'Office party plan'], x: 0.2, y: 0.18, d: ['Rare and low stakes.', 'Kam aur chhota daav.'] }
    ],
    cap: ['Drag each idea to where you think it belongs. A1 asks you to choose a problem in the top-right.', 'Har idea ko wahan kheenchiye jahan aapko lagta hai. A1 upar-daayin wali problem chunne ko kehta hai.'] },

  'repo-history': { t: 'flow',
    title: ['A repository remembers every version', 'Repository har version yaad rakhti hai'],
    steps: [
      { l: ['Create the repo', 'Repo banaiye'], ic: 'flag', d: ['Commit 1: README.md, the front page.', 'Commit 1: README.md, pehla panna.'] },
      { l: ['Add the decision log', 'Decision log jodiye'], ic: 'doc', d: ['Commit 2: "Start the decision log".', 'Commit 2: "Start the decision log".'] },
      { l: ['Add research notes', 'Research notes jodiye'], ic: 'people', d: ['Commit 3: research/notes.md creates a folder too.', 'Commit 3: research/notes.md ek folder bhi banata hai.'] },
      { l: ['Delete a line', 'Ek line mitaiye'], ic: 'pen', d: ['Commit 4: the line is gone from the file, not from the history.', 'Commit 4: line file se gayi, history se nahi.'] },
      { l: ['Open History', 'History kholiye'], ic: 'clock', d: ['Every commit, its message and its time. Nothing is lost.', 'Har commit, uska message aur samay. Kuch nahi khota.'] }
    ],
    cap: ['Each box is one commit. That is why a key or a password must never go in.', 'Har box ek commit hai. Isi liye key ya password kabhi andar nahi jaana chahiye.'] },

  'four-risks': { t: 'flow',
    title: ['Four questions before you build', 'Banane se pehle chaar sawaal'],
    steps: [
      { l: ['Value', 'Value'], ic: 'star', d: ['Will people want it, enough to change what they do now?', 'Kya log ise itna chahenge ki abhi jo karte hain woh badal dein?'] },
      { l: ['Usability', 'Usability'], ic: 'person', d: ['Can they work out how to use it without help?', 'Kya woh bina madad ke samajh lenge ki ise kaise chalana hai?'] },
      { l: ['Feasibility', 'Feasibility'], ic: 'tool', d: ['Can the team build it, with this data and this model, in time?', 'Kya team ise is data aur is model ke saath, samay par bana sakti hai?'] },
      { l: ['Viability', 'Viability'], ic: 'money', d: ['Does it work for the business: cost, law, sales, support?', 'Kya yeh business ke liye chalta hai: kharch, kaanoon, sales, support?'] },
      { l: ['Build', 'Banaiye'], ic: 'rocket', d: ['Only an idea that passes all four is worth a sprint.', 'Sirf chaaron paar karne wala idea ek sprint ke layak hai.'] }
    ],
    cap: ['Most launches fail on the first question, which is the one nobody tests.', 'Zyadatar launches pehle sawaal par girte hain, jise koi nahi parakhta.'] },

  'b2b-b2c': { t: 'compare',
    title: ['B2B and B2C are different jobs', 'B2B aur B2C alag kaam hain'],
    rows: [['Who pays', 'Kaun paise deta hai'], ['Who uses it', 'Kaun use karta hai'], ['Who can block it', 'Kaun rok sakta hai'], ['How long a sale takes', 'Sale mein kitna samay'], ['What wins', 'Kya jeetta hai']],
    cols: [
      { l: ['B2B (companies)', 'B2B (companies)'], ic: 'grid', v: [['A budget owner', 'Budget ka maalik'], ['Employees', 'Karmachaari'], ['Security, legal, IT', 'Security, legal, IT'], ['Weeks to months', 'Hafton se mahino tak'], ['Proof it saves time or money', 'Saboot ki samay ya paisa bachta hai']], d: ['Three different people decide. Interview all three.', 'Teen alag log tay karte hain. Teeno se baat kijiye.'] },
      { l: ['B2C (people)', 'B2C (log)'], ic: 'person', v: [['The user', 'User khud'], ['The same person', 'Wahi insaan'], ['Nobody but them', 'Unke siwa koi nahi'], ['Seconds', 'Kuch second'], ['Habit and delight', 'Aadat aur khushi']], d: ['One person decides, fast, and leaves just as fast.', 'Ek insaan tay karta hai, jaldi, aur utni hi jaldi chala bhi jaata hai.'] }
    ],
    cap: ['Tap a column to read it on its own.', 'Akele padhne ke liye kisi column par tap kijiye.'] },

  'ask-past': { t: 'compare',
    title: ['Ask about the past, not the future', 'Bhavishya nahi, beete hue ke baare mein poochhiye'],
    rows: [['The question', 'Sawaal'], ['What you hear', 'Aap kya sunte hain'], ['What it is worth', 'Iski keemat']],
    cols: [
      { l: ['About the future', 'Bhavishya ke baare mein'], tone: 'bad', ic: 'warn', v: [['"Would you use a tool that…?"', '"Kya aap aisa tool use karenge jo…?"'], ['Polite yes', 'Vinamra haan'], ['Almost nothing', 'Lagbhag kuch nahi']], d: ['People are kind about ideas. Kindness is not evidence.', 'Log ideas ke baare mein dayalu hote hain. Dayaluta saboot nahi hai.'] },
      { l: ['About the past', 'Beete hue ke baare mein'], tone: 'good', ic: 'check', v: [['"Tell me about the last time…"', '"Pichhli baar jab… uske baare mein bataiye"'], ['What they actually did', 'Unhone asal mein kya kiya'], ['Evidence you can act on', 'Saboot jis par kaam ho sake']], d: ['A real story has times, tools, costs and workarounds in it.', 'Asli kahani mein samay, tools, kharch aur jugaad hote hain.'] }
    ],
    cap: ['A3’s whole method rests on this one switch.', 'A3 ka poora tareeka isi ek badlaav par tika hai.'] },

  'journey-map': { t: 'flow',
    title: ['A support lead’s Monday, step by step', 'Support lead ka Monday, step by step'],
    steps: [
      { l: ['Export last week’s tickets', 'Pichhle hafte ke tickets export'], ic: 'db', d: ['About 300 tickets, as a spreadsheet. 10 minutes.', 'Lagbhag 300 tickets, ek spreadsheet mein. 10 minute.'] },
      { l: ['Read them all', 'Sab padhna'], ic: 'eye', d: ['The slow part: about two hours. Pain point.', 'Dheema hissa: lagbhag do ghante. Dard ki jagah.'] },
      { l: ['Tag themes by hand', 'Haath se themes tag'], ic: 'tag', d: ['Tags vary by mood. Themes get missed. Pain point.', 'Tags mood ke hisaab se badalte hain. Themes chhoot jaate hain. Dard ki jagah.'] },
      { l: ['Write the report', 'Report likhna'], ic: 'pen', d: ['Top five themes with example tickets. 40 minutes.', 'Udaharan tickets ke saath top paanch themes. 40 minute.'] },
      { l: ['Send to product', 'Product ko bhejna'], ic: 'send', d: ['Product reads it on Tuesday, if at all.', 'Product ise Tuesday ko padhta hai, agar padhe to.'] }
    ],
    cap: ['A journey map shows where the time and the frustration really go.', 'Journey map dikhata hai ki samay aur jhunjhlahat asal mein kahan jaati hai.'] },

  'tickets-calc': { t: 'calc',
    title: ['A formula updates itself', 'Formula khud update hota hai'],
    inputs: [
      { id: 'w', l: ['B2: tickets a week', 'B2: hafte ke tickets'], min: 50, max: 1000, step: 10, v: 300 },
      { id: 'n', l: ['B3: weeks a year', 'B3: saal ke hafte'], min: 1, max: 52, step: 1, v: 52 }
    ],
    outputs: [
      { l: ['B4 = B2*B3: tickets a year', 'B4 = B2*B3: saal ke tickets'], f: function (v) { return v.w * v.n; }, big: true, bar: true },
      { l: ['=ROUND(B2/7, 1): a day', '=ROUND(B2/7, 1): roz'], f: function (v) { return Math.round(v.w / 7 * 10) / 10; }, fmt: 'dec' },
      { l: ['=B4*12%: tickets about billing', '=B4*12%: billing wale tickets'], f: function (v) { return v.w * v.n * 0.12; }, bar: true }
    ],
    cap: ['Move B2 or B3. Every total follows, because each is a formula, not a typed number.', 'B2 ya B3 ko khiskaiye. Har total saath badalta hai, kyunki har ek formula hai, likha hua number nahi.'] },

  'market-size': { t: 'calc',
    title: ['Size a market from the bottom up', 'Market ka size neeche se upar'],
    inputs: [
      { id: 'firms', l: ['Firms with the problem', 'Problem wali firms'], min: 1000, max: 30000, step: 500, v: 9000 },
      { id: 'price', l: ['What one firm pays a year (₹)', 'Ek firm saal mein kitna degi (₹)'], min: 20000, max: 400000, step: 10000, v: 120000, fmt: 'inr' },
      { id: 'reach', l: ['Share you can reach', 'Kitne tak pahunch sakte hain'], min: 5, max: 100, step: 5, v: 40 },
      { id: 'win', l: ['Share of those you could win', 'Unme se kitne jeet sakte hain'], min: 1, max: 30, step: 1, v: 5 }
    ],
    outputs: [
      { l: ['Whole market', 'Poora market'], f: function (v) { return v.firms * v.price; }, fmt: 'inr', bar: true },
      { l: ['The part you can reach', 'Jahan tak pahunch hai'], f: function (v) { return v.firms * v.price * v.reach / 100; }, fmt: 'inr', bar: true },
      { l: ['What you could win', 'Jo jeet sakte hain'], f: function (v) { return v.firms * v.price * v.reach / 100 * v.win / 100; }, fmt: 'inr', bar: true, big: true }
    ],
    cap: ['Each line is a guess you can argue with. Change one and watch the rest follow.', 'Har line ek andaaza hai jis par behas ho sakti hai. Ek badliye aur baaki ko saath chalte dekhiye.'] },

  'opp-tree': { t: 'tree',
    title: ['An opportunity tree', 'Opportunity tree'],
    root: { l: ['Outcome: weekly themes in 30 minutes', 'Nateeja: hafte ke themes 30 minute mein'], d: ['The result you want, measured. Everything below serves it.', 'Jo nateeja chahiye, naapa hua. Neeche sab isi ke liye hai.'], kids: [
      { l: ['Reading takes too long', 'Padhne mein bahut samay'], d: ['Heard in 5 of 5 interviews.', '5 mein se 5 interviews mein suna.'], kids: [
        { l: ['Auto-group tickets', 'Tickets apne aap group'], tone: 'good', d: ['Strong fit for a model. Test first.', 'Model ke liye achha fit. Pehle parkhiye.'] },
        { l: ['Read a sample only', 'Sirf ek sample padhna'], d: ['Cheap, but misses rare themes.', 'Sasta, par kam aane wale themes chhootenge.'] } ] },
      { l: ['Themes get missed', 'Themes chhoot jaate hain'], d: ['Heard in 3 of 5.', '5 mein se 3 mein suna.'], kids: [
        { l: ['Show every theme with counts', 'Har theme ginti ke saath'], d: ['Makes the long tail visible.', 'Lambi poonchh dikh jaati hai.'] } ] },
      { l: ['Report format varies', 'Report ka format badalta hai'], d: ['Heard in 2 of 5.', '5 mein se 2 mein suna.'], kids: [
        { l: ['One template', 'Ek template'], tone: 'warn', d: ['No AI needed. Do this anyway.', 'AI ki zaroorat nahi. Phir bhi kijiye.'] } ] } ] },
    cap: ['Tap a box to light its path back to the outcome.', 'Kisi box par tap kijiye, nateeje tak uska raasta jal uthega.'] },

  'impact-effort': { t: 'matrix',
    title: ['Prioritise: impact against effort', 'Prioritise: asar banaam mehnat'],
    xl: ['Effort', 'Mehnat'], yl: ['Impact', 'Asar'],
    q: [
      { l: ['Quick wins', 'Jaldi jeet'], d: ['Do these first.', 'Inhe pehle kijiye.'] },
      { l: ['Big bets', 'Bade daav'], d: ['Worth it, but plan them and test the riskiest part first.', 'Faydemand, par plan kijiye aur sabse jokhim bhara hissa pehle parkhiye.'] },
      { l: ['Fill-ins', 'Beech ke kaam'], d: ['Only when there is spare time.', 'Sirf jab samay bache.'] },
      { l: ['Money pits', 'Paisa doobne wale'], d: ['Say no, out loud, and write down why.', 'Saaf mana kijiye, aur likhiye kyun.'] }
    ],
    pts: [
      { l: ['Auto-tag themes', 'Themes auto-tag'], x: 0.35, y: 0.82, d: ['The core of the product.', 'Product ka mool.'] },
      { l: ['Hindi tickets', 'Hindi tickets'], x: 0.7, y: 0.66, d: ['A third of tickets, harder to get right.', 'Ek tihaai tickets, sahi karna mushkil.'] },
      { l: ['Export to Slack', 'Slack mein export'], x: 0.22, y: 0.32, d: ['Nice, not why anyone buys.', 'Achha hai, par isliye koi nahi khareedta.'] },
      { l: ['Custom dashboards', 'Custom dashboards'], x: 0.82, y: 0.25, d: ['Weeks of work, rarely asked for.', 'Hafton ka kaam, kam maanga gaya.'] }
    ],
    cap: ['A framework orders the list; it does not decide for you. Drag the dots and argue.', 'Framework list ko kram deta hai; faisla aapke liye nahi karta. Dots kheenchiye aur behas kijiye.'] },

  'now-next-later': { t: 'compare',
    title: ['A roadmap promises outcomes, not dates', 'Roadmap nateeje ka vaada karta hai, tareekh ka nahi'],
    rows: [['The outcome', 'Nateeja'], ['How sure we are', 'Kitna pakka'], ['Example', 'Udaharan']],
    cols: [
      { l: ['Now', 'Abhi'], tone: 'good', ic: 'bolt', v: [['Leads see top themes in 30 min', 'Leads 30 min mein top themes dekhein'], ['Committed', 'Pakka'], ['Theme grouping v1', 'Theme grouping v1']], d: ['Work that is planned, staffed and measured.', 'Aisa kaam jo plan, staff aur naapa hua hai.'] },
      { l: ['Next', 'Agla'], ic: 'flag', v: [['Hindi tickets grouped as well', 'Hindi tickets bhi group hon'], ['Likely', 'Shayad'], ['Mixed-language support', 'Mili-juli bhasha ka support']], d: ['Shaped, but waiting on what Now teaches us.', 'Aakaar mein, par Abhi se kya seekhte hain uske intezaar mein.'] },
      { l: ['Later', 'Baad mein'], tone: 'warn', ic: 'idea', v: [['Product team acts on themes faster', 'Product team themes par jaldi kaam kare'], ['A bet', 'Ek daav'], ['Themes straight into planning', 'Themes seedhe planning mein']], d: ['A direction, kept loose on purpose.', 'Ek disha, jaan-boojhkar dheeli rakhi gayi.'] }
    ],
    cap: ['Certainty falls from left to right, and the roadmap says so.', 'Baayen se daayen pakkapan ghatta hai, aur roadmap yeh saaf kehta hai.'] },

  'stakeholder-map': { t: 'matrix',
    title: ['Who can help or stop you', 'Kaun madad kar sakta hai ya rok sakta hai'],
    xl: ['Interest in the project', 'Project mein dilchaspi'], yl: ['Power over it', 'Is par taakat'],
    q: [
      { l: ['Keep satisfied', 'Santusht rakhiye'], d: ['Short updates; no surprises.', 'Chhote updates; koi achaanak baat nahi.'] },
      { l: ['Manage closely', 'Kareeb se sambhaliye'], d: ['Involve early. They can make or break it.', 'Jaldi shaamil kijiye. Yeh bana ya bigaad sakte hain.'] },
      { l: ['Monitor', 'Nazar rakhiye'], d: ['Light touch.', 'Halka sampark.'] },
      { l: ['Keep informed', 'Jaankari dete rahiye'], d: ['Often your best early users and allies.', 'Aksar aapke sabse achhe shuruaati users aur saathi.'] }
    ],
    pts: [
      { l: ['Compliance head', 'Compliance head'], x: 0.35, y: 0.85, d: ['Can block launch over personal data.', 'Personal data par launch rok sakti hain.'] },
      { l: ['Head of support', 'Head of support'], x: 0.85, y: 0.75, d: ['Owns the budget and the pain.', 'Budget aur dard dono inke paas.'] },
      { l: ['Support leads', 'Support leads'], x: 0.85, y: 0.3, d: ['The daily users.', 'Roz ke users.'] },
      { l: ['Finance', 'Finance'], x: 0.2, y: 0.55, d: ['Signs off cost.', 'Kharch par mohar lagata hai.'] }
    ],
    cap: ['Drag each person to where they stand for your project.', 'Har insaan ko wahan kheenchiye jahan woh aapke project ke liye khada hai.'] },

  'thin-slice': { t: 'stack',
    title: ['Build a thin slice, not one layer at a time', 'Ek patli slice banaiye, ek-ek layer nahi'],
    layers: [
      { l: ['Screen', 'Screen'], ic: 'image', s: ['What the support lead sees', 'Support lead kya dekhta hai'], d: ['One page: upload tickets, see themes.', 'Ek page: tickets upload, themes dekhiye.'] },
      { l: ['Logic', 'Logic'], ic: 'gear', s: ['Grouping and counting', 'Grouping aur ginti'], d: ['The rules around the model.', 'Model ke aas-paas ke niyam.'] },
      { l: ['Model call', 'Model call'], ic: 'chip', s: ['One prompt, one model', 'Ek prompt, ek model'], d: ['The cheapest model that passes your answer key.', 'Sabse sasta model jo aapki answer key paar kare.'] },
      { l: ['Data', 'Data'], ic: 'db', s: ['A week of real tickets', 'Ek hafte ke asli tickets'], d: ['Real, messy, and with personal details removed.', 'Asli, bikhra hua, aur personal details hataye hue.'] }
    ],
    slice: ['A thin slice: a little of every layer, working end to end', 'Patli slice: har layer ka thoda sa, shuru se ant tak chalta hua'],
    sliceBtn: ['Show the thin slice', 'Patli slice dikhaiye'],
    cap: ['Finishing the data layer first teaches you nothing a user can react to.', 'Pehle data layer poori karne se aisa kuch nahi seekhte jis par user kuch kahe.'] },

  'pred-vs-gen': { t: 'compare',
    title: ['Predictive AI and generative AI', 'Predictive AI aur generative AI'],
    rows: [['What it outputs', 'Kya nikaalta hai'], ['Example', 'Udaharan'], ['How you check it', 'Kaise jaanchte hain']],
    cols: [
      { l: ['Predictive', 'Predictive'], ic: 'chart', v: [['A label or a number', 'Ek label ya number'], ['Will this ticket be urgent?', 'Kya yeh ticket urgent hoga?'], ['Accuracy on known answers', 'Jaane hue jawaabon par accuracy']], d: ['Learns one narrow task from labelled examples.', 'Label kiye udaharanon se ek chhota kaam seekhta hai.'] },
      { l: ['Generative', 'Generative'], ic: 'chat', v: [['New text, images or code', 'Naya text, tasveer ya code'], ['Summarise this ticket', 'Is ticket ka saar likhiye'], ['Harder: many right answers', 'Mushkil: kai sahi jawaab']], d: ['Predicts the next piece of text, over and over.', 'Baar-baar text ka agla tukda predict karta hai.'] }
    ] },

  'prompt-rag-ft': { t: 'compare',
    title: ['Prompting, RAG or fine-tuning', 'Prompting, RAG ya fine-tuning'],
    rows: [['What changes', 'Kya badalta hai'], ['Fixes', 'Kya theek karta hai'], ['Cost to try', 'Aazmaane ki keemat'], ['Try it', 'Kab']],
    cols: [
      { l: ['Prompting', 'Prompting'], tone: 'good', ic: 'pen', v: [['The instructions', 'Instructions'], ['Format, tone, steps', 'Format, lehja, steps'], ['Minutes', 'Kuch minute'], ['Always first', 'Hamesha pehle']], d: ['Cheapest and fastest. Most problems end here.', 'Sabse sasta aur tez. Zyadatar problems yahin khatam.'] },
      { l: ['RAG', 'RAG'], ic: 'search', v: [['What the model can read', 'Model kya padh sakta hai'], ['Missing or fresh facts', 'Gayab ya naye facts'], ['Days', 'Kuch din'], ['When it lacks your facts', 'Jab use aapke facts nahi pata']], d: ['Gives the model your documents at question time.', 'Sawaal ke waqt model ko aapke documents deta hai.'] },
      { l: ['Fine-tuning', 'Fine-tuning'], tone: 'warn', ic: 'gear', v: [['The model’s weights', 'Model ke weights'], ['A style or narrow skill', 'Ek style ya chhoti skill'], ['Weeks and data', 'Hafte aur data'], ['Last, with evidence', 'Aakhir mein, saboot ke saath']], d: ['Teaches behaviour, not facts. Rarely the first fix.', 'Bartaav sikhata hai, facts nahi. Shayad hi pehla ilaaj.'] }
    ] },

  'ai-stack': { t: 'stack',
    title: ['The AI market in one picture', 'AI market ek tasveer mein'],
    layers: [
      { l: ['Applications', 'Applications'], ic: 'image', s: ['Products people use', 'Products jo log use karte hain'], d: ['Where your product sits. Most value is won or lost here.', 'Aapka product yahan baithta hai. Zyada value yahin jeeti ya haari jaati hai.'] },
      { l: ['Model APIs and platforms', 'Model APIs aur platforms'], ic: 'link', s: ['Access to models', 'Models tak pahunch'], d: ['You rent intelligence by the token.', 'Aap token ke hisaab se samajh kiraye par lete hain.'] },
      { l: ['Model labs', 'Model labs'], ic: 'chip', s: ['Train the models', 'Models train karte hain'], d: ['A few companies, huge costs.', 'Kuch companies, bahut bada kharch.'] },
      { l: ['Cloud', 'Cloud'], ic: 'cloud', s: ['Data centres', 'Data centres'], d: ['Where training and serving run.', 'Jahan training aur serving chalti hai.'] },
      { l: ['Chips', 'Chips'], ic: 'bolt', s: ['GPUs and accelerators', 'GPUs aur accelerators'], d: ['The scarcest layer, and the most expensive.', 'Sabse kam milne wali layer, aur sabse mehngi.'] }
    ],
    cap: ['Each layer depends on the one below it, and charges for it.', 'Har layer neeche wali par tiki hai, aur uske paise leti hai.'] }
});

window.FIGPLACE = Object.assign(window.FIGPLACE || {}, {
  ch0: [['how-course-works', 'h:3']],
  a1: [['evidence-loop', 'h:3'], ['problem-pick', 'h:6']],
  a1g: [['repo-history', 'h:2']],
  a2: [['b2b-b2c', 'h:2'], ['four-risks', 'h:3']],
  a3: [['ask-past', 'h:1'], ['journey-map', 'h:4']],
  a4s: [['tickets-calc', 'h:2']],
  a4: [['market-size', 'h:1'], ['opp-tree', 'h:5']],
  a5: [['impact-effort', 'h:4']],
  a6: [['now-next-later', 'h:1'], ['stakeholder-map', 'h:3']],
  a7: [['thin-slice', 'h:3']],
  a8: [['pred-vs-gen', 'h:1'], ['prompt-rag-ft', 'h:4'], ['ai-stack', 'h:5']]
});
