/* Hinglish: the Part V question bank, and the "Not yet" parking-lot page.

   The parking-lot lines were never translated in any earlier pass — the page
   rendered in English even with Hinglish on. They are here now. */
Object.assign(window.HING = window.HING || {}, {

  'Body text usually survives; the other three are flattened or dropped entirely. That is why a table question cannot be graded against a text extraction — the ground truth for that question has to come from whatever can actually read a table.':
    'Aam likhaai to bach jaati hai; baaki teen ya to chapat ho jaate hain ya poori tarah gir jaate hain. Isiliye table waale sawaal ko sirf text se nikaale gaye jawaab se nahi jaancha jaa sakta — us sawaal ka sahi jawaab wahin se aana chahiye jo sach mein table padh sakta ho.',
  'The structure of a table':
    'Table ka dhaancha',
  'Meaning carried by position, such as a heading over a column':
    'Jagah se aane waala matlab, jaise column ke upar ka heading',
  'Anything that was inside an image':
    'Jo kuch bhi tasveer ke andar tha',
  'The words in the body paragraphs':
    'Aam paragraph ke shabd',
  'End-to-end answer quality scores 0.88. Retrieval recall scores 0.41. What is the most likely explanation?':
    'Poore safar ke jawaab ki quality 0.88 aati hai. Retrieval ka recall 0.41. Sabse mumkin wajah kya hai?',
  'A fluent model covers for missing evidence often enough to look good end to end. That is the most dangerous state a retrieval product can be in, because the demo is excellent and the system is guessing — and only a layered score reveals it. One number cannot.':
    'Ek fluent model gayab saboot ko itni baar dhak leta hai ki poora safar achcha dikhta hai. Yeh retrieval product ki sabse khatarnaak haalat hai, kyunki demo shaandaar hai aur system andaaza laga raha hai — aur yeh sirf kai parton waale score se dikhta hai. Ek number se nahi.',
  'The evaluation set is too easy':
    'Evaluation set bahut aasaan hai',
  'The model is answering well from its own knowledge rather than the evidence':
    'Model saboot ki jagah apni hi jaankari se achche jawaab de raha hai',
  'The retriever is fine and the metric is miscalibrated':
    'Retriever theek hai aur number ka hisaab galat lagaya gaya hai',
  'Groundedness and recall are not comparable, so nothing follows':
    'Saboot par tika hona aur recall tulna layak nahi hain, isliye kuch nahi nikalta',
  'An answer was wrong on Tuesday. The code has not changed. Which trace fields let you find out why?':
    'Mangalwar ko ek jawaab galat tha. Code nahi badla. Trace ke kaun se hisse aapko wajah dhoondhne dete hain?',
  'Prompt version, retrieved chunk ids and model version are the three things that change without a deploy, and they are the three people leave out of a trace. Latency tells you about speed, not about correctness — useful, but not for this question.':
    'Prompt ka version, nikale gaye chunks ki ids, aur model ka version — yeh teen cheezein bina deploy ke badalti hain, aur yahi teen log trace se chhod dete hain. Latency raftaar batati hai, sahi-galat nahi — kaam ki cheez hai, par is sawaal ke liye nahi.',
  'The prompt version in effect for that request':
    'Us request par kaun sa prompt version laagu tha',
  'The ids of the chunks that were retrieved':
    'Jo chunks nikale gaye unki ids',
  'The model and model version that served it':
    'Kaun sa model aur uska kaun sa version chala',
  'The total latency for the request':
    'Us request ki kul latency',
  'A colleague says injection is not a concern because the corpus contains only internal documents that your own staff wrote. Answer them.':
    'Ek sahyogi kehta hai ki injection ki chinta nahi hai kyunki corpus mein sirf andar ke documents hain jo aapke apne log likhte hain. Unhe jawaab dijiye.',
  'The reply has to move the argument off ownership and onto the boundary. "Our own documents" is a statement about who can be blamed, not about whether the text can carry instructions.':
    'Jawaab ko bahas maalikana haq se hatakar seema par le jaana chahiye. "Hamare apne documents" yeh batata hai ki galti kiski maani jaayegi — yeh nahi ki likhaai nirdesh le jaa sakti hai ya nahi.',
  'Retrieved content is untrusted input regardless of who wrote it: an internal document can be edited by anyone with write access, can be uploaded by a supplier, or can quote an external source verbatim — and the model cannot tell an instruction from data in any of those cases. The control is the instruction boundary the system enforces when it assembles the context, not the provenance of the file.':
    'Nikala gaya content bharose ke laayak nahi hai, chaahe use kisne bhi likha ho: andar ka document koi bhi badal sakta hai jiske paas likhne ka haq hai, use koi supplier chadha sakta hai, ya usme bahar ka koi hissa hubahu likha ho sakta hai — aur in sab mein model nirdesh aur data ka farak nahi kar sakta. Bachaav woh nirdesh ki seema hai jo system context jodte waqt lagata hai, file kahan se aayi yeh nahi.',
  'Which of these is an acceptance criterion an engineer can actually build against?':
    'Inme se kaun si acceptance criteria hai jispar ek engineer sach mein bana sakta hai?',
  'Only the third names a metric, a test set and a tolerance. The first promises something probabilistic systems cannot deliver, the second cannot be tested, and the fourth is a real goal but not yet a criterion — it has no measurement attached.':
    'Sirf teesri mein ek number, ek test set aur ek chhoot likhi hai. Pehli aisa waada karti hai jo andaazon par chalne waale system nibha nahi sakte, doosri test hi nahi ki jaa sakti, aur chauthi ek asli lakshya hai par abhi criteria nahi — usme koi naap judi hi nahi hai.',
  'The assistant always returns the correct document':
    'Assistant hamesha sahi document laata hai',
  'The assistant returns the correct document in almost all cases':
    'Assistant lagbhag har baar sahi document laata hai',
  'On the approved 200-case set, Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98':
    'Manzoor 200-case set par, Recall@5 ≥ 0.90 aur jawaab-nahi ki precision ≥ 0.98',
  'The assistant performs at least as well as the current manual process':
    'Assistant kam se kam utna achcha kare jitna aaj ka haath se hone waala tareeka',
  'Your provider announces a price increase on ninety days’ notice. Which of these make the switch tractable?':
    'Aapka provider nabbe din ka notice dekar daam badhane ka elaan karta hai. Inme se kya badalna aasaan banata hai?',
  'The first three are the exit plan, whether or not anyone called it that. An evaluation set is the thing that turns "can we switch?" from a debate into a week of work — which is why the usual finding is that the exit plan and the evaluation set are the same artifact.':
    'Pehli teen hi nikalne ki yojana hain, chaahe kisi ne unhe yeh naam diya ho ya nahi. Evaluation set wahi cheez hai jo "kya hum badal sakte hain?" ko bahas se ek hafte ke kaam mein badal deti hai — aur isiliye aam nateeja yeh nikalta hai ki nikalne ki yojana aur evaluation set ek hi cheez hain.',
  'An evaluation set you can re-run against a new provider':
    'Ek evaluation set jise aap naye provider par dobara chala sakein',
  'A provider scorecard that already included exit cost':
    'Aisa provider scorecard jisme chhodne ka kharcha pehle se ho',
  'Prompts and configuration kept under version control':
    'Prompts aur settings version control mein rakhe hue',
  'A strong preference among the team for the current provider':
    'Team ki abhi waale provider ke liye mazboot pasand',
  'What makes a capstone credible in a design review?':
    'Design review mein capstone ko bharosemand kya banata hai?',
  'Anyone can demonstrate the happy path. The evidence that you understand a system is that you know where it breaks, can show the measurement that proves you fixed some of it, and can say plainly what you did not solve.':
    'Sab theek chalne waala raasta to koi bhi dikha sakta hai. Aap system samajhte hain iska saboot yeh hai ki aapko pata hai woh kahan tootta hai, aap woh naap dikha sakte hain jo saabit kare ki kuch aapne theek kiya, aur aap saaf keh sakte hain ki kya hal nahi kiya.',
  'A working demo on the happy path':
    'Sab theek chalne waale raaste par ek chalta demo',
  'A framework choice that matches what the team already uses':
    'Aisa framework jo team pehle se istemaal karti hai',
  'Failures you found yourself, with before-and-after numbers and stated residual risk':
    'Aapke khud dhoondhe hue failure, pehle-baad ke numbers aur likhe hue bache khatre ke saath',
  'Coverage of every topic in the book':
    'Kitaab ke har vishay ko chhoo lena',

  /* ---- the "Not yet" parking lot ---- */
  'Choosing between embedding models':
    'Embedding models mein se chunna',
  'Measured on your own ground truth, not on a leaderboard.':
    'Apni hi ground truth par naapkar, leaderboard par nahi.',
  'Vector database products (Pinecone, Weaviate, Chroma, pgvector)':
    'Vector database ke product (Pinecone, Weaviate, Chroma, pgvector)',
  'You built retrieval with a list and one line of arithmetic. These products add scale and filtering, not meaning.':
    'Aapne retrieval ek list aur ek line ke hisaab se banaya tha. Yeh product paimana aur chhanne ki suvidha jodte hain, matlab nahi.',
  'Reranking — re-scoring retrieved results with a second model':
    'Reranking — nikale hue nateejon ko doosre model se dobara number dena',
  'Retrieve wide, rerank narrow.':
    'Chauda nikaaliye, patla rerank kijiye.',
  'Hybrid search implementation — merging keyword and semantic':
    'Hybrid search banana — shabd aur matlab ko jodna',
  'Reciprocal rank fusion, in nine lines.':
    'Reciprocal rank fusion, nau line mein.',
  'Agents and tool-use — models that take actions':
    'Agents aur tool ka istemaal — woh models jo kaam karte hain',
  'A while-loop with a model inside, and a budget.':
    'Ek while-loop jisme model baitha ho, aur ek budget.',
  'Structured output and schema-driven generation':
    'Tay shakal ka output aur schema se chalne waala jawaab',
  'Where a demo becomes a feature.':
    'Jahan demo ek feature ban jaata hai.',
  'Prompt caching and context management':
    'Prompt caching aur context sambhalna',
  'Stable first, volatile last.':
    'Sthir cheezein pehle, badalti hui aakhir mein.',
  'Reasoning models and test-time compute':
    'Sochne waale models aur chalte waqt ka compute',
  'A purchase, made per query.':
    'Ek khareed, har sawaal par ki gayi.',
  'Prompt injection and AI security':
    'Prompt injection aur AI suraksha',
  'The lethal trifecta. No complete fix exists.':
    'Jaanleva teen ka mel. Iska koi poora ilaaj hai hi nahi.',
  'LLM-as-judge and evaluation at scale':
    'Model ko judge banana aur bade paimane par evaluation',
  'Grade the judge before you trust it.':
    'Judge par bharosa karne se pehle usi ko jaanchiye.',
  'Cost engineering and model routing':
    'Cost ki engineering aur model ka raasta chunna',
  'The four multipliers.':
    'Woh chaar cheezein jo kharcha guna kar deti hain.',
  'Multimodal — vision, documents as images, voice':
    'Multimodal — drishti, tasveer bane documents, awaaz',
  'Your corpus is pages, not text.':
    'Aapka corpus page hai, text nahi.',
  'AI regulation, model cards, governance':
    'AI ke niyam, model cards, governance',
  'Mostly product decisions wearing legal costume.':
    'Zyadatar product ke faisle, kanooni poshaak pehne hue.',
  'Fine-tuning — adjusting model weights on domain data':
    'Fine-tuning — apne data par model ke weights badalna',
  'Still parked. Almost always attempted before retrieval and evaluation have been exhausted, which is the wrong order.':
    'Abhi bhi park kiya hua. Yeh lagbhag hamesha tab aazmaya jaata hai jab retrieval aur evaluation poore nahi hue hote — aur yeh galat kram hai.',
  'Distillation and small/on-device models':
    'Distillation aur chhote ya device par chalne waale models',
  'Still parked. Becomes interesting once your evals exist — you need a way to know the small model is good enough.':
    'Abhi bhi park kiya hua. Yeh tab dilchasp hota hai jab aapke evals ban chuke hon — aapko pata hona chahiye ki chhota model kaafi achcha hai ya nahi.',
  'Multi-agent orchestration at scale':
    'Bade paimane par kai agents ka taalmel',
  'Still parked. Chapter 9\'s failure modes multiply rather than cancel.':
    'Abhi bhi park kiya hua. Chapter 9 ke bigadne ke tareeke ek doosre ko kaatte nahi, guna karte hain.',
  'GPU hosting, self-hosting, inference economics':
    'GPU hosting, khud hosting karna, inference ka arthashastra',
  'Still parked. Revisit after Chapter 15 gives you a number to beat.':
    'Abhi bhi park kiya hua. Chapter 15 jab aapko haraane ko ek number de de, tab wapas aaiye.',
  'Synthetic data generation for evals':
    'Evals ke liye banaya hua data',
  'Still parked. Tempting shortcut past Chapter 14\'s error analysis; it is not one.':
    'Abhi bhi park kiya hua. Chapter 14 ke error analysis se bachne ka lubhaavna shortcut lagta hai; hai nahi.',
  'Orchestration frameworks — LangChain, LlamaIndex and rivals':
    'Orchestration ke framework — LangChain, LlamaIndex aur unke pratidwandi',
  'Still parked, deliberately. Open their docs and ask, pain by pain: which of my hand-felt problems is this abstraction curing? That is framework literacy without framework dependency.':
    'Jaanbujhkar abhi bhi park kiya hua. Unke docs kholiye aur ek-ek takleef par poochhiye: meri kaun si khud mehsoos ki hui dikkat yeh cheez theek kar rahi hai? Yahi framework ki samajh hai, framework par nirbharta ke bina.',
  'Formal verification and guaranteed-safe agents':
    'Formal verification aur guarantee ke saath surakshit agents',
  'Still parked. Research-stage; worth watching exactly because Chapter 13 has no complete fix.':
    'Abhi bhi park kiya hua. Yeh research ke daur mein hai; dekhte rehne layak isiliye hai ki Chapter 13 ka koi poora ilaaj nahi hai.',
  '“AI strategy” think-pieces and trend articles':
    '"AI strategy" waale lekh aur trend ke article',
  'Permanently parked.':
    'Hamesha ke liye park kiya hua.',
  'Deep transformer internals':
    'Transformer ke andar ki gehri baatein',
  'Attention as “which parts of the context matter right now” is enough to hold an architecture conversation. The rest is for when you are training models, not shipping them.':
    'Attention ko "abhi context ka kaun sa hissa maayne rakhta hai" samajh lena architecture ki baat-cheet ke liye kaafi hai. Baaki tab ke liye hai jab aap model train kar rahe hon, bhej nahi rahe hon.',
  'Distributed GPU training and custom CUDA':
    'Kai GPU par training aur apna CUDA likhna',
  'A different profession. Interesting, and not on the path between you and a working system.':
    'Yeh alag pesha hai. Dilchasp hai, par aapke aur ek chalte system ke beech ke raaste par nahi.',
  'Advanced LoRA and PEFT research':
    'LoRA aur PEFT ki gehri research',
  'Chapter 22 gives you the fine-tuning boundary. Everything past that boundary waits until you have a stable, repeated behaviour worth changing weights for.':
    'Chapter 22 aapko fine-tuning ki seema deta hai. Us seema ke aage sab kuch tab tak rukta hai jab tak aapke paas koi sthir, baar-baar aane waala behaviour na ho jiske liye weights badalna vajib ho.',
  'Benchmark archaeology':
    'Purane benchmark khodna',
  'Chasing which model topped which leaderboard in which month. Your ten cases beat all of it for your decision.':
    'Yeh peechha karna ki kis maheene kaun sa model kis leaderboard par upar tha. Aapke faisle ke liye aapke das cases in sab par bhaari hain.',
  'Vector database vendor internals':
    'Vector database banane waalon ki andar ki baatein',
  'You built retrieval with arithmetic. Product internals matter when scale or filtering forces the question, and not before.':
    'Aapne retrieval saadhe hisaab se banaya tha. Product ke andar ki baatein tab maayne rakhti hain jab paimana ya chhanna yeh sawaal khada kar de — usse pehle nahi.',
  'Advanced knowledge graphs':
    'Gehre knowledge graph',
  'A real technique with a real cost. Park it until retrieval measured on your own ground truth has actually plateaued.':
    'Yeh asli tareeka hai aur iski asli keemat bhi hai. Ise tab tak park rakhiye jab tak apni ground truth par naapa gaya retrieval sach mein ruk na jaaye.',
  'Custom rerankers':
    'Apne banaye reranker',
  'Chapter 24 asks whether an off-the-shelf reranker earned its latency. Training your own is two steps past that answer.':
    'Chapter 24 poochhta hai ki bana-banaya reranker apni latency kama paya ya nahi. Apna train karna us jawaab se do kadam aage hai.',
  'Advanced multi-agent research':
    'Kai agents par gehri research',
  'Chapter 26 says start with one model and explicit tools. This is where you look only after evaluation shows the simpler design cannot get there.':
    'Chapter 26 kehta hai ek model aur saaf tools se shuru kijiye. Yahan aap tabhi dekhte hain jab evaluation dikha de ki saral design wahan pahunch hi nahi sakta.',
  'Training a model from scratch, and reproducing frontier papers':
    'Shuru se model train karna, aur naye research paper dobara banana',
  'Neither is on the route to an applied system you can defend. Both are excellent reasons to never ship one.':
    'In dono mein se koi bhi us raaste par nahi hai jo ek aise applied system tak jaata hai jise aap defend kar sakein. Dono hi ek behtareen wajah hain ki aap kabhi kuch bhejein hi na.'

});
