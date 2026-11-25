/* Hinglish for Multimodal AI: documents, images and voice (chapter:ch15mm), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Feed in one PDF with a table, one image, and one short audio clip. Guess first what plain text extraction (pulling out only the words) will lose.':
    'Ek table wala PDF, ek image, aur ek chhota audio clip dijiye. Pehle andaaza lagaiye ki plain text extraction (sirf words nikalna) kya kho dega.',
  'Pull out structured facts (facts in neat boxes) and note where each one came from. If the source is audio, note the timestamps (the minute and second).':
    'Structured facts nikaliye (facts, saaf khaanon mein) aur likhiye ki har ek kahan se aaya. Agar source audio hai, toh timestamps bhi likhiye (kaun se minute aur second par).',
  'Try a poor scan, a hard table, speakers who talk over each other, and input that mixes languages.':
    'Kharab scan try kijiye, mushkil table, ek doosre par bolte speakers, aur aisa input jisme languages mili hui ho.',
  'A multimodal pipeline (a line of steps for text, pictures and sound) and an evaluation set (a set of test questions with an answer key) for each kind of input.':
    'Ek multimodal pipeline (text, tasveer aur awaaz ke steps ki ek qataar) aur har tarah ke input ke liye ek evaluation set (test sawaalon ka set, answer key ke saath).',
  'Say where knowing the source and having a person check are a must, not just nice to have.':
    'Likhiye ki source jaanna aur kisi insaan se check karwana kahan zaroori hai, sirf achha hone wali baat nahi.',
  'Reading the text out of a picture of text, like reading a photo of a notice board. A poor scan limits how well it can read, and OCR fails quietly when the input is bad.':
    'Text ki tasveer mein se text padhna, jaise notice board ki photo padhna. Kharab scan se padhna seemit ho jaata hai, aur kharab input par OCR chupchaap fail ho jaata hai.',
  'Diarization':
    'Diarization',
  'Working out who spoke which part of a recording. It looks like a small technical detail, but it acts like a privacy decision.':
    'Yeh pata lagana ki recording ka kaun sa hissa kisne bola. Yeh chhoti technical baat lagti hai, lekin kaam privacy decision ki tarah karti hai.',
  'Document understanding':
    'Document understanding',
  'Getting the meaning that comes from the layout, such as tables, headings and where things sit. It is not only the words.':
    'Woh matlab nikalna jo layout se aata hai, jaise tables, headings aur cheezein kahan baithi hain. Sirf words nahi.',
  'Media provenance':
    'Media provenance',
  'Knowing where a photo, a recording or a video came from, and what has been done to it since, like a receipt trail.':
    'Yeh jaanna ki photo, recording ya video kahan se aayi, aur tab se uske saath kya kiya gaya, jaise rasid ka silsila.',
  'The input can be a PDF, an image or audio. The design stays the same: context (the model\'s desk), tools, retrieval (an open-book exam) and evaluation (tests with an answer key). What changes is what counts as evidence and how you trace it. You will see what text extraction loses. You will design a voice pipeline.':
    'Input PDF, image ya audio ho sakta hai. Design wahi rehta hai: context (model ki mez), tools, retrieval (open-book exam) aur evaluation (answer key ke saath tests). Jo badalta hai woh yeh ki evidence kise maana jaata hai aur use trace kaise karte hain. Aap dekhenge ki text extraction kya kho deta hai. Aap ek voice pipeline design karenge.',
  'Name three things that plain-text extraction (pulling out only the words) loses from a real PDF.':
    'Bata paana ki ek asli PDF se plain-text extraction (sirf words nikalna) kaun si teen cheezein kho deta hai.',
  'Draw a voice pipeline (a line of steps for sound). Mark the steps that add waiting time before the reply.':
    'Voice pipeline draw kar paana (awaaz ke steps ki ek qataar). Woh steps mark kar paana jo reply se pehle intezaar badhate hain.',
  'Say where the answer key (the teacher\'s list of right answers) for a multimodal question must come from.':
    'Bata paana ki multimodal sawaal ki answer key (teacher ki sahi jawaabon ki list) kahan se aani chahiye.',
  'Specify how the tool handles images and voice':
    'Tool images aur voice ko kaise handle karta hai, yeh specify kijiye',
  'Personal details come as typed text, as photos of cards, and as spoken words. You learned what plain-text extraction loses from a real document. You learned how a voice pipeline is put together. You learned where the answer key for a multimodal question must come from. Now you write the specification (a plan that says exactly what to do) for how Bharat Privacy Guard handles scanned IDs and sentences typed by voice.':
    'Personal details typed text ki tarah, cards ki photos ki tarah, aur bole hue words ki tarah aate hain. Aapne seekha ki ek asli document se plain-text extraction kya kho deta hai. Aapne seekha ki voice pipeline kaise banti hai. Aapne seekha ki multimodal sawaal ki answer key kahan se aani chahiye. Ab aap specification likhte hain (ek plan jo bilkul batata hai ki kya karna hai) ki Bharat Privacy Guard scanned IDs aur voice se type kiye gaye sentences ko kaise handle karta hai.',
  'You only write. It is a specification. You need no code.':
    'Aapko sirf likhna hai. Yeh ek specification hai. Code nahi chahiye.',
  'Name three things lost when the words are just pulled out of a scanned ID card or a PDF. For example: where the text sits on the page, a stamp, and a handwritten note.':
    'Teen cheezein bataiye jo tab kho jaati hain jab scanned ID card ya PDF se sirf words nikaal liye jaate hain. Jaise: text page par kahan baitha hai, ek stamp, aur haath se likha hua note.',
  'Draw the path of a voice message: speech turned into text, then the tool, then the safe text. Mark the steps that add waiting time.':
    'Voice message ka raasta draw kijiye: speech se text, phir tool, phir safe text. Woh steps mark kijiye jo intezaar badhate hain.',
  'Write the privacy boundary (the line around what you may record). Whose voice is recorded? Where is it recorded? What notice does the person get?':
    'Privacy boundary likhiye (us cheez ke aas-paas ki line jo aap record kar sakte hain). Kiski awaaz record hoti hai? Kahan record hoti hai? Us insaan ko kaun sa notice milta hai?',
  'Write how long the words typed from speech are kept, and how they are deleted.':
    'Likhiye ki bolne se type hue words kitne time tak rakhe jaate hain aur kaise delete hote hain.',
  'Write what happens when the speech-to-text is not sure of a number, for example a digit it heard two ways. Write the rule.':
    'Likhiye ki jab speech-to-text kisi number ke baare mein pakka nahi hota, toh kya hota hai, jaise ek digit jo usne do tarah se suna. Rule likhiye.',
  'Say where the answer key for voice and images comes from. Then write three made-up sentences, typed by voice with no punctuation, to add to it.':
    'Bataiye ki voice aur images ki answer key kahan se aati hai. Phir usmein jodne ke liye bina punctuation ke, voice se type kiye hue teen banaye hue sentences likhiye.',
  'Write the measures you will track (the numbers you will watch). Include one for how often a spoken number is heard right.':
    'Woh measures likhiye jo aap track karenge (woh numbers jo aap dekhte rahenge). Ek aisa bhi rakhiye ki bola hua number kitni baar sahi suna gaya.',
  'Three things lost when only the words are pulled out.':
    'Teen cheezein jo tab kho jaati hain jab sirf words nikaale jaate hain (plain text extraction).',
  'A voice path with the waiting steps marked.':
    'Ek voice path jisme intezaar wale steps mark hon.',
  'The privacy boundary, and the rule for how long to keep the text and how to delete it.':
    'Privacy boundary, aur rule ki text kitna rakhna hai aur kaise delete karna hai.',
  'A rule for numbers it is unsure of, three new answer-key rows, and the measures to track.':
    'Aise numbers ke liye ek rule jinke baare mein pakka nahi, answer key ki teen nayi rows, aur track karne ke measures.',
  'Scanned documents need pictures, not just text':
    'Scanned documents ko tasveerein chahiye, sirf text nahi',
  'Chapter 16 covered this for pictures of text.':
    'Chapter 16 ne yeh text ki tasveeron ke liye cover kiya tha.',
  'The answer key has to come from somewhere':
    'Answer key kahin se toh aani hi chahiye',
  'From Chapter 6. For a table or a picture, it comes from a person.':
    'Chapter 6 se. Table ya tasveer ke liye, woh kisi insaan se aati hai.',
  'Find one real PDF with a table in it. Find one short audio recording that you are allowed to use.':
    'Ek asli PDF dhoondhiye jisme table ho. Ek chhoti audio recording dhoondhiye jo aap use kar sakte hain.',
  'Do units 15.3 and 15.4. Then try the spoken-numbers cell (the box of code) below. This time, only read the other units.':
    'Units 15.3 aur 15.4 kijiye. Phir neeche ka spoken-numbers cell (code ka dabba) try kijiye. Is baar baaki units sirf padh lijiye.',
  'Until now, almost everything in this part was text. Now the input changes. Real work comes as PDFs, photos of forms and voice messages. See what happens to the same ideas when the input is not plain text. See where things quietly go missing.':
    'Ab tak is part mein lagbhag sab text tha. Ab input badalta hai. Asli kaam PDFs, forms ki photos aur voice messages ki shakal mein aata hai. Dekhiye ki jab input plain text nahi hota, tab wahi ideas kaise chalte hain. Dekhiye ki cheezein chupchaap kahan kho jaati hain.',
  'Start with a PDF. It holds text, layout, tables, pictures and hidden metadata (extra facts about the file). If you pull out only the words, most of that is squashed flat. Nothing tells you. No error appears.':
    'Ek PDF se shuru kijiye. Usmein text, layout, tables, tasveerein aur chhupa hua metadata hota hai (file ke baare mein extra baatein). Agar aap sirf words nikalte hain, toh usmein se zyadatar chapta ho jaata hai. Aapko koi nahi batata. Koi error nahi aata.',
  'Here is an everyday picture. Photograph a railway timetable. Read only the words, in order, to someone on the phone. They hear every station name. They get no useful departure times. The meaning sat in the columns, and the columns did not survive.':
    'Ek roz ki tasveer dekhiye. Railway timetable ki photo lijiye. Phone par kisi ko sirf words, order mein, padhkar sunaiye. Unhe har station ka naam sunai dega. Unhe departure times ka koi kaam ka matlab nahi milega. Matlab columns mein tha, aur columns bache nahi.',
  'There are five units. The first looks at documents, the second at images, and the third at voice. The fourth looks at speed. The fifth shows how to test all of it the right way.':
    'Yahan paanch units hain. Pehla documents dekhta hai, doosra images, aur teesra voice. Chautha speed dekhta hai. Paanchva dikhata hai ki in sab ko sahi tareeke se test kaise karein.',
  'Understand why a PDF is a page with a layout, not just a text file. It is like a poster, not a plain list.':
    'Samjhiye ki PDF ek layout wala page kyun hai, sirf text file nahi. Yeh poster jaisa hai, saadi list jaisa nahi.',
  'Pulling out only the text can lose tables, reading order, images, headers, and the meaning that comes from where things sit on the page.':
    'Sirf text nikalne se tables, reading order, images, headers, aur woh matlab kho sakte hain jo is baat se aata hai ki cheezein page par kahan baithi hain.',
  'Put the pulled-out text next to the page as it looks on screen. Compare the two.':
    'Nikale hue text ko page ke saamne rakhiye, jaisa woh screen par dikhta hai. Dono ko compare kijiye.',
  'Write down what information was lost. Then design a fallback (a plan B).':
    'Likhiye ki kaun si information kho gayi. Phir ek fallback design kijiye (ek plan B).',
  'Use a scanned page and a page with a lot of tables.':
    'Ek scanned page aur ek aisa page use kijiye jisme bahut saari tables hon.',
  'A Document Understanding Gap Report.':
    'Ek Document Understanding Gap Report.',
  'Which questions cannot be answered from plain text alone?':
    'Kaun se sawaal sirf plain text se answer nahi ho sakte?',
  'This is a problem with the quality of retrieval (finding the right page) before it is ever a problem with the LLM (the parrot that has read a library).':
    'Yeh LLM (woh tota jisne library padh li hai) ki problem hone se pehle retrieval ki quality ki problem hai (sahi page dhoondhna).',
  'Vision and image evidence':
    'Vision aur image evidence',
  'Use evidence from images. Keep a clear record of where it came from. Have a way to test it.':
    'Images se evidence use kijiye. Saaf record rakhiye ki woh kahan se aaya. Use test karne ka tareeka rakhiye.',
  'Vision models (models that look at pictures) can read what an image shows. But their reading is still a likely guess, not a sure thing.':
    'Vision models (jo models tasveerein dekhte hain) padh sakte hain ki image mein kya hai. Lekin unka padhna phir bhi ek mumkin andaaza hai, pakki baat nahi.',
  'Ask five questions about an image or a table. Mark the part of the image that is the evidence.':
    'Ek image ya table ke baare mein paanch sawaal poochhiye. Image ka woh hissa mark kijiye jo evidence hai.',
  'Write down the source image, the question, the answer, and whether a person checked it.':
    'Source image, sawaal, jawaab, aur yeh likhiye ki kisi insaan ne check kiya ya nahi.',
  'Use images that are small and fuzzy or hard to see.':
    'Aisi images use kijiye jo chhoti aur dhundhli ho ya dikhne mein mushkil ho (low-resolution).',
  'A Vision Evaluation Set.':
    'Ek Vision Evaluation Set.',
  'Which answers need a person to check them?':
    'Kaun se outputs (jawaabon) ko check karne ke liye insaan chahiye?',
  'Any claim about what an image shows should lead back to the source image, like a footnote.':
    'Image kya dikhati hai, is baare mein har claim se source image tak wapas ja paana chahiye, jaise footnote.',
  'Audio and speech pipelines':
    'Audio aur speech pipelines',
  'Understand the whole path: capture (record the sound), then ASR (speech turned into text), then clean up the text, then extraction (pull out the facts), then confirmation, then action.':
    'Poora raasta samjhiye: capture (awaaz record karna), phir ASR (speech se text), phir text ko saaf karna, phir extraction (facts nikalna), phir confirmation, phir action.',
  'Voice AI is a pipeline: a chain with several places where it can break. It is not one single call to a model.':
    'Voice AI ek pipeline hai: ek zanjeer jisme kai jagah toot sakti hai. Yeh model ki ek single call nahi hai.',
  'Use a short audio sample. Check how good the transcript (the typed-out speech) is.':
    'Ek chhota audio sample use kijiye. Check kijiye ki transcript (type hui speech) kitna achha hai.',
  'Pull the tasks out of the transcript into structured JSON (a form written as labels and values).':
    'Transcript mein se tasks nikaliye, structured JSON mein (labels aur values mein likha hua form).',
  'Test accents, people talking over each other, names, and content that mixes languages.':
    'Accents, ek doosre par bolte logon, names, aur mili hui languages wale content ko test kijiye.',
  'A Voice Pipeline Spec, plus an audio eval set (a set of tests) of 10 cases.':
    'Ek Voice Pipeline Spec, saath mein 10 cases ka audio eval set (tests ka ek set).',
  'Where can a mistake first get into the pipeline?':
    'Pipeline mein galti sabse pehle kahan ghus sakti hai?',
  'When you automate meetings and tasks, confirmation and privacy are part of the product.':
    'Meeting aur tasks automate karte waqt confirmation aur privacy product ka hissa hain.',
  'Streaming and latency':
    'Streaming aur latency',
  'Understand why voice and other interactive systems care about partial results and about the waiting time before the first reply. It is like the chai-wala saying "two minutes" while he makes your tea.':
    'Samjhiye ki voice aur doosre interactive systems adhoore results aur pehle reply se pehle ke intezaar ki parwah kyun karte hain. Yeh chai-wale jaisa hai jo chai banate waqt kehta hai "do minute".',
  'Users feel waiting differently from servers. Streaming (words arriving as they are made) can make a system feel faster. The total work stays the same.':
    'Users intezaar ko servers se alag mehsoos karte hain. Streaming (shabd bante hi aate jaate hain) system ko tez mehsoos karwa sakti hai. Total kaam utna hi rehta hai.',
  'Measure the waiting time at each stage for one sample request.':
    'Ek sample request ke liye har stage ka intezaar measure kijiye.',
  'Keep the waiting time for capture, transcription, the model and the action apart, each on its own line.':
    'Capture, transcription, model aur action ke intezaar ko alag rakhiye, har ek ki apni line.',
  'Add an artificial (made-up) delay to one stage. See what it does to the user\'s experience.':
    'Ek stage mein banavati delay jodiye. Dekhiye ki user ke experience par kya asar padta hai.',
  'A Latency Budget for the Multimodal Flow.':
    'Multimodal Flow ke liye ek Latency Budget.',
  'Which waiting time will the user really notice?':
    'User ko asal mein kaun sa intezaar mehsoos hoga?',
  'Do not speed up the fastest part while the user is waiting on a different part.':
    'Sabse tez hisse ko aur tez mat kijiye jab user kisi doosre hisse ka intezaar kar raha ho.',
  'Multimodal RAG evaluation':
    'Multimodal RAG evaluation',
  'Design tests where the answer depends on evidence from one kind of input.':
    'Aise tests design kijiye jahan jawaab ek khaas tarah ke input se aane wale evidence par depend karta ho.',
  'An evaluation set made only of text can hide the failures that happen with images and audio.':
    'Sirf text ka bana evaluation set un failures ko chhupa sakta hai jo images aur audio ke saath hoti hain.',
  'Make five text-only cases, five picture or table cases, and five audio cases.':
    'Paanch text-only cases, paanch tasveer ya table cases, aur paanch audio cases banaiye.',
  'Score three things: is the evidence right, is the extraction right, and did the whole task work?':
    'Teen cheezein score kijiye: kya evidence sahi hai, kya extraction sahi hai, aur kya poora task chala?',
  'Add a poor scan, noisy audio and a case in more than one language.':
    'Ek kharab scan, shor wala audio, aur ek aisa case jisme ek se zyada languages hon, jodiye.',
  'An Evaluation Matrix (a table of scores) for each kind of input.':
    'Har tarah ke input ke liye ek Evaluation Matrix (scores ki table).',
  'Which failure belongs to extraction, and which belongs to reasoning (the model\'s thinking)?':
    'Kaun si failure extraction ki hai, aur kaun si reasoning ki (model ke sochne ki)?',
  'Your measures should show which part is broken, not only that the last answer was wrong. Think of a doctor who finds which organ hurts.':
    'Aapke measures ko dikhana chahiye ki kaun sa hissa toota hai, sirf yeh nahi ki aakhri jawaab galat tha. Sochiye ek doctor jo dhoondhta hai ki kaun sa ang dard kar raha hai.',
  'Voice is a pipeline':
    'Voice ek pipeline hai',
  'Voice is the clearest case of something with many stages. When you use it, it feels like one thing. It is not.':
    'Voice us cheez ka sabse saaf example hai jisme kai stages hote hain. Use karte waqt woh ek hi cheez lagti hai. Lekin woh ek nahi hai.',
  'A voice system is a pipeline, not one model. Each stage adds waiting time. Each stage is a place where the meaning can change.':
    'Voice system ek pipeline hai, ek model nahi. Har stage intezaar badhata hai. Har stage ek aisi jagah hai jahan matlab badal sakta hai.',
  'Each stage has a name. Reading text from an image is OCR. Turning speech into text is transcription. Working out who said what is speaker attribution. Meaning can be lost at each step, so each step needs its own check.':
    'Har stage ka ek naam hai. Image se text padhna OCR hai. Speech ko text mein badalna transcription hai. Yeh pata lagana ki kisne kya kaha, speaker attribution hai. Har step par matlab kho sakta hai, isliye har step ka apna check chahiye.',
  'Test how spoken numbers are heard':
    'Test kijiye ki bole gaye numbers kaise sune jaate hain',
  'Indian speech is often a mix of Hindi and English. A phone number is exactly where that mix breaks. This test gives you a real number for the capstone. Check the free tiers and languages of any speech tool yourself. Do not trust a figure from this page. Practice question 13 in the plan asks which kind of speech model you would choose.':
    'Bhartiya bolchaal aksar Hindi aur English ka mix hoti hai. Phone number bilkul wahi jagah hai jahan yeh mix toot-ta hai. Yeh test aapke capstone ke liye ek asli number deta hai. Kisi bhi speech tool ke free tiers aur languages khud check kijiye. Is page ke kisi figure par bharosa mat kijiye. Plan ka practice question 13 poochta hai ki aap kis tarah ka speech model chunenge.',
  'Count the digits that were heard':
    'Gino ki kitne digits sahi sune gaye',
  'Use voice typing on your phone, or any free speech-to-text. Say five made-up sentences: two in Hindi, two in Hinglish and one in English. Put the made-up number 9876543210 in each one. Paste what was typed into the cell (the box of code), then press Run.':
    'Apne phone par voice typing, ya koi bhi free speech-to-text use kijiye. Paanch banaye hue sentences boliye: do Hindi mein, do Hinglish mein aur ek English mein. Har ek mein banaya hua number 9876543210 rakhiye. Jo type hua use cell (code ke dabbe) mein paste kijiye, phir Run dabaiye.',
  'With the made-up transcripts, English and Hindi score 10 of 10, and the Hinglish lines score 9 and 0. The last one wrote the number as words, so a rule that looks only for digits sees nothing. With your own transcripts, expect a different pattern. Add the five sentences, and what should have been found, as new rows in your answer key.':
    'Banaye hue transcripts ke saath, English aur Hindi 10 mein se 10 laate hain, aur Hinglish lines 9 aur 0 laati hain. Aakhri line mein number shabdon mein likha tha, isliye sirf digits dhoondhne wala rule kuch nahi dekhta. Aapke apne transcripts ke saath pattern alag hoga. Paanchon sentences, aur kya milna chahiye tha, answer key mein nayi rows ki tarah jod dijiye.',
  'A line says no digits':
    'Ek line mein no digits aata hai',
  'The tool wrote the number as words, such as nau aath saat. That is a real miss, not a mistake in the cell. Count it as zero digits right.':
    'Tool ne number shabdon mein likha, jaise nau aath saat. Yeh asli miss hai, cell ki galti nahi. Ise zero digits sahi ginye.',
  'The Hindi line looks broken':
    'Hindi wali line toot-ti hui dikhti hai',
  'Paste the transcript between the quotation marks and keep the quotation marks. Hindi letters are fine inside them.':
    'Transcript ko quotation marks ke beech paste kijiye aur quotation marks rehne dijiye. Hindi akshar unke andar theek hain.',
  'Try speaker attribution yourself. It raises questions that are not only technical.':
    'Speaker attribution khud try kijiye. Isse aise sawaal uthte hain jo sirf technical nahi hain.',
  'For a meeting assistant: who said what? How long is the transcript kept? What happens when two people talk at once?':
    'Ek meeting assistant ke liye: kisne kya kaha? Transcript kitne time tak rakha jaata hai? Jab do log ek saath bolein toh kya hota hai?',
  'Attribution (who said it) … retention (how long it is kept) … overlapping speech (two voices at once) …':
    'Attribution (kisne kaha) … retention (kitne time tak rakha jaata hai) … overlapping speech (do awaazein ek saath) …',
  'Speaker attribution looks like a small technical detail, but it acts like a privacy decision.':
    'Speaker attribution chhoti technical baat lagti hai, lekin kaam privacy decision ki tarah karti hai.',
  'Let us pull it together. A PDF is a page with layout. So if you pull out only the words, things are lost without any warning.':
    'Chaliye sab jodte hain. PDF layout wala page hai. Isliye sirf words nikalne se bina kisi warning ke cheezein kho jaati hain.',
  'An image gives you likely readings, not sure ones, so you keep track of the source. A voice system is a pipeline, and each stage needs its own check. For a table or an image, the answer key comes from a person.':
    'Image aapko mumkin readings deti hai, pakki nahi, isliye aap source ka track rakhte hain. Voice system ek pipeline hai, aur har stage ko apna check chahiye. Table ya image ke liye, answer key kisi insaan se aati hai.',
  'Next, Chapter 29 builds a step-by-step way to prove whether all these parts work.':
    'Aage Chapter 29 ek qadam-dar-qadam tareeka banata hai yeh saabit karne ka ki yeh saare parts kaam karte hain ya nahi.',
});
