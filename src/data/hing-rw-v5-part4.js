/* Hinglish: part4, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch185: Build or buy: comparing a vendor with your own build ---- */
  'Build or buy: comparing a vendor with your own build':
    'Build or buy: vendor ki apne build se comparison',
  'Before you start':
    'Shuru karne se pehle',
  'Test the vendor with your answer key':
    'Vendor ko apne answer key se test kijiye',
  'Tip':
    'Tip',
  'The questions that decide it':
    'Woh sawaal jo decide karte hain',
  'Question':
    'Sawaal',
  'Why it matters':
    'Yeh kyun zaroori hai',
  'How often will it need to change?':
    'Ise kitni baar badalna padega?',
  'Who handles incidents at 2am?':
    'Raat 2 baje incidents kaun sambhaalta hai?',
  'Cost both options over two years':
    'Dono options ki do saal ki cost nikaaliye',
  'Decide what would change your mind':
    'Tay kijiye ki kya aapka mann badal dega',
  'I would switch to buying if … . I would switch to building if … .':
    'Main buy karne par switch karunga agar … . Main build karne par switch karunga agar … .',

  /* ---- ch19: Fine-tuning or not: choosing what to change ---- */
  'Fine-tuning or not: choosing what to change':
    'Fine-tuning karein ya nahi: kya badalna hai, yeh kaise chunein',
  'Four things you can change':
    'Chaar cheezein jo aap badal sakte hain',
  'Which one, and why':
    'Kaunsa, aur kyun',
  'What you change':
    'Aap kya badalte hain',
  'What it really fixes':
    'Woh asal mein kya theek karta hai',
  'What it cannot fix':
    'Woh kya theek nahi kar sakta',
  'Cost to try, and to undo':
    'Try karne aur wapas lene ki cost',
  'Instructions':
    'Instructions',
  'Evidence':
    'Evidence',
  'Problems with behaviour and format':
    'Behaviour aur format ki problems',
  'Training on examples':
    'Examples par training',
  'A different model':
    'Alag model',
  'Sort real failures into the four kinds':
    'Asli failures ko chaar kinds mein baantiye',
  'the user saw … kind of failure … the fix … I would know I was right if …':
    'user ne dekha … failure ki kind … fix … mujhe pata chalega ki main sahi tha agar …',
  'What fine-tuning really costs':
    'Fine-tuning asal mein kitne mein padti hai',
  'Try a smaller model':
    'Chhota model try kijiye',
  'Estimate the saving from a smaller model':
    'Chhote model se hone wali bachat ka andaaza lagaiye',
  'Summary':
    'Summary',
  'Answer a proposal to fine-tune a model, using evidence':
    'Evidence ke saath fine-tuning ke proposal ka jawaab dijiye',
  'This task is written, with no code. Use the failures you collected in earlier chapters and the numbers you already measured. Write your answer in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 3.':
    'Yeh task likhne ka hai, code nahi. Pichhle chapters mein jo failures aapne jama kiye aur jo numbers aapne measure kiye, unhe use kijiye. Apna jawaab neeche wale notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2 aur 3.',
  'Count each kind. The counts often settle the question before any technical argument starts.':
    'Har kind ko gin lijiye. Count aksar kisi bhi technical bahas se pehle hi sawaal ka faisla kar dete hain.',
  'Twenty real failures sorted into the four kinds, with a count for each.':
    'Bees asli failures chaar kinds mein baanti hui, har ek ke count ke saath.',

  /* ---- ch20: Designing for wrong answers: evidence, confidence and refusals ---- */
  'Designing for wrong answers: evidence, confidence and refusals':
    'Galat jawaab ke liye design: evidence, confidence aur refusals',
  'At 90% accuracy, one answer in ten is wrong. Whether the feature is usable depends on what the screen does about that one. In this chapter you’ll audit a real product, design four interface states, time a correction and design the refusal.':
    '90% accuracy par bhi 10 mein se ek jawaab galat hota hai. Feature kaam ka hai ya nahi, yeh is par depend karta hai ki us ek jawaab par screen kya karti hai. Is chapter mein aap ek asli product ka audit karenge, chaar interface states design karenge, ek correction ko time karenge aur refusal design karenge.',
  'A required quote makes checking cheap':
    'Zaroori quote se checking sasti ho jaati hai',
  'A quote is more useful than a confidence number.':
    'Ek quote confidence number se zyada kaam ka hota hai.',
  'Users notice the slow responses':
    'Users ko slow responses yaad rehte hain',
  'They notice the slowest ones, not the average response time.':
    'Unhe sabse slow wale yaad rehte hain, average response time nahi.',
  'Rolling back code does not undo behaviour that both versions share.':
    'Code rollback karne se woh behaviour wapas nahi hota jo dono versions mein ek jaisa hai.',
  'Explain how a feature that is wrong one time in ten can still be trusted.':
    'Samjha paana ki jo feature 10 mein se ek baar galat hota hai, us par bhi bharosa kaise kiya ja sakta hai.',
  'Say what to do with a confidence score, and why displaying it as a number is usually wrong.':
    'Bata paana ki confidence score ka kya karna chahiye, aur use number ki tarah dikhana aam taur par galat kyun hai.',
  'Explain what must exist underneath a kill switch for it to be usable.':
    'Samjha paana ki kill switch ke kaam karne ke liye uske neeche kya hona zaroori hai.',
  'You don’t need any code for this chapter. Pick an AI feature you use every day, and one feature you own or could own.':
    'Is chapter ke liye koi code nahi chahiye. Ek AI feature chuniye jo aap roz use karte hain, aur ek feature jo aapka hai ya ho sakta hai.',
  'In the last chapter you decided whether to change the model or something around it. Until now the course has been about making the model right more often. This chapter is about the rest of the time.':
    'Pichhle chapter mein aapne tay kiya ki model badalna hai ya uske aas-paas ki koi cheez. Ab tak course is baare mein tha ki model ko zyada baar sahi kaise banaya jaaye. Yeh chapter baaki samay ke baare mein hai.',
  'At 90% accuracy, one interaction in ten is wrong, and no amount of engineering removes that completely. So what the screen does in that case decides whether the feature is usable.':
    '90% accuracy par 10 mein se ek interaction galat hota hai, aur koi bhi engineering ise poori tarah nahi hata sakti. Isliye us waqt screen kya karti hai, yahi tay karta hai ki feature use karne laayak hai ya nahi.',
  'This is a design decision, and it belongs to the product owner. An engineer can tell you that a confidence score exists. The product owner decides what the user sees when that score is low.':
    'Yeh ek design decision hai, aur yeh product owner ka hai. Engineer aapko bata sakta hai ki confidence score maujood hai. Lekin score kam hone par user ko kya dikhega, yeh product owner tay karta hai.',
  'Do not show an uncertain answer in a confident interface. Many AI features feel untrustworthy because they show a wrong answer exactly the way they show a right one, not because they are less accurate.':
    'Ek uncertain jawaab ko confident interface mein mat dikhaiye. Bahut se AI features isliye bharose ke laayak nahi lagte ki woh galat jawaab ko bilkul waise hi dikhate hain jaise sahi jawaab ko, isliye nahi ki woh kam accurate hain.',
  'There are four things to get right. A feature that does all four can be wrong one time in ten and still be trusted. One that does none of them will be distrusted even at 95% accuracy. Let’s take them one by one.':
    'Chaar cheezein sahi karni hain. Jo feature chaaron karta hai, woh 10 mein se ek baar galat hokar bhi trusted rehta hai. Jo ek bhi nahi karta, use 95% accuracy par bhi shak ki nazar se dekha jaayega. Chaliye ek-ek karke dekhte hain.',
  '1. Show the evidence':
    '1. Evidence dikhaiye',
  'Start with a simple idea. If a user can check a claim in a few seconds, a wrong answer costs much less. A link that opens the actual source passage makes that possible. That is why Chapter 8 required the model to quote its source.':
    'Ek simple idea se shuru kijiye. Agar user kuch seconds mein kisi claim ko check kar sakta hai, toh galat jawaab ki cost bahut kam ho jaati hai. Ek link jo asli source passage kholta hai, yeh mumkin banata hai. Isliye Chapter 8 mein model se uska source quote karwana zaroori kiya gaya tha.',
  'A citation that names a document but does not open it is worse than nothing. It looks checkable, but the user can’t check it, and they won’t find that out until it matters.':
    'Aisi citation jo document ka naam batati hai lekin use kholti nahi, woh kuch na hone se bhi buri hai. Woh check karne laayak dikhti hai, lekin user check nahi kar sakta, aur use yeh tab pata chalta hai jab bahut der ho chuki hoti hai.',
  'Now try this on a product you already use.':
    'Ab yeh kisi aise product par try kijiye jo aap pehle se use karte hain.',
  'Audit an AI feature you use every day':
    'Roz use hone wale AI feature ka audit kijiye',
  'Pick one, such as a search assistant, an email drafter or a coding assistant. Ask it something it will get wrong, at the edge of what it knows.':
    'Ek chuniye, jaise search assistant, email drafter ya coding assistant. Usse aisi cheez poochiye jo woh galat karega, jahan uski knowledge ki limit khatam hoti hai.',
  'Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface show the wrong answer any differently from a right one? What could you do about it? And what happened to your correction?':
    'Phir chaar sawaalon ke jawaab likhiye. Kya aap claim check kar paaye, aur kitne seconds lage? Kya interface ne galat jawaab ko sahi se alag tareeke se dikhaya? Aap uske baare mein kya kar sakte the? Aur aapke correction ka kya hua?',
  'Most well-known products fail at least two of the four. Note which ones. Your users will hold your feature to the same standard.':
    'Zyadatar jaane-maane products in chaaron mein se kam se kam do mein fail hote hain. Note kijiye kaun se. Aapke users aapke feature ko isi standard par parkhenge.',
  '2. Design for speed':
    '2. Speed ke liye design kijiye',
  'In Chapter 11, slow responses were a cost. Here they become a design problem. Streaming, where the answer appears piece by piece, works well for prose, because a half-arrived paragraph is already useful.':
    'Chapter 11 mein slow responses ek cost thi. Yahan woh design ki problem ban jaati hain. Streaming, jisme jawaab tukdon mein dikhta jaata hai, text ke liye achhi chalti hai, kyunki aadha aaya hua paragraph bhi kaam ka hota hai.',
  'It doesn’t work for everything. A number that appears and then changes while the answer is still being generated is worse than a spinner. The user has already read it and may have acted on it.':
    'Yeh har cheez ke liye kaam nahi karti. Ek number jo dikhta hai aur phir jawaab bante-bante badal jaata hai, woh spinner se bhi buri cheez hai. User use pehle hi padh chuka hota hai aur ho sakta hai usne uske hisaab se kuch kar bhi diya ho.',
  '3. Use confidence to choose behaviour':
    '3. Confidence se behaviour chuniye',
  'Many models can also give a confidence score along with an answer. It’s tempting to show it. Before you read on, think about what you would do with it.':
    'Bahut se models jawaab ke saath ek confidence score bhi de sakte hain. Ise dikhane ka mann karta hai. Aage padhne se pehle sochiye ki aap ise lekar kya karenge.',
  'What you would do with it':
    'Aap ise lekar kya karenge',
  'Predict: your model returns a confidence score with every answer. What should the interface do with it?':
    'Andaaza lagaiye: aapka model har jawaab ke saath ek confidence score deta hai. Interface ko ise lekar kya karna chahiye?',
  'Use it to decide what the product does, and do not display it as a number. A percentage next to an answer asks the user to judge something they cannot calibrate, and the model’s own confidence is often badly calibrated anyway. Used internally, it can change the behaviour: answer directly, show the evidence first, ask a clarifying question, or pass the case to a person.':
    'Ise yeh tay karne ke liye use kijiye ki product kya karega, aur ise number ki tarah display mat kijiye. Jawaab ke saath likha percentage user se woh cheez judge karwata hai jise woh calibrate nahi kar sakta, aur model ka apna confidence aksar vaise bhi kharab calibrated hota hai. Andar se use karne par yeh behaviour badal sakta hai: seedha jawaab dena, pehle evidence dikhana, ek clarifying sawaal poochna, ya case kisi insaan ko de dena.',
  'Turn confidence into interface choices. Use an editable field instead of a fixed one, a draft instead of a sent message, or a question instead of a guess.':
    'Confidence ko interface ke choices mein badaliye. Fixed field ki jagah editable field, bheje hue message ki jagah draft, ya andaaze ki jagah ek sawaal.',
  'Now put that into practice on a feature of your own.':
    'Ab ise apne kisi feature par karke dekhiye.',
  'Write the four states':
    'Chaar states likhiye',
  'For one feature you own, write what the user sees in four states: a confident answer, a low-confidence answer, a refusal, and the AI turned off. Write the actual screen content.':
    'Apne kisi ek feature ke liye likhiye ki user chaar states mein kya dekhta hai: ek confident jawaab, ek low-confidence jawaab, ek refusal, aur jab AI band ho. Screen par asli content likhiye.',
  'The third and fourth states are the hard ones, and most specs leave them out. If you can’t write them, the product doesn’t have them either. It just does whatever the code happens to do.':
    'Teesri aur chauthi state mushkil hain, aur zyadatar specs unhe chhod dete hain. Agar aap unhe likh nahi paate, toh product mein bhi woh nahi hain. Woh bas wahi karta hai jo code ittefaq se kar deta hai.',
  '4. Make correcting it easy':
    '4. Correction aasaan banaiye',
  'When the system is wrong, what the user does next is your most valuable data, and most products throw it away. A thumbs-down records that something was wrong, but not what.':
    'Jab system galat hota hai, tab user ka agla kadam aapka sabse keemti data hota hai, aur zyadatar products use phenk dete hain. Thumbs-down sirf yeh darj karta hai ki kuch galat tha, yeh nahi ki kya.',
  'A good correction path does three things. It captures what the user expected <em>instead</em>. It keeps the evidence the system used. And it is faster than giving up and doing the task by hand. If correcting takes longer than the manual workaround, nobody corrects, and an empty feedback table looks like satisfaction.':
    'Ek achha correction path teen kaam karta hai. Woh yeh pakadta hai ki user ne <em>uski jagah</em> kya expect kiya tha. Woh system ka use kiya hua evidence sambhaal kar rakhta hai. Aur woh haath se task kar lene se tez hota hai. Agar correct karna manual tareeke se zyada time leta hai, toh koi correct nahi karta, aur khaali feedback table satisfaction jaisa dikhta hai.',
  'Time a correction':
    'Ek correction ko time kijiye',
  'Use a clock. How long does it take to correct a wrong output, compared with doing the task by hand from scratch? Do it three times.':
    'Ghadi use kijiye. Ek galat output ko correct karne mein kitna time lagta hai, jab ise task ko shuru se haath se karne se compare karein? Teen baar kijiye.',
  'If correcting is slower, your feedback table will stay empty, and you may wrongly read that as satisfaction. This one measurement explains most of the “our users never give feedback” complaints.':
    'Agar correct karna zyada slow hai, toh aapka feedback table khaali hi rahega, aur aap ise galti se satisfaction samajh sakte hain. Yeh ek measurement “hamare users kabhi feedback nahi dete” wali zyadatar shikayaton ko samjha deti hai.',
  'Example':
    'Example',
  'Take two products that use the same model and the same retrieval. One logs a thumbs-down. The other logs the answer, the retrieved chunks and the question. It also asks one more thing: “what did you expect instead?” Within two weeks, the second has a list of real failure types and a roadmap built from its own traffic. The first has a falling number and no idea why.':
    'Do products lijiye jo same model aur same retrieval use karte hain. Ek thumbs-down log karta hai. Doosra answer, retrieved chunks aur question log karta hai, aur ek cheez aur poochta hai: “aapne uski jagah kya expect kiya tha?” Do hafte mein doosre ke paas asli failure types ki list aur apne hi traffic se bana roadmap hota hai. Pehle ke paas ek girta hua number hai aur yeh andaaza nahi ki kyun.',
  'Design the correction path for a feature you know. What does the user do when the output is wrong, what does that action record, and how long does it take compared with doing the task by hand? Then write the test case it would produce.':
    'Kisi jaane-pehchaane feature ka correction path design kijiye. Output galat hone par user kya karta hai, woh action kya record karta hai, aur haath se task karne ke comparison mein ismein kitna time lagta hai? Phir woh test case likhiye jo isse banega.',
  'the user … we capture … it takes … versus … the test case would be …':
    'user … hum pakadte hain … ismein lagta hai … jabki … test case hoga …',
  'A good design makes correcting the fastest option. Let the user edit the output in place, and treat the edit as the feedback. They were going to fix it anyway, so it costs them nothing, and you learn the expected answer exactly. Record the question, the evidence, the output and the correction together. Without the evidence, you know the answer was wrong but not whether retrieval or generation caused it, which is the distinction Chapter 19 needs.':
    'Achha design correct karne ko sabse tez option banata hai. User ko output wahin edit karne dijiye, aur edit ko hi feedback maniye. Woh use waise bhi theek karne wala tha, isliye use kuch extra nahi karna padta, aur aapko expected jawaab bilkul exact mil jaata hai. Question, evidence, output aur correction ko saath record kijiye. Evidence ke bina aapko pata hota hai ki jawaab galat tha, lekin yeh nahi ki retrieval ne gadbad ki ya generation ne, aur Chapter 19 ko yahi farq chahiye.',
  'Design the refusal':
    'Refusal design kijiye',
  'Every system looks good when it works. Trust is built on the screen that says <em>I do not have that</em>. Many AI products design that screen last, or not at all.':
    'Har system tab achha lagta hai jab woh kaam karta hai. Bharosa us screen par banta hai jo kehti hai <em>mere paas yeh nahi hai</em>. Bahut se AI products us screen ko sabse aakhir mein design karte hain, ya karte hi nahi.',
  'A system that says “I cannot answer this” and offers a route to a person earns more trust than one that always produces something. Users judge a system partly by its refusals. A feature that never refuses teaches them that its confidence means nothing.':
    'Jo system kehta hai “main iska jawaab nahi de sakta” aur kisi insaan tak pahunchne ka raasta deta hai, woh us system se zyada bharosa kamata hai jo hamesha kuch na kuch bana deta hai. Users system ko kuch had tak uske refusals se judge karte hain. Jo feature kabhi refuse nahi karta, woh unhe sikhaata hai ki uske confidence ka koi matlab nahi.',
  'What happens when the AI is off':
    'Jab AI band ho toh kya hota hai',
  'Finally, decide what the feature does when the AI is switched off. In Chapter 18 you saw that a rollback and a kill switch are different things.':
    'Aakhir mein tay kijiye ki jab AI switch off ho toh feature kya karega. Chapter 18 mein aapne dekha tha ki rollback aur kill switch alag cheezein hain.',
  'A kill switch is only usable if there is something underneath it. That could be search without generated answers, a form without extraction, or a queue without routing. If turning the AI off leaves a blank screen, the switch just replaces one failure with another.':
    'Kill switch tabhi kaam ka hai jab uske neeche kuch ho. Jaise generated jawaab ke bina search, extraction ke bina form, ya routing ke bina queue. Agar AI band karne par screen khaali ho jaati hai, toh switch bas ek failure ki jagah doosri failure rakh deta hai.',
  'To sum up, a feature earns trust by showing its evidence, staying quick, using confidence to choose what it does, and making corrections easy. Add a refusal that leads to a person, and a fallback for when the AI is off. Next, you’ll learn how to find out whether all this actually helped the business, by designing a pilot.':
    'Toh chhote mein, ek feature bharosa tab kamata hai jab woh apna evidence dikhaye, tez rahe, confidence se tay kare ki kya karna hai, aur correction aasaan banaye. Saath mein ek aisi refusal jo insaan tak le jaaye, aur AI band hone par ek fallback. Aage aap seekhenge ki yeh sab business ke liye asal mein kaam aaya ya nahi, yeh kaise pata kiya jaaye, ek pilot design karke.',
  'Design the four answers the tool can give':
    'Woh chaar jawaab design kijiye jo tool de sakta hai',
  'Many AI features use the same screen when they are sure, when they are unsure, when they are wrong and when they cannot answer. So a confident wrong answer looks exactly like a confident right one. In this chapter you learned how a feature that is wrong one time in ten can still be trusted, and why a confidence number is usually the wrong thing to show. Now you’ll design the four states for the developer kit.':
    'Bahut se AI features ek hi screen use karte hain, chahe woh sure ho, unsure ho, galat ho ya jawaab na de sake. Isliye ek confident galat jawaab bilkul ek confident sahi jawaab jaisa dikhta hai. Is chapter mein aapne seekha ki jo feature 10 mein se ek baar galat hota hai, us par bhi bharosa kaise kiya ja sakta hai, aur confidence number dikhana aam taur par galat kyun hai. Ab aap developer kit ke liye chaar states design karenge.',
  'This task is written, with no code. Design on paper, time one correction with a stopwatch, and write your design in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 5.':
    'Yeh task likhne ka hai, code nahi. Paper par design kijiye, ek correction ko stopwatch se time kijiye, aur apna design neeche wale notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 2, 3 aur 5.',
  'Look at an AI feature you use every day. Note what it shows when it is confident, when it is unsure, when it is wrong and when it cannot answer.':
    'Ek AI feature dekhiye jo aap roz use karte hain. Note kijiye ki woh confident hone par, unsure hone par, galat hone par aur jawaab na de paane par kya dikhata hai.',
  'Now design the four states for Bharat Privacy Guard: found and removed with confidence, found but unsure, wrongly removed (a false alarm), and unable to decide. For each state, write what the developer’s program receives, what the end user sees, and what each of them can do next.':
    'Ab Bharat Privacy Guard ke liye chaar states design kijiye: confidence ke saath mila aur hata diya gaya, mila lekin unsure, galti se hata diya gaya (false alarm), aur tay nahi kar paaya. Har state ke liye likhiye ki developer ke program ko kya milta hai, end user ko kya dikhta hai, aur dono aage kya kar sakte hain.',
  'Design the “unable to decide” state as a real way to reach a person, not a dead end. Say who the person is and how long they take.':
    '“Tay nahi kar paaya” state ko kisi asli insaan tak pahunchne ka raasta banaiye, band gali nahi. Batayiye ki woh insaan kaun hai aur use kitna time lagta hai.',
  'Decide what the tool shows when it is only half sure, so that the uncertainty is visible without being noisy. Don’t show a bare confidence number.':
    'Tay kijiye ki jab tool sirf aadha sure ho toh woh kya dikhaye, taaki uncertainty dikhe lekin shor na ho. Sirf ek confidence number mat dikhaiye.',
  'Time one correction from start to finish. Start when a user notices that a harmless word was hidden, and stop when the rule is fixed. Count every step and every hand-off.':
    'Ek correction ko shuru se aakhir tak time kijiye. Tab shuru kijiye jab user dekhta hai ki ek harmless word chhupa diya gaya, aur tab roki jab rule theek ho jaaye. Har step aur har hand-off gin lijiye.',
  'Write down which of the four states your current design merges together, and what that costs the user.':
    'Likhiye ki aapka maujooda design chaar states mein se kaun se ko ek mein mila deta hai, aur user ko isse kya nuksaan hota hai.',
  'All four states written out, including what each person can do in each one.':
    'Chaaron states likhi hui, jisme har state mein har insaan kya kar sakta hai woh bhi ho.',
  'The “unable to decide” route to a real person.':
    '“Tay nahi kar paaya” ka kisi asli insaan tak jaane wala raasta.',
  'The correction path, timed from start to finish, with the slowest step marked.':
    'Correction path, shuru se aakhir tak time kiya hua, sabse slow step par nishaan ke saath.',
  'The state your product handles worst, and the first thing you would change.':
    'Woh state jo aapka product sabse kharab handle karta hai, aur sabse pehli cheez jo aap badlenge.',

  /* ---- ch205: Measuring business impact: designing a pilot ---- */
  'Measuring business impact: designing a pilot':
    'Business impact naapna: ek pilot design karna',
  'A system can be accurate and still change nothing for the business. In this chapter you’ll find the slow part of a workflow, then design a pilot with a business metric, a comparison, a failure threshold and a time window.':
    'Ek system accurate ho sakta hai, phir bhi business ke liye kuch nahi badalta. Is chapter mein aap ek workflow ka slow hissa dhoondhenge, phir ek pilot design karenge jisme business metric, comparison, failure threshold aur time window hoga.',
  'You can measure the system':
    'Aap system ko measure kar sakte hain',
  'That means recall, precision, judges and per-category scores.':
    'Matlab recall, precision, judges aur per-category scores.',
  'The interface has four states':
    'Interface ki chaar states hain',
  'What the user sees decides whether quality reaches them.':
    'User ko jo dikhta hai, wahi tay karta hai ki quality us tak pahunchti hai ya nahi.',
  'Design a pilot that could actually show the feature did not help.':
    'Aisa pilot design kar paana jo asal mein dikha sake ki feature se madad nahi mili.',
  'Name the one number the business cares about, and how the feature would move it.':
    'Woh ek number bata paana jo business ke liye matter karta hai, aur feature use kaise hilayega.',
  'Explain why a system that measures well can still produce no business benefit.':
    'Samjha paana ki jo system achhe se measure hota hai, woh bhi business ko koi fayda kyun nahi de sakta.',
  'You don’t need any code for this chapter. Bring a feature you have measured, yours or one from the course, and the name of whoever pays for it.':
    'Is chapter ke liye code nahi chahiye. Ek aisa feature saath rakhiye jise aapne measure kiya hai, aapka ya course ka, aur us insaan ka naam jo uske liye paisa deta hai.',
  'So far the course has measured the system itself. Is retrieval right? Can the judge be trusted? Is the classifier accurate in each category? All of that is necessary.':
    'Ab tak course ne system ko hi measure kiya hai. Kya retrieval sahi hai? Kya judge par bharosa kiya ja sakta hai? Kya classifier har category mein accurate hai? Yeh sab zaroori hai.',
  'But none of it answers the question that decides future funding: did it help the business? That is what this chapter is about, and it ends with a pilot you can actually design.':
    'Lekin inme se koi bhi us sawaal ka jawaab nahi deta jo aage ki funding tay karta hai: kya isse business ko madad mili? Yeh chapter isi ke baare mein hai, aur aakhir tak aap ek pilot design kar paayenge.',
  'A system can be 94% accurate and change nothing, because nobody uses it, or because the step it speeds up was never the slow part.':
    'Ek system 94% accurate ho sakta hai aur phir bhi kuch nahi badalta, kyunki ya toh koi use nahi karta, ya jis step ko woh tez karta hai woh kabhi slow hissa tha hi nahi.',
  'Find the slow part first':
    'Pehle slow hissa dhoondhiye',
  'Before you design anything, check that you are speeding up the right step. The way to do that is to time the whole workflow.':
    'Kuch bhi design karne se pehle check kijiye ki aap sahi step ko tez kar rahe hain ya nahi. Iska tareeka hai poore workflow ko time karna.',
  'Time the whole workflow':
    'Poore workflow ko time kijiye',
  'Take the workflow your feature is part of and time it honestly from start to finish. Include every step, including the time spent waiting for other people.':
    'Woh workflow lijiye jiska aapka feature hissa hai aur use shuru se aakhir tak imaandaari se time kijiye. Har step shaamil kijiye, doosre logon ka intezaar karne ka time bhi.',
  'The AI step is rarely the largest. Often the biggest block is waiting for a person, or a handover between two systems. If you turn a four-minute step into a one-minute step inside a three-day process, nobody will notice.':
    'AI wala step shaayad hi kabhi sabse bada hota hai. Aksar sabse bada hissa kisi insaan ka intezaar hota hai, ya do systems ke beech ka handover. Agar aap teen din ke process ke andar chaar minute ke step ko ek minute ka kar dein, toh kisi ko pata bhi nahi chalega.',
  'This is the cheapest study in the course, and the one most often skipped, because it can show that you should not build the feature.':
    'Yeh course ki sabse sasti study hai, aur sabse zyada chhodi jaane wali, kyunki yeh dikha sakti hai ki aapko woh feature banana hi nahi chahiye.',
  'Four parts of a pilot':
    'Pilot ke chaar hisse',
  'Suppose the step you are speeding up really is on the critical path. Then you can design a pilot. Think of a pilot as a test that states in advance what result would disappoint you, not as a small launch.':
    'Maan lijiye jis step ko aap tez kar rahe hain, woh sach mein critical path par hai. Tab aap pilot design kar sakte hain. Pilot ko ek chhote launch ki tarah nahi, balki ek aise test ki tarah dekhiye jo pehle se bata deta hai ki kaunsa result aapko nirash karega.',
  'A pilot has four parts. Here they are in order.':
    'Pilot ke chaar hisse hote hain. Yeh order mein hain.',
  '<strong>The number.</strong> Choose one measure the business already tracks, such as handling time, first-contact resolution, backlog age or error rate. Don’t invent a new metric for the pilot.':
    '<strong>Number.</strong> Ek aisa measure chuniye jo business pehle se track karta hai, jaise handling time, first-contact resolution, backlog age ya error rate. Pilot ke liye koi naya metric mat banaiye.',
  '<strong>The comparison.</strong> Looking at the same team before and after is weak evidence. Comparing two similar groups over the same period is much stronger, and it is usually possible.':
    '<strong>Comparison.</strong> Ek hi team ko pehle aur baad mein dekhna kamzor evidence hai. Ek hi period mein do milte-julte groups ko compare karna kaafi mazboot hai, aur aam taur par yeh mumkin hota hai.',
  '<strong>The failure threshold.</strong> This is the change below which you will call the pilot a failure. Write it down before you start.':
    '<strong>Failure threshold.</strong> Yeh woh badlaav hai jisse neeche aap pilot ko failure kahenge. Ise shuru karne se pehle likh lijiye.',
  '<strong>The time window.</strong> Make it long enough for the novelty to wear off. Any new tool looks better than it really is in its first two weeks.':
    '<strong>Time window.</strong> Ise itna lamba rakhiye ki novelty khatam ho jaaye. Koi bhi naya tool apne pehle do hafton mein asli se behtar dikhta hai.',
  'The failure threshold is the part people skip. So let’s practise it.':
    'Failure threshold wahi hissa hai jo log chhod dete hain. Chaliye isse practise karte hain.',
  'Write the disappointing result in advance':
    'Pehle se likhiye ki nirash karne wala result kya hoga',
  'Before running anything, write the sentence you would have to say if the pilot showed no effect. Use the words you would say to the person who funded it.':
    'Kuch bhi chalane se pehle woh sentence likhiye jo aapko kehna padega agar pilot ne koi asar nahi dikhaya. Wahi shabd likhiye jo aap us insaan se kahenge jisne ise fund kiya.',
  'This shows you two things. First, whether you really have a failure threshold, because many pilots don’t. Second, whether the pilot could ever produce that sentence, or whether every outcome would be reported as a success.':
    'Isse aapko do cheezein dikhti hain. Pehli, kya aapke paas sach mein failure threshold hai, kyunki bahut se pilots mein nahi hota. Doosri, kya yeh pilot kabhi woh sentence paida kar sakta hai, ya har result ko success hi bataya jaayega.',
  'If a pilot cannot fail, it is really a launch.':
    'Agar pilot fail nahi ho sakta, toh woh asal mein ek launch hai.',
  'When the system works but the number does not move':
    'Jab system kaam kare lekin number na hile',
  'Sometimes you run a careful pilot and the system works, yet the business number stays where it was. Where do you look first?':
    'Kabhi-kabhi aap ek dhyaan se kiya hua pilot chalate hain, system kaam karta hai, phir bhi business number wahin ka wahin rehta hai. Aap sabse pehle kahan dekhenge?',
  'Your pilot shows the system works well, but the business number does not move. Write the three explanations you would investigate first, in order.':
    'Aapka pilot dikhata hai ki system achhe se kaam karta hai, lekin business number nahi hilta. Woh teen wajah likhiye jinki aap sabse pehle jaanch karenge, order mein.',
  '1 … 2 … 3 …':
    '1 … 2 … 3 …',
  'This order usually works best. First, are people using it? Low adoption is the most common cause and the easiest to check. Second, does the output reach the place where the decision is made, or is it in a separate tool someone has to remember to open? Third, was the step you sped up actually on the critical path? Only after these three should you question the quality of the system. Teams usually check quality first because they know how to measure it.':
    'Yeh order aam taur par sabse achha chalta hai. Pehla, kya log ise use kar rahe hain? Kam adoption sabse common wajah hai aur check karna sabse aasaan. Doosra, kya output wahan pahunchta hai jahan decision liya jaata hai, ya woh ek alag tool mein hai jise kholna kisi ko yaad rakhna padta hai? Teesra, kya jis step ko aapne tez kiya woh asal mein critical path par tha? In teen ke baad hi system ki quality par sawaal uthaiye. Teams aksar quality pehle check karti hain kyunki unhe use measure karna aata hai.',
  'The whole course repeats one idea at a larger and larger scale. Decide what counts as failure, then measure that specific thing, instead of looking at outputs and forming an impression. You have done this for a prompt, a retriever, a judge, a cost model and now a business case.':
    'Poora course ek hi idea ko badi aur badi scale par dohraata hai. Tay kijiye ki failure kise kehte hain, phir usi khaas cheez ko measure kijiye, outputs dekh kar ek impression banane ke bajaye. Aap yeh ek prompt, ek retriever, ek judge, ek cost model aur ab ek business case ke liye kar chuke hain.',
  'The techniques will change as models change. The habit of defining failure first and then measuring it is what carries over.':
    'Techniques models ke saath badalti rahengi. Pehle failure define karne aur phir use measure karne ki aadat hi aage tak saath chalti hai.',
  'Next, you’ll move to the building blocks you need to work with AI systems yourself: Python, HTTP, Git and tests.':
    'Aage aap un building blocks par jaayenge jo AI systems ke saath khud kaam karne ke liye chahiye: Python, HTTP, Git aur tests.',
  'Design a pilot that could fail':
    'Aisa pilot design kijiye jo fail ho sakta hai',
  'A pilot that cannot fail proves nothing. In this chapter you learned to pick one number the business already tracks, to compare two groups, and to agree a failure threshold before the pilot starts. Now you’ll design a pilot of the developer kit with five to ten real developers.':
    'Jo pilot fail nahi ho sakta, woh kuch saabit nahi karta. Is chapter mein aapne seekha ki ek aisa number chunna jo business pehle se track karta hai, do groups ko compare karna, aur pilot shuru hone se pehle failure threshold par agreement banana. Ab aap developer kit ka ek pilot design karenge, paanch se das asli developers ke saath.',
  'This task is written, with no code. Design on paper, then write it up and get it agreed before anything runs. Short version for the route, about 20 minutes: steps 2, 4 and 6.':
    'Yeh task likhne ka hai, code nahi. Paper par design kijiye, phir likh kar use agree karwaiye, kuch bhi chalne se pehle. Route ke liye chhota version, lagbhag 20 minute: step 2, 4 aur 6.',
  'Time the whole workflow of a developer who handles user text, and mark where the kit fits. If it is not on the critical path, say so and stop here.':
    'Ek developer ka poora workflow time kijiye jo user text handle karta hai, aur mark kijiye ki kit kahan fit hota hai. Agar woh critical path par nahi hai, toh yeh kahiye aur yahin ruk jaaiye.',
  'Choose the business number. It must already exist and someone must already look at it, for example the number of support tickets that mention personal data being pasted into a chat.':
    'Business number chuniye. Woh pehle se maujood hona chahiye aur koi use pehle se dekhta ho, jaise un support tickets ka number jo chat mein personal data paste hone ka zikr karte hain.',
  'Design the comparison. Say which two groups of developers or which two periods you will compare, and why they are comparable.':
    'Comparison design kijiye. Batayiye ki developers ke kaun se do groups ya kaun se do periods ko aap compare karenge, aur woh comparable kyun hain.',
  'Write the failure threshold, which is the change below which you will call the pilot a failure. Also write the time window you will wait before you judge.':
    'Failure threshold likhiye, yaani woh badlaav jisse neeche aap pilot ko failure kahenge. Saath mein woh time window bhi likhiye jiska aap judge karne se pehle intezaar karenge.',
  'Write the disappointing result in advance, in the words you would say to whoever funded it.':
    'Pehle se nirash karne wala result likhiye, un shabdon mein jo aap ise fund karne wale se kahenge.',
  'Get the person who funds it to agree the threshold in writing before the pilot runs.':
    'Jo insaan ise fund karta hai, pilot chalne se pehle usse threshold written mein agree karwaiye.',
  'A business number that was already being tracked before the pilot.':
    'Ek business number jo pilot se pehle se track ho raha tha.',
  'A comparison between two groups or periods, with a reason they are fair.':
    'Do groups ya periods ke beech ek comparison, jisme yeh wajah ho ki woh fair kyun hain.',
  'A failure threshold agreed in writing by the person who would be disappointed by it.':
    'Ek failure threshold jo us insaan ne written mein agree kiya ho jise woh nirash karega.',
  'A description of a result that would make you recommend switching the kit off.':
    'Ek aise result ka description jo aapko kit ko switch off karne ki recommendation dene par majboor kare.'
});
