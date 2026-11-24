/* Hinglish for Keyword search: matching words, and where it fails (chapter:ch4), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Use only Ctrl-F and your eyes. Rank the cards for your Chapter 3 questions. Do not use common sense. Let the word matches decide, like a machine would.':
    'Sirf Ctrl-F aur apni aankhein use kijiye. Chapter 3 ke sawaalon ke liye cards ko rank kijiye. Common sense mat lagaiye. Word matches ko faisla karne dijiye, jaise machine karti hai.',
  'Add four new questions. One uses a synonym (another word for the same thing). One is in plain everyday language. One is in a second language. One has an exact ID in it.':
    'Chaar naye sawaal jodiye. Ek mein synonym ho (ek hi cheez ka doosra shabd). Ek rozmarra ki saaf bhasha mein ho. Ek doosri bhasha mein ho. Ek mein ek exact ID ho.',
  'Ask something the document cannot answer at all. Then find the card that still comes out on top.':
    'Aisa kuch poochhiye jiska jawaab document mein hai hi nahi. Phir dhoondhiye ki kaun sa card phir bhi sabse upar aata hai.',
  'A map of the places where your search went wrong.':
    'Ek naksha jisme dikhe ki aapki search kahan-kahan galat gayi.',
  'Explain why getting a result back does not mean an answer exists.':
    'Samjhaiye ki result wapas aa jaana ka matlab yeh nahi ki jawaab maujood hai.',
  'The first way to find the right chunk is to match the words in the question, like Ctrl+F. You will do this by hand on your own chunks. You will see exactly where it fails. And you will meet the one kind of question where it wins.':
    'Sahi chunk dhoondhne ka pehla tareeka hai sawaal ke shabd match karna, jaise Ctrl+F. Aap yeh apne chunks par haath se karenge. Dekhenge ki woh theek kahan fail hota hai. Aur ek aisa sawaal bhi milega jahan woh jeetta hai.',
  'Explain why keyword search fails most for the people who need help most.':
    'Samjhaiye ki keyword search unhi logon ke liye sabse zyada fail kyun hoti hai jinhe madad ki sabse zyada zaroorat hai.',
  'Name the kind of question where keyword search beats every other method.':
    'Us tarah ke sawaal ka naam batayiye jisme keyword search baaki sab tareekon se behtar hai.',
  'Say what search gives back when the answer is not in your documents, and why that is dangerous.':
    'Batayiye ki jab jawaab aapke documents mein nahi hota tab search kya wapas deti hai, aur yeh khatarnaak kyun hai.',
  'Write the pattern rules, and score them by hand':
    'Pattern rules likhiye, aur unhe haath se jaanchiye',
  'The pattern checker is the first and cheapest part of the tool. It looks for details that always have the same shape, such as a PAN. In this chapter you played the search engine yourself. You matched words by hand and saw where that breaks. Now write the pattern checker\'s rules in plain words. Apply them by hand to your answer key (the questions with the right answers written down). Record exactly where they fail.':
    'Pattern checker tool ka pehla aur sabse sasta hissa hai. Woh aisi details dhoondhta hai jinki shakal hamesha ek jaisi hoti hai, jaise PAN. Is chapter mein aap khud search engine bane. Aapne haath se shabd match kiye aur dekha ki woh kahan toot-ta hai. Ab pattern checker ke rules saaf shabdon mein likhiye. Unhe apni answer key par haath se lagaiye (sawaal jinke sahi jawaab likhe hain). Likhiye ki woh theek kahan fail hote hain.',
  'This is written work. No code yet. You apply the rules by hand, like you did in the chapter. In Chapter 5 you turn them into code. Short version for the route, about 20 minutes: steps 1, 3 and 4.':
    'Yeh likhne ka kaam hai. Abhi code nahi. Rules haath se lagaiye, jaise chapter mein kiya. Chapter 5 mein inhe code banayenge. Route ke liye chhota version, kareeb 20 minute: steps 1, 3 aur 4.',
  'Open the table of the eleven kinds of ID on the project page. For each kind, write a rule in plain words that anyone could follow without thinking. For example: “A PAN is five capital letters, then four digits, then one capital letter.”':
    'Project page par gyarah tarah ki ID ki table kholiye. Har tarah ke liye saaf shabdon mein ek rule likhiye jise koi bhi bina sochey laga sake. Jaise: “A PAN is five capital letters, then four digits, then one capital letter.”',
  'Add one thing each rule must not match. For example: “A PIN code is six digits, but a six-digit number right after the word ‘account’ is not a PIN code.”':
    'Har rule mein ek aisi cheez jodiye jise woh match na kare. Jaise: “A PIN code is six digits, but a six-digit number straight after the word ‘account’ is not a PIN code.”',
  'Take the twelve rows of your answer key (version 1). Read each sentence like a machine would, using your rules strictly. In a new column, write down what your rules would find.':
    'Apni answer key (version 1) ki baarah rows lijiye. Har sentence machine ki tarah padhiye, apne rules ko sakhti se lagaiye. Ek naye column mein likhiye ki aapke rules kya dhoondhenge.',
  'Compare your new column with the right answers. Mark each row with one of three marks: found everything, missed something, or found something wrong.':
    'Apne naye column ko sahi jawaabon se milaiye. Har row par teen mein se ek nishaan lagaiye: sab mila, kuch chhoot gaya, ya kuch galat mil gaya.',
  'Pick the three failures that teach you the most. For each, describe the sentence. Say why a fixed rule cannot handle it. Look hardest at starter sentence 4 (the half-hidden number), starter sentence 6 (names and addresses) and starter sentence 8 (no ID at all).':
    'Woh teen failures chuniye jinse sabse zyada seekhne ko milta hai. Har ek ke liye sentence bataiye. Likhiye ki tay rule use kyun nahi sambhal sakta. Khaas dhyaan dijiye starter sentence 4 (aadha chhupa number), starter sentence 6 (naam aur pate) aur starter sentence 8 (koi ID nahi) par.',
  'Write a short paragraph. For which kinds of detail do fixed rules work well? For which should another approach take over?':
    'Ek chhota paragraph likhiye. Kis tarah ki details par tay rules achhe chalte hain? Kin par koi doosra tareeka sambhale?',
  'A plain-words rule for each of the eleven kinds of ID, each with one thing it must not match.':
    'Gyarah tarah ki ID mein se har ek ke liye saaf shabdon ka rule, har rule mein ek cheez jo woh match na kare.',
  'Your answer key with a new column of what the rules would find, and each row marked.':
    'Aapki answer key, ek naye column ke saath jisme rules ka mila hua likha ho, aur har row par nishaan.',
  'Three failures described, each with the reason a fixed rule cannot handle it.':
    'Teen failures ka byaura, har ek ke saath wajah ki tay rule use kyun nahi sambhal sakta.',
  'A paragraph on where rules work and where something else must take over.':
    'Ek paragraph ki rules kahan chalte hain aur kahan koi aur tareeka sambhale.',
  'You keep the chunks, and send the model only the few that matter, like a few index cards from the stack.':
    'Aap chunks sambhal kar rakhte hain, aur model ko sirf kuch zaroori bhejte hain, jaise dher mein se kuch index cards.',
  'Some chunks make no sense alone':
    'Kuch chunks akele mein samajh nahi aate',
  '“The aforesaid amount” no longer says which amount.':
    '“The aforesaid amount” ab yeh nahi batata ki kaun si amount.',
  'There is no code in this chapter yet. Bring the twenty cards you cut in Chapter 3 and the five questions you wrote before cutting. Today you play the search engine yourself.':
    'Is chapter mein abhi code nahi hai. Chapter 3 mein kaate hue bees cards aur kaatne se pehle likhe paanch sawaal saath rakhiye. Aaj aap khud search engine bante hain.',
  'Last chapter you cut a document into twenty chunks, like twenty index cards. Now picture this. A question arrives. Something has to pick which cards to send to the model.':
    'Pichhle chapter mein aapne ek document ko bees chunks mein kaata, jaise bees index cards. Ab socho: ek sawaal aata hai. Kisi ko chunna hai ki model ko kaun se cards bhejne hain.',
  'The obvious way is to match words. Search boxes have worked like this for many years. If the question says <em>refund</em>, find the chunks that contain <em>refund</em>. It is fast and cheap. It is called <strong>keyword search</strong>, like pressing Ctrl+F.':
    'Seedha tareeka hai shabd match karna. Search boxes kai saalon se aise hi chalte aaye hain. Agar sawaal mein <em>refund</em> hai, to woh chunks dhoondhiye jinme <em>refund</em> likha hai. Yeh tez aur sasta hai. Ise <strong>keyword search</strong> kehte hain, jaise Ctrl+F dabana.',
  'It sounds like it must work. This chapter shows you where it does work, and where it quietly lets people down.':
    'Yeh to chalna hi chahiye, aisa lagta hai. Is chapter mein dekhenge ki woh kahan chalta hai, aur kahan chupchaap logon ko dhokha deta hai.',
  'Keyword search matches spelling, not meaning':
    'Keyword search spelling milati hai, matlab nahi',
  'Start with a small puzzle. A user wants their money back. Your document is a company policy. Do the two use the same words?':
    'Ek chhoti paheli se shuru kijiye. Ek user apne paise wapas chahta hai. Aapka document company policy hai. Kya dono ek hi shabd use karte hain?',
  'First try it by hand. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write down the words keyword search would look for. Then write down the words the policy probably uses instead.':
    'Pehle haath se aazmaiye. Ek user type karta hai: <em>when do I get my money back?</em> Aapka document company policy hai. Woh shabd likhiye jo keyword search dhoondhegi. Phir woh shabd likhiye jo policy shaayad use karti hai.',
  'What the user typed → what the document says':
    'User ne kya type kiya → document kya kehta hai',
  'The user wrote <em>money</em>, <em>back</em> and <em>get</em>. The policy says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> and <em>the aforesaid amount</em>. The two lists share no word at all. Yet the question is clear, and the paragraph answers it.':
    'User ne likha <em>money</em>, <em>back</em> aur <em>get</em>. Policy kehti hai <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> aur <em>the aforesaid amount</em>. Dono list mein ek bhi shabd common nahi. Phir bhi sawaal saaf hai, aur paragraph uska jawaab deta hai.',
  'Keyword search compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match. It is like looking for “mummy” in a book that only says “mother”.':
    'Keyword search spelling milati hai, matlab nahi. Do sentence ka matlab ek ho par shabd common na hon, to woh match nahi hote. Jaise “mummy” ko aisi kitaab mein dhoondhna jisme sirf “mother” likha hai.',
  'Run keyword search by hand':
    'Keyword search haath se chalaiye',
  'The best way to feel this is to be the search engine yourself. You follow one simple rule: count the matching words, and nothing else.':
    'Ise mehsoos karne ka sabse achha tareeka hai khud search engine banna. Ek simple rule maniye: milte hue shabd ginna, aur kuch nahi.',
  'Act as the search engine':
    'Search engine ban jaiye',
  'Run keyword search by hand: all five questions against all twenty cards. First underline the key words in each question. Then find those words in the cards. Give one point for each match. Last, rank the cards by score.':
    'Keyword search haath se chalaiye: paancho sawaal, bees cards ke saamne. Pehle har sawaal ke zaroori shabdon par line khichiye. Phir un shabdon ko cards mein dhoondhiye. Har match par ek point dijiye. Aakhir mein cards ko score se rank kijiye.',
  'Do not use your own understanding of the document. Only the scores count.':
    'Document ki apni samajh mat lagaiye. Sirf scores ginte hain.',
  'For each question, write down two things. Did the top card hold the answer? If not, at what rank was the right card?':
    'Har sawaal ke liye do cheezein likhiye. Kya sabse upar wale card mein jawaab tha? Agar nahi, to sahi card kis rank par tha?',
  'Clearly worded questions will probably do surprisingly well. Do not trust that. You wrote these questions after reading the document, so you used its own words. Real users have usually not read it.':
    'Saaf shabdon wale sawaal shaayad hairaan karne wali had tak achhe chalenge. Is par bharosa mat kijiye. Aapne yeh sawaal document padhne ke baad likhe, isliye aapne uske apne shabd use kiye. Asli users ne aksar use padha nahi hota.',
  'So let\'s make the test fair. Write questions the way real users would, and see what happens.':
    'Chaliye test ko nyayi banate hain. Sawaal waise likhiye jaise asli users likhenge, aur dekhiye kya hota hai.',
  'Write three harder questions':
    'Teen mushkil sawaal likhiye',
  'Write three new questions about the same document. Make each one so that keyword search will fail.':
    'Usi document ke baare mein teen naye sawaal likhiye. Har ek aisa banaiye ki keyword search fail ho jaye.',
  '<strong>A synonym question:</strong> take a formal word from the document and say it the way most people would.':
    '<strong>Synonym wala sawaal:</strong> document ka koi bhaari shabd lijiye aur use waise kahiye jaise zyadatar log kehte hain.',
  '<strong>A plain-language question:</strong> write it like a first-time user would type it, someone who does not know the document\'s words.':
    '<strong>Saaf bhasha wala sawaal:</strong> use waise likhiye jaise pehli baar aane wala user type karega, jo document ke shabd nahi jaanta.',
  '<strong>A second-language question:</strong> ask the same thing in another language your users really use.':
    '<strong>Doosri bhasha wala sawaal:</strong> wahi baat doosri bhasha mein poochhiye jo aapke users sach mein bolte hain.',
  'Score all three by hand, the same way as before.':
    'Teeno ko haath se score kijiye, pehle ki tarah.',
  'You will see that the cards that clearly hold the answer score close to zero. Yet some card still comes out on top. For each question, write one sentence: what did the scoring not know?':
    'Aap dekhenge ki jin cards mein jawaab saaf hai unka score zero ke aas-paas hai. Phir bhi koi na koi card sabse upar aa jaata hai. Har sawaal ke liye ek sentence likhiye: scoring ko kya pata nahi tha?',
  'Where keyword search fails':
    'Keyword search kahan fail hoti hai',
  'You have just seen it fail. It is not luck either. It fails in three places you can predict, and all three cost a business money.':
    'Aapne abhi use fail hote dekha. Yeh ittefaaq bhi nahi hai. Woh teen aisi jagah fail hoti hai jinka andaza lag sakta hai, aur teeno se business ko nuksaan hota hai.',
  'The first is the gap between formal and everyday words. Documents say <em>termination for convenience</em>, but people say <em>cancel</em>. Experts write the documents. Everyone else writes the questions.':
    'Pehli hai bhaari shabdon aur rozmarra ke shabdon ka fark. Documents kehte hain <em>termination for convenience</em>, par log kehte hain <em>cancel</em>. Documents expert likhte hain. Sawaal baaki sab likhte hain.',
  'The second is the most uncomfortable. Keyword search fails the people who need help most. Someone who knows your product uses your words, so they find what they need. Someone who is confused uses their own words and finds nothing. It works worst for people with the biggest problems.':
    'Doosri sabse takleefdeh hai. Keyword search unhe dhokha deti hai jinhe madad ki sabse zyada zaroorat hai. Jo aapka product jaanta hai woh aapke shabd bolta hai, to use mil jaata hai. Jo uljha hua hai woh apne shabd bolta hai aur use kuch nahi milta. Sabse bade problem wale logon par yeh sabse kharab chalti hai.',
  'The third is plain questions. <em>Why was I charged twice?</em> shares almost no words with the paragraph that explains duplicate authorisation holds. The user asks in their own words. The document answers in its own.':
    'Teesri hai saade sawaal. <em>Why was I charged twice?</em> ke shabd us paragraph se lagbhag nahi milte jo duplicate authorisation holds samjhata hai. User apne shabdon mein poochhta hai. Document apne shabdon mein jawaab deta hai.',
  'Where keyword search wins':
    'Keyword search kahan jeet-ti hai',
  'It would be unfair to stop here. Keyword search is great at some things. Think of exact codes, section numbers, policy IDs, part numbers and names.':
    'Yahin ruk jaana na-insaafi hogi. Keyword search kuch cheezon mein bahut achhi hai. Exact codes, section numbers, policy IDs, part numbers aur naam sochiye.',
  'If a user types <em>clause 14.2</em>, they want clause 14.2. Finding that exact text is the right way. All you need is spelling, like finding a house by its door number.':
    'Agar user <em>clause 14.2</em> type karta hai, to use clause 14.2 chahiye. Wahi exact text dhoondhna sahi tareeka hai. Bas spelling kaafi hai, jaise ghar ko uske darwaze ke number se dhoondhna.',
  'Search for an exact code':
    'Exact code dhoondhiye',
  'Ask a question that has an exact code, section number or defined term in it. Copy it straight from the document.':
    'Aisa sawaal poochhiye jisme exact code, section number ya tay kiya hua term ho. Use seedha document se copy kijiye.',
  'Keyword search usually ranks an exact code or defined term high. Write down its real rank. Do not assume. This is the strength that search by meaning, in the next chapter, adds to and does not replace.':
    'Keyword search aam taur par exact code ya tay kiye hue term ko upar rank karti hai. Uska asli rank likhiye. Andaza mat lagaiye. Yahi woh taakat hai jisme agle chapter ki meaning wali search kuch jodti hai, use hataati nahi.',
  'Search has one more habit that causes serious trouble later. Before we name it, make a guess.':
    'Search ki ek aur aadat hai jo aage badi museebat banti hai. Naam batane se pehle andaza lagaiye.',
  'The book showed this once. Guess what your own search returns when you ask something your documents do not cover at all. Then run it.':
    'Kitaab ne yeh ek baar dikhaya tha. Andaza lagaiye ki jab aap aisa kuch poochhte hain jo aapke documents mein hai hi nahi, to aapki search kya deti hai. Phir chalakar dekhiye.',
  'Twenty chunks, ranked, with one on top. Search has no idea of “nothing here”. It scores everything and sorts the list, like a teacher who must give every student a rank, even in an exam nobody took. For a question with no answer, the top result is just the least bad one.':
    'Bees chunks, rank ke saath, ek sabse upar. Search ko “yahan kuch nahi hai” ka idea hi nahi hai. Woh sab ko score deti hai aur list sort kar deti hai, jaise ek teacher jise har bachche ko rank dena hai, chahe kisi ne exam diya hi na ho. Jis sawaal ka jawaab hai hi nahi, uska top result bas sabse kam kharaab wala hota hai.',
  'Now join this with Chapter 2. The wrong chunk goes to the model as if it were proof. The model writes a smooth answer from it. No step shows an error. You get a sure-sounding wrong answer, and nothing in the system notices.':
    'Ab ise Chapter 2 se jodiye. Galat chunk model ke paas saboot ki tarah chala jaata hai. Model usse ek chikna jawaab likh deta hai. Kisi step mein koi error nahi dikhta. Aapko pakka lagne wala galat jawaab milta hai, aur system mein kisi ko pata nahi chalta.',
  'This is why getting a result back never proves an answer exists. Remember that. One last small exercise ties the chapter together.':
    'Isliye result wapas aa jaana kabhi yeh saabit nahi karta ki jawaab maujood hai. Yeh yaad rakhiye. Ek aakhri chhota abhyas chapter ko jod dega.',
  'Name the missing ability':
    'Woh kami batayiye jo search mein nahi hai',
  'Look at your three harder questions. Write one sentence about the ability keyword search does not have. Describe the gap, not the fix.':
    'Apne teen mushkil sawaal dekhiye. Us kabiliyat par ek sentence likhiye jo keyword search mein nahi hai. Kami bataiye, ilaaj nahi.',
  'Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.':
    'Kuch aisa: <em>it can compare spellings but not meanings.</em> Woh sentence sambhaal kar rakhiye. Chapter 5 is kami ko bharta hai. Ho sake to use padhne se pehle ek din ruk jaiye.',
  'Keyword search has two weak spots. It cannot see meaning. And it never tells you it found nothing.':
    'Keyword search ke do kamzor point hain. Woh matlab nahi dekh sakti. Aur woh kabhi nahi batati ki use kuch nahi mila.',
  'Next, in Chapter 5, you fix the first one by teaching search to compare meaning, not spelling. Chapter 6 then takes on the second weak spot. It is harder and matters more.':
    'Aage Chapter 5 mein aap pehli kamzori theek karenge, search ko spelling ke bajaye matlab milana sikhakar. Chapter 6 doosri kamzori sambhalta hai. Woh zyada mushkil aur zyada zaroori hai.',
});
