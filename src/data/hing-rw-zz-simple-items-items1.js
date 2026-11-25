/* Hinglish for items1 (items:items1), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A 300-word English answer is about how many tokens? (A token is a small piece of a word, like one Lego brick of text.)':
    '300 shabd ke English jawaab mein lagbhag kitne tokens hote hain? (Token shabd ka ek chhota tukda hai, jaise text ki ek Lego eent.)',
  'Use this rule: 1 token is about ¾ of an English word. So multiply the words by 1.33. That makes 300 words about 400 tokens. Watch the trap answer, 225. You get it when you divide instead of multiply.':
    'Yeh rule yaad rakhiye: 1 token lagbhag English word ka ¾ hota hai. Isliye words ko 1.33 se multiply kijiye. Is tarah 300 words lagbhag 400 tokens hue. Trap wale jawaab 225 se bachiye. Woh tab aata hai jab aap multiply ki jagah divide kar dete hain.',
  'About 150':
    'Lagbhag 150',
  'About 225':
    'Lagbhag 225',
  'About 400':
    'Lagbhag 400',
  'Exactly 300':
    'Theek 300',
  'A RAG query (an open-book exam: find the right page, then answer from it) sends 1,800 input tokens and gets 240 output tokens. Input costs ₹0.20 per million tokens. Output costs ₹0.60 per million. These prices are made up. Look up today’s price before you use a number at work. What does one query cost, in paise (1 rupee = 100 paise)?':
    'Ek RAG query (open-book exam: pehle sahi page dhundhiye, phir usi se jawaab dijiye) 1,800 input tokens bhejti hai aur 240 output tokens wapas paati hai. Input ka rate ₹0.20 per million tokens hai. Output ka rate ₹0.60 per million hai. Yeh prices banaye hue hain. Kaam mein koi number use karne se pehle aaj ki price dekh lijiye. Ek query ki cost paise mein kitni hai (1 rupee = 100 paise)?',
  'Work out the input part and the output part separately. Then add them: (1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504. That is about 0.05 paise. The real lesson: one query looks tiny. But multiply it by the number of queries and by the four multipliers, and it grows.':
    'Input ka hissa aur output ka hissa alag-alag nikaliye. Phir jod dijiye: (1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504. Yeh lagbhag 0.05 paise hai. Asli seekh: ek query chhoti dikhti hai. Lekin ise queries ki ginti se aur chaar multipliers se guna kijiye, to yeh bada ho jaata hai.',
  'A business case says each query costs ₹0.30. They worked it out as input tokens × rate + output tokens × rate. Which of these would push the real bill above ₹0.30?':
    'Ek business case kehta hai ki har query ki cost ₹0.30 hai. Unhone ise input tokens × rate + output tokens × rate se nikala. Inmein se kaunsi cheez asli bill ko ₹0.30 se upar le jaayegi?',
  'Four things multiply the simple sum: k (how many chunks you fetch), retries, agent steps and reasoning tokens. They stack on top of each other. Caching is the odd one out, because it brings the cost down.':
    'Chaar cheezein simple jod ko badha deti hain: k (kitne chunks laate hain), retries, agent steps aur reasoning tokens. Yeh ek ke upar ek jud jaati hain. Caching alag hai, kyunki woh cost ghatati hai.',
  'Raising k from 3 to 8':
    'k ko 3 se 8 karna',
  'A 12% schema-validation retry rate':
    '12% schema-validation retry rate',
  'A 4-step agent loop':
    '4-step agent loop',
  'Reasoning enabled by default':
    'Reasoning by default on',
  'Prompt caching with a stable prefix':
    'Sthir prefix ke saath prompt caching',
  'Which token count can a product manager control most directly when designing a feature?':
    'Feature design karte waqt product manager kis token count ko sabse seedhe control kar sakta hai?',
  'You decide what goes into the envelope (all the text sent in one request): the history, the retrieved chunks and the instructions. So the prompt side is yours to design. You can only nudge the output length. The window size and parameter count come with the model.':
    'Envelope (ek request mein bheja gaya poora text) mein kya jaayega, yeh aap tay karte hain: history, laaye gaye chunks aur instructions. Isliye prompt wala hissa aapke haath mein hai. Output ki lambai ko aap sirf thoda dhakel sakte hain. Window ka size aur parameter count model ke saath aate hain.',
  'The model’s parameter count':
    'Model ka parameter count',
  'The context window size':
    'Context window ka size',
  'Your feature costs ₹3.10 per query at full load. Each query saves a support ticket worth ₹2.00. Traffic grows 20% a month. What is the right conclusion?':
    'Aapke feature ki cost full load par ₹3.10 per query hai. Har query ek support ticket bachati hai jiski keemat ₹2.00 hai. Traffic har mahine 20% badh raha hai. Sahi nateeja kya hai?',
  'If each query loses money, more queries mean a bigger loss. The loss grows in a straight line with volume. You may try to optimise. But from these numbers, growth is a liability (a burden) until the cost drops below the value.':
    'Agar har query paise ganwati hai, to zyada queries ka matlab bada nuksaan. Nuksaan volume ke saath seedhi line mein badhta hai. Aap optimise karne ki koshish kar sakte hain. Lekin in numbers se yeh dikhta hai ki growth ek bojh hai, jab tak cost value se neeche na aa jaaye.',
  'Ship it, because scale will improve the economics':
    'Ship kar do, kyunki scale se economics behtar ho jaayegi',
  'The unit economics are negative, and growth makes it worse, not better':
    'Unit economics negative hain, aur growth se halat sudharne ki jagah bigadti hai',
  'Optimise prompts and re-measure before deciding':
    'Faisle se pehle prompts optimise karke dobara naapiye',
  'Move to a cheaper model and ship':
    'Saste model par jaakar ship kar dijiye',
  'What is the best description of the context window (the model’s desk)?':
    'Context window (model ki mez) ka sabse sahi vivaran kaunsa hai?',
  'Think of it as the size of the envelope for one request. Everything that goes in and everything that comes out must fit. It is not memory. It has nothing to do with storage.':
    'Ise ek request ke envelope ka size samjhiye. Jo andar jaata hai aur jo bahar aata hai, sab usmein fit hona chahiye. Yeh memory nahin hai. Iska storage se koi lena-dena nahin.',
  'The model’s memory of your conversation':
    'Aapki conversation ki model ko yaad',
  'The maximum size of one request plus its response':
    'Ek request plus uske response ka maximum size',
  'How much training data the model saw':
    'Model ne kitna training data dekha',
  'The number of documents you can store':
    'Aap kitne documents store kar sakte hain',
  'A vendor says a two-million-token context makes your retrieval layer (the part that finds the right pages) unnecessary. What is the strongest single reply?':
    'Ek vendor kehta hai ki do-million-token context se aapki retrieval layer (jo sahi pages dhundti hai) ki zaroorat nahin rahi. Sabse majboot ek jawaab kaunsa hai?',
  'There are two separate objections. First, accuracy is measured to drop as context grows. People call this context rot. Second, you pay for the full envelope on every single query. Neither is an opinion. The last option claims too much. For some questions that span many sections, putting everything in really does win.':
    'Yahan do alag aapattiyan hain. Pehli: context badhne par accuracy ghatti hai, aur yeh naapi gayi hai. Ise log context rot kehte hain. Doosri: har query par aap poore envelope ka paisa dete hain. Dono raay nahin, tathya hain. Aakhri option zyada bada daava karta hai. Kuch sawaal kai sections mein phaile hote hain, un par sab kuch andar daalna sach mein jeet jaata hai.',
  'Large contexts are slower':
    'Bade contexts dheeme hote hain',
  'Accuracy drops as the context gets longer, and you pay for the full envelope on every query, forever':
    'Context lamba hone par accuracy girti hai, aur har query par aap poore envelope ka paisa dete hain, hamesha',
  'Two million tokens will not fit our corpus':
    'Bees laakh tokens mein hamara corpus aayega hi nahi',
  'Retrieval is more accurate than long context in all cases':
    'Retrieval har haal mein long context se zyada sahi hai',
  'Put these in order. Start with the spot where a model finds a fact most reliably in a long context.':
    'Inhein kram mein lagaiye. Us jagah se shuru kijiye jahan model lambe context mein kisi fact ko sabse bharosemand tareeke se dhundta hai.',
  'Facts at the edges are found far more reliably than facts in the middle. The start and the end stay clear, and the middle sags. This is called the “lost in the middle” pattern. It gets worse as the total length grows.':
    'Kinaron ke facts beech ke facts se kahin zyada bharosemand tareeke se milte hain. Shuru aur ant saaf rehte hain, beech dhheela pad jaata hai. Ise “lost in the middle” pattern kehte hain. Kul lambai badhne par yeh aur bigadta hai.',
  'At 5% depth (near the start)':
    '5% gehraai par (shuruaat ke paas)',
  'At 95% depth (near the end)':
    '95% gehraai par (ant ke paas)',
  'At 50% depth (the middle)':
    '50% gehraai par (beech mein)',
  'Your feature’s envelope is 24,000 tokens. It holds 1,200 for the system prompt, 3,400 for tool schemas, 14,000 for retrieved chunks, 4,800 for conversation history and 600 for the answer. Costs are too high. What do you cut first, and what breaks?':
    'Aapke feature ka envelope 24,000 tokens ka hai. Usmein 1,200 system prompt ke liye, 3,400 tool schemas ke liye, 14,000 laaye gaye chunks ke liye, 4,800 conversation history ke liye aur 600 jawaab ke liye hain. Cost bahut zyada hai. Pehle kya kaatenge, aur kya toot jaayega?',
  'Retrieved chunks are the biggest line, and the easiest to squeeze. Cut k. Or add reranking, so a smaller k carries better chunks (Ch 12 shows how to cut volume and raise precision). What breaks is recall on questions that span several sections. So measure again against your ground truth after the cut. Cutting history comes next, but it breaks follow-up questions. Cutting tool schemas removes a capability. A strong answer names the cut, the metric it puts at risk, and the new measurement.':
    'Laaye gaye chunks sabse badi line hain, aur inhein dabana sabse aasaan hai. k ghataiye. Ya reranking jodiye, taaki chhota k behtar chunks laaye (Ch 12 dikhata hai ki volume kaise ghatayen aur precision kaise badhayen). Jo toot-ta hai woh hai un sawaalon par recall jo kai sections mein phaile hain. Isliye cut ke baad ground truth se dobara naapiye. History kaatna agla kadam hai, lekin isse follow-up sawaal toot-te hain. Tool schemas kaatne se ek capability hat jaati hai. Ek majboot jawaab cut ka naam leta hai, us metric ka jo khatre mein hai, aur nayi naap ka.',
  'Between two separate API requests, what does the model remember about you?':
    'Do alag API requests ke beech model aapke baare mein kya yaad rakhta hai?',
  'Nothing. The model is like a goldfish: it starts fresh every time. When a chat seems to remember you, the application sends the history again inside a bigger envelope.':
    'Kuch nahin. Model goldfish jaisa hai: har baar naye sire se shuru karta hai. Jab chat aapko yaad rakhti lagti hai, tab application history ko ek bade envelope mein dobara bhejti hai.',
  'Your conversation history':
    'Aapki conversation history',
  'A summary of prior turns':
    'Pichhle turns ka summary',
  'Your preferences only':
    'Sirf aapki preferences',
  'Why does the 50th message in a chat cost far more than the 2nd?':
    'Chat ka 50va message 2re message se itna mehnga kyon padta hai?',
  'Message 50 has to pay to re-read messages 1 to 49. So the cost follows the length of the whole conversation so far. It does not follow the number of messages.':
    'Message 50 ko message 1 se 49 dobara padhne ka paisa dena padta hai. Isliye cost ab tak ki poori baatcheet ki lambai ke saath badhti hai. Messages ki ginti ke saath nahin.',
  'Later messages are longer':
    'Baad ke messages lambe hote hain',
  'Each new message re-sends the earlier ones, unless the app trims or summarises them.':
    'Har naya message pichhle messages ko dobara bhejta hai, jab tak app unhe trim ya summarise na kar de.',
  'The model works harder as context builds':
    'Context badhne par model zyada mehnat karta hai',
  'Rate limits raise the price':
    'Rate limits daam badha dete hain',
  'A vendor says, “Our assistant remembers each user’s full history.” Which questions really test that claim?':
    'Ek vendor kehta hai, “Hamara assistant har user ki poori history yaad rakhta hai.” Kaun se sawaal is daave ko sach mein parakhte hain?',
  'Memory is three things: a store, a rule for picking what to send, and a context budget. These give three real questions, about privacy, cost and architecture (how it is built). The parameter count has nothing to do with it.':
    'Memory teen cheezein hain: ek store, kya bhejna hai chunne ka rule, aur ek context budget. Inse teen asli sawaal nikalte hain: privacy, cost aur architecture (kaise bana hai). Parameter count ka isse koi lena-dena nahin.',
  'Where is that history stored, and who controls it?':
    'Woh history kahan store hoti hai, aur uspar control kiska hai?',
  'What does re-sending it cost per query at scale?':
    'Scale par use dobara bhejne ki per query cost kya hai?',
  'How is it chosen for the envelope when it is bigger than the budget?':
    'Jab history budget se badi ho, toh envelope ke liye use kaise chuna jaata hai?',
  'How many parameters does the model have?':
    'Model mein kitne parameters hain?',
  'A vendor says, “We customized the AI for your organization.” What does that most often mean in practice?':
    'Ek vendor kehta hai, “Humne AI ko aapke organization ke liye customize kiya hai.” Practice mein iska matlab aksar kya hota hai?',
  'Most of the time they wrote a good briefing page (a system prompt) for the model. No weights changed. It is the same letter with a cover note added.':
    'Zyadatar waqt unhone model ke liye ek achha briefing page (system prompt) likha hota hai. Koi weights nahin badle. Yeh wahi chitthi hai, bas upar ek cover note laga diya gaya hai.',
  'The model was retrained on your data':
    'Model ko aapke data par dobara train kiya gaya',
  'A system prompt was written':
    'Ek system prompt likha gaya',
  'A new model was built':
    'Ek naya model banaya gaya',
  'Your documents were embedded in the weights':
    'Aapke documents weights mein embed kar diye gaye',
  'How should you manage a system prompt (the standing instructions on the shop wall)? Which of these is it most like?':
    'System prompt (deewar par lage niyam) ko kaise sambhalna chahiye? Inmein se yeh sabse zyada kiske jaisa hai?',
  'The system prompt is the product’s behaviour. So it needs an owner, a version and a test. Changing it also invalidates the prompt caches downstream (they must be filled again).':
    'System prompt product ka vyavhaar hai. Isliye ise ek malik, ek version aur ek test chahiye. Ise badalne se aage ke prompt caches bhi bekaar ho jaate hain (unhein dobara bharna padta hai).',
  'A UI copy string':
    'Ek UI copy string',
  'An SOP or policy document, with versions, tests and an owner':
    'Ek SOP ya policy document ki tarah, versions, tests aur owner ke saath',
  'A configuration constant':
    'Ek configuration constant',
  'A code comment':
    'Ek code comment',
  'For which of these is temperature 0 (the model plays safe) the right default?':
    'In mein se kiske liye temperature 0 (model safe khelta hai) sahi default hai?',
  'Compliance questions and fact lookups need the same answer every time. Variety only helps when variety is the product.':
    'Compliance ke sawaal aur fact lookups ko har baar ek hi jawaab chahiye. Vividhta tabhi kaam aati hai jab vividhta hi product ho.',
  'Generating campaign taglines':
    'Campaign taglines banana',
  'Answering a policy eligibility question':
    'Policy eligibility ke sawaal ka jawaab dena',
  'Brainstorming feature names':
    'Feature ke naam sochna',
  'Writing varied marketing copy':
    'Alag-alag marketing copy likhna',
  'You wrote one guardrail sentence. It stopped a model from inventing a fake scheme. A colleague says the problem is “solved.” Give two independent reasons it is not.':
    'Aapne ek guardrail waala vaakya likha. Usne model ko jhooti scheme banane se roka. Ek saathi kehta hai ki samasya “solve” ho gayi. Do alag kaaran dijiye ki kyon nahin.',
  'One: it bends under pressure. A little pushing from the user brought the invention back. Two: it cannot make the model know anything. It only changes the tone around not knowing. So it cannot fix missing evidence. The real fix is verified source text and a way for the model to refuse. A strong answer also says a guardrail depends on the model, so it is not a true control.':
    'Ek: yeh dabaav mein jhuk jaata hai. User ke thode zor dene se banawati jawaab wapas aa gaya. Do: yeh model ko kuch jaanta nahin bana sakta. Yeh sirf “pata nahin” ke aas-paas ka lehja badalta hai. Isliye gayab saboot ko theek nahin kar sakta. Asli ilaaj hai verified source text aur model ke liye mana karne ka raasta. Ek majboot jawaab yeh bhi kehta hai ki guardrail model par nirbhar hai, isliye yeh sachcha control nahin hai.',
  'What is the best way to understand hallucination (confident make-believe)?':
    'Hallucination (pakke yakeen se boli gayi banawati baat) ko samajhne ka sabse achha tareeka kaunsa hai?',
  'It is not a glitch. A model that continues text picks the most plausible next words. At the edge of what it knows, “plausible” becomes a neat, well-formatted invention.':
    'Yeh koi gadbad nahin hai. Jo model text aage badhata hai, woh sabse mumkin lagne wale agle shabd chunta hai. Apni jaankari ke kinare par “mumkin” ek saaf-suthri, achhe format wali banawati cheez ban jaata hai.',
  'A rare bug that better models remove':
    'Ek rare bug jo behtar models hata dete hain',
  'The normal behaviour of a prediction machine at the edge of what it knows':
    'Prediction machine ka normal behaviour, jahan uski jaankari khatam hoti hai',
  'A sign of corrupted training data':
    'Kharaab training data ka nishaan',
  'A failure of the retrieval layer only':
    'Sirf retrieval layer ki galti',
  'You ask for an “amount” field, strictly a number. You give the model a document with no amount in it. The model returns 42000. What caused this?':
    'Aap ek “amount” field maangte hain, jo sirf number ho. Aap model ko ek document dete hain jisme koi amount nahin hai. Model 42000 lauta deta hai. Iska kaaran kya hai?',
  'Your design forced the model to invent something. A nullable field (it may be empty) or a status value like insufficient_evidence removes that pressure. So schema design (the form with fixed boxes) also controls hallucination.':
    'Aapke design ne model ko kuch gadhne par majboor kiya. Nullable field (jo khaali ho sakta hai) ya insufficient_evidence jaisi status value yeh dabaav hata deti hai. Isliye schema design (fixed khaanon wala form) bhi hallucination ko control karta hai.',
  'A weak model':
    'Kamzor model',
  'A retrieval failure':
    'Retrieval ka failure',
  'Your schema left no legal way to say “not present”':
    'Aapke schema mein “not present” kehne ka koi legal tareeka nahi tha',
  'Temperature set too high':
    'Temperature bahut zyada rakhi gayi',
  '“The AI sounded confident.” What is that evidence of?':
    '“AI bahut pakka lag raha tha.” Yeh kis cheez ka saboot hai?',
  'Fluent writing costs the model nothing. Confident, neat, well-formatted output is the only way it speaks. It looks the same whether the content is true or not.':
    'Saaf-suthra likhna model ko kuch nahin padta. Pakka, saaf, achhe format wala output hi uski bolne ki ekmatra shaili hai. Yeh waisa hi dikhta hai chahe baat sach ho ya nahin.',
  'Correctness':
    'Sahi hone ka',
  'Good retrieval':
    'Achchi retrieval ka',
  'Nothing at all':
    'Kisi bhi baat ka nahi',
  'A well-written system prompt':
    'Achche likhe system prompt ka',
  'Which of these cut down invented content by removing its cause, not by just asking the model nicely?':
    'In mein se kaun si cheezein banawati content ko uski jad hata kar kam karti hain, model se sirf vinati karke nahin?',
  'Giving evidence, giving a way to refuse, and asking for citations you can check all change how the task is built. A “never invent” instruction is only a request. It helps a little. It only discourages.':
    'Saboot dena, mana karne ka raasta dena, aur jaanchne layak citations maangna, teeno task ki banaavat badalte hain. “Kabhi mat gadho” wala instruction sirf ek request hai. Isse thodi madad milti hai. Yeh sirf hatotsahit karta hai.',
  'Supplying verified source text and telling the model to answer only from that context':
    'Verified source text dena aur model ko kehna ki sirf us context se jawaab de',
  'Adding a nullable field and an explicit refusal branch':
    'Ek nullable field aur saaf refusal branch jodna',
  'Adding “never invent details” to the system prompt':
    'System prompt mein “never invent details” jodna',
  'Requiring a word-for-word supporting quote that can be checked against the source':
    'Ek word-for-word supporting quote maangna jise source ke saamne check kiya ja sake',
  'Why can’t you put the whole corpus (all your documents) into every envelope? Pick the two independent reasons.':
    'Poora corpus (aapke saare documents) har envelope mein kyon nahin daal sakte? Do alag kaaran chuniye.',
  'It comes down to space and money. Even the part that fits gives worse answers when most of it is irrelevant.':
    'Baat jagah aur paise ki hai. Jo hissa fit bhi ho jaaye, uska zyadatar bekaar hone par jawaab kharab aate hain.',
  'It would be slow, and users dislike waiting':
    'Yeh dheema hoga, aur users ko wait pasand nahi',
  'The context window is limited, and tokens cost money on every query':
    'Context window limited hai, aur har query par tokens ke paise lagte hain',
  'The model cannot read more than 10 pages':
    'Model 10 page se zyada padh hi nahi sakta',
  'Embeddings would be inaccurate':
    'Embeddings galat ho jaayenge',
  'A chunk (an index card cut from a long book) begins, “the aforesaid amount shall be disbursed within sixty days.” What is the specific problem?':
    'Ek chunk (lambi kitaab se kaata gaya index card) is tarah shuru hota hai: “the aforesaid amount shall be disbursed within sixty days.” Khaas samasya kya hai?',
  'The chunk leans on text that now sits in a different chunk. It is hard to retrieve (find). It is hard to use even if you do retrieve it.':
    'Chunk aise text par tika hai jo ab doosre chunk mein hai. Ise retrieve karna (dhundhna) mushkil hai. Mil bhi jaaye to use karna mushkil hai.',
  'It is too short':
    'Yeh bahut chhota hai',
  'It is an orphan: it means nothing without the earlier text it refers to, and that text no longer travels with it':
    'Yeh ek orphan hai: pehle ke jis text ka zikr hai uske bina iska koi matlab nahi, aur woh text ab iske saath nahi chalta',
  'It contains a date':
    'Ismein ek date hai',
  'It will embed poorly because of legal language':
    'Legal language ki wajah se yeh achhi tarah embed nahi hoga',
  'A chunk boundary falls between a rule and its exception. What is the most dangerous result?':
    'Chunk ki seema ek rule aur uske apvaad ke beech aa jaati hai. Sabse khatarnaak nateeja kya hai?',
  'In compliance and legal work, a confident half-answer is often worse than no answer. It leads someone to a wrong action. A missing answer makes them ask for help.':
    'Compliance aur legal kaam mein pakka lagne wala aadha jawaab aksar bina jawaab se bhi bura hota hai. Woh kisi ko galat kaam ki taraf le jaata hai. Jawaab na milne par log madad maangte hain.',
  'Retrieval will be slower':
    'Retrieval dheema hoga',
  'The system can state the rule without its exception, and sound confident while being incomplete':
    'System rule bata sakta hai bina uske exception ke, aur adhoora hote hue bhi confident lagta hai',
  'The chunk will be too large':
    'Chunk bahut bada ho jaayega',
  'Embeddings will be less accurate':
    'Embeddings kam sahi honge',
  'Your corpus is service contracts with numbered clauses, exceptions and annexures (attached extra pages). Describe your chunking rule and what it gives up.':
    'Aapka corpus service contracts hai, jisme numbered clauses, apvaad aur annexures (jude hue atirikt pannay) hain. Apna chunking rule batayiye aur yeh bhi ki woh kya chhodta hai.',
  'Cut on clause boundaries, so each piece holds a complete rule with its exceptions attached. This is structure-aware chunking: it follows the document’s own layout. Semantic chunking is a separate meaning-based strategy. The pieces will be uneven in size. That is fine, because meaning does not come in equal sizes. What you give up: definitions that point across clauses (“as defined in clause 2”) still become orphans. So add a situating sentence (contextual retrieval). Very long clauses may be too big for one retrieval unit. Split them with overlap. A strong answer names the failure that remains, not just the rule.':
    'Clause ki seema par kaatiye, taaki har tukde mein poora rule apne apvaadon ke saath rahe. Yeh structure-aware chunking hai: yeh document ke apne layout ko follow karti hai. Semantic chunking is a separate meaning-based strategy hai. Tukde size mein barabar nahin honge. Koi baat nahin, kyunki matlab barabar size mein nahin aata. Aap kya chhodte hain: jo definitions doosre clauses ki taraf ishara karti hain (“as defined in clause 2”) woh ab bhi orphan ban jaati hain. Isliye ek situating sentence jodiye (contextual retrieval). Bahut lambe clauses ek retrieval unit ke liye bade ho sakte hain. Unhein overlap ke saath baantiye. Ek majboot jawaab us kami ka naam leta hai jo bachi rehti hai, sirf rule ka nahin.',
  'What is keyword search (finding a page by the exact word, like Ctrl+F) blind to?':
    'Keyword search (exact shabd se page dhundhna, jaise Ctrl+F) kis cheez ko dekh nahin paati?',
  'It matches shared letters, not shared sense. To keyword search, “reimbursement” and “disbursement of approved amounts” are strangers.':
    'Yeh milte-julte akshar pakadti hai, milta-julta matlab nahin. Keyword search ke liye “reimbursement” aur “disbursement of approved amounts” ajnabi hain.',
  'Spelling':
    'Spelling',
  'Document length':
    'Document ki lambaai',
  'Recency':
    'Kitna naya hai',
  'Which kind of query does keyword search handle better than semantic search (search by meaning)?':
    'Kis tarah ki query ko keyword search, semantic search (matlab se search) se behtar sambhalti hai?',
  'Exact strings are where keyword search never slips and embeddings often do. Examples are codes, section numbers, acronyms and policy IDs. That is the half of hybrid search that never goes away.':
    'Exact strings wahan hain jahan keyword search kabhi nahin chookti aur embeddings aksar chook jaate hain. Jaise codes, section numbers, acronyms aur policy IDs. Hybrid search ka yeh woh aadha hissa hai jo kabhi nahin jaata.',
  '“When do I get my money back?”':
    '“Mere paise wapas kab milenge?”',
  '“Clause 4.2(b)”':
    '“Clause 4.2(b)”',
  '“Can my manager approve more than the limit?”':
    '“Kya mera manager limit se zyada approve kar sakta hai?”',
  'A question asked in a second language':
    'Doosri bhaasha mein poochha gaya sawaal',
  'Why does keyword search fail worst for the users who most need self-service answers?':
    'Jin users ko self-service jawaabon ki sabse zyada zaroorat hai, unke liye keyword search sabse bura kyon chookti hai?',
  'The less you know the document’s words, the harder its answers are to find. Newcomers and customers know them least, by definition.':
    'Aap document ke shabd jitne kam jaante hain, uske jawaab dhundhna utna mushkil hai. Naye log aur customers unhein sabse kam jaante hain, yeh tay hai.',
  'Those users type more slowly':
    'Woh users dheere type karte hain',
  'The gap between the document’s words and the user’s words is widest for newcomers':
    'Document ke words aur user ke words ke beech ka gap newcomers ke liye sabse bada hota hai',
  'Their questions are longer':
    'Unke sawaal lambe hote hain',
  'They use mobile devices':
    'Woh mobile istemaal karte hain',
  'You are designing search for a customer help centre and for an internal legal research tool. Which statements are sound?':
    'Aap ek customer help centre aur ek internal legal research tool ke liye search design kar rahe hain. Kaun se kathan sahi hain?',
  'The mix of queries decides the design. Force one setup onto two different kinds of queries, and it ends up good for neither.':
    'Queries ka mel design tay karta hai. Do alag tarah ki queries par ek hi setup thopenge, to woh dono ke liye achha nahin rahega.',
  'The help centre uses plain language and many synonyms, which favours semantic retrieval':
    'Help centre mein plain language aur bahut saare synonyms hote hain, jo semantic retrieval ko favour karta hai',
  'The legal tool gets more exact-string queries, like citations and section numbers, which favours a strong keyword side':
    'Legal tool ko zyada exact-string queries milti hain, jaise citations aur section numbers, jo ek strong keyword side ko favour karta hai',
  'Both should run hybrid, but the fusion weighting need not be the same':
    'Dono ko hybrid chalana chahiye, lekin fusion weighting ek jaisi hona zaroori nahi',
  'One configuration should serve both, for consistency':
    'Ek hi configuration dono ko chalani chahiye, ek-jaisaapan ke liye',
  'What is an embedding (an address for meaning)?':
    'Embedding kya hai (matlab ka pata)?',
  'It is an address made of roughly a thousand numbers. Texts with similar meanings get addresses that sit close together, like houses on the same street.':
    'Yeh lagbhag hazaar numbers se bana ek pata hai. Milte-julte matlab wale texts ke pate paas-paas hote hain, jaise ek hi gali ke ghar.',
  'A compressed copy of the text':
    'Text ki dabai hui copy',
  'A list of numbers that gives the text an address on a map of meaning':
    'Numbers ki ek list jo text ko meaning ke map par ek address deti hai',
  'A summary generated by the model':
    'Model ka banaya hua summary',
  'An index of keywords':
    'Keywords ka index',
  'You forget to set input_type to “query” for questions. You send everything as “passage”. What happens?':
    'Aap sawaalon ke liye input_type ko “query” set karna bhool jaate hain. Aap sab kuch “passage” ki tarah bhejte hain. Kya hota hai?',
  'There is no error. The results are only worse. The model maps questions and passages in matching but different ways. Skipping the setting is the classic silent slip.':
    'Koi error nahin aata. Bas results kharab ho jaate hain. Model sawaalon aur passages ko milte-julte lekin alag tareeke se map karta hai. Is setting ko chhod dena ek purani chup-chaap hone wali bhool hai.',
  'An error is returned':
    'Ek error aata hai',
  'Nothing, because the parameter is only cosmetic':
    'Kuch nahi, kyunki parameter sirf dikhaave ka hai',
  'Retrieval quality drops, with no warning':
    'Retrieval quality girti hai, bina kisi warning ke',
  'Embeddings come back at the wrong dimension':
    'Embeddings galat dimension mein wapas aate hain',
  'A vendor slide says, “1024-dimensional state-of-the-art embeddings.” What is the only useful response?':
    'Ek vendor ki slide kehti hai, “1024-dimensional state-of-the-art embeddings.” Ekmatra kaam ka jawaab kya hai?',
  'The number of dimensions is a spec, not proof. The claim that needs numbers is how well retrieval works on your documents, in your users’ own words.':
    'Dimensions ki ginti ek spec hai, saboot nahin. Jis daave ko numbers chahiye woh yeh hai ki retrieval aapke documents par, aapke users ke apne shabdon mein kitna achha chalta hai.',
  'Ask for 2048 dimensions':
    '2048 dimensions maangiye',
  '“Measured how, on whose questions, in which languages?”':
    '“Kaise measure kiya, kinke sawaalon par, kin languages mein?”',
  'Ask which GPU they run on':
    'Poochhiye woh kaunse GPU par chalte hain',
  'Accept it as a sign of quality':
    'Ise quality ka signal maan lijiye',
  'Two text pairs have cosine similarities (how close two embeddings are) of 0.78 and 0.19. Which statement is safe to make from these two numbers alone?':
    'Do text jodiyon ki cosine similarity (do embeddings kitne paas hain) 0.78 aur 0.19 hai. Sirf in do numbers se kaun sa kathan kehna surakshit hai?',
  'You cannot read a meaning from cosine values alone. How the scores spread out depends on the model, the corpus and the task. Label examples from your own retrieval task. Then set a threshold or a ranking rule from those.':
    'Sirf cosine values se aap matlab nahin padh sakte. Scores kaise phailte hain, yeh model, corpus aur task par nirbhar hai. Apne hi retrieval task ke udaharan label kijiye. Phir unse threshold ya ranking rule tay kijiye.',
  'The first pair are near-synonyms and the second pair are not':
    'Pehla pair near-synonyms hai aur doosra nahi',
  'You cannot tell from the scores alone, because how scores spread out depends on the model, the corpus and the task':
    'Sirf scores se nahi bataya ja sakta, kyunki scores kaise failte hain yeh model, corpus aur task par depend karta hai',
  'Both pairs are related, because both scores are above zero':
    'Dono pair related hain, kyunki dono scores zero se upar hain',
  'The second pair is unrelated, because 0.19 is below 0.5':
    'Doosra pair unrelated hai, kyunki 0.19, 0.5 se neeche hai',
  'What does reciprocal rank fusion do, in plain words?':
    'Reciprocal rank fusion saaf shabdon mein kya karta hai?',
  'Rank 1 adds a lot. Rank 40 adds almost nothing. A result that does fairly well on both lists beats one that wins only one. There is no learning. It is one line of arithmetic, and it is hard to beat.':
    'Rank 1 bahut jodta hai. Rank 40 lagbhag kuch nahin jodta. Jo result dono lists mein theek-thaak karta hai, woh us se jeet jaata hai jo sirf ek mein jeette. Isme koi learning nahin hai. Yeh ganit ki ek line hai, aur ise harana mushkil hai.',
  'Averages the similarity scores of both methods':
    'Dono tareekon ke similarity scores ka average nikaalta hai',
  'Adds up one-over-rank across both ranked lists, so ranking well on either list earns points':
    'Dono ranked lists mein one-over-rank jodta hai, isliye kisi bhi list mein achha rank karne par points milte hain',
  'Takes the top result from the better method':
    'Behtar tareeke ka top result le leta hai',
  'Trains a model to combine the two':
    'Dono ko jodne ke liye ek model train karta hai',
  'Why do you apply a reranker (a second, more careful judge of the best chunks) only to a shortlist, not the whole corpus?':
    'Reranker (sabse achhe chunks ka doosra, zyada dhyaan se jaanchne wala judge) ko poore corpus par nahin, sirf shortlist par kyon lagate hain?',
  'Embeddings are worked out ahead of time and searched instantly. So they do the wide first pass. The reranker is accurate because it reads the question and the chunk together. That is exactly why it cannot run on everything.':
    'Embeddings pehle se nikaal liye jaate hain aur turant search hote hain. Isliye woh pehla chauda daur karte hain. Reranker sahi isliye hai ki woh sawaal aur chunk ko saath padhta hai. Isi wajah se woh sab par nahin chal sakta.',
  'It is less accurate on large sets':
    'Bade sets par woh kam sahi hota hai',
  'It reads the question and each chunk together, so its cost grows in step with the number of candidates':
    'Woh question aur har chunk ko saath padhta hai, isliye uski cost candidates ki ginti ke saath badhti hai',
  'It requires the chunks to be sorted first':
    'Uske liye chunks pehle sort hone chahiye',
  'It can only process 50 items technically':
    'Woh technically sirf 50 items hi sambhal sakta hai',
  'Which technique fixes the orphan chunk you counted during chunking?':
    'Chunking ke dauraan jis orphan chunk ko aapne ginaa, use kaun si technique theek karti hai?',
  'The orphan becomes easy to find, because its address moves to the right neighbourhood. It costs one cheap call per chunk when you index. It costs nothing when a user asks.':
    'Orphan dhundhna aasaan ho jaata hai, kyunki uska pata sahi mohalle mein chala jaata hai. Index karte waqt har chunk par ek sasti call lagti hai. Jab user poochta hai tab kuch nahin lagta.',
  'Contextual retrieval: a generated situating sentence added before embedding':
    'Contextual retrieval: embedding se pehle ek generated situating sentence jodna',
  'Raising k':
    'k badhana',
  'Which lever (a setting you can turn) improves cost and quality at the same time?':
    'Kaun sa lever (ghumane layak setting) cost aur quality dono ko ek saath sudharta hai?',
  'Almost every other lever trades one for the other. Here you retrieve wide, rerank narrow, and send fewer but better chunks.':
    'Lagbhag har doosra lever ek ke badle doosra deta hai. Yahan aap chauda retrieve karte hain, patla rerank karte hain, aur kam lekin behtar chunks bhejte hain.',
  'Reranking, because it lets you lower k while raising precision':
    'Reranking, kyunki isse aap k ghata kar bhi precision badha sakte hain',
  'Enabling reasoning':
    'Reasoning on karna',
  'Increasing chunk size':
    'Chunk ka size badhana',
  'Your corpus holds both the 2024 and the 2026 versions of a policy. Which technique saves you?':
    'Aapke corpus mein ek policy ke 2024 aur 2026 dono versions hain. Kaun si technique aapko bachati hai?',
  'No embedding model can tell that a rule has been repealed (cancelled). Semantic similarity will happily return the old text with a high, confident score. This is ordinary database work, and it beats every clever technique here.':
    'Koi embedding model nahin bata sakta ki rule radd (cancel) ho chuka hai. Semantic similarity khushi se purana text ooche, pakke score ke saath lauta degi. Yeh aam database ka kaam hai, aur yeh yahan har chalaak technique ko harata hai.',
  'A better embedding model':
    'Behtar embedding model',
  'A metadata filter on version or status':
    'Version ya status par ek metadata filter',
  'Larger chunks':
    'Bade chunks',
  'Metadata (labels on a record, like date and owner) filtering can prevent some failures that no retrieval-quality technique can. Which ones?':
    'Metadata (record par lage label, jaise tareekh aur malik) filtering kuch aisi galtiyan rok sakti hai jo koi retrieval-quality technique nahin rok sakti. Kaun si?',
  'How recent a record is, what it covers and who may see it are facts about the record, not about its meaning. A mismatch in phrasing is what semantic retrieval is for.':
    'Record kitna naya hai, kis cheez ko cover karta hai aur ise kaun dekh sakta hai, yeh record ke tathya hain, uske matlab ke nahin. Shabdon ka mel na khaana semantic retrieval ka apna kaam hai.',
  'Superseded document versions being quoted as current':
    'Purane ho chuke document versions ka current bataakar quote hona',
  'Content from a department the user is not allowed to see':
    'Aise department ka content jise user dekh nahi sakta',
  'A question in the user’s own words failing to match':
    'User ke apne words mein poochha gaya sawaal match na ho paana',
  'Out-of-date figures being retrieved alongside current ones':
    'Purane aankdon ka current ke saath aa jaana',
  'Before you index a new corpus, what metadata do you require, and why each one?':
    'Naya corpus index karne se pehle aap kaun sa metadata maangte hain, aur har ek kyon?',
  'At minimum: document identity and version (so you never quote a replaced rule), effective and expiry dates (for recency), a status such as current, draft or repealed, the owning department or scope (to filter by access and relevance), and the document type (to route different kinds of queries). Each one guards against a failure no embedding can catch. A strong answer also says filtering happens before scoring. And metadata you forgot cannot be added cheaply once the corpus is embedded.':
    'Kam se kam: document ki pehchaan aur version (taaki aap badle gaye rule ko kabhi quote na karein), lagoo hone aur khatam hone ki tareekhein (naye-purane ke liye), status jaise current, draft ya repealed, malik department ya scope (access aur relevance se filter karne ke liye), aur document ka prakar (alag tarah ki queries ko sahi raste bhejne ke liye). Har ek aisi galti se bachata hai jo koi embedding nahin pakad sakta. Ek majboot jawaab yeh bhi kehta hai ki filtering scoring se pehle hoti hai. Aur jo metadata aap bhool gaye, use corpus embed hone ke baad sasti mein nahin jod sakte.',
  'What is ground truth (the teacher’s answer key)?':
    'Ground truth kya hai (teacher ki answer key)?',
  'It is the answer key, written before the exam. With no ground truth there is no evaluation. There is only gut feeling.':
    'Yeh answer key hai, jo exam se pehle likhi jaati hai. Ground truth ke bina koi evaluation nahin hota. Sirf andaza hota hai.',
  'The model’s most confident answer':
    'Model ka sabse confident jawaab',
  'A pre-checked set of questions, correct answers, and where those answers sit in the corpus':
    'Pehle se check kiye hue sawaalon, sahi jawaabon, aur corpus mein un jawaabon ki jagah ka ek set',
  'The raw source documents':
    'Kaccha source documents',
  'The system’s average accuracy':
    'System ki average accuracy',
  'Why should a question with no answer in the documents have a permanent place in every ground-truth set?':
    'Jis sawaal ka jawaab documents mein hai hi nahin, use har ground-truth set mein hamesha kyon rakhna chahiye?',
  'What the system does at that moment is its safety profile. Only a deliberate test row ever measures it.':
    'Us pal system kya karta hai, yahi uski suraksha ki tasveer hai. Ise sirf jaan-boojh kar daali gayi ek test row hi naapti hai.',
  'It makes the score look more realistic':
    'Isse score zyada asli lagta hai',
  'It is where retrieval that never says no meets a model that lies confidently, which is the compound failure':
    'Wahan woh retrieval jo kabhi na nahi kehti, us model se milti hai jo confidence ke saath jhooth bolta hai, yaani compound failure',
  'It tests the embedding model':
    'Isse embedding model test hota hai',
  'It balances the difficulty distribution':
    'Isse mushkilaai ka baantwara santulit hota hai',
  'Your ground truth scores 9/9 at k=3 on the first try. What is the most likely explanation?':
    'Aapka ground truth pehli koshish mein k=3 par 9/9 score karta hai. Sabse mumkin wajah kya hai?',
  'Questions written from the chunks test word overlap, not retrieval. Rewrite several in a real user’s words without looking at the document. Then grade again.':
    'Chunks dekh kar likhe gaye sawaal shabdon ka mel parakhte hain, retrieval nahin. Kuch sawaal document dekhe bina asli user ke shabdon mein dobara likhiye. Phir dobara grade kijiye.',
  'The system is excellent':
    'System zabardast hai',
  'You wrote the questions while reading the chunks, so they use the document’s own words':
    'Aapne sawaal chunks padhte hue likhe, isliye unmein document ke apne words hain',
  'k is too high':
    'k bahut zyada hai',
  'The embedding model is well suited':
    'Embedding model theek baithta hai',
  'Your offline eval (testing before launch) reads 92%, but users are complaining. Give the most likely cause and the fix.':
    'Aapka offline eval (launch se pehle ki jaanch) 92% dikhata hai, lekin users shikayat kar rahe hain. Sabse mumkin kaaran aur ilaaj batayiye.',
  'The ground truth does not look like real traffic. Most likely the team wrote it in the document’s own words. It lacks the vague wording, follow-ups and out-of-scope questions that real users bring. The fix: sample real production queries into the eval set. That is the flywheel turning: traffic, then error analysis, then new eval cases. A strong answer tells offline eval (does it pass the key?) from online eval (are users better off?). It says you need both.':
    'Ground truth asli traffic jaisa nahin dikhta. Sabse mumkin hai ki team ne use document ke apne shabdon mein likha. Usmein woh dhundhle shabd, follow-ups aur scope ke bahar ke sawaal nahin hain jo asli users laate hain. Ilaaj: asli production queries ko eval set mein daaliye. Yahi flywheel ka ghoomna hai: traffic, phir error analysis, phir naye eval cases. Ek majboot jawaab offline eval (kya woh key pass karta hai?) ko online eval (kya users ka bhala hua?) se alag batata hai. Woh kehta hai ki dono chahiye.',
  'Of everything that mattered, how much did the system fetch? What is this measure?':
    'Jo kuch zaroori tha, usmein se system ne kitna laaya? Yeh kaun sa naap hai?',
  'Recall is about missed files. Precision is about a buried desk. The office-assistant story helps you keep the two straight.':
    'Recall chhooti hui files ke baare mein hai. Precision dabi hui mez ke baare mein hai. Office-assistant ki kahani dono ko alag rakhne mein madad karti hai.',
  'Accuracy':
    'Accuracy',
  'F1':
    'F1',
  'You raise k (how many chunks you fetch) from 3 to 8. What happens?':
    'Aap k (kitne chunks laate hain) ko 3 se 8 karte hain. Kya hota hai?',
  'More candidates can improve coverage and lower relevance density (the share of useful chunks). Neither is guaranteed. The retrieved text can grow with k. The real cost depends on chunk size, prompt overhead, output tokens, caching, truncation and pricing. So measure it.':
    'Zyada candidates coverage badha sakte hain aur relevance density (kaam ke chunks ka hissa) ghata sakte hain. Dono mein se koi pakka nahin. Laaya gaya text k ke saath badh sakta hai. Asli cost chunk size, prompt overhead, output tokens, caching, truncation aur pricing par nirbhar hai. Isliye naapiye.',
  'Both precision and recall rise':
    'Precision aur recall dono badhte hain',
  'Coverage may improve and relevance density may fall; measure Hit@k, Recall@k where defined, Precision@k, prompt tokens, latency and cost':
    'Coverage badh sakti hai aur relevance density ghat sakti hai; Hit@k, Recall@k where defined, Precision@k, prompt tokens, latency aur cost naapiye',
  'Precision rises and recall falls':
    'Precision badhti hai aur recall girta hai',
  'Nothing changes without re-indexing':
    'Dobara index kiye bina kuchh nahi badalta',
  'For a customer-facing answer bot, which failure costs more?':
    'Customer ko dikhne wale answer bot ke liye kaun si galti zyada mehngi padti hai?',
  'A wrong answer is a disaster when customers see it. Inside the company you can live with it. “Cannot find” is the other way round. That difference decides your k. The decision belongs to whoever owns the use case.':
    'Galat jawaab tab tabaahi hai jab customers use dekhte hain. Company ke andar uske saath guzara ho jaata hai. “Nahin mila” ka hisaab ulta hai. Yahi farq aapka k tay karta hai. Yeh faisla use case ke malik ka hai.',
  '“I could not find this, please contact us”':
    '“Mujhe yeh nahi mila, please humse contact kijiye”',
  'A confidently wrong answer about eligibility':
    'Eligibility ke baare mein poore confidence se diya gaya galat jawaab',
  'Slightly slow responses':
    'Thode dheeme jawaab',
  'Retrieving four chunks instead of three':
    'Teen ki jagah chaar chunks nikalna',
  'You measure 6/9 hits at k=1, 8/9 at k=3 and 9/9 at k=8, with relevant fractions of 6/9, 11/27 and 14/72. Which k do you ship for an internal drafting aide (a helper that writes first drafts), and why?':
    'Aap k=1 par 6/9 hits, k=3 par 8/9 aur k=8 par 9/9 naapte hain, relevant fractions 6/9, 11/27 aur 14/72 ke saath. Internal drafting aide (pehla draft likhne wala madadgaar) ke liye kaun sa k ship karenge, aur kyon?',
  'k=3 or k=8, leaning k=8. In a drafting aide, the professional who reviews the draft catches imperfect ones. So a buried desk is survivable. A tool that fails to surface the right material gets abandoned. But k=8 buys the last hit at about 2.7× the tokens of k=3. You gain one hit, and precision drops to 19%. So a strong answer picks k=3 as good value, and calls k=8 defensible if latency and budget allow. It says it would look again with a reranker, to get k=3 volume at k=8 recall.':
    'k=3 ya k=8, jhukav k=8 ki taraf. Drafting aide mein draft dekhne wala professional kamiyan pakad leta hai. Isliye dabi hui mez ke saath guzara ho jaata hai. Jo tool sahi cheez saamne nahin laata, use log chhod dete hain. Lekin k=8 aakhri hit ko k=3 se lagbhag 2.7× tokens mein kharidta hai. Aapko ek hit milti hai, aur precision girkar 19% ho jaati hai. Isliye ek majboot jawaab k=3 ko achhe daam ka chunav kehta hai, aur k=8 ko tab theek maanta hai jab latency aur budget ijaazat dein. Woh kehta hai ki reranker ke saath dobara dekhega, taaki k=3 ki matra par k=8 ka recall mile.',
  'Before you trust an LLM judge (a second student marking the homework), what is the one step you cannot skip?':
    'LLM judge (homework check karne wala doosra student) par bharosa karne se pehle ek kaun sa kadam aap chhod nahin sakte?',
  'Check a judge against human labels before you use it to measure anything. Unchecked, it is a second opinion from the same kind of system that wrote the answer.':
    'Judge ko kuch naapne ke liye use karne se pehle use insaani labels se milaiye. Bina jaanche, woh usi tarah ke system ki doosri raay hai jisne jawaab likha tha.',
  'Using the largest available model':
    'Sabse bada maujood model istemaal karna',
  'Measuring how well it agrees with human labels on a representative set':
    'Ek representative set par human labels ke saath uska agreement measure karna',
  'Running it at temperature 0':
    'Use temperature 0 par chalana',
  'Averaging three judges':
    'Teen judges ka average lena',
  'You pad a correct answer with hedging and structure. No claim changes. The judge’s score goes up. What is this?':
    'Aap ek sahi jawaab mein hedging aur dhaancha bhar dete hain. Koi daava nahin badalta. Judge ka score badh jaata hai. Yeh kya hai?',
  'Longer answers score higher, all else equal. This spoils many published evaluation numbers. You can reproduce it yourself in five minutes.':
    'Lambe jawaab zyada score paate hain, baaki sab barabar ho to. Isse bahut se chhape hue evaluation numbers kharab ho jaate hain. Aap ise paanch minute mein khud dohra sakte hain.',
  'Correct behaviour, because clearer answers are better':
    'Sahi behaviour, kyunki saaf jawaab behtar hote hain',
  'Self-preference bias':
    'Self-preference bias',
  'Which judge design choices help resist the known biases?':
    'Judge ke design ke kaun se chunav jaane-pehchaane biases ka saamna karne mein madad karte hain?',
  'Narrow rubrics, forced evidence and randomised pairwise comparison all cut down bias. Averaging a vague overall score gives you a steady number that is steadily wrong.':
    'Tang rubrics, zaroori saboot aur randomised pairwise comparison, teeno bias ghatate hain. Ek dhundhle overall score ka average ek sthir number deta hai jo sthir roop se galat hai.',
  'Grade one narrow dimension per call, not overall quality':
    'Har call mein ek narrow dimension grade kijiye, overall quality nahi',
  'Require the judge to quote the specific unsupported claim':
    'Judge se woh khaas unsupported claim quote karwaiye',
  'Use pairwise comparison with the order of presentation randomised':
    'Pairwise comparison use kijiye, presentation ka order randomise karke',
  'Ask for a 1–10 quality score and average many runs':
    '1–10 ka quality score maangiye aur kai runs ka average lijiye',
  'Your judge agrees with your human labels on 6 of 10. The disagreements are scattered with no pattern. What should you conclude?':
    'Aapka judge 10 mein se 6 par aapke insaani labels se sahmat hai. Asahmatiyan bikhri hui hain, koi pattern nahin. Aap kya nateeja nikaalenge?',
  'A judge that is always lenient on one kind of failure is usable, as long as you know that. A judge whose errors are random gives you no signal you can correct.':
    'Jo judge ek tarah ki galti par hamesha narm rehta hai, woh kaam ka hai, bas aapko yeh pata ho. Jis judge ki galtiyan bekaayda hain, woh koi signal nahin deta jise aap sudhaar sakein.',
  'Usable, because 60% is above chance':
    'Usable hai, kyunki 60% chance se upar hai',
  'Unusable, because random error can’t be corrected for':
    'Unusable hai, kyunki random error ko correct nahi kiya ja sakta',
  'Usable if you always round the score up':
    'Istemaal layak, agar aap score hamesha upar round karein',
  'The humans are wrong':
    'Insaan galat hain',
  'Done properly, what is error analysis (reading the wrong answers one by one and sorting them into piles) mostly?':
    'Sahi tarah karne par error analysis (galat jawaabon ko ek-ek padhna aur dheron mein baantna) zyadatar kya hai?',
  'It is reading, not coding. It has the biggest payoff of anything in applied AI, mostly because almost nobody does it.':
    'Yeh padhna hai, coding nahin. Applied AI mein sabse bada phayda isi mein hai, kyunki lagbhag koi ise karta hi nahin.',
  'Writing evaluation code':
    'Evaluation code likhna',
  'Reading real outputs against their sources and writing plain-language notes':
    'Asli outputs ko unke source ke saamne padhna aur saadi bhaasha mein notes likhna',
  'Running benchmark suites':
    'Benchmark suites chalana',
  'Tuning retrieval parameters':
    'Retrieval parameters tune karna',
  'Why is a failure taxonomy (your own sorted piles of failures) built from your own traffic better than adding more benchmark evals?':
    'Apne hi traffic se bani failure taxonomy (galtiyon ke aapke apne sorted dher) zyada benchmark evals jodne se behtar kyon hai?',
  'Your own taxonomy tells you what to fix. It gives you categories you can count. A benchmark only tells you something is wrong, and on someone else’s data.':
    'Aapki apni taxonomy batati hai ki kya theek karna hai. Woh aisi categories deti hai jinhein aap gin sakte hain. Benchmark sirf batata hai ki kuch galat hai, aur woh bhi kisi aur ke data par.',
  'Benchmarks are poorly constructed':
    'Benchmarks theek se bane hi nahi hote',
  'Benchmarks measure someone else’s failures, not your users, documents or corpus quirks':
    'Benchmarks kisi aur ki failures measure karte hain, aapke users, documents ya corpus ki quirks nahi',
  'Benchmarks are expensive':
    'Benchmarks mehnge hain',
  'Taxonomies are faster to build':
    'Taxonomies banane mein tez hain',
  'Put the flywheel (a loop that keeps turning and gets better each turn) in order. Start from what you already have running.':
    'Flywheel (ek chakkar jo ghoomta rehta hai aur har baar behtar hota hai) ko kram mein lagaiye. Us se shuru kijiye jo pehle se chal raha hai.',
  'Each turn makes your eval suite a truer picture of reality. It is the one asset in an AI product that gains value over time. Models change every few months. Your ground truth and taxonomy stay.':
    'Har chakkar aapke eval suite ko asliyat ki sachchi tasveer banata hai. AI product mein yahi ek asset hai jiski keemat waqt ke saath badhti hai. Models har kuch mahine mein badalte hain. Aapka ground truth aur taxonomy rehte hain.',
  'Production traffic':
    'Production traffic',
  'Error analysis on sampled outputs':
    'Sample kiye gaye outputs par error analysis',
  'New eval cases added to the suite':
    'Suite mein jode gaye naye eval cases',
  'A targeted fix':
    'Ek nishaana laga hua ilaaj',
  'Measured improvement':
    'Naapa hua sudhaar',
  'Why does the book ask you to write down a prediction before every measurement?':
    'Kitaab har naap se pehle ek andaza likhne ko kyon kehti hai?',
  'Most people guess too high, often by a lot. Having that gap on record stops a slick demo from deciding things while you are in the room.':
    'Zyadatar log bahut ooncha andaza lagaate hain, aksar kaafi. Us farq ko likh kar rakhne se ek chamakdaar demo aapke kamre mein rehte hue faisla nahin kar paata.',
  'To make the exercise take longer':
    'Taaki abhyaas mein zyada samay lage',
  'Because the gap between your guess and the measurement is the lesson; without the guess, a number is just a number':
    'Kyunki aapke andaaze aur measurement ka gap hi lesson hai; andaaze ke bina number bas ek number hai',
  'To create documentation':
    'Documentation banane ke liye',
  'To compare yourself with other learners':
    'Khud ko doosre learners se compare karne ke liye',
  'Across twelve logged predictions, your measured values are always lower than your guesses. What is the right response?':
    'Baarah likhe gaye andazon mein aapke naape hue values hamesha aapke andaazon se kam hain. Sahi pratikriya kya hai?',
  'Once you know your own calibration curve (how far off your guesses run), you can use it. This is the one skill in the book that turns directly into better judgment in rooms where nobody is measuring anything.':
    'Jab aap apna calibration curve jaan lete hain (aapke andaaze kitne door rehte hain), aap use kaam mein la sakte hain. Kitaab ka yahi ek hunar hai jo seedhe un kamron mein behtar faisle mein badalta hai jahan koi kuch naap nahin raha.',
  'Stop predicting, because it is discouraging':
    'Predict karna band kar do, kyunki isse dil toot jaata hai',
  'Adjust future estimates downward, and treat your own confidence as a known bias':
    'Aage ke estimates neeche adjust kijiye, aur apne confidence ko ek known bias maniye',
  'Choose easier things to predict':
    'Andaaza lagane ke liye aasaan cheezein chuniye',
  'Conclude the systems are underperforming':
    'Nateeja nikaaliye ki systems kharaab kaam kar rahe hain',
  'You predicted 8 of 9 questions would retrieve a correct chunk at k=3. You measured 6. Write the one sentence this gap earns you.':
    'Aapne andaza lagaya ki k=3 par 9 mein se 8 sawaal sahi chunk laayenge. Aapne 6 naape. Is farq se jo ek vaakya aapne kamaya, use likhiye.',
  'Something like: “I over-predicted retrieval quality by 22 percentage points on documents I know well. So my gut feel about whether a demo is working cannot be trusted. I will not accept a demo as evidence again.” Strong answers name the size of the gap, its direction, and a change in behaviour. They do not stop at “I was wrong.”':
    'Kuch is tarah: “Maine un documents par, jinhein main achhe se jaanta hoon, retrieval quality ka andaza 22 percentage points zyada lagaya. Isliye demo chal raha hai ya nahin, is par meri andaaz-bhari bhavna par bharosa nahin kiya ja sakta. Main ab demo ko saboot nahin maanunga.” Majboot jawaab farq ka size, uski disha aur vyavhaar mein badlaav batate hain. Woh sirf “main galat tha” par nahin rukte.',
});
