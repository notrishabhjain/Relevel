/* Hinglish for Measuring business impact: designing a pilot (chapter:ch205), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A tool can be right most of the time and still change nothing for the business. Think of a fast new lift in a building where people wait three days for a signature. Today you find the slow part of a workflow (a job’s steps). Then you design a pilot (a small, fair test run) with a business metric (the one number the business watches), a comparison, a failure threshold and a time window.':
    'Ek tool zyadatar sahi ho sakta hai, phir bhi business ke liye kuchh nahi badalta. Socho ek nayi tez lift us building mein jahan log teen din sign ke liye rukte hain. Aaj aap workflow (kaam ke steps) ka dheema hissa dhoondhenge. Phir ek pilot (chhota, nishpaksh test run) design karenge, jismein business metric (woh ek number jo business dekhta hai), comparison, failure threshold aur time window honge.',
  'Design a pilot that could really show the feature did not help.':
    'Aisa pilot design kijiye jo sach mein dikha sake ki feature se madad nahi mili.',
  'Name the one number the business cares about, and say how the feature would move it.':
    'Woh ek number batayiye jisse business ko matlab hai, aur kahiye ki feature use kaise hilayega.',
  'Explain why a system that scores well in tests can still bring no business gain.':
    'Samjhaiye ki jo system tests mein achha score kare, woh phir bhi business ko koi fayda kyun nahi de sakta.',
  'Design a pilot that could fail':
    'Aisa pilot design kijiye jo fail ho sake',
  'A pilot that cannot fail proves nothing. In this chapter you learned to pick one number the business already tracks, to compare two groups, and to agree on a failure threshold (the result below which you call it a failure) before the pilot starts. Now you design a pilot of the developer kit with five to ten real developers.':
    'Jo pilot fail ho hi nahi sakta, woh kuchh sabit nahi karta. Is chapter mein aapne seekha ki ek aisa number chuno jo business pehle se dekhta hai, do groups ki tulna karo, aur pilot shuru hone se pehle failure threshold (woh result jisse neeche aap use fail kahenge) tay karo. Ab aap developer kit ka ek pilot design karenge, paanch se das asli developers ke saath.',
  'This task is written, with no code. Plan it on paper, then write it up, and get it agreed before anything runs. Short version for the route, about 20 minutes: steps 2, 4 and 6.':
    'Yeh kaam likhne ka hai, code nahi. Kaagaz par plan kijiye, phir likhiye, aur kuchh bhi chalne se pehle use manzoor karwaiye. Route ke liye chhota version, kareeb 20 minute: steps 2, 4 aur 6.',
  'Time the whole workflow of a developer who handles user text. Mark where the kit fits. If it is not on the critical path (the chain of steps that sets the total time), say so and stop here.':
    'Us developer ke poore workflow ka time lijiye jo user ka text sambhalta hai. Nishaan lagaiye ki kit kahan baithta hai. Agar woh critical path (woh kadiyan jo kul time tay karti hain) par nahi hai, to yeh kahiye aur yahin ruk jaiye.',
  'Choose the business number. It must already exist, and someone must already look at it. For example: the number of support tickets that say someone pasted personal data into a chat.':
    'Business number chuniye. Woh pehle se hona chahiye, aur koi use pehle se dekhta ho. Jaise: un support tickets ki ginti jo kehti hain ki kisi ne chat mein personal data paste kar diya.',
  'Design the comparison. Say which two groups of developers, or which two periods, you will compare. Say why they are fair to compare.':
    'Comparison design kijiye. Batayiye ki developers ke kaun se do groups, ya kaun se do daur, aap tulna karenge. Batayiye ki unki tulna nishpaksh kyun hai.',
  'Write the failure threshold: the change below which you will call the pilot a failure. Also write the time window, which is how long you will wait before you judge.':
    'Failure threshold likhiye: woh badlaav jisse kam hone par aap pilot ko fail kahenge. Time window bhi likhiye, yaani faisla karne se pehle aap kitna intezaar karenge.',
  'Write the disappointing result in advance, in the words you would say to whoever paid for it.':
    'Niraash karne wala result pehle se likhiye, un shabdon mein jo aap us insaan se kahenge jisne paisa lagaya.',
  'Get the person who pays for it to agree to the threshold in writing, before the pilot runs.':
    'Jo insaan paisa laga raha hai, use pilot chalne se pehle threshold likhit mein manzoor karwaiye.',
  'A business number that was already being tracked before the pilot.':
    'Ek business number jo pilot se pehle se dekha ja raha tha.',
  'A comparison between two groups or periods, with a reason why it is fair.':
    'Do groups ya daur ki tulna, aur yeh kaaran ki woh nishpaksh kyun hai.',
  'A failure threshold agreed in writing by the person who would be let down by it.':
    'Ek failure threshold jo us insaan ne likhit mein manzoor kiya jise usse nirasha hogi.',
  'A description of a result that would make you advise switching the kit off.':
    'Ek aise result ka vivaran jisse aap kit ko band karne ki salaah denge.',
  'You can measure the system':
    'Aap system ko naap sakte hain',
  'That means recall, precision, judges and per-category scores. Recall is how many of the fish in the pond your net caught. Precision is how much of the net is really fish.':
    'Matlab recall, precision, judges aur har category ke scores. Recall yeh hai ki talaab ki kitni machhliyan aapke jaal mein aayin. Precision yeh hai ki jaal mein jo hai, uska kitna hissa sach mein machhli hai.',
  'The screen has four states':
    'Screen ki chaar states hain',
  'What the user sees decides if the quality reaches them. A good answer on a bad screen is like hot food dropped on the floor.':
    'User jo dekhta hai, wahi tay karta hai ki achhi quality us tak pahunchti hai ya nahi. Buri screen par achha jawaab aisa hai jaise garam khaana zameen par gir gaya ho.',
  'You don’t need any code for this chapter. Bring a feature you have measured, yours or one from the course, and the name of the person who pays for it.':
    'Is chapter ke liye code ki zaroorat nahi. Ek aisa feature layiye jise aapne naapa hai, aapka ho ya course ka, aur us insaan ka naam jo uska kharch uthata hai.',
  'So far the course has measured the system itself. Is retrieval (finding the right page before answering) right? Can the judge (a second model that marks answers) be trusted? Is the classifier (the sorter that puts items in piles) right in each category? All of that is needed.':
    'Ab tak course ne system ko hi naapa hai. Kya retrieval (jawaab se pehle sahi page dhoondhna) sahi hai? Kya judge (doosra model jo jawaab check karta hai) par bharosa kiya ja sakta hai? Kya classifier (cheezein dheriyon mein baantne wala) har category mein sahi hai? Yeh sab zaroori hai.',
  'But none of it answers the question that decides future funding: did it help the business? This chapter is about that question. It ends with a pilot you can really design.':
    'Par inmein se koi bhi us sawaal ka jawaab nahi deta jo aage ka paisa tay karta hai: kya isse business ko madad mili? Yeh chapter usi sawaal ke baare mein hai. Yeh ek aise pilot par khatam hota hai jo aap sach mein design kar sakte hain.',
  'A system can be right 94 times out of 100 and still change nothing. Maybe nobody uses it. Maybe the step it speeds up was never the slow part.':
    'Ek system 100 mein se 94 baar sahi ho sakta hai aur phir bhi kuchh nahi badalta. Shayad koi use nahi karta. Shayad jis step ko woh tez karta hai, woh kabhi dheema tha hi nahi.',
  'Find the slow part first':
    'Pehle dheema hissa dhoondhiye',
  'Before you design anything, check that you are speeding up the right step. It is like fixing a slow queue at the wrong counter. To check, time the whole workflow.':
    'Kuchh bhi design karne se pehle dekhiye ki aap sahi step ko tez kar rahe hain. Yeh galat counter par lambi line theek karne jaisa hai. Dekhne ke liye poore workflow ka time lijiye.',
  'Time the whole workflow':
    'Poore workflow ka time lijiye',
  'Take the workflow your feature is part of. Time it honestly from start to finish. Count every step, including the time you spend waiting for other people.':
    'Woh workflow lijiye jiska hissa aapka feature hai. Use imaandaari se shuru se aakhir tak time kijiye. Har step ginie, doosron ka intezaar karne ka time bhi.',
  'The AI step is rarely the biggest. Often the biggest block is waiting for a person, or a hand-off between two systems. Make a four-minute step take one minute inside a three-day process, and nobody will notice.':
    'AI wala step shaayad hi kabhi sabse bada hota hai. Aksar sabse bada hissa kisi insaan ka intezaar hota hai, ya do systems ke beech ka hand-off. Teen din ke process ke andar chaar minute ke step ko ek minute ka kar dijiye, kisi ko pata bhi nahi chalega.',
  'This is the cheapest study in the course. It is also the one most often skipped, because it can show that you should not build the feature.':
    'Yeh course ka sabse sasta adhyayan hai. Yahi sabse zyada chhoda bhi jata hai, kyunki yeh dikha sakta hai ki aapko feature banana hi nahi chahiye.',
  'Four parts of a pilot':
    'Pilot ke chaar hisse',
  'Say the step you are speeding up really is on the critical path. Then you can design a pilot. Think of a pilot as a test that says in advance which result would let you down. It is not a small launch.':
    'Maan lijiye jis step ko aap tez kar rahe hain woh sach mein critical path par hai. Tab aap pilot design kar sakte hain. Pilot ko aisa test maniye jo pehle se kehta hai ki kaun sa result aapko niraash karega. Yeh chhota launch nahi hai.',
  'A pilot has four parts. Here they are, in order.':
    'Pilot ke chaar hisse hain. Yeh rahe, kram se.',
  '<strong>The number.</strong> Choose one measure the business already tracks, such as handling time, first-contact resolution (solved in the first call), backlog age or error rate. Do not invent a new number for the pilot.':
    '<strong>The number.</strong> Ek aisa naap chuniye jo business pehle se dekhta hai, jaise handling time, first-contact resolution (pehli hi baat mein hal), backlog age ya error rate. Pilot ke liye naya number mat banaiye.',
  '<strong>The comparison.</strong> Looking at the same team before and after is weak proof. Comparing two similar groups in the same period is much stronger. It is like testing two plants with the same sun, one with new fertiliser. It is usually possible.':
    '<strong>The comparison.</strong> Ek hi team ko pehle aur baad mein dekhna kamzor saboot hai. Ek hi daur mein do milte-julte groups ki tulna bahut mazboot hai. Yeh do paudhon ko ek jaisi dhoop mein rakhne jaisa hai, ek mein nayi khaad ke saath. Yeh aksar mumkin hota hai.',
  '<strong>The failure threshold.</strong> This is the change below which you will call the pilot a failure. Write it down before you start.':
    '<strong>The failure threshold.</strong> Yeh woh badlaav hai jisse kam hone par aap pilot ko fail kahenge. Shuru karne se pehle use likh lijiye.',
  '<strong>The time window.</strong> Make it long enough for the newness to wear off. Any new tool looks better than it is in its first two weeks.':
    '<strong>The time window.</strong> Use itna lamba rakhiye ki nayepan ka asar utar jaye. Har naya tool shuru ke do hafton mein asliyat se achha dikhta hai.',
  'The failure threshold is the part people skip. So let us practise it.':
    'Failure threshold woh hissa hai jo log chhod dete hain. Chaliye iska abhyaas karte hain.',
  'A pilot that could fail is like a pilot district. You agree the success mark with the steering committee (the senior group that guides the project) before the rollout, not after the numbers come in.':
    'Jo pilot fail ho sakta hai, woh pilot district jaisa hai. Aap safalta ka nishaan steering committee (project ko raah dikhane wala bada group) ke saath rollout se pehle tay karte hain, numbers aane ke baad nahi.',
  'Write the disappointing result in advance':
    'Niraash karne wala result pehle se likhiye',
  'Before you run anything, write the sentence you would have to say if the pilot showed no effect. Use the words you would say to the person who paid for it.':
    'Kuchh bhi chalane se pehle woh vaakya likhiye jo aapko kehna padega agar pilot ne koi asar na dikhaya. Wahi shabd rakhiye jo aap us insaan se kahenge jisne paisa lagaya.',
  'This shows you two things. One: do you really have a failure threshold? Many pilots do not. Two: could the pilot ever give you that sentence? Or would every result be called a success?':
    'Isse do baatein pata chalti hain. Ek: kya aapke paas sach mein failure threshold hai? Bahut se pilots mein nahi hota. Do: kya pilot kabhi aapko woh vaakya de sakta hai? Ya har result ko safalta kaha jayega?',
  'If a pilot cannot fail, it is really a launch.':
    'Agar pilot fail nahi ho sakta, to woh asal mein launch hai.',
  'When the system works but the number does not move':
    'Jab system chalta hai par number nahi hilta',
  'Sometimes you run a careful pilot and the system works, yet the business number stays where it was. It is like a new pump that works well but the tap upstairs still runs dry. Where do you look first?':
    'Kabhi kabhi aap dhyaan se pilot chalate hain aur system chalta hai, phir bhi business number wahin ka wahin rehta hai. Jaise nayi motor theek chalti hai par upar ka nal phir bhi sukha hai. Pehle kahan dekhein?',
  'Your pilot shows the system works well, but the business number does not move. Write the three reasons you would check first, in order.':
    'Aapka pilot dikhata hai ki system achha chalta hai, par business number nahi hilta. Woh teen kaaran likhiye jo aap pehle jaanchenge, kram se.',
  'This order usually works best. First: are people using it? Low use is the most common cause, and the easiest to check. Second: does the output reach the place where the decision is made, or is it in a tool someone must remember to open? Third: was the step you sped up really on the critical path? Only then doubt the quality. Teams check quality first, because they know how to measure it.':
    'Yeh kram aam taur par sabse achha chalta hai. Pehla: kya log use kar rahe hain? Kam use sabse aam kaaran hai, aur jaanchna sabse aasaan. Doosra: kya output wahan pahunchta hai jahan faisla hota hai, ya woh alag tool mein hai jise kholna yaad rakhna padta hai? Teesra: kya jis step ko aapne tez kiya woh sach mein critical path par tha? Tabhi quality par shak kijiye. Teams pehle quality jaanchti hain, kyunki unhe use naapna aata hai.',
  'The whole course repeats one idea, in bigger and bigger sizes. First decide what counts as failure. Then measure exactly that. Do not look at outputs and form a feeling. You have done this for a prompt, a retriever, a judge, a cost model and now a business case (the reasons a project is worth its money).':
    'Poora course ek hi baat dohraata hai, badi hoti hui. Pehle tay kijiye ki fail kya maana jayega. Phir theek wahi naapiye. Outputs dekhkar andaaza mat banaiye. Yeh aap prompt, retriever, judge, cost model ke liye kar chuke hain, aur ab business case (project ke paise ke laayak hone ke kaaran) ke liye.',
  'The tricks will change as models change. The habit of deciding what failure is first, and then measuring it, is what stays with you.':
    'Tareeke badlenge jaise models badlenge. Pehle failure tay karne aur phir use naapne ki aadat hi aapke saath rahegi.',
  'Next, you will learn the building blocks you need to work with AI systems yourself: Python, HTTP, Git and tests.':
    'Aage aap woh buniyadi hisse seekhenge jo AI systems par khud kaam karne ke liye chahiye: Python, HTTP, Git aur tests.',
});
