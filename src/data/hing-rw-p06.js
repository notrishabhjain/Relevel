/* Hinglish: p06 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Embeddings: searching by meaning':
    'Embeddings: matlab se search karna',
  'An embedding turns text into a list of numbers that places it on a map of meanings. Texts that mean similar things get similar numbers, even when they share no words. You will build this in code and use it on the questions keyword search failed.':
    'Embedding text ko numbers ki ek list mein badalta hai jo use matlabon ke ek naqshe par jagah deti hai. Milte-julte matlab wale texts ko milte-julte numbers milte hain, chahe unme koi shabd common na ho. Aap ise code mein banayenge aur un sawaalon par use karenge jin par keyword search fail hua.',
  'Explain in plain words how a computer can tell that two differently worded sentences mean the same thing.':
    'Seedhe shabdon mein samjhaana ki computer kaise bata sakta hai ki alag shabdon wale do sentences ka matlab ek hai.',
  'Name a place where embeddings would fail on your own company’s vocabulary.':
    'Aisi jagah bata paana jahan embeddings aapki company ki shabdavali par fail honge.',
  'Compare keyword and meaning search on your own document':
    'Apne document par keyword aur matlab wale search ki tulna kijiye',
  'You have run both methods on the same cards with the same questions: by hand in Chapter 4, and in code here. Few people have this comparison for their own documents. Write it up properly, including any case where the new method does worse.':
    'Aapne dono tareeke ek hi cards par ek hi sawaalon ke saath chalaaye: Chapter 4 mein haath se, aur yahan code mein. Kam logon ke paas apne documents ke liye yeh tulna hoti hai. Ise theek se likhiye, un cases samet jahan naya tareeka bura kare.',
  'Make one table of all eight questions: the rank keyword search gave the correct card, and the rank meaning search gives it now.':
    'Saare aath sawaalon ki ek table banaiye: keyword search ne sahi card ko kaunsa rank diya, aur matlab wala search ab kaunsa deta hai.',
  'Check your exact-code question. If it got worse, that is a reason to combine both methods (hybrid search) on your data. Note it in one line.':
    'Apna exact-code wala sawaal check kijiye. Agar woh bigda, to yeh aapke data par dono tareeke milaane (hybrid search) ki wajah hai. Ek line mein note kijiye.',
  'Test your second language properly: embed a domain term and its translation, compute the similarity, then run two or three real questions in that language.':
    'Apni doosri bhasha ko theek se test kijiye: ek domain term aur uske anuvaad ka embedding banaiye, similarity nikaaliye, phir us bhasha mein do-teen asli sawaal chalaiye.',
  'Write the result in three bullets: where meaning search helps your users, where it is weak, and what you would check before trusting it in production.':
    'Result teen bullets mein likhiye: matlab wala search aapke users ki kahan madad karta hai, kahan kamzor hai, aur production mein bharosa karne se pehle aap kya check karenge.',
  'Ask three questions the document cannot answer, and record the top scores. Chapter 6 uses these numbers to set a threshold.':
    'Teen aise sawaal poochhiye jinka jawab document nahi de sakta, aur top scores record kijiye. Chapter 6 in numbers se threshold tay karta hai.',
  'Write four or five sentences a non-technical colleague could follow: how the system finds meaning, and why “it found something” does not mean “the answer exists”.':
    'Chaar-paanch sentences likhiye jo ek non-technical colleague samajh sake: system matlab kaise dhoondhta hai, aur “kuchh mila” ka matlab “jawab maujood hai” kyun nahi.',
  'The table has both ranks for all eight questions, from runs you did.':
    'Table mein saare aath sawaalon ke dono ranks hain, aapke chalaaye runs se.',
  'You have a measured number for how your second language behaves.':
    'Aapki doosri bhasha kaise behave karti hai, iska aapke paas naapa hua number hai.',
  'You can name one thing meaning search did not fix, and point to the run that shows it.':
    'Aap ek cheez bata sakte hain jo matlab wale search ne theek nahi ki, aur us run par ungli rakh sakte hain jo ise dikhata hai.',
  'This chapter turns the idea into real code.':
    'Yeh chapter idea ko asli code mein badalta hai.',
  'Keyword search cannot see meaning':
    'Keyword search matlab nahi dekh sakta',
  'Two sentences with the same meaning and no shared words do not match.':
    'Ek matlab wale do sentences jinme koi shabd common nahi, match nahi hote.',
  'It ranks everything and returns a top result regardless.':
    'Yeh sab kuchh rank karta hai aur har haal mein top result deta hai.',
  'Open a notebook called <code>chapter-5</code> and run the three warm-up cells from <a href="#/setup">Setup</a>. Have the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.':
    '<code>chapter-5</code> naam ka notebook kholiye aur <a href="#/setup">Setup</a> ke teen warm-up cells chalaiye. Chapter 3 ke bees cards aur Chapter 4 ke teen mushkil sawaal taiyaar rakhiye. Yeh Part I ka sabse lamba hands-on chapter hai, isliye ise ek poori baithak dijiye.',
  'A map of meanings':
    'Matlabon ka naqsha',
  'You need a way to match meaning instead of spelling. That sounds like it requires a computer that understands language. The actual method is simpler.':
    'Aapko spelling ki jagah matlab milaane ka tareeka chahiye. Lagta hai iske liye bhasha samajhne wala computer chahiye. Asli tareeka isse simple hai.',
  'Imagine a very large map where every sentence has a position. Sentences with similar meanings sit close together, and unrelated sentences sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are close, even though they share no words.':
    'Ek bahut bada naqsha sochiye jahan har sentence ki ek jagah hai. Milte-julte matlab wale sentences paas-paas hote hain, aur be-rishte wale door. <em>Mera paisa kab wapas milega</em> aur <em>reimbursement of approved claims</em> paas hain, jabki unme koi shabd common nahi.',
  'A separate, smaller model places text on this map. You give it text, and it returns a long list of numbers: the text’s coordinates. That list is called an <strong>embedding</strong>, and the model that makes it is an <strong>embedding model</strong>.':
    'Ek alag, chhota model text ko is naqshe par rakhta hai. Aap use text dete hain, aur woh numbers ki lambi list lautata hai: text ke coordinates. Us list ko <strong>embedding</strong> kehte hain, aur use banaane wale model ko <strong>embedding model</strong>.',
  'Once every chunk has a position, finding relevant chunks becomes a distance calculation. Get the position of the question, then find the chunks closest to it. Comparing two positions gives one number: how similar they are. Try it here:':
    'Jab har chunk ki ek jagah ho jaaye, to relevant chunks dhoondhna doori ka hisaab ban jaata hai. Sawaal ki jagah nikaaliye, phir usse sabse paas ke chunks dhoondhiye. Do jagahon ki tulna ek number deti hai: woh kitne milte-julte hain. Yahan try kijiye:',
  'Predict before you check: <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share no words. How similar will they score?':
    'Check karne se pehle andaaza lagaiye: <em>mera paisa kab wapas milega?</em> aur <em>disbursement of approved claim amounts</em> mein koi shabd common nahi. Inka similarity score kitna aayega?',
  'High, usually above 0.6 and often near 0.8. The position comes from meaning, so two texts that mean the same thing land close together, however they are worded.':
    'Zyada, aam taur par 0.6 se upar aur aksar 0.8 ke paas. Jagah matlab se aati hai, isliye ek matlab wale do texts paas aate hain, chahe unki wording kaisi bhi ho.',
  'Watch out with this scale. The score can run from −1 to 1, but real text rarely scores below about 0.1. So 0.5 does not mean “half similar”; it is near the low end of the useful range. A similarity number means little unless you also know what clearly good and clearly bad matches score.':
    'Is scale ke saath dhyaan rakhiye. Score −1 se 1 tak ja sakta hai, lekin asli text shayad hi kabhi 0.1 se neeche aata hai. Isliye 0.5 ka matlab “aadha milta-julta” nahi; yeh kaam ki range ke neeche wale sire ke paas hai. Similarity number tab tak kam maayne rakhta hai jab tak aapko na pata ho ki saaf achhe aur saaf bure matches ka score kya aata hai.',
  'Build it in code':
    'Ise code mein banaiye',
  'Create embeddings and compare them':
    'Embeddings banaiye aur compare kijiye',
  'Type this carefully. It is the most important code in Part I. It turns text into an embedding, then measures how similar two embeddings are.':
    'Ise dhyaan se type kijiye. Yeh Part I ka sabse zaroori code hai. Yeh text ko embedding mein badalta hai, phir naapta hai ki do embeddings kitne milte-julte hain.',
  'Each embedding has 1,024 numbers. <code>contract</code>, <code>agreement</code> and <code>MoU</code> score high with each other, around 0.5 to 0.8. Every pair that includes <code>sandwich</code> scores clearly lower. You have just measured meaning with one line of arithmetic.':
    'Har embedding mein 1,024 numbers hain. <code>contract</code>, <code>agreement</code> aur <code>MoU</code> aapas mein zyada score karte hain, lagbhag 0.5 se 0.8. <code>sandwich</code> wala har pair saaf taur par kam score karta hai. Aapne abhi arithmetic ki ek line se matlab naapa.',
  'Questions and passages are embedded differently':
    'Sawaalon aur passages ke embeddings alag tarah bante hain',
  'A question is short and phrased as a question. The passage that answers it is longer and phrased as a statement. Good embedding models are trained with this difference in mind, and expect you to say which one you are embedding. If you get this wrong, nothing breaks, but results get quietly worse.':
    'Sawaal chhota hota hai aur sawaal ki tarah likha hota hai. Uska jawab dene wala passage lamba hota hai aur bayaan ki tarah likha hota hai. Achhe embedding models is farq ko dhyaan mein rakh kar train hote hain, aur chahte hain ki aap bataayein ki kya embed kar rahe hain. Agar yeh galat ho, to kuchh nahi tootta, lekin results chupchaap bigad jaate hain.',
  'Search your own chunks by meaning':
    'Apne chunks ko matlab se search kijiye',
  'Rerun the questions keyword search failed':
    'Jin sawaalon par keyword search fail hua unhe phir chalaiye',
  'Paste in the text of the cards you cut in Chapter 3, as a list, and create an embedding for each one.':
    'Chapter 3 mein kaate cards ka text list ki tarah paste kijiye, aur har ek ka embedding banaiye.',
  'Questions that scored zero with keyword search may now rank the correct card much higher. Run all three harder questions and compare with your handwritten rankings. The second-language result depends on this model and your documents, so write down the actual ranks and scores.':
    'Jo sawaal keyword search mein zero score kar rahe the, woh ab sahi card ko kaafi upar rank kar sakte hain. Teeno mushkil sawaal chalaiye aur apni haath ki rankings se compare kijiye. Doosri bhasha ka result is model aur aapke documents par nirbhar hai, isliye asli ranks aur scores likhiye.',
  'Ask something the document does not cover':
    'Kuchh aisa poochhiye jo document cover nahi karta',
  'Ask a question the document cannot answer. Not a hard question; an unrelated one.':
    'Aisa sawaal poochhiye jiska jawab document nahi de sakta. Mushkil sawaal nahi; be-rishta sawaal.',
  'Three chunks come back anyway, with scores around 0.2 to 0.4 that do not obviously look wrong. Search still never says “nothing here”. And without a baseline, you cannot yet tell a low score from a normal one. Chapter 6 builds that baseline.':
    'Phir bhi teen chunks aate hain, 0.2 se 0.4 ke aas-paas scores ke saath jo saaf galat nahi lagte. Search ab bhi kabhi “yahan kuchh nahi” nahi kehta. Aur baseline ke bina aap abhi kam score ko normal se alag nahi kar sakte. Chapter 6 woh baseline banata hai.',
  'Where embeddings fail':
    'Embeddings kahan fail hote hain',
  'An embedding model is only as good as the text it learned from, which was mostly English text from the internet. If your vocabulary was rare in that text, the model places it badly. Two things your users see as different may end up close together, or two things they see as the same may end up far apart.':
    'Embedding model utna hi achha hai jitna woh text jisse usne seekha, jo zyadatar internet ka English text tha. Agar aapki shabdavali us text mein kam thi, to model use galat jagah rakhta hai. Jo do cheezein aapke users alag maante hain woh paas aa sakti hain, ya jo ek maante hain woh door ja sakti hain.',
  'Think about your own domain and users. Where would a model trained mostly on English internet text put two things close together that your users see as different, or far apart when your users mean the same thing?':
    'Apne domain aur users ke baare mein sochiye. Zyadatar English internet text par train hua model kahan do aisi cheezon ko paas rakhega jinhe aapke users alag maante hain, ya door rakhega jab aapke users ka matlab ek ho?',
  'In our domain the model would get … wrong, because …':
    'Hamare domain mein model … galat karega, kyunki …',
  'Indian financial and legal vocabulary has many examples: <em>lakh</em> and <em>crore</em>, NEFT and IMPS, and government scheme names that differ by one word but mean very different amounts. Regional languages typed in English letters, such as <em>paisa kab milega</em>, are another. So are internal terms: two product codenames mean different things to you and nothing to the model, so it places them by spelling. Try to name these failures before a user finds them.':
    'Indian financial aur legal shabdavali mein kai examples hain: <em>lakh</em> aur <em>crore</em>, NEFT aur IMPS, aur sarkaari scheme ke naam jo ek shabd se alag hain lekin bahut alag amounts ka matlab rakhte hain. English letters mein type ki gayi regional bhashayein, jaise <em>paisa kab milega</em>, ek aur hain. Internal terms bhi: do product codenames aapke liye alag cheezein hain aur model ke liye kuchh nahi, isliye woh unhe spelling se rakhta hai. User ke pakadne se pehle in failures ka naam lene ki koshish kijiye.',
  'Embeddings are the basis of most “chat with your documents” products. They work well. But they still return the nearest chunks every time, even when nothing is close, so the problem from Chapter 4 remains. Chapter 6 shows how to measure it.':
    'Embeddings zyadatar “apne documents se chat” products ki buniyaad hain. Yeh achha kaam karte hain. Lekin yeh ab bhi har baar sabse paas ke chunks lautate hain, chahe kuchh bhi paas na ho, isliye Chapter 4 ki problem bani rehti hai. Chapter 6 dikhata hai ki ise kaise naapein.',
  'Evaluation: measuring whether search works':
    'Evaluation: naapna ki search kaam karta hai ya nahi',
  'A good demo is not evidence. You will write an answer key before testing, measure how often search finds the right chunk, and see how precision and recall trade against each other.':
    'Achha demo saboot nahi hai. Aap test se pehle answer key likhenge, naapenge ki search kitni baar sahi chunk dhoondhta hai, aur dekhenge ki precision aur recall ek-doosre ke saath kaise trade hote hain.',
  'Explain what a team must build before it can honestly claim an accuracy number.':
    'Samjhaana ki imaandaari se accuracy number claim karne se pehle team ko kya banana padta hai.',
  'Describe the two ways a search step fails, and why fixing one tends to worsen the other.':
    'Search step ke fail hone ke do tareeke batana, aur ek ko theek karne se doosra kyun bigadta hai.',
  'Decide which failure is worse for a feature you work on, and defend the choice.':
    'Apne feature ke liye tay karna ki kaunsa failure zyada bura hai, aur us choice ko defend karna.',
  'Write a ship-or-not memo':
    'Ship karein ya nahi, iska memo likhiye',
  'You now have real numbers from your own documents at three settings. Turn them into a recommendation someone could act on. Include the part most memos avoid: which failure you have decided to accept, and who made that call.':
    'Ab aapke paas teen settings par apne documents ke asli numbers hain. Unhe aisi recommendation mein badliye jis par koi kaam kar sake. Woh hissa bhi daaliye jo zyadatar memos taalte hain: aapne kaunsa failure sweekaar karne ka faisla kiya, aur yeh faisla kisne liya.',
  'State the use case in one line, and who is affected when it is wrong.':
    'Use case ek line mein bataiye, aur galat hone par kaun prabhaavit hota hai.',
  'Add your table: the three values of k, with correct-card hits and the share of relevant chunks at each.':
    'Apni table jodiye: k ki teen values, har ek par sahi-card hits aur relevant chunks ka hissa.',
  'Recommend a k for a customer-facing assistant, and a different one for an internal drafting tool. If they are the same, reconsider.':
    'Customer-facing assistant ke liye ek k suggest kijiye, aur internal drafting tool ke liye alag. Agar dono ek hain, to phir sochiye.',
  'Write five acceptance criteria in the style of a test plan, including one for the unanswerable question and one for a second language.':
    'Test plan ke style mein paanch acceptance criteria likhiye, jisme ek jawab na hone wale sawaal ke liye ho aur ek doosri bhasha ke liye.',
  'Add the cost line: what k does to tokens per query, and to the monthly bill at a realistic volume.':
    'Cost line jodiye: k per query tokens aur realistic volume par mahine ke bill ke saath kya karta hai.',
  'End with the gap between your prediction and the measured result, and what you now think a demo is worth as evidence.':
    'Apne andaaze aur naape gaye result ke gap ke saath khatam kijiye, aur ab aapke hisaab se demo saboot ke roop mein kitna maayne rakhta hai.',
  'Every number in the memo came from a run you did.':
    'Memo ka har number aapke chalaaye run se aaya.',
  'The two recommended values of k differ, and the reason is about consequences, not technology.':
    'Suggest ki gayi k ki dono values alag hain, aur wajah technology nahi, nateeje hain.',
  'Someone could use your acceptance criteria to test a vendor’s system next week.':
    'Koi agle hafte aapke acceptance criteria se ek vendor ke system ko test kar sakta hai.',
  'It returns a ranked list whatever you ask.':
    'Aap kuchh bhi poochhein, yeh rank ki hui list lautata hai.',
  'Embeddings find the nearest chunks':
    'Embeddings sabse paas ke chunks dhoondhte hain',
  'You need a pen and paper, plus your <code>chapter-5</code> notebook for the measurements. Bring the document from Chapter 3 and the <code>retrieve</code> function from Chapter 5.':
    'Aapko pen aur kaagaz chahiye, aur measurements ke liye apna <code>chapter-5</code> notebook. Chapter 3 ka document aur Chapter 5 ka <code>retrieve</code> function le aaiye.',
  'Every AI project reaches the point where someone senior asks: is it good? Often the answer is a demo of three questions that work. A demo that works on three questions does not tell you how often the system is right.':
    'Har AI project mein woh pal aata hai jab koi senior poochhta hai: kya yeh achha hai? Aksar jawab teen chalne wale sawaalon ka demo hota hai. Teen sawaalon par chalne wala demo nahi batata ki system kitni baar sahi hai.',
  'Measuring properly is not complicated. If you have written acceptance criteria before, you already know most of it. It comes down to three ideas.':
    'Theek se naapna mushkil nahi hai. Agar aapne pehle acceptance criteria likhe hain, to aap iska zyadatar hissa jaante hain. Yeh teen ideas mein simat jaata hai.',
  'Idea 1: Write the answers before you test':
    'Idea 1: Test se pehle jawab likhiye',
  'You cannot judge a system by asking it questions and checking whether the answers look right. They will look right, because plausible text is what the model produces. So first write a list of real questions with their verified correct answers. This list is called <strong>ground truth</strong>. It is an answer key, written before the test.':
    'Aap system ko sawaal poochh kar aur jawab sahi lagte hain ya nahi dekh kar nahi parakh sakte. Woh sahi lagenge, kyunki model wahi text banata hai jo sahi lage. Isliye pehle asli sawaalon ki list unke verified sahi jawabon ke saath likhiye. Is list ko <strong>ground truth</strong> kehte hain. Yeh test se pehle likhi gayi answer key hai.',
  'Ten to thirty questions is enough to start. Use real questions, in the words users actually use. Questions written after reading the documents will use the documents’ words and make search look better than it is.':
    'Shuru karne ke liye das se tees sawaal kaafi hain. Asli sawaal use kijiye, un shabdon mein jo users sach mein use karte hain. Documents padhne ke baad likhe sawaal documents ke shabd use karenge aur search ko asal se behtar dikhayenge.',
  'Using your Chapter 3 document, write ten questions: the eight you already have plus two new ones. One new question must be unanswerable, about something the document does not cover.':
    'Apne Chapter 3 document se das sawaal likhiye: jo aath pehle se hain aur do naye. Ek naya sawaal aisa ho jiska jawab na ho, kisi aisi cheez ke baare mein jo document cover nahi karta.',
  'For each question, record the verified answer and the number of the card or cards that contain it. Verified means you checked, not remembered.':
    'Har sawaal ke liye verified jawab aur us card ya cards ka number record kijiye jisme woh hai. Verified matlab aapne check kiya, yaad nahi kiya.',
  'You have a ten-row table written before any measurement. This is your ground truth. Include an unanswerable row in every answer key you write.':
    'Aapke paas kisi bhi measurement se pehle likhi das rows ki table hai. Yahi aapka ground truth hai. Har answer key mein ek jawab na hone wali row zaroor rakhiye.',
  'Predict: you build a search step, write ten honest questions and run them. How many will find the right chunk on the first try?':
    'Andaaza lagaiye: aap search step banaate hain, das imaandaar sawaal likhte hain aur chalaate hain. Kitne pehli koshish mein sahi chunk dhoondhenge?',
  'Six or seven out of ten is a normal, healthy first result for a working system.':
    'Kaam karne wale system ke liye das mein chhe-saat ek normal, swasth pehla result hai.',
  'If you got nine or ten, the likely reason is that you wrote the questions after reading the documents. That tests whether search can find text using its own words, which is not what users do.':
    'Agar aapko nau ya das mile, to sambhavit wajah yeh hai ki aapne sawaal documents padhne ke baad likhe. Yeh test karta hai ki search uske apne shabdon se text dhoondh sakta hai ya nahi, jo users nahi karte.',
  'When a vendor quotes an accuracy number, ask: <em>against which answer key, written by whom, and can I see the questions?</em> If they cannot show you, the number is not evidence.':
    'Jab vendor accuracy number bataye, to poochhiye: <em>kis answer key ke against, kisne likhi, aur kya main sawaal dekh sakta hoon?</em> Agar woh nahi dikha sakte, to number saboot nahi hai.',
  'Before you run anything, predict: of the nine answerable questions, how many will return the right card with <code>k=3</code>? Write the number down.':
    'Kuchh bhi chalaane se pehle andaaza lagaiye: jawab wale nau sawaalon mein se kitne <code>k=3</code> par sahi card lautayenge? Number likh lijiye.',
  'Grade the run against your answer key. Count how many of the nine succeeded, how many of the twenty-seven returned cards were relevant, and what came back for the unanswerable question, with its top score.':
    'Run ko apni answer key se grade kijiye. Giniye ki nau mein se kitne safal hue, sattaais lautaaye cards mein se kitne relevant the, aur jawab na hone wale sawaal ke liye kya aaya, uske top score ke saath.',
  'Compare the result with your prediction. Most people predict too high. Write one sentence about the size of your gap. That gap is why a demo should not decide whether a system ships.':
    'Result ko apne andaaze se compare kijiye. Zyadatar log zyada andaaza lagaate hain. Apne gap ke size par ek sentence likhiye. Yahi gap wajah hai ki demo se yeh tay nahi hona chahiye ki system ship ho.',
  'Idea 2: Precision and recall trade against each other':
    'Idea 2: Precision aur recall ek-doosre ke khilaaf trade hote hain',
  'Imagine asking an assistant to fetch the files for a meeting. It can fail in two ways: leave out something that mattered, or give you lots of things that did not.':
    'Sochiye aap ek assistant se meeting ki files laane ko kehte hain. Woh do tarah fail ho sakta hai: kuchh zaroori chhod de, ya bahut saari be-matlab cheezein de de.',
  'Leaving out what mattered is poor <strong>recall</strong>. Returning lots of irrelevant material is poor <strong>precision</strong>. The setting between them is how many chunks you fetch per question, usually called <strong>k</strong>. A higher k usually improves recall and lowers precision. A lower k does the reverse. These are tendencies, not guarantees, so measure them on your own questions.':
    'Zaroori cheez chhod dena kharaab <strong>recall</strong> hai. Bahut saara faaltu material lautana kharaab <strong>precision</strong> hai. In dono ke beech ki setting yeh hai ki aap har sawaal par kitne chunks laate hain, jise aam taur par <strong>k</strong> kehte hain. Zyada k aam taur par recall badhata hai aur precision ghataata hai. Kam k ulta karta hai. Yeh jhukaav hain, guarantee nahi, isliye inhe apne sawaalon par naapiye.',
  'You usually cannot maximise both. Try changing k and watch:':
    'Aam taur par aap dono ko ek saath maximum nahi kar sakte. k badal kar dekhiye:',
  'Change k and compare':
    'k badaliye aur compare kijiye',
  'Grade the same ten questions again at <code>k=1</code> and at <code>k=8</code>, and fill in this table by hand:':
    'Wahi das sawaal <code>k=1</code> aur <code>k=8</code> par phir grade kijiye, aur yeh table haath se bhariye:',
  'A higher k often finds more correct cards but returns a lower share of relevant ones. Measure both on your documents. More chunks also means more tokens per request; the actual cost also depends on chunk sizes, prompt length, output length, caching and pricing. Record real token counts and latency before deciding.':
    'Zyada k aksar zyada sahi cards dhoondhta hai lekin relevant cards ka hissa kam lautata hai. Apne documents par dono naapiye. Zyada chunks ka matlab har request mein zyada tokens bhi hai; asli cost chunk sizes, prompt length, output length, caching aur pricing par bhi nirbhar karti hai. Faisla karne se pehle asli token counts aur latency record kijiye.',
  'Idea 3: Which failure is worse depends on the product':
    'Idea 3: Kaunsa failure zyada bura hai, yeh product par nirbhar hai',
  'Which failure matters more is a product decision, not an engineering one.':
    'Kaunsa failure zyada maayne rakhta hai, yeh product decision hai, engineering nahi.',
  'For a customer-facing bot that answers policy questions, low precision is the dangerous failure. The model builds a confident, wrong answer from irrelevant material, and a wrong policy given to a customer is a liability. Missing an answer only creates a support ticket.':
    'Policy sawaalon ka jawab dene wale customer-facing bot ke liye kam precision khatarnaak failure hai. Model faaltu material se confident, galat jawab banata hai, aur customer ko di gayi galat policy ek liability hai. Jawab chhoot jaana sirf ek support ticket banata hai.',
  'For a tool that helps a lawyer find precedents, it is the opposite. A missed precedent can lose a case. An extra irrelevant result costs thirty seconds of reading.':
    'Lawyer ko precedents dhoondhne mein madad karne wale tool ke liye iska ulta hai. Chhoota precedent case haara sakta hai. Ek extra faaltu result padhne mein tees second leta hai.',
  'Choose the failure to minimise based on what happens to a real person when each one occurs. The product owner makes this decision, not the person who built the system.':
    'Kaunsa failure kam karna hai yeh is aadhaar par chuniye ki har ek hone par asli insaan ke saath kya hota hai. Yeh faisla product owner leta hai, system banaane wala nahi.',
  'For something you work on: which failure is cheap and which is dangerous? Explain in terms of what happens to a real user. Then say how many chunks you would fetch as a starting point.':
    'Apne kaam ki kisi cheez ke liye: kaunsa failure sasta hai aur kaunsa khatarnaak? Asli user ke saath kya hota hai, is hisaab se samjhaaiye. Phir bataiye ki shuruaat mein aap kitne chunks laayenge.',
  'For … the dangerous failure is … because … so I would start at k = …':
    '… ke liye khatarnaak failure … hai kyunki … isliye main k = … se shuru karunga',
  'A strong answer links the choice to a consequence. For example: “For our support assistant, irrelevant results are dangerous, because a wrong policy quoted to a customer creates a liability we then have to honour. Missing an answer only creates a ticket we were already getting. So we prioritise precision, start with a low k, and give the assistant a clear way to say it does not know.” The reasoning matters more than the number.':
    'Mazboot jawab choice ko nateeje se jodta hai. Jaise: “Hamare support assistant ke liye faaltu results khatarnaak hain, kyunki customer ko batayi galat policy ek liability banati hai jise hame nibhaana padta hai. Jawab chhootna sirf ek ticket banata hai jo hame waise bhi aa raha tha. Isliye hum precision ko pehle rakhte hain, kam k se shuru karte hain, aur assistant ko saaf taur par ‘mujhe nahi pata’ kehne ka tareeka dete hain.” Number se zyada reasoning maayne rakhti hai.',
  'Most people discussing an AI feature do not have an answer key. With one, you can say whether the system works, with a number you measured yourself.':
    'AI feature par baat karne wale zyadatar logon ke paas answer key nahi hoti. Ek hone par aap apne naape number ke saath bata sakte hain ki system kaam karta hai ya nahi.'

});
