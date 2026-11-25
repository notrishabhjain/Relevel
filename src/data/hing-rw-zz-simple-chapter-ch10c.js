/* Hinglish for Context engineering: deciding what the model sees (chapter:ch10c), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Write a vague prompt (a loose note) that makes the next piece of code (a parser, which reads the reply) fail. Keep the failure, so you can look at it later.':
    'Ek dhundhla prompt likhiye (dheeli parchi) jisse aage ka code (parser, jo reply padhta hai) fail ho jaye. Failure ko sambhal kar rakhiye, taaki baad mein dekh sakein.',
  'Redo the prompt as an interface (a clear handshake between your code and the model). Add structured output (a form with fixed boxes), validation (checking the form), examples, a way to say no, provenance (where each fact came from), and a limit on how much history it carries.':
    'Prompt ko interface ki tarah dobara banaiye (aapke code aur model ke beech saaf haath milaana). Structured output jodiye (fixed khaanon wala form), validation (form ki jaanch), examples, na kehne ka tareeka, provenance (har fact kahan se aaya), aur history kitni jaayegi iski seema.',
  'Now break it on purpose. Remove the required boxes. Add instructions that fight each other. Overflow the context (the model\'s desk). Push in history that does not matter.':
    'Ab ise jaan-boojh kar todiye. Zaroori khaane hataiye. Aise nirdesh jodiye jo ek-doosre se ladte hain. Context (model ki mez) ko bhar dijiye. Bekaar history ghusaiye.',
  'A context budget, a schema (the shape of the form), and a design for memory and state.':
    'Ek context budget, ek schema (form ka dhaancha), aur memory aur state ka design.',
  'Explain how context, state and persistent memory differ. Keep the three apart, like three different cupboards.':
    'Samjhaiye ki context, state aur persistent memory mein kya fark hai. Teeno ko alag rakhiye, teen alag almariyon ki tarah.',
  'Context engineering means deciding what the model gets to read. It is like packing a folder for a colleague: instructions, examples, evidence, history and tool results, and how they are laid out. Retrieval (finding the right page first) is one part of it.':
    'Context engineering ka matlab hai tay karna ki model ko kya padhne ko milega. Yeh saathi ke liye folder lagane jaisa hai: nirdesh, examples, saboot, history aur tool results, aur woh kaise saje hain. Retrieval (pehle sahi page dhoondhna) iska ek hissa hai.',
  'Context budget':
    'Context budget',
  'A context budget gives each part of the context its own token allowance (tokens are Lego bricks of text). It also says what is dropped first when the total will not fit, like what you leave out of an over-full suitcase.':
    'Context budget context ke har hisse ko uska token hissa deta hai (token text ki Lego eent hai). Yeh bhi likhta hai ki kul jagah kam padne par pehle kya hataya jaayega, jaise bhari suitcase se pehle kya nikaalte hain.',
  'Schema validation':
    'Schema validation',
  'Schema validation means checking the reply against the form you asked for, before any other code uses it. It is like a clerk checking that every box is filled.':
    'Schema validation ka matlab hai reply ko us form se milana jo aapne maanga tha, usse pehle ki koi aur code use kaam mein le. Yeh clerk ke har khaana bhara hone ki jaanch karne jaisa hai.',
  'Provenance':
    'Provenance',
  'Provenance is the record of where a fact came from. It travels with the fact, like a receipt. So you can trace an answer back to its source.':
    'Provenance is baat ka record hai ki koi fact kahan se aaya. Yeh fact ke saath chalta hai, rasid ki tarah. Isse aap jawaab ko uske source tak wapas dhoondh sakte hain.',
  'Context engineering means deciding what goes into each request: instructions, examples, evidence, history, tool results, and the format they come in. Think of packing a folder for a colleague. In this chapter you treat the prompt as a contract, set a context budget, and decide where memory is stored.':
    'Context engineering ka matlab hai tay karna ki har request mein kya jaayega: nirdesh, examples, saboot, history, tool results, aur woh kis format mein aate hain. Sochiye saathi ke liye folder lagana. Is chapter mein aap prompt ko contract maanenge, context budget tay karenge, aur yeh tay karenge ki memory kahan rakhi jaye.',
  'Treat a prompt as an interface contract (a clear promise between your code and the model), not as a paragraph of requests.':
    'Prompt ko interface contract maniye (aapke code aur model ke beech saaf vaada), request ke ek paragraph ki tarah nahin.',
  'Say what is removed first when the context budget is tight, and why.':
    'Batayiye ki context budget tang hone par pehle kya hataya jaata hai, aur kyun.',
  'Tell conversation history, user profile and task state apart. They are three different stores, like three different cupboards.':
    'Conversation history, user profile aur task state ko alag pehchaniye. Yeh teen alag store hain, teen alag almariyon ki tarah.',
  'Plan exactly what the model gets to see':
    'Plan exactly what the model gets to see',
  'Every call to the context judge sends the model a bundle of text. The bundle has a size limit, and it costs money. You learned to treat a prompt as a contract. You learned what is removed first when space runs short. You learned to keep conversation history, user settings and task state apart. Now write the one-page plan for the context judge\'s call.':
    'Context judge ko har call mein model ko text ka ek bandal bheja jaata hai. Bandal ki size seema hai, aur paisa lagta hai. Aapne prompt ko contract maanna seekha. Aapne seekha ki jagah kam padne par pehle kya hataya jaata hai. Aapne conversation history, user settings aur task state ko alag rakhna seekha. Ab context judge ki call ka ek page ka plan likhiye.',
  'Write it with real token counts from a run of your harness (the tool that records your runs). Write the page in the notes box below.':
    'Apne harness ke run (woh tool jo aapke runs record karta hai) ke asli token counts se likhiye. Page neeche notes box mein likhiye.',
  'List everything that goes into one call to the context judge: the instructions, the worked examples, the sentence to check, any earlier messages and any reference list.':
    'Context judge ki ek call mein jo kuch jaata hai, sab ki list banaiye: nirdesh, solved examples, jaanchne wala sentence, pichhle messages aur koi reference list.',
  'Next to each item, write a token count from a real run. Do not guess.':
    'Har cheez ke saamne asli run ka token count likhiye. Andaza mat lagaiye.',
  'Set a total limit for the call. Show how much room is left.':
    'Call ke liye kul seema tay kijiye. Dikhaiye ki kitni jagah bachi hai.',
  'Write the order in which things are removed when space runs out, and the rule behind it. The sentence to check is never removed.':
    'Likhiye ki jagah khatam hone par cheezein kis kram mein hataayi jaati hain, aur uske peeche ka niyam. Jaanchne wala sentence kabhi nahin hataya jaata.',
  'Write the exact shape the reply must have. This is your finding format. Write what happens when a reply does not match.':
    'Reply ka theek dhaancha likhiye. Yeh aapka finding format hai. Likhiye ki reply match na kare to kya hota hai.',
  'For each piece of stored data (the chat so far, a user\'s settings, the state of the current task), say which of the three kinds of memory it belongs to.':
    'Har sambhale hue data ke liye (ab tak ki chat, user ki settings, abhi ke kaam ki state), batayiye ki woh teen tarah ki memory mein se kaunsi mein aata hai.',
  'A list of everything in the call, with a real token count beside each item.':
    'Call ki har cheez ki list, har ek ke saath asli token count.',
  'A total limit, and the room left.':
    'Kul seema, aur bachi hui jagah.',
  'The removal order, and the rule behind it.':
    'Hataane ka kram, aur uske peeche ka niyam.',
  'The reply shape, and the three kinds of stored data sorted.':
    'Reply ka dhaancha, aur teen tarah ke sambhale data ki chhantai.',
  'A system prompt is a standing instruction':
    'System prompt ek sthayi nirdesh hai',
  'You met this in Chapter 2. Think of rules on the shop wall. Here it is one part of a designed context.':
    'Aap isse Chapter 2 mein mile the. Sochiye dukaan ki deewar par lage niyam. Yahan yeh design kiye gaye context ka ek hissa hai.',
  'The context window has a limit':
    'Context window ki ek seema hai',
  'You saw this in Chapter 1.5. The desk is only so big, so something must be removed first.':
    'Aapne yeh Chapter 1.5 mein dekha tha. Mez bas itni hi badi hai, isliye kuch na kuch pehle hataana padta hai.',
  'Structured output can be required':
    'Structured output ki maang ki ja sakti hai',
  'Chapter 8 made the form reliable. This chapter puts it inside a bigger design.':
    'Chapter 8 ne form ko bharosemand banaya. Yeh chapter use ek bade design ke andar rakhta hai.',
  'Pick one assistant you know well, your own or one you use. You will list everything that goes into its context.':
    'Ek assistant chuniye jise aap achhe se jaante hain, apna ya jo aap use karte hain. Aap uske context mein jaane wali har cheez ki list banayenge.',
  'Do units 10.3 and 10.6, then the capstone. Read the other units this pass.':
    'Units 10.3 aur 10.6 kijiye, phir capstone. Baaki units is baar sirf padh lijiye.',
  'Last chapter you chose a model. Now the question is what you send to it. You may think the prompt is the message you type. But it is only one part of what the model sees. Every request can also carry instructions, examples, documents, earlier messages and tool results.':
    'Pichhle chapter mein aapne model chuna. Ab sawaal hai ki use kya bhejna hai. Aap soch sakte hain ki prompt woh message hai jo aap type karte hain. Par woh model ko dikhne wali cheezon ka sirf ek hissa hai. Har request mein nirdesh, examples, documents, pichhle messages aur tool results bhi ja sakte hain.',
  'Choosing what goes into the request, and what stays out, is called <strong>context engineering</strong>. It matters for two reasons. The context window (the model\'s desk) has a limit, so not everything fits. And you pay for every token you send.':
    'Request mein kya jaye aur kya bahar rahe, yeh tay karna <strong>context engineering</strong> kehlata hai. Iske do kaaran hain. Context window (model ki mez) ki seema hai, isliye sab kuch nahin aata. Aur har token ka paisa lagta hai jo aap bhejte hain.',
  'Here is a picture. You brief a brilliant new colleague who forgets everything each night. Each morning you hand over a folder: the standing instructions, a few examples, today\'s file, and a note about last week. What you put in that folder decides how well they do.':
    'Ek tasveer dekhiye. Aap ek hoshiyar naye saathi ko samjhate hain jo har raat sab bhool jaata hai. Har subah aap use ek folder dete hain: sthayi nirdesh, kuch examples, aaj ki file, aur pichhle hafte ka note. Us folder mein kya rakha hai, yahi tay karta hai ki woh kaisa kaam karega.',
  'Treat a prompt as an interface contract (a promise between your code and the model). It has a role, a task, constraints, examples, an output schema and a refusal behaviour (how it says no). The code that comes next depends on each of these.':
    'Prompt ko interface contract maniye (aapke code aur model ke beech vaada). Isme ek role, ek kaam, seemayein, examples, output schema aur refusal behaviour (na kehne ka tareeka) hota hai. Aage ka code in sab par tika hai.',
  'The six units below take you from one prompt to a whole context design. Each unit gives you something small to build, and something to break on purpose.':
    'Neeche ke chhe units aapko ek prompt se poore context design tak le jaate hain. Har unit mein banane ke liye kuch chhota hai, aur jaan-boojh kar todne ke liye bhi kuch.',
  'Prompt as an interface contract':
    'Prompt as an interface contract',
  'You will write prompts that spell out the task, the limits, the inputs, what you expect back, and what happens when something fails.':
    'Aap aise prompts likhenge jo kaam, seemayein, inputs, wapas kya chahiye, aur kuch fail hone par kya hoga, sab saaf likhein.',
  'A prompt is like a contract between your app and the model. Your app promises to send certain things. The model is asked to send back certain things.':
    'Prompt aapke app aur model ke beech contract jaisa hai. Aapka app kuch cheezein bhejne ka vaada karta hai. Model se kuch cheezein wapas bhejne ko kaha jaata hai.',
  'Take a vague instruction. Rewrite it with a role, a task, limits, examples and what the output must look like.':
    'Ek dhundhla nirdesh lijiye. Use role, kaam, seemayein, examples aur output kaisa dikhe, iske saath dobara likhiye.',
  'Run the old and the new version on the same 10 cases.':
    'Purana aur naya version wahi 10 cases par chalaiye.',
  'Add two instructions that fight each other. Watch which behaviour stays steady and which starts to wobble.':
    'Do aise nirdesh jodiye jo ek-doosre se ladte hain. Dekhiye kaunsa vyavahar sthir rehta hai aur kaunsa dagmagane lagta hai.',
  'The old and new prompt side by side, plus the results of your 10-case test.':
    'Purana aur naya prompt saath-saath, aur aapke 10-case test ke natije.',
  'Which requirement became something you can measure after the rewrite?':
    'Dobara likhne ke baad kaunsi zaroorat aisi ban gayi jise aap nap sakte hain?',
  'Keep versions of your prompt changes, the way engineers do with code.':
    'Prompt ke badlav ke versions rakhiye, jaise engineers code ke saath rakhte hain.',
  'Structured outputs and schemas':
    'Structured outputs and schemas',
  'You will make the model\'s output something a machine can read. You will check it before any other code uses it.':
    'Aap model ka output aisa banayenge jise machine padh sake. Aur kisi aur code ke use karne se pehle use jaanchenge.',
  'Output in plain language is flexible. But an app\'s interfaces need a shape they can predict, like a form with fixed boxes.':
    'Seedhi bhasha ka output lachila hota hai. Par app ke interfaces ko aisa dhaancha chahiye jiska andaza ho sake, fixed khaanon wale form jaisa.',
  'Write a small JSON schema (a form written as labels and values in curly brackets) for an object that holds one extracted task.':
    'Ek chhota JSON schema likhiye (curly brackets mein labels aur values ka form) ek aise object ke liye jo ek nikaala hua kaam rakhta hai.',
  'Make some outputs, read them in (parse them), and reject any with a wrong structure.':
    'Kuch outputs banaiye, unhe padhiye (parse kijiye), aur galat dhaanche wale outputs ko mana kar dijiye.',
  'Remove a required box, and put in a value of the wrong type. Check that your app catches both.':
    'Ek zaroori khaana hataiye, aur galat type ki value daaliye. Dekhiye ki aapka app dono pakadta hai.',
  'The schema, the validation tests, and sample payloads (sample filled forms) that are valid and invalid.':
    'Schema, validation tests, aur sample payloads (bhare hue namune ke form) jo sahi bhi hon aur galat bhi.',
  'Does the schema stop unsafe values, or only wrong formatting?':
    'Kya schema khatarnaak values rokta hai, ya sirf galat formatting?',
  'Structured output controls the interface. It does not promise that the content is true.':
    'Structured output interface ko sambhalta hai. Yeh vaada nahin karta ki content sach hai.',
  'You will measure how much of the context is instructions, how much is history, how much is retrieved text, and how much is tool output. Think of dividing a small desk between piles.':
    'Aap napenge ki context ka kitna hissa nirdesh hai, kitna history, kitna dhoondha hua text, aur kitna tool output. Sochiye ek chhoti mez ko dher mein baantna.',
  'Context is limited, like space on a desk. It affects quality, latency (waiting time) and cost.':
    'Context seemit hai, mez ki jagah ki tarah. Yeh quality, latency (intezaar ka samay) aur cost par asar daalta hai.',
  'Note the token count for each part of the context, where your provider shows it. Where it does not, estimate the same way every time.':
    'Context ke har hisse ka token count likhiye, jahan aapka provider dikhata hai. Jahan nahin dikhata, wahan har baar ek hi tareeke se andaza lagaiye.',
  'Write a budget policy. It says what you keep, what you shorten into a summary, and what you drop first.':
    'Ek budget policy likhiye. Isme likha ho ki kya rakhna hai, kya chhota karke saar banana hai, aur pehle kya hataana hai.',
  'Flood the context with history that does not matter. Compare the answer quality and the cost.':
    'Context ko bekaar history se bhar dijiye. Jawaab ki quality aur cost ki tulna kijiye.',
  'A Context Budget Worksheet.':
    'A Context Budget Worksheet.',
  'What is the first thing you would remove when space is tight?':
    'Jagah tang ho to sabse pehle aap kya hataayenge?',
  'A PM (product manager) should be able to ask “what is in the context?” and get an exact answer.':
    'PM (product manager) ko poochna aana chahiye “context mein kya hai?” aur saaf jawaab milna chahiye.',
  'State, history and memory':
    'State, history and memory',
  'You will keep four things apart that people often mix up. They are the context of one request, the conversation history, and the data kept about a user. The fourth is the state of a task (where the job has reached).':
    'Aap chaar cheezein alag rakhenge jinhe log aksar mila dete hain. Woh hain ek request ka context, conversation history, aur user ke baare mein rakha data. Chauthi hai task ki state (kaam kahan tak pahuncha).',
  '“Memory” is a whole design, not a single switch. It has storage, rules for how long to keep things, and rules for who may see them.':
    '“Memory” ek switch nahin, poora design hai. Isme storage hai, kitni der rakhna hai ke niyam hain, aur kaun dekh sakta hai ke niyam hain.',
  'Draw three stores: the session history, the user profile and the task state. Think of three cupboards.':
    'Teen store banaiye: session history, user profile aur task state. Sochiye teen almariyan.',
  'For each store, write down the fields, who owns it, how long it is kept, who can see it, and how it is deleted.':
    'Har store ke liye likhiye: uske fields, uska maalik kaun, kitni der rakha jaata hai, kaun dekh sakta hai, aur kaise hataya jaata hai.',
  'Bring in memory that is old, or that clashes with other memory. Write rules for which one wins.':
    'Aisi memory laiye jo purani ho, ya doosri memory se takraye. Likhiye ki kaunsi jeetegi, iske niyam.',
  'A Memory and State Design Sheet.':
    'A Memory and State Design Sheet.',
  'Which data should never go into a prompt by default?':
    'Kaunsa data by default kabhi prompt mein nahin jaana chahiye?',
  'This is where privacy and product design meet context engineering.':
    'Yahin privacy aur product design, context engineering se milte hain.',
  'Provenance and citations':
    'Provenance and citations',
  'You will make the evidence traceable, like a trail of footprints. You can follow it from the answer back to the source, the chunk (the small card cut from the source) and the version.':
    'Aap saboot ko dhoondhne layak banayenge, pairon ke nishaan ki tarah. Aap jawaab se wapas source, chunk (source se kaata hua chhota card) aur version tak ja sakte hain.',
  'A citation (a note saying where a claim came from) helps only if the user, or an auditor (a checker), can trace the claim back to its evidence.':
    'Citation (ek note ki daawa kahan se aaya) tabhi kaam ka hai jab user, ya auditor (jaanchne wala), daawe ko uske saboot tak wapas dhoondh sake.',
  'Attach a source ID, a section and a chunk ID to every passage you retrieve.':
    'Har dhoondhe hue passage ke saath ek source ID, ek section aur ek chunk ID jodiye.',
  'Write an answer that cites those IDs.':
    'Aisa jawaab likhiye jo un IDs ka hawaala de.',
  'Delete a source version or change it. Test if the old citations still work.':
    'Source ka ek version hataiye ya badaliye. Test kijiye ki purane citations ab bhi kaam karte hain ya nahin.',
  'A provenance schema, with some example citations.':
    'Ek provenance schema, kuch example citations ke saath.',
  'Can you find the exact source that was used for an answer?':
    'Kya aap us jawaab ke liye use hua theek source dobara dhoondh sakte hain?',
  'Being able to trace things is essential in systems with strict rules and policies.':
    'Kadi rules aur policies wale systems mein cheezon ko dhoondh paana zaroori hai.',
  'Context failure clinic':
    'Context failure clinic',
  'You will find why answers went wrong when the context was missing, old, off-topic, self-contradicting or harmful.':
    'Aap dhoondhenge ki jawaab galat kyun hue jab context gaayab tha, purana tha, mudde se hata hua tha, khud se takra raha tha ya nuksaandeh tha.',
  'Many failures that people blame on “the model” are really mistakes in how the context was put together.':
    'Bahut si galtiyan jinka dosh log “model” par daalte hain, asal mein context jodne ke tareeke ki galtiyan hoti hain.',
  'Make five context packages that are bad on purpose. Guess how each one will fail.':
    'Paanch context packages banaiye jo jaan-boojh kar kharab hon. Andaza lagaiye ki har ek kaise fail hoga.',
  'Fix one problem at a time. Run the same test set each time.':
    'Ek baar mein ek samasya theek kijiye. Har baar wahi test set chalaiye.',
  'Mix an old policy, some unrelated text and a prompt injection (a hidden note that says “ignore your teacher”) into the context.':
    'Context mein ek purani policy, kuch be-matlab text aur ek prompt injection (chhupi hui parchi jo kehti hai “apne teacher ki baat mat suno”) mila dijiye.',
  'A Context Failure Taxonomy (a sorted list of the ways context goes wrong).':
    'Ek Context Failure Taxonomy (context ke galat hone ke tareekon ki chhanti hui list).',
  'What failed: retrieval, assembly, authorisation (who may see what), the order of instructions, or the writing of the answer?':
    'Kya fail hua: retrieval, jodna, authorisation (kaun kya dekh sakta hai), nirdeshon ka kram, ya jawaab likhna?',
  'This prepares you for production RAG (a real, live system that finds pages first and answers from them) and for security.':
    'Yeh aapko production RAG (asli, chalu system jo pehle pages dhoondhta hai phir unse jawaab deta hai) aur security ke liye taiyaar karta hai.',
  'One more thing about structured output. It removes guesswork for the code that reads the reply. That code usually cannot handle ordinary sentences.':
    'Structured output ke baare mein ek aur baat. Yeh reply padhne wale code ka andaza lagana hata deta hai. Aise code aam sentences aksar sambhal nahin paata.',
  'Memory is an architecture choice':
    'Memory is an architecture choice',
  'A model does not have memory. Every product that offers memory has built a store for it. The kind of store decides what it can delete when someone asks. Think of a goldfish that forgets, plus a notebook you keep for it.':
    'Model ke paas memory nahin hoti. Jo bhi product memory deta hai, usne uske liye ek store banaya hai. Store kaisa hai, yahi tay karta hai ki koi kahe to woh kya hata sakta hai. Sochiye ek goldfish jo bhool jaati hai, aur ek notebook jo aap uske liye rakhte hain.',
  'You will hear many names for parts of the context: caching, compression, few-shot examples, instruction hierarchy. They all answer the same two questions. What goes in? What is removed first when it does not fit?':
    'Aap context ke hisson ke kai naam sunenge: caching, compression, few-shot examples, instruction hierarchy. Sab do hi sawaalon ka jawaab dete hain. Kya andar jaye? Jagah kam ho to pehle kya hataya jaye?',
  'Let us try that with an assistant you know.':
    'Chaliye ise ek jaane-pehchaane assistant par aazmaate hain.',
  'Pick an assistant you know. Guess the tokens spent on system instructions, history, retrieved passages and tool output. Then decide what is removed first when the budget is tight.':
    'Ek jaana-pehchana assistant chuniye. Andaza lagaiye ki system instructions, history, dhoondhe hue passages aur tool output par kitne tokens lagte hain. Phir tay kijiye ki budget tang ho to pehle kya hataya jaye.',
  'instructions … history … retrieved … tool output … remove first: …':
    'instructions … history … retrieved … tool output … pehle hataiye: …',
  'Most people remove history first and evidence last. If your order is different, write down why. That reasoning is the design.':
    'Zyadatar log pehle history hataate hain aur saboot sabse baad mein. Agar aapka kram alag hai, to likhiye kyun. Wahi soch design hai.',
  'Here it is in short. The prompt is one part of the context. The context has a budget. Memory is something you design and store. Next, in Chapter 24, you will use this context design as the input to a production retrieval system.':
    'Chhote mein yeh hai. Prompt context ka ek hissa hai. Context ka ek budget hota hai. Memory woh hai jo aap design karte hain aur store karte hain. Agle Chapter 24 mein aap is context design ko production retrieval system ke input ki tarah use karenge.',
});
