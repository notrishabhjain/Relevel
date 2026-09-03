/* Hinglish: Part IV — the decisions that stay yours (chapters 19-20).

   Generated alongside the English source: the key is the English line exactly
   as it appears in the course, so a line that is later edited in English falls
   back to English rather than showing a translation of something else. */
Object.assign(window.HING = window.HING || {}, {
  /* Part IV — The decisions that stay yours */
  'The decisions that stay yours':
    'Woh faisle jo aapke hi rehte hain',
  'What to change when it is not good enough, and what the user sees when it is wrong. Neither one is an engineering decision.':
    'Jab yeh kaafi achcha na ho tab kya badlein, aur galat hone par user ko kya dikhta hai. In dono mein se koi engineering ka faisla nahi hai.',
  '“Should we fine-tune?” — and how to answer it well':
    '"Kya humein fine-tune karna chahiye?" — aur iska achcha jawaab kaise dein',
  'There are four things you can change when a model is not good enough. The hard part is not picking one. It is naming what is actually wrong first.':
    'Jab model kaafi achcha na ho to aap chaar cheezein badal sakte hain. Mushkil hissa ek chunna nahi hai. Mushkil hissa pehle yeh naam dena hai ki asal mein galat kya hai.',
  'Name the four things you can change, and what each one genuinely fixes.':
    'Woh chaar cheezein batana jo aap badal sakte hain, aur har ek sach mein kya theek karti hai.',
  'Explain why fine-tuning is the wrong tool for “it does not know our new policy”.':
    'Yeh samjhana ki "use hamari nayi policy nahi pata" ke liye fine-tuning galat auzaar kyun hai.',
  'Say what has to exist before the question can be answered at all.':
    'Yeh batana ki is sawaal ka jawaab dene ke liye pehle kya hona zaroori hai.',
  'A list of your own failures, with counts':
    'Apne failures ki list, ginti ke saath',
  'You cannot choose what to change without knowing what is wrong and how often.':
    'Kya galat hai aur kitni baar hota hai, yeh jaane bina aap kuchh badal hi nahi sakte.',
  'A test set you trust':
    'Ek test set jis par aapko bharosa ho',
  'Every change in this chapter is invisible without one.':
    'Is chapter ka har badlav uske bina dikhta hi nahi.',
  'At some point — usually in a roadmap review, usually from the most senior person there — you will be asked: <em>should we fine-tune?</em> It is almost always asked before anyone has said what is actually wrong. Saying yes commits a quarter. Saying no sounds unambitious. The good answer is neither, and this chapter is how you earn it.':
    'Kisi na kisi mod par — aksar roadmap review mein, aksar sabse senior insaan ki taraf se — aapse poochha jaayega: <em>kya humein fine-tune karna chahiye?</em> Yeh lagbhag hamesha tab poochha jaata hai jab kisi ne yeh kaha hi nahi ki asal mein galat kya hai. Haan kehna ek quarter de dena hai. Naa kehna kam mehnati lagta hai. Achcha jawaab in dono mein se koi nahi hai, aur yeh chapter use kamane ka tareeka hai.',
  'There are four things you can change: <strong>the instructions</strong>, <strong>the evidence you give it</strong>, <strong>training it on your own examples</strong>, and <strong>which model you use</strong>. Learn them in that order, because the order is the advice.':
    'Aap chaar cheezein badal sakte hain: <strong>instructions</strong>, <strong>jo evidence aap dete hain</strong>, <strong>use apne examples par train karna</strong>, aur <strong>kaunsa model istemaal karte hain</strong>. Inhe isi kram mein seekhiye, kyunki kram hi salaah hai.',
  'Which one, and why':
    'Kaunsa, aur kyun',
  'Commit before the table. Your assistant confidently says the refund window is 30 days. The correct figure, published last month, is 45. Which of the four fixes it — and which one will a room full of people reach for?':
    'Table se pehle tay kijiye. Aapka assistant poore confidence se kehta hai ki refund window 30 din ka hai. Sahi aankda, jo pichhle mahine chhapa, 45 hai. Chaar mein se kaunsa ise theek karega — aur kamre mein baithe log kaunsa uthayenge?',
  'This is the single most common misdiagnosis in this field, and it is expensive precisely because the wrong answer sounds so reasonable.':
    'Is field ki sabse aam galat pehchaan yahi hai, aur woh theek isliye mehngi hai ki galat jawaab itna samajhdaar lagta hai.',
  'Better evidence. The system does not have the current policy, so it is producing a plausible number from what it absorbed in training, exactly as Chapter 2 said it would. The room will often reach for training it on examples, because “teach the model our policies” sounds like the shape of the problem. It is not: a trained model needs retraining the next time the number changes, and it still cannot show the user where 45 came from.':
    'Behtar evidence. System ke paas current policy hai hi nahi, isliye woh training mein jo utha tha usse ek plausible number bana raha hai, bilkul waise hi jaise Chapter 2 ne kaha tha. Kamra aksar examples par train karne ki taraf jaayega, kyunki "model ko hamari policies sikha do" samasya ke shape jaisa sunai deta hai. Woh hai nahi: train kiya hua model agli baar number badalne par phir se train karna padega, aur woh phir bhi user ko nahi dikha sakta ki 45 kahan se aaya.',
  'What you change':
    'Aap kya badalte hain',
  'What it genuinely fixes':
    'Yeh sach mein kya theek karta hai',
  'What it cannot fix':
    'Yeh kya theek nahi kar sakta',
  'Cost to try, and to undo':
    'Aazmaane ki aur wapas lene ki keemat',
  'Instructions':
    'Instructions',
  'Format, tone, when to refuse, how the task is framed':
    'Format, lehja, kab mana karna hai, kaam kis roop mein rakha gaya hai',
  'Missing knowledge; genuine reasoning limits':
    'Gayab jaankaari; sach mein sochne ki seemayein',
  'Minutes. Undone instantly':
    'Minute bhar. Turant wapas',
  'Evidence':
    'Evidence',
  'Missing, changing or private knowledge; citations':
    'Gayab, badalti ya private jaankaari; citations',
  'Behaviour and format problems':
    'Behaviour aur format ki dikkatein',
  'Days. Undone by rebuilding the index':
    'Din bhar. Index dobara banakar wapas',
  'Training on examples':
    'Examples par training',
  'Consistent shape and register, cheaply; a small model doing one job well':
    'Ek jaisa shape aur lehja, saste mein; ek chhota model ek kaam achchi tarah karta hua',
  'Facts that change; bad retrieval':
    'Woh facts jo badalte hain; kharaab retrieval',
  'Weeks, plus upkeep forever. Not undone — retrained':
    'Hafton ka kaam, plus hamesha ki dekh-rekh. Wapas nahi — dobara train',
  'A different model':
    'Ek doosra model',
  'Reasoning depth, speed, cost per query':
    'Sochne ki gehraai, speed, per query cost',
  'Bad evidence. A better model reasons better over the wrong document':
    'Kharaab evidence. Behtar model galat document par behtar sochta hai',
  'Hours, but it reopens every measurement you have':
    'Ghanton ka kaam, lekin yeh aapki har naap dobara khol deta hai',
  'Training on examples teaches behaviour, not facts. If the complaint is “it does not know our policy”, that is the wrong instrument — and it is the one most often reached for, because installing knowledge is exactly what it sounds like it should do.':
    'Examples par training behaviour sikhati hai, facts nahi. Agar shikaayat yeh hai ki "use hamari policy nahi pata", to yeh galat auzaar hai — aur yahi sabse zyada uthaya jaata hai, kyunki jaankaari daalna theek waisa hi sunai deta hai jaisa isse hona chahiye.',
  'So the useful question is never <em>which fix</em>. It is <em>what kind of wrong is this?</em> There are four kinds, and each one points at its own fix:':
    'To kaam ka sawaal kabhi <em>kaunsa ilaaj</em> nahi hota. Sawaal hota hai <em>yeh kis kism ka galat hai?</em> Chaar kismein hain, aur har ek apna ilaaj batati hai:',
  '<strong>It does not know.</strong> The answer is missing, out of date, or invented. → Evidence, and version your documents (Chapter 12).':
    '<strong>Use pata nahi hai.</strong> Jawaab gayab hai, purana hai, ya bana hua hai. → Evidence, aur apne documents ka version rakhiye (Chapter 12).',
  '<strong>It knows, but behaves wrong.</strong> Right content, wrong shape, wrong register, ignores a rule. → Instructions first, a required format second (Chapter 8), training only if those stop helping.':
    '<strong>Use pata hai, lekin behaviour galat hai.</strong> Content sahi, shape galat, lehja galat, ek niyam anadekha. → Pehle instructions, phir zaroori format (Chapter 8), aur training tabhi jab yeh dono kaam karna band kar dein.',
  '<strong>It cannot work it out.</strong> Several steps of logic, dependent arithmetic, genuine ambiguity. → Let it think, or use a stronger model (Chapter 11).':
    '<strong>Yeh nikaal nahi paata.</strong> Kai steps ka tark, aisa ganit jahan har charan pichhle par tika ho, sach mein dhundhli baat. → Use sochne dijiye, ya mazboot model lijiye (Chapter 11).',
  '<strong>It is right but too expensive.</strong> Too slow or too costly at your volume. → A smaller model, or cheap-first routing (Chapter 15).':
    '<strong>Sahi hai lekin bahut mehnga.</strong> Aapke volume par bahut dheema ya bahut mehnga. → Chhota model, ya pehle-sasta routing (Chapter 15).',
  'Notice what that diagnosis needs: a named failure with a count behind it. Which is Chapter 14’s list, doing the job it was built for. Without one, this conversation is a contest of intuitions, and the most senior intuition wins.':
    'Dhyaan dijiye is pehchaan ke liye kya chahiye: ek naam wala failure, uske peechhe ginti ke saath. Yaani Chapter 14 ki list, wahi kaam karti hui jiske liye woh bani thi. Uske bina yeh baatcheet andaazon ka mukabla hai, aur sabse senior andaaza jeet jaata hai.',
  'the user saw … kind of wrong … the fix … I would know I was right if …':
    'user ne dekha … galat ki kism … ilaaj … main sahi tha yeh mujhe … se pata chalega',
  'Diagnose something real. Take a failure you have actually seen in an AI feature — yours, or one you use. Write what the user saw, then say which of the four kinds of wrong it is, then name the fix. Then write the one measurement that would prove you picked right.':
    'Kisi asli cheez ki pehchaan kijiye. Koi aisa failure lijiye jo aapne sach mein kisi AI feature mein dekha ho — apne mein ya jise aap istemaal karte hain. Likhiye ki user ne kya dekha, phir batayiye ki yeh chaar kismon mein se kaunsi hai, phir ilaaj ka naam lijiye. Phir woh ek naap likhiye jo saabit karegi ki aapne sahi chuna.',
  'The classification is the whole exercise, and it is harder than it looks because failures arrive mixed together. “It gave a confident wrong figure” could be any of the four until you look at what was retrieved. Right passage retrieved and misread: behaviour or reasoning. Wrong passage retrieved: nothing but better retrieval helps. Right passage not in the collection at all: the fix is upstream of everything in this course. And the measurement matters as much as the diagnosis — “the right passage is retrieved 9 times in 10 instead of 6” is a claim someone can check. “It feels better” is not.':
    'Kism batana hi poora abhyaas hai, aur woh dikhne se mushkil hai kyunki failures mile-jule aate hain. "Usne poore confidence se galat aankda diya" chaaron mein se kuchh bhi ho sakta hai, jab tak aap yeh na dekh lein ki retrieve kya hua tha. Sahi passage aaya aur galat padha gaya: behaviour ya reasoning. Galat passage aaya: behtar retrieval ke alawa kuchh madad nahi karega. Sahi passage collection mein hai hi nahi: ilaaj is poore course se bhi pehle ka hai. Aur naap pehchaan jitni hi zaroori hai — "sahi passage 6 ki jagah 10 mein se 9 baar aata hai" aisa daawa hai jise koi jaanch sakta hai. "Behtar lag raha hai" nahi hai.',
  'What training on examples genuinely buys, because it does buy real things: <strong>consistency</strong> — the same structure and register across thousands of outputs, more reliably than any instruction; a <strong>small model doing a narrow job</strong> about as well as a large one, which is where most of the money is; and conventions that are tedious to describe but easy to demonstrate, like house style.':
    'Examples par training sach mein kya deti hai, kyunki woh asli cheezein deti hai: <strong>ek-jaisaapan</strong> — hazaaron outputs mein wahi structure aur lehja, kisi bhi instruction se zyada bharose ke saath; <strong>ek chhota model ek sankra kaam</strong> lagbhag bade jitna achcha karta hua, jahan zyadatar paisa hai; aur woh tareeke jinhe bataana ubaau hai lekin dikhana aasaan, jaise house style.',
  'And the costs nobody puts in the proposal: examples somebody must build and then <em>keep</em>; a test set that has to already exist, or you cannot tell whether it helped; a full re-run every time the base model is retired — Chapter 18’s treadmill, now with your training data attached; and a quiet loss of portability, because your improvement now lives inside one provider’s artefact instead of in your prompt and your index.':
    'Aur woh cost jo koi proposal mein nahi likhta: examples jinhe kisi ko banana aur phir <em>sambhalna</em> hoga; ek test set jo pehle se hona hi chahiye, warna aap bata hi nahi sakte ki faayda hua; base model band hone par har baar poora dobara kaam — Chapter 18 ka wahi chakkar, ab aapke training data ke saath; aur portability ka chupchaap nuksaan, kyunki ab aapka sudhaar aapke prompt aur index mein nahi, kisi ek provider ki cheez ke andar rehta hai.',
  'The order that works':
    'Woh kram jo chalta hai',
  'Instructions, then evidence, then training, then a different model — measuring after each. Not out of caution: the first two are undoable in hours, so ruling them out is cheap, while the third commits you to maintenance for as long as the feature lives.':
    'Instructions, phir evidence, phir training, phir doosra model — aur har ek ke baad naap. Yeh saavdhani se nahi hai: pehle do ghanton mein wapas liye ja sakte hain, isliye unhe hataana sasta hai, jabki teesra aapko utni dekh-rekh se baandh deta hai jitne samay feature zinda rahega.',
  'One of the four has quietly become the most consequential, and it points the opposite way from where teams look. <strong>Going smaller</strong> — a cheaper, faster model, often trained to copy a larger one on your task — is where the economics of a high-volume feature are decided. A narrow, repetitive, high-volume job with a time limit is exactly where a small model wins, and exactly what nobody tests, because the expensive one was already working.':
    'Chaaron mein se ek chupchaap sabse bhaari ho gaya hai, aur woh us disha mein hai jahan teams dekhti hi nahi. <strong>Chhote par jaana</strong> — ek sasta, tez model, aksar aapke kaam par bade model ki nakal karne ke liye train kiya hua — wahin high-volume feature ki economics tay hoti hai. Ek sankra, dohraaya jaane wala, high-volume kaam jisme samay ki seema ho, theek wahi hai jahan chhota model jeetta hai, aur theek wahi hai jise koi test nahi karta, kyunki mehnga wala pehle se chal raha tha.',
  'Every one of the four is a change whose effect is invisible without a test set. So this chapter is not really about fine-tuning. It is about the fact that a team with an answer key can settle “should we fine-tune?” in a week, and a team without one cannot settle it at all.':
    'Chaaron mein se har ek aisa badlav hai jiska asar bina test set ke dikhta hi nahi. Isliye yeh chapter asal mein fine-tuning ke baare mein hai hi nahi. Yeh is baare mein hai ki jis team ke paas answer key hai woh "kya humein fine-tune karna chahiye?" ek hafte mein sulajha leti hai, aur jiske paas nahi hai woh bilkul nahi sulajha sakti.',
  'Step 1 — Sort real failures into the four kinds':
    'Step 1 — Asli failures ko chaar kismon mein baantiye',
  'No notebook this chapter. Open your error taxonomy from Chapter 14 — or, if you do not have one yet, ten real outputs from any AI feature you use daily.':
    'Is chapter mein notebook nahi. Chapter 14 wali apni error taxonomy kholiye — ya agar abhi nahi hai, to roz istemaal hone wale kisi bhi AI feature se das asli outputs lijiye.',
  'Against each failure, write one of four letters: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrong), <strong>R</strong> (cannot work it out), <strong>E</strong> (uneconomic). Force a single letter even when it is hard; the hard ones are the interesting ones.':
    'Har failure ke saamne chaar mein se ek akshar likhiye: <strong>K</strong> (pata nahi), <strong>B</strong> (behaviour galat), <strong>R</strong> (nikaal nahi paata), <strong>E</strong> (mehnga). Mushkil ho tab bhi ek hi akshar chuniye; mushkil waale hi dilchasp hote hain.',
  'A lopsided distribution. Almost every real taxonomy is dominated by K and B, which is why retrieval and prompting carry most of the improvement in most products — and why tuning proposals so often fail to move the number they promised.':
    'Ek ek-tarfa baantwara. Lagbhag har asli taxonomy mein K aur B hi chhaye rehte hain, isiliye zyadatar products mein sudhaar ka zyadatar hissa retrieval aur prompting se aata hai — aur isiliye tuning ke proposals aksar us number ko hilaa hi nahi paate jiska vaada unhone kiya tha.',
  'Step 2 — Cost the tuning proposal honestly':
    'Step 2 — Tuning proposal ki imaandaar cost nikaaliye',
  'Take the most plausible tuning candidate from your list and write the full cost, not the training bill: how many labelled examples, who writes them, who maintains them when the product changes, what eval proves it worked, and what happens to all of it when the base model is deprecated in eighteen months.':
    'Apni list se sabse plausible tuning candidate lijiye aur poori cost likhiye, sirf training ka bill nahi: kitne labelled examples, unhe kaun likhega, product badalne par unhe kaun sambhalega, kaunsa eval saabit karega ki faayda hua, aur atharah mahine mein base model band hone par in sab ka kya hoga.',
  'A number several times larger than the one in the vendor’s pricing page — and, more usefully, a list of owners. A tuning proposal with no named owner for dataset maintenance is a proposal to build something that decays.':
    'Ek aisa number jo vendor ke pricing page wale se kai guna bada hai — aur usse zyada kaam ki, maalikon ki ek list. Jis tuning proposal mein dataset sambhalne ka koi naam nahi likha, woh aisi cheez banane ka proposal hai jo sadti jaayegi.',
  'Step 3 — Try switching down':
    'Step 3 — Chhote par jaakar dekhiye',
  'Pick the narrowest, highest-volume task in your product — routing, classification, extraction, a short summary. Estimate its share of total query volume, then compute what it would cost on a model one or two tiers cheaper using the Chapter 15 model above.':
    'Apne product ka sabse sankra, sabse zyada volume wala kaam chuniye — routing, classification, extraction, ek chhota summary. Poore query volume mein uska hissa aankiye, phir upar wale Chapter 15 ke model se nikaaliye ki ek ya do tier saste model par uski cost kya hoti.',
  'Frequently the largest single saving available to you, sitting in the least glamorous part of the product. This is the lever that most teams never test.':
    'Aksar yahi aapke paas maujood sabse badi ek bachat hoti hai, jo product ke sabse kam chamak-dhamak wale hisse mein padi hai. Yeh wahi lever hai jise zyadatar teams kabhi test nahi karti.',
  'What the user sees when it is wrong':
    'Galat hone par user ko kya dikhta hai',
  'At ninety percent accuracy, one answer in ten is wrong. Whether the feature is usable is decided by what the screen does about that one.':
    'Nabbe percent accuracy par das mein se ek jawaab galat hota hai. Feature istemaal layak hai ya nahi, yeh us ek ke baare mein screen kya karti hai isse tay hota hai.',
  'Explain why a feature that is wrong one time in ten can still be trusted.':
    'Yeh samjhana ki das mein se ek baar galat hone wale feature par bhi bharosa kaise ban sakta hai.',
  'Say what to do with a confidence score, and why printing it is the wrong answer.':
    'Yeh batana ki confidence score ka kya karna hai, aur use chhaap dena galat jawaab kyun hai.',
  'Explain what has to exist underneath a kill switch for it to be usable.':
    'Yeh samjhana ki kill switch ke neeche kya hona zaroori hai taaki woh kaam ka ho.',
  'Making it quote the source is what makes checking cheap':
    'Source quote karwaana hi jaanchna sasta banata hai',
  'A quote beats a confidence number.':
    'Quote confidence ke number se behtar hai.',
  'The slow end is the one users feel':
    'Dheema sira hi users mehsoos karte hain',
  'Not the average response time.':
    'Average response time nahi.',
  'A kill switch is not a rollback':
    'Kill switch rollback nahi hai',
  'Rolling back code does not undo a behaviour both versions share.':
    'Code wapas lene se woh behaviour nahi hatta jo dono versions mein hai.',
  'Everything so far has been about making the machine right more often. This chapter is about the rest of the time — and the rest of the time is not a rounding error. At ninety percent accuracy, one interaction in ten is wrong, and no amount of engineering removes the category. What decides whether the feature is usable is what the screen does about that one.':
    'Ab tak sab kuchh machine ko zyada baar sahi karne ke baare mein tha. Yeh chapter baaki samay ke baare mein hai — aur baaki samay koi mamooli hissa nahi hai. Nabbe percent accuracy par das mein se ek baatcheet galat hoti hai, aur kitni bhi engineering is kism ko hataati nahi. Feature istemaal layak hai ya nahi, yeh us ek ke baare mein screen kya karti hai isse tay hota hai.',
  'That is a design problem, and it is yours. An engineer can tell you a confidence number exists. Nobody but the person who owns the product decides what the user sees when it is low.':
    'Yeh design ki samasya hai, aur yeh aapki hai. Engineer aapko bata sakta hai ki confidence ka number maujood hai. Woh number kam ho tab user kya dekhega, yeh sirf product ka maalik hi tay karta hai.',
  'Never show an uncertain answer with a certain interface. Most AI features that feel untrustworthy are not less accurate than their rivals. They just show a wrong answer in exactly the same way they show a right one.':
    'Anishchit jawaab ko kabhi nishchit interface mein mat dikhaiye. Jo AI features bharose layak nahi lagte woh apne pratidwandiyon se kam sahi nahi hote. Woh bas galat jawaab ko theek usi tarah dikhate hain jaise sahi jawaab ko.',
  'There are four things to get right. A feature that does all four can be wrong one time in ten and still be trusted. One that does none is distrusted at ninety-five percent accuracy, and correctly so.':
    'Chaar cheezein theek karni hain. Jo feature chaaron karta hai woh das mein se ek baar galat hokar bhi bharose layak reh sakta hai. Jo koi nahi karta us par pachanve percent accuracy par bhi bharosa nahi hota, aur theek hi nahi hota.',
  '<strong>One: show the evidence.</strong> A link that opens the actual passage lets a user check the claim in three seconds. That is the whole reason Chapter 8 asked the model to quote its source. It also sets the standard for what does not count: a citation naming a document it does not open buys the <em>appearance</em> of being checkable while removing the ability to check — worse than showing nothing, because the user cannot tell the difference until it matters.':
    '<strong>Ek: evidence dikhaiye.</strong> Aisa link jo asli passage kholta hai, user ko teen second mein daawa jaanchne deta hai. Chapter 8 ne model se source quote karwaane ko isiliye kaha tha. Isse yeh bhi tay hota hai ki kya nahi ginta: aisi citation jo document ka naam leti hai lekin use kholti nahi, woh jaanche jaane ka <em>dikhawa</em> kharid leti hai aur jaanchne ki kshamata chheen leti hai — kuchh na dikhane se bhi bura, kyunki user ko farq tab tak pata hi nahi chalta jab tak woh maayne na rakhne lage.',
  '<strong>Two: speed is interface, not plumbing.</strong> Chapter 11 gave you the slow end as a cost. Here it is a design material. Streaming works for prose because prose reads left to right, so a half-arrived answer is already useful. That does not extend to everything: a number that appears and then changes as generation continues is worse than a spinner, because the user has already read it — and may already have acted on it.':
    '<strong>Do: speed interface hai, plumbing nahi.</strong> Chapter 11 ne aapko dheema sira ek cost ke roop mein diya tha. Yahan woh design ka material hai. Streaming prose ke liye chalti hai kyunki prose baayen se daayen padhi jaati hai, isliye aadha aaya jawaab bhi kaam ka hai. Yeh har cheez par laagu nahi hota: aisa number jo aata hai aur phir likhte-likhte badal jaata hai, spinner se bhi bura hai, kyunki user use padh chuka hai — aur ho sakta hai us par kaam bhi kar chuka ho.',
  'What you would do with it':
    'Aap uska kya karenge',
  'Commit before reading on. Your model returns a confidence score with every answer. What do you do with it in the interface?':
    'Aage padhne se pehle tay kijiye. Aapka model har jawaab ke saath ek confidence score deta hai. Interface mein aap uska kya karenge?',
  'Confidence is not a label. It is a set of choices — an editable field instead of a fixed one, a draft instead of something already sent, a question instead of a guess.':
    'Confidence ek label nahi hai. Woh chunavon ka ek set hai — tay field ki jagah editable field, bheji ja chuki cheez ki jagah draft, andaaze ki jagah ek sawaal.',
  'Use it to decide what the product does. Do not print it. A percentage next to an answer hands a judgement to someone with no way to calibrate it, and the model’s own confidence is often poorly calibrated anyway. Used internally it changes behaviour: answer directly, show the evidence first, ask a clarifying question, or hand it to a person.':
    'Usse tay kijiye ki product kya karega. Use chhapiye mat. Jawaab ke bagal mein percentage us insaan ko faisla thama deta hai jiske paas use aankne ka koi tareeka nahi, aur model ka apna confidence waise bhi aksar theek se calibrate nahi hota. Andar istemaal karne par woh behaviour badalta hai: seedha jawaab dijiye, pehle evidence dikhaiye, ek saaf karne wala sawaal poochhiye, ya kisi insaan ko de dijiye.',
  '<strong>Three: make correcting it easy.</strong> When the system is wrong, what the user does next is simultaneously your most valuable data and the thing most products throw away. A thumbs-down records that something was wrong and nothing about what.':
    '<strong>Teen: sudhaarna aasaan banaiye.</strong> Jab system galat hota hai, uske baad user kya karta hai — yeh ek saath aapka sabse keemti data hai aur wahi cheez jise zyadatar products phenk dete hain. Thumbs-down sirf yeh likhta hai ki kuchh galat tha, aur kya galat tha uske baare mein kuchh nahi.',
  'A correction path earns its place when it captures what the user expected <em>instead</em>, keeps the evidence the system was working from, and is genuinely faster than giving up and doing the task by hand. That last condition fails silently: if correcting takes longer than the workaround, nobody corrects, and you read an empty feedback table as satisfaction.':
    'Correction path tab hi jagah kamaata hai jab woh yeh pakde ki user ko <em>uski jagah</em> kya chahiye tha, us evidence ko rakhe jis par system chal raha tha, aur haar maankar khud kaam karne se sach mein tez ho. Aakhri shart chupchaap fail hoti hai: agar sudhaarne mein jugaad se zyada samay lage, to koi sudhaarta hi nahi, aur aap khaali feedback table ko santushti samajh lete hain.',
  'The thumbs-down that teaches nothing':
    'Woh thumbs-down jo kuchh nahi sikhata',
  'Two products, same model, same retrieval. One logs a thumbs-down. The other logs the answer, what was retrieved, the question, and one line: “what did you expect instead?” The second has a list of real failure types within a fortnight and a roadmap built from its own traffic. The first has a number that goes down and no idea why.':
    'Do products, wahi model, wahi retrieval. Ek thumbs-down log karta hai. Doosra jawaab, kya retrieve hua, sawaal, aur ek line log karta hai: "aapko iski jagah kya chahiye tha?" Doosre ke paas do hafte mein asli failure types ki list hoti hai aur apne traffic se bana roadmap. Pehle ke paas ek girta hua number hota hai aur koi andaaza nahi ki kyun.',
  'the user … we capture … it takes … versus … the test case would be …':
    'user … hum pakadte hain … samay lagta hai … bnaam … test case yeh hoga …',
  'Design the correction path for a feature you know. What exactly does the user do when the output is wrong, what does that action capture, and how long does it take compared with just doing the task by hand? Then write the test case it would produce.':
    'Apne jaane hue kisi feature ke liye correction path banaiye. Output galat hone par user theek kya karta hai, us kaam se kya record hota hai, aur khud haath se kaam karne ke muqable ismein kitna samay lagta hai? Phir woh test case likhiye jo isse banega.',
  'A good design makes correcting the fast path rather than a civic duty. Letting the user edit the output in place, and treating the edit itself as the signal, beats any rating widget: they were going to fix it anyway, so it costs them nothing and you learn the expected answer exactly. Capture the question, the evidence, the output and the correction together — without the evidence you know the answer was wrong but not whether retrieval or generation caused it, which is exactly the distinction Chapter 19 needs.':
    'Achcha design sudhaarne ko farz nahi, sabse tez raasta bana deta hai. User ko output wahin edit karne dena, aur us edit ko hi signal maanna, kisi bhi rating widget se behtar hai: woh use waise bhi theek karne wala tha, isliye uski koi keemat nahi lagti aur aapko theek-theek pata chal jaata hai ki jawaab kya hona chahiye tha. Sawaal, evidence, output aur correction sab saath pakadiye — evidence ke bina aap jaante hain ki jawaab galat tha lekin yeh nahi ki wajah retrieval thi ya generation, aur theek yahi farq Chapter 19 ko chahiye.',
  '<strong>Four: design the refusal.</strong> Every system looks impressive when it works, so trust is not won on the successful answer. It is won on the screen that says <em>I do not have that</em> — a screen designed last, or not at all, in most AI products.':
    '<strong>Chaar: refusal ka design kijiye.</strong> Har system tab shaandaar dikhta hai jab woh chalta hai, isliye bharosa safal jawaab par nahi jeeta jaata. Woh us screen par jeeta jaata hai jo kehti hai <em>mere paas yeh nahi hai</em> — zyadatar AI products mein yeh screen sabse aakhir mein banti hai, ya banti hi nahi.',
  'A system that says “I cannot answer this” and offers a route to a person is trusted more, and rightly, than one that always produces something. Users calibrate on refusals. A feature that never refuses teaches them that its confidence means nothing.':
    'Jo system kehta hai "main iska jawaab nahi de sakta" aur kisi insaan tak ka raasta deta hai, us par usse zyada bharosa hota hai — aur theek hota hai — jo hamesha kuchh na kuchh bana deta hai. Users refusals se hi aankte hain. Jo feature kabhi mana nahi karta woh unhe sikha deta hai ki uske confidence ka koi matlab nahi.',
  'And one more thing, which is not a design choice but a floor: what the feature does when the AI is switched off. Chapter 18 separated a rollback from a kill switch; this is the consequence. A kill switch is only usable if there is something underneath it — search without generated answers, a form without extraction, a queue without routing. If turning the AI off leaves a blank screen, you do not have a kill switch. You have a single point of failure with a switch attached.':
    'Aur ek aakhri baat, jo design ka chunav nahi balki ek farsh hai: AI band kar dene par feature kya karta hai. Chapter 18 ne rollback aur kill switch ko alag kiya tha; yeh uska nateeja hai. Kill switch tabhi kaam ka hai jab uske neeche kuchh ho — bane hue jawaabon ke bina search, extraction ke bina form, routing ke bina queue. Agar AI band karne par khaali screen bachti hai, to aapke paas kill switch nahi hai. Aapke paas ek single point of failure hai jis par ek switch laga hai.',
  'Step 1 — Audit an AI feature you use daily':
    'Step 1 — Roz istemaal hone wale kisi AI feature ka audit kijiye',
  'Pick one — a search assistant, an email drafter, a coding assistant, anything. Ask it something it will get wrong, deliberately, at the edge of what it knows.':
    'Ek chuniye — search assistant, email likhne wala, coding assistant, kuchh bhi. Usse jaanbujhkar kuchh aisa poochhiye jo woh galat karega, uski jaankaari ke kinare par.',
  'Then answer four questions in writing. Could you check the claim, and how many seconds did it take? Did the interface treat the wrong answer differently from a right one in any way at all? What could you do about it? And what happened to your correction?':
    'Phir chaar sawaalon ke jawaab likh kar dijiye. Kya aap daawe ko jaanch sake, aur ismein kitne second lage? Kya interface ne galat jawaab ko sahi jawaab se kisi bhi tarah alag dikhaya? Aap uska kya kar sakte the? Aur aapke sudhaar ka kya hua?',
  'Most well-known products fail at least two of the four. Note which — this is the standard your own feature will be held to by users who have used those products.':
    'Zyadatar mashhoor products chaar mein se kam se kam do mein fail hote hain. Note kijiye kaunse — aapke apne feature ko wahi maapdand un users se milega jinhone woh products istemaal kiye hain.',
  'Step 2 — Write the four states':
    'Step 2 — Chaar sthitiyaan likhiye',
  'For one feature you own, write what the user sees in each of four states: confident answer, low-confidence answer, refusal, and AI path disabled. Actual screen content, not a description of a philosophy.':
    'Apne ek feature ke liye likhiye ki chaar sthitiyon mein user ko kya dikhta hai: confident jawaab, kam-confidence jawaab, refusal, aur AI band. Asli screen ka content, kisi soch ka varnan nahi.',
  'The third and fourth are the hard ones, and the ones that do not exist in most specs. If you cannot write them, they do not exist in the product either — they are whatever the code happens to do.':
    'Teesri aur chauthi hi mushkil hain, aur wahi hain jo zyadatar specs mein hoti hi nahi. Agar aap unhe likh nahi sakte, to woh product mein bhi nahi hain — woh bas wahi hain jo code ittefaaq se kar deta hai.',
  'Step 3 — Time the correction':
    'Step 3 — Sudhaar ka samay naapiye',
  'Measure, with a clock: how long does correcting a wrong output take, versus doing the task manually from scratch? Do it three times.':
    'Ghadi se naapiye: galat output sudhaarne mein kitna samay lagta hai, bnaam shuru se khud kaam karne mein? Teen baar kijiye.',
  'If correcting is slower, your feedback table will stay empty and you will misread that as satisfaction. This single measurement explains most “our users never give feedback” conversations.':
    'Agar sudhaarna dheema hai, to aapki feedback table khaali rahegi aur aap use santushti samajh lenge. Yahi ek naap "hamare users kabhi feedback nahi dete" wali zyadatar baatcheeton ko samjha deti hai.'
});
