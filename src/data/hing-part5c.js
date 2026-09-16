/* Hinglish: Part V chapters 23 and 24. */
Object.assign(window.HING = window.HING || {}, {

  'A fixed set of cases run against more than one option so the comparison means something. Somebody else’s benchmark predicts your task only by coincidence.':
    'Ek tay set of cases jo ek se zyada vikalpon par chalaya jaaye, taaki tulna ka matlab ho. Kisi aur ka benchmark aapke kaam ke baare mein sirf ittefaaq se sahi hota hai.',
  'Model selection card':
    'Model selection card',
  'One page recording which model you chose, on what evidence, under which constraint, and what runs instead when it is unavailable.':
    'Ek page jisme likha ho ki aapne kaun sa model chuna, kis evidence par, kis bandhan ke tehat, aur na milne par kya chalega.',

  /* ---- chapter 23 ---- */
  'Write a vague prompt that makes a downstream parser fail, and keep the failure.':
    'Ek dhundhla prompt likhiye jisse aage ka parser fail ho jaaye, aur us failure ko sambhaal kar rakhiye.',
  'Redesign it as an interface: structured output, validation, examples, a refusal state, provenance, and bounded history.':
    'Ab ise ek interface ki tarah dobara banaiye: structured output, validation, udaharan, mana karne ki soorat, provenance, aur seemit history.',
  'Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.':
    'Zaroori fields hataiye, ulti-pulti instructions daaliye, context bhar dijiye, aur bekaar history ghusaiye.',
  'A context budget, a schema, and a memory/state design.':
    'Ek context budget, ek schema, aur memory/state ka design.',
  'Explain the difference between context, state and persistent memory without blurring them.':
    'Context, state aur permanent memory ka farak samjhaiye, bina teeno ko mila-jula kiye.',
  'Context engineering':
    'Context engineering',
  'Book chapter 10. Retrieval is one part of a bigger discipline: deciding what goes into the model at all — instructions, examples, evidence, history, tool results — and in what shape.':
    'Kitaab ka chapter 10. Retrieval ek badi cheez ka hissa bhar hai: yeh tay karna ki model ke paas jaayega hi kya — nirdesh, udaharan, saboot, history, tools ke result — aur kis shakal mein.',
  'Treat a prompt as an interface contract rather than a paragraph of wishes.':
    'Prompt ko khwaahishon ka paragraph nahi, ek interface contract maaniye.',
  'Say what gets dropped first when the context budget is tight, and why.':
    'Batana ki context ka budget tang hone par sabse pehle kya hatega, aur kyun.',
  'Distinguish conversation history, user profile and task state as three different stores.':
    'Conversation history, user profile aur task state ko teen alag-alag store ki tarah alag karna.',
  'A context budget for one assistant':
    'Ek assistant ke liye context budget',
  'A page that says exactly what goes into the envelope, what it costs, and what falls out first under pressure. This is the artifact that makes a context window argument concrete instead of theoretical.':
    'Ek page jo theek-theek bataye ki lifafe mein kya jaata hai, kitna kharcha hota hai, aur dabaav mein sabse pehle kya girta hai. Yahi woh cheez hai jo context window ki bahas ko kitaabi se asli bana deti hai.',
  'List every component that enters the context: instructions, examples, retrieved evidence, history, tool results, user data.':
    'Har us cheez ki list banaiye jo context mein jaati hai: nirdesh, udaharan, nikaale gaye saboot, history, tools ke result, user ka data.',
  'Put a token estimate beside each, measured rather than guessed.':
    'Har ek ke saath token ka anumaan likhiye — naapkar, andaaze se nahi.',
  'Set a total ceiling and show the headroom.':
    'Kul upri seema tay kijiye aur dikhaiye kitni jagah bachi hai.',
  'Define the eviction order, and the rule that decides it.':
    'Hatane ka kram tay kijiye, aur woh niyam bhi jo yeh kram tay karta hai.',
  'Write the schema the output must match, and what happens when it does not match.':
    'Woh schema likhiye jisse output milna chahiye, aur na milne par kya hoga.',
  'Say which of the three memory stores each piece of retained data belongs to.':
    'Batana ki rakhe gaye har data ka tukda teen memory stores mein se kis mein jaata hai.',
  'The numbers come from a real run, not an estimate.':
    'Numbers asli run se aaye hon, andaaze se nahi.',
  'The eviction order has a stated reason.':
    'Hatane ke kram ke saath uski wajah likhi ho.',
  'Every retained field has a deletion path.':
    'Rakhe gaye har field ko mitaane ka raasta ho.',
  'A system prompt is a standing instruction':
    'System prompt ek khada rehne waala nirdesh hai',
  'Chapter 2. Here it becomes one component of a designed context.':
    'Chapter 2. Yahan yeh ek soche-samjhe context ka ek hissa ban jaata hai.',
  'The envelope has a ceiling':
    'Lifafe ki ek seema hai',
  'Chapter 1.5. The budget is real, so something has to be dropped first.':
    'Chapter 1.5. Budget asli hai, isliye kisi na kisi ko pehle hatna padega.',
  'Structured output can be demanded':
    'Structured output maanga jaa sakta hai',
  'Chapter 8 made the shape reliable; this chapter puts it in a wider frame.':
    'Chapter 8 ne shakal ko bharosemand banaya; yeh chapter use ek badi tasveer mein rakhta hai.',
  'Imagine briefing a new colleague who is brilliant, fast, and has no memory of yesterday. Every morning you hand them a folder. What you put in that folder — the standing instructions, the examples, the file they need today, the note about what happened last week — decides entirely how well they do.':
    'Sochiye ek naya sahyogi hai jo tez hai, kaabil hai, aur jise kal ka kuch yaad nahi. Har subah aap use ek folder pakdate hain. Us folder mein aap kya rakhte hain — pakke nirdesh, udaharan, aaj ki zaroori file, pichhle hafte ka note — bas wahi tay karta hai ki woh kitna achcha kaam karega.',
  'You cannot make the folder infinitely thick, and you pay by the page. That is this chapter. People call the interesting part “prompt engineering”, but the prompt is one page in the folder. Deciding what else goes in, and what gets left out, is the bigger job.':
    'Folder ko aap anant motai tak nahi bana sakte, aur paisa har page ka lagta hai. Yahi yeh chapter hai. Log iske ek hisse ko "prompt engineering" kehte hain, par prompt to folder ka ek page bhar hai. Baaki kya jaayega aur kya chhoot jaayega — bada kaam wahi hai.',
  'A good prompt is an interface contract, not a paragraph of wishes. Role, task, constraints, examples, output schema, refusal behaviour. Everything in that list is something a caller downstream is depending on.':
    'Achcha prompt ek interface contract hota hai, khwaahishon ka paragraph nahi. Role, kaam, bandhan, udaharan, output ka schema, mana karne ka tareeka. Is list ki har cheez par aage koi na koi tika hua hai.',
  'Structured output removes ambiguity downstream, which matters because the thing downstream is usually code that will not cope with prose.':
    'Structured output aage ki uljhan hata deta hai, aur yeh maayne rakhta hai kyunki aage aksar code hota hai, jo sadharan likhaai nahi sambhaal paata.',
  '“Memory” is an architecture choice, not a feature the model has. Every product that claims memory has built one — and which one it built determines what it can delete when someone asks.':
    '"Memory" ek architecture ka faisla hai, model ki koi khoobi nahi. Jo bhi product memory ka daawa karta hai usne ek banayi hai — aur kaun si banayi, yahi tay karta hai ki koi maange to woh kya mita sakta hai.',
  'You will hear a lot of names for parts of that folder — caching, compression, few-shot examples, instruction hierarchy. They are all answers to the same two questions: what goes in, and what comes out first when it will not fit. Hold the questions; the names follow on their own.':
    'Us folder ke hisson ke aapko bahut naam sunne milenge — caching, compression, few-shot examples, instruction hierarchy. Yeh sab ek hi do sawaalon ke jawaab hain: andar kya jaayega, aur jagah kam padne par sabse pehle kya nikalega. Sawaal pakad rakhiye; naam apne aap peechhe aa jaate hain.',
  'For one assistant you know, estimate the tokens spent on system instructions, on history, on retrieved passages, and on tool output. Then decide what gets dropped first when the budget is tight.':
    'Kisi ek assistant ke liye anumaan lagaiye ki system ke nirdeshon par, history par, nikaale gaye hisson par aur tools ke output par kitne token lagte hain. Phir tay kijiye ki budget tang hone par sabse pehle kya hatega.',
  'Almost everyone drops history first and evidence last. If your ordering is different, write down why — that reasoning is the design.':
    'Lagbhag sab pehle history hatate hain aur saboot sabse aakhir mein. Agar aapka kram alag hai to wajah likh lijiye — wahi soch hi design hai.',
  'Deciding what the model receives at all — instructions, examples, evidence, history, tool results — and in what shape. Retrieval is one part of it.':
    'Yeh tay karna ki model ke paas jaayega hi kya — nirdesh, udaharan, saboot, history, tools ke result — aur kis shakal mein. Retrieval uska ek hissa hai.',
  'Context budget':
    'Context budget',
  'A token allowance per component, with a stated order in which things get dropped when the total will not fit.':
    'Har hisse ke liye token ka hissa, aur likha hua kram ki jagah kam padne par kya-kya hatega.',
  'Schema validation':
    'Schema validation',
  'Checking returned data against a declared shape before anything downstream uses it.':
    'Aaye hue data ko ek ghoshit shakal se milana, isse pehle ki aage koi use kare.',
  'Provenance':
    'Provenance',
  'The record of where a piece of information came from, carried alongside it so an answer can be traced back to a source.':
    'Is baat ka record ki jaankari ka tukda kahan se aaya, uske saath hi chalta hua, taaki jawaab ko source tak wapas traca jaa sake.',

  /* ---- chapter 24 ---- */
  'Take three real documents and inventory them — id, section, language, metadata, access label — then predict which metadata will earn its keep.':
    'Teen asli documents lijiye aur unka byora banaiye — id, section, bhasha, metadata, access label — phir andaaza lagaiye ki kaun sa metadata apni jagah kama payega.',
  'Compare lexical, semantic and hybrid retrieval, then add reranking or record a measured reason to leave it out.':
    'Shabd, matlab aur dono milakar — teeno retrieval milaiye, phir reranking joriye ya naapkar likhiye ki kyun nahi joda.',
  'Test what happens on deletion, on a permission change, on duplicates, and on an index version change.':
    'Test kijiye ki document mitne par, permission badalne par, do-do copy hone par aur index ka version badalne par kya hota hai.',
  'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.':
    'Ek production RAG architecture jisme access control, provenance, versioning, jawaab-nahi ki policy aur wapas jaane ka raasta ho.',
  'Name the first production retrieval failure you would investigate, and say why that one first.':
    'Batana ki production mein retrieval ke kis failure ko aap sabse pehle jaanchenge, aur wahi kyun.',
  'RAG at production depth':
    'RAG, production ki gehraai par',
  'Book chapter 11. Retrieval is a system with tunable stages, not a vector database with a logo. This is the version you could defend in a design review.':
    'Kitaab ka chapter 11. Retrieval ek poora system hai jiske har padav ka dial ghumaya jaa sakta hai — logo lagi vector database nahi. Yeh woh roop hai jise aap design review mein defend kar sakein.',
  'Name the stages of a production retrieval pipeline and say which are tunable.':
    'Production retrieval pipeline ke padav batana, aur kaun se ghumaye jaa sakte hain yeh bhi.',
  'Explain why ingestion quality sets a ceiling on retrieval quality.':
    'Samjhaana ki document andar lene ki quality retrieval ki quality par chhat kyun rakh deti hai.',
  'Say what happens to your index when a document is deleted or a permission changes.':
    'Batana ki document mitne ya permission badalne par aapke index ka kya hota hai.',
  'An enterprise retrieval architecture, on one page':
    'Ek enterprise retrieval architecture, ek page par',
  'One page that an engineer could implement and a security reviewer could challenge. The constraint is the single page — if it does not fit, you have not decided enough.':
    'Ek page jise engineer bana sake aur security waala uspar sawaal utha sake. Bandhan yahi ek page hai — agar nahi samaata, to aapne kaafi faisle liye hi nahi.',
  'Draw ingestion, storage, index, retrieval, rerank and generation as separate stages.':
    'Document lena, rakhna, index, retrieval, rerank aur jawaab banana — sabko alag padav ki tarah banaiye.',
  'Add authentication and authorisation, and mark where the access check happens.':
    'Pehchaan aur ijazat joriye, aur nishaan lagaiye ki access ki jaanch kahan hoti hai.',
  'Mark provenance: how an answer traces back to a chunk id and a source document.':
    'Provenance mark kijiye: jawaab chunk id aur asli document tak kaise wapas jaata hai.',
  'State the no-answer threshold and what the user sees when it trips.':
    'Jawaab-nahi ka threshold likhiye aur woh chhoone par user ko kya dikhta hai.',
  'State the versioning scheme for the index and the embedding model.':
    'Index aur embedding model ke version rakhne ka tareeka likhiye.',
  'State the rollback: what you do when a rebuild makes quality worse.':
    'Wapas jaane ka tareeka likhiye: jab dobara banane se quality giri to aap kya karenge.',
  'Every arrow has a failure mode written beside it.':
    'Har teer ke saath likha ho ki wahan kya bigad sakta hai.',
  'The access check is on the retrieval path, not only in the UI.':
    'Access ki jaanch retrieval ke raaste par ho, sirf screen par nahi.',
  'Rollback is a procedure, not an intention.':
    'Wapas jaana ek tay tareeka ho, sirf iraada nahi.',
  'You built retrieval by hand':
    'Aapne retrieval apne haath se banaya tha',
  'Chapters 3 to 7. This chapter turns the demo into an architecture.':
    'Chapter 3 se 7. Yeh chapter us demo ko ek architecture bana deta hai.',
  'Word matching and meaning matching fail differently':
    'Shabd milana aur matlab milana alag-alag tareeke se fail hote hain',
  'Chapter 12 measured it; here it becomes an ingestion and indexing decision.':
    'Chapter 12 ne ise naapa tha; yahan yeh document lene aur index banane ka faisla ban jaata hai.',
  'Ground truth is the instrument':
    'Ground truth hi naapne ka auzaar hai',
  'Every claim below is measured against your answer key.':
    'Neeche ka har daawa aapki answer key se naapa jaata hai.',
  'A tidy home kitchen and a restaurant kitchen cook the same food. The difference is that in a restaurant nothing arrives when you expect, two people order the same thing differently, somebody is allergic, and a delivery is missing. The recipes did not change. Everything around them did.':
    'Ghar ki saaf-suthri rasoi aur restaurant ki rasoi khaana to wahi banati hain. Farak yeh hai ki restaurant mein kuch bhi waqt par nahi aata, do log ek hi cheez alag tareeke se mangwaate hain, kisi ko allergy hai, aur ek delivery gayab hai. Recipe nahi badli. Uske aas-paas ka sab kuch badal gaya.',
  'Your chapter 7 system is the home kitchen. It works because you chose every document and you are the only user. In production, scans come in crooked, permissions change after you indexed, the same contract gets uploaded twice under two names, and one day your provider quietly updates the model underneath you.':
    'Aapka chapter 7 waala system ghar ki rasoi hai. Woh isliye chalta hai kyunki har document aapne chuna hai aur user bhi bas aap hain. Production mein scan tedhe aate hain, index banane ke baad permission badal jaati hai, ek hi contract do naamon se do baar chadh jaata hai, aur ek din aapka provider chupchaap neeche se model badal deta hai.',
  'Seven places it can go wrong, not one':
    'Saat jagah bigad sakta hai, ek nahi',
  'Reading the document in, cutting it up, adding labels, mapping the meaning, searching, building the envelope, and checking the answer. Each of those is a dial somebody can turn — which also means each one is a candidate when quality drops and nobody changed the code.':
    'Document andar padhna, use kaatna, label lagana, matlab ka naksha banana, dhoondhna, lifafa taiyaar karna, aur jawaab jaanchna. Inme se har ek ek dial hai jise koi ghuma sakta hai — jiska matlab yeh bhi hai ki jab quality gire aur code kisi ne na badla ho, to har ek shaq ke daayre mein hai.',
  'Whatever gets lost while reading the document in is lost for good. No amount of clever searching later brings back a table your parser flattened, or a page it skipped because the scan was crooked.':
    'Document andar padhte waqt jo kho gaya, woh hamesha ke liye gaya. Baad mein kitni bhi chalaak dhoondh us table ko wapas nahi laayegi jise aapke parser ne chapta kar diya, ya us page ko jo tedha scan hone ki wajah se chhoot gaya.',
  'Reranking is a second opinion, not a magic fix. Retrieve ten candidates, rescore them, and then be honest: did recall at ten and precision at three improve enough to justify the latency and cost it added?':
    'Reranking doosri raay hai, koi jaadu nahi. Das ummeedwar nikaaliye, unhe dobara number dijiye, aur phir imaandaari se poochhiye: das par recall aur teen par precision itna sudhre kya ki jo latency aur cost badhi woh jaayaz ho?',
  'There is a long list of things production retrieval has to handle, and memorising it is not the point. It falls into four honest questions, and every item on any vendor’s feature list is an answer to one of them:':
    'Production retrieval ko jo cheezein sambhalni padti hain unki list lambi hai, aur use ratna maqsad nahi hai. Woh chaar seedhe sawaalon mein sim jaati hai, aur kisi bhi vendor ki feature list ka har point inhi mein se kisi ek ka jawaab hai:',
  '<strong>Did we read the document properly?</strong> Scanning, tables, the bits a parser drops.':
    '<strong>Kya humne document theek se padha?</strong> Scanning, tables, aur woh hisse jo parser gira deta hai.',
  '<strong>Is the reader allowed to see this?</strong> Permissions, separate customers, documents that were deleted.':
    '<strong>Kya padhne waale ko yeh dekhne ki ijazat hai?</strong> Permissions, alag-alag customers, aur mitaye gaye documents.',
  '<strong>Did we find the right piece?</strong> Word matching, meaning matching, rewriting the question, re-ranking what came back.':
    '<strong>Kya humne sahi tukda dhoondha?</strong> Shabd milana, matlab milana, sawaal dobara likhna, aur jo aaya use dobara number dena.',
  '<strong>Can we prove where the answer came from?</strong> Chunk ids, citations, and what happens when there is genuinely no answer.':
    '<strong>Kya hum saabit kar sakte hain ki jawaab kahan se aaya?</strong> Chunk ids, hawaale, aur jab sach mein koi jawaab hai hi nahi tab kya hota hai.',
  'When someone demonstrates a retrieval product, those four questions are your whole interview.':
    'Jab koi retrieval product ka demo de, to yahi chaar sawaal aapka poora interview hain.',
  'A document is deleted from the source system at 10am. Walk through what has to happen for the assistant to stop quoting it, and by when.':
    'Subah das baje ek document source system se mita diya gaya. Batayiye ki assistant ka use quote karna band karne ke liye kya-kya hona chahiye, aur kab tak.',
  'If the answer involves a nightly rebuild, then between 10am and the rebuild your system is quoting a document that no longer exists. That window is a decision, so make it deliberately.':
    'Agar jawaab mein raat ka rebuild aata hai, to das baje se rebuild ke beech aapka system aise document ko quote kar raha hai jo ab hai hi nahi. Woh khidki ek faisla hai — use soch-samajh kar lijiye.',
  'Ingestion':
    'Ingestion — document andar lena',
  'Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking, embedding. It sets a ceiling on quality that nothing downstream can raise.':
    'Document ke saath woh sab kuch jo use dhoondhe jaane se pehle hota hai: padhna, nikaalna, label jodna, kaatna, embed karna. Yeh quality par ek chhat rakh deta hai jise aage koi nahi utha sakta.',
  'Query rewriting':
    'Query rewriting — sawaal dobara likhna',
  'Turning what the user typed into what should actually be searched for, before retrieval runs.':
    'User ne jo type kiya use us cheez mein badalna jo sach mein dhoondhi jaani chahiye — retrieval chalne se pehle.',
  'Access-control-aware retrieval':
    'Access dekhkar chalne waala retrieval',
  'Filtering by who is asking as part of the search, rather than hiding results afterwards in the interface.':
    'Kaun poochh raha hai yeh dhoondh ke andar hi chhaanna, na ki baad mein screen par result chhipa dena.',
  'Embedding versioning':
    'Embedding ka version rakhna',
  'Tracking which model produced which stored vectors, so a model change does not silently corrupt an index.':
    'Yeh rakhna ki kaun se model ne kaun se vectors banaye, taaki model badalne se index chupke se kharaab na ho jaaye.'

});
