/* Hinglish: what each skill claims, and its levels.

   Generated alongside the English source: the key is the English line exactly
   as it appears in the course, so a line that is later edited in English falls
   back to English rather than showing a translation of something else. */
Object.assign(window.HING = window.HING || {}, {
  /* Skills and levels */
  'How a request actually behaves, and what it costs.':
    'Ek request asal mein kaisa behave karti hai, aur uski cost kya hai.',
  'Getting the right evidence in front of the model.':
    'Sahi evidence model ke saamne pahunchana.',
  'Turning "is it good?" into numbers you produced.':
    '"Kya yeh achcha hai?" ko aapke apne nikaale hue numbers mein badalna.',
  'Structure, action, context and thought budgets.':
    'Structure, kaam, context aur sochne ke budgets.',
  'Where it breaks adversarially, and what ships with it.':
    'Yeh hamle ke saamne kahan tootta hai, aur iske saath kya ship hota hai.',
  'The decisions that are yours and nobody else\'s.':
    'Woh faisle jo aapke hain, kisi aur ke nahi.',
  'Given a feature description, produce a defensible cost-per-query figure.':
    'Ek feature ka vivaran dekar defend karne layak per-query cost ka aankda nikaal paana.',
  'Knows tokens are the billing unit':
    'Jaanta hai ki tokens hi billing ki ikai hain',
  'Can read a receipt and explain prompt vs completion tokens':
    'Receipt padh sakta hai aur prompt versus completion tokens samjha sakta hai',
  'Can compute cost per query including k and output length':
    'k aur output ki lambaai samet per query cost nikaal sakta hai',
  'Can produce a loaded monthly model with all four multipliers and defend it':
    'Chaaron multipliers ke saath poora monthly model bana sakta hai aur use defend kar sakta hai',
  'Distinguish what fits from what works, and budget the envelope deliberately.':
    'Jo aa jaata hai aur jo kaam karta hai, in dono mein farq karna aur envelope ka budget soch-samajh kar banana.',
  'Knows the window is a per-request ceiling':
    'Jaanta hai ki window har request ki ek ceiling hai',
  'Knows the window is not memory':
    'Jaanta hai ki window memory nahi hai',
  'Can allocate a context budget across system, tools, chunks, history':
    'System, tools, chunks aur history ke beech context ka budget baant sakta hai',
  'Can predict where context rot will bite and design retrieval around it':
    'Bata sakta hai ki context rot kahan kaategi aur usi ke hisaab se retrieval bana sakta hai',
  'Explain any "memory" feature as the engineering it actually is.':
    'Kisi bhi "memory" feature ko us engineering ke roop mein samjha paana jo woh sach mein hai.',
  'Knows the model is stateless':
    'Jaanta hai ki model stateless hai',
  'Can explain the re-sending trick and its cost curve':
    'Dobara-bhejne wali trick aur uske cost curve ko samjha sakta hai',
  'Can name the three parts of a memory feature: store, selection, budget':
    'Memory feature ke teen hisse bata sakta hai: store, chunav, budget',
  'Can interrogate a vendor memory claim on storage, control and per-query cost':
    'Vendor ke memory ke daawe ko storage, niyantran aur per-query cost par khod sakta hai',
  'Write a briefing page that behaves, and know precisely what it cannot do.':
    'Aisa briefing page likhna jo kaam kare, aur theek-theek jaanna ki woh kya nahi kar sakta.',
  'Knows the system prompt sets standing behaviour':
    'Jaanta hai ki system prompt sthir behaviour tay karta hai',
  'Can write one that changes tone and refusal behaviour':
    'Aisa ek likh sakta hai jo lehja aur mana karne ka tareeka badal de',
  'Treats it as a versioned, reviewable artifact with cache implications':
    'Use ek versioned, review hone layak cheez maanta hai, cache par asar samet',
  'Can state what a prompt can never fix and what must be structural':
    'Bata sakta hai ki prompt kya kabhi theek nahi kar sakta aur kya structural hona chahiye',
  'Predict where a system will invent, and name the mechanism causing it.':
    'Bata paana ki system kahan banayega, aur uski wajah ka naam lena.',
  'Knows hallucination is default behaviour at the knowledge edge, not a glitch':
    'Jaanta hai ki jaankaari ke kinare par hallucination normal behaviour hai, kharaabi nahi',
  'Can induce it deliberately and recognise its shape in a domain':
    'Use jaanbujhkar karwa sakta hai aur apne domain mein uska roop pehchan sakta hai',
  'Can trace an invention to its cause: missing evidence, or a compelled field':
    'Kisi invention ki jad tak ja sakta hai: gayab evidence, ya majboor karne wali field',
  'Can design the refusal path that removes the compulsion':
    'Aisa refusal path bana sakta hai jo woh majboori hi hata de',
  'Choose a cutting rule for a document type and state what it sacrifices.':
    'Kisi document type ke liye kaatne ka niyam chunna aur batana ki woh kya kurbaan karta hai.',
  'Knows documents must be cut and that size is a choice':
    'Jaanta hai ki documents kaatne padte hain aur size ek chunav hai',
  'Can name the two injuries: boundary cuts and orphans':
    'Do chotein bata sakta hai: boundary par kaat aur orphans',
  'Can pick a strategy for a specific document anatomy and justify it':
    'Kisi khaas document ki banawat ke liye tareeka chun sakta hai aur use jaayaz thehra sakta hai',
  'Can design chunking + situating context for a corpus and predict residual failures':
    'Corpus ke liye chunking + situating context bana sakta hai aur bache hue failures bata sakta hai',
  'Predict which retrieval method fails on a given query, before running it.':
    'Chalane se pehle bata paana ki kisi sawaal par kaunsa retrieval tareeka fail hoga.',
  'Knows keyword matches spelling and embeddings match meaning':
    'Jaanta hai ki keyword spelling milaata hai aur embeddings matlab',
  'Can name the three blindnesses of keyword search':
    'Keyword search ke teen andhepan bata sakta hai',
  'Can predict per-query which method wins, including the exact-string case':
    'Har query par bata sakta hai ki kaunsa tareeka jeetega, exact-string wala mamla samet',
  'Can classify a real query mix and derive the architecture from it':
    'Asli queries ke mishran ko baant sakta hai aur usi se architecture nikaal sakta hai',
  'Reason about the meaning map without mystifying it.':
    'Meaning map par bina rahasya bunay soch paana.',
  'Knows an embedding is an address and similar meanings sit close':
    'Jaanta hai ki embedding ek pata hai aur milte-julte matlab paas baithte hain',
  'Can explain cosine similarity in one plain sentence':
    'Cosine similarity ko ek saade sentence mein samjha sakta hai',
  'Knows the query/passage asymmetry and that skipping it fails silently':
    'Query/passage ki asamaanta jaanta hai aur yeh ki use chhodna chupchaap fail karta hai',
  'Can design an experiment that tests an embedding model on a specific corpus':
    'Aisa prayog bana sakta hai jo kisi khaas corpus par embedding model ko jaanche',
  'Match each retrieval technique to the specific failure it cures.':
    'Har retrieval technique ko us khaas failure se milaana jise woh theek karti hai.',
  'Can name hybrid search, reranking and contextual retrieval':
    'Hybrid search, reranking aur contextual retrieval ka naam le sakta hai',
  'Can explain rank fusion and retrieve-wide-rerank-narrow in plain words':
    'Rank fusion aur chaudaai-mein-nikaalo-sankraai-mein-rerank ko saade shabdon mein samjha sakta hai',
  'Can map each technique to a measured failure it fixes':
    'Har technique ko us naape hue failure se jod sakta hai jise woh theek karti hai',
  'Can sequence techniques by cost-effectiveness on a measured baseline':
    'Naapi hui baseline par techniques ko cost-effectiveness ke kram mein laga sakta hai',
  'Catch the failures no embedding model can ever detect.':
    'Woh failures pakadna jinhe koi embedding model kabhi pehchan hi nahi sakta.',
  'Knows filters exist':
    'Jaanta hai ki filters hote hain',
  'Knows superseded content retrieves happily with a high score':
    'Jaanta hai ki purana content khushi-khushi ooncha score lekar aa jaata hai',
  'Can specify the metadata a corpus needs before indexing':
    'Index karne se pehle corpus ko kaunsa metadata chahiye, yeh bata sakta hai',
  'Can audit a live corpus for version, scope and recency hazards':
    'Chalte hue corpus ka version, daayra aur nayapan ke khatron ke liye audit kar sakta hai',
  'Build an answer key that resembles real traffic, including what has no answer.':
    'Aisi answer key banana jo asli traffic jaisi ho, un sawaalon samet jinka jawaab hai hi nahi.',
  'Knows evaluation requires a pre-verified answer key':
    'Jaanta hai ki evaluation ke liye pehle se verify ki gayi answer key chahiye',
  'Can write questions with verified answers and locations':
    'Verified jawaabon aur unki jagah ke saath sawaal likh sakta hai',
  'Includes unanswerable questions and real user phrasing as standard':
    'Bina-jawaab wale sawaal aur asli users ki bhaasha aam taur par shaamil karta hai',
  'Can derive a ground truth from production traffic and defend its representativeness':
    'Production traffic se ground truth nikaal sakta hai aur uske pratinidhi hone ko defend kar sakta hai',
  'Turn the k dial deliberately, for a named use case, with the cost stated.':
    'k ka dial soch-samajh kar, ek naam wale use case ke liye, batayi hui cost ke saath ghumaana.',
  'Can define precision and recall correctly':
    'Precision aur recall ko theek se define kar sakta hai',
  'Can explain the trade-off with the office-assistant story':
    'Office wale assistant ki kahani se trade-off samjha sakta hai',
  'Can choose k for a use case and justify it by failure cost':
    'Kisi use case ke liye k chun sakta hai aur use failure ki keemat se jaayaz thehra sakta hai',
  'Can present a measured k-sweep and recommend a shipping configuration':
    'Naapa hua k-sweep dikha sakta hai aur ship karne layak configuration bata sakta hai',
  'Build a grader you can trust, and prove that you can.':
    'Aisa grader banana jis par aap bharosa kar sakein, aur yeh saabit karna ki kar sakte hain.',
  'Knows a model can grade outputs':
    'Jaanta hai ki model outputs grade kar sakta hai',
  'Knows a judge must be validated against human labels':
    'Jaanta hai ki judge ko insaani labels ke against jaanchna hi padta hai',
  'Can write a single-dimension rubric that resists verbosity and position bias':
    'Aisa ek-dimension wala rubric likh sakta hai jo verbosity aur position bias ka saamna kare',
  'Can report judge agreement and characterise where the judge is systematically wrong':
    'Judge ki sehmati bata sakta hai aur yeh bhi ki judge lagataar kahan galat hai',
  'Read real outputs and turn failures into named, countable categories.':
    'Asli outputs padhkar failures ko naam wali, ginne layak categories banana.',
  'Knows error analysis means reading outputs':
    'Jaanta hai ki error analysis ka matlab outputs padhna hai',
  'Can open-code failures into notes rather than premature categories':
    'Failures ko jaldbaazi ki categories ki jagah notes mein likh sakta hai',
  'Can cluster notes into a taxonomy and count each cluster':
    'Notes ko guchhon mein baant sakta hai aur har guchha gin sakta hai',
  'Can drive a roadmap from cluster size and convert clusters into regression cases':
    'Guchhe ke aakaar se roadmap chala sakta hai aur guchhon ko regression cases mein badal sakta hai',
  'Know how wrong your intuitions are, numerically, and correct for it.':
    'Yeh jaanna ki aapki apni samajh kitni galat hai, numbers mein, aur uske hisaab se sudhaarna.',
  'Writes a prediction before measuring':
    'Naapne se pehle andaaza likhta hai',
  'Notices the direction of personal bias':
    'Apne bias ki disha pehchanta hai',
  'Tracks the gap across many measurements':
    'Kai naapon mein farq ka hisaab rakhta hai',
  'Adjusts estimates and decisions using a known personal calibration curve':
    'Apni jaani hui calibration curve se andaaze aur faisle sudhaarta hai',
  'Design a schema that makes invalid output impossible and invention unnecessary.':
    'Aisa schema banana jisme galat output namumkin ho aur banane ki zaroorat hi na pade.',
  'Knows schemas constrain output shape':
    'Jaanta hai ki schemas output ka shape baandhte hain',
  'Knows shape validity is not truth':
    'Jaanta hai ki shape sahi hona sach hona nahi hai',
  'Uses enums, nullable fields and explicit refusal branches':
    'Enums, nullable fields aur saaf refusal branches istemaal karta hai',
  'Designs evidence fields that make every record checkable in seconds':
    'Aisi evidence fields banata hai jinse har record seconds mein jaancha ja sake',
  'Specify an agent that cannot run away or lie about what it did.':
    'Aisa agent tay karna jo na bhaag sake aur na apne kaam ke baare mein jhooth bole.',
  'Can describe the loop: model asks, your code runs, result returns':
    'Loop bata sakta hai: model maangta hai, aapka code chalta hai, result wapas aata hai',
  'Knows step budgets and termination conditions are mandatory':
    'Jaanta hai ki step budgets aur rukne ki shartein zaroori hain',
  'Treats tool descriptions as reviewed product surface':
    'Tool descriptions ko review hone wala product surface maanta hai',
  'Designs the read/write boundary and the confirmation points around it':
    'Padhne aur likhne ki seema aur uske aas-paas ke confirmation points banata hai',
  'Decide what enters the envelope, in what order, and what gets evicted.':
    'Tay karna ki envelope mein kya jaayega, kis kram mein, aur kya bahar nikalega.',
  'Distinguishes prompt engineering from context engineering':
    'Prompt engineering aur context engineering mein farq karta hai',
  'Knows stable-first ordering enables caching':
    'Jaanta hai ki sthir-pehle wala kram caching mumkin banata hai',
  'Can budget an envelope and choose what to cut under pressure':
    'Envelope ka budget bana sakta hai aur dabaav mein tay kar sakta hai ki kya kaatna hai',
  'Can design compaction that preserves identifiers rather than losing them':
    'Aisi compaction bana sakta hai jo identifiers bachaaye, khoye nahi',
  'Buy thinking only where it pays, and know the latency you spent.':
    'Sochna sirf wahan kharidna jahan woh wasool ho, aur yeh jaanna ki uske liye kitna intezaar diya.',
  'Knows reasoning costs tokens and seconds':
    'Jaanta hai ki reasoning tokens aur second dono leti hai',
  'Can name task types that do and do not benefit':
    'Un kaamon ki kismein bata sakta hai jinhe faayda hota hai aur jinhe nahi',
  'Can classify a real traffic mix and compute the blended cost':
    'Asli traffic ke mishran ko baant sakta hai aur blended cost nikaal sakta hai',
  'Knows reasoning cannot repair retrieval, and can prove it on a case':
    'Jaanta hai ki reasoning retrieval theek nahi kar sakti, aur ise ek mamle par saabit kar sakta hai',
  'Know what your corpus actually is before designing for it.':
    'Design karne se pehle yeh jaanna ki aapka corpus asal mein hai kya.',
  'Knows real corpora are pages, not clean text':
    'Jaanta hai ki asli corpora pages hain, saaf text nahi',
  'Knows table extraction destroys row/column relations silently':
    'Jaanta hai ki table extraction row/column ke rishte chupchaap nasht kar deta hai',
  'Can audit a corpus for text/scan/table composition':
    'Corpus ka text/scan/table ke hisaab se audit kar sakta hai',
  'Can choose text-first, vision-first or hybrid from measured evidence':
    'Naape hue sabooot se text-pehle, vision-pehle ya mila-jula chun sakta hai',
  'Audit any system for the three legs and name which one you would break.':
    'Kisi bhi system ka teen taangon ke liye audit karna aur batana ki aap kaunsi todenge.',
  'Knows instructions can arrive inside content':
    'Jaanta hai ki instructions content ke andar aa sakte hain',
  'Can distinguish direct from indirect injection':
    'Seedhe aur ghumaav wale injection mein farq kar sakta hai',
  'Can run the three-leg audit on a real system':
    'Kisi asli system par teen-taang wala audit chala sakta hai',
  'Can specify the architectural change that breaks a leg, not a mitigation':
    'Woh architectural badlav bata sakta hai jo ek taang todta hai, koi upaay nahi',
  'Tell the difference between something that asks and something that enforces.':
    'Us cheez mein farq karna jo guzarish karti hai aur us mein jo laagu karti hai.',
  'Knows a system prompt is a weak guardrail':
    'Jaanta hai ki system prompt kamzor guardrail hai',
  'Has seen a guardrail bend under pressure':
    'Guardrail ko dabaav mein jhukte dekha hai',
  'Can classify any defence as model-dependent or structural':
    'Kisi bhi defence ko model-nirbhar ya structural mein baant sakta hai',
  'Designs so that a successful injection still cannot cause harm':
    'Aise design karta hai ki kaamyaab injection bhi nuksaan na kar sake',
  'Place a system in a tier and produce the file that tier requires.':
    'System ko ek tier mein rakhna aur us tier ki maang wali file banana.',
  'Knows obligations scale with consequence, not technology':
    'Jaanta hai ki zimmedari nateeje ke saath badhti hai, technology ke saath nahi',
  'Can tier a use case and justify it':
    'Use case ko tier de sakta hai aur use jaayaz thehra sakta hai',
  'Can complete a system card with measured numbers':
    'Naape hue numbers ke saath system card poora kar sakta hai',
  'Can spot a governance file that contains adjectives where evidence belongs':
    'Aisi governance file pakad sakta hai jisme sabooot ki jagah visheshan hain',
  'Specify review that can actually be exercised at real volume.':
    'Aisa review tay karna jo asli volume par sach mein ho sake.',
  'Knows a human should review high-risk output':
    'Jaanta hai ki high-risk output ko insaan ko dekhna chahiye',
  'Can specify who reviews what, seeing what':
    'Bata sakta hai ki kaun kya review karega, kya dekhte hue',
  'Checks the design against real volume for feasibility':
    'Design ko asli volume ke saamne rakhkar dekhta hai ki yeh sambhav hai ya nahi',
  'Uses checks and structure to make targeted review possible at scale':
    'Checks aur structure se scale par nishaana laga hua review mumkin banata hai',
  'Trace one document through every store it reaches, and out again.':
    'Ek document ko har us store tak, aur wapas bahar, trace karna jahan woh pahunchta hai.',
  'Knows data lands in more than one place':
    'Jaanta hai ki data ek se zyada jagah pahunchta hai',
  'Can list the stores: source, chunks, vectors, caches, logs, eval sets':
    'Stores gina sakta hai: source, chunks, vectors, caches, logs, eval sets',
  'Can run the deletion drill and find the unreachable ones':
    'Deletion drill chala sakta hai aur un jagahon ko pakad sakta hai jahan pahunch nahi',
  'Can specify lineage and retention before a corpus is ingested':
    'Corpus lene se pehle lineage aur retention tay kar sakta hai',
  'Decide whether a feature can survive contact with its own bill.':
    'Tay karna ki feature apne hi bill ka saamna kar paayega ya nahi.',
  'Can compute a naive cost per query':
    'Naadaan per query cost nikaal sakta hai',
  'Knows the four multipliers exist':
    'Jaanta hai ki chaar multipliers hote hain',
  'Can build a loaded model and a cascade saving':
    'Loaded model aur cascade ki bachat bana sakta hai',
  'Can state the margin case and kill or fund a feature on it':
    'Margin ka mamla bata sakta hai aur usi par feature ko band ya fund kar sakta hai',
  'Convert any claim into the question that would make it evidence.':
    'Kisi bhi daawe ko us sawaal mein badalna jo use sabooot bana de.',
  'Knows to ask for numbers':
    'Jaanta hai ki numbers maangne hain',
  'Can ask the right follow-up for common claims':
    'Aam daawon par sahi agla sawaal poochh sakta hai',
  'Asks for measurement on OUR ground truth at a stated configuration':
    'HAMARI ground truth par, ek batayi hui configuration par naap maangta hai',
  'Can run a full vendor evaluation and write the recommendation':
    'Poora vendor evaluation chala sakta hai aur sifaarish likh sakta hai',
  'Write acceptance criteria that a distribution of behaviour can be tested against.':
    'Aise acceptance criteria likhna jinke against behaviour ki ek poori range jaanchi ja sake.',
  'Knows AI features behave as a distribution, not a fixed output':
    'Jaanta hai ki AI features ek range ki tarah behave karte hain, ek tay output ki tarah nahi',
  'Can write one eval-threshold acceptance criterion':
    'Ek eval-threshold wala acceptance criterion likh sakta hai',
  'Can write a full set including unanswerable and second-language cases':
    'Poora set likh sakta hai, bina-jawaab wale aur doosri bhaasha wale mamle samet',
  'Can write the whole PRD: thresholds, regression, rollout, kill switch, migration':
    'Poora PRD likh sakta hai: thresholds, regression, rollout, kill switch, migration',
  'Make a senior non-technical person genuinely able to repeat it.':
    'Kisi senior non-technical insaan ko sach mein is layak banana ki woh use dohraa sake.',
  'Can define terms accurately':
    'Shabdon ko theek se define kar sakta hai',
  'Can explain one mechanism without jargon':
    'Ek tareeke ko bina jargon ke samjha sakta hai',
  'Can explain a whole pipeline in five plain sentences':
    'Poore pipeline ko paanch saade sentences mein samjha sakta hai',
  'Can explain the failure modes and their business consequence, plainly':
    'Failure ke tareeke aur unka business par asar, saaf-saaf samjha sakta hai',
  'Choose between real options on measured evidence and state the trade.':
    'Asli vikalpon mein se naape hue sabooot par chunna aur trade batana.',
  'Can describe the standard pipeline':
    'Aam pipeline bata sakta hai',
  'Can identify which component causes a given symptom':
    'Bata sakta hai ki kisi lakshan ki wajah kaunsa hissa hai',
  'Can choose between options and name what each costs':
    'Vikalpon mein chun sakta hai aur bata sakta hai ki har ek ki keemat kya hai',
  'Can sequence a roadmap by measured impact and defend it under challenge':
    'Naape hue asar se roadmap ka kram bana sakta hai aur sawaal uthne par use defend kar sakta hai',
  'Diagnose which of prompting, retrieval, tuning or a different model a failure actually calls for — and defend the choice with a measurement.':
    'Yeh pehchanna ki koi failure asal mein prompting, retrieval, tuning ya alag model mein se kya maang raha hai — aur us chunav ko ek naap se defend karna.',
  'Can name the four levers':
    'Chaaron lever ka naam le sakta hai',
  'Can say which lever suits a described failure':
    'Bata sakta hai ki batayi gayi failure ke liye kaunsa lever theek hai',
  'Can diagnose a real failure from evidence and pick the lever, naming what would prove it right':
    'Sabooot se asli failure pehchan sakta hai aur lever chun sakta hai, yeh batate hue ki use kya sahi saabit karega',
  'Can turn “should we fine-tune?” into a costed decision with owners, an eval and a deprecation plan':
    '"Kya humein fine-tune karna chahiye?" ko ek cost wale faisle mein badal sakta hai, jisme maalik, ek eval aur deprecation ki yojana ho',
  'Design what a user is shown when the system is confident, unsure, wrong, or switched off.':
    'Yeh design karna ki system confident ho, anishchit ho, galat ho, ya band ho — har haal mein user ko kya dikhega.',
  'Knows an uncertain answer should not look like a certain one':
    'Jaanta hai ki anishchit jawaab ko nishchit jawaab jaisa nahi dikhna chahiye',
  'Can specify citations, streaming and a correction path':
    'Citations, streaming aur correction path tay kar sakta hai',
  'Can design confidence as routing rather than as a displayed number':
    'Confidence ko dikhaye jaane wale number ki jagah routing ke roop mein bana sakta hai',
  'Can write all four states, including refusal and graceful degradation, and time the correction path against the manual workaround':
    'Chaaron sthitiyaan likh sakta hai, refusal aur graceful degradation samet, aur correction path ka samay haath se kaam karne ke saamne naap sakta hai',
  'Untested':
    'Untested',
  'Aware':
    'Aware',
  'Working':
    'Working',
  'Proficient':
    'Proficient',
  'Authoritative':
    'Authoritative'
});
