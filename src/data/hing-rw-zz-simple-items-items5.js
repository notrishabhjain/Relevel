/* Hinglish for items5 (items:items5), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Your assistant gives a sure-sounding answer. It uses a field (one labelled box of data) that the upstream API (the service you get data from) stopped sending last week. No error showed. Which of these would have caught it?':
    'Aapka assistant pakke yakeen se jawaab deta hai. Woh ek field (data ka ek labelled dabba) use karta hai jise upstream API (jis service se data aata hai) ne pichhle hafte bhejna band kar diya. Koi error nahi dikha. In mein se kaun si cheez ise pakad leti?',
  'Every option except temperature holds the data to its contract (the promise about what data will arrive). This is a classic AI failure. No error was thrown, so no alert rang. The answer was built on a hole. Temperature only changes how a sentence is worded. It does not check that the data behind it exists.':
    'Temperature ko chhodkar har option data ko uske contract (kaisa data aayega, is ka wada) par rakhta hai. Yeh AI ki jaani-pehchani galti hai. Koi error nahi aaya, isliye alert nahi bajaa. Jawaab ek gadhe ke upar bana tha. Temperature sirf yeh badalta hai ki sentence kaise likha jaaye. Woh yeh nahi dekhta ki uske peeche ka data hai ya nahi.',
  'Checking the response against a schema (a form with fixed boxes) before using it':
    'Use karne se pehle response ko schema (fixed khaanon wala form) ke against check karna',
  'Logging the raw response alongside the parsed one':
    'Saaf kiye gaye jawaab ke saath kaccha jawaab bhi record karna',
  'A unit test that checks the missing-field case':
    'Ek unit test jo missing-field case check kare',
  'Raising the model temperature (more adventurous word choice)':
    'Model temperature badhana (shabd chunne mein zyada jokhim lena)',
  'A contract check that fails loudly, not one that quietly fills in a blank':
    'Aisa contract check jo zor se fail ho, na ki chupchaap khaali jagah bhar de',
  'A stakeholder (someone who cares about the result) sends you a leaderboard (a ranking of models). They ask why you are not using the top model. Write the two-sentence reply you would really send.':
    'Ek stakeholder (jise result se matlab hai) aapko leaderboard (models ki ranking) bhejta hai. Woh poochta hai ki aap sabse upar wala model kyun nahi use kar rahe. Woh do-sentence ka jawaab likhiye jo aap sach mein bhejenge.',
  'A good reply does two things. It says no to a famous name without proof, and it offers a cheap test that settles the question. A reply that only says no sounds like blocking. That is how these talks get lost, even when your reasoning is right.':
    'Achha jawaab do kaam karta hai. Woh bina saboot ke mashhoor naam ko mana karta hai, aur ek sasta test deta hai jo sawaal tay kar de. Sirf "nahi" kehne wala jawaab rok-tok jaisa lagta hai. Isi tarah yeh baatein haar jaati hain, chahe aapki soch sahi ho.',
  'A leaderboard is a score on somebody else\'s test set (their list of questions). It only matches our task by luck. The real question is how that model scores on our ten cases, within our latency budget (how long we can wait) and our cost per task. I can run that this week. If it wins on the limit that matters most to us, we switch.':
    'Leaderboard kisi aur ke test set (unke sawaalon ki list) par score hai. Woh hamare kaam se sirf ittefaq se milta hai. Asli sawaal yeh hai ki woh model hamare das cases par kitna score karta hai, hamare latency budget (kitna intezaar chalega) aur cost per task ke andar. Main yeh isi hafte chala sakta hoon. Agar woh hamari sabse zaroori limit par jeetta hai, to hum badal lenge.',
  'Your context budget (how much fits on the model\'s desk) is 8,000 tokens. Today\'s request needs 9,500. Which part should almost always be dropped first?':
    'Aapka context budget (model ki mez par kitna aata hai) 8,000 tokens hai. Aaj ki request ko 9,500 chahiye. Kaun sa hissa lagbhag hamesha pehle hatana chahiye?',
  'Only with history does losing it make the answer a little worse, instead of breaking it. Drop the instructions and the behaviour changes. Drop the evidence and you are back to a guessing machine. Drop the schema and whatever reads the output breaks. The order of dropping is a design choice, and this is the usual one.':
    'Sirf history hatane se jawaab thoda kharab hota hai, tootta nahi. Instructions hatao to behaviour badal jaata hai. Evidence hatao to model phir se andaaza lagane wali machine ban jaata hai. Schema hatao to jo output padhta hai woh toot jaata hai. Kya pehle hatana hai, yeh design ka faisla hai, aur yeh aam tareeka hai.',
  'The system instructions':
    'System ke nirdesh',
  'The retrieved evidence':
    'Nikala gaya saboot',
  'The conversation history':
    'Baat-cheet ki history',
  'The output schema':
    'Output ka schema',
  'A document is deleted from the source system at 10am. Your index (the card catalogue of your chunks) rebuilds every night. What is the honest description of the time in between?':
    'Ek document source system se subah 10 baje delete hota hai. Aapka index (chunks ka card catalogue) har raat dobara banta hai. Beech ke samay ka sachcha bayaan kya hai?',
  'The chunks (index cards cut from the document) are still in the index with their source details. So the assistant can find, quote and cite a document that was withdrawn, and the citation looks fully real. Calling this "briefly out of date" is how teams stop planning for deletion. That gap is a choice, so make it on purpose.':
    'Chunks (document se kaate gaye index cards) apni source details ke saath ab bhi index mein hain. Isliye assistant wapas liye gaye document ko dhoondh sakta hai, quote kar sakta hai aur cite kar sakta hai, aur citation bilkul asli lagta hai. Ise "thodi der purana" kehna wahi tareeka hai jisse teams delete hone ki planning chhod deti hain. Yeh gap ek faisla hai, isliye jaan-boojhkar kijiye.',
  'The system is briefly out of date, which is normal':
    'System thodi der ke liye purana hai, jo aam baat hai',
  'The system will quote a document that no longer exists, and can cite it':
    'System aise document ko quote karega jo ab hai hi nahi, aur uska hawaala bhi de dega',
  'Retrieval will automatically score the deleted document lower':
    'Retrieval deleted document ko apne aap kam score dega',
  'Nothing happens until someone asks about that document':
    'Jab tak koi us document ke baare mein na poochhe, kuch nahi hota',
  'Which of these belong in a tool contract (the rules for a tool) before any model may call the tool?':
    'In mein se kaun si cheezein tool contract (tool ke niyam) mein honi chahiye, us se pehle ki koi model tool ko call kare?',
  'The first four are part of the contract. They hold whatever the model does. The last one is only a request, and chapter 2 showed that requests bend under pressure. Asking the model to be careful is not a control.':
    'Pehli chaar contract ka hissa hain. Model kuch bhi kare, woh tikti hain. Aakhri sirf ek request hai, aur chapter 2 mein dikha tha ki request dabaav mein jhuk jaati hai. Model se kehna "dhyan rakho" koi control nahi hai.',
  'Limited choices for parameters (the inputs), not free text':
    'Parameters (inputs) ke liye limited choices, free text nahi',
  'Permissions enforced on the server (the machine behind the tool)':
    'Permissions server (tool ke peeche wali machine) par lagu karna',
  'A clear statement of side effects':
    'Side effects ka saaf bayaan',
  'A truthful description, because the model reads it':
    'Sachcha description, kyunki model use padhta hai',
  'An instruction in the system prompt asking the model to be careful':
    'System prompt mein model se kehna ki woh careful rahe',
  'Your agent solves 17 of 20 tasks. The fixed workflow it replaced also solves 17 of 20. The workflow costs a third as much and has half the delay. What do you ship?':
    'Aapka agent 20 mein se 17 tasks solve karta hai. Jis fixed workflow ko usne badla, woh bhi 20 mein se 17 solve karta hai. Workflow ka kharch ek tihai hai aur woh aadha dheema hai. Aap kya ship karenge?',
  'An agent (a helper that uses tools in a loop) must earn its extra risk, cost and delay on a metric you care about. Same quality at three times the price is a clear result. "It will get better" is a guess about a future model. It is not proof about this one. Complexity is a budget. Spend it only when it buys something.':
    'Agent (tools ko loop mein chalane wala helper) ko apna extra risk, kharch aur deri us metric par kamaani hoti hai jo aapko chahiye. Wahi quality teen guna daam par saaf nateeja hai. "Yeh behtar ho jaayega" ek aane wale model ka andaaza hai. Yeh is model ka saboot nahi hai. Complexity ek budget hai. Use tabhi kharch kijiye jab kuch mile.',
  'The agent, because it will get better as models get better':
    'Agent, kyunki models behtar honge to yeh bhi behtar hoga',
  'The workflow, because the extra autonomy bought nothing you can measure':
    'Workflow, kyunki extra autonomy se aisa kuch nahi mila jo naapa ja sake',
  'The agent, because it handles cases the workflow cannot':
    'Agent, kyunki woh woh cases sambhalta hai jo workflow nahi sambhal sakta',
  'Neither, because the sample is too small to decide':
    'Dono nahi, kyunki sample itna chhota hai ki faisla nahi ho sakta',
  'A protocol (a shared set of rules) standardises how your assistant finds and calls a <code>delete_record</code> tool. What has that made safer?':
    'Ek protocol (sab ke maane hue niyam) tay karta hai ki aapka assistant <code>delete_record</code> tool ko kaise dhoondhe aur call kare. Isse kya zyada surakshit hua?',
  'A standard carries the call. It does not decide who may make it. Schema checks and error handling are real benefits. But neither asks if this requester may delete this record. You must build that part yourself. It is never the model\'s job.':
    'Standard call ko le jaata hai. Woh yeh tay nahi karta ki call kaun kar sakta hai. Schema checks aur error handling asli faayde hain. Par dono mein se koi nahi poochta ki kya yeh maangne wala yeh record delete kar sakta hai. Yeh hissa aapko khud banana padta hai. Yeh kabhi model ka kaam nahi hota.',
  'The tool, because the protocol defines how errors work':
    'Tool, kyunki protocol define karta hai ki errors kaise kaam karte hain',
  'The call, because arguments are now checked against a schema':
    'Call, kyunki ab arguments schema ke against check hote hain',
  'Nothing about whether the call should have been allowed':
    'Is baare mein kuch nahi ki call ki ijaazat honi chahiye thi ya nahi',
  'The audit trail, because the protocol records calls':
    'Audit trail, kyunki protocol calls ko record karta hai',
  'You pull plain text out of a real PDF. Which of these are often lost?':
    'Aap ek asli PDF se plain text nikaalte hain. In mein se kya aksar kho jaata hai?',
  'Body text usually survives. The other three get flattened or dropped completely. So a question about a table cannot be graded against a text extraction. The right answer must come from something that can truly read a table.':
    'Body text aam taur par bach jaata hai. Baaki teen sapaat ho jaate hain ya poori tarah chhoot jaate hain. Isliye table ke sawaal ko text extraction se grade nahi kiya ja sakta. Sahi jawaab aisi cheez se aana chahiye jo table sach mein padh sake.',
  'The structure of a table':
    'Table ka dhaancha',
  'Meaning carried by position, such as a heading above a column':
    'Position se jo matlab nikalta hai, jaise column ke upar heading',
  'Anything that was inside an image':
    'Jo kuch bhi tasveer ke andar tha',
  'The words in the body paragraphs':
    'Aam paragraph ke shabd',
  'The end-to-end answer quality score is 0.88. The retrieval recall (how many right pages the search found) score is 0.41. What is the most likely reason?':
    'End-to-end answer quality ka score 0.88 hai. Retrieval recall (search ne kitne sahi pages dhoondhe) ka score 0.41 hai. Sabse mumkin wajah kya hai?',
  'A fluent model often hides missing evidence well enough to look good end to end. This is the most dangerous state for a retrieval product. The demo looks great while the system is guessing. Only a layered score shows it. One number cannot.':
    'Ek fluent model aksar kami wale evidence ko itni achhi tarah chhupa leta hai ki end to end sab theek lagta hai. Retrieval product ke liye yeh sabse khatarnaak haal hai. Demo shaandaar dikhta hai jabki system andaaza laga raha hota hai. Sirf layered score yeh dikhata hai. Ek number nahi dikha sakta.',
  'The evaluation set (the answer-key questions) is too easy':
    'Evaluation set (answer key wale sawaal) bahut aasaan hai',
  'The model is answering well from its own knowledge, not from the evidence':
    'Model apni jaankari se achha jawaab de raha hai, evidence se nahi',
  'The retriever is fine and the metric is wrongly set':
    'Retriever theek hai aur metric galat set hai',
  'Groundedness and recall cannot be compared, so nothing follows':
    'Groundedness aur recall ki tulna nahi ho sakti, isliye kuch nahi nikalta',
  'An answer was wrong on Tuesday, but the code has not changed. Which trace (the step-by-step record of one request) fields help you find out why?':
    'Mangalvaar ko ek jawaab galat tha, par code nahi badla. Trace (ek request ka kadam-dar-kadam record) ke kaun se fields wajah dhoondhne mein madad karte hain?',
  'Prompt version, retrieved chunk ids and model version can change without a deploy. People leave all three out of a trace. Latency tells you about speed, not correctness. It is useful, but not for this question.':
    'Prompt version, retrieved chunk ids aur model version deploy ke bina badal sakte hain. Log in teeno ko trace se chhod dete hain. Latency speed batata hai, sahi hone ke baare mein nahi. Yeh kaam ka hai, par is sawaal ke liye nahi.',
  'The prompt version in use for that request':
    'Us request ke liye use mein aaya prompt version',
  'The ids of the chunks that were retrieved':
    'Jo chunks nikale gaye unki ids',
  'The model and model version that served it':
    'Kaun sa model aur uska kaun sa version chala',
  'The total latency for the request':
    'Us request ki kul latency',
  'A colleague says injection (a hidden note that tells the model to ignore its rules) is not a worry. They say the corpus (your pile of documents) holds only internal documents written by your own staff. Answer them.':
    'Ek saathi kehta hai ki injection (chhupi hui parchi jo model ko niyam todne ko kehti hai) ki chinta nahi hai. Woh kehta hai ki corpus (aapke documents ka dher) mein sirf internal documents hain jo aapke apne staff ne likhe. Unhe jawaab dijiye.',
  'Move the argument from who owns the text to where the boundary is. "Our own documents" says who you can blame. It does not say if the text can carry instructions.':
    'Behes ko "text kiska hai" se hataakar "seema kahan hai" par le jaiye. "Hamare apne documents" batata hai ki doshi kise kahenge. Yeh nahi batata ki text mein instructions chhup sakte hain ya nahi.',
  'Retrieved content is untrusted input, whoever wrote it. Anyone with write access can edit an internal document. A supplier can upload one. One can quote an outside source word for word. In each case the model cannot tell an instruction from data. The control is the instruction boundary your system enforces when it builds the context. It is not where the file came from.':
    'Retrieved content par bharosa nahi karte, chahe use kisi ne bhi likha ho. Write access wala koi bhi internal document badal sakta hai. Supplier ek upload kar sakta hai. Ek bahar ke source ko shabd-dar-shabd quote kar sakta hai. Har haal mein model instruction aur data mein farq nahi kar paata. Control woh instruction boundary hai jo aapka system context banate waqt lagu karta hai. File kahan se aayi, yeh control nahi hai.',
  'Which of these is an acceptance criterion (a test that says "done") an engineer can really build against?':
    'In mein se kaun sa acceptance criterion ("ho gaya" batane wali kasauti) hai jis par engineer sach mein kaam kar sakta hai?',
  'Only the third names a metric, a test set and a tolerance. The first promises something that probabilistic systems cannot deliver. The second cannot be tested. The fourth is a real goal, but it is not a criterion yet, because no measurement is attached.':
    'Sirf teesra metric, test set aur tolerance ka naam leta hai. Pehla woh wada karta hai jo probabilistic systems nibha nahi sakte. Doosre ko test nahi kiya ja sakta. Chautha asli lakshya hai, par abhi criterion nahi hai, kyunki usmein koi naap nahi juda.',
  'The assistant always returns the right document':
    'Assistant hamesha sahi document deta hai',
  'The assistant returns the right document in almost all cases':
    'Assistant lagbhag sabhi cases mein sahi document deta hai',
  'On the approved 200-case set, Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98':
    'Manzoor 200-case set par, Recall@5 ≥ 0.90 aur jawaab-nahi ki precision ≥ 0.98',
  'The assistant does at least as well as the current manual process':
    'Assistant kam se kam utna achha kaam karta hai jitna abhi ka haath ka process',
  'Your provider announces a price rise with ninety days\' notice. Which of these make switching manageable?':
    'Aapka provider nabbe din ke notice ke saath daam badhane ka elaan karta hai. In mein se kya badalna sambhalne layak banata hai?',
  'The first three are your exit plan, whether or not anyone called it that. An evaluation set turns "can we switch?" from a debate into a week of work. In practice, the exit plan and the evaluation set often turn out to be the same thing.':
    'Pehli teen aapka exit plan hain, chahe kisi ne use yeh naam diya ho ya nahi. Evaluation set "kya hum badal sakte hain?" ko behes se hataakar ek hafte ka kaam bana deta hai. Asal mein exit plan aur evaluation set aksar ek hi cheez nikalte hain.',
  'An evaluation set you can run again on a new provider':
    'Evaluation set jise aap naye provider par dobara chala sakein',
  'A provider scorecard that already counted the cost of leaving':
    'Provider scorecard jisme chhodne ka kharch pehle se joda gaya ho',
  'Prompts and configuration kept under version control (a saved history of changes)':
    'Prompts aur configuration version control (badlaavon ki saheji history) mein rakhe hon',
  'The team strongly prefers the current provider':
    'Team ko abhi ka provider zyada pasand hai',
  'What makes a capstone (your final project) convincing in a design review?':
    'Design review mein capstone (aapka aakhri project) kya cheez bharose layak banati hai?',
  'Anyone can demo the happy path. You show you understand a system by knowing where it breaks. Show the measurement that proves you fixed part of it. Say plainly what you did not solve.':
    'Happy path ka demo koi bhi de sakta hai. Aap system ko samajhte hain, yeh tab dikhta hai jab aap jaante hain ki woh kahan tootta hai. Woh naap dikhaiye jo saabit kare ki aapne uska ek hissa theek kiya. Saaf kahiye ki aapne kya hal nahi kiya.',
  'A working demo of the happy path':
    'Happy path ka chalta hua demo',
  'A framework choice that matches what the team already uses':
    'Aisa framework jo team pehle se use karti hai',
  'Failures you found yourself, with before-and-after numbers and the risk that is left':
    'Woh failures jo aapne khud dhoondhe, before-and-after numbers aur bache hue risk ke saath',
  'Coverage of every topic in the book':
    'Book ke har topic ka coverage',
});
