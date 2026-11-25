/* Hinglish for Evaluation at scale: code checks and LLM judges (chapter:ch14), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Checking every answer by hand stops working at about fifty questions. So you let a small program do the free checks. Then a second model marks the rest, like a second student marking homework. This second model is called an LLM judge. Before you trust its marks, you count how often it agrees with you.':
    'Har jawaab haath se check karna lagbhag pachaas sawaalon ke baad nahi chalta. Isliye ek chhota program free checks karta hai. Baaki jawaab ek doosra model mark karta hai, jaise doosra student homework mark kare. Is doosre model ko LLM judge kehte hain. Uske marks par bharosa karne se pehle aap ginte hain ki woh kitni baar aapse sehmat hai.',
  'Name the three ways to mark an AI answer, and say what each one does best.':
    'AI ke jawaab ko mark karne ke teen tareeke ke naam batayiye, aur batayiye ki har ek kis kaam mein sabse achha hai.',
  'Say why an LLM judge\'s marks are only a guess until you count how often it agrees with you.':
    'Batayiye ki LLM judge ke marks tab tak sirf andaaza hain jab tak aap ginti na kar lein ki woh kitni baar aapse sehmat hai.',
  'Test your own judge for its known habits. One habit is liking longer answers more.':
    'Apne judge ki jaani-maani aadaton ke liye use test kijiye. Ek aadat hai lambe jawaab ko zyada pasand karna.',
  'Build an automatic marker, and check how far to trust it':
    'Ek automatic marker banaiye, aur check kijiye ki us par kitna bharosa karein',
  'Marking every output by hand takes too long. So you want a model to mark the tool\'s output. But a marker nobody has checked is only a guess. In this chapter you learned three ways to mark an answer. You also learned to test a judge against your own marks, and against its known habits. Now you build a marker for the tool\'s cleaned text, and check it.':
    'Har output ko haath se mark karne mein bahut time lagta hai. Isliye aap chahte hain ki ek model tool ke output ko mark kare. Lekin jis marker ko kisi ne check nahi kiya, woh sirf andaaza hai. Is chapter mein aapne jawaab mark karne ke teen tareeke seekhe. Aapne yeh bhi seekha ki judge ko apne marks se aur uski jaani-maani aadaton se test karna hai. Ab aap tool ke cleaned text ke liye ek marker banayenge, aur use check karenge.',
  'Your notebook for this chapter (the page where you run code in boxes). Use it to build and run the marker. Also mark the twenty outputs by hand. Write how often you agree in the notes box below. Short version for the route, about 20 minutes: steps 1, 3 and 4.':
    'Is chapter ka aapka notebook (woh page jahan aap code ko dibbon mein chalate hain). Ismein marker banaiye aur chalaiye. Bees outputs ko haath se bhi mark kijiye. Aap kitni baar sehmat hain, yeh neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 3 aur 4.',
  'Write the marking rules a careful person would follow for one question: “Is the cleaned text safe and still readable?” Say what safe means (every personal detail is removed or hidden). Say what readable means (the sentence still makes sense).':
    'Woh marking rules likhiye jo ek dhyaan se kaam karne wala insaan ek sawaal ke liye follow karega: “Kya cleaned text safe hai aur ab bhi padhne laayak hai?” Likhiye ki safe ka matlab kya hai (har personal detail hata di gayi ya chhupa di gayi). Likhiye ki padhne laayak ka matlab kya hai (sentence ka matlab ab bhi banta hai).',
  'Run the free checks first. Does text shaped like a PAN or an Aadhaar number still show in the cleaned text? Does the text still have its main words? Count how many outputs fail these checks. No model is needed.':
    'Pehle free checks chalaiye. Kya cleaned text mein ab bhi PAN ya Aadhaar number jaisa dikhne wala text hai? Kya text mein ab bhi uske main words hain? Ginti kijiye ki kitne outputs in checks mein fail hote hain. Model ki zaroorat nahi.',
  'Turn your rules into a marker that is itself a model. Let it mark twenty cleaned outputs. Then mark the same twenty yourself, by hand.':
    'Apne rules se ek marker banaiye jo khud ek model hai. Use bees cleaned outputs mark karne dijiye. Phir wahi bees khud haath se mark kijiye.',
  'Count how often the marker agrees with you. Look at where you disagree. Is the marker too strict, too soft, or both?':
    'Ginti kijiye ki marker kitni baar aapse sehmat hai. Dekhiye ki kahan aap sehmat nahi. Kya marker zyada sakht hai, zyada narm hai, ya dono?',
  'Test it for a liking for long answers. Take ten outputs. Make each one twice as long, but keep its meaning. Does the mark change?':
    'Dekhiye ki kya yeh lambe jawaab ko zyada pasand karta hai. Das outputs lijiye. Har ek ko do guna lamba kijiye, par matlab wahi rakhiye. Kya mark badalta hai?',
  'Write the range of marks where you would read the output yourself, instead of trusting the marker.':
    'Marks ki woh range likhiye jahan aap marker par bharosa karne ki jagah output khud padhenge.',
  'Save the marking rules, how often you agree and the disagreements as <code>docs/judge-check.md</code> in your repository (your online folder that remembers every change).':
    'Marking rules, aap kitni baar sehmat hain, aur disagreements ko apni repository (aapka online folder jo har badlaav yaad rakhta hai) mein <code>docs/judge-check.md</code> ke roop mein save kijiye.',
  'Your marking rules.':
    'Aapke marking rules.',
  'How many outputs failed the free checks.':
    'Kitne outputs free checks mein fail hue, uski ginti.',
  'How often the marker and you agree on the same twenty outputs.':
    'Wahi bees outputs par marker aur aap kitni baar sehmat hain.',
  'The result of the long-answer test.':
    'Lambe jawaab wale test ka result.',
  'The range of marks where you would not trust the marker.':
    'Marks ki woh range jahan aap marker par bharosa nahi karenge.',
  'You wrote the answers down first':
    'Aapne jawaab pehle likh liye the',
  'Ten questions with the right answers, written before you tested. This is your teacher\'s answer key.':
    'Das sawaal aur unke sahi jawaab, testing se pehle likhe hue. Yahi aapki teacher wali answer key hai.',
  'This is the give-and-take from Chapter 6: fetch more cards and some are the wrong ones. You choose the balance.':
    'Yeh Chapter 6 wala lena-dena hai: zyada cards laoge toh kuch galat cards bhi aayenge. Santulan aap chunte hain.',
  'You will use your form-style RAG output from Chapter 8.5 (an open-book answer filled into fixed boxes) and your Chapter 6 answer key. Both stay with you in the notebook session.':
    'Aap Chapter 8.5 ka apna form-style RAG output (open-book jawaab, fixed khaanon mein bhara hua) aur Chapter 6 ki answer key use karenge. Dono notebook session mein aapke saath rehte hain.',
  'In the last chapter you saw what can go wrong when a system reads text it should not trust. Now we ask a plainer question. How do you know if your system\'s answers are any good?':
    'Pichhle chapter mein aapne dekha ki jab system aisa text padhta hai jis par bharosa nahi karna chahiye, toh kya galat ho sakta hai. Ab ek seedha sawaal: aapko kaise pata chalega ki aapke system ke jawaab achhe hain?',
  'You already know one way. In Chapter 6 you wrote ten questions with the right answers. Then you marked the system yourself, like a teacher with an answer key. This is still the most trusted way to know if something works.':
    'Ek tareeka aap pehle se jaante hain. Chapter 6 mein aapne das sawaal aur unke sahi jawaab likhe the. Phir aapne system ko khud mark kiya, jaise answer key wala teacher. Yeh ab bhi sabse bharose wala tareeka hai yeh jaanne ka ki kuch kaam karta hai.',
  'But this way has a limit. Marking by hand is too slow at about fifty questions, and a real product gets thousands each week. This chapter shows how to mark that many answers. It also shows how to check that the marker deserves your trust.':
    'Lekin is tareeke ki ek limit hai. Haath se mark karna lagbhag pachaas sawaalon par bahut dheema ho jaata hai, aur asli product ko har hafte hazaaron sawaal milte hain. Yeh chapter dikhata hai ki itne jawaab kaise mark karein. Yeh bhi dikhata hai ki marker par bharosa karna theek hai ya nahi, yeh kaise check karein.',
  'Three ways to mark an answer':
    'Jawaab mark karne ke teen tareeke',
  'Good quality work uses three kinds of markers. Think of a school exam. A machine can check the spelling. A teacher can read for meaning. Each costs a different amount, and each is good at different things. The table shows where each fits.':
    'Achhe quality kaam mein teen tarah ke marker use hote hain. School exam sochiye. Machine spelling check kar sakti hai. Teacher matlab padh kar mark kar sakta hai. Teeno ki cost alag hai, aur har ek alag cheez mein achha hai. Table dikhati hai ki har ek kahan fit hota hai.',
  'Marker':
    'Marker',
  'Good at':
    'Kis mein achha',
  'Bad at':
    'Kis mein kamzor',
  '<strong>Code</strong> (a small program)':
    '<strong>Code</strong> (ek chhota program)',
  'Almost free':
    'Lagbhag free',
  'Quick yes-or-no checks: is the format right, is a source named, is a number in a sensible range, is it fast enough.':
    'Jaldi ke haan-ya-na wale checks: format sahi hai, source ka naam hai, number samajhdaar range mein hai, kya yeh kaafi tez hai.',
  'Anything that needs a thinking mind':
    'Jahan sochne wala dimaag chahiye, wahan kuch bhi',
  '<strong>A person</strong>':
    '<strong>Ek insaan</strong>',
  'Very costly':
    'Bahut mehnga',
  'Everything. A person decides what “right” means.':
    'Sab kuch. “Sahi” ka matlab insaan hi tay karta hai.',
  'Slow, and two people often disagree':
    'Dheema, aur do log aksar ek-doosre se sehmat nahi hote',
  '<strong>An LLM judge</strong> (a second model that marks)':
    '<strong>Ek LLM judge</strong> (ek doosra model jo mark karta hai)',
  'Cheap and quick':
    'Sasta aur jaldi',
  'Questions like these: does the source back this answer, and which of two answers is better.':
    'Aise sawaal: kya source is jawaab ko sahi thehraata hai, aur do jawaabon mein se kaun sa behtar hai.',
  'Has habits (called biases) that you must measure':
    'Iski kuch aadatein (jinhe bias kehte hain) hain jinhe aapko naapna padta hai',
  'Start with code checks':
    'Code checks se shuru kijiye',
  'Start with code, because it is free and most teams use too little of it. Many bad answers fail in ways a program can spot, like a clerk who checks that a form has a signature. A source might not be named. It might point to a chunk (one index card of text) that was never fetched. A quote might not be in the source. A number might be far too big or small.':
    'Code se shuru kijiye, kyunki woh free hai aur zyadatar teams use kam use karti hain. Bahut se kharab jawaab aise tareeke se fail hote hain jo program pakad leta hai, jaise clerk dekhta hai ki form par signature hai ya nahi. Ho sakta hai source ka naam hi na ho. Ho sakta hai woh aise chunk (text ka ek index card) ko dikhaye jo kabhi laya hi nahi gaya. Ho sakta hai quote source mein ho hi nahi. Ho sakta hai number bahut bada ya bahut chhota ho.',
  'Each of these checks is only a few lines of code. It can run every time you change something.':
    'Aise har check mein bas kuch lines ka code hota hai. Woh aap har badlaav ke baad chala sakte hain.',
  'Write the code checks':
    'Code checks likhiye',
  'Before you build any judge, write the checks that your Chapter 8 structured output (the form-style reply) makes possible. Its fixed boxes are easy for a program to read.':
    'Judge banane se pehle woh checks likhiye jo Chapter 8 ka structured output (form-style reply) possible banata hai. Uske fixed khaane program ke liye padhna aasaan banate hain.',
  'Run it on your ten Chapter 6 answers. The last check sees if the quote is in the source, word for word. It catches made-up quotes for free on every release (every new version you ship). This is the cheapest quality check in the course.':
    'Ise apne Chapter 6 ke das jawaabon par chalaiye. Aakhri check dekhta hai ki quote source mein word-for-word hai ya nahi. Yeh har release par (har naye version par) banawati quotes ko free mein pakad leta hai. Yeh course ka sabse sasta quality check hai.',
  'Code cannot mark everything. It cannot tell you if an answer is really backed by its source. For that kind of question, we ask a model to be the marker.':
    'Code har cheez mark nahi kar sakta. Woh nahi bata sakta ki jawaab sach mein source se sahi thehra hai ya nahi. Aise sawaal ke liye hum ek model ko marker banate hain.',
  'Build an LLM judge':
    'LLM judge banaiye',
  'An <strong>LLM judge</strong> is a model that marks another model\'s answer. Think of a second student marking homework. It is cheap and quick. But you must check it before you trust it.':
    '<strong>LLM judge</strong> ek model hai jo doosre model ke jawaab ko mark karta hai. Sochiye ek doosra student homework mark kar raha hai. Woh sasta aur jaldi hai. Lekin bharosa karne se pehle use check karna zaroori hai.',
  'Check an LLM judge against your own marks before you trust it. Unchecked, it is just another guess, from the same kind of system that wrote the answer.':
    'LLM judge par bharosa karne se pehle use apne marks se milaiye. Bina check kiye woh bas ek aur andaaza hai, usi tarah ke system se jisne woh jawaab likha tha.',
  'Checking a judge against your own marks is like checking a second evaluator on a tender committee. If two evaluators score the same bids differently, you find out why before you trust either one.':
    'Judge ko apne marks se milana waisa hi hai jaise tender committee mein doosre evaluator ko check karna. Agar do evaluator same bids ko alag score dein, toh aap kisi ek par bharosa karne se pehle kaaran dhoondhte hain.',
  'In the lab below you can watch a judge at work.':
    'Neeche lab mein aap ek judge ko kaam karte dekh sakte hain.',
  'Now write one yourself.':
    'Ab ek khud likhiye.',
  'Write a judge with a rubric (a marking scheme)':
    'Rubric (marking scheme) ke saath ek judge likhiye',
  'See how this judge is built. It marks one narrow thing. It must quote the claim it objects to. And it is told to ignore its known habits. A judge told to “rate quality from 1 to 10” gives numbers you cannot use.':
    'Dekhiye ki yeh judge kaise bana hai. Woh sirf ek chhoti cheez mark karta hai. Jis claim par use aitraaz hai, use quote karna padta hai. Aur use kaha gaya hai ki apni jaani-maani aadatein ignore kare. Jis judge se kaha jaaye “quality ko 1 se 10 tak rate karo”, woh aise numbers deta hai jinse aap kuch nahi kar sakte.',
  'Count how often you agree':
    'Ginti kijiye ki kitni baar sehmat hain',
  'So how do you check a judge? You count <strong>agreement</strong>, which means how often two markers give the same mark. Mark twenty answers yourself. Let the judge mark the same twenty. Count the times you match. If you match rarely, the judge\'s marks cannot be trusted.':
    'Toh judge ko kaise check karein? Aap <strong>agreement</strong> ginte hain, matlab do marker kitni baar same mark dete hain. Bees jawaab khud mark kijiye. Judge se wahi bees mark karwaiye. Ginti kijiye ki kitni baar mark milte hain. Agar kam milte hain, toh judge ke marks par bharosa nahi kar sakte.',
  'A fraction, like 7/10':
    'Ek fraction, jaise 7/10',
  'The book gave one team\'s agreement. Now guess your own. You mark twenty answers by hand, and the judge marks the same twenty. How often will it match you on the first try?':
    'Book ne ek team ka agreement diya. Ab apna andaaza lagaiye. Aap bees jawaab haath se mark karte hain, aur judge wahi bees mark karta hai. Pehli koshish mein woh kitni baar aapse milega?',
  'Six or seven out of ten is normal on a first try. How the mismatches look matters more than the number. If they bunch together, you have found something to fix. For example, the judge may pass every answer that sounds unsure. If they are spread out with no pattern, your own idea of a good answer is probably blurry. Changing the judge prompt (its note) will not help.':
    'Pehli koshish mein das mein se chhe ya saat normal hain. Number se zyada zaroori hai ki mismatch kaise dikhte hain. Agar woh ek jagah jama hain, toh aapko theek karne layak cheez mili. Jaise judge har us jawaab ko pass kar de jo jhijhakta hua lagta hai. Agar woh bikhre hain aur koi pattern nahi, toh achhe jawaab ki aapki apni soch shayad dhundhli hai. Judge prompt (uska note) badalne se kuch nahi hoga.',
  'So look at whether the mismatches bunch up or spread out. That tells you whether to fix the judge or your own idea of “good”.':
    'Isliye dekhiye ki mismatch ek jagah jama hain ya bikhre hain. Isse pata chalta hai ki judge ko theek karna hai ya apni “achha” ki soch ko.',
  'Mark the judge':
    'Judge ko mark kijiye',
  'Most teams skip this step. Label all ten of your Chapter 6 answers by hand: grounded (backed by the source), partly grounded, or unsupported. Then run the judge on the same ten and compare.':
    'Zyadatar teams yeh step chhod deti hain. Chapter 6 ke apne saare das jawaabon par haath se label lagaiye: grounded (source se pakka), partly grounded, ya unsupported. Phir wahi das judge se chalwaiye aur milaiye.',
  'Look closely at the mismatches. They tell you more than the score. A judge that is always soft on one kind of mistake is still usable, if you know about it. A judge that goes wrong at random is not usable.':
    'Mismatch ko dhyaan se dekhiye. Woh score se zyada batate hain. Jo judge ek tarah ki galti par hamesha narm rehta hai, woh use ke laayak hai, bas aapko pata ho. Jo judge random galti karta hai, woh use ke laayak nahi.',
  'Before you run it, guess how many of the 10 will match. Afterwards, note if the mismatches look alike or are spread out.':
    'Chalane se pehle andaaza lagaiye ki 10 mein se kitne mark milenge. Baad mein dekhiye ki mismatch ek jaise hain ya bikhre hue.',
  'Careful':
    'Savdhaan',
  'Count two things apart. First, how often the judge catches the answers you marked as fails. Second, how often it passes the answers you marked as passes. When most answers pass, the plain match count can look high while the judge misses most real failures. It is like a net with big holes: it looks full, but the fish got away.':
    'Do cheezein alag ginye. Pehli, jin jawaabon ko aapne fail kiya, unhe judge kitni baar pakadta hai. Doosri, jinhe aapne pass kiya, unhe woh kitni baar pass karta hai. Jab zyadatar jawaab pass hote hain, tab seedhi match ginti ooncha dikh sakti hai jabki judge zyadatar asli failures chhod deta hai. Jaise bade ched wala jaal: bhara dikhta hai, par machhli nikal gayi.',
  'Known judge habits (biases)':
    'Judge ki jaani-maani aadatein (biases)',
  'Even a judge that often agrees with you can lean one way, in ways you can predict. Think of a teacher who gives more marks for neat handwriting. These leanings are called biases, and LLM judges have a few well-known ones.':
    'Jo judge aapse aksar sehmat ho, woh bhi ek taraf jhuk sakta hai, aise tareeke se jo pehle se pata ho sakta hai. Sochiye ek teacher jo sundar likhawat par zyada marks de. Is jhukaav ko bias kehte hain, aur LLM judges ke kuch jaane-maane biases hain.',
  'First, they give <strong>higher marks to longer answers</strong>, even when the extra words add nothing. Second, when they compare two answers, they tend to prefer <strong>the answer they saw first</strong>.':
    'Pehla, woh <strong>lambe jawaab ko zyada marks</strong> dete hain, tab bhi jab extra words se kuch nahi judta. Doosra, jab woh do jawaab milate hain, toh woh aksar <strong>jo jawaab pehle dekha</strong> use pasand karte hain.',
  'The fixes are small, and they work. Mark one specific thing, not overall quality. Put two answers side by side instead of marking one, and swap their order. Make the judge quote the sentence its verdict rests on.':
    'Iske fix chhote hain, aur kaam karte hain. Overall quality ki jagah ek khaas cheez mark kijiye. Ek jawaab mark karne ki jagah do jawaab saath rakhiye, aur unka order badal dijiye. Judge se kahiye ki jis sentence par uska faisla tika hai, use quote kare.',
  'Test your judge for a liking of long answers':
    'Apne judge ko lambe jawaab ke pasand ke liye test kijiye',
  'Take one correct, short answer. Write a padded copy that says the same things in three times as many words, with more “maybe” talk and more headings. Let the judge mark both.':
    'Ek sahi, chhota jawaab lijiye. Usi ki baatein teen guna zyada words mein likhiye, zyada “shayad” wali baat aur zyada headings ke saath. Judge se dono mark karwaiye.',
  'The padded copy often scores as well, and sometimes better, though it has no new correct facts. You have just measured a bias that affects many published test results.':
    'Padded copy aksar utna hi achha score karti hai, kabhi-kabhi behtar, jabki usmein koi naya sahi fact nahi hai. Aapne abhi ek aisa bias naapa jo kai chhape hue test results ko hilata hai.',
  'Let us pull the chapter together. There are three kinds of marker: code, a person and an LLM judge. Use free code checks first. Then use a judge for the questions code cannot answer.':
    'Chaliye chapter ko jodte hain. Marker teen tarah ke hain: code, ek insaan, aur ek LLM judge. Pehle free code checks use kijiye. Phir un sawaalon ke liye judge jinka jawaab code nahi de sakta.',
  'A judge you have checked against your own marks is a real measuring tool. A judge you have not checked tends to agree with the model it is marking, like a student who copies from his neighbour.':
    'Jis judge ko aapne apne marks se mila liya, woh asli naapne ka tool hai. Jis judge ko check nahi kiya, woh aksar usi model se sehmat hota hai jise woh mark kar raha hai, jaise padosi se copy karne wala student.',
  'One more thing. Judges tell you how often something is wrong. They do not tell you <em>what</em> is wrong. The next chapter is about the most useful quality work there is, and it needs no model at all.':
    'Ek baat aur. Judges batate hain ki kuch kitni baar galat hai. Woh yeh nahi batate ki <em>kya</em> galat hai. Agla chapter sabse kaam ke quality kaam ke baare mein hai, aur usmein koi model chahiye hi nahi.',
});
