/* Hinglish for Production RAG: ingestion, access control and freshness (chapter:ch11r), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Take three real documents. For each, make a list: its id, its sections, its language, its metadata (labels about the document) and its access label (who may read it). Then guess which metadata will be worth keeping.':
    'Teen asli documents lijiye. Har ek ki list banaiye: uska id, uske sections, uski bhasha, uska metadata (document ke baare mein labels) aur uska access label (kaun padh sakta hai). Phir andaza lagaiye ki kaunsa metadata rakhne layak niklega.',
  'Compare lexical (exact word), semantic (same meaning) and hybrid (both) retrieval. Then add reranking (putting the found pages in a better order), or write a measured reason for leaving it out.':
    'Lexical (theek shabd), semantic (wahi matlab) aur hybrid (dono) retrieval ki tulna kijiye. Phir reranking jodiye (mile hue pages ko behtar kram mein lagana), ya use chhodne ki napi hui wajah likhiye.',
  'Test four things: a document is deleted, a permission changes, there are duplicates, and the index version changes. The index is like the catalogue of a library.':
    'Chaar cheezein test kijiye: ek document hata diya jaye, ek permission badle, duplicates hon, aur index ka version badle. Index library ke catalogue jaisa hai.',
  'A production RAG architecture (a real, live system that finds pages first and answers from them). It has access control, provenance, versioning, a no-answer policy and a rollback path (a way back).':
    'Ek production RAG architecture (asli, chalu system jo pehle pages dhoondhta hai phir unse jawaab deta hai). Isme access control, provenance, versioning, no-answer policy aur rollback path (wapas jaane ka raasta) hai.',
  'Name the first production retrieval failure you would look into, and say why that one comes first. It is like a doctor choosing which symptom to check first.':
    'Production retrieval ki woh pehli galti batayiye jiski aap jaanch karenge, aur kyun wahi pehle. Yeh doctor ke pehle ek lakshan chunne jaisa hai.',
  'Ingestion':
    'Ingestion',
  'Ingestion is everything that happens to a document before it can be found: parsing (reading it), extraction (pulling the text out), enrichment (adding labels), chunking (cutting into index cards) and embedding (an address for meaning). It sets a ceiling on quality. Nothing later can raise that ceiling.':
    'Ingestion woh sab hai jo document ke saath hota hai usse pehle ki use dhoondha ja sake: parsing (padhna), extraction (text nikaalna), enrichment (labels jodna), chunking (index cards mein kaatna) aur embedding (matlab ka pata). Yeh quality ki chhat tay karta hai. Baad ka koi kadam us chhat ko uncha nahin kar sakta.',
  'Turning what the user typed into what should really be searched, before the retrieval runs. It is like a librarian who rewords your question first.':
    'User ne jo type kiya use woh banana jo asal mein dhoondhna chahiye, retrieval chalne se pehle. Yeh librarian jaisa hai jo pehle aapka sawaal sudhaar deta hai.',
  'Access-control-aware retrieval':
    'Access-control-aware retrieval',
  'Filtering by who is asking, as part of the search itself. The other way is to hide results later on the screen. Think of a locked cupboard versus a curtain.':
    'Search ke andar hi yeh dekhna ki poochne wala kaun hai. Doosra tareeka hai baad mein screen par results chhupana. Socho taale wali almari bana parde.',
  'Embedding versioning':
    'Embedding versioning',
  'Keeping track of which model made which stored vectors (the numbers that are the addresses for meaning). Then a change of model cannot quietly spoil an index.':
    'Yeh yaad rakhna ki kaunse model ne kaunse stored vectors banaye (woh numbers jo matlab ke pate hain). Tab model badalne se index chupchaap kharab nahin hota.',
  'A production retrieval system (the open-book exam for real use) has many stages you can tune, from reading documents in to checking the answer. In this chapter you walk through each stage, including permissions, deletion and rollback. At the end you have a design you could defend in a review.':
    'Production retrieval system (asli use ka open-book exam) mein kai stages hain jinhe aap tune kar sakte hain, documents padhne se leke jawaab jaanchne tak. Is chapter mein aap har stage se guzarenge, permissions, deletion aur rollback samet. Ant mein aapke paas aisa design hoga jiska aap review mein bachaav kar sakein.',
  'Name the stages of a production retrieval pipeline. Say which of them can be tuned.':
    'Production retrieval pipeline ke stages ke naam batayiye. Batayiye ki kaunse tune ho sakte hain.',
  'Explain why the quality of ingestion sets an upper limit on the quality of retrieval.':
    'Samjhaiye ki ingestion ki quality retrieval ki quality par upari seema kyun lagati hai.',
  'Say what must happen to your index when a document is deleted or a permission changes.':
    'Batayiye ki jab koi document hata diya jaye ya permission badle, to aapke index ke saath kya hona chahiye.',
  'Draw the gateway on one page':
    'Draw the gateway on one page',
  'The gateway is the version of Bharat Privacy Guard that sits in front of a company\'s servers, logs and AI traffic. Think of a gatekeeper at the door. You will not build it. But you must be able to design it, so an engineer can build from your page and a security reviewer can challenge it. You learned the stages of a production search pipeline. You learned why the first stage caps everything after it. You learned what must happen to an index when a document is deleted or a permission changes. Now use all of this on the gateway\'s rules and reference lists.':
    'Gateway Bharat Privacy Guard ka woh version hai jo company ke servers, logs aur AI traffic ke aage baithta hai. Socho darwaze par chowkidar. Aap ise banayenge nahin. Par aapko ise design karna aana chahiye, taaki engineer aapke page se bana sake aur security reviewer use chunauti de sake. Aapne production search pipeline ke stages seekhe. Aapne seekha ki pehla stage uske baad ki har cheez ki seema kyun tay karta hai. Aapne seekha ki document hatne ya permission badalne par index ke saath kya hona chahiye. Ab yeh sab gateway ke rules aur reference lists par lagaiye.',
  'Write only. One page of design. No code needed.':
    'Sirf likhna hai. Ek page ka design. Code ki zaroorat nahin.',
  'Draw these stages as separate boxes: how a company\'s rules and reference lists are loaded, where they are stored, how they are searched, how the right rule is picked for a request, how the result is put in order again if needed, and how the decision is applied.':
    'Yeh stages alag-alag dibbon mein banaiye: company ke rules aur reference lists kaise load hote hain, kahan store hote hain, kaise search hote hain, request ke liye sahi rule kaise chuna jaata hai, zaroorat ho to result dobara kram mein kaise lagta hai, aur faisla kaise lagu hota hai.',
  'Add who may do what: who can change a rule, who can read the logs, and who can switch the gateway off. Mark where the permission check happens.':
    'Jodiye ki kaun kya kar sakta hai: rule kaun badal sakta hai, logs kaun padh sakta hai, aur gateway kaun band kar sakta hai. Nishaan lagaiye ki permission ki jaanch kahan hoti hai.',
  'Show how an answer can be traced back. Every decision should record which rule, in which version, produced it.':
    'Dikhaiye ki jawaab ko wapas kaise dhoondha ja sakta hai. Har faisle mein likha ho ki kaunse rule ne, kaunse version mein, use banaya.',
  'Write the “no answer” rule: what the gateway does when no rule applies, and what the user sees.':
    '“No answer” ka rule likhiye: jab koi rule lagu na ho to gateway kya karta hai, aur user ko kya dikhta hai.',
  'Write how the rules and the reference lists are versioned, and what happens to old decisions when a rule changes.':
    'Likhiye ki rules aur reference lists ke versions kaise rakhe jaate hain, aur rule badalne par purane faislon ka kya hota hai.',
  'Write the rollback: what you do when a new rule version makes things worse.':
    'Rollback likhiye: jab naya rule version halat bigaade to aap kya karte hain.',
  'A one-page drawing. The stages are separate boxes. The permission check is marked.':
    'Ek page ka chitra. Stages alag dibbe hain. Permission ki jaanch par nishaan hai.',
  'A trace from a decision back to a rule and a version.':
    'Faisle se wapas rule aur version tak ka nishaan.',
  'The “no rule applies” behaviour, the versioning plan and the rollback.':
    '“Koi rule lagu nahin” ka vyavahar, versioning ki yojana aur rollback.',
  'The page really fits on one page. If it does not, you have not made enough decisions yet.':
    'Page sach mein ek page mein aata hai. Agar nahin aata, to aapne abhi kaafi faisle nahin liye.',
  'You built retrieval by hand':
    'Aapne retrieval haath se banaya',
  'You did this in Chapters 3 to 7. This chapter turns it into a full design.':
    'Aapne yeh Chapters 3 se 7 mein kiya. Yeh chapter use poore design mein badalta hai.',
  'Chapter 12 measured the difference. Here it becomes a decision about ingestion and indexing.':
    'Chapter 12 ne is fark ko naapa. Yahan yeh ingestion aur indexing ka faisla ban jaata hai.',
  'The answer key is your measuring tool':
    'Answer key aapka naapne ka auzaar hai',
  'Like a teacher\'s key, every claim in this chapter is checked against it.':
    'Teacher ki key ki tarah, is chapter ka har daawa usi se jaancha jaata hai.',
  'Keep two things ready: your Chapter 12 retrieval pipeline and your Chapter 6 answer key.':
    'Do cheezein taiyaar rakhiye: Chapter 12 ka retrieval pipeline aur Chapter 6 ki answer key.',
  'Do units 11.5 and 11.8, then the capstone. Read the other units this pass.':
    'Units 11.5 aur 11.8 kijiye, phir capstone. Baaki units is baar sirf padh lijiye.',
  'Last chapter you decided what the model should see. Now we ask where that evidence comes from in a real system. Your Chapter 7 system works because you chose every document yourself. And you are its only user.':
    'Pichhle chapter mein aapne tay kiya ki model ko kya dikhna chahiye. Ab hum poochte hain ki asli system mein woh saboot kahan se aata hai. Aapka Chapter 7 ka system isliye chalta hai kyunki har document aapne khud chuna. Aur use sirf aap hi karte hain.',
  'Real use is different. Scans arrive crooked. Permissions change after a document is indexed (added to the library catalogue). The same contract is uploaded twice under two names. And your provider updates the model without telling you. This chapter is about a retrieval system that survives all of that.':
    'Asli use alag hai. Scans tedhe aate hain. Document index hone ke baad (library catalogue mein judne ke baad) permissions badal jaati hain. Ek hi contract do naamon se do baar upload ho jaata hai. Aur aapka provider bina bataye model badal deta hai. Yeh chapter aise retrieval system ke baare mein hai jo yeh sab jhel jaye.',
  'A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings (addresses for meaning), searching, building the prompt, and checking the answer. You can tune each stage. So each one is a suspect when quality drops and the code has not changed.':
    'Production pipeline ke saat stages hain: documents padhna, unhe baantna, labels jodna, embeddings banana (matlab ke pate), search karna, prompt banana, aur jawaab jaanchna. Aap har stage ko tune kar sakte hain. Isliye jab code nahin badla aur quality gire, to har stage par shak jaata hai.',
  'Anything lost while reading documents in is lost for good. Better search cannot bring back a table that the parser flattened, or a page that it skipped. It is like a photocopy that missed a page.':
    'Documents padhte samay jo kho gaya, woh hamesha ke liye kho gaya. Behtar search us table ko wapas nahin la sakti jise parser ne chapta kar diya, ya us page ko jise woh chhod gaya. Yeh ek photocopy jaisa hai jisme ek page chhoot gaya.',
  'There are eight units below. They follow one document on its journey. First it is read. Then it is labelled and split. Then it is searched. Last, it is protected, refreshed and, if needed, rolled back. Each unit has something to build and something to break.':
    'Neeche aath units hain. Yeh ek document ke safar ko follow karte hain. Pehle woh padha jaata hai. Phir label aur baanta jaata hai. Phir search hota hai. Ant mein woh surakshit hota hai, taza kiya jaata hai, aur zaroorat par wapas palta jaata hai. Har unit mein kuch banane ko hai aur kuch todne ko.',
  'Parsing and document ingestion':
    'Parsing and document ingestion',
  'You will treat ingestion as an engineering pipeline, like a factory line. It is more than “upload PDF.”':
    'Aap ingestion ko engineering pipeline maanenge, factory line ki tarah. Yeh “PDF upload karna” se kahin zyada hai.',
  'If bad data goes in, or the document loses its shape at ingestion, bad results come out of retrieval later.':
    'Agar kharab data andar gaya, ya ingestion mein document ka dhaancha kho gaya, to baad mein retrieval se kharab results nikalte hain.',
  'Take three PDFs or documents. Compare the text that was pulled out with what a person sees in the source.':
    'Teen PDF ya documents lijiye. Nikaale gaye text ko us se milaiye jo insaan source mein dekhta hai.',
  'Write down the page, the section, the table, the language and your notes on the parser.':
    'Page, section, table, bhasha aur parser ke baare mein apne notes likhiye.',
  'Use a scanned page, a page full of tables, and a broken document. Write down what gets lost.':
    'Ek scan kiya hua page, tables se bhara page, aur ek kharab document use kijiye. Likhiye ki kya kho jaata hai.',
  'An Ingestion Quality Report.':
    'An Ingestion Quality Report.',
  'Which information disappeared before retrieval even started?':
    'Retrieval shuru hone se pehle hi kaunsi jaankari gaayab ho gayi?',
  'Ask how good the parser or OCR (the tool that reads text from pictures) is before you blame the embeddings.':
    'Embeddings ko dosh dene se pehle poochiye ki parser ya OCR (tasveer se text padhne wala tool) kitna achha hai.',
  'Metadata and document identity':
    'Metadata and document identity',
  'You will give documents and chunks stable IDs, like roll numbers. You will add the metadata (labels) you need for filtering and provenance (where a fact came from).':
    'Aap documents aur chunks ko sthir IDs denge, roll number ki tarah. Aap woh metadata (labels) jodenge jo filtering aur provenance (fact kahan se aaya) ke liye chahiye.',
  'Metadata is part of how retrieval works. It is not decoration.':
    'Metadata retrieval ke kaam karne ka hissa hai. Yeh sajaavat nahin hai.',
  'Make these fields: document_id, version, section, language, access_label and effective_date.':
    'Yeh fields banaiye: document_id, version, section, language, access_label aur effective_date.',
  'Give every chunk a stable ID. Keep the link to its parent document.':
    'Har chunk ko ek sthir ID dijiye. Uske parent document se link banaye rakhiye.',
  'Make duplicate versions and old, replaced versions of a document. Test your retrieval filters.':
    'Document ke duplicate versions aur purane, badle hue versions banaiye. Apne retrieval filters test kijiye.',
  'A Document Metadata Contract.':
    'A Document Metadata Contract.',
  'Can the system tell current evidence from out-of-date evidence?':
    'Kya system maujooda saboot ko purane saboot se alag pehchan sakta hai?',
  'Versioning and identity matter a lot the moment a policy changes.':
    'Jaise hi koi policy badalti hai, versioning aur pehchaan bahut zaroori ho jaate hain.',
  'Chunking families':
    'Chunking families',
  'You will compare fixed, recursive or structure-aware, semantic and hierarchical chunking. None of them is best in every case.':
    'Aap fixed, recursive ya structure-aware, semantic aur hierarchical chunking ki tulna karenge. Inmein se koi har haal mein sabse achha nahin.',
  'A chunking choice is a guess about what size of evidence your users will need.':
    'Chunking ki pasand ek andaza hai ki aapke users ko kitne bade tukde ka saboot chahiye.',
  'Cut the same document into chunks in three ways. Look at where the edges fall.':
    'Ek hi document ko teen tareekon se chunks mein kaatiye. Dekhiye ki kinare kahan girte hain.',
  'Write 10 questions. Each needs a different amount of evidence.':
    '10 sawaal likhiye. Har ek ko alag matra mein saboot chahiye.',
  'Test a question whose answer crosses a chunk edge.':
    'Aisa sawaal test kijiye jiska jawaab chunk ke kinare ke paar jaata hai.',
  'A Chunking Experiment, with before and after examples.':
    'Ek Chunking Experiment, pehle aur baad ke examples ke saath.',
  'Which chunking matched your set of questions, and why?':
    'Kaunsi chunking aapke sawaalon ke set se mili, aur kyun?',
  'Do not ask “which chunking is best?” Ask “best for what corpus (your pile of documents), and for what kinds of questions?”':
    'Yeh mat poochiye “kaunsi chunking sabse achhi?” Poochiye “kis corpus (aapke documents ke dher) ke liye, aur kis tarah ke sawaalon ke liye sabse achhi?”',
  'Sparse retrieval':
    'Sparse retrieval',
  'You will learn exact-word search (lexical retrieval), like Ctrl+F, and why it is still useful.':
    'Aap theek-shabd wali search (lexical retrieval) seekhenge, Ctrl+F jaisi, aur yeh bhi ki woh ab bhi kaam ki kyun hai.',
  'Exact methods are often strongest for IDs, names, codes and exact phrases.':
    'IDs, naam, codes aur theek phrases ke liye exact tareeke aksar sabse mazboot hote hain.',
  'Build a small keyword or BM25-style search (a way to score pages by their words). Or use a library (ready-made code), once you understand the idea behind the scoring.':
    'Ek chhoti keyword ya BM25-style search banaiye (shabdon ke hisaab se pages ko score dene ka tareeka). Ya library use kijiye (bana-banaya code), jab aap scoring ke peeche ka vichar samajh jaayen.',
  'Measure the rank of the passages you know are the right answer.':
    'Un passages ka rank napiye jinhe aap jaante hain ki sahi jawaab hain.',
  'Use rephrased questions and questions full of synonyms. See where it is weak.':
    'Doosre shabdon mein poochhe sawaal aur samanarthi shabdon se bhare sawaal use kijiye. Dekhiye ki woh kahan kamzor hai.',
  'A Sparse Retrieval Benchmark.':
    'A Sparse Retrieval Benchmark.',
  'Where did exact matching win?':
    'Exact matching kahan jeeti?',
  'Do not throw away a strong, predictable signal just because embeddings are in fashion.':
    'Ek mazboot, jiska andaza ho sake aisa sanket sirf isliye mat chhodiye ki embeddings ka zamana hai.',
  'Dense, hybrid and vector search':
    'Dense, hybrid and vector search',
  'You will see embeddings as a way to store meaning that can be indexed. You will combine exact-word evidence with meaning evidence.':
    'Aap embeddings ko matlab sambhalne ka aisa tareeka maanenge jise index kiya ja sakta hai. Aap exact-shabd wale saboot ko matlab wale saboot se milayenge.',
  'Dense retrieval (search by meaning) helps when two texts mean the same thing in different words. Hybrid retrieval joins methods that fail in different ways, like two nets with different holes.':
    'Dense retrieval (matlab se search) tab madad karta hai jab do texts alag shabdon mein wahi baat kahte hain. Hybrid retrieval un tareekon ko jodta hai jo alag tarah se fail hote hain, alag chhedon wale do jaal ki tarah.',
  'Run the question set from Chapters 4 and 5 through lexical, dense and hybrid retrieval.':
    'Chapters 4 aur 5 ka sawaalon ka set lexical, dense aur hybrid retrieval se guzaariye.',
  'Write down the rank of the right evidence for each question.':
    'Har sawaal ke liye sahi saboot ka rank likhiye.',
  'Make cases with an exact ID, a synonym, several languages, and an unclear question.':
    'Aise cases banaiye jinme theek ID ho, ek samanarthi shabd ho, kai bhashayein hon, aur ek dhundhla sawaal ho.',
  'A Retrieval Benchmark with the evidence for each question.':
    'Ek Retrieval Benchmark, har sawaal ke saboot ke saath.',
  'Which kinds of question work best with which retriever?':
    'Kis tarah ke sawaal kaunse retriever ke saath sabse achhe chalte hain?',
  'Let the pattern of your mistakes guide your design.':
    'Apni galtiyon ke pattern ko apne design ka raasta dikhane dijiye.',
  'You will learn a second-stage relevance model (a second judge that re-orders the found pages). You will measure whether its benefit is worth the cost and the waiting time.':
    'Aap second-stage relevance model seekhenge (doosra judge jo mile hue pages ko dobara kram mein lagata hai). Aap napenge ki uska fayda kharch aur intezaar ke samay ke layak hai ya nahin.',
  'The first stage tries to find every good candidate. Reranking can then improve the order among those candidates, like re-sorting a shortlist.':
    'Pehla stage har achha candidate dhoondhne ki koshish karta hai. Reranking phir un candidates ke beech kram sudhaar sakti hai, shortlist ko dobara lagane jaisa.',
  'Fetch 10 candidates and add a second scoring stage. Use a reranker you have, or a stand-in you have measured.':
    '10 candidates laiye aur ek doosra scoring stage jodiye. Jo reranker aapke paas hai woh use kijiye, ya koi napa hua badal.',
  'Compare Recall@10 (how many right pages are in the top 10), Precision@3 (how many of the top 3 are right) and latency (waiting time), before and after.':
    'Recall@10 (top 10 mein kitne sahi pages), Precision@3 (top 3 mein kitne sahi) aur latency (intezaar ka samay) ki tulna kijiye, pehle aur baad.',
  'Include cases where the reranker puts the evidence in the wrong order, and does it with confidence.':
    'Aise cases rakhiye jahan reranker saboot ko galat kram mein lagata hai, aur woh bhi pakke yakeen ke saath.',
  'A Reranking Experiment Report.':
    'A Reranking Experiment Report.',
  'Did the gain reach the final task, or only a number in the middle?':
    'Kya fayda aakhri kaam tak pahuncha, ya sirf beech ke ek number tak?',
  'Never add reranking just because a sample design has it. Prove that it is worth it.':
    'Reranking sirf isliye mat jodiye ki kisi namune ke design mein hai. Saabit kijiye ki woh layak hai.',
  'Query rewriting, parent-child retrieval and abstention':
    'Query rewriting, parent-child retrieval and abstention',
  'You will improve the search question and the size of the context, and still keep what the user meant.':
    'Aap search ke sawaal aur context ke size ko behtar karenge, aur phir bhi wahi rakhenge jo user ka matlab tha.',
  'Retrieval is a pipeline of steps: forming the query, finding candidates, filtering, ranking, putting the context together, and the policy for the answer.':
    'Retrieval kadmon ki pipeline hai: query banana, candidates dhoondhna, chhaanna, rank karna, context jodna, aur jawaab ki policy.',
  'Rewrite unclear questions as clear search queries. Compare the results.':
    'Dhundhle sawaalon ko saaf search queries mein dobara likhiye. Natijon ki tulna kijiye.',
  'Find small child chunks, but hand back the bigger parent text, so the answer reads well.':
    'Chhote child chunks dhoondhiye, par bada parent text wapas dijiye, taaki jawaab achha padha jaye.',
  'Test a question that has no answer, and a question where the rewrite changes what the user meant.':
    'Aisa sawaal test kijiye jiska koi jawaab nahin, aur aisa sawaal jahan rewrite se user ka matlab badal jaata hai.',
  'A Query Strategy and an Abstention Test Set (questions where the system should say “I do not know”).':
    'Ek Query Strategy aur ek Abstention Test Set (aise sawaal jahan system ko “mujhe nahin pata” kehna chahiye).',
  'When should the system ask a question back instead of searching?':
    'System ko kab khud sawaal poochna chahiye, search karne ke bajaye?',
  'Saying “I do not know” is a product behaviour. It is more than one sentence in a prompt.':
    '“Mujhe nahin pata” kehna product ka vyavahar hai. Yeh prompt ke ek sentence se kahin zyada hai.',
  'Authorization, freshness and rollback':
    'Authorization, freshness and rollback',
  'You will make retrieval respect permissions (who may see what). You will make it safe to undo changes.':
    'Aap retrieval ko permissions ka dhyan rakhne wala banayenge (kaun kya dekh sakta hai). Aur badlav ko surakshit tareeke se wapas karna sambhav banayenge.',
  'A correct answer taken from data the user may not see is still a security failure.':
    'Aise data se aaya sahi jawaab bhi security ki chook hai jise user dekh nahin sakta tha.',
  'Add an access label to your chunks. Filter by the role of a test user.':
    'Apne chunks mein ek access label jodiye. Test user ke role se chhaaniye.',
  'Pretend a document is deleted, a permission changes, and the index is rebuilt.':
    'Maan lijiye ek document hata, ek permission badli, aur index dobara banaya gaya. Yeh sab chalakar dekhiye.',
  'Ask a question right after a permission is taken away. Check that old content left in the index cannot be reached.':
    'Permission hatne ke turant baad sawaal poochiye. Dekhiye ki index mein bacha purana content paaya nahin ja sakta.',
  'A production RAG architecture, plus a checklist for permissions, freshness and rollback.':
    'Ek production RAG architecture, aur permissions, freshness aur rollback ki checklist.',
  'Can you prove that a user who is not allowed cannot get the chunk?':
    'Kya aap saabit kar sakte hain ki jise ijazat nahin hai woh chunk nahin pa sakta?',
  'Keep permission checks in the application and the data, like a lock on the door. Putting them only in the model\'s instructions is not enough.':
    'Permission ki jaanch application aur data mein rakhiye, darwaze ke taale ki tarah. Sirf model ke nirdeshon mein rakhna kaafi nahin.',
  'Reranking has a cost':
    'Reranking has a cost',
  'Reranking improves the order of results, but it adds cost. Fetch ten candidates and score them again. Then check if recall at ten and precision at three improved enough to be worth the extra time and cost.':
    'Reranking results ka kram sudhaarti hai, par kharch badhaati hai. Das candidates laiye aur unhe dobara score kijiye. Phir dekhiye ki recall at ten aur precision at three itne sudhre ya nahin ki extra samay aur kharch theek lage.',
  'Four questions to ask about any retrieval product':
    'Four questions to ask about any retrieval product',
  'A real retrieval system has a long list of worries. You do not need to memorise it. Every item fits under one of four questions.':
    'Asli retrieval system ki chintaon ki lambi list hoti hai. Ise ratna zaroori nahin. Har cheez chaar sawaalon mein se kisi ek ke neeche aati hai.',
  '<strong>Did we read the document correctly?</strong> This covers scans, tables, and content that a parser drops.':
    '<strong>Kya humne document sahi padha?</strong> Isme scans, tables, aur woh content aata hai jo parser chhod deta hai.',
  '<strong>Is this user allowed to see it?</strong> This covers permissions, separate customers, and deleted documents.':
    '<strong>Kya is user ko ise dekhne ki ijazat hai?</strong> Isme permissions, alag-alag customers, aur hataye gaye documents aate hain.',
  '<strong>Did we find the right chunk?</strong> This covers keyword search, meaning search, query rewriting and reranking.':
    '<strong>Kya humne sahi chunk dhoondha?</strong> Isme keyword search, matlab se search, query rewriting aur reranking aate hain.',
  '<strong>Can we show where the answer came from?</strong> This covers chunk IDs, citations, and what happens when there is no answer.':
    '<strong>Kya hum dikha sakte hain ki jawaab kahan se aaya?</strong> Isme chunk IDs, citations, aur jawaab na hone par kya hota hai, yeh aata hai.',
  'Use these four questions whenever someone shows you a retrieval product. Then try them on a case of your own.':
    'Jab bhi koi aapko retrieval product dikhaye, yeh chaar sawaal poochiye. Phir inhe apne ek case par aazmaiye.',
  'A document is deleted from the source system at 10am. Write what must happen so the assistant stops quoting it, and by when.':
    'Source system se ek document subah 10 baje hata diya jaata hai. Likhiye ki assistant ko use quote karna band karne ke liye kya hona chahiye, aur kab tak.',
  'At 10am … then … by …':
    '10 baje … phir … tak …',
  'If your answer depends on a nightly rebuild, your system keeps quoting the deleted document from 10am until the rebuild. That gap is a decision, so make it on purpose.':
    'Agar aapka jawaab raat ke rebuild par tika hai, to aapka system 10 baje se rebuild tak hataye document ko quote karta rahega. Yeh gap ek faisla hai, isliye ise soch-samajhkar lijiye.',
  'In short: ingestion sets the ceiling. Permissions and deletions must reach the index. Every extra stage must prove it is worth its cost. Next, in Chapter 25, you will give the model controlled access to actions, not only to evidence.':
    'Chhote mein: ingestion chhat tay karta hai. Permissions aur deletions index tak pahunchne chahiye. Har extra stage ko saabit karna hoga ki woh apne kharch ke layak hai. Agle Chapter 25 mein aap model ko kaamon tak niyantrit pahunch denge, sirf saboot tak nahin.',
});
