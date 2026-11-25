/* Hinglish for Tool calling and agents: letting the model take actions (chapter:ch9), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'An agent is a helper that works in a loop (the same step again and again). The model asks for a tool, your code presses it, and the result goes back to the model. This repeats until the model is done. You build that loop yourself. Then you break it four ways, to see what an agent does on a bad day.':
    'Agent ek madadgaar hai jo loop mein kaam karta hai (wahi step baar baar). Model ek tool maangta hai, aapka code use dabata hai, aur result model ko wapas jaata hai. Yeh tab tak chalta hai jab tak model kaam poora na kar le. Yeh loop aap khud banate hain. Phir use chaar tarah se todte hain, ye dekhne ke liye ki agent kharab din par kya karta hai.',
  'Say what an agent is in one sentence, without the word “autonomous”.':
    'Agent kya hai, ek sentence mein bataiye, “autonomous” shabd ke bina.',
  'Say why a six-step agent can cost much more than six single messages.':
    'Bataiye ki chhe-step wala agent chhe akele messages se kaafi zyaada mehnga kyun ho sakta hai.',
  'Say what must be true before you let an agent do something that cannot be undone.':
    'Bataiye ki agent ko aisa kaam karne dene se pehle kya sach hona chahiye jo wapas nahi ho sakta.',
  'Write the rule-keeper’s rule book, starting with what it must never do':
    'Rule-keeper ki rule book likhiye, shuruaat us se jo use kabhi nahi karna',
  'The rule-keeper looks at what was found and picks an action: remove it, mask it (hide part of it), let it through, or ask the person. Because it takes actions, you start with its limits. In this chapter you built the loop that lets a model use tools. You saw what a vague tool description does. You fed the loop an error. You removed its step limit. Now you write the rule-keeper’s rule book. Then you build a small version and break it.':
    'Rule-keeper dekhta hai ki kya mila aur ek kaam chunta hai: hatana, mask karna (kuchh hissa chhupana), jaane dena, ya insaan se poochna. Kyunki woh kaam karta hai, aap shuruaat uski seemaon se karte hain. Is chapter mein aapne woh loop banaya jisse model tools use karta hai. Aapne dekha ki dhundhla tool description kya karta hai. Aapne loop ko error khilaya. Aapne uski step limit hataayi. Ab aap rule-keeper ki rule book likhte hain. Phir ek chhota version banate aur todte hain.',
  'Use your notebook (the page where you run code) for this chapter. Build and break the rule-keeper there. Write the worst-case paragraph in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 7.':
    'Is chapter ke liye apna notebook (jis page par code chalta hai) use kijiye. Rule-keeper wahin banaiye aur todiye. Worst-case paragraph neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 1, 2 aur 7.',
  'Write the worst-case paragraph first. It says the worst thing the rule-keeper could do if every choice it made were wrong. For example: “It lets a full Aadhaar number through to an outside AI company.”':
    'Sabse pehle worst-case paragraph likhiye. Usme likhiye ki agar rule-keeper ka har faisla galat ho, to woh sabse bura kya kar sakta hai. Jaise: “It lets a full Aadhaar number through to an outside AI provider.”',
  'Write the limits: the most steps it may take for one message, the most money it may spend, and what it does when either runs out. The safe answer is usually to remove the detail and stop.':
    'Seemaayein likhiye: ek message ke liye sabse zyaada kitne steps, sabse zyaada kitna kharch, aur dono mein se koi khatam ho to woh kya kare. Surakshit jawaab aam taur par hai: detail hata do aur ruk jao.',
  'Write three rules in plain words for picking the action. For example: “Always remove an Aadhaar number unless the purpose is identity checking.” “Mask a mobile number to its first two and last two digits when a person must recognise it.” “If unsure, ask the person.”':
    'Kaam chunne ke liye teen rules seedhe shabdon mein likhiye. Jaise: “Always remove an Aadhaar number unless the purpose is identity checking.” “Mask a mobile number to its first two and last two digits when a person must recognise it.” “If unsure, ask the person.”',
  'Write which actions need a person to say yes, as a clear condition. For example: “Letting any ID number through always needs a person’s approval.”':
    'Likhiye ki kaun se kaamon ke liye insaan ki haan chahiye, ek saaf shart ke roop mein. Jaise: “Letting any ID number through always needs a person’s approval.”',
  'Build a small version in your notebook. Give the model two tools: one that hides a detail, and one that asks the person. Write each tool’s description as if it were the only instruction the model gets.':
    'Apne notebook mein ek chhota version banaiye. Model ko do tools dijiye: ek jo detail chhupata hai, aur ek jo insaan se poochta hai. Har tool ka description aise likhiye jaise model ko wahi ek hi hidayat milti ho.',
  'Break it on purpose. Make one description vague. Force one error. Run starter sentence 10 (the one with the order hidden inside it). Write down what the tool said it did, and what it really did.':
    'Jaan-boojhkar todiye. Ek description dhundhla kijiye. Ek error zabardasti paida kijiye. Starter sentence 10 chalaiye (jisme order chhupa hua hai). Likhiye ki tool ne kya kaha ki usne kiya, aur asal mein kya kiya.',
  'Save the six cases from the chapter as <code>evals/agent-cases-v1.csv</code> in your repository (an online folder that remembers every change). A CSV file is a spreadsheet saved as plain text. Give it three columns: the question, the words a right answer contains, and the tools it should call. Write your two scores, final answer and path, under the file name in the notes box. Chapter 26 scores a longer list the same way.':
    'Chapter ke chhe cases ko apni repository (online folder jo har badlaav yaad rakhta hai) mein <code>evals/agent-cases-v1.csv</code> ke naam se save kijiye. CSV file plain text mein saved spreadsheet hoti hai. Usme teen columns rakhiye: sawaal, sahi jawaab mein aane wale shabd, aur kaun se tools bulane chahiye. Apne do scores, final answer aur path, notes box mein file ke naam ke neeche likhiye. Chapter 26 isi tarah ek lambi list ko score karta hai.',
  'The worst-case paragraph, written before the rest.':
    'Worst-case paragraph, baaki sab se pehle likha hua.',
  'The limits, and the three rules in plain words.':
    'Seemaayein, aur teen rules seedhe shabdon mein.',
  'A small working rule-keeper that finishes a message and stops cleanly at its limit.':
    'Ek chhota chalta hua rule-keeper jo message poora kare aur apni seema par saaf tarah ruk jaye.',
  'Two failures you caused on purpose, each described as it looked from the outside.':
    'Do failures jo aapne jaan-boojhkar karwaye, har ek waisa likha jaisa bahar se dikha.',
  'It could not take two steps on its own':
    'Woh khud se do kadam nahi utha sakta tha',
  'The second gap from Chapter 7.5. This chapter fills it.':
    'Chapter 7.5 ki doosri kami. Yeh chapter use bharta hai.',
  'The model sees only the notes your app sends':
    'Model sirf wahi parchiyaan dekhta hai jo aapka app bhejta hai',
  'So anything that loops gets expensive fast.':
    'To jo bhi loop mein chalta hai, jaldi mehnga ho jaata hai.',
  'A schema (a form with fixed boxes) fixes the format':
    'Schema (fixed khaanon wala form) format tay karta hai',
  'You can require structured output (a form-shaped reply) instead of asking for one.':
    'Aap structured output (form jaisa reply) maang nahi, zaroori kar sakte hain.',
  'Until now, the model only wrote things. It wrote words for a person, or boxes for your code to store. In this chapter it starts to do things. It looks something up, sends an email, books a slot or changes a record.':
    'Ab tak model sirf likhta tha. Woh kisi insaan ke liye shabd likhta tha, ya aapke code ke store karne ke liye khaane. Is chapter mein woh kaam karna shuru karta hai. Woh kuchh dhoondhta hai, email bhejta hai, slot book karta hai ya record badalta hai.',
  'This is a big change. A mistake no longer sits on a screen. It can touch the real world. So first you see exactly how it works. Then you build it yourself.':
    'Yeh bada badlaav hai. Ab galti sirf screen par nahi rehti. Woh asli duniya ko chhu sakti hai. To pehle aap dekhte hain ki yeh theek se kaise chalta hai. Phir khud banate hain.',
  'How tool calling works':
    'Tool calling kaise chalti hai',
  'Imagine a new colleague who can think and write, but cannot open any of your files. You want them to check a policy limit. They cannot open the file. So they ask you. You look it up and tell them. Tool calling (the model asking you to press a button for it) works the same way. It has five steps.':
    'Ek naye saathi ko sochiye jo soch aur likh sakta hai, par aapki koi file nahi khol sakta. Aap chahte hain ki woh policy limit check kare. Woh file nahi khol sakta. To woh aapse poochta hai. Aap dekhkar bata dete hain. Tool calling (model ka aapse apne liye button dabwana) bhi aise hi chalti hai. Isme paanch steps hain.',
  'You tell the model about the available functions (named recipes: give them things, they give a result) in your request. For each one, give its name, what it does and what it needs. This is only more text.':
    'Aap apne request mein model ko available functions ke baare mein batate hain (naam wali recipes: unhein cheezein do, woh result dete hain). Har ek ka naam, kaam aur zaroorat likhiye. Yeh bas thoda aur text hai.',
  'The model replies with a request, not a paragraph: <em>call this function, with these arguments.</em>':
    'Model paragraph ki jagah ek request se jawaab deta hai: <em>call this function, with these arguments.</em>',
  '<strong>Your code</strong> runs the function. The model cannot run anything. It can only ask.':
    '<strong>Aapka code</strong> function chalata hai. Model kuchh chala nahi sakta. Woh sirf maang sakta hai.',
  'You send the result back, added to the chat so far.':
    'Aap result wapas bhejte hain, ab tak ki baatcheet mein jodkar.',
  'The model either asks for another call, or writes its final answer. This repeats until it stops, or until you stop it.':
    'Model ya to ek aur call maangta hai, ya apna final jawaab likhta hai. Yeh tab tak dohraata hai jab tak woh ruke, ya aap use rokein.',
  'Look at the pattern in those steps. The model asks. Your code acts. The result goes back to the model. This going round and round is a loop, and it gives us the word we need.':
    'In steps ka pattern dekhiye. Model maangta hai. Aapka code kaam karta hai. Result model ko wapas jaata hai. Yeh ghoomte rehna ek loop hai, aur isse hamein zaroori shabd milta hai.',
  'An agent is a model, a set of functions, a loop and a rule for when to stop. Teams often forget to write the stopping rule. It is like a helper with a list of errands and a curfew.':
    'Agent ek model, functions ka set, ek loop aur rukne ka ek niyam hai. Teams aksar rukne ka niyam likhna bhool jaati hain. Yeh ek aise madadgaar jaisa hai jiske paas errands ki list aur ghar lautne ka waqt hai.',
  'Build the loop':
    'Loop banaiye',
  'Now you build this yourself, in two parts. First you describe the tools. Then you write the loop that uses them.':
    'Ab aap yeh khud banate hain, do hisson mein. Pehle tools ka description likhte hain. Phir woh loop likhte hain jo unhein use karta hai.',
  'Define two tools':
    'Do tools banaiye',
  'Define two tools. One is clearly useful. One is deliberately similar to it. Then you can watch the model choose between them.':
    'Do tools banaiye. Ek saaf taur par kaam ka hai. Ek jaan-boojhkar uske jaisa hai. Phir aap model ko unmein se chunte dekh sakte hain.',
  'You see no output yet. You described the tools, but you have not used them.':
    'Abhi koi output nahi dikhta. Aapne tools ka description likha hai, par unhein chalaya nahi hai.',
  'Write the loop':
    'Loop likhiye',
  'Type this. Do not paste it. It is short, and it is the whole machinery of an agent. The list called <code>tools_used</code> (a row of boxes, in order) keeps the names of the tools the agent calls. You will use it in a minute.':
    'Isse type kijiye. Paste mat kijiye. Yeh chhota hai, aur yahi agent ki poori machine hai. <code>tools_used</code> naam ki list (kram mein rakhe khaane) un tools ke naam rakhti hai jo agent bulata hai. Aap ise ek minute mein use karenge.',
  'You see a trace (the list of what happened, step by step): <code>get_exchange_rate</code>, then <code>get_policy_limit</code>, then a final answer that joins both. The model split the question into two lookups, then joined the results. The loop is short code. The model decides which tool to ask for next.':
    'Aapko ek trace dikhta hai (kya hua, step by step ki list): <code>get_exchange_rate</code>, phir <code>get_policy_limit</code>, phir ek final jawaab jo dono ko jodta hai. Model ne sawaal ko do lookups mein baanta, phir results jode. Loop chhota code hai. Agla kaun sa tool maangna hai, yeh model tay karta hai.',
  'You can also watch a run in this page, one step at a time. See where it can go wrong.':
    'Aap is page par ek run ko ek-ek step karke bhi dekh sakte hain. Dekhiye kahan bigad sakta hai.',
  'Score the path, not only the answer':
    'Sirf jawaab nahi, raasta bhi score kijiye',
  'Until now you judged an agent by its final answer. But an agent can reach the right answer by the wrong road, like a student who copies the answer. It may call a tool it did not need, skip one it did, or call one twice. A right answer hides all of that. A wrong road costs money on every run.':
    'Ab tak aapne agent ko uske final jawaab se parkha. Par agent galat raaste se bhi sahi jawaab pa sakta hai, us vidyarthi jaisa jo jawaab nakal kar le. Woh aisa tool bula sakta hai jo zaroori nahi tha, zaroori tool chhod sakta hai, ya ek ko do baar bula sakta hai. Sahi jawaab yeh sab chhupa leta hai. Galat raasta har run par paisa kharch karta hai.',
  'Checking the steps is called a <strong>trajectory evaluation</strong>. You mark the route the helper took, separately from where it ended up. For each task you ask two questions. Was the answer right? Did the agent call the tools you expected? Chapter 26 does this on a longer list. Here is a small version.':
    'Steps ko check karna <strong>trajectory evaluation</strong> kehlata hai. Aap madadgaar ke liye gaye raaste ko, jahan woh pahuncha usse alag, number dete hain. Har task ke liye do sawaal poochiye. Kya jawaab sahi tha? Kya agent ne wahi tools bulaye jo aapne socha tha? Chapter 26 yeh ek lambi list par karta hai. Yeh uska chhota version hai.',
  'Score six tasks':
    'Chhe tasks ko score kijiye',
  'Run this cell (one box of code on the page). It asks the agent six questions. For each, it knows the words a right answer must contain and the tools it should call. The sixth question has no answer, so the right behaviour is to say so.':
    'Is cell ko chalaiye (page par code ka ek dibba). Yeh agent se chhe sawaal poochta hai. Har ek ke liye woh jaanta hai ki sahi jawaab mein kaun se shabd hone chahiye aur kaun se tools bulane chahiye. Chhathe sawaal ka jawaab hai hi nahi, to sahi behaviour yeh kehna hai.',
  'Each line shows whether the answer was right, whether the path was right, and which tools were called. Your two totals will differ from anyone else’s. Look at the rows where the two scores disagree. A right answer on the wrong path is the case that checking only the final answer never shows. The word match is rough, so read any row it marks wrong before you trust it.':
    'Har line batati hai ki jawaab sahi tha ya nahi, raasta sahi tha ya nahi, aur kaun se tools bulaye gaye. Aapke do totals kisi aur ke totals se alag honge. Un rows ko dekhiye jahan dono scores alag hain. Galat raaste par sahi jawaab woh halat hai jo sirf final jawaab dekhne se kabhi nahi dikhti. Shabd milaana moti jaanch hai, to galat likhi row par bharosa karne se pehle use padhiye.',
  'Tool descriptions are code':
    'Tool ke description bhi code hain',
  'You may wonder how the model picks a function. It reads the description, like reading the label on a button. It has no other way to choose.':
    'Aap soch sakte hain ki model function kaise chunta hai. Woh description padhta hai, jaise button par laga label padhna. Chunne ka uske paas aur koi tareeka nahi hai.',
  'So a vague description sends the model to the wrong function. That is a writing bug, not the model failing. Let’s try writing a good one.':
    'To dhundhla description model ko galat function par bhej deta hai. Yeh likhne ki galti hai, model ki naakami nahi. Chaliye ek achha likhne ki koshish karte hain.',
  'Write a tool description. The function looks up a customer’s current outstanding balance (what they still owe today). It does not return their payment history, and not their credit limit. Write the description the model will read. Then name the function it is most likely to be confused with.':
    'Ek tool description likhiye. Function ek customer ka abhi ka baaki balance dekhta hai (aaj tak unpar kitna baaki hai). Woh unki payment history nahi deta, aur unki credit limit bhi nahi. Woh description likhiye jo model padhega. Phir us function ka naam likhiye jisse yeh sabse zyaada uljhega.',
  'Description, then the one it gets confused with':
    'Description, phir jisse yeh uljhta hai',
  'A good description says what the function returns, what it does <em>not</em> return, and when to use something else. For example: “Returns the current outstanding balance for one customer as of today. Does not return payment history, credit limit or projected dues; use get_payment_history or get_credit_terms for those.” Naming the similar function inside the description stops a common mix-up that many teams find only after launch.':
    'Achha description batata hai ki function kya deta hai, kya <em>nahi</em> deta, aur kab kuchh aur use karna hai. Jaise: “Returns the current outstanding balance for one customer as of today. Does not return payment history, credit limit or projected dues; use get_payment_history or get_credit_terms for those.” Description ke andar milte-julte function ka naam likhne se woh aam uljhan ruk jaati hai jo kai teams ko launch ke baad hi dikhti hai.',
  'Now see the damage a vague description can do.':
    'Ab dekhiye ki dhundhla description kitna nuksaan kar sakta hai.',
  'Make a description vague':
    'Ek description dhundhla kijiye',
  'Change the description of <code>get_policy_limit</code> to something vague, such as <code>"Returns data about expenses."</code>. Then ask the same question again.':
    '<code>get_policy_limit</code> ka description kisi dhundhli cheez mein badaliye, jaise <code>"Returns data about expenses."</code>. Phir wahi sawaal dobara poochiye.',
  'You get the wrong tool, no tool, or the right tool with a meaningless argument (the thing you hand to a function). The model did not change. You edited one sentence, and the system got worse. So <strong>treat tool descriptions as code</strong>: review them and test them.':
    'Aapko galat tool milta hai, koi tool nahi milta, ya sahi tool bekaar argument ke saath milta hai (woh cheez jo aap function ko dete hain). Model nahi badla. Aapne ek sentence badla, aur system kharab ho gaya. To <strong>tool descriptions ko code ki tarah maniye</strong>: unhein review kijiye aur test kijiye.',
  'Each step adds cost':
    'Har step kharch badhata hai',
  'Chapter 1 showed that every request carries the notes your app sends. In a loop, that matters. If your code sends the growing chat at every step, the cost climbs fast, like a taxi meter that keeps running.':
    'Chapter 1 ne dikhaya tha ki har request aapke app ki bheji hui parchiyaan saath le jaati hai. Loop mein yeh maayne rakhta hai. Agar aapka code har step par badhti hui baatcheet bhejta hai, to kharch tezi se chadhta hai, chalte hue taxi meter jaisa.',
  'A multiple, like 4×':
    'Ek guna, jaise 4×',
  'The book worked out one case. Now make your own guess. A single call sends about 1,200 tokens (small pieces of a word, like Lego bricks of text). A six-step agent sends the growing chat at every step. Roughly how many times a single call’s cost is the whole run?':
    'Kitaab ne ek case nikaala tha. Ab apna andaza lagaiye. Ek call lagbhag 1,200 tokens bhejti hai (shabd ke chhote tukde, text ki Lego eent). Chhe-step wala agent har step par badhti baatcheet bhejta hai. Poora run ek call ke kharch ka lagbhag kitna guna hai?',
  'It depends on the messages, tool outputs, summaries, caching and pricing. If the loop sends a growing transcript each time, the input grows faster than the number of steps. So measure the real tokens in and out at each step. Do not trust a rule of thumb.':
    'Yeh messages, tool outputs, summaries, caching aur pricing par nirbhar hai. Agar loop har baar badhta hua transcript bhejta hai, to input steps ki ginti se tez badhta hai. To har step par asli tokens andar aur bahar naapiye. Andaze ke niyam par bharosa mat kijiye.',
  'So an agent that “only” adds two more steps can double the bill. The number of steps is a product decision, and it has a price tag.':
    'To “sirf” do aur steps jodne wala agent bill doguna kar sakta hai. Steps ki ginti ek product ka faisla hai, aur us par daam ka tag laga hai.',
  'When a tool fails':
    'Jab tool fail ho jaye',
  'Tools do not always work. A service can be down, or a lookup can come back empty. So what does the model do then? Let’s make a tool fail and watch.':
    'Tools hamesha nahi chalte. Koi service band ho sakti hai, ya lookup khaali laut sakta hai. To tab model kya karta hai? Chaliye ek tool ko fail karwa kar dekhte hain.',
  'Return an error from a tool':
    'Tool se ek error wapas dilwaiye',
  'Make <code>run_tool</code> return <code>{"error": "service unavailable"}</code> for the rate lookup. Then run it again.':
    '<code>run_tool</code> ko rate lookup ke liye <code>{"error": "service unavailable"}</code> wapas karne dijiye. Phir dobara chalaiye.',
  'Watch closely. Some runs handle it well and say, “I could not retrieve the rate.” Others give a confident answer <em>with a believable exchange rate in it</em>. That is the hallucination from Chapter 2 (a made-up answer said with a straight face), now inside a workflow that another system trusts. Count how many of five runs report success after a failure.':
    'Dhyaan se dekhiye. Kuchh runs ise theek se sambhalte hain aur kehte hain, “I could not retrieve the rate.” Doosre pakke yakeen se jawaab dete hain <em>jisme ek vishwasniya exchange rate hota hai</em>. Yeh Chapter 2 wala hallucination hai (seedhe chehre se boli gayi banawati baat), ab aise workflow ke andar jis par doosra system bharosa karta hai. Ginye ki paanch mein se kitne runs fail hone ke baad bhi safal hone ki report dete hain.',
  'Reading versus acting':
    'Padhna ya karna',
  'Not all tools carry the same risk. A function that reads data is safe to redo. At worst you get wrong information, and you try again, like looking at a notice board.':
    'Sab tools ka khatra ek jaisa nahi hota. Data padhne wala function dobara karna surakshit hai. Zyaada se zyaada galat jaankari milti hai, aur aap phir koshish karte hain, jaise notice board dekhna.',
  'But a function that sends, pays, deletes or books cannot be undone. The email has gone. The refund has been paid. That difference should decide where a person says yes inside the loop. It is a product decision, and it is yours to make.':
    'Par bhejne, paisa dene, mitane ya book karne wala function wapas nahi ho sakta. Email chali gayi. Refund ho gaya. Yahi farq tay kare ki loop mein insaan kahan haan kahe. Yeh product ka faisla hai, aur aapka hai.',
  'A step limit and an approval point are delegation of powers and maker-checker. Nobody gets unlimited authority. Anything that cannot be undone needs a second person to sign. The agent gets the same rules you would write for an officer.':
    'Step limit aur approval point powers ki delegation aur maker-checker jaise hain. Kisi ko asimit adhikaar nahi milta. Jo wapas nahi ho sakta, uspar doosre insaan ke dastakhat chahiye. Agent ko wahi niyam milte hain jo aap kisi officer ke liye likhte.',
  'Always set a step limit':
    'Hamesha step limit lagaiye',
  'There is one more way a loop goes wrong, and it is the simplest. If nothing tells the loop to stop, it may never stop, like a lift with no top floor button. Let’s remove the limit and see.':
    'Loop ek aur tarah se bigadta hai, aur woh sabse saral hai. Agar loop ko rukne ke liye kuchh nahi kehta, to woh kabhi na ruke, bina top floor button wali lift jaisa. Chaliye limit hata kar dekhte hain.',
  'Remove the step limit':
    'Step limit hataiye',
  'Set <code>max_steps=50</code> and ask something the tools cannot answer: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>':
    '<code>max_steps=50</code> kijiye aur aisa kuchh poochiye jiska jawaab tools ke paas nahi hai: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>',
  'The model keeps calling tools, often the same one with slightly different arguments, until the limit stops it. Check your token count. Then set <code>max_steps=5</code> again. Add a rule: two identical calls in a row end the run.':
    'Model tools bulata rehta hai, aksar wahi tool thode alag arguments ke saath, jab tak limit use na roke. Apni token ginti dekhiye. Phir <code>max_steps=5</code> dobara kijiye. Ek niyam jodiye: lagataar do ek jaisi calls run ko khatam kar dein.',
  'An agent is a model, a set of functions, a loop and a rule for when to stop. The model only asks for tools. Your code runs them. You also saw four ways a loop goes wrong: a vague description, growing cost, a failing tool and no step limit.':
    'Agent ek model, functions ka set, ek loop aur rukne ka niyam hai. Model sirf tools maangta hai. Aapka code unhein chalata hai. Aapne yeh bhi dekha ki loop chaar tarah se bigadta hai: dhundhla description, badhta kharch, fail hota tool aur step limit ka na hona.',
  'Carry one question with you. Does this tool only read, or does it act? If it acts, decide where a person must say yes. Next you look at what happens when the notes you send get very long, and how to choose what goes in.':
    'Ek sawaal saath rakhiye. Kya yeh tool sirf padhta hai, ya kaam karta hai? Agar kaam karta hai, to tay kijiye ki insaan ko kahan haan kehni hai. Agle chapter mein dekhenge ki jab aapki bheji hui parchiyaan bahut lambi ho jaayein to kya hota hai, aur kya daalna hai yeh kaise chunein.',
});
