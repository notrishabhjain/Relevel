/* Figures for Part V (production depth), Track B (business and career), and
   the app's own pages (setup, practice). */
window.FIGDATA = Object.assign(window.FIGDATA || {}, {

  'http-call': { t: 'seq',
    title: ['An HTTP call, and the contract inside it', 'Ek HTTP call, aur uske andar ka contract'],
    actors: [{ l: ['Your client', 'Aapka client'] }, { l: ['API server', 'API server'] }],
    msgs: [
      { a: 0, b: 1, l: ['POST /v1/chat + JSON', 'POST /v1/chat + JSON'], d: ['Headers carry the key; the body carries the messages.', 'Headers mein key; body mein messages.'] },
      { a: 1, b: 0, l: ['429 Too Many Requests', '429 Too Many Requests'], d: ['Rate limited. Wait and retry, with a growing pause.', 'Rate limit. Rukiye aur dobara, badhte hue intezaar ke saath.'] },
      { a: 0, b: 1, l: ['retry after 2 s', '2 s baad dobara'], d: ['Retries multiply cost: count them.', 'Retries kharch badhate hain: unhe giniye.'] },
      { a: 1, b: 0, l: ['200 OK + JSON', '200 OK + JSON'], d: ['Check the shape before you trust it. A missing field fails silently.', 'Bharosa karne se pehle shape jaanchiye. Gayab field chupchaap fail hota hai.'] }
    ] },

  'model-bench': { t: 'bars',
    title: ['Choose a model on your own cases', 'Apne cases par model chuniye'],
    items: [['Small model', 'Chhota model'], ['Mid model', 'Beech ka model'], ['Large model', 'Bada model']],
    sets: [
      { l: ['Accuracy %', 'Accuracy %'], v: [84, 91, 93], hi: 1, d: ['On your 50 labelled cases, not a public leaderboard.', 'Aapke 50 label kiye cases par, public leaderboard par nahi.'] },
      { l: ['₹ per 1,000 calls', '₹ har 1,000 calls'], v: [6, 30, 160], hi: 1, d: ['The large model costs five times more for two points.', 'Bada model do points ke liye paanch guna mehnga.'] },
      { l: ['Seconds per answer', 'Har jawaab ke second'], v: [0.6, 1.4, 3.8], hi: 1, d: ['Speed is part of quality for a person waiting.', 'Intezaar karte insaan ke liye raftaar bhi quality hai.'] }
    ],
    fmt: 'dec',
    cap: ['Switch the measure. The best model depends on which one you are optimising.', 'Maap badliye. Sabse achha model is par nirbhar hai ki aap kya behtar kar rahe hain.'] },

  'memory-arch': { t: 'compare',
    title: ['Three ways to give a model memory', 'Model ko yaadasht dene ke teen tareeke'],
    rows: [['What is kept', 'Kya rakha jaata hai'], ['Cost as it grows', 'Badhne par kharch'], ['Risk', 'Jokhim']],
    cols: [
      { l: ['Full history', 'Poori history'], ic: 'list', v: [['Every turn', 'Har baat'], ['Grows every turn', 'Har baat ke saath badhta'], ['Lost in the middle', 'Beech mein kho jaata hai']], d: ['Simple, fine for short chats.', 'Saadha, chhoti baatcheet ke liye theek.'] },
      { l: ['Rolling summary', 'Chalta hua saar'], ic: 'pen', v: [['A summary plus recent turns', 'Saar aur haal ki baatein'], ['Flat', 'Seedha'], ['The summary drops a detail', 'Saar koi detail chhod deta hai']], d: ['Good default for long conversations.', 'Lambi baatcheet ke liye achha default.'] },
      { l: ['Retrieved memory', 'Laayi gayi yaadasht'], ic: 'db', v: [['Facts stored, fetched when relevant', 'Facts rakhe, zaroorat par laaye'], ['Low per call', 'Har call par kam'], ['Fetches the wrong memory', 'Galat yaad laata hai']], d: ['Memory as a search problem.', 'Yaadasht ek search problem ki tarah.'] }
    ] },

  'ingest': { t: 'flow',
    title: ['Production RAG starts with ingestion', 'Production RAG ingestion se shuru hota hai'],
    steps: [
      { l: ['Sources', 'Sources'], ic: 'db', d: ['Help centre, policies, past tickets.', 'Help centre, policies, purane tickets.'] },
      { l: ['Parse', 'Parse'], ic: 'doc', d: ['Pages, tables and scans into clean text.', 'Pages, tables aur scans se saaf text.'] },
      { l: ['Chunk', 'Chunk'], ic: 'scissors', d: ['Along headings, with the title kept on each piece.', 'Headings par, har tukde par title ke saath.'] },
      { l: ['Embed', 'Embed'], ic: 'chip', d: ['A vector per chunk.', 'Har chunk ka ek vector.'] },
      { l: ['Index with access tags', 'Access tags ke saath index'], ic: 'lock', d: ['Who may see each chunk travels with it.', 'Har chunk ko kaun dekh sakta hai, yeh uske saath chalta hai.'] },
      { l: ['Refresh', 'Refresh'], ic: 'loop', d: ['Changed and deleted documents must leave the index.', 'Badle aur mitaye documents index se bahar jaane chahiye.'] }
    ] },

  'workflow-agent': { t: 'compare',
    title: ['Prefer a fixed workflow; earn an agent', 'Fixed workflow chuniye; agent kamaaiye'],
    rows: [['Who decides the steps', 'Steps kaun tay karta hai'], ['Predictable', 'Andaaza layak'], ['Cost per task', 'Har kaam ka kharch'], ['Good for', 'Kiske liye']],
    cols: [
      { l: ['Workflow', 'Workflow'], tone: 'good', ic: 'list', v: [['Your code', 'Aapka code'], ['Yes', 'Haan'], ['Known', 'Pata'], ['Known steps, done many times', 'Jaane hue steps, baar-baar']], d: ['Easy to test, cheap to run, easy to explain.', 'Parakhna aasaan, chalana sasta, samjhaana aasaan.'] },
      { l: ['Agent', 'Agent'], tone: 'warn', ic: 'loop', v: [['The model, in a loop', 'Model, ek loop mein'], ['Less', 'Kam'], ['Varies widely', 'Bahut badalta'], ['Open-ended tasks', 'Khule kaam']], d: ['Needs limits, logs and a way to stop it.', 'Seemaon, logs aur rokne ke tareeke ki zaroorat.'] }
    ] },

  'agent-control': { t: 'flow', loop: true, loopL: ['not done, within limits: go again', 'kaam baaki, seema mein: phir se'],
    title: ['An agent loop, with its stopping conditions', 'Agent loop, rukne ki sharton ke saath'],
    steps: [
      { l: ['Plan', 'Plan'], ic: 'idea', d: ['The model chooses the next action.', 'Model agla kaam chunta hai.'] },
      { l: ['Act', 'Kaam'], ic: 'tool', d: ['A tool runs, with only the permissions it needs.', 'Ek tool chalta hai, sirf zaroori permissions ke saath.'] },
      { l: ['Observe', 'Dekhiye'], ic: 'eye', d: ['The result goes back into context.', 'Nateeja wapas context mein jaata hai.'] },
      { l: ['Check: stop?', 'Jaanch: rukein?'], ic: 'stop', d: ['Goal met, step limit, budget spent, or a person must approve.', 'Lakshya poora, step seema, budget khatam, ya kisi insaan ki manzoori.'] }
    ],
    cap: ['Agent failures are control failures: a loop with no stop is the bug.', 'Agent ki galtiyan control ki galtiyan hain: bina rukne wala loop hi bug hai.'] },

  'mcp': { t: 'seq',
    title: ['MCP: one standard plug for tools', 'MCP: tools ke liye ek standard plug'],
    actors: [{ l: ['Your app (MCP client)', 'Aapka app (MCP client)'] }, { l: ['MCP server', 'MCP server'] }, { l: ['Ticket system', 'Ticket system'] }],
    msgs: [
      { a: 0, b: 1, l: ['list tools', 'tools ki list'], d: ['Any MCP client can ask any MCP server what it offers.', 'Koi bhi MCP client kisi bhi MCP server se poochh sakta hai ki woh kya deta hai.'] },
      { a: 1, b: 0, l: ['search_tickets, add_note', 'search_tickets, add_note'], d: ['Names, descriptions and input schemas.', 'Naam, varnan aur input schemas.'] },
      { a: 0, b: 1, l: ['call search_tickets', 'call search_tickets'], d: ['The model picked it; your app sends it.', 'Model ne chuna; aapka app bhejta hai.'] },
      { a: 1, b: 2, l: ['query', 'query'], d: ['The server holds the credentials, not the model.', 'Credentials server ke paas hain, model ke paas nahi.'] },
      { a: 2, b: 0, l: ['results', 'nateeje'], d: ['A standard plug does not make a tool safe. Review every server you connect.', 'Standard plug tool ko surakshit nahi banata. Har jode gaye server ko jaanchiye.'], dash: true }
    ] },

  'voice-pipeline': { t: 'flow',
    title: ['Voice is a pipeline, and every step adds delay', 'Awaaz ek pipeline hai, har step deri jodta hai'],
    steps: [
      { l: ['Speech in', 'Awaaz andar'], ic: 'mic', d: ['The caller speaks, in Hindi, English or both.', 'Caller Hindi, English ya dono mein bolta hai.'] },
      { l: ['Speech to text', 'Awaaz se text'], ic: 'doc', d: ['About 300 ms. Accents and noise cause errors here.', 'Lagbhag 300 ms. Lehje aur shor se yahan galtiyan.'] },
      { l: ['Model', 'Model'], ic: 'chip', d: ['About 700 ms to the first words, if streamed.', 'Stream ho to pehle shabdon tak lagbhag 700 ms.'] },
      { l: ['Text to speech', 'Text se awaaz'], ic: 'chat', d: ['About 200 ms to the first sound.', 'Pehli awaaz tak lagbhag 200 ms.'] },
      { l: ['Speech out', 'Awaaz bahar'], ic: 'send', d: ['Over about 1.5 s in all, a pause starts to feel rude.', 'Kul lagbhag 1.5 s se zyada, ruk-na asabhya lagne lagta hai.'] }
    ] },

  'eval-levels': { t: 'stack',
    title: ['Measure at several levels', 'Kai staron par naapiye'],
    layers: [
      { l: ['Live metrics', 'Live metrics'], ic: 'trend', s: ['What users do', 'Users kya karte hain'], d: ['Edits, escalations, thumbs down. The final truth, but late.', 'Edits, escalations, thumbs down. Aakhri sach, par der se.'] },
      { l: ['End-to-end evals', 'End-to-end evals'], ic: 'target', s: ['Question to answer', 'Sawaal se jawaab'], d: ['Your answer key, run on the whole system.', 'Aapki answer key, poore system par.'] },
      { l: ['Component evals', 'Component evals'], ic: 'layers', s: ['Retrieval, extraction, routing', 'Retrieval, extraction, routing'], d: ['Find which part broke.', 'Pata chalta hai kaunsa hissa toota.'] },
      { l: ['Unit checks', 'Unit checks'], ic: 'code', s: ['Schemas, formats, limits', 'Schemas, formats, seemayein'], d: ['Fast and exact. Run on every change.', 'Tez aur exact. Har badlaav par chalaiye.'] }
    ],
    arrow: ['A release gate: every level must pass before shipping', 'Release gate: ship se pehle har star paas ho'] },

  'trace': { t: 'bars',
    title: ['Inside one trace: where the time goes', 'Ek trace ke andar: samay kahan jaata hai'],
    items: [['Retrieve', 'Retrieve'], ['Rerank', 'Rerank'], ['Model call', 'Model call'], ['Tool call', 'Tool call'], ['Check output', 'Output jaanch']],
    sets: [
      { l: ['Milliseconds', 'Milliseconds'], v: [120, 180, 2100, 340, 15], hi: 2, d: ['The model call is most of the wait. That is where to look first.', 'Zyadatar intezaar model call mein. Pehle wahin dekhiye.'] },
      { l: ['Cost share %', 'Kharch ka hissa %'], v: [3, 9, 78, 8, 2], hi: 2, d: ['Cost and time point at the same span here. They do not always.', 'Yahan kharch aur samay ek hi span dikhate hain. Hamesha nahi.'] }
    ],
    cap: ['A trace records every step of one request, so a slow or costly answer can be explained.', 'Trace ek request ka har step likhta hai, taaki dheema ya mehnga jawaab samjhaya ja sake.'] },

  'controls': { t: 'stack',
    title: ['Controls around a model you cannot fully trust', 'Aise model ke aas-paas controls jis par poora bharosa nahi'],
    layers: [
      { l: ['Input checks', 'Input checks'], ic: 'filter', s: ['Lower the odds', 'Sambhavna ghataate'], d: ['Catch known attacks. Useful, never enough on its own.', 'Jaane hue hamle pakadte hain. Kaam ke, par akele kaafi nahi.'] },
      { l: ['Least privilege', 'Kam se kam adhikaar'], ic: 'key', s: ['Remove capability', 'Kshamata hataate'], d: ['Each tool gets only what it needs: read, not write; one table, not all.', 'Har tool ko sirf zaroori: padhna, likhna nahi; ek table, sab nahi.'] },
      { l: ['Human approval', 'Insaani manzoori'], ic: 'person', s: ['For risky actions', 'Jokhim wale kaam ke liye'], d: ['Sending, paying and deleting wait for a person.', 'Bhejna, bhugtaan aur mitaana insaan ka intezaar karte hain.'] },
      { l: ['Output checks', 'Output checks'], ic: 'eye', s: ['Before it leaves', 'Bahar jaane se pehle'], d: ['Block personal data and links to unknown sites.', 'Personal data aur anjaan sites ke links rokiye.'] },
      { l: ['Logs', 'Logs'], ic: 'list', s: ['Prove what happened', 'Kya hua saabit karte'], d: ['Every tool call recorded, and tested by a red team.', 'Har tool call likha hua, aur red team se parkha hua.'] }
    ] },

  'metric-types': { t: 'compare',
    title: ['Keep the four kinds of metric apart', 'Chaar tarah ke metrics alag rakhiye'],
    rows: [['Example', 'Udaharan'], ['Who watches it', 'Kaun dekhta hai']],
    cols: [
      { l: ['Model quality', 'Model quality'], ic: 'target', v: [['Answer accuracy 91%', 'Jawaab accuracy 91%'], ['The team', 'Team']], d: ['Needed, but nobody buys accuracy.', 'Zaroori, par accuracy koi nahi khareedta.'] },
      { l: ['Product', 'Product'], ic: 'person', v: [['Leads use it weekly', 'Leads har hafte use karte'], ['The PM', 'PM']], d: ['Shows whether people choose it.', 'Dikhata hai ki log ise chunte hain ya nahi.'] },
      { l: ['Business', 'Business'], ic: 'money', v: [['Hours saved a month', 'Mahine ke bache ghante'], ['Leadership', 'Leadership']], d: ['Why the budget exists.', 'Budget kyun hai.'] },
      { l: ['Guardrail', 'Guardrail'], tone: 'bad', ic: 'shield', v: [['Personal data leaks: 0', 'Personal data leak: 0'], ['Everyone', 'Sab']], d: ['Must not get worse while the others improve.', 'Baaki sudharte hue bhi yeh bigadna nahi chahiye.'] }
    ] },

  'latency-budget': { t: 'calc',
    title: ['Response time is a budget', 'Jawaab ka samay ek budget hai'],
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
      { l: ['Specify', 'Spec'], ic: 'doc', d: ['A PRD with an answer key and a kill switch.', 'Answer key aur kill switch ke saath PRD.'] },
      { l: ['Build', 'Banaiye'], ic: 'tool', d: ['A thin slice that works end to end.', 'Patli slice jo shuru se ant tak chale.'] },
      { l: ['Break', 'Todiye'], ic: 'warn', d: ['Attack it: injection, bad inputs, edge cases.', 'Hamla kijiye: injection, bure inputs, kinaare ke cases.'] },
      { l: ['Measure', 'Naapiye'], ic: 'chart', d: ['Quality, cost and speed, reported together.', 'Quality, kharch aur raftaar, ek saath.'] },
      { l: ['Ship', 'Ship'], ic: 'rocket', d: ['Somewhere real people can use it.', 'Wahan jahan asli log use kar sakein.'] },
      { l: ['Defend', 'Bachaav'], ic: 'shield', d: ['Explain every choice as you would to a review panel.', 'Har faisla waise samjhaiye jaise review panel ko.'] }
    ] },

  'pricing-models': { t: 'compare',
    title: ['Four ways to charge for an AI product', 'AI product ke paise lene ke chaar tareeke'],
    rows: [['You charge for', 'Paise kiske'], ['Good when', 'Kab achha'], ['Risk', 'Jokhim']],
    cols: [
      { l: ['Per seat', 'Har seat'], ic: 'person', v: [['Each user', 'Har user'], ['Use is steady', 'Use sthir ho'], ['Heavy users cost you money', 'Bhaari users nuksaan karate']], d: ['Familiar to buyers; margins can vanish.', 'Khareedaaron ko jaana-pehchana; margin gayab ho sakta hai.'] },
      { l: ['Usage', 'Usage'], ic: 'bolt', v: [['Calls or tokens', 'Calls ya tokens'], ['Use varies a lot', 'Use bahut badle'], ['Bills scare buyers', 'Bills khareedaaron ko daraate']], d: ['Matches your cost; hard to budget for.', 'Aapke kharch se milta; budget banana mushkil.'] },
      { l: ['Outcome', 'Nateeja'], ic: 'target', v: [['Each resolved ticket', 'Har hal hua ticket'], ['Outcomes are clear', 'Nateeje saaf hon'], ['Arguments about credit', 'Shrey par behas']], d: ['Sells value directly; needs trusted measurement.', 'Seedhe value bechta; bharose layak naap chahiye.'] },
      { l: ['Hybrid', 'Hybrid'], ic: 'layers', v: [['A base plus usage', 'Base aur usage'], ['Most AI products', 'Zyadatar AI products'], ['Complex to explain', 'Samjhaana mushkil']], d: ['Common, because it shares the risk.', 'Aam, kyunki jokhim baant-ta hai.'] }
    ] },

  'unit-econ': { t: 'calc',
    title: ['Unit economics of one customer', 'Ek customer ki unit economics'],
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
    title: ['The growth funnel (AARRR)', 'Growth funnel (AARRR)'],
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
      { l: ['Guardrail: wrong themes reported', 'Guardrail: galat themes ki shikayat'], tone: 'bad', d: ['Must stay low while the others grow.', 'Baaki badhte hue bhi yeh kam rehna chahiye.'] } ] } },

  'ab-calc': { t: 'calc',
    title: ['How many users an A/B test needs', 'A/B test ko kitne users chahiye'],
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
    title: ['An AI product toolchain, by job', 'AI product ki toolchain, kaam ke hisaab se'],
    layers: [
      { l: ['Code and history', 'Code aur history'], ic: 'code', s: ['GitHub', 'GitHub'], d: ['Never secrets. Every change reviewable.', 'Raaz kabhi nahi. Har badlaav dekhne layak.'] },
      { l: ['Deploy and roll back', 'Deploy aur rollback'], ic: 'rocket', s: ['Vercel', 'Vercel'], d: ['Every push previewed; a bad release undone in minutes.', 'Har push ka preview; buri release minuton mein wapas.'] },
      { l: ['Data and sign-in', 'Data aur sign-in'], ic: 'db', s: ['Supabase', 'Supabase'], d: ['Row-level rules so one customer never sees another’s data.', 'Row-level niyam taaki ek customer doosre ka data kabhi na dekhe.'] },
      { l: ['Analytics', 'Analytics'], ic: 'chart', s: ['PostHog', 'PostHog'], d: ['Events, funnels and cohorts from real use.', 'Asli use se events, funnels aur cohorts.'] },
      { l: ['Model provider', 'Model provider'], ic: 'chip', s: ['Any, behind your own interface', 'Koi bhi, aapke apne interface ke peeche'], d: ['Swappable, because models are retired.', 'Badla ja sake, kyunki models retire hote hain.'] }
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
    ] },

  'learning-loop': { t: 'cycle',
    title: ['Ship to real users, then learn on a loop', 'Asli users ko ship, phir chakra mein seekhiye'],
    center: ['Each turn makes the next release smaller and surer', 'Har chakkar agli release ko chhota aur pakka banata hai'],
    steps: [
      { l: ['Ship a small release', 'Chhoti release'], ic: 'rocket', d: ['With an owner and a way back.', 'Ek maalik aur wapsi ke raaste ke saath.'] },
      { l: ['Watch what they do', 'Dekhiye woh kya karte'], ic: 'eye', d: ['Behaviour beats opinions.', 'Bartaav raay se behtar.'] },
      { l: ['Ask why', 'Kyun poochhiye'], ic: 'chat', d: ['Talk to design partners about the moments you saw.', 'Design partners se dekhe hue pal ke baare mein baat kijiye.'] },
      { l: ['Rank the failures', 'Galtiyon ko kram dijiye'], ic: 'list', d: ['By harm and by how often, not by who shouted.', 'Nuksaan aur baar-baar hone se, kaun chillaya us se nahi.'] },
      { l: ['Tell them what changed', 'Bataiye kya badla'], ic: 'send', d: ['Release notes close the loop and earn the next interview.', 'Release notes chakra poora karte aur agla interview kamaate.'] }
    ] },

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
      { l: ['Asked again, spaced out', 'Thahar-thahar kar dobara poochha'], v: [85, 75, 65], hi: 2, d: ['Each well-timed question resets the curve higher.', 'Har sahi samay ka sawaal curve ko upar le jaata hai.'] }
    ],
    unit: ['% remembered', '% yaad'], max: 100,
    cap: ['Illustrative curves. That is why Practice brings back questions on a schedule.', 'Udaharan ke curves. Isi liye Practice sawaalon ko ek schedule par wapas laata hai.'] }
});

window.FIGPLACE = Object.assign(window.FIGPLACE || {}, {
  ch8f: [['http-call', 'h:2']],
  ch9m: [['model-bench', 'h:3']],
  ch10c: [['memory-arch', 'h:2']],
  ch11r: [['ingest', 'h:2']],
  ch12t: [['workflow-agent', 'h:2']],
  ch13a: [['agent-control', 'h:2']],
  ch14p: [['mcp', 'h:2']],
  ch15mm: [['voice-pipeline', 'h:2']],
  ch16e: [['eval-levels', 'h:2']],
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
  b7: [['job-funnel', 'h:1']],
  b8: [['cap-stages', 'top']]
});
