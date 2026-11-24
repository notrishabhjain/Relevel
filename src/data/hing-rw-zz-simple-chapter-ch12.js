/* Hinglish for Better retrieval: hybrid search, reranking, context and filters (chapter:ch12), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'In Part I you built retrieval (a finder). It looks up the right pieces of your documents. It works, but it is the plainest kind. Now you add four upgrades. You test each one with the same answer key (the teacher\'s list of right answers). The dullest upgrade, metadata filtering, stops mistakes that the other three cannot.':
    'Part I mein aapne retrieval (ek finder) banayi. Woh aapke documents ke sahi tukde dhoondhti hai. Woh kaam karti hai, par sabse saada waali hai. Ab aap chaar upgrade jodenge. Har ek ko usi answer key (teacher ki sahi jawaabon ki list) se parakhenge. Sabse feeka upgrade, metadata filtering, aisi galtiyan rokta hai jo baaki teen nahi rok sakte.',
  'Mix keyword search (like Ctrl+F) with meaning search. Do not pick only one.':
    'Keyword search (jaise Ctrl+F) aur meaning search ko mila dena. Sirf ek ko mat chuniye.',
  'Say which upgrade helps both recall (fish caught) and precision (how much of the net is fish) at once, and what it costs.':
    'Bata paana ki kaun sa upgrade recall (kitni machhli pakdi) aur precision (jaal mein kitni sach mein machhli hai) dono ko ek saath behtar karta hai, aur uski keemat kya hai.',
  'Name the mistake that no sorting trick can fix, and the simple step that does fix it.':
    'Us galti ka naam bata paana jo koi sorting trick theek nahi kar sakti, aur woh saada step jo karta hai.',
  'Make finding better, one change at a time':
    'Dhoondhna behtar banaiye, ek-ek change karke',
  'In Chapter 6 you learned to measure finding. This chapter gave you four ways to improve it. Mix keyword search with meaning. Give each piece more background. Fetch many results, then sort them again. Throw out results that cannot be right. The name-and-place finder needs a small reference list (Indian places, bank codes, vehicle state codes). Now you try the four changes on the lookup in that list. You measure each one.':
    'Chapter 6 mein aapne dhoondhna naapna seekha. Is chapter ne use behtar karne ke chaar tareeke diye. Keyword search ko meaning ke saath milaiye. Har tukde ko zyada background dijiye. Bahut saare results laiye, phir unhe dobara sort kijiye. Jo results sahi ho hi nahi sakte, unhe nikaal dijiye. Naam-aur-jagah dhoondhne wale finder ko ek chhoti reference list chahiye (Indian places, bank codes, vehicle state codes). Ab aap chaaron changes us list ke lookup par aazmayenge. Har ek ko naapenge.',
  'This is your notebook (a page where you write code and run it) for this chapter. Make each change in code, then measure it. In the notes box below, rank the four changes. Short version for the route, about 20 minutes: steps 1, 2, 3 and 4.':
    'Yeh is chapter ka aapka notebook hai (ek page jahan code likhte aur chalate hain). Har change code mein kijiye, phir use naapiye. Neeche notes box mein chaaron changes ko rank kijiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2, 3 aur 4.',
  'Make a small reference list of about fifty lines, one fact per line. Put in: Indian cities and states; vehicle registration state codes (like MH and DL); the first four letters of the IFSC codes (a bank branch\'s ID) of ten banks; and PIN code ranges for five cities.':
    'Lagbhag pachaas lines ki ek chhoti reference list banaiye, har line mein ek fact. Isme daaliye: Indian cities aur states; vehicle registration state codes (jaise MH aur DL); das banks ke IFSC codes (bank branch ki ID) ke pehle chaar letters; aur paanch cities ke PIN code ranges.',
  'Write twenty questions the tool might ask the list. For example: “Is Gurgaon a place?”, “Which bank is HDFC?” and “Is 122001 a PIN code in Gurgaon?”. For each question, write the right line. This is your answer key for this stage.':
    'Bees sawaal likhiye jo tool us list se pooch sakta hai. Jaise: “Is Gurgaon a place?”, “Which bank is HDFC?” aur “Is 122001 a PIN code in Gurgaon?”. Har sawaal ke liye sahi line likhiye. Yeh is stage ki answer key hai.',
  'Measure today\'s lookup. It uses meaning only. How often is the right line first? How often is it in the top three?':
    'Aaj ka lookup naapiye. Woh sirf meaning use karta hai. Kitni baar sahi line sabse upar aati hai? Kitni baar top teen mein aati hai?',
  'Add keyword matching next to meaning. Combine the two. Measure again.':
    'Meaning ke saath keyword matching jodiye. Dono ko milaiye. Dobara naapiye.',
  'Add a little background to each line, so it makes sense on its own. For example: “HDFC Bank: HDFC at the start of an IFSC code”. Measure again.':
    'Har line mein thoda background jodiye, taaki woh akeli bhi samajh aaye. Jaise: “HDFC Bank: HDFC at the start of an IFSC code”. Dobara naapiye.',
  'Fetch the top ten lines. Sort them again and keep three. Measure again. Write down the extra time it takes.':
    'Top das lines laiye. Unhe dobara sort kijiye aur teen rakhiye. Dobara naapiye. Jo extra time lagta hai, woh likh lijiye.',
  'Add a filter that throws out lines that cannot be right. For example: if the sentence has a PIN code, search only the PIN code lines. Measure again.':
    'Ek filter jodiye jo aisi lines nikaal de jo sahi ho hi nahi sakti. Jaise: agar sentence mein PIN code hai, toh sirf PIN code wali lines mein dhoondhiye. Dobara naapiye.',
  'Rank the four changes. Say how much each one helped and what each one costs.':
    'Chaaron changes ko rank kijiye. Likhiye ki har ek ne kitna fayda diya aur uski keemat kya hai.',
  'The reference list, and the twenty questions with their right lines.':
    'Reference list, aur bees sawaal unki sahi lines ke saath.',
  'A table that shows the result after each of the four changes.':
    'Ek table jisme chaaron changes ke baad ka result dikhe.',
  'A ranking of the changes: by benefit, and by cost.':
    'Changes ki ranking: fayde ke hisaab se, aur keemat ke hisaab se.',
  'Your retrieval (finder) was the plainest kind that works':
    'Aapki retrieval (finder) sabse saada waali thi jo kaam karti hai',
  'You saw its limit in Chapter 7.5. This chapter makes it better.':
    'Aapne Chapter 7.5 mein iski limit dekhi thi. Yeh chapter use behtar banata hai.',
  'One misses the meaning. The other misses the exact word.':
    'Ek meaning chhod deta hai. Doosra exact shabd chhod deta hai.',
  'You saw this give-and-take in Chapter 6.':
    'Yeh lena-dena aapne Chapter 6 mein dekha tha.',
  'Your chunks (the index cards you cut your documents into), <code>chunk_vecs</code> (their meaning addresses) and the Chapter 6 answer key stay in your notebook session. After a reload, press <strong>Restore</strong>. Then run the cell (one box of code) that makes <code>chunk_vecs</code> again.':
    'Aapke chunks (woh index cards jinme documents kaate the), <code>chunk_vecs</code> (unke meaning ke pate) aur Chapter 6 ki answer key notebook session mein bachi rehti hain. Reload ke baad <strong>Restore</strong> dabaiye. Phir woh cell (code ka ek dabba) chalaiye jo <code>chunk_vecs</code> dobara banata hai.',
  'In Chapter 7.5 you saw a gap. The finder you built in Part I is the plainest kind that works. It finds things, but not always the right things. Here are four ways to improve it. The first helps most, and the last helps least.':
    'Chapter 7.5 mein aapne ek kami dekhi thi. Part I mein banaya finder sabse saada waala hai jo kaam karta hai. Woh cheezein dhoondhta hai, par hamesha sahi nahi. Yahan use behtar banane ke chaar tareeke hain. Pehla sabse zyada madad karta hai, aakhri sabse kam.',
  'You do not have to trust us. After each change, you measure the result against your Chapter 6 answer key. Then you see for yourself what each change really gives you.':
    'Aapko hum par bharosa karne ki zaroorat nahi. Har change ke baad aap result ko apni Chapter 6 answer key se naapte hain. Phir aap khud dekhte hain ki har change se asal mein kya milta hai.',
  'Technique 1: Hybrid search':
    'Technique 1: Hybrid search',
  'Start with a problem you already know. Keyword search is good at exact words, like a code or a name. It is weak at meaning. It is like Ctrl+F. Meaning search is the opposite. It knows two phrases say the same thing. But it can miss an exact code.':
    'Ek aisi problem se shuru kijiye jo aap jaante hain. Keyword search exact shabdon mein achha hai, jaise koi code ya naam. Woh meaning mein kamzor hai. Yeh Ctrl+F jaisa hai. Meaning search ulta hai. Woh jaanta hai ki do phrases ek hi baat kehte hain. Par woh exact code chhod sakta hai.',
  'So why pick one? <strong>Hybrid search</strong> (using both together) runs both searches. Then it mixes the two lists into one list. It is like asking two friends and merging their answers. The tool below shows how the mixing works.':
    'Toh ek hi kyun chunein? <strong>Hybrid search</strong> (dono ko saath use karna) dono searches chalata hai. Phir dono lists ko mila kar ek list banata hai. Yeh aise hai jaise do doston se poochhna aur unke jawaab milana. Neeche wala tool dikhata hai ki yeh milana kaise hota hai.',
  'To try it yourself, you first need keyword search in code. You did it by hand in Chapter 4. Now let the computer do it.':
    'Khud aazmane ke liye pehle code mein keyword search chahiye. Aapne ise Chapter 4 mein haath se kiya tha. Ab computer se karwaiye.',
  'Write keyword search in code':
    'Code mein keyword search likhiye',
  'First, write the keyword scoring you did by hand in Chapter 4. This time, write it in code. A score is just a number that says how well a line matches.':
    'Pehle woh keyword scoring likhiye jo aapne Chapter 4 mein haath se ki thi. Is baar code mein likhiye. Score ek number hai jo batata hai ki line kitni achhi tarah match hui.',
  'Run it on your Chapter 4 questions. Check that you get nearly the same rankings you wrote by hand. The three hard questions should fail in the same way too.':
    'Ise apne Chapter 4 ke sawaalon par chalaiye. Dekhiye ki lagbhag wahi rankings aati hain jo aapne haath se likhi thi. Teen mushkil sawaal bhi usi tarah fail hone chahiye.',
  'Now every question has two rankings. One comes from meaning. One comes from keywords. Next, you merge them.':
    'Ab har sawaal ki do rankings hain. Ek meaning se aayi. Ek keywords se aayi. Ab aap dono ko milate hain.',
  'Combine the two rankings':
    'Dono rankings ko milaiye',
  'Then grade your whole Chapter 6 answer key three ways, all at k=3 (the top three results). First use meaning search only. Then keyword search only. Then hybrid. Fill in the table as you go.':
    'Phir apni poori Chapter 6 answer key ko teen tareeke se grade kijiye, teeno k=3 par (top teen results). Pehle sirf meaning search. Phir sirf keyword search. Phir hybrid. Saath-saath table bharte jaaiye.',
  'Way of searching':
    'Dhoondhne ka tareeka',
  'Hits (out of 9)':
    'Hits (9 mein se)',
  'Keyword search only':
    'Sirf keyword search',
  'Ch.4 numbers, now run by code':
    'Ch.4 ke numbers, ab code se',
  'Meaning search only':
    'Sirf meaning search',
  'Ch.5 numbers':
    'Ch.5 ke numbers',
  'Hybrid (RRF, a way to mix two rankings)':
    'Hybrid (RRF, do rankings milane ka ek tareeka)',
  'Hybrid usually matches the better of the two, or beats it. It should fix your exact-code question. It should also keep the same-meaning question. If it does not, write down which question hybrid got wrong, and why.':
    'Hybrid aam taur par un dono mein se behtar ke barabar hota hai, ya usse achha. Isse aapka exact-code wala sawaal theek hona chahiye. Same-meaning wala sawaal bhi bacha rehna chahiye. Agar aisa nahi hota, toh likhiye ki hybrid ne kaun sa sawaal galat kiya, aur kyun.',
  'Technique 2: Reranking':
    'Technique 2: Reranking',
  'Hybrid search helps you find pieces. The next technique helps you sort them. <strong>Reranking</strong> (sorting the shortlist again, more carefully) gives a big gain for a small cost.':
    'Hybrid search tukde dhoondhne mein madad karta hai. Agli technique unhe sort karne mein madad karti hai. <strong>Reranking</strong> (shortlist ko dobara, dhyaan se sort karna) chhoti keemat mein bada fayda deta hai.',
  'It works like this. First, you grab many pieces fast and cheap, say fifty. Then a second model, slower and more careful, reads the question and each piece together. It scores them again. You keep the best five. It is like a teacher re-checking the top fifty answer sheets.':
    'Yeh aise kaam karta hai. Pehle aap tez aur sasta tareeke se bahut tukde uthate hain, jaise pachaas. Phir ek doosra model, dheema aur zyada dhyaan wala, sawaal aur har tukde ko saath padhta hai. Woh unhe dobara score karta hai. Aap sabse achhe paanch rakhte hain. Yeh aise hai jaise teacher top pachaas copies dobara jaanche.',
  'How much does it move?':
    'Kitna badalta hai?',
  'Predict: you add a reranking step to a system that already works. How much does the quality change?':
    'Andaaza lagaiye: ek chalte hue system mein aap reranking step jodte hain. Quality kitni badalti hai?',
  'Usually it jumps up a lot, right away. Recall and precision both get better at once. You find more, because you grabbed fifty pieces, not five. And fewer wrong pieces stay, because the second model really read them.':
    'Aam taur par turant bahut badhti hai. Recall aur precision dono ek saath behtar hote hain. Aapko zyada milta hai, kyunki aapne paanch ki jagah pachaas tukde uthaye. Aur galat tukde kam bachte hain, kyunki doosre model ne unhe sach mein padha.',
  'The price is extra waiting time, and one more model call on the shortlist. That is why it works on fifty pieces, not on all your documents.':
    'Keemat hai extra intezaar ka time, aur shortlist par ek aur model call. Isliye yeh pachaas tukdon par chalta hai, aapke saare documents par nahi.',
  'Let\'s watch it work. First you grab a wide shortlist. Then you cut it down.':
    'Chaliye ise kaam karte dekhte hain. Pehle aap ek badi shortlist uthate hain. Phir use chhota karte hain.',
  'Grab many, then rerank down to a few':
    'Bahut uthaiye, phir rerank karke kuch hi rakhiye',
  'If you have a reranker endpoint (an online address that does reranking), use hybrid search to shortlist 20 pieces. Then score them again with it. If you do not, fake it. Ask an LLM (the parrot that has read a whole library) to score each question-and-piece pair from 0 to 10. This is slower and rougher, but it shows the same pattern.':
    'Agar aapke paas reranker endpoint hai (ek online pata jo reranking karta hai), toh hybrid search se 20 tukde shortlist kijiye. Phir use se unhe dobara score kijiye. Agar nahi hai, toh nakal kijiye. Ek LLM (jo tota jisne poori library padh li) se kahiye ki har sawaal-aur-tukde ki jodi ko 0 se 10 tak score kare. Yeh dheema aur thoda rough hai, par wahi pattern dikhata hai.',
  'Precision at k=3 gets better, because the top three are clearly more on topic. Write down the response time too. You added 20 model calls for every question. That give-and-take is the whole reranking decision.':
    'k=3 par precision behtar hoti hai, kyunki top teen saaf taur par topic ke zyada paas hote hain. Response time bhi likh lijiye. Aapne har sawaal par 20 model calls jod di hain. Yahi lena-dena poora reranking ka faisla hai.',
  'Technique 3: Contextual retrieval':
    'Technique 3: Contextual retrieval',
  'Remember the orphaned chunks from Chapter 3? These are pieces that lost their background. One began “the aforesaid amount”. Alone, it does not say which amount, or where it came from. It is like a torn page with no title. A search cannot match it to the right question.':
    'Chapter 3 ke orphaned chunks yaad hain? Yeh woh tukde hain jinka background kho gaya. Ek tukda “the aforesaid amount” se shuru hota tha. Akele mein woh nahi batata ki kaun sa amount, ya kahan se aaya. Yeh bina title ke phate page jaisa hai. Search use sahi sawaal se jod nahi paata.',
  '<strong>Contextual retrieval</strong> fixes this. Before you save each chunk, ask a model to write one sentence about where the chunk sits in the document. Then save that sentence together with the chunk. It is like writing the chapter name on the top of every index card.':
    '<strong>Contextual retrieval</strong> isse theek karta hai. Har chunk save karne se pehle, ek model se ek sentence likhwaiye ki woh chunk document mein kahan baitha hai. Phir woh sentence chunk ke saath save kijiye. Yeh aise hai jaise har index card ke upar chapter ka naam likh dena.',
  'Here you can see cause and effect most clearly. You found the problem yourself in Chapter 3.':
    'Yahan wajah aur asar sabse saaf dikhte hain. Problem aapne khud Chapter 3 mein dhoondhi thi.',
  'Add background to orphaned chunks':
    'Orphaned chunks mein background jodiye',
  'Find the orphaned chunks you counted in Chapter 3. For each one, make a context sentence. Then make new embeddings (the meaning addresses) for them.':
    'Chapter 3 mein aapne jo orphaned chunks gine the, unhe dhoondhiye. Har ek ke liye ek context sentence banaiye. Phir unke naye embeddings (meaning ke pate) banaiye.',
  'Grade again. The questions that failed because of orphaned chunks should now pass. Write down the before and after for those questions. This is the clearest cause-and-effect result in the chapter. You found the problem yourself in Chapter 3.':
    'Dobara grade kijiye. Jo sawaal orphaned chunks ki wajah se fail hue the, ab pass hone chahiye. Un sawaalon ka pehle aur baad ka result likhiye. Yeh is chapter ka sabse saaf wajah-aur-asar waala result hai. Problem aapne khud Chapter 3 mein dhoondhi thi.',
  'Technique 4: Metadata filtering':
    'Technique 4: Metadata filtering',
  'The first three techniques try to put the right chunk higher in the list. The fourth works another way. <strong>Metadata filtering</strong> (using labels stuck on each chunk) removes chunks that cannot be right, before any scoring starts. It is like taking the wrong files out of the cupboard before you search it.':
    'Pehli teen techniques sahi chunk ko list mein upar laane ki koshish karti hain. Chauthi doosre tareeke se kaam karti hai. <strong>Metadata filtering</strong> (har chunk par lage labels use karna) scoring shuru hone se pehle un chunks ko hata deti hai jo sahi ho hi nahi sakte. Yeh aise hai jaise dhoondhne se pehle galat files almaari se nikaal dena.',
  'Which chunks cannot be right? An old copy of a policy. A document this user may not see. Something that ran out last year. No sorting trick can stop a cancelled 2024 policy from beating the current one. Looking like a match and being correct are two different things.':
    'Kaun se chunks sahi nahi ho sakte? Kisi policy ki purani copy. Aisa document jo yeh user dekh nahi sakta. Kuch jo pichhle saal khatam ho gaya. Koi sorting trick 2024 ki radd ki hui policy ko current policy se aage nikalne se nahi rok sakti. Match jaisa dikhna aur sahi hona, do alag baatein hain.',
  'Filtering is the only technique in this chapter that gives a promise. The others only improve the chances.':
    'Filtering is chapter ki akeli technique hai jo pakka vaada deti hai. Baaki sirf chance behtar karti hain.',
  'Filters need labels on each chunk. You must pick those labels before you save anything. So think about which labels are worth having.':
    'Filters ke liye har chunk par labels chahiye. Yeh labels aapko kuch bhi save karne se pehle chunne padte hain. Toh sochiye ki kaun se labels rakhne layak hain.',
  'Before you save any document, list the labels you would require on every chunk. Next to each label, write the exact mistake it stops. Keep only the labels where you can name a mistake.':
    'Koi bhi document save karne se pehle, un labels ki list banaiye jo aap har chunk par zaroori karenge. Har label ke saamne likhiye ki woh kaun si khaas galti rokta hai. Sirf wahi labels rakhiye jinki galti aap bata sakein.',
  'label — the mistake it stops':
    'label — woh galti jo woh rokta hai',
  'A good list is short. Each line stops a mistake that nothing else can. Document ID and version: better sorting cannot stop last year\'s policy from winning. Start and end dates: the same reason, but over time. Who may see it: filtering is the only wall between a user and a document they must not read. Source and date added: so you can remove a source you no longer trust. Filtering happens <em>before</em> scoring. That is why it makes these mistakes impossible, not just unlikely.':
    'Achhi list chhoti hoti hai. Uski har line aisi galti rokti hai jo aur koi nahi rok sakta. Document ID aur version: behtar sorting pichhle saal ki policy ko jeetne se nahi rok sakti. Shuru aur khatam hone ki dates: wahi wajah, par samay ke saath. Kaun ise dekh sakta hai: user aur aise document ke beech jo use nahi padhna chahiye, sirf filtering hi deewar hai. Source aur jodne ki date: taaki aap aisa source hata sakein jis par ab bharosa nahi. Filtering scoring se <em>pehle</em> hoti hai. Isliye yeh galtiyan mushkil nahi, impossible ho jaati hain.',
  'Now watch a filter do what no sorting can.':
    'Ab dekhiye ki ek filter woh kaam kaise karta hai jo koi sorting nahi kar sakti.',
  'Test a filter on an old policy':
    'Purani policy par filter aazmaiye',
  'Add metadata (labels) to each chunk: document, section, start date and status. Then add an old, replaced copy of one policy to your documents. Ask a question that it answers.':
    'Har chunk par metadata (labels) jodiye: document, section, shuru hone ki date aur status. Phir apne documents mein kisi ek policy ki purani, badli hui copy jodiye. Ek aisa sawaal poochhiye jiska jawaab woh deti hai.',
  'With no filter, the old chunk comes back with a high score. Your pipeline (the chain of steps from question to answer) then quotes a rule that no longer applies. Add a <code>status=current</code> filter, and the problem goes away. No embedding model can tell that a policy was cancelled.':
    'Filter ke bina, purana chunk high score ke saath wapas aata hai. Phir aapki pipeline (sawaal se jawaab tak ke steps ki kadi) aisa rule quote karti hai jo ab lagu nahi. <code>status=current</code> filter lagaiye, aur problem chali jaati hai. Koi embedding model yeh nahi jaan sakta ki policy radd ho gayi.',
  'Before any search, a follow-up like “and for contractors?” must become a full question of its own. Alone, it means nothing. This step is called query rewriting.':
    'Kisi bhi search se pehle, “and for contractors?” jaise follow-up ko ek poora, apna sawaal banana padta hai. Akela woh kuch nahi batata. Is step ko query rewriting kehte hain.',
  'One more: agentic search':
    'Ek aur: agentic search',
  'One more idea is worth knowing. You do not have to search just once. You can let the model run several searches by itself. It reads the results, then makes its question sharper. It uses the loop from Chapter 9. A loop means doing a step again and again.':
    'Ek aur idea jaanne layak hai. Aapko sirf ek baar search karna zaroori nahi. Aap model ko khud kai searches chalane de sakte hain. Woh results padhta hai, phir apna sawaal aur tez banata hai. Yeh Chapter 9 wala loop use karta hai. Loop ka matlab hai ek step baar-baar karna.',
  'This can find better proof. But it also makes the cost much bigger, as Chapter 9 showed.':
    'Isse behtar saboot mil sakta hai. Par keemat bhi bahut badh jaati hai, jaisa Chapter 9 ne dikhaya tha.',
  'You improved the same finder four times, and you measured each change. Hybrid search means you need not pick between keywords and meaning. Reranking improves recall and precision together, and costs waiting time. Contextual retrieval saves the orphaned chunks. Filtering stops the mistakes that no sorting can fix.':
    'Aapne ek hi finder ko chaar baar behtar banaya, aur har change ko naapa. Hybrid search ka matlab hai ki keywords aur meaning mein se ek chunna nahi padta. Reranking recall aur precision dono badhati hai, aur intezaar ka time leti hai. Contextual retrieval orphaned chunks ko bachata hai. Filtering woh galtiyan rokti hai jo koi sorting theek nahi kar sakti.',
  'All of these help the model find better proof. Next, in Chapter 13, you look at a different danger. What if a document you fetched starts giving orders to the model?':
    'Yeh sab model ko behtar saboot dhoondhne mein madad karte hain. Agle Chapter 13 mein aap ek alag khatra dekhenge. Agar aapka laaya hua document model ko hukum dene lage, toh kya hoga?',
});
