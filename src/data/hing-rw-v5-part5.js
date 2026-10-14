/* Hinglish: part5, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch8f: Software basics for AI work: Python, HTTP, Git and tests ---- */
  'Software basics for AI work: Python, HTTP, Git and tests':
    'AI kaam ke liye software basics: Python, HTTP, Git aur tests',
  'An AI system is a software system with one unpredictable part. In this chapter you’ll learn the software that sits around that part: Python, HTTP and JSON, secrets, Git, logs and tests. Along the way you’ll build an experiment harness, a small tool you’ll reuse for the rest of Part V.':
    'AI system ek software system hai, jisme ek hissa kaafi unpredictable hota hai. Is chapter mein aap us hisse ke aas-paas ka software seekhenge: Python, HTTP aur JSON, secrets, Git, logs aur tests. Saath mein aap ek experiment harness banayenge, ek chhota sa tool, jo Part V ke baaki chapters mein bhi kaam aayega.',
  'Before you read any further, open a notebook and write a short Python program. It should read some JSON, call an HTTP endpoint, handle a failure status and write JSON back out.':
    'Aage padhne se pehle ek notebook kholiye aur ek chhota Python program likhiye. Woh kuch JSON padhe, ek HTTP endpoint ko call kare, failure status ko handle kare, aur JSON wapas likh de.',
  'Turn that program into an experiment harness. For every run, it should record an id, a timestamp, the model, the prompt, the response, the latency, the usage and any errors.':
    'Is program ko experiment harness bana dijiye. Har run ke liye woh ek id, timestamp, model, prompt, response, latency, usage aur koi bhi errors record kare.',
  'Now try to break it. Feed it malformed JSON, a missing field and a timeout, then a 429 and a 500. Watch which of these it survives.':
    'Ab ise todne ki koshish kijiye. Ise malformed JSON dijiye, ek missing field dijiye aur ek timeout, phir ek 429 aur ek 500. Dekhiye inmein se kaun-kaun si cheezein yeh jhel paata hai.',
  'A Git repository that holds the harness and its tests.':
    'Ek Git repository, jisme harness aur uske tests hon.',
  'Pick one failure and trace it from the input that caused it all the way to the error it produced.':
    'Koi ek failure chuniye aur use us input se shuru karke, jisne use paida kiya, us error tak trace kijiye jo aakhir mein aaya.',
  'An API call is a request and a reply':
    'API call ek request aur ek reply hoti hai',
  'You’ve been making these since Chapter 1. This chapter looks at the software around them.':
    'Aap Chapter 1 se yeh calls kar rahe hain. Yeh chapter unke aas-paas ke software ko dekhta hai.',
  'You pay for everything you send':
    'Aap jo bhi bhejte hain, uska paisa lagta hai',
  'So it’s worth building, once, a harness that records usage.':
    'Isliye ek aisa harness ek baar banana theek rehta hai jo usage record kare.',
  'Contract':
    'Contract',
  'An assumption your code makes about the data it receives. For example, that a field exists, that it’s a number, or that a list isn’t empty. Each of these assumptions will be wrong one day.':
    'Woh andaaza jo aapka code us data ke baare mein lagata hai jo use milta hai. Jaise yeh ki koi field maujood hai, woh ek number hai, ya list khaali nahi hai. Inmein se har andaaza kisi din galat nikalta hai.',
  'Status code':
    'Status code',
  'The number a server sends back to say what happened. 200 means it worked, 4xx means you got something wrong, and 5xx means the server did.':
    'Woh number jo server wapas bhejta hai yeh batane ke liye ki kya hua. 200 matlab kaam ho gaya, 4xx matlab aapse kuch galat hua, aur 5xx matlab server se galti hui.',
  'Stack trace':
    'Stack trace',
  'The list of calls that were in progress when something failed, with the innermost call first. It tells you where the failure happened, not why.':
    'Un calls ki list jo failure ke waqt chal rahi thi, sabse andar wali call sabse pehle. Yeh batati hai ki failure kahan hua, kyun hua yeh nahi batati.',
  'Experiment harness':
    'Experiment harness',
  'A small tool that records every run in exactly the same way: the request, the response, the latency, the usage and any error. That way two runs can really be compared.':
    'Ek chhota tool jo har run ko bilkul ek hi tareeke se record karta hai: request, response, latency, usage aur koi bhi error. Isse do runs ko sach mein compare kiya ja sakta hai.',
  'Read a request, a response, a status code and a stack trace with confidence.':
    'Request, response, status code aur stack trace ko aaram se padh paana.',
  'Explain why an AI system is a software system with one probabilistic part.':
    'Samjha paana ki AI system ek aisa software system kyun hai jisme ek hissa probabilistic hota hai.',
  'Name where the engineering risk in an AI feature really sits.':
    'Bata paana ki kisi AI feature mein engineering ka risk asal mein kahan baitha hota hai.',
  'Before you start':
    'Shuru karne se pehle',
  'Open a new notebook, or a local folder if you prefer. In this chapter you’ll build an experiment harness, and you’ll keep adding to it until Chapter 34.':
    'Ek naya notebook kholiye, ya agar aap chahein toh ek local folder. Is chapter mein aap ek experiment harness banayenge, aur Chapter 34 tak ismein cheezein jodte jaayenge.',
  'So far you’ve spent most of your time looking at the model. In this chapter we look at the ordinary software around it. The aim is simple: when an engineer shows you a system diagram, you should recognise every box on it.':
    'Ab tak aapne zyadatar model ko hi dekha hai. Is chapter mein hum model ke aas-paas ke aam software ko dekhte hain. Goal seedha sa hai: jab koi engineer aapko system diagram dikhaye, toh aap uske har box ko pehchaan sakein.',
  'Think about ordering food in an app. Your tap sends a message to a restaurant. A reply comes back with a price, and your screen updates. It all looks mysterious until you see the messages going back and forth. Software around an AI model works the same way.':
    'Ek app mein khana order karne ko yaad kijiye. Aapka ek tap restaurant ko message bhejta hai. Wapas ek reply aata hai jisme price hota hai, aur aapki screen update ho jaati hai. Jab tak aap in messages ko aate-jaate nahi dekhte, sab kuch jaadu jaisa lagta hai. AI model ke aas-paas ka software bhi isi tarah kaam karta hai.',
  'Why this matters':
    'Yeh kyun zaroori hai',
  'Applied AI work involves APIs, Python, cloud services, retrieval, evaluation and production systems. If JSON, HTTP, environment variables, tests and logs are unfamiliar, you can’t question an architecture. This chapter gives you the minimum you need.':
    'Applied AI ke kaam mein APIs, Python, cloud services, retrieval, evaluation aur production systems aate hain. Agar JSON, HTTP, environment variables, tests aur logs aapke liye anjaan hain, toh aap kisi architecture par sawaal nahi utha sakte. Yeh chapter aapko kam se kam jitna chahiye, utna deta hai.',
  'An AI system is a software system with a probabilistic part. Everything that goes wrong in normal software can still go wrong here. On top of that, there’s one more kind of failure, and it produces no error at all.':
    'AI system ek software system hai jisme ek probabilistic hissa hota hai. Normal software mein jo kuch bhi galat ho sakta hai, woh yahan bhi ho sakta hai. Uske upar ek aur kism ka failure hota hai, aur usme koi error aata hi nahi.',
  'Hands-on units':
    'Hands-on units',
  'There are five small units below. Each one has a goal, an idea, something to prove to yourself, something to build, a way to break it, and something to keep. Work through them in order, because each one builds on the one before.':
    'Neeche paanch chhote units hain. Har unit mein ek goal hai, ek idea, kuch jo aapko khud prove karna hai, kuch jo banana hai, use todne ka ek tareeka, aur kuch jo aapko sambhal kar rakhna hai. Inhe order mein kijiye, kyunki har unit pichhle par bana hai.',
  'Python as an experiment instrument':
    'Python ek experiment instrument ki tarah',
  'You’ll learn to write small Python programs with functions, lists, dictionaries and loops. You should know them well enough to change an experiment yourself, without depending on code someone else generated.':
    'Aap functions, lists, dictionaries aur loops ke saath chhote Python programs likhna seekhenge. Inhe itna achhe se jaan lijiye ki aap kisi experiment ko khud badal sakein, kisi aur ke generate kiye hue code par depend kiye bina.',
  'Think of Python as your lab notebook. The goal is to describe an experiment precisely, not to master the language.':
    'Python ko apni lab notebook samajhiye. Goal yeh hai ki aap experiment ko precisely likh sakein, language mein master banna goal nahi hai.',
  'Create a few variables, a function, a loop and a dictionary. Print each result along the way so you can see what’s happening.':
    'Kuch variables, ek function, ek loop aur ek dictionary banaiye. Beech-beech mein har result print kijiye, taaki aap dekh sakein ki kya ho raha hai.',
  'Write a script that reads ten questions from a list and records a result object for each one.':
    'Ek script likhiye jo ek list se das sawaal padhe aur har sawaal ke liye ek result object record kare.',
  'Pass in a missing key, an empty list and a value of the wrong type, on purpose. Look at the errors you get.':
    'Jaan-boojh kar ek missing key, ek khaali list aur galat type ki value pass kijiye. Jo errors aate hain unhe dekhiye.',
  'A file called <code>chapter-8/python-basics.py</code>, plus a one-page log of the errors you saw.':
    'Ek file <code>chapter-8/python-basics.py</code>, aur saath mein jo errors aapne dekhe unka ek page ka log.',
  'Can you explain a function, a dictionary, a loop and an exception without opening any documentation?':
    'Kya aap bina kisi documentation ko khole function, dictionary, loop aur exception samjha sakte hain?',
  'Write the harness in your own code first, before you bring in a framework.':
    'Pehle harness ko apne hi code mein likhiye, kisi framework ko lane se pehle.',
  'HTTP, JSON and API contracts':
    'HTTP, JSON aur API contracts',
  'You’ll understand requests and responses, status codes, headers, JSON payloads, and what it means when a contract fails.':
    'Aap requests aur responses, status codes, headers, JSON payloads, aur contract fail hone ka matlab samjhenge.',
  'An AI API is still just an API. The model is probabilistic, but the network interface around it is ordinary software engineering.':
    'AI API bhi aakhir ek API hi hai. Model probabilistic hai, lekin uske aas-paas ka network interface aam software engineering hai.',
  'Call a safe public JSON endpoint. Print the status code and two of the fields it returns.':
    'Ek safe public JSON endpoint ko call kijiye. Status code aur woh jo fields wapas deta hai unmein se do print kijiye.',
  'Make a fake endpoint response that has missing fields and unexpected fields, and handle both cases.':
    'Ek nakli endpoint response banaiye jisme kuch fields missing hon aur kuch unexpected fields hon, aur dono cases ko handle kijiye.',
  'Simulate a 401, a 404, a 429 and a 500. For each one, decide whether it’s worth trying again.':
    '401, 404, 429 aur 500 simulate kijiye. Har ek ke liye decide kijiye ki dobara try karna theek rahega ya nahi.',
  'An API contract sheet that lists the request, the response, the errors and the retry policy.':
    'Ek API contract sheet jisme request, response, errors aur retry policy likhi ho.',
  'What’s the difference between a bad request, an unavailable dependency and a server failure?':
    'Bad request, unavailable dependency aur server failure mein kya farq hai?',
  'This is the vocabulary you need when someone says “the API failed” and expects that to be the whole explanation. It lets you ask what actually happened.':
    'Jab koi kahe “API fail ho gayi” aur maan le ki yahi poori wajah hai, tab yeh vocabulary aapke kaam aati hai. Isse aap pooch sakte hain ki asal mein hua kya.',
  'Environments, secrets and Git':
    'Environments, secrets aur Git',
  'You’ll use environment variables and secrets, set up a virtual environment, and follow a basic Git workflow.':
    'Aap environment variables aur secrets use karenge, ek virtual environment set up karenge, aur ek basic Git workflow follow karenge.',
  'A prototype that leaks a key, or that nobody else can reproduce, isn’t something an engineer can take seriously.':
    'Jo prototype key leak kar de, ya jise koi aur dobara chala hi na sake, use koi engineer serious nahi leta.',
  'Store a secret outside your source code. Print only a masked prefix of it, never the whole thing.':
    'Ek secret ko apne source code ke bahar store kijiye. Uska sirf ek masked prefix print kijiye, poora kabhi nahi.',
  'Create a repository with a README, a requirements file and one command that runs the experiment the same way every time.':
    'Ek repository banaiye jisme README ho, ek requirements file ho, aur ek command ho jo experiment ko har baar ek hi tareeke se chalaye.',
  'Commit a change that you know is broken. Find it, and then go back to the last version that worked.':
    'Ek aisa change commit kijiye jo aapko pata hai ki galat hai. Use dhoondhiye, phir pichhle chalte hue version par wapas jaiye.',
  'A repository skeleton that anyone can reproduce, with a <code>.gitignore</code>, a README and an experiment log.':
    'Ek repository skeleton jise koi bhi dobara bana sake, jisme <code>.gitignore</code>, ek README aur ek experiment log ho.',
  'Could another person run your experiment without asking you what you did by hand?':
    'Kya koi doosra insaan aapka experiment chala sakta hai, yeh poochhe bina ki aapne haath se kya kiya tha?',
  'Reproducibility matters to a PM because it turns a demo into evidence.':
    'Reproducibility PM ke liye isliye matter karti hai ki woh demo ko evidence bana deti hai.',
  'Errors, logging and tests':
    'Errors, logging aur tests',
  'You’ll learn to read stack traces, add structured logs, and write small tests.':
    'Aap stack traces padhna, structured logs jodna, aur chhote tests likhna seekhenge.',
  'You judge an AI system by what happens when things go wrong, not only when everything goes smoothly.':
    'AI system ko aap is baat se parakhte hain ki jab cheezein galat hoti hain tab kya hota hai, sirf tab nahi jab sab kuch smoothly chal raha ho.',
  'Write three tests: one for an expected answer, one for missing input, and one for a malformed response.':
    'Teen tests likhiye: ek expected jawaab ke liye, ek missing input ke liye, aur ek malformed response ke liye.',
  'Add a request ID, a timestamp, the model and the status to every experiment record.':
    'Har experiment record mein ek request ID, timestamp, model aur status jodiye.',
  'Force a timeout, and force a malformed output. Trace each failure from the input to the exception it caused.':
    'Ek timeout force kijiye, aur ek malformed output bhi force kijiye. Har failure ko input se us exception tak trace kijiye jo usne paida kiya.',
  'A mini test suite, plus a failure log that notes the root cause and the fix for each failure.':
    'Ek mini test suite, aur saath mein ek failure log jisme har failure ka root cause aur fix likha ho.',
  'Can you tell an application bug apart from a failure on the provider’s side or in the model?':
    'Kya aap application bug aur provider ya model ki taraf ke failure mein farq bata sakte hain?',
  'This becomes the base for evaluation and observability later in the course.':
    'Aage course mein evaluation aur observability isi par tikti hain.',
  'Build the experiment harness':
    'Experiment harness banaiye',
  'You’ll create a reusable runner that records the inputs, the outputs, the configuration, the latency and any errors.':
    'Aap ek reusable runner banayenge jo inputs, outputs, configuration, latency aur errors record kare.',
  'The harness is the bridge between “I tried it” and “I measured it.”':
    'Harness “maine try kiya” aur “maine measure kiya” ke beech ka pul hai.',
  'Run one prompt twice, and save both runs as structured JSON.':
    'Ek prompt ko do baar chalaiye, aur dono runs ko structured JSON mein save kijiye.',
  'Add the experiment name, the version, the model, the prompt version, the input and output tokens when they’re available, the latency, and a field for notes.':
    'Experiment ka naam, version, model, prompt version, input aur output tokens (jab available hon), latency, aur notes ke liye ek field jodiye.',
  'Change one thing, and check that the logs make the comparison between the two runs obvious.':
    'Ek cheez badaliye, aur check kijiye ki logs dono runs ka comparison saaf dikhate hain.',
  'A folder called <code>experiment_runner/</code> with a schema, the runner, some sample runs and a README.':
    'Ek folder <code>experiment_runner/</code> jisme schema, runner, kuch sample runs aur ek README ho.',
  'Can you reproduce yesterday’s result, and explain what changed since then?':
    'Kya aap kal ka result dobara la sakte hain, aur bata sakte hain ki tab se kya badla?',
  'Every later chapter should plug into this harness. None of them should invent its own way of recording evidence.':
    'Aage ka har chapter isi harness mein judna chahiye. Kisi ko bhi evidence record karne ka apna naya tareeka nahi banana chahiye.',
  'Contracts fail silently':
    'Contracts chupke se fail hote hain',
  'Every AI application leans on a lot of small assumptions about its data. This field will be there. That value will be a number. This list won’t be empty. Each of these is a <strong>contract</strong>, and in production every one of them will be broken sooner or later.':
    'Har AI application apne data ke baare mein bahut saare chhote andaazon par tiki hoti hai. Yeh field maujood hogi. Woh value number hogi. Yeh list khaali nahi hogi. Inmein se har ek ek <strong>contract</strong> hai, aur production mein inme se har ek kabhi na kabhi toot jaata hai.',
  'A production system has to notice when a contract is broken, instead of carrying on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.':
    'Production system ko yeh pakadna aana chahiye ki contract toot gaya hai, aage chalte rehna nahi. Kai asli AI incidents aise dikhte hain: kisi ne koi error nahi diya, aur jawaab missing data par bana tha.',
  'What “enough” means':
    '“Kaafi” ka matlab kya hai',
  'You don’t need to become a backend engineer. You have enough when you’re comfortable with all of the following.':
    'Aapko backend engineer banne ki zaroorat nahi hai. Aapke paas kaafi tab hai jab aap neeche likhi sab cheezon mein comfortable hon.',
  'You can write a small function, and keep a few labelled values together in a dictionary.':
    'Aap ek chhota function likh sakte hain, aur kuch labelled values ko ek dictionary mein ek saath rakh sakte hain.',
  'You know your <strong>status codes</strong>: 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.':
    'Aap apne <strong>status codes</strong> jaante hain: 200 matlab kaam ho gaya, 4xx matlab request galat thi, aur 5xx matlab server fail hua.',
  'You know what <strong>JSON</strong> is: labels and values, which is the format most systems use to exchange data.':
    'Aap jaante hain ki <strong>JSON</strong> kya hai: labels aur values, jo zyadatar systems ke beech data exchange karne ka format hai.',
  'You keep a password or API key out of your code, in an environment variable instead.':
    'Aap password ya API key ko code ke bahar, ek environment variable mein rakhte hain.',
  'You save your work in Git, so you can go back to an earlier version.':
    'Aap apna kaam Git mein save karte hain, taaki aap kisi pichhle version par wapas ja sakein.',
  'You read an error message from the bottom up, because that’s where the real cause usually is.':
    'Aap error message ko neeche se upar ki taraf padhte hain, kyunki asli wajah aksar wahin hoti hai.',
  'You can write a test that fails on purpose, so you know it really does check something.':
    'Aap aisa test likh sakte hain jo jaan-boojh kar fail ho, taaki aapko pata chale ki woh sach mein kuch check karta hai.',
  'There are two more ideas that are useful to understand, though you don’t need to write them yourself. One is background jobs. The other is queues, which hold work until something is free to process it.':
    'Do aur ideas samajhna kaam ka hai, lekin unhe khud likhna zaroori nahi. Ek hai background jobs. Doosra hai queues, jo kaam ko tab tak rokkar rakhti hain jab tak use process karne ke liye koi free na ho.',
  'Let’s test how much you already understand about a real feature.':
    'Chaliye dekhte hain ki ek asli feature ke baare mein aap abhi kitna samajhte hain.',
  'Think of the last AI feature you saw demonstrated. In plain words, write down what its request probably contained and what its response probably looked like. Where are you guessing?':
    'Us aakhri AI feature ke baare mein sochiye jiska demo aapne dekha tha. Seedhe shabdon mein likhiye ki uski request mein shayad kya tha aur uska response shayad kaisa dikhta tha. Aap kahan andaaza laga rahe hain?',
  'The request probably contained … The response probably … I am guessing about …':
    'Request mein shayad yeh tha … Response shayad … Mujhe andaaza lagana pada …',
  'The places where you had to guess are the questions to ask the team that built it. Being able to produce that list is the main skill this chapter teaches.':
    'Jahan aapko andaaza lagana pada, wahi sawaal hain jo aapko us team se poochhne chahiye jisne yeh banaya. Yeh list bana paana hi is chapter ka sabse bada skill hai.',
  'Summary':
    'Summary',
  'A model API call is a normal software dependency. The engineering risk sits in the interfaces, the error handling, the secrets, the retries, the monitoring and the contracts, at least as much as it sits in the model.':
    'Model API call ek normal software dependency hai. Engineering ka risk interfaces, error handling, secrets, retries, monitoring aur contracts mein baitha hota hai, kam se kam utna jitna model mein.',
  'You now know the everyday software that surrounds a model, and you have a harness that records each run the same way. Next, in Chapter 22, you’ll use that harness to compare models.':
    'Ab aap model ke aas-paas ke roz ke software ko jaante hain, aur aapke paas ek harness hai jo har run ko ek hi tareeke se record karta hai. Agla chapter, Chapter 22, isi harness se models ko compare karega.',
  'Build the test harness and keep it in Git':
    'Test harness banaiye aur use Git mein rakhiye',
  'From here on, almost every chapter asks you to run the tool on the answer key and compare the result with last time. If you set the test up again each time, the comparisons stop being fair. In this chapter you learned to read requests, responses and errors, and that an AI system is a software system with one unpredictable part. Now you’ll build the harness once, put it in Git, and keep adding to it for the rest of the course.':
    'Ab se lagbhag har chapter aapse kehta hai ki tool ko answer key par chalaiye aur result ko pichhli baar se compare kijiye. Agar aap har baar test dobara set up karenge, toh comparisons fair nahi rahenge. Is chapter mein aapne requests, responses aur errors padhna seekha, aur yeh bhi ki AI system ek aisa software system hai jisme ek hissa unpredictable hota hai. Ab aap harness ek baar banayenge, use Git mein rakhenge, aur course ke baaki hisse mein ismein cheezein jodte rahenge.',
  'A new notebook, or a local folder if you prefer. This is the harness you build in code and keep extending through Chapter 34. The notes box below is for what surprised you, not for the code.':
    'Ek naya notebook, ya agar aap chahein toh ek local folder. Yeh woh harness hai jo aap code mein banate hain aur Chapter 34 tak badhate rehte hain. Neeche wala notes box is baat ke liye hai ki aapko kya hairaan kar gaya, code ke liye nahi.',
  'Write a function of about twenty lines that reads your answer key (a CSV file) and returns its rows. Let it filter by one column, for example “only the Hinglish rows”.':
    'Lagbhag 20 lines ka ek function likhiye jo aapki answer key (ek CSV file) padhe aur uski rows wapas de. Use ek column se filter karne dijiye, jaise “sirf Hinglish wali rows”.',
  'Add three tests for it: one with a normal file, one with a row that has a missing field, and one with an empty file.':
    'Iske liye teen tests jodiye: ek normal file ke saath, ek aisi row ke saath jisme ek field missing ho, aur ek khaali file ke saath.',
  'Write a function that runs one sentence through your current pipeline and saves a JSON record of the run. The record holds the sentence, the findings, the time, the tokens and any error.':
    'Ek function likhiye jo ek sentence ko aapki maujooda pipeline se chalaye aur us run ka ek JSON record save kare. Record mein sentence, findings, time, tokens aur koi bhi error hota hai.',
  'Write a function that compares the findings with the answer key and prints recall and precision for each kind of ID and each kind of writing. This is the scoreboard you made by hand in Chapter 6.':
    'Ek function likhiye jo findings ko answer key se compare kare aur har ID type aur har writing type ke liye recall aur precision print kare. Yeh wahi scoreboard hai jo aapne Chapter 6 mein haath se banaya tha.',
  'Create a Git repository, commit the harness, and write a README that explains how to run it on a clean machine.':
    'Ek Git repository banaiye, harness commit kijiye, aur ek README likhiye jo samjhaye ki ise ek saaf machine par kaise chalana hai.',
  'Break one thing on purpose, such as a bad key, a time-out or a broken reply. Then check that the record is still written, with the error in it.':
    'Jaan-boojh kar ek cheez todiye, jaise galat key, time-out ya toota hua reply. Phir check kijiye ki record phir bhi likha jaata hai, aur usme error likha hai.',
  'A repository that someone else can clone and run.':
    'Ek repository jise koi doosra insaan clone karke chala sake.',
  'Three tests that pass, one of which covers a failure.':
    'Teen tests jo pass hote hain, jinme se ek failure ko cover karta hai.',
  'A scoreboard printed from the answer key.':
    'Answer key se print kiya hua ek scoreboard.',
  'One saved record from a run that failed.':
    'Ek fail hue run ka ek saved record.',

  /* ---- ch9m: Choosing a model: benchmark on your own cases ---- */
  'Choosing a model: benchmark on your own cases':
    'Model chunna: apne hi cases par benchmark kijiye',
  'A leaderboard measures someone else’s task. In this chapter you’ll learn what really changes when you change the model. Then you’ll benchmark models on your own ten cases, and write a model selection card that records the evidence for your choice.':
    'Leaderboard kisi aur ke task ko measure karta hai. Is chapter mein aap seekhenge ki model badalne par asal mein kya badalta hai. Phir aap apne hi das cases par models ko benchmark karenge, aur ek model selection card likhenge jisme aapke choice ka evidence likha ho.',
  'Pick two models that you can use. Before you test anything, write down which one you expect to win on quality, which on speed, and which on cost.':
    'Do models chuniye jo aap use kar sakte hain. Kuch bhi test karne se pehle likhiye ki quality mein kaun jeetega, speed mein kaun, aur cost mein kaun.',
  'Run a ten-case benchmark. It should cover factual recall, reasoning, extraction, multilingual text and refusal behaviour.':
    'Das cases ka ek benchmark chalaiye. Usme factual recall, reasoning, extraction, multilingual text aur refusal behaviour, sab aane chahiye.',
  'Change one thing at a time: the model, the sampling, or the prompt. Then work out which change really caused which effect.':
    'Ek baar mein sirf ek cheez badaliye: model, sampling, ya prompt. Phir dekhiye ki kaunse change se kya asar hua.',
  'A Model Selection Card. It records quality, latency and cost, and it names the fallback for when your first choice is unavailable.':
    'Ek Model Selection Card. Usme quality, latency aur cost likhi ho, aur yeh bhi ki agar aapka pehla choice available na ho toh kya chalega.',
  'Recommend a model based on evidence, and defend your choice against someone who prefers a different one.':
    'Evidence ke basis par ek model recommend kijiye, aur us insaan ke saamne apne choice ka bachaav kijiye jo koi aur model pasand karta hai.',
  'Temperature controls variation':
    'Temperature variation ko control karta hai',
  'You tested it in Chapter 2. Here it’s just one variable among several.':
    'Aapne ise Chapter 2 mein test kiya tha. Yahan yeh bahut saare variables mein se sirf ek hai.',
  'Write the answer key before measuring':
    'Measure karne se pehle answer key likhiye',
  'Without an answer key, a benchmark doesn’t tell you much.':
    'Answer key ke bina benchmark se zyada kuch pata nahi chalta.',
  'An experiment harness that records runs':
    'Ek experiment harness jo runs record karta hai',
  'You built it in Chapter 21, and this chapter is the first to use it.':
    'Aapne ise Chapter 21 mein banaya tha, aur yeh chapter ise pehli baar use karta hai.',
  'Inference':
    'Inference',
  'Running a trained model to get an answer. It’s different from training, which is the work that produced the model in the first place. Inference is the part you pay for, on every request, for as long as the product runs.':
    'Ek trained model ko chalana taaki jawaab mile. Yeh training se alag hai, jo woh kaam hai jisse model pehli jagah bana tha. Inference woh hissa hai jiska paisa aap har request par dete hain, jab tak product chalta rahe.',
  'Sampling':
    'Sampling',
  'The way the model picks the next word-piece from the several that it thinks are plausible. Temperature is one way to control it.':
    'Woh tareeka jisse model agla word-piece chunta hai, un kai options mein se jo use plausible lagte hain. Temperature isse control karne ka ek tareeka hai.',
  'Benchmark':
    'Benchmark',
  'A fixed set of cases that you run against more than one option, so that the comparison means something. Somebody else’s benchmark will predict how your task goes only by coincidence.':
    'Cases ka ek fixed set jise aap ek se zyada options par chalate hain, taaki comparison ka kuch matlab ho. Kisi aur ka benchmark aapke task ke baare mein sirf ittefaq se sahi nikalta hai.',
  'Model selection card':
    'Model selection card',
  'A one-page record of which model you chose, what evidence you chose it on, what constraint applied, and what runs instead when that model is unavailable.':
    'Ek page ka record: aapne kaunsa model chuna, kis evidence par chuna, kaunsi constraint lagi, aur jab woh model available na ho toh uski jagah kya chalega.',
  'Explain what changes when you change the model, beyond a benchmark score.':
    'Samjha paana ki model badalne par benchmark score ke alawa aur kya badalta hai.',
  'Say when retrieval, prompting and fine-tuning are each the right choice.':
    'Bata paana ki retrieval, prompting aur fine-tuning har ek kab sahi choice hai.',
  'Write a model recommendation that answers the question “measured how?”.':
    'Aisi model recommendation likh paana jo “measured how?” sawaal ka jawaab de.',
  'Open the experiment harness you built in Chapter 21. You’ll run the same ten cases on two or three models.':
    'Chapter 21 mein jo experiment harness aapne banaya tha, use kholiye. Aap wahi das cases do ya teen models par chalayenge.',
  'In the last chapter you built a harness that records every run in the same way. Now you’ll put it to use. A leaderboard shows how a model did on someone else’s task. In this chapter you’ll get your own numbers, on your own questions, in one afternoon.':
    'Pichhle chapter mein aapne ek harness banaya jo har run ko ek hi tareeke se record karta hai. Ab aap use kaam mein layenge. Leaderboard dikhata hai ki koi model kisi aur ke task par kaisa chala. Is chapter mein aap ek hi dopahar mein, apne sawaalon par, apne khud ke numbers nikaalenge.',
  'Think about buying a car. An award doesn’t tell you whether the car fits your family, suits your roads, or what it costs to run. So you take it for a test drive. Few teams test-drive their models, and that’s the gap this chapter closes.':
    'Gaadi kharidne ke baare mein sochiye. Kisi award se yeh pata nahi chalta ki gaadi aapke parivaar ke liye theek hai, aapki sadkon par chalegi, ya uska running cost kitna hai. Isliye aap test drive lete hain. Bahut kam teams apne models ki test drive leti hain, aur yeh chapter isi kami ko bharta hai.',
  'Models differ on several things at once: capability, speed, context size, tool use and cost. A model that wins on one of these can lose on another. Which one matters most depends on your use case.':
    'Models kai cheezon mein ek saath alag hote hain: capability, speed, context size, tool use aur cost. Jo model inmein se ek mein jeetta hai, woh doosre mein haar sakta hai. Kaunsi cheez sabse zyada matter karti hai, yeh aapke use case par depend karta hai.',
  'There are six short units below. They start with what a model does when it answers, and they end with the one-page card that records your decision. Go through them in order.':
    'Neeche chhe chhote units hain. Pehla unit batata hai ki model jawaab dete waqt kya karta hai, aur aakhri unit us ek page ke card tak le jaata hai jisme aapka decision likha hota hai. Inhe order mein kijiye.',
  'What an LLM is doing at inference':
    'Inference ke waqt LLM kya kar raha hota hai',
  'You’ll be able to explain tokens, how a transformer-based model processes its context, how it generates an answer, and the difference between training and inference.':
    'Aap samjha paayenge ki tokens kya hain, transformer-based model apna context kaise process karta hai, woh jawaab kaise generate karta hai, aur training aur inference mein kya farq hai.',
  'Inference is the stage where the model does its work. It receives the context and generates the output. Training is different, because training is what changes the model’s parameters.':
    'Inference woh stage hai jahan model apna kaam karta hai. Woh context receive karta hai aur output generate karta hai. Training alag hai, kyunki training model ke parameters ko badalti hai.',
  'Compare two prompts with different context lengths. Record the input and output token counts and the latency for each.':
    'Alag-alag context length wale do prompts compare kijiye. Har ek ke liye input aur output token count aur latency record kijiye.',
  'Make a small table of context length against the latency and cost you observed.':
    'Context length ke saamne aapne jo latency aur cost dekhi, uski ek chhoti table banaiye.',
  'Add some irrelevant context. See whether the cost, the latency or the quality of the answer changes.':
    'Thoda irrelevant context jodiye. Dekhiye ki cost, latency ya jawaab ki quality badalti hai ya nahi.',
  'An inference observation sheet.':
    'Ek inference observation sheet.',
  'Why isn’t a larger prompt automatically a better prompt?':
    'Bada prompt apne aap better prompt kyun nahi hota?',
  'Before anyone debates which model brand is better, ask the engineers where the cost and the latency are really coming from.':
    'Koi bhi yeh bahas kare ki kaunsa model brand better hai, usse pehle engineers se poochhiye ki cost aur latency asal mein kahan se aa rahi hai.',
  'Sampling and output variability':
    'Sampling aur output ka variation',
  'You’ll understand the sampling controls as ways of shaping a probability distribution, not as “creativity sliders.”':
    'Aap sampling controls ko probability distribution ko shape dene ke tareeke ki tarah samjhenge, “creativity sliders” ki tarah nahi.',
  'Lower sampling settings generally reduce variation. But they don’t turn a model into a system that is guaranteed to be deterministic or factual.':
    'Kam sampling settings aam taur par variation kam karti hain. Lekin woh model ko aisa system nahi bana deti jiske deterministic ya factual hone ki guarantee ho.',
  'Run the same prompt several times under two sampling settings that your provider supports.':
    'Ek hi prompt ko kai baar chalaiye, do aisi sampling settings ke saath jo aapka provider support karta hai.',
  'Count how many different outputs you got, and note the differences you can see in how they read.':
    'Gin kar dekhiye ki kitne alag outputs mile, aur note kijiye ki padhne mein woh kaise alag the.',
  'Use one factual task and one creative task. Compare whether the variation matters equally in both.':
    'Ek factual task aur ek creative task lijiye. Compare kijiye ki kya variation dono mein barabar matter karta hai.',
  'A table of your sampling experiment, with the raw outputs.':
    'Aapke sampling experiment ki ek table, raw outputs ke saath.',
  'What actually changed: the facts, the diversity, or only the variation?':
    'Asal mein kya badla: facts, diversity, ya sirf variation?',
  'Never promise that “temperature zero means always identical.” Measure what your provider’s model really does.':
    'Kabhi yeh promise mat kijiye ki “temperature zero ka matlab hamesha ek jaisa output”. Dekhiye ki aapke provider ka model asal mein kya karta hai.',
  'Model tiers and routing':
    'Model tiers aur routing',
  'You’ll understand why a smaller, faster and cheaper model may be right for some tasks, while a larger model is right for others.':
    'Aap samjhenge ki chhota, tez aur sasta model kuch tasks ke liye kyun theek ho sakta hai, jabki bada model doosre tasks ke liye.',
  'Choosing a model means balancing many things at once: quality, latency, cost, context, how reliably it uses tools, and your operating constraints.':
    'Model chunna matlab bahut saari cheezon ko ek saath balance karna: quality, latency, cost, context, woh tools ko kitni bharosemand tarah se use karta hai, aur aapki operating constraints.',
  'Create a 10-case benchmark that spans extraction, reasoning, multilingual and refusal tasks.':
    'Das cases ka ek benchmark banaiye jo extraction, reasoning, multilingual aur refusal tasks ko cover kare.',
  'Run two models, or two configurations of one model, through the same cases.':
    'Do models, ya ek model ki do configurations, ko wahi cases chalaiye.',
  'Send the easy cases to the cheaper model and the hard cases to the stronger one. Compare the cost and the quality.':
    'Aasaan cases sasta model ko bhejiye aur mushkil cases zyada strong model ko. Cost aur quality compare kijiye.',
  'A Model Selection Card.':
    'Ek Model Selection Card.',
  'Which acceptance metric justified your choice?':
    'Kaunse acceptance metric ne aapke choice ko sahi thehraya?',
  'There’s no such thing as the “best model” until you’ve defined the task, the quality bar and the cost ceiling.':
    '“Sabse achha model” jaisi koi cheez tab tak nahi hoti jab tak aap task, quality bar aur cost ceiling define nahi kar lete.',
  'Reasoning, context and fine-tuning boundaries':
    'Reasoning, context aur fine-tuning ke daayre',
  'You’ll learn to tell prompting, context or RAG, and fine-tuning apart, because each is a different lever.':
    'Aap prompting, context ya RAG, aur fine-tuning mein farq karna seekhenge, kyunki har ek alag lever hai.',
  'Use context when the system needs knowledge that keeps changing. Use prompting for instructions and behaviour. Use fine-tuning when a repeated, stable behaviour is worth encoding in the model’s weights.':
    'Context tab use kijiye jab system ko aisa knowledge chahiye jo badalta rehta hai. Instructions aur behaviour ke liye prompting. Aur fine-tuning tab jab ek baar-baar aane wala, stable behaviour model ke weights mein daalna sahi lage.',
  'Take one task and write three proposed solutions: prompt only, retrieval or context, and a fine-tuning hypothesis.':
    'Ek task lijiye aur uske teen solutions likhiye: sirf prompt, retrieval ya context, aur ek fine-tuning hypothesis.',
  'For each solution, note the data it needs, the benefit you expect, the cost of maintaining it, and the evaluation it would need.':
    'Har solution ke liye note kijiye ki use kaunsa data chahiye, aapko kya fayda expect hai, use maintain karne ki cost kya hai, aur kaunsi evaluation chahiye hogi.',
  'Invent a case where fine-tuning looks attractive, but retrieval is cheaper because the knowledge changes every week.':
    'Ek aisa case sochiye jahan fine-tuning attractive lagti hai, lekin retrieval sasta hai kyunki knowledge har hafte badalta hai.',
  'A decision matrix: Prompt vs Context/RAG vs Fine-tune.':
    'Ek decision matrix: Prompt vs Context/RAG vs Fine-tune.',
  'Is the gap about knowledge, about behaviour, or both?':
    'Gap knowledge ka hai, behaviour ka hai, ya dono ka?',
  'This stops every architecture discussion from collapsing into “let’s fine-tune it.”':
    'Isse har architecture discussion “chaliye fine-tune kar dete hain” par aakar nahi atakti.',
  'Benchmarking without fooling yourself':
    'Khud ko dhokha diye bina benchmark karna',
  'You’ll learn why small demos can lead to misleading conclusions, and how to design a balanced set of tasks.':
    'Aap seekhenge ki chhote demos se galat conclusions kyun nikal sakte hain, aur ek balanced task set kaise design kiya jaata hai.',
  'A benchmark is a measuring instrument. If the cases are biased, the decisions you make from them will be biased too.':
    'Benchmark ek measuring instrument hai. Agar cases biased hain, toh unse liye gaye decisions bhi biased honge.',
  'Before you test anything, create the categories, pick the sample cases and write down the expected outputs.':
    'Kuch bhi test karne se pehle categories banaiye, sample cases chuniye aur expected outputs likh lijiye.',
  'Where it’s practical, compare the models blind, or at least in the same order every time.':
    'Jahan practical ho, models ko blind compare kijiye, ya kam se kam har baar ek hi order mein.',
  'Add some adversarial cases, some ambiguous ones and some that have no answer. See whether the ranking changes.':
    'Kuch adversarial cases jodiye, kuch ambiguous, aur kuch aise jinka koi jawaab nahi hai. Dekhiye ki ranking badalti hai ya nahi.',
  'A model benchmark of 10 to 30 cases, with a breakdown by category.':
    '10 se 30 cases ka ek model benchmark, category ke hisaab se breakdown ke saath.',
  'Would your benchmark catch the failure you care about most?':
    'Kya aapka benchmark woh failure pakad paayega jiski aapko sabse zyada fikr hai?',
  'A PM should question the test set before questioning the score.':
    'PM ko score par sawaal uthane se pehle test set par sawaal uthana chahiye.',
  'Model Selection Card':
    'Model Selection Card',
  'You’ll turn your evidence into a decision that engineers and stakeholders can review.':
    'Aap apne evidence ko ek aisa decision bana denge jise engineers aur stakeholders review kar sakein.',
  'The card records the constraints, the evidence, the fallback and any risks that are still open, all in one place.':
    'Card mein constraints, evidence, fallback aur woh risks, jo abhi bhi khule hain, sab ek hi jagah likhe hote hain.',
  'Fill in the task, the quality target, how sensitive the data is, the latency target and the cost ceiling.':
    'Task, quality target, data kitna sensitive hai, latency target aur cost ceiling bhariye.',
  'Add the model options, the benchmark evidence and the fallback strategy.':
    'Model options, benchmark evidence aur fallback strategy jodiye.',
  'Take away the benchmark results and try to make the decision anyway. Notice how much of it turns into opinion.':
    'Benchmark results hata dijiye aur phir bhi decision lene ki koshish kijiye. Dekhiye ki uska kitna hissa sirf raay ban jaata hai.',
  'A Model Selection Card with a version history.':
    'Version history wala ek Model Selection Card.',
  'Can a reviewer see exactly why you chose this model?':
    'Kya koi reviewer bilkul dekh sakta hai ki aapne yeh model kyun chuna?',
  'This is evidence of your technical judgment for your portfolio, and it’s worth far more than a screenshot of a leaderboard.':
    'Yeh aapke portfolio ke liye aapki technical judgment ka evidence hai, aur leaderboard ke screenshot se kahin zyada kaam ka hai.',
  'Change one thing at a time':
    'Ek baar mein ek hi cheez badaliye',
  'Here’s the most important habit in this chapter. When you compare models, change only the model. Suppose you change the model and the prompt together, and the result improves. Then you can’t say which of the two changes helped.':
    'Is chapter ki sabse zaroori aadat yahi hai. Models compare karte waqt sirf model badaliye. Maan lijiye aapne model aur prompt ek saath badal diye, aur result behtar ho gaya. Toh aap nahi bata sakte ki dono mein se kaunse change ne madad ki.',
  'What you need to know about models':
    'Models ke baare mein aapko kya jaanna zaroori hai',
  'The knowledge you need is specific, and it’s limited. It covers supervised and unsupervised learning, classification and regression, and training, validation and test sets. It also covers overfitting, precision and recall, and embeddings.':
    'Jo knowledge aapko chahiye woh khaas hai, aur limited hai. Isme supervised aur unsupervised learning, classification aur regression, aur training, validation aur test sets aate hain. Saath hi overfitting, precision aur recall, aur embeddings.',
  'Then add transformers and attention, but only at the level of the idea. Add the difference between inference and training, and between pre-training, fine-tuning and retrieval. That is enough for you to take part in an architecture discussion.':
    'Phir transformers aur attention jodiye, lekin sirf idea ke level par. Inference aur training ka farq, aur pre-training, fine-tuning aur retrieval ka farq bhi jodiye. Itna architecture discussion mein hissa lene ke liye kaafi hai.',
  'Fine-tune, prompt or retrieve?':
    'Fine-tune karein, prompt karein ya retrieve karein?',
  'The most common question in these discussions is whether to fine-tune. Here’s a rule of thumb. Treat it as a hypothesis to test, not as a law.':
    'In discussions mein sabse common sawaal yahi hota hai ki fine-tune karein ya nahi. Yeh ek rule of thumb hai. Ise test karne wali hypothesis samajhiye, kanoon nahi.',
  'Use <strong>retrieval</strong> when the problem is knowledge that changes, or private data.':
    'Jab problem aisa knowledge ho jo badalta rehta hai, ya private data ho, tab <strong>retrieval</strong> use kijiye.',
  'Use <strong>prompting</strong> when you can steer the behaviour with instructions and examples.':
    'Jab aap instructions aur examples se behaviour ko steer kar sakte hain, tab <strong>prompting</strong> use kijiye.',
  'Use <strong>fine-tuning</strong> when the behaviour, the style or the pattern of the task is stable, comes up again and again, and is worth changing the model’s weights for.':
    'Jab behaviour, style ya task ka pattern stable ho, baar-baar aata ho, aur model ke weights badalna uske laayak ho, tab <strong>fine-tuning</strong> use kijiye.',
  'The table below turns this into four decisions you’ll face. For each one, look at the question to ask first, and then at the mistake teams most often make.':
    'Neeche wali table is baat ko chaar decisions mein badal deti hai jo aapke saamne aayenge. Har ek mein dekhiye ki pehle kaunsa sawaal poochhna hai, aur phir teams sabse zyada kaunsi galti karti hain.',
  'Decision':
    'Decision',
  'Ask first':
    'Pehle poochhiye',
  'The common mistake':
    'Aam galti',
  'Model choice':
    'Model choice',
  'Which constraint binds hardest: quality, latency or cost?':
    'Kaunsi constraint sabse zyada kas rahi hai: quality, latency ya cost?',
  'Picking the “smartest” model because of its reputation.':
    'Sirf reputation ki wajah se “sabse smart” model chun lena.',
  'Fine-tune':
    'Fine-tune',
  'Is the gap about knowledge, or about behaviour?':
    'Gap knowledge ka hai, ya behaviour ka?',
  'Fine-tuning a model to teach it documents that change every month.':
    'Model ko aise documents sikhane ke liye fine-tune karna jo har mahine badalte hain.',
  'Reasoning level':
    'Reasoning level',
  'Does more reasoning improve the acceptance metric?':
    'Kya zyada reasoning se acceptance metric behtar hota hai?',
  'Paying for more reasoning without measuring whether it helps.':
    'Zyada reasoning ka paisa dena, bina measure kiye ki usse fayda hota hai ya nahi.',
  'Context size':
    'Context size',
  'Do we genuinely need the larger window?':
    'Kya hamein sach mein bada window chahiye?',
  'Treating a big window as a substitute for retrieval.':
    'Bade window ko retrieval ka substitute samajh lena.',
  'Now try this in your own words.':
    'Ab ise apne shabdon mein try kijiye.',
  'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.':
    'Woh ek sentence likhiye jo aap tab kahenge jab koi stakeholder aapse us model par switch karne ko kahe jo abhi leaderboard par sabse upar aaya hai.',
  'Before we switch, …':
    'Switch karne se pehle, …',
  'A good answer asks: on which of our cases, and at what speed and cost? A leaderboard is a result on someone else’s test set.':
    'Achha jawaab yeh poochhta hai: hamare kaunse cases par, aur kitni speed aur cost par? Leaderboard kisi aur ke test set par ek result hai.',
  'So the habit to carry forward is simple. Measure on your own cases, change one thing at a time, and write down the evidence for your choice. Next, in Chapter 23, you’ll look at how to design the context you send to whichever model you chose.':
    'Toh jo aadat aage le jaani hai woh seedhi hai. Apne hi cases par measure kijiye, ek baar mein ek cheez badaliye, aur apne choice ka evidence likh kar rakhiye. Agle chapter, Chapter 23, mein aap dekhenge ki jo model aapne chuna, use bheje jaane wala context kaise design kiya jaata hai.',
  'Choose the model, with a back-up, and write it on one page':
    'Model chuniye, ek back-up ke saath, aur use ek page par likhiye',
  'The name-and-place finder and the context judge both need a model, and the choice affects quality, cost, speed and privacy. In this chapter you learned that changing the model changes more than a benchmark score, and that a recommendation must answer “measured how?”. Now you’ll test candidate models on your own answer key, and write the one-page card that records your choice.':
    'Name-and-place finder aur context judge, dono ko ek model chahiye, aur is choice ka asar quality, cost, speed aur privacy par padta hai. Is chapter mein aapne seekha ki model badalne se benchmark score ke alawa bhi kuch badalta hai, aur recommendation ko “measured how?” ka jawaab dena hi padta hai. Ab aap candidate models ko apni answer key par test karenge, aur woh ek page ka card likhenge jisme aapka choice record ho.',
  'Your test harness from Chapter 21, to run the models. Write the one-page card in the notes box below.':
    'Models chalane ke liye Chapter 21 ka aapka test harness. Ek page ka card neeche wale notes box mein likhiye.',
  'State the job and the quality bar in numbers. For example: “find at least 90 of every 100 names on the answer key, with no more than 5 false alarms in 100 sentences”.':
    'Job aur quality bar ko numbers mein likhiye. Jaise: “answer key ke har 100 names mein se kam se kam 90 dhoondhna, aur 100 sentences mein 5 se zyada false alarms nahi”.',
  'State how sensitive the text is, and what that rules out straight away. For example, a provider that trains on what you send is ruled out if sentences may contain real Aadhaar numbers.':
    'Likhiye ki text kitna sensitive hai, aur usse turant kya rule out ho jaata hai. Jaise, agar sentences mein asli Aadhaar numbers ho sakte hain, toh woh provider rule out ho jaata hai jo aapke bheje hue data par train karta hai.',
  'Set a time limit and a cost limit for one message.':
    'Ek message ke liye time limit aur cost limit set kijiye.',
  'Choose two or three models. Run your harness on the answer key for each one, and put the results side by side. Show the Hindi and Hinglish results separately from the English ones.':
    'Do ya teen models chuniye. Har ek ke liye answer key par apna harness chalaiye, aur results ko saath-saath rakhiye. Hindi aur Hinglish ke results ko English ke results se alag dikhaiye.',
  'Name the back-up: what runs if the first choice is down, slow or more expensive. Try the back-up at least once.':
    'Back-up ka naam likhiye: agar pehla choice down ho, slow ho ya mehnga ho jaaye toh kya chalega. Back-up ko kam se kam ek baar try kijiye.',
  'Name the test set you will use to recheck this choice in three months.':
    'Us test set ka naam likhiye jisse aap teen mahine baad is choice ko dobara check karenge.',
  'Put it all on one page, the model selection card, so that a manager can read it and an engineer can act on it.':
    'Sab kuch ek page par likhiye, yaani model selection card, taaki manager use padh sake aur engineer us par kaam kar sake.',
  'Numbers for the quality bar, the time limit and the cost limit.':
    'Quality bar, time limit aur cost limit ke numbers.',
  'A side-by-side table of the models, with Hindi and Hinglish shown separately.':
    'Models ki side-by-side table, jisme Hindi aur Hinglish alag dikhaye gaye hon.',
  'A named back-up that you have tried once.':
    'Ek naam wala back-up jise aapne ek baar try kiya ho.',
  'The one-page card, where every claim traces back to a run in your harness.':
    'Ek page ka card, jisme har claim aapke harness ke kisi run tak wapas jaata hai.',

  /* ---- ch10c: Context engineering: deciding what the model sees ---- */
  'Context engineering: deciding what the model sees':
    'Context engineering: model ko kya dikhana hai, yeh tay karna',
  'Context engineering means deciding what goes into each request: the instructions, examples, evidence, history and tool results, and the format they come in. In this chapter you’ll treat the prompt as a contract, set a context budget, and decide where memory is stored.':
    'Context engineering matlab yeh tay karna ki har request mein kya jaayega: instructions, examples, evidence, history aur tool results, aur woh kis format mein aayenge. Is chapter mein aap prompt ko ek contract ki tarah dekhenge, ek context budget set karenge, aur tay karenge ki memory kahan store hogi.',
  'Write a vague prompt that makes a downstream parser fail, and keep the failure so you can look at it later.':
    'Ek vague prompt likhiye jo downstream parser ko fail kara de, aur us failure ko sambhal kar rakhiye taaki baad mein dekh sakein.',
  'Redesign the prompt as an interface. Give it structured output, validation, examples, a refusal state, provenance, and a limit on how much history it carries.':
    'Prompt ko ek interface ki tarah dobara design kijiye. Usme structured output, validation, examples, ek refusal state, provenance, aur history par ek limit dijiye.',
  'Now break it on purpose. Remove required fields, add contradictory instructions, overflow the context, and inject irrelevant history.':
    'Ab ise jaan-boojh kar todiye. Required fields hata dijiye, contradictory instructions jodiye, context ko overflow kijiye, aur irrelevant history daaliye.',
  'A context budget, a schema, and a design for memory and state.':
    'Ek context budget, ek schema, aur memory aur state ka ek design.',
  'Explain the difference between context, state and persistent memory, without blurring the three together.':
    'Context, state aur persistent memory ka farq samjhaiye, teeno ko ek-doosre mein ghuse bina.',
  'A system prompt is a standing instruction':
    'System prompt ek standing instruction hota hai',
  'You met this in Chapter 2. Here it’s one part of a designed context.':
    'Yeh aapne Chapter 2 mein dekha tha. Yahan yeh ek designed context ka sirf ek hissa hai.',
  'The context window has a limit':
    'Context window ki ek limit hoti hai',
  'You saw this in Chapter 1.5. The budget is real, so something has to be removed first.':
    'Yeh aapne Chapter 1.5 mein dekha tha. Budget asli hai, isliye kuch na kuch pehle hatana hi padta hai.',
  'Structured output can be required':
    'Structured output ko required banaya ja sakta hai',
  'Chapter 8 made the format reliable. This chapter places it inside a wider design.':
    'Chapter 8 ne format ko reliable banaya. Yeh chapter use ek bade design ke andar rakhta hai.',
  'Context engineering':
    'Context engineering',
  'Deciding what the model receives at all: instructions, examples, evidence, history and tool results, and the shape they come in. Retrieval is one part of it.':
    'Yeh tay karna ki model ko aakhir milega kya: instructions, examples, evidence, history aur tool results, aur woh kis shape mein aayenge. Retrieval ismein ek hissa hai.',
  'Context budget':
    'Context budget',
  'A token allowance for each part of the context, together with a stated order in which things are dropped when the total won’t fit.':
    'Context ke har hisse ke liye tokens ka ek allowance, saath mein ek tay order ki jab total fit na ho toh cheezein kis order mein hataayi jaayengi.',
  'Schema validation':
    'Schema validation',
  'Checking the data that comes back against a declared shape, before anything downstream uses it.':
    'Wapas aaye data ko ek declared shape se check karna, isse pehle ki aage koi use use kare.',
  'Provenance':
    'Provenance',
  'The record of where a piece of information came from. It travels with the information, so an answer can be traced back to a source.':
    'Is baat ka record ki koi information kahan se aayi. Yeh information ke saath chalta hai, taaki kisi jawaab ko wapas uske source tak trace kiya ja sake.',
  'Treat a prompt as an interface contract, not as a paragraph of requests.':
    'Prompt ko requests ke paragraph ki tarah nahi, ek interface contract ki tarah dekh paana.',
  'Say what gets removed first when the context budget is tight, and why.':
    'Bata paana ki context budget tight ho toh sabse pehle kya hataya jaata hai, aur kyun.',
  'Tell conversation history, user profile and task state apart as three different stores.':
    'Conversation history, user profile aur task state ko teen alag stores ki tarah pehchaan paana.',
  'Pick one assistant you know well, either your own or one you use. You’ll list everything that goes into its context.':
    'Ek aisa assistant chuniye jise aap achhe se jaante hain, aapka apna ya koi jo aap use karte hain. Aap uske context mein jo kuch bhi jaata hai, sab ki list banayenge.',
  'In the last chapter you chose a model. Now the question is what you send to it. You’ve thought of the prompt as the message you type, but the prompt is only one part of what the model sees. Every request can also carry instructions, examples, documents, earlier messages and results from tools.':
    'Pichhle chapter mein aapne ek model chuna. Ab sawaal yeh hai ki aap use bhejte kya hain. Aap prompt ko ab tak woh message samajhte aaye hain jo aap type karte hain, lekin prompt model ko dikhne wali cheezon ka sirf ek hissa hai. Har request ke saath instructions, examples, documents, pichhle messages aur tools ke results bhi ja sakte hain.',
  'Choosing what goes into that request, and what stays out, is called <strong>context engineering</strong>. It matters for two reasons. The context window has a limit, so not everything fits. And you pay for every token you send.':
    'Is request mein kya jaayega aur kya bahar rahega, yeh chunna <strong>context engineering</strong> kehlata hai. Yeh do wajah se zaroori hai. Context window ki ek limit hoti hai, isliye sab kuch fit nahi hota. Aur aap jo bhi token bhejte hain, uska paisa lagta hai.',
  'An everyday comparison helps here. Imagine you brief a brilliant new colleague who remembers nothing from yesterday. Each morning you hand them a folder: the standing instructions, a few examples, the file they need today, and a note about last week. What you put in that folder decides how well they do.':
    'Ise roz ki zindagi se samajhiye. Maan lijiye aapki team mein ek bahut smart naya colleague aaya hai, lekin woh kal ki koi baat yaad nahi rakhta. Isliye aap roz subah use ek folder dete hain: hamesha wali instructions, kuch examples, aaj ki zaroori file, aur pichhle hafte ka ek note. Us folder mein aap kya rakhte hain, wahi tay karta hai ki woh kitna achha kaam karega.',
  'Treat a prompt as an interface contract. It has a role, a task, constraints, examples, an output schema and a refusal behaviour, and the code downstream depends on each of these.':
    'Prompt ko ek interface contract ki tarah dekhiye. Usme ek role, ek task, constraints, examples, ek output schema aur ek refusal behaviour hota hai, aur downstream code inmein se har ek par depend karta hai.',
  'The six units below take you from a single prompt to a whole context design. Each one gives you something small to build, and something to break on purpose.':
    'Neeche ke chhe units aapko ek akele prompt se poore context design tak le jaate hain. Har unit mein banane ke liye kuch chhota hai, aur jaan-boojh kar todne ke liye bhi kuch.',
  'Prompt as an interface contract':
    'Prompt ek interface contract ki tarah',
  'You’ll design prompts that spell out the task, the constraints, the inputs, what you expect back, and what should happen when something fails.':
    'Aap aise prompts design karenge jinmein task, constraints, inputs, kya wapas chahiye, aur kuch fail ho toh kya hona chahiye, sab saaf likha ho.',
  'A prompt works like a contract between your app and the model. Your app promises to send certain things, and the model is asked to send back certain things.':
    'Prompt aapke app aur model ke beech ek contract ki tarah kaam karta hai. Aapka app kuch cheezein bhejne ka vaada karta hai, aur model se kuch cheezein wapas bhejne ko kaha jaata hai.',
  'Take a vague instruction and rewrite it into a role, a task, constraints, examples and output requirements.':
    'Ek vague instruction lijiye aur use role, task, constraints, examples aur output requirements mein dobara likhiye.',
  'Run the old and the new version on the same 10 cases.':
    'Purana aur naya version, dono ko wahi 10 cases par chalaiye.',
  'Add two instructions that contradict each other. Watch which behaviour stays steady and which starts to wobble.':
    'Do aise instructions jodiye jo ek-doosre ko kaat dein. Dekhiye ki kaunsa behaviour steady rehta hai aur kaunsa dagmagane lagta hai.',
  'A side-by-side view of the old and new prompt, plus the results of your 10-case test.':
    'Purane aur naye prompt ka side-by-side view, aur saath mein aapke 10-case test ke results.',
  'Which requirement became something you can measure after the rewrite?':
    'Rewrite ke baad kaunsi requirement aisi ban gayi jise aap measure kar sakte hain?',
  'Keep versions of your prompt changes, the way engineers do with code.':
    'Prompt ke changes ke versions rakhiye, jaise engineers code ke saath karte hain.',
  'Structured outputs and schemas':
    'Structured outputs aur schemas',
  'You’ll make the model’s output something a machine can read, and you’ll check it before anything downstream uses it.':
    'Aap model ke output ko aisa banayenge jise machine padh sake, aur aage koi use use kare usse pehle aap use check karenge.',
  'Output in natural language is flexible, but the interfaces in an application need a predictable structure.':
    'Natural language mein output flexible hota hai, lekin app ke interfaces ko ek predictable structure chahiye.',
  'Define a small JSON schema for an object that holds one extracted task.':
    'Ek chhota JSON schema define kijiye, ek aise object ke liye jisme ek extracted task ho.',
  'Generate some outputs, parse them, and reject any that have an invalid structure.':
    'Kuch outputs generate kijiye, unhe parse kijiye, aur jinka structure invalid ho unhe reject kijiye.',
  'Remove a required field, and put in a value of the wrong type. Check that your application catches both.':
    'Ek required field hata dijiye, aur ek galat type ki value daal dijiye. Check kijiye ki aapka application dono pakadta hai.',
  'The schema, the validation tests, and sample payloads that are valid and invalid.':
    'Schema, validation tests, aur valid aur invalid, dono tarah ke sample payloads.',
  'Does the schema stop unsafe values, or only formatting mistakes?':
    'Kya schema unsafe values rokta hai, ya sirf formatting ki galtiyan?',
  'Structured output controls the interface. It doesn’t guarantee that the content is true.':
    'Structured output interface ko control karta hai. Yeh guarantee nahi deta ki content sach hai.',
  'You’ll measure how much of the context is instructions, how much is history, how much is retrieved text, and how much is tool output.':
    'Aap measure karenge ki context ka kitna hissa instructions hai, kitna history, kitna retrieved text, aur kitna tool output.',
  'Context is a limited resource, and it affects quality, latency and cost.':
    'Context ek limited resource hai, aur uska asar quality, latency aur cost par padta hai.',
  'Record the token count for each part of the context, where your provider shows it. Where it doesn’t, estimate in the same way every time.':
    'Context ke har hisse ka token count record kijiye, jahan aapka provider dikhata hai. Jahan nahi dikhata, wahan har baar ek hi tareeke se estimate kijiye.',
  'Write a budget policy that says what you keep, what you summarise and what you drop first.':
    'Ek budget policy likhiye jo bataye ki kya rakhna hai, kya summarise karna hai aur sabse pehle kya hataana hai.',
  'Flood the context with irrelevant history, and compare the answer quality and the cost.':
    'Context ko irrelevant history se bhar dijiye, aur answer quality aur cost compare kijiye.',
  'A Context Budget Worksheet.':
    'Ek Context Budget Worksheet.',
  'What is the first thing you would remove under pressure?':
    'Dabav mein sabse pehle aap kya hataayenge?',
  'A PM should be able to ask “what is in the context?” and get an exact answer.':
    'PM ko yeh poochh paana chahiye ki “context mein kya hai?” aur ek exact jawaab milna chahiye.',
  'State, history and memory':
    'State, history aur memory',
  'You’ll separate four things that people often mix up: the context of one request, the conversation history, the data kept about a user, and the state of a task.':
    'Aap chaar aisi cheezein alag karenge jo log aksar mila dete hain: ek request ka context, conversation history, user ke baare mein rakha gaya data, aur ek task ka state.',
  '“Memory” isn’t a single feature. It’s an application architecture, with storage, retention rules and authorisation.':
    '“Memory” koi ek feature nahi hai. Yeh ek application architecture hai, jisme storage, retention rules aur authorisation hote hain.',
  'Draw three stores: the session history, the user profile and the task state.':
    'Teen stores banaiye: session history, user profile aur task state.',
  'For each store, write down the fields, who owns it, how long it’s kept, who can access it, and how it gets deleted.':
    'Har store ke liye likhiye ki usme kaunse fields hain, woh kiska hai, kitne time tak rakha jaata hai, kaun access kar sakta hai, aur woh delete kaise hota hai.',
  'Bring in memory that is stale or that conflicts with other memory, and define rules for which one wins.':
    'Aisi memory laaiye jo purani ho ya doosri memory se takraati ho, aur tay kijiye ki kaun jeetega.',
  'A Memory and State Design Sheet.':
    'Ek Memory aur State Design Sheet.',
  'Which data should never be put into a prompt by default?':
    'Kaunsa data default mein kabhi prompt mein nahi daalna chahiye?',
  'This is where privacy and product design meet context engineering.':
    'Yahin privacy aur product design, context engineering se milte hain.',
  'Provenance and citations':
    'Provenance aur citations',
  'You’ll make the evidence traceable, so you can follow it from the answer back to the source, the chunk and the version.':
    'Aap evidence ko traceable banayenge, taaki aap use jawaab se wapas source, chunk aur version tak follow kar sakein.',
  'A citation is useful only if it lets the user, or an auditor, trace the claim back to its evidence.':
    'Citation tabhi kaam ki hai jab woh user ya auditor ko claim ko wapas uske evidence tak trace karne de.',
  'Attach a source ID, a section and a chunk ID to every passage you retrieve.':
    'Har retrieve kiye gaye passage ke saath ek source ID, ek section aur ek chunk ID jodiye.',
  'Generate an answer that cites those identifiers.':
    'Ek aisa jawaab generate kijiye jo in identifiers ko cite kare.',
  'Delete a source version or change it, and test whether the old citations are still valid.':
    'Ek source version delete kijiye ya badaliye, aur test kijiye ki purane citations ab bhi valid hain ya nahi.',
  'A provenance schema, with some example citations.':
    'Ek provenance schema, kuch example citations ke saath.',
  'Can you reproduce the exact source that was used for an answer?':
    'Kya aap woh exact source dobara la sakte hain jo kisi jawaab mein use hua tha?',
  'Traceability is essential in systems that are regulated or full of policy.':
    'Jin systems par regulation ho ya jo policy se bhare hon, unmein traceability zaroori hai.',
  'Context failure clinic':
    'Context failure clinic',
  'You’ll diagnose wrong answers that come from context that is missing, stale, irrelevant, contradictory or malicious.':
    'Aap aise galat jawaabon ko diagnose karenge jo missing, purane, irrelevant, contradictory ya malicious context se aate hain.',
  'Many failures that people blame on “the model” are really failures in how the context was put together.':
    'Jin failures ka ilzaam log “model” par lagate hain, unmein se kaafi asal mein is baat ke failures hote hain ki context kaise jodha gaya.',
  'Create five context packages that are bad on purpose, and predict how each one will fail.':
    'Paanch aise context packages banaiye jo jaan-boojh kar kharab hon, aur pehle se andaaza lagaiye ki har ek kaise fail hoga.',
  'Fix one problem at a time, and rerun the same test set each time.':
    'Ek baar mein ek problem theek kijiye, aur har baar wahi test set dobara chalaiye.',
  'Mix a stale policy, some unrelated text and a prompt injection into the context.':
    'Context mein ek purani policy, kuch unrelated text aur ek prompt injection mila dijiye.',
  'A Context Failure Taxonomy.':
    'Ek Context Failure Taxonomy.',
  'What failed: retrieval, assembly, authorisation, the order of instructions, or generation?':
    'Kya fail hua: retrieval, assembly, authorisation, instructions ka order, ya generation?',
  'This prepares you for production RAG and for security.':
    'Yeh aapko production RAG aur security ke liye taiyaar karta hai.',
  'One more thing about structured output. It removes ambiguity for the code that reads the reply, and that code usually can’t handle prose.':
    'Structured output ke baare mein ek aur baat. Woh us code ke liye ambiguity hata deta hai jo reply padhta hai, aur woh code aksar prose sambhal nahi paata.',
  'Memory is an architecture choice':
    'Memory ek architecture choice hai',
  'A model does not have memory. Every product that offers memory has built a store for it, and the kind of store decides what it can delete when someone asks.':
    'Model ke paas memory nahi hoti. Jis bhi product mein memory dikhti hai, usne uske liye ek store banaya hai, aur store ka type tay karta hai ki koi kahe toh woh kya delete kar sakta hai.',
  'You’ll hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions. What goes in? And what is removed first when it doesn’t fit?':
    'Aap context ke hisson ke bahut saare naam sunenge: caching, compression, few-shot examples, instruction hierarchy. Yeh sab do hi sawaalon ka jawaab dete hain. Kya andar jaayega? Aur jab sab fit na ho, toh sabse pehle kya hataya jaayega?',
  'Let’s try that with an assistant you know.':
    'Chaliye ise ek aise assistant par try karte hain jise aap jaante hain.',
  'For one assistant you know, estimate the tokens spent on system instructions, history, retrieved passages and tool output. Then decide what gets removed first when the budget is tight.':
    'Ek aisa assistant lijiye jise aap jaante hain, aur andaaza lagaiye ki system instructions, history, retrieved passages aur tool output par kitne tokens kharch hote hain. Phir tay kijiye ki budget tight ho toh sabse pehle kya hataya jaayega.',
  'instructions … history … retrieved … tool output … remove first: …':
    'instructions … history … retrieved … tool output … sabse pehle hataayenge: …',
  'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.':
    'Zyadatar log history pehle hataate hain aur evidence sabse aakhir mein. Agar aapka order alag hai, toh likhiye kyun. Wahi reasoning design hai.',
  'So, to bring it together: the prompt is one part of the context, the context has a budget, and memory is something you design and store. Next, in Chapter 24, you’ll use this context design as the input to a production retrieval system.':
    'Toh sab ko jodkar dekhein: prompt context ka sirf ek hissa hai, context ka ek budget hota hai, aur memory woh cheez hai jise aap design karte hain aur store karte hain. Agle chapter, Chapter 24, mein aap is context design ko ek production retrieval system ke input ki tarah use karenge.',
  'Plan exactly what the model gets to see':
    'Tay kijiye ki model ko bilkul kya dikhna hai',
  'Every call to the context judge sends the model a bundle of text, and the bundle is limited and costs money. In this chapter you learned to treat a prompt as a contract, to decide what is removed first when space runs short, and to keep conversation history, user settings and task state apart. Now you’ll write the one-page plan for the context judge’s call.':
    'Context judge ki har call model ko text ka ek bundle bhejti hai, aur woh bundle limited hota hai aur paisa lagata hai. Is chapter mein aapne seekha ki prompt ko ek contract ki tarah dekhna hai, jagah kam padne par sabse pehle kya hataana hai yeh tay karna hai, aur conversation history, user settings aur task state ko alag rakhna hai. Ab aap context judge ki call ke liye ek page ka plan likhenge.',
  'Written, using real token counts from a run of your harness. Write the page in the notes box below.':
    'Likhkar, apne harness ke ek run ke asli token counts ke saath. Page neeche wale notes box mein likhiye.',
  'List everything that goes into one call to the context judge: the instructions, the worked examples, the sentence to check, any earlier messages and any reference list.':
    'Context judge ki ek call mein jo kuch bhi jaata hai uski list banaiye: instructions, worked examples, check karne wala sentence, pichhle messages aur koi reference list.',
  'Next to each item, write a token count from a real run, not a guess.':
    'Har item ke saamne ek asli run ka token count likhiye, andaaza nahi.',
  'Set a total limit for the call and show how much room is left.':
    'Call ke liye ek total limit set kijiye aur dikhaiye ki kitni jagah bachi hai.',
  'Write the order in which things are removed when space runs out, and the rule behind it. The sentence to check is never removed.':
    'Woh order likhiye jisme jagah khatam hone par cheezein hataayi jaati hain, aur uske peeche ka rule bhi. Check karne wala sentence kabhi nahi hataya jaata.',
  'Write the exact shape the reply must have, which is your finding format, and what happens when a reply does not match.':
    'Reply ka bilkul sahi shape likhiye, yaani aapka finding format, aur yeh bhi ki reply match na kare toh kya hota hai.',
  'For each piece of stored data (the chat so far, a user’s settings, the state of the current task), say which of the three kinds of memory it belongs to.':
    'Store kiye gaye data ke har hisse ke liye (ab tak ki chat, user ki settings, current task ka state), batayiye ki woh teen tarah ki memory mein se kaunsi mein aata hai.',
  'A list of everything in the call with a real token count beside each item.':
    'Call mein jo kuch hai uski list, har item ke saamne ek asli token count ke saath.',
  'A total limit and the room left.':
    'Ek total limit aur bachi hui jagah.',
  'The removal order and the rule behind it.':
    'Hataane ka order aur uske peeche ka rule.',
  'The reply shape, and the three kinds of stored data sorted.':
    'Reply ka shape, aur store kiye gaye data ke teen types, alag-alag kiye hue.',

  /* ---- ch11r: Production RAG: ingestion, access control and freshness ---- */
  'Production RAG: ingestion, access control and freshness':
    'Production RAG: ingestion, access control aur freshness',
  'A production retrieval system has several stages that you can tune, from reading documents in to checking the answer. In this chapter you’ll walk through each stage, including permissions, deletion and rollback. By the end, you’ll have designed an architecture that you could defend in a review.':
    'Ek production retrieval system mein kai stages hote hain jinhe aap tune kar sakte hain, documents ko andar padhne se lekar jawaab ko check karne tak. Is chapter mein aap har stage se guzrenge, jismein permissions, deletion aur rollback bhi aate hain. Aakhir tak aap ek aisa architecture design kar chuke honge jiska aap review mein bachaav kar sakein.',
  'Take three real documents and make an inventory of each: its id, its sections, its language, its metadata and its access label. Then predict which metadata will turn out to be worth keeping.':
    'Teen asli documents lijiye aur har ek ki inventory banaiye: uski id, sections, language, metadata aur access label. Phir andaaza lagaiye ki kaunsa metadata kaam ka nikalega.',
  'Compare lexical, semantic and hybrid retrieval. Then add reranking, or write down a measured reason for leaving it out.':
    'Lexical, semantic aur hybrid retrieval ko compare kijiye. Phir reranking jodiye, ya use chhodne ki ek measured wajah likh dijiye.',
  'Test what happens when a document is deleted, when a permission changes, when there are duplicates, and when the index version changes.':
    'Test kijiye ki kya hota hai jab koi document delete hota hai, jab koi permission badalti hai, jab duplicates hote hain, aur jab index ka version badalta hai.',
  'A production RAG architecture with access control, provenance, versioning, a no-answer policy and a rollback path.':
    'Ek production RAG architecture jisme access control, provenance, versioning, ek no-answer policy aur ek rollback path ho.',
  'Name the first production retrieval failure you would investigate, and say why you would look at that one first.':
    'Production retrieval ki woh pehli failure batayiye jiski aap jaanch karenge, aur kahiye ki aap use hi pehle kyun dekhenge.',
  'You built retrieval by hand':
    'Aapne retrieval haath se banaya',
  'You did this in Chapters 3 to 7. This chapter turns it into an architecture.':
    'Yeh aapne Chapters 3 se 7 mein kiya. Yeh chapter use ek architecture mein badalta hai.',
  'Keyword and meaning search fail differently':
    'Keyword aur meaning search alag tarah se fail hote hain',
  'Chapter 12 measured the difference. Here it becomes a decision about ingestion and indexing.':
    'Chapter 12 ne is farq ko measure kiya. Yahan yeh ingestion aur indexing ka decision ban jaata hai.',
  'The answer key is your measuring tool':
    'Answer key aapka measuring tool hai',
  'Every claim in this chapter is measured against it.':
    'Is chapter ka har claim isi ke against measure hota hai.',
  'Ingestion':
    'Ingestion',
  'Everything that happens to a document before it can be retrieved: parsing, extraction, enrichment, chunking and embedding. It sets a ceiling on quality, and nothing later in the chain can raise that ceiling.':
    'Kisi document ke saath retrieve hone se pehle jo kuch bhi hota hai: parsing, extraction, enrichment, chunking aur embedding. Yeh quality par ek ceiling laga deta hai, aur aage chain mein koi bhi us ceiling ko upar nahi utha sakta.',
  'Query rewriting':
    'Query rewriting',
  'Turning what the user typed into what should really be searched for, before the retrieval runs.':
    'User ne jo type kiya use us cheez mein badalna jo asal mein search honi chahiye, retrieval chalne se pehle.',
  'Access-control-aware retrieval':
    'Access-control-aware retrieval',
  'Filtering by who is asking as part of the search itself, instead of hiding results afterwards in the interface.':
    'Search ke andar hi yeh filter karna ki poochh kaun raha hai, na ki baad mein interface mein results chhupana.',
  'Embedding versioning':
    'Embedding versioning',
  'Keeping track of which model produced which stored vectors, so that a change of model doesn’t quietly corrupt an index.':
    'Yeh track rakhna ki kaunsa model kaunse stored vectors banaya, taaki model badalne se index chupke se kharab na ho jaaye.',
  'Name the stages of a production retrieval pipeline, and say which of them can be tuned.':
    'Production retrieval pipeline ke stages ke naam bata paana, aur yeh bhi ki inmein se kaunse tune kiye ja sakte hain.',
  'Explain why the quality of ingestion sets an upper limit on the quality of retrieval.':
    'Samjha paana ki ingestion ki quality retrieval ki quality par upper limit kyun lagati hai.',
  'Say what must happen to your index when a document is deleted or a permission changes.':
    'Bata paana ki jab koi document delete ho ya koi permission badle toh aapke index ke saath kya hona chahiye.',
  'Have your Chapter 12 retrieval pipeline and your Chapter 6 answer key ready.':
    'Chapter 12 ki apni retrieval pipeline aur Chapter 6 ki apni answer key taiyaar rakhiye.',
  'In the last chapter you decided what the model should see. Now we look at where that evidence comes from when the system is real. Your Chapter 7 system works because you chose every document yourself, and you are the only user.':
    'Pichhle chapter mein aapne tay kiya ki model ko kya dikhna chahiye. Ab hum dekhte hain ki jab system asli ho, tab woh evidence kahan se aata hai. Aapka Chapter 7 wala system isliye chalta hai kyunki har document aapne khud chuna tha, aur user sirf aap hain.',
  'Production is different. Scans arrive crooked. Permissions change after a document has been indexed. The same contract gets uploaded twice under two names. And your provider updates the model without telling you. This chapter is about building a retrieval system that survives all of that.':
    'Production alag hota hai. Scans tedhe aate hain. Document index hone ke baad permissions badal jaati hain. Wahi contract do alag naamon se do baar upload ho jaata hai. Aur aapka provider aapko bataye bina model update kar deta hai. Yeh chapter aisa retrieval system banane ke baare mein hai jo in sab ko jhel jaaye.',
  'Note':
    'Note',
  'A production pipeline has seven stages: reading documents in, splitting them, adding labels, creating embeddings, searching, building the prompt, and checking the answer. You can tune each stage. That also means each one is a suspect when quality drops without a code change.':
    'Ek production pipeline mein saat stages hote hain: documents ko andar padhna, unhe split karna, labels jodna, embeddings banana, search karna, prompt banana, aur jawaab ko check karna. Aap har stage ko tune kar sakte hain. Isliye jab code badle bina quality girti hai, toh har stage par shak jaata hai.',
  'Anything lost while reading documents in is lost for good. Better search can’t bring back a table that the parser flattened, or a page that it skipped.':
    'Documents ko andar padhte waqt jo kuch kho gaya, woh hamesha ke liye kho gaya. Behtar search us table ko wapas nahi la sakti jo parser ne flatten kar di, ya us page ko jo usne chhod diya.',
  'There are eight units below. They follow a document on its journey: first it’s read, then labelled and split, then searched, and finally it’s protected, refreshed and, if needed, rolled back. Each unit has something to build and something to break.':
    'Neeche aath units hain. Yeh ek document ke safar ko follow karte hain: pehle woh padha jaata hai, phir label aur split hota hai, phir search hota hai, aur aakhir mein woh protect hota hai, fresh rakha jaata hai aur zaroorat padne par rollback hota hai. Har unit mein banane ke liye kuch hai aur todne ke liye bhi.',
  'Parsing and document ingestion':
    'Parsing aur document ingestion',
  'You’ll treat document ingestion as an engineering pipeline, not as a matter of “upload PDF.”':
    'Aap document ingestion ko ek engineering pipeline ki tarah dekhenge, “PDF upload kar do” ki tarah nahi.',
  'If you get garbage in at ingestion, or lose the structure of the document, you’ll get garbage out of retrieval later.':
    'Agar ingestion par garbage andar gaya, ya document ka structure kho gaya, toh baad mein retrieval se bhi garbage hi niklega.',
  'Take three PDFs or documents. Compare the extracted text with what a person sees in the source.':
    'Teen PDFs ya documents lijiye. Nikaale gaye text ko us se compare kijiye jo ek insaan source mein dekhta hai.',
  'Record the page, the section, the table, the language and your notes on the parser.':
    'Page, section, table, language aur parser ke baare mein apne notes record kijiye.',
  'Use a scanned page, a page full of tables, and a malformed document. Record what gets lost.':
    'Ek scanned page, tables se bhara page, aur ek malformed document use kijiye. Record kijiye ki kya kho jaata hai.',
  'An Ingestion Quality Report.':
    'Ek Ingestion Quality Report.',
  'Which information disappeared before retrieval even started?':
    'Retrieval shuru hone se pehle hi kaunsi information gayab ho gayi?',
  'Ask how good the parser or OCR is before you blame the embeddings.':
    'Embeddings ko dosh dene se pehle poochhiye ki parser ya OCR kitna achha hai.',
  'Metadata and document identity':
    'Metadata aur document identity',
  'You’ll design stable identifiers for documents and chunks, plus the metadata you need for filtering and provenance.':
    'Aap documents aur chunks ke liye stable identifiers design karenge, saath mein woh metadata jo filtering aur provenance ke liye chahiye.',
  'Metadata is part of the retrieval logic. It’s not decoration.':
    'Metadata retrieval logic ka hissa hai. Yeh sajaavat nahi hai.',
  'Create these fields: document_id, version, section, language, access_label and effective_date.':
    'Yeh fields banaiye: document_id, version, section, language, access_label aur effective_date.',
  'Give every chunk a stable ID, and keep the link to its parent.':
    'Har chunk ko ek stable ID dijiye, aur uske parent se link bana rehne dijiye.',
  'Create duplicate versions and superseded versions of a document, and test your retrieval filters.':
    'Document ke duplicate versions aur superseded versions banaiye, aur apne retrieval filters ko test kijiye.',
  'A Document Metadata Contract.':
    'Ek Document Metadata Contract.',
  'Can the system tell current evidence from obsolete evidence?':
    'Kya system current evidence ko obsolete evidence se alag pehchaan sakta hai?',
  'Versioning and identity become critical the moment a policy changes.':
    'Jis pal policy badalti hai, usi pal versioning aur identity bahut zaroori ho jaate hain.',
  'Chunking families':
    'Chunking families',
  'You’ll compare fixed, recursive or structure-aware, semantic and hierarchical chunking, without treating any of them as the best in every case.':
    'Aap fixed, recursive ya structure-aware, semantic aur hierarchical chunking ko compare karenge, bina kisi ko har case mein sabse achha maane.',
  'A chunking choice is a hypothesis about what unit of evidence your users will need.':
    'Chunking ka choice ek hypothesis hai ki aapke users ko evidence ki kaunsi unit chahiye hogi.',
  'Chunk the same document in three ways, and look at where the boundaries fall.':
    'Ek hi document ko teen tareekon se chunk kijiye, aur dekhiye ki boundaries kahan padti hain.',
  'Write 10 questions that each need a different amount of evidence.':
    '10 sawaal likhiye jinme se har ek ko alag kitna evidence chahiye.',
  'Test a question whose answer crosses a chunk boundary.':
    'Ek aisa sawaal test kijiye jiska jawaab ek chunk boundary ke paar jaata hai.',
  'A Chunking Experiment, with before and after examples.':
    'Ek Chunking Experiment, before aur after examples ke saath.',
  'Which chunking strategy matched your set of questions, and why?':
    'Kaunsi chunking strategy aapke sawaalon ke set se match hui, aur kyun?',
  'The right question isn’t “which chunking is best?” It’s “best for what corpus, and for what kinds of queries?”':
    'Sahi sawaal “kaunsi chunking sabse achhi hai?” nahi hai. Sahi sawaal hai “kis corpus ke liye, aur kis tarah ki queries ke liye sabse achhi?”',
  'Sparse retrieval':
    'Sparse retrieval',
  'You’ll understand exact lexical retrieval, and why it’s still valuable.':
    'Aap exact lexical retrieval ko samjhenge, aur yeh bhi ki woh ab bhi kaam ki kyun hai.',
  'Identifiers, names, codes and exact phrases are often where lexical methods are strongest.':
    'Identifiers, names, codes aur exact phrases aksar wahi jagah hoti hain jahan lexical methods sabse strong hote hain.',
  'Build a small keyword or BM25-style search experiment. Or use a library, once you understand the idea behind the scoring.':
    'Ek chhota keyword ya BM25-style search experiment banaiye. Ya scoring ka idea samajhne ke baad koi library use kijiye.',
  'Measure the rank of passages that you know are the right answer.':
    'Un passages ka rank measure kijiye jinke baare mein aap jaante hain ki wahi sahi jawaab hain.',
  'Use paraphrased questions, and questions full of synonyms, to expose where it’s weak.':
    'Paraphrased sawaal, aur synonyms se bhare sawaal use kijiye, taaki pata chale ki yeh kahan kamzor hai.',
  'A Sparse Retrieval Benchmark.':
    'Ek Sparse Retrieval Benchmark.',
  'Where did exact matching win?':
    'Exact matching kahan jeeti?',
  'Don’t replace a strong, predictable signal just because embeddings are fashionable.':
    'Ek strong, predictable signal ko sirf isliye mat badaliye ki embeddings fashion mein hain.',
  'Dense, hybrid and vector search':
    'Dense, hybrid aur vector search',
  'You’ll understand embeddings as a representation that can be indexed, and you’ll combine sparse and dense evidence.':
    'Aap embeddings ko ek aisi representation ki tarah samjhenge jise index kiya ja sakta hai, aur sparse aur dense evidence ko jodenge.',
  'Dense retrieval helps when two texts mean the same thing but use different words. Hybrid retrieval combines methods that fail in different ways.':
    'Dense retrieval tab madad karta hai jab do texts ka matlab ek ho lekin words alag hon. Hybrid retrieval aise methods ko jodta hai jo alag-alag tarah se fail hote hain.',
  'Run the question set from Chapters 4 and 5 through lexical, dense and hybrid retrieval.':
    'Chapters 4 aur 5 ka question set lexical, dense aur hybrid retrieval se chalaiye.',
  'Record the rank of the relevant evidence for each query.':
    'Har query ke liye relevant evidence ka rank record kijiye.',
  'Create cases with an exact ID, a synonym, several languages, and an ambiguous question.':
    'Aise cases banaiye jinme ek exact ID ho, ek synonym ho, kai languages hon, aur ek ambiguous sawaal ho.',
  'A Retrieval Benchmark with the evidence for each query.':
    'Ek Retrieval Benchmark, har query ke evidence ke saath.',
  'Which categories of query do best with which retriever?':
    'Queries ki kaunsi categories ko kaunse retriever se fayda hota hai?',
  'Your architecture decisions should follow the pattern of your errors.':
    'Aapke architecture decisions aapki galtiyon ke pattern ko follow karne chahiye.',
  'Reranking':
    'Reranking',
  'You’ll understand a second-stage relevance model, and you’ll measure whether its benefit justifies the cost and the latency.':
    'Aap ek second-stage relevance model ko samjhenge, aur measure karenge ki uska fayda cost aur latency ko justify karta hai ya nahi.',
  'The first stage tries to find all the good candidates. Reranking can then improve the order among those candidates.':
    'Pehla stage saare achhe candidates dhoondhne ki koshish karta hai. Reranking phir un candidates ke beech ka order behtar kar sakti hai.',
  'Retrieve 10 candidates and apply a second scoring stage. Use a reranker that’s available to you, or a substitute you’ve measured.':
    '10 candidates retrieve kijiye aur ek second scoring stage lagaiye. Woh reranker use kijiye jo aapko available ho, ya koi aisa substitute jise aapne measure kiya ho.',
  'Compare Recall@10, Precision@3 and latency, before and after.':
    'Recall@10, Precision@3 aur latency ko before aur after compare kijiye.',
  'Include cases where the reranker puts the evidence in the wrong order, and does so with confidence.':
    'Aise cases shamil kijiye jahan reranker evidence ko galat order mein rakhta hai, aur woh bhi poore confidence ke saath.',
  'A Reranking Experiment Report.':
    'Ek Reranking Experiment Report.',
  'Did the improvement reach the final task, or only a metric in the middle?':
    'Kya sudhaar final task tak pahuncha, ya sirf beech ke ek metric tak?',
  'Never add reranking just because a reference architecture has it. Prove that it’s worth it.':
    'Reranking sirf isliye mat jodiye ki kisi reference architecture mein hai. Prove kijiye ki woh kaam ki hai.',
  'Query rewriting, parent-child retrieval and abstention':
    'Query rewriting, parent-child retrieval aur abstention',
  'You’ll improve the retrieval query and the size of the context, while keeping what the user meant.':
    'Aap retrieval query aur context ke size ko behtar banayenge, user ne jo kaha tha woh sambhaal kar.',
  'Retrieval is a pipeline of steps: forming the query, searching for candidates, filtering, ranking, putting the context together, and the policy for the answer.':
    'Retrieval steps ki ek pipeline hai: query banana, candidates search karna, filter karna, rank karna, context jodna, aur jawaab ki policy.',
  'Rewrite ambiguous questions as explicit search queries, and compare the results.':
    'Ambiguous sawaalon ko explicit search queries mein likhiye, aur results compare kijiye.',
  'Retrieve small child chunks, but return the larger parent context so the answer reads well.':
    'Chhote child chunks retrieve kijiye, lekin bada parent context return kijiye taaki jawaab padhne mein achha lage.',
  'Test a query that can’t be answered, and a query where the rewrite changes what the user meant.':
    'Ek aisi query test kijiye jiska jawaab nahi ho sakta, aur ek aisi query jisme rewrite user ke matlab ko badal deta hai.',
  'A Query Strategy and an Abstention Test Set.':
    'Ek Query Strategy aur ek Abstention Test Set.',
  'When should the system ask a clarifying question instead of retrieving?':
    'System ko retrieve karne ki jagah clarifying sawaal kab poochhna chahiye?',
  'Abstention is a product behaviour. It’s not just a sentence in a prompt.':
    'Abstention ek product behaviour hai. Yeh sirf prompt ka ek sentence nahi hai.',
  'Authorization, freshness and rollback':
    'Authorization, freshness aur rollback',
  'You’ll make retrieval aware of permissions, and you’ll make it possible to undo changes safely.':
    'Aap retrieval ko permissions ke baare mein aware banayenge, aur changes ko safely undo karna possible banayenge.',
  'A correct answer that comes from data the user wasn’t allowed to see is still a security failure.':
    'Jis data ko dekhne ki user ko ijazat nahi thi, usse aaya sahi jawaab bhi ek security failure hai.',
  'Add an access label to your chunks, and filter by the role of a test user.':
    'Apne chunks mein ek access label jodiye, aur ek test user ke role ke hisaab se filter kijiye.',
  'Simulate a document being deleted, a permission changing, and the index being rebuilt.':
    'Simulate kijiye ki ek document delete ho raha hai, ek permission badal rahi hai, aur index dobara ban raha hai.',
  'Query immediately after a permission is revoked, and check that stale content in the index can’t be reached.':
    'Permission revoke hote hi turant query kijiye, aur check kijiye ki index mein jo purana content bacha hai woh pahunch se bahar hai.',
  'A production RAG architecture, plus a checklist for permissions, freshness and rollback.':
    'Ek production RAG architecture, saath mein permissions, freshness aur rollback ki ek checklist.',
  'Can you prove that a user who isn’t authorised cannot retrieve the chunk?':
    'Kya aap prove kar sakte hain ki jis user ko ijazat nahi hai woh us chunk ko retrieve nahi kar sakta?',
  'Authorisation belongs in the application and data layer. It’s not enough to put it only in the model’s instructions.':
    'Authorisation application aur data layer mein honi chahiye. Sirf model ki instructions mein rakhna kaafi nahi hai.',
  'Reranking has a cost':
    'Reranking ki ek cost hoti hai',
  'Reranking improves the order of results, but it adds cost. Fetch ten candidates and rescore them. Then check whether recall at ten and precision at three improved enough to justify the extra time and cost.':
    'Reranking results ka order behtar karti hai, lekin cost jodti hai. Das candidates laaiye aur unhe dobara score kijiye. Phir check kijiye ki recall at ten aur precision at three itne behtar hue ya nahi ki extra time aur cost sahi thehre.',
  'Four questions to ask about any retrieval product':
    'Kisi bhi retrieval product ke baare mein poochhne ke chaar sawaal',
  'Production retrieval has a long list of concerns, and you don’t need to memorise it. Every item on that list fits under one of four questions.':
    'Production retrieval mein fikr ki cheezon ki ek lambi list hoti hai, aur aapko use ratna zaroori nahi. Us list ka har item in chaar sawaalon mein se kisi ek ke andar aa jaata hai.',
  '<strong>Did we read the document correctly?</strong> This covers scans, tables, and content that a parser drops.':
    '<strong>Kya hamne document sahi padha?</strong> Isme scans, tables, aur woh content aata hai jo parser chhod deta hai.',
  '<strong>Is this user allowed to see it?</strong> This covers permissions, separate customers, and deleted documents.':
    '<strong>Kya is user ko yeh dekhne ki ijazat hai?</strong> Isme permissions, alag-alag customers, aur deleted documents aate hain.',
  '<strong>Did we find the right chunk?</strong> This covers keyword search, meaning search, query rewriting and reranking.':
    '<strong>Kya hamne sahi chunk dhoondha?</strong> Isme keyword search, meaning search, query rewriting aur reranking aate hain.',
  '<strong>Can we show where the answer came from?</strong> This covers chunk IDs, citations, and what happens when there is no answer.':
    '<strong>Kya hum dikha sakte hain ki jawaab kahan se aaya?</strong> Isme chunk IDs, citations, aur yeh aata hai ki jawaab na ho toh kya hota hai.',
  'Use these four questions whenever someone demonstrates a retrieval product to you. Then try them on a case of your own.':
    'Jab bhi koi aapko retrieval product ka demo dikhaye, yeh chaar sawaal poochhiye. Phir inhe apne ek case par try kijiye.',
  'A document is deleted from the source system at 10am. Describe what must happen for the assistant to stop quoting it, and by when.':
    'Source system se subah 10 baje ek document delete hota hai. Batayiye ki assistant ko use quote karna band karne ke liye kya hona chahiye, aur kab tak.',
  'At 10am … then … by …':
    'Subah 10 baje … phir … tak …',
  'If your answer depends on a nightly rebuild, your system quotes a deleted document from 10am until the rebuild. That window is a decision, so make it on purpose.':
    'Agar aapka jawaab raat ke rebuild par depend karta hai, toh aapka system 10 baje se rebuild tak ek deleted document ko quote karta rahega. Yeh window ek decision hai, isliye ise soch-samajh kar rakhiye.',
  'To sum up: ingestion sets the ceiling, permissions and deletions have to reach the index, and every added stage has to prove it’s worth its cost. Next, in Chapter 25, you’ll give the model controlled access to actions, not only to evidence.':
    'Toh sab ko jodkar dekhein: ingestion ceiling tay karta hai, permissions aur deletions ko index tak pahunchna hi hoga, aur har naya stage apni cost ko justify kare yeh prove karna hoga. Agle chapter, Chapter 25, mein aap model ko actions tak controlled access denge, sirf evidence tak nahi.',
  'Draw the gateway on one page':
    'Gateway ko ek page par banaiye',
  'The gateway is the version of Bharat Privacy Guard that sits in front of a company’s servers, logs and AI traffic. You won’t build it, but you must be able to design it, so that an engineer could build from your page and a security reviewer could challenge it. In this chapter you learned the stages of a production search pipeline, why the quality of the first stage caps everything after it, and what must happen to an index when a document is deleted or a permission changes. Now you’ll apply all of that to the gateway’s rules and reference lists.':
    'Gateway Bharat Privacy Guard ka woh version hai jo kisi company ke servers, logs aur AI traffic ke saamne baitha hota hai. Aap ise banayenge nahi, lekin ise aise design karna hai ki engineer aapke page se build kar sake aur security reviewer us par sawaal utha sake. Is chapter mein aapne production search ke stages seekhe, yeh bhi ki pehle stage ki quality baaki sab par cap kyun lagati hai, aur document delete ya permission change hone par index ke saath kya hona chahiye. Ab yeh sab gateway ke rules aur reference lists par lagaiye.',
  'Written only. A one-page design. No code needed.':
    'Sirf likhna hai. Ek page ka design. Code ki zaroorat nahi.',
  'Draw these stages as separate boxes: how a company’s rules and reference lists are loaded, where they are stored, how they are searched, how the right rule is chosen for a request, how the result is reordered if needed, and how the decision is applied.':
    'In stages ko alag-alag boxes ki tarah banaiye: company ke rules aur reference lists kaise load hote hain, woh kahan store hote hain, unhe kaise search kiya jaata hai, ek request ke liye sahi rule kaise chuna jaata hai, zaroorat ho toh result ka order kaise badla jaata hai, aur decision kaise apply hota hai.',
  'Add who may do what: who can change a rule, who can read the logs, and who can switch the gateway off. Mark where the permission check happens.':
    'Yeh jodiye ki kaun kya kar sakta hai: rule kaun badal sakta hai, logs kaun padh sakta hai, aur gateway ko kaun band kar sakta hai. Mark kijiye ki permission check kahan hota hai.',
  'Mark how an answer can be traced back. Every decision should record which rule, in which version, produced it.':
    'Mark kijiye ki jawaab ko wapas kaise trace kiya ja sakta hai. Har decision mein record hona chahiye ki kaunse rule ne, kaunse version mein, use paida kiya.',
  'Write the “no answer” rule: what the gateway does when no rule applies, and what the user sees.':
    '“No answer” rule likhiye: jab koi rule apply na ho toh gateway kya karta hai, aur user ko kya dikhta hai.',
  'Write how the rules and the reference lists are versioned, and what happens to old decisions when a rule changes.':
    'Likhiye ki rules aur reference lists ka versioning kaise hota hai, aur jab koi rule badalta hai toh purane decisions ke saath kya hota hai.',
  'Write the rollback: what you do when a new rule version makes things worse.':
    'Rollback likhiye: jab rule ka naya version cheezein aur kharab kar de, toh aap kya karte hain.',
  'A one-page drawing with the stages as separate boxes and the permission check marked.':
    'Ek page ki drawing jisme stages alag-alag boxes mein hon aur permission check mark ho.',
  'The trace from a decision back to a rule and version.':
    'Ek decision se wapas ek rule aur version tak ka trace.',
  'The “no rule applies” behaviour, the versioning plan and the rollback.':
    '“Koi rule apply nahi hota” wala behaviour, versioning ka plan aur rollback.',
  'The page really fits on one page. If it does not, you have not made enough decisions yet.':
    'Page sach mein ek hi page par aata hai. Agar nahi aata, toh aapne abhi kaafi decisions nahi liye hain.',

  /* ---- ch12t: Tool calling and workflows: contracts before agents ---- */
  'Tool calling and workflows: contracts before agents':
    'Tool calling aur workflows: agents se pehle contracts',
  'A tool lets the model do something real, so you have to decide exactly what it may do and who checks it. You’ll write tool contracts, enforce permissions on the server, and choose a fixed workflow before you allow an agent.':
    'Tool model ko kuch asli kaam karne deta hai, isliye aapko tay karna padta hai ki woh exactly kya kar sakta hai aur kaun check karega. Aap tool contracts likhenge, permissions ko server par enforce karenge, aur agent allow karne se pehle fixed workflow chunenge.',
  'Pick one action that happens outside the model, and write its tool schema before you write any model logic.':
    'Aisi ek action chuniye jo model ke bahar hoti hai, aur model ka koi bhi logic likhne se pehle uska tool schema likhiye.',
  'Build the flow classify → retrieve → tool → validate → respond, with a confirmation step for anything that has consequences.':
    'Yeh flow banaiye: classify → retrieve → tool → validate → respond. Jis bhi action ka asar padta hai, uske liye ek confirmation step rakhiye.',
  'Test four things: badly formed arguments, a timeout, a call the user is not allowed to make, and a tool that confidently returns the wrong thing.':
    'Chaar cheezein test kijiye: galat banaye hue arguments, ek timeout, aisi call jo user ko karne ki ijaazat nahi, aur aisa tool jo poore confidence ke saath galat cheez lautata hai.',
  'A tool contract, a workflow diagram, and a table of the ways each step can fail.':
    'Ek tool contract, ek workflow diagram, aur ek table jisme har step ke fail hone ke tareeke likhe hon.',
  'Point to every place in the flow where ordinary, fixed code stays in control.':
    'Flow mein har woh jagah dikhaiye jahan control ordinary, fixed code ke haath mein rehta hai.',
  'A schema makes the format reliable':
    'Schema se format reliable ban jaata hai',
  'From Chapter 8. A tool contract takes the same idea and applies it to actions.':
    'Chapter 8 se. Tool contract wahi idea leta hai aur use actions par laagu karta hai.',
  'The model invents when it has no evidence':
    'Evidence na ho toh model cheezein invent kar deta hai',
  'From Chapter 2. Now the model can invent the inputs to a real action.':
    'Chapter 2 se. Ab model ek asli action ke inputs bhi invent kar sakta hai.',
  'Tool contract':
    'Tool contract',
  'A written description of one outside capability: its name, what it does, the inputs it accepts and how tightly they are limited, the errors it can return, who may use it, and what it changes.':
    'Ek bahar ki capability ka likha hua description: uska naam, woh kya karti hai, kaun se inputs leti hai aur woh kitne tight limit mein hain, kaun se errors de sakti hai, kaun use kar sakta hai, aur woh kya badalti hai.',
  'Deterministic workflow':
    'Deterministic workflow',
  'A fixed sequence of steps, where only the parts that really need judgement are left to the model.':
    'Steps ka ek fixed sequence, jisme sirf woh hisse model ko diye jaate hain jahan sach mein judgement chahiye.',
  'Idempotency':
    'Idempotency',
  'The property that doing the same operation twice has the same effect as doing it once. It matters the moment anything retries.':
    'Yeh woh property hai jisme ek hi operation ko do baar karne ka wahi asar hota hai jo ek baar karne ka. Yeh tab zaroori ho jaata hai jab kuch bhi retry hota hai.',
  'Confirmation step':
    'Confirmation step',
  'A point where a person must say yes before an action with consequences is allowed to run.':
    'Woh jagah jahan koi insaan haan bole, uske baad hi asar daalne wali action chalti hai.',
  'Write a tool contract that a reviewer could sign off.':
    'Aisa tool contract likh paana jise koi reviewer sign off kar sake.',
  'Say when a fixed workflow is better than letting the model decide.':
    'Bata paana ki fixed workflow kab model ko decide karne dene se behtar hai.',
  'Name the checks that must happen before an important action runs.':
    'Woh checks bata paana jo kisi zaroori action ke chalne se pehle hone chahiye.',
  'Open your experiment harness from Chapter 21 and the agent loop from Chapter 9. You’ll want both nearby for the hands-on units.':
    'Chapter 21 ka apna experiment harness kholiye, aur Chapter 9 ka agent loop bhi. Hands-on units ke liye dono paas mein chahiye honge.',
  'So far in this part, the model has read things and written answers. It has looked at documents and replied. In this chapter the model starts to <em>do</em> things, and that changes how careful you need to be.':
    'Is part mein ab tak model ne cheezein padhi hain aur jawaab likhe hain. Usne documents dekhe aur reply diya. Is chapter se model cheezein <em>karna</em> shuru karta hai, aur isse aapko kitna dhyaan rakhna hai, woh badal jaata hai.',
  'A <strong>tool</strong> is what lets the model do something real: look up an invoice, send an email or change a record. Once that’s possible, the question is no longer whether the model can act. The question is what exactly it may do, with what data, and who checks.':
    '<strong>Tool</strong> woh cheez hai jo model ko kuch asli kaam karne deti hai: ek invoice dekhna, email bhejna, ya record badalna. Jab yeh possible ho jaata hai, toh sawaal yeh nahi rehta ki model kar sakta hai ya nahi. Sawaal yeh hai ki woh exactly kya kar sakta hai, kis data ke saath, aur check kaun karega.',
  'Think of a bank teller. A teller can look up your balance. But a teller can’t approve a loan alone, or send money just because a customer says so. That rule isn’t there because tellers are untrustworthy. It’s there because some actions have consequences outside the bank.':
    'Ek bank teller ko dekhiye. Teller aapka balance dekh sakta hai. Lekin woh akele loan approve nahi kar sakta, aur sirf customer ke kehne par paise bhi nahi bhej sakta. Yeh rule isliye nahi ki teller par bharosa nahi hai. Yeh isliye hai ki kuch actions ka asar bank ke bahar tak jaata hai.',
  'A model with tools is in the same position. In this chapter you’ll learn to write down what each tool may do, and to keep the checks in ordinary code. You’ll also learn to prefer a fixed workflow until an agent has earned its place.':
    'Tools wala model bhi isi jagah par hai. Is chapter mein aap likhna seekhenge ki har tool kya kar sakta hai, aur checks ko ordinary code mein rakhna seekhenge. Aap yeh bhi seekhenge ki jab tak agent apni jagah kamaa na le, fixed workflow ko pehle chunna hai.',
  'There are six units, and they go in order. Each one has a short goal, an idea behind it, something to try, something to break on purpose, and something to hand in. The checking question and the product lens at the end tell you what to take away from it.':
    'Yahan chhe units hain, aur woh order mein chalte hain. Har unit mein ek chhota goal hai, uske peeche ek idea, kuch karke dekhne ko, kuch jaan-boojhkar todne ko, aur kuch jama karne ko. Aakhir ka checking sawaal aur product lens batate hain ki aapko isse kya saath le jaana hai.',
  'Tool schemas':
    'Tool schemas',
  'Define a tool as a tightly limited contract. It has a name, a description, inputs, errors and permissions.':
    'Tool ko ek tight limit wale contract ki tarah define kijiye. Usmein naam, description, inputs, errors aur permissions hote hain.',
  'The way you define a tool is part of what the model sees when it works. A clear definition helps the model use the tool well.':
    'Aap tool ko jaise define karte hain, woh model ko kaam karte waqt dikhne wali cheezon ka hissa hota hai. Saaf definition se model tool ko behtar use karta hai.',
  'Write a schema for <code>get_invoice_status(invoice_id)</code>.':
    '<code>get_invoice_status(invoice_id)</code> ke liye ek schema likhiye.',
  'Add the fields that are required, the formats that are allowed, and a clear error for each thing that can go wrong.':
    'Zaroori fields, allowed formats, aur har galti ke liye ek saaf error jodiye.',
  'Try a missing ID, an ID in the wrong format, and an invoice the user is not allowed to see.':
    'Ek missing ID try kijiye, galat format wali ID, aur aisa invoice jo user ko dekhne ki ijaazat nahi hai.',
  'A written Tool Contract Specification.':
    'Ek likha hua Tool Contract Specification.',
  'Could a new engineer read it and know exactly what the tool can and cannot do?':
    'Kya ek naya engineer ise padhkar exactly jaan sakta hai ki tool kya kar sakta hai aur kya nahi?',
  'Tool descriptions deserve the same care as the documentation for an API.':
    'Tool descriptions ko utni hi care chahiye jitni ek API ke documentation ko.',
  'Tool selection':
    'Tool selection',
  'Measure whether the model picks the right tool for each task.':
    'Measure kijiye ki model har task ke liye sahi tool chunta hai ya nahi.',
  'Give the model a tool only when using it adds real value, not because tools feel new and exciting.':
    'Model ko tool tabhi dijiye jab use karne se asli value judti ho, isliye nahi ki tools naye aur exciting lagte hain.',
  'Create 20 test cases that use two or three tools between them.':
    '20 test cases banaiye jinme do ya teen tools shaamil hon.',
  'For each case, record which tool the model chose, which inputs it gave, and which tool you expected.':
    'Har case mein note kijiye ki model ne kaun sa tool chuna, kaun se inputs diye, aur aapne kaun sa tool expect kiya tha.',
  'Add tools with names that are almost the same, and requests that could mean more than one thing.':
    'Aise tools jodiye jinke naam lagbhag ek jaise hain, aur aise requests jinke ek se zyada matlab ho sakte hain.',
  'A Tool Selection Benchmark.':
    'Ek Tool Selection Benchmark.',
  'What share of the calls were correct, what share were unnecessary, and what share were unsafe?':
    'Kitni calls sahi thi, kitni unnecessary thi, aur kitni unsafe thi?',
  'Later, in agent systems, this becomes one of the quality measures you can track.':
    'Aage jaakar agent systems mein yeh ek aisa quality measure ban jaata hai jise aap track kar sakte hain.',
  'Validation, retries and timeouts':
    'Validation, retries aur timeouts',
  'Keep the inputs the model writes separate from the controls that decide whether to run them.':
    'Model jo inputs likhta hai, unhe un controls se alag rakhiye jo tay karte hain ki unhe chalana hai ya nahi.',
  'The model is not the one who decides what is allowed. Ordinary code does that.':
    'Kya allowed hai, yeh model tay nahi karta. Yeh ordinary code tay karta hai.',
  'Check every input before the tool runs. Then add a rule for timeouts and retries.':
    'Tool chalne se pehle har input check kijiye. Phir timeouts aur retries ka ek rule jodiye.',
  'Simulate failures that go away on their own, and failures that never will.':
    'Aisi failures simulate kijiye jo apne aap theek ho jaati hain, aur aisi jo kabhi theek nahi hongi.',
  'Make the tool return a badly formed result, and watch what the next step does with it.':
    'Tool se ek galat bana hua result lautvaiye, aur dekhiye agla step usse kya karta hai.',
  'A Tool Failure-State Table.':
    'Ek Tool Failure-State Table.',
  'Which failures are worth retrying, and which need a person to step in?':
    'Kaun si failures ko retry karna theek hai, aur kinke liye kisi insaan ko aana padega?',
  'For every outside service your product depends on, a PM should ask what happens on a timeout, what gets retried and what counts as a failure.':
    'Aapka product jis bhi bahar ki service par depend karta hai, uske liye PM ko poochna chahiye ki timeout par kya hota hai, kya retry hota hai, aur kya failure maana jaata hai.',
  'Idempotency and side effects':
    'Idempotency aur side effects',
  'Understand why calling a tool twice can repeat an action.':
    'Samajhiye ki tool ko do baar call karne se action dobara kyun ho sakti hai.',
  'A retry is safe only when the operation is safe to repeat, or when something protects it from running twice. That protection is called an idempotency mechanism.':
    'Retry tabhi safe hai jab operation ko dohrana safe ho, ya jab koi cheez use do baar chalne se bachaye. Us bachav ko idempotency mechanism kehte hain.',
  'Design an idempotency key for submitting a purchase or a request.':
    'Ek purchase ya request submit karne ke liye ek idempotency key design kijiye.',
  'Run the same action twice, and check that only one real effect happens.':
    'Wahi action do baar chalaiye, aur check kijiye ki sirf ek asli asar hua.',
  'Simulate a network timeout that happens after the server has already accepted the request.':
    'Ek network timeout simulate kijiye jo tab hota hai jab server request accept kar chuka ho.',
  'A Side-Effect Safety Checklist.':
    'Ek Side-Effect Safety Checklist.',
  'What happens if the caller never receives the message saying it worked?':
    'Agar caller ko kabhi woh message mile hi nahi ki kaam ho gaya, toh kya hoga?',
  'This matters most when AI can trigger payments, tickets, messages or records.':
    'Yeh sabse zyada tab zaroori hai jab AI payments, tickets, messages ya records trigger kar sakta ho.',
  'Human approval':
    'Human approval',
  'Put a clear confirmation step before any action that has consequences or cannot be undone.':
    'Aisi har action se pehle ek saaf confirmation step rakhiye jiska asar padta hai ya jise undo nahi kiya ja sakta.',
  'A person in the loop is a boundary the system enforces. It is more than a confirmation popup.':
    'Loop mein ek insaan hona ek aisi boundary hai jise system enforce karta hai. Yeh sirf ek confirmation popup se zyada hai.',
  'Build the flow draft, review, approve, execute.':
    'Yeh flow banaiye: draft, review, approve, execute.',
  'Log who approved, what they approved, and exactly which request was run.':
    'Log kijiye ki kisne approve kiya, unhone kya approve kiya, aur exactly kaun si request chalayi gayi.',
  'Change the request after it was approved, and check that running it is blocked.':
    'Approval ke baad request badal dijiye, aur check kijiye ki use chalna block ho jaata hai.',
  'An Approval Workflow Diagram, plus a design for the audit record.':
    'Ek Approval Workflow Diagram, aur saath mein audit record ka design.',
  'What exactly did the person approve?':
    'Insaan ne exactly kya approve kiya?',
  'An approval has to be tied to one specific action, not to a loose conversation.':
    'Approval ek khaas action se bandha hona chahiye, kisi dhundhli si conversation se nahi.',
  'Workflow patterns':
    'Workflow patterns',
  'Build four kinds of workflow: one step after another, routing, steps in parallel, and one where a second check improves the first answer.':
    'Chaar tarah ke workflow banaiye: ek step ke baad doosra, routing, ek saath chalte steps, aur ek jisme doosra check pehle jawaab ko behtar banata hai.',
  'A workflow is a path that is fixed in advance. The model is called at certain points along it.':
    'Workflow ek aisa raasta hai jo pehle se fixed hota hai. Model ko us raaste mein kuch jagahon par bulaya jaata hai.',
  'Build one simple workflow where steps run in order, and one that routes each request to the right path.':
    'Ek simple workflow banaiye jisme steps order mein chalte hain, aur ek aisa jo har request ko sahi raaste par bhejta hai.',
  'Measure the time it takes, the cost and how many tasks succeed.':
    'Lagne wala time, cost, aur kitne tasks succeed hue, yeh measure kijiye.',
  'Send a request down the wrong route, and watch the failure appear in the steps after it.':
    'Ek request ko galat route par bhej dijiye, aur dekhiye ki uske baad ke steps mein failure kaise dikhti hai.',
  'A Workflow Pattern Comparison.':
    'Ek Workflow Pattern Comparison.',
  'Which pattern adds real value, and which only adds complexity?':
    'Kaun sa pattern asli value jodta hai, aur kaun sirf complexity badhata hai?',
  'Use the simplest pattern that meets your acceptance criteria.':
    'Sabse simple pattern use kijiye jo aapke acceptance criteria poore karta ho.',
  'Prefer a fixed workflow':
    'Fixed workflow ko pehle chuniye',
  'Once you’ve worked through the units, one lesson stands out. A fixed workflow is simpler to test and easier to trust than an agent. That’s why it should be your first choice.':
    'Units karne ke baad ek seekh saaf dikhti hai. Fixed workflow ko test karna aasaan hai aur uspar bharosa karna agent se aasaan hai. Isliye woh aapki pehli pasand honi chahiye.',
  'A fixed workflow is often safer than an agent. If you know the sequence of steps, fix it in code and let the model handle only the part that needs judgement.':
    'Fixed workflow aksar agent se zyada safe hota hai. Agar aapko steps ka sequence pata hai, toh use code mein fix kar dijiye aur model ko sirf woh hissa dijiye jahan judgement chahiye.',
  'Tool checklist':
    'Tool checklist',
  'Before any tool goes live, run it through this checklist. Each line is here because it has caused a real incident somewhere.':
    'Koi bhi tool live jaane se pehle use is checklist se guzariye. Har line isliye hai kyunki kahin na kahin isse asli incident ho chuka hai.',
  'The name is clear and the description is accurate. The model reads both.':
    'Naam saaf hai aur description sahi hai. Model dono padhta hai.',
  'The inputs are tightly limited. Use a fixed list of choices instead of free text wherever you can.':
    'Inputs tight limit mein hain. Jahan ho sake, free text ki jagah choices ki ek fixed list rakhiye.',
  'Anything the tool changes is stated clearly.':
    'Tool jo bhi badalta hai, woh saaf likha hua hai.',
  'Permissions are enforced on the server, not by asking the model to behave.':
    'Permissions server par enforce hoti hain, model se behave karne ko kehkar nahi.',
  'You have thought about idempotency, which means what happens if the call runs twice.':
    'Aapne idempotency ke baare mein socha hai, matlab yeh ki call do baar chale toh kya hoga.',
  'Errors come back in a structured format.':
    'Errors structured format mein aate hain.',
  'Audit data is recorded.':
    'Audit data record hota hai.',
  'Actions that destroy or delete something need confirmation.':
    'Jo actions kuch destroy ya delete karti hain, unke liye confirmation chahiye.',
  'Give the model a tool only when its choice adds value. Every tool adds a way to attack the system, extra delay, extra cost and new ways to fail.':
    'Model ko tool tabhi dijiye jab uska choice value jodta ho. Har tool system par attack karne ka ek naya raasta, extra delay, extra cost aur fail hone ke naye tareeke jodta hai.',
  'The last idea in the checklist leads to a useful exercise. It asks you to look at your own list of tools, and see how many of them really need the model.':
    'Checklist ki aakhri baat se ek kaam ki exercise nikalti hai. Isme aap apne tools ki list dekhte hain, aur gin-te hain ki kitno ko sach mein model chahiye.',
  'List the tools you would give a support assistant. Then cross out every tool where a fixed rule would choose correctly more than 95% of the time.':
    'Un tools ki list banaiye jo aap ek support assistant ko denge. Phir har woh tool kaat dijiye jahan ek fixed rule 95% se zyada baar sahi chunega.',
  'Tools: … Crossed out: … Left: …':
    'Tools: … Kaate: … Bache: …',
  'What remains is the set of tools where the model’s judgement is worth the risk. It is usually much shorter than the first list.':
    'Jo bachta hai, wahi tools ka woh set hai jahan model ka judgement risk ke laayak hai. Yeh aksar pehli list se bahut chhota hota hai.',
  'Let’s pull it together. A tool lets a model act, so every tool needs a written contract that says what it may do. The checks belong in ordinary code, not in the model. And when you already know the steps, a fixed workflow beats an agent.':
    'Chaliye sab ek jagah jodte hain. Tool model ko act karne deta hai, isliye har tool ko ek likha hua contract chahiye jo bataye ki woh kya kar sakta hai. Checks ordinary code mein rehte hain, model mein nahi. Aur jab aapko steps pehle se pata hon, toh fixed workflow agent se behtar hai.',
  'Next, Chapter 26 takes the opposite step. It lets the model control the sequence of steps itself, which is what we call an agent.':
    'Aage Chapter 26 ulta kadam uthata hai. Woh steps ka sequence khud model ko control karne deta hai, jise hum agent kehte hain.',
  'Build a workflow that proposes changes but cannot make risky ones alone':
    'Aisa workflow banaiye jo changes propose kare lekin risky changes akele na kar sake',
  'Before you let a model act on its own, you write the contract for each action and decide which actions need a person. In this chapter you learned to write a tool contract a reviewer could sign, when a fixed workflow beats an agent, and which checks must happen before an important action runs. Here you build a workflow for the rule-keeper in which the model proposes what to do with each finding, but a person must approve the risky ones.':
    'Model ko khud kaam karne dene se pehle aap har action ka contract likhte hain aur tay karte hain ki kin actions ke liye insaan chahiye. Is chapter mein aapne seekha ki aisa tool contract kaise likhein jise reviewer sign kar sake, fixed workflow agent se kab behtar hai, aur kisi zaroori action se pehle kaun se checks hone chahiye. Yahan aap rule-keeper ke liye ek workflow banate hain jisme model har finding ke liye propose karta hai ki kya karna hai, lekin risky wali ko ek insaan ko approve karna padta hai.',
  'Your test harness from Chapter 21 and the agent loop from Chapter 9, extended in code. Write the measured numbers in the notes box below.':
    'Chapter 21 ka aapka test harness aur Chapter 9 ka agent loop, code mein extend kiye hue. Measure kiye hue numbers neeche notes box mein likhiye.',
  'Write the contract for the action “hide this detail”: its name, what it needs, what it returns, what it may change, and what it can never change. A reviewer should be able to sign it.':
    '“Hide this detail” action ka contract likhiye: uska naam, use kya chahiye, woh kya lautati hai, woh kya badal sakti hai, aur woh kya kabhi nahi badal sakti. Ek reviewer ise sign kar sake.',
  'Decide which actions are risky enough to need approval. For example, letting any ID number through, or deleting a stored copy, always needs approval.':
    'Tay kijiye ki kaun si actions itni risky hain ki approval chahiye. Jaise, koi bhi ID number guzarne dena, ya stored copy delete karna, hamesha approval maangta hai.',
  'Build a fixed workflow: check the sentence, list the findings, propose an action for each finding, wait for approval on the risky ones, then apply the actions.':
    'Ek fixed workflow banaiye: sentence check kijiye, findings ki list banaiye, har finding ke liye ek action propose kijiye, risky wali par approval ka intezaar kijiye, phir actions apply kijiye.',
  'Prepare twenty test messages and decide in advance what the right proposal is for each.':
    'Twenty test messages taiyaar kijiye aur pehle se tay kijiye ki har ek ka sahi proposal kya hai.',
  'Run them. Count how often the model proposes the correct action when it is not allowed to act on its own. Also count how many risky actions would have been applied without approval. That number must be zero.':
    'Inhe run kijiye. Gin-iye ki jab model ko akele act karne ki ijaazat nahi hai, tab woh kitni baar sahi action propose karta hai. Yeh bhi gin-iye ki kitni risky actions bina approval ke apply ho jaati. Woh number zero hona chahiye.',
  'Write the checks that must happen before an important action runs.':
    'Woh checks likhiye jo kisi zaroori action ke chalne se pehle hone chahiye.',
  'A signed-off contract for the hide action.':
    'Hide action ke liye ek sign-off hua contract.',
  'A list of the actions that need approval.':
    'Un actions ki list jinke liye approval chahiye.',
  'A working workflow in which risky actions wait for approval.':
    'Ek chalta hua workflow jisme risky actions approval ka intezaar karti hain.',
  'Two numbers from twenty messages: how often the proposal was right, and how many risky actions ran without approval (zero).':
    'Twenty messages se do numbers: proposal kitni baar sahi tha, aur kitni risky actions bina approval ke chali (zero).',

  /* ---- ch13a: Agents: loops, stopping conditions and control ---- */
  'Agents: loops, stopping conditions and control':
    'Agents: loops, stopping conditions aur control',
  'An agent chooses actions, checks the results and keeps going toward a goal. The hard part is control, not intelligence. You’ll build an agent with firm limits, add stopping conditions, and measure it against the fixed workflow from Chapter 25.':
    'Agent khud actions chunta hai, results check karta hai, aur goal ki taraf badhta rehta hai. Mushkil hissa control hai, intelligence nahi. Aap pakke limits wala ek agent banayenge, stopping conditions jodenge, aur use Chapter 25 ke fixed workflow ke saamne measure karenge.',
  'Build the smallest loop you can: propose → call one approved tool → look at the result → continue or stop.':
    'Sabse chhota loop banaiye: propose karo → ek approved tool call karo → result dekho → aage badho ya ruk jao.',
  'Add a list of allowed tools, a maximum number of steps, state that you can see, stopping conditions, and a point where a person must approve.':
    'Allowed tools ki ek list jodiye, steps ki ek maximum limit, aisa state jo aap dekh sakein, stopping conditions, aur ek jagah jahan kisi insaan ko approve karna padta hai.',
  'Make the agent loop forever. Feed it confusing tool output. Ask it to use a tool it is not allowed to use.':
    'Agent ko loop mein phasa dijiye jo kabhi khatam na ho. Use confusing tool output khilaiye. Use aisa tool use karne ko kahiye jiski use ijaazat nahi hai.',
  'A comparison of the agent against the deterministic workflow across twenty tasks.':
    'Agent aur deterministic workflow ka twenty tasks par comparison.',
  'Prove that the extra freedom adds measurable value. If it does not, ship the workflow.':
    'Saabit kijiye ki extra freedom se measurable value judti hai. Agar nahi judti, toh workflow ship kijiye.',
  'Tool contracts and fixed workflows':
    'Tool contracts aur fixed workflows',
  'Chapter 25 built the workflow that the agent is compared against.':
    'Chapter 25 ne woh workflow banaya jiske saamne agent ko compare kiya jaata hai.',
  'Every step costs tokens':
    'Har step mein tokens lagte hain',
  'From Chapter 1. A loop multiplies that cost by the number of steps.':
    'Chapter 1 se. Loop us cost ko steps ki ginti se multiply kar deta hai.',
  'Agent':
    'Agent',
  'A system in which the model can choose actions, look at the results, and keep going toward a goal.':
    'Ek aisa system jisme model khud actions chun sakta hai, results dekh sakta hai, aur goal ki taraf badhta rehta hai.',
  'Agent loop':
    'Agent loop',
  'The cycle of goal, decision, tool call, observation and updated context, followed by a choice to stop or continue. The stopping condition is the part people leave out.':
    'Goal, decision, tool call, observation aur updated context ka cycle, jiske baad rukne ya aage badhne ka choice hota hai. Stopping condition woh hissa hai jo log chhod dete hain.',
  'Step budget':
    'Step budget',
  'A hard limit on how many actions an agent may take before it has to give up. It is the main defence against a loop that never ends.':
    'Ek pakki limit ki agent haar maanne se pehle kitni actions le sakta hai. Jo loop kabhi khatam nahi hota, uske khilaaf yeh sabse main bachav hai.',
  'Handoff':
    'Handoff',
  'Passing a task from one agent to another, more specialised one. It is cheap to draw, and it is easy to lose context or authority on the way.':
    'Ek task ko ek agent se doosre, zyada specialised agent ko dena. Isse draw karna sasta hai, lekin raaste mein context ya authority kho dena aasaan hai.',
  'Draw the agent loop with its stopping conditions and error paths.':
    'Agent loop ko uski stopping conditions aur error paths ke saath draw kar paana.',
  'Explain why most agent failures are control problems, not intelligence problems.':
    'Samjha paana ki zyadatar agent failures control ki problems kyun hain, intelligence ki nahi.',
  'Say when to add a second agent, and when not to.':
    'Bata paana ki doosra agent kab jodna hai, aur kab nahi.',
  'Have the workflow from Chapter 25 and its twenty test tasks ready. You’ll run the same tasks through an agent and compare.':
    'Chapter 25 ka workflow aur uske twenty test tasks taiyaar rakhiye. Aap wahi tasks ek agent se chalakar compare karenge.',
  'In the last chapter you built a fixed workflow. You decided the steps in advance, and the model only did the parts that needed judgement. Now we hand the model more freedom, and see what that costs you.':
    'Pichhle chapter mein aapne ek fixed workflow banaya. Steps aapne pehle se tay kiye, aur model ne sirf woh hisse kiye jahan judgement chahiye tha. Ab hum model ko zyada freedom dete hain, aur dekhte hain ki uski keemat kya padti hai.',
  'An <strong>agent</strong> is a system that repeats a loop on its own: decide, act, check the result, decide again. That sounds powerful, but it brings a new problem. Every loop also needs a way to stop. Most agent problems come from the stopping, not from how capable the model is.':
    '<strong>Agent</strong> ek aisa system hai jo apne aap ek loop dohrata hai: decide karo, act karo, result check karo, phir se decide karo. Yeh bahut powerful lagta hai, lekin ek nayi problem laata hai. Har loop ko rukne ka ek tareeka bhi chahiye. Agent ki zyadatar problems rukne se aati hain, is baat se nahi ki model kitna capable hai.',
  'Think of sending a junior colleague to find one number. A good outcome is that they come back in ten minutes with the number, or say they couldn’t find it. A bad outcome is that three hours later they are still searching, and nobody told them when to give up.':
    'Ek junior colleague ko ek number dhoondhne bhejne ki baat sochiye. Achha result yeh hai ki woh das minute mein number lekar aa jaye, ya bole ki mujhe mila nahi. Bura result yeh hai ki teen ghante baad bhi woh dhoondh raha hai, aur kisi ne use bataya hi nahi ki kab chhod dena hai.',
  'There are seven units here, and they build on each other. You start by drawing the loop, then you add planning, state, limits and human checkpoints. The last two ask whether you need several agents, and whether you need an agent at all.':
    'Yahan saat units hain, aur woh ek doosre par bante hain. Aap loop draw karne se shuru karte hain, phir planning, state, limits aur human checkpoints jodte hain. Aakhir ke do units poochte hain ki kya aapko kai agents chahiye, aur kya aapko agent chahiye bhi.',
  'The agent loop':
    'Agent loop',
  'Understand the whole cycle: goal, then the model’s decision, then a tool call, then what it sees back, then updated context, then stop or continue.':
    'Poora cycle samajhiye: goal, phir model ka decision, phir tool call, phir jo wapas dikhta hai, phir updated context, phir rukna ya aage badhna.',
  'An agent is a loop, and the loop itself is the design of the system.':
    'Agent ek loop hai, aur woh loop hi system ka design hai.',
  'Before you write any code, draw the loop and label every state and every move from one state to the next.':
    'Koi bhi code likhne se pehle loop draw kijiye, aur har state aur ek state se doosri state tak ki har move ko label kijiye.',
  'Build a toy loop with three steps and a clear record of its state.':
    'Teen steps ka ek toy loop banaiye, jisme state ka saaf record ho.',
  'Force a tool to fail, and look at whether the loop recovers or spirals out of control.':
    'Ek tool ko fail karwaiye, aur dekhiye ki loop sambhal jaata hai ya control se bahar ghoomne lagta hai.',
  'An Agent State Diagram.':
    'Ek Agent State Diagram.',
  'Where can the loop stop safely?':
    'Loop safely kahan ruk sakta hai?',
  'If you cannot draw the loop, you cannot defend the design.':
    'Agar aap loop draw nahi kar sakte, toh aap design ka bachav nahi kar sakte.',
  'Planning and tool choice':
    'Planning aur tool choice',
  'Understand how a model makes its own plan, and when that is actually useful.':
    'Samjhiye ki model apna plan kaise banata hai, aur woh asal mein kab kaam ka hota hai.',
  'An agent gives up some predictability and gets flexibility in return.':
    'Agent kuch predictability chhodta hai aur badle mein flexibility paata hai.',
  'Give the agent three tools and 20 tasks, and record which tool it picks each time.':
    'Agent ko teen tools aur 20 tasks dijiye, aur har baar record kijiye ki woh kaun sa tool chunta hai.',
  'Compare one fixed workflow against the agent on the same tasks.':
    'Ek fixed workflow ko agent ke saamne rakhkar, wahi tasks par compare kijiye.',
  'Include tasks that need no tool at all, and tasks where it is unclear which tool to use.':
    'Aise tasks shaamil kijiye jinmein koi tool chahiye hi nahi, aur aise jinmein saaf nahi ki kaun sa tool use karna hai.',
  'An Agent vs Workflow Comparison.':
    'Ek Agent vs Workflow Comparison.',
  'Did the extra freedom improve your acceptance measure enough to be worth it?':
    'Kya extra freedom ne aapka acceptance measure itna behtar kiya ki woh sahi thehre?',
  'A workflow that passes the test may be better than an agent that only looks impressive.':
    'Jo workflow test pass kar leta hai, woh us agent se behtar ho sakta hai jo sirf impressive dikhta hai.',
  'State and context management':
    'State aur context management',
  'Keep the state of the task in plain view, and keep control of how much context piles up.':
    'Task ka state saaf nazar mein rakhiye, aur context kitna jama ho raha hai, us par control rakhiye.',
  'A loop that runs for a long time can collect old, irrelevant or contradictory context.':
    'Der tak chalne wala loop purana, irrelevant ya ek doosre se takrata context jama kar sakta hai.',
  'Define a state object that holds the goal, the steps taken, what was observed, the approvals and the status.':
    'Ek state object define kijiye jisme goal, liye gaye steps, jo observe hua, approvals aur status ho.',
  'Save the state between rounds of the loop, and summarise only when you really have to.':
    'Loop ke har round ke beech state save kijiye, aur summary tabhi banaiye jab sach mein zaroori ho.',
  'Add repeated observations and irrelevant tool output, and measure how fast the context grows.':
    'Baar-baar wale observations aur irrelevant tool output jodiye, aur measure kijiye ki context kitni tezi se badhta hai.',
  'An Agent State Schema, plus a Context Policy.':
    'Ek Agent State Schema, aur saath mein ek Context Policy.',
  'Which fields can you trust as the final word?':
    'Kaun se fields par aap aakhri baat ke taur par bharosa kar sakte hain?',
  'When the state is explicit, you can explain an incident afterwards.':
    'Jab state saaf hota hai, toh aap baad mein kisi incident ko explain kar sakte hain.',
  'Stopping conditions':
    'Stopping conditions',
  'Put limits on the number of steps, the time, the cost and the kinds of action that are unsafe.':
    'Steps ki ginti, time, cost aur unsafe actions ke kinds par limits lagaiye.',
  'An agent with no stopping conditions is a production dependency with no upper limit.':
    'Jis agent mein stopping conditions nahi hain, woh ek aisi production dependency hai jiski koi upar ki limit nahi.',
  'Set a maximum number of steps, a timeout, a cost ceiling, and a “cannot resolve” state.':
    'Steps ki maximum limit, ek timeout, ek cost ceiling, aur ek “cannot resolve” state set kijiye.',
  'Log the reason each run stopped.':
    'Har run kyun ruka, uski wajah log kijiye.',
  'Create a loop that never finds an answer, and prove that it still ends.':
    'Ek aisa loop banaiye jise kabhi jawaab nahi milta, aur saabit kijiye ki woh phir bhi khatam hota hai.',
  'An Agent Control Policy.':
    'Ek Agent Control Policy.',
  'Can you prove that the system ends, even when things fail?':
    'Kya aap saabit kar sakte hain ki system khatam hota hai, chahe cheezein fail ho jayein?',
  'This is a requirement for reliability and cost, not just an engineering detail.':
    'Yeh reliability aur cost ki requirement hai, sirf ek engineering detail nahi.',
  'Human checkpoints':
    'Human checkpoints',
  'Bring a person in when something is unclear, when the impact is high, and when a step cannot be undone.':
    'Jab kuch saaf na ho, jab impact zyada ho, aur jab koi step undo na ho sake, tab ek insaan ko beech mein laaiye.',
  'The more an action can be reversed, and the more confident you are, the more freedom the agent can have.':
    'Jitni zyada action ko palta ja sake, aur jitna zyada aapko confidence ho, agent ko utni zyada freedom di ja sakti hai.',
  'Mark each tool or action as read-only, a write that can be reversed, or a write that cannot be reversed.':
    'Har tool ya action ko read-only, palti ja sakne wali write, ya na palti ja sakne wali write ke taur par mark kijiye.',
  'Require approval for the last group.':
    'Aakhri group ke liye approval zaroori kijiye.',
  'Try to get around the approval through the prompt or through a tool input.':
    'Prompt ya tool input ke zariye approval ko bypass karne ki koshish kijiye.',
  'An Agent Approval Matrix.':
    'Ek Agent Approval Matrix.',
  'Which actions are never allowed to run on their own?':
    'Kaun si actions ko kabhi apne aap chalne ki ijaazat nahi hai?',
  'The business owner should be the one who approves where the agent’s freedom ends.':
    'Agent ki freedom kahan khatam hoti hai, yeh business owner ko approve karna chahiye.',
  'Multi-agent patterns':
    'Multi-agent patterns',
  'Understand handoffs, an orchestrator with workers, and several agents working together, without assuming they are better.':
    'Handoffs, ek orchestrator aur workers, aur kai agents ka saath kaam karna samajhiye, yeh maane bina ki woh behtar hain.',
  'Every extra agent adds more state, more delay, more cost and more places to fail.':
    'Har extra agent zyada state, zyada delay, zyada cost aur fail hone ki zyada jagahein jodta hai.',
  'Solve a task with one agent first. Then build a version where the work is split between two roles.':
    'Pehle ek task ek agent se solve kijiye. Phir ek aisa version banaiye jisme kaam do roles mein bata ho.',
  'Compare how many tasks succeed and how complicated each version is to run.':
    'Compare kijiye ki kitne tasks succeed hue aur har version ko chalana kitna complicated hai.',
  'Make the two agents give conflicting answers, and leave it unclear who owns the result.':
    'Dono agents se aise jawaab dilwaiye jo ek doosre se takraein, aur yeh saaf mat rakhiye ki result kiska hai.',
  'A Multi-Agent Decision Record.':
    'Ek Multi-Agent Decision Record.',
  'What measurable problem did the second agent solve?':
    'Doosre agent ne kaun si measurable problem solve ki?',
  'Added complexity must buy you a capability you can measure.':
    'Jodi hui complexity se aapko aisi capability milni chahiye jise aap measure kar sakein.',
  'Agent exit gate':
    'Agent exit gate',
  'Treat “use an agent” as an idea that needs evidence, not as a decision you have already made.':
    '“Agent use karo” ko ek aisa idea maniye jise evidence chahiye, aisa decision nahi jo aap pehle hi le chuke hain.',
  'The right design is the simplest one that meets your requirements.':
    'Sahi design wahi hai jo sabse simple ho aur aapki requirements poori kare.',
  'Create a 20-task benchmark that compares a single direct call, a workflow and an agent.':
    'Ek 20-task benchmark banaiye jo ek seedhi call, ek workflow aur ek agent ko compare kare.',
  'Score each one on quality, tool accuracy, delay, cost and safety.':
    'Har ek ko quality, tool accuracy, delay, cost aur safety par score kijiye.',
  'Take away one capability at a time, and see whether the agent still adds value.':
    'Ek-ek capability hatate jaiye, aur dekhiye ki agent phir bhi value jodta hai ya nahi.',
  'An Agent Architecture Decision Record.':
    'Ek Agent Architecture Decision Record.',
  'Would you still choose an agent if nobody called it “agentic AI”?':
    'Agar koi use “agentic AI” na kehta, toh kya aap phir bhi agent chunte?',
  'That question protects you from choosing a design because it is fashionable.':
    'Yeh sawaal aapko isse bachata hai ki aap koi design sirf isliye chun lein kyunki woh fashion mein hai.',
  'Agent failures are control failures':
    'Agent failures asal mein control failures hain',
  'After the units, a pattern shows up. When an agent goes wrong, it’s rarely because the model suddenly got worse. It’s because nothing stopped it.':
    'Units ke baad ek pattern dikhta hai. Jab agent galat jaata hai, toh aksar isliye nahi ki model achanak kharab ho gaya. Isliye ki use kisi ne roka nahi.',
  'Most agent failures are control problems. The model did not get worse; it was given unlimited chances to be wrong.':
    'Zyadatar agent failures control ki problems hain. Model kharab nahi hua; use galat hone ke unlimited mauke mile.',
  'Agent patterns':
    'Agent patterns',
  'Agents and workflows come in a few common shapes. Before you read the table, notice that each row pairs a pattern with the situation where it fits and the main way it goes wrong. Use it to choose, not to collect patterns.':
    'Agents aur workflows kuch common shapes mein aate hain. Table padhne se pehle dekhiye ki har row ek pattern ko jodti hai us situation se jahan woh fit hota hai, aur us main tareeke se jisme woh galat jaata hai. Ise chunne ke liye use kijiye, patterns jama karne ke liye nahi.',
  'Pattern':
    'Pattern',
  'Use it when':
    'Kab use karein',
  'Main risk':
    'Main risk',
  'Sequential workflow':
    'Sequential workflow',
  'The steps are known':
    'Steps pehle se pata hain',
  'Rigid when the problem shifts':
    'Problem badalne par rigid ho jaata hai',
  'Routing':
    'Routing',
  'One of several specialised paths fits':
    'Kai specialised raaston mein se ek fit baithta hai',
  'The router picks wrong':
    'Router galat raasta chun leta hai',
  'Parallel':
    'Parallel',
  'Subtasks are genuinely independent':
    'Subtasks sach mein ek doosre se independent hain',
  'Coordination and aggregation':
    'Coordination aur aggregation',
  'A specialist should take over':
    'Koi specialist ko kaam sambhalna chahiye',
  'Lost context, unclear authority':
    'Context kho jaata hai, authority saaf nahi',
  'Orchestrator-worker':
    'Orchestrator-worker',
  'The plan decomposes into subtasks':
    'Plan subtasks mein toot jaata hai',
  'Cost, loops, state complexity':
    'Cost, loops, state ki complexity',
  'Start with one model and a short list of tools. Add a second agent only when you have measured something the simpler version cannot do. Extra complexity is a cost, not an achievement.':
    'Ek model aur tools ki chhoti si list se shuru kijiye. Doosra agent tabhi jodiye jab aapne aisi cheez measure ki ho jo simple version nahi kar sakta. Extra complexity ek cost hai, koi achievement nahi.',
  'Now it’s time to put your agent up against the workflow you already built.':
    'Ab waqt hai ki aap apne agent ko us workflow ke saamne khada karein jo aap pehle bana chuke hain.',
  'Run the twenty tasks from your Chapter 25 workflow through the agent. Count how many it got right, how many tool calls it made, and what it cost.':
    'Apne Chapter 25 workflow ke twenty tasks agent se chalaiye. Gin-iye ki usne kitne sahi kiye, kitni tool calls ki, aur cost kitna aaya.',
  'Correct: … Tool calls: … Cost: … Compared with the workflow: …':
    'Sahi: … Tool calls: … Cost: … Workflow ke saath compare karke: …',
  'If the agent is not clearly better on a measure you care about, the workflow wins. That is a valid and respectable result to bring to a review.':
    'Agar agent aise measure par saaf taur par behtar nahi hai jiski aapko parwah hai, toh workflow jeet jaata hai. Review mein laane ke liye yeh ek jaayaz aur respectable result hai.',
  'Here’s what to take away. An agent is a loop, and a loop needs limits: a step budget, a timeout, a cost ceiling and a place where a person steps in. Most failures come from missing control. And a second agent, or even a first one, has to earn its place with numbers.':
    'Yeh saath le jaaiye. Agent ek loop hai, aur loop ko limits chahiye: ek step budget, ek timeout, ek cost ceiling, aur ek jagah jahan insaan beech mein aata hai. Zyadatar failures control ki kami se aati hain. Aur doosra agent, ya pehla bhi, numbers ke saath apni jagah kamaata hai.',
  'Next, Chapter 27 looks at the standards for connecting tools and agents to the things they use.':
    'Aage Chapter 27 un standards ko dekhta hai jinse tools aur agents ko unki cheezon se jodte hain.',
  'Test a fixed workflow against an agent':
    'Ek fixed workflow ko agent ke saamne test kijiye',
  'You can build the rule-keeper as a fixed set of steps, or as an agent that chooses its own steps. In this chapter you learned to draw the agent loop with its stopping conditions, that most agent failures are control problems and not a lack of intelligence, and when to add a second agent and when not to. Here you build the agent and test whether it beats the fixed workflow from Chapter 25.':
    'Aap rule-keeper ko steps ke ek fixed set ki tarah bana sakte hain, ya ek agent ki tarah jo apne steps khud chunta hai. Is chapter mein aapne seekha ki agent loop ko uski stopping conditions ke saath kaise draw karein, ki zyadatar agent failures control ki problems hain aur intelligence ki kami nahi, aur doosra agent kab jodna hai aur kab nahi. Yahan aap agent banate hain aur test karte hain ki kya woh Chapter 25 ke fixed workflow se behtar hai.',
  'Your test harness from Chapter 21, extended in code. Write the recommendation in the notes box below.':
    'Chapter 21 ka aapka test harness, code mein extend kiya hua. Recommendation neeche notes box mein likhiye.',
  'Give the agent exactly two tools: the pattern checker and the model-based finder. Write an explicit list of what it may use, and nothing else.':
    'Agent ko exactly do tools dijiye: pattern checker aur model-based finder. Ek saaf list likhiye ki woh kya use kar sakta hai, aur kuch nahi.',
  'Set its limits: the most steps it may take, a time limit, and an exit for “cannot decide” that sends the sentence to a person.':
    'Uski limits set kijiye: zyada se zyada kitne steps le sakta hai, ek time limit, aur “cannot decide” ke liye ek exit jo sentence ko kisi insaan ke paas bhej de.',
  'Run the same twenty sentences through the agent and through the fixed workflow from Chapter 25.':
    'Wahi twenty sentences agent se chalaiye aur Chapter 25 ke fixed workflow se bhi.',
  'For each run, record whether it chose the right tool, how many calls it made, how long it took and what it cost.':
    'Har run ke liye record kijiye ki usne sahi tool chuna ya nahi, kitni calls ki, kitna time laga aur cost kitna aaya.',
  'Write one paragraph recommending one of the two, with the numbers. Name the number that decided it.':
    'Ek paragraph likhiye jo numbers ke saath dono mein se ek ko recommend kare. Woh number bataiye jisne decide kiya.',
  'An agent with two tools and written limits.':
    'Do tools aur likhi hui limits wala ek agent.',
  'The same twenty sentences run through both systems.':
    'Wahi twenty sentences dono systems se chalaye hue.',
  'Four numbers for each system: tool choice, calls, time and cost.':
    'Har system ke liye chaar numbers: tool choice, calls, time aur cost.',
  'A recommendation that names the number that decided it.':
    'Ek recommendation jo us number ka naam leti hai jisne decide kiya.',

  /* ---- ch14p: MCP and interoperability: standard connections to tools ---- */
  'MCP and interoperability: standard connections to tools':
    'MCP aur interoperability: tools se jodne ke standard connections',
  'MCP is a standard way for AI applications to connect to tools and data. You’ll map how it works, see what a standard does not make safe, and sort tools by what they are allowed to change.':
    'MCP AI applications ko tools aur data se jodne ka ek standard tareeka hai. Aap dekhenge ki woh kaise kaam karta hai, ki standard kis cheez ko safe nahi banata, aur tools ko is hisaab se sort karenge ki woh kya badal sakte hain.',
  'Use a real implementation or a local mock to discover and call one tool or resource, and read the actual exchange of messages.':
    'Ek asli implementation ya local mock use kijiye taaki ek tool ya resource ko discover karke call kar sakein, aur messages ka asli exchange padhiye.',
  'Expose two tools and one resource. Test how they are discovered and called, how errors show up, and how consent and authorisation work.':
    'Do tools aur ek resource expose kijiye. Test kijiye ki woh kaise discover aur call hote hain, errors kaise dikhte hain, aur consent aur authorisation kaise kaam karte hain.',
  'Try access you are not allowed, badly formed arguments, resource content that has been poisoned, and permissions wider than the task needs.':
    'Aisa access try kijiye jo aapko allowed nahi hai, galat bane hue arguments, poisoned resource content, aur task se zyada wide permissions.',
  'A trust-boundary diagram and an authorisation matrix.':
    'Ek trust-boundary diagram aur ek authorisation matrix.',
  'Explain what interoperability standardises, and what it leaves exactly as dangerous as it was.':
    'Samjhaiye ki interoperability kya standardise karti hai, aur kya ko utna hi khatarnaak chhod deti hai jitna woh pehle tha.',
  'A tool has a typed contract':
    'Tool ka ek typed contract hota hai',
  'From Chapter 25. MCP standardises how that contract is published.':
    'Chapter 25 se. MCP standardise karta hai ki woh contract kaise publish hota hai.',
  'Permissions are enforced on the server':
    'Permissions server par enforce hoti hain',
  'Also from Chapter 25, and still true when the call crosses a protocol.':
    'Yeh bhi Chapter 25 se, aur tab bhi sach hai jab call kisi protocol ke paar jaati hai.',
  'MCP':
    'MCP',
  'A protocol that standardises how a host, a client and a server offer and call tools, resources and prompts. It is a protocol, not a framework for building agents.':
    'Ek protocol jo standardise karta hai ki host, client aur server tools, resources aur prompts kaise offer karte aur call karte hain. Yeh ek protocol hai, agents banane ka framework nahi.',
  'Trust boundary':
    'Trust boundary',
  'The line across which input stops being yours and becomes something you must check.':
    'Woh line jiske paar input aapka nahi rehta aur woh cheez ban jaata hai jise aapko check karna padta hai.',
  'Least privilege':
    'Least privilege',
  'Giving a tool exactly the permissions the task needs and no more. That way, a tool that is never needed can never be misused.':
    'Tool ko exactly utni permissions dena jitni task ko chahiye, aur ek bhi zyada nahi. Isse jis tool ki kabhi zaroorat hi nahi, uska galat use kabhi ho hi nahi sakta.',
  'Capability negotiation':
    'Capability negotiation',
  'The way two sides of a protocol agree on what each of them can do, before any work begins.':
    'Protocol ke do sides ka yeh tay karna ki dono kya kar sakte hain, koi bhi kaam shuru hone se pehle.',
  'Draw the host, client, server and resource flow, and mark where consent and authorisation happen.':
    'Host, client, server aur resource ka flow draw kar paana, aur mark kar paana ki consent aur authorisation kahan hote hain.',
  'Explain why a standard interface to an unsafe tool is still unsafe.':
    'Samjha paana ki unsafe tool ka standard interface bhi unsafe kyun rehta hai.',
  'Classify tools by what they are allowed to change.':
    'Tools ko is hisaab se classify kar paana ki woh kya badal sakte hain.',
  'You don’t need any new setup to follow the ideas. The hands-on units show a small working example.':
    'Ideas samajhne ke liye aapko koi naya setup nahi chahiye. Hands-on units ek chhota sa chalta hua example dikhate hain.',
  'In the last two chapters you gave a model tools, and then let an agent choose among them. Every one of those tools was connected by hand. In this chapter we look at a standard way to make those connections, and at what the standard does and does not protect you from.':
    'Pichhle do chapters mein aapne model ko tools diye, aur phir ek agent ko unmein se chunne diya. Un sabhi tools ko haath se connect kiya gaya tha. Is chapter mein hum in connections ko banane ka ek standard tareeka dekhte hain, aur yeh bhi ki standard aapko kis cheez se bachata hai aur kis se nahi.',
  'The standard is called <strong>MCP</strong>, short for Model Context Protocol. It is a common way to connect AI applications to tools and data sources. You will probably never build one yourself, but you do need to know what it covers and what it leaves out.':
    'Is standard ka naam <strong>MCP</strong> hai, yaani Model Context Protocol. Yeh AI applications ko tools aur data sources se jodne ka ek common tareeka hai. Aap shayad kabhi khud ek nahi banayenge, lekin aapko pata hona chahiye ki woh kya cover karta hai aur kya chhod deta hai.',
  'Think of a plug socket. It’s a standard, so any appliance fits the wall. But the standard doesn’t promise that the appliance is safe, and it doesn’t decide who may switch it on. MCP is the same kind of thing.':
    'Ek plug socket ko sochiye. Woh ek standard hai, isliye koi bhi appliance deewar mein lag jaata hai. Lekin standard yeh promise nahi karta ki appliance safe hai, aur woh yeh bhi tay nahi karta ki use kaun on kar sakta hai. MCP bhi isi tarah ki cheez hai.',
  'The specification defines a host, a client and a server, and gives them standard building blocks: resources, prompts and tools. It also talks about security and user consent in plain terms, which is worth reading. Agent-to-agent protocols are being developed separately. They are for agents that exchange tasks, not for a model that calls a tool.':
    'Specification ek host, ek client aur ek server define karti hai, aur unhe standard building blocks deti hai: resources, prompts aur tools. Woh security aur user consent ke baare mein bhi saaf shabdon mein baat karti hai, jo padhne layak hai. Agent-to-agent protocols alag se develop ho rahe hain. Woh un agents ke liye hain jo tasks exchange karte hain, us model ke liye nahi jo ek tool call karta hai.',
  'There are five units. The first draws the whole picture. The next three build a tiny example, then add consent and authorisation, then test it against attacks. The last one looks at how agents talk to other agents.':
    'Yahan paanch units hain. Pehla poori tasveer draw karta hai. Agle teen ek chhota example banate hain, phir consent aur authorisation jodte hain, phir use attacks ke khilaaf test karte hain. Aakhri dekhta hai ki agents doosre agents se kaise baat karte hain.',
  'MCP mental model':
    'MCP mental model',
  'Explain the host, the client, the server, tools, resources, prompts and capability negotiation.':
    'Host, client, server, tools, resources, prompts aur capability negotiation ko samjhaiye.',
  'A protocol standardises how two sides talk to each other. It does not remove the need for authorisation or for a safe design.':
    'Protocol standardise karta hai ki do sides ek doosre se kaise baat karte hain. Woh authorisation ya safe design ki zaroorat ko khatam nahi karta.',
  'Draw the flow from the host to the client to the server, and then to the tool or resource.':
    'Host se client, phir server, phir tool ya resource tak ka flow draw kijiye.',
  'Look closely at one real or local exchange of messages.':
    'Messages ke ek asli ya local exchange ko dhyaan se dekhiye.',
  'Ask what happens when a server says it offers a capability that the user is not authorised to use.':
    'Poochiye ki kya hoga jab ek server aisi capability offer karne ka daava kare jise use karne ki user ko authorisation nahi hai.',
  'An MCP Trust-Boundary Diagram.':
    'Ek MCP Trust-Boundary Diagram.',
  'Where does the user’s identity live, and where is authorisation enforced?':
    'User ki identity kahan rehti hai, aur authorisation kahan enforce hoti hai?',
  'Once you know the protocol, you can challenge anyone who says “MCP makes it secure”.':
    'Protocol jaan lene ke baad, jo bhi bole “MCP se sab secure ho jaata hai”, aap use challenge kar sakte hain.',
  'Expose a tiny capability':
    'Ek chhoti si capability expose kijiye',
  'Build a tiny local provider that offers one safe tool or resource.':
    'Ek chhota local provider banaiye jo ek safe tool ya resource offer kare.',
  'The best way to understand a protocol is to look inside a small working example of it.':
    'Protocol ko samajhne ka sabse achha tareeka hai uska ek chhota chalta hua example andar se dekhna.',
  'Expose a read-only function, such as looking up a record on your own machine.':
    'Ek read-only function expose kijiye, jaise apni hi machine par kisi record ko look up karna.',
  'Call it from a compatible client, or from a local mock.':
    'Use ek compatible client se, ya ek local mock se call kijiye.',
  'Send badly formed arguments, and make the server return errors.':
    'Galat bane hue arguments bhejiye, aur server se errors lautwaiye.',
  'An MCP Mini-Demo repository.':
    'Ek MCP Mini-Demo repository.',
  'Can you trace the whole path: discovery, the call, and the response?':
    'Kya aap poora raasta trace kar sakte hain: discovery, call, aur response?',
  'Keep the demo read-only, so your attention stays on how the protocol works.':
    'Demo ko read-only rakhiye, taaki aapka dhyaan protocol kaise kaam karta hai us par rahe.',
  'Consent and authorization':
    'Consent aur authorization',
  'Keep two things apart: finding out what a tool can do, and being allowed to use it.':
    'Do cheezon ko alag rakhiye: yeh pata lagana ki tool kya kar sakta hai, aur use use karne ki ijaazat hona.',
  'A tool that can be discovered is not automatically a tool you are authorised to use.':
    'Jo tool discover ho sakta hai, woh apne aap aisa tool nahi ban jaata jise use karne ki aapko authorisation ho.',
  'Create an authorisation matrix for read, write and privileged tools.':
    'Read, write aur privileged tools ke liye ek authorisation matrix banaiye.',
  'Add a policy check before any tool is called.':
    'Kisi bhi tool ko call karne se pehle ek policy check jodiye.',
  'Try a call you are not authorised to make, and record that it was refused.':
    'Aisi call try kijiye jiski aapko authorisation nahi hai, aur record kijiye ki use mana kar diya gaya.',
  'An Authorization Matrix, plus test evidence.':
    'Ek Authorization Matrix, saath mein test evidence.',
  'Who makes the final decision on authorisation?':
    'Authorisation ka aakhri decision kaun leta hai?',
  'Authorisation on the server must never depend on the model following instructions.':
    'Server par authorisation kabhi is baat par depend nahi karni chahiye ki model instructions follow karta hai.',
  'MCP security and prompt injection':
    'MCP security aur prompt injection',
  'Treat resources and tool outputs as content you cannot trust.':
    'Resources aur tool outputs ko aisa content maniye jis par bharosa nahi kiya ja sakta.',
  'When more things can connect, you also get more outside trust boundaries.':
    'Jab zyada cheezein connect ho sakti hain, toh bahar ki trust boundaries bhi zyada ho jaati hain.',
  'Hide a malicious instruction inside a resource, and test how the client’s workflow handles it.':
    'Ek resource ke andar ek malicious instruction chhupaiye, aur test kijiye ki client ka workflow use kaise sambhalta hai.',
  'Keep data apart from instructions that control the system, and enforce the tool policies.':
    'Data ko un instructions se alag rakhiye jo system ko control karte hain, aur tool policies enforce kijiye.',
  'Try an indirect injection, where the bad instruction arrives inside a resource that was retrieved.':
    'Indirect injection try kijiye, jisme buri instruction ek retrieve kiye hue resource ke andar aati hai.',
  'An MCP Security Test Sheet.':
    'Ek MCP Security Test Sheet.',
  'Can content you don’t trust cause an action that needs special privilege?':
    'Kya jis content par aapko bharosa nahi, woh aisi action karwa sakta hai jisme special privilege chahiye?',
  'This connects directly to the security chapter.':
    'Yeh seedha security chapter se judta hai.',
  'Agent-to-agent interoperability':
    'Agent-to-agent interoperability',
  'Understand the ideas behind A2A-style protocols: identity, delegation, exchanging tasks, trust and observability.':
    'A2A-style protocols ke peeche ke ideas samajhiye: identity, delegation, tasks ka exchange, trust aur observability.',
  'Protocols between agents solve the problem of connecting them. They do not remove the basic risks of autonomy.':
    'Agents ke beech ke protocols unhe jodne ki problem solve karte hain. Woh autonomy ke buniyadi risks ko khatam nahi karte.',
  'Draw an exchange between two agents, with the boundaries of identity and delegation marked.':
    'Do agents ke beech ka ek exchange draw kijiye, jisme identity aur delegation ki boundaries mark hon.',
  'Define which data and which authority may cross the boundary.':
    'Tay kijiye ki kaun sa data aur kaun si authority is boundary ko paar kar sakti hai.',
  'Create a handoff that is malicious or confused, and name the control that should stop it.':
    'Ek malicious ya confused handoff banaiye, aur us control ka naam bataiye jo use rokega.',
  'An Agent Interoperability Trust Model.':
    'Ek Agent Interoperability Trust Model.',
  'What does the receiving agent actually trust?':
    'Receiving agent asal mein kis par bharosa karta hai?',
  'Keep your attention on design and governance, not on protocol trivia.':
    'Apna dhyaan design aur governance par rakhiye, protocol ki chhoti-chhoti baaton par nahi.',
  'A standard does not make a tool safe':
    'Standard se tool safe nahi ban jaata',
  'The units lead to one main lesson, and it’s easy to forget when a standard looks tidy and official.':
    'Units se ek main seekh nikalti hai, aur jab koi standard saaf-suthra aur official lagta hai, tab use bhool jaana aasaan hai.',
  'A standard tool interface does not make an unsafe tool safe. The protocol carries the call; it does not decide whether the call should be allowed.':
    'Standard tool interface se unsafe tool safe nahi ban jaata. Protocol call ko le jaata hai; woh yeh tay nahi karta ki call allow honi chahiye ya nahi.',
  'There’s a common mix-up here. MCP is a <strong>protocol</strong>, not a framework that builds agents. It standardises the connection. What gets connected, and who may use it, is still your design.':
    'Yahan ek common galatfehmi hai. MCP ek <strong>protocol</strong> hai, agents banane wala framework nahi. Woh connection ko standardise karta hai. Kya connect hota hai, aur use kaun use kar sakta hai, yeh abhi bhi aapka design hai.',
  'Agent-to-agent protocols add one more layer. They let agents find each other and exchange tasks and results. For product decisions, focus on identity, delegation, trust, permissions, error handling and observability, rather than on the fields inside each message.':
    'Agent-to-agent protocols ek aur layer jodte hain. Woh agents ko ek doosre ko dhoondhne aur tasks aur results exchange karne dete hain. Product decisions ke liye identity, delegation, trust, permissions, error handling aur observability par dhyaan dijiye, har message ke andar ke fields par nahi.',
  'Now let’s turn this into something you can use. You’ll sort tools from a system you already know into groups, by what each one is allowed to change.':
    'Ab ise kuch kaam ki cheez mein badalte hain. Aap ek jaane-pehchaane system ke tools ko groups mein sort karenge, is hisaab se ki har ek kya badal sakta hai.',
  'Classify five tools from a system you know as read-only, reversible write, irreversible write, privileged or prohibited.':
    'Kisi jaane-pehchaane system ke paanch tools ko read-only, reversible write, irreversible write, privileged ya prohibited mein classify kijiye.',
  'Tool — class — why':
    'Tool — class — kyun',
  'The line between reversible and irreversible is where human confirmation belongs. If a tool was hard to place, it probably needs a smaller scope.':
    'Reversible aur irreversible ke beech ki line wahi hai jahan human confirmation ki jagah hai. Agar kisi tool ko rakhna mushkil tha, toh shayad use chhota scope chahiye.',
  'To sum up. MCP is a standard way to connect tools, in the same way a plug socket is a standard. It makes things easier to plug in, but it doesn’t make an unsafe tool safe. Consent, authorisation and trust boundaries are still your job.':
    'Chaliye samet lete hain. MCP tools ko jodne ka ek standard tareeka hai, bilkul waise hi jaise plug socket ek standard hai. Isse cheezein plug karna aasaan ho jaata hai, lekin unsafe tool safe nahi ban jaata. Consent, authorisation aur trust boundaries ab bhi aapka kaam hain.',
  'Next, Chapter 28 changes the type of input, from text to documents, images and audio, while keeping the same context and evaluation design.':
    'Aage Chapter 28 input ka type badalta hai, text se documents, images aur audio tak, aur wahi context aur evaluation design rakhta hai.',
  'Write the tool access policy':
    'Tool access policy likhiye',
  'The gateway and the browser extension would be allowed to read forms, change text, call outside models and write logs. A standard connection to a tool makes things easier to plug in, but it does not make an unsafe tool safe. In this chapter you learned to mark where consent and authorisation happen and to classify tools by what they are allowed to change. Here you write the access policy for the gateway and the extension.':
    'Gateway aur browser extension ko forms padhne, text badalne, bahar ke models call karne aur logs likhne ki ijaazat hogi. Tool se standard connection jodna cheezein plug karna aasaan banata hai, lekin unsafe tool ko safe nahi banata. Is chapter mein aapne seekha ki consent aur authorisation kahan hote hain yeh mark karna, aur tools ko is hisaab se classify karna ki woh kya badal sakte hain. Yahan aap gateway aur extension ke liye access policy likhte hain.',
  'Written only. The policy is what you hand in. Classifying the tools is the thinking. No new code is needed.':
    'Sirf likhna hai. Policy hi woh cheez hai jo aap jama karte hain. Tools ko classify karna hi sochne ka kaam hai. Koi naya code nahi chahiye.',
  'List every tool or action the gateway or the browser extension would need: read a form field, read a request body, write to a log, call an outside model, replace text, block a request, send an alert.':
    'Har woh tool ya action list kijiye jo gateway ya browser extension ko chahiye hogi: form field padhna, request body padhna, log mein likhna, bahar ke model ko call karna, text replace karna, request block karna, alert bhejna.',
  'Sort each one into a class: read only; a change that can be undone; a change that cannot be undone; special permission needed; or forbidden.':
    'Har ek ko ek class mein daliye: read only; aisa change jo undo ho sakta hai; aisa change jo undo nahi ho sakta; special permission chahiye; ya forbidden.',
  'For each class, write what authorisation it needs and whether a person must confirm.':
    'Har class ke liye likhiye ki use kaun si authorisation chahiye aur kya kisi insaan ko confirm karna hoga.',
  'Draw a table with roles down the side (the developer, the compliance reviewer, the end user and the tool itself) and the classes across the top. Mark who may do what.':
    'Ek table banaiye jisme side mein roles hon (developer, compliance reviewer, end user aur khud tool) aur upar classes. Mark kijiye ki kaun kya kar sakta hai.',
  'Mark on a diagram where trust stops, and say which part enforces it.':
    'Ek diagram par mark kijiye ki trust kahan khatam hota hai, aur likhiye ki kaun sa hissa use enforce karta hai.',
  'Write what is recorded for an action that cannot be undone.':
    'Likhiye ki jo action undo nahi ho sakti, uske liye kya record kiya jaata hai.',
  'Every tool sorted into one of the five classes.':
    'Har tool paanch classes mein se ek mein sort hua.',
  'A table of roles against classes.':
    'Roles aur classes ki ek table.',
  'A diagram with the trust boundary and the part that enforces it.':
    'Ek diagram jisme trust boundary hai aur woh hissa jo use enforce karta hai.',
  'A description of the record kept for an action that cannot be undone.':
    'Us record ka description jo undo na ho sakne wali action ke liye rakha jaata hai.',

  /* ---- ch15mm: Multimodal AI: documents, images and voice ---- */
  'Multimodal AI: documents, images and voice':
    'Multimodal AI: documents, images aur voice',
  'When the input is a PDF, an image or audio, the design stays the same: context, tools, retrieval and evaluation. What changes is what counts as evidence and how you trace it. You’ll find out what text extraction loses, and design a voice pipeline.':
    'Jab input PDF, image ya audio ho, tab bhi design wahi rehta hai: context, tools, retrieval aur evaluation. Jo badalta hai woh yeh ki evidence kise maana jaata hai aur use trace kaise karte hain. Aap dekhenge ki text extraction kya kho deta hai, aur ek voice pipeline design karenge.',
  'Feed in one PDF with a table, one image, and one short audio clip. Predict what plain text extraction will lose.':
    'Ek table wala PDF, ek image, aur ek chhota audio clip dijiye. Pehle andaaza lagaiye ki plain text extraction kya kho dega.',
  'Pull out structured facts together with where each one came from, including timestamps when the source is audio.':
    'Structured facts nikaliye, saath mein yeh bhi ki har ek kahan se aaya, aur jab source audio ho tab timestamps bhi.',
  'Try a poor scan, a difficult table, speakers who overlap, and input that mixes languages.':
    'Kharab scan try kijiye, mushkil table, ek doosre par bolte speakers, aur aisa input jisme languages mili hui ho.',
  'A multimodal pipeline and an evaluation set for each kind of input.':
    'Ek multimodal pipeline, aur har tarah ke input ke liye ek evaluation set.',
  'State where knowing the source and having a person verify are mandatory, not just nice to have.':
    'Likhiye ki source jaanna aur kisi insaan se verify karwana kahan mandatory hai, sirf achha hone wali baat nahi.',
  'Scanned documents need images, not just text':
    'Scanned documents ko images chahiye, sirf text nahi',
  'Chapter 16 covered this for images of text.':
    'Chapter 16 ne yeh text ki images ke liye cover kiya tha.',
  'The answer key has to come from somewhere':
    'Answer key kahin se toh aani hi chahiye',
  'From Chapter 6. For a table or an image, it comes from a person.':
    'Chapter 6 se. Table ya image ke liye, woh kisi insaan se aati hai.',
  'OCR':
    'OCR',
  'Reading text out of an image of text. The quality of the scan sets a floor, and OCR fails quietly on bad input.':
    'Text ki image mein se text padhna. Scan ki quality ek floor tay karti hai, aur OCR kharab input par chupchaap fail ho jaata hai.',
  'Diarization':
    'Diarization',
  'Working out who spoke which part of an audio recording. It looks like a technical detail, but it behaves like a privacy decision.':
    'Yeh pata lagana ki audio recording ka kaun sa hissa kisne bola. Yeh technical detail jaisa dikhta hai, lekin kaam privacy decision ki tarah karta hai.',
  'Document understanding':
    'Document understanding',
  'Pulling out meaning that depends on layout, such as tables, headings and position, and not only the words.':
    'Aisa matlab nikalna jo layout par depend karta hai, jaise tables, headings aur position, sirf words par nahi.',
  'Media provenance':
    'Media provenance',
  'Knowing where a piece of media came from, and what has been done to it since.':
    'Yeh jaanna ki media ka ek tukda kahan se aaya, aur tab se uske saath kya kiya gaya hai.',
  'Name three things plain-text extraction loses from a real PDF.':
    'Bata paana ki ek asli PDF se plain-text extraction kaun si teen cheezein kho deta hai.',
  'Draw a voice pipeline and mark the steps that affect response time.':
    'Voice pipeline draw kar paana aur woh steps mark kar paana jo response time par asar daalte hain.',
  'Say where the answer key for a multimodal question must come from.':
    'Bata paana ki multimodal sawaal ki answer key kahan se aani chahiye.',
  'Find one real PDF with a table in it, and one short audio recording that you’re allowed to use.':
    'Ek asli PDF dhoondhiye jisme table ho, aur ek chhoti audio recording jo aap use kar sakte hain.',
  'So far, almost everything in this part has been text. Now the input changes. Real work arrives as PDFs, photos of forms and voice messages. This chapter shows what happens to the same ideas when the input isn’t plain text, and where things quietly go missing.':
    'Is part mein ab tak lagbhag sab kuch text tha. Ab input badalta hai. Asli kaam mein PDFs, forms ki photos aur voice messages aate hain. Yeh chapter dikhata hai ki jab input plain text nahi hota, tab wahi ideas kaise chalte hain, aur cheezein chupchaap kahan kho jaati hain.',
  'Start with a PDF. It holds text, layout, tables, images and hidden metadata. If you extract only the words, most of that is flattened, and nothing tells you it happened. No error appears.':
    'Pehle ek PDF se shuru kijiye. Usmein text, layout, tables, images aur chhupa hua metadata hota hai. Agar aap sirf words nikalte hain, toh usmein se zyadatar chapta ho jaata hai, aur aapko kuch batata bhi nahi. Koi error nahi aata.',
  'Here’s an everyday example. Photograph a railway timetable, and read only the words, in order, to someone on the phone. They hear every station name, but no useful departure times. The meaning was in the columns, and the columns didn’t survive.':
    'Ek roz ka example dekhiye. Ek railway timetable ki photo lijiye, aur phone par kisi ko sirf words, order mein, padhkar sunaiye. Unhe har station ka naam sunai dega, lekin departure times ka koi kaam ka matlab nahi. Matlab columns mein tha, aur columns bache nahi.',
  'There are five units. The first looks at documents, the second at images, and the third at voice. The fourth looks at speed, and the fifth shows how to test all of it properly.':
    'Yahan paanch units hain. Pehla documents dekhta hai, doosra images, aur teesra voice. Chautha speed dekhta hai, aur paanchva dikhata hai ki in sab ko sahi tareeke se test kaise karein.',
  'Understand why a PDF is a page with a layout, not just a text file.':
    'Samjhiye ki PDF ek layout wala page kyun hai, sirf text file nahi.',
  'Pulling out only the text can lose tables, reading order, images, headers and the meaning that comes from where things sit on the page.':
    'Sirf text nikalne se tables, reading order, images, headers, aur woh matlab kho sakte hain jo cheezein page par kahan baithi hain us se aata hai.',
  'Put the extracted text next to the page as it is displayed, and compare the two.':
    'Nikale hue text ko display hue page ke saamne rakhiye, aur dono ko compare kijiye.',
  'Write down the information that was lost, and design a fallback.':
    'Likhiye ki kaun si information kho gayi, aur ek fallback design kijiye.',
  'Use a scanned page and a page with a lot of tables.':
    'Ek scanned page aur ek aisa page use kijiye jisme bahut saari tables hon.',
  'A Document Understanding Gap Report.':
    'Ek Document Understanding Gap Report.',
  'Which questions cannot be answered from plain text?':
    'Kaun se sawaal plain text se answer nahi ho sakte?',
  'This is a problem with the quality of retrieval before it is ever a problem with the LLM.':
    'Yeh LLM ki problem hone se pehle retrieval ki quality ki problem hai.',
  'Vision and image evidence':
    'Vision aur image evidence',
  'Use evidence from images, with a clear record of where it came from and a way to evaluate it.':
    'Images se evidence use kijiye, saath mein saaf record ki woh kahan se aaya aur use evaluate karne ka tareeka.',
  'Vision models can read what an image shows, but their reading is still a probable guess, not a certainty.':
    'Vision models samajh sakte hain ki image mein kya dikh raha hai, lekin unka padhna phir bhi ek probable andaaza hai, pakki baat nahi.',
  'Ask five questions about an image or a table, and mark the region of the image that is the evidence.':
    'Ek image ya table ke baare mein paanch sawaal poochhiye, aur image ka woh hissa mark kijiye jo evidence hai.',
  'Record the source image, the question, the answer, and whether a person verified it.':
    'Source image, sawaal, jawaab, aur yeh record kijiye ki kisi insaan ne verify kiya ya nahi.',
  'Use images that are low-resolution or unclear.':
    'Aisi images use kijiye jo low-resolution ho ya saaf na ho.',
  'A Vision Evaluation Set.':
    'Ek Vision Evaluation Set.',
  'Which outputs need a person to verify them?':
    'Kaun se outputs ko verify karne ke liye insaan chahiye?',
  'Any claim about what an image shows should be traceable back to the source image.':
    'Image kya dikhati hai, is baare mein har claim ko source image tak trace kiya ja sakna chahiye.',
  'Audio and speech pipelines':
    'Audio aur speech pipelines',
  'Understand the whole path: capture, then ASR (speech to text), then cleaning up the text, then extraction, then confirmation, then action.':
    'Poora raasta samjhiye: capture, phir ASR (speech se text), phir text ko saaf karna, phir extraction, phir confirmation, phir action.',
  'Voice AI is a pipeline with several places where it can fail. It is not a single call to a model.':
    'Voice AI ek pipeline hai jisme fail hone ki kai jagahein hain. Yeh model ki ek single call nahi hai.',
  'Use a short audio sample and check how good the transcript is.':
    'Ek chhota audio sample use kijiye aur check kijiye ki transcript kitna achha hai.',
  'Pull the tasks out of the transcript into structured JSON.':
    'Transcript mein se tasks nikaliye, structured JSON mein.',
  'Test accents, people talking over each other, names, and content that mixes languages.':
    'Accents, ek doosre par bolte logon, names, aur mili hui languages wale content ko test kijiye.',
  'A Voice Pipeline Spec, plus a 10-case audio eval set.':
    'Ek Voice Pipeline Spec, saath mein ek 10-case audio eval set.',
  'Where can an error first enter the pipeline?':
    'Pipeline mein error sabse pehle kahan ghus sakta hai?',
  'For meeting and task automation, confirmation and privacy are part of the product.':
    'Meeting aur task automation ke liye confirmation aur privacy product ka hissa hain.',
  'Streaming and latency':
    'Streaming aur latency',
  'Understand why voice and other interactive multimodal systems care about partial results and about the time to the first response.':
    'Samjhiye ki voice aur doosre interactive multimodal systems partial results aur pehle response ke time ki parwah kyun karte hain.',
  'Users feel delay differently from servers. Streaming can make a system feel faster without reducing the total work.':
    'Users delay ko servers se alag mehsoos karte hain. Streaming system ko tez mehsoos karwa sakti hai, bina total kaam kam kiye.',
  'Measure the delay at each stage for one sample request.':
    'Ek sample request ke liye har stage ka delay measure kijiye.',
  'Keep the delays for capture, transcription, the model and the action separate.':
    'Capture, transcription, model aur action ke delays ko alag rakhiye.',
  'Add an artificial delay to one stage, and see what it does to the experience.':
    'Ek stage mein banavati delay jodiye, aur dekhiye ki experience par kya asar padta hai.',
  'A Latency Budget for the Multimodal Flow.':
    'Multimodal Flow ke liye ek Latency Budget.',
  'Which delay target will the user actually notice?':
    'User ko asal mein kaun sa delay target mehsoos hoga?',
  'Don’t speed up the fastest part while the user is waiting on another one.':
    'Sabse tez hisse ko aur tez mat kijiye, jab user kisi doosre hisse ka intezaar kar raha ho.',
  'Multimodal RAG evaluation':
    'Multimodal RAG evaluation',
  'Design tests where the answer depends on evidence that comes from one specific kind of input.':
    'Aise tests design kijiye jahan jawaab ek khaas tarah ke input se aane wale evidence par depend karta ho.',
  'An evaluation set made only of text can hide failures that happen with images and audio.':
    'Sirf text ka bana evaluation set un failures ko chhupa sakta hai jo images aur audio ke saath hoti hain.',
  'Create five text-only cases, five visual or table cases, and five audio cases.':
    'Paanch text-only cases, paanch visual ya table cases, aur paanch audio cases banaiye.',
  'Score three things: whether the evidence is correct, whether the extraction is correct, and whether the whole task succeeds.':
    'Teen cheezein score kijiye: evidence sahi hai ya nahi, extraction sahi hai ya nahi, aur poora task succeed hua ya nahi.',
  'Add a poor scan, noisy audio and a case in more than one language.':
    'Ek kharab scan, shor wala audio, aur ek aisa case jisme ek se zyada languages hon, jodiye.',
  'An Evaluation Matrix for each kind of input.':
    'Har tarah ke input ke liye ek Evaluation Matrix.',
  'Which failure belongs to extraction, and which belongs to reasoning?':
    'Kaun si failure extraction ki hai, aur kaun si reasoning ki?',
  'Your set of measures should show you which component is broken, not just that the final answer was wrong.':
    'Aapke measures ka set aapko dikhana chahiye ki kaun sa component toot gaya hai, sirf yeh nahi ki aakhri jawaab galat tha.',
  'Voice is a pipeline':
    'Voice ek pipeline hai',
  'Voice is the clearest case of something with many stages. It feels like one thing when you use it, but it isn’t.':
    'Voice ek aisi cheez ka sabse saaf example hai jisme kai stages hote hain. Use karte waqt woh ek hi cheez lagti hai, lekin hai nahi.',
  'A voice system is a pipeline, not one model. Each stage adds delay, and each stage is a place where meaning can change.':
    'Voice system ek pipeline hai, ek model nahi. Har stage delay jodta hai, aur har stage ek aisi jagah hai jahan matlab badal sakta hai.',
  'Each stage has a name: reading text from an image (OCR), turning speech into text (transcription), and working out who said what (speaker attribution). Each is a step where meaning can be lost, so each needs its own check.':
    'Har stage ka ek naam hai: image se text padhna (OCR), speech ko text mein badalna (transcription), aur yeh pata lagana ki kisne kya kaha (speaker attribution). Har ek aisa step hai jahan matlab kho sakta hai, isliye har ek ka apna check chahiye.',
  'Speaker attribution is a good one to try yourself, because it raises questions that are not only technical.':
    'Speaker attribution khud try karne ke liye achha example hai, kyunki isse aise sawaal uthte hain jo sirf technical nahi hain.',
  'For a meeting assistant: who said what, how long is the transcript kept, and what happens when two people talk at once?':
    'Ek meeting assistant ke liye: kisne kya kaha, transcript kitne time tak rakha jaata hai, aur jab do log ek saath bolein toh kya hota hai?',
  'Attribution … retention … overlapping speech …':
    'Attribution … retention … overlapping speech …',
  'Speaker attribution looks like a technical detail, but it behaves like a privacy decision.':
    'Speaker attribution technical detail jaisa dikhta hai, lekin kaam privacy decision ki tarah karta hai.',
  'Let’s pull it together. A PDF is a page with layout, so extracting only the words loses things without any warning.':
    'Chaliye sab jodte hain. PDF layout wala page hai, isliye sirf words nikalne se bina kisi warning ke cheezein kho jaati hain.',
  'An image gives you probable readings, not certainties, so you keep track of the source. A voice system is a pipeline, and each stage needs its own check. For a table or an image, the answer key comes from a person.':
    'Image aapko probable readings deti hai, pakki baatein nahi, isliye aap source ka track rakhte hain. Voice system ek pipeline hai, aur har stage ko apna check chahiye. Table ya image ke liye, answer key kisi insaan se aati hai.',
  'Next, Chapter 29 builds a systematic way to prove whether all these components work.':
    'Aage Chapter 29 ek systematic tareeka banata hai yeh saabit karne ka ki yeh saare components kaam karte hain ya nahi.',
  'Specify how the tool handles images and voice':
    'Tool images aur voice ko kaise handle karta hai, yeh specify kijiye',
  'Personal details arrive as photos of cards and as spoken words as well as typed text. In this chapter you learned what plain-text extraction loses from a real document, how a voice pipeline is put together, and where the answer key for a multimodal question must come from. Here you specify how Bharat Privacy Guard deals with scanned IDs and with typed-by-voice sentences.':
    'Personal details typed text ke saath-saath cards ki photos aur bole hue words ke roop mein bhi aate hain. Is chapter mein aapne seekha ki ek asli document se plain-text extraction kya kho deta hai, voice pipeline kaise banti hai, aur multimodal sawaal ki answer key kahan se aani chahiye. Yahan aap specify karte hain ki Bharat Privacy Guard scanned IDs aur voice se type kiye gaye sentences ko kaise handle karta hai.',
  'Written only. A specification. No code needed.':
    'Sirf likhna hai. Ek specification. Code ki zaroorat nahi.',
  'Name three things that are lost when text is simply pulled out of a scanned ID card or a PDF. For example: where the text sits on the page, a stamp, and a handwritten note.':
    'Teen cheezein bataiye jo tab kho jaati hain jab ek scanned ID card ya PDF se text sirf kheench liya jaata hai. Jaise: text page par kahan baitha hai, ek stamp, aur haath se likha hua note.',
  'Draw the path for a voice message: speech turned into text, then the tool, then the safe text. Mark the steps that add delay.':
    'Voice message ka raasta draw kijiye: speech se text, phir tool, phir safe text. Woh steps mark kijiye jo delay jodte hain.',
  'Write the privacy boundary: whose voice is recorded, where it is recorded, and what notice the person gets.':
    'Privacy boundary likhiye: kiski voice record hoti hai, kahan record hoti hai, aur us insaan ko kaun sa notice milta hai.',
  'Write how long the typed-out speech is kept and how it is deleted.':
    'Likhiye ki typed-out speech kitne time tak rakhi jaati hai aur kaise delete hoti hai.',
  'Write what happens when the speech-to-text is unsure of a number, for example a digit it heard twice. Write the rule.':
    'Likhiye ki jab speech-to-text kisi number ke baare mein pakka na ho, toh kya hota hai, jaise ek digit jo usne do tarah se suna. Rule likhiye.',
  'Say where the answer key for voice and images comes from, and write three made-up voice-typed sentences with no punctuation to add to it.':
    'Bataiye ki voice aur images ki answer key kahan se aati hai, aur usmein jodne ke liye bina punctuation ke teen banaye hue voice-typed sentences likhiye.',
  'Write the measures you will track, including one for how often a spoken number is heard correctly.':
    'Woh measures likhiye jo aap track karenge, jisme ek yeh bhi ho ki bola hua number kitni baar sahi suna gaya.',
  'Three things lost by plain text extraction.':
    'Plain text extraction se kho jaane wali teen cheezein.',
  'A voice path with the delays marked.':
    'Delays mark kiya hua ek voice path.',
  'The privacy boundary and the keep-and-delete rule.':
    'Privacy boundary aur rakhne-aur-delete karne ka rule.',
  'A rule for unsure numbers, three new answer-key rows, and the measures to track.':
    'Unsure numbers ka ek rule, answer key ki teen nayi rows, aur track karne ke measures.',

  /* ---- ch16e: Evaluation engineering: test sets and release gates ---- */
  'Evaluation engineering: test sets and release gates':
    'Evaluation engineering: test sets aur release gates',
  'In Chapter 6 you learned to measure. Now you turn that measuring into a release process: a test set with a version number, scores at several levels, and a gate that decides whether a change goes live.':
    'Chapter 6 mein aapne measure karna seekha tha. Ab hum us measuring ko ek release process bana denge: version number wala test set, kai levels par scores, aur ek gate jo tay karta hai ki koi change live jayega ya nahi.',
  'Before you improve anything, write twenty tests. Include normal questions, reworded ones, unclear ones, ones with no answer, other languages, tricky attacks and cases where the tool must be used.':
    'Kuch bhi improve karne se pehle 20 tests likhiye. Usmein normal sawaal rakhiye, doosre tareeke se pooche hue sawaal, unclear sawaal, jinka koi jawaab nahi hai woh sawaal, doosri languages, tricky attacks, aur woh cases jahan tool ka use karna padta hai.',
  'Automate the checks for retrieval, structure, tool use and the final answer. Use a model as judge only where a simple exact check cannot do the job.':
    'Retrieval, structure, tool use aur final jawaab ke checks automate kijiye. Model ko judge tabhi banaiye jahan ek simple exact check se kaam nahi chalta.',
  'Change the prompt, then the model, then the index, one at a time, and run the regression test each time. Then compare the judge’s labels with human labels on a small sample.':
    'Prompt badaliye, phir model, phir index, ek-ek karke, aur har baar regression test chalaiye. Uske baad ek chhote sample par judge ke labels ko insaanon ke labels se compare kijiye.',
  'A working evaluation harness and a release gate.':
    'Ek chalta hua evaluation harness aur ek release gate.',
  'No change goes live because a demo looked better. It goes live because it passed the gate.':
    'Koi change sirf isliye live nahi jaata ki demo achha lag raha tha. Woh tab jaata hai jab woh gate pass kar leta hai.',
  'Answer keys, recall and precision':
    'Answer keys, recall aur precision',
  'Chapter 6 built the measuring that this chapter scales up.':
    'Chapter 6 mein jo measuring banayi thi, yeh chapter use bade scale par le jaata hai.',
  'A model can grade output at scale':
    'Model bade scale par output ko grade kar sakta hai',
  'Chapter 14 introduced the judge, and the ways it can be biased.':
    'Chapter 14 mein judge aur uske bias ka zikr aaya tha.',
  'Improvement comes from reading failures by hand':
    'Failures ko haath se padhne se improvement aati hai',
  'You learned this in Chapter 14.5. Automation does not replace it.':
    'Yeh aapne Chapter 14.5 mein seekha tha. Automation iski jagah nahi leta.',
  'Golden set':
    'Golden set',
  'The carefully chosen cases, with a version number, that every change is measured against.':
    'Woh sochkar chune hue cases, version number ke saath, jinke against har change ko measure kiya jaata hai.',
  'LLM-as-judge':
    'LLM-as-judge',
  'Using a model to score another model’s output. It is a scorer, not an oracle, so you should know how often it disagrees with human labels.':
    'Ek model se doosre model ke output ko score karwana. Woh ek scorer hai, oracle nahi, isliye aapko pata hona chahiye ki woh insaanon ke labels se kitni baar alag jaata hai.',
  'Regression test':
    'Regression test',
  'A case that passed before and must still pass now.':
    'Ek aisa case jo pehle pass hota tha aur ab bhi pass hona chahiye.',
  'Release gate':
    'Release gate',
  'The thresholds a change has to clear before it goes live, however good the demo looked.':
    'Woh thresholds jo kisi change ko live jaane se pehle clear karne padte hain, demo chahe kitna bhi achha laga ho.',
  'Build a test set with a version number that still works after a prompt, model or index change.':
    'Version number wala test set banana paana jo prompt, model ya index badalne ke baad bhi kaam kare.',
  'Score the system at several levels, so that a good final number cannot hide a broken part.':
    'System ko kai levels par score kar paana, taaki ek achha final number kisi toote hue part ko chhupa na sake.',
  'Say where an LLM judge is fine to use and where it is not.':
    'Bata paana ki LLM judge kahan theek hai aur kahan nahi.',
  'Bring your answer key from Chapter 6, your judge from Chapter 14 and your experiment harness.':
    'Chapter 6 ka apna answer key, Chapter 14 ka judge aur apna experiment harness saath rakhiye.',
  'In Chapter 6 you made an answer key and learned to score against it. That was measuring. Now we make it a habit the whole team follows, and a rule that decides whether a change goes live.':
    'Chapter 6 mein aapne ek answer key banaya tha aur uske against score karna seekha tha. Woh measuring thi. Ab hum use poori team ki aadat bana denge, aur ek aisa rule bhi, jo tay karta hai ki change live jayega ya nahi.',
  'Here’s what you’ll build: a fixed set of test questions, one consistent way of grading them, and a pass mark agreed in advance. Once you have those, “the demo looked better” stops being an argument.':
    'Aap yeh banayenge: test sawaalon ka ek fixed set, unhe grade karne ka ek hi consistent tareeka, aur pehle se tay kiya hua pass mark. Yeh teeno hone ke baad “demo achha lag raha tha” koi argument nahi rehta.',
  'Think about how a school works. It doesn’t judge a student on one good answer. Everyone sits the same paper, it is marked the same way, and the pass mark is agreed beforehand. An AI feature needs the same fairness.':
    'Ek school ko dekhiye. Woh student ko ek achhe jawaab par judge nahi karta. Sab ek hi paper dete hain, sabka paper ek hi tareeke se check hota hai, aur pass mark pehle se tay hota hai. AI feature ko bhi aisi hi fairness chahiye.',
  'Every AI feature needs a test set, and the test set needs a version number. If you cannot rerun an evaluation after a change, it is only an anecdote.':
    'Har AI feature ko ek test set chahiye, aur test set ko ek version number. Agar aap change ke baad evaluation dobara chala nahi sakte, toh woh sirf ek kissa hai.',
  'The seven units below take you from the test set to the final release decision. Each one builds on the one before.':
    'Neeche ke saat units aapko test set se final release decision tak le jaate hain. Har unit pichhle unit par bana hai.',
  'Golden datasets':
    'Golden datasets',
  'Create a set of cases, with a version number, that includes typical cases, edge cases and cases where the system has failed.':
    'Cases ka ek set banaiye, version number ke saath, jismein typical cases, edge cases aur woh cases ho jahan system fail hua hai.',
  'A golden dataset is the team’s memory of what “good” means for your application.':
    'Golden dataset team ki yaaddasht hai ki aapki application ke liye “good” ka matlab kya hai.',
  'Create at least 30 cases. Cover the normal path, reworded questions, unclear questions, questions with no answer, other languages, attacks and cases that need a tool.':
    'Kam se kam 30 cases banaiye. Normal path, doosre tareeke se pooche hue sawaal, unclear sawaal, jinka jawaab nahi hai woh sawaal, doosri languages, attacks, aur woh cases jinhe tool chahiye, sab cover kijiye.',
  'For each case, store the behaviour you expect. Where you can, also store the IDs of the evidence it should use.':
    'Har case ke liye woh behaviour store kijiye jo aap expect karte hain. Jahan ho sake, un evidence ke IDs bhi store kijiye jinka use hona chahiye.',
  'Remove one category of cases. See which regressions you can no longer notice.':
    'Cases ki ek category hata dijiye. Dekhiye ki kaun se regressions ab aapko dikhna band ho gaye.',
  'Golden Dataset v1.0.':
    'Golden Dataset v1.0.',
  'Does the set reflect the risks real users face, or only the easy demos?':
    'Kya yeh set asli users ke risks dikhata hai, ya sirf aasaan demos ko?',
  'The dataset becomes the contract for product quality.':
    'Dataset product quality ka contract ban jaata hai.',
  'Error taxonomy':
    'Error taxonomy',
  'Sort failures into kinds, so that you fix causes and not just symptoms.':
    'Failures ko kinds mein baant dijiye, taaki aap sirf symptoms nahi, causes ko fix karein.',
  '“Wrong answer” is too broad to tell engineers what to fix.':
    '“Wrong answer” itna broad hai ki engineers ko pata nahi chalta kya fix karna hai.',
  'Create the categories: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure and hallucination.':
    'Yeh categories banaiye: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure aur hallucination.',
  'Label 20 real failures with these categories.':
    'Is categories ke saath 20 asli failures ko label kijiye.',
  'Ask two people to label the same failures. Then compare where they disagree.':
    'Do logon se wahi failures label karwaiye. Phir dekhiye ki woh kahan alag-alag label karte hain.',
  'Error Taxonomy plus labelled examples.':
    'Error Taxonomy aur labelled examples.',
  'Which categories lead to a clear action?':
    'Kaun si categories se saaf action nikalta hai?',
  'A useful set of categories changes what the team does next.':
    'Kaam ki categories team ka agla kadam badal deti hain.',
  'Retrieval metrics':
    'Retrieval metrics',
  'Measure Recall@k, Precision@k and similar ranking measures, using clear labels for what counts as relevant.':
    'Recall@k, Precision@k aur isi tarah ke ranking measures measure kijiye, aur saaf labels rakhiye ki relevant ka matlab kya hai.',
  'A metric means something only when the definition of “relevant” is clear.':
    'Metric tabhi kuch batata hai jab “relevant” ki definition saaf ho.',
  'For each query, mark which chunks are relevant. Then calculate Recall@k and Precision@k.':
    'Har query ke liye mark kijiye ki kaun se chunks relevant hain. Phir Recall@k aur Precision@k calculate kijiye.',
  'Compare what you get at k=1, 3, 5 and 10.':
    'k=1, 3, 5 aur 10 par kya milta hai, compare kijiye.',
  'Add some distractor chunks, which look related but are not, and watch how the metrics change.':
    'Kuch distractor chunks daaliye, jo related lagte hain lekin hain nahi, aur dekhiye ki metrics kaise badalte hain.',
  'Retrieval Evaluation Notebook.':
    'Retrieval Evaluation Notebook.',
  'What exactly counts as relevant?':
    'Relevant ka bilkul sahi matlab kya hai?',
  'Never report a retrieval metric without saying how you decided what is relevant.':
    'Retrieval metric tab tak report mat kijiye jab tak aap yeh na bata dein ki relevant kaise tay kiya.',
  'Generation and task success':
    'Generation aur task success',
  'Check whether the final answer is correct, grounded in the evidence, complete and useful for the task.':
    'Check kijiye ki final jawaab correct hai, evidence par tika hai, complete hai, aur task ke liye kaam ka hai.',
  'A system can have a good retrieval score and still give a bad answer.':
    'Ek system ka retrieval score achha ho sakta hai aur phir bhi jawaab kharab ho sakta hai.',
  'Write yes-or-no or graded criteria for whether an answer is correct and grounded.':
    'Haan-ya-na wale ya graded criteria likhiye ki jawaab kab correct aur grounded maana jaayega.',
  'Score a fixed sample, using labels from people.':
    'Ek fixed sample ko score kijiye, insaanon ke labels ke saath.',
  'Include answers that are only partly correct, and answers that sound too sure of themselves.':
    'Aise jawaab bhi rakhiye jo sirf aadhe sahi hain, aur woh jawaab bhi jo zaroorat se zyada confident lagte hain.',
  'Generation Rubric plus a labelled sample.':
    'Generation Rubric aur ek labelled sample.',
  'Can two reviewers apply the rubric and reach the same result?':
    'Kya do reviewers rubric lagakar ek hi result tak pahunch sakte hain?',
  'Acceptance criteria should be something you can observe, not just “it sounds good”.':
    'Acceptance criteria aisi cheez honi chahiye jo aap dekh sakein, sirf “achha lag raha hai” nahi.',
  'Use a model as judge where an exact check is not enough, and then check the judge against human labels.':
    'Jahan exact check kaafi nahi hai, wahan model ko judge banaiye, aur phir judge ko insaanon ke labels se check kijiye.',
  'A judge is one more component that can be wrong, so measure how often it agrees with people.':
    'Judge bhi ek aur component hai jo galat ho sakta hai, isliye measure kijiye ki woh insaanon se kitni baar sehmat hota hai.',
  'Have a judge score 20 examples for groundedness or relevance.':
    'Ek judge se 20 examples ko groundedness ya relevance ke liye score karwaiye.',
  'Compare the judge’s decisions with the human labels, and calculate how often they disagree.':
    'Judge ke decisions ko insaanon ke labels se compare kijiye, aur calculate kijiye ki woh kitni baar alag jaate hain.',
  'Swap the order of the answers, or make them longer or shorter. See whether the judge favours position or length.':
    'Jawaabon ka order badaliye, ya unhe lamba ya chhota kijiye. Dekhiye ki judge position ya length ko pasand toh nahi karta.',
  'Judge Validation Report.':
    'Judge Validation Report.',
  'Where does the judge disagree with people, and why?':
    'Judge insaanon se kahan alag jaata hai, aur kyun?',
  'Never let a judge you have not checked quietly become the authority on whether you release.':
    'Jis judge ko aapne check nahi kiya, use kabhi chupchaap release ka faisla karne wala mat banne dijiye.',
  'Regression and CI gates':
    'Regression aur CI gates',
  'Run the evaluation automatically whenever a prompt, model, index or tool changes.':
    'Jab bhi prompt, model, index ya tool badle, evaluation apne aap chalaiye.',
  'An AI system can get worse without any error showing up when the code is built.':
    'Ek AI system bina kisi error ke bhi kharab ho sakta hai, jabki code build ho jaata hai.',
  'Create one command that runs the golden set and prints a summary.':
    'Ek aisa command banaiye jo golden set chalaye aur summary print kare.',
  'Set thresholds, and make the run fail when quality or safety drops below them.':
    'Thresholds set kijiye, aur run ko fail karwaiye jab quality ya safety unse neeche aaye.',
  'Change a prompt, and check that CI catches the regression.':
    'Ek prompt badaliye, aur check kijiye ki CI regression pakad leta hai.',
  'Automated Evaluation Suite plus Release Gate.':
    'Automated Evaluation Suite aur Release Gate.',
  'What exact condition blocks a release?':
    'Kaun si exact condition release rokti hai?',
  'This is the AI version of a test suite, for software whose behaviour can vary.':
    'Yeh test suite ka AI version hai, aise software ke liye jiska behaviour badal sakta hai.',
  'Evaluation release decision':
    'Evaluation release decision',
  'Bring quality, safety, latency and cost together into one release decision, without hiding any trade-off.':
    'Quality, safety, latency aur cost ko milakar ek release decision banaiye, bina kisi trade-off ko chhupaye.',
  'Shipping is a decision with several dimensions. A single overall score can hide failures you cannot accept.':
    'Ship karna ek aisa decision hai jismein kai dimensions hain. Ek overall score aise failures chhupa sakta hai jo aap accept nahi kar sakte.',
  'Define a quality threshold, a safety threshold, a latency SLO (the response time you promise), a cost ceiling and a rollback trigger.':
    'Ek quality threshold, ek safety threshold, ek latency SLO (jis response time ka aap vaada karte hain), ek cost ceiling aur ek rollback trigger tay kijiye.',
  'Run a candidate release through the gate.':
    'Ek candidate release ko gate se guzaariye.',
  'Create a model that improves quality but breaks the cost limit or the safety limit.':
    'Ek aisa model banaiye jo quality improve kare lekin cost limit ya safety limit tod de.',
  'Release Decision Record.':
    'Release Decision Record.',
  'Which threshold can never be negotiated?':
    'Kaun sa threshold kabhi negotiate nahi ho sakta?',
  'A PM owns the framework for the decision, even when engineers build it.':
    'PM decision ke framework ka owner hota hai, chahe engineers use banayein.',
  'Measure at several levels':
    'Kai levels par measure kijiye',
  'An AI system has several parts, so one score for the whole thing is not enough. The catch is that a fluent model can cover for missing evidence, and it does so often enough to look fine in a demo.':
    'Ek AI system ke kai parts hote hain, isliye poore system ka ek score kaafi nahi hai. Dikkat yeh hai ki ek fluent model missing evidence ko chhupa leta hai, aur itni baar chhupa leta hai ki demo mein sab theek lagta hai.',
  'Evaluate several levels at once. A good end-to-end score can hide a badly broken retriever.':
    'Kai levels ek saath evaluate kijiye. Ek achha end-to-end score ek bahut kharab retriever ko chhupa sakta hai.',
  'The table shows five levels. Read down the right-hand column: each question is one that a release decision needs answered.':
    'Table mein paanch levels hain. Right wale column ko upar se neeche padhiye: har sawaal aisa hai jiska jawaab release decision ko chahiye.',
  'Layer':
    'Layer',
  'Example metric':
    'Example metric',
  'The release question it answers':
    'Release ka woh sawaal jiska yeh jawaab deta hai',
  'Retrieval':
    'Retrieval',
  'Recall@k, Precision@k':
    'Recall@k, Precision@k',
  'Did we fetch the right evidence?':
    'Kya humne sahi evidence nikala?',
  'Generation':
    'Generation',
  'Groundedness, task success':
    'Groundedness, task success',
  'Did the answer use the evidence correctly?':
    'Kya jawaab ne evidence ko sahi tareeke se use kiya?',
  'Tool use':
    'Tool use',
  'Tool-selection accuracy':
    'Tool-selection accuracy',
  'Did it call the right capability?':
    'Kya usne sahi capability call ki?',
  'Operations':
    'Operations',
  'p95 latency, cost per task':
    'p95 latency, cost per task',
  'Can we afford to run it?':
    'Kya hum ise chalane ka kharcha utha sakte hain?',
  'Safety':
    'Safety',
  'Attack success rate':
    'Attack success rate',
  'Can adversarial input break the controls?':
    'Kya adversarial input controls ko tod sakta hai?',
  'You will meet many evaluation products. Each one is selling an answer to one of three questions.':
    'Aapko bahut saare evaluation products milenge. Har ek teen sawaalon mein se kisi ek ka jawaab bech raha hota hai.',
  'The first is <strong>what do we test on?</strong> The answer is a fixed set you keep, with real cases where possible. The second is <strong>who grades it?</strong> Use an exact check where you can, a person where it matters, and a model where neither can keep up. The third is <strong>what score lets it ship?</strong>':
    'Pehla hai <strong>hum kis par test karte hain?</strong> Jawaab hai ek fixed set jo aap rakhte hain, jahan ho sake asli cases ke saath. Doosra hai <strong>grade kaun karta hai?</strong> Jahan ho sake exact check, jahan zaroori ho insaan, aur jahan dono ke bas ka na ho wahan model. Teesra hai <strong>kitna score aaye toh ship ho?</strong>',
  'Now try writing that third answer yourself.':
    'Ab woh teesra jawaab aap khud likhkar dekhiye.',
  'Write the sentence that stops a release. Not a policy: the actual sentence, with numbers, that you would say in the meeting.':
    'Woh sentence likhiye jo release rokta hai. Policy nahi: asli sentence, numbers ke saath, jo aap meeting mein bolenge.',
  'We are not shipping because …':
    'Hum ship nahi kar rahe kyunki …',
  'If your sentence contains the word “seems”, it will not stop anything. Thresholds stop releases; impressions do not.':
    'Agar aapke sentence mein “lagta hai” jaisa word hai, toh woh kuch nahi rokega. Release thresholds rokte hain; impressions nahi.',
  'So here is the whole chapter in a few lines. You keep a test set with a version number. You score at several levels, so a good total cannot hide a broken part. You use a model as judge only after checking it against people. And you agree the pass mark before you look at the results.':
    'Toh poora chapter chand lines mein yeh hai. Aap version number wala test set rakhte hain. Aap kai levels par score karte hain, taaki ek achha total kisi toote hue part ko na chhupa sake. Aap model ko judge tabhi banate hain jab use insaanon ke against check kar lein. Aur pass mark aap results dekhne se pehle tay karte hain.',
  'Next, in Chapter 30, you’ll look at how to watch the system continuously once it is live.':
    'Agle Chapter 30 mein aap dekhenge ki system live hone ke baad use lagaatar kaise watch kiya jaata hai.',
  'Build the release gate':
    'Release gate banaiye',
  'Without a release gate, measuring just produces a report that nobody has to act on. In this chapter you learned to build a test set that still works after a change of prompt, model or index. You also learned to score at several levels, so that a good total cannot hide a broken part, and where an automatic marker is acceptable. Now you build the gate that every new version of the tool must pass before it ships.':
    'Release gate ke bina measuring sirf ek report bana deti hai jis par kisi ko action nahi lena padta. Is chapter mein aapne seekha ki aisa test set kaise banate hain jo prompt, model ya index badalne ke baad bhi kaam kare. Aapne yeh bhi seekha ki kai levels par score kaise karte hain, taaki ek achha total kisi toote hue part ko na chhupa sake, aur automatic marker kahan theek hai. Ab aap woh gate banayenge jo tool ke har naye version ko ship hone se pehle pass karna hoga.',
  'Your test harness from Chapter 21, extended in code.':
    'Chapter 21 ka aapka test harness, code mein extend kiya hua.',
  'Open your harness. Turn your answer key into a test set with a version number: a file that carries the number and a note listing what changed since the last version. Call it the final version for now.':
    'Apna harness kholiye. Apne answer key ko version number wale test set mein badaliye: ek file jismein number ho aur ek note ho ki pichhle version se kya badla. Abhi ke liye use final version kahiye.',
  'Score at three levels: each finder on its own, the whole tool on whole sentences, and the cleaned text marked by your automatic marker from Chapter 14.':
    'Teen levels par score kijiye: har finder akela, poora tool poore sentences par, aur Chapter 14 ke aapke automatic marker se marked cleaned text.',
  'Write the gate. For each score, write the lowest number a new version may have in order to be released. Add a rule that the score for any single kind of ID may not drop, even if the overall score goes up.':
    'Gate likhiye. Har score ke liye woh sabse kam number likhiye jo naye version ko release hone ke liye chahiye. Ek rule bhi jodiye ki kisi ek kisam ki ID ka score gir nahi sakta, chahe overall score badh jaaye.',
  'Make the gate run with one command that prints PASS or FAIL.':
    'Gate ko ek command se chalne wala banaiye jo PASS ya FAIL print kare.',
  'Prove it works. Change one rule so that it breaks Aadhaar finding, run the gate, and show that it says FAIL.':
    'Ab prove kijiye ki yeh kaam karta hai. Ek rule badaliye taaki Aadhaar finding toot jaaye, gate chalaiye, aur dikhaiye ki woh FAIL bolta hai.',
  'Say where the automatic marker is acceptable in the gate and where only your own marking will do.':
    'Bataiye ki gate mein automatic marker kahan theek hai aur kahan sirf aapki apni marking chalegi.',
  'A test set with a version number and a change note.':
    'Version number wala ek test set aur ek change note.',
  'Scores at three levels.':
    'Teen levels par scores.',
  'A gate with a minimum for every score and a rule for each kind of ID.':
    'Har score ke liye minimum wala gate, aur har kisam ki ID ke liye ek rule.',
  'A one-command run that prints PASS or FAIL, and proof that it fails a broken change.':
    'Ek command wala run jo PASS ya FAIL print kare, aur saboot ki woh kharab change ko fail karta hai.',

  /* ---- ch17o: Observability and LLMOps: traces, cost and rollback ---- */
  'Observability and LLMOps: traces, cost and rollback':
    'Observability aur LLMOps: traces, cost aur rollback',
  'When an answer is wrong, slow or expensive, you need to find out why without guessing. You’ll design a trace record, treat cost as an architecture metric, and give every part a version, so that any change can be rolled back.':
    'Jab koi jawaab galat, slow ya mehnga ho, toh aapko andaaze lagaye bina pata karna hota hai ki kyun. Aap ek trace record design karenge, cost ko architecture metric ki tarah dekhenge, aur har part ko ek version denge, taaki koi bhi change rollback ho sake.',
  'Trace one request by hand, and time every stage with a stopwatch.':
    'Ek request ko haath se trace kijiye, aur har stage ko stopwatch se time kijiye.',
  'Record the request id, the model and prompt version, the retrieval ids, the tool calls, the latency, the tokens, the status and the evaluation result.':
    'Request id, model aur prompt version, retrieval ids, tool calls, latency, tokens, status aur evaluation result record kijiye.',
  'Deliberately create a slow request, an expensive one and a low-quality one. Then work out what went wrong in each, using only its trace.':
    'Jaan-boojhkar ek slow request, ek mehngi request aur ek low-quality request banaiye. Phir har ek mein kya galat hua, yeh sirf uske trace se pata kijiye.',
  'A specification for a six-panel view of the running system.':
    'Chalte hue system ke six-panel view ki specification.',
  'Say which signals should start an investigation, which should trigger a rollback, and which are just noise.':
    'Bataiye kaun se signals investigation shuru karwate hain, kaun se rollback karwate hain, aur kaun se sirf noise hain.',
  'Users notice response time':
    'Users ko response time dikhta hai',
  'You saw this in Chapter 11.5. A trace shows where the time went.':
    'Yeh aapne Chapter 11.5 mein dekha tha. Trace dikhata hai ki time kahan gaya.',
  'Cost can be measured per request':
    'Cost har request ke hisaab se measure ho sakti hai',
  'Chapter 15 built the arithmetic that this chapter records.':
    'Chapter 15 mein jo hisaab banaya tha, yeh chapter use record karta hai.',
  'A release gate needs evidence':
    'Release gate ko evidence chahiye',
  'This comes from Chapter 29. Once you are live, traces provide that evidence.':
    'Yeh Chapter 29 se aata hai. Live hone ke baad yeh evidence traces dete hain.',
  'Trace':
    'Trace',
  'The record of one request’s journey through the system: what was retrieved, which prompt version ran, and what each stage cost in time and tokens.':
    'Ek request ke system mein safar ka record: kya retrieve hua, kaun sa prompt version chala, aur har stage mein time aur tokens kitne lage.',
  'Telemetry':
    'Telemetry',
  'The measurements a running system sends out about itself, such as timings, counts, errors and usage. They let somebody see what the system is doing without reading the code.':
    'Chalta hua system apne baare mein jo measurements bhejta hai, jaise timings, counts, errors aur usage. Inse koi bhi code padhe bina dekh sakta hai ki system kya kar raha hai.',
  'Canary release':
    'Canary release',
  'Sending a small share of real traffic to a change before all of it.':
    'Kisi change ko sabke paas bhejne se pehle asli traffic ke ek chhote hisse ko bhejna.',
  'Drift':
    'Drift',
  'Quality moving without anybody deploying anything, because the inputs, the documents or the provider changed underneath you.':
    'Quality ka badal jaana jabki kisi ne kuch deploy nahi kiya, kyunki inputs, documents ya provider aapke neeche badal gaye.',
  'Design a trace record that can answer “why was this answer wrong?” after the fact.':
    'Aisa trace record design kar paana jo baad mein bata sake ki “yeh jawaab galat kyun tha?”',
  'Treat cost as an architecture metric rather than a finance report.':
    'Cost ko finance report ki tarah nahi, architecture metric ki tarah dekh paana.',
  'Name what must be versioned so that a change can be rolled back.':
    'Bata paana ki kis cheez ka version hona zaroori hai, taaki change rollback ho sake.',
  'Open your experiment harness. You’ll extend its records into full traces.':
    'Apna experiment harness kholiye. Aap uske records ko full traces mein badlenge.',
  'In the last chapter you built a gate that checks a change before it goes live. But the story doesn’t end at release. One day your live system will give a wrong answer, and someone will ask why. This chapter makes sure your answer is not “we can’t tell”.':
    'Pichhle chapter mein aapne ek gate banaya tha jo kisi change ko live jaane se pehle check karta hai. Lekin kahani release par khatam nahi hoti. Ek din aapka live system galat jawaab dega, aur koi poochega ki kyun. Yeh chapter yeh pakka karta hai ki aapka jawaab “humein nahi pata” na ho.',
  'Think of a parcel that goes missing. The courier can tell you where it was last scanned, because every parcel is scanned at every step. Without those scans, a lost parcel can never be traced.':
    'Ek aise parcel ke baare mein sochiye jo kho gaya. Courier bata sakta hai ki woh aakhri baar kahan scan hua tha, kyunki har parcel har step par scan hota hai. In scans ke bina kho gaya parcel kabhi trace nahi ho sakta.',
  'A <strong>trace</strong> records one request’s path through the system. If you can only see the input and the output, every diagnosis is a guess.':
    'Ek <strong>trace</strong> ek request ka system mein poora raasta record karta hai. Agar aap sirf input aur output dekh sakte hain, toh har diagnosis ek andaaza hai.',
  'The six units below start with a single trace and end with a full view of the system. Each one adds a layer to the one before.':
    'Neeche ke chhe units ek akele trace se shuru hote hain aur system ke poore view par khatam hote hain. Har unit pichhle unit par ek layer jodta hai.',
  'Trace one request':
    'Trace one request',
  'Build a structured trace for one AI request.':
    'Ek AI request ke liye ek structured trace banaiye.',
  'A trace is a timeline of one run, together with the evidence about it.':
    'Trace ek run ki timeline hai, uske saath uske baare mein evidence bhi.',
  'Record the request ID, the model, the prompt version, the retrieved IDs, the tools used, the latency, the tokens and the outcome.':
    'Request ID, model, prompt version, retrieved IDs, use hue tools, latency, tokens aur outcome record kijiye.',
  'Save the trace as JSON.':
    'Trace ko JSON mein save kijiye.',
  'Remove one field. Then ask yourself whether you could still reproduce the incident.':
    'Ek field hata dijiye. Phir sochiye ki kya aap tab bhi incident ko dobara reproduce kar paate.',
  'Trace Schema v1.0.':
    'Trace Schema v1.0.',
  'What is the least evidence you need in order to debug a problem?':
    'Problem debug karne ke liye kam se kam kitna evidence chahiye?',
  'Write down what you need to observe before the production incidents happen, not after.':
    'Production incidents hone se pehle likh lijiye ki aapko kya observe karna hai, baad mein nahi.',
  'Latency and throughput':
    'Latency aur throughput',
  'Measure the latency of each stage, and learn the difference between p50 and p95.':
    'Har stage ki latency measure kijiye, aur p50 aur p95 ka farq samajhiye.',
  'The average latency can hide the slow cases that some users really experience.':
    'Average latency un slow cases ko chhupa sakti hai jo kuch users ko sach mein jhelne padte hain.',
  'Measure the retrieval, reranking, model and tool stages separately.':
    'Retrieval, reranking, model aur tool stages ko alag-alag measure kijiye.',
  'Calculate p50 and p95 for a small run, or for a larger sample if you have one.':
    'Ek chhote run ke liye p50 aur p95 calculate kijiye, ya agar bada sample ho toh uske liye.',
  'Add an artificially slow dependency, and see how it changes p95.':
    'Ek jaan-boojhkar slow dependency jodiye, aur dekhiye ki p95 par uska kya asar padta hai.',
  'Latency Budget plus a p50/p95 report.':
    'Latency Budget aur ek p50/p95 report.',
  'Which stage is responsible for the slowest cases?':
    'Sabse slow cases ke liye kaun sa stage zimmedaar hai?',
  'Service-level objectives (SLOs) should match what users experience, not just what servers report.':
    'Service-level objectives (SLOs) ka match users ke experience se hona chahiye, sirf servers ki report se nahi.',
  'Token and cost telemetry':
    'Token aur cost telemetry',
  'Track input and output tokens, and other costs that vary, for each task.':
    'Har task ke liye input aur output tokens, aur doosre badalne wale costs track kijiye.',
  'Cost is an architecture metric, because the context, the model, the retries and the routing all change what you spend.':
    'Cost ek architecture metric hai, kyunki context, model, retries aur routing sab milkar tay karte hain ki aap kitna kharch karte hain.',
  'When you build the lab, calculate the cost per request using the provider’s current pricing.':
    'Lab banate waqt provider ki abhi ki pricing se har request ki cost calculate kijiye.',
  'Compare two strategies for the model and the context.':
    'Model aur context ki do strategies compare kijiye.',
  'Add retries and a large context, and watch the cost grow.':
    'Retries aur bada context jodiye, aur dekhiye ki cost kaise badhti hai.',
  'Unit Economics Model v1.0.':
    'Unit Economics Model v1.0.',
  'What is the cost per successful task, and not just the cost per call?':
    'Har successful task ki cost kya hai, sirf har call ki nahi?',
  'Conversations with finance get easier when every architecture choice has a cost you can measure.':
    'Finance ke saath baat aasaan ho jaati hai jab har architecture choice ki ek aisi cost ho jise aap measure kar sakein.',
  'Drift and feedback':
    'Drift aur feedback',
  'Notice when quality changes after a change in the data, prompt, model or user behaviour.':
    'Pata lagaiye jab data, prompt, model ya user behaviour badalne ke baad quality badal jaaye.',
  'An AI system can get worse even when no one has changed the code.':
    'Ek AI system tab bhi kharab ho sakta hai jab kisi ne code nahi badla.',
  'Create a baseline evaluation, and compare a later sample against it.':
    'Ek baseline evaluation banaiye, aur baad ke ek sample ko uske saath compare kijiye.',
  'Track the type of complaint, the no-answer rate, escalations and task success.':
    'Complaint ka type, no-answer rate, escalations aur task success track kijiye.',
  'Introduce a changed document format, or a new way users phrase things.':
    'Document ka format badal dijiye, ya users ke baat karne ka koi naya tareeka daaliye.',
  'Drift/Feedback Report.':
    'Drift/Feedback Report.',
  'Which signal tells you that quality has changed, before the complaints pile up?':
    'Kaun sa signal aapko bata deta hai ki quality badli hai, complaints ke dher lagne se pehle?',
  'Signals from live use complement the offline evaluation you did before release.':
    'Live use ke signals us offline evaluation ke saath jude hote hain jo aapne release se pehle kiya tha.',
  'Versioning and rollback':
    'Versioning aur rollback',
  'Give versions to the prompts, models, indexes, schemas and tool contracts.':
    'Prompts, models, indexes, schemas aur tool contracts ko versions dijiye.',
  'If you cannot roll back one component at a time, debugging turns into guesswork.':
    'Agar aap ek-ek component ko rollback nahi kar sakte, toh debugging andaaze ka khel ban jaata hai.',
  'Create version IDs for the prompt, the model, the index and the tool schema.':
    'Prompt, model, index aur tool schema ke liye version IDs banaiye.',
  'Run two versions side by side.':
    'Do versions ko saath-saath chalaiye.',
  'Simulate a bad prompt release, and roll it back.':
    'Ek kharab prompt release simulate kijiye, aur use rollback kijiye.',
  'Version Matrix plus Rollback Procedure.':
    'Version Matrix aur Rollback Procedure.',
  'Can you say exactly what changed?':
    'Kya aap bilkul bata sakte hain ki kya badla?',
  'Versioning is how you control delivery. It is not paperwork.':
    'Versioning se aap delivery ko control karte hain. Yeh paperwork nahi hai.',
  'Production dashboard':
    'Production dashboard',
  'Turn the telemetry into a six-panel view of operations: quality, safety, latency, cost, traffic and failures.':
    'Telemetry ko operations ke six-panel view mein badaliye: quality, safety, latency, cost, traffic aur failures.',
  'A dashboard should answer two questions: “is the system healthy?” and “where do I look next?”':
    'Dashboard ko do sawaalon ka jawaab dena chahiye: “kya system healthy hai?” aur “agla kahan dekhun?”',
  'For each panel, define the metric, the source, the owner and the threshold.':
    'Har panel ke liye metric, source, owner aur threshold tay kijiye.',
  'Create a mock dashboard or a spreadsheet.':
    'Ek mock dashboard ya spreadsheet banaiye.',
  'Remove one signal at a time, and see which incident becomes harder to diagnose.':
    'Ek-ek signal hataiye, aur dekhiye ki kaun sa incident diagnose karna mushkil ho jaata hai.',
  'Six-Panel Observability Specification.':
    'Six-Panel Observability Specification.',
  'Which alerts should wake up a person, and which should only be watched?':
    'Kaun se alerts ko kisi insaan ko jagana chahiye, aur kaun se sirf watch hone chahiye?',
  'A PM is responsible for clarity in operations, just as much as the platform team is.':
    'Operations mein clarity ki zimmedaari PM ki bhi utni hi hai jitni platform team ki.',
  'Cost is an architecture metric':
    'Cost ek architecture metric hai',
  'You can see where the time goes from a trace. The same is true of money. Every token, every search and every call to a tool adds to the bill, so cost is part of how you design the system. It isn’t only something finance checks at the end of the month.':
    'Trace se aap dekh sakte hain ki time kahan jaata hai. Paise ke saath bhi yahi sach hai. Har token, har search aur har tool call bill mein jodta hai, isliye cost system ko design karne ka hissa hai. Woh sirf aisi cheez nahi hai jo finance mahine ke aakhir mein check karta hai.',
  'Model the cost of one user task from start to finish: input tokens, output tokens, embeddings, retrieval, and tool and API calls. Then you can compare two designs before building either.':
    'Ek user task ki cost shuru se aakhir tak model kijiye: input tokens, output tokens, embeddings, retrieval, aur tool aur API calls. Phir aap do designs ko banane se pehle hi compare kar sakte hain.',
  'Some terms you’ll hear are canary release, shadow traffic, rollback and drift. They all come from the same practice, and it’s simple to describe. Change one thing at a time. Let a few users see it first. Keep the old version ready. And keep watching after the release.':
    'Aap kuch terms sunenge, jaise canary release, shadow traffic, rollback aur drift. Yeh sab ek hi practice se aate hain, aur use batana aasaan hai. Ek baar mein ek hi cheez badaliye. Pehle thode se users ko use dikhaiye. Purana version ready rakhiye. Aur release ke baad bhi watch karte rahiye.',
  'Most incidents can be prevented in four ways. Change one variable at a time. Give versions to prompts, models, indexes and tool contracts. Make sure every part can be rolled back. And never let a prompt change skip evaluation. Teams break that last rule most often, because editing a prompt does not feel like a deployment.':
    'Zyadatar incidents chaar tareekon se roke ja sakte hain. Ek baar mein ek hi variable badaliye. Prompts, models, indexes aur tool contracts ko versions dijiye. Pakka kijiye ki har part rollback ho sake. Aur prompt change ko kabhi evaluation skip mat karne dijiye. Teams yeh aakhri rule sabse zyada todti hain, kyunki prompt edit karna deployment jaisa nahi lagta.',
  'Here’s a puzzle to test the idea of drift. Take a moment with it.':
    'Drift ka idea parakhne ke liye ek paheli hai. Thoda waqt lekar sochiye.',
  'Your assistant got slower this week, and nobody deployed anything. Name three things that could have changed.':
    'Aapka assistant is hafte slow ho gaya, aur kisi ne kuch deploy nahi kiya. Teen cheezein bataiye jo badal sakti hain.',
  '1 … 2 … 3 …':
    '1 … 2 … 3 …',
  'Traffic mix, document volume, and the provider’s own response time. None of these are in your repository, which is why they need to be on your dashboard.':
    'Traffic ka mix, document volume, aur provider ka apna response time. Inmein se kuch bhi aapki repository mein nahi hai, isliye inhe aapke dashboard par hona chahiye.',
  'So a wrong answer should never leave you saying “we can’t tell”. A trace shows you the path of each request. Cost is something you design and measure. And a version on every part means any change can be rolled back.':
    'Toh galat jawaab ke baad aapko kabhi “humein nahi pata” nahi kehna padna chahiye. Trace har request ka raasta dikhata hai. Cost aisi cheez hai jise aap design aur measure karte hain. Aur har part ka version hone se koi bhi change rollback ho sakta hai.',
  'Next, in Chapter 31, you’ll look at the same system from an attacker’s side.':
    'Agle Chapter 31 mein aap usi system ko ek attacker ki nazar se dekhenge.',
  'Plan how to watch the tool once it is live':
    'Tool live hone ke baad use watch karne ka plan banaiye',
  'A tool in use can go wrong in ways your tests never saw, and you will only know if you are watching. In this chapter you learned to design a trace that can answer “why was this answer wrong?” afterwards, to treat cost as an engineering number, and to name what must be versioned so a change can be undone. Now you plan six panels for watching Bharat Privacy Guard.':
    'Istemaal mein aaya tool aise tareeke se galat ja sakta hai jo aapke tests ne kabhi dekha hi nahi, aur aapko tabhi pata chalega jab aap watch kar rahe honge. Is chapter mein aapne seekha ki aisa trace kaise design karte hain jo baad mein bata sake ki “yeh jawaab galat kyun tha?”, cost ko engineering number ki tarah kaise dekhte hain, aur kis cheez ka version hona zaroori hai taaki change undo ho sake. Ab aap Bharat Privacy Guard ko watch karne ke liye six panels ka plan banayenge.',
  'Your test harness from Chapter 21, extended in code to save full traces. Then write the plan in the notes box below.':
    'Chapter 21 ka aapka test harness, code mein extend kiya hua taaki woh full traces save kare. Phir plan neeche notes box mein likhiye.',
  'Extend your harness so that every run saves a full trace: the input, each step, each finding, the time, the tokens, the cost and any error. Never put the real personal details into a trace that is shown on a dashboard.':
    'Apna harness extend kijiye taaki har run ek full trace save kare: input, har step, har finding, time, tokens, cost aur koi bhi error. Asli personal details ko kabhi aise trace mein mat daaliye jo dashboard par dikhta hai.',
  'Design six panels: quality, safety, response time, cost, traffic and failures. For every panel, write which data feeds it and how often it is worked out. A panel with no data source is only a wish.':
    'Six panels design kijiye: quality, safety, response time, cost, traffic aur failures. Har panel ke liye likhiye ki use kaun sa data feed karta hai aur woh kitni baar calculate hota hai. Jis panel ka koi data source nahi, woh sirf ek khwaahish hai.',
  'Fill in what each panel shows. Quality: which number, worked out from what. Safety: how often an attack from Chapter 13 gets through. Response time: the median and the slowest, split by stage. Cost: per message and per day, with the parts visible. Traffic: how many messages, and the mix of English, Hindi and Hinglish. Failures: counts by type, not one error rate.':
    'Har panel kya dikhata hai, yeh bhariye. Quality: kaun sa number, kis se calculate hua. Safety: Chapter 13 ka koi attack kitni baar nikal jaata hai. Response time: median aur sabse slow, stage ke hisaab se alag. Cost: har message aur har din ki, parts dikhte hue. Traffic: kitne messages, aur English, Hindi aur Hinglish ka mix. Failures: type ke hisaab se counts, ek akela error rate nahi.',
  'For each panel, write the level that makes you investigate and the level that makes you roll back.':
    'Har panel ke liye woh level likhiye jahan aap investigate karenge aur woh level jahan aap rollback karenge.',
  'List what must be versioned so that a change can be undone: the rules, the model, the instructions, the reference lists and the answer key.':
    'Likhiye ki kis cheez ka version hona zaroori hai taaki change undo ho sake: rules, model, instructions, reference lists aur answer key.',
  'Traces saved by your harness.':
    'Aapke harness ke save kiye hue traces.',
  'Six panels, each with a named data source.':
    'Six panels, har ek ka ek named data source.',
  'An investigation level and a rollback level for every panel.':
    'Har panel ke liye ek investigation level aur ek rollback level.',
  'A list of what is versioned.':
    'Jin cheezon ke versions hain, unki list.',

  /* ---- ch18s: Security and governance: controls around an untrusted model ---- */
  'Security and governance: controls around an untrusted model':
    'Security aur governance: ek untrusted model ke aas-paas controls',
  'Assume the model will be manipulated. The application, the retrieved content, the tools, the identity layer and the data pipeline are all part of the attack surface. You’ll apply least privilege, and build a risk register in which every control has a test.':
    'Maan lijiye ki model ko manipulate kiya jayega. Application, retrieved content, tools, identity layer aur data pipeline, sab attack surface ka hissa hain. Aap least privilege lagayenge, aur ek risk register banayenge jismein har control ka ek test hoga.',
  'Put a malicious instruction inside a document that your own system retrieves. Then test whether it can override the task or pull out a secret.':
    'Ek malicious instruction ko aise document ke andar daaliye jo aapka apna system retrieve karta hai. Phir test kijiye ki kya woh task ko override kar sakti hai ya koi secret nikal sakti hai.',
  'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.':
    'Trust boundaries, least privilege, input validation, secret isolation, audit logging aur confirmation steps jodiye.',
  'Run tests for prompt injection, indirect injection, tool abuse, data leakage and excessive agency.':
    'Prompt injection, indirect injection, tool abuse, data leakage aur excessive agency ke tests chalaiye.',
  'A security report and an AI risk register.':
    'Ek security report aur ek AI risk register.',
  'Explain why retrieved content is untrusted input, to someone who thinks it is simply their own data.':
    'Kisi aise insaan ko samjhaiye jo retrieved content ko bas apna data maanta hai, ki woh untrusted input kyun hai.',
  'Prompt injection has no complete fix':
    'Prompt injection ka koi poora fix nahi hai',
  'Chapter 13 showed you this. This chapter builds the controls around the problem.':
    'Chapter 13 mein aapne yeh dekha tha. Yeh chapter is problem ke aas-paas controls banata hai.',
  'Tools are a security boundary':
    'Tools ek security boundary hain',
  'You learned this in Chapter 25. Least privilege puts it into practice.':
    'Yeh aapne Chapter 25 mein seekha tha. Least privilege ise practice mein laata hai.',
  'Retrieved text can carry attacks':
    'Retrieved text mein attacks aa sakte hain',
  'In Chapter 7.5 you planted one in your own system.':
    'Chapter 7.5 mein aapne apne hi system mein ek attack daala tha.',
  'Prompt injection':
    'Prompt injection',
  'Text that reaches the model as data and gets followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it.':
    'Aisa text jo model tak data ki tarah pahunchta hai aur instruction ki tarah follow ho jaata hai. Model in dono ko bharose se alag nahi kar sakta, isliye boundary ko uske aas-paas enforce karna padta hai.',
  'Indirect injection':
    'Indirect injection',
  'The same attack, arriving through content the system retrieved and not through what the user typed.':
    'Wahi attack, lekin user ke type kiye hue text se nahi, balki system ke retrieve kiye hue content ke raaste se aata hua.',
  'Excessive agency':
    'Excessive agency',
  'Giving a system more permission, reach or independence than its task needs.':
    'Kisi system ko uske task ki zaroorat se zyada permission, reach ya independence dena.',
  'Risk register':
    'Risk register',
  'A table in which every row ends in a test that has been run, and not just in a control that has been described.':
    'Ek table jismein har row ek aise test par khatam hota hai jo chalaya ja chuka hai, sirf ek aise control par nahi jo bas describe kiya gaya hai.',
  'Explain why retrieved content is untrusted input, whoever owns the document.':
    'Samjha paana ki retrieved content untrusted input kyun hai, document ka owner koi bhi ho.',
  'Apply least privilege to an agent, and show what breaks.':
    'Ek agent par least privilege lagana, aur dikha paana ki kya toot-ta hai.',
  'Produce a risk register in which every control has evidence next to it.':
    'Aisa risk register banana jismein har control ke saath evidence ho.',
  'Bring your injection audit from Chapter 13 and the tool classification from Chapter 27.':
    'Chapter 13 ka apna injection audit aur Chapter 27 ki tool classification saath rakhiye.',
  'In the last chapter you learned to watch a live system. Now we ask what happens when someone tries to misuse it. The answer starts with a plain fact: the model gives everything it reads the same level of trust.':
    'Pichhle chapter mein aapne seekha ki live system ko kaise watch karte hain. Ab hum poochte hain ki koi use galat tareeke se use karne ki koshish kare toh kya hoga. Jawaab ek saade fact se shuru hota hai: model jo bhi padhta hai, us sab par barabar bharosa karta hai.',
  'Whether that is dangerous depends on the system around the model: what it is given, and what it is allowed to do next. That’s why most of AI security is about the system, and not about the model.':
    'Yeh khatarnak hai ya nahi, yeh model ke aas-paas ke system par depend karta hai: use kya diya jaata hai, aur aage use kya karne ki ijaazat hai. Isliye AI security ka zyadatar hissa system ke baare mein hota hai, model ke baare mein nahi.',
  'Here’s an everyday picture. Someone slips a note into a stack of paperwork that says “approve this one without checking”. The clerk can read perfectly well. The problem is that nothing in the process separates an instruction from a document.':
    'Ek roz ki tasveer dekhiye. Kisi ne kaagzaat ke dher mein ek parchi sarka di jis par likha hai “ise bina check kiye approve kar do”. Clerk bilkul achhe se padh sakta hai. Dikkat yeh hai ki process mein kuch bhi instruction ko document se alag nahi karta.',
  'Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the system that assembles the context must enforce the boundary. Asking nicely in the system prompt is not enough.':
    'Prompt injection ek input trust problem hai. Model bharose se instruction aur data mein farq nahi kar sakta, isliye jo system context assemble karta hai, usi ko boundary enforce karni padegi. System prompt mein pyaar se maang lena kaafi nahi hai.',
  'The eight units below go from the first attack, through the controls that stop it, to the checklist that decides a release.':
    'Neeche ke aath units pehle attack se shuru hote hain, use rokne wale controls se guzarte hain, aur us checklist par khatam hote hain jo release ka faisla karti hai.',
  'Understand direct and indirect prompt injection as attacks that use input you cannot trust.':
    'Direct aur indirect prompt injection ko aise attacks ki tarah samjhiye jo aise input ka use karte hain jis par bharosa nahi kiya ja sakta.',
  'Instructions hidden in what the user typed, or in retrieved content, can compete with your application’s own instructions.':
    'User ke type kiye hue text mein, ya retrieved content mein chhupi instructions aapki application ki apni instructions se takra sakti hain.',
  'Place malicious instructions in a document, and test the RAG assistant with it.':
    'Ek document mein malicious instructions daaliye, aur RAG assistant ko usi se test kijiye.',
  'Keep your trusted control instructions apart from untrusted evidence.':
    'Apni trusted control instructions ko untrusted evidence se alag rakhiye.',
  'Try to make the model reveal a secret, or use a tool, through retrieved text.':
    'Retrieved text ke zariye model se koi secret reveal karwane ya koi tool chalwane ki koshish kijiye.',
  'Prompt Injection Test Report.':
    'Prompt Injection Test Report.',
  'What stopped the attack: the model’s own behaviour, or a policy in the application?':
    'Attack ko kisne roka: model ke apne behaviour ne, ya application ki policy ne?',
  'Never describe the prompt text alone as a security boundary.':
    'Sirf prompt text ko kabhi security boundary mat kahiye.',
  'Sensitive information disclosure':
    'Sensitive information disclosure',
  'Protect secrets, PII and confidential data in prompts, in retrieval and in traces.':
    'Secrets, PII aur confidential data ko prompts mein, retrieval mein aur traces mein protect kijiye.',
  'A model can protect information only if the application controls what the model receives and what it can return.':
    'Model information ko tabhi protect kar sakta hai jab application control kare ki model ko kya milta hai aur woh kya return kar sakta hai.',
  'Create a test collection of documents with made-up sensitive fields.':
    'Made-up sensitive fields wale documents ka ek test collection banaiye.',
  'Filter or redact before the model sees anything, and log each access decision.':
    'Model kuch bhi dekhe, usse pehle filter ya redact kijiye, aur har access decision ko log kijiye.',
  'Ask for another user’s data, in plain language and through tool calls.':
    'Kisi doosre user ka data maangiye, plain language mein bhi aur tool calls ke zariye bhi.',
  'Data Leakage Test Matrix.':
    'Data Leakage Test Matrix.',
  'Where is authorization enforced?':
    'Authorization kahan enforce hoti hai?',
  'Map privacy requirements to the paths the data actually takes. Policy documents alone are not enough.':
    'Privacy requirements ko un raaston se map kijiye jin par data asal mein chalta hai. Sirf policy documents kaafi nahi hain.',
  'Improper output handling':
    'Improper output handling',
  'Check the model’s output before you pass it on to other systems.':
    'Model ke output ko doosre systems tak bhejne se pehle check kijiye.',
  'Generated text becomes dangerous when another system treats it as a trusted command, as SQL, as HTML or as business data.':
    'Generated text tab khatarnak ho jaata hai jab koi doosra system use trusted command, SQL, HTML ya business data maan leta hai.',
  'Create a structured output, and validate it against a list of allowed values.':
    'Ek structured output banaiye, aur use allowed values ki list ke against validate kijiye.',
  'Use allowlists and typed interfaces before anything is executed.':
    'Kuch bhi execute hone se pehle allowlists aur typed interfaces ka use kijiye.',
  'Inject malicious strings into the generated fields.':
    'Generated fields mein malicious strings daaliye.',
  'Output Validation Checklist plus tests.':
    'Output Validation Checklist aur tests.',
  'Which downstream component could interpret the output as an instruction?':
    'Kaun sa downstream component output ko instruction ki tarah padh sakta hai?',
  'Treat model output as untrusted input.':
    'Model output ko untrusted input maniye.',
  'Limit the tools and actions that an autonomous system can use.':
    'Un tools aur actions ko limit kijiye jo ek autonomous system use kar sakta hai.',
  'The more permissions a system has, the bigger the damage when something goes wrong.':
    'System ke paas jitni zyada permissions hongi, kuch galat hone par nuksaan utna bada hoga.',
  'Classify each tool by how much privilege it needs and whether its actions can be undone.':
    'Har tool ko classify kijiye ki use kitne privilege chahiye aur uske actions undo ho sakte hain ya nahi.',
  'Remove the tools it does not need, and compare task success before and after.':
    'Jo tools zaroori nahi hain unhe hataiye, aur pehle aur baad task success compare kijiye.',
  'Try a task that asks for an action that cannot be undone.':
    'Aisa task try kijiye jo aisi action maangta hai jo undo nahi ho sakti.',
  'Agency Permission Matrix.':
    'Agency Permission Matrix.',
  'What is the worst damage if the model is wrong?':
    'Agar model galat ho toh sabse bada nuksaan kya hoga?',
  'How much freedom the system gets should depend on the business risk.':
    'System ko kitni azaadi milti hai, yeh business risk par depend karna chahiye.',
  'Retrieval authorization':
    'Retrieval authorization',
  'Enforce ACLs (who may see what) and tenant boundaries before evidence reaches the model.':
    'Evidence model tak pahunchne se pehle ACLs (kaun kya dekh sakta hai) aur tenant boundaries enforce kijiye.',
  'Retrieving the right content for the wrong tenant is still a security breach.':
    'Galat tenant ke liye sahi content retrieve karna bhi ek security breach hai.',
  'Create two users and two groups of documents.':
    'Do users aur documents ke do groups banaiye.',
  'Apply the metadata filters on the server side.':
    'Metadata filters server side par lagaiye.',
  'Try to retrieve across tenants, and to retrieve with permissions that are out of date.':
    'Tenants ke beech retrieve karne ki koshish kijiye, aur purani permissions ke saath retrieve karne ki bhi.',
  'ACL Retrieval Test Report.':
    'ACL Retrieval Test Report.',
  'Can the model ever see evidence it is not authorized to access?':
    'Kya model kabhi aisa evidence dekh sakta hai jise dekhne ki use authorization nahi hai?',
  'Don’t make “remembering” the authorization rules the model’s job, as your only control.':
    'Authorization rules “yaad rakhna” model ka kaam mat banaiye, jab woh aapka akela control ho.',
  'Audit logging':
    'Audit logging',
  'Capture enough evidence to rebuild what happened in any action that matters for security.':
    'Itna evidence capture kijiye ki security ke liye zaroori kisi bhi action mein jo hua, use dobara banaya ja sake.',
  'An audit trail should show who did what, when, under which policy, with which tool, and what happened.':
    'Audit trail ko dikhana chahiye ki kisne kya kiya, kab, kaun si policy ke tahat, kaun se tool se, aur kya hua.',
  'Design an audit record for one tool action.':
    'Ek tool action ke liye ek audit record design kijiye.',
  'Write the approval event and the execution event separately.':
    'Approval event aur execution event ko alag-alag likhiye.',
  'Change the payload after it was approved, and check that the mismatch is visible.':
    'Approval ke baad payload badaliye, aur check kijiye ki mismatch dikhta hai.',
  'Audit Log Schema plus a sample trail.':
    'Audit Log Schema aur ek sample trail.',
  'Could someone responding to an incident reconstruct the action?':
    'Kya incident par kaam karne wala koi insaan us action ko reconstruct kar sakta hai?',
  'Being able to audit is part of being ready for production.':
    'Audit kar paana production ke liye ready hone ka hissa hai.',
  'Governance and risk register':
    'Governance aur risk register',
  'Turn security and AI risks into owners, controls and evidence.':
    'Security aur AI risks ko owners, controls aur evidence mein badaliye.',
  'Governance becomes useful when every risk has a control you can test, and an owner.':
    'Governance tab kaam ki ban jaati hai jab har risk ka ek aisa control ho jise test kiya ja sake, aur ek owner ho.',
  'Create fields for the risk, the impact, the likelihood, the control, the owner, the evidence and the remaining risk.':
    'Risk, impact, likelihood, control, owner, evidence aur bache hue risk ke liye fields banaiye.',
  'Review the register against the architecture of your capstone.':
    'Register ko apne capstone ke architecture ke saath review kijiye.',
  'Mark one control “policy only”, and ask what evidence is missing.':
    'Ek control ko “policy only” mark kijiye, aur poochhiye ki kaun sa evidence missing hai.',
  'AI Risk Register.':
    'AI Risk Register.',
  'Which risks are still left after the controls?':
    'Controls ke baad kaun se risks abhi bhi bache hain?',
  'A risk register is a working tool, not a compliance decoration.':
    'Risk register ek kaam ka tool hai, compliance ki sajaavat nahi.',
  'Security release gate':
    'Security release gate',
  'Turn red-team findings into release criteria.':
    'Red-team findings ko release criteria mein badaliye.',
  'Security tests must block a release when the remaining risk is above the agreed threshold.':
    'Jab bacha hua risk tay kiye hue threshold se upar ho, tab security tests ko release rokna chahiye.',
  'Define the mandatory checks for injection, leakage, authorization and unsafe actions.':
    'Injection, leakage, authorization aur unsafe actions ke liye mandatory checks tay kijiye.',
  'Run the test suite before and after a change of prompt or model.':
    'Prompt ya model badalne se pehle aur baad test suite chalaiye.',
  'Create a change that improves quality but weakens security.':
    'Aisa change banaiye jo quality badhaye lekin security kamzor kare.',
  'Security Go/No-Go Checklist.':
    'Security Go/No-Go Checklist.',
  'What counts as an automatic blocker?':
    'Automatic blocker kise maana jaayega?',
  'Security belongs in the same release process as quality and cost.':
    'Security ko wahi release process chahiye jismein quality aur cost hain.',
  'Least privilege for agents':
    'Agents ke liye least privilege',
  'Least privilege means giving something only the access it needs to do its job, and nothing more. For an agent, that mostly means tools.':
    'Least privilege ka matlab hai kisi ko sirf utna access dena jitna uske kaam ke liye zaroori hai, aur usse zyada nahi. Ek agent ke liye iska matlab zyadatar tools hota hai.',
  'Apply least privilege to agents. If an agent has a tool it never needs, an attacker can persuade it to use that tool.':
    'Agents par least privilege lagaiye. Agar kisi agent ke paas aisa tool hai jiski use kabhi zaroorat nahi, toh attacker use us tool ko use karne ke liye manwa sakta hai.',
  'Controls are only half the story, because each one needs proof. The table pairs each risk with a control, and with the evidence that shows the control works.':
    'Controls kahani ka sirf aadha hissa hain, kyunki har control ko saboot chahiye. Table har risk ko ek control ke saath jodta hai, aur us evidence ke saath jo dikhata hai ki control kaam karta hai.',
  'Risk':
    'Risk',
  'Example control':
    'Example control',
  'The evidence that it works':
    'Woh evidence jo dikhata hai ki control kaam karta hai',
  'Content separation, tool allowlist, confirmation':
    'Content separation, tool allowlist, confirmation',
  'Red-team test results':
    'Red-team test results',
  'Data leakage':
    'Data leakage',
  'Access-aware retrieval, redaction, log controls':
    'Access-aware retrieval, redaction, log controls',
  'Access tests and trace samples':
    'Access tests aur trace samples',
  'Least privilege plus approval gates':
    'Least privilege aur approval gates',
  'Tool policy and approval logs':
    'Tool policy aur approval logs',
  'Model drift or deprecation':
    'Model drift ya deprecation',
  'Versioning plus a regression suite':
    'Versioning aur ek regression suite',
  'Release and evaluation report':
    'Release aur evaluation report',
  'Unsafe output':
    'Unsafe output',
  'Policy filter and human escalation':
    'Policy filter aur human escalation',
  'Safety test set results':
    'Safety test set results',
  'Test every control':
    'Har control ko test kijiye',
  'A safeguard nobody has tested only exists on paper. Next to each safeguard, write the test that proves it works, and run it.':
    'Jis safeguard ko kisi ne test nahi kiya, woh sirf kaagaz par hai. Har safeguard ke saath woh test likhiye jo saabit kare ki woh kaam karta hai, aur use chalaiye.',
  'Try this with something from your own workplace.':
    'Yeh apne hi workplace ki kisi cheez ke saath try kijiye.',
  'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.':
    'Ek aisa control chuniye jo aapka organisation kehta hai ki uske paas hai. Likhiye ki kaun sa evidence saabit karega ki woh kaam karta hai, aur woh evidence hai ya nahi.',
  'The control … the evidence would be … it exists / does not exist because …':
    'Control … evidence yeh hoga … woh hai / nahi hai kyunki …',
  'The gap between the claim and the evidence is your real risk. A risk register exists to track that gap.':
    'Daave aur evidence ke beech ka gap hi aapka asli risk hai. Risk register isi gap ko track karne ke liye hota hai.',
  'To sum up: the model trusts everything it reads, so the system around it has to draw the lines. Retrieved content is untrusted input. Give every agent only the tools it needs. And write a test next to every control, so that your register holds evidence and not just good intentions.':
    'Toh seedhi baat yeh hai: model jo bhi padhta hai us par bharosa karta hai, isliye uske aas-paas ka system hi lakeerein khinchta hai. Retrieved content untrusted input hai. Har agent ko sirf utne tools dijiye jitne uski zaroorat hai. Aur har control ke saath ek test likhiye, taaki aapke register mein sirf achhi niyat nahi, evidence bhi ho.',
  'Next, in Chapter 32, you’ll turn this technical system into a product specification.':
    'Agle Chapter 32 mein aap is technical system ko ek product specification mein badlenge.',
  'Write the risk register, with a test for every control':
    'Risk register likhiye, har control ke test ke saath',
  'A risk register that ends in controls is only a list of good intentions. In this chapter you learned why retrieved text is untrusted input whoever owns it, how to apply least privilege to an agent, and to put evidence next to every control. Now you write the risk register for Bharat Privacy Guard.':
    'Jo risk register sirf controls par khatam ho, woh bas achhe iraadon ki list hai. Is chapter mein aapne seekha ki retrieved text untrusted input kyun hai, chahe uska owner koi bhi ho, agent par least privilege kaise lagate hain, aur har control ke saath evidence kaise rakhte hain. Ab aap Bharat Privacy Guard ke liye risk register likhenge.',
  'Written only. The register draws on evidence from your earlier chapters. No new code is needed.':
    'Sirf likhna hai. Register aapke pichhle chapters ke evidence par tika hai. Naya code nahi chahiye.',
  'For each risk, write eight things: the asset (what is at stake), the threat, the impact, how likely it is, the control, the owner, the test, and the risk that remains.':
    'Har risk ke liye aath cheezein likhiye: asset (kya daav par hai), threat, impact, kitna likely hai, control, owner, test, aur jo risk bacha rehta hai.',
  'Include at least these eight risks: a missed Aadhaar number; a false alarm that blocks a real message; an attack hidden in the text reaching the model; the provider keeping your data; the model provider going down; the reference lists going out of date; the logs storing raw personal data; and a person with more access than they need.':
    'Kam se kam yeh aath risks rakhiye: ek chhoota hua Aadhaar number; ek false alarm jo asli message ko block kar de; text mein chhupa ek attack jo model tak pahunch jaaye; provider ka aapka data rakh lena; model provider ka down ho jaana; reference lists ka purani ho jaana; logs mein raw personal data store hona; aur kisi insaan ke paas zaroorat se zyada access hona.',
  'For every control, write the test that shows it works, and run that test wherever you can. A control with no test is only an intention.':
    'Har control ke liye woh test likhiye jo dikhaye ki woh kaam karta hai, aur jahan ho sake woh test chalaiye. Jis control ka test nahi, woh sirf ek iraada hai.',
  'Apply least privilege to the tool. List what each part can reach, remove everything it does not need, and say what breaks.':
    'Tool par least privilege lagaiye. Likhiye ki har part kya-kya reach kar sakta hai, jo zaroori nahi use hataiye, aur bataiye ki kya toot-ta hai.',
  'Write two lines on why text retrieved from your own reference lists must still be treated as untrusted input.':
    'Do lines likhiye ki aapki apni reference lists se retrieve hua text bhi untrusted input kyun maana jaana chahiye.',
  'A register of at least eight risks with all eight columns filled in.':
    'Kam se kam aath risks ka ek register, jismein aathon columns bhare hon.',
  'A test for every control, with the results of those you ran.':
    'Har control ke liye ek test, aur jo tests aapne chalaye unke results.',
  'A least-privilege list and what broke when you removed access.':
    'Ek least-privilege list, aur access hatane par kya toota.',
  'Two lines on why retrieved text is untrusted.':
    'Do lines ki retrieved text untrusted kyun hai.',

  /* ---- ch19pm: AI product management: specs for a probabilistic system ---- */
  'AI product management: specs for a probabilistic system':
    'AI product management: ek probabilistic system ke liye specs',
  'An AI feature cannot promise the same output every time. So its spec must say how often it succeeds, on which test set, and what happens the rest of the time. You’ll write acceptance criteria as ranges, keep different kinds of metrics apart, and design the interface states.':
    'Ek AI feature har baar same output ka vaada nahi kar sakta. Isliye uski spec mein likhna padta hai ki woh kitni baar succeed karta hai, kis test set par, aur baaki waqt kya hota hai. Aap acceptance criteria ko ranges ki tarah likhenge, alag-alag tarah ke metrics ko alag rakhenge, aur interface states design karenge.',
  'Take “return the correct document” and turn it into an acceptance criterion that you could actually test.':
    '“Sahi document return karo” ko ek aise acceptance criterion mein badaliye jise aap sach mein test kar sakein.',
  'Write a compact AI PRD. Cover the problem, the baseline, the scope, the context, the tools, the failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.':
    'Ek compact AI PRD likhiye. Usmein problem, baseline, scope, context, tools, failure modes, human role, evaluation, safety, latency, cost, rollout aur rollback cover kijiye.',
  'Attack it with three scenarios: a wrong answer, an over-refusal, and a harmful action.':
    'Ispar teen scenarios se attack kijiye: ek galat jawaab, ek over-refusal, aur ek harmful action.',
  'An AI PRD, a release gate and a metric map.':
    'Ek AI PRD, ek release gate aur ek metric map.',
  'An engineer can build from it, and a leader can understand the trade-off it makes.':
    'Ek engineer isse build kar sake, aur ek leader samajh sake ki yeh kaun sa trade-off kar rahi hai.',
  'Quality is a measured number against a test set':
    'Quality ek test set ke against measure kiya hua number hai',
  'Chapter 29 built the gate that this PRD refers to.':
    'Chapter 29 ne woh gate banaya tha jiska yeh PRD zikr karta hai.',
  'Failure costs differ by use case':
    'Failure ki cost har use case mein alag hoti hai',
  'You saw this in Chapter 6. Choosing which failure to accept is a product decision.':
    'Yeh aapne Chapter 6 mein dekha tha. Kaun sa failure accept karna hai, yeh ek product decision hai.',
  'What the user sees when it is wrong':
    'Galat hone par user ko kya dikhta hai',
  'Chapter 20 designed the failure states.':
    'Chapter 20 ne failure states design kiye the.',
  'AI acceptance criterion':
    'AI acceptance criterion',
  'A metric, a named test set and a stated tolerance. “Always correct” is not something you can hold a probabilistic system to.':
    'Ek metric, ek named test set aur ek tolerance jo likhi gayi ho. “Hamesha sahi” aisi cheez nahi hai jiske liye aap ek probabilistic system ko zimmedaar thehra sakein.',
  'Product metric':
    'Product metric',
  'What the user achieved. Keep it separate from system quality metrics and from operating cost, because mixing them leaves a dashboard unable to answer anything.':
    'User ne kya haasil kiya. Ise system quality metrics aur operating cost se alag rakhiye, kyunki inhe milane se dashboard kisi sawaal ka jawaab nahi de paata.',
  'Rollback trigger':
    'Rollback trigger',
  'The specific, observable condition that causes a change to be withdrawn. Write it so that someone can act on it without you.':
    'Woh khaas, dekhi ja sakne wali condition jiske hone par kisi change ko wapas le liya jaata hai. Ise aise likhiye ki koi aapke bina bhi us par action le sake.',
  'Non-goal':
    'Non-goal',
  'Something you have deliberately decided not to do, written down so that nobody can assume it back in later.':
    'Ek cheez jise aapne jaan-boojhkar na karne ka faisla kiya hai, aur likh di hai, taaki koi baad mein use chupke se maan na le.',
  'Write an acceptance criterion as a rate with a tolerance, not as a promise.':
    'Acceptance criterion ko vaade ki tarah nahi, tolerance wale rate ki tarah likh paana.',
  'Keep business outcomes, model metrics and operating metrics apart.':
    'Business outcomes, model metrics aur operating metrics ko alag rakh paana.',
  'Design the three interface states that an AI feature needs.':
    'Un teen interface states ko design kar paana jo ek AI feature ko chahiye.',
  'Bring your release gate from Chapter 29 and the four interface states from Chapter 20.':
    'Chapter 29 ka apna release gate aur Chapter 20 ke chaar interface states saath rakhiye.',
  'So far you’ve built, measured, watched and secured an AI system. Now you write the spec that ties it together. And the first lesson is a hard one: “it returns the right document” is a promise no probabilistic system can keep.':
    'Ab tak aapne ek AI system banaya, measure kiya, watch kiya aur secure kiya. Ab aap woh spec likhenge jo sab kuch jodti hai. Aur pehla sabak thoda kadva hai: “yeh sahi document return karta hai” ek aisa vaada hai jo koi probabilistic system nahi nibha sakta.',
  'So write down something you can keep. How often does it return the right document? Measured on which cases? And what does the system do the rest of the time? That rest is never zero.':
    'Toh woh likhiye jo aap nibha sakein. Yeh sahi document kitni baar return karta hai? Kin cases par measure karke? Aur baaki waqt system kya karta hai? Woh baaki waqt kabhi zero nahi hota.',
  'Here’s an everyday comparison. A railway can’t promise a train at exactly 9:04. So it publishes the share of trains that arrive within a few minutes of schedule, measured every month. You can plan your day around that number.':
    'Ek roz ki misaal lijiye. Ek railway yeh vaada nahi kar sakti ki train theek 9:04 par aayegi. Isliye woh har mahine yeh publish karti hai ki kitni trains schedule se kuch minute ke andar pahunchi. Us number ke hisaab se aap apna din plan kar sakte hain.',
  'For an AI feature, “done” means a measured success rate within a tolerance, not one fixed output.':
    'Ek AI feature ke liye “done” ka matlab hai ek tolerance ke andar measure kiya hua success rate, ek fixed output nahi.',
  'The seven units below start from the problem and end with the full PRD. Each one gives you something you’ll use in the next.':
    'Neeche ke saat units problem se shuru hote hain aur poore PRD par khatam hote hain. Har unit aapko kuch aisa deta hai jo agle mein kaam aata hai.',
  'AI problem framing':
    'AI problem framing',
  'Decide whether AI is justified, and define the outcome the user wants.':
    'Tay kijiye ki AI ka use theek hai ya nahi, aur user ko kya outcome chahiye woh define kijiye.',
  'Start from the workflow and the pain, not from the model.':
    'Workflow aur pain se shuru kijiye, model se nahi.',
  'Write down the current process, the user’s pain, the baseline and an outcome you can measure.':
    'Abhi ka process, user ka pain, baseline aur ek aisa outcome likhiye jise measure kiya ja sake.',
  'Where you can, build a baseline that does not use AI.':
    'Jahan ho sake, ek aisa baseline banaiye jo AI use nahi karta.',
  'Compare your AI idea with a deterministic alternative, one that always gives the same output for the same input.':
    'Apne AI idea ko ek deterministic alternative se compare kijiye, jo same input par hamesha same output deta hai.',
  'Problem Framing One-Pager.':
    'Problem Framing One-Pager.',
  'Why AI, and not ordinary software?':
    'AI hi kyun, aam software kyun nahi?',
  'This stops you from starting with “AI-first” solutions.':
    'Isse aap “AI-first” solutions se shuru karne se bachte hain.',
  'AI acceptance criteria':
    'AI acceptance criteria',
  'Turn a vague idea of “correctness” into thresholds you can measure.':
    '“Correctness” ke dhundhle idea ko aise thresholds mein badaliye jinhe measure kiya ja sake.',
  'AI output varies, so “done” must describe a spread of results and a tolerance.':
    'AI output badalta rehta hai, isliye “done” mein results ka ek spread aur ek tolerance likhna padta hai.',
  'Write criteria for retrieval, generation, safety, latency and cost.':
    'Retrieval, generation, safety, latency aur cost ke liye criteria likhiye.',
  'Link each criterion to a test set and a way of measuring.':
    'Har criterion ko ek test set aur measure karne ke ek tareeke se jodiye.',
  'Create a case where quality improves but latency breaks the SLO, the response time you promised.':
    'Aisa case banaiye jismein quality improve ho lekin latency SLO tod de, jis response time ka aapne vaada kiya tha.',
  'AI Acceptance Criteria Sheet.':
    'AI Acceptance Criteria Sheet.',
  'Can engineering run the test without asking what “good” means?':
    'Kya engineering yeh pooche bina test chala sakti hai ki “good” ka matlab kya hai?',
  'Acceptance criteria are the contract between product and engineering.':
    'Acceptance criteria product aur engineering ke beech ka contract hain.',
  'Failure-first UX':
    'Failure-first UX',
  'Design around uncertainty, ambiguity and failure, instead of hiding them.':
    'Uncertainty, ambiguity aur failure ko chhupane ke bajaye unke aas-paas design kijiye.',
  'A good AI experience helps users understand the system’s limits, and what to do about them.':
    'Ek achha AI experience users ko system ki limits samajhne mein madad karta hai, aur yeh bhi ki unka kya karna hai.',
  'Design a confident state, an uncertain state and a failed state.':
    'Ek confident state, ek uncertain state aur ek failed state design kijiye.',
  'Add citations, a way to ask for clarification, and fallback paths.':
    'Citations, clarification maangne ka tareeka, aur fallback paths jodiye.',
  'Remove the citations and the uncertainty cues, and compare how users interpret the answers.':
    'Citations aur uncertainty cues hataiye, aur compare kijiye ki users jawaab ko kaise samajhte hain.',
  'Failure-First UX Flow.':
    'Failure-First UX Flow.',
  'What does the user do when the AI cannot answer?':
    'Jab AI jawaab nahi de paata, tab user kya karta hai?',
  'The fallback is part of the feature, not an afterthought.':
    'Fallback feature ka hissa hai, baad mein socha hua kaam nahi.',
  'Human-in-the-loop UX':
    'Human-in-the-loop UX',
  'Specify when a person reviews, approves, edits or overrides the AI’s output.':
    'Likhiye ki kab ek insaan AI ke output ko review, approve, edit ya override karta hai.',
  'Human involvement should be aimed at the high-risk or unclear moments.':
    'Insaan ko high-risk ya unclear moments par involve karna chahiye.',
  'Map the decision points and what the person is asked to approve.':
    'Decision points map kijiye, aur yeh bhi ki insaan se kya approve karwaya ja raha hai.',
  'Measure how long reviews take and how often people override the AI.':
    'Measure kijiye ki reviews mein kitna time lagta hai aur log kitni baar AI ko override karte hain.',
  'Create an approval that no longer matches the action it approves.':
    'Aisa approval banaiye jo us action se ab match nahi karta jise woh approve karta hai.',
  'HITL Decision Map.':
    'HITL Decision Map.',
  'What does the human add that nothing else can?':
    'Insaan aisa kya deta hai jo aur koi nahi de sakta?',
  'Human review should reduce risk without turning into meaningless rubber-stamping.':
    'Human review ko risk kam karna chahiye, bina bekaar rubber-stamping bane.',
  'Metrics and experimentation':
    'Metrics aur experimentation',
  'Keep business outcomes apart from model metrics and operating metrics.':
    'Business outcomes ko model metrics aur operating metrics se alag rakhiye.',
  'Task completion is not the same as groundedness, and both are different from cost.':
    'Task completion groundedness jaisa nahi hai, aur dono cost se alag hain.',
  'Create a metric tree with layers for business, quality, safety, latency and cost.':
    'Business, quality, safety, latency aur cost ki layers wala ek metric tree banaiye.',
  'Where it fits, define an A/B test or another controlled comparison.':
    'Jahan fit ho, ek A/B test ya koi aur controlled comparison define kijiye.',
  'Improve a model metric while making the business outcome worse.':
    'Model metric ko improve kijiye, jabki business outcome kharab ho raha ho.',
  'Metric Map plus Experiment Plan.':
    'Metric Map aur Experiment Plan.',
  'Which metric decides whether the product is useful?':
    'Kaun sa metric tay karta hai ki product kaam ka hai ya nahi?',
  'A PM must stop teams from optimizing a stand-in for the real goal.':
    'Ek PM ko teams ko asli goal ke badle uske kisi stand-in ko optimize karne se rokna padta hai.',
  'Unit economics':
    'Unit economics',
  'Model the costs of tokens, retrieval, tools, infrastructure and human review.':
    'Tokens, retrieval, tools, infrastructure aur human review ki costs ko model kijiye.',
  'The real unit is often the cost of a successful task, not the cost of a request.':
    'Asli unit aksar ek successful task ki cost hoti hai, ek request ki nahi.',
  'Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.':
    'Ek spreadsheet banaiye jismein volume, token usage, model cost, retries, tools aur review time ho.',
  'Compare scenarios for model routing and for caching.':
    'Model routing aur caching ke scenarios compare kijiye.',
  'Increase the context or the retry rate, and see what happens to the margin.':
    'Context ya retry rate badhaiye, aur dekhiye ki margin par kya asar padta hai.',
  'AI Unit Economics Model.':
    'AI Unit Economics Model.',
  'What happens at 10× volume?':
    '10× volume par kya hota hai?',
  'Cost belongs in architecture decisions from day one.':
    'Cost ko pehle din se architecture decisions mein hona chahiye.',
  'AI PRD and release plan':
    'AI PRD aur release plan',
  'Write a PRD that an engineer can implement and a leader can evaluate.':
    'Aisa PRD likhiye jise ek engineer implement kar sake aur ek leader evaluate kar sake.',
  'An AI PRD must specify the context, the behaviour when it fails, the evaluation and the operating limits.':
    'Ek AI PRD mein context, fail hone par behaviour, evaluation aur operating limits likhni padti hain.',
  'Complete the problem, scope, inputs, context, tools, model behaviour, failures, human role, metrics, safety, latency, cost, rollout and rollback.':
    'Problem, scope, inputs, context, tools, model behaviour, failures, human role, metrics, safety, latency, cost, rollout aur rollback poore kijiye.',
  'Review the PRD against the system you built.':
    'PRD ko us system ke against review kijiye jo aapne banaya.',
  'Ask a reviewer to find a failure your PRD did not specify.':
    'Kisi reviewer se kahiye ki woh aisa failure dhundhe jo aapke PRD mein likha nahi tha.',
  'AI PRD plus Release Gate plus Metric Map.':
    'AI PRD, Release Gate aur Metric Map.',
  'Can the PRD answer “what happens when it is wrong?”':
    'Kya PRD “jab yeh galat ho toh kya hota hai?” ka jawaab de sakta hai?',
  'This becomes one of the strongest artifacts in your portfolio.':
    'Yeh aapke portfolio ke sabse mazboot artifacts mein se ek ban jaata hai.',
  'A spec outline':
    'Spec ka outline',
  'Here is an outline you can copy. Each line is a question that someone will ask you later, and it’s cheaper to answer it now.':
    'Yeh ek outline hai jise aap copy kar sakte hain. Har line ek aisa sawaal hai jo koi aapse baad mein poochega, aur use abhi jawaab dena sasta padta hai.',
  'The user’s problem, and how it is handled today without AI.':
    'User ki problem, aur AI ke bina aaj yeh kaise handle hoti hai.',
  'Why AI is the right answer to it — and what is explicitly out of scope.':
    'AI iska sahi jawaab kyun hai — aur kya saaf taur par scope ke bahar hai.',
  'What goes in: the inputs, the context, the tools it may call.':
    'Andar kya jaata hai: inputs, context, aur woh tools jinhe woh call kar sakta hai.',
  'How it fails, and what a person does when it does.':
    'Yeh kaise fail hota hai, aur jab hota hai toh insaan kya karta hai.',
  'The test set, and the scores that count as good enough.':
    'Test set, aur woh scores jo kaafi achhe maane jaate hain.',
  'Safety limits, the speed it must hold, the cost it must stay under.':
    'Safety limits, jis speed ko use banaye rakhna hai, aur jis cost ke neeche rehna hai.',
  'How it rolls out, what you watch afterwards, and what triggers pulling it back.':
    'Yeh kaise roll out hota hai, uske baad aap kya watch karte hain, aur use wapas kheenchne ka trigger kya hai.',
  'Whose name is on it.':
    'Isse kiska naam juda hai.',
  'Keep metric types separate':
    'Metric types ko alag rakhiye',
  'Once the outline is filled in, the next trap is the metrics. They look alike on a dashboard, but they answer different questions.':
    'Outline bhar jaane ke baad agla jaal metrics ka hai. Dashboard par woh ek jaise dikhte hain, lekin woh alag-alag sawaalon ka jawaab dete hain.',
  'Keep the metric types apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. A dashboard that mixes them cannot answer any question clearly.':
    'Metric types ko alag rakhiye. Task completion rate ek product outcome hai. Groundedness ek system quality metric hai. Token cost ek operating metric hai. Complaint rate ek user signal hai. Jo dashboard inhe milata hai woh kisi bhi sawaal ka saaf jawaab nahi de sakta.',
  'Metrics also feed the big decisions. The table lists four of them, the business question behind each, and the AI evidence that settles it.':
    'Metrics bade decisions mein bhi kaam aate hain. Table mein chaar decisions hain, har ek ke peeche ka business sawaal, aur woh AI evidence jo use tay karta hai.',
  'The business question':
    'Business ka sawaal',
  'The AI evidence that settles it':
    'Woh AI evidence jo ise tay karta hai',
  'Build or buy':
    'Build ya buy',
  'Will it create enough value?':
    'Kya yeh kaafi value banayega?',
  'Capability, evaluation and total cost of ownership':
    'Capability, evaluation aur total cost of ownership',
  'Ship or hold':
    'Ship karein ya rokein',
  'Is failure cheap enough?':
    'Kya failure ki cost kaafi kam hai?',
  'Quality, safety and incident readiness':
    'Quality, safety aur incident ki taiyaari',
  'Model A or B':
    'Model A ya B',
  'Which wins for this task?':
    'Is task ke liye kaun jeetta hai?',
  'A task-specific benchmark':
    'Task-specific benchmark',
  'Human in the loop':
    'Human in the loop',
  'Where is autonomy unsafe?':
    'Autonomy kahan unsafe hai?',
  'Error cost and reversibility':
    'Error ki cost aur reversibility',
  'Now try writing one of the hardest lines in the spec.':
    'Ab spec ki sabse mushkil lines mein se ek likhkar dekhiye.',
  'Write a one-line rollback trigger for a feature you want to ship. It must be specific enough that someone could act on it at 2am without calling you.':
    'Kisi aise feature ke liye ek-line ka rollback trigger likhiye jise aap ship karna chahte hain. Woh itna khaas ho ki koi raat 2 baje bina aapko call kiye us par action le sake.',
  'Roll back if …':
    'Roll back kijiye agar …',
  'If someone needs your judgement to interpret it, it is not a trigger yet. Make it a number and a threshold.':
    'Agar kisi ko use samajhne ke liye aapki judgement chahiye, toh woh abhi trigger nahi hai. Use ek number aur ek threshold banaiye.',
  'So an AI spec is built on a few honest ideas. Promise a rate with a tolerance, not a perfect output. Keep business, quality and operating metrics apart. Design for the moments when the AI is unsure or wrong. And write a rollback trigger that someone can act on without asking you.':
    'Toh ek AI spec kuch seedhe ideas par tiki hoti hai. Perfect output ka nahi, tolerance wale rate ka vaada kijiye. Business, quality aur operating metrics ko alag rakhiye. Un pal ke liye design kijiye jab AI unsure ya galat hota hai. Aur aisa rollback trigger likhiye jis par koi aapse pooche bina action le sake.',
  'Next, in Chapter 33, you’ll turn the product into a production architecture and a delivery plan.':
    'Agle Chapter 33 mein aap product ko ek production architecture aur delivery plan mein badlenge.',
  'Write the full product requirements for Bharat Privacy Guard':
    'Bharat Privacy Guard ke poore product requirements likhiye',
  'You now write the document that an engineer can build from and that a leader can read to see exactly what trade-off is being made. In this chapter you learned to write acceptance criteria as a rate with a tolerance, to keep business results, model measures and operating measures apart, and to design the three states an AI feature needs. Now you write two pages for your own tool.':
    'Ab aap woh document likhenge jisse ek engineer build kar sake aur jise ek leader padhkar bilkul dekh sake ki kaun sa trade-off liya ja raha hai. Is chapter mein aapne seekha ki acceptance criteria ko tolerance wale rate ki tarah kaise likhte hain, business results, model measures aur operating measures ko alag kaise rakhte hain, aur ek AI feature ko jo teen states chahiye unhe kaise design karte hain. Ab aap apne tool ke liye do pages likhenge.',
  'Written only. The requirements draw on evidence from earlier chapters. No new code is needed.':
    'Sirf likhna hai. Requirements pichhle chapters ke evidence par tiki hain. Naya code nahi chahiye.',
  'State the user’s problem, and the non-AI way your tool has to beat, for example a developer’s own hand-written rules.':
    'User ki problem likhiye, aur woh non-AI tareeka bhi jise aapke tool ko harana hai, jaise ek developer ke haath se likhe hue rules.',
  'Define the scope and, clearly, what is out of scope.':
    'Scope define kijiye, aur saaf taur par yeh bhi ki kya scope ke bahar hai.',
  'Specify what the models see, which tools they may use and what role a person plays.':
    'Likhiye ki models kya dekhte hain, woh kaun se tools use kar sakte hain, aur insaan ka kya role hai.',
  'List the failures you have really seen in this course.':
    'Un failures ki list banaiye jo aapne is course mein asal mein dekhe.',
  'Name the test set, and write a five-line test plan.':
    'Test set ka naam likhiye, aur paanch lines ka test plan likhiye.',
  'Set quality, safety, speed and cost targets as rates with a tolerance, for example: “finds 95 of every 100 Aadhaar numbers, give or take 3, on the answer key”.':
    'Quality, safety, speed aur cost ke targets ko tolerance wale rates ki tarah set kijiye, jaise: “answer key par har 100 Aadhaar numbers mein se 95 dhoondhta hai, 3 upar-neeche”.',
  'Design the three screens the tool needs: sure, unsure and error.':
    'Tool ko jo teen screens chahiye woh design kijiye: sure, unsure aur error.',
  'Write the release plan, a one-line rollback trigger, and the name of the owner.':
    'Release plan likhiye, ek-line ka rollback trigger, aur owner ka naam.',
  'Two pages that an engineer could build from.':
    'Do pages jinse ek engineer build kar sake.',
  'Every quality claim written as a number against a named test set.':
    'Har quality claim ek named test set ke against ek number ki tarah likhi hui.',
  'What is out of scope, written down.':
    'Kya scope ke bahar hai, likha hua.',
  'A rollback trigger that someone could act on without asking you.':
    'Ek rollback trigger jis par koi aapse pooche bina action le sake.',

  /* ---- ch20d: Production architecture, delivery and vendor strategy ---- */
  'Production architecture, delivery and vendor strategy':
    'Production architecture, delivery aur vendor strategy',
  'A prototype runs because you are the only user and you forgive its failures. Production removes both. In this chapter you’ll list what a prototype is missing, think of response time as a budget shared across stages, and score vendors on more than price and quality.':
    'Prototype isliye chalta hai kyunki uska sirf ek user hota hai, aur woh bhi uski galtiyan maaf kar deta hai. Production mein yeh dono cheezein khatam ho jaati hain. Is chapter mein aap dekhenge ki prototype mein kya-kya kam hai, response time ko ek budget ki tarah kaise sochna hai jo alag-alag stages mein baanta jaata hai, aur vendors ko sirf price aur quality par nahi balki aur kai baaton par score kaise karna hai.',
  'Before you look anything up, write from memory the list of what your prototype is missing for production.':
    'Kuch bhi dekhne se pehle, yaad se woh list likhiye ki production ke liye aapke prototype mein kya-kya missing hai.',
  'Add the decisions about architecture, the separate environments, automated checks before release, who is responsible for what, service targets, security, rolling back, and how you would leave a vendor.':
    'Architecture ke decisions, alag-alag environments, release se pehle automated checks, kiski kya zimmedari hai, service targets, security, rollback, aur vendor ko chhodne ka plan, yeh sab add kijiye.',
  'Work out what happens in three shocks: the provider goes down, traffic grows ten times, and the token price doubles.':
    'Teen shocks mein kya hota hai, yeh nikaliye: provider band ho jaaye, traffic 10 guna ho jaaye, aur token ka price double ho jaaye.',
  'A technical decision pack that covers the architecture, the alternatives, the evaluation, security, cost and rollout.':
    'Ek technical decision pack, jisme architecture, alternatives, evaluation, security, cost aur rollout ho.',
  'Defend your build-or-buy choice and your provider choice with weighted criteria, not with personal preference.':
    'Apna build-or-buy ka choice aur provider ka choice weighted criteria ke saath defend kijiye, apni pasand se nahi.',
  'Build or buy is a decision with criteria':
    'Build ya buy ek decision hai jiske criteria hote hain',
  'Chapter 18.5 introduced it. Here the criteria get weights.':
    'Chapter 18.5 mein yeh aaya tha. Yahan un criteria ko weight milta hai.',
  'Cost per task can be measured':
    'Cost per task ko measure kiya ja sakta hai',
  'You recorded it in Chapter 30.':
    'Aapne ise Chapter 30 mein record kiya tha.',
  'A release gate decides what ships':
    'Release gate tay karta hai ki kya ship hoga',
  'You built it in Chapter 29.':
    'Aapne ise Chapter 29 mein banaya tha.',
  'Production delta':
    'Production delta',
  'The list of everything a working prototype doesn’t have yet: sign-in, limits, retries, saved data, monitoring, secrets, backups, deployment and rollback.':
    'Woh list jo batati hai ki ek chalte hue prototype mein abhi kya-kya nahi hai: sign-in, limits, retries, saved data, monitoring, secrets, backups, deployment aur rollback.',
  'Latency budget':
    'Latency budget',
  'The total time a user is willing to wait, shared out across the stages that use it up.':
    'Woh kul time jitna user intezaar karne ko taiyaar hai, jo un stages mein baant diya jaata hai jo use kha jaate hain.',
  'Architecture decision record':
    'Architecture decision record',
  'A short note saying what was decided, what the other options were, and why. You write it when the decision is made, not later from memory.':
    'Ek chhota note jisme likha ho ki kya decide hua, baaki options kya the, aur kyun. Ise decision lete waqt hi likhte hain, baad mein yaad karke nahi.',
  'Exit cost':
    'Exit cost',
  'What it would take to leave a provider. It’s usually the least examined column in a vendor comparison, and the one you live with longest.':
    'Kisi provider ko chhodne mein kitna lagega. Vendor comparison mein yeh aksar sabse kam dekha jaane wala column hota hai, jabki aap isi ke andar sabse zyada time rehte hain.',
  'List what a prototype is missing before it can go to production.':
    'Samjha paana ki production tak pahunchne se pehle ek prototype mein kya missing hota hai.',
  'Treat response time as a budget spent across a chain of stages.':
    'Dekh paana ki response time ek budget hai jo stages ki ek chain mein kharch hota hai.',
  'Score providers on more criteria than price and quality.':
    'Providers ko price aur quality se zyada criteria par score kar paana.',
  'Keep your cost measurements from Chapter 30 and your release gate from Chapter 29 open. You’ll use both.':
    'Chapter 30 ke apne cost measurements aur Chapter 29 ka release gate paas rakhiye. Dono kaam aayenge.',
  'In the last chapter you saw how the product manager writes the spec for a system whose answers can vary. This chapter looks at the other side of the same table: what it takes to run such a system for real users.':
    'Pichhle chapter mein aapne dekha ki jis system ke jawaab badal sakte hain, uska spec product manager kaise likhta hai. Yeh chapter usi table ke doosri taraf ki baat karta hai: aise system ko asli users ke liye chalane mein kya lagta hai.',
  'Everything you’ve built so far works because you are the only user, and you forgive it when it fails. Production removes both of those. So here you’ll list what that costs you.':
    'Ab tak aapne jo bhi banaya hai woh isliye chalta hai kyunki aap hi uske akele user hain, aur fail hone par aap use maaf kar dete hain. Production mein yeh dono cheezein nahi rehtin. Toh yahan aap dekhenge ki iski keemat kya hai.',
  'An everyday comparison helps. A dish you cook well for two people is not yet a restaurant menu item. The recipe stays the same. But now you also need reliable supplies, a price that works, other cooks who can make it, and a plan for the night four hundred people order it.':
    'Ek roz ki misaal se samajhiye. Ek dish jo aap do logon ke liye achhi banate hain, woh abhi restaurant ke menu ki item nahi hai. Recipe wahi rehti hai. Lekin ab aapko bharosemand supplies chahiye, aisa price jo kaam kare, doosre cooks jo use bana saken, aur us raat ka plan jab chaar sau log ek saath order karein.',
  'The units below walk through that gap one piece at a time. Each one has a goal, an idea, something to prove, something to build, something to break, something to hand in, and a question to check yourself. Take them in order.':
    'Neeche ke units us gap ko ek-ek hisse mein paar karte hain. Har unit mein ek goal hai, ek idea, kuch prove karne ko, kuch banane ko, kuch todne ko, kuch hand in karne ko, aur khud ko check karne ka ek sawaal. Inhe order mein kijiye.',
  'List everything that is missing between your notebook and a real service.':
    'Aapke notebook aur ek asli service ke beech jo kuch bhi missing hai, uski poori list banaiye.',
  'A real service needs many things a notebook doesn’t: sign-in, saved data, retries, queues, monitoring, secrets, deployment, backups, access rules and a way to roll back.':
    'Ek asli service ko bahut kuch chahiye jo notebook ko nahi chahiye: sign-in, saved data, retries, queues, monitoring, secrets, deployment, backups, access rules aur rollback karne ka tareeka.',
  'Write the production delta list for your own prototype.':
    'Apne prototype ke liye production delta ki list likhiye.',
  'Sort the items into three groups: must-have, should-have and later.':
    'Items ko teen groups mein baantiye: must-have, should-have aur later.',
  'Remove one of the controls, then describe how things would fail without it.':
    'Ek control hata dijiye, phir batayiye ki uske bina cheezein kaise fail hongi.',
  'A production delta checklist.':
    'Ek production delta checklist.',
  'What would stop you from going live tomorrow?':
    'Kal live jaane se aapko kya rokega?',
  'This is the bridge between how a PM thinks about delivery and what engineering actually has to build.':
    'Yeh PM ke delivery sochne ke tareeke aur engineering ko asal mein jo banana padta hai, in dono ke beech ka pul hai.',
  'Reliability and resilience':
    'Reliability aur resilience',
  'Plan for provider errors, failing dependencies and retries, and decide how the product slows down gracefully.':
    'Provider errors, dependencies ke fail hone aur retries ke liye plan kijiye, aur tay kijiye ki product kaise gracefully dheema hota hai.',
  'An AI system leans on services you don’t control, so some of them will fail at some point.':
    'Ek AI system aisi services par tikta hai jin par aapka control nahi hai, isliye kabhi na kabhi unmein se kuch fail hongi.',
  'Write failure scenarios for the model, for retrieval, for the tools and for the network.':
    'Model, retrieval, tools aur network ke liye failure scenarios likhiye.',
  'For each one, decide the timeout, the retries, the fallback, and what the user sees.':
    'Har ek ke liye timeout, retries, fallback, aur user ko kya dikhega, yeh tay kijiye.',
  'Pretend the provider is down, then pretend it is limiting how many requests you can send.':
    'Maan lijiye provider band hai, phir maan lijiye woh aapko limit kar raha hai ki aap kitni requests bhej sakte hain.',
  'A table of failures and fallbacks.':
    'Failures aur fallbacks ki ek table.',
  'What does the user experience when only part of the system fails?':
    'Jab system ka sirf ek hissa fail hota hai, tab user ko kya dikhta hai?',
  'A product that degrades gracefully can be worth more than one that uses a bigger model.':
    'Jo product gracefully degrade hota hai, woh bade model wale product se zyada kaam ka ho sakta hai.',
  'Scalability and queues':
    'Scalability aur queues',
  'Understand the difference between work done while the user waits and work done in the background, and find where a system hits its limits as it grows.':
    'Samajhiye ki user ke intezaar karte waqt hone wale kaam aur background mein hone wale kaam mein kya farq hai, aur dhoondhiye ki system badhne par kahan apni limit tak pahunchta hai.',
  'Not every AI task belongs in the path where the user sends a request and waits for the answer.':
    'Har AI task us raaste mein nahi aata jahan user request bhejta hai aur jawaab ka intezaar karta hai.',
  'Map a long-running job, such as taking in a big document.':
    'Ek lambe chalne wale job ka map banaiye, jaise ek bada document andar lena.',
  'Separate four things: the upload, the processing, the indexing and the status updates to the user.':
    'Chaar cheezein alag kijiye: upload, processing, indexing aur user ko status updates.',
  'Imagine ten times the work, and find the part that gives way first.':
    '10 guna kaam ka andaaza lagaiye, aur woh hissa dhoondhiye jo sabse pehle jawaab de dega.',
  'A sketch of how the system scales, with your assumptions about capacity.':
    'System kaise scale hoga, uska ek sketch, capacity ke baare mein aapki assumptions ke saath.',
  'Which part has to grow first, and why?':
    'Kaun sa hissa sabse pehle badhana padega, aur kyun?',
  'When you plan capacity, include the model’s own limits and the quotas set by outside providers.':
    'Capacity plan karte waqt model ki apni limits aur bahar ke providers ke quotas ko bhi shaamil kijiye.',
  'Deployment and environments':
    'Deployment aur environments',
  'Keep development, staging and production apart, each with settings you control.':
    'Development, staging aur production ko alag rakhiye, har ek ke apne settings ke saath jo aapke control mein hon.',
  'A production AI system needs settings you can reproduce and a safe way to release changes.':
    'Ek production AI system ko aisi settings chahiye jinhe dobara banaya ja sake, aur changes release karne ka ek safe tareeka.',
  'For each environment, define the environment variables, the model versions, the prompts and the index versions.':
    'Har environment ke liye environment variables, model versions, prompts aur index versions define kijiye.',
  'Write a deployment checklist, and the command or steps to roll back.':
    'Ek deployment checklist likhiye, aur rollback karne ka command ya steps.',
  'Release a deliberately bad prompt to staging, and check that production stays exactly as it was.':
    'Staging mein jaanbujhkar ek kharab prompt release kijiye, aur check kijiye ki production bilkul waisa hi rehta hai.',
  'A plan for your environments, and a rollout checklist.':
    'Aapke environments ka ek plan, aur ek rollout checklist.',
  'What can change without anyone releasing new code?':
    'Bina naya code release kiye kya-kya badal sakta hai?',
  'Configuration is part of the system, so it needs version control like everything else.':
    'Configuration system ka hissa hai, isliye baaki sab ki tarah ise bhi version control chahiye.',
  'CI/CD and AI regression':
    'CI/CD aur AI regression',
  'Put your software tests and your evaluation gates into the same automated checks.':
    'Apne software tests aur evaluation gates ko ek hi automated checks mein daaliye.',
  'A green build is not enough if the model’s behaviour has got worse.':
    'Agar model ka behaviour bigad gaya hai, toh sirf green build kaafi nahi hai.',
  'Add ordinary tests, plus your golden evaluation suite, to the automated checks that run before every release.':
    'Har release se pehle chalne wale automated checks mein normal tests ke saath apni golden evaluation suite bhi jodiye.',
  'Decide the thresholds that block a release.':
    'Woh thresholds tay kijiye jo release ko block karte hain.',
  'Change the model, the prompt or the index, and check that the automated checks catch the drop in quality.':
    'Model, prompt ya index badaliye, aur check kijiye ki automated checks quality ki girawat pakad lete hain.',
  'A spec for the automated release checks of an AI product.':
    'Ek AI product ke automated release checks ka spec.',
  'What evidence do you need before you release?':
    'Release karne se pehle aapko kaun sa evidence chahiye?',
  'This is how a system whose answers vary becomes something a team can deliver reliably.':
    'Isi tarah woh system, jiske jawaab badalte hain, ek aisi cheez ban jaata hai jise team bharose ke saath deliver kar sakti hai.',
  'Architecture Decision Records':
    'Architecture Decision Records',
  'Record the alternatives, the decision, the evidence, the consequences, and the signs that mean you should revisit it.':
    'Alternatives, decision, evidence, consequences, aur woh signs jinke baad decision dobara dekhna chahiye, in sabko record kijiye.',
  'Treat each architecture decision as a hypothesis with trade-offs, and write down when you’ll look at it again.':
    'Har architecture decision ko trade-offs wali ek hypothesis ki tarah dekhiye, aur likhiye ki aap use dobara kab dekhenge.',
  'Write a record for each of four decisions: the model, the retrieval approach, the workflow or agent, and the storage.':
    'Chaar decisions ke liye ek-ek record likhiye: model, retrieval ka tareeka, workflow ya agent, aur storage.',
  'Include the options you rejected and the evidence behind your choice.':
    'Jo options aapne reject kiye aur aapke choice ke peeche ka evidence, dono shaamil kijiye.',
  'Invent a new requirement that makes one of your decisions wrong.':
    'Ek naya requirement banaiye jo aapke kisi decision ko galat bana de.',
  'A set of architecture decision records.':
    'Architecture decision records ka ek set.',
  'What would make you revisit this decision?':
    'Kya hoga toh aap yeh decision dobara dekhenge?',
  'These records protect what the team has learned, and they make your reasoning as a technical PM easy for others to see.':
    'Yeh records team ne jo seekha hai use bachate hain, aur technical PM ke roop mein aapki sochne ka tareeka doosron ko saaf dikhate hain.',
  'Vendor and TCO strategy':
    'Vendor aur TCO strategy',
  'Compare provider and model choices on quality, cost, region, data controls, tooling and exit cost.':
    'Provider aur model ke choices ko quality, cost, region, data controls, tooling aur exit cost par compare kijiye.',
  'Choosing a vendor means balancing several goals at once, and it shapes your architecture.':
    'Vendor chunna ek saath kai goals ko balance karna hai, aur yeh aapke architecture ko bhi shape karta hai.',
  'Score at least three realistic options, or two providers plus an idea of hosting the model yourself.':
    'Kam se kam teen realistic options score kijiye, ya do providers aur model ko khud host karne ka ek idea.',
  'Estimate what it would cost to migrate away, and to exit.':
    'Andaaza lagaiye ki migrate karke bahar nikalne mein kitna cost aayega.',
  'Work out what happens if the price doubles, or if a capability you rely on is removed.':
    'Nikaliye ki agar price double ho jaaye, ya aap jis capability par tikay hain woh hata di jaaye, toh kya hoga.',
  'A scorecard for models and vendors, with an exit plan.':
    'Models aur vendors ka ek scorecard, exit plan ke saath.',
  'What would it cost you to switch?':
    'Switch karne mein aapko kitna cost aayega?',
  'Vendor lock-in is a risk to your costs and to your architecture.':
    'Vendor lock-in aapke costs aur architecture, dono ke liye ek risk hai.',
  'Technical decision pack':
    'Technical decision pack',
  'Package the whole system so that a design review can go through it.':
    'Poore system ko aise package kijiye ki ek design review use dekh sake.',
  'A strong artifact between PM and engineers lets different readers look at the same evidence, each at the depth they need.':
    'PM aur engineers ke beech ka ek achha artifact alag-alag readers ko wahi evidence dikhata hai, har ek ko utni gehrai mein jitni use chahiye.',
  'Cover the problem, the baseline, the architecture, the alternatives, the evaluation, the security, the cost, the rollout and the risks.':
    'Problem, baseline, architecture, alternatives, evaluation, security, cost, rollout aur risks, sab cover kijiye.',
  'Add one architecture diagram and one table of decisions.':
    'Ek architecture diagram aur decisions ki ek table jodiye.',
  'Ask a reviewer to challenge three of your assumptions.':
    'Kisi reviewer se kahiye ki woh aapki teen assumptions ko challenge kare.',
  'A ten-slide technical decision pack.':
    '10 slides ka ek technical decision pack.',
  'Can you defend every major box and arrow?':
    'Kya aap har bade box aur arrow ko defend kar sakte hain?',
  'This is the bridge from your portfolio to real interviews for technical AI PM roles.':
    'Yeh aapke portfolio se technical AI PM roles ke asli interviews tak ka pul hai.',
  'Response time is a budget':
    'Response time ek budget hai',
  'Now let’s look at one idea more closely, because it surprises most people. When a user waits for an answer, the wait is really a chain of stages, one after the other.':
    'Ab ek idea ko thoda kareeb se dekhte hain, kyunki yeh zyadatar logon ko hairaan karta hai. Jab user jawaab ka intezaar karta hai, toh asal mein woh intezaar stages ki ek chain hota hai, ek ke baad ek.',
  'Response time is spent across the whole chain: retrieval, reranking, tool calls, model reasoning and final generation. The largest share is rarely in the stage people optimise first.':
    'Response time poori chain mein kharch hota hai: retrieval, reranking, tool calls, model reasoning aur final generation. Sabse bada hissa aksar us stage mein nahi hota jise log sabse pehle optimise karte hain.',
  'Think of it like a courier delivery. The parcel travels in several legs, and the longest delay is often not the leg you expected. This is why the total time a user will wait is called a <strong>latency budget</strong>. You divide it across the stages, and you check which one is using the most.':
    'Ise courier delivery ki tarah sochiye. Parcel kai legs mein safar karta hai, aur sabse zyada deri aksar us leg mein nahi hoti jiski aapne ummeed ki thi. Isliye user jitna intezaar karega, uske kul time ko <strong>latency budget</strong> kehte hain. Aap use stages mein baant dete hain, aur dekhte hain ki kaun sa stage sabse zyada kha raha hai.',
  'Next, here is a way to look at the whole system, layer by layer. Read across each row. The last column gives you the question to ask about that layer when you review a design.':
    'Ab poore system ko layer-by-layer dekhne ka ek tareeka. Har row ko aage ki taraf padhiye. Aakhri column batata hai ki design review karte waqt us layer ke baare mein kaun sa sawaal poochna hai.',
  'Typical responsibility':
    'Aam taur par kiski zimmedari',
  'The question to ask about it':
    'Us ke baare mein poochne wala sawaal',
  'Client and UI':
    'Client aur UI',
  'What the user sees and does':
    'User kya dekhta aur karta hai',
  'What uncertainty or approval must the user see?':
    'User ko kaun si uncertainty ya approval dikhni chahiye?',
  'Orchestrator':
    'Orchestrator',
  'Keeping track of state and choosing the next step':
    'State ka hisaab rakhna aur agla step chunna',
  'Where would a fixed rule be safer than the model’s judgement?':
    'Kahan ek fixed rule model ke judgement se zyada safe hoga?',
  'Model layer':
    'Model layer',
  'Reasoning and writing the answer':
    'Reasoning aur jawaab likhna',
  'What evidence supports this model choice?':
    'Is model choice ke peeche kaun sa evidence hai?',
  'Knowledge and tools':
    'Knowledge aur tools',
  'The data it reads and the actions it takes':
    'Jo data woh padhta hai aur jo actions woh leta hai',
  'Who can access what, and how is it audited?':
    'Kaun kya access kar sakta hai, aur uska audit kaise hota hai?',
  'Evaluation':
    'Evaluation',
  'Quality gates':
    'Quality gates',
  'What blocks a release?':
    'Release ko kya block karta hai?',
  'Observability':
    'Observability',
  'Evidence of how it behaves while running':
    'Chalte waqt woh kaisa behave kar raha hai, uska evidence',
  'How would we know it had got worse?':
    'Humein kaise pata chalega ki woh bigad gaya hai?',
  'Platform':
    'Platform',
  'Deploying, scaling and securing it':
    'Ise deploy, scale aur secure karna',
  'How does this survive heavy traffic and failures?':
    'Yeh zyada traffic aur failures mein kaise tikega?',
  'Choosing a vendor':
    'Vendor chunna',
  'The same habit of looking at the whole picture applies when you choose a provider. Most people compare price and quality, and stop there.':
    'Poori tasveer dekhne ki yahi aadat provider chunte waqt bhi kaam aati hai. Zyadatar log price aur quality compare karke ruk jaate hain.',
  'Choosing a vendor means weighing quality, data controls, response time, cost, region, tooling, interoperability, support and exit cost. A provider that wins on quality and data controls but has a very high exit cost can lock you in for years.':
    'Vendor chunne ka matlab hai quality, data controls, response time, cost, region, tooling, interoperability, support aur exit cost, sabko tolna. Jo provider quality aur data controls mein jeet jaata hai lekin jiska exit cost bahut zyada hai, woh aapko saalon tak bandh sakta hai.',
  'Exit cost is the one people forget. It’s the column you read least when you compare vendors, yet it’s the one you live inside the longest.':
    'Exit cost woh cheez hai jise log bhool jaate hain. Vendors compare karte waqt aap is column ko sabse kam padhte hain, lekin isi ke andar aap sabse lambe time tak rehte hain.',
  'Teams that ship AI well tend to keep four simple habits:':
    'Jo teams AI achhe se ship karti hain, woh aam taur par chaar aasaan aadatein rakhti hain:',
  '<strong>Write down why you chose things</strong>, so nobody reopens the decision in six months.':
    '<strong>Likh kar rakhiye ki aapne cheezein kyun chunin</strong>, taaki chhe mahine baad koi decision dobara na khole.',
  '<strong>Have a safe place to try changes</strong> before real users see them.':
    '<strong>Changes try karne ki ek safe jagah rakhiye</strong>, asli users ke dekhne se pehle.',
  '<strong>Be able to switch it off</strong> quickly, without a meeting.':
    '<strong>Use jaldi band kar paana</strong>, bina kisi meeting ke.',
  '<strong>Know what you would do</strong> if the provider changed its terms tomorrow.':
    '<strong>Pehle se jaaniye ki aap kya karenge</strong> agar provider kal apni terms badal de.',
  'The last habit is easy to say and hard to do. So try it now, on paper.':
    'Aakhri aadat kehna aasaan hai aur karna mushkil. Toh ab ise kaagaz par try kijiye.',
  'Your provider doubles its price and gives you ninety days’ notice. Write what you would do in the first week.':
    'Aapka provider apna price double kar deta hai aur aapko 90 din ka notice deta hai. Pehle hafte mein aap kya karenge, woh likhiye.',
  'Day 1 … by the end of the week …':
    'Day 1 … hafte ke end tak …',
  'If your plan needs an evaluation you don’t have, then the evaluation set is your exit plan. That’s usually the main thing you find out.':
    'Agar aapke plan ko aisi evaluation chahiye jo aapke paas nahi hai, toh evaluation set hi aapka exit plan hai. Aam taur par yahi sabse badi baat pata chalti hai.',
  'Let’s pull it together. A prototype works because you are its only user. Production needs a list of everything the prototype lacks, which is the production delta.':
    'Chaliye sab jodte hain. Ek prototype isliye chalta hai kyunki aap uske akele user hain. Production ke liye woh sab chahiye jo prototype mein nahi hai, yaani production delta ki list.',
  'You also saw that response time is a budget shared across a chain of stages, and that a vendor deserves more than a price and quality check. Include data controls, region, support and, above all, the cost of leaving.':
    'Aapne yeh bhi dekha ki response time ek budget hai jo stages ki chain mein baanta jaata hai, aur ek vendor ko sirf price aur quality se zyada parakhna chahiye. Data controls, region, support, aur sabse zyada, chhodne ki keemat, yeh sab shaamil kijiye.',
  'Next, Chapter 34 brings the whole system together in one capstone project.':
    'Aage, Chapter 34 poore system ko ek capstone project mein jodta hai.',
  'Make a ten-slide decision pack':
    '10 slides ka ek decision pack banaiye',
  'You now explain the whole design to the people who must approve it. In this chapter you learned what a prototype lacks before it can go live, to treat response time as a budget spent across stages, and to score providers on more than price and quality. Here you make a ten-slide pack for Bharat Privacy Guard. Draft it from memory first. The slides you can’t write from memory are the parts you don’t understand yet.':
    'Ab aap poora design un logon ko samjhate hain jinhe use approve karna hai. Is chapter mein aapne seekha ki live jaane se pehle prototype mein kya kam hota hai, response time ek budget hai, aur providers ko price aur quality se zyada par score karna hai. Yahan aap Bharat Privacy Guard ke liye 10 slides ka pack banate hain. Pehle use yaad se draft kijiye. Jo slides yaad se nahi likh paate, woh woh hisse hain jo abhi samajh nahi aaye.',
  'Written work only: a slide deck or a document that draws on your earlier measurements. No new code is needed.':
    'Sirf likhne ka kaam: ek slide deck ya document jo aapke pehle ke measurements par based ho. Naya code nahi chahiye.',
  'Without looking at your notes, write one line for each of the ten slides saying what it will say. Mark the slides you couldn’t write from memory.':
    'Apne notes dekhe bina, 10 slides mein se har ek ke liye ek line likhiye ki woh kya kahegi. Jo slides aap yaad se nahi likh paaye, unhe mark kijiye.',
  'Make the ten slides: (1) the problem and what it must beat; (2) the architecture on one slide; (3) two alternatives you rejected and why; (4) the test results, with the test set named; (5) security and what remains risky; (6) cost per message and at the expected volume; (7) the rollout plan and the rollback trigger; (8) three providers scored on nine weighted criteria; (9) the decision and who owns it; (10) what you did not solve.':
    '10 slides banaiye: (1) problem aur use kya beat karna hai; (2) ek slide par architecture; (3) do alternatives jo aapne reject kiye aur kyun; (4) test results, test set ka naam dekar; (5) security aur kya risky bacha hai; (6) cost per message aur expected volume par cost; (7) rollout plan aur rollback trigger; (8) teen providers, 9 weighted criteria par scored; (9) decision aur uska owner kaun hai; (10) jo aapne solve nahi kiya.',
  'Check each slide against your earlier documents and fix any mismatch.':
    'Har slide ko apne pehle ke documents se milaiye aur jo bhi mismatch ho use theek kijiye.',
  'Ask someone else to present the deck from the slides alone. Write down where they stopped or hesitated, and fix those slides.':
    'Kisi aur se kahiye ki woh sirf slides dekhkar deck present kare. Likhiye ki woh kahan ruke ya hichkichaye, aur un slides ko theek kijiye.',
  'The from-memory outline with the weak slides marked.':
    'Yaad se banaya hua outline, kamzor slides mark kiye hue.',
  'Ten slides in the order above.':
    'Upar ke order mein 10 slides.',
  'A provider scorecard that includes the cost of leaving.':
    'Ek provider scorecard jisme chhodne ka cost bhi shaamil ho.',
  'Evidence that someone else could present the deck from the slides alone.':
    'Aisa evidence ki koi aur sirf slides se deck present kar sakta hai.',

  /* ---- ch21cap: Capstone: discover, build, break, measure, ship and defend a system ---- */
  'Capstone: discover, build, break, measure, ship and defend a system':
    'Capstone: ek system ko discover, build, break, measure, ship aur defend kijiye',
  'This is one capstone, not two. You take a real problem, with users you can actually reach, and carry it from discovery through a live launch to a defence in front of executives and engineers. Along the way you build one coherent applied AI system, break it on purpose, measure what you fixed, and show that it works as a product, not only as a demo.':
    'Yeh do nahi, ek hi capstone hai. Aap ek asli problem lete hain, aise users ke saath jinse aap sach mein mil sakte hain, aur use discovery se live launch tak, aur phir executives aur engineers ke saamne defence tak le jaate hain. Is poore safar mein aap ek coherent applied AI system banate hain, use jaanbujhkar todte hain, jo fix kiya use measure karte hain, aur dikhate hain ki yeh sirf demo nahi, ek product ki tarah bhi kaam karta hai.',
  'Don’t start with slides. Find a problem with a user group you can reach. Then create the repository, the issue list, the evaluation dataset, and the smallest slice that works from start to finish.':
    'Slides se shuru mat kijiye. Aisi problem dhoondhiye jiske user group tak aap pahunch sakte hain. Phir repository, issue list, evaluation dataset, aur sabse chhota woh hissa banaiye jo shuru se aakhir tak chalta ho.',
  'Grow it into one applied AI copilot for operations or policy work. Give it retrieval that respects permissions, structured outputs, two tools, one bounded agent step, one input that isn’t text, an evaluation harness, tracing and cost tracking, and security controls. Then put it in front of five to ten real users and improve it from what you see.':
    'Ise operations ya policy ke kaam ke ek applied AI copilot mein badhaiye. Ismein permissions ka dhyaan rakhne wala retrieval, structured outputs, do tools, ek bounded agent step, ek aisa input jo text nahi hai, ek evaluation harness, tracing aur cost tracking, aur security controls daaliye. Phir ise 5 se 10 asli users ke saamne rakhiye aur jo dikhe, usse behtar banaiye.',
  'Reproduce at least ten kinds of failure: a question with no answer, a poisoned document, prompt injection, an unauthorised tool request, a malformed tool call, a stale permission, a multilingual query, a poor scan or audio, a model swap, and a rise in traffic or cost.':
    'Kam se kam 10 tarah ke failures reproduce kijiye: jis sawaal ka jawaab hi nahi hai, ek poisoned document, prompt injection, bina ijaazat wali tool request, ek malformed tool call, ek stale permission, ek multilingual query, kharab scan ya audio, ek model swap, aur traffic ya cost mein badhottari.',
  'The running system, a live URL with real users, and an evidence pack. The pack holds the PRD, the architecture, the threat model, the evaluation plan, the dashboard, the unit economics, the decision log, the rollout and rollback plan, the vendor scorecard and an explanation for executives.':
    'Chalta hua system, asli users ke saath ek live URL, aur ek evidence pack. Is pack mein PRD, architecture, threat model, evaluation plan, dashboard, unit economics, decision log, rollout aur rollback plan, vendor scorecard aur executives ke liye ek explanation hota hai.',
  'Show three failures you found yourself, three improvements with numbers, evidence from real users, unit economics that hold up, the risks that remain, and what you chose not to solve.':
    'Teen failures dikhaiye jo aapne khud dhoondhe, numbers ke saath teen improvements, asli users ka evidence, aisi unit economics jo tikti ho, bache hue risks, aur woh jo aapne jaanbujhkar solve nahi kiya.',
  'Everything in Part V':
    'Part V ki har cheez',
  'The capstone combines all of it.':
    'Capstone un sabko jodta hai.',
  'A release gate and a risk register':
    'Ek release gate aur ek risk register',
  'Chapters 29 and 31 give you the evidence you’ll defend with.':
    'Chapters 29 aur 31 aapko woh evidence dete hain jiske saath aap defend karenge.',
  'Track A’s discovery and strategy artifacts':
    'Track A ke discovery aur strategy artifacts',
  'They help, but you can start without them. If you have them, the discovery and design stages reuse them.':
    'Yeh madad karte hain, lekin inke bina bhi shuru kar sakte hain. Agar aapke paas hain, toh discovery aur design stages inhe dobara use karte hain.',
  'Findings document':
    'Findings document',
  'A plain, factual record of what broke, the evidence, the root cause, the fix, and what you chose not to solve. It is the opposite of a brochure.':
    'Ek saaf, factual record ki kya toota, evidence kya hai, root cause kya hai, fix kya hai, aur aapne kya solve nahi kiya. Yeh brochure ka ulta hai.',
  'Failure class':
    'Failure class',
  'A kind of failure, not one single example of it. This is what makes ten tests meaningful instead of ten stories.':
    'Failure ki ek kism, uska koi ek example nahi. Isi se 10 tests ka matlab banta hai, warna woh 10 kahaniyan rah jaate hain.',
  'Residual risk':
    'Residual risk',
  'The risk that’s left after a control is in place. You state it openly instead of leaving people to guess.':
    'Control lagne ke baad jo risk bacha rehta hai. Aap use khulkar bata dete hain, logon ko andaaza lagane nahi dete.',
  'Evidence pack':
    'Evidence pack',
  'The set of artifacts that lets somebody else check your claims instead of just trusting them.':
    'Artifacts ka woh set jisse koi aur aapke claims check kar sake, sirf bharosa na kare.',
  'Kill criteria':
    'Kill criteria',
  'The condition you write down before you need it, which tells you when to stop. Without it, you keep working on a problem the evidence says won’t work.':
    'Woh condition jo aap zaroorat se pehle likh lete hain, jo batati hai ki kab rukna hai. Iske bina aap ek aisi problem par kaam karte rehte hain jise evidence kehta hai ki chalegi nahi.',
  'Take a real problem, with users you can reach, from discovery all the way to a live product.':
    'Ek asli problem lekar, aise users ke saath jinse aap mil sakte hain, discovery se live product tak le jaa paana.',
  'Explain a system you built from first principles, without a framework doing the explaining for you.':
    'Jo system aapne banaya hai use first principles se samjha paana, bina kisi framework ke aapke liye samjhaye.',
  'Show before-and-after numbers for failures you found and fixed, and for the users who used it.':
    'Jin failures ko aapne dhoondha aur fix kiya, unke before-and-after numbers dikha paana, aur un users ke bhi jinhone use use kiya.',
  'Defend the business case, meaning unit economics, growth and vendor risk, as carefully as the architecture.':
    'Business case ko, yaani unit economics, growth aur vendor risk ko, utni hi dhyaan se defend kar paana jitna architecture ko.',
  'State what you deliberately did not solve.':
    'Bata paana ki aapne jaanbujhkar kya solve nahi kiya.',
  'Plan for about thirty hours, spread over four to six weeks. This is the whole course brought together. The technical capstone and the product, business, real-user and defence work are one project now, not two.':
    'Lagbhag 30 ghante ka plan rakhiye, jo 4 se 6 hafton mein phaile. Yeh poore course ko ek saath laata hai. Technical capstone aur product, business, real-user aur defence ka kaam ab ek hi project hain, do nahi.',
  'In the last chapter you looked at what it takes to run an AI system for real users. Now you do the whole thing yourself, from the first conversation with a user to the final defence.':
    'Pichhle chapter mein aapne dekha ki asli users ke liye ek AI system chalane mein kya lagta hai. Ab aap poori cheez khud karte hain, user se pehli baat-cheet se lekar aakhri defence tak.',
  'Start by collecting every artifact you made in Part V. That means the harness, the model selection card, the context budget and the retrieval architecture. It also means the tool policy, the release gate, the dashboard, the risk register, the PRD and the decision pack. Every stage below reuses one of them.':
    'Sabse pehle Part V mein aapne jo bhi artifacts banaye, woh ikatthe kijiye. Yaani harness, model selection card, context budget aur retrieval architecture. Saath mein tool policy, release gate, dashboard, risk register, PRD aur decision pack. Neeche ka har stage inmein se kisi ek ko dobara use karta hai.',
  'You may also have done some of Track B’s optional modules. If so, reuse them too. B1’s cost model fits the measure stage. B3’s tracking plan fits the ship stage, and so do B6’s user sessions. B5’s release checklist fits the observe stage. None of them is needed to start.':
    'Ho sakta hai aapne Track B ke kuch optional modules bhi kiye hon. Agar haan, toh unhe bhi dobara use kijiye. B1 ka cost model measure stage mein fit hota hai. B3 ka tracking plan ship stage mein fit hota hai, aur B6 ke user sessions bhi. B5 ki release checklist observe stage mein fit hoti hai. Shuru karne ke liye inmein se kisi ki zaroorat nahi hai.',
  'What do you get at the end? A system you can explain without leaning on anyone’s framework. Real users who have used it. And an honest page about what broke when you tested it and what it costs to run.':
    'Aakhir mein aapko kya milta hai? Ek aisa system jise aap kisi ke framework par tike bina samjha sakte hain. Asli users jinhone use use kiya hai. Aur ek imaandaar page, jisme likha ho ki test karne par kya toota aur ise chalane mein kitna cost aata hai.',
  'That matters because employers ask three things. What can you build? Did anyone want it? And what goes wrong, and what do you do about it?':
    'Yeh isliye zaroori hai kyunki employers teen cheezein poochte hain. Aap kya bana sakte hain? Kya kisi ko woh chahiye tha? Aur kya galat hota hai, aur aap uske baare mein kya karte hain?',
  'The brief':
    'Brief',
  'Take one real problem, with a user group you can actually reach within two weeks. Then work through eleven stages: discover, define, design, build, evaluate, break, observe, ship, measure, iterate and defend.':
    'Ek asli problem lijiye, aisi user group ke saath jisse aap do hafte ke andar sach mein mil sakte hain. Phir gyarah stages se guzariye: discover, define, design, build, evaluate, break, observe, ship, measure, iterate aur defend.',
  'Build one applied AI system that combines at least four capabilities from Part V. A good starting set is retrieval that respects permissions, tool calling, one bounded agent step, evaluation, tracing and security tests. Ship it to real users before you defend it. It should be one coherent journey, not a set of separate demos.':
    'Ek applied AI system banaiye jo Part V ki kam se kam 4 capabilities ko jode. Ek achha starting set hai permissions ka dhyaan rakhne wala retrieval, tool calling, ek bounded agent step, evaluation, tracing aur security tests. Defend karne se pehle ise asli users tak ship kijiye. Yeh ek coherent journey honi chahiye, alag-alag demos ka set nahi.',
  'The eleven stages':
    'Gyarah stages',
  'The table below lists the eleven stages in order. For each one, the second column says what evidence you must have in hand before you move on. Read it once now, and come back to it as you work.':
    'Neeche ki table gyarah stages ko order mein dikhati hai. Har stage ke liye, doosra column batata hai ki aage badhne se pehle aapke paas kaun sa evidence hona chahiye. Ise ek baar abhi padh lijiye, aur kaam karte waqt wapas aate rahiye.',
  'Stage':
    'Stage',
  'Required evidence':
    'Zaroori evidence',
  '34.1 Discover':
    '34.1 Discover',
  'Five interviews, a jobs-to-be-done statement, a scan of the market and competitors, and a problem brief backed by evidence.':
    '5 interviews, ek jobs-to-be-done statement, market aur competitors ka scan, aur evidence par based ek problem brief.',
  '34.2 Define':
    '34.2 Define',
  'The user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks, and a measurable acceptance criterion. Together these are your capstone AI PRD.':
    'User, pain, baseline, scope, non-goals, data, tools, risks, aur ek measurable acceptance criterion. Yeh sab milkar aapka capstone AI PRD banate hain.',
  '34.3 Design':
    '34.3 Design',
  'A one-page product and system design, plus the vision, strategy, roadmap and OKRs, a stakeholder map, a pricing hypothesis and your kill criteria.':
    'Ek-page ka product aur system design, saath mein vision, strategy, roadmap aur OKRs, ek stakeholder map, ek pricing hypothesis aur aapke kill criteria.',
  '34.4 Build':
    '34.4 Build',
  'Working code, tests, versioned prompts and settings, an architecture diagram and a threat model.':
    'Chalta hua code, tests, versioned prompts aur settings, ek architecture diagram aur ek threat model.',
  '34.5 Evaluate':
    '34.5 Evaluate',
  '30 to 50 evaluation cases, traces, and measurements of retrieval, answers, tools, safety, latency and cost.':
    '30 se 50 evaluation cases, traces, aur retrieval, answers, tools, safety, latency aur cost ke measurements.',
  '34.6 Break':
    '34.6 Break',
  'At least ten deliberate failure tests, saved before you fix anything.':
    'Kam se kam 10 jaanbujhkar kiye gaye failure tests, kuch bhi fix karne se pehle save kiye hue.',
  '34.7 Observe':
    '34.7 Observe',
  'A security go/no-go checklist, and a dashboard with six panels connected to real traces.':
    'Ek security go/no-go checklist, aur asli traces se jodi hui 6 panels wali dashboard.',
  '34.8 Ship':
    '34.8 Ship',
  'A live URL, monitoring, 5 to 10 real users, a support log and a timed rollback test.':
    'Ek live URL, monitoring, 5 se 10 asli users, ek support log aur ek timed rollback test.',
  '34.9 Measure':
    '34.9 Measure',
  'Before-and-after numbers for your optimisations, ADRs, and a unit-economics model at base usage and at high usage.':
    'Aapke optimisations ke before-and-after numbers, ADRs, aur base usage aur high usage par ek unit-economics model.',
  '34.10 Iterate':
    '34.10 Iterate',
  'One iteration based on evidence, before-and-after product and AI metrics, and an entry in the decision log.':
    'Evidence par based ek iteration, before-and-after product aur AI metrics, aur decision log mein ek entry.',
  '34.11 Defend':
    '34.11 Defend',
  'A ten-slide deck for executives, a twenty-minute technical defence and a public case study.':
    'Executives ke liye 10 slides ka deck, 20 minute ka technical defence aur ek public case study.',
  'A portfolio project is credible when you can explain its failures, show that someone wanted it, and say what it costs to run. Anyone can show a system that works on the demo path.':
    'Ek portfolio project tab credible hota hai jab aap uske failures samjha sakte hain, dikha sakte hain ki kisi ko woh chahiye tha, aur bata sakte hain ki ise chalane mein kitna cost aata hai. Demo path par chalne wala system toh koi bhi dikha sakta hai.',
  'Now the units. Each one covers a single stage, with the same rows every time. You get the goal, the idea, what to prove, what to build and what to break. Then come what to hand in, a question to check yourself, and why it matters. Do them in order, because each one feeds the next.':
    'Ab units. Har unit ek stage ko cover karta hai, aur har baar wahi rows hoti hain. Aapko goal, idea, kya prove karna hai, kya banana hai aur kya todna hai milta hai. Phir aate hain kya hand in karna hai, khud ko check karne ka ek sawaal, aur yeh kyun zaroori hai. Inhe order mein kijiye, kyunki har unit agle ko khilata hai.',
  'Discover: a real problem with reachable users':
    'Discover: ek asli problem, aise users ke saath jinse aap mil sakein',
  'Find a problem with a user group you can actually reach, and write a problem brief backed by evidence.':
    'Aisi problem dhoondhiye jiske user group tak aap sach mein pahunch sakte hain, aur evidence par based ek problem brief likhiye.',
  'The best capstones come from a job you have done, a team you know or a community you belong to. Look for a problem that comes up often, costs real time or money, and is solved badly today.':
    'Sabse achhe capstones aise kaam se aate hain jo aapne kiya hai, aisi team se jise aap jaante hain, ya aisi community se jiska aap hissa hain. Aisi problem dhoondhiye jo aksar aati hai, jisme asli time ya paise lagte hain, aur jise aaj kharab tareeke se solve kiya jaata hai.',
  'Score your problem against four tests. Can you reach users, meaning can you book five interviews this week? Does it happen often? Is it costly? And is it a fit for AI, rather than something a form or a formula could solve?':
    'Apni problem ko chaar tests par score kijiye. Kya aap users tak pahunch sakte hain, matlab kya aap isi hafte 5 interviews book kar sakte hain? Kya yeh aksar hoti hai? Kya yeh costly hai? Aur kya yeh AI ke liye fit hai, ya ise ek form ya formula bhi solve kar leta?',
  'Run five interviews. Write a jobs-to-be-done statement and a journey map, and scan the market and the competitors.':
    '5 interviews kijiye. Ek jobs-to-be-done statement aur ek journey map likhiye, aur market aur competitors ko scan kijiye.',
  'Challenge your idea with the question “why not ordinary software that always gives the same answer?” If a form would solve the problem, it isn’t a capstone.':
    'Apne idea ko is sawaal se challenge kijiye: “ordinary software kyun nahi, jo hamesha wahi jawaab deta hai?” Agar ek form se problem solve ho jaati hai, toh woh capstone nahi hai.',
  'A problem brief backed by evidence, with a jobs-to-be-done statement.':
    'Evidence par based ek problem brief, jobs-to-be-done statement ke saath.',
  'Can you trace each claim in your problem brief back to an interview note, and name one assumption that the evidence changed?':
    'Kya aap apne problem brief ke har claim ko kisi interview note tak trace kar sakte hain, aur ek aisi assumption bata sakte hain jo evidence se badal gayi?',
  'If nothing you believed changed after five interviews, you may have heard only what you expected to hear.':
    'Agar 5 interviews ke baad aapka kuch bhi believe nahi badla, toh ho sakta hai aapne sirf wahi suna jo aap sunna chahte the.',
  'Define the problem and PRD':
    'Problem aur PRD define kijiye',
  'Turn the problem into a system with acceptance criteria you can measure.':
    'Problem ko ek aise system mein badaliye jiske acceptance criteria aap measure kar sakein.',
  'A capstone becomes credible when the problem is clear and the cost of failure is clear too.':
    'Capstone tab credible banta hai jab problem saaf ho aur failure ka cost bhi saaf ho.',
  'Choose your own problem, one you can reach users for. Or choose one of these: policy and compliance intelligence for an enterprise, a workflow that makes developers more productive, or a controlled customer-operations workflow.':
    'Apni khud ki problem chuniye, jiske users tak aap pahunch sakte hon. Ya inmein se ek chuniye: kisi enterprise ke liye policy aur compliance intelligence, developers ko zyada productive banane wala workflow, ya ek controlled customer-operations workflow.',
  'Write down the user, the pain, the baseline, the scope, the non-goals, the data, the tools, the risks and the metrics.':
    'User, pain, baseline, scope, non-goals, data, tools, risks aur metrics likhiye.',
  'Ask “why not ordinary software that always gives the same answer?” again. This time, ask it against your actual scope, not the general case.':
    'Dobara poochiye: “ordinary software kyun nahi, jo hamesha wahi jawaab deta hai?” Is baar yeh aapke asli scope ke against poochiye, general case ke nahi.',
  'The capstone AI PRD.':
    'Capstone AI PRD.',
  'Can you state the business outcome in one sentence?':
    'Kya aap business outcome ek sentence mein bata sakte hain?',
  'This is the product anchor that everything below hangs from.':
    'Yeh product ka woh anchor hai jis par neeche ki har cheez tiki hai.',
  'Design the product and the system together':
    'Product aur system ko saath mein design kijiye',
  'Put the product decision and the technical decision on one page, because each one limits the other.':
    'Product decision aur technical decision ko ek hi page par rakhiye, kyunki har ek doosre ko limit karta hai.',
  'Whether a user needs an answer in two seconds or by Monday decides the architecture. And whether the architecture can hit a target decides what you can promise.':
    'User ko jawaab do second mein chahiye ya Monday tak, yeh architecture tay karta hai. Aur architecture ek target hit kar sakta hai ya nahi, yeh tay karta hai ki aap kya promise kar sakte hain.',
  'Fill in a design with nine lines: the user and the job, the activation moment, the AI approach, why not an agent, the evaluation, the boundaries, the cost, and the North Star.':
    'Nau lines ka ek design bhariye: user aur job, activation moment, AI approach, agent kyun nahi, evaluation, boundaries, cost, aur North Star.',
  'Add the vision, the strategy, the roadmap, the OKRs, a stakeholder map, a pricing hypothesis, and your kill criteria, which is the condition that tells you to stop.':
    'Vision, strategy, roadmap, OKRs, ek stakeholder map, ek pricing hypothesis, aur apne kill criteria jodiye, yaani woh condition jo batati hai ki kab rukna hai.',
  'Find one line in your design that you chose because it was interesting, not because it was needed, and cut it.':
    'Apne design ki ek aisi line dhoondhiye jo aapne isliye chuni kyunki woh dilchasp thi, isliye nahi ki zaroori thi, aur use kaat dijiye.',
  'A one-page product and system design, plus a stakeholder map.':
    'Ek-page ka product aur system design, saath mein ek stakeholder map.',
  'Does every technical choice on the page link to a product reason? And does every product choice link to something the system can actually do?':
    'Kya page par har technical choice ek product reason se juda hai? Aur kya har product choice us cheez se juda hai jo system sach mein kar sakta hai?',
  'Kill criteria written now, before you get attached to the idea, are the ones you’ll actually honour.':
    'Jo kill criteria aap abhi likhte hain, idea se lagav hone se pehle, unhi ka aap sach mein maan rakhenge.',
  'Build the vertical slice':
    'Vertical slice banaiye',
  'Build the smallest system that works from start to finish, before you add anything clever.':
    'Kuch bhi clever jodne se pehle, sabse chhota system banaiye jo shuru se aakhir tak chalta ho.',
  'A vertical slice proves that the architecture holds across its boundaries. A threat model added afterwards is an excuse, not a control.':
    'Ek vertical slice sabit karta hai ki architecture apni boundaries ke paar bhi tikta hai. Baad mein jodi gayi threat model ek bahana hai, control nahi.',
  'Build the path from input, to retrieval and context, to the model, to a structured answer, to a citation. Write the threat model alongside the first version, not after it.':
    'Input se retrieval aur context tak, phir model tak, phir ek structured answer tak, phir ek citation tak ka raasta banaiye. Threat model ko pehle version ke saath likhiye, uske baad nahi.',
  'Add a tool only when you need one. Keep the repository easy to reproduce, with a README, a requirements file and a command that runs it the same way every time.':
    'Tool tabhi jodiye jab zaroorat ho. Repository ko reproduce karna aasaan rakhiye, ek README, ek requirements file aur ek command ke saath jo ise har baar ek hi tareeke se chalaye.',
  'Ask a question that has no answer, and record how the system fails. This is your baseline.':
    'Aisa sawaal poochiye jiska jawaab nahi hai, aur record kijiye ki system kaise fail hota hai. Yahi aapki baseline hai.',
  'A running repository, architecture v1 and a threat model.':
    'Ek chalti hui repository, architecture v1 aur ek threat model.',
  'Can you run the system from a clean environment? And could someone else repeat your experiment without asking what you did by hand?':
    'Kya aap system ko ek clean environment se chala sakte hain? Aur kya koi aur aapka experiment bina yeh poochhe dohra sakta hai ki aapne haath se kya kiya tha?',
  'A small system that works beats a large diagram.':
    'Chhota system jo chalta hai, bade diagram se behtar hai.',
  'Add evaluation and observability':
    'Evaluation aur observability jodiye',
  'Turn the capstone into something you can measure.':
    'Capstone ko aisi cheez banaiye jise aap measure kar sakein.',
  'Every change should leave evidence behind.':
    'Har change ke peeche evidence chhootna chahiye.',
  'Create 30 to 50 evaluation cases, and collect traces.':
    '30 se 50 evaluation cases banaiye, aur traces collect kijiye.',
  'Add measurements for retrieval, answers, tools, safety, latency and cost.':
    'Retrieval, answers, tools, safety, latency aur cost ke measurements jodiye.',
  'Change the model, the prompt or the index, and reproduce the drop in quality.':
    'Model, prompt ya index badaliye, aur quality mein aayi giraawat ko reproduce kijiye.',
  'A golden dataset, an evaluation harness and an observability report.':
    'Ek golden dataset, ek evaluation harness aur ek observability report.',
  'Can you explain why the latest version is better?':
    'Kya aap bata sakte hain ki latest version behtar kyun hai?',
  'This is where the project turns into engineering evidence.':
    'Yahin project engineering evidence mein badal jaata hai.',
  'Break it deliberately':
    'Ise jaanbujhkar todiye',
  'Reproduce at least ten failure classes.':
    'Kam se kam 10 failure classes reproduce kijiye.',
  'A portfolio project is more credible when you can explain what broke.':
    'Ek portfolio project tab zyada credible hota hai jab aap samjha sakte hain ki kya toota.',
  'Test each of these. A question with no answer. A poisoned document. Prompt injection. An unauthorised tool. A malformed tool call. A stale permission. Multilingual input. A poor scan or audio. A model swap. A rise in traffic or cost.':
    'Har ek ko test kijiye. Aisa sawaal jiska jawaab nahi. Ek poisoned document. Prompt injection. Bina ijaazat wala tool. Ek malformed tool call. Ek stale permission. Multilingual input. Kharab scan ya audio. Ek model swap. Traffic ya cost mein badhottari.',
  'For each failure, capture the evidence, find the root cause and note the control.':
    'Har failure ke liye evidence capture kijiye, root cause dhoondhiye aur control note kijiye.',
  'Don’t fix anything straight away. First, save the failure as it happened.':
    'Turant kuch fix mat kijiye. Pehle failure ko waisa hi save kar lijiye jaisa woh hua tha.',
  'A security and red-team report, plus a table of failure findings.':
    'Ek security aur red-team report, saath mein failure findings ki ek table.',
  'Which three failures surprised you?':
    'Kaun se teen failures ne aapko hairaan kiya?',
  'Your failure log is often worth more than your happy-path demo.':
    'Aapka failure log aksar aapke happy-path demo se zyada keemti hota hai.',
  'Observe: prove it is inspectable before real users touch it':
    'Observe: asli users ke haath lagane se pehle sabit kijiye ki system ko andar se dekha ja sakta hai',
  'Prove that you can see inside the system, and that its risk has limits, before you ship it to a real user.':
    'Sabit kijiye ki aap system ke andar dekh sakte hain, aur uska risk limit mein hai, kisi asli user tak ship karne se pehle.',
  'If you can’t observe a system, you’re guessing about it, however good the demo looks.':
    'Agar aap kisi system ko observe nahi kar sakte, toh aap uske baare mein andaaza laga rahe hain, chahe demo kitna bhi achha lage.',
  'Run the security release-gate checks and the observability thresholds against the current build.':
    'Security release-gate checks aur observability thresholds ko current build par chalaiye.',
  'Connect a six-panel dashboard to the real traces from your evaluation and break stages. The panels are quality, safety, latency, cost, traffic and failures.':
    '6 panels wali ek dashboard ko apne evaluation aur break stages ke asli traces se jodiye. Panels hain quality, safety, latency, cost, traffic aur failures.',
  'Take one signal off the dashboard, and see which incident becomes invisible without it.':
    'Dashboard se ek signal hata dijiye, aur dekhiye ki uske bina kaun sa incident dikhna band ho jaata hai.',
  'A security go/no-go checklist and an observability dashboard.':
    'Ek security go/no-go checklist aur ek observability dashboard.',
  'Which alert should wake a human, and which should only be logged?':
    'Kaun sa alert kisi insaan ko jagaye, aur kaun sa sirf log ho?',
  'A stakeholder will ask, “how would you know if this broke at 2am?” This stage is your answer.':
    'Koi stakeholder poochega, “agar yeh raat ke 2 baje toot jaaye toh aapko kaise pata chalega?” Yeh stage aapka jawaab hai.',
  'Ship to real users':
    'Asli users tak ship kijiye',
  'Launch to a real user group, and prove that the rollback actually works.':
    'Ek asli user group tak launch kijiye, aur sabit kijiye ki rollback sach mein kaam karta hai.',
  'Real users teach you more than more theory. Five to ten observed sessions beat another week of polishing on your own.':
    'Asli users aapko zyada theory se zyada sikhate hain. 5 se 10 observed sessions, akele ek aur hafta polish karne se behtar hain.',
  'Put it on a stable live URL with monitoring, analytics, a privacy notice, a way for users to send feedback, and a rollback procedure.':
    'Ise ek stable live URL par rakhiye, monitoring, analytics, ek privacy notice, users ke feedback bhejne ka tareeka, aur ek rollback procedure ke saath.',
  'Recruit five to ten real target users. Watch at least five sessions, and keep a support log from day one.':
    '5 se 10 asli target users recruit kijiye. Kam se kam 5 sessions dekhiye, aur pehle din se ek support log rakhiye.',
  'Test your rollback for real before launch. Release a harmless change, roll it back, and time it. A rollback you have never tried is only a plan.':
    'Launch se pehle apna rollback asal mein test kijiye. Ek harmless change release kijiye, use roll back kijiye, aur time kijiye. Jo rollback aapne kabhi try nahi kiya, woh sirf ek plan hai.',
  'A live URL, a support log, a funnel or cohort view, and a timed rollback test.':
    'Ek live URL, ek support log, ek funnel ya cohort view, aur ek timed rollback test.',
  'Do you have evidence from real users, not just demo traffic from your teammates?':
    'Kya aapke paas asli users ka evidence hai, sirf aapke teammates ka demo traffic nahi?',
  'A system that is beautifully evaluated but has never been used by anyone has not passed this stage yet.':
    'Jo system bahut achhe se evaluate hua hai lekin jise kisi ne use nahi kiya, woh is stage ko abhi paas nahi kar paya hai.',
  'Measure: optimize and quantify unit economics':
    'Measure: optimize kijiye aur unit economics quantify kijiye',
  'Apply targeted fixes, measure before and after, and show that the economics work at scale.':
    'Targeted fixes lagaiye, before aur after measure kijiye, aur dikhaiye ki economics scale par kaam karti hai.',
  'An optimisation means something only when you can see the difference it made. And viability means something only when you can also see the cost of each successful task.':
    'Optimisation tabhi kuch matlab rakhta hai jab aap dekh sakein ki usne kitna farq daala. Aur viability tabhi matlab rakhti hai jab aap har successful task ka cost bhi dekh sakein.',
  'Try reranking, restructuring the prompt, validating against a schema, caching, routing or trimming the context, wherever it makes sense. Then work out the model cost per successful task at low, base and high usage.':
    'Jahan sahi lage wahan reranking, prompt ko restructure karna, schema ke against validate karna, caching, routing ya context chhota karna try kijiye. Phir low, base aur high usage par har successful task ka model cost nikaliye.',
  'Change one thing at a time, and rerun the part of the evaluation that matters for it.':
    'Ek baar mein ek hi cheez badaliye, aur evaluation ka woh hissa dobara chalaiye jo uske liye zaroori hai.',
  'Keep a fix that improves one metric but makes another worse, and write down the trade-off. Then check what happens to your margin at ten times the volume.':
    'Aisa fix rakhiye jo ek metric sudhaarta hai lekin doosre ko bigaadta hai, aur trade-off likh lijiye. Phir check kijiye ki 10 guna volume par aapke margin ka kya hota hai.',
  'A before-and-after optimisation report, ADRs and a unit-economics model.':
    'Ek before-and-after optimisation report, ADRs aur ek unit-economics model.',
  'Which improvement is big enough to matter, statistically or in practice? And does revenue grow faster than the cost of running the model and supporting users?':
    'Kaun sa improvement itna bada hai ki matter kare, statistically ya practice mein? Aur kya revenue model chalane aur users ko support karne ke cost se tez badhta hai?',
  'Avoid “optimization theater”. Also avoid a model that works only at your current, subsidised scale.':
    '“Optimization theater” se bachiye. Aur aise model se bhi bachiye jo sirf aapke abhi ke subsidised scale par kaam karta hai.',
  'Iterate from evidence':
    'Evidence se iterate kijiye',
  'Ship one improvement that is based on evidence, and log the decision behind it.':
    'Evidence par based ek improvement ship kijiye, aur uske peeche ka decision mein likh dijiye.',
  'An iteration earns its place only when it is tied to a problem you measured, not a hunch.':
    'Ek iteration tabhi apni jagah kamata hai jab woh ek aisi problem se juda ho jise aapne measure kiya, kisi andaaze se nahi.',
  'Pick the lowest-scoring evidence question from the earlier stages, and ship one change aimed at it.':
    'Pichhle stages se sabse kam score wala evidence question chuniye, aur uske liye ek change ship kijiye.',
  'Compare the product and AI metrics before and after. Then write the decision into the decision log: the context, the options you considered, the approach you chose, the trade-offs, and what would make you reopen it.':
    'Product aur AI metrics ko before aur after compare kijiye. Phir decision ko decision log mein likhiye: context, jo options aapne socho, jo approach chuni, trade-offs, aur kya hone par aap ise dobara kholenge.',
  'Ask someone to push back on the iteration you shipped, and answer from the metric, not from opinion.':
    'Kisi se kahiye ki aapke ship kiye iteration par pushback kare, aur aap jawaab metric se dijiye, rai se nahi.',
  'A changelog and one filled-in decision-log entry.':
    'Ek changelog aur decision log ki ek bhari hui entry.',
  'Can you tie the iteration to a problem you measured, not a preference?':
    'Kya aap iteration ko ek measure ki hui problem se jod sakte hain, pasand se nahi?',
  'If the decision log is still empty at this stage, then every choice so far went undocumented. That’s the first thing a reviewer will ask about.':
    'Agar is stage tak bhi decision log khaali hai, toh ab tak ka har choice undocumented raha. Reviewer sabse pehle yahi poochega.',
  'Defend the system':
    'System ko defend kijiye',
  'Present the architecture, the evidence, the security, the cost, the viability and the risk that remains, to two different audiences.':
    'Architecture, evidence, security, cost, viability aur bacha hua risk, do alag audiences ke saamne rakhiye.',
  'The last skill this course tests is explaining and defending the system you built.':
    'Is course ka aakhri skill hai apne banaye system ko samjhana aur defend karna.',
  'Prepare a five-minute briefing for executives and a twenty-minute technical defence.':
    'Executives ke liye 5 minute ki briefing aur 20 minute ka technical defence taiyaar kijiye.',
  'Build a ten-slide deck and a public case study. Cover the problem and the evidence that it’s real. Then say what you built, whether it works, whether it’s safe, whether people use it, and whether it makes money. Finish with what failed, the trade-offs, and what you’re asking for next.':
    '10 slides ka deck aur ek public case study banaiye. Problem aur is baat ka evidence cover kijiye ki woh asli hai. Phir batayiye ki aapne kya banaya, kya woh kaam karta hai, kya woh safe hai, kya log use karte hain, aur kya usse paisa banta hai. Aakhir mein batayiye kya fail hua, trade-offs kya the, aur aap aage kya maang rahe hain.',
  'Ask a peer to challenge your model choice, your agent choice, your security and your cost assumptions.':
    'Kisi peer se kahiye ki woh aapka model choice, agent choice, security aur cost assumptions challenge kare.',
  'The final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck and public case study.':
    'Final repository, architecture, PRD, risk register, evaluation pack, observability dashboard, vendor scorecard, decision log, executive deck aur public case study.',
  'Can you explain every major decision without saying “the framework handles it”?':
    'Kya aap har bade decision ko “framework sambhaal leta hai” kahe bina samjha sakte hain?',
  'This is the credential you carry into interviews and design reviews.':
    'Yahi woh credential hai jo aap interviews aur design reviews mein saath le jaate hain.',
  'When you are done':
    'Jab aap poora kar lein',
  'How do you know you’re finished? Check this list. You’re done when every line is true.':
    'Aapko kaise pata chalega ki aap khatam kar chuke hain? Yeh list check kijiye. Aap tab poora kar chuke hain jab har line sach ho.',
  'It runs on a machine that is not yours, at a live URL.':
    'Yeh ek aisi machine par chalta hai jo aapki nahi hai, ek live URL par.',
  'Anyone can rerun the tests and get the same numbers.':
    'Koi bhi tests dobara chala sakta hai aur wahi numbers paa sakta hai.',
  'You have broken it in at least three real ways, on purpose.':
    'Aapne ise kam se kam teen asli tareekon se, jaanbujhkar toda hai.',
  'Three of your fixes have before and after numbers.':
    'Aapke teen fixes ke before aur after numbers hain.',
  'You attacked your own safeguards and recorded what happened.':
    'Aapne apne hi safeguards par attack kiya aur record kiya ki kya hua.',
  'You know how to roll it back if something goes wrong, and you have timed it.':
    'Aapko pata hai ki kuch galat hone par ise roll back kaise karna hai, aur aapne use time kiya hai.',
  'Five to ten real users have used it, and you have their evidence, not a teammate’s.':
    '5 se 10 asli users ne ise use kiya hai, aur aapke paas unka evidence hai, kisi teammate ka nahi.',
  'You can state cost per successful task, and what happens to margin at ten times the volume.':
    'Aap cost per successful task bata sakte hain, aur yeh bhi ki 10 guna volume par margin ka kya hota hai.',
  'At least one iteration is tied to measured evidence, and logged as a decision.':
    'Kam se kam ek iteration measured evidence se juda hai, aur decision ke roop mein log hua hai.',
  'You can explain every major choice without saying “the framework handles that”.':
    'Aap har bade choice ko “framework yeh sambhaal leta hai” kahe bina samjha sakte hain.',
  'Final self-test':
    'Aakhri self-test',
  'One last exercise. Answer these from memory, out loud if you can. If you get stuck on one, go back to the chapter that covers it.':
    'Ek aakhri exercise. In sawaalon ke jawaab yaad se dijiye, ho sake toh zor se bolkar. Agar kisi par atak jaayein, toh us chapter par wapas jaiye jo use cover karta hai.',
  'Why is the model stateless?':
    'Model stateless kyun hai?',
  'Why can retrieval fail, and why do embeddings help?':
    'Retrieval fail kyun ho sakta hai, aur embeddings kyun madad karte hain?',
  'Why does retrieval never say “nothing here” on its own?':
    'Retrieval kabhi apne aap “yahan kuch nahi hai” kyun nahi kehta?',
  'Why is top-k a trade-off?':
    'Top-k ek trade-off kyun hai?',
  'When does a workflow beat an agent?':
    'Workflow agent se kab behtar hota hai?',
  'Why are tools a security boundary?':
    'Tools ek security boundary kyun hain?',
  'Why must evaluation come before release, and why does tracing matter?':
    'Evaluation release se pehle kyun aani chahiye, aur tracing kyun matter karti hai?',
  'How do you calculate cost per successful task, not per call?':
    'Cost per successful task kaise nikalte hain, per call nahi?',
  'What makes an AI specification different from a normal one?':
    'Ek AI specification normal specification se alag kyun hota hai?',
  'Who is your buyer, and does your price cover what the model costs you?':
    'Aapka buyer kaun hai, aur kya aapka price woh cover karta hai jo model aapko cost karta hai?',
  'What would make you kill this project rather than keep iterating on it?':
    'Kya hone par aap is project ko kill kar denge, bajaye iterate karte rehne ke?',
  'If you can answer all of these, you’ve done what the course set out to do. You can build an AI system, break it, measure it, and stand behind it.':
    'Agar aap in sabke jawaab de sakte hain, toh aapne woh kar liya jo course karna chahta tha. Aap ek AI system bana sakte hain, use tod sakte hain, measure kar sakte hain, aur uske peeche khade ho sakte hain.',
  'This was the last required chapter. Next, Track B begins with B1, on business models, pricing and unit economics. Later, B7 turns what you just built into stories for interviews. The appendices turn your artifacts into reusable portfolio templates.':
    'Yeh aakhri required chapter tha. Aage Track B shuru hota hai B1 se, jo business models, pricing aur unit economics ke baare mein hai. Baad mein B7 aapne jo abhi banaya use interviews ki kahaniyon mein badalta hai. Appendices aapke artifacts ko reusable portfolio templates mein badalte hain.',
  'Ship Bharat Privacy Guard, and write the findings document':
    'Bharat Privacy Guard ship kijiye, aur findings document likhiye',
  'This is the final capstone of the technical course. Everything you have made now comes together in one repository and one document. Keep the document plain and factual. A findings document that reads like a brochure is not doing its job. Describe the project as “a privacy tool that helps an organisation collect and share less personal data”, and never as making anyone compliant.':
    'Yeh technical course ka final capstone hai. Aapne jo kuch bhi banaya hai, ab woh ek repository aur ek document mein ek saath aata hai. Document ko saaf aur factual rakhiye. Jo findings document brochure jaisa padhta hai, woh apna kaam nahi kar raha. Project ko is tarah describe kijiye: “ek privacy tool jo kisi organisation ko kam personal data collect aur share karne mein madad karta hai”, aur kabhi yeh mat kahiye ki yeh kisi ko compliant banata hai.',
  'Your repository, for the working system and its README, plus a written findings document. Both together are what you hand in.':
    'Aapki repository, chalte hue system aur uske README ke liye, aur ek likha hua findings document. Dono milkar hi aapka hand in hain.',
  'Make the repository work on a clean machine. Someone else must be able to clone it, follow the README and run the answer key.':
    'Repository ko ek clean machine par chalne laayak banaiye. Koi aur ise clone kar sake, README follow kar sake aur answer key chala sake.',
  'Add the architecture diagram and the decision log.':
    'Architecture diagram aur decision log jodiye.',
  'Add the final answer key and the scoreboard before and after your fixes.':
    'Final answer key aur apne fixes se pehle aur baad ka scoreboard jodiye.',
  'Add the results of the attacks you tried in Chapter 13, and some sample traces.':
    'Chapter 13 mein jo attacks aapne try kiye, unke results aur kuch sample traces jodiye.',
  'Add the cost and speed at your expected volume, and what changes at ten times the volume.':
    'Apne expected volume par cost aur speed jodiye, aur yeh bhi ki 10 guna volume par kya badalta hai.',
  'Add the requirements, the risk register, the system card and the rollout and rollback plan.':
    'Requirements, risk register, system card aur rollout aur rollback plan jodiye.',
  'Add real-user evidence: notes from sessions with five to ten people who are not your teammates, and the one change you made because of them.':
    'Asli users ka evidence jodiye: 5 se 10 aise logon ke saath sessions ke notes jo aapke teammates nahi hain, aur woh ek change jo aapne unki wajah se kiya.',
  'Write the findings document: what you built, what broke, who used it and what the evidence shows. Include three failures you found yourself, each with evidence, and three fixes, each with numbers from before and after.':
    'Findings document likhiye: aapne kya banaya, kya toota, kisne use kiya aur evidence kya dikhata hai. Teen failures shaamil kijiye jo aapne khud dhoondhe, har ek evidence ke saath, aur teen fixes, har ek ke before aur after numbers ke saath.',
  'End with what remains risky and what is deliberately out of scope, such as other Indian languages, the gateway and the browser extension.':
    'End mein likhiye ki kya risky bacha hai aur kya jaanbujhkar scope se bahar hai, jaise doosri Indian languages, gateway aur browser extension.',
  'A repository that works on a clean machine.':
    'Ek repository jo clean machine par chalti hai.',
  'Three failures you found yourself, each with evidence.':
    'Teen failures jo aapne khud dhoondhe, har ek evidence ke saath.',
  'Three fixes, each with before and after numbers.':
    'Teen fixes, har ek ke before aur after numbers ke saath.',
  'Evidence from five to ten real users who are not your teammates.':
    '5 se 10 asli users ka evidence jo aapke teammates nahi hain.',
  'The cost per message, and what happens to it at ten times the volume.':
    'Cost per message, aur 10 guna volume par uska kya hota hai.',
  'A five-minute explanation a non-technical leader could repeat, and a twenty-minute one that an engineer could not easily poke holes in.':
    'Ek 5 minute ki explanation jo koi non-technical leader dohra sake, aur ek 20 minute ki jisme koi engineer aasani se chhed na nikaal sake.'
});
