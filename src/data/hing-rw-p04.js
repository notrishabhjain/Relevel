/* Hinglish: p04 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'The five task types: classify, extract, summarise, rewrite, generate':
    'Paanch task types: classify, extract, summarise, rewrite, generate',
  'Almost every request for AI falls into one of five task types. The type decides whether you can measure the result automatically, so name it before you design anything.':
    'AI ki lagbhag har request paanch task types mein se ek mein aati hai. Type tay karta hai ki aap result ko automatically naap sakte hain ya nahi, isliye kuchh bhi design karne se pehle uska naam lijiye.',
  'Name which of the five task types a request is before you design anything.':
    'Kuchh design karne se pehle bata paana ki request paanch mein se kaunsa task type hai.',
  'Explain why two of the types can be graded automatically and three cannot.':
    'Samjhaana ki do types automatically grade kyun ho sakte hain aur teen kyun nahi.',
  'Split a vague request into the narrowest task types that still solve the problem.':
    'Ek dhundhli request ko sabse sankare task types mein todna jo phir bhi problem hal karein.',
  'Break down one real request':
    'Ek asli request ko todiye',
  'Take the vaguest AI request anyone has made of you and turn it into something you can build. Most of the work is naming task types and putting them in order.':
    'Kisi ki aapse ki gayi sabse dhundhli AI request lijiye aur use kuchh aisa banaiye jise aap bana sakein. Zyadatar kaam task types ka naam dena aur unhe kram mein lagana hai.',
  'Write one sentence on what the person wants to be different in their normal week.':
    'Ek sentence likhiye ki woh insaan apne aam hafte mein kya alag chahta hai.',
  'Break it into steps, each with exactly one task type, in the order they must run.':
    'Ise steps mein todiye, har step mein theek ek task type, us kram mein jismein unhe chalna hai.',
  'Mark which steps have a right answer and which do not. These are the parts you can and cannot measure automatically.':
    'Mark kijiye ki kin steps ka sahi jawab hota hai aur kinka nahi. Yahi woh hisse hain jinhe aap automatically naap sakte hain aur nahi naap sakte.',
  'For each measurable step, say where an answer key would come from: who makes that judgement today, and based on what.':
    'Har naapne laayak step ke liye bataiye ki answer key kahan se aayegi: aaj woh judgement kaun karta hai, aur kis aadhaar par.',
  'Write a one-paragraph reply to the person: what you would build first, and why it is the smallest useful piece.':
    'Us insaan ko ek paragraph ka reply likhiye: aap pehle kya banayenge, aur woh sabse chhota kaam ka hissa kyun hai.',
  'Every step in your breakdown has exactly one task type.':
    'Aapke breakdown ke har step mein theek ek task type hai.',
  'You can point to the steps that can be graded without a person reading the output.':
    'Aap un steps par ungli rakh sakte hain jinhe bina kisi insaan ke output padhe grade kiya ja sakta hai.',
  'The first thing you propose to build is measurable, and you can say what you would measure it against.':
    'Jo pehli cheez aap banane ka prastaav dete hain woh naapne laayak hai, aur aap bata sakte hain ki use kiske against naapenge.',
  'Four techniques shape what comes back.':
    'Chaar techniques tay karti hain ki wapas kya aata hai.',
  'How you tell a better prompt from a different one.':
    'Behtar prompt ko sirf alag prompt se kaise pehchaanein.',
  'No new setup. Bring the test set from Chapter 2.2. You will see why its rows were easy to grade.':
    'Koi naya setup nahi. Chapter 2.2 ka test set le aaiye. Aap dekhenge ki uski rows grade karna aasaan kyun tha.',
  'People describe AI requests as outcomes: <em>Can the AI handle our inbox? Can it help with contracts? Can it make the team faster?</em> None of those is a task. Underneath almost every one is one of five task types, and the type matters more than which model you pick.':
    'Log AI requests ko outcomes ki tarah describe karte hain: <em>Kya AI hamara inbox sambhal sakta hai? Kya contracts mein madad kar sakta hai? Kya team ko tez bana sakta hai?</em> In mein se koi task nahi hai. Lagbhag har ek ke neeche paanch task types mein se ek hota hai, aur type model chunne se zyada maayne rakhta hai.',
  'Choose the task type first. It takes one sentence, and it is the design decision most often skipped.':
    'Pehle task type chuniye. Isme ek sentence lagta hai, aur yahi design decision sabse zyada chhoota hai.',
  'The five types':
    'Paanch types',
  'Task type':
    'Task type',
  'Can a program grade it?':
    'Kya program ise grade kar sakta hai?',
  'Put the input into one of a set of categories':
    'Input ko categories ke ek set mein se ek mein daalna',
  'Yes: there is a right answer':
    'Haan: ek sahi jawab hota hai',
  'Pull specific fields out of the input':
    'Input se specific fields nikaalna',
  'Yes: the value is in the document or it is not':
    'Haan: value document mein hai ya nahi hai',
  'Make it shorter without losing what matters':
    'Zaroori baat khoye bina chhota karna',
  'No: it depends on the reader':
    'Nahi: yeh padhne wale par nirbhar hai',
  'Keep the meaning, change the form or tone':
    'Matlab wahi rakhna, form ya tone badalna',
  'No, but you can check what must not change':
    'Nahi, lekin aap check kar sakte hain ki kya nahi badalna chahiye',
  'Produce something new':
    'Kuchh naya banaana',
  'No, and most projects start here':
    'Nahi, aur zyadatar projects yahin se shuru hote hain',
  'Classify and extract have right answers. That means you can measure them on the first day. The other three need a person, or a carefully checked process, to judge the output.':
    'Classify aur extract ke sahi jawab hote hain. Matlab aap unhe pehle din se naap sakte hain. Baaki teen ke output ko parakhne ke liye ek insaan, ya dhyaan se check kiya gaya process chahiye.',
  'Sort real requests into the five types':
    'Asli requests ko paanch types mein baantiye',
  'Write down six things people at your work have asked AI to do. Use their words, including the vague ones. Put each one into one of the five types.':
    'Chhe aisi cheezein likhiye jo aapke kaam par logon ne AI se karwaani chaahi hain. Unke shabd use kijiye, dhundhli wali bhi. Har ek ko paanch types mein se ek mein daaliye.',
  'Two things usually happen. Several requests turn out to be the same type in different words. And at least one does not fit any single type, which means it is really two or three tasks combined.':
    'Aam taur par do baatein hoti hain. Kai requests alag shabdon mein ek hi type nikalti hain. Aur kam se kam ek kisi single type mein fit nahi hoti, matlab woh asal mein do-teen tasks ka mel hai.',
  'If a request does not fit one type, split it into steps until each step does.':
    'Agar koi request ek type mein fit nahi hoti, to use tab tak steps mein todiye jab tak har step fit na ho jaaye.',
  'Split mixed requests into steps':
    'Mili-juli requests ko steps mein todiye',
  '“Handle the inbox” usually hides three tasks: <em>classify</em> the message by type, <em>extract</em> the account number, and <em>generate</em> a draft reply. Each step fails in a different way, and only the first two can be measured without a person reading the output.':
    '“Inbox sambhaalo” mein aam taur par teen tasks chhupe hote hain: message ko type ke hisaab se <em>classify</em> karna, account number <em>extract</em> karna, aur reply ka draft <em>generate</em> karna. Har step alag tarah fail hota hai, aur sirf pehle do ko bina insaan ke output padhe naapa ja sakta hai.',
  'Split the request that did not fit':
    'Jo request fit nahi hui use todiye',
  'Take the request that did not fit a single type. Break it into steps, each with exactly one type, in the order they would run.':
    'Jo request single type mein fit nahi hui use lijiye. Use steps mein todiye, har step mein theek ek type, us kram mein jismein woh chalenge.',
  'You get three or four steps. Usually only the last step is hard to measure. The earlier steps are classification and extraction, which are cheap and checkable. When they are reliable, the last step has an easier job.':
    'Aapko teen-chaar steps milte hain. Aam taur par sirf aakhri step naapna mushkil hota hai. Pehle ke steps classification aur extraction hain, jo saste aur check karne laayak hain. Jab woh bharosemand hon, to aakhri step ka kaam aasaan ho jaata hai.',
  'This also lowers cost. A classification step can run on a small, cheap model. Only the last step needs an expensive model, and only for the cases that reach it.':
    'Isse cost bhi kam hoti hai. Classification step chhote, saste model par chal sakta hai. Sirf aakhri step ko mehnga model chahiye, aur woh bhi sirf un cases ke liye jo wahan tak pahunchte hain.',
  'Which type, and what changes':
    'Kaunsa type, aur kya badalta hai',
  'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?':
    'Ek colleague “aisa AI jo contracts review kare aur risky clauses flag kare” maangta hai. Yeh kaunsa task type hai?',
  'Mostly classify, with extract underneath. Each clause goes into a category, such as standard, unusual or missing, and the risky clauses have their text extracted to show. Very little of it is generation.':
    'Zyadatar classify, neeche extract ke saath. Har clause ek category mein jaata hai, jaise standard, unusual ya missing, aur risky clauses ka text dikhaane ke liye extract hota hai. Isme generation bahut kam hai.',
  'That changes how you build it. Classification has right answers, so you can build an answer key from a hundred clauses a lawyer has already reviewed, and measure quality before you ship. If you had built a generator instead, you would have nothing to measure.':
    'Isse banaane ka tareeka badal jaata hai. Classification ke sahi jawab hote hain, isliye aap ek lawyer ke pehle se review kiye sau clauses se answer key bana sakte hain, aur ship karne se pehle quality naap sakte hain. Agar aapne generator banaya hota, to naapne ko kuchh nahi hota.',
  'Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.':
    '“Kaunsa model?” se pehle “kaunsa task type?” poochhiye. Agar jawab ek se zyada type hai, to request ko steps mein todiye.',
  'The next two chapters cover the two types you will meet most often. Chapter 2.4 covers classification, the type with a right answer.':
    'Agle do chapters un do types ko cover karte hain jinse aap sabse zyada milenge. Chapter 2.4 classification cover karta hai, woh type jiska sahi jawab hota hai.',
  'Classification: sorting inputs into categories':
    'Classification: inputs ko categories mein baantna',
  'Classification puts each input into one of a fixed set of categories. It has a right answer, so you can measure it and improve it on purpose. You will build a classifier, score it per category, and decide which errors are cheaper.':
    'Classification har input ko categories ke ek fixed set mein se ek mein daalta hai. Iska sahi jawab hota hai, isliye aap ise naap kar jaan-boojh kar behtar kar sakte hain. Aap ek classifier banayenge, use har category ke hisaab se score karenge, aur tay karenge ki kaunsi galtiyan sasti hain.',
  'Build a classifier for a real set of categories and measure it honestly.':
    'Categories ke ek asli set ke liye classifier banana aur use imaandaari se naapna.',
  'Find the category your system is worst at, and say what that costs the business.':
    'Woh category dhoondhna jismein aapka system sabse kharaab hai, aur batana ki business ko uski kya keemat padti hai.',
  'Explain why an overall accuracy figure often hides the failure that matters.':
    'Samjhaana ki overall accuracy figure aksar zaroori failure ko kyun chhupa deta hai.',
  'A classifier you would trust to route real work':
    'Aisa classifier jis par asli kaam route karne ka bharosa ho',
  'Build a classifier for a real set of categories at your work, measure it per category, and decide with numbers whether it is good enough to act on its own or only to suggest.':
    'Apne kaam ki categories ke ek asli set ke liye classifier banaiye, har category ke hisaab se naapiye, aur numbers ke saath tay kijiye ki woh khud faisla le sakta hai ya sirf suggest kar sakta hai.',
  'Fix the categories. Include an <em>other</em> or <em>unclear</em> category, so the model is not forced into a wrong answer.':
    'Categories tay kijiye. Ek <em>other</em> ya <em>unclear</em> category rakhiye, taaki model galat jawab dene par majboor na ho.',
  'Collect fifty real examples and label them yourself before you run anything.':
    'Kuchh bhi chalaane se pehle pachaas asli examples ikattha kijiye aur khud label kijiye.',
  'Build the classifier with two worked examples, one of which is a borderline case.':
    'Do worked examples ke saath classifier banaiye, jinme se ek borderline case ho.',
  'Measure each category separately, not just overall. Write the results as a table.':
    'Har category alag se naapiye, sirf overall nahi. Results ko table mein likhiye.',
  'For your worst category, write what each direction of error costs. Change the instruction so borderline cases fall the cheaper way, and measure again.':
    'Apni sabse kharaab category ke liye likhiye ki galti ki har disha ki kya keemat hai. Instruction badaliye taaki borderline cases saste taraf girein, aur phir naapiye.',
  'Set a threshold: above what score per category would you let it route work automatically, and below what would it only suggest?':
    'Threshold tay kijiye: har category mein kis score ke upar aap use automatically kaam route karne denge, aur kiske neeche woh sirf suggest karega?',
  'You have per-category scores from fifty examples you labelled before testing.':
    'Aapke paas test se pehle label kiye pachaas examples se har category ke scores hain.',
  'You made one deliberate change to how borderline cases fall, and measured the effect.':
    'Aapne borderline cases ke girne ke tareeke mein ek soch-samajh kar badlaav kiya, aur uska asar naapa.',
  'You can state the score at which you would let it act on its own, and whether it is above that score today.':
    'Aap woh score bata sakte hain jis par aap use khud kaam karne denge, aur kya woh aaj us score se upar hai.',
  'Five task types, and which have right answers':
    'Paanch task types, aur kinke sahi jawab hote hain',
  'Classification is one that can be graded.':
    'Classification un mein se ek hai jo grade ho sakta hai.',
  'A test set shows whether a change helped':
    'Test set dikhata hai ki badlaav se madad mili ya nahi',
  'Open a notebook called <code>chapter-2-4</code> and run the warm-up cells. Bring twenty real examples of something at your work that gets sorted into categories, such as tickets by type, documents by department or requests by urgency.':
    '<code>chapter-2-4</code> naam ka notebook kholiye aur warm-up cells chalaiye. Apne kaam ki kisi aisi cheez ke bees asli examples laaiye jo categories mein baanti jaati hai, jaise type ke hisaab se tickets, department ke hisaab se documents, ya urgency ke hisaab se requests.',
  'Look again at your test set':
    'Apne test set ko phir dekhiye',
  'Open the ten-row test set from Chapter 2.2. Look at the “good answer contains” column.':
    'Chapter 2.2 ka das rows wala test set kholiye. “Achhe jawab mein kya hona chahiye” column dekhiye.',
  'If your task was classification or extraction, those rows are precise: a value, a category, a yes. If it was summarisation, they are vague, and grading them took judgement. The difference comes from the task type, not from how you wrote them.':
    'Agar aapka task classification ya extraction tha, to woh rows saaf hain: ek value, ek category, ek haan. Agar summarisation tha, to woh dhundhli hain, aur unhe grade karne mein judgement laga. Yeh farq task type se aata hai, aapke likhne ke tareeke se nahi.',
  'What classification is':
    'Classification kya hai',
  'Classification puts each input into one of a fixed set of categories. Much of what useful software does is classification. Its big advantage is that someone can say whether each answer was right.':
    'Classification har input ko categories ke ek fixed set mein se ek mein daalta hai. Kaam ke software ka bahut bada hissa classification hai. Iska bada fayda yeh hai ki koi bata sakta hai ki har jawab sahi tha ya nahi.',
  'When there is a right answer, you can count errors. When you can count errors, you can improve the system on purpose.':
    'Jab sahi jawab hota hai, to aap galtiyan gin sakte hain. Jab galtiyan gin sakte hain, to system ko jaan-boojh kar behtar kar sakte hain.',
  'Build a first version':
    'Pehla version banaiye',
  'Build the simplest classifier':
    'Sabse simple classifier banaiye',
  'Write the simplest possible version: the categories, one line of instruction, and no examples.':
    'Sabse simple version likhiye: categories, instruction ki ek line, aur koi example nahi.',
  'Most answers are right, and the wrong ones are of two kinds. Some are real misreadings. Others come back as <code>Billing.</code> or <code>the category is billing</code>. These are not wrong, but your code cannot use them: you asked for a label and got a sentence.':
    'Zyadatar jawab sahi hain, aur galat wale do tarah ke hain. Kuchh sach mein galat padhe gaye. Baaki <code>Billing.</code> ya <code>the category is billing</code> ki tarah aate hain. Yeh galat nahi hain, lekin aapka code inhe use nahi kar sakta: aapne label maanga aur sentence mila.',
  'Fix the format with the technique from Chapter 2.1: show an example instead of describing it. Add two worked examples, one of them an awkward case, and the format stops varying. Chapter 8 shows how to make other formats impossible, but two examples get you most of the way.':
    'Format ko Chapter 2.1 ki technique se theek kijiye: describe karne ki jagah example dikhaiye. Do worked examples jodiye, ek pechida case wala, aur format badalna band ho jaata hai. Chapter 8 dikhata hai ki doosre formats ko namumkin kaise banaayein, lekin do examples zyadatar kaam kar dete hain.',
  'Measure each category separately':
    'Har category alag se naapiye',
  'Score each category':
    'Har category ko score kijiye',
  'Grade all twenty against the answers you know. Count results for each category, not just overall.':
    'Saare bees ko un jawabon se grade kijiye jo aapko pata hain. Results har category ke liye giniye, sirf overall nahi.',
  'The overall figure looks good, and one category is much worse than the rest. It is usually the rarest category, or one whose boundary with another category is unclear.':
    'Overall figure achha dikhta hai, aur ek category baaki se kaafi kharaab hoti hai. Aam taur par yeh sabse kam aane wali category hoti hai, ya woh jiski doosri category se seema saaf nahi.',
  'Report accuracy per category, not only overall. A system that is 92% right overall and 40% right on the urgent category is not good enough for urgent messages.':
    'Accuracy har category ke hisaab se report kijiye, sirf overall nahi. Jo system overall 92% aur urgent category mein 40% sahi hai, woh urgent messages ke liye kaafi achha nahi hai.',
  'Take your worst category. Write what happens to a real person when a message in that category goes to the wrong place. Then write what happens in the other direction, when another message is wrongly put in that category.':
    'Apni sabse kharaab category lijiye. Likhiye ki jab us category ka message galat jagah jaata hai to ek asli insaan ke saath kya hota hai. Phir doosri disha likhiye, jab koi doosra message galti se us category mein daal diya jaata hai.',
  'The two directions rarely cost the same. Missing an urgent complaint and wrongly flagging a routine one as urgent are both errors, but one is much cheaper. Once you know which, you can tune the system to lean the cheaper way, by making borderline cases fall into the safer category. That is a product decision, based on numbers, and it is yours to make.':
    'Dono dishaon ki keemat shayad hi kabhi barabar hoti hai. Urgent complaint chhoot jaana aur routine wale ko galti se urgent maan lena dono galtiyan hain, lekin ek bahut sasti hai. Jab pata ho ki kaunsi, to aap system ko saste taraf jhukne ke liye tune kar sakte hain, borderline cases ko surakshit category mein daal kar. Yeh numbers par aadharit product decision hai, aur yeh aapka faisla hai.',
  'Most of this chapter was not about AI. An answer key, counts per category, and a judgement about which error is cheaper are the same tools you would use to evaluate a hiring process or a triage desk.':
    'Is chapter ka zyadatar hissa AI ke baare mein nahi tha. Answer key, har category ki ginti, aur kaunsi galti sasti hai iska judgement wahi tools hain jo aap hiring process ya triage desk ko evaluate karne mein use karte.',
  'The next task type, summarisation, has no single right answer. That is why many teams ship summarisers without knowing whether they work.':
    'Agla task type, summarisation, ka koi ek sahi jawab nahi hota. Isiliye kai teams yeh jaane bina summarisers ship kar deti hain ki woh kaam karte hain ya nahi.',
  'Summarisation: testing what a summary keeps':
    'Summarisation: test kijiye ki summary kya rakhti hai',
  'A summary that drops the most important line can still read well, so this failure is easy to miss. You will define who a summary is for, then build a test that checks whether the facts that matter survive.':
    'Jo summary sabse zaroori line chhod de woh bhi achhi padh sakti hai, isliye yeh failure aasaani se chhoot jaata hai. Aap tay karenge ki summary kiske liye hai, phir ek test banayenge jo check kare ki zaroori facts bache ya nahi.',
  'Decide who a summary is for, and what they will do next, before writing the prompt.':
    'Prompt likhne se pehle tay karna ki summary kiske liye hai, aur woh aage kya karenge.',
  'Test a summariser for the failure that matters: what it left out.':
    'Summariser ko us failure ke liye test karna jo maayne rakhta hai: usne kya chhoda.',
  'Explain why “it reads well” tells you almost nothing about a summary.':
    'Samjhaana ki “achhi padhti hai” summary ke baare mein lagbhag kuchh nahi batata.',
  'A summariser with a fact check':
    'Fact check ke saath ek summariser',
  'Build a summariser for a real document type, and the test that shows it keeps what matters. The test is the main deliverable. Anyone can write the prompt.':
    'Ek asli document type ke liye summariser banaiye, aur woh test jo dikhaye ki woh zaroori baatein rakhta hai. Test hi main deliverable hai. Prompt koi bhi likh sakta hai.',
  'Name the reader and the decision. If you cannot name a decision, you cannot say what the summary is for or how to test it.':
    'Padhne wale aur decision ka naam dijiye. Agar aap decision ka naam nahi de sakte, to aap nahi bata sakte ki summary kis liye hai ya use kaise test karein.',
  'Take ten real documents. For each, write down the two or three facts a reader would be upset to lose.':
    'Das asli documents lijiye. Har ek ke liye woh do-teen facts likhiye jinke chhootne par padhne wala naraz hoga.',
  'Build the summariser and run the fact check on all ten. Record the miss rate.':
    'Summariser banaiye aur saare das par fact check chalaiye. Miss rate record kijiye.',
  'Make one change, such as an instruction about what to keep word for word, and measure again.':
    'Ek badlaav kijiye, jaise kya shabd-dar-shabd rakhna hai iski instruction, aur phir naapiye.',
  'Find a document where a fact survived in different wording and your check missed it. Note what that means for your number.':
    'Aisa document dhoondhiye jahan koi fact alag wording mein bacha aur aapka check use nahi pakad paaya. Note kijiye ki aapke number ke liye iska kya matlab hai.',
  'Write a note to whoever asked for this feature: what it keeps, what it drops, and the miss rate you measured.':
    'Jisne yeh feature maanga use note likhiye: yeh kya rakhta hai, kya chhodta hai, aur aapka naapa hua miss rate.',
  'The note says who the summary is for, so someone else could test it the same way later.':
    'Note batata hai ki summary kiske liye hai, taaki koi aur baad mein use isi tarah test kar sake.',
  'Some task types have no right answer':
    'Kuchh task types ka sahi jawab nahi hota',
  'Summarisation is the first you meet.':
    'Summarisation pehla aisa type hai jisse aap milte hain.',
  'Counting per category beats one overall number':
    'Har category ki ginti ek overall number se behtar hai',
  'The same idea, applied where counting is harder.':
    'Wahi idea, wahan lagaaya gaya jahan ginna mushkil hai.',
  'You will summarise one document several ways.':
    'Aap ek document ko kai tarah summarise karenge.',
  'Open a notebook called <code>chapter-2-5</code>. Bring one real document with something important buried in it, such as a deadline, an exception, a liability or a number someone would be upset to miss.':
    '<code>chapter-2-5</code> naam ka notebook kholiye. Ek aisa asli document laaiye jismein kuchh zaroori baat dabi ho, jaise deadline, exception, liability ya koi number jiske chhootne par koi naraz ho.',
  'How summaries fail':
    'Summaries kaise fail hoti hain',
  'Summarise with a plain instruction':
    'Simple instruction se summarise kijiye',
  'Summarise your document with the simplest instruction. Then check whether the buried detail is in the summary.':
    'Sabse simple instruction se apna document summarise kijiye. Phir check kijiye ki dabi hui detail summary mein hai ya nahi.',
  'You get a well-organised, fluent summary, and it often leaves out the buried detail. Nothing in it is false. It shortened every part of the document equally, but the important content was concentrated in one place.':
    'Aapko ek achhi tarah organised, fluent summary milti hai, aur woh aksar dabi hui detail chhod deti hai. Isme kuchh jhooth nahi hai. Usne document ke har hisse ko barabar chhota kiya, lekin zaroori baat ek hi jagah thi.',
  'A summary that lost the most important line looks exactly like one that kept it. You have to test for the missing detail directly.':
    'Sabse zaroori line khone wali summary bilkul us summary jaisi dikhti hai jisne use rakha. Missing detail ke liye aapko seedha test karna padta hai.',
  'Start from the reader':
    'Padhne wale se shuru kijiye',
  'So before you write a summarisation prompt, answer two questions: who reads this, and what will they do next? A summary is only good or bad for a particular reader and decision.':
    'Isliye summarisation prompt likhne se pehle do sawaalon ka jawab dijiye: ise kaun padhta hai, aur woh aage kya karega? Summary sirf kisi khaas padhne wale aur decision ke liye achhi ya buri hoti hai.',
  'Summarise for three different readers':
    'Teen alag padhne walon ke liye summarise kijiye',
  'Summarise the document three times, naming a different reader and decision each time.':
    'Document ko teen baar summarise kijiye, har baar alag padhne wale aur decision ka naam dete hue.',
  'You get three different summaries. The lawyer’s version keeps the obligations and drops the background. The new joiner’s version does the opposite. Neither is better; each answers a different question. The plain version from the first step was not written for anyone in particular.':
    'Aapko teen alag summaries milti hain. Lawyer wala version obligations rakhta hai aur background chhodta hai. Naye joiner wala ulta karta hai. Koi behtar nahi hai; har ek alag sawaal ka jawab hai. Pehle step ka simple version kisi khaas ke liye likha hi nahi gaya tha.',
  'Test what the summary keeps':
    'Test kijiye ki summary kya rakhti hai',
  'You cannot grade the writing in a summary with a program. You can check whether specific facts made it through.':
    'Program se summary ki likhawat grade nahi ho sakti. Lekin aap check kar sakte hain ki specific facts bache ya nahi.',
  'For each document, list the facts a reader must not lose, and check every summary for them.':
    'Har document ke liye woh facts likhiye jo padhne wale ko nahi khone chahiye, aur har summary mein unhe check kijiye.',
  'Build a fact check':
    'Fact check banaiye',
  'For five real documents, write down the two or three facts a reader must not lose. Then check each summary for them in code.':
    'Paanch asli documents ke liye woh do-teen facts likhiye jo padhne wale ko nahi khone chahiye. Phir code se har summary mein unhe check kijiye.',
  'You get a miss rate for the thing that matters. The check is crude: a summary can include a fact in different words, and this check will miss it. It is still far more useful than reading five summaries and deciding they look fine.':
    'Aapko us cheez ka miss rate milta hai jo maayne rakhti hai. Check mota hai: summary kisi fact ko alag shabdon mein rakh sakti hai, aur yeh check use nahi pakdega. Phir bhi yeh paanch summaries padh kar theek maan lene se kahin zyada kaam ka hai.',
  'Now change one thing. Add <em>“keep every date, amount and named party exactly as written”</em> to the prompt and run it again.':
    'Ab ek cheez badaliye. Prompt mein <em>“har date, amount aur naam wali party bilkul waise hi rakho jaise likhi hai”</em> jodiye aur phir chalaiye.',
  'The miss rate usually drops sharply, and the summaries get a little longer and a little less readable. That is the trade-off, and you now have numbers for both sides.':
    'Miss rate aam taur par tezi se girta hai, aur summaries thodi lambi aur thodi kam padhne laayak ho jaati hain. Yahi trade-off hai, aur ab aapke paas dono taraf ke numbers hain.',
  'Chapters 2.4 and 2.5 use the same method for two task types: decide what counts as failure, then measure that specific failure instead of reading outputs and forming an impression.':
    'Chapters 2.4 aur 2.5 do task types ke liye ek hi tareeka use karte hain: tay kijiye ki failure kya hai, phir outputs padh kar raay banaane ki jagah usi specific failure ko naapiye.',
  'Everything so far works on a document you can paste into the request. Sometimes the answer is spread across a hundred documents, such as a handbook, a policy library or five years of contracts. These methods do not help there, because the model has never seen those documents. Chapter 3 starts solving that.':
    'Ab tak sab kuchh us document par chalta hai jise aap request mein paste kar sakte hain. Kabhi jawab sau documents mein bikhra hota hai, jaise handbook, policy library ya paanch saal ke contracts. Wahan yeh tareeke madad nahi karte, kyunki model ne woh documents kabhi dekhe hi nahi. Chapter 3 ise hal karna shuru karta hai.'

});
