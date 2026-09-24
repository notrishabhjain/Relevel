/* Hinglish: items (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  '500':
    '500',
  '(1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504 ≈ 0.05 paise. The arithmetic is easy. The lesson is that per-query costs look negligible until you multiply by volume and the four multipliers.':
    '(1800/1,000,000 × 0.20) + (240/1,000,000 × 0.60) = 0.00036 + 0.000144 = ₹0.000504 ≈ 0.05 paise. Arithmetic aasaan hai. Lesson yeh hai ki per-query costs negligible lagti hain jab tak aap volume aur chaaron multipliers se multiply na karein.',
  'Check a judge against human labels before you use it to measure anything. Unchecked, it is only a second opinion from the same kind of system that produced the answer.':
    'Kisi bhi cheez naapne ke liye use karne se pehle ek judge ko human labels ke against check kijiye. Unchecked, yeh sirf usi tarah ke system se ek doosri opinion hai jisne jawab banaya.',
  'Nobody can actually carry it out at that volume, so it only exists on paper':
    'Us volume par koi bhi isey asal mein carry out nahi kar sakta, isliye yeh sirf paper par exist karta hai',
  'Fine-tuning adjusts the model’s behaviour from examples of inputs and desired outputs. It is extremely good at “always answer in this shape, in this register, following these conventions.” It is a poor and expensive way to add facts. Facts change, and a fine-tuned model must be retrained to learn that they did.':
    'Fine-tuning inputs aur desired outputs ke examples se model ka behaviour adjust karti hai. Yeh "hamesha is shape mein, is register mein, in conventions ko follow karte hue jawab do" jaisi cheez mein bahut achhi hai. Yeh facts jodne ka ek bura aur mehenga tareeka hai. Facts badalte hain, aur ek fine-tuned model ko yeh seekhne ke liye dobara train karna padta hai ki woh badle.',
  'This is a knowledge gap, and knowledge that changes belongs in retrieval where it can be updated, versioned and cited. Fine-tuning fixes it in place until the next training run. A system prompt works only until the policy is long enough to crowd the context. Neither gives the user a citation to check.':
    'Yeh ek knowledge gap hai, aur badalta hua knowledge retrieval mein belong karta hai jahan yeh update, versioned aur cited ho sakta hai. Fine-tuning isey agle training run tak fix kar deti hai. Ek system prompt sirf tab tak kaam karta hai jab tak policy context ko crowd karne jitni lambi na ho jaaye. Dono mein se koi user ko check karne ke liye citation nahi deta.',
  'Fine-tuning is not bad. But the first two options are cheap to try and cheap to undo, so ruling them out costs about a day. Tuning commits you to building and maintaining a labelled dataset, re-running it on every model change, and losing the ability to switch providers easily. Spend that only after the cheap levers have failed against a measurement.':
    'Fine-tuning bura nahi hai. Lekin pehle do options try karna sasta hai aur undo karna sasta hai, isliye unhe rule out karne mein lagbhag ek din lagta hai. Tuning aapko ek labelled dataset banane aur maintain karne, har model change par isey dobara chalane, aur providers aasaani se switch karne ki ability khone ke liye commit karti hai. Isey tabhi kharch kijiye jab sasta levers ek measurement ke against fail ho jaayein.',
  'The first four make the decision. Without an eval, you cannot tell whether fine-tuning helped. Without a named failure with counts, you do not know what you are fixing. Without a dataset, there is nothing to train on and no way to repeat it after the next model is retired. And without trying the reversible options first, you pay the expensive price first. The budget follows from the decision.':
    'Pehle chaar decision banate hain. Bina eval ke, aap nahi bata sakte fine-tuning ne madad ki ya nahi. Bina counts wale ek named failure ke, aapko nahi pata aap kya theek kar rahe hain. Bina dataset ke, train karne ke liye kuchh nahi hai aur agle model ke retire hone ke baad repeat karne ka koi tareeka nahi. Aur pehle reversible options try kiye bina, aap pehle mehenga price pay karte hain. Budget decision se follow karta hai.',
  'Citations exist so that checking is cheaper than trusting. So a citation that does not open the actual passage is worse than none. It looks checkable but cannot be checked, and the user cannot tell the difference.':
    'Citations isliye exist karti hain taaki check karna trust karne se sasta ho. Isliye ek citation jo actual passage nahi kholti, kisi citation se bhi buri hai. Yeh checkable dikhti hai lekin check nahi ho sakti, aur user farq nahi bata sakta.',
  'A displayed confidence number asks the user to judge something they cannot calibrate. Model-reported confidence is also often poorly calibrated. Use the score as a routing signal inside your product. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.':
    'Ek displayed confidence number user se kuchh aisa judge karne ko kehta hai jise woh calibrate nahi kar sakte. Model-reported confidence bhi aksar bure tarike se calibrated hoti hai. Score ko apne product ke andar ek routing signal ki tarah use kijiye. Yeh interface kya karta hai woh badalna chahiye: jawab dena, evidence dikhana, ek clarifying sawaal poochna, ya case ek insaan ko sonpna.',
  'Every system is impressive when it works. Trust depends on what happens when it cannot answer. A system that says “I don’t have that” and offers a route to a person is rightly trusted more than one that always produces something. This screen is designed last or not at all, which is why so many AI features feel unreliable despite good average accuracy.':
    'Har system impressive lagta hai jab yeh kaam karta hai. Trust iss par depend karta hai jab yeh jawab nahi de sakta to kya hota hai. Ek system jo kehta hai "mere paas yeh nahi hai" aur ek insaan tak raasta deta hai, sahi tarike se ussey zyada trusted hai jo hamesha kuchh na kuchh produce karta hai. Yeh screen aakhri mein design hoti hai ya bilkul nahi, isliye bahut si AI features achhi average accuracy ke bawajood unreliable lagti hain.',
  'Write the interface contract for an AI feature you know. What does it show when it is confident, and when it is not? What can the user do when it is wrong? What does the feature still do when the AI is turned off?':
    'Ek AI feature ke liye interface contract likhiye jise aap jaante hain. Jab confident ho to yeh kya dikhata hai, aur jab nahi ho to kya? User galat hone par kya kar sakta hai? AI band hone par bhi feature kya karta rehta hai?',
  'The first three are the exit plan, whether or not anyone called it that. An evaluation set turns "can we switch?" from a debate into a week of work. So the exit plan and the evaluation set usually turn out to be the same artifact.':
    'Pehle teen exit plan hain, chahe kisi ne aisa bulaya ho ya nahi. Ek evaluation set "kya hum switch kar sakte hain?" ko ek bahas se ek hafte ke kaam mein badal deta hai. Isliye exit plan aur evaluation set usually ek hi artifact nikalte hain.',
  'Anyone can demonstrate the happy path. You show you understand a system by knowing where it breaks. Show the measurement that proves you fixed some of it, and say plainly what you did not solve.':
    'Koi bhi happy path demonstrate kar sakta hai. Aap dikhate hain ki aap ek system samajhte hain yeh jaan kar ki yeh kahan tootta hai. Woh measurement dikhaiye jo saabit karta hai aapne kuchh theek kiya, aur saaf saaf bataiye aapne kya solve nahi kiya.',
  'Which of these is evidence for scoring yourself 2 out of 3 in strategy?':
    'Inme se kaunsa strategy mein khud ko 2 out of 3 score karne ka evidence hai?',
  'A score of 2 needs an artifact that someone else can review. Only the memo exists outside your head and changed a real decision. Enjoying the topic, being praised and finishing a course are all useful, but none of them can be checked.':
    'Ek 2 score ke liye ek aisa artifact chahiye jise koi aur review kar sake. Sirf memo aapke dimaag se bahar exist karta hai aur ek real decision badla. Topic enjoy karna, praise milna aur ek course khatam karna sab useful hain, lekin inme se koi check nahi ho sakta.',
  'You enjoy thinking about strategy and read about it often':
    'Aap strategy ke baare mein sochna enjoy karte hain aur isper aksar padhte hain',
  'Your manager once said you have good strategic instincts':
    'Aapke manager ne ek baar kaha aapke paas achhe strategic instincts hain',
  'You wrote a strategy memo that your team used to choose between two roadmap options':
    'Aapne ek strategy memo likha jise aapki team ne do roadmap options mein chunne ke liye use kiya',
  'You finished an online course on product strategy':
    'Aapne product strategy par ek online course khatam kiya',
  'Which of these candidate problems is the best fit for an AI capstone?':
    'Inme se kaunsa candidate problem ek AI capstone ke liye best fit hai?',
  'Grouping tickets means reading and sorting messy text, which is what language models do well, and it has reachable users and a measurable cost. The others are solved well by ordinary software: a trigger, a formula and a booking form. Using AI for them adds cost and errors without adding value.':
    'Tickets group karna matlab messy text padhna aur sort karna hai, jo language models achhe se karte hain, aur iske reachable users aur ek measurable cost hai. Baaki teeno ordinary software se achhe se solve hote hain: ek trigger, ek formula aur ek booking form. Inke liye AI use karna, value jode bina cost aur errors jodta hai.',
  'Emailing customers when their order ships':
    'Order ship hone par customers ko email karna',
  'Grouping the 300 free-text support tickets that arrive each week into themes for the product team':
    'Har hafte aane wale 300 free-text support tickets ko product team ke liye themes mein group karna',
  'Calculating monthly sales tax for each region':
    'Har region ke liye monthly sales tax calculate karna',
  'Letting employees book meeting rooms':
    'Employees ko meeting rooms book karne dena',
  'A team ships an AI meeting summariser that tested well. Usage stays near zero, and interviews show most users never noticed it. Which part of the product loop failed?':
    'Ek team ek AI meeting summariser ship karti hai jo achha test hua. Usage zero ke kareeb rehta hai, aur interviews dikhate hain zyadatar users ne kabhi notice hi nahi kiya. Product loop ka kaunsa hissa fail hua?',
  'The feature tested well, so delivery and feasibility were fine, and the interviews do not say users rejected it. They never found it. That is a distribution failure: the product did not reach users’ attention or habits. A feature nobody finds has the same impact as one nobody built.':
    'Feature achha test hua, isliye delivery aur feasibility theek thi, aur interviews yeh nahi kehte ki users ne rejeect kiya. Unhe yeh mila hi nahi. Yeh ek distribution failure hai: product users ke attention ya habits tak nahi pahuncha. Jise koi nahi dhoondhta uska asar wahi hai jaise koi banaya hi na ho.',
  'Discovery: nobody wanted a summariser':
    'Discovery: kisi ko summariser nahi chahiye tha',
  'Delivery: the summaries were poor quality':
    'Delivery: summaries ki quality kharab thi',
  'Distribution: users never found or tried the feature':
    'Distribution: users ne feature kabhi dhoondha ya try nahi kiya',
  'Feasibility: the model could not do the job':
    'Feasibility: model job nahi kar saka',
  'Users at a large company love your AI writing tool during a pilot. Who is most likely to block the purchase?':
    'Ek badi company mein users pilot ke dauraan aapke AI writing tool se pyaar karte hain. Purchase block karne ki sambhavna sabse zyada kiski hai?',
  'In B2B, the people who use a product are often not the people who approve it. Security, IT, legal and procurement can all say no. For an AI tool, their first question is usually where company data is sent, and whether it is stored or used for training. Plan for that review from the start.':
    'B2B mein, product use karne wale log aksar usey approve karne wale nahi hote. Security, IT, legal aur procurement sab na keh sakte hain. Ek AI tool ke liye, unka pehla sawaal usually yeh hota hai ki company data kahan jaata hai, aur kya yeh store ya training ke liye use hota hai. Shuru se hi us review ke liye plan kijiye.',
  'The end users who tried it':
    'Woh end users jinhone isey try kiya',
  'The company’s security team, reviewing where its data goes':
    'Company ki security team, jo dekh rahi hai iska data kahan jaata hai',
  'Your own engineering team':
    'Aapki apni engineering team',
  'The AI model provider':
    'AI model provider',
  'Which of these are feasibility risks for an AI feature?':
    'Inme se kaunse ek AI feature ke liye feasibility risks hain?',
  'Feasibility asks whether you can build it: accuracy on your data, speed, and access to the data it needs. Whether users choose it over their current workaround is a value risk, not a feasibility risk. Mixing the two up is how teams build something that works and that nobody wants.':
    'Feasibility poochti hai kya aap isey bana sakte hain: apne data par accuracy, speed, aur usey chahiye data tak access. Users ise apne current workaround se zyada chunenge ya nahi, yeh ek value risk hai, feasibility risk nahi. Dono ko mix karna hi hai jisse teams kuchh aisa banate hain jo kaam karta hai lekin jise koi nahi chahta.',
  'Whether the model is right often enough on your own data':
    'Kya model aapke apne data par kaafi baar sahi hai',
  'Whether responses come back fast enough for the task':
    'Kya jawab task ke liye kaafi tez wapas aate hain',
  'Whether you have the data the feature needs':
    'Kya aapke paas woh data hai jo feature ko chahiye',
  'Whether users will choose it over what they do today':
    'Kya users iske liye woh chunenge jo woh aaj karte hain',
  'You are interviewing a support lead about their weekly ticket report. Which question will give you the most reliable evidence?':
    'Aap ek support lead se unki weekly ticket report ke baare mein interview le rahe hain. Kaunsa sawaal sabse reliable evidence dega?',
  'Only the third question asks about something that actually happened. The others ask for opinions or predictions, and people are poor at predicting what they would do and tend to agree with the interviewer. A specific story about the past shows you their real workflow, workarounds and pains.':
    'Sirf teesra sawaal kisi aisi cheez ke baare mein poochta hai jo asal mein hui. Baaki opinions ya predictions maangte hain, aur log yeh predict karne mein bure hote hain ki woh kya karenge aur interviewer se agree karne ki taraf jhukte hain. Past ke baare mein ek specific kahani aapko unka real workflow, workarounds aur pains dikhati hai.',
  'Would you use a tool that summarised tickets for you?':
    'Kya aap ek tool use karenge jo aapke liye tickets summarise kare?',
  'How much would you pay for an automatic summary?':
    'Ek automatic summary ke liye aap kitna pay karenge?',
  'Tell me about the last time you prepared the report. What did you do first?':
    'Mujhe bataiye pichhli baar jab aapne report taiyaar ki, aapne sabse pehle kya kiya?',
  'Do you think AI could make this easier?':
    'Kya aapko lagta hai AI isey aasaan bana sakta hai?',
  'Which of these is a leading question?':
    'Inme se kaunsa ek leading question hai?',
  'A leading question suggests the answer the interviewer wants to hear. “Isn’t it frustrating…” invites a yes, whether or not it is true. Ask instead: “What was the hardest part of last week’s report?” and let them tell you what is hard.':
    'Ek leading question woh jawab suggest karti hai jo interviewer sunna chahta hai. "Kya yeh frustrating nahi hai…" ek haan ko invite karta hai, chahe woh sach ho ya na ho. Iski jagah poochiye: "Pichhle hafte ki report ka sabse mushkil hissa kya tha?" aur unhe batane dijiye kya mushkil hai.',
  'What happened the last time a customer complaint was missed?':
    'Pichhli baar jab ek customer complaint miss hui to kya hua?',
  'Isn’t it frustrating to read hundreds of tickets every week?':
    'Kya har hafte sainkadon tickets padhna frustrating nahi hai?',
  'Walk me through how you tagged last week’s tickets.':
    'Mujhe bataiye aapne pichhle hafte ke tickets kaise tag kiye.',
  'What tools do you use for this today?':
    'Iske liye aaj aap kaunse tools use karte hain?',
  'After five interviews, your persona includes the line: “Busy, data-driven manager who wants AI to save time.” What is the main problem with it?':
    'Paanch interviews ke baad, aapki persona mein yeh line hai: "Busy, data-driven manager jo chahta hai AI time bachaye." Iski main problem kya hai?',
  'A persona is a summary of evidence. This line has no interview number next to it, and it would fit nearly every manager alive, so it tells the team nothing they can design for. Replace it with specific, traceable detail, such as “Reads about 300 tickets every Monday and skims most of them (interviews 1, 4).”':
    'Ek persona evidence ka summary hai. Is line ke saath koi interview number nahi hai, aur yeh lagbhag har zinda manager par fit baith jaayegi, isliye yeh team ko design karne layak kuchh nahi batati. Isey specific, traceable detail se replace kijiye, jaise "Har Monday lagbhag 300 tickets padhta hai aur zyadatar skim karta hai (interviews 1, 4)."',
  'It cannot be traced to any interview note, and could describe almost anyone':
    'Yeh kisi interview note tak trace nahi ho sakti, aur lagbhag kisi ko bhi describe kar sakti hai',
  'It should mention the manager’s age and location':
    'Ismein manager ki age aur location mention honi chahiye',
  'Personas should not mention AI':
    'Personas mein AI mention nahi hona chahiye',
  'Which of these market estimates is bottom-up?':
    'Inme se kaunsa market estimate bottom-up hai?',
  'A bottom-up estimate multiplies a number of customers you can count by what each would realistically pay. The top-down version starts from a report and assumes a share with no way of getting it. Growth rates and investor enthusiasm are not estimates at all.':
    'Ek bottom-up estimate un customers ki sankhya jinhe aap count kar sakte hain, unse multiply karti hai jo har ek realistically pay karega. Top-down version ek report se shuru hota hai aur ek share assume karta hai jise paane ka koi tareeka nahi. Growth rates aur investor enthusiasm to estimates hi nahi hain.',
  'The support software market is worth $10 billion, and we will take 1%':
    'Support software market $10 billion ka hai, aur hum 1% lenge',
  'Analysts expect AI support tools to grow 30% a year':
    'Analysts expect karte hain AI support tools 30% saal mein badhenge',
  '8,000 companies use the help desk we integrate with, and each would pay about $1,200 a year':
    '8,000 companies us help desk ko use karti hain jisse hum integrate karte hain, aur har ek lagbhag $1,200 saal pay karegi',
  'Our investors say the opportunity is huge':
    'Hamare investors kehte hain opportunity bahut badi hai',
  'You are building an AI tool that finds themes in support tickets. Which of these is the status-quo competitor?':
    'Aap ek AI tool bana rahe hain jo support tickets mein themes dhoondhta hai. Inme se kaunsa status-quo competitor hai?',
  'The status quo is whatever customers do today if they buy nothing new. Here that is reading and tagging by hand. It is free, familiar and good enough, which makes it the hardest competitor to beat. The start-up is a direct competitor, and the built-in reporting is an indirect one.':
    'Status quo woh hai jo customers aaj karte hain agar kuchh naya na khareedein. Yahan woh hai haath se padhna aur tag karna. Yeh free hai, familiar hai aur kaafi achha hai, jo isey haraana sabse mushkil competitor banata hai. Start-up ek direct competitor hai, aur built-in reporting ek indirect.',
  'Another start-up that analyses tickets with AI':
    'Ek doosri start-up jo AI se tickets analyse karti hai',
  'The help desk’s built-in reporting':
    'Help desk ki built-in reporting',
  'The support lead reading tickets and tagging them in a spreadsheet':
    'Support lead jo tickets padhta hai aur unhe ek spreadsheet mein tag karta hai',
  'A general-purpose chatbot':
    'Ek general-purpose chatbot',
  'Which of these advantages would a competitor find easiest to copy?':
    'Inme se kaunsa advantage ek competitor ke liye copy karna sabse aasaan hoga?',
  'A competitor can match a prompt in days by trying their own variations. Deep integrations take years to build, correction data exists only where users make corrections, and security approval is earned slowly. Real advantages at the application layer come from workflow, unique data and trust, not from the prompt or the model.':
    'Ek competitor apne khud ke variations try karke kuchh dinon mein ek prompt match kar sakta hai. Deep integrations banane mein saal lagte hain, correction data sirf wahan exist karta hai jahan users corrections karte hain, aur security approval dheere-dheere kamaya jaata hai. Application layer par real advantages workflow, unique data aur trust se aate hain, prompt ya model se nahi.',
  'A carefully tuned prompt':
    'Ek dhyan se tune kiya prompt',
  'Integrations with 40 help desks that customers depend on':
    '40 help desks ke saath integrations jinper customers depend karte hain',
  'A labelled data set built from thousands of customers’ corrections':
    'Hazaron customers ke corrections se banaya ek labelled data set',
  'Approval from the security teams of large customers':
    'Bade customers ki security teams se approval',
  'Which of these is a strategy, rather than a vision, a goal or a plan?':
    'Inme se kaunsa ek strategy hai, ek vision, goal ya plan nahi?',
  'A strategy makes choices: which users, and how you will win. The first option is a goal with no diagnosis behind it, the second is a vision, and the fourth is a plan for this quarter. Only the third says who you will serve and who, by implication, you will not.':
    'Ek strategy choices banati hai: kaunse users, aur aap kaise jeetenge. Pehla option ek aisa goal hai jiske peeche koi diagnosis nahi, doosra ek vision hai, aur chautha is quarter ka ek plan hai. Sirf teesra batata hai aap kisey serve karenge aur, implication se, kisey nahi.',
  'Become the leading AI support-analytics platform':
    'Leading AI support-analytics platform banna',
  'Every product team knows what its customers struggle with, without anyone reading tickets by hand':
    'Har product team jaanti hai uske customers kis cheez se jhajh rahe hain, bina kisi ke haath se tickets padhe',
  'Serve support leads at 50–500-person companies on Freshdesk first, and win by catching new issues early':
    '50–500-person companies ke support leads ko pehle Freshdesk par serve kijiye, aur naye issues jaldi pakad kar jeetiye',
  'Ship theme grouping to ten design partners this quarter':
    'Is quarter das design partners ko theme grouping ship kijiye',
  'An opportunity has reach 500, impact 2, confidence 50% and effort 2 person-months. What is its RICE score?':
    'Ek opportunity ka reach 500, impact 2, confidence 50% aur effort 2 person-months hai. Uska RICE score kya hai?',
  'RICE = (reach × impact × confidence) ÷ effort = (500 × 2 × 0.5) ÷ 2 = 250. Confidence is a percentage, so 50% multiplies by 0.5, which halves the score to reflect weak evidence.':
    'RICE = (reach × impact × confidence) ÷ effort = (500 × 2 × 0.5) ÷ 2 = 250. Confidence ek percentage hai, isliye 50% 0.5 se multiply hota hai, jo score ko half kar deta hai kamzor evidence dikhane ke liye.',
  '1,000':
    '1,000',
  'When can an item with a lower RICE score still be the right thing to do first?':
    'Ek kam RICE score wala item kab pehle karne layak sahi cheez ho sakta hai?',
  'RICE ignores dependencies, deadlines and existential risks, so strategy should override it in exactly those cases. A privacy review scores low on reach and impact, but without it no enterprise customer can buy. Team interest is not a reason to override the score.':
    'RICE dependencies, deadlines aur existential risks ignore karta hai, isliye strategy ko exactly un cases mein isey override karna chahiye. Ek privacy review reach aur impact par kam score karti hai, lekin uske bina koi enterprise customer khareed nahi sakta. Team ka interest usey override karne ka reason nahi hai.',
  'When it unblocks the core strategy':
    'Jab yeh core strategy ko unblock kare',
  'When it has a hard deadline, so waiting is expensive':
    'Jab iski ek hard deadline ho, isliye wait karna mehenga hai',
  'When it removes a risk that would stop customers from buying at all':
    'Jab yeh ek risk hataye jo customers ko bilkul khareedne se rokega',
  'When the team finds it more interesting':
    'Jab team ko yeh zyada interesting lage',
  'Which of these is an outcome key result, rather than an output or an activity?':
    'Inme se kaunsa ek outcome key result hai, ek output ya activity nahi?',
  'An outcome describes what changes for users. Shipping alerts and writing a PRD are outputs (things the team produces), and weekly meetings are an activity. Outputs are useful steps, but you can deliver all of them and still not change anything for users.':
    'Ek outcome batata hai users ke liye kya badalta hai. Alerts ship karna aur PRD likhna outputs hain (jo team produce karti hai), aur weekly meetings ek activity hain. Outputs useful steps hain, lekin aap sab deliver kar sakte hain aur phir bhi users ke liye kuchh na badle.',
  'Ship growth alerts by March':
    'March tak growth alerts ship kijiye',
  'Write the PRD for the reporting feature':
    'Reporting feature ke liye PRD likhiye',
  'Report preparation drops from about 3 hours to under 30 minutes for 8 of 10 design partners':
    'Report preparation 10 mein se 8 design partners ke liye lagbhag 3 ghante se 30 minute se kam ho jaata hai',
  'Hold weekly meetings with the support team':
    'Support team ke saath weekly meetings rakhiye',
  'Your key result is “alerts sent per week”. Which guardrail metric best stops a team from gaming it?':
    'Aapka key result hai "alerts sent per week". Kaunsa guardrail metric ek team ko isey game karne se sabse achhe se rokta hai?',
  'The easy way to send more alerts is to send useless ones. A guardrail metric on how many alerts users dismiss closes that loophole, so the only way to hit the key result is to send alerts people value. Latency and velocity do not measure usefulness, and the third option just restates the key result.':
    'Zyada alerts bhejne ka aasaan tareeka useless alerts bhejna hai. Kitne alerts users dismiss karte hain, uspar ek guardrail metric woh loophole band karta hai, isliye key result hit karne ka ekmatra tareeka woh alerts bhejna hai jo log value karte hain. Latency aur velocity usefulness nahi naapte, aur teesra option sirf key result restate karta hai.',
  'Model latency stays below 2 seconds':
    'Model latency 2 second se neeche rehti hai',
  'Fewer than 1 in 5 alerts are dismissed as not useful':
    '5 mein se 1 se kam alerts useless mark hoti hain',
  'Alerts sent per week grows 10% each month':
    'Alerts sent per week har mahine 10% badhta hai',
  'Engineering velocity stays constant':
    'Engineering velocity constant rehti hai',
  'What is a pre-mortem?':
    'Pre-mortem kya hai?',
  'A pre-mortem happens before the work starts. Everyone imagines the project failed six months from now and writes down the reasons. People will name risks in an imagined failure that they would not raise about a live plan. A review after failure is a post-mortem.':
    'Ek pre-mortem kaam shuru hone se pehle hoti hai. Sab imagine karte hain project chhe mahine baad fail ho gaya, aur reasons likhte hain. Log ek imagined failure mein woh risks naam lenge jo woh ek live plan ke baare mein nahi uthaate. Failure ke baad ek review ek post-mortem hai.',
  'A review held after a project fails, to find out what went wrong':
    'Ek project fail hone ke baad hone wala review, yeh pata lagane ke liye ki kya galat hua',
  'Imagining that the project has already failed, and writing down why, before you start':
    'Yeh imagine karna ki project pehle se fail ho gaya, aur shuru karne se pehle likhna kyun',
  'A risk register kept by the security team':
    'Security team ke paas rakha ek risk register',
  'A final test run just before launch':
    'Launch se thodi pehle chalaya gaya ek final test run',
  'Which acceptance criterion could an engineer actually test for an AI feature?':
    'Ek AI feature ke liye kaunsa acceptance criterion ek engineer asal mein test kar sakta hai?',
  'A testable criterion names a test set, a measure and a threshold, so two people would agree on whether it passed. “Accurate and helpful” and “users are happy” are not measurable as written. “Never makes a mistake” is impossible for a model whose output varies, so it can only ever fail.':
    'Ek testable criterion ek test set, ek measure aur ek threshold naam leta hai, taaki do log agree kar saken yeh pass hua ya nahi. "Accurate and helpful" aur "users are happy" jaisa likha hua measurable nahi hai. "Kabhi galti nahi karta" ek aise model ke liye impossible hai jiska output badalta rehta hai, isliye yeh sirf fail hi ho sakta hai.',
  'The summaries are accurate and helpful':
    'Summaries accurate aur helpful hain',
  'The model never makes a mistake':
    'Model kabhi galti nahi karta',
  'On the 50-ticket test set, at least 85% of themes match the support lead’s own grouping':
    '50-ticket test set par, kam se kam 85% themes support lead ki apni grouping se match karti hain',
  'Users are happy with the themes':
    'Users themes se khush hain',
  'Which of these is a vertical slice?':
    'Inme se kaunsa ek vertical slice hai?',
  'A vertical slice goes through every layer, from input to user value, in the thinnest possible form, so a real user can try it early. The other options build one layer at a time, and nothing works for a user until the last layer is finished.':
    'Ek vertical slice har layer se guzarta hai, input se user value tak, sabse patle mumkin form mein, taaki ek real user isey jaldi try kar sake. Baaki options ek waqt mein ek layer banate hain, aur jab tak aakhri layer khatam na ho user ke liye kuchh kaam nahi karta.',
  'Build the full data import for all five help desks first':
    'Pehle saaron paanch help desks ka poora data import banayiye',
  'Design every screen of the product before writing any code':
    'Koi bhi code likhne se pehle product ki har screen design kijiye',
  'Import one week of tickets from one help desk, group them, and email the top five themes to one lead':
    'Ek help desk se ek hafte ke tickets import kijiye, unhe group kijiye, aur top paanch themes ek lead ko email kijiye',
  'Build the model pipeline this quarter and the interface next quarter':
    'Is quarter model pipeline aur agle quarter interface banayiye',
  'In a usability test, the user cannot find the button to correct a wrong theme. What should you do?':
    'Ek usability test mein, user ek galat theme theek karne ka button nahi dhoondh pata. Aapko kya karna chahiye?',
  'The moment a user gets stuck is your finding. If you help, you lose it, and your real users will not have you sitting next to them. Note what happened, let them try for a while, and ask about it afterwards.':
    'Jis moment ek user atak jaata hai wahi aapka finding hai. Agar aap madad karein, aap ise kho dete hain, aur aapke real users ke saath aap baithe nahi honge. Note kijiye kya hua, unhe kuchh der try karne dijiye, aur baad mein iske baare mein poochiye.',
  'Show them where it is, so the test can continue':
    'Unhe dikhaiye yeh kahan hai, taaki test chalta rahe',
  'Stay quiet, note where and how they got stuck, and ask about it at the end':
    'Chup rahiye, note kijiye woh kahan aur kaise atke, aur end mein poochiye',
  'End the test, because this user is not a good fit':
    'Test khatam kijiye, kyunki yeh user achha fit nahi hai',
  'Explain how the product is supposed to work':
    'Samjhaiye product kaise kaam karne wala hai',
  'Your company’s assistant does not know about a refund-policy change made last month. What is the best fix?':
    'Aapki company ke assistant ko pichhle mahine hui refund-policy change ke baare mein nahi pata. Sabse achha fix kya hai?',
  'The model is missing a fact that changes over time, so give it the fact at request time with retrieval. Fine-tuning teaches behaviour rather than facts, and would go out of date at the next policy change. A larger model still has not seen your policy, and an instruction to be accurate cannot supply information the model does not have.':
    'Model mein ek fact missing hai jo waqt ke saath badalta hai, isliye request time par retrieval se woh fact dijiye. Fine-tuning facts ki jagah behaviour sikhati hai, aur agli policy change par outdated ho jaayegi. Ek bada model ne bhi aapki policy nahi dekhi, aur "accurate raho" jaisi instruction woh information nahi de sakti jo model ke paas nahi hai.',
  'Fine-tune the model on the new policy':
    'Model ko nayi policy par fine-tune kijiye',
  'Retrieve the current policy and put it in the context for each relevant question':
    'Current policy retrieve kijiye aur har relevant sawaal ke context mein daaliye',
  'Add “always be accurate about policy” to the system prompt':
    'System prompt mein "hamesha policy ke baare mein accurate raho" jodiye',
  'You paste your company’s style guide into a prompt. Which statement is true?':
    'Aap apni company ka style guide ek prompt mein paste karte hain. Kaunsa statement sach hai?',
  'Putting text in a prompt is context-time conditioning. It shapes this one answer and is then forgotten. Only training, such as fine-tuning, changes the weights. If you need the style guide every time, your application has to send it every time.':
    'Prompt mein text daalna context-time conditioning hai. Yeh sirf is ek jawab ko shape karta hai aur phir bhula diya jaata hai. Sirf training, jaise fine-tuning, weights badalti hai. Agar aapko har baar style guide chahiye, aapke application ko har baar isey bhejna hoga.',
  'The model learns the style guide permanently':
    'Model style guide ko permanently seekh leta hai',
  'The style guide shapes this request only; the model’s weights do not change':
    'Style guide sirf is request ko shape karta hai; model ke weights nahi badalte',
  'Every other user of the model now follows your style guide':
    'Model ke baaki sab users ab aapka style guide follow karte hain',
  'The model will remember it in all your future conversations':
    'Model isey aapki saari future conversations mein yaad rakhega',
  'Which of these tasks is better suited to a predictive model than a generative one?':
    'Inme se kaunsa task ek generative model se zyada ek predictive model ke liye suited hai?',
  'Predicting cancellations means outputting a probability from structured data, which is a classic predictive task. A small predictive model does it cheaply, quickly and consistently. The other three tasks produce new text, which is what generative models are for.':
    'Cancellations predict karna matlab structured data se ek probability output karna hai, jo ek classic predictive task hai. Ek chhota predictive model isey sasta, tez aur consistently karta hai. Baaki teen tasks naya text produce karte hain, jo generative models ke liye hai.',
  'Drafting replies to customer emails':
    'Customer emails ke replies draft karna',
  'Summarising sales calls':
    'Sales calls summarise karna',
  'Predicting which customers will cancel next month, from their usage data':
    'Un customers ko predict karna jo agle mahine cancel karenge, unke usage data se',
  'Answering questions about the product documentation':
    'Product documentation ke baare mein sawaalon ka jawab dena',
  'You are interviewing a prospect about pricing. Which question gives the most reliable evidence?':
    'Aap ek prospect se pricing ke baare mein interview le rahe hain. Kaunsa sawaal sabse reliable evidence deta hai?',
  'Past spending is evidence; stated intentions are not. People say yes to hypothetical prices to be polite. What they already pay for, and who signed it off, tells you the real alternative and the real buyer.':
    'Past spending evidence hai; stated intentions nahi. Log polite hone ke liye hypothetical prices ke liye haan kehte hain. Woh abhi kis cheez ke liye pay karte hain, aur kisne usey approve kiya, aapko real alternative aur real buyer batata hai.',
  'Would you pay $49 a month for this?':
    'Kya aap iske liye $49 per month pay karenge?',
  'How much would you be willing to pay for a tool like this?':
    'Aap is tarah ke ek tool ke liye kitna pay karne ko taiyaar honge?',
  'What do you use for this today, what does it cost, and who approved that spend?':
    'Aap iske liye aaj kya use karte hain, iska kya cost aata hai, aur woh spend kisne approve kiya?',
  'Do you think this price is fair?':
    'Kya aapko lagta hai yeh price fair hai?',
  'A customer’s reports cost $12 a month to serve. They receive 4 reports, and accept 3. What is the cost per successful report?':
    'Ek customer ke reports serve karne mein $12 per month lagta hai. Unhe 4 reports milti hain, aur 3 accept karte hain. Cost per successful report kya hai?',
  'Divide the total cost by the reports that worked: $12 ÷ 3 = $4. A rejected report still cost you money to make, so dividing by all four ($3) makes the product look cheaper than it is.':
    'Total cost ko kaam karne wali reports se divide kijiye: $12 ÷ 3 = $4. Ek reject ki gayi report bhi aapko paise mein padi, isliye saaron chaar ($3) se divide karna product ko usse sasta dikhata hai jo yeh hai.',
  '$3.00':
    '$3.00',
  '$4.00':
    '$4.00',
  '$12.00':
    '$12.00',
  '$48.00':
    '$48.00',
  'Your AI product is priced per seat. Which change most directly protects your margin from heavy users?':
    'Aapka AI product per seat priced hai. Kaunsa change heavy users se aapka margin sabse seedhe protect karta hai?',
  'With a flat seat price, a heavy user costs you more but pays the same. An allowance with overage makes revenue grow with usage, so the margin holds. Hosting is usually a small line compared with model and support costs.':
    'Ek flat seat price ke saath, ek heavy user aapko zyada cost karta hai lekin wahi pay karta hai. Overage ke saath ek allowance revenue ko usage ke saath badhne deta hai, isliye margin bana rehta hai. Hosting usually model aur support costs ke muqable ek chhoti line hoti hai.',
  'Lower the seat price to win more customers':
    'Zyada customers jeetne ke liye seat price kam kijiye',
  'Include a usage allowance per seat, and charge for usage above it':
    'Per seat ek usage allowance shaamil kijiye, aur usse upar usage ke liye charge kijiye',
  'Remove the free trial':
    'Free trial hataiye',
  'Switch to a cheaper hosting provider':
    'Ek sasta hosting provider par switch kijiye',
  'For an AI note-taking app, which event is the best definition of activation?':
    'Ek AI note-taking app ke liye, activation ki sabse achhi definition kaunsa event hai?',
  'Activation is the first time a user gets the value the product promises. Signing up and installing are steps before value. Inviting a colleague is referral, which usually comes after activation.':
    'Activation pehli baar hai jab ek user ko product ki promised value milti hai. Sign up karna aur install karna value se pehle ke steps hain. Ek colleague ko invite karna referral hai, jo usually activation ke baad aata hai.',
  'The user creates an account':
    'User ek account banata hai',
  'The user installs the browser extension':
    'User browser extension install karta hai',
  'The user reads a summary of their own first meeting':
    'User apni pehli meeting ka summary padhta hai',
  'The user invites a colleague':
    'User ek colleague ko invite karta hai',
  'Users say they love your weekly report, but few open it. Using the Fogg model (motivation, ability, prompt), what should you check first?':
    'Users kehte hain woh aapki weekly report pasand karte hain, lekin kam hi isey khoolte hain. Fogg model (motivation, ability, prompt) use karke, aapko pehle kya check karna chahiye?',
  'Users already say they value it, so motivation is not the likely gap. Prompts are the cheapest thing to check and fix. If nothing reminds them at the moment they plan their week, the behaviour does not happen.':
    'Users pehle se kehte hain woh isey value karte hain, isliye motivation likely gap nahi hai. Prompts check aur fix karne ke liye sabse sasti cheez hain. Agar kuchh bhi unhe us moment par yaad nahi dilaata jab woh apna hafta plan karte hain, behaviour hota hi nahi.',
  'Whether users are motivated enough':
    'Kya users kaafi motivated hain',
  'Whether something prompts them at the right moment, such as a Monday email':
    'Kya kuchh unhe sahi moment par prompt karta hai, jaise ek Monday email',
  'Whether the report has enough features':
    'Kya report mein kaafi features hain',
  'Whether the price is too high':
    'Kya price bahut zyada hai',
  'Which of these is a true network effect, rather than virality?':
    'Inme se kaunsa virality ki jagah ek real network effect hai?',
  'A network effect means the product gets better for existing users as more people join. The other three bring in new users (virality) but do not improve the product for anyone already using it.':
    'Ek network effect ka matlab hai product existing users ke liye behtar hota jaata hai jaise-jaise zyada log jud te hain. Baaki teen naye users laate hain (virality) lekin pehle se use kar rahe kisi ke liye product behtar nahi karte.',
  'Each shared report shows your logo to new people':
    'Har shared report naye logon ko aapka logo dikhata hai',
  'Users get a discount for each friend who signs up':
    'Har friend jo sign up kare uske liye users ko discount milta hai',
  'Each new team’s corrections make theme grouping better for every other team, with their consent':
    'Har naye team ke corrections theme grouping ko har doosri team ke liye behtar banate hain, unki consent ke saath',
  'Users post screenshots of the product on social media':
    'Users social media par product ke screenshots post karte hain',
  'Your North Star is “weekly teams that act on a theme”. Which is a good input metric?':
    'Aapka North Star hai "weekly teams jo ek theme par action lete hain". Kaunsa ek achha input metric hai?',
  'An input metric is something the team can move that should move the North Star. Better themes lead to more teams acting on them. Revenue is a result, and the others are too far from the behaviour you care about.':
    'Ek input metric aisi cheez hai jise team move kar sakti hai jo North Star ko move karni chahiye. Behtar themes se zyada teams action lete hain. Revenue ek result hai, aur baaki us behaviour se bahut door hain jiski aapko fikar hai.',
  'Total revenue this quarter':
    'Is quarter ka total revenue',
  'Share of themes that users mark as useful':
    'Un themes ka share jinhe users useful mark karte hain',
  'Number of employees at the company':
    'Company mein employees ki sankhya',
  'Monthly website visitors':
    'Monthly website visitors',
  'Your first cohort is 12 design partners you recruited personally. Their week-8 retention is 75%. What is the main risk in using this number?':
    'Aapka pehla cohort 12 design partners hai jinhe aapne khud recruit kiya. Unki week-8 retention 75% hai. Is number ko use karne mein main risk kya hai?',
  'This is selection bias. People you recruited personally are unusually engaged and want to help you. Compare them with users who found the product on their own before you trust the number.':
    'Yeh selection bias hai. Jinhe aapne khud recruit kiya woh asamanya taur par engaged hain aur aapki madad karna chahte hain. Unhe un users se compare kijiye jinhone product khud dhoondha, isse pehle ki aap number par trust karein.',
  'Twelve is too many to analyse':
    'Baarah analyse karne ke liye bahut zyada hai',
  'They are more motivated than typical users, so retention will look higher than it will be':
    'Woh typical users se zyada motivated hain, isliye retention jitni hogi usse zyada dikhegi',
  'Week 8 is too early to measure':
    'Week 8 measure karne ke liye bahut jaldi hai',
  'Retention should be measured in days, not weeks':
    'Retention din mein naapni chahiye, hafton mein nahi',
  'Your B2B product has 60 accounts. You want to test a new onboarding flow, and expect a 5-point rise in activation from a 20% baseline. What should you do?':
    'Aapke B2B product ke 60 accounts hain. Aap ek naya onboarding flow test karna chahte hain, aur 20% baseline se activation mein 5-point rise expect karte hain. Aapko kya karna chahiye?',
  'At a 20% baseline, detecting 5 points needs about 1,000 accounts per group. With 30, the test cannot give a reliable answer, and stopping early makes it worse. Use other evidence, and be honest about its strength.':
    '20% baseline par, 5 points detect karne ke liye lagbhag 1,000 accounts per group chahiye. 30 ke saath, test ek reliable jawab nahi de sakta, aur jaldi rokna isey aur bura bana deta hai. Doosra evidence use kijiye, aur uski strength ke baare mein honest rahiye.',
  'Run an A/B test with 30 accounts in each group and report the result':
    'Har group mein 30 accounts ke saath ek A/B test chalayiye aur result report kijiye',
  'Run the A/B test but stop as soon as one group is ahead':
    'A/B test chalayiye lekin jaise hi ek group aage ho jaaye ruk jaayiye',
  'Accept that an A/B test cannot detect this effect; use observed sessions and a careful before-and-after comparison, and say it is weaker evidence':
    'Maan lijiye ek A/B test yeh effect detect nahi kar sakta; observed sessions aur ek careful before-and-after comparison use kijiye, aur bataiye yeh kamzor evidence hai',
  'Skip measurement, since small products do not need it':
    'Measurement skip kijiye, kyunki chhote products ko iski zaroorat nahi',
  'You built a prototype in a prompt-to-app builder. Before sharing the link, what is the most important check?':
    'Aapne ek prompt-to-app builder mein ek prototype banaya. Link share karne se pehle, sabse zaroori check kya hai?',
  'Generated apps often put keys in the browser, where anyone can copy them, and create databases that anyone can read. Either one can leak data or run up your bill. Fix both before anyone else sees the link.':
    'Generated apps aksar keys ko browser mein daal dete hain, jahan koi bhi unhe copy kar sakta hai, aur aise databases banate hain jinhe koi bhi padh sakta hai. Dono data leak kar sakte hain ya aapka bill badha sakte hain. Kisi aur ko link dikhane se pehle dono theek kijiye.',
  'That the colours match your brand':
    'Ki colours aapke brand se match karte hain',
  'That the model API key is not in the front-end code, and the database has access rules':
    'Ki model API key front-end code mein nahi hai, aur database mein access rules hain',
  'That the app loads in under one second':
    'Ki app ek second se kam mein load ho',
  'That the code is well commented':
    'Ki code achhe se commented hai',
  'You built the same prototype in a no-code builder and with a coding agent. Which criterion most favours the coding agent for a product you plan to keep?':
    'Aapne wahi prototype ek no-code builder mein aur ek coding agent ke saath banaya. Ek aise product ke liye jise aap rakhne ki planning karte hain, kaunsa criterion coding agent ko sabse zyada favour karta hai?',
  'No-code builders usually win on first-demo speed. Code in a normal repository, with tests and history, is easier for a team to maintain and change. That matters once real users depend on it.':
    'No-code builders usually first-demo speed par jeette hain. Ek normal repository mein code, tests aur history ke saath, ek team ke liye maintain aur badalna aasaan hai. Yeh matter karta hai ek baar real users iske upar depend karne lagein.',
  'Speed to a first demo':
    'Pehle demo tak speed',
  'Maintainability: an engineer can read, test and change the code next month':
    'Maintainability: ek engineer agle mahine code padh, test aur badal sakta hai',
  'Needing no technical knowledge':
    'Koi technical knowledge na chahiye',
  'Fewer decisions to make':
    'Kam decisions lene padein',
  'Your agent reads customer emails, can search your internal wiki, and can send Slack messages to any channel. What is the safest change?':
    'Aapka agent customer emails padhta hai, aapki internal wiki search kar sakta hai, aur kisi bhi channel ko Slack messages bhej sakta hai. Sabse safe change kya hai?',
  'The agent has the lethal trifecta: private data, untrusted input (emails) and a way to send data out. A prompt cannot guarantee safety, and logging only tells you afterwards. Narrowing where it can send, and requiring approval, removes the exit path.':
    'Agent ke paas lethal trifecta hai: private data, untrusted input (emails) aur data bahar bhejne ka tareeka. Ek prompt safety guarantee nahi kar sakta, aur logging sirf baad mein batati hai. Yeh kahan bhej sakta hai narrow karna, aur har message ke liye approval maangna, exit path hata deta hai.',
  'Add “never leak data” to the system prompt':
    'System prompt mein "kabhi data leak mat karo" jodiye',
  'Restrict Slack to one internal channel, and require approval for each message':
    'Slack ko ek internal channel tak restrict kijiye, aur har message ke liye approval maangiye',
  'Use a larger model that follows instructions better':
    'Ek bada model use kijiye jo instructions behtar follow kare',
  'Log every message the agent sends':
    'Agent ke bheje har message ko log kijiye',
  'You built a weekly report flow as a fixed workflow and as an agent. The workflow succeeds 19/20 times in 40 seconds; the agent 17/20 in 75 seconds. The steps are the same every week. What should you ship?':
    'Aapne ek weekly report flow ek fixed workflow ki tarah aur ek agent ki tarah banaya. Workflow 40 seconds mein 19/20 baar succeed karta hai; agent 75 seconds mein 17/20. Steps har hafte wahi hote hain. Aapko kya ship karna chahiye?',
  'When the steps do not vary, a fixed workflow is usually more reliable and faster, and a failure points straight at one step. Agents earn their place when steps really differ from case to case.':
    'Jab steps badalte nahi, ek fixed workflow usually zyada reliable aur tez hota hai, aur ek failure seedhe ek step ki taraf point karta hai. Agents apni jagah tab kamaate hain jab steps case se case really alag hote hain.',
  'The agent, because agents are more advanced':
    'Agent, kyunki agents zyada advanced hain',
  'The workflow, because it is more reliable, faster and easier to debug for a fixed process':
    'Workflow, kyunki yeh ek fixed process ke liye zyada reliable, tez aur debug karna aasaan hai',
  'Both, and let users choose':
    'Dono, aur users ko chunne dijiye',
  'Neither until both score 20/20':
    'Koi nahi jab tak dono 20/20 score na karein',
  'Which of these is most important to have before your first real user arrives?':
    'Apne pehle real user ke aane se pehle inme se kya hona sabse zyada zaroori hai?',
  'Real users will find problems you did not. A rollback you have tested lets you undo a bad change in minutes. The others matter later, or not at all, for a first launch.':
    'Real users aise problems dhoondhenge jo aapne nahi dhoondhe. Ek tested rollback aapko minutes mein ek bura change undo karne deta hai. Baaki baad mein matter karte hain, ya ek pehle launch ke liye bilkul nahi.',
  'A tested way to roll back to the previous version':
    'Pichhle version par rollback karne ka ek tested tareeka',
  'A logo':
    'Ek logo',
  'A pricing page':
    'Ek pricing page',
  'Support for every browser':
    'Har browser ke liye support',
  'In interviews, users say a feature is essential. Analytics show fewer than 5% use it. What should you do next?':
    'Interviews mein, users kehte hain ek feature essential hai. Analytics dikhate hain 5% se kam use karte hain. Aapko aage kya karna chahiye?',
  'What people do is stronger evidence than what they say. The gap is itself a finding. Asking why often shows the feature is hard to find or arrives at the wrong moment. That leads to a better fix than deleting it or building more.':
    'Log jo karte hain woh jo kehte hain usse strong evidence hai. Yeh gap khud ek finding hai. Kyun poochna aksar dikhata hai feature dhoondhna mushkil hai ya galat moment par aata hai. Isse feature delete karne ya aur banane se behtar fix milta hai.',
  'Trust the interviews and invest more in the feature':
    'Interviews par trust kijiye aur feature mein zyada invest kijiye',
  'Trust the analytics and delete the feature immediately':
    'Analytics par trust kijiye aur feature turant delete kar dijiye',
  'Treat behaviour as the stronger evidence, then ask users why they do not use it':
    'Behaviour ko strong evidence maaniye, phir users se poochiye woh use kyun nahi karte',
  'Ignore both and run a survey':
    'Dono ignore kijiye aur ek survey chalayiye',
  'Which resume bullet best shows product judgement?':
    'Kaunsa resume bullet product judgement sabse achhe se dikhata hai?',
  'It names your decision, the alternative you rejected, how you decided and a measurable result. The others describe interest, activity or a title, which a recruiter cannot check.':
    'Yeh aapka decision naam leta hai, woh alternative jo aapne reject kiya, aapne kaise decide kiya aur ek measurable result. Baaki interest, activity ya ek title describe karte hain, jise ek recruiter check nahi kar sakta.',
  'Passionate about AI and product management':
    'AI aur product management ke liye passionate',
  'Worked on an AI support tool with engineers and designers':
    'Engineers aur designers ke saath ek AI support tool par kaam kiya',
  'Chose a fixed workflow over an agent after testing both, cutting failed runs from 15% to 5%':
    'Dono test karne ke baad ek agent ki jagah ek fixed workflow chuna, failed runs 15% se 5% tak kaat diye',
  'Responsible for the AI roadmap':
    'AI roadmap ke liye responsible',
  'In a metrics interview you hear: “Daily active users fell 10% yesterday. Why?” What should you do first?':
    'Ek metrics interview mein aap sunte hain: "Daily active users kal 10% gir gaye. Kyun?" Aapko sabse pehle kya karna chahiye?',
  'Start by checking the data. Many sudden drops come from broken tracking, a release or a calendar effect. Only once the drop is confirmed should you split it by segment and step to find a cause.':
    'Data check karke shuru kijiye. Bahut si achanak girawatein toote hue tracking, ek release ya ek calendar effect se aati hain. Sirf ek baar drop confirm hone par hi aapko cause dhoondhne ke liye isey segment aur step se split karna chahiye.',
  'Propose a new feature to win users back':
    'Users ko wapas jeetne ke liye ek naya feature propose kijiye',
  'Check whether the drop is real: data or logging problems, and known events such as a holiday':
    'Check kijiye kya drop real hai: data ya logging problems, aur known events jaise ek holiday',
  'Blame a competitor’s launch':
    'Ek competitor ke launch ko blame kijiye',
  'Ask for more budget for marketing':
    'Marketing ke liye zyada budget maangiye',
  'An interviewer asks about a project that failed. Which answer is strongest?':
    'Ek interviewer ek project ke baare mein poochta hai jo fail hua. Kaunsa jawab sabse strong hai?',
  'Interviewers are checking whether you learn from evidence. A clear, undefensive account that ends with a change you made shows exactly that. Blaming others or avoiding the question suggests you would do the same at work.':
    'Interviewers check kar rahe hain kya aap evidence se seekhte hain. Ek saaf, undefensive account jo ek change ke saath khatam hoti hai jo aapne kiya, exactly wahi dikhata hai. Doosron ko blame karna ya sawaal se bachna suggest karta hai aap kaam par bhi wahi karenge.',
  'Explain that the failure was mostly caused by the data team':
    'Samjhaiye ki failure zyadatar data team ki wajah se hui',
  'Say that you have never really had a project fail':
    'Kahiye aapka kabhi asal mein koi project fail nahi hua',
  'State what you expected, what happened, what you learned and what you changed afterwards':
    'Bataiye aapne kya expect kiya, kya hua, aapne kya seekha aur baad mein kya badla',
  'Describe the project’s successes instead':
    'Iski jagah project ki successes describe kijiye',
  'Your capstone has an excellent eval set and a strong security review, but no pricing or cost model. Which gate will it fail?':
    'Aapke capstone mein ek excellent eval set aur ek strong security review hai, lekin koi pricing ya cost model nahi. Yeh kaunsa gate fail karega?',
  'Each gate needs its own evidence. Technical strength does not show that anyone will pay, or that each customer makes money. Add the cost model and pricing from B1 before the defence.':
    'Har gate ko apna evidence chahiye. Technical strength yeh nahi dikhati ki koi pay karega, ya har customer paisa kamayega. Defence se pehle B1 se cost model aur pricing jodiye.',
  'Technical':
    'Technical',
  'Business: the buyer, price, margin and acquisition logic are not credible yet':
    'Business: buyer, price, margin aur acquisition logic abhi credible nahi hain',
  'None; strong technical evidence is enough':
    'Koi nahi; strong technical evidence kaafi hai'

});
