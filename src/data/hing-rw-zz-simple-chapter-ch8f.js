/* Hinglish for Software basics for AI work: Python, HTTP, Git and tests (chapter:ch8f), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Before you read more, open a notebook and write a short Python program. It should read some JSON (a form of labels and values), call an HTTP endpoint (a web address that answers), handle a failure status, and write JSON back out.':
    'Aage padhne se pehle notebook kholiye aur ek chhota Python program likhiye. Woh kuchh JSON (labels aur values ka form) padhe, ek HTTP endpoint (web address jo jawaab deta hai) ko call kare, failure status sambhale, aur JSON wapas likhe.',
  'Turn that program into an experiment harness. For every run, it saves an id, a timestamp, the model, the prompt, the response, the latency (the waiting time), the usage (bricks in and out) and any errors.':
    'Us program ko experiment harness bana dijiye. Har run ke liye woh ek id, timestamp, model, prompt, response, latency (intezaar ka time), usage (andar aur bahar ki eentein) aur koi bhi error save kare.',
  'Now try to break it. Feed it bad JSON, a missing field and a timeout. Then try a 429 and a 500. Watch which of these it survives.':
    'Ab ise todne ki koshish kijiye. Ise kharab JSON, ek gayab field aur ek timeout dijiye. Phir 429 aur 500 aazmaiye. Dekhiye inmein se kaun se yeh jhel leta hai.',
  'A Git repository (an online folder that remembers every change) that holds the harness and its tests.':
    'Ek Git repository (online folder jo har badlaav yaad rakhta hai) jismein harness aur uske tests hon.',
  'Pick one failure. Follow it from the input that caused it to the error it gave. This is how you trace a failure.':
    'Ek failure chuniye. Use us input se, jisne use banaya, us error tak follow kijiye. Failure ko trace karna ise hi kehte hain.',
  'Contract':
    'Contract',
  'A promise your code quietly makes about the data it gets. For example: this field is there, it is a number, this list is not empty. Each of these promises will break one day.':
    'Ek wada jo aapka code chupchap karta hai us data ke baare mein jo use milta hai. Jaise: yeh field maujood hai, yeh number hai, yeh list khaali nahi hai. Yeh har wada ek din tootega.',
  'Status code':
    'Status code',
  'The number a server sends back to say what happened, like the stamp on a delivery slip. 200 means it worked. 4xx means you got something wrong. 5xx means the server did.':
    'Woh number jo server wapas bhejta hai yeh batane ke liye ki kya hua, jaise delivery slip par muhar. 200 ka matlab kaam ho gaya. 4xx ka matlab aapse kuchh galat hua. 5xx ka matlab server se hua.',
  'Stack trace':
    'Stack trace',
  'The list of steps that were running when something broke, with the innermost step first. Think of the trail of muddy footprints. It shows where it broke, not why.':
    'Un steps ki list jo chal rahe the jab kuchh toota, sabse andar wala step pehle. Soch lijiye keechad bhare pairon ke nishaan. Yeh batati hai ki kahan toota, kyun nahi.',
  'Experiment harness':
    'Experiment harness',
  'A small tool that records every run in exactly the same way: the request, the response, the latency, the usage and any error. Then two runs can be compared fairly, like two students on the same answer sheet.':
    'Ek chhota tool jo har run ko bilkul ek jaise record karta hai: request, response, latency, usage aur koi bhi error. Tab do runs ki nishpaksh tulna ho sakti hai, jaise ek hi answer sheet par do students.',
  'An AI system is ordinary software with one part that nobody can predict (the model). In this chapter you learn the software around that part: Python, HTTP and JSON, secrets (private passwords), Git, logs (a diary of what happened) and tests. On the way you build an experiment harness, a small tool you will reuse for the rest of Part V.':
    'AI system aam software hai, bas ek hissa aisa hai jiska andaaza koi nahi laga sakta (model). Is chapter mein aap us hisse ke aas-paas ka software seekhte hain: Python, HTTP aur JSON, secrets (nijee password), Git, logs (kya hua uski diary) aur tests. Raste mein aap ek experiment harness banate hain, ek chhota tool jo aap Part V ke baaki hisse mein baar baar use karenge.',
  'Read a request, a response, a status code and a stack trace without fear.':
    'Ek request, ek response, ek status code aur ek stack trace ko bina dare padhiye.',
  'Explain why an AI system is ordinary software with one part that is a guess (a probabilistic part).':
    'Samjhaiye ki AI system aam software kyun hai jismein ek hissa andaaze wala (probabilistic) hai.',
  'Say where the engineering risk of an AI feature really sits.':
    'Batayiye ki AI feature ka engineering risk asal mein kahan baitha hota hai.',
  'Build the test harness and keep it in Git':
    'Test harness banaiye aur use Git mein rakhiye',
  'From here on, almost every chapter asks you to run the tool on the answer key (questions with right answers) and compare with last time. If you set the test up again each time, the comparison is not fair. You learned to read requests, responses and errors. Now you build the harness once, put it in Git, and keep adding to it for the rest of the course.':
    'Ab se lagbhag har chapter kehta hai ki tool ko answer key (sahi jawaab wale sawaal) par chalaiye aur pichhli baar se milaiye. Har baar test dobara banayenge to tulna nishpaksh nahi rahegi. Aapne requests, responses aur errors padhna seekha. Ab aap harness ek baar banayenge, use Git mein rakhenge, aur course ke baaki hisse mein usme jodte jayenge.',
  'The <a href="#/workbench">Workbench</a> in this app, or a local folder if you prefer. This is the harness you build in code and keep adding to through Chapter 34. The notes box below is for what surprised you, not for the code.':
    'Is app ka <a href="#/workbench">Workbench</a>, ya agar aap chahein to aapke computer ka folder. Yeh wahi harness hai jo aap code mein banate hain aur Chapter 34 tak badhate hain. Neeche ka notes box us cheez ke liye hai jisne aapko chauka diya, code ke liye nahi.',
  'Write a function (a recipe with a name) of about twenty lines. It reads your answer key (a CSV file, a spreadsheet saved as plain text) and gives back its rows. Let it filter by one column, for example “only the Hinglish rows”.':
    'Kareeb bees line ka ek function (naam wali recipe) likhiye. Woh aapki answer key (CSV file, plain text mein saved spreadsheet) padhe aur uski rows wapas de. Use ek column se filter karne dijiye, jaise “sirf Hinglish wali rows”.',
  'Add three tests for it. A test is a small check that says pass or fail. Make one with a normal file, one with a row that has a missing field, and one with an empty file.':
    'Iske liye teen tests jodiye. Test ek chhota check hai jo pass ya fail batata hai. Ek normal file ke saath banaiye, ek aisi row ke saath jismein field gayab ho, aur ek khaali file ke saath.',
  'Write a function that runs one sentence through your current pipeline and saves a JSON record of the run. The record holds the sentence, the findings, the time, the tokens and any error.':
    'Ek function likhiye jo ek sentence ko aapki maujooda pipeline se guzaare aur run ka JSON record save kare. Record mein sentence, findings, time, tokens aur koi bhi error ho.',
  'Write a function that compares the findings with the answer key. It prints recall and precision for each kind of ID and each kind of writing. This is the scoreboard you made by hand in Chapter 6.':
    'Ek function likhiye jo findings ko answer key se milaye. Woh har tarah ke ID aur har tarah ki likhai ke liye recall aur precision print kare. Yeh wahi scoreboard hai jo aapne Chapter 6 mein haath se banaya tha.',
  'Create a Git repository. Commit the harness (save it with a short note). Write a README (a first-page note) that explains how to run it on a clean machine.':
    'Ek Git repository banaiye. Harness ko commit kijiye (ek chhote note ke saath save kijiye). Ek README (pehle page ka note) likhiye jo samjhaye ki ise saaf machine par kaise chalana hai.',
  'Break one thing on purpose, such as a bad key, a time-out or a broken reply. Then check that the record is still written, with the error in it.':
    'Jaanbujhkar ek cheez todiye, jaise galat key, time-out ya tootta hua jawaab. Phir dekhiye ki record phir bhi likha gaya, aur usmein error hai.',
  'A repository that someone else can clone (copy) and run.':
    'Ek repository jise koi aur clone (nakal) karke chala sake.',
  'Three tests that pass, and one of them covers a failure.':
    'Teen tests jo pass hon, aur unmein se ek failure ko cover kare.',
  'A scoreboard printed from the answer key.':
    'Answer key se print hua scoreboard.',
  'One saved record from a run that failed.':
    'Ek fail hue run ka ek saved record.',
  'Reading Python':
    'Python padhna',
  'Chapter 0.8 taught you to read a cell (one box of code): names, lists, dictionaries, jobs and dots. This chapter writes a little more of it.':
    'Chapter 0.8 ne aapko cell (code ka ek dabba) padhna sikhaya: names, lists, dictionaries, jobs aur dots. Yeh chapter usme se thoda aur likhta hai.',
  'An API call is a request and a reply':
    'API call ek request aur ek reply hai',
  'You have been making these since Chapter 1, like sending an SMS and getting one back. This chapter looks at the software around them.':
    'Aap Chapter 1 se yeh kar rahe hain, jaise SMS bhejna aur ek wapas paana. Yeh chapter unke aas-paas ke software ko dekhta hai.',
  'So it is worth building, once, a harness that records usage.':
    'Isliye ek baar aisa harness banana theek hai jo usage record kare.',
  'Open the <a href="#/workbench">Workbench</a>, or a local folder if you prefer. In this chapter you build an experiment harness (a small tool that records every run the same way). You keep adding to it until Chapter 34.':
    '<a href="#/workbench">Workbench</a> kholiye, ya agar aap chahein to ek local folder. Is chapter mein aap ek experiment harness banate hain (ek chhota tool jo har run ko ek jaisa record karta hai). Aap Chapter 34 tak ismein jodte rahenge.',
  'Do units 8.4 and 8.5, then the capstone. The browser-only path: write and run your code in the <a href="#/workbench">Workbench</a>. Keep your files in the repository you made in Chapter A1, using <strong>Add file</strong>, then <strong>Upload files</strong>, on the GitHub website. A virtual environment (a private toolbox), a requirements file (a list of libraries) and CI (a robot that runs tests) are read-only this pass. Know what they are. Do not set them up.':
    'Units 8.4 aur 8.5 kijiye, phir capstone. Sirf browser wala raasta: apna code <a href="#/workbench">Workbench</a> mein likhiye aur chalaiye. Files us repository mein rakhiye jo aapne Chapter A1 mein banayi thi, GitHub website par <strong>Add file</strong>, phir <strong>Upload files</strong> se. Virtual environment (alag toolbox), requirements file (libraries ki list) aur CI (robot jo tests chalata hai) is baar sirf padhne ke liye hain. Jaanna hai ki yeh kya hain. Lagana nahi hai.',
  'Part V goes back over everything you built in Parts I to IV, this time at the depth a real launch needs. It starts with the ordinary software around the model. So far you have mostly looked at the model itself. The aim is small: when an engineer shows you a system diagram, you know every box on it.':
    'Part V un sab cheezon par wapas jata hai jo aapne Parts I se IV mein banayi, is baar utni gehraai se jitni asli launch ko chahiye. Yeh model ke aas-paas ke aam software se shuru hota hai. Ab tak aapne zyadatar model ko hi dekha hai. Maqsad chhota hai: jab engineer system diagram dikhaye, to aap uska har dabba pehchaan lein.',
  'Think of ordering food in an app. Your tap sends a message to a restaurant. A reply comes back with a price, and your screen changes. It looks mysterious until you see the messages going back and forth. The software around an AI model works the same way.':
    'Socho app mein khaana mangwana. Aapka tap restaurant ko ek message bhejta hai. Ek reply kimat ke saath wapas aata hai, aur aapki screen badal jati hai. Jab tak aap aate-jaate messages nahi dekhte, yeh rahasya lagta hai. AI model ke aas-paas ka software bhi aise hi chalta hai.',
  'Applied AI work uses APIs, Python, cloud services, retrieval, evaluation and production systems. If JSON, HTTP, environment variables (settings kept outside your code), tests and logs are new to you, you cannot question an architecture (the plan of how the parts fit). This chapter gives you the least you need.':
    'Applied AI ke kaam mein APIs, Python, cloud services, retrieval, evaluation aur production systems aate hain. Agar JSON, HTTP, environment variables (code ke bahar rakhi settings), tests aur logs aapke liye naye hain, to aap architecture (parts kaise jude hain, uska naksha) par sawaal nahi utha sakte. Yeh chapter aapko kam se kam jo chahiye woh deta hai.',
  'An AI system is ordinary software with one part that guesses (a probabilistic part). Everything that goes wrong in ordinary software can still go wrong here. On top of that, there is one more kind of failure, and it gives no error at all.':
    'AI system aam software hai jismein ek hissa andaaza lagata hai (probabilistic). Aam software mein jo kuchh bigad sakta hai, woh yahan bhi bigad sakta hai. Uske upar ek aur tarah ka failure hai, aur woh koi error deta hi nahi.',
  'There are five small units below. Each one has a goal, an idea, something to prove to yourself, something to build, a way to break it, and something to keep. Do them in order, because each builds on the one before.':
    'Neeche paanch chhote units hain. Har ek mein ek goal, ek idea, khud ko sabit karne ki cheez, banane ki cheez, ise todne ka tareeka, aur rakhne ki cheez hai. Kram se kijiye, kyunki har ek pichhle par banta hai.',
  'Python as an experiment instrument':
    'Python ek experiment ke auzaar ki tarah',
  'You learn to write small Python programs with functions (recipes with names), lists (rows of boxes), dictionaries (phone books) and loops (do a step for every item). Know them well enough to change an experiment yourself, without needing code someone else made.':
    'Aap functions (naam wali recipes), lists (dabbon ki katar), dictionaries (phone book) aur loops (har item ke liye ek step dohrana) ke saath chhote Python programs likhna seekhte hain. Inhe itna achha jaaniye ki aap khud experiment badal sakein, kisi aur ke banaye code ke bina.',
  'Think of Python as your lab notebook. The goal is to describe an experiment exactly, not to master the language.':
    'Python ko apni lab notebook maniye. Maqsad experiment ko theek theek likhna hai, poori bhasha mein maahir hona nahi.',
  'Make a few variables (labelled boxes), a function, a loop and a dictionary. Print each result as you go, so you can see what is happening.':
    'Kuchh variables (naam lage dabbe), ek function, ek loop aur ek dictionary banaiye. Har result saath mein print kijiye, taaki dikhe kya ho raha hai.',
  'Write a script that reads ten questions from a list and records a result object (one labelled box of results) for each one.':
    'Ek script likhiye jo list se das sawaal padhe aur har ek ke liye ek result object (results ka ek naam wala dabba) record kare.',
  'On purpose, pass in a missing key, an empty list and a value of the wrong type. Look at the errors you get.':
    'Jaanbujhkar ek gayab key, ek khaali list aur galat type ki value dijiye. Jo errors aayen, unhe dekhiye.',
  'A file called <code>chapter-8/python-basics.py</code>, plus a one-page log of the errors you saw.':
    'Ek file jiska naam <code>chapter-8/python-basics.py</code> ho, aur dekhe hue errors ka ek page ka log.',
  'Can you explain a function, a dictionary, a loop and an exception (a stop sign the code raises when something breaks) without opening any documentation?':
    'Kya aap function, dictionary, loop aur exception (kuchh tootne par code jo ruko-ka-nishaan uthata hai) ko bina documentation kholey samjha sakte hain?',
  'First write the harness in your own code, before you bring in a framework (ready-made scaffolding someone else built).':
    'Pehle harness apne code mein likhiye, framework (kisi aur ka banaya taiyaar dhaancha) laane se pehle.',
  'HTTP, JSON and API contracts':
    'HTTP, JSON aur API contracts',
  'You learn requests and responses, status codes, headers (the address labels on a message), JSON payloads (the contents of the message), and what it means when a contract fails.':
    'Aap requests aur responses, status codes, headers (message par pate ke label), JSON payloads (message ka samaan), aur contract fail hone ka matlab seekhte hain.',
  'An AI API is still just an API. The model is a guesser, but the network part around it is ordinary software engineering.':
    'AI API bhi ek API hi hai. Model andaaza lagata hai, par uske aas-paas ka network wala hissa aam software engineering hai.',
  'Call a safe public JSON endpoint. Print the status code and two of the fields it gives back.':
    'Ek surakshit public JSON endpoint ko call kijiye. Status code aur jo fields wapas aayein unmein se do print kijiye.',
  'Make a fake endpoint response that has missing fields and unexpected fields. Handle both cases.':
    'Ek nakli endpoint response banaiye jismein fields gayab hon aur anjaane fields hon. Dono haalat sambhaliye.',
  'Act out a 401, a 404, a 429 and a 500. For each one, decide if it is worth trying again.':
    '401, 404, 429 aur 500 ko nakli taur par kijiye. Har ek ke liye tay kijiye ki dobara koshish karna theek hai ya nahi.',
  'An API contract sheet that lists the request, the response, the errors and the retry policy (the rules for trying again).':
    'Ek API contract sheet jisme request, response, errors aur retry policy (dobara koshish ke niyam) likhe hon.',
  'What is the difference between a bad request (your mistake), an unavailable dependency (a helper you rely on is down) and a server failure (their mistake)?':
    'Bad request (aapki galti), unavailable dependency (jis madadgaar par aap tikay hain woh band hai) aur server failure (unki galti) mein kya fark hai?',
  'This is the vocabulary you need when someone says “the API failed” as if that explained everything. It lets you ask what really happened.':
    'Yeh woh shabdavali hai jo aapko chahiye jab koi “API fail ho gayi” aise kahe jaise yahi poori wajah ho. Isse aap poochh sakte hain ki asal mein kya hua.',
  'Environments, secrets and Git':
    'Environments, secrets aur Git',
  'You use environment variables and secrets, set up a virtual environment, and follow a basic Git workflow (change, save with a note, share).':
    'Aap environment variables aur secrets use karte hain, virtual environment lagate hain, aur ek buniyadi Git workflow (badlo, note ke saath save karo, baanto) follow karte hain.',
  'A prototype that leaks a key, or that nobody else can run again, will not be taken seriously by an engineer. It is like a recipe that only works in your own kitchen.':
    'Jo prototype key leak kare, ya jise koi aur dobara na chala sake, use engineer gambhirta se nahi leta. Yeh aisi recipe jaisa hai jo sirf aapki rasoi mein bante.',
  'Keep a secret outside your source code. Print only a masked prefix (the first few letters, rest hidden), never the whole thing.':
    'Secret ko apne source code ke bahar rakhiye. Sirf masked prefix print kijiye (shuru ke kuchh akshar, baaki chhupe), poora kabhi nahi.',
  'Create a repository with a README, a requirements file and one command that runs the experiment the same way every time.':
    'Ek repository banaiye jismein README, requirements file aur ek command ho jo experiment ko har baar ek jaise chalaye.',
  'Commit a change that you know is broken. Find it, then go back to the last version that worked.':
    'Ek aisa badlaav commit kijiye jo aap jaante hain ki tootha hua hai. Use dhoondhiye, phir aakhri chalte version par laut jaiye.',
  'A repository skeleton that anyone can run again, with a <code>.gitignore</code> (a list of files Git must not keep), a README and an experiment log.':
    'Ek repository ka dhaancha jise koi bhi dobara chala sake, jismein <code>.gitignore</code> (files ki list jo Git ko nahi rakhni), ek README aur ek experiment log ho.',
  'Could another person run your experiment without asking you what you did by hand?':
    'Kya koi aur aapka experiment chala sakta hai, bina yeh poochhe ki aapne haath se kya kiya?',
  'Doing it again and getting the same result matters to a PM, because it turns a demo into evidence.':
    'Dobara karke wahi result paana PM ke liye zaroori hai, kyunki isse demo saboot ban jata hai.',
  'Errors, logging and tests':
    'Errors, logging aur tests',
  'You learn to read stack traces, add structured logs (a diary written in the same neat format each time), and write small tests.':
    'Aap stack traces padhna, structured logs jodna (diary jo har baar ek jaise saaf format mein likhi ho), aur chhote tests likhna seekhte hain.',
  'You judge an AI system by what happens when things go wrong, not only when all goes well.':
    'AI system ko aap isse parakhte hain ki jab cheezein bigadti hain tab kya hota hai, sirf tab nahi jab sab theek chale.',
  'Write three tests: one for an expected answer, one for missing input, and one for a malformed (broken-shaped) response.':
    'Teen tests likhiye: ek ummeed ke jawaab ke liye, ek gayab input ke liye, aur ek malformed (tootte aakaar wale) response ke liye.',
  'Add a request ID, a timestamp, the model and the status to every experiment record.':
    'Har experiment record mein ek request ID, timestamp, model aur status jodiye.',
  'Force a timeout, and force a malformed output. Follow each failure from the input to the exception it caused.':
    'Ek timeout karwaiye, aur ek malformed output karwaiye. Har failure ko input se us exception tak follow kijiye jo usne paida kiya.',
  'A mini test suite (a small set of tests), plus a failure log that notes the root cause and the fix for each failure.':
    'Ek mini test suite (tests ka chhota sa set), aur ek failure log jisme har failure ka asli kaaran aur sudhaar likha ho.',
  'Can you tell an application bug (a fault in your code) from a failure on the provider’s side or in the model?':
    'Kya aap application bug (aapke code ki galti) ko provider ki taraf ya model mein hui kharabi se alag pehchaan sakte hain?',
  'This becomes the base for evaluation and observability (being able to see what a system is doing) later in the course.':
    'Yeh course mein aage evaluation aur observability (system kya kar raha hai, yeh dekh paana) ki neev banta hai.',
  'Build the experiment harness':
    'Experiment harness banaiye',
  'You create a reusable runner (a tool you can run again and again). It records the inputs, the outputs, the configuration (the settings used), the latency and any errors.':
    'Aap ek reusable runner banate hain (ek tool jo baar baar chal sake). Woh inputs, outputs, configuration (use hui settings), latency aur koi bhi error record karta hai.',
  'The harness is the bridge between “I tried it” and “I measured it.”':
    'Harness “maine try kiya” aur “maine naapa” ke beech ka pul hai.',
  'Run one prompt twice. Save both runs as structured JSON (labels and values in a fixed shape).':
    'Ek prompt do baar chalaiye. Dono runs ko structured JSON mein save kijiye (labels aur values, tay aakaar mein).',
  'Add the experiment name, the version, the model, the prompt version, the input and output tokens when they are available, the latency, and a field for notes.':
    'Experiment ka naam, version, model, prompt version, input aur output tokens jab mil sakein, latency, aur notes ke liye ek field jodiye.',
  'Change one thing. Check that the logs make the difference between the two runs easy to see.':
    'Ek cheez badliye. Dekhiye ki logs dono runs ka fark saaf dikha dete hain.',
  'A folder called <code>experiment_runner/</code> with a schema (the form’s fixed boxes), the runner, some sample runs and a README.':
    'Ek folder jiska naam <code>experiment_runner/</code> ho, jismein schema (form ke tay khaane), runner, kuchh sample runs aur ek README ho.',
  'Can you get yesterday’s result again, and explain what changed since then?':
    'Kya aap kal ka result dobara la sakte hain, aur samjha sakte hain ki tab se kya badla?',
  'Every later chapter should plug into this harness. None of them should make its own way of recording evidence.':
    'Aage ka har chapter is harness mein judna chahiye. Kisi ko bhi saboot record karne ka apna alag tareeka nahi banana chahiye.',
  'Contracts fail silently':
    'Contracts chupchap fail hote hain',
  'Every AI application leans on many small assumptions about its data. This field will be there. That value will be a number. This list will not be empty. Each of these is a <strong>contract</strong>, like a promise between two people. In real use, every one of them will break sooner or later.':
    'Har AI application apne data ke baare mein kai chhoti dharnaon par tiki hoti hai. Yeh field hogi. Woh value number hogi. Yeh list khaali nahi hogi. Inme se har ek ek <strong>contract</strong> hai, do logon ke beech ke wade jaisa. Asli use mein inme se har ek der-saver tootega.',
  'A system in real use must notice when a contract breaks, and not carry on. Many real AI incidents look like this: nothing raised an error, and the answer was built on missing data.':
    'Asli use mein system ko yeh pehchaanna chahiye ki contract toota, aur aage nahi badhna chahiye. Bahut se asli AI incidents aise dikhte hain: kisi ne error nahi uthaya, aur jawaab gayab data par bana tha.',
  'What “enough” means':
    '“Kaafi” ka matlab',
  'You do not need to become a backend engineer. You have enough when you are comfortable with all of these.':
    'Aapko backend engineer banne ki zaroorat nahi. Aapke paas kaafi hai jab aap in sab mein sahaj hon.',
  'You can write a small function, and keep a few labelled values together in a dictionary.':
    'Aap ek chhota function likh sakte hain, aur kuchh naam wali values ek dictionary mein saath rakh sakte hain.',
  'You know your <strong>status codes</strong>: 200 means it worked, 4xx means the request was wrong, and 5xx means the server failed.':
    'Aap apne <strong>status codes</strong> jaante hain: 200 ka matlab kaam ho gaya, 4xx ka matlab request galat thi, aur 5xx ka matlab server fail hua.',
  'You know what <strong>JSON</strong> is: labels and values inside curly brackets, the form most systems use to pass data to each other.':
    'Aap jaante hain ki <strong>JSON</strong> kya hai: curly brackets ke andar labels aur values, woh form jisse zyadatar systems ek doosre ko data dete hain.',
  'You keep a password or API key (the secret password for the model) out of your code, in an environment variable instead.':
    'Aap password ya API key (model ka secret password) ko apne code se bahar, environment variable mein rakhte hain.',
  'You save your work in Git, so you can go back to an earlier version, like an undo that remembers everything.':
    'Aap apna kaam Git mein save karte hain, taaki purane version par ja sakein, jaise ek undo jo sab yaad rakhta hai.',
  'You read an error message from the bottom up, because the real cause is usually there.':
    'Aap error message ko neeche se upar padhte hain, kyunki asli kaaran aam taur par wahin hota hai.',
  'You can write a test that fails on purpose, so you know it really does check something.':
    'Aap aisa test likh sakte hain jo jaanbujhkar fail ho, taaki pata chale ki woh sach mein kuchh jaanchta hai.',
  'Two more ideas are good to know, but you do not need to write them yourself. One is background jobs (work done quietly while you do something else). The other is queues, like a line at a ticket window: work waits until someone is free to do it.':
    'Do aur baatein jaanna achha hai, par unhe khud likhna zaroori nahi. Ek hai background jobs (woh kaam jo aap kuchh aur karte hue chupchap hota hai). Doosri hai queues, ticket khidki ki line jaisi: kaam tab tak rukta hai jab tak koi use karne ke liye khaali na ho.',
  'Let us test how much you already understand about a real feature.':
    'Chaliye dekhte hain ki aap ek asli feature ke baare mein pehle se kitna samajhte hain.',
  'Think of the last AI feature you saw in a demo. In plain words, write what its request probably held and what its response probably looked like. Where are you guessing?':
    'Aakhri AI feature socho jo aapne demo mein dekha. Saade shabdon mein likhiye ki uski request mein shayad kya tha aur response kaisa dikhta hoga. Aap kahan andaaza laga rahe hain?',
  'The request probably contained … The response probably … I am guessing about …':
    'Request mein shayad yeh tha … Response shayad … Mujhe andaaza lagana pada …',
  'The places where you had to guess are the questions to ask the team that built it. Being able to make that list is the main skill this chapter teaches.':
    'Jahan aapko andaaza lagana pada, wahi sawaal hain jo aapko us team se poochhne chahiye jisne yeh banaya. Yeh list bana paana hi is chapter ka sabse bada skill hai.',
  'A model API call is an ordinary software dependency (something your code leans on). The engineering risk sits in the interfaces, the error handling, the secrets, the retries, the monitoring and the contracts, at least as much as in the model.':
    'Model API call ek aam software dependency hai (kuchh jis par aapka code tikta hai). Engineering ka risk interfaces, error handling, secrets, retries, monitoring aur contracts mein baitha hota hai, kam se kam utna jitna model mein.',
  'You now know the everyday software around a model, and you have a harness that records each run the same way. Next, in Chapter 22, you will use that harness to compare models.':
    'Ab aap model ke aas-paas ka roz ka software jaante hain, aur aapke paas ek harness hai jo har run ko ek hi tareeke se record karta hai. Agla chapter, Chapter 22, isi harness se models ko compare karega.',
});
