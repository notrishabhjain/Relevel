/* Hinglish for Reasoning models: when paying for thinking helps (chapter:ch11), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Some models think on rough paper before they answer. They are called reasoning models. You pay for that thinking on every request. You will measure when it makes answers better, and when it only adds cost and waiting.':
    'Kuch models jawaab dene se pehle kachche kaagaz par sochte hain. Inhe reasoning models kehte hain. Us sochne ka paisa aap har request par dete hain. Aap naapenge ki yeh kab jawaab behtar banata hai, aur kab sirf cost aur intezaar badhata hai.',
  'Say what you are buying when you switch reasoning on.':
    'Bata paana ki reasoning on karne par aap asal mein kya kharid rahe hain.',
  'Name two tasks where reasoning helps, and two where it is wasted.':
    '2 tasks bata paana jahan reasoning kaam aati hai, aur 2 jahan woh bekaar jaati hai.',
  'Explain why a reasoning model that gets bad evidence gives a wrong answer that sounds more sure.':
    'Samjha paana ki galat evidence milne par reasoning model aisa galat jawaab deta hai jo zyada pakka sunai deta hai.',
  'Decide when the costly model is worth it':
    'Tay kijiye ki mehnga model kab fayde ka hai',
  'Some models “think” before they answer. They cost more and take longer. In Bharat Privacy Guard, most sentences are easy and only a few are really hard. You saw what reasoning buys. You also saw that on bad evidence it only gives a wrong answer that sounds surer. Now you will build the rule that picks which sentences get the costly model.':
    'Kuch models jawaab dene se pehle “sochte” hain. Unki cost zyada hoti hai aur woh zyada time lete hain. Bharat Privacy Guard mein zyadatar sentences aasaan hain, aur sirf kuch hi sach mein mushkil hain. Aapne dekha ki reasoning se kya milta hai. Yeh bhi dekha ki galat evidence par woh sirf aisa galat jawaab deti hai jo zyada pakka lagta hai. Ab aap woh rule banayenge jo chunta hai ki kin sentences ko mehnga model milega.',
  'Use your notebook for this chapter to run both groups and record the four results. Write the routing rule (the rule that sends each sentence to the right model) in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 3.':
    'Is chapter ka notebook use kijiye, dono groups chalane aur chaaron results likhne ke liye. Routing rule (woh rule jo har sentence ko sahi model tak bhejta hai) neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2 aur 3.',
  'Take the 30 rows of your answer key (version 2), your list of questions with the right answers. Split them into two groups. Group one: sentences with one clear right answer, like a PAN. Group two: sentences that need judgement, like starter sentence 8.':
    'Apne answer key (version 2) ki 30 rows lijiye, yaani sawaalon ki list sahi jawaabon ke saath. Unhe do groups mein baantiye. Group ek: aise sentences jinka ek saaf sahi jawaab hai, jaise PAN. Group do: aise sentences jinme judgement chahiye, jaise starter sentence 8.',
  'Run each group twice. Once with reasoning off, once with reasoning on. That gives you four sets of results.':
    'Har group ko do baar chalaiye. Ek baar reasoning off, ek baar on. Isse aapko chaar sets of results milte hain.',
  'For each set, write down the quality (how many rows are right), the cost and the time.':
    'Har set ke liye quality (kitni rows sahi hain), cost aur time likhiye.',
  'Find the point where the extra waiting and extra cost are no longer worth the extra accuracy. Write it as a rule of thumb (a simple guide from experience).':
    'Woh point dhoondhiye jahan extra intezaar aur extra cost, extra accuracy ke layak nahi rehte. Use rule of thumb ki tarah likhiye (anubhav se bana ek simple thumb-rule).',
  'Find one sentence in your data where reasoning changes nothing but costs several times more.':
    'Apne data mein ek aisa sentence dhoondhiye jahan reasoning se kuch nahi badla, lekin cost kai guna zyada lagi.',
  'Write the rule that picks which sentences go to the costly model. Make it clear enough that an engineer can build it. For example: “Only sentences that the pattern checker and the finder both flagged as unsure.”':
    'Woh rule likhiye jo chunta hai ki kaun se sentences mehnge model ke paas jaayein. Use itna saaf likhiye ki ek engineer bana sake. Jaise: “Sirf woh sentences jinhe pattern checker aur finder, dono ne unsure flag kiya.”',
  'Four sets of results, each with its quality, cost and time.':
    'Chaar sets of results, har ek ki quality, cost aur time ke saath.',
  'A rule of thumb for when the extra cost is no longer worth it.':
    'Ek rule of thumb ki extra cost kab fayde ki nahi rehti.',
  'One sentence where reasoning changed nothing.':
    'Ek sentence jahan reasoning se kuch nahi badla.',
  'The routing rule, written so an engineer can build it.':
    'Routing rule, aise likha hua ki ek engineer use bana sake.',
  'You pay for the text going in and the text coming out':
    'Aap andar jaane wale aur bahar aane wale, dono text ka paisa dete hain',
  'Thinking is text too, like the rough work on paper. So it has a cost.':
    'Sochna bhi text hi hai, kachche kaagaz ke kaam jaisa. Isliye uski bhi cost lagti hai.',
  'A request is a budget with parts':
    'Ek request ek budget hai jisme kai hisse hote hain',
  'Thinking adds one more part to that budget.':
    'Sochna us budget mein ek aur hissa jod deta hai.',
  'The code runs right here, one cell (one box of code) after another. Then pick a model that can reason. Type <code>client.models.list()</code> in a cell. The client is the messenger that carries your note to the model. This line asks it for every model your provider (the company that runs the models) offers.':
    'Code yahin chalta hai, ek cell (code ka ek dibba) ke baad doosra. Phir ek aisa model chuniye jo reason kar sake. Kisi cell mein <code>client.models.list()</code> likhiye. Client woh messenger hai jo aapka note model tak le jaata hai. Yeh line us se aapke provider (models chalane wali company) ke saare models maangti hai.',
  'Last chapter you chose what goes into a request and what stays out. Now ask a new question. How hard should the model work before it answers? Some models can work longer. You pay for every bit of that extra work. This chapter shows how to tell when the payment is worth it.':
    'Pichhle chapter mein aapne chuna ki request mein kya jaaye aur kya bahar rahe. Ab ek naya sawaal poochhiye. Jawaab dene se pehle model ko kitni mehnat karni chahiye? Kuch models zyada der kaam kar sakte hain. Us extra kaam ke har hisse ka paisa aap dete hain. Yeh chapter dikhata hai ki kaise pata karein ki yeh paisa kab wasool hota hai.',
  'What a reasoning model does':
    'Reasoning model kya karta hai',
  'Think of a sum. You can do it in your head, or on paper. A simple sum just comes to you. For a hard one, you write the steps, check them, and go back if something looks wrong. A reasoning model does the second thing.':
    'Ek sum socchiye. Aap use dimaag mein kar sakte hain, ya kaagaz par. Aasaan sum ka jawaab seedha aa jaata hai. Mushkil sum mein aap steps likhte hain, check karte hain, aur kuch galat lage toh peeche jaate hain. Reasoning model doosra wala kaam karta hai.',
  'Most models answer straight away. A <strong>reasoning model</strong> first writes out its working, like a student on rough paper. It tries one way, checks it, and goes back if needed. Only then does it answer. You usually do not see the working, but you pay for it.':
    'Zyadatar models seedha jawaab de dete hain. <strong>Reasoning model</strong> pehle apna working likhta hai, kachche kaagaz par student ki tarah. Woh ek tareeka try karta hai, check karta hai, aur zaroorat ho toh peeche jaata hai. Uske baad hi jawaab deta hai. Aapko working aam taur par dikhta nahi, lekin uska paisa lagta hai.',
  'This is called <strong>test-time compute</strong>, which means thinking effort spent while answering. A model’s accuracy is not fixed after training. You can buy more of it for each question by letting the model work longer. It is like giving a colleague more time on a hard question.':
    'Isko <strong>test-time compute</strong> kehte hain, yaani jawaab dete waqt lagayi gayi sochne ki mehnat. Training ke baad model ki accuracy fix nahi ho jaati. Model ko zyada der kaam karne dekar aap har sawaal ke liye aur zyada accuracy kharid sakte hain. Yeh waise hai jaise colleague ko mushkil sawaal par zyada time dena.',
  'On many models you do not need a separate model. You get a setting, like a dial. Most providers let you choose how much thinking the same model does. So look for that dial before you look for a different model.':
    'Kai models mein yeh alag model nahi hota. Yeh ek setting hai, dial jaisi. Zyadatar providers aapko chunne dete hain ki wahi model kitna sochta hai. Isliye alag model dhoondhne se pehle woh dial dhoondhiye.',
  'Let’s see what this costs in real life. You will give the same two tasks to a fast model and to a reasoning model.':
    'Chaliye dekhte hain ki asal mein isme kitna kharcha hota hai. Aap wahi do tasks ek fast model aur ek reasoning model ko denge.',
  'Compare two tasks at two settings':
    'Do tasks ko do settings par compare kijiye',
  'Make two tasks from your own work. One should be a simple lookup (finding a fact that is already given). The other should need several steps. For example, an eligibility calculation with conditions, or matching three figures against each other.':
    'Apne hi kaam se do tasks banaiye. Ek simple lookup ho (diya hua fact dhoondhna). Doosre mein kai steps lagein. Jaise conditions ke saath eligibility calculation, ya teen figures ko aapas mein milana.',
  'On the lookup, the answers are almost the same. But the reasoning model uses several times more output tokens (Lego bricks of text it writes back) and more seconds. On the multi-step task, the right answers often differ, sometimes by a lot. That contrast is the main point of this chapter.':
    'Lookup par answers lagbhag ek jaise hote hain. Lekin reasoning model kai guna zyada output tokens (jo text woh wapas likhta hai, uski Lego eentein) aur seconds leta hai. Multi-step task par sahi jawaabon mein aksar farq hota hai, kabhi-kabhi bahut bada. Yahi contrast is chapter ki sabse zaroori baat hai.',
  'Before you run it, guess how many times more output tokens the reasoning model will use on the <em>lookup</em>. Most people guess 2×.':
    'Run karne se pehle andaaza lagaiye ki <em>lookup</em> par reasoning model kitne guna zyada output tokens use karega. Zyadatar log 2× sochte hain.',
  'So what did you just buy? Extra seconds and extra tokens on every request, whether or not the answer got better.':
    'Toh aapne abhi kya kharida? Har request par extra seconds aur extra tokens, chahe jawaab behtar hua ho ya nahi.',
  'Thinking is something you buy on every request, in money and in waiting time. On many tasks it buys nothing, like hiring a mathematician to read a name off a list.':
    'Sochna aisi cheez hai jo aap har request par kharidte hain, paise mein bhi aur intezaar mein bhi. Bahut se tasks mein isse kuch nahi milta, jaise list se naam padhne ke liye ganit ke professor ko bulana.',
  'You can see the same thing in the tool below.':
    'Yahi cheez aap neeche wale tool mein bhi dekh sakte hain.',
  'Where thinking helps':
    'Sochna kahan kaam aata hai',
  'Thinking buys nothing on a lookup, but it helps on a multi-step task. So the next question is clear. Which of your own tasks are which? Sort a few before you read the answer.':
    'Lookup par sochne se kuch nahi milta, lekin multi-step task mein madad milti hai. Toh agla sawaal saaf hai. Aapke apne tasks mein kaun sa kaun sa hai? Jawaab padhne se pehle kuch tasks ko baant lijiye.',
  'Two that gain, two that do not':
    'Do jahan fayda hota hai, do jahan nahi',
  'Look at your own product. Name two tasks that would get better with reasoning. Name two that would only get slower and costlier.':
    'Apne product ko dekhiye. 2 tasks bataiye jo reasoning se behtar honge. 2 aur bataiye jo sirf slow aur mehnge ho jaayenge.',
  'Reasoning helps with multi-step logic, and with sums where each step needs the last one. It helps with code, with planning, and with real confusion that needs sorting out. It is wasted on looking things up, pulling out fields, sorting into groups, changing the format, and sending to the right place. It is also wasted on summarising a passage you gave.':
    'Reasoning in cheezon mein madad karti hai: multi-step logic, aise sum jahan har step ko pichhla step chahiye, code, planning, aur asli uljhan suljhana. Woh in kaamon mein bekaar jaati hai: cheezein dhoondhna, fields nikalna, groups mein baantna, format badalna, aur sahi jagah bhejna. Aapke diye passage ka summary banane mein bhi woh bekaar hai.',
  'Here is the pattern. Reasoning helps when the answer has to be worked out. It does nothing when the answer is already in the input and only needs to be found or reshaped.':
    'Pattern yeh hai. Reasoning tab madad karti hai jab jawaab ko solve karna padta hai. Jab jawaab input mein pehle se maujood hai aur sirf dhoondhna ya naye roop mein dena hai, tab woh kuch nahi karti.',
  'Your own guesses help, but real requests are better. Let’s test the pattern on ten of them.':
    'Aapke andaaze kaam ke hain, lekin asli requests aur behtar hain. Chaliye pattern ko 10 requests par test karte hain.',
  'Test it on your own requests':
    'Apni hi requests par test kijiye',
  'Take ten real requests your feature would get. Before you test, mark each one: needs reasoning, or does not. Then run both models on all ten. Grade the answers, like a teacher marking papers.':
    '10 asli requests lijiye jo aapke feature ko milengi. Test se pehle har ek par mark kijiye: reasoning chahiye, ya nahi. Phir dono models ko saari 10 par chalaiye. Answers ko grade kijiye, jaise teacher copy jaanchta hai.',
  'Now fill in the table below. Count how many of your ten fall in each box. The box to look at is the top right.':
    'Ab neeche wali table bhariye. Ginye ki aapki 10 mein se kitni har box mein aati hain. Dekhne wala box upar-daayein wala hai.',
  'Fast model correct':
    'Fast model sahi',
  'Fast model wrong':
    'Fast model galat',
  'Reasoning correct':
    'Reasoning sahi',
  'Waste: you paid for nothing.':
    'Waste: aapne bekaar mein paise diye.',
  '<strong>The only box that justifies the spend.</strong>':
    '<strong>Sirf yahi box kharche ko sahi thehraata hai.</strong>',
  'Reasoning wrong':
    'Reasoning galat',
  'Reasoning hurt, so look into it.':
    'Reasoning ne nuksaan kiya, isliye jaanch kijiye.',
  'Neither works. The problem is the pages found or the data, not the thinking.':
    'Dono kaam nahi karte. Problem dhoondhe gaye pages ya data ki hai, sochne ki nahi.',
  'Count how many of your ten land in the top-right box. In most document work it is one or two. Take that number with you to any talk about price.':
    'Ginye ki aapki 10 mein se kitni upar-daayein box mein aati hain. Zyadatar document kaam mein yeh ek ya do hoti hain. Price ki baatcheet mein yahi number saath le jaaiye.',
  'Three things to watch for':
    'Teen cheezon par nazar rakhiye',
  'Before you use reasoning anywhere, remember three warnings. It is like checking the road before a journey.':
    'Reasoning kahin bhi use karne se pehle teen chetavaniyan yaad rakhiye. Safar se pehle raasta dekh lene jaisa.',
  '<strong>Reasoning does not create evidence.</strong> Give a reasoning model the wrong document. It will think carefully, and at length, from that wrong document. The result is a wrong answer that sounds surer than a cheap model’s answer.':
    '<strong>Reasoning evidence paida nahi karti.</strong> Reasoning model ko galat document dijiye. Woh us galat document se hi dhyaan se aur der tak sochega. Natija aisa galat jawaab hota hai jo sasta model ke jawaab se zyada pakka lagta hai.',
  '<strong>Waiting time is a product problem.</strong> Thinking takes seconds, sometimes tens of seconds. On a chat screen, that wait can be a problem, however good the answer is.':
    '<strong>Intezaar ek product problem hai.</strong> Sochne mein seconds lagte hain, kabhi-kabhi dus-dus seconds. Chat screen par yeh wait problem ban sakta hai, jawaab chahe kitna bhi achha ho.',
  '<strong>It is not all or nothing.</strong> Decide for each kind of request how much thinking to use. Do not decide once for the whole product.':
    '<strong>Yeh sab ya kuch nahi wala maamla nahi hai.</strong> Har tarah ki request ke liye alag tay kijiye ki kitna sochna hai. Poore product ke liye ek baar mein tay mat kijiye.',
  'People most often underrate the first warning, so let’s watch it happen.':
    'Log pehli chetavani ko sabse zyada kam aankte hain, isliye ise hote hue dekhte hain.',
  'Give a reasoning model the wrong evidence':
    'Reasoning model ko galat evidence dijiye',
  'Take your Chapter 7 pipeline (the chain of steps from question to answer). Set k=1, so it hands over only one card. Choose a question that you know finds the <em>wrong</em> card. Answer it with the fast model first. Then answer it with the reasoning model.':
    'Apni Chapter 7 wali pipeline lijiye (sawaal se jawaab tak ke steps ki zanjeer). k=1 set kijiye, taaki woh sirf ek card de. Ek aisa sawaal chuniye jisme aapko pata hai ki woh <em>galat</em> card laata hai. Pehle fast model se jawaab dilwaiye. Phir reasoning model se.',
  'Both answers are wrong. But the reasoning model’s answer is longer and gives better reasons, so a reviewer is more likely to believe it. Write one sentence on what this means for how you check answers.':
    'Dono answers galat hain. Lekin reasoning model ka jawaab lamba hai aur uske kaaran behtar hain, isliye reviewer ke use sach maan lene ke chance zyada hain. Ek sentence likhiye ki isse answers jaanchne par kya asar padta hai.',
  'The second warning is about time. An average hides the slow cases, so let’s look at them directly.':
    'Doosri chetavani time ke baare mein hai. Average slow cases ko chhupa deta hai, isliye unhe seedha dekhte hain.',
  'Measure the slowest replies':
    'Sabse slow replies naapiye',
  'Run your multi-step task ten times with reasoning on. Write down every response time. Sort them in order. Note the median (the middle one) and the slowest.':
    'Apna multi-step task reasoning on karke 10 baar chalaiye. Har response time likhiye. Unhe order mein lagaiye. Median (beech wala) aur sabse slow wala note kijiye.',
  'The slowest is usually two to three times the median. <strong>Users notice the slow replies, not the median.</strong> Write down both numbers. You will need the slowest one in Chapter 15, and in any talk about a speed promise to customers.':
    'Sabse slow aam taur par median se 2 se 3 guna zyada hota hai. <strong>Users ko slow replies dikhte hain, median nahi.</strong> Dono numbers likhiye. Sabse slow wala aapko Chapter 15 mein chahiye hoga, aur customers ko diye speed ke vaade ki kisi bhi baatcheet mein.',
  'The third warning is really a design choice. You can decide, request by request, who gets the costly model. Let’s write that rule down.':
    'Teesri chetavani asal mein design choice hai. Aap request-by-request tay kar sakte hain ki mehnga model kise milega. Chaliye woh rule likhte hain.',
  'Write a routing rule. Pick one feature you own. Which requests get reasoning? Which do not? What measurement would show that the rule is wrong?':
    'Ek routing rule likhiye. Apna ek feature chuniye. Kin requests ko reasoning milegi? Kinko nahi? Kaun si measurement dikhayegi ki rule galat hai?',
  'Reasoning when … not when … I would know I was wrong if …':
    'Reasoning tab jab … tab nahi jab … Mujhe pata chalega ki main galat tha agar …',
  'A strong rule sorts requests by something you can see <em>before</em> answering. That could be the kind of question, how many items it names, whether it has arithmetic, or whether the cards found disagree with each other. A strong rule also says what would prove it wrong. For example, the group without reasoning scores lower than the reasoning group on the same questions. Or the thinking replies take longer than your screen can bear.':
    'Ek achha rule requests ko aisi cheez se baantta hai jo aap jawaab dene se <em>pehle</em> dekh sakte hain. Woh sawaal ki kism ho sakti hai, usme kitni cheezein hain, usme hisaab hai ya nahi, ya dhoondhe gaye cards aapas mein alag baat kehte hain ya nahi. Achha rule yeh bhi batata hai ki kya usse galat saabit karega. Jaise, bina reasoning wala group usi sawaal par reasoning wale group se kam score kare. Ya sochne wale replies itna time lein jitna aapki screen jhel nahi sakti.',
  'One last experiment. So far you saw thinking wasted on easy tasks. Now you will see it do harm.':
    'Ek aakhri experiment. Ab tak aapne dekha ki aasaan tasks par sochna bekaar jaata hai. Ab aap dekhenge ki woh nuksaan bhi karta hai.',
  'Use reasoning on a trivial task':
    'Ek bahut chhote task par reasoning use kijiye',
  'Give the reasoning model a tiny task: <em>“Classify this sentence as complaint, query, or compliment.”</em> (Classify means put it in one of the piles.) Run it five times at maximum effort.':
    'Reasoning model ko ek bahut chhota task dijiye: <em>“Classify this sentence as complaint, query, or compliment.”</em> (Classify yaani use kisi ek dher mein daalna.) Ise maximum effort par 5 baar chalaiye.',
  'You will see long working. Sometimes the answer is worse than the fast model’s, because it doubts an obvious pick. Overthinking is real, and you just measured it.':
    'Aapko lamba working dikhega. Kabhi-kabhi jawaab fast model se bhi kharab hota hai, kyunki woh ek saaf jawaab par bhi shak karne lagta hai. Zyada sochna asli cheez hai, aur aapne ise abhi naapa hai.',
  'Let’s put it together. You buy thinking on every request, in money and in waiting time. It pays off when the answer has to be worked out. It is wasted when the answer is already in front of the model. And if the evidence is wrong, it only makes a wrong answer sound better.':
    'Chaliye sab jod lete hain. Sochna aap har request par kharidte hain, paise mein bhi aur intezaar mein bhi. Woh tab kaam aata hai jab jawaab ko solve karna padta hai. Woh bekaar jaata hai jab jawaab model ke saamne pehle se hai. Aur agar evidence galat hai, toh woh sirf galat jawaab ko achha sunwa deta hai.',
  'Thinking makes every request wait longer. The next chapter looks at that wait from the user’s side. You will time a request, stream it (show the words as they come), and decide what the screen shows while the person waits.':
    'Sochne se har request ko zyada intezaar karna padta hai. Agla chapter us wait ko user ki nazar se dekhta hai. Aap ek request ko time karenge, use stream karenge (shabd aate hi dikhana), aur tay karenge ki insaan ke intezaar ke dauran screen par kya dikhega.',
});
