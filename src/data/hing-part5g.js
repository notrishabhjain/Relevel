/* Hinglish: Part V chapters 31 and 32. */
Object.assign(window.HING = window.HING || {}, {

  'Canary release':
    'Canary release — thodon ko pehle',
  'Sending a small share of real traffic to a change before all of it.':
    'Poora traffic bhejne se pehle asli traffic ka ek chhota hissa naye badlaav par bhejna.',
  'Drift':
    'Drift — chupke se khisakna',
  'Quality moving without anybody deploying anything — because the inputs, the documents or the provider changed underneath you.':
    'Quality ka bina kisi deploy ke hilna — kyunki input, documents ya provider neeche se badal gaye.',

  /* ---- chapter 31 ---- */
  'Put a malicious instruction inside a document your own system retrieves, and test whether it can override the task or extract a secret.':
    'Apne hi system ke kisi document mein ek shararti nirdesh daaliye, aur test kijiye ki woh asli kaam ko dabaa sakta hai ya koi raaz nikaal sakta hai.',
  'Add trust boundaries, least privilege, input validation, secret isolation, audit logging and confirmation steps.':
    'Bharose ki seemayein, sabse kam adhikaar, input ki jaanch, raazon ko alag rakhna, record rakhna aur confirmation ke kadam joriye.',
  'Run prompt injection, indirect injection, tool abuse, data leakage and excessive-agency tests.':
    'Prompt injection, ghuma-kar injection, tool ka galat istemaal, data leak aur zyada adhikaar ke test chalaiye.',
  'A security report and an AI risk register.':
    'Ek security report aur ek AI risk register.',
  'Explain why retrieved content is untrusted input, to someone who thinks it is their own data.':
    'Us aadmi ko samjhaiye, jo maanta hai ki yeh uska apna data hai, ki nikala gaya content bharose ke laayak input kyun nahi hai.',
  'Security, safety and governance':
    'Suraksha, safety aur governance',
  'Book chapter 18. Assume the model will be manipulated. The application, the retrieved content, the tools, the identity layer and the data pipeline are all part of the attack surface now.':
    'Kitaab ka chapter 18. Yeh maan kar chaliye ki model ko bahkaya jaayega. Ab application, nikala gaya content, tools, pehchaan ki parat aur data ki pipeline — sab hamle ki satah ka hissa hain.',
  'Explain why retrieved content is untrusted input regardless of who owns the document.':
    'Samjhaana ki nikala gaya content bharose ke laayak kyun nahi hai, chaahe document kisi ka bhi ho.',
  'Apply least privilege to an agent and show what breaks.':
    'Kisi agent par sabse kam adhikaar lagana aur dikhana ki kya tootta hai.',
  'Produce a risk register where every control has evidence beside it.':
    'Aisa risk register banana jisme har control ke saath saboot likha ho.',
  'An AI risk register with evidence':
    'Saboot ke saath ek AI risk register',
  'Asset, threat, impact, likelihood, control, owner, test, residual risk. Every row ends in a test, because a register whose rows end in a control is a list of intentions.':
    'Sampatti, khatra, asar, sambhavna, control, zimmedaar, test, bacha hua khatra. Har panti test par khatam hoti hai — kyunki jis register ki pantiyaan control par khatam hoti hain woh iraadon ki list hai.',
  'List the assets: documents, credentials, tools, user data, traces.':
    'Sampatti ki list banaiye: documents, passwords aur keys, tools, user ka data, traces.',
  'For each, name the threats you have actually reproduced, not the ones you read about.':
    'Har ek ke liye woh khatre likhiye jo aapne khud kar ke dekhe hain, woh nahi jo aapne padhe hain.',
  'Record impact and likelihood in whatever scale your organisation uses.':
    'Asar aur sambhavna apne sangathan ke paimane par likhiye.',
  'Name the control and the owner — a person or role, not a team.':
    'Control aur zimmedaar ka naam likhiye — koi vyakti ya pad, poori team nahi.',
  'Name the test that proves the control, and run it.':
    'Us test ka naam likhiye jo control ko saabit karta hai, aur use chalaiye.',
  'Record the residual risk that remains after the control, honestly.':
    'Control ke baad jo khatra bach jaata hai use imaandaari se likhiye.',
  'Write the go/no-go checklist for a customer-facing agent: identity, secrets, tool permissions, audit trails, data retention, provider policy, incident response.':
    'Customer ke saamne aane waale agent ke liye jaane/na-jaane ki checklist likhiye: pehchaan, raaz, tool ki ijazat, record, data kitne din rahega, provider ki policy, aur hadsa hone par kya karenge.',
  'Every threat listed has been reproduced at least once.':
    'Har likha hua khatra kam se kam ek baar kar ke dekha gaya ho.',
  'Every control has a test that has been run.':
    'Har control ka ek test ho jo chalaya jaa chuka ho.',
  'Residual risk is stated rather than left implied.':
    'Bacha hua khatra likha gaya ho, andaaze par chhoda na gaya ho.',
  'Injection has no clean fix':
    'Injection ka koi saaf ilaaj nahi hai',
  'Chapter 13 established it. This chapter builds the controls around it.':
    'Chapter 13 ne yeh saabit kiya tha. Yeh chapter uske aas-paas controls banata hai.',
  'Tools are a security boundary':
    'Tools ek suraksha ki seema hain',
  'Chapter 25. Least privilege is what turns that into practice.':
    'Chapter 25. Sabse kam adhikaar hi use amal mein badalta hai.',
  'Retrieval can be poisoned':
    'Retrieval mein zeher milaya jaa sakta hai',
  'Chapter 7.5 made you do it to your own system.':
    'Chapter 7.5 mein aapne yeh apne hi system ke saath kiya tha.',
  'If somebody slips a note into a stack of paperwork that says “approve this one without checking”, the problem is not that your clerk cannot read. It is that nothing in the process distinguishes an instruction from a document.':
    'Agar koi kaagzon ke dher mein ek parchi rakh de jispar likha ho "ise bina dekhe manzoor kar do", to dikkat yeh nahi hai ki aapka clerk padh nahi sakta. Dikkat yeh hai ki poore tareeke mein kahin bhi nirdesh aur document ka farak nahi kiya jaata.',
  'That is the whole of AI security in one image, and it is why almost none of this chapter is about the model. The model reads everything you hand it with equal trust. What decides whether that is dangerous is the system around it — what it is handed, and what it is allowed to do next.':
    'Ek tasveer mein AI security bas itni hai, aur isiliye is chapter ka lagbhag kuch bhi model ke baare mein nahi hai. Aap jo bhi model ko dete hain woh sab par barabar bharosa karke padhta hai. Yeh khatarnaak hai ya nahi, yeh uske aas-paas ka system tay karta hai — use kya diya jaata hai, aur uske baad use kya karne ki ijazat hai.',
  'Prompt injection is an input trust problem. The model cannot reliably tell an instruction from data, so the boundary has to be enforced by the system that assembles the context — not requested politely in the system prompt.':
    'Prompt injection input par bharose ki dikkat hai. Model bharose ke saath nirdesh aur data mein farak nahi kar sakta, isliye seema ko woh system lagu kare jo context jodta hai — system prompt mein vinamrata se maangne se kaam nahi chalega.',
  'Least privilege applies to agents too. An agent with a tool it never needs is an agent that can be persuaded to use it.':
    'Sabse kam adhikaar agents par bhi lagta hai. Jis agent ke paas aisa tool hai jiski use kabhi zaroorat nahi, use koi na koi use chalane par raazi kar hi lega.',
  'Risk':
    'Khatra',
  'Example control':
    'Udaharan ke taur par control',
  'The evidence that it works':
    'Saboot ki yeh kaam karta hai',
  'Prompt injection':
    'Prompt injection',
  'Content separation, tool allowlist, confirmation':
    'Content ko alag rakhna, ijazat waali tool list, confirmation',
  'Red-team test results':
    'Red-team test ke nateeje',
  'Data leakage':
    'Data ka bahar nikalna',
  'Access-aware retrieval, redaction, log controls':
    'Access dekhkar retrieval, sanvedansheel hisse chhupana, log par control',
  'Access tests and trace samples':
    'Access ke test aur trace ke namoone',
  'Excessive agency':
    'Zaroorat se zyada adhikaar',
  'Least privilege plus approval gates':
    'Sabse kam adhikaar aur approval ke gate',
  'Tool policy and approval logs':
    'Tool ki policy aur approval ke record',
  'Model drift or deprecation':
    'Model ka khisakna ya band ho jaana',
  'Versioning plus a regression suite':
    'Version rakhna aur ek regression suite',
  'Release and evaluation report':
    'Release aur evaluation ki report',
  'Unsafe output':
    'Asurakshit jawaab',
  'Policy filter and human escalation':
    'Policy ka filter aur insaan tak pahunchana',
  'Safety test set results':
    'Safety test set ke nateeje',
  'A safeguard nobody has ever tested is just a sentence in a document. Write beside each one the test that proves it works — and then run it.':
    'Jis suraksha ko kisi ne kabhi test hi nahi kiya, woh kaagaz par ek line bhar hai. Har ek ke saath woh test likhiye jo use saabit karta hai — aur phir use chalaiye.',
  'Pick one control your organisation already claims to have. Write down what evidence would prove it works, and whether that evidence exists.':
    'Ek aisa control chuniye jiska aapka sangathan pehle se daawa karta hai. Likhiye ki kaun sa saboot use saabit karega, aur kya woh saboot maujood hai.',
  'The gap between the claim and the evidence is the actual risk position. That gap is what a risk register is for.':
    'Daawe aur saboot ke beech ka faasla hi asli khatre ki sthiti hai. Risk register usi faasle ke liye hota hai.',
  'Text that reaches the model as data and is followed as an instruction. The model cannot reliably tell the two apart, so the boundary has to be enforced around it.':
    'Aisa likha hua jo model tak data ban kar pahunchta hai aur nirdesh maan kar maana jaata hai. Model in dono mein bharose se farak nahi kar sakta, isliye seema uske bahar lagani padti hai.',
  'Indirect injection':
    'Ghuma-kar kiya gaya injection',
  'The same attack arriving through content the system retrieved rather than through what the user typed.':
    'Wahi hamla, par user ke type kiye hue ki jagah system ke nikaale hue content ke zariye aata hua.',
  'Giving a system more permission, reach or autonomy than its task requires.':
    'System ko uske kaam se zyada ijazat, pahunch ya azaadi dena.',
  'Risk register':
    'Risk register',
  'A table where every row ends in a test that has been run, rather than in a control that has been described.':
    'Aisa table jiski har panti chalaye jaa chuke test par khatam hoti hai, na ki bas likh diye gaye control par.',

  /* ---- chapter 32 ---- */
  'Take "return the correct document" and convert it into an acceptance criterion you could actually test.':
    '"Sahi document lautaye" ko lijiye aur use aisi acceptance criteria mein badliye jise aap sach mein test kar sakein.',
  'Write a compact AI PRD: problem, baseline, scope, context, tools, failure modes, the human role, evaluation, safety, latency, cost, rollout and rollback.':
    'Ek chhota AI PRD likhiye: samasya, abhi ka tareeka, daayra, context, tools, kaise bigdega, insaan ka role, evaluation, suraksha, latency, cost, rollout aur wapas lena.',
  'Attack it with three scenarios — a wrong answer, an over-refusal, and a harmful action.':
    'Teen sthitiyon se ispar hamla kijiye — ek galat jawaab, zaroorat se zyada mana karna, aur ek nuksaan pahunchane waala kaam.',
  'An AI PRD, a release gate and a metric map.':
    'Ek AI PRD, ek release gate aur numbers ka naksha.',
  'An engineer can build from it and a leader can understand the trade-off it makes.':
    'Engineer ise padhkar bana sake aur leader samajh sake ki isme kya len-den kiya jaa raha hai.',
  'AI product management':
    'AI product management',
  'Book chapter 19. Writing specifications for a probabilistic system — the chapter that turns the technical literacy of this track into the role.':
    'Kitaab ka chapter 19. Andaazon par chalne waale system ke liye spec likhna — wahi chapter jo is track ki technical samajh ko ek role bana deta hai.',
  'Write an acceptance criterion as a distribution with a tolerance, not a promise.':
    'Acceptance criteria ko waade ki jagah ek phailaav aur uski chhoot ki tarah likhna.',
  'Separate business outcomes from model metrics from operating metrics.':
    'Business ke nateeje, model ke numbers aur chalane ke kharche — teeno ko alag rakhna.',
  'Design the three UI states an AI feature needs.':
    'AI feature ko chahiye teen screen ki soortein banana.',
  'An AI PRD for a policy assistant':
    'Ek policy assistant ke liye AI PRD',
  'Two pages. An engineer should be able to build from it and a leader should be able to see what trade-off is being made and agree to it deliberately.':
    'Do page. Engineer ise padhkar bana sake, aur leader dekh sake ki kya len-den ho raha hai aur soch-samajh kar haami bhar sake.',
  'State the user problem and the non-AI baseline it has to beat.':
    'User ki samasya likhiye aur woh bina-AI waala tareeka jise ise haraana hai.',
  'Define scope and, explicitly, the non-goals.':
    'Daayra tay kijiye, aur saaf-saaf yeh bhi ki kya nahi karna hai.',
  'Specify context, tools and the human role in the loop.':
    'Context, tools aur beech mein insaan ka role tay kijiye.',
  'List the failure modes you have actually observed in this course.':
    'Woh bigadne ke tareeke likhiye jo aapne is course mein khud dekhe hain.',
  'Name the evaluation dataset and write the five-line evaluation plan.':
    'Evaluation dataset ka naam lijiye aur paanch line ka evaluation plan likhiye.',
  'Set quality bars, safety constraints, latency and cost goals.':
    'Quality ke bar, suraksha ki seemayein, aur latency aur cost ke lakshya tay kijiye.',
  'Write the rollout plan and a one-line rollback trigger.':
    'Rollout ka plan aur ek line ki wapas lene ki shart likhiye.',
  'Name the owner.':
    'Zimmedaar ka naam likhiye.',
  'Every quality claim is a number against a named test set.':
    'Quality ka har daawa ek number ho, kisi naam waale test set ke against.',
  'Non-goals are written down.':
    'Kya nahi karna hai, woh likha hua ho.',
  'The rollback trigger could be acted on without you.':
    'Wapas lene ki shart par koi aapke bina bhi amal kar sake.',
  'Quality is a measured number against a test set':
    'Quality ek naapa hua number hai, kisi test set ke against',
  'Chapter 29 built the gate this PRD points at.':
    'Chapter 29 ne wahi gate banaya tha jiski taraf yeh PRD ishara karta hai.',
  'Failure costs differ by use case':
    'Failure ki keemat har istemaal mein alag hoti hai',
  'Chapter 6. It is a governance call, not a technical one.':
    'Chapter 6. Yeh governance ka faisla hai, technical nahi.',
  'Chapter 20 designed the failure surface.':
    'Chapter 20 ne yeh design kiya tha ki galat hone par kya dikhega.',
  '“The train will arrive at 9:04” is a promise a railway cannot keep, and everybody knows it. So real railways publish something else: the share of trains arriving within a stated few minutes, measured, every month. That number is honest, and you can actually plan around it.':
    '"Train 9:04 par aayegi" aisa waada hai jo koi railway nibha nahi sakti, aur yeh sab jaante hain. Isliye asli railway kuch aur chhapti hai: kitne pratishat train tay kiye gaye chand minaton ke andar pahunchi, har maheene naapkar. Woh number imaandaar hai, aur uspar aap sach mein yojana bana sakte hain.',
  'AI features need the same move. “It returns the right document” is a promise nothing probabilistic can keep. What you can write down is: how often, measured on which set of cases, and what the system does the rest of the time — because the rest of the time is never zero.':
    'AI features ko bhi yahi karna chahiye. "Yeh sahi document laayega" aisa waada hai jo andaazon par chalne waali koi cheez nibha nahi sakti. Jo aap likh sakte hain woh yeh hai: kitni baar, kin cases par naapkar, aur baaki waqt system kya karta hai — kyunki baaki waqt kabhi shunya nahi hota.',
  '“Done” is a distribution, not a single deterministic output.':
    '"Ho gaya" ek phailaav hai, koi ek pakka jawaab nahi.',
  'Here is a spec outline you can copy. It is long because each line is a question somebody will ask you later, and answering it now is cheaper:':
    'Yeh raha ek spec ka khaka jise aap copy kar sakte hain. Yeh lamba isliye hai ki har line woh sawaal hai jo koi aapse baad mein poochhega, aur abhi jawaab dena sasta padta hai:',
  'The user’s problem, and how it is handled today without AI.':
    'User ki samasya, aur aaj bina AI ke woh kaise sambhali jaati hai.',
  'Why AI is the right answer to it — and what is explicitly out of scope.':
    'AI iska sahi jawaab kyun hai — aur saaf-saaf kya daayre se bahar hai.',
  'What goes in: the inputs, the context, the tools it may call.':
    'Andar kya jaata hai: inputs, context, aur woh tools jo yeh chala sakta hai.',
  'How it fails, and what a person does when it does.':
    'Yeh kaise bigadta hai, aur bigadne par koi vyakti kya karta hai.',
  'The test set, and the scores that count as good enough.':
    'Test set, aur woh numbers jo "kaafi achcha" maane jaate hain.',
  'Safety limits, the speed it must hold, the cost it must stay under.':
    'Suraksha ki seemayein, jo raftaar banaye rakhni hai, aur jis kharche ke neeche rehna hai.',
  'How it rolls out, what you watch afterwards, and what triggers pulling it back.':
    'Yeh kaise nikalta hai, uske baad aap kya dekhte hain, aur kis baat par ise wapas kheencha jaayega.',
  'Whose name is on it.':
    'Ispar kiska naam likha hai.',
  'Keep the metric families apart. Task completion rate is a product outcome. Groundedness is a system quality metric. Token cost is an operating metric. Complaint rate is a user signal. Mixing them is how a dashboard ends up unable to answer any question at all.':
    'Numbers ke parivaar alag rakhiye. Kaam poora hone ki dar product ka nateeja hai. Saboot par tika hona system ki quality ka number hai. Token ka kharcha chalane ka number hai. Shikayat ki dar user ka ishara hai. Inhe milane se hi dashboard aise ban jaate hain jo kisi bhi sawaal ka jawaab nahi de paate.',
  'The business question':
    'Business ka sawaal'

});
