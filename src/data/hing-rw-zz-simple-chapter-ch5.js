/* Hinglish for Embeddings: searching by meaning (chapter:ch5), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Guess which of your Chapter 4 failures search by meaning will fix, and which ones will stay.':
    'Andaza lagaiye ki Chapter 4 ki kaun si failures matlab wali search theek kar degi, aur kaun si bani rahengi.',
  'Turn the chunks and the questions into lists of numbers. Score each pair by how close the numbers are. Pick the top few. Compare their ranks with the ranks you got in Chapter 4.':
    'Chunks aur sawaalon ko numbers ki list mein badliye. Har jode ko score dijiye ki numbers kitne paas hain. Sabse upar ke kuch chuniye. Unke rank ko Chapter 4 ke rank se milaiye.',
  'Test three questions: the one with an exact ID, the one with no answer, and the one in a second language.':
    'Teen sawaal aazmaiye: jisme exact ID thi, jiska jawaab hai hi nahi, aur jo doosri bhasha mein tha.',
  'A scoreboard of keyword search against search by meaning, plus your own guess about using both together.':
    'Keyword search aur matlab wali search ka scoreboard, aur dono ko saath use karne par aapka apna andaza.',
  'Explain embeddings from the results you saw, not from a definition.':
    'Embeddings samjhaiye apne dekhe hue results se, kisi paribhasha se nahi.',
  'An embedding turns text into a list of numbers. The numbers put the text on a map of meanings, like a house on a city map. Texts with similar meanings get similar numbers, even when they share no words. You build this in code. Then you use it on the questions keyword search got wrong.':
    'Embedding text ko numbers ki ek list mein badal deta hai. Yeh numbers text ko matlab ke naksha par rakhte hain, jaise shahar ke naksha par ek ghar. Milte-julte matlab wale texts ke numbers bhi milte-julte hote hain, chahe unme ek bhi shabd common na ho. Aap ise code mein banayenge. Phir use un sawaalon par chalayenge jinme keyword search galat thi.',
  'Explain in plain words how a computer can tell that two sentences worded differently mean the same thing.':
    'Saaf shabdon mein samjhaiye ki computer kaise jaanta hai ki alag shabdon wale do sentence ka matlab ek hai.',
  'Say what a similarity score of 0.5 does and does not mean.':
    'Batayiye ki 0.5 ke similarity score (milan ke number) ka kya matlab hai aur kya nahi.',
  'Name a place where embeddings would fail on your own company\'s words.':
    'Ek aisi jagah batayiye jahan aapki apni company ke shabdon par embeddings fail honge.',
  'Turn the rules into code, and compare them with finding by meaning':
    'Rules ko code banaiye, aur unhe matlab se dhoondhne se milaiye',
  'So far your rules are on paper. In this chapter you learned that a computer can compare what sentences mean, not only their words. It does this by turning sentences into lists of numbers called embeddings. Now turn your pattern rules into code. Then use meaning to find the sentences the rules cannot find. Compare the two ways on your answer key (the questions with the right answers written down).':
    'Abhi tak aapke rules kaagaz par hain. Is chapter mein aapne seekha ki computer sentences ka matlab bhi milaa sakta hai, sirf shabd nahi. Woh sentences ko numbers ki list mein badalta hai, jise embeddings kehte hain. Ab apne pattern rules ko code banaiye. Phir matlab ka use karke woh sentences dhoondhiye jo rules nahi dhoondh paate. Dono tareekon ko apni answer key par milaiye (sawaal jinke sahi jawaab likhe hain).',
  'You work in your notebook for this chapter (the page where you run code). Keep your hand-scored results from Chapter 4 beside you. Write the comparison in the notes box below. Short version for the route, about 20 minutes: steps 1 and 2.':
    'Aap is chapter ke notebook mein kaam karte hain (woh page jahan code chalate hain). Chapter 4 ke haath se kiye score paas rakhiye. Tulna neeche notes box mein likhiye. Route ke liye chhota version, kareeb 20 minute: steps 1 aur 2.',
  'In your notebook for this chapter, turn your plain-word rules for PAN, Aadhaar, mobile number and email into code. Each one is a short pattern (a few characters that describe a shape). Run them on the twelve rows of the answer key. Print what each one finds. A finished pattern checker also uses the Aadhaar check-digit rule (the Verhoeff scheme; a number never starts with 0 or 1). It removes about nine in ten twelve-digit look-alikes at no cost. Use the start rule now. Note the check digit as the next rule to add.':
    'Is chapter ke notebook mein PAN, Aadhaar, mobile number aur email ke apne saaf-shabd rules ko code banaiye. Har ek ek chhota pattern hai (kuch characters jo ek shakal batate hain). Unhe answer key ki baarah rows par chalaiye. Print kijiye ki har ek ko kya mila. Poora pattern checker Aadhaar ka check-digit rule bhi lagata hai (Verhoeff scheme; koi number 0 ya 1 se shuru nahi hota). Isse barah-ank wale nakli numbers mein se lagbhag das mein se nau hat jaate hain, bina kharch ke. Abhi shuruaat wala rule lagaiye. Check digit ko agla rule likh lijiye jo jodna hai.',
  'Score the code. In how many of the twelve rows was it exactly right? Which rows did it miss or get wrong? Compare with your by-hand result from Chapter 4. Are they the same?':
    'Code ko score dijiye. Baarah rows mein se kitni mein woh bilkul sahi tha? Kaun si rows chhooti ya galat hui? Chapter 4 ke haath ke result se milaiye. Kya dono ek jaise hain?',
  'Write five sentences that give away a person without any ID, like “I am the only diabetic patient in my village who had a transplant last year”. Also write five harmless sentences, like “What documents do I need to renew my driving licence?”.':
    'Paanch sentences likhiye jo bina kisi ID ke ek insaan ko pehchaan dete hain, jaise “I am the only diabetic patient in my village who had a transplant last year”. Paanch begunaah sentences bhi likhiye, jaise “What documents do I need to renew my driving licence?”.',
  'Use the embedding function from the chapter (the small recipe that makes the numbers) on all ten sentences. For each of the ten, find the closest of your five giveaway examples. Print the similarity score.':
    'Chapter ka embedding function (woh chhoti recipe jo numbers banati hai) dason sentences par chalaiye. Har ek ke liye apne paanch pehchaan wale examples mein se sabse paas wala dhoondhiye. Similarity score print kijiye.',
  'Look at the scores. Where is the line between a harmless sentence and one that points to a person? Pick a cut-off score. Count how many of the ten it sorts right.':
    'Scores dekhiye. Begunaah sentence aur insaan ko pehchaan dene wale sentence ke beech line kahan hai? Ek cut-off score chuniye. Ginye ki dasoon mein se kitne woh sahi chhaantata hai.',
  'Make a table to compare the rules and the meaning method: what each finds well, what each misses, and what each costs. Add one case where meaning does worse than the rules.':
    'Rules aur matlab wale tareeke ko milane ki table banaiye: har ek kya achha dhoondhta hai, kya chhod deta hai, aur kitna kharch hai. Ek aisa case jodiye jahan matlab wala tareeka rules se kharab chalta hai.',
  'Your pattern rules as working code, with the score on the twelve rows.':
    'Aapke pattern rules chalte hue code ke roop mein, baarah rows ke score ke saath.',
  'Ten sentences, five that point to a person and five harmless, with their similarity scores and your cut-off.':
    'Das sentences, paanch jo insaan ko pehchaan dete hain aur paanch begunaah, unke similarity scores aur aapke cut-off ke saath.',
  'A table comparing rules and meaning, with one case where meaning does worse.':
    'Rules aur matlab ko milane wali table, ek aise case ke saath jahan matlab wala tareeka kharab chala.',
  'This chapter turns the idea into real code that you run.':
    'Yeh chapter idea ko asli code mein badalta hai jise aap chalate hain.',
  'Keyword search cannot see meaning':
    'Keyword search matlab nahi dekh sakti',
  'Two sentences with the same meaning and no shared words do not match.':
    'Ek matlab wale do sentences, jinme koi shabd common nahi, match nahi hote.',
  'It ranks everything and gives a top result no matter what, like a teacher ranking an exam nobody took.':
    'Woh sab ko rank karti hai aur top result de deti hai, chahe kuch bhi ho, jaise teacher ek aisa exam rank kare jo kisi ne diya hi nahi.',
  'The code runs right here, top to bottom. The page does the warm-up from <a href="#/setup">Setup</a> for you. Keep the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.':
    'Code yahin chalta hai, upar se neeche. Page <a href="#/setup">Setup</a> wali taiyaari aapke liye kar deta hai. Chapter 3 ke bees cards aur Chapter 4 ke teen mushkil sawaal taiyaar rakhiye. Part I ka yeh sabse lamba hands-on chapter hai, isliye ek poori baithak dijiye.',
  'Last chapter you saw keyword search fail. The user wrote <em>money back</em>. The document said <em>reimbursement</em>. The match scored zero. Now we fix that. You teach search to compare meaning, not spelling. Then you run your own failed questions through it.':
    'Pichhle chapter mein aapne keyword search ko fail hote dekha. User ne likha <em>money back</em>. Document mein tha <em>reimbursement</em>. Match ka score zero aaya. Ab hum ise theek karte hain. Aap search ko spelling ki jagah matlab milana sikhate hain. Phir apne hi fail hue sawaal usme chalate hain.',
  'A map of meanings':
    'Matlab ka naksha',
  'To match meaning, you might think the computer must truly understand language. It does not. The method is simpler. An everyday picture shows how it works.':
    'Matlab milane ke liye lagta hai ki computer ko bhasha sach mein samajhni padegi. Aisa nahi hai. Tareeka isse simple hai. Rozmarra ki ek tasveer batati hai ki woh kaise chalta hai.',
  'Picture a huge map. Every sentence has a spot on it. Sentences with similar meanings sit close together, like shops on one street. Unrelated sentences sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are close neighbours, even though they share no words.':
    'Ek bahut bade naksha ki kalpana kijiye. Har sentence ki us par ek jagah hai. Milte-julte matlab wale sentences paas-paas baithte hain, jaise ek hi gali ki dukaanein. Be-mel sentences door baithte hain. <em>When do I get my money back</em> aur <em>reimbursement of approved claims</em> paas ke padosi hain, chahe unme ek bhi shabd common nahi.',
  'So who puts the sentences on the map? A separate, smaller model does. You give it some text. It gives back a long list of numbers. These numbers are the text\'s address on the map. That list is called an <strong>embedding</strong>. The model that makes it is an <strong>embedding model</strong>.':
    'To naksha par sentences kaun rakhta hai? Ek alag, chhota model. Aap use kuch text dete hain. Woh numbers ki ek lambi list wapas deta hai. Yeh numbers naksha par text ka pata hain. Us list ko <strong>embedding</strong> kehte hain. Jo model ise banata hai woh <strong>embedding model</strong> hai.',
  'Once every chunk has a spot, finding the right ones is a question of distance. Get the spot of the question. Pick the chunks nearest to it. Comparing two spots gives one number that says how similar they are. Try it here:':
    'Jab har chunk ki ek jagah ho jaaye, to sahi chunks dhoondhna doori ka sawaal ban jaata hai. Sawaal ki jagah nikaaliye. Uske sabse paas ke chunks chuniye. Do jagahon ko milane se ek number milta hai jo batata hai ki woh kitne milte hain. Yahan aazmaiye:',
  'A number between 0 and 1':
    '0 aur 1 ke beech ka ek number',
  'Guess before you check. <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share no words. How similar will they score?':
    'Dekhne se pehle andaza lagaiye. <em>when do I get my money back?</em> aur <em>disbursement of approved claim amounts</em> mein koi shabd common nahi. Unka similarity score kitna aayega?',
  'High: usually above 0.6, and often near 0.8. The spot comes from meaning. So two texts with the same meaning land close, however they are worded.':
    'Zyada: aam taur par 0.6 se upar, aur aksar 0.8 ke paas. Jagah matlab se tay hoti hai. Isliye ek matlab wale do texts paas aate hain, chahe unke shabd kuch bhi hon.',
  'Be careful with this scale. The score can go from −1 to 1, but real text rarely scores below about 0.1. So 0.5 does not mean “half similar”. It sits near the low end of the useful range. A similarity number tells you little until you know what clearly good and clearly bad matches score.':
    'Is scale se savdhaan rahiye. Score −1 se 1 tak ja sakta hai, par asli text ka score shaayad hi 0.1 ke neeche jaata hai. Isliye 0.5 ka matlab “aadha milta” nahi hai. Woh kaam ki range ke neeche ke chhor ke paas hai. Similarity number tab tak kam batata hai jab tak aap yeh na jaan lein ki saaf achhe aur saaf bure matches ka score kitna aata hai.',
  'Build it in code':
    'Ise code mein banaiye',
  'Now make the map real. In a moment you type a few lines of code. They make embeddings and measure how close two of them are.':
    'Ab naksha ko asli banaiye. Abhi aap code ki kuch lines type karenge. Woh embeddings banati hain aur naapti hain ki do embeddings kitne paas hain.',
  'Create embeddings and compare them':
    'Embeddings banaiye aur unhe milaiye',
  'Type this carefully. It is the most important code in Part I. It turns text into an embedding. Then it measures how similar two embeddings are.':
    'Yeh dhyaan se type kijiye. Part I ka sabse zaroori code yahi hai. Yeh text ko embedding mein badalta hai. Phir naapta hai ki do embeddings kitne milte hain.',
  'Each embedding has 1,024 numbers. The words <code>contract</code>, <code>agreement</code> and <code>MoU</code> score high with each other, around 0.5 to 0.8. Every pair with <code>sandwich</code> in it scores clearly lower. You just measured meaning with one line of arithmetic.':
    'Har embedding mein 1,024 numbers hain. <code>contract</code>, <code>agreement</code> aur <code>MoU</code> aapas mein zyada score karte hain, kareeb 0.5 se 0.8. Jis jode mein <code>sandwich</code> hai, uska score saaf kam hai. Aapne abhi ek line ke hisaab se matlab naap liya.',
  'Questions and passages are embedded differently':
    'Sawaal aur passage alag tareeke se embed hote hain',
  'Know one detail before you search. A question is short and sounds like a question. The passage that answers it is longer and sounds like a statement.':
    'Search se pehle ek baat jaan lijiye. Sawaal chhota hota hai aur sawaal jaisa lagta hai. Jis passage mein jawaab hai woh lamba hota hai aur bayaan jaisa lagta hai.',
  'Good embedding models are trained with this in mind. They expect you to say which kind you are giving. That is why the code above has an <code>input_type</code>. If you get it wrong, nothing breaks, but the results quietly get worse.':
    'Achhe embedding models isi baat ko dhyaan mein rakhkar sikhaye jaate hain. Woh chahte hain ki aap batayein ki aap kaun sa de rahe hain. Isliye upar ke code mein <code>input_type</code> hai. Galat bataya to kuch tootta nahi, par results chupchaap kharab ho jaate hain.',
  'Search your own chunks by meaning':
    'Apne chunks ko matlab se dhoondhiye',
  'Now the moment this chapter has been building to. Take the questions keyword search failed, and ask them again, this time by meaning.':
    'Ab woh pal jiske liye yeh chapter bana hai. Jo sawaal keyword search se fail hue the unhe dobara poochhiye, is baar matlab se.',
  'Run again the questions keyword search failed':
    'Jo sawaal keyword search se fail hue, unhe dobara chalaiye',
  'Paste in the text of the cards you cut in Chapter 3, as a list (a row of boxes, in order). Make an embedding for each one.':
    'Chapter 3 mein kaate hue cards ka text list ki tarah paste kijiye (dibbon ki ek qataar, kram mein). Har ek ka embedding banaiye.',
  'Questions that scored zero with keyword search may now put the right card much higher. Run all three harder questions. Compare with your handwritten ranks. The second-language result depends on this model and your documents, so write down the real ranks and scores.':
    'Jin sawaalon ka keyword search mein zero score tha, unme ab sahi card kaafi upar aa sakta hai. Teeno mushkil sawaal chalaiye. Apne haath ke likhe rank se milaiye. Doosri bhasha ka result is model aur aapke documents par nirbhar hai, isliye asli rank aur score likh lijiye.',
  'One more check. Remember, search always gives something back, even when the document has no answer. See whether meaning changes that.':
    'Ek jaanch aur. Yaad rakhiye, search hamesha kuch wapas deti hai, chahe document mein jawaab ho hi na. Dekhiye ki kya matlab se yeh badalta hai.',
  'Ask something the document does not cover':
    'Aisa kuch poochhiye jo document mein nahi hai',
  'Ask a question the document cannot answer. It need not be hard. Any unrelated question works.':
    'Aisa sawaal poochhiye jiska jawaab document mein nahi hai. Mushkil hona zaroori nahi. Koi bhi be-mel sawaal chalega.',
  'Three chunks come back anyway. Their scores are around 0.2 to 0.4, which do not obviously look wrong. Search still never says “nothing here”. Without a baseline (a normal score to compare against), you cannot yet tell a low score from a usual one. Chapter 6 builds that baseline.':
    'Phir bhi teen chunks wapas aate hain. Unke score kareeb 0.2 se 0.4 hain, jo saaf galat nahi dikhte. Search ab bhi kabhi nahi kehti “yahan kuch nahi”. Baseline ke bina (tulna ke liye ek aam score), aap abhi kam score aur aam score mein fark nahi kar sakte. Chapter 6 woh baseline banata hai.',
  'Where embeddings fail':
    'Embeddings kahan fail hote hain',
  'Embeddings are impressive, but they have limits. An embedding model knows only what it read, and that was mostly English text from the internet.':
    'Embeddings kamaal ke hain, par unki hadein hain. Embedding model wahi jaanta hai jo usne padha, aur woh zyadatar internet ka angrezi text tha.',
  'If your words were rare in that text, the model puts them in the wrong place. Two things your users see as different may land close together. Or two things your users see as the same may land far apart.':
    'Agar aapke shabd us text mein kam the, to model unhe galat jagah rakhta hai. Aapke users jinhe alag maante hain woh paas aa sakte hain. Ya jinhe ek maante hain woh door ho sakte hain.',
  'Think about your own field and users. Where would a model that mostly read English internet text put two things close, when your users see them as different? Or far apart, when your users mean the same?':
    'Apne kshetra aur users ke baare mein sochiye. Jis model ne zyadatar angrezi internet text padha, woh do cheezon ko kahan paas rakhega jabki aapke users unhe alag maante hain? Ya door rakhega jabki aapke users ka matlab ek hai?',
  'In our domain the model would get … wrong, because …':
    'In our domain the model would get … wrong, because …',
  'Indian money and law words give many examples: <em>lakh</em> and <em>crore</em>, NEFT and IMPS, and scheme names that differ by one word but mean very different amounts. Regional languages typed in English letters, like <em>paisa kab milega</em>, are another. So are your own internal terms: two product codenames mean different things to you and nothing to the model, so it places them by spelling. Try to name these failures before a user finds them.':
    'Bharat ke paise aur kanoon ke shabdon mein kai example hain: <em>lakh</em> aur <em>crore</em>, NEFT aur IMPS, aur scheme ke naam jo ek shabd se alag hain par bahut alag amount batate hain. Angrezi akshar mein likhi kshetriya bhashayein, jaise <em>paisa kab milega</em>, ek aur example hain. Aapke apne andar ke shabd bhi: do product codenames aapke liye alag matlab rakhte hain aur model ke liye kuch nahi, to woh unhe spelling se rakhta hai. In failures ke naam pehle hi soch lijiye, user ke dhoondhne se pehle.',
  'Embeddings sit under most “chat with your documents” products, and they work well. But they still give back the nearest chunks every time, even when nothing is near. So the problem from Chapter 4 is still there.':
    'Embeddings zyadatar “apne documents se baat karo” products ke neeche hote hain, aur achhe chalte hain. Par woh har baar sabse paas ke chunks hi wapas dete hain, chahe kuch bhi paas na ho. Isliye Chapter 4 ki problem ab bhi hai.',
  'Next, in Chapter 6, you learn how to measure that problem, and how to tell whether your search is working.':
    'Aage Chapter 6 mein aap seekhenge ki us problem ko kaise naapein, aur kaise jaanein ki aapki search kaam kar rahi hai ya nahi.',
});
