/* Hinglish for items4 (items:items4), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'What does fine-tuning mainly teach a model?':
    'Fine-tuning model ko mainly kya sikhati hai?',
  'Fine-tuning is like coaching. You show the model many examples of an input and the answer you wanted. It picks up a habit. It is great for “always answer in this shape and this tone.” It is a poor, costly way to add facts. Facts change, and you must retrain the model each time.':
    'Fine-tuning coaching jaisi hai. Aap model ko ek input aur aapko chahiye tha woh jawaab, aise kaafi examples dikhate hain. Model ko ek aadat lag jaati hai. “Hamesha isi shape aur isi tone mein jawaab do” ke liye yeh bahut achhi hai. Facts jodne ke liye yeh kharab aur mehngi hai. Facts badalte rehte hain, aur har baar model ko dobara train karna padta hai.',
  'New facts about your business':
    'Aapke business ke naye facts',
  'A behaviour: the format, tone and structure of how it responds':
    'Ek behaviour: jawaab dene ka format, tone aur structure',
  'To retrieve documents more accurately':
    'Documents zyada theek se retrieve karna',
  'To reason through more steps':
    'Zyada steps mein sochna',
  'Users say the assistant does not know your 2026 policy. You published it last month. Which fix fits best?':
    'Users kehte hain ki assistant ko aapki 2026 policy nahi pata. Aapne use pichhle mahine publish kiya tha. Kaun sa fix sabse sahi baithta hai?',
  'The assistant is missing a fact. A fact that keeps changing belongs in retrieval (finding the right page first). There you can update it and show a citation (the source). Fine-tuning freezes the fact until the next training run. A system prompt (the standing instructions) works only until the policy gets so long that it crowds the context. Neither gives the user a source to check.':
    'Assistant ke paas ek fact nahi hai. Jo fact badalta rehta hai, use retrieval mein rakhte hain (pehle sahi page dhoondhna). Wahan aap use update kar sakte hain aur citation (source) dikha sakte hain. Fine-tuning us fact ko agle training run tak jama deti hai. System prompt (deewar par lage niyam) tab tak chalta hai jab tak policy itni lambi na ho jaye ki context mein jagah hi na bache. Dono mein se koi user ko check karne ke liye source nahi deta.',
  'Fine-tune on the new policy':
    'Nayi policy par fine-tune kijiye',
  'Retrieval: index the policy and cite it':
    'Retrieval: policy ko index kijiye aur cite kijiye',
  'A longer system prompt describing the policy':
    'Ek lamba system prompt jo policy batata ho',
  'Switch to a larger model':
    'Bade model par jaiye',
  'Why should you try prompting and retrieval before fine-tuning?':
    'Fine-tuning se pehle prompting aur retrieval kyun try karni chahiye?',
  'Fine-tuning is not bad. But the first two options are cheap to try and cheap to undo. Ruling them out costs about a day. Tuning means building a labelled dataset (examples with the right answers written on them). You must re-run it whenever the model changes. Switching provider also gets harder. Pay that price only after the cheap options fail on a measurement.':
    'Fine-tuning buri nahi hai. Lekin pehle do options try karna sasta hai aur undo karna bhi sasta. Unhe rule out karne mein bas ek din lagta hai. Tuning ka matlab hai labelled dataset banana (aise examples jin par sahi jawaab likha ho). Model badalne par use dobara run karna padta hai. Provider badalna bhi mushkil ho jaata hai. Yeh keemat tabhi dijiye jab sasti cheezein measurement par fail ho chuki hon.',
  'Fine-tuning is technically difficult':
    'Fine-tuning technically mushkil hai',
  'They are easy to undo and you can measure them in hours. Tuning adds a dataset, a training cycle and something you must maintain.':
    'Inhe undo karna aasaan hai aur inhe ghanton mein measure kar sakte hain. Tuning mein ek dataset, ek training cycle aur ek cheez aa jaati hai jise aapko maintain karna padta hai.',
  'Fine-tuning always performs worse':
    'Fine-tuning hamesha kharaab kaam karti hai',
  'Providers discourage it':
    'Providers ise hatotsahit karte hain',
  'Which of these should already exist before “should we fine-tune?” can even be answered?':
    'In mein se kaun si cheezein pehle se maujood honi chahiye, tabhi “kya hum fine-tune karein?” ka jawaab diya ja sakta hai?',
  'The first four make the decision. Without an eval (a test with an answer key), you cannot tell if fine-tuning helped. Without a named failure and counts, you do not know what you are fixing. Without a dataset, there is nothing to train on, and you cannot repeat it later. If you skip the options you can undo, you pay the high price first. The budget comes after the decision, not before.':
    'Pehli chaar cheezein decision banati hain. Eval (answer key wala test) ke bina aap nahi bata sakte ki fine-tuning se fayda hua ya nahi. Named failure aur counts ke bina aapko pata hi nahi ki aap kya fix kar rahe hain. Dataset ke bina train karne ko kuch nahi hai, aur baad mein use dohraa bhi nahi sakte. Agar aap undo ho sakne wale options skip karte hain, toh sabse mehngi keemat pehle chukate hain. Budget decision ke baad aata hai, pehle nahi.',
  'An eval suite with ground truth you trust':
    'Ek eval suite jiski ground truth par aapko bharosa ho',
  'A named failure, with counts, from real traffic':
    'Ek named failure, counts ke saath, asli traffic se',
  'A labelled dataset of inputs and wanted outputs, and a plan to maintain it':
    'Inputs aur chahiye gaye outputs ka labelled dataset, aur use maintain karne ka plan',
  'Evidence that prompting and retrieval did not fix it':
    'Saboot ki prompting aur retrieval se yeh theek nahi hua',
  'A budget approved by finance':
    'Finance se approve hua budget',
  'In a roadmap review, a senior stakeholder asks, “Why aren’t we fine-tuning?” Write a reply that turns the question into a decision, not a preference.':
    'Roadmap review mein ek senior stakeholder poochhte hain, “Hum fine-tuning kyun nahi kar rahe?” Aisa jawaab likhiye jo sawaal ko preference se decision mein badal de.',
  'A strong reply says neither yes nor no. It asks what kind of wrong the system is right now. Roughly: “Tell me the failure you want fixed. I will tell you which lever fixes it. If the model does not know something, that is retrieval. Tuning would bake in a fact that keeps changing. If it knows the answer but gives it in the wrong shape or tone, we try prompting first and tuning second. I can test prompting this week. If it cannot do the reasoning, we need a different model or a bigger thinking budget. Right now our error taxonomy (our sorted piles of mistakes) says the biggest cluster is this: it finds the right document but quotes the wrong clause. Tuning cannot touch that. When a cluster about behaviour shows up, tuning is the right tool. Then I will need a labelled set and an owner to maintain it. We must re-run it every time the base model is retired.”':
    'Ek strong jawaab na haan kehta hai na naa. Woh poochhta hai ki system abhi kis tarah ka galat hai. Lagbhag aise: “Aap jo failure fix karwana chahte hain woh bataiye. Main bataunga ki kaun sa lever use fix karega. Agar model ko kuch pata hi nahi, toh woh retrieval hai. Tuning mein ek aisa fact bake ho jaayega jo badalta rehta hai. Agar use jawaab pata hai lekin woh galat shape ya tone mein deta hai, toh pehle prompting try karte hain, phir tuning. Prompting main isi hafte test kar sakta hoon. Agar woh reasoning nahi kar paata, toh humein dusra model ya bada thinking budget chahiye. Abhi hamari error taxonomy (galtiyon ke sorted dher) kehti hai ki sabse bada cluster yeh hai: sahi document mil jaata hai, lekin galat clause quote hota hai. Tuning us par asar nahi daal sakti. Jab behaviour wala cluster aaye, tab tuning sahi tool hai. Tab mujhe ek labelled set aur use maintain karne wala owner chahiye hoga. Base model retire hone par har baar use dobara run karna padta hai.”',
  'When does a small distilled model most reliably beat a frontier model?':
    'Ek chhota distilled model kab frontier model ko sabse bharosemand tareeke se harata hai?',
  'Distillation (a small model learns from a big one) gives up breadth. In return you get one narrow skill at a fraction of the cost and delay. That is a good deal for classifying, routing, extracting and other repetitive work. It is a bad deal wherever variety is the point. It pays off only when volume is high. Then the savings beat the effort of building and maintaining the smaller model.':
    'Distillation (chhota model bade model se seekhta hai) breadth chhod deti hai. Badle mein ek narrow skill milti hai, cost aur delay ke ek chhote hisse mein. Classify, route, extract jaise repetitive kaam ke liye yeh achha sauda hai. Jahan variety hi asli baat ho, wahan bura sauda hai. Yeh tabhi kaam karta hai jab volume zyada ho. Tab bachat chhota model banane aur maintain karne ki mehnat se zyada hoti hai.',
  'The task is open-ended and varied, and accuracy matters a lot':
    'Task open-ended aur alag-alag tarah ka hai, aur accuracy bahut zaroori hai',
  'The task is narrow and repetitive, at high volume, where speed or cost matters most':
    'Task narrow aur repetitive hai, high volume par, jahan speed ya cost sabse zyada matter karti hai',
  'The task is new and you have no examples':
    'Task naya hai aur aapke paas koi examples nahi hain',
  'The task needs many dependent reasoning steps':
    'Task mein ek ke baad ek kai reasoning steps chahiye',
  'Why do we show sources next to an AI-generated answer?':
    'AI-generated jawaab ke saath sources kyun dikhate hain?',
  'A citation is there to make checking cheaper than trusting. So a citation that does not open the real passage is worse than none. It looks checkable but is not. The user cannot tell the difference.':
    'Citation isliye hota hai ki check karna bharosa karne se sasta pade. Isliye jo citation asli passage nahi kholta, woh na hone se bhi bura hai. Woh check karne layak dikhta hai, lekin hota nahi. User farq nahi pehchaan paata.',
  'To look sophisticated':
    'Sophisticated dikhne ke liye',
  'So the user can check the claim cheaply':
    'Taaki user claim ko sasti tarah check kar sake',
  'To keep the legal team happy':
    'Legal team ko khush rakhne ke liye',
  'To make the model more accurate':
    'Model ko zyada accurate banane ke liye',
  'Which output should NOT be streamed token by token as it is generated?':
    'Kaun sa output token-by-token stream NAHI karna chahiye?',
  'Streaming feels fast because you read prose from left to right. But a number that appears and then changes is worse than a spinner. The user has already read it, and may have acted on it. Show numbers, decisions and anything a user might screenshot only once, when they are settled.':
    'Streaming isliye tez lagti hai kyunki prose left se right padhte hain. Lekin jo number aaye aur phir badal jaye, woh spinner se bhi bura hai. User use pehle hi padh chuka hai, aur uske hisaab se kuch kar bhi chuka ho sakta hai. Numbers, decisions aur jo kuch user screenshot le sakta hai, use sirf ek baar dikhaiye, jab woh pakka ho chuka ho.',
  'A long explanatory answer':
    'Ek lamba samjhaane wala jawaab',
  'A drafted email the user will edit':
    'Ek draft kiya hua email jise user edit karega',
  'A number the model may change as it goes on, such as a total, an amount or a count':
    'Aisa number jo model aage badhte hue badal sakta hai, jaise total, amount ya count',
  'A summary of a document':
    'Kisi document ka summary',
  'Your model returns a confidence score. What is the best way to use it in the interface?':
    'Aapka model ek confidence score deta hai. Interface mein use karne ka sabse achha tareeka kya hai?',
  'A confidence number on screen asks the user to judge something they cannot calibrate. The model’s own confidence is often off anyway. Use the score as a signal inside your product instead. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.':
    'Screen par dikhta confidence number user se aisi cheez judge karwata hai jise woh calibrate nahi kar sakta. Model ka khud ka bataya confidence waise bhi aksar sahi nahi hota. Isliye score ko apne product ke andar signal ki tarah use kijiye. Usse interface ka kaam badalna chahiye: jawaab dena, evidence dikhana, clarifying sawaal poochhna, ya case kisi insaan ko de dena.',
  'Show it as a percentage next to the answer':
    'Jawaab ke paas percentage ke roop mein dikhana',
  'Colour the answer green, amber or red by threshold':
    'Threshold ke hisaab se jawaab ko hara, peela ya laal kijiye',
  'Use it to route: answer directly when confidence is high, show evidence first or ask a question when it is low':
    'Route karne ke liye use kijiye: confidence high ho toh seedha jawaab, low ho toh pehle evidence dikhaiye ya sawaal poochhiye',
  'Hide it, since users find numbers confusing':
    'Chhupa dijiye, kyunki users ko numbers confusing lagte hain',
  'What makes a correction path genuinely useful instead of decorative?':
    'Correction path ko sirf dikhawe ka nahi, asli mein kaam ka kya banata hai?',
  'A thumbs-down with no context says something was wrong, but not what. A correction that records the expected answer and the evidence the system used turns a complaint into an eval case. Also, if correcting is slower than doing the task by hand, nobody corrects. So the path must be cheaper than the workaround, or you collect nothing.':
    'Bina context ka thumbs-down sirf yeh batata hai ki kuch galat tha, kya galat tha yeh nahi. Jo correction expected jawaab aur system ke use kiye evidence ko record karti hai, woh shikayat ko eval case bana deti hai. Aur agar correct karna haath se kaam karne se dheema hai, toh koi correct nahi karega. Isliye path workaround se sasta hona chahiye, warna kuch collect nahi hoga.',
  'It captures what the user expected, not only that they were unhappy':
    'Woh yeh capture karta hai ki user ne kya expect kiya tha, sirf yeh nahi ki woh naakhush the',
  'It records the retrieved evidence alongside the correction':
    'Woh correction ke saath retrieve hua evidence bhi record karta hai',
  'It is faster than giving up on the feature and doing the task by hand':
    'Yeh feature chhod kar kaam haath se karne se tez hai',
  'It feeds the failure taxonomy that drives the roadmap':
    'Woh us failure taxonomy ko bharta hai jo roadmap chalati hai',
  'It thanks the user for their feedback':
    'Woh user ko feedback ke liye dhanyavaad deta hai',
  'Which screen decides most whether users keep trusting an AI feature?':
    'Kaun si screen sabse zyada tay karti hai ki users AI feature par bharosa rakhenge ya nahi?',
  'Every system looks good when it works. Trust depends on what happens when it cannot answer. A system that says “I don’t have that” and offers a route to a person earns more trust than one that always makes something up. Teams design this screen last, or not at all. That is why many AI features feel unreliable even with good average accuracy.':
    'Har system tab achha lagta hai jab woh kaam karta hai. Bharosa is par tikta hai ki jab woh jawaab nahi de paata, tab kya hota hai. Jo system kehta hai “mere paas yeh nahi hai” aur kisi insaan tak pahunchne ka raasta deta hai, use zyada bharosa milta hai. Jo system hamesha kuch na kuch bana deta hai, use kam. Teams yeh screen sabse aakhir mein banati hain, ya banati hi nahi. Isliye achhi average accuracy ke baad bhi bahut se AI features unreliable lagte hain.',
  'The successful answer':
    'Safal jawaab',
  'The loading state':
    'Loading ki sthiti',
  'The refusal or empty state: what it shows when it has nothing good to say':
    'Refusal ya empty state: jab kehne ko kuch achha na ho, tab woh kya dikhata hai',
  'The onboarding tour':
    'Onboarding ka tour',
  'Write the interface contract for an AI feature you know. What does it show when it is confident, and when it is not? What can the user do when it is wrong? What does the feature still do when the AI is switched off?':
    'Kisi aise AI feature ke liye interface contract likhiye jise aap jaante hain. Jab woh confident ho aur jab na ho, tab woh kya dikhata hai? Jab woh galat ho, tab user kya kar sakta hai? Jab AI band ho, tab bhi feature kya karta hai?',
  'A strong answer treats uncertainty as a design input, not an engineering embarrassment. Confident: show the answer with citations that open, and an action the user can take right there. Not confident: show the evidence first, with the answer as a draft. Or ask a clarifying question instead of guessing. Never give it the same look as a confident answer. Wrong: give an edit path that captures the expected answer and the evidence. It must be faster than doing the task by hand, and it feeds the failure taxonomy. Switched off: the feature falls back to something that still works. Examples are search without generated answers, a form without extraction, or a queue without routing. A kill switch (the off button) is usable only if a working product sits underneath it.':
    'Ek strong jawaab uncertainty ko design input maanta hai, engineering ki sharmindagi nahi. Confident: citations ke saath jawaab dikhaiye, jo khul jaayein, aur ek action jo user wahin le sake. Confident nahi: pehle evidence dikhaiye, jawaab draft ki tarah. Ya guess ki jagah clarifying sawaal poochhiye. Use kabhi confident jawaab jaisa look mat dijiye. Galat: ek edit path dijiye jo expected jawaab aur evidence capture kare. Woh haath se kaam karne se tez ho, aur failure taxonomy mein jaaye. Band: feature aise kaam par fall back kare jo phir bhi chalta ho. Jaise generated jawaab ke bina search, extraction ke bina form, ya routing ke bina queue. Kill switch (band karne ka button) tabhi use ho sakta hai jab neeche ek chalta hua product ho.',
});
