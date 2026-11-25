/* Hinglish for Testing prompts: build a small test set (chapter:ch22), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Reading a few answers is a weak way to pick the better prompt (the note you hand the model). So you make a test: ten real inputs, like a teacher’s answer key. You score each prompt version against it. You change one thing at a time.':
    'Do-teen jawaab padhkar prompt (woh parchi jo aap model ko dete hain) chunna kamzor tareeka hai. Isliye aap ek test banate hain: das asli inputs, teacher ki answer key jaisa. Har prompt version ko uske against score karte hain. Ek baar mein sirf ek cheez badalte hain.',
  'Build a small test set (a short list of questions with known good answers) for a prompt, from real inputs, in under half an hour.':
    'Aadhe ghante se kam mein, asli inputs se prompt ka chhota test set banaiye (sawaalon ki chhoti list, jiske achhe jawaab pehle se pata hain).',
  'Change one thing at a time. Then measure: did it help?':
    'Ek baar mein ek hi cheez badaliye. Phir naapiye: kya isse fayda hua?',
  'Say why a prompt that looked better in a demo often is not better.':
    'Samjhaiye ki demo mein behtar dikhne wala prompt aksar behtar kyun nahin hota.',
  'Build the answer key (version 1)':
    'Answer key banaiye (version 1)',
  'Your whole project is marked against one test file. That file is the answer key. In this chapter you learned three things: build a small test set from real inputs, change one thing at a time, and score each change. Now you build version 1 of the answer key from the ten starter sentences. Then you use it to pick between versions of your prompt.':
    'Aapka poora project ek test file se naapa jaata hai. Wahi file answer key hai. Is chapter mein aapne teen cheezein seekhi: asli inputs se chhota test set banana, ek baar mein ek cheez badalna, aur har badlav ko score karna. Ab aap das starter sentences se answer key ka version 1 banate hain. Phir usse apne prompt ke versions mein se ek chunte hain.',
  'Use your notebook (the page where you run code in boxes) for this chapter, for scoring. The answer key itself is a spreadsheet. You save it in your repository (an online folder that remembers every change). Short version for the route, about 20 minutes: steps 1, 2, 4 and 5.':
    'Is chapter ke liye apna notebook (woh page jahan code dibbon mein chalta hai) use kijiye, scoring ke liye. Answer key khud ek spreadsheet hai. Use apni repository (ek online folder jo har badlav yaad rakhta hai) mein save kijiye. Route ke liye chhota version, lagbhag 20 minute: steps 1, 2, 4 aur 5.',
  'Open the project page. Copy the ten starter sentences into a spreadsheet. Add the columns listed under “The answer key”: number, kind of writing, sentence, what should be found, what should happen, and a note.':
    'Project page kholiye. Das starter sentences ko ek spreadsheet mein copy kijiye. “The answer key” ke neeche likhe columns jodiye: number, kind of writing, sentence, what should be found, what should happen, aur ek note.',
  'For each row, write by hand what should be found: the kind, and the exact words. Then write what should happen to it: remove it, hide it, or leave the sentence alone. Starter sentence 9 should say “nothing found”.':
    'Har row ke liye haath se likhiye ki kya milna chahiye: kis kism ka, aur theek kaunse shabd. Phir likhiye ki uske saath kya hona chahiye: hata do, chhupa do, ya sentence ko waise hi rehne do. Starter sentence 9 mein “nothing found” likhna chahiye.',
  'Add two more messy rows of your own. For example, a sentence with a spelling mistake in the word “Aadhaar”. And a sentence where a number is split by spaces. Now you have twelve rows.':
    'Apni taraf se do aur gadbad wali rows jodiye. Jaise, ek sentence jisme “Aadhaar” ki spelling galat ho. Aur ek sentence jisme number spaces se toota ho. Ab aapke paas barah rows hain.',
  'Save the spreadsheet as <code>evals/answer-key-v1.csv</code> in your repository. A CSV file is a spreadsheet saved as plain text, one row per line.':
    'Spreadsheet ko apni repository mein <code>evals/answer-key-v1.csv</code> naam se save kijiye. CSV file ek spreadsheet hai jo plain text mein save hoti hai, ek line mein ek row.',
  'Run your improved prompt from Chapter 2.1 on all twelve rows. Give one point for each row where the tool found everything and nothing extra. Write the score out of twelve. This is your baseline (the starting score to beat).':
    'Chapter 2.1 wala apna behtar kiya hua prompt saari barah rows par chalaiye. Har us row par ek point dijiye jahan tool ne sab kuch dhoondha aur kuch faltu nahin. Score barah mein se likhiye. Yeh aapka baseline hai (shuruaati score, jise aapko haraana hai).',
  'Change the prompt three times, one change at a time. Score again after each change. Write all four scores in a small table.':
    'Prompt mein teen badlav kijiye, ek baar mein ek. Har badlav ke baad dobara score kijiye. Chaaron score ek chhoti table mein likhiye.',
  'Find one change that made no difference. Remove it. Write how much money that saves each time you send a message to the model (each call). Then run the best prompt on a cheaper, smaller model. Note which rows now fail.':
    'Ek aisa badlav dhoondhiye jisse koi farak nahin pada. Use hata dijiye. Likhiye ki model ko har baar message bhejne par (har call par) isse kitna bachta hai. Phir sabse achha prompt ek sasta, chhota model par chalaiye. Likhiye ki ab kaunsi rows fail hoti hain.',
  'Write half a page for a colleague. Say what your prompt is, what score it gets, and which two rows it still gets wrong.':
    'Ek saathi ke liye aadha page likhiye. Batayiye ki aapka prompt kya hai, uska score kya hai, aur kaunsi do rows ab bhi galat aati hain.',
  'Save the four prompts and their four scores as <code>docs/prompt-and-scores.md</code> in your repository.':
    'Chaaron prompts aur unke chaaron scores ko apni repository mein <code>docs/prompt-and-scores.md</code> naam se save kijiye.',
  'The answer key, version 1: twelve rows with labels, saved in your repository.':
    'Answer key, version 1: label wali barah rows, aapki repository mein save.',
  'A table with the baseline score and the three changes.':
    'Ek table jisme baseline score aur teeno badlav hain.',
  'The result from a cheaper model, and the rows that failed.':
    'Sasta model se aaya result, aur woh rows jo fail hui.',
  'A half-page note with your prompt, its score, and the two rows it still gets wrong.':
    'Aadhe page ka note: aapka prompt, uska score, aur woh do rows jo ab bhi galat aati hain.',
  'Four ways to write a prompt':
    'Prompt likhne ke chaar tareeke',
  'You have four versions of one prompt. You have no way yet to pick the best one.':
    'Aapke paas ek prompt ke chaar versions hain. Sabse achha chunne ka abhi koi tareeka nahin hai.',
  'A sure-sounding answer is not proof':
    'Pakka lagne wala jawaab saboot nahin hai',
  'Smooth words do not prove the answer is right. The parrot sounds sure even when it is wrong.':
    'Sundar shabd yeh saabit nahin karte ki jawaab sahi hai. Tota galat hone par bhi pakka lagta hai.',
  'You will run one prompt many times.':
    'Aap ek prompt ko kai baar chalayenge.',
  'Bring the four prompt versions from the last chapter. They are still in your notebook session. After a page reload, press <strong>Restore</strong>. You will find out which one is really better. It may not be the one that felt better. No document of your own? Use the text of the Digital Personal Data Protection Act, 2023. It is public, and full of rules with exceptions.':
    'Pichhle chapter ke chaaron prompt versions saath rakhiye. Woh abhi bhi aapke notebook session mein hain. Page reload ke baad <strong>Restore</strong> dabaiye. Aap jaanenge ki asal mein kaunsa behtar hai. Ho sakta hai woh na ho jo achha laga tha. Apna document nahin hai? Digital Personal Data Protection Act, 2023 ka text use kijiye. Yeh public hai, aur apwaadon wale niyamon se bhara hai.',
  'Last chapter ended with four versions of a prompt. You had a feeling about which was best. Now you turn that feeling into something you can check. You build a small test set. You score every version against it. Then you improve the best one with care.':
    'Pichhla chapter ek prompt ke chaar versions par khatam hua. Aapko andaaza tha ki kaunsa sabse achha hai. Ab aap us andaaze ko aisi cheez banate hain jise jaancha ja sake. Aap ek chhota test set banate hain. Har version ko usse score karte hain. Phir sabse achhe ko dhyaan se behtar banate hain.',
  'Why a few answers can fool you':
    'Do-teen jawaab aapko kyun bhatka sakte hain',
  'First, see the problem yourself. Run one prompt on the same input a few times. Look at what comes back each time.':
    'Pehle samasya khud dekhiye. Ek hi input par ek prompt kai baar chalaiye. Dekhiye har baar kya wapas aata hai.',
  'Run one prompt five times':
    'Ek prompt paanch baar chalaiye',
  'Take your best prompt from the last chapter. Run it on the <em>same input</em> five times. Print all five answers.':
    'Pichhle chapter ka apna sabse achha prompt lijiye. Use <em>ek hi input</em> par paanch baar chalaiye. Paanchon jawaab print kijiye.',
  'The five answers differ. The words change. Sometimes the focus changes. Now and then the answer itself changes. It is like asking five people the same question. So if you judge two prompts by one answer each, you learn very little.':
    'Paanchon jawaab alag hain. Shabd badalte hain. Kabhi zor wali baat badal jaati hai. Kabhi jawaab hi badal jaata hai. Yeh paanch logon se ek hi sawaal poochne jaisa hai. Isliye do prompts ko ek-ek jawaab se parakhne par aap bahut kam seekhte hain.',
  'Each answer is one pick from many possible answers. Judging a prompt from one pick is not safe.':
    'Har jawaab kai sambhav jawaabon mein se ek chunav hai. Ek chunav se prompt ko parakhna surakshit nahin hai.',
  'The fix is a small test set. It is a handful of real inputs. For each one, you write what a good answer looks like. It is the teacher’s answer key, written before the exam. People in AI teams call running a set like this an <strong>eval</strong>, short for evaluation. Chapter 6 builds a bigger one. This one takes about twenty minutes.':
    'Ilaaj hai ek chhota test set. Yeh kuch asli inputs ka sanchay hai. Har ek ke liye aap likhte hain ki achha jawaab kaisa dikhta hai. Yeh teacher ki answer key hai, exam se pehle likhi hui. AI teams mein is tarah ka set chalane ko <strong>eval</strong> kehte hain, yaani evaluation (jaanch). Chapter 6 ek bada banata hai. Yeh lagbhag bees minute leta hai.',
  'Build the test set':
    'Test set banaiye',
  'A test set does not need to be fancy. Ten rows are enough to start. Two things matter. The inputs must be real. And you write what “good” means before you see any results.':
    'Test set ko shaandaar hone ki zaroorat nahin. Shuru karne ke liye das rows kaafi hain. Do baatein zaroori hain. Inputs asli hone chahiye. Aur “achha” ka matlab aap koi result dekhne se pehle likhte hain.',
  'A test set is the user acceptance cases you wrote before go-live. The only change: you run it again every time the prompt or the model changes, not just once before sign-off.':
    'Test set woh user acceptance cases hain jo aap go-live se pehle likhte the. Bas ek farak hai: prompt ya model badalne par aap use har baar dobara chalate hain, sirf sign-off se pehle ek baar nahin.',
  'Build a ten-row test set':
    'Das rows ka test set banaiye',
  'Collect ten real inputs for your task. Include the two messiest ones you can find. Do not make them up. For each one, write the two or three things a good answer must contain. You do not need the exact words. Aim for this mix:':
    'Apne kaam ke das asli inputs jama kijiye. Sabse gadbad wale do zaroor rakhiye. Unhe banaiye mat. Har ek ke liye likhiye ki achhe jawaab mein do-teen cheezein kya honi chahiye. Exact shabd zaroori nahin. Is mix ka nishana rakhiye:',
  'Six ordinary cases. Pick them before you see how the prompt does on them.':
    'Chhah aam cases. Unhe tab chuniye jab tak aapne dekha nahin ki prompt unpar kaisa karta hai.',
  'Two awkward ones. They may miss some information, use an odd format, or be in the wrong language.':
    'Do ajeeb wale. Unme koi jaankari kam ho sakti hai, format ajeeb ho sakta hai, ya bhasha galat ho sakti hai.',
  'Two that the model should refuse, or pass to a person, instead of answering.':
    'Do jinka jawaab dene ke bajaye model ko mana karna chahiye, ya kisi insaan ko dena chahiye.',
  'No inputs you can use? Take ten of the starter sentences from the project page instead. Then the capstone (your chapter project) is also your chapter work.':
    'Koi input kaam ka nahin? Uske bajaye project page se das starter sentences le lijiye. Tab capstone (chapter ka project) hi aapka chapter ka kaam ban jaata hai.',
  'You now have a ten-row table. Each row has an input and what a good answer must contain. This table is the most useful thing you make in this chapter. The rest of the chapter runs prompts against it.':
    'Ab aapke paas das rows ki table hai. Har row mein ek input hai aur yeh ki achhe jawaab mein kya hona chahiye. Is chapter mein aap jo banate hain, usme yeh table sabse kaam ki hai. Baaki chapter prompts ko isi table par chalata hai.',
  'The table is ready. Now you can compare your four versions fairly.':
    'Table taiyaar hai. Ab aap apne chaaron versions ki barabari se tulna kar sakte hain.',
  'Score all four versions':
    'Chaaron versions ko score kijiye',
  'Run each of your four prompt versions on all ten inputs. Mark each answer pass or fail against what you wrote down. That is forty quick checks by hand. It is like marking forty answer sheets.':
    'Apne chaaron prompt versions ko saare das inputs par chalaiye. Har jawaab par pass ya fail ka nishan lagaiye, jo aapne likha tha uske hisaab se. Yeh haath se chalis chhoti jaanchein hain. Chalis answer sheets jaanchne jaisa.',
  'The order is often not what you expected. The gap between best and worst is often smaller than it felt. The versions differ most on the two refusal rows. Those are the cases people rarely show in a demo.':
    'Kram aksar waisa nahin hota jaisa aapne socha tha. Sabse achhe aur sabse kharab ke beech ka fasla aksar utna bada nahin hota jitna lagta tha. Versions mein sabse zyada farak do mana-karne wali rows par dikhta hai. Yeh woh cases hain jo log demo mein shayad hi dikhate hain.',
  'Once you have a best version, you will want to make it better. The pull is to fix everything at once. Stop and think about what you would learn from that.':
    'Jab ek sabse achha version mil jaaye, aap use aur behtar karna chahenge. Man karta hai sab kuch ek saath theek kar dein. Ruk kar sochiye ki isse aap kya seekhenge.',
  'What goes wrong':
    'Kya galat hota hai',
  'Make a guess. In one go, you change the job description, add a third example, and drop one “never do this” rule. The score goes up. What have you learned?':
    'Andaaza lagaiye. Ek saath aap kaam ka vivaran badalte hain, teesra udaharan jodte hain, aur ek “yeh kabhi mat karo” niyam hata dete hain. Score badh jaata hai. Aapne kya seekha?',
  'Only that the whole bundle is better. You do not know which change helped. One of the three may even hurt, while the other two cover for it. It is like taking three medicines at once and not knowing which one worked.':
    'Bas yeh ki poora gucchha behtar hai. Aapko nahin pata kaunsa badlav kaam aaya. Teen mein se ek nuksaan bhi kar sakta hai, jabki baaki do uski kami poori kar dete hain. Yeh teen dawaiyan ek saath lene jaisa hai, aur pata na chalna ki kaunsi asar kar gayi.',
  'So change one thing. Run again. Write down the score. It is slower, but it is the only way to know what helped. When someone says they “tuned the prompt”, ask how many things they changed at once.':
    'Isliye ek cheez badaliye. Dobara chalaiye. Score likh lijiye. Yeh dheema hai, par yahi jaanne ka ek tareeka hai ki kya kaam aaya. Jab koi kahe ki unhone “prompt tune kiya”, poochiye ki ek saath kitni cheezein badli.',
  'Make one change and score again':
    'Ek badlav kijiye aur dobara score kijiye',
  'Take the best version. Make exactly one change, such as swapping one example for a better one. Run all ten inputs again. Write the new score next to the old one.':
    'Sabse achha version lijiye. Theek ek badlav kijiye, jaise ek udaharan ko behtar se badalna. Saare das inputs dobara chalaiye. Naya score purane ke baaju mein likhiye.',
  'The score moved, or it did not. Both are useful. If a change does not move the score on ten real inputs, you can remove it. That makes the prompt cheaper every time you send a message to the model.':
    'Score hila, ya nahin hila. Dono kaam ke hain. Agar das asli inputs par badlav se score nahin hilta, to use hata sakte hain. Isse prompt sasta ho jaata hai, model ko har baar message bhejne par.',
  'Keep the table. When your provider (the company that runs the model) updates the model, run it again. In one afternoon you will know if anything broke. You will not have to hear it from a customer.':
    'Table sambhaal kar rakhiye. Jab aapka provider (woh company jo model chalati hai) model update kare, use dobara chalaiye. Ek dopahar mein pata chal jaayega ki kuch toota to nahin. Kisi customer se sunna nahin padega.',
  'You now have a prompt chosen on evidence. You also have a way to check it again whenever something changes. Many teams that ship AI features do not have this.':
    'Ab aapke paas saboot par chuna hua prompt hai. Aur jab bhi kuch badle, use dobara jaanchne ka tareeka bhi. AI features chalane wali kai teams ke paas yeh nahin hota.',
  'There is one limit. Everything so far works on text you paste into the prompt. Sometimes the answer depends on a document too big to paste, like a policy, a contract or a handbook. Then these tricks do not help, because the model never sees the document. Chapter 3 starts on that problem.':
    'Ek seema hai. Ab tak sab kuch us text par chalta hai jo aap prompt mein paste karte hain. Kabhi jawaab kisi aise document par tikta hai jo paste karne ke liye bahut bada hai, jaise policy, contract ya handbook. Tab yeh tareeke madad nahin karte, kyunki model document dekhta hi nahin. Chapter 3 isi samasya se shuru hota hai.',
});
