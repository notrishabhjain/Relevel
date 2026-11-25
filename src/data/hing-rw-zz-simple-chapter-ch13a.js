/* Hinglish for Agents: loops, stopping conditions and control (chapter:ch13a), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Build the smallest loop you can: propose → call one approved tool → look at the result → continue or stop. A loop is a set of steps that go round and round, like a ceiling fan.':
    'Sabse chhota loop banaiye: propose → ek approved tool bulao → result dekho → aage badho ya ruko. Loop un steps ka set hai jo ghoomte rehte hain, jaise chhat ka pankha.',
  'Add a list of allowed tools, a maximum number of steps, state that you can see (a notebook of what has happened so far), stopping conditions, and a point where a person must approve.':
    'Allowed tools ki list jodiye, steps ki ek had, dikhne wala state (ab tak jo hua uski notebook), stopping conditions, aur ek jagah jahan insaan ko approve karna hai.',
  'Make the agent loop forever. Feed it confusing tool output (what the tool hands back). Ask it to use a tool it is not allowed to use.':
    'Agent ko hamesha ghoomne par majboor kijiye. Use ulajhan wala tool output (jo tool wapas deta hai) dijiye. Use aisa tool use karne ko kahiye jiski use ijaazat nahi.',
  'A score sheet that sets the agent against the deterministic workflow (the fixed list of steps) across twenty tasks.':
    'Ek score sheet jo agent ko deterministic workflow (steps ki tay list) ke saamne bees tasks par rakhti hai.',
  'Prove that the extra freedom adds value you can measure. If it does not, ship the workflow (send the workflow out to real users).':
    'Saabit kijiye ki extra azaadi se aisa fayda hota hai jo naapa ja sake. Agar nahi, toh workflow ship kijiye (workflow asli users tak bhejiye).',
  'A system where the model picks actions, looks at what came back, and keeps going toward a goal, like a helper with a list of errands.':
    'Aisa system jahan model actions chunta hai, dekhta hai kya wapas aaya, aur goal ki taraf badhta rehta hai, jaise errands ki list wala helper.',
  'One round of goal, decision, tool call, observation (what it saw) and updated context (the model’s desk, with new notes), then a choice to stop or go on. People forget the stopping part.':
    'Goal, decision, tool call, observation (jo usne dekha) aur updated context (model ki mez, nayi notes ke saath) ka ek chakkar, phir ruko ya aage badho ka faisla. Log rukne wala hissa bhool jaate hain.',
  'A hard limit on how many actions an agent may take before it must give up, like a curfew. It is the main guard against a loop that never ends.':
    'Is par ek sakht had ki agent giving up se pehle kitni actions le sakta hai, jaise curfew. Yeh kabhi na khatam hone wale loop se bachne ka sabse bada upay hai.',
  'The list of steps an agent took, in order, like the tools it called. It is the route the helper took, not just where it ended up. You can score it apart from the final answer.':
    'Agent ne jo steps liye, unki kram se list, jaise kaun se tools bulaye. Yeh helper ka raasta hai, sirf manzil nahi. Aap ise final jawaab se alag score kar sakte hain.',
  'An agent picks actions, checks what came back and keeps going toward a goal. The hard part is control, not brains. You will build an agent with firm limits, add stopping conditions (rules for when to stop), and measure it against the fixed workflow from Chapter 25.':
    'Agent actions chunta hai, dekhta hai kya wapas aaya, aur goal ki taraf badhta rehta hai. Mushkil hissa control hai, dimaag nahi. Aap sakht limits wala agent banayenge, stopping conditions jodenge (kab rukna hai ke niyam), aur use Chapter 25 ke fixed workflow se naapenge.',
  'Draw the agent loop with its stopping conditions and error paths.':
    'Agent loop ko stopping conditions aur error paths ke saath banana.',
  'Explain why most agent failures are control problems, not intelligence problems.':
    'Samjhana ki zyadatar agent failures control ki problems hain, samajh ki nahi.',
  'Say when to add a second agent, and when not to.':
    'Batana ki doosra agent kab jodna hai, aur kab nahi.',
  'Test a fixed workflow against an agent':
    'Fixed workflow ko agent ke saamne test kijiye',
  'You can build the rule-keeper as a fixed set of steps, or as an agent that picks its own steps. In this chapter you learned to draw the agent loop with its stopping conditions, that most agent failures are control problems and not a lack of intelligence, and when to add a second agent and when not to. Now you build the agent. Then you test whether it beats the fixed workflow from Chapter 25.':
    'Aap rule-keeper ko steps ke fixed set ki tarah bana sakte hain, ya aise agent ki tarah jo apne steps khud chunta hai. Is chapter mein aapne seekha: agent loop ko stopping conditions ke saath banana, zyadatar agent failures control ki problems hain samajh ki kami nahi, aur doosra agent kab jodna hai aur kab nahi. Ab aap agent banate hain. Phir dekhte hain ki kya woh Chapter 25 ke fixed workflow ko harata hai.',
  'Use your test harness (your test set-up) from Chapter 21 and add to it in code. Write your recommendation in the notes box below.':
    'Chapter 21 ka apna test harness (test ka set-up) use kijiye aur code mein use badhaiye. Apni salaah neeche notes box mein likhiye.',
  'Give the agent exactly two tools: the pattern checker and the model-based finder. Write an explicit list of what it may use, and nothing else.':
    'Agent ko theek do tools dijiye: pattern checker aur model-based finder. Likh kar list banaiye ki woh kya use kar sakta hai, aur kuch nahi.',
  'Set its limits: the most steps it may take, a time limit, and an exit for “cannot decide” that sends the sentence to a person.':
    'Uski limits tay kijiye: zyada se zyada kitne steps, ek samay ki had, aur “cannot decide” ka ek exit jo sentence insaan ke paas bhej de.',
  'Run the same twenty sentences through the agent and through the fixed workflow from Chapter 25.':
    'Wahi bees sentences agent se aur Chapter 25 ke fixed workflow se chalaiye.',
  'For each run, write down whether it chose the right tool, how many calls it made, how long it took and what it cost.':
    'Har run ke liye likhiye ki usne sahi tool chuna ya nahi, kitni calls ki, kitna waqt laga aur kitna kharch hua.',
  'Before you run, write the tools you expect for each sentence, in order. Then report how often the agent’s path matched, next to how often its answer was right.':
    'Chalane se pehle har sentence ke liye jo tools aap expect karte hain, kram se likhiye. Phir batayiye agent ka raasta kitni baar milaa, uske saath ki jawaab kitni baar sahi tha.',
  'Write one paragraph that recommends one of the two, with the numbers. Name the number that decided it.':
    'Ek paragraph likhiye jo dono mein se ek ki salaah de, numbers ke saath. Us number ka naam batayiye jisne faisla kiya.',
  'An agent with two tools and written limits.':
    'Do tools aur likhi hui limits wala agent.',
  'The same twenty sentences run through both systems.':
    'Wahi bees sentences dono systems se chalaye gaye.',
  'Four numbers for each system: tool choice, calls, time and cost.':
    'Har system ke chaar numbers: tool choice, calls, samay aur kharch.',
  'For the agent, the path score (trajectory) next to the answer score.':
    'Agent ke liye, raaste ka score (trajectory) jawaab ke score ke saath.',
  'A recommendation that names the number that decided it.':
    'Aisi salaah jo us number ka naam le jisne faisla kiya.',
  'Tool contracts and fixed workflows':
    'Tool contracts aur fixed workflows',
  'Chapter 25 built the workflow that the agent is compared against, like the bus that the taxi races.':
    'Chapter 25 mein woh workflow bana jisse agent ko tola jaata hai, jaise woh bus jisse taxi ki race hai.',
  'Every step costs tokens (the small bricks of text you pay for)':
    'Har step mein tokens lagte hain (text ki chhoti eenten jinke paise lagte hain)',
  'From Chapter 1. A loop multiplies that cost by the number of steps, like paying for every lap.':
    'Chapter 1 se. Loop us kharch ko steps ki ginti se guna kar deta hai, jaise har chakkar ke paise dena.',
  'Keep the workflow from Chapter 25 and its twenty test tasks ready. You will run the same tasks through an agent and compare.':
    'Chapter 25 ka workflow aur uske bees test tasks taiyaar rakhiye. Aap wahi tasks agent se chalakar tulna karenge.',
  'Do units 13.4 and 13.7. Then run the small agent cell (one box of code) below. Read the other units this time.':
    'Units 13.4 aur 13.7 kijiye. Phir neeche ka chhota agent cell (code ka ek dibba) chalaiye. Baaki units is baar sirf padhiye.',
  'In the last chapter you built a fixed workflow. You chose the steps in advance, like a train line. The model only did the parts that needed judgement. Now we give the model more freedom, and see what that costs.':
    'Pichhle chapter mein aapne fixed workflow banaya. Steps pehle se chune, jaise train ki patri. Model ne sirf woh hissa kiya jisme judgement chahiye tha. Ab hum model ko zyada azaadi dete hain, aur dekhte hain ki uski keemat kya hai.',
  'An <strong>agent</strong> is a helper that runs a loop on its own: decide, act, check the result, decide again. That sounds strong, but it brings a new problem. Every loop also needs a way to stop. Most agent problems come from the stopping, not from how clever the model is.':
    '<strong>Agent</strong> ek helper hai jo apne aap loop chalata hai: faisla, kaam, result dekho, phir faisla. Yeh taqatwar lagta hai, par ek nayi problem laata hai. Har loop ko rukne ka tareeka bhi chahiye. Zyadatar agent problems rukne se aati hain, model kitna hoshiyar hai us se nahi.',
  'Think of sending a junior colleague to find one number. A good result: they come back in ten minutes with the number, or say they could not find it. A bad result: three hours later they are still searching, and nobody told them when to give up.':
    'Sochiye aap ek junior saathi ko ek number dhoondhne bhejte hain. Achha nateeja: woh das minute mein number ke saath laut aaye, ya kahe ki nahi mila. Bura nateeja: teen ghante baad bhi woh dhoondh raha hai, aur kisi ne use rukne ko nahi kaha.',
  'There are seven units, and each builds on the one before. First you draw the loop. Then you add planning, state (a notebook of what has happened), limits and human checkpoints. The last two ask: do you need several agents, and do you need an agent at all?':
    'Saat units hain, aur har ek pichhle par banta hai. Pehle aap loop banate hain. Phir planning, state (ab tak jo hua uski notebook), limits aur human checkpoints jodte hain. Aakhri do puchte hain: kya aapko kai agents chahiye, aur kya aapko agent chahiye bhi?',
  'The agent loop: round and round':
    'Agent loop: chakkar par chakkar',
  'Understand the whole cycle: goal, then the model’s decision, then a tool call, then what it sees back, then updated context, then stop or continue.':
    'Poora chakkar samajhiye: goal, phir model ka faisla, phir tool call, phir jo wapas dikha, phir updated context, phir ruko ya aage badho.',
  'An agent is a loop, and the loop itself is the design of the system.':
    'Agent ek loop hai, aur loop hi system ka design hai.',
  'Before you write any code, draw the loop. Label every state (where it is now) and every move from one state to the next.':
    'Koi bhi code likhne se pehle loop banaiye. Har state (woh abhi kahan hai) aur ek state se doosri state tak har chaal par naam likhiye.',
  'Build a toy loop with three steps and a clear record of its state.':
    'Teen steps wala khilauna loop banaiye, jisme state ka saaf record ho.',
  'Force a tool to fail, and see whether the loop recovers or spirals out of control.':
    'Ek tool ko fail karwaiye, aur dekhiye ki loop sambhal jaata hai ya control se bahar ghoomta hai.',
  'An Agent State Diagram (a map of every place the agent can be).':
    'Ek Agent State Diagram (naksha ki agent kin-kin jagahon par ho sakta hai).',
  'Where can the loop stop safely?':
    'Loop kahan surakshit roka ja sakta hai?',
  'If you cannot draw the loop, you cannot defend the design.':
    'Agar aap loop nahi bana sakte, toh aap design ka bachaav nahi kar sakte.',
  'Planning and tool choice: making its own list':
    'Planning aur tool choice: apni list khud banana',
  'Understand how a model makes its own plan, and when that is really useful.':
    'Samjhiye ki model apna plan kaise banata hai, aur woh kab sach mein kaam ka hai.',
  'An agent gives up some predictability (knowing what comes next) and gets flexibility in return.':
    'Agent kuch predictability (aage kya hoga yeh pata hona) chhodta hai aur badle mein lachak paata hai.',
  'Give the agent three tools and 20 tasks, and write down which tool it picks each time.':
    'Agent ko teen tools aur 20 tasks dijiye, aur likhiye ki woh har baar kaun sa tool chunta hai.',
  'Compare one fixed workflow against the agent on the same tasks.':
    'Ek fixed workflow ko wahi tasks par agent se tauliye.',
  'Include tasks that need no tool at all, and tasks where it is unclear which tool to use.':
    'Aise tasks bhi rakhiye jinhe koi tool nahi chahiye, aur aise bhi jinme saaf nahi ki kaun sa tool use karna hai.',
  'An Agent vs Workflow Comparison (the two side by side).':
    'Ek Agent vs Workflow Comparison (dono saath-saath).',
  'Did the extra freedom improve your acceptance measure (the score that says the work is good enough) enough to be worth it?':
    'Kya extra azaadi ne aapka acceptance measure (woh score jo kehta hai kaam kaafi achha hai) itna sudhara ki woh kaam ki thi?',
  'A workflow that passes the test may be better than an agent that only looks impressive.':
    'Jo workflow test pass karta hai, woh us agent se behtar ho sakta hai jo sirf shaandar dikhta hai.',
  'State and context management: keeping the notebook tidy':
    'State aur context management: notebook ko saaf rakhna',
  'Keep the state of the task in plain view, and control how much context piles up on the model’s desk.':
    'Task ka state saaf dikhta rakhiye, aur model ki mez par kitna context jama hota hai use kaabu mein rakhiye.',
  'A loop that runs for a long time can collect old, unneeded or clashing notes on the desk.':
    'Bahut der chalne wala loop mez par purane, bekaar ya aapas mein takraane wale notes jama kar sakta hai.',
  'Define a state object (one tidy record) that holds the goal, the steps taken, what was observed, the approvals and the status.':
    'Ek state object define kijiye (ek saaf record) jisme goal, liye gaye steps, jo dekha gaya, approvals aur status ho.',
  'Save the state between rounds of the loop, and shorten the notes (summarise) only when you really have to.':
    'Loop ke chakkaron ke beech state save kijiye, aur notes tabhi chhote kijiye (summarise) jab sach mein zaroori ho.',
  'Add repeated observations and tool output that does not matter, and measure how fast the context grows.':
    'Dohraye hue observations aur bekaar tool output jodiye, aur naapiye ki context kitni tezi se badhta hai.',
  'An Agent State Schema (a form for the notebook), plus a Context Policy (rules for what stays on the desk).':
    'Ek Agent State Schema (notebook ka form), saath mein ek Context Policy (mez par kya rahega uske niyam).',
  'Which fields (boxes in the record) can you trust as the final word?':
    'Record ke kaun se fields (khaane) aap antim baat maan sakte hain?',
  'When the state is written down clearly, you can explain an incident afterwards.':
    'Jab state saaf likha ho, toh baad mein aap kisi ghatna ko samjha sakte hain.',
  'Stopping conditions: when to stop':
    'Stopping conditions: kab rukna hai',
  'Put limits on the number of steps, the time, the cost and the kinds of action that are unsafe.':
    'Steps ki ginti, samay, kharch aur unsafe actions ki kisme par limits lagaiye.',
  'An agent with no stopping conditions is a part of your live product with no upper limit, like a tap that never shuts.':
    'Bina stopping conditions wala agent aapke live product ka aisa hissa hai jis par koi upari had nahi, jaise ek nal jo kabhi band nahi hota.',
  'Set a maximum number of steps, a timeout (how long to wait), a cost ceiling (the most you will pay), and a “cannot resolve” state.':
    'Steps ki zyada se zyada ginti, ek timeout (kitna intezaar), ek cost ceiling (zyada se zyada kitna dena hai), aur ek “cannot resolve” state tay kijiye.',
  'Log the reason each run stopped (write it in the log book).':
    'Har run kyun ruka, uski wajah log kijiye (log book mein likhiye).',
  'Make a loop that never finds an answer, and prove that it still ends.':
    'Aisa loop banaiye jise jawaab kabhi nahi milta, aur saabit kijiye ki woh phir bhi khatam hota hai.',
  'An Agent Control Policy (the written rules for the agent’s limits).':
    'Ek Agent Control Policy (agent ki limits ke likhe hue niyam).',
  'Can you prove that the system ends, even when things fail?':
    'Kya aap saabit kar sakte hain ki system khatam hota hai, tab bhi jab cheezein fail hon?',
  'This is a must for reliability and cost, not just a detail for engineers.':
    'Yeh reliability aur kharch ke liye zaroori hai, sirf engineers ki chhoti baat nahi.',
  'Human checkpoints: a person at the gate':
    'Human checkpoints: gate par ek insaan',
  'Bring in a person when something is unclear, when the effect is big, and when a step cannot be undone.':
    'Insaan ko tab bulaiye jab kuch saaf na ho, jab asar bada ho, aur jab step undo na ho sake.',
  'The easier an action is to reverse, and the more sure you are, the more freedom the agent can have.':
    'Jitna aasaan action ko palatna ho, aur jitna zyada aap pakke ho, agent ko utni zyada azaadi mil sakti hai.',
  'Mark each tool or action as read-only, a write that can be reversed, or a write that cannot be reversed.':
    'Har tool ya action ko read-only, palte ja sakne wala write, ya na palte ja sakne wala write, ke roop mein chinh kijiye.',
  'Require approval for the last group.':
    'Aakhri group ke liye approval zaroori kijiye.',
  'Try to get around the approval through the prompt (the note you give the model) or through a tool input.':
    'Approval ko prompt (jo parchi aap model ko dete hain) ya tool input ke zariye chakma dene ki koshish kijiye.',
  'An Agent Approval Matrix (a table of which action needs whose yes).':
    'Ek Agent Approval Matrix (table ki kis action ko kiski haan chahiye).',
  'Which actions are never allowed to run on their own?':
    'Kaun si actions ko kabhi khud chalne ki ijaazat nahi?',
  'The business owner should be the one who says where the agent’s freedom ends.':
    'Business owner ko hi batana chahiye ki agent ki azaadi kahan khatam hoti hai.',
  'Multi-agent patterns: many helpers':
    'Multi-agent patterns: kai helpers',
  'Understand handoffs (passing the job on), an orchestrator with workers (a boss who gives out jobs), and several agents working together. Do not assume they are better.':
    'Handoffs (kaam aage thama dena), orchestrator aur workers (ek boss jo kaam baantta hai), aur kai agents ka saath kaam karna samajhiye. Yeh maan mat lijiye ki woh behtar hain.',
  'Every extra agent adds more state, more waiting, more cost and more places to fail.':
    'Har extra agent zyada state, zyada intezaar, zyada kharch aur fail hone ki zyada jagahein jodta hai.',
  'Solve a task with one agent first. Then build a version where the work is split between two roles.':
    'Pehle ek agent se task hal kijiye. Phir ek aisa version banaiye jisme kaam do roles mein banta ho.',
  'Compare how many tasks succeed and how hard each version is to run.':
    'Tulna kijiye ki kitne tasks safal hote hain aur har version ko chalana kitna mushkil hai.',
  'Make the two agents give clashing answers, and leave it unclear who owns the result.':
    'Dono agents se aapas mein takraate jawaab dilwaiye, aur yeh saaf mat rakhiye ki result kiska hai.',
  'A Multi-Agent Decision Record (a written note of why you chose this).':
    'Ek Multi-Agent Decision Record (likha hua note ki aapne yeh kyun chuna).',
  'What problem that you can measure did the second agent solve?':
    'Doosre agent ne kaun si aisi problem hal ki jise naapa ja sake?',
  'Extra complexity must buy you something you can measure.':
    'Extra uljhan se aapko aisa kuch milna chahiye jise naapa ja sake.',
  'Agent exit gate: do you need one at all?':
    'Agent exit gate: kya aapko sach mein ek chahiye?',
  'Treat “use an agent” as an idea that needs proof, not as a decision you have already made.':
    '“Agent use karo” ko aisa idea maniye jise saboot chahiye, aisa faisla nahi jo aap pehle hi le chuke hain.',
  'The right design is the simplest one that meets your needs.':
    'Sahi design sabse simple hai jo aapki zarooraton ko poora kare.',
  'Make a 20-task benchmark (a test set) that compares a single direct call, a workflow and an agent.':
    '20-task ka benchmark banaiye (ek test set) jo ek seedhi call, ek workflow aur ek agent ki tulna kare.',
  'Score each one on quality, tool accuracy, waiting time, cost and safety.':
    'Har ek ko quality, tool accuracy, intezaar ke samay, kharch aur safety par score kijiye.',
  'Take away one ability at a time, and see whether the agent still adds value.':
    'Ek samay mein ek kshamta hataiye, aur dekhiye ki agent phir bhi fayda deta hai ya nahi.',
  'An Agent Architecture Decision Record (a written note of the design you chose and why).':
    'Ek Agent Architecture Decision Record (likha hua note ki aapne kaun sa design chuna aur kyun).',
  'Would you still choose an agent if nobody called it “agentic AI”?':
    'Kya aap tab bhi agent chunte agar koi ise “agentic AI” na kehta?',
  'That question keeps you from picking a design only because it is the fashion.':
    'Yeh sawaal aapko sirf fashion ki wajah se design chunne se bachata hai.',
  'Score the path as well as the answer':
    'Jawaab ke saath raaste ka bhi score kijiye',
  'An agent can reach the right answer by the wrong path. It may call a tool it did not need, call tools in a bad order, or call the same one twice. The final answer hides all of that. So you also score the <strong>trajectory</strong>, the list of steps the agent took, in order, like the route a taxi took.':
    'Agent galat raaste se bhi sahi jawaab tak pahunch sakta hai. Woh aisa tool bula sakta hai jo zaroori nahi tha, tools ko bure kram mein bula sakta hai, ya ek hi ko do baar. Final jawaab yeh sab chhupa leta hai. Isliye aap <strong>trajectory</strong> ko bhi score karte hain, yaani agent ke liye gaye steps ki kram se list, jaise taxi ka liya raasta.',
  'For each test sentence, write down the tools you expect, in order, before you run. Then report two scores side by side: how often the answer was right, and how often the path matched. A wrong path with a right answer is a cost for nothing. Each extra step is more tokens, more waiting and one more place to fail.':
    'Har test sentence ke liye, chalane se pehle, jo tools aap expect karte hain unhe kram se likhiye. Phir do score saath-saath batayiye: jawaab kitni baar sahi tha, aur raasta kitni baar mila. Galat raaste se sahi jawaab bekaar ka kharch hai. Har extra step zyada tokens, zyada intezaar aur fail hone ki ek aur jagah hai.',
  'Run a small agent and score its path':
    'Chhota agent chalaiye aur uske raaste ka score kijiye',
  'Press Run on the cell (one box of code). At each step the model picks the next tool. It has a limit of three steps and an exit for “cannot decide”. The cell scores four sentences. Your capstone uses twenty.':
    'Cell (code ka ek dibba) par Run dabaiye. Har step par model agla tool chunta hai. Uski had teen steps hai aur “cannot decide” ka ek exit. Cell chaar sentences score karta hai. Aapka capstone bees use karta hai.',
  'Each line shows two scores and the list of tools used. A small model often gets the answer right by a longer path, or stops with “cannot decide”. Your counts will differ from anyone else’s. The last line is the pair to compare: final answer correct next to trajectory correct. If the second number is lower, the agent is costing you steps it did not need.':
    'Har line mein do score aur use hue tools ki list dikhti hai. Chhota model aksar lambe raaste se sahi jawaab paata hai, ya “cannot decide” par ruk jaata hai. Aapki ginti kisi aur se alag hogi. Aakhri line woh jodi hai jise tolna hai: final answer correct, saath mein trajectory correct. Agar doosra number kam hai, toh agent aap par aise steps kharch kar raha hai jo zaroori nahi the.',
  'This cell has everything it needs inside it, including the model name, so run the whole cell. The key (your secret password for the model) and the connection come from the warm-up that runs before your first cell.':
    'Is cell mein sab kuch andar hai, model ka naam bhi, isliye poora cell chalaiye. Key (model ka aapka secret password) aur connection us warm-up se aate hain jo aapke pehle cell se pehle chalta hai.',
  'Your key did not reach the code. Check the name you saved it under on the <a href="#/setup">Setup</a> page, capital letters included.':
    'Aapki key code tak nahi pahunchi. <a href="#/setup">Setup</a> page par jis naam se aapne use save kiya, use dekhiye, capital letters samet.',
  'Every line says cannot decide':
    'Har line mein cannot decide likha aata hai',
  'The model did not answer with one of the three allowed words. That is the exit working. Read the reply, and make the prompt stricter or try the other model on the Setup page.':
    'Model ne teen allowed shabdon mein se koi nahi diya. Yeh exit ka kaam karna hai. Jawaab padhiye, aur prompt ko aur sakht kijiye ya Setup page par doosra model aazmaiye.',
  'How much freedom to give':
    'Kitni azaadi deni hai',
  'Choose one of four autonomy levels (how much it may do alone) for each action, and write it next to the tool in your approval matrix.':
    'Har action ke liye chaar autonomy levels (woh akela kitna kar sakta hai) mein se ek chuniye, aur use approval matrix mein tool ke saath likhiye.',
  '<strong>Suggests.</strong> The agent proposes an action and a person does it.':
    '<strong>Suggests.</strong> Agent ek action sujhata hai aur insaan use karta hai.',
  '<strong>Acts with approval.</strong> The agent acts only after a person says yes.':
    '<strong>Acts with approval.</strong> Agent tabhi kaam karta hai jab insaan haan kehta hai.',
  '<strong>Acts and reports.</strong> The agent acts, then tells a person what it did, so it can be undone.':
    '<strong>Acts and reports.</strong> Agent kaam karta hai, phir insaan ko batata hai usne kya kiya, taaki use palta ja sake.',
  '<strong>Acts alone.</strong> The agent acts and nobody checks. Keep this for actions that only read, or that are easy to undo.':
    '<strong>Acts alone.</strong> Agent kaam karta hai aur koi check nahi karta. Ise sirf padhne wali ya aasaani se palti ja sakne wali actions ke liye rakhiye.',
  'In job posts and meetings you will hear the names LangChain and LangGraph. They are libraries (ready-made code someone else wrote, like a recipe book you borrow) that people use to build loops like the one above. You do not need either for this course. Before you speak about one, look up what it does and what it hides.':
    'Job posts aur meetings mein aap LangChain aur LangGraph ke naam sunenge. Yeh libraries hain (kisi aur ka likha taiyaar code, jaise udhaar li hui recipe book) jinse log upar jaise loops banate hain. Is course ke liye aapko inme se koi nahi chahiye. Kisi ke baare mein bolne se pehle dekhiye ki woh kya karta hai aur kya chhupata hai.',
  'Agent failures are control failures':
    'Agent failures control failures hain',
  'After the units, a pattern shows up. When an agent goes wrong, it is rarely because the model suddenly got worse. It is because nothing stopped it, like a car with no brakes.':
    'Units ke baad ek pattern dikhta hai. Jab agent bigadta hai, toh shayad hi kabhi isliye ki model achanak bura ho gaya. Isliye ki use kisi ne roka nahi, jaise bina brake ki gaadi.',
  'Most agent failures are control problems. The model did not get worse. It was given unlimited chances to be wrong.':
    'Zyadatar agent failures control ki problems hain. Model bura nahi hua. Use galat hone ke anginat mauke diye gaye.',
  'Agent patterns: common shapes':
    'Agent patterns: aam shaklein',
  'Agents and workflows come in a few common shapes. Each row of the table pairs a pattern with the time it fits and the main way it goes wrong. Use it to choose, not to collect patterns.':
    'Agents aur workflows kuch aam shaklon mein aate hain. Table ki har row ek pattern ko uske kaam aane ke samay aur uske bigadne ke mukhya tareeke se jodti hai. Ise chunne ke liye use kijiye, patterns jama karne ke liye nahi.',
  'Pattern':
    'Pattern',
  'Use it when':
    'Kab use karein',
  'Main risk':
    'Mukhya risk',
  'Sequential workflow (one step after another)':
    'Sequential workflow (ek ke baad ek step)',
  'The steps are known':
    'Steps pehle se pata hain',
  'Stiff when the problem changes':
    'Problem badle toh akad jaata hai',
  'Routing (a traffic cop)':
    'Routing (traffic police)',
  'One of several special paths fits':
    'Kai khaas raston mein se ek fit hota hai',
  'The router picks wrong':
    'Router galat raasta chunta hai',
  'Parallel (side by side)':
    'Parallel (saath-saath)',
  'The small jobs really do not depend on each other':
    'Chhote kaam sach mein ek doosre par nirbhar nahi',
  'Coordinating them and putting the results together':
    'Unhe milana aur results ko ek karna',
  'Handoff (pass the job on)':
    'Handoff (kaam aage thama dena)',
  'A specialist should take over':
    'Ek visheshagya ko kaam sambhalna chahiye',
  'Context gets lost, and nobody is sure who is in charge':
    'Context kho jaata hai, aur pakka nahi ki kiske haath mein hai',
  'Orchestrator-worker (a boss and helpers)':
    'Orchestrator-worker (ek boss aur helpers)',
  'The plan breaks into small jobs':
    'Plan chhote kaamon mein toot jaata hai',
  'Cost, loops, and a messy state':
    'Kharch, loops, aur uljha hua state',
  'Start with one model and a short list of tools. Add a second agent only when you have measured something the simpler version cannot do. Extra complexity is a cost, not a prize.':
    'Ek model aur tools ki chhoti list se shuru kijiye. Doosra agent tabhi jodiye jab aapne aisi cheez naapi ho jo simple version nahi kar sakta. Extra uljhan ek kharch hai, inaam nahi.',
  'Now it is time to put your agent up against the workflow you already built.':
    'Ab apne agent ko apne bane hue workflow ke saamne rakhne ka samay hai.',
  'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.':
    'Chapter 25 ke workflow ke bees tasks agent se chalaiye. Ginie kitne sahi hue, kitni tool calls hui, aur kitna kharch hua.',
  'Correct: … Tool calls: … Cost: … Compared with the workflow: …':
    'Sahi: … Tool calls: … Kharch: … Workflow se tulna: …',
  'If the agent is not clearly better on a number you care about, the workflow wins. That is a fair result to bring to a review.':
    'Agar agent kisi aise number par saaf behtar nahi jiski aapko parwah hai, toh workflow jeetta hai. Review mein laane ke liye yeh ek jaayaz result hai.',
  'Here is what to take away. An agent is a loop, and a loop needs limits: a step budget, a timeout, a cost ceiling and a place where a person steps in. Most failures come from missing control. And a second agent, or even a first one, has to earn its place with numbers.':
    'Yeh saath le jaaiye. Agent ek loop hai, aur loop ko limits chahiye: ek step budget, ek timeout, ek cost ceiling, aur ek jagah jahan insaan beech mein aata hai. Zyadatar failures control ki kami se aati hain. Aur doosra agent, ya pehla bhi, numbers ke saath apni jagah kamaata hai.',
  'Next, Chapter 27 looks at the standards for connecting tools and agents to the things they use, like one plug shape that fits every socket.':
    'Aage Chapter 27 un standards ko dekhta hai jinse tools aur agents ko unki cheezon se jodte hain, jaise ek plug ka shape jo har socket mein lage.',
});
