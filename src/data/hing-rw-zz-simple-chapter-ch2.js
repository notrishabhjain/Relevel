/* Hinglish for System prompts, temperature and hallucination (chapter:ch2), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Ask about a policy or paper that you know is made up. Save exactly what the model says about it.':
    'Kisi aisi policy ya paper ke baare mein poochiye jo aapko pata hai ki banawati hai. Model jo kehta hai, use bilkul waisa hi save kijiye.',
  'Compare three runs. Run one has no guardrail (a safety rule). Run two has a guardrail that asks the model to check itself. Run three says: use only the facts given. Then try a low and a high temperature (how adventurous the model is).':
    'Teen runs milaiye. Pehle run mein koi guardrail (safety rule) nahi. Doosre mein ek guardrail hai jo model se khud ko check karne ko kehta hai. Teesre mein likha hai: sirf di gayi baatein use karo. Phir kam aur zyada temperature (model kitna himmatwala hai) aazmaiye.',
  'Push hard on the guardrail that worked, the way a pushy customer would. Then hand the model the real text.':
    'Jo guardrail chala, us par zor se dabaav daaliye, jaise koi zabardasti karne wala customer karta hai. Phir model ko asli text thama dijiye.',
  'A test table of hallucinations (made-up answers) and the guardrails you tried.':
    'Hallucinations (banawati jawaab) aur aapke aazmaye hue guardrails ki ek test table.',
  'Explain why a prompt can nudge the model but cannot lock it. It is a note, not a lock.':
    'Samjhaiye ki prompt model ko dhakka de sakta hai, lekin taala nahi laga sakta. Woh ek parchi hai, taala nahi.',
  'You have two main dials to steer a model: the system prompt (the rules on the shop wall) and temperature (how adventurous it is). You will use both. You will make a model invent an answer. You will hold it back with a rule. Then you will break your own rule.':
    'Model ko chalane ke aapke paas do main dials hain: system prompt (deewar par lage niyam) aur temperature (woh kitna himmatwala hai). Aap dono use karenge. Aap model se ek banawati jawaab likhwayenge. Phir ek rule se use rokenge. Phir apna hi rule todenge.',
  'Say what a system prompt is, and why it is sent with every message.':
    'Bata paana ki system prompt kya hai, aur woh har message ke saath kyun bheja jaata hai.',
  'Say why a sure-sounding voice does not tell you the answer is right.':
    'Bata paana ki pakka lagne wala andaaz yeh kyun nahi batata ki jawaab sahi hai.',
  'Tell apart two things: making a problem happen less often, and taking away what causes it.':
    'Do cheezon mein fark bata paana: kisi samasya ko kam baar hone dena, aur uski wajah hi hata dena.',
  'Write the rules for the AI helper, then try to break them':
    'AI helper ke liye niyam likhiye, phir unhe todne ki koshish kijiye',
  'The tool has three parts. When the first two cannot decide about a sentence, the third part (the context judge) asks an AI model. That model needs written rules, called a system prompt, that go with every message. In this chapter you learned two things. A sure-sounding voice does not show the answer is right. A system prompt can make a failure rarer, but it does not remove the cause. Now you write the system prompt for the context judge and test it.':
    'Tool ke teen hisse hain. Jab pehle do hisse kisi sentence par faisla nahi kar paate, to teesra hissa (context judge) ek AI model se poochta hai. Us model ko likhe hue niyam chahiye, jinhe system prompt kehte hain, aur woh har message ke saath jaate hain. Is chapter mein aapne do baatein seekhi. Pakka lagne wala andaaz jawaab sahi hone ka saboot nahi hai. System prompt kisi galti ko kam kar sakta hai, lekin uski wajah nahi hatata. Ab aap context judge ka system prompt likhte hain aur use test karte hain.',
  'Use this chapter\'s notebook (the page of code boxes). Write the system prompt as the system message and test it there. You will use the same prompt again in Chapter 2.1. Short version for the route, about 20 minutes: steps 1, 3 and 4.':
    'Is chapter ka notebook (code ke dibbon wala page) use kijiye. System prompt ko system message ki tarah likhiye aur wahin test kijiye. Wahi prompt aap Chapter 2.1 mein dobara use karenge. Route ke liye chhota version, lagbhag 20 minute: steps 1, 3 aur 4.',
  'Write the system prompt in plain English. It must say five things. What the helper is for. What counts as personal information: names, ID numbers, phone numbers, addresses, and details that point to one person. What to answer when nothing personal is there. The exact shape of the answer, for example a list with the item, its type and one word of reason. And what to do when it is not sure.':
    'System prompt saaf English mein likhiye. Usmein paanch baatein honi chahiye. Helper kis kaam ke liye hai. Personal information kya maani jaayegi: naam, ID numbers, phone numbers, pate, aur woh details jo ek hi insaan ki taraf ishara karti hain. Jab kuch personal na ho to kya jawaab dena hai. Jawaab ka theek roop, jaise ek list jisme cheez, uska type aur wajah ka ek shabd ho. Aur jab pakka na ho to kya karna hai.',
  'Add a rule that stops it from making things up: “If you are not sure, answer UNSURE. Never guess a number.”':
    'Ek rule jodiye jo use banawati baatein banane se roke: “If you are not sure, answer UNSURE. Never guess a number.”',
  'Put your prompt in the notebook as the system message. Run starter sentences 1 to 9, one at a time. Save each answer.':
    'Apna prompt notebook mein system message ki tarah rakhiye. Starter sentences 1 se 9 tak ek-ek karke chalaiye. Har jawaab save kijiye.',
  'Mark every answer correct, partly correct or wrong. Look at the last column of the starter sentence table on the project page. It tells you what is really hidden in each sentence.':
    'Har jawaab ko sahi, aadha sahi ya galat mark kijiye. Project page par starter sentence table ka aakhri column dekhiye. Woh batata hai ki har sentence mein asal mein kya chhipa hai.',
  'Run starter sentence 8 (the diabetic patient) and starter sentence 9 (the driving licence) five times each. Does the answer change from one run to the next? Write down what you saw.':
    'Starter sentence 8 (diabetic patient) aur starter sentence 9 (driving licence) ko paanch-paanch baar chalaiye. Kya ek run se doosre run mein jawaab badalta hai? Jo dekha, likh lijiye.',
  'Find one sentence where the prompt fails. Change the words to fix it and run it again. Then say: did you remove the cause, or did you only make the failure rarer?':
    'Ek aisa sentence dhoondhiye jahan prompt fail hota hai. Shabd badal kar use theek kijiye aur dobara chalaiye. Phir kahiye: kya aapne wajah hata di, ya sirf galti ko kam baar hone diya?',
  'Your system prompt, saved in the notebook.':
    'Aapka system prompt, notebook mein save kiya hua.',
  'The nine answers, each marked correct, partly correct or wrong.':
    'Nau jawaab, har ek sahi, aadha sahi ya galat mark kiya hua.',
  'What happened when you ran sentences 8 and 9 five times each.':
    'Sentences 8 aur 9 ko paanch-paanch baar chalane par kya hua.',
  'One failure, your fix, and one sentence on whether you removed the cause.':
    'Ek failure, aapka fix, aur ek sentence ki kya aapne wajah hata di.',
  'There is nothing behind the model to check facts against, like a parrot with no book to look in.':
    'Model ke peeche tathya jaanchne ke liye kuch nahi hai, jaise ek tota jiske paas dekhne ko koi kitaab nahi.',
  'Models forget between messages, like a goldfish':
    'Models messages ke beech bhool jaate hain, goldfish jaise',
  'Anything the model should know has to be sent again every time.':
    'Jo kuch model ko pata hona chahiye, woh har baar dobara bhejna padta hai.',
  'You will send real messages to a model in this chapter.':
    'Is chapter mein aap model ko asli messages bhejenge.',
  'The code runs right here. Press <strong>Run</strong> under each box of code, in order. The page does the warm-up from <a href="#/setup">Setup</a> before your first cell (code box). You make three calls (three messages to the model) in this chapter. Each one tests the idea just before it.':
    'Code yahin chalta hai. Har code ke dibbe ke neeche <strong>Run</strong> dabaiye, order mein. Page aapke pehle cell (code ke dibbe) se pehle <a href="#/setup">Setup</a> wala warm-up kar leta hai. Is chapter mein aap teen calls karenge (model ko teen messages). Har ek apne se pehle wali baat ko test karti hai.',
  'Last chapter you saw that a model forgets everything between calls. Your app has to carry the memory. That leads to a question. If the model starts fresh every time, how do you make it behave the way you want?':
    'Pichhle chapter mein aapne dekha ki model calls ke beech sab bhool jaata hai. Memory app ko dhoni padti hai. Yahan se ek sawaal uthta hai. Agar model har baar naye sire se shuru karta hai, to use apni marzi se kaam karwane ka tareeka kya hai?',
  'This chapter gives you two dials for that. Then you see the model\'s biggest weakness up close. It will make up an answer and sound very sure. You will try to stop it. Then you will break your own fix.':
    'Is chapter mein aapko iske liye do dials milte hain. Phir aap model ki sabse badi kamzori paas se dekhenge. Woh ek banawati jawaab banayega aur bahut pakka lagega. Aap use rokne ki koshish karenge. Phir aap apna hi fix todenge.',
  'A company wants its assistant to be polite, to answer in English, and never to talk about competitors. But the model forgets everything between calls. So how does the company get this behaviour every time?':
    'Ek company chahti hai ki uska assistant tameez se baat kare, English mein jawaab de, aur competitors ke baare mein kabhi baat na kare. Lekin model calls ke beech sab bhool jaata hai. To company har baar yeh kaise paati hai?',
  'The app sends the same instructions again with every message. Think of rules pinned on the shop wall, read before every order. These standing instructions are called the <strong>system prompt</strong>. It is plain text, sent along with each request. It says who the assistant is and what it must not do.':
    'App har message ke saath wahi instructions dobara bhejta hai. Dukaan ki deewar par lage niyam sochiye, jo har order se pehle padhe jaate hain. In sthaayi instructions ko <strong>system prompt</strong> kehte hain. Yeh saada text hai, jo har request ke saath jaata hai. Yeh batata hai ki assistant kaun hai aur use kya nahi karna hai.',
  'A vendor may say they have “customised the AI for your organisation”. Often they just wrote a system prompt, a page of rules. Ask what else, if anything, they changed.':
    'Koi vendor kah sakta hai ki unhone “aapke organisation ke liye AI ko customise kiya hai”. Aksar unhone bas ek system prompt likha hota hai, niyamon ka ek page. Poochiye ki aur kya, agar kuch hai to, unhone badla.',
  'The second dial is <strong>temperature</strong>. At each step, the model has a few likely next tokens (small pieces of words) to pick from. Temperature decides how often it picks a less likely one. Low: it plays safe. High: it takes chances.':
    'Doosra dial hai <strong>temperature</strong>. Har step par model ke paas agle token (shabd ke chhote tukde) ke liye kuch mumkin vikalp hote hain. Temperature tay karta hai ki woh kam mumkin wala kitni baar chunta hai. Kam: woh surakshit khelta hai. Zyada: woh jokhim uthata hai.',
  'With a low temperature, you get nearly the same answer each time you ask. With a high temperature, you get more variety. You tried this in Chapter 0.5. You can try it again here:':
    'Kam temperature par aapko har baar lagbhag ek jaisa jawaab milta hai. Zyada temperature par jawaab zyada alag-alag aate hain. Yeh aapne Chapter 0.5 mein aazmaya tha. Yahan phir aazma sakte hain:',
  'Now think about which setting suits which product. Here is a case to work through.':
    'Ab sochiye ki kaun si setting kis product ke liye theek hai. Yeh ek udaharan hai.',
  'Up or down, and what you give up':
    'Upar ya neeche, aur aap kya chhodte hain',
  'Your product answers questions about a refund policy. Should the temperature be high or low? What do you give up?':
    'Aapka product refund policy ke sawaalon ka jawaab deta hai. Temperature zyada rakhein ya kam? Aap kya chhodte hain?',
  'Low, near zero. You give up variety, which you do not need here. You gain the same answer each time, which you do need. The same question should not get a different policy on Tuesday.':
    'Kam, zero ke paas. Aap variety chhodte hain, jiski yahan zaroorat nahi. Aapko har baar ek jaisa jawaab milta hai, jiski zaroorat hai. Ek hi sawaal ko mangalwaar ko doosri policy nahi milni chahiye.',
  'Watch out: a low temperature makes answers <em>the same each time</em>, not <em>right</em>. A wrong answer at temperature zero is wrong in the same way every time.':
    'Dhyan rakhiye: kam temperature jawaab ko <em>har baar ek jaisa</em> banata hai, <em>sahi</em> nahi. Zero temperature par galat jawaab har baar usi tarah galat hota hai.',
  'Hallucination: confident, made-up answers':
    'Hallucination: pakke yakeen se boli gayi banawati baatein',
  'That last point leads to the biggest risk in this chapter. What does a model do when it does not know the answer? You may expect it to stay quiet. Most of the time it does not.':
    'Yeh aakhri baat is chapter ke sabse bade khatre tak le jaati hai. Jab model ko jawaab nahi pata, to woh kya karta hai? Aap soch sakte hain ki woh chup rahega. Aksar woh chup nahi rehta.',
  'A model does not reliably tell you when it does not know. It only guesses the next piece of text, and that has no built-in way to stay silent. Saying “I will not answer” has to be taught to it separately, and it does not always work.':
    'Model bharose se nahi batata ki use nahi pata. Woh sirf agla text ka tukda guess karta hai, aur usmein chup rehne ka koi built-in tareeka nahi hai. “Main jawaab nahi dunga” kehna use alag se sikhana padta hai, aur woh hamesha kaam nahi karta.',
  'A made-up answer looks the same as a true one. It has the same shape, the same calm voice and the same detail. It may even give a clause number or a percentage. The signs that usually show an expert are only patterns in text. And patterns in text are exactly what the model copies best.':
    'Banawati jawaab bilkul sachche jaisa dikhta hai. Usmein wahi dhaancha, wahi shaant awaaz aur wahi detail hoti hai. Woh clause number ya pratishat bhi de sakta hai. Jo nishaan aam taur par jaankaar insaan dikhate hain, woh bas text ke pattern hain. Aur text ke pattern model sabse achhe se nakal karta hai.',
  'This is called <strong>hallucination</strong>: confident make-believe, said with a straight face. The name sounds like a broken machine. But the model is working as built. It guesses likely text, in a moment when you needed it to say “I don’t know”.':
    'Ise <strong>hallucination</strong> kehte hain: pakke yakeen se boli gayi banawati baat. Naam sunkar lagta hai machine kharab hai. Lekin model waise hi kaam kar raha hai jaise bana hai. Woh mumkin text guess karta hai, jab aapko chahiye tha ki woh kahe “mujhe nahi pata”.',
  'Let us make it happen on purpose, so you can see it with your own eyes.':
    'Chaliye ise jaanboojhkar hone dete hain, taaki aap use apni aankhon se dekh saken.',
  'Make the model invent an answer':
    'Model se banawati jawaab likhwaiye',
  'Ask about something that does not exist. Set the temperature to zero, so luck cannot explain the result.':
    'Kisi aisi cheez ke baare mein poochiye jo hai hi nahi. Temperature zero rakhiye, taaki natija kismat ki wajah se na ho.',
  'You get a confident, tidy summary of a scheme that does not exist. Read it twice. See how real it looks. That look is exactly what you cannot trust.':
    'Aapko ek aisi yojana ka pakka, saaf-suthra summary milta hai jo hai hi nahi. Use do baar padhiye. Dekhiye woh kitni asli lagti hai. Yahi dikhawat hai jis par aap bharosa nahi kar sakte.',
  'Hold it back with an instruction':
    'Ek instruction se use rokiye',
  'So what can you do? The obvious fix is an instruction, such as <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> This helps. It really does cut down how often the model makes things up.':
    'To aap kya kar sakte hain? Seedha fix ek instruction hai, jaise <em>sirf diye gaye documents se jawaab do; agar jawaab wahan nahi hai, to kaho ki tumhe nahi pata.</em> Isse madad milti hai. Sach mein model kam baar banawati baatein banata hai.',
  'Let us test that. Ask the same question, plus one line of system prompt.':
    'Chaliye ise test karte hain. Wahi sawaal poochiye, saath mein system prompt ki ek line.',
  'Add one instruction':
    'Ek instruction jodiye',
  'Send the same question again. Put one line of system prompt in front of it.':
    'Wahi sawaal dobara bhejiye. Uske aage system prompt ki ek line rakhiye.',
  'Now the reply hedges, says it cannot check the scheme, or asks for a source. One sentence changed the behaviour. The next step shows how easily that can be undone.':
    'Ab reply jhijhakta hai, kehta hai ki woh yojana check nahi kar sakta, ya source maangta hai. Ek sentence ne behaviour badal diya. Agla step dikhata hai ki yeh kitni aasani se ulta ho sakta hai.',
  'The instruction makes the problem smaller, but it does not take it away. To see why, try to talk the model out of its own rule.':
    'Instruction samasya ko chhota karti hai, lekin hata nahi deti. Kyun, yeh dekhne ke liye model ko uske hi rule se bahkane ki koshish kijiye.',
  'Break your own fix':
    'Apna hi fix todiye',
  'Keep the same system prompt. Change only the user message, and push harder:':
    'Wahi system prompt rakhiye. Sirf user message badliye, aur zyada zor se dabaiye:',
  'Many models give in and make up the answer again. An instruction pushes the model strongly, but the model can still be talked out of it.':
    'Kai models maan jaate hain aur dobara banawati jawaab bana dete hain. Instruction model ko zor se dhakelti hai, lekin model ko phir bhi bahkaya ja sakta hai.',
  'Now it is your turn. Write a guardrail, then try to beat it.':
    'Ab aapki baari hai. Ek guardrail likhiye, phir use harane ki koshish kijiye.',
  'Write one sentence you would put in a system prompt. It should stop the model from making up a policy it has not been shown. Underneath, write a question that gets around your sentence.':
    'Ek sentence likhiye jo aap system prompt mein rakhenge. Woh model ko aisi policy banane se roke jo use dikhai nahi gayi. Uske neeche ek sawaal likhiye jo aapke sentence ko chakma de.',
  'The instruction, then the question that beats it.':
    'Instruction, phir woh sawaal jo use harata hai.',
  'The rule is the easy part. Almost any such sentence fails against a question that <em>looks</em> answerable from the documents but is not. It might be a policy that sounds real, a date just outside the covered range, or a scheme whose name is one word off. The model matches patterns. It does not check facts. So it cannot tell “nearly in my documents” from “in my documents”. A rule makes the failure rarer. It does not remove the reason it happens.':
    'Rule likhna aasan hissa hai. Lagbhag har aisa sentence us sawaal ke saamne haar jaata hai jo documents se <em>jawaab dene laayak lagta hai</em> par hota nahi. Woh asli lagne wali policy ho sakti hai, covered range se zara bahar ki tareekh, ya ek aisi yojana jiska naam ek shabd alag ho. Model patterns milata hai. Woh tathya check nahi karta. Isliye woh “lagbhag mere documents mein” aur “mere documents mein” ka fark nahi jaanta. Rule galti ko kam baar hone deta hai. Galti kyun hoti hai, yeh wajah nahi hatata.',
  'Rarer is not the same as fixed':
    'Kam baar hona theek ho jaana nahi hai',
  'This brings us to an idea you will use again and again. Making a failure rarer is not the same as removing its cause. Think of a leaky roof with a bucket under it. The bucket helps, but the roof still leaks. When someone says a problem is handled because they added a rule, ask: <em>did that remove the cause, or does the problem just show up less often?</em>':
    'Yahan ek vichaar aata hai jo aap baar-baar use karenge. Galti ko kam baar hone dena aur uski wajah hata dena ek jaisa nahi hai. Tapakti chhat ke neeche rakhi baalti sochiye. Baalti madad karti hai, lekin chhat phir bhi tapakti hai. Jab koi kahe ki rule jodkar samasya sambhal li, to poochiye: <em>kya isse wajah hat gayi, ya samasya bas kam dikhti hai?</em>',
  'So how do you remove the cause? The rest of Part I does exactly that. The model makes things up when it has no evidence. So the fix is to give it the evidence. That takes four chapters.':
    'To wajah kaise hatayein? Part I ka baaki hissa yahi karta hai. Model tab banawati baatein banata hai jab uske paas saboot nahi hota. Isliye fix hai use saboot dena. Isme chaar chapters lagte hain.',
  'It starts with a real problem: your documents are too big to send in one request, like a book that will not fit on the desk. But first, the next chapter shows four ways to write prompts that work.':
    'Shuruaat ek asli samasya se hoti hai: aapke documents ek request mein bhejne ke liye bahut bade hain, jaise kitaab jo mez par nahi aati. Lekin pehle, agla chapter prompts likhne ke chaar kaam karne wale tareeke dikhata hai.',
});
