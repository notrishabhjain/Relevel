/* Hinglish: p05 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Chunking: splitting documents into pieces':
    'Chunking: documents ko tukdon mein todna',
  'Models can only read a limited amount of text at once, so long documents are split into smaller pieces called chunks. You will split one document three ways by hand and see what each split loses.':
    'Models ek baar mein seemit text hi padh sakte hain, isliye lambe documents chhote tukdon mein tode jaate hain jinhe chunks kehte hain. Aap ek document ko haath se teen tarah todenge aur dekhenge ki har tareeka kya khota hai.',
  'Give the two reasons you cannot send a model every document you have.':
    'Woh do wajahen bata paana jinki wajah se aap model ko apna har document nahi bhej sakte.',
  'Explain what is lost when a document is split into chunks, with a concrete example.':
    'Ek thos example ke saath samjhaana ki document ko chunks mein todne par kya kho jaata hai.',
  'Choose a chunking approach by naming the failure you accept, since no chunk size is right for every document.':
    'Jo failure aap sweekaar karte hain uska naam lekar chunking ka tareeka chunna, kyunki koi ek chunk size har document ke liye sahi nahi.',
  'A chunking rule for your own documents':
    'Apne documents ke liye ek chunking rule',
  'You have split one document three ways and seen what each split breaks. A real system needs a rule that someone else can apply to thousands of documents without you. Write that rule, and test it on the messiest document you can find.':
    'Aapne ek document teen tarah toda aur dekha ki har tareeka kya todta hai. Asli system ko aisa rule chahiye jise koi aur aapke bina hazaaron documents par lagaa sake. Woh rule likhiye, aur use sabse gande document par test kijiye jo aapko mile.',
  'Name the most structured document type in your field, such as one with clauses, exceptions, numbered procedures or warnings.':
    'Apne field ka sabse structured document type bataiye, jaise clauses, exceptions, numbered procedures ya warnings wala.',
  'Describe its structure in three or four lines. Where are its natural break points, and what must never be separated?':
    'Teen-chaar lines mein uska structure bataiye. Uske natural break points kahan hain, aur kya kabhi alag nahi hona chahiye?',
  'Write the chunking rule as instructions to another person: where to cut, where never to cut, and what to do with a piece that would lose its meaning.':
    'Chunking rule ko doosre insaan ke liye instructions ki tarah likhiye: kahan kaatna hai, kahan kabhi nahi kaatna, aur us tukde ka kya karna hai jo apna matlab kho dega.',
  'Find the messiest real example you can, such as a badly formatted, scanned or table-heavy document. Apply your rule to it by hand.':
    'Sabse ganda asli example dhoondhiye, jaise bura format kiya hua, scan kiya hua ya tables se bhara document. Us par haath se apna rule lagaiye.',
  'Record where your rule broke. Amend it, and note which of your five questions the first version would have answered wrongly.':
    'Record kijiye ki aapka rule kahan toota. Use sudhaariye, aur note kijiye ki pehla version aapke paanch sawaalon mein se kinka galat jawab deta.',
  'Write what you would say to a vendor who tells you their chunking is “automatic and optimal”.':
    'Likhiye ki aap us vendor se kya kahenge jo kehta hai ki unki chunking “automatic aur optimal” hai.',
  'Someone else could apply your rule and split a document the same way you would.':
    'Koi aur aapka rule lagaa kar document ko waise hi tod sakta hai jaise aap todte.',
  'You have applied it to a difficult document and amended it once as a result.':
    'Aapne ise ek mushkil document par lagaaya aur uske baad ek baar sudhaara.',
  'You can name the kind of content your rule still risks splitting, and say why you accept that.':
    'Aap bata sakte hain ki aapka rule ab bhi kis tarah ke content ko todne ka risk leta hai, aur aap use kyun sweekaar karte hain.',
  'Everything sent in one call has to fit in the context window.':
    'Ek call mein bheja gaya sab kuchh context window mein aana chahiye.',
  'Per token, on every call.':
    'Per token, har call par.',
  'Models invent answers when they have no evidence':
    'Saboot na hone par models jawab banaate hain',
  'So the fix is to give them real evidence.':
    'To fix hai unhe asli saboot dena.',
  'No code in this chapter. Print one real document you know well, such as a policy, a contract or a procedure of five to fifteen pages. Get a pair of scissors and a pen. You will do every step by hand.':
    'Is chapter mein koi code nahi. Ek asli document print kijiye jise aap achhi tarah jaante hain, jaise paanch se pandrah page ki policy, contract ya procedure. Ek kainchi aur pen lijiye. Aap har step haath se karenge.',
  'Write your test questions first':
    'Pehle apne test sawaal likhiye',
  'Before you cut anything, write five specific questions a real user would ask about this document. Write real questions, the kind someone types when they are in a hurry, not topics.':
    'Kuchh bhi kaatne se pehle, is document ke baare mein paanch specific sawaal likhiye jo ek asli user poochhega. Asli sawaal likhiye, jaise koi jaldi mein type karta hai, topics nahi.',
  'You have five questions on paper. You will score every experiment in this chapter against them. Write them before cutting, so you cannot choose questions that suit your cuts.':
    'Aapke paas kaagaz par paanch sawaal hain. Is chapter ka har experiment inhi par score hoga. Inhe kaatne se pehle likhiye, taaki aap apne cuts ke mutaabik sawaal na chun sakein.',
  'Why you cannot send everything':
    'Aap sab kuchh kyun nahi bhej sakte',
  'You want a model to answer questions about your company’s documents. The obvious approach is to send it the documents. That fails for two reasons you already know.':
    'Aap chahte hain ki model aapki company ke documents ke baare mein sawaalon ke jawab de. Seedha tareeka hai use documents bhej dena. Yeh do wajahon se fail hota hai jo aap pehle se jaante hain.',
  'First, they will not fit: each request has a size limit. Second, you pay for every token you send, on every question. Even when a large document would fit, sending your whole library to answer one question costs far too much.':
    'Pehla, woh fit nahi honge: har request ki size limit hai. Doosra, aap har sawaal par bheje gaye har token ke paise dete hain. Jab bada document fit ho bhi jaaye, tab bhi ek sawaal ke jawab ke liye poori library bhejna bahut mehnga hai.',
  'So the standard approach is to split documents into pieces, store the pieces, and send only the few that look relevant to each question. The pieces are called <strong>chunks</strong>, and splitting them is called <strong>chunking</strong>.':
    'Isliye standard tareeka hai documents ko tukdon mein todna, tukde store karna, aur har sawaal ke liye sirf wahi kuchh bhejna jo relevant lagein. Tukdon ko <strong>chunks</strong> kehte hain, aur todne ko <strong>chunking</strong>.',
  'The hard part is deciding where to split. Try splitting a document three ways in this tool and see what breaks:':
    'Mushkil hissa yeh tay karna hai ki kahan todna hai. Is tool mein ek document ko teen tarah tod kar dekhiye ki kya tootta hai:',
  'Round 1: three large chunks':
    'Round 1: teen bade chunks',
  'Cut the document into thirds':
    'Document ko teen hisson mein kaatiye',
  'Cut your document into three rough pieces. Ignore its structure. Then take your five questions one at a time and find which piece holds each answer.':
    'Apne document ko teen mote tukdon mein kaatiye. Uska structure ignore kijiye. Phir apne paanch sawaal ek-ek karke lijiye aur dekhiye ki har jawab kis tukde mein hai.',
  'Every answer is complete. But to deliver a two-line answer, you send a third of the document. Note roughly how much irrelevant text comes with each answer. You would pay for that text on every question.':
    'Har jawab poora hai. Lekin do line ka jawab dene ke liye aap document ka ek-tihaai bhejte hain. Mota-mota note kijiye ki har jawab ke saath kitna faaltu text jaata hai. Us text ke paise aap har sawaal par denge.',
  'Round 2: twenty small chunks':
    'Round 2: bees chhote chunks',
  'Cut the document into small pieces':
    'Document ko chhote tukdon mein kaatiye',
  'Cut a fresh copy into fifteen or twenty pieces, roughly every 150 words, even if that splits a sentence. Run your five questions again, and look for two specific problems.':
    'Ek nayi copy ko pandrah-bees tukdon mein kaatiye, lagbhag har 150 shabd par, chahe sentence toot jaaye. Apne paanch sawaal phir chalaiye, aur do khaas problems dhoondhiye.',
  '<strong>A split answer:</strong> the answer is now spread across two pieces, such as a rule on one card and its exception on the next.':
    '<strong>Toota hua jawab:</strong> jawab ab do tukdon mein bikhra hai, jaise ek card par rule aur agle par uska exception.',
  '<strong>An orphan:</strong> a piece that means nothing on its own, such as “The aforesaid amount shall lapse.” Which amount?':
    '<strong>Anaath tukda:</strong> aisa tukda jiska akele koi matlab nahi, jaise “The aforesaid amount shall lapse.” Kaunsa amount?',
  'You will find both problems in a document you chose yourself. Keep these cards. Chapters 4 and 5 use these exact pieces.':
    'Aapko apne hi chune document mein dono problems milengi. Yeh cards sambhal kar rakhiye. Chapters 4 aur 5 inhi tukdon ka use karte hain.',
  'Take a document you know well, such as a policy, a contract or a spec. Write the rule you would give someone for splitting it. Then name one question your rule will answer badly.':
    'Ek document lijiye jise aap achhi tarah jaante hain, jaise policy, contract ya spec. Woh rule likhiye jo aap kisi ko use todne ke liye denge. Phir ek sawaal bataiye jiska aapka rule bura jawab dega.',
  'Most sensible rules, such as splitting at paragraphs, headings or numbered clauses, fail in the same place: a rule and its exception end up in different pieces. If only the rule is retrieved, the answer is confident and incomplete, which is worse than no answer.':
    'Zyadatar samajhdaar rules, jaise paragraphs, headings ya numbered clauses par todna, ek hi jagah fail hote hain: rule aur uska exception alag tukdon mein pahunch jaate hain. Agar sirf rule retrieve ho, to jawab confident aur adhoora hota hai, jo koi jawab na hone se bhi bura hai.',
  'You cannot find a rule with no failures. Instead, know which questions your rule handles badly, and test those questions on purpose.':
    'Aapko bina failure wala rule nahi milega. Iski jagah jaaniye ki aapka rule kin sawaalon ko bura sambhalta hai, aur un sawaalon ko jaan-boojh kar test kijiye.',
  'Orphaned chunks lose their meaning':
    'Anaath chunks apna matlab kho dete hain',
  'The second problem is harder to spot. Some pieces stop making sense once they are cut out. A chunk that starts <em>the aforesaid amount shall be disbursed within sixty days</em> is useless on its own. Which amount? Paid to whom? The answer is in the previous piece.':
    'Doosri problem pakadna zyada mushkil hai. Kuchh tukde kaate jaane ke baad matlab khona shuru kar dete hain. <em>the aforesaid amount shall be disbursed within sixty days</em> se shuru hone wala chunk akele bekaar hai. Kaunsa amount? Kise diya jaana hai? Jawab pichhle tukde mein hai.',
  'Documents are full of these references, especially legal text, but also anything that says “the above”, “this scheme” or “such cases”. People reading the document have the previous paragraph. A chunk does not.':
    'Documents aise references se bhare hote hain, khaas kar legal text, lekin har woh cheez bhi jo “upar wala”, “yeh scheme” ya “aise cases” kehti hai. Document padhne walon ke paas pichhla paragraph hota hai. Chunk ke paas nahi.',
  'Round 3: cut along the structure':
    'Round 3: structure ke saath kaatiye',
  'Cut the way you think it should be cut':
    'Jaise aapko sahi lage waise kaatiye',
  'Cut a fresh copy the way you think it should be cut. Do not overthink it. Then look at what you did.':
    'Ek nayi copy waise kaatiye jaise aapke hisaab se kaatni chahiye. Zyada mat sochiye. Phir dekhiye ki aapne kya kiya.',
  'You probably followed headings and clause numbers, and made pieces of very different sizes that each make sense on their own. Write one sentence describing the rule you used. This is <strong>structure-aware chunking</strong>: it follows the document’s layout. Semantic chunking is a different approach, which splits text where the topic changes.':
    'Aapne shayad headings aur clause numbers follow kiye, aur bahut alag-alag size ke tukde banaaye jo har ek akele samajh aate hain. Ek sentence mein apna use kiya rule likhiye. Yeh <strong>structure-aware chunking</strong> hai: yeh document ke layout ko follow karti hai. Semantic chunking ek alag tareeka hai, jo wahan todta hai jahan topic badalta hai.',
  'No chunk size is correct for every document. Each size fails in a different way, so choose based on what your documents look like and what your users ask.':
    'Koi chunk size har document ke liye sahi nahi hai. Har size alag tarah fail hota hai, isliye apne documents ki banawat aur users ke sawaalon ke aadhaar par chuniye.',
  'In a design review, say which failure you chose and why. People often want a single correct chunk size, and there is not one.':
    'Design review mein bataiye ki aapne kaunsa failure chuna aur kyun. Log aksar ek sahi chunk size chahte hain, aur aisa koi nahi hai.',
  'State your trade-off. For your document: what size are you cutting at, what does that gain, and what does it lose? Write the sentence you would say in a meeting.':
    'Apna trade-off bataiye. Apne document ke liye: aap kis size par kaat rahe hain, isse kya milta hai, aur kya khota hai? Woh sentence likhiye jo aap meeting mein kahenge.',
  'We are cutting at … which gains … and loses …':
    'Hum … par kaat rahe hain jisse … milta hai aur … khota hai',
  'A strong answer names a real loss, specific to your documents. For example: “Clause by clause, with a couple of sentences of overlap. That gives precise answers to questions about one clause, but loses answers that span a clause and its exception, so we test those on purpose.” If you cannot name the loss, you have accepted a default rather than made a choice.':
    'Mazboot jawab aapke documents ka ek asli nuksaan batata hai. Jaise: “Clause dar clause, do-ek sentences ke overlap ke saath. Isse ek clause ke sawaalon ke sateek jawab milte hain, lekin woh jawab kho jaate hain jo clause aur uske exception dono mein faile hain, isliye hum unhe jaan-boojh kar test karte hain.” Agar aap nuksaan ka naam nahi le sakte, to aapne choice nahi ki, default sweekaar kar liya.',
  'Keyword search: matching words, and where it fails':
    'Keyword search: shabd milaana, aur yeh kahan fail hota hai',
  'The first way to find the right chunk is to match the words in the question. You will run keyword search by hand on your own chunks, find exactly where it fails, and see the one case where it wins.':
    'Sahi chunk dhoondhne ka pehla tareeka hai sawaal ke shabd milaana. Aap apne chunks par haath se keyword search chalaayenge, dhoondhenge ki yeh theek kahan fail hota hai, aur woh ek case dekhenge jahan yeh jeetta hai.',
  'Explain why keyword search fails most for the users who most need help.':
    'Samjhaana ki keyword search un users ke liye sabse zyada kyun fail hota hai jinhe madad ki sabse zyada zaroorat hai.',
  'Name the kind of query keyword search handles better than any other method.':
    'Us tarah ki query ka naam lena jise keyword search kisi bhi doosre tareeke se behtar sambhalta hai.',
  'Explain what search returns when the answer is not in your documents, and why that is dangerous.':
    'Samjhaana ki jab jawab aapke documents mein nahi hota to search kya lautata hai, aur yeh khatarnaak kyun hai.',
  'Map where keyword search fails':
    'Map kijiye ki keyword search kahan fail hota hai',
  'You scored a search method by hand, on real questions, against a real document. Most people who buy search software never do this. Write up your results so you can use them when someone tries to sell you a search product.':
    'Aapne ek search tareeke ko asli sawaalon par, asli document ke against, haath se score kiya. Search software khareedne wale zyadatar log yeh kabhi nahi karte. Apne results aise likhiye ki jab koi aapko search product beche to aap unka use kar sakein.',
  'Make a table of all eight questions (your five plus the three harder ones), with the rank the correct card actually got.':
    'Saare aath sawaalon ki table banaiye (aapke paanch aur teen mushkil wale), aur sahi card ko asal mein kaunsa rank mila.',
  'Next to each failure, write one sentence on what information the scoring did not have.':
    'Har failure ke bagal mein ek sentence likhiye ki scoring ke paas kaunsi jaankari nahi thi.',
  'Add the exact-code question and its result, so the table shows where the method wins as well as where it fails.':
    'Exact-code wala sawaal aur uska result jodiye, taaki table dikhaye ki tareeka kahan jeetta hai aur kahan haarta hai.',
  'Write a short paragraph about your own field: which real queries use different words from the documents, and which use exact codes or terms?':
    'Apne field ke baare mein ek chhota paragraph likhiye: kaunsi asli queries documents se alag shabd use karti hain, aur kaunsi exact codes ya terms?',
  'Estimate what share of your users use the document’s vocabulary rather than their own. Say how you would measure this for real.':
    'Andaaza lagaiye ki aapke kitne users apne shabdon ki jagah document ki shabdavali use karte hain. Bataiye ki ise sach mein kaise naapenge.',
  'Write four or five sentences for a non-technical colleague explaining why “we already have a search box” does not mean “users can find answers”.':
    'Ek non-technical colleague ke liye chaar-paanch sentences likhiye jo samjhaayein ki “hamare paas pehle se search box hai” ka matlab “users jawab dhoondh sakte hain” nahi hai.',
  'Every failure has its one-sentence explanation, in your words.':
    'Har failure ki aapke shabdon mein ek sentence ki vyakhya hai.',
  'You could give the last paragraph to a senior colleague, and they would understand the risk without you there.':
    'Aap aakhri paragraph kisi senior colleague ko de sakte hain, aur woh aapke bina risk samajh jaayenge.',
  'Documents are split into chunks':
    'Documents chunks mein tode jaate hain',
  'You store the chunks and send only the relevant few.':
    'Aap chunks store karte hain aur sirf kuchh relevant bhejte hain.',
  'Some chunks lose their meaning':
    'Kuchh chunks apna matlab kho dete hain',
  '“The aforesaid amount” no longer says which amount.':
    '“The aforesaid amount” ab nahi batata ki kaunsa amount.',
  'No code yet. Bring the twenty cards you cut in Chapter 3 and the five questions you wrote before cutting. In this chapter you act as the search engine.':
    'Abhi koi code nahi. Chapter 3 mein kaate bees cards aur kaatne se pehle likhe paanch sawaal le aaiye. Is chapter mein aap khud search engine banenge.',
  'You have a document split into twenty chunks. A question arrives. Something has to decide which chunks to send to the model.':
    'Aapke paas bees chunks mein toota ek document hai. Ek sawaal aata hai. Kisi ko tay karna hai ki model ko kaunse chunks bhejein.',
  'The obvious method, used by search boxes for decades, is to match words. If the question says <em>refund</em>, find the chunks that contain <em>refund</em>. It is fast and cheap. This is called <strong>keyword search</strong>.':
    'Seedha tareeka, jo search boxes dashakon se use karte aaye hain, shabd milaana hai. Agar sawaal mein <em>refund</em> hai, to woh chunks dhoondhiye jinme <em>refund</em> ho. Yeh tez aur sasta hai. Ise <strong>keyword search</strong> kehte hain.',
  'Keyword search matches spelling, not meaning':
    'Keyword search spelling milaata hai, matlab nahi',
  'Try it by hand first. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write the words keyword search would look for. Then write the words the policy probably uses instead.':
    'Pehle haath se try kijiye. Ek user type karta hai: <em>mera paisa kab wapas milega?</em> Aapka document ek company policy hai. Woh shabd likhiye jo keyword search dhoondhega. Phir woh shabd likhiye jo policy shayad iski jagah use karti hai.',
  'The user wrote <em>money</em>, <em>back</em> and <em>get</em>. The policy says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> and <em>the aforesaid amount</em>. The two lists share no words at all, even though the question is clear and the paragraph answers it.':
    'User ne <em>money</em>, <em>back</em> aur <em>get</em> likha. Policy kehti hai <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> aur <em>the aforesaid amount</em>. Dono lists mein ek bhi shabd common nahi, jabki sawaal saaf hai aur paragraph uska jawab deta hai.',
  'Keyword search compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match.':
    'Keyword search spelling compare karta hai, matlab nahi. Ek hi matlab wale do sentences jinme koi shabd common nahi, match nahi hote.',
  'Run keyword search by hand':
    'Haath se keyword search chalaiye',
  'Act as the search engine':
    'Khud search engine baniye',
  'Run keyword search by hand on all five questions against all twenty cards. Underline the important words in the question, find them in the cards, give one point per match, and rank the cards by score.':
    'Saare paanch sawaalon par saare bees cards ke against haath se keyword search chalaiye. Sawaal ke zaroori shabdon ko underline kijiye, unhe cards mein dhoondhiye, har match ka ek point dijiye, aur cards ko score se rank kijiye.',
  'Watch out':
    'Dhyaan rakhiye',
  'Do not use your own understanding of the document. Only the scores count.':
    'Document ki apni samajh ka use mat kijiye. Sirf scores maayne rakhte hain.',
  'For each question, record two things: did the top-scoring card contain the answer, and if not, what rank did the right card get?':
    'Har sawaal ke liye do baatein record kijiye: kya sabse zyada score wale card mein jawab tha, aur agar nahi, to sahi card ko kaunsa rank mila?',
  'Clearly worded questions do surprisingly well. That result is misleading: you wrote these questions after reading the document, so you used its vocabulary. Real users usually have not read it.':
    'Saaf likhe sawaal hairaani ki had tak achha karte hain. Yeh result bhatkaane wala hai: aapne yeh sawaal document padhne ke baad likhe, isliye uski shabdavali use ki. Asli users ne aam taur par use padha nahi hota.',
  'Write three harder questions':
    'Teen mushkil sawaal likhiye',
  'Write three new questions about the same document, each designed to make keyword search fail:':
    'Usi document ke baare mein teen naye sawaal likhiye, har ek aisa jo keyword search ko fail karaaye:',
  '<strong>A synonym question:</strong> take a formal term from the document and reword it the way most people would say it.':
    '<strong>Samanarthi shabd wala sawaal:</strong> document ka ek formal term lijiye aur use waise likhiye jaise zyadatar log bolte hain.',
  '<strong>A plain-language question:</strong> write it the way a first-time user, who does not know the document’s vocabulary, would type it.':
    '<strong>Seedhi bhasha wala sawaal:</strong> use waise likhiye jaise pehli baar aane wala user, jise document ki shabdavali nahi pata, type karega.',
  '<strong>A second-language question:</strong> ask the same thing in another language your users actually use.':
    '<strong>Doosri bhasha wala sawaal:</strong> wahi baat us doosri bhasha mein poochhiye jo aapke users sach mein use karte hain.',
  'Score all three by hand in the same way.':
    'Teeno ko usi tarah haath se score kijiye.',
  'The cards that clearly hold the answer score close to zero, and yet some card still comes out on top. For each question, write one sentence: what information did the scoring not have?':
    'Jin cards mein saaf jawab hai unka score lagbhag zero aata hai, phir bhi koi card upar aa jaata hai. Har sawaal ke liye ek sentence likhiye: scoring ke paas kaunsi jaankari nahi thi?',
  'Where keyword search fails':
    'Keyword search kahan fail hota hai',
  'These failures are predictable. They happen most in three places, and all three matter to a business:':
    'Yeh failures anumaan laayak hain. Yeh sabse zyada teen jagah hote hain, aur teeno business ke liye maayne rakhti hain:',
  '<strong>Formal language versus everyday language.</strong> Documents say <em>termination for convenience</em>; people say <em>cancel</em>. Specialists write the documents, and everyone else writes the questions.':
    '<strong>Formal bhasha banaam rozmarra ki bhasha.</strong> Documents <em>termination for convenience</em> kehte hain; log <em>cancel</em> kehte hain. Documents specialists likhte hain, aur sawaal baaki sab.',
  '<strong>The users who most need help.</strong> Someone who knows your product uses your vocabulary and finds things. Someone confused uses their own words and finds nothing. Keyword search works worst for the users with the biggest problems.':
    '<strong>Woh users jinhe madad ki sabse zyada zaroorat hai.</strong> Jo aapka product jaanta hai woh aapki shabdavali use karta hai aur cheezein dhoondh leta hai. Jo uljhan mein hai woh apne shabd use karta hai aur kuchh nahi paata. Keyword search sabse badi problems wale users ke liye sabse bura kaam karta hai.',
  '<strong>Questions.</strong> “Why was I charged twice?” shares almost no words with the paragraph explaining duplicate authorisation holds.':
    '<strong>Sawaal.</strong> “Mujhse do baar charge kyun hua?” duplicate authorisation holds samjhaane wale paragraph se lagbhag koi shabd share nahi karta.',
  'Where keyword search wins':
    'Keyword search kahan jeetta hai',
  'Keyword search is excellent at some things: exact codes, section numbers, policy IDs, part numbers and names. If a user types <em>clause 14.2</em>, they want clause 14.2, and finding that exact text is the right approach.':
    'Keyword search kuchh cheezon mein behtareen hai: exact codes, section numbers, policy IDs, part numbers aur naam. Agar user <em>clause 14.2</em> type karta hai, to use clause 14.2 hi chahiye, aur wahi exact text dhoondhna sahi tareeka hai.',
  'Search for an exact code':
    'Exact code search kijiye',
  'Ask a question that contains an exact code, section number or defined term copied from the document.':
    'Aisa sawaal poochhiye jisme document se copy kiya exact code, section number ya defined term ho.',
  'An exact code or defined term usually ranks high with keyword search. Record its actual rank rather than assuming. This is the strength that meaning-based search, in the next chapter, adds to rather than replaces.':
    'Exact code ya defined term keyword search mein aam taur par upar rank karta hai. Maan lene ki jagah uska asli rank record kijiye. Yahi woh taakat hai jise agle chapter ka matlab-aadharit search badalta nahi, balki usme jodta hai.',
  'Search always returns something':
    'Search hamesha kuchh na kuchh lautata hai',
  'One more property causes serious problems later.':
    'Ek aur khasiyat aage chal kar gambhir problems paida karti hai.',
  'Predict: a user asks something your documents do not cover at all. What does the search step return?':
    'Andaaza lagaiye: user kuchh aisa poochhta hai jo aapke documents bilkul cover nahi karte. Search step kya lautata hai?',
  'Twenty chunks, ranked, with one at the top. Search has no concept of “nothing here”. It scores everything and sorts. The top result for an unanswerable question is just the least bad of a bad set.':
    'Bees chunks, rank kiye hue, ek sabse upar. Search mein “yahan kuchh nahi” ka koi concept nahi. Woh sab kuchh score karta hai aur sort karta hai. Jawab na hone wale sawaal ka top result bas bure set mein sabse kam bura hota hai.',
  'Now combine that with Chapter 2. The irrelevant chunk is passed to the model as if it were evidence, and the model writes a fluent answer from it. No step reports an error. You get a confident, wrong answer, and nothing in the system notices.':
    'Ab ise Chapter 2 ke saath jodiye. Faaltu chunk model ko saboot ki tarah diya jaata hai, aur model usse fluent jawab likh deta hai. Koi step error report nahi karta. Aapko ek confident, galat jawab milta hai, aur system mein kisi ko pata nahi chalta.',
  'Name the missing capability':
    'Missing capability ka naam dijiye',
  'Look at your three harder questions. Write one sentence describing the capability keyword search is missing. Describe the gap, not the fix.':
    'Apne teen mushkil sawaal dekhiye. Ek sentence likhiye jo batataye ki keyword search mein kaunsi kshamata missing hai. Kami bataiye, fix nahi.',
  'Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.':
    'Kuchh aisa: <em>yeh spellings compare kar sakta hai lekin matlab nahi.</em> Woh sentence sambhal kar rakhiye. Chapter 5 yeh kami bharta hai. Ho sake to use padhne se pehle ek din rukiye.',
  'Keyword search cannot see meaning, and it never reports that it found nothing. Chapter 5 fixes the first problem. Chapter 6 deals with the second, which is harder and more important.':
    'Keyword search matlab nahi dekh sakta, aur kabhi report nahi karta ki use kuchh nahi mila. Chapter 5 pehli problem theek karta hai. Chapter 6 doosri se nipatata hai, jo zyada mushkil aur zyada zaroori hai.'

});
