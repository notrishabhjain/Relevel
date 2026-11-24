/* Hinglish: part1, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch05: Try it in the browser: tokens, cost and temperature ---- */
  'Try it in the browser: tokens, cost and temperature':
    'Browser mein try kijiye: tokens, cost aur temperature',
  'Explain why the twentieth message in a chat costs more than the first.':
    'Samjha paana ki chat ka beesvaan message pehle message se zyada mehnga kyun padta hai.',
  'Before you start':
    'Shuru karne se pehle',
  'Experiment 1: Models read tokens, not words':
    'Experiment 1: Model words nahi, tokens padhta hai',
  'Fewer, about the same, or more?':
    'Kam, lagbhag utne hi, ya zyada?',
  'Experiment 2: The model only sees what you send':
    'Experiment 2: Model sirf wahi dekhta hai jo aap bhejte hain',
  'Watch the cost grow each turn':
    'Har turn ke saath cost badhte dekhiye',
  'Experiment 3: What temperature changes':
    'Experiment 3: Temperature kya badalta hai',
  'Change the temperature':
    'Temperature badal kar dekhiye',
  'What you have learned':
    'Aapne kya seekha',
  'Tip':
    'Tip',
  'Compare what English, Hindi and Hinglish cost':
    'English, Hindi aur Hinglish ki cost compare kijiye',
  'For each one, work out how many tokens it uses for every 100 characters. Which one costs the most for the same message?':
    'Har ek ke liye nikaaliye ki woh har 100 characters par kitne tokens leta hai. Ek hi message ke liye kaunsa sabse mehnga padta hai?',
  'A table of characters and tokens for English, Hindi and Hinglish.':
    'English, Hindi aur Hinglish ke characters aur tokens ki ek table.',
  'The cost of checking one message and a thousand messages, for each kind of writing.':
    'Har tarah ki writing ke liye ek message aur hazaar messages check karne ki cost.',

  /* ---- ch1: Your first API call: how a model answers ---- */
  'Your first API call: how a model answers':
    'Aapki pehli API call: model jawaab kaise deta hai',
  'The five minutes of setup, done once. Chapter 1 is the first chapter that uses it.':
    'Setup ke woh paanch minute, jo sirf ek baar karne hote hain. Chapter 1 pehla chapter hai jo isse kaam leta hai.',
  'Make your first call':
    'Apni pehli call kijiye',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'One line: what do you think it does?':
    'Ek line mein: aapko kya lagta hai woh kya karega?',
  'What you send, and what you pay for':
    'Aap kya bhejte hain, aur kis cheez ka paisa dete hain',
  'Read the usage block':
    'Usage block padhiye',
  'Tokens: the unit you are billed in':
    'Tokens: woh unit jisme aapse paisa liya jaata hai',
  'Watch the token count change':
    'Token count badalte hue dekhiye',
  'What this means for your product':
    'Yeh aapke product ke liye kya matlab rakhta hai',
  'Three runs on real starter sentences, with the token counts printed and averaged.':
    'Asli starter sentences par teen runs, token counts print kiye hue aur average nikale hue.',

  /* ---- ch15b: Context windows and statelessness: why models forget ---- */
  'Context windows and statelessness: why models forget':
    'Context windows aur statelessness: models bhool kyun jaate hain',
  'A notebook and a key':
    'Ek notebook aur ek key',
  'The context window is a size limit':
    'Context window ek size limit hai',
  'The model does not remember between calls':
    'Model calls ke beech yaad nahi rakhta',
  'Prove the model forgets':
    'Saabit kijiye ki model bhool jaata hai',
  'Make two separate calls, one after the other:':
    'Do alag calls kijiye, ek ke baad ek:',
  'How chat apps create memory':
    'Chat apps memory kaise banate hain',
  'Build a simple chat memory':
    'Ek simple chat memory banaiye',
  'Summary':
    'Summary',
  'Two sentences.':
    'Do sentence.',
  'The five prompt_tokens numbers, one for each message.':
    'Paanch prompt_tokens numbers, har message ke liye ek.',
  'Your one budget sentence.':
    'Aapka budget wala ek sentence.',

  /* ---- ch2: System prompts, temperature and hallucination ---- */
  'System prompts, temperature and hallucination':
    'System prompts, temperature aur hallucination',
  'The system prompt':
    'System prompt',
  'Note':
    'Note',
  'Temperature':
    'Temperature',
  'Up or down, and what you give up':
    'Upar ya neeche, aur aap kya chhodte hain',
  'Make the model invent an answer':
    'Model se ek jawaab invent karwaiye',
  'Add one instruction':
    'Ek instruction jodiye',
  'Break your own fix':
    'Apna hi fix todiye',
  'Keep the same system prompt. Change only the user message, and push harder:':
    'Wahi system prompt rakhiye. Sirf user message badaliye, aur zyada zor lagaiye:',
  'The instruction, then the question that beats it.':
    'Instruction, phir woh sawaal jo use haraye.',
  'Rarer is not the same as fixed':
    'Kam hona aur theek hona ek cheez nahi hai',
  'Run starter sentence 8 (the diabetic patient) and starter sentence 9 (the driving licence) five times each. Does the answer change from one run to the next? Write down what you saw.':
    'Starter sentence 8 (diabetic patient) aur starter sentence 9 (driving licence) ko paanch-paanch baar run kijiye. Kya jawaab ek run se doosre run mein badalta hai? Jo dekha woh likh lijiye.',
  'Your system prompt, saved in the notebook.':
    'Aapka system prompt, notebook mein save kiya hua.',
  'The nine answers, each marked correct, partly correct or wrong.':
    'Nau jawaab, har ek correct, partly correct ya wrong mark kiya hua.',
  'What happened when you ran sentences 8 and 9 five times each.':
    'Sentences 8 aur 9 ko paanch-paanch baar run karne par kya hua.',

  /* ---- ch21: Writing prompts: four techniques that work ---- */
  'Writing prompts: four techniques that work':
    'Prompt likhna: chaar techniques jo kaam karti hain',
  'Tell which of the four techniques is doing the work in any prompt.':
    'Bata paana ki kisi bhi prompt mein chaar techniques mein se kaun si technique asli kaam kar rahi hai.',
  'Test your system prompt on a new task':
    'Apna system prompt ek naye task par test kijiye',
  'Technique 1: Show an example instead of describing':
    'Technique 1: Describe karne ki jagah example dikhaiye',
  'Describe it, then show it':
    'Pehle describe kijiye, phir dikhaiye',
  'Better, worse or no change, and why':
    'Behtar, kharab ya koi farq nahi, aur kyun',
  'Technique 2: Name the job and the reader':
    'Technique 2: Job aur reader ka naam lijiye',
  'Give the same text a job description':
    'Wahi text, lekin ek job description ke saath',
  'Technique 3: Break the job into steps':
    'Technique 3: Kaam ko steps mein todiye',
  'Ask for the steps':
    'Steps maangiye',
  'Technique 4: Forbid what you have seen go wrong':
    'Technique 4: Jo galat hote dekha hai, use mana kijiye',
  'Now try all four together, one after another. This is the most useful exercise in the chapter.':
    'Ab chaaron ko ek ke baad ek try kijiye. Is chapter ki sabse kaam ki exercise yahi hai.',
  'v1 the job … v2 the steps … v3 the example … v4 the one thing it must not do':
    'v1 job … v2 steps … v3 example … v4 woh ek cheez jo woh nahi kare',
  'Show an example, name the job, break it into steps, and forbid only what you have seen go wrong.':
    'Example dikhaiye, job ka naam lijiye, kaam ko steps mein todiye, aur sirf woh mana kijiye jo aapne galat hote dekha hai.',
  'Improve the instructions until a stranger can use them':
    'Instructions ko tab tak behtar kijiye jab tak koi anjaan insaan unhe use kar sake',
  'The answers on starter sentences 4, 5 and 8, before and after.':
    'Starter sentences 4, 5 aur 8 par jawaab, pehle aur baad.',
  'What your friend or colleague found confusing.':
    'Aapke dost ya colleague ko kya confusing laga.',
  'One line for each technique, saying what it changed.':
    'Har technique ke liye ek line ki usne kya badla.',

  /* ---- ch22: Testing prompts: build a small test set ---- */
  'Testing prompts: build a small test set':
    'Prompts ko test kijiye: ek chhota test set banaiye',
  'Run one prompt five times':
    'Ek prompt ko paanch baar chalaiye',
  'Build the test set':
    'Test set banaiye',
  'Build a ten-row test set':
    '10 rows ka test set banaiye',
  'Score all four versions':
    'Chaaron versions ko score kijiye',
  'Change one thing at a time':
    'Ek baar mein ek hi cheez badaliye',
  'What goes wrong':
    'Kya galat hota hai',
  'Build the answer key (version 1)':
    'Answer key banaiye (version 1)',
  'A table with the baseline score and the three changes.':
    'Ek table jisme baseline score aur teen changes hon.',

  /* ---- ch23: The five task types: classify, extract, summarise, rewrite, generate ---- */
  'The five task types: classify, extract, summarise, rewrite, generate':
    'Paanch task types: classify, extract, summarise, rewrite, generate',
  'A test set, and one change at a time':
    'Ek test set, aur ek baar mein ek change',
  'The five types':
    'Paanch types',
  'Task type':
    'Task type',
  'What it does':
    'Kya karta hai',
  '<strong>Classify</strong>':
    '<strong>Classify</strong>',
  'Yes: there is a right answer':
    'Haan: ek sahi jawaab hota hai',
  '<strong>Extract</strong>':
    '<strong>Extract</strong>',
  '<strong>Summarise</strong>':
    '<strong>Summarise</strong>',
  'Make it shorter without losing what matters':
    'Ise chhota karna, bina zaroori baatein khoye',
  'No: it depends on the reader':
    'Nahi: yeh reader par depend karta hai',
  '<strong>Rewrite</strong>':
    '<strong>Rewrite</strong>',
  'No, but you can check what must not change':
    'Nahi, lekin aap check kar sakte hain ki kya nahi badalna chahiye',
  '<strong>Generate</strong>':
    '<strong>Generate</strong>',
  'No, and most projects start here':
    'Nahi, aur zyadatar projects yahin se shuru hote hain',
  'Sort real requests into the five types':
    'Asli requests ko paanch types mein sort kijiye',
  'Split mixed requests into steps':
    'Mixed requests ko steps mein todiye',
  'Split the request that did not fit':
    'Jo request fit nahi hui, use todiye',
  'Which type, and what changes':
    'Kaun sa type, aur kya badalta hai',
  'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?':
    'Ek colleague kehta hai: “Ek AI chahiye jo contracts review kare aur risky clauses flag kare.” Yeh kaun sa task type hai?',
  'Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.':
    '“Kaun sa task type?” pehle poochhiye, “kaun sa model?” baad mein. Agar jawaab mein ek se zyada type aayein, toh request ko steps mein todiye.',
  'Break the whole tool down into small tasks':
    'Poore tool ko chhote tasks mein todiye',
  'Write the request in the plainest words: “Find and hide personal details in English, Hindi and Hinglish text before it reaches an AI model.” Do not tidy it up.':
    'Request ko sabse saade words mein likhiye: “Personal details ko English, Hindi aur Hinglish text mein dhoondhna aur hide karna, uske AI model tak pahunchne se pehle.” Use saaf-suthra mat banaiye.',

  /* ---- ch24: Classification: sorting inputs into categories ---- */
  'Classification: sorting inputs into categories':
    'Classification: inputs ko categories mein sort karna',
  'A test set shows whether a change helped':
    'Test set se pata chalta hai ki change se fayda hua ya nahi',
  'Look again at your test set':
    'Apne test set ko ek baar phir dekhiye',
  'First, open the ten-row test set you made in Chapter 2.2. Look at the “good answer contains” column.':
    'Sabse pehle, Chapter 2.2 mein aapne jo ten-row test set banaya tha, use kholiye. “good answer contains” wala column dekhiye.',
  'What classification is':
    'Classification kya hai',
  'Build a first version':
    'Pehla version banaiye',
  'When a … is missed, … . When something is wrongly marked …, … .':
    'Jab koi … chhoot jaata hai, toh … . Jab kuch galti se … mark ho jaata hai, toh … .',
  'Build a sorter for the kind of ID, and measure it':
    'ID kis kism ki hai, iske liye ek sorter banaiye aur use measure kijiye',
  'Write down the categories: Aadhaar, PAN, mobile number, bank account, PIN code, and “something else”.':
    'Categories likh lijiye: Aadhaar, PAN, mobile number, bank account, PIN code, aur “something else”.',
  'A decision with a reason: act alone, or only suggest.':
    'Wajah ke saath ek decision: akele kaam kare, ya sirf suggest kare.',

  /* ---- ch25: Summarisation: testing what a summary keeps ---- */
  'Summarisation: testing what a summary keeps':
    'Summarisation: summary ne kya rakha, yeh test karna',
  'Test a summariser for the failure that matters: what it left out.':
    'Summariser ko us failure ke liye test kar paana jo matter karta hai: usne kya chhod diya.',
  'How summaries fail':
    'Summaries kaise fail hoti hain',
  'Summarise with a plain instruction':
    'Plain instruction se summarise kijiye',
  'Start from the reader':
    'Reader se shuru kijiye',
  'Summarise for three different readers':
    'Teen alag readers ke liye summarise kijiye',
  'Test what the summary keeps':
    'Test kijiye ki summary ne kya rakha',
  'Build a fact check':
    'Ek fact check banaiye',
  'Write a short privacy report, and check it against the facts':
    'Ek chhoti privacy report likhiye, aur use facts ke saamne check kijiye',
  'Make a batch of ten results by hand, using starter sentences 1 to 10. For each one, write the list of things the tool found and what it did to them.':
    'Starter sentences 1 se 10 use karke haath se das results ka ek batch banaiye. Har ek ke liye likhiye ki tool ko kya-kya mila aur usne un par kya kiya.',
  'Decide who will read the summary and what they will do next. For example: “A compliance manager reads it every Monday and decides whether to change a rule.” Write this in one line.':
    'Tay kijiye ki summary kaun padhega aur woh uske baad kya karega. Jaise: “A compliance manager reads it every Monday and decides whether to change a rule.” Ise ek line mein likhiye.',
  'Write a prompt that asks a model to summarise the ten results in five lines for that reader.':
    'Ek prompt likhiye jo model se kahe ki un das results ko us reader ke liye paanch lines mein summarise kare.',
  'Run it again with one instruction changed. Did the missing or invented facts go away? Write what you changed and what happened.':
    'Ek instruction badalkar dobara chalaiye. Kya missing ya invented facts chale gaye? Likhiye ki aapne kya badla aur kya hua.',
  'The five facts the summary had to contain, ticked off for each run.':
    'Woh paanch facts jo summary mein hone the, har run ke liye tick karke.',
  'Any invented facts you found.':
    'Jo bhi invented facts aapko mile.',
  'What you changed on the second run, and what it did.':
    'Doosre run mein aapne kya badla, aur usne kya kiya.',

  /* ---- ch3: Chunking: splitting documents into pieces ---- */
  'Chunking: splitting documents into pieces':
    'Chunking: documents ko pieces mein todna',
  'You pay for everything you send':
    'Aap jo bhi bhejte hain, uske paise lagte hain',
  'Give the two reasons you cannot send a model every document you have.':
    'Woh do wajah bata paana ki aap model ko apne saare documents kyun nahi bhej sakte.',
  'Write your test questions first':
    'Pehle apne test questions likhiye',
  'Why you cannot send everything':
    'Sab kuch kyun nahi bhej sakte',
  'Round 1: three large chunks':
    'Round 1: teen bade chunks',
  'Cut the document into thirds':
    'Document ko teen hisson mein kaatiye',
  'Round 2: twenty small chunks':
    'Round 2: bees chhote chunks',
  'Cut the document into small pieces':
    'Document ko chhote pieces mein kaatiye',
  'Your rule, and what it will get wrong':
    'Aapka rule, aur woh kya galat karega',
  'Orphaned chunks lose their meaning':
    'Orphan chunks apna matlab kho dete hain',
  'Round 3: cut along the structure':
    'Round 3: structure ke saath kaatiye',
  'Cut the way you think it should be cut':
    'Jaise aapko theek lage, waise kaatiye',
  'We are cutting at … which gains … and loses …':
    'Hum … par kaat rahe hain, jisse … milta hai aur … khota hai.',
  'Decide how to cut long text without splitting an ID in half':
    'Lambe text ko kaise kaatein ki koi ID beech se na toote',
  'A three-line cutting rule, and the one case it still gets wrong.':
    'Teen lines ka ek cutting rule, aur woh ek case jo woh abhi bhi galat karta hai.',

  /* ---- ch4: Keyword search: matching words, and where it fails ---- */
  'Keyword search: matching words, and where it fails':
    'Keyword search: words match karna, aur woh kahan fail hota hai',
  'Explain why getting a result back does not mean an answer exists.':
    'Samjha paana ki result wapas aane ka matlab yeh nahi ki jawaab maujood hai.',
  '“The aforesaid amount” no longer says which amount.':
    '“The aforesaid amount” se ab yeh pata nahi chalta ki kaun si amount.',
  'Keyword search matches spelling, not meaning':
    'Keyword search spelling match karta hai, matlab nahi',
  'What the user typed → what the document says':
    'User ne kya type kiya → document mein kya likha hai',
  'Run keyword search by hand':
    'Keyword search haath se chalaiye',
  'Act as the search engine':
    'Search engine ban kar dekhiye',
  'Watch out':
    'Dhyaan rakhiye',
  'Write three harder questions':
    'Teen mushkil sawaal likhiye',
  'Where keyword search fails':
    'Keyword search kahan fail hota hai',
  'Where keyword search wins':
    'Keyword search kahan jeet jaata hai',
  'Search for an exact code':
    'Exact code search kijiye',
  'Search always returns something':
    'Search hamesha kuch na kuch wapas karta hai',
  'One line':
    'Ek line',
  'Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.':
    'Kuch aisa: <em>woh spellings compare kar sakta hai, lekin matlab nahi.</em> Yeh sentence sambhal kar rakhiye. Chapter 5 is gap ko bharta hai. Ho sake toh ise padhne se pehle ek din ruk jaaiye.',
  'Write the pattern rules, and score them by hand':
    'Pattern rules likhiye, aur unhe haath se score kijiye',
  'Your answer key with a new column of what the rules would find, and each row marked.':
    'Aapka answer key, ek nayi column ke saath jisme woh hai jo rules dhoondhenge, aur har row mark ki hui.',

  /* ---- ch5: Embeddings: searching by meaning ---- */
  'Embeddings: searching by meaning':
    'Embeddings: meaning se search karna',
  'Explain embeddings from the results you saw, not from a definition.':
    'Embeddings ko definition se nahi, balki jo results aapne dekhe unse samjhaiye.',
  'Keyword search cannot see meaning':
    'Keyword search matlab nahi dekh sakta',
  'Two sentences with the same meaning and no shared words do not match.':
    'Do sentences ka matlab ek ho aur words common na hon, toh woh match nahi hote.',
  'Say what a similarity score of 0.5 does and does not mean.':
    'Bata paana ki 0.5 ke similarity score ka kya matlab hai aur kya nahi.',
  'A map of meanings':
    'Meanings ka ek map',
  'A number between 0 and 1':
    '0 aur 1 ke beech ka ek number',
  'Build it in code':
    'Ise code mein banaiye',
  'Create embeddings and compare them':
    'Embeddings banaiye aur compare kijiye',
  'Questions and passages are embedded differently':
    'Sawaal aur passages alag tarah se embed hote hain',
  'Search your own chunks by meaning':
    'Apne chunks ko meaning se search kijiye',
  'Ask something the document does not cover':
    'Aisa kuch poochiye jo document mein nahi hai',
  'Where embeddings fail':
    'Embeddings kahan fail hote hain',
  'In our domain the model would get … wrong, because …':
    'Hamare domain mein model … galat karega, kyunki …',
  'Turn the rules into code, and compare them with finding by meaning':
    'Rules ko code mein badaliye, aur unhe meaning se dhoondhne ke saath compare kijiye',
  'Your pattern rules as working code, with the score on the twelve rows.':
    'Aapke pattern rules working code ki tarah, baarah rows par score ke saath.',

  /* ---- ch6: Evaluation: measuring whether search works ---- */
  'Evaluation: measuring whether search works':
    'Evaluation: search kaam karta hai ya nahi, yeh naapna',
  'Idea 1: Write the answers before you test':
    'Idea 1: Test karne se pehle jawaab likhiye',
  'Write the answer key':
    'Answer key likhiye',
  'A fraction, like 6/10':
    'Ek fraction, jaise 6/10',
  'Predict, then measure':
    'Pehle andaaza, phir measurement',
  'Idea 2: Precision and recall trade against each other':
    'Idea 2: Precision aur recall ek-doosre ke khilaaf kaam karte hain',
  'Change k and compare':
    'k badaliye aur compare kijiye',
  'k':
    'k',
  '1':
    '1',
  '… / 9':
    '… / 9',
  '3':
    '3',
  '… / 27':
    '… / 27',
  '8':
    '8',
  '… / 72':
    '… / 72',
  'Idea 3: Which failure is worse depends on the product':
    'Idea 3: Kaun sa failure zyada kharab hai, yeh product par depend karta hai',
  'For … the dangerous failure is … because … so I would start at k = …':
    '… ke liye khatarnaak failure … hai kyunki … isliye main k = … se shuru karunga',
  'Build the scoreboard, and write a ship-or-not note':
    'Scoreboard banaiye, aur ek ship-karna-hai-ya-nahi ka note likhiye',
  'The answer key, version 2, with about 30 rows, saved in your repository.':
    'Answer key, version 2, lagbhag 30 rows ke saath, aapki repository mein save ki hui.',

  /* ---- ch7: Putting it together: retrieval-augmented generation (RAG) ---- */
  'Putting it together: retrieval-augmented generation (RAG)':
    'Sab kuch jodna: retrieval-augmented generation (RAG)',
  'The pattern has a name: RAG':
    'Is pattern ka ek naam hai: RAG',
  'Mark where it fails':
    'Dekhiye kahan fail hota hai',
  'Assemble the system':
    'System ko jodiye',
  'Build the RAG function':
    'RAG function banaiye',
  'Remove the system prompt':
    'System prompt hata kar dekhiye',
  'Diagnose “bad answers”':
    '“Bad answers” ka diagnosis kijiye',
  'Write the findings page for version 0':
    'Version 0 ka findings page likhiye',
  'Draw the tool as boxes and arrows on one page: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark which boxes exist today.':
    'Tool ko ek page par boxes aur arrows se draw kijiye: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark kijiye ki aaj kaun se boxes maujood hain.',
  'Write the scoreboard numbers from Chapter 6 on the page.':
    'Chapter 6 ke scoreboard numbers page par likhiye.',
  'The scoreboard numbers.':
    'Scoreboard numbers.',
  'Two sentences on what you will fix first.':
    'Do sentences jisme likha ho ki aap sabse pehle kya fix karenge.'
});
