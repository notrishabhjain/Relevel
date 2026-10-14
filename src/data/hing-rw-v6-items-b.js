/* Hinglish: question bank parts 4-7 (items4-7), plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'What does fine-tuning mainly teach a model?':
    'Fine-tuning model ko mainly kya sikhati hai?',

  'A behaviour: the format, tone and structure of how it responds':
    'Ek behaviour: jawaab dene ka format, tone aur structure',

  'Fine-tuning shows the model many examples of an input and the answer you wanted, so it learns a habit. It’s great for “always answer in this shape and this tone.” It’s a poor, expensive way to add facts, because facts change and the model has to be retrained each time.':
    'Fine-tuning mein model ko ek input aur woh jawaab dikhaya jaata hai jo aap chahte the, aise kaafi examples, aur model ko ek aadat lag jaati hai. “Hamesha isi shape aur isi tone mein jawaab do” ke liye yeh bahut achhi hai. Facts jodne ke liye yeh kharab aur mehngi hai, kyunki facts badalte rehte hain aur model ko har baar dobara train karna padta hai.',

  'Users complain that the assistant doesn’t know your 2026 policy, which was published last month. Which fix fits best?':
    'Users shikayat kar rahe hain ki assistant ko aapki 2026 policy nahi pata, jo pichhle mahine publish hui thi. Kaun sa fix sabse sahi baithta hai?',

  'Retrieval: index the policy and cite it':
    'Retrieval: policy ko index kijiye aur cite kijiye',

  'The assistant is missing a fact, and facts that change belong in retrieval, where you can update them and show a citation. Fine-tuning freezes the fact until the next training run. A system prompt works only until the policy gets long enough to crowd the context. Neither gives the user a source to check.':
    'Assistant ke paas ek fact nahi hai, aur jo facts badalte hain woh retrieval mein rakhte hain, jahan aap unhe update kar sakte hain aur citation dikha sakte hain. Fine-tuning us fact ko agle training run tak jama deti hai. System prompt tab tak chalta hai jab tak policy itni lambi na ho jaye ki context mein jagah hi na bache. Dono mein se koi user ko check karne ke liye source nahi deta.',

  'Why should you try prompting and retrieval before fine-tuning?':
    'Fine-tuning se pehle prompting aur retrieval kyun try karni chahiye?',

  'They’re easy to undo and you can measure them in hours; tuning adds a dataset, a training cycle and something you must maintain':
    'Inhe undo karna aasaan hai aur inhe ghanton mein measure kar sakte hain; tuning mein ek dataset, ek training cycle aur ek cheez aa jaati hai jise aapko maintain karna padta hai',

  'Fine-tuning isn’t bad. But the first two options are cheap to try and cheap to undo, so ruling them out costs about a day. Tuning means building a labelled dataset, re-running it whenever the model changes, and finding it harder to switch providers. Pay that price only after the cheap options have failed on a measurement.':
    'Fine-tuning buri nahi hai. Lekin pehle do options try karna sasta hai aur undo karna bhi sasta, isliye unhe rule out karne mein bas ek din lagta hai. Tuning ka matlab hai labelled dataset banana, model badalne par use dobara run karna, aur provider badalna mushkil ho jaana. Yeh keemat tabhi dijiye jab sasti cheezein measurement par fail ho chuki hon.',

  'Which of these should already exist before “should we fine-tune?” can even be answered?':
    'In mein se kaun si cheezein pehle se maujood honi chahiye, tabhi “kya hum fine-tune karein?” ka jawaab diya ja sakta hai?',

  'A named failure, with counts, from real traffic':
    'Ek named failure, counts ke saath, asli traffic se',

  'A labelled dataset of inputs and wanted outputs, and a plan to maintain it':
    'Inputs aur chahiye gaye outputs ka labelled dataset, aur use maintain karne ka plan',

  'The first four make the decision. Without an eval, you can’t tell whether fine-tuning helped. Without a named failure and counts, you don’t know what you’re fixing. Without a dataset, there’s nothing to train on and no way to repeat it later. And if you skip the reversible options, you pay the high price first. The budget comes after the decision, not before.':
    'Pehli chaar cheezein decision banati hain. Eval ke bina aap nahi bata sakte ki fine-tuning se fayda hua ya nahi. Named failure aur counts ke bina aapko pata hi nahi ki aap kya fix kar rahe hain. Dataset ke bina train karne ko kuch nahi hai aur baad mein use dohraane ka tareeka bhi nahi. Aur agar aap undo ho sakne wale options skip kar dete hain, toh sabse mehngi keemat pehle chuka dete hain. Budget decision ke baad aata hai, pehle nahi.',

  'A senior stakeholder asks in a roadmap review, “Why aren’t we fine-tuning?” Write a reply that turns the question into a decision instead of a preference.':
    'Roadmap review mein ek senior stakeholder poochhte hain, “Hum fine-tuning kyun nahi kar rahe?” Aisa jawaab likhiye jo is sawaal ko preference se decision mein badal de.',

  'A strong reply says neither yes nor no. It asks what kind of wrong the system is right now. Roughly: “Tell me the failure you want fixed and I’ll tell you which lever fixes it. If it doesn’t know something, that’s retrieval, and tuning would bake in a fact that keeps changing. If it knows the answer but gives it in the wrong shape or tone, we try prompting first and tuning second, and I can test prompting this week. If it can’t do the reasoning, we need a different model or a bigger thinking budget. Right now our error taxonomy says the biggest cluster is finding the right document but quoting the wrong clause, and tuning can’t touch that. When a cluster shows up that is about behaviour, tuning is the right tool. I’ll then need a labelled set and an owner to maintain it, because it has to be re-run every time the base model is retired.”':
    'Ek strong jawaab na haan kehta hai na naa. Woh poochhta hai ki system abhi kis tarah ka galat hai. Lagbhag aise: “Aap jo failure fix karwana chahte hain woh bataiye, aur main bataunga ki kaun sa lever use fix karega. Agar use kuch pata hi nahi, toh woh retrieval hai, aur tuning mein ek aisa fact bake ho jaayega jo badalta rehta hai. Agar use jawaab pata hai lekin woh galat shape ya tone mein deta hai, toh pehle prompting try karte hain, phir tuning, aur prompting main isi hafte test kar sakta hoon. Agar woh reasoning nahi kar paata, toh humein dusra model ya bada thinking budget chahiye. Abhi hamari error taxonomy kehti hai ki sabse bada cluster yeh hai ki sahi document mil jaata hai lekin galat clause quote hota hai, aur tuning us par asar nahi daal sakti. Jab behaviour wala cluster aaye, tab tuning sahi tool hai. Tab mujhe ek labelled set aur use maintain karne wala owner chahiye hoga, kyunki base model retire hone par har baar use dobara run karna padta hai.”',

  'When does a small distilled model most reliably beat a frontier model?':
    'Ek chhota distilled model kab frontier model ko sabse bharosemand tareeke se harata hai?',

  'The task is open-ended and varied, and accuracy matters a lot':
    'Task open-ended aur alag-alag tarah ka hai, aur accuracy bahut zaroori hai',

  'The task is narrow and repetitive, at high volume, where speed or cost matters most':
    'Task narrow aur repetitive hai, high volume par, jahan speed ya cost sabse zyada matter karti hai',

  'The task is new and you have no examples':
    'Task naya hai aur aapke paas koi examples nahi hain',

  'The task needs many dependent reasoning steps':
    'Task mein ek ke baad ek kai reasoning steps chahiye',

  'Distillation gives up breadth to get a narrow skill at a fraction of the cost and delay. That’s a good deal for classifying, routing, extracting and other repetitive work, and a bad deal wherever variety is the point. It only pays off when volume is high enough that the savings beat the effort of building and maintaining the smaller model.':
    'Distillation breadth chhod kar ek narrow skill deti hai, cost aur delay ke ek chhote hisse mein. Classify, route, extract jaise repetitive kaam ke liye yeh achha sauda hai, aur jahan variety hi asli baat ho wahan bura. Yeh tabhi kaam karta hai jab volume itna ho ki bachat chhota model banane aur maintain karne ki mehnat se zyada ho.',

  'Why do we show sources next to an AI-generated answer?':
    'AI-generated jawaab ke saath sources kyun dikhate hain?',

  'To look sophisticated':
    'Sophisticated dikhne ke liye',

  'So the user can check the claim cheaply':
    'Taaki user claim ko sasti tarah check kar sake',

  'To keep the legal team happy':
    'Legal team ko khush rakhne ke liye',

  'To make the model more accurate':
    'Model ko zyada accurate banane ke liye',

  'A citation exists to make checking cheaper than trusting. So a citation that doesn’t open the actual passage is worse than none. It looks checkable but isn’t, and the user can’t tell the difference.':
    'Citation isliye hota hai ki check karna bharosa karne se sasta pade. Isliye jo citation asli passage khol hi nahi deta, woh na hone se bhi bura hai. Woh check karne layak dikhta hai lekin hota nahi, aur user farq nahi pehchaan paata.',

  'Which output should NOT be streamed token by token as it’s generated?':
    'Kaun sa output token-by-token stream NAHI karna chahiye?',

  'A number the model may change as it goes on, such as a total, an amount or a count':
    'Aisa number jo model aage badhte hue badal sakta hai, jaise total, amount ya count',

  'Streaming feels fast because prose reads left to right. But a number that appears and then changes is worse than a spinner, because the user has already read it and may have acted on it. Show numbers, decisions and anything a user might screenshot only once, when they’re settled.':
    'Streaming isliye tez lagti hai kyunki prose left se right padhte hain. Lekin jo number aaye aur phir badal jaye woh spinner se bhi bura hai, kyunki user use pehle hi padh chuka hai aur uske hisaab se kuch kar bhi chuka ho sakta hai. Numbers, decisions aur jo kuch user screenshot le sakta hai, use sirf ek baar dikhaiye, jab woh pakka ho chuka ho.',

  'Your model returns a confidence score. What’s the best way to use it in the interface?':
    'Aapka model ek confidence score deta hai. Interface mein use karne ka sabse achha tareeka kya hai?',

  'Show it as a percentage next to the answer':
    'Jawaab ke paas percentage ke roop mein dikhana',

  'Use it to route: answer directly when confidence is high, show evidence first or ask a question when it’s low':
    'Route karne ke liye use kijiye: confidence high ho toh seedha jawaab, low ho toh pehle evidence dikhaiye ya sawaal poochhiye',

  'Hide it, since users find numbers confusing':
    'Chhupa dijiye, kyunki users ko numbers confusing lagte hain',

  'A visible confidence number asks the user to judge something they can’t calibrate, and model-reported confidence is often off anyway. Use the score as a signal inside your product instead. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.':
    'Dikhta hua confidence number user se aisi cheez judge karwata hai jise woh calibrate nahi kar sakta, aur model ka khud ka bataya confidence waise bhi aksar sahi nahi hota. Isliye score ko apne product ke andar signal ki tarah use kijiye. Usse interface ka kaam badalna chahiye: jawaab dena, evidence dikhana, clarifying sawaal poochhna, ya case kisi insaan ko de dena.',

  'What makes a correction path genuinely useful instead of decorative?':
    'Correction path ko sirf dikhawe ka nahi, asli mein kaam ka kya banata hai?',

  'It captures what the user expected, not only that they were unhappy':
    'Woh yeh capture karta hai ki user ne kya expect kiya tha, sirf yeh nahi ki woh naakhush the',

  'It’s faster than giving up on the feature and doing the task by hand':
    'Yeh feature chhod kar kaam haath se karne se tez hai',

  'A thumbs-down with no context says something was wrong and nothing about what. A correction that records the expected answer and the evidence the system used turns a complaint into an eval case. And if correcting is slower than doing the task by hand, nobody corrects, so the path must be cheaper than the workaround or you collect nothing.':
    'Bina context ka thumbs-down sirf yeh batata hai ki kuch galat tha, kya galat tha yeh nahi. Jo correction expected jawaab aur system ke use kiye evidence ko record karti hai, woh shikayat ko eval case bana deti hai. Aur agar correct karna haath se kaam karne se dheema hai, toh koi correct nahi karega, isliye path workaround se sasta hona chahiye warna kuch collect nahi hoga.',

  'Which screen decides most whether users keep trusting an AI feature?':
    'Kaun si screen sabse zyada tay karti hai ki users AI feature par bharosa rakhenge ya nahi?',

  'The refusal or empty state: what it shows when it has nothing good to say':
    'Refusal ya empty state: jab kehne ko kuch achha na ho, tab woh kya dikhata hai',

  'Every system looks good when it works. Trust depends on what happens when it can’t answer. A system that says “I don’t have that” and offers a route to a person earns more trust than one that always produces something. Teams design this screen last or not at all, which is why so many AI features feel unreliable even with good average accuracy.':
    'Har system tab achha lagta hai jab woh kaam karta hai. Bharosa is par tikta hai ki jab woh jawaab nahi de paata tab kya hota hai. Jo system kehta hai “mere paas yeh nahi hai” aur kisi insaan tak pahunchne ka raasta deta hai, use us system se zyada bharosa milta hai jo hamesha kuch na kuch bana deta hai. Teams yeh screen sabse aakhir mein banati hain ya banati hi nahi, isliye achhi average accuracy ke baad bhi itne AI features unreliable lagte hain.',

  'Write the interface contract for an AI feature you know. What does it show when it’s confident, and when it isn’t? What can the user do when it’s wrong? What does the feature still do when the AI is switched off?':
    'Kisi aise AI feature ke liye interface contract likhiye jise aap jaante hain. Jab woh confident ho aur jab na ho, tab woh kya dikhata hai? Jab woh galat ho, tab user kya kar sakta hai? Jab AI band ho, tab bhi feature kya karta hai?',

  'A strong answer treats uncertainty as a design input, not an engineering embarrassment. Confident: the answer with citations that open, and an action the user can take right there. Not confident: the evidence first with the answer shown as a draft, or a clarifying question instead of a guess, and never the same look as a confident answer. Wrong: an edit path that captures the expected answer and the evidence, faster than doing the task by hand, and feeding the failure taxonomy. Switched off: the feature falls back to something that still works, such as search without generated answers, a form without extraction, or a queue without routing. A kill switch is only usable if there’s a working product underneath it.':
    'Ek strong jawaab uncertainty ko design input maanta hai, engineering ki sharmindagi nahi. Confident: citations ke saath jawaab, jo khul jaayein, aur ek action jo user wahin le sake. Confident nahi: pehle evidence, jawaab draft ki tarah, ya guess ki jagah clarifying sawaal, aur kabhi confident jawaab jaisa look nahi. Galat: ek edit path jo expected jawaab aur evidence capture kare, haath se kaam karne se tez ho, aur failure taxonomy mein jaaye. Band: feature aise kaam mein fall back kare jo phir bhi chalta ho, jaise generated jawaab ke bina search, extraction ke bina form, ya routing ke bina queue. Kill switch tabhi use ho sakta hai jab neeche ek chalta hua product ho.',

  'Your assistant gives a confident answer built on a field that the upstream API stopped sending last week. Nothing showed an error. Which of these would have caught it?':
    'Aapka assistant ek aise field par bana confident jawaab deta hai jise upstream API ne pichhle hafte bhejna band kar diya. Kahin koi error nahi dikha. In mein se kaun si cheez ise pakad leti?',

  'Validating the response against a schema before using it':
    'Use karne se pehle response ko schema ke against validate karna',

  'A unit test that checks the missing-field case':
    'Ek unit test jo missing-field case check kare',

  'A contract check that fails loudly instead of quietly filling in a blank':
    'Ek contract check jo khaali jagah chupchaap bharne ki jagah zor se fail ho',

  'Every option except temperature is a way of holding the data to its contract. This is the classic AI failure: nothing threw an error, so nothing raised an alert, and the answer was built on top of a hole. Temperature changes how a sentence is phrased, not whether the data behind it exists.':
    'Temperature ko chhodkar har option data ko uske contract par rakhne ka tareeka hai. Yahi classic AI failure hai: kahin error nahi aaya, isliye alert bhi nahi gaya, aur jawaab ek gadhe ke upar bana diya gaya. Temperature sirf yeh badalta hai ki sentence kaise likha jaata hai, yeh nahi ki uske peeche ka data hai ya nahi.',

  'A stakeholder forwards you a leaderboard and asks why you aren’t using the model at the top. Write the two-sentence reply you would actually send.':
    'Ek stakeholder aapko ek leaderboard forward karte hain aur poochhte hain ki aap sabse upar wala model kyun nahi use kar rahe. Woh do sentence ka jawaab likhiye jo aap asal mein bhejenge.',

  'A leaderboard is a result on somebody else’s test set, so it predicts our task only by luck: the real question is how that model scores on our ten cases, within our latency budget and our cost per task. I can run that this week, and if it wins on the limit that actually binds us, we switch.':
    'Leaderboard kisi aur ke test set par ek result hai, isliye woh hamare task ko sirf ittefaq se predict karta hai: asli sawaal yeh hai ki woh model hamare das cases par, hamare latency budget ke andar aur hamare cost per task par kitna score karta hai. Main yeh isi hafte run kar sakta hoon, aur agar woh us limit par jeet jaata hai jo hamare liye asli roadblock hai, toh hum switch kar lenge.',

  'A good reply does two things. It declines to swap reputation for evidence, and it offers a cheap test that settles the question. A reply that only says no sounds like obstruction, and that’s how these conversations get lost even when the reasoning is right.':
    'Achha jawaab do kaam karta hai. Woh reputation ko evidence ki jagah lene se mana karta hai, aur ek sasta test offer karta hai jo sawaal settle kar de. Jo jawaab sirf naa kehta hai woh rukawat jaisa lagta hai, aur aise hi ye conversations haar jaati hain, chahe reasoning sahi ho.',

  'Your context budget is 8,000 tokens and today’s request needs 9,500. Which part should almost always be dropped first?':
    'Aapka context budget 8,000 tokens hai aur aaj ki request ko 9,500 chahiye. Kaun sa hissa lagbhag hamesha sabse pehle hata dena chahiye?',

  'History is the only one where losing it makes the answer a little worse instead of breaking it. Drop the instructions and the behaviour changes. Drop the evidence and you’re back to a guessing machine. Drop the schema and whatever parses the output breaks. The order of dropping is a design decision, and this is the usual one.':
    'History akeli aisi hai jise khone se jawaab thoda kharab hota hai, toot nahi jaata. Instructions hatayiye toh behaviour badal jaata hai. Evidence hatayiye toh aap wapas guess karne wali machine par aa jaate hain. Schema hatayiye toh jo bhi output parse karta hai woh toot jaata hai. Kya pehle hatana hai, yeh ek design decision hai, aur yeh usual wala hai.',

  'A document is deleted from the source system at 10am. Your index rebuilds every night. What’s the honest description of the time in between?':
    'Source system se ek document subah 10 baje delete hota hai. Aapka index har raat rebuild hota hai. Beech ke time ka sach kya hai?',

  'Retrieval will automatically score the deleted document lower':
    'Retrieval deleted document ko apne aap kam score dega',

  'The chunks are still in the index with their source details, so the assistant can find, quote and cite a document that has been withdrawn, and the citation looks perfectly real. Calling that “briefly out of date” is how teams stop designing for deletion. That gap is a decision, so make it on purpose.':
    'Chunks abhi bhi index mein hain apni source details ke saath, isliye assistant ek hataye gaye document ko dhoondh sakta hai, quote kar sakta hai aur cite kar sakta hai, aur citation bilkul asli lagta hai. Ise “thoda out of date” kehna wahi tareeka hai jisse teams deletion ke liye design karna band kar deti hain. Woh gap ek decision hai, isliye use soch samajhkar rakhiye.',

  'Which of these belong in a tool contract before any model is allowed to call the tool?':
    'Kisi model ko tool call karne dene se pehle, in mein se kya tool contract mein hona chahiye?',

  'Limited choices for parameters, instead of free text':
    'Parameters ke liye free text ki jagah limited choices',

  'Permissions enforced on the server':
    'Server par enforce ki gayi permissions',

  'A clear statement of side effects':
    'Side effects ka saaf bayaan',

  'An instruction in the system prompt asking the model to be careful':
    'System prompt mein model se kehna ki woh careful rahe',

  'The first four are part of the contract, and they hold whatever the model does. The last one is only a request, and chapter 2 already showed that requests bend under pressure. Asking the model to be careful is not a control.':
    'Pehli chaar cheezein contract ka hissa hain, aur model kuch bhi kare woh tikti hain. Aakhri sirf ek request hai, aur chapter 2 mein hum dekh chuke hain ki requests dabav mein jhuk jaati hain. Model se careful rehne ko kehna koi control nahi hai.',

  'Your agent solves 17 of 20 tasks. The fixed workflow it replaced also solves 17 of 20, at a third of the cost and half the delay. What do you ship?':
    'Aapka agent 20 mein se 17 tasks solve karta hai. Jis fixed workflow ko usne replace kiya woh bhi 20 mein se 17 solve karta tha, tihaai cost aur aadhe delay mein. Aap kya ship karenge?',

  'The workflow, because the extra autonomy bought nothing you can measure':
    'Workflow, kyunki zyada autonomy se aisa kuch nahi mila jo aap measure kar sakein',

  'The agent, because it handles cases the workflow can’t':
    'Agent, kyunki woh aise cases sambhalta hai jo workflow nahi sambhal sakta',

  'Neither, because the sample is too small to decide':
    'Dono nahi, kyunki sample itna chhota hai ki decide nahi ho sakta',

  'Autonomy has to earn its risk, cost and delay on a metric you care about. Equal quality at three times the price is a clear result. “It will get better” is a guess about a future model, not evidence about this one. Complexity is a budget, and you should spend it only when it buys something.':
    'Autonomy ko apna risk, cost aur delay us metric par kamaana padta hai jo aapke liye matter karta hai. Barabar quality teen guna keemat par ek saaf result hai. “Yeh behtar ho jaayega” aane wale model ke baare mein andaaza hai, is model ke baare mein evidence nahi. Complexity ek budget hai, aur use tabhi kharch kijiye jab usse kuch mile.',

  'A protocol standardises how your assistant finds and calls a <code>delete_record</code> tool. What has that made safer?':
    'Ek protocol standardise karta hai ki aapka assistant <code>delete_record</code> tool ko kaise dhoondhta aur call karta hai. Isse kya zyada safe hua?',

  'The tool, because the protocol defines how errors work':
    'Tool, kyunki protocol define karta hai ki errors kaise kaam karte hain',

  'The call, because arguments are now checked against a schema':
    'Call, kyunki ab arguments schema ke against check hote hain',

  'The audit trail, because the protocol records calls':
    'Audit trail, kyunki protocol calls ko record karta hai',

  'A standard carries the call, but it doesn’t decide who is allowed to make it. Schema checks and error handling are real benefits, yet neither asks whether this requester may delete this record. That question belongs to a part you have to build yourself, and it is never the model.':
    'Ek standard call ko le jaata hai, lekin yeh decide nahi karta ki use kaun kar sakta hai. Schema checks aur error handling asli fayde hain, lekin dono mein se koi nahi poochhta ki kya yeh requester yeh record delete kar sakta hai. Woh sawaal ek aise hisse ka hai jo aapko khud banana padta hai, aur woh kabhi model nahi hota.',

  'You extract plain text from a real PDF. Which of these are often lost?':
    'Aap ek asli PDF se plain text extract karte hain. In mein se kya aksar kho jaata hai?',

  'Meaning carried by position, such as a heading above a column':
    'Position se jo matlab nikalta hai, jaise column ke upar heading',

  'Body text usually survives. The other three get flattened or dropped completely. That’s why a question about a table can’t be graded against a text extraction: the right answer has to come from something that can actually read a table.':
    'Body text aksar bach jaata hai. Baaki teen flat ho jaate hain ya poori tarah gir jaate hain. Isiliye table ke baare mein sawaal text extraction ke against grade nahi ho sakta: sahi jawaab kisi aisi cheez se aana chahiye jo table asal mein padh sake.',

  'End-to-end answer quality scores 0.88. Retrieval recall scores 0.41. What’s the most likely explanation?':
    'End-to-end answer quality 0.88 score karti hai. Retrieval recall 0.41 score karta hai. Sabse mumkin wajah kya hai?',

  'The model is answering well from its own knowledge instead of from the evidence':
    'Model evidence ki jagah apni knowledge se achha jawaab de raha hai',

  'Groundedness and recall can’t be compared, so nothing follows':
    'Groundedness aur recall ki comparison nahi ho sakti, isliye kuch nikalta nahi',

  'A fluent model often covers for missing evidence well enough to look good end to end. That’s the most dangerous state for a retrieval product, because the demo looks great while the system is guessing. Only a layered score shows it. A single number can’t.':
    'Ek fluent model aksar missing evidence ko itni achhi tarah dhak leta hai ki end to end achha dikhe. Retrieval product ke liye yeh sabse khatarnak haalat hai, kyunki demo shaandaar lagta hai jabki system guess kar raha hota hai. Sirf layered score ise dikhata hai. Ek akela number nahi dikha sakta.',

  'An answer was wrong on Tuesday, but the code hasn’t changed. Which trace fields help you find out why?':
    'Mangalvaar ko ek jawaab galat tha, lekin code nahi badla. Kaun se trace fields se aap pata laga sakte hain ki kyun?',

  'The prompt version in use for that request':
    'Us request ke liye use mein aaya prompt version',

  'Prompt version, retrieved chunk ids and model version are the three things that can change without a deploy, and they’re the three people leave out of a trace. Latency tells you about speed, not correctness. It’s useful, but not for this question.':
    'Prompt version, retrieved chunk ids aur model version, yeh teen cheezein deploy ke bina badal sakti hain, aur yahi teen log trace se chhod dete hain. Latency speed batati hai, correctness nahi. Woh kaam ki hai, lekin is sawaal ke liye nahi.',

  'A colleague says injection isn’t a concern, because the corpus holds only internal documents written by your own staff. Answer them.':
    'Ek colleague kehte hain ki injection koi chinta ki baat nahi, kyunki corpus mein sirf aapke apne staff ke likhe internal documents hain. Unhe jawaab dijiye.',

  'Retrieved content is untrusted input, whoever wrote it. An internal document can be edited by anyone with write access, uploaded by a supplier, or can quote an outside source word for word, and in each case the model can’t tell an instruction from data. The control is the instruction boundary the system enforces when it builds the context, not where the file came from.':
    'Retrieved content untrusted input hai, chahe use kisi ne bhi likha ho. Internal document ko write access wala koi bhi edit kar sakta hai, supplier upload kar sakta hai, ya woh kisi bahari source ko word for word quote kar sakta hai, aur har case mein model instruction aur data mein farq nahi kar paata. Control woh instruction boundary hai jo system context banate waqt enforce karta hai, yeh nahi ki file kahan se aayi.',

  'The reply has to move the argument away from ownership and onto the boundary. “Our own documents” says who you can blame. It doesn’t say whether the text can carry instructions.':
    'Jawaab ko debate ko ownership se hatakar boundary par le jaana hoga. “Hamare apne documents” sirf yeh batata hai ki blame kis par daal sakte hain. Yeh nahi batata ki text mein instructions ho sakte hain ya nahi.',

  'Only the third names a metric, a test set and a tolerance. The first promises something that probabilistic systems can’t deliver. The second can’t be tested. The fourth is a real goal, but it isn’t a criterion yet because no measurement is attached.':
    'Sirf teesra option metric, test set aur tolerance teeno naam leta hai. Pehla aisi cheez ka waada karta hai jo probabilistic systems de hi nahi sakte. Doosra test nahi ho sakta. Chautha asli goal hai, lekin abhi criterion nahi hai kyunki usse koi measurement juda nahi hai.',

  'Your provider announces a price increase with ninety days’ notice. Which of these make switching manageable?':
    'Aapka provider 90 din ke notice par price badhane ka elaan karta hai. In mein se kaun si cheezein switching ko sambhalne layak banati hain?',

  'A provider scorecard that already included the cost of leaving':
    'Provider scorecard jisme chhodne ki cost pehle se shamil thi',

  'A strong preference in the team for the current provider':
    'Team ki current provider ke liye majboot pasand',

  'The first three are your exit plan, whether or not anyone called it that. An evaluation set turns “can we switch?” from a debate into a week of work. In practice, the exit plan and the evaluation set often turn out to be the same thing.':
    'Pehli teen cheezein aapka exit plan hain, chahe kisi ne unhe yeh naam diya ho ya nahi. Evaluation set “kya hum switch kar sakte hain?” ko debate se ek hafte ke kaam mein badal deta hai. Asal mein exit plan aur evaluation set aksar ek hi cheez nikalte hain.',

  'What makes a capstone convincing in a design review?':
    'Design review mein capstone ko kya convincing banata hai?',

  'A working demo of the happy path':
    'Happy path ka chalta hua demo',

  'Failures you found yourself, with before-and-after numbers and the risk that remains':
    'Aapke khud dhoondhe hue failures, before-and-after numbers aur bache hue risk ke saath',

  'Anyone can demo the happy path. You show you understand a system by knowing where it breaks. Show the measurement that proves you fixed part of it, and say plainly what you didn’t solve.':
    'Happy path ka demo koi bhi dikha sakta hai. Aap system samajhte hain yeh tab dikhta hai jab aap jaante hain ki woh kahan toot-ta hai. Woh measurement dikhaiye jo saabit kare ki aapne uska ek hissa fix kiya, aur saaf bataiye ki kya solve nahi kiya.',

  'Which of these is real evidence for scoring yourself 2 out of 3 in strategy?':
    'Strategy mein khud ko 3 mein se 2 score dene ka asli evidence in mein se kya hai?',

  'A score of 2 needs something that someone else can review. Only the memo lives outside your head, and it changed a real decision. Enjoying the topic, getting praise and finishing a course all help, but none of them can be checked.':
    '2 score ke liye aisi cheez chahiye jise koi aur review kar sake. Sirf memo aapke dimaag ke bahar hai, aur usne ek asli decision badla. Topic pasand karna, taareef milna aur course khatam karna sab madad karte hain, lekin inmein se kuch bhi check nahi kiya ja sakta.',

  'Which of these problems is the best fit for an AI capstone?':
    'In mein se kaun si problem AI capstone ke liye sabse achha fit hai?',

  'Grouping tickets means reading and sorting messy text, which is what language models are good at. It also has users you can reach and a cost you can measure. Ordinary software already handles the others well, with a trigger, a formula and a booking form. Using AI there adds cost and errors and no value.':
    'Tickets ko group karne ka matlab hai gande text ko padhna aur sort karna, jo language models achhe se karte hain. Isme users bhi aap tak pahunch mein hain aur cost bhi measure ho sakti hai. Baaki sab ko ordinary software achhe se sambhal leta hai, ek trigger, ek formula aur ek booking form se. Wahan AI lagana cost aur errors badhata hai, value nahi.',

  'Delivery: the summaries were poor':
    'Delivery: summaries kharab thi',

  'Feasibility: the model couldn’t do the job':
    'Feasibility: model yeh kaam kar hi nahi sakta tha',

  'The feature tested well, so delivery and feasibility were fine. The interviews don’t say users rejected it either. They simply never found it. That’s a distribution failure: the product never reached their attention or habits. A feature nobody finds has the same impact as one nobody built.':
    'Feature ne test mein achha kiya, isliye delivery aur feasibility theek the. Interviews yeh bhi nahi kehte ki users ne use reject kiya. Unhone use bas kabhi dhoondha hi nahi. Yeh distribution failure hai: product kabhi unki nazar ya aadat tak pahuncha hi nahi. Jis feature ko koi dhoondh na paaye uska asar utna hi hai jitna jo kabhi bana hi nahi.',

  'The company’s security team, checking where its data goes':
    'Company ki security team, jo dekh rahi hai ki data kahan jaata hai',

  'In B2B, the people who use a product are often not the people who approve it. Security, IT, legal and procurement can each say no. For an AI tool, their first question is usually where the company’s data is sent, and whether it’s stored or used for training. So plan for that review from day one.':
    'B2B mein jo log product use karte hain woh aksar approve karne wale nahi hote. Security, IT, legal aur procurement mein se har koi naa keh sakta hai. AI tool ke liye unka pehla sawaal aksar yeh hota hai ki company ka data kahan bheja jaata hai, aur kya woh store hota hai ya training mein use hota hai. Isliye us review ka plan pehle din se rakhiye.',

  'Feasibility asks whether you can build it: accuracy on your data, speed, and access to the data it needs. Whether users choose it over their current workaround is a value risk. Mixing the two up is how teams build something that works and that nobody wants.':
    'Feasibility poochhti hai ki kya aap ise bana sakte hain: aapke data par accuracy, speed, aur jis data ki zaroorat hai uska access. Users ise apne current workaround ki jagah chunenge ya nahi, yeh value risk hai. In dono ko mila dena aisa hi hota hai ki teams kuch aisa bana leti hain jo chalta hai aur jise koi nahi chahta.',

  'You’re interviewing a support lead about their weekly ticket report. Which question gives you the most reliable evidence?':
    'Aap ek support lead ka unki weekly ticket report ke baare mein interview le rahe hain. Kaun sa sawaal aapko sabse bharosemand evidence dega?',

  'Only the third question asks about something that really happened. The others ask for opinions or predictions, and people are bad at predicting what they’ll do and tend to agree with the interviewer. A real story about the past shows you their actual workflow, workarounds and pains.':
    'Sirf teesra sawaal kisi aisi baat ke baare mein poochhta hai jo asal mein hui. Baaki opinions ya predictions maangte hain, aur log yeh predict karne mein kharab hote hain ki woh kya karenge, aur interviewer se sehmat ho jaate hain. Beete hue waqt ki asli kahani aapko unka actual workflow, workarounds aur dikkatein dikhati hai.',

  'A leading question hints at the answer the interviewer wants. “Isn’t it frustrating…” invites a yes, whether or not it’s true. Ask “What was the hardest part of last week’s report?” instead, and let them tell you what is hard.':
    'Leading question us jawaab ki taraf ishaara karta hai jo interviewer sunna chahta hai. “Isn’t it frustrating…” haan ko bulata hai, chahe woh sach ho ya nahi. Uski jagah poochhiye “Pichhli report ka sabse mushkil hissa kya tha?” aur unhe batane dijiye ki mushkil kya hai.',

  'After five interviews, your persona includes the line: “Busy, data-driven manager who wants AI to save time.” What’s the main problem with it?':
    'Paanch interviews ke baad aapke persona mein yeh line hai: “Busy, data-driven manager who wants AI to save time.” Iski main problem kya hai?',

  'It’s too short':
    'Yeh bahut chhoti hai',

  'It can’t be traced to any interview note, and could describe almost anyone':
    'Ise kisi interview note se trace nahi kiya ja sakta, aur yeh lagbhag kisi par bhi lagu ho sakti hai',

  'Personas shouldn’t mention AI':
    'Personas mein AI ka zikr nahi hona chahiye',

  'A persona is a summary of evidence. This line has no interview number next to it, and it fits nearly every manager alive, so it gives the team nothing to design for. Replace it with specific detail you can trace, such as “Reads about 300 tickets every Monday and skims most of them (interviews 1, 4).”':
    'Persona evidence ka summary hota hai. Is line ke saath koi interview number nahi hai, aur yeh lagbhag har manager par fit ho jaati hai, isliye team ko design karne ke liye kuch nahi deti. Isse specific detail se badliye jise trace kiya ja sake, jaise “Har Monday lagbhag 300 tickets padhta hai aur zyadatar skim karta hai (interviews 1, 4).”',

  'The support software market is worth $10 billion, and we’ll take 1%':
    'Support software market $10 billion ka hai, aur hum 1% le lenge',

  'A bottom-up estimate multiplies a number of customers you can count by what each would realistically pay. The top-down version starts from a report and assumes a share, with no way of getting it. Growth rates and investor excitement aren’t estimates at all.':
    'Bottom-up estimate un customers ki ginti ko, jinhe aap gin sakte hain, us amount se multiply karta hai jo har ek realistically dega. Top-down version ek report se shuru hota hai aur ek share maan leta hai, jise paane ka koi tareeka nahi. Growth rates aur investors ka josh estimates hi nahi hain.',

  'You’re building an AI tool that finds themes in support tickets. Which of these is the status-quo competitor?':
    'Aap ek AI tool bana rahe hain jo support tickets mein themes dhoondhta hai. In mein se status-quo competitor kaun hai?',

  'The status quo is whatever customers do today if they buy nothing new. Here, that’s reading and tagging by hand. It’s free, familiar and good enough, which makes it the hardest competitor to beat. The start-up is a direct competitor, and the built-in reporting is an indirect one.':
    'Status quo woh hai jo customers aaj karte hain agar woh kuch naya na khareedein. Yahan woh haath se padhna aur tag karna hai. Yeh free hai, jaana-pehchaana hai aur kaafi achha hai, isliye ise haraana sabse mushkil hai. Start-up direct competitor hai, aur built-in reporting indirect competitor.',

  'A competitor can match a prompt in days by trying their own versions. Deep integrations take years, correction data exists only where users make corrections, and security approval is earned slowly. Real advantages at the application layer come from workflow, unique data and trust, not from the prompt or the model.':
    'Ek competitor prompt ko kuch dinon mein match kar sakta hai, apne versions try karke. Deep integrations banne mein saal lagte hain, correction data wahin hota hai jahan users corrections karte hain, aur security approval dheere dheere kamaya jaata hai. Application layer par asli advantage workflow, unique data aur trust se aate hain, prompt ya model se nahi.',

  'Which of these is a strategy, and not a vision, a goal or a plan?':
    'In mein se kaun si strategy hai, vision, goal ya plan nahi?',

  'A strategy makes choices: which users, and how you’ll win. The first option is a goal with no diagnosis behind it, the second is a vision, and the fourth is a plan for this quarter. Only the third says who you’ll serve and, by implication, who you won’t.':
    'Strategy choices karti hai: kaun se users, aur aap kaise jeetenge. Pehla option bina diagnosis ka goal hai, doosra vision hai, aur chautha is quarter ka plan hai. Sirf teesra batata hai ki aap kise serve karenge aur, ishaare se, kise nahi.',

  'An opportunity has reach 500, impact 2, confidence 50% and effort 2 person-months. What’s its RICE score?':
    'Ek opportunity ka reach 500, impact 2, confidence 50% aur effort 2 person-months hai. Uska RICE score kya hai?',

  'RICE = (reach × impact × confidence) ÷ effort = (500 × 2 × 0.5) ÷ 2 = 250. Confidence is a percentage, so 50% becomes 0.5, which halves the score to reflect weak evidence.':
    'RICE = (reach × impact × confidence) ÷ effort = (500 × 2 × 0.5) ÷ 2 = 250. Confidence ek percentage hai, isliye 50% 0.5 ban jaata hai, jo score ko aadha kar deta hai taaki kamzor evidence dikhe.',

  'RICE ignores dependencies, deadlines and risks that could end the product, so strategy should override it in exactly those cases. A privacy review scores low on reach and impact, but without it no enterprise customer can buy. Team interest isn’t a reason to override the score.':
    'RICE dependencies, deadlines aur un risks ko ignore karta hai jo product ko khatam kar sakte hain, isliye strategy ko ussi jagah RICE ko override karna chahiye. Privacy review reach aur impact mein kam score karta hai, lekin uske bina koi enterprise customer khareed nahi sakta. Team ki dilchaspi score ko override karne ki wajah nahi hai.',

  'Which of these is an outcome key result, and not an output or an activity?':
    'In mein se kaun sa outcome key result hai, output ya activity nahi?',

  'An outcome describes what changes for users. Shipping alerts and writing a PRD are outputs, things the team produces, and weekly meetings are an activity. Outputs are useful steps, but you can deliver all of them and still change nothing for users.':
    'Outcome batata hai ki users ke liye kya badalta hai. Alerts ship karna aur PRD likhna outputs hain, yaani team jo banati hai, aur weekly meetings activity hain. Outputs kaam ke steps hain, lekin aap sab deliver kar sakte hain aur users ke liye phir bhi kuch nahi badalta.',

  'The easy way to send more alerts is to send useless ones. A guardrail on how many alerts users dismiss closes that loophole, so the only way to hit the key result is to send alerts people value. Latency and velocity don’t measure usefulness, and the third option just repeats the key result.':
    'Zyada alerts bhejne ka aasaan tareeka bekaar alerts bhejna hai. Users kitne alerts dismiss karte hain us par guardrail yeh loophole band kar deta hai, isliye key result tak pahunchne ka ek hi raasta bachta hai: aise alerts bhejna jinki log kadar karein. Latency aur velocity usefulness nahi naapte, aur teesra option bas key result ko dohrata hai.',

  'A pre-mortem happens before the work starts. Everyone imagines the project failed six months from now and writes down the reasons. People will name risks in an imagined failure that they wouldn’t raise about a live plan. A review after the failure is a post-mortem.':
    'Pre-mortem kaam shuru hone se pehle hota hai. Sab imagine karte hain ki project chhe mahine baad fail ho gaya aur wajahein likhte hain. Log imagined failure mein woh risks batate hain jo woh chalte hue plan ke baare mein nahi uthate. Failure ke baad ka review post-mortem hota hai.',

  'A testable criterion names a test set, a measure and a threshold, so two people would agree on whether it passed. “Accurate and helpful” and “users are happy” can’t be measured as written. “Never makes a mistake” is impossible for a model whose output varies, so it can only ever fail.':
    'Testable criterion test set, measure aur threshold ka naam leta hai, taaki do log is par sehmat hon ki woh pass hua ya nahi. “Accurate and helpful” aur “users are happy” jaise likhe hain waise measure nahi ho sakte. “Kabhi galti nahi karta” aise model ke liye impossible hai jiska output badalta hai, isliye woh sirf fail ho sakta hai.',

  'A vertical slice goes through every layer, from input to user value, in the thinnest possible form, so a real user can try it early. The other options build one layer at a time, so nothing works for a user until the last layer is done.':
    'Vertical slice har layer se guzarta hai, input se user value tak, sabse patle roop mein, taaki ek asli user use jaldi try kar sake. Baaki options ek time par ek layer banate hain, isliye jab tak aakhri layer na ban jaye user ke liye kuch kaam nahi karta.',

  'In a usability test, the user can’t find the button to correct a wrong theme. What should you do?':
    'Usability test mein user galat theme ko correct karne wala button nahi dhoondh paata. Aapko kya karna chahiye?',

  'End the test, because this user isn’t a good fit':
    'Test khatam kijiye, kyunki yeh user sahi fit nahi hai',

  'The moment a user gets stuck is your finding. If you help, you lose it, and your real users won’t have you sitting next to them. Note what happened, let them try for a while, and ask about it afterwards.':
    'Jis pal user atakta hai, wahi aapka finding hai. Agar aap madad kar denge toh woh kho jaayega, aur aapke asli users ke paas aap baithe nahi honge. Dekhiye kya hua, unhe thodi der koshish karne dijiye, aur baad mein uske baare mein poochhiye.',

  'Your company’s assistant doesn’t know about a refund-policy change made last month. What’s the best fix?':
    'Aapki company ke assistant ko pichhle mahine hui refund-policy ke badlav ka pata nahi. Sabse achha fix kya hai?',

  'The model is missing a fact that changes over time, so hand it the fact at request time with retrieval. Fine-tuning teaches behaviour, not facts, and would go out of date at the next policy change. A larger model still hasn’t seen your policy, and telling it to be accurate can’t supply information it doesn’t have.':
    'Model ke paas ek aisa fact nahi hai jo waqt ke saath badalta hai, isliye request ke time retrieval se woh fact use de dijiye. Fine-tuning behaviour sikhati hai, facts nahi, aur agli policy badalte hi purani ho jaayegi. Bade model ne bhi aapki policy nahi dekhi hai, aur use accurate rehne ko kehna woh information nahi de sakta jo uske paas hai hi nahi.',

  'The style guide shapes this request only; the model’s weights don’t change':
    'Style guide sirf is request ko shape karti hai; model ke weights nahi badalte',

  'Text in a prompt only shapes the answer to that one request, and then it’s forgotten. Only training, such as fine-tuning, changes the weights. So if you need the style guide every time, your application has to send it every time.':
    'Prompt mein text sirf us ek request ke jawaab ko shape karta hai, aur phir bhula diya jaata hai. Sirf training, jaise fine-tuning, weights badalti hai. Isliye agar aapko style guide har baar chahiye, toh aapki application ko use har baar bhejna padega.',

  'Which of these tasks suits a predictive model better than a generative one?':
    'In mein se kaun sa task generative model ke mukable predictive model ke liye zyada suit karta hai?',

  'Predicting cancellations means giving a probability from structured data, which is a classic predictive task. A small predictive model does it cheaply, quickly and consistently. The other three tasks produce new text, and that’s what generative models are for.':
    'Cancellations predict karne ka matlab structured data se ek probability dena hai, jo ek classic predictive task hai. Ek chhota predictive model ise sasta, tez aur consistent tareeke se karta hai. Baaki teen tasks naya text banate hain, aur generative models usi ke liye hain.',

  'You’re interviewing a prospect about pricing. Which question gives you the most reliable evidence?':
    'Aap ek prospect ka pricing ke baare mein interview le rahe hain. Kaun sa sawaal aapko sabse bharosemand evidence dega?',

  'What people already spend is evidence. What they say they’d do is not, because people say yes to made-up prices to be polite. What they pay for today, and who signed it off, shows you the real alternative and the real buyer.':
    'Log pehle se jo kharch karte hain woh evidence hai. Woh jo karne ka kehte hain woh nahi, kyunki log made-up prices par politeness ke liye haan keh dete hain. Woh aaj kis cheez ka paisa dete hain, aur kisne use sign off kiya, yeh aapko asli alternative aur asli buyer dikhata hai.',

  'A customer’s reports cost $12 a month to serve. They receive 4 reports, and accept 3. What’s the cost per successful report?':
    'Ek customer ki reports ko serve karne mein $12 mahina lagta hai. Unhe 4 reports milti hain, aur woh 3 accept karte hain. Har successful report ki cost kitni hai?',

  'Divide the total cost by the reports that worked: $12 ÷ 3 = $4. A rejected report still cost you money to make. If you divide by all four ($3), the product looks cheaper than it is.':
    'Total cost ko un reports se divide kijiye jo kaam ki thi: $12 ÷ 3 = $4. Reject hui report banane mein bhi paisa lagta hai. Agar aap chaaron se divide karein ($3), toh product asli se sasta dikhta hai.',

  'With a flat seat price, a heavy user costs you more but pays the same. An allowance with an extra charge above it makes revenue grow with usage, so the margin holds. Hosting is usually a small line next to model and support costs.':
    'Flat seat price par heavy user aapko zyada mehnga padta hai lekin paisa wahi deta hai. Allowance ke upar extra charge se revenue usage ke saath badhta hai, isliye margin bacha rehta hai. Hosting aksar model aur support costs ke saamne chhoti line hoti hai.',

  'Activation is the first time a user gets the value the product promises. Signing up and installing come before that value. Inviting a colleague is referral, which usually comes after activation.':
    'Activation woh pehla moment hai jab user ko woh value milti hai jiska product waada karta hai. Sign up aur install us value se pehle aate hain. Colleague ko invite karna referral hai, jo aksar activation ke baad aata hai.',

  'Users already say they value it, so motivation is unlikely to be the gap. Prompts are the cheapest thing to check and fix. If nothing reminds them just when they plan their week, the habit never starts.':
    'Users pehle se kehte hain ki unhe yeh kaam ka lagta hai, isliye motivation shayad gap nahi hai. Prompts check aur fix karne ki sabse sasti cheez hain. Agar jis waqt woh apna hafta plan karte hain tab unhe kuch yaad nahi dilata, toh aadat shuru hi nahi hoti.',

  'Which of these is a true network effect, and not virality?':
    'In mein se kaun sa asli network effect hai, virality nahi?',

  'In a network effect, the product gets better for existing users as more people join. The other three bring in new users, which is virality, but they don’t improve the product for anyone already using it.':
    'Network effect mein jaise jaise zyada log judte hain, existing users ke liye product behtar hota hai. Baaki teen naye users laate hain, yaani virality, lekin jo pehle se use kar rahe hain unke liye product behtar nahi karte.',

  'An input metric is something the team can push on that should move the North Star. Better themes lead to more teams acting on them. Revenue is a result, and the others are too far from the behaviour you care about.':
    'Input metric woh cheez hai jise team dhakel sakti hai aur jo North Star ko hilana chahiye. Behtar themes se zyada teams unpar action leti hain. Revenue ek result hai, aur baaki us behaviour se bahut door hain jiski aapko parwah hai.',

  'Your first cohort is 12 design partners you recruited personally. Their week-8 retention is 75%. What’s the main risk in using this number?':
    'Aapka pehla cohort 12 design partners ka hai jinhe aapne khud recruit kiya. Unka week-8 retention 75% hai. Is number ko use karne mein main risk kya hai?',

  'They’re more motivated than typical users, so retention will look higher than it will be':
    'Woh aam users se zyada motivated hain, isliye retention asli se zyada dikhega',

  'This is selection bias. People you recruited personally are unusually engaged and want to help you. Before you trust the number, compare them with users who found the product on their own.':
    'Yeh selection bias hai. Jinhe aapne khud recruit kiya woh bahut zyada engaged hote hain aur aapki madad karna chahte hain. Number par bharosa karne se pehle unki comparison un users se kijiye jinhe product khud mila.',

  'Your B2B product has 60 accounts. You want to test a new onboarding flow, and you expect a 5-point rise in activation from a 20% baseline. What should you do?':
    'Aapke B2B product ke 60 accounts hain. Aap ek naye onboarding flow ko test karna chahte hain, aur 20% baseline se activation mein 5 point badhne ki ummeed hai. Aapko kya karna chahiye?',

  'Accept that an A/B test can’t detect this effect; use observed sessions and a careful before-and-after comparison, and say it’s weaker evidence':
    'Maaniye ki A/B test yeh effect detect nahi kar sakta; observed sessions aur dhyaan se kiya before-and-after comparison use kijiye, aur kahiye ki yeh kamzor evidence hai',

  'Skip measurement, since small products don’t need it':
    'Measurement chhod dijiye, kyunki chhote products ko iski zaroorat nahi',

  'At a 20% baseline, spotting a 5-point change needs about 1,000 accounts per group. With 30, the test can’t give a reliable answer, and stopping early makes it worse. Use other evidence, and be honest about how strong it is.':
    '20% baseline par 5 point ka badlav pakadne ke liye har group mein lagbhag 1,000 accounts chahiye. 30 ke saath test bharosemand jawaab nahi de sakta, aur jaldi rok dene se aur bura hota hai. Doosra evidence use kijiye, aur ye imaandaari se bataiye ki woh kitna majboot hai.',

  'You built a prototype in a prompt-to-app builder. Before sharing the link, what’s the most important check?':
    'Aapne prompt-to-app builder mein ek prototype banaya. Link share karne se pehle sabse zaroori check kya hai?',

  'That the model API key isn’t in the front-end code, and the database has access rules':
    'Ki model API key front-end code mein nahi hai, aur database mein access rules hain',

  'Generated apps often put keys in the browser, where anyone can copy them, and create databases that anyone can read. Either one can leak data or run up your bill. So fix both before anyone else sees the link.':
    'Generated apps aksar keys browser mein daal dete hain, jahan koi bhi unhe copy kar sakta hai, aur aise databases bana dete hain jinhe koi bhi padh sakta hai. Dono mein se koi bhi data leak kar sakta hai ya aapka bill badha sakta hai. Isliye link kisi ko dikhane se pehle dono fix kijiye.',

  'No-code builders usually win on speed to a first demo. Code in a normal repository, with tests and history, is easier for a team to maintain and change. That matters once real users depend on it.':
    'No-code builders aksar first demo ki speed mein jeette hain. Normal repository mein code, tests aur history ke saath, team ke liye maintain aur change karna aasaan hota hai. Yeh tab matter karta hai jab asli users us par depend karne lagte hain.',

  'Your agent reads customer emails, can search your internal wiki, and can send Slack messages to any channel. What’s the safest change?':
    'Aapka agent customer emails padhta hai, aapka internal wiki search kar sakta hai, aur kisi bhi channel mein Slack messages bhej sakta hai. Sabse safe badlav kya hai?',

  'This agent has the lethal trifecta: private data, untrusted input (the emails) and a way to send data out. A prompt can’t guarantee safety, and logging only tells you afterwards. Narrowing where it can send, and requiring approval, closes the exit path.':
    'Is agent ke paas lethal trifecta hai: private data, untrusted input (emails) aur data bahar bhejne ka raasta. Prompt safety ki guarantee nahi de sakta, aur logging aapko baad mein hi batati hai. Jahan woh bhej sakta hai use tang karna, aur approval maangna, bahar nikalne ka raasta band kar deta hai.',

  'You built a weekly report flow as a fixed workflow and as an agent. The workflow succeeds 19 times in 20, in 40 seconds. The agent succeeds 17 in 20, in 75 seconds. The steps are the same every week. What should you ship?':
    'Aapne weekly report flow ko fixed workflow ke roop mein bhi banaya aur agent ke roop mein bhi. Workflow 20 mein 19 baar 40 seconds mein succeed karta hai. Agent 20 mein 17 baar 75 seconds mein. Steps har hafte wahi hain. Aapko kya ship karna chahiye?',

  'When the steps don’t vary, a fixed workflow is usually more reliable and faster, and a failure points straight at one step. Agents earn their place when the steps really differ from case to case.':
    'Jab steps badalte nahi, toh fixed workflow aksar zyada reliable aur tez hota hai, aur failure seedha ek step ki taraf ishaara karta hai. Agents ki jagah tab banti hai jab steps case-case mein sach mein alag hon.',

  'Real users will find problems you didn’t. A rollback you’ve tested lets you undo a bad change in minutes. The others matter later, or not at all, for a first launch.':
    'Asli users aisi problems dhoondhenge jo aapne nahi dhoondhi. Jis rollback ko aapne test kiya hai woh ek kharab badlav ko kuch minutes mein undo kar deta hai. Baaki cheezein pehle launch ke liye baad mein matter karti hain, ya bilkul nahi.',

  'Treat behaviour as the stronger evidence, then ask users why they don’t use it':
    'Behaviour ko zyada majboot evidence maniye, phir users se poochhiye ki woh ise kyun use nahi karte',

  'What people do is stronger evidence than what they say, and the gap is a finding in itself. Asking why often shows the feature is hard to find or turns up at the wrong moment. That leads to a better fix than deleting it or building more.':
    'Log kya karte hain woh evidence unke kehne se zyada majboot hai, aur yeh gap khud ek finding hai. Kyun poochhne par aksar pata chalta hai ki feature dhoondhna mushkil hai ya galat waqt par aata hai. Isse behtar fix milta hai, use delete karne ya aur banane se.',

  'This one names your decision, the option you turned down, how you decided and a result you can measure. The others describe interest, activity or a title, and a recruiter can’t check any of those.':
    'Yeh aapka decision, jo option aapne chhoda, aapne kaise decide kiya aur ek measurable result batata hai. Baaki dilchaspi, activity ya title batate hain, aur recruiter inme se kuch check nahi kar sakta.',

  'Start by checking the data. Many sudden drops come from broken tracking, a release or a calendar effect. Once you’ve confirmed the drop is real, split it by segment and by step to find the cause.':
    'Pehle data check kijiye. Bahut saare achanak girawat broken tracking, ek release ya calendar effect se aate hain. Jab aap confirm kar lein ki girawat asli hai, tab use segment aur step ke hisaab se todkar wajah dhoondhiye.',

  'Say that you’ve never really had a project fail':
    'Kahiye ki aapka kabhi koi project asal mein fail nahi hua',

  'Interviewers want to see whether you learn from evidence. A clear account without excuses, ending with a change you made, shows exactly that. Blaming others or dodging the question suggests you’d do the same at work.':
    'Interviewers dekhna chahte hain ki aap evidence se seekhte hain ya nahi. Bina bahane ke ek saaf kahani, jo aapke kiye ek badlav par khatam ho, wahi dikhati hai. Doosron ko doshi thehrana ya sawaal taalna yeh ishaara deta hai ki aap kaam par bhi aisa hi karenge.',

  'Business: the buyer, price, margin and acquisition logic aren’t credible yet':
    'Business: buyer, price, margin aur acquisition logic abhi credible nahi hain',

  'Each gate needs its own evidence. Technical strength doesn’t show that anyone will pay, or that each customer makes you money. Add the cost model and pricing from B1 before the defence.':
    'Har gate ko apna evidence chahiye. Technical strength yeh nahi dikhati ki koi paisa dega, ya ki har customer se aapko kamai hoti hai. Defence se pehle B1 ka cost model aur pricing jodiye.',

});
