/* Hinglish: p15 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Software basics for AI work: Python, HTTP, Git and tests':
    'AI kaam ke liye software ki buniyaad: Python, HTTP, Git aur tests',
  'An AI system is a software system with one unpredictable part. This chapter covers the software you need around it: Python, HTTP and JSON, secrets, Git, logs and tests. You will also build an experiment harness to reuse for the rest of Part V.':
    'AI system ek software system hai jiska ek hissa anumaan se bahar hai. Yeh chapter uske aas-paas zaroori software cover karta hai: Python, HTTP aur JSON, secrets, Git, logs aur tests. Aap ek experiment harness bhi banayenge jise Part V bhar dobara use karenge.',
  'Read a request, a response, a status code and a stack trace with confidence.':
    'Request, response, status code aur stack trace ko bharose se padhna.',
  'Explain why an AI system is a software system with one probabilistic part.':
    'Samjhaana ki AI system ek probabilistic hisse wala software system kyun hai.',
  'Name where the engineering risk actually sits in an AI feature.':
    'Batana ki AI feature mein engineering risk asal mein kahan baitha hai.',
  'Create a Git repository, commit the harness, and write a README that explains how to run it on a clean machine.':
    'Git repository banaiye, harness commit kijiye, aur ek README likhiye jo saaf machine par ise chalaana samjhaaye.',
  'You have made them since Chapter 1. This chapter covers the software around them.':
    'Aap Chapter 1 se inhe bana rahe hain. Yeh chapter unke aas-paas ka software cover karta hai.',
  'So a harness that records usage is worth building once.':
    'Isliye usage record karne wala harness ek baar banaane laayak hai.',
  'Open a new notebook, or a local folder if you prefer. You will build an experiment harness in this chapter and keep adding to it until Chapter 34.':
    'Ek naya notebook kholiye, ya chahein to ek local folder. Aap is chapter mein ek experiment harness banayenge aur Chapter 34 tak usme jodte rahenge.',
  'So far you have looked mostly at the model. This chapter covers the ordinary software around it. When an engineer shows you a system diagram, you should recognise the parts.':
    'Ab tak aapne zyadatar model dekha. Yeh chapter uske aas-paas ka aam software cover karta hai. Jab koi engineer system diagram dikhaye, to aapko uske hisse pehchaanne chahiye.',
  'An everyday comparison: when you order food in an app, your tap sends a message to a restaurant, a reply comes back with a price, and your screen updates. It looks mysterious only until you see the messages.':
    'Rozmarra ki tulna: jab aap app se khaana order karte hain, aapka tap restaurant ko message bhejta hai, price ke saath reply aata hai, aur aapki screen update hoti hai. Yeh tabhi tak rahasyamay lagta hai jab tak aap messages nahi dekhte.',
  'Applied AI work involves APIs, Python, cloud services, retrieval, evaluation and production systems. You cannot question an architecture if JSON, HTTP, environment variables, tests and logs are unfamiliar. This chapter covers the minimum.':
    'Applied AI kaam mein APIs, Python, cloud services, retrieval, evaluation aur production systems shaamil hain. Agar JSON, HTTP, environment variables, tests aur logs anjaane hain, to aap architecture par sawaal nahi utha sakte. Yeh chapter nyuntam cover karta hai.',
  'An AI system is a software system with a probabilistic part. Everything that goes wrong in normal software still applies, plus one more failure that produces no error.':
    'AI system ek probabilistic hisse wala software system hai. Aam software mein galat hone wala sab kuchh ab bhi laagu hai, aur ek aur failure jo koi error nahi deta.',
  'Hands-on units':
    'Hands-on units',
  'Use Python as your lab notebook. The goal is to express an experiment precisely, not to master the language.':
    'Python ko apni lab notebook ki tarah use kijiye. Lakshya experiment ko sateek roop se likhna hai, language mein maahir hona nahi.',
  'Contracts fail silently':
    'Contracts chupchaap fail hote hain',
  'An AI application relies on many assumptions about data: this field will be present, it will be a number, the list will not be empty. These are <strong>contracts</strong>, and in production each one will eventually be broken.':
    'AI application data ke baare mein kai maanyataon par tika hota hai: yeh field maujood hoga, yeh number hoga, list khaali nahi hogi. Yeh <strong>contracts</strong> hain, aur production mein har ek kabhi na kabhi tootega.',
  'Production systems must detect a broken contract instead of carrying on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.':
    'Production systems ko toota contract pakadna chahiye, aage badhte rehne ki jagah. Kai asli AI incidents aise dikhte hain: kisi ne error nahi diya, aur jawab missing data par bana.',
  'What “enough” means':
    '“Kaafi” ka matlab kya hai',
  'You do not need to become a backend engineer. You have enough when you are comfortable with all of these:':
    'Aapko backend engineer banne ki zaroorat nahi. Aapke paas kaafi hai jab aap in sab ke saath sahaj hain:',
  'Writing a small function, and keeping a few labelled values together in a dictionary.':
    'Ek chhota function likhna, aur kuchh label wali values ko ek dictionary mein saath rakhna.',
  '<strong>Status codes:</strong> 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.':
    '<strong>Status codes:</strong> 200 matlab kaam hua, 4xx matlab request galat thi, aur 5xx matlab server fail hua.',
  '<strong>JSON:</strong> labels and values, the format most systems use to exchange data.':
    '<strong>JSON:</strong> labels aur values, woh format jisme zyadatar systems data ka len-den karte hain.',
  'Keeping a password or API key out of your code, in an environment variable instead.':
    'Password ya API key ko code se bahar, ek environment variable mein rakhna.',
  'Saving your work in Git so you can go back to an earlier version.':
    'Apna kaam Git mein save karna taaki pichhle version par ja sakein.',
  'Reading an error message from the bottom up, where the real cause usually is.':
    'Error message neeche se upar padhna, jahan asli kaaran aam taur par hota hai.',
  'Writing a test that fails on purpose, so you know it actually checks something.':
    'Aisa test likhna jo jaan-boojh kar fail ho, taaki pata chale ki woh sach mein kuchh check karta hai.',
  'Two more ideas are useful to understand, but you do not need to write them: background jobs, and queues that hold work until something is free to process it.':
    'Do aur ideas samajhna kaam ka hai, lekin unhe likhne ki zaroorat nahi: background jobs, aur queues jo kaam ko tab tak rakhti hain jab tak koi use process karne ke liye khaali na ho.',
  'Think of the last AI feature you saw demonstrated. In plain words, write what its request probably contained and what its response probably looked like. Where are you guessing?':
    'Aakhri AI feature sochiye jiska demo aapne dekha. Seedhe shabdon mein likhiye ki uski request mein shayad kya tha aur response shayad kaisa dikhta tha. Aap kahan andaaza laga rahe hain?',
  'The request probably contained … The response probably … I am guessing about …':
    'Request mein shayad … tha. Response shayad … Main andaaza laga raha hoon …',
  'The places where you had to guess are the questions to ask the team that built it. Being able to produce that list is the main skill this chapter teaches.':
    'Jahan aapko andaaza lagaana pada, wahi sawaal us team se poochhne hain jisne ise banaya. Woh list bana paana hi is chapter ka main hunar hai.',
  'A model API call is a normal software dependency. The engineering risk sits in interfaces, error handling, secrets, retries, observability and contracts, at least as much as in the model.':
    'Model API call ek aam software dependency hai. Engineering risk interfaces, error handling, secrets, retries, observability aur contracts mein utna hi hai jitna model mein.',
  'Next, Chapter 22 uses the harness you just built to compare models.':
    'Aage, Chapter 22 abhi banaaye harness se models compare karta hai.',
  'Choosing a model: benchmark on your own cases':
    'Model chunna: apne cases par benchmark kijiye',
  'Leaderboards measure someone else’s task. You will learn what changes when you change the model, benchmark models on your own ten cases, and write a model selection card that records the evidence.':
    'Leaderboards kisi aur ka task naapte hain. Aap seekhenge ki model badalne par kya badalta hai, apne das cases par models benchmark karenge, aur ek model selection card likhenge jo saboot record kare.',
  'Explain what changes when you change the model, beyond a benchmark score.':
    'Samjhaana ki model badalne par benchmark score se aage kya badalta hai.',
  'Say when retrieval, prompting and fine-tuning are each the right choice.':
    'Batana ki retrieval, prompting aur fine-tuning har ek kab sahi choice hain.',
  'Write a model recommendation that answers the question “measured how?”.':
    'Aisi model recommendation likhna jo “kaise naapa?” sawaal ka jawab de.',
  'Temperature controls variation':
    'Temperature vividhta control karta hai',
  'You tested it in Chapter 2. Here it is one variable among several.':
    'Aapne ise Chapter 2 mein test kiya. Yahan yeh kai variables mein se ek hai.',
  'Write the answer key before measuring':
    'Naapne se pehle answer key likhiye',
  'Without an answer key, a benchmark means little.':
    'Answer key ke bina benchmark ka zyada matlab nahi.',
  'You built it in Chapter 21, and this chapter is the first to use it.':
    'Aapne ise Chapter 21 mein banaya, aur yeh chapter pehla hai jo ise use karta hai.',
  'Open the experiment harness from Chapter 21. You will run the same ten cases on two or three models.':
    'Chapter 21 ka experiment harness kholiye. Aap wahi das cases do-teen models par chalaayenge.',
  'A leaderboard shows how a model did on someone else’s task. This chapter shows you how to get your own numbers, on your own questions, in one afternoon.':
    'Leaderboard dikhata hai ki model ne kisi aur ke task par kaisa kiya. Yeh chapter dikhata hai ki ek dopahar mein apne sawaalon par apne numbers kaise laayein.',
  'Compare it with buying a car. An award does not tell you whether it fits your family, handles your roads or what it costs to run. You would test-drive it. Few teams test-drive models.':
    'Ise car khareedne se compare kijiye. Award yeh nahi batata ki woh aapke parivaar mein fit hogi, aapki sadkon par chalegi ya chalaane mein kitni padegi. Aap test-drive karenge. Kam teams models ki test-drive karti hain.',
  'Models differ on several things at once: capability, speed, context size, tool use and cost. A model that wins on one can lose on another, and which one matters depends on your use case.':
    'Models ek saath kai cheezon mein alag hote hain: kshamata, speed, context size, tool use aur cost. Ek mein jeetne wala model doosre mein haar sakta hai, aur kaunsa maayne rakhta hai yeh aapke use case par nirbhar hai.',
  'When you compare models, change only the model. If you change the model and the prompt together and the result improves, you do not know which change helped.':
    'Models compare karte samay sirf model badaliye. Agar aap model aur prompt saath badalte hain aur result sudhrta hai, to aapko nahi pata ki kisse madad mili.',
  'What you need to know about models':
    'Models ke baare mein aapko kya jaanna chahiye',
  'The knowledge you need is specific and limited. It covers supervised and unsupervised learning, classification and regression, and training, validation and test sets. It also covers overfitting, precision and recall, and embeddings. Add transformers and attention at the level of the idea, inference versus training, and pre-training versus fine-tuning versus retrieval. That is enough to take part in an architecture discussion.':
    'Zaroori jaankari specific aur seemit hai. Isme supervised aur unsupervised learning, classification aur regression, aur training, validation aur test sets aate hain. Isme overfitting, precision aur recall, aur embeddings bhi aate hain. Saath mein transformers aur attention idea ke star par, inference banaam training, aur pre-training banaam fine-tuning banaam retrieval. Architecture charcha mein hissa lene ke liye itna kaafi hai.',
  'Fine-tune, prompt or retrieve?':
    'Fine-tune, prompt ya retrieve?',
  'The most common question in these discussions is whether to fine-tune. Here is a rule of thumb. Treat it as a hypothesis to test, not a law:':
    'In charchaon ka sabse aam sawaal hai ki fine-tune karein ya nahi. Yeh ek rule of thumb hai. Ise niyam nahi, test karne ki parikalpana maaniye:',
  'Before we switch, …':
    'Switch karne se pehle, …',
  'A good answer asks: on which of our cases, and at what speed and cost? A leaderboard is a result on someone else’s test set.':
    'Achha jawab poochhta hai: hamare kin cases par, aur kis speed aur cost par? Leaderboard kisi aur ke test set ka result hai.',
  'Next, Chapter 23 covers how to design the context you send to whichever model you chose.':
    'Aage, Chapter 23 batata hai ki jo bhi model chuna use bheje jaane wale context ko kaise design karein.',
  'Context engineering: deciding what the model sees':
    'Context engineering: tay karna ki model kya dekhta hai',
  'Context engineering is deciding what goes into each request: instructions, examples, evidence, history and tool results, and in what format. You will treat the prompt as a contract, set a context budget, and design where memory is stored.':
    'Context engineering har request mein kya jaaye yeh tay karna hai: instructions, examples, saboot, history aur tool results, aur kis format mein. Aap prompt ko contract ki tarah dekhenge, context budget tay karenge, aur design karenge ki memory kahan store ho.',
  'Treat a prompt as an interface contract rather than a paragraph of requests.':
    'Prompt ko requests ke paragraph ki jagah interface contract ki tarah dekhna.',
  'Say what gets removed first when the context budget is tight, and why.':
    'Batana ki context budget tang hone par pehle kya hataaya jaata hai, aur kyun.',
  'From Chapter 2. Here it is one part of a designed context.':
    'Chapter 2 se. Yahan yeh design kiye context ka ek hissa hai.',
  'The context window has a limit':
    'Context window ki limit hai',
  'From Chapter 1.5. The budget is real, so something must be removed first.':
    'Chapter 1.5 se. Budget asli hai, isliye kuchh pehle hataana padta hai.',
  'Structured output can be required':
    'Structured output zaroori kiya ja sakta hai',
  'Chapter 8 made the format reliable. This chapter puts it in a wider design.':
    'Chapter 8 ne format bharosemand banaya. Yeh chapter use bade design mein rakhta hai.',
  'Pick one assistant you know well, yours or one you use. You will list everything that goes into its context.':
    'Ek assistant chuniye jise aap achhi tarah jaante hain, aapka ya jise use karte hain. Aap uske context mein jaane wali har cheez list karenge.',
  'The prompt is only one part of what the model sees. Deciding what else goes in, and what is left out, is a larger job called <strong>context engineering</strong>. The context window has a limit, and you pay for every token.':
    'Prompt model ke dekhe ka sirf ek hissa hai. Aur kya jaata hai, aur kya chhoota hai, yeh tay karna ek bada kaam hai jise <strong>context engineering</strong> kehte hain. Context window ki limit hai, aur aap har token ke paise dete hain.',
  'An everyday comparison: you brief a brilliant new colleague who remembers nothing from yesterday. Each morning you hand them a folder with the standing instructions, some examples, the file they need today and a note about last week. What you put in the folder decides how well they do.':
    'Rozmarra ki tulna: aap ek shandaar naye colleague ko brief karte hain jise kal ka kuchh yaad nahi. Har subah aap unhe ek folder dete hain jisme sthaayi instructions, kuchh examples, aaj ki zaroori file aur pichhle hafte ka note hai. Folder mein kya daalte hain, yahi tay karta hai ki woh kitna achha karenge.',
  'Treat a prompt as an interface contract: role, task, constraints, examples, output schema and refusal behaviour. Code downstream depends on each of these.':
    'Prompt ko interface contract maaniye: role, task, seemayein, examples, output schema aur refusal behaviour. Aage ka code in mein se har ek par nirbhar hai.',
  '“Memory” is an application architecture with storage, retention and authorization, not a single feature.':
    '“Memory” storage, retention aur authorization wala application architecture hai, ek akela feature nahi.',
  'Structured output removes ambiguity for the code that reads the reply, which usually cannot handle prose.':
    'Structured output reply padhne wale code ke liye ambiguity hataata hai, jo aam taur par prose nahi sambhal sakta.',
  'Memory is an architecture choice':
    'Memory ek architecture choice hai',
  'A model does not have memory. Every product that offers memory has built a store, and the kind of store decides what it can delete when someone asks.':
    'Model ke paas memory nahi hoti. Memory dene wale har product ne ek store banaya hai, aur store ki kism tay karti hai ki koi maange to woh kya delete kar sakta hai.',
  'You will hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions: what goes in, and what is removed first when it does not fit.':
    'Aap context ke hisson ke kai naam sunenge: caching, compression, few-shot examples, instruction hierarchy. Sab do hi sawaalon ka jawab dete hain: kya andar jaata hai, aur fit na hone par pehle kya hataaya jaata hai.',
  'For one assistant you know, estimate the tokens spent on system instructions, history, retrieved passages and tool output. Then decide what gets removed first when the budget is tight.':
    'Kisi jaane-pehchaane assistant ke liye system instructions, history, retrieve kiye passages aur tool output par kharch tokens ka andaaza lagaiye. Phir tay kijiye ki budget tang hone par pehle kya hataaya jaata hai.',
  'instructions … history … retrieved … tool output … remove first: …':
    'instructions … history … retrieved … tool output … pehle hataayein: …',
  'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.':
    'Zyadatar log pehle history aur aakhir mein saboot hataate hain. Agar aapka kram alag hai, to kyun, yeh likhiye. Wahi tark design hai.',
  'Next, Chapter 24 uses this context design as the input to a production retrieval system.':
    'Aage, Chapter 24 is context design ko production retrieval system ka input banata hai.',
  'Production RAG: ingestion, access control and freshness':
    'Production RAG: ingestion, access control aur taazgi',
  'A production retrieval system has several stages you can tune, from reading documents in to checking the answer. You will work through each stage, including permissions, deletion and rollback, and design an architecture you could defend in a review.':
    'Production retrieval system ke kai charan hain jinhe aap tune kar sakte hain, documents andar padhne se lekar jawab check karne tak. Aap har charan se guzrenge, permissions, deletion aur rollback samet, aur aisa architecture design karenge jise review mein defend kar sakein.',
  'Name the stages of a production retrieval pipeline and say which can be tuned.':
    'Production retrieval pipeline ke charanon ka naam lena aur batana ki kaunse tune ho sakte hain.',
  'Explain why ingestion quality sets an upper limit on retrieval quality.':
    'Samjhaana ki ingestion quality retrieval quality ki upari seema kyun tay karti hai.',
  'Say what must happen to your index when a document is deleted or a permission changes.':
    'Batana ki document delete hone ya permission badalne par aapke index ke saath kya hona chahiye.',
  'Chapters 3 to 7. This chapter turns that into an architecture.':
    'Chapters 3 se 7. Yeh chapter use architecture mein badalta hai.',
  'Chapter 12 measured it. Here it becomes an ingestion and indexing decision.':
    'Chapter 12 ne ise naapa. Yahan yeh ingestion aur indexing ka faisla banta hai.',
  'The answer key is your measuring tool':
    'Answer key aapka naapne ka tool hai',
  'Every claim in this chapter is measured against it.':
    'Is chapter ka har daava isi se naapa jaata hai.',
  'Have your Chapter 12 retrieval pipeline and your Chapter 6 answer key ready.':
    'Apni Chapter 12 retrieval pipeline aur Chapter 6 answer key taiyaar rakhiye.',
  'Your Chapter 7 system works because you chose every document and you are the only user. In production, scans arrive crooked, permissions change after indexing, the same contract is uploaded twice under two names, and your provider updates the model without telling you.':
    'Aapka Chapter 7 system isliye kaam karta hai kyunki har document aapne chuna aur aap akele user hain. Production mein scans tedhe aate hain, indexing ke baad permissions badalti hain, wahi contract do naamon se do baar upload hota hai, aur aapka provider bina bataaye model update karta hai.',
  'A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings, searching, building the prompt, and checking the answer. Each stage can be tuned, so each one is a suspect when quality drops without a code change.':
    'Production pipeline ke saat charan hain: documents andar padhna, unhe todna, labels jodna, embeddings banaana, search karna, prompt banaana, aur jawab check karna. Har charan tune ho sakta hai, isliye bina code badle quality girne par har ek shak ke ghere mein hai.',
  'Anything lost while reading documents in is lost for good. Better search cannot bring back a table the parser flattened or a page it skipped.':
    'Documents andar padhte samay jo kho gaya woh hamesha ke liye kho gaya. Behtar search parser ki chapti ki table ya chhoota page wapas nahi la sakta.',
  'Reranking has a cost':
    'Reranking ki keemat hai',
  'Reranking improves ordering but adds cost. Fetch ten candidates, rescore them, and check whether recall at ten and precision at three improved enough to justify the extra time and cost.':
    'Reranking kram sudhaarta hai lekin cost jodta hai. Das candidates laaiye, unhe phir score kijiye, aur check kijiye ki das par recall aur teen par precision extra samay aur cost ko sahi thahraane laayak sudhre ya nahi.',
  'Four questions to ask about any retrieval product':
    'Kisi bhi retrieval product ke baare mein poochhne ke chaar sawaal',
  'Production retrieval has a long list of concerns, and you do not need to memorise it. Every item fits under one of four questions:':
    'Production retrieval ki chintaon ki lambi list hai, aur use ratne ki zaroorat nahi. Har item chaar sawaalon mein se ek ke neeche aata hai:',
  '<strong>Did we read the document correctly?</strong> Scans, tables, and content a parser drops.':
    '<strong>Kya humne document sahi padha?</strong> Scans, tables, aur woh content jo parser chhod deta hai.',
  '<strong>Is this user allowed to see it?</strong> Permissions, separate customers, and deleted documents.':
    '<strong>Kya is user ko ise dekhne ki ijaazat hai?</strong> Permissions, alag customers, aur delete kiye documents.',
  '<strong>Did we find the right chunk?</strong> Keyword search, meaning search, query rewriting and reranking.':
    '<strong>Kya humne sahi chunk dhoondha?</strong> Keyword search, matlab wala search, query rewriting aur reranking.',
  '<strong>Can we show where the answer came from?</strong> Chunk IDs, citations, and what happens when there is no answer.':
    '<strong>Kya hum dikha sakte hain ki jawab kahan se aaya?</strong> Chunk IDs, citations, aur jawab na hone par kya hota hai.',
  'Use these four questions whenever someone demonstrates a retrieval product.':
    'Jab bhi koi retrieval product ka demo kare, ye chaar sawaal use kijiye.',
  'A document is deleted from the source system at 10am. Describe what must happen for the assistant to stop quoting it, and by when.':
    'Source system se ek document subah 10 baje delete hota hai. Bataiye ki assistant use quote karna band kare, iske liye kya hona chahiye, aur kab tak.',
  'At 10am … then … by …':
    '10 baje … phir … tak …',
  'If your answer depends on a nightly rebuild, your system quotes a deleted document from 10am until the rebuild. That window is a decision, so make it on purpose.':
    'Agar aapka jawab raat ke rebuild par nirbhar hai, to aapka system 10 baje se rebuild tak ek delete kiya document quote karta hai. Woh window ek faisla hai, isliye use jaan-boojh kar lijiye.',
  'Next, Chapter 25 gives the model controlled access to actions, not only evidence.':
    'Aage, Chapter 25 model ko sirf saboot nahi, actions tak niyantrit pahunch deta hai.'

});
