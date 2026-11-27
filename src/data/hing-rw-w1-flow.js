/* Hinglish for the learning-flow pass: the route that pairs each book chapter
   with its practice, the Python primer (Chapter 0.8), the bridges between
   weeks, and the meta-text that used to contradict the route.

   Keyed on the English line exactly, like every other file here. */
Object.assign(window.HING = window.HING || {}, {

  'How this course works':
    'Yeh course kaise kaam karta hai',
  'On your route':
    'Aapke raaste par',
  'Why a second example':
    'Doosra example kyun',
  'A second, deeper pass over the ideas of Parts I to IV, at the level a real launch needs. Nothing here is new as an idea: software basics, choosing a model, context engineering, production RAG, tools and workflows, agents, MCP, multimodal input, release gates, observability, security, AI product specs, production architecture, and a capstone system you can defend.':
    'Parts I se IV ke ideas par ek doosra, gehra pass, us level par jo asli launch ko chahiye. Idea ke taur par yahan kuch naya nahi hai: software basics, model chunna, context engineering, production RAG, tools aur workflows, agents, MCP, multimodal input, release gates, observability, security, AI product specs, production architecture, aur ek capstone system jiska aap bachaav kar sakein.',
  'After the capstone: pricing and unit economics, growth and onboarding, product analytics and experiments, the AI PM toolchain, harness engineering, shipping to real users, and getting the job.':
    'Capstone ke baad: pricing aur unit economics, growth aur onboarding, product analytics aur experiments, AI PM toolchain, harness engineering, asli users tak ship karna, aur naukri paana.',
  'Tokens on your own text, just enough Python to read the code, your first API call, then system prompts and temperature, writing and testing prompts, and the five task types. You finish by building a complete RAG system: chunking, keyword and embedding search, and evaluation.':
    'Apne text par tokens, code padhne bhar ka Python, aapki pehli API call, phir system prompts aur temperature, prompts likhna aur test karna, aur paanch task types. Aakhir mein aap ek poora RAG system banate hain: chunking, keyword aur embedding search, aur evaluation.',
  'Reading Python':
    'Python padhna',
  'In full, this chapter takes about two and a half hours. Tools change every few months. The brands named below are one current example each, not a requirement. If a named tool is gone by the time you read this, pick a replacement that does the same job.':
    'Poora karne par, is chapter mein lagbhag dhai ghante lagte hain. Tools har kuch mahine mein badal jaate hain. Neeche jo brands diye hain woh sirf ek current example hain, koi requirement nahi. Agar padhte waqt koi tool band ho chuka ho, toh uski jagah woh tool chuniye jo wahi kaam karta ho.',
  'Reading Python: just enough for this course':
    'Python padhna: is course ke liye bas jitna chahiye',
  'Read a line like <code>city = "Pune"</code> and say what it stores.':
    '<code>city = "Pune"</code> jaisi line padhkar bata paana ki woh kya store karti hai.',
  'Chapter 0.5':
    'Chapter 0.5',
  'A cell, and the Run button':
    'Ek cell, aur Run button',
  'Run your first cell':
    'Apna pehla cell chalaiye',
  'The words <code>Hello from Python</code> appear under the cell. <code>print</code> means “show this”. The text inside the quotes is shown exactly as written.':
    'Cell ke neeche <code>Hello from Python</code> shabd aate hain. <code>print</code> ka matlab hai “yeh dikhao”. Quotes ke andar ka text bilkul waisa hi dikhta hai jaisa likha hai.',
  'A name for a value':
    'Ek value ka naam',
  'Read the equals sign as “is now”. So <code>city = "Pune"</code> reads as “city is now Pune”.':
    'Barabar ke nishaan ko “ab hai” padhiye. Toh <code>city = "Pune"</code> ka matlab hai “city ab Pune hai”.',
  'Store something and use it':
    'Kuch store kijiye aur use use kijiye',
  'What do you expect to see?':
    'Aapko kya dikhne ki ummeed hai?',
  'A list: several things in order':
    'List: kram mein kai cheezein',
  'Pick an item from a list':
    'List se ek item nikaaliye',
  'You see <code>Pune</code>, the first item, and then <code>3</code>, the number of items. <code>len</code> is short for length.':
    'Aapko <code>Pune</code>, yaani pehla item, aur phir <code>3</code>, yaani items ki ginti, dikhti hai. <code>len</code> length ka chhota roop hai.',
  'Change <code>[0]</code> to <code>[2]</code> and run it again. Which city do you get?':
    '<code>[0]</code> ko <code>[2]</code> kar dijiye aur dobara chalaiye. Kaun sa shehar aata hai?',
  'A dictionary: labels and values':
    'Dictionary: labels aur values',
  'To read one value, put its label in square brackets after the name.':
    'Ek value padhne ke liye, naam ke baad square brackets mein uska label likhiye.',
  'Read a value by its label':
    'Label se value padhiye',
  'A list of dictionaries: a conversation':
    'Dictionaries ki list: ek conversation',
  'Asking Python to do a job':
    'Python se ek kaam karwana',
  'Use named settings':
    'Naam wali settings use kijiye',
  'A dot reaches inside':
    'Dot andar tak pahunchta hai',
  'Text has jobs of its own, reached the same way. <code>city.upper()</code> asks the text in <code>city</code> for a copy in capital letters.':
    'Text ke apne kaam hote hain, jinhe isi tarah pahuncha jaata hai. <code>city.upper()</code> <code>city</code> ke text se capital letters wali ek copy maangta hai.',
  'Reach inside with a dot':
    'Dot se andar pahunchiye',
  'You see <code>PUNE</code> and then <code>Pune</code>. The part before the dot says whose job it is. The brackets say what to do it with.':
    'Aapko <code>PUNE</code> aur phir <code>Pune</code> dikhta hai. Dot se pehle wala hissa batata hai ki kaam kiska hai. Brackets batate hain ki kis cheez ke saath karna hai.',
  'Now read the real thing':
    'Ab asli cheez padhiye',
  '<code>response = …</code> gives the answer a name, so the next line can use it.':
    '<code>response = …</code> jawaab ko ek naam deta hai, taaki agli line use use kar sake.',
  'The conversation is a list with one dictionary in it: a single message from the user.':
    'Conversation ek list hai jisme ek dictionary hai: user ka ek akela message.',
  'That is the whole of it. Every model call in this course has this shape. Only the words inside change.':
    'Bas itna hi hai. Is course ki har model call ka yahi shape hai. Sirf andar ke shabd badalte hain.',
  'Write, in plain words, what this line would show: <code>print(response.usage.prompt_tokens)</code>':
    'Saadhe shabdon mein likhiye ki yeh line kya dikhayegi: <code>print(response.usage.prompt_tokens)</code>',
  'One sentence.':
    'Ek sentence.',
  'Three shapes you will meet later':
    'Teen shapes jo aapko baad mein milenge',
  'A loop, a check and a recipe':
    'Ek loop, ek check aur ek recipe',
  'Change <code>score = 7</code> to <code>score = 9</code> and run it again.':
    '<code>score = 7</code> ko <code>score = 9</code> kar dijiye aur dobara chalaiye.',
  'The spaces matter':
    'Spaces matter karte hain',
  'When a cell goes red':
    'Jab cell laal ho jaaye',
  '<strong>is not defined</strong>: a name was used before a line gave it a value. Run the cells above first, or check the spelling.':
    '<strong>is not defined</strong>: kisi naam ko use kiya gaya jabki kisi line ne use value di hi nahi thi. Pehle upar ke cells chalaiye, ya spelling check kijiye.',
  '<strong>IndentationError</strong>: the spaces at the start of a line have moved. Press <strong>Undo edits</strong> to get the original back.':
    '<strong>IndentationError</strong>: line ki shuruaat ke spaces khisak gaye hain. Original wapas paane ke liye <strong>Undo edits</strong> dabaiye.',
  'Chapter 0.8':
    'Chapter 0.8',
  'Is it worth building?':
    'Kya yeh banane laayak hai?',
  'The market, and what not to do':
    'Market, aur kya nahi karna',
  'A rough market size, and a short “not doing” list.':
    'Market ka ek moota andaaza, aur “yeh nahi karenge” ki ek chhoti list.',
  'A plan, and writing it down':
    'Ek plan, aur use likhna',
  'One objective with three key results, and a one-page spec outline.':
    'Ek objective teen key results ke saath, aur ek page ki spec ki rooprekha.',
  'Connect a model, once':
    'Model connect kijiye, ek baar',
  'Your first conversation with a model':
    'Model ke saath aapki pehli baatcheet',
  'Why it forgets, and giving instructions':
    'Yeh bhoolta kyun hai, aur instructions dena',
  'Checking it, and sorting':
    'Use check karna, aur sorting',
  'Your first answer key, and a sorter with a score.':
    'Aapki pehli answer key, aur score ke saath ek sorter.',
  'Summaries, long text, and finding by words':
    'Summaries, lamba text, aur shabdon se dhoondhna',
  'Holiday week, light: finding by meaning':
    'Chhutti ka hafta, halka: matlab se dhoondhna',
  'Holiday week, light: how good is good':
    'Chhutti ka hafta, halka: kitna achha, achha hai',
  'Dependable answers, and letting it act':
    'Bharose laayak jawaab, aur use kaam karne dena',
  'Thinking models, the wait, and better search':
    'Sochne wale models, intezaar, aur behtar search',
  'When the page gives orders, and grading at scale':
    'Jab page hukm de, aur bade paimaane par grading',
  'What it costs, documents, and what you may send':
    'Iski keemat, documents, aur aap kya bhej sakte hain',
  'The rules, and the spec':
    'Rules, aur spec',
  'Build or buy, and designing for the wrong answer':
    'Banaayein ya kharidein, aur galat jawaab ke liye design',
  'Production depth begins: the plumbing, and choosing a model':
    'Production ki gehraai shuru: plumbing, aur model chunna',
  'Context and retrieval, at production depth':
    'Context aur retrieval, production ki gehraai par',
  'Security, and the product spec':
    'Security, aur product spec',
  'Capstone, part 1: build it and break it':
    'Capstone, part 1: banaiye aur todiye',
  'Every chapter so far built one piece of Bharat Privacy Guard. These two weeks put the pieces together. This week you plan the smallest version and build it.':
    'Ab tak har chapter ne Bharat Privacy Guard ka ek tukda banaya. Yeh do hafte tukdon ko jodte hain. Is hafte aap sabse chhota version plan karte hain aur use banaate hain.',
  'Plan your capstone':
    'Apna capstone plan kijiye',
  'Capstone, first half: build and break it':
    'Capstone, pehla aadha: banaiye aur todiye',
  'Capstone, part 2: ship it and defend it':
    'Capstone, part 2: ship kijiye aur bachaav kijiye',
  'Month 1: The problem and the plan':
    'Month 1: Problem aur plan',
  'Month 2: Meet the machine':
    'Month 2: Machine se mulaqat',
  'Month 3: Finding, and your first system':
    'Month 3: Dhoondhna, aur aapka pehla system',
  'Thinking models, better search, attacks, grading at scale, cost, documents, the rules, the spec, build or buy, and designing for wrong answers.':
    'Sochne wale models, behtar search, hamle, bade paimaane par grading, cost, documents, rules, spec, banaana ya kharidna, aur galat jawaabon ke liye design.',
  'Month 5: The same ideas, at production depth':
    'Month 5: Wahi ideas, production ki gehraai par',
  'Month 6: Ship it, and get the job':
    'Month 6: Ship kijiye, aur naukri paaiye',
  'First pass now, the long build later. The “Build it” sections in Track A and Track B are optional on the route. Write “later” next to them and move on.':
    'Abhi first pass, lamba build baad mein. Track A aur Track B ke “Build it” sections raaste par optional hain. Unke aage “baad mein” likhiye aur aage badhiye.',
  'Why now':
    'Abhi kyun',
  'Next on your route':
    'Raaste par agla kadam',
  'three lines in your notepad':
    'notepad mein teen lines',
  'To read, not to run yet':
    'Padhne ke liye, abhi chalaane ke liye nahi',
  'Each week reads a chapter of the book, the story, and then does the chapter here that practises it, the same day or the next. Month 1 is the product half, with no code and nothing to install. On a day when ten minutes feels like too much, do one page and tick it anyway.':
    'Har hafte kitaab ka ek chapter, yaani kahani, padha jaata hai aur phir yahan ka woh chapter kiya jaata hai jo use practice karwata hai, usi din ya agle din. Month 1 product wala aadha hai, na code, na kuch install karna. Jis din das minute bhi zyada lagein, ek page kijiye aur phir bhi tick kar dijiye.',
  'Today':
    'Aaj',
  'Your next step':
    'Aapka agla kadam',
  'One step at a time, in order. Each week reads a chapter of the book and then does the chapter here that practises it. Your skill numbers fill in by themselves as you answer the questions inside the chapters.':
    'Ek-ek kadam, kram se. Har hafte kitaab ka ek chapter padha jaata hai aur phir yahan ka woh chapter kiya jaata hai jo use practice karwata hai. Aapke skill numbers apne aap bharte jaate hain jaise-jaise aap chapters ke andar ke sawaalon ke jawaab dete hain.',
  'Your skill tracker (it fills in as you answer the questions in the chapters)':
    'Aapka skill tracker (yeh chapters ke sawaalon ke jawaab dete-dete bharta hai)',
  'No model needed in this chapter':
    'Is chapter mein model ki zaroorat nahi',

  /* restart the calendar (route page) */
  'Restart the calendar':
    'Calendar dobara shuru kijiye',
  'week 1 started on':
    'week 1 shuru hua',
  'The day week 1 starts':
    'Woh din jis se week 1 shuru hota hai',
  'Start week 1 on this day':
    'Week 1 is din se shuru kijiye',
  'Back to the original dates':
    'Asli tareekhon par wapas',
  'Week 1 will start on {day}. Your ticks and notes stay as they are; only the dates move.':
    'Week 1 {day} se shuru hoga. Aapke ticks aur notes jaise hain waise hi rahenge; sirf tareekhein khiskengi.',
  'Fallen behind the dates? Start week 1 again on any day you choose. Your ticks and notes stay as they are; only the dates move, so the week you are on becomes this week.':
    'Tareekhon se peechhe reh gaye? Week 1 apne chune hue kisi bhi din se dobara shuru kijiye. Aapke ticks aur notes jaise hain waise hi rahenge; sirf tareekhein khiskengi, taaki aap jis week par hain wahi is hafte ka week ban jaaye.',

  /* A1.5 GitHub basics and A3.5 Spreadsheet basics */
  'GitHub basics: a home for your work':
    'GitHub basics: aapke kaam ka ghar',
  'A repository: a folder that remembers':
    'Repository: ek folder jo yaad rakhta hai',
  'Make an account and a repository':
    'Account aur repository banaiye',
  'A commit: one saved version, with a note':
    'Commit: ek saved version, ek note ke saath',
  'Add your decision log':
    'Apna decision log jodiye',
  'In your repository, press <strong>Add file</strong>, then <strong>Create new file</strong>.':
    'Apni repository mein <strong>Add file</strong> dabaiye, phir <strong>Create new file</strong>.',
  'Press <strong>Commit changes</strong>. In the message box, write what you did, for example <em>Start the decision log</em>. Press <strong>Commit changes</strong> again.':
    '<strong>Commit changes</strong> dabaiye. Message box mein likhiye ki aapne kya kiya, jaise <em>Start the decision log</em>. Phir se <strong>Commit changes</strong> dabaiye.',
  'Gone, or still there?':
    'Chala gaya, ya abhi bhi wahin hai?',
  'No. The old line is still in the history, in the first commit. Anyone who can open the repository can find it there.':
    'Nahi. Purani line abhi bhi history mein hai, pehle commit mein. Jo bhi repository khol sakta hai, use wahan dhoondh sakta hai.',
  'What never goes in':
    'Kya kabhi andar nahi jaata',
  'One short line.':
    'Ek chhoti line.',
  'Much later, Chapter 21 shows how engineers do the same thing from their own computer, with a tool called Git. Until then, the website is all you need.':
    'Kaafi baad mein, Chapter 21 dikhata hai ki engineers yahi kaam apne computer se Git naam ke tool se kaise karte hain. Tab tak aapko sirf website chahiye.',
  'Spreadsheet basics: the formulas this course uses':
    'Spreadsheet basics: is course ke formulas',
  'Your sheet':
    'Aapki sheet',
  'A3.5 Spreadsheet basics':
    'A3.5 Spreadsheet basics',
  'A formula starts with =':
    'Formula = se shuru hota hai',
  'Your first formula':
    'Aapka pehla formula',
  'What goes wrong?':
    'Kya gadbad hoti hai?',
  'Adding up: SUM and ranges':
    'Jodna: SUM aur ranges',
  'Add up a column':
    'Ek column jodiye',
  'Percentages and rounding':
    'Percentages aur rounding',
  'A small estimate, the way A4 builds one':
    'Ek chhota estimate, waise hi jaise A4 banata hai',
  'Build a market estimate':
    'Market estimate banaiye',
  'In <code>F2</code> type the number of firms that have the problem, for example <code>9000</code>.':
    '<code>F2</code> mein un firms ki ginti likhiye jinhe yeh problem hai, jaise <code>9000</code>.',
  'In <code>F3</code> type what one firm would pay in a year, in rupees, for example <code>120000</code>.':
    '<code>F3</code> mein likhiye ki ek firm saal mein kitne rupaye degi, jaise <code>120000</code>.',
  '=…':
    '=…',

  /* the worksheet, linked from the route page and the sidebar */
  'The worksheet':
    'Worksheet',
  'everything by topic, with your notes':
    'sab kuch topic ke hisaab se, aapke notes ke saath',

  /* the 28-week strip on the home and route pages */
  'This week':
    'Is hafte',
  'Behind':
    'Peechhe',
  'Started':
    'Shuru hua',
  'Your {weeks} weeks':
    'Aapke {weeks} hafte',
});
