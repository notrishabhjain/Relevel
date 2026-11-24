/* Hinglish for Putting it together: retrieval-augmented generation (RAG) (chapter:ch7), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Draw the whole system from memory. Mark every failure you have seen with your own eyes.':
    'Poora system yaad se banaiye. Har woh galti mark kijiye jo aapne khud apni aankhon se dekhi hai.',
  'Write the smallest function (a named recipe) that finds evidence and answers from it. Return the evidence ids and the usage block (the bill: bricks in, bricks out).':
    'Sabse chhota function (naam wali recipe) likhiye jo saboot dhoondhe aur usi se jawaab de. Evidence ids aur usage block (bill: kitni eentein gayin, kitni aayin) wapas dijiye.',
  'Test three things: a question with no answer, a chunk that hides a planted instruction, and the system with its standing instructions removed.':
    'Teen cheezein test kijiye: bina-jawaab wala sawaal, aisa chunk jisme chhupi hui instruction rakhi hai, aur woh system jisse uske standing instructions hata diye gaye.',
  'A drawing of the system with the failures marked in red, plus a working demo.':
    'Failures laal rang mein mark kiye hue system ka ek chitra, aur ek chalta hua demo.',
  'You can explain every layer in your own words, without hiding behind a ready-made kit.':
    'Aap har layer apne shabdon mein samjha sakte hain, kisi tayyar kit ke peeche chhupe bina.',
  'You have already built every part of a RAG system in Chapters 1 to 6. Now you join the parts into one function. You give the pattern its name. And you mark every spot where it can fail with no error showing.':
    'Chapters 1 se 6 mein aap RAG system ka har hissa pehle hi bana chuke hain. Ab aap hisson ko ek function mein jodte hain. Aap is pattern ko uska naam dete hain. Aur har woh jagah mark karte hain jahan koi error dikhe bina galti ho sakti hai.',
  'Draw the usual design behind most “chat with your documents” products.':
    'Zyadatar “apne documents se baat karo” products ke peeche ka aam design banaiye.',
  'Point to each step. Say what can go wrong there while no error shows.':
    'Har step par ungli rakhiye. Bataiye ki wahan kya galat ho sakta hai jabki koi error nahi dikhta.',
  'Rank the usual fixes by how much they help. Say why a bigger model is rarely the best fix.':
    'Aam sudhaaron ko is hisaab se rank kijiye ki woh kitna madad karte hain. Bataiye ki bada model shayad hi sabse achha sudhaar kyun hota hai.',
  'Write the findings page for version 0':
    'Write the findings page for version 0',
  'You now have a first working version. This course calls it version 0. You also have a list of ways it fails. This capstone is not a build. It is the one page you would want in front of you when someone shows you a privacy product and asks you to approve it. You learned the usual parts of a system that answers from documents, and where each part can fail with no error showing. Now you describe your own system the same way.':
    'Ab aapke paas pehla chalta hua version hai. Is course mein ise version 0 kehte hain. Aapke paas uske fail hone ke tareekon ki list bhi hai. Yeh capstone kuch banana nahi hai. Yeh woh ek page hai jo aap tab saamne rakhna chahenge jab koi aapko privacy product dikhaye aur approve karne ko kahe. Aapne seekha ki documents se jawaab dene wale system ke aam hisse kaun se hain, aur har hissa kahan bina error dikhaye fail ho sakta hai. Ab aap apne system ko usi tarah bayaan karte hain.',
  'Writing only. Nothing to build. Use the notebook (the page where you run code) for numbers, and write the page in the notes box below. Short route, about 20 minutes: steps 1, 3 and 4.':
    'Sirf likhna hai. Kuch banana nahi. Numbers ke liye notebook (woh page jahan code chalta hai) use kijiye, aur page neeche ke notes box mein likhiye. Chhota route, lagbhag 20 minute: steps 1, 3 aur 4.',
  'Draw the tool as boxes and arrows on one page: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark which boxes exist today.':
    'Tool ko ek page par dibbon aur teeron se banaiye: text andar, pattern checker, naam-aur-jagah dhoondhne wala, context judge, niyam-rakhwala, surakshit text bahar. Mark kijiye ki aaj kaun se dibbe maujood hain.',
  'Under each box that exists, write what can go wrong while no error message shows. For example: “A number split by a line break is quietly missed.”':
    'Har maujood dibbe ke neeche likhiye ki kya galat ho sakta hai jabki koi error message nahi dikhta. Jaise: “Line break se toota hua number chupchaap chhoot jaata hai.”',
  'Write the scoreboard numbers from Chapter 6 on the page.':
    'Chapter 6 ke scoreboard ke numbers page par likhiye.',
  'List the four biggest gaps you have seen. For each one, write what you saw when you set it off.':
    'Aapne jo chaar sabse bade gaps dekhe, unki list banaiye. Har ek ke liye likhiye ki use chhedne par aapne kya dekha.',
  'Rank the four gaps by how they hurt a real user. In one line each, say what the failure would cost a real person.':
    'Chaaron gaps ko is hisaab se rank kijiye ki woh asli user ko kitna chot pahunchate hain. Har ek par ek line mein likhiye ki yeh galti ek asli insaan ko kitni mehngi padegi.',
  'In two sentences, write what you will fix first and what it would take.':
    'Do vaakyon mein likhiye ki sabse pehle kya theek karenge aur uske liye kya lagega.',
  'Save the page as <code>docs/findings-v0.md</code> in your repository (an online folder that remembers every change). Before you make the repository public, search it for keys (secret passwords) and real personal details. Then, if you want a link anyone can open, switch on the repository\'s public page (Pages, in its settings).':
    'Page ko apni repository (ek online folder jo har badlav yaad rakhta hai) mein <code>docs/findings-v0.md</code> naam se save kijiye. Repository ko public karne se pehle usme keys (secret password) aur asli personal details dhoondhiye. Phir agar aap aisa link chahte hain jo koi bhi khol sake, to repository ka public page (settings mein Pages) chalu kijiye.',
  'A one-page drawing of the tool, with the boxes that exist marked.':
    'Tool ka ek page ka chitra, jisme maujood dibbe mark hon.',
  'A quiet failure written under each box that exists.':
    'Har maujood dibbe ke neeche likhi ek chupchaap hone wali galti.',
  'The scoreboard numbers.':
    'Scoreboard ke numbers.',
  'The four biggest gaps, ranked, with what each costs a real person.':
    'Chaar sabse bade gaps, rank ke saath, aur har ek ek asli insaan ko kitna mehnga padta hai.',
  'Two sentences on what you will fix first.':
    'Do vaakya ki sabse pehle kya theek karenge.',
  'This chapter puts the whole system together.':
    'Is chapter mein aap poora system jodte hain.',
  'A long document is too big and too costly to send whole, so you cut it up.':
    'Lamba document poora bhejne ke liye bahut bada aur mehnga hai, isliye use kaatna padta hai.',
  'Embeddings find relevant chunks (an embedding is an address for meaning)':
    'Embeddings kaam ke chunks dhoondhte hain (embedding matlab ka pata hai)',
  'Sentences that mean the same live on the same street, even with no words in common.':
    'Jo vaakya ek matlab rakhte hain, woh ek hi gali mein rehte hain, chahe shabd ek jaise na hon.',
  'An answer key (the questions with right answers) shows if it works':
    'Answer key (sawaal aur sahi jawaab) dikhati hai ki yeh kaam karta hai ya nahi',
  'It also shows which failure you chose to live with.':
    'Yeh bhi dikhati hai ki aapne kaun si galti ke saath jeene ka faisla kiya.',
  'Your <code>embed</code>, <code>cosine</code>, <code>chunks</code> and <code>chunk_vecs</code> from Chapter 5 are already there. One Python session (one running copy of the code) runs the whole course. If you reloaded, press <strong>Restore</strong>. Then run the cell (one box of code) that makes <code>chunk_vecs</code> again. Nothing in this chapter is new. You only join what you already built.':
    'Chapter 5 ke <code>embed</code>, <code>cosine</code>, <code>chunks</code> aur <code>chunk_vecs</code> pehle se maujood hain. Ek Python session (code ki ek chalti hui copy) poore course ko chalata hai. Agar aapne reload kiya, to <strong>Restore</strong> dabaiye. Phir woh cell (code ka ek dibba) dobara chalaiye jo <code>chunk_vecs</code> banata hai. Is chapter mein kuch bhi naya nahi hai. Aap bas wahi jodte hain jo pehle bana chuke hain.',
  'Last chapter you measured your search with an answer key. So you now hold every part of a system that answers from your own documents. This chapter lays the parts side by side. It gives the whole thing its proper name. And it shows where it can go wrong without a sound.':
    'Pichhle chapter mein aapne answer key se apna search naapa. Ab aapke paas apne documents se jawaab dene wale system ka har hissa hai. Yeh chapter hisson ko saath-saath rakhta hai. Poori cheez ko uska sahi naam deta hai. Aur dikhata hai ki yeh bina awaaz ke kahan galat ho sakti hai.',
  'The pattern has a name: RAG':
    'The pattern has a name: RAG',
  'Start with what you have already built. You cut your documents into chunks (index cards). You make an embedding (an address for meaning) for each chunk. When a question comes in, you find the chunks nearest to it. You send those chunks to the model with the question. The model answers from them.':
    'Jo aap bana chuke hain, usse shuru kijiye. Aap documents ko chunks (index cards) mein kaatte hain. Har chunk ka ek embedding (matlab ka pata) banate hain. Sawaal aane par aap uske sabse paas ke chunks dhoondhte hain. Un chunks ko sawaal ke saath model ko bhejte hain. Model unhi se jawaab deta hai.',
  'This pattern is called <strong>RAG</strong>, short for retrieval-augmented generation. It is an open-book exam: first find the right page, then answer from it. <em>Generation</em> is the text model from Chapter 1. <em>Retrieval</em> is the search from Chapters 4 and 5. RAG is the most used pattern in applied AI. Most products that answer questions about your documents use it.':
    'Is pattern ko <strong>RAG</strong> kehte hain, yaani retrieval-augmented generation. Yeh open-book exam jaisa hai: pehle sahi page dhoondho, phir usi se jawaab do. <em>Generation</em> Chapter 1 ka text model hai. <em>Retrieval</em> Chapters 4 aur 5 ka search hai. RAG applied AI ka sabse zyada use hone wala pattern hai. Aapke documents ke baare mein jawaab dene wale zyadatar products ise use karte hain.',
  'The course kept this name back on purpose. You have built every part and broken every part. So the word points at something you did, not something you memorised.':
    'Course ne yeh naam jaan-boojh kar rok kar rakha. Aapne har hissa banaya aur har hissa tod kar dekha. Isliye yeh shabd us cheez ki taraf ishaara karta hai jo aapne ki, ratti hui cheez ki taraf nahi.',
  'Before we go on, try to see the whole thing in your head. Can you list the steps, from a document arriving to an answer reaching a user, without looking back?':
    'Aage badhne se pehle poori cheez dimaag mein dekhne ki koshish kijiye. Kya aap peeche dekhe bina steps ginwa sakte hain, document aane se lekar user tak jawaab pahunchne tak?',
  'Do not look back. Write the steps as a numbered list, from a document arriving to an answer reaching a user. Then star each step where a wrong answer can appear <em>with no error showing</em>.':
    'Peeche mat dekhiye. Steps ko number wali list mein likhiye, document aane se lekar jawaab user tak pahunchne tak. Phir har us step par taara lagaiye jahan galat jawaab <em>bina koi error dikhaye</em> aa sakta hai.',
  '1. … 2. … (star the quiet failures)':
    '1. … 2. … (chupchaap hone wali galtiyon par taara lagaiye)',
  'The steps: cut into chunks → make embeddings → store them → embed the question → find the nearest chunks → send them with the question → write the answer → show it with its sources. Almost every step can fail quietly. Chunking can cut a rule away from its exception. Search always hands back a top result, even when your documents have no answer. The model writes smooth text from a chunk that does not fit. None of these shows an error. The system does not crash. It just turns wrong while every part says all is well.':
    'Steps: chunks mein kaatna → embeddings banana → rakhna → sawaal ka embedding banana → sabse paas ke chunks dhoondhna → sawaal ke saath bhejna → jawaab likhna → sources ke saath dikhana. Lagbhag har step chupchaap fail ho sakta hai. Chunking kisi niyam ko uske apwaad se alag kaat sakti hai. Search hamesha top result thama deta hai, tab bhi jab aapke documents mein jawaab nahi hai. Model bekaar chunk se bhi smooth text likh deta hai. In mein se kisi par error nahi aata. System crash nahi hota. Bas galat ho jaata hai, jabki har hissa kehta hai sab theek hai.',
  'Mark where it fails':
    'Mark where it fails',
  'That last point is the heart of this chapter. A normal program fails loudly, with a red error. A RAG system usually fails politely. It gives a smooth, sure-sounding answer that is wrong, like a parrot that sounds certain. So build one habit: know where each failure hides.':
    'Woh aakhri baat is chapter ka dil hai. Aam program zor se fail hota hai, laal error ke saath. RAG system aam taur par tameez se fail hota hai. Woh smooth, pakka-sa lagta galat jawaab deta hai, us tote ki tarah jo bahut yakeen se bolta hai. Isliye ek aadat banaiye: jaaniye ki har galti kahan chhupti hai.',
  'Draw the path and mark the failures':
    'Draw the path and mark the failures',
  'Close everything. On paper, draw the whole path: documents → chunks → embeddings → storage → question → question embedding → nearest chunks → prompt put together → answer. Next to each arrow, write what happens there.':
    'Sab kuch band kijiye. Kagaz par poora raasta banaiye: documents → chunks → embeddings → storage → sawaal → sawaal ka embedding → sabse paas ke chunks → prompt jodna → jawaab. Har teer ke paas likhiye ki wahan kya hota hai.',
  'Then, in red, mark each place where you have seen it fail yourself.':
    'Phir laal rang se har woh jagah mark kijiye jahan aapne use khud fail hote dekha hai.',
  'You should find at least six. Some to look for: the made-up answer, the standing instructions giving way under pressure, the answer cut in two, and the chunk left alone. Others: word search missing the meaning, search never saying “nothing”, the question-versus-passage mix-up, quality that felt good but measured poorly, and the cost of every token (Lego brick of text). If you have fewer than six, look at the earlier chapters again.':
    'Aapko kam se kam chhe milne chahiye. Dhoondhne ke liye kuch: banawati jawaab, standing instructions ka dabav mein tut jaana, do tukdon mein kati hui jawaab, aur akela chhoota chunk. Baaki: shabd wale search ka matlab chook jaana, search ka kabhi “kuch nahi” na kehna, sawaal-versus-passage ki gadbad, jo quality achhi lagi par naap mein kharab nikli, aur har token (text ki Lego eent) ka kharch. Agar chhe se kam mile, to pichhle chapters dobara dekhiye.',
  'Assemble the system':
    'Assemble the system',
  'Now build the whole thing as one function (a named recipe). Nothing here is new. Each line comes from an earlier chapter. The comments beside the code (notes for people, not for the computer) say which one.':
    'Ab poori cheez ek function (naam wali recipe) ke roop mein banaiye. Yahan kuch bhi naya nahi hai. Har line pichhle chapter se aati hai. Code ke paas likhe comments (insaanon ke liye notes, computer ke liye nahi) batate hain ki kaun sa.',
  'Build the RAG function':
    'Build the RAG function',
  'First paste in your chunks from Chapter 5. Then add this function. Each line is something you built before. The chapter is noted beside it.':
    'Pehle Chapter 5 ke apne chunks paste kijiye. Phir yeh function jodiye. Har line woh hai jo aapne pehle banayi. Uska chapter paas mein likha hai.',
  'Run it three times, with three kinds of question:':
    'Ise teen baar chalaiye, teen tarah ke sawaal ke saath:',
  'Check the first answer against your source document. The second tests if search-by-meaning found evidence that word search missed. The third tests what happens when there is no answer. A refusal is not promised, so write down what really happens. Retrieval plus instructions can reduce unsupported answers, not eliminate them.':
    'Pehle jawaab ko apne source document se milaiye. Doosra jaanchta hai ki matlab se search ne woh saboot dhoondha ya nahi jo shabd wala search chook gaya. Teesra jaanchta hai ki jawaab na hone par kya hota hai. Mana kar dena pakka nahi hai, isliye jo sach mein hota hai woh likhiye. Retrieval plus instructions can reduce unsupported answers, not eliminate them. Yaani saboot dhoondhna aur instructions dena bina-saboot ke jawaab ghata sakte hain, khatam nahi kar sakte.',
  'Treat the third run as one test result. It is not proof that you are safe. Keep that question in your test set. Run it again each time the model, the prompt, the search or the documents change.':
    'Teesre run ko ek test ka nateeja maniye. Yeh is baat ka saboot nahi ki aap surakshit hain. Us sawaal ko apne test set mein rakhiye. Jab bhi model, prompt, search ya documents badlein, use phir chalaiye.',
  'You have seen that the system needs two things to stay honest: the evidence, and the instruction. What if you take one away? Let us find out.':
    'Aapne dekha ki system ko imaandaar rehne ke liye do cheezein chahiye: saboot, aur instruction. Agar ek hata di jaaye to? Chaliye dekhte hain.',
  'Remove the system prompt':
    'Remove the system prompt',
  'Delete the system message (the standing instructions on the shop wall). Keep everything else. Ask about cricket again.':
    'System message (deewar par lage niyam) hata dijiye. Baaki sab waisa hi rakhiye. Phir cricket ke baare mein poochhiye.',
  'The model happily sums up whatever three off-topic chunks ranked highest. Evidence alone does not stop made-up answers. You need both the evidence and the instruction. Take either one away and the problem comes back. Put the system message back.':
    'Model khushi se un teen bekaar chunks ka saar bata deta hai jo sabse upar aaye. Sirf saboot banawati jawaab nahi rokta. Aapko saboot aur instruction dono chahiye. Koi ek hatao to dikkat laut aati hai. System message wapas rakh dijiye.',
  'Diagnose “bad answers”':
    'Diagnose “bad answers”',
  'Sooner or later someone will say, “our AI assistant gives bad answers.” That is a symptom, like “I feel unwell”. It is not a diagnosis. At least four different problems look the same from outside. Each one needs a different fix.':
    'Der-saver koi kahega, “hamara AI assistant bure jawaab deta hai.” Yeh ek lakshan hai, jaise “tabiyat theek nahi”. Yeh jaanch nahi hai. Kam se kam chaar alag samasyayen bahar se ek jaisi dikhti hain. Har ek ka ilaaj alag hai.',
  'The map below shows where each one lives. Look at it with your red marks in mind.':
    'Neeche ka map dikhata hai ki har ek kahan rehti hai. Ise apne laal nishaanon ko yaad rakhte hue dekhiye.',
  'Here is a question every product person gets. You have one quarter to improve answer quality. Where should the effort go? Make your guess before you read on.':
    'Yeh sawaal har product wale se poochha jaata hai. Aapke paas ek quarter hai jawaab ki quality sudharne ke liye. Mehnat kahan lagaani chahiye? Aage padhne se pehle andaaza lagaiye.',
  'Your ranking, biggest help first':
    'Aapki ranking, sabse zyada madad wala pehle',
  'You have one quarter to improve answer quality. Before you read on, rank these: a pricier model, better chunking, a reranking step (a second pass that re-sorts the results), more work on the instructions, and cleaning up the documents.':
    'Aapke paas jawaab ki quality sudharne ke liye ek quarter hai. Aage padhne se pehle in ko rank kijiye: mehnga model, behtar chunking, reranking step (doosra daur jo results ko phir se sajata hai), instructions par zyada kaam, aur documents ki safai.',
  'Cleaning the documents and fixing the chunking usually help most. A reranking step is usually the next cheap big gain. A pricier model usually costs the most and helps the least. The model could already read. The right evidence was not reaching it.':
    'Documents ki safai aur chunking theek karna aam taur par sabse zyada madad karte hain. Reranking step aam taur par agla sasta bada faayda hota hai. Mehnga model aam taur par sabse zyada kharch karta hai aur sabse kam madad. Model padh to pehle se sakta tha. Sahi saboot us tak pahunch hi nahi raha tha.',
  'Here is a rule to keep. In a RAG system, bad quality is usually an evidence problem, not a model problem. Put your effort into getting the right evidence to the model.':
    'Yeh rakhne wala niyam hai. RAG system mein kharab quality aam taur par saboot ki samasya hai, model ki nahi. Apni mehnat sahi saboot ko model tak pahunchane mein lagaiye.',
  'You have built a whole RAG system, from cutting chunks to a grounded answer (one backed by evidence). You have seen each part fail. And you have a rule: when answers are bad, check the evidence before you blame the model.':
    'Aapne poora RAG system banaya, chunks kaatne se lekar saboot par tike jawaab tak. Aapne har hissa fail hote dekha. Aur aapke paas ek niyam hai: jawaab bure hon to model ko dosh dene se pehle saboot dekhiye.',
  'Part II adds what this version cannot do yet: answers in a fixed form, helpers that press buttons for you, longer inputs and stronger search. Next, you test your system four ways and find these gaps yourself.':
    'Part II woh jodta hai jo yeh version abhi nahi kar sakta: tay form mein jawaab, aise madadgaar jo aapke liye button dabayen, lambe inputs aur behtar search. Aage, aap apne system ko chaar tareekon se test karte hain aur yeh gaps khud dhoondhte hain.',
});
