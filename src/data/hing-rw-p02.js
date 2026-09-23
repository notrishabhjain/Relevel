/* Hinglish: p02 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Context windows and statelessness: why models forget':
    'Context windows aur statelessness: models bhoolte kyun hain',
  'Every call has a size limit, and the model forgets everything between calls. You will prove both in code, build a simple chat memory yourself, and measure what it costs.':
    'Har call ki ek size limit hoti hai, aur model calls ke beech sab kuchh bhool jaata hai. Aap dono ko code mein prove karenge, khud ek simple chat memory banayenge, aur naapenge ki uski cost kitni hai.',
  'Explain what a context window is, and what it does not protect you from.':
    'Samjhaana ki context window kya hai, aur woh kis cheez se nahi bachaati.',
  'Explain how any chat “memory” feature actually works.':
    'Samjhaana ki koi bhi chat “memory” feature asal mein kaise kaam karta hai.',
  'Predict what a long conversation will cost before anyone builds it.':
    'Kisi ke banaane se pehle hi andaaza lagana ki lambi baatcheet kitne ki padegi.',
  'Estimate the cost of a real feature':
    'Ek asli feature ki cost ka andaaza lagaiye',
  'Answer the question a finance director will eventually ask: what will this cost? Use numbers you produce yourself, not a vendor’s estimate.':
    'Us sawaal ka jawab dijiye jo finance director kabhi na kabhi poochhega: iski cost kya hogi? Vendor ke andaaze ki jagah apne nikaale numbers use kijiye.',
  'Pick one small feature your team could ship, such as a support-ticket summariser, a drafting aid or an FAQ bot. Describe it in one sentence.':
    'Ek chhota feature chuniye jo aapki team ship kar sakti hai, jaise support-ticket summariser, drafting aid ya FAQ bot. Ek sentence mein uska varnan kijiye.',
  'Write the request it would send as a real call in your <code>chapter-1</code> notebook, using a real example from your work. Run it.':
    'Jo request woh bhejega use apne <code>chapter-1</code> notebook mein ek asli call ki tarah likhiye, apne kaam ke asli example ke saath. Chalaiye.',
  'Record <code>prompt_tokens</code> and <code>completion_tokens</code>. Do this for three realistic inputs, and take the average.':
    '<code>prompt_tokens</code> aur <code>completion_tokens</code> record kijiye. Teen realistic inputs ke saath kijiye, aur average nikaaliye.',
  'Turn it into a conversation. Send the growing history for five turns, and print <code>prompt_tokens</code> at each turn. List the five numbers.':
    'Ise baatcheet banaiye. Paanch turns tak badhti history bhejiye, aur har turn par <code>prompt_tokens</code> print kijiye. Paancho numbers likhiye.',
  'Find your provider’s price per million tokens. Work out a cost per query, then a cost per 1,000 conversations.':
    'Apne provider ka per million tokens price dhoondhiye. Per query cost nikaaliye, phir 1,000 baatcheeton ki cost.',
  'Write the one sentence you would say in a budget meeting: the figure, and the assumption most likely to make it wrong.':
    'Woh ek sentence likhiye jo aap budget meeting mein kahenge: figure, aur woh assumption jo use galat kar sakta hai.',
  'You can recalculate the cost per query in front of someone, from numbers on your own screen.':
    'Aap kisi ke saamne apni screen ke numbers se per query cost dobara nikaal sakte hain.',
  'You can name the assumption most likely to break the estimate, and it is more specific than “the model might change”.':
    'Aap woh assumption bata sakte hain jo andaaze ko sabse zyada tod sakta hai, aur woh “model badal sakta hai” se zyada specific hai.',
  'Models generate text, they do not look it up':
    'Models text banaate hain, dhoondhte nahi',
  'So a confident tone is not evidence.':
    'Isliye confident tone saboot nahi hai.',
  'You pay per token':
    'Aap per token paise dete hain',
  'And you have read the usage block yourself.':
    'Aur aapne khud usage block padha hai.',
  'You will run a growing conversation and watch the cost.':
    'Aap ek badhti hui baatcheet chalaayenge aur cost dekhenge.',
  'Keep using your <code>chapter-1</code> notebook. You need the usage code from the last chapter. This time you will run it in a loop and watch the numbers grow.':
    'Apna <code>chapter-1</code> notebook hi use karte rahiye. Aapko pichhle chapter ka usage code chahiye. Is baar aap use loop mein chalaayenge aur numbers badhte dekhenge.',
  'The context window is a size limit':
    'Context window ek size limit hai',
  'Everything you send in one call has to fit within a size limit: the question, any instructions, any documents, and the answer that comes back. This limit is called the <strong>context window</strong>.':
    'Ek call mein jo kuchh bhejte hain woh ek size limit mein aana chahiye: sawaal, instructions, documents, aur wapas aane wala jawab. Is limit ko <strong>context window</strong> kehte hain.',
  'The context window limits the size of one request. It is not memory.':
    'Context window ek request ka size seemit karti hai. Yeh memory nahi hai.',
  'The model does not remember between calls':
    'Model calls ke beech yaad nahi rakhta',
  'A model keeps nothing between calls. Each request starts from nothing, so the model does not know you spoke to it a minute ago. The term for this is <strong>stateless</strong>.':
    'Model calls ke beech kuchh nahi rakhta. Har request shunya se shuru hoti hai, isliye model ko pata nahi hota ki aapne ek minute pehle usse baat ki thi. Iske liye term hai <strong>stateless</strong>.',
  'Prove the model forgets':
    'Prove kijiye ki model bhool jaata hai',
  'Make two separate calls, one after the other:':
    'Ek ke baad ek do alag calls kijiye:',
  'The second reply does not know your name. This is not a bug or a setting. Nothing is carried from one call to the next.':
    'Doosre reply ko aapka naam nahi pata. Yeh na bug hai na setting. Ek call se agli call tak kuchh nahi jaata.',
  'How chat apps create memory':
    'Chat apps memory kaise banaate hain',
  'So how does a chat assistant seem to remember what you said five messages ago? The app sends it again. The model only sees the messages in the current call.':
    'To chat assistant ko paanch message pehle ki baat kaise yaad lagti hai? App use dobara bhejta hai. Model sirf current call ke messages dekhta hai.',
  'An app can do this in several ways: send the full history, send a summary, look up persistent user memory, or store task state externally. This next step uses the simplest one: sending the history again.':
    'App yeh kai tareekon se kar sakta hai: poori history bhejna, summary bhejna, persistent user memory dhoondhna, ya task state externally store karna. Agla step sabse simple tareeka use karta hai: history dobara bhejna.',
  'Build a simple chat memory':
    'Ek simple chat memory banaiye',
  'Now it knows your name is Sam, because this call includes the earlier message. <code>prompt_tokens</code> is higher, because you sent the history again. You have built the most common memory pattern and measured its cost. Production apps may use summaries, saved facts or task state instead.':
    'Ab use pata hai ki aapka naam Sam hai, kyunki is call mein pichhla message shaamil hai. <code>prompt_tokens</code> zyada hai, kyunki aapne history dobara bheji. Aapne sabse common memory pattern banaya aur uski cost naapi. Production apps iski jagah summaries, save kiye facts ya task state use kar sakte hain.',
  'This tool shows how the cost grows over a conversation:':
    'Yeh tool dikhata hai ki baatcheet ke saath cost kaise badhti hai:',
  'Summary':
    'Saar',
  'You now have three facts, and each one affects product decisions:':
    'Ab aapke paas teen facts hain, aur har ek product decisions par asar daalta hai:',
  '<strong>Models generate text.</strong> A confident tone tells you nothing, so you need a way to check answers.':
    '<strong>Models text banaate hain.</strong> Confident tone kuchh nahi batata, isliye jawab check karne ka tareeka chahiye.',
  '<strong>There is a size limit.</strong> You cannot send everything you have. Choosing what to send is a design decision.':
    '<strong>Size limit hai.</strong> Aap apne paas ka sab kuchh nahi bhej sakte. Kya bhejna hai, yeh design decision hai.',
  '<strong>Models forget.</strong> Memory is something your product builds and pays for on every message. The model vendor does not provide it.':
    '<strong>Models bhool jaate hain.</strong> Memory aapka product banata hai aur har message par uske paise deta hai. Model vendor ise nahi deta.',
  'Write two sentences explaining to a colleague why a long chat with an AI costs more than a short one. Use plain words, and nothing you could not defend if they asked a follow-up question.':
    'Ek colleague ko do sentences mein samjhaaiye ki AI ke saath lambi chat chhoti se mehngi kyun padti hai. Seedhe shabd use kijiye, aur kuchh aisa nahi jise follow-up sawaal par defend na kar sakein.',
  'A good answer covers what happens and what it means. <strong>What happens:</strong> the model only sees the context the app sends, and sending a growing history makes each request larger. <strong>What it means:</strong> the cost of a conversation depends on how the app manages that context, so you need to measure it rather than assume it.':
    'Achha jawab batata hai ki kya hota hai aur uska matlab kya hai. <strong>Kya hota hai:</strong> model sirf wahi context dekhta hai jo app bhejta hai, aur badhti history bhejne se har request badi hoti jaati hai. <strong>Matlab kya hai:</strong> baatcheet ki cost is par nirbhar hai ki app context kaise manage karta hai, isliye use maan lene ki jagah naapna chahiye.',
  'System prompts, temperature and hallucination':
    'System prompts, temperature aur hallucination',
  'You have two main controls over a model: the system prompt and temperature. You will use both, make a model invent an answer, suppress it with an instruction, and then break your own fix.':
    'Model par aapke do main controls hain: system prompt aur temperature. Aap dono use karenge, model se ek jawab banwaayenge, ek instruction se use rokenge, aur phir apna hi fix todenge.',
  'Explain what a system prompt is and why it is sent with every message.':
    'Samjhaana ki system prompt kya hai aur use har message ke saath kyun bheja jaata hai.',
  'Tell the difference between making a failure rarer and removing its cause.':
    'Failure ko kam hona aur uski wajah hatana, in dono ka farq bata paana.',
  'Write a system prompt and test it':
    'Ek system prompt likhiye aur test kijiye',
  'A real product needs more than one sentence of instruction. It needs a written system prompt that is reviewed like any other procedure, because it defines how the product behaves. Write one. You will use it again in Chapter 7.':
    'Asli product ko ek sentence ki instruction se zyada chahiye. Use ek likha hua system prompt chahiye jiska review kisi bhi procedure ki tarah ho, kyunki wahi tay karta hai ki product kaise behave karega. Ek likhiye. Chapter 7 mein aap ise phir use karenge.',
  'Pick an assistant for your own field, such as a policy desk, a claims helper or an internal handbook bot. Write one line on who uses it and why.':
    'Apne field ke liye ek assistant chuniye, jaise policy desk, claims helper ya internal handbook bot. Ek line likhiye ki use kaun use karta hai aur kyun.',
  'Draft half a page: how it should sound, what it must never do, and the exact words it should use when it cannot verify something.':
    'Aadhe page ka draft likhiye: woh kaisa sunna chahiye, use kya kabhi nahi karna, aur jab woh kuchh verify na kar sake to kaunse exact shabd use kare.',
  'Cover the edge cases. What should it do with a question it can only partly answer? A question in another language? A user who insists?':
    'Edge cases cover kijiye. Jis sawaal ka woh sirf aadha jawab de sake, uske saath kya kare? Doosri language ke sawaal ke saath? Zid karne wale user ke saath?',
  'Put it in your <code>chapter-2</code> notebook as the system message, and run your fake-scheme question against it. Fix any wording that lets an invented answer through.':
    'Ise apne <code>chapter-2</code> notebook mein system message ki tarah daaliye, aur uske khilaaf apna fake-scheme wala sawaal chalaiye. Jo wording banaaya hua jawab nikalne de, use theek kijiye.',
  'Write three pushy user messages designed to beat your own system prompt. Run all three, and note which ones succeed.':
    'Apne hi system prompt ko harane ke liye teen zor dene wale user messages likhiye. Teeno chalaiye, aur note kijiye ki kaunse safal hue.',
  'Revise the system prompt once using what you learned. Save the final version for Chapter 7.':
    'Jo seekha uske aadhaar par system prompt ek baar revise kijiye. Final version Chapter 7 ke liye save kijiye.',
  'The system prompt is written down, and someone else could apply it without asking you questions.':
    'System prompt likha hua hai, aur koi aur bina sawaal poochhe use apply kar sakta hai.',
  'You have run at least three attacks against it and recorded which succeeded.':
    'Aapne iske khilaaf kam se kam teen attacks chalaaye aur record kiya ki kaunse safal hue.',
  'You can say in one sentence which failure your system prompt still cannot prevent, and why no wording could.':
    'Aap ek sentence mein bata sakte hain ki aapka system prompt kaunsa failure ab bhi nahi rok sakta, aur koi wording kyun nahi rok sakti.',
  'There is nothing behind the model to check facts against.':
    'Model ke peechhe facts check karne ke liye kuchh nahi hai.',
  'Models forget between messages':
    'Models messages ke beech bhool jaate hain',
  'Anything the model should know has to be sent every time.':
    'Model ko jo pata hona chahiye woh har baar bhejna padta hai.',
  'You will make real calls in this chapter.':
    'Is chapter mein aap asli calls karenge.',
  'Open a new notebook called <code>chapter-2</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client). You will make three calls in this chapter, and each one tests the idea just before it.':
    '<code>chapter-2</code> naam ka naya notebook kholiye. <a href="#/setup">Setup</a> ke teen warm-up cells (key, install aur client) chalaiye. Is chapter mein aap teen calls karenge, aur har ek apne theek pehle wale idea ko test karti hai.',
  'A model forgets everything between calls. So how does a company make it behave a certain way every time, such as always polite, always in English, and never discussing competitors?':
    'Model calls ke beech sab bhool jaata hai. To company use har baar ek khaas tarah se behave kaise karwaati hai, jaise hamesha polite, hamesha English mein, aur kabhi competitors ki baat nahi?',
  'The app sends the instructions again with every message. These standing instructions are called the <strong>system prompt</strong>. It is ordinary text, sent with each request, that says who the assistant is and what it must not do.':
    'App har message ke saath instructions dobara bhejta hai. In sthaayi instructions ko <strong>system prompt</strong> kehte hain. Yeh aam text hai, har request ke saath bheja jaata hai, jo batata hai ki assistant kaun hai aur use kya nahi karna.',
  'Note':
    'Note',
  'When a vendor says they have “customised the AI for your organisation”, they often mean they wrote a system prompt. Ask what else, if anything, they changed.':
    'Jab vendor kehta hai ki unhone “AI ko aapke organisation ke liye customise kiya hai”, to aksar unka matlab hota hai ki unhone ek system prompt likha. Poochhiye ki aur kya badla, agar kuchh badla.',
  'Temperature':
    'Temperature',
  'The second control is <strong>temperature</strong>. At each step the model has several likely next tokens to choose from. Temperature decides how often it picks a less likely one.':
    'Doosra control hai <strong>temperature</strong>. Har step par model ke paas chunne ke liye kai sambhavit agle tokens hote hain. Temperature tay karta hai ki woh kitni baar kam sambhavit token chunega.',
  'At a low temperature, you get similar answers to the same question each time. At a high temperature, you get more variety. Try it here:':
    'Kam temperature par ek hi sawaal ke har baar milte-julte jawab milte hain. Zyada temperature par zyada vividhta milti hai. Yahan try kijiye:',
  'Up or down, and what you give up':
    'Upar ya neeche, aur aap kya chhodte hain',
  'Your product answers questions about a refund policy. Should the temperature be high or low, and what do you give up?':
    'Aapka product refund policy ke sawaalon ka jawab deta hai. Temperature zyada hona chahiye ya kam, aur aap kya chhodte hain?',
  'Low, near zero. You give up variety, which you do not need here, and gain consistency, which you do: the same question should not get a different policy on Tuesday.':
    'Kam, lagbhag shunya. Aap vividhta chhodte hain, jiski yahan zaroorat nahi, aur consistency paate hain, jiski zaroorat hai: ek hi sawaal par mangalvaar ko alag policy nahi aani chahiye.',
  'Watch out: a low temperature makes answers <em>consistent</em>, not <em>correct</em>. A wrong answer at temperature zero is wrong the same way every time.':
    'Dhyaan rakhiye: kam temperature jawabon ko <em>consistent</em> banata hai, <em>sahi</em> nahi. Temperature zero par galat jawab har baar ek hi tarah galat hota hai.',
  'Hallucination: confident, invented answers':
    'Hallucination: confident, banaaye hue jawab',
  'A model does not reliably tell you when it does not know. Predicting the next piece of text has no built-in option for silence. Refusing has to be trained in separately, and it does not always work.':
    'Model bharose se nahi batata ki use kab nahi pata. Agla text predict karne mein chup rehne ka koi built-in option nahi hai. Mana karna alag se train karna padta hai, aur woh hamesha kaam nahi karta.',
  'An invented answer looks just like a true one. It has the same structure, the same calm tone and the same detail. It may cite a clause number or give a percentage. The signals that usually show expertise are patterns in text, and patterns in text are what the model reproduces.':
    'Banaaya hua jawab bilkul sach jaisa dikhta hai. Wahi structure, wahi shaant tone aur wahi detail. Woh clause number de sakta hai ya percentage bata sakta hai. Jo signals aam taur par expertise dikhate hain woh text ke patterns hain, aur text ke patterns hi model dohrata hai.',
  'This is called <strong>hallucination</strong>. The name suggests a malfunction, but the model is working as designed. It is predicting likely text in a situation where you needed it to say “I don’t know”.':
    'Ise <strong>hallucination</strong> kehte hain. Naam se lagta hai ki kuchh kharaab hua, lekin model design ke mutaabik hi kaam kar raha hai. Woh sambhavit text predict kar raha hai, us situation mein jahan aapko chahiye tha ki woh “mujhe nahi pata” kahe.',
  'Make the model invent an answer':
    'Model se ek jawab banwaaiye',
  'Ask about something that does not exist. Set the temperature to zero, so randomness cannot explain the result.':
    'Kisi aisi cheez ke baare mein poochhiye jo exist nahi karti. Temperature zero rakhiye, taaki randomness result ko samjha na sake.',
  'You get a confident, well-organised summary of a scheme that does not exist. Read it twice and notice that it looks legitimate. That impression is exactly what you cannot rely on.':
    'Aapko ek aisi scheme ka confident, achhi tarah organised summary milta hai jo exist hi nahi karti. Do baar padhiye aur dekhiye ki woh kitna asli lagta hai. Isi impression par aap bharosa nahi kar sakte.',
  'Reducing hallucination with an instruction':
    'Instruction se hallucination kam karna',
  'The obvious fix is an instruction: <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> This helps, and it does reduce how often the model invents answers.':
    'Seedha fix ek instruction hai: <em>sirf diye gaye documents se jawab do; agar jawab wahan nahi hai, to kaho ki tumhe nahi pata.</em> Isse madad milti hai, aur model ka jawab banaana sach mein kam hota hai.',
  'Add one instruction':
    'Ek instruction jodiye',
  'Send the same question again, with one line of system prompt in front of it.':
    'Wahi sawaal dobara bhejiye, uske aage system prompt ki ek line ke saath.',
  'The reply now hedges, says it cannot verify the scheme, or asks for a source. One sentence changed the behaviour. The next step shows how easily that can be undone.':
    'Ab reply hichkichaata hai, kehta hai ki woh scheme verify nahi kar sakta, ya source maangta hai. Ek sentence ne behaviour badal diya. Agla step dikhata hai ki ise kitni aasaani se palta ja sakta hai.',
  'The instruction reduces the problem but does not remove it. Try this:':
    'Instruction problem kam karti hai lekin hataati nahi. Yeh try kijiye:',
  'Keep the same system prompt. Change only the user message, and push harder:':
    'Wahi system prompt rakhiye. Sirf user message badaliye, aur zyada zor dijiye:',
  'Many models give in and invent the answer again. An instruction is a strong influence, but the model can still be talked out of it.':
    'Kai models maan jaate hain aur phir se jawab bana dete hain. Instruction ka asar mazboot hai, lekin model ko phir bhi baaton mein laaya ja sakta hai.',
  'Write one sentence you would put in a system prompt to stop the model inventing a policy it has not been shown. Underneath, write a question that would get around your instruction.':
    'Ek sentence likhiye jo aap system prompt mein daalenge taaki model aisi policy na banaye jo use dikhayi nahi gayi. Uske neeche ek aisa sawaal likhiye jo aapki instruction ko chakma de de.',
  'The instruction is the easy part. Almost any such sentence fails against a question that <em>looks</em> answerable from the documents but is not: a policy that sounds like a real one, a date just outside the range covered, or a scheme whose name differs by one word. The model matches patterns rather than checking facts, so it cannot tell “nearly in my documents” from “in my documents”. An instruction makes the behaviour rarer. It does not remove the reason it happens.':
    'Instruction aasaan hissa hai. Lagbhag har aisa sentence us sawaal ke saamne fail hota hai jo documents se jawab dene laayak <em>lagta</em> hai par hai nahi: asli jaisi lagne wali policy, cover ki gayi range se theek bahar ki date, ya ek shabd ke farq wala scheme ka naam. Model facts check nahi karta, patterns match karta hai, isliye woh “mere documents mein lagbhag hai” aur “mere documents mein hai” ka farq nahi kar paata. Instruction behaviour ko kam karti hai. Uski wajah nahi hataati.',
  'Rarer is not the same as fixed':
    'Kam hona theek hona nahi hai',
  'Keep this distinction in mind: making a failure rarer is different from removing its cause. When someone says a problem is handled because they added a rule, ask: <em>does that remove the cause, or does it only make the symptom less common?</em>':
    'Yeh farq yaad rakhiye: failure ko kam karna uski wajah hataane se alag hai. Jab koi kahe ki problem handle ho gayi kyunki unhone ek rule joda, to poochhiye: <em>kya isse wajah hati, ya sirf symptom kam dikhta hai?</em>',
  'The rest of Part I removes the cause. If the model invents answers when it has no evidence, the fix is to give it the evidence. That takes four chapters. It starts with a practical problem: your documents are too big to send in one request.':
    'Part I ka baaki hissa wajah hataata hai. Agar model saboot na hone par jawab banata hai, to fix hai use saboot dena. Isme chaar chapters lagte hain. Shuruaat ek practical problem se hoti hai: aapke documents ek request mein bhejne ke liye bahut bade hain.'

});
