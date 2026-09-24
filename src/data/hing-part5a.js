/* Hinglish: the lab-first plan blocks (every chapter), and Part V chapter 21.

   Keyed on the English line exactly as it appears in the course, so an edit to
   the English falls back to English rather than showing a translation of
   something else. Technical words stay in English on purpose — that is what
   people actually say in the room. */
Object.assign(window.HING = window.HING || {}, {

  'The applied track — production depth':
    'Applied track — production ki gehraai',
  'Open a notebook and make one model API call before reading anything. Predict first: is it retrieving an answer, or generating one?':
    'Notebook kholiye aur kuch bhi padhne se pehle ek model API call kijiye. Pehle andaaza lagaiye: yeh jawaab dhoondh raha hai, ya bana raha hai?',
  'Run a short question, then a long input, and save the raw response and the usage block from each.':
    'Ek chhota sawaal chalaiye, phir ek lamba input, aur dono ka raw response aur usage block save kijiye.',
  'Ask for something it cannot know and watch what arrives anyway.':
    'Aisi cheez poochhiye jo ise pata ho hi nahi sakti, aur dekhiye phir bhi kya aata hai.',
  'A one-page request anatomy: input → model → output → tokens → cost.':
    'Ek page par request ki anatomy: input → model → output → tokens → cost.',
  'Explain the request lifecycle without once saying “the AI just knows”.':
    'Request ka poora safar samjhaiye, bina ek baar bhi yeh kahe ki "AI ko bas pata hota hai".',
  'Predict how the input token count changes when a conversation\'s history is re-sent on every turn.':
    'Andaaza lagaiye ki jab har baari puri conversation ki history dobara bheji jaati hai to input token count kaise badalta hai.',
  'Make two independent calls, then a third that resends the history, and compare the receipts.':
    'Do alag-alag calls kijiye, phir teesri jisme history dobara bheji jaaye, aur teeno ki receipt milaiye.',
  'Test whether anything survives between calls on the model\'s side. It does not — catch it red-handed.':
    'Test kijiye ki model ki taraf do calls ke beech kuch bachta hai ya nahi. Nahi bachta — ise rangey haath pakadiye.',
  'The same request anatomy, now with context and statelessness on it.':
    'Wahi request anatomy, ab usme context aur statelessness bhi likhe hue.',
  'Explain why a fifty-message chat costs more per message than a two-message one.':
    'Samjhaiye ki pachaas message waali chat mein har message do message waali chat se mehnga kyun padta hai.',
  'Ask about a policy or document you know to be fictional, and save exactly what it claims.':
    'Aisi policy ya document ke baare mein poochhiye jo aapko pata hai ki hai hi nahi, aur jo woh daawa kare use hubahu save kijiye.',
  'Compare three runs: no guardrail, a verification guardrail, and an evidence-only instruction. Then test low and high sampling.':
    'Teen run milaiye: bina guardrail, verification waala guardrail, aur sirf-evidence waali instruction. Phir kam aur zyada sampling test kijiye.',
  'Apply social pressure to the guardrail that worked, then hand it the real source text.':
    'Jo guardrail kaam kar gaya tha us par social pressure daaliye, phir use asli source text thama dijiye.',
  'A hallucination and guardrail test matrix.':
    'Hallucination aur guardrail ka test matrix.',
  'Explain why prompting influences behaviour but is not a security boundary.':
    'Samjhaiye ki prompting behaviour ko badalti to hai, par security boundary kyun nahi hai.',
  'Pick a document of five to fifteen pages and write five questions. Cut it into three giant pieces and predict what retrieval will do.':
    'Paanch se pandrah page ka ek document lijiye aur paanch sawaal likhiye. Use teen bade tukdon mein kaatiye aur andaaza lagaiye ki retrieval ka kya haal hoga.',
  'Re-cut into fifteen or twenty fixed-size pieces, then into human-sized ones. Record completeness and boundary damage each time.':
    'Ab pandrah-bees barabar tukdon mein kaatiye, phir insaani hisaab se. Har baar likhiye ki jawaab poora mila ya nahi, aur kahan kaat se nuksaan hua.',
  'Find a rule severed from its exception, or a procedure severed from its warning.':
    'Aisa rule dhoondhiye jo apne exception se kat gaya ho, ya aisi procedure jo apni warning se.',
  'A three-round chunking experiment sheet, and the rule you derived from it.':
    'Teen round ke chunking experiment ki sheet, aur usse aapne jo rule nikala.',
  'Defend your chunking strategy from the evidence, not from a default.':
    'Apni chunking strategy ko evidence se defend kijiye, default se nahi.',
  'Using only Ctrl-F and your own eyes, rank your chapter 3 questions against your chunks. No common sense allowed.':
    'Sirf Ctrl-F aur apni aankhon se, chapter 3 ke sawaalon ko apne chunks ke against rank kijiye. Common sense laga nahi sakte.',
  'Add a synonym question, a plain-language question, a second-language question, and one containing an exact identifier.':
    'Ek synonym waala sawaal joriye, ek aam bhasha waala, ek doosri bhasha waala, aur ek jisme koi exact number ya code ho.',
  'Ask something the document genuinely cannot answer, and find the chunk that still ranks first.':
    'Aisa kuch poochhiye jiska jawaab document mein sach mein hai hi nahi, aur dekhiye phir bhi kaun sa chunk pehle number par aata hai.',
  'A retrieval failure map.':
    'Retrieval ke failure ka naksha.',
  'Explain why returning a result does not mean an answer exists.':
    'Samjhaiye ki result aa jaane ka matlab yeh nahi ki jawaab maujood hai.',
  'Predict which of your chapter 4 failures meaning-matching will cure, and which will survive it.':
    'Andaaza lagaiye ki chapter 4 ke kaun se failure meaning-matching theek kar degi, aur kaun se bach jaayenge.',
  'Embed the chunks and the questions, score them by nearness, retrieve the top few and compare the ranks against yesterday\'s.':
    'Chunks aur sawaalon ko embed kijiye, nazdeeki se score dijiye, upar ke kuch uthaiye, aur ranks kal waali list se milaiye.',
  'Test the exact-identifier question, the unanswerable one, and the second-language one.':
    'Exact identifier waala sawaal, bina-jawaab waala, aur doosri bhasha waala — teeno test kijiye.',
  'A keyword-versus-semantic leaderboard, and your own hybrid-search hypothesis.':
    'Keyword banaam semantic ka leaderboard, aur hybrid search ke baare mein aapka apna andaaza.',
  'Explain embeddings from the results you observed, not from the definition.':
    'Embeddings ko un results se samjhaiye jo aapne khud dekhe, definition se nahi.',
  'Predict how many of ten questions will retrieve correctly at k=3. Write the number down and circle it.':
    'Andaaza lagaiye ki das mein se kitne sawaal k=3 par sahi chunk laayenge. Number likhiye aur uspar gola bana dijiye.',
  'Build ground truth including one unanswerable case, then measure at k=1, k=3 and k=8.':
    'Ground truth banaiye jisme ek aisa case ho jiska jawaab hai hi nahi, phir k=1, k=3 aur k=8 par naapiye.',
  'Change one retrieval variable and re-run the whole set.':
    'Retrieval ki ek cheez badliye aur poora set dobara chalaiye.',
  'An evaluation table, acceptance criteria, and a release threshold.':
    'Ek evaluation table, acceptance criteria, aur release ka threshold.',
  'Defend why the quality bar depends on what the failure costs, not on the technology.':
    'Yeh defend kijiye ki quality ka bar technology par nahi, balki failure ki keemat par tika hota hai.',
  'Draw the complete system from memory and mark every failure you have personally watched happen.':
    'Poora system yaad se banaiye aur har woh failure mark kijiye jo aapne apni aankhon se hote dekha hai.',
  'Implement the smallest end-to-end retrieval answer function, with evidence ids and the usage block.':
    'Sabse chhota end-to-end retrieval answer function banaiye, evidence ids aur usage block ke saath.',
  'Test a no-answer question, poisoned retrieved content, and the system with its instruction removed.':
    'Teen cheezein test kijiye: bina-jawaab waala sawaal, zeher milaya hua retrieved content, aur system jiski instruction hata di gayi ho.',
  'A red-marked architecture and failure map, plus a working demo.':
    'Laal nishaan lagi architecture aur failure ka naksha, saath mein ek chalta hua demo.',
  'Explain every layer without hiding behind a framework.':
    'Har layer samjhaiye, kisi framework ke peechhe chhipe bina.',
  'Open a notebook and write a Python program that reads JSON, calls an HTTP endpoint, handles a failure status and writes JSON back out — before you read a word below.':
    'Notebook kholiye aur ek Python program likhiye jo JSON padhe, ek HTTP endpoint ko call kare, failure status sambhaale aur JSON wapas likhe — neeche ek shabd padhne se pehle.',
  'Turn it into an experiment harness that records id, timestamp, model, prompt, response, latency, usage and errors.':
    'Ise ek experiment harness bana dijiye jo id, time, model, prompt, response, latency, usage aur errors sab likh le.',
  'Feed it malformed JSON, a missing field, a timeout, and a 429 and a 500. Watch which ones it survives.':
    'Ise tuta hua JSON dijiye, ek gayab field, ek timeout, aur ek 429 aur ek 500. Dekhiye kaun se jhelta hai.',
  'A Git repository holding the harness and its tests.':
    'Ek Git repository jisme harness aur uske tests rakhe hon.',
  'Trace one failure from the input that caused it all the way to the error it produced.':
    'Ek failure ko poora traciye — jis input se hui thi wahan se us error tak jo usne banaya.',
  'Write a 20-line utility that reads JSON from a file and filters rows by one field.':
    'Ek 20 line ki utility likhiye jo file se JSON padhe aur ek field ke hisaab se rows chhaante.'

});
