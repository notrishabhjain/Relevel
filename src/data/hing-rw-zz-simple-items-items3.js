/* Hinglish for items3 (items:items3), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Your envelope (all the text sent in one request) is 24,000 tokens. The window (the model’s desk) holds 200,000 tokens. A colleague says there is “plenty of headroom.” What is the flaw?':
    'Aapka envelope (ek request mein bheja gaya poora text) 24,000 tokens ka hai. Window (model ki mez) 200,000 tokens rakhti hai. Ek saathi kehta hai ki “bahut headroom hai.” Isme kya galti hai?',
  'Having room is not the same as paying attention. Measured accuracy drops well before the ceiling. So “we are only at 12% of the window” proves one thing: the request will not error.':
    'Jagah hona aur dhyaan dena ek cheez nahin hai. Naapi gayi accuracy chhat se bahut pehle girne lagti hai. Isliye “hum window ke sirf 12% par hain” sirf ek baat saabit karta hai: request mein error nahin aayega.',
  'There is no flaw':
    'Koi khot nahi hai',
  'Headroom in the window says nothing about whether the model actually uses what is already in there':
    'Window mein headroom yeh nahi batata ki model andar pehle se rakhi cheez ko asal mein use karta hai ya nahi',
  'The window is smaller than reported':
    'Window bataye gaye se chhoti hai',
  'Headroom should be reserved for the answer':
    'Bachi jagah jawaab ke liye rakhni chahiye',
  'A support bot must recall a customer’s earlier tickets. Where does that recall really live?':
    'Ek support bot ko customer ke pichhle tickets yaad rakhne hain. Yeh yaad asal mein kahan rehti hai?',
  'Every memory feature has the same three parts: a store, a rule for picking, and a budget. You design all three. You own them. You pay for them.':
    'Har memory feature ke teen hisse hote hain: ek store, chunne ka rule, aur ek budget. Teeno aap design karte hain. Teeno aapke hain. Teeno ka paisa aap dete hain.',
  'In the model’s weights':
    'Model ke weights mein',
  'In a store you own, with the right parts picked into the envelope for each request, within a token budget':
    'Aapke apne store mein, jahan se har request ke liye sahi hisse envelope mein chune jaate hain, ek token budget ke andar',
  'In the provider’s conversation cache':
    'Provider ke conversation cache mein',
  'In the context window between sessions':
    'Sessions ke beech context window mein',
  'An assistant’s “memory” feature gets more useful. Which cost grows fastest?':
    'Ek assistant ka “memory” feature zyada kaam ka hota jaata hai. Kaun si cost sabse tez badhti hai?',
  'Storage is cheap and paid once. Re-sending is paid on every query, for as long as the feature runs. It grows with both use and usefulness.':
    'Storage sasta hai aur ek baar dena padta hai. Dobara bhejne ka paisa har query par lagta hai, jab tak feature chalta hai. Yeh use aur kaam ki baat, dono ke saath badhta hai.',
  'Storing the history':
    'History store karna',
  'Re-sending the chosen history on every single query':
    'Chuni hui history ko har ek query par dobara bhejna',
  'Embedding the history once':
    'History ko ek baar embed karna',
  'The model licence':
    'Model ka licence',
  'Your team edits the system prompt (the standing instructions on the shop wall) every week to tune the tone. What hidden cost are they running up?':
    'Aapki team har hafte system prompt (deewar par lage niyam) ko edit karti hai taaki lehja theek ho. Woh kaun si chhupi cost badha rahi hai?',
  'With caching, the system prompt is the stable prefix (the part that stays the same at the start). So a casual edit wipes the caches. It also changes behaviour quietly. Nothing tests for that (regression testing).':
    'Caching mein system prompt stable prefix hota hai (shuru ka woh hissa jo wahi rehta hai). Isliye ek halka sa edit caches saaf kar deta hai. Yeh vyavhaar bhi chup-chaap badal deta hai. Koi regression testing us par nazar nahin rakhti.',
  'The model needs retraining':
    'Model ko dobara train karna padta hai',
  'Every prompt cache after the edited prefix is invalidated on each edit':
    'Har edit par edit kiye gaye prefix ke baad ka har prompt cache invalidate ho jaata hai',
  'Temperature drifts':
    'Temperature khisak jaata hai',
  'Embeddings must be recomputed':
    'Embeddings dobara banane padte hain',
  'Where in the retrieval sequence does filtering happen?':
    'Retrieval ke kram mein filtering kahan hoti hai?',
  'Throwing out candidates that are out of scope before scoring helps more than any clever ranking technique. And it is ordinary database work.':
    'Scoring se pehle scope ke bahar ke candidates ko hata dena kisi bhi chalaak ranking technique se zyada madad karta hai. Aur yeh aam database ka kaam hai.',
  'After ranking, to trim the final list':
    'Ranking ke baad, aakhri list chhaantne ke liye',
  'Before scoring, to remove chunks that cannot possibly be right':
    'Scoring se pehle, un chunks ko hataane ke liye jo sahi ho hi nahi sakte',
  'Inside the embedding model':
    'Embedding model ke andar',
  'Only when the answer is generated':
    'Sirf jab answer generate hota hai',
  'What is the strongest reason to define metadata (labels on a record) before you embed a corpus, not after?':
    'Corpus embed karne se pehle metadata (record par lage label) tay karne ka, baad mein nahin, sabse majboot kaaran kya hai?',
  'You cannot add metadata cheaply later. Skipping it at ingestion (when you load the documents) means you will pay for a full re-index later. Usually that happens at the worst moment.':
    'Metadata ko baad mein sasti mein nahin jod sakte. Ingestion (documents load karne ke waqt) ise chhodne ka matlab hai ki aap baad mein poore re-index ka paisa denge. Aksar yeh sabse bure waqt par hota hai.',
  'It is easier to type':
    'Use type karna aasaan hai',
  'Adding metadata later means re-indexing everything, which gets expensive once the corpus is large':
    'Baad mein metadata jodne ka matlab sab kuch dobara index karna, jo corpus bada hone par mehnga ho jaata hai',
  'Embeddings store metadata internally':
    'Embeddings metadata apne andar rakhte hain',
  'Filters only work on new documents':
    'Filters sirf naye documents par chalte hain',
  'Why does the method tell you to write sentences before you assign categories?':
    'Tareeka categories dene se pehle vaakya likhne ko kyon kehta hai?',
  'If you sort as you read, you can only find the kinds of failure you already believed in. The clusters (groups) that surprise you are the valuable ones.':
    'Agar aap padhte-padhte baantte hain, to aap sirf wahi galtiyan dhundh paate hain jinhein aap pehle se maante the. Jo clusters (samooh) aapko chaunkate hain, wahi keemti hain.',
  'Sentences are easier to store':
    'Sentences store karna aasaan hai',
  'Categories chosen too early squeeze new failures into old buckets and hide the pattern you haven’t named yet':
    'Bahut jaldi chuni gayi categories nayi failures ko purani buckets mein thoons deti hain aur woh pattern chhupa deti hain jiska aapne abhi naam nahi rakha',
  'It produces better documentation':
    'Isse behtar documentation banti hai',
  'Categories require approval':
    'Categories ke liye manzoori chahiye hoti hai',
  'You have a failure taxonomy (your sorted piles of failures) with counts. How should it drive the roadmap (the plan of what comes first, next and later)?':
    'Aapke paas ginti ke saath ek failure taxonomy (galtiyon ke sorted dher) hai. Use roadmap (kya pehle, agla aur baad mein aayega ka plan) ko kaise chalana chahiye?',
  'One change at a time gives the next measurement any meaning. Batch five fixes together, and all you learn is that something helped.':
    'Ek samay mein ek badlaav agli naap ko matlab deta hai. Paanch fixes ek saath daalenge, to bas yeh pata chalega ki kuch kaam aaya.',
  'Fix the most technically interesting cluster':
    'Sabse technically dilchasp guchha theek kijiye',
  'Rank by frequency × severity, and fix one at a time so the next measurement can be traced to the fix':
    'Frequency × severity se rank kijiye, aur ek-ek karke fix kijiye taaki agla measurement us fix se joda ja sake',
  'Fix everything in one release':
    'Sab kuchh ek hi release mein theek kijiye',
  'Fix the smallest clusters first for quick wins':
    'Jaldi jeet ke liye sabse chhote guchhe pehle theek kijiye',
  'What does a Brier score measure?':
    'Brier score kya naapta hai?',
  'It rewards being right. It also rewards being suitably confident. Being confidently wrong is penalised the most. That is the failure this whole system is built to bring to the surface.':
    'Yeh sahi hone ko inaam deta hai. Yeh sahi had tak pakka hone ko bhi inaam deta hai. Pakke yakeen ke saath galat hone par sabse zyada saza milti hai. Isi galti ko saamne laane ke liye yeh poora system bana hai.',
  'How often you are correct':
    'Aap kitni baar sahi hote hain',
  'How well your stated confidence matches your actual accuracy':
    'Aapka bataya hua confidence aapki asli accuracy se kitna milta hai',
  'How fast you answer':
    'Aap kitni jaldi jawaab dete hain',
  'How difficult the questions were':
    'Sawaal kitne mushkil the',
  'You are always correct, but you always mark “leaning” instead of “fairly sure.” What does this cost you?':
    'Aap hamesha sahi hote hain, lekin aap hamesha “fairly sure” ki jagah “leaning” likhte hain. Isse aapko kya nuksaan hota hai?',
  'Being underconfident is a calibration error like any other. The cost at work: you end up giving way to more confident people who have less evidence.':
    'Kam bharosa dikhana bhi kisi aur ki tarah ek calibration ki galti hai. Kaam par nuksaan: aap un zyada pakke logon ke aage jhuk jaate hain jinke paas saboot kam hai.',
  'Nothing, because caution is free':
    'Kuch nahi, kyunki savdhani muft hai',
  'It’s a real miscalibration: you under-claim knowledge you have, which matters in rooms where you’re the only one who measured anything':
    'Yeh ek asli miscalibration hai: aap jo knowledge rakhte hain use kam batate hain, jo un rooms mein matter karta hai jahan sirf aapne kuch measure kiya hai',
  'It lowers your accuracy':
    'Isse aapki accuracy girti hai',
  'It slows down practice':
    'Isse practice dheemi ho jaati hai',
  'Which of these is a control (a hard stop), not a filter (a request that leaks sometimes)?':
    'In mein se kaun ek control (pakki rok) hai, filter (ek vinati jo kabhi-kabhi chook jaati hai) nahin?',
  'Human confirmation holds no matter what the model decided. The other three ask the model to behave. That makes them filters with a leak rate.':
    'Insaani confirmation tab bhi rukti hai jo bhi model ne tay kiya ho. Baaki teen model se achha vyavhaar maangte hain. Isliye woh filters hain jinmein leak rate hota hai.',
  'A system prompt telling the model not to follow instructions in the context':
    'Ek system prompt jo model ko context ke instructions follow na karne ko kehta hai',
  'Wrapping retrieved text in delimiters':
    'Retrieve hue text ko delimiters mein lapetna',
  'Requiring a human to confirm the exact recipient before any outgoing send':
    'Kuch bhi outgoing bhejne se pehle exact recipient kisi insaan se confirm karwana',
  'Telling the model to flag suspicious content':
    'Model ko suspicious content flag karne ko kehna',
  'You are reporting a defence to your risk register (the list of risks you track). Which wording is honest?':
    'Aap apne risk register (jin khatron ko aap track karte hain unki list) mein ek defence report kar rahe hain. Kaun sa shabd-chayan imaandaar hai?',
  'Name the measurement. Name the kind of attack it was measured against. Name the structural control that carries the leftover risk. Anything else claims too much.':
    'Naap ka naam likhiye. Us hamle ka prakar likhiye jiske khilaf naapa gaya. Us structural control ka naam likhiye jo bacha hua khatra sambhalta hai. Isse kuch bhi kehna zyada bada daava hai.',
  '“Prompt injection is mitigated”':
    '“Prompt injection mitigated hai”',
  '“Capture rate reduced from 8/10 to 2/10 against non-adaptive attacks; residual risk contained by an outbound allowlist”':
    '“Capture rate non-adaptive attacks ke khilaaf 8/10 se 2/10 hua; bacha hua risk ek outbound allowlist se contain hai”',
  '“The vendor confirms the system is secure”':
    '“Vendor confirm karta hai ki system secure hai”',
  '“No injections observed in testing”':
    '“Testing mein koi injection nahi dikha”',
  'What is the least a reviewer must see for the review to mean anything?':
    'Review ka koi matlab ho, iske liye reviewer ko kam se kam kya dikhna chahiye?',
  'Reviewing an answer without its evidence only checks how fluent it sounds. The reviewer needs to see what the answer was meant to be based on.':
    'Saboot ke bina jawaab ki samiksha sirf yeh dekhti hai ki woh kitna saaf-suthra lagta hai. Reviewer ko dekhna hoga ki jawaab kis par aadhaarit hona tha.',
  'The final answer':
    'Aakhri jawaab',
  'The answer, plus the retrieved evidence and the supporting quote':
    'Answer, saath mein retrieved evidence aur supporting quote',
  'The model version':
    'Model ka version',
  'The confidence score':
    'Confidence score',
  'There are 4,000 outputs a day and you have one reviewer. What design works?':
    'Roz 4,000 outputs hain aur aapke paas ek reviewer hai. Kaun sa design kaam karta hai?',
  'Structured output (a form with fixed boxes) plus programmatic checks turn “review everything” into “review the few percent that failed a check.” One person can do that, with the authority and the time.':
    'Structured output (fixed khaanon wala form) aur programmatic checks “sab kuch review kijiye” ko “jo kuch pratishat check mein fail hue, sirf unhein review kijiye” bana dete hain. Ek insaan yeh kar sakta hai, agar uske paas adhikaar aur samay ho.',
  'Review a random 1% and hope':
    'Random 1% review kijiye aur ummeed rakhiye',
  'Send only the outputs that fail a programmatic check to review, and sample the rest':
    'Sirf programmatic check mein fail hone wale outputs ko review ke liye bhejiye, aur baaki ko sample kijiye',
  'Ask the model to review itself':
    'Model se hi apna review karwaiye',
  'Reduce output volume':
    'Output ka volume ghata dijiye',
  'Why is it worth recording data lineage (where each document came from) at ingestion, not later?':
    'Data lineage (har document kahan se aaya) ko baad mein nahin, ingestion ke waqt kyon likhna chahiye?',
  'Provenance (where it came from) is cheap to record and often impossible to recover later. The same goes for the permission under which you hold the data.':
    'Provenance (woh kahan se aaya) likhna sasta hai aur baad mein aksar waapas laana namumkin. Jis ijaazat ke tahat aapke paas data hai, uska bhi yahi haal hai.',
  'It is a regulatory checkbox':
    'Yeh niyamon ka ek tick box hai',
  'Because after ingestion you often can’t work out where a document came from, or on what right you hold it':
    'Kyunki ingestion ke baad aksar yeh pata lagana mushkil hota hai ki document kahan se aaya, ya aap use kis haq se rakhte hain',
  'It improves retrieval':
    'Isse retrieval sudhar jaati hai',
  'It reduces storage':
    'Isse storage ghat jaata hai',
  'Your prompt cache holds fragments of a document that a customer asked you to delete. What is the honest position?':
    'Aapke prompt cache mein ek document ke tukde hain jise customer ne delete karne ko kaha tha. Imaandaar sthiti kya hai?',
  'A cache is a copy. Either you can invalidate it, or you can state a firm expiry, or you have a gap to report. “It expires eventually” is not a retention policy.':
    'Cache ek copy hai. Ya to aap use invalidate kar sakte hain, ya pakki expiry bata sakte hain, ya aapke paas report karne layak kami hai. “Yeh aakhir mein expire ho jaata hai” retention policy nahin hai.',
  'Caches expire, so no action is needed':
    'Caches expire ho jaate hain, isliye kuchh karne ki zaroorat nahi',
  'It’s a store holding their data. You need a documented expiry or a way to invalidate it, and if you have neither, that’s a finding':
    'Yeh ek store hai jisme unka data hai. Aapko ek documented expiry ya invalidate karne ka raasta chahiye, aur agar dono nahi hain, toh woh ek finding hai',
  'Caches are the provider’s responsibility':
    'Caches provider ki zimmedaari hain',
  'Only the vector index matters':
    'Sirf vector index maayne rakhta hai',
  'Which of these make a deletion request hard to satisfy in a RAG system (find the page, then answer from it)?':
    'In mein se kaun si baatein RAG system (pehle page dhundhiye, phir usse jawaab dijiye) mein deletion request poori karna mushkil banati hain?',
  'The source file is the easy part. Deletion drills fail on the derived copies: vectors, third-party logs and eval sets. Nobody remembers the eval set.':
    'Source file aasaan hissa hai. Deletion drills banayi hui copies par fail hoti hain: vectors, third-party logs aur eval sets. Eval set ko koi yaad nahin rakhta.',
  'The same passage was embedded into a vector index':
    'Wahi passage vector index mein embed ho chuka hai',
  'Fragments sit in provider-side request logs that you don’t control':
    'Fragments provider-side request logs mein hain jin par aapka control nahi',
  'Real queries and outputs were sampled into an eval set':
    'Asli queries aur outputs ka sample eval set mein le liya gaya tha',
  'The source file is in object storage':
    'Source file object storage mein hai',
  'Which sentence would fail the explain-it-upward test (could a director repeat it)?':
    'Kaun sa vaakya explain-it-upward test mein fail hoga (kya koi director ise dohra sakta hai)?',
  'A director could repeat three of these tomorrow. The other is a sentence only its author can defend. That makes it useless in the rooms that matter.':
    'Ek director inmein se teen kal dohra sakta hai. Baaki ek aisa vaakya hai jise sirf uska lekhak bacha sakta hai. Isliye woh un kamron mein bekaar hai jahan baat maayne rakhti hai.',
  '“The system looks up the relevant pages before answering, so it quotes your documents instead of inventing”':
    '“System jawaab dene se pehle relevant pages dhoondhta hai, isliye woh invent karne ki jagah aapke documents ko quote karta hai”',
  '“We use semantic retrieval over a chunked corpus with reranking”':
    '“Hum ek chunked corpus par reranking ke saath semantic retrieval use karte hain”',
  '“It can find the right page and still read the wrong number out of a table”':
    '“Woh sahi page dhoondh sakta hai aur phir bhi table se galat number padh sakta hai”',
  '“Every answer should come with the sentence it was based on, so you can check it in seconds”':
    '“Har answer ke saath woh sentence aana chahiye jis par woh based tha, taaki aap seconds mein check kar sakein”',
  'A director asks, “Can we trust it?” What is the strongest short reply?':
    'Ek director poochta hai, “Kya hum is par bharosa kar sakte hain?” Sabse majboot chhota jawaab kaunsa hai?',
  'It names the real edge of the claim. It invites the follow-up, “What did you measure?” Of the four, it is the only one you can defend when challenged.':
    'Yeh daave ki asli seema batata hai. Yeh agle sawaal ko nyota deta hai: “Aapne kya naapa?” Chaaron mein se yahi ek hai jise chunauti milne par aap bacha sakte hain.',
  '“Yes, it is highly accurate”':
    '“Haan, yeh bahut accurate hai”',
  '“Trust it where we measured it”':
    '“Jahan humne measure kiya hai wahan par bharosa kijiye”',
  '“No, it hallucinates”':
    '“Nahi, yeh hallucinate karta hai”',
  '“It depends on the model”':
    '“Yeh model par depend karta hai”',
});
