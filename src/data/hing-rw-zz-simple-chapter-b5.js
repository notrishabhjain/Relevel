/* Hinglish for Harness engineering: the system around the model (chapter:b5), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'The model is only one part of an AI product. The rest is the harness: the gear around the model, like the reins and saddle on a horse. It is the code that builds the request, runs tools, keeps state, enforces rules, checks quality and records what happened. You will draw the harness around your capstone (your project), build one workflow two ways, and write a release checklist.':
    'Model AI product ka sirf ek hissa hai. Baaki sab harness hai: model ke aaspaas ka saaz-samaan, jaise ghode ki lagaam aur zeen. Yeh woh code hai jo request banata hai, tools chalata hai, state yaad rakhta hai, rules lagata hai, quality check karta hai aur likhta hai ki kya hua. Aap apne capstone (apne project) ke aaspaas harness banayenge, ek workflow do tarah se banayenge, aur ek release checklist likhenge.',
  'Name the seven parts of a harness (the gear around the model), and find each one in your capstone.':
    'Harness (model ke aaspaas ka saaz-samaan) ke saat hisson ke naam bataiye, aur apne capstone mein har ek ko dhundhiye.',
  'Spot the patterns coding agents use (helpers that write code), and reuse them in your own product.':
    'Coding agents (code likhne wale helpers) jo patterns use karte hain, unhe pehchaniye, aur apne product mein dobara use kijiye.',
  'Set tool and permission boundaries, like a fence around a garden. Say what proof would let you make the fence wider.':
    'Tool aur permission ki seema tay kijiye, jaise bagiche ke aaspaas baad. Bataiye ki kaunsa saboot hone par aap baad badi karenge.',
  'Choose between a fixed workflow (steps set in advance) and a bounded agent (a helper with a limit), using measured results.':
    'Fixed workflow (pehle se tay steps) aur bounded agent (seema wala helper) mein se chuniye, naape hue results se.',
  'Set release gates (checks before launch), a rollback trigger (the signal to go back), and who answers when something breaks.':
    'Release gates (launch se pehle ke checks), rollback trigger (peeche lautne ka signal), aur kharabi hone par jawab kaun dega, yeh tay kijiye.',
  'Draw the harness around the model, and get ready for a safe release':
    'Model ke aaspaas ka harness banaiye, aur safe release ki taiyari kijiye',
  'The model is only one part of the product. Everything around it decides if you can depend on the product. That means how the request is built, what the model may do, what is remembered, what is checked and what is recorded. In this chapter you learned the seven parts of that system. You learned how to pick a fixed workflow or a limited agent by measuring, and how to set release gates and a rollback trigger. Now you do that for Bharat Privacy Guard.':
    'Model product ka sirf ek hissa hai. Uske aaspaas ki har cheez tay karti hai ki product par bharosa ho sakta hai ya nahi. Yaani request kaise bani, model kya kar sakta hai, kya yaad rakha gaya, kya check hua aur kya likha gaya. Is chapter mein aapne us system ke saat hisse seekhe. Aapne seekha ki naap kar fixed workflow ya limited agent kaise chunna hai, aur release gates aur rollback trigger kaise tay karne hain. Ab yahi Bharat Privacy Guard ke liye kijiye.',
  'Code: build the rule-keeper both ways in your project’s own codebase (the folder of your project’s code). Then write the diagram and the checklist in the notes box below.':
    'Code: rule-keeper ko dono tarah se apne project ke codebase (project ke code ka folder) mein banaiye. Phir diagram aur checklist neeche notes box mein likhiye.',
  'Draw the harness around the tool. Show the inputs, how each request is put together, the tools, the stored state, the policies (such as your sharing rule), the test gates, the traces and the fallbacks (the plan B when something fails).':
    'Tool ke aaspaas ka harness banaiye. Dikhaiye: inputs, har request kaise bani, tools, stored state, policies (jaise aapka sharing rule), test gates, traces aur fallbacks (kuch fail ho to plan B).',
  'On the drawing, mark every point where the model’s output turns into an action. Also mark what checks it on the way.':
    'Drawing par har woh jagah nishaan lagaiye jahan model ka output kisi action mein badalta hai. Yeh bhi likhiye ki raaste mein use kaun check karta hai.',
  'Build the rule-keeper twice and run the same twenty sentences through both. First build it as a fixed set of steps. Then build it as an agent with a step limit. Compare how often each fails, how long each takes and how easy each is to debug (to find the cause of a fault).':
    'Rule-keeper ko do baar banaiye aur dono mein wahi bees sentences chalaiye. Pehle ise fixed steps ke set ki tarah banaiye. Phir ek agent ki tarah, jis par step limit ho. Dekhiye ki har ek kitni baar fail hota hai, kitna time leta hai, aur debug karna (galti ki wajah dhundhna) kitna aasaan hai.',
  'List the permissions each tool has. For each one, write the worst thing that could happen if it were misused.':
    'Har tool ki permissions ki list banaiye. Har ek ke liye likhiye ki galat use hone par sabse bura kya ho sakta hai.',
  'Write a release checklist. It needs a rollback trigger that is a number someone can check, for example “roll back if missed Aadhaar numbers rise above 3 in 100”. Rolling back means going back to the old version. Add the name of the person who answers an incident (a serious fault).':
    'Ek release checklist likhiye. Usmein rollback trigger ho jo ek number ho jise koi bhi check kar sake, jaise “roll back if missed Aadhaar numbers rise above 3 in 100”. Rolling back ka matlab hai purane version par lautna. Us vyakti ka naam bhi likhiye jo incident (gambhir kharabi) par jawab dega.',
  'A harness diagram. It shows where the model’s output becomes an action, and what checks it.':
    'Ek harness diagram. Usmein dikhe ki model ka output kahan action banta hai, aur use kaun check karta hai.',
  'A side-by-side of the two builds on the same twenty sentences, with all three measures.':
    'Dono builds ki side-by-side tulna, wahi bees sentences par, teeno measures ke saath.',
  'A list of permissions, with the worst case for each.':
    'Permissions ki list, har ek ke worst case ke saath.',
  'A release checklist with a rollback trigger that is a number, and a named incident owner.':
    'Ek release checklist, jismein rollback trigger ek number ho, aur incident owner ka naam likha ho.',
  'Agents (helpers that use tools in a loop)':
    'Agents (tools ko loop mein use karne wale helpers)',
  'Idea 4 compares an agent with a fixed workflow.':
    'Idea 4 mein ek agent aur fixed workflow ki tulna hoti hai.',
  'Traces (the diary of one run) are one part of the harness.':
    'Traces (ek run ki diary) harness ka ek hissa hain.',
  'Security and governance (keeping things safe, and the rules for who may do what)':
    'Security aur governance (cheezein safe rakhna, aur kaun kya kar sakta hai ke niyam)',
  'Idea 3 uses it for tool permissions.':
    'Idea 3 ise tool permissions par lagata hai.',
  'A coding agent (a helper that writes code)':
    'Ek coding agent (code likhne wala helper)',
  'Idea 2 shows how one works.':
    'Idea 2 dikhata hai ki ek kaise kaam karta hai.',
  'All of it takes about twelve hours. You need a working version of your capstone’s main flow, even a rough one. You also need a coding agent (a helper that writes code) from B4.':
    'Poora chapter lagbhag baarah ghante leta hai. Aapke paas apne capstone ke main flow ka chalta hua version hona chahiye, chahe adhoora ho. Saath mein B4 ka ek coding agent (code likhne wala helper) bhi chahiye.',
  'In the last chapter you chose the tools for your project. Now look at what holds those tools together around the model. A model on its own takes text in and gives text out. That is all. What makes it a product you can trust is everything around it.':
    'Pichhle chapter mein aapne apne project ke tools chune. Ab dekhiye ki model ke aaspaas un tools ko kaun jodta hai. Akela model sirf text leta hai aur text deta hai. Bas. Use aisa product kya banata hai jis par bharosa ho? Uske aaspaas ki har cheez.',
  'Here is the plan. You name the seven parts of that system. You learn from how coding agents are built. Then you set limits on what a tool may do, compare a fixed workflow with an agent, and plan a safe release.':
    'Yeh rahi yojana. Aap us system ke saat hisson ke naam batayenge. Aap seekhenge ki coding agents kaise bane hain. Phir aap tay karenge ki ek tool kya kar sakta hai, ek fixed workflow ko ek agent se milayenge, aur safe release ki yojana banayenge.',
  'Idea 1: What a harness is':
    'Idea 1: Harness kya hai',
  'Think of the reins and saddle on a horse. The horse is strong, but it cannot steer itself. The model is like that horse. It takes text in and gives text out. Everything else that makes an AI product work lives in the <strong>harness</strong> (the gear around the model).':
    'Ghode ki lagaam aur zeen sochiye. Ghoda taakatwar hai, par khud rasta nahi chun sakta. Model us ghode jaisa hai. Woh text leta hai aur text deta hai. AI product ko chalane wali baaki sab cheezein <strong>harness</strong> (model ke aaspaas ka saaz-samaan) mein rehti hain.',
  'A harness has seven parts. The table below gives each part a name, says what it does, and shows what it looks like in Theme Finder.':
    'Harness ke saat hisse hote hain. Neeche ki table har hisse ka naam batati hai, woh kya karta hai, aur Theme Finder mein woh kaisa dikhta hai.',
  'Builds what the model sees each time you call it':
    'Har baar jab aap model ko bulate hain, use jo dikhta hai woh banata hai',
  'The instructions, 50 tickets, the existing theme list':
    'Instructions, 50 tickets, maujooda theme list',
  'Tools (the buttons the model can ask you to press)':
    'Tools (woh button jo model aapse dabwa sakta hai)',
  'Lets the model read or act':
    'Model ko padhne ya kuch karne deta hai',
  'Fetch tickets; look up an old theme':
    'Tickets lana; purani theme dekhna',
  'Remembers things between steps and between visits':
    'Steps ke beech aur ek visit se doosre tak cheezein yaad rakhta hai',
  'Last week’s themes; which tickets are done':
    'Pichhle hafte ki themes; kaun se tickets ho chuke',
  'Decides which step runs next':
    'Tay karta hai ki agla step kaunsa chalega',
  'Sort, then group, then sum up':
    'Chhaanto, phir group karo, phir saar likho',
  'Sets rules the model cannot break':
    'Aise rules lagata hai jo model tod nahi sakta',
  'No email without approval; no ticket text in logs':
    'Bina ijaazat email nahi; logs mein ticket text nahi',
  'Evals (the answer-key tests)':
    'Evals (answer key wale tests)',
  'Checks quality before and after release':
    'Release se pehle aur baad quality check karta hai',
  'A 50-ticket test set; a sample checked every week':
    '50 tickets ka test set; har hafte ek namoona jaanchna',
  'Writes down what happened':
    'Likhta hai ki kya hua',
  'A trace per run: tokens, cost and latency (the waiting time)':
    'Har run ka ek trace: tokens, cost aur latency (intezaar ka time)',
  'Orchestration is the part that decides which step runs next, like a train guard waving the flag. Evals are the tests you score the model on, like the teacher’s answer key. Observability is the record that lets you look back and see what happened, like a diary.':
    'Orchestration woh hissa hai jo tay karta hai ki agla step kaunsa chalega, jaise train ka guard jhanda dikhata hai. Evals woh tests hain jinse aap model ko number dete hain, jaise teacher ki answer key. Observability woh record hai jisse aap peeche dekh sakte hain ki kya hua, jaise ek diary.',
  'Two products can use the same model and still behave very differently. The harness is the reason. Most quality problems you will fix live in the harness, not in the model.':
    'Do products wahi model use karke bhi bahut alag chal sakte hain. Wajah harness hai. Aap jo quality problems theek karenge, unmein se zyadatar harness mein hoti hain, model mein nahi.',
  'Fill in the seven rows for your capstone. Leave a row empty if you do not have that part yet.':
    'Apne capstone ke liye saat rows bhariye. Agar woh hissa abhi nahi hai, to row khaali chhod dijiye.',
  'A seven-row table. The empty rows are your to-do list. Counterexample: a product where one of the seven parts really is not needed.':
    'Saat rows ki ek table. Khaali rows aapki to-do list hain. Ulta example: ek aisa product jismein saat mein se ek hissa sach mein zaroori nahi.',
  'Idea 2: How coding agents are built':
    'Idea 2: Coding agents kaise bane hote hain',
  'Coding agents such as Claude Code are the most widely used agents today. A coding agent is a helper that writes and fixes code for you. You can learn a lot from them, because their design shows patterns you can reuse in your own product. There are six.':
    'Claude Code jaise coding agents aaj sabse zyada use hone wale agents hain. Coding agent ek helper hai jo aapke liye code likhta aur theek karta hai. Inse bahut seekh sakte hain, kyunki unki banawat aise patterns dikhati hai jo aap apne product mein dobara use kar sakte hain. Inke chhe hain.',
  '<strong>A simple loop.</strong> The model picks a tool. The harness runs it. The result goes back to the model. This repeats until the job is done, like a cook who tastes, adds salt, and tastes again.':
    '<strong>Ek saada loop.</strong> Model ek tool chunta hai. Harness use chalata hai. Result model ke paas wapas jata hai. Yeh tab tak dohrata hai jab tak kaam poora na ho, jaise rasoiya jo chakhta hai, namak dalta hai, phir chakhta hai.',
  '<strong>A small set of general tools.</strong> These are things like read a file, edit a file, search and run a command. A few tools that fit many jobs beat dozens that fit one job, like one good knife beats twenty gadgets.':
    '<strong>Kuch chuninda aam tools.</strong> Jaise file padhna, file badalna, search karna aur command chalana. Kuch aise tools jo bahut kaamon mein chalein, darjano aise tools se behtar hain jo ek hi kaam ke hon, jaise ek achhi chhuri bees gadgets se behtar hai.',
  '<strong>Project memory.</strong> A file in the repository (the online folder that remembers every change), such as <code>CLAUDE.md</code>, holds the rules. It is loaded every time the agent runs, like a note on the fridge.':
    '<strong>Project memory.</strong> Repository (woh online folder jo har badlaav yaad rakhta hai) mein ek file, jaise <code>CLAUDE.md</code>, rules sambhalti hai. Agent jab bhi chalta hai, yeh load hoti hai, jaise fridge par chipka note.',
  '<strong>Permission modes.</strong> Reading is free for all. But editing files or running commands can need a yes from a person first, like a shop where anyone can look but only the owner opens the till.':
    '<strong>Permission modes.</strong> Padhna sabke liye khula hai. Lekin files badalne ya commands chalane ke liye pehle kisi insaan ki haan lag sakti hai, jaise dukaan jahan dekhna sab ka haq hai par galla sirf maalik kholta hai.',
  '<strong>A verifier.</strong> Tests and type checks (a spell-check for code) tell the agent whether its change worked. A person does not have to read every line.':
    '<strong>Ek verifier.</strong> Tests aur type checks (code ka spell-check) agent ko batate hain ki uska badlaav chala ya nahi. Insaan ko har line padhni nahi padti.',
  '<strong>Sub-agents.</strong> A big job is cut into pieces. A helper does one piece on its own desk (its own context), so the main desk stays tidy.':
    '<strong>Sub-agents.</strong> Bade kaam ke tukde kiye jaate hain. Ek helper apne alag desk (apne context) par ek tukda karta hai, taaki main desk saaf rahe.',
  'The verifier matters most. An agent that can check its own work reliably, like a student who checks answers against the key, can take on much bigger jobs.':
    'Verifier sabse zaroori hai. Jo agent apna kaam bharose se khud jaanch sakta hai, jaise answer key se jawab milane wala vidyarthi, woh bahut bade kaam utha sakta hai.',
  'Give your coding agent one small job on your capstone, such as adding input validation (checking what the user types). Watch which tools it calls, in order.':
    'Apne coding agent ko capstone par ek chhota kaam dijiye, jaise input validation jodna (user jo likhe use check karna). Dekhiye ki woh kaun se tools kis kram mein bulata hai.',
  'The list of tool calls. Mark the step where it checked its own work. If it never did, what verifier could you add?':
    'Tool calls ki list. Woh step nishaan lagaiye jahan usne apna kaam khud jaancha. Agar kabhi nahi jaancha, to aap kaun sa verifier jod sakte hain?',
  'Idea 3: Tool and permission boundaries':
    'Idea 3: Tool aur permission boundaries',
  'Personal agents such as OpenClaw can run on your own computer. They can reach your files, your messages and your shell (the place where you type commands). That makes them useful. It also makes them dangerous, like giving a stranger your house keys.':
    'OpenClaw jaise personal agents aapke apne computer par chal sakte hain. Woh aapki files, aapke messages aur aapke shell (jahan commands type hote hain) tak pahunch sakte hain. Isse woh kaam ke bante hain. Isse woh khatarnak bhi bante hain, jaise kisi ajnabi ko ghar ki chabi dena.',
  'Ask the same four questions of any agent that uses tools:':
    'Tools use karne wale har agent se yahi chaar sawaal poochhiye:',
  '<strong>Which tools can it call?</strong> Use an allowlist (a list of names that are allowed in). Anything not on the list is refused.':
    '<strong>Woh kaun se tools bula sakta hai?</strong> Allowlist use kijiye (un naamon ki list jinhe andar aane diya jata hai). Jo list mein nahi, use mana kar diya jata hai.',
  '<strong>With what scope?</strong> Keep it read-only where you can. Limit it to one folder, one channel, one customer’s data.':
    '<strong>Kitni seema mein?</strong> Jahan ho sake, sirf padhne dijiye. Use ek folder, ek channel, ek customer ke data tak seemit rakhiye.',
  '<strong>Which calls need approval?</strong> Anything that sends, deletes, pays or cannot be undone.':
    '<strong>Kaun se calls ko ijaazat chahiye?</strong> Jo kuch bheje, mitaye, paisa de, ya jise wapas na kiya ja sake.',
  '<strong>What can reach it?</strong> Any text it reads, such as tickets, email or web pages, may hide instructions from an attacker, like a note slipped into the homework.':
    '<strong>Us tak kya pahunch sakta hai?</strong> Jo bhi text woh padhta hai, jaise tickets, email ya web pages, usmein hamlawar ke chhupe instructions ho sakte hain, jaise homework mein chhipayi gayi parchi.',
  'Recall the lethal trifecta (three risky things together) from Chapter 13. An agent that has private data, untrusted input and a way to send data out can be tricked into leaking. For every group of tools, remove at least one of the three.':
    'Chapter 13 ka lethal trifecta (teen khatarnak cheezein ek saath) yaad kijiye. Jis agent ke paas private data, untrusted input aur data bahar bhejne ka raasta ho, use behkakar leak karwaya ja sakta hai. Tools ke har group mein teeno mein se kam se kam ek hata dijiye.',
  'So start with a small fence. Make it wider only when you have proof, and decide in advance what that proof is.':
    'Isliye chhoti baad se shuru kijiye. Use badi tabhi kijiye jab saboot ho, aur pehle se tay kijiye ki woh saboot kya hoga.',
  'List every tool in your capstone. Mark each one read or write, and say whether it needs approval.':
    'Apne capstone ke har tool ki list banaiye. Har ek par read ya write likhiye, aur bataiye ki use ijaazat chahiye ya nahi.',
  'A tool list with scopes. Check it for the lethal trifecta. Counterexample: a tool that looks read-only but can still leak data.':
    'Seemaon ke saath tools ki list. Use lethal trifecta ke liye jaanchiye. Ulta example: ek tool jo sirf padhne wala dikhta hai par phir bhi data leak kar sakta hai.',
  'Idea 4: Fixed workflows or bounded agents':
    'Idea 4: Fixed workflows ya bounded agents',
  'Here is a choice you will meet often. Should your code decide every step, or should the model decide?':
    'Yeh ek chunav hai jo aapko baar baar milega. Kya har step aapka code tay kare, ya model tay kare?',
  'A <strong>state machine</strong> is a workflow where your code fixes every step and every move from one step to the next, like a railway track. A <strong>bounded agent</strong> lets the model pick the steps, but only within a tool list and a step budget, like a child allowed to play inside the gate. Here they are side by side, for the weekly report:':
    '<strong>State machine</strong> ek aisa workflow hai jismein aapka code har step aur ek step se doosre par jana tay karta hai, jaise rail ki patri. <strong>Bounded agent</strong> mein model steps khud chunta hai, par sirf ek tool list aur step budget ke andar, jaise bachcha jo gate ke andar khel sakta hai. Haftawari report ke liye dono saath-saath yeh rahe:',
  'Which one is better? Do not guess. Build both and measure them on the same twenty test weeks. Here is what such a comparison can look like:':
    'Kaun sa behtar hai? Andaaza mat lagaiye. Dono banaiye aur wahi bees test hafton par naapiye. Aisi tulna kuch aisi dikh sakti hai:',
  'Runs that gave a correct report':
    'Woh runs jinhone sahi report di',
  '19 of 20':
    '19 of 20',
  '17 of 20':
    '17 of 20',
  '40 s':
    '40 s',
  '75 s':
    '75 s',
  'Time to find why it failed':
    'Fail hone ki wajah dhundhne ka time',
  'Minutes: the failing step is written in the log':
    'Kuch minute: fail hone wala step log mein likha hota hai',
  'Longer: you must read the whole trace':
    'Zyada: poora trace padhna padta hai',
  'How it handles an unusual week':
    'Anokhe hafte ko kaise sambhalta hai',
  'Needs a code change':
    'Code badalna padta hai',
  'Often adjusts by itself':
    'Aksar khud dhal jata hai',
  'For a fixed job like a weekly report, the state machine wins, like a train on a track. Agents earn their place when the steps really do change from case to case.':
    'Haftawari report jaise tay kaam mein state machine jeetti hai, patri par chalti train ki tarah. Agents tab kaam ke hain jab steps sach mein har case mein badalte hain.',
  'Build one small workflow from your capstone both ways. Run both on at least ten cases.':
    'Apne capstone ka ek chhota workflow dono tarah se banaiye. Dono ko kam se kam das cases par chalaiye.',
  'A three-row table like the one above, from your own runs. Counterexample: a case in your capstone where the agent did better.':
    'Upar jaisi teen rows ki table, aapke apne runs se. Ulta example: aapke capstone ka ek case jahan agent ne behtar kiya.',
  'Idea 5: Release gates, rollback and incidents':
    'Idea 5: Release gates, rollback aur incidents',
  'The last idea is about releasing safely. A <strong>release gate</strong> is a check that must pass before a change reaches users, like the ticket check at a station gate. For AI products, the gates include the eval set (your set of test cases for the model) as well as ordinary tests. Here is a typical set of gates:':
    'Aakhri idea safe release ke baare mein hai. <strong>Release gate</strong> ek aisi jaanch hai jo badlaav ke users tak pahunchne se pehle paas honi chahiye, jaise station ke gate par ticket check. AI products mein gates mein eval set (model ke test cases ka set) aur aam tests shamil hote hain. Gates ka ek aam set yeh hai:',
  'Unit tests and type checks pass.':
    'Unit tests aur type checks paas hote hain.',
  'The eval set scores at or above the threshold (the pass mark), with no new failures in safety cases.':
    'Eval set threshold (paas hone ke number) ya usse upar score karta hai, aur safety cases mein koi nayi failure nahi.',
  'Cost and latency (the waiting time) per run are within budget.':
    'Har run ka cost aur latency (intezaar ka time) budget ke andar hai.',
  'The change goes to 10% of accounts first, behind a feature flag (a switch that turns it on for some accounts only).':
    'Badlaav pehle 10% accounts tak jata hai, feature flag ke peeche (ek switch jo use sirf kuch accounts ke liye on karta hai).',
  'The rollback trigger and the incident owner are written down.':
    'Rollback trigger aur incident owner likhe hue hain.',
  'Gates stop most bad changes, but things will still go wrong sometimes. So decide in advance how the system answers each kind of failure. The worse the problem, the more careful the answer.':
    'Gates zyadatar bure badlaav rok dete hain, par kabhi-kabhi phir bhi kuch bigad jata hai. Isliye pehle se tay kijiye ki system har tarah ki failure par kya karega. Samasya jitni badi, jawab utna sambhal ke.',
  'Retry':
    'Retry',
  'A short glitch':
    'Ek chhoti si gadbad',
  'Rate limit (too many requests); network timeout':
    'Rate limit (bahut zyada requests); network timeout',
  'Degrade (work with less)':
    'Degrade (kam mein kaam chalana)',
  'One part is down but the rest works':
    'Ek hissa band hai par baaki chal raha hai',
  'Send the report without the trend chart':
    'Report trend chart ke bina bhej do',
  'Escalate (call someone senior)':
    'Escalate (kisi bade ko bulana)',
  'You cannot trust the output':
    'Output par bharosa nahi kar sakte',
  'JSON (a form in curly brackets) fails validation twice':
    'JSON (curly brackets wala form) validation mein do baar fail hota hai',
  'An action you cannot undo looks wrong':
    'Ek aisa action jise wapas nahi kar sakte, galat lagta hai',
  'The report would go to 500 people instead of 5':
    'Report 5 ki jagah 500 logon ko chali jayegi',
  'When something goes wrong in production (the live product), the incident owner acts fast. They roll back if needed, and they tell the people affected. Rolling back means going back to the previous version, like pressing undo. Afterwards, write a short review: what happened, why, and what check would have caught it.':
    'Jab production (chalte hue live product) mein kuch bigadta hai, to incident owner jaldi kaam karta hai. Zaroorat ho to woh roll back karta hai, aur jin par asar pada unhe batata hai. Rolling back ka matlab hai pichhle version par lautna, jaise undo dabana. Baad mein ek chhota review likhiye: kya hua, kyun hua, aur kaun sa check use pakad leta.',
  'Write the rollback trigger and incident plan for a new version of your capstone’s main prompt (the note you hand the model). Include a trigger you can measure, who decides, how you roll back and how long it takes.':
    'Apne capstone ke main prompt (model ko di jane wali parchi) ke naye version ke liye rollback trigger aur incident plan likhiye. Usmein ek aisa trigger ho jise naapa ja sake, kaun tay karega, roll back kaise hoga aur kitna time lagega.',
  'Roll back if… Decided by… How… Time to roll back…':
    'Roll back if… Decided by… How… Time to roll back…',
  'Here is a strong plan. <strong>Roll back if</strong> the share of themes marked useful drops more than 10 points below last week, or any report goes to the wrong recipient. <strong>Decided by</strong> the PM on call, who does not need anyone’s approval to roll back. <strong>How:</strong> switch the prompt version flag back to the previous version, because prompts are versioned in the repository. <strong>Time:</strong> under five minutes, and it was tested once before launch. Afterwards, the PM writes a one-page review within two days.':
    'Yeh ek mazboot plan hai. <strong>Roll back if</strong> useful mani gayi themes ka hissa pichhle hafte se 10 points se zyada gir jaye, ya koi report galat vyakti ko chali jaye. <strong>Decided by</strong> on-call PM, jise roll back ke liye kisi ki ijaazat nahi chahiye. <strong>How:</strong> prompt version flag ko pichhle version par wapas kar dijiye, kyunki prompts repository mein versioned hain. <strong>Time:</strong> paanch minute se kam, aur launch se pehle ek baar test hua tha. Baad mein PM do din ke andar ek page ka review likhta hai.',
  'The model is one part of your product. The harness around it (the gear that steers it) decides whether people can trust the product.':
    'Model aapke product ka ek hissa hai. Uske aaspaas ka harness (jo use sahi raah par rakhta hai) tay karta hai ki log product par bharosa kar sakte hain ya nahi.',
  'You can now name its seven parts and borrow the patterns coding agents use. You can limit what each tool may do. You can pick a fixed workflow or an agent by measuring. And you know how to release and roll back safely.':
    'Ab aap uske saat hisson ke naam bata sakte hain aur coding agents ke patterns apna sakte hain. Aap har tool ki seema tay kar sakte hain. Aap naap kar fixed workflow ya agent chun sakte hain. Aur aap jaante hain ki safely release aur roll back kaise karna hai.',
  'Next, you put your project in front of real users and learn from what they do.':
    'Aage, aap apna project asli users ke saamne rakhenge aur seekhenge ki woh kya karte hain.',
});
