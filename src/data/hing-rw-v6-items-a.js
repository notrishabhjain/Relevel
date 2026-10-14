/* Hinglish: practice question bank (items 1 to 3), plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'A handy rule: 1 token is about ¾ of an English word, so you multiply the words by 1.33. That makes 300 words about 400 tokens. Watch the trap answer, 225. It comes from dividing when you should have multiplied.':
    'Ek kaam ka rule: 1 token lagbhag English word ke ¾ ke barabar hota hai, isliye words ko 1.33 se multiply kijiye. Matlab 300 words lagbhag 400 tokens hue. Trap wale jawaab 225 se bachiye. Woh tab aata hai jab aap multiply karne ki jagah divide kar dete hain.',
  'A RAG query sends 1,800 input tokens and produces 240 output tokens. Input costs ₹0.20 per million tokens and output costs ₹0.60 per million. What does one query cost, in paise (1 rupee = 100 paise)?':
    'Ek RAG query 1,800 input tokens bhejti hai aur 240 output tokens banati hai. Input ka ₹0.20 per million tokens hai aur output ka ₹0.60 per million. Ek query ki cost paise mein kitni hai (1 rupee = 100 paise)?',
  'Work out the input and output parts separately, then add them: (1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504, which is about 0.05 paise. The sum is easy. The real lesson is that a cost per query looks tiny until you multiply it by volume and by the four multipliers.':
    'Input aur output ka hissa alag-alag nikaliye, phir jod dijiye: (1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504, yaani lagbhag 0.05 paise. Hisaab aasaan hai. Asli seekh yeh hai ki per query cost bahut chhoti lagti hai, jab tak aap use volume aur un chaar multipliers se multiply na karein.',
  'A business case says each query costs ₹0.30, worked out as input tokens × rate + output tokens × rate. Which of these would push the real bill above that figure?':
    'Ek business case kehta hai ki har query ki cost ₹0.30 hai, jo input tokens × rate + output tokens × rate se nikali gayi hai. In mein se kaun si cheezein asli bill ko is figure se upar le jaayengi?',
  'Four things multiply the simple sum: k, retries, agent steps and reasoning tokens. They also stack on top of each other. Caching is the odd one out, because it brings the cost down.':
    'Chaar cheezein is seedhe hisaab ko multiply kar deti hain: k, retries, agent steps aur reasoning tokens. Yeh ek-doosre ke upar stack bhi hoti hain. Caching alag hai, kyunki woh cost ko neeche laati hai.',
  'Which token count can a product manager control most directly when designing a feature?':
    'Feature design karte waqt product manager kaun si token count ko sabse seedhe control kar sakta hai?',
  'You decide what goes into the envelope: the history, the retrieved chunks, the instructions. So the prompt side is yours to design. You can only nudge the output length, and the window size and parameter count come with the model.':
    'Envelope mein kya jaayega, yeh aap tay karte hain: history, retrieved chunks, instructions. Isliye prompt wala hissa aapke design ka hai. Output ki length ko aap bas thoda nudge kar sakte hain, aur window size aur parameter count model ke saath aate hain.',
  'The model’s parameter count':
    'Model ka parameter count',
  'Your feature costs ₹3.10 per query at full load. Each query deflects a support ticket worth ₹2.00. Traffic is growing 20% a month. What is the right conclusion?':
    'Aapke feature ki cost full load par ₹3.10 per query hai. Har query ek support ticket ko deflect karti hai jiski value ₹2.00 hai. Traffic har mahine 20% badh raha hai. Sahi conclusion kya hai?',
  'If each query loses money, more queries just mean a bigger loss. The loss grows in a straight line with volume. Optimising may be worth a try, but the conclusion from these numbers is that growth is a liability until the cost drops below the value.':
    'Agar har query paise ganwati hai, toh zyada queries ka matlab sirf bada nuksaan. Nuksaan volume ke saath seedhi line mein badhta hai. Optimise karke dekhna theek hai, lekin in numbers se conclusion yahi nikalta hai ki growth tab tak liability hai jab tak cost value se neeche nahi aati.',
  'Ship it, because scale will improve the economics':
    'Ship kar do, kyunki scale se economics behtar ho jaayegi',
  'The unit economics are negative, and growth makes it worse, not better':
    'Unit economics negative hain, aur growth se halat sudharne ki jagah bigadti hai',
  'What is the best description of the context window?':
    'Context window ka sabse sahi description kya hai?',
  'Think of it as the size of the envelope for one request: everything that goes in plus everything that comes out. It isn’t memory, and it has nothing to do with storage.':
    'Ise ek request ke envelope ka size samajhiye: jo kuch andar jaata hai aur jo kuch bahar aata hai, sab milakar. Yeh memory nahi hai, aur storage se iska koi lena-dena nahi.',
  'The model’s memory of your conversation':
    'Aapki conversation ki model ko yaad',
  'A vendor says a two-million-token context makes your retrieval layer unnecessary. What is the strongest single reply?':
    'Ek vendor kehta hai ki do-million-token context ke baad aapki retrieval layer ki zaroorat nahi. Sabse mazboot ek jawaab kya hoga?',
  'There are two separate objections here. Quality is measured to drop as context grows (people call it context rot), and the cost is paid on every single query. Neither is a matter of opinion. The last option claims too much, because for some questions that span many sections, stuffing everything in really does win.':
    'Yahan do alag aapattiyan hain. Context badhne par quality girti hai (ise log context rot kehte hain), aur cost har ek query par lagti hai. Dono mein se koi bhi sirf raay ki baat nahi hai. Aakhri option zyada daava karta hai, kyunki kuch sawaalon mein, jo kai sections mein phaile hote hain, sab kuch andar daal dena sach mein jeetta hai.',
  'Accuracy drops as the context gets longer, and you pay for the full envelope on every query, forever':
    'Context lamba hone par accuracy girti hai, aur har query par aap poore envelope ka paisa dete hain, hamesha',
  'Put these in order of how reliably a model finds a specific fact placed at that spot in a long context. Start with the most reliable.':
    'Inhein is order mein lagaiye ki lambe context mein us jagah rakha ek khaas fact model kitni bharosemand tarah se dhoondhta hai. Sabse bharosemand wala pehle rakhiye.',
  'Facts at the edges are found far more reliably than facts in the middle. The start and the end are close to each other, and the middle sags. This is called the “lost in the middle” pattern, and it gets worse as the total length grows.':
    'Edges par rakhe facts beech ke facts se kaafi zyada bharosemand tarah se milte hain. Shuruaat aur ant ek-doosre ke kareeb hain, aur beech wala hissa dheela padta hai. Ise “lost in the middle” pattern kehte hain, aur total length badhne par yeh aur bigadta hai.',
  'Your feature’s envelope is 24,000 tokens: 1,200 for the system prompt, 3,400 for tool schemas, 14,000 for retrieved chunks, 4,800 for conversation history and 600 for the answer. Costs are too high. What do you cut first, and what breaks?':
    'Aapke feature ka envelope 24,000 tokens ka hai: system prompt ke 1,200, tool schemas ke 3,400, retrieved chunks ke 14,000, conversation history ke 4,800 aur answer ke 600. Cost bahut zyada hai. Aap sabse pehle kya kaatenge, aur kya toot jaayega?',
  'Retrieved chunks are the biggest line and the easiest to squeeze. Cut k, or add reranking so a smaller k carries better chunks (Ch 12 shows how to cut volume while raising precision). What breaks is recall on questions that span several sections, so re-measure against your ground truth after the cut. Cutting history comes next, but it breaks follow-up questions. Cutting tool schemas removes a capability outright. A strong answer names the cut, the metric it puts at risk, and the re-measurement.':
    'Retrieved chunks sabse badi line hain aur sabse aasaani se kam ho sakti hain. k kam kijiye, ya reranking jodiye taaki chhota k behtar chunks laaye (Ch 12 dikhata hai ki precision badhate hue volume kaise kam karein). Jo toot-ta hai woh hai un sawaalon ka recall jo kai sections mein phaile hain, isliye kaatne ke baad ground truth ke saamne dobara measure kijiye. Uske baad history kaatne ka number aata hai, lekin isse follow-up sawaal toot jaate hain. Tool schemas kaatne se ek capability seedhe hat jaati hai. Ek strong jawaab kaat-chhaant ka naam leta hai, jis metric ko khatra hai uska naam leta hai, aur dobara measurement ka zikr karta hai.',
  'Between two separate API requests, what does the model remember about you?':
    'Do alag API requests ke beech model aapke baare mein kya yaad rakhta hai?',
  'Nothing. The model starts fresh every time. When a chat seems to remember you, the application is simply sending the history again inside a bigger envelope.':
    'Kuch nahi. Model har baar nayi shuruaat karta hai. Jab chat aapko yaad rakhti lagti hai, toh asal mein application history ko ek bade envelope mein dobara bhej rahi hoti hai.',
  'Why does the 50th message in a chat cost far more than the 2nd?':
    'Chat ka 50va message 2re message se kaafi zyada mehnga kyun padta hai?',
  'Message 50 has to pay to re-read messages 1 to 49. So cost follows the length of the whole conversation so far, not the number of messages.':
    'Message 50 ko message 1 se 49 dobara padhne ka paisa dena padta hai. Isliye cost ab tak ki poori conversation ki length ke saath badhti hai, messages ki ginti ke saath nahi.',
  'A vendor says, “Our assistant remembers each user’s full history.” Which questions actually test that claim?':
    'Ek vendor kehta hai, “Hamara assistant har user ki poori history yaad rakhta hai.” Kaun se sawaal is daave ko asal mein parakhte hain?',
  'Memory comes down to three things: a store, a rule for picking what to send, and a context budget. Those give you the three real questions, about privacy, cost and architecture. The parameter count has nothing to do with it.':
    'Memory teen cheezon par tiki hai: ek store, kya bhejna hai yeh chunne ka rule, aur ek context budget. Yahin se teen asli sawaal nikalte hain, privacy, cost aur architecture ke baare mein. Parameter count ka isse koi lena-dena nahi.',
  'Where is that history stored, and who controls it?':
    'Woh history kahan store hoti hai, aur uspar control kiska hai?',
  'How is it chosen for the envelope when it is bigger than the budget?':
    'Jab history budget se badi ho, toh envelope ke liye use kaise chuna jaata hai?',
  'When a vendor says, “We customized the AI for your organization,” what does it most often mean in practice?':
    'Jab vendor kehta hai, “Humne AI ko aapki organization ke liye customize kiya hai,” toh practice mein iska matlab aksar kya hota hai?',
  'Most of the time it means they wrote a good briefing page for the model. No weights changed. It’s the same letter with a cover note added.':
    'Zyadatar iska matlab hota hai ki unhone model ke liye ek achha briefing page likha hai. Koi weights nahi badle. Yeh wahi letter hai, bas upar ek cover note laga diya gaya.',
  'Which of these should a system prompt be managed like?':
    'System prompt ko inmein se kis tarah manage karna chahiye?',
  'The system prompt is the product’s behaviour, so it needs an owner, a version and a test. Changing it also invalidates the prompt caches downstream.':
    'System prompt hi product ka behaviour hai, isliye use ek owner, ek version aur ek test chahiye. Ise badalne se downstream ke prompt caches bhi invalidate ho jaate hain.',
  'An SOP or policy document, with versions, tests and an owner':
    'Ek SOP ya policy document ki tarah, versions, tests aur owner ke saath',
  'For which of these is temperature 0 the right default?':
    'In mein se kiske liye temperature 0 sahi default hai?',
  'Compliance questions and factual lookups need the same answer every time. Variety only helps when variety is the product.':
    'Compliance ke sawaal aur factual lookups ko har baar wahi jawaab chahiye. Variety tabhi kaam aati hai jab variety hi product ho.',
  'You wrote a guardrail sentence that stopped a model from inventing a fake scheme. A colleague calls the problem “solved.” Give two independent reasons it isn’t.':
    'Aapne ek guardrail sentence likha jisse model ne ek jhooti scheme banana band kar diya. Aapka colleague kehta hai problem “solve ho gayi.” Do alag-alag wajah dijiye ki aisa kyun nahi hai.',
  'One: it bends under pressure. A little pushing from the user was enough to bring the invention back. Two: it can’t make the model know anything. It only changes the tone around not knowing, so it can’t fix missing evidence. The real fix is to supply verified source text and a way for the model to refuse. A strong answer also notes that a guardrail depends on the model, so it isn’t a true control.':
    'Ek: yeh dabaav mein jhuk jaata hai. User ke thode se push se hi invention wapas aa gaya. Do: yeh model ko kuch “jaanne” nahi de sakta. Yeh bas na-jaanne ke aas-paas ka tone badalta hai, isliye missing evidence ko fix nahi kar sakta. Asli fix hai verified source text dena aur model ke liye mana karne ka raasta banana. Ek strong jawaab yeh bhi kehta hai ki guardrail model par depend karta hai, isliye woh asli control nahi hai.',
  'What is the best way to understand hallucination?':
    'Hallucination ko samajhne ka sabse achha tareeka kya hai?',
  'It isn’t a glitch. A model that continues text picks the most plausible continuation. At the edge of what it knows, “plausible” turns out to be a well-formatted invention.':
    'Yeh koi glitch nahi hai. Text aage badhane wala model sabse plausible continuation chunta hai. Jahan uski jaankari khatam hoti hai, wahan “plausible” ka matlab nikalta hai ek achhi tarah format ki hui invention.',
  'A rare bug that better models remove':
    'Ek rare bug jo behtar models hata dete hain',
  'The normal behaviour of a prediction machine at the edge of what it knows':
    'Prediction machine ka normal behaviour, jahan uski jaankari khatam hoti hai',
  'You require an “amount” field, strictly typed as a number, and give the model a document with no amount in it. The model returns 42000. What caused this?':
    'Aap ek “amount” field zaroori karte hain, strictly number type ka, aur model ko aisa document dete hain jisme koi amount hai hi nahi. Model 42000 return karta hai. Iski wajah kya thi?',
  'Your design forced the model to invent something. A nullable field, or a status value like insufficient_evidence, takes that pressure away. So schema design is also a way to control hallucination.':
    'Aapke design ne model ko kuch invent karne par majboor kiya. Nullable field, ya insufficient_evidence jaisi status value, us dabaav ko hata deti hai. Isliye schema design bhi hallucination control karne ka ek tareeka hai.',
  'Your schema left no legal way to say “not present”':
    'Aapke schema mein “not present” kehne ka koi legal tareeka nahi tha',
  '“The AI sounded confident.” What is that evidence of?':
    '“AI confident lag raha tha.” Yeh kis cheez ka saboot hai?',
  'Fluent writing costs the model nothing. Confident, neat, well-formatted output is the only way it speaks, and it looks exactly the same whether the content is true or not.':
    'Fluent likhna model ka kuch nahi leta. Confident, saaf-suthra, achhi tarah format kiya hua output hi uske bolne ka ekmatra tareeka hai, aur woh bilkul ek jaisa dikhta hai chahe content sach ho ya nahi.',
  'Which of these cut down invented content by removing its cause, instead of just asking the model not to do it?':
    'In mein se kaun si cheezein invented content ko uski wajah hata kar kam karti hain, sirf model se mana karne ki jagah?',
  'Giving evidence, giving a way to refuse, and asking for checkable citations all change how the task is built. A “never invent” instruction is only a request. It helps a little, but it just discourages.':
    'Evidence dena, mana karne ka raasta dena, aur checkable citations maangna, teeno task ke banne ka tareeka badal dete hain. “Never invent” wali instruction sirf ek request hai. Thodi madad karti hai, lekin bas discourage karti hai.',
  'Supplying verified source text and telling the model to answer only from that context':
    'Verified source text dena aur model ko kehna ki sirf us context se jawaab de',
  'Adding “never invent details” to the system prompt':
    'System prompt mein “never invent details” jodna',
  'Requiring a word-for-word supporting quote that can be checked against the source':
    'Ek word-for-word supporting quote maangna jise source ke saamne check kiya ja sake',
  'Why can’t you put the whole corpus into every envelope? Pick the two independent reasons.':
    'Aap poora corpus har envelope mein kyun nahi daal sakte? Do alag-alag wajah chuniye.',
  'It comes down to space and money. And even the part that does fit gets worse answers when most of it is irrelevant.':
    'Baat jagah aur paise par aati hai. Aur jo hissa fit bhi ho jaata hai, uske jawaab bhi kharab hote hain agar usme zyadatar cheezein irrelevant hon.',
  'The context window is limited, and tokens cost money on every query':
    'Context window limited hai, aur har query par tokens ke paise lagte hain',
  'A chunk begins, “the aforesaid amount shall be disbursed within sixty days.” What is the specific problem?':
    'Ek chunk shuru hota hai, “the aforesaid amount shall be disbursed within sixty days.” Iski khaas problem kya hai?',
  'The chunk leans on text that now sits in a different chunk. That makes it hard to retrieve, and hard to use even if you do retrieve it.':
    'Chunk ek aise text par tika hai jo ab doosre chunk mein hai. Isliye use retrieve karna mushkil hai, aur retrieve ho bhi jaaye toh use karna mushkil hai.',
  'It is an orphan: it means nothing without the earlier text it refers to, and that text no longer travels with it':
    'Yeh ek orphan hai: pehle ke jis text ka zikr hai uske bina iska koi matlab nahi, aur woh text ab iske saath nahi chalta',
  'It will embed poorly because of legal language':
    'Legal language ki wajah se yeh achhi tarah embed nahi hoga',
  'A chunk boundary falls between a rule and its exception. What is the most dangerous result?':
    'Ek chunk ki boundary ek rule aur uske exception ke beech aa jaati hai. Sabse khatarnaak result kya hai?',
  'In compliance and legal work, a confident half-answer is often worse than no answer. It leads someone to a wrong action, while a missing answer makes them ask for help.':
    'Compliance aur legal kaam mein, confident aadha-jawaab aksar bina jawaab se bhi bura hota hai. Woh kisi ko galat action ki taraf le jaata hai, jabki jawaab na milne par woh madad maangta hai.',
  'The system can state the rule without its exception, and sound confident while being incomplete':
    'System rule bata sakta hai bina uske exception ke, aur adhoora hote hue bhi confident lagta hai',
  'Your corpus is service contracts with numbered clauses, exceptions and annexures. Describe your chunking rule and what it gives up.':
    'Aapka corpus service contracts hai jinme numbered clauses, exceptions aur annexures hain. Apna chunking rule batayiye aur yeh kya chhodta hai.',
  'Cut on clause boundaries, so each piece holds a complete rule with its exceptions attached. This is structure-aware chunking, which follows the document’s own layout. Semantic chunking is a separate meaning-based strategy. The pieces will be uneven in size, and that’s fine, because meaning doesn’t come in equal sizes. What you give up: definitions that point across clauses (“as defined in clause 2”) still become orphans, so add a situating sentence (contextual retrieval). Very long clauses may be too big for a comfortable retrieval unit and need splitting with overlap. A strong answer names the failure that remains, not just the rule.':
    'Clause boundaries par kaatiye, taaki har piece mein ek poora rule uske exceptions ke saath rahe. Yeh structure-aware chunking hai, jo document ke apne layout ko follow karti hai. Semantic chunking ek alag, meaning par based strategy hai. Pieces size mein barabar nahi honge, aur woh theek hai, kyunki meaning barabar sizes mein nahi aata. Aap kya chhodte hain: jo definitions clauses ke aar-paar point karti hain (“as defined in clause 2”) woh phir bhi orphan ban jaati hain, isliye ek situating sentence jodiye (contextual retrieval). Bahut lambi clauses retrieval unit ke liye bahut badi ho sakti hain aur unhe overlap ke saath todna padta hai. Ek strong jawaab us failure ka naam leta hai jo bacha reh gaya, sirf rule ka nahi.',
  'What is keyword search blind to?':
    'Keyword search kis cheez ke liye andha hai?',
  'It matches shared letters, not shared sense. To keyword search, “reimbursement” and “disbursement of approved amounts” are strangers.':
    'Woh shared letters match karta hai, shared matlab nahi. Keyword search ke liye “reimbursement” aur “disbursement of approved amounts” ajnabi hain.',
  'Which kind of query does keyword search handle better than semantic search?':
    'Keyword search kis tarah ki query ko semantic search se behtar sambhalta hai?',
  'Exact strings, like codes, section numbers, acronyms and policy IDs, are where keyword search never slips and embeddings often do. That’s the half of hybrid search that never goes away.':
    'Exact strings, jaise codes, section numbers, acronyms aur policy IDs, wahan keyword search kabhi nahi chookta aur embeddings aksar chook jaate hain. Hybrid search ka woh aadha hissa kabhi khatam nahi hota.',
  '“When do I get my money back?”':
    '“Mere paise wapas kab milenge?”',
  '“Clause 4.2(b)”':
    '“Clause 4.2(b)”',
  '“Can my manager approve more than the limit?”':
    '“Kya mera manager limit se zyada approve kar sakta hai?”',
  'Why does keyword search fail worst for the users who most need self-service answers?':
    'Keyword search un users ke liye sabse bura kyun fail hota hai jinhe self-service answers ki sabse zyada zaroorat hai?',
  'The less you know the document’s vocabulary, the harder its answers are to see. Newcomers and customers know it least, by definition.':
    'Aap document ki vocabulary jitni kam jaante hain, uske jawaab dekhna utna mushkil hota hai. Newcomers aur customers use definition se hi sabse kam jaante hain.',
  'The gap between the document’s words and the user’s words is widest for newcomers':
    'Document ke words aur user ke words ke beech ka gap newcomers ke liye sabse bada hota hai',
  'You are designing search for a customer-facing help centre and for an internal legal research tool. Which statements are sound?':
    'Aap ek customer-facing help centre ke liye aur ek internal legal research tool ke liye search design kar rahe hain. Kaun se statements sahi hain?',
  'The mix of queries decides the design. If you force one setup onto two different kinds of queries, it ends up good for neither.':
    'Queries ka mix design tay karta hai. Do alag tarah ki queries par ek hi setup zabardasti lagayenge, toh woh dono ke liye achha nahi rahega.',
  'The help centre uses plain language and many synonyms, which favours semantic retrieval':
    'Help centre mein plain language aur bahut saare synonyms hote hain, jo semantic retrieval ko favour karta hai',
  'The legal tool gets more exact-string queries, like citations and section numbers, which favours a strong keyword side':
    'Legal tool ko zyada exact-string queries milti hain, jaise citations aur section numbers, jo ek strong keyword side ko favour karta hai',
  'Both should run hybrid, but the fusion weighting need not be the same':
    'Dono ko hybrid chalana chahiye, lekin fusion weighting ek jaisi hona zaroori nahi',
  'What is an embedding?':
    'Embedding kya hai?',
  'It’s an address made of roughly a thousand numbers. Texts with similar meanings get addresses that sit close together.':
    'Yeh lagbhag ek hazaar numbers ka bana ek address hai. Milte-julte meaning wale texts ke addresses paas-paas hote hain.',
  'A list of numbers that gives the text an address on a map of meaning':
    'Numbers ki ek list jo text ko meaning ke map par ek address deti hai',
  'You forget to set input_type to “query” for questions, and you send everything as “passage”. What happens?':
    'Aap questions ke liye input_type ko “query” set karna bhool jaate hain, aur sab kuch “passage” ki tarah bhej dete hain. Kya hota hai?',
  'There’s no error, only worse results. The model maps questions and passages in matching but different ways, so skipping the setting is the classic silent slip.':
    'Koi error nahi aata, bas results kharab ho jaate hain. Model questions aur passages ko milte-julte lekin alag tareeke se map karta hai, isliye is setting ko chhod dena classic silent slip hai.',
  'Nothing, because the parameter is only cosmetic':
    'Kuch nahi, kyunki parameter sirf dikhaave ka hai',
  'Retrieval quality drops, with no warning':
    'Retrieval quality girti hai, bina kisi warning ke',
  'Embeddings come back at the wrong dimension':
    'Embeddings galat dimension mein wapas aate hain',
  'A vendor slide says, “1024-dimensional state-of-the-art embeddings.” What is the only useful response?':
    'Ek vendor slide kehti hai, “1024-dimensional state-of-the-art embeddings.” Ek hi kaam ka jawaab kya hai?',
  'The number of dimensions is a spec, not proof. The claim that needs numbers is how well retrieval works on your documents and in your users’ own words.':
    'Dimensions ki ginti ek spec hai, saboot nahi. Jis daave ko numbers chahiye woh yeh hai ki aapke documents par aur aapke users ke apne words mein retrieval kitna achha kaam karta hai.',
  '“Measured how, on whose questions, in which languages?”':
    '“Kaise measure kiya, kinke sawaalon par, kin languages mein?”',
  'Accept it as a sign of quality':
    'Ise quality ka signal maan lijiye',
  'Two texts have a cosine similarity of 0.78, and a third pair scores 0.19. Roughly how many of these pairs would you expect to be near-synonyms in the same professional field? Answer with a count (0, 1 or 2).':
    'Do texts ki cosine similarity 0.78 hai, aur ek teesre pair ka score 0.19 hai. Aap lagbhag kitne pairs se umeed karenge ki woh ek hi professional field ke near-synonyms hon? Count se jawaab dijiye (0, 1 ya 2).',
  'You can’t work out a count from cosine values alone. How similarity scores spread out depends on the model, the corpus and the task. Label examples from your own retrieval task, and set a threshold or ranking rule from those.':
    'Sirf cosine values se count nahi nikala ja sakta. Similarity scores kaise failte hain, yeh model, corpus aur task par depend karta hai. Apne retrieval task ke examples label kijiye, aur unse threshold ya ranking rule tay kijiye.',
  'What does reciprocal rank fusion do, in plain words?':
    'Reciprocal rank fusion simple words mein kya karta hai?',
  'Rank 1 adds a lot, and rank 40 adds almost nothing. A result that does reasonably well on both lists beats one that wins only one. There’s no learning involved, just one line of arithmetic, and it’s hard to beat.':
    'Rank 1 bahut jodta hai, aur rank 40 lagbhag kuch nahi. Jo result dono lists mein theek-thaak karta hai woh us result se behtar hai jo sirf ek jeetta hai. Isme koi learning nahi hai, bas ek line ka arithmetic hai, aur ise harana mushkil hai.',
  'Adds up one-over-rank across both ranked lists, so ranking well on either list earns points':
    'Dono ranked lists mein one-over-rank jodta hai, isliye kisi bhi list mein achha rank karne par points milte hain',
  'Why do you apply a reranker only to a shortlist, not the whole corpus?':
    'Reranker sirf ek shortlist par kyun lagate hain, poore corpus par nahi?',
  'Embeddings are worked out ahead of time and searched instantly, so they do the wide first pass. The reranker is accurate because it reads the question and chunk together, and that is exactly why it can’t run on everything.':
    'Embeddings pehle se nikaal liye jaate hain aur turant search ho jaate hain, isliye wahi pehla wide pass karte hain. Reranker accurate isliye hai ki woh question aur chunk ko saath padhta hai, aur yahi wajah hai ki woh sab kuch par nahi chal sakta.',
  'It reads the question and each chunk together, so its cost grows in step with the number of candidates':
    'Woh question aur har chunk ko saath padhta hai, isliye uski cost candidates ki ginti ke saath badhti hai',
  'Which technique fixes the orphan chunk you counted during chunking?':
    'Chunking ke dauran aapne jo orphan chunk gina tha, use kaun si technique theek karti hai?',
  'The orphan becomes findable because its address moves into the right neighbourhood. It costs one cheap call per chunk when you index, and nothing when a user asks.':
    'Orphan ab mil sakta hai kyunki uska address sahi neighbourhood mein chala jaata hai. Indexing ke waqt har chunk par ek sasti call lagti hai, aur user ke poochhte waqt kuch nahi.',
  'Contextual retrieval: a generated situating sentence added before embedding':
    'Contextual retrieval: embedding se pehle ek generated situating sentence jodna',
  'Which lever improves cost and quality at the same time?':
    'Kaun sa lever cost aur quality dono ek saath behtar karta hai?',
  'Almost every other lever trades one for the other. Here you retrieve wide, rerank narrow, and then send fewer but better chunks.':
    'Baaki lagbhag har lever ek ke badle doosra deta hai. Yahan aap wide retrieve karte hain, narrow rerank karte hain, aur phir kam lekin behtar chunks bhejte hain.',
  'Your corpus holds both the 2024 and the 2026 versions of a policy. Which technique saves you?':
    'Aapke corpus mein ek policy ke 2024 aur 2026 dono versions hain. Kaun si technique aapko bachati hai?',
  'No embedding model can tell that a rule has been repealed. Semantic similarity will happily return the old text with a high, confident score. This is ordinary database work, and it beats every clever technique here.':
    'Koi embedding model nahi bata sakta ki ek rule repeal ho chuka hai. Semantic similarity khushi se purana text high, confident score ke saath wapas de degi. Yeh aam database ka kaam hai, aur yahan har clever technique se behtar hai.',
  'How recent a record is, what it covers and who may see it are facts about the record, not about its meaning. A mismatch in phrasing is exactly what semantic retrieval is for.':
    'Ek record kitna recent hai, woh kya cover karta hai aur use kaun dekh sakta hai, yeh record ke facts hain, uske meaning ke nahi. Phrasing ka mismatch hi woh cheez hai jiske liye semantic retrieval bana hai.',
  'Content from a department the user is not allowed to see':
    'Aise department ka content jise user dekh nahi sakta',
  'A question in the user’s own words failing to match':
    'User ke apne words mein poochha gaya sawaal match na ho paana',
  'Before you index a new corpus, what metadata do you require, and why each one?':
    'Naya corpus index karne se pehle, aap kaun sa metadata maangte hain, aur har ek kyun?',
  'At minimum: document identity and version (so you don’t quote superseded rules), effective and expiry dates (for recency), a status such as current, draft or repealed, the owning department or scope (for access and relevance filtering), and the document type (to route different kinds of queries). Each one guards against a failure no embedding can catch. A strong answer also notes that filtering happens before scoring, and that missing metadata can’t be added cheaply once a corpus is embedded.':
    'Kam se kam: document identity aur version (taaki superseded rules quote na ho), effective aur expiry dates (recency ke liye), current, draft ya repealed jaisa status, owning department ya scope (access aur relevance filtering ke liye), aur document type (alag-alag tarah ki queries route karne ke liye). Har ek aisi failure se bachata hai jo koi embedding pakad nahi sakti. Ek strong jawaab yeh bhi kehta hai ki filtering scoring se pehle hoti hai, aur corpus embed hone ke baad missing metadata sasti mein nahi jod sakte.',
  'What is ground truth?':
    'Ground truth kya hai?',
  'It’s the answer key, written before the exam. With no ground truth there is no evaluation, only gut feeling.':
    'Yeh answer key hai, jo exam se pehle likhi jaati hai. Ground truth nahi, toh evaluation nahi, sirf andaaza.',
  'The model’s most confident answer':
    'Model ka sabse confident jawaab',
  'A pre-checked set of questions, correct answers, and where those answers sit in the corpus':
    'Pehle se check kiye hue sawaalon, sahi jawaabon, aur corpus mein un jawaabon ki jagah ka ek set',
  'The system’s average accuracy':
    'System ki average accuracy',
  'Why should an unanswerable question have a permanent place in every ground-truth set?':
    'Unanswerable sawaal ko har ground-truth set mein permanent jagah kyun milni chahiye?',
  'What the system does at that moment is its safety profile, and only a deliberate test row ever measures it.':
    'Us moment par system kya karta hai, wahi uski safety profile hai, aur use sirf ek jaan-boojh kar rakhi gayi test row hi measure karti hai.',
  'It is where retrieval that never says no meets a model that lies confidently, which is the compound failure':
    'Wahan woh retrieval jo kabhi na nahi kehti, us model se milti hai jo confidence ke saath jhooth bolta hai, yaani compound failure',
  'Your ground truth scores 9/9 at k=3 on the first try. What is the most likely explanation?':
    'Aapka ground truth pehli koshish mein k=3 par 9/9 score karta hai. Sabse mumkin wajah kya hai?',
  'Questions written from the chunks test word overlap, not retrieval. Rewrite several in a real user’s words without looking at the document, then grade again.':
    'Chunks se likhe sawaal word overlap test karte hain, retrieval nahi. Kuch sawaal document dekhe bina ek asli user ke words mein dobara likhiye, phir dobara grade kijiye.',
  'You wrote the questions while reading the chunks, so they use the document’s own words':
    'Aapne sawaal chunks padhte hue likhe, isliye unmein document ke apne words hain',
  'Your offline eval reads 92%, but users are complaining. Give the most likely cause and the fix.':
    'Aapka offline eval 92% dikhata hai, lekin users shikayat kar rahe hain. Sabse mumkin wajah aur fix batayiye.',
  'The ground truth doesn’t look like real traffic. Most likely the team wrote it, in the document’s own words, without the vague wording, follow-ups and out-of-scope questions that real users bring. The fix is to sample real production queries into the eval set. That’s the flywheel turning: traffic, then error analysis, then new eval cases. A strong answer tells offline eval (does it pass the key?) apart from online eval (are users better off?), and says you need both.':
    'Ground truth asli traffic jaisa nahi dikhta. Zyada mumkin hai team ne use document ke apne words mein likha, un vague wording, follow-ups aur out-of-scope sawaalon ke bina jo asli users laate hain. Fix hai asli production queries ko eval set mein sample karna. Yahi flywheel ka ghoomna hai: traffic, phir error analysis, phir naye eval cases. Ek strong jawaab offline eval (kya woh key pass karta hai?) aur online eval (kya users ko behtar mil raha hai?) ko alag karke batata hai, aur kehta hai ki dono chahiye.',
  'Of everything that mattered, how much did the system fetch? What is this measure?':
    'Jo kuch zaroori tha, usme se system ne kitna fetch kiya? Yeh kaun sa measure hai?',
  'Recall is about missed files. Precision is about a buried desk. The office-assistant story helps you keep the two straight.':
    'Recall chhooti hui files ke baare mein hai. Precision dabe hue desk ke baare mein hai. Office-assistant wali kahani dono ko alag rakhne mein madad karti hai.',
  'More candidates can improve coverage and lower relevance density, but neither is guaranteed. The retrieved text can grow with k, while actual cost depends on chunk size, prompt overhead, output tokens, caching, truncation and pricing. So measure it.':
    'Zyada candidates coverage badha sakte hain aur relevance density ghata sakte hain, lekin dono mein se koi guaranteed nahi. Retrieved text k ke saath badh sakta hai, jabki actual cost chunk size, prompt overhead, output tokens, caching, truncation aur pricing par depend karti hai. Isliye measure kijiye.',
  'Precision rises and recall falls':
    'Precision badhti hai aur recall girta hai',
  'For a customer-facing answer bot, which failure costs more?':
    'Customer-facing answer bot ke liye kaun si failure zyada mehngi padti hai?',
  'A wrong answer is a disaster when customers see it, but you can live with it inside the company. “Cannot find” is the other way round. That difference decides your k, and the decision belongs to whoever owns the use case.':
    'Galat jawaab tab disaster hai jab customers dekhein, lekin company ke andar usse nipta ja sakta hai. “Cannot find” ulta hai. Yahi farq aapka k tay karta hai, aur yeh faisla use case ke owner ka hai.',
  '“I could not find this, please contact us”':
    '“Mujhe yeh nahi mila, please humse contact kijiye”',
  'You measure 6/9 hits at k=1, 8/9 at k=3 and 9/9 at k=8, with relevant fractions of 6/9, 11/27 and 14/72. Which k do you ship for an internal drafting aide, and why?':
    'Aap k=1 par 6/9 hits, k=3 par 8/9 aur k=8 par 9/9 measure karte hain, relevant fractions 6/9, 11/27 aur 14/72 ke saath. Ek internal drafting aide ke liye aap kaun sa k ship karenge, aur kyun?',
  'k=3 or k=8, leaning k=8. In a drafting aide, the professional reviewing the draft catches imperfect ones, so a buried desk is survivable. A tool that fails to surface the right material gets abandoned. But k=8 buys the last hit at about 2.7× the tokens of k=3, for a gain of one hit and a drop in precision to 19%. So a strong answer picks k=3 as the good-value choice and k=8 as defensible if latency and budget allow, and says it would revisit the decision with a reranker, to get k=3 volume at k=8 recall.':
    'k=3 ya k=8, k=8 ki taraf jhukte hue. Drafting aide mein draft review karne wala professional adhoore drafts pakad leta hai, isliye dabi hui desk jhel li jaati hai. Jo tool sahi material saamne nahi laata, use log chhod dete hain. Lekin k=8 aakhri hit k=3 se lagbhag 2.7× tokens mein deta hai, sirf ek hit ke gain ke liye aur precision 19% tak girne ke saath. Isliye ek strong jawaab k=3 ko value wala choice batata hai aur k=8 ko tab defensible maanta hai jab latency aur budget ijaazat dein, aur kehta hai ki woh reranker ke saath decision dobara dekhega, taaki k=3 ka volume k=8 ke recall par mile.',
  'Before you trust an LLM judge, what is the one step you can’t skip?':
    'LLM judge par bharosa karne se pehle woh ek step kaun sa hai jo aap chhod nahi sakte?',
  'Check a judge against human labels before you use it to measure anything. Unchecked, it is just a second opinion from the same kind of system that wrote the answer.':
    'Judge ko human labels ke saamne check kijiye, uske baad hi use kuch measure karne ke liye use kijiye. Bina check kiye woh bas usi tarah ke system ki doosri raay hai jisne jawaab likha tha.',
  'Measuring how well it agrees with human labels on a representative set':
    'Ek representative set par human labels ke saath uska agreement measure karna',
  'You pad a correct answer with hedging and structure, without changing any claim. The judge’s score goes up. What is this?':
    'Aap ek sahi jawaab ko hedging aur structure se bhar dete hain, koi claim badle bina. Judge ka score badh jaata hai. Yeh kya hai?',
  'Longer answers score higher, all else equal. This spoils a great many published evaluation numbers, and you can reproduce it yourself in five minutes.':
    'Lambe jawaab zyada score karte hain, baaki sab barabar rakhne par. Yeh bahut saare published evaluation numbers ko bigaad deta hai, aur aap ise khud paanch minute mein reproduce kar sakte hain.',
  'Correct behaviour, because clearer answers are better':
    'Sahi behaviour, kyunki saaf jawaab behtar hote hain',
  'Which judge design choices help resist the known biases?':
    'Judge design ke kaun se choices known biases se bachne mein madad karte hain?',
  'Narrow rubrics, forced evidence and randomised pairwise comparison all cut down bias. Averaging a vague overall score gives you a steady number that is steadily wrong.':
    'Narrow rubrics, forced evidence aur randomised pairwise comparison, teeno bias kam karte hain. Ek vague overall score ka average lene se ek steady number milta hai jo steadily galat hota hai.',
  'Grade one narrow dimension per call, not overall quality':
    'Har call mein ek narrow dimension grade kijiye, overall quality nahi',
  'Use pairwise comparison with the order of presentation randomised':
    'Pairwise comparison use kijiye, presentation ka order randomise karke',
  'Your judge agrees with your human labels on 6 of 10, and the disagreements are scattered with no pattern. What should you conclude?':
    'Aapka judge aapke human labels se 10 mein se 6 par agree karta hai, aur disagreements bikhre hue hain, koi pattern nahi. Aap kya conclude karenge?',
  'A judge that is always lenient on one kind of failure is usable, as long as you know that. A judge whose errors are random gives you no signal you can correct.':
    'Jo judge ek tarah ki failure par hamesha lenient rehta hai, woh usable hai, bas aapko yeh pata hona chahiye. Jis judge ki errors random hain, woh aisa koi signal nahi deta jise aap correct kar sakein.',
  'Usable, because 60% is above chance':
    'Usable hai, kyunki 60% chance se upar hai',
  'Unusable, because random error can’t be corrected for':
    'Unusable hai, kyunki random error ko correct nahi kiya ja sakta',
  'Done properly, what is error analysis mostly?':
    'Sahi tareeke se ki jaye toh error analysis zyadatar kya hai?',
  'It’s reading, not coding. It has the biggest payoff of anything in applied AI, mostly because almost nobody does it.':
    'Yeh padhna hai, coding nahi. Applied AI mein iska payoff sabse bada hai, zyadatar isliye ki lagbhag koi ise karta hi nahi.',
  'Why is a failure taxonomy built from your own traffic better than adding more benchmark evals?':
    'Apne traffic se bani failure taxonomy aur zyada benchmark evals jodne se behtar kyun hai?',
  'Your own taxonomy tells you what to fix and gives you categories you can count. A benchmark only tells you something is wrong, and on someone else’s data.':
    'Aapki apni taxonomy batati hai ki kya fix karna hai aur aapko aisi categories deti hai jinhe aap ginn sakte hain. Benchmark sirf itna batata hai ki kuch galat hai, aur woh bhi kisi aur ke data par.',
  'Benchmarks measure someone else’s failures, not your users, documents or corpus quirks':
    'Benchmarks kisi aur ki failures measure karte hain, aapke users, documents ya corpus ki quirks nahi',
  'Each turn makes your eval suite a truer picture of reality. It’s the one asset in an AI product that gains value over time. Models change every few months, but your ground truth and taxonomy stay.':
    'Har chakkar aapke eval suite ko asliyat ki sachchi tasveer banata hai. AI product mein yahi ek asset hai jiski value waqt ke saath badhti hai. Models har kuch mahine mein badalte hain, lekin aapka ground truth aur taxonomy rehte hain.',
  'Why does the book ask you to write down a prediction before every measurement?':
    'Book aapse har measurement se pehle prediction likhne ko kyun kehti hai?',
  'Most people guess too high, often by a lot. Having that gap on record is what stops a slick demo from settling a decision while you’re in the room.':
    'Zyadatar log andaaza zyada lagate hain, aksar kaafi zyada. Woh gap record mein hona hi ek chamkeele demo ko decision tay karne se rokta hai jab aap room mein hote hain.',
  'Because the gap between your guess and the measurement is the lesson; without the guess, a number is just a number':
    'Kyunki aapke andaaze aur measurement ka gap hi lesson hai; andaaze ke bina number bas ek number hai',
  'To compare yourself with other learners':
    'Khud ko doosre learners se compare karne ke liye',
  'Across twelve logged predictions, your measured values are always lower than your guesses. What is the right response?':
    'Baarah logged predictions mein aapki measured values hamesha aapke andaazon se kam hain. Sahi response kya hai?',
  'Once you know your own calibration curve, you can use it. This is the one skill in the book that turns directly into better judgment in rooms where nobody is measuring anything.':
    'Jab aap apna calibration curve jaan lete hain, toh use kaam mein la sakte hain. Book mein yahi ek skill hai jo seedhe un rooms mein behtar judgment banti hai jahan koi kuch measure nahi kar raha hota.',
  'Stop predicting, because it is discouraging':
    'Predict karna band kar do, kyunki isse dil toot jaata hai',
  'Adjust future estimates downward, and treat your own confidence as a known bias':
    'Aage ke estimates neeche adjust kijiye, aur apne confidence ko ek known bias maniye',
  'You predicted 8 of 9 questions would retrieve a correct chunk at k=3. You measured 6. Write the one sentence this gap earns you.':
    'Aapne predict kiya tha ki 9 mein se 8 sawaal k=3 par sahi chunk retrieve karenge. Aapne measure kiya toh 6 mile. Is gap se kamaya hua ek sentence likhiye.',
  'Something like: “I over-predicted retrieval quality by 22 percentage points on documents I know well, so my gut feel about whether a demo is working can’t be trusted, and I won’t accept a demo as evidence again.” Strong answers name the size of the gap, its direction, and a change in behaviour, not just “I was wrong.”':
    'Kuch aisa: “Maine jin documents ko main achhe se jaanta hoon unpar retrieval quality ko 22 percentage points zyada predict kiya, isliye demo kaam kar raha hai ya nahi, is par mera gut feel bharosemand nahi hai, aur main ab demo ko saboot nahi maanunga.” Strong jawaab gap ka size, uski direction, aur behaviour mein badlaav batate hain, sirf “main galat tha” nahi.',
  'What does constrained decoding guarantee about the output?':
    'Constrained decoding output ke baare mein kya guarantee deta hai?',
  'It guarantees the shape, the types and the required fields, and nothing more. A perfectly shaped record can still carry a made-up amount in a correctly typed number field. Shape isn’t truth.':
    'Yeh shape, types aur required fields ki guarantee deta hai, aur bas itna hi. Ek perfectly shape wala record sahi type ke number field mein bhi banaya hua amount rakh sakta hai. Shape ka matlab truth nahi hota.',
  'It is factually correct':
    'Woh factually sahi hai',
  'It is well-formed against your schema':
    'Woh aapke schema ke hisaab se well-formed hai',
  'It is grounded in the retrieved context':
    'Woh retrieved context par based hai',
  'It is free of bias':
    'Usme koi bias nahi hai',
  'A feature handles 10,000 requests a day at 97% JSON compliance. How often does it fail?':
    'Ek feature roz 10,000 requests sambhalta hai, 97% JSON compliance par. Woh kitni baar fail hota hai?',
  '“Mostly works” is the whole problem. The failures aren’t loud. They show up as a missing key in a record that something else then uses.':
    '“Zyadatar chalta hai” hi poori problem hai. Failures shor nahi machate. Woh ek record mein missing key ki tarah dikhte hain jise phir koi aur system use karta hai.',
  'So rarely that you can ignore it':
    'Itni kam ki ignore kar sakein',
  'A confidence number the model generates isn’t calibrated, and it stays high for wrong answers too. A quote turns a claim you can’t verify into a check that takes four seconds. It’s the cheapest quality fix there is.':
    'Model jo confidence number banata hai woh calibrated nahi hota, aur galat jawaabon ke liye bhi high rehta hai. Ek quote us claim ko, jise aap verify nahi kar sakte, ek chaar second ke check mein badal deta hai. Quality ka sabse sasta fix yahi hai.',
  'A timestamp, because it enables auditing':
    'Ek timestamp, kyunki isse auditing hoti hai',
  'A word-for-word supporting quote, because you can check it against the source in seconds':
    'Ek word-for-word supporting quote, kyunki aap use source se seconds mein check kar sakte hain',
  'A model version, because it enables reproduction':
    'Ek model version, kyunki isse reproduction hota hai',
  'A processing duration, because it flags slow paths':
    'Ek processing duration, kyunki yeh slow paths ko flag karta hai',
  'The first two take away the pressure to invent. Enums stop values from drifting and save clean-up downstream. A confidence field adds a number that feels like evidence but isn’t.':
    'Pehle do invent karne ka dabaav hata dete hain. Enums values ko drift hone se rokte hain aur downstream clean-up bachate hain. Confidence field ek aisa number jodta hai jo evidence jaisa lagta hai lekin hai nahi.',
  'Adding a status enum that includes insufficient_evidence':
    'Ek status enum jodna jisme insufficient_evidence shaamil ho',
  'Replacing free-text fields with enums where the possible values are a closed set':
    'Free-text fields ko enums se badalna jahan possible values ka set closed ho',
  'Rewrite this requirement as a schema decision: “The extractor keeps guessing settlement amounts for claims that are still pending.”':
    'Is requirement ko schema decision ki tarah dobara likhiye: “Extractor un claims ke settlement amounts andaaza lagata rehta hai jo abhi pending hain.”',
  'Make amount nullable (type: ["number","null"]) and add a status enum with values like settled, pending and insufficient_evidence. Require status, but not amount. Add a supporting_quote field so any amount that is filled in can be checked. Say this part out loud: the invention was caused by a required, non-nullable numeric field with no legal alternative. That’s a schema bug, not a model failing.':
    'Amount ko nullable banaiye (type: ["number","null"]) aur ek status enum jodiye jisme settled, pending aur insufficient_evidence jaisi values hon. Status ko required rakhiye, amount ko nahi. Ek supporting_quote field jodiye taaki jo amount bhara jaaye use check kiya ja sake. Yeh baat zor se kahiye: invention ki wajah ek required, non-nullable numeric field thi jiska koi legal alternative nahi tha. Yeh schema bug hai, model ki failure nahi.',
  'When a model “calls a tool,” what actually runs the function?':
    'Jab model “tool call karta hai,” toh function asal mein kaun chalata hai?',
  'The model can only ask. Your program runs the function and puts the result back in the envelope. That one fact is the whole security picture.':
    'Model sirf maang sakta hai. Aapka program function chalata hai aur result ko envelope mein wapas daalta hai. Yahi ek baat poori security ki tasveer hai.',
  'The provider’s infrastructure':
    'Provider ka infrastructure',
  'Your code, which decided to go along with a request':
    'Aapka code, jisne request maan lene ka faisla kiya',
  'What is the best definition of an “agent”?':
    '“Agent” ki sabse sahi definition kya hai?',
  'If the fourth part, the stopping condition, is missing, you don’t have an agent. You have an accident with a budget attached.':
    'Agar chauthi cheez, yaani stopping condition, missing hai, toh aapke paas agent nahi hai. Aapke paas ek budget ke saath jaruri accident hai.',
  'A framework that coordinates several models':
    'Ek framework jo kai models ko coordinate karta hai',
  'Your agent gave a confident final answer containing an exchange rate, but the rate tool had returned an error. Which failure is this, and why does it matter most?':
    'Aapke agent ne exchange rate wala ek confident final answer diya, lekin rate tool ne error return kiya tha. Yeh kaun si failure hai, aur yeh sabse zyada kyun matter karti hai?',
  'A wrong answer that a person reads is a mistake. A wrong “success” that a system records is an incident.':
    'Ek galat jawaab jo insaan padhta hai, woh galti hai. Ek galat “success” jo system record karta hai, woh incident hai.',
  'A retrieval failure, because the tool was wrong':
    'Retrieval failure, kyunki tool galat tha',
  'Success narrated over a tool error: confident invention, a real side effect, and a system that trusts the report':
    'Tool error ke upar success ki kahani: confident invention, ek asli side effect, aur ek system jo report par bharosa karta hai',
  'You changed no code, and the agent started choosing the wrong tool. What did you change?':
    'Aapne koi code nahi badla, aur agent galat tool chunne laga. Aapne kya badla?',
  'The model picks tools only by reading their descriptions. A description is working code written in English, so it belongs under version control and review.':
    'Model tools sirf unke descriptions padhkar chunta hai. Description English mein likha ek kaam karta code hai, isliye woh version control aur review ke andar aana chahiye.',
  'Before you let an agent act on a real workflow, which of these are mandatory?':
    'Agent ko asli workflow par kaam karne dene se pehle, inmein se kaun si cheezein zaroori hain?',
  'All four. The first two stop runaway cost. The trace makes debugging possible at all. The fourth is the line between reading and writing, the most important line in the whole architecture.':
    'Chaaron. Pehli do runaway cost rokti hain. Trace debugging ko possible banata hai. Chauthi padhne aur likhne ke beech ki line hai, poore architecture ki sabse zaroori line.',
  'A step budget, with defined behaviour for when it runs out':
    'Ek step budget, aur khatam hone par kya hoga uska defined behaviour',
  'A repeat-detection rule that breaks identical back-to-back calls':
    'Ek repeat-detection rule jo ek jaisi back-to-back calls ko tod de',
  'A single call sends about 1,200 tokens. A 6-step agent re-sends a growing conversation at each step, adding roughly 400 tokens per step. About how many input tokens does the whole run use?':
    'Ek single call lagbhag 1,200 tokens bhejti hai. 6-step agent har step par badhti hui conversation dobara bhejta hai, har step mein lagbhag 400 tokens jodta hua. Poora run lagbhag kitne input tokens use karta hai?',
  'Add up each step: 1200 + 1600 + 2000 + 2400 + 2800 + 3200 = 13,200. That’s about 11 times a single call, not 6 times, because each step carries all the context so far. This is the most underestimated line in AI business cases.':
    'Har step jodiye: 1200 + 1600 + 2000 + 2400 + 2800 + 3200 = 13,200. Yeh ek single call se lagbhag 11 guna hai, 6 guna nahi, kyunki har step ab tak ka poora context saath leke chalta hai. AI business cases mein yeh sabse kam aanki jaane wali line hai.',
  'How do prompt engineering and context engineering differ?':
    'Prompt engineering aur context engineering mein kya farq hai?',
  'One is about wording. The other is about scarcity: making careful choices with a resource that looks unlimited but isn’t.':
    'Ek wording ke baare mein hai. Doosra kami ke baare mein hai: ek aise resource ke saath soch-samajh kar choices karna jo unlimited dikhta hai par hai nahi.',
  'Prompt engineering is how the instruction is worded; context engineering is what material is let in, in what order, and what is pushed out':
    'Prompt engineering matlab instruction kaise likha gaya hai; context engineering matlab kaun sa material andar aayega, kis order mein, aur kya bahar nikala jaayega',
  'What practical design rule does prompt caching give you?':
    'Prompt caching aapko kaun sa practical design rule deta hai?',
  'The system prompt and reference documents go at the head, and the user’s question goes at the tail. It’s free money. You only have to order the envelope correctly.':
    'System prompt aur reference documents shuru mein jaate hain, aur user ka sawaal ant mein. Yeh muft ka paisa hai. Bas envelope ko sahi order mein lagana hota hai.',
  'Put stable material first and changing material last':
    'Stable material pehle rakhiye aur badalta hua material baad mein',
  'What is the hidden cost of casually editing a system prompt when you use caching?':
    'Caching use karte waqt system prompt ko yunhi edit kar dene ki chhupi hui cost kya hai?',
  'A tweak that looks trivial can multiply your bill until the caches fill up again. So change system prompts deliberately, with a version, not in passing.':
    'Ek tweak jo chhota lagta hai, aapka bill multiply kar sakta hai jab tak caches dobara na bhar jaayein. Isliye system prompts ko soch-samajh kar, ek version ke saath badaliye, chalte-chalte nahi.',
  'Every cache after the edited prefix is invalidated':
    'Edit kiye gaye prefix ke baad ka har cache invalidate ho jaata hai',
  'Latency goes up permanently':
    'Latency hamesha ke liye badh jaati hai',
  'A summary keeps the themes and loses the particulars. So design for it: keep identifiers in a structured store, not in the prose history.':
    'Summary themes ko rakhti hai aur particulars ko kho deti hai. Isliye uske hisaab se design kijiye: identifiers ko ek structured store mein rakhiye, prose history mein nahi.',
  'Specific identifiers: figures, names, dates, reference numbers':
    'Khaas identifiers: figures, names, dates, reference numbers',
  'What does test-time compute mean?':
    'Test-time compute ka kya matlab hai?',
  'It’s the first product lever in this book that a PM can control directly, with a number.':
    'Yeh is book ka pehla product lever hai jise ek PM seedhe ek number se control kar sakta hai.',
  'Buying accuracy per query at inference time, paid for in money and latency':
    'Inference ke waqt har query par accuracy kharidna, jiski keemat paise aur latency mein chukani padti hai',
  'Which kind of task should NOT get a reasoning budget?':
    'Kis tarah ke task ko reasoning budget NAHI milna chahiye?',
  'Classification, extraction, lookup and formatting make up most production traffic, and they gain nothing from extra thinking. Spending reasoning tokens on them is like paying a barrister to read a form.':
    'Classification, extraction, lookup aur formatting zyadatar production traffic banate hain, aur extra thinking se unhe kuch nahi milta. Unpar reasoning tokens kharch karna aisa hai jaise form padhne ke liye barrister ko paisa dena.',
  'An eligibility calculation across three interacting conditions':
    'Teen aapas mein judi conditions par eligibility calculation',
  'Routing a ticket to the right department':
    'Ticket ko sahi department tak route karna',
  'Retrieval returns the wrong chunk, and you switch to a reasoning model. What happens?':
    'Retrieval galat chunk deta hai, aur aap reasoning model par chale jaate hain. Kya hota hai?',
  'Reasoning can’t make up evidence that isn’t there. When the evidence is wrong, more effort makes the answer more convincing, not more correct. That makes it more dangerous, not less.':
    'Reasoning wahan evidence nahi bana sakta jo hai hi nahi. Jab evidence galat ho, toh zyada effort jawaab ko zyada convincing banata hai, zyada sahi nahi. Isliye yeh kam nahi, zyada khatarnaak ho jaata hai.',
  'The model notices the error and asks for better context':
    'Model error pakad leta hai aur behtar context maangta hai',
  'It reasons at length toward the wrong answer, which comes out longer, better argued and more convincing':
    'Woh galat jawaab ki taraf lambi reasoning karta hai, jo lamba, behtar dalil wala aur zyada convincing nikalta hai',
  'Accuracy improves a little':
    'Accuracy thodi sudharti hai',
  'For a chat screen, which latency number should drive the design?':
    'Chat screen ke liye, design kaun se latency number se chalna chahiye?',
  'Users feel the slow end. One 40-second response teaches them the product is slow far more than twenty fast ones teach them it’s quick.':
    'Users slow wala sira mehsoos karte hain. Ek 40-second ka response unhe product slow hone ka utna sikha deta hai jitna bees tez response use tez batane mein nahi sikhate.',
  'Someone reports, “Accuracy went up after we moved to the reasoning model.” Give the three questions that decide whether to keep it.':
    'Koi report karta hai, “Reasoning model par jaane ke baad accuracy badh gayi.” Woh teen sawaal dijiye jo tay karte hain ki ise rakhna hai ya nahi.',
  'One: on which slice did it improve, the whole set or just a handful of hard cases? Two: what happened to p95 latency and to cost per query? Three: could a retrieval fix have given the same gain more cheaply? In other words, were the failures really evidence failures, not thinking failures? A strong answer also asks whether the thinking tokens are listed separately on the bill.':
    'Ek: kis slice par sudhaar hua, poore set par ya sirf kuch mushkil cases par? Do: p95 latency aur cost per query ka kya hua? Teen: kya koi retrieval fix wahi gain sasta de sakta tha? Matlab, kya failures asal mein evidence failures thi, thinking failures nahi? Ek strong jawaab yeh bhi poochta hai ki thinking tokens bill par alag se likhe jaate hain ya nahi.',
  'Text extraction reads a three-column financial table. What is most likely to be lost?':
    'Text extraction teen-column wali financial table padhta hai. Sabse zyada kya kho jaata hai?',
  'Every value survives, but how they relate to each other doesn’t. Retrieval then works perfectly, and the model smoothly quotes a number from the wrong column.':
    'Har value bachti hai, lekin woh ek-doosre se kaise jude hain yeh nahi bachta. Phir retrieval bilkul theek chalta hai, aur model smoothly galat column ka number quote kar deta hai.',
  'The links between rows and columns, even though every value survives':
    'Rows aur columns ke beech ke rishte, bhale hi har value bach jaaye',
  'Only the column headers':
    'Sirf column headers',
  'Why is this table failure especially dangerous?':
    'Yeh table failure khaas taur par khatarnaak kyun hai?',
  'Nothing after extraction ever sees the page, so nothing in the pipeline can spot the problem. Your Chapter 6 evaluation would count it as a hit.':
    'Extraction ke baad kuch bhi page ko dekhta hi nahi, isliye pipeline mein koi bhi problem pakad nahi sakta. Aapka Chapter 6 evaluation ise hit gin leta.',
  'Every retrieval metric scores it as a success, because the right page was found':
    'Har retrieval metric ise success score karta hai, kyunki sahi page mil gaya tha',
  'What is the cheapest thing to ask of a vision model that reads a table?':
    'Table padhne wale vision model se maangne ki sabse sasti cheez kya hai?',
  'It turns a number you can’t verify into a check that takes four seconds. It’s the supporting-quote idea again, in two dimensions.':
    'Yeh ek aise number ko jise aap verify nahi kar sakte, chaar second ke check mein badal deta hai. Yeh supporting-quote wala idea hi hai, bas do dimensions mein.',
  'That it process the page at high resolution':
    'Ki woh page ko high resolution par process kare',
  'One: what fraction of the corpus is clean digital text, versus scanned or mixed. Two, which almost nobody asks: what fraction of the answers people actually need live inside tables and figures, not prose. The second is usually the higher number. Together they decide whether you go text-first, vision-first or hybrid, and they change cost estimates by multiples. A strong answer adds that both take one afternoon, on a sample of about 30 documents and about 20 real questions.':
    'Ek: corpus ka kitna hissa saaf digital text hai, aur kitna scanned ya mixed. Do, jo lagbhag koi nahi poochta: logon ko jo answers asal mein chahiye, unka kitna hissa prose mein nahi, tables aur figures ke andar hai. Doosra number aksar zyada hota hai. Dono milkar tay karte hain ki aap text-first jaayenge, vision-first ya hybrid, aur woh cost estimates ko kai guna badal dete hain. Ek strong jawaab jodta hai ki dono mein ek dopahar lagti hai, lagbhag 30 documents aur lagbhag 20 asli sawaalon ke sample par.',
  'How does indirect prompt injection arrive?':
    'Indirect prompt injection kaise aata hai?',
  'It’s the harder version of the Chapter 2 lesson. The pressure doesn’t have to come from the user. It targets a system nobody is watching in real time, and you can’t see it in the interface.':
    'Yeh Chapter 2 ke lesson ka mushkil version hai. Dabaav user se aana zaroori nahi. Woh aise system ko nishana banata hai jise real time mein koi dekh nahi raha, aur interface mein woh dikhta nahi.',
  'The user types an attack':
    'User koi attack type karta hai',
  'Through content the system reads: a document, email, ticket or web page':
    'System jo content padhta hai uske zariye: document, email, ticket ya web page',
  'Through a compromised API key':
    'Compromised API key ke zariye',
  'Through a malicious model update':
    'Malicious model update ke zariye',
  'Why can’t the model reliably tell your instructions apart from document text?':
    'Model aapke instructions aur document ke text ko bharosemand tarah se alag kyun nahi kar sakta?',
  'The separation is a habit the model was trained to mostly follow. It isn’t a boundary the model can enforce.':
    'Yeh alag karna ek aadat hai jo model ko zyadatar follow karne ke liye train kiya gaya. Yeh aisi boundary nahi hai jise model enforce kar sake.',
  'Both arrive as text in the same stream, and nothing in the structure separates instruction from data':
    'Dono ek hi stream mein text ki tarah aate hain, aur structure mein kuch aisa nahi jo instruction ko data se alag kare',
  'What makes up the lethal trifecta?':
    'Lethal trifecta kin cheezon se banta hai?',
  'You can manage any two, but all three complete a circuit. Untrusted content with no private data has nothing to steal. Private data with no untrusted content has no attacker. Both without a way out has no way to deliver.':
    'Koi bhi do aap sambhal sakte hain, lekin teeno milkar circuit poora kar dete hain. Untrusted content bina private data ke, churane ko kuch nahi hota. Private data bina untrusted content ke, koi attacker nahi hota. Dono hon lekin bahar jaane ka raasta na ho, toh deliver karne ka tareeka nahi hota.',
  'Rendering a remote image from a URL that the model chose counts as what?':
    'Model ne jo URL chuna, usse remote image render karna kis cheez mein ginta hai?',
  'The URL itself can carry data. Any outgoing request the model can influence is a channel, and this one is often overlooked.':
    'URL khud data le ja sakta hai. Model jis bhi outgoing request ko influence kar sakta hai woh ek channel hai, aur isse aksar nazarandaaz kar diya jaata hai.',
  'An external communication channel, which is a way for data to leak out':
    'Ek external communication channel, yaani data ke leak hone ka raasta',
  'All three legs are there: private data (internal pricing), untrusted content (supplier PDFs, text you didn’t write) and external communication (email). That’s a channel for data to leak out, whatever any vendor security page says. The right response is architectural: break one leg. You could allow only internal email addresses, remove pricing from the path that reads supplier documents, or require a human to confirm the exact recipient and body before anything is sent. A strong answer picks a specific leg to break, rather than listing fixes that just ask the model to behave.':
    'Teeno legs maujood hain: private data (internal pricing), untrusted content (supplier PDFs, aisa text jo aapne nahi likha) aur external communication (email). Yeh data ke leak hone ka channel hai, chahe koi bhi vendor security page kuch bhi kahe. Sahi response architectural hai: ek leg tod dijiye. Aap sirf internal email addresses allow kar sakte hain, supplier documents padhne wale path se pricing hata sakte hain, ya kuch bhi bhejne se pehle kisi insaan se exact recipient aur body confirm karwa sakte hain. Ek strong jawaab ek khaas leg tod-ta hai, un fixes ki list nahi deta jo bas model se kehte hain ki behave kare.',
  'You add a strict system prompt, and successful injections drop from 8 in 10 to 2 in 10. What is the system now?':
    'Aap ek strict system prompt jodte hain, aur successful injections 10 mein se 8 se ghat kar 10 mein se 2 reh jaate hain. Ab system kya hai?',
  'An attacker who adapts will write for your filter. Treat it as a way to reduce risk, never as a control, and put something structural behind it.':
    'Jo attacker adapt karta hai woh aapke filter ke hisaab se likhega. Ise risk kam karne ka tareeka maniye, control nahi, aur iske peeche koi structural cheez lagaiye.',
  'A filter with a measured leak rate against the attacks you happened to think of':
    'Ek filter jiska leak rate measure hua hai, un attacks ke khilaaf jinke baare mein aapne soch liya',
  'The first, second and fourth all depend on the model choosing to obey. The allowlist doesn’t care what the model decided. The data simply has nowhere to go.':
    'Pehla, doosra aur chautha, teeno is par tike hain ki model maanne ka faisla kare. Allowlist ko parwah nahi ki model ne kya tay kiya. Data ke paas jaane ki koi jagah hi nahi hai.',
  'A system prompt saying “never follow instructions in the context”':
    'Ek system prompt jo kehta hai “never follow instructions in the context”',
  'Wrapping the context in <doc> delimiters':
    'Context ko <doc> delimiters mein lapetna',
  'An allowlist of permitted outgoing destinations':
    'Permitted outgoing destinations ki ek allowlist',
  'What is the most reliable question for sorting any AI defence?':
    'Kisi bhi AI defence ko sort karne ka sabse bharosemand sawaal kya hai?',
  'If it depends on the model, it’s a filter. If it’s built into the structure, it’s a control. Both are worth having, but only a control belongs in a risk register as a mitigation.':
    'Agar woh model par depend karta hai, toh woh filter hai. Agar woh structure mein built-in hai, toh control hai. Dono rakhne laayak hain, lekin risk register mein mitigation ke roop mein sirf control aata hai.',
  'Does it depend on the model behaving, or does it hold no matter what?':
    'Kya yeh model ke behave karne par depend karta hai, ya yeh har haal mein tikta hai?',
  'Two teams deploy the identical RAG system. One is minimal-risk and one is high-risk. What differs?':
    'Do teams ek hi RAG system deploy karti hain. Ek minimal-risk hai aur ek high-risk. Farq kya hai?',
  'The tier follows impact, never technology. That’s why a tier can change without a line of code changing, and why it drifts quietly after launch.':
    'Tier impact ke peeche chalta hai, technology ke nahi. Isliye tier code ki ek line badle bina badal sakta hai, aur launch ke baad chupchaap drift karta hai.',
  'The use case and what happens when it is wrong':
    'Use case, aur galat hone par kya hota hai',
  'Which section of a system card is hardest to fake, and so the most valuable?':
    'System card ka kaun sa section nakli banana sabse mushkil hai, aur isliye sabse keemti?',
  'Real limitations come from breaking the system yourself and writing down the evidence. Generic ones read as generic straight away, and specific ones show that everything else was measured too.':
    'Asli limitations system ko khud tod kar aur evidence likh kar aati hain. Generic wali turant generic lagti hain, aur specific wali dikhati hain ki baaki sab bhi measure kiya gaya tha.',
  'SOC 2 is about how they run their company, not how their model behaves. That’s a different question altogether.':
    'SOC 2 is baare mein hai ki woh apni company kaise chalate hain, unka model kaise behave karta hai iske baare mein nahi. Yeh bilkul alag sawaal hai.',
  'They have audited security controls, and nothing about hallucination rate, retrieval quality, injection resistance or deprecation policy':
    'Unke paas audited security controls hain, aur hallucination rate, retrieval quality, injection resistance ya deprecation policy ke baare mein kuch nahi',
  'Your governance file says the system is “highly accurate and thoroughly tested.” What is wrong, and what replaces it?':
    'Aapki governance file kehti hai ki system “highly accurate aur thoroughly tested” hai. Isme galat kya hai, aur iski jagah kya aayega?',
  'Adjectives are sitting where evidence belongs. Replace them with measured numbers and the setup they came from. For example: “7/9 correct-chunk hits at k=3 and 41% precision, measured 12 November against a 10-question ground truth including one unanswerable question, judged by a rubric with 8/10 human agreement.” Also name the known limitations, each with the evidence that produced it. A strong answer notes that these numbers don’t exist unless someone actually built the ground truth, which is why so many governance files are full of adjectives.':
    'Adjectives wahan baithe hain jahan evidence hona chahiye. Unki jagah measured numbers aur woh setup rakhiye jisse woh aaye. Jaise: “k=3 par 7/9 correct-chunk hits aur 41% precision, 12 November ko 10-question ground truth ke khilaaf measure kiya, jisme ek unanswerable question tha, aur 8/10 human agreement wale rubric se judge kiya.” Known limitations bhi likhiye, har ek us evidence ke saath jisse woh nikli. Ek strong jawaab kehta hai ki yeh numbers tab tak nahi hote jab tak kisi ne asal mein ground truth na banaya ho, aur isiliye bahut saari governance files adjectives se bhari hoti hain.',
  'Your oversight design says a human reviews every output, and there are 4,000 outputs a day. What is wrong?':
    'Aapka oversight design kehta hai ki har output ko ek insaan review karta hai, aur roz 4,000 outputs hain. Galat kya hai?',
  'Real designs sample, or review only the outputs that fail a programmatic check. They also give the reviewer the retrieved evidence and the time to act.':
    'Asli designs sample karte hain, ya sirf unhi outputs ko review karte hain jo programmatic check mein fail hote hain. Woh reviewer ko retrieved evidence aur kaam karne ka waqt bhi dete hain.',
  'Nothing, that is thorough':
    'Kuch nahi, yeh toh thorough hai',
  'Nobody can actually do that at this volume, so it only exists on paper':
    'Itne volume par koi asal mein yeh kar nahi sakta, isliye yeh sirf kaagaz par hai',
  'What makes a review point something people can really use?':
    'Review point ko asal mein kaam ka kya banata hai?',
  'You need evidence, a volume people can handle, and real authority. Expert knowledge of every domain is neither possible nor necessary if the first three are in place.':
    'Aapko evidence, aisa volume jo log sambhal sakein, aur asli authority chahiye. Har domain ki expert knowledge na possible hai na zaroori, agar pehli teen cheezein maujood hain.',
  'The reviewer sees the retrieved evidence and the supporting quote, not just the answer':
    'Reviewer ko retrieved evidence aur supporting quote dikhte hain, sirf answer nahi',
  'The volume sent to review is possible to handle in the time available':
    'Review ko bheja gaya volume available time mein sambhalna possible hai',
  'The reviewer has the authority to overrule the system':
    'Reviewer ke paas system ko overrule karne ki authority hai',
  'Structured output gives you fields to branch on. Programmatic checks flag the small group that needs a human. Together they turn “review everything” into “review the 4% that failed a check.”':
    'Structured output aapko branch karne ke liye fields deta hai. Programmatic checks us chhote group ko flag karte hain jise insaan chahiye. Milkar woh “sab kuch review karo” ko “woh 4% review karo jo check mein fail hue” bana dete hain.',
  'A person uses their right to have their data deleted. Which stores must you reach?':
    'Ek insaan apna data delete karwane ka haq istemaal karta hai. Aapko kaun se stores tak pahunchna hoga?',
  'All of them. Most teams find at least two they can’t reach. It’s much better to find that out on an ordinary Tuesday afternoon than when a regulator asks.':
    'Sabhi tak. Zyadatar teams ko kam se kam do aise milte hain jinhe woh reach nahi kar sakti. Yeh ek aam Tuesday dopahar ko pata chalna regulator ke poochhne par pata chalne se kaafi behtar hai.',
  'Which store do people forget most often in a deletion drill?':
    'Deletion drill mein log sabse zyada kaun sa store bhool jaate hain?',
  'It was built by sampling real queries and outputs, it lives outside the main data path, and nobody running the drill thinks of it as a data store.':
    'Woh asli queries aur outputs ko sample karke banaya gaya tha, woh main data path ke bahar rehta hai, aur drill chalane wala koi use data store nahi samajhta.',
  'What is a cascade?':
    'Cascade kya hai?',
  'It works because traffic is lopsided. Most production requests are simple lookups that a small model gets right.':
    'Yeh isliye kaam karta hai kyunki traffic lopsided hota hai. Zyadatar production requests simple lookups hoti hain jo ek chhota model sahi kar deta hai.',
  'Sending each request to a cheap model first, and escalating only the ones that fail a check':
    'Har request pehle ek sasti model ko bhejna, aur sirf unhe escalate karna jo check mein fail hon',
  'The naive cost is ₹0.0005 per query. Now apply these: k raised from 3 to 8 (×2.67 on input), a 4-step agent (×4), a 10% retry rate, and reasoning that triples the output tokens. Roughly what multiple of the naive cost is the loaded cost? Give the multiple.':
    'Naive cost ₹0.0005 per query hai. Ab yeh lagaiye: k 3 se 8 (input par ×2.67), 4-step agent (×4), 10% retry rate, aur reasoning jo output tokens ko teen guna kar deti hai. Loaded cost naive cost ka lagbhag kitna multiple hai? Multiple batayiye.',
  'It comes to roughly ×12 to ×16, depending on the split between input and output. The exact figure matters less than the shape. Multipliers compound, so a business case built on the naive formula is wrong by an order of magnitude, not by a small margin.':
    'Yeh lagbhag ×12 se ×16 aata hai, input aur output ke split par depend karke. Exact figure se zyada shape matter karta hai. Multipliers compound hote hain, isliye naive formula par bana business case ek order of magnitude se galat hota hai, thoda-sa margin nahi.',
  'A price per query without its setup isn’t really a price. The same feature can differ by a factor of ten depending on those answers.':
    'Setup ke bina per query price asal mein price nahi hai. Wahi feature in jawaabon ke hisaab se das guna tak alag ho sakta hai.',
  'At what k, how many model calls per request the user sees, and does that include retries and reasoning tokens?':
    'Kis k par, user ko dikhne wali har request par kitni model calls, aur kya isme retries aur reasoning tokens shaamil hain?',
  'Your cascade escalates 35% of traffic. The cheap model costs 1/12th as much as the strong one. Roughly what do you save, and what must you check before shipping it?':
    'Aapka cascade 35% traffic escalate karta hai. Cheap model strong model se 12 guna sasta hai. Aap lagbhag kitna bachate hain, aur ship karne se pehle kya check karna chahiye?',
  'Blended cost ≈ 0.65×(1/12) + 0.35×1 ≈ 0.40 of always using the strong model. That’s a saving of roughly 60%, before you count the cost of the cheap model’s own escalation overhead (escalated queries are paid for twice). What to check: re-grade accuracy against ground truth under the cascade, because the saving is real only if quality holds. Also check p95 latency, since escalated queries make two round trips. A strong answer names both sides of the trade, not just the saving.':
    'Blended cost ≈ 0.65×(1/12) + 0.35×1 ≈ hamesha strong model use karne ka 0.40. Yaani lagbhag 60% ki bachat, cheap model ke apne escalation overhead ko gine bina (escalated queries ke paise do baar lagte hain). Kya check karna hai: cascade ke tahat ground truth ke saamne accuracy dobara grade kijiye, kyunki bachat tabhi asli hai jab quality tike. Saath mein p95 latency bhi check kijiye, kyunki escalated queries do round trips leti hain. Ek strong jawaab trade ke dono pehlu batata hai, sirf bachat nahi.',
  'A vendor says, “94% accuracy.” Which question comes first?':
    'Ek vendor kehta hai, “94% accuracy.” Pehla sawaal kaun sa hai?',
  'An accuracy number without its question set is just a story with a percentage on it. After that, ask: at which k, and what did the other metric read at that setting?':
    'Question set ke bina accuracy number bas ek kahani hai jispar percentage laga hai. Uske baad poochhiye: kis k par, aur us setting par doosra metric kitna tha?',
  'Against which ground truth? Who wrote it, and does it look like our users’ questions?':
    'Kis ground truth ke khilaaf? Use kisne likha, aur kya woh humare users ke sawaalon jaisa dikhta hai?',
  'A vendor says, “Our GenAI assistant, trained on your documents.” What is most likely true?':
    'Ek vendor kehta hai, “Hamara GenAI assistant, aapke documents par trained.” Sabse mumkin sach kya hai?',
  'It’s almost always retrieval, not training. Ask which one it is. If it was trained, ask to see the training story and how it gets updated. If it retrieves, ask to see the retrieval-quality numbers.':
    'Yeh lagbhag hamesha retrieval hota hai, training nahi. Poochhiye ki kaun sa hai. Agar train hua hai, toh training ki kahani aur update kaise hota hai yeh dikhane ko kahiye. Agar retrieve karta hai, toh retrieval-quality ke numbers dikhane ko kahiye.',
  'Techniques aren’t results. The change on your own question set is the only claim that holds up once it meets your corpus.':
    'Techniques results nahi hoti. Aapke apne question set par jo badlaav aaya, wahi woh daava hai jo aapke corpus se milne ke baad bhi tikta hai.',
  '“Show the before and after on our ground truth, at a stated k, including our unanswerable questions”':
    '“Humare ground truth par before aur after dikhaiye, ek bataye hue k par, humare unanswerable sawaalon ke saath”',
  'A vendor says, “We support all document formats.” Write the three-sentence reply that turns this into a claim you can test.':
    'Ek vendor kehta hai, “Hum saare document formats support karte hain.” Teen sentence ka woh reply likhiye jo ise ek aisa daava bana de jise test kiya ja sake.',
  'Something like: “Format support only means you can open the file. What matters is how faithfully you extract it. Please run extraction on ten of our worst pages, scanned, multi-column and tabular, and give us the cell-level error rate on the tables. And tell us whether, when a question needs a table, the model sees the page image or only the extracted text.” A strong answer separates opening a file from keeping its meaning.':
    'Kuch aisa: “Format support ka matlab bas itna hai ki aap file khol sakte hain. Zaroori yeh hai ki aap use kitni imaandaari se extract karte hain. Please humare dus sabse kharab pages par extraction chalaiye, scanned, multi-column aur tabular, aur tables par cell-level error rate bataiye. Aur yeh bhi bataiye ki jab kisi sawaal ko table chahiye, toh model page image dekhta hai ya sirf extracted text.” Ek strong jawaab file kholne ko uske meaning ko bachaye rakhne se alag karta hai.',
  'In an AI PRD, what do acceptance criteria become?':
    'AI PRD mein acceptance criteria kya ban jaate hain?',
  '“It works” can’t be tested for a system that gives a spread of different outputs. “91% at k=3 on the November ground truth, with zero unsupported-citation failures” can.':
    '“Yeh kaam karta hai” ko us system ke liye test nahi kiya ja sakta jo alag-alag outputs ka ek spread deta hai. “November ground truth par k=3 par 91%, zero unsupported-citation failures ke saath” ko kiya ja sakta hai.',
  'That means the non-AI path must still exist and must have been tested recently. Teams forget this within two quarters of launch.':
    'Matlab non-AI path abhi bhi maujood hona chahiye aur haal hi mein test hua hona chahiye. Teams launch ke do quarter ke andar yeh bhool jaati hain.',
  'A rollback takes a deploy cycle, while a kill switch sends traffic to the non-AI path immediately':
    'Rollback mein ek deploy cycle lagta hai, jabki kill switch traffic ko turant non-AI path par bhej deta hai',
  'Your provider will retire your model in 30 days. What do you re-run?':
    'Aapka provider 30 din mein aapka model retire kar raha hai. Aap kya dobara chalayenge?',
  'All four, and then update the system card. Teams that own these things get it done in an afternoon. Teams that don’t find out, mid-migration, that they never knew whether the old model was any good either.':
    'Chaaron, aur phir system card update kijiye. Jin teams ke paas yeh cheezein hoti hain, woh ek dopahar mein kar leti hain. Jin ke paas nahi hoti, unhe migration ke beech pata chalta hai ki unhe kabhi yeh bhi nahi pata tha ki purana model achha tha ya nahi.',
  'What is a thumbs-down with no context attached?':
    'Bina context ke thumbs-down kya hota hai?',
  'Attach the trace: the query, the rewritten query, the retrieved chunk ids and scores, the prompt version, the model version, k, the output and the checks that failed. Then every thumbs-down becomes a ready-made eval case.':
    'Trace attach kijiye: query, rewritten query, retrieved chunk ids aur scores, prompt version, model version, k, output aur jo checks fail hue. Phir har thumbs-down ek ready-made eval case ban jaata hai.',
  'Nearly worthless, because you can’t reproduce it or tell a wrong answer from one the user just disliked':
    'Lagbhag bekaar, kyunki aap use reproduce nahi kar sakte, na yeh bata sakte ki jawaab galat tha ya user ko bas pasand nahi aaya',
  'Enough for prioritising':
    'Prioritise karne ke liye kaafi',
  'Which sentence explains statelessness best to a non-technical executive?':
    'Ek non-technical executive ko statelessness sabse achhe se kaun sa sentence samjhata hai?',
  'It gives the plain mechanism and the business consequence, with no term the listener can’t repeat. The others are accurate, and no use in the room.':
    'Yeh plain mechanism aur business consequence dono deta hai, aur ismein koi aisa term nahi jo sunne wala dohra na sake. Baaki sahi hain, lekin us room mein kisi kaam ke nahi.',
  'The AI forgets you completely after every reply. The app creates the illusion of memory by re-sending the whole conversation each time, and you pay for that re-reading every time':
    'AI har reply ke baad aapko poori tarah bhool jaata hai. App memory ka bhram har baar poori conversation dobara bhejkar banata hai, aur us dobara padhne ka paisa aap har baar dete hain',
  'What is the purpose of the explain-it-upward exercise?':
    'Explain-it-upward exercise ka purpose kya hai?',
  'The test is whether someone else can repeat it. That’s a much higher bar than “they understood,” and it’s what actually moves decisions in rooms you’re not in.':
    'Test yeh hai ki kya koi aur ise dohra sakta hai. Yeh “unhe samajh aa gaya” se kaafi oonchi bar hai, aur yahi woh cheez hai jo un rooms mein decisions chalati hai jahan aap nahi hote.',
  'To produce something a senior person can repeat accurately when you’re not there':
    'Aisi cheez banana jise koi senior insaan aapke bina bhi sahi-sahi dohra sake',
  'In four sentences a non-technical director could repeat, explain how a document assistant can retrieve the right page and still quote the wrong number.':
    'Aise chaar sentences mein jo ek non-technical director dohra sake, samjhaiye ki ek document assistant sahi page retrieve karke bhi galat number kaise quote kar sakta hai.',
  'Something like: “The system finds the right page reliably. But when we turn a page into text for the computer to read, tables lose their shape. The numbers survive, but which row and column each belongs to does not. The assistant then reads a flat list of numbers and confidently picks the wrong one, and it sounds just as certain as when it’s right. So for anything involving a table, we require the system to quote the row and column heading it used, which lets a person check it in seconds.” Strong answers avoid every technical term and end on the control, not the problem.':
    'Kuch aisa: “System sahi page bharosemand tarah se dhoondh leta hai. Lekin jab hum ek page ko computer ke padhne ke liye text mein badalte hain, toh tables apni shape kho dete hain. Numbers bache rehte hain, lekin har number kis row aur column ka hai, yeh nahi bachta. Assistant phir numbers ki ek flat list padhta hai aur confidence ke saath galat wala chun leta hai, aur woh utna hi pakka lagta hai jitna sahi hone par lagta. Isliye jahan bhi table ki baat ho, hum system se kehte hain ki jo row aur column heading usne use ki woh quote kare, jisse koi insaan seconds mein check kar sake.” Strong jawaab har technical term se bachte hain aur control par khatam hote hain, problem par nahi.',
  'Users report that the assistant answers a different question than the one they asked, but only on follow-ups like “and for contractors?” Which component is at fault?':
    'Users report karte hain ki assistant unke poochhe sawaal se alag sawaal ka jawaab deta hai, lekin sirf “aur contractors ke liye?” jaise follow-ups par. Kaun sa component zimmedaar hai?',
  'A fragment from a conversation has no meaning on its own map. For a conversational product, query rewriting isn’t optional.':
    'Conversation ka ek fragment apne aap mein koi meaning nahi rakhta. Conversational product ke liye query rewriting optional nahi hai.',
  'Query rewriting: the fragment is embedded without being turned into a standalone question':
    'Query rewriting: fragment ko standalone sawaal banaye bina embed kar diya jaata hai',
  'No amount of retrieval quality will notice a repeal. It looks like a model problem, but it’s an ingestion and metadata problem.':
    'Retrieval quality chahe kitni bhi ho, woh repeal ko nahi pakad paayegi. Yeh model ki problem dikhti hai, lekin yeh ingestion aur metadata ki problem hai.',
  'Corpus metadata and filtering, because the superseded version is still indexed':
    'Corpus metadata aur filtering, kyunki superseded version abhi bhi indexed hai',
  'Answers are correct, but they cite chunks that don’t contain the claim. What is the most likely cause?':
    'Answers sahi hain, lekin woh aise chunks cite karte hain jinme claim hai hi nahi. Sabse mumkin wajah kya hai?',
  'Lower k and check again. Blended context invites the model to stitch together an answer from several sources, and a programmatic check that the quote appears word for word catches this for free on every release.':
    'k kam kijiye aur dobara check kijiye. Blended context model ko kai sources se jod-tod kar jawaab banane ka bulaava deta hai, aur ek programmatic check ki quote word for word maujood hai, har release par muft mein ise pakad leta hai.',
  'k is too high or chunks are too small, so the mixed context invites blending across sources':
    'k bahut zyada hai ya chunks bahut chhote hain, isliye mixed context sources ke beech blending ko bulaava deta hai',
  'A stakeholder wants better answer quality and gives you one quarter. Put these in order of typical impact for the effort, highest first.':
    'Ek stakeholder behtar answer quality chahta hai aur aapko ek quarter deta hai. Inhein effort ke hisaab se typical impact ke order mein rakhiye, sabse zyada pehle.',
  'Measure first. Without ground truth and a failure taxonomy, you can’t tell which of the others to do. Metadata clean-up is usually the biggest win that nobody has costed. Reranking is a strong, limited improvement. Switching to a reasoning model is the most expensive and the least likely to fix an evidence problem.':
    'Pehle measure kijiye. Ground truth aur failure taxonomy ke bina aap nahi bata sakte ki baaki mein se kya karna hai. Metadata clean-up aksar sabse bada win hota hai jiska kisi ne cost nahi nikala. Reranking ek strong, limited improvement hai. Reasoning model par jaana sabse mehnga hai aur evidence problem ko fix karne ki sabse kam umeed rakhta hai.',
  'Your RAG assistant scores well offline, but support escalations haven’t fallen. Give your diagnostic sequence.':
    'Aapka RAG assistant offline achha score karta hai, lekin support escalations kam nahi hue. Apna diagnostic sequence batayiye.',
  'One: compare the eval set with real traffic. Most likely they differ, because offline measures the key and online measures what users get. Two: sample 20 to 30 real escalated queries and run error analysis, noting the failures in your own words before you sort them into categories. Three: work out whether the failures are retrieval (wrong evidence), generation (right evidence, wrong answer) or fit (the system answers correctly, but the user needed something else, a task the product doesn’t do). Four: measure how it behaves on unanswerable questions, since escalations often come from confident wrong answers rather than refusals. A strong answer starts by questioning the eval set, not the model.':
    'Ek: eval set ko asli traffic se compare kijiye. Zyada mumkin hai woh alag hon, kyunki offline key ko measure karta hai aur online yeh ki users ko kya milta hai. Do: 20 se 30 asli escalated queries sample kijiye aur error analysis chalaiye, failures ko categories mein daalne se pehle apne words mein note karke. Teen: dekhiye ki failures retrieval (galat evidence), generation (sahi evidence, galat jawaab) hain ya fit (system sahi jawaab deta hai, lekin user ko kuch aur chahiye tha, aisa task jo product karta hi nahi). Chaar: measure kijiye ki unanswerable sawaalon par woh kaise behave karta hai, kyunki escalations aksar refusals se nahi, confident galat jawaabon se aate hain. Ek strong jawaab eval set par sawaal uthane se shuru hota hai, model par nahi.',
  'Your envelope is 24,000 tokens against a 200,000-token window. A colleague says there is “plenty of headroom.” What is the flaw?':
    'Aapka envelope 200,000-token window ke saamne 24,000 tokens ka hai. Ek colleague kehta hai “bahut headroom hai.” Isme galti kya hai?',
  'Having room isn’t the same as paying attention. Measured accuracy drops well before the ceiling. So “we’re only at 12% of the window” proves just one thing: the request won’t error.':
    'Jagah hona aur dhyaan dena ek cheez nahi hai. Measured accuracy ceiling se kaafi pehle girti hai. Isliye “hum window ka sirf 12% use kar rahe hain” sirf ek cheez saabit karta hai: request error nahi degi.',
  'Headroom in the window says nothing about whether the model actually uses what is already in there':
    'Window mein headroom yeh nahi batata ki model andar pehle se rakhi cheez ko asal mein use karta hai ya nahi',
  'A support bot must recall a customer’s earlier tickets. Where does that recall actually live?':
    'Ek support bot ko customer ke pichhle tickets yaad rakhne hain. Woh recall asal mein kahan rehta hai?',
  'Every memory feature has the same three parts: a store, a rule for picking, and a budget. You design all three, you own them, and you pay for them.':
    'Har memory feature ke teen hisse hote hain: ek store, chunne ka ek rule, aur ek budget. Teeno aap design karte hain, aapke hote hain, aur paisa aap dete hain.',
  'In the model’s weights':
    'Model ke weights mein',
  'In a store you own, with the right parts picked into the envelope for each request, within a token budget':
    'Aapke apne store mein, jahan se har request ke liye sahi hisse envelope mein chune jaate hain, ek token budget ke andar',
  'In the provider’s conversation cache':
    'Provider ke conversation cache mein',
  'As an assistant’s “memory” feature gets more useful, which cost grows fastest?':
    'Jaise-jaise assistant ka “memory” feature zyada useful hota hai, kaun si cost sabse tez badhti hai?',
  'Storage is cheap and paid once. Re-sending is paid on every query, for as long as the feature runs, and it grows with both use and usefulness.':
    'Storage sasta hai aur ek baar ka kharcha hai. Re-sending har query par lagta hai, jab tak feature chalta hai, aur woh use aur usefulness dono ke saath badhta hai.',
  'Storing the history':
    'History store karna',
  'Re-sending the chosen history on every single query':
    'Chuni hui history ko har ek query par dobara bhejna',
  'Your team edits the system prompt every week to tune the tone. What hidden cost are they running up?':
    'Aapki team tone tune karne ke liye har hafte system prompt edit karti hai. Woh kaun si chhupi cost chala rahi hai?',
  'With caching, the system prompt is the stable prefix. So a casual edit wipes the caches. It also changes behaviour quietly, and nothing is regression-testing that.':
    'Caching ke saath, system prompt hi stable prefix hota hai. Isliye ek aam edit caches ko saaf kar deta hai. Yeh behaviour ko chupchaap badal bhi deta hai, aur koi regression-test nahi kar raha hota.',
  'Every prompt cache after the edited prefix is invalidated on each edit':
    'Har edit par edit kiye gaye prefix ke baad ka har prompt cache invalidate ho jaata hai',
  'Where in the retrieval sequence does filtering happen?':
    'Retrieval sequence mein filtering kahan hoti hai?',
  'Throwing out out-of-scope candidates before scoring helps more than any clever ranking technique. And it’s ordinary database work.':
    'Out-of-scope candidates ko scoring se pehle hata dena kisi bhi clever ranking technique se zyada madad karta hai. Aur yeh aam database ka kaam hai.',
  'Only when the answer is generated':
    'Sirf jab answer generate hota hai',
  'What is the strongest reason to define metadata before you embed a corpus, not after?':
    'Corpus embed karne se pehle metadata define karne ki sabse mazboot wajah kya hai, baad mein nahi?',
  'You can’t add metadata cheaply later. Skipping it at ingestion is a decision to pay for a full re-index down the line, usually at the worst possible moment.':
    'Metadata baad mein sasti mein nahi jod sakte. Ingestion par ise chhod dena matlab aage chalkar poora re-index karwane ka faisla, aur aksar sabse bure waqt par.',
  'Adding metadata later means re-indexing everything, which gets expensive once the corpus is large':
    'Baad mein metadata jodne ka matlab sab kuch dobara index karna, jo corpus bada hone par mehnga ho jaata hai',
  'Why does the method tell you to write sentences before you assign categories?':
    'Method categories assign karne se pehle sentences likhne ko kyun kehta hai?',
  'If you sort as you read, you can only find the kinds of failure you already believed in. The clusters that surprise you are the valuable ones.':
    'Agar aap padhte-padhte sort karte hain, toh aap sirf wahi failures dhoondh paayenge jinpar aap pehle se yakeen rakhte the. Jo clusters aapko hairaan karte hain, wahi keemti hote hain.',
  'Categories chosen too early squeeze new failures into old buckets and hide the pattern you haven’t named yet':
    'Bahut jaldi chuni gayi categories nayi failures ko purani buckets mein thoons deti hain aur woh pattern chhupa deti hain jiska aapne abhi naam nahi rakha',
  'One change at a time is what gives the next measurement any meaning. Batch five fixes together, and all you learn is that something helped.':
    'Ek samay mein ek badlaav hi agle measurement ko koi matlab deta hai. Paanch fixes ek saath daaliye, aur aap bas itna seekhte hain ki kuch kaam kiya.',
  'Rank by frequency × severity, and fix one at a time so the next measurement can be traced to the fix':
    'Frequency × severity se rank kijiye, aur ek-ek karke fix kijiye taaki agla measurement us fix se joda ja sake',
  'It rewards being right and also being suitably confident. Being confidently wrong is penalised the most, which is exactly the failure this whole system is built to bring to the surface.':
    'Yeh sahi hone ko reward karta hai, aur sahi tarah se confident hone ko bhi. Confidently galat hona sabse zyada penalise hota hai, aur yahi woh failure hai jise saamne laane ke liye yeh poora system bana hai.',
  'You are consistently correct, but you always mark “leaning” instead of “fairly sure.” What does this cost you?':
    'Aap lagatar sahi hain, lekin hamesha “fairly sure” ki jagah “leaning” mark karte hain. Isse aapko kya nuksaan hota hai?',
  'Being underconfident is a calibration error like any other. The cost at work is that you end up deferring to more confident people who have less evidence.':
    'Underconfident hona bhi kisi aur ki tarah ek calibration error hai. Kaam par isse yeh cost hoti hai ki aap un zyada confident logon ke aage jhuk jaate hain jinke paas kam evidence hota hai.',
  'Nothing, because caution is free':
    'Kuch nahi, kyunki savdhani muft hai',
  'It’s a real miscalibration: you under-claim knowledge you have, which matters in rooms where you’re the only one who measured anything':
    'Yeh ek asli miscalibration hai: aap jo knowledge rakhte hain use kam batate hain, jo un rooms mein matter karta hai jahan sirf aapne kuch measure kiya hai',
  'Which of these is a control, not a filter?':
    'Inmein se kaun sa ek control hai, filter nahi?',
  'Human confirmation holds no matter what the model decided. The other three ask the model to behave, which makes them filters with a leak rate.':
    'Human confirmation tab bhi tikta hai chahe model ne kuch bhi tay kiya ho. Baaki teen model se behave karne ko kehte hain, jo unhe leak rate wale filters bana deta hai.',
  'A system prompt telling the model not to follow instructions in the context':
    'Ek system prompt jo model ko context ke instructions follow na karne ko kehta hai',
  'Requiring a human to confirm the exact recipient before any outgoing send':
    'Kuch bhi outgoing bhejne se pehle exact recipient kisi insaan se confirm karwana',
  'Telling the model to flag suspicious content':
    'Model ko suspicious content flag karne ko kehna',
  'You are reporting a defence to your risk register. Which wording is honest?':
    'Aap ek defence ko apne risk register mein report kar rahe hain. Kaun sa wording imaandaar hai?',
  'Name the measurement, the kind of attack it was measured against, and the structural control that carries the leftover risk. Anything else claims too much.':
    'Measurement ka naam leejiye, us attack ka type jiske khilaaf woh measure hua, aur woh structural control jo bacha hua risk sambhalta hai. Isse alag kuch bhi zyada daava karta hai.',
  '“Prompt injection is mitigated”':
    '“Prompt injection mitigated hai”',
  '“Capture rate reduced from 8/10 to 2/10 against non-adaptive attacks; residual risk contained by an outbound allowlist”':
    '“Capture rate non-adaptive attacks ke khilaaf 8/10 se 2/10 hua; bacha hua risk ek outbound allowlist se contain hai”',
  '“The vendor confirms the system is secure”':
    '“Vendor confirm karta hai ki system secure hai”',
  '“No injections observed in testing”':
    '“Testing mein koi injection nahi dikha”',
  'What is the least a reviewer must see for the review to mean anything?':
    'Review kuch matlab rakhe, iske liye reviewer ko kam se kam kya dikhna chahiye?',
  'Reviewing an answer without its evidence is just reviewing how fluent it sounds. The reviewer needs to see what the answer was supposedly based on.':
    'Evidence ke bina answer review karna bas yeh dekhna hai ki woh kitna fluent lagta hai. Reviewer ko dekhna chahiye ki answer kis par based hona tha.',
  'The answer, plus the retrieved evidence and the supporting quote':
    'Answer, saath mein retrieved evidence aur supporting quote',
  'There are 4,000 outputs a day and you have one reviewer. What is the workable design?':
    'Roz 4,000 outputs hain aur aapke paas ek reviewer hai. Kaam karne wala design kya hai?',
  'Structured output plus programmatic checks turn “review everything” into “review the few percent that failed a check.” One person can really do that, with the authority and the time.':
    'Structured output aur programmatic checks “sab kuch review karo” ko “woh kuch percent review karo jo check mein fail hue” bana dete hain. Ek insaan ise sach mein kar sakta hai, authority aur waqt ke saath.',
  'Send only the outputs that fail a programmatic check to review, and sample the rest':
    'Sirf programmatic check mein fail hone wale outputs ko review ke liye bhejiye, aur baaki ko sample kijiye',
  'Why is it worth recording data lineage at ingestion, not later?':
    'Data lineage ko baad mein nahi, ingestion par record karna kyun zaroori hai?',
  'Provenance is cheap to record and often impossible to recover later. The same goes for the permission under which you hold the data.':
    'Provenance record karna sasta hai aur baad mein recover karna aksar namumkin. Jis haq ke tahat aap data rakhte hain, uske baare mein bhi yahi sach hai.',
  'Because after ingestion you often can’t work out where a document came from, or on what right you hold it':
    'Kyunki ingestion ke baad aksar yeh pata lagana mushkil hota hai ki document kahan se aaya, ya aap use kis haq se rakhte hain',
  'Your prompt cache holds fragments of a document that a customer asked you to delete. What is the honest position?':
    'Aapke prompt cache mein ek aise document ke fragments hain jise ek customer ne delete karne ko kaha tha. Imaandaar position kya hai?',
  'A cache is a copy. Either you can invalidate it, or you can state a firm expiry, or you have a gap to report. “It expires eventually” isn’t a retention policy.':
    'Cache ek copy hai. Ya toh aap use invalidate kar sakte hain, ya ek pakka expiry bata sakte hain, ya aapke paas report karne layak gap hai. “Woh kabhi toh expire ho jaayega” retention policy nahi hai.',
  'It’s a store holding their data. You need a documented expiry or a way to invalidate it, and if you have neither, that’s a finding':
    'Yeh ek store hai jisme unka data hai. Aapko ek documented expiry ya invalidate karne ka raasta chahiye, aur agar dono nahi hain, toh woh ek finding hai',
  'Caches are the provider’s responsibility':
    'Caches provider ki zimmedaari hain',
  'The source file is the easy part. Deletion drills fail on the derived copies: vectors, third-party logs and eval sets. The eval set is the one nobody remembers.':
    'Source file aasaan hissa hai. Deletion drills derived copies par fail hoti hain: vectors, third-party logs aur eval sets. Eval set woh hai jo koi yaad nahi rakhta.',
  'Fragments sit in provider-side request logs that you don’t control':
    'Fragments provider-side request logs mein hain jin par aapka control nahi',
  'A director could repeat three of these tomorrow. The other is a sentence only its author can defend, which makes it useless in the rooms that matter.':
    'In mein se teen ko ek director kal dohra sakta hai. Baaki ek aisa sentence hai jise sirf likhne wala bacha sakta hai, jo use un rooms mein bekaar bana deta hai jo matter karte hain.',
  '“The system looks up the relevant pages before answering, so it quotes your documents instead of inventing”':
    '“System jawaab dene se pehle relevant pages dhoondhta hai, isliye woh invent karne ki jagah aapke documents ko quote karta hai”',
  '“We use semantic retrieval over a chunked corpus with reranking”':
    '“Hum ek chunked corpus par reranking ke saath semantic retrieval use karte hain”',
  '“It can find the right page and still read the wrong number out of a table”':
    '“Woh sahi page dhoondh sakta hai aur phir bhi table se galat number padh sakta hai”',
  '“Every answer should come with the sentence it was based on, so you can check it in seconds”':
    '“Har answer ke saath woh sentence aana chahiye jis par woh based tha, taaki aap seconds mein check kar sakein”',
  'A director asks, “Can we trust it?” What is the strongest short reply?':
    'Ek director poochhta hai, “Kya hum ispar bharosa kar sakte hain?” Sabse strong chhota reply kya hai?',
  'It names the real edge of the claim and invites the follow-up, “What did you measure?” Of the four, it’s the only one you can defend when challenged.':
    'Yeh claim ki asli edge batata hai aur agle sawaal ko bulaava deta hai, “Aapne kya measure kiya?” Chaaron mein se yahi ek hai jise challenge hone par aap bacha sakte hain.',
  '“Yes, it is highly accurate”':
    '“Haan, yeh bahut accurate hai”',
  '“Trust it where we measured it”':
    '“Jahan humne measure kiya hai wahan par bharosa kijiye”',
  '“No, it hallucinates”':
    '“Nahi, yeh hallucinate karta hai”',
  '“It depends on the model”':
    '“Yeh model par depend karta hai”',
});
