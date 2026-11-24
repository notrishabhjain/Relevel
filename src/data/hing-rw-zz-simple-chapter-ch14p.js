/* Hinglish for MCP and interoperability: standard connections to tools (chapter:ch14p), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Use a real implementation or a local mock (a pretend copy on your own computer) to find one tool or resource and call it. Then read the real messages that go back and forth.':
    'Ek asli implementation ya local mock (aapke apne computer par ek nakli copy) use kijiye. Usse ek tool ya resource dhoondhiye aur call kijiye. Phir jo asli messages aage-peeche jaate hain, unhe padhiye.',
  'Offer two tools and one resource (a file or record the model can read). Test how they are found and called. See how errors show up. See how consent (asking the person first) and authorisation (checking who is allowed) work.':
    'Do tools aur ek resource (ek file ya record jo model padh sakta hai) offer kijiye. Test kijiye ki woh kaise dhoondhe aur call hote hain. Dekhiye ki errors kaise dikhte hain. Dekhiye ki consent (pehle insaan se poochhna) aur authorisation (check karna ki kaun allowed hai) kaise kaam karte hain.',
  'Try to get in where you are not allowed. Send arguments (the details you hand a tool) that are badly formed. Use resource content that has been poisoned (a bad note hidden inside). Give permissions wider than the task needs.':
    'Jahan allowed nahi hain wahan ghusne ki koshish kijiye. Galat bane hue arguments (tool ko diye jaane wale details) bhejiye. Poisoned resource content (andar chhupa hua bura note) use kijiye. Task se zyada wide permissions dijiye.',
  'A trust-boundary diagram (a map of the line where you stop trusting what comes in) and an authorisation matrix (a table of who may do what).':
    'Ek trust-boundary diagram (us line ka naksha jahan se aage aap aane wali cheez par bharosa nahi karte) aur ek authorisation matrix (ek table ki kaun kya kar sakta hai).',
  'Explain what interoperability (different tools plugging into each other) makes standard, and what it leaves exactly as dangerous as before.':
    'Samjhaiye ki interoperability (alag-alag tools ka ek doosre mein lagna) kya standard banati hai, aur kya ko utna hi khatarnaak chhod deti hai jitna pehle tha.',
  'MCP':
    'MCP',
  'A plug-socket rule for AI. It says how a host, a client and a server offer tools, resources and prompts, and how they call them. It is a protocol (an agreed way to talk), not a framework for building agents.':
    'AI ke liye plug-socket ka rule. Yeh batata hai ki host, client aur server tools, resources aur prompts kaise offer karte hain aur kaise call karte hain. Yeh ek protocol hai (baat karne ka tay kiya hua tareeka), agents banane ka framework nahi.',
  'Trust boundary':
    'Trust boundary',
  'A line on the map. Past it, what comes in is no longer yours, so you must check it, like a guard at a gate.':
    'Naksha par ek line. Uske paar jo cheez aati hai woh ab aapki nahi, isliye use check karna padta hai, jaise gate par khada guard.',
  'Least privilege':
    'Least privilege',
  'Give a tool only the permissions the task needs, and not one more. Then a tool that is never needed can never be misused, like a spare key that was never made.':
    'Tool ko sirf utni permissions dijiye jitni task ko chahiye, ek bhi zyada nahi. Phir jis tool ki zaroorat hi nahi, uska galat use ho hi nahi sakta, jaise woh chaabi jo kabhi banayi hi nahi gayi.',
  'Capability negotiation':
    'Capability negotiation',
  'Before any work starts, the two sides say what each can do, like two people agreeing who brings the tea and who brings the snacks.':
    'Kaam shuru hone se pehle dono sides bata dete hain ki woh kya kar sakte hain, jaise do log tay karein ki chai kaun layega aur nashta kaun.',
  'MCP is a standard way to connect AI apps to tools and data. Think of a plug socket: any plug fits. You will see how it works. You will see what a standard does not make safe. You will sort tools by what they may change.':
    'MCP AI apps ko tools aur data se jodne ka ek standard tareeka hai. Plug socket sochiye: koi bhi plug lag jaata hai. Aap dekhenge ki yeh kaise kaam karta hai. Aap dekhenge ki standard kis cheez ko safe nahi banata. Aap tools ko is hisaab se sort karenge ki woh kya badal sakte hain.',
  'Draw the flow of host, client, server and resource, and mark where consent (asking the person first) and authorisation (checking who is allowed) happen.':
    'Host, client, server aur resource ka flow draw kar paana, aur mark kar paana ki consent (pehle insaan se poochhna) aur authorisation (check karna ki kaun allowed hai) kahan hote hain.',
  'Explain why a standard interface (the plug socket) to an unsafe tool is still unsafe.':
    'Samjha paana ki unsafe tool ka standard interface (plug socket) bhi unsafe kyun rehta hai.',
  'Classify tools (put each in a group) by what they are allowed to change.':
    'Tools ko classify kar paana (har ek ko ek group mein rakhna) is hisaab se ki woh kya badal sakte hain.',
  'Write the tool access policy':
    'Tool access policy likhiye',
  'The gateway and the browser extension may read forms, change text, call outside models and write logs. A standard plug makes tools easy to connect. It does not make an unsafe tool safe. You learned to mark where consent and authorisation happen, and to group tools by what they may change. Now you write the access policy (the rulebook of who may use what) for the gateway and the extension.':
    'Gateway aur browser extension forms padh sakte hain, text badal sakte hain, bahar ke models call kar sakte hain aur logs likh sakte hain. Standard plug se tools jodna aasaan hota hai. Isse unsafe tool safe nahi hota. Aapne seekha ki consent aur authorisation kahan hote hain yeh mark karna, aur tools ko is hisaab se group karna ki woh kya badal sakte hain. Ab aap gateway aur extension ke liye access policy likhte hain (kaun kya use kar sakta hai, uski rulebook).',
  'You only write. The policy is what you hand in. Sorting the tools is the thinking part. You need no new code.':
    'Aapko sirf likhna hai. Policy hi woh cheez hai jo aap jama karte hain. Tools ko sort karna sochne ka kaam hai. Koi naya code nahi chahiye.',
  'List every tool or action the gateway or the browser extension would need: read a form field, read a request body, write to a log, call an outside model, replace text, block a request, send an alert.':
    'Har woh tool ya action list kijiye jo gateway ya browser extension ko chahiye hogi: form field padhna, request body padhna, log mein likhna, bahar ke model ko call karna, text replace karna, request block karna, alert bhejna.',
  'Put each one in a class (a group): read only; a change that can be undone; a change that cannot be undone; special permission needed; or forbidden.':
    'Har ek ko ek class (group) mein rakhiye: read only; aisa change jo undo ho sakta hai; aisa change jo undo nahi ho sakta; special permission chahiye; ya forbidden.',
  'For each class, write what authorisation (permission check) it needs. Write whether a person must say yes first.':
    'Har class ke liye likhiye ki use kaun si authorisation (permission check) chahiye. Likhiye ki kya kisi insaan ko pehle haan kehna hoga.',
  'Draw a table. Put the roles down the side: the developer, the compliance reviewer, the end user and the tool itself. Put the classes across the top. Mark who may do what.':
    'Ek table banaiye. Side mein roles rakhiye: developer, compliance reviewer, end user aur khud tool. Upar classes rakhiye. Mark kijiye ki kaun kya kar sakta hai.',
  'Draw a diagram and mark where trust stops. Say which part makes that rule happen.':
    'Ek diagram banaiye aur mark kijiye ki trust kahan khatam hota hai. Likhiye ki kaun sa hissa us rule ko lagu karta hai.',
  'Write down what is recorded when someone does something that cannot be undone, like a receipt kept for a sale.':
    'Likhiye ki jab koi aisa kaam hota hai jo undo nahi ho sakta, tab kya record kiya jaata hai, jaise bikri ki rasid rakhi jaati hai.',
  'Every tool put into one of the five classes.':
    'Har tool paanch classes mein se ek mein rakha gaya.',
  'A table of roles against classes.':
    'Roles aur classes ki ek table.',
  'A diagram that shows the trust boundary and the part that holds the line.':
    'Ek diagram jo trust boundary dikhata hai aur woh hissa jo us line ko sambhalta hai.',
  'A note on the record kept for an action that cannot be undone.':
    'Us record par ek note jo aisi action ke liye rakha jaata hai jo undo nahi ho sakti.',
  'A tool has a typed contract (a written promise of what goes in and what comes out)':
    'Tool ka ek typed contract hota hai (likha hua vaada ki kya andar jaata hai aur kya bahar aata hai)',
  'From Chapter 25. MCP makes the way that contract is published the same everywhere.':
    'Chapter 25 se. MCP ek jaisa bana deta hai ki woh contract kaise publish hota hai.',
  'Permissions are checked on the server (the computer that owns the tool)':
    'Permissions server par check hoti hain (woh computer jo tool ka malik hai)',
  'Also from Chapter 25. It is still true when the call travels through a protocol.':
    'Yeh bhi Chapter 25 se. Yeh tab bhi sach hai jab call kisi protocol se hokar jaati hai.',
  'You do not need any new setup to follow the ideas. The hands-on units show a small example that really runs.':
    'Ideas samajhne ke liye koi naya setup nahi chahiye. Hands-on units ek chhota example dikhate hain jo sach mein chalta hai.',
  'Do units 14.3 and 14.4. Then read the printed messages below. This time, only read the other units.':
    'Units 14.3 aur 14.4 kijiye. Phir neeche ke printed messages padhiye. Is baar baaki units sirf padh lijiye.',
  'In the last two chapters you gave a model tools. Then you let an agent (a helper that picks tools by itself) choose among them. You joined every tool by hand. Now you will see a standard way to join them. You will also see what the standard protects you from, and what it does not.':
    'Pichhle do chapters mein aapne model ko tools diye. Phir ek agent (ek helper jo khud tool chunta hai) ko unmein se chunne diya. Har tool aapne haath se joda tha. Ab aap unhe jodne ka ek standard tareeka dekhenge. Aap yeh bhi dekhenge ki standard aapko kis cheez se bachata hai aur kis se nahi.',
  'The standard is called <strong>MCP</strong>, short for Model Context Protocol. It is one shared way to connect AI apps to tools and data sources. You will probably never build one yourself. You do need to know what it covers and what it leaves out.':
    'Is standard ka naam <strong>MCP</strong> hai, yaani Model Context Protocol. Yeh AI apps ko tools aur data sources se jodne ka ek saajha tareeka hai. Aap shayad kabhi khud ek nahi banayenge. Lekin aapko pata hona chahiye ki yeh kya cover karta hai aur kya chhod deta hai.',
  'Think of a plug socket. It is a standard, so any appliance fits the wall. But the standard does not promise the appliance is safe. It does not decide who may switch it on. MCP is the same kind of thing.':
    'Plug socket sochiye. Woh ek standard hai, isliye koi bhi appliance deewar mein lag jaata hai. Lekin standard yeh vaada nahi karta ki appliance safe hai. Woh yeh bhi tay nahi karta ki use kaun on kar sakta hai. MCP bhi isi tarah ki cheez hai.',
  'The specification (the official rulebook) names a host, a client and a server. It gives them standard building blocks: resources, prompts and tools. It also talks about security and user consent in plain words, and it is worth reading. Agent-to-agent protocols are made separately. They are for agents that hand tasks to each other, not for a model that calls a tool.':
    'Specification (official rulebook) ek host, ek client aur ek server ka naam leti hai. Woh unhe standard building blocks deti hai: resources, prompts aur tools. Woh security aur user consent ki baat bhi saaf shabdon mein karti hai, aur padhne layak hai. Agent-to-agent protocols alag se ban rahe hain. Woh un agents ke liye hain jo ek doosre ko tasks dete hain, us model ke liye nahi jo ek tool call karta hai.',
  'There are five units. The first draws the whole picture. The next three build a tiny example, add consent and authorisation, and then test it against attacks. The last one looks at how agents talk to other agents.':
    'Yahan paanch units hain. Pehla poori tasveer banata hai. Agle teen ek chhota example banate hain, consent aur authorisation jodte hain, aur phir use attacks ke khilaaf test karte hain. Aakhri dekhta hai ki agents doosre agents se kaise baat karte hain.',
  'MCP mental model':
    'MCP mental model',
  'Explain the host (the app you use), the client (its messenger), the server (the one holding the tools), tools, resources, prompts and capability negotiation.':
    'Host (jo app aap use karte hain), client (uska messenger), server (jiske paas tools hain), tools, resources, prompts aur capability negotiation samjhaiye.',
  'A protocol is an agreed way for two sides to talk. It does not take away the need to check who is allowed. It does not take away the need for a safe design.':
    'Protocol do sides ke baat karne ka tay kiya hua tareeka hai. Isse yeh zaroorat khatam nahi hoti ki check karein kaun allowed hai. Isse safe design ki zaroorat bhi khatam nahi hoti.',
  'Draw the path from the host to the client to the server, and then to the tool or resource.':
    'Host se client, phir server, phir tool ya resource tak ka raasta draw kijiye.',
  'Look closely at one real or local exchange of messages, like reading a chat between two people.':
    'Messages ke ek asli ya local exchange ko dhyaan se dekhiye, jaise do logon ki chat padhte hain.',
  'Ask what happens when a server says it offers a power that the user is not allowed to use.':
    'Poochhiye ki kya hoga jab ek server kahe ki woh aisi taaqat offer karta hai jise use karne ki user ko ijaazat nahi hai.',
  'An MCP Trust-Boundary Diagram.':
    'Ek MCP Trust-Boundary Diagram.',
  'Where does the user\'s identity (who they are) live, and where is authorisation checked?':
    'User ki identity (woh kaun hain) kahan rehti hai, aur authorisation kahan check hoti hai?',
  'Once you know the protocol, you can question anyone who says “MCP makes it secure”.':
    'Protocol jaan lene ke baad, jo bhi bole “MCP se sab secure ho jaata hai”, aap use sawaal kar sakte hain.',
  'Expose a tiny capability':
    'Ek chhoti si capability expose kijiye',
  'Build a tiny provider on your own computer that offers one safe tool or resource.':
    'Apne computer par ek chhota provider banaiye jo ek safe tool ya resource offer kare.',
  'The best way to understand a protocol is to open up a small example that really works.':
    'Protocol samajhne ka sabse achha tareeka hai ek chhota example kholkar dekhna jo sach mein chalta hai.',
  'Offer a read-only function (a recipe that only looks, never changes), such as looking up a record on your own computer.':
    'Ek read-only function offer kijiye (ek recipe jo sirf dekhti hai, kuch badalti nahi), jaise apne hi computer par kisi record ko dhoondhna.',
  'Call it from a client that fits, or from a local mock (a pretend copy).':
    'Use ek aise client se call kijiye jo fit ho, ya ek local mock (nakli copy) se.',
  'Send badly formed arguments (messy details), and make the server send back errors.':
    'Galat bane hue arguments (bigde hue details) bhejiye, aur server se errors wapas mangwaiye.',
  'An MCP Mini-Demo repository (an online folder that remembers every change).':
    'Ek MCP Mini-Demo repository (ek online folder jo har change yaad rakhta hai).',
  'Can you trace the whole path (follow it step by step): finding the tool, the call, and the reply?':
    'Kya aap poora raasta trace kar sakte hain (qadam-dar-qadam follow kar sakte hain): tool dhoondhna, call, aur reply?',
  'Keep the demo read-only. Then your eyes stay on how the protocol works.':
    'Demo ko read-only rakhiye. Phir aapka dhyaan is par rahega ki protocol kaise kaam karta hai.',
  'Consent and authorization':
    'Consent aur authorization',
  'Keep two things apart: finding out what a tool can do, and being allowed to use it. It is like seeing a locked cupboard and having its key.':
    'Do cheezein alag rakhiye: yeh pata lagana ki tool kya kar sakta hai, aur use use karne ki ijaazat hona. Yeh waisa hai jaise taala-band almari dekhna aur uski chaabi paas hona.',
  'If you can see a tool, that does not mean you may use it.':
    'Agar aap koi tool dekh sakte hain, iska matlab yeh nahi ki aap use use kar sakte hain.',
  'Make an authorisation matrix (a table of who may do what) for read, write and privileged tools (tools with special power).':
    'Read, write aur privileged tools (khaas taaqat wale tools) ke liye ek authorisation matrix banaiye (ek table ki kaun kya kar sakta hai).',
  'Add a policy check, like a guard at the door, before any tool is called.':
    'Kisi bhi tool ko call karne se pehle ek policy check jodiye, jaise darwaze par guard.',
  'Try a call you are not allowed to make, and write down that it was refused.':
    'Aisi call try kijiye jo aap karne ke liye allowed nahi hain, aur likhiye ki use mana kar diya gaya.',
  'An Authorization Matrix, with proof from your tests.':
    'Ek Authorization Matrix, saath mein aapke tests ka saboot.',
  'Who makes the last call on who is allowed?':
    'Kaun aakhri faisla leta hai ki kaun allowed hai?',
  'The server checks who is allowed. That check must never depend on the model following instructions.':
    'Server check karta hai ki kaun allowed hai. Yeh check is baat par kabhi depend nahi karna chahiye ki model instructions maanta hai.',
  'MCP security and prompt injection':
    'MCP security aur prompt injection',
  'Treat resources and tool outputs as content you cannot trust, like a note from a stranger.':
    'Resources aur tool outputs ko aisa content maniye jis par bharosa nahi, jaise kisi ajnabi ka diya hua note.',
  'When more things can plug in, there are also more places where trust has to stop.':
    'Jab zyada cheezein plug in ho sakti hain, toh zyada jagahon par trust ko rukna bhi padta hai.',
  'Hide a bad instruction inside a resource. Then test how the client\'s workflow handles it.':
    'Ek resource ke andar ek buri instruction chhupaiye. Phir test kijiye ki client ka workflow use kaise sambhalta hai.',
  'Keep data apart from the instructions that control the system. Make the tool rules really hold.':
    'Data ko un instructions se alag rakhiye jo system ko control karti hain. Tool ke rules ko sach mein lagu kijiye.',
  'Try an indirect injection: the bad instruction comes hidden inside a resource that was fetched, like a note slipped inside a borrowed book.':
    'Indirect injection try kijiye: buri instruction ek laaye hue resource ke andar chhupi aati hai, jaise udhaar li kitab mein rakhi chhupi parchi.',
  'An MCP Security Test Sheet.':
    'Ek MCP Security Test Sheet.',
  'Can content you do not trust make something happen that needs special permission?':
    'Kya woh content jis par bharosa nahi, aisi action karwa sakta hai jisme special permission chahiye?',
  'This links straight to the security chapter.':
    'Yeh seedha security chapter se judta hai.',
  'Agent-to-agent interoperability':
    'Agent-to-agent interoperability',
  'Understand the ideas behind A2A-style protocols (ways for agents to talk to agents): identity, delegation (handing a job over), swapping tasks, trust and observability (being able to see what happened).':
    'A2A-style protocols ke peeche ke ideas samajhiye (agents ke agents se baat karne ke tareeke): identity, delegation (kaam saunpna), tasks ki adla-badli, trust aur observability (dekh paana ki kya hua).',
  'Protocols between agents solve the problem of joining them. They do not remove the basic risks of letting agents act on their own.':
    'Agents ke beech ke protocols unhe jodne ki problem solve karte hain. Woh is risk ko khatam nahi karte ki agents apne aap kaam karte hain.',
  'Draw an exchange between two agents. Mark the lines of identity and delegation.':
    'Do agents ke beech ka ek exchange draw kijiye. Identity aur delegation ki lines mark kijiye.',
  'Decide which data and which powers may cross the line.':
    'Tay kijiye ki kaun sa data aur kaun si taaqatein is line ko paar kar sakti hain.',
  'Make a handoff that is bad or confused, and name the control that should stop it.':
    'Ek aisa handoff banaiye jo bura ya ulta-pulta ho, aur us control ka naam bataiye jo use rokega.',
  'An Agent Interoperability Trust Model.':
    'Ek Agent Interoperability Trust Model.',
  'What does the agent that receives the job really trust?':
    'Jo agent kaam receive karta hai, woh asal mein kis par bharosa karta hai?',
  'Keep your eyes on design and governance (the rules for who decides), not on tiny protocol details.':
    'Apni nazar design aur governance par rakhiye (kaun faisla leta hai, uske rules), protocol ki chhoti-chhoti baaton par nahi.',
  'Read one real exchange':
    'Ek asli exchange padhiye',
  'You do not need a real MCP server to understand this. The code cell (a box of code) below is a toy. A few lines of Python answer in the same message shapes. The pattern checker is offered as a tool. Press Run and read the six lines it prints. Real messages carry a few more fields. To run a real server, use the free Introduction to MCP course in the plan.':
    'Ise samajhne ke liye asli MCP server nahi chahiye. Neeche wala code cell (code ka ek dabba) ek khilauna hai. Python ki kuch lines wahi message shapes mein jawaab deti hain. Pattern checker ek tool ki tarah offer hota hai. Run dabaiye aur jo chhah lines print hoti hain unhe padhiye. Asli messages mein kuch fields aur hoti hain. Asli server chalane ke liye plan mein diya free Introduction to MCP course use kijiye.',
  'Mark where consent sits':
    'Nishaan lagaiye ki consent kahan baithta hai',
  'Mark the message where the client first learns what the server can do.':
    'Woh message mark kijiye jahan client ko pehli baar pata chalta hai ki server kya kar sakta hai.',
  'Mark the message where the user\'s text leaves their screen and something is done with it.':
    'Woh message mark kijiye jahan user ka text unki screen se nikalta hai aur uske saath kuch kiya jaata hai.',
  'Write one line. Who must say yes before that message is sent? What happens if nobody does?':
    'Ek line likhiye. Woh message bhejne se pehle kise haan kehna hai? Agar koi nahi kehta toh kya hota hai?',
  'The tools/list reply is where the client learns what exists. The tools/call message is the one to mark: the user\'s own PAN is sent out. Consent belongs just before it, in the client. The server cannot give it to itself. The protocol carried all six messages and asked nobody.':
    'tools/list ka reply woh jagah hai jahan client ko pata chalta hai ki kya-kya maujood hai. tools/call wala message mark karne layak hai: user ka apna PAN bahar bheja ja raha hai. Consent uske theek pehle chahiye, client mein. Server khud ko consent nahi de sakta. Protocol ne chhahon messages aage badha diye aur kisi se poochha nahi.',
  'A standard does not make a tool safe':
    'Standard se tool safe nahi ban jaata',
  'The units lead to one big lesson. It is easy to forget when a standard looks neat and official.':
    'Units se ek badi seekh nikalti hai. Jab koi standard saaf-suthra aur official lagta hai, tab use bhool jaana aasaan hai.',
  'A standard tool interface (the plug socket) does not make an unsafe tool safe. The protocol carries the call. It does not decide if the call should be allowed.':
    'Standard tool interface (plug socket) se unsafe tool safe nahi ban jaata. Protocol call ko le jaata hai. Woh yeh tay nahi karta ki call allow honi chahiye ya nahi.',
  'Many people mix this up. MCP is a <strong>protocol</strong>, not a framework that builds agents. It makes the connection standard. What gets connected, and who may use it, is still your design.':
    'Bahut log yeh mila dete hain. MCP ek <strong>protocol</strong> hai, agents banane wala framework nahi. Woh connection ko standard banata hai. Kya connect hota hai, aur use kaun use kar sakta hai, yeh abhi bhi aapka design hai.',
  'Agent-to-agent protocols add one more layer. They let agents find each other and swap tasks and results. For product decisions, look at identity, delegation, trust, permissions, error handling and observability. Do not look at the fields inside each message.':
    'Agent-to-agent protocols ek aur layer jodte hain. Woh agents ko ek doosre ko dhoondhne aur tasks aur results badalne dete hain. Product decisions ke liye identity, delegation, trust, permissions, error handling aur observability dekhiye. Har message ke andar ke fields mat dekhiye.',
  'Now let us make this useful. You will take tools from a system you already know. You will sort them into groups by what each one may change.':
    'Ab ise kaam ki cheez banate hain. Aap ek jaane-pehchaane system ke tools lenge. Aap unhe groups mein sort karenge, is hisaab se ki har ek kya badal sakta hai.',
  'Take five tools from a system you know. Put each in one class: read-only, reversible write (a change you can undo), irreversible write (a change you cannot undo), privileged (special power) or prohibited (not allowed at all).':
    'Kisi jaane-pehchaane system ke paanch tools lijiye. Har ek ko ek class mein rakhiye: read-only, reversible write (aisa change jo undo ho sakta hai), irreversible write (aisa change jo undo nahi ho sakta), privileged (khaas taaqat) ya prohibited (bilkul allowed nahi).',
  'Tool — class — why':
    'Tool — class — kyun',
  'The line between reversible and irreversible is where a person should confirm. If a tool was hard to place, give it a smaller scope (a smaller area of power).':
    'Reversible aur irreversible ke beech ki line wahi hai jahan insaan ko confirm karna chahiye. Agar kisi tool ko rakhna mushkil tha, toh use chhota scope dijiye (taaqat ka chhota daayra).',
  'To sum up. MCP is a standard way to connect tools, just as a plug socket is a standard. It makes tools easy to plug in. It does not make an unsafe tool safe. Consent, authorisation and trust boundaries are still your job.':
    'Chaliye samet lete hain. MCP tools jodne ka ek standard tareeka hai, bilkul jaise plug socket ek standard hai. Isse tools plug karna aasaan ho jaata hai. Lekin unsafe tool safe nahi ban jaata. Consent, authorisation aur trust boundaries ab bhi aapka kaam hain.',
  'Next, Chapter 28 changes the kind of input: from text to documents, images and audio. The same context and evaluation design stay.':
    'Aage Chapter 28 input ki kism badalta hai: text se documents, images aur audio. Wahi context aur evaluation design rehta hai.',
});
