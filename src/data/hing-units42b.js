/* Hinglish: the v4.2 hands-on units, part 2 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'Measure how much of the context is instructions, history, retrieved text and tool output.':
    'Naapiye ki context mein kitna hissa nirdesh hai, kitna itihaas, kitna laaya gaya text aur kitna tool ka output.',
  'Context is a finite resource with quality, latency and cost implications.':
    'Context seemit sansaadhan hai, aur uska asar gunvatta, latency aur lagat — teenon par padta hai.',
  'Record token counts for each context component where the provider exposes them or estimate consistently.':
    'Context ke har hisse ke token ginye, jahan provider batata ho — warna ek hi tareeke se andaaza lagaiye.',
  'Create a budget policy: what gets kept, summarized or dropped first.':
    'Ek budget policy banaiye: kya rakha jaayega, kya saar bana kar, aur sabse pehle kya hataya jaayega.',
  'Flood the context with irrelevant history and compare answer quality and cost.':
    'Context ko bekaar ke itihaas se bhar dijiye aur jawaab ki gunvatta aur lagat ki tulna kijiye.',
  'Context Budget Worksheet.':
    'Context Budget ki worksheet.',
  'What is the first thing you would remove under pressure?':
    'Dabaav mein sabse pehle aap kya hataayenge?',
  'A PM should be able to ask “what is in the context?” and get an exact answer.':
    'PM ko “context mein hai kya?” poochhne par theek-theek jawaab milna chahiye.',
  'State, history and memory':
    'State, itihaas aur memory',
  'Separate request context, conversation history, durable user data and task state.':
    'Request ka context, baatcheet ka itihaas, tikau user data aur kaam ki state — chaaron alag kijiye.',
  '“Memory” is not one feature; it is an application architecture with storage, retention and authorization.':
    '“Memory” koi ek feature nahi hai; woh ek poora application architecture hai — bhandaaran, kitne din rakhna, aur kaun dekh sakta hai.',
  'Draw three stores: session history, user profile, task state.':
    'Teen bhandaar banaiye: session ka itihaas, user ka profile, aur kaam ki state.',
  'Specify fields, owner, retention, access and deletion path for each.':
    'Har ek ke liye field, zimmedar, kitne din rakhna, pahunch aur mitaane ka raasta likhiye.',
  'Introduce stale or conflicting memory and define precedence rules.':
    'Purani ya aapas mein takraati memory daaliye aur pehle kiski chalegi — yeh niyam banaiye.',
  'Memory/State Design Sheet.':
    'Memory aur State ke design ki sheet.',
  'What data should never be injected into a prompt by default?':
    'Kaunsa data apne-aap kabhi bhi prompt mein nahi jaana chahiye?',
  'This is where privacy and product design meet context engineering.':
    'Yahi woh jagah hai jahan niji-ta aur product design context engineering se milte hain.',
  'Provenance and citations':
    'Provenance aur hawaale',
  'Make evidence traceable from answer to source, chunk and version.':
    'Saboot ko jawaab se source, chunk aur version tak peechha kiya ja sakne laayak banaiye.',
  'A citation is useful only if it lets the user or auditor trace the claim to evidence.':
    'Hawaala tabhi kaam ka hai jab user ya jaanchkarta daawe se saboot tak pahunch sake.',
  'Attach source ID, section and chunk ID to each retrieved passage.':
    'Har laaye gaye ansh ke saath source ID, section aur chunk ID jodiye.',
  'Generate an answer that cites those identifiers.':
    'Ek aisa jawaab banwaiye jo unhi pehchaan-numbers ka hawaala de.',
  'Delete or change a source version and test whether old citations remain valid.':
    'Kisi source ka version mitaiye ya badliye, aur dekhiye ki purane hawaale ab bhi sahi hain ya nahi.',
  'Provenance schema + citation examples.':
    'Provenance ka schema aur hawaalon ke udaharan.',
  'Can you reproduce the exact source used for an answer?':
    'Kya aap dobara wahi source nikaal sakte hain jo jawaab ke liye istemaal hua tha?',
  'Traceability is essential in regulated or policy-heavy systems.':
    'Jahan niyam ya policy bhaari hon, wahan peechha kar paana zaroori hai.',
  'Context failure clinic':
    'Context ki galtiyon ka clinic',
  'Diagnose wrong answers caused by missing, stale, irrelevant, contradictory or malicious context.':
    'Gayab, purane, bekaar, takraate ya nuksaan-pahunchane wale context se aaye galat jawaabon ki pehchaan kijiye.',
  'Many “model failures” are actually context-construction failures.':
    'Bahut si “model ki galtiyan” asal mein context jodne ki galtiyan hoti hain.',
  'Create five intentionally bad context packages and predict the failure.':
    'Paanch jaan-boojh kar kharab context package banaiye aur pehle se bataiye kya bigdega.',
  'Fix one issue at a time and rerun the same test set.':
    'Ek-ek kar ke sudhaariye aur wahi test set dobara chalaiye.',
  'Mix stale policy, unrelated text and prompt injection into the context.':
    'Context mein purani policy, bemel text aur prompt injection mila dijiye.',
  'Context Failure Taxonomy.':
    'Context ki galtiyon ka vargikaran.',
  'What failed: retrieval, assembly, authorization, instruction hierarchy, or generation?':
    'Kya fail hua: retrieval, jodna, permission, nirdeshon ka kram, ya generation?',
  'This prepares you for production RAG and security.':
    'Yeh aapko production RAG aur security ke liye taiyaar karta hai.',
  'Now the context package becomes the input to a real retrieval architecture.':
    'Ab yahi context package ek asli retrieval architecture ka input ban jaata hai.',
  'Parsing and document ingestion':
    'Parsing aur document ka andar lena',
  'Treat document ingestion as an engineering pipeline rather than “upload PDF.”':
    'Document andar lene ko “PDF upload kar do” nahi, ek engineering pipeline maaniye.',
  'Garbage or lost structure at ingestion becomes retrieval garbage later.':
    'Andar lete waqt jo kachra ya khoya hua dhaancha hai, woh aage chal kar retrieval ka kachra ban jaata hai.',
  'Take three PDFs/documents and compare extracted text with the human-visible source.':
    'Teen PDF ya document lijiye aur nikaale gaye text ki tulna us se kijiye jo aankh ko dikhta hai.',
  'Record page, section, table, language and parser notes.':
    'Panna, section, table, bhasha aur parser ke note likhiye.',
  'Use a scanned page, table-heavy page and malformed document. Record what is lost.':
    'Ek scan kiya panna, ek table se bhara panna aur ek bigda document lijiye. Likhiye kya khoya.',
  'Ingestion Quality Report.':
    'Andar lene ki gunvatta ki report.',
  'Which information disappeared before retrieval even started?':
    'Retrieval shuru hone se pehle hi kaunsi jaankari gayab ho gayi?',
  'Ask for parser/OCR quality before blaming embeddings.':
    'Embedding ko dosh dene se pehle parser ya OCR ki gunvatta poochhiye.',
  'Metadata and document identity':
    'Metadata aur document ki pehchaan',
  'Design stable document and chunk identifiers plus metadata needed for filtering and provenance.':
    'Document aur chunk ki tikau pehchaan banaiye, aur woh metadata bhi jo chhaantne aur provenance ke liye chahiye.',
  'Metadata is part of retrieval logic, not decoration.':
    'Metadata retrieval ke tark ka hissa hai, sajaavat nahi.',
  'Create fields: document_id, version, section, language, access_label, effective_date.':
    'Yeh field banaiye: document_id, version, section, language, access_label, effective_date.',
  'Assign stable chunk IDs and preserve parent relationships.':
    'Chunk ko tikau ID dijiye aur unke parent se rishta bachaye rakhiye.',
  'Create duplicate and superseded versions and test retrieval filters.':
    'Nakal aur purane pad chuke version banaiye aur retrieval ke filter jaanchiye.',
  'Document Metadata Contract.':
    'Document ke metadata ka contract.',
  'Can the system distinguish current from obsolete evidence?':
    'Kya system abhi ke aur bekaar ho chuke saboot mein fark kar sakta hai?',
  'Versioning and identity become critical when policy changes.':
    'Jab policy badalti hai, tab version aur pehchaan sabse zaroori ho jaate hain.',
  'Chunking families':
    'Chunking ke parivaar',
  'Compare fixed, recursive/structure-aware, semantic and hierarchical chunking without treating any as universally best.':
    'Nishchit, dhaancha samajhne wali, arth wali aur star wali chunking ki tulna kijiye — kisi ko bhi sarvashreshth maane bina.',
  'Chunking is a hypothesis about what unit of evidence users will need.':
    'Chunking is baare mein ek anumaan hai ki user ko saboot kis naap mein chahiye hoga.',
  'Chunk the same document three ways and inspect boundaries.':
    'Ek hi document ko teen tareekon se kaatiye aur kinaaron ko dekhiye.',
  'Create 10 questions that require different evidence granularity.':
    'Dus aise sawaal banaiye jinhen alag-alag naap ka saboot chahiye.',
  'Test a question whose answer crosses a chunk boundary.':
    'Aisa sawaal jaanchiye jiska jawaab chunk ki lakeer paar karta ho.',
  'Chunking Experiment with before/after examples.':
    'Chunking ka experiment, pehle aur baad ke udaharan ke saath.',
  'Which chunking strategy matched your question set and why?':
    'Kaunsi chunking strategy aapke sawaal-set se meli, aur kyun?',
  'The right question is not “which chunking is best?” but “best for what corpus and query distribution?”':
    'Sahi sawaal “kaunsi chunking sabse achhi hai?” nahi hai, balki “kis dastaavez-sangrah aur kis tarah ke sawaalon ke liye sabse achhi?” hai.',
  'Sparse retrieval':
    'Sparse retrieval',
  'Understand exact lexical retrieval and why it remains valuable.':
    'Theek shabd milaane wala retrieval samajhiye, aur yeh bhi ki woh aaj bhi kaam ka kyun hai.',
  'Identifiers, names, codes and exact phrases are often retrieval strengths for lexical methods.':
    'Pehchaan-number, naam, code aur theek vaakyansh — inmein shabd milaane wale tareeke aksar aage rehte hain.',
  'Build a small keyword/BM25-style search experiment or use a library after understanding the scoring idea.':
    'Ek chhota keyword ya BM25 jaisa search experiment banaiye — ya scoring ka vichaar samajhne ke baad koi library istemaal kijiye.',
  'Measure rank of known target passages.':
    'Jaane-pehchaane ansh kis kram par aate hain, yeh naapiye.',
  'Use paraphrased questions and synonym-heavy questions to expose weaknesses.':
    'Ghuma kar poochhe gaye aur paryaayvaachi se bhare sawaalon se kamzoriyan saamne laaiye.',
  'Sparse Retrieval Benchmark.':
    'Sparse retrieval ka benchmark.',
  'Where did exact matching win?':
    'Theek milaan kahan jeeta?',
  'Do not replace strong deterministic signals merely because embeddings are fashionable.':
    'Sirf isliye ki embedding ka chalan hai, majboot nishchit sanketon ko mat hataiye.',
  'Dense, hybrid and vector search':
    'Dense, hybrid aur vector search',
  'Understand embeddings as an indexable representation and combine sparse/dense evidence.':
    'Embedding ko index kiye ja sakne wale roop ki tarah samajhiye, aur sparse aur dense saboot ko milaiye.',
  'Dense retrieval helps when meaning is similar despite wording differences; hybrid retrieval combines different failure modes.':
    'Jab shabd alag hon par arth ek ho, tab dense retrieval kaam aata hai; hybrid alag-alag galtiyon ko aapas mein dhak deta hai.',
  'Run the Chapter 4–5 question set through lexical, dense and hybrid retrieval.':
    'Chapter 4–5 ke sawaal-set ko lexical, dense aur hybrid — teenon se guzaariye.',
  'Record rank of relevant evidence for each query.':
    'Har query ke liye sahi saboot kis kram par aaya, yeh likhiye.',
  'Create exact-ID, synonym, multilingual and ambiguous cases.':
    'Theek-ID, paryaayvaachi, kai bhasha aur dhundhle case banaiye.',
  'Retrieval Benchmark with per-query evidence.':
    'Retrieval ka benchmark, har query ke saboot ke saath.',
  'Which query categories benefit from which retriever?':
    'Kis tarah ke sawaalon ko kaunsa retriever faayda deta hai?',
  'Architecture decisions should follow your error distribution.':
    'Architecture ke faisle aapki galtiyon ke bantvaare ke peechhe chalne chahiye.',
  'Understand a second-stage relevance model and measure whether its benefit justifies cost/latency.':
    'Doosre charan ka relevance model samajhiye aur naapiye ki uska faayda lagat aur latency ke laayak hai ya nahi.',
  'First-stage retrieval optimizes candidate recall; reranking can improve ordering among candidates.':
    'Pehla charan yeh dekhta hai ki sahi cheez soochi mein aayi ya nahi; reranking un umeedwaaron ka kram sudhaarta hai.',
  'Retrieve 10 candidates and apply a second scoring stage using an available reranker or measured substitute.':
    'Dus umeedwaar laaiye aur kisi uplabdh reranker — ya naape gaye vikalp — se doosra scoring charan lagaiye.',
  'Compare Recall@10, Precision@3 and latency before/after.':
    'Recall@10, Precision@3 aur latency ki pehle-baad tulna kijiye.',
  'Include cases where the reranker confidently misorders evidence.':
    'Aise case bhi rakhiye jahan reranker poore aatmvishwaas se galat kram lagaata hai.',
  'Reranking Experiment Report.':
    'Reranking experiment ki report.',
  'Did the improvement affect the final task or only an intermediate metric?':
    'Sudhaar ka asar aakhri kaam par pada, ya sirf beech ke kisi metric par?',
  'Never add reranking because a reference architecture contains it; prove its value.':
    'Reranking isliye mat jodiye ki kisi namoona architecture mein hai; uska faayda sabit kijiye.',
  'Query rewriting, parent-child retrieval and abstention':
    'Query dobara likhna, parent-child retrieval, aur chup rehna',
  'Improve the retrieval query and context granularity while preserving user intent.':
    'Retrieval ki query aur context ki naap sudhaariye — par user ka matlab bachaye rakhiye.',
  'Retrieval is a pipeline: query formulation, candidate search, filtering, ranking, context assembly and answer policy.':
    'Retrieval ek pipeline hai: query banana, umeedwaar dhoondhna, chhaantna, kram lagana, context jodna, aur jawaab ki policy.',
  'Rewrite ambiguous questions into explicit search queries and compare results.':
    'Dhundhle sawaalon ko saaf search query mein badliye aur nateejon ki tulna kijiye.',
  'Retrieve child chunks while returning parent context for readability.':
    'Chhote chunk laaiye, lekin padhne mein aasaani ke liye parent ka context lautaiye.',
  'Test an unanswerable query and a query where rewriting changes the intended meaning.':
    'Ek aisi query jaanchiye jiska jawaab hai hi nahi, aur ek aisi jismein dobara likhne se matlab hi badal jaata hai.',
  'Query Strategy + Abstention Test Set.':
    'Query ki strategy aur chup rehne ka test set.',
  'When should the system ask a clarification question rather than retrieve?':
    'System ko kab retrieval ke bajaay saaf karne wala sawaal poochhna chahiye?',
  'Abstention is a product behavior, not merely a prompt sentence.':
    'Chup reh jaana product ka vyavhaar hai, sirf prompt ka ek vaakya nahi.',
  'Authorization, freshness and rollback':
    'Permission, taazgi aur wapas lautna',
  'Make retrieval permission-aware and operationally reversible.':
    'Retrieval ko permission samajhne wala banaiye, aur aisa ki use wapas palta ja sake.',
  'A correct answer from unauthorized data is still a security failure.':
    'Bina ijaazat wale data se aaya sahi jawaab bhi security ki galti hai.',
  'Add an access label to chunks and filter by a test user role.':
    'Chunk par ek access label lagaiye aur kisi test user ke role se chhaantiye.',
  'Simulate document deletion, permission change and index rebuild.':
    'Document mitna, permission badalna aur index dobara banna — teenon ka abhyaas kijiye.',
  'Query immediately after revocation and verify stale index content is inaccessible.':
    'Ijaazat wapas lene ke turant baad query kijiye aur dekhiye ki purana index ka maal pahunch se baahar hai.',
  'Production RAG Architecture + ACL/Freshness/Rollback checklist.':
    'Production RAG ka architecture, aur ACL, taazgi tatha rollback ki checklist.',
  'Can you prove an unauthorized user cannot retrieve the chunk?':
    'Kya aap sabit kar sakte hain ki bina ijaazat wala user woh chunk nahi nikaal sakta?',
  'Authorization belongs at the application/data layer, not only in model instructions.':
    'Permission ki jagah application ya data ki parat hai, sirf model ke nirdesh nahi.',
  'Next, the model gets controlled access to actions rather than only evidence.':
    'Aage model ko sirf saboot nahi, kaam karne ki naapi-tuli chhoot bhi milti hai.',
  'Tool schemas':
    'Tool ke schema',
  'Define a tool as a constrained contract with name, description, parameters, errors and permissions.':
    'Tool ko ek bandha hua contract maan kar likhiye — naam, vivran, parameter, error aur permission ke saath.',
  'Good tool definitions are part of the model’s operating interface.':
    'Achhi tool paribhasha model ke chalne wale interface ka hissa hoti hai.',
  'Write a schema for <code>get_invoice_status(invoice_id)</code>.':
    '<code>get_invoice_status(invoice_id)</code> ke liye ek schema likhiye.',
  'Add required fields, allowed formats and explicit error states.':
    'Zaroori field, maanya format aur saaf-saaf error ki sthitiyan jodiye.',
  'Try missing IDs, invalid formats and an unauthorized invoice.':
    'Gayab ID, galat format aur bina ijaazat wale invoice — teenon aazmaiye.',
  'Tool Contract Specification.':
    'Tool contract ka specification.',
  'Could a new engineer understand exactly what the tool can and cannot do?':
    'Kya koi naya engineer theek-theek samajh lega ki tool kya kar sakta hai aur kya nahi?',
  'Tool descriptions deserve the same care as API documentation.':
    'Tool ke vivran par utni hi mehnat honi chahiye jitni API documentation par.',
  'Tool selection':
    'Tool ka chunaav',
  'Measure whether the model selects the correct capability for each task.':
    'Naapiye ki model har kaam ke liye sahi kshamta chunta hai ya nahi.',
  'Tool use should be justified by decision value, not novelty.':
    'Tool ka istemaal faisle ke faayde se sahi thehrana chahiye, nayepan se nahi.'

});
