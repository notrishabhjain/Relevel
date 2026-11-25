/* Hinglish: part5, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch8f: Software basics for AI work: Python, HTTP, Git and tests ---- */
  'Software basics for AI work: Python, HTTP, Git and tests':
    'AI kaam ke liye software basics: Python, HTTP, Git aur tests',
  'An API call is a request and a reply':
    'API call ek request aur ek reply hoti hai',
  'You pay for everything you send':
    'Aap jo bhi bhejte hain, uska paisa lagta hai',
  'Contract':
    'Contract',
  'Status code':
    'Status code',
  'Stack trace':
    'Stack trace',
  'Experiment harness':
    'Experiment harness',
  'Before you start':
    'Shuru karne se pehle',
  'Why this matters':
    'Yeh kyun zaroori hai',
  'Hands-on units':
    'Hands-on units',
  'Python as an experiment instrument':
    'Python ek experiment instrument ki tarah',
  'A file called <code>chapter-8/python-basics.py</code>, plus a one-page log of the errors you saw.':
    'Ek file <code>chapter-8/python-basics.py</code>, aur saath mein jo errors aapne dekhe unka ek page ka log.',
  'HTTP, JSON and API contracts':
    'HTTP, JSON aur API contracts',
  'Environments, secrets and Git':
    'Environments, secrets aur Git',
  'Create a repository with a README, a requirements file and one command that runs the experiment the same way every time.':
    'Ek repository banaiye jisme README ho, ek requirements file ho, aur ek command ho jo experiment ko har baar ek hi tareeke se chalaye.',
  'Could another person run your experiment without asking you what you did by hand?':
    'Kya koi doosra insaan aapka experiment chala sakta hai, yeh poochhe bina ki aapne haath se kya kiya tha?',
  'Errors, logging and tests':
    'Errors, logging aur tests',
  'Add a request ID, a timestamp, the model and the status to every experiment record.':
    'Har experiment record mein ek request ID, timestamp, model aur status jodiye.',
  'Build the experiment harness':
    'Experiment harness banaiye',
  'The harness is the bridge between “I tried it” and “I measured it.”':
    'Harness “maine try kiya” aur “maine measure kiya” ke beech ka pul hai.',
  'Contracts fail silently':
    'Contracts chupke se fail hote hain',
  'What “enough” means':
    '“Kaafi” ka matlab kya hai',
  'You can write a small function, and keep a few labelled values together in a dictionary.':
    'Aap ek chhota function likh sakte hain, aur kuch labelled values ko ek dictionary mein ek saath rakh sakte hain.',
  'You know your <strong>status codes</strong>: 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.':
    'Aap apne <strong>status codes</strong> jaante hain: 200 matlab kaam ho gaya, 4xx matlab request galat thi, aur 5xx matlab server fail hua.',
  'You can write a test that fails on purpose, so you know it really does check something.':
    'Aap aisa test likh sakte hain jo jaan-boojh kar fail ho, taaki aapko pata chale ki woh sach mein kuch check karta hai.',
  'The request probably contained … The response probably … I am guessing about …':
    'Request mein shayad yeh tha … Response shayad … Mujhe andaaza lagana pada …',
  'Summary':
    'Summary',
  'Build the test harness and keep it in Git':
    'Test harness banaiye aur use Git mein rakhiye',
  'Write a function that runs one sentence through your current pipeline and saves a JSON record of the run. The record holds the sentence, the findings, the time, the tokens and any error.':
    'Ek function likhiye jo ek sentence ko aapki maujooda pipeline se chalaye aur us run ka ek JSON record save kare. Record mein sentence, findings, time, tokens aur koi bhi error hota hai.',
  'Break one thing on purpose, such as a bad key, a time-out or a broken reply. Then check that the record is still written, with the error in it.':
    'Jaan-boojh kar ek cheez todiye, jaise galat key, time-out ya toota hua reply. Phir check kijiye ki record phir bhi likha jaata hai, aur usme error likha hai.',
  'A scoreboard printed from the answer key.':
    'Answer key se print kiya hua ek scoreboard.',
  'One saved record from a run that failed.':
    'Ek fail hue run ka ek saved record.',

  /* ---- ch9m: Choosing a model: benchmark on your own cases ---- */
  'Choosing a model: benchmark on your own cases':
    'Model chunna: apne hi cases par benchmark kijiye',
  'Temperature controls variation':
    'Temperature variation ko control karta hai',
  'Write the answer key before measuring':
    'Measure karne se pehle answer key likhiye',
  'An experiment harness that records runs':
    'Ek experiment harness jo runs record karta hai',
  'Inference':
    'Inference',
  'Sampling':
    'Sampling',
  'Benchmark':
    'Benchmark',
  'Model selection card':
    'Model selection card',
  'Write a model recommendation that answers the question “measured how?”.':
    'Aisi model recommendation likh paana jo “measured how?” sawaal ka jawaab de.',
  'What an LLM is doing at inference':
    'Inference ke waqt LLM kya kar raha hota hai',
  'Sampling and output variability':
    'Sampling aur output ka variation',
  'Model tiers and routing':
    'Model tiers aur routing',
  'A Model Selection Card.':
    'Ek Model Selection Card.',
  'Reasoning, context and fine-tuning boundaries':
    'Reasoning, context aur fine-tuning ke daayre',
  'Is the gap about knowledge, about behaviour, or both?':
    'Gap knowledge ka hai, behaviour ka hai, ya dono ka?',
  'Benchmarking without fooling yourself':
    'Khud ko dhokha diye bina benchmark karna',
  'Model Selection Card':
    'Model Selection Card',
  'Can a reviewer see exactly why you chose this model?':
    'Kya koi reviewer bilkul dekh sakta hai ki aapne yeh model kyun chuna?',
  'Change one thing at a time':
    'Ek baar mein ek hi cheez badaliye',
  'What you need to know about models':
    'Models ke baare mein aapko kya jaanna zaroori hai',
  'Fine-tune, prompt or retrieve?':
    'Fine-tune karein, prompt karein ya retrieve karein?',
  'Decision':
    'Decision',
  'Ask first':
    'Pehle poochhiye',
  'The common mistake':
    'Aam galti',
  'Model choice':
    'Model choice',
  'Fine-tune':
    'Fine-tune',
  'Is the gap about knowledge, or about behaviour?':
    'Gap knowledge ka hai, ya behaviour ka?',
  'Reasoning level':
    'Reasoning level',
  'Context size':
    'Context size',
  'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.':
    'Woh ek sentence likhiye jo aap tab kahenge jab koi stakeholder aapse us model par switch karne ko kahe jo abhi leaderboard par sabse upar aaya hai.',
  'Before we switch, …':
    'Switch karne se pehle, …',
  'Choose the model, with a back-up, and write it on one page':
    'Model chuniye, ek back-up ke saath, aur use ek page par likhiye',
  'Set a time limit and a cost limit for one message.':
    'Ek message ke liye time limit aur cost limit set kijiye.',
  'Numbers for the quality bar, the time limit and the cost limit.':
    'Quality bar, time limit aur cost limit ke numbers.',
  'A named back-up that you have tried once.':
    'Ek naam wala back-up jise aapne ek baar try kiya ho.',

  /* ---- ch10c: Context engineering: deciding what the model sees ---- */
  'Context engineering: deciding what the model sees':
    'Context engineering: model ko kya dikhana hai, yeh tay karna',
  'A system prompt is a standing instruction':
    'System prompt ek standing instruction hota hai',
  'The context window has a limit':
    'Context window ki ek limit hoti hai',
  'Structured output can be required':
    'Structured output ko required banaya ja sakta hai',
  'Context engineering':
    'Context engineering',
  'Context budget':
    'Context budget',
  'Schema validation':
    'Schema validation',
  'Provenance':
    'Provenance',
  'Prompt as an interface contract':
    'Prompt ek interface contract ki tarah',
  'Run the old and the new version on the same 10 cases.':
    'Purana aur naya version, dono ko wahi 10 cases par chalaiye.',
  'Which requirement became something you can measure after the rewrite?':
    'Rewrite ke baad kaunsi requirement aisi ban gayi jise aap measure kar sakte hain?',
  'Keep versions of your prompt changes, the way engineers do with code.':
    'Prompt ke changes ke versions rakhiye, jaise engineers code ke saath karte hain.',
  'Structured outputs and schemas':
    'Structured outputs aur schemas',
  'A Context Budget Worksheet.':
    'Ek Context Budget Worksheet.',
  'State, history and memory':
    'State, history aur memory',
  'A Memory and State Design Sheet.':
    'Ek Memory aur State Design Sheet.',
  'This is where privacy and product design meet context engineering.':
    'Yahin privacy aur product design, context engineering se milte hain.',
  'Provenance and citations':
    'Provenance aur citations',
  'Attach a source ID, a section and a chunk ID to every passage you retrieve.':
    'Har retrieve kiye gaye passage ke saath ek source ID, ek section aur ek chunk ID jodiye.',
  'A provenance schema, with some example citations.':
    'Ek provenance schema, kuch example citations ke saath.',
  'Context failure clinic':
    'Context failure clinic',
  'Memory is an architecture choice':
    'Memory ek architecture choice hai',
  'instructions … history … retrieved … tool output … remove first: …':
    'instructions … history … retrieved … tool output … sabse pehle hataayenge: …',
  'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.':
    'Zyadatar log history pehle hataate hain aur evidence sabse aakhir mein. Agar aapka order alag hai, toh likhiye kyun. Wahi reasoning design hai.',
  'Plan exactly what the model gets to see':
    'Tay kijiye ki model ko bilkul kya dikhna hai',
  'List everything that goes into one call to the context judge: the instructions, the worked examples, the sentence to check, any earlier messages and any reference list.':
    'Context judge ki ek call mein jo kuch bhi jaata hai uski list banaiye: instructions, worked examples, check karne wala sentence, pichhle messages aur koi reference list.',
  'Write the order in which things are removed when space runs out, and the rule behind it. The sentence to check is never removed.':
    'Woh order likhiye jisme jagah khatam hone par cheezein hataayi jaati hain, aur uske peeche ka rule bhi. Check karne wala sentence kabhi nahi hataya jaata.',
  'The reply shape, and the three kinds of stored data sorted.':
    'Reply ka shape, aur store kiye gaye data ke teen types, alag-alag kiye hue.',

  /* ---- ch11r: Production RAG: ingestion, access control and freshness ---- */
  'Production RAG: ingestion, access control and freshness':
    'Production RAG: ingestion, access control aur freshness',
  'You built retrieval by hand':
    'Aapne retrieval haath se banaya',
  'Chapter 12 measured the difference. Here it becomes a decision about ingestion and indexing.':
    'Chapter 12 ne is farq ko measure kiya. Yahan yeh ingestion aur indexing ka decision ban jaata hai.',
  'The answer key is your measuring tool':
    'Answer key aapka measuring tool hai',
  'Ingestion':
    'Ingestion',
  'Query rewriting':
    'Query rewriting',
  'Access-control-aware retrieval':
    'Access-control-aware retrieval',
  'Embedding versioning':
    'Embedding versioning',
  'Explain why the quality of ingestion sets an upper limit on the quality of retrieval.':
    'Samjha paana ki ingestion ki quality retrieval ki quality par upper limit kyun lagati hai.',
  'Say what must happen to your index when a document is deleted or a permission changes.':
    'Bata paana ki jab koi document delete ho ya koi permission badle toh aapke index ke saath kya hona chahiye.',
  'Note':
    'Note',
  'Parsing and document ingestion':
    'Parsing aur document ingestion',
  'An Ingestion Quality Report.':
    'Ek Ingestion Quality Report.',
  'Which information disappeared before retrieval even started?':
    'Retrieval shuru hone se pehle hi kaunsi information gayab ho gayi?',
  'Metadata and document identity':
    'Metadata aur document identity',
  'A Document Metadata Contract.':
    'Ek Document Metadata Contract.',
  'Chunking families':
    'Chunking families',
  'A Chunking Experiment, with before and after examples.':
    'Ek Chunking Experiment, before aur after examples ke saath.',
  'Sparse retrieval':
    'Sparse retrieval',
  'A Sparse Retrieval Benchmark.':
    'Ek Sparse Retrieval Benchmark.',
  'Where did exact matching win?':
    'Exact matching kahan jeeti?',
  'Dense, hybrid and vector search':
    'Dense, hybrid aur vector search',
  'Run the question set from Chapters 4 and 5 through lexical, dense and hybrid retrieval.':
    'Chapters 4 aur 5 ka question set lexical, dense aur hybrid retrieval se chalaiye.',
  'Reranking':
    'Reranking',
  'A Reranking Experiment Report.':
    'Ek Reranking Experiment Report.',
  'Query rewriting, parent-child retrieval and abstention':
    'Query rewriting, parent-child retrieval aur abstention',
  'Authorization, freshness and rollback':
    'Authorization, freshness aur rollback',
  'A production RAG architecture, plus a checklist for permissions, freshness and rollback.':
    'Ek production RAG architecture, saath mein permissions, freshness aur rollback ki ek checklist.',
  'Reranking has a cost':
    'Reranking ki ek cost hoti hai',
  'Four questions to ask about any retrieval product':
    'Kisi bhi retrieval product ke baare mein poochhne ke chaar sawaal',
  '<strong>Did we read the document correctly?</strong> This covers scans, tables, and content that a parser drops.':
    '<strong>Kya hamne document sahi padha?</strong> Isme scans, tables, aur woh content aata hai jo parser chhod deta hai.',
  '<strong>Is this user allowed to see it?</strong> This covers permissions, separate customers, and deleted documents.':
    '<strong>Kya is user ko yeh dekhne ki ijazat hai?</strong> Isme permissions, alag-alag customers, aur deleted documents aate hain.',
  '<strong>Did we find the right chunk?</strong> This covers keyword search, meaning search, query rewriting and reranking.':
    '<strong>Kya hamne sahi chunk dhoondha?</strong> Isme keyword search, meaning search, query rewriting aur reranking aate hain.',
  '<strong>Can we show where the answer came from?</strong> This covers chunk IDs, citations, and what happens when there is no answer.':
    '<strong>Kya hum dikha sakte hain ki jawaab kahan se aaya?</strong> Isme chunk IDs, citations, aur yeh aata hai ki jawaab na ho toh kya hota hai.',
  'At 10am … then … by …':
    'Subah 10 baje … phir … tak …',
  'Draw the gateway on one page':
    'Gateway ko ek page par banaiye',
  'Add who may do what: who can change a rule, who can read the logs, and who can switch the gateway off. Mark where the permission check happens.':
    'Yeh jodiye ki kaun kya kar sakta hai: rule kaun badal sakta hai, logs kaun padh sakta hai, aur gateway ko kaun band kar sakta hai. Mark kijiye ki permission check kahan hota hai.',
  'Write the “no answer” rule: what the gateway does when no rule applies, and what the user sees.':
    '“No answer” rule likhiye: jab koi rule apply na ho toh gateway kya karta hai, aur user ko kya dikhta hai.',
  'Write how the rules and the reference lists are versioned, and what happens to old decisions when a rule changes.':
    'Likhiye ki rules aur reference lists ka versioning kaise hota hai, aur jab koi rule badalta hai toh purane decisions ke saath kya hota hai.',
  'Write the rollback: what you do when a new rule version makes things worse.':
    'Rollback likhiye: jab rule ka naya version cheezein aur kharab kar de, toh aap kya karte hain.',
  'The “no rule applies” behaviour, the versioning plan and the rollback.':
    '“Koi rule apply nahi hota” wala behaviour, versioning ka plan aur rollback.',
  'The page really fits on one page. If it does not, you have not made enough decisions yet.':
    'Page sach mein ek hi page par aata hai. Agar nahi aata, toh aapne abhi kaafi decisions nahi liye hain.',

  /* ---- ch12t: Tool calling and workflows: contracts before agents ---- */
  'Tool calling and workflows: contracts before agents':
    'Tool calling aur workflows: agents se pehle contracts',
  'The model invents when it has no evidence':
    'Evidence na ho toh model cheezein invent kar deta hai',
  'Tool contract':
    'Tool contract',
  'Deterministic workflow':
    'Deterministic workflow',
  'Idempotency':
    'Idempotency',
  'Confirmation step':
    'Confirmation step',
  'Write a tool contract that a reviewer could sign off.':
    'Aisa tool contract likh paana jise koi reviewer sign off kar sake.',
  'Say when a fixed workflow is better than letting the model decide.':
    'Bata paana ki fixed workflow kab model ko decide karne dene se behtar hai.',
  'Name the checks that must happen before an important action runs.':
    'Woh checks bata paana jo kisi zaroori action ke chalne se pehle hone chahiye.',
  'Try a missing ID, an ID in the wrong format, and an invoice the user is not allowed to see.':
    'Ek missing ID try kijiye, galat format wali ID, aur aisa invoice jo user ko dekhne ki ijaazat nahi hai.',
  'Could a new engineer read it and know exactly what the tool can and cannot do?':
    'Kya ek naya engineer ise padhkar exactly jaan sakta hai ki tool kya kar sakta hai aur kya nahi?',
  'Add tools with names that are almost the same, and requests that could mean more than one thing.':
    'Aise tools jodiye jinke naam lagbhag ek jaise hain, aur aise requests jinke ek se zyada matlab ho sakte hain.',
  'Make the tool return a badly formed result, and watch what the next step does with it.':
    'Tool se ek galat bana hua result lautvaiye, aur dekhiye agla step usse kya karta hai.',
  'Run the same action twice, and check that only one real effect happens.':
    'Wahi action do baar chalaiye, aur check kijiye ki sirf ek asli asar hua.',
  'Build the flow draft, review, approve, execute.':
    'Yeh flow banaiye: draft, review, approve, execute.',
  'Change the request after it was approved, and check that running it is blocked.':
    'Approval ke baad request badal dijiye, aur check kijiye ki use chalna block ho jaata hai.',
  'What exactly did the person approve?':
    'Insaan ne exactly kya approve kiya?',
  'Build one simple workflow where steps run in order, and one that routes each request to the right path.':
    'Ek simple workflow banaiye jisme steps order mein chalte hain, aur ek aisa jo har request ko sahi raaste par bhejta hai.',
  'Prefer a fixed workflow':
    'Fixed workflow ko pehle chuniye',
  'The inputs are tightly limited. Use a fixed list of choices instead of free text wherever you can.':
    'Inputs tight limit mein hain. Jahan ho sake, free text ki jagah choices ki ek fixed list rakhiye.',
  'Anything the tool changes is stated clearly.':
    'Tool jo bhi badalta hai, woh saaf likha hua hai.',
  'You have thought about idempotency, which means what happens if the call runs twice.':
    'Aapne idempotency ke baare mein socha hai, matlab yeh ki call do baar chale toh kya hoga.',
  'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.':
    'Un tools ki list banaiye jo aap ek support assistant ko denge. Phir har woh tool kaat dijiye jahan ek fixed rule 95% se zyada baar sahi chunega.',
  'Tools: … Crossed out: … Left: …':
    'Tools: … Kaate: … Bache: …',
  'Build a workflow that proposes changes but cannot make risky ones alone':
    'Aisa workflow banaiye jo changes propose kare lekin risky changes akele na kar sake',
  'Decide which actions are risky enough to need approval. For example, letting any ID number through, or deleting a stored copy, always needs approval.':
    'Tay kijiye ki kaun si actions itni risky hain ki approval chahiye. Jaise, koi bhi ID number guzarne dena, ya stored copy delete karna, hamesha approval maangta hai.',
  'Run them. Count how often the model proposes the correct action when it is not allowed to act on its own. Also count how many risky actions would have been applied without approval. That number must be zero.':
    'Inhe run kijiye. Gin-iye ki jab model ko akele act karne ki ijaazat nahi hai, tab woh kitni baar sahi action propose karta hai. Yeh bhi gin-iye ki kitni risky actions bina approval ke apply ho jaati. Woh number zero hona chahiye.',
  'Write the checks that must happen before an important action runs.':
    'Woh checks likhiye jo kisi zaroori action ke chalne se pehle hone chahiye.',
  'A list of the actions that need approval.':
    'Un actions ki list jinke liye approval chahiye.',
  'Two numbers from twenty messages: how often the proposal was right, and how many risky actions ran without approval (zero).':
    'Twenty messages se do numbers: proposal kitni baar sahi tha, aur kitni risky actions bina approval ke chali (zero).',

  /* ---- ch13a: Agents: loops, stopping conditions and control ---- */
  'Agents: loops, stopping conditions and control':
    'Agents: loops, stopping conditions aur control',
  'Tool contracts and fixed workflows':
    'Tool contracts aur fixed workflows',
  'Agent':
    'Agent',
  'Agent loop':
    'Agent loop',
  'Step budget':
    'Step budget',
  'Draw the agent loop with its stopping conditions and error paths.':
    'Agent loop ko uski stopping conditions aur error paths ke saath draw kar paana.',
  'Explain why most agent failures are control problems, not intelligence problems.':
    'Samjha paana ki zyadatar agent failures control ki problems kyun hain, intelligence ki nahi.',
  'Say when to add a second agent, and when not to.':
    'Bata paana ki doosra agent kab jodna hai, aur kab nahi.',
  'Understand the whole cycle: goal, then the model’s decision, then a tool call, then what it sees back, then updated context, then stop or continue.':
    'Poora cycle samajhiye: goal, phir model ka decision, phir tool call, phir jo wapas dikhta hai, phir updated context, phir rukna ya aage badhna.',
  'An agent is a loop, and the loop itself is the design of the system.':
    'Agent ek loop hai, aur woh loop hi system ka design hai.',
  'Build a toy loop with three steps and a clear record of its state.':
    'Teen steps ka ek toy loop banaiye, jisme state ka saaf record ho.',
  'Where can the loop stop safely?':
    'Loop safely kahan ruk sakta hai?',
  'If you cannot draw the loop, you cannot defend the design.':
    'Agar aap loop draw nahi kar sakte, toh aap design ka bachav nahi kar sakte.',
  'Compare one fixed workflow against the agent on the same tasks.':
    'Ek fixed workflow ko agent ke saamne rakhkar, wahi tasks par compare kijiye.',
  'Include tasks that need no tool at all, and tasks where it is unclear which tool to use.':
    'Aise tasks shaamil kijiye jinmein koi tool chahiye hi nahi, aur aise jinmein saaf nahi ki kaun sa tool use karna hai.',
  'A workflow that passes the test may be better than an agent that only looks impressive.':
    'Jo workflow test pass kar leta hai, woh us agent se behtar ho sakta hai jo sirf impressive dikhta hai.',
  'Put limits on the number of steps, the time, the cost and the kinds of action that are unsafe.':
    'Steps ki ginti, time, cost aur unsafe actions ke kinds par limits lagaiye.',
  'Can you prove that the system ends, even when things fail?':
    'Kya aap saabit kar sakte hain ki system khatam hota hai, chahe cheezein fail ho jayein?',
  'Mark each tool or action as read-only, a write that can be reversed, or a write that cannot be reversed.':
    'Har tool ya action ko read-only, palti ja sakne wali write, ya na palti ja sakne wali write ke taur par mark kijiye.',
  'Require approval for the last group.':
    'Aakhri group ke liye approval zaroori kijiye.',
  'Which actions are never allowed to run on their own?':
    'Kaun si actions ko kabhi apne aap chalne ki ijaazat nahi hai?',
  'Solve a task with one agent first. Then build a version where the work is split between two roles.':
    'Pehle ek task ek agent se solve kijiye. Phir ek aisa version banaiye jisme kaam do roles mein bata ho.',
  'Would you still choose an agent if nobody called it “agentic AI”?':
    'Agar koi use “agentic AI” na kehta, toh kya aap phir bhi agent chunte?',
  'Agent failures are control failures':
    'Agent failures asal mein control failures hain',
  'Pattern':
    'Pattern',
  'Use it when':
    'Kab use karein',
  'Main risk':
    'Main risk',
  'The steps are known':
    'Steps pehle se pata hain',
  'The router picks wrong':
    'Router galat raasta chun leta hai',
  'A specialist should take over':
    'Koi specialist ko kaam sambhalna chahiye',
  'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.':
    'Apne Chapter 25 workflow ke twenty tasks agent se chalaiye. Gin-iye ki usne kitne sahi kiye, kitni tool calls ki, aur cost kitna aaya.',
  'Correct: … Tool calls: … Cost: … Compared with the workflow: …':
    'Sahi: … Tool calls: … Cost: … Workflow ke saath compare karke: …',
  'Test a fixed workflow against an agent':
    'Ek fixed workflow ko agent ke saamne test kijiye',
  'Give the agent exactly two tools: the pattern checker and the model-based finder. Write an explicit list of what it may use, and nothing else.':
    'Agent ko exactly do tools dijiye: pattern checker aur model-based finder. Ek saaf list likhiye ki woh kya use kar sakta hai, aur kuch nahi.',
  'Set its limits: the most steps it may take, a time limit, and an exit for “cannot decide” that sends the sentence to a person.':
    'Uski limits set kijiye: zyada se zyada kitne steps le sakta hai, ek time limit, aur “cannot decide” ke liye ek exit jo sentence ko kisi insaan ke paas bhej de.',
  'Run the same twenty sentences through the agent and through the fixed workflow from Chapter 25.':
    'Wahi twenty sentences agent se chalaiye aur Chapter 25 ke fixed workflow se bhi.',
  'An agent with two tools and written limits.':
    'Do tools aur likhi hui limits wala ek agent.',
  'The same twenty sentences run through both systems.':
    'Wahi twenty sentences dono systems se chalaye hue.',
  'Four numbers for each system: tool choice, calls, time and cost.':
    'Har system ke liye chaar numbers: tool choice, calls, time aur cost.',
  'A recommendation that names the number that decided it.':
    'Ek recommendation jo us number ka naam leti hai jisne decide kiya.',

  /* ---- ch14p: MCP and interoperability: standard connections to tools ---- */
  'MCP and interoperability: standard connections to tools':
    'MCP aur interoperability: tools se jodne ke standard connections',
  'MCP':
    'MCP',
  'Trust boundary':
    'Trust boundary',
  'Least privilege':
    'Least privilege',
  'Capability negotiation':
    'Capability negotiation',
  'MCP mental model':
    'MCP mental model',
  'An MCP Trust-Boundary Diagram.':
    'Ek MCP Trust-Boundary Diagram.',
  'Expose a tiny capability':
    'Ek chhoti si capability expose kijiye',
  'Consent and authorization':
    'Consent aur authorization',
  'MCP security and prompt injection':
    'MCP security aur prompt injection',
  'An MCP Security Test Sheet.':
    'Ek MCP Security Test Sheet.',
  'Agent-to-agent interoperability':
    'Agent-to-agent interoperability',
  'An Agent Interoperability Trust Model.':
    'Ek Agent Interoperability Trust Model.',
  'A standard does not make a tool safe':
    'Standard se tool safe nahi ban jaata',
  'Tool — class — why':
    'Tool — class — kyun',
  'Write the tool access policy':
    'Tool access policy likhiye',
  'List every tool or action the gateway or the browser extension would need: read a form field, read a request body, write to a log, call an outside model, replace text, block a request, send an alert.':
    'Har woh tool ya action list kijiye jo gateway ya browser extension ko chahiye hogi: form field padhna, request body padhna, log mein likhna, bahar ke model ko call karna, text replace karna, request block karna, alert bhejna.',
  'A table of roles against classes.':
    'Roles aur classes ki ek table.',

  /* ---- ch15mm: Multimodal AI: documents, images and voice ---- */
  'Multimodal AI: documents, images and voice':
    'Multimodal AI: documents, images aur voice',
  'The answer key has to come from somewhere':
    'Answer key kahin se toh aani hi chahiye',
  'OCR':
    'OCR',
  'Diarization':
    'Diarization',
  'Document understanding':
    'Document understanding',
  'Media provenance':
    'Media provenance',
  'Use a scanned page and a page with a lot of tables.':
    'Ek scanned page aur ek aisa page use kijiye jisme bahut saari tables hon.',
  'A Document Understanding Gap Report.':
    'Ek Document Understanding Gap Report.',
  'Vision and image evidence':
    'Vision aur image evidence',
  'A Vision Evaluation Set.':
    'Ek Vision Evaluation Set.',
  'Audio and speech pipelines':
    'Audio aur speech pipelines',
  'Test accents, people talking over each other, names, and content that mixes languages.':
    'Accents, ek doosre par bolte logon, names, aur mili hui languages wale content ko test kijiye.',
  'Streaming and latency':
    'Streaming aur latency',
  'A Latency Budget for the Multimodal Flow.':
    'Multimodal Flow ke liye ek Latency Budget.',
  'Multimodal RAG evaluation':
    'Multimodal RAG evaluation',
  'Add a poor scan, noisy audio and a case in more than one language.':
    'Ek kharab scan, shor wala audio, aur ek aisa case jisme ek se zyada languages hon, jodiye.',
  'Voice is a pipeline':
    'Voice ek pipeline hai',
  'Specify how the tool handles images and voice':
    'Tool images aur voice ko kaise handle karta hai, yeh specify kijiye',

  /* ---- ch16e: Evaluation engineering: test sets and release gates ---- */
  'Evaluation engineering: test sets and release gates':
    'Evaluation engineering: test sets aur release gates',
  'Before you improve anything, write twenty tests. Include normal questions, reworded ones, unclear ones, ones with no answer, other languages, tricky attacks and cases where the tool must be used.':
    'Kuch bhi improve karne se pehle 20 tests likhiye. Usmein normal sawaal rakhiye, doosre tareeke se pooche hue sawaal, unclear sawaal, jinka koi jawaab nahi hai woh sawaal, doosri languages, tricky attacks, aur woh cases jahan tool ka use karna padta hai.',
  'Answer keys, recall and precision':
    'Answer keys, recall aur precision',
  'Golden set':
    'Golden set',
  'LLM-as-judge':
    'LLM-as-judge',
  'Regression test':
    'Regression test',
  'Release gate':
    'Release gate',
  'The seven units below take you from the test set to the final release decision. Each one builds on the one before.':
    'Neeche ke saat units aapko test set se final release decision tak le jaate hain. Har unit pichhle unit par bana hai.',
  'Golden datasets':
    'Golden datasets',
  'Golden Dataset v1.0.':
    'Golden Dataset v1.0.',
  'Error taxonomy':
    'Error taxonomy',
  'Retrieval metrics':
    'Retrieval metrics',
  'Compare what you get at k=1, 3, 5 and 10.':
    'k=1, 3, 5 aur 10 par kya milta hai, compare kijiye.',
  'Retrieval Evaluation Notebook.':
    'Retrieval Evaluation Notebook.',
  'What exactly counts as relevant?':
    'Relevant ka bilkul sahi matlab kya hai?',
  'Never report a retrieval metric without saying how you decided what is relevant.':
    'Retrieval metric tab tak report mat kijiye jab tak aap yeh na bata dein ki relevant kaise tay kiya.',
  'Generation and task success':
    'Generation aur task success',
  'Judge Validation Report.':
    'Judge Validation Report.',
  'Where does the judge disagree with people, and why?':
    'Judge insaanon se kahan alag jaata hai, aur kyun?',
  'Regression and CI gates':
    'Regression aur CI gates',
  'Automated Evaluation Suite plus Release Gate.':
    'Automated Evaluation Suite aur Release Gate.',
  'What exact condition blocks a release?':
    'Kaun si exact condition release rokti hai?',
  'Evaluation release decision':
    'Evaluation release decision',
  'Release Decision Record.':
    'Release Decision Record.',
  'Measure at several levels':
    'Kai levels par measure kijiye',
  'Layer':
    'Layer',
  'The release question it answers':
    'Release ka woh sawaal jiska yeh jawaab deta hai',
  'Retrieval':
    'Retrieval',
  'Recall@k, Precision@k':
    'Recall@k, Precision@k',
  'Did we fetch the right evidence?':
    'Kya humne sahi evidence nikala?',
  'Generation':
    'Generation',
  'Groundedness, task success':
    'Groundedness, task success',
  'Did the answer use the evidence correctly?':
    'Kya jawaab ne evidence ko sahi tareeke se use kiya?',
  'Tool use':
    'Tool use',
  'Tool-selection accuracy':
    'Tool-selection accuracy',
  'Operations':
    'Operations',
  'p95 latency, cost per task':
    'p95 latency, cost per task',
  'Can we afford to run it?':
    'Kya hum ise chalane ka kharcha utha sakte hain?',
  'Safety':
    'Safety',
  'Attack success rate':
    'Attack success rate',
  'You will meet many evaluation products. Each one is selling an answer to one of three questions.':
    'Aapko bahut saare evaluation products milenge. Har ek teen sawaalon mein se kisi ek ka jawaab bech raha hota hai.',
  'Now try writing that third answer yourself.':
    'Ab woh teesra jawaab aap khud likhkar dekhiye.',
  'We are not shipping because …':
    'Hum ship nahi kar rahe kyunki …',
  'Build the release gate':
    'Release gate banaiye',
  'Scores at three levels.':
    'Teen levels par scores.',
  'A one-command run that prints PASS or FAIL, and proof that it fails a broken change.':
    'Ek command wala run jo PASS ya FAIL print kare, aur saboot ki woh kharab change ko fail karta hai.',

  /* ---- ch17o: Observability and LLMOps: traces, cost and rollback ---- */
  'Observability and LLMOps: traces, cost and rollback':
    'Observability aur LLMOps: traces, cost aur rollback',
  'Trace':
    'Trace',
  'Telemetry':
    'Telemetry',
  'Canary release':
    'Canary release',
  'Drift':
    'Drift',
  'Trace one request':
    'Trace one request',
  'Trace Schema v1.0.':
    'Trace Schema v1.0.',
  'Latency and throughput':
    'Latency aur throughput',
  'Latency Budget plus a p50/p95 report.':
    'Latency Budget aur ek p50/p95 report.',
  'Token and cost telemetry':
    'Token aur cost telemetry',
  'Unit Economics Model v1.0.':
    'Unit Economics Model v1.0.',
  'Drift and feedback':
    'Drift aur feedback',
  'Drift/Feedback Report.':
    'Drift/Feedback Report.',
  'Versioning and rollback':
    'Versioning aur rollback',
  'Version Matrix plus Rollback Procedure.':
    'Version Matrix aur Rollback Procedure.',
  'Can you say exactly what changed?':
    'Kya aap bilkul bata sakte hain ki kya badla?',
  'Production dashboard':
    'Production dashboard',
  'Six-Panel Observability Specification.':
    'Six-Panel Observability Specification.',
  'Which alerts should wake up a person, and which should only be watched?':
    'Kaun se alerts ko kisi insaan ko jagana chahiye, aur kaun se sirf watch hone chahiye?',
  'Cost is an architecture metric':
    'Cost ek architecture metric hai',
  '1 … 2 … 3 …':
    '1 … 2 … 3 …',

  /* ---- ch18s: Security and governance: controls around an untrusted model ---- */
  'Security and governance: controls around an untrusted model':
    'Security aur governance: ek untrusted model ke aas-paas controls',
  'Prompt injection':
    'Prompt injection',
  'Indirect injection':
    'Indirect injection',
  'Excessive agency':
    'Excessive agency',
  'Risk register':
    'Risk register',
  'Prompt Injection Test Report.':
    'Prompt Injection Test Report.',
  'Sensitive information disclosure':
    'Sensitive information disclosure',
  'Data Leakage Test Matrix.':
    'Data Leakage Test Matrix.',
  'Improper output handling':
    'Improper output handling',
  'Output Validation Checklist plus tests.':
    'Output Validation Checklist aur tests.',
  'Agency Permission Matrix.':
    'Agency Permission Matrix.',
  'What is the worst damage if the model is wrong?':
    'Agar model galat ho toh sabse bada nuksaan kya hoga?',
  'Retrieval authorization':
    'Retrieval authorization',
  'Create two users and two groups of documents.':
    'Do users aur documents ke do groups banaiye.',
  'ACL Retrieval Test Report.':
    'ACL Retrieval Test Report.',
  'Audit logging':
    'Audit logging',
  'Audit Log Schema plus a sample trail.':
    'Audit Log Schema aur ek sample trail.',
  'Governance and risk register':
    'Governance aur risk register',
  'AI Risk Register.':
    'AI Risk Register.',
  'Which risks are still left after the controls?':
    'Controls ke baad kaun se risks abhi bhi bache hain?',
  'Security release gate':
    'Security release gate',
  'Security Go/No-Go Checklist.':
    'Security Go/No-Go Checklist.',
  'Least privilege for agents':
    'Agents ke liye least privilege',
  'Risk':
    'Risk',
  'Content separation, tool allowlist, confirmation':
    'Content separation, tool allowlist, confirmation',
  'Red-team test results':
    'Red-team test results',
  'Data leakage':
    'Data leakage',
  'Access-aware retrieval, redaction, log controls':
    'Access-aware retrieval, redaction, log controls',
  'Access tests and trace samples':
    'Access tests aur trace samples',
  'Least privilege plus approval gates':
    'Least privilege aur approval gates',
  'Tool policy and approval logs':
    'Tool policy aur approval logs',
  'Model drift or deprecation':
    'Model drift ya deprecation',
  'Versioning plus a regression suite':
    'Versioning aur ek regression suite',
  'Release and evaluation report':
    'Release aur evaluation report',
  'Unsafe output':
    'Unsafe output',
  'Policy filter and human escalation':
    'Policy filter aur human escalation',
  'Safety test set results':
    'Safety test set results',
  'Test every control':
    'Har control ko test kijiye',
  'Try this with something from your own workplace.':
    'Yeh apne hi workplace ki kisi cheez ke saath try kijiye.',
  'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.':
    'Ek aisa control chuniye jo aapka organisation kehta hai ki uske paas hai. Likhiye ki kaun sa evidence saabit karega ki woh kaam karta hai, aur woh evidence hai ya nahi.',
  'The control … the evidence would be … it exists / does not exist because …':
    'Control … evidence yeh hoga … woh hai / nahi hai kyunki …',
  'A test for every control, with the results of those you ran.':
    'Har control ke liye ek test, aur jo tests aapne chalaye unke results.',

  /* ---- ch19pm: AI product management: specs for a probabilistic system ---- */
  'AI product management: specs for a probabilistic system':
    'AI product management: ek probabilistic system ke liye specs',
  'Failure costs differ by use case':
    'Failure ki cost har use case mein alag hoti hai',
  'What the user sees when it is wrong':
    'Galat hone par user ko kya dikhta hai',
  'AI acceptance criterion':
    'AI acceptance criterion',
  'Product metric':
    'Product metric',
  'Rollback trigger':
    'Rollback trigger',
  'Non-goal':
    'Non-goal',
  'Write an acceptance criterion as a rate with a tolerance, not as a promise.':
    'Acceptance criterion ko vaade ki tarah nahi, tolerance wale rate ki tarah likh paana.',
  'AI problem framing':
    'AI problem framing',
  'Problem Framing One-Pager.':
    'Problem Framing One-Pager.',
  'Why AI, and not ordinary software?':
    'AI hi kyun, aam software kyun nahi?',
  'AI acceptance criteria':
    'AI acceptance criteria',
  'AI Acceptance Criteria Sheet.':
    'AI Acceptance Criteria Sheet.',
  'Failure-first UX':
    'Failure-first UX',
  'Failure-First UX Flow.':
    'Failure-First UX Flow.',
  'What does the user do when the AI cannot answer?':
    'Jab AI jawaab nahi de paata, tab user kya karta hai?',
  'Human-in-the-loop UX':
    'Human-in-the-loop UX',
  'HITL Decision Map.':
    'HITL Decision Map.',
  'What does the human add that nothing else can?':
    'Insaan aisa kya deta hai jo aur koi nahi de sakta?',
  'Metrics and experimentation':
    'Metrics aur experimentation',
  'Metric Map plus Experiment Plan.':
    'Metric Map aur Experiment Plan.',
  'Unit economics':
    'Unit economics',
  'AI Unit Economics Model.':
    'AI Unit Economics Model.',
  'What happens at 10× volume?':
    '10× volume par kya hota hai?',
  'AI PRD and release plan':
    'AI PRD aur release plan',
  'AI PRD plus Release Gate plus Metric Map.':
    'AI PRD, Release Gate aur Metric Map.',
  'Can the PRD answer “what happens when it is wrong?”':
    'Kya PRD “jab yeh galat ho toh kya hota hai?” ka jawaab de sakta hai?',
  'A spec outline':
    'Spec ka outline',
  'How it fails, and what a person does when it does.':
    'Yeh kaise fail hota hai, aur jab hota hai toh insaan kya karta hai.',
  'The test set, and the scores that count as good enough.':
    'Test set, aur woh scores jo kaafi achhe maane jaate hain.',
  'Whose name is on it.':
    'Isse kiska naam juda hai.',
  'Keep metric types separate':
    'Metric types ko alag rakhiye',
  'The business question':
    'Business ka sawaal',
  'Build or buy':
    'Build ya buy',
  'Will it create enough value?':
    'Kya yeh kaafi value banayega?',
  'Ship or hold':
    'Ship karein ya rokein',
  'Is failure cheap enough?':
    'Kya failure ki cost kaafi kam hai?',
  'Model A or B':
    'Model A ya B',
  'Human in the loop':
    'Human in the loop',
  'Now try writing one of the hardest lines in the spec.':
    'Ab spec ki sabse mushkil lines mein se ek likhkar dekhiye.',
  'Roll back if …':
    'Roll back kijiye agar …',
  'List the failures you have really seen in this course.':
    'Un failures ki list banaiye jo aapne is course mein asal mein dekhe.',
  'Design the three screens the tool needs: sure, unsure and error.':
    'Tool ko jo teen screens chahiye woh design kijiye: sure, unsure aur error.',
  'What is out of scope, written down.':
    'Kya scope ke bahar hai, likha hua.',
  'A rollback trigger that someone could act on without asking you.':
    'Ek rollback trigger jis par koi aapse pooche bina action le sake.',

  /* ---- ch20d: Production architecture, delivery and vendor strategy ---- */
  'Production architecture, delivery and vendor strategy':
    'Production architecture, delivery aur vendor strategy',
  'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.':
    'Teen shocks mein kya hota hai, yeh nikaliye: provider band ho jaaye, traffic 10 guna ho jaaye, aur token ka price double ho jaaye.',
  'You built it in Chapter 29.':
    'Aapne ise Chapter 29 mein banaya tha.',
  'Production delta':
    'Production delta',
  'Latency budget':
    'Latency budget',
  'Architecture decision record':
    'Architecture decision record',
  'Exit cost':
    'Exit cost',
  'Write the production delta list for your own prototype.':
    'Apne prototype ke liye production delta ki list likhiye.',
  'A production delta checklist.':
    'Ek production delta checklist.',
  'What would stop you from going live tomorrow?':
    'Kal live jaane se aapko kya rokega?',
  'Reliability and resilience':
    'Reliability aur resilience',
  'A table of failures and fallbacks.':
    'Failures aur fallbacks ki ek table.',
  'Scalability and queues':
    'Scalability aur queues',
  'Imagine ten times the work, and find the part that gives way first.':
    '10 guna kaam ka andaaza lagaiye, aur woh hissa dhoondhiye jo sabse pehle jawaab de dega.',
  'Which part has to grow first, and why?':
    'Kaun sa hissa sabse pehle badhana padega, aur kyun?',
  'Deployment and environments':
    'Deployment aur environments',
  'Write a deployment checklist, and the command or steps to roll back.':
    'Ek deployment checklist likhiye, aur rollback karne ka command ya steps.',
  'A plan for your environments, and a rollout checklist.':
    'Aapke environments ka ek plan, aur ek rollout checklist.',
  'What can change without anyone releasing new code?':
    'Bina naya code release kiye kya-kya badal sakta hai?',
  'CI/CD and AI regression':
    'CI/CD aur AI regression',
  'Architecture Decision Records':
    'Architecture Decision Records',
  'A set of architecture decision records.':
    'Architecture decision records ka ek set.',
  'Vendor and TCO strategy':
    'Vendor aur TCO strategy',
  'Choosing a vendor means balancing several goals at once, and it shapes your architecture.':
    'Vendor chunna ek saath kai goals ko balance karna hai, aur yeh aapke architecture ko bhi shape karta hai.',
  'A scorecard for models and vendors, with an exit plan.':
    'Models aur vendors ka ek scorecard, exit plan ke saath.',
  'What would it cost you to switch?':
    'Switch karne mein aapko kitna cost aayega?',
  'Technical decision pack':
    'Technical decision pack',
  'Cover the problem, the baseline, the architecture, the alternatives, the evaluation, the security, the cost, the rollout and the risks.':
    'Problem, baseline, architecture, alternatives, evaluation, security, cost, rollout aur risks, sab cover kijiye.',
  'Add one architecture diagram and one table of decisions.':
    'Ek architecture diagram aur decisions ki ek table jodiye.',
  'Ask a reviewer to challenge three of your assumptions.':
    'Kisi reviewer se kahiye ki woh aapki teen assumptions ko challenge kare.',
  'A ten-slide technical decision pack.':
    '10 slides ka ek technical decision pack.',
  'Can you defend every major box and arrow?':
    'Kya aap har bade box aur arrow ko defend kar sakte hain?',
  'Response time is a budget':
    'Response time ek budget hai',
  'The question to ask about it':
    'Us ke baare mein poochne wala sawaal',
  'Client and UI':
    'Client aur UI',
  'What the user sees and does':
    'User kya dekhta aur karta hai',
  'Orchestrator':
    'Orchestrator',
  'Model layer':
    'Model layer',
  'Reasoning and writing the answer':
    'Reasoning aur jawaab likhna',
  'Knowledge and tools':
    'Knowledge aur tools',
  'The data it reads and the actions it takes':
    'Jo data woh padhta hai aur jo actions woh leta hai',
  'Evaluation':
    'Evaluation',
  'What blocks a release?':
    'Release ko kya block karta hai?',
  'Observability':
    'Observability',
  'Platform':
    'Platform',
  'Choosing a vendor':
    'Vendor chunna',
  '<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.':
    '<strong>Likh kar rakhiye ki aapne cheezein kyun chunin</strong>, taaki chhe mahine baad koi decision dobara na khole.',
  '<strong>Be able to switch it off</strong> quickly, without a meeting.':
    '<strong>Use jaldi band kar paana</strong>, bina kisi meeting ke.',
  '<strong>Know what you would do</strong> if the provider changed its terms tomorrow.':
    '<strong>Pehle se jaaniye ki aap kya karenge</strong> agar provider kal apni terms badal de.',
  'The last habit is easy to say and hard to do. So try it now, on paper.':
    'Aakhri aadat kehna aasaan hai aur karna mushkil. Toh ab ise kaagaz par try kijiye.',
  'Your provider doubles its price and gives you ninety days’ notice. Write what you would do in the first week.':
    'Aapka provider apna price double kar deta hai aur aapko 90 din ka notice deta hai. Pehle hafte mein aap kya karenge, woh likhiye.',
  'Day 1 … by the end of the week …':
    'Day 1 … hafte ke end tak …',
  'Next, Chapter 34 brings the whole system together in one capstone project.':
    'Aage, Chapter 34 poore system ko ek capstone project mein jodta hai.',
  'Make a ten-slide decision pack':
    '10 slides ka ek decision pack banaiye',
  'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.':
    '10 slides banaiye: (1) problem aur use kya beat karna hai; (2) ek slide par architecture; (3) do alternatives jo aapne reject kiye aur kyun; (4) test results, test set ka naam dekar; (5) security aur kya risky bacha hai; (6) cost per message aur expected volume par cost; (7) rollout plan aur rollback trigger; (8) teen providers, 9 weighted criteria par scored; (9) decision aur uska owner kaun hai; (10) jo aapne solve nahi kiya.',
  'Ten slides in the order above.':
    'Upar ke order mein 10 slides.',

  /* ---- ch21cap: Capstone: discover, build, break, measure, ship and defend a system ---- */
  'Capstone: discover, build, break, measure, ship and defend a system':
    'Capstone: ek system ko discover, build, break, measure, ship aur defend kijiye',
  'Everything in Part V':
    'Part V ki har cheez',
  'They help, but you can start without them. If you have them, the discovery and design stages reuse them.':
    'Yeh madad karte hain, lekin inke bina bhi shuru kar sakte hain. Agar aapke paas hain, toh discovery aur design stages inhe dobara use karte hain.',
  'Findings document':
    'Findings document',
  'Failure class':
    'Failure class',
  'Residual risk':
    'Residual risk',
  'Evidence pack':
    'Evidence pack',
  'Kill criteria':
    'Kill criteria',
  'The brief':
    'Brief',
  'The eleven stages':
    'Gyarah stages',
  'Stage':
    'Stage',
  'Required evidence':
    'Zaroori evidence',
  '34.1 Discover':
    '34.1 Discover',
  '34.2 Define':
    '34.2 Define',
  '34.3 Design':
    '34.3 Design',
  '34.4 Build':
    '34.4 Build',
  '34.5 Evaluate':
    '34.5 Evaluate',
  '34.6 Break':
    '34.6 Break',
  'At least ten deliberate failure tests, saved before you fix anything.':
    'Kam se kam 10 jaanbujhkar kiye gaye failure tests, kuch bhi fix karne se pehle save kiye hue.',
  '34.7 Observe':
    '34.7 Observe',
  '34.8 Ship':
    '34.8 Ship',
  '34.9 Measure':
    '34.9 Measure',
  '34.10 Iterate':
    '34.10 Iterate',
  '34.11 Defend':
    '34.11 Defend',
  'Discover: a real problem with reachable users':
    'Discover: ek asli problem, aise users ke saath jinse aap mil sakein',
  'The best capstones come from a job you have done, a team you know or a community you belong to. Look for a problem that comes up often, costs real time or money, and is solved badly today.':
    'Sabse achhe capstones aise kaam se aate hain jo aapne kiya hai, aisi team se jise aap jaante hain, ya aisi community se jiska aap hissa hain. Aisi problem dhoondhiye jo aksar aati hai, jisme asli time ya paise lagte hain, aur jise aaj kharab tareeke se solve kiya jaata hai.',
  'A problem brief backed by evidence, with a jobs-to-be-done statement.':
    'Evidence par based ek problem brief, jobs-to-be-done statement ke saath.',
  'If nothing you believed changed after five interviews, you may have heard only what you expected to hear.':
    'Agar 5 interviews ke baad aapka kuch bhi believe nahi badla, toh ho sakta hai aapne sirf wahi suna jo aap sunna chahte the.',
  'Define the problem and PRD':
    'Problem aur PRD define kijiye',
  'Design the product and the system together':
    'Product aur system ko saath mein design kijiye',
  'Put the product decision and the technical decision on one page, because each one limits the other.':
    'Product decision aur technical decision ko ek hi page par rakhiye, kyunki har ek doosre ko limit karta hai.',
  'Whether a user needs an answer in two seconds or by Monday decides the architecture. And whether the architecture can hit a target decides what you can promise.':
    'User ko jawaab do second mein chahiye ya Monday tak, yeh architecture tay karta hai. Aur architecture ek target hit kar sakta hai ya nahi, yeh tay karta hai ki aap kya promise kar sakte hain.',
  'Find one line in your design that you chose because it was interesting, not because it was needed, and cut it.':
    'Apne design ki ek aisi line dhoondhiye jo aapne isliye chuni kyunki woh dilchasp thi, isliye nahi ki zaroori thi, aur use kaat dijiye.',
  'A one-page product and system design, plus a stakeholder map.':
    'Ek-page ka product aur system design, saath mein ek stakeholder map.',
  'Build the vertical slice':
    'Vertical slice banaiye',
  'Build the smallest system that works from start to finish, before you add anything clever.':
    'Kuch bhi clever jodne se pehle, sabse chhota system banaiye jo shuru se aakhir tak chalta ho.',
  'A running repository, architecture v1 and a threat model.':
    'Ek chalti hui repository, architecture v1 aur ek threat model.',
  'Add evaluation and observability':
    'Evaluation aur observability jodiye',
  'Change the model, the prompt or the index, and reproduce the drop in quality.':
    'Model, prompt ya index badaliye, aur quality mein aayi giraawat ko reproduce kijiye.',
  'Can you explain why the latest version is better?':
    'Kya aap bata sakte hain ki latest version behtar kyun hai?',
  'This is where the project turns into engineering evidence.':
    'Yahin project engineering evidence mein badal jaata hai.',
  'Break it deliberately':
    'Ise jaanbujhkar todiye',
  'Which three failures surprised you?':
    'Kaun se teen failures ne aapko hairaan kiya?',
  'Observe: prove it is inspectable before real users touch it':
    'Observe: asli users ke haath lagane se pehle sabit kijiye ki system ko andar se dekha ja sakta hai',
  'Prove that you can see inside the system, and that its risk has limits, before you ship it to a real user.':
    'Sabit kijiye ki aap system ke andar dekh sakte hain, aur uska risk limit mein hai, kisi asli user tak ship karne se pehle.',
  'Connect a six-panel dashboard to the real traces from your evaluation and break stages. The panels are quality, safety, latency, cost, traffic and failures.':
    '6 panels wali ek dashboard ko apne evaluation aur break stages ke asli traces se jodiye. Panels hain quality, safety, latency, cost, traffic aur failures.',
  'A security go/no-go checklist and an observability dashboard.':
    'Ek security go/no-go checklist aur ek observability dashboard.',
  'Ship to real users':
    'Asli users tak ship kijiye',
  'Recruit five to ten real target users. Watch at least five sessions, and keep a support log from day one.':
    '5 se 10 asli target users recruit kijiye. Kam se kam 5 sessions dekhiye, aur pehle din se ek support log rakhiye.',
  'Do you have evidence from real users, not just demo traffic from your teammates?':
    'Kya aapke paas asli users ka evidence hai, sirf aapke teammates ka demo traffic nahi?',
  'Measure: optimize and quantify unit economics':
    'Measure: optimize kijiye aur unit economics quantify kijiye',
  'Change one thing at a time, and rerun the part of the evaluation that matters for it.':
    'Ek baar mein ek hi cheez badaliye, aur evaluation ka woh hissa dobara chalaiye jo uske liye zaroori hai.',
  'A before-and-after optimisation report, ADRs and a unit-economics model.':
    'Ek before-and-after optimisation report, ADRs aur ek unit-economics model.',
  'Iterate from evidence':
    'Evidence se iterate kijiye',
  'Ship one improvement that is based on evidence, and log the decision behind it.':
    'Evidence par based ek improvement ship kijiye, aur uske peeche ka decision mein likh dijiye.',
  'Pick the lowest-scoring evidence question from the earlier stages, and ship one change aimed at it.':
    'Pichhle stages se sabse kam score wala evidence question chuniye, aur uske liye ek change ship kijiye.',
  'Compare the product and AI metrics before and after. Then write the decision into the decision log: the context, the options you considered, the approach you chose, the trade-offs, and what would make you reopen it.':
    'Product aur AI metrics ko before aur after compare kijiye. Phir decision ko decision log mein likhiye: context, jo options aapne soche, jo approach chuni, trade-offs, aur kya hone par aap ise dobara kholenge.',
  'Can you tie the iteration to a problem you measured, not a preference?':
    'Kya aap iteration ko ek measure ki hui problem se jod sakte hain, pasand se nahi?',
  'Defend the system':
    'System ko defend kijiye',
  'The last skill this course tests is explaining and defending the system you built.':
    'Is course ka aakhri skill hai apne banaye system ko samjhana aur defend karna.',
  'Prepare a five-minute briefing for executives and a twenty-minute technical defence.':
    'Executives ke liye 5 minute ki briefing aur 20 minute ka technical defence taiyaar kijiye.',
  'Ask a peer to challenge your model choice, your agent choice, your security and your cost assumptions.':
    'Kisi peer se kahiye ki woh aapka model choice, agent choice, security aur cost assumptions challenge kare.',
  'The final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck and public case study.':
    'Final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck aur public case study.',
  'When you are done':
    'Jab aap poora kar lein',
  'It runs on a machine that is not yours, at a live URL.':
    'Yeh ek aisi machine par chalta hai jo aapki nahi hai, ek live URL par.',
  'Anyone can rerun the tests and get the same numbers.':
    'Koi bhi tests dobara chala sakta hai aur wahi numbers paa sakta hai.',
  'You have broken it in at least three real ways, on purpose.':
    'Aapne ise kam se kam teen asli tareekon se, jaanbujhkar toda hai.',
  'Three of your fixes have before and after numbers.':
    'Aapke teen fixes ke before aur after numbers hain.',
  'Final self-test':
    'Aakhri self-test',
  'When does a workflow beat an agent?':
    'Workflow agent se kab behtar hota hai?',
  'Why must evaluation come before release, and why does tracing matter?':
    'Evaluation release se pehle kyun aani chahiye, aur tracing kyun matter karti hai?',
  'Who is your buyer, and does your price cover what the model costs you?':
    'Aapka buyer kaun hai, aur kya aapka price woh cover karta hai jo model aapko cost karta hai?',
  'What would make you kill this project rather than keep iterating on it?':
    'Kya hone par aap is project ko kill kar denge, bajaye iterate karte rehne ke?',
  'Ship Bharat Privacy Guard, and write the findings document':
    'Bharat Privacy Guard ship kijiye, aur findings document likhiye',
  'A repository that works on a clean machine.':
    'Ek repository jo clean machine par chalti hai.',
  'Three failures you found yourself, each with evidence.':
    'Teen failures jo aapne khud dhoondhe, har ek evidence ke saath.',
  'Three fixes, each with before and after numbers.':
    'Teen fixes, har ek ke before aur after numbers ke saath.',
});
