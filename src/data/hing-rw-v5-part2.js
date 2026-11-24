/* Hinglish: part2, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch75: Review: what your RAG system cannot do yet ---- */
  'Review: what your RAG system cannot do yet':
    'Review: aapka RAG system abhi kya nahi kar sakta',
  'You have a working RAG system':
    'Aapke paas ek chalta hua RAG system hai',
  'You know how to measure it':
    'Aapko pata hai ise measure kaise karte hain',
  'List what your system does today, and the four things it cannot do.':
    'Bata paana ki aapka system aaj kya karta hai, aur woh chaar cheezein jo woh nahi kar sakta.',
  'Before you start':
    'Shuru karne se pehle',
  'The rest of the course closes four gaps in this system. Before you read about them, find them yourself.':
    'Course ka baaki hissa is system ke chaar gaps band karta hai. Unke baare mein padhne se pehle, unhe khud dhoondhiye.',
  'Test the system four ways':
    'System ko chaar tareekon se test kijiye',
  'Run four tests':
    'Chaar tests chalaiye',
  'You found all four gaps in about twenty minutes, on a system you built yourself.':
    'Aapne chaaron gaps lagbhag bees minute mein dhoondh liye, ek aise system par jo aapne khud banaya hai.',
  'The four gaps, and where they are fixed':
    'Chaar gaps, aur woh kahan fix hote hain',
  'What failed':
    'Kya fail hua',
  'What fixes it':
    'Use kya fix karta hai',
  'Where':
    'Kahan',
  'Chapter 8':
    'Chapter 8',
  'Chapter 9':
    'Chapter 9',
  'Chapters 10 and 11':
    'Chapters 10 aur 11',
  'Chapter 13':
    'Chapter 13',
  'Rank the gaps for your use case':
    'Apne use case ke liye gaps ko rank kijiye',
  'Rank the gaps':
    'Gaps ko rank kijiye',
  'What comes next':
    'Aage kya hai',
  'Take stock: what the tool can and cannot do':
    'Take stock: tool kya kar sakta hai aur kya nahi',
  'A five-sentence description with no jargon.':
    'Bina jargon ka paanch sentences ka description.',
  'Four gaps, each shown with a row from the answer key, and ranked.':
    'Chaar gaps, har ek answer key ki ek row ke saath, aur rank kiye hue.',

  /* ---- ch8: Structured output: getting JSON you can trust ---- */
  'Structured output: getting JSON you can trust':
    'Structured output: aisa JSON jis par aap bharosa kar sakein',
  'A percentage':
    'Ek percentage',
  'Test a polite request for JSON':
    'JSON ki polite request test kijiye',
  'Tip':
    'Tip',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'Use a schema':
    'Schema use kijiye',
  'Add the schema':
    'Schema jodiye',
  'Summary':
    'Summary',
  'Make the answer format impossible to break':
    'Answer format ko todna impossible banaiye',

  /* ---- ch85: Schema design: fields that do not force a guess ---- */
  'Schema design: fields that do not force a guess':
    'Schema design: aise fields jo model ko andaaza lagane par majboor na karein',
  'Say what your schema still cannot catch, and what would catch it.':
    'Bata paana ki aapka schema ab bhi kya nahi pakad sakta, aur use kya pakdega.',
  'Cause a hallucination, then remove it':
    'Hallucination karwaiye, phir use hataiye',
  'amount: … , decision: … , quote: … , and what happens when the document says nothing':
    'amount: … , decision: … , quote: … , aur jab document kuch na bole tab kya hoga',
  'Connect it to your RAG system':
    'Ise apne RAG system se jodiye',
  'Return a record from your RAG function':
    'Apne RAG function se ek record return kijiye',
  'What you have learned':
    'Aapne kya seekha',
  'Build an extractor that says “not sure” instead of guessing':
    'Aisa extractor banaiye jo andaaza lagane ki jagah “not sure” bole',

  /* ---- ch9: Tool calling and agents: letting the model take actions ---- */
  'Tool calling and agents: letting the model take actions':
    'Tool calling aur agents: model ko actions lene dena',
  'It could not take two steps on its own':
    'Woh khud se do steps nahi le sakta tha',
  'How tool calling works':
    'Tool calling kaise kaam karta hai',
  'Build the loop':
    'Loop banaiye',
  'Define two tools':
    'Do tools define kijiye',
  'Write the loop':
    'Loop likhiye',
  'Tool descriptions are code':
    'Tool descriptions bhi code hain',
  'Description, then the one it gets confused with':
    'Description, phir woh function jisse woh confuse hota hai',
  'Make a description vague':
    'Description ko vague kijiye',
  'Each step adds cost':
    'Har step cost badhata hai',
  'A multiple, like 4×':
    'Ek multiple, jaise 4×',
  'When a tool fails':
    'Jab koi tool fail ho jaye',
  'Return an error from a tool':
    'Ek tool se error return karwaiye',
  'Reading versus acting':
    'Padhna versus action lena',
  'Always set a step limit':
    'Step limit hamesha set kijiye',
  'Remove the step limit':
    'Step limit hataiye',
  'Set <code>max_steps=50</code> and ask something the tools cannot answer: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>':
    '<code>max_steps=50</code> set kijiye aur aisa kuch poochhiye jiska jawaab tools de hi nahi sakte: <em>“What is the policy limit for interstellar travel in Martian credits?”</em>',
  'The worst-case paragraph, written before the rest.':
    'Worst-case paragraph, baaki sab se pehle likha hua.',
  'The limits, and the three rules in plain words.':
    'Limits, aur saaf shabdon mein 3 rules.',
  'Two failures you caused on purpose, each described as it looked from the outside.':
    'Aapke jaanboojhkar karwaaye gaye 2 failures, har ek bahar se jaisa dikhta tha waise describe kiya hua.',

  /* ---- ch10: Long context windows and context engineering ---- */
  'Long context windows and context engineering':
    'Long context windows aur context engineering',
  'True or not, and what you would ask':
    'Sach hai ya nahi, aur aap kya poochhenge',
  'Hide a fact at three depths':
    'Ek fact ko 3 depths par chhupaiye',
  'Note':
    'Note',
  'Context engineering':
    'Context engineering',
  'Compare sending everything with retrieval':
    'Sab kuch bhejne ko retrieval se compare kijiye',
  'instruction … functions … retrieved … history … answer … total … cut first: … which breaks …':
    'instruction … functions … retrieved … history … answer … total … sabse pehle kaatenge: … kya tootega …',
  'Test what compaction loses':
    'Dekhiye compaction kya kho deta hai',
  'Write the budget: tokens per request, cost per 1,000 requests, and what you would cut first if the bill doubled.':
    'Budget likhiye: har request ke tokens, har 1,000 requests ki cost, aur agar bill double ho jaye toh aap sabse pehle kya kaatenge.',
  'A table of tokens for each part of the request, at three sizes.':
    'Request ke har hisse ke tokens ki ek table, 3 sizes par.',
  'A result for the start, middle and end test.':
    'Shuru, beech aur ant wale test ka result.',
  'A comparison of the whole chat and the short version.':
    'Poori chat aur chhote version ka comparison.',
  'The budget, with the first thing you would cut.':
    'Budget, us pehli cheez ke saath jo aap sabse pehle kaatenge.',

  /* ---- ch11: Reasoning models: when paying for thinking helps ---- */
  'Reasoning models: when paying for thinking helps':
    'Reasoning models: jab sochne ke paise dena fayde ka hota hai',
  'A request is a budget with parts':
    'Ek request ek budget hai jisme kai hisse hote hain',
  'What a reasoning model does':
    'Reasoning model kya karta hai',
  'Compare two tasks at two settings':
    'Do tasks ko do settings par compare kijiye',
  'So what did you just buy? Extra seconds and extra tokens on every request, whether or not the answer got better.':
    'Toh aapne abhi kya kharida? Har request par extra seconds aur extra tokens, chahe jawaab behtar hua ho ya nahi.',
  'Two that gain, two that do not':
    'Do jahan fayda hota hai, do jahan nahi',
  'Test it on your own requests':
    'Apni hi requests par test kijiye',
  'Fast model correct':
    'Fast model sahi',
  'Fast model wrong':
    'Fast model galat',
  'Reasoning correct':
    'Reasoning sahi',
  'Waste: you paid for nothing.':
    'Waste: aapne bekaar mein paise diye.',
  'Reasoning wrong':
    'Reasoning galat',
  'Three things to watch for':
    'Teen cheezon par nazar rakhiye',
  'Give a reasoning model the wrong evidence':
    'Reasoning model ko galat evidence dijiye',
  'Reasoning when … not when … I would know I was wrong if …':
    'Reasoning tab jab … tab nahi jab … Mujhe pata chalega ki main galat tha agar …',
  'Use reasoning on a trivial task':
    'Ek trivial task par reasoning use kijiye',
  'Find one sentence in your data where reasoning changes nothing but costs several times more.':
    'Apne data mein ek aisa sentence dhoondhiye jahan reasoning se kuch nahi badla lekin cost kai guna zyada lagi.',
  'Four sets of results, each with its quality, cost and time.':
    'Chaar sets of results, har ek ki quality, cost aur time ke saath.',
  'A rule of thumb for when the extra cost is no longer worth it.':
    'Ek rule of thumb ki extra cost kab fayde ki nahi rehti.',
  'One sentence where reasoning changed nothing.':
    'Ek sentence jahan reasoning se kuch nahi badla.',

  /* ---- ch115: Latency: designing for the wait ---- */
  'Latency: designing for the wait':
    'Latency: wait ke liye design karna',
  'You measured what it costs in money and in seconds.':
    'Aapne naapa tha ki isme paise aur seconds kitne lagte hain.',
  'Streaming changes how fast it feels':
    'Streaming se feel badal jaata hai ki response kitna tez hai',
  'Time a request, then stream it':
    'Ek request ko time kijiye, phir use stream kijiye',
  'Your provider or model does not stream':
    'Aapka provider ya model stream nahi karta',
  'Three ways to handle a wait':
    'Wait ko sambhalne ke teen tareeke',
  'Compare a spinner with a progress message':
    'Spinner aur progress message ka comparison kijiye',
  'Watch out':
    'Dhyaan rakhiye',
  'Stream or run in the background?':
    'Stream kijiye ya background mein chalaiye?',
  'What you would change':
    'Aap kya badlenge',
  'Design the wait for a live chat':
    'Live chat ke liye wait design kijiye',
  'Write what happens in the slowest case, and what the person can do about it.':
    'Likhiye ki sabse slow case mein kya hota hai, aur insaan uske baare mein kya kar sakta hai.',
  'The median and the slowest of twenty timed requests.':
    'Bees timed requests ka median aur sabse slow wala.',
  'The time split into parts, with the parts you could shorten marked.':
    'Time hisson mein baata hua, jin hisson ko chhota kiya ja sakta hai woh mark kiye hue.',
  'The exact words shown at one, three and ten seconds.':
    'Ek, teen aur das seconds par dikhne wale exact words.',
  'Your speed rule, as a number.':
    'Aapka speed rule, ek number ke roop mein.',

  /* ---- ch12: Better retrieval: hybrid search, reranking, context and filters ---- */
  'Better retrieval: hybrid search, reranking, context and filters':
    'Behtar retrieval: hybrid search, reranking, context aur filters',
  'Technique 1: Hybrid search':
    'Technique 1: Hybrid search',
  'Write keyword search in code':
    'Code mein keyword search likhiye',
  'Combine the two rankings':
    'Dono rankings ko combine kijiye',
  'Notes':
    'Notes',
  'Ch.5 numbers':
    'Ch.5 ke numbers',
  'Technique 2: Reranking':
    'Technique 2: Reranking',
  'How much does it move?':
    'Kitna badalta hai?',
  'Technique 3: Contextual retrieval':
    'Technique 3: Contextual retrieval',
  'Technique 4: Metadata filtering':
    'Technique 4: Metadata filtering',
  'One more: agentic search':
    'Ek aur: agentic search',
  'Make finding better, one change at a time':
    'Dhoondhna behtar banaiye, ek-ek change karke',

  /* ---- ch13: Prompt injection: when your documents give the orders ---- */
  'Prompt injection: when your documents give the orders':
    'Prompt injection: jab aapke documents hukum dene lagte hain',
  'Tools let the model act':
    'Tools model ko kaam karne dete hain',
  'What prompt injection is':
    'Prompt injection kya hota hai',
  'This time the push comes from somewhere else. It comes from <strong>the documents your system reads.</strong>':
    'Is baar zor kahin aur se aata hai. Woh aata hai <strong>un documents se jo aapka system padhta hai.</strong>',
  'The lethal trifecta':
    'Lethal trifecta',
  'Why this matters':
    'Yeh kyun zaroori hai',
  'Defence':
    'Defence',
  'None (Ch.7 briefing)':
    'None (Ch.7 briefing)',
  'Stern instruction-hierarchy':
    'Stern instruction-hierarchy',
  'How data gets out':
    'Data bahar kaise nikalta hai',
  'private data: … outside content: … outward: … remove: … cost: …':
    'private data: … outside content: … outward: … remove: … cost: …',
  'What it changes, in one line':
    'Yeh kya badalta hai, ek line mein',
  'What helps':
    'Kya madad karta hai',
  'Never give one system all three parts of the trifecta at once.':
    'Kisi ek system ko trifecta ke teeno hisse ek saath kabhi mat dijiye.',
  'Question':
    'Sawaal',
  'Yes / No':
    'Yes / No',
  'Private data':
    'Private data',
  'Can it read anything not already public?':
    'Kya woh aisa kuch padh sakta hai jo pehle se public nahi hai?',
  'Untrusted content':
    'Untrusted content',
  'Does any input come from outside your control, such as email, uploads, the web, tickets or supplier documents?':
    'Kya koi input aapke control ke bahar se aata hai, jaise email, uploads, web, tickets ya supplier documents?',
  'External communication':
    'External communication',
  'The exposure note.':
    'Exposure note.'
});
