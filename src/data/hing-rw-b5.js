/* Hinglish: b5 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Harness engineering: the system around the model':
    'Harness engineering: model ke around ka system',
  'The model is one part of an AI product. The rest is the harness: the code that assembles context, runs tools, keeps state, enforces rules, checks quality and records what happened. You will draw the harness around your capstone, build one workflow two ways, and write a release checklist.':
    'Model ek AI product ka ek hissa hai. Baaki sab harness hai: woh code jo context assemble karta hai, tools chalata hai, state rakhta hai, rules enforce karta hai, quality check karta hai aur kya hua yeh record karta hai. Aap apne capstone ke around harness draw karenge, ek workflow do tarike se banayenge, aur ek release checklist likhenge.',
  'Name the seven parts of a harness and find each one in your capstone.':
    'Harness ke saat parts naam lijiye aur apne capstone mein har ek dhoondhiye.',
  'Recognise the patterns coding agents use, and reuse them in your own product.':
    'Coding agents jo patterns use karte hain unhe pehchaniye, aur apne product mein reuse kijiye.',
  'Set tool and permission boundaries, and say what evidence would justify widening them.':
    'Tool aur permission boundaries set kijiye, aur bataiye unhe widen karne ke liye kaunsa evidence justify karega.',
  'Choose between a deterministic workflow and a bounded agent from measured results.':
    'Measured results se ek deterministic workflow aur ek bounded agent mein chuniye.',
  'Define release gates, a rollback trigger and who responds to an incident.':
    'Release gates, ek rollback trigger aur ek incident ka jawab kaun dega, define kijiye.',
  'A harness diagram, a two-way build and a release checklist':
    'Ek harness diagram, ek two-way build aur ek release checklist',
  'Make the system around your model visible, measure one design choice, and prepare to ship it safely.':
    'Apne model ke around ke system ko visible banayiye, ek design choice naapiye, aur safely ship karne ki taiyaari kijiye.',
  'Draw the harness around your capstone: inputs, context assembly, tools, state, policies, eval gates, traces and fallbacks.':
    'Apne capstone ke around harness draw kijiye: inputs, context assembly, tools, state, policies, eval gates, traces aur fallbacks.',
  'Build one workflow twice: once as a deterministic state machine and once as a bounded agent. Compare failure rate, latency and how easy each is to debug.':
    'Ek workflow do baar banayiye: ek baar ek deterministic state machine ki tarah aur ek baar ek bounded agent ki tarah. Failure rate, latency aur har ek debug karna kitna aasaan hai compare kijiye.',
  'Threat-model the tool permissions, and write a release checklist with a rollback trigger and a named incident owner.':
    'Tool permissions ka threat-model banayiye, aur ek rollback trigger aur ek named incident owner ke saath ek release checklist likhiye.',
  'The diagram shows where model output crosses into an action, and what checks it on the way.':
    'Diagram dikhata hai model output kahan ek action mein cross karta hai, aur raaste mein kya usey check karta hai.',
  'The comparison uses the same test cases for both builds, and reports all three measures.':
    'Comparison dono builds ke liye wahi test cases use karta hai, aur teeno measures report karta hai.',
  'The rollback trigger is a number someone can check, and the incident owner is a named person.':
    'Rollback trigger ek number hai jise koi check kar sake, aur incident owner ek named insaan hai.',
  'Mastery gate: score each artifact 0–3. Move on only when every artifact scores at least 2 and no safety item scores 0.':
    'Mastery gate: har artifact ko 0–3 score kijiye. Aage tabhi badhiye jab har artifact kam se kam 2 score kare aur koi safety item 0 score na kare.',
  'Agents':
    'Agents',
  'Idea 4 compares an agent with a fixed workflow.':
    'Idea 4 ek agent ko ek fixed workflow se compare karti hai.',
  'Traces are one part of the harness.':
    'Traces harness ka ek hissa hain.',
  'Security and governance':
    'Security aur governance',
  'Idea 3 applies it to tool permissions.':
    'Idea 3 isey tool permissions par apply karti hai.',
  'A coding agent':
    'Ek coding agent',
  'Idea 2 looks at how one works.':
    'Idea 2 dekhta hai ek kaise kaam karta hai.',
  'About twelve hours. You need a working version of your capstone’s main flow, even a rough one, and a coding agent from B4.':
    'Lagbhag baarah ghante. Aapko apne capstone ke main flow ka ek working version chahiye, chahe rough ho, aur B4 se ek coding agent.',
  'Idea 1: What a harness is':
    'Idea 1: Harness kya hai',
  'A model only takes text in and gives text out. Everything else that makes an AI product work lives in the <strong>harness</strong> around it. It has seven parts:':
    'Ek model sirf text andar leta hai aur text bahar deta hai. Baaki sab jo ek AI product ko kaam karne deta hai uske around <strong>harness</strong> mein rehta hai. Iske saat parts hain:',
  'Builds what the model sees on each call':
    'Har call par model kya dekhta hai yeh banata hai',
  'Instructions, 50 tickets, the existing theme list':
    'Instructions, 50 tickets, existing theme list',
  'Tools':
    'Tools',
  'Lets the model read or act':
    'Model ko padhne ya action lene deta hai',
  'Fetch tickets; look up a past theme':
    'Tickets fetch karna; ek purani theme dekhna',
  'State':
    'State',
  'Remembers across steps and sessions':
    'Steps aur sessions ke across yaad rakhta hai',
  'Last week’s themes; which tickets are done':
    'Pichhle hafte ki themes; kaunse tickets ho gaye',
  'Orchestration':
    'Orchestration',
  'Decides what runs next':
    'Decide karta hai aage kya chalega',
  'Classify, then group, then summarise':
    'Classify, phir group, phir summarise',
  'Policy':
    'Policy',
  'Rules the model cannot override':
    'Rules jo model override nahi kar sakta',
  'No email without approval; no ticket text in logs':
    'Approval bina koi email nahi; logs mein koi ticket text nahi',
  'Evals':
    'Evals',
  'Checks quality before and after release':
    'Release se pehle aur baad quality check karte hain',
  '50-ticket test set; weekly sample review':
    '50-ticket test set; weekly sample review',
  'Records what happened':
    'Kya hua yeh record karta hai',
  'A trace per run with tokens, cost and latency':
    'Har run ka ek trace, tokens, cost aur latency ke saath',
  'Two products using the same model can behave very differently because of their harnesses. Most quality problems you will debug live in the harness, not the model.':
    'Ek hi model use karne wale do products apne harnesses ki wajah se bahut alag behave kar sakte hain. Zyadatar quality problems jo aap debug karenge harness mein rehti hain, model mein nahi.',
  'Fill in the seven rows for your capstone. Leave a row empty if you do not have that part yet.':
    'Apne capstone ke liye saat rows bhariye. Agar abhi woh part nahi hai to row khaali chhod dijiye.',
  'A seven-row table. The empty rows are your to-do list. Counterexample: a product where one of the seven parts really is not needed.':
    'Ek saat-row table. Khaali rows aapki to-do list hain. Counterexample: ek product jahan saaton mein se ek part asal mein zaroori nahi.',
  'Idea 2: How coding agents are built':
    'Idea 2: Coding agents kaise bante hain',
  'Coding agents such as Claude Code are the most widely used agents today. Their design shows patterns you can reuse:':
    'Claude Code jaise coding agents aaj sabse zyada use hone wale agents hain. Unka design aise patterns dikhata hai jo aap reuse kar sakte hain:',
  '<strong>A simple loop.</strong> The model picks a tool, the harness runs it, the result goes back to the model. This repeats until the task is done.':
    '<strong>Ek simple loop.</strong> Model ek tool chunta hai, harness usey chalata hai, result wapas model ko jaata hai. Yeh tab tak repeat hota hai jab tak task khatam na ho.',
  '<strong>A small set of general tools.</strong> Read a file, edit a file, search, run a command. A few flexible tools beat dozens of narrow ones.':
    '<strong>General tools ka ek chhota set.</strong> Ek file padho, ek file edit karo, search karo, ek command chalao. Kuchh flexible tools dus narrow tools se behtar hote hain.',
  '<strong>Project memory.</strong> A file in the repository, such as <code>CLAUDE.md</code>, holds rules and conventions that are loaded on every run.':
    '<strong>Project memory.</strong> Repository mein ek file, jaise <code>CLAUDE.md</code>, rules aur conventions rakhti hai jo har run par load hoti hai.',
  '<strong>Permission modes.</strong> Reading is allowed freely. Editing files or running commands can require approval.':
    '<strong>Permission modes.</strong> Padhna freely allowed hai. Files edit karna ya commands chalana approval maang sakta hai.',
  '<strong>A verifier.</strong> Tests and type checks tell the agent whether its change worked, without a person reading every line.':
    '<strong>Ek verifier.</strong> Tests aur type checks agent ko batate hain uska change kaam kiya ya nahi, bina kisi insaan ke har line padhe.',
  '<strong>Sub-agents.</strong> A large task is split, and a helper works in its own context, so the main context stays small.':
    '<strong>Sub-agents.</strong> Ek bada task todha jaata hai, aur ek helper apne alag context mein kaam karta hai, taaki main context chhota rahe.',
  'The verifier matters most. An agent with a reliable way to check its own work can take on much larger tasks.':
    'Verifier sabse zyada matter karta hai. Ek agent jiske paas apna kaam check karne ka reliable tareeka hai, bahut bade tasks le sakta hai.',
  'Give your coding agent one small task on your capstone, such as adding input validation. Watch which tools it calls, in order.':
    'Apne coding agent ko apne capstone par ek chhota task dijiye, jaise input validation jodna. Dekhiye yeh kaunse tools order mein call karta hai.',
  'The list of tool calls. Mark the step where it checked its own work. If it never did, what verifier could you add?':
    'Tool calls ki list. Woh step mark kijiye jahan usne apna kaam check kiya. Agar kabhi nahi kiya, kaunsa verifier aap jod sakte the?',
  'Idea 3: Tool and permission boundaries':
    'Idea 3: Tool aur permission boundaries',
  'Personal agents such as OpenClaw can run on your own computer with access to your files, messages and shell. That makes them useful and dangerous. The same questions apply to any agent that uses tools:':
    'OpenClaw jaise personal agents aapke apne computer par aapki files, messages aur shell tak access ke saath chal sakte hain. Isse woh useful aur dangerous dono ban jaate hain. Tools use karne wale kisi bhi agent par yeh sawaal lagte hain:',
  '<strong>Which tools can it call?</strong> Use an allowlist. Anything not on the list is refused.':
    '<strong>Yeh kaunse tools call kar sakta hai?</strong> Ek allowlist use kijiye. List mein na hone wali koi bhi cheez reject hoti hai.',
  '<strong>With what scope?</strong> Read-only where possible. One folder, one channel, one customer’s data.':
    '<strong>Kis scope ke saath?</strong> Jahan mumkin ho read-only. Ek folder, ek channel, ek customer ka data.',
  '<strong>Which calls need approval?</strong> Anything that sends, deletes, pays or cannot be undone.':
    '<strong>Kaunse calls ko approval chahiye?</strong> Kuchh bhi jo bhejta hai, delete karta hai, pay karta hai ya undo nahi ho sakta.',
  '<strong>What can reach it?</strong> Any text it reads, such as tickets, email or web pages, may contain instructions from an attacker.':
    '<strong>Isko kya reach kar sakta hai?</strong> Koi bhi text jo yeh padhta hai, jaise tickets, email ya web pages, ek attacker ki instructions rakh sakta hai.',
  'Recall the lethal trifecta from Chapter 13. An agent with private data, untrusted input and a way to send data out can be tricked into leaking. Remove at least one of the three for every tool combination.':
    'Chapter 13 ka lethal trifecta yaad kijiye. Private data, untrusted input aur data bahar bhejne ka tareeka rakhne wala ek agent leak karne ke liye trick kiya ja sakta hai. Har tool combination ke liye teeno mein se kam se kam ek hataiye.',
  'Start narrow, and widen permissions only on evidence you defined in advance.':
    'Narrow shuru kijiye, aur permissions ko sirf us evidence par widen kijiye jo aapne pehle se define kiya.',
  'List every tool in your capstone. Mark each as read or write, and say whether it needs approval.':
    'Apne capstone ke har tool ki list banayiye. Har ek ko read ya write mark kijiye, aur bataiye isey approval chahiye ya nahi.',
  'A tool list with scopes. Check it for the lethal trifecta. Counterexample: a tool that looks read-only but can still leak data.':
    'Scopes ke saath ek tool list. Isey lethal trifecta ke liye check kijiye. Counterexample: ek tool jo read-only dikhta hai lekin phir bhi data leak kar sakta hai.',
  'Idea 4: Deterministic workflows or bounded agents':
    'Idea 4: Deterministic workflows ya bounded agents',
  'A <strong>state machine</strong> is a workflow where your code fixes every step and every transition. A <strong>bounded agent</strong> lets the model choose steps, within a tool list and a step budget.':
    'Ek <strong>state machine</strong> ek workflow hai jahan aapka code har step aur har transition fix karta hai. Ek <strong>bounded agent</strong> model ko steps chunne deta hai, ek tool list aur ek step budget ke andar.',
  'Build both and measure them on the same twenty test weeks:':
    'Dono banayiye aur wahi bees test weeks par naapiye:',
  'State machine':
    'State machine',
  'Bounded agent':
    'Bounded agent',
  'Runs that produced a correct report':
    'Runs jinhone ek sahi report banaya',
  '19 of 20':
    '20 mein se 19',
  '17 of 20':
    '20 mein se 17',
  '40 s':
    '40 s',
  '75 s':
    '75 s',
  'Time to find the cause of a failure':
    'Ek failure ka cause dhoondhne mein time',
  'Minutes: the failing step is logged':
    'Minutes: failing step logged hai',
  'Longer: read the whole trace':
    'Zyada: poora trace padhna',
  'Handles an unusual week':
    'Ek unusual week handle karna',
  'Needs code changes':
    'Code changes chahiye',
  'Often adapts on its own':
    'Aksar khud adapt hota hai',
  'For a fixed process like a weekly report, the state machine wins. Agents earn their place when the steps really do vary from case to case.':
    'Weekly report jaise ek fixed process ke liye, state machine jeetta hai. Agents apni jagah tab kamate hain jab steps case se case really alag hoti hain.',
  'Build one small workflow from your capstone both ways. Run both on at least ten cases.':
    'Apne capstone se ek chhota workflow dono tarike se banayiye. Dono ko kam se kam das cases par chalayiye.',
  'A three-row table like the one above, from your own runs. Counterexample: a case in your capstone where the agent did better.':
    'Upar jaisi ek teen-row table, apne khud ke runs se. Counterexample: aapke capstone mein ek case jahan agent ne behtar kiya.',
  'Idea 5: Release gates, rollback and incidents':
    'Idea 5: Release gates, rollback aur incidents',
  'A <strong>release gate</strong> is a check that must pass before a change reaches users. For AI products, gates include the eval set as well as ordinary tests.':
    'Ek <strong>release gate</strong> ek check hai jo users tak pahunchne se pehle pass hona chahiye. AI products ke liye, gates mein ordinary tests ke saath eval set bhi shaamil hai.',
  'Unit tests and type checks pass.':
    'Unit tests aur type checks pass hote hain.',
  'The eval set scores at or above the threshold, with no new failures in safety cases.':
    'Eval set threshold par ya uske upar score karta hai, safety cases mein koi naya failure nahi.',
  'Cost and latency per run are within budget.':
    'Har run ki cost aur latency budget ke andar hai.',
  'The change goes to 10% of accounts first, behind a feature flag.':
    'Change pehle 10% accounts ko jaata hai, ek feature flag ke peeche.',
  'The rollback trigger and the incident owner are written down.':
    'Rollback trigger aur incident owner likhe hue hain.',
  'Decide how the system responds to each kind of failure:':
    'Decide kijiye system har tarah ke failure ka jawab kaise deta hai:',
  'Response':
    'Response',
  'When':
    'Kab',
  'Retry':
    'Retry',
  'A temporary error':
    'Ek temporary error',
  'Rate limit; network timeout':
    'Rate limit; network timeout',
  'Degrade':
    'Degrade',
  'One part is down but the rest works':
    'Ek part down hai lekin baaki kaam karta hai',
  'Send the report without the trend chart':
    'Trend chart ke bina report bhejiye',
  'Escalate':
    'Escalate',
  'The output cannot be trusted':
    'Output par trust nahi kiya ja sakta',
  'JSON fails validation twice':
    'JSON do baar validation mein fail hota hai',
  'Stop':
    'Stop',
  'An irreversible action looks wrong':
    'Ek irreversible action galat lagta hai',
  'The report would go to 500 people instead of 5':
    'Report 5 ki jagah 500 logon ko jaani thi',
  'When something goes wrong in production, the incident owner decides quickly, rolls back if needed and tells affected users. Afterwards, write a short review: what happened, why, and what check would have caught it.':
    'Jab production mein kuchh galat hota hai, incident owner jaldi decide karta hai, zaroorat padne par rollback karta hai aur affected users ko batata hai. Baad mein, ek chhota review likhiye: kya hua, kyun, aur kaunsa check isey pakad leta.',
  'Write the rollback trigger and incident plan for a new version of your capstone’s main prompt. Include a measurable trigger, who decides, how you roll back and how long it takes.':
    'Apne capstone ke main prompt ke ek naye version ke liye rollback trigger aur incident plan likhiye. Ek measurable trigger, kaun decide karta hai, kaise rollback karte hain aur kitna time lagta hai, shaamil kijiye.',
  'Roll back if… Decided by… How… Time to roll back…':
    'Rollback kijiye agar… Decide karta hai… Kaise… Rollback karne mein time…',
  'A strong plan: <strong>Roll back if</strong> the share of themes marked useful drops more than 10 points below last week, or any report goes to the wrong recipient. <strong>Decided by</strong> the PM on call, who does not need anyone’s approval to roll back. <strong>How:</strong> switch the prompt version flag back to the previous version; prompts are versioned in the repository. <strong>Time:</strong> under five minutes, and it was tested once before launch. Afterwards, the PM writes a one-page review within two days.':
    'Ek strong plan: <strong>Rollback kijiye agar</strong> useful mark ki gayi themes ka share pichhle hafte se 10 points se zyada gir jaaye, ya koi report galat recipient ko jaaye. <strong>Decide karta hai</strong> on-call PM, jisey rollback karne ke liye kisi ki approval nahi chahiye. <strong>Kaise:</strong> prompt version flag ko pichhle version par switch kijiye; prompts repository mein versioned hain. <strong>Time:</strong> paanch minute se kam, aur launch se pehle ek baar test kiya gaya. Baad mein, PM do din ke andar ek one-page review likhta hai.'

});
