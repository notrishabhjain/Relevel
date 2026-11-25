/* Hinglish for Tool calling and workflows: contracts before agents (chapter:ch12t), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Pick one action that happens outside the model. Write its tool schema (a form that lists exactly what the tool takes in) before you write any model logic.':
    'Ek aisi action chuniye jo model ke bahar hoti hai. Model ka koi bhi logic likhne se pehle uska tool schema likhiye (ek form jo bataye ki tool kya-kya andar leta hai).',
  'Build the flow classify → retrieve → tool → validate → respond. Think of a train that stops at fixed stations. Add a confirmation step for anything that has consequences.':
    'Yeh flow banaiye: classify → retrieve → tool → validate → respond. Sochiye ek train jo tay stations par rukti hai. Jis cheez ka asar padta hai, uske liye confirmation step (haan kehne ka pal) jodiye.',
  'Test four things. First, badly filled arguments (the values you hand to the tool). Second, a timeout (the tool takes too long). Third, a call the user is not allowed to make. Fourth, a tool that returns the wrong thing with a straight face.':
    'Chaar cheezein test kijiye. Pehli, galat bhare hue arguments (jo values aap tool ko dete hain). Doosri, timeout (tool bahut der laga deta hai). Teesri, aisi call jo user ko karne ki ijaazat nahi. Chauthi, tool jo seedha chehre se galat cheez wapas deta hai.',
  'Three things to hand in: a tool contract (the rule sheet for one tool), a workflow diagram (a map of the steps), and a table of how each step can fail.':
    'Teen cheezein jama kijiye: ek tool contract (ek tool ki rule sheet), ek workflow diagram (steps ka naksha), aur ek table jisme likha ho har step kaise fail ho sakta hai.',
  'Point to every place in the flow where ordinary, fixed code stays in control, like the guard at the gate who never gets tired.':
    'Flow mein har woh jagah dikhaiye jahan ordinary, fixed code control mein rehta hai, jaise gate ka guard jo kabhi thakta nahi.',
  'Tool contract':
    'Tool contract',
  'A written rule sheet for one outside action, like the terms on a bank form. It lists the name, what the tool does, what it takes in and how tightly that is limited, the errors it can give back, who may use it, and what it changes.':
    'Ek bahar ki action ki likhi hui rule sheet, bank form ki sharton jaisi. Usme naam, tool kya karta hai, woh kya andar leta hai aur kitni sakhti se, kaun si errors wapas de sakta hai, kaun use kar sakta hai, aur woh kya badalta hai, yeh sab likha hota hai.',
  'Deterministic workflow':
    'Deterministic workflow',
  'A fixed list of steps, like a recipe. The model is called only for the parts that really need judgement (a thoughtful choice).':
    'Steps ki ek tay list, recipe jaisi. Model ko sirf wahi hisse diye jaate hain jinhe sach mein judgement (soch-samajh ke faisla) chahiye.',
  'Idempotency':
    'Idempotency',
  'Doing the same thing twice has the same result as doing it once, like pressing a lift button two times. It matters the moment anything retries (tries again).':
    'Wahi kaam do baar karne ka wahi nateeja jo ek baar karne ka hota hai, jaise lift ka button do baar dabana. Yeh tab zaroori ho jaata hai jab kuch retry (dobara koshish) karta hai.',
  'Confirmation step':
    'Confirmation step',
  'A stop sign: a person must say yes before an action with consequences can run.':
    'Ek stop sign: jis action ka asar padta hai, woh chalne se pehle ek insaan ko haan kehna padta hai.',
  'A tool (a button the model can press) lets the model do something real. So you decide exactly what it may do and who checks. You will write tool contracts, make the server enforce permissions (the server, not the model, says who may do what), and pick a fixed workflow before you allow an agent.':
    'Tool (ek button jo model daba sakta hai) model ko asli kaam karne deta hai. Isliye aap tay karte hain ki woh kya kar sakta hai aur kaun check karega. Aap tool contract likhenge, server par permissions lagwayenge (server tay karta hai kaun kya kare, model nahi), aur agent ko ijaazat dene se pehle fixed workflow chunenge.',
  'Write a tool contract that a reviewer could sign off.':
    'Aisa tool contract likhna jise koi reviewer sign kar sake.',
  'Say when a fixed workflow is better than letting the model decide.':
    'Batana ki kab fixed workflow model ko faisla karne dene se behtar hai.',
  'Name the checks that must happen before an important action runs.':
    'Un checks ka naam batana jo kisi zaroori action se pehle hone chahiye.',
  'Build a workflow that proposes changes but cannot make risky ones alone':
    'Aisa workflow banaiye jo badlav sujhaye par risky badlav akela na kar sake',
  'Before you let a model act on its own, you write the contract for each action and decide which actions need a person. In this chapter you learned to write a tool contract a reviewer could sign, when a fixed workflow beats an agent, and which checks must happen before an important action runs. Now you build a workflow for the rule-keeper. The model proposes what to do with each finding. A person must approve the risky ones.':
    'Model ko khud kaam karne dene se pehle, aap har action ka contract likhte hain aur tay karte hain kin actions ke liye insaan chahiye. Is chapter mein aapne seekha: reviewer ke sign layak tool contract likhna, kab fixed workflow agent se behtar hai, aur zaroori action se pehle kaun se checks hone chahiye. Ab aap rule-keeper ke liye workflow banate hain. Model har finding par sujhata hai ki kya karein. Risky wale insaan ko approve karne padte hain.',
  'Use your test harness (your test set-up) from Chapter 21 and the agent loop from Chapter 9, and add to them in code. Write the numbers you measure in the notes box below.':
    'Chapter 21 ka apna test harness (test ka set-up) aur Chapter 9 ka agent loop use kijiye, aur code mein unhe badhaiye. Jo numbers aap naapein, unhe neeche notes box mein likhiye.',
  'Write the contract for the action “hide this detail”. Give its name, what it needs, what it returns, what it may change, and what it can never change. A reviewer should be able to sign it.':
    '“Yeh detail chhupao” action ka contract likhiye. Uska naam, usse kya chahiye, woh kya wapas deta hai, woh kya badal sakta hai, aur kya kabhi nahi badal sakta, yeh sab likhiye. Reviewer ko use sign kar paana chahiye.',
  'Decide which actions are risky enough to need approval. For example, letting any ID number through, or deleting a stored copy, always needs approval.':
    'Tay kijiye kaun si actions itni risky hain ki approval chahiye. Jaise, kisi bhi ID number ko aage jaane dena, ya store ki hui copy delete karna, hamesha approval maangta hai.',
  'Build a fixed workflow with these steps. Check the sentence. List the findings. Propose an action for each finding. Wait for approval on the risky ones. Then apply the actions.':
    'In steps ke saath fixed workflow banaiye. Sentence check kijiye. Findings ki list banaiye. Har finding ke liye ek action sujhaiye. Risky wali par approval ka intezaar kijiye. Phir actions lagaiye.',
  'Prepare twenty test messages. For each one, write down the right proposal before you run anything.':
    'Bees test messages taiyaar kijiye. Kuch bhi chalane se pehle har ek ka sahi proposal likh lijiye.',
  'Run them. Count how often the model proposes the correct action when it is not allowed to act on its own. Also count how many risky actions would have been applied without approval. That number must be zero.':
    'Unhe chalaiye. Ginie kitni baar model sahi action sujhata hai jab use khud kaam karne ki ijaazat nahi. Yeh bhi ginie ki kitni risky actions bina approval ke lag jaatin. Yeh number zero hona chahiye.',
  'Write the checks that must happen before an important action runs.':
    'Woh checks likhiye jo kisi zaroori action se pehle hone chahiye.',
  'A contract for the hide action that a reviewer has signed off.':
    'Hide action ka contract jise reviewer ne sign kar diya ho.',
  'A list of the actions that need approval.':
    'Un actions ki list jinhe approval chahiye.',
  'A working workflow where risky actions wait for approval.':
    'Chalta hua workflow jahan risky actions approval ka intezaar karti hain.',
  'Two numbers from twenty messages: how often the proposal was right, and how many risky actions ran without approval (zero).':
    'Bees messages se do numbers: proposal kitni baar sahi tha, aur kitni risky actions bina approval ke chaliin (zero).',
  'A schema (a form with fixed boxes) makes the format reliable':
    'Schema (fixed khaanon wala form) format ko bharosemand banata hai',
  'From Chapter 8. A tool contract uses the same idea for actions: fixed boxes, not a free letter.':
    'Chapter 8 se. Tool contract yahi idea actions par lagata hai: fixed khaane, khula khat nahi.',
  'The model invents when it has no evidence':
    'Jab model ke paas saboot nahi hota, woh khud banaa leta hai',
  'From Chapter 2. Like a parrot making things up, the model can now invent the inputs to a real action.':
    'Chapter 2 se. Tote ki tarah banaane wala model ab ek asli action ke inputs bhi banaa sakta hai.',
  'Open your experiment harness (your test set-up) from Chapter 21 and the agent loop from Chapter 9. Keep both close by for the hands-on units.':
    'Chapter 21 ka apna experiment harness (test ka set-up) aur Chapter 9 ka agent loop kholiye. Hands-on units ke liye dono paas rakhiye.',
  'Do units 12.1 and 12.5. Then run the short workflow cell (one box of code) below. Read the other units this time.':
    'Units 12.1 aur 12.5 kijiye. Phir neeche ka chhota workflow cell (code ka ek dibba) chalaiye. Baaki units is baar sirf padhiye.',
  'So far in this part, the model has read things and written answers. Think of a student who only reads and writes. In this chapter the model starts to <em>do</em> things. That means you must be more careful.':
    'Is part mein ab tak model ne padha hai aur jawaab likhe hain, ek aise student ki tarah jo sirf padhta aur likhta hai. Is chapter mein model kaam <em>karna</em> shuru karta hai. Isliye aapko zyada dhyan rakhna hai.',
  'A <strong>tool</strong> is a button the model can press to do something real. It can look up an invoice (a bill), send an email or change a record. Now the question is not whether the model can act. The question is what exactly it may do, with what data, and who checks.':
    '<strong>Tool</strong> ek button hai jise dabakar model asli kaam karta hai. Woh invoice (bill) dekh sakta hai, email bhej sakta hai ya record badal sakta hai. Ab sawaal yeh nahi ki model kar sakta hai ya nahi. Sawaal yeh hai ki woh kya-kya kar sakta hai, kis data ke saath, aur kaun check karega.',
  'Think of a bank teller. A teller can look up your balance. But a teller cannot approve a loan alone. A teller cannot send money just because a customer asks. The rule exists because some actions have effects outside the bank. Tellers are not the problem.':
    'Bank ke teller ko sochiye. Teller aapka balance dekh sakta hai. Par woh akela loan pass nahi kar sakta. Woh sirf customer ke kehne par paise nahi bhej sakta. Yeh niyam isliye nahi ki teller bure hain. Yeh isliye hai ki kuch actions ka asar bank ke bahar tak jaata hai.',
  'A model with tools is in the same spot. In this chapter you will write down what each tool may do. You will keep the checks in ordinary code (plain code that always does the same thing). And you will pick a fixed workflow first, until an agent (a helper that decides its own steps) has earned its place.':
    'Tools wala model bhi isi jagah hai. Is chapter mein aap likhenge ki har tool kya kar sakta hai. Checks ko ordinary code mein rakhenge (seedha code jo hamesha ek jaisa chalta hai). Aur pehle fixed workflow chunenge, jab tak agent (ek helper jo apne steps khud chunta hai) apni jagah kamaa na le.',
  'There are six units. Do them in order. Each has a short goal, an idea, something to try, something to break on purpose, and something to hand in. The checking question and the product lens at the end say what to take away.':
    'Chhe units hain. Unhe kram se kijiye. Har ek mein ek chhota goal, ek idea, kuch try karne ko, kuch jaanboojhkar todne ko, aur kuch jama karne ko hai. Aakhir ka checking question aur product lens batate hain ki kya saath le jaana hai.',
  'Tool schemas: the form for a tool':
    'Tool schemas: tool ka form',
  'Write a tool as a tightly limited contract (a rule sheet). It has a name, a description, inputs, errors and permissions.':
    'Tool ko ek sakht limit wale contract (rule sheet) ki tarah likhiye. Usme naam, description, inputs, errors aur permissions hote hain.',
  'The model sees how you define the tool, and it uses that to work. Think of the label on a medicine bottle. A clear label helps the model use the tool well.':
    'Model dekhta hai ki aapne tool ko kaise define kiya, aur usi se kaam karta hai. Dawai ki bottle ke label ko sochiye. Saaf label model ko tool sahi se use karne mein madad karta hai.',
  'Write a schema (a form with fixed boxes) for <code>get_invoice_status(invoice_id)</code>.':
    '<code>get_invoice_status(invoice_id)</code> ke liye ek schema (fixed khaanon wala form) likhiye.',
  'Add the boxes that must be filled, the shapes that are allowed, and a clear error for each thing that can go wrong.':
    'Woh khaane jodiye jo bharne zaroori hain, woh shapes jo allowed hain, aur har galti ke liye ek saaf error.',
  'Try a missing ID, an ID in the wrong format, and an invoice the user is not allowed to see.':
    'Ek gayab ID, galat format wali ID, aur aisa invoice jo user ko dekhne ki ijaazat nahi, in sab ko try kijiye.',
  'A written Tool Contract Specification (the full rule sheet).':
    'Likhi hui Tool Contract Specification (poori rule sheet).',
  'Could a new engineer read it and know exactly what the tool can and cannot do?':
    'Kya ek naya engineer ise padhkar theek-theek jaan sakta hai ki tool kya kar sakta hai aur kya nahi?',
  'Write tool descriptions with the same care as the guide for an API (the way programs talk to each other).':
    'Tool descriptions utni hi dhyan se likhiye jitni API (programs ke aapas mein baat karne ka tareeka) ki guide likhte hain.',
  'Tool selection: picking the right button':
    'Tool selection: sahi button chunna',
  'Measure whether the model picks the right tool for each task, like checking if a helper grabs the right spanner.':
    'Naapiye ki model har kaam ke liye sahi tool chunta hai ya nahi, jaise dekhna ki helper sahi spanner uthata hai ya nahi.',
  'Give the model a tool only when it adds real value. Do not add one just because tools feel new and exciting.':
    'Model ko tool tabhi dijiye jab usse asli fayda ho. Sirf isliye mat jodiye ki tools naye aur mazedaar lagte hain.',
  'Make 20 test cases that use two or three tools between them.':
    '20 test cases banaiye jo aapas mein do ya teen tools use karte hon.',
  'For each case, write down which tool the model chose, which inputs it gave, and which tool you expected.':
    'Har case mein likhiye ki model ne kaun sa tool chuna, kaun se inputs diye, aur aapne kaun sa tool socha tha.',
  'Add tools with names that are almost the same, and requests that could mean more than one thing.':
    'Lagbhag ek jaise naam wale tools jodiye, aur aise requests jinke ek se zyada matlab ho sakte hain.',
  'A Tool Selection Benchmark (a score sheet for picking tools).':
    'Ek Tool Selection Benchmark (tools chunne ki score sheet).',
  'What share of the calls were correct, what share were not needed, and what share were unsafe?':
    'Kitne hisse calls sahi the, kitne hisse zaroori nahi the, aur kitne hisse unsafe the?',
  'Later, with agents, this becomes one of the quality numbers you can watch.':
    'Aage agents ke saath yeh un quality numbers mein se ek ban jaata hai jinhe aap dekh sakte hain.',
  'Validation, retries and timeouts: check, try again, stop waiting':
    'Validation, retries aur timeouts: jaancho, dobara karo, intezaar band karo',
  'Keep the inputs the model writes apart from the controls that decide whether to run them, like a note and the guard who reads it.':
    'Model jo inputs likhta hai unhe un controls se alag rakhiye jo tay karte hain ki unhe chalana hai ya nahi, jaise ek parchi aur use padhne wala guard.',
  'The model does not decide what is allowed. Ordinary code does.':
    'Kya allowed hai, yeh model tay nahi karta. Ordinary code karta hai.',
  'Check every input before the tool runs. Then add a rule for timeouts (how long to wait) and retries (how many times to try again).':
    'Tool chalne se pehle har input jaanchiye. Phir timeouts (kitni der intezaar) aur retries (kitni baar dobara koshish) ka ek niyam jodiye.',
  'Pretend failures happen. Some go away on their own, like a busy phone line. Some never will.':
    'Nakli failures banaiye. Kuch apne aap theek ho jaate hain, jaise busy phone line. Kuch kabhi theek nahi hote.',
  'Make the tool return a badly formed result, and watch what the next step does with it.':
    'Tool se ek galat bana hua result wapas dilwaiye, aur dekhiye agla step usse kya karta hai.',
  'A Tool Failure-State Table (a list of how the tool can fail and what happens next).':
    'Ek Tool Failure-State Table (tool kaise fail ho sakta hai aur phir kya hota hai, uski list).',
  'Which failures are worth trying again, and which need a person to step in?':
    'Kaun si failures dobara try karne layak hain, aur kinke liye insaan ko aana padega?',
  'For every outside service your product depends on, a PM (product manager) should ask three things. What happens on a timeout? What gets retried? What counts as a failure?':
    'Har bahari service ke liye jis par aapka product tika hai, PM (product manager) ko teen sawaal puchne chahiye. Timeout par kya hota hai? Kya dobara try hota hai? Kise failure maana jaata hai?',
  'Idempotency and side effects: pressing twice is safe':
    'Idempotency aur side effects: do baar dabana bhi safe',
  'Understand why calling a tool twice can repeat an action, like paying a bill twice by mistake.':
    'Samjhiye ki tool ko do baar bulane se action dohra kyun sakta hai, jaise galti se bill do baar bharna.',
  'A retry is safe only when the action is safe to repeat, or when something stops it from running twice. That protection is called an idempotency mechanism.':
    'Retry tabhi safe hai jab action ko dohrana safe ho, ya jab kuch use do baar chalne se roke. Is suraksha ko idempotency mechanism kehte hain.',
  'Design an idempotency key (a unique token stamped on each request, like a receipt number) for submitting a purchase or a request.':
    'Ek idempotency key design kijiye (har request par lagi unique pehchaan, jaise receipt number), jo purchase ya request bhejne ke liye ho.',
  'Run the same action twice, and check that only one real effect happens.':
    'Wahi action do baar chalaiye, aur dekhiye ki asli asar sirf ek baar hota hai.',
  'Pretend a network timeout happens after the server has already accepted the request. The reply got lost on the way back.':
    'Maan lijiye network timeout tab hota hai jab server request le chuka hai. Jawaab raaste mein kho gaya.',
  'A Side-Effect Safety Checklist (a list to tick before anything changes the outside world).':
    'Ek Side-Effect Safety Checklist (bahar ki duniya badalne se pehle tick karne ki list).',
  'What happens if the caller never gets the message saying it worked?':
    'Agar bulane wale ko “ho gaya” ka message kabhi na mile, toh kya hota hai?',
  'This matters most when AI can start payments, tickets, messages or records.':
    'Yeh sabse zyada tab zaroori hai jab AI payments, tickets, messages ya records shuru kar sakta ho.',
  'Human approval: a person says yes first':
    'Human approval: pehle insaan haan kehta hai',
  'Put a clear confirmation step (a stop sign where a person says yes) before any action that has consequences or cannot be undone.':
    'Jis action ka asar padta hai ya jo undo nahi ho sakta, usse pehle ek saaf confirmation step rakhiye (stop sign jahan insaan haan kehta hai).',
  'Having a person in the loop is a wall the system enforces, like a gate that really locks. It is more than a popup that asks “Sure?”.':
    'Insaan ko beech mein rakhna ek deewar hai jo system lagu karta hai, ek aise gate jaisa jo sach mein lock hota hai. Yeh sirf “Pakka?” puchne wala popup nahi hai.',
  'Build the flow draft, review, approve, execute.':
    'Yeh flow banaiye: draft, review, approve, execute.',
  'Write down who approved, what they approved, and exactly which request was run.':
    'Likhiye ki kisne approve kiya, usne kya approve kiya, aur theek-theek kaun si request chali.',
  'Change the request after it was approved, and check that running it is blocked.':
    'Approve hone ke baad request badaliye, aur dekhiye ki use chalana ruk jaata hai.',
  'An Approval Workflow Diagram (a map of who says yes and when), plus a design for the audit record (the log book of what happened).':
    'Ek Approval Workflow Diagram (naksha ki kaun kab haan kehta hai), saath mein audit record ka design (jo hua uski log book).',
  'What exactly did the person approve?':
    'Insaan ne theek-theek kya approve kiya?',
  'An approval must be tied to one specific action, not to a loose chat.':
    'Approval ek khaas action se bandhi honi chahiye, dheele-dhaale chat se nahi.',
  'Workflow patterns: four ways to line up the steps':
    'Workflow patterns: steps lagane ke chaar tareeke',
  'Build four kinds of workflow. One: steps one after another. Two: routing, like a traffic cop sending each car down a road. Three: steps in parallel, side by side. Four: a second check that improves the first answer.':
    'Chaar tarah ke workflow banaiye. Ek: ek ke baad ek steps. Do: routing, jaise traffic police har gaadi ko ek sadak par bhejta hai. Teen: parallel steps, saath-saath. Chaar: doosri jaanch jo pehle jawaab ko behtar banaye.',
  'A workflow is a path fixed in advance, like a train line. The model is called at certain stops along it.':
    'Workflow ek pehle se tay raasta hai, jaise train ki patri. Model ko us par kuch tay stops par bulaya jaata hai.',
  'Build one simple workflow where steps run in order, and one that routes each request to the right path.':
    'Ek simple workflow banaiye jisme steps kram se chalte hain, aur ek jo har request ko sahi raste par bhejta hai.',
  'Measure how long it takes, what it costs and how many tasks succeed.':
    'Naapiye ki kitna waqt lagta hai, kitna kharch hota hai aur kitne kaam safal hote hain.',
  'Send a request down the wrong route, and watch the failure show up in the steps after it.':
    'Ek request ko galat raste par bhejiye, aur dekhiye ki failure uske baad ke steps mein dikhti hai.',
  'A Workflow Pattern Comparison (the four ways side by side).':
    'Ek Workflow Pattern Comparison (chaaron tareeke saath-saath).',
  'Which pattern adds real value, and which only makes things harder?':
    'Kaun sa pattern asli fayda deta hai, aur kaun sirf cheezein mushkil banata hai?',
  'Use the simplest pattern that meets your acceptance criteria (the tests that say the work is good enough).':
    'Sabse simple pattern use kijiye jo aapke acceptance criteria poore kare (woh tests jo kehte hain ki kaam kaafi achha hai).',
  'Run a workflow with an approval step':
    'Approval step wala workflow chalaiye',
  'This is the fixed workflow for the rule-keeper, in about thirty lines. Ordinary code finds each detail and picks the action. A risky action waits until a person approves. In Chapter 26 you give an agent the same job, so you have something to compare it with.':
    'Yeh rule-keeper ka fixed workflow hai, lagbhag tees lines mein. Ordinary code har detail dhoondhta hai aur action chunta hai. Risky action tab tak rukti hai jab tak insaan approve na kare. Chapter 26 mein aap agent ko wahi kaam dete hain, taaki tulna ke liye kuch ho.',
  'Run the workflow with an approval flag':
    'Approval flag ke saath workflow chalaiye',
  'Press Run on the cell (one box of code). It checks four starter sentences. A PAN or an Aadhaar number is removed only after approval, because letting one through cannot be taken back.':
    'Cell (code ka ek dibba) par Run dabaiye. Yeh chaar shuruaati sentences jaanchta hai. PAN ya Aadhaar number tabhi hataya jaata hai jab approval mile, kyunki ek baar aage nikal gaya toh wapas nahi aata.',
  'The first sentence is handled at once: the mobile number and the email are masked (hidden). The Aadhaar and PAN lines say WAITING for approval. The last line reads <em>risky actions that ran without approval: 0</em>. That zero is the number your capstone must report. Now change <code>approved=False</code> to <code>approved=True</code> in the loop, run it again, and watch the same lines turn to applied.':
    'Pehla sentence turant ho jaata hai: mobile number aur email masked (chhupa diye) ho jaate hain. Aadhaar aur PAN wali lines mein approval ka WAITING likha aata hai. Aakhri line kehti hai <em>risky actions that ran without approval: 0</em>. Yeh zero woh number hai jo aapke capstone ko batana hai. Ab loop mein <code>approved=False</code> ko <code>approved=True</code> kijiye, dobara chalaiye, aur dekhiye wahi lines applied ho jaati hain.',
  'This cell has everything it needs inside it, so run the whole cell, not a part. If you changed a name, check the spelling and the capital letters.':
    'Is cell mein sab kuch andar hai, isliye poora cell chalaiye, thoda sa nahi. Agar aapne koi naam badla hai, toh spelling aur capital letters dekhiye.',
  'A sentence shows no lines under it':
    'Kisi sentence ke neeche koi line nahi dikhti',
  'That is right for the driving-licence sentence. It has nothing personal, so the workflow finds nothing and leaves it alone.':
    'Driving-licence wale sentence ke liye yeh sahi hai. Usme kuch personal nahi hai, isliye workflow ko kuch nahi milta aur woh use chhod deta hai.',
  'The Aadhaar number is not found in a sentence you wrote':
    'Aapke likhe sentence mein Aadhaar number nahi milta',
  'The pattern looks for twelve digits that do not start with 0 or 1. A number with dashes, or one split across lines, is missed. Add it to your answer key (the list of right answers) as a tricky row.':
    'Pattern aise baarah digits dhoondhta hai jo 0 ya 1 se shuru nahi hote. Dash wala number, ya lines mein bata hua (split) number, chhoot jaata hai. Use apni answer key (sahi jawaabon ki list) mein ek mushkil row ki tarah jod dijiye.',
  'Prefer a fixed workflow':
    'Pehle fixed workflow chuniye',
  'After the units, one lesson stands out. A fixed workflow is simpler to test and easier to trust than an agent, like a bus on a set route next to a taxi that picks its own way. So make it your first choice.':
    'Units ke baad ek sabak saaf dikhta hai. Fixed workflow ko test karna aasaan hai aur us par bharosa karna bhi, agent se zyada, jaise tay route ki bus aur apna raasta khud chunne wali taxi. Isliye ise pehli pasand banaiye.',
  'A fixed workflow is often safer than an agent. If you know the steps, fix them in code and let the model handle only the part that needs judgement.':
    'Fixed workflow aksar agent se zyada safe hota hai. Agar aapko steps pata hain, unhe code mein pakka kijiye aur model ko sirf woh hissa dijiye jise judgement chahiye.',
  'Tool checklist: tick before you go live':
    'Tool checklist: live jaane se pehle tick kijiye',
  'Before any tool goes live, run it through this checklist, like a pilot before take-off. Every line is here because it caused a real incident somewhere.':
    'Koi bhi tool live jaane se pehle, is checklist se guzariye, jaise pilot udaan se pehle karta hai. Har line isliye hai kyunki kahin na kahin isse asli ghatna hui hai.',
  'The name is clear and the description is true. The model reads both.':
    'Naam saaf hai aur description sach hai. Model dono padhta hai.',
  'The inputs are tightly limited. Use a fixed list of choices instead of free text wherever you can.':
    'Inputs par sakht limit hai. Jahan ho sake, khule text ki jagah choices ki tay list rakhiye.',
  'Anything the tool changes is stated clearly.':
    'Tool jo bhi badalta hai, woh saaf likha hai.',
  'The server enforces permissions. Do not just ask the model to behave.':
    'Permissions server lagu karta hai. Model se sirf achha behave karne ko mat kahiye.',
  'You have thought about idempotency, which means what happens if the call runs twice.':
    'Aapne idempotency ke baare mein socha hai, yaani agar call do baar chale toh kya hoga.',
  'Errors come back in a fixed form, like a form with labelled boxes.':
    'Errors ek tay form mein wapas aati hain, naam wale khaanon wale form ki tarah.',
  'Audit data (a log book of what happened) is recorded.':
    'Audit data (kya hua uski log book) record hota hai.',
  'Actions that destroy or delete something need confirmation (a person says yes first).':
    'Jo actions kuch tod dete ya delete karte hain, unhe confirmation chahiye (pehle insaan haan kehta hai).',
  'Give the model a tool only when its choice adds value. Every tool adds a way to attack the system, extra waiting, extra cost and new ways to fail.':
    'Model ko tool tabhi dijiye jab uski choice se fayda ho. Har tool system par hamle ka ek raasta, extra intezaar, extra kharch aur fail hone ke naye tareeke jodta hai.',
  'The last idea in the checklist leads to a useful exercise. Look at your own list of tools, and count how many really need the model.':
    'Checklist ka aakhri idea ek kaam ki practice ki taraf le jaata hai. Apni tools ki list dekhiye, aur ginie kitno ko sach mein model chahiye.',
  'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.':
    'Un tools ki list banaiye jo aap ek support assistant ko denge. Phir har woh tool kaat dijiye jahan ek fixed rule 95% se zyada baar sahi chunega.',
  'Tools: … Crossed out: … Left: …':
    'Tools: … Kaate: … Bache: …',
  'What is left is the set of tools where the model’s judgement is worth the risk. It is usually much shorter than the first list.':
    'Jo bachta hai, wahi tools ka set hai jahan model ke judgement ka risk uthana theek hai. Yeh aksar pehli list se bahut chhota hota hai.',
  'Let us pull it together. A tool lets a model act, so every tool needs a written contract that says what it may do. The checks belong in ordinary code, not in the model. And when you already know the steps, a fixed workflow beats an agent.':
    'Chaliye sab ek jagah jodte hain. Tool model ko act karne deta hai, isliye har tool ko ek likha hua contract chahiye jo bataye ki woh kya kar sakta hai. Checks ordinary code mein rehte hain, model mein nahi. Aur jab aapko steps pehle se pata hon, toh fixed workflow agent se behtar hai.',
  'Next, Chapter 26 takes the opposite step. It lets the model choose the order of steps by itself. We call that an agent.':
    'Aage Chapter 26 ulta kadam uthata hai. Woh steps ka kram khud model ko chunne deta hai. Ise hum agent kehte hain.',
});
