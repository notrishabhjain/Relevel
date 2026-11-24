/* Hinglish for Evaluation engineering: test sets and release gates (chapter:ch16e), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Before you improve anything, write twenty tests. Include normal questions, reworded ones, unclear ones, ones with no answer, other languages, tricky attacks and cases where the tool must be used.':
    'Kuch bhi improve karne se pehle 20 tests likhiye. Normal sawaal rakhiye, doosre tareeke se pooche hue sawaal, unclear sawaal, jinka koi jawaab nahi woh sawaal, doosri languages, tricky attacks, aur woh cases jahan tool ka use karna zaroori hai.',
  'Make the checks run by themselves for retrieval (finding the right page), structure (the form\'s boxes), tool use and the final answer. Use a model as judge (a second student marking homework) only where a simple exact check cannot do the job.':
    'Retrieval (sahi page dhoondhna), structure (form ke khaane), tool use aur final jawaab ke checks apne aap chalne wale banaiye. Model ko judge (homework check karne wala doosra student) tabhi banaiye jahan ek simple exact check se kaam nahi chalta.',
  'Change the prompt, then the model, then the index, one at a time. Run the regression test (the old cases that must still pass) each time. Then compare the judge\'s labels with human labels on a small sample.':
    'Prompt badaliye, phir model, phir index, ek-ek karke. Har baar regression test chalaiye (purane cases jo ab bhi pass hone chahiye). Phir ek chhote sample par judge ke labels ko insaanon ke labels se compare kijiye.',
  'A working evaluation harness (code that runs your tests) and a release gate (the pass mark before going live).':
    'Ek chalta hua evaluation harness (code jo aapke tests chalata hai) aur ek release gate (live jaane se pehle ka pass mark).',
  'No change goes live because a demo looked better. It goes live because it passed the gate, like a student who passed the exam.':
    'Koi change sirf isliye live nahi jaata ki demo achha lag raha tha. Woh tab jaata hai jab woh gate pass kar leta hai, jaise woh student jo exam mein pass hua.',
  'Golden set':
    'Golden set',
  'The cases you chose with care, with a version number. Every change is measured against them, like the same exam paper for every student.':
    'Woh cases jo aapne sochkar chune, version number ke saath. Har change inhi ke against naapa jaata hai, jaise har student ke liye ek hi exam paper.',
  'Using a model to score another model\'s output. It is a marker, not an all-knowing oracle. So find out how often it disagrees with human labels.':
    'Ek model se doosre model ke output ko score karwana. Woh ek marker hai, sab kuch jaanne wala oracle nahi. Isliye pata kijiye ki woh insaanon ke labels se kitni baar alag jaata hai.',
  'Regression test':
    'Regression test',
  'A case that passed before and must still pass now. If it breaks, the change made something worse.':
    'Ek aisa case jo pehle pass hota tha aur ab bhi pass hona chahiye. Agar woh toote, toh change ne kuch bigaad diya.',
  'The pass marks a change must reach before it goes live, however good the demo looked, like the railing at a level crossing.':
    'Woh pass marks jo kisi change ko live jaane se pehle chhune padte hain, demo chahe kitna bhi achha laga ho, jaise railway crossing ka phatak.',
  'In Chapter 6 you learned to measure. Now you turn that measuring into a release process. It has a test set with a version number, scores at several levels, and a gate that decides if a change goes live.':
    'Chapter 6 mein aapne measure karna seekha tha. Ab aap us measuring ko release process banate hain. Usmein version number wala test set hai, kai levels par scores hain, aur ek gate hai jo tay karta hai ki change live jayega ya nahi.',
  'Build a test set with a version number that still works after you change a prompt, a model or an index (the search shelf).':
    'Version number wala test set banana paana jo prompt, model ya index (search ki shelf) badalne ke baad bhi kaam kare.',
  'Score the system at several levels, so one good final number cannot hide a part that is broken.':
    'System ko kai levels par score kar paana, taaki ek achha final number kisi toote hue part ko chhupa na sake.',
  'Say where an LLM judge (a model that marks answers) is fine to use and where it is not.':
    'Bata paana ki LLM judge (jo model jawaab check karta hai) kahan theek hai aur kahan nahi.',
  'Build the release gate':
    'Release gate banaiye',
  'Without a release gate, measuring only makes a report that nobody has to act on. You learned to build a test set that still works after a change of prompt, model or index. You learned to score at several levels, so a good total cannot hide a broken part. You learned where an automatic marker is fine. Now you build the gate that every new version of the tool must pass before it ships.':
    'Release gate ke bina measuring sirf ek report bana deti hai jis par kisi ko action nahi lena padta. Aapne seekha ki aisa test set kaise banate hain jo prompt, model ya index badalne ke baad bhi kaam kare. Aapne seekha ki kai levels par score kaise karte hain, taaki ek achha total kisi toote hue part ko na chhupa sake. Aapne seekha ki automatic marker kahan theek hai. Ab aap woh gate banate hain jo tool ke har naye version ko ship hone se pehle pass karna hoga.',
  'Your test harness from Chapter 21, with more code added.':
    'Chapter 21 ka aapka test harness, usmein aur code jodkar.',
  'Open your harness. Turn your answer key into a test set with a version number. Make a file that holds the number, plus a note that lists what changed since the last version. Call it the final version for now.':
    'Apna harness kholiye. Apne answer key ko version number wale test set mein badaliye. Ek file banaiye jisme number ho, aur ek note jisme likha ho ki pichhle version se kya badla. Abhi ke liye use final version kahiye.',
  'Score at three levels. First, each finder on its own. Second, the whole tool on whole sentences. Third, the cleaned text, marked by your automatic marker from Chapter 14.':
    'Teen levels par score kijiye. Pehla, har finder akela. Doosra, poora tool poore sentences par. Teesra, cleaned text, jo Chapter 14 ke aapke automatic marker se mark hua ho.',
  'Write the gate. For each score, write the lowest number a new version may have to be released. Add a rule: the score for any single kind of ID may not drop, even if the overall score goes up.':
    'Gate likhiye. Har score ke liye woh sabse kam number likhiye jo naye version ko release hone ke liye chahiye. Ek rule jodiye: kisi ek kisam ki ID ka score gir nahi sakta, chahe overall score badh jaaye.',
  'Make the gate run with one command (one line you type) that prints PASS or FAIL.':
    'Gate ko ek command se chalne wala banaiye (ek line jo aap type karte hain) jo PASS ya FAIL print kare.',
  'Prove it works. Change one rule so it breaks Aadhaar finding. Run the gate. Show that it says FAIL.':
    'Prove kijiye ki yeh kaam karta hai. Ek rule badaliye taaki Aadhaar finding toot jaaye. Gate chalaiye. Dikhaiye ki woh FAIL bolta hai.',
  'Say where the automatic marker is fine in the gate, and where only your own marking will do.':
    'Bataiye ki gate mein automatic marker kahan theek hai, aur kahan sirf aapki apni marking chalegi.',
  'A test set with a version number and a note on what changed.':
    'Version number wala ek test set aur badlaav ka ek note.',
  'Scores at three levels.':
    'Teen levels par scores.',
  'A gate with a lowest number for every score, and a rule for each kind of ID.':
    'Har score ke liye sabse kam number wala gate, aur har kisam ki ID ke liye ek rule.',
  'A one-command run that prints PASS or FAIL, and proof that it fails a broken change.':
    'Ek command wala run jo PASS ya FAIL print kare, aur saboot ki woh kharab change ko fail karta hai.',
  'Answer keys, recall and precision':
    'Answer keys, recall aur precision',
  'Chapter 6 built the measuring. This chapter makes it bigger.':
    'Chapter 6 mein measuring banayi thi. Yeh chapter use bada karta hai.',
  'A model can mark many answers fast':
    'Model bahut saare jawaab tezi se check kar sakta hai',
  'Chapter 14 introduced the judge, and the ways it can lean unfairly (bias).':
    'Chapter 14 mein judge aur uske jhukaav (bias) ka zikr aaya tha.',
  'You get better by reading the wrong answers one by one':
    'Galat jawaabon ko ek-ek karke padhne se aap behtar hote hain',
  'You learned this in Chapter 14.5. Automation does not take its place.':
    'Yeh aapne Chapter 14.5 mein seekha tha. Automation iski jagah nahi leta.',
  'Keep your answer key from Chapter 6, your judge from Chapter 14 and your experiment harness (the code that runs your tests) ready.':
    'Chapter 6 ka apna answer key, Chapter 14 ka judge aur apna experiment harness (jo code aapke tests chalata hai) taiyaar rakhiye.',
  'Do units 16.1 and 16.6. Then run the gate cell (the box of code) below. This time, only read the other units.':
    'Units 16.1 aur 16.6 kijiye. Phir neeche ka gate cell (code ka dabba) chalaiye. Is baar baaki units sirf padh lijiye.',
  'In Chapter 6 you made an answer key and learned to score against it. That was measuring. Now the whole team makes it a habit. You also add a rule that decides if a change goes live.':
    'Chapter 6 mein aapne ek answer key banaya aur uske against score karna seekha. Woh measuring thi. Ab poori team use aadat bana leti hai. Aap ek rule bhi jodte hain jo tay karta hai ki change live jayega ya nahi.',
  'You will build three things. One is a fixed set of test questions. One is a single steady way to mark them. One is a pass mark agreed in advance. After that, "the demo looked better" is no longer an argument.':
    'Aap teen cheezein banayenge. Ek, test sawaalon ka fixed set. Ek, unhe check karne ka ek hi tikne wala tareeka. Ek, pehle se tay kiya hua pass mark. Uske baad "demo achha lag raha tha" koi argument nahi rehta.',
  'Think of a school. It does not judge a student on one good answer. Everyone sits the same paper. It is marked the same way. The pass mark is agreed first. An AI feature needs the same fairness.':
    'School sochiye. Woh student ko ek achhe jawaab par judge nahi karta. Sab ek hi paper dete hain. Sabka paper ek hi tareeke se check hota hai. Pass mark pehle tay hota hai. AI feature ko bhi aisi hi fairness chahiye.',
  'Every AI feature needs a test set, and the test set needs a version number. If you cannot run the test again after a change, it is only a story.':
    'Har AI feature ko ek test set chahiye, aur test set ko ek version number. Agar aap change ke baad test dobara chala nahi sakte, toh woh sirf ek kissa hai.',
  'The seven units below take you from the test set to the final release decision. Each one builds on the one before.':
    'Neeche ke saat units aapko test set se final release decision tak le jaate hain. Har unit pichhle unit par bana hai.',
  'Golden datasets':
    'Golden datasets',
  'Make a set of cases with a version number. Include normal cases, edge cases (odd, rare cases) and cases where the system has failed.':
    'Cases ka ek set banaiye, version number ke saath. Usmein normal cases rakhiye, edge cases (ajeeb, kam hone wale cases) aur woh cases jahan system fail hua hai.',
  'A golden dataset is the team\'s memory of what "good" means for your app.':
    'Golden dataset team ki yaaddasht hai ki aapki app ke liye "good" ka matlab kya hai.',
  'Make at least 30 cases. Cover the normal path, reworded questions, unclear questions, questions with no answer, other languages, attacks and cases that need a tool.':
    'Kam se kam 30 cases banaiye. Normal path, doosre tareeke se pooche hue sawaal, unclear sawaal, jinka jawaab nahi hai woh sawaal, doosri languages, attacks, aur woh cases jinhe tool chahiye, sab cover kijiye.',
  'For each case, write down the behaviour you expect. Where you can, also write down the IDs of the evidence it should use.':
    'Har case ke liye woh behaviour likhiye jo aap expect karte hain. Jahan ho sake, un evidence ke IDs bhi likhiye jinka use hona chahiye.',
  'Take away one group of cases. See which regressions (things that got worse) you can no longer notice.':
    'Cases ka ek group hata dijiye. Dekhiye ki kaun se regressions (cheezein jo bigad gayi) ab aapko dikhna band ho gaye.',
  'Golden Dataset v1.0.':
    'Golden Dataset v1.0.',
  'Does the set show the risks real users face, or only the easy demos?':
    'Kya yeh set asli users ke risks dikhata hai, ya sirf aasaan demos ko?',
  'The dataset becomes the promise you make about product quality.':
    'Dataset product quality ke baare mein aapka vaada ban jaata hai.',
  'Sort failures into kinds, like sorting complaints into piles. Then you fix the causes, not just the symptoms.':
    'Failures ko kinds mein baantiye, jaise shikayaton ke dher banate hain. Phir aap sirf symptoms nahi, causes ko fix karte hain.',
  '"Wrong answer" is too broad. It does not tell engineers what to fix.':
    '"Wrong answer" bahut broad hai. Isse engineers ko pata nahi chalta kya fix karna hai.',
  'Make the categories: retrieval miss (the right page was not found), wrong chunk, stale data (old data), instruction failure, schema failure (the form was not filled right), tool failure, authorization failure and hallucination (confident make-believe).':
    'Yeh categories banaiye: retrieval miss (sahi page nahi mila), wrong chunk, stale data (purana data), instruction failure, schema failure (form sahi nahi bhara), tool failure, authorization failure aur hallucination (pakke yakeen se boli gayi banawati baat).',
  'Put one of these category labels on 20 real failures.':
    '20 asli failures par in categories mein se ek label lagaiye.',
  'Ask two people to label the same failures. Then see where they disagree.':
    'Do logon se wahi failures label karwaiye. Phir dekhiye ki woh kahan alag-alag label karte hain.',
  'Error Taxonomy (a sorted list of mistake kinds) plus labelled examples.':
    'Error Taxonomy (galtiyon ki kisme, sort ki hui list) aur labelled examples.',
  'Which categories lead to a clear next step?':
    'Kaun si categories se saaf agla kadam nikalta hai?',
  'Good categories change what the team does next.':
    'Achhi categories team ka agla kadam badal deti hain.',
  'Retrieval metrics':
    'Retrieval metrics',
  'Measure Recall@k, Precision@k and similar ranking measures. Recall asks how many of the right pages your net caught. Precision asks how much of the net is really fish. Use clear labels for what counts as relevant.':
    'Recall@k, Precision@k aur isi tarah ke ranking measures naapiye. Recall poochta hai ki sahi pages mein se aapke jaal mein kitne aaye. Precision poochta hai ki jaal mein kitna hissa sach mein machhli hai. Saaf labels rakhiye ki relevant ka matlab kya hai.',
  'A metric (a number you watch) tells you something only when "relevant" is clearly defined.':
    'Metric (ek number jo aap dekhte hain) tabhi kuch batata hai jab "relevant" ka matlab saaf tay ho.',
  'For each query, mark which chunks (index cards) are relevant. Then work out Recall@k and Precision@k.':
    'Har query ke liye mark kijiye ki kaun se chunks (index cards) relevant hain. Phir Recall@k aur Precision@k nikaaliye.',
  'Compare what you get at k=1, 3, 5 and 10.':
    'k=1, 3, 5 aur 10 par jo milta hai, usse compare kijiye.',
  'Add some distractor chunks. They look related but are not. Watch how the metrics change.':
    'Kuch distractor chunks daaliye. Woh related lagte hain lekin hain nahi. Dekhiye ki metrics kaise badalte hain.',
  'Retrieval Evaluation Notebook.':
    'Retrieval Evaluation Notebook.',
  'What exactly counts as relevant?':
    'Relevant ka bilkul sahi matlab kya hai?',
  'Never report a retrieval metric without saying how you decided what is relevant.':
    'Retrieval metric tab tak report mat kijiye jab tak aap yeh na bata dein ki relevant kaise tay kiya.',
  'Generation and task success':
    'Generation aur task success',
  'Check if the final answer is correct, is based on the evidence (grounded), is complete, and is useful for the task.':
    'Check kijiye ki final jawaab correct hai, evidence par tika hai (grounded), complete hai, aur task ke liye kaam ka hai.',
  'A system can score well on retrieval and still give a bad answer.':
    'Ek system retrieval mein achha score kar sakta hai aur phir bhi kharab jawaab de sakta hai.',
  'Write yes-or-no or graded rules for when an answer counts as correct and grounded.':
    'Haan-ya-na wale ya graded rules likhiye ki jawaab kab correct aur grounded maana jaayega.',
  'Score a fixed sample, using labels that people gave.':
    'Ek fixed sample ko score kijiye, un labels ke saath jo insaanon ne diye.',
  'Include answers that are only partly right, and answers that sound too sure of themselves.':
    'Aise jawaab bhi rakhiye jo sirf aadhe sahi hain, aur woh jawaab bhi jo zaroorat se zyada pakke yakeen se bole gaye lagte hain.',
  'Generation Rubric (a marking guide) plus a labelled sample.':
    'Generation Rubric (marking ki guide) aur ek labelled sample.',
  'Can two reviewers use the rubric and reach the same result?':
    'Kya do reviewers rubric lagakar ek hi result tak pahunch sakte hain?',
  'Acceptance criteria (the rules for "good enough") should be something you can see, not just "it sounds good".':
    'Acceptance criteria ("kaafi achha" ke rules) aisi cheez honi chahiye jo aap dekh sakein, sirf "achha lag raha hai" nahi.',
  'Use a model as judge where an exact check is not enough. Then check the judge against human labels, like checking the marker against the teacher.':
    'Jahan exact check kaafi nahi hai, wahan model ko judge banaiye. Phir judge ko insaanon ke labels se check kijiye, jaise marker ko teacher se check karte hain.',
  'A judge is one more part that can be wrong. So measure how often it agrees with people.':
    'Judge bhi ek aur part hai jo galat ho sakta hai. Isliye naapiye ki woh insaanon se kitni baar sehmat hota hai.',
  'Have a judge score 20 examples for groundedness (is the answer based on the evidence?) or relevance.':
    'Ek judge se 20 examples ko groundedness (kya jawaab evidence par tika hai?) ya relevance ke liye score karwaiye.',
  'Compare the judge\'s decisions with the human labels. Work out how often they disagree.':
    'Judge ke decisions ko insaanon ke labels se compare kijiye. Nikaaliye ki woh kitni baar alag jaate hain.',
  'Swap the order of the answers, or make them longer or shorter. See if the judge likes a certain position or length.':
    'Jawaabon ka order badaliye, ya unhe lamba ya chhota kijiye. Dekhiye ki judge ko koi khaas position ya length zyada pasand toh nahi.',
  'Judge Validation Report.':
    'Judge Validation Report.',
  'Where does the judge disagree with people, and why?':
    'Judge insaanon se kahan alag jaata hai, aur kyun?',
  'Never let a judge you have not checked quietly become the one who decides if you release.':
    'Jis judge ko aapne check nahi kiya, use kabhi chupchaap release ka faisla karne wala mat banne dijiye.',
  'Regression and CI gates':
    'Regression aur CI gates',
  'Run the evaluation by itself whenever a prompt, model, index or tool changes.':
    'Jab bhi prompt, model, index ya tool badle, evaluation apne aap chalaiye.',
  'An AI system can get worse with no error showing, even when the code builds fine.':
    'Ek AI system bina kisi error dikhe bhi kharab ho sakta hai, chahe code theek se build ho jaaye.',
  'Make one command that runs the golden set and prints a summary.':
    'Ek aisa command banaiye jo golden set chalaye aur summary print kare.',
  'Set thresholds (lowest allowed numbers). Make the run fail when quality or safety drops below them.':
    'Thresholds set kijiye (sabse kam allowed numbers). Run ko fail karwaiye jab quality ya safety unse neeche aaye.',
  'Change a prompt. Check that CI (the automatic checker that runs your tests) catches the regression.':
    'Ek prompt badaliye. Check kijiye ki CI (woh automatic checker jo aapke tests chalata hai) regression pakad leta hai.',
  'Automated Evaluation Suite plus Release Gate.':
    'Automated Evaluation Suite aur Release Gate.',
  'What exact condition blocks a release?':
    'Kaun si exact condition release rokti hai?',
  'This is the AI version of a test suite, for software that does not always behave the same way.':
    'Yeh test suite ka AI version hai, aise software ke liye jo har baar ek jaisa behave nahi karta.',
  'Evaluation release decision':
    'Evaluation release decision',
  'Bring quality, safety, latency (waiting time) and cost together into one release decision. Hide no trade-off.':
    'Quality, safety, latency (intezaar ka time) aur cost ko milakar ek release decision banaiye. Koi trade-off mat chhupaiye.',
  'Shipping is a decision with several sides. One overall score can hide failures you cannot accept.':
    'Ship karna kai pehluon wala decision hai. Ek overall score aise failures chhupa sakta hai jo aap accept nahi kar sakte.',
  'Set a quality threshold, a safety threshold, a latency SLO (the response time you promise), a cost ceiling (the most you will pay) and a rollback trigger (the sign that says go back to the old version).':
    'Ek quality threshold, ek safety threshold, ek latency SLO (jis response time ka aap vaada karte hain), ek cost ceiling (sabse zyada jitna aap dene ko taiyaar hain) aur ek rollback trigger (woh nishaan jo kehta hai purane version par wapas jao) tay kijiye.',
  'Run a candidate release (a new version waiting for approval) through the gate.':
    'Ek candidate release ko (ek naya version jo manzoori ka intezaar kar raha hai) gate se guzaariye.',
  'Make a model that gets better on quality but breaks the cost limit or the safety limit.':
    'Ek aisa model banaiye jo quality mein behtar ho lekin cost limit ya safety limit tod de.',
  'Release Decision Record.':
    'Release Decision Record.',
  'Which threshold can never be bargained over?':
    'Kaun sa threshold kabhi mol-tol ke liye nahi hai?',
  'A PM (product manager) owns the plan for the decision, even when engineers build it.':
    'PM (product manager) decision ke plan ka malik hota hai, chahe engineers use banayein.',
  'Measure at several levels':
    'Kai levels par measure kijiye',
  'An AI system has several parts, so one score for the whole thing is not enough. The catch is that a smooth-talking model can cover for missing evidence. It does this often enough to look fine in a demo.':
    'Ek AI system ke kai parts hote hain, isliye poore system ka ek score kaafi nahi hai. Dikkat yeh hai ki meethi baatein karne wala model missing evidence ko chhupa leta hai. Woh yeh itni baar karta hai ki demo mein sab theek lagta hai.',
  'Check several levels at once. A good end-to-end score (for the whole path) can hide a retriever (the page-finder) that is badly broken.':
    'Kai levels ek saath check kijiye. Ek achha end-to-end score (poore raaste ka) ek bahut kharab retriever (page dhoondhne wale) ko chhupa sakta hai.',
  'The table shows six levels. Read down the right-hand column. Each question is one that a release decision needs answered.':
    'Table mein chhah levels hain. Right wale column ko upar se neeche padhiye. Har sawaal aisa hai jiska jawaab release decision ko chahiye.',
  'Example metric (a number to watch)':
    'Example metric (dekhne ka ek number)',
  'The release question it answers':
    'Release ka woh sawaal jiska yeh jawaab deta hai',
  'Recall@k, Precision@k':
    'Recall@k, Precision@k',
  'Did we fetch the right evidence?':
    'Kya humne sahi evidence nikala?',
  'Generation':
    'Generation',
  'Groundedness, task success':
    'Groundedness, task success',
  'Did the answer use the evidence correctly?':
    'Kya jawaab ne evidence ko sahi tareeke se use kiya?',
  'Tool use':
    'Tool use',
  'Tool-selection accuracy':
    'Tool-selection accuracy',
  'Did it call the right tool?':
    'Kya usne sahi tool call kiya?',
  'Step-sequence match':
    'Step-sequence match',
  'Did it reach the answer the right way?':
    'Kya woh sahi raaste se jawaab tak pahuncha?',
  'Operations':
    'Operations',
  'p95 latency, cost per task':
    'p95 latency, cost per task',
  'Can we afford to run it?':
    'Kya hum ise chalane ka kharcha utha sakte hain?',
  'Safety':
    'Safety',
  'Attack success rate':
    'Attack success rate',
  'Can a hostile input break our controls?':
    'Kya ek dushman input hamare controls tod sakta hai?',
  'You will meet many evaluation products. Each one is selling an answer to one of three questions.':
    'Aapko bahut saare evaluation products milenge. Har ek teen sawaalon mein se kisi ek ka jawaab bech raha hota hai.',
  'The first is <strong>what do we test on?</strong> The answer is a fixed set you keep, with real cases where you can. The second is <strong>who marks it?</strong> Use an exact check where you can, a person where it matters, and a model where neither can keep up. The third is <strong>what score lets it ship?</strong>':
    'Pehla hai <strong>hum kis par test karte hain?</strong> Jawaab hai ek fixed set jo aap rakhte hain, jahan ho sake asli cases ke saath. Doosra hai <strong>check kaun karta hai?</strong> Jahan ho sake exact check, jahan zaroori ho insaan, aur jahan dono ke bas ka na ho wahan model. Teesra hai <strong>kitna score aaye toh ship ho?</strong>',
  'Run a release gate':
    'Ek release gate chalaiye',
  'Here is a gate you can run now. Six rows of the answer key sit inside the cell (the box of code). It prints recall and precision for each kind of ID and each kind of writing. Then it prints PASS or FAIL. When your own file is ready, saved as <code>evals/answer-key-v1.csv</code> or a later version, load its rows in place of the list.':
    'Yeh ek gate hai jo aap abhi chala sakte hain. Answer key ki chhah rows cell (code ke dabbe) ke andar hain. Yeh har ID kind aur har writing kind ke liye recall aur precision print karta hai. Phir PASS ya FAIL print karta hai. Jab aapki apni file taiyaar ho, <code>evals/answer-key-v1.csv</code> ya uske agle version mein saved, toh list ki jagah uski rows load kijiye.',
  'Run the gate on six rows':
    'Gate ko chhah rows par chalaiye',
  'Press Run and read the last line first.':
    'Run dabaiye aur sabse pehle aakhri line padhiye.',
  'Five lines say ok. Hinglish and MOBILE say BELOW GATE, because the pattern checker cannot see the partly hidden number in row 4. The last line is FAIL. That is the right result: the gate caught a real miss. Lower a threshold only after you have written down why, with a number.':
    'Paanch lines mein ok aata hai. Hinglish aur MOBILE mein BELOW GATE aata hai, kyunki pattern checker row 4 ka aadha chhupa hua number nahi dekh paata. Aakhri line FAIL hai. Yahi sahi result hai: gate ne ek asli miss pakda. Threshold tabhi kam kijiye jab aapne number ke saath likh liya ho ki kyun.',
  'All lines say ok and the last line is PASS':
    'Saari lines mein ok aata hai aur aakhri line PASS hai',
  'You may have changed a sentence or a threshold. Put row 4 back as it was, and the gate should fail again.':
    'Shayad aapne koi sentence ya threshold badal diya. Row 4 ko wapas waisa hi kar dijiye, aur gate dobara fail hona chahiye.',
  'The Hindi row prints strange letters':
    'Hindi row mein ajeeb akshar print hote hain',
  'Your screen font is the cause, not the code. The Hindi sentence is only data, and the finding still works.':
    'Wajah aapki screen ka font hai, code nahi. Hindi sentence sirf data hai, aur finding phir bhi kaam karti hai.',
  'Now try writing that third answer yourself.':
    'Ab woh teesra jawaab aap khud likhkar dekhiye.',
  'Write the sentence that stops a release. Not a policy: the real sentence, with numbers, that you would say in the meeting.':
    'Woh sentence likhiye jo release rokta hai. Policy nahi: asli sentence, numbers ke saath, jo aap meeting mein bolenge.',
  'We are not shipping because …':
    'Hum ship nahi kar rahe kyunki …',
  'If your sentence has the word "seems", it will not stop anything. Thresholds stop releases. Impressions do not.':
    'Agar aapke sentence mein "lagta hai" jaisa word hai, toh woh kuch nahi rokega. Release thresholds rokte hain. Impressions nahi.',
  'So here is the whole chapter in a few lines. Keep a test set with a version number. Score at several levels, so a good total cannot hide a broken part. Use a model as judge only after you check it against people. Agree the pass mark before you look at the results.':
    'Toh poora chapter chand lines mein yeh hai. Version number wala test set rakhiye. Kai levels par score kijiye, taaki ek achha total kisi toote hue part ko na chhupa sake. Model ko judge tabhi banaiye jab use insaanon ke against check kar lein. Pass mark results dekhne se pehle tay kijiye.',
  'Next, in Chapter 30, you will see how to keep watching the system once it is live.':
    'Agle Chapter 30 mein aap dekhenge ki system live hone ke baad use lagaatar kaise dekhte rehte hain.',
});
