/* Hinglish: the v4.2 hands-on units, part 3 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'Create 20 tool-selection test cases across two or three tools.':
    'Do ya teen tool par phaile hue bees tool-chunaav ke test case banaiye.',
  'Record selected tool, arguments and expected tool.':
    'Chuna gaya tool, uske argument, aur jo tool hona chahiye tha — teenon likhiye.',
  'Add near-duplicate tool names and ambiguous requests.':
    'Lagbhag ek jaise tool ke naam aur dhundhli request jodiye.',
  'Tool Selection Benchmark.':
    'Tool chunaav ka benchmark.',
  'What percentage of calls are correct, unnecessary or unsafe?':
    'Kitne pratishat call sahi hain, kitne bekaar, aur kitne asurakshit?',
  'This becomes a measurable quality dimension in agent systems.':
    'Agent wale system mein yahi gunvatta ka ek naapa ja sakne wala paimaana ban jaata hai.',
  'Validation, retries and timeouts':
    'Jaanch, dobara koshish aur timeout',
  'Separate model-generated arguments from deterministic execution controls.':
    'Model ke banaye argument ko chalane wale nishchit control se alag rakhiye.',
  'The model is not the authorization layer.':
    'Model permission ki parat nahi hai.',
  'Validate every argument before execution and implement timeout/retry policy.':
    'Chalane se pehle har argument jaanchiye, aur timeout tatha dobara koshish ki policy banaiye.',
  'Simulate transient and permanent failures.':
    'Kshanik aur sthayi — dono tarah ki galtiyon ka abhyaas kijiye.',
  'Return malformed tool results and test downstream behavior.':
    'Bigde hue tool nateeje lautaiye aur aage ke vyavhaar ko jaanchiye.',
  'Tool Failure-State Table.':
    'Tool ki galat sthitiyon ki table.',
  'Which failures are retryable and which require user intervention?':
    'Kaunsi galtiyon mein dobara koshish theek hai aur kaunsi mein user ko beech mein aana padega?',
  'A PM should ask for timeout, retry and failure semantics for every external dependency.':
    'PM ko har baahari dependency ke liye timeout, dobara koshish aur galti ke niyam poochhne chahiye.',
  'Idempotency and side effects':
    'Idempotency aur side effect',
  'Understand why repeated tool calls can duplicate actions.':
    'Samajhiye ki baar-baar tool call se kaam do baar kyun ho jaata hai.',
  'A retry is safe only when the operation is safe to repeat or protected by an idempotency mechanism.':
    'Dobara koshish tabhi surakshit hai jab kaam dohraane laayak ho, ya idempotency ke intezaam se bacha ho.',
  'Design an idempotency key for a purchase/request submission.':
    'Kharidari ya request bhejne ke liye ek idempotency key banaiye.',
  'Run the same action twice and verify only one business effect occurs.':
    'Wahi kaam do baar chalaiye aur dekhiye ki business par asar sirf ek baar hua.',
  'Simulate a network timeout after the server accepted the request.':
    'Server ke request sweekaar karne ke baad network timeout ka abhyaas kijiye.',
  'Side-Effect Safety Checklist.':
    'Side effect ki surakshaa ki checklist.',
  'What happens if the client never receives the success response?':
    'Agar client ko safalta ka jawaab mile hi nahi, tab kya hoga?',
  'This is essential when AI can trigger payments, tickets, messages or records.':
    'Jab AI bhugtaan, ticket, sandesh ya record chala sakta ho, tab yeh zaroori hai.',
  'Human approval':
    'Insaan ki manzoori',
  'Insert explicit confirmation before consequential or irreversible actions.':
    'Bhaari ya na palat sakne wale kaam se pehle saaf manzoori ka kadam daaliye.',
  'Human-in-the-loop is an architecture boundary, not a polite UI popup.':
    'Insaan ka beech mein hona architecture ki lakeer hai, koi shishta UI popup nahi.',
  'Build draft ® review ® approve ® execute.':
    'Draft ® jaanch ® manzoori ® kaam — yeh kram banaiye.',
  'Log who approved, what was approved and which exact payload was executed.':
    'Likhiye kisne manzoori di, kis cheez ki, aur theek kaunsa payload chala.',
  'Change the payload after approval and verify execution is blocked.':
    'Manzoori ke baad payload badliye aur dekhiye ki chalna ruk jaata hai.',
  'Approval Workflow Diagram + audit schema.':
    'Manzoori ke workflow ka diagram aur audit ka schema.',
  'What exactly did the human approve?':
    'Insaan ne theek-theek kis cheez ko manzoori di?',
  'The approval object must bind to the action, not just to a vague conversation.':
    'Manzoori us kaam se bandhi honi chahiye, kisi dhundhli baatcheet se nahi.',
  'Workflow patterns':
    'Workflow ke pattern',
  'Implement sequential, routing, parallel and evaluator-optimizer workflows.':
    'Kramik, raasta chunne wale, saath-saath chalne wale, aur jaanch-sudhaar wale workflow banaiye.',
  'A workflow is a predefined control path with model calls inside it.':
    'Workflow ek pehle se tay raasta hai, jiske andar model ki call baithti hain.',
  'Build one simple sequential workflow and one routing workflow.':
    'Ek saral kramik workflow banaiye aur ek raasta chunne wala.',
  'Measure latency, cost and task success.':
    'Latency, lagat aur kaam ki safalta naapiye.',
  'Introduce a wrong route and observe downstream failure.':
    'Ek galat raasta daaliye aur dekhiye aage kya bigadta hai.',
  'Workflow Pattern Comparison.':
    'Workflow pattern ki tulna.',
  'Which pattern adds value and which adds unnecessary complexity?':
    'Kaunsa pattern faayda deta hai aur kaunsa sirf bekaar ki uljhan?',
  'Use the simplest composable pattern that meets the acceptance criteria.':
    'Sabse saral jodne-laayak pattern istemaal kijiye jo acceptance criteria poora kar de.',
  'Only after workflows are understood do we allow the model to control the path.':
    'Workflow samajhne ke baad hi hum model ko raasta chunne dete hain.',
  'The agent loop':
    'Agent ka loop',
  'Understand goal ® model decision ® tool call ® observation ® updated context ® stop/continue.':
    'Samajhiye: lakshya ® model ka faisla ® tool call ® observation ® naya context ® rukna ya chalte rehna.',
  'The loop is the architecture; “agent” is not magic.':
    'Loop hi architecture hai; “agent” koi jaadu nahi.',
  'Draw the loop and label every state and transition before coding.':
    'Code likhne se pehle loop banaiye aur har state tatha har badlaav par naam likhiye.',
  'Implement a three-step toy loop with explicit state.':
    'Saaf state ke saath teen kadam ka ek khilauna loop banaiye.',
  'Force a tool failure and inspect whether the loop recovers or spirals.':
    'Tool ko zabardasti fail karwaiye aur dekhiye ki loop sambhal jaata hai ya bhatak jaata hai.',
  'Agent State Diagram.':
    'Agent ki state ka diagram.',
  'Where can the loop stop safely?':
    'Loop surakshit roop se kahan ruk sakta hai?',
  'If you cannot draw the loop, you cannot defend the architecture.':
    'Agar aap loop bana nahi sakte, to architecture ka bachaav bhi nahi kar sakte.',
  'Planning and tool choice':
    'Yojana aur tool ka chunaav',
  'Understand model-driven planning and when it is actually useful.':
    'Model se chalne wali yojana samajhiye, aur yeh bhi ki woh sach mein kab kaam ki hai.',
  'Agents trade predictability for flexibility.':
    'Agent anumaan-yogyata dekar lachilapan lete hain.',
  'Give the agent three tools and 20 tasks; record tool selection.':
    'Agent ko teen tool aur bees kaam dijiye; uska tool chunaav likhiye.',
  'Compare one fixed workflow against the agent on the same tasks.':
    'Unhi kaamon par ek nishchit workflow ki agent se tulna kijiye.',
  'Include tasks that require no tool and tasks with ambiguous tool options.':
    'Aise kaam bhi rakhiye jinmein koi tool chahiye hi nahi, aur aise bhi jahan tool ka chunaav dhundhla ho.',
  'Agent vs Workflow Comparison.':
    'Agent banaam Workflow ki tulna.',
  'Did autonomy improve the acceptance metric enough to justify it?':
    'Kya apne-aap chalne ne acceptance metric itna sudhaara ki woh sahi thehre?',
  'A workflow that passes may be better than an agent that merely looks impressive.':
    'Jo workflow paas ho jaaye woh us agent se behtar hai jo sirf prabhaavshaali dikhta hai.',
  'State and context management':
    'State aur context ka intezaam',
  'Keep task state explicit and control context growth.':
    'Kaam ki state saaf rakhiye aur context ko badhne se roke rakhiye.',
  'Long-running loops can accumulate stale, irrelevant or contradictory context.':
    'Lambe chalne wale loop mein purana, bekaar ya takraata context jama ho jaata hai.',
  'Define a state object containing goal, steps, observations, approvals and status.':
    'Ek state object banaiye jismein lakshya, kadam, observation, manzooriyan aur status hon.',
  'Persist state between iterations and summarize only when necessary.':
    'Har chakkar ke beech state sahej lijiye, aur saar sirf tab banaiye jab zaroori ho.',
  'Add repeated observations and irrelevant tool output; measure context growth.':
    'Dohraaye gaye observation aur bekaar tool output jodiye; context ka badhna naapiye.',
  'Agent State Schema + Context Policy.':
    'Agent ki state ka schema aur context ki policy.',
  'Which fields are authoritative?':
    'Kaunsi field par aakhri bharosa kiya jaata hai?',
  'Explicit state makes incidents explainable.':
    'Saaf state ghatnaon ko samjhane laayak bana deti hai.',
  'Stopping conditions':
    'Rukne ki shartein',
  'Bound steps, time, cost and unsafe action classes.':
    'Kadam, samay, lagat aur asurakshit kaamon ki shreniyan — sab par seema lagaiye.',
  'An agent without stop conditions is an unbounded production dependency.':
    'Bina rukne ki shart wala agent production mein ek bina-seema ki dependency hai.',
  'Set max steps, timeout, cost ceiling and “cannot resolve” state.':
    'Adhiktam kadam, timeout, lagat ki chhat, aur “hal nahi ho paaya” wali sthiti tay kijiye.',
  'Log why each run stopped.':
    'Har run kyun ruka, yeh likhiye.',
  'Create a loop that never finds an answer and prove it terminates.':
    'Ek aisa loop banaiye jise jawaab milta hi nahi, aur sabit kijiye ki woh khatam hota hai.',
  'Agent Control Policy.':
    'Agent ke control ki policy.',
  'Can you prove the system terminates under failure?':
    'Kya aap sabit kar sakte hain ki galti ki haalat mein bhi system ruk jaata hai?',
  'This is a reliability and cost requirement, not just an engineering detail.':
    'Yeh bharose aur lagat ki zaroorat hai, sirf engineering ki ek baareeki nahi.',
  'Human checkpoints':
    'Insaan ke checkpoint',
  'Add human intervention at ambiguity, high impact and irreversible transitions.':
    'Jahan dhundhlapan ho, asar bhaari ho, ya baat palti na ja sake — wahan insaan ko beech mein rakhiye.',
  'Autonomy should be proportional to reversibility and confidence.':
    'Apne-aap chalne ki chhoot utni honi chahiye jitni baat palat paane ki aur bharose ki gunjaish ho.',
  'Mark each tool/action as read-only, reversible-write or irreversible-write.':
    'Har tool ya kaam par nishaan lagaiye: sirf padhna, palte ja sakne wala likhna, ya na palte ja sakne wala likhna.',
  'Require approval for the last category.':
    'Aakhri shreni ke liye manzoori zaroori kijiye.',
  'Try to bypass approval through a prompt or tool argument.':
    'Prompt ya tool argument se manzoori ko chakma dene ki koshish kijiye.',
  'Agent Approval Matrix.':
    'Agent ki manzoori matrix.',
  'Which actions are never autonomous?':
    'Kaunse kaam kabhi bhi apne-aap nahi hone chahiye?',
  'The business owner should approve the autonomy boundary.':
    'Apne-aap chalne ki lakeer par manzoori business ke maalik ki honi chahiye.',
  'Multi-agent patterns':
    'Kai agent wale pattern',
  'Understand handoffs, orchestrator-worker and multi-agent collaboration without assuming they are superior.':
    'Kaam saunpna, orchestrator-worker, aur kai agent ka saath kaam karna samajhiye — yeh maane bina ki yeh behtar hi hain.',
  'Multiple agents create additional state, latency, cost and failure surfaces.':
    'Kai agent aur state, aur latency, aur lagat, aur galtiyon ki nayi jagahein paida karte hain.',
  'Solve a task with one agent first. Then prototype a two-role decomposition.':
    'Pehle ek hi agent se kaam hal kijiye. Phir do-role wala prototype banaiye.',
  'Compare task success and operational complexity.':
    'Kaam ki safalta aur rozmarra ki uljhan ki tulna kijiye.',
  'Introduce conflicting outputs and unclear ownership.':
    'Takraate output aur dhundhli zimmedari daaliye.',
  'Multi-Agent Decision Record.':
    'Kai agent wale faisle ka record.',
  'What measurable problem did the second agent solve?':
    'Doosre agent ne kaunsi naapi ja sakne wali samasya hal ki?',
  'Complexity must buy a measurable capability.':
    'Uljhan ke badle koi naapi ja sakne wali kshamta milni chahiye.',
  'Agent exit gate':
    'Agent ka nikaas gate',
  'Make “use an agent” a hypothesis requiring evidence.':
    '“Agent istemaal karo” ko ek aisa anumaan banaiye jise saboot chahiye.',
  'The right architecture is the simplest one that meets requirements.':
    'Sahi architecture wahi hai jo sabse saral ho aur zaroortein poori kar de.',
  'Create a 20-task benchmark comparing direct call, workflow and agent.':
    'Bees kaam ka ek benchmark banaiye jo seedhi call, workflow aur agent ki tulna kare.',
  'Score quality, tool accuracy, latency, cost and safety.':
    'Gunvatta, tool ki sateekta, latency, lagat aur safety — sab ko score dijiye.',
  'Remove one capability at a time and see whether the agent still adds value.':
    'Ek-ek kar ke kshamta hataiye aur dekhiye ki agent ab bhi faayda de raha hai ya nahi.',
  'Agent Architecture Decision Record.':
    'Agent architecture ka decision record.',
  'Would you still choose an agent if nobody called it “agentic AI”?':
    'Agar koi ise “agentic AI” na kehta, tab bhi aap agent chunte?',
  'That question protects you from architecture-by-hype.':
    'Yahi sawaal aapko shor ke bharose bane architecture se bachata hai.',
  'Next, we examine interoperability standards around tools and agents.':
    'Aage hum tool aur agent ke aas-paas ke aapasi maanak dekhenge.',
  'MCP mental model':
    'MCP ka mansik naksha',
  'Explain host, client, server, tools, resources, prompts and capability negotiation.':
    'Host, client, server, tool, resource, prompt aur kshamta ki baatcheet — sab samjhaiye.',
  'A protocol standardizes interaction patterns; it does not remove the need for authorization or safe design.':
    'Protocol lein-dein ka tareeka ek jaisa banata hai; woh permission ya surakshit design ki zaroorat khatam nahi karta.',
  'Draw host ® client ® server ® tool/resource flow.':
    'Host ® client ® server ® tool ya resource ka bahaav banaiye.',
  'Inspect one real or local protocol exchange.':
    'Ek asli ya local protocol ke lein-dein ko dekhiye.',
  'Ask what happens when a server advertises a capability the user is not authorized to use.':
    'Poochhiye ki jab server aisi kshamta batata hai jiski user ko ijaazat hi nahi, tab kya hota hai.',
  'MCP Trust-Boundary Diagram.':
    'MCP ki bharosa-lakeer ka diagram.',
  'Where does identity live and where is authorization enforced?':
    'Pehchaan kahan rehti hai aur permission kahan laagu hoti hai?',
  'Protocol knowledge lets you challenge “MCP makes it secure” claims.':
    'Protocol ki samajh aapko “MCP se yeh surakshit ho jaata hai” jaise daawe par sawaal uthane deti hai.',
  'Expose a tiny capability':
    'Ek chhoti si kshamta saamne laaiye',
  'Build a tiny local capability provider exposing one safe tool/resource.':
    'Ek chhota local capability provider banaiye jo ek surakshit tool ya resource saamne rakhe.',
  'The best way to understand a protocol is to inspect a small working implementation.':
    'Protocol samajhne ka sabse achha tareeka ek chhoti chalti hui cheez ko kholkar dekhna hai.',
  'Expose a read-only function such as looking up a local record.':
    'Sirf padhne wala ek function saamne rakhiye — jaise kisi local record ko dhoondhna.'

});
