/* Hinglish: p16 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Tool calling and workflows: contracts before agents':
    'Tool calling aur workflows: agents se pehle contracts',
  'A tool lets the model do something real, so you must decide exactly what it may do and who checks it. You will write tool contracts, enforce permissions on the server, and prefer fixed workflows before allowing an agent.':
    'Tool model ko kuchh asli karne deta hai, isliye aapko theek tay karna hoga ki woh kya kar sakta hai aur kaun check karta hai. Aap tool contracts likhenge, server par permissions laagu karenge, aur agent ki ijaazat dene se pehle fixed workflows ko prathmikta denge.',
  'Say when a fixed workflow is better than letting the model decide.':
    'Batana ki fixed workflow model ko faisla karne dene se kab behtar hai.',
  'Name the checks that must happen before an important action runs.':
    'Un checks ka naam lena jo kisi zaroori action ke chalne se pehle hone chahiye.',
  'Build an approval flow where the assistant can prepare a purchase request but can never send it. The key number is how often the model proposes the correct action when it is not allowed to act.':
    'Aisa approval flow banaiye jahan assistant purchase request taiyaar kar sake lekin kabhi bhej na sake. Key number yeh hai ki action ki ijaazat na hone par model kitni baar sahi action suggest karta hai.',
  'Write separate tool contracts for the draft action and the submit action.':
    'Draft action aur submit action ke liye alag tool contracts likhiye.',
  'Enforce the split on the server: the submit tool is not in the model’s allowed list at all.':
    'Server par yeh bantwaara laagu kijiye: submit tool model ki allowed list mein hai hi nahi.',
  'Add a human approval step, with an audit record of who approved what.':
    'Ek human approval step jodiye, kisne kya manzoor kiya iske audit record ke saath.',
  'Run twenty realistic requests, and record how often the proposed action was correct.':
    'Bees realistic requests chalaiye, aur record kijiye ki suggest kiya action kitni baar sahi tha.',
  'Test a malformed argument, an unauthorised request and a timeout. Record what the user saw each time.':
    'Ek kharaab argument, ek bina-ijaazat request aur ek timeout test kijiye. Har baar user ne kya dekha record kijiye.',
  'The model cannot submit, even if it asks to.':
    'Model submit nahi kar sakta, maange tab bhi.',
  'You have a measured figure for how often the proposed action was correct.':
    'Suggest kiya action kitni baar sahi tha, iska aapke paas naapa hua figure hai.',
  'A schema makes the format reliable':
    'Schema format bharosemand banata hai',
  'From Chapter 8. A tool contract applies the same idea to actions.':
    'Chapter 8 se. Tool contract wahi idea actions par lagaata hai.',
  'From Chapter 2. Now it can invent arguments to a real action.':
    'Chapter 2 se. Ab yeh asli action ke arguments bana sakta hai.',
  'Open your experiment harness from Chapter 21 and the agent loop from Chapter 9.':
    'Chapter 21 ka apna experiment harness aur Chapter 9 ka agent loop kholiye.',
  'A <strong>tool</strong> lets the model do something real: look up an invoice, send an email or change a record. So the question is not whether it can, but what exactly it may do, with what data, and who checks.':
    '<strong>Tool</strong> model ko kuchh asli karne deta hai: invoice dhoondhna, email bhejna ya record badalna. Isliye sawaal yeh nahi ki woh kar sakta hai ya nahi, balki woh theek kya kar sakta hai, kis data ke saath, aur kaun check karta hai.',
  'An everyday comparison: a bank teller can look up your balance, but cannot approve a loan alone or send money on a customer’s word. The rule exists because some actions have consequences outside the bank, not because tellers are untrustworthy.':
    'Rozmarra ki tulna: bank teller aapka balance dekh sakta hai, lekin akele loan manzoor nahi kar sakta ya customer ke kehne par paise nahi bhej sakta. Yeh niyam isliye hai kyunki kuchh actions ke nateeje bank ke bahar jaate hain, isliye nahi ki tellers par bharosa nahi.',
  'Human-in-the-loop is an architecture boundary that the system enforces, not just a confirmation popup.':
    'Human-in-the-loop ek architecture seema hai jise system laagu karta hai, sirf ek confirmation popup nahi.',
  'Prefer a fixed workflow':
    'Fixed workflow ko prathmikta dijiye',
  'A fixed workflow is often safer than an agent. If you know the sequence of steps, fix it in code and let the model handle only the part that needs judgement.':
    'Fixed workflow aksar agent se zyada surakshit hota hai. Agar aapko steps ka kram pata hai, to use code mein fix kijiye aur model ko sirf woh hissa sambhaalne dijiye jisme judgement chahiye.',
  'Tool checklist':
    'Tool checklist',
  'Run this checklist on every tool before it ships. Each line has caused a real incident somewhere.':
    'Har tool ship hone se pehle yeh checklist chalaiye. Har line ne kahin na kahin asli incident paida kiya hai.',
  'The name is clear and the description is accurate. The model reads both.':
    'Naam saaf hai aur description sahi hai. Model dono padhta hai.',
  'Parameters are constrained: use an enum instead of free text where possible.':
    'Parameters seemit hain: jahan sambhav ho free text ki jagah enum use kijiye.',
  'Side effects are stated explicitly.':
    'Side effects saaf bataaye gaye hain.',
  'Permissions are enforced on the server, not by asking the model.':
    'Permissions server par laagu hain, model se poochh kar nahi.',
  'You have considered idempotency: what happens if the call runs twice.':
    'Aapne idempotency socha hai: call do baar chale to kya hota hai.',
  'Errors are returned in a structured format.':
    'Errors structured format mein lautaaye jaate hain.',
  'Audit data is recorded.':
    'Audit data record hota hai.',
  'Give the model a tool only when its choice adds value. Every tool adds attack surface, latency, cost and failure modes.':
    'Model ko tool tabhi dijiye jab uski choice value jode. Har tool attack surface, latency, cost aur failure modes jodta hai.',
  'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.':
    'Support assistant ko diye jaane wale tools list kijiye. Phir har woh tool kaatiye jahan fixed rule 95% se zyada baar sahi chunega.',
  'Tools: … Crossed out: … Left: …':
    'Tools: … Kaate: … Bache: …',
  'What remains is the set where the model’s judgement is worth the risk. It is usually much shorter than the first list.':
    'Jo bachta hai woh set hai jahan model ka judgement risk ke laayak hai. Yeh aam taur par pehli list se kaafi chhota hota hai.',
  'Next, Chapter 26 lets the model control the sequence of steps: an agent.':
    'Aage, Chapter 26 model ko steps ka kram control karne deta hai: ek agent.',
  'Agents: loops, stopping conditions and control':
    'Agents: loops, rukne ki sharten aur control',
  'An agent chooses actions, checks the results and continues toward a goal. The hard part is control, not intelligence. You will build a bounded agent, add stopping conditions, and measure it against the fixed workflow from Chapter 25.':
    'Agent actions chunta hai, results check karta hai aur lakshya ki taraf badhta rehta hai. Mushkil hissa control hai, samajhdaari nahi. Aap ek seemit agent banayenge, rukne ki sharten jodenge, aur use Chapter 25 ke fixed workflow ke against naapenge.',
  'An agent measured against the workflow it would replace':
    'Jis workflow ki jagah le, uske against naapa gaya agent',
  'Build an agent that searches your documents, calculates one fixed metric and gives a cited answer. Then test whether it beats the fixed workflow from Chapter 25.':
    'Aisa agent banaiye jo aapke documents search kare, ek fixed metric nikaale aur cite kiya jawab de. Phir test kijiye ki kya yeh Chapter 25 ke fixed workflow ko harata hai.',
  'Set limits: maximum steps, a timeout, and an exit for “cannot resolve”.':
    'Seemayein tay kijiye: maximum steps, ek timeout, aur “hal nahi ho sakta” ke liye exit.',
  'For each, record tool-selection accuracy, number of calls, response time and cost.':
    'Har ek ke liye tool-selection accuracy, calls ki sankhya, response time aur cost record kijiye.',
  'Write one paragraph recommending one of them, including the numbers.':
    'Ek paragraph likhiye jo numbers samet un mein se ek ki salaah de.',
  'You have four numbers for each system.':
    'Har system ke liye aapke paas chaar numbers hain.',
  'Tool contracts and fixed workflows':
    'Tool contracts aur fixed workflows',
  'Chapter 25 built the workflow the agent is compared against.':
    'Chapter 25 ne woh workflow banaya jiske against agent ki tulna hoti hai.',
  'From Chapter 1. A loop multiplies that by the number of steps.':
    'Chapter 1 se. Loop ise steps ki sankhya se guna karta hai.',
  'Have the workflow from Chapter 25 and its twenty test tasks ready. You will run the same tasks through an agent.':
    'Chapter 25 ka workflow aur uske bees test tasks taiyaar rakhiye. Aap wahi tasks ek agent se chalaayenge.',
  'An <strong>agent</strong> is a system that repeats a loop on its own: decide, act, check the result, decide again. Every loop also needs a way to stop, and most problems come from the stopping, not from how capable the model is.':
    '<strong>Agent</strong> ek system hai jo khud ek loop dohrata hai: faisla, action, result check, phir faisla. Har loop ko rukne ka tareeka bhi chahiye, aur zyadatar problems rukne se aati hain, model ki kshamata se nahi.',
  'An everyday comparison: you send a junior colleague to find one number. A good outcome is that they return in ten minutes with the number, or say they could not find it. A bad outcome is that they are still searching three hours later.':
    'Rozmarra ki tulna: aap ek junior colleague ko ek number dhoondhne bhejte hain. Achha nateeja yeh hai ki woh das minute mein number lekar lautein, ya kahein ki nahi mila. Bura nateeja yeh hai ki woh teen ghante baad bhi dhoondh rahe hon.',
  'An agent is a loop: the loop itself is the architecture.':
    'Agent ek loop hai: loop hi architecture hai.',
  'Agent failures are control failures':
    'Agent failures control failures hain',
  'Most agent failures are control problems. The model did not get worse; it was given unlimited chances to be wrong.':
    'Zyadatar agent failures control problems hain. Model bigda nahi; use galat hone ke anginat mauke diye gaye.',
  'Agent patterns':
    'Agent patterns',
  'Start with one model and a short list of tools. Add a second agent only when you have measured something the simpler version cannot do. Extra complexity is a cost, not an achievement.':
    'Ek model aur tools ki chhoti list se shuru kijiye. Doosra agent tabhi jodiye jab aapne kuchh aisa naapa ho jo simple version nahi kar sakta. Extra complexity ek keemat hai, uplabdhi nahi.',
  'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.':
    'Apne Chapter 25 workflow ke bees tasks agent se chalaiye. Giniye ki usne kitne sahi kiye, kitni tool calls kin, aur cost kya aayi.',
  'Correct: … Tool calls: … Cost: … Compared with the workflow: …':
    'Sahi: … Tool calls: … Cost: … Workflow ke muqaable: …',
  'If the agent is not clearly better on a metric you care about, the workflow wins. That is a valid and respectable result to bring to a review.':
    'Agar agent aapke kisi zaroori metric par saaf behtar nahi, to workflow jeet-ta hai. Review mein le jaane ke liye yeh valid aur samaanjanak nateeja hai.',
  'Next, Chapter 27 looks at standards for connecting tools and agents.':
    'Aage, Chapter 27 tools aur agents ko jodne ke standards dekhta hai.',
  'MCP and interoperability: standard connections to tools':
    'MCP aur interoperability: tools se standard connections',
  'MCP is a standard way for AI applications to connect to tools and data. You will map how it works, see what a standard does not make safe, and classify tools by what they are allowed to change.':
    'MCP AI applications ko tools aur data se jodne ka standard tareeka hai. Aap map karenge ki yeh kaise kaam karta hai, dekhenge ki standard kya surakshit nahi banata, aur tools ko is hisaab se classify karenge ki unhe kya badalne ki ijaazat hai.',
  'Draw the host, client, server and resource flow, and mark where consent and authorisation happen.':
    'Host, client, server aur resource flow draw karna, aur mark karna ki consent aur authorisation kahan hote hain.',
  'Explain why a standard interface to an unsafe tool is still unsafe.':
    'Samjhaana ki asurakshit tool ka standard interface bhi asurakshit kyun hai.',
  'Write a tool access policy for an AI assistant in a government setting, where “it seemed helpful” is not an acceptable reason for an action. The policy is the deliverable; the classification is the thinking.':
    'Sarkaari setting mein ek AI assistant ke liye tool access policy likhiye, jahan “madadgaar laga” kisi action ka sweekaar kaaran nahi. Policy deliverable hai; classification soch hai.',
  'Classify every tool as read-only, reversible write, irreversible write, privileged or prohibited.':
    'Har tool ko read-only, reversible write, irreversible write, privileged ya prohibited classify kijiye.',
  'For each class, state the authorisation required, and whether a person must confirm.':
    'Har class ke liye zaroori authorisation bataiye, aur kya insaan ko confirm karna hai.',
  'Build the authorisation matrix: roles down the side, tool classes across the top.':
    'Authorisation matrix banaiye: roles side mein, tool classes upar.',
  'Mark the trust boundary on your diagram, and say which component enforces it.':
    'Apne diagram par trust boundary mark kijiye, aur bataiye kaunsa component use laagu karta hai.',
  'Every irreversible action has a confirmation step.':
    'Har irreversible action mein confirmation step hai.',
  'The enforcing component is named, and it is not the model.':
    'Laagu karne wale component ka naam hai, aur woh model nahi.',
  'A tool has a typed contract':
    'Tool ka typed contract hota hai',
  'From Chapter 25. MCP standardises how that contract is published.':
    'Chapter 25 se. MCP standardise karta hai ki woh contract kaise prakaashit hota hai.',
  'Permissions are enforced on the server':
    'Permissions server par laagu hoti hain',
  'Also from Chapter 25, and still true across a protocol.':
    'Yeh bhi Chapter 25 se, aur protocol ke paar bhi sach.',
  'No new setup is needed to follow the ideas. The hands-on units show a small working example.':
    'Ideas follow karne ke liye naya setup nahi chahiye. Hands-on units ek chhota chalta example dikhate hain.',
  '<strong>MCP</strong> (Model Context Protocol) is a standard for connecting AI applications to tools and data sources. You will probably never build one, but you need to know what it does and does not cover.':
    '<strong>MCP</strong> (Model Context Protocol) AI applications ko tools aur data sources se jodne ka standard hai. Shayad aap kabhi ek nahi banayenge, lekin aapko jaanna chahiye ki yeh kya cover karta hai aur kya nahi.',
  'An everyday comparison: a plug socket is a standard. Any appliance fits the wall. The standard does not promise the appliance is safe, or decide who may switch it on.':
    'Rozmarra ki tulna: plug socket ek standard hai. Koi bhi appliance deewar mein fit hota hai. Standard yeh vaada nahi karta ki appliance surakshit hai, ya yeh tay nahi karta ki use kaun chaalu kar sakta hai.',
  'The specification defines a host, a client and a server, with standard building blocks: resources, prompts and tools. It also discusses security and user consent explicitly, which is worth reading. Agent-to-agent protocols are developing separately, for agents that exchange tasks rather than for a model that calls a tool.':
    'Specification ek host, client aur server define karta hai, standard building blocks ke saath: resources, prompts aur tools. Yeh security aur user consent par bhi saaf charcha karta hai, jo padhne laayak hai. Agent-to-agent protocols alag se viksit ho rahe hain, un agents ke liye jo tasks ka len-den karte hain, na ki tool call karne wale model ke liye.',
  'A standard does not make a tool safe':
    'Standard tool ko surakshit nahi banata',
  'A standard tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should be allowed.':
    'Standard tool interface asurakshit tool ko surakshit nahi banata. Protocol call le jaata hai; yeh tay nahi karta ki call ki ijaazat honi chahiye ya nahi.',
  'A common mix-up: MCP is a <strong>protocol</strong>, not a framework that builds agents. It standardises the connection. What gets connected, and who may use it, is still your design.':
    'Ek aam uljhan: MCP ek <strong>protocol</strong> hai, agents banaane wala framework nahi. Yeh connection ko standardise karta hai. Kya joda jaata hai, aur kaun use kar sakta hai, yeh ab bhi aapka design hai.',
  'Agent-to-agent protocols add another layer, so agents can find each other and exchange tasks and results. For product decisions, focus on identity, delegation, trust, permissions, error handling and observability rather than on the message fields.':
    'Agent-to-agent protocols ek aur layer jodte hain, taaki agents ek-doosre ko dhoondh sakein aur tasks aur results ka len-den kar sakein. Product faislon ke liye message fields ki jagah identity, delegation, trust, permissions, error handling aur observability par dhyaan dijiye.',
  'Classify five tools from a system you know as read-only, reversible write, irreversible write, privileged or prohibited.':
    'Kisi jaane system ke paanch tools ko read-only, reversible write, irreversible write, privileged ya prohibited classify kijiye.',
  'Tool — class — why':
    'Tool — class — kyun',
  'The line between reversible and irreversible is where human confirmation belongs. If a tool was hard to place, it probably needs a smaller scope.':
    'Reversible aur irreversible ke beech ki line hi woh jagah hai jahan human confirmation chahiye. Agar koi tool rakhna mushkil tha, to shayad use chhote scope ki zaroorat hai.',
  'Next, Chapter 28 changes the type of input, from text to documents, images and audio, while keeping the same context and evaluation design.':
    'Aage, Chapter 28 input ka type text se documents, images aur audio mein badalta hai, wahi context aur evaluation design rakhte hue.',
  'Multimodal AI: documents, images and voice':
    'Multimodal AI: documents, images aur voice',
  'When the input is a PDF, an image or audio, the architecture stays the same: context, tools, retrieval and evaluation. What changes is what counts as evidence and how you trace it. You will find what text extraction loses and design a voice pipeline.':
    'Jab input PDF, image ya audio ho, architecture wahi rehta hai: context, tools, retrieval aur evaluation. Badalta yeh hai ki saboot kya maana jaata hai aur use kaise trace karte hain. Aap dhoondhenge ki text extraction kya khota hai aur ek voice pipeline design karenge.',
  'Draw a voice pipeline and mark the steps that affect response time.':
    'Voice pipeline draw karna aur response time par asar daalne wale steps mark karna.',
  'Say where the answer key for a multimodal question must come from.':
    'Batana ki multimodal sawaal ki answer key kahan se aani chahiye.',
  'Specify a voice assistant for meeting follow-up':
    'Meeting follow-up ke liye voice assistant specify kijiye',
  'The technology is the easier half. Specify the half that gets systems stopped in review: privacy boundaries, retention, attribution and what a person must confirm.':
    'Technology aasaan aadha hai. Woh aadha specify kijiye jo systems ko review mein rokta hai: privacy seemayein, retention, attribution aur insaan ko kya confirm karna hai.',
  'Define the privacy boundary: whose audio, recorded where, with what notice.':
    'Privacy seema define kijiye: kiska audio, kahan record hua, kis soochna ke saath.',
  'Set how long transcripts are kept, and how they are deleted.':
    'Tay kijiye ki transcripts kitne samay rakhe jaate hain, aur kaise delete hote hain.',
  'Specify speaker attribution, and what happens when it is uncertain.':
    'Speaker attribution specify kijiye, aur anishchit hone par kya hota hai.',
  'Specify task extraction: what becomes an action item, and what confirmation is needed.':
    'Task extraction specify kijiye: kya action item banta hai, aur kya confirmation chahiye.',
  'Attribution has a measured accuracy figure and a defined behaviour when uncertain.':
    'Attribution ka naapa hua accuracy figure hai aur anishchit hone par tay behaviour.',
  'Scanned documents need images, not just text':
    'Scan kiye documents ko sirf text nahi, images chahiye',
  'Chapter 16 covered this for images of text.':
    'Chapter 16 ne ise text ki images ke liye cover kiya.',
  'The answer key has to come from somewhere':
    'Answer key kahin se aani chahiye',
  'From Chapter 6. For a table or an image, it comes from a person.':
    'Chapter 6 se. Table ya image ke liye yeh insaan se aati hai.',
  'Find one real PDF with a table, and one short audio recording you are allowed to use.':
    'Table wala ek asli PDF, aur ek chhoti audio recording dhoondhiye jise use karne ki ijaazat ho.',
  'A PDF contains text, layout, tables, images and hidden metadata. Extracting only the words flattens most of that, without any error.':
    'PDF mein text, layout, tables, images aur chhupa metadata hota hai. Sirf shabd nikaalna bina kisi error ke iska zyadatar hissa chapta kar deta hai.',
  'An everyday comparison: photograph a railway timetable and read only the words, in order, to someone on the phone. They hear every station name but no useful departure times, because the meaning was in the columns.':
    'Rozmarra ki tulna: railway timetable ki photo lijiye aur phone par kisi ko kram se sirf shabd padh kar sunaaiye. Woh har station ka naam sunte hain lekin koi kaam ka departure time nahi, kyunki matlab columns mein tha.',
  'Voice is a pipeline':
    'Voice ek pipeline hai',
  'A voice system is a pipeline, not one model. Each stage adds delay, and each stage is a place where meaning can change.':
    'Voice system ek pipeline hai, ek model nahi. Har charan deri jodta hai, aur har charan par matlab badal sakta hai.',
  'Each stage has a name: reading text from an image (OCR), turning speech into text (transcription), and working out who said what (speaker attribution). Each is a step where meaning can be lost, so each needs its own check.':
    'Har charan ka naam hai: image se text padhna (OCR), bolne ko text mein badalna (transcription), aur kisne kya kaha pata lagaana (speaker attribution). Har ek aisa step hai jahan matlab kho sakta hai, isliye har ek ko apna check chahiye.',
  'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk at once?':
    'Meeting assistant ke liye: kisne kya kaha, transcript kitne samay rakha jaata hai, aur do log ek saath bolein to kya hota hai?',
  'Attribution … retention … overlapping speech …':
    'Attribution … retention … overlapping speech …',
  'Speaker attribution looks like a technical detail, but it behaves like a privacy decision.':
    'Speaker attribution technical detail jaisa dikhta hai, lekin privacy faisle ki tarah behave karta hai.',
  'Next, Chapter 29 builds a systematic way to prove whether all these components work.':
    'Aage, Chapter 29 yeh saabit karne ka vyavasthit tareeka banata hai ki yeh saare components kaam karte hain ya nahi.',
  'Evaluation engineering: test sets and release gates':
    'Evaluation engineering: test sets aur release gates',
  'Chapter 6 taught you to measure. This chapter turns measurement into a release process: a versioned test set, scores at several levels, and a gate that decides whether a change ships.':
    'Chapter 6 ne naapna sikhaya. Yeh chapter naapne ko release process mein badalta hai: version wala test set, kai levels par scores, aur ek gate jo tay karta hai ki badlaav ship hoga ya nahi.',
  'Build a versioned test set that still works after a prompt, model or index change.':
    'Aisa version wala test set banaana jo prompt, model ya index badalne ke baad bhi kaam kare.',
  'Score at several levels, so a good final number cannot hide a broken component.':
    'Kai levels par score karna, taaki achha final number toote component ko chhupa na sake.',
  'Say where an LLM judge is acceptable and where it is not.':
    'Batana ki LLM judge kahan sweekaar hai aur kahan nahi.',
  'The release gate makes every other measurement in Part V matter. Without it, evaluation is a report nobody has to act on.':
    'Release gate Part V ke har doosre measurement ko maayne deta hai. Iske bina evaluation ek report hai jis par kisi ko kaam nahi karna.',
  'Set the quality threshold: the metric, the test set and the number.':
    'Quality threshold tay kijiye: metric, test set aur number.',
  'Set the safety threshold, including the attack success rate.':
    'Safety threshold tay kijiye, attack success rate samet.',
  'Set the response-time target and the cost limit per task.':
    'Har task ke liye response-time lakshya aur cost limit tay kijiye.',
  'Set the regression tolerance: how much may a previously passing case get worse?':
    'Regression tolerance tay kijiye: pehle pass hone wala case kitna bigad sakta hai?',
  'Define the rollback trigger, and who is allowed to use it.':
    'Rollback trigger define kijiye, aur kaun use use kar sakta hai.',
  'Answer keys, recall and precision':
    'Answer keys, recall aur precision',
  'Chapter 6 built the measurement this chapter scales up.':
    'Chapter 6 ne woh measurement banaya jise yeh chapter bada karta hai.',
  'Chapter 14 introduced the judge and its biases.':
    'Chapter 14 ne judge aur uske biases introduce kiye.',
  'Improvement comes from reading failures by hand':
    'Sudhaar failures haath se padhne se aata hai',
  'From Chapter 14.5. Automation does not replace it.':
    'Chapter 14.5 se. Automation iski jagah nahi le sakta.',
  'Bring your Chapter 6 answer key, your Chapter 14 judge and your experiment harness.':
    'Apni Chapter 6 answer key, Chapter 14 judge aur experiment harness le aaiye.',
  'This chapter turns your answer key into the process that decides whether a change ships: a fixed set of questions, a consistent way of grading, and a pass mark set in advance. After that, “the demo looked better” is no longer an argument.':
    'Yeh chapter aapki answer key ko us process mein badalta hai jo tay karta hai ki badlaav ship hoga ya nahi: sawaalon ka fixed set, grading ka ek jaisa tareeka, aur pehle se tay pass mark. Iske baad “demo behtar laga” tark nahi rehta.',
  'An everyday comparison: a school does not judge a student on one good answer. Everyone sits the same paper, it is marked the same way, and the pass mark is agreed beforehand.':
    'Rozmarra ki tulna: school ek achhe jawab se student ko nahi parakhta. Sab ek hi paper dete hain, ek hi tarah jaanche jaate hain, aur pass mark pehle se tay hota hai.',
  'Every AI feature needs a test set, and the test set needs a version number. An evaluation you cannot rerun after a change is only an anecdote.':
    'Har AI feature ko test set chahiye, aur test set ko version number chahiye. Jo evaluation badlaav ke baad dobara na chal sake woh sirf ek kissa hai.',
  'A judge is another probabilistic component, so measure how often it agrees with people.':
    'Judge ek aur probabilistic component hai, isliye naapiye ki woh logon se kitni baar sehmat hota hai.',
  'Measure at several levels':
    'Kai levels par naapiye',
  'Evaluate several levels at once. A good end-to-end score can hide a badly broken retriever, because a fluent model can cover for missing evidence often enough to look fine in a demo.':
    'Ek saath kai levels evaluate kijiye. Achha end-to-end score bure tarah toote retriever ko chhupa sakta hai, kyunki fluent model missing saboot ko itni baar dhak sakta hai ki demo mein theek lage.',
  'Evaluation tools answer three questions. <strong>What do we test on?</strong> A fixed set you keep, with real cases where possible. <strong>Who grades it?</strong> An exact check where possible, a person where it matters, and a model where neither scales. <strong>What score lets it ship?</strong> Every evaluation product you see is selling an answer to one of these.':
    'Evaluation tools teen sawaalon ka jawab dete hain. <strong>Kis par test karte hain?</strong> Aapka rakha fixed set, jahan sambhav ho asli cases ke saath. <strong>Kaun grade karta hai?</strong> Jahan sambhav ho exact check, jahan maayne rakhe insaan, aur jahan dono na chalein wahan model. <strong>Kaunsa score ship karne deta hai?</strong> Har evaluation product in mein se kisi ek ka jawab bech raha hai.',
  'Write the sentence that stops a release. Not a policy: the actual sentence, with numbers, that you would say in the meeting.':
    'Woh sentence likhiye jo release rokta hai. Policy nahi: numbers ke saath woh asli sentence jo aap meeting mein kahenge.',
  'We are not shipping because …':
    'Hum ship nahi kar rahe kyunki …',
  'If your sentence contains the word “seems”, it will not stop anything. Thresholds stop releases; impressions do not.':
    'Agar aapke sentence mein “lagta hai” hai, to woh kuchh nahi rokega. Thresholds release rokte hain; impressions nahi.',
  'Next, Chapter 30 covers how to observe the system continuously once it is live.':
    'Aage, Chapter 30 batata hai ki live hone ke baad system ko lagaataar kaise dekhein.'

});
