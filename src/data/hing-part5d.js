/* Hinglish: Part V chapters 25 and 26. */
Object.assign(window.HING = window.HING || {}, {

  'Define one external action and write its tool schema before you write any model logic.':
    'Ek bahar ka kaam tay kijiye aur uska tool schema likhiye — model ka koi logic likhne se pehle.',
  'Implement classify → retrieve → tool → validate → respond, with a confirmation step for anything consequential.':
    'Banaiye: pehchaano → nikaalo → tool chalao → jaancho → jawaab do, aur koi bhi bada asar waala kaam ho to beech mein ek confirmation.',
  'Test malformed arguments, a timeout, an unauthorised call, and a tool that returns the wrong thing confidently.':
    'Test kijiye: bigde hue arguments, ek timeout, bina ijazat ki call, aur aisa tool jo galat cheez poore vishwas ke saath lauta de.',
  'A tool contract, a workflow diagram, and a failure-state table.':
    'Ek tool contract, ek workflow ka diagram, aur failure ki soorat ka table.',
  'Point at every place in the flow where deterministic code retains control.':
    'Flow mein har us jagah ungli rakhiye jahan control pakka code ke haath mein rehta hai.',
  'Tool calling and workflows':
    'Tool calling aur workflows',
  'Book chapter 12. Give the model hands, keep the steering wheel. Deterministic workflows and explicit tool contracts — before anything is allowed to be an agent.':
    'Kitaab ka chapter 12. Model ko haath dijiye, steering apne paas rakhiye. Pakke workflows aur saaf tool contracts — isse pehle ki kisi cheez ko agent banne ki ijazat mile.',
  'Write a tool contract that a reviewer could sign off.':
    'Aisa tool contract likhna jise koi reviewer sign kar sake.',
  'Say when a fixed workflow beats letting the model decide.':
    'Batana ki kab ek tay workflow model ko faisla karne dene se behtar hai.',
  'Name the checks that must happen before a consequential action executes.':
    'Woh jaanchein batana jo koi bada asar waala kaam hone se pehle zaroori hain.',
  'A workflow that drafts but cannot submit':
    'Aisa workflow jo draft banata hai par bhej nahi sakta',
  'An approval flow where the assistant can prepare a purchase request and can never send it. The interesting number is not whether it works — it is how often the model proposes the correct action when it is not allowed to act.':
    'Ek approval flow jisme assistant purchase request taiyaar kar sakta hai par bhej kabhi nahi sakta. Dilchasp number yeh nahi ki woh chalta hai ya nahi — dilchasp yeh hai ki jab use kaam karne ki ijazat nahi hai tab woh kitni baar sahi kaam sujhaata hai.',
  'Write the tool contract for the draft action and for the submit action separately.':
    'Draft waale kaam aur bhejne waale kaam ka tool contract alag-alag likhiye.',
  'Enforce the split server-side: the submit tool is not in the model’s allowed list at all.':
    'Yeh batwara server par lagaiye: bhejne waala tool model ki ijazat waali list mein hai hi nahi.',
  'Add a human approval step with an audit record of who approved what.':
    'Ek insaani approval ka step joriye, jisme likha ho ki kisne kya manzoor kiya.',
  'Run twenty realistic requests and record how often the proposed action was correct.':
    'Bees asli jaisi requests chalaiye aur likhiye ki sujhaya gaya kaam kitni baar sahi tha.',
  'Test a malformed argument, an unauthorised request and a timeout, and record what the user saw each time.':
    'Ek bigda hua argument, ek bina-ijazat request aur ek timeout test kijiye, aur har baar likhiye ki user ko kya dikha.',
  'The model cannot submit even if it asks to.':
    'Model bhej nahi sakta, chaahe maange bhi.',
  'Every approval leaves a record naming a person.':
    'Har approval ek record chhodti hai jisme kisi vyakti ka naam ho.',
  'You have a measured proposal-accuracy figure, not an impression.':
    'Aapke paas sujhaav kitne sahi the iska naapa hua number ho, koi andaaza nahi.',
  'A schema makes the shape reliable':
    'Schema shakal ko bharosemand banata hai',
  'Chapter 8. A tool contract is that idea pointed outward.':
    'Chapter 8. Tool contract wahi soch hai, bas bahar ki taraf mudi hui.',
  'The model invents when it has no evidence':
    'Saboot na ho to model gadh leta hai',
  'Chapter 2. Now it can invent arguments to a real action.':
    'Chapter 2. Ab woh ek asli kaam ke arguments bhi gadh sakta hai.',
  'A bank teller can look up your balance. They cannot approve a loan on their own, and they certainly cannot wire money out on a customer’s say-so. Nobody wrote that rule because tellers are untrustworthy. They wrote it because the consequences of some actions leave the building.':
    'Bank ka clerk aapka balance dekh sakta hai. Woh apne aap loan manzoor nahi kar sakta, aur customer ke keh dene bhar se paisa to bilkul bahar nahi bhej sakta. Yeh niyam isliye nahi bana ki clerk par bharosa nahi hai. Yeh isliye bana ki kuch kaamon ka nateeja imaarat se bahar chala jaata hai.',
  'Giving an AI a <strong>tool</strong> is the same decision. A tool lets it do something real — look up an invoice, send an email, change a record. So the interesting question is never “can it?” It is: what exactly may it do, with what, and who checks.':
    'AI ko <strong>tool</strong> dena bilkul wahi faisla hai. Tool use kuch asli karne deta hai — invoice dekhna, email bhejna, record badalna. Isliye asli sawaal kabhi yeh nahi hota ki "kar sakta hai kya?" Sawaal yeh hai: theek-theek kya kar sakta hai, kis cheez par, aur jaanchta kaun hai.',
  'A workflow is often safer than an autonomous agent. If the sequence of steps is known, fix the sequence in code and let the model do only the part that genuinely needs judgement.':
    'Khud chalne waale agent se workflow aksar zyada surakshit hota hai. Agar kadmon ka kram pata hai, to kram ko code mein pakka kar dijiye aur model se sirf woh hissa karwaiye jisme sach mein soch chahiye.',
  'The checklist below is the one to run over any tool before it ships. It is short, and every line on it has been the cause of a real incident somewhere.':
    'Neeche waali checklist kisi bhi tool ko bhejne se pehle uspar chalaiye. Yeh chhoti hai, aur iski har line kahin na kahin ek asli hadse ki wajah ban chuki hai.',
  'The name is clear and the description is truthful — the model reads both.':
    'Naam saaf ho aur description sachcha — model dono padhta hai.',
  'Parameters are constrained, not free text where an enum would do.':
    'Parameters bandhe hue hon — jahan gini-chuni list chal sakti ho wahan khuli likhaai nahi.',
  'Side effects are explicit.':
    'Iske aur kya asar honge, yeh saaf likha ho.',
  'Permissions are enforced server-side, not by asking the model nicely.':
    'Ijazat server par lagu ho, model se vinamrata se maangkar nahi.',
  'Idempotency has been considered.':
    'Do baar chalne par kya hoga, yeh socha gaya ho.',
  'Errors are structured.':
    'Errors ek tay shakal mein aayein.',
  'Audit data is captured.':
    'Kis-kisne kya kiya, yeh record ho.',
  'Destructive actions require confirmation.':
    'Nuksaan pahunchane waale kaam confirmation maangein.',
  'Do not hand the model a tool just because it can have one. Every tool expands the attack surface and adds latency, cost and failure modes. The model should decide what to call only where the decision is worth something.':
    'Model ko tool sirf isliye mat dijiye ki de sakte hain. Har tool hamla karne ki jagah badhata hai, aur latency, cost aur bigadne ke naye tareeke laata hai. Model ko yeh tabhi tay karna chahiye ki kya chalana hai, jab us faisle ki keemat ho.',
  'List the tools you would give a support assistant. Now cross out every one where a fixed rule would pick correctly more than 95% of the time.':
    'Un tools ki list banaiye jo aap ek support assistant ko denge. Ab har woh kaat dijiye jahan ek tay niyam 95% se zyada baar sahi chun leta.',
  'What is left is the set where the model’s judgement earns its risk. It is usually much shorter than the first list.':
    'Jo bacha, wahi woh set hai jahan model ki soch apna risk kamati hai. Woh aam taur par pehli list se kaafi chhoti hoti hai.',
  'Tool contract':
    'Tool contract',
  'The typed interface to an external capability: name, description, constrained parameters, error states, permissions and side effects.':
    'Bahar ki kisi kshamta ka tay-shakal interface: naam, description, bandhe hue parameters, error ki soortein, ijazat, aur kya-kya asar hoga.',
  'Deterministic workflow':
    'Pakka workflow',
  'A fixed sequence where only the parts that genuinely need judgement are left to the model.':
    'Ek tay kram jisme sirf woh hisse model par chhode jaate hain jinme sach mein soch chahiye.',
  'Idempotency':
    'Idempotency',
  'The property that doing the same operation twice has the same effect as doing it once — which matters the moment anything retries.':
    'Woh gun ki ek hi kaam do baar karne ka asar ek baar karne jaisa hi ho — jo us pal maayne rakhta hai jab koi cheez dobara koshish karti hai.',
  'Confirmation step':
    'Confirmation ka step',
  'A required human acknowledgement before a consequential action runs.':
    'Bade asar waala kaam chalne se pehle kisi insaan ki zaroori haami.',

  /* ---- chapter 26 ---- */
  'Build the smallest possible loop: propose → call one approved tool → observe → continue or stop.':
    'Sabse chhota mumkin loop banaiye: sujhao → ek manzoor tool chalao → nateeja dekho → aage badho ya ruk jao.',
  'Add an allowed-tool list, a maximum number of steps, explicit state, stop conditions, and a human approval gate.':
    'Ijazat waale tools ki list joriye, kadmon ki adhiktam ginti, saaf state, rukne ki shartein, aur ek insaani approval ka gate.',
  'Make it loop. Feed it confusing tool output. Ask it for a tool it is not allowed to use.':
    'Ise chakkar mein daaliye. Uljhane waala tool output dijiye. Aisa tool maangiye jiski use ijazat nahi hai.',
  'A comparison of the agent against the deterministic workflow across twenty tasks.':
    'Bees kaamon par agent aur pakke workflow ki aamne-saamne tulna.',
  'Prove the autonomy adds measurable value. If it does not, ship the workflow.':
    'Saabit kijiye ki khud chalne se naapi jaa sakne waali behtari aayi. Nahi aayi, to workflow bhejiye.',
  'Agents — reason, act, observe, repeat':
    'Agents — socho, karo, dekho, dohrao',
  'Book chapter 13. An agent is not a smarter chatbot. It is a system where the model chooses actions, inspects results, and continues toward a goal — which makes control, not intelligence, the hard part.':
    'Kitaab ka chapter 13. Agent koi zyada hoshiyaar chatbot nahi hai. Yeh aisa system hai jisme model khud kaam chunta hai, nateeja dekhta hai, aur lakshya ki taraf badhta rehta hai — aur isi se mushkil hissa akalmandi nahi, control ban jaata hai.',
  'Draw the agent loop with its stopping conditions and error paths.':
    'Agent ka loop banana, uski rukne ki shartein aur error ke raaston ke saath.',
  'Explain why most agent failures are control problems, not intelligence problems.':
    'Samjhaana ki agent ke zyadatar failure control ki dikkat hain, akalmandi ki nahi.',
  'Say when to add a second agent, and when not to.':
    'Batana ki doosra agent kab jorna chahiye, aur kab nahi.',
  'An agent, measured against the workflow it wants to replace':
    'Ek agent, us workflow ke against naapa hua jiski jagah woh lena chahta hai',
  'Build an agent that searches your corpus, computes one deterministic metric, and produces a cited answer. Then prove whether it beat the fixed pipeline from chapter 25.':
    'Aisa agent banaiye jo aapke documents mein dhoondhe, ek pakka number nikaale, aur hawaale ke saath jawaab de. Phir saabit kijiye ki usne chapter 25 waali tay pipeline ko haraya ya nahi.',
  'Give it exactly two tools and an explicit allowed list.':
    'Use theek do tool dijiye aur ek saaf ijazat waali list.',
  'Bound it: maximum steps, timeout, and a cannot-resolve exit.':
    'Use baandhiye: adhiktam kadam, ek timeout, aur "hal nahi kar paaya" waala nikaas.',
  'Run the same twenty tasks through the agent and the workflow.':
    'Wahi bees kaam agent se bhi chalaiye aur workflow se bhi.',
  'Record tool-selection accuracy, number of calls, latency and cost for each.':
    'Dono ke liye likhiye: sahi tool chunne ki dar, kitni calls lagi, latency aur cost.',
  'Write one paragraph recommending one of them, with the numbers in it.':
    'Ek paragraph likhiye jisme kisi ek ki sifarish ho, aur usme numbers likhe hon.',
  'Both systems ran the same twenty tasks.':
    'Dono system ne wahi bees kaam kiye hon.',
  'You have four numbers for each, not an impression.':
    'Har ek ke chaar numbers hon, koi andaaza nahi.',
  'The recommendation names the metric that decided it.':
    'Sifarish mein us number ka naam ho jisne faisla kiya.',
  'Tool contracts and deterministic workflows':
    'Tool contracts aur pakke workflows',
  'Chapter 25 built the thing an agent is being compared against.':
    'Chapter 25 ne wahi cheez banayi thi jiske against agent ko naapa jaa raha hai.',
  'Every step costs tokens':
    'Har kadam par tokens lagte hain',
  'Chapter 1. A loop multiplies that by the number of turns.':
    'Chapter 1. Loop use chakkaron ki ginti se guna kar deta hai.',
  'Send a junior colleague to find one number. A good one comes back in ten minutes with the number, or comes back and says they could not find it. A worse outcome is the one where they never come back at all, still looking, three hours later.':
    'Kisi junior sahyogi ko ek number dhoondhne bhejiye. Achcha sahyogi das minute mein number leke aata hai, ya aakar keh deta hai ki mila nahi. Usse bura nateeja woh hai jisme woh lautta hi nahi — teen ghante baad bhi dhoondh raha hai.',
  'An <strong>agent</strong> is a system that keeps going by itself: decide, do something, look at the result, decide again. Everyone teaches that loop. The part that gets skipped is that every loop needs a way to stop — and almost all the trouble lives there rather than in how clever the model is.':
    '<strong>Agent</strong> aisa system hai jo khud chalta rehta hai: tay karo, kuch karo, nateeja dekho, phir tay karo. Yeh loop sab sikhate hain. Jo hissa chhoot jaata hai woh yeh hai ki har loop ko rukne ka raasta chahiye — aur lagbhag saari museebat wahin rehti hai, na ki isme ki model kitna hoshiyaar hai.',
  'Agent failure is usually a control problem, not an intelligence problem. The model did not become stupid; it was given an unbounded number of chances to be wrong.':
    'Agent ka fail hona aam taur par control ki dikkat hai, akalmandi ki nahi. Model bewakoof nahi ho gaya; use galat hone ke anginat mauke de diye gaye.',
  'Pattern':
    'Tareeka',
  'Use it when':
    'Kab istemaal karein',
  'Main risk':
    'Sabse bada khatra',
  'Sequential workflow':
    'Ek ke baad ek waala workflow',
  'The steps are known':
    'Kadam pehle se pata hain',
  'Rigid when the problem shifts':
    'Samasya badalte hi akad jaata hai',
  'Routing':
    'Routing — raasta chunna',
  'One of several specialised paths fits':
    'Kai khaas raaston mein se koi ek theek baithta hai',
  'The router picks wrong':
    'Raasta chunne waala galat chun le',
  'Parallel':
    'Saath-saath',
  'Subtasks are genuinely independent':
    'Chhote kaam sach mein ek doosre se aazad hain',
  'Coordination and aggregation':
    'Taalmel aur nateejon ko jodna',
  'Handoff':
    'Kaam saunp dena',
  'A specialist should take over':
    'Kisi maahir ko aage sambhalna chahiye',
  'Lost context, unclear authority':
    'Context kho jaana, adhikaar saaf na hona',
  'Orchestrator-worker':
    'Ek nirdeshak aur kai kaam karne waale',
  'The plan decomposes into subtasks':
    'Yojana chhote kaamon mein tut jaati hai',
  'Cost, loops, state complexity':
    'Kharcha, chakkar, aur state ki uljhan',
  'Start with one model and a short list of tools it may use. Add a second agent only when you have measured something the simpler version could not do. Complexity is a budget you spend, not a sign of sophistication.':
    'Ek model aur unke tools ki chhoti list se shuru kijiye. Doosra agent tabhi joriye jab aapne naapkar dekh liya ho ki saral version woh kaam nahi kar paaya. Uljhan ek budget hai jo kharch hota hai, kisi hoshiyaari ki nishaani nahi.',
  'Take the twenty tasks from your chapter 25 workflow and run them through the agent. Count: how many did the agent get right, how many tool calls did it take, and what did it cost?':
    'Chapter 25 ke workflow waale bees kaam lijiye aur unhe agent se chalaiye. Giniye: agent ne kitne sahi kiye, kitni tool calls lagi, aur kitna kharcha hua?',
  'If the agent is not clearly better on a metric you care about, the workflow wins. That is a real and respectable result to bring to a review.':
    'Agar agent kisi aise number par saaf behtar nahi hai jo aapke liye maayne rakhta hai, to workflow jeeta. Yeh ek asli aur izzatdaar nateeja hai jise review mein le jaana chahiye.',
  'Agent':
    'Agent'

});
