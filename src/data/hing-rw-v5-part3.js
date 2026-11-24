/* Hinglish: part3, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch14: Evaluation at scale: code checks and LLM judges ---- */
  'Evaluation at scale: code checks and LLM judges':
    'Evaluation scale par: code checks aur LLM judges',
  'You wrote the answers down first':
    'Aapne jawaab pehle likh liye the',
  'Before you start':
    'Shuru karne se pehle',
  'Cost':
    'Cost',
  'Good at':
    'Kis mein achha',
  'Bad at':
    'Kis mein kamzor',
  'Almost free':
    'Lagbhag free',
  '<strong>A person</strong>':
    '<strong>Ek insaan</strong>',
  'Slow, and two people often disagree':
    'Dheema, aur do log aksar ek-doosre se sehmat nahi hote',
  'Start with code checks':
    'Code checks se shuru kijiye',
  'Write the code checks':
    'Code checks likhiye',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'Build an LLM judge':
    'LLM judge banaiye',
  'A fraction, like 7/10':
    'Ek fraction, jaise 7/10',
  'Tip':
    'Tip',
  'Summary':
    'Summary',
  'Build an automatic marker, and check how far to trust it':
    'Ek automatic marker banaiye, aur check kijiye ki us par kitna bharosa karein',
  'Your marking rules.':
    'Aapke marking rules.',
  'The range of marks where you would not trust the marker.':
    'Marks ki woh range jahan aap marker par bharosa nahi karenge.',

  /* ---- ch145: Error analysis: reading failures by hand ---- */
  'Error analysis: reading failures by hand':
    'Error analysis: failures ko haath se padhna',
  'What error analysis is':
    'Error analysis kya hai',
  'Analyse twenty outputs by hand':
    'Haath se bees outputs analyse kijiye',
  'Turn failures into test cases':
    'Failures ko test cases banaiye',
  'Note':
    'Note',
  'The answer key, version 3, with about 50 rows.':
    'Answer key, version 3, lagbhag 50 rows ke saath.',

  /* ---- ch15: Cost modelling: what an AI feature really costs ---- */
  'Cost modelling: what an AI feature really costs':
    'Cost modelling: ek AI feature asal mein kitne ka padta hai',
  'A multiple, like 5×':
    'Ek multiple, jaise 5×',
  'The four multipliers':
    'Chaar multipliers',
  'Multiplier':
    'Multiplier',
  'Chapter':
    'Chapter',
  'What it does':
    'Yeh kya karta hai',
  'Ch. 6':
    'Ch. 6',
  'Ch. 8':
    'Ch. 8',
  'Ch. 9':
    'Ch. 9',
  'Ch. 11':
    'Ch. 11',
  'Measure your own token counts':
    'Apne khud ke token counts measure kijiye',
  'Measure real token counts':
    'Asli token counts measure kijiye',
  'Add the multipliers':
    'Multipliers jodiye',
  'Five ways to lower the cost':
    'Cost kam karne ke paanch tareeke',
  'Build a cascade':
    'Cascade banaiye',
  'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … and it is wrong if …':
    'base … × retrieved … × retries … × steps … × thinking … = per query … monthly … aur galat tab hoga jab …',
  'Report cost, speed and accuracy together':
    'Cost, speed aur accuracy ek saath report kijiye',
  'Build a comparison table':
    'Comparison table banaiye',
  'Cost / query':
    'Cost / query',
  'p50':
    'p50',
  'p95':
    'p95',
  'Accuracy (of 9)':
    'Accuracy (9 mein se)',
  'Baseline k=3':
    'Baseline k=3',
  'k=8':
    'k=8',
  'Cascade':
    'Cascade',
  'Reasoning always on':
    'Reasoning hamesha on',
  'The margin question':
    'Margin wala sawaal',
  'Calculate the margin':
    'Margin nikaliye',
  'Build a cost model from measurements':
    'Measurements se cost model banaiye',
  'The share of messages that reach the model in the cascade.':
    'Cascade mein kitne messages model tak pahunchte hain, uska share.',
  'The three numbers: today, ten times the volume, and no cheap path.':
    'Teen numbers: aaj, 10 guna volume, aur sasta rasta nahi.',
  'The price below which the tool loses money.':
    'Woh price jisse neeche tool ko nuksaan hota hai.',

  /* ---- ch16: Document extraction: tables, scans and images ---- */
  'Document extraction: tables, scans and images':
    'Document extraction: tables, scans aur images',
  'Real documents are pages, not text':
    'Asli documents pages hote hain, text nahi',
  'A percentage':
    'Ek percentage',
  'Two ways to handle pages':
    'Pages sambhalne ke do tareeke',
  'Turn the page into text first':
    'Page ko pehle text banaiye',
  'Exact codes and IDs':
    'Exact codes aur IDs',
  'Checking it later':
    'Baad mein check karna',
  'Check every cell':
    'Har cell check kijiye',
  'Test the tool on photos of ID cards':
    'ID cards ki photos par tool ko test kijiye',
  'Ten made-up ID images and the text read from them, with the mistakes marked.':
    '10 made-up ID images aur unse padha gaya text, galtiyan mark ki hui.',

  /* ---- ch165: Data handling: what you are allowed to send ---- */
  'Data handling: what you are allowed to send':
    'Data handling: aap kya bhejne ke liye allowed hain',
  'Sort your three documents':
    'Apne teen documents sort kijiye',
  'Sort the documents':
    'Documents sort kijiye',
  'Three questions':
    'Teen sawaal',
  'Read the terms for one tool you use':
    'Jo tool aap use karte hain, uski terms padhiye',
  'Write the three answers down with the date. This starts the vendor file that Chapter 17 asks for.':
    'Teeno jawaab date ke saath likh lijiye. Yahin se woh vendor file shuru hoti hai jo Chapter 17 mangta hai.',
  'Write a rule people can follow':
    'Aisa rule likhiye jise log follow kar sakein',
  'You may send … . Never send … . If it came from a customer, … . If unsure, … .':
    'Aap bhej sakte hain … . Kabhi mat bhejiye … . Agar customer se aaya ho, toh … . Agar unsure hon, toh … .',
  'There is one last catch, and it surprises many teams.':
    'Ek aakhri dikkat hai, aur kai teams ise dekh kar hairaan hote hain.',
  'Watch out':
    'Dhyaan rakhiye',
  'Write the rule for what the tool may send to an outside provider':
    'Aisa rule likhiye ki outside provider ko tool kya bhej sakta hai',
  'A table of six to ten kinds of text, each marked may send, never send or ask first.':
    '6 se 10 tarah ke text ka ek table, har ek par mark: bhej sakte hain, kabhi nahi bhejna ya pehle poochhna hai.',

  /* ---- ch17: AI governance: risk tiers, system cards and oversight ---- */
  'AI governance: risk tiers, system cards and oversight':
    'AI governance: risk tiers, system cards aur oversight',
  'Risk depends on the use, not the model':
    'Risk model par nahi, use par depend karta hai',
  'The table below shows four levels of risk. Read it from top to bottom. As you go down, what is required gets lighter.':
    'Neeche ki table mein risk ke chaar levels hain. Ise upar se neeche padhiye. Jaise-jaise neeche jaayenge, jo cheezein zaroori hoti hain woh halki hoti jaayengi.',
  'Level':
    'Level',
  'What is required':
    'Kya zaroori hai',
  'Typical examples':
    'Aam examples',
  'Not allowed':
    'Allowed nahi',
  'Nothing makes it acceptable':
    'Kuch bhi ise acceptable nahi banata',
  'High risk':
    'High risk',
  'Minimal':
    'Minimal',
  'Write a system card':
    'Ek system card likhiye',
  'Write the system card':
    'System card likhiye',
  'Use the generator on this page, or write it by hand under these headings.':
    'Is page ka generator use kijiye, ya in headings ke neeche haath se likhiye.',
  '<strong>Purpose.</strong> Say what it does and for whom, in two sentences.':
    '<strong>Purpose.</strong> Do sentences mein likhiye ki yeh kya karta hai aur kiske liye.',
  '<strong>Data.</strong> Say where the data comes from, your right to use it, how long you keep it, and where it is stored.':
    '<strong>Data.</strong> Likhiye ki data kahan se aata hai, use karne ka aapka haq kya hai, kitne time tak rakhte hain, aur kahan store hota hai.',
  'Why this matters':
    'Yeh kyun zaroori hai',
  'Run a deletion drill':
    'Deletion drill chalaiye',
  'Trace one document':
    'Ek document ko trace kijiye',
  'Pick one document from your collection. List every place a copy of it, or something made from it, exists. Next to each, write how you would remove it.':
    'Apne collection se ek document chuniye. Un sab jagahon ki list banaiye jahan uski copy, ya uss se bani koi cheez, maujood hai. Har ek ke saath likhiye ki aap use kaise hataayenge.',
  'Location':
    'Jagah',
  'Count the rows where the honest answer is no. Report that number today.':
    'Un rows ko ginye jahan imaandaar jawaab “nahi” hai. Aaj hi woh number report kijiye.',
  'Name the store':
    'Store ka naam likhiye',
  'Someone asks for their data to be deleted. It is in the document store, the chunk store, the search copy, your logs, your test sets and the cache. Which one do teams usually forget?':
    'Koi apna data delete karne ko kehta hai. Woh document store, chunk store, search index, aapke logs, aapke test sets aur cache mein hai. Teams aksar kise bhool jaati hain?',
  'Design oversight that works at volume':
    'Aisi oversight banaiye jo volume par bhi kaam kare',
  'Design a human check that works at real volume: four thousand outputs a day, and one reviewer. Write what the reviewer sees, which outputs reach them, and what they can do. Then say why “a human reviews every output” is not an answer.':
    'Ek aisa human check design kijiye jo asli volume par kaam kare: roz chaar hazaar outputs, aur ek reviewer. Likhiye ki reviewer kya dekhta hai, kaun se outputs uske paas pahunchte hain, aur woh kya kar sakta hai. Phir bataiye ki “har output ko ek insaan review karta hai” jawaab kyun nahi hai.',
  'they see … routed by … can do … and reviewing everything fails because …':
    'woh dekhta hai … routed by … kar sakta hai … aur sab kuch review karna fail hota hai kyunki …',
  'Now do the same for your own system.':
    'Ab yahi apne system ke liye kijiye.',
  'Build a vendor file':
    'Ek vendor file banaiye',
  'Collect four answers from each vendor':
    'Har vendor se chaar jawaab lijiye',
  'Shadow AI':
    'Shadow AI',
  'Write the system card for Bharat Privacy Guard':
    'Bharat Privacy Guard ka system card likhiye',
  'Write the card with five headings: what it is for; what data it handles; what it can do, with its measured quality from your scoreboard; the failures you know about; and what it must never be used for.':
    'Card paanch headings ke saath likhiye: yeh kis liye hai; yeh kaun sa data handle karta hai; yeh kya kar sakta hai, aapke scoreboard se measure ki hui quality ke saath; jo failures aapko pata hain; aur ise kis kaam ke liye kabhi use nahi karna chahiye.',
  'A system card with the five headings.':
    'Paanch headings wala ek system card.',
  'The sentence about not making anyone compliant, and why it matters.':
    'Woh sentence ki yeh tool kisi ko compliant nahi banata, aur woh kyun zaroori hai.',
  'The result of the deletion drill, with the time it took.':
    'Deletion drill ka result, usmein lage time ke saath.',

  /* ---- ch18: The AI PRD: specs, migrations and kill switches ---- */
  'The AI PRD: specs, migrations and kill switches':
    'AI PRD: specs, migrations aur kill switches',
  'A real cost figure':
    'Ek asli cost figure',
  'Normal spec':
    'Normal spec',
  'AI spec':
    'AI spec',
  'Built in':
    'Kahan banaya',
  'Ch. 6, 14':
    'Ch. 6, 14',
  'Ch. 8, 14':
    'Ch. 8, 14',
  'Done when the features work':
    'Jab features kaam karein, tab done',
  'Ch. 6, 17':
    'Ch. 6, 17',
  'Ch. 10, 17':
    'Ch. 10, 17',
  'Draw the map':
    'Map draw kijiye',
  'Write the PRD':
    'PRD likhiye',
  'Section':
    'Section',
  'Source':
    'Source',
  'Ch.17 system card':
    'Ch.17 ka system card',
  'Ch.14 homework':
    'Ch.14 ka homework',
  'Security posture — trifecta audit and the leg you broke':
    'Security posture — trifecta audit aur woh leg jo aapne tod diya',
  'Ch.13':
    'Ch.13',
  'Ch.15 table':
    'Ch.15 ki table',
  'Ch.17':
    'Ch.17',
  'This chapter':
    'Yeh chapter',
  'Known limitations':
    'Known limitations',
  'Your red map':
    'Aapka red map',
  'metric — answer key — threshold — what happens on breach … kill switch: …':
    'metric — answer key — threshold — breach par kya hota hai … kill switch: …',
  'Write a migration runbook':
    'Ek migration runbook likhiye',
  'Design the feedback record':
    'Feedback record design kijiye',
  'Write your findings page':
    'Apna findings page likhiye',
});
