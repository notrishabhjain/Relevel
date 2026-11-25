/* Hinglish for Classification: sorting inputs into categories (chapter:ch24), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Classification means putting each input into one of a fixed set of boxes, like letters into pigeonholes. It has a right answer, so you can measure it and improve it on purpose. In this chapter you build a classifier (a sorter), score it one box at a time, and decide which kind of mistake costs less.':
    'Classification ka matlab hai har input ko tay kiye hue dibbon mein se ek mein daalna, jaise chitthiyan khaanon mein. Iska sahi jawaab hota hai, isliye aap ise naap sakte hain aur jaan-boojh kar behtar bana sakte hain. Is chapter mein aap ek classifier (chhantne wala) banate hain, use ek dibbe ke hisaab se score karte hain, aur tay karte hain ki kaunsi galti sasti padti hai.',
  'Build a sorter for a real set of boxes, and measure it honestly.':
    'Asli dibbon ke liye ek sorter banaiye, aur use imaandari se naapiye.',
  'Find the box your sorter is worst at. Say what that costs the business.':
    'Woh dibba dhoondhiye jisme aapka sorter sabse kharab hai. Batayiye ki business ko isse kitna nuksaan hota hai.',
  'Say why one overall score often hides the failure that matters.':
    'Samjhaiye ki ek kul score aksar us failure ko chhupa deta hai jo sach mein maayne rakhta hai.',
  'Build a sorter for the kind of ID, and measure it':
    'ID ki kism chhantne wala sorter banaiye, aur use naapiye',
  'Sometimes the tool finds a string of digits and must decide what it is. It could be an Aadhaar number, a bank account number, a phone number or a PIN code. That is a sorting job. In this chapter you learned to measure a sorter honestly, one box at a time, and to find the box it is worst at. Now you build a sorter and test it.':
    'Kabhi tool ko ankon ki ek ladi milti hai aur use tay karna hota hai ki woh kya hai. Woh Aadhaar number, bank account number, phone number ya PIN code ho sakta hai. Yeh chhantne ka kaam hai. Is chapter mein aapne seekha ki sorter ko imaandari se, ek dibbe ke hisaab se, kaise naapein, aur sabse kharab dibba kaise dhoondhein. Ab aap ek sorter banate hain aur use aazmate hain.',
  'Use your notebook (the page where you run code in boxes) for this chapter. Build and measure the sorter there. Write the numbers for each category in the notes box below. Short version for the route, about 20 minutes: steps 2, 3, 4 and 5.':
    'Is chapter ke liye apna notebook (woh page jahan code dibbon mein chalta hai) use kijiye. Sorter wahin banaiye aur naapiye. Har category ke numbers neeche ke notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 2, 3, 4 aur 5.',
  'Write down the categories: Aadhaar, PAN, mobile number, bank account, PIN code, and “something else”.':
    'Categories likhiye: Aadhaar, PAN, mobile number, bank account, PIN code, aur “something else”.',
  'Write twenty short examples. Give each category at least three. Use made-up values like those on the project page. Put some inside sentences (“call me on 9876543210”) and some on their own.':
    'Bees chhote udaharan likhiye. Har category ko kam se kam teen dijiye. Project page jaise banaye hue values use kijiye. Kuch sentences ke andar rakhiye (“call me on 9876543210”) aur kuch akele.',
  'Write the instruction that tells a model to put a piece of text into exactly one category. Tell it to answer with only the name of the category.':
    'Woh nirdesh likhiye jo model se kahe ki text ke tukde ko theek ek category mein daale. Use kahiye ki sirf category ka naam likhe.',
  'Run all twenty examples through the model. Write its answer next to the right answer.':
    'Saare bees udaharan model se chalaiye. Uska jawaab sahi jawaab ke baaju mein likhiye.',
  'For each category, count how many it got right. Make a small table with these columns: category, examples, correct, wrong.':
    'Har category ke liye ginye ki kitne sahi aaye. Ek chhoti table banaiye in columns ke saath: category, examples, correct, wrong.',
  'Find the category it is worst at. Write one sentence on what a mistake there would cost. For example, a bank account number treated as a PIN code would pass through without being hidden.':
    'Woh category dhoondhiye jisme woh sabse kharab hai. Ek sentence likhiye ki wahan galti ka kharch kya hoga. Jaise, bank account number ko PIN code samajh liya gaya to woh bina chhupe nikal jaayega.',
  'Decide: is the sorter good enough to act alone? Or should it only suggest an answer for another part to check? Give your reason, using the numbers.':
    'Tay kijiye: kya sorter akele kaam karne layak achha hai? Ya use sirf jawaab sujhana chahiye, jise koi aur hissa jaanche? Apni wajah numbers se dijiye.',
  'Twenty examples, each with its right answer.':
    'Bees udaharan, har ek ke saath uska sahi jawaab.',
  'A table with examples, correct and wrong for each category.':
    'Ek table jisme har category ke examples, correct aur wrong hon.',
  'The worst category, and what a mistake in it costs.':
    'Sabse kharab category, aur usme galti ka kharch.',
  'A decision with a reason: act alone, or only suggest.':
    'Wajah ke saath ek faisla: akele kaam kare, ya sirf sujhaye.',
  'Five task types, and which ones have right answers':
    'Paanch task types, aur kinke sahi jawaab hote hain',
  'Sorting is a task a computer can mark. So it is a good place to start measuring.':
    'Chhantna aisa kaam hai jise computer jaanch sakta hai. Isliye naapna shuru karne ki achhi jagah hai.',
  'A test set shows whether a change helped':
    'Test set dikhata hai ki badlav se fayda hua ya nahin',
  'Here your test set becomes an answer key (the teacher’s list of right answers) with real numbers.':
    'Yahan aapka test set asli numbers wali answer key (teacher ki sahi jawaabon ki list) ban jaata hai.',
  'You will run one sorter many times, so you need both ready.':
    'Aap ek sorter ko kai baar chalayenge, isliye dono taiyaar chahiye.',
  'The code runs right here, in order. Bring twenty real examples of things sorted into boxes at your work. Tickets by type, documents by department or requests by urgency would do. Paste them into a cell (one box of code), or add them as a file. No examples you can use? Use the starter sentences from the project page, sorted by kind of detail. Then your capstone is your chapter work.':
    'Code yahin, kram se chalta hai. Apne kaam ke bees asli udaharan laiye jinhe dibbon mein baanta jaata hai. Jaise type ke hisaab se tickets, vibhag ke hisaab se documents, ya zaroorat ke hisaab se requests. Unhe ek cell (code ka ek dibba) mein paste kijiye, ya file ki tarah jodiye. Koi udaharan kaam ke nahin? Project page ke starter sentences use kijiye, details ki kism ke hisaab se baante hue. Tab capstone hi aapka chapter ka kaam hai.',
  'Last chapter you met the five task types. One of them, classifying, is the easiest to mark, because each answer is right or wrong. In this chapter you build a small classifier and measure it properly. You also learn why one overall score can fool you. That matters whenever you judge an AI feature.':
    'Pichhle chapter mein aap paanch task types se mile. Unme se ek, classifying, jaanchna sabse aasaan hai, kyunki har jawaab sahi hota hai ya galat. Is chapter mein aap ek chhota classifier banate hain aur use theek se naapte hain. Aap yeh bhi seekhte hain ki ek kul score aapko kaise bhatka sakta hai. AI feature ko parakhte waqt yeh maayne rakhta hai.',
  'Look again at your test set':
    'Apna test set dobara dekhiye',
  'First, open the ten-row test set you made in Chapter 2.2. Look at the “good answer contains” column.':
    'Pehle Chapter 2.2 mein banaya das rows ka test set kholiye. “good answer contains” wala column dekhiye.',
  'If your task was sorting or picking out details, those rows are exact. Each one holds a value, a category or a yes. If it was shortening text, they are vague, and marking them took judgement. The difference comes from the kind of task, not from how well you wrote the rows.':
    'Agar aapka kaam chhantna ya details nikaalna tha, to woh rows pakki hain. Har ek mein ek value, ek category ya ek haan hai. Agar kaam text chhota karna tha, to woh dhundhli hain, aur unhe jaanchne mein parakh lagi. Farak kaam ki kism se aata hai, is se nahin ki aapne rows kitni achhi likhi.',
  'What classification is':
    'Classification kya hai',
  'Think of the person who sorts the post in an office. Every letter goes into exactly one pigeonhole. Classification is the same job. It puts each input into one of a fixed set of boxes.':
    'Office mein dak chhantne wale ko sochiye. Har chitthi theek ek khaane mein jaati hai. Classification bhi yahi kaam hai. Yeh har input ko tay kiye hue dibbon mein se ek mein daalta hai.',
  'Much of what useful software does is sorting. A support ticket goes to billing or to technical help. An email is spam or not spam. The big plus: someone can say if each answer was right.':
    'Kaam ke software ka bahut kuch chhantna hi hai. Ek support ticket billing ya technical help mein jaata hai. Ek email spam hai ya nahin. Bada fayda: koi bhi bata sakta hai ki har jawaab sahi tha ya nahin.',
  'When there is a right answer, you can count mistakes. When you can count mistakes, you can improve the system on purpose.':
    'Jab sahi jawaab hota hai, to aap galtiyan gin sakte hain. Jab galtiyan gin sakte hain, to system ko jaan-boojh kar behtar bana sakte hain.',
  'Build a first version':
    'Pehla version banaiye',
  'Let us build the simplest sorter we can. Then we see what goes wrong with it.':
    'Chaliye sabse saada sorter banate hain. Phir dekhte hain ki usme kya galat hota hai.',
  'Build the simplest sorter':
    'Sabse saada sorter banaiye',
  'Write the simplest version you can. It has the categories and one line of instruction. It has no examples.':
    'Sabse saada version likhiye. Usme categories hain aur nirdesh ki ek line. Koi udaharan nahin.',
  'Most answers are right. The wrong ones come in two kinds. Some are real misreadings. Others come back as <code>Billing.</code> or <code>the category is billing</code>. Those are not wrong, but your code cannot use them. You asked for a label and got a sentence. It is like asking for a one-word answer and getting a speech.':
    'Zyaadatar jawaab sahi hain. Galat waale do tarah ke hain. Kuch asli galat padhne se hain. Baaki <code>Billing.</code> ya <code>the category is billing</code> ki tarah aate hain. Woh galat nahin hain, par aapka code unhe use nahin kar sakta. Aapne label maanga aur sentence mila. Yeh ek shabd ka jawaab maangne par bhaashan milne jaisa hai.',
  'Now fix the format. Use the trick from Chapter 2.1: show an example instead of describing it. Add two worked examples, and make one of them an awkward case. The format stops changing. Chapter 8 shows how to make other formats impossible, but two examples get you most of the way.':
    'Ab format theek kijiye. Chapter 2.1 ki tarkeeb use kijiye: batane ke bajaye ek udaharan dikhaiye. Do hal kiye hue udaharan jodiye, aur ek ko ajeeb case rakhiye. Format badalna band ho jaata hai. Chapter 8 dikhata hai ki baaki formats ko kaise namumkin banayein, par do udaharan aapko zyaadatar door le jaate hain.',
  'Measure each box separately':
    'Har dibbe ko alag se naapiye',
  'Next comes the important step. It is tempting to count how many of twenty were right and stop. But that one number can hide a lot. So count for each box instead.':
    'Ab zaroori step aata hai. Bees mein se kitne sahi the, yeh ginkar ruk jaane ka man karta hai. Par woh ek number bahut kuch chhupa sakta hai. Isliye har dibbe ke liye gino.',
  'Per-category accuracy is the district table behind a state average. One failing district hides inside a good total. You would not report only the state figure to a ministry. So do not report only the overall accuracy.':
    'Har category ki accuracy, rajya ke average ke peeche wali zile ki table hai. Ek fail hota zila achhe kul ke andar chhup jaata hai. Aap mantralaya ko sirf rajya ka figure nahin bhejte. Isliye sirf kul accuracy mat bhejiye.',
  'Score each box':
    'Har dibbe ko score kijiye',
  'Mark all twenty against the answers you know. Count the results for each category, not just the total.':
    'Saare bees ko un jawaabon se milaiye jo aap jaante hain. Har category ke result ginye, sirf kul nahin.',
  'The overall figure looks good, yet one category is much worse than the rest. It is usually the rarest category, or one that is easy to mix up with another.':
    'Kul figure achha dikhta hai, phir bhi ek category baaki se kahin kharab hai. Aam taur par yeh sabse kam milne wali category hoti hai, ya woh jo kisi aur se aasaani se mil jaati hai.',
  'Report accuracy for each category, not only overall. A system that is 92% right overall and 40% right on the urgent category is not good enough for urgent messages.':
    'Accuracy har category ki bataiye, sirf kul nahin. Jo system kul mein 92% sahi hai aur urgent category mein 40% sahi, woh urgent messages ke liye kaafi achha nahin.',
  'So you have found where the system is weakest. The next question is what that weakness costs. A product person has to decide that.':
    'To aapne dhoondh liya ki system sabse kamzor kahan hai. Agla sawaal hai ki us kamzori ka kharch kya hai. Yeh ek product wale ko tay karna hota hai.',
  'Take your worst category. Write what happens to a real person when a message in that category goes to the wrong place. Then write what happens the other way round, when another message is wrongly put in that category.':
    'Apni sabse kharab category lijiye. Likhiye ki us category ka message galat jagah jaane par ek asli insaan ke saath kya hota hai. Phir ulta likhiye, jab koi doosra message galti se us category mein daal diya jaaye.',
  'When a … is missed, … . When something is wrongly marked …, … .':
    'Jab koi … chhoot jaata hai, to … . Jab kuch galti se … maan liya jaata hai, to … .',
  'The two directions rarely cost the same. Missing an urgent complaint and wrongly flagging a routine one as urgent are both mistakes, but one is much cheaper. Once you know which, tune the system to lean the cheaper way. Then borderline cases land in the safer box. That is a product decision, based on numbers, and it is yours to make.':
    'Dono disha ka kharch shayad hi barabar hota hai. Urgent shikayat chhoot jaana aur aam shikayat ko galti se urgent maan lena dono galtiyan hain, par ek bahut sasti hai. Jab aap jaan lein ki kaunsi, system ko sasti taraf jhukne ke liye tune kijiye. Tab sandeh wale cases surakshit dibbe mein jaayenge. Yeh numbers par aadharit product faisla hai, aur yeh aapka hai.',
  'Most of this chapter was not really about AI. An answer key, counts for each box, and a view on which mistake is cheaper are tools you would also use to check a hiring process or a triage desk.':
    'Is chapter ka zyaadatar hissa asal mein AI ke baare mein nahin tha. Answer key, har dibbe ki ginti, aur yeh raay ki kaunsi galti sasti hai, yeh woh aujaar hain jo aap bharti ki prakriya ya triage desk jaanchne mein bhi use karte.',
  'Next you meet summarising (making a long text short). It has no single right answer. That is exactly why many teams ship a summariser without knowing if it works.':
    'Agle chapter mein summarising (lambe text ko chhota karna) aata hai. Iska koi ek sahi jawaab nahin hota. Isi wajah se kai teams summariser bhej deti hain bina jaane ki woh kaam karta hai ya nahin.',
});
