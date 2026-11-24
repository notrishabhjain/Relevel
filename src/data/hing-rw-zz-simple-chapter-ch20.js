/* Hinglish for Designing for wrong answers: evidence, confidence and refusals (chapter:ch20), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Say a feature is right 90 times out of 100. Then 10 answers are wrong. Can people still use it? That depends on what the screen does for those 10. Today you check a real product, design four screens, time a correction with a stopwatch, and design the refusal (the screen that says “I cannot answer”).':
    'Maan lijiye ek feature 100 mein se 90 baar sahi hai. Tab 10 jawaab galat hain. Kya log use bhi use kar paayenge? Yeh is par hai ki un 10 ke liye screen kya karti hai. Aaj aap ek asli product ko jaanchenge, chaar screen design karenge, stopwatch se ek correction ka time lenge, aur refusal (woh screen jo kehti hai “main jawaab nahi de sakta”) design karenge.',
  'Say how a feature that is wrong 1 time in 10 can still be trusted.':
    'Batayiye ki 10 mein se 1 baar galat hone wala feature bhi bharose ke laayak kaise ho sakta hai.',
  'Say what to do with a confidence score (a number for how sure the model is), and why showing it as a number is usually wrong.':
    'Batayiye ki confidence score (model kitna pakka hai, iska number) ka kya karna hai, aur use number ki tarah dikhana aam taur par galat kyun hai.',
  'Say what must sit underneath a kill switch (the big OFF button for the AI), so that it can really be used.':
    'Batayiye ki kill switch (AI ka bada OFF button) ke neeche kya hona chahiye, taaki use sach mein istemaal kiya ja sake.',
  'Design the four answers the tool can give':
    'Un chaar jawaabon ko design kijiye jo tool de sakta hai',
  'Many AI features show the same screen when they are sure, unsure, wrong, or unable to answer. So a wrong answer said with a straight face looks just like a right one. In this chapter you learned how a feature wrong 1 time in 10 can still be trusted, and why a confidence number is usually the wrong thing to show. Now you design the four states (four kinds of screen) for the developer kit.':
    'Bahut se AI features wahi ek screen dikhate hain, chahe woh pakke ho, shak mein ho, galat ho, ya jawaab na de sake. Isliye pakke yakeen se boli gayi galat baat bilkul sahi baat jaisi dikhti hai. Is chapter mein aapne seekha ki 10 mein se 1 baar galat feature par bhi bharosa kaise ho sakta hai, aur confidence number dikhana aam taur par galat kyun hai. Ab aap developer kit ke liye chaar states (chaar tarah ki screen) design karenge.',
  'This task is written, with no code. Draw your design on paper. Time one correction with a stopwatch. Write your design in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 5.':
    'Yeh kaam likhne ka hai, code nahi. Apna design kaagaz par banaiye. Ek correction ka time stopwatch se naapiye. Apna design neeche notes box mein likhiye. Route ke liye chhota version, kareeb 20 minute: steps 2, 3 aur 5.',
  'Pick an AI feature you use every day. Write what it shows when it is sure, when it is unsure, when it is wrong, and when it cannot answer.':
    'Roz use hone wala ek AI feature chuniye. Likhiye ki woh kya dikhata hai jab woh pakka ho, shak mein ho, galat ho, aur jab jawaab na de sake.',
  'Now design the four states for Bharat Privacy Guard. One: found and removed, and it is sure. Two: found, but unsure. Three: removed by mistake (a false alarm). Four: unable to decide. For each state, write three things: what the developer’s program receives, what the end user sees, and what each of them can do next.':
    'Ab Bharat Privacy Guard ke liye chaar states design kijiye. Ek: mila aur hata diya, aur woh pakka hai. Do: mila, par pakka nahi. Teen: galti se hata diya (false alarm). Chaar: faisla nahi kar paaya. Har state ke liye teen cheezein likhiye: developer ka program kya paata hai, end user kya dekhta hai, aur dono aage kya kar sakte hain.',
  'Design the “unable to decide” state as a real road to a person, not a dead end. Say who the person is and how long they take.':
    '“Faisla nahi kar paaya” state ko ek asli rasta banaiye jo kisi insaan tak jaye, band gali nahi. Likhiye ki woh insaan kaun hai aur use kitna time lagta hai.',
  'Decide what the tool shows when it is only half sure. The doubt should be easy to see, but not noisy. Do not show a bare confidence number.':
    'Tay kijiye ki jab tool aadha hi pakka ho, tab woh kya dikhaye. Shak saaf dikhna chahiye, par shor nahi. Akela confidence number mat dikhaiye.',
  'Time one correction from start to finish. Start the clock when a user sees that a harmless word was hidden. Stop it when the rule is fixed. Count every step and every hand-off (one person passing the job to another).':
    'Ek correction ko shuru se aakhir tak time kijiye. Clock tab shuru kijiye jab user dekhe ki ek beguna shabd chhupa diya gaya. Clock tab roke jab rule theek ho jaye. Har step aur har hand-off (ek insaan ka kaam doosre ko dena) ginie.',
  'Write down which of the four states your design mixes into one screen, and what that costs the user.':
    'Likhiye ki aapka design chaar mein se kin states ko ek hi screen mein mila deta hai, aur isse user ko kya nuksaan hota hai.',
  'All four states written out, including what each person can do in each one.':
    'Chaaron states likhe hue, aur har state mein har insaan kya kar sakta hai, yeh bhi.',
  'The “unable to decide” road to a real person.':
    '“Faisla nahi kar paaya” se kisi asli insaan tak jaane wala rasta.',
  'The correction path (the steps a user takes to fix a wrong answer), timed from start to finish, with the slowest step marked.':
    'Correction path (galat jawaab theek karne ke steps), shuru se aakhir tak time kiya hua, sabse dheemi step par nishaan ke saath.',
  'The state your product handles worst, and the first thing you would change.':
    'Woh state jise aapka product sabse kharab sambhalta hai, aur sabse pehli cheez jo aap badlenge.',
  'A required quote makes checking cheap':
    'Zaroori quote se jaanchna sasta ho jata hai',
  'A quote is more use than a confidence number. It is like a page number in the book: you can go and look.':
    'Quote confidence number se zyada kaam ka hai. Yeh kitab ke page number jaisa hai: aap jaakar dekh sakte hain.',
  'Users notice the slow responses':
    'User ko dheemi responses dikhti hain',
  'They notice the slowest ones, not the average response time. It is like the one late train, not the ten on-time ones.':
    'Unhe sabse dheemi wali dikhti hain, average response time nahi. Jaise woh ek late train, na ki das time par aayi trains.',
  'Rolling back code does not undo behaviour that both versions share. It is like going back to the old recipe card when both cards have the same mistake.':
    'Code rollback karne se woh behaviour nahi jaata jo dono versions mein ek jaisa hai. Jaise purane recipe card par jaana, jab dono cards mein wahi galti ho.',
  'You don’t need any code for this chapter. Pick an AI feature you use every day. Pick one more that you own or could own.':
    'Is chapter ke liye code ki zaroorat nahi. Roz use hone wala ek AI feature chuniye. Ek aur chuniye jo aapka hai ya aapka ho sakta hai.',
  'In the last chapter you decided whether to change the model or the things around it. So far the course has been about making the model right more often. This chapter is about the times it is still wrong.':
    'Pichhle chapter mein aapne tay kiya ki model badalna hai ya uske aas-paas ki cheezein. Ab tak course model ko zyada baar sahi banane par tha. Yeh chapter un baaron ke baare mein hai jab woh phir bhi galat hota hai.',
  'Say the model is right 90 times out of 100. Then 10 answers are wrong, and no amount of engineering takes that to zero. So what the screen does for those 10 decides if people can use the feature.':
    'Maan lijiye model 100 mein se 90 baar sahi hai. Tab 10 jawaab galat hain, aur engineering use poori tarah zero nahi kar sakti. Isliye un 10 ke liye screen kya karti hai, yahi tay karta hai ki log feature use kar paayenge ya nahi.',
  'This is a design choice, and it belongs to the product owner (the person in charge of the feature). An engineer can tell you a confidence score exists. The product owner decides what the user sees when that score is low.':
    'Yeh design ka faisla hai, aur yeh product owner (feature ka zimmedaar insaan) ka hai. Engineer bata sakta hai ki confidence score hai. Score kam ho to user kya dekhe, yeh product owner tay karta hai.',
  'Do not show an unsure answer on a screen that looks sure. Many AI features feel unreliable not because they are less right, but because a wrong answer looks exactly like a right one.':
    'Shak wale jawaab ko pakki dikhne wali screen par mat dikhaiye. Bahut se AI features bharose ke laayak isliye nahi lagte ki woh kam sahi hain, balki isliye ki galat jawaab bilkul sahi jaisa dikhta hai.',
  'There are four things to get right. A feature that does all four can be wrong 1 time in 10 and still be trusted. A feature that does none will not be trusted, even at 95 right out of 100. Let us take them one at a time.':
    'Chaar cheezein sahi karni hain. Jo feature chaaron kare, woh 10 mein se 1 baar galat ho tab bhi bharosa paata hai. Jo ek bhi na kare, us par 100 mein se 95 sahi hone par bhi bharosa nahi hota. Ek ek karke dekhte hain.',
  '1. Show the evidence':
    '1. Saboot dikhaiye',
  'Start with a small idea. If a user can check a claim in a few seconds, a wrong answer costs much less. A link that opens the real source page makes that possible. That is why Chapter 8 made the model quote its source. It is like a book that gives the page number.':
    'Ek chhoti baat se shuru kijiye. Agar user kuchh seconds mein daawa jaanch le, to galat jawaab ka nuksaan bahut kam hota hai. Ek link jo asli source page kholta hai, yeh mumkin banata hai. Isiliye Chapter 8 mein model se source ka quote dilwaya gaya tha. Yeh us kitab jaisa hai jo page number deti hai.',
  'A citation (a note saying where the answer came from) that names a document but does not open it is worse than nothing. It looks checkable, but the user cannot check it. They only find out when it matters.':
    'Citation (jawaab kahan se aaya, yeh batane wala note) jo document ka naam to deta hai par use kholta nahi, woh kuchh na hone se bhi bura hai. Woh jaanchne layak dikhta hai, par user jaanch nahi sakta. Yeh tab pata chalta hai jab sach mein zaroorat ho.',
  'Now try this on a product you already use.':
    'Ab yeh aise product par aazmaiye jo aap pehle se use karte hain.',
  'Audit an AI feature you use every day':
    'Roz use hone wale ek AI feature ki jaanch kijiye',
  'Pick one, such as a search assistant, an email writer or a coding helper. Ask it something it will get wrong, something at the edge of what it knows.':
    'Ek chuniye, jaise search assistant, email likhne wala ya coding madadgaar. Us se kuchh aisa poochhiye jisme woh galat hoga, jo uski jaankari ki seema par ho.',
  'Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the screen show the wrong answer any differently from a right one? What could you do about it? What happened to your correction?':
    'Phir chaar sawaalon ke jawaab likhiye. Kya aap daawa jaanch paaye, aur kitne seconds lage? Kya screen ne galat jawaab ko sahi se alag dikhaya? Aap kya kar sakte the? Aapki correction ka kya hua?',
  'Most well-known products fail at least two of the four. Write down which ones. Your users will judge your feature by the same measure.':
    'Zyadatar jaane-maane products chaar mein se kam se kam do mein fail hote hain. Likhiye kaun si. Aapke users aapke feature ko isi paimane se parkhenge.',
  '2. Design for speed':
    '2. Raftaar ke liye design kijiye',
  'In Chapter 11, slow responses were a cost. Here they become a design problem. Streaming (words showing up one by one, like the chai-wala saying “two minutes”) works well for paragraphs. A half-arrived paragraph is already useful.':
    'Chapter 11 mein dheemi responses ek kharch thi. Yahan woh design ki samasya ban jati hain. Streaming (shabd ek ek karke aate hain, jaise chai-wala “do minute” bol raha ho) paragraphs ke liye achhi hai. Aadha aaya paragraph bhi kaam ka hota hai.',
  'It does not work for everything. Picture a number that shows up and then changes while the answer is still being made. That is worse than a spinner (the little wheel that says “wait”). The user has already read it, and may have acted on it.':
    'Yeh har cheez ke liye kaam nahi karti. Socho ek number aaya, aur jawaab banne ke dauran badal gaya. Yeh spinner (chhota ghoomta pahiya jo kehta hai “ruko”) se bhi bura hai. User use padh chuka hai, aur shayad us par kaam bhi kar chuka hai.',
  '3. Use confidence to choose behaviour':
    '3. Confidence se tay kijiye ki kya karna hai',
  'Many models can also give a confidence score with an answer. It is tempting to show it. Before you read on, think: what would you do with it?':
    'Bahut se models jawaab ke saath confidence score bhi de sakte hain. Use dikhane ka mann hota hai. Aage padhne se pehle sochiye: aap use kya karte?',
  'What you would do with it':
    'Aap uska kya karte',
  'Predict: your model gives a confidence score with every answer. What should the screen do with it?':
    'Andaaza lagaiye: aapka model har jawaab ke saath confidence score deta hai. Screen ko uska kya karna chahiye?',
  'Use it to decide what the product does. Do not show it as a number. A percentage next to an answer asks the user to judge something they cannot judge. The model’s own sureness is often off anyway, like a student who is sure and wrong. Used quietly inside, the score can change what happens: answer straight away, show the evidence first, ask a question back, or pass the case to a person.':
    'Use yeh tay karne ke liye kijiye ki product kya kare. Use number ki tarah mat dikhaiye. Jawaab ke paas percentage dikhana user se aisi cheez parakhwata hai jo woh parakh nahi sakta. Model ka apna pakka-pan bhi aksar galat hota hai, jaise woh student jo pakka hai aur galat hai. Andar chupchap use karne par score yeh badal sakta hai: seedha jawaab do, pehle saboot dikhao, ulta sawaal poochho, ya case kisi insaan ko de do.',
  'Turn confidence into screen choices. Use a box the user can edit instead of a fixed one. Use a draft instead of a sent message. Use a question instead of a guess.':
    'Confidence ko screen ke faislon mein badliye. Fixed box ki jagah aisa box dijiye jo user badal sake. Bheje hue message ki jagah draft dijiye. Andaaze ki jagah sawaal dijiye.',
  'Now try this on a feature of your own.':
    'Ab yeh apne khud ke feature par aazmaiye.',
  'Write the four states':
    'Chaar states likhiye',
  'Take one feature you own. Write what the user sees in four states: a sure answer, an unsure answer, a refusal, and the AI turned off. Write the real words on the screen.':
    'Apna ek feature lijiye. Chaar states mein user kya dekhta hai, likhiye: pakka jawaab, shak wala jawaab, refusal, aur AI band. Screen par aane wale asli shabd likhiye.',
  'The third and fourth states are the hard ones, and most specs (the written plan for a feature) leave them out. If you cannot write them, the product does not have them. It just does whatever the code happens to do.':
    'Teesri aur chauthi state mushkil hain, aur zyadatar specs (feature ka likha hua plan) unhe chhod dete hain. Agar aap unhe likh nahi paate, to product mein woh hain hi nahi. Woh bas wahi karta hai jo code ittefaq se kar de.',
  '4. Make correcting it easy':
    '4. Sudhaarna aasaan banaiye',
  'When the system is wrong, what the user does next is your most valuable data, and most products throw it away. A thumbs-down says something was wrong. It does not say what.':
    'Jab system galat ho, tab user aage jo karta hai woh aapka sabse keemti data hai, aur zyadatar products use phenk dete hain. Thumbs-down batata hai ki kuchh galat tha. Yeh nahi batata ki kya.',
  'A good correction path does three things. It captures what the user expected <em>instead</em>. It keeps the evidence the system used. And it is faster than giving up and doing the task by hand. If correcting takes longer than doing it by hand, nobody corrects. Then an empty feedback table looks like happy users.':
    'Achha correction path teen kaam karta hai. Woh yeh pakadta hai ki user ne <em>uski jagah</em> kya socha tha. Woh system ka use kiya hua saboot sambhalta hai. Aur woh haar maan kar haath se karne se tez hota hai. Agar sudhaarna haath se karne se zyada time leta hai, to koi nahi sudhaarta. Tab khaali feedback table khush users jaisi dikhti hai.',
  'Time a correction':
    'Ek correction ka time lijiye',
  'Use a clock. How long does it take to fix a wrong output, compared with doing the whole task by hand? Do it three times.':
    'Clock lijiye. Galat output theek karne mein kitna time lagta hai, poora kaam haath se karne ke muqable? Teen baar kijiye.',
  'If fixing is slower, your feedback table will stay empty, and you may read that as happy users. This one measurement explains most “our users never give feedback” complaints.':
    'Agar sudhaarna dheema hai, to aapki feedback table khaali rahegi, aur aap use khush users samajh sakte hain. Yeh ek naap “hamare users feedback nahi dete” ki zyadatar shikayaton ko samjha deta hai.',
  'Take two products that use the same model and the same retrieval (finding the right page before answering). One saves only a thumbs-down. The other saves the answer, the chunks (the small cut-out pieces of text it looked at) and the question. It also asks: “what did you expect instead?” Within two weeks, the second has a list of real failure types and a roadmap built from its own traffic. The first has a falling number and no idea why.':
    'Do products lijiye jo ek hi model aur ek hi retrieval (jawaab dene se pehle sahi page dhoondhna) use karte hain. Ek sirf thumbs-down save karta hai. Doosra jawaab, chunks (text ke chhote kate hue tukde jo usne dekhe) aur sawaal save karta hai. Woh yeh bhi poochhta hai: “aapne uski jagah kya socha tha?” Do hafte mein doosre ke paas asli galtiyon ki list aur apne traffic se bana roadmap hota hai. Pehle ke paas girta hua number hai aur kaaran ka pata nahi.',
  'Design the correction path for a feature you know. What does the user do when the output is wrong? What does that action record? How long does it take, compared with doing the task by hand? Then write the test case it would give you (one question with its right answer).':
    'Kisi jaane hue feature ka correction path design kijiye. Output galat ho to user kya karta hai? Woh action kya record karta hai? Haath se karne ke muqable mein kitna time lagta hai? Phir woh test case likhiye jo isse milega (ek sawaal aur uska sahi jawaab).',
  'the user … we capture … it takes … versus … the test case would be …':
    'user … hum pakadte hain … ismein lagta hai … muqable mein … test case hoga …',
  'A good design makes fixing the fastest choice. Let the user edit the output right there, and treat the edit as the feedback. They were going to fix it anyway, so it costs them nothing, and you learn the right answer exactly. Save the question, the evidence, the output and the fix together. Without the evidence, you know the answer was wrong, but not if finding the page or writing the answer broke. Chapter 19 needs that difference.':
    'Achha design sudhaarna sabse tez banata hai. User ko output wahin badalne dijiye, aur us badlaav ko hi feedback maniye. Woh waise bhi theek karne wala tha, to use kuchh kharch nahi, aur aapko sahi jawaab pakka pata chal jata hai. Sawaal, saboot, output aur sudhaar ek saath save kijiye. Saboot ke bina aap jaante hain ki jawaab galat tha, par yeh nahi ki page dhoondhna bigda ya jawaab likhna. Chapter 19 ko yeh fark chahiye.',
  'Design the refusal':
    'Refusal design kijiye',
  'Every system looks good when it works. Trust is built on the screen that says <em>I do not have that</em>. Many AI products design that screen last, or never.':
    'Har system tab achha dikhta hai jab woh chalta hai. Bharosa us screen par banta hai jo kehti hai <em>mere paas yeh nahi hai</em>. Bahut se AI products us screen ko sabse aakhir mein design karte hain, ya kabhi nahi.',
  'A system that says “I cannot answer this” and shows a way to a person earns more trust than one that always gives something. People judge a system partly by its refusals, like a shopkeeper who says “not in stock” and tells you who has it. A feature that never refuses teaches users that its sureness means nothing.':
    'Jo system kehta hai “main iska jawaab nahi de sakta” aur kisi insaan tak ka rasta dikhata hai, woh us system se zyada bharosa kamata hai jo hamesha kuchh na kuchh de deta hai. Log system ko kuchh had tak uske refusals se parakhte hain, jaise woh dukaandaar jo kehta hai “stock mein nahi” aur batata hai kiske paas hai. Jo feature kabhi mana nahi karta, woh users ko sikhata hai ki uske pakke-pan ka koi matlab nahi.',
  'What happens when the AI is off':
    'Jab AI band ho tab kya hota hai',
  'Last, decide what the feature does when the AI is switched off. In Chapter 18 you saw that a rollback (going back to the old version) and a kill switch are different things.':
    'Aakhir mein tay kijiye ki AI band hone par feature kya karta hai. Chapter 18 mein aapne dekha tha ki rollback (purane version par waapas jaana) aur kill switch alag cheezein hain.',
  'A kill switch can only be used if something works underneath it. That could be search without written answers, a form without the AI filling it in, or a queue without the AI sorting it. It is like the plain stairs under a lift: if the lift stops, people can still climb. If turning the AI off leaves a blank screen, the switch only swaps one failure for another.':
    'Kill switch tabhi kaam ka hai jab uske neeche kuchh chalta ho. Woh ho sakta hai bina likhe jawaab wali search, AI ke bhare bina form, ya AI ke chhaante bina queue. Yeh lift ke neeche saadi seedhiyon jaisa hai: lift ruke to bhi log chadh sakte hain. Agar AI band karne par khaali screen bachti hai, to switch ek kharabi ki jagah doosri rakh deta hai.',
  'To sum up, a feature earns trust by showing its evidence, staying quick, using confidence to choose what it does, and making fixes easy. Add a refusal that leads to a person, and a fallback for when the AI is off. Next, you will learn how to tell if all this helped the business, by designing a pilot (a small test run).':
    'Sankshep mein, ek feature bharosa kamata hai jab woh saboot dikhaye, tez rahe, confidence se tay kare ki kya karna hai, aur sudhaar aasaan banaye. Saath mein ek refusal jo insaan tak jaye, aur AI band hone par ek fallback. Aage aap seekhenge ki yeh sab business ke liye madadgaar tha ya nahi, yeh kaise pata karein: ek pilot (chhota test run) design karke.',
});
