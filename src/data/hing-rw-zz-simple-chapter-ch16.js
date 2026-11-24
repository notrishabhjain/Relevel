/* Hinglish for Document extraction: tables, scans and images (chapter:ch16), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Real documents are often photos of paper, tables and forms, not clean typed text. Turning them into text is where many document projects fail, and nobody notices. Today you find a reading mistake in your own documents. Then you compare two ways: turn the page into text, or show the model a picture of the page.':
    'Asli documents aksar kaagaz ki photos, tables aur forms hote hain, saaf typed text nahi. Inhe text mein badalna wahi jagah hai jahan kai document projects fail ho jaate hain, aur kisi ko pata nahi chalta. Aaj aap apne documents mein ek padhne ki galti dhoondhenge. Phir do tareeke compare karenge: page ko text banana, ya model ko page ki tasveer dikhana.',
  'Say why tables are the part of a document that goes wrong most, and why no score catches the mistake.':
    'Bataiye ki document ka sabse zyada galat hone wala hissa tables kyun hain, aur koi score yeh galti kyun nahi pakadta.',
  'Say what you would ask a vendor (a company that sells you a tool) who claims to read all document types.':
    'Bataiye ki jo vendor (tool bechne wali company) kehta hai ki woh har tarah ka document padh leta hai, usse aap kya poochhenge.',
  'Say why a voice product needs a different design, not just a microphone on the same screen.':
    'Bataiye ki voice product ka poora design alag kyun hota hai, sirf wahi screen aur uspar ek microphone nahi.',
  'Test the tool on photos of ID cards':
    'ID cards ki photos par tool ko test kijiye',
  'Many personal details reach a website as photos, not typed words. A tool that reads words out of a photo makes mistakes, and no error message tells you. You learned that tables and photos of pages are the weakest part of a document pipeline (the chain of steps a document goes through), and why no score catches this. Now you test the tool on words read from photos of ID cards.':
    'Bahut si personal details website tak typed words ki tarah nahi, photos ki tarah pahunchti hain. Photo se words padhne wala tool galtiyan karta hai, aur koi error message aapko nahi batata. Aapne seekha ki tables aur page ki photos document pipeline (document ke steps ki zanjeer) ka sabse kamzor hissa hain, aur koi score ise kyun nahi pakadta. Ab aap ID cards ki photos se padhe words par tool ko test karenge.',
  'This is your notebook for the chapter. You use it to read the images and compare. Write the error rate (how often it is wrong) in the notes box below. Short version for the route, about 20 minutes: steps 1, 2, 3 and 6.':
    'Yeh is chapter ka aapka notebook hai. Isse aap images padhenge aur compare karenge. Error rate (kitni baar galat hua) neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2, 3 aur 6.',
  'Collect ten images. Make them yourself: mock ID cards with made-up details, printed or handwritten, then photographed. Never use a photo of a real person’s card.':
    '10 images jama kijiye. Khud banaiye: made-up details wale nakli ID cards, print kiye hue ya haath se likhe hue, phir unki photo kheenchiye. Kisi asli insaan ke card ki photo kabhi use mat kijiye.',
  'Turn each image into text with an OCR tool (software that reads the words in a picture). Compare the text with the original and mark every reading mistake.':
    'Har image ko OCR tool se text mein badaliye (OCR woh software hai jo tasveer ke words padhta hai). Text ko original se milaiye aur har padhne ki galti mark kijiye.',
  'Run the pattern checker (code that hunts for ID-shaped text) on the text. For every ID in the original, write down whether it was found. Note the usual mistakes, such as the letter O read as the digit 0, or the letter l read as 1.':
    'Text par pattern checker chalaiye (woh code jo ID jaise dikhne wala text dhoondhta hai). Original ke har ID ke liye likhiye ki woh mila ya nahi. Aam galtiyan note kijiye, jaise letter O ko digit 0 padhna, ya letter l ko 1 padhna.',
  'Pick three of the images. Give them straight to a model that can look at pictures, and ask it to list the IDs. Compare its list with the OCR route on the same three.':
    'Teen images chuniye. Unhe seedhe aise model ko dijiye jo tasveer dekh sakta hai, aur usse IDs ki list banane ko kahiye. Usi teen par OCR route se compare kijiye.',
  'Check every digit of one important field, such as each Aadhaar number, by hand. Write down how long it took. That time is the real price of trusting the result.':
    'Ek zaroori field ka har digit haath se check kijiye, jaise har Aadhaar number. Likhiye ki kitna time laga. Result par bharosa karne ki asli keemat yahi time hai.',
  'Add the rows for text read from photos to the answer key (the list of questions with the right answers). Save it as <code>evals/answer-key-v4.csv</code>. Then estimate the error rate for text read from photos.':
    'Photos se padhe text ki rows ko answer key mein jodiye (sawaalon aur sahi jawaabon ki list). Use <code>evals/answer-key-v4.csv</code> ke naam se save kijiye. Phir photos se padhe text ka error rate estimate kijiye.',
  'Ten made-up ID images and the text read from them, with the mistakes marked.':
    '10 made-up ID images aur unse padha gaya text, galtiyan mark ki hui.',
  'For each ID, a note on whether the pattern checker found it.':
    'Har ID ke liye ek note ki pattern checker ko woh mila ya nahi.',
  'A side-by-side of the OCR route and the picture-reading model on three images.':
    '3 images par OCR route aur tasveer padhne wale model ka aamne-saamne comparison.',
  'The time the hand check took.':
    'Haath se check karne mein laga time.',
  'The answer key, version 4, and an estimated error rate for text read from photos.':
    'Answer key, version 4, aur photos se padhe text ka estimated error rate.',
  'Everything so far assumed clean typed text':
    'Ab tak sab kuch saaf typed text maan kar chala',
  'In Chapter 3 you were handed the text. But someone had to make that text first.':
    'Chapter 3 mein aapko text haath mein mil gaya tha. Lekin us text ko pehle kisi ne banaya hoga.',
  'Slow replies are a product problem':
    'Dheemi reply ek product problem hai',
  'Look at the slowest replies, not the average. Think of the one train that is always late, not the average train.':
    'Sabse dheemi replies dekhiye, average nahi. Us ek train ko sochiye jo hamesha late aati hai, average train ko nahi.',
  'Find one page from your own documents with a real table in it, such as money figures, eligibility bands or a rate card. Add a photo or scan of it with the Files panel (the box on this page where you add files).':
    'Apne documents mein se ek page dhoondhiye jisme asli table ho, jaise paise ke figures, eligibility bands ya rate card. Uski photo ya scan Files panel se jodiye (is page ka woh box jahan aap files jodte hain).',
  'In Chapter 3 you pasted your document’s text into a file. That quietly assumed the text already existed. In most organisations, a lot of it does not. Today you see what happens when the text must be made from pages. It is like typing out a paper form by hand. This step often goes wrong.':
    'Chapter 3 mein aapne apne document ka text ek file mein paste kiya tha. Isme chupke se maan liya gaya tha ki text pehle se maujood hai. Zyadatar organisations mein bahut sa text maujood nahi hota. Aaj aap dekhenge ki jab text pages se banana padta hai toh kya hota hai. Yeh kaagaz ke form ko haath se type karne jaisa hai. Yeh step aksar galat ho jaata hai.',
  'Real documents are pages, not text':
    'Asli documents pages hote hain, text nahi',
  'Picture a real pile of documents. It holds scanned contracts (photos of paper) with signatures and stamps. It holds money statements, where the meaning depends on which row meets which column. It holds manuals with warnings next to drawings, screenshots in tickets, and forms filled by hand.':
    'Documents ka ek asli dher sochiye. Usme scanned contracts hote hain (kaagaz ki photos), signatures aur stamps ke saath. Paise ke statements hote hain, jahan matlab is par tikta hai ki kaun si row kaun se column se milti hai. Manuals hote hain jinme drawings ke paas warnings hoti hain. Tickets mein screenshots hote hain, aur haath se bhare forms hote hain.',
  'Everything you built so far assumes someone already turned these pages into text. Many document projects fail at that step, before anything you measured.':
    'Ab tak aapne jo banaya, usme maana gaya tha ki kisi ne in pages ko pehle hi text bana diya hai. Kai document projects isi step par fail ho jaate hain, aapke naape hue kisi bhi cheez se pehle.',
  'Guess first. Take a real company’s documents: contracts, statements, policies, scanned letters. What share is clean, typed, correctly ordered text that needs no work?':
    'Pehle andaaza lagaiye. Kisi asli company ke documents lijiye: contracts, statements, policies, scanned letters. Kitna hissa saaf, typed, sahi order wala text hai jisse koi kaam nahi karna padta?',
  'Usually much less than a proposal (the plan someone pitches) assumes. A big share is photos of paper. Much of the typed part still has a layout that plain reading wrecks: two columns, tables, or a heading repeated on every page. Every estimate built on this number inherits its mistake.':
    'Aam taur par proposal (jo plan koi pitch karta hai) ki soch se kaafi kam. Bada hissa kaagaz ki photos ka hota hai. Typed hisse mein bhi aisa layout hota hai jise seedha padhna bigaad deta hai: do columns, tables, ya har page par dohraya gaya heading. Is number par bana har estimate isski galti utha leta hai.',
  'Few teams check this. It is the cheapest way to stop a project from failing six weeks in.':
    'Bahut kam teams yeh check karti hain. Project ko chhe hafte baad fail hone se bachane ka yeh sabse sasta tareeka hai.',
  'Why tables fail without a sound':
    'Tables chupchaap kyun fail hoti hain',
  'Look at tables first, because they go wrong most often. A text extractor (a tool that pulls text out of a page) reads a table with three columns. It often gives one flat line of numbers. It is like reading a spreadsheet aloud and forgetting which cell is which. Every value survives, but the <em>links</em> are lost: which figure belongs to which row, for which year.':
    'Pehle tables dekhiye, kyunki sabse zyada galti wahin hoti hai. Text extractor (page se text nikalne wala tool) teen columns wali table padhta hai. Woh aksar numbers ki ek seedhi line bana deta hai. Yeh spreadsheet ko zor se padhne jaisa hai, jisme yaad nahi rehta ki kaun sa cell kaun sa hai. Har value bach jaati hai, lekin <em>rishte</em> kho jaate hain: kaun sa figure kaun si row ka hai, aur kis saal ka.',
  'Now the scary part. Retrieval (finding the right pages) works correctly. The model answers smoothly. But the number it quotes comes from the wrong column. Nothing in your pipeline can catch this, because nothing after the text step ever looks at the original page.':
    'Ab darne wali baat. Retrieval (sahi pages dhoondhna) sahi chalta hai. Model aaram se jawaab deta hai. Lekin woh jo number batata hai woh galat column se aata hai. Aapki pipeline mein kuch isse pakad nahi sakta, kyunki text banne ke baad koi bhi asli page ko dekhta hi nahi.',
  'Do not take this on trust. Now you will see it happen on your own table page.':
    'Ise bina dekhe mat maniye. Ab aap ise apne hi table page par hote dekhenge.',
  'Find a reading mistake':
    'Padhne ki ek galti dhoondhiye',
  'Pull the text out of your table page with any tool you have. Then read the text you got.':
    'Apne table page ka text kisi bhi tool se nikaliye. Phir jo text mila use padhiye.',
  'Read it the way a machine would. Can you tell which figure belongs to which row and column from the text alone? Often you cannot. Write down the exact link that was lost.':
    'Ise us tarah padhiye jaise machine padhegi. Kya sirf text dekh kar aap bata sakte hain ki kaun sa figure kaun si row aur column ka hai? Aksar nahi bata sakte. Jo khaas rishta kho gaya, use likh lijiye.',
  'Ask a question only the table can answer':
    'Aisa sawaal poochhiye jiska jawaab sirf table mein hai',
  'Before you run this, guess: will your pipeline get the table question right? People often expect a failure. What surprises them is how <em>smooth</em> the wrong answer sounds, like a parrot that says a wrong thing with a straight face.':
    'Chalane se pehle andaaza lagaiye: kya aapki pipeline table ka sawaal sahi karegi? Log aksar galti ki ummeed rakhte hain. Unhe jo chaukata hai woh yeh ki galat jawaab kitna <em>smooth</em> lagta hai, jaise tota seedhe munh galat baat bol de.',
  'Send the text you pulled out through your Chapter 7 pipeline. Ask a question whose answer sits at one exact row and column.':
    'Jo text nikala tha use apni Chapter 7 wali pipeline se chalaiye. Aisa sawaal poochhiye jiska jawaab ek khaas row aur column mein ho.',
  'You get a sure-sounding answer, often with a number from the next row or column. Every score in your Chapter 6 evaluation (the test with the answer key) would have called this a success at finding the right page.':
    'Aapko pakka lagne wala jawaab milta hai, aksar bagal ki row ya column ke number ke saath. Aapke Chapter 6 evaluation (answer key wala test) ka har score ise sahi page dhoondhne ki kamyabi ginta.',
  'Two ways to handle pages':
    'Pages sambhalne ke do tareeke',
  'What if turning a page into text loses the table? You can skip the text step. Give the model a picture of the page instead. The table below puts the two ways side by side. Notice that neither way wins on every row.':
    'Agar page ko text banane se table kho jaati hai, toh kya karein? Aap text wala step chhod sakte hain. Model ko page ki tasveer de dijiye. Neeche ki table dono tareeke aamne-saamne rakhti hai. Dekhiye ki koi ek tareeka har row mein nahi jeetta.',
  'Turn the page into text first':
    'Page ko pehle text banaiye',
  'Give the model a picture of the page':
    'Model ko page ki tasveer dijiye',
  'It is cheap, like a photocopy.':
    'Yeh sasta hai, photocopy jaisa.',
  'It costs more for each page.':
    'Har page par zyada paise lagte hain.',
  'Tables and page layout':
    'Tables aur page ka layout',
  'They are often wrecked.':
    'Aksar bigad jaate hain.',
  'They mostly stay as they were.':
    'Zyadatar jaise the waise rehte hain.',
  'Cutting it into pieces':
    'Tukdon mein kaatna',
  'Chapter 3 works exactly as written.':
    'Chapter 3 bilkul waise hi kaam karta hai.',
  'One page is the natural piece.':
    'Ek page hi sahi tukda hai.',
  'Exact codes and IDs':
    'Exact codes aur IDs',
  'They stay exactly right.':
    'Bilkul sahi bache rehte hain.',
  'Sometimes it misreads, such as 0 for O and 1 for l.':
    'Kabhi-kabhi galat padh leta hai, jaise O ki jagah 0 aur l ki jagah 1.',
  'Checking it later':
    'Baad mein check karna',
  'You can copy the words and compare them.':
    'Words ko copy karke compare kar sakte hain.',
  'You need a way to point back to the page.':
    'Page ki taraf wapas ishaara karne ka tareeka chahiye.',
  'Now try the second way on the same page and the same question.':
    'Ab dusra tareeka usi page aur usi sawaal par try kijiye.',
  'Save the same page as an image. Give it, with the same question, to a vision model (a model that can look at pictures).':
    'Usi page ko image ki tarah save kijiye. Use usi sawaal ke saath vision model ko dijiye (woh model jo tasveer dekh sakta hai).',
  'The answer is usually right. You also asked for the row and column labels, so you can check it in seconds. This is the supporting-quote idea from Chapter 8, used on tables.':
    'Jawaab aam taur par sahi hota hai. Aapne row aur column labels bhi maange the, isliye aap kuch second mein check kar sakte hain. Yeh Chapter 8 ka supporting-quote wala idea hai, jo yahan tables par lagaya gaya hai.',
  'In real work, teams often use both. They pull out text to search. Then, when the question is about a table, a figure or a form, they give the model the <em>picture of the page</em> for the final answer.':
    'Asli kaam mein teams aksar dono use karti hain. Search ke liye woh text nikalti hain. Phir jab sawaal table, figure ya form ke baare mein ho, toh aakhri jawaab ke liye model ko <em>page ki tasveer</em> deti hain.',
  'One more check is worth doing. It tells you how much to trust the picture way.':
    'Ek aur check karna banta hai. Isse pata chalta hai ki tasveer wale tareeke par kitna bharosa karein.',
  'Check every cell':
    'Har cell check kijiye',
  'Ask the vision model to write the whole table as a structured record (a form with fixed boxes), using a Chapter 8 schema. Then check every cell against the page with your own eyes.':
    'Vision model se kahiye ki poori table ko structured record mein likhe (fixed khaanon wala form), Chapter 8 ke schema ke saath. Phir har cell ko page se apni aankhon se milaiye.',
  'Expect a few mistakes. They often hide in cells that are hard to tell apart: joined headings, footnote marks, or empty versus zero. Count them. That error rate is your reading-quality number. It belongs in every document-AI proposal.':
    'Kuch galtiyon ki ummeed rakhiye. Woh aksar un cells mein chhupti hain jinhe alag pehchanna mushkil hai: jude hue headings, footnote ke nishaan, ya khaali versus zero. Unhe giniye. Yeh error rate hi aapka padhne ki quality ka number hai. Yeh har document-AI proposal mein hona chahiye.',
  'Voice: a different limit':
    'Voice: ek alag haddh',
  'So far we talked about pages. Voice is different, because the main limit is time, not accuracy. In text, a two-second wait is fine. In speech, two seconds of silence breaks the talk, like a phone call where no one answers, and people start talking over it. The whole round trip must fit: speech in, model, speech out.':
    'Ab tak hum pages ki baat kar rahe the. Voice alag hai, kyunki yahan sabse badi haddh time hai, accuracy nahi. Text mein 2 second ka wait theek hai. Bolchaal mein 2 second ki chuppi baat tod deti hai, jaise phone call jisme koi jawaab na de, aur log beech mein bolne lagte hain. Poora round trip us time mein fit hona chahiye: speech andar, model, speech bahar.',
  'So voice problems are about talking. You must know when the person has finished speaking. You must handle people cutting in. You must decide what to say while the system works. The reasoning models from Chapter 11 (models that think on rough paper) are usually too slow for voice, however good they are.':
    'Isliye voice ki problems baatcheet ki hoti hain. Aapko pata hona chahiye ki insaan ne bolna kab khatam kiya. Beech mein bolne walon ko sambhalna hota hai. Aur system ke kaam karte waqt kya bolna hai, yeh tay karna hota hai. Chapter 11 ke reasoning models (jo rough paper par sochte hain) voice ke liye aam taur par bahut dheemi hote hain, chahe woh kitne bhi achhe hon.',
  'Dictate three sentences':
    'Teen sentences bolkar likhwaiye',
  'Open any free speech-to-text tool (it writes down what you say), such as the dictation on your phone. Say three starter sentences from the project page aloud in Hinglish. Include the one with the Aadhaar-style number. Paste the written-down words into your notebook. Use only the made-up sentences, never a real number.':
    'Koi bhi muft speech-to-text tool kholiye (jo aap bolte hain use likh deta hai), jaise aapke phone ki dictation. Project page ke teen starter sentences Hinglish mein zor se boliye. Aadhaar jaisa number wala sentence bhi boliye. Likhe hue words ko apne notebook mein paste kijiye. Sirf banaye hue sentences use kijiye, kabhi asli number nahi.',
  'Run each written-down text through the pattern checker from Chapter 5. Press <strong>Restore</strong> if you reloaded. Write down what broke: digits written as words, a number split into groups, a name spelled a new way.':
    'Har likhe hue text ko Chapter 5 ke pattern checker se chalaiye. Reload kiya ho toh <strong>Restore</strong> dabaiye. Likhiye ki kya toota: digits shabdon mein likhe gaye, number groups mein bat gaya, naam ki spelling badal gayi.',
  'Speech can turn a twelve-digit number into something a pattern rule cannot see. Add two rows to your answer key. The input is the written-down speech, and the right answer is what you write by hand. You find voice problems by testing, not by reading.':
    'Bolchaal ek barah-digit ke number ko aisi cheez bana sakti hai jo pattern rule dekh nahi paata. Apni answer key mein do rows jodiye. Input bole hue ka likha text hai, aur sahi jawaab woh hai jo aap haath se likhte hain. Voice ki problems test karke milti hain, padhkar nahi.',
  'Look these up':
    'Inhe dhoondh lijiye',
  'India has public bodies for Indian-language speech and text. BHASHINI, the government’s language platform, is one, and the reading list names it. Before you rely on it, look up what it offers today and on what terms. Chapter 28 turns this idea into a spoken-numbers test.':
    'India mein Indian-language speech aur text ke liye sarkari sansthaayein hain. BHASHINI, sarkar ka language platform, unme se ek hai, aur reading list mein uska naam hai. Us par bharosa karne se pehle dekhiye ki woh aaj kya deta hai aur kin sharton par. Chapter 28 is idea ko bole hue numbers ke test mein badalta hai.',
  'Check your documents before you build':
    'Banane se pehle apne documents ko jaanch lijiye',
  'All this leads to one habit. Before you design anything, look at what your documents really look like, the way you check a house before you buy it.':
    'Yeh sab ek aadat par aata hai. Kuch bhi design karne se pehle dekhiye ki aapke documents asal mein kaise dikhte hain, jaise ghar kharidne se pehle use dekhte hain.',
  'Before any document-AI project, get three numbers. What share of the documents is clean typed text? What share is photos of paper? And what share of the <em>answers people need</em> sits inside tables and figures? The third is usually the biggest, and people rarely ask it. It decides the design of the whole system. One afternoon with fifty documents is enough to estimate it.':
    'Kisi bhi document-AI project se pehle teen numbers nikaliye. Documents ka kitna hissa saaf typed text hai? Kitna kaagaz ki photos hai? Aur <em>logon ko jo jawaab chahiye</em> unka kitna hissa tables aur figures ke andar hai? Teesra number aksar sabse bada hota hai, aur use bahut kam poochha jaata hai. Yahi poore system ka design tay karta hai. 50 documents ke saath ek dopahar ise andaaza lagane ke liye kaafi hai.',
  'Do that check on a collection of documents you have. What share is clean typed text? What share is photos of paper? What share has tables or layout that carry the meaning? You may estimate, but say how you would measure it properly. Also say what you would change if half turned out to be photos of paper.':
    'Yeh check apne kisi documents ke collection par kijiye. Kitna hissa saaf typed text hai? Kitna kaagaz ki photos hai? Kitne mein aisi tables ya layout hai jisme matlab chhupa hai? Andaaza lagaya ja sakta hai, lekin likhiye ki ise sahi tarah kaise naapenge. Yeh bhi likhiye ki aadhe documents kaagaz ki photos nikle toh aap kya badlenge.',
  'clean … photos of paper … layout-bearing … how I would measure … what changes if photos of paper are 50%':
    'saaf … kaagaz ki photos … layout wale … main kaise naapunga … photos 50% hon toh kya badlega',
  'To measure it properly, pick fifty documents at random from real traffic, not fifty chosen by an excited colleague. If much of it is photos of paper, the design changes. Reading quality becomes something you measure with its own answer key. The project gains a new phase that most proposals leave out. Saying this before the project starts is worth more than any search trick in the course.':
    'Ise sahi tarah naapne ke liye, asli traffic se 50 documents random chuniye, kisi josheele colleague ke chune hue 50 nahi. Agar zyada hissa kaagaz ki photos hai, toh design badal jaata hai. Padhne ki quality ko aap apni alag answer key se naapte hain. Project mein ek naya phase jud jaata hai jo zyadatar proposals chhod dete hain. Project shuru hone se pehle yeh kehna is course ki kisi bhi search trick se zyada kaam ka hai.',
  'Check a sample of documents':
    'Documents ke ek sample ki jaanch kijiye',
  'Take a sample of 30 documents. Sort each one: clean typed text, photo of paper, or a mix. Then, on its own, take 20 questions that people really ask. Mark how many need a table or figure to answer.':
    '30 documents ka sample lijiye. Har ek ko baantiye: saaf typed text, kaagaz ki photo, ya mix. Phir alag se, logon ke asal mein poochhe jaane wale 20 sawaal lijiye. Gin kar likhiye ki kitnon ke jawaab ke liye table ya figure chahiye.',
  'You get two percentages. They decide whether your system should start from text, start from page pictures, or mix both. They take one afternoon to measure.':
    'Aapko do percentages milte hain. Yahi tay karte hain ki aapka system text se shuru ho, page ki tasveer se shuru ho, ya dono ka mix ho. Inhe naapne mein bas ek dopahar lagti hai.',
  'To sum up: a document is a set of pages, not a pile of text. Tables fail without a sound. The picture of the page is often the safer way. Voice is a different problem because of time. Next you meet a question that stops many projects before they start: what are you allowed to send to a model at all?':
    'Saar yeh hai: document pages ka set hai, text ka dher nahi. Tables chupchaap fail hoti hain. Page ki tasveer aksar zyada safe raasta hai. Voice time ki wajah se alag problem hai. Agle chapter mein ek aisa sawaal aata hai jo kai projects ko shuru hone se pehle rok deta hai: model ko aap asal mein kya bhejne ke liye allowed hain?',
});
