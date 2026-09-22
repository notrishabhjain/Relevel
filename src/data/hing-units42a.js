/* Hinglish: the v4.2 hands-on units, part 1 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'Python as an experiment instrument':
    'Python, ek experiment ke auzaar ki tarah',
  'Write small Python programs, functions, lists, dictionaries and loops well enough to modify experiments without depending on generated code.':
    'Chhote Python program, function, list, dictionary aur loop itne achhe se likh lein ki aap experiment khud badal sakein, kisi ke banaye code par nirbhar hue bina.',
  'Python is the lab notebook of applied AI: the value is not language mastery but the ability to express an experiment precisely.':
    'Applied AI mein Python lab ki copy jaisa hai: baat bhasha par mahaarat ki nahi, experiment ko theek-theek likh paane ki hai.',
  'Create variables, a function, a loop and a dictionary; print each intermediate result.':
    'Variable, ek function, ek loop aur ek dictionary banaiye; beech ka har nateeja print kijiye.',
  'Build a script that reads ten questions from a list and records a result object for each question.':
    'Ek script banaiye jo list se dus sawaal padhe aur har sawaal ka ek nateeja object sahej le.',
  'Intentionally pass a missing key, empty list and wrong type. Observe the errors.':
    'Jaan-boojh kar ek gayab key, ek khaali list aur ek galat type bhejiye. Error dekhiye.',
  'A <code>chapter-8/python-basics.py</code> file plus a one-page error log.':
    'Ek <code>chapter-8/python-basics.py</code> file aur ek panne ka error log.',
  'Can you explain a function, dictionary, loop and exception without opening documentation?':
    'Kya aap function, dictionary, loop aur exception bina documentation khole samjha sakte hain?',
  'Use your own code for the harness before introducing a framework.':
    'Koi framework laane se pehle harness apne hi code se banaiye.',
  'HTTP, JSON and API contracts':
    'HTTP, JSON aur API ke contract',
  'Understand request/response, status codes, headers, JSON payloads and contract failures.':
    'Request aur response, status code, header, JSON payload aur contract ki galtiyan samajhiye.',
  'An AI API is still an API. The model is probabilistic, but the network interface is software engineering.':
    'AI ka API bhi API hi hai. Model sambhaavna par chalta hai, lekin network ka interface saada software engineering hai.',
  'Call a safe public JSON endpoint and print status code plus two fields.':
    'Ek surakshit public JSON endpoint ko bulaiye aur status code ke saath do field print kijiye.',
  'Build a fake endpoint response with missing and unexpected fields and handle both.':
    'Ek nakli endpoint response banaiye jismein field gayab bhi hon aur anapekshit bhi — dono sambhaaliye.',
  'Simulate 401, 404, 429 and 500 cases and decide which are retryable.':
    '401, 404, 429 aur 500 ke case banaiye aur tay kijiye kaun dobara koshish laayak hai.',
  'An API contract sheet listing request, response, errors and retry policy.':
    'Ek API contract sheet jismein request, response, error aur dobara koshish ki policy likhi ho.',
  'What is the difference between a bad request, unavailable dependency and server failure?':
    'Galat request, gayab dependency aur server ke fail hone mein kya fark hai?',
  'This is the vocabulary you need to challenge “the API failed” as a complete explanation.':
    'Yahi woh shabdavali hai jisse aap “API fail ho gaya” ko poora jawaab maan-ne se inkaar kar sakte hain.',
  'Environments, secrets and Git':
    'Environment, secret aur Git',
  'Use environment variables/secrets, virtual environments and basic Git workflow.':
    'Environment variable aur secret, virtual environment, aur Git ka buniyaadi tareeka istemaal kijiye.',
  'A working prototype that leaks a key or cannot be reproduced is not a credible engineering artifact.':
    'Jo chalta hua prototype key leak kar de ya dobara chalaya hi na ja sake, woh bharosemand engineering cheez nahi hai.',
  'Store a secret outside source code and print only a masked prefix.':
    'Secret ko source code ke baahar rakhiye aur sirf uska dhanka hua shuruati hissa print kijiye.',
  'Create a repository with README, requirements and a repeatable run command.':
    'Ek repository banaiye jismein README, requirements aur dobara chalne wala run command ho.',
  'Commit a deliberately broken change, identify it, and revert to the previous working version.':
    'Jaan-boojh kar ek toota badlaav commit kijiye, use pehchaaniye, aur pichhle chalte hue version par laut aaiye.',
  'Reproducible repo skeleton with <code>.gitignore</code>, README and experiment log.':
    'Dobara chalaya ja sakne wala repo dhaancha, jismein <code>.gitignore</code>, README aur experiment log ho.',
  'Could another person run your experiment without asking what you did manually?':
    'Kya koi dusra aapka experiment chala paayega, bina yeh poochhe ki aapne haath se kya kiya tha?',
  'Reproducibility is a PM concern because it turns a demo into evidence.':
    'Dobara chala paana PM ki chinta hai, kyunki yahi demo ko saboot bana deta hai.',
  'Errors, logging and tests':
    'Error, logging aur test',
  'Read stack traces, add structured logs and write small tests.':
    'Stack trace padhiye, dhaanche wale log jodiye, aur chhote test likhiye.',
  'An AI system is judged by what happens when things go wrong, not only by the happy path.':
    'AI system ko is baat se parkha jaata hai ki galat hone par kya hota hai — sirf seedhe raaste se nahi.',
  'Create three tests: expected answer, missing input, malformed response.':
    'Teen test banaiye: apekshit jawaab, gayab input, aur bigda hua response.',
  'Add request ID, timestamp, model and status to each experiment record.':
    'Har experiment record mein request ID, samay, model aur status jodiye.',
  'Force a timeout and malformed output; trace the failure from input to exception.':
    'Ek timeout aur ek bigda output zabardasti karwaiye; galti ko input se exception tak peechha kijiye.',
  'Mini test suite plus failure log with root cause and fix.':
    'Ek chhota test suite aur failure log, jismein mool kaaran aur sudhaar dono likhe hon.',
  'Can you distinguish an application bug from a provider/model failure?':
    'Kya aap application ke bug aur provider ya model ki galti mein fark kar sakte hain?',
  'This becomes the base for evaluation and observability later.':
    'Aage chal kar yahi evaluation aur observability ki buniyaad banta hai.',
  'Build the experiment harness':
    'Experiment harness banaiye',
  'Create a reusable runner that records inputs, outputs, configuration, latency and errors.':
    'Ek baar-baar kaam aane wala runner banaiye jo input, output, configuration, latency aur error sahej le.',
  'The harness is the bridge from “I tried it” to “I measured it.”':
    'Harness wahi pul hai jo “maine koshish ki” se “maine naapa” tak le jaata hai.',
  'Run one prompt twice and save both runs as structured JSON.':
    'Ek prompt do baar chalaiye aur dono run ko dhaanche wale JSON mein sahej lijiye.',
  'Add experiment name, version, model, prompt version, input/output tokens when available, latency and notes.':
    'Experiment ka naam, version, model, prompt ka version, mil sake to input aur output token, latency aur note jodiye.',
  'Change one variable and verify the logs make the comparison obvious.':
    'Ek variable badliye aur dekhiye ki log tulna ko saaf dikha rahe hain ya nahi.',
  '<code>experiment_runner/</code> with schema, runner, sample runs and README.':
    '<code>experiment_runner/</code> jismein schema, runner, kuch namoone ke run aur README ho.',
  'Can you reproduce yesterday’s result and explain what changed?':
    'Kya aap kal ka nateeja dobara nikaal kar bata sakte hain ki kya badla?',
  'Every later chapter should plug into this harness instead of inventing a new way to record evidence.':
    'Aage ka har chapter isi harness se judna chahiye — har baar saboot sahejne ka naya tareeka gadhne ke bajaay.',
  'The next lesson reuses the artifact you just created.':
    'Agla paath usi cheez ko dobara istemaal karta hai jo aapne abhi banayi.',
  'What an LLM is doing at inference':
    'Inference ke waqt LLM kar kya raha hota hai',
  'Explain tokens, transformer-based context processing, generation and the difference between training and inference.':
    'Token, transformer par aadharit context ki prakriya, generation, aur training aur inference ka fark samjhaiye.',
  'Inference is the execution phase: the model receives context and generates output; training changes the model parameters.':
    'Inference chalne ka charan hai: model ko context milta hai aur woh output banata hai; training model ke parameter badalti hai.',
  'Compare two prompts with different context lengths and record input/output token counts and latency.':
    'Alag-alag lambaai wale do prompt ki tulna kijiye aur input, output token aur latency likhiye.',
  'Create a tiny table of context length versus observed latency/cost.':
    'Context ki lambaai aur dikhi hui latency ya lagat ki ek chhoti table banaiye.',
  'Add irrelevant context and see whether cost, latency or answer quality changes.':
    'Bekaar ka context jodiye aur dekhiye ki lagat, latency ya jawaab ki gunvatta badalti hai ya nahi.',
  'Inference observation sheet.':
    'Inference ki observation sheet.',
  'Why is a larger prompt not automatically a better prompt?':
    'Bada prompt apne-aap behtar prompt kyun nahi ho jaata?',
  'Ask engineers where the cost and latency are actually coming from before debating model brand.':
    'Model ke brand par bahas se pehle engineer se poochhiye ki lagat aur latency aa kahan se rahi hai.',
  'Sampling and output variability':
    'Sampling aur output ka badalta rehna',
  'Understand sampling controls as probability-distribution controls rather than “creativity sliders.”':
    'Sampling ke control ko “creativity ka slider” nahi, sambhaavna ke bantvaare ka control maaniye.',
  'Lower sampling generally reduces variation; it does not turn a model into a guaranteed deterministic or factual system.':
    'Kam sampling aam taur par farak ghatati hai; yeh model ko na to pakka nishchit bana deti hai, na sach bolne wala.',
  'Run the same prompt multiple times under two sampling configurations supported by your provider.':
    'Wahi prompt apne provider ke do sampling configuration par kai baar chalaiye.',
  'Count distinct outputs and note qualitative differences.':
    'Alag-alag output ginye aur unke gunon ka fark likhiye.',
  'Use a factual task and a creative task; compare whether variability matters equally.':
    'Ek tathya wala kaam aur ek rachnatmak kaam lijiye; dekhiye ki badalna dono mein barabar maayne rakhta hai ya nahi.',
  'Sampling experiment table with raw outputs.':
    'Sampling experiment ki table, kachche output ke saath.',
  'What changed: factuality, diversity, or merely variation?':
    'Kya badla: sachchai, vividhta, ya sirf farak?',
  'Do not promise “temperature zero means always identical.” Measure the actual provider behavior.':
    '“Temperature zero matlab hamesha ek jaisa” — yeh vaada mat kijiye. Provider ka asli vyavhaar naapiye.',
  'Model tiers and routing':
    'Model ke star aur routing',
  'Understand why smaller, faster, cheaper models may be appropriate for some tasks and larger models for others.':
    'Samajhiye ki kuch kaamon ke liye chhote, tez, saste model theek kyun hote hain aur kuch ke liye bade.',
  'Model selection is an optimization problem across quality, latency, cost, context, tool reliability and operational constraints.':
    'Model chunna gunvatta, latency, lagat, context, tool ke bharose aur rozmarra ki bandishon ke beech santulan ka sawaal hai.',
  'Create a 10-case benchmark spanning extraction, reasoning, multilingual and refusal tasks.':
    'Ek dus-case ka benchmark banaiye jismein nikaalna, tark, kai bhasha aur mana karna — sab aa jaayein.',
  'Run two available models or model configurations through the same cases.':
    'Do uplabdh model ya configuration ko unhi case se guzaariye.',
  'Route easy cases to the cheaper model and hard cases to the stronger model; compare cost and quality.':
    'Aasaan case saste model ko aur mushkil case majboot model ko bhejiye; lagat aur gunvatta ki tulna kijiye.',
  'Model Selection Card.':
    'Model Selection Card.',
  'Which acceptance metric justified the choice?':
    'Kis acceptance metric ne is chunaav ko sahi thehraaya?',
  'The “best model” is undefined until the task, quality bar and cost ceiling are defined.':
    '“Sabse achha model” tab tak koi cheez hai hi nahi jab tak kaam, gunvatta ki seema aur lagat ki chhat tay na ho.',
  'Reasoning, context and fine-tuning boundaries':
    'Tark, context aur fine-tuning ki lakeerein',
  'Distinguish prompting, context/RAG and fine-tuning as different levers.':
    'Prompting, context ya RAG, aur fine-tuning — teenon ko alag-alag lever maan kar pehchaaniye.',
  'Use context when the system needs changing knowledge; prompting for instruction/behavior; fine-tuning when repeated stable behavior is worth encoding in weights.':
    'Badalti jaankari chahiye to context; nirdesh ya vyavhaar chahiye to prompting; aur jab ek hi tarah ka vyavhaar baar-baar chahiye aur use weight mein baithana faayde ka ho, tab fine-tuning.',
  'Take one task and write three proposed solutions: prompt-only, retrieval/context, fine-tune hypothesis.':
    'Ek kaam lijiye aur teen hal likhiye: sirf prompt, retrieval ya context, aur fine-tune ka anumaan.',
  'Identify the data, expected benefit, maintenance cost and evaluation needed for each.':
    'Har ek ke liye data, apekshit faayda, rakhrakhaav ki lagat aur zaroori evaluation likhiye.',
  'Invent a case where fine-tuning looks attractive but retrieval is cheaper because knowledge changes weekly.':
    'Ek aisa case gadhiye jahan fine-tuning lubhavni lage, lekin retrieval sasta ho kyunki jaankari har hafte badalti hai.',
  'Decision matrix: Prompt vs Context/RAG vs Fine-tune.':
    'Faisle ki matrix: Prompt banaam Context/RAG banaam Fine-tune.',
  'Is the gap knowledge, behavior, or both?':
    'Kami jaankari ki hai, vyavhaar ki, ya dono ki?',
  'This prevents architecture discussions from collapsing into “let’s fine-tune it.”':
    'Yeh architecture ki baatcheet ko “chalo fine-tune kar dete hain” par gir jaane se bachata hai.',
  'Benchmarking without fooling yourself':
    'Benchmark banaiye, khud ko dhokha diye bina',
  'Learn why small demos can produce misleading conclusions and how to design a balanced task set.':
    'Samajhiye ki chhote demo galat nateeje kyun de dete hain, aur santulit kaam-set kaise banayein.',
  'A benchmark is a measurement instrument; biased cases produce biased decisions.':
    'Benchmark naapne ka auzaar hai; jhuke hue case jhuke hue faisle dete hain.',
  'Create categories, sample cases and expected outputs before testing.':
    'Test se pehle shreniyan, namoone ke case aur apekshit output bana lijiye.',
  'Run blind or consistently ordered comparisons where practical.':
    'Jahan ho sake, tulna aankh band kar ke ya ek hi kram mein kijiye.',
  'Add adversarial, ambiguous and no-answer cases and see whether the ranking changes.':
    'Hamle wale, dhundhle aur jawaab-nahi wale case jodiye aur dekhiye ki kram badalta hai ya nahi.',
  '10–30 case model benchmark with category breakdown.':
    '10–30 case ka model benchmark, shreni ke hisaab se bata hua.',
  'Would your benchmark detect the failure you care about most?':
    'Jis galti ki aapko sabse zyada chinta hai, kya aapka benchmark use pakad lega?',
  'A PM should challenge the test set before challenging the score.':
    'PM ko score par sawaal uthane se pehle test set par sawaal uthana chahiye.',
  'Model Selection Card':
    'Model Selection Card',
  'Turn the evidence into a decision artifact engineers and stakeholders can review.':
    'Saboot ko ek aisi faisle wali cheez mein badliye jise engineer aur hitdhaarak dekh sakein.',
  'The card records constraints, evidence, fallback and unresolved risks in one place.':
    'Card bandishein, saboot, vikalp aur bache hue risk — sab ek jagah likh leta hai.',
  'Fill task, quality target, data sensitivity, latency target and cost ceiling.':
    'Kaam, gunvatta ka lakshya, data ki sanvedansheelta, latency ka lakshya aur lagat ki chhat bhariye.',
  'Add model options, benchmark evidence and fallback strategy.':
    'Model ke vikalp, benchmark ka saboot aur vikalp-yojana jodiye.',
  'Remove the benchmark results and try to make the decision; note how much becomes opinion.':
    'Benchmark ke nateeje hata kar faisla lene ki koshish kijiye; dekhiye kitna hissa sirf raay ban jaata hai.',
  'Versioned Model Selection Card.':
    'Version wala Model Selection Card.',
  'Can a reviewer see exactly why the selected model was chosen?':
    'Kya dekhne wala theek-theek samajh sakta hai ki yahi model kyun chuna gaya?',
  'This is portfolio evidence of technical judgment, not a leaderboard screenshot.':
    'Yeh technical samajh ka portfolio saboot hai, koi leaderboard ka screenshot nahi.',
  'Next, we learn to engineer the context around whichever model we selected.':
    'Aage hum seekhenge ki jo bhi model chuna, uske aas-paas ka context kaise gadha jaaye.',
  'Prompt as an interface contract':
    'Prompt, ek interface contract ki tarah',
  'Design prompts with explicit task, constraints, input definitions, output expectations and failure behavior.':
    'Prompt aise banaiye jismein kaam, bandishein, input ki paribhasha, output se ummeed aur galti par vyavhaar — sab saaf likha ho.',
  'A prompt is an interface contract between application and model.':
    'Prompt application aur model ke beech ka interface contract hai.',
  'Rewrite a vague instruction into role, task, constraints, examples and output requirements.':
    'Ek dhundhle nirdesh ko role, kaam, bandish, udaharan aur output ki zaroorat mein dobara likhiye.',
  'Run old and new versions on the same 10 cases.':
    'Purana aur naya version unhi dus case par chalaiye.',
  'Add contradictory instructions and observe which behavior is stable and which is not.':
    'Aapas mein takraane wale nirdesh jodiye aur dekhiye kaunsa vyavhaar tika rehta hai aur kaunsa nahi.',
  'Prompt version diff + benchmark result.':
    'Prompt ke version ka antar aur benchmark ka nateeja.',
  'What requirement became measurable after the rewrite?':
    'Dobara likhne ke baad kaunsi zaroorat naapi ja sakne laayak ban gayi?',
  'Prompt changes should be versioned like code.':
    'Prompt ke badlaav ko code ki tarah version mein rakhna chahiye.',
  'Structured outputs and schemas':
    'Dhaanche wale output aur schema',
  'Make model output machine-consumable and validate it before downstream use.':
    'Model ke output ko machine ke padhne laayak banaiye aur aage bhejne se pehle jaanch lijiye.',
  'Natural-language output is flexible; application interfaces need predictable structure.':
    'Saadhi bhasha ka output lachila hota hai; application ke interface ko anumaan laayak dhaancha chahiye.',
  'Define a small JSON schema for a task extraction object.':
    'Kaam nikaalne wale object ke liye ek chhota JSON schema banaiye.',
  'Generate outputs, parse them and reject invalid structures.':
    'Output banwaiye, unhen padhiye, aur galat dhaanche ko thukra dijiye.',
  'Remove a required field and insert a wrong type; verify the application catches it.':
    'Ek zaroori field hataiye aur ek galat type daaliye; dekhiye ki application use pakadta hai ya nahi.',
  'Schema + validation tests + sample valid/invalid payloads.':
    'Schema, jaanch ke test, aur sahi tatha galat payload ke namoone.',
  'Does the schema prevent unsafe values or only formatting mistakes?':
    'Kya schema asurakshit maan rokta hai, ya sirf format ki galtiyan?',
  'Structured output is an interface control, not a truth guarantee.':
    'Dhaanche wala output interface ka control hai, sach ki guarantee nahi.'

});
