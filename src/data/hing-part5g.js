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
  'An AI risk register with evidence':
    'Saboot ke saath ek AI risk register',
  'Name the test that proves the control, and run it.':
    'Us test ka naam likhiye jo control ko saabit karta hai, aur use chalaiye.',
  'Every control has a test that has been run.':
    'Har control ka ek test ho jo chalaya jaa chuka ho.',
  'Tools are a security boundary':
    'Tools ek suraksha ki seema hain',
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
  'An AI PRD for a policy assistant':
    'Ek policy assistant ke liye AI PRD',
  'Write the rollout plan and a one-line rollback trigger.':
    'Rollout ka plan aur ek line ki wapas lene ki shart likhiye.',
  'Name the owner.':
    'Zimmedaar ka naam likhiye.',
  'Every quality claim is a number against a named test set.':
    'Quality ka har daawa ek number ho, kisi naam waale test set ke against.',
  'Quality is a measured number against a test set':
    'Quality ek naapa hua number hai, kisi test set ke against',
  'Failure costs differ by use case':
    'Failure ki keemat har istemaal mein alag hoti hai',
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
  'The business question':
    'Business ka sawaal'

});
