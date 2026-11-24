/* Hinglish for Evaluation: measuring whether search works (chapter:ch6), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Guess first: out of ten questions, how many will find the right chunk (a small piece of the document) at k=3? Write the number down and circle it.':
    'Pehle andaaza lagaiye: das sawaalon mein se kitne k=3 par sahi chunk (document ka chhota tukda) dhoondhenge? Number likhiye aur uske gird gola banaiye.',
  'Build your ground truth (your answer key), with one question that has no answer. Then measure at k=1, k=3 and k=8.':
    'Apna ground truth (apni answer key) banaiye, jisme ek aisa sawaal ho jiska jawaab hai hi nahi. Phir k=1, k=3 aur k=8 par naapiye.',
  'Change one thing in how search works. Then run the whole set of questions again.':
    'Search ke kaam karne ka sirf ek hissa badaliye. Phir saare sawaal dobara chalaiye.',
  'A results table (an evaluation), a list of pass rules (acceptance criteria), and a score line (threshold) that decides: release or not.':
    'Nateeje ki ek table (evaluation), pass hone ke niyamon ki list (acceptance criteria), aur ek score line (threshold) jo tay kare: release karna hai ya nahi.',
  'Explain why the quality bar depends on what a failure costs a person, not on the technology.':
    'Samjhaiye ki quality ki line is baat par tiki hai ki galti se kisi insaan ka kitna nuksaan hota hai, technology par nahi.',
  'A good demo is not proof. You write an answer key before you test. You count how often search finds the right chunk. You see why catching more and catching cleaner pull in opposite directions (precision and recall).':
    'Achha demo saboot nahi hota. Test se pehle aap answer key likhenge. Aap ginenge ki search kitni baar sahi chunk dhoondhta hai. Aur dekhenge ki zyada pakadna aur saaf pakadna ulti taraf kheenchte hain (precision aur recall).',
  'Say what a team must build before it can honestly quote an accuracy number.':
    'Bataiye ki accuracy ka number bolne se pehle team ko imaandari se kya banana padta hai.',
  'Name the two ways a search step fails. Say why fixing one often makes the other worse.':
    'Search step ke fail hone ke do tareeke batayiye. Aur yeh bhi ki ek ko theek karne se doosra aksar bigad kyun jaata hai.',
  'Pick which failure is worse for a feature you work on, and give your reason.':
    'Apne kisi feature ke liye chuniye ki kaun si galti zyada buri hai, aur apni wajah batayiye.',
  'Build the scoreboard, and write a ship-or-not note':
    'Build the scoreboard, and write a ship-or-not note',
  'Until now you judged the tool by looking at it. Now you give it a number. Search can fail in two ways. It can miss something that was there. Or it can report something that was not there. For Bharat Privacy Guard, a missed detail is a leak. A false alarm is only an annoyance. You will count both, for each kind of ID and each kind of writing. Then you decide: is this version good enough to use?':
    'Ab tak aapne tool ko dekh kar parkha. Ab aap use ek number denge. Search do tareeke se fail ho sakta hai. Jo cheez thi, woh chhoot sakti hai. Ya jo cheez nahi thi, woh bata di jaaye. Bharat Privacy Guard ke liye chhooti hui detail ek leak hai. Jhootha alarm bas pareshaani hai. Aap dono ginenge, har tarah ke ID aur har tarah ki likhawat ke liye. Phir tay karenge: kya yeh version kaam par lagane layak hai?',
  'Pen and paper for the thinking. The notebook (the page where you run code) for the counting. Write the note in the notes box below. Short route, about 20 minutes: steps 1, 2 and 3.':
    'Sochne ke liye kalam aur kagaz. Ginti ke liye notebook (woh page jahan code chalta hai). Note neeche ke notes box mein likhiye. Chhota route, lagbhag 20 minute: steps 1, 2 aur 3.',
  'Grow your answer key (the sheet of questions with right answers) to version 2. Use about 30 rows, spread evenly across English, Hindi and Hinglish. Add at least five tricky rows from the list on the project page. Save it as <code>evals/answer-key-v2.csv</code> (a spreadsheet saved as plain text).':
    'Apni answer key (sawaal aur sahi jawaab ki sheet) ko version 2 tak badhaiye. Lagbhag 30 rows rakhiye, English, Hindi aur Hinglish mein barabar baant kar. Project page ki list se kam se kam paanch mushkil rows jodiye. Ise <code>evals/answer-key-v2.csv</code> naam se save kijiye (plain text mein saved spreadsheet).',
  'Run the pattern checker from Chapter 5 on all 30 rows. For each item that should be found, mark it found or missed. For each item the tool reported, mark it correct or a false alarm.':
    'Chapter 5 ka pattern checker saari 30 rows par chalaiye. Jo item milna chahiye tha, usse found ya missed mark kijiye. Jo item tool ne bataya, usse correct ya false alarm mark kijiye.',
  'Work out recall and precision for each kind of ID and each kind of writing. Recall: of all the fish in the pond, how many did your net catch? Precision: of what is in your net, how much is really fish? Put the results in two small tables.':
    'Har tarah ke ID aur har tarah ki likhawat ke liye recall aur precision nikaliye. Recall: talaab ki saari machhliyon mein se aapke jaal mein kitni aayi? Precision: jaal mein jo kuch hai, usme se kitna sach mein machhli hai? Nateeje do chhoti tables mein rakhiye.',
  'Run the check at two settings you pick, for example strict matching and loose matching. Write down the numbers for both.':
    'Check ko do settings par chalaiye jo aap khud chunein, jaise strict matching aur loose matching. Dono ke numbers likh lijiye.',
  'Decide which failure is worse for this tool: a missed detail or a false alarm. Say why in two sentences. Think about what happens to a real person each time.':
    'Tay kijiye ki is tool ke liye kaun si galti zyada buri hai: chhooti hui detail ya jhootha alarm. Do vaakyon mein wajah likhiye. Sochiye ki har baar ek asli insaan ke saath kya hota hai.',
  'Write the note. Pick one setting. Say which failure you accept, and who made that call. Say if this version is good enough to use.':
    'Note likhiye. Ek setting chuniye. Bataiye ki aap kaun si galti sahenge, aur yeh faisla kisne liya. Aur yeh bhi ki kya yeh version kaam par lagane layak hai.',
  'Save the note as <code>docs/scoreboard-v0.md</code> in your repository (an online folder that remembers every change).':
    'Note ko apni repository (ek online folder jo har badlav yaad rakhta hai) mein <code>docs/scoreboard-v0.md</code> naam se save kijiye.',
  'The answer key, version 2, with about 30 rows, saved in your repository.':
    'Answer key, version 2, lagbhag 30 rows ke saath, aapki repository mein save.',
  'Two tables of recall and precision: one by kind of ID, one by kind of writing.':
    'Recall aur precision ki do tables: ek har tarah ke ID ke hisaab se, ek har tarah ki likhawat ke hisaab se.',
  'The numbers for both settings.':
    'Dono settings ke numbers.',
  'A note that picks one setting, names the failure you accept, and says if this version is good enough.':
    'Ek note jo ek setting chune, bataye ki aap kaun si galti sahte hain, aur kahe ki yeh version kaafi achha hai ya nahi.',
  'Ask anything, and it hands back a ranked list. It never says "nothing found".':
    'Kuch bhi poochhiye, woh ek ranked list thama deta hai. Woh kabhi "kuch nahi mila" nahi kehta.',
  'Embeddings find the nearest chunks (an embedding is an address for meaning)':
    'Embeddings sabse paas ke chunks dhoondhte hain (embedding matlab ka pata hai)',
  'Nearest is not the same as right. A near chunk can still be the wrong answer.':
    'Sabse paas ka hona aur sahi hona ek jaisa nahi. Paas wala chunk bhi galat jawaab ho sakta hai.',
  'You need a pen and paper, and the notebook (the page where you run code) for counting. Bring the document from Chapter 3. Your <code>retrieve</code> function (a named recipe: give it a question, it gives back chunks) from Chapter 5 is still in your session. After a reload, press <strong>Restore</strong>.':
    'Aapko kalam, kagaz aur ginti ke liye notebook (woh page jahan code chalta hai) chahiye. Chapter 3 ka document saath rakhiye. Chapter 5 ka <code>retrieve</code> function (naam wali recipe: sawaal dijiye, chunks wapas milte hain) abhi bhi aapke session mein hai. Reload ke baad <strong>Restore</strong> dabaiye.',
  'You now have a search step that finds chunks (small pieces of your document) by meaning. It seems to work. But soon someone senior will ask: is it good? Often the reply is a demo of three questions that worked. Three wins do not tell you how often it is right.':
    'Ab aapke paas ek search step hai jo matlab se chunks (document ke chhote tukde) dhoondhta hai. Lagta hai kaam karta hai. Par jaldi hi koi senior poochhega: kya yeh achha hai? Aksar jawaab hota hai teen sawaalon ka demo jo chal gaye. Teen jeet se yeh nahi pata chalta ki woh kitni baar sahi hai.',
  'In this chapter you learn to measure it. It is not hard. If you have ever written acceptance criteria (rules that say what counts as a pass), you know most of it already. There are three ideas.':
    'Is chapter mein aap use naapna seekhenge. Yeh mushkil nahi hai. Agar aapne kabhi acceptance criteria (pass kya maana jaayega, uske niyam) likhe hain, to zyadatar aap jaante hain. Teen idea hain.',
  'Idea 1: Write the answers before you test':
    'Idea 1: Write the answers before you test',
  'Say you ask a system questions and check if the answers look right. They will look right. A model is a parrot that has read a whole library, and it always sounds sure. So this test tells you nothing.':
    'Maan lijiye aap system se sawaal poochhte hain aur dekhte hain ki jawaab theek lagte hain ya nahi. Woh theek hi lagenge. Model ek tota hai jisne poori library padh li hai, aur woh hamesha pakka bolta hai. Isliye yeh test kuch nahi batata.',
  'So first write real questions, each with its checked right answer. This list is called <strong>ground truth</strong>. It is an answer key, written before the test, like the teacher\'s key.':
    'Isliye pehle asli sawaal likhiye, har ek ke saath uska jaancha hua sahi jawaab. Is list ko <strong>ground truth</strong> kehte hain. Yeh test se pehle likhi answer key hai, jaise teacher ki key.',
  'Ten to thirty questions is enough to start. Use real questions, in the words users really use. If you write questions after reading the documents, you copy the documents\' words. That makes search look better than it is.':
    'Shuru ke liye das se tees sawaal kaafi hain. Asli sawaal rakhiye, un shabdon mein jo users sach mein bolte hain. Agar aap documents padhne ke baad sawaal likhenge, to aap documents ke hi shabd dohrayenge. Isse search asli se behtar dikhta hai.',
  'Write the answer key':
    'Write the answer key',
  'Open your Chapter 3 document. Write ten questions: the eight you already have, plus two new ones. One new question must have no answer: ask about something the document does not cover.':
    'Chapter 3 ka document kholiye. Das sawaal likhiye: aapke paas jo aath hain, plus do naye. Ek naye sawaal ka jawaab nahi hona chahiye: aisi cheez poochhiye jo document mein hai hi nahi.',
  'For each question, write the checked answer and the number of the card (chunk) that holds it. Checked means you looked it up. It does not mean you remember it.':
    'Har sawaal ke liye jaancha hua jawaab likhiye, aur us card (chunk) ka number jisme woh hai. Jaancha hua matlab aapne dekha hai. Yaad hai, yeh matlab nahi.',
  'You now have a table with ten rows, written before any counting. This is your ground truth. Put one no-answer row in every answer key you write.':
    'Ab aapke paas das rows ki table hai, kisi ginti se pehle likhi hui. Yahi aapka ground truth hai. Har answer key mein ek bina-jawaab wali row zaroor rakhiye.',
  'Before you measure, make one guess. It takes a minute, and it teaches you something.':
    'Naapne se pehle ek andaaza lagaiye. Ek minute lagta hai, aur kuch sikha deta hai.',
  'A fraction, like 6/10':
    'Ek fraction, jaise 6/10',
  'The book shows one team\'s result. Now guess your own: of your ten honest questions, how many find the right chunk on the first try? Write it before you run.':
    'Kitaab mein ek team ka nateeja hai. Ab apna andaaza lagaiye: aapke das imaandaar sawaalon mein se kitne pehli koshish mein sahi chunk dhoondhenge? Run karne se pehle likhiye.',
  'Six or seven out of ten is a normal, healthy first score for a system that works.':
    'Das mein se chhe ya saat, kaam karte system ka pehla normal aur achha score hai.',
  'If you got nine or ten, you probably wrote the questions after reading the documents. Then search only has to match text to its own words. Real users do not do that.':
    'Agar aapko nau ya das mile, to shayad aapne sawaal documents padhne ke baad likhe. Tab search ko bas text ko usi ke shabdon se milana hota hai. Asli users aisa nahi karte.',
  'A company says "our accuracy is 95%". Ask: <em>on which answer key, written by whom, and may I see the questions?</em> If they cannot show you, the number is not proof.':
    'Koi company kehti hai "hamari accuracy 95% hai". Poochhiye: <em>kis answer key par, kisne likhi, aur kya main sawaal dekh sakta hoon?</em> Agar woh dikha nahi sakte, to woh number saboot nahi hai.',
  'Now test your own search. Start with a guess.':
    'Ab apne search ko parkhiye. Pehle ek andaaza lagaiye.',
  'Predict, then measure':
    'Predict, then measure',
  'Before you run anything, guess: of the nine questions that have an answer, how many will bring back the right card with <code>k=3</code> (k is how many chunks you fetch each time)? Write the number down.':
    'Kuch bhi run karne se pehle andaaza lagaiye: jin nau sawaalon ka jawaab hai, unme se kitne <code>k=3</code> par sahi card layenge (k matlab har baar kitne chunks laane hain)? Number likh lijiye.',
  'Mark the run against your answer key. Count how many of the nine got the right card. Count how many of the twenty-seven cards that came back were useful. Then look at what came back for the no-answer question, and note its top score.':
    'Run ko apni answer key se milaiye. Ginye ki nau mein se kitnon ko sahi card mila. Ginye ki wapas aaye sattaais cards mein se kitne kaam ke the. Phir dekhiye ki bina-jawaab wale sawaal par kya aaya, aur uska sabse upar wala score note kijiye.',
  'Compare the result with your guess. Most people guess too high. Write one sentence about how big your gap is. That gap is why a demo should never decide if a system goes live.':
    'Nateeje ko apne andaaze se milaiye. Zyadatar log zyada andaaza lagate hain. Apne fark ke baare mein ek vaakya likhiye. Isi fark ki wajah se ek demo ko kabhi yeh tay nahi karna chahiye ki system live jaayega ya nahi.',
  'Idea 2: Precision and recall trade against each other':
    'Idea 2: Precision and recall trade against each other',
  'Say you send a helper to fetch files for a meeting. They can go wrong in two ways. They may leave out a file that mattered. Or they may bring a huge pile of files you did not need.':
    'Maan lijiye aap kisi madadgaar ko meeting ki files lene bhejte hain. Woh do tareeke se galat ja sakta hai. Woh zaroori file chhod sakta hai. Ya woh aisi files ka bada dher le aa sakta hai jo chahiye nahi thi.',
  'Leaving out what mattered is low <strong>recall</strong> (your net missed fish). Bringing a pile you did not need is low <strong>precision</strong> (your net is full of weeds). One setting sits between the two: how many chunks you fetch for each question. It is called <strong>k</strong>.':
    'Zaroori cheez chhod dena kam <strong>recall</strong> hai (jaal se machhli chhoot gayi). Faltu cheezon ka dher le aana kam <strong>precision</strong> hai (jaal mein ghaas-phoos bhar gaya). In dono ke beech ek setting hai: har sawaal par kitne chunks laane hain. Ise <strong>k</strong> kehte hain.',
  'A bigger k usually raises recall and lowers precision. A smaller k does the opposite. This is a habit, not a law. So measure it on your own questions.':
    'Bada k aam taur par recall badhata hai aur precision ghatata hai. Chhota k ulta karta hai. Yeh aadat hai, kanoon nahi. Isliye apne hi sawaalon par naapiye.',
  'Precision and recall are the inclusion and exclusion errors in beneficiary targeting. Low precision lets ineligible people in. Low recall leaves eligible people out. You have already had to choose which error a scheme can live with.':
    'Precision aur recall wahi inclusion aur exclusion errors hain jo beneficiary targeting mein hote hain. Kam precision se ayogya log andar aa jaate hain. Kam recall se yogya log bahar reh jaate hain. Aap pehle bhi tay kar chuke hain ki scheme kaun si galti sah sakti hai.',
  'You rarely get both at their best. Change k and watch what happens:':
    'Dono ek saath sabse achhe shayad hi milte hain. k badaliye aur dekhiye kya hota hai:',
  'Change k and compare':
    'Change k and compare',
  'Mark the same ten questions again at <code>k=1</code> and at <code>k=8</code>. Fill in this table by hand:':
    'Wahi das sawaal dobara <code>k=1</code> aur <code>k=8</code> par jaanchiye. Yeh table haath se bhariye:',
  'right-card hits (out of 9)':
    'sahi card mile (9 mein se)',
  'useful cards / all cards fetched':
    'kaam ke cards / laaye gaye saare cards',
  '… / 9':
    '… / 9',
  '… / 27':
    '… / 27',
  '… / 72':
    '… / 72',
  'A bigger k often finds more right cards. But a smaller share of what comes back is useful. Measure both on your own documents. More chunks also means more tokens (Lego bricks of text) in each request, and the actual cost also depends on chunk sizes, prompt length, output length, caching and pricing. Write down real token counts and latency (waiting time) before you decide.':
    'Bada k aksar zyada sahi cards dhoondhta hai. Par jo wapas aata hai usme kaam ki cheezon ka hissa chhota ho jaata hai. Dono apne documents par naapiye. Zyada chunks ka matlab har request mein zyada tokens (text ki Lego eentein) bhi hai, aur asli kharch chunk ke size, prompt ki lambai, jawaab ki lambai, caching aur pricing par bhi tikta hai. Faisla karne se pehle asli token counts aur latency (intezaar ka samay) likh lijiye.',
  'Idea 3: Which failure is worse depends on the product':
    'Idea 3: Which failure is worse depends on the product',
  'If you cannot have both, which one do you guard? That is a product choice, not a technical one.':
    'Agar dono nahi mil sakte, to kise bachana hai? Yeh product ka faisla hai, technical nahi.',
  'Take a bot that answers customers\' policy questions. Here low precision is the danger. The model builds a sure-sounding wrong answer from stuff that does not fit. A wrong policy told to a customer is a liability. A missed answer only makes a support ticket.':
    'Ek bot lijiye jo customers ke policy sawaalon ke jawaab deta hai. Yahan kam precision khatra hai. Model bekaar saamagri se pakka-sa lagne wala galat jawaab bana deta hai. Customer ko galat policy bata dena zimmedari ban jaata hai. Chhoota hua jawaab sirf ek support ticket banata hai.',
  'Now take a tool that helps a lawyer find old cases. It is the other way round. A missed case can lose the trial. An extra useless result costs thirty seconds of reading.':
    'Ab ek tool lijiye jo vakeel ko purane cases dhoondhne mein madad karta hai. Yahan ulta hai. Chhoota hua case mukadma haara sakta hai. Ek faltu result sirf tees second ka padhna hai.',
  'Pick which failure to cut down by asking what happens to a real person each time. The product owner makes this call, not the person who built the system.':
    'Kaun si galti ghatani hai, yeh is se chuniye ki har baar ek asli insaan ke saath kya hota hai. Yeh faisla product owner ka hai, system banane wale ka nahi.',
  'Think of something you work on. Which failure is cheap, and which is dangerous? Say it in terms of what happens to a real user. Then say how many chunks you would fetch to start with.':
    'Apne kisi kaam ka sochiye. Kaun si galti sasti hai, aur kaun si khatarnaak? Ise asli user ke saath hone wali baat ke roop mein kahiye. Phir bataiye ki shuru mein aap kitne chunks layenge.',
  'For … the dangerous failure is … because … so I would start at k = …':
    'For … the dangerous failure is … because … so I would start at k = …',
  'A strong answer ties the choice to what happens next. For example: “For our support assistant, irrelevant results are dangerous. A wrong policy told to a customer is a promise we must keep. A missed answer only makes a ticket we already get. So we protect precision, start with a low k, and teach the assistant to say it does not know.” The reasoning matters more than the number.':
    'Achha jawaab apne chunav ko aage hone wali baat se jodta hai. Jaise: “Hamare support assistant ke liye faltu results khatarnaak hain. Customer ko bataayi galat policy ek vaada ban jaati hai jo hume nibhana padta hai. Chhoota hua jawaab bas ek ticket banata hai jo hume pehle se milte hain. Isliye hum precision bachate hain, chhote k se shuru karte hain, aur assistant ko sikhate hain ki woh bole ki use nahi pata.” Wajah number se zyada zaroori hai.',
  'Most people who talk about an AI feature have no answer key. With one, you can say if the system works, and show a number you measured yourself.':
    'AI feature ki baat karne wale zyadatar logon ke paas answer key nahi hoti. Key ho to aap keh sakte hain ki system kaam karta hai ya nahi, aur apna khud naapa hua number dikha sakte hain.',
  'You have now seen the whole search step: finding chunks by words, finding them by meaning, and measuring how well each one works. Next, in Chapter 7, you join the pieces with a model. You build your first retrieval-augmented generation (RAG) system: an open-book exam, where you first find the right page, then answer from it.':
    'Ab aapne poora search step dekh liya: shabdon se chunks dhoondhna, matlab se dhoondhna, aur naapna ki dono kitne achhe hain. Aage, Chapter 7 mein, aap in tukdon ko model ke saath jodte hain. Aap apna pehla retrieval-augmented generation (RAG) system banate hain: open-book exam jaisa, jahan pehle sahi page dhoondhte hain, phir usi se jawaab dete hain.',
});
