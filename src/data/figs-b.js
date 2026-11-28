/* Figures for Part V (production depth), Track B (business and career), and
   the app's own pages (setup, practice). */
window.FIGDATA = Object.assign(window.FIGDATA || {}, {

  'http-call': { t: 'seq',
    title: ['An HTTP call (a message to a server, and its reply), and the contract inside it', 'Ek HTTP call (server ko message, aur uska jawaab), aur uske andar ka contract'],
    actors: [{ l: ['Your client', 'Aapka client'] }, { l: ['API server', 'API server'] }],
    msgs: [
      { a: 0, b: 1, l: ['POST /v1/chat + JSON', 'POST /v1/chat + JSON'], d: ['Headers (the label on the envelope) carry the key. The body (the letter inside) carries the messages.', 'Headers (lifaafe par likha) mein key. Body (andar ki chitthi) mein messages.'] },
      { a: 1, b: 0, l: ['429 Too Many Requests', '429 Too Many Requests'], d: ['Too many requests too fast (rate limited). Wait, then try again, waiting longer each time.', 'Bahut tez, bahut saare requests (rate limit). Rukiye, phir dobara koshish kijiye, har baar zyada rukkar.'] },
      { a: 0, b: 1, l: ['retry after 2 s', '2 s baad dobara'], d: ['Retries multiply cost: count them.', 'Retries kharch badhate hain: unhe giniye.'] },
      { a: 1, b: 0, l: ['200 OK + JSON', '200 OK + JSON'], d: ['Check the shape of the reply before you trust it. A missing field fails without any warning.', 'Bharosa karne se pehle reply ka shape jaanchiye. Gayab field bina chetavni ke fail hota hai.'] }
    ],
    cap: ['The reply code tells your app what to do next: here, wait and try again.', 'Jawaab ka code batata hai ki app ko aage kya karna hai: yahan, ruk kar phir koshish.'] },

  'model-bench': { t: 'bars',
    title: ['Choose a model on your own cases', 'Apne cases par model chuniye'],
    items: [['Small model', 'Chhota model'], ['Mid model', 'Beech ka model'], ['Large model', 'Bada model']],
    sets: [
      { l: ['Accuracy %', 'Accuracy %'], v: [84, 91, 93], hi: 1, d: ['On your 50 labelled cases, not a public leaderboard.', 'Aapke 50 label kiye cases par, public leaderboard par nahi.'] },
      { l: ['₹ per 1,000 calls', '₹ har 1,000 calls'], v: [6, 30, 160], hi: 1, d: ['The large model costs five times more for two points.', 'Bada model do points ke liye paanch guna mehnga.'] },
      { l: ['Seconds per answer', 'Har jawaab ke second'], v: [0.6, 1.4, 3.8], hi: 1, d: ['Speed is part of quality for a person waiting.', 'Intezaar karte insaan ke liye raftaar bhi quality hai.'] }
    ],
    fmt: 'dec',
    cap: ['Switch the measure. The best model depends on what you want most.', 'Maap badliye. Sabse achha model is par nirbhar hai ki aap sabse zyada kya chahte hain.'] },

  'memory-arch': { t: 'compare',
    title: ['Three ways to give a model memory', 'Model ko yaadasht dene ke teen tareeke'],
    rows: [['What is kept', 'Kya rakha jaata hai'], ['Cost as it grows', 'Badhne par kharch'], ['Risk', 'Jokhim']],
    cols: [
      { l: ['Full history', 'Poori history'], ic: 'list', v: [['Every turn', 'Har baat'], ['Grows every turn', 'Har baat ke saath badhta'], ['Lost in the middle', 'Beech mein kho jaata hai']], d: ['Simple, fine for short chats.', 'Saadha, chhoti baatcheet ke liye theek.'] },
      { l: ['Rolling summary', 'Chalta hua saar'], ic: 'pen', v: [['A summary plus recent turns', 'Saar aur haal ki baatein'], ['Flat', 'Seedha'], ['The summary drops a detail', 'Saar koi detail chhod deta hai']], d: ['Good default for long conversations.', 'Lambi baatcheet ke liye achha default.'] },
      { l: ['Retrieved memory', 'Laayi gayi yaadasht'], ic: 'db', v: [['Facts stored, fetched when relevant', 'Facts rakhe, zaroorat par laaye'], ['Low per call', 'Har call par kam'], ['Fetches the wrong memory', 'Galat yaad laata hai']], d: ['Memory treated like a search: find the right fact, then use it.', 'Yaadasht ko search ki tarah dekhna: sahi fact dhoondhiye, phir use kijiye.'] }
    ],
    cap: ['Only full history keeps getting dearer as the chat grows.', 'Chat lambi hone par sirf poori history har baar mehngi hoti jaati hai.'] },

  'ingest': { t: 'flow',
    title: ['Production RAG starts with ingestion: getting your documents ready', 'Production RAG ingestion se shuru hota hai: documents ko taiyaar karna'],
    steps: [
      { l: ['Sources', 'Sources'], ic: 'db', d: ['Help centre, policies, past tickets.', 'Help centre, policies, purane tickets.'] },
      { l: ['Parse', 'Parse'], ic: 'doc', d: ['Pages, tables and scans into clean text.', 'Pages, tables aur scans se saaf text.'] },
      { l: ['Chunk', 'Chunk'], ic: 'scissors', d: ['Along headings, with the title kept on each piece.', 'Headings par, har tukde par title ke saath.'] },
      { l: ['Embed', 'Embed'], ic: 'chip', d: ['Each chunk (index card) gets a vector: an address for its meaning.', 'Har chunk (index card) ko ek vector milta hai: uske matlab ka pata.'] },
      { l: ['Index with access tags', 'Access tags ke saath index'], ic: 'lock', d: ['Who may see each chunk travels with it.', 'Har chunk ko kaun dekh sakta hai, yeh uske saath chalta hai.'] },
      { l: ['Refresh', 'Refresh'], ic: 'loop', d: ['Changed and deleted documents must leave the index.', 'Badle aur mitaye documents index se bahar jaane chahiye.'] }
    ],
    cap: ['Everything the model can answer from has to pass through these steps first.', 'Model jis cheez se jawaab dega, woh pehle in sab steps se guzarti hai.'] },

  'workflow-agent': { t: 'compare',
    title: ['Prefer a fixed workflow; earn an agent', 'Fixed workflow chuniye; agent kamaaiye'],
    rows: [['Who decides the steps', 'Steps kaun tay karta hai'], ['Predictable', 'Andaaza layak'], ['Cost per task', 'Har kaam ka kharch'], ['Good for', 'Kiske liye']],
    cols: [
      { l: ['Workflow', 'Workflow'], tone: 'good', ic: 'list', v: [['Your code', 'Aapka code'], ['Yes', 'Haan'], ['Known', 'Pata'], ['Known steps, done many times', 'Jaane hue steps, baar-baar']], d: ['Easy to test, cheap to run, easy to explain.', 'Parakhna aasaan, chalana sasta, samjhaana aasaan.'] },
      { l: ['Agent', 'Agent'], tone: 'warn', ic: 'loop', v: [['The model, in a loop', 'Model, ek loop mein'], ['Less', 'Kam'], ['Varies widely', 'Bahut badalta'], ['Open-ended tasks', 'Khule kaam']], d: ['Needs limits, logs and a way to stop it.', 'Seemaon, logs aur rokne ke tareeke ki zaroorat.'] }
    ],
    cap: ['The first row is the difference: in a workflow your code decides the steps, in an agent the model does.', 'Pehli row hi fark hai: workflow mein steps aapka code tay karta hai, agent mein model.'] },

  'agent-control': { t: 'flow', loop: true, loopL: ['not done, within limits: go again', 'kaam baaki, seema mein: phir se'],
    title: ['An agent loop, with its stopping conditions', 'Agent loop, rukne ki sharton ke saath'],
    steps: [
      { l: ['Plan', 'Plan'], ic: 'idea', d: ['The model chooses the next action.', 'Model agla kaam chunta hai.'] },
      { l: ['Act', 'Kaam'], ic: 'tool', d: ['A tool runs, with only the permissions it needs.', 'Ek tool chalta hai, sirf zaroori permissions ke saath.'] },
      { l: ['Observe', 'Dekhiye'], ic: 'eye', d: ['The result goes back into the context (the model’s desk).', 'Nateeja wapas context (model ki mez) mein jaata hai.'] },
      { l: ['Check: stop?', 'Jaanch: rukein?'], ic: 'stop', d: ['Goal met, step limit, budget spent, or a person must approve.', 'Lakshya poora, step seema, budget khatam, ya kisi insaan ki manzoori.'] }
    ],
    cap: ['Agent failures are control failures: a loop with no stop is the bug.', 'Agent ki galtiyan control ki galtiyan hain: bina rukne wala loop hi bug hai.'] },

  'mcp': { t: 'seq',
    title: ['MCP: one standard plug for tools', 'MCP: tools ke liye ek standard plug'],
    actors: [{ l: ['Your app (MCP client)', 'Aapka app (MCP client)'] }, { l: ['MCP server', 'MCP server'] }, { l: ['Ticket system', 'Ticket system'] }],
    msgs: [
      { a: 0, b: 1, l: ['list tools', 'tools ki list'], d: ['Any MCP client can ask any MCP server what it offers.', 'Koi bhi MCP client kisi bhi MCP server se poochh sakta hai ki woh kya deta hai.'] },
      { a: 1, b: 0, l: ['search_tickets, add_note', 'search_tickets, add_note'], d: ['Names, descriptions and input schemas (the form of boxes each tool fills).', 'Naam, varnan aur input schemas (har tool ke bharne wale khaanon ka form).'] },
      { a: 0, b: 1, l: ['call search_tickets', 'call search_tickets'], d: ['The model picked it; your app sends it.', 'Model ne chuna; aapka app bhejta hai.'] },
      { a: 1, b: 2, l: ['query', 'query'], d: ['The server holds the credentials (the keys), not the model.', 'Credentials (chaabiyan) server ke paas hain, model ke paas nahi.'] },
      { a: 2, b: 0, l: ['results', 'nateeje'], d: ['A standard plug does not make a tool safe. Review every server you connect.', 'Standard plug tool ko surakshit nahi banata. Har jode gaye server ko jaanchiye.'], dash: true }
    ],
    cap: ['The client asks the server what it can do before it calls anything.', 'Client kuch call karne se pehle server se poochhta hai ki woh kya kar sakta hai.'] },

  'voice-pipeline': { t: 'flow',
    title: ['Voice is a pipeline, and every step adds delay', 'Awaaz ek pipeline hai, har step deri jodta hai'],
    steps: [
      { l: ['Speech in', 'Awaaz andar'], ic: 'mic', d: ['The caller speaks, in Hindi, English or both.', 'Caller Hindi, English ya dono mein bolta hai.'] },
      { l: ['Speech to text', 'Awaaz se text'], ic: 'doc', d: ['About 300 ms (milliseconds, thousandths of a second). Accents and noise cause errors here.', 'Lagbhag 300 ms (millisecond, second ka hazaarvaan hissa). Lehje aur shor se yahan galtiyan.'] },
      { l: ['Model', 'Model'], ic: 'chip', d: ['About 700 ms to the first words, if streamed (sent word by word).', 'Stream ho (shabd-shabd karke bheja jaaye) to pehle shabdon tak lagbhag 700 ms.'] },
      { l: ['Text to speech', 'Text se awaaz'], ic: 'chat', d: ['About 200 ms to the first sound.', 'Pehli awaaz tak lagbhag 200 ms.'] },
      { l: ['Speech out', 'Awaaz bahar'], ic: 'send', d: ['Over about 1.5 s in all, a pause starts to feel rude.', 'Kul lagbhag 1.5 s se zyada, khamoshi asabhya lagne lagti hai.'] }
    ],
    cap: ['Every box adds delay, so the wait a caller feels is the sum of all five.', 'Har dabba deri jodta hai, isliye bolne wale ko jo intezaar lagta hai woh paancho ka jod hai.'] },

  'eval-levels': { t: 'stack',
    title: ['Measure at several levels', 'Kai staron par naapiye'],
    layers: [
      { l: ['Live metrics', 'Live metrics'], ic: 'trend', s: ['What users do', 'Users kya karte hain'], d: ['Edits, escalations, thumbs down. The final truth, but late.', 'Edits, escalations, thumbs down. Aakhri sach, par der se.'] },
      { l: ['End-to-end evals', 'End-to-end evals'], ic: 'target', s: ['Question to answer', 'Sawaal se jawaab'], d: ['Your answer key, run on the whole system.', 'Aapki answer key, poore system par.'] },
      { l: ['Component evals', 'Component evals'], ic: 'layers', s: ['Retrieval, extraction, routing', 'Retrieval, extraction, routing'], d: ['Find which part broke.', 'Pata chalta hai kaunsa hissa toota.'] },
      { l: ['Unit checks', 'Unit checks'], ic: 'code', s: ['Schemas, formats, limits', 'Schemas, formats, seemayein'], d: ['Fast and exact. Run on every change.', 'Tez aur exact. Har badlaav par chalaiye.'] }
    ],
    arrow: ['A release gate: every level must pass before shipping', 'Release gate: ship se pehle har star paas ho'],
    cap: ['A good score at the top can hide a broken part lower down.', 'Upar ka achha score neeche ke kharab hisse ko chhupa sakta hai.'] },

  'trace': { t: 'bars',
    title: ['Inside one trace (the diary of one request): where the time goes', 'Ek trace (ek request ki diary) ke andar: samay kahan jaata hai'],
    items: [['Retrieve', 'Retrieve'], ['Rerank', 'Rerank'], ['Model call', 'Model call'], ['Tool call', 'Tool call'], ['Check output', 'Output jaanch']],
    sets: [
      { l: ['Milliseconds', 'Milliseconds'], v: [120, 180, 2100, 340, 15], hi: 2, d: ['The model call is most of the wait. That is where to look first.', 'Zyadatar intezaar model call mein. Pehle wahin dekhiye.'] },
      { l: ['Cost share %', 'Kharch ka hissa %'], v: [3, 9, 78, 8, 2], hi: 2, d: ['Cost and time point at the same step (span) here. They do not always.', 'Yahan kharch aur samay ek hi step (span) dikhate hain. Hamesha nahi.'] }
    ],
    cap: ['A trace records every step of one request, so a slow or costly answer can be explained.', 'Trace ek request ka har step likhta hai, taaki dheema ya mehnga jawaab samjhaya ja sake.'] },

  'controls': { t: 'stack',
    title: ['Controls around a model you cannot fully trust', 'Aise model ke aas-paas controls jis par poora bharosa nahi'],
    layers: [
      { l: ['Input checks', 'Input checks'], ic: 'filter', s: ['Lower the odds', 'Sambhavna ghataate'], d: ['Catch known attacks. Useful, never enough on its own.', 'Jaane hue hamle pakadte hain. Kaam ke, par akele kaafi nahi.'] },
      { l: ['Least privilege', 'Kam se kam adhikaar'], ic: 'key', s: ['Remove capability', 'Kshamata hataate'], d: ['Each tool gets only what it needs: read, not write; one table, not all.', 'Har tool ko sirf zaroori: padhna, likhna nahi; ek table, sab nahi.'] },
      { l: ['Human approval', 'Insaani manzoori'], ic: 'person', s: ['For risky actions', 'Jokhim wale kaam ke liye'], d: ['Sending, paying and deleting wait for a person.', 'Bhejna, bhugtaan aur mitaana insaan ka intezaar karte hain.'] },
      { l: ['Output checks', 'Output checks'], ic: 'eye', s: ['Before it leaves', 'Bahar jaane se pehle'], d: ['Block personal data and links to unknown sites.', 'Personal data aur anjaan sites ke links rokiye.'] },
      { l: ['Logs', 'Logs'], ic: 'list', s: ['Prove what happened', 'Kya hua saabit karte'], d: ['Every tool call is written down. A red team (people who try to break it) tests it.', 'Har tool call likha jaata hai. Red team (jo ise todne ki koshish karte hain) ise parakhti hai.'] }
    ],
    cap: ['No single control is trusted alone: each layer catches what the one before it missed.', 'Akele kisi ek control par bharosa nahi: har layer woh pakadti hai jo pichhli chhod gayi.'] },

  'metric-types': { t: 'compare',
    title: ['Keep the four kinds of metric apart', 'Chaar tarah ke metrics alag rakhiye'],
    rows: [['Example', 'Udaharan'], ['Who watches it', 'Kaun dekhta hai']],
    cols: [
      { l: ['Model quality', 'Model quality'], ic: 'target', v: [['Answer accuracy 91%', 'Jawaab accuracy 91%'], ['The team', 'Team']], d: ['Needed, but nobody buys accuracy.', 'Zaroori, par accuracy koi nahi khareedta.'] },
      { l: ['Product', 'Product'], ic: 'person', v: [['Leads use it weekly', 'Leads har hafte use karte'], ['The PM', 'PM']], d: ['Shows whether people choose it.', 'Dikhata hai ki log ise chunte hain ya nahi.'] },
      { l: ['Business', 'Business'], ic: 'money', v: [['Hours saved a month', 'Mahine ke bache ghante'], ['Leadership', 'Leadership']], d: ['Why the budget exists.', 'Budget kyun hai.'] },
      { l: ['Guardrail', 'Guardrail'], tone: 'bad', ic: 'shield', v: [['Personal data leaks: 0', 'Personal data leak: 0'], ['Everyone', 'Sab']], d: ['Must not get worse while the others improve.', 'Baaki sudharte hue bhi yeh bigadna nahi chahiye.'] }
    ],
    cap: ['Each kind answers a different person: the team, the PM, leadership and everyone.', 'Har kism ka metric alag vyakti ko jawaab deta hai: team, PM, leadership aur sab.'] },

  'latency-budget': { t: 'calc',
    title: ['Response time is a budget: waiting time you spend step by step', 'Jawaab ka samay ek budget hai: intezaar ka samay, jo step-step kharch hota hai'],
    inputs: [
      { id: 'net', l: ['Network', 'Network'], min: 50, max: 800, step: 10, v: 150, fmt: 'ms' },
      { id: 'ret', l: ['Retrieval and rerank', 'Retrieval aur rerank'], min: 50, max: 1500, step: 10, v: 300, fmt: 'ms' },
      { id: 'mod', l: ['Model, to the full answer', 'Model, poore jawaab tak'], min: 300, max: 8000, step: 100, v: 2200, fmt: 'ms' },
      { id: 'post', l: ['Checks after', 'Baad ki jaanch'], min: 0, max: 800, step: 10, v: 100, fmt: 'ms' },
      { id: 'goal', l: ['Your budget', 'Aapka budget'], min: 1000, max: 8000, step: 100, v: 3000, fmt: 'ms' }
    ],
    outputs: [
      { l: ['Total', 'Kul'], f: function (v) { return v.net + v.ret + v.mod + v.post; }, fmt: 'ms', bar: true, big: true },
      { l: ['Budget', 'Budget'], f: function (v) { return v.goal; }, fmt: 'ms', bar: true },
      { l: ['Left over (negative: over budget)', 'Bacha hua (negative: budget se zyada)'], f: function (v) { return v.goal - (v.net + v.ret + v.mod + v.post); }, fmt: 'ms' }
    ],
    cap: ['Give every step a share before you build. The model usually takes most of it.', 'Banane se pehle har step ko hissa dijiye. Zyadatar model sabse zyada leta hai.'] },

  'cap-stages': { t: 'flow',
    title: ['The capstone, start to finish', 'Capstone, shuru se ant tak'],
    steps: [
      { l: ['Discover', 'Discover'], ic: 'people', d: ['Real users, a real problem, evidence written down.', 'Asli users, asli problem, likha hua saboot.'] },
      { l: ['Specify', 'Spec'], ic: 'doc', d: ['A PRD (the recipe card for your product) with an answer key and a kill switch (a way to stop it).', 'PRD (product ka recipe card), answer key aur kill switch (ise rokne ka tareeka) ke saath.'] },
      { l: ['Build', 'Banaiye'], ic: 'tool', d: ['A thin slice that works end to end.', 'Patli slice jo shuru se ant tak chale.'] },
      { l: ['Break', 'Todiye'], ic: 'warn', d: ['Attack it: injection (hidden orders in the input), bad inputs, edge cases (odd, rare inputs).', 'Hamla kijiye: injection (input mein chhupe aadesh), bure inputs, kinaare ke cases (ajeeb, kam aane wale inputs).'] },
      { l: ['Measure', 'Naapiye'], ic: 'chart', d: ['Quality, cost and speed, reported together.', 'Quality, kharch aur raftaar, ek saath.'] },
      { l: ['Ship', 'Ship'], ic: 'rocket', d: ['Somewhere real people can use it.', 'Wahan jahan asli log use kar sakein.'] },
      { l: ['Defend', 'Bachaav'], ic: 'shield', d: ['Explain every choice as you would to a review panel.', 'Har faisla waise samjhaiye jaise review panel ko.'] }
    ],
    cap: ['Seven stages, in order, from finding the problem to defending the result.', 'Saat stages, kram se, problem dhoondhne se lekar nateeje ki raksha tak.'] },

  'pricing-models': { t: 'compare',
    title: ['Four ways to charge for an AI product', 'AI product ke paise lene ke chaar tareeke'],
    rows: [['You charge for', 'Paise kiske'], ['Good when', 'Kab achha'], ['Risk', 'Jokhim']],
    cols: [
      { l: ['Per seat', 'Har seat'], ic: 'person', v: [['Each user', 'Har user'], ['Use is steady', 'Use sthir ho'], ['Heavy users cost you money', 'Bhaari users nuksaan karate']], d: ['Buyers know it well, but the margin (your profit) can vanish.', 'Khareedaar ise jaante hain, par margin (aapka munafa) gayab ho sakta hai.'] },
      { l: ['Usage', 'Usage'], ic: 'bolt', v: [['Calls or tokens', 'Calls ya tokens'], ['Use varies a lot', 'Use bahut badle'], ['Bills scare buyers', 'Bills khareedaaron ko daraate']], d: ['Matches your cost; hard to budget for.', 'Aapke kharch se milta; budget banana mushkil.'] },
      { l: ['Outcome', 'Nateeja'], ic: 'target', v: [['Each resolved ticket', 'Har hal hua ticket'], ['Outcomes are clear', 'Nateeje saaf hon'], ['Arguments about credit', 'Shrey par behas']], d: ['Sells value directly; needs trusted measurement.', 'Seedhe value bechta; bharose layak naap chahiye.'] },
      { l: ['Hybrid', 'Hybrid'], ic: 'layers', v: [['A base plus usage', 'Base aur usage'], ['Most AI products', 'Zyadatar AI products'], ['Complex to explain', 'Samjhaana mushkil']], d: ['Common, because it shares the risk.', 'Aam, kyunki jokhim baant-ta hai.'] }
    ],
    cap: ['Read the Risk row: each way of charging has its own way of going wrong.', 'Risk wali row padhiye: kamaai ke har tareeke ka galat hone ka apna ek tareeka hai.'] },

  'unit-econ': { t: 'calc',
    title: ['Unit economics: what one customer earns you, after costs', 'Unit economics: ek customer se kamaai, kharch ke baad'],
    inputs: [
      { id: 'price', l: ['Price per user a month (₹)', 'Har user har mahine daam (₹)'], min: 200, max: 5000, step: 50, v: 1500, fmt: 'inr' },
      { id: 'ai', l: ['AI cost per user a month (₹)', 'Har user AI kharch mahine (₹)'], min: 10, max: 2000, step: 10, v: 350, fmt: 'inr' },
      { id: 'infra', l: ['Hosting and tools (₹)', 'Hosting aur tools (₹)'], min: 0, max: 800, step: 10, v: 120, fmt: 'inr' },
      { id: 'support', l: ['Support per user (₹)', 'Har user support (₹)'], min: 0, max: 800, step: 10, v: 180, fmt: 'inr' }
    ],
    outputs: [
      { l: ['Contribution per user', 'Har user yogdaan'], f: function (v) { return v.price - v.ai - v.infra - v.support; }, fmt: 'inr', bar: true, big: true },
      { l: ['Contribution margin', 'Contribution margin'], f: function (v) { return (v.price - v.ai - v.infra - v.support) / v.price * 100; }, fmt: 'pct' },
      { l: ['AI cost as a share of price', 'Daam mein AI kharch ka hissa'], f: function (v) { return v.ai / v.price * 100; }, fmt: 'pct' }
    ],
    cap: ['AI cost grows with use. Push it up and watch the margin go.', 'AI kharch use ke saath badhta hai. Ise badhaiye aur margin ghatte dekhiye.'] },

  'aarrr': { t: 'funnel',
    title: ['The growth funnel (AARRR): many people enter, fewer stay', 'Growth funnel (AARRR): bahut log aate hain, kam rukte hain'],
    start: 10000, fmt: 'int',
    stages: [
      { l: ['Acquisition: visit', 'Acquisition: aaye'], d: ['People who arrive at the site.', 'Jo log site par aate hain.'] },
      { l: ['Activation: first value', 'Activation: pehli value'], rate: 30, d: ['Saw their first themes from their own tickets.', 'Apne tickets se pehle themes dekhe.'] },
      { l: ['Retention: back next week', 'Retention: agle hafte wapas'], rate: 45, d: ['Came back without being reminded.', 'Bina yaad dilaye wapas aaye.'] },
      { l: ['Referral: told a colleague', 'Referral: saathi ko bataya'], rate: 15, d: ['Shared a report with someone.', 'Kisi ke saath report share ki.'] },
      { l: ['Revenue: paid', 'Revenue: paise diye'], rate: 20, d: ['Became a paying team.', 'Paise dene wali team bani.'] }
    ],
    cap: ['Slide each rate. A small rise early in the funnel changes everything after it.', 'Har rate khiskaiye. Funnel ke shuru mein chhota badhaav baad ka sab badal deta hai.'] },

  'north-star': { t: 'tree',
    title: ['A North Star and the inputs that move it', 'North Star aur use hilaane wale inputs'],
    root: { l: ['North Star: teams acting on weekly themes', 'North Star: hafte ke themes par kaam karti teams'], d: ['One number that captures the value users get.', 'Ek number jo users ko mili value pakadta hai.'], kids: [
      { l: ['New teams activated', 'Nayi active teams'], d: ['Uploaded tickets and saw themes in the first session.', 'Pehle session mein tickets upload karke themes dekhe.'] },
      { l: ['Weekly reports shared', 'Hafte ki reports share'], d: ['A report reached the product team.', 'Report product team tak pahunchi.'] },
      { l: ['Themes turned into work', 'Themes se kaam bana'], d: ['A theme was linked to a ticket in planning.', 'Theme planning ke ek ticket se juda.'] },
      { l: ['Guardrail: wrong themes reported', 'Guardrail: galat themes ki shikayat'], tone: 'bad', d: ['Must stay low while the others grow.', 'Baaki badhte hue bhi yeh kam rehna chahiye.'] } ] },
    cap: ['One number sits on top, the inputs move it, and the guardrail must not get worse.', 'Sabse upar ek number, neeche ke inputs use hilate hain, aur guardrail kharab nahi hona chahiye.'] },

  'ab-calc': { t: 'calc',
    title: ['How many users an A/B test (two versions, compared) needs', 'A/B test (do versions ki tulna) ko kitne users chahiye'],
    inputs: [
      { id: 'p', l: ['Today’s conversion %', 'Aaj ka conversion %'], min: 1, max: 60, step: 1, v: 10 },
      { id: 'lift', l: ['Smallest change worth seeing (points)', 'Dekhne layak sabse chhota badlaav (points)'], min: 0.5, max: 10, step: 0.5, v: 2, fmt: 'dec' },
      { id: 'daily', l: ['Users a day', 'Roz ke users'], min: 50, max: 20000, step: 50, v: 800 }
    ],
    outputs: [
      { l: ['Users per group', 'Har group mein users'], f: function (v) { var p = v.p / 100, d = v.lift / 100; return Math.ceil(16 * p * (1 - p) / (d * d)); }, bar: true, big: true },
      { l: ['Days to run (two groups)', 'Kitne din (do groups)'], f: function (v) { var p = v.p / 100, d = v.lift / 100; return Math.ceil(2 * 16 * p * (1 - p) / (d * d) / v.daily); }, fmt: 'int' }
    ],
    cap: ['A rule of thumb: about 16 × p(1−p) ÷ change² per group. Halve the change and you need four times the users.', 'Thumb rule: har group lagbhag 16 × p(1−p) ÷ badlaav². Badlaav aadha kijiye, users chaar guna chahiye.'] },

  'toolchain': { t: 'stack',
    title: ['An AI product toolchain (the set of tools you use), by job', 'AI product ki toolchain (aapke tools ka set), kaam ke hisaab se'],
    layers: [
      { l: ['Code and history', 'Code aur history'], ic: 'code', s: ['GitHub', 'GitHub'], d: ['Never store secrets here. Every change can be reviewed.', 'Yahan raaz kabhi mat rakhiye. Har badlaav dekha ja sakta hai.'] },
      { l: ['Deploy and roll back', 'Deploy aur rollback'], ic: 'rocket', s: ['Vercel', 'Vercel'], d: ['Every push previewed; a bad release undone in minutes.', 'Har push ka preview; buri release minuton mein wapas.'] },
      { l: ['Data and sign-in', 'Data aur sign-in'], ic: 'db', s: ['Supabase', 'Supabase'], d: ['Row-level rules so one customer never sees another’s data.', 'Row-level niyam taaki ek customer doosre ka data kabhi na dekhe.'] },
      { l: ['Analytics', 'Analytics'], ic: 'chart', s: ['PostHog', 'PostHog'], d: ['Events, funnels and cohorts (groups of users who started together) from real use.', 'Asli use se events, funnels aur cohorts (saath shuru karne wale users ke groups).'] },
      { l: ['Model provider', 'Model provider'], ic: 'chip', s: ['Any, behind your own interface', 'Koi bhi, aapke apne interface ke peeche'], d: ['You can swap it, because old models get switched off (retired).', 'Badla ja sake, kyunki purane models band (retire) ho jaate hain.'] }
    ],
    cap: ['Choose tools by the job they do. The names will change; the jobs will not.', 'Tools unke kaam se chuniye. Naam badlenge; kaam nahi.'] },

  'harness': { t: 'stack',
    title: ['The harness: the system around the model', 'Harness: model ke aas-paas ka system'],
    layers: [
      { l: ['Interface', 'Interface'], ic: 'image', s: ['What the user sees and approves', 'User kya dekhta aur manzoor karta'], d: ['Shows plans and asks before risky steps.', 'Plan dikhata aur jokhim wale steps se pehle poochhta.'] },
      { l: ['Loop and stop rules', 'Loop aur rukne ke niyam'], ic: 'loop', s: ['Plan, act, check', 'Plan, kaam, jaanch'], d: ['Limits on steps, time and money.', 'Steps, samay aur paise ki seema.'] },
      { l: ['Tools and permissions', 'Tools aur permissions'], ic: 'key', s: ['What it may touch', 'Kya chhoo sakta hai'], d: ['Each tool scoped to the least it needs.', 'Har tool kam se kam zaroorat tak seemit.'] },
      { l: ['Context and memory', 'Context aur yaadasht'], ic: 'db', s: ['What it sees', 'Kya dekhta hai'], d: ['Files, history and retrieved knowledge, chosen on purpose.', 'Files, history aur laaya gaya gyaan, soch kar chuna.'] },
      { l: ['The model', 'Model'], ic: 'chip', s: ['One part of many', 'Kai mein se ek hissa'], d: ['Swapping the model rarely fixes a harness problem.', 'Model badalne se shayad hi harness ki problem theek ho.'] }
    ],
    cap: ['The model is only the bottom layer; the rest is the system you design around it.', 'Model sirf sabse neeche ki layer hai; baaki woh system hai jo aap uske aas-paas banate hain.'] },

  'learning-loop': { t: 'cycle',
    title: ['Ship to real users, then learn on a loop', 'Asli users ko ship, phir chakra mein seekhiye'],
    center: ['Each turn makes the next release smaller and surer', 'Har chakkar agli release ko chhota aur pakka banata hai'],
    steps: [
      { l: ['Ship a small release', 'Chhoti release'], ic: 'rocket', d: ['With an owner and a way back.', 'Ek maalik aur wapsi ke raaste ke saath.'] },
      { l: ['Watch what they do', 'Dekhiye woh kya karte'], ic: 'eye', d: ['Behaviour beats opinions.', 'Bartaav raay se behtar.'] },
      { l: ['Ask why', 'Kyun poochhiye'], ic: 'chat', d: ['Talk to design partners (early users who help shape the product) about what you saw.', 'Design partners (jo shuruaati users product banane mein madad karte hain) se dekhe hue pal ke baare mein baat kijiye.'] },
      { l: ['Rank the failures', 'Galtiyon ko kram dijiye'], ic: 'list', d: ['By harm and by how often, not by who shouted.', 'Nuksaan aur baar-baar hone se, kaun chillaya us se nahi.'] },
      { l: ['Tell them what changed', 'Bataiye kya badla'], ic: 'send', d: ['Release notes close the loop and earn the next interview.', 'Release notes chakra poora karte aur agla interview kamaate.'] }
    ],
    cap: ['The loop never ends: every release leads to the next question.', 'Yeh chakra kabhi khatam nahi hota: har release agle sawaal tak le jaata hai.'] },

  'job-funnel': { t: 'funnel',
    title: ['A job search is a funnel too', 'Naukri ki talaash bhi ek funnel hai'],
    start: 60, fmt: 'int',
    stages: [
      { l: ['Targeted applications', 'Chuni hui applications'], d: ['Roles that match your evidence, not every opening.', 'Aapke saboot se milte roles, har opening nahi.'] },
      { l: ['Screens', 'Screens'], rate: 25, d: ['A portfolio link with a real project lifts this most.', 'Asli project wala portfolio link ise sabse zyada badhata hai.'] },
      { l: ['Interview loops', 'Interview loops'], rate: 40, d: ['Product sense, metrics, AI system design, behaviour.', 'Product sense, metrics, AI system design, bartaav.'] },
      { l: ['Offers', 'Offers'], rate: 30, d: ['Practice interviews raise this rate.', 'Practice interviews yeh rate badhate hain.'] }
    ],
    cap: ['Find the stage where you lose the most, and practise for that one.', 'Woh stage dhoondhiye jahan sabse zyada chhoot-ta hai, aur usi ki practice kijiye.'] },

  'spaced-review': { t: 'bars',
    title: ['Why the course asks again, later', 'Course baad mein dobara kyun poochhta hai'],
    items: [['After 1 day', '1 din baad'], ['After 1 week', '1 hafte baad'], ['After 1 month', '1 mahine baad']],
    sets: [
      { l: ['Read once', 'Ek baar padha'], v: [60, 30, 15], hi: 2, d: ['Most of what you read once is gone within a month.', 'Ek baar padha zyadatar mahine bhar mein chala jaata hai.'] },
      { l: ['Asked again, spaced out', 'Thahar-thahar kar dobara poochha'], v: [85, 75, 65], hi: 2, d: ['Each question asked at the right time lifts the curve higher.', 'Sahi samay par poochha har sawaal curve ko upar uthata hai.'] }
    ],
    unit: ['% remembered', '% yaad'], max: 100,
    cap: ['Illustrative curves. That is why Practice brings back questions on a schedule.', 'Udaharan ke curves. Isi liye Practice sawaalon ko ek schedule par wapas laata hai.'] },

  'autonomy-levels': { t: 'stack',
    title: ['Four levels of freedom for an agent', 'Agent ki azaadi ke chaar star'],
    layers: [
      { l: ['Suggests', 'Sujhaata hai'], ic: 'idea', s: ['Who approves: the person, who does it', 'Manzoori: insaan, jo khud karta hai'], d: ['The agent proposes an action and a person does it.', 'Agent ek kaam sujhaata hai aur insaan use karta hai.'] },
      { l: ['Acts with approval', 'Manzoori ke baad karta hai'], ic: 'lock', s: ['Who approves: a person, before it runs', 'Manzoori: insaan, chalne se pehle'], d: ['The agent acts only after a person says yes.', 'Agent tabhi karta hai jab insaan haan kahe.'] },
      { l: ['Acts and reports', 'Karta hai aur batata hai'], ic: 'eye', s: ['Who approves: nobody first; a person reviews after', 'Manzoori: pehle koi nahi; baad mein insaan dekhta hai'], d: ['The agent acts, then tells a person what it did, so that it can be undone.', 'Agent kaam karta hai, phir insaan ko batata hai, taaki use palta ja sake.'] },
      { l: ['Acts alone', 'Akela karta hai'], ic: 'bolt', s: ['Who approves: nobody', 'Manzoori: koi nahi'], d: ['The agent acts and nobody checks. Keep this for actions that only read, or that are easy to undo.', 'Agent karta hai aur koi nahi jaanchta. Ise un kaamon ke liye rakhiye jo sirf padhte hain ya aasaani se palte ja sakte hain.'] }
    ],
    arrow: ['More freedom, less checking', 'Zyada azaadi, kam jaanch'],
    cap: ['Choose one level for each action and write it next to the tool in your approval matrix (a table of who approves what).', 'Har kaam ke liye ek star chuniye aur use tool ke bagal mein apni approval matrix (kaun kya manzoor karega, ek table) mein likhiye.'] },

  'three-doors': { t: 'compare',
    title: ['Three doors, and what each asks to see', 'Teen darwaze, aur har ek kya dekhna chahta hai'],
    rows: [['What you build', 'Aap kya banate hain'], ['What they ask to see', 'Woh kya dekhna chahte hain'], ['What to know going in', 'Jaane se pehle kya jaanein']],
    cols: [
      { l: ['AI-native product company', 'AI-native product company'], ic: 'rocket', v: [['A product that exists because of AI', 'Aisa product jo AI ki wajah se hai'], ['Agents you built, an eval suite you run, cost and latency numbers', 'Aapke banaye agents, aapka chalaya eval suite, cost aur latency ke numbers'], ['Some screen out people moving over from project work', 'Kuch project kaam se aaye logon ko chhaant dete hain']], d: ['Lead with what you shipped and the numbers you measured.', 'Jo aapne ship kiya aur jo numbers naape, unse shuru kijiye.'] },
      { l: ['Consulting firm building AI systems for clients', 'Client ke liye AI systems banane wali consulting firm'], ic: 'people', v: [['Language-model apps, retrieval and multi-agent systems for clients', 'Clients ke liye language-model apps, retrieval aur multi-agent systems'], ['Model evaluation, AI governance, proof you can scope, measure and hand over', 'Model evaluation, AI governance, aur saboot ki aap scope, naap aur hand over kar sakte hain'], ['Delivery and consulting backgrounds are accepted', 'Delivery aur consulting ka anubhav maana jaata hai']], d: ['Your delivery record counts here. Add the evals and the governance notes.', 'Yahan aapka delivery record ginta hai. Usme evals aur governance notes jodiye.'] },
      { l: ['Public-sector or DPI body', 'Sarkari ya DPI sanstha'], ic: 'globe', v: [['Services that citizens and departments use at scale', 'Aisi sevaayein jo nagrik aur vibhag bade star par use karte hain'], ['Field deployment, API literacy, ministry stakeholders, Indic and voice work, open-weight options', 'Field deployment, API samajh, mantralay ke stakeholders, Indic aur voice kaam, open-weight vikalp'], ['The title may read analyst or architect, not product manager', 'Title analyst ya architect ho sakta hai, product manager nahi']], d: ['Government delivery experience is an asset here.', 'Yahan sarkari delivery ka anubhav ek taakat hai.'] }
    ],
    cap: ['The same evidence serves all three doors; only what you lead with changes.', 'Teeno darwazon ke liye saboot wahi rehta hai; sirf yeh badalta hai ki aap kis se shuru karte hain.'] },

  'pm-objection': { t: 'flow',
    title: ['Answering "why should we treat you as a product person?"', 'Jawaab: "hum aapko product ka vyakti kyun maanein?"'],
    steps: [
      { l: ['Shipped', 'Ship kiya'], ic: 'rocket', d: ['One sentence on what you built. Start here, not with your years of experience.', 'Jo banaya uska ek vaakya. Yahin se shuru kijiye, saalon ke anubhav se nahi.'] },
      { l: ['Measured', 'Naapa'], ic: 'chart', d: ['The number from your release gate.', 'Aapke release gate ka number.'] },
      { l: ['Decided', 'Faisla kiya'], ic: 'scale', d: ['A decision you made by measuring two options.', 'Ek faisla jo aapne do vikalp naap kar liya.'] },
      { l: ['Owned before', 'Pehle sambhala'], ic: 'flag', d: ['One decision you owned before this course, from your government work.', 'Is course se pehle ka ek faisla jo aapne sambhala, apne sarkari kaam se.'] },
      { l: ['Own next', 'Aage sambhalna'], ic: 'target', d: ['End with what you want to own next. Say all five aloud in under a minute.', 'Ant mein bataiye ki aage kya sambhalna chahte hain. Paancho ek minute se kam mein bolkar dekhiye.'] }
    ],
    cap: ['Answer with evidence in this order: what you shipped, what you measured, what you decided.', 'Saboot ke saath isi kram mein jawaab dijiye: kya ship kiya, kya naapa, kya tay kiya.'] },

  'job-as-workflow': { t: 'flow',
    title: ['The job as a fixed workflow', 'Wahi kaam, tay workflow ke roop mein'],
    steps: [
      { l: ['A message arrives', 'Ek message aata hai'], ic: 'chat', d: ['For example: "mera pan card ABCPJ1234K hai".', 'Jaise: "mera pan card ABCPJ1234K hai".'] },
      { l: ['Code finds each detail', 'Code har detail dhoondhta hai'], ic: 'search', d: ['Patterns for PAN, Aadhaar, mobile number and email. No model is involved yet.', 'PAN, Aadhaar, mobile number aur email ke patterns. Abhi model nahi aaya.'] },
      { l: ['Code picks the action', 'Code action chunta hai'], ic: 'list', d: ['A fixed rule maps each kind of detail to an action.', 'Ek tay rule har kism ki detail ko ek action se jodta hai.'] },
      { l: ['A person approves a risky one', 'Risky action par insaan manzoor karta hai'], ic: 'person', d: ['A risky action waits until a person says yes. The order never changes.', 'Risky action tab tak ruka rehta hai jab tak insaan haan na kahe. Kram kabhi nahi badalta.'] },
      { l: ['The action runs', 'Action chalta hai'], ic: 'check', d: ['It is logged. The same message takes the same path every time.', 'Use log kiya jaata hai. Wahi message har baar wahi raasta lega.'] }
    ],
    cap: ['The steps and the approval are fixed in code, so the same message always takes the same path.', 'Steps aur approval code mein tay hain, isliye wahi message hamesha wahi raasta leta hai.'] },

  'job-as-agent': { t: 'cycle',
    title: ['The same job as an agent', 'Wahi kaam, agent ke roop mein'],
    center: ['The model chooses each step', 'Har step model chunta hai'],
    steps: [
      { l: ['Model decides', 'Model tay karta hai'], ic: 'idea', d: ['It reads the message and picks a tool, or decides it is done.', 'Woh message padhta hai aur ek tool chunta hai, ya tay karta hai ki kaam ho gaya.'] },
      { l: ['Tool runs', 'Tool chalta hai'], ic: 'tool', d: ['Your code runs the chosen tool, such as a pattern checker.', 'Aapka code chuna hua tool chalata hai, jaise pattern checker.'] },
      { l: ['Result goes back', 'Nateeja wapas jaata hai'], ic: 'eye', d: ['The result is added to the context (the model’s desk), so each step costs more tokens (small pieces of text) than the last.', 'Nateeja context (model ki mez) mein jud jaata hai, isliye har step pichhle se zyada tokens (text ke chhote tukde) leta hai.'] },
      { l: ['Stop check', 'Rukne ki jaanch'], ic: 'stop', d: ['Stop when done, at the step limit, or when the model cannot decide. With no limit the loop can run on.', 'Kaam ho jaye, step seema aaye, ya model tay na kar paye to ruk jaiye. Seema na ho to loop chalta reh sakta hai.'] }
    ],
    cap: ['Because the model picks each step, the step limit is what keeps the loop from running on.', 'Kyunki har step model chunta hai, step seema hi loop ko chalte rehne se rokti hai.'] }
});

window.FIGPLACE = Object.assign(window.FIGPLACE || {}, {
  ch8f: [['http-call', 'h:2']],
  ch9m: [['model-bench', 'h:3']],
  ch10c: [['memory-arch', 'h:2']],
  ch11r: [['ingest', 'h:2']],
  ch12t: [['job-as-workflow', 'h:2'], ['job-as-agent', 'h:3'], ['workflow-agent', 'h:3']],
  ch13a: [['agent-control', 'h:1'], ['traj-eval', 'h:2'], ['autonomy-levels', 'h:3']],
  ch14p: [['mcp', 'h:2']],
  ch15mm: [['voice-pipeline', 'h:2']],
  ch16e: [['eval-levels', 'h:2'], ['release-gate', 'h:3']],
  ch17o: [['trace', 'h:2']],
  ch18s: [['controls', 'h:2']],
  ch19pm: [['metric-types', 'h:3']],
  ch20d: [['latency-budget', 'h:2']],
  ch21cap: [['cap-stages', 'h:1']],
  b1: [['pricing-models', 'h:2'], ['unit-econ', 'h:3']],
  b2: [['aarrr', 'h:1']],
  b3: [['north-star', 'h:1'], ['ab-calc', 'h:4']],
  b4: [['toolchain', 'h:1']],
  b5: [['harness', 'h:1']],
  b6: [['learning-loop', 'h:3']],
  b7: [['pm-objection', 'h:1'], ['three-doors', 'h:2'], ['job-funnel', 'h:4']]
});
