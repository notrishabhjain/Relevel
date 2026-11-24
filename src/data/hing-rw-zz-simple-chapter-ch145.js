/* Hinglish for Error analysis: reading failures by hand (chapter:ch145), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Reading real outputs and writing down what went wrong is the most useful quality work there is. It needs no model and no money. You read the failures, sort them into piles, count each pile, and turn the biggest piles into test cases.':
    'Asli outputs padhna aur likhna ki kya galat hua, quality ka sabse kaam ka tareeka hai. Ismein na model chahiye na paisa. Aap failures padhte hain, unhe dheron mein baantte hain, har dher gintein, aur sabse bade dheron ko test cases bana dete hain.',
  'Turn a heap of real failures into named piles that you can count.':
    'Asli failures ke dher ko naam wale dheron mein badaliye jinhe aap gin sakein.',
  'Choose which pile to fix first, by how big it is and how much harm it does.':
    'Chuniye ki pehle kaun sa dher theek karna hai, uske size aur uske nuksaan ke hisaab se.',
  'Say why a ready-made test set from outside cannot do this job for your product.':
    'Batayiye ki bahar ka bana-banaya test set aapke product ke liye yeh kaam kyun nahi kar sakta.',
  'Read thirty real outputs, and name the ways the tool fails':
    'Tees asli outputs padhiye, aur naam dijiye ki tool kin tareekon se fail hota hai',
  'A scoreboard tells you how many mistakes the tool makes. It does not tell you why. In this chapter you learned to read real failures by hand and describe each in your own words. Only then do you sort and count them. Now you do this for Bharat Privacy Guard, and use what you find to make the answer key bigger.':
    'Scoreboard batata hai ki tool kitni galtiyan karta hai. Woh yeh nahi batata ki kyun. Is chapter mein aapne seekha ki asli failures haath se padhni hain aur har ek apne words mein likhni hai. Uske baad hi unhe baantna aur ginna hai. Ab aap yeh Bharat Privacy Guard ke liye karenge, aur jo milega usse answer key ko bada banayenge.',
  'Writing only. No code and no notebook. Use paper or a spreadsheet (a grid of rows and columns). Short version for the route, about 20 minutes: steps 1, 2, 3 and 6.':
    'Sirf likhna hai. Code nahi, notebook nahi. Paper ya spreadsheet (rows aur columns ka jaal) use kijiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2, 3 aur 6.',
  'Collect thirty outputs from the tool. Use sentences that you or the people you interviewed wrote (made up, or with every real detail changed). Do not use only the ones the tool already handles well.':
    'Tool se tees outputs jama kijiye. Aise sentences lijiye jo aapne ya aapke interview wale logon ne likhe (banaye hue, ya har asli detail badli hui). Sirf woh mat lijiye jinhe tool pehle se achhe se sambhalta hai.',
  'Read each output. Each time the tool got something wrong, write one line in your own words about what went wrong. Do not sort yet. Sorting too early hides surprises.':
    'Har output padhiye. Jab bhi tool ne kuch galat kiya, apne words mein ek line likhiye ki kya galat hua. Abhi baantiye mat. Bahut jaldi baantne se surprises chhup jaate hain.',
  'Now sort your notes into piles. Give each pile a name, such as “number split by a space”, “name in Devanagari missed” or “order number mistaken for Aadhaar”. Count each pile.':
    'Ab apne notes ko dheron mein baantiye. Har dher ko ek naam dijiye, jaise “number space se toot gaya”, “Devanagari mein naam chhoot gaya” ya “order number ko Aadhaar samajh liya”. Har dher ko gin lijiye.',
  'Rank the piles. Multiply each pile\'s count by how badly each failure hurts a real person.':
    'Dheron ko rank kijiye. Har dher ki ginti ko is se multiply kijiye ki har failure ek asli insaan ko kitna nuksaan pahunchati hai.',
  'For the top pile, write what would have to change: the rules, the model\'s instructions, the answer format, or something that is not an AI problem at all.':
    'Sabse upar wale dher ke liye likhiye ki kya badalna padega: rules, model ke instructions, jawaab ka format, ya aisa kuch jo AI ki problem hi nahi hai.',
  'Add the top two piles as new rows in the answer key. Save it as <code>evals/answer-key-v3.csv</code> (a spreadsheet saved as plain text), with about 50 rows.':
    'Sabse upar ke do dheron ko answer key mein nayi rows ki tarah jodiye. Use <code>evals/answer-key-v3.csv</code> (plain text mein saved spreadsheet) ke naam se save kijiye, lagbhag 50 rows ke saath.',
  'Thirty outputs, with a note on each one that went wrong.':
    'Tees outputs, aur har galat output par ek note.',
  'A list of failure piles, each with a name, a count and a rank.':
    'Failure dheron ki ek list, har ek ka naam, ginti aur rank ke saath.',
  'A note on what would need to change for the top pile.':
    'Sabse upar wale dher ke liye kya badalna padega, uska ek note.',
  'The answer key, version 3, with about 50 rows.':
    'Answer key, version 3, lagbhag 50 rows ke saath.',
  'An LLM judge (a second model that marks answers) can mark at large scale':
    'LLM judge (jawaab mark karne wala doosra model) bade scale par mark kar sakta hai',
  'And you know how far you can trust yours.':
    'Aur aap jaante hain ki apne judge par kitna bharosa kar sakte hain.',
  'Write the answer key before you test':
    'Test karne se pehle answer key likhiye',
  'It is the same idea, used on failures instead of questions.':
    'Yeh wahi idea hai, bas sawaalon ki jagah failures par.',
  'No code and no notebook. You need real outputs from something you own or use, such as support replies, written summaries or search results. You need about an hour, and a pen.':
    'Code nahi, notebook nahi. Aapko kisi aisi cheez ke asli outputs chahiye jo aapki hai ya jise aap use karte hain, jaise support replies, likhe hue summaries ya search results. Lagbhag ek ghanta chahiye, aur ek pen.',
  'In the last chapter you built markers that can mark answers at large scale. They tell you how often something goes wrong. They do not tell you what is going wrong. You need that before you can fix anything.':
    'Pichhle chapter mein aapne aise marker banaye jo bade scale par jawaab mark kar sakte hain. Woh batate hain ki kitni baar kuch galat hota hai. Woh yeh nahi batate ki kya galat ho raha hai. Kuch bhi theek karne se pehle aapko yeh chahiye.',
  'This chapter shows you how to find out. The method is so plain that it feels old-fashioned. You read real outputs yourself, pen in hand. It costs nothing, and it often helps more than any other quality work.':
    'Yeh chapter dikhata hai ki yeh kaise pata karein. Tareeka itna saada hai ki purane zamaane ka lagta hai. Aap asli outputs khud padhte hain, haath mein pen lekar. Ismein koi kharch nahi, aur aksar yeh kisi bhi doosre quality kaam se zyada kaam aata hai.',
  'What error analysis is':
    'Error analysis kya hai',
  'Start with a picture. A teacher gets back a pile of exam papers, each with a score. The scores say who did badly, but not why. So she sits down and reads the wrong answers. She sees that half the class made the same mistake in the same question.':
    'Pehle ek tasveer dekhiye. Ek teacher ko exam ki copies wapas milti hain, har ek par score. Score batate hain ki kisne kharab kiya, par kyun nahi. Toh woh baithkar galat jawaab padhti hai. Woh dekhti hai ki aadhi class ne ek hi sawaal mein ek jaisi galti ki.',
  'Error analysis does the same thing with your system\'s outputs.':
    'Error analysis aapke system ke outputs ke saath wahi karta hai.',
  'Read thirty real outputs. For each one that went wrong, write down in your own words what went wrong. Then sort the notes into piles and name the piles. This is called <strong>error analysis</strong> (reading mistakes to see why they happen), and it is the most valuable quality work in this field.':
    'Tees asli outputs padhiye. Jo bhi galat gaya, uske baare mein apne words mein likhiye ki kya galat hua. Phir notes ko dheron mein baantiye aur dheron ko naam dijiye. Isi ko <strong>error analysis</strong> (galtiyan padhkar samajhna ki kyun hoti hain) kehte hain, aur is field mein yeh sabse keemti quality kaam hai.',
  'Error analysis is like sorting complaints in a grievance office. You read the complaints first, then name the piles, and only then count. Nobody makes the categories before reading the complaints, and you should not either.':
    'Error analysis grievance office mein shikayatein chhantne jaisa hai. Aap pehle shikayatein padhte hain, phir dheron ke naam rakhte hain, aur tabhi ginte hain. Shikayatein padhne se pehle koi categories nahi banata, aur aapko bhi nahi banani chahiye.',
  'Try a small version right now.':
    'Abhi ek chhota version try kijiye.',
  'Do a small version now. Take ten real outputs from something you own or use. For each one, write one sentence about what went wrong, or “fine”. Then sort the sentences into piles and name the piles. Write the piles and their counts here.':
    'Abhi ek chhota version kijiye. Kisi aisi cheez ke das asli outputs lijiye jo aapki hai ya jise aap use karte hain. Har ek ke liye ek sentence likhiye ki kya galat hua, ya “fine”. Phir sentences ko dheron mein baantiye aur dheron ko naam dijiye. Dher aur unki ginti yahan likhiye.',
  'pile — count — one example sentence':
    'dher — ginti — ek example sentence',
  'The key rule: write the sentence <em>before</em> you pick a category. If you pick the category first, it changes what you notice. Real piles are specific and uneven. For example: “right document, wrong clause: 4”, “answered a question the user did not ask: 3” and “named a source that does not say it: 2”. You end up with a ranked list of what to fix, made from your own traffic (the real messages people send).':
    'Sabse zaroori rule: category chunne se <em>pehle</em> sentence likhiye. Agar pehle category chunenge, toh aap jo notice karte hain woh badal jaata hai. Asli dher khaas aur uneven hote hain. Jaise: “sahi document, galat clause: 4”, “aisa sawaal answer kiya jo user ne poochha hi nahi: 3” aur “aisa source bataya jo yeh kehta hi nahi: 2”. Aakhir mein aapko theek karne ki ek ranked list milti hai, aapke apne traffic (logon ke bheje asli messages) se bani.',
  'Do it on your own pipeline (the chain of steps you built)':
    'Ise apni pipeline (aapke banaye steps ki zanjeer) par kijiye',
  'Now do the same on the system you have been building, with a few more outputs.':
    'Ab wahi us system par kijiye jise aap bana rahe hain, kuch aur outputs ke saath.',
  'Analyse twenty outputs by hand':
    'Haath se bees outputs analyse kijiye',
  'Collect 20 outputs from your Chapter 12 pipeline, for many kinds of questions. Read each one next to its source. For each failure, write a plain note: <em>a sentence, not a category</em>. Then sort the notes into piles.':
    'Apni Chapter 12 ki pipeline se 20 outputs jama kijiye, alag-alag tarah ke sawaalon ke. Har ek ko uske source ke saath rakhkar padhiye. Har failure ke liye ek saada note likhiye: <em>ek sentence, category nahi</em>. Phir notes ko dheron mein baantiye.',
  'You end up with 4 to 7 named piles. This is your <strong>failure taxonomy</strong>, which means your own named list of the ways the system fails. Count each pile. The biggest pile is what to fix next. Keep the list. Chapter 17 uses it for the known-limitations section, and Chapter 18 uses it for the regression suite (a set of tests you re-run after every change).':
    'Aapke paas 4 se 7 naam wale dher bachenge. Yeh aapki <strong>failure taxonomy</strong> hai, matlab system jin tareekon se fail hota hai unki aapki apni naam wali list. Har dher ko gin lijiye. Sabse bada dher wahi hai jise agla theek karna hai. List sambhal kar rakhiye. Chapter 17 use known-limitations section ke liye use karta hai, aur Chapter 18 regression suite (woh tests jo har badlaav ke baad dobara chalte hain) ke liye.',
  'Turn failures into test cases':
    'Failures ko test cases banaiye',
  'Each pile you found becomes new rows in your test set, like new questions added to an exam. A ready-made test from outside cannot do this for you, because it does not have your users or your documents.':
    'Aapko jo bhi dher mila, woh aapke test set mein nayi rows ban jaata hai, jaise exam mein naye sawaal jodna. Bahar ka bana-banaya test aapke liye yeh nahi kar sakta, kyunki uske paas na aapke users hain na aapke documents.',
  'This makes a loop: real traffic, read the failures, add test cases, make a fix, measure the gain, then more traffic. Each round makes your test set a better picture of real use. Models change every few months, but your answer key and your failure list stay useful.':
    'Isse ek chakkar banta hai: asli traffic, failures padhiye, test cases jodiye, fix kijiye, sudhaar naapiye, phir aur traffic. Har round aapke test set ko asli use ki behtar tasveer banata hai. Models har kuch mahine mein badalte hain, par aapki answer key aur failure list kaam ki rehti hain.',
  'Before release, you ask: does the system pass the answer key? After release, you ask: are users better off? Look for fewer escalations (cases passed up to a person), fewer edits and more tasks finished. The first can pass while the second fails. You need both. The business cares most about the second.':
    'Release se pehle aap poochhte hain: kya system answer key pass karta hai? Release ke baad aap poochhte hain: kya users ka bhala hua? Dekhiye ki escalations (jo kaam kisi insaan ko bhejna pade) kam hon, edits kam hon aur zyada kaam poore hon. Pehla pass ho sakta hai jabki doosra fail ho. Aapko dono chahiye. Business ko doosre ki zyada parwah hai.',
  'Let us pull it together. Read real failures in your own words, sort them and count them. That tells you what to fix first. The biggest piles then become test cases, so the next round starts with a stronger answer key.':
    'Chaliye sab jodte hain. Asli failures apne words mein padhiye, unhe baantiye aur gin lijiye. Isse pata chalta hai ki pehle kya theek karna hai. Sabse bade dher phir test cases ban jaate hain, toh agla round mazboot answer key se shuru hota hai.',
  'Next you will look at cost modelling: what an AI feature really costs to run.':
    'Agle chapter mein aap cost modelling dekhenge: ek AI feature chalane mein asal mein kitna kharch aata hai.',
});
