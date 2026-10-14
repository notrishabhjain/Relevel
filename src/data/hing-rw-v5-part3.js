/* Hinglish: part3, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch14: Evaluation at scale: code checks and LLM judges ---- */
  'Evaluation at scale: code checks and LLM judges':
    'Evaluation scale par: code checks aur LLM judges',
  'Grading by hand stops working at around fifty questions. You’ll combine free code checks with an LLM judge, then measure how often the judge agrees with you before you trust its scores.':
    'Haath se grading karna lagbhag pachaas sawaalon ke baad kaam nahi aata. Aap free code checks ko ek LLM judge ke saath milaayenge, aur phir judge ke scores par bharosa karne se pehle naapenge ki woh kitni baar aapse sehmat hota hai.',
  'You wrote the answers down first':
    'Aapne jawaab pehle likh liye the',
  'Ten questions with correct answers, written before testing.':
    'Das sawaal aur unke sahi jawaab, testing se pehle likhe hue.',
  'Fetching more also fetches more irrelevant chunks':
    'Zyada fetch karne par zyada irrelevant chunks bhi aate hain',
  'This is the trade-off from Chapter 6, and the choice is yours.':
    'Yeh Chapter 6 ka trade-off hai, aur is mein choice aapki hai.',
  'Name the three ways to grade an AI answer, and say what each is good at.':
    'Bata paana ki AI ke jawaab ko grade karne ke teen tareeke kaun se hain, aur har ek kis kaam mein achha hai.',
  'Explain why an LLM judge is not a measurement until you have checked how often it agrees with you.':
    'Samjha paana ki LLM judge tab tak measurement nahi hai jab tak aap check na kar lein ki woh kitni baar aapse sehmat hota hai.',
  'Test your own judge for known biases, such as favouring longer answers.':
    'Apne judge ko known biases ke liye test kar paana, jaise lambe jawaab ko pasand karna.',
  'Before you start':
    'Shuru karne se pehle',
  'Open a new notebook called <code>chapter-14</code>. Bring your structured RAG output from Chapter 8.5 and your Chapter 6 answer key.':
    '<code>chapter-14</code> naam ka ek naya notebook kholiye. Chapter 8.5 ka apna structured RAG output aur Chapter 6 ka answer key saath rakhiye.',
  'In the last chapter you looked at what can go wrong when a system reads text it shouldn’t trust. Now we turn to a plainer question: how do you know whether your system’s answers are any good?':
    'Pichhle chapter mein aapne dekha ki jab koi system aisa text padhta hai jis par bharosa nahi karna chahiye, toh kya galat ho sakta hai. Ab hum ek seedha sawaal lete hain: aapko kaise pata chalega ki aapke system ke jawaab achhe hain ya nahi?',
  'You already know one way. In Chapter 6 you wrote ten questions and their correct answers, and then graded the system yourself. That is still the most reliable way to know whether something works.':
    'Ek tareeka aap pehle se jaante hain. Chapter 6 mein aapne das sawaal aur unke sahi jawaab likhe the, aur phir system ko khud grade kiya tha. Yeh ab bhi sabse bharosemand tareeka hai yeh jaanne ka ki kuch kaam kar raha hai ya nahi.',
  'But it has a limit. Grading by hand stops being practical at around fifty questions, and a real product gets thousands a week. This chapter shows you how to grade at that size, and how to check that the grader itself deserves your trust.':
    'Lekin iski ek limit hai. Haath se grading lagbhag pachaas sawaalon ke baad practical nahi rehti, aur ek asli product ko har hafte hazaaron sawaal milte hain. Yeh chapter dikhata hai ki itne bade scale par grading kaise karein, aur yeh bhi ki grader khud bhi bharose ke laayak hai ya nahi, yeh kaise check karein.',
  'Three ways to grade an answer':
    'Jawaab ko grade karne ke teen tareeke',
  'Every quality process combines three kinds of grader. They cost different amounts, and each is good at different things. The table shows where each one fits.':
    'Har quality process teen tarah ke graders ko milaata hai. Teeno ki cost alag hoti hai, aur har ek alag cheezon mein achha hota hai. Table dikhati hai ki har ek kahan fit hota hai.',
  'Grader':
    'Grader',
  'Cost':
    'Cost',
  'Good at':
    'Kis mein achha',
  'Bad at':
    'Kis mein kamzor',
  '<strong>Code</strong>':
    '<strong>Code</strong>',
  'Almost free':
    'Lagbhag free',
  'Checking things like these: is the format correct, does it cite a source, is a number in a sensible range, is it fast enough.':
    'Aisi cheezein check karna: format sahi hai ya nahi, source cite kiya hai ya nahi, number sensible range mein hai ya nahi, kya yeh kaafi tez hai.',
  'Anything that needs judgement':
    'Jahan judgement chahiye, wahan kuch bhi',
  '<strong>A person</strong>':
    '<strong>Ek insaan</strong>',
  'Very expensive':
    'Bahut mehnga',
  'Everything. A person is how you define what correct means.':
    'Sab kuch. Sahi ka matlab kya hai, yeh insaan hi define karta hai.',
  'Slow, and two people often disagree':
    'Dheema, aur do log aksar ek-doosre se sehmat nahi hote',
  '<strong>An LLM judge</strong>':
    '<strong>Ek LLM judge</strong>',
  'Cheap and fast':
    'Sasta aur tez',
  'Questions like these: is this supported by the source, which of two answers is better.':
    'Aise sawaal: kya yeh source se support hota hai, do jawaabon mein se kaun sa behtar hai.',
  'Has specific biases you must measure':
    'Iske kuch khaas biases hain jinhe aapko measure karna padta hai',
  'Start with code checks':
    'Code checks se shuru kijiye',
  'Let’s start with code, because it’s free and most teams don’t use enough of it. Many bad answers fail in ways a program can spot. A citation might be missing. It might point to a chunk that was never retrieved. A quote might not be in the source, or a number might fall outside any sensible range.':
    'Chaliye code se shuru karte hain, kyunki woh free hai aur zyadatar teams use zaroorat se kam use karti hain. Bahut se kharab jawaab aise tareeke se fail hote hain jo ek program pakad sakta hai. Ho sakta hai citation missing ho. Ho sakta hai woh aise chunk ki taraf point kare jo kabhi retrieve hi nahi hua. Ho sakta hai quote source mein ho hi nahi, ya koi number kisi bhi sensible range se bahar ho.',
  'Each of these checks is only a few lines of code, and it can run on every change you make.':
    'Aise har check mein bas kuch lines ka code hota hai, aur woh aapke har change par chal sakta hai.',
  'Write the code checks':
    'Code checks likhiye',
  'Before you build any judge, write the checks that your structured output from Chapter 8 makes possible.':
    'Koi bhi judge banane se pehle woh checks likhiye jo Chapter 8 ka aapka structured output possible banata hai.',
  'Run it on your ten Chapter 6 answers. The last check tests whether the quote appears word for word in the source. It catches invented citations for free on every release, which makes it the cheapest quality control in the course.':
    'Ise apne Chapter 6 ke das jawaabon par chalaiye. Aakhri check dekhta hai ki quote source mein word-for-word maujood hai ya nahi. Yeh har release par invented citations ko free mein pakad leta hai, isliye yeh course ka sabse sasta quality control hai.',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.':
    'Aapne aisa cell chalaya jise kisi pichhle cell ki cheez chahiye, lekin woh pichhla cell abhi chala hi nahi. Upar scroll kijiye, warm-up cells ko order mein chalaiye, phir yahan wapas aaiye. Notebook mein sabse common dikkat yahi hai. Yeh sabke saath hota hai, aur iska matlab yeh nahi ki aapka code galat hai.',
  'An authentication error, or the number 401':
    'Authentication error, ya 401 number',
  'Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.':
    'Aapki key code tak nahi pahunchi. Key load karne wala cell dobara chalaiye, aur check kijiye ki jis naam se aapne key save ki thi, woh <a href="#/setup">Setup</a> se bilkul match kare. Capital letters ka bhi farq padta hai.',
  'A message about a module not being found':
    'Module not found jaisa koi message',
  'The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.':
    'Is session mein install wala cell nahi chala. Notebook disconnect hote hi apne installs bhool jaata hai, aur kuch der akela chhodne par woh disconnect ho jaata hai. Install wala cell dobara chalaiye aur aage badhiye.',
  'It runs, but your numbers are not the ones printed above':
    'Code chal gaya, lekin aapke numbers upar wale numbers se alag hain',
  'That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.':
    'Aisa hona normal hai, yeh galti nahi hai. Models badalte rehte hain, aur aapka text hamare text jaisa nahi hai. Zaroori yeh hai ki numbers kis direction mein jaate hain aur farq lagbhag kitna hai, exact number match karna nahi. Agar aapke numbers bhi usi direction mein jaate hain, toh experiment kaam kar gaya.',
  'Code can’t judge everything, though. It can’t tell you whether an answer is actually supported by its source. For that kind of question, we bring in a model as the grader.':
    'Lekin code har cheez judge nahi kar sakta. Woh yeh nahi bata sakta ki koi jawaab asal mein apne source se support hota hai ya nahi. Aise sawaal ke liye hum grader ke taur par ek model ko lete hain.',
  'Build an LLM judge':
    'LLM judge banaiye',
  'An <strong>LLM judge</strong> is a model that grades another model’s output. It’s cheap and fast, but you must check it before you trust it.':
    '<strong>LLM judge</strong> ek model hota hai jo doosre model ke output ko grade karta hai. Woh sasta aur tez hai, lekin us par bharosa karne se pehle use check karna zaroori hai.',
  'Check an LLM judge against your own grading before you trust it. Unchecked, it is just another guess from the same kind of system that produced the answer.':
    'LLM judge par bharosa karne se pehle use apni grading ke saath compare kijiye. Bina check kiye woh bas ek aur andaaza hai, usi tarah ke system se jisne woh jawaab banaya tha.',
  'You can see a judge at work in the lab below.':
    'Neeche lab mein aap ek judge ko kaam karte dekh sakte hain.',
  'Now let’s write one yourself.':
    'Ab chaliye ek khud likhte hain.',
  'Write a judge with a rubric':
    'Rubric ke saath ek judge likhiye',
  'Look at how this judge is designed. It grades one narrow thing. It must quote the claim it objects to. And it’s told to ignore known biases. A judge asked to “rate quality from 1 to 10” produces numbers you can’t act on.':
    'Dekhiye ki yeh judge kaise design kiya gaya hai. Woh sirf ek chhoti cheez grade karta hai. Jis claim par use aitraaz hai, use quote karna padta hai. Aur use known biases ko ignore karne ko kaha gaya hai. Jo judge “quality ko 1 se 10 tak rate karo” jaisa kaam kare, woh aise numbers deta hai jin par aap kuch kar nahi sakte.',
  'Measure agreement':
    'Agreement naapiye',
  'So how do you check a judge? You measure <strong>agreement</strong>. Grade fifty answers yourself, have the judge grade the same fifty, and count how often you agree. If agreement is low, the judge’s scores aren’t reliable.':
    'Toh judge ko check kaise karein? Aap <strong>agreement</strong> naapte hain. Pachaas jawaab khud grade kijiye, judge se wahi pachaas grade karwaiye, aur ginti kijiye ki kitni baar aap dono sehmat hue. Agar agreement kam hai, toh judge ke scores reliable nahi hain.',
  'A fraction, like 7/10':
    'Ek fraction, jaise 7/10',
  'Predict: you write a judge prompt, grade fifty answers by hand, and have the judge grade the same fifty. How often will it agree with you on the first attempt?':
    'Andaaza lagaiye: aap ek judge prompt likhte hain, pachaas jawaab haath se grade karte hain, aur judge se wahi pachaas grade karwate hain. Pehli koshish mein woh kitni baar aapse sehmat hoga?',
  'Six or seven out of ten is normal for a first attempt. The pattern of disagreements matters more than the number. If they cluster, for example the judge marks every hedged answer as correct, you have found something you can fix. If they are scattered with no pattern, your own definition of a good answer is probably unclear, and changing the judge prompt will not help.':
    'Pehli koshish mein das mein se chhe ya saat normal hain. Number se zyada zaroori hai disagreements ka pattern. Agar woh ek jagah jama hain, jaise judge har hedged jawaab ko correct maan leta hai, toh aapko kuch aisa mila hai jo aap theek kar sakte hain. Agar woh bikhre hue hain aur koi pattern nahi hai, toh shayad achhe jawaab ki aapki apni definition saaf nahi hai, aur judge prompt badalne se kuch nahi hoga.',
  'So check whether disagreements are clustered or scattered. That tells you whether to fix the judge or your own definition.':
    'Isliye check kijiye ki disagreements ek jagah jama hain ya bikhre hue. Isse pata chalta hai ki judge ko theek karna hai ya apni definition ko.',
  'Grade the judge':
    'Judge ko grade kijiye',
  'Most teams skip this step. Label all ten of your Chapter 6 answers by hand as grounded, partly grounded or unsupported. Then run the judge on the same ten and compare.':
    'Zyadatar teams yeh step chhod deti hain. Chapter 6 ke apne saare das jawaabon ko haath se label kijiye: grounded, partly grounded ya unsupported. Phir wahi das judge se chalwaiye aur compare kijiye.',
  'Look closely at the disagreements, because they tell you more than the score. A judge that is consistently lenient on one type of failure is usable, as long as you know about it. A judge whose errors are random is not usable.':
    'Disagreements ko dhyaan se dekhiye, kyunki woh score se zyada batate hain. Jo judge ek tarah ki failure par hamesha lenient rehta hai, woh use ke laayak hai, bas aapko yeh pata hona chahiye. Jis judge ki galtiyan random hain, woh use ke laayak nahi hai.',
  'Tip':
    'Tip',
  'Before running, predict your agreement out of 10. Afterwards, note whether the disagreements are consistent or scattered.':
    'Run karne se pehle andaaza lagaiye ki 10 mein se kitnon par agreement hoga. Baad mein note kijiye ki disagreements ek jaise hain ya bikhre hue.',
  'Known judge biases':
    'Judge ke known biases',
  'Even a judge that agrees with you fairly often can lean in predictable ways. These leanings are called biases, and LLM judges have a few well-known ones.':
    'Jo judge aapse kaafi baar sehmat ho, woh bhi kuch pehle se andaaza lagaaye ja sakne wale tareekon se jhuk sakta hai. Inhe biases kehte hain, aur LLM judges ke kuch jaane-maane biases hain.',
  'First, they score <strong>longer answers higher</strong>, even when the extra words add nothing. Second, when they compare two answers, they tend to favour <strong>whichever answer they saw first</strong>.':
    'Pehla, woh <strong>lambe jawaab ko zyada score</strong> dete hain, tab bhi jab extra words se kuch jud nahi raha. Doosra, jab woh do jawaabon ko compare karte hain, toh woh <strong>jo jawaab unhone pehle dekha</strong> use pasand karte hain.',
  'The fixes are simple, and they work. Grade one specific thing rather than overall quality. Compare two answers rather than scoring one, and swap their order. Require the judge to quote the sentence its verdict is based on.':
    'Iske fixes simple hain, aur kaam karte hain. Overall quality ki jagah ek khaas cheez grade kijiye. Ek jawaab ko score karne ki jagah do jawaabon ko compare kijiye, aur unka order badal dijiye. Judge se kahiye ki jis sentence par uska verdict tika hai, use quote kare.',
  'Test your judge for length bias':
    'Apne judge ko length bias ke liye test kijiye',
  'Take one correct, short answer. Write a padded version with the same claims in three times as many words, with more hedging and structure. Judge both.':
    'Ek sahi, chhota jawaab lijiye. Usi ke claims ko teen guna zyada words mein, zyada hedging aur structure ke saath, ek padded version likhiye. Dono ko judge kijiye.',
  'The padded version often scores at least as well, and sometimes better, even though it contains no extra correct information. You have just measured a bias that affects many published evaluation results.':
    'Padded version aksar utna hi achha score karta hai, aur kabhi-kabhi behtar, jabki usmein koi extra sahi information nahi hai. Aapne abhi ek aisa bias naapa hai jo kai published evaluation results ko affect karta hai.',
  'Summary':
    'Summary',
  'Let’s pull the chapter together. There are three kinds of grader: code, a person and an LLM judge. Use free code checks first, then a judge for the questions code can’t answer.':
    'Chaliye chapter ko jodte hain. Grader teen tarah ke hain: code, ek insaan, aur ek LLM judge. Pehle free code checks use kijiye, phir un sawaalon ke liye judge jinka jawaab code nahi de sakta.',
  'A judge you have checked against your own grading is a measuring tool. A judge you have not checked will tend to agree with the model it is grading.':
    'Jis judge ko aapne apni grading ke saath check kar liya, woh ek measuring tool hai. Jis judge ko check nahi kiya, woh us model se sehmat hone ki taraf jhukega jise woh grade kar raha hai.',
  'One more thing to keep in mind. Judges tell you how often something is wrong, not <em>what</em> is wrong. The next chapter covers the most useful activity in AI quality work, and it needs no model at all.':
    'Ek aur baat yaad rakhiye. Judges aapko yeh batate hain ki kuch kitni baar galat hai, yeh nahi ki <em>kya</em> galat hai. Agla chapter AI quality ke kaam ki sabse kaam ki activity batata hai, aur usmein koi model chahiye hi nahi.',
  'Build an automatic marker, and check how far to trust it':
    'Ek automatic marker banaiye, aur check kijiye ki us par kitna bharosa karein',
  'Marking every output by hand doesn’t scale, so you’ll want a model to mark the tool’s output. But a marker nobody has checked is not a measurement. In this chapter you learned the three ways to grade an answer. You also learned that a judge must be tested against your own marking and against its known biases. Now you’ll build a marker for the tool’s cleaned text, and check it.':
    'Har output ko haath se mark karna scale nahi karta, isliye aap chahenge ki ek model tool ke output ko mark kare. Lekin jis marker ko kisi ne check nahi kiya, woh measurement nahi hai. Is chapter mein aapne jawaab grade karne ke teen tareeke seekhe. Aapne yeh bhi seekha ki judge ko aapki apni marking ke against aur uske known biases ke against test karna padta hai. Ab aap tool ke cleaned text ke liye ek marker banayenge, aur use check karenge.',
  'Your <code>chapter-14</code> notebook, to build and run the marker. Mark the fifty outputs by hand as well, and write the agreement figure in the notes box below.':
    'Aapka <code>chapter-14</code> notebook, marker banane aur chalane ke liye. Pachaas outputs ko haath se bhi mark kijiye, aur agreement ka figure neeche notes box mein likhiye.',
  'Write the marking rules a careful person would use for one question: “Is the cleaned text safe and still readable?” Spell out what counts as safe (every personal detail removed or masked) and what counts as readable (the sentence still makes sense).':
    'Ek sawaal ke liye woh marking rules likhiye jo ek dhyaan se kaam karne wala insaan use karega: “Kya cleaned text safe hai aur ab bhi padhne laayak hai?” Saaf likhiye ki safe ka matlab kya hai (har personal detail hata di gayi ya mask kar di gayi) aur padhne laayak ka matlab kya hai (sentence ka matlab ab bhi banta hai).',
  'Run the free checks first. Does any text shaped like a PAN or an Aadhaar number still appear in the cleaned text? Does the text still have its main words? Count how many outputs fail these checks without needing a model.':
    'Pehle free checks chalaiye. Kya cleaned text mein ab bhi PAN ya Aadhaar number jaisa dikhne wala koi text aata hai? Kya text mein ab bhi uske main words hain? Ginti kijiye ki kitne outputs yeh checks bina kisi model ke fail kar dete hain.',
  'Build the model-based marker from your rules and let it mark fifty cleaned outputs. Mark the same fifty yourself, by hand.':
    'Apne rules se model-based marker banaiye aur use pachaas cleaned outputs mark karne dijiye. Wahi pachaas khud haath se mark kijiye.',
  'Calculate how often the marker agrees with you. Look at the disagreements: is the marker too strict, too lenient, or both?':
    'Calculate kijiye ki marker kitni baar aapse sehmat hota hai. Disagreements dekhiye: kya marker zyada strict hai, zyada lenient hai, ya dono?',
  'Test it for a bias towards length: take ten outputs and make each one twice as long without changing its meaning. Does the mark change?':
    'Length ke bias ke liye ise test kijiye: das outputs lijiye aur har ek ko, matlab badle bina, do guna lamba kar dijiye. Kya mark badalta hai?',
  'Write the range of marks in which you would read the output yourself instead of trusting the marker.':
    'Marks ki woh range likhiye jisme aap marker par bharosa karne ki jagah output khud padhenge.',
  'Your marking rules.':
    'Aapke marking rules.',
  'The number of outputs that failed the free checks.':
    'Un outputs ki ginti jo free checks mein fail hue.',
  'The agreement between the marker and you on the same fifty outputs.':
    'Wahi pachaas outputs par marker aur aapke beech ka agreement.',
  'The result of the length test.':
    'Length test ka result.',
  'The range of marks where you would not trust the marker.':
    'Marks ki woh range jahan aap marker par bharosa nahi karenge.',

  /* ---- ch145: Error analysis: reading failures by hand ---- */
  'Error analysis: reading failures by hand':
    'Error analysis: failures ko haath se padhna',
  'Reading real outputs and naming what went wrong is the most useful quality activity there is, and it needs no model or budget. You’ll read failures, group them, count them, and turn the biggest groups into test cases.':
    'Asli outputs padhna aur likhna ki kya galat hua, quality ka sabse kaam ka tareeka hai, aur ismein na model chahiye na budget. Aap failures padhenge, unhe groups mein baantenge, ginenge, aur sabse bade groups ko test cases bana denge.',
  'An LLM judge can grade at scale':
    'LLM judge bade scale par grade kar sakta hai',
  'And you know how far yours can be trusted.':
    'Aur aap jaante hain ki aapke judge par kitna bharosa kar sakte hain.',
  'Write the answer key before testing':
    'Testing se pehle answer key likhiye',
  'It’s the same idea, applied to failures instead of questions.':
    'Yeh wahi idea hai, bas sawaalon ki jagah failures par lagaya hua.',
  'Turn a pile of real failures into named, countable groups.':
    'Asli failures ke dher ko naam wale, ginne laayak groups mein badal paana.',
  'Decide which group to fix first, based on counts and consequences.':
    'Counts aur consequences ke hisaab se tay kar paana ki pehle kaun sa group theek karna hai.',
  'Explain why a generic benchmark cannot do this for your product.':
    'Samjha paana ki ek generic benchmark aapke product ke liye yeh kaam kyun nahi kar sakta.',
  'No code and no notebook. You need real outputs from something you own or use, such as support replies, generated summaries or search results, and about an hour. Bring a pen.':
    'Code nahi chahiye, notebook nahi chahiye. Aapko kisi aisi cheez ke asli outputs chahiye jo aapki apni hai ya jise aap use karte hain, jaise support replies, generated summaries ya search results, aur lagbhag ek ghanta. Ek pen saath rakhiye.',
  'In the last chapter you built graders that can mark answers at scale. They tell you how often something goes wrong. But they don’t tell you what is going wrong, and that’s what you need to know before you can fix anything.':
    'Pichhle chapter mein aapne aise graders banaye jo scale par jawaab mark kar sakte hain. Woh aapko batate hain ki kitni baar kuch galat hota hai. Lekin woh yeh nahi batate ki kya galat ho raha hai, aur kuch bhi theek karne se pehle aapko yahi jaanna hota hai.',
  'This chapter is about finding that out, and the method is simple enough to feel old-fashioned. You read real outputs yourself, with a pen in hand. It costs nothing, and it often gives you more improvement than any other quality work.':
    'Yeh chapter wahi pata lagane ke baare mein hai, aur iska tareeka itna simple hai ki purane zamaane ka lagta hai. Aap asli outputs khud padhte hain, haath mein pen lekar. Ismein koi cost nahi, aur aksar yeh kisi bhi doosre quality kaam se zyada improvement deta hai.',
  'What error analysis is':
    'Error analysis kya hai',
  'Start with a picture. Imagine a teacher who gets a pile of exam papers back with a score on each. The scores say who did badly, but not why. So she sits down, reads the wrong answers, and notices that half the class made the same mistake in the same question.':
    'Ek tasveer se shuru karte hain. Socho ek teacher ko exam ki copies wapas milti hain, har ek par score likha hua. Scores batate hain ki kisne kharab kiya, lekin kyun, yeh nahi. Toh woh baithkar galat jawaab padhti hai, aur dekhti hai ki aadhi class ne ek hi sawaal mein ek jaisi galti ki.',
  'Error analysis works the same way, on your system’s outputs.':
    'Error analysis bhi aapke system ke outputs par bilkul aise hi kaam karta hai.',
  'Read a hundred real outputs. For each one that went wrong, write down what went wrong in your own words. Then group the notes and name the groups. This is called <strong>error analysis</strong>, and it is the most valuable quality work in this field.':
    'Sau asli outputs padhiye. Jo bhi galat gaya, uske baare mein apne words mein likhiye ki kya galat hua. Phir un notes ko groups mein baantiye aur groups ko naam dijiye. Isi ko <strong>error analysis</strong> kehte hain, aur is field mein yeh sabse zaroori quality kaam hai.',
  'Let’s try a small version right now.':
    'Chaliye abhi iska ek chhota version try karte hain.',
  'Do a small version now. Take ten real outputs from something you own or use. For each one, write one sentence about what went wrong, or “fine”. Then group the sentences and name the groups. Write the groups and their counts here.':
    'Abhi ek chhota version kijiye. Kisi aisi cheez ke das asli outputs lijiye jo aapki apni hai ya jise aap use karte hain. Har ek ke liye ek sentence likhiye ki kya galat hua, ya “fine”. Phir sentences ko group kijiye aur groups ko naam dijiye. Groups aur unke counts yahan likhiye.',
  'group — count — one example sentence':
    'group — count — ek example sentence',
  'The key rule is to write the sentence <em>before</em> choosing a category, because choosing a category first changes what you notice. Real groups are specific and uneven, for example “right document, wrong clause: 4”, “answered a question the user did not ask: 3” and “cited a source that does not contain the claim: 2”. The result is a ranked list of what to fix, built from your own traffic.':
    'Sabse zaroori rule yeh hai ki category chunne se <em>pehle</em> sentence likhiye, kyunki pehle category chun lene se aap jo notice karte hain woh badal jaata hai. Asli groups khaas aur uneven hote hain, jaise “sahi document, galat clause: 4”, “aisa sawaal answer kiya jo user ne poochha hi nahi: 3” aur “aisa source cite kiya jisme woh claim hai hi nahi: 2”. Result ek ranked list hota hai ki kya theek karna hai, aapke apne traffic se bani hui.',
  'Do it on your pipeline':
    'Ise apni pipeline par kijiye',
  'Now do the same on the system you’ve been building, with a few more outputs.':
    'Ab wahi kaam us system par kijiye jise aap bana rahe hain, thode aur outputs ke saath.',
  'Analyse twenty outputs by hand':
    'Haath se bees outputs analyse kijiye',
  'Collect 20 outputs from your Chapter 12 pipeline, across varied questions. Read each one against its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then group the notes.':
    'Apni Chapter 12 ki pipeline se 20 outputs collect kijiye, alag-alag tarah ke sawaalon par. Har ek ko uske source ke saath milakar padhiye. Har failure ke liye ek saada note likhiye: <em>ek sentence, category nahi</em>. Phir notes ko group kijiye.',
  'You’ll end up with 4 to 7 named groups. This is your <strong>failure taxonomy</strong>, which just means your own named list of the ways the system fails. Count each group, because the largest one is what to fix next. Keep the list. Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite.':
    'Aapke paas 4 se 7 naam wale groups bachenge. Yeh aapki apni <strong>failure taxonomy</strong> hai, matlab system kin-kin tareekon se fail hota hai, uski aapki apni naam wali list. Har group ko gin lijiye, kyunki sabse bada group wahi hai jise agla theek karna hai. Yeh list sambhal kar rakhiye. Chapter 17 ise known-limitations section ke liye use karta hai, aur Chapter 18 regression suite ke liye.',
  'Turn failures into test cases':
    'Failures ko test cases banaiye',
  'Each group you found becomes new rows in your test set. A generic benchmark can’t do this for you, because it doesn’t have your users or your documents.':
    'Aapko jo bhi group mile, woh aapke test set mein nayi rows ban jaata hai. Ek generic benchmark aapke liye yeh nahi kar sakta, kyunki uske paas na aapke users hain na aapke documents.',
  'This forms a loop: real traffic → read the failures → add test cases → make a fix → measure the improvement → more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.':
    'Yeh ek loop banta hai: asli traffic → failures padhiye → test cases jodiye → fix kijiye → improvement naapiye → aur traffic. Har round aapke test set ko asli use ki behtar tasveer bana deta hai. Models har kuch mahine mein badalte hain, lekin aapka answer key aur failure list kaam ke bane rehte hain.',
  'Note':
    'Note',
  'Before release, you ask whether the system passes the answer key. After release, you ask whether users are better off: fewer escalations, fewer edits, more tasks finished. The first can pass while the second fails. You need both, and the second is what the business cares about.':
    'Release se pehle aap poochhte hain ki system answer key pass karta hai ya nahi. Release ke baad aap poochhte hain ki users ko asal mein fayda ho raha hai ya nahi: kam escalations, kam edits, zyada tasks poore. Pehla pass ho sakta hai jabki doosra fail ho. Aapko dono chahiye, aur business ko doosre ki parwah hoti hai.',
  'Let’s pull it together. Reading real failures in your own words, grouping them and counting them tells you what to fix first. The biggest groups then turn into test cases, so the next round starts from a stronger answer key.':
    'Chaliye sab jodte hain. Asli failures ko apne words mein padhna, unhe group karna aur ginna aapko batata hai ki pehle kya theek karna hai. Sabse bade groups phir test cases ban jaate hain, toh agla round ek mazboot answer key se shuru hota hai.',
  'Next, you’ll look at cost modelling: what an AI feature really costs to run.':
    'Agle chapter mein aap cost modelling dekhenge: ek AI feature chalane mein asal mein kitna kharch aata hai.',
  'Read a hundred real outputs, and name the ways the tool fails':
    'Sau asli outputs padhiye, aur naam dijiye ki tool kin tareekon se fail hota hai',
  'A scoreboard says how many mistakes the tool makes. It doesn’t say why. In this chapter you learned to read real failures by hand, describe them in your own words, and only then group and count them. Now you’ll do that for Bharat Privacy Guard, and use the result to grow the answer key.':
    'Ek scoreboard batata hai ki tool kitni galtiyan karta hai. Woh yeh nahi batata ki kyun. Is chapter mein aapne seekha ki asli failures ko haath se padhna hai, unhe apne words mein describe karna hai, aur uske baad hi group karke ginna hai. Ab aap yahi Bharat Privacy Guard ke liye karenge, aur result se answer key ko badhayenge.',
  'Written only. No code and no notebook. Work on paper or in a spreadsheet.':
    'Sirf likhna hai. Code nahi, notebook nahi. Paper par ya spreadsheet mein kaam kijiye.',
  'Collect a hundred outputs from the tool. Use sentences you or your interviewees wrote (made up, or with every real detail changed), not only the ones you already know it handles.':
    'Tool se sau outputs collect kijiye. Aise sentences use kijiye jo aapne ya aapke interviewees ne likhe (banaye hue, ya har asli detail badal kar), sirf woh nahi jinhe tool pehle se sambhal leta hai.',
  'Read each output. Whenever the tool got something wrong, write one line in your own words about what went wrong. Do not group them yet, because grouping too early hides surprises.':
    'Har output padhiye. Jab bhi tool ne kuch galat kiya, apne words mein ek line likhiye ki kya galat hua. Abhi group mat kijiye, kyunki bahut jaldi group karne se surprises chhup jaate hain.',
  'Now group your notes. Give each group a name, for example “number split by a space”, “name in Devanagari missed” or “order number mistaken for Aadhaar”. Count each group.':
    'Ab apne notes ko group kijiye. Har group ko ek naam dijiye, jaise “number space se toot gaya”, “Devanagari mein naam chhoot gaya” ya “order number ko Aadhaar samajh liya”. Har group ko gin lijiye.',
  'Rank the groups by the count multiplied by how badly each failure hurts a real person.':
    'Groups ko rank kijiye: count ko is se multiply karke ki har failure ek asli insaan ko kitna nuksaan pahunchati hai.',
  'For the top group, write what would have to change: the rules, the model’s instructions, the answer format, or something that is not an AI problem at all.':
    'Sabse upar wale group ke liye likhiye ki kya badalna padega: rules, model ke instructions, answer ka format, ya aisa kuch jo AI ki problem hi nahi hai.',
  'Add the top two groups as new rows to the answer key. Save it as <code>evals/answer-key-v3.csv</code>, with about 50 rows.':
    'Sabse upar ke do groups ko answer key mein nayi rows ki tarah jodiye. Use <code>evals/answer-key-v3.csv</code> ke naam se save kijiye, lagbhag 50 rows ke saath.',
  'A hundred outputs with a note on every one that went wrong.':
    'Sau outputs, aur har galat output par ek note.',
  'A named, counted and ranked list of failure groups.':
    'Failure groups ki ek naam wali, ginti wali aur ranked list.',
  'A note on what would need to change for the top group.':
    'Sabse upar wale group ke liye kya badalna padega, uska ek note.',
  'The answer key, version 3, with about 50 rows.':
    'Answer key, version 3, lagbhag 50 rows ke saath.',

  /* ---- ch15: Cost modelling: what an AI feature really costs ---- */
  'Cost modelling: what an AI feature really costs':
    'Cost modelling: ek AI feature asal mein kitne ka padta hai',
  'Most business cases guess the cost of an AI feature at three to twenty times too low, because they price one clean call. Here you’ll measure real token counts, apply the four multipliers, build a cheaper cascade, and answer the margin question.':
    'Zyadatar business cases AI feature ki cost 3 se 20 guna kam aankte hain, kyunki woh sirf ek saaf-suthri call ki keemat lagate hain. Yahan aap asli token counts measure karenge, chaar multipliers lagayenge, ek sasta cascade banayenge, aur margin wale sawaal ka jawaab denge.',
  'You can read the usage block':
    'Aap usage block padh sakte hain',
  'Tokens in, tokens out, times a price. This is the arithmetic from Chapter 1.':
    'Tokens in, tokens out, aur dono ko price se guna. Yeh Chapter 1 ka hi hisaab hai.',
  'You know what multiplies it':
    'Aap jaante hain ki cost kis cheez se badhti hai',
  'Retrieved chunks (3, 12), retries (8), agent steps (9) and reasoning tokens (11) all make a request bigger.':
    'Retrieved chunks (3, 12), retries (8), agent steps (9) aur reasoning tokens (11), yeh sab request ko bada bana dete hain.',
  'Name the four things that make a simple cost estimate wrong, and say which chapter each one comes from.':
    'Un chaar cheezon ke naam bata paana jinse simple cost estimate galat ho jaata hai, aur yeh bhi ki har ek kis chapter se aati hai.',
  'Explain what a cascade is and why it usually saves money.':
    'Samjha paana ki cascade kya hota hai aur woh aksar paise kyun bachata hai.',
  'Say what you would ask a vendor who quotes you a price per query.':
    'Yeh bata paana ki jo vendor aapko price per query batata hai, usse aap kya poochhenge.',
  'Open a new notebook called <code>chapter-15</code>. You’ll need your Chapter 12 pipeline and your Chapter 6 answer key, because you’ll run both of them here.':
    '<code>chapter-15</code> naam ka ek naya notebook kholiye. Aapko apni Chapter 12 wali pipeline aur Chapter 6 wali answer key chahiye hogi, kyunki dono ko aap yahan chalayenge.',
  'In the last chapter you read failures by hand to see why a feature goes wrong. This chapter asks a different question: what does the feature cost? You’ll need the answer sooner than you think.':
    'Pichhle chapter mein aapne failures ko haath se padha, taaki samajh sakein ki feature kahan galat jaata hai. Is chapter ka sawaal alag hai: feature ki cost kitni hai? Iska jawaab aapko jitna sochte hain usse jaldi chahiye hoga.',
  'At some point someone senior will ask what this feature costs at scale. “It depends on tokens” is not an answer. By the end of this chapter, you’ll have a real one.':
    'Kisi na kisi din koi senior aapse poochhega ki scale par is feature ki cost kya hogi. “Tokens par depend karta hai” koi jawaab nahi hai. Is chapter ke ant tak aapke paas ek asli jawaab hoga.',
  'The basic formula':
    'Basic formula',
  'Let’s start with the simple version. The cost of one query is the tokens you send in times the input price, plus the tokens that come out times the output price. Multiply that by the number of queries in a month, and you have a monthly bill.':
    'Chaliye pehle simple version dekhte hain. Ek query ki cost hoti hai: jitne tokens aap bhejte hain unka input price se guna, aur jitne tokens wapas aate hain unka output price se guna, dono ko jodna. Phir ise mahine ki queries se guna kijiye, toh monthly bill mil jaata hai.',
  'Most business cases stop here. The trouble is that their number is often three to twenty times too low. The formula itself is right. It’s just applied to the wrong quantities.':
    'Zyadatar business cases yahin ruk jaate hain. Dikkat yeh hai ki unka number aksar 3 se 20 guna kam hota hai. Formula sahi hai. Bas woh galat quantities par lagaya gaya hota hai.',
  'A multiple, like 5×':
    'Ek multiple, jaise 5×',
  'Make a guess first. A business case prices a query using only tokens in and tokens out. Once the feature is built, how many times too low is that figure, usually?':
    'Pehle andaaza lagaiye. Ek business case query ki cost sirf tokens in aur tokens out se nikalta hai. Feature ban jaane ke baad, yeh figure aam taur par kitne guna kam nikalta hai?',
  'Between three and twenty times. The formula prices one clean call. Real features retrieve several documents, retry when the output is malformed, take several steps and pay for reasoning the user never sees.':
    '3 se 20 guna. Formula sirf ek saaf call ki keemat lagata hai. Asli features kai documents retrieve karte hain, output kharab aaye toh retry karte hain, kai steps lete hain, aur us reasoning ke paise bhi dete hain jo user ko kabhi dikhti hi nahi.',
  'You’ve met all four of those in earlier chapters. Each one is a design choice, which means each one is something you can change.':
    'Yeh chaaron aap pichhle chapters mein dekh chuke hain. Har ek ek design choice hai, matlab har ek ko aap badal sakte hain.',
  'The four multipliers':
    'Chaar multipliers',
  'So what makes a real feature cost so much more than one clean call? Four things, and the table below lists them. As you read it, look at the last column. It tells you how much each one adds.':
    'Toh ek asli feature ek saaf call se itna zyada mehnga kyun padta hai? Chaar cheezon ki wajah se, aur neeche table mein woh sab hain. Table padhte waqt aakhri column dekhiye. Woh batata hai ki har cheez kitna jodti hai.',
  'Multiplier':
    'Multiplier',
  'Chapter':
    'Chapter',
  'What it does':
    'Yeh kya karta hai',
  'Number of chunks retrieved':
    'Kitne chunks retrieve kiye gaye',
  'Ch. 6':
    'Ch. 6',
  'Retrieving 8 chunks instead of 3 nearly triples the input on every query.':
    '3 ki jagah 8 chunks retrieve karne se har query ka input lagbhag teen guna ho jaata hai.',
  'Retries for malformed output':
    'Kharab output ke liye retries',
  'Ch. 8':
    'Ch. 8',
  'Each retry sends the context again, so record the real extra tokens and time.':
    'Har retry context ko dobara bhejti hai, isliye asli extra tokens aur time record kijiye.',
  'Agent steps':
    'Agent steps',
  'Ch. 9':
    'Ch. 9',
  'Six steps send a growing conversation six times, often 10–20× the cost of one call.':
    '6 steps ek badhti hui conversation ko 6 baar bhejte hain, aur aksar ek call se 10–20 guna cost hoti hai.',
  'Reasoning tokens':
    'Reasoning tokens',
  'Ch. 11':
    'Ch. 11',
  'They are charged at the output price, and are often several times longer than the visible answer.':
    'Inka charge output price par lagta hai, aur yeh aksar dikhne wale jawaab se kai guna lambe hote hain.',
  'Now try the cost calculator below. Change the four multipliers and watch the monthly figure move.':
    'Ab neeche wala cost calculator try kijiye. Chaaron multipliers badaliye aur dekhiye ki monthly figure kaise hilti hai.',
  'Measure your own token counts':
    'Apne khud ke token counts measure kijiye',
  'Numbers from a calculator are a start. Numbers from your own documents are better. So next you’ll measure what your pipeline really uses.':
    'Calculator ke numbers ek shuruaat hain. Aapke apne documents ke numbers usse behtar hain. Isliye ab aap measure karenge ki aapki pipeline asal mein kitna use karti hai.',
  'Measure real token counts':
    'Asli token counts measure kijiye',
  'Run your Chapter 12 pipeline on the ten questions in your answer key, and record the real token counts.':
    'Apni Chapter 12 wali pipeline ko answer key ke 10 sawaalon par chalaiye, aur asli token counts record kijiye.',
  'You now have real numbers from your own documents. Everything after this is arithmetic on measured values instead of guesses.':
    'Ab aapke paas apne hi documents ke asli numbers hain. Iske baad sab kuch measured values par hisaab hai, andaaze par nahi.',
  'Let’s see why this matters with an example. Say a feature is quoted at 40 paise per query. It retrieves eight documents, retries one time in eight, takes four steps, and uses reasoning by default. That feature does not cost 50 paise. It costs several rupees. A gap like that can decide whether a feature survives.':
    'Ek example se dekhte hain ki yeh kyun zaroori hai. Maan lijiye ek feature ka quote 40 paise per query hai. Woh 8 documents retrieve karta hai, 8 mein se 1 baar retry karta hai, 4 steps leta hai, aur by default reasoning use karta hai. Aise feature ki cost 50 paise nahi hoti. Woh kai rupaye ki padti hai. Itna farq tay kar sakta hai ki feature bachega ya nahi.',
  'Add the multipliers':
    'Multipliers jodiye',
  'Now you’ll put the four multipliers into code, so you can see the gap between the simple estimate and the real one.':
    'Ab aap chaaron multipliers ko code mein daalenge, taaki simple estimate aur asli cost ke beech ka farq dikh sake.',
  'Before you run this step, guess how many times higher the full cost will be than the simple estimate.':
    'Yeh step chalane se pehle andaaza lagaiye ki poori cost simple estimate se kitne guna zyada niklegi.',
  'The ratio is often between 8× and 20×. Write it down. It shows why “we estimated the token cost” is not the same as “we estimated the cost”.':
    'Ratio aksar 8× se 20× ke beech aata hai. Ise note kijiye. Isse samajh aata hai ki “humne token cost estimate ki” aur “humne cost estimate ki” mein farq hai.',
  'Five ways to lower the cost':
    'Cost kam karne ke paanch tareeke',
  'Once you can see the real cost, the next question is how to bring it down. Here are five ways, roughly in order of how much they help.':
    'Jab asli cost dikhne lagi, toh agla sawaal hai ki ise kam kaise karein. Yeh paanch tareeke hain, lagbhag us order mein ki kaun kitna kaam aata hai.',
  '<strong>Choose the model.</strong> Prices across one provider’s range differ by ten to a hundred times. This matters more than anything else on the list.':
    '<strong>Model chuniye.</strong> Ek hi provider ki range mein prices 10 se 100 guna tak alag hote hain. List mein sabse zyada farq yahi daalta hai.',
  '<strong>Use a cheap model first.</strong> Send everything to a small model, and pass on only what fails a check. Chapter 11 showed that most real requests are simple lookups, which a small model handles well.':
    '<strong>Pehle sasta model use kijiye.</strong> Sab kuch ek chhote model ko bhejiye, aur sirf woh aage bhejiye jo check mein fail ho. Chapter 11 mein dikha tha ki zyadatar asli requests simple lookups hoti hain, jinhe chhota model achhe se sambhal leta hai.',
  '<strong>Retrieve less.</strong> Every token you don’t send costs nothing. Reranking from Chapter 12 lets you retrieve fewer chunks <em>and</em> improve quality.':
    '<strong>Kam retrieve kijiye.</strong> Jo token aap bhejte hi nahi, uski cost zero hai. Chapter 12 ki reranking se aap kam chunks retrieve kar sakte hain <em>aur</em> quality bhi badha sakte hain.',
  '<strong>Use caching.</strong> This comes from Chapter 10. Put the parts that never change at the start of the request.':
    '<strong>Caching use kijiye.</strong> Yeh Chapter 10 se aata hai. Jo hisse kabhi nahi badalte, unhe request ki shuruaat mein rakhiye.',
  '<strong>Batch work that can wait.</strong> Batch processing is often much cheaper. Overnight jobs don’t need interactive pricing.':
    '<strong>Jo kaam ruk sakta hai, use batch kijiye.</strong> Batch processing aksar kaafi sasti hoti hai. Raat bhar chalne wale jobs ko interactive pricing nahi chahiye.',
  'Build a cascade':
    'Cascade banaiye',
  'The second idea on that list is worth trying yourself. It has a name, and you’ll build it now.':
    'List ka doosra tareeka aap khud try karne layak hai. Uska ek naam hai, aur ab aap use banayenge.',
  'A <strong>cascade</strong> sends each request to a cheap model first. It moves to an expensive model only when a check fails. Use your Chapter 8 structured output as the trigger: <code>found: false</code> or a missing quote.':
    '<strong>Cascade</strong> har request ko pehle ek sasta model bhejta hai. Expensive model par woh tabhi jaata hai jab koi check fail ho. Trigger ke liye apna Chapter 8 wala structured output use kijiye: <code>found: false</code> ya koi missing quote.',
  'You get an escalation rate, often 20–40%. Work out the blended cost, and grade accuracy again against your Chapter 6 answer key. Now you have both sides of the trade-off: what the cascade saved, and what it cost in quality, if anything.':
    'Aapko ek escalation rate milega, aksar 20–40%. Blended cost nikaliye, aur accuracy ko apni Chapter 6 wali answer key se dobara grade kijiye. Ab aapke paas trade-off ke dono pehlu hain: cascade ne kya bachaya, aur quality mein kuch gaya toh kitna.',
  'Work out the real cost of a real feature. Estimate the tokens in and out per query. Apply the four multipliers, using the values your design actually uses, and multiply by the monthly volume. Then write the sentence you would say to a finance director, including what would make the number wrong.':
    'Ek asli feature ki asli cost nikaliye. Har query ke tokens in aur out ka andaaza lagaiye. Chaaron multipliers wahi values lagaiye jo aapka design asal mein use karta hai, aur monthly volume se guna kijiye. Phir woh sentence likhiye jo aap finance director ko kahenge, jisme yeh bhi ho ki number kis wajah se galat ho sakta hai.',
  'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …':
    'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … aur galat tab hoga jab …',
  'A good answer is one you can defend, not one that is precise. It states its assumptions, names the multiplier that matters most (usually retrieved chunks or agent steps), and says what would make it wrong, such as different traffic, more retries or a price change. For example: “Four lakh a month at 300,000 queries, retrieving eight documents, with a 12% retry rate. The number moves most if retries go above 20%.”':
    'Achha jawaab woh hai jise aap defend kar sakein, precise hona zaroori nahi. Usme assumptions likhi hoti hain. Woh us multiplier ka naam leta hai jo sabse zyada asar daalta hai (aksar retrieved chunks ya agent steps). Aur woh batata hai ki number kab galat ho sakta hai, jaise alag traffic, zyada retries ya price change. Jaise: “Chaar lakh mahina, 300,000 queries par, 8 documents retrieve karke, 12% retry rate ke saath. Retries 20% se upar gayi toh number sabse zyada hilega.”',
  'Report cost, speed and accuracy together':
    'Cost, speed aur accuracy ek saath report kijiye',
  'Cost is only one side of the story. A feature can be cheap and still be a bad feature, so you need to look at it from three sides at once.':
    'Cost kahani ka sirf ek hissa hai. Ek feature sasta ho kar bhi kharab ho sakta hai, isliye use teeno taraf se ek saath dekhna padta hai.',
  'Speed is also a cost. Report the slow responses, not only the average, as in Chapter 11. A cheap but slow feature can fail just as badly as a fast but expensive one. Always report cost per query, typical response time and slow-case response time together.':
    'Speed bhi ek cost hai. Sirf average nahi, slow responses bhi report kijiye, jaise Chapter 11 mein dekha tha. Sasta lekin slow feature utni hi buri tarah fail ho sakta hai jitna tez lekin mehnga feature. Hamesha cost per query, typical response time aur slow-case response time ek saath report kijiye.',
  'The best way to keep all three in view is one small table. You’ll fill it in next.':
    'Teeno ko nazar mein rakhne ka sabse achha tareeka ek chhota table hai. Ab aap use bharenge.',
  'Build a comparison table':
    'Comparison table banaiye',
  'For each configuration you have built (simple, k=8, cascade, reasoning always on), record these numbers.':
    'Jitni configurations aapne banayi hain (simple, k=8, cascade, reasoning hamesha on), unke liye yeh numbers record kijiye.',
  'Configuration':
    'Configuration',
  'Cost / query':
    'Cost / query',
  'p50':
    'p50',
  'p95':
    'p95',
  'Accuracy (of 9)':
    'Accuracy (9 mein se)',
  'Baseline k=3':
    'Baseline k=3',
  'k=8':
    'k=8',
  'Cascade':
    'Cascade',
  'Reasoning always on':
    'Reasoning hamesha on',
  'This table is the main thing you take away from this chapter. It turns an argument about architecture into a decision based on evidence, and it fits on one slide.':
    'Is chapter se aap sabse zyada yahi table saath le jaayenge. Yeh architecture ki behes ko evidence par tiki decision mein badal deta hai, aur yeh ek slide mein aa jaata hai.',
  'The margin question':
    'Margin wala sawaal',
  'There’s one more question, and it decides most AI features. It has nothing to do with tokens: <strong>does the feature make money at scale?</strong>':
    'Ek sawaal aur hai, aur zyadatar AI features ka faisla wahi karta hai. Iska tokens se koi lena-dena nahi hai: <strong>kya feature scale par paise kamata hai?</strong>',
  'Suppose a query costs three rupees, and the value it protects is two. No amount of prompt tuning will fix that. So answer this question on day one, before the pilot.':
    'Maan lijiye ek query ki cost 3 rupaye hai, aur woh jo value bachati hai woh 2 rupaye ki hai. Ise prompt tuning se kitna bhi karein, theek nahi kiya ja sakta. Isliye is sawaal ka jawaab pehle din dijiye, pilot se pehle.',
  'Calculate the margin':
    'Margin nikaliye',
  'Do one honest calculation. What does this feature cost per user per month at the usage you expect, and what is it worth per user per month?':
    'Ek imaandaar hisaab kijiye. Aapke expected usage par yeh feature per user per month kitne ka padta hai, aur per user per month uski value kitni hai?',
  'If the value isn’t clearly larger than the cost, you’ve learned that before the pilot instead of after it.':
    'Agar value cost se saaf taur par zyada nahi hai, toh yeh aapko pilot se pehle pata chal gaya, baad mein nahi.',
  'So here is the chapter in short. A simple estimate prices one clean call, and the real bill is several times bigger. Four multipliers explain the gap, and a cascade is one good way to shrink it. Next, you’ll look at documents that aren’t clean text at all: tables, scans and images.':
    'Toh chapter ka saar yeh hai. Simple estimate sirf ek saaf call ki keemat lagata hai, aur asli bill kai guna bada hota hai. Chaar multipliers is farq ko samjhate hain, aur cascade use kam karne ka ek achha tareeka hai. Agle chapter mein aap aise documents dekhenge jo saaf text hain hi nahi: tables, scans aur images.',
  'Build a cost model from measurements':
    'Measurements se cost model banaiye',
  'Many teams never ask, “What does this cost at real volume, and what happens to our margin if it succeeds?” In this chapter you learned the four things that make a simple cost estimate wrong. You also learned how a cascade, which tries the cheap option first and uses the expensive one only when needed, saves money. Now you’ll build the cost model for Bharat Privacy Guard from your own measurements, not from guesses.':
    'Bahut si teams kabhi yeh sawaal nahi poochhtin: “Asli volume par iski cost kya hai, aur agar yeh chal gaya toh hamare margin ka kya hoga?” Is chapter mein aapne woh chaar cheezein seekhi jinse simple cost estimate galat ho jaata hai. Aapne yeh bhi seekha ki cascade, jo pehle sasta option try karta hai aur expensive wala tabhi use karta hai jab zaroorat ho, paise kaise bachata hai. Ab aap Bharat Privacy Guard ka cost model banayenge, apne measurements se, andaaze se nahi.',
  'Your <code>chapter-15</code> notebook, to measure the tokens and build the cascade. Write the three cost numbers in the notes box below.':
    'Aapka <code>chapter-15</code> notebook, tokens measure karne aur cascade banane ke liye. Teen cost numbers neeche notes box mein likhiye.',
  'Choose the feature: a bank chat in which every customer message is checked. Measure the tokens your tool uses on twenty realistic messages from your answer key, and take the average.':
    'Feature chuniye: ek bank chat jisme har customer message check hota hai. Apni answer key ke 20 realistic messages par apna tool kitne tokens use karta hai, yeh measure kijiye, aur average nikaliye.',
  'Add the things people forget: retries, the policy text sent every time, the conversation history, and requests that fail and are sent again.':
    'Woh cheezein jodiye jo log bhool jaate hain: retries, har baar bheja jaane wala policy text, conversation history, aur woh requests jo fail hoti hain aur dobara bheji jaati hain.',
  'Work out the cost per message, per thousand messages, and per month at a volume you would really expect. Say how many messages you assume and why.':
    'Cost per message, per thousand messages, aur per month nikaliye, ek aise volume par jo aap asal mein expect karte hain. Batayiye ki aap kitne messages maan rahe hain aur kyun.',
  'Build a cascade: send every message to the pattern checker first (it is free), and send only the unsure ones on to the model. Measure what share needs the model.':
    'Cascade banaiye: har message pehle pattern checker ko bhejiye (woh free hai), aur sirf unsure wale messages model ko bhejiye. Measure kijiye ki kitne messages ko model chahiye.',
  'Produce three numbers: the cost today, the cost at ten times the volume, and the cost if the cheap path stops working and everything goes to the model.':
    'Teen numbers nikaliye: aaj ki cost, 10 guna volume par cost, aur woh cost jab sasta rasta kaam karna band kar de aur sab kuch model ke paas jaaye.',
  'Answer the margin question: if a company paid you a fixed price per message, at what price and volume would the tool stop making money?':
    'Margin wale sawaal ka jawaab dijiye: agar koi company aapko har message ke liye ek fixed price deti, toh kis price aur volume par tool paise kamana band kar deta?',
  'The average number of tokens from twenty real messages.':
    '20 asli messages ke tokens ka average.',
  'The cost per message, per thousand and per month, with your volume assumption.':
    'Cost per message, per thousand aur per month, aapki volume assumption ke saath.',
  'The share of messages that reach the model in the cascade.':
    'Cascade mein kitne messages model tak pahunchte hain, uska share.',
  'The three numbers: today, ten times the volume, and no cheap path.':
    'Teen numbers: aaj, 10 guna volume, aur sasta rasta nahi.',
  'The price below which the tool loses money.':
    'Woh price jisse neeche tool ko nuksaan hota hai.',

  /* ---- ch16: Document extraction: tables, scans and images ---- */
  'Document extraction: tables, scans and images':
    'Document extraction: tables, scans aur images',
  'Real documents are often scans, tables and forms, not clean text. Turning them into text is where many document projects fail without anyone noticing. In this chapter you’ll find an extraction error in your own documents, and compare text extraction with giving the model the page image.':
    'Asli documents aksar scans, tables aur forms hote hain, saaf text nahi. Inhe text mein badalna woh jagah hai jahan kai document projects bina kisi ko pata chale fail ho jaate hain. Is chapter mein aap apne hi documents mein ek extraction error dhoondhenge, aur text extraction ko page image dene se compare karenge.',
  'Everything so far assumed clean text':
    'Ab tak sab kuch saaf text maan kar chala',
  'Chapter 3 gave you the text, but someone had to produce it first.':
    'Chapter 3 mein aapko text mil gaya tha, lekin use kisi ne pehle banaya tha.',
  'Slow responses are a product problem':
    'Slow responses ek product problem hain',
  'Look at the slowest responses, not the average.':
    'Average nahi, sabse slow responses dekhiye.',
  'Explain why tables are the most error-prone part of a document, and why no metric catches the error.':
    'Samjha paana ki tables document ka sabse error-prone hissa kyun hain, aur koi metric yeh error kyun nahi pakadta.',
  'Say what you would ask a vendor who claims to support all document formats.':
    'Yeh bata paana ki jo vendor kehta hai ki woh sabhi document formats support karta hai, usse aap kya poochhenge.',
  'Explain why voice changes the architecture, not just the interface.':
    'Samjha paana ki voice sirf interface nahi, architecture bhi badal deta hai.',
  'Open a new notebook called <code>chapter-16</code>. Find one page from your own documents that contains a real table, such as financial figures, eligibility bands or a rate card.':
    '<code>chapter-16</code> naam ka ek naya notebook kholiye. Apne documents mein se ek aisa page dhoondhiye jisme asli table ho, jaise financial figures, eligibility bands ya rate card.',
  'Back in Chapter 3, you pasted your document’s text into a file. That quietly assumed the text already existed. In most organisations, a lot of it doesn’t. This chapter is about what happens when it has to be made from pages, and why that step so often goes wrong.':
    'Chapter 3 mein aapne apne document ka text ek file mein paste kiya tha. Us waqt maan liya gaya tha ki text pehle se maujood hai. Zyadatar organisations mein aisa nahi hota. Yeh chapter is baare mein hai ki jab text pages se banana padta hai toh kya hota hai, aur yeh step aksar galat kyun jaata hai.',
  'Real documents are pages, not text':
    'Asli documents pages hote hain, text nahi',
  'Think about what a real document collection holds. There are scanned contracts with signatures and stamps. There are financial statements, where the meaning depends on which row meets which column. There are manuals with warnings next to diagrams, screenshots in tickets, and handwritten forms.':
    'Sochiye ki ek asli document collection mein kya-kya hota hai. Signatures aur stamps wale scanned contracts hote hain. Financial statements hote hain, jahan matlab is par depend karta hai ki kaun si row kaun se column se milti hai. Manuals hote hain jahan diagrams ke paas warnings likhi hoti hain, tickets mein screenshots hote hain, aur haath se bhare forms hote hain.',
  'Everything you have built so far assumes someone already turned these pages into text. That step is where many document projects fail, before anything you measured.':
    'Ab tak aapne jo kuch banaya hai, usne maan liya tha ki kisi ne in pages ko pehle hi text mein badal diya hai. Kai document projects isi step par fail hote hain, us se pehle jo aapne measure kiya tha.',
  'A percentage':
    'Ek percentage',
  'Make a guess first. In a real company’s documents, such as contracts, statements, policies and scanned letters, what share is clean, digital, correctly ordered text that needs no work?':
    'Pehle andaaza lagaiye. Kisi asli company ke documents mein, jaise contracts, statements, policies aur scanned letters, kitna hissa saaf, digital, sahi order wala text hai jisse koi kaam nahi karna padta?',
  'Usually much less than a proposal assumes. A large share is scanned images. Much of the digital part still has structure that plain extraction destroys, such as two columns, tables, or headers repeated on every page. Every estimate that depends on this number inherits its error.':
    'Aam taur par proposal ki soch se kaafi kam. Bada hissa scanned images ka hota hai. Digital hisse mein bhi aisi structure hoti hai jo plain extraction bigaad deta hai, jaise do columns, tables, ya har page par repeat hone wale headers. Jo bhi estimate is number par tikka hai, usmein yeh galti utar jaati hai.',
  'Few teams check this, and it is the cheapest way to stop a project from failing six weeks in.':
    'Bahut kam teams yeh check karti hain, aur project ko chhe hafte baad fail hone se bachane ka yeh sabse sasta tareeka hai.',
  'Why tables fail silently':
    'Tables chupke se fail kyun hoti hain',
  'Let’s look at tables first, because they go wrong most often. Imagine a text extractor reading a table with three columns. It often produces one flat line of numbers. Every value survives, but the <em>relationships</em> are lost: which figure belongs to which row, for which year.':
    'Pehle tables dekhte hain, kyunki sabse zyada galti wahin hoti hai. Maan lijiye ek text extractor teen columns wali table padh raha hai. Woh aksar numbers ki ek seedhi line bana deta hai. Har value bach jaati hai, lekin <em>rishte</em> kho jaate hain: kaun sa figure kaun si row ka hai, aur kis saal ka.',
  'What happens next is the worrying part. Retrieval works correctly, and the model answers fluently. But the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after extraction ever sees the original page.':
    'Ab asli darne wali baat suniye. Retrieval sahi chalta hai, aur model fluently jawaab deta hai. Lekin woh jo number quote karta hai woh galat column se aata hai. Aapki pipeline mein kuch bhi isse pakad nahi sakta, kyunki extraction ke baad kuch bhi original page ko dekhta hi nahi.',
  'Don’t take this on trust. You’ll now see it happen on your own table page.':
    'Isko bas maan mat lijiye. Ab aap ise apne hi table page par hote hue dekhenge.',
  'Find an extraction error':
    'Extraction error dhoondhiye',
  'Extract the text from your table page with whatever tool you have, and read the extracted text.':
    'Apne table page ka text jis bhi tool se ho sake extract kijiye, aur extracted text padhiye.',
  'Read it the way a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you can’t. Write down the specific relationship that was lost.':
    'Ise us tarah padhiye jaise machine padhegi. Kya sirf text dekh kar aap bata sakte hain ki kaun sa figure kaun si row aur column ka hai? Aksar nahi bata sakte. Jo khaas rishta kho gaya, use likh lijiye.',
  'Ask a question only the table answers':
    'Aisa sawaal poochhiye jiska jawaab sirf table mein hai',
  'Before you run this, guess whether your pipeline will get the table question right. People often expect a failure. What surprises them is how <em>fluent</em> the wrong answer is.':
    'Chalane se pehle andaaza lagaiye ki aapki pipeline table wale sawaal ka sahi jawaab degi ya nahi. Log aksar galti ki ummeed karte hain. Unhe jo hairaan karta hai woh yeh ki galat jawaab kitna <em>fluent</em> hota hai.',
  'Run the extracted text through your Chapter 7 pipeline. Use a question whose answer sits at a specific row and column.':
    'Extracted text ko apni Chapter 7 wali pipeline se chalaiye. Aisa sawaal poochhiye jiska jawaab ek khaas row aur column mein ho.',
  'You get a confident answer, often with a number from a neighbouring row or column. Every metric in your Chapter 6 evaluation would have scored this as a retrieval success.':
    'Aapko ek confident jawaab milta hai, aksar padosi row ya column ke number ke saath. Aapki Chapter 6 evaluation ka har metric ise retrieval ka success ginta.',
  'Two ways to handle pages':
    'Pages sambhalne ke do tareeke',
  'If turning a page into text loses the table, what else can you do? You can skip the text step and give the model the picture of the page. The table below puts the two approaches side by side. As you read it, notice that neither one wins on every row.':
    'Agar page ko text banane se table kho jaati hai, toh aur kya kiya ja sakta hai? Aap text wala step chhod kar model ko page ki tasveer de sakte hain. Neeche table mein dono tareeke saath-saath hain. Padhte waqt dekhiye ki koi ek tareeka har row mein nahi jeetta.',
  'Turn the page into text first':
    'Page ko pehle text banaiye',
  'Give the model the page image':
    'Model ko page image dijiye',
  'It is cheap.':
    'Yeh sasta hai.',
  'It costs more per page.':
    'Per page zyada cost aati hai.',
  'Tables and layout':
    'Tables aur layout',
  'They are often destroyed.':
    'Aksar bigad jaate hain.',
  'They are mostly preserved.':
    'Zyadatar bache rehte hain.',
  'Cutting it up':
    'Tukde karna',
  'Chapter 3 applies as written.':
    'Chapter 3 jaisa ka taisa lagu hota hai.',
  'A page is the natural piece.':
    'Ek page hi natural tukda hai.',
  'Exact codes and IDs':
    'Exact codes aur IDs',
  'They are kept accurately.':
    'Sahi tarah se bache rehte hain.',
  'There are occasional misreads, such as 0 for O and 1 for l.':
    'Kabhi-kabhi galat padh liye jaate hain, jaise O ko 0 aur l ko 1.',
  'Checking it later':
    'Baad mein check karna',
  'The text can be quoted and compared.':
    'Text ko quote aur compare kiya ja sakta hai.',
  'You need a way to point back at the page.':
    'Page tak wapas ishaara karne ka koi tareeka chahiye.',
  'Now try the second approach on the same page and the same question.':
    'Ab dusra tareeka usi page aur usi sawaal par try kijiye.',
  'Save the same page as an image, and give it to a vision-capable model with the same question.':
    'Usi page ko image ke roop mein save kijiye, aur usi sawaal ke saath vision-capable model ko dijiye.',
  'The answer is usually correct. You also asked for the row and column labels, so you can check it in seconds. This is the supporting-quote idea from Chapter 8, applied to tables.':
    'Jawaab aam taur par sahi hota hai. Aapne row aur column labels bhi maange the, isliye aap use kuch second mein check kar sakte hain. Yeh Chapter 8 ka supporting-quote wala idea hai, jo yahan tables par lagaya gaya hai.',
  'In practice, teams often combine both. They extract text for searching. Then, when the question is about a table, a figure or a form, they give the model the <em>page image</em> for the final answer.':
    'Asal mein teams aksar dono ko milati hain. Search ke liye woh text extract karti hain. Phir jab sawaal kisi table, figure ya form ke baare mein ho, toh final jawaab ke liye model ko <em>page image</em> dete hain.',
  'One more check is worth doing, because it tells you how much to trust the image route.':
    'Ek aur check karna banta hai, kyunki isse pata chalta hai ki image wale tareeke par kitna bharosa karein.',
  'Check every cell':
    'Har cell check kijiye',
  'Ask the vision model to write out the whole table as a structured record, using a Chapter 8 schema. Then check every cell against the page by eye.':
    'Vision model se kahiye ki poori table ko ek structured record mein likhe, Chapter 8 ke schema ke saath. Phir har cell ko page se aankh se milaiye.',
  'Expect a few errors. They often show up in cells that are hard to tell apart: merged headers, footnote markers, or empty versus zero. Count them. That error rate is your extraction quality number, and it belongs in every document-AI proposal.':
    'Kuch errors ki ummeed rakhiye. Woh aksar un cells mein aate hain jinhe alag pehchanna mushkil hota hai: merged headers, footnote markers, ya khaali versus zero. Unhe giniye. Yeh error rate hi aapka extraction quality number hai, aur yeh har document-AI proposal mein hona chahiye.',
  'Voice: a different constraint':
    'Voice: ek alag constraint',
  'So far we’ve talked about pages. Voice is a different case, because it changes the main constraint from accuracy to time. In text, a two-second wait is fine. In speech, two seconds of silence breaks the conversation, and people start talking over it. The whole round trip has to fit in that time: speech in, model, speech out.':
    'Ab tak hum pages ki baat kar rahe the. Voice alag case hai, kyunki yeh main constraint ko accuracy se badal kar time bana deta hai. Text mein 2 second ka wait theek hai. Bolchaal mein 2 second ki khamoshi se baatcheet toot jaati hai, aur log beech mein bolne lagte hain. Poora round trip us time mein fit hona chahiye: speech in, model, speech out.',
  'This means voice problems are about conversation. You need to know when the person has finished speaking, handle interruptions, and decide what to say while the system works. The reasoning models from Chapter 11 are usually too slow for voice, however accurate they are.':
    'Matlab voice ki problems conversation ki hoti hain. Aapko pata hona chahiye ki insaan ne bolna kab khatam kiya, interruptions kaise sambhalni hain, aur system ke kaam karte waqt kya bolna hai. Chapter 11 ke reasoning models voice ke liye aam taur par bahut slow hote hain, chahe woh kitne bhi accurate hon.',
  'Audit your documents before you build':
    'Banane se pehle apne documents ka audit kijiye',
  'All of this leads to one habit. Before you design anything, find out what your documents actually look like.':
    'Yeh sab ek aadat par aata hai. Kuch bhi design karne se pehle pata kijiye ki aapke documents asal mein kaise dikhte hain.',
  'Before any document-AI project, get three numbers. What share of the documents is clean digital text? What share is scanned? And what share of the <em>answers people need</em> is inside tables and figures? The third is usually the largest, and it is rarely asked. It decides the architecture, and one afternoon with fifty documents is enough to estimate it.':
    'Kisi bhi document-AI project se pehle teen numbers nikaliye. Documents ka kitna hissa saaf digital text hai? Kitna scanned hai? Aur <em>logon ko jo jawaab chahiye</em> unka kitna hissa tables aur figures ke andar hai? Teesra number aksar sabse bada hota hai, aur use bahut kam poochha jaata hai. Yahi architecture tay karta hai, aur 50 documents ke saath ek dopahar ka kaam ise andaaza lagane ke liye kaafi hai.',
  'Run that check on a document collection you have. What share is clean digital text, what share is scanned, and what share has tables or layout that carry the meaning? Estimate if you must, but say how you would measure it properly, and what you would change if half turned out to be scanned.':
    'Yeh check apne kisi document collection par chalaiye. Kitna hissa saaf digital text hai, kitna scanned hai, aur kitne mein aisi tables ya layout hai jisme matlab chhupa hai? Zaroorat ho toh andaaza lagaiye, lekin yeh bhi likhiye ki ise sahi tarah kaise measure karenge, aur agar aadhe documents scanned nikle toh aap kya badlenge.',
  'clean … scanned … layout-bearing … how I would measure … what changes if scanned is 50%':
    'clean … scanned … layout wale … main kaise measure karunga … scanned 50% ho toh kya badlega',
  'To measure it properly, sample fifty documents at random from real traffic, not fifty chosen by an enthusiastic colleague. If much of it is scanned, the architecture changes. Extraction quality becomes something you measure with its own answer key, and the project gains a phase that most proposals leave out. Saying this before the project starts is worth more than any retrieval technique in the course.':
    'Ise sahi tarah measure karne ke liye, asli traffic se 50 documents random chuniye, kisi utsaahi colleague ke chune hue 50 nahi. Agar zyada hissa scanned hai, toh architecture badal jaata hai. Extraction quality ko aapko apni alag answer key se measure karna padta hai, aur project mein ek phase jud jaata hai jo zyadatar proposals chhod dete hain. Project shuru hone se pehle yeh kehna, is course ki kisi bhi retrieval technique se zyada kaam ka hai.',
  'Audit a document sample':
    'Document sample ka audit kijiye',
  'Sample 30 documents. Classify each one as clean digital text, scanned image or mixed. Then, separately, sample 20 questions that people actually ask, and mark how many need a table or figure to answer.':
    '30 documents ka sample lijiye. Har ek ko clean digital text, scanned image ya mixed mein baantiye. Phir alag se, logon ke asal mein poochhe jaane wale 20 sawaal lijiye, aur gin kar likhiye ki kitnon ke jawaab ke liye table ya figure chahiye.',
  'You get two percentages. They decide whether your architecture should be text-first, image-first or a mix, and they take an afternoon to measure.':
    'Aapko do percentages milte hain. Yahi tay karte hain ki aapka architecture text-first ho, image-first ho ya dono ka mix, aur inhe measure karne mein bas ek dopahar lagti hai.',
  'To sum up: a document is a set of pages, not a pile of text. Tables fail quietly, the page image is often the safer route, and voice is a different problem because of time. Next, you’ll turn to a question that stops many projects before they start: what you are allowed to send to a model at all.':
    'Toh chapter ka saar: document pages ka set hota hai, text ka dher nahi. Tables chupke se fail hoti hain, page image aksar zyada safe raasta hota hai, aur voice time ki wajah se alag problem hai. Agle chapter mein aap ek aise sawaal par aayenge jo kai projects ko shuru hone se pehle rok deta hai: model ko aap asal mein kya bhejne ke liye allowed hain.',
  'Test the tool on photos of ID cards':
    'ID cards ki photos par tool ko test kijiye',
  'Many personal details reach a website as photos, not as typed text. Reading text out of an image makes mistakes, and no error message warns you. In this chapter you learned why tables and scans are the weakest part of a document pipeline, and why no metric catches the problem. Now you’ll test the tool on text read from images of ID cards.':
    'Bahut si personal details website tak typed text ki tarah nahi, photos ki tarah pahunchti hain. Image se text padhne mein galtiyan hoti hain, aur koi error message aapko warn nahi karta. Is chapter mein aapne seekha ki tables aur scans document pipeline ka sabse kamzor hissa kyun hain, aur koi metric is problem ko kyun nahi pakadta. Ab aap ID cards ki images se padhe gaye text par tool ko test karenge.',
  'Your <code>chapter-16</code> notebook, to read the images and compare. Write the error rate in the notes box below.':
    'Aapka <code>chapter-16</code> notebook, images padhne aur compare karne ke liye. Error rate neeche notes box mein likhiye.',
  'Collect ten images. Make them yourself: mock ID cards with made-up details, printed or handwritten and photographed. Never use a photo of a real person’s card.':
    '10 images jama kijiye. Khud banaiye: made-up details wale mock ID cards, print kiye hue ya haath se likhe hue, aur unki photo kheenchiye. Kisi asli insaan ke card ki photo kabhi use mat kijiye.',
  'Turn each image into text with an OCR tool (software that reads text from pictures). Compare the text with the original and mark every reading mistake.':
    'Har image ko OCR tool se text mein badaliye (OCR woh software hai jo tasveer se text padhta hai). Text ko original se compare kijiye aur har padhne ki galti mark kijiye.',
  'Run the pattern checker on the text. For every ID in the original, record whether it was found. Note typical mistakes, such as the letter O read as the digit 0 or the letter l read as 1.':
    'Text par pattern checker chalaiye. Original ke har ID ke liye note kijiye ki woh mila ya nahi. Aam galtiyan note kijiye, jaise letter O ko digit 0 padhna ya letter l ko 1 padhna.',
  'Give three of the images straight to a model that can read images, and ask it to list the IDs. Compare it with the OCR route on the same three.':
    '3 images seedhe aisa model ko dijiye jo images padh sakta hai, aur use IDs ki list banane ko kahiye. Usi 3 par OCR route se compare kijiye.',
  'Check every digit of one important field, such as each Aadhaar number, by hand. Write down how long this took. That is the real cost of trusting the result.':
    'Ek zaroori field ka har digit haath se check kijiye, jaise har Aadhaar number. Likhiye ki isme kitna time laga. Result par bharosa karne ki asli cost yahi hai.',
  'Add the scanned-text rows to the answer key and save it as <code>evals/answer-key-v4.csv</code>. Estimate the error rate for scanned text.':
    'Scanned-text ki rows ko answer key mein jodiye aur use <code>evals/answer-key-v4.csv</code> ke naam se save kijiye. Scanned text ka error rate estimate kijiye.',
  'Ten made-up ID images and the text read from them, with the mistakes marked.':
    '10 made-up ID images aur unse padha gaya text, galtiyan mark ki hui.',
  'For each ID, whether the pattern checker found it.':
    'Har ID ke liye, pattern checker ko woh mila ya nahi.',
  'A comparison of the OCR route and the image-reading model on three images.':
    '3 images par OCR route aur image padhne wale model ka comparison.',
  'The time the hand-check took.':
    'Haath se check karne mein laga time.',
  'The answer key, version 4, and an estimated error rate for scanned text.':
    'Answer key, version 4, aur scanned text ka estimated error rate.',

  /* ---- ch165: Data handling: what you are allowed to send ---- */
  'Data handling: what you are allowed to send':
    'Data handling: aap kya bhejne ke liye allowed hain',
  'Before you send a document to a model, you need to know whether you’re allowed to. Three questions settle most cases. You’ll sort real documents, read a vendor’s actual terms, and write a rule your colleagues can follow.':
    'Kisi document ko model ko bhejne se pehle aapko pata hona chahiye ki aap use bhej sakte hain ya nahi. Teen sawaal zyadatar cases tay kar dete hain. Aap asli documents sort karenge, ek vendor ki asli terms padhenge, aur ek aisa rule likhenge jise aapke colleagues follow kar sakein.',
  'Everything you send leaves your organisation':
    'Jo kuch aap bhejte hain woh aapki organisation se bahar jaata hai',
  'And you pay for it per token.':
    'Aur uske liye aap per token paise dete hain.',
  'Your documents are not what you assumed':
    'Aapke documents waise nahi hain jaisa aapne socha tha',
  'You audited what they actually contain.':
    'Aapne audit kiya tha ki unmein asal mein kya hai.',
  'Decide whether a specific document may be sent, and say what the decision is based on.':
    'Tay kar paana ki koi khaas document bheja ja sakta hai ya nahi, aur yeh bata paana ki yeh faisla kis par based hai.',
  'Name the three questions that settle it, in the order that resolves most cases fastest.':
    'Un teen sawaalon ke naam bata paana jo ise tay karte hain, us order mein jisse zyadatar cases sabse jaldi suljhein.',
  'Write a rule colleagues can follow without asking you.':
    'Aisa rule likh paana jise colleagues aapse poochhe bina follow kar sakein.',
  'There’s no code in this chapter. Bring three real documents from your work: one you are sure is fine to send, one you are sure is not, and one you are unsure about. The third is the useful one.':
    'Is chapter mein koi code nahi hai. Apne kaam ke teen asli documents saath rakhiye: ek jise bhejna aapko pakka theek lagta hai, ek jise bhejna pakka theek nahi lagta, aur ek jiske baare mein aap unsure hain. Teesra sabse kaam ka hai.',
  'In the last chapter you looked at what your documents really contain. Now comes the next question: may you send them to a model at all? Every chapter so far has quietly assumed that you may.':
    'Pichhle chapter mein aapne dekha tha ki aapke documents mein asal mein kya hai. Ab agla sawaal aata hai: kya aap unhe model ko bhej bhi sakte hain? Ab tak ke har chapter ne chupke se maan liya tha ki haan, bhej sakte hain.',
  'For most features, that assumption is either fine or a serious problem. What separates the two is not technical.':
    'Zyadatar features ke liye yeh assumption ya toh theek hoti hai ya ek bahut badi problem. Dono mein farq technical nahi hota.',
  'This is not a legal chapter. You only need to know which three questions to ask, and who owns the answer to each.':
    'Yeh legal chapter nahi hai. Aapko bas yeh jaanna hai ki kaun se teen sawaal poochhne hain, aur har ek ka jawaab kiske paas hai.',
  'Sort your three documents':
    'Apne teen documents sort kijiye',
  'Let’s begin with your own documents, because the questions make more sense once you’ve used them.':
    'Chaliye apne hi documents se shuru karte hain, kyunki sawaal tab zyada samajh aate hain jab aap unhe ek baar use kar lete hain.',
  'Sort the documents':
    'Documents sort kijiye',
  'For each of the three documents, answer three questions in one line each. Does it contain information about an identifiable person? Is it commercially confidential? Did someone outside your organisation give it to you under agreed terms?':
    'Teeno documents mein se har ek ke liye teen sawaalon ka jawaab ek-ek line mein dijiye. Kya usmein kisi pehchaane jaa sakne wale insaan ki information hai? Kya woh commercially confidential hai? Kya organisation ke bahar ke kisi ne woh aapko tay hui terms par diya tha?',
  'The two easy documents are settled by the first question. The uncertain one usually depends on the third: something a customer or supplier sent you, under terms nobody has read recently.':
    'Do aasaan documents pehle sawaal se hi tay ho jaate hain. Jo document unsure hai, woh aksar teesre sawaal par depend karta hai: kuch jo kisi customer ya supplier ne bheja, aisi terms par jinhe kisi ne haal mein padha nahi.',
  'The hard cases are usually about obligations in someone else’s contract, not about personal data.':
    'Mushkil cases aksar kisi aur ke contract ki zimmedariyon ke baare mein hote hain, personal data ke baare mein nahi.',
  'Three questions':
    'Teen sawaal',
  'What you just did can be turned into a habit. There are three questions to ask, and the order matters. Asked in this order, they settle most cases with the least effort.':
    'Aapne abhi jo kiya, use ek aadat banaya ja sakta hai. Teen sawaal hain, aur unka order maayne rakhta hai. Is order mein poochhne par zyadatar cases sabse kam mehnat mein tay ho jaate hain.',
  '<strong>Does it identify a person?</strong> Look for names, contact details, case references, or anything else that identifies someone. Rules apply wherever you are, and they are not optional.':
    '<strong>Kya isse koi insaan pehchana jaata hai?</strong> Names, contact details, case references dekhiye, ya aur kuch bhi jisse koi pehchana jaa sake. Rules aap jahan bhi hon wahan lagu hote hain, aur woh optional nahi hain.',
  '<strong>Whose confidential information is it?</strong> If it is yours, sending it is a business decision. If it is someone else’s, it is a contractual question, and the answer may be no however careful the vendor is.':
    '<strong>Yeh kiski confidential information hai?</strong> Agar yeh aapki hai, toh ise bhejna ek business decision hai. Agar kisi aur ki hai, toh yeh contract ka sawaal hai, aur vendor kitna bhi careful ho, jawaab na ho sakta hai.',
  '<strong>What does the vendor do with it?</strong> Find out how long they keep it, whether they train on it, and which country it is stored in. You can usually find all three in the vendor’s terms in ten minutes, and all three can change with your plan.':
    '<strong>Vendor iska kya karta hai?</strong> Pata kijiye ki woh ise kitne time tak rakhta hai, kya usse train karta hai, aur woh kis desh mein store hota hai. Yeh teeno aap aam taur par vendor ki terms mein 10 minute mein dhoondh sakte hain, aur teeno aapke plan ke saath badal sakte hain.',
  'Product managers add the most value on the third question. Engineers often assume it is already settled, and vendors often describe it in reassuring language. So it helps to read the terms yourself.':
    'Teesre sawaal par product managers sabse zyada value jodte hain. Engineers aksar maan lete hain ki yeh pehle se tay hai, aur vendors ise aksar tasalli dene wali bhasha mein bayaan karte hain. Isliye terms khud padhna kaam aata hai.',
  'Read the terms for one tool you use':
    'Jo tool aap use karte hain, uski terms padhiye',
  'Pick a tool your team already sends text to. In its own documentation, find three things: how long data is kept, whether it is used to train models, and which country it is processed in.':
    'Aisa ek tool chuniye jise aapki team pehle se text bhejti hai. Uski apni documentation mein teen cheezein dhoondhiye: data kitne time tak rakha jaata hai, kya use models ko train karne mein liya jaata hai, aur woh kis desh mein process hota hai.',
  'Two of the three are usually easy to find, and one takes real searching. Note which plan the answers apply to. Free and paid plans often differ on exactly this question, and people often sign up on the free one.':
    'Teeno mein se do aam taur par aasaani se mil jaate hain, aur ek ko dhoondhne mein sach mein mehnat lagti hai. Note kijiye ki jawaab kaun se plan ke liye hain. Free aur paid plans aksar isi sawaal par alag hote hain, aur log aksar free plan par sign up kar lete hain.',
  'Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.':
    'Teeno jawaab date ke saath likh lijiye. Yahin se woh vendor file shuru hoti hai jo Chapter 17 mangta hai.',
  'Write a rule people can follow':
    'Aisa rule likhiye jise log follow kar sakein',
  'Knowing the answers is only half the job. The other half is making sure your colleagues act on them, even when you aren’t in the room.':
    'Jawaab jaan lena sirf aadha kaam hai. Baaki aadha yeh hai ki aapke colleagues unpar amal karein, tab bhi jab aap wahan nahi hote.',
  'Write a rule a colleague could follow without asking you. Not a policy: three or four lines that settle the common cases and say clearly what to do with the rest.':
    'Aisa rule likhiye jise ek colleague aapse poochhe bina follow kar sake. Policy nahi: teen ya chaar lines jo aam cases tay karein aur saaf bataein ki baaki ke saath kya karna hai.',
  'You may send … . Never send … . If it came from a customer, … . If unsure, … .':
    'Aap bhej sakte hain … . Kabhi mat bhejiye … . Agar customer se aaya ho, toh … . Agar unsure hon, toh … .',
  'Rules that work have the same shape. They settle the common cases directly, name one clear category that is never sent, and give a specific route for uncertain cases that does not depend on someone’s judgement in the moment. Rules that say “use discretion” fail, because a person who is unsure and in a hurry reads that as permission. Name a person or a channel for the uncertain cases.':
    'Kaam karne wale rules ek jaise hote hain. Woh aam cases seedhe tay kar dete hain, ek category batate hain jo kabhi nahi bheji jaati, aur unsure cases ke liye ek tay raasta dete hain jo us waqt kisi ke andaaze par nahi tikta. “Apne hisaab se decide kijiye” jaise rules fail ho jaate hain, kyunki jo insaan unsure hai aur jaldi mein hai, woh ise permission samajh leta hai. Unsure cases ke liye ek insaan ya channel ka naam likhiye.',
  'Retrieval sends what it retrieves':
    'Retrieval wahi bhejta hai jo woh retrieve karta hai',
  'There is one last catch, and it surprises many teams.':
    'Ek aakhri dikkat hai, aur kai teams ise dekh kar hairaan hote hain.',
  'Watch out':
    'Dhyaan rakhiye',
  'Retrieval sends whatever it retrieves. You may have decided carefully what goes into your document store, and then built a system that sends three chunks from it with every request. Your decision about the document store is effectively a decision about every query.':
    'Retrieval jo kuch bhi retrieve karta hai, woh bhej deta hai. Ho sakta hai aapne sochkar tay kiya ho ki document store mein kya jaayega, aur phir aisa system banaya ho jo har request ke saath usmein se teen chunks bhejta hai. Document store ke baare mein aapka faisla asal mein har query ka faisla hai.',
  'To sum up, ask three questions in order: does it identify a person, whose confidential information is it, and what does the vendor do with it.':
    'Toh saar yeh hai: teen sawaal order mein poochhiye: kya isse koi insaan pehchana jaata hai, yeh kiski confidential information hai, aur vendor iska kya karta hai.',
  'Then turn your answers into a rule that others can follow without you. Next, in Chapter 17, you’ll see how a team writes all of this down for a whole AI system, through risk tiers, system cards and oversight.':
    'Phir apne jawaabon ko ek aise rule mein badaliye jise doosre aapke bina follow kar sakein. Agle Chapter 17 mein aap dekhenge ki ek team poore AI system ke liye yeh sab kaise likhti hai, risk tiers, system cards aur oversight ke zariye.',
  'Write the rule for what the tool may send to an outside provider':
    'Aisa rule likhiye ki outside provider ko tool kya bhej sakta hai',
  'Bharat Privacy Guard exists to protect people’s data, so it must not leak data itself. When the context judge calls an outside AI model, the text it sends is a risk. This chapter gave you three questions that settle whether a document may be sent. The answer must come from what the provider actually says, not from what everyone assumes. Now you’ll write that rule for your tool.':
    'Bharat Privacy Guard logon ka data bachane ke liye bana hai, toh woh khud leak nahi kar sakta. Context judge jab outside AI model ko call karta hai, toh bheja gaya text ek risk hai. Is chapter ne aapko woh teen sawaal diye jo tay karte hain ki koi document bheja ja sakta hai ya nahi. Jawaab is se aana chahiye ki provider asal mein kya kehta hai, is se nahi ki sab kya maan lete hain. Ab aap apne tool ke liye woh rule likhenge.',
  'Written, no code. Use the three questions from the chapter. Write the one-page rule in the notes box below.':
    'Likha hua, koi code nahi. Chapter ke teen sawaal use kijiye. Ek page ka rule neeche notes box mein likhiye.',
  'List six to ten kinds of text the tool might send to the outside model: for example a sentence with no personal detail, a sentence with a name, a sentence with an Aadhaar number, a cleaned sentence with the details replaced by tags, and a whole chat history.':
    '6 se 10 tarah ke text ki list banaiye jo tool outside model ko bhej sakta hai: jaise bina kisi personal detail wala sentence, naam wala sentence, Aadhaar number wala sentence, ek saaf kiya hua sentence jisme details ki jagah tags laga diye gaye hon, aur poori chat history.',
  'Take each kind through the three questions from the chapter, and mark it: may send, never send, or ask first.':
    'Har tarah ke text ko chapter ke teen sawaalon se guzariye, aur mark kijiye: bhej sakte hain, kabhi nahi bhejna, ya pehle poochhna hai.',
  'For the “ask first” group, say who is asked and how long they take. If the answer is uncomfortable, the group is too big.':
    '“Pehle poochhna hai” wale group ke liye likhiye ki kisse poochha jaata hai aur unhe kitna time lagta hai. Agar jawaab sunkar aap ko uljhan ho, toh woh group bahut bada hai.',
  'Find out what your chosen provider says about keeping your data, training on it, and where it is processed, for the plan you would really use. Write it down with the date you read it.':
    'Pata kijiye ki aapka chuna hua provider aapke data ko rakhne, usse train karne, aur woh kahan process hota hai, is baare mein kya kehta hai, us plan ke liye jo aap asal mein use karenge. Ise padhne ki date ke saath likh lijiye.',
  'Check your own tool: would every message it sends outward pass your rule? If not, write what changes. For example: “Send only the cleaned sentence, never the original.”':
    'Apne tool ko check kijiye: kya uska bheja hua har message aapke rule se pass hoga? Agar nahi, toh likhiye ki kya badalna hai. Jaise: “Sirf saaf kiya hua sentence bhejiye, original kabhi nahi.”',
  'Write the rule on one page and give it to a colleague to apply to three sentences they have not seen. Note where they hesitated.':
    'Rule ko ek page par likhiye aur kisi colleague ko dijiye ki woh use 3 aise sentences par lagaye jo unhone pehle nahi dekhe. Note kijiye ki woh kahan atke.',
  'A table of six to ten kinds of text, each marked may send, never send or ask first.':
    '6 se 10 tarah ke text ka ek table, har ek par mark: bhej sakte hain, kabhi nahi bhejna ya pehle poochhna hai.',
  'What the provider says about retention, training and location, with the date.':
    'Retention, training aur location ke baare mein provider kya kehta hai, date ke saath.',
  'A note on whether your own tool passes its rule, and the change needed if not.':
    'Ek note ki aapka apna tool apne rule par khara utarta hai ya nahi, aur agar nahi toh kaun sa badlaav chahiye.',
  'The one-page rule, tried out by someone else.':
    'Ek page ka rule, jise kisi doosre ne try kiya ho.',

  /* ---- ch17: AI governance: risk tiers, system cards and oversight ---- */
  'AI governance: risk tiers, system cards and oversight':
    'AI governance: risk tiers, system cards aur oversight',
  'An AI feature now ships with governance documents, and almost every question in them is a product decision. You will tier your system by risk, write a system card, run a deletion drill and design oversight that works at real volume.':
    'Ab ek AI feature ke saath governance documents bhi aate hain, aur unmein lagbhag har sawaal ek product decision hota hai.',
  'You measured it, so you can state it':
    'Aapne measure kiya hai, isliye aap number bata sakte hain',
  'An answer key and a failure list turn a claim into a number.':
    'Answer key aur failures ki list se ek daava number ban jaata hai.',
  'Version and access filters are applied before ranking':
    'Ranking se pehle version aur access filters lagte hain',
  'Which is why they are the only guarantees you can make.':
    'Isliye sirf yahi guarantees aap de sakte hain.',
  'There is no complete defence against injection':
    'Injection se bachne ka koi poora tareeka nahi hai',
  'So the controls sit outside the model, not in the prompt.':
    'Isliye controls model ke bahar rehte hain, prompt ke andar nahi.',
  'Explain why the same system can be low risk for one use and high risk for another.':
    'Samjha paana ki ek hi system ek use ke liye low risk aur doosre use ke liye high risk kyun ho sakta hai.',
  'Say which section of a governance document is hardest to fake, and why that makes it valuable.':
    'Bata paana ki governance document ka kaun sa section nakli banana sabse mushkil hai, aur isliye woh kyun kaam ka hai.',
  'Describe what human oversight must include before it counts as oversight.':
    'Samjha paana ki human oversight mein kya hona zaroori hai, tabhi woh asli oversight kehlaata hai.',
  'Keep three things close: your Chapter 6 numbers, your Chapter 14.5 failure list and your Chapter 7 system. Most of this chapter simply collects work you have already done.':
    'Teen cheezein paas rakhiye: Chapter 6 ke aapke numbers, Chapter 14.5 ki failure list, aur Chapter 7 ka aapka system. Is chapter ka zyadatar hissa bas aapka pehle ka kiya hua kaam ikattha karta hai.',
  'Over the last few chapters you built a system, measured it and tried to break it. Now comes a question that every team meets sooner or later: how do you show other people that it is safe to use?':
    'Pichhle kuch chapters mein aapne ek system banaya, use measure kiya, aur use todne ki koshish ki. Ab ek sawaal aata hai jo har team ke saamne kabhi na kabhi aata hai: doosre logon ko yeh kaise dikhayein ki is system ko use karna safe hai?',
  'A normal feature ships with code, tests and release notes. An AI feature increasingly ships with a folder of governance documents as well. Teams often assume the legal team writes them.':
    'Ek normal feature code, tests aur release notes ke saath ship hota hai. Ab ek AI feature ke saath aksar governance documents ka ek folder bhi aata hai. Teams aksar maan leti hain ki yeh legal team likhegi.',
  'Almost every question in that folder is really a product question. What is this for? Who does it affect? What happens when it is wrong? Who checks it, and what evidence shows it works? The product owner is the person who should answer them.':
    'Lekin us folder ka lagbhag har sawaal asal mein ek product sawaal hai. Yeh kis liye hai? Isse kis par asar padta hai? Galat hone par kya hota hai? Kaun check karta hai, aur kaun sa evidence dikhata hai ki yeh kaam karta hai? In sabka jawaab product owner ko dena chahiye.',
  'You can get a feel for this with the generator below. It builds a system card from your answers, and we’ll write one by hand in a moment.':
    'Iska andaaza neeche wale generator se lag jaayega. Woh aapke jawaabon se ek system card banata hai, aur thodi der mein hum ek haath se bhi likhenge.',
  'Risk depends on the use, not the model':
    'Risk model par nahi, use par depend karta hai',
  'Rules for AI are slowly settling on one idea: <strong>the more harm a wrong answer can cause, the more you must do</strong>, whatever technology you use. The EU AI Act made this approach well known. Enterprise procurement teams now ask the same questions everywhere.':
    'AI ke rules dheere-dheere ek hi idea par aa rahe hain: <strong>galat jawaab se jitna zyada nuksaan ho sakta hai, aapko utna zyada karna padta hai</strong>, chahe technology koi bhi ho. EU AI Act ne is approach ko mashhoor kiya. Ab enterprise procurement teams har jagah yahi sawaal poochhti hain.',
  'The table below shows four levels of risk. Read it from top to bottom. As you go down, what is required gets lighter.':
    'Neeche ki table mein risk ke chaar levels hain. Ise upar se neeche padhiye. Jaise-jaise neeche jaayenge, jo cheezein zaroori hoti hain woh halki hoti jaayengi.',
  'Level':
    'Level',
  'What is required':
    'Kya zaroori hai',
  'Typical examples':
    'Aam examples',
  'Not allowed':
    'Allowed nahi',
  'Nothing makes it acceptable':
    'Kuch bhi ise acceptable nahi banata',
  'Social scoring, some biometric sorting':
    'Social scoring, kuch tarah ki biometric sorting',
  'High risk':
    'High risk',
  'Documentation, a real human check, evidence of accuracy, logging, formal assessment':
    'Documentation, asli human check, accuracy ka evidence, logging, formal assessment',
  'Hiring, credit, education access, essential services':
    'Hiring, credit, education ka access, zaroori services',
  'Transparency only':
    'Sirf transparency',
  'Say it is AI; label generated media':
    'Batayiye ki yeh AI hai; generated media par label lagayiye',
  'Chatbots, generated images':
    'Chatbots, generated images',
  'Minimal':
    'Minimal',
  'Ordinary good practice':
    'Aam achhi practice',
  'Most internal productivity tools':
    'Zyadatar internal productivity tools',
  'Two things from this table often surprise teams. First, <strong>the use sets the risk level, not the model.</strong> Your Chapter 7 system is minimal risk as an internal FAQ. The very same system is high risk if it decides who is eligible for a benefit.':
    'Is table se do baatein aksar teams ko chaunka deti hain. Pehli, <strong>risk level use se tay hota hai, model se nahi.</strong> Aapka Chapter 7 wala system internal FAQ ke roop mein minimal risk hai. Wahi system agar yeh tay karne lage ki kise benefit milega, toh high risk ho jaata hai.',
  'Second, <strong>the level changes when the use changes</strong>. That often happens after launch, and nobody updates the documents.':
    'Doosri, <strong>use badalne par level bhi badal jaata hai</strong>. Yeh aksar launch ke baad hota hai, aur koi documents update nahi karta.',
  'Assign a risk tier to your system':
    'Apne system ko ek risk tier dijiye',
  'Take your Chapter 7 RAG system and place it in a real use case from your organisation. Assign a tier and justify it in one sentence. Then change the use case, for example from internal FAQ to customer eligibility, and assign the tier again.':
    'Apna Chapter 7 wala RAG system lijiye aur use apne organisation ke kisi asli use case mein rakhiye. Ek tier dijiye aur ek sentence mein uski wajah likhiye. Phir use case badaliye, jaise internal FAQ se customer eligibility, aur tier dobara dijiye.',
  'The same code moves to a different tier. That is why risk tiering is a product decision, not an engineering one.':
    'Code wahi hai, lekin tier badal gaya. Isliye risk tiering ek product decision hai, engineering ka nahi.',
  'Write a system card':
    'Ek system card likhiye',
  'Once you know the tier, you need a way to show your work. That is what a <strong>system card</strong> is for. It is a one-page description of an AI system: what it is for, what data it uses, how it was tested, and what it gets wrong. For anything above minimal risk, you need one.':
    'Tier pata chalne ke baad, aapko apna kaam dikhane ka ek tareeka chahiye. Uske liye hi <strong>system card</strong> hota hai. Yeh ek AI system ka ek page ka description hai: woh kis liye hai, kaun sa data use karta hai, uska test kaise hua, aur woh kya galat karta hai. Minimal risk se upar ki har cheez ke liye aapko ek chahiye.',
  'Write the system card':
    'System card likhiye',
  'Use the generator on this page, or write it by hand under these headings.':
    'Is page ka generator use kijiye, ya in headings ke neeche haath se likhiye.',
  '<strong>Purpose.</strong> Say what it does and for whom, in two sentences.':
    '<strong>Purpose.</strong> Do sentences mein likhiye ki yeh kya karta hai aur kiske liye.',
  '<strong>Explicitly out of scope.</strong> List three to five things it must not be used for. This is the most valuable section.':
    '<strong>Explicitly out of scope.</strong> Teen se paanch cheezein likhiye jinke liye ise use nahi karna chahiye. Yeh sabse kaam ka section hai.',
  '<strong>Data.</strong> Say where the data comes from, your right to use it, how long you keep it, and where it is stored.':
    '<strong>Data.</strong> Likhiye ki data kahan se aata hai, use karne ka aapka haq kya hai, kitne time tak rakhte hain, aur kahan store hota hai.',
  '<strong>Evaluation.</strong> Give your Chapter 6 numbers, at a stated k, on a stated date, against a described ground truth.':
    '<strong>Evaluation.</strong> Chapter 6 ke apne numbers dijiye, ek bataye hue k par, ek bataye hue date par, aur ek describe ki hui ground truth ke against.',
  '<strong>Known limitations.</strong> Write your red marks as plain sentences, each with the evidence that produced it.':
    '<strong>Known limitations.</strong> Apne red marks ko seedhe sentences mein likhiye, har ek ke saath woh evidence jisse woh nikla.',
  '<strong>Human oversight.</strong> Say which outputs are reviewed, by whom, seeing what, and with what authority.':
    '<strong>Human oversight.</strong> Likhiye ki kaun se outputs review hote hain, kaun karta hai, woh kya dekhta hai, aur uske paas kya authority hai.',
  '<strong>Logging &amp; incidents.</strong> Say what is recorded, how long it is kept, and who it is escalated to.':
    '<strong>Logging &amp; incidents.</strong> Likhiye ki kya record hota hai, kitne time tak rakha jaata hai, aur escalate kiske paas hota hai.',
  '<strong>Change control.</strong> Say that the model is pinned to a version, prompts are versioned, and the eval is re-run on every change.':
    '<strong>Change control.</strong> Likhiye ki model ek version par pinned hai, prompts ke versions rakhe jaate hain, aur har change par eval dobara chalta hai.',
  'You have one page, and every section came from your earlier work. Chapters 6, 12, 13, 14 and 15 were the research; this is the write-up. Someone who skipped those chapters could only fill this page with adjectives.':
    'Aapke paas ek page hai, aur har section aapke pehle ke kaam se aaya hai. Chapters 6, 12, 13, 14 aur 15 research the; yeh uska write-up hai. Jisne woh chapters chhod diye, woh is page ko sirf adjectives se bhar paata.',
  'Why this matters':
    'Yeh kyun zaroori hai',
  'The “known limitations” section is the hardest to fake, and that makes it the most credible. It lists real failures with the evidence behind them. The “out of scope” list is the most useful, because it stops the use from drifting into a higher risk tier without anyone noticing.':
    '“Known limitations” section ko nakli banana sabse mushkil hai, aur isliye woh sabse bharosemand bhi hai. Usmein asli failures hoti hain, unke evidence ke saath. “Out of scope” list sabse kaam ki hai, kyunki woh use ko chupchaap higher risk tier mein khisakne se rokti hai.',
  'Run a deletion drill':
    'Deletion drill chalaiye',
  'Now a very practical test. Suppose someone asks you to delete their data. Where would you have to look?':
    'Ab ek bahut practical test. Maan lijiye koi aapse apna data delete karne ko kehta hai. Aapko kahan-kahan dekhna padega?',
  'The answer is that it may be in seven places. These are the original documents, the chunks, the search copy, the cache, the provider’s logs, your own logs, and any test set built from real traffic. Many teams find at least two that they cannot reach.':
    'Jawaab yeh hai ki woh saat jagah ho sakta hai. Yeh hain: original documents, chunks, search index, cache, provider ke logs, aapke apne logs, aur asli traffic se bana koi bhi test set. Bahut si teams ko kam se kam do aisi jagah milti hain jahan woh pahunch hi nahi sakti.',
  'Trace one document':
    'Ek document ko trace kijiye',
  'Pick one document from your collection. List every place a copy of it, or something made from it, exists. Next to each, write how you would remove it.':
    'Apne collection se ek document chuniye. Un sab jagahon ki list banaiye jahan uski copy, ya uss se bani koi cheez, maujood hai. Har ek ke saath likhiye ki aap use kaise hataayenge.',
  'Location':
    'Jagah',
  'Removal mechanism':
    'Hataane ka tareeka',
  'Can you actually do it?':
    'Kya aap sach mein yeh kar sakte hain?',
  'Source document store':
    'Source document store',
  'Chunk store':
    'Chunk store',
  'Vector index':
    'Vector index',
  'Prompt cache':
    'Prompt cache',
  'Provider-side logs':
    'Provider-side logs',
  'Your request logs':
    'Aapke request logs',
  'Eval set built from traffic':
    'Traffic se bana eval set',
  'Count the rows where the honest answer is no. Report that number today.':
    'Un rows ko ginye jahan imaandaar jawaab “nahi” hai. Aaj hi woh number report kijiye.',
  'Name the store':
    'Store ka naam likhiye',
  'Someone asks for their data to be deleted. It is in the document store, the chunk store, the search copy, your logs, your test sets and the cache. Which one do teams usually forget?':
    'Koi apna data delete karne ko kehta hai. Woh document store, chunk store, search index, aapke logs, aapke test sets aur cache mein hai. Teams aksar kise bhool jaati hain?',
  'Most often the test sets and the logs. Someone copied the data into them for a good reason, without thinking about deletion, and nothing in them points back to a person. Caches come next, and the provider’s cache is the hardest to see: it holds pieces of documents with nothing that lists them by person.':
    'Zyadatar test sets aur logs ko. Kisi ne data ko unmein ek achhi wajah se copy kiya, delete ke baare mein socha hi nahi, aur unmein kuch bhi kisi insaan tak wapas nahi le jaata. Uske baad caches aate hain, aur provider ka cache sabse mushkil se dikhta hai: usmein documents ke tukde hote hain, aur insaan ke hisaab se koi index nahi hota.',
  'So record where data came from when you collect it, rather than trying to reconstruct it later. A deletion request you cannot complete is a compliance failure with a date on it.':
    'Isliye data collect karte waqt hi record kijiye ki woh kahan se aaya, baad mein use dobara jodne ki koshish mat kijiye. Ek deletion request jo aap poori na kar sakein, woh compliance failure hai, aur uspar date likhi hoti hai.',
  'Design oversight that works at volume':
    'Aisi oversight banaiye jo volume par bhi kaam kare',
  'Almost every system card says “a human reviews the output”. It sounds reassuring. But does it still work when thousands of outputs arrive every day? Try designing one and see.':
    'Lagbhag har system card mein likha hota hai “ek insaan output review karta hai”. Sunne mein tasalli milti hai. Lekin kya yeh tab bhi kaam karta hai jab roz hazaaron outputs aate hain? Khud design karke dekhiye.',
  'Design a human check that works at real volume: four thousand outputs a day, and one reviewer. Write what the reviewer sees, which outputs reach them, and what they can do. Then say why “a human reviews every output” is not an answer.':
    'Ek aisa human check design kijiye jo asli volume par kaam kare: roz chaar hazaar outputs, aur ek reviewer. Likhiye ki reviewer kya dekhta hai, kaun se outputs uske paas pahunchte hain, aur woh kya kar sakta hai. Phir bataiye ki “har output ko ek insaan review karta hai” jawaab kyun nahi hai.',
  'they see … routed by … can do … and reviewing everything fails because …':
    'woh dekhta hai … routed by … kar sakta hai … aur sab kuch review karna fail hota hai kyunki …',
  'Reviewing everything at that volume is not realistic, and it is usually abandoned within two weeks. That is worse than not claiming it, because the document then misrepresents the control. What works is targeted review: route outputs by confidence, by how harmful the action is, and by mismatch between what was retrieved and what was answered. The reviewer must see the evidence as well as the output, and must be able to reject it, not just watch.':
    'Us volume par sab kuch review karna realistic nahi hai, aur aksar do hafte ke andar ise chhod diya jaata hai. Yeh na kehne se bhi bura hai, kyunki tab document control ke baare mein galat tasveer dikhata hai. Jo kaam karta hai woh targeted review hai. Outputs ko confidence ke hisaab se route kijiye, is hisaab se ki action kitna nuksaan kar sakta hai, aur is hisaab se ki jo retrieve hua aur jo jawaab diya gaya, unmein mismatch hai ya nahi. Reviewer ko output ke saath evidence bhi dikhna chahiye, aur woh use reject kar sake, sirf dekhta na rahe.',
  'Now do the same for your own system.':
    'Ab yahi apne system ke liye kijiye.',
  'Specify a review point':
    'Ek review point specify kijiye',
  'Take your highest-risk output and specify the review. Which outputs are reviewed: all, a sample, or those that fail a check? What does the reviewer see: the answer alone, or also the retrieved chunks and the quote? How long do they have, and can they overrule it?':
    'Apna sabse high-risk output lijiye aur uska review specify kijiye. Kaun se outputs review honge: sab, ek sample, ya woh jo kisi check mein fail ho? Reviewer kya dekhta hai: sirf jawaab, ya retrieve kiye gaye chunks aur quote bhi? Uske paas kitna time hai, aur kya woh use overrule kar sakta hai?',
  'Then check: at your expected volume, can this review actually happen? At 4,000 outputs a day, a promise to review every one will not be kept, so it only exists on paper. The structured output from Chapter 8 and the code checks from Chapter 14 make targeted review possible.':
    'Phir check kijiye: aapke expected volume par, kya yeh review sach mein ho sakta hai? Roz 4,000 outputs par “har ek ko review karenge” wala vaada nibhaaya nahi jaayega, toh woh sirf kaagaz par rehta hai. Chapter 8 ka structured output aur Chapter 14 ke code checks targeted review ko mumkin banate hain.',
  'Build a vendor file':
    'Ek vendor file banaiye',
  'So far we’ve looked at your own system. But most organisations also depend on AI from outside vendors, and your governance has to cover their part too.':
    'Ab tak hum aapke apne system ko dekh rahe the. Lekin zyadatar organisations bahar ke vendors ke AI par bhi depend karti hain, aur aapki governance ko unka hissa bhi cover karna hoga.',
  'Collect four answers from each vendor':
    'Har vendor se chaar jawaab lijiye',
  'For any AI vendor your organisation uses, get four things in writing. First, the list of subprocessors, and where data is stored. Then whether your data trains their models, and how to opt out. Last, how much notice they give before retiring a model.':
    'Aapka organisation jo bhi AI vendor use karta hai, uske liye chaar cheezein likhit mein lijiye. Pehli, subprocessors ki list, aur data kahan store hota hai. Phir, kya aapka data unke models ko train karta hai, aur opt out kaise karein. Aakhri, model retire karne se pehle woh kitna notice dete hain.',
  'The last one is often left out, and it is the subject of Chapter 18. A 30-day notice to retire the model your high-risk system was tested on is an operational emergency with a date.':
    'Aakhri wali cheez aksar chhoot jaati hai, aur Chapter 18 ka topic yahi hai. Jis model par aapka high-risk system test hua, uske retire hone ka 30 din ka notice ek operational emergency hai, jiski date tay hai.',
  'Shadow AI':
    'Shadow AI',
  'There is one more risk, and it sits outside every system you build. Staff are already pasting internal documents into consumer chat tools. This is called shadow AI.':
    'Ek aur risk hai, aur woh aapke banaye har system ke bahar baitha hai. Staff pehle se hi internal documents consumer chat tools mein paste kar rahe hain. Ise shadow AI kehte hain.',
  'Banning it rarely works, because the tools are useful. A ban changes the policy, not what people actually do. A better answer is a sanctioned alternative that is good enough, plus clear guidance on what may be pasted.':
    'Ise ban karna aksar kaam nahi karta, kyunki woh tools kaam ke hain. Ban se policy badalti hai, log asal mein jo karte hain woh nahi. Behtar jawaab hai ek sanctioned alternative jo kaafi achha ho, aur saath mein saaf guidance ki kya paste kiya ja sakta hai.',
  'That completes the governance picture: a risk tier, a system card, a deletion drill, real oversight and a vendor file. Next, in Chapter 18, you’ll pull your artifacts together into one requirements document and plan for the day your model is retired.':
    'Yahan governance ki poori tasveer ban gayi: ek risk tier, ek system card, ek deletion drill, asli oversight aur ek vendor file. Agle chapter, Chapter 18, mein aap apne saare artifacts ko ek requirements document mein jodenge aur us din ki taiyaari karenge jab aapka model retire hoga.',
  'Write the system card for Bharat Privacy Guard':
    'Bharat Privacy Guard ka system card likhiye',
  'Almost every compliance question turns out to be a product question. A system card is the document that answers those questions for one system. In this chapter you saw that the same system can be low risk for one use and high risk for another. You also saw which section of a governance document is hardest to fake, and what human oversight must include before it counts as oversight. Now you write the system card for your own tool.':
    'Lagbhag har compliance sawaal aakhir mein ek product sawaal nikalta hai. System card woh document hai jo ek system ke liye un sawaalon ka jawaab deta hai. Is chapter mein aapne dekha ki ek hi system ek use ke liye low risk aur doosre ke liye high risk ho sakta hai. Yeh bhi dekha ki governance document ka kaun sa section nakli banana sabse mushkil hai, aur oversight mein kya hona zaroori hai. Ab aap apne tool ka system card likhenge.',
  'Written only. Gather the numbers and notes from earlier chapters, then write the card in the notes box below.':
    'Sirf likhna hai. Pehle ke chapters se numbers aur notes ikattha kijiye, phir card neeche notes box mein likhiye.',
  'Give the tool a risk level and say why. Ask: what could it affect, how badly, and who bears the harm? A tool that decides what is hidden before data goes to an AI is not low risk if it can miss an Aadhaar number.':
    'Tool ko ek risk level dijiye aur wajah likhiye. Poochhiye: yeh kis par asar daal sakta hai, kitna bura, aur nuksaan kiske sir aata hai? Jo tool tay karta hai ki AI ko data jaane se pehle kya chhupaana hai, woh low risk nahi hai agar woh ek Aadhaar number miss kar sakta hai.',
  'Write the card with five headings: what it is for; what data it handles; what it can do, with its measured quality from your scoreboard; the failures you know about; and what it must never be used for.':
    'Card paanch headings ke saath likhiye: yeh kis liye hai; yeh kaun sa data handle karta hai; yeh kya kar sakta hai, aapke scoreboard se measure ki hui quality ke saath; jo failures aapko pata hain; aur ise kis kaam ke liye kabhi use nahi karna chahiye.',
  'Include this sentence: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Write two lines explaining why that sentence matters.':
    'Yeh sentence daaliye: “This tool helps an organisation collect and pass on less personal data. It does not make anyone compliant with the DPDP Act.” Do lines mein likhiye ki yeh sentence kyun zaroori hai.',
  'Run a deletion drill. Someone asks you to delete everything about them. Follow the request through every place the tool stores or logs anything, and time it. Write down where you could not tell.':
    'Ek deletion drill chalaiye. Koi kehta hai ki mere baare mein sab kuch delete kar dijiye. Us request ko un sab jagahon tak follow kijiye jahan tool kuch bhi store ya log karta hai, aur time note kijiye. Jahan aap pata nahi laga paaye, woh likh dijiye.',
  'Design the human oversight: who can overrule the tool, how they find out there is something to overrule, and what they see on their screen.':
    'Human oversight design kijiye: tool ko kaun overrule kar sakta hai, unhe kaise pata chalta hai ki overrule karne layak kuch hai, aur unhe apni screen par kya dikhta hai.',
  'Write what you would need from an outside provider to answer all of the above about their part of the system.':
    'Likhiye ki upar ke saare sawaalon ka jawaab dene ke liye, kisi bahar ke provider se aapko kya chahiye hoga, unke hisse ke baare mein.',
  'Give the card to someone who did not build the tool and ask what is still unclear. Fix those parts.':
    'Card ko aise insaan ko dijiye jisne tool nahi banaya, aur poochhiye ki ab bhi kya saaf nahi hai. Un hisson ko theek kijiye.',
  'A risk level with a reason.':
    'Ek risk level, wajah ke saath.',
  'A system card with the five headings.':
    'Paanch headings wala ek system card.',
  'The sentence about not making anyone compliant, and why it matters.':
    'Woh sentence ki yeh tool kisi ko compliant nahi banata, aur woh kyun zaroori hai.',
  'The result of the deletion drill, with the time it took.':
    'Deletion drill ka result, usmein lage time ke saath.',
  'A description of the human oversight and a list of what you need from a provider.':
    'Human oversight ka description, aur provider se aapko jo chahiye uski list.',
  'The questions your reader still had, and your fixes.':
    'Aapke reader ke bache hue sawaal, aur aapke fixes.',

  /* ---- ch18: The AI PRD: specs, migrations and kill switches ---- */
  'The AI PRD: specs, migrations and kill switches':
    'AI PRD: specs, migrations aur kill switches',
  'An AI spec describes a measured range of behaviour, not a fixed one. You will draw the full system from memory, assemble a PRD from the artifacts you already have, design feedback capture, and plan for the day your model is retired.':
    'Ek AI spec behaviour ki ek measured range batata hai, koi fixed behaviour nahi. Aap poora system yaad se draw karenge, apne paas maujood artifacts se ek PRD jodenge, feedback capture design karenge, aur us din ki taiyaari karenge jab aapka model retire hoga.',
  'A test set and a list of your own failures':
    'Ek test set aur aapke apne failures ki list',
  'These turn an acceptance criterion into a number.':
    'Inse ek acceptance criterion ek number ban jaata hai.',
  'A real cost figure':
    'Ek asli cost figure',
  'The full number, with its four multipliers.':
    'Poora number, uske chaar multipliers ke saath.',
  'A risk tier and a human check':
    'Ek risk tier aur ek human check',
  'What ships alongside the code.':
    'Jo code ke saath ship hota hai.',
  'Explain what replaces pass/fail acceptance criteria in an AI spec, and why.':
    'Samjha paana ki AI spec mein pass/fail acceptance criteria ki jagah kya aata hai, aur kyun.',
  'List what you rerun when your provider retires the model you built on.':
    'Bata paana ki jab aapka provider woh model retire kare jis par aapne build kiya hai, toh aap kya-kya dobara run karte hain.',
  'Explain why a kill switch is different from a rollback.':
    'Samjha paana ki kill switch rollback se alag kyun hai.',
  'Collect your artifacts from earlier chapters: the answer key (Chapter 6), the failure taxonomy (14.5), the trifecta audit (13), the cost table (15) and the system card (17). This chapter puts them together.':
    'Pehle ke chapters se apne artifacts ikattha kijiye: answer key (Chapter 6), failure taxonomy (14.5), trifecta audit (13), cost table (15) aur system card (17). Yeh chapter inhe ek saath jodta hai.',
  'In the last chapter you wrote a system card and designed oversight. That was one document. Now you’ll gather everything you’ve made so far into a single requirements document for an AI feature, and plan for the day the model underneath it changes.':
    'Pichhle chapter mein aapne ek system card likha aur oversight design ki. Woh ek document tha. Ab aap ab tak jo bhi banaya hai, use ek AI feature ke ek requirements document mein jodenge, aur us din ki taiyaari karenge jab uske neeche ka model badal jaayega.',
  'How an AI spec differs':
    'AI spec alag kyun hota hai',
  'Think about how a normal spec works. You say what the feature should do, QA checks it, and it either passes or it doesn’t. That only works because the same input always gives the same output.':
    'Pehle yaad kijiye ki ek normal spec kaise kaam karta hai. Aap likhte hain ki feature kya karega, QA use check karti hai, aur woh ya toh pass hota hai ya fail. Yeh isliye chalta hai kyunki ek hi input se hamesha ek hi output milta hai.',
  'None of that holds for AI. The same input produces a <em>range</em> of outputs. And that range can shift when your provider updates a model that you don’t control.':
    'AI mein yeh sab nahi chalta. Ek hi input se outputs ki ek <em>range</em> aati hai. Aur woh range tab bhi khisak sakti hai jab aapka provider koi aisa model update kar de jo aapke control mein nahi hai.',
  'An AI spec describes a measured range of behaviour, the evidence that you measured it, and what happens when it drifts.':
    'Ek AI spec behaviour ki ek measured range batata hai, is baat ka evidence ki aapne use measure kiya, aur yeh ki jab woh drift kare toh kya hota hai.',
  'So what actually changes in a spec? Four things, and you have already built all four. The table below puts the normal version next to the AI version, and the last column tells you which chapters it came from.':
    'Toh spec mein asal mein kya badalta hai? Chaar cheezein, aur chaaron aap pehle hi bana chuke hain. Neeche ki table mein normal version AI version ke saamne rakha hai, aur aakhri column batata hai ki woh kin chapters se aaya.',
  'Normal spec':
    'Normal spec',
  'AI spec':
    'AI spec',
  'Built in':
    'Kahan banaya',
  'Acceptance criteria as pass/fail':
    'Acceptance criteria pass/fail ke roop mein',
  'A required score on a named answer key, at stated settings':
    'Ek named answer key par ek required score, bataye hue settings par',
  'Ch. 6, 14':
    'Ch. 6, 14',
  'A QA test plan':
    'Ek QA test plan',
  'A fixed set of cases that must pass, plus the free code checks, run every release':
    'Cases ka ek fixed set jo pass hona zaroori hai, saath mein free code checks, har release par chalte hue',
  'Ch. 8, 14':
    'Ch. 8, 14',
  'Done when the features work':
    'Jab features kaam karein, tab done',
  'Done when it is measured at stated numbers, with known failures written down':
    'Jab woh bataye hue numbers par measure ho jaaye aur jaanti hui failures likh di jaayein, tab done',
  'Ch. 6, 17':
    'Ch. 6, 17',
  'Rollback means redeploy the last build':
    'Rollback matlab pichhla build dobara redeploy karna',
  'Rollback means a pinned model version, versioned prompts, and a switch that turns the AI off':
    'Rollback matlab ek pinned model version, versioned prompts, aur ek switch jo AI ko band kar de',
  'Ch. 10, 17':
    'Ch. 10, 17',
  'Draw the full system from memory':
    'Poora system yaad se draw kijiye',
  'Before you write anything, let’s find out how much of the system you can actually hold in your head. The best way is to draw it without looking.':
    'Kuch bhi likhne se pehle, dekhte hain ki system ka kitna hissa aapke dimaag mein hai. Iska sabse achha tareeka hai bina dekhe draw karna.',
  'Draw the map':
    'Map draw kijiye',
  'Close everything and take a blank page. Draw the whole system. It is much larger than the Chapter 7 version.':
    'Sab kuch band kijiye aur ek khaali page lijiye. Poora system draw kijiye. Yeh Chapter 7 wale version se kaafi bada hai.',
  'Next to every arrow, write one line in your own words. Then, in red, mark every place where you have <em>seen it fail yourself</em>, with the chapter. Aim for twenty.':
    'Har arrow ke paas apne words mein ek line likhiye. Phir red mein har woh jagah mark kijiye jahan aapne <em>khud use fail hote dekha hai</em>, chapter ke saath. Bees ka target rakhiye.',
  'Afterwards, check yourself against the Red-Mark Map on this site, but draw it on paper first. The gap between your drawing and the map is your revision list.':
    'Baad mein, is site ke Red-Mark Map se apne aap ko check kijiye, lekin pehle paper par draw kijiye. Aapke drawing aur map ke beech ka farq hi aapki revision list hai.',
  'Write the PRD':
    'PRD likhiye',
  'A PRD is a product requirements document. You’ve already made most of the pieces. The tool on this page helps you put them in order.':
    'PRD matlab product requirements document. Uske zyadatar hisse aap pehle hi bana chuke hain. Is page ka tool unhe order mein lagane mein madad karta hai.',
  'Assemble the PRD':
    'PRD jodiye',
  'Pick one real feature. Every section comes from an artifact you already have, so this is mostly assembly, not writing. The table shows where each section comes from.':
    'Koi ek asli feature chuniye. Har section ek aise artifact se aata hai jo aapke paas pehle se hai, isliye yeh zyadatar jodne ka kaam hai, likhne ka nahi. Table dikhati hai ki har section kahan se aata hai.',
  'Section':
    'Section',
  'Source':
    'Source',
  'Problem &amp; user':
    'Problem &amp; user',
  'Your own domain knowledge':
    'Aapki apni domain knowledge',
  'Scope and explicit non-goals':
    'Scope aur saaf non-goals',
  'Ch.17 system card':
    'Ch.17 ka system card',
  'Acceptance criteria (eval thresholds at stated k)':
    'Acceptance criteria (bataye hue k par eval thresholds)',
  'Ch.6 ground truth + Ch.14 taxonomy':
    'Ch.6 ki ground truth + Ch.14 ki taxonomy',
  'Regression suite — five blocking cases':
    'Regression suite — paanch blocking cases',
  'Ch.14 homework':
    'Ch.14 ka homework',
  'Security posture — trifecta audit and the leg you broke':
    'Security posture — trifecta audit aur woh leg jo aapne tod diya',
  'Ch.13':
    'Ch.13',
  'Unit economics — cost/query, p50, p95, margin line':
    'Unit economics — cost/query, p50, p95, margin line',
  'Ch.15 table':
    'Ch.15 ki table',
  'Human oversight design':
    'Human oversight design',
  'Ch.17':
    'Ch.17',
  'Rollout: canary %, online metrics, kill switch':
    'Rollout: canary %, online metrics, kill switch',
  'This chapter':
    'Yeh chapter',
  'Model pinning and migration plan':
    'Model pinning aur migration plan',
  'Known limitations':
    'Known limitations',
  'Your red map':
    'Aapka red map',
  'Read the finished document once. Every number in it was measured by you, on your own documents. Few AI PRDs can say that.':
    'Taiyaar document ek baar padhiye. Usmein har number aapne khud, apne documents par measure kiya hai. Bahut kam AI PRDs yeh keh paate hain.',
  'The hardest section to write is the acceptance criteria. Try it now, for a feature you own.':
    'Sabse mushkil section acceptance criteria likhna hai. Ab ise aazma kijiye, kisi aise feature ke liye jo aapka apna ho.',
  'Write the acceptance criteria for one feature you own, as numbers rather than prose. What is measured, against which answer key, at what threshold, and what happens when a number falls below it? Then add the line most specs leave out: what the kill switch turns off, and what the product still does afterwards.':
    'Apne kisi ek feature ke acceptance criteria likhiye, prose mein nahi, numbers mein. Kya measure hota hai, kis answer key ke against, kis threshold par, aur jab koi number uske neeche gire toh kya hota hai? Phir woh line jodiye jo zyadatar specs chhod dete hain: kill switch kya band karta hai, aur uske baad product phir bhi kya karta hai.',
  'metric — answer key — threshold — what happens on breach … kill switch: …':
    'metric — answer key — threshold — breach par kya hota hai … kill switch: …',
  'A good section can be checked by someone who is sceptical. It names the answer key and who wrote it, states thresholds as numbers, and attaches an action to each breach: block the release, alert someone, or switch to a safe mode. The kill-switch line matters because a rollback returns to previous code, which does not help when both versions share the same bad behaviour.':
    'Ek achha section woh hai jise ek shak karne wala insaan bhi check kar sake. Usmein answer key ka naam aur use kisne likha hai, yeh hota hai, thresholds numbers mein hote hain, aur har breach ke saath ek action juda hota hai: release block karo, kisi ko alert karo, ya safe mode par switch karo. Kill switch wali line isliye zaroori hai ki rollback purane code par lautata hai, aur jab dono versions mein wahi bura behaviour ho toh isse koi madad nahi milti.',
  'Plan for model retirement':
    'Model retirement ki plan banaiye',
  'Here is something every AI team learns eventually. <strong>Your model will be retired.</strong> It happens on your provider’s schedule, with a notice period you did not choose.':
    'Yeh ek aisi baat hai jo har AI team ko kabhi na kabhi pata chalti hai. <strong>Aapka model retire hoga.</strong> Yeh aapke provider ke schedule par hota hai, aur notice period woh hota hai jo aapne nahi chuna.',
  'Switching to a new model is not a configuration change. It means measuring everything again. You rerun the answer key and your fixed test cases. You retest whether the model can be talked into misbehaving. And you remeasure cost and speed. Teams that did Chapter 6 can do all this in an afternoon.':
    'Naye model par jaana koi configuration change nahi hai. Matlab sab kuch dobara measure karna. Aap answer key aur apne fixed test cases dobara chalate hain. Aap dobara test karte hain ki kya model ko bahka kar galat kaam karwaya ja sakta hai. Aur cost aur speed dobara measure karte hain. Jin teams ne Chapter 6 kiya hai, woh yeh sab ek dopahar mein kar sakti hain.',
  'What you rerun, and what you do not':
    'Aap kya dobara chalate hain, aur kya nahi',
  'Your provider gives thirty days’ notice that the model behind your live feature is being retired. Before reading on, write what you rerun, in order, and what you can safely skip.':
    'Aapka provider thirty din ka notice deta hai ki aapke live feature ke peeche ka model retire ho raha hai. Aage padhne se pehle likhiye ki aap order mein kya-kya dobara chalate hain, aur kya aaram se chhod sakte hain.',
  'Rerun everything you measured against the old model, because a new model invalidates those measurements. That means the full test set against your answer key, the judge’s agreement with your own grading (the judge is also a model call), your costs at the new prices, and your slowest response times. Do not skip the judge: a judge checked against the old model has not been checked against the new one.':
    'Woh sab dobara chalaiye jo aapne purane model ke against measure kiya tha, kyunki naya model un measurements ko invalid kar deta hai. Matlab: poora test set aapke answer key ke against, judge ka aapki apni grading se agreement (judge bhi ek model call hai), naye prices par aapki costs, aur aapke sabse slow response times. Judge ko mat chhodiye: jo judge purane model ke against check hua tha, woh naye model ke against check nahi hua.',
  'This is why a test set is lasting infrastructure, not a launch document. Teams without one do not find the problems within thirty days. They find them in production.':
    'Isliye test set ek lasting infrastructure hai, sirf launch ka document nahi. Jin teams ke paas yeh nahi hota, woh thirty din ke andar problems nahi dhoondh paatin. Unhe woh production mein milti hain.',
  'Now turn that into a plan you could hand to a colleague.':
    'Ab ise ek aisi plan mein badaliye jo aap kisi colleague ko de sakein.',
  'Write a migration runbook':
    'Ek migration runbook likhiye',
  'Assume your model will be retired in 30 days. Write the runbook: which test suites to rerun, which numbers must match and within what tolerance, who signs off, and how you roll back if the new model is worse.':
    'Maan lijiye aapka model 30 din mein retire hoga. Runbook likhiye: kaun se test suites dobara chalane hain, kaun se numbers match hone chahiye aur kitni tolerance ke andar, kaun sign off karega, aur naya model kharab nikle toh roll back kaise karenge.',
  'Estimate how long it would take. If your answer is more than two days, you are probably missing the Chapter 6 answer key, which is what turns a migration into an afternoon’s work.':
    'Andaaza lagaiye ki ismein kitna time lagega. Agar aapka jawaab do din se zyada hai, toh shayad aapke paas Chapter 6 ka answer key nahi hai, jo migration ko ek dopahar ka kaam bana deta hai.',
  'Capture feedback you can use':
    'Aisa feedback capture kijiye jo kaam aaye',
  'Think about the thumbs-down button in a chat app. On its own, it is almost worthless. You can’t reproduce what happened, and you can’t tell a wrong answer from a correct one that the user simply disliked.':
    'Ek chat app ke thumbs-down button ke baare mein sochiye. Akela, woh lagbhag bekaar hai. Aap yeh dobara nahi bana sakte ki kya hua tha, aur aap galat jawaab aur ek sahi jawaab mein farq nahi kar sakte jo user ko bas pasand nahi aaya.',
  'Now attach the full trace to that thumbs-down: the question, the retrieved chunks, the prompt and model version, and the output. It becomes a ready-made test case. The difference is about two days of engineering.':
    'Ab us thumbs-down ke saath poora trace jod dijiye: sawaal, retrieve kiye gaye chunks, prompt aur model version, aur output. Woh ek taiyaar test case ban jaata hai. Farq lagbhag do din ki engineering ka hai.',
  'Design the feedback record':
    'Feedback record design kijiye',
  'Specify exactly what a single thumbs-down must capture, so that it can become a test case without further investigation.':
    'Specify kijiye ki ek thumbs-down mein exactly kya capture hona chahiye, taaki woh bina aur jaanch ke ek test case ban sake.',
  'Compare this with what your organisation captures today. The gap is usually large, and closing it is the cheapest improvement on this page.':
    'Isko aaj aapka organisation jo capture karta hai, usse compare kijiye. Gap aksar bada hota hai, aur use bharna is page ka sabse sasta improvement hai.',
  'A kill switch is not a rollback':
    'Kill switch rollback nahi hai',
  'You already roll out changes in stages, as with any product. For AI, add one more thing: a <strong>kill switch</strong>.':
    'Aap pehle se hi kisi bhi product ki tarah changes ko stages mein roll out karte hain. AI ke liye ek cheez aur jodiye: ek <strong>kill switch</strong>.',
  'The difference is speed. A rollback needs a new deployment. A kill switch is a flag that sends traffic to the non-AI path immediately. That only works if the non-AI path still exists and someone has tested it recently.':
    'Farq speed ka hai. Rollback ke liye ek naya deployment chahiye. Kill switch ek flag hai jo traffic ko turant non-AI path par bhej deta hai. Yeh tabhi kaam karta hai jab non-AI path abhi bhi maujood ho aur kisi ne haal hi mein use test kiya ho.',
  'You’re nearly done with this part of the course. The last job is to look back at everything you’ve built and say, honestly, what you know and what you don’t.':
    'Course ke is hisse ka kaam lagbhag poora ho gaya. Aakhri kaam hai peeche mudkar dekhna ki aapne kya-kya banaya, aur imaandaari se kehna ki aap kya jaante hain aur kya nahi.',
  'Write your findings page':
    'Apna findings page likhiye',
  'Write one page in two halves.':
    'Ek page likhiye, do hisson mein.',
  '<strong>What I now know breaks.</strong> List your red marks, each with its evidence, such as “seen in Chapter X, on my document, with these numbers”.':
    '<strong>Ab mujhe kya tootta hua pata hai.</strong> Apne red marks ki list banaiye, har ek ke evidence ke saath, jaise “Chapter X mein dekha, mere document par, in numbers ke saath”.',
  '<strong>What I still cannot judge.</strong> Make this an honest list. It is your plan for what to learn next.':
    '<strong>Main abhi kya judge nahi kar sakta.</strong> Yeh list imaandaar rakhiye. Yeh aapki agle seekhne ki plan hai.',
  'Then go back to your Chapter 1 predictions and compare them with this page.':
    'Phir apne Chapter 1 ke predictions par wapas jaiye aur unhe is page se compare kijiye.',
  'This course has not covered model training and post-training, GPU costs and self-hosting, orchestrating many agents at scale, formal verification, or synthetic data generation. Part IV covers two topics that belong to product managers: whether to fine-tune or use a smaller model, and what the user sees when the system is wrong. The LATER page on this site lists the rest.':
    'Is course mein model training aur post-training, GPU costs aur self-hosting, kai agents ko bade scale par orchestrate karna, formal verification, ya synthetic data generation cover nahi hue. Part IV product managers ke do topics cover karta hai: fine-tune karein ya chhota model use karein, aur system galat hone par user ko kya dikhta hai. Baaki sab is site ke LATER page par hai.',
  'Next, you’ll face a very common decision: when a vendor offers to sell you what you’ve learned to build, should you build it yourself or buy it?':
    'Agla kadam ek bahut aam decision hai: jab koi vendor aapko wahi bechne aaye jo aap khud banana seekh chuke hain, toh khud banayein ya kharidein?',
  'Write a requirements document that survives a change of model':
    'Ek aisa requirements document likhiye jo model badalne par bhi tike',
  'An AI requirements document describes a measured range of quality, and what happens outside that range. In this chapter you saw what replaces pass or fail in an AI specification. You also saw what to rerun when a provider retires your model, and why a kill switch is different from a rollback. Now you write the requirements for Bharat Privacy Guard and rehearse the day its model changes.':
    'Ek AI requirements document quality ki ek measured range batata hai, aur yeh bhi ki us range ke bahar kya hota hai. Is chapter mein aapne dekha ki AI specification mein pass ya fail ki jagah kya aata hai. Yeh bhi dekha ki jab provider aapka model retire kare toh kya dobara chalana hai, aur kill switch rollback se alag kyun hai. Ab aap Bharat Privacy Guard ke requirements likhenge aur us din ka rehearsal karenge jab uska model badlega.',
  'Written only. Collect the notes and numbers named in the chapter, then write the document in the notes box below.':
    'Sirf likhna hai. Chapter mein bataye gaye notes aur numbers ikattha kijiye, phir document neeche notes box mein likhiye.',
  'Draw the whole system from memory first, without looking at your earlier diagrams. Then compare with your records and mark what you had forgotten.':
    'Pehle poora system yaad se draw kijiye, apne purane diagrams dekhe bina. Phir apne records se compare kijiye aur mark kijiye ki aap kya bhool gaye the.',
  'Write the requirements document. In the quality section use ranges, not promises, for example: “finds at least 95 of every 100 Aadhaar numbers on the answer key, give or take 3.” For each failure, write what the user sees.':
    'Requirements document likhiye. Quality section mein promises nahi, ranges use kijiye, jaise: “answer key ke har 100 Aadhaar numbers mein se kam se kam 95 dhoondhta hai, 3 upar-neeche.” Har failure ke liye likhiye ki user ko kya dikhta hai.',
  'Specify what is recorded on every request, so that next quarter you can tell whether quality got worse.':
    'Specify kijiye ki har request par kya record hota hai, taaki agli quarter mein aap bata sakein ki quality kharab hui ya nahi.',
  'Rehearse the day the model provider retires the model you use, with sixty days’ notice. Write exactly what you will rerun, and what result would stop you switching.':
    'Us din ka rehearsal kijiye jab model provider aapka model retire kar de, sixty din ke notice ke saath. Exactly likhiye ki aap kya dobara chalayenge, aur kaun sa result aapko switch karne se rokega.',
  'Name the three numbers you would put on a dashboard, and who watches them.':
    'Woh teen numbers bataiye jo aap dashboard par rakhenge, aur unhe kaun dekhta hai.',
  'Write the findings page: what you now know breaks, with the chapter that showed you each one.':
    'Findings page likhiye: ab aapko kya tootta hua pata hai, aur har ek ke saath woh chapter jisne use dikhaya.',
  'A drawing from memory with the things you forgot marked.':
    'Yaad se banaya hua ek drawing, jisme jo cheezein aap bhool gaye woh mark hon.',
  'A requirements document with measured ranges and a user-facing description of each failure.':
    'Measured ranges wala ek requirements document, aur har failure ka user ko dikhne wala description.',
  'What is recorded on every request.':
    'Har request par kya record hota hai.',
  'The model-retirement rehearsal: what you rerun and what result would stop you.':
    'Model-retirement ka rehearsal: aap kya dobara chalate hain, aur kaun sa result aapko rokega.',
  'The dashboard numbers and their owner, and the findings page.':
    'Dashboard ke numbers aur unka owner, aur findings page.'
});
