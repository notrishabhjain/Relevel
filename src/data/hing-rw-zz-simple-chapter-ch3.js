/* Hinglish for Chunking: splitting documents into pieces (chapter:ch3), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Pick a document of five to fifteen pages. Write five questions about it. Cut it into three giant pieces. Guess which piece will hold each answer.':
    'Paanch se pandrah page ka ek document chuniye. Uske baare mein paanch sawaal likhiye. Use teen bade tukdon mein kaatiye. Andaza lagaiye ki har jawaab kis tukde mein milega.',
  'Cut it again into fifteen or twenty equal pieces. Then cut it into pieces a person would choose. Each time, note two things: is the answer whole, and did a cut tear something apart?':
    'Use phir se pandrah ya bees barabar tukdon mein kaatiye. Phir aise tukdon mein kaatiye jaise koi insaan kaatega. Har baar do cheezein likhiye: kya jawaab poora hai, aur kya kisi cut ne kuch phaad diya?',
  'Find a rule that got cut away from its exception. Or find steps that got cut away from their warning.':
    'Aisa niyam dhoondhiye jo apne apwaad (exception) se alag ho gaya. Ya aise steps dhoondhiye jo apni chetavni (warning) se alag ho gaye.',
  'A chunking sheet (how you cut text into pieces) with your three rounds, and the rule you learned from them.':
    'Ek chunking sheet (text ko tukdon mein kaatna) jismein aapke teeno round hon, aur woh niyam jo aapne unse seekha.',
  'Explain why you chose your chunking strategy, using what you saw, not a ready-made setting.':
    'Samjhaiye ki aapne apni chunking strategy kyun chuni, jo aapne dekha uske aadhar par, kisi bane-banaye setting par nahi.',
  'A model can read only a small amount of text at one time, like a desk that holds only a few pages. So a long document is cut into small pieces called chunks (like index cards). Today you cut one document three ways by hand. You will see what each cut loses.':
    'Model ek baar mein thoda sa text hi padh sakta hai, jaise ek mez par kuch hi page aate hain. Isliye lambe document ko chhote tukdon mein kaatte hain, jinhe chunks kehte hain (index cards jaisa). Aaj aap ek document ko haath se teen tareeke se kaatenge. Dekhenge ki har cut mein kya kho jata hai.',
  'Give the two reasons you cannot send a model every document you have.':
    'Woh do wajah batayiye jinki wajah se aap model ko apne saare documents nahi bhej sakte.',
  'Say what gets lost when you cut a document into chunks. Give one real example.':
    'Batayiye ki document ko chunks mein kaatne par kya kho jata hai. Ek asli example dijiye.',
  'Pick a chunking approach by naming the failure you accept. No chunk size is right for every document.':
    'Chunking ka tareeka chuniye aur batayiye ki aap kaun si galti maan rahe hain. Har document ke liye koi ek chunk size sahi nahi hota.',
  'Decide how to cut long text without splitting an ID in half':
    'Tay kijiye ki lambe text ko kaise kaatein ki koi ID beech se na toote',
  'People will paste long messages and whole documents into the tool. Before the tool checks a long text, it must cut it into pieces. A bad cut can break a number or a name in the middle. Then no piece holds the whole thing. You learned why we cut, what a cut loses, and that no piece size fits every document. Now you will make a cutting rule for the project, by hand.':
    'Log tool mein lambe message aur poore documents paste karenge. Tool jaanchne se pehle lambe text ko tukdon mein kaatega. Kharaab cut kisi number ya naam ko beech mein tod sakta hai. Phir kisi bhi tukde mein poori cheez nahi hoti. Aapne seekha ki hum kyun kaatte hain, cut mein kya khota hai, aur koi ek size sab documents ke liye theek nahi. Ab aap project ke liye haath se ek cutting rule banayenge.',
  'You write by hand. No code. You need pen, paper and scissors, just like in the chapter. Write your rule in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 3.':
    'Haath se likhna hai. Koi code nahi. Chapter jaise hi pen, kaagaz aur kainchi chahiye. Apna rule neeche notes box mein likhiye. Route ke liye chhota version, kareeb 20 minute: steps 1, 2 aur 3.',
  'Write a long message of about 15 lines, like a customer complaint. Put in a name, an address, an Aadhaar number in groups of four (4321 5678 9012) and a mobile number. Spread them over different lines. Use made-up details. Print it.':
    'Kareeb 15 lines ka lamba message likhiye, jaise ek customer ki shikayat. Usmein ek naam, ek pata, chaar-chaar ke groups mein Aadhaar number (4321 5678 9012) aur ek mobile number daliye. Inhe alag-alag lines mein rakhiye. Jhoothe details use kijiye. Print kijiye.',
  'Cut it three ways: every five lines, at every full stop, and at every blank line (a new paragraph). Use scissors.':
    'Use teen tareeke se kaatiye: har paanch line par, har full stop par, aur har khaali line (naye paragraph) par. Kainchi use kijiye.',
  'After each way of cutting, look at every piece. Did an ID or a name get torn across two pieces, so neither piece has the whole thing? Write down which cut broke what.':
    'Har tareeke ke baad har tukda dekhiye. Kya koi ID ya naam do tukdon mein tut gaya, ki kisi mein poora nahi hai? Likhiye ki kaun sa cut kya tod raha hai.',
  'Try one more way: overlapping pieces. Repeat the last two lines of each piece at the start of the next one. Does this mend the broken IDs? What does it cost?':
    'Ek aur tareeka aazmaiye: overlap wale tukde. Har tukde ki aakhri do lines agle tukde ki shuruaat mein dobara likhiye. Kya isse tooti hui IDs jud jaati hain? Isme kharch kya aata hai?',
  'Write your cutting rule in three lines. Someone else should be able to use it on thousands of messages without asking you. Say: how big each piece is, where a cut is allowed, and how much overlap to keep.':
    'Apna cutting rule teen lines mein likhiye. Koi aur use hazaaron messages par bina aapse poochhe laga sake. Likhiye: har tukda kitna bada hoga, cut kahan allowed hai, aur kitna overlap rakhna hai.',
  'Test your rule on the messiest message you can make. For example, a number broken across two lines. Say what still goes wrong.':
    'Apna rule sabse uljhe message par aazmaiye. Jaise ek number jo do lines mein toota ho. Likhiye ki ab bhi kya galat hota hai.',
  'Your long message, printed and cut three ways.':
    'Aapka lamba message, print kiya hua aur teen tareeke se kata hua.',
  'A note on which cut broke which detail.':
    'Ek note ki kaun sa cut kaun si detail todta hai.',
  'The overlap test, and what it costs.':
    'Overlap ka test, aur uska kharch.',
  'A three-line cutting rule, and the one case it still gets wrong.':
    'Teen line ka cutting rule, aur woh ek case jo woh ab bhi galat karta hai.',
  'Models have a size limit':
    'Model ki ek size limit hoti hai',
  'Everything you send in one call must fit on the model\'s desk (the context window).':
    'Ek call mein jo bhi bhejte hain woh model ki mez (context window) par fit hona chahiye.',
  'You pay for every token (every small brick of text) on every call.':
    'Har call mein har token (text ki har chhoti eent) ke paise lagte hain.',
  'Models make up answers when they have no proof in front of them':
    'Jab model ke saamne koi saboot nahi hota, woh jawaab gadh leta hai',
  'So the fix is to put the real pages in front of them.':
    'Isliye ilaaj yeh hai ki unke saamne asli pages rakhein.',
  'This chapter has no code. Print one real document you know well, like a policy, a contract or a set of steps, five to fifteen pages long. Keep scissors and a pen close. You do every step by hand. No document to use? Print up to fifteen pages of the Digital Personal Data Protection Act, 2023. It is public and full of rules with exceptions. Later chapters can use it again.':
    'Is chapter mein code nahi hai. Ek asli document print kijiye jise aap achhe se jaante hain, jaise policy, contract ya steps ka list, paanch se pandrah page. Kainchi aur pen paas rakhiye. Har step haath se karna hai. Koi document nahi hai? Digital Personal Data Protection Act, 2023 ke pandrah page tak print kijiye. Yeh public hai aur isme exceptions wale bahut rules hain. Aage ke chapters mein ise dobara use kar sakte hain.',
  'Until now, every document you gave a model was short. You could paste it right into your message. Real work is not like that. Companies have handbooks, policies and years of contracts. Today you see why you cannot hand all of that to a model. Then you see what happens when you cut it into pieces.':
    'Ab tak jo bhi document aapne model ko diya woh chhota tha. Aap use seedha message mein paste kar sakte the. Asli kaam aisa nahi hota. Companies ke paas handbooks, policies aur saalon ke contracts hote hain. Aaj dekhenge ki yeh sab model ko kyun nahi de sakte. Phir dekhenge ki unhe tukdon mein kaatne par kya hota hai.',
  'This is a short chapter where you work with your hands. Everything after it builds on it.':
    'Yeh chhota chapter hai jismein aap haath se kaam karte hain. Iske baad ka sab kuch isi par tikta hai.',
  'Write your test questions first':
    'Pehle apne test ke sawaal likhiye',
  'Do this before you cut anything. Write five questions a real user would ask about this document. Write them like someone in a hurry types them, not as topics.':
    'Kuch bhi kaatne se pehle yeh kijiye. Paanch sawaal likhiye jo koi asli user is document ke baare mein poochhega. Unhe aise likhiye jaise jaldi mein koi type karta hai, topic ki tarah nahi.',
  'You now have five questions on paper. You will check every cut in this chapter against them. You wrote them first, so you cannot pick questions that make your cuts look good.':
    'Ab aapke paas kaagaz par paanch sawaal hain. Is chapter ka har cut aap inhi se jaanchenge. Inhe pehle likha hai, isliye aap aise sawaal nahi chun sakte jo aapke cuts ko achha dikhayein.',
  'Why you cannot send everything':
    'Hum sab kuch kyun nahi bhej sakte',
  'Say you want a model to answer questions about your company\'s documents. The easy idea is to send it all the documents, like handing a student the whole cupboard of files. This fails for two reasons you already know.':
    'Maan lijiye aap chahte hain ki model aapki company ke documents ke baare mein sawaalon ka jawaab de. Aasaan idea hai ki saare documents bhej do, jaise student ko files ki poori almari de do. Yeh do wajah se fail hota hai, jo aap pehle se jaante hain.',
  'First, it will not fit. Every request has a size limit, like a desk that holds only so many pages. Second, you pay for every token you send, on every question. Even if a big document fits, sending your whole library for one question costs far too much.':
    'Pehli wajah: woh fit nahi hoga. Har request ki size limit hoti hai, jaise mez par bas utne hi page aate hain. Doosri wajah: har sawaal par jitne token bhejte hain sab ke paise lagte hain. Bada document fit bhi ho jaye, to ek sawaal ke liye poori library bhejna bahut mehnga padta hai.',
  'So the usual way is this. Cut each document into pieces. Keep the pieces. For each question, send only the few that look right. It is like giving a student three index cards, not the whole book. The pieces are called <strong>chunks</strong>. Cutting is called <strong>chunking</strong>.':
    'Isliye aam tareeka yeh hai. Har document ko tukdon mein kaatiye. Tukde sambhaal kar rakhiye. Har sawaal par sirf woh kuch tukde bhejiye jo sahi lagte hain. Jaise student ko poori kitaab nahi, teen index cards dena. In tukdon ko <strong>chunks</strong> kehte hain. Kaatne ko <strong>chunking</strong> kehte hain.',
  'The hard part is deciding where to cut. Try three ways of cutting in this tool, and watch what breaks.':
    'Mushkil baat yeh hai ki kahan kaatna hai. Is tool mein cutting ke teen tareeke aazmaiye, aur dekhiye kya toot-ta hai.',
  'Now do the same by hand, on your own document, in three rounds.':
    'Ab wahi kaam haath se kijiye, apne document par, teen round mein.',
  'Round 1: three large chunks':
    'Round 1: teen bade chunks',
  'Cut the document into thirds':
    'Document ko teen hisson mein kaatiye',
  'Cut your document into three rough pieces. Do not care about headings or topics. Then take your five questions, one at a time. Find which piece holds each answer.':
    'Apne document ko mote taur par teen tukdon mein kaatiye. Headings ya topics ki fikar mat kijiye. Phir apne paanch sawaal ek-ek karke lijiye. Dhoondhiye ki har jawaab kis tukde mein hai.',
  'Every answer is whole. But for a two-line answer, you send a third of the document. Note how much extra text comes along with each answer. You pay for that extra text on every question.':
    'Har jawaab poora hai. Lekin do line ke jawaab ke liye aap document ka teesra hissa bhejte hain. Likhiye ki har jawaab ke saath kitna faaltu text aata hai. Har sawaal par us faaltu text ke paise lagte hain.',
  'Round 2: twenty small chunks':
    'Round 2: bees chhote chunks',
  'Big pieces waste money, so try small ones next.':
    'Bade tukde paise barbaad karte hain, isliye ab chhote tukde aazmaiye.',
  'Cut the document into small pieces':
    'Document ko chhote tukdon mein kaatiye',
  'Take a fresh copy. Cut it into fifteen or twenty pieces, about every 150 words, even if a cut lands in the middle of a sentence. Ask your five questions again. Look for two problems.':
    'Ek nayi copy lijiye. Use pandrah ya bees tukdon mein kaatiye, kareeb har 150 words par, chahe cut kisi sentence ke beech mein pade. Apne paanch sawaal dobara poochhiye. Do problems dhoondhiye.',
  '<strong>A split answer:</strong> the answer is now in two pieces. For example, a rule is on one card and its exception is on the next.':
    '<strong>Do hisson mein bata jawaab:</strong> jawaab ab do tukdon mein hai. Jaise niyam ek card par hai aur uska apwaad (exception) agle card par.',
  '<strong>An orphan:</strong> a piece that makes no sense alone, like “The aforesaid amount shall lapse.” Which amount?':
    '<strong>Ek anaath tukda:</strong> aisa tukda jo akela samajh nahi aata, jaise “The aforesaid amount shall lapse.” Kaun si amount?',
  'You will find both problems in a document you picked yourself. Keep these cards. Chapters 4 and 5 use these exact pieces.':
    'Dono problems aapko apne chune hue document mein bhi milengi. Yeh cards sambhaal kar rakhiye. Chapters 4 aur 5 mein yahi tukde kaam aayenge.',
  'Your rule, and what it will get wrong':
    'Aapka rule, aur woh kya galat karega',
  'Think of a document you know well, like a policy, a contract or a spec. Write the rule you would give a helper for cutting it. Then name one question your rule will answer badly.':
    'Ek document sochiye jise aap achhe se jaante hain, jaise policy, contract ya spec. Woh rule likhiye jo aap kisi madadgaar ko use kaatne ke liye denge. Phir ek aisa sawaal batayiye jisse aapka rule kharaab tareeke se sambhalega.',
  'Most sensible rules fail in the same place. Think of cutting at paragraphs, headings or numbered clauses. A rule and its exception land in different pieces. If only the rule is picked, the answer sounds sure but is incomplete. That is worse than no answer.':
    'Zyadatar samajhdaar rules ek hi jagah fail hote hain. Sochiye paragraph, headings ya numbered clauses par kaatna. Niyam aur uska apwaad alag tukdon mein pahunch jaate hain. Agar sirf niyam utha liya jaye, to jawaab pakka lagta hai par adhoora hota hai. Yeh bina jawaab se bhi bura hai.',
  'No rule is free of failures. So know which questions your rule handles badly, and test those questions on purpose.':
    'Koi bhi rule bina galti ke nahi hota. Isliye jaaniye ki aapka rule kaun se sawaal kharaab sambhalta hai, aur un sawaalon ko jaanbujhkar aazmaiye.',
  'Orphaned chunks lose their meaning':
    'Anaath chunks apna matlab kho dete hain',
  'The second problem is harder to see. Some pieces stop making sense once you cut them out. Take a chunk that starts <em>the aforesaid amount shall be disbursed within sixty days</em>. Alone, it is useless. Which amount? Paid to whom? The answer sits in the piece before it.':
    'Doosri problem pakadna mushkil hai. Kuch tukde kaat dene par samajh aana band kar dete hain. Ek chunk lijiye jo shuru hota hai <em>the aforesaid amount shall be disbursed within sixty days</em> se. Akela yeh bekaar hai. Kaun si amount? Kisko milegi? Jawaab pichhle tukde mein hai.',
  'Documents are full of such pointers, especially legal text. Words like “the above”, “this scheme” or “such cases” do the same. A person reading remembers the paragraph before. A chunk does not remember anything.':
    'Documents mein aise ishare bhare hote hain, khaaskar kanooni text mein. “The above”, “this scheme” ya “such cases” jaise shabd bhi yahi karte hain. Padhne wala insaan pichhla paragraph yaad rakhta hai. Ek chunk kuch yaad nahi rakhta.',
  'Round 3: cut along the structure':
    'Round 3: document ke dhaanche ke hisaab se kaatiye',
  'You have seen what goes wrong when cuts ignore the document. So in the last round, cut the way a sensible person would.':
    'Aapne dekh liya ki document ki parwaah na karne wale cuts mein kya bigadta hai. Isliye aakhri round mein aise kaatiye jaise ek samajhdaar insaan kaatega.',
  'Cut the way you think it should be cut':
    'Aise kaatiye jaise aapko theek lage',
  'Take a fresh copy. Cut it the way you think is right. Do not overthink. Then look at what you did.':
    'Ek nayi copy lijiye. Use waise kaatiye jaise aapko sahi lage. Zyada mat sochiye. Phir dekhiye ki aapne kya kiya.',
  'You probably followed headings and clause numbers. Your pieces have very different sizes, but each one makes sense alone. Write one sentence about the rule you used. This is <strong>structure-aware chunking</strong>: cutting where the document\'s own layout says to. There is another way, called semantic chunking: cutting where the topic changes.':
    'Shayad aapne headings aur clause numbers ke saath-saath kaata. Aapke tukde alag-alag size ke hain, par har ek akela bhi samajh aata hai. Us rule par ek sentence likhiye. Isse <strong>structure-aware chunking</strong> kehte hain: wahan kaatna jahan document ka apna dhaancha kehta hai. Ek aur tareeka hai, semantic chunking: wahan kaatna jahan topic badalta hai.',
  'No chunk size is right for every document. Each size fails in its own way. So choose by looking at your documents and at what your users ask.':
    'Kisi bhi chunk size ko har document ke liye sahi nahi kaha ja sakta. Har size apne tareeke se fail hota hai. Isliye apne documents aur apne users ke sawaal dekhkar chuniye.',
  'In a design review, say which failure you picked and why. People keep asking for the one right chunk size. There is none.':
    'Design review mein batayiye ki aapne kaun si galti chuni aur kyun. Log ek sahi chunk size maangte rehte hain. Aisa koi size hai hi nahi.',
  'Say your trade-off (what you give up to get something). For your document: how big are your pieces, what do you gain, and what do you lose? Write the sentence you would say in a meeting.':
    'Apna trade-off batayiye (kuch paane ke liye kya chhodna padta hai). Apne document ke liye: tukde kitne bade hain, kya milta hai, aur kya jaata hai? Woh sentence likhiye jo aap meeting mein bolenge.',
  'We are cutting at … which gains … and loses …':
    'Hum … par kaat rahe hain, jisse … milta hai aur … khota hai.',
  'A strong answer names a real loss for your documents. For example: “Clause by clause, with a couple of sentences of overlap. That gives exact answers to questions about one clause. But it loses answers that need a clause and its exception together, so we test those on purpose.” If you cannot name the loss, you took a ready-made setting. You did not choose.':
    'Majboot jawaab mein aapke documents ka asli nuksaan hota hai. Jaise: “Clause by clause, with a couple of sentences of overlap. That gives exact answers to questions about one clause. But it loses answers that need a clause and its exception together, so we test those on purpose.” Agar aap nuksaan nahi bata paate, to aapne bana-banaya setting le liya. Aapne chuna nahi.',
  'You cannot send a model everything, because of the size limit and the cost. So you cut documents into chunks, like index cards from a book. Every way of cutting loses something. An answer may split in two, or a piece may mean nothing alone. So choose how to cut by naming the failure you accept.':
    'Aap model ko sab kuch nahi bhej sakte, kyunki size limit hai aur kharch bhi. Isliye documents ko chunks mein kaatte hain, jaise kitaab se index cards. Kaatne ka har tareeka kuch khota hai. Jawaab do hisson mein bat sakta hai, ya koi tukda akele mein matlab hi nahi rakhta. Isliye cutting ka tareeka chuniye aur batayiye ki aap kaun si galti maan rahe hain.',
  'Next, in Chapter 4, you will look at the simplest way to find the right chunk for a question: matching the same words. You will see where it fails.':
    'Aage Chapter 4 mein aap sawaal ke liye sahi chunk dhoondhne ka sabse simple tareeka dekhenge: wahi shabd match karna. Dekhenge ki woh kahan fail hota hai.',
});
