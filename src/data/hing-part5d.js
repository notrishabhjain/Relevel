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
  'Write a tool contract that a reviewer could sign off.':
    'Aisa tool contract likhna jise koi reviewer sign kar sake.',
  'A workflow that drafts but cannot submit':
    'Aisa workflow jo draft banata hai par bhej nahi sakta',
  'Every approval leaves a record naming a person.':
    'Har approval ek record chhodti hai jisme kisi vyakti ka naam ho.',
  'The model invents when it has no evidence':
    'Saboot na ho to model gadh leta hai',
  'Destructive actions require confirmation.':
    'Nuksaan pahunchane waale kaam confirmation maangein.',
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
  'Draw the agent loop with its stopping conditions and error paths.':
    'Agent ka loop banana, uski rukne ki shartein aur error ke raaston ke saath.',
  'Explain why most agent failures are control problems, not intelligence problems.':
    'Samjhaana ki agent ke zyadatar failure control ki dikkat hain, akalmandi ki nahi.',
  'Say when to add a second agent, and when not to.':
    'Batana ki doosra agent kab jorna chahiye, aur kab nahi.',
  'Give it exactly two tools and an explicit allowed list.':
    'Use theek do tool dijiye aur ek saaf ijazat waali list.',
  'Run the same twenty tasks through the agent and the workflow.':
    'Wahi bees kaam agent se bhi chalaiye aur workflow se bhi.',
  'Both systems ran the same twenty tasks.':
    'Dono system ne wahi bees kaam kiye hon.',
  'The recommendation names the metric that decided it.':
    'Sifarish mein us number ka naam ho jisne faisla kiya.',
  'Every step costs tokens':
    'Har kadam par tokens lagte hain',
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
  'Agent':
    'Agent'

});
