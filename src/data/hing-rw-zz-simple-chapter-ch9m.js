/* Hinglish for Choosing a model: benchmark on your own cases (chapter:ch9m), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Pick two models you can use. Before you test, write your guess. Which model wins on quality? Which on speed? Which on cost? It is like guessing the winner before a race.':
    'Do models chuniye jo aap use kar sakte hain. Test se pehle apna andaza likhiye. Quality mein kaun jeetega? Speed mein kaun? Cost mein kaun? Yeh race se pehle winner ka andaza lagane jaisa hai.',
  'Run a ten-case benchmark (ten fixed questions you give every model). Cover remembering facts, reasoning, pulling out details, many languages, and saying no.':
    'Das cases ka benchmark chalaiye (das fixed sawaal jo aap har model ko dete hain). Facts yaad rakhna, reasoning, details nikaalna, kai bhashayein, aur na kehna, sab shaamil kijiye.',
  'Change one thing at a time: the model, the sampling (how the model picks its next word), or the prompt (your note). Then see which change caused which effect.':
    'Ek baar mein sirf ek cheez badaliye: model, sampling (model agla shabd kaise chunta hai), ya prompt (aapki parchi). Phir dekhiye ki kaunse change se kya asar hua.',
  'A Model Selection Card. It is a one-page note of quality, latency (waiting time) and cost. It also names the back-up model, for the day your first choice is not available.':
    'Ek Model Selection Card. Yeh ek page ka note hai jisme quality, latency (intezaar ka samay) aur cost likhe hain. Isme back-up model ka naam bhi hai, us din ke liye jab pehla model na mile.',
  'Recommend a model, and show the proof. Then defend your choice to someone who likes a different model, like a lawyer with evidence.':
    'Ek model recommend kijiye, aur saboot dikhaiye. Phir apni pasand ka bachaav kijiye us insaan ke saamne jise doosra model pasand hai, jaise wakeel saboot ke saath bolta hai.',
  'Inference means using a trained model to get an answer. Training is the earlier work that made the model, like a student studying. Inference is the exam day. You pay for it on every request, for as long as the product runs.':
    'Inference ka matlab hai trained model se jawaab lena. Training woh pehle ka kaam hai jisse model bana, jaise student ki padhai. Inference exam ka din hai. Har request par aap iska paisa dete hain, jab tak product chalta hai.',
  'Sampling':
    'Sampling',
  'Sampling is how the model picks its next word-piece (token) from a few likely ones. Think of picking one sweet from a few good ones. Temperature (how adventurous the model is) is one way to control it.':
    'Sampling woh tareeka hai jisse model kuch achhe vikalpon mein se agla tukda (token) chunta hai. Socho, kuch achhi mithaiyon mein se ek chunna. Temperature (model kitna jokhim leta hai) ise sambhalne ka ek tareeka hai.',
  'Benchmark':
    'Benchmark',
  'A benchmark is a fixed set of questions that you give to every option, so the comparison is fair. It is like one question paper for every student. Someone else\'s benchmark predicts your task only by luck.':
    'Benchmark sawaalon ka ek fixed set hai jo aap har option ko dete hain, taaki tulna sahi ho. Yeh sabhi students ko ek hi question paper dene jaisa hai. Kisi aur ka benchmark aapke kaam ke baare mein sirf sanyog se sahi nikalta hai.',
  'Model selection card':
    'Model selection card',
  'A one-page note. It says which model you chose, what proof you used, what limit applied (like cost or privacy), and which model runs when the first one is not available.':
    'Ek page ka note. Isme likha hai ki aapne kaunsa model chuna, kaunsa saboot use kiya, kaunsi seema lagi (jaise cost ya privacy), aur pehla model na mile to kaunsa model chalega.',
  'A leaderboard (a ranking list) shows how models did on someone else\'s task. It is like a topper list from another school. In this chapter you see what really changes when you change the model. Then you test models on your own ten cases. You write a model selection card with the proof for your choice.':
    'Leaderboard (ranking ki list) dikhata hai ki models ne kisi aur ke kaam par kaisa kiya. Yeh doosre school ki topper list jaisa hai. Is chapter mein aap dekhenge ki model badalne par asal mein kya badalta hai. Phir apne das cases par models ko test karenge. Aur ek model selection card likhenge jisme aapki pasand ka saboot hoga.',
  'Explain what changes when you change the model. It is more than a benchmark score.':
    'Samjhaiye ki model badalne par kya badalta hai. Yeh sirf benchmark score se kahin zyada hai.',
  'Say when to use retrieval (finding the right page first), prompting (giving clear instructions) and fine-tuning (coaching the model on many examples).':
    'Batayiye ki retrieval (pehle sahi page dhoondhna), prompting (saaf nirdesh dena) aur fine-tuning (model ko bahut se udaharan se coach karna) kab sahi hai.',
  'Write a model recommendation that answers the question “measured how?”.':
    'Aisi model recommendation likhiye jo is sawaal ka jawaab de: “measured how?” (kaise napa?).',
  'Choose the model, with a back-up, and write it on one page':
    'Model chuniye, back-up ke saath, aur use ek page par likhiye',
  'The name-and-place finder and the context judge both need a model. Your choice changes quality, cost, speed and privacy. You learned that a new model changes more than a score. You also learned that a recommendation must answer “measured how?”. Now test some models on your own answer key (questions with known right answers). Then write the one-page card with your choice.':
    'Name-and-place finder aur context judge, dono ko ek model chahiye. Aapki pasand se quality, cost, speed aur privacy badalti hain. Aapne seekha ki naya model sirf score se zyada badalta hai. Yeh bhi seekha ki recommendation ko “measured how?” ka jawaab dena hoga. Ab apni answer key (jin sawaalon ke sahi jawaab pata hain) par kuch models test kijiye. Phir apni pasand ka ek page ka card likhiye.',
  'Use your test harness from Chapter 21 (the tool that records every run) to run the models. Write the one-page card in the notes box below.':
    'Models chalane ke liye Chapter 21 ka apna test harness use kijiye (jo har run ko record karta hai). Ek page ka card neeche notes box mein likhiye.',
  'Write the job and the quality bar as numbers. For example: “find at least 90 of every 100 names on the answer key, with no more than 5 false alarms in 100 sentences”.':
    'Kaam aur quality ki seema numbers mein likhiye. Jaise: “answer key ke har 100 names mein se kam se kam 90 dhoondhna, aur 100 sentences mein 5 se zyada false alarm nahin”.',
  'Write how private the text is, and what that rules out at once. For example: a provider that trains on what you send is out, if sentences may hold real Aadhaar numbers.':
    'Likhiye ki text kitna private hai, aur isse turant kya bahar ho jaata hai. Jaise: agar sentences mein asli Aadhaar numbers ho sakte hain, to jo provider aapke bheje hue par training karta hai woh bahar hai.',
  'Set a time limit and a cost limit for one message.':
    'Ek message ke liye samay ki seema aur cost ki seema tay kijiye.',
  'Choose two or three models. Run your harness on the answer key for each one. Put the results side by side. Show the Hindi and Hinglish results apart from the English ones.':
    'Do ya teen models chuniye. Har ek ke liye answer key par apna harness chalaiye. Natije saath-saath rakhiye. Hindi aur Hinglish ke natije English se alag dikhaiye.',
  'Name the back-up: what runs if the first choice is down, slow or costs more. Try the back-up at least once.':
    'Back-up ka naam likhiye: agar pehla model band ho, dheema ho ya mehnga ho jaye to kya chalega. Back-up ko kam se kam ek baar aazmaiye.',
  'Name the test set (your set of questions) you will use to check this choice again in three months.':
    'Us test set (aapke sawaalon ka set) ka naam likhiye jisse aap teen mahine baad yeh pasand dobara jaanchenge.',
  'Put it all on one page, the model selection card. A manager should be able to read it. An engineer should be able to act on it.':
    'Sab kuch ek page par rakhiye, model selection card. Manager use padh sake. Engineer us par kaam kar sake.',
  'Numbers for the quality bar, the time limit and the cost limit.':
    'Quality ki seema, samay ki seema aur cost ki seema, teeno ke numbers.',
  'A table with the models side by side. Hindi and Hinglish are shown apart.':
    'Models saath-saath wali ek table. Hindi aur Hinglish alag dikhaye gaye hon.',
  'A named back-up that you have tried once.':
    'Ek naam wala back-up jise aapne ek baar aazma liya hai.',
  'The one-page card. Every claim traces back to a run in your harness.':
    'Ek page ka card. Har daawa aapke harness ke kisi run tak wapas jaata hai.',
  'Temperature controls variation':
    'Temperature badlav ko control karta hai',
  'You tested it in Chapter 2. Here it is one setting among several, like one dial on a panel.':
    'Aapne ise Chapter 2 mein test kiya tha. Yahan yeh kai settings mein se ek hai, panel ke ek dial jaisa.',
  'Write the answer key before measuring':
    'Napne se pehle answer key likhiye',
  'Without an answer key, a benchmark tells you little. It is like marking papers with no teacher\'s key.':
    'Answer key ke bina benchmark kuch khaas nahin batata. Yeh bina teacher ki key ke copy check karne jaisa hai.',
  'An experiment harness that records runs':
    'Ek experiment harness jo runs ko record karta hai',
  'You built it in Chapter 21. This chapter is the first to use it.':
    'Aapne ise Chapter 21 mein banaya tha. Yeh chapter pehli baar ise use karta hai.',
  'Open the experiment harness you built in Chapter 21. You will run the same ten cases on two or three models.':
    'Chapter 21 mein banaya hua experiment harness kholiye. Aap wahi das cases do ya teen models par chalayenge.',
  'Do units 9.3 and 9.6, then the capstone. Read the other units this pass.':
    'Units 9.3 aur 9.6 kijiye, phir capstone. Baaki units is baar sirf padh lijiye.',
  'Last chapter you built a harness. It records every run in the same way, like a school register. Now you use it. A leaderboard shows how a model did on someone else\'s task. Today you get your own numbers, on your own questions, in one afternoon.':
    'Pichhle chapter mein aapne harness banaya. Yeh har run ko ek hi tareeke se likhta hai, school register ki tarah. Ab aap use karte hain. Leaderboard dikhata hai ki model ne kisi aur ke kaam par kaisa kiya. Aaj aap apne sawaalon par, apne numbers, ek dopahar mein paayenge.',
  'Think of buying a car. An award does not tell you if the car fits your family. It does not tell you if it suits your roads or what it costs to run. So you take a test drive. Few teams test-drive their models. This chapter closes that gap.':
    'Socho aap gaadi khareed rahe hain. Award yeh nahin batata ki gaadi aapke parivar ke liye theek hai. Na yeh batata hai ki woh aapki sadkon par chalegi ya uska kharch kitna hoga. Isliye aap test drive lete hain. Bahut kam teams apne models ki test drive leti hain. Yeh chapter wahi kami bharta hai.',
  'Models differ in many ways at once: skill, speed, desk size (the context window), button-pressing (tool use) and cost. A model that wins on one can lose on another. What matters most depends on your use case, like choosing a bike or a bus for your trip.':
    'Models kai baaton mein ek saath alag hote hain: kaabiliyat, speed, mez ka size (context window), button dabana (tool use) aur cost. Jo model ek mein jeete, woh doosre mein haar sakta hai. Sabse zaroori kya hai, yeh aapke use case par hai, jaise safar ke liye cycle ya bus chunna.',
  'There are six short units below. They start with what a model does when it answers. They end with the one-page card that records your decision. Go in order.':
    'Neeche chhe chhote units hain. Shuruat hoti hai is baat se ki model jawaab dete samay kya karta hai. Ant hota hai us ek page ke card par jisme aapka faisla likha hai. Kram se chaliye.',
  'What an LLM is doing at inference':
    'What an LLM is doing at inference',
  'You will explain tokens (small pieces of a word, like Lego bricks of text). You will explain how a transformer-based model reads its context (its desk). You will explain how it writes an answer. And you will say how training differs from inference.':
    'Aap tokens samjhayenge (shabd ke chhote tukde, text ki Lego eent). Aap samjhayenge ki transformer-based model apna context (apni mez) kaise padhta hai. Yeh bhi ki woh jawaab kaise likhta hai. Aur training aur inference ka fark batayenge.',
  'Inference is when the model does its work. It gets the context and writes the output. Training is different. Training is what changes the model\'s parameters (its inner settings), like a student learning.':
    'Inference woh samay hai jab model apna kaam karta hai. Use context milta hai aur woh output likhta hai. Training alag hai. Training woh hai jisse model ke parameters (andar ki settings) badalte hain, jaise student seekhta hai.',
  'Give two prompts with different context lengths. For each, write down the input and output token counts and the latency (waiting time).':
    'Alag-alag context length wale do prompts dijiye. Har ek ke liye input aur output token counts aur latency (intezaar ka samay) likhiye.',
  'Make a small table of context length against the latency and cost you saw.':
    'Ek chhoti table banaiye: context length ke saamne latency aur cost jo aapne dekhe.',
  'Add some context that does not matter. See if the cost, the latency or the answer quality changes.':
    'Kuch bekaar ka context jodiye. Dekhiye ki cost, latency ya jawaab ki quality badalti hai ya nahin.',
  'An inference observation sheet (a page where you note what you saw).':
    'Ek inference observation sheet (ek page jisme aap likhte hain ki kya dekha).',
  'Why is a bigger prompt not always a better prompt?':
    'Bada prompt hamesha behtar prompt kyun nahin hota?',
  'Before anyone argues about which model brand is better, ask the engineers where the cost and the waiting time really come from.':
    'Koi bahas kare ki kaunsa model brand behtar hai, usse pehle engineers se poochiye ki cost aur intezaar asal mein kahan se aa raha hai.',
  'Sampling and output variability':
    'Sampling and output variability',
  'You will see the sampling controls as ways to shape the odds of each next word. They are not “creativity sliders.”':
    'Aap sampling controls ko aise dekhenge ki woh har agle shabd ke chance ko dhaalte hain. Woh “creativity sliders” nahin hain.',
  'Lower sampling settings usually give less variation. But they do not make the model fully predictable or always true.':
    'Kam sampling settings se aam taur par badlav kam hota hai. Lekin isse model poori tarah ek-jaisa ya hamesha sach nahin ban jaata.',
  'Run the same prompt several times under two sampling settings your provider supports.':
    'Ek hi prompt ko kai baar chalaiye, do sampling settings ke saath jo aapka provider deta hai.',
  'Count how many different outputs you got. Note how the wording differs.':
    'Gino ki aapko kitne alag outputs mile. Likhiye ki shabdon mein kya fark dikha.',
  'Use one factual task and one creative task. Check if the change matters equally in both.':
    'Ek factual kaam aur ek creative kaam lijiye. Dekhiye ki badlav dono mein barabar zaroori hai ya nahin.',
  'A table of your sampling experiment, with the raw outputs (exactly what the model wrote).':
    'Aapke sampling experiment ki table, raw outputs ke saath (model ne jaisa likha waisa ka waisa).',
  'What really changed: the facts, the variety, or only the wording?':
    'Asal mein kya badla: facts, variety, ya sirf shabd?',
  'Never promise that “temperature zero means always identical.” Measure what your provider\'s model really does.':
    'Kabhi yeh vaada mat kijiye ki “temperature zero ka matlab hamesha ek-jaisa”. Napiye ki aapke provider ka model asal mein kya karta hai.',
  'Model tiers and routing':
    'Model tiers and routing',
  'You will see why a smaller, faster, cheaper model can suit some tasks, and a bigger model suits others. It is like a cycle for the corner shop and a truck for heavy loads.':
    'Aap dekhenge ki chhota, tez, sasta model kuch kaamon ke liye theek kyun hai, aur bada model doosron ke liye. Yeh nukkad ki dukaan ke liye cycle aur bhaari saman ke liye truck jaisa hai.',
  'Choosing a model means balancing many things: quality, latency, cost, context, how well it uses tools, and your own limits.':
    'Model chunna kai cheezon ka santulan hai: quality, latency, cost, context, tools kitni achhi tarah use karta hai, aur aapki apni seemayein.',
  'Make a 10-case benchmark. Include pulling out details, reasoning, many languages and saying no.':
    '10 cases ka benchmark banaiye. Details nikaalna, reasoning, kai bhashayein aur na kehna, sab rakhiye.',
  'Run two models, or two settings of one model, on the same cases.':
    'Do models chalaiye, ya ek model ki do settings, wahi cases par.',
  'Send the easy cases to the cheaper model. Send the hard cases to the stronger one. Compare cost and quality.':
    'Aasaan cases sasta model ko bhejiye. Mushkil cases mazboot model ko bhejiye. Cost aur quality ki tulna kijiye.',
  'A Model Selection Card.':
    'A Model Selection Card.',
  'Which pass mark (acceptance metric, the number a model must reach) made you choose?':
    'Kaunsa pass mark (acceptance metric, woh number jo model ko chhoona hai) aapki pasand ki wajah bana?',
  'There is no “best model” until you fix the task, the quality bar and the cost ceiling.':
    'Jab tak aap kaam, quality ki seema aur cost ki upari seema tay nahin karte, tab tak koi “best model” nahin hota.',
  'Reasoning, context and fine-tuning boundaries':
    'Reasoning, context and fine-tuning boundaries',
  'You will tell three tools apart: prompting, context or RAG (finding the right page, then answering from it), and fine-tuning. Each one pulls a different lever.':
    'Aap teen auzaar alag pehchanenge: prompting, context ya RAG (pehle sahi page dhoondhna, phir usse jawaab dena), aur fine-tuning. Har ek alag lever kheenchta hai.',
  'Use context when the model needs facts that keep changing. Use prompting for instructions and behaviour. Use fine-tuning when a habit repeats and stays the same, so it is worth building into the model\'s weights (its inner numbers).':
    'Context tab use kijiye jab model ko badalte rehne wale facts chahiye. Prompting nirdesh aur vyavahar ke liye. Fine-tuning tab jab koi aadat baar-baar aaye aur wahi rahe, jisse use model ke weights (andar ke numbers) mein daalna theek ho.',
  'Take one task. Write three plans: prompt only, retrieval or context, and a fine-tuning guess.':
    'Ek kaam lijiye. Teen yojanayein likhiye: sirf prompt, retrieval ya context, aur fine-tuning ka andaza.',
  'For each plan, write the data it needs, the benefit you expect, the cost to keep it going, and the test it would need.':
    'Har yojana ke liye likhiye: use kaunsa data chahiye, kya fayda aap umeed karte hain, use chalate rakhne ka kharch, aur kaunsa test chahiye.',
  'Invent a case where fine-tuning looks good, but retrieval costs less because the facts change every week.':
    'Ek aisa case banaiye jahan fine-tuning achha lagta hai, lekin retrieval sasta padta hai kyunki facts har hafte badalte hain.',
  'A decision grid: Prompt vs Context/RAG vs Fine-tune.':
    'Ek faisle ka grid: Prompt vs Context/RAG vs Fine-tune.',
  'Is the gap about knowledge, about behaviour, or both?':
    'Kami jaankari ki hai, vyavahar ki hai, ya dono ki?',
  'This stops every design talk from ending in “let\'s fine-tune it.”':
    'Isse har design charcha “chalo fine-tune kar dete hain” par khatam hone se bachti hai.',
  'Benchmarking without fooling yourself':
    'Benchmarking without fooling yourself',
  'You will see why small demos can lead you to wrong answers. You will learn to build a fair mix of tasks.':
    'Aap dekhenge ki chhote demo galat nateejon tak kyun le ja sakte hain. Aap kaamon ka nishpaksh mel banana seekhenge.',
  'A benchmark is a measuring tape. If the cases lean one way, your decisions will lean that way too.':
    'Benchmark ek naap ka fita hai. Agar cases ek taraf jhuke hain, to aapke faisle bhi usi taraf jhukenge.',
  'Before you test, make the groups of cases, pick the sample cases and write the right answers.':
    'Test se pehle cases ke groups banaiye, namune ke cases chuniye aur sahi jawaab likhiye.',
  'Where you can, hide which model is which (compare blind). At least keep the same order every time.':
    'Jahan ho sake, chhupaiye ki kaunsa model kaunsa hai (blind tulna). Kam se kam har baar wahi kram rakhiye.',
  'Add tricky cases, unclear cases and cases with no answer. See if the ranking changes.':
    'Chaalaaki wale cases, dhundhle cases aur bina jawaab wale cases jodiye. Dekhiye ki ranking badalti hai ya nahin.',
  'A model benchmark of 10 to 30 cases, with results for each group.':
    '10 se 30 cases ka model benchmark, har group ke natije ke saath.',
  'Would your benchmark catch the failure you worry about most?':
    'Kya aapka benchmark wahi galti pakad lega jiski aapko sabse zyada chinta hai?',
  'A PM (product manager) should question the test set before questioning the score.':
    'PM (product manager) ko score par sawaal karne se pehle test set par sawaal karna chahiye.',
  'Model Selection Card':
    'Model Selection Card',
  'You will turn your proof into a decision that engineers and stakeholders (people who care about the result) can review.':
    'Aap apne saboot ko ek aisa faisla banayenge jise engineers aur stakeholders (jinhe natije ki parwah hai) dekh sakein.',
  'The card puts the limits, the proof, the back-up and any open worries all in one place.':
    'Card limits, saboot, back-up aur bachi hui chintayein, sab ek jagah rakhta hai.',
  'Fill in the task, the quality target, how private the data is, the waiting-time target and the cost ceiling.':
    'Kaam, quality ka lakshya, data kitna private hai, intezaar ke samay ka lakshya aur cost ki upari seema bhariye.',
  'Add the model options, the benchmark proof and the back-up plan.':
    'Model ke options, benchmark ka saboot aur back-up yojana jodiye.',
  'Take away the benchmark results and try to decide anyway. See how much turns into opinion.':
    'Benchmark ke natije hata dijiye aur phir bhi faisla karke dekhiye. Dekhiye kitna kuch rai ban jaata hai.',
  'A Model Selection Card with a version history (a list of every change).':
    'Version history wala Model Selection Card (har badlav ki list).',
  'Can a reviewer see exactly why you chose this model?':
    'Kya koi reviewer saaf dekh sakta hai ki aapne yeh model kyun chuna?',
  'This shows your technical judgment in your portfolio. It is worth far more than a screenshot of a leaderboard.':
    'Yeh aapke portfolio mein aapki technical samajh dikhata hai. Yeh leaderboard ke screenshot se kahin zyada keemti hai.',
  'Here is the most important habit in this chapter. When you compare models, change only the model. Say you change the model and the prompt together, and the result gets better. Now you cannot tell which change helped.':
    'Is chapter ki sabse zaroori aadat yeh hai. Models ki tulna karte samay sirf model badaliye. Maan lijiye aapne model aur prompt dono saath badle, aur natija behtar hua. Ab aap nahin bata sakte ki kis badlav ne madad ki.',
  'What you need to know about models':
    'What you need to know about models',
  'You need only a little, and it is specific. Know supervised and unsupervised learning, classification and regression, and training, validation and test sets. Know overfitting (learning the answers by heart), precision and recall, and embeddings (an address for meaning).':
    'Aapko bas thoda chahiye, aur woh khaas hai. Jaaniye: supervised aur unsupervised learning, classification aur regression, aur training, validation aur test sets. Jaaniye overfitting (jawaab ratt lena), precision aur recall, aur embeddings (matlab ka pata).',
  'Then add transformers and attention, only as an idea. Add how inference differs from training, and how pre-training, fine-tuning and retrieval differ. That is enough to join a design talk.':
    'Phir transformers aur attention jodiye, sirf ek vichar ke roop mein. Yeh bhi jodiye ki inference training se kaise alag hai, aur pre-training, fine-tuning aur retrieval mein kya fark hai. Design charcha mein hissa lene ke liye itna kaafi hai.',
  'Fine-tune, prompt or retrieve?':
    'Fine-tune, prompt or retrieve?',
  'The most common question in these talks is whether to fine-tune. Here is a rule of thumb. Treat it as a guess to test, not as a law.':
    'In charchaon ka sabse aam sawaal hai: fine-tune karein ya nahin. Yeh ek mota niyam hai. Ise jaanchne wala andaza maniye, kanoon nahin.',
  'Use <strong>retrieval</strong> when the problem is facts that change, or private data.':
    '<strong>Retrieval</strong> tab use kijiye jab samasya badalte facts ya private data ki ho.',
  'Use <strong>prompting</strong> when clear instructions and examples can steer the behaviour.':
    '<strong>Prompting</strong> tab use kijiye jab saaf nirdesh aur udaharan vyavahar ko sahi raah de sakein.',
  'Use <strong>fine-tuning</strong> when the behaviour, style or pattern stays the same, comes up again and again, and is worth building into the model\'s weights.':
    '<strong>Fine-tuning</strong> tab use kijiye jab vyavahar, andaaz ya pattern wahi rahe, baar-baar aaye, aur model ke weights mein daalne layak ho.',
  'The table below shows four decisions you will face. For each, see the question to ask first, then the mistake teams make most often.':
    'Neeche ki table chaar faisle dikhati hai jo aapke saamne aayenge. Har ek mein pehle poochne wala sawaal dekhiye, phir woh galti jo teams sabse zyada karti hain.',
  'Ask first':
    'Pehle poochiye',
  'The common mistake':
    'Aam galti',
  'Model choice':
    'Model choice',
  'Which limit is tightest: quality, latency or cost?':
    'Kaunsi seema sabse tang hai: quality, latency ya cost?',
  'Picking the “smartest” model because of its name.':
    'Naam ki wajah se sabse “smart” model chun lena.',
  'Fine-tune':
    'Fine-tune',
  'Is the gap about knowledge, or about behaviour?':
    'Kami jaankari ki hai, ya vyavahar ki?',
  'Fine-tuning a model on documents that change every month.':
    'Aise documents par model fine-tune karna jo har mahine badalte hain.',
  'Reasoning level':
    'Reasoning level',
  'Does more thinking raise the pass mark (acceptance metric)?':
    'Kya zyada sochne se pass mark (acceptance metric) badhta hai?',
  'Paying for more thinking without checking if it helps.':
    'Zyada sochne ka paisa dena, bina jaanche ki isse fayda hota hai ya nahin.',
  'Context size':
    'Context size',
  'Do we really need the bigger desk (window)?':
    'Kya hamein sach mein badi mez (window) chahiye?',
  'Treating a big window as a replacement for retrieval.':
    'Badi window ko retrieval ka badal maan lena.',
  'Now try it in your own words.':
    'Ab ise apne shabdon mein aazmaiye.',
  'Write the one sentence you would say if a stakeholder asked you to switch to the model that just topped a leaderboard.':
    'Woh ek sentence likhiye jo aap kahenge agar koi stakeholder aapse us model par jaane ko kahe jo abhi leaderboard par pehle number par hai.',
  'Before we switch, …':
    'Switch karne se pehle, …',
  'A good answer asks: on which of our cases, and at what speed and cost? A leaderboard is a result on someone else\'s test set, like another school\'s marks.':
    'Achha jawaab poochta hai: hamare kaunse cases par, aur kis speed aur cost par? Leaderboard kisi aur ke test set ka natija hai, doosre school ke marks jaisa.',
  'Here is the habit to carry forward. Measure on your own cases. Change one thing at a time. Write down the proof for your choice. Next, in Chapter 23, you will design the context you send to the model you chose.':
    'Aage le jaane wali aadat yeh hai. Apne cases par napiye. Ek baar mein ek cheez badaliye. Apni pasand ka saboot likhiye. Agle Chapter 23 mein aap woh context design karenge jo aap chune hue model ko bhejte hain.',
});
