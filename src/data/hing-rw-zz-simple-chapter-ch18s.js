/* Hinglish for Security and governance: controls around an untrusted model (chapter:ch18s), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Hide a bad instruction (a trick note) inside a document that your own system fetches. Then test whether it can override the task, or pull out a secret.':
    'Ek buri instruction (chhupi hui parchi) ko aise document mein chhupaiye jo aapka apna system laata hai. Phir test kijiye ki kya woh task ko override kar sakti hai, ya koi secret nikal sakti hai.',
  'Add these: trust boundaries (a fence between safe and unsafe text). Least privilege (give only the keys that are needed). Input validation (check what comes in). Secret isolation (keep secrets in a locked drawer). Audit logging (a diary of who did what). Confirmation steps (ask “are you sure?”).':
    'Yeh jodiye: trust boundaries (surakshit aur asurakshit text ke beech baad). Least privilege (sirf zaroori chaabiyan dena). Input validation (jo andar aaye use check karna). Secret isolation (secrets ko taale wali daraaz mein rakhna). Audit logging (kisne kya kiya, uski diary). Confirmation steps (“kya aap pakka hain?” poochna).',
  'Run tests for prompt injection (a trick note typed in), indirect injection (a trick note hidden in fetched text), tool abuse, data leakage and excessive agency (giving the system too much power).':
    'In ke tests chalaiye: prompt injection (type ki hui chhupi parchi), indirect injection (laaye hue text mein chhupi parchi), tool abuse, data leakage aur excessive agency (system ko zaroorat se zyada taakat dena).',
  'A security report and an AI risk register (a table of what could go wrong, and a test for each).':
    'Ek security report aur ek AI risk register (kya galat ho sakta hai, uski table, har ek ke saath ek test).',
  'Explain why retrieved content (text the system fetches) is untrusted input, to someone who thinks it is simply their own data.':
    'Kisi aise insaan ko samjhaiye jo retrieved content (system ka laaya hua text) ko bas apna data maanta hai, ki woh untrusted input kyun hai.',
  'Prompt injection is a trick note. Text reaches the model as plain data, but the model follows it like an order. The model cannot reliably tell the two apart. So the fence has to be built around it, by the system.':
    'Prompt injection ek chhupi hui parchi hai. Text model tak saadha data banke pahunchta hai, par model use hukm ki tarah maan leta hai. Model in dono mein bharose se farq nahi kar sakta. Isliye baad uske aas-paas system ko khud banana padta hai.',
  'The same trick, but the note arrives hidden inside content the system fetched, not in what the user typed. Think of a slip hidden inside a stack of papers.':
    'Wahi chaal, lekin parchi user ke type kiye text mein nahi, system ke laaye hue content ke andar chhupi aati hai. Kaagzaat ke dher mein chhupi parchi socheye.',
  'Excessive agency':
    'Excessive agency',
  'Excessive agency means giving a system more permission, reach or freedom than its task needs, like handing a guest the keys to every room.':
    'Excessive agency ka matlab hai kisi system ko uske task ki zaroorat se zyada permission, reach ya azaadi dena, jaise mehmaan ko har kamre ki chaabi thama dena.',
  'Risk register':
    'Risk register',
  'A risk register is a table in which every row ends in a test that has been run. It is not enough to describe a control (a safety measure). The test is the proof.':
    'Risk register ek table hai jismein har row ek aise test par khatam hoti hai jo chalaya ja chuka hai. Sirf control (suraksha ka upay) describe karna kaafi nahi. Test hi saboot hai.',
  'Assume someone will fool the model. Everything around it can be attacked: the app, the retrieved content, the tools, the identity layer (who is who) and the data pipeline (the path data travels). You will apply least privilege (only the keys that are needed). And you will build a risk register where every control has a test.':
    'Maan lijiye koi model ko bewakoof banayega. Uske aas-paas sab kuch nishana ban sakta hai: app, retrieved content, tools, identity layer (kaun kaun hai) aur data pipeline (data ka raasta). Aap least privilege lagayenge (sirf zaroori chaabiyan). Aur ek risk register banayenge jismein har control ka ek test hoga.',
  'Explain why retrieved content (fetched text) is untrusted input, whoever owns the document.':
    'Samjha paana ki retrieved content (laaya hua text) untrusted input kyun hai, document ka owner koi bhi ho.',
  'Apply least privilege (give only the keys that are needed) to an agent, and show what breaks.':
    'Ek agent par least privilege (sirf zaroori chaabiyan dena) lagana, aur dikha paana ki kya toot-ta hai.',
  'Produce a risk register (a table of what could go wrong) in which every control has evidence next to it.':
    'Aisa risk register (kya galat ho sakta hai, uski table) banana jismein har control ke saath evidence ho.',
  'Write the risk register, with a test beside every control':
    'Risk register likhiye, har control ke saath ek test ke saath',
  'A risk register that stops at controls is only a list of good intentions. You learned why fetched text is untrusted input, whoever owns it. You learned to apply least privilege to an agent. And you learned to put evidence beside every control. Now you write the risk register for Bharat Privacy Guard.':
    'Jo risk register sirf controls par ruk jaaye, woh bas achhe iraadon ki list hai. Aapne seekha ki laaya hua text untrusted input kyun hai, chahe owner koi bhi ho. Agent par least privilege kaise lagate hain. Aur har control ke saath evidence kaise rakhte hain. Ab aap Bharat Privacy Guard ke liye risk register likhenge.',
  'Writing only. The register rests on evidence from your earlier chapters, like a case file. You need no new code.':
    'Sirf likhna hai. Register aapke pichhle chapters ke evidence par tika hai, jaise case file. Naya code nahi chahiye.',
  'For each risk, write eight things: the asset (what is at stake), the threat (what could hurt it), the impact (how bad), how likely it is, the control (the safety measure), the owner (who looks after it), the test, and the risk that remains.':
    'Har risk ke liye aath cheezein likhiye: asset (kya daav par hai), threat (kya nuksaan kar sakta hai), impact (kitna bura), kitna likely hai, control (suraksha ka upay), owner (kaun dekhta hai), test, aur jo risk bacha rehta hai.',
  'Include at least these eight risks. A missed Aadhaar number. A false alarm that blocks a real message. An attack hidden in the text reaching the model. The provider keeping your data. The model provider going down. The reference lists going out of date. The logs storing raw personal data. A person with more access than they need.':
    'Kam se kam yeh aath risks rakhiye. Ek chhoota hua Aadhaar number. Ek false alarm jo asli message ko block kar de. Text mein chhupa attack jo model tak pahunch jaaye. Provider ka aapka data rakh lena. Model provider ka down ho jaana. Reference lists ka purani ho jaana. Logs mein raw personal data store hona. Kisi insaan ke paas zaroorat se zyada access hona.',
  'For every control, write the test that shows it works, and run that test wherever you can. A control with no test is only an intention, like a lock nobody has tried.':
    'Har control ke liye woh test likhiye jo dikhaye ki woh kaam karta hai, aur jahan ho sake woh test chalaiye. Jis control ka test nahi, woh sirf ek iraada hai, jaise woh taala jise kisi ne khola-bandh nahi kiya.',
  'Apply least privilege to the tool. List what each part can reach, take away everything it does not need, and say what breaks.':
    'Tool par least privilege lagaiye. Likhiye ki har part kya-kya chhoo sakta hai, jo zaroori nahi use hataiye, aur bataiye ki kya toot-ta hai.',
  'Write two lines on why text fetched from your own reference lists must still be treated as untrusted input.':
    'Do lines likhiye ki aapki apni reference lists se laaya hua text bhi untrusted input kyun maana jaana chahiye.',
  'Add the personal-data row from the table: raw personal data in logs (the diary of what happened), or kept too long. Name the DPDP Act duty it supports. Keep the project wording: the tool helps an organisation collect and share less personal data, and it does not make anyone compliant.':
    'Table ki personal-data row jodiye: logs (kya hua, uski diary) mein raw personal data, ya zyada der tak rakha hua. Naam dijiye ki yeh kaun si DPDP Act duty ko support karti hai. Project wali wording rakhiye: tool kisi organisation ko kam personal data collect aur share karne mein madad karta hai, aur yeh kisi ko compliant nahi banata.',
  'A register of at least eight risks, with all eight columns filled in, like a form with no empty boxes.':
    'Kam se kam aath risks ka ek register, aathon columns bhare hue, jaise bina khaali khaano wala form.',
  'A test for every control, with the results of those you ran.':
    'Har control ke liye ek test, aur jo tests aapne chalaye unke results.',
  'A least-privilege list (only the keys that are needed), and what broke when you removed access.':
    'Ek least-privilege list (sirf zaroori chaabiyan), aur access hatane par kya toota.',
  'Two lines on why retrieved (fetched) text is untrusted.':
    'Do lines ki retrieved (laaya hua) text untrusted kyun hai.',
  'Prompt injection (the hidden trick note) has no complete fix':
    'Prompt injection (chhupi hui parchi) ka koi poora fix nahi hai',
  'Chapter 13 showed you this. This chapter builds the controls around the problem, like a fence around a pit.':
    'Chapter 13 mein aapne yeh dekha tha. Yeh chapter is problem ke aas-paas controls banata hai, jaise gadde ke chaaron taraf baad.',
  'Tools are a security boundary, like a door in a wall':
    'Tools ek security boundary hain, jaise deewar mein ek darwaaza',
  'You learned this in Chapter 25. Least privilege (only the keys that are needed) puts it into practice.':
    'Yeh aapne Chapter 25 mein seekha tha. Least privilege (sirf zaroori chaabiyan) ise practice mein laata hai.',
  'Retrieved text (text the system fetches) can carry attacks':
    'Retrieved text (system ka laaya hua text) mein attacks aa sakte hain',
  'In Chapter 7.5 you planted a trick note in your own system.':
    'Chapter 7.5 mein aapne apne hi system mein ek chhupi parchi daali thi.',
  'Bring your injection audit (your list of trick-note tests) from Chapter 13, and the tool classification (which tools are risky) from Chapter 27.':
    'Chapter 13 ka apna injection audit (chhupi parchi ke tests ki list) aur Chapter 27 ki tool classification (kaun se tool risky hain) saath rakhiye.',
  'Do units 18.7 and 18.8, then the capstone (the chapter’s project). Only read the other units this time.':
    'Units 18.7 aur 18.8 kijiye, phir capstone (is chapter ka project). Baaki units is baar sirf padh lijiye.',
  'In the last chapter you learned to watch a live system, like a guard watching a shop. Now ask: what if someone tries to misuse it? The answer starts with a plain fact. The model trusts everything it reads, the same amount.':
    'Pichhle chapter mein aapne seekha ki live system ko kaise dekhte hain, jaise dukaan par chowkidaar. Ab poochhiye: agar koi use galat tareeke se use kare toh? Jawaab ek saade fact se shuru hota hai. Model jo bhi padhta hai, us sab par barabar bharosa karta hai.',
  'Whether that is dangerous depends on the system around the model: what it is given, and what it is allowed to do next. So most of AI security is about the system, not the model. Think of a good clerk in a badly run office.':
    'Yeh khatarnak hai ya nahi, yeh model ke aas-paas ke system par depend karta hai: use kya diya jaata hai, aur aage use kya karne ki ijaazat hai. Isliye AI security ka zyadatar hissa system ke baare mein hai, model ke baare mein nahi. Kharab chalte daftar ke achhe clerk ko socheye.',
  'Here is a picture. Someone slips a note into a stack of paperwork that says “approve this one without checking”. The clerk reads perfectly well. The trouble is that nothing in the process keeps an instruction apart from a document.':
    'Ek tasveer dekhiye. Kisi ne kaagzaat ke dher mein ek parchi sarka di jis par likha hai “ise bina check kiye approve kar do”. Clerk bilkul achhe se padh leta hai. Dikkat yeh hai ki process mein kuch bhi instruction ko document se alag nahi rakhta.',
  'Prompt injection is an input trust problem: the hidden trick note. The model cannot reliably tell an instruction from data. So the system that puts the context together (the model’s desk) must build the fence. Asking nicely in the system prompt (the rules on the shop wall) is not enough.':
    'Prompt injection ek input trust problem hai: chhupi hui parchi. Model bharose se instruction aur data mein farq nahi kar sakta. Isliye jo system context (model ki mez) taiyaar karta hai, usi ko baad banani padegi. System prompt (deewar par lage niyam) mein pyaar se maang lena kaafi nahi hai.',
  'The eight units below start with the first attack, move through the controls that stop it, and end at the checklist that decides a release, like walking from the thief to the lock to the guard’s list.':
    'Neeche ke aath units pehle attack se shuru hote hain, use rokne wale controls se guzarte hain, aur us checklist par khatam hote hain jo release ka faisla karti hai, jaise chor se taale se chowkidaar ki list tak chalna.',
  'Understand direct and indirect prompt injection as attacks that use text you cannot trust, like a stranger’s note.':
    'Direct aur indirect prompt injection ko aise attacks ki tarah samjhiye jo aise text ka use karte hain jis par bharosa nahi kiya ja sakta, jaise ajnabi ki parchi.',
  'Instructions hidden in what the user typed, or in retrieved content, can fight with your application’s own instructions, like two people shouting orders at a clerk.':
    'User ke type kiye text mein, ya retrieved content mein chhupi instructions aapki application ki apni instructions se takra sakti hain, jaise do log clerk par hukm chilla rahe hon.',
  'Put bad instructions in a document, and test the RAG assistant (the open-book helper) with it.':
    'Ek document mein buri instructions daaliye, aur RAG assistant (open-book madadgaar) ko usi se test kijiye.',
  'Keep your trusted control instructions apart from untrusted evidence, like keeping the rule book away from the pile of letters.':
    'Apni trusted control instructions ko untrusted evidence se alag rakhiye, jaise rule book ko chitthiyon ke dher se door rakhna.',
  'Try to make the model give up a secret, or use a tool, through retrieved text.':
    'Retrieved text ke zariye model se koi secret ugalwane ya koi tool chalwane ki koshish kijiye.',
  'Prompt Injection Test Report.':
    'Prompt Injection Test Report.',
  'What stopped the attack: the model’s own behaviour, or a rule in the application?':
    'Attack ko kisne roka: model ke apne behaviour ne, ya application ke kisi niyam ne?',
  'Never call the prompt text alone a security boundary. A request written on a note is not a locked door.':
    'Sirf prompt text ko kabhi security boundary mat kahiye. Parchi par likhi request, band darwaaza nahi hoti.',
  'Sensitive information disclosure':
    'Sensitive information disclosure',
  'Protect secrets, PII (personal details) and confidential data in prompts, in retrieval and in traces (the trip records of requests).':
    'Secrets, PII (personal details) aur confidential data ko prompts mein, retrieval mein aur traces (requests ke safar ke records) mein protect kijiye.',
  'A model can only protect information if the application controls what the model receives and what it can send back, like a shopkeeper who decides what goes on the counter.':
    'Model information ko tabhi protect kar sakta hai jab application control kare ki model ko kya milta hai aur woh kya wapas bhej sakta hai, jaise dukaandaar jo tay karta hai ki counter par kya rakha jaayega.',
  'Make a test collection of documents with made-up sensitive fields, so no real person’s diary is used.':
    'Made-up sensitive fields wale documents ka ek test collection banaiye, taaki kisi asli insaan ki diary use na ho.',
  'Filter or redact (black out) before the model sees anything, and log each access decision.':
    'Model kuch bhi dekhe, usse pehle filter ya redact (kaala) kijiye, aur har access decision ko log kijiye.',
  'Ask for another user’s data, in plain words and through tool calls (asking a tool to act).':
    'Kisi doosre user ka data maangiye, saadi bhasha mein bhi aur tool calls (tool se kaam karwana) ke zariye bhi.',
  'Data Leakage Test Matrix.':
    'Data Leakage Test Matrix.',
  'Where is authorization (who is allowed) checked?':
    'Authorization (kise ijaazat hai) kahan check hoti hai?',
  'Match privacy requirements to the paths the data really takes, like tracing the pipes in a house. Policy documents alone are not enough.':
    'Privacy requirements ko un raaston se milaiye jin par data asal mein chalta hai, jaise ghar ke pipes ka raasta dekhna. Sirf policy documents kaafi nahi hain.',
  'Improper output handling':
    'Improper output handling',
  'Check the model’s output before you pass it on to other systems, like looking at a letter before you post it.':
    'Model ke output ko doosre systems tak bhejne se pehle check kijiye, jaise chitthi dak mein daalne se pehle padhna.',
  'Generated text turns dangerous when another system treats it as a trusted command, as SQL (database orders), as HTML (web page code) or as business data.':
    'Generated text tab khatarnak ho jaata hai jab koi doosra system use trusted command, SQL (database ke hukm), HTML (web page ka code) ya business data maan leta hai.',
  'Create a structured output (a filled form with fixed boxes), and check it against a list of allowed values.':
    'Ek structured output (fixed khaanon wala bhara hua form) banaiye, aur use allowed values ki list se check kijiye.',
  'Use allowlists (a list of what is allowed) and typed interfaces (boxes that accept only one kind of thing) before anything is run.':
    'Kuch bhi chalne se pehle allowlists (jo allowed hai uski list) aur typed interfaces (aise khaane jo sirf ek kism ki cheez lete hain) ka use kijiye.',
  'Slip bad strings (trick text) into the generated fields.':
    'Generated fields mein buri strings (chaal wala text) daaliye.',
  'Output Validation Checklist plus tests.':
    'Output Validation Checklist aur tests.',
  'Which downstream part (the next step in the chain) could read the output as an instruction?':
    'Kaun sa downstream part (zanjeer ka agla step) output ko instruction ki tarah padh sakta hai?',
  'Treat model output as untrusted input, like a letter from a stranger.':
    'Model output ko untrusted input maniye, jaise ajnabi ki chitthi.',
  'Limit the tools and actions that an autonomous system (one that acts on its own) can use.':
    'Un tools aur actions ko limit kijiye jo ek autonomous system (jo apne aap kaam karta hai) use kar sakta hai.',
  'The more permissions a system has, the bigger the damage when something goes wrong, like a bunch of master keys.':
    'System ke paas jitni zyada permissions hongi, kuch galat hone par nuksaan utna bada hoga, jaise master chaabiyon ka gucchha.',
  'Sort each tool by how much privilege it needs, and whether its actions can be undone.':
    'Har tool ko chhaantiye ki use kitna privilege chahiye aur uske actions undo ho sakte hain ya nahi.',
  'Take away the tools it does not need, and compare task success before and after.':
    'Jo tools zaroori nahi hain unhe hataiye, aur pehle aur baad task success compare kijiye.',
  'Try a task that asks for an action that cannot be undone, like sending a letter you cannot take back.':
    'Aisa task try kijiye jo aisi action maangta hai jo undo nahi ho sakti, jaise bheji hui chitthi wapas na le paana.',
  'Agency Permission Matrix.':
    'Agency Permission Matrix.',
  'What is the worst damage if the model is wrong?':
    'Agar model galat ho toh sabse bada nuksaan kya hoga?',
  'How much freedom the system gets should depend on the business risk, like a new helper who first gets small errands.':
    'System ko kitni azaadi milti hai, yeh business risk par depend karna chahiye, jaise naya madadgaar jise pehle chhote kaam milte hain.',
  'Retrieval authorization':
    'Retrieval authorization',
  'Enforce ACLs (lists of who may see what) and tenant boundaries (a wall between one customer and another) before evidence reaches the model.':
    'Evidence model tak pahunchne se pehle ACLs (kaun kya dekh sakta hai ki list) aur tenant boundaries (ek customer aur doosre ke beech deewar) lagu kijiye.',
  'Fetching the right content for the wrong tenant (customer) is still a security breach, like handing one person’s letter to a neighbour.':
    'Galat tenant (customer) ke liye sahi content laana bhi ek security breach hai, jaise ek insaan ki chitthi padosi ko de dena.',
  'Create two users and two groups of documents.':
    'Do users aur documents ke do groups banaiye.',
  'Apply the metadata filters (labels on documents that sort them) on the server side, where the user cannot change them.':
    'Metadata filters (documents par lage label jo unhe chhaantte hain) server side par lagaiye, jahan user unhe badal nahi sakta.',
  'Try to fetch across tenants, and to fetch with permissions that are out of date.':
    'Tenants ke beech laane ki koshish kijiye, aur purani permissions ke saath laane ki bhi.',
  'ACL Retrieval Test Report.':
    'ACL Retrieval Test Report.',
  'Can the model ever see evidence it is not allowed to see?':
    'Kya model kabhi aisa evidence dekh sakta hai jise dekhne ki use ijaazat nahi hai?',
  'Do not make “remembering” the authorization rules the model’s job, as your only control. A guard should not rely on one person’s memory.':
    'Authorization rules “yaad rakhna” model ka kaam mat banaiye, jab woh aapka akela control ho. Chowkidaar ek insaan ki yaaddasht par nahi tikna chahiye.',
  'Audit logging':
    'Audit logging',
  'Capture enough evidence to rebuild what happened in any action that matters for security, like a CCTV recording.':
    'Itna evidence rakhiye ki security ke liye zaroori kisi bhi action mein jo hua, use dobara banaya ja sake, jaise CCTV recording.',
  'An audit trail (a diary of actions) should show who did what, when, under which rule, with which tool, and what happened.':
    'Audit trail (actions ki diary) ko dikhana chahiye ki kisne kya kiya, kab, kaun se niyam ke tahat, kaun se tool se, aur kya hua.',
  'Design an audit record (one diary entry) for one tool action.':
    'Ek tool action ke liye ek audit record (diary ki ek entry) design kijiye.',
  'Write the approval event (“yes, go ahead”) and the execution event (“it was done”) separately.':
    'Approval event (“haan, kijiye”) aur execution event (“ho gaya”) ko alag-alag likhiye.',
  'Change the payload (the thing being sent) after it was approved, and check that the mismatch shows up.':
    'Approval ke baad payload (jo cheez bheji ja rahi hai) badaliye, aur check kijiye ki mismatch dikhta hai.',
  'Audit Log Schema plus a sample trail.':
    'Audit Log Schema aur ek sample trail.',
  'Could someone dealing with an incident rebuild what the action was?':
    'Kya incident sambhalne wala koi insaan us action ko dobara samajh sakta hai ki woh kya thi?',
  'Being able to audit (look back at the diary) is part of being ready for production, real use.':
    'Audit kar paana (diary mein peeche dekhna) production, yaani asli use, ke liye ready hone ka hissa hai.',
  'Governance and risk register':
    'Governance aur risk register',
  'Turn security and AI risks into owners, controls and evidence, like giving each problem a name, a lock and a receipt.':
    'Security aur AI risks ko owners, controls aur evidence mein badaliye, jaise har problem ko ek naam, ek taala aur ek raseed dena.',
  'Governance (the rules for who decides what) becomes useful when every risk has a control you can test, and an owner.':
    'Governance (kaun kya tay karega, uske niyam) tab kaam ki ban jaati hai jab har risk ka ek aisa control ho jise test kiya ja sake, aur ek owner ho.',
  'Make fields (boxes) for the risk, the impact, the likelihood, the control, the owner, the evidence and the remaining risk.':
    'Risk, impact, likelihood, control, owner, evidence aur bache hue risk ke liye fields (khaane) banaiye.',
  'Check the register against the architecture of your capstone (how its parts fit together).':
    'Register ko apne capstone ke architecture (uske parts kaise jude hain) ke saath milakar dekhiye.',
  'Mark one control “policy only” (written down, never tested), and ask what evidence is missing.':
    'Ek control ko “policy only” (likha hua, kabhi test nahi hua) mark kijiye, aur poochhiye ki kaun sa evidence missing hai.',
  'AI Risk Register.':
    'AI Risk Register.',
  'Which risks are still left after the controls?':
    'Controls ke baad kaun se risks abhi bhi bache hain?',
  'A risk register is a working tool, not a decoration for the rule-checkers.':
    'Risk register kaam ka tool hai, niyam-jaanchne walon ke liye sajaavat nahi.',
  'Security release gate':
    'Security release gate',
  'Turn red-team findings (what the friendly attackers found) into release criteria (what must be true before launch).':
    'Red-team findings (dost-attackers ne kya paaya) ko release criteria (launch se pehle kya sach hona chahiye) mein badaliye.',
  'Security tests must stop a release when the risk that remains is above the line you agreed on, like a red signal for the train.':
    'Jab bacha hua risk tay kiye hue threshold se upar ho, tab security tests ko release rokna chahiye, jaise train ke liye laal signal.',
  'Decide the must-pass checks for injection, leakage, authorization and unsafe actions.':
    'Injection, leakage, authorization aur unsafe actions ke liye must-pass checks tay kijiye.',
  'Run the test suite (all the tests together) before and after you change the prompt or the model.':
    'Prompt ya model badalne se pehle aur baad test suite (saare tests ek saath) chalaiye.',
  'Make a change that improves quality but weakens security, and see the gate say stop.':
    'Aisa change banaiye jo quality badhaye lekin security kamzor kare, aur dekhiye gate ruk jaane ko kehta hai.',
  'Security Go/No-Go Checklist.':
    'Security Go/No-Go Checklist.',
  'What counts as an automatic blocker (a stop sign that needs no debate)?':
    'Automatic blocker (aisa stop sign jis par behes nahi) kise maana jaayega?',
  'Security belongs in the same release process as quality and cost, not in a separate room.':
    'Security ko wahi release process chahiye jismein quality aur cost hain, alag kamre mein nahi.',
  'Least privilege for agents':
    'Agents ke liye least privilege',
  'Least privilege means giving someone only the keys they need to do their job, and no more. Think of a school peon who gets the classroom key but not the exam paper cupboard. For an agent (a helper that uses tools), that mostly means tools.':
    'Least privilege ka matlab hai kisi ko sirf utni chaabiyan dena jitni uske kaam ke liye zaroori hain, aur zyada nahi. School ke peon ko class ki chaabi milti hai, par paper-almari ki nahi. Agent (tools use karne wala madadgaar) ke liye iska matlab zyadatar tools hota hai.',
  'Apply least privilege to agents. If an agent has a tool it never needs, an attacker can talk it into using that tool.':
    'Agents par least privilege lagaiye. Agar kisi agent ke paas aisa tool hai jiski use kabhi zaroorat nahi, toh attacker use us tool ko chalane ke liye manwa sakta hai.',
  'Controls are only half the story, because each one needs proof. The table pairs each risk with a control, and with the evidence that shows the control works, like a lock with a record of the test.':
    'Controls kahani ka sirf aadha hissa hain, kyunki har control ko saboot chahiye. Table har risk ko ek control ke saath jodti hai, aur us evidence ke saath jo dikhata hai ki control kaam karta hai, jaise taala aur uski jaanch ka record.',
  'Example control (the safety measure)':
    'Example control (suraksha ka upay)',
  'The evidence that it works (the proof)':
    'Woh evidence jo dikhata hai ki control kaam karta hai (saboot)',
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
  'Raw personal data in logs, or kept too long':
    'Logs mein raw personal data, ya zyada der tak rakha hua',
  'Redact before logging, plus a retention limit':
    'Log karne se pehle redact kijiye, saath mein retention limit',
  'A log sample with no raw IDs, and a deletion test. This supports the DPDP Act duties on security safeguards and on limits to keeping data':
    'Aisa log sample jisme koi raw ID nahi, aur ek deletion test. Yeh DPDP Act ki security safeguards aur data kitni der rakha jaaye is par limits wali duties ko support karta hai',
  'Consulting firms often call this work model risk management. They also ask for explainability: a written reason for each decision the system makes. Learn both words. Your risk register and your system card are the evidence behind them, like the file behind a bank’s loan decision.':
    'Consulting firms aksar is kaam ko model risk management kehti hain. Woh explainability bhi maangti hain: system ke har decision ki ek likhi hui wajah. Dono shabd seekh lijiye. Aapka risk register aur system card inke peeche ka evidence hain, jaise bank ke loan faisle ke peeche ki file.',
  'Test every control':
    'Har control ko test kijiye',
  'A safeguard nobody has tested only exists on paper, like a fire exit nobody has opened. Next to each safeguard, write the test that proves it works, and run it.':
    'Jis safeguard ko kisi ne test nahi kiya, woh sirf kaagaz par hai, jaise woh aag-nikaas jise kisi ne kholkar nahi dekha. Har safeguard ke saath woh test likhiye jo saabit kare ki woh kaam karta hai, aur use chalaiye.',
  'Try this with something from your own workplace.':
    'Yeh apne hi workplace ki kisi cheez ke saath try kijiye.',
  'Pick one control your organisation says it has. Write what evidence would prove it works, and whether that evidence exists.':
    'Ek aisa control chuniye jo aapka organisation kehta hai ki uske paas hai. Likhiye ki kaun sa evidence saabit karega ki woh kaam karta hai, aur woh evidence hai ya nahi.',
  'The control … the evidence would be … it exists / does not exist because …':
    'Control … evidence yeh hoga … woh hai / nahi hai kyunki …',
  'The gap between what is claimed and the evidence is your real risk. A risk register is there to track that gap.':
    'Jo kaha gaya hai aur evidence ke beech ka gap hi aapka asli risk hai. Risk register isi gap ko dekhne ke liye hota hai.',
  'To sum up: the model trusts everything it reads, so the system around it has to build the fence. Retrieved content is untrusted input. Give every agent only the tools it needs. And write a test next to every control, so your register holds evidence, not just good intentions.':
    'Toh seedhi baat: model jo bhi padhta hai us par bharosa karta hai, isliye uske aas-paas ke system ko baad banani padti hai. Retrieved content untrusted input hai. Har agent ko sirf utne tools dijiye jitne uski zaroorat hai. Aur har control ke saath ek test likhiye, taaki aapke register mein sirf achhi niyat nahi, evidence bhi ho.',
  'Next, in Chapter 32, you will turn this technical system into a product specification, a recipe card for the product.':
    'Agle Chapter 32 mein aap is technical system ko ek product specification mein badlenge, yaani product ke liye recipe card.',
});
