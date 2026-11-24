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
  'Assume the model will be manipulated. The application, the retrieved content, the tools, the identity layer and the data pipeline are all part of the attack surface. You’ll apply least privilege, and build a risk register in which every control has a test.':
    'Maan lijiye ki model ko manipulate kiya jayega. Application, retrieved content, tools, identity layer aur data pipeline, sab attack surface ka hissa hain. Aap least privilege lagayenge, aur ek risk register banayenge jismein har control ka ek test hoga.',
  'Put a malicious instruction inside a document that your own system retrieves. Then test whether it can override the task or pull out a secret.':
    'Ek malicious instruction ko aise document ke andar daaliye jo aapka apna system retrieve karta hai. Phir test kijiye ki kya woh task ko override kar sakti hai ya koi secret nikal sakti hai.',
  'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.':
    'Trust boundaries, least privilege, input validation, secret isolation, audit logging aur confirmation steps jodiye.',
  'Run tests for prompt injection, indirect injection, tool abuse, data leakage and excessive agency.':
    'Prompt injection, indirect injection, tool abuse, data leakage aur excessive agency ke tests chalaiye.',
  'A security report and an AI risk register.':
    'Ek security report aur ek AI risk register.',
  'Explain why retrieved content is untrusted input, to someone who thinks it is simply their own data.':
    'Kisi aise insaan ko samjhaiye jo retrieved content ko bas apna data maanta hai, ki woh untrusted input kyun hai.',
  'Prompt injection has no complete fix':
    'Prompt injection ka koi poora fix nahi hai',
  'Chapter 13 showed you this. This chapter builds the controls around the problem.':
    'Chapter 13 mein aapne yeh dekha tha. Yeh chapter is problem ke aas-paas controls banata hai.',
  'Tools are a security boundary':
    'Tools ek security boundary hain',
  'You learned this in Chapter 25. Least privilege puts it into practice.':
    'Yeh aapne Chapter 25 mein seekha tha. Least privilege ise practice mein laata hai.',
  'Retrieved text can carry attacks':
    'Retrieved text mein attacks aa sakte hain',
  'In Chapter 7.5 you planted one in your own system.':
    'Chapter 7.5 mein aapne apne hi system mein ek attack daala tha.',
  'Prompt injection':
    'Prompt injection',
  'Text that reaches the model as data and gets followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it.':
    'Aisa text jo model tak data ki tarah pahunchta hai aur instruction ki tarah follow ho jaata hai. Model in dono ko bharose se alag nahi kar sakta, isliye boundary ko uske aas-paas enforce karna padta hai.',
  'Indirect injection':
    'Indirect injection',
  'The same attack, arriving through content the system retrieved and not through what the user typed.':
    'Wahi attack, lekin user ke type kiye hue text se nahi, balki system ke retrieve kiye hue content ke raaste se aata hua.',
  'Excessive agency':
    'Excessive agency',
  'Giving a system more permission, reach or independence than its task needs.':
    'Kisi system ko uske task ki zaroorat se zyada permission, reach ya independence dena.',
  'Risk register':
    'Risk register',
  'A table in which every row ends in a test that has been run, and not just in a control that has been described.':
    'Ek table jismein har row ek aise test par khatam hota hai jo chalaya ja chuka hai, sirf ek aise control par nahi jo bas describe kiya gaya hai.',
  'Explain why retrieved content is untrusted input, whoever owns the document.':
    'Samjha paana ki retrieved content untrusted input kyun hai, document ka owner koi bhi ho.',
  'Apply least privilege to an agent, and show what breaks.':
    'Ek agent par least privilege lagana, aur dikha paana ki kya toot-ta hai.',
  'Produce a risk register in which every control has evidence next to it.':
    'Aisa risk register banana jismein har control ke saath evidence ho.',
  'Bring your injection audit from Chapter 13 and the tool classification from Chapter 27.':
    'Chapter 13 ka apna injection audit aur Chapter 27 ki tool classification saath rakhiye.',
  'In the last chapter you learned to watch a live system. Now we ask what happens when someone tries to misuse it. The answer starts with a plain fact: the model gives everything it reads the same level of trust.':
    'Pichhle chapter mein aapne seekha ki live system ko kaise watch karte hain. Ab hum poochte hain ki koi use galat tareeke se use karne ki koshish kare toh kya hoga. Jawaab ek saade fact se shuru hota hai: model jo bhi padhta hai, us sab par barabar bharosa karta hai.',
  'Whether that is dangerous depends on the system around the model: what it is given, and what it is allowed to do next. That’s why most of AI security is about the system, and not about the model.':
    'Yeh khatarnak hai ya nahi, yeh model ke aas-paas ke system par depend karta hai: use kya diya jaata hai, aur aage use kya karne ki ijaazat hai. Isliye AI security ka zyadatar hissa system ke baare mein hota hai, model ke baare mein nahi.',
  'Here’s an everyday picture. Someone slips a note into a stack of paperwork that says “approve this one without checking”. The clerk can read perfectly well. The problem is that nothing in the process separates an instruction from a document.':
    'Ek roz ki tasveer dekhiye. Kisi ne kaagzaat ke dher mein ek parchi sarka di jis par likha hai “ise bina check kiye approve kar do”. Clerk bilkul achhe se padh sakta hai. Dikkat yeh hai ki process mein kuch bhi instruction ko document se alag nahi karta.',
  'Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the system that assembles the context must enforce the boundary. Asking nicely in the system prompt is not enough.':
    'Prompt injection ek input trust problem hai. Model bharose se instruction aur data mein farq nahi kar sakta, isliye jo system context assemble karta hai, usi ko boundary enforce karni padegi. System prompt mein pyaar se maang lena kaafi nahi hai.',
  'The eight units below go from the first attack, through the controls that stop it, to the checklist that decides a release.':
    'Neeche ke aath units pehle attack se shuru hote hain, use rokne wale controls se guzarte hain, aur us checklist par khatam hote hain jo release ka faisla karti hai.',
  'Understand direct and indirect prompt injection as attacks that use input you cannot trust.':
    'Direct aur indirect prompt injection ko aise attacks ki tarah samjhiye jo aise input ka use karte hain jis par bharosa nahi kiya ja sakta.',
  'Instructions hidden in what the user typed, or in retrieved content, can compete with your application’s own instructions.':
    'User ke type kiye hue text mein, ya retrieved content mein chhupi instructions aapki application ki apni instructions se takra sakti hain.',
  'Place malicious instructions in a document, and test the RAG assistant with it.':
    'Ek document mein malicious instructions daaliye, aur RAG assistant ko usi se test kijiye.',
  'Keep your trusted control instructions apart from untrusted evidence.':
    'Apni trusted control instructions ko untrusted evidence se alag rakhiye.',
  'Try to make the model reveal a secret, or use a tool, through retrieved text.':
    'Retrieved text ke zariye model se koi secret reveal karwane ya koi tool chalwane ki koshish kijiye.',
  'Prompt Injection Test Report.':
    'Prompt Injection Test Report.',
  'What stopped the attack: the model’s own behaviour, or a policy in the application?':
    'Attack ko kisne roka: model ke apne behaviour ne, ya application ki policy ne?',
  'Never describe the prompt text alone as a security boundary.':
    'Sirf prompt text ko kabhi security boundary mat kahiye.',
  'Sensitive information disclosure':
    'Sensitive information disclosure',
  'Protect secrets, PII and confidential data in prompts, in retrieval and in traces.':
    'Secrets, PII aur confidential data ko prompts mein, retrieval mein aur traces mein protect kijiye.',
  'A model can protect information only if the application controls what the model receives and what it can return.':
    'Model information ko tabhi protect kar sakta hai jab application control kare ki model ko kya milta hai aur woh kya return kar sakta hai.',
  'Create a test collection of documents with made-up sensitive fields.':
    'Made-up sensitive fields wale documents ka ek test collection banaiye.',
  'Filter or redact before the model sees anything, and log each access decision.':
    'Model kuch bhi dekhe, usse pehle filter ya redact kijiye, aur har access decision ko log kijiye.',
  'Ask for another user’s data, in plain language and through tool calls.':
    'Kisi doosre user ka data maangiye, plain language mein bhi aur tool calls ke zariye bhi.',
  'Data Leakage Test Matrix.':
    'Data Leakage Test Matrix.',
  'Where is authorization enforced?':
    'Authorization kahan enforce hoti hai?',
  'Map privacy requirements to the paths the data actually takes. Policy documents alone are not enough.':
    'Privacy requirements ko un raaston se map kijiye jin par data asal mein chalta hai. Sirf policy documents kaafi nahi hain.',
  'Improper output handling':
    'Improper output handling',
  'Check the model’s output before you pass it on to other systems.':
    'Model ke output ko doosre systems tak bhejne se pehle check kijiye.',
  'Generated text becomes dangerous when another system treats it as a trusted command, as SQL, as HTML or as business data.':
    'Generated text tab khatarnak ho jaata hai jab koi doosra system use trusted command, SQL, HTML ya business data maan leta hai.',
  'Create a structured output, and validate it against a list of allowed values.':
    'Ek structured output banaiye, aur use allowed values ki list ke against validate kijiye.',
  'Use allowlists and typed interfaces before anything is executed.':
    'Kuch bhi execute hone se pehle allowlists aur typed interfaces ka use kijiye.',
  'Inject malicious strings into the generated fields.':
    'Generated fields mein malicious strings daaliye.',
  'Output Validation Checklist plus tests.':
    'Output Validation Checklist aur tests.',
  'Which downstream component could interpret the output as an instruction?':
    'Kaun sa downstream component output ko instruction ki tarah padh sakta hai?',
  'Treat model output as untrusted input.':
    'Model output ko untrusted input maniye.',
  'Limit the tools and actions that an autonomous system can use.':
    'Un tools aur actions ko limit kijiye jo ek autonomous system use kar sakta hai.',
  'The more permissions a system has, the bigger the damage when something goes wrong.':
    'System ke paas jitni zyada permissions hongi, kuch galat hone par nuksaan utna bada hoga.',
  'Classify each tool by how much privilege it needs and whether its actions can be undone.':
    'Har tool ko classify kijiye ki use kitne privilege chahiye aur uske actions undo ho sakte hain ya nahi.',
  'Remove the tools it does not need, and compare task success before and after.':
    'Jo tools zaroori nahi hain unhe hataiye, aur pehle aur baad task success compare kijiye.',
  'Try a task that asks for an action that cannot be undone.':
    'Aisa task try kijiye jo aisi action maangta hai jo undo nahi ho sakti.',
  'Agency Permission Matrix.':
    'Agency Permission Matrix.',
  'What is the worst damage if the model is wrong?':
    'Agar model galat ho toh sabse bada nuksaan kya hoga?',
  'How much freedom the system gets should depend on the business risk.':
    'System ko kitni azaadi milti hai, yeh business risk par depend karna chahiye.',
  'Retrieval authorization':
    'Retrieval authorization',
  'Enforce ACLs (who may see what) and tenant boundaries before evidence reaches the model.':
    'Evidence model tak pahunchne se pehle ACLs (kaun kya dekh sakta hai) aur tenant boundaries enforce kijiye.',
  'Retrieving the right content for the wrong tenant is still a security breach.':
    'Galat tenant ke liye sahi content retrieve karna bhi ek security breach hai.',
  'Create two users and two groups of documents.':
    'Do users aur documents ke do groups banaiye.',
  'Apply the metadata filters on the server side.':
    'Metadata filters server side par lagaiye.',
  'Try to retrieve across tenants, and to retrieve with permissions that are out of date.':
    'Tenants ke beech retrieve karne ki koshish kijiye, aur purani permissions ke saath retrieve karne ki bhi.',
  'ACL Retrieval Test Report.':
    'ACL Retrieval Test Report.',
  'Can the model ever see evidence it is not authorized to access?':
    'Kya model kabhi aisa evidence dekh sakta hai jise dekhne ki use authorization nahi hai?',
  'Don’t make “remembering” the authorization rules the model’s job, as your only control.':
    'Authorization rules “yaad rakhna” model ka kaam mat banaiye, jab woh aapka akela control ho.',
  'Audit logging':
    'Audit logging',
  'Capture enough evidence to rebuild what happened in any action that matters for security.':
    'Itna evidence capture kijiye ki security ke liye zaroori kisi bhi action mein jo hua, use dobara banaya ja sake.',
  'An audit trail should show who did what, when, under which policy, with which tool, and what happened.':
    'Audit trail ko dikhana chahiye ki kisne kya kiya, kab, kaun si policy ke tahat, kaun se tool se, aur kya hua.',
  'Design an audit record for one tool action.':
    'Ek tool action ke liye ek audit record design kijiye.',
  'Write the approval event and the execution event separately.':
    'Approval event aur execution event ko alag-alag likhiye.',
  'Change the payload after it was approved, and check that the mismatch is visible.':
    'Approval ke baad payload badaliye, aur check kijiye ki mismatch dikhta hai.',
  'Audit Log Schema plus a sample trail.':
    'Audit Log Schema aur ek sample trail.',
  'Could someone responding to an incident reconstruct the action?':
    'Kya incident par kaam karne wala koi insaan us action ko reconstruct kar sakta hai?',
  'Being able to audit is part of being ready for production.':
    'Audit kar paana production ke liye ready hone ka hissa hai.',
  'Governance and risk register':
    'Governance aur risk register',
  'Turn security and AI risks into owners, controls and evidence.':
    'Security aur AI risks ko owners, controls aur evidence mein badaliye.',
  'Governance becomes useful when every risk has a control you can test, and an owner.':
    'Governance tab kaam ki ban jaati hai jab har risk ka ek aisa control ho jise test kiya ja sake, aur ek owner ho.',
  'Create fields for the risk, the impact, the likelihood, the control, the owner, the evidence and the remaining risk.':
    'Risk, impact, likelihood, control, owner, evidence aur bache hue risk ke liye fields banaiye.',
  'Review the register against the architecture of your capstone.':
    'Register ko apne capstone ke architecture ke saath review kijiye.',
  'Mark one control “policy only”, and ask what evidence is missing.':
    'Ek control ko “policy only” mark kijiye, aur poochhiye ki kaun sa evidence missing hai.',
  'AI Risk Register.':
    'AI Risk Register.',
  'Which risks are still left after the controls?':
    'Controls ke baad kaun se risks abhi bhi bache hain?',
  'A risk register is a working tool, not a compliance decoration.':
    'Risk register ek kaam ka tool hai, compliance ki sajaavat nahi.',
  'Security release gate':
    'Security release gate',
  'Turn red-team findings into release criteria.':
    'Red-team findings ko release criteria mein badaliye.',
  'Security tests must block a release when the remaining risk is above the agreed threshold.':
    'Jab bacha hua risk tay kiye hue threshold se upar ho, tab security tests ko release rokna chahiye.',
  'Define the mandatory checks for injection, leakage, authorization and unsafe actions.':
    'Injection, leakage, authorization aur unsafe actions ke liye mandatory checks tay kijiye.',
  'Run the test suite before and after a change of prompt or model.':
    'Prompt ya model badalne se pehle aur baad test suite chalaiye.',
  'Create a change that improves quality but weakens security.':
    'Aisa change banaiye jo quality badhaye lekin security kamzor kare.',
  'Security Go/No-Go Checklist.':
    'Security Go/No-Go Checklist.',
  'What counts as an automatic blocker?':
    'Automatic blocker kise maana jaayega?',
  'Security belongs in the same release process as quality and cost.':
    'Security ko wahi release process chahiye jismein quality aur cost hain.',
  'Least privilege for agents':
    'Agents ke liye least privilege',
  'Least privilege means giving something only the access it needs to do its job, and nothing more. For an agent, that mostly means tools.':
    'Least privilege ka matlab hai kisi ko sirf utna access dena jitna uske kaam ke liye zaroori hai, aur usse zyada nahi. Ek agent ke liye iska matlab zyadatar tools hota hai.',
  'Apply least privilege to agents. If an agent has a tool it never needs, an attacker can persuade it to use that tool.':
    'Agents par least privilege lagaiye. Agar kisi agent ke paas aisa tool hai jiski use kabhi zaroorat nahi, toh attacker use us tool ko use karne ke liye manwa sakta hai.',
  'Controls are only half the story, because each one needs proof. The table pairs each risk with a control, and with the evidence that shows the control works.':
    'Controls kahani ka sirf aadha hissa hain, kyunki har control ko saboot chahiye. Table har risk ko ek control ke saath jodta hai, aur us evidence ke saath jo dikhata hai ki control kaam karta hai.',
  'Risk':
    'Risk',
  'Example control':
    'Example control',
  'The evidence that it works':
    'Woh evidence jo dikhata hai ki control kaam karta hai',
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
  'A safeguard nobody has tested only exists on paper. Next to each safeguard, write the test that proves it works, and run it.':
    'Jis safeguard ko kisi ne test nahi kiya, woh sirf kaagaz par hai. Har safeguard ke saath woh test likhiye jo saabit kare ki woh kaam karta hai, aur use chalaiye.',
  'Try this with something from your own workplace.':
    'Yeh apne hi workplace ki kisi cheez ke saath try kijiye.',
  'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.':
    'Ek aisa control chuniye jo aapka organisation kehta hai ki uske paas hai. Likhiye ki kaun sa evidence saabit karega ki woh kaam karta hai, aur woh evidence hai ya nahi.',
  'The control … the evidence would be … it exists / does not exist because …':
    'Control … evidence yeh hoga … woh hai / nahi hai kyunki …',
  'The gap between the claim and the evidence is your real risk. A risk register exists to track that gap.':
    'Daave aur evidence ke beech ka gap hi aapka asli risk hai. Risk register isi gap ko track karne ke liye hota hai.',
  'To sum up: the model trusts everything it reads, so the system around it has to draw the lines. Retrieved content is untrusted input. Give every agent only the tools it needs. And write a test next to every control, so that your register holds evidence and not just good intentions.':
    'Toh seedhi baat yeh hai: model jo bhi padhta hai us par bharosa karta hai, isliye uske aas-paas ka system hi lakeerein khinchta hai. Retrieved content untrusted input hai. Har agent ko sirf utne tools dijiye jitne uski zaroorat hai. Aur har control ke saath ek test likhiye, taaki aapke register mein sirf achhi niyat nahi, evidence bhi ho.',
  'Next, in Chapter 32, you’ll turn this technical system into a product specification.':
    'Agle Chapter 32 mein aap is technical system ko ek product specification mein badlenge.',
  'Write the risk register, with a test for every control':
    'Risk register likhiye, har control ke test ke saath',
  'A risk register that ends in controls is only a list of good intentions. In this chapter you learned why retrieved text is untrusted input whoever owns it, how to apply least privilege to an agent, and to put evidence next to every control. Now you write the risk register for Bharat Privacy Guard.':
    'Jo risk register sirf controls par khatam ho, woh bas achhe iraadon ki list hai. Is chapter mein aapne seekha ki retrieved text untrusted input kyun hai, chahe uska owner koi bhi ho, agent par least privilege kaise lagate hain, aur har control ke saath evidence kaise rakhte hain. Ab aap Bharat Privacy Guard ke liye risk register likhenge.',
  'Written only. The register draws on evidence from your earlier chapters. No new code is needed.':
    'Sirf likhna hai. Register aapke pichhle chapters ke evidence par tika hai. Naya code nahi chahiye.',
  'For each risk, write eight things: the asset (what is at stake), the threat, the impact, how likely it is, the control, the owner, the test, and the risk that remains.':
    'Har risk ke liye aath cheezein likhiye: asset (kya daav par hai), threat, impact, kitna likely hai, control, owner, test, aur jo risk bacha rehta hai.',
  'Include at least these eight risks: a missed Aadhaar number; a false alarm that blocks a real message; an attack hidden in the text reaching the model; the provider keeping your data; the model provider going down; the reference lists going out of date; the logs storing raw personal data; and a person with more access than they need.':
    'Kam se kam yeh aath risks rakhiye: ek chhoota hua Aadhaar number; ek false alarm jo asli message ko block kar de; text mein chhupa ek attack jo model tak pahunch jaaye; provider ka aapka data rakh lena; model provider ka down ho jaana; reference lists ka purani ho jaana; logs mein raw personal data store hona; aur kisi insaan ke paas zaroorat se zyada access hona.',
  'For every control, write the test that shows it works, and run that test wherever you can. A control with no test is only an intention.':
    'Har control ke liye woh test likhiye jo dikhaye ki woh kaam karta hai, aur jahan ho sake woh test chalaiye. Jis control ka test nahi, woh sirf ek iraada hai.',
  'Apply least privilege to the tool. List what each part can reach, remove everything it does not need, and say what breaks.':
    'Tool par least privilege lagaiye. Likhiye ki har part kya-kya reach kar sakta hai, jo zaroori nahi use hataiye, aur bataiye ki kya toot-ta hai.',
  'Write two lines on why text retrieved from your own reference lists must still be treated as untrusted input.':
    'Do lines likhiye ki aapki apni reference lists se retrieve hua text bhi untrusted input kyun maana jaana chahiye.',
  'A register of at least eight risks with all eight columns filled in.':
    'Kam se kam aath risks ka ek register, jismein aathon columns bhare hon.',
  'A test for every control, with the results of those you ran.':
    'Har control ke liye ek test, aur jo tests aapne chalaye unke results.',
  'A least-privilege list and what broke when you removed access.':
    'Ek least-privilege list, aur access hatane par kya toota.',
  'Two lines on why retrieved text is untrusted.':
    'Do lines ki retrieved text untrusted kyun hai.',

  /* ---- ch19pm: AI product management: specs for a probabilistic system ---- */
  'AI product management: specs for a probabilistic system':
    'AI product management: ek probabilistic system ke liye specs',
  'An AI feature cannot promise the same output every time. So its spec must say how often it succeeds, on which test set, and what happens the rest of the time. You’ll write acceptance criteria as ranges, keep different kinds of metrics apart, and design the interface states.':
    'Ek AI feature har baar same output ka vaada nahi kar sakta. Isliye uski spec mein likhna padta hai ki woh kitni baar succeed karta hai, kis test set par, aur baaki waqt kya hota hai. Aap acceptance criteria ko ranges ki tarah likhenge, alag-alag tarah ke metrics ko alag rakhenge, aur interface states design karenge.',
  'Take “return the correct document” and turn it into an acceptance criterion that you could actually test.':
    '“Sahi document return karo” ko ek aise acceptance criterion mein badaliye jise aap sach mein test kar sakein.',
  'Write a compact AI PRD. Cover the problem, the baseline, the scope, the context, the tools, the failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.':
    'Ek compact AI PRD likhiye. Usmein problem, baseline, scope, context, tools, failure modes, human role, evaluation, safety, latency, cost, rollout aur rollback cover kijiye.',
  'Attack it with three scenarios: a wrong answer, an over-refusal, and a harmful action.':
    'Ispar teen scenarios se attack kijiye: ek galat jawaab, ek over-refusal, aur ek harmful action.',
  'An AI PRD, a release gate and a metric map.':
    'Ek AI PRD, ek release gate aur ek metric map.',
  'An engineer can build from it, and a leader can understand the trade-off it makes.':
    'Ek engineer isse build kar sake, aur ek leader samajh sake ki yeh kaun sa trade-off kar rahi hai.',
  'Quality is a measured number against a test set':
    'Quality ek test set ke against measure kiya hua number hai',
  'Chapter 29 built the gate that this PRD refers to.':
    'Chapter 29 ne woh gate banaya tha jiska yeh PRD zikr karta hai.',
  'Failure costs differ by use case':
    'Failure ki cost har use case mein alag hoti hai',
  'You saw this in Chapter 6. Choosing which failure to accept is a product decision.':
    'Yeh aapne Chapter 6 mein dekha tha. Kaun sa failure accept karna hai, yeh ek product decision hai.',
  'What the user sees when it is wrong':
    'Galat hone par user ko kya dikhta hai',
  'Chapter 20 designed the failure states.':
    'Chapter 20 ne failure states design kiye the.',
  'AI acceptance criterion':
    'AI acceptance criterion',
  'A metric, a named test set and a stated tolerance. “Always correct” is not something you can hold a probabilistic system to.':
    'Ek metric, ek named test set aur ek tolerance jo likhi gayi ho. “Hamesha sahi” aisi cheez nahi hai jiske liye aap ek probabilistic system ko zimmedaar thehra sakein.',
  'Product metric':
    'Product metric',
  'What the user achieved. Keep it separate from system quality metrics and from operating cost, because mixing them leaves a dashboard unable to answer anything.':
    'User ne kya haasil kiya. Ise system quality metrics aur operating cost se alag rakhiye, kyunki inhe milane se dashboard kisi sawaal ka jawaab nahi de paata.',
  'Rollback trigger':
    'Rollback trigger',
  'The specific, observable condition that causes a change to be withdrawn. Write it so that someone can act on it without you.':
    'Woh khaas, dekhi ja sakne wali condition jiske hone par kisi change ko wapas le liya jaata hai. Ise aise likhiye ki koi aapke bina bhi us par action le sake.',
  'Non-goal':
    'Non-goal',
  'Something you have deliberately decided not to do, written down so that nobody can assume it back in later.':
    'Ek cheez jise aapne jaan-boojhkar na karne ka faisla kiya hai, aur likh di hai, taaki koi baad mein use chupke se maan na le.',
  'Write an acceptance criterion as a rate with a tolerance, not as a promise.':
    'Acceptance criterion ko vaade ki tarah nahi, tolerance wale rate ki tarah likh paana.',
  'Keep business outcomes, model metrics and operating metrics apart.':
    'Business outcomes, model metrics aur operating metrics ko alag rakh paana.',
  'Design the three interface states that an AI feature needs.':
    'Un teen interface states ko design kar paana jo ek AI feature ko chahiye.',
  'Bring your release gate from Chapter 29 and the four interface states from Chapter 20.':
    'Chapter 29 ka apna release gate aur Chapter 20 ke chaar interface states saath rakhiye.',
  'So far you’ve built, measured, watched and secured an AI system. Now you write the spec that ties it together. And the first lesson is a hard one: “it returns the right document” is a promise no probabilistic system can keep.':
    'Ab tak aapne ek AI system banaya, measure kiya, watch kiya aur secure kiya. Ab aap woh spec likhenge jo sab kuch jodti hai. Aur pehla sabak thoda kadva hai: “yeh sahi document return karta hai” ek aisa vaada hai jo koi probabilistic system nahi nibha sakta.',
  'So write down something you can keep. How often does it return the right document? Measured on which cases? And what does the system do the rest of the time? That rest is never zero.':
    'Toh woh likhiye jo aap nibha sakein. Yeh sahi document kitni baar return karta hai? Kin cases par measure karke? Aur baaki waqt system kya karta hai? Woh baaki waqt kabhi zero nahi hota.',
  'Here’s an everyday comparison. A railway can’t promise a train at exactly 9:04. So it publishes the share of trains that arrive within a few minutes of schedule, measured every month. You can plan your day around that number.':
    'Ek roz ki misaal lijiye. Ek railway yeh vaada nahi kar sakti ki train theek 9:04 par aayegi. Isliye woh har mahine yeh publish karti hai ki kitni trains schedule se kuch minute ke andar pahunchi. Us number ke hisaab se aap apna din plan kar sakte hain.',
  'For an AI feature, “done” means a measured success rate within a tolerance, not one fixed output.':
    'Ek AI feature ke liye “done” ka matlab hai ek tolerance ke andar measure kiya hua success rate, ek fixed output nahi.',
  'The seven units below start from the problem and end with the full PRD. Each one gives you something you’ll use in the next.':
    'Neeche ke saat units problem se shuru hote hain aur poore PRD par khatam hote hain. Har unit aapko kuch aisa deta hai jo agle mein kaam aata hai.',
  'AI problem framing':
    'AI problem framing',
  'Decide whether AI is justified, and define the outcome the user wants.':
    'Tay kijiye ki AI ka use theek hai ya nahi, aur user ko kya outcome chahiye woh define kijiye.',
  'Start from the workflow and the pain, not from the model.':
    'Workflow aur pain se shuru kijiye, model se nahi.',
  'Write down the current process, the user’s pain, the baseline and an outcome you can measure.':
    'Abhi ka process, user ka pain, baseline aur ek aisa outcome likhiye jise measure kiya ja sake.',
  'Where you can, build a baseline that does not use AI.':
    'Jahan ho sake, ek aisa baseline banaiye jo AI use nahi karta.',
  'Compare your AI idea with a deterministic alternative, one that always gives the same output for the same input.':
    'Apne AI idea ko ek deterministic alternative se compare kijiye, jo same input par hamesha same output deta hai.',
  'Problem Framing One-Pager.':
    'Problem Framing One-Pager.',
  'Why AI, and not ordinary software?':
    'AI hi kyun, aam software kyun nahi?',
  'This stops you from starting with “AI-first” solutions.':
    'Isse aap “AI-first” solutions se shuru karne se bachte hain.',
  'AI acceptance criteria':
    'AI acceptance criteria',
  'Turn a vague idea of “correctness” into thresholds you can measure.':
    '“Correctness” ke dhundhle idea ko aise thresholds mein badaliye jinhe measure kiya ja sake.',
  'AI output varies, so “done” must describe a spread of results and a tolerance.':
    'AI output badalta rehta hai, isliye “done” mein results ka ek spread aur ek tolerance likhna padta hai.',
  'Write criteria for retrieval, generation, safety, latency and cost.':
    'Retrieval, generation, safety, latency aur cost ke liye criteria likhiye.',
  'Link each criterion to a test set and a way of measuring.':
    'Har criterion ko ek test set aur measure karne ke ek tareeke se jodiye.',
  'Create a case where quality improves but latency breaks the SLO, the response time you promised.':
    'Aisa case banaiye jismein quality improve ho lekin latency SLO tod de, jis response time ka aapne vaada kiya tha.',
  'AI Acceptance Criteria Sheet.':
    'AI Acceptance Criteria Sheet.',
  'Can engineering run the test without asking what “good” means?':
    'Kya engineering yeh pooche bina test chala sakti hai ki “good” ka matlab kya hai?',
  'Acceptance criteria are the contract between product and engineering.':
    'Acceptance criteria product aur engineering ke beech ka contract hain.',
  'Failure-first UX':
    'Failure-first UX',
  'Design around uncertainty, ambiguity and failure, instead of hiding them.':
    'Uncertainty, ambiguity aur failure ko chhupane ke bajaye unke aas-paas design kijiye.',
  'A good AI experience helps users understand the system’s limits, and what to do about them.':
    'Ek achha AI experience users ko system ki limits samajhne mein madad karta hai, aur yeh bhi ki unka kya karna hai.',
  'Design a confident state, an uncertain state and a failed state.':
    'Ek confident state, ek uncertain state aur ek failed state design kijiye.',
  'Add citations, a way to ask for clarification, and fallback paths.':
    'Citations, clarification maangne ka tareeka, aur fallback paths jodiye.',
  'Remove the citations and the uncertainty cues, and compare how users interpret the answers.':
    'Citations aur uncertainty cues hataiye, aur compare kijiye ki users jawaab ko kaise samajhte hain.',
  'Failure-First UX Flow.':
    'Failure-First UX Flow.',
  'What does the user do when the AI cannot answer?':
    'Jab AI jawaab nahi de paata, tab user kya karta hai?',
  'The fallback is part of the feature, not an afterthought.':
    'Fallback feature ka hissa hai, baad mein socha hua kaam nahi.',
  'Human-in-the-loop UX':
    'Human-in-the-loop UX',
  'Specify when a person reviews, approves, edits or overrides the AI’s output.':
    'Likhiye ki kab ek insaan AI ke output ko review, approve, edit ya override karta hai.',
  'Human involvement should be aimed at the high-risk or unclear moments.':
    'Insaan ko high-risk ya unclear moments par involve karna chahiye.',
  'Map the decision points and what the person is asked to approve.':
    'Decision points map kijiye, aur yeh bhi ki insaan se kya approve karwaya ja raha hai.',
  'Measure how long reviews take and how often people override the AI.':
    'Measure kijiye ki reviews mein kitna time lagta hai aur log kitni baar AI ko override karte hain.',
  'Create an approval that no longer matches the action it approves.':
    'Aisa approval banaiye jo us action se ab match nahi karta jise woh approve karta hai.',
  'HITL Decision Map.':
    'HITL Decision Map.',
  'What does the human add that nothing else can?':
    'Insaan aisa kya deta hai jo aur koi nahi de sakta?',
  'Human review should reduce risk without turning into meaningless rubber-stamping.':
    'Human review ko risk kam karna chahiye, bina bekaar rubber-stamping bane.',
  'Metrics and experimentation':
    'Metrics aur experimentation',
  'Keep business outcomes apart from model metrics and operating metrics.':
    'Business outcomes ko model metrics aur operating metrics se alag rakhiye.',
  'Task completion is not the same as groundedness, and both are different from cost.':
    'Task completion groundedness jaisa nahi hai, aur dono cost se alag hain.',
  'Create a metric tree with layers for business, quality, safety, latency and cost.':
    'Business, quality, safety, latency aur cost ki layers wala ek metric tree banaiye.',
  'Where it fits, define an A/B test or another controlled comparison.':
    'Jahan fit ho, ek A/B test ya koi aur controlled comparison define kijiye.',
  'Improve a model metric while making the business outcome worse.':
    'Model metric ko improve kijiye, jabki business outcome kharab ho raha ho.',
  'Metric Map plus Experiment Plan.':
    'Metric Map aur Experiment Plan.',
  'Which metric decides whether the product is useful?':
    'Kaun sa metric tay karta hai ki product kaam ka hai ya nahi?',
  'A PM must stop teams from optimizing a stand-in for the real goal.':
    'Ek PM ko teams ko asli goal ke badle uske kisi stand-in ko optimize karne se rokna padta hai.',
  'Unit economics':
    'Unit economics',
  'Model the costs of tokens, retrieval, tools, infrastructure and human review.':
    'Tokens, retrieval, tools, infrastructure aur human review ki costs ko model kijiye.',
  'The real unit is often the cost of a successful task, not the cost of a request.':
    'Asli unit aksar ek successful task ki cost hoti hai, ek request ki nahi.',
  'Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.':
    'Ek spreadsheet banaiye jismein volume, token usage, model cost, retries, tools aur review time ho.',
  'Compare scenarios for model routing and for caching.':
    'Model routing aur caching ke scenarios compare kijiye.',
  'Increase the context or the retry rate, and see what happens to the margin.':
    'Context ya retry rate badhaiye, aur dekhiye ki margin par kya asar padta hai.',
  'AI Unit Economics Model.':
    'AI Unit Economics Model.',
  'What happens at 10× volume?':
    '10× volume par kya hota hai?',
  'Cost belongs in architecture decisions from day one.':
    'Cost ko pehle din se architecture decisions mein hona chahiye.',
  'AI PRD and release plan':
    'AI PRD aur release plan',
  'Write a PRD that an engineer can implement and a leader can evaluate.':
    'Aisa PRD likhiye jise ek engineer implement kar sake aur ek leader evaluate kar sake.',
  'An AI PRD must specify the context, the behaviour when it fails, the evaluation and the operating limits.':
    'Ek AI PRD mein context, fail hone par behaviour, evaluation aur operating limits likhni padti hain.',
  'Complete the problem, scope, inputs, context, tools, model behaviour, failures, human role, metrics, safety, latency, cost, rollout and rollback.':
    'Problem, scope, inputs, context, tools, model behaviour, failures, human role, metrics, safety, latency, cost, rollout aur rollback poore kijiye.',
  'Review the PRD against the system you built.':
    'PRD ko us system ke against review kijiye jo aapne banaya.',
  'Ask a reviewer to find a failure your PRD did not specify.':
    'Kisi reviewer se kahiye ki woh aisa failure dhundhe jo aapke PRD mein likha nahi tha.',
  'AI PRD plus Release Gate plus Metric Map.':
    'AI PRD, Release Gate aur Metric Map.',
  'Can the PRD answer “what happens when it is wrong?”':
    'Kya PRD “jab yeh galat ho toh kya hota hai?” ka jawaab de sakta hai?',
  'This becomes one of the strongest artifacts in your portfolio.':
    'Yeh aapke portfolio ke sabse mazboot artifacts mein se ek ban jaata hai.',
  'A spec outline':
    'Spec ka outline',
  'Here is an outline you can copy. Each line is a question that someone will ask you later, and it’s cheaper to answer it now.':
    'Yeh ek outline hai jise aap copy kar sakte hain. Har line ek aisa sawaal hai jo koi aapse baad mein poochega, aur use abhi jawaab dena sasta padta hai.',
  'The user’s problem, and how it is handled today without AI.':
    'User ki problem, aur AI ke bina aaj yeh kaise handle hoti hai.',
  'Why AI is the right answer to it — and what is explicitly out of scope.':
    'AI iska sahi jawaab kyun hai — aur kya saaf taur par scope ke bahar hai.',
  'What goes in: the inputs, the context, the tools it may call.':
    'Andar kya jaata hai: inputs, context, aur woh tools jinhe woh call kar sakta hai.',
  'How it fails, and what a person does when it does.':
    'Yeh kaise fail hota hai, aur jab hota hai toh insaan kya karta hai.',
  'The test set, and the scores that count as good enough.':
    'Test set, aur woh scores jo kaafi achhe maane jaate hain.',
  'Safety limits, the speed it must hold, the cost it must stay under.':
    'Safety limits, jis speed ko use banaye rakhna hai, aur jis cost ke neeche rehna hai.',
  'How it rolls out, what you watch afterwards, and what triggers pulling it back.':
    'Yeh kaise roll out hota hai, uske baad aap kya watch karte hain, aur use wapas kheenchne ka trigger kya hai.',
  'Whose name is on it.':
    'Isse kiska naam juda hai.',
  'Keep metric types separate':
    'Metric types ko alag rakhiye',
  'Once the outline is filled in, the next trap is the metrics. They look alike on a dashboard, but they answer different questions.':
    'Outline bhar jaane ke baad agla jaal metrics ka hai. Dashboard par woh ek jaise dikhte hain, lekin woh alag-alag sawaalon ka jawaab dete hain.',
  'Keep the metric types apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.':
    'Metric types ko alag rakhiye. Task completion rate ek product outcome hai. Groundedness ek system quality metric hai. Token cost ek operating metric hai. Complaint rate ek user signal hai. Jo dashboard inhe milata hai woh kisi bhi sawaal ka saaf jawaab nahi de sakta.',
  'Metrics also feed the big decisions. The table lists four of them, the business question behind each, and the AI evidence that settles it.':
    'Metrics bade decisions mein bhi kaam aate hain. Table mein chaar decisions hain, har ek ke peeche ka business sawaal, aur woh AI evidence jo use tay karta hai.',
  'The business question':
    'Business ka sawaal',
  'The AI evidence that settles it':
    'Woh AI evidence jo ise tay karta hai',
  'Build or buy':
    'Build ya buy',
  'Will it create enough value?':
    'Kya yeh kaafi value banayega?',
  'Capability, evaluation and total cost of ownership':
    'Capability, evaluation aur total cost of ownership',
  'Ship or hold':
    'Ship karein ya rokein',
  'Is failure cheap enough?':
    'Kya failure ki cost kaafi kam hai?',
  'Quality, safety and incident readiness':
    'Quality, safety aur incident ki taiyaari',
  'Model A or B':
    'Model A ya B',
  'Which wins for this task?':
    'Is task ke liye kaun jeetta hai?',
  'A task-specific benchmark':
    'Task-specific benchmark',
  'Human in the loop':
    'Human in the loop',
  'Where is autonomy unsafe?':
    'Autonomy kahan unsafe hai?',
  'Error cost and reversibility':
    'Error ki cost aur reversibility',
  'Now try writing one of the hardest lines in the spec.':
    'Ab spec ki sabse mushkil lines mein se ek likhkar dekhiye.',
  'Write a one-line rollback trigger for a feature you want to ship. It must be specific enough that someone could act on it at 2am without calling you.':
    'Kisi aise feature ke liye ek-line ka rollback trigger likhiye jise aap ship karna chahte hain. Woh itna khaas ho ki koi raat 2 baje bina aapko call kiye us par action le sake.',
  'Roll back if …':
    'Roll back kijiye agar …',
  'If someone needs your judgement to interpret it, it is not a trigger yet. Make it a number and a threshold.':
    'Agar kisi ko use samajhne ke liye aapki judgement chahiye, toh woh abhi trigger nahi hai. Use ek number aur ek threshold banaiye.',
  'So an AI spec is built on a few honest ideas. Promise a rate with a tolerance, not a perfect output. Keep business, quality and operating metrics apart. Design for the moments when the AI is unsure or wrong. And write a rollback trigger that someone can act on without asking you.':
    'Toh ek AI spec kuch seedhe ideas par tiki hoti hai. Perfect output ka nahi, tolerance wale rate ka vaada kijiye. Business, quality aur operating metrics ko alag rakhiye. Un pal ke liye design kijiye jab AI unsure ya galat hota hai. Aur aisa rollback trigger likhiye jis par koi aapse pooche bina action le sake.',
  'Next, in Chapter 33, you’ll turn the product into a production architecture and a delivery plan.':
    'Agle Chapter 33 mein aap product ko ek production architecture aur delivery plan mein badlenge.',
  'Written only. The requirements draw on evidence from earlier chapters. No new code is needed.':
    'Sirf likhna hai. Requirements pichhle chapters ke evidence par tiki hain. Naya code nahi chahiye.',
  'State the user’s problem, and the non-AI way your tool has to beat, for example a developer’s own hand-written rules.':
    'User ki problem likhiye, aur woh non-AI tareeka bhi jise aapke tool ko harana hai, jaise ek developer ke haath se likhe hue rules.',
  'Define the scope and, clearly, what is out of scope.':
    'Scope define kijiye, aur saaf taur par yeh bhi ki kya scope ke bahar hai.',
  'Specify what the models see, which tools they may use and what role a person plays.':
    'Likhiye ki models kya dekhte hain, woh kaun se tools use kar sakte hain, aur insaan ka kya role hai.',
  'List the failures you have really seen in this course.':
    'Un failures ki list banaiye jo aapne is course mein asal mein dekhe.',
  'Name the test set, and write a five-line test plan.':
    'Test set ka naam likhiye, aur paanch lines ka test plan likhiye.',
  'Set quality, safety, speed and cost targets as rates with a tolerance, for example: “finds 95 of every 100 Aadhaar numbers, give or take 3, on the answer key”.':
    'Quality, safety, speed aur cost ke targets ko tolerance wale rates ki tarah set kijiye, jaise: “answer key par har 100 Aadhaar numbers mein se 95 dhoondhta hai, 3 upar-neeche”.',
  'Design the three screens the tool needs: sure, unsure and error.':
    'Tool ko jo teen screens chahiye woh design kijiye: sure, unsure aur error.',
  'Write the release plan, a one-line rollback trigger, and the name of the owner.':
    'Release plan likhiye, ek-line ka rollback trigger, aur owner ka naam.',
  'Two pages that an engineer could build from.':
    'Do pages jinse ek engineer build kar sake.',
  'Every quality claim written as a number against a named test set.':
    'Har quality claim ek named test set ke against ek number ki tarah likhi hui.',
  'What is out of scope, written down.':
    'Kya scope ke bahar hai, likha hua.',
  'A rollback trigger that someone could act on without asking you.':
    'Ek rollback trigger jis par koi aapse pooche bina action le sake.',

  /* ---- ch20d: Production architecture, delivery and vendor strategy ---- */
  'Production architecture, delivery and vendor strategy':
    'Production architecture, delivery aur vendor strategy',
  'A prototype runs because you are the only user and you forgive its failures. Production removes both. In this chapter you’ll list what a prototype is missing, think of response time as a budget shared across stages, and score vendors on more than price and quality.':
    'Prototype isliye chalta hai kyunki uska sirf ek user hota hai, aur woh bhi uski galtiyan maaf kar deta hai. Production mein yeh dono cheezein khatam ho jaati hain. Is chapter mein aap dekhenge ki prototype mein kya-kya kam hai, response time ko ek budget ki tarah kaise sochna hai jo alag-alag stages mein baanta jaata hai, aur vendors ko sirf price aur quality par nahi balki aur kai baaton par score kaise karna hai.',
  'Before you look anything up, write from memory the list of what your prototype is missing for production.':
    'Kuch bhi dekhne se pehle, yaad se woh list likhiye ki production ke liye aapke prototype mein kya-kya missing hai.',
  'Add the decisions about architecture, the separate environments, automated checks before release, who is responsible for what, service targets, security, rolling back, and how you would leave a vendor.':
    'Architecture ke decisions, alag-alag environments, release se pehle automated checks, kiski kya zimmedari hai, service targets, security, rollback, aur vendor ko chhodne ka plan, yeh sab add kijiye.',
  'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.':
    'Teen shocks mein kya hota hai, yeh nikaliye: provider band ho jaaye, traffic 10 guna ho jaaye, aur token ka price double ho jaaye.',
  'A technical decision pack that covers the architecture, the alternatives, the evaluation, security, cost and rollout.':
    'Ek technical decision pack, jisme architecture, alternatives, evaluation, security, cost aur rollout ho.',
  'Defend your build-or-buy choice and your provider choice with weighted criteria, not with personal preference.':
    'Apna build-or-buy ka choice aur provider ka choice weighted criteria ke saath defend kijiye, apni pasand se nahi.',
  'Build or buy is a decision with criteria':
    'Build ya buy ek decision hai jiske criteria hote hain',
  'Chapter 18.5 introduced it. Here the criteria get weights.':
    'Chapter 18.5 mein yeh aaya tha. Yahan un criteria ko weight milta hai.',
  'Cost per task can be measured':
    'Cost per task ko measure kiya ja sakta hai',
  'You recorded it in Chapter 30.':
    'Aapne ise Chapter 30 mein record kiya tha.',
  'A release gate decides what ships':
    'Release gate tay karta hai ki kya ship hoga',
  'You built it in Chapter 29.':
    'Aapne ise Chapter 29 mein banaya tha.',
  'Production delta':
    'Production delta',
  'The list of everything a working prototype doesn’t have yet: sign-in, limits, retries, saved data, monitoring, secrets, backups, deployment and rollback.':
    'Woh list jo batati hai ki ek chalte hue prototype mein abhi kya-kya nahi hai: sign-in, limits, retries, saved data, monitoring, secrets, backups, deployment aur rollback.',
  'Latency budget':
    'Latency budget',
  'The total time a user is willing to wait, shared out across the stages that use it up.':
    'Woh kul time jitna user intezaar karne ko taiyaar hai, jo un stages mein baant diya jaata hai jo use kha jaate hain.',
  'Architecture decision record':
    'Architecture decision record',
  'A short note saying what was decided, what the other options were, and why. You write it when the decision is made, not later from memory.':
    'Ek chhota note jisme likha ho ki kya decide hua, baaki options kya the, aur kyun. Ise decision lete waqt hi likhte hain, baad mein yaad karke nahi.',
  'Exit cost':
    'Exit cost',
  'What it would take to leave a provider. It’s usually the least examined column in a vendor comparison, and the one you live with longest.':
    'Kisi provider ko chhodne mein kitna lagega. Vendor comparison mein yeh aksar sabse kam dekha jaane wala column hota hai, jabki aap isi ke andar sabse zyada time rehte hain.',
  'List what a prototype is missing before it can go to production.':
    'Samjha paana ki production tak pahunchne se pehle ek prototype mein kya missing hota hai.',
  'Treat response time as a budget spent across a chain of stages.':
    'Dekh paana ki response time ek budget hai jo stages ki ek chain mein kharch hota hai.',
  'Score providers on more criteria than price and quality.':
    'Providers ko price aur quality se zyada criteria par score kar paana.',
  'Keep your cost measurements from Chapter 30 and your release gate from Chapter 29 open. You’ll use both.':
    'Chapter 30 ke apne cost measurements aur Chapter 29 ka release gate paas rakhiye. Dono kaam aayenge.',
  'In the last chapter you saw how the product manager writes the spec for a system whose answers can vary. This chapter looks at the other side of the same table: what it takes to run such a system for real users.':
    'Pichhle chapter mein aapne dekha ki jis system ke jawaab badal sakte hain, uska spec product manager kaise likhta hai. Yeh chapter usi table ke doosri taraf ki baat karta hai: aise system ko asli users ke liye chalane mein kya lagta hai.',
  'Everything you’ve built so far works because you are the only user, and you forgive it when it fails. Production removes both of those. So here you’ll list what that costs you.':
    'Ab tak aapne jo bhi banaya hai woh isliye chalta hai kyunki aap hi uske akele user hain, aur fail hone par aap use maaf kar dete hain. Production mein yeh dono cheezein nahi rehtin. Toh yahan aap dekhenge ki iski keemat kya hai.',
  'An everyday comparison helps. A dish you cook well for two people is not yet a restaurant menu item. The recipe stays the same. But now you also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.':
    'Ek roz ki misaal se samajhiye. Ek dish jo aap do logon ke liye achhi banate hain, woh abhi restaurant ke menu ki item nahi hai. Recipe wahi rehti hai. Lekin ab aapko bharosemand supplies chahiye, aisa price jo kaam kare, doosre cooks jo use bana saken, aur us raat ka plan jab chaar sau log ek saath order karein.',
  'The units below walk through that gap one piece at a time. Each one has a goal, an idea, something to prove, something to build, something to break, something to hand in, and a question to check yourself. Take them in order.':
    'Neeche ke units us gap ko ek-ek hisse mein paar karte hain. Har unit mein ek goal hai, ek idea, kuch prove karne ko, kuch banane ko, kuch todne ko, kuch hand in karne ko, aur khud ko check karne ka ek sawaal. Inhe order mein kijiye.',
  'List everything that is missing between your notebook and a real service.':
    'Aapke notebook aur ek asli service ke beech jo kuch bhi missing hai, uski poori list banaiye.',
  'A real service needs many things a notebook doesn’t: sign-in, saved data, retries, queues, monitoring, secrets, deployment, backups, access rules and a way to roll back.':
    'Ek asli service ko bahut kuch chahiye jo notebook ko nahi chahiye: sign-in, saved data, retries, queues, monitoring, secrets, deployment, backups, access rules aur rollback karne ka tareeka.',
  'Write the production delta list for your own prototype.':
    'Apne prototype ke liye production delta ki list likhiye.',
  'Sort the items into three groups: must-have, should-have and later.':
    'Items ko teen groups mein baantiye: must-have, should-have aur later.',
  'Remove one of the controls, then describe how things would fail without it.':
    'Ek control hata dijiye, phir batayiye ki uske bina cheezein kaise fail hongi.',
  'A production delta checklist.':
    'Ek production delta checklist.',
  'What would stop you from going live tomorrow?':
    'Kal live jaane se aapko kya rokega?',
  'This is the bridge between how a PM thinks about delivery and what engineering actually has to build.':
    'Yeh PM ke delivery sochne ke tareeke aur engineering ko asal mein jo banana padta hai, in dono ke beech ka pul hai.',
  'Reliability and resilience':
    'Reliability aur resilience',
  'Plan for provider errors, failing dependencies and retries, and decide how the product slows down gracefully.':
    'Provider errors, dependencies ke fail hone aur retries ke liye plan kijiye, aur tay kijiye ki product kaise gracefully dheema hota hai.',
  'An AI system leans on services you don’t control, so some of them will fail at some point.':
    'Ek AI system aisi services par tikta hai jin par aapka control nahi hai, isliye kabhi na kabhi unmein se kuch fail hongi.',
  'Write failure scenarios for the model, for retrieval, for the tools and for the network.':
    'Model, retrieval, tools aur network ke liye failure scenarios likhiye.',
  'For each one, decide the timeout, the retries, the fallback, and what the user sees.':
    'Har ek ke liye timeout, retries, fallback, aur user ko kya dikhega, yeh tay kijiye.',
  'Pretend the provider is down, then pretend it is limiting how many requests you can send.':
    'Maan lijiye provider band hai, phir maan lijiye woh aapko limit kar raha hai ki aap kitni requests bhej sakte hain.',
  'A table of failures and fallbacks.':
    'Failures aur fallbacks ki ek table.',
  'What does the user experience when only part of the system fails?':
    'Jab system ka sirf ek hissa fail hota hai, tab user ko kya dikhta hai?',
  'A product that degrades gracefully can be worth more than one that uses a bigger model.':
    'Jo product gracefully degrade hota hai, woh bade model wale product se zyada kaam ka ho sakta hai.',
  'Scalability and queues':
    'Scalability aur queues',
  'Understand the difference between work done while the user waits and work done in the background, and find where a system hits its limits as it grows.':
    'Samajhiye ki user ke intezaar karte waqt hone wale kaam aur background mein hone wale kaam mein kya farq hai, aur dhoondhiye ki system badhne par kahan apni limit tak pahunchta hai.',
  'Not every AI task belongs in the path where the user sends a request and waits for the answer.':
    'Har AI task us raaste mein nahi aata jahan user request bhejta hai aur jawaab ka intezaar karta hai.',
  'Map a long-running job, such as taking in a big document.':
    'Ek lambe chalne wale job ka map banaiye, jaise ek bada document andar lena.',
  'Separate four things: the upload, the processing, the indexing and the status updates to the user.':
    'Chaar cheezein alag kijiye: upload, processing, indexing aur user ko status updates.',
  'Imagine ten times the work, and find the part that gives way first.':
    '10 guna kaam ka andaaza lagaiye, aur woh hissa dhoondhiye jo sabse pehle jawaab de dega.',
  'A sketch of how the system scales, with your assumptions about capacity.':
    'System kaise scale hoga, uska ek sketch, capacity ke baare mein aapki assumptions ke saath.',
  'Which part has to grow first, and why?':
    'Kaun sa hissa sabse pehle badhana padega, aur kyun?',
  'When you plan capacity, include the model’s own limits and the quotas set by outside providers.':
    'Capacity plan karte waqt model ki apni limits aur bahar ke providers ke quotas ko bhi shaamil kijiye.',
  'Deployment and environments':
    'Deployment aur environments',
  'Keep development, staging and production apart, each with settings you control.':
    'Development, staging aur production ko alag rakhiye, har ek ke apne settings ke saath jo aapke control mein hon.',
  'A production AI system needs settings you can reproduce and a safe way to release changes.':
    'Ek production AI system ko aisi settings chahiye jinhe dobara banaya ja sake, aur changes release karne ka ek safe tareeka.',
  'For each environment, define the environment variables, the model versions, the prompts and the index versions.':
    'Har environment ke liye environment variables, model versions, prompts aur index versions define kijiye.',
  'Write a deployment checklist, and the command or steps to roll back.':
    'Ek deployment checklist likhiye, aur rollback karne ka command ya steps.',
  'Release a deliberately bad prompt to staging, and check that production stays exactly as it was.':
    'Staging mein jaanbujhkar ek kharab prompt release kijiye, aur check kijiye ki production bilkul waisa hi rehta hai.',
  'A plan for your environments, and a rollout checklist.':
    'Aapke environments ka ek plan, aur ek rollout checklist.',
  'What can change without anyone releasing new code?':
    'Bina naya code release kiye kya-kya badal sakta hai?',
  'Configuration is part of the system, so it needs version control like everything else.':
    'Configuration system ka hissa hai, isliye baaki sab ki tarah ise bhi version control chahiye.',
  'CI/CD and AI regression':
    'CI/CD aur AI regression',
  'Put your software tests and your evaluation gates into the same automated checks.':
    'Apne software tests aur evaluation gates ko ek hi automated checks mein daaliye.',
  'A green build is not enough if the model’s behaviour has got worse.':
    'Agar model ka behaviour bigad gaya hai, toh sirf green build kaafi nahi hai.',
  'Add ordinary tests, plus your golden evaluation suite, to the automated checks that run before every release.':
    'Har release se pehle chalne wale automated checks mein normal tests ke saath apni golden evaluation suite bhi jodiye.',
  'Decide the thresholds that block a release.':
    'Woh thresholds tay kijiye jo release ko block karte hain.',
  'Change the model, the prompt or the index, and check that the automated checks catch the drop in quality.':
    'Model, prompt ya index badaliye, aur check kijiye ki automated checks quality ki girawat pakad lete hain.',
  'A spec for the automated release checks of an AI product.':
    'Ek AI product ke automated release checks ka spec.',
  'What evidence do you need before you release?':
    'Release karne se pehle aapko kaun sa evidence chahiye?',
  'This is how a system whose answers vary becomes something a team can deliver reliably.':
    'Isi tarah woh system, jiske jawaab badalte hain, ek aisi cheez ban jaata hai jise team bharose ke saath deliver kar sakti hai.',
  'Architecture Decision Records':
    'Architecture Decision Records',
  'Record the alternatives, the decision, the evidence, the consequences, and the signs that mean you should revisit it.':
    'Alternatives, decision, evidence, consequences, aur woh signs jinke baad decision dobara dekhna chahiye, in sabko record kijiye.',
  'Treat each architecture decision as a hypothesis with trade-offs, and write down when you’ll look at it again.':
    'Har architecture decision ko trade-offs wali ek hypothesis ki tarah dekhiye, aur likhiye ki aap use dobara kab dekhenge.',
  'Write a record for each of four decisions: the model, the retrieval approach, the workflow or agent, and the storage.':
    'Chaar decisions ke liye ek-ek record likhiye: model, retrieval ka tareeka, workflow ya agent, aur storage.',
  'Include the options you rejected and the evidence behind your choice.':
    'Jo options aapne reject kiye aur aapke choice ke peeche ka evidence, dono shaamil kijiye.',
  'Invent a new requirement that makes one of your decisions wrong.':
    'Ek naya requirement banaiye jo aapke kisi decision ko galat bana de.',
  'A set of architecture decision records.':
    'Architecture decision records ka ek set.',
  'What would make you revisit this decision?':
    'Kya hoga toh aap yeh decision dobara dekhenge?',
  'These records protect what the team has learned, and they make your reasoning as a technical PM easy for others to see.':
    'Yeh records team ne jo seekha hai use bachate hain, aur technical PM ke roop mein aapki sochne ka tareeka doosron ko saaf dikhate hain.',
  'Vendor and TCO strategy':
    'Vendor aur TCO strategy',
  'Compare provider and model choices on quality, cost, region, data controls, tooling and exit cost.':
    'Provider aur model ke choices ko quality, cost, region, data controls, tooling aur exit cost par compare kijiye.',
  'Choosing a vendor means balancing several goals at once, and it shapes your architecture.':
    'Vendor chunna ek saath kai goals ko balance karna hai, aur yeh aapke architecture ko bhi shape karta hai.',
  'Score at least three realistic options, or two providers plus an idea of hosting the model yourself.':
    'Kam se kam teen realistic options score kijiye, ya do providers aur model ko khud host karne ka ek idea.',
  'Estimate what it would cost to migrate away, and to exit.':
    'Andaaza lagaiye ki migrate karke bahar nikalne mein kitna cost aayega.',
  'Work out what happens if the price doubles, or if a capability you rely on is removed.':
    'Nikaliye ki agar price double ho jaaye, ya aap jis capability par tikay hain woh hata di jaaye, toh kya hoga.',
  'A scorecard for models and vendors, with an exit plan.':
    'Models aur vendors ka ek scorecard, exit plan ke saath.',
  'What would it cost you to switch?':
    'Switch karne mein aapko kitna cost aayega?',
  'Vendor lock-in is a risk to your costs and to your architecture.':
    'Vendor lock-in aapke costs aur architecture, dono ke liye ek risk hai.',
  'Technical decision pack':
    'Technical decision pack',
  'Package the whole system so that a design review can go through it.':
    'Poore system ko aise package kijiye ki ek design review use dekh sake.',
  'A strong artifact between PM and engineers lets different readers look at the same evidence, each at the depth they need.':
    'PM aur engineers ke beech ka ek achha artifact alag-alag readers ko wahi evidence dikhata hai, har ek ko utni gehrai mein jitni use chahiye.',
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
  'This is the bridge from your portfolio to real interviews for technical AI PM roles.':
    'Yeh aapke portfolio se technical AI PM roles ke asli interviews tak ka pul hai.',
  'Response time is a budget':
    'Response time ek budget hai',
  'Now let’s look at one idea more closely, because it surprises most people. When a user waits for an answer, the wait is really a chain of stages, one after the other.':
    'Ab ek idea ko thoda kareeb se dekhte hain, kyunki yeh zyadatar logon ko hairaan karta hai. Jab user jawaab ka intezaar karta hai, toh asal mein woh intezaar stages ki ek chain hota hai, ek ke baad ek.',
  'Response time is spent across the whole chain: retrieval, reranking, tool calls, model reasoning and final generation. The largest share is rarely in the stage people optimise first.':
    'Response time poori chain mein kharch hota hai: retrieval, reranking, tool calls, model reasoning aur final generation. Sabse bada hissa aksar us stage mein nahi hota jise log sabse pehle optimise karte hain.',
  'Think of it like a courier delivery. The parcel travels in several legs, and the longest delay is often not the leg you expected. This is why the total time a user will wait is called a <strong>latency budget</strong>. You divide it across the stages, and you check which one is using the most.':
    'Ise courier delivery ki tarah sochiye. Parcel kai legs mein safar karta hai, aur sabse zyada deri aksar us leg mein nahi hoti jiski aapne ummeed ki thi. Isliye user jitna intezaar karega, uske kul time ko <strong>latency budget</strong> kehte hain. Aap use stages mein baant dete hain, aur dekhte hain ki kaun sa stage sabse zyada kha raha hai.',
  'Next, here is a way to look at the whole system, layer by layer. Read across each row. The last column gives you the question to ask about that layer when you review a design.':
    'Ab poore system ko layer-by-layer dekhne ka ek tareeka. Har row ko aage ki taraf padhiye. Aakhri column batata hai ki design review karte waqt us layer ke baare mein kaun sa sawaal poochna hai.',
  'Typical responsibility':
    'Aam taur par kiski zimmedari',
  'The question to ask about it':
    'Us ke baare mein poochne wala sawaal',
  'Client and UI':
    'Client aur UI',
  'What the user sees and does':
    'User kya dekhta aur karta hai',
  'What uncertainty or approval must the user see?':
    'User ko kaun si uncertainty ya approval dikhni chahiye?',
  'Orchestrator':
    'Orchestrator',
  'Keeping track of state and choosing the next step':
    'State ka hisaab rakhna aur agla step chunna',
  'Where would a fixed rule be safer than the model’s judgement?':
    'Kahan ek fixed rule model ke judgement se zyada safe hoga?',
  'Model layer':
    'Model layer',
  'Reasoning and writing the answer':
    'Reasoning aur jawaab likhna',
  'What evidence supports this model choice?':
    'Is model choice ke peeche kaun sa evidence hai?',
  'Knowledge and tools':
    'Knowledge aur tools',
  'The data it reads and the actions it takes':
    'Jo data woh padhta hai aur jo actions woh leta hai',
  'Who can access what, and how is it audited?':
    'Kaun kya access kar sakta hai, aur uska audit kaise hota hai?',
  'Evaluation':
    'Evaluation',
  'Quality gates':
    'Quality gates',
  'What blocks a release?':
    'Release ko kya block karta hai?',
  'Observability':
    'Observability',
  'Evidence of how it behaves while running':
    'Chalte waqt woh kaisa behave kar raha hai, uska evidence',
  'How would we know it had got worse?':
    'Humein kaise pata chalega ki woh bigad gaya hai?',
  'Platform':
    'Platform',
  'Deploying, scaling and securing it':
    'Ise deploy, scale aur secure karna',
  'How does this survive heavy traffic and failures?':
    'Yeh zyada traffic aur failures mein kaise tikega?',
  'Choosing a vendor':
    'Vendor chunna',
  'The same habit of looking at the whole picture applies when you choose a provider. Most people compare price and quality, and stop there.':
    'Poori tasveer dekhne ki yahi aadat provider chunte waqt bhi kaam aati hai. Zyadatar log price aur quality compare karke ruk jaate hain.',
  'Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability, support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can lock you in for years.':
    'Vendor chunne ka matlab hai quality, data controls, response time, cost, region, tooling, interoperability, support aur exit cost, sabko tolna. Jo provider quality aur data controls mein jeet jaata hai lekin jiska exit cost bahut zyada hai, woh aapko saalon tak bandh sakta hai.',
  'Exit cost is the one people forget. It’s the column you read least when you compare vendors, yet it’s the one you live inside the longest.':
    'Exit cost woh cheez hai jise log bhool jaate hain. Vendors compare karte waqt aap is column ko sabse kam padhte hain, lekin isi ke andar aap sabse lambe time tak rehte hain.',
  'Teams that ship AI well tend to keep four simple habits:':
    'Jo teams AI achhe se ship karti hain, woh aam taur par chaar aasaan aadatein rakhti hain:',
  '<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.':
    '<strong>Likh kar rakhiye ki aapne cheezein kyun chunin</strong>, taaki chhe mahine baad koi decision dobara na khole.',
  '<strong>Have a safe place to try changes</strong> before real users see them.':
    '<strong>Changes try karne ki ek safe jagah rakhiye</strong>, asli users ke dekhne se pehle.',
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
  'If your plan needs an evaluation you don’t have, then the evaluation set is your exit plan. That’s usually the main thing you find out.':
    'Agar aapke plan ko aisi evaluation chahiye jo aapke paas nahi hai, toh evaluation set hi aapka exit plan hai. Aam taur par yahi sabse badi baat pata chalti hai.',
  'Let’s pull it together. A prototype works because you are its only user. Production needs a list of everything the prototype lacks, which is the production delta.':
    'Chaliye sab jodte hain. Ek prototype isliye chalta hai kyunki aap uske akele user hain. Production ke liye woh sab chahiye jo prototype mein nahi hai, yaani production delta ki list.',
  'You also saw that response time is a budget shared across a chain of stages, and that a vendor deserves more than a price and quality check. Include data controls, region, support and, above all, the cost of leaving.':
    'Aapne yeh bhi dekha ki response time ek budget hai jo stages ki chain mein baanta jaata hai, aur ek vendor ko sirf price aur quality se zyada parakhna chahiye. Data controls, region, support, aur sabse zyada, chhodne ki keemat, yeh sab shaamil kijiye.',
  'Next, Chapter 34 brings the whole system together in one capstone project.':
    'Aage, Chapter 34 poore system ko ek capstone project mein jodta hai.',
  'Make a ten-slide decision pack':
    '10 slides ka ek decision pack banaiye',
  'You now explain the whole design to the people who must approve it. In this chapter you learned what a prototype lacks before it can go live, to treat response time as a budget spent across stages, and to score providers on more than price and quality. Here you make a ten-slide pack for Bharat Privacy Guard. Draft it from memory first. The slides you can’t write from memory are the parts you don’t understand yet.':
    'Ab aap poora design un logon ko samjhate hain jinhe use approve karna hai. Is chapter mein aapne seekha ki live jaane se pehle prototype mein kya kam hota hai, response time ek budget hai, aur providers ko price aur quality se zyada par score karna hai. Yahan aap Bharat Privacy Guard ke liye 10 slides ka pack banate hain. Pehle use yaad se draft kijiye. Jo slides yaad se nahi likh paate, woh woh hisse hain jo abhi samajh nahi aaye.',
  'Written work only: a slide deck or a document that draws on your earlier measurements. No new code is needed.':
    'Sirf likhne ka kaam: ek slide deck ya document jo aapke pehle ke measurements par based ho. Naya code nahi chahiye.',
  'Without looking at your notes, write one line for each of the ten slides saying what it will say. Mark the slides you couldn’t write from memory.':
    'Apne notes dekhe bina, 10 slides mein se har ek ke liye ek line likhiye ki woh kya kahegi. Jo slides aap yaad se nahi likh paaye, unhe mark kijiye.',
  'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.':
    '10 slides banaiye: (1) problem aur use kya beat karna hai; (2) ek slide par architecture; (3) do alternatives jo aapne reject kiye aur kyun; (4) test results, test set ka naam dekar; (5) security aur kya risky bacha hai; (6) cost per message aur expected volume par cost; (7) rollout plan aur rollback trigger; (8) teen providers, 9 weighted criteria par scored; (9) decision aur uska owner kaun hai; (10) jo aapne solve nahi kiya.',
  'Check each slide against your earlier documents and fix any mismatch.':
    'Har slide ko apne pehle ke documents se milaiye aur jo bhi mismatch ho use theek kijiye.',
  'Ask someone else to present the deck from the slides alone. Write down where they stopped or hesitated, and fix those slides.':
    'Kisi aur se kahiye ki woh sirf slides dekhkar deck present kare. Likhiye ki woh kahan ruke ya hichkichaye, aur un slides ko theek kijiye.',
  'The from-memory outline with the weak slides marked.':
    'Yaad se banaya hua outline, kamzor slides mark kiye hue.',
  'Ten slides in the order above.':
    'Upar ke order mein 10 slides.',
  'A provider scorecard that includes the cost of leaving.':
    'Ek provider scorecard jisme chhodne ka cost bhi shaamil ho.',
  'Evidence that someone else could present the deck from the slides alone.':
    'Aisa evidence ki koi aur sirf slides se deck present kar sakta hai.',

  /* ---- ch21cap: Capstone: discover, build, break, measure, ship and defend a system ---- */
  'Capstone: discover, build, break, measure, ship and defend a system':
    'Capstone: ek system ko discover, build, break, measure, ship aur defend kijiye',
  'This is one capstone, not two. You take a real problem, with users you can actually reach, and carry it from discovery through a live launch to a defence in front of executives and engineers. Along the way you build one coherent applied AI system, break it on purpose, measure what you fixed, and show that it works as a product, not only as a demo.':
    'Yeh do nahi, ek hi capstone hai. Aap ek asli problem lete hain, aise users ke saath jinse aap sach mein mil sakte hain, aur use discovery se live launch tak, aur phir executives aur engineers ke saamne defence tak le jaate hain. Is poore safar mein aap ek coherent applied AI system banate hain, use jaanbujhkar todte hain, jo fix kiya use measure karte hain, aur dikhate hain ki yeh sirf demo nahi, ek product ki tarah bhi kaam karta hai.',
  'Reproduce at least ten kinds of failure: a question with no answer, a poisoned document, prompt injection, an unauthorised tool request, a malformed tool call, a stale permission, a multilingual query, a poor scan or audio, a model swap, and a rise in traffic or cost.':
    'Kam se kam 10 tarah ke failures reproduce kijiye: jis sawaal ka jawaab hi nahi hai, ek poisoned document, prompt injection, bina ijaazat wali tool request, ek malformed tool call, ek stale permission, ek multilingual query, kharab scan ya audio, ek model swap, aur traffic ya cost mein badhottari.',
  'The running system, a live URL with real users, and an evidence pack. The pack holds the PRD, the architecture, the threat model, the evaluation plan, the dashboard, the unit economics, the decision log, the rollout and rollback plan, the vendor scorecard and an explanation for executives.':
    'Chalta hua system, asli users ke saath ek live URL, aur ek evidence pack. Is pack mein PRD, architecture, threat model, evaluation plan, dashboard, unit economics, decision log, rollout aur rollback plan, vendor scorecard aur executives ke liye ek explanation hota hai.',
  'Show three failures you found yourself, three improvements with numbers, evidence from real users, unit economics that hold up, the risks that remain, and what you chose not to solve.':
    'Teen failures dikhaiye jo aapne khud dhoondhe, numbers ke saath teen improvements, asli users ka evidence, aisi unit economics jo tikti ho, bache hue risks, aur woh jo aapne jaanbujhkar solve nahi kiya.',
  'Everything in Part V':
    'Part V ki har cheez',
  'The capstone combines all of it.':
    'Capstone un sabko jodta hai.',
  'A release gate and a risk register':
    'Ek release gate aur ek risk register',
  'Chapters 29 and 31 give you the evidence you’ll defend with.':
    'Chapters 29 aur 31 aapko woh evidence dete hain jiske saath aap defend karenge.',
  'Track A’s discovery and strategy artifacts':
    'Track A ke discovery aur strategy artifacts',
  'They help, but you can start without them. If you have them, the discovery and design stages reuse them.':
    'Yeh madad karte hain, lekin inke bina bhi shuru kar sakte hain. Agar aapke paas hain, toh discovery aur design stages inhe dobara use karte hain.',
  'Findings document':
    'Findings document',
  'A plain, factual record of what broke, the evidence, the root cause, the fix, and what you chose not to solve. It is the opposite of a brochure.':
    'Ek saaf, factual record ki kya toota, evidence kya hai, root cause kya hai, fix kya hai, aur aapne kya solve nahi kiya. Yeh brochure ka ulta hai.',
  'Failure class':
    'Failure class',
  'A kind of failure, not one single example of it. This is what makes ten tests meaningful instead of ten stories.':
    'Failure ki ek kism, uska koi ek example nahi. Isi se 10 tests ka matlab banta hai, warna woh 10 kahaniyan rah jaate hain.',
  'Residual risk':
    'Residual risk',
  'The risk that’s left after a control is in place. You state it openly instead of leaving people to guess.':
    'Control lagne ke baad jo risk bacha rehta hai. Aap use khulkar bata dete hain, logon ko andaaza lagane nahi dete.',
  'Evidence pack':
    'Evidence pack',
  'The set of artifacts that lets somebody else check your claims instead of just trusting them.':
    'Artifacts ka woh set jisse koi aur aapke claims check kar sake, sirf bharosa na kare.',
  'Kill criteria':
    'Kill criteria',
  'The condition you write down before you need it, which tells you when to stop. Without it, you keep working on a problem the evidence says won’t work.':
    'Woh condition jo aap zaroorat se pehle likh lete hain, jo batati hai ki kab rukna hai. Iske bina aap ek aisi problem par kaam karte rehte hain jise evidence kehta hai ki chalegi nahi.',
  'Take a real problem, with users you can reach, from discovery all the way to a live product.':
    'Ek asli problem lekar, aise users ke saath jinse aap mil sakte hain, discovery se live product tak le jaa paana.',
  'Explain a system you built from first principles, without a framework doing the explaining for you.':
    'Jo system aapne banaya hai use first principles se samjha paana, bina kisi framework ke aapke liye samjhaye.',
  'Show before-and-after numbers for failures you found and fixed, and for the users who used it.':
    'Jin failures ko aapne dhoondha aur fix kiya, unke before-and-after numbers dikha paana, aur un users ke bhi jinhone use use kiya.',
  'Defend the business case, meaning unit economics, growth and vendor risk, as carefully as the architecture.':
    'Business case ko, yaani unit economics, growth aur vendor risk ko, utni hi dhyaan se defend kar paana jitna architecture ko.',
  'State what you deliberately did not solve.':
    'Bata paana ki aapne jaanbujhkar kya solve nahi kiya.',
  'In the last chapter you looked at what it takes to run an AI system for real users. Now you do the whole thing yourself, from the first conversation with a user to the final defence.':
    'Pichhle chapter mein aapne dekha ki asli users ke liye ek AI system chalane mein kya lagta hai. Ab aap poori cheez khud karte hain, user se pehli baat-cheet se lekar aakhri defence tak.',
  'Start by collecting every artifact you made in Part V. That means the harness, the model selection card, the context budget and the retrieval architecture. It also means the tool policy, the release gate, the dashboard, the risk register, the PRD and the decision pack. Every stage below reuses one of them.':
    'Sabse pehle Part V mein aapne jo bhi artifacts banaye, woh ikatthe kijiye. Yaani harness, model selection card, context budget aur retrieval architecture. Saath mein tool policy, release gate, dashboard, risk register, PRD aur decision pack. Neeche ka har stage inmein se kisi ek ko dobara use karta hai.',
  'You may also have done some of Track B’s optional modules. If so, reuse them too. B1’s cost model fits the measure stage. B3’s tracking plan fits the ship stage, and so do B6’s user sessions. B5’s release checklist fits the observe stage. None of them is needed to start.':
    'Ho sakta hai aapne Track B ke kuch optional modules bhi kiye hon. Agar haan, toh unhe bhi dobara use kijiye. B1 ka cost model measure stage mein fit hota hai. B3 ka tracking plan ship stage mein fit hota hai, aur B6 ke user sessions bhi. B5 ki release checklist observe stage mein fit hoti hai. Shuru karne ke liye inmein se kisi ki zaroorat nahi hai.',
  'What do you get at the end? A system you can explain without leaning on anyone’s framework. Real users who have used it. And an honest page about what broke when you tested it and what it costs to run.':
    'Aakhir mein aapko kya milta hai? Ek aisa system jise aap kisi ke framework par tike bina samjha sakte hain. Asli users jinhone use use kiya hai. Aur ek imaandaar page, jisme likha ho ki test karne par kya toota aur ise chalane mein kitna cost aata hai.',
  'That matters because employers ask three things. What can you build? Did anyone want it? And what goes wrong, and what do you do about it?':
    'Yeh isliye zaroori hai kyunki employers teen cheezein poochte hain. Aap kya bana sakte hain? Kya kisi ko woh chahiye tha? Aur kya galat hota hai, aur aap uske baare mein kya karte hain?',
  'The brief':
    'Brief',
  'Build one applied AI system that combines at least four capabilities from Part V. A good starting set is retrieval that respects permissions, tool calling, one bounded agent step, evaluation, tracing and security tests. Ship it to real users before you defend it. It should be one coherent journey, not a set of separate demos.':
    'Ek applied AI system banaiye jo Part V ki kam se kam 4 capabilities ko jode. Ek achha starting set hai permissions ka dhyaan rakhne wala retrieval, tool calling, ek bounded agent step, evaluation, tracing aur security tests. Defend karne se pehle ise asli users tak ship kijiye. Yeh ek coherent journey honi chahiye, alag-alag demos ka set nahi.',
  'The eleven stages':
    'Gyarah stages',
  'Stage':
    'Stage',
  'Required evidence':
    'Zaroori evidence',
  '34.1 Discover':
    '34.1 Discover',
  'Five interviews, a jobs-to-be-done statement, a scan of the market and competitors, and a problem brief backed by evidence.':
    '5 interviews, ek jobs-to-be-done statement, market aur competitors ka scan, aur evidence par based ek problem brief.',
  '34.2 Define':
    '34.2 Define',
  'The user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks, and a measurable acceptance criterion. Together these are your capstone AI PRD.':
    'User, pain, baseline, scope, non-goals, data, tools, risks, aur ek measurable acceptance criterion. Yeh sab milkar aapka capstone AI PRD banate hain.',
  '34.3 Design':
    '34.3 Design',
  'A one-page product and system design, plus the vision, strategy, roadmap and OKRs, a stakeholder map, a pricing hypothesis and your kill criteria.':
    'Ek-page ka product aur system design, saath mein vision, strategy, roadmap aur OKRs, ek stakeholder map, ek pricing hypothesis aur aapke kill criteria.',
  '34.4 Build':
    '34.4 Build',
  'Working code, tests, versioned prompts and settings, an architecture diagram and a threat model.':
    'Chalta hua code, tests, versioned prompts aur settings, ek architecture diagram aur ek threat model.',
  '34.5 Evaluate':
    '34.5 Evaluate',
  '30 to 50 evaluation cases, traces, and measurements of retrieval, answers, tools, safety, latency and cost.':
    '30 se 50 evaluation cases, traces, aur retrieval, answers, tools, safety, latency aur cost ke measurements.',
  '34.6 Break':
    '34.6 Break',
  'At least ten deliberate failure tests, saved before you fix anything.':
    'Kam se kam 10 jaanbujhkar kiye gaye failure tests, kuch bhi fix karne se pehle save kiye hue.',
  '34.7 Observe':
    '34.7 Observe',
  'A security go/no-go checklist, and a dashboard with six panels connected to real traces.':
    'Ek security go/no-go checklist, aur asli traces se jodi hui 6 panels wali dashboard.',
  '34.8 Ship':
    '34.8 Ship',
  'A live URL, monitoring, 5 to 10 real users, a support log and a timed rollback test.':
    'Ek live URL, monitoring, 5 se 10 asli users, ek support log aur ek timed rollback test.',
  '34.9 Measure':
    '34.9 Measure',
  'Before-and-after numbers for your optimisations, ADRs, and a unit-economics model at base usage and at high usage.':
    'Aapke optimisations ke before-and-after numbers, ADRs, aur base usage aur high usage par ek unit-economics model.',
  '34.10 Iterate':
    '34.10 Iterate',
  'One iteration based on evidence, before-and-after product and AI metrics, and an entry in the decision log.':
    'Evidence par based ek iteration, before-and-after product aur AI metrics, aur decision log mein ek entry.',
  '34.11 Defend':
    '34.11 Defend',
  'A ten-slide deck for executives, a twenty-minute technical defence and a public case study.':
    'Executives ke liye 10 slides ka deck, 20 minute ka technical defence aur ek public case study.',
  'A portfolio project is credible when you can explain its failures, show that someone wanted it, and say what it costs to run. Anyone can show a system that works on the demo path.':
    'Ek portfolio project tab credible hota hai jab aap uske failures samjha sakte hain, dikha sakte hain ki kisi ko woh chahiye tha, aur bata sakte hain ki ise chalane mein kitna cost aata hai. Demo path par chalne wala system toh koi bhi dikha sakta hai.',
  'Now the units. Each one covers a single stage, with the same rows every time. You get the goal, the idea, what to prove, what to build and what to break. Then come what to hand in, a question to check yourself, and why it matters. Do them in order, because each one feeds the next.':
    'Ab units. Har unit ek stage ko cover karta hai, aur har baar wahi rows hoti hain. Aapko goal, idea, kya prove karna hai, kya banana hai aur kya todna hai milta hai. Phir aate hain kya hand in karna hai, khud ko check karne ka ek sawaal, aur yeh kyun zaroori hai. Inhe order mein kijiye, kyunki har unit agle ko khilata hai.',
  'Discover: a real problem with reachable users':
    'Discover: ek asli problem, aise users ke saath jinse aap mil sakein',
  'Find a problem with a user group you can actually reach, and write a problem brief backed by evidence.':
    'Aisi problem dhoondhiye jiske user group tak aap sach mein pahunch sakte hain, aur evidence par based ek problem brief likhiye.',
  'The best capstones come from a job you have done, a team you know or a community you belong to. Look for a problem that comes up often, costs real time or money, and is solved badly today.':
    'Sabse achhe capstones aise kaam se aate hain jo aapne kiya hai, aisi team se jise aap jaante hain, ya aisi community se jiska aap hissa hain. Aisi problem dhoondhiye jo aksar aati hai, jisme asli time ya paise lagte hain, aur jise aaj kharab tareeke se solve kiya jaata hai.',
  'Score your problem against four tests. Can you reach users, meaning can you book five interviews this week? Does it happen often? Is it costly? And is it a fit for AI, rather than something a form or a formula could solve?':
    'Apni problem ko chaar tests par score kijiye. Kya aap users tak pahunch sakte hain, matlab kya aap isi hafte 5 interviews book kar sakte hain? Kya yeh aksar hoti hai? Kya yeh costly hai? Aur kya yeh AI ke liye fit hai, ya ise ek form ya formula bhi solve kar leta?',
  'Run five interviews. Write a jobs-to-be-done statement and a journey map, and scan the market and the competitors.':
    '5 interviews kijiye. Ek jobs-to-be-done statement aur ek journey map likhiye, aur market aur competitors ko scan kijiye.',
  'Challenge your idea with the question “why not ordinary software that always gives the same answer?” If a form would solve the problem, it isn’t a capstone.':
    'Apne idea ko is sawaal se challenge kijiye: “ordinary software kyun nahi, jo hamesha wahi jawaab deta hai?” Agar ek form se problem solve ho jaati hai, toh woh capstone nahi hai.',
  'A problem brief backed by evidence, with a jobs-to-be-done statement.':
    'Evidence par based ek problem brief, jobs-to-be-done statement ke saath.',
  'Can you trace each claim in your problem brief back to an interview note, and name one assumption that the evidence changed?':
    'Kya aap apne problem brief ke har claim ko kisi interview note tak trace kar sakte hain, aur ek aisi assumption bata sakte hain jo evidence se badal gayi?',
  'If nothing you believed changed after five interviews, you may have heard only what you expected to hear.':
    'Agar 5 interviews ke baad aapka kuch bhi believe nahi badla, toh ho sakta hai aapne sirf wahi suna jo aap sunna chahte the.',
  'Define the problem and PRD':
    'Problem aur PRD define kijiye',
  'Turn the problem into a system with acceptance criteria you can measure.':
    'Problem ko ek aise system mein badaliye jiske acceptance criteria aap measure kar sakein.',
  'A capstone becomes credible when the problem is clear and the cost of failure is clear too.':
    'Capstone tab credible banta hai jab problem saaf ho aur failure ka cost bhi saaf ho.',
  'Write down the user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks and the metrics.':
    'User, pain, baseline, scope, non-goals, data, tools, risks aur metrics likhiye.',
  'Ask “why not ordinary software that always gives the same answer?” again. This time, ask it against your actual scope, not the general case.':
    'Dobara poochiye: “ordinary software kyun nahi, jo hamesha wahi jawaab deta hai?” Is baar yeh aapke asli scope ke against poochiye, general case ke nahi.',
  'The capstone AI PRD.':
    'Capstone AI PRD.',
  'Can you state the business outcome in one sentence?':
    'Kya aap business outcome ek sentence mein bata sakte hain?',
  'This is the product anchor that everything below hangs from.':
    'Yeh product ka woh anchor hai jis par neeche ki har cheez tiki hai.',
  'Design the product and the system together':
    'Product aur system ko saath mein design kijiye',
  'Put the product decision and the technical decision on one page, because each one limits the other.':
    'Product decision aur technical decision ko ek hi page par rakhiye, kyunki har ek doosre ko limit karta hai.',
  'Whether a user needs an answer in two seconds or by Monday decides the architecture. And whether the architecture can hit a target decides what you can promise.':
    'User ko jawaab do second mein chahiye ya Monday tak, yeh architecture tay karta hai. Aur architecture ek target hit kar sakta hai ya nahi, yeh tay karta hai ki aap kya promise kar sakte hain.',
  'Fill in a design with nine lines: the user and the job, the activation moment, the AI approach, why not an agent, the evaluation, the boundaries, the cost, and the North Star.':
    'Nau lines ka ek design bhariye: user aur job, activation moment, AI approach, agent kyun nahi, evaluation, boundaries, cost, aur North Star.',
  'Add the vision, the strategy, the roadmap, the OKRs, a stakeholder map, a pricing hypothesis, and your kill criteria, which is the condition that tells you to stop.':
    'Vision, strategy, roadmap, OKRs, ek stakeholder map, ek pricing hypothesis, aur apne kill criteria jodiye, yaani woh condition jo batati hai ki kab rukna hai.',
  'Find one line in your design that you chose because it was interesting, not because it was needed, and cut it.':
    'Apne design ki ek aisi line dhoondhiye jo aapne isliye chuni kyunki woh dilchasp thi, isliye nahi ki zaroori thi, aur use kaat dijiye.',
  'A one-page product and system design, plus a stakeholder map.':
    'Ek-page ka product aur system design, saath mein ek stakeholder map.',
  'Does every technical choice on the page link to a product reason? And does every product choice link to something the system can actually do?':
    'Kya page par har technical choice ek product reason se juda hai? Aur kya har product choice us cheez se juda hai jo system sach mein kar sakta hai?',
  'Kill criteria written now, before you get attached to the idea, are the ones you’ll actually honour.':
    'Jo kill criteria aap abhi likhte hain, idea se lagav hone se pehle, unhi ka aap sach mein maan rakhenge.',
  'Build the vertical slice':
    'Vertical slice banaiye',
  'Build the smallest system that works from start to finish, before you add anything clever.':
    'Kuch bhi clever jodne se pehle, sabse chhota system banaiye jo shuru se aakhir tak chalta ho.',
  'A vertical slice proves that the architecture holds across its boundaries. A threat model added afterwards is an excuse, not a control.':
    'Ek vertical slice sabit karta hai ki architecture apni boundaries ke paar bhi tikta hai. Baad mein jodi gayi threat model ek bahana hai, control nahi.',
  'Build the path from input, to retrieval and context, to the model, to a structured answer, to a citation. Write the threat model alongside the first version, not after it.':
    'Input se retrieval aur context tak, phir model tak, phir ek structured answer tak, phir ek citation tak ka raasta banaiye. Threat model ko pehle version ke saath likhiye, uske baad nahi.',
  'Add a tool only when you need one. Keep the repository easy to reproduce, with a README, a requirements file and a command that runs it the same way every time.':
    'Tool tabhi jodiye jab zaroorat ho. Repository ko reproduce karna aasaan rakhiye, ek README, ek requirements file aur ek command ke saath jo ise har baar ek hi tareeke se chalaye.',
  'Ask a question that has no answer, and record how the system fails. This is your baseline.':
    'Aisa sawaal poochiye jiska jawaab nahi hai, aur record kijiye ki system kaise fail hota hai. Yahi aapki baseline hai.',
  'A running repository, architecture v1 and a threat model.':
    'Ek chalti hui repository, architecture v1 aur ek threat model.',
  'Can you run the system from a clean environment? And could someone else repeat your experiment without asking what you did by hand?':
    'Kya aap system ko ek clean environment se chala sakte hain? Aur kya koi aur aapka experiment bina yeh poochhe dohra sakta hai ki aapne haath se kya kiya tha?',
  'A small system that works beats a large diagram.':
    'Chhota system jo chalta hai, bade diagram se behtar hai.',
  'Add evaluation and observability':
    'Evaluation aur observability jodiye',
  'Turn the capstone into something you can measure.':
    'Capstone ko aisi cheez banaiye jise aap measure kar sakein.',
  'Every change should leave evidence behind.':
    'Har change ke peeche evidence chhootna chahiye.',
  'Create 30 to 50 evaluation cases, and collect traces.':
    '30 se 50 evaluation cases banaiye, aur traces collect kijiye.',
  'Add measurements for retrieval, answers, tools, safety, latency and cost.':
    'Retrieval, answers, tools, safety, latency aur cost ke measurements jodiye.',
  'Change the model, the prompt or the index, and reproduce the drop in quality.':
    'Model, prompt ya index badaliye, aur quality mein aayi giraawat ko reproduce kijiye.',
  'A golden dataset, an evaluation harness and an observability report.':
    'Ek golden dataset, ek evaluation harness aur ek observability report.',
  'Can you explain why the latest version is better?':
    'Kya aap bata sakte hain ki latest version behtar kyun hai?',
  'This is where the project turns into engineering evidence.':
    'Yahin project engineering evidence mein badal jaata hai.',
  'Break it deliberately':
    'Ise jaanbujhkar todiye',
  'Reproduce at least ten failure classes.':
    'Kam se kam 10 failure classes reproduce kijiye.',
  'A portfolio project is more credible when you can explain what broke.':
    'Ek portfolio project tab zyada credible hota hai jab aap samjha sakte hain ki kya toota.',
  'Test each of these. A question with no answer. A poisoned document. Prompt injection. An unauthorised tool. A malformed tool call. A stale permission. Multilingual input. A poor scan or audio. A model swap. A rise in traffic or cost.':
    'Har ek ko test kijiye. Aisa sawaal jiska jawaab nahi. Ek poisoned document. Prompt injection. Bina ijaazat wala tool. Ek malformed tool call. Ek stale permission. Multilingual input. Kharab scan ya audio. Ek model swap. Traffic ya cost mein badhottari.',
  'For each failure, capture the evidence, find the root cause and note the control.':
    'Har failure ke liye evidence capture kijiye, root cause dhoondhiye aur control note kijiye.',
  'Don’t fix anything straight away. First, save the failure as it happened.':
    'Turant kuch fix mat kijiye. Pehle failure ko waisa hi save kar lijiye jaisa woh hua tha.',
  'A security and red-team report, plus a table of failure findings.':
    'Ek security aur red-team report, saath mein failure findings ki ek table.',
  'Which three failures surprised you?':
    'Kaun se teen failures ne aapko hairaan kiya?',
  'Your failure log is often worth more than your happy-path demo.':
    'Aapka failure log aksar aapke happy-path demo se zyada keemti hota hai.',
  'Observe: prove it is inspectable before real users touch it':
    'Observe: asli users ke haath lagane se pehle sabit kijiye ki system ko andar se dekha ja sakta hai',
  'Prove that you can see inside the system, and that its risk has limits, before you ship it to a real user.':
    'Sabit kijiye ki aap system ke andar dekh sakte hain, aur uska risk limit mein hai, kisi asli user tak ship karne se pehle.',
  'If you can’t observe a system, you’re guessing about it, however good the demo looks.':
    'Agar aap kisi system ko observe nahi kar sakte, toh aap uske baare mein andaaza laga rahe hain, chahe demo kitna bhi achha lage.',
  'Run the security release-gate checks and the observability thresholds against the current build.':
    'Security release-gate checks aur observability thresholds ko current build par chalaiye.',
  'Connect a six-panel dashboard to the real traces from your evaluation and break stages. The panels are quality, safety, latency, cost, traffic and failures.':
    '6 panels wali ek dashboard ko apne evaluation aur break stages ke asli traces se jodiye. Panels hain quality, safety, latency, cost, traffic aur failures.',
  'Take one signal off the dashboard, and see which incident becomes invisible without it.':
    'Dashboard se ek signal hata dijiye, aur dekhiye ki uske bina kaun sa incident dikhna band ho jaata hai.',
  'A security go/no-go checklist and an observability dashboard.':
    'Ek security go/no-go checklist aur ek observability dashboard.',
  'Which alert should wake a human, and which should only be logged?':
    'Kaun sa alert kisi insaan ko jagaye, aur kaun sa sirf log ho?',
  'A stakeholder will ask, “how would you know if this broke at 2am?” This stage is your answer.':
    'Koi stakeholder poochega, “agar yeh raat ke 2 baje toot jaaye toh aapko kaise pata chalega?” Yeh stage aapka jawaab hai.',
  'Ship to real users':
    'Asli users tak ship kijiye',
  'Launch to a real user group, and prove that the rollback actually works.':
    'Ek asli user group tak launch kijiye, aur sabit kijiye ki rollback sach mein kaam karta hai.',
  'Real users teach you more than more theory. Five to ten observed sessions beat another week of polishing on your own.':
    'Asli users aapko zyada theory se zyada sikhate hain. 5 se 10 observed sessions, akele ek aur hafta polish karne se behtar hain.',
  'Put it on a stable live URL with monitoring, analytics, a privacy notice, a way for users to send feedback, and a rollback procedure.':
    'Ise ek stable live URL par rakhiye, monitoring, analytics, ek privacy notice, users ke feedback bhejne ka tareeka, aur ek rollback procedure ke saath.',
  'Recruit five to ten real target users. Watch at least five sessions, and keep a support log from day one.':
    '5 se 10 asli target users recruit kijiye. Kam se kam 5 sessions dekhiye, aur pehle din se ek support log rakhiye.',
  'Test your rollback for real before launch. Release a harmless change, roll it back, and time it. A rollback you have never tried is only a plan.':
    'Launch se pehle apna rollback asal mein test kijiye. Ek harmless change release kijiye, use roll back kijiye, aur time kijiye. Jo rollback aapne kabhi try nahi kiya, woh sirf ek plan hai.',
  'A live URL, a support log, a funnel or cohort view, and a timed rollback test.':
    'Ek live URL, ek support log, ek funnel ya cohort view, aur ek timed rollback test.',
  'Do you have evidence from real users, not just demo traffic from your teammates?':
    'Kya aapke paas asli users ka evidence hai, sirf aapke teammates ka demo traffic nahi?',
  'A system that is beautifully evaluated but has never been used by anyone has not passed this stage yet.':
    'Jo system bahut achhe se evaluate hua hai lekin jise kisi ne use nahi kiya, woh is stage ko abhi paas nahi kar paya hai.',
  'Measure: optimize and quantify unit economics':
    'Measure: optimize kijiye aur unit economics quantify kijiye',
  'Apply targeted fixes, measure before and after, and show that the economics work at scale.':
    'Targeted fixes lagaiye, before aur after measure kijiye, aur dikhaiye ki economics scale par kaam karti hai.',
  'An optimisation means something only when you can see the difference it made. And viability means something only when you can also see the cost of each successful task.':
    'Optimisation tabhi kuch matlab rakhta hai jab aap dekh sakein ki usne kitna farq daala. Aur viability tabhi matlab rakhti hai jab aap har successful task ka cost bhi dekh sakein.',
  'Try reranking, restructuring the prompt, validating against a schema, caching, routing or trimming the context, wherever it makes sense. Then work out the model cost per successful task at low, base and high usage.':
    'Jahan sahi lage wahan reranking, prompt ko restructure karna, schema ke against validate karna, caching, routing ya context chhota karna try kijiye. Phir low, base aur high usage par har successful task ka model cost nikaliye.',
  'Change one thing at a time, and rerun the part of the evaluation that matters for it.':
    'Ek baar mein ek hi cheez badaliye, aur evaluation ka woh hissa dobara chalaiye jo uske liye zaroori hai.',
  'Keep a fix that improves one metric but makes another worse, and write down the trade-off. Then check what happens to your margin at ten times the volume.':
    'Aisa fix rakhiye jo ek metric sudhaarta hai lekin doosre ko bigaadta hai, aur trade-off likh lijiye. Phir check kijiye ki 10 guna volume par aapke margin ka kya hota hai.',
  'A before-and-after optimisation report, ADRs and a unit-economics model.':
    'Ek before-and-after optimisation report, ADRs aur ek unit-economics model.',
  'Which improvement is big enough to matter, statistically or in practice? And does revenue grow faster than the cost of running the model and supporting users?':
    'Kaun sa improvement itna bada hai ki matter kare, statistically ya practice mein? Aur kya revenue model chalane aur users ko support karne ke cost se tez badhta hai?',
  'Avoid “optimization theater”. Also avoid a model that works only at your current, subsidised scale.':
    '“Optimization theater” se bachiye. Aur aise model se bhi bachiye jo sirf aapke abhi ke subsidised scale par kaam karta hai.',
  'Iterate from evidence':
    'Evidence se iterate kijiye',
  'Ship one improvement that is based on evidence, and log the decision behind it.':
    'Evidence par based ek improvement ship kijiye, aur uske peeche ka decision mein likh dijiye.',
  'An iteration earns its place only when it is tied to a problem you measured, not a hunch.':
    'Ek iteration tabhi apni jagah kamata hai jab woh ek aisi problem se juda ho jise aapne measure kiya, kisi andaaze se nahi.',
  'Pick the lowest-scoring evidence question from the earlier stages, and ship one change aimed at it.':
    'Pichhle stages se sabse kam score wala evidence question chuniye, aur uske liye ek change ship kijiye.',
  'Compare the product and AI metrics before and after. Then write the decision into the decision log: the context, the options you considered, the approach you chose, the trade-offs, and what would make you reopen it.':
    'Product aur AI metrics ko before aur after compare kijiye. Phir decision ko decision log mein likhiye: context, jo options aapne socho, jo approach chuni, trade-offs, aur kya hone par aap ise dobara kholenge.',
  'Ask someone to push back on the iteration you shipped, and answer from the metric, not from opinion.':
    'Kisi se kahiye ki aapke ship kiye iteration par pushback kare, aur aap jawaab metric se dijiye, rai se nahi.',
  'A changelog and one filled-in decision-log entry.':
    'Ek changelog aur decision log ki ek bhari hui entry.',
  'Can you tie the iteration to a problem you measured, not a preference?':
    'Kya aap iteration ko ek measure ki hui problem se jod sakte hain, pasand se nahi?',
  'If the decision log is still empty at this stage, then every choice so far went undocumented. That’s the first thing a reviewer will ask about.':
    'Agar is stage tak bhi decision log khaali hai, toh ab tak ka har choice undocumented raha. Reviewer sabse pehle yahi poochega.',
  'Defend the system':
    'System ko defend kijiye',
  'Present the architecture, the evidence, the security, the cost, the viability and the risk that remains, to two different audiences.':
    'Architecture, evidence, security, cost, viability aur bacha hua risk, do alag audiences ke saamne rakhiye.',
  'The last skill this course tests is explaining and defending the system you built.':
    'Is course ka aakhri skill hai apne banaye system ko samjhana aur defend karna.',
  'Prepare a five-minute briefing for executives and a twenty-minute technical defence.':
    'Executives ke liye 5 minute ki briefing aur 20 minute ka technical defence taiyaar kijiye.',
  'Build a ten-slide deck and a public case study. Cover the problem and the evidence that it’s real. Then say what you built, whether it works, whether it’s safe, whether people use it, and whether it makes money. Finish with what failed, the trade-offs, and what you’re asking for next.':
    '10 slides ka deck aur ek public case study banaiye. Problem aur is baat ka evidence cover kijiye ki woh asli hai. Phir batayiye ki aapne kya banaya, kya woh kaam karta hai, kya woh safe hai, kya log use karte hain, aur kya usse paisa banta hai. Aakhir mein batayiye kya fail hua, trade-offs kya the, aur aap aage kya maang rahe hain.',
  'Ask a peer to challenge your model choice, your agent choice, your security and your cost assumptions.':
    'Kisi peer se kahiye ki woh aapka model choice, agent choice, security aur cost assumptions challenge kare.',
  'The final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck and public case study.':
    'Final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck aur public case study.',
  'Can you explain every major decision without saying “the framework handles it”?':
    'Kya aap har bade decision ko “framework sambhaal leta hai” kahe bina samjha sakte hain?',
  'This is the credential you carry into interviews and design reviews.':
    'Yahi woh credential hai jo aap interviews aur design reviews mein saath le jaate hain.',
  'When you are done':
    'Jab aap poora kar lein',
  'How do you know you’re finished? Check this list. You’re done when every line is true.':
    'Aapko kaise pata chalega ki aap khatam kar chuke hain? Yeh list check kijiye. Aap tab poora kar chuke hain jab har line sach ho.',
  'It runs on a machine that is not yours, at a live URL.':
    'Yeh ek aisi machine par chalta hai jo aapki nahi hai, ek live URL par.',
  'Anyone can rerun the tests and get the same numbers.':
    'Koi bhi tests dobara chala sakta hai aur wahi numbers paa sakta hai.',
  'You have broken it in at least three real ways, on purpose.':
    'Aapne ise kam se kam teen asli tareekon se, jaanbujhkar toda hai.',
  'Three of your fixes have before and after numbers.':
    'Aapke teen fixes ke before aur after numbers hain.',
  'You attacked your own safeguards and recorded what happened.':
    'Aapne apne hi safeguards par attack kiya aur record kiya ki kya hua.',
  'You know how to roll it back if something goes wrong, and you have timed it.':
    'Aapko pata hai ki kuch galat hone par ise roll back kaise karna hai, aur aapne use time kiya hai.',
  'Five to ten real users have used it, and you have their evidence, not a teammate’s.':
    '5 se 10 asli users ne ise use kiya hai, aur aapke paas unka evidence hai, kisi teammate ka nahi.',
  'You can state cost per successful task, and what happens to margin at ten times the volume.':
    'Aap cost per successful task bata sakte hain, aur yeh bhi ki 10 guna volume par margin ka kya hota hai.',
  'At least one iteration is tied to measured evidence, and logged as a decision.':
    'Kam se kam ek iteration measured evidence se juda hai, aur decision ke roop mein log hua hai.',
  'You can explain every major choice without saying “the framework handles that”.':
    'Aap har bade choice ko “framework yeh sambhaal leta hai” kahe bina samjha sakte hain.',
  'Final self-test':
    'Aakhri self-test',
  'One last exercise. Answer these from memory, out loud if you can. If you get stuck on one, go back to the chapter that covers it.':
    'Ek aakhri exercise. In sawaalon ke jawaab yaad se dijiye, ho sake toh zor se bolkar. Agar kisi par atak jaayein, toh us chapter par wapas jaiye jo use cover karta hai.',
  'Why is the model stateless?':
    'Model stateless kyun hai?',
  'Why can retrieval fail, and why do embeddings help?':
    'Retrieval fail kyun ho sakta hai, aur embeddings kyun madad karte hain?',
  'Why does retrieval never say “nothing here” on its own?':
    'Retrieval kabhi apne aap “yahan kuch nahi hai” kyun nahi kehta?',
  'Why is top-k a trade-off?':
    'Top-k ek trade-off kyun hai?',
  'When does a workflow beat an agent?':
    'Workflow agent se kab behtar hota hai?',
  'Why are tools a security boundary?':
    'Tools ek security boundary kyun hain?',
  'Why must evaluation come before release, and why does tracing matter?':
    'Evaluation release se pehle kyun aani chahiye, aur tracing kyun matter karti hai?',
  'How do you calculate cost per successful task, not per call?':
    'Cost per successful task kaise nikalte hain, per call nahi?',
  'What makes an AI specification different from a normal one?':
    'Ek AI specification normal specification se alag kyun hota hai?',
  'Who is your buyer, and does your price cover what the model costs you?':
    'Aapka buyer kaun hai, aur kya aapka price woh cover karta hai jo model aapko cost karta hai?',
  'What would make you kill this project rather than keep iterating on it?':
    'Kya hone par aap is project ko kill kar denge, bajaye iterate karte rehne ke?',
  'If you can answer all of these, you’ve done what the course set out to do. You can build an AI system, break it, measure it, and stand behind it.':
    'Agar aap in sabke jawaab de sakte hain, toh aapne woh kar liya jo course karna chahta tha. Aap ek AI system bana sakte hain, use tod sakte hain, measure kar sakte hain, aur uske peeche khade ho sakte hain.',
  'This was the last required chapter. Next, Track B begins with B1, on business models, pricing and unit economics. Later, B7 turns what you just built into stories for interviews. The appendices turn your artifacts into reusable portfolio templates.':
    'Yeh aakhri required chapter tha. Aage Track B shuru hota hai B1 se, jo business models, pricing aur unit economics ke baare mein hai. Baad mein B7 aapne jo abhi banaya use interviews ki kahaniyon mein badalta hai. Appendices aapke artifacts ko reusable portfolio templates mein badalte hain.',
  'Ship Bharat Privacy Guard, and write the findings document':
    'Bharat Privacy Guard ship kijiye, aur findings document likhiye',
  'This is the final capstone of the technical course. Everything you have made now comes together in one repository and one document. Keep the document plain and factual. A findings document that reads like a brochure is not doing its job. Describe the project as “a privacy tool that helps an organisation collect and share less personal data”, and never as making anyone compliant.':
    'Yeh technical course ka final capstone hai. Aapne jo kuch bhi banaya hai, ab woh ek repository aur ek document mein ek saath aata hai. Document ko saaf aur factual rakhiye. Jo findings document brochure jaisa padhta hai, woh apna kaam nahi kar raha. Project ko is tarah describe kijiye: “ek privacy tool jo kisi organisation ko kam personal data collect aur share karne mein madad karta hai”, aur kabhi yeh mat kahiye ki yeh kisi ko compliant banata hai.',
  'Your repository, for the working system and its README, plus a written findings document. Both together are what you hand in.':
    'Aapki repository, chalte hue system aur uske README ke liye, aur ek likha hua findings document. Dono milkar hi aapka hand in hain.',
  'Make the repository work on a clean machine. Someone else must be able to clone it, follow the README and run the answer key.':
    'Repository ko ek clean machine par chalne laayak banaiye. Koi aur ise clone kar sake, README follow kar sake aur answer key chala sake.',
  'Add the architecture diagram and the decision log.':
    'Architecture diagram aur decision log jodiye.',
  'Add the final answer key and the scoreboard before and after your fixes.':
    'Final answer key aur apne fixes se pehle aur baad ka scoreboard jodiye.',
  'Add the results of the attacks you tried in Chapter 13, and some sample traces.':
    'Chapter 13 mein jo attacks aapne try kiye, unke results aur kuch sample traces jodiye.',
  'Add the cost and speed at your expected volume, and what changes at ten times the volume.':
    'Apne expected volume par cost aur speed jodiye, aur yeh bhi ki 10 guna volume par kya badalta hai.',
  'Add the requirements, the risk register, the system card and the rollout and rollback plan.':
    'Requirements, risk register, system card aur rollout aur rollback plan jodiye.',
  'Write the findings document: what you built, what broke, who used it and what the evidence shows. Include three failures you found yourself, each with evidence, and three fixes, each with numbers from before and after.':
    'Findings document likhiye: aapne kya banaya, kya toota, kisne use kiya aur evidence kya dikhata hai. Teen failures shaamil kijiye jo aapne khud dhoondhe, har ek evidence ke saath, aur teen fixes, har ek ke before aur after numbers ke saath.',
  'End with what remains risky and what is deliberately out of scope, such as other Indian languages, the gateway and the browser extension.':
    'End mein likhiye ki kya risky bacha hai aur kya jaanbujhkar scope se bahar hai, jaise doosri Indian languages, gateway aur browser extension.',
  'A repository that works on a clean machine.':
    'Ek repository jo clean machine par chalti hai.',
  'Three failures you found yourself, each with evidence.':
    'Teen failures jo aapne khud dhoondhe, har ek evidence ke saath.',
  'Three fixes, each with before and after numbers.':
    'Teen fixes, har ek ke before aur after numbers ke saath.',
  'The cost per message, and what happens to it at ten times the volume.':
    'Cost per message, aur 10 guna volume par uska kya hota hai.',
  'A five-minute explanation a non-technical leader could repeat, and a twenty-minute one that an engineer could not easily poke holes in.':
    'Ek 5 minute ki explanation jo koi non-technical leader dohra sake, aur ek 20 minute ki jisme koi engineer aasani se chhed na nikaal sake.'
});
