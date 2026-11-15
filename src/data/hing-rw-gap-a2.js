/* Hinglish: gap package A2 (role and background: trajectory beat, DPDP, bridges, saved files, default corpus, cost per correct answer, voice, predict asks).
   Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'Score the path, not only the answer':
    'Sirf answer nahi, raasta bhi score kijiye',
  'So far you have judged an agent by reading its final answer. But an agent can reach the right answer by the wrong path. It may call a tool it did not need, skip one it did, or call the same one twice. A correct answer hides all of that, and a wrong path costs money on every run.':
    'Ab tak aapne agent ko uska final answer padhkar parkha hai. Lekin agent galat raaste se sahi answer tak pahunch sakta hai. Woh aisa tool bula sakta hai jiski zaroorat nahi thi, zaroori tool chhod sakta hai, ya ek hi tool do baar bula sakta hai. Sahi answer yeh sab chhupa leta hai, aur galat raasta har run par paisa kharch karta hai.',
  'Checking the steps is called a <strong>trajectory evaluation</strong>: you score the ordered list of tool calls separately from the final answer. For each task you ask two questions. Was the answer right? Did the agent call the tools you expected? Chapter 26 does this on a longer list. Here is a small version.':
    'Steps ki jaanch ko <strong>trajectory evaluation</strong> kehte hain: aap tool calls ki ordered list ko final answer se alag score karte hain. Har task ke liye do sawaal poochte hain. Kya answer sahi tha? Kya agent ne wahi tools bulaaye jo aap expect kar rahe the? Chapter 26 yeh ek lambi list par karta hai. Yeh uska chhota version hai.',
  'Score six tasks':
    'Chhe tasks score kijiye',
  'Run this cell. It asks the agent six questions, each with the words a right answer must contain and the tools it should call. The sixth question cannot be answered, so the right behaviour is to say so.':
    'Yeh cell chalaiye. Yeh agent se chhe sawaal poochta hai, har ek ke saath woh shabd jo sahi answer mein hone chahiye aur woh tools jo bulaane chahiye. Chhatha sawaal answer nahi ho sakta, isliye sahi vyavhaar yeh kehna hai ki answer nahi hai.',
  'Each line shows whether the answer was right, whether the path was right, and the tools called. Your two totals will differ from anyone else’s. Look at the rows where the two scores disagree. A right answer on the wrong path is the case that checking only the final answer never sees. The word match is crude, so read any row it marks wrong before you trust it.':
    'Har line dikhati hai ki answer sahi tha ya nahi, raasta sahi tha ya nahi, aur kaun se tools bulaaye gaye. Aapke do totals kisi aur ke totals se alag honge. Un rows ko dekhiye jahan dono scores alag hain. Galat raaste par sahi answer woh case hai jo sirf final answer jaanchne se kabhi nahi dikhta. Word match mota hai, isliye jo row galat mark ho use bharosa karne se pehle padhiye.',
  'A step limit and an approval point are delegation of powers and maker-checker. Nobody gets unlimited authority, and anything that cannot be undone needs a second person to sign. The agent gets the same rules you would write for an officer.':
    'Step limit aur approval point wahi hain jo adhikaron ka delegation aur maker-checker hain. Kisi ko bhi asimit adhikar nahi milta, aur jo kaam wapas nahi ho sakta use doosre vyakti ke sign ki zaroorat hoti hai. Agent par wahi niyam lagte hain jo aap kisi adhikari ke liye likhte.',
  'You already know this':
    'Yeh aap pehle se jaante hain',
  'Save the six cases from the chapter as <code>evals/agent-cases-v1.csv</code> in your repository, with three columns: the question, the words a right answer contains, and the tools it should call. Write your two scores, final answer and path, under the file name in the notes box. Chapter 26 scores a longer list the same way.':
    'Chapter ke chhe cases ko apni repository mein <code>evals/agent-cases-v1.csv</code> ke roop mein save kijiye, teen columns ke saath: sawaal, woh shabd jo sahi answer mein hon, aur woh tools jo bulaane chahiye. Notes box mein file ke naam ke neeche apne do scores likhiye, final answer aur raasta. Chapter 26 isi tarah ek lambi list score karta hai.',
  'An agent answers six test questions correctly, but on two of them it called the exchange-rate tool when it did not need to. What does a score on the final answers alone tell you?':
    'Ek agent chhe test sawaalon ke sahi jawab deta hai, lekin do mein usne exchange-rate tool bulaaya jabki zaroorat nahi thi. Sirf final answers ka score aapko kya batata hai?',
  'That nothing is wrong, because every answer was right':
    'Ki kuch galat nahi hai, kyunki har answer sahi tha',
  'That the agent calls its tools efficiently':
    'Ki agent apne tools efficiently bulata hai',
  'Only the answers. The two extra calls cost money on every run, and only a trajectory evaluation shows them':
    'Sirf answers. Do extra calls har run par paisa kharch karte hain, aur unhe sirf trajectory evaluation dikhata hai',
  'That the tool descriptions are well written':
    'Ki tool descriptions achhi likhi hain',
  'The final answer hides the route. Scoring the ordered list of tool calls, separately from the answer, is called trajectory evaluation. An agent can reach the right answer by the wrong path, and the wrong path is where the cost and the risk sit.':
    'Final answer raasta chhupa leta hai. Tool calls ki ordered list ko answer se alag score karna trajectory evaluation kehlata hai. Agent galat raaste se sahi answer tak pahunch sakta hai, aur cost aur risk galat raaste mein hi baithte hain.',
  'Save the four prompts and their four scores as <code>docs/prompt-and-scores.md</code> in your repository.':
    'Chaaron prompts aur unke chaaron scores ko apni repository mein <code>docs/prompt-and-scores.md</code> ke roop mein save kijiye.',
  'Save the note as <code>docs/scoreboard-v0.md</code> in your repository.':
    'Note ko apni repository mein <code>docs/scoreboard-v0.md</code> ke roop mein save kijiye.',
  'Save the page as <code>docs/findings-v0.md</code> in your repository. Before you make the repository public, search it for keys and real personal details. Then switch on the repository’s public page (Pages, in its settings) if you want a link anyone can open.':
    'Page ko apni repository mein <code>docs/findings-v0.md</code> ke roop mein save kijiye. Repository ko public karne se pehle usme keys aur asli personal details khoj lijiye. Phir, agar aap aisa link chahte hain jo koi bhi khol sake, to repository ka public page (settings mein Pages) chalu kijiye.',
  'Save the marking rules, the agreement figure and the disagreements as <code>docs/judge-check.md</code> in your repository.':
    'Marking rules, agreement ka figure aur disagreements ko apni repository mein <code>docs/judge-check.md</code> ke roop mein save kijiye.',
  'Save the three cost numbers and the table behind them as <code>docs/cost-model.md</code> in your repository.':
    'Teen cost numbers aur unke peeche ki table ko apni repository mein <code>docs/cost-model.md</code> ke roop mein save kijiye.',
  'Save the card as <code>docs/system-card.md</code> in your repository. The system card tool above has an “Export system card” button that gives you the file.':
    'Card ko apni repository mein <code>docs/system-card.md</code> ke roop mein save kijiye. Upar ke system card tool mein “Export system card” button hai jo aapko file deta hai.',
  'Checking a judge against your own marking is checking a second evaluator on a tender committee. If two evaluators score the same bids differently, you find out why before you trust either one’s scores.':
    'Judge ko apni marking se milana waisa hi hai jaise tender committee mein doosre evaluator ko check karna. Agar do evaluator same bids ko alag score dein, to aap kisi ek ke scores par bharosa karne se pehle jaanchte hain ki kyun.',
  'Error analysis is grievance categorisation. You read the complaints first, then name the groups, and only then count. Nobody designs the categories before reading the complaints, and you should not here either.':
    'Error analysis grievance categorisation hai. Aap pehle shikayatein padhte hain, phir groups ke naam rakhte hain, aur tabhi ginti karte hain. Shikayatein padhne se pehle koi categories nahi banata, aur yahan bhi nahi banani chahiye.',
  'The loaded cost model is total cost of ownership in a project report, worked out per transaction. The licence is one line. Support, review and retries are the rest, and the four multipliers below are those lines.':
    'Loaded cost model project report ka total cost of ownership hai, jo per transaction nikala jaata hai. Licence ek line hai. Support, review aur retries baaki lines hain, aur neeche ke chaar multipliers wahi lines hain.',
  'A system card is the security-audit and sign-off file for one system. The difference is that you write the limitations section yourself, with evidence, instead of leaving it for the auditor to find.':
    'System card ek system ki security-audit aur sign-off file hai. Fark yeh hai ki limitations wala section aap khud evidence ke saath likhte hain, auditor ke dhoondhne ke liye nahi chhodte.',
  'The kill switch is the manual fallback in a continuity plan: the paper process you can go back to the same day. Model retirement is vendor end-of-support, and you plan for it the same way.':
    'Kill switch continuity plan ka manual fallback hai: woh paper process jis par aap usi din wapas ja sakte hain. Model retirement vendor ka end-of-support hai, aur aap uski planning usi tarah karte hain.',
  'Cost per correct answer':
    'Sahi answer ki cost',
  'Fill the last column from the others. Cost per correct answer is the cost per query divided by the share of answers that were right, so 6 right out of 9 is a share of 0.67. A cheap setting that is often wrong can cost more per correct answer than a dearer one that is right.':
    'Aakhri column baaki columns se bhariye. Sahi answer ki cost, cost per query ko sahi answers ke hisse se bhaag dekar nikalti hai, to 9 mein se 6 sahi ka hissa 0.67 hai. Ek sasta setting jo aksar galat ho, sahi answer ke hisaab se ek mehange lekin sahi setting se zyada kharch kar sakta hai.',
  'Two more points on the EU AI Act. Duties differ for whoever <em>provides</em> a system and whoever <em>deploys</em> it, so find out which one you are. And transparency duties apply to chatbots and to generated media: people must be told they are dealing with an AI, and generated images and audio must be labelled.':
    'EU AI Act par do baatein aur. Duties alag hoti hain us par jo system <em>provide</em> karta hai aur us par jo use <em>deploy</em> karta hai, isliye pata kijiye ki aap kaun hain. Aur transparency duties chatbots aur generated media par lagti hain: logon ko bataya jaana chahiye ki woh AI se baat kar rahe hain, aur generated images aur audio par label lagna chahiye.',
  'Dates to check before any interview':
    'Kisi bhi interview se pehle jaanchne wali taarikhein',
  'Rules and deadlines change, and this course does not hold dates. The plan keeps one dated list of regulatory milestones on its Curriculum page, with the DPDP and EU dates. Open it before an interview, check each date against the official source, and quote only what you checked.':
    'Niyam aur deadlines badalte hain, aur yeh course taarikhein nahi rakhta. Plan apne Curriculum page par regulatory milestones ki ek dated list rakhta hai, jisme DPDP aur EU ki taarikhein hain. Interview se pehle use kholiye, har taarikh ko official source se milaiye, aur sirf wahi boliye jo aapne check kiya.',
  'This is the erasure duty from Chapter 16.5 in practice. Under the Indian Act a person can ask you to erase their data, and the places you cannot reach are where you would fail them.':
    'Yeh Chapter 16.5 ke erasure duty ka vyavhaar mein roop hai. Bharatiya Act ke tahat koi vyakti aapse apna data erase karne ko keh sakta hai, aur jin jagahon tak aap nahi pahunch sakte wahin aap unke saath chook jaayenge.',
  'The Indian rule, in the words you will be asked about':
    'Bharatiya niyam, un shabdon mein jo aapse poochhe jaayenge',
  'India’s Digital Personal Data Protection Act, 2023 has a small vocabulary, and interviewers use it. These are the words to know. Read the Act’s own text for the exact duties.':
    'India ke Digital Personal Data Protection Act, 2023 ki shabdawali chhoti hai, aur interviewers use istemaal karte hain. Yeh shabd aapko aane chahiye. Exact duties ke liye Act ka apna text padhiye.',
  '<strong>Data Principal.</strong> The person the data is about. When a bank customer types a message into your app, the customer is the Data Principal.':
    '<strong>Data Principal.</strong> Woh vyakti jiske baare mein data hai. Jab bank ka customer aapke app mein message likhta hai, to customer Data Principal hai.',
  '<strong>Data Fiduciary.</strong> The organisation that decides why and how the data is used. Your company is the Data Fiduciary. A model provider that handles the message for you works on your behalf, so the duty stays with you.':
    '<strong>Data Fiduciary.</strong> Woh sanstha jo tay karti hai ki data kyun aur kaise use hoga. Aapki company Data Fiduciary hai. Jo model provider aapke liye message sambhalta hai woh aapki taraf se kaam karta hai, isliye zimmedari aapki hi rehti hai.',
  '<strong>Notice and consent.</strong> Tell the person in plain words what you collect and why, and ask for their agreement. Use the data only for the purpose you stated.':
    '<strong>Notice aur consent.</strong> Vyakti ko saaf shabdon mein bataiye ki aap kya collect karte hain aur kyun, aur unki sahmati maangiye. Data sirf us purpose ke liye use kijiye jo aapne bataya.',
  '<strong>Erasure.</strong> The person can ask you to erase their data, and you must be able to do it, including where an outside provider holds a copy.':
    '<strong>Erasure.</strong> Vyakti aapse apna data erase karne ko keh sakta hai, aur aapko yeh kar paana chahiye, wahan bhi jahan koi outside provider uski copy rakhta hai.',
  '<strong>Breach reporting.</strong> If personal data leaks, the regulator and the people affected must be told.':
    '<strong>Breach reporting.</strong> Agar personal data leak ho, to regulator aur prabhavit logon ko batana zaroori hai.',
  '<strong>Sending data abroad.</strong> The Act allows it except where the government restricts it. Look up the current position.':
    '<strong>Data bahar bhejna.</strong> Act ise allow karta hai, siwaye wahan jahan sarkar ne restrict kiya ho. Maujooda sthiti khud dekhiye.',
  'This is vocabulary, not legal advice. Check which parts of the Act are in force today. The plan’s dated list of regulatory milestones is the place to look.':
    'Yeh shabdawali hai, legal salah nahi. Dekhiye ki Act ke kaun se hisse aaj lagoo hain. Plan ki regulatory milestones ki dated list dekhne ki jagah hai.',
  'Match each kind of text to a duty':
    'Har tarah ke text ko ek duty se milaiye',
  'Take six kinds of text the project tool might send to an outside model: a sentence with no personal detail; a sentence with a name; a sentence with an Aadhaar number; a cleaned sentence with the details replaced by tags; a whole chat history; a log line that keeps the original message. For each one, write the duty it touches: consent, purpose, erasure, breach or sending data abroad.':
    'Chhe tarah ke text lijiye jo project tool kisi outside model ko bhej sakta hai: bina personal detail wala ek sentence; naam wala sentence; Aadhaar number wala sentence; ek saaf kiya hua sentence jisme details tags se badal di gayi hain; poori chat history; aur ek log line jo asli message rakhti hai. Har ek ke liye likhiye ki woh kaun si duty chhoota hai: consent, purpose, erasure, breach ya data bahar bhejna.',
  'Two things usually show. The cleaned sentence touches almost no duty, which is the case for building the tool. The chat history and the log line touch several, and the log line is the one nobody thought about. The capstone asks for the same kind of table.':
    'Aamtaur par do baatein dikhti hain. Saaf kiya hua sentence lagbhag koi duty nahi chhoota, jo tool banane ka case hai. Chat history aur log line kai chhoote hain, aur log line ke baare mein kisi ne socha nahi tha. Capstone isi tarah ki table maangta hai.',
  'A test set is the user acceptance cases you wrote before go-live. The difference is that you rerun it every time the prompt or the model changes, not once before sign-off.':
    'Test set woh user acceptance cases hain jo aap go-live se pehle likhte hain. Fark yeh hai ki aap use har baar dobara chalate hain jab prompt ya model badalta hai, sirf sign-off se pehle ek baar nahi.',
  'Per-category accuracy is the district table behind a state average. One failing district hides inside a good total. You would not report only the state figure to a ministry, so do not report only the overall accuracy.':
    'Per-category accuracy state average ke peeche ki district table hai. Ek fail hota district achhe total mein chhup jaata hai. Aap ministry ko sirf state ka figure nahi dete, to sirf overall accuracy mat bataiye.',
  'Precision and recall are the inclusion and exclusion errors in beneficiary targeting. Low precision lets ineligible people in. Low recall leaves eligible people out. You have already had to decide which error a scheme can live with.':
    'Precision aur recall beneficiary targeting ke inclusion aur exclusion errors hain. Kam precision se ineligible log andar aa jaate hain. Kam recall se eligible log bahar rah jaate hain. Aapko pehle hi tay karna pada hai ki scheme kaun si galti sah sakti hai.',
  'A circular asking staff to behave is a filter. Role-based access is a control. The circular lowers the odds of a mistake, and the access rule removes the ability to make it. This chapter draws the same line for a model.':
    'Staff se vyavhaar karne ko kehne wala circular ek filter hai. Role-based access ek control hai. Circular galti ki sambhavna ghatata hai, aur access rule galti karne ki kshamta hata deta hai. Yeh chapter model ke liye wahi rekha kheenchta hai.',
  'Testing a vendor on your own answer key is technical evaluation with your own test cases, not the vendor’s demo data. The exit clause is the question every tender should ask: what would it take to leave?':
    'Vendor ko apni answer key par parkhna apne test cases ke saath technical evaluation hai, vendor ke demo data ke saath nahi. Exit clause woh sawaal hai jo har tender ko poochna chahiye: chhodne ke liye kya karna padega?',
  'A pilot that could fail is a pilot district. You agree the success threshold with the steering committee before rollout, not after the numbers come in.':
    'Jo pilot fail ho sakta hai woh pilot district hai. Success threshold aap steering committee ke saath rollout se pehle tay karte hain, numbers aane ke baad nahi.',
  'No long text of your own? Instead of repeating the cards, paste the public text of the Digital Personal Data Protection Act, 2023 into <code>filler</code>. If it is under eight thousand words, repeat it.':
    'Apna koi lamba text nahi hai? Cards ko dohraane ke bajaye Digital Personal Data Protection Act, 2023 ka public text <code>filler</code> mein paste kijiye. Agar woh aath hazaar shabdon se kam hai, to use dohra lijiye.',
  'First: should this be a model at all?':
    'Pehle: kya yeh model hona bhi chahiye?',
  'Before you pick a task type, ask four questions about the request. Stop at the first one that settles it.':
    'Task type chunne se pehle, request ke baare mein chaar sawaal poochhiye. Jo pehla sawaal baat tay kar de, wahin ruk jaaiye.',
  'Can a fixed rule do it? Then write the rule.':
    'Kya ek fixed rule yeh kar sakta hai? To rule likhiye.',
  'Can a lookup do it? Then look it up.':
    'Kya ek lookup yeh kar sakta hai? To lookup kijiye.',
  'Is a wrong answer cheap to fix? If not, keep a person in the loop.':
    'Kya galat answer ko theek karna sasta hai? Agar nahi, to loop mein insaan rakhiye.',
  'Does anyone need it at all? If not, do not build it.':
    'Kya ise kisi ko zaroorat hai bhi? Agar nahi, to mat banaiye.',
  'Name one request at your work that should not be a model, and say which of the four questions settles it.':
    'Apne kaam ki ek aisi request ka naam likhiye jo model nahi honi chahiye, aur batayiye chaar mein se kaun sa sawaal use tay karta hai.',
  'The request … should not be a model because …':
    'Request … model nahi honi chahiye kyunki …',
  'A good answer names one specific request and one question. “Check that a PAN has the right shape” is settled by the first question: a rule does it for free, and it is the first thing Bharat Privacy Guard runs. Knowing where a model is the wrong tool is what an interviewer in a product-sense round listens for.':
    'Ek achha answer ek khaas request aur ek sawaal ka naam leta hai. “Check kijiye ki PAN ka shape sahi hai” pehle sawaal se tay ho jaata hai: ek rule yeh muft mein kar deta hai, aur Bharat Privacy Guard yahi sabse pehle chalata hai. Yeh jaanna ki model kahan galat tool hai, wahi hai jo product-sense round ka interviewer sunna chahta hai.',
  'Dictate three sentences':
    'Teen sentences bolkar likhwaiye',
  'Open any free speech-to-text tool, such as the dictation on your phone. Say three starter sentences from the project page aloud in Hinglish, including the one with the Aadhaar-style number, and paste the transcripts into your notebook. Use only the made-up sentences, never a real number.':
    'Koi bhi muft speech-to-text tool kholiye, jaise aapke phone ki dictation. Project page ke teen starter sentences Hinglish mein zor se boliye, jisme Aadhaar jaisa number wala sentence bhi ho, aur transcripts ko apne notebook mein paste kijiye. Sirf banaye hue sentences use kijiye, kabhi asli number nahi.',
  'Run each transcript through the pattern checker from Chapter 5 (press <strong>Restore</strong> if you reloaded). Write down what broke: digits written as words, a number split into groups, a name respelled.':
    'Har transcript ko Chapter 5 ke pattern checker se chalaiye (agar reload kiya ho to <strong>Restore</strong> dabaiye). Likhiye ki kya toota: digits shabdon mein likhe gaye, number groups mein bat gaya, naam ki spelling badal gayi.',
  'Speech can turn a twelve-digit number into something a pattern rule cannot see. Add two rows to your answer key. The input is the transcript, and the expected result is what you write by hand. Voice problems are found by testing, not by reading.':
    'Speech ek barah-digit ke number ko aisi cheez bana sakti hai jo pattern rule dekh nahi paata. Apni answer key mein do rows jodiye. Input transcript hai, aur expected result woh hai jo aap haath se likhte hain. Voice ki samasyaayein test karke milti hain, padhkar nahi.',
  'Look these up':
    'Inhe khoj lijiye',
  'India has public bodies for Indian-language speech and text. BHASHINI, the government’s language platform, is one, and the reading list names it. Look up what it offers today and on what terms before you rely on it. Chapter 28 turns this idea into a spoken-numbers test.':
    'India mein Indian-language speech aur text ke liye public sansthaayein hain. BHASHINI, sarkar ka language platform, unme se ek hai, aur reading list use batati hai. Us par bharosa karne se pehle dekhiye ki woh aaj kya deta hai aur kin sharton par. Chapter 28 is vichar ko spoken-numbers test mein badalta hai.',
  'Prompt and scores page':
    'Prompt aur scores ka page',
  'Your four prompt versions and a score for each, run on the same ten inputs.':
    'Aapke chaar prompt versions aur har ek ka score, ek hi das inputs par chalaye hue.',
  'Scoreboard v0':
    'Scoreboard v0',
  'Recall, precision and the failure you chose to accept, on an answer key of about thirty rows.':
    'Lagbhag tees rows ki answer key par recall, precision, aur woh failure jise aapne sweekar karna chuna.',
  'Findings page v0':
    'Findings page v0',
  'The gaps in your first system, ranked by what each would cost a real user.':
    'Aapke pehle system ke gaps, is kram mein ki har ek asli user ko kya nuksaan pahunchata.',
  'Agent test cases':
    'Agent ke test cases',
  'Six agent tasks with the expected answer and the expected tool path, and two scores.':
    'Chhe agent tasks, expected answer aur expected tool path ke saath, aur do scores.',
  'Judge check':
    'Judge ki jaanch',
  'How often your marker agrees with your own marking, and where it leans.':
    'Aapka marker kitni baar aapki apni marking se sehmat hota hai, aur kahan jhukta hai.',
  'Cost model':
    'Cost model',
  'Cost per message, per thousand and per month, and the cost if the cheap path stops working.':
    'Per message, per hazaar aur per month cost, aur woh cost jab sasta raasta kaam karna band kar de.',
  'System card':
    'System card',
  'Risk level, data, measured quality, known failures, limits and human oversight for the tool.':
    'Tool ke liye risk level, data, naapi gayi quality, jaane-pehchane failures, seemaayein aur human oversight.',
});
