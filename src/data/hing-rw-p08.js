/* Hinglish: p08 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Schema design: fields that do not force a guess':
    'Schema design: aise fields jo andaaza lagaane par majboor na karein',
  'A schema fixes the format but not the content. A badly designed field can force the model to invent a value. You will cause a hallucination with a schema choice, then remove it with three design techniques.':
    'Schema format tay karta hai, content nahi. Bura design kiya field model ko value banaane par majboor kar sakta hai. Aap ek schema choice se hallucination paida karenge, phir teen design techniques se use hataayenge.',
  'Design fields where “not stated” is a valid answer rather than a gap to fill.':
    'Aise fields design karna jahan “nahi bataaya gaya” ek valid jawab ho, bharne wali khaali jagah nahi.',
  'Cause a hallucination with a schema choice, and then remove it.':
    'Ek schema choice se hallucination paida karna, aur phir use hataana.',
  'Say what your schema still cannot catch, and what would catch it.':
    'Batana ki aapka schema ab bhi kya nahi pakad sakta, aur use kya pakdega.',
  'An extractor that cannot guess':
    'Aisa extractor jo andaaza na lagaye',
  'You have seen a schema remove a failure, and a badly designed field cause one. Build a real extractor for a document type you handle, designed so the failure you worry about most has nowhere to appear.':
    'Aapne dekha ki schema ek failure hataata hai, aur bura design kiya field ek failure paida karta hai. Apne kisi document type ke liye ek asli extractor banaiye, aise design ke saath ki jis failure se aap sabse zyada darte hain uske liye koi jagah na ho.',
  'Give uncertainty somewhere to go, such as a needs_review option, an optional field or a “not stated” flag, so the model never has to invent.':
    'Anishchitata ko jaane ki jagah dijiye, jaise needs_review option, optional field ya “not stated” flag, taaki model ko kabhi banaana na pade.',
  'Require a quote field with the exact words each value came from, and check it on ten real documents.':
    'Ek quote field zaroori kijiye jisme har value ke exact shabd hon, aur das asli documents par use check kijiye.',
  'Run twenty documents through it, including three that leave out the field people most want. Count the invented values.':
    'Bees documents chalaiye, jinme teen aise hon jinme woh field nahi jo log sabse zyada chahte hain. Banaayi hui values giniye.',
  'For any invented value, change a field rather than the wording, and run it again.':
    'Har banaayi hui value ke liye wording ki jagah field badaliye, aur phir chalaiye.',
  'On documents that leave out the key field, nothing is invented, and you can point to the field definition that prevents it.':
    'Key field na hone wale documents par kuchh nahi banaya jaata, aur aap us field definition par ungli rakh sakte hain jo ise rokti hai.',
  'Every extracted value includes the words it came from.':
    'Har nikaali gayi value mein woh shabd hain jahan se woh aayi.',
  'A schema removes malformed replies':
    'Schema kharaab replies hata deta hai',
  'The format is guaranteed. Nothing else is.':
    'Format ki guarantee hai. Aur kisi cheez ki nahi.',
  'Instructions discourage; they do not prevent':
    'Instructions hatotsaahit karti hain; rokti nahi',
  'That is why this chapter changes fields rather than wording.':
    'Isiliye yeh chapter wording nahi, fields badalta hai.',
  'Keep using <code>chapter-8</code>. You need the schema from the last chapter, and a document that is missing the field people most want.':
    '<code>chapter-8</code> hi use karte rahiye. Aapko pichhle chapter ka schema chahiye, aur ek aisa document jismein woh field nahi jo log sabse zyada chahte hain.',
  'Three field-design techniques':
    'Field design ki teen techniques',
  'Three techniques make a schema much safer. Try them in this tool first:':
    'Teen techniques schema ko kaafi surakshit banaati hain. Pehle inhe is tool mein try kijiye:',
  '<strong>Use fixed choices instead of free text.</strong> A field that can only be <em>approved</em>, <em>rejected</em> or <em>needs_review</em> cannot drift into “Approved (pending)” and break the code that reads it.':
    '<strong>Free text ki jagah fixed choices use kijiye.</strong> Jo field sirf <em>approved</em>, <em>rejected</em> ya <em>needs_review</em> ho sakta hai, woh “Approved (pending)” mein nahi bhatak sakta aur use padhne wale code ko nahi tod sakta.',
  '<strong>Allow “not stated”.</strong> If a field is required, you have told the model to invent a value whenever the document says nothing. Let the field be empty, and add a separate flag that records the absence.':
    '<strong>“Not stated” ki ijaazat dijiye.</strong> Agar field zaroori hai, to aapne model ko kaha hai ki jab bhi document kuchh na kahe, value bana de. Field ko khaali rehne dijiye, aur ek alag flag jodiye jo gair-maujoodgi record kare.',
  '<strong>Require a quotation.</strong> A field holding the exact words the value came from is more useful than a confidence score. A person can check it in seconds, and inventing a value now means inventing a quotation too, which is much easier to catch.':
    '<strong>Quotation zaroori kijiye.</strong> Value jin exact shabdon se aayi unhe rakhne wala field confidence score se zyada kaam ka hai. Insaan use seconds mein check kar sakta hai, aur ab value banaane ka matlab quotation bhi banaana hai, jo pakadna kahin aasaan hai.',
  'Cause a hallucination, then remove it':
    'Hallucination paida kijiye, phir hataaiye',
  'Test a required field on a document with no value':
    'Bina value wale document par zaroori field test kijiye',
  'Run the schema version on a text that contains <em>no amount at all</em>.':
    'Schema version ko aise text par chalaiye jismein <em>koi amount hai hi nahi</em>.',
  'With a required number field, the model invents an amount, because you gave it no valid alternative. With an optional field and a needs_review option, it returns null. <strong>A schema design choice caused the hallucination</strong>, and a different choice removed it.':
    'Zaroori number field ke saath model ek amount bana deta hai, kyunki aapne use koi valid vikalp nahi diya. Optional field aur needs_review option ke saath woh null lautata hai. <strong>Ek schema design choice ne hallucination paida kiya</strong>, aur doosri choice ne use hata diya.',
  'Turn a complaint into a schema. The complaint: <em>the extractor keeps guessing settlement amounts for claims that do not state one.</em> Write the field definitions you would give an engineer, so that guessing becomes impossible rather than discouraged.':
    'Ek shikaayat ko schema mein badaliye. Shikaayat: <em>extractor un claims ke liye settlement amounts ka andaaza lagaata rehta hai jo koi amount nahi batate.</em> Woh field definitions likhiye jo aap engineer ko denge, taaki andaaza lagaana hatotsaahit nahi, namumkin ho jaaye.',
  'Make “no amount” a valid answer. Let <em>amount</em> be empty and optional. Add <em>amount_stated</em> as true or false, so the absence is recorded explicitly. Require a <em>quote</em> field with the exact words the number came from. Limit <em>decision</em> to a fixed set that includes <em>needs_review</em>, so uncertainty has a valid place to go. None of this is a better instruction. The fields simply leave no room for the failure.':
    '“Koi amount nahi” ko valid jawab banaiye. <em>amount</em> ko khaali aur optional rehne dijiye. <em>amount_stated</em> ko true ya false ki tarah jodiye, taaki gair-maujoodgi saaf record ho. Ek <em>quote</em> field zaroori kijiye jisme number ke exact shabd hon. <em>decision</em> ko ek fixed set tak seemit kijiye jisme <em>needs_review</em> ho, taaki anishchitata ke paas valid jagah ho. In mein se kuchh bhi behtar instruction nahi hai. Fields bas failure ke liye jagah nahi chhodte.',
  'Connect it to your RAG system':
    'Ise apne RAG system se jodiye',
  'Return a record from your RAG function':
    'Apne RAG function se record lautaiye',
  'Change <code>rag_answer</code> to return a record instead of a paragraph, with <code>answer</code>, <code>found</code> (true or false), <code>source_chunk_ids</code> (a list) and <code>supporting_quote</code>. Rerun the three test questions.':
    '<code>rag_answer</code> ko paragraph ki jagah record lautaane wala banaiye, jisme <code>answer</code>, <code>found</code> (true ya false), <code>source_chunk_ids</code> (ek list) aur <code>supporting_quote</code> ho. Teeno test sawaal phir chalaiye.',
  'The cricket question now returns <code>found: false</code>. Your code can branch on that value directly. Before, “Not found in the provided documents” was a sentence a person had to read. Now it is a routing decision.':
    'Cricket wala sawaal ab <code>found: false</code> lautata hai. Aapka code seedha us value par branch kar sakta hai. Pehle “Not found in the provided documents” ek sentence tha jise insaan ko padhna padta tha. Ab yeh routing decision hai.',
  'Tool calling and agents: letting the model take actions':
    'Tool calling aur agents: model ko action lene dena',
  'An agent is a loop: the model asks for a tool, your code runs it, and the result goes back to the model until it finishes. You will build that loop yourself, then break it four ways to see what an agent does on a bad day.':
    'Agent ek loop hai: model tool maangta hai, aapka code use chalaata hai, aur result model ko wapas jaata hai jab tak woh khatam na kare. Aap woh loop khud banayenge, phir use chaar tarah todenge taaki dekh sakein ki bure din par agent kya karta hai.',
  'Explain why a six-step agent can cost much more than six single calls.':
    'Samjhaana ki chhe step ka agent chhe single calls se kahin zyada mehnga kyun ho sakta hai.',
  'Name what must be true before you let an agent take an action that cannot be undone.':
    'Batana ki agent ko wapas na hone wala action lene dene se pehle kya sach hona chahiye.',
  'Specify an agent, starting with its limits':
    'Ek agent specify kijiye, uski seemaon se shuru karke',
  'You have built the loop, broken a description, fed it an error and removed its step limit. What matters most about an agent is what it can do on a bad day. Specify one for a real task, and write its limits before its capabilities.':
    'Aapne loop banaya, ek description toda, use error diya aur uski step limit hataayi. Agent ke baare mein sabse zaroori yeh hai ki woh bure din par kya kar sakta hai. Ek asli task ke liye ek specify kijiye, aur uski kshamataon se pehle uski seemayein likhiye.',
  'Name a task in your own work worth automating, and the two or three tools it would need.':
    'Apne kaam ka ek automate karne laayak task bataiye, aur uske liye zaroori do-teen tools.',
  'Write each tool description as if it were the only documentation, because for the model it is.':
    'Har tool description aise likhiye jaise wahi akela documentation ho, kyunki model ke liye wahi hai.',
  'Before listing capabilities, write the worst case: the worst thing this agent could do if every call it makes is wrong.':
    'Kshamatayein list karne se pehle sabse bura case likhiye: agar yeh agent har call galat kare to sabse bura kya kar sakta hai.',
  'Set the limits: maximum steps, maximum spend, and what happens when either runs out.':
    'Seemayein tay kijiye: maximum steps, maximum kharcha, aur kisi ke khatam hone par kya hota hai.',
  'Decide which actions need a person to approve them, and write the rule as a clear condition.':
    'Tay kijiye ki kin actions ko insaan ki manzoori chahiye, aur rule ko ek saaf shart ki tarah likhiye.',
  'Build it, then break it on purpose: make one description vague, force one error, and record what the agent said versus what it did.':
    'Ise banaiye, phir jaan-boojh kar todiye: ek description dhundhla kijiye, ek error force kijiye, aur record kijiye ki agent ne kya kaha aur kya kiya.',
  'The agent completes the task end to end, and stops cleanly when it reaches its limit.':
    'Agent task ko shuru se ant tak poora karta hai, aur limit par pahunch kar saaf ruk jaata hai.',
  'You have made it fail at least twice on purpose, and can describe how each failure looked from outside.':
    'Aapne use kam se kam do baar jaan-boojh kar fail karaaya, aur bata sakte hain ki har failure bahar se kaisa dikha.',
  'Someone who has never seen the code could read your worst-case paragraph and decide whether to allow the agent.':
    'Jisne kabhi code nahi dekha, woh aapka sabse-bura-case paragraph padh kar tay kar sakta hai ki agent ko ijaazat de ya nahi.',
  'The second gap from Chapter 7.5. This chapter closes it.':
    'Chapter 7.5 ki doosri kami. Yeh chapter use band karta hai.',
  'The model sees only the context your app sends':
    'Model sirf wahi context dekhta hai jo aapka app bhejta hai',
  'So anything that loops gets expensive quickly.':
    'Isliye loop karne wali har cheez jaldi mehngi ho jaati hai.',
  'A schema enforces a format':
    'Schema format laagu karta hai',
  'You can require structured output instead of asking for it.':
    'Aap structured output maangne ki jagah zaroori kar sakte hain.',
  'Open a new notebook called <code>chapter-9</code> and run the warm-up cells.':
    '<code>chapter-9</code> naam ka naya notebook kholiye aur warm-up cells chalaiye.',
  'Until now the model only produced text for a person to read, or fields for your code to store. In this chapter it takes actions: it looks something up, sends an email, books a slot or updates a record.':
    'Ab tak model sirf insaan ke padhne ka text, ya aapke code ke store karne ke fields banaata tha. Is chapter mein woh action leta hai: kuchh dhoondhta hai, email bhejta hai, slot book karta hai ya record update karta hai.',
  'How tool calling works':
    'Tool calling kaise kaam karta hai',
  'The mechanism is simple. It has five steps:':
    'Mechanism simple hai. Isme paanch steps hain:',
  'You describe the available functions in the request: each one’s name, what it does and what arguments it takes. This is just more text.':
    'Aap request mein uplabdh functions describe karte hain: har ek ka naam, woh kya karta hai aur kaunse arguments leta hai. Yeh bas aur text hai.',
  'The model replies with a request instead of prose: <em>call this function, with these arguments.</em>':
    'Model prose ki jagah ek request ke saath reply karta hai: <em>is function ko in arguments ke saath call karo.</em>',
  '<strong>Your code</strong> runs the function. The model cannot run anything; it can only ask.':
    '<strong>Aapka code</strong> function chalaata hai. Model kuchh nahi chala sakta; woh sirf maang sakta hai.',
  'The model either asks for another call or writes a final answer. This repeats until it stops, or until you stop it.':
    'Model ya to ek aur call maangta hai ya final jawab likhta hai. Yeh tab tak chalta hai jab tak woh ruk na jaaye, ya aap use rok na dein.',
  'An agent is a model, a set of functions, a loop and a rule for when to stop. Teams often forget to specify the stopping rule.':
    'Agent ek model, functions ka ek set, ek loop aur rukne ka ek rule hai. Teams aksar rukne ka rule specify karna bhool jaati hain.',
  'Build the loop':
    'Loop banaiye',
  'Define two tools':
    'Do tools define kijiye',
  'Define two tools: one clearly useful, and one deliberately similar, so you can watch the model choose between them.':
    'Do tools define kijiye: ek saaf taur par kaam ka, aur ek jaan-boojh kar milta-julta, taaki aap model ko unke beech chunte dekh sakein.',
  'There is no output yet. You have defined the tools but not used them.':
    'Abhi koi output nahi. Aapne tools define kiye hain par use nahi kiye.',
  'Write the loop':
    'Loop likhiye',
  'Type this rather than pasting it. It is short, and it is the whole mechanism of an agent.':
    'Ise paste karne ki jagah type kijiye. Yeh chhota hai, aur yahi agent ka poora mechanism hai.',
  'You see a trace: <code>get_exchange_rate</code>, then <code>get_policy_limit</code>, then a final answer that combines both. The model split the question into two lookups and combined the results. The loop itself is simple code; the model decides which tool to request next.':
    'Aapko ek trace dikhta hai: <code>get_exchange_rate</code>, phir <code>get_policy_limit</code>, phir dono ko jodne wala final jawab. Model ne sawaal ko do lookups mein toda aur results jode. Loop khud simple code hai; model tay karta hai ki agla kaunsa tool maange.',
  'Step through a run in this tool and watch where it goes wrong:':
    'Is tool mein ek run step by step chalaiye aur dekhiye kahan galat hota hai:',
  'Tool descriptions are code':
    'Tool descriptions code hain',
  'The model chooses a function by reading its description. There is no other selection mechanism. A vague description leads to the wrong function being called, which is a writing bug, not a model failure.':
    'Model function uska description padh kar chunta hai. Chunne ka koi aur mechanism nahi hai. Dhundhla description galat function call karwaata hai, jo likhne ka bug hai, model ka failure nahi.',
  'Write a tool description. The function looks up a customer’s current outstanding balance: not their payment history, and not their credit limit. Write the description the model will read. Then name the function it is most likely to be confused with.':
    'Ek tool description likhiye. Function customer ka current outstanding balance dhoondhta hai: payment history nahi, aur credit limit nahi. Woh description likhiye jo model padhega. Phir woh function bataiye jisse iski sabse zyada ulajhne ki sambhavna hai.',
  'A good description says what the function returns, what it does <em>not</em> return, and when to use something else. For example: “Returns the current outstanding balance for one customer as of today. Does not return payment history, credit limit or projected dues; use get_payment_history or get_credit_terms for those.” Naming the similar function inside the description prevents a common confusion that many teams only find after launch.':
    'Achha description batata hai ki function kya lautata hai, kya <em>nahi</em> lautata, aur kab kuchh aur use karna hai. Jaise: “Ek customer ka aaj tak ka current outstanding balance lautata hai. Payment history, credit limit ya projected dues nahi lautata; unke liye get_payment_history ya get_credit_terms use karo.” Description ke andar milte-julte function ka naam lena ek aam uljhan rokta hai jo kai teams launch ke baad hi dhoondhti hain.',
  'Make a description vague':
    'Ek description dhundhla kijiye',
  'Change the description of <code>get_policy_limit</code> to something vague, such as <code>"Returns data about expenses."</code>, and run the same question again.':
    '<code>get_policy_limit</code> ka description kuchh dhundhla kar dijiye, jaise <code>"Returns data about expenses."</code>, aur wahi sawaal phir chalaiye.',
  'You get the wrong tool, no tool, or the right tool with a meaningless argument. The model did not change. You edited one sentence and made the system worse. <strong>Treat tool descriptions as code</strong>: review and test them.':
    'Aapko galat tool, koi tool nahi, ya sahi tool be-matlab argument ke saath milta hai. Model nahi badla. Aapne ek sentence edit kiya aur system bigaad diya. <strong>Tool descriptions ko code ki tarah treat kijiye</strong>: unka review aur test kijiye.',
  'Each step adds cost':
    'Har step cost jodta hai',
  'As Chapter 1 showed, every request includes the context your app sends. A loop that sends the growing conversation at every step can become expensive quickly.':
    'Jaisa Chapter 1 ne dikhaya, har request mein woh context hota hai jo aapka app bhejta hai. Har step par badhti baatcheet bhejne wala loop jaldi mehnga ho sakta hai.',
  'Predict: a single call sends about 1,200 tokens. A six-step agent sends a growing conversation at every step. Roughly how many times the cost of a single call is the whole run?':
    'Andaaza lagaiye: ek single call lagbhag 1,200 tokens bhejti hai. Chhe step ka agent har step par badhti baatcheet bhejta hai. Poora run single call ki cost ka mota-mota kitna guna hai?',
  'It depends on the messages, tool outputs, summaries, caching and pricing. If the loop sends a growing transcript each time, the input grows faster than the number of steps. Measure the actual input and output tokens for each step instead of relying on a rule of thumb.':
    'Yeh messages, tool outputs, summaries, caching aur pricing par nirbhar hai. Agar loop har baar badhta transcript bhejta hai, to input steps ki sankhya se tez badhta hai. Rule of thumb par nirbhar rehne ki jagah har step ke asli input aur output tokens naapiye.',
  'So an agent that “only” adds two more steps can double the bill. The number of steps is a product decision with a cost attached.':
    'Isliye jo agent “bas” do steps aur jodta hai woh bill doguna kar sakta hai. Steps ki sankhya ek product decision hai jiske saath cost judi hai.',
  'When a tool fails':
    'Jab tool fail ho',
  'Return an error from a tool':
    'Tool se error lautaiye',
  'Make <code>run_tool</code> return <code>{"error": "service unavailable"}</code> for the rate lookup, and run it again.':
    '<code>run_tool</code> ko rate lookup ke liye <code>{"error": "service unavailable"}</code> lautaane wala banaiye, aur phir chalaiye.',
  'Watch closely. Some runs handle it correctly: “I could not retrieve the rate.” Others give a confident answer <em>with a plausible exchange rate in it</em>. That is the hallucination from Chapter 2, now inside a workflow another system trusts. Count how many of five runs report success after a failure.':
    'Dhyaan se dekhiye. Kuchh runs ise sahi sambhalte hain: “Main rate nahi la saka.” Doosre ek confident jawab dete hain <em>jisme ek sahi lagne wala exchange rate hota hai</em>. Yeh Chapter 2 ka hallucination hai, ab ek aise workflow ke andar jis par doosra system bharosa karta hai. Giniye ki paanch mein se kitne runs failure ke baad success report karte hain.',
  'Reading versus acting':
    'Padhna banaam karna',
  'A function that reads data is recoverable: at worst you get bad information and try again. A function that sends, pays, deletes or books cannot be undone. The email has gone, and the refund has been issued.':
    'Data padhne wala function wapas sambhala ja sakta hai: sabse bura yeh ki galat jaankari mili aur aap phir koshish karte hain. Bhejne, bhugtaan karne, delete karne ya book karne wala function palta nahi ja sakta. Email ja chuka hai, aur refund ho chuka hai.',
  'That difference should decide where a person approves actions in the loop. It is a product decision, and it is yours to make.':
    'Yahi farq tay karna chahiye ki loop mein insaan kahan actions manzoor kare. Yeh product decision hai, aur yeh aapka faisla hai.',
  'Always set a step limit':
    'Hamesha step limit tay kijiye',
  'Remove the step limit':
    'Step limit hataaiye',
  'Set <code>max_steps=50</code> and ask something the tools cannot answer: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>':
    '<code>max_steps=50</code> set kijiye aur kuchh aisa poochhiye jiska tools jawab nahi de sakte: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>',
  'The model makes repeated tool calls, often the same one with slightly different arguments, until the limit stops it. Check your token count. Set <code>max_steps=5</code> again, and add a rule that two identical calls in a row end the run.':
    'Model baar-baar tool calls karta hai, aksar wahi thode alag arguments ke saath, jab tak limit use rok na de. Apna token count dekhiye. Phir <code>max_steps=5</code> set kijiye, aur rule jodiye ki lagaataar do ek jaisi calls run khatam kar dein.'

});
