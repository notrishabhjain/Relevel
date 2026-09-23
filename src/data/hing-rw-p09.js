/* Hinglish: p09 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Long context windows and context engineering':
    'Lambi context windows aur context engineering',
  'Context windows are now very large, and vendors say this makes retrieval unnecessary. You will test that claim: measure how cost grows, find where the model stops using what you sent, and learn to budget, cache and compact context.':
    'Context windows ab bahut badi hain, aur vendors kehte hain ki isse retrieval ki zaroorat khatam ho jaati hai. Aap is daave ko test karenge: naapenge ki cost kaise badhti hai, dhoondhenge ki model bheje hue ka use kahan band kar deta hai, aur context ka budget, caching aur compaction seekhenge.',
  'Give two separate reasons a large context window does not remove the need for retrieval.':
    'Do alag wajahen batana ki badi context window retrieval ki zaroorat kyun khatam nahi karti.',
  'Explain why a document fitting in the request does not mean the model will use it.':
    'Samjhaana ki request mein document fit hone ka matlab yeh nahi ki model use use karega.',
  'Say what a token budget is, and which part you would cut first if the bill doubled.':
    'Batana ki token budget kya hai, aur bill doguna hone par aap pehle kaunsa hissa kaatenge.',
  'A context budget for one real feature':
    'Ek asli feature ke liye context budget',
  'Large context windows changed the marketing more than the engineering. You have measured whether the model uses what you send, and compared retrieval with sending everything. Turn that into a budget you could defend for a real feature.':
    'Badi context windows ne engineering se zyada marketing badli. Aapne naapa ki model bheje hue ka use karta hai ya nahi, aur retrieval ko sab kuchh bhejne se compare kiya. Ise ek asli feature ke liye aise budget mein badliye jise aap defend kar sakein.',
  'Pick one feature and describe what must be in the request for it to answer well.':
    'Ek feature chuniye aur bataiye ki achha jawab dene ke liye request mein kya hona zaroori hai.',
  'At three request sizes, measure what share of your questions are answered correctly, with the key fact at the start, middle and end.':
    'Teen request sizes par naapiye ki aapke kitne sawaalon ke sahi jawab aate hain, jab key fact shuru, beech aur ant mein ho.',
  'Compare sending everything with retrieving the few relevant chunks. Record accuracy, tokens and response time for both.':
    'Sab kuchh bhejne ko kuchh relevant chunks retrieve karne se compare kijiye. Dono ke liye accuracy, tokens aur response time record kijiye.',
  'Order the request for caching: stable content first, changing content last. Measure what that saves.':
    'Request ko caching ke liye kram mein lagaiye: sthir content pehle, badalne wala aakhir mein. Naapiye ki isse kitna bachta hai.',
  'Write the compaction rule for a long conversation, and note what it loses.':
    'Lambi baatcheet ke liye compaction rule likhiye, aur note kijiye ki woh kya khota hai.',
  'Write the budget: tokens per query, cost per thousand queries, and the number you would defend in a planning meeting.':
    'Budget likhiye: per query tokens, hazaar queries ki cost, aur woh number jise aap planning meeting mein defend karenge.',
  'You have accuracy figures at three positions, from your own runs.':
    'Aapke paas apne runs se teen positions par accuracy figures hain.',
  'The comparison has real numbers for both approaches, including cost.':
    'Tulna mein dono tareekon ke asli numbers hain, cost samet.',
  'You can say which approach you would ship, and name the case where you would be wrong.':
    'Aap bata sakte hain ki kaunsa tareeka ship karenge, aur us case ka naam le sakte hain jahan aap galat honge.',
  'The third gap from Chapter 7.5. This chapter explains why.':
    'Chapter 7.5 ki teesri kami. Yeh chapter samjhaata hai kyun.',
  'It limits one request; it is not memory.':
    'Yeh ek request ko seemit karti hai; yeh memory nahi hai.',
  'Chunking exists because of that limit':
    'Chunking isi limit ki wajah se hai',
  'Open a notebook called <code>chapter-10</code> and run the warm-up cells. Have your Chapter 6 answer key and Chapter 7 <code>rag_answer</code> function available.':
    '<code>chapter-10</code> naam ka notebook kholiye aur warm-up cells chalaiye. Apni Chapter 6 answer key aur Chapter 7 ka <code>rag_answer</code> function taiyaar rakhiye.',
  'Chapter 1 introduced the size limit on one request, and Chapter 3 built chunking around it. Context windows are now very large: hundreds of thousands of tokens, sometimes millions. The obvious conclusion is that you can skip retrieval and send everything.':
    'Chapter 1 ne ek request ki size limit batayi, aur Chapter 3 ne uske aas-paas chunking banayi. Context windows ab bahut badi hain: laakhon tokens, kabhi-kabhi millions. Seedha nateeja lagta hai ki aap retrieval chhod kar sab kuchh bhej sakte hain.',
  'A vendor says their large context window makes your retrieval layer unnecessary: just send the whole document set with every request. Is that true, and what would you ask to find out?':
    'Ek vendor kehta hai ki unki badi context window aapki retrieval layer ko bekaar bana deti hai: bas har request ke saath poora document set bhejiye. Kya yeh sach hai, aur pata lagaane ke liye aap kya poochhenge?',
  'No, for two separate reasons. First, cost: sending a million tokens costs a million tokens on every query. Second, a model’s ability to use what is in the request drops well before the request is full, especially for content in the middle.':
    'Nahi, do alag wajahon se. Pehli, cost: ek million tokens bhejna har query par ek million tokens ki cost hai. Doosri, request ki cheezon ka use karne ki model ki kshamata request bharne se kaafi pehle gir jaati hai, khaas kar beech ke content ke liye.',
  'The question that settles it: <em>show me your accuracy on a fact placed halfway through a full context window, compared with the same fact retrieved into a short one.</em>':
    'Faisla karne wala sawaal: <em>mujhe bhari context window ke beech rakhe fact par apni accuracy dikhaiye, chhoti window mein retrieve kiye usi fact ke muqaable.</em>',
  'Reason 1: cost does not go away':
    'Wajah 1: cost khatam nahi hoti',
  'A large request costs what a large request costs, on every query, from every user. Retrieval keeps each request small, and that keeps the cost under control.':
    'Badi request ki cost badi request ki cost hai, har query par, har user se. Retrieval har request ko chhota rakhta hai, aur isse cost kaabu mein rehti hai.',
  'Reason 2: the model does not use everything equally':
    'Wajah 2: model sab kuchh barabar use nahi karta',
  'A model’s ability to use what you sent drops well before the limit. A fact near the start of the request is found reliably. The same fact in the middle of a long request is missed much more often. There is no error; the answer is just wrong.':
    'Aapke bheje ka use karne ki model ki kshamata limit se kaafi pehle gir jaati hai. Request ke shuru ke paas ka fact bharose se mil jaata hai. Lambi request ke beech mein wahi fact kahin zyada baar chhoot jaata hai. Koi error nahi; bas jawab galat hota hai.',
  'Hide a fact at three depths':
    'Ek fact ko teen gehraiyon par chhupaaiye',
  'Before you run anything, predict how often the model will find the fact at each depth: start, middle and end. Write down three percentages. Most people predict 100% for all three.':
    'Kuchh bhi chalaane se pehle andaaza lagaiye ki model har gehraai par fact kitni baar dhoondhega: shuru, beech aur ant. Teen percentages likhiye. Zyadatar log teeno ke liye 100% kehte hain.',
  'A common result is 5/5 at 5%, 5/5 at 95%, and lower, often 2/5 or 3/5, at 50%. Your numbers are your finding. If you get 5/5 everywhere, add more filler text until you do not. The effect depends on length, and finding the length where it breaks for your model is the point of the exercise.':
    'Ek aam result hai 5% par 5/5, 95% par 5/5, aur 50% par kam, aksar 2/5 ya 3/5. Aapke numbers aapki finding hain. Agar har jagah 5/5 aaye, to tab tak filler text jodiye jab tak aisa na ho. Asar lambaai par nirbhar hai, aur apne model ke liye woh lambaai dhoondhna jahan yeh tootta hai, isi exercise ka point hai.',
  'This does not show the model is bad. It shows that “it fits” and “it works” are different claims, and only testing can check the second one.':
    'Isse yeh nahi dikhta ki model bura hai. Yeh dikhata hai ki “fit hota hai” aur “kaam karta hai” alag daave hain, aur doosre ko sirf testing check kar sakti hai.',
  'A document fitting in the context window does not mean the model will use it. Vendors usually quote capacity; you need to measure whether the model uses the content.':
    'Context window mein document fit hone ka matlab yeh nahi ki model use use karega. Vendors aam taur par capacity batate hain; aapko naapna hai ki model content ka use karta hai ya nahi.',
  'So the most important decision is what goes into the request at all, and what is left out. The wording of the instructions matters less. This is called <strong>context engineering</strong>, and much of it is a product decision.':
    'Isliye sabse zaroori faisla yeh hai ki request mein aakhir jaata kya hai, aur kya chhoda jaata hai. Instructions ki wording kam maayne rakhti hai. Ise <strong>context engineering</strong> kehte hain, aur iska bada hissa product decision hai.',
  'Compare sending everything with retrieval':
    'Sab kuchh bhejne ko retrieval se compare kijiye',
  'Take your Chapter 6 answer key. Answer all ten questions two ways: (a) with the whole document in the request, and (b) with your Chapter 7 <code>rag_answer</code> at k=3. Record accuracy, tokens and response time for both.':
    'Apni Chapter 6 answer key lijiye. Saare das sawaalon ka jawab do tarah dijiye: (a) request mein poore document ke saath, aur (b) k=3 par apne Chapter 7 ke <code>rag_answer</code> ke saath. Dono ke liye accuracy, tokens aur response time record kijiye.',
  'A typical result: similar accuracy on easy questions; better accuracy from the whole document on questions that need several distant sections; and 10 to 50 times more tokens and much slower responses. Write the sentence your own numbers support.':
    'Ek typical result: aasaan sawaalon par milti-julti accuracy; kai door ke sections wale sawaalon par poore document se behtar accuracy; aur 10 se 50 guna zyada tokens aur kaafi dheeme responses. Woh sentence likhiye jise aapke apne numbers support karte hain.',
  'Write a token budget. A feature of yours sends a system prompt, tool descriptions, retrieved chunks, the conversation so far, and the answer. Estimate the size of each and the total. Then say which part you would cut first if the bill doubled, and what would break.':
    'Token budget likhiye. Aapka ek feature system prompt, tool descriptions, retrieved chunks, ab tak ki baatcheet, aur jawab bhejta hai. Har ek ka aur kul size andaaza lagaiye. Phir bataiye ki bill doguna hone par aap pehle kaunsa hissa kaatenge, aur kya tootega.',
  'A strong answer treats the request as a budget with an owner. Retrieved chunks are usually the largest part and the easiest to shrink: fetch fewer, or add a reranking step so fewer chunks carry better content. Cutting them can break answers to questions that span several sections, so remeasure with your answer key. History is next, and cutting it breaks follow-up questions. Removing tool descriptions removes capabilities. Name what each cut puts at risk, then measure it.':
    'Mazboot jawab request ko ek owner wale budget ki tarah dekhta hai. Retrieved chunks aam taur par sabse bada aur sabse aasaani se chhota hone wala hissa hain: kam laaiye, ya reranking step jodiye taaki kam chunks mein behtar content ho. Inhe kaatne se kai sections wale sawaalon ke jawab toot sakte hain, isliye answer key se phir naapiye. Agla history hai, aur use kaatne se follow-up sawaal toot-te hain. Tool descriptions hataane se kshamatayein hat jaati hain. Har kaat kya khatre mein daalti hai uska naam lijiye, phir use naapiye.',
  'Caching: put stable content first':
    'Caching: sthir content pehle rakhiye',
  'Providers can cache the processed start of your request. If that part is identical each time, later requests are cheaper and faster. So put stable content, such as the system prompt and reference text, first, and put the parts that change, such as the question, last.':
    'Providers aapki request ke process kiye gaye shuruaati hisse ko cache kar sakte hain. Agar woh hissa har baar ek jaisa ho, to baad ki requests sasti aur tez hoti hain. Isliye sthir content, jaise system prompt aur reference text, pehle rakhiye, aur badalne wale hisse, jaise sawaal, aakhir mein.',
  'Reorder for caching':
    'Caching ke liye kram badaliye',
  'Build the same request twice: once with the stable material first and the question last, and once with the question first. Send each five times and compare response times and any cache fields in the response.':
    'Wahi request do baar banaiye: ek baar sthir material pehle aur sawaal aakhir mein, aur ek baar sawaal pehle. Har ek ko paanch baar bhejiye aur response times aur response ke cache fields compare kijiye.',
  'Where the provider supports caching, stable-first is faster from the second call on. Even if you cannot see a cache field, use this order. It costs nothing, and every caching system benefits from it.':
    'Jahan provider caching support karta hai, wahan sthir-pehle wala doosri call se tez hota hai. Cache field na dikhe tab bhi yahi kram use kijiye. Iski koi keemat nahi, aur har caching system ko isse fayda hota hai.',
  'Compaction: summarising long conversations':
    'Compaction: lambi baatcheet ka summary',
  'When a long conversation grows past its budget, a common fix is <strong>compaction</strong>: summarise the middle and keep the start and end. It works, but it reliably loses specific details from the middle.':
    'Jab lambi baatcheet apne budget se aage badhti hai, to ek aam fix hai <strong>compaction</strong>: beech ka summary banaiye aur shuru aur ant rakhiye. Yeh kaam karta hai, lekin beech ki specific details pakka kho deta hai.',
  'Test what compaction loses':
    'Test kijiye ki compaction kya khota hai',
  'Take a 20-turn conversation. Summarise turns 1–15 into 150 words, keep turns 16–20 unchanged, and ask three questions whose answers were in the summarised part.':
    '20 turns ki baatcheet lijiye. Turns 1–15 ko 150 shabdon mein summarise kijiye, turns 16–20 waise hi rakhiye, aur teen aise sawaal poochhiye jinke jawab summarise kiye hisse mein the.',
  'Questions about themes survive compaction. Questions about specific figures, names or dates usually do not. Write down which of your three failed.':
    'Themes ke sawaal compaction ke baad bach jaate hain. Specific figures, naamon ya dates ke sawaal aam taur par nahi bachte. Likhiye ki aapke teen mein se kaunse fail hue.',
  'When someone says their assistant “remembers” a user, ask where that memory is stored. It is a store the app maintains, sent with each message and paid for every time.':
    'Jab koi kahe ki unka assistant user ko “yaad rakhta” hai, to poochhiye ki woh memory kahan store hai. Yeh app ka sambhala hua ek store hai, har message ke saath bheja jaata hai aur har baar uske paise lagte hain.',
  'Reasoning models: when paying for thinking helps':
    'Reasoning models: sochne ke liye paise dena kab madad karta hai',
  'Reasoning models work through a problem before answering, and you pay for that work on every request. You will measure when it improves answers and when it only adds cost and delay.':
    'Reasoning models jawab dene se pehle problem par kaam karte hain, aur us kaam ke paise aap har request par dete hain. Aap naapenge ki yeh kab jawab sudhaarta hai aur kab sirf cost aur deri jodta hai.',
  'Say what you are buying when you turn reasoning on.':
    'Batana ki reasoning chaalu karke aap kya khareed rahe hain.',
  'Name two tasks where reasoning helps and two where it is wasted.':
    'Do tasks batana jahan reasoning madad karta hai aur do jahan bekaar jaata hai.',
  'Explain why a reasoning model given bad evidence produces a more convincing wrong answer.':
    'Samjhaana ki bure saboot wala reasoning model zyada yakeen dilaane wala galat jawab kyun deta hai.',
  'A reasoning decision table for your own requests':
    'Apni requests ke liye reasoning decision table',
  'Reasoning is a purchase, not a quality setting. You have paid for it on trivial tasks and seen it fail to fix bad retrieval. Build the decision table you would use to route real requests.':
    'Reasoning ek khareed hai, quality setting nahi. Aapne mamooli tasks par iske paise diye aur ise bure retrieval ko theek na kar paate dekha. Woh decision table banaiye jisse aap asli requests route karenge.',
  'Sort a week of realistic requests into two groups: ones with a clear right answer, and ones that need judgement.':
    'Ek hafte ki realistic requests ko do groups mein baantiye: jinka saaf sahi jawab hai, aur jinme judgement chahiye.',
  'Run both groups with reasoning on and off. That gives four cells of real outputs.':
    'Dono groups ko reasoning on aur off ke saath chalaiye. Isse asli outputs ke chaar cells milte hain.',
  'Record cost and response time for every cell, not only quality.':
    'Har cell ke liye cost aur response time record kijiye, sirf quality nahi.',
  'Find the point where the extra waiting time stops being worth the accuracy it buys for this use case.':
    'Woh point dhoondhiye jahan is use case ke liye extra intezaar uski di accuracy ke laayak nahi rehta.',
  'Find a request in your own data where reasoning does not change the answer at all but costs several times more.':
    'Apne data mein ek aisi request dhoondhiye jahan reasoning jawab bilkul nahi badalta lekin kai guna mehnga padta hai.',
  'Write the routing rule so an engineer could implement it: which requests take the expensive path, and based on what signal.':
    'Routing rule aise likhiye ki engineer use implement kar sake: kaunsi requests mehnga raasta lengi, aur kis signal ke aadhaar par.',
  'All four cells have numbers for quality, cost and response time.':
    'Chaaron cells mein quality, cost aur response time ke numbers hain.',
  'The routing rule is a clear condition.':
    'Routing rule ek saaf shart hai.',
  'You can name one request type where reasoning is wasted, and show the run that proves it.':
    'Aap ek request type bata sakte hain jahan reasoning bekaar hai, aur woh run dikha sakte hain jo ise prove karta hai.',
  'Reasoning is text, so it has a cost.':
    'Reasoning text hai, isliye uski cost hai.',
  'A request is a budget with parts':
    'Request hisson wala ek budget hai',
  'Reasoning adds another part.':
    'Reasoning ek aur hissa jodta hai.',
  'Open a new notebook called <code>chapter-11</code> and run the warm-up cells. Pick a reasoning-capable model from build.nvidia.com.':
    '<code>chapter-11</code> naam ka naya notebook kholiye aur warm-up cells chalaiye. build.nvidia.com se ek reasoning-capable model chuniye.',
  'What a reasoning model does':
    'Reasoning model kya karta hai',
  'Most models answer straight away. A <strong>reasoning model</strong> first writes out its working: it tries an approach, checks it, and backs up if needed. Then it gives the answer. You usually do not see the working, but you pay for it.':
    'Zyadatar models turant jawab dete hain. <strong>Reasoning model</strong> pehle apna kaam likhta hai: ek tareeka try karta hai, use check karta hai, aur zaroorat ho to peechhe hat-ta hai. Phir jawab deta hai. Aap aam taur par woh kaam nahi dekhte, lekin uske paise dete hain.',
  'This is called <strong>test-time compute</strong>: instead of accuracy being fixed when the model was trained, you can buy more of it for each question by letting the model work longer.':
    'Ise <strong>test-time compute</strong> kehte hain: model train hote samay accuracy fix hone ki jagah, aap har sawaal ke liye model ko zyada der kaam karne dekar aur accuracy khareed sakte hain.',
  'Compare two tasks at two settings':
    'Do settings par do tasks compare kijiye',
  'Build two tasks from your own domain: one simple lookup, and one multi-step task, such as an eligibility calculation with conditions or a reconciliation across three figures.':
    'Apne domain se do tasks banaiye: ek simple lookup, aur ek multi-step task, jaise sharton wala eligibility calculation ya teen figures ka milaan.',
  'On the lookup, the answers are almost identical, but the reasoning model uses several times more output tokens and seconds. On the multi-step task, there is often a difference in correctness, sometimes a large one. That contrast is the main point of this chapter.':
    'Lookup par jawab lagbhag ek jaise hain, lekin reasoning model kai guna zyada output tokens aur seconds leta hai. Multi-step task par aksar sahi-galat ka farq hota hai, kabhi bada. Yahi tulna is chapter ka main point hai.',
  'Before running, predict how many times more output tokens the reasoning model will use on the <em>lookup</em>. Most people guess 2×.':
    'Chalaane se pehle andaaza lagaiye ki <em>lookup</em> par reasoning model kitne guna zyada output tokens use karega. Zyadatar log 2× kehte hain.',
  'Reasoning is a purchase you make on every request, in money and waiting time. For many tasks it buys nothing.':
    'Reasoning ek khareed hai jo aap har request par karte hain, paison aur intezaar mein. Kai tasks ke liye yeh kuchh nahi khareedti.',
  'Where reasoning helps':
    'Reasoning kahan madad karta hai',
  'From your own product, name two tasks that would improve with reasoning, and two that would only get slower and more expensive.':
    'Apne product se do tasks bataiye jo reasoning se sudhrenge, aur do jo sirf dheeme aur mehnge honge.',
  'Reasoning helps with multi-step logic, calculations where each step depends on the last, code, planning, and resolving real ambiguity. It is wasted on looking things up, extracting fields, classifying, formatting, routing and summarising a passage you provided.':
    'Reasoning multi-step logic, har step pichhle par nirbhar calculations, code, planning, aur asli ambiguity sulajhaane mein madad karta hai. Yeh cheezein dhoondhne, fields nikaalne, classify karne, format karne, route karne aur diye passage ko summarise karne par bekaar hai.',
  'The pattern: reasoning helps when the answer has to be worked out. It does nothing when the answer is already in the input and only needs finding or reshaping.':
    'Pattern: reasoning tab madad karta hai jab jawab nikaalna pade. Jab jawab pehle se input mein ho aur sirf dhoondhna ya naya roop dena ho, tab yeh kuchh nahi karta.',
  'Test it on your own requests':
    'Apni requests par test kijiye',
  'Take ten real requests your feature would receive. Before testing, mark each as needing reasoning or not. Then run both models on all ten and grade the answers.':
    'Das asli requests lijiye jo aapke feature ko milengi. Test se pehle har ek ko reasoning chahiye ya nahi, mark kijiye. Phir dono models ko saare das par chalaiye aur jawab grade kijiye.',
  'Count how many of your ten land in the top-right cell. In most document workloads it is one or two. That share is the number to bring to a pricing discussion.':
    'Giniye ki aapke das mein se kitne upar-daayein cell mein aate hain. Zyadatar document workloads mein ek ya do. Yahi hissa pricing ki baatcheet mein le jaane wala number hai.',
  'Three things to watch for':
    'Teen cheezon par nazar rakhiye',
  '<strong>Reasoning does not create evidence.</strong> Give a reasoning model the wrong document and it reasons carefully, at length, from the wrong document. It produces a more convincing wrong answer than a cheap model would.':
    '<strong>Reasoning saboot nahi banata.</strong> Reasoning model ko galat document dijiye aur woh galat document se dhyaan se, vistaar se reasoning karta hai. Woh saste model se zyada yakeen dilaane wala galat jawab deta hai.',
  '<strong>Waiting time is a product problem.</strong> Reasoning takes seconds, sometimes tens of seconds. In a chat interface, that delay can be a problem however good the answer is.':
    '<strong>Intezaar ka samay product problem hai.</strong> Reasoning mein seconds lagte hain, kabhi dasiyon seconds. Chat interface mein woh deri problem ban sakti hai, jawab chahe kitna achha ho.',
  '<strong>It is not all or nothing.</strong> Most providers let you set how much reasoning to use. Decide per type of request, not once for the whole product.':
    '<strong>Yeh sab-ya-kuchh-nahi nahi hai.</strong> Zyadatar providers aapko tay karne dete hain ki kitna reasoning use ho. Har request type ke liye tay kijiye, poore product ke liye ek baar nahi.',
  'Give a reasoning model the wrong evidence':
    'Reasoning model ko galat saboot dijiye',
  'Take your Chapter 7 pipeline. Set k=1 and choose a question you know retrieves the <em>wrong</em> chunk. Answer it with the fast model, then with the reasoning model.':
    'Apni Chapter 7 pipeline lijiye. k=1 set kijiye aur aisa sawaal chuniye jiske baare mein pata hai ki woh <em>galat</em> chunk retrieve karta hai. Pehle fast model se jawab dijiye, phir reasoning model se.',
  'Both answers are wrong. The reasoning model’s answer is longer and better justified, so a reviewer is more likely to believe it. Write one sentence on what this means for how answers are reviewed.':
    'Dono jawab galat hain. Reasoning model ka jawab lamba aur behtar tark wala hai, isliye reviewer uska yakeen karne ki zyada sambhavna hai. Ek sentence likhiye ki jawabon ke review ke liye iska kya matlab hai.',
  'Measure the slowest responses':
    'Sabse dheeme responses naapiye',
  'Run your multi-step task ten times with reasoning on, and record every response time. Sort them, and note the median and the slowest.':
    'Apna multi-step task reasoning on ke saath das baar chalaiye, aur har response time record kijiye. Unhe sort kijiye, aur median aur sabse dheema note kijiye.',
  'The slowest is usually two to three times the median. <strong>Users notice the slow responses, not the median.</strong> Record both numbers. You will need the slowest for Chapter 15 and for any service-level discussion.':
    'Sabse dheema aam taur par median ka do-teen guna hota hai. <strong>Users dheeme responses notice karte hain, median nahi.</strong> Dono numbers record kijiye. Sabse dheema aapko Chapter 15 aur kisi bhi service-level baatcheet ke liye chahiye.',
  'Write a routing rule. For one feature you own: which requests get reasoning, which do not, and what measurement would show the rule is wrong?':
    'Routing rule likhiye. Apne ek feature ke liye: kaunsi requests ko reasoning milta hai, kinko nahi, aur kaunsa measurement dikhayega ki rule galat hai?',
  'Reasoning when … not when … I would know I was wrong if …':
    'Reasoning jab … nahi jab … mujhe pata chalega ki main galat tha agar …',
  'A strong rule routes on something you can detect <em>before</em> answering: the type of question, how many items it mentions, whether it involves arithmetic, or whether retrieval returned conflicting chunks. It also says what would prove it wrong. For example: the group without reasoning scoring lower than the reasoning group on the same questions, or reasoning responses taking longer than the interface can handle.':
    'Mazboot rule us cheez par route karta hai jise aap jawab dene se <em>pehle</em> pehchaan sakein: sawaal ka type, woh kitni cheezon ka zikr karta hai, arithmetic hai ya nahi, ya retrieval ne aapas mein takraate chunks lautaaye ya nahi. Yeh yeh bhi batata hai ki use galat kya saabit karega. Jaise: bina reasoning wala group usi sawaalon par reasoning group se kam score kare, ya reasoning responses interface ki sehan-shakti se zyada der lein.',
  'Use reasoning on a trivial task':
    'Mamooli task par reasoning use kijiye',
  'Give the reasoning model a trivial task: <em>“Classify this sentence as complaint, query, or compliment.”</em> Run it five times at maximum effort.':
    'Reasoning model ko ek mamooli task dijiye: <em>“Is sentence ko complaint, query ya compliment mein classify karo.”</em> Ise maximum effort par paanch baar chalaiye.',
  'You see long working, and sometimes a worse answer than the fast model gave, because it second-guesses an obvious classification. Overthinking is real, and you have just measured it.':
    'Aapko lamba kaam dikhta hai, aur kabhi fast model se bura jawab, kyunki woh ek saaf classification par shak karta hai. Zaroorat se zyada sochna asli hai, aur aapne abhi use naapa.'

});
