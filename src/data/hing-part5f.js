/* Hinglish: Part V chapters 29 and 30. */
Object.assign(window.HING = window.HING || {}, {

  'Write twenty tests before you improve anything: normal, paraphrase, ambiguous, no-answer, multilingual, adversarial and tool-use cases.':
    'Kuch bhi sudhaarne se pehle bees test likhiye: aam, ghuma-phira kar poochha gaya, dhundhla, bina-jawaab waala, doosri bhasha, hamla karne waala, aur tool chalane waala.',
  'Automate retrieval, schema, tool and end-to-end checks. Reach for a model judge only where a deterministic check cannot do the job.':
    'Retrieval, schema, tool aur poore-safar ki jaanchein apne aap chalaiye. Model waale judge ki taraf tabhi jaaiye jab pakki jaanch kaam na kar sakti ho.',
  'Change the prompt, the model and the index in turn and run the regression. Compare judge labels against human labels on a sample.':
    'Baari-baari prompt, model aur index badliye aur purane test dobara chalaiye. Kuch namoonon par judge ke aur insaan ke faisle milaiye.',
  'An evaluation harness and a release gate.':
    'Ek evaluation harness aur ek release ka gate.',
  'No change ships because a demo looked better. It ships because it passed the gate.':
    'Koi badlaav isliye nahi jaata ki demo achcha laga. Woh isliye jaata hai ki gate paar kiya.',
  'Evaluation engineering':
    'Evaluation engineering',
  'A release gate':
    'Ek release ka gate',
  'Run the gate against your current system and record whether it passes today.':
    'Gate ko apne aaj ke system par chalaiye aur likhiye ki aaj paas hota hai ya nahi.',
  'Every threshold is a number against a named test set.':
    'Har threshold ek number ho, kisi naam waale test set ke against.',
  'The gate has been run at least once and produced a verdict.':
    'Gate kam se kam ek baar chala ho aur faisla diya ho.',
  'The rollback trigger names a person or a role.':
    'Wapas lene ki shart mein kisi vyakti ya pad ka naam ho.',
  'A model can grade output at scale':
    'Model bade paimane par number de sakta hai',
  'Layer':
    'Parat',
  'Example metric':
    'Udaharan ke taur par number',
  'The release question it answers':
    'Yeh release ka kaun sa sawaal hal karta hai',
  'Retrieval':
    'Retrieval',
  'Recall@k, Precision@k':
    'Recall@k, Precision@k',
  'Did we fetch the right evidence?':
    'Kya humne sahi saboot uthaya?',
  'Generation':
    'Jawaab banana',
  'Groundedness, task success':
    'Saboot par tika hona, kaam poora hona',
  'Did the answer use the evidence correctly?':
    'Kya jawaab ne saboot ka sahi istemaal kiya?',
  'Tool use':
    'Tool ka istemaal',
  'Tool-selection accuracy':
    'Sahi tool chunne ki dar',
  'Did it call the right capability?':
    'Kya usne sahi cheez chalayi?',
  'Operations':
    'Chalane ka kaam',
  'p95 latency, cost per task':
    'p95 latency, har kaam ki cost',
  'Can we afford to run it?':
    'Kya hum ise chala sakne layak hain?',
  'Safety':
    'Suraksha',
  'Attack success rate':
    'Hamle ke kaamyaab hone ki dar',
  'Can adversarial input break the controls?':
    'Kya dushmani waala input controls tod sakta hai?',
  'Golden set':
    'Golden set',
  'The curated, versioned cases every change is measured against.':
    'Chhaante hue, version waale cases jinke against har badlaav naapa jaata hai.',
  'LLM-as-judge':
    'Model ko judge banana',
  'Using a model to score output. A scorer, not an oracle — its disagreement with human labels is a number you should know.':
    'Jawaab ko number dene ke liye model ka istemaal. Yeh number dene waala hai, bhagwaan nahi — insaan se yeh kitna asehmat hota hai, woh number aapko pata hona chahiye.',
  'Regression test':
    'Regression test',
  'A case that passed before and must still pass now.':
    'Aisa case jo pehle paas hota tha aur ab bhi paas hona chahiye.',
  'Release gate':
    'Release ka gate',
  'The thresholds a change has to clear before it ships, whatever the demo looked like.':
    'Woh thresholds jo badlaav ko jaane se pehle paar karne hain, demo chaahe jaisa bhi laga ho.',
  'Trace one request by hand and time every stage with a stopwatch.':
    'Ek request ko haath se traciye aur har padav ka samay stopwatch se naapiye.',
  'Record request id, model and prompt version, retrieval ids, tool calls, latency, tokens, status and evaluation result.':
    'Likhiye: request id, model aur prompt ka version, nikaale gaye chunks ki ids, tool calls, latency, tokens, status aur evaluation ka nateeja.',
  'Deliberately create a slow request, an expensive one and a low-quality one, then diagnose each from its trace alone.':
    'Jaanbujhkar ek dheemi request banaiye, ek mehngi, aur ek kharaab quality waali — phir sirf trace dekhkar teeno ki wajah pata lagaiye.',
  'A six-panel observability specification.':
    'Chhe panel waala observability ka khaka.',
  'Say which signals trigger an investigation, which trigger a rollback, and which are noise.':
    'Batayiye ki kaun se ishaare jaanch shuru karwate hain, kaun se wapas lene ki, aur kaun se sirf shor hain.',
  'Observability and LLMOps':
    'Observability aur LLMOps',
  'Treat cost as an architecture metric rather than a finance report.':
    'Cost ko finance ki report nahi, architecture ka number maanna.',
  'Name what must be versioned so a change can be rolled back.':
    'Batana ki kis-kis cheez ka version rakhna zaroori hai taaki badlaav wapas liya jaa sake.',
  'Safety: attack success rate and refusal behaviour, from which test set.':
    'Suraksha: hamla kitni baar chala aur mana karne ka bartav, kis test set se.',
  'Cost: per task and per day, with the components visible.':
    'Cost: har kaam ki aur har din ki, jisme hisse dikhte hon.',
  'Every panel names its data source.':
    'Har panel apne data ka source bataye.',
  'A release gate needs evidence':
    'Release ke gate ko saboot chahiye',
  'Trace':
    'Trace',
  'The record of one request’s journey through the system: what was retrieved, which prompt version ran, what each stage cost in time and tokens.':
    'Ek request ke poore safar ka record: kya nikala gaya, kaun sa prompt version chala, aur har padav mein kitna samay aur kitne tokens lage.',
  'Telemetry':
    'Telemetry',
  'The measurements a running system emits about itself — timings, counts, errors, usage — gathered so somebody can see what it is doing without reading the code.':
    'Chalta hua system apne baare mein jo naap bhejta hai — samay, ginti, errors, usage — taaki koi bina code padhe dekh sake ki woh kya kar raha hai.'

});
