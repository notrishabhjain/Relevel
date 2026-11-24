/* Hinglish for Fine-tuning or not: choosing what to change (chapter:ch19), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'When a model is not good enough, you can change four things: the instructions, the evidence you give it, its training, or the model itself. Think of a student who is failing: you can change the question, give a book, send them to coaching, or change the student. You will sort real failures into four kinds, match each kind to its fix, and work out what a fine-tuning proposal would really cost.':
    'Jab model kaafi accha nahi hota, aap chaar cheezein badal sakte hain: instructions, jo evidence aap use dete hain, uski training, ya khud model. Ek fail hote student ko sochiye: aap sawaal badal sakte hain, kitaab de sakte hain, coaching bhej sakte hain, ya student badal sakte hain. Aap asli failures ko chaar tarah mein baatenge, har tarah ko uske fix se milayenge, aur dekhenge ki fine-tuning ki yojana asal mein kitni mehngi padegi.',
  'Name the four things you can change, and say what each one really fixes.':
    'Un chaar cheezon ke naam batayiye jo aap badal sakte hain, aur kahiye ki har ek asal mein kya theek karti hai.',
  'Say why fine-tuning (coaching the model on many examples) is the wrong tool for “it does not know our new policy”.':
    'Batayiye ki “yeh hamari nayi policy nahi jaanta” ke liye fine-tuning (model ko bahut saare udaaharan dekar coaching) galat auzaar kyun hai.',
  'Say what you must have before you can answer the fine-tuning question.':
    'Batayiye ki fine-tuning ke sawaal ka jawaab dene se pehle aapke paas kya hona chahiye.',
  'Answer a proposal to fine-tune a model, using evidence':
    'Model ko fine-tune karne ke prastaav ka jawaab saboot se dijiye',
  'Someone says: let us train a small Indian-language model of our own, to improve the name-and-place finder. That is called fine-tuning. It sounds like the serious choice. In this chapter you learned the four things you can change, what each one fixes, and why fine-tuning is the wrong tool for “it does not know our new policy”. Now decide, with evidence, whether the proposal is right.':
    'Koi kehta hai: apna chhota Indian-language model train karte hain, name-and-place finder behtar karne ke liye. Ise fine-tuning kehte hain. Yeh gambhir vikalp lagta hai. Is chapter mein aapne seekha ki aap kaun si chaar cheezein badal sakte hain, har ek kya theek karti hai, aur “yeh hamari nayi policy nahi jaanta” ke liye fine-tuning galat auzaar kyun hai. Ab saboot ke saath tay kijiye ki prastaav sahi hai ya nahi.',
  'This task is written, with no code. Use the failures you collected in earlier chapters and the numbers you already measured. Write your answer in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 3.':
    'Yeh task likhne ka hai, code nahi hai. Pichhle chapters mein ikattha kiye failures aur pehle se naape numbers use kijiye. Apna jawaab neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 1, 2 aur 3.',
  'Collect twenty real failures from your tool. Take them from the failure taxonomy (your list of failure types) you made in Chapter 14.5.':
    'Apne tool ke bees asli failures ikattha kijiye. Unhe Chapter 14.5 mein banayi failure taxonomy (failure types ki list) se lijiye.',
  'Sort the twenty into the four kinds from this chapter, like sorting letters into four boxes: the model did not know something, the instructions were unclear, the right information was not found, or the format was wrong.':
    'Un bees ko is chapter ke chaar prakaar mein baantiye, jaise chitthiyan chaar dibbon mein: model ko kuch pata nahi tha, instructions saaf nahi the, sahi jaankari nahi mili, ya format galat tha.',
  'Count each kind. The counts often settle the question before any technical argument starts.':
    'Har prakaar ginie. Ginti aksar sawaal ko tabhi nipta deti hai jab technical bahas shuru bhi nahi hui hoti.',
  'For the biggest pile, name the cheapest change that would fix it. Say why it costs less than fine-tuning.':
    'Sabse bade dher ke liye sabse sasta badlaav batayiye jo use theek karega. Batayiye ki woh fine-tuning se sasta kyun hai.',
  'Work out the real cost of the fine-tuning proposal, with cost per query too. Count preparing the data, training, testing, and doing all of it again each time the base model (the model you start from) changes.':
    'Fine-tuning prastaav ka asli kharch nikaaliye, cost per query ke saath. Data taiyaar karna, training, testing, aur har baar jab base model (jis model se aap shuru karte hain) badle to sab dobara karna, yeh sab gino.',
  'Write a one-page answer to the person who proposed it. Use the failure counts as your main reason. Say what evidence would change your mind.':
    'Prastaav rakhne wale ko ek page ka jawaab likhiye. Failure ki ginti ko apna mukhya kaaran banaiye. Batayiye ki kaun sa saboot aapka mann badal dega.',
  'Twenty real failures sorted into the four kinds, with a count for each.':
    'Bees asli failures chaar prakaar mein baante hue, har ek ki ginti ke saath.',
  'The cheapest fix for the biggest pile.':
    'Sabse bade dher ka sabse sasta fix.',
  'A cost for fine-tuning that includes doing it again and again.':
    'Fine-tuning ka kharch jisme use baar baar karna bhi shaamil hai.',
  'A one-page answer that also says what evidence would change your advice.':
    'Ek page ka jawaab jo yeh bhi batata hai ki kaun sa saboot aapki salaah badal dega.',
  'A failure taxonomy (a list of your own failures), with counts':
    'Failure taxonomy (aapke apne failures ki list), ginti ke saath',
  'You cannot pick a fix until you know what is going wrong and how often, like a doctor who must find the illness before giving medicine.':
    'Fix tabhi chun sakte hain jab pata ho kya galat ho raha hai aur kitni baar, jaise doctor dawa dene se pehle bimari dhoondhta hai.',
  'A test set (questions with known right answers) you trust':
    'Ek test set (sahi jawaab pehle se pata wale sawaal) jis par aap bharosa karein',
  'Without one, you cannot see what any change in this chapter really did.':
    'Iske bina aap dekh nahi sakte ki is chapter ka koi bhi badlaav asal mein kya kar gaya.',
  'You do not need a notebook (a page of code boxes) for this chapter. Open your list of failure types from Chapter 14.5. Or collect ten real answers from an AI feature you use every day.':
    'Is chapter ke liye notebook (code ke dibbon wala page) nahi chahiye. Chapter 14.5 ki failure types ki list kholiye. Ya jo AI feature aap roz use karte hain uske das asli jawaab ikattha kijiye.',
  'In the last chapter you compared buying from a vendor with building your own. Now a new question comes up. Sooner or later someone asks it in a roadmap review (the meeting about what comes first, next and later): <em>should we fine-tune?</em>':
    'Pichhle chapter mein aapne vendor se kharidne aur khud banane ki tulna ki. Ab ek naya sawaal aata hai. Der se ya jaldi koi roadmap review (kya pehle, kya baad mein ka meeting) mein poochhta hai: <em>kya hum fine-tune karein?</em>',
  'This question often comes before anyone has said what is wrong. Saying yes gives the team a quarter of work. Saying no can sound like you lack ambition. So a good answer starts with a diagnosis, like a doctor’s check. This chapter shows you how.':
    'Yeh sawaal aksar tab aata hai jab kisi ne yeh nahi kaha ki galat kya hai. Haan kehna team ko ek quarter ka kaam de deta hai. Na kehna aise lag sakta hai jaise himmat nahi hai. Isliye accha jawaab diagnosis se shuru hota hai, doctor ki jaanch ki tarah. Yeh chapter aapko dikhata hai kaise.',
  'Four things you can change':
    'Chaar cheezein jo aap badal sakte hain',
  'Say an AI feature is not good enough. What can you change? There are four things. You can change <strong>the instructions</strong> (the note you hand the model). You can change <strong>the evidence you give the model</strong>, like handing it the right page of a book. You can change <strong>the model’s training on your own examples</strong>, which is called fine-tuning. Or you can change <strong>which model you use</strong>.':
    'Maan lijiye AI feature kaafi accha nahi hai. Aap kya badal sakte hain? Chaar cheezein hain. Aap <strong>instructions</strong> badal sakte hain (model ko di jaane wali parchi). Aap <strong>model ko diya jaane wala evidence</strong> badal sakte hain, jaise use kitaab ka sahi page dena. Aap <strong>apne udaaharanon par model ki training</strong> badal sakte hain, jise fine-tuning kehte hain. Ya aap <strong>kaun sa model use karein</strong> badal sakte hain.',
  'Try them in that order. See why with a failure you may well meet.':
    'Unhe isi kram mein aazmaiye. Ek aise failure se dekhiye kyun, jo aapko shayad mile.',
  'Which one, and why':
    'Kaun sa, aur kyun',
  'Predict: your assistant says, sounding sure, that the refund window is 30 days. The right number, published last month, is 45. Which of the four changes fixes it? And which will people in a meeting room usually suggest?':
    'Andaza lagaiye: aapka assistant pakke yakeen se kehta hai ki refund window 30 din ki hai. Sahi number, jo pichhle mahine chhapa, 45 hai. Chaaron mein se kaun sa badlaav ise theek karta hai? Aur meeting room mein log aam taur par kaun sa sujhayenge?',
  'Better evidence. The system does not have the current policy, so it makes up a likely number from its training, as Chapter 2 showed. A meeting often suggests fine-tuning, because “teach the model our policies” sounds right. But a fine-tuned model must be trained again each time the number changes. It also cannot show the user where 45 came from.':
    'Behtar evidence. System ke paas abhi ki policy nahi hai, isliye woh apni training se ek mumkin number gadh leta hai, jaisa Chapter 2 ne dikhaya. Meeting aksar fine-tuning sujhati hai, kyunki “model ko hamari policies sikhao” sahi lagta hai. Par fine-tune kiye model ko har baar number badalne par dobara train karna padta hai. Woh user ko yeh bhi nahi dikha sakta ki 45 kahan se aaya.',
  'This is one of the most common wrong diagnoses in the field. It costs a lot because the wrong answer sounds so sensible.':
    'Yeh is kshetra ke sabse aam galat diagnosis mein se ek hai. Yeh mehnga padta hai kyunki galat jawaab bahut samajhdaar sunai deta hai.',
  'The table below puts all four changes side by side. Look at the last two columns. They show what each change cannot fix, and how hard it is to try and to undo.':
    'Neeche ki table chaaron badlaav saath saath rakhti hai. Aakhri do column dekhiye. Woh dikhate hain ki har badlaav kya theek nahi kar sakta, aur use aazmana aur wapas lena kitna mushkil hai.',
  'What you change':
    'Aap kya badalte hain',
  'What it really fixes':
    'Yeh asal mein kya theek karta hai',
  'What it cannot fix':
    'Yeh kya theek nahi kar sakta',
  'Cost to try, and to undo':
    'Aazmane aur wapas lene ka kharch',
  'Instructions':
    'Instructions',
  'How the answer looks, the tone, when to say no, and how the task is put':
    'Jawaab kaisa dikhta hai, lahja, kab na kehna hai, aur kaam kaise rakha gaya hai',
  'Missing knowledge, and real limits in thinking':
    'Jo jaankari gayab hai, aur sochne ki asli seemayein',
  'Minutes to try, and undone at once':
    'Aazmane mein minute, aur turant wapas',
  'Knowledge that is missing, changing or private, and showing where an answer came from':
    'Jo jaankari gayab hai, badalti hai ya nijee hai, aur jawaab kahan se aaya yeh dikhana',
  'Problems with behaviour and format':
    'Vyavahaar aur format ki samasyayein',
  'Days to try, and undone by rebuilding the index (the card catalogue)':
    'Aazmane mein din, aur index (card catalogue) dobara banakar wapas',
  'Training on examples':
    'Udaaharanon par training',
  'The same shape and style every time, cheaply, and a small model doing one job well':
    'Har baar ek jaisa aakar aur dhang, sasta, aur ek chhota model jo ek kaam accha kare',
  'Facts that change, and bad search for the right page':
    'Badalte tathya, aur sahi page ki kharab khoj',
  'Weeks to try, plus upkeep for as long as it lives. You cannot undo it, only train it again':
    'Aazmane mein hafte, saath mein jab tak chale tab tak upkeep. Ise wapas nahi le sakte, sirf dobara train kar sakte hain',
  'A different model':
    'Doosra model',
  'How deeply it thinks, speed, and cost per question':
    'Woh kitna gehra sochta hai, speed, aur har sawaal ka kharch',
  'Bad evidence. A better model only thinks better about the wrong page':
    'Kharab evidence. Behtar model sirf galat page ke baare mein behtar sochta hai',
  'Hours to try, but every number you measured must be measured again':
    'Aazmane mein ghante, par aapka har naapa hua number dobara naapna padega',
  'Find out what kind of failure it is':
    'Pata kijiye ki failure kis tarah ka hai',
  'Now you see why the order matters. Before you ask “which fix?”, ask “what kind of failure is this?”. There are four kinds, and each one points to its own fix, like four kinds of fever with four kinds of medicine.':
    'Ab dikhta hai ki kram kyun zaroori hai. “Kaun sa fix?” poochne se pehle poochiye “yeh kis tarah ka failure hai?”. Chaar tarah ke hain, aur har ek apne fix ki taraf ishaara karta hai, jaise chaar tarah ke bukhaar aur chaar tarah ki dawa.',
  '<strong>It does not know.</strong> The answer is missing, old or made up. The fix is better evidence, with versions for your documents (Chapter 12).':
    '<strong>Use pata nahi hai.</strong> Jawaab gayab, purana ya banawati hai. Fix behtar evidence hai, aur aapke documents ke versions (Chapter 12).',
  '<strong>It knows, but behaves wrongly.</strong> The facts are right, but the look, tone or rule-following is wrong. Fix the instructions first. Then require a fixed format, like a form with boxes (Chapter 8). Fine-tune only if those stop helping.':
    '<strong>Use pata hai, par woh galat vyavahaar karta hai.</strong> Tathya sahi hain, par dikhaawat, lahja ya niyam maanna galat hai. Pehle instructions theek kijiye. Phir ek tay format maangiye, boxes wale form jaisa (Chapter 8). Fine-tune tabhi kijiye jab yeh madad karna band kar dein.',
  '<strong>It cannot work it out.</strong> The task needs many steps of thinking, sums that depend on each other, or real doubt. The fix is to use reasoning (a model that thinks on rough paper first) or a stronger model (Chapter 11).':
    '<strong>Woh ise hal nahi kar pata.</strong> Kaam ko sochne ke kai steps, ek doosre par tiki ginti, ya asli uljhan chahiye. Fix reasoning (jo model pehle kachche kagaz par sochta hai) ya ek taakatwar model hai (Chapter 11).',
  '<strong>It is right but too costly.</strong> It is too slow or too expensive at your volume. The fix is a smaller model, or a cheap-first cascade: the cheap model tries first, and the costly one helps only when needed (Chapter 15).':
    '<strong>Woh sahi hai par bahut mehnga.</strong> Aapki maatra par woh bahut dheema ya mehnga hai. Fix chhota model hai, ya sasta-pehle cascade: pehle sasta model koshish karta hai, aur mehnga tabhi madad karta hai jab zaroorat ho (Chapter 15).',
  'The best way to learn this is to do it on real failures. Take your list and sort it.':
    'Isse seekhne ka sabse accha tareeka asli failures par karna hai. Apni list lijiye aur use baantiye.',
  'Sort real failures into the four kinds':
    'Asli failures ko chaar prakaar mein baantiye',
  'Next to each failure, write one letter: <strong>K</strong> (does not know), <strong>B</strong> (behaves wrongly), <strong>R</strong> (cannot work it out) or <strong>E</strong> (too expensive). Pick one letter even when it is hard. The hard ones teach you the most.':
    'Har failure ke paas ek akshar likhiye: <strong>K</strong> (pata nahi), <strong>B</strong> (galat vyavahaar), <strong>R</strong> (hal nahi kar pata) ya <strong>E</strong> (bahut mehnga). Mushkil ho tab bhi ek hi akshar chuniye. Mushkil wale sabse zyaada sikhate hain.',
  'The result is usually lopsided. Most real failure lists are mostly K and B. That is why better search for the right page, and better instructions, bring most of the gain in most products. It is also why fine-tuning proposals often do not deliver.':
    'Natija aam taur par ek taraf jhuka hota hai. Zyaadatar asli failure lists mein K aur B hi bahut hote hain. Isliye sahi page ki behtar khoj aur behtar instructions zyaadatar products mein zyaadatar sudhaar laate hain. Isliye fine-tuning ke prastaav aksar vaada poora nahi karte.',
  'Fine-tuning teaches behaviour, not facts. If the complaint is “it does not know our policy”, fine-tuning is the wrong tool. It is like coaching a student’s handwriting when the problem is a missing textbook.':
    'Fine-tuning vyavahaar sikhata hai, tathya nahi. Agar shikayat hai “yeh hamari policy nahi jaanta”, to fine-tuning galat auzaar hai. Yeh aise hai jaise student ki likhaavat sudharna jab samasya gayab textbook ki ho.',
  'See what this diagnosis needs: a named failure with a count behind it. That is your Chapter 14.5 list. Without it, the talk becomes a contest of opinions, and the most senior opinion usually wins.':
    'Dekhiye is diagnosis ko kya chahiye: ek naam wala failure aur uske peechhe ek ginti. Yeh aapki Chapter 14.5 ki list hai. Uske bina baat raayon ki hod ban jaati hai, aur sabse senior raay aam taur par jeet jaati hai.',
  'Pick a real failure you have seen in an AI feature, yours or one you use. Write what the user saw, which of the four kinds it is, and the fix. Then write the one measurement that would show you chose right.':
    'Ek asli failure chuniye jo aapne AI feature mein dekha, aapka ya jo aap use karte hain. Likhiye ki user ne kya dekha, woh chaar mein se kaun sa prakaar hai, aur fix kya hai. Phir woh ek naap likhiye jo dikhayegi ki aapne sahi chuna.',
  'the user saw … kind of failure … the fix … I would know I was right if …':
    'user ne dekha … failure ka prakaar … fix … mujhe pata chalega ki main sahi tha agar …',
  'Sorting is the hard part, because failures often look alike. “It gave a confident wrong figure” could be any of the four until you check what was found. If the right page was found and misread, it is behaviour or reasoning. If the wrong page was found, only better search helps. If the right page is not in the documents at all, that fix comes before everything else in this course. The measurement matters too. “Retrieval finds the right page 9 times in 10 instead of 6” can be checked. “It feels better” cannot.':
    'Baantna mushkil hissa hai, kyunki failures aksar ek jaise dikhte hain. “Usne pakke yakeen se galat figure diya” chaaron mein se koi bhi ho sakta hai jab tak aap yeh na dekhein ki kya mila. Agar sahi page mila aur galat padha gaya, to yeh vyavahaar ya reasoning hai. Agar galat page mila, to sirf behtar khoj madad karti hai. Agar sahi page documents mein hai hi nahi, to woh fix is course ki har cheez se pehle aata hai. Naap bhi zaroori hai. “Retrieval 6 ki jagah 10 mein se 9 baar sahi page dhoondhta hai” jaancha ja sakta hai. “Behtar lagta hai” nahi.',
  'What fine-tuning really costs':
    'Fine-tuning asal mein kitna mehnga hai',
  'None of this means fine-tuning is a bad idea. It has real benefits. First, <strong>consistency</strong>: the same shape and tone across thousands of answers, more steadily than instructions can give.':
    'Iska matlab yeh nahi ki fine-tuning buri cheez hai. Iske asli fayde hain. Pehla, <strong>ekrupta</strong>: hazaaron jawaabon mein ek jaisa aakar aur lahja, instructions se zyaada pakka.',
  'Second, a <strong>small model can do one narrow job</strong> about as well as a big one, and that saves a lot of money. Third, it teaches habits that are hard to explain but easy to show, such as house style.':
    'Doosra, <strong>chhota model ek tang kaam</strong> lagbhag bade model jitna accha kar sakta hai, aur isse bahut paisa bachta hai. Teesra, yeh aisi aadatein sikhata hai jo samjhana mushkil par dikhana aasaan hai, jaise house style.',
  'The catch is that proposals leave out the costs. Each is a commit (a promise). Someone must make the training examples and <em>keep them up to date</em>. You need a test set first, or you cannot tell if it helped. You must train again each time the base model is retired, as in Chapter 18. And your gain now lives inside one provider’s system, not in your prompt and your index (the card catalogue).':
    'Pech yeh hai ki prastaav kharch chhod dete hain. Har ek ek commit (vaada) hai. Kisi ko training ke udaaharan banane padte hain aur <em>unhe naya rakhna padta hai</em>. Pehle test set chahiye, warna pata nahi chalega ki madad hui ya nahi. Har baar base model hatne par dobara train karna padta hai, jaisa Chapter 18 mein. Aur aapka sudhaar ab ek provider ke system ke andar rehta hai, aapke prompt aur index (card catalogue) mein nahi.',
  'Work out the cost of a fine-tuning proposal':
    'Fine-tuning prastaav ka kharch nikaaliye',
  'Take the likeliest fine-tuning candidate from your list. Write the full cost, not just the training bill. How many labelled examples does it need? Who writes them? Who keeps them up to date when the product changes? What test proves it worked? And what happens to all of it when the base model is retired in eighteen months?':
    'Apni list se sabse mumkin fine-tuning wala maamla lijiye. Poora kharch likhiye, sirf training ka bill nahi. Kitne labelled udaaharan chahiye? Unhe kaun likhta hai? Product badalne par unhe naya kaun rakhta hai? Kaun sa test saabit karta hai ki kaam kiya? Aur atharah mahine mein base model hatne par is sab ka kya hoga?',
  'The total is several times the number on the vendor’s pricing page. You also get a list of owners. A fine-tuning proposal with no named owner for the training data will slowly rot.':
    'Kul kharch vendor ke pricing page ke number se kai guna hota hai. Aapko maaliko ki list bhi milti hai. Jis fine-tuning prastaav mein training data ka koi naam wala maalik nahi, woh dheere dheere sad jaata hai.',
  'Try a smaller model':
    'Chhota model aazmaiye',
  'There is one more option. Teams test it least, though it often helps most: <strong>going smaller</strong>. A cheaper, faster model can decide the money side of a feature used by many people. Sometimes it is even trained to copy a larger model on your task, like a junior learning from a senior.':
    'Ek aur vikalp hai. Teams ise sabse kam aazmaati hain, jabki yeh aksar sabse zyaada madad karta hai: <strong>chhota jaana</strong>. Sasta, tez model un features ka paisa tay kar sakta hai jo bahut log use karte hain. Kabhi use aapke kaam par bade model ki nakal karna bhi sikhaya jaata hai, jaise junior senior se seekhta hai.',
  'Small models do well on jobs that are narrow, repeated many times, high in volume and short on waiting time. Let us estimate what that could save you.':
    'Chhote models un kaamon mein accha karte hain jo tang hain, baar baar hote hain, bahut maatra mein hain aur jinme intezaar kam chahiye. Aaiye andaza lagayein ki isse kitna bachega.',
  'Estimate the saving from a smaller model':
    'Chhote model se bachat ka andaza lagaiye',
  'Pick the narrowest task in your product that runs the most often, such as routing (sending a request to the right place), sorting into groups, pulling out fields, or a short summary. Estimate its share of all your queries. Then use the cost model below to work out what it would cost on a model one or two tiers cheaper.':
    'Apne product ka sabse tang kaam chuniye jo sabse zyaada baar chalta hai, jaise routing (request ko sahi jagah bhejna), groups mein baantna, fields nikaalna, ya chhota saar. Andaza lagaiye ki aapke saare queries mein uska kitna hissa hai. Phir neeche ke cost model se nikaaliye ki ek ya do tier sasta model par uska kharch kitna hoga.',
  'This is often the biggest single saving, and it hides in the dullest part of the product. Most teams never test it.':
    'Yeh aksar sabse badi ek bachat hoti hai, aur woh product ke sabse feeke hisse mein chhupi hoti hai. Zyaadatar teams ise kabhi test nahi karti.',
  'Work in this order: instructions, then evidence, then a different model, then fine-tuning. Measure after each one. You can undo the first three in hours or days, so ruling them out is cheap. Changing the model means every number must be measured again, so run your answer key after each switch. Fine-tuning ties you to upkeep for as long as the feature lives.':
    'Is kram mein kaam kijiye: instructions, phir evidence, phir doosra model, phir fine-tuning. Har ek ke baad naapiye. Pehle teen ko ghanton ya dinon mein wapas le sakte hain, isliye unhe nipta dena sasta hai. Model badalne par har number dobara naapna padta hai, isliye har badlaav ke baad answer key chalaiye. Fine-tuning aapko upkeep se tab tak baandh deta hai jab tak feature zinda hai.',
  'Here is the whole chapter in a few lines. Name the failure before you pick a fix. Most failures are about missing knowledge or wrong behaviour, and those cost less to fix than training does. Fine-tuning has real uses, but its cost lasts as long as the feature does.':
    'Poora chapter kuch lines mein. Fix chunne se pehle failure ka naam lijiye. Zyaadatar failures gayab jaankari ya galat vyavahaar ke hote hain, aur unhe theek karna training se sasta hai. Fine-tuning ke asli upyog hain, par uska kharch utna hi chalta hai jitna feature chalta hai.',
  'Without a test set you cannot see the effect of any of the four changes. A team with an answer key can settle “should we fine-tune?” in a week. A team without one cannot settle it at all.':
    'Test set ke bina aap chaaron mein se kisi badlaav ka asar nahi dekh sakte. Answer key wali team “kya hum fine-tune karein?” ek hafte mein tay kar sakti hai. Bina key wali team ise kabhi tay nahi kar sakti.',
  'Next, you will look at what the screen should show when the model gets an answer wrong. At some rate, it always will.':
    'Agla, aap dekhenge ki jab model galat jawaab de to screen par kya dikhna chahiye. Kisi na kisi dar se, woh hamesha dega.',
});
