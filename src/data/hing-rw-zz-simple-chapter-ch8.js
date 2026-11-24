/* Hinglish for Structured output: getting JSON you can trust (chapter:ch8), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Other software cannot read a paragraph. It needs boxes with names and types, like a form. First you see how often a polite request for JSON (a form written as labels and values) fails. Then you add a schema (a form with fixed boxes) so a broken reply cannot happen. Last, you add a validation loop (check, then ask again) for models with no schema.':
    'Doosra software paragraph nahi padh sakta. Use naam aur type wale khaane chahiye, ek form jaise. Pehle aap dekhenge ki JSON (labels aur values wala form) ka polite request kitni baar fail hota hai. Phir aap schema (fixed khaanon wala form) lagayenge, taaki toota hua reply aa hi na sake. Aakhir mein validation loop (check karo, phir dobara pucho) jodenge, un models ke liye jinmein schema nahi hota.',
  'Say with simple sums why “97% valid JSON” is not good enough.':
    'Seedhe hisaab se samjhaiye ki “97% sahi JSON” kaafi kyun nahi hai.',
  'Say what a schema (the form with fixed boxes) promises, and what it does not.':
    'Bataiye ki schema (fixed khaanon wala form) kya pakka karta hai, aur kya nahi.',
  'Turn a complaint like “it keeps making up amounts” into one clear box on the form.':
    '“Yeh amount banata rehta hai” jaisi shikayat ko form ke ek saaf khaane mein badaliye.',
  'Make the answer format impossible to break':
    'Jawaab ka format aisa banao ki toot hi na sake',
  'Other software will read the tool’s answers, not people. So a reply that is almost right, like JSON with one missing bracket, counts as broken. In this chapter you saw why “97% valid” is not good enough, and what a schema (a form with fixed boxes) promises. Now you decide the exact shape of one finding. Then you count how often a polite request fails without a schema.':
    'Tool ke jawaab doosra software padhega, log nahi. To lagbhag sahi reply, jaise ek bracket chhoota hua JSON, kharab maana jaata hai. Is chapter mein aapne dekha ki “97% sahi” kaafi kyun nahi hai, aur schema (fixed khaanon wala form) kya pakka karta hai. Ab aap ek finding ki exact shakal tay karte hain. Phir ginte hain ki schema ke bina polite request kitni baar fail hota hai.',
  'Use your notebook (the page where you run code) for this chapter. Run both versions and count the failures in code. Write what you found in the notes box below. Short version for the route, about 20 minutes: steps 2, 3, 4 and 5.':
    'Is chapter ke liye apna notebook (jis page par code chalta hai) use kijiye. Dono versions chalaiye aur code se failures ginye. Jo mila, neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 2, 3, 4 aur 5.',
  'Decide what one finding looks like. List its boxes: the kind of detail (for example PAN), the exact text, where it starts and ends in the sentence, and how sure the tool is (high, medium or low).':
    'Tay kijiye ki ek finding kaisi dikhti hai. Uske khaane likhiye: detail ki kism (jaise PAN), exact text, woh sentence mein kahan shuru aur khatam hota hai, aur tool kitna pakka hai (high, medium ya low).',
  'Write the polite version first. In plain words, ask the model to reply in JSON in that shape for one sentence. Run it on twenty sentences: the twelve from your answer key plus eight more. Check each reply with a JSON parser (a program that reads JSON and complains if it is broken).':
    'Pehle polite version likhiye. Seedhe shabdon mein model se kahiye ki ek sentence ka reply us shape ke JSON mein de. Ise bees sentences par chalaiye: answer key ke baarah aur aath aur. Har reply ko JSON parser se check kijiye (woh program jo JSON padhta hai aur toota ho to shikayat karta hai).',
  'Count the replies the parser could not read, or that had a box missing. This number is your reason for the next steps.':
    'Woh replies ginye jo parser padh nahi saka, ya jinmein koi khaana gayab tha. Yeh number agle steps ki wajah hai.',
  'Now write the schema. List every box, its type, and which boxes are required. Use the schema feature of your model company, so the reply has to follow it.':
    'Ab schema likhiye. Har khaana, uska type, aur kaun se khaane zaroori hain, sab likhiye. Apne model company ka schema feature use kijiye, taaki reply ko us par chalna hi pade.',
  'Run the same twenty sentences again. Count the failures.':
    'Wahi bees sentences dobara chalaiye. Failures ginye.',
  'If your company has no schema feature, write a loop. It checks the reply and asks again if it is broken. Note how many extra tokens (small pieces of a word, like Lego bricks of text) and seconds each retry costs.':
    'Agar aapki company mein schema feature nahi hai, to ek loop likhiye. Woh reply check karta hai aur toota ho to dobara poochta hai. Note kijiye ki har retry mein kitne extra tokens (shabd ke chhote tukde, text ki Lego eent) aur kitne seconds lagte hain.',
  'The shape of one finding, written as a list of boxes.':
    'Ek finding ki shape, khaanon ki list ke roop mein.',
  'How many of the twenty polite replies were broken.':
    'Polite version ke bees replies mein se kitne toote the.',
  'How many of the twenty replies were broken with the schema.':
    'Schema ke saath bees replies mein se kitne toote the.',
  'What your fallback (the back-up plan) costs each time it runs, and how often it runs.':
    'Aapka fallback (back-up plan) har baar chalne par kitna kharch karta hai, aur kitni baar chalta hai.',
  'The answer was words your code could not use':
    'Jawaab aise shabd the jo aapka code use nahi kar saka',
  'This was the first gap from Chapter 7.5. This chapter fills it.':
    'Yeh Chapter 7.5 ki pehli kami thi. Yeh chapter use bharta hai.',
  'Models guess the next piece of text':
    'Model agla text ka tukda guess karta hai',
  'So you get whatever looked most likely, in whatever format.':
    'To jo sabse mumkin lage woh milta hai, kisi bhi format mein.',
  'A request nudges the model. It does not stop it.':
    'Request model ko dhakka deti hai. Roakti nahi.',
  'You saw this when you broke your own system prompt (the rules on the shop wall).':
    'Yeh aapne tab dekha jab aapne apna hi system prompt (deewar par lage niyam) toda.',
  'Last chapter you tested your RAG system (the open-book exam: find the right page, then answer from it) four ways. The first gap you found: its answer is plain words your code cannot use. This chapter fills that gap. You will see why asking nicely for JSON is not enough. Then you will see what to do instead.':
    'Pichhle chapter mein aapne apne RAG system (open-book exam: pehle sahi page dhoondo, phir us se jawaab do) ko chaar tarah se test kiya. Pehli kami yeh mili: uska jawaab seedhe shabdon mein tha jo aapka code use nahi kar sakta. Yeh chapter us kami ko bharta hai. Aap dekhenge ki JSON ke liye pyaar se kehna kaafi kyun nahi. Phir dekhenge ki uski jagah kya karna hai.',
  'Why a paragraph is not enough':
    'Paragraph kaafi kyun nahi hai',
  'Until now, every answer was prose: a paragraph a person reads and judges. Think of a letter. A person can read a letter. A machine cannot act on one.':
    'Ab tak har jawaab prose tha: ek paragraph jise insaan padhta aur parakhta hai. Ek chitthi sochiye. Insaan chitthi padh leta hai. Machine chitthi par kaam nahi kar sakti.',
  'Say the model’s answer goes into another system. Maybe it sends a claim to the right desk, updates a record or opens a ticket. Now you need boxes: a decision, an amount, a date, a confidence. Each box needs a name and a type (number, text, yes or no). Each box must always be filled.':
    'Maan lijiye model ka jawaab kisi doosre system mein jaata hai. Shayad woh claim ko sahi desk par bhejta hai, record badalta hai ya ticket kholta hai. Tab aapko khaane chahiye: decision, amount, date, confidence. Har khaane ka ek naam aur type (number, text, haan ya na) hona chahiye. Har khaana hamesha bhara hona chahiye.',
  'The first try is to ask in words: <em>reply as JSON with the keys decision, amount and reason.</em> (JSON is a form written as labels and values inside curly brackets.) It works most of the time. That is exactly the problem. Let’s count how often it really works.':
    'Pehli koshish hai shabdon mein maangna: <em>reply as JSON with the keys decision, amount and reason.</em> (JSON curly brackets ke andar labels aur values mein likha form hai.) Yeh zyaadatar chalta hai. Dikkat yahi hai. Chaliye ginte hain ki asal mein kitni baar chalta hai.',
  'Predict first: you ask for JSON in clear words, on a good model. Out of a thousand replies, how many come out well formed, as a percentage?':
    'Pehle andaza lagaiye: aap achhe model se saaf shabdon mein JSON maangte hain. Hazaar replies mein se kitne sahi bante hain, percent mein?',
  'Usually 95 to 99 percent. That sounds good. It is not good enough.':
    'Aam taur par 95 se 99 percent. Sunne mein achha lagta hai. Par kaafi nahi hai.',
  'The failures hide well. A reply may start with “Sorry!”, sit inside a code block, end with a stray comma, or be well formed with a made-up value inside. Now work out what 97 percent means at ten thousand requests a day.':
    'Failures chhup jaate hain. Reply “Sorry!” se shuru ho sakta hai, code block ke andar ho sakta hai, faltu comma par khatam ho sakta hai, ya sahi shape ka ho par andar banawati value ho. Ab hisaab lagaiye ki din ke das hazaar requests par 97 percent ka matlab kya hai.',
  'At 97 percent, a feature that handles ten thousand requests a day breaks three hundred times a day. It breaks quietly, in a box that another system trusts.':
    '97 percent par, din ke das hazaar requests sambhalne wala feature din mein teen sau baar tootta hai. Chup-chaap tootta hai, aise khaane mein jis par doosra system bharosa karta hai.',
  'On paper, numbers like these are easy to nod at. So let’s watch the failures happen on your own screen.':
    'Kaagaz par aise numbers par sir hilana aasaan hai. Chaliye failures apni screen par hote dekhte hain.',
  'Test a polite request for JSON':
    'Polite request se JSON maangkar test kijiye',
  'Ask for JSON in plain words. Then try to read each reply with a parser (a program that reads JSON). Do this twenty times.':
    'Seedhe shabdon mein JSON maangiye. Phir har reply ko parser (JSON padhne wala program) se padhne ki koshish kijiye. Yeh bees baar kijiye.',
  'You get between 1 and 8 failures out of 20, depending on the model. Read the failures. You may see markdown code fences (extra backtick lines around the JSON), a sentence before the JSON, or a stray comma at the end. Write down your failure rate.':
    'Model ke hisaab se 20 mein se 1 se 8 failures milte hain. Failures padhiye. Aapko markdown code fences (JSON ke aas-paas extra backtick wali lines), JSON se pehle ek sentence, ya aakhir mein faltu comma dikh sakta hai. Apna failure rate likh lijiye.',
  'Guess how many of the 20 will fail before you run it. Most people guess 0 or 1.':
    'Chalane se pehle andaza lagaiye ki 20 mein se kitne fail honge. Zyaadatar log 0 ya 1 sochte hain.',
  'Use a schema':
    'Schema lagaiye',
  'So what is the real fix? Stop asking. Start fencing it in. You give the company a <strong>schema</strong>, which is a form with fixed boxes. It says which boxes exist and what type each one holds. While the model writes, it is not allowed to write anything that does not fit the form.':
    'To asli ilaaj kya hai? Maangna band kijiye. Daayra khinch dijiye. Aap company ko ek <strong>schema</strong> dete hain, yaani fixed khaanon wala form. Woh batata hai kaun se khaane hain aur har khaane mein kis type ki cheez aayegi. Model jab likhta hai, use aisa kuchh likhne ki ijaazat nahi jo form mein fit na ho.',
  'This is the first fix in the course that removes a problem. Earlier fixes only made it rarer. Chapter 2 explained the difference. Think of a railing on a bridge, not a sign that says “be careful”.':
    'Yeh course ka pehla ilaaj hai jo dikkat ko hata deta hai. Pehle ke ilaaj use sirf kam karte the. Chapter 2 ne yeh farq samjhaya tha. Pul ki railing sochiye, “dhyaan se” likhe board nahi.',
  'Add the schema':
    'Schema jodiye',
  'Now hand the company a schema instead of a polite request. If your model or endpoint (the company\'s web address you call) does not support <code>response_format</code> (the setting where you attach the schema), skip to the next step. The validation loop (check, then ask again) works everywhere, and you should know it anyway.':
    'Ab polite request ki jagah company ko schema dijiye. Agar aapka model ya endpoint (company ka web address jise aap call karte hain) <code>response_format</code> (woh setting jahan schema lagta hai) support nahi karta, to agle step par jaiye. Validation loop (check karo, phir dobara pucho) har jagah chalta hai, aur use jaanna chahiye.',
  'You get a clean dictionary (a phone book: look up a name, get its value), twenty times out of twenty. Run the first loop again with the schema attached. Check that the failure count drops to zero. The format problem is solved. Only the format problem.':
    'Aapko saaf dictionary (phone book: naam dekho, value pao) milti hai, bees mein se bees baar. Pehla loop schema lagakar dobara chalaiye. Dekhiye ki failures ki ginti zero ho gayi. Format ki dikkat hal ho gayi. Sirf format ki dikkat.',
  'What a schema does not promise':
    'Schema kya pakka nahi karta',
  'The words “only the format problem” matter. Let’s say what they mean, in plain words.':
    '“Sirf format ki dikkat” wale shabd zaroori hain. Chaliye inka matlab seedhe shabdon mein kehte hain.',
  'A schema promises the shape, not the content. A form with a number box always gets a number. It may be the wrong number. The document may have had no amount at all.':
    'Schema shape ka vaada karta hai, andar ki cheez ka nahi. Number wale khaane mein hamesha number aata hai. Woh galat number ho sakta hai. Ho sakta hai document mein amount tha hi nahi.',
  'Back-up plan: check, then ask again':
    'Back-up plan: check kijiye, phir dobara pucho',
  'Plan for one more case. Not every model, company or endpoint supports schemas. For those, you need a back-up plan that works everywhere. Think of a teacher who hands back a wrong answer sheet and says, “Do it again.”':
    'Ek aur halat ke liye taiyaar rahiye. Har model, company ya endpoint schema support nahi karta. Unke liye aisa back-up plan chahiye jo har jagah chale. Ek teacher sochiye jo galat answer sheet lauta kar kehta hai, “Dobara karo.”',
  'Build a validation loop':
    'Validation loop banaiye',
  'The back-up plan is a loop (do the same step again and again). Check the reply. If it fails, send the error back to the model as a new prompt (a new note) and ask again.':
    'Back-up plan ek loop hai (wahi step baar baar karna). Reply check kijiye. Fail ho to error ko naye prompt (nayi parchi) ki tarah model ko wapas bhejiye aur dobara poochiye.',
  'It usually works on the first try, and sometimes on the second. Mind the cost: <strong>every retry sends the whole context again</strong> (Chapter 1). Context is everything on the model’s desk. A 10% retry rate adds at least 10% to your costs. Put it in your cost model in Chapter 15.':
    'Yeh aam taur par pehli koshish mein chalta hai, kabhi doosri mein. Kharch par dhyaan dijiye: <strong>har retry poora context dobara bhejti hai</strong> (Chapter 1). Context woh sab hai jo model ki mez par rakha hai. 10% retry rate aapke kharch mein kam se kam 10% jodta hai. Ise Chapter 15 ke cost model mein daaliye.',
  'Let’s put it together. A polite request for JSON works most of the time, but “most of the time” breaks when many people use it. A schema removes format errors completely. Earlier fixes, like the system prompt, only made problems rarer. When no schema is available, a validation loop (check, then ask again) is your back-up. It costs extra tokens (small pieces of a word, like Lego bricks of text).':
    'Chaliye sab jod lete hain. JSON ka polite request zyaadatar chalta hai, par “zyaadatar” tab toot jaata hai jab bahut log use karein. Schema format ki galtiyaan poori tarah hata deta hai. Pehle ke ilaaj, jaise system prompt, dikkat ko sirf kam karte the. Jab schema na ho, to validation loop (check karo, phir dobara pucho) aapka back-up hai. Isme extra tokens lagte hain (shabd ke chhote tukde, text ki Lego eent).',
  'But a well-formed reply can still hold wrong values. How you design the boxes decides how often that happens. That is Chapter 8.5. There you will design boxes that do not push the model to guess.':
    'Par sahi shape ke reply mein bhi galat values ho sakti hain. Aap khaane kaise banate hain, yeh tay karta hai ki aisa kitni baar hoga. Yeh Chapter 8.5 hai. Wahan aap aise khaane banayenge jo model ko guess karne par majboor na karein.',
});
