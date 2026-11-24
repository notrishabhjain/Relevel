/* Hinglish for Long context windows and context engineering (chapter:ch10), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'The model has a desk, called the context window. It can read only what fits on the desk. Desks are now huge, and companies that sell models say you no longer need retrieval (finding the right page first). You will test that claim. You will see how the cost grows. You will find where the model stops using what you sent. Then you will learn to set a budget, to cache (reuse the start of a request) and to compact (shrink old chat).':
    'Model ki ek mez hoti hai, jise context window kehte hain. Model sirf wahi padh sakta hai jo mez par fit ho. Ab mez bahut badi ho gayi hai, aur model bechne wali companies kehti hain ki retrieval (pehle sahi page dhoondhna) ki ab zaroorat nahi. Aap is daave ko test karenge. Aap dekhenge ki cost kaise badhti hai. Aap woh jagah dhoondhenge jahan model aapka bheja hua text use karna band kar deta hai. Phir aap budget banana, cache karna (request ka shuruaati hissa dobara use karna) aur compact karna (purani chat chhoti karna) seekhenge.',
  'Give two different reasons why a big desk does not remove the need for retrieval.':
    '2 alag wajah bata paana ki badi mez ke baad bhi retrieval ki zaroorat kyun rehti hai.',
  'Explain why a document that fits in the request may still be ignored by the model.':
    'Samjha paana ki jo document request mein fit ho jaata hai, model use phir bhi andekha kar sakta hai.',
  'Say what a token budget is (a spending limit counted in Lego bricks of text). Say which part you would cut first if the bill doubled.':
    'Bata paana ki token budget kya hai (text ki Lego eentein gin kar kharch ki limit). Aur bill double ho jaye toh pehle kaunsa hissa kaatenge.',
  'Set a budget for what you send to the model':
    'Model ko bheje jaane wale text ka budget set kijiye',
  'After the tool cleans a message, it sends it to an AI model. It also sends instructions and the earlier messages. Everything you send costs money and time. A big desk does not mean the model reads all of it well. You learned about token budgets, and about how a model can miss facts in the middle. Now you will make a budget for one feature of the project.':
    'Tool message saaf kar leta hai. Phir use ek AI model ko bhejta hai, instructions aur pichhle messages ke saath. Jo bhi bhejte hain, usme paisa aur time lagta hai. Badi mez ka matlab yeh nahi ki model sab achhe se padhega. Aapne token budget seekha, aur yeh bhi ki model beech ke facts chhod sakta hai. Ab aap project ke ek feature ka budget banayenge.',
  'Use your notebook for this chapter to take the measurements. Write the budget in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 6.':
    'Naapne ke liye is chapter ka notebook use kijiye. Budget neeche wale notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 2, 3 aur 6.',
  'Pick one feature: a bank’s support chat that uses Bharat Privacy Guard before it calls an AI model. List what each request must hold so the model answers well. That means the instructions, the earlier messages, the cleaned message and any policy text.':
    'Ek feature chuniye: ek bank ki support chat, jo AI model ko call karne se pehle Bharat Privacy Guard use karti hai. Likhiye ki achhe jawaab ke liye har request mein kya hona chahiye. Yaani instructions, pichhle messages, saaf kiya hua message aur policy ka text.',
  'Count each part in tokens (Lego bricks of text). Do it at three request sizes: a short chat, a medium chat and a long chat. Print the numbers in a table.':
    'Har hissa tokens mein ginye (text ki Lego eentein). 3 request sizes par ginye: chhoti chat, medium chat aur lambi chat. Numbers ek table mein print kijiye.',
  'Test if the model uses what you send. Hide one key fact, such as the customer’s loan type. Put it at the start, in the middle and at the end of a long request. Each time, ask a question about it. Note how often the answer is right in each place.':
    'Test kijiye ki model aapka bheja text use karta hai ya nahi. Ek key fact chhupaiye, jaise customer ka loan type. Use lambi request ke shuru, beech aur ant mein rakhiye. Har baar uske baare mein sawaal poochhiye. Likhiye ki har jagah kitni baar jawaab sahi aaya.',
  'Compare two ways. Send the whole chat, or send only the last three messages and a short summary. For both, note accuracy (how often it is right), tokens and time.':
    '2 tareeke compare kijiye. Poori chat bhejiye, ya sirf aakhri 3 messages aur ek chhota summary bhejiye. Dono ke liye accuracy (kitni baar sahi), tokens aur time likhiye.',
  'Put the text that never changes (instructions, policy) first. Put the text that changes last. Measure how much you save when the provider (the company running the model) reuses the start of your request.':
    'Jo text kabhi nahi badalta (instructions, policy), use pehle rakhiye. Jo badalta hai, use ant mein rakhiye. Naapiye ki kitna bachta hai jab provider (model chalane wali company) aapki request ka shuruaati hissa dobara use karta hai.',
  'Write the budget: tokens per request, cost per 1,000 requests, and what you would cut first if the bill doubled.':
    'Budget likhiye: har request ke tokens, har 1,000 requests ki cost, aur bill double ho jaye toh sabse pehle kya kaatenge.',
  'A table of tokens for each part of the request, at three sizes.':
    'Request ke har hisse ke tokens ki ek table, 3 sizes par.',
  'A result for the start, middle and end test.':
    'Shuru, beech aur ant wale test ka result.',
  'A comparison of the whole chat and the short version.':
    'Poori chat aur chhote version ka comparison.',
  'The budget, with the first thing you would cut.':
    'Budget, aur woh pehli cheez jo aap kaatenge.',
  'Pasting everything cost more and gave worse answers':
    'Sab kuch paste karne se kharcha badha aur jawaab bhi kharaab aaye',
  'This was the third gap from Chapter 7.5. This chapter shows why it happens.':
    'Yeh Chapter 7.5 ka teesra gap tha. Yeh chapter dikhata hai ki aisa kyun hota hai.',
  'One request has a size limit':
    'Ek request ki size ki limit hoti hai',
  'The limit is for one request, like the size of a desk. It is not memory.':
    'Limit sirf ek request ki hai, mez ki size jaisi. Yeh memory nahi hai.',
  'Chunking (cutting a book into index cards) exists because of that limit':
    'Chunking (kitaab ko index cards mein kaatna) isi limit ki wajah se hoti hai',
  'It also exists because you pay for everything you send.':
    'Yeh is wajah se bhi hoti hai ki jo bhi bhejte hain, uska paisa lagta hai.',
  'The code runs right here, one cell (one box of code) after another. Keep your Chapter 6 answer key ready (your list of questions with the right answers). Your Chapter 7 <code>rag_answer</code> function (a named recipe in your code) is still in the session. After a reload, press <strong>Restore</strong>.':
    'Code yahin chalta hai, ek cell (code ka ek dibba) ke baad doosra. Apna Chapter 6 ka answer key taiyaar rakhiye (sawaalon ki list, sahi jawaabon ke saath). Aapka Chapter 7 ka <code>rag_answer</code> function (code mein ek naam wali recipe) abhi session mein hai. Reload ke baad <strong>Restore</strong> dabaiye.',
  'Last chapter you gave the model tools. You saw that every step of a loop (the same step done again and again) adds to the bill. Now look at the other side of the bill. How much text do you send in one request? And what does the model do with it?':
    'Pichhle chapter mein aapne model ko tools diye. Aapne dekha ki loop (wahi step baar-baar) ka har step bill badhata hai. Ab bill ka doosra pehlu dekhiye. Ek request mein aap kitna text bhejte hain? Aur model us text ka kya karta hai?',
  'Chapter 1 showed the size limit of one request. Chapter 3 built chunking around it. But the limit has grown a lot. Desks now hold hundreds of thousands of tokens, sometimes millions. So an easy idea comes up: skip retrieval and send everything.':
    'Chapter 1 ne ek request ki size limit dikhayi. Chapter 3 ne chunking usi ke hisaab se banayi. Lekin ab woh limit bahut badh gayi hai. Mez par ab lakhon tokens aate hain, kabhi-kabhi millions. Toh ek aasaan soch aati hai: retrieval chhodiye aur sab kuch bhej dijiye.',
  'Is that true? Make a guess before you read on.':
    'Kya yeh sach hai? Aage padhne se pehle andaaza lagaiye.',
  'True or not, and what you would ask':
    'Sach hai ya nahi, aur aap kya poochhenge',
  'You met this claim in the book. Write your own answer before you test it. A company that sells models says a big desk makes your retrieval step unnecessary. Is that true for your documents? What would you ask to find out?':
    'Yeh daava aap book mein mil chuke hain. Test se pehle apna jawaab likhiye. Model bechne wali company kehti hai ki badi mez se aapka retrieval step bekaar ho jaata hai. Kya aapke documents ke liye yeh sach hai? Pata karne ke liye aap kya poochhenge?',
  'No, for two reasons. First, cost. Sending a million tokens costs a million tokens on every query. Second, the model gets worse at using what you sent long before the desk is full. It is worst for facts in the middle.':
    'Nahi, 2 wajah se. Pehli, cost. Ek million tokens bhejne ka matlab har query par ek million tokens ka paisa. Doosri, mez bharne se bahut pehle model bheje hue text ko kam achhe se use karne lagta hai. Beech ke facts par yeh sabse zyada hota hai.',
  'This question settles it: <em>show me your accuracy on a fact placed halfway through a full context window, and on the same fact found by retrieval and put in a short one.</em>':
    'Yeh sawaal baat saaf kar deta hai: <em>mujhe ek full context window ke beech mein rakhe fact par apni accuracy dikhaiye, aur usi fact par jab retrieval use dhoondh kar chhote context mein rakhe.</em>',
  'Let’s take the two reasons one by one. Then you will test the second one yourself.':
    'Chaliye dono wajah ek-ek karke dekhte hain. Phir doosri wajah ko aap khud test karenge.',
  'Reason 1: the cost does not go away':
    'Wajah 1: cost kahin nahi jaati',
  'The first reason is simple. A big request costs a lot. It costs that on every query, for every user. Think of paying per SMS: a longer message costs more. Retrieval keeps each request short, so the bill stays small.':
    'Pehli wajah seedhi hai. Badi request ki cost badi hoti hai. Har query par, har user ke liye. SMS jaisa sochiye: lamba message zyada paisa leta hai. Retrieval har request chhoti rakhta hai, isliye bill chhota rehta hai.',
  'Reason 2: the model does not use everything equally well':
    'Wajah 2: model har cheez ko barabar achhe se use nahi karta',
  'The second reason is harder to spot. Picture a student with a huge pile of notes. The first and last pages stay in mind. The middle pages blur. A model is like that. A fact near the start is usually found. The same fact in the middle can be missed more often. It gets worse as the request grows, or when the question needs several facts.':
    'Doosri wajah dikhna mushkil hai. Ek student ke paas notes ka bada dher hai. Pehle aur aakhri page yaad rehte hain. Beech ke page dhundhle ho jaate hain. Model bhi aisa hi hai. Shuru ke paas rakha fact aam taur par mil jaata hai. Wahi fact beech mein ho toh zyada baar chhoot sakta hai. Request badhne par, ya sawaal ko kai facts chahiye hone par, yeh aur bigadta hai.',
  'Here is the scary part: no error shows up. The model just gives an answer, and the answer is wrong. You can see this in the tool below.':
    'Daraavni baat yeh hai: koi error nahi dikhta. Model bas ek jawaab de deta hai, aur woh galat hota hai. Yeh aap neeche wale tool mein dekh sakte hain.',
  'Now test it on a real model. You will hide one fact inside a long text, at three different depths. Then you will see if the model finds it.':
    'Ab ise ek asli model par test kijiye. Aap ek lambe text mein ek fact chhupayenge, 3 alag depths par. Phir dekhenge ki model use dhoondhta hai ya nahi.',
  'Hide a fact at three depths':
    'Ek fact ko 3 depths par chhupaiye',
  'No long text of your own? Do not repeat the cards. Instead, paste the public text of the Digital Personal Data Protection Act, 2023 into <code>filler</code> (the padding text that makes the request long). If it is under eight thousand words, repeat it.':
    'Apna lamba text nahi hai? Cards mat dohraiye. Iske bajaye Digital Personal Data Protection Act, 2023 ka public text <code>filler</code> mein paste kijiye (woh bharti ka text jo request ko lamba banata hai). Agar woh aath hazaar shabdon se kam hai, toh use dohra lijiye.',
  'Guess before you run anything. How often will the model find the fact at each depth: start, middle and end? Write three percentages. Most people guess 100% for all three.':
    'Kuch chalane se pehle andaaza lagaiye. Model har depth par, yaani shuru, beech aur ant mein, fact kitni baar dhoondhega? 3 percentages likhiye. Zyadatar log teeno ke liye 100% sochte hain.',
  'A common result is 5/5 at 5%, 5/5 at 95%, and lower, often 2/5 or 3/5, at 50%. Your numbers are your finding. Got 5/5 everywhere? Add more filler text until you do not. The effect depends on length. Finding the length where your model breaks is the whole point.':
    'Aam result hota hai: 5% par 5/5, 95% par 5/5, aur 50% par kam, aksar 2/5 ya 3/5. Aapke numbers hi aapki finding hain. Har jagah 5/5 mila? Filler text tab tak badhaiye jab tak aisa na ho. Asar length par depend karta hai. Woh length dhoondhna jahan aapka model fail hota hai, yahi is kaam ka maqsad hai.',
  'Now make it harder. This cell hides two facts. One sits a quarter of the way in, and one three quarters of the way in. It asks one question that needs both.':
    'Ab ise mushkil banaiye. Yeh cell do facts chhupata hai. Ek chauthai raste par, ek teen chauthai raste par. Phir ek aisa sawaal poochta hai jisme dono chahiye.',
  'Compare this result with the single-fact test. Write down the difference. A question that needs two facts can fail even when each fact alone is found.':
    'Is result ko single-fact test se compare kijiye. Farq likh lijiye. Jis sawaal ko do facts chahiye, woh tab bhi fail ho sakta hai jab har fact akela mil jaata ho.',
  'This does not mean the model is bad. It means “it fits” and “it works” are two different claims. Only a test can check the second one.':
    'Iska matlab yeh nahi ki model kharaab hai. Iska matlab hai ki “yeh fit ho jaata hai” aur “yeh kaam karta hai” 2 alag daave hain. Doosre ko sirf test se check kar sakte hain.',
  'A document that fits on the desk is not a document the model will use. Companies usually quote the size of the desk. You must measure whether the model really uses what is on it.':
    'Jo document mez par fit ho jaye, model use use karega hi, yeh zaroori nahi. Companies aksar mez ki size batati hain. Aapko khud naapna hoga ki model mez par rakhe text ko asal mein use karta hai ya nahi.',
  'If sending everything does not work well, what should you do? The big decision is what goes into the request, and what stays out. It matters more than how you word the instructions. Think of packing a tiffin: you choose what goes in.':
    'Agar sab kuch bhejna achha nahi chalta, toh kya karein? Bada decision yeh hai ki request mein kya jaaye aur kya bahar rahe. Yeh instructions ke shabdon se zyada zaroori hai. Tiffin pack karne jaisa sochiye: aap chunte hain ki usme kya jaayega.',
  'This decision has a name: <strong>context engineering</strong>. It means choosing, with care, what goes on the model’s desk. Much of it is a product decision, so it is your job as much as the engineer’s.':
    'Is decision ka ek naam hai: <strong>context engineering</strong>. Matlab sambhal kar chunna ki model ki mez par kya rakhna hai. Iska bahut bada hissa product decision hai, isliye yeh engineer jitna hi aapka kaam hai.',
  'Let’s put the two ways side by side. Use the answer key you built earlier.':
    'Chaliye dono tareeke saath-saath rakhte hain. Woh answer key use kijiye jo aapne pehle banayi thi.',
  'Compare sending everything with retrieval':
    'Sab kuch bhejne ko retrieval se compare kijiye',
  'Take your Chapter 6 answer key. Answer all ten questions in two ways. (a) Put the whole document in the request. (b) Use your Chapter 7 <code>rag_answer</code> with k=3 (hand over the 3 best cards). For both, note accuracy, tokens and response time.':
    'Apna Chapter 6 ka answer key lijiye. Saare 10 sawaal 2 tareeke se hal kijiye. (a) Poora document request mein rakhiye. (b) Apna Chapter 7 ka <code>rag_answer</code> k=3 par chalaiye (3 sabse achhe cards dena). Dono ke liye accuracy, tokens aur response time likhiye.',
  'A typical result looks like this. On easy questions, accuracy is about the same. On questions that need several far-apart sections, the whole document does better. But it uses 10 to 50 times more tokens, and replies come much slower. Write the sentence your own numbers support.':
    'Aam result kuch aisa dikhta hai. Aasaan sawaalon par accuracy lagbhag barabar hoti hai. Jin sawaalon ko door-door ke kai sections chahiye, unpar poora document behtar chalta hai. Lekin woh 10 se 50 guna zyada tokens leta hai, aur reply bahut der se aate hain. Woh sentence likhiye jise aapke apne numbers sahi thehraate hain.',
  'Now think like the person who owns the budget, like the one who runs the household spending.':
    'Ab budget ke maalik ki tarah sochiye. Jaise ghar ka kharcha sambhalne wala sochta hai.',
  'Write a token budget. Your feature sends a system prompt (the standing rules on the shop wall), tool descriptions (what each tool does), retrieved chunks (the cards you found), the chat so far, and the answer. Guess the size of each and the total. Then say what you would cut first if the bill doubled, and what would break.':
    'Ek token budget likhiye. Aapka feature ek system prompt (deewar par lage niyam), tool descriptions (har tool kya karta hai), retrieved chunks (jo cards mile), ab tak ki chat, aur answer bhejta hai. Har ek ki size aur total ka andaaza lagaiye. Phir likhiye ki bill double ho jaye toh sabse pehle kya kaatenge, aur kya toot jaayega.',
  'instruction … functions … retrieved … history … answer … total … cut first: … which breaks …':
    'instruction … functions … retrieved … history … answer … total … sabse pehle kaatenge: … kya tootega …',
  'A strong answer treats the request like a household budget with one owner. Retrieved chunks are usually the biggest part, and the easiest to shrink. Fetch fewer, or add a step that re-sorts them so fewer chunks hold better content. But cutting them can break answers that need several sections. So measure again with your answer key. History comes next. Cutting it breaks follow-up questions. Removing tool descriptions removes abilities. Name what each cut puts at risk, then measure it.':
    'Ek achha jawaab request ko ghar ke budget ki tarah dekhta hai, jiska ek maalik hai. Retrieved chunks aksar sabse bada hissa hote hain, aur sabse aasaani se chhote hote hain. Kam laiye, ya ek aisa step jodiye jo unhe dobara sort kare, taaki kam chunks mein behtar content aaye. Lekin unhe kaatne se woh jawaab toot sakte hain jinhe kai sections chahiye. Isliye answer key se dobara naapiye. Phir history aati hai. Use kaatne se follow-up sawaal toot jaate hain. Tool descriptions hataane se kaam karne ki shakti ghat jaati hai. Likhiye ki har cut kya risk mein daalta hai, phir naapiye.',
  'Caching: put the text that never changes first':
    'Caching: jo text nahi badalta use pehle rakhiye',
  'Here is a way to pay less without cutting anything. A provider can cache the start of your request. That means it keeps the already-read start, like a bookmark. If that start is the same every time, later requests cost less and run faster.':
    'Kuch kaate bina kam paisa dene ka ek tareeka hai. Provider aapki request ka shuruaati hissa cache kar sakta hai. Matlab woh padha hua shuruaati hissa bookmark ki tarah sambhal leta hai. Agar woh hissa har baar ek jaisa ho, toh baad ki requests sasti aur tez hoti hain.',
  'So the order matters. Put the text that stays the same first, such as the system prompt and reference text. Put the parts that change last, such as the question. The tool below shows the difference.':
    'Isliye order matter karta hai. Jo text wahi rehta hai, use pehle rakhiye, jaise system prompt aur reference text. Jo hissa badalta hai, jaise sawaal, use ant mein rakhiye. Neeche wala tool farq dikhata hai.',
  'Change the order for caching':
    'Caching ke liye order badaliye',
  'Build the same request twice. First, put the unchanging text first and the question last. Second, put the question first. Send each one 5 times. Compare the response times, and look for any cache field (a line in the reply about reuse).':
    'Wahi request do baar banaiye. Pehli baar, na badalne wala text pehle aur sawaal ant mein. Doosri baar, sawaal pehle. Har ek ko 5 baar bhejiye. Response times compare kijiye, aur cache field dhoondhiye (reply mein reuse ke baare mein ek line).',
  'If the provider supports caching, the unchanging-first order is faster from the second call on. You may not see a cache field. Use this order anyway. It costs nothing, and every caching system gains from it.':
    'Agar provider caching support karta hai, toh na-badalne-wala-pehle order doosri call se tez hota hai. Ho sakta hai cache field na dikhe. Phir bhi yahi order use kijiye. Isme kuch kharch nahi, aur har caching system ko isse fayda hota hai.',
  'Compaction: a short summary of a long chat':
    'Compaction: lambi chat ka chhota summary',
  'One more problem remains. A long chat keeps growing. Sooner or later it goes over its budget. A common fix is <strong>compaction</strong>: you shrink the old part. You write a short summary of the middle of the chat, and keep the start and the end.':
    'Ek problem aur baaki hai. Lambi chat badhti rehti hai. Kabhi na kabhi woh apne budget se bahar chali jaati hai. Aam hal hai <strong>compaction</strong>: purana hissa chhota karna. Aap chat ke beech ka chhota summary likhte hain, aur shuru aur ant ko rakhte hain.',
  'It works, but it has a price. A summary usually loses the small details from the middle.':
    'Yeh kaam karta hai, lekin iski ek keemat hai. Summary beech ki chhoti details aksar kho deti hai.',
  'Test what compaction loses':
    'Dekhiye compaction kya kho deta hai',
  'Take a chat of 20 turns. Summarise turns 1–15 in 150 words. Keep turns 16–20 exactly as they are. Then ask three questions whose answers were in the summarised part.':
    '20 turns ki ek chat lijiye. Turns 1–15 ka 150 words mein summary banaiye. Turns 16–20 ko bilkul jaisa hai waisa rakhiye. Phir 3 aise sawaal poochhiye jinke jawaab summary kiye hue hisse mein the.',
  'Questions about the big themes survive compaction. Questions about exact figures, names or dates usually do not. Write down which of your three failed.':
    'Bade themes ke sawaal compaction ke baad bach jaate hain. Sahi figures, names ya dates ke sawaal aksar nahi bachte. Likhiye ki aapke 3 mein se kaunse fail hue.',
  'This also helps when someone says their assistant “remembers” a user. Ask where that memory is kept. It is a store the app looks after. It is sent with each message, and you pay for it every time.':
    'Yeh tab bhi kaam aata hai jab koi kehta hai ki unka assistant user ko “yaad rakhta hai”. Poochhiye ki woh yaad kahan rakhi hai. Woh ek store hai jise app sambhalta hai. Woh har message ke saath bheja jaata hai, aur har baar uska paisa lagta hai.',
  'A big desk does not remove the need for retrieval, for two reasons. Every token you send costs money. And the model uses the middle of a long request much worse than the start or the end.':
    'Badi mez se retrieval ki zaroorat khatam nahi hoti, 2 wajah se. Jo bhi token aap bhejte hain, uska paisa lagta hai. Aur model lambi request ke beech ko shuru ya ant se bahut kharaab use karta hai.',
  'So what goes into the request is a product decision. Set a token budget. Put the unchanging text first so it can be cached. Compact long chats with care.':
    'Isliye request mein kya jaaye, yeh product decision hai. Token budget set kijiye. Na badalne wala text pehle rakhiye taaki cache ho sake. Lambi chats ko dhyaan se compact kijiye.',
  'Next you will meet reasoning models. They think on rough paper before they answer. You will see when paying for that thinking is worth it.':
    'Aage aap reasoning models se milenge. Woh jawaab dene se pehle kachche kaagaz par sochte hain. Aap dekhenge ki us sochne ka paisa dena kab sahi hai.',
});
