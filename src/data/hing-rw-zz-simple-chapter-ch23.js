/* Hinglish for The five task types: classify, extract, summarise, rewrite, generate (chapter:ch23), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Almost every request for AI is one of five kinds of task. Think of five kinds of shop counter. The kind decides whether a computer can mark the result for you. So name the kind before you plan anything.':
    'Almost har AI request paanch kism ke kaamon mein se ek hoti hai. Sochiye paanch tarah ke dukaan ke counter. Kism se tay hota hai ki computer result ko khud jaanch sakta hai ya nahin. Isliye kuch bhi plan karne se pehle kism ka naam likhiye.',
  'Before you plan anything, name which of the five task types the request is.':
    'Kuch bhi plan karne se pehle batayiye ki request paanch task types mein se kaunsa hai.',
  'Say why a computer can mark two of the types, but not the other three.':
    'Samjhaiye ki do types ko computer jaanch sakta hai, baaki teen ko nahin.',
  'Split a vague request into the smallest task types that still solve the problem.':
    'Dhundhli request ko un sabse chhote task types mein todiye jo phir bhi samasya hal karein.',
  'Break the whole tool down into small tasks':
    'Poore tool ko chhote kaamon mein todiye',
  '“Find and hide personal details” sounds like one job. It is really several jobs. Each one needs a different kind of test. In this chapter you learned the five task types: sorting into groups, picking out pieces, shortening, rewriting, and writing something new. You also learned which ones a computer can mark by itself. Now you break Bharat Privacy Guard down this way.':
    '“Nijee jaankari dhoondho aur chhupao” ek kaam lagta hai. Asal mein yeh kai kaam hain. Har ek ko alag tarah ka test chahiye. Is chapter mein aapne paanch task types seekhe: groups mein baantna, tukde nikaalna, chhota karna, dobara likhna, aur kuch naya likhna. Yeh bhi seekha ki computer kaunsi ko khud jaanch sakta hai. Ab aap Bharat Privacy Guard ko isi tarah todte hain.',
  'Written work only: pen and paper, or a document. No new code. You can look at your answer key (the teacher’s list of right answers) for examples. Short version for the route, about 20 minutes: steps 1, 3 and 4.':
    'Sirf likhne ka kaam: kalam aur kaagaz, ya ek document. Naya code nahin. Udaharan ke liye apni answer key (teacher ki sahi jawaabon ki list) dekh sakte hain. Route ke liye chhota version, lagbhag 20 minute: steps 1, 3 aur 4.',
  'Write the request in the plainest words: “Find and hide personal details in English, Hindi and Hinglish text before it reaches an AI model.” Do not tidy it up.':
    'Request ko sabse saade shabdon mein likhiye: “Find and hide personal details in English, Hindi and Hinglish text before it reaches an AI model.” Use sajaiye mat.',
  'Write one sentence about what a developer who uses the tool wants to change in their week.':
    'Ek sentence likhiye ki tool use karne wala developer apne hafte mein kya badalna chahta hai.',
  'Break the request into small steps, in the order they happen. For each step, write which of the five task types it is. For example, “decide whether a number is a PAN or an Aadhaar number” is sorting into groups. “Pick out the exact words that are a name” is picking out pieces. “Replace the details with [HIDDEN]” is rewriting.':
    'Request ko chhote steps mein todiye, us kram mein jis mein woh hote hain. Har step ke liye likhiye ki woh paanch task types mein se kaunsa hai. Jaise, “decide whether a number is a PAN or an Aadhaar number” groups mein baantna hai. “Pick out the exact words that are a name” tukde nikaalna hai. “Replace the details with [HIDDEN]” dobara likhna hai.',
  'Mark each step. Does it have a clearly right answer? Then a computer can mark it against the answer key. Or does it need a person to judge?':
    'Har step par nishan lagaiye. Kya uska saaf sahi jawaab hai? Tab computer use answer key se jaanch sakta hai. Ya usme kisi insaan ko parakhna padega?',
  'For each step that has a right answer, say where the answer key comes from. Who decides what is correct, and how do they decide?':
    'Jis step ka sahi jawaab hai, uske liye batayiye ki answer key kahan se aati hai. Kaun tay karta hai ki kya sahi hai, aur kis aadhaar par?',
  'Write a short note to your future self. Which one step will you build first? Why is it the smallest useful piece?':
    'Apne aane wale kal ke liye chhota note likhiye. Aap sabse pehle kaunsa ek step banayenge? Woh sabse chhota kaam ka tukda kyun hai?',
  'The request in the plainest words, and the aim in one sentence.':
    'Request sabse saade shabdon mein, aur maksad ek sentence mein.',
  'A list of small steps. Each one has its task type.':
    'Chhote steps ki list. Har ek par uska task type likha ho.',
  'Each step marked as “a computer can mark it” or “needs a person”, and where the answer key comes from.':
    'Har step par nishan: “computer jaanch sakta hai” ya “insaan chahiye”, aur answer key kahan se aati hai.',
  'The note that names the first step to build, and why.':
    'Woh note jisme sabse pehle banane wala step aur uski wajah likhi ho.',
  'A prompt is a recipe card':
    'Prompt ek recipe card hai',
  'Four tricks change what comes back from the model.':
    'Chaar tarkeebein model se aane wale jawaab ko badalti hain.',
  'A test set, and one change at a time':
    'Test set, aur ek baar mein ek badlav',
  'This is how you tell a truly better prompt from one that is only different.':
    'Isi se aap jaante hain ki prompt sach mein behtar hai ya sirf alag hai.',
  'There is nothing new to set up. Bring the test set (your list of questions with known good answers) from Chapter 2.2. You will see why its rows were easy to mark.':
    'Kuch naya set up nahin karna. Chapter 2.2 ka test set (jaanchne ke sawaalon ki list, jinke achhe jawaab pata hain) saath laiye. Aap dekhenge ki uski rows ko jaanchna aasaan kyun tha.',
  'Last chapter you built a test set and used it to compare prompts. Its rows were easy to mark pass or fail. That was not luck. It came from the kind of task you gave the model. This chapter shows you how to tell the kinds apart.':
    'Pichhle chapter mein aapne test set banaya aur usse prompts ki tulna ki. Uski rows ko pass ya fail karna aasaan tha. Yeh kismat nahin thi. Yeh us kism ke kaam se aaya jo aapne model ko diya. Yeh chapter sikhata hai ki kismon ko alag kaise pehchanein.',
  'People usually say what they want as a hope: <em>Can the AI handle our inbox? Can it help with contracts? Can it make the team faster?</em> None of these is a task yet. Under almost every one sits one of five task types. And the type matters more than which model you pick.':
    'Log aam taur par apni chaah ek ummeed ki tarah kehte hain: <em>Kya AI hamara inbox sambhaal sakta hai? Kya woh contracts mein madad kar sakta hai? Kya woh team ko tez bana sakta hai?</em> Inme se koi abhi task nahin hai. Lagbhag har ek ke neeche paanch task types mein se ek chhupa hai. Aur type ka mehatva is se zyada hai ki aap kaunsa model chunte hain.',
  'Choose the task type first. It takes one sentence. It is the planning step that people skip most often.':
    'Pehle task type chuniye. Ismein ek sentence lagta hai. Yeh planning ka woh step hai jo log sabse zyada chhod dete hain.',
  'First: should a model do this at all?':
    'Pehle: kya yeh kaam model ko karna bhi chahiye?',
  'Before you pick a task type, ask four questions about the request. It is like a doctor’s check before any medicine. Stop at the first question that settles it.':
    'Task type chunne se pehle request ke baare mein chaar sawaal poochiye. Yeh dawai se pehle doctor ki jaanch jaisa hai. Jis pehle sawaal se baat tay ho jaaye, wahin ruk jaiye.',
  'Can a fixed rule do it? Then write the rule.':
    'Kya ek pakka niyam yeh kar sakta hai? Tab niyam likhiye.',
  'Can a simple lookup do it? Then look it up.':
    'Kya seedha dhoondhna kaafi hai? Tab dhoondh lijiye.',
  'Is a wrong answer cheap to fix? If not, keep a person in the loop (a person checks before it goes out).':
    'Kya galat jawaab ko theek karna sasta hai? Agar nahin, to kisi insaan ko beech mein rakhiye (bhejne se pehle insaan jaanche).',
  'Does anyone need it at all? If not, do not build it.':
    'Kya ise kisi ko chahiye bhi? Agar nahin, to mat banaiye.',
  'Name one request at your work that should not use a model. Say which of the four questions settles it.':
    'Apne kaam ki ek aisi request ka naam likhiye jise model nahin karna chahiye. Batayiye ki chaar mein se kaunsa sawaal use tay karta hai.',
  'The request … should not use a model because …':
    'Request … model ke liye theek nahin kyunki …',
  'A good answer names one specific request and one question. “Check that a PAN has the right shape” is settled by the first question. A fixed rule does it for free, and it is the first thing Bharat Privacy Guard runs. An interviewer in a product-sense round listens for this: you know where a model is the wrong tool.':
    'Achha jawaab ek khaas request aur ek sawaal ka naam leta hai. “Check that a PAN has the right shape” pehle sawaal se tay ho jaata hai. Ek pakka niyam yeh muft mein kar deta hai, aur Bharat Privacy Guard yahi sabse pehle chalata hai. Product-sense round mein interviewer yahi sunna chahta hai: aap jaante hain ki model kahan galat aujaar hai.',
  'The five types':
    'Paanch types',
  'Here are the five types. Think of five counters in a shop. Read the last column closely. It matters most for your work. It tells you whether a program can mark the answer, or whether a person must.':
    'Yeh hain paanch types. Sochiye ek dukaan ke paanch counter. Aakhri column dhyaan se padhiye. Aapke kaam ke liye yahi sabse zaroori hai. Yeh batata hai ki program jawaab jaanch sakta hai, ya insaan ko karna padega.',
  'Task type':
    'Task type',
  'Can a program mark it?':
    'Kya program ise jaanch sakta hai?',
  '<strong>Classify</strong>':
    '<strong>Classify</strong>',
  'Put the input into one of a few groups':
    'Input ko kuch groups mein se ek mein daaliye',
  'Yes: there is a right answer':
    'Haan: sahi jawaab hota hai',
  '<strong>Extract</strong>':
    '<strong>Extract</strong>',
  'Pull out specific details from the input':
    'Input se khaas details nikaaliye',
  'Yes: the value is in the document, or it is not':
    'Haan: value document mein hai, ya nahin hai',
  '<strong>Summarise</strong>':
    '<strong>Summarise</strong>',
  'Make it shorter without losing what matters':
    'Ise chhota kijiye, jo zaroori hai woh khoye bina',
  'No: it depends on the reader':
    'Nahin: yeh padhne wale par nirbhar hai',
  '<strong>Rewrite</strong>':
    '<strong>Rewrite</strong>',
  'Keep the meaning, change the words or tone':
    'Matlab rakhiye, shabd ya lehja badaliye',
  'No, but you can check what must not change':
    'Nahin, par aap jaanch sakte hain ki kya nahin badalna chahiye',
  '<strong>Generate</strong>':
    '<strong>Generate</strong>',
  'Write something new':
    'Kuch naya likhiye',
  'No, and most projects start here':
    'Nahin, aur zyaadatar projects yahin se shuru hote hain',
  'Classify and extract have right answers. So you can measure them on day one. The other three need a person, or a carefully checked process, to judge the output.':
    'Classify aur extract ke sahi jawaab hote hain. Isliye aap unhe pehle din se naap sakte hain. Baaki teen ke output ko parakhne ke liye insaan, ya dhyaan se jaancha hua tareeka chahiye.',
  'Now try this on requests you know. Real examples teach the difference better than definitions.':
    'Ab ise un requests par aazmaiye jo aap jaante hain. Asli udaharan farak ko paribhasha se behtar sikhate hain.',
  'Sort real requests into the five types':
    'Asli requests ko paanch types mein baantiye',
  'Write down six things people at your work have asked AI to do. Use their words, even the vague ones. Then put each one into one of the five types.':
    'Aise chhah kaam likhiye jo aapke kaam par logon ne AI se karne ko kaha. Unke hi shabd rakhiye, dhundhle bhi. Phir har ek ko paanch types mein se ek mein daaliye.',
  'Two things usually happen. Several requests turn out to be the same type in different words. And at least one fits no single type, because it is really two or three tasks stuck together.':
    'Aam taur par do baatein hoti hain. Kai requests alag shabdon mein ek hi type nikalti hain. Aur kam se kam ek kisi ek type mein nahin baithti, kyunki woh asal mein do-teen kaam chipke hue hain.',
  'If a request does not fit one type, cut it into steps until each step does.':
    'Agar request ek type mein nahin baithti, use steps mein kaatiye jab tak har step baith jaaye.',
  'Split mixed requests into steps':
    'Mile-jule requests ko steps mein todiye',
  'Take “handle the grievance inbox” at a state portal. It usually hides three tasks. You <em>classify</em> each grievance by department. You <em>extract</em> the application number. You <em>generate</em> a draft acknowledgement. Each step fails in its own way. Only the first two can be measured without a person reading the output.':
    'Ek state portal par “shikayat inbox sambhaalo” ko lijiye. Isme aam taur par teen kaam chhupe hote hain. Aap har shikayat ko vibhag ke hisaab se <em>classify</em> karte hain. Aap application number <em>extract</em> karte hain. Aap ek draft rasid <em>generate</em> karte hain. Har step apne tareeke se fail hota hai. Sirf pehle do bina insaan ke output padhe naape ja sakte hain.',
  'Split the request that did not fit':
    'Jo request nahin baithi, use todiye',
  'Take the request that did not fit one type. Break it into steps. Each step gets exactly one type. Put them in the order they would run.':
    'Woh request lijiye jo ek type mein nahin baithi. Use steps mein todiye. Har step ka theek ek type ho. Unhe chalne ke kram mein rakhiye.',
  'You get three or four steps. Usually only the last step is hard to measure. The earlier steps are sorting and picking out details. They are cheap and easy to check. When they are reliable, the last step has an easier job.':
    'Aapko teen ya chaar steps milte hain. Aam taur par sirf aakhri step naapna mushkil hota hai. Pehle ke steps baantna aur details nikaalna hain. Woh sasta hain aur jaanchna aasaan. Jab woh bharosemand hon, to aakhri step ka kaam aasaan ho jaata hai.',
  'This also lowers cost. A sorting step can run on a small, cheap model. Only the last step needs an expensive model, and only for the cases that reach it.':
    'Isse kharch bhi ghatta hai. Baantne wala step chhote, sasta model par chal sakta hai. Sirf aakhri step ko mehenga model chahiye, aur sirf un cases ke liye jo wahan tak pahunchte hain.',
  'Let us test your eye on one more example before the summary.':
    'Saransh se pehle ek aur udaharan par apni nazar aazmaiye.',
  'Which type, and what changes':
    'Kaunsa type, aur kya badalta hai',
  'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?':
    'Ek saathi “aisa AI jo contracts padhe aur risky clauses par nishan lagaye” maangta hai. Yeh kaunsa task type hai?',
  'Mostly classify, with extract underneath. Each clause goes into a group, such as standard, unusual or missing. For the risky ones, you pull out the text to show. Very little of it is writing something new.':
    'Zyaadatar classify, uske neeche extract. Har clause ek group mein jaata hai, jaise standard, unusual ya missing. Risky waalon ka text dikhane ke liye nikaala jaata hai. Isme kuch naya likhna bahut kam hai.',
  'That changes how you build it. Classifying has right answers. So you can make an answer key from a hundred clauses a lawyer already checked. You can measure quality before you ship. If you had built something that writes new text, you would have nothing to measure against.':
    'Isse banane ka tareeka badal jaata hai. Classify ke sahi jawaab hote hain. Isliye aap un sau clauses se answer key bana sakte hain jinhe vakil pehle hi jaanch chuka hai. Aap bhejne se pehle quality naap sakte hain. Agar aapne naya text likhne wala banaya hota, to naapne ke liye kuch hota hi nahin.',
  'So keep one habit. Before you ask which model to use, ask which task type you have.':
    'Isliye ek aadat rakhiye. Kaunsa model use karein, yeh poochne se pehle poochiye ki kaunsa task type hai.',
  'Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.':
    '“Kaunsa task type?” poochiye, “kaunsa model?” se pehle. Agar jawaab ek se zyada type hai, to request ko steps mein todiye.',
  'The next two chapters cover the two types you will meet most often. Chapter 2.4 covers classifying, the type with a right answer.':
    'Agle do chapter un do types ke baare mein hain jinse aap sabse zyada milenge. Chapter 2.4 classify ke baare mein hai, jis type ka sahi jawaab hota hai.',
});
