/* Hinglish: the Part V question bank (the questions themselves). */
Object.assign(window.HING = window.HING || {}, {

  'Your assistant returns a confident answer built on a field the upstream API stopped sending last week. Nothing errored. Which of these would have caught it?':
    'Aapka assistant ek pakka jawaab deta hai jo aise field par bana hai jise upar waala API pichhle hafte se bhej hi nahi raha. Koi error nahi aaya. Inme se kya ise pakad leta?',
  'Every option except temperature is a contract discipline, and this is the characteristic AI failure: nothing threw, so nothing alerted, and the answer was assembled on top of a hole. Temperature changes how the sentence is phrased, not whether the data behind it exists.':
    'Temperature ke alawa har vikalp contract ka anushasan hai, aur yahi AI ka asli waala failure hai: koi error nahi aaya, isliye koi alarm nahi baja, aur jawaab ek khaali gadde par khada kar diya gaya. Temperature sirf yeh badalta hai ki baat kaise kahi gayi, yeh nahi ki uske peechhe data hai bhi ya nahi.',
  'Validating the response against a schema before use':
    'Istemaal se pehle jawaab ko ek schema se jaanchna',
  'Logging the raw response alongside the parsed one':
    'Saaf kiye gaye jawaab ke saath kaccha jawaab bhi record karna',
  'A unit test that asserts on the missing-field case':
    'Ek unit test jo gayab field waale case ko jaanche',
  'Raising the model temperature':
    'Model ka temperature badhana',
  'A contract check that fails loudly instead of substituting a blank':
    'Aisi contract jaanch jo khaali jagah bharne ki jagah zor se fail ho',
  'A stakeholder forwards you a leaderboard and asks why you are not using the model at the top of it. Give the two-sentence reply you would actually send.':
    'Ek stakeholder aapko leaderboard bhejta hai aur poochhta hai ki aap upar waale model ka istemaal kyun nahi kar rahe. Woh do line ka jawaab likhiye jo aap sach mein bhejenge.',
  'The reply has to do two things: refuse the substitution of reputation for evidence, and offer the cheap measurement that settles it. A reply that only refuses reads as obstruction, which is how these conversations get lost even when the reasoning is right.':
    'Jawaab ko do kaam karne hain: saboot ki jagah naam ko aane se rokna, aur woh sasti naap pesh karna jo baat khatam kar de. Jo jawaab sirf mana karta hai woh adangebazi lagta hai — aur isi tarah yeh baat-cheet haari jaati hai, chaahe soch bilkul sahi ho.',
  'A leaderboard is a result on somebody else’s test set, so it predicts our task only by coincidence: the question is how that model scores on our ten cases, at our latency budget and our cost per task. I can run that this week — and if it wins on the constraint that actually binds us, we switch.':
    'Leaderboard kisi aur ke test set ka nateeja hai, isliye woh hamare kaam ke baare mein sirf ittefaaq se sahi hoga: sawaal yeh hai ki woh model hamare das cases par, hamare latency budget aur har kaam ki cost par kitna number laata hai. Main yeh is hafte chala sakta hoon — aur agar woh us bandhan par jeette jo sach mein hamein rokta hai, to hum badal denge.',
  'Your context budget is 8,000 tokens and today’s request needs 9,500. Which component should almost always be evicted first?':
    'Aapka context budget 8,000 token hai aur aaj ki request ko 9,500 chahiye. Lagbhag hamesha sabse pehle kya hatana chahiye?',
  'History is the only one whose loss degrades the answer gradually rather than breaking it. Dropping instructions changes the behaviour, dropping evidence returns you to a guessing machine, and dropping the schema breaks whatever parses the output. Eviction order is a design decision, and this is the usual one.':
    'History hi ek aisi cheez hai jiske jaane se jawaab dheere-dheere kamzor hota hai, tootta nahi. Nirdesh hataane se bartav badal jaata hai, saboot hataane se aap phir se andaaza lagane waali machine par aa jaate hain, aur schema hataane se woh sab toot jaata hai jo output padhta hai. Hatane ka kram ek design ka faisla hai, aur yahi aam kram hai.',
  'The system instructions':
    'System ke nirdesh',
  'The retrieved evidence':
    'Nikala gaya saboot',
  'The conversation history':
    'Baat-cheet ki history',
  'The output schema':
    'Output ka schema',
  'A document is deleted from the source system at 10am. Your index rebuilds nightly. What is the honest description of the state between those two points?':
    'Subah das baje ek document source system se mita diya gaya. Aapka index raat ko dobara banta hai. In do bindu ke beech ki haalat ka imaandaar varnan kya hai?',
  'The chunks are still in the index with their provenance intact, so the assistant can retrieve, quote and cite a document that has been withdrawn — with a citation that looks perfectly legitimate. Calling that "briefly out of date" is how deletion propagation stops being designed. The window is a decision; make it deliberately.':
    'Chunks abhi bhi index mein hain aur unka provenance bhi saabut hai, isliye assistant ek hataye gaye document ko nikaal sakta hai, quote kar sakta hai aur uska hawaala bhi de sakta hai — aisa hawaala jo bilkul jaayaz dikhta hai. Ise "thodi der purana" kehna hi woh tareeka hai jisse mitaane ka asar failane ka design hona band ho jaata hai. Woh khidki ek faisla hai; use soch-samajh kar lijiye.',
  'The system is briefly out of date, which is normal':
    'System thodi der ke liye purana hai, jo aam baat hai',
  'The system will quote a document that no longer exists, and can cite it':
    'System aise document ko quote karega jo ab hai hi nahi, aur uska hawaala bhi de dega',
  'Retrieval will score the deleted document lower automatically':
    'Retrieval mitaye gaye document ko apne aap kam number dega',
  'Nothing happens until someone asks about that document':
    'Jab tak koi us document ke baare mein na poochhe, kuch nahi hota',
  'Which of these belong in a tool contract before any model is allowed to call it?':
    'Kisi bhi model ko chalane ki ijazat milne se pehle tool contract mein inme se kya hona chahiye?',
  'The first four are properties of the contract and are enforced whatever the model does. The last is a request, and chapter 2 already proved that requests bend under pressure. Asking the model to be careful is not a control.':
    'Pehli chaar contract ke gun hain aur model kuch bhi kare, yeh lagu rehte hain. Aakhri ek guzarish hai, aur chapter 2 pehle hi saabit kar chuka hai ki guzarishein dabaav mein jhuk jaati hain. Model se saavdhan rehne ko kehna koi control nahi hai.',
  'Constrained parameters rather than free text':
    'Khuli likhaai ki jagah bandhe hue parameters',
  'Server-side permission enforcement':
    'Ijazat ka server par lagu hona',
  'An explicit statement of side effects':
    'Iske aur kya asar honge, iska saaf bayaan',
  'A truthful description, because the model reads it':
    'Sachcha description, kyunki model use padhta hai',
  'Instructions in the system prompt asking the model to be careful':
    'System prompt mein model se saavdhan rehne ko kehne waale nirdesh',
  'Your agent solves 17 of 20 tasks. The deterministic workflow it replaced solves 17 of 20, at a third of the cost and half the latency. What ships?':
    'Aapka agent bees mein se sattrah kaam hal karta hai. Jis pakke workflow ki usne jagah li woh bhi bees mein se sattrah hal karta hai — ek tihaai kharche aur aadhi latency mein. Kya bhejenge?',
  'Autonomy has to earn its risk, its cost and its latency on a metric you care about. Equal quality at three times the price is a clear result, and "it will get better" is a prediction about a future model, not evidence about this one. Complexity is a budget.':
    'Khud-mukhtari ko apna khatra, apna kharcha aur apni latency kisi aise number par kamani hoti hai jo aapke liye maayne rakhta ho. Teen guna daam par wahi quality ek saaf nateeja hai, aur "yeh behtar ho jaayega" kisi aane waale model ke baare mein bhavishyavani hai, isi ke baare mein saboot nahi. Uljhan ek budget hai.',
  'The agent, because it will improve as models improve':
    'Agent, kyunki models behtar honge to yeh bhi behtar hoga',
  'The workflow, because the autonomy bought nothing measurable':
    'Workflow, kyunki khud-mukhtari se naapne layak kuch mila hi nahi',
  'The agent, because it handles cases the workflow cannot':
    'Agent, kyunki yeh woh cases sambhalta hai jo workflow nahi sambhal sakta',
  'Neither — the sample is too small to decide':
    'Koi nahi — faisle ke liye namoona bahut chhota hai',
  'A protocol standardises how your assistant discovers and invokes a <code>delete_record</code> tool. What has that made safer?':
    'Ek protocol yeh tay kar deta hai ki aapka assistant <code>delete_record</code> tool kaise dhoondhta aur chalata hai. Isse kya surakshit hua?',
  'A standard carries the call; it does not decide authorisation. Schema checking and error semantics are real benefits and neither one asks whether this requester may delete this record. That question belongs to a component you have to build, and it is never the model.':
    'Maanak call pahunchata hai; ijazat woh tay nahi karta. Schema ki jaanch aur error ke tay matlab asli faayde hain, par inme se koi yeh nahi poochhta ki yeh maangne waala is record ko mita sakta hai ya nahi. Woh sawaal ek aise hisse ka hai jo aapko banana hai — aur woh kabhi model nahi hota.',
  'The tool, because the protocol defines error semantics':
    'Tool, kyunki protocol error ke matlab tay karta hai',
  'The call, because arguments are now schema-checked':
    'Call, kyunki ab arguments schema se jaanche jaate hain',
  'Nothing about whether the call should have been allowed':
    'Yeh call honi bhi chahiye thi ya nahi — iske baare mein kuch bhi nahi',
  'The audit trail, because the protocol records invocations':
    'Record, kyunki protocol har call likh leta hai',
  'Plain-text extraction of a real PDF. Which of these are routinely lost?':
    'Ek asli PDF se sirf saada text nikaalna. Inme se kya aam taur par kho jaata hai?'

});
