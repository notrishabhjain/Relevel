/* Hinglish: part1, plain-language rewrite (v5). Keyed on the exact English line.
   Written to be read aloud: spoken Hinglish, English for every word people say in English at work. */
Object.assign(window.HING = window.HING || {}, {

  /* ---- ch05: Try it in the browser: tokens, cost and temperature ---- */
  'Try it in the browser: tokens, cost and temperature':
    'Browser mein try kijiye: tokens, cost aur temperature',
  'Before you install anything, you’ll run three small experiments right here in your browser, on your own text. You’ll see how a model cuts text into tokens, why a long chat costs more than a short one, and what the temperature setting really changes.':
    'Kuch bhi install karne se pehle, aap yahin browser mein, apne hi text par teen chhote experiments karenge. Aap dekhenge ki model text ko tokens mein kaise todta hai, lambi chat chhoti chat se mehngi kyun padti hai, aur temperature setting asal mein kya badalti hai.',
  'See how your own writing is split into tokens, and roughly what a model would charge for it.':
    'Dekh paana ki aapka apna text tokens mein kaise split hota hai, aur model uske lagbhag kitne paise lega.',
  'Explain why the twentieth message in a chat costs more than the first.':
    'Samjha paana ki chat ka beesvaan message pehle message se zyada mehnga kyun padta hai.',
  'Say what the temperature setting changes, and what it doesn’t.':
    'Bata paana ki temperature setting kya badalti hai, aur kya nahi badalti.',
  'Before you start':
    'Shuru karne se pehle',
  'You need nothing for this chapter: no account, no API key, no download. Everything runs inside this page. Just keep a piece of your own writing handy, like an email you sent or a paragraph from a policy.':
    'Is chapter ke liye aapko kuch nahi chahiye. Na account, na API key, na koi download. Sab kuch isi page ke andar chalta hai. Bas apna likha hua kuch text paas rakhiye, jaise aapka bheja hua koi email ya kisi policy ka ek paragraph.',
  'Most courses begin with setup. Install this, create that account, copy this key. Only after all of that do you get to learn anything.':
    'Zyadatar courses setup se shuru hote hain. Yeh install kijiye, woh account banaiye, yeh key copy kijiye. Yeh sab hone ke baad hi kuch seekhne ko milta hai.',
  'We’ll do it the other way round. First you’ll run three small experiments, right here on this page. Then, when you do set things up, you’ll already know what each piece is for.':
    'Hum ulta karenge. Pehle aap teen chhote experiments karenge, yahin isi page par. Phir jab aap setup karenge, toh aapko pehle se pata hoga ki har cheez kis kaam ki hai.',
  'Each experiment shows you one idea. The rest of the course is built on these three ideas, so take your time with them.':
    'Har experiment aapko ek idea dikhata hai. Poora course inhi teen ideas par bana hai, isliye inhe aaram se kijiye.',
  'Experiment 1: Models read tokens, not words':
    'Experiment 1: Model words nahi, tokens padhta hai',
  'When you read a sentence, you see words. A model doesn’t. Before your text reaches the model, it is cut into small pieces called <strong>tokens</strong>.':
    'Jab aap ek sentence padhte hain, toh aapko words dikhte hain. Model ko nahi. Aapka text model tak pahunchne se pehle chhote-chhote tukdon mein kat jaata hai. In tukdon ko <strong>tokens</strong> kehte hain.',
  'A token is often a whole word, like <em>loan</em> or <em>the</em>. Sometimes it’s only part of a word. A long or unusual word can be split into two or three pieces.':
    'Ek token aksar poora word hota hai, jaise <em>loan</em> ya <em>the</em>. Kabhi-kabhi woh word ka sirf ek hissa hota hai. Koi lamba ya unusual word do-teen tukdon mein bhi split ho sakta hai.',
  'Why should you care? Because tokens are how a model measures text. It counts your text in tokens, and the company that runs it charges you for every token.':
    'Aapko isse kya farq padta hai? Farq yeh hai ki model text ko tokens mein hi naapta hai. Woh aapka text tokens mein ginta hai, aur jo company use chalati hai, woh aapse har token ka paisa leti hai.',
  'Split your own text into tokens':
    'Apne text ko tokens mein split kijiye',
  'Paste some of your own text below. An email or a paragraph from a policy works well, as long as it’s a few lines long. Then watch where the splits happen.':
    'Neeche apna kuch text paste kijiye. Koi email ya policy ka paragraph theek rahega, bas woh kuch lines lamba ho. Phir dekhiye ki text kahan-kahan split hota hai.',
  'Common words usually stay whole. Longer or unusual words get split, sometimes in odd places. Names, technical terms and text in Indian languages often take more tokens than you’d expect.':
    'Aam words aksar poore rehte hain. Lambe ya unusual words split ho jaate hain, kabhi-kabhi ajeeb jagah se. Naam, technical terms aur Indian languages ka text aksar aapki ummeed se zyada tokens leta hai.',
  'Note down the token count. You’ll use it in a moment.':
    'Token count note kar lijiye. Thodi der mein iska kaam padega.',
  'Fewer, about the same, or more?':
    'Kam, lagbhag utne hi, ya zyada?',
  'Make a guess first. Say you wrote the same text in an Indian language instead of English. Would it split into fewer tokens, about the same number, or more?':
    'Pehle ek andaaza lagaiye. Maan lijiye aapne wahi text English ki jagah kisi Indian language mein likha. Kya woh kam tokens mein split hoga, lagbhag utne hi mein, ya zyada mein?',
  'There’s no fixed rule here. Token counts depend on the tokenizer, the language, the exact text and the model. So don’t trust a rule of thumb. Measure it: write the same meaning in English and in the Indian language you use, and note both counts.':
    'Iska koi fixed rule nahi hai. Token count tokenizer, language, exact text aur model, in sab par depend karta hai. Isliye kisi rule of thumb par bharosa mat kijiye. Khud naapiye: ek hi baat English mein aur apni Indian language mein likhiye, aur dono ka count note kijiye.',
  'This difference can change what a feature costs. But your result only tells you what this one tokenizer did with your text. Before you estimate the cost of a feature that works in many languages, repeat the test with the model you actually plan to use.':
    'Yeh farq kisi feature ki cost badal sakta hai. Lekin aapka result sirf itna batata hai ki is ek tokenizer ne aapke text ke saath kya kiya. Kai languages mein chalne wale feature ki cost ka andaaza lagane se pehle, yahi test us model ke saath dobara kijiye jo aap asal mein use karne wale hain.',
  'Experiment 2: The model only sees what you send':
    'Experiment 2: Model sirf wahi dekhta hai jo aap bhejte hain',
  'Here’s something that surprises most people. A model has no memory between calls. Every time you send it a message, it starts from zero.':
    'Ek baat jo zyadatar logon ko hairaan karti hai: model ke paas do calls ke beech koi memory nahi hoti. Aap jab bhi use message bhejte hain, woh zero se shuru karta hai.',
  'So how does a chat app seem to remember what you said earlier? The app does the remembering, not the model. It can send the earlier messages again, send a short summary of them, or look up saved facts and send those.':
    'Toh phir chat app ko pichhli baatein yaad kaise rehti hain? Yaad rakhne ka kaam app karta hai, model nahi. App pichhle messages dobara bhej sakta hai, unka chhota sa summary bhej sakta hai, ya save kiye hue facts dhoondh kar woh bhej sakta hai.',
  'In this experiment you’ll watch the most common way: sending the whole conversation again with every new message.':
    'Is experiment mein aap sabse common tareeka dekhenge: har naye message ke saath poori conversation dobara bhejna.',
  'Watch the cost grow each turn':
    'Har turn ke saath cost badhte dekhiye',
  'Step through the conversation below. Don’t focus on the messages themselves. Keep your eye on the token count.':
    'Neeche wali conversation ko step by step aage badhaiye. Messages par dhyaan mat dijiye. Nazar token count par rakhiye.',
  'Each turn costs a little more than the one before, because every earlier message is sent again. Some apps send a summary or a few saved facts instead. So when you look at a real app, measure what it actually sends. Don’t assume.':
    'Har turn pichhle turn se thoda zyada mehnga padta hai, kyunki har pichhla message dobara bheja jaata hai. Kuch apps iski jagah summary ya kuch saved facts bhejte hain. Isliye jab aap kisi asli app ko dekhein, toh naapiye ki woh asal mein kya bhejta hai. Andaaze par mat chaliye.',
  'Experiment 3: What temperature changes':
    'Experiment 3: Temperature kya badalta hai',
  'Sooner or later, someone will tell you they can make a model more accurate by changing one setting. Usually they mean <strong>temperature</strong>.':
    'Aaj nahi toh kal, koi aapse kahega ki ek setting badal kar woh model ko zyada accurate bana sakte hain. Aksar unka matlab <strong>temperature</strong> se hota hai.',
  'Temperature controls how much the model varies its choice of words. At a low temperature it mostly picks the most likely words. At a high temperature it picks less likely words more often, so its answers vary more.':
    'Temperature yeh control karta hai ki model words chunne mein kitna badlaav karta hai. Kam temperature par woh zyadatar sabse likely words chunta hai. Zyada temperature par woh kam likely words bhi zyada baar chunta hai, isliye uske jawaab zyada badalte hain.',
  'Change the temperature':
    'Temperature badal kar dekhiye',
  'Move the slider up and down, and compare the answers you get.':
    'Slider ko upar-neeche kijiye, aur jo jawaab aate hain unhe compare kijiye.',
  'At a lower temperature, the answers usually come out more alike each time. At a higher temperature, they vary more. But neither setting makes an answer more <em>true</em>, and a low temperature does not guarantee identical output. So run the same prompt a few times and note what your model actually does.':
    'Kam temperature par jawaab har baar aksar zyada milte-julte aate hain. Zyada temperature par woh zyada badalte hain. Lekin koi bhi setting jawaab ko zyada <em>sach</em> nahi banati, aur kam temperature bhi bilkul ek jaisa output dene ki guarantee nahi deta. Isliye ek hi prompt kuch baar chalaiye aur note kijiye ki aapka model asal mein kya karta hai.',
  'What you have learned':
    'Aapne kya seekha',
  'You’ve just run three experiments without installing anything. And you have at least one real finding about your own text.':
    'Aapne abhi bina kuch install kiye teen experiments kar liye. Aur aapke paas apne text ke baare mein kam se kam ek asli finding hai.',
  'The whole course works like this. You try something first, and then you learn the name for what you saw.':
    'Poora course aise hi chalta hai. Pehle aap kuch try karte hain, phir jo dekha uska naam seekhte hain.',
  'Tip':
    'Tip',
  'If a chapter feels too fast, slow down and run the examples again. The <a href="#/later">Not yet</a> page lists the topics you can safely ignore for now.':
    'Agar koi chapter bahut tez lage, toh ruk kar examples dobara chalaiye. <a href="#/later">Not yet</a> page par woh topics hain jinhe aap abhi bina chinta ke chhod sakte hain.',
  'To send your own questions to a real model, you need two free things: a place to run code, and an API key. Setting them up takes about forty-five minutes, and you only do it once: <a href="#/setup">Set up Colab and your API key</a>.':
    'Kisi asli model ko apne sawaal bhejne ke liye aapko do free cheezein chahiye: code chalane ki ek jagah, aur ek API key. Inhe set up karne mein lagbhag 45 minute lagte hain, aur yeh sirf ek baar karna hota hai: <a href="#/setup">Colab aur apni API key set up kijiye</a>.',
  'Or you can keep reading first. Chapter 1 is easier with the notebook open, but you can follow it without one.':
    'Ya aap pehle aage padhte reh sakte hain. Chapter 1 notebook khol kar padhna aasaan hai, lekin uske bina bhi samajh aa jaayega.',
  'Compare what English, Hindi and Hinglish cost':
    'English, Hindi aur Hinglish ki cost compare kijiye',
  'This is your first real step on the project, and it still needs no account, no key and no install. In this chapter you used three tools on this page: one that cuts text into tokens, one that shows a chat getting more expensive, and a temperature slider. Models charge by the token. So the first question for Bharat Privacy Guard is a simple one: does the same message cost more in Hindi and Hinglish than in English?':
    'Project par yeh aapka pehla asli kadam hai, aur ismein abhi bhi na account chahiye, na key, na koi install. Is chapter mein aapne is page ke teen tools use kiye: ek jo text ko tokens mein todta hai, ek jo dikhata hai ki chat kaise mehngi hoti jaati hai, aur ek temperature slider. Models har token ka paisa lete hain. Isliye Bharat Privacy Guard ke liye pehla sawaal seedha sa hai: kya wahi message Hindi aur Hinglish mein English se zyada mehnga padta hai?',
  'Just the tools on this page. No notebook, no account. Write your numbers in the notes box below.':
    'Bas is page ke tools. Na notebook, na account. Apne numbers neeche wale notes box mein likhiye.',
  'Open the starter sentences on the project page and pick sentences 1, 2 and 3. They’re the same kind of message, written in English, Hindi and Hinglish.':
    'Project page par starter sentences kholiye aur sentence 1, 2 aur 3 chuniye. Teeno ek hi tarah ke message hain, jo English, Hindi aur Hinglish mein likhe gaye hain.',
  'Paste each one into the token tool on this page and note its token count. Make a small table with three rows (English, Hindi, Hinglish) and two columns (characters, tokens).':
    'Har ek ko is page ke token tool mein paste kijiye aur uska token count note kijiye. Ek chhoti table banaiye: teen rows (English, Hindi, Hinglish) aur do columns (characters, tokens).',
  'For each one, work out how many tokens it uses for every 100 characters. Which one costs the most for the same message?':
    'Har ek ke liye nikaaliye ki woh har 100 characters par kitne tokens leta hai. Ek hi message ke liye kaunsa sabse mehnga padta hai?',
  'Now say your tool checks every message in a customer-support chat before it goes to an AI model. Use the conversation tool on this page to estimate the tokens at the fifth message. Remember, each turn sends all the earlier messages again.':
    'Ab maan lijiye aapka tool customer-support chat ke har message ko AI model tak jaane se pehle check karta hai. Is page ke conversation tool se paanchve message par tokens ka andaaza lagaiye. Yaad rakhiye, har turn saare pichhle messages dobara bhejta hai.',
  'Look up one AI provider’s price per million tokens. Work out what it costs to check one message, and then a thousand messages, in each of the three kinds of writing.':
    'Kisi ek AI provider ka per million tokens ka price dekhiye. Nikaaliye ki teeno tarah ki writing mein ek message check karne ka kitna kharcha aata hai, aur phir hazaar messages ka.',
  'Write two sentences. First, what would checking a thousand messages cost in the most expensive kind of writing? Second, what is that number most likely to get wrong?':
    'Do sentences likhiye. Pehla: sabse mehngi writing mein hazaar messages check karne ka kharcha kitna aayega? Doosra: yeh number sabse zyada kis baat mein galat ho sakta hai?',
  'A table of characters and tokens for English, Hindi and Hinglish.':
    'English, Hindi aur Hinglish ke characters aur tokens ki ek table.',
  'The cost of checking one message and a thousand messages, for each kind of writing.':
    'Har tarah ki writing ke liye ek message aur hazaar messages check karne ki cost.',
  'Two sentences: the cost, and the thing most likely to make your estimate wrong.':
    'Do sentences: cost, aur woh cheez jo aapke andaaze ko sabse zyada galat bana sakti hai.',
  'All of it done without creating a single account.':
    'Yeh sab bina ek bhi account banaye.',

  /* ---- ch1: Your first API call: how a model answers ---- */
  'Your first API call: how a model answers':
    'Aapki pehli API call: model jawaab kaise deta hai',
  'You send a model a message, and it sends text back. In this chapter you’ll make your first API call, read what it cost, and see why a confident answer can still be wrong.':
    'Aap model ko ek message bhejte hain, aur woh text wapas bhejta hai. Is chapter mein aap apni pehli API call karenge, dekhenge ki usmein kitna kharch hua, aur samjhenge ki ek confident jawaab bhi galat kyun ho sakta hai.',
  'Open a notebook and make one model API call before you read anything else. Make a guess first: is the model finding an answer somewhere, or writing one?':
    'Ek notebook kholiye aur kuch aur padhne se pehle model ko ek API call kijiye. Pehle andaaza lagaiye: model kahin se jawaab dhoondh raha hai, ya khud likh raha hai?',
  'Run a short question, then a long piece of text. From each run, save the full response and the usage block.':
    'Pehle ek chhota sawaal run kijiye, phir ek lamba text. Har run se poora response aur usage block save kar lijiye.',
  'Ask for something the model cannot possibly know, and see what comes back anyway.':
    'Model se aisi cheez poochhiye jo woh jaan hi nahi sakta, aur dekhiye ki phir bhi kya aata hai.',
  'A one-page picture of a request, from start to finish: input, model, output, tokens, cost.':
    'Ek request ki ek page ki tasveer, shuru se aakhir tak: input, model, output, tokens, cost.',
  'Explain what happens during a request without once saying “the AI just knows”.':
    'Request ke dauraan kya hota hai, yeh samjhaiye, aur ek baar bhi yeh mat kahiye ki “AI ko sab pata hai”.',
  'Colab open and your key working':
    'Colab khula ho aur aapki key kaam kar rahi ho',
  'The five minutes of setup, done once. Chapter 1 is the first chapter that uses it.':
    'Setup ke woh paanch minute, jo sirf ek baar karne hote hain. Chapter 1 pehla chapter hai jo isse kaam leta hai.',
  'Explain why a model can sound certain and still be wrong.':
    'Samjha paana ki model poore bharose se bolkar bhi galat kyun ho sakta hai.',
  'Read the usage block on a response and say what you are billed for.':
    'Response ka usage block padh paana aur bata paana ki aapse kis cheez ka paisa liya jaata hai.',
  'Estimate the cost of a request from its token counts.':
    'Token counts dekhkar ek request ki cost ka andaaza laga paana.',
  'Open a new Colab notebook and name it <code>chapter-1</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client), so they sit above everything you write today. After each idea in this chapter, you’ll find a little code that shows it. Run each block before you read on.':
    'Ek naya Colab notebook kholiye aur uska naam <code>chapter-1</code> rakhiye. <a href="#/setup">Setup</a> ke teeno warm-up cells chalaiye (key, install aur client), taaki woh aaj ke saare code ke upar rahein. Is chapter mein har idea ke baad thoda code aayega jo use dikhata hai. Aage padhne se pehle har block ko run kijiye.',
  'In the last chapter you tried tokens, cost and temperature right here in the browser. Now you’ll do the same kind of thing with a real model. You’ll send it a message, look at what it sends back, and see what that exchange costs.':
    'Pichhle chapter mein aapne tokens, cost aur temperature browser mein hi try kiye the. Ab aap wahi kaam ek asli model ke saath karenge. Aap use ek message bhejenge, dekhenge ki woh kya wapas bhejta hai, aur yeh ki is lena-dena mein kitna kharch hota hai.',
  'Along the way you’ll learn one thing that matters for every AI product you’ll ever work on: a model can sound completely sure and still be wrong.':
    'Saath hi aap ek aisi baat seekhenge jo har AI product ke liye zaroori hai: model poori tarah sure sunayi de sakta hai aur phir bhi galat ho sakta hai.',
  'A model predicts the next piece of text':
    'Model agla text predict karta hai',
  'Start with something you already use every day. When you type <em>See you at the</em> on your phone, the keyboard suggests <em>office</em>, <em>station</em> or <em>airport</em>. It makes those suggestions from what people usually type next.':
    'Ek aisi cheez se shuru karte hain jo aap roz istemaal karte hain. Jab aap phone par <em>See you at the</em> type karte hain, toh keyboard <em>office</em>, <em>station</em> ya <em>airport</em> suggest karta hai. Woh yeh suggestions is hisaab se deta hai ki log aksar uske baad kya type karte hain.',
  'A language model does the same thing, only at a much larger scale. It was trained on a huge amount of writing. It builds a reply by predicting one small piece of text at a time. It does not look anything up.':
    'Ek language model bhi yahi karta hai, bas bahut bade scale par. Use likhe hue text ki bahut saare text par train kiya gaya hai. Woh reply ko ek-ek chhote text ke tukde ko predict karke banata hai. Woh kuch bhi look up nahi karta.',
  'A model generates its answer from patterns. It does not look the answer up, so a fluent answer is not necessarily a correct one.':
    'Model apna jawaab patterns se banata hai. Woh jawaab ko kahin se look up nahi karta, isliye ek fluent jawaab zaroori nahi ki sahi bhi ho.',
  'Let’s see that for ourselves. You’ll ask a simple question, and then think about where the answer came from.':
    'Chaliye ise khud dekhte hain. Aap ek simple sawaal poochhenge, aur phir sochenge ki jawaab aaya kahan se.',
  'Make your first call':
    'Apni pehli call kijiye',
  'You get a fluent two-sentence answer. Notice that you didn’t give the model anything to search. It wrote the answer from patterns it learned in training.':
    'Aapko do sentence ka ek fluent jawaab milta hai. Dhyaan dijiye ki aapne model ko search karne ke liye kuch diya hi nahi. Usne jawaab un patterns se likha jo usne training mein seekhe the.',
  'A red box saying something <em>is not defined</em>':
    'Ek red box jisme likha ho ki kuch <em>is not defined</em>',
  'You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.':
    'Aapne aisa cell chalaya jise kisi pichhle cell ki cheez chahiye, lekin woh pichhla cell abhi chala hi nahi. Upar scroll kijiye, warm-up cells ko order mein chalaiye, phir yahan wapas aaiye. Notebook mein sabse common dikkat yahi hai. Yeh sabke saath hota hai, aur iska matlab yeh nahi ki aapka code galat hai.',
  'An authentication error, or the number 401':
    'Authentication error, ya 401 number',
  'Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.':
    'Aapki key code tak nahi pahunchi. Key load karne wala cell dobara chalaiye, aur check kijiye ki jis naam se aapne key save ki thi, woh <a href="#/setup">Setup</a> se bilkul match kare. Capital letters ka bhi farq padta hai.',
  'A message about a module not being found':
    'Module not found jaisa koi message',
  'The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.':
    'Is session mein install wala cell nahi chala. Notebook disconnect hote hi apne installs bhool jaata hai, aur kuch der akela chhodne par woh disconnect ho jaata hai. Install wala cell dobara chalaiye aur aage badhiye.',
  'It runs, but your numbers are not the ones printed above':
    'Code chal gaya, lekin aapke numbers upar wale numbers se alag hain',
  'That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.':
    'Aisa hona normal hai, yeh galti nahi hai. Models badalte rehte hain, aur aapka text hamare text jaisa nahi hai. Zaroori yeh hai ki numbers kis direction mein jaate hain aur farq lagbhag kitna hai, exact number match karna nahi. Agar aapke numbers bhi usi direction mein jaate hain, toh experiment kaam kar gaya.',
  'Now a question. What do you think happens when the model has nothing to base its answer on? Make a guess before you read on.':
    'Ab ek sawaal. Aapko kya lagta hai, jab model ke paas jawaab banane ke liye kuch hai hi nahi, toh kya hoga? Aage padhne se pehle ek andaaza lagaiye.',
  'One line: what do you think it does?':
    'Ek line mein: aapko kya lagta hai woh kya karega?',
  'Predict: you ask the model about the refund policy of a company that does not exist. It has never seen anything about it. What comes back?':
    'Andaaza lagaiye: aap model se ek aisi company ki refund policy ke baare mein poochhte hain jo exist hi nahi karti. Usne uske baare mein kuch kabhi dekha hi nahi. Phir kya wapas aata hai?',
  'Usually a confident, well-written, invented policy. The model predicts likely text, and “I have no information about this” is often not the most likely continuation. Saying <em>I don’t know</em> is a behaviour that has to be added and tested, and it does not always hold.':
    'Aksar ek confident, achhi likhi hui, banayi hui policy. Model likely text predict karta hai, aur “mere paas is baare mein koi information nahi hai” aksar sabse likely agla hissa nahi hota. <em>Mujhe nahi pata</em> kehna ek behaviour hai jo alag se add karna aur test karna padta hai, aur woh hamesha kaam nahi karta.',
  'So you cannot judge an answer by how confident it sounds. A correct answer and an invented one read the same way. In Chapter 2 you will make a model invent an answer on purpose.':
    'Isliye aap kisi jawaab ko is se nahi parakh sakte ki woh kitna confident lagta hai. Sahi jawaab aur banaya hua jawaab padhne mein ek jaise lagte hain. Chapter 2 mein aap ek model se jaanbujhkar ek jawaab banwayenge.',
  'What you send, and what you pay for':
    'Aap kya bhejte hain, aur kis cheez ka paisa dete hain',
  'You’ve seen what comes back. Now let’s look at what goes out. Your request is sent as <strong>JSON</strong>, which is just labels and values written inside curly braces.':
    'Aapne dekh liya ki wapas kya aata hai. Ab dekhte hain ki bahar kya jaata hai. Aapki request <strong>JSON</strong> mein bheji jaati hai, jo bas curly braces ke andar likhe labels aur values hote hain.',
  'The request carries a list called <code>messages</code>. Each message has a role: <code>user</code> for you, and <code>assistant</code> for the model’s reply. And here’s the part that touches your budget: you pay for the text you send, and you pay for the text you get back.':
    'Request mein <code>messages</code> naam ki ek list hoti hai. Har message ka ek role hota hai: aapke liye <code>user</code>, aur model ke reply ke liye <code>assistant</code>. Aur budget se judi baat yeh hai: aap jo text bhejte hain uska bhi paisa dete hain, aur jo text wapas aata hai uska bhi.',
  'Read the usage block':
    'Usage block padhiye',
  'Every response comes with a block called <code>usage</code>. It tells you how much text went in and out. Add these lines to the same cell:':
    'Har response ke saath <code>usage</code> naam ka ek block aata hai. Woh batata hai ki kitna text andar gaya aur kitna bahar aaya. Isi cell mein yeh lines jodiye:',
  'You’ll see two numbers, such as <code>tokens read: 18</code> and <code>tokens written: 55</code>. These are the counts you’re billed for, and every response includes them.':
    'Aapko do numbers dikhenge, jaise <code>tokens read: 18</code> aur <code>tokens written: 55</code>. Yahi woh counts hain jinke hisaab se aapse paisa liya jaata hai, aur har response mein yeh aate hain.',
  'Tokens: the unit you are billed in':
    'Tokens: woh unit jisme aapse paisa liya jaata hai',
  'You may have noticed that those counts are not in words. They are in <strong>tokens</strong>. A token is a small piece of text, about three-quarters of an English word on average.':
    'Shayad aapne dekha hoga ki yeh counts words mein nahi hain. Yeh <strong>tokens</strong> mein hain. Ek token text ka ek chhota tukda hota hai, ausat mein English word ka lagbhag teen-chauthai hissa.',
  'Common words are usually one token. Rare words, and text in other scripts, get split into several. You can see this for yourself with the tool below. It needs no setup.':
    'Aam words aksar ek token hote hain. Rare words, aur doosri scripts ka text, kayi tokens mein split ho jaata hai. Neeche wale tool se aap yeh khud dekh sakte hain. Isme koi setup nahi chahiye.',
  'Now let’s watch the token count change in your own notebook. First you’ll send more text, and then you’ll ask for more text back.':
    'Ab apne notebook mein token count ko badalte dekhte hain. Pehle aap zyada text bhejenge, aur phir zyada text wapas maangenge.',
  'Watch the token count change':
    'Token count badalte hue dekhiye',
  'Paste a long paragraph from one of your own documents and ask for a summary:':
    'Apne kisi document ka ek lamba paragraph paste kijiye aur uska summary maangiye:',
  '<code>prompt_tokens</code> rises into the hundreds, because you sent more text. Now try the opposite: ask a short question, but request a long answer, such as “explain in 400 words”. This time <code>completion_tokens</code> rises instead.':
    '<code>prompt_tokens</code> sainkdon mein pahunch jaata hai, kyunki aapne zyada text bheja. Ab ulta try kijiye: ek chhota sawaal poochhiye, lekin lamba jawaab maangiye, jaise “explain in 400 words”. Is baar <code>completion_tokens</code> badhta hai.',
  'What this means for your product':
    'Yeh aapke product ke liye kya matlab rakhta hai',
  'Let’s put the two ideas of this chapter side by side. The first is about trust. The second is about money.':
    'Chaliye is chapter ke dono ideas ek saath rakhte hain. Pehla bharose ke baare mein hai. Doosra paise ke baare mein.',
  'A model generates text, so a confident tone is not evidence that it is right. And you pay per token, so every line of instruction you add is charged again on every call.':
    'Model text generate karta hai, isliye confident tone is baat ka saboot nahi ki jawaab sahi hai. Aur aap har token ka paisa dete hain, isliye instruction ki jo bhi nayi line aap jodte hain, woh har call mein dobara charge hoti hai.',
  'So far you know that a model writes its answers from patterns, and that you pay for every token that goes in and comes out. Next, you’ll meet a third fact: the model does not remember anything between calls. That explains why a long chat costs more than a short one, and how chat “memory” features work.':
    'Ab tak aap jaan gaye hain ki model apne jawaab patterns se likhta hai, aur jo token andar jaata hai ya bahar aata hai, har ek ka paisa lagta hai. Agle chapter mein aap teesra fact dekhenge: model calls ke beech kuch yaad nahi rakhta. Isi se samajh aata hai ki lambi chat chhoti chat se mehngi kyun padti hai, aur chat ke “memory” features kaise kaam karte hain.',
  'Make your first call and measure what it costs':
    'Apni pehli call kijiye aur dekhiye ki usmein kitna kharch hota hai',
  'Now you move from the browser tools to a real model. In this chapter you learned to read the usage block that comes back with every answer, and to see exactly what you’re billed for. Here you ask a real model to find the personal details in some of the starter sentences, check its answers yourself, and measure the cost.':
    'Ab aap browser tools se nikalkar ek asli model par aate hain. Is chapter mein aapne har jawaab ke saath aane wala usage block padhna seekha, aur yeh bhi ki aapse theek-theek kis cheez ka paisa liya jaata hai. Yahan aap ek asli model se kuch starter sentences mein personal details dhoondhne ko kahenge, uske jawaab khud check karenge, aur cost naapenge.',
  'Your <code>chapter-1</code> notebook. The numbers you print are what counts. The notes box below is for a short reflection, not a long write-up.':
    'Aapka <code>chapter-1</code> notebook. Jo numbers aap print karte hain, wahi asli cheez hain. Neeche ka notes box ek chhote reflection ke liye hai, lamba likhne ke liye nahi.',
  'In your <code>chapter-1</code> notebook, send starter sentence 7 (the one with Amit Sharma, the PAN and the HDFC account) to the model with the instruction: “List every piece of personal information in this message.”':
    'Apne <code>chapter-1</code> notebook mein starter sentence 7 (jisme Amit Sharma, PAN aur HDFC account hai) model ko yeh instruction dekar bhejiye: “List every piece of personal information in this message.”',
  'Print the whole answer and the usage block. Write down the prompt_tokens and the completion_tokens.':
    'Poora jawaab aur usage block print kijiye. prompt_tokens aur completion_tokens likh lijiye.',
  'Check the answer by hand. List what the model found correctly, what it missed, and anything it listed that is not personal. Don’t trust it just because it sounds sure.':
    'Jawaab ko haath se check kijiye. Likhiye ki model ne kya sahi dhoondha, kya chhoda, aur kya aisa list kar diya jo personal hai hi nahi. Sirf isliye bharosa mat kijiye ki woh sure lagta hai.',
  'Repeat with starter sentences 4 and 9, so that you have three runs in total. Starter sentence 9 contains nothing personal, so a good answer says so. Average the token counts of the three runs.':
    'Starter sentences 4 aur 9 ke saath dobara kijiye, taaki kul teen runs ho jaayein. Starter sentence 9 mein kuch personal nahi hai, isliye ek achha jawaab yahi bataega. Teeno runs ke token counts ka average nikaliye.',
  'Look up your provider’s price per million tokens and work out the cost of one check.':
    'Apne provider ki price per million tokens dekhiye aur ek check ki cost nikaliye.',
  'Add a paragraph of extra instructions to the prompt, for example “Answer as a table with the columns Item and Type”, and run starter sentence 7 again. Note how much that paragraph adds to the cost of every call, and what it would add to a thousand calls.':
    'Prompt mein extra instructions ka ek paragraph jodiye, jaise “Answer as a table with the columns Item and Type”, aur starter sentence 7 dobara run kijiye. Note kijiye ki woh paragraph har call ki cost mein kitna jodta hai, aur ek hazaar calls mein kitna jodega.',
  'Three runs on real starter sentences, with the token counts printed and averaged.':
    'Asli starter sentences par teen runs, token counts print kiye hue aur average nikale hue.',
  'Your hand-check of each answer: what it found, what it missed and what it listed wrongly.':
    'Har jawaab ki aapki hand-check: model ne kya dhoondha, kya chhoda, aur kya galat list kiya.',
  'The cost of one check, calculated from your own numbers.':
    'Ek check ki cost, aapke apne numbers se nikali hui.',
  'The extra cost of one added paragraph at a thousand calls.':
    'Ek hazaar calls par ek jodi gayi paragraph ki extra cost.',

  /* ---- ch15b: Context windows and statelessness: why models forget ---- */
  'Context windows and statelessness: why models forget':
    'Context windows aur statelessness: models bhool kyun jaate hain',
  'Every call has a size limit, and the model forgets everything between calls. You’ll prove both in code, build a simple chat memory yourself, and measure what it costs.':
    'Har call ki ek size limit hoti hai, aur model calls ke beech sab kuch bhool jaata hai. Aap dono baatein code mein saabit karenge, khud ek simple chat memory banayenge, aur dekhenge ki usmein kitna kharch hota hai.',
  'Guess how the input token count changes when a conversation’s history is sent again on every turn.':
    'Andaaza lagaiye ki jab har turn par conversation ki history dobara bheji jaati hai, toh input token count kaise badalta hai.',
  'Make two separate calls, then a third that sends the history again, and compare the token counts of all three.':
    'Do alag-alag calls kijiye, phir teesri call jisme history dobara bheji ho, aur teeno ke token counts compare kijiye.',
  'Test whether anything survives between calls on the model’s side. It doesn’t, and you’ll catch it in the act.':
    'Check kijiye ki model ki taraf se calls ke beech kuch bachta hai ya nahi. Nahi bachta, aur aap use pakdenge.',
  'The same picture of a request as before, now with the context window and statelessness added.':
    'Request ki wahi tasveer jo pehle thi, ab context window aur statelessness ke saath.',
  'Explain why a fifty-message chat costs more per message than a two-message one.':
    'Samjhaiye ki pachaas message ki chat, do message ki chat se har message par zyada mehngi kyun padti hai.',
  'Models generate text, they do not look it up':
    'Models text generate karte hain, look up nahi karte',
  'So a confident tone is not evidence that the answer is right.':
    'Isliye confident tone is baat ka saboot nahi ki jawaab sahi hai.',
  'You pay per token':
    'Aap har token ka paisa dete hain',
  'And you have read the usage block yourself.':
    'Aur usage block aap khud padh chuke hain.',
  'A notebook and a key':
    'Ek notebook aur ek key',
  'You’ll run a growing conversation and watch the cost.':
    'Aap ek badhti hui conversation chalayenge aur cost dekhenge.',
  'Explain what a context window is, and what it does not protect you from.':
    'Samjha paana ki context window kya hai, aur woh aapko kis cheez se nahi bachati.',
  'Explain how any chat “memory” feature actually works.':
    'Samjha paana ki chat ka koi bhi “memory” feature asal mein kaise kaam karta hai.',
  'Predict what a long conversation will cost before anyone builds it.':
    'Kisi ke kuch banane se pehle hi andaaza laga paana ki ek lambi conversation ki cost kitni hogi.',
  'Keep using your <code>chapter-1</code> notebook. You’ll need the usage code from the last chapter. This time you’ll run it in a loop and watch the numbers grow.':
    'Apna <code>chapter-1</code> notebook hi use karte rahiye. Aapko pichhle chapter ka usage code chahiye hoga. Is baar aap use ek loop mein chalayenge aur numbers ko badhte dekhenge.',
  'In Chapter 1 you saw that a model writes its answers from patterns, and that you pay for every token. Now for the third fact. A model doesn’t remember anything between calls, and each call has a size limit.':
    'Chapter 1 mein aapne dekha ki model apne jawaab patterns se likhta hai, aur aap har token ka paisa dete hain. Ab teesra fact. Model calls ke beech kuch yaad nahi rakhta, aur har call ki ek size limit hoti hai.',
  'This chapter proves both facts in code. Then you’ll build a simple chat memory yourself and see what it costs.':
    'Yeh chapter dono baatein code mein saabit karta hai. Phir aap khud ek simple chat memory banayenge aur dekhenge ki usmein kitna kharch hota hai.',
  'The context window is a size limit':
    'Context window ek size limit hai',
  'Everything you send in one call has to fit within a size limit. That includes the question, any instructions, any documents, and the answer that comes back. This limit is called the <strong>context window</strong>.':
    'Ek call mein aap jo kuch bhejte hain, woh ek size limit ke andar aana chahiye. Usmein aapka sawaal, saari instructions, saare documents, aur wapas aane wala jawaab, sab shaamil hai. Is limit ko <strong>context window</strong> kehte hain.',
  'The context window limits the size of one request. It is not memory. Keep that difference in mind, because the next section is all about memory.':
    'Context window sirf ek request ka size limit karti hai. Woh memory nahi hai. Yeh farq yaad rakhiye, kyunki agla section poora memory ke baare mein hai.',
  'The model does not remember between calls':
    'Model calls ke beech yaad nahi rakhta',
  'Think about calling a helpline where a different person picks up every time. Each time, you have to explain everything from the start. A model works a bit like that.':
    'Maan lijiye aap kisi helpline ko call karte hain aur har baar alag insaan phone uthata hai. Har baar aapko sab kuch shuru se samjhana padta hai. Model kuch aisa hi kaam karta hai.',
  'A model keeps nothing between calls. Each request starts from nothing, so the model does not know you spoke to it a minute ago. The term for this is <strong>stateless</strong>.':
    'Model calls ke beech kuch nahi rakhta. Har request zero se shuru hoti hai, isliye model ko nahi pata ki aapne use ek minute pehle kuch kaha tha. Iske liye term hai <strong>stateless</strong>.',
  'Don’t just take my word for it. Let’s catch the model forgetting.':
    'Sirf meri baat par bharosa mat kijiye. Chaliye model ko bhoolte hue pakadte hain.',
  'Prove the model forgets':
    'Saabit kijiye ki model bhool jaata hai',
  'Make two separate calls, one after the other:':
    'Do alag calls kijiye, ek ke baad ek:',
  'The second reply doesn’t know your name. This is not a bug or a setting. Nothing is carried from one call to the next.':
    'Doosra reply aapka naam nahi jaanta. Yeh koi bug ya setting nahi hai. Ek call se doosri call tak kuch carry nahi hota.',
  'How chat apps create memory':
    'Chat apps memory kaise banate hain',
  'You might be wondering how a chat assistant seems to remember what you said five messages ago. The answer is simple: the app sends it again. The model only ever sees the messages in the current call.':
    'Aap soch rahe honge ki ek chat assistant ko paanch message pehle ki baat yaad kaise rehti hai. Jawaab simple hai: app use dobara bhej deta hai. Model sirf wahi messages dekhta hai jo current call mein hote hain.',
  'An app can do this in several ways. It can send the full history, send a summary, look up persistent user memory, or store task state externally. The next step uses the simplest of these, which is sending the history again.':
    'App yeh kayi tareekon se kar sakta hai. Woh poori history bhej sakta hai, ek summary bhej sakta hai, persistent user memory look up kar sakta hai, ya task state externally store kar sakta hai. Agla step inmein se sabse simple tareeka use karta hai, yaani history ko dobara bhejna.',
  'Build a simple chat memory':
    'Ek simple chat memory banaiye',
  'Now it knows your name is Sam, because this call includes the earlier message. And <code>prompt_tokens</code> is higher, because you sent the history again. You’ve just built the most common memory pattern and measured its cost. Production apps may use summaries, saved facts or task state instead.':
    'Ab usse pata hai ki aapka naam Sam hai, kyunki is call mein pichhla message shaamil hai. Aur <code>prompt_tokens</code> zyada hai, kyunki aapne history dobara bheji. Aapne abhi sabse common memory pattern banaya aur uski cost naapi. Production apps iski jagah summaries, saved facts ya task state bhi use kar sakte hain.',
  'You saw the cost rise by one message. Now picture a whole conversation. This tool shows how the cost grows over many turns:':
    'Aapne dekha ki ek message se cost kaise badhi. Ab poori conversation ke baare mein sochiye. Yeh tool dikhata hai ki kai turns mein cost kaise badhti hai:',
  'Summary':
    'Summary',
  'You now have three facts, and each one affects product decisions:':
    'Ab aapke paas teen facts hain, aur har ek product ke decisions ko affect karta hai:',
  '<strong>Models generate text.</strong> A confident tone tells you nothing, so you need a way to check answers.':
    '<strong>Models text generate karte hain.</strong> Confident tone se kuch pata nahi chalta, isliye jawaabon ko check karne ka koi tareeka chahiye.',
  '<strong>There is a size limit.</strong> You can’t send everything you have, so choosing what to send is a design decision.':
    '<strong>Ek size limit hai.</strong> Aap apne paas ka sab kuch nahi bhej sakte, isliye kya bhejna hai yeh chunna ek design decision hai.',
  '<strong>Models forget.</strong> Memory is something your product builds and pays for on every message. The model vendor doesn’t provide it.':
    '<strong>Models bhool jaate hain.</strong> Memory woh cheez hai jo aapka product banata hai aur har message par uska paisa deta hai. Model vendor yeh nahi deta.',
  'Before you move on, try putting this into your own words. Explaining it to someone else is the best way to find out whether you really have it.':
    'Aage badhne se pehle, ise apne words mein likhne ki koshish kijiye. Kisi aur ko samjhana hi yeh jaanne ka sabse achha tareeka hai ki aapko sach mein samajh aaya ya nahi.',
  'Write two sentences explaining to a colleague why a long chat with an AI costs more than a short one. Use plain words, and nothing you could not defend if they asked a follow-up question.':
    'Ek colleague ko samjhane ke liye do sentence likhiye ki AI ke saath ek lambi chat ek chhoti chat se zyada mehngi kyun padti hai. Simple words use kijiye, aur aisa kuch mat likhiye jise aap follow-up sawaal aane par defend na kar sakein.',
  'Two sentences.':
    'Do sentence.',
  'A good answer covers what happens and what it means. <strong>What happens:</strong> the model only sees the context the app sends, and sending a growing history makes each request larger. <strong>What it means:</strong> the cost of a conversation depends on how the app manages that context, so you need to measure it rather than assume it.':
    'Ek achha jawaab yeh dono cover karta hai: kya hota hai aur uska matlab kya hai. <strong>Kya hota hai:</strong> model sirf wahi context dekhta hai jo app bhejta hai, aur badhti hui history bhejne se har request bada hota jaata hai. <strong>Matlab:</strong> ek conversation ki cost is par depend karti hai ki app us context ko kaise sambhalta hai, isliye use maan lene ki jagah naapna padta hai.',
  'You now know the model forgets, and that the app has to carry the memory. Next, you’ll learn the two main controls you have over a model: the system prompt and temperature. You’ll also make a model invent an answer on purpose.':
    'Ab aap jaan gaye hain ki model bhool jaata hai, aur memory app ko hi carry karni padti hai. Agle chapter mein aap model par aapke do main controls seekhenge: system prompt aur temperature. Aur aap ek model se jaanbujhkar ek jawaab bhi banwayenge.',
  'Work out what checking a long chat costs':
    'Pata kijiye ki ek lambi chat ko check karne mein kitna kharch hota hai',
  'A model remembers nothing between calls. A chat feels continuous only because every earlier message is sent again, which makes long chats expensive. Bharat Privacy Guard will sit in front of chats like this, so you need to know what it costs to check one. In this chapter you learned how chat memory really works and how to predict a cost before anything is built. Here you do that for the project.':
    'Model calls ke beech kuch yaad nahi rakhta. Chat sirf isliye continuous lagti hai kyunki har pichhla message dobara bheja jaata hai, aur isi se lambi chats mehngi padti hain. Bharat Privacy Guard aisi hi chats ke aage baithega, isliye pata hona chahiye ki ek chat check karne mein kitna kharch hoga. Is chapter mein aapne chat memory ka asli kaam seekha. Yahan aap project ke liye cost ka andaaza lagate hain.',
  'Keep using your <code>chapter-1</code> notebook for the calls and the token counts. Write the final sentence in the notes box below.':
    'Calls aur token counts ke liye apna <code>chapter-1</code> notebook hi use kijiye. Aakhri sentence neeche ke notes box mein likhiye.',
  'Imagine a bank’s chat window in which every customer message goes through Bharat Privacy Guard before it reaches an AI model. Describe this feature in one sentence.':
    'Ek bank ki chat window imagine kijiye jisme har customer message AI model tak pahunchne se pehle Bharat Privacy Guard se guzarta hai. Is feature ko ek sentence mein describe kijiye.',
  'In your <code>chapter-1</code> notebook, write a five-message conversation using starter sentences 1, 3, 6, 7 and 9, in that order, as the customer’s messages. Send them one at a time, each time sending all the earlier messages as well.':
    'Apne <code>chapter-1</code> notebook mein starter sentences 1, 3, 6, 7 aur 9 ko isi order mein customer ke messages banakar paanch message ki ek conversation likhiye. Unhe ek-ek karke bhejiye, aur har baar saare pichhle messages bhi saath bhejiye.',
  'After each message, print the prompt_tokens. Write the five numbers in a list and notice how they grow.':
    'Har message ke baad prompt_tokens print kijiye. Paanchon numbers ek list mein likhiye aur dekhiye ki woh kaise badhte hain.',
  'Do it again, but this time check only the newest message each time. Compare the total tokens for the whole conversation both ways.':
    'Dobara kijiye, lekin is baar har baar sirf sabse naye message ko check kijiye. Poori conversation ke total tokens dono tareekon se compare kijiye.',
  'Look up your provider’s price per million tokens. Work out the cost per conversation and the cost per 1,000 conversations for both ways.':
    'Apne provider ki price per million tokens dekhiye. Dono tareekon ke liye ek conversation ki cost aur 1,000 conversations ki cost nikaliye.',
  'Write the one sentence you would say in a budget meeting: the cost per 1,000 conversations, and the assumption most likely to be wrong.':
    'Budget meeting mein aap jo ek sentence kahenge woh likhiye: 1,000 conversations ki cost, aur woh assumption jo sabse zyada galat ho sakta hai.',
  'The five prompt_tokens numbers, one for each message.':
    'Paanch prompt_tokens numbers, har message ke liye ek.',
  'The total tokens for the whole chat, checked both ways.':
    'Poori chat ke total tokens, dono tareekon se check kiye hue.',
  'The cost per 1,000 conversations for both ways.':
    'Dono tareekon ke liye 1,000 conversations ki cost.',
  'Your one budget sentence.':
    'Aapka budget wala ek sentence.',

  /* ---- ch2: System prompts, temperature and hallucination ---- */
  'System prompts, temperature and hallucination':
    'System prompts, temperature aur hallucination',
  'You have two main controls over a model: the system prompt and temperature. You’ll use both, make a model invent an answer, hold it back with an instruction, and then break your own fix.':
    'Model par aapke paas do main controls hain: system prompt aur temperature. Aap dono use karenge, model se ek jawaab invent karwayenge, use ek instruction se rokenge, aur phir apna hi fix todenge.',
  'Ask about a policy or document that you know is made up, and save exactly what the model claims about it.':
    'Kisi aisi policy ya document ke baare mein poochhiye jo aap jaante hain ki bana hua hai, aur model jo kuch kehta hai woh bilkul waisa hi save kar lijiye.',
  'Compare three runs: no guardrail, a guardrail that asks the model to verify, and an instruction to use only the evidence given. Then test a low and a high temperature.':
    'Teen runs compare kijiye: bina guardrail ke, ek guardrail jo model se verify karne ko kehta hai, aur ek instruction ki sirf diye gaye evidence se jawaab do. Phir ek low aur ek high temperature test kijiye.',
  'Put social pressure on the guardrail that worked. Then hand the model the real source text.':
    'Jo guardrail kaam kar gaya, us par social pressure daaliye. Phir model ko asli source text de dijiye.',
  'A test table of hallucinations and guardrails.':
    'Hallucinations aur guardrails ka ek test table.',
  'Explain why a prompt can influence behaviour but is not a security boundary.':
    'Samjhaiye ki prompt behaviour ko influence kar sakta hai, lekin woh security boundary kyun nahi hai.',
  'There is nothing behind the model to check facts against.':
    'Model ke peeche aisa kuch nahi hai jisse facts check kiye ja sakein.',
  'Models forget between messages':
    'Models messages ke beech bhool jaate hain',
  'Anything the model should know has to be sent every time.':
    'Model ko jo bhi pata hona chahiye, woh har baar bhejna padta hai.',
  'You’ll make real calls in this chapter.':
    'Is chapter mein aap asli calls karenge.',
  'Explain what a system prompt is and why it is sent with every message.':
    'Samjha paana ki system prompt kya hai aur woh har message ke saath kyun bheja jaata hai.',
  'Explain why a confident tone tells you nothing about whether an answer is right.':
    'Samjha paana ki confident tone se yeh kyun nahi pata chalta ki jawaab sahi hai ya nahi.',
  'Tell the difference between making a failure rarer and removing its cause.':
    'Bata paana ki ek failure ko kam hone wala banana aur uski wajah hatana, in dono mein kya farq hai.',
  'Open a new notebook called <code>chapter-2</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client). You’ll make three calls in this chapter, and each one tests the idea just before it.':
    '<code>chapter-2</code> naam ka ek naya notebook kholiye. <a href="#/setup">Setup</a> ke teeno warm-up cells chalaiye (key, install aur client). Is chapter mein aap teen calls karenge, aur har call usse pehle wale idea ko test karti hai.',
  'In the last chapter you saw that a model forgets everything between calls, and that your app has to carry the memory. That raises a practical question. If the model starts fresh every time, how do you make it behave the way you want?':
    'Pichhle chapter mein aapne dekha ki model calls ke beech sab kuch bhool jaata hai, aur memory aapke app ko carry karni padti hai. Isse ek practical sawaal uthta hai. Agar model har baar zero se shuru karta hai, toh aap use apni marzi ke hisaab se behave kaise karwayenge?',
  'This chapter gives you the two main controls for that. Then you’ll see the model’s biggest weakness up close: it will invent an answer and sound completely sure. You’ll try to stop it, and then you’ll break your own fix.':
    'Yeh chapter aapko uske liye do main controls deta hai. Phir aap model ki sabse badi kamzori ko paas se dekhenge: woh ek jawaab invent kar dega aur poori tarah sure sunayi dega. Aap use rokne ki koshish karenge, aur phir apna hi fix todenge.',
  'The system prompt':
    'System prompt',
  'Suppose a company wants its assistant to be polite, to answer in English, and never to talk about competitors. The model forgets everything between calls. So how does the company get this behaviour every time?':
    'Maan lijiye ek company chahti hai ki uska assistant polite rahe, English mein jawaab de, aur competitors ke baare mein kabhi baat na kare. Model calls ke beech sab kuch bhool jaata hai. Toh company yeh behaviour har baar kaise paati hai?',
  'The app sends the same instructions again with every message. These standing instructions are called the <strong>system prompt</strong>. It is ordinary text, sent along with each request. It says who the assistant is and what it must not do.':
    'App har message ke saath wahi instructions dobara bhejta hai. In standing instructions ko <strong>system prompt</strong> kehte hain. Yeh ek aam text hota hai jo har request ke saath jaata hai. Woh batata hai ki assistant kaun hai aur use kya nahi karna hai.',
  'Note':
    'Note',
  'When a vendor says they have “customised the AI for your organisation”, they often mean they wrote a system prompt. Ask what else, if anything, they changed.':
    'Jab koi vendor kehta hai ki unhone “AI ko aapke organisation ke liye customise kiya hai”, toh aksar iska matlab hota hai ki unhone ek system prompt likha hai. Poochhiye ki aur kya badla gaya, agar kuch badla hai.',
  'Temperature':
    'Temperature',
  'The second control is <strong>temperature</strong>. At each step, the model has several likely next tokens to choose from. Temperature decides how often it picks a less likely one.':
    'Doosra control hai <strong>temperature</strong>. Har step par model ke saamne kayi likely agle tokens hote hain. Temperature tay karta hai ki woh kitni baar kam likely token chunta hai.',
  'At a low temperature, you get similar answers to the same question each time. At a high temperature, you get more variety. You tried this in Chapter 0.5, and you can try it again here:':
    'Low temperature par aapko ek hi sawaal ke lagbhag ek jaise jawaab milte hain. High temperature par zyada variety milti hai. Yeh aap Chapter 0.5 mein try kar chuke hain, aur yahan dobara try kar sakte hain:',
  'Now think about which setting suits which product. Here’s a case to work through.':
    'Ab sochiye ki kaunsi setting kis product ke liye theek hai. Ek example par kaam karte hain.',
  'Up or down, and what you give up':
    'Upar ya neeche, aur aap kya chhodte hain',
  'Your product answers questions about a refund policy. Should the temperature be high or low, and what do you give up?':
    'Aapka product ek refund policy ke baare mein sawaalon ke jawaab deta hai. Temperature high honi chahiye ya low, aur aap kya chhodte hain?',
  'Low, near zero. You give up variety, which you do not need here, and gain consistency, which you do: the same question should not get a different policy on Tuesday.':
    'Low, zero ke aas-paas. Aap variety chhodte hain, jiski yahan zaroorat nahi, aur consistency paate hain, jiski zaroorat hai: ek hi sawaal par mangalwar ko alag policy nahi milni chahiye.',
  'Watch out: a low temperature makes answers <em>consistent</em>, not <em>correct</em>. A wrong answer at temperature zero is wrong the same way every time.':
    'Dhyaan rakhiye: low temperature jawaab ko <em>consistent</em> banati hai, <em>sahi</em> nahi. Temperature zero par galat jawaab har baar ek hi tarah galat hota hai.',
  'Hallucination: confident, invented answers':
    'Hallucination: confident, banaye hue jawaab',
  'That last point leads to the biggest risk in this chapter. What does a model do when it doesn’t know the answer? You might expect it to stay quiet. It usually doesn’t.':
    'Yeh aakhri baat is chapter ke sabse bade risk tak le jaati hai. Jab model ko jawaab nahi pata hota, toh woh kya karta hai? Aap soch rahe honge ki woh chup rahega. Aksar woh chup nahi rehta.',
  'A model does not reliably tell you when it does not know. Predicting the next piece of text has no built-in option for silence. Refusing has to be trained in separately, and it does not always work.':
    'Model hamesha yeh nahi batata ki use nahi pata. Agle text ko predict karne mein chup rehne ka koi built-in option hota hi nahi. Mana karna alag se train karna padta hai, aur woh hamesha kaam nahi karta.',
  'An invented answer looks just like a true one. It has the same structure, the same calm tone and the same detail. It may even cite a clause number or give a percentage. The signals that usually show expertise are patterns in text, and patterns in text are exactly what the model reproduces.':
    'Ek banaya hua jawaab bilkul sahi jawaab jaisa dikhta hai. Usmein wahi structure hota hai, wahi shaant tone, aur wahi detail. Woh clause number bhi bata sakta hai ya percentage bhi de sakta hai. Jo signals aam taur par expertise dikhate hain, woh text ke patterns hain, aur text ke patterns hi model reproduce karta hai.',
  'This is called <strong>hallucination</strong>. The name suggests a malfunction, but the model is working as designed. It is predicting likely text in a situation where you needed it to say “I don’t know”.':
    'Ise <strong>hallucination</strong> kehte hain. Naam se lagta hai ki kuch kharab ho gaya hai, lekin model waisa hi kaam kar raha hai jaisa design kiya gaya hai. Woh likely text predict kar raha hai, jabki aapko us waqt chahiye tha ki woh kahe “mujhe nahi pata”.',
  'Let’s make it happen on purpose, so you can see it with your own eyes.':
    'Chaliye ise jaanbujhkar karwate hain, taaki aap apni aankhon se dekh sakein.',
  'Make the model invent an answer':
    'Model se ek jawaab invent karwaiye',
  'Ask about something that does not exist. Set the temperature to zero, so randomness cannot explain the result.':
    'Kisi aisi cheez ke baare mein poochhiye jo exist hi nahi karti. Temperature zero set kijiye, taaki randomness result ki wajah na ban sake.',
  'You get a confident, well-organised summary of a scheme that doesn’t exist. Read it twice and notice how legitimate it looks. That impression is exactly what you can’t rely on.':
    'Aapko ek aisi scheme ka confident, achhe se organise kiya hua summary milta hai jo exist hi nahi karti. Ise do baar padhiye aur dekhiye ki woh kitna asli lagta hai. Yahi impression woh cheez hai jis par aap bharosa nahi kar sakte.',
  'Reducing hallucination with an instruction':
    'Instruction se hallucination kam karna',
  'So what can you do about it? The obvious fix is an instruction, such as <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> This helps. It really does reduce how often the model invents answers.':
    'Toh ab aap kya kar sakte hain? Sabse seedha fix ek instruction hai, jaise <em>sirf diye gaye documents se jawaab do; agar jawaab wahan nahi hai, toh kaho ki tumhe nahi pata.</em> Isse madad milti hai. Model kitni baar jawaab invent karta hai, yeh sach mein kam ho jaata hai.',
  'Let’s test that with the same question, plus one line of system prompt.':
    'Chaliye yahi test karte hain, wahi sawaal aur system prompt ki ek line ke saath.',
  'Add one instruction':
    'Ek instruction jodiye',
  'Send the same question again, with one line of system prompt in front of it.':
    'Wahi sawaal dobara bhejiye, aur uske aage system prompt ki ek line laga dijiye.',
  'The reply now hedges, says it can’t verify the scheme, or asks for a source. One sentence changed the behaviour. The next step shows how easily that can be undone.':
    'Ab reply hedge karta hai, kehta hai ki woh scheme verify nahi kar sakta, ya source maangta hai. Ek sentence ne behaviour badal diya. Agla step dikhata hai ki yeh kitni aasani se undo ho sakta hai.',
  'The instruction reduces the problem, but it doesn’t remove it. To see why, try to talk the model out of its own rule.':
    'Instruction problem ko kam karta hai, lekin hatata nahi. Yeh dekhne ke liye, model ko uske apne rule se bahar nikalwane ki koshish kijiye.',
  'Break your own fix':
    'Apna hi fix todiye',
  'Keep the same system prompt. Change only the user message, and push harder:':
    'Wahi system prompt rakhiye. Sirf user message badaliye, aur zyada zor lagaiye:',
  'Many models give in and invent the answer again. An instruction is a strong influence, but the model can still be talked out of it.':
    'Kayi models haar maan lete hain aur jawaab dobara invent kar dete hain. Instruction ka asar bahut hota hai, lekin model ko phir bhi us se hataya ja sakta hai.',
  'Now it’s your turn to write a guardrail, and then to beat it.':
    'Ab aapki baari hai: ek guardrail likhiye, aur phir use todiye.',
  'Write one sentence you would put in a system prompt to stop the model inventing a policy it has not been shown. Underneath, write a question that would get around your instruction.':
    'Ek sentence likhiye jo aap system prompt mein daalenge, taaki model aisi policy invent na kare jo use dikhayi hi nahi gayi. Uske neeche ek aisa sawaal likhiye jo aapke instruction ko bypass kar de.',
  'The instruction, then the question that beats it.':
    'Instruction, phir woh sawaal jo use haraye.',
  'The instruction is the easy part. Almost any such sentence fails against a question that <em>looks</em> answerable from the documents but is not: a policy that sounds like a real one, a date just outside the range covered, or a scheme whose name differs by one word. The model matches patterns rather than checking facts, so it cannot tell “nearly in my documents” from “in my documents”. An instruction makes the behaviour rarer. It does not remove the reason it happens.':
    'Instruction likhna aasaan hissa hai. Aisa lagbhag har sentence ek aise sawaal ke saamne fail ho jaata hai jo documents se answer hone wala <em>lagta</em> hai lekin hota nahi: asli jaisi sunayi dene wali policy, covered range se bas thodi bahar ki date, ya ek word se alag naam wali scheme. Model patterns match karta hai, facts nahi. Isliye woh “lagbhag mere documents mein” aur “mere documents mein” ka farq nahi pakad paata. Instruction behaviour ko kam karta hai, uski wajah ko nahi hatata.',
  'Rarer is not the same as fixed':
    'Kam hona aur theek hona ek cheez nahi hai',
  'This brings us to an idea you’ll use again and again. Making a failure rarer is different from removing its cause. When someone says a problem is handled because they added a rule, ask: <em>does that remove the cause, or does it only make the symptom less common?</em>':
    'Yahan se ek aisa idea aata hai jo aap baar-baar istemaal karenge. Failure ko kam karna aur uski wajah hatana, dono alag cheezein hain. Jab koi kahe ki rule jodkar problem sambhal li gayi, toh poochhiye: <em>kya isse wajah hati, ya sirf symptom kam hua?</em>',
  'So how do you remove the cause? The rest of Part I does exactly that. If the model invents answers when it has no evidence, the fix is to give it the evidence. That takes four chapters.':
    'Toh wajah kaise hatayein? Part I ka baaki hissa yahi karta hai. Agar model tab jawaab invent karta hai jab uske paas evidence nahi hota, toh fix yeh hai ki use evidence de diya jaaye. Isme chaar chapters lagte hain.',
  'It starts with a practical problem: your documents are too big to send in one request. But first, the next chapter shows you four techniques for writing prompts that work.':
    'Yeh ek practical problem se shuru hota hai: aapke documents itne bade hain ki ek request mein nahi bheje ja sakte. Lekin usse pehle, agla chapter aapko prompts likhne ki chaar techniques dikhata hai jo kaam karti hain.',
  'Write the instructions for the AI helper, and try to break them':
    'AI helper ke liye instructions likhiye, aur unhe todne ki koshish kijiye',
  'When the first two parts of the tool cannot settle a sentence, the third part (the context judge) asks an AI model. That model needs written instructions, called a system prompt, that are sent with every message. In this chapter you learned that a confident tone tells you nothing about whether an answer is right, and that a system prompt can make a failure rarer without removing its cause. Here you write the system prompt for the context judge and test it.':
    'Jab tool ke pehle do hisse kisi sentence ko settle nahi kar paate, toh teesra hissa (context judge) ek AI model se poochhta hai. Us model ko likhe hue instructions chahiye, jinhe system prompt kehte hain, aur jo har message ke saath jaate hain. Is chapter mein aapne seekha ki confident tone se jawaab ka sahi hona nahi pata chalta, aur system prompt failure kam karta hai, wajah nahi hatata. Yahan aap context judge ka system prompt likhte hain.',
  'Your <code>chapter-2</code> notebook. Write the system prompt as the system message and test it there. You’ll use the same prompt again in Chapter 2.1.':
    'Aapka <code>chapter-2</code> notebook. System prompt ko system message ki tarah likhiye aur wahin test kijiye. Wahi prompt aap Chapter 2.1 mein dobara use karenge.',
  'Write the system prompt in plain English. It must say: what the helper is for; what counts as personal information (names, ID numbers, phone numbers, addresses, and details that point to one person); what to answer when nothing personal is present; the exact format of the answer (for example a list with the item, its type and one word of reason); and what to do when it is not sure.':
    'System prompt simple English mein likhiye. Usmein yeh sab hona chahiye: helper kis kaam ke liye hai; personal information kya maani jaayegi (naam, ID numbers, phone numbers, addresses, aur woh details jo ek hi insaan ki taraf ishaara karti hain); jab kuch personal na ho toh kya jawaab dena hai; jawaab ka exact format (jaise item, uska type aur wajah ka ek word wali list); aur jab pakka na ho toh kya karna hai.',
  'Add a rule that stops it from inventing: “If you are not sure, answer UNSURE. Never guess a number.”':
    'Ek rule jodiye jo use invent karne se rokta hai: “If you are not sure, answer UNSURE. Never guess a number.”',
  'Put your prompt in the notebook as the system message. Run starter sentences 1 to 9, one at a time, and save each answer.':
    'Apna prompt notebook mein system message ki tarah daaliye. Starter sentences 1 se 9 tak ek-ek karke run kijiye, aur har jawaab save kijiye.',
  'Mark every answer correct, partly correct or wrong. Use the last column of the starter sentence table on the project page to see what is really hidden in each sentence.':
    'Har jawaab ko correct, partly correct ya wrong mark kijiye. Project page par starter sentence table ka aakhri column dekhiye, jisse pata chalega ki har sentence mein asal mein kya chhipa hai.',
  'Run starter sentence 8 (the diabetic patient) and starter sentence 9 (the driving licence) five times each. Does the answer change from one run to the next? Write down what you saw.':
    'Starter sentence 8 (diabetic patient) aur starter sentence 9 (driving licence) ko paanch-paanch baar run kijiye. Kya jawaab ek run se doosre run mein badalta hai? Jo dekha woh likh lijiye.',
  'Find one sentence on which the prompt fails. Change the wording to fix it, run it again, and say whether you fixed the cause or only made the failure rarer.':
    'Ek aisa sentence dhoondhiye jis par prompt fail hota hai. Wording badalkar use theek kijiye, dobara run kijiye, aur bataiye ki aapne wajah theek ki ya sirf failure ko kam kiya.',
  'Your system prompt, saved in the notebook.':
    'Aapka system prompt, notebook mein save kiya hua.',
  'The nine answers, each marked correct, partly correct or wrong.':
    'Nau jawaab, har ek correct, partly correct ya wrong mark kiya hua.',
  'What happened when you ran sentences 8 and 9 five times each.':
    'Sentences 8 aur 9 ko paanch-paanch baar run karne par kya hua.',
  'One failure, your fix, and a sentence on whether you removed the cause.':
    'Ek failure, aapka fix, aur ek sentence ki aapne wajah hatayi ya nahi.',

  /* ---- ch21: Writing prompts: four techniques that work ---- */
  'Writing prompts: four techniques that work':
    'Prompt likhna: chaar techniques jo kaam karti hain',
  'A good prompt is a specification, not a request. In this chapter you’ll learn four techniques, in the order of how much they help: show an example, name the job, break it into steps, and forbid the failures you have seen.':
    'Ek achha prompt request nahi, specification hota hai. Is chapter mein aap chaar techniques seekhenge, us order mein jisme woh sabse zyada madad karti hain: example dikhaiye, job ka naam lijiye, kaam ko steps mein todiye, aur woh failures mana kijiye jo aap dekh chuke hain.',
  'A system prompt changes behaviour':
    'System prompt behaviour badalta hai',
  'In Chapter 2, one sentence of instruction visibly reduced invented answers.':
    'Chapter 2 mein aapne dekha tha ki instruction ka ek sentence invented jawaab saaf taur par kam kar deta hai.',
  'Instructions can be overridden':
    'Instructions ko override kiya ja sakta hai',
  'So the wording of a prompt is a real tool, but a tool with real limits.':
    'Isliye prompt ki wording ek asli tool hai, lekin aisa tool jiski apni limits hain.',
  'You’ll run six or seven prompts in this chapter.':
    'Is chapter mein aap chhe-saat prompts chalayenge.',
  'Turn a vague request into a prompt that returns the same format every time.':
    'Ek vague request ko aise prompt mein badalna paana jo har baar same format mein jawaab de.',
  'Tell which of the four techniques is doing the work in any prompt.':
    'Bata paana ki kisi bhi prompt mein chaar techniques mein se kaun si technique asli kaam kar rahi hai.',
  'Show a model the output you want with a worked example, instead of describing it.':
    'Model ko woh output, jo aap chahte hain, describe karne ki jagah ek worked example se dikha paana.',
  'Open a notebook called <code>chapter-2-1</code> and run the warm-up cells. Keep the system prompt from the Chapter 2 capstone open too. You’ll begin by testing it on a new kind of task.':
    '<code>chapter-2-1</code> naam ka ek notebook kholiye aur warm-up cells chalaiye. Chapter 2 ke capstone wala system prompt bhi paas rakhiye. Aap shuruaat usi ko ek naye tarah ke task par test karke karenge.',
  'In Chapter 2 you saw that one sentence in a system prompt can change how a model behaves. Now comes the part you’ll do most often at work: writing the prompt for a particular job. This chapter gives you four techniques for that, one at a time, and you’ll try each one on your own text.':
    'Chapter 2 mein aapne dekha tha ki system prompt ka ek sentence model ka behaviour badal sakta hai. Ab woh kaam aata hai jo aap office mein sabse zyada karenge: kisi khaas job ke liye prompt likhna. Is chapter mein iske liye chaar techniques hain, ek-ek karke, aur har ek ko aap apne hi text par try karenge.',
  'Let’s start by seeing what your Chapter 2 system prompt can and can’t do.':
    'Chaliye pehle dekhte hain ki aapka Chapter 2 wala system prompt kya kar sakta hai aur kya nahi.',
  'Test your system prompt on a new task':
    'Apna system prompt ek naye task par test kijiye',
  'Use the system prompt you wrote at the end of Chapter 2. This time, don’t ask about a fake scheme. Give it a real job: pull three specific facts out of a paragraph from your own work.':
    'Chapter 2 ke end mein jo system prompt aapne likha tha, wahi use kijiye. Is baar kisi fake scheme ke baare mein mat poochhiye. Use ek asli kaam dijiye: apne kaam ke kisi paragraph se teen khaas facts nikaalne ka.',
  'It does something reasonable, in whatever format it chooses. Your system prompt controlled <em>tone and honesty</em>, which is what you wrote it for. But it said nothing about the format of the answer. So you probably got a paragraph when you wanted three fields.':
    'Woh kuch theek-sa kar deta hai, apne chune hue format mein. Aapka system prompt <em>tone aur honesty</em> control karta tha, aur aapne use usi ke liye likha tha. Lekin jawaab ke format ke baare mein usme kuch nahi tha. Isliye shayad aapko ek paragraph mila, jabki aapko teen fields chahiye the.',
  'A system prompt controls behaviour. The task prompt has to say what the job is and what the output should look like.':
    'System prompt behaviour control karta hai. Task prompt ko batana padta hai ki job kya hai aur output kaisa dikhna chahiye.',
  'So what makes a good task prompt? Think about how most people write their first one. They write a request, like <em>please summarise this and pull out the key dates.</em> Sometimes that works. The rest of the time it fails, because it leaves four things unsaid. The four techniques below fill those gaps.':
    'Toh ek achha task prompt kaisa hota hai? Pehle yeh sochiye ki zyadatar log apna pehla prompt kaise likhte hain. Woh ek request likhte hain, jaise <em>please is ka summary dijiye aur key dates nikaal dijiye.</em> Kabhi yeh chal jaata hai. Baaki time yeh fail hota hai, kyunki isme chaar cheezein bina kahe reh jaati hain. Neeche ki chaar techniques wahi gaps bharti hain.',
  'Treat a prompt as a specification. Most of its value is in the details people leave out.':
    'Prompt ko ek specification maniye. Uski zyadatar value un details mein hai jo log chhod dete hain.',
  'Technique 1: Show an example instead of describing':
    'Technique 1: Describe karne ki jagah example dikhaiye',
  'This is the technique that helps the most, and people usually try it last. The reason is simple. If you describe the output in words, the model imitates your words. If you show a finished example, the model copies its format.':
    'Yeh technique sabse zyada madad karti hai, aur log ise aksar sabse aakhir mein try karte hain. Wajah simple hai. Agar aap output ko words mein describe karte hain, toh model aapke words ki nakal karta hai. Agar aap ek poora example dikhate hain, toh model uska format copy karta hai.',
  'Describe it, then show it':
    'Pehle describe kijiye, phir dikhaiye',
  'You’ll run the same job twice. First, describe the output you want in a sentence.':
    'Aap ek hi job do baar chalayenge. Pehle, jo output chahiye use ek sentence mein describe kijiye.',
  'Then delete the description and show one finished example instead.':
    'Phir description hata dijiye aur uski jagah ek poora example dikhaiye.',
  'The described version varies. The labels change, and over five runs the dates come back in three different formats. The shown version matches your format, even the date style, though you never described it in words.':
    'Describe wala version badalta rehta hai. Labels badal jaate hain, aur paanch runs mein dates teen alag formats mein aati hain. Dikhaya hua version aapke format se match karta hai, date style tak, jabki aapne use kabhi words mein describe nahi kiya.',
  'One worked example is often worth a paragraph of instructions. Examples inside a prompt are called <strong>few-shot examples</strong>, and two or three are usually enough.':
    'Ek worked example aksar instructions ke poore paragraph ke barabar hota hai. Prompt ke andar ke examples ko <strong>few-shot examples</strong> kehte hain, aur do ya teen aksar kaafi hote hain.',
  'Here’s a question to think about before you read on. If one example helps this much, what happens when you add a second one?':
    'Aage padhne se pehle ek sawaal par sochiye. Agar ek example itna madad karta hai, toh doosra example jodne par kya hoga?',
  'Better, worse or no change, and why':
    'Behtar, kharab ya koi farq nahi, aur kyun',
  'Make a prediction. You add a second example, and you make it an awkward case on purpose, such as a document where the notice period is missing. What happens to the answers for <em>normal</em> documents?':
    'Ek andaaza lagaiye. Aap doosra example jodte hain, aur use jaan-boojh kar ek mushkil case banate hain, jaise aisa document jisme notice period hai hi nahi. <em>Normal</em> documents ke jawaab par kya asar padega?',
  'They usually get better. The awkward example shows the model what to do when a field is missing, and the tidy example cannot show that.':
    'Woh aksar behtar ho jaate hain. Mushkil example model ko dikhata hai ki jab koi field missing ho toh kya karna hai, aur saaf-suthra example yeh nahi dikha sakta.',
  'So the choice of examples matters more than the number of them. Two well-chosen examples, one typical and one awkward, usually beat six similar ones. They also cost much less to send.':
    'Isliye examples ki quality unki ginti se zyada zaroori hai. Do achhe chune hue examples, ek typical aur ek mushkil, aksar chhe ek jaise examples se behtar rehte hain. Aur unhe bhejna bhi bahut sasta padta hai.',
  'Technique 2: Name the job and the reader':
    'Technique 2: Job aur reader ka naam lijiye',
  'Imagine asking a colleague to “summarise this”. They’d probably ask, “For whom? What for?” A model won’t ask. It just guesses, so you have to tell it.':
    'Sochiye aap kisi colleague se kahein “isko summarise kar do”. Woh shayad poochhega, “Kiske liye? Kis kaam ke liye?” Model yeh nahi poochhega. Woh bas andaaza lagata hai, isliye aapko khud batana padta hai.',
  '“Summarise this” is a request. “You are reading a support ticket and writing the one line a triage agent needs” is a job. Naming the job and the reader changes the output a lot, for very little extra effort.':
    '“Isko summarise karo” ek request hai. “Aap ek support ticket padh rahe hain aur woh ek line likh rahe hain jo triage agent ko chahiye” ek job hai. Job aur reader ka naam lene se output bahut badal jaata hai, aur mehnat bahut kam lagti hai.',
  'Give the same text a job description':
    'Wahi text, lekin ek job description ke saath',
  'Take a paragraph from your work and prompt it twice. Use a bare verb the first time. The second time, name the job and the reader.':
    'Apne kaam ka ek paragraph lijiye aur use do baar prompt kijiye. Pehli baar sirf ek seedha verb dijiye. Doosri baar job aur reader ka naam dijiye.',
  'The bare version gives a competent summary that shortens everything equally. The job version drops most of the text and keeps the part that matters for the decision. That’s because you said what the reader has to do next.':
    'Seedha version ek theek-thaak summary deta hai jo sab kuch barabar chhota kar deta hai. Job wala version zyadatar text hata deta hai aur sirf woh hissa rakhta hai jo decision ke liye zaroori hai. Kyunki aapne bataya tha ki reader ko aage kya karna hai.',
  'Technique 3: Break the job into steps':
    'Technique 3: Kaam ko steps mein todiye',
  'Some tasks have several parts. If you ask only for the finished result, the model does all the parts at once, and you can’t see how it got there. If you ask for the parts in order, it costs a few more tokens, but you get work you can check.':
    'Kuch tasks ke kai hisse hote hain. Agar aap sirf final result maangte hain, toh model saare hisse ek saath karta hai, aur aap dekh nahi paate ki woh wahan tak kaise pahuncha. Agar aap hisse order mein maangte hain, toh kuch zyada tokens lagte hain, lekin aapko aisa kaam milta hai jise aap check kar sakte hain.',
  'Ask for the steps':
    'Steps maangiye',
  'Ask for a judgement from your own field, such as whether a claim is complete or whether a request meets a policy. Ask directly first, then ask again in steps.':
    'Apne field ka koi judgement poochhiye, jaise koi claim complete hai ya nahi, ya koi request policy ko meet karti hai ya nahi. Pehle seedha poochhiye, phir wahi steps mein poochhiye.',
  'The verdict is often the same. The difference is that now you can see <em>why</em>, and you can check each step against the document. When the answer is wrong, you can point to the step that went wrong.':
    'Verdict aksar wahi rehta hai. Farq yeh hai ki ab aap dekh sakte hain ki <em>kyun</em>, aur har step ko document se check kar sakte hain. Jab jawaab galat ho, toh aap us step par ungli rakh sakte hain jahan galti hui.',
  'Steps don’t make the model smarter. They make its answer checkable, and that matters for anything a person has to stand behind.':
    'Steps model ko zyada smart nahi banate. Woh uske jawaab ko checkable banate hain, aur yeh har us cheez ke liye zaroori hai jiske peeche kisi insaan ko khade rehna padta hai.',
  'Technique 4: Forbid what you have seen go wrong':
    'Technique 4: Jo galat hote dekha hai, use mana kijiye',
  'The last technique is the weakest of the four. As Chapter 2 showed, an instruction discourages a behaviour but doesn’t prevent it. So write one or two prohibitions, and only for failures you have actually seen. Don’t stack up a long list.':
    'Yeh chaaron mein sabse kamzor technique hai. Jaisa Chapter 2 ne dikhaya, instruction kisi behaviour ko kam karta hai lekin rokta nahi. Isliye ek ya do mana-karne wali baatein likhiye, aur sirf un failures ke liye jo aapne asal mein dekhe hain. Lambi list mat banaiye.',
  'Now try all four together, one after another. This is the most useful exercise in the chapter.':
    'Ab chaaron ko ek ke baad ek try kijiye. Is chapter ki sabse kaam ki exercise yahi hai.',
  'Take a real request you would give an AI at work. Write it four times, adding one technique each time: the job, then the steps, then a worked example, then one prohibition. After each version, note what changed.':
    'Koi asli request lijiye jo aap office mein kisi AI ko denge. Use chaar baar likhiye, har baar ek technique jodte hue: pehle job, phir steps, phir worked example, phir ek mana karne wali baat. Har version ke baad note kijiye ki kya badla.',
  'v1 the job … v2 the steps … v3 the example … v4 the one thing it must not do':
    'v1 job … v2 steps … v3 example … v4 woh ek cheez jo woh nahi kare',
  'Most people find that the worked example makes the biggest difference, the job description the second biggest, and the prohibition almost none. That’s the reverse of the order most people write them in. A first draft is usually a request plus a list of prohibitions. Also notice that version four is long. Every technique adds tokens, and you pay for those tokens on every call. Chapter 15 puts a number on that trade-off.':
    'Zyadatar logon ko lagta hai ki worked example sabse bada farq laata hai, job description doosra, aur mana karne wali baat lagbhag koi nahi. Yeh us order ka ulta hai jisme log inhe aksar likhte hain. Pehla draft aksar ek request plus mana karne wali baaton ki list hota hai. Yeh bhi dekhiye ki version 4 lamba hai. Har technique tokens badhati hai, aur un tokens ka paisa aap har call par dete hain. Chapter 15 is trade-off ko ek number deta hai.',
  'Here’s what you’ve learned. A prompt is a specification, and a good one has four parts. Use them in this order of impact:':
    'Aapne yeh seekha. Prompt ek specification hai, aur ek achhe prompt ke chaar hisse hote hain. Unhe asar ke is order mein use kijiye:',
  'Show an example, name the job, break it into steps, and forbid only what you have seen go wrong.':
    'Example dikhaiye, job ka naam lijiye, kaam ko steps mein todiye, aur sirf woh mana kijiye jo aapne galat hote dekha hai.',
  'You now have four versions of a prompt and a feeling that one of them is best. But a feeling based on reading a few outputs is weak evidence, as Chapter 2 showed. Next, you’ll learn how to measure which version is really better.':
    'Ab aapke paas ek prompt ke chaar versions hain aur ek ehsaas ki inme se ek sabse achha hai. Lekin kuch outputs padhkar bana ehsaas kamzor saboot hai, jaisa Chapter 2 ne dikhaya. Agle chapter mein aap seekhenge ki kaun sa version sach mein behtar hai, yeh measure kaise karte hain.',
  'Improve the instructions until a stranger can use them':
    'Instructions ko tab tak behtar kijiye jab tak koi anjaan insaan unhe use kar sake',
  'Your system prompt from Chapter 2 works for you, because you know what you meant. A good prompt works for someone else without any explanation. In this chapter you learned four techniques: describe the reader and the job, show worked examples, break the task into steps, and add a few firm “never” rules. Now you’ll apply them to the context judge’s prompt and test the result on another person.':
    'Chapter 2 ka aapka system prompt aapke liye kaam karta hai, kyunki aapko pata hai ki aapka matlab kya tha. Ek achha prompt kisi doosre ke liye bhi bina kisi explanation ke kaam karta hai. Is chapter mein aapne chaar techniques seekhi: reader aur job describe karna, worked examples dena, task ko steps mein todna, aur kuch pakki “never” rules jodna. Ab aap inhe context judge ke prompt par lagayenge aur result ko kisi doosre insaan par test karenge.',
  'Your <code>chapter-2-1</code> notebook. Write and run the prompt there. The notes box below is for what the other person said when they tried it without help.':
    'Aapka <code>chapter-2-1</code> notebook. Prompt wahin likhiye aur chalaiye. Neeche ka notes box isliye hai ki doosre insaan ne bina madad ke use try kiya toh unhone kya kaha, woh wahan likh sakein.',
  'Open your Chapter 2 system prompt in your <code>chapter-2-1</code> notebook and run it on starter sentences 4, 5 and 8 to see where it is weakest.':
    'Apne <code>chapter-2-1</code> notebook mein Chapter 2 ka system prompt kholiye aur use starter sentences 4, 5 aur 8 par chalaiye, taaki dikhe ki woh kahan sabse kamzor hai.',
  'Add a short description of who reads the answer and what they do with it. For example: “A developer’s program reads your answer and decides whether to hide each item.”':
    'Ek chhota sa description jodiye ki jawaab kaun padhta hai aur woh us ka kya karta hai. Jaise: “Ek developer ka program aapka jawaab padhta hai aur decide karta hai ki har item ko hide karna hai ya nahi.”',
  'Add two worked examples: one ordinary (starter sentence 3) and one awkward (starter sentence 4, where the mobile number is already partly hidden). For each one, write out the answer you want, exactly as it should appear.':
    'Do worked examples jodiye: ek aam (starter sentence 3) aur ek mushkil (starter sentence 4, jahan mobile number pehle se aadha hidden hai). Har ek ke liye woh jawaab likhiye jo aap chahte hain, bilkul waise jaisa woh dikhna chahiye.',
  'Add the steps in the order a careful person would take them. First look for numbers with a fixed shape, then names and places, then anything that points to one person without an ID.':
    'Steps wahi order mein jodiye jisme ek dhyaan se kaam karne wala insaan karega. Pehle fixed shape wale numbers dhoondhiye, phir naam aur jagahein, phir woh sab jo bina ID ke kisi ek insaan ki taraf ishaara karta hai.',
  'Add at most two “never” rules, and only for failures you have actually seen. For example: “Never list a number that is already masked with x or *.”':
    'Zyada se zyada do “never” rules jodiye, aur sirf un failures ke liye jo aapne asal mein dekhe hain. Jaise: “Aisa number kabhi list mat karo jo pehle se x ya * se masked hai.”',
  'Give the improved prompt and five starter sentences to a friend or colleague. Ask them to run it without any explanation from you, and write down anything that confused them.':
    'Improved prompt aur paanch starter sentences kisi dost ya colleague ko dijiye. Unse kahiye ki woh aapki taraf se bina kisi explanation ke use chalayein, aur jo bhi unhe confusing laga woh likh lein.',
  'Write one line for each of the four techniques, saying what difference it made.':
    'Chaaron techniques mein se har ek ke liye ek line likhiye ki usne kya farq daala.',
  'Your improved prompt, with the reader, two examples, the steps and no more than two “never” rules.':
    'Aapka improved prompt, jisme reader, do examples, steps aur zyada se zyada do “never” rules hon.',
  'The answers on starter sentences 4, 5 and 8, before and after.':
    'Starter sentences 4, 5 aur 8 par jawaab, pehle aur baad.',
  'What your friend or colleague found confusing.':
    'Aapke dost ya colleague ko kya confusing laga.',
  'One line for each technique, saying what it changed.':
    'Har technique ke liye ek line ki usne kya badla.',

  /* ---- ch22: Testing prompts: build a small test set ---- */
  'Testing prompts: build a small test set':
    'Prompts ko test kijiye: ek chhota test set banaiye',
  'Reading a few outputs is not a reliable way to choose between prompts. In this chapter you’ll build a ten-row test set from real inputs, score each prompt version against it, and change one thing at a time.':
    'Kuch outputs padhkar prompts ke beech chunna bharosemand tareeka nahi hai. Is chapter mein aap asli inputs se 10 rows ka test set banayenge, har prompt version ko uske against score karenge, aur ek baar mein sirf ek cheez badlenge.',
  'Four prompt techniques':
    'Prompt ki chaar techniques',
  'You have four versions of one prompt, and no way yet to choose between them.':
    'Aapke paas ek prompt ke chaar versions hain, aur abhi inme se chunne ka koi tareeka nahi hai.',
  'A confident answer is not evidence':
    'Confident jawaab saboot nahi hota',
  'Fluent text is not proof of a correct answer.':
    'Fluent text ka matlab yeh nahi ki jawaab sahi hai.',
  'You’ll run one prompt many times.':
    'Aap ek hi prompt ko kai baar chalayenge.',
  'Build a small test set for a prompt in under half an hour, from real inputs.':
    'Asli inputs se, aadhe ghante se kam mein, kisi prompt ke liye ek chhota test set bana paana.',
  'Change one thing at a time and measure whether it helped.':
    'Ek baar mein ek hi cheez badal paana aur measure kar paana ki usse madad mili ya nahi.',
  'Explain why a prompt that looked better in a demo often is not.':
    'Samjha paana ki demo mein behtar dikhne wala prompt aksar behtar kyun nahi hota.',
  'Open a notebook called <code>chapter-2-2</code>, and bring the four prompt versions from the last chapter. You’ll find out which one is actually better, and it may not be the one that felt better.':
    '<code>chapter-2-2</code> naam ka ek notebook kholiye, aur pichhle chapter ke chaaron prompt versions saath rakhiye. Aap pata lagayenge ki asal mein kaun sa behtar hai, aur ho sakta hai woh wahi na ho jo aapko behtar laga tha.',
  'At the end of the last chapter you had four versions of a prompt and a feeling about which was best. This chapter turns that feeling into something you can check. You’ll build a small test set, score every version against it, and then improve the best one carefully.':
    'Pichhle chapter ke end mein aapke paas prompt ke chaar versions the aur ek ehsaas ki kaun sa sabse achha hai. Yeh chapter us ehsaas ko aisi cheez banata hai jise aap check kar sakte hain. Aap ek chhota test set banayenge, har version ko usse score karenge, aur phir sabse achhe version ko dhyaan se behtar karenge.',
  'Why reading a few outputs misleads you':
    'Kuch outputs padhna aapko galat raaste par kyun le jaata hai',
  'First, let’s see the problem for yourself. You’ll run one prompt on the same input several times and look at what comes back.':
    'Pehle problem ko khud dekhiye. Aap ek hi prompt ko ek hi input par kai baar chalayenge aur dekhenge ki kya wapas aata hai.',
  'Run one prompt five times':
    'Ek prompt ko paanch baar chalaiye',
  'Take your best prompt from the last chapter and run it on the <em>same input</em> five times. Print all five outputs.':
    'Pichhle chapter ka apna sabse achha prompt lijiye aur use <em>ek hi input</em> par paanch baar chalaiye. Paanchon outputs print kijiye.',
  'The five outputs differ. The wording changes, sometimes the emphasis changes, and occasionally the answer itself is different. If one prompt varies this much, then comparing two prompts on one output each tells you very little.':
    'Paanchon outputs alag hote hain. Wording badalti hai, kabhi emphasis badalta hai, aur kabhi jawaab hi alag aa jaata hai. Agar ek hi prompt itna badalta hai, toh do prompts ko sirf ek-ek output par compare karne se bahut kam pata chalta hai.',
  'Each output is one sample from a range of possible outputs. Judging a prompt from one sample is not reliable.':
    'Har output possible outputs ki range mein se sirf ek sample hai. Sirf ek sample dekhkar kisi prompt ko judge karna bharosemand nahi hai.',
  'The fix is a small test set. It’s a handful of real inputs, and for each one, a note on what a good answer looks like. Chapter 6 builds a bigger version for retrieval. This one takes about twenty minutes.':
    'Iska hal ek chhota test set hai. Yeh kuch asli inputs ka set hota hai, aur har input ke saath ek note ki achha jawaab kaisa dikhta hai. Chapter 6 retrieval ke liye isse bada version banata hai. Yeh wala lagbhag 20 minute leta hai.',
  'Build the test set':
    'Test set banaiye',
  'A test set doesn’t need to be fancy. Ten rows are enough to start. What matters is that the inputs are real and that you write down what “good” means before you look at the results.':
    'Test set ko fancy hone ki zaroorat nahi. Shuru karne ke liye 10 rows kaafi hain. Zaroori yeh hai ki inputs asli hon, aur result dekhne se pehle aap likh lein ki “achha” ka matlab kya hai.',
  'Build a ten-row test set':
    '10 rows ka test set banaiye',
  'Collect ten real inputs for your task, including the two messiest you can find. Don’t invent them. For each one, write down the two or three things a good answer must contain. You don’t need the exact words. Aim for this mix:':
    'Apne task ke liye 10 asli inputs jama kijiye, jisme sabse gande-uljhe do inputs bhi hon. Unhe khud se mat banaiye. Har ek ke liye woh do-teen cheezein likhiye jo ek achhe jawaab mein honi chahiye. Exact words ki zaroorat nahi. Is mix ka dhyaan rakhiye:',
  'Six ordinary cases, chosen without looking at how the prompt does on them.':
    'Chhe aam cases, jinhe aapne yeh dekhe bina chuna ki prompt unpar kaisa chal raha hai.',
  'Two awkward ones, with missing information, an unusual format or the wrong language.':
    'Do mushkil cases, jinme koi information missing ho, format ajeeb ho ya language galat ho.',
  'Two that should be refused or escalated rather than answered.':
    'Do cases jinka jawaab dene ki jagah unhe mana ya escalate kiya jaana chahiye.',
  'You now have a ten-row table: each input, and what a good answer must contain. This table is the most useful thing you’ll make in this chapter. The rest of the chapter runs prompts against it.':
    'Ab aapke paas 10 rows ki ek table hai: har input, aur ek achhe jawaab mein kya hona chahiye. Is chapter mein aap jo banayenge, usme yeh table sabse kaam ki cheez hai. Chapter ka baaki hissa prompts ko isi table par chalata hai.',
  'With the table ready, you can finally compare your four versions fairly.':
    'Table taiyaar hai, toh ab aap apne chaaron versions ko sahi tareeke se compare kar sakte hain.',
  'Score all four versions':
    'Chaaron versions ko score kijiye',
  'Run each of your four prompt versions on all ten inputs. Mark each output pass or fail against what you wrote down. That’s forty quick judgements by hand.':
    'Apne chaaron prompt versions ko saare 10 inputs par chalaiye. Jo aapne likha tha, uske against har output ko pass ya fail mark kijiye. Yeh haath se 40 tez judgements hain.',
  'The ranking is often not the one you expected, and the gap between best and worst is often smaller than it felt. The versions differ most on the two refusal rows, and those are the cases people rarely show in a demo.':
    'Ranking aksar woh nahi hoti jo aapne socha tha, aur sabse achhe aur sabse kharab ke beech ka gap aksar utna bada nahi hota jitna lagta tha. Versions mein sabse zyada farq do refusal rows par dikhta hai, aur yahi woh cases hain jo log demo mein shaayad hi dikhate hain.',
  'Change one thing at a time':
    'Ek baar mein ek hi cheez badaliye',
  'Once you have a best version, you’ll want to improve it. Here the temptation is to fix everything at once. Before you do, think about what that would tell you.':
    'Jab aapke paas ek best version aa jaaye, toh aap use behtar karna chahenge. Yahan lalach hota hai ki sab kuch ek saath theek kar do. Aisa karne se pehle sochiye ki usse aapko kya pata chalega.',
  'What goes wrong':
    'Kya galat hota hai',
  'Make a prediction. You change the job description, add a third example and drop a prohibition, all at once. The score improves. What have you learned?':
    'Ek andaaza lagaiye. Aap job description badalte hain, teesra example jodte hain aur ek prohibition hata dete hain, sab ek saath. Score behtar ho jaata hai. Aapne kya seekha?',
  'Only that the combination is better. You don’t know which change helped. One of the three may even be making things worse while the other two make up for it.':
    'Sirf yeh ki combination behtar hai. Aapko nahi pata ki kaun si change se madad mili. Ho sakta hai teen mein se ek change cheezein bigaad rahi ho aur baaki do usse bharpai kar rahi hon.',
  'So change one thing, rerun and record the score. It’s slower, but it’s the only way to know what helped. When someone says they “tuned the prompt”, ask how many things they changed at once.':
    'Isliye ek cheez badaliye, dobara chalaiye aur score note kijiye. Yeh dheema hai, lekin yahi ek tareeka hai jisse pata chalta hai ki kya kaam aaya. Jab koi kahe ki unhone “prompt tune kiya”, toh poochhiye ki ek saath kitni cheezein badli thi.',
  'Make one change and rescore':
    'Ek change kijiye aur dobara score kijiye',
  'Take the best version. Make exactly one change, such as swapping one example for a better one. Rerun all ten inputs and record the new score next to the old one.':
    'Sabse achha version lijiye. Bilkul ek change kijiye, jaise ek example ko behtar example se badalna. Saare 10 inputs dobara chalaiye aur naya score purane score ke saath note kijiye.',
  'The score moved, or it didn’t. Both are useful results. If a change doesn’t move the score on ten real inputs, you can remove it, and that makes the prompt cheaper on every call.':
    'Score hila, ya nahi hila. Dono hi kaam ke results hain. Agar 10 asli inputs par koi change score nahi hilati, toh aap use hata sakte hain, aur isse prompt har call par sasta ho jaata hai.',
  'Keep the table. When your provider updates the model, rerun it. You’ll find out in an afternoon whether anything broke, instead of hearing about it from a customer.':
    'Table sambhaal kar rakhiye. Jab aapka provider model update kare, toh ise dobara chalaiye. Aapko ek dopahar mein pata chal jayega ki kuch toota ya nahi, kisi customer se sunne ki jagah.',
  'You now have a prompt chosen on evidence, and a way to recheck it whenever something changes. Many teams that ship AI features don’t have this.':
    'Ab aapke paas saboot ke saath chuna hua prompt hai, aur jab bhi kuch badle toh use dobara check karne ka tareeka. AI features ship karne wali bahut si teams ke paas yeh nahi hota.',
  'There is one limit, though. Everything so far works on text you paste into the prompt. Sometimes the answer depends on a document that’s too big to paste, such as a policy, a contract or a handbook. Then none of these techniques help, because the model never sees the document. Chapter 3 starts on that problem.':
    'Ek limit zaroor hai. Ab tak sab kuch us text par chalta hai jo aap prompt mein paste karte hain. Kabhi jawaab ek aise document par depend karta hai jo paste karne ke liye bahut bada hai, jaise policy, contract ya handbook. Tab inme se koi technique madad nahi karti, kyunki model ko woh document kabhi dikhta hi nahi. Chapter 3 isi problem se shuru hota hai.',
  'Build the answer key (version 1)':
    'Answer key banaiye (version 1)',
  'Everything in this project is measured against one test file, the answer key. In this chapter you learned to build a small test set from real inputs, to change one thing at a time, and to score each change. Now you’ll build version 1 of the answer key from the ten starter sentences, and use it to choose between versions of your prompt.':
    'Is project mein sab kuch ek test file ke against measure hota hai, yaani answer key. Is chapter mein aapne seekha ki asli inputs se ek chhota test set kaise banate hain, ek baar mein ek cheez kaise badalte hain, aur har change ko kaise score karte hain. Ab aap 10 starter sentences se answer key ka version 1 banayenge, aur use apne prompt ke versions ke beech chunne ke liye use karenge.',
  'Your <code>chapter-2-2</code> notebook for scoring. The answer key itself is a spreadsheet that you save in your repository.':
    'Scoring ke liye aapka <code>chapter-2-2</code> notebook. Answer key khud ek spreadsheet hai jo aap apne repository mein save karenge.',
  'Open the project page and copy the ten starter sentences into a spreadsheet. Add the columns described under “The answer key”: number, kind of writing, sentence, what should be found, what should happen, and a note.':
    'Project page kholiye aur 10 starter sentences ko ek spreadsheet mein copy kijiye. “The answer key” ke neeche bataye gaye columns jodiye: number, kind of writing, sentence, kya milna chahiye, kya hona chahiye, aur ek note.',
  'For each row, write by hand what should be found (the kind and the exact words) and what should happen to it: remove it, mask it, or leave the sentence alone. Starter sentence 9 should say “nothing found”.':
    'Har row ke liye haath se likhiye ki kya milna chahiye (uska kind aur exact words) aur uske saath kya hona chahiye: hata dena, mask kar dena, ya sentence ko waise hi chhod dena. Starter sentence 9 mein “nothing found” likha hona chahiye.',
  'Add two more rows of your own that are messy. For example, a sentence with a spelling mistake in the word “Aadhaar”, and a sentence in which a number is split by spaces. Now you have twelve rows.':
    'Apni taraf se 2 aur uljhi hui rows jodiye. Jaise, ek sentence jisme “Aadhaar” word ki spelling galat ho, aur ek sentence jisme koi number spaces se toot gaya ho. Ab aapke paas 12 rows hain.',
  'Save the spreadsheet as <code>evals/answer-key-v1.csv</code> in your repository.':
    'Spreadsheet ko apne repository mein <code>evals/answer-key-v1.csv</code> naam se save kijiye.',
  'Run your improved prompt from Chapter 2.1 on all twelve rows. Give one point for each row where the tool found everything and nothing extra. Write the score out of twelve. This is your baseline.':
    'Chapter 2.1 ka apna improved prompt saari 12 rows par chalaiye. Har us row ke liye 1 point dijiye jahan tool ne sab kuch dhoondha aur kuch extra nahi dhoondha. Score 12 mein se likhiye. Yeh aapki baseline hai.',
  'Make three changes to the prompt, one at a time, and score again after each. Write all four scores in a small table.':
    'Prompt mein teen changes kijiye, ek-ek karke, aur har change ke baad dobara score kijiye. Chaaron scores ek chhoti table mein likhiye.',
  'Find one change that made no difference and remove it. Write how much that saves per call. Then run the best prompt with a cheaper, smaller model and note which rows now fail.':
    'Ek aisi change dhoondhiye jisse koi farq nahi pada, aur use hata dijiye. Likhiye ki isse har call par kitni bachat hui. Phir sabse achha prompt ek sasste, chhote model ke saath chalaiye aur note kijiye ki ab kaun si rows fail hoti hain.',
  'Write half a page for a colleague: your prompt, its score, and the two rows it still gets wrong.':
    'Ek colleague ke liye aadha page likhiye: aapka prompt, uska score, aur woh do rows jo woh ab bhi galat karta hai.',
  'The answer key, version 1, with twelve labelled rows, saved in your repository.':
    'Answer key, version 1, 12 labelled rows ke saath, aapke repository mein save.',
  'A table with the baseline score and the three changes.':
    'Ek table jisme baseline score aur teen changes hon.',
  'The result with a cheaper model, and the rows that failed.':
    'Sasta model ke saath ka result, aur jo rows fail huin.',
  'A half-page note with the prompt, the score and the two rows it still gets wrong.':
    'Aadhe page ka note jisme prompt, score aur woh do rows hon jo woh ab bhi galat karta hai.',

  /* ---- ch23: The five task types: classify, extract, summarise, rewrite, generate ---- */
  'The five task types: classify, extract, summarise, rewrite, generate':
    'Paanch task types: classify, extract, summarise, rewrite, generate',
  'Almost every request for AI falls into one of five task types. The type decides whether you can measure the result automatically, so name it before you design anything.':
    'AI se maangi jaane wali lagbhag har request paanch task types mein se ek hoti hai. Type yeh tay karta hai ki aap result ko automatically measure kar sakte hain ya nahi, isliye kuch bhi design karne se pehle uska naam lijiye.',
  'A prompt is a specification':
    'Prompt ek specification hai',
  'Four techniques shape what comes back.':
    'Chaar techniques tay karti hain ki wapas kya aata hai.',
  'A test set, and one change at a time':
    'Ek test set, aur ek baar mein ek change',
  'This is how you tell a better prompt from a different one.':
    'Isi se aap pehchante hain ki prompt behtar hai ya sirf alag.',
  'Name which of the five task types a request is before you design anything.':
    'Kuch bhi design karne se pehle bata paana ki koi request paanch task types mein se kaun si hai.',
  'Explain why two of the types can be graded automatically and three cannot.':
    'Samjha paana ki paanch mein se do types ko automatically grade kiya ja sakta hai aur teen ko nahi.',
  'Split a vague request into the narrowest task types that still solve the problem.':
    'Ek vague request ko sabse chhote task types mein tod paana jo phir bhi problem solve kar dein.',
  'There’s no new setup. Bring the test set from Chapter 2.2. You’ll see why its rows were easy to grade.':
    'Koi naya setup nahi hai. Chapter 2.2 ka test set saath rakhiye. Aap dekhenge ki uski rows ko grade karna aasaan kyun tha.',
  'In the last chapter you built a test set and used it to compare prompts. Its rows were easy to mark pass or fail. That wasn’t luck. It depended on the kind of task you gave the model, and this chapter shows you how to tell the kinds apart.':
    'Pichhle chapter mein aapne ek test set banaya aur usse prompts compare kiye. Uski rows ko pass ya fail mark karna aasaan tha. Yeh sirf kismat nahi thi. Yeh is par depend karta tha ki aapne model ko kis tarah ka task diya tha, aur yeh chapter aapko un tarah ko pehchanna sikhata hai.',
  'People usually describe AI requests as outcomes: <em>Can the AI handle our inbox? Can it help with contracts? Can it make the team faster?</em> None of those is a task yet. Underneath almost every one is one of five task types. And the type matters more than which model you pick.':
    'Log AI ki requests aksar outcomes ki tarah bolte hain: <em>Kya AI hamara inbox sambhal sakta hai? Kya woh contracts mein madad kar sakta hai? Kya woh team ko tez bana sakta hai?</em> Inme se koi bhi abhi task nahi hai. Lagbhag har ek ke neeche paanch task types mein se ek hota hai. Aur type is baat se zyada zaroori hai ki aap kaun sa model chunte hain.',
  'Choose the task type first. It takes one sentence, and it’s the design decision most often skipped.':
    'Pehle task type chuniye. Isme ek sentence lagta hai, aur yahi woh design decision hai jo sabse zyada baar chhoot jaata hai.',
  'The five types':
    'Paanch types',
  'Here are the five types. Read the last column closely, because it’s the one that matters most for your work. It tells you whether a program can mark the answer, or whether a person has to.':
    'Yeh rahe paanch types. Aakhri column dhyaan se padhiye, kyunki aapke kaam ke liye wahi sabse zaroori hai. Yeh batata hai ki jawaab ko koi program mark kar sakta hai, ya kisi insaan ko karna padega.',
  'Task type':
    'Task type',
  'What it does':
    'Kya karta hai',
  'Can a program grade it?':
    'Kya program ise grade kar sakta hai?',
  '<strong>Classify</strong>':
    '<strong>Classify</strong>',
  'Put the input into one of a set of categories':
    'Input ko categories ke ek set mein se kisi ek mein daalna',
  'Yes: there is a right answer':
    'Haan: ek sahi jawaab hota hai',
  '<strong>Extract</strong>':
    '<strong>Extract</strong>',
  'Pull specific fields out of the input':
    'Input mein se khaas fields nikaalna',
  'Yes: the value is in the document or it is not':
    'Haan: value ya toh document mein hai ya nahi hai',
  '<strong>Summarise</strong>':
    '<strong>Summarise</strong>',
  'Make it shorter without losing what matters':
    'Ise chhota karna, bina zaroori baatein khoye',
  'No: it depends on the reader':
    'Nahi: yeh reader par depend karta hai',
  '<strong>Rewrite</strong>':
    '<strong>Rewrite</strong>',
  'Keep the meaning, change the form or tone':
    'Matlab waisa hi rakhna, form ya tone badalna',
  'No, but you can check what must not change':
    'Nahi, lekin aap check kar sakte hain ki kya nahi badalna chahiye',
  '<strong>Generate</strong>':
    '<strong>Generate</strong>',
  'Produce something new':
    'Kuch naya banana',
  'No, and most projects start here':
    'Nahi, aur zyadatar projects yahin se shuru hote hain',
  'Classify and extract have right answers. That means you can measure them on the first day. The other three need a person, or a carefully checked process, to judge the output.':
    'Classify aur extract ke sahi jawaab hote hain. Matlab aap unhe pehle din se measure kar sakte hain. Baaki teen ke liye output judge karne ko ek insaan chahiye, ya ek dhyaan se check kiya hua process.',
  'Now try this on requests you know. It’s easier to feel the difference with real examples than with definitions.':
    'Ab yeh un requests par try kijiye jinhe aap jaante hain. Definitions se zyada, asli examples se farq mehsoos hota hai.',
  'Sort real requests into the five types':
    'Asli requests ko paanch types mein sort kijiye',
  'Write down six things people at your work have asked AI to do. Use their words, including the vague ones. Then put each one into one of the five types.':
    'Aapke office mein logon ne AI se jo 6 kaam karne ko kaha hai, woh likhiye. Unke hi words use kijiye, vague wale bhi. Phir har ek ko paanch types mein se kisi ek mein daaliye.',
  'Two things usually happen. Several requests turn out to be the same type in different words. And at least one doesn’t fit any single type, which means it’s really two or three tasks combined.':
    'Aksar do cheezein hoti hain. Kai requests alag words mein ek hi type nikalti hain. Aur kam se kam ek request kisi ek type mein fit nahi hoti, matlab woh asal mein do-teen tasks ka mix hai.',
  'If a request doesn’t fit one type, split it into steps until each step does.':
    'Agar koi request ek type mein fit nahi hoti, toh use steps mein todiye jab tak har step fit na ho jaaye.',
  'Split mixed requests into steps':
    'Mixed requests ko steps mein todiye',
  'Take “handle the inbox”. It usually hides three tasks. You <em>classify</em> the message by type, you <em>extract</em> the account number, and you <em>generate</em> a draft reply. Each step fails in a different way, and only the first two can be measured without a person reading the output.':
    '“Inbox sambhalo” ko lijiye. Isme aksar teen tasks chhupe hote hain. Aap message ko type ke hisaab se <em>classify</em> karte hain, account number <em>extract</em> karte hain, aur reply ka ek draft <em>generate</em> karte hain. Har step alag tarah se fail hota hai, aur sirf pehle do ko bina kisi insaan ke output padhe measure kiya ja sakta hai.',
  'Split the request that did not fit':
    'Jo request fit nahi hui, use todiye',
  'Take the request that didn’t fit a single type. Break it into steps, each with exactly one type, in the order they would run.':
    'Woh request lijiye jo kisi ek type mein fit nahi hui. Use steps mein todiye, har step mein bilkul ek type, aur us order mein jisme woh chalenge.',
  'You get three or four steps. Usually only the last step is hard to measure. The earlier steps are classification and extraction, which are cheap and checkable. When they’re reliable, the last step has an easier job.':
    'Aapko teen ya chaar steps milenge. Aksar sirf aakhri step measure karna mushkil hota hai. Pehle ke steps classification aur extraction hote hain, jo sasta aur checkable hain. Jab woh bharosemand ho jaate hain, toh aakhri step ka kaam aasaan ho jaata hai.',
  'This also lowers cost. A classification step can run on a small, cheap model. Only the last step needs an expensive model, and only for the cases that reach it.':
    'Isse cost bhi kam hoti hai. Classification wala step ek chhote, sasste model par chal sakta hai. Sirf aakhri step ko mehnga model chahiye, aur woh bhi sirf un cases ke liye jo wahan tak pahunchte hain.',
  'Let’s test your eye on one more example before the summary.':
    'Summary se pehle ek aur example par apni nazar test karte hain.',
  'Which type, and what changes':
    'Kaun sa type, aur kya badalta hai',
  'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?':
    'Ek colleague kehta hai: “Ek AI chahiye jo contracts review kare aur risky clauses flag kare.” Yeh kaun sa task type hai?',
  'Mostly classify, with extract underneath. Each clause goes into a category, such as standard, unusual or missing, and the risky clauses have their text extracted to show. Very little of it is generation.':
    'Zyadatar classify, aur uske neeche extract. Har clause ek category mein jaata hai, jaise standard, unusual ya missing, aur risky clauses ka text dikhane ke liye extract kiya jaata hai. Isme generation bahut kam hai.',
  'That changes how you build it. Classification has right answers, so you can build an answer key from a hundred clauses a lawyer has already reviewed, and measure quality before you ship. If you had built a generator instead, you’d have nothing to measure.':
    'Isse aap ise banate kaise hain, woh badal jaata hai. Classification ke sahi jawaab hote hain, isliye aap 100 aise clauses se answer key bana sakte hain jinhe ek lawyer pehle hi review kar chuka hai, aur ship karne se pehle quality measure kar sakte hain. Agar aapne uski jagah generator banaya hota, toh aapke paas measure karne ko kuch nahi hota.',
  'So the habit to keep is a simple one. Before you ask which model to use, ask which task type you’re dealing with.':
    'Toh yaad rakhne wali aadat simple hai. Model kaun sa use karna hai, yeh poochhne se pehle poochhiye ki task type kaun sa hai.',
  'Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.':
    '“Kaun sa task type?” pehle poochhiye, “kaun sa model?” baad mein. Agar jawaab mein ek se zyada type aayein, toh request ko steps mein todiye.',
  'The next two chapters cover the two types you’ll meet most often. Chapter 2.4 covers classification, the type with a right answer.':
    'Agle do chapters un do types ke baare mein hain jo aapko sabse zyada milenge. Chapter 2.4 classification se shuru hota hai, woh type jiska sahi jawaab hota hai.',
  'Break the whole tool down into small tasks':
    'Poore tool ko chhote tasks mein todiye',
  '“Find and hide personal details” sounds like one job. It’s really several different jobs, and each one needs a different kind of test. In this chapter you learned the five task types (sorting into categories, picking out pieces, summarising, rewriting and writing something new) and which of them a computer can mark automatically. Now you’ll break Bharat Privacy Guard down in that way.':
    '“Personal details dhoondho aur hide karo” ek job lagti hai. Asal mein yeh kai alag jobs hain, aur har ek ko alag tarah ka test chahiye. Is chapter mein aapne paanch task types seekhe (categories mein sort karna, pieces nikaalna, summarise karna, rewrite karna aur kuch naya likhna) aur yeh bhi ki inme se kaun se ko computer automatically mark kar sakta hai. Ab aap Bharat Privacy Guard ko isi tareeke se todenge.',
  'Written only: pen and paper, or a document. No new code. You can look at your answer key for examples.':
    'Sirf likhna hai: pen aur paper par, ya ek document mein. Koi naya code nahi. Examples ke liye aap apni answer key dekh sakte hain.',
  'Write the request in the plainest words: “Find and hide personal details in English, Hindi and Hinglish text before it reaches an AI model.” Do not tidy it up.':
    'Request ko sabse saade words mein likhiye: “Personal details ko English, Hindi aur Hinglish text mein dhoondhna aur hide karna, uske AI model tak pahunchne se pehle.” Use saaf-suthra mat banaiye.',
  'Write one sentence about what a developer using the tool wants to be different in their week.':
    'Ek sentence likhiye ki is tool ko use karne wala developer chahta hai ki uske hafte mein kya alag ho.',
  'Break the request into small steps, in the order they happen. For each step, write which of the five task types it is. For example, “decide whether a number is a PAN or an Aadhaar number” is sorting into categories; “pick out the exact words that are a name” is picking out pieces; “replace the details with [HIDDEN]” is rewriting.':
    'Request ko chhote steps mein todiye, us order mein jisme woh hote hain. Har step ke liye likhiye ki woh paanch task types mein se kaun sa hai. Jaise, “yeh decide karna ki koi number PAN hai ya Aadhaar number” categories mein sort karna hai; “un exact words ko pick out karna jo naam hain” pieces nikaalna hai; “details ko [HIDDEN] se replace karna” rewriting hai.',
  'Mark each step as one that has a clearly right answer (you can mark it automatically against the answer key) or one that needs a person’s judgement.':
    'Har step ko mark kijiye: kya uska saaf sahi jawaab hai (jise aap answer key ke against automatically mark kar sakte hain), ya use kisi insaan ka judgement chahiye.',
  'For each step that has a right answer, say where the answer key comes from: who decides what is correct, and on what basis.':
    'Jis step ka sahi jawaab hai, uske liye likhiye ki answer key kahan se aati hai: kaun decide karta hai ki kya sahi hai, aur kis basis par.',
  'Write a short paragraph to your future self: which single step will you build first, and why is it the smallest useful piece?':
    'Apne aap ko ek chhota paragraph likhiye: aap sabse pehle kaun sa ek step banayenge, aur woh sabse chhota kaam ka hissa kyun hai?',
  'The request in the plainest words, and the one-sentence aim.':
    'Sabse saade words mein request, aur ek sentence ka aim.',
  'A list of small steps, each marked with its task type.':
    'Chhote steps ki ek list, har ek par uska task type likha ho.',
  'Each step marked as automatically markable or needing judgement, with the source of the answer key.':
    'Har step par mark ho ki woh automatically mark ho sakta hai ya judgement chahiye, aur answer key ka source bhi.',
  'The paragraph naming the first step to build and the reason.':
    'Woh paragraph jisme pehle banane wala step aur uski wajah ho.',

  /* ---- ch24: Classification: sorting inputs into categories ---- */
  'Classification: sorting inputs into categories':
    'Classification: inputs ko categories mein sort karna',
  'Classification means putting each input into one of a fixed set of categories. Because it has a right answer, you can measure it and improve it on purpose. In this chapter you’ll build a classifier, score it one category at a time, and decide which kind of error is cheaper.':
    'Classification matlab har input ko pehle se tay categories mein se ek mein daalna. Isme ek sahi jawaab hota hai, isliye aap ise measure bhi kar sakte hain aur soch-samajhkar behtar bhi bana sakte hain. Is chapter mein aap ek classifier banayenge, use category ke hisaab se score karenge, aur tay karenge ki kaunsi galti sasti hai.',
  'Five task types, and which have right answers':
    'Paanch task types, aur kinke jawaab sahi-galat hote hain',
  'Classification is the kind of task that can be graded, so it’s a good place to start measuring.':
    'Classification aisa task hai jise grade kiya ja sakta hai, isliye measure karna yahin se shuru karna theek rahega.',
  'A test set shows whether a change helped':
    'Test set se pata chalta hai ki change se fayda hua ya nahi',
  'Here your test set turns into an answer key with real numbers.':
    'Yahan aapka test set ek answer key ban jaata hai, asli numbers ke saath.',
  'You’ll run one classifier many times, so you need both ready.':
    'Aap ek hi classifier ko kai baar chalayenge, isliye dono pehle se ready rakhiye.',
  'Build a classifier for a real set of categories and measure it honestly.':
    'Categories ke ek asli set ke liye classifier bana paana, aur use imaandaari se measure kar paana.',
  'Find the category your system is worst at, and say what that costs the business.':
    'Woh category dhoondh paana jismein aapka system sabse kamzor hai, aur bata paana ki business ko uski kya keemat padti hai.',
  'Explain why an overall accuracy figure often hides the failure that matters.':
    'Samjha paana ki overall accuracy ka ek number aksar wahi failure chhupa leta hai jo asal mein matter karta hai.',
  'Open a notebook called <code>chapter-2-4</code> and run the warm-up cells. Also bring twenty real examples of something at your work that gets sorted into categories. It could be tickets by type, documents by department or requests by urgency.':
    '<code>chapter-2-4</code> naam ka ek notebook kholiye aur warm-up cells chalaiye. Saath mein apne kaam ki koi aisi cheez ke bees asli examples le aaiye jo categories mein sort hoti hai. Jaise type ke hisaab se tickets, department ke hisaab se documents, ya urgency ke hisaab se requests.',
  'In the last chapter you met the five task types. One of them, classification, is the easiest to grade, because each answer is either right or wrong. In this chapter you’ll build a small classifier and measure it properly. You’ll also learn why one overall score can fool you, and that matters whenever you judge an AI feature.':
    'Pichhle chapter mein aapne paanch task types dekhe. Unmein se classification ko grade karna sabse aasaan hai, kyunki har jawaab ya toh sahi hota hai ya galat. Is chapter mein aap ek chhota classifier banayenge aur use theek tareeke se measure karenge. Saath hi yeh bhi seekhenge ki ek overall score aapko kaise dhoka de sakta hai, aur AI feature ko judge karte waqt yeh bahut zaroori hai.',
  'Look again at your test set':
    'Apne test set ko ek baar phir dekhiye',
  'First, open the ten-row test set you made in Chapter 2.2. Look at the “good answer contains” column.':
    'Sabse pehle, Chapter 2.2 mein aapne jo ten-row test set banaya tha, use kholiye. “good answer contains” wala column dekhiye.',
  'If your task was classification or extraction, those rows are precise. Each one holds a value, a category or a yes. If it was summarisation, they are vague, and grading them took judgement. The difference comes from the task type, not from how well you wrote them.':
    'Agar aapka task classification ya extraction tha, toh woh rows ekdum precise hain. Har row mein ek value, ek category ya ek haan hai. Agar summarisation tha, toh woh vague hain, aur unhe grade karne mein judgement lagi. Yeh farq task type se aata hai, isse nahi ki aapne rows kitni achhi likhi.',
  'What classification is':
    'Classification kya hai',
  'Think of the person who sorts the post in an office. Every letter goes into exactly one pigeonhole. Classification is the same job. It puts each input into one of a fixed set of categories.':
    'Office mein dak sort karne wale insaan ko sochiye. Har chitthi ek hi pigeonhole mein jaati hai. Classification bhi yahi kaam hai. Yeh har input ko pehle se tay categories mein se ek mein daalta hai.',
  'Much of what useful software does is classification. A support ticket goes to billing or to technical help. An email is spam or not spam. The big advantage is that someone can say whether each answer was right.':
    'Kaam ke zyadatar software ka bahut bada hissa classification hi hota hai. Support ticket ya toh billing ke paas jaata hai ya technical help ke paas. Email ya toh spam hai ya spam nahi hai. Sabse badi khoobi yeh hai ki koi bata sakta hai ki har jawaab sahi tha ya nahi.',
  'When there is a right answer, you can count errors. When you can count errors, you can improve the system on purpose.':
    'Jahan sahi jawaab hota hai, wahan aap errors gin sakte hain. Aur jab errors gin sakte hain, toh system ko soch-samajhkar behtar bana sakte hain.',
  'Build a first version':
    'Pehla version banaiye',
  'Let’s build the simplest classifier we can, and see what goes wrong with it.':
    'Chaliye sabse simple classifier banate hain, aur dekhte hain ki usmein kya galat hota hai.',
  'Build the simplest classifier':
    'Sabse simple classifier banaiye',
  'Write the simplest possible version. It has the categories, one line of instruction, and no examples.':
    'Sabse simple version likhiye. Usmein categories hon, instructions ki ek line ho, aur koi example na ho.',
  'Most answers are right, and the wrong ones come in two kinds. Some are real misreadings. Others come back as <code>Billing.</code> or <code>the category is billing</code>. Those aren’t wrong, but your code can’t use them. You asked for a label and got a sentence.':
    'Zyadatar jawaab sahi aate hain, aur galat jawaab do tarah ke hote hain. Kuch asli galat padhne ke hote hain. Baaki <code>Billing.</code> ya <code>the category is billing</code> jaise aate hain. Yeh galat nahi hain, lekin aapka code inhe use nahi kar sakta. Aapne label maanga tha aur sentence mil gaya.',
  'Now fix the format. Use the technique from Chapter 2.1: show an example instead of describing it. Add two worked examples, and make one of them an awkward case. The format stops varying. Chapter 8 shows how to make other formats impossible, but two examples get you most of the way.':
    'Ab format theek kijiye. Chapter 2.1 wali technique use kijiye: batane ke bajaye example dikhaiye. Do worked examples jodiye, aur unmein se ek ko mushkil case rakhiye. Format badalna band ho jaata hai. Chapter 8 dikhata hai ki doosre formats ko impossible kaise banaya jaye, lekin do examples se hi aap kaafi door pahunch jaate hain.',
  'Measure each category separately':
    'Har category ko alag se measure kijiye',
  'Next comes the important step. It’s tempting to count how many answers were right out of twenty and stop there. But that single number can hide a lot, so you’ll count for each category instead.':
    'Ab sabse zaroori step aata hai. Bees mein se kitne jawaab sahi the, yeh gin kar ruk jaana bahut aasaan hai. Lekin woh ek number bahut kuch chhupa sakta hai, isliye aap har category ke liye alag count karenge.',
  'Score each category':
    'Har category ko score kijiye',
  'Grade all twenty against the answers you know. Count the results for each category, not just overall.':
    'Bees ke bees examples ko un jawaabon se grade kijiye jo aap jaante hain. Sirf overall nahi, har category ke results gin kar dekhiye.',
  'The overall figure looks good, yet one category is much worse than the rest. It’s usually the rarest category, or one whose boundary with another category is unclear.':
    'Overall figure achha dikhta hai, phir bhi ek category baaki sabse kaafi kharab nikalti hai. Aksar woh sabse rare category hoti hai, ya woh jiski boundary kisi doosri category se saaf nahi hoti.',
  'Report accuracy per category, not only overall. A system that is 92% right overall and 40% right on the urgent category is not good enough for urgent messages.':
    'Accuracy har category ke hisaab se report kijiye, sirf overall nahi. Jo system overall 92% sahi hai lekin urgent category mein sirf 40% sahi hai, woh urgent messages ke liye kaafi achha nahi hai.',
  'So you’ve found where the system is weakest. The next question is what that weakness actually costs, because that’s what a product person has to decide.':
    'Toh aapne dhoondh liya ki system sabse kamzor kahan hai. Ab agla sawaal yeh hai ki us kamzori ki asal mein kya keemat hai, kyunki yahi faisla ek product person ko lena padta hai.',
  'Take your worst category. Write what happens to a real person when a message in that category goes to the wrong place. Then write what happens in the other direction, when another message is wrongly put in that category.':
    'Apni sabse kharab category lijiye. Likhiye ki us category ka koi message galat jagah chala jaye toh ek asli insaan ke saath kya hota hai. Phir doosri taraf ka likhiye: jab koi aur message galti se us category mein daal diya jaye, toh kya hota hai.',
  'When a … is missed, … . When something is wrongly marked …, … .':
    'Jab koi … chhoot jaata hai, toh … . Jab kuch galti se … mark ho jaata hai, toh … .',
  'The two directions rarely cost the same. Missing an urgent complaint and wrongly flagging a routine one as urgent are both errors, but one is much cheaper. Once you know which, you can tune the system to lean the cheaper way, by making borderline cases fall into the safer category. That is a product decision, based on numbers, and it is yours to make.':
    'Dono taraf ki keemat aksar barabar nahi hoti. Urgent complaint ka chhoot jaana aur ek routine complaint ko galti se urgent flag kar dena, dono errors hain, lekin ek bahut sasti hai. Jab aap jaan lete hain ki kaunsi, toh system ko sasti wali taraf jhukane ke liye tune kar sakte hain, yaani borderline cases ko zyada safe category mein girne dekar. Yeh ek product decision hai, numbers par based, aur yeh faisla aapka hai.',
  'Most of this chapter wasn’t really about AI. An answer key, counts for each category, and a judgement about which error is cheaper are the same tools you’d use to evaluate a hiring process or a triage desk.':
    'Is chapter ka zyadatar hissa asal mein AI ke baare mein tha hi nahi. Ek answer key, har category ki counts, aur yeh judgement ki kaunsi galti sasti hai, yeh wahi tools hain jo aap hiring process ya triage desk ko evaluate karne ke liye use karte.',
  'Next, you’ll meet summarisation. It has no single right answer, which is exactly why many teams ship summarisers without knowing whether they work.':
    'Aage aap summarisation dekhenge. Uska koi ek sahi jawaab nahi hota, aur isi wajah se bahut saari teams summarisers ship kar deti hain bina jaane ki woh kaam karte hain ya nahi.',
  'Build a sorter for the kind of ID, and measure it':
    'ID kis kism ki hai, iske liye ek sorter banaiye aur use measure kijiye',
  'Sometimes the tool finds a string of digits and has to decide what it is. It could be an Aadhaar number, a bank account number, a phone number or a PIN code. That is a sorting job. In this chapter you learned to measure a sorter honestly, one category at a time, and to look for the category it is worst at. Here you build a sorter and test it.':
    'Kabhi tool ko digits ki ek string milti hai aur use tay karna hota hai ki woh kya hai. Woh Aadhaar number ho sakta hai, bank account number, phone number ya PIN code. Yeh sorting ka kaam hai. Is chapter mein aapne seekha ki sorter ko imaandaari se measure kaise karte hain, ek-ek category karke, aur sabse kamzor category kaise dhoondhte hain. Ab aap ek sorter banayenge aur use test karenge.',
  'Your <code>chapter-2-4</code> notebook. Build and measure the sorter there. Write the numbers for each category in the notes box below.':
    'Aapka <code>chapter-2-4</code> notebook. Sorter wahin banaiye aur measure kijiye. Har category ke numbers neeche notes box mein likhiye.',
  'Write down the categories: Aadhaar, PAN, mobile number, bank account, PIN code, and “something else”.':
    'Categories likh lijiye: Aadhaar, PAN, mobile number, bank account, PIN code, aur “something else”.',
  'Write twenty short examples, with at least three for each category. Use made-up values like those on the project page. Put some inside sentences (“call me on 9876543210”) and some on their own.':
    'Bees chhote examples likhiye, har category ke kam se kam teen. Project page par diye gaye jaise made-up values use kijiye. Kuch ko sentences ke andar rakhiye (“call me on 9876543210”) aur kuch ko akele.',
  'Write the instruction that tells a model to sort a piece of text into exactly one category and to answer with only the name of the category.':
    'Woh instruction likhiye jo model ko bataye ki text ke tukde ko bilkul ek category mein sort kare aur jawaab mein sirf category ka naam de.',
  'Run all twenty examples through the model, and record its answer next to the right answer.':
    'Bees ke bees examples model se chalwaiye, aur uska jawaab sahi jawaab ke saath likh lijiye.',
  'Count, for each category, how many it got right. Make a small table with these columns: category, examples, correct, wrong.':
    'Har category ke liye gin kar dekhiye ki kitne sahi nikle. Ek chhoti table banaiye jisme yeh columns hon: category, examples, correct, wrong.',
  'Find the category it is worst at. Write one sentence on what a mistake there would cost. For example, a bank account number treated as a PIN code would pass through unhidden.':
    'Woh category dhoondhiye jismein woh sabse kharab hai. Ek sentence likhiye ki wahan galti hone par kya keemat chukani padegi. Jaise, bank account number ko PIN code samajh liya gaya toh woh bina chhupe nikal jaayega.',
  'Decide whether the sorter is good enough to act alone, or whether it should only suggest an answer for another part to check. Give your reason using the numbers.':
    'Tay kijiye: sorter kya akele kaam karne ke liye kaafi achha hai, ya use sirf jawaab suggest karna chahiye aur check kisi doosre hisse ko karna chahiye? Numbers ke saath apni wajah likhiye.',
  'Twenty examples with the right answer next to each.':
    'Bees examples, har ek ke saath sahi jawaab.',
  'A table of examples, correct and wrong for each category.':
    'Har category ke liye examples, correct aur wrong ki table.',
  'The worst category, and the cost of a mistake in it.':
    'Sabse kharab category, aur usmein galti ki keemat.',
  'A decision with a reason: act alone, or only suggest.':
    'Wajah ke saath ek decision: akele kaam kare, ya sirf suggest kare.',

  /* ---- ch25: Summarisation: testing what a summary keeps ---- */
  'Summarisation: testing what a summary keeps':
    'Summarisation: summary ne kya rakha, yeh test karna',
  'A summary that drops the most important line can still read well, so this failure is easy to miss. In this chapter you’ll decide who a summary is for, and then build a test that checks whether the facts that matter survive.':
    'Jis summary mein sabse zaroori line chhoot gayi ho, woh bhi achhi padh sakti hai, isliye yeh failure pakadna mushkil hai. Is chapter mein aap tay karenge ki summary kis ke liye hai, aur phir ek aisa test banayenge jo check kare ki zaroori facts bache ya nahi.',
  'Some task types have no right answer':
    'Kuch task types ka koi sahi jawaab nahi hota',
  'Summarisation is the first one you meet.':
    'Summarisation aisa pehla task hai jisse aapka vaasta padta hai.',
  'Counting per category beats one overall number':
    'Category ke hisaab se gin-na ek overall number se behtar hai',
  'It’s the same idea, now applied where counting is harder.':
    'Yeh wahi idea hai, bas ab aise task par lagaya ja raha hai jahan gin-na zyada mushkil hai.',
  'You’ll summarise one document in several ways.':
    'Aap ek hi document ko kai tareeke se summarise karenge.',
  'Decide who a summary is for, and what they will do next, before writing the prompt.':
    'Prompt likhne se pehle tay kar paana ki summary kis ke liye hai, aur woh uske baad kya karega.',
  'Test a summariser for the failure that matters: what it left out.':
    'Summariser ko us failure ke liye test kar paana jo matter karta hai: usne kya chhod diya.',
  'Explain why “it reads well” tells you almost nothing about a summary.':
    'Samjha paana ki “it reads well” se summary ke baare mein lagbhag kuch pata nahi chalta.',
  'Open a notebook called <code>chapter-2-5</code>. Also bring one real document with something important buried in it. It could be a deadline, an exception, a liability or a number that someone would be upset to miss.':
    '<code>chapter-2-5</code> naam ka ek notebook kholiye. Saath mein ek asli document le aaiye jisme koi zaroori cheez chhupi ho. Woh deadline ho sakti hai, koi exception, koi liability, ya aisa number jise miss karne par koi naraaz ho jaye.',
  'In the last chapter you graded a classifier, where every answer was plainly right or wrong. Summaries are different. There is no single right answer, so it’s much harder to say whether one is good. In this chapter you’ll see how a summary can fail without anyone noticing, and then you’ll build a simple way to catch that failure.':
    'Pichhle chapter mein aapne ek classifier grade kiya, jahan har jawaab saaf taur par sahi ya galat tha. Summaries alag hoti hain. Unka koi ek sahi jawaab nahi hota, isliye yeh batana kaafi mushkil hai ki ek summary achhi hai ya nahi. Is chapter mein aap dekhenge ki summary bina kisi ko pata chale kaise fail ho sakti hai, aur phir us failure ko pakadne ka ek simple tareeka banayenge.',
  'How summaries fail':
    'Summaries kaise fail hoti hain',
  'Let’s start by watching a summary go wrong. Summarise a document the simplest way you can, and then look for the detail you buried in it.':
    'Chaliye pehle ek summary ko galat hote hue dekhte hain. Apne document ko sabse simple tareeke se summarise kijiye, aur phir woh detail dhoondhiye jo aapne usmein chhupayi thi.',
  'Summarise with a plain instruction':
    'Plain instruction se summarise kijiye',
  'Summarise your document with the simplest instruction. Then check whether the buried detail is in the summary.':
    'Apne document ko sabse simple instruction se summarise kijiye. Phir check kijiye ki chhupi hui detail summary mein hai ya nahi.',
  'You get a well-organised, fluent summary, and it often leaves out the buried detail. Nothing in it is false. It shortened every part of the document equally, but the important content was concentrated in one place.':
    'Aapko ek achhi tarah organised, fluent summary milti hai, aur aksar usmein chhupi hui detail nahi hoti. Usmein kuch bhi galat nahi hota. Usne document ke har hisse ko barabar chhota kar diya, lekin zaroori content ek hi jagah concentrated tha.',
  'A summary that lost the most important line looks exactly like one that kept it. You have to test for the missing detail directly.':
    'Jis summary mein sabse zaroori line kho gayi, woh bilkul waisi hi dikhti hai jaisi us summary jisme woh bachi hai. Chhuti hui detail ke liye aapko seedha test karna padta hai.',
  'Start from the reader':
    'Reader se shuru kijiye',
  'Think about how you’d summarise a long meeting. You’d say one thing to your manager and something quite different to a new joiner. A good summary depends on who is reading it.':
    'Sochiye ki aap ek lambi meeting ki summary kaise denge. Apne manager ko aap ek baat batayenge aur kisi naye joiner ko kaafi alag. Ek achhi summary is par depend karti hai ki use padhne wala kaun hai.',
  'So before you write a summarisation prompt, answer two questions: who reads this, and what will they do next? A summary is only good or bad for a particular reader and decision.':
    'Isliye summarisation prompt likhne se pehle do sawaalon ka jawaab dijiye: ise kaun padhega, aur woh uske baad kya karega? Summary tabhi achhi ya buri hoti hai jab ek khaas reader aur ek khaas decision ke liye dekhi jaye.',
  'Let’s see that happen with your own document.':
    'Chaliye ise apne document par hote hue dekhte hain.',
  'Summarise for three different readers':
    'Teen alag readers ke liye summarise kijiye',
  'Summarise the document three times, naming a different reader and decision each time.':
    'Document ko teen baar summarise kijiye, har baar ek alag reader aur decision ka naam lekar.',
  'You get three different summaries. The lawyer’s version keeps the obligations and drops the background. The new joiner’s version does the opposite. Neither is better. Each one answers a different question. The plain version from the first step wasn’t written for anyone in particular.':
    'Aapko teen alag summaries milti hain. Lawyer wale version mein obligations rehti hain aur background chhoot jaata hai. Naye joiner wale version mein ulta hota hai. Koi bhi behtar nahi hai. Har ek alag sawaal ka jawaab deti hai. Pehle step wala plain version kisi khaas insaan ke liye likha hi nahi gaya tha.',
  'Test what the summary keeps':
    'Test kijiye ki summary ne kya rakha',
  'Once you know the reader, how do you check the summary? You can’t grade the quality of the writing with a program. But you can check whether specific facts made it through.':
    'Reader tay ho jaane ke baad summary ko check kaise karein? Writing ki quality ko aap program se grade nahi kar sakte. Lekin yeh check kar sakte hain ki khaas facts summary tak pahunche ya nahi.',
  'For each document, list the facts a reader must not lose, and check every summary for them.':
    'Har document ke liye woh facts list kijiye jo reader ko khone nahi chahiye, aur har summary mein unhe check kijiye.',
  'Build a fact check':
    'Ek fact check banaiye',
  'For five real documents, write down the two or three facts a reader must not lose. Then check each summary for them in code.':
    'Paanch asli documents ke liye woh do-teen facts likhiye jo reader ko khone nahi chahiye. Phir code mein har summary mein unhe check kijiye.',
  'You get a miss rate for the thing that matters. The check is crude. A summary can include a fact in different words, and this check will miss it. Even so, it’s far more useful than reading five summaries and deciding they look fine.':
    'Aapko us cheez ka miss rate milta hai jo matter karti hai. Yeh check mota-mota hai. Summary mein koi fact doosre words mein aa sakta hai, aur yeh check use miss kar dega. Phir bhi, paanch summaries padhkar yeh keh dena ki theek lag rahi hain, usse yeh kahin zyada kaam ka hai.',
  'Now change one thing. Add <em>“keep every date, amount and named party exactly as written”</em> to the prompt and run it again.':
    'Ab ek cheez badaliye. Prompt mein <em>“keep every date, amount and named party exactly as written”</em> jodiye aur dobara chalaiye.',
  'The miss rate usually drops sharply, and the summaries get a little longer and a little less readable. That is the trade-off, and now you have numbers for both sides.':
    'Miss rate aksar kaafi gir jaata hai, aur summaries thodi lambi aur thodi kam readable ho jaati hain. Yahi trade-off hai, aur ab aapke paas dono taraf ke numbers hain.',
  'Chapters 2.4 and 2.5 use the same method for two different task types. First decide what counts as failure. Then measure that specific failure, instead of reading the outputs and forming an impression.':
    'Chapters 2.4 aur 2.5 do alag task types ke liye ek hi method use karte hain. Pehle tay kijiye ki failure kise kehte hain. Phir outputs padhkar andaaza lagane ke bajaye, us khaas failure ko measure kijiye.',
  'Everything so far has worked on a document you can paste into the request. But sometimes the answer is spread across a hundred documents, such as a handbook, a policy library or five years of contracts. These methods don’t help there, because the model has never seen those documents. Next, in Chapter 3, you’ll start solving that problem.':
    'Ab tak jo bhi aapne kiya, woh ek aise document par kaam karta tha jise aap request mein paste kar sakte hain. Lekin kabhi jawaab sau documents mein bikhra hota hai, jaise ek handbook, policy library ya paanch saal ke contracts. Yeh methods wahan madad nahi karte, kyunki model ne woh documents kabhi dekhe hi nahi. Aage Chapter 3 mein aap is problem ko solve karna shuru karenge.',
  'Write a short privacy report, and check it against the facts':
    'Ek chhoti privacy report likhiye, aur use facts ke saamne check kijiye',
  'After the tool has cleaned a batch of messages, a manager will want a short report of what was found and how often. A summary has one dangerous failure: it leaves something out, or it invents something. In this chapter you learned to decide who a summary is for, and to test what it leaves out. Here you build a summary of what the tool found, and test it.':
    'Tool jab messages ke ek batch ko clean kar leta hai, toh ek manager ek chhoti report chahega ki kya mila aur kitni baar. Summary ka ek khatarnaak failure hota hai: woh kuch chhod deti hai, ya kuch gadh deti hai. Is chapter mein aapne seekha ki summary kis ke liye hai yeh kaise tay karte hain, aur yeh kaise test karte hain ki usne kya chhoda. Ab aap tool ne jo paaya uski summary banayenge aur use test karenge.',
  'Your <code>chapter-2-5</code> notebook. Build the summary and its fact check there. Write what the check caught in the notes box below.':
    'Aapka <code>chapter-2-5</code> notebook. Summary aur uska fact check wahin banaiye. Check ne kya pakda, yeh neeche notes box mein likhiye.',
  'Make a batch of ten results by hand, using starter sentences 1 to 10. For each one, write the list of things the tool found and what it did to them.':
    'Starter sentences 1 se 10 use karke haath se das results ka ek batch banaiye. Har ek ke liye likhiye ki tool ko kya-kya mila aur usne un par kya kiya.',
  'Decide who will read the summary and what they will do next. For example: “A compliance manager reads it every Monday and decides whether to change a rule.” Write this in one line.':
    'Tay kijiye ki summary kaun padhega aur woh uske baad kya karega. Jaise: “A compliance manager reads it every Monday and decides whether to change a rule.” Ise ek line mein likhiye.',
  'Write a prompt that asks a model to summarise the ten results in five lines for that reader.':
    'Ek prompt likhiye jo model se kahe ki un das results ko us reader ke liye paanch lines mein summarise kare.',
  'Write down five facts the summary must contain, such as how many Aadhaar numbers were found, how many sentences had nothing found, and which sentence the tool was unsure about.':
    'Paanch facts likhiye jo summary mein hone hi chahiye, jaise kitne Aadhaar numbers mile, kitne sentences mein kuch nahi mila, aur tool kis sentence ke baare mein unsure tha.',
  'Run the summary and tick off each of the five facts. Mark any statement in the summary that is not in your ten results. That is an invented fact.':
    'Summary chalaiye aur paanchon facts ko tick kijiye. Summary ka woh har statement mark kijiye jo aapke das results mein nahi hai. Woh ek invented fact hai.',
  'Run it again with one instruction changed. Did the missing or invented facts go away? Write what you changed and what happened.':
    'Ek instruction badalkar dobara chalaiye. Kya missing ya invented facts chale gaye? Likhiye ki aapne kya badla aur kya hua.',
  'Write one line explaining why “it reads well” was not a good test.':
    'Ek line likhiye ki “it reads well” ek achha test kyun nahi tha.',
  'Your ten hand-made results.':
    'Aapke haath se banaye das results.',
  'The five facts the summary had to contain, ticked off for each run.':
    'Woh paanch facts jo summary mein hone the, har run ke liye tick karke.',
  'Any invented facts you found.':
    'Jo bhi invented facts aapko mile.',
  'What you changed on the second run, and what it did.':
    'Doosre run mein aapne kya badla, aur usne kya kiya.',
  'The line about why “it reads well” is not a test.':
    'Woh line ki “it reads well” test kyun nahi hai.',

  /* ---- ch3: Chunking: splitting documents into pieces ---- */
  'Chunking: splitting documents into pieces':
    'Chunking: documents ko pieces mein todna',
  'Models can only read a limited amount of text at once, so long documents are split into smaller pieces called chunks. In this chapter you’ll split one document three ways by hand and see what each split loses.':
    'Model ek baar mein sirf limited text padh sakta hai, isliye lambe documents ko chhote pieces mein todte hain, jinhe chunks kehte hain. Is chapter mein aap ek document ko haath se teen tareeke se todenge aur dekhenge ki har tareeke mein kya khota hai.',
  'Pick a document of five to fifteen pages and write five questions. Cut it into three giant pieces and predict what retrieval will do.':
    'Paanch se pandrah pages ka ek document chuniye aur paanch sawaal likhiye. Use teen bade pieces mein kaatiye aur andaaza lagaiye ki retrieval kya karega.',
  'Re-cut into fifteen or twenty fixed-size pieces, then into human-sized ones. Record completeness and boundary damage each time.':
    'Phir use pandrah ya bees fixed-size pieces mein kaatiye, aur uske baad insaano jaise size ke pieces mein. Har baar completeness aur boundary damage note kijiye.',
  'Find a rule severed from its exception, or a procedure severed from its warning.':
    'Aisa rule dhoondhiye jo apne exception se alag ho gaya ho, ya aisi procedure jo apni warning se alag ho gayi ho.',
  'A three-round chunking experiment sheet, and the rule you derived from it.':
    'Teen rounds ki chunking experiment sheet, aur us se nikla hua rule.',
  'Defend your chunking strategy from the evidence, not from a default.':
    'Apni chunking strategy ko evidence ke saath defend kijiye, kisi default ke saath nahi.',
  'There is a size limit':
    'Ek size limit hoti hai',
  'Everything sent in one call has to fit in the context window.':
    'Ek call mein jo bhi bheja jaata hai, woh context window mein fit hona chahiye.',
  'You pay for everything you send':
    'Aap jo bhi bhejte hain, uske paise lagte hain',
  'You pay per token, on every call.':
    'Har call par, per token paise lagte hain.',
  'Models invent answers when they have no evidence':
    'Jab model ke paas evidence nahi hota, woh jawaab gadh deta hai',
  'So the fix is to give them real evidence.':
    'Isliye solution yeh hai ki use asli evidence diya jaye.',
  'Give the two reasons you cannot send a model every document you have.':
    'Woh do wajah bata paana ki aap model ko apne saare documents kyun nahi bhej sakte.',
  'Explain what is lost when a document is split into chunks, with a concrete example.':
    'Ek concrete example ke saath samjha paana ki document ko chunks mein todne par kya khota hai.',
  'Choose a chunking approach by naming the failure you accept, since no chunk size is right for every document.':
    'Woh failure naam lekar chunking approach chun paana jo aap accept karte hain, kyunki koi ek chunk size har document ke liye sahi nahi hota.',
  'There’s no code in this chapter. Print one real document you know well, such as a policy, a contract or a procedure of five to fifteen pages. Get a pair of scissors and a pen too. You’ll do every step by hand.':
    'Is chapter mein koi code nahi hai. Ek asli document print kijiye jise aap achhi tarah jaante hain, jaise policy, contract ya paanch se pandrah pages ki ek procedure. Saath mein ek kainchi aur ek pen bhi le lijiye. Har step aap haath se karenge.',
  'So far, every document you gave a model was short enough to paste into the request. Real work isn’t like that. Companies have handbooks, policies and years of contracts. In this chapter you’ll see why we can’t just send all of that to a model, and what happens when we cut it into pieces instead.':
    'Ab tak jo bhi document aapne model ko diya, woh itna chhota tha ki request mein paste ho jaata tha. Asli kaam aisa nahi hota. Companies ke paas handbooks, policies aur saalon ke contracts hote hain. Is chapter mein aap dekhenge ki yeh sab model ko seedha kyun nahi bhej sakte, aur jab hum use pieces mein kaat dete hain toh kya hota hai.',
  'It’s a quick, hands-on chapter, and it sets up everything that follows.':
    'Yeh ek chhota, hands-on chapter hai, aur aage ki har cheez isi par tikti hai.',
  'Write your test questions first':
    'Pehle apne test questions likhiye',
  'Before you cut anything, write five specific questions a real user would ask about this document. Write real questions, the kind someone types when they’re in a hurry, not topics.':
    'Kuch bhi kaatne se pehle, paanch khaas sawaal likhiye jo ek asli user is document ke baare mein poochega. Asli sawaal likhiye, jaise koi jaldi mein type karta hai, topics nahi.',
  'Now you have five questions on paper. You’ll score every experiment in this chapter against them. Write them before cutting, so you can’t choose questions that suit your cuts.':
    'Ab aapke paas paper par paanch sawaal hain. Is chapter ke har experiment ko aap inhi ke saamne score karenge. Kaatne se pehle likhiye, taaki aap aise sawaal na chun lein jo aapke cuts ke hisaab se theek baithein.',
  'Why you cannot send everything':
    'Sab kuch kyun nahi bhej sakte',
  'Suppose you want a model to answer questions about your company’s documents. The obvious approach is to send it the documents. That fails for two reasons you already know.':
    'Maan lijiye aap chahte hain ki model aapki company ke documents ke baare mein sawaalon ke jawaab de. Sabse seedha tareeka hai ki use documents bhej do. Lekin yeh do wajahon se fail hota hai, jo aap pehle se jaante hain.',
  'First, they won’t fit, because each request has a size limit. Second, you pay for every token you send, on every question. Even when a large document would fit, sending your whole library to answer one question costs far too much.':
    'Pehli wajah, woh fit nahi honge, kyunki har request ki ek size limit hoti hai. Doosri wajah, aap jitne bhi tokens bhejte hain, har sawaal par unke paise lagte hain. Bada document fit ho bhi jaye, toh ek sawaal ke jawaab ke liye poori library bhejna bahut mehnga padta hai.',
  'So the standard approach is to split documents into pieces, store the pieces, and send only the few that look relevant to each question. The pieces are called <strong>chunks</strong>, and splitting them is called <strong>chunking</strong>.':
    'Isliye standard tareeka yeh hai ki documents ko pieces mein todo, pieces ko store karo, aur har sawaal ke liye sirf woh thode se bhejo jo relevant lagte hain. In pieces ko <strong>chunks</strong> kehte hain, aur unhe todne ko <strong>chunking</strong> kehte hain.',
  'The hard part is deciding where to split. Try splitting a document three ways in this tool, and see what breaks.':
    'Mushkil hissa yeh tay karna hai ki kahan todna hai. Is tool mein ek document ko teen tareeke se todkar dekhiye, aur dekhiye ki kya toot-ta hai.',
  'Now let’s do the same thing by hand, on your own document, in three rounds.':
    'Ab yahi cheez haath se, apne document par, teen rounds mein karte hain.',
  'Round 1: three large chunks':
    'Round 1: teen bade chunks',
  'Cut the document into thirds':
    'Document ko teen hisson mein kaatiye',
  'Cut your document into three rough pieces. Ignore its structure. Then take your five questions one at a time and find which piece holds each answer.':
    'Apne document ko teen mote pieces mein kaatiye. Uske structure ko ignore kijiye. Phir apne paanch sawaal ek-ek karke lijiye aur dekhiye ki har jawaab kis piece mein hai.',
  'Every answer is complete. But to deliver a two-line answer, you send a third of the document. Note roughly how much irrelevant text comes with each answer. You would pay for that text on every question.':
    'Har jawaab poora milta hai. Lekin do line ka jawaab dene ke liye aap document ka ek tihaai hissa bhej rahe hain. Note kijiye ki har jawaab ke saath lagbhag kitna faltu text aa raha hai. Us text ke paise aapko har sawaal par dene padenge.',
  'Round 2: twenty small chunks':
    'Round 2: bees chhote chunks',
  'Big pieces are wasteful, so the next thing to try is small ones.':
    'Bade pieces mein bahut barbaadi hoti hai, isliye ab chhote pieces try karte hain.',
  'Cut the document into small pieces':
    'Document ko chhote pieces mein kaatiye',
  'Cut a fresh copy into fifteen or twenty pieces, roughly every 150 words, even if that splits a sentence. Run your five questions again, and look for two specific problems.':
    'Ek nayi copy ko pandrah ya bees pieces mein kaatiye, lagbhag har 150 words par, chahe sentence beech mein hi kyun na toote. Apne paanch sawaal dobara chalaiye, aur do khaas problems dhoondhiye.',
  '<strong>A split answer:</strong> the answer is now spread across two pieces, such as a rule on one card and its exception on the next.':
    '<strong>Split jawaab:</strong> jawaab ab do pieces mein bikhar gaya hai, jaise ek card par rule aur agle card par uska exception.',
  '<strong>An orphan:</strong> a piece that means nothing on its own, such as “The aforesaid amount shall lapse.” Which amount?':
    '<strong>Orphan:</strong> aisa piece jiska akele mein koi matlab nahi, jaise “The aforesaid amount shall lapse.” Kaunsi amount?',
  'You’ll find both problems in a document you chose yourself. Keep these cards. Chapters 4 and 5 use these exact pieces.':
    'Aapko yeh dono problems us document mein bhi milengi jo aapne khud chuna hai. Yeh cards sambhal kar rakhiye. Chapters 4 aur 5 inhi pieces ko use karte hain.',
  'Your rule, and what it will get wrong':
    'Aapka rule, aur woh kya galat karega',
  'Take a document you know well, such as a policy, a contract or a spec. Write the rule you would give someone for splitting it. Then name one question your rule will answer badly.':
    'Ek aisa document lijiye jise aap achhi tarah jaante hain, jaise policy, contract ya spec. Woh rule likhiye jo aap kisi ko use todne ke liye denge. Phir ek aisa sawaal likhiye jiska jawaab aapka rule kharab dega.',
  'Most sensible rules, such as splitting at paragraphs, headings or numbered clauses, fail in the same place: a rule and its exception end up in different pieces. If only the rule is retrieved, the answer is confident and incomplete, which is worse than no answer.':
    'Zyadatar samajhdaar rules, jaise paragraphs, headings ya numbered clauses par todna, ek hi jagah fail hote hain: rule aur uska exception alag pieces mein pahunch jaate hain. Agar sirf rule retrieve hota hai, toh jawaab confident hota hai lekin adhoora, aur woh jawaab na hone se bhi bura hai.',
  'You cannot find a rule with no failures. Instead, know which questions your rule handles badly, and test those questions on purpose.':
    'Aisa rule nahi mil sakta jisme koi failure na ho. Isliye yeh jaaniye ki aapka rule kin sawaalon par kharab chalta hai, aur un sawaalon ko jaan-boojhkar test kijiye.',
  'Orphaned chunks lose their meaning':
    'Orphan chunks apna matlab kho dete hain',
  'The second problem is harder to spot. Some pieces stop making sense once they are cut out. Take a chunk that starts <em>the aforesaid amount shall be disbursed within sixty days</em>. On its own, it’s useless. Which amount? Paid to whom? The answer is in the previous piece.':
    'Doosri problem pakadna zyada mushkil hai. Kuch pieces kaat kar alag hote hi samajh se bahar ho jaate hain. Ek aisa chunk lijiye jo shuru hota hai <em>the aforesaid amount shall be disbursed within sixty days</em> se. Akele mein yeh bekaar hai. Kaunsi amount? Kisko di jaayegi? Jawaab pichhle piece mein hai.',
  'Documents are full of these references, especially legal text. But so is anything that says “the above”, “this scheme” or “such cases”. A person reading the document has the previous paragraph in mind. A chunk doesn’t.':
    'Documents mein aisi references bhari hoti hain, khaaskar legal text mein. Lekin jahan bhi “the above”, “this scheme” ya “such cases” likha ho, wahan bhi. Document padhne wale insaan ke dimaag mein pichhla paragraph hota hai. Chunk ke paas woh nahi hota.',
  'Round 3: cut along the structure':
    'Round 3: structure ke saath kaatiye',
  'You’ve now seen what goes wrong with cuts that ignore the document. So for the last round, cut the way a sensible person would.':
    'Aapne ab dekh liya ki document ko ignore karke kaatne par kya galat hota hai. Isliye aakhri round mein waise kaatiye jaise ek samajhdaar insaan kaatega.',
  'Cut the way you think it should be cut':
    'Jaise aapko theek lage, waise kaatiye',
  'Cut a fresh copy the way you think it should be cut. Don’t overthink it. Then look at what you did.':
    'Ek nayi copy ko waise kaatiye jaise aapko lagta hai ki kaatna chahiye. Zyada mat sochiye. Phir dekhiye ki aapne kya kiya.',
  'You probably followed headings and clause numbers, and made pieces of very different sizes that each make sense on their own. Write one sentence describing the rule you used. This is <strong>structure-aware chunking</strong>, which follows the document’s layout. Semantic chunking is a different approach, which splits text where the topic changes.':
    'Aapne shayad headings aur clause numbers ko follow kiya, aur bahut alag-alag size ke pieces banaye jo har ek akele mein bhi samajh aate hain. Jo rule aapne use kiya, use ek sentence mein likhiye. Yeh <strong>structure-aware chunking</strong> hai, jo document ke layout ko follow karti hai. Semantic chunking ek alag approach hai, jo text ko wahan todti hai jahan topic badalta hai.',
  'No chunk size is correct for every document. Each size fails in a different way, so choose based on what your documents look like and what your users ask.':
    'Koi bhi chunk size har document ke liye sahi nahi hota. Har size alag tareeke se fail hota hai, isliye is hisaab se chuniye ki aapke documents kaise dikhte hain aur aapke users kya poochte hain.',
  'In a design review, say which failure you chose and why. People often want a single correct chunk size, and there isn’t one.':
    'Design review mein bataiye ki aapne kaunsa failure chuna aur kyun. Log aksar ek hi sahi chunk size chahte hain, aur aisa koi size hota hi nahi.',
  'State your trade-off. For your document: what size are you cutting at, what does that gain, and what does it lose? Write the sentence you would say in a meeting.':
    'Apna trade-off likhiye. Aapke document ke liye: aap kis size par kaat rahe hain, usse kya milta hai, aur kya khota hai? Woh sentence likhiye jo aap meeting mein bolenge.',
  'We are cutting at … which gains … and loses …':
    'Hum … par kaat rahe hain, jisse … milta hai aur … khota hai.',
  'A strong answer names a real loss, specific to your documents. For example: “Clause by clause, with a couple of sentences of overlap. That gives precise answers to questions about one clause, but loses answers that span a clause and its exception, so we test those on purpose.” If you cannot name the loss, you have accepted a default rather than made a choice.':
    'Ek achha jawaab ek asli nuksaan batata hai, jo aapke documents ke liye khaas ho. Jaise: “Clause by clause, with a couple of sentences of overlap. That gives precise answers to questions about one clause, but loses answers that span a clause and its exception, so we test those on purpose.” Agar aap nuksaan nahi bata paate, toh aapne choice nahi ki, bas ek default accept kar liya.',
  'You can’t send a model everything, because of the size limit and the cost. So documents are cut into chunks. Every way of cutting loses something, whether it’s an answer split in two or a piece that means nothing alone. That’s why you choose a chunking approach by naming the failure you accept.':
    'Aap model ko sab kuch nahi bhej sakte, kyunki size limit hai aur cost bhi. Isliye documents ko chunks mein todte hain. Todne ka har tareeka kuch na kuch khota hai, chahe jawaab do hisson mein bat jaye ya koi piece akele mein matlab hi na rakhe. Isi wajah se aap chunking approach us failure ka naam lekar chunte hain jise aap accept karte hain.',
  'Next, in Chapter 4, you’ll look at the simplest way to find the right chunk for a question, which is matching keywords, and see where it fails.':
    'Aage Chapter 4 mein aap dekhenge ki kisi sawaal ke liye sahi chunk dhoondhne ka sabse simple tareeka kya hai, yaani keywords match karna, aur woh kahan fail hota hai.',
  'Decide how to cut long text without splitting an ID in half':
    'Lambe text ko kaise kaatein ki koi ID beech se na toote',
  'People will paste long messages and whole documents into the tool. A long text has to be cut into pieces before it is checked. A bad cut can split a number or a name in the middle, so that no piece contains the whole thing. In this chapter you learned why text must be cut, what a cut loses, and that no piece size suits every document. Here you work out a cutting rule for the project, by hand.':
    'Log tool mein lambe messages aur poore documents paste karenge. Lambe text ko check hone se pehle pieces mein kaatna padta hai. Ek kharab cut kisi number ya naam ko beech mein tod sakta hai, taaki kisi bhi piece mein woh poora na ho. Is chapter mein aapne seekha ki text ko kyun kaatna padta hai, cut mein kya khota hai, aur koi ek piece size har document ke liye sahi nahi hota. Ab aap project ke liye ek cutting rule haath se nikaaliye.',
  'Written, no code: pen, paper and scissors, as in the chapter. Write the rule in the notes box below.':
    'Likha hua kaam, koi code nahi: pen, paper aur kainchi, jaise chapter mein. Rule neeche notes box mein likhiye.',
  'Write a realistic long message of about 15 lines, such as a customer complaint. Include a name, an address, an Aadhaar number written in groups of four (4321 5678 9012) and a mobile number, spread over different lines. Use made-up details. Print it.':
    'Lagbhag 15 lines ka ek realistic lamba message likhiye, jaise ek customer complaint. Usmein ek naam, ek address, chaar-chaar ke groups mein likha Aadhaar number (4321 5678 9012) aur ek mobile number rakhiye, alag-alag lines mein bikhre hue. Made-up details use kijiye. Ise print kijiye.',
  'Cut it into pieces in three ways: every five lines, at every full stop, and at every blank line or paragraph. Use scissors.':
    'Use teen tareeke se pieces mein kaatiye: har paanch lines par, har full stop par, aur har blank line ya paragraph par. Kainchi use kijiye.',
  'For each way of cutting, check every piece. Is any ID or name split across two pieces, so that neither piece contains the whole thing? Write down which cuts break what.':
    'Kaatne ke har tareeke ke liye har piece check kijiye. Kya koi ID ya naam do pieces mein bat gaya hai, taaki kisi bhi piece mein woh poora na ho? Likhiye ki kaun si cuts kya tod rahi hain.',
  'Try one more way: pieces that overlap, so that the last two lines of each piece are repeated at the start of the next one. Does it fix the broken IDs? What does it cost?':
    'Ek aur tareeka try kijiye: overlapping pieces, jisme har piece ki aakhri do lines agle piece ki shuruaat mein dobara aati hain. Kya isse toote hue IDs theek hote hain? Uski keemat kya hai?',
  'Write your cutting rule in three lines that someone else could follow on thousands of messages without asking you: the size of each piece, where a cut is allowed, and how much overlap to use.':
    'Apna cutting rule teen lines mein likhiye, jo koi aur hazaaron messages par bina aapse poochhe follow kar sake: har piece ka size, kahan cut ki ijaazat hai, aur kitna overlap rakhna hai.',
  'Test the rule on the messiest message you can make, for example one with a number broken across two lines. Say what still goes wrong.':
    'Rule ko sabse uljhe hue message par test kijiye jo aap bana sakte hain, jaise woh jisme ek number do lines mein toota ho. Batayiye ki phir bhi kya galat hota hai.',
  'Your long message, printed and cut in three ways.':
    'Aapka lamba message, print kiya hua aur teen tareeke se kata hua.',
  'A note on which cuts broke which details.':
    'Ek note ki kaun si cuts ne kaunsi details todi.',
  'The overlap experiment and what it costs.':
    'Overlap wala experiment aur uski keemat.',
  'A three-line cutting rule, and the one case it still gets wrong.':
    'Teen lines ka ek cutting rule, aur woh ek case jo woh abhi bhi galat karta hai.',

  /* ---- ch4: Keyword search: matching words, and where it fails ---- */
  'Keyword search: matching words, and where it fails':
    'Keyword search: words match karna, aur woh kahan fail hota hai',
  'The first way to find the right chunk is to match the words in the question. You’ll run keyword search by hand on your own chunks, see exactly where it fails, and meet the one kind of question where it wins.':
    'Sahi chunk dhoondhne ka pehla tareeka hai sawaal ke words ko match karna. Aap apne chunks par keyword search haath se chalayenge, dekhenge ki woh bilkul kahan fail hota hai, aur woh ek tarah ka sawaal bhi dekhenge jahan woh jeet jaata hai.',
  'Using only Ctrl-F and your own eyes, rank your Chapter 3 questions against your chunks. Don’t use common sense. Let the word matches decide.':
    'Sirf Ctrl-F aur apni aankhon se, Chapter 3 ke apne sawaalon ko apne chunks ke saath rank kijiye. Common sense mat lagaiye. Word match ko hi faisla karne dijiye.',
  'Add four new questions: one that uses a synonym, one in plain everyday language, one in a second language, and one that contains an exact identifier.':
    'Chaar naye sawaal jodiye: ek jisme synonym ho, ek aam bol-chaal ki language mein, ek doosri language mein, aur ek jisme exact identifier ho.',
  'Ask something the document truly cannot answer, and find the chunk that still comes out on top.':
    'Aisa kuch poochiye jiska jawaab document mein hai hi nahi, aur dekhiye ki phir bhi kaun sa chunk sabse upar aata hai.',
  'A map of where your search went wrong.':
    'Ek map jisme dikhe ki aapka search kahan-kahan galat gaya.',
  'Explain why getting a result back does not mean an answer exists.':
    'Samjha paana ki result wapas aane ka matlab yeh nahi ki jawaab maujood hai.',
  'Documents are split into chunks':
    'Documents chunks mein split hote hain',
  'You store the chunks and send only the relevant few.':
    'Aap chunks ko store karte hain aur model ko sirf kaam ke kuch chunks bhejte hain.',
  'Some chunks lose their meaning':
    'Kuch chunks apna matlab kho dete hain',
  '“The aforesaid amount” no longer says which amount.':
    '“The aforesaid amount” se ab yeh pata nahi chalta ki kaun si amount.',
  'Explain why keyword search fails most for the users who need help the most.':
    'Samjha paana ki keyword search un users ke liye sabse zyada kyun fail hota hai jinhe madad ki sabse zyada zaroorat hai.',
  'Name the kind of question that keyword search handles better than any other method.':
    'Bata paana ki keyword search kis tarah ke sawaal ko baaki sab tareekon se behtar sambhalta hai.',
  'Explain what search returns when the answer is not in your documents, and why that is dangerous.':
    'Samjha paana ki jab jawaab aapke documents mein nahi hota, toh search kya wapas karta hai, aur woh khatarnaak kyun hai.',
  'There’s no code in this chapter yet. Bring the twenty cards you cut in Chapter 3 and the five questions you wrote before cutting. Here, you’ll act as the search engine yourself.':
    'Is chapter mein abhi koi code nahi hai. Chapter 3 mein aapne jo bees cards kaate the, aur kaatne se pehle jo paanch sawaal likhe the, woh saath rakhiye. Yahan aap khud search engine ban kar kaam karenge.',
  'In the last chapter you split a document into twenty chunks. Now picture the next moment. A question arrives, and something has to decide which of those chunks to send to the model.':
    'Pichhle chapter mein aapne ek document ko bees chunks mein split kiya tha. Ab agla pal sochiye. Ek sawaal aata hai, aur kisi ko tay karna hai ki un chunks mein se kaun se model ko bhejne hain.',
  'The obvious method is to match words. Search boxes have worked this way for decades. If the question says <em>refund</em>, you find the chunks that contain <em>refund</em>. It’s fast and cheap, and it’s called <strong>keyword search</strong>.':
    'Sabse seedha tareeka hai words match karna. Search boxes kai saalon se aise hi kaam karte aaye hain. Agar sawaal mein <em>refund</em> likha hai, toh aap woh chunks dhoondhte hain jinme <em>refund</em> hai. Yeh tez hai, sasta hai, aur ise <strong>keyword search</strong> kehte hain.',
  'It sounds like it should just work. This chapter shows you where it does, and where it quietly lets people down.':
    'Sunne mein lagta hai ki yeh toh kaam kar hi jayega. Yeh chapter aapko dikhata hai ki woh kahan kaam karta hai, aur kahan chupke se logon ko dhokha deta hai.',
  'Keyword search matches spelling, not meaning':
    'Keyword search spelling match karta hai, matlab nahi',
  'Let’s start with a small problem. Suppose a user is looking for their money, and your document is a company policy. Will the two speak the same language?':
    'Chaliye ek chhoti si problem se shuru karte hain. Maan lijiye ek user apne paise dhoondh raha hai, aur aapka document ek company policy hai. Kya dono ek hi zabaan bolenge?',
  'Try it by hand first. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write down the words keyword search would look for. Then write down the words the policy probably uses instead.':
    'Pehle haath se try kijiye. Ek user type karta hai: <em>when do I get my money back?</em> Aapka document ek company policy hai. Woh words likhiye jo keyword search dhoondhega. Phir woh words likhiye jo policy shaayad unki jagah use karti hai.',
  'What the user typed → what the document says':
    'User ne kya type kiya → document mein kya likha hai',
  'The user wrote <em>money</em>, <em>back</em> and <em>get</em>. The policy says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> and <em>the aforesaid amount</em>. The two lists share no words at all. Yet the question is perfectly clear, and the paragraph answers it.':
    'User ne likha <em>money</em>, <em>back</em> aur <em>get</em>. Policy mein likha hai <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> aur <em>the aforesaid amount</em>. Dono lists mein ek bhi word common nahi. Phir bhi sawaal bilkul saaf hai, aur paragraph uska jawaab deta hai.',
  'Keyword search compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match.':
    'Keyword search spelling compare karta hai, matlab nahi. Do sentences ka matlab ek ho, lekin words common na hon, toh woh match nahi hote.',
  'Run keyword search by hand':
    'Keyword search haath se chalaiye',
  'The best way to feel this is to be the search engine yourself. You’ll follow one simple rule: count matching words, and nothing else.':
    'Ise mehsoos karne ka sabse accha tareeka hai khud search engine ban jaana. Aap ek hi simple rule maanenge: matching words ginte jaaiye, aur kuch nahi.',
  'Act as the search engine':
    'Search engine ban kar dekhiye',
  'Run keyword search by hand on all five questions against all twenty cards. First underline the important words in each question. Then find those words in the cards and give one point for every match. Finally, rank the cards by score.':
    'Paanchon sawaalon par, bees ke bees cards ke against, keyword search haath se chalaiye. Pehle har sawaal ke zaroori words ko underline kijiye. Phir cards mein woh words dhoondhiye aur har match par ek point dijiye. Aakhir mein cards ko score ke hisaab se rank kijiye.',
  'Watch out':
    'Dhyaan rakhiye',
  'Don’t use your own understanding of the document. Only the scores count.':
    'Document ke baare mein apni samajh mat lagaiye. Sirf scores ginte hain.',
  'For each question, record two things. Did the top-scoring card contain the answer? And if not, what rank did the right card get?':
    'Har sawaal ke liye do cheezein note kijiye. Kya sabse zyada score wale card mein jawaab tha? Aur agar nahi, toh sahi card ko kaun sa rank mila?',
  'You’ll probably find that clearly worded questions do surprisingly well. Don’t trust that result. You wrote these questions after reading the document, so you used its own vocabulary. Real users usually haven’t read it.':
    'Aapko shaayad lagega ki saaf words mein likhe sawaal kaafi acha kaam karte hain. Is result par bharosa mat kijiye. Aapne yeh sawaal document padhne ke baad likhe the, isliye aapne usi ke words use kiye. Asli users ne aksar woh document padha hi nahi hota.',
  'So let’s make the test fairer. We’ll write questions the way real users would, and see what happens.':
    'Toh chaliye test ko thoda fair banate hain. Hum sawaal waise likhenge jaise asli users likhte hain, aur dekhenge kya hota hai.',
  'Write three harder questions':
    'Teen mushkil sawaal likhiye',
  'Write three new questions about the same document. Each one should be designed to make keyword search fail.':
    'Usi document ke baare mein teen naye sawaal likhiye. Har sawaal aisa ho ki keyword search fail ho jaaye.',
  '<strong>A synonym question:</strong> take a formal term from the document and reword it the way most people would say it.':
    '<strong>Synonym wala sawaal:</strong> document ka koi formal term lijiye aur use waise likhiye jaise zyadatar log bolte hain.',
  '<strong>A plain-language question:</strong> write it the way a first-time user would type it, someone who doesn’t know the document’s vocabulary.':
    '<strong>Aam bol-chaal wala sawaal:</strong> use waise likhiye jaise koi pehli baar aaya user type karega, jise document ki vocabulary nahi pata.',
  '<strong>A second-language question:</strong> ask the same thing in another language your users actually use.':
    '<strong>Doosri language wala sawaal:</strong> wahi baat kisi doosri language mein poochiye jo aapke users asal mein bolte hain.',
  'Score all three by hand, in the same way as before.':
    'Teeno ko pehle ki tarah haath se score kijiye.',
  'You should see that the cards which clearly hold the answer score close to zero. And yet some card still comes out on top. For each question, write one sentence: what information did the scoring not have?':
    'Aapko dikhna chahiye ki jin cards mein jawaab saaf maujood hai, unka score zero ke aas-paas hai. Phir bhi koi na koi card sabse upar aa jaata hai. Har sawaal ke liye ek sentence likhiye: scoring ke paas kaun si information nahi thi?',
  'Where keyword search fails':
    'Keyword search kahan fail hota hai',
  'You’ve just seen the failure happen. It isn’t random, either. It shows up in three predictable places, and all three matter to a business.':
    'Aapne abhi yeh failure hote dekha. Aur yeh random bhi nahi hai. Yeh teen jaani-pehchani jagahon par dikhta hai, aur teeno ek business ke liye zaroori hain.',
  'The first is the gap between formal and everyday language. Documents say <em>termination for convenience</em>, while people say <em>cancel</em>. Specialists write the documents, and everyone else writes the questions.':
    'Pehli hai formal aur roz ki language ke beech ka farq. Documents mein likha hota hai <em>termination for convenience</em>, jabki log kehte hain <em>cancel</em>. Documents specialist log likhte hain, aur sawaal baaki sab log likhte hain.',
  'The second is the most uncomfortable one. Keyword search fails the users who most need help. Someone who knows your product uses your vocabulary, so they find what they need. Someone who is confused uses their own words and finds nothing. So it works worst for the people with the biggest problems.':
    'Doosri baat sabse takleef dene wali hai. Keyword search un users ko fail karta hai jinhe madad ki sabse zyada zaroorat hai. Jo aapka product jaanta hai, woh aapki vocabulary use karta hai, isliye use cheez mil jaati hai. Jo confused hai, woh apne words use karta hai aur use kuch nahi milta. Matlab sabse badi problem wale logon ke liye yeh sabse kharab kaam karta hai.',
  'The third is plain questions. <em>Why was I charged twice?</em> shares almost no words with the paragraph that explains duplicate authorisation holds. The user asks in their own words, and the document answers in its own.':
    'Teesri hai seedhe sawaal. <em>Why was I charged twice?</em> ke words us paragraph se lagbhag match nahi karte jo duplicate authorisation holds samjhata hai. User apne words mein poochta hai, aur document apne words mein jawaab deta hai.',
  'Where keyword search wins':
    'Keyword search kahan jeet jaata hai',
  'It would be unfair to stop here, because keyword search is excellent at some things. Think of exact codes, section numbers, policy IDs, part numbers and names.':
    'Yahin ruk jaana unfair hoga, kyunki kuch cheezon mein keyword search bahut accha hai. Exact codes, section numbers, policy IDs, part numbers aur naam sochiye.',
  'If a user types <em>clause 14.2</em>, they want clause 14.2. Finding that exact text is the right approach, and spelling is all you need.':
    'Agar koi user <em>clause 14.2</em> type karta hai, toh use clause 14.2 hi chahiye. Wahi exact text dhoondhna sahi tareeka hai, aur wahan spelling hi kaafi hai.',
  'Search for an exact code':
    'Exact code search kijiye',
  'Ask a question that contains an exact code, section number or defined term, copied straight from the document.':
    'Aisa sawaal poochiye jisme document se seedha copy kiya hua exact code, section number ya defined term ho.',
  'An exact code or defined term usually ranks high with keyword search. Record its actual rank instead of assuming. This is the strength that meaning-based search, in the next chapter, adds to rather than replaces.':
    'Exact code ya defined term keyword search mein aksar upar rank hota hai. Maan kar mat chaliye, uska asli rank note kijiye. Meaning par chalne wala search, agle chapter mein, is khoobi ki jagah nahi leta, balki ispar kuch jodta hai.',
  'Search always returns something':
    'Search hamesha kuch na kuch wapas karta hai',
  'There’s one more property of search, and it causes serious problems later. Before we name it, try a guess.':
    'Search ki ek aur khaasiyat hai, aur woh aage chalkar badi problem karti hai. Uska naam lene se pehle, ek andaaza lagaiye.',
  'One line':
    'Ek line',
  'Predict: a user asks something your documents do not cover at all. What does the search step return?':
    'Andaaza lagaiye: ek user aisa kuch poochta hai jo aapke documents mein bilkul nahi hai. Search step kya wapas karta hai?',
  'Twenty chunks, ranked, with one at the top. Search has no idea of “nothing here”. It scores everything and sorts the list. For an unanswerable question, the top result is just the least bad of a bad set.':
    'Bees chunks, rank kiye hue, ek sabse upar. Search ko “yahan kuch nahi hai” ka koi idea hi nahi hota. Woh sab ko score karta hai aur list sort kar deta hai. Jis sawaal ka jawaab hai hi nahi, uske liye top result bas ek kharab set ka sabse kam kharab chunk hota hai.',
  'Now put that together with Chapter 2. The irrelevant chunk is passed to the model as if it were evidence, and the model writes a fluent answer from it. No step reports an error. You get a confident, wrong answer, and nothing in the system notices.':
    'Ab ise Chapter 2 ke saath jodiye. Woh irrelevant chunk model ko evidence ki tarah bhej diya jaata hai, aur model usse ek fluent jawaab likh deta hai. Koi bhi step error report nahi karta. Aapko ek confident, galat jawaab milta hai, aur system mein kisi ko pata nahi chalta.',
  'This is why a result coming back never proves an answer exists. Hold on to that thought. One last small exercise will pull the chapter together.':
    'Isliye result wapas aana kabhi yeh saabit nahi karta ki jawaab maujood hai. Yeh baat yaad rakhiye. Ek chhota sa aakhri exercise chapter ko samet dega.',
  'Name the missing capability':
    'Jo ability missing hai, uska naam likhiye',
  'Look at your three harder questions. Write one sentence describing the ability that keyword search is missing. Describe the gap, not the fix.':
    'Apne teen mushkil sawaalon ko dekhiye. Ek sentence likhiye jo batata ho ki keyword search mein kaun si ability missing hai. Gap likhiye, uska fix nahi.',
  'Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.':
    'Kuch aisa: <em>woh spellings compare kar sakta hai, lekin matlab nahi.</em> Yeh sentence sambhal kar rakhiye. Chapter 5 is gap ko bharta hai. Ho sake toh ise padhne se pehle ek din ruk jaaiye.',
  'Keyword search has two weaknesses. It can’t see meaning, and it never tells you that it found nothing.':
    'Keyword search ki do kamzoriyan hain. Woh matlab nahi dekh sakta, aur woh kabhi nahi bolta ki use kuch mila hi nahi.',
  'Next, in Chapter 5, you’ll fix the first one by teaching search to compare meaning instead of spelling. Chapter 6 then deals with the second weakness, which is harder and more important.':
    'Agle chapter, Chapter 5 mein, aap pehli kamzori theek karenge: search ko spelling ki jagah matlab compare karna sikhayenge. Chapter 6 doosri kamzori sambhalta hai, jo zyada mushkil aur zyada zaroori hai.',
  'Write the pattern rules, and score them by hand':
    'Pattern rules likhiye, aur unhe haath se score kijiye',
  'The pattern checker is the first and cheapest part of the tool. It looks for details that always have the same shape, such as a PAN. In this chapter you played the search engine yourself, matching words by hand and seeing where that breaks. Now you’ll write the pattern checker’s rules in plain words, apply them by hand to your answer key, and record exactly where they fail.':
    'Pattern checker tool ka pehla aur sabse sasta hissa hai. Woh un details ko dhoondhta hai jinki shape hamesha ek jaisi rehti hai, jaise PAN. Is chapter mein aapne khud search engine ban kar words haath se match kiye aur dekha ki woh kahan toot-ta hai. Ab aap pattern checker ke rules saade words mein likhenge, unhe apne answer key par haath se lagayenge, aur note karenge ki woh bilkul kahan fail hote hain.',
  'Written work, with no code yet. You apply the rules by hand, just as you did in the chapter. In Chapter 5 you’ll turn them into code.':
    'Yeh likhne ka kaam hai, abhi koi code nahi. Rules aap haath se lagayenge, bilkul waise jaise chapter mein kiya tha. Chapter 5 mein aap unhe code mein badlenge.',
  'Open the table of the eleven kinds of ID on the project page. For each kind, write a rule in plain words that someone could apply without thinking. For example: “A PAN is five capital letters, then four digits, then one capital letter.”':
    'Project page par gyaarah tarah ki ID wali table kholiye. Har tarah ke liye saade words mein ek rule likhiye jise koi bina soche laga sake. Jaise: “A PAN is five capital letters, then four digits, then one capital letter.”',
  'Add to each rule one thing it must not match. For example: “A PIN code is six digits, but a six-digit number straight after the word ‘account’ is not a PIN code.”':
    'Har rule mein ek aisi cheez jodiye jo woh match nahi karna chahiye. Jaise: “A PIN code is six digits, but a six-digit number straight after the word ‘account’ is not a PIN code.”',
  'Take the twelve rows of your answer key (version 1). Read each sentence the way a machine would, applying your rules strictly. In a new column, write the items your rules would find.':
    'Apne answer key (version 1) ki baarah rows lijiye. Har sentence ko waise padhiye jaise ek machine padhegi, aur apne rules ko sakhti se lagaiye. Ek nayi column mein woh items likhiye jo aapke rules dhoondhenge.',
  'Compare your new column with the correct answers. Mark each row as one of three things: everything found, something missed, or something wrongly found.':
    'Apni nayi column ko sahi jawaabon se compare kijiye. Har row ko teen mein se ek tarah mark kijiye: sab mil gaya, kuch chhoot gaya, ya kuch galat mil gaya.',
  'Pick the three failures that teach you the most. For each one, describe the sentence and say why a fixed rule cannot cope. Look especially at starter sentence 4 (the partly hidden number), starter sentence 6 (names and addresses) and starter sentence 8 (no ID at all).':
    'Woh teen failures chuniye jinse aap sabse zyada seekhte hain. Har ek ke liye sentence describe kijiye aur batayiye ki ek fixed rule uska saamna kyun nahi kar sakta. Khaas taur par starter sentence 4 (aadha chhupa number), starter sentence 6 (naam aur addresses) aur starter sentence 8 (koi ID hai hi nahi) dekhiye.',
  'Write a short paragraph. For which kinds of detail do fixed rules work well, and for which should another approach take over?':
    'Ek chhota paragraph likhiye. Kin tarah ki details ke liye fixed rules accha kaam karte hain, aur kin ke liye koi doosra tareeka sambhalna chahiye?',
  'A plain-words rule for each of the eleven kinds of ID, each with something it must not match.':
    'Gyaarah tarah ki ID mein se har ek ke liye saade words mein ek rule, aur har rule ke saath ek aisi cheez jo woh match nahi karna chahiye.',
  'Your answer key with a new column of what the rules would find, and each row marked.':
    'Aapka answer key, ek nayi column ke saath jisme woh hai jo rules dhoondhenge, aur har row mark ki hui.',
  'Three failures described, each with the reason a fixed rule cannot cope.':
    'Teen failures describe kiye hue, har ek ke saath yeh reason ki fixed rule uska saamna kyun nahi kar sakta.',
  'The paragraph on where rules work and where something else must take over.':
    'Woh paragraph jisme likha ho ki rules kahan kaam karte hain aur kahan koi aur cheez sambhalni chahiye.',

  /* ---- ch5: Embeddings: searching by meaning ---- */
  'Embeddings: searching by meaning':
    'Embeddings: meaning se search karna',
  'An embedding turns text into a list of numbers that places it on a map of meanings. Texts that mean similar things get similar numbers, even when they share no words. You’ll build this in code and use it on the questions that keyword search got wrong.':
    'Embedding text ko numbers ki ek list mein badal deta hai, aur use meanings ke ek map par ek jagah de deta hai. Jin texts ka matlab milta-julta hota hai, unke numbers bhi milte-julte hote hain, chahe unme ek bhi word common na ho. Aap ise code mein banayenge aur unhi sawaalon par chalayenge jinhe keyword search galat kar gaya tha.',
  'Predict which of your Chapter 4 failures meaning-matching will cure, and which ones will survive it.':
    'Pehle andaaza lagaiye ki Chapter 4 ke kaun se failures meaning-matching theek kar dega, aur kaun se bache rahenge.',
  'Embed the chunks and the questions, score each pair by how near they are, retrieve the top few, and compare the ranks with the ones you got in Chapter 4.':
    'Chunks aur sawaalon ko embed kijiye, har pair ko score kijiye ki woh kitne paas hain, top kuch chunks retrieve kijiye, aur ranks ko Chapter 4 mein mile ranks se compare kijiye.',
  'Test three questions: the one with an exact identifier, the one that can’t be answered, and the one in a second language.':
    'Teen sawaal test kijiye: jisme exact identifier ho, jiska jawaab nahi diya ja sakta, aur doosri language wala.',
  'A scoreboard of keyword search against meaning-based search, plus your own guess about mixing the two.':
    'Keyword search aur meaning-based search ka ek scoreboard, aur dono ko milane ke baare mein aapka apna andaaza.',
  'Explain embeddings from the results you saw, not from a definition.':
    'Embeddings ko definition se nahi, balki jo results aapne dekhe unse samjhaiye.',
  'This chapter turns the idea into real code.':
    'Yeh chapter idea ko asli code mein badalta hai.',
  'Keyword search cannot see meaning':
    'Keyword search matlab nahi dekh sakta',
  'Two sentences with the same meaning and no shared words do not match.':
    'Do sentences ka matlab ek ho aur words common na hon, toh woh match nahi hote.',
  'It ranks everything and returns a top result regardless.':
    'Woh sab ko rank karta hai aur chahe kuch bhi poochiye, ek top result wapas kar deta hai.',
  'Explain in plain words how a computer can tell that two differently worded sentences mean the same thing.':
    'Saade words mein samjha paana ki computer kaise pehchanta hai ki alag-alag words mein likhe do sentences ka matlab ek hai.',
  'Say what a similarity score of 0.5 does and does not mean.':
    'Bata paana ki 0.5 ke similarity score ka kya matlab hai aur kya nahi.',
  'Name a place where embeddings would fail on your own company’s vocabulary.':
    'Aisi ek jagah bata paana jahan embeddings aapki apni company ki vocabulary par fail honge.',
  'Open a notebook called <code>chapter-5</code> and run the three warm-up cells from <a href="#/setup">Setup</a>. Keep the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.':
    '<code>chapter-5</code> naam ka ek notebook kholiye aur <a href="#/setup">Setup</a> ke teen warm-up cells chalaiye. Chapter 3 ke bees cards aur Chapter 4 ke teen mushkil sawaal paas rakhiye. Part I ka yeh sabse lamba hands-on chapter hai, isliye ise ek baar mein poora baith kar kijiye.',
  'In the last chapter you saw keyword search fail. The user wrote <em>money back</em>, the document said <em>reimbursement</em>, and the match scored zero. Now we fix that. Here you’ll teach search to compare meaning instead of spelling, and then run your own failed questions through it.':
    'Pichhle chapter mein aapne keyword search ko fail hote dekha. User ne likha <em>money back</em>, document mein tha <em>reimbursement</em>, aur match ka score zero aaya. Ab hum ise theek karte hain. Yahan aap search ko spelling ki jagah matlab compare karna sikhayenge, aur phir apne hi fail hue sawaal usme chalayenge.',
  'A map of meanings':
    'Meanings ka ek map',
  'To match meaning, you might think the computer needs to truly understand language. It doesn’t. The method is simpler than that, and an everyday picture will show you how it works.':
    'Matlab match karne ke liye aapko lag sakta hai ki computer ko language asal mein samajhni padegi. Aisa nahi hai. Tareeka isse kahin simple hai, aur ek roz ki tasveer se aap samajh jayenge.',
  'Imagine a very large map where every sentence has a position. Sentences with similar meanings sit close together, and unrelated sentences sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are close neighbours, even though they share no words.':
    'Ek bahut bada map sochiye jisme har sentence ki ek jagah hai. Milte-julte matlab wale sentences paas-paas baithte hain, aur bekaar ke sentences door. <em>When do I get my money back</em> aur <em>reimbursement of approved claims</em> padosi hain, chahe unme ek bhi word common nahi.',
  'So who places the sentences on the map? A separate, smaller model does. You give it some text, and it gives back a long list of numbers, which are the text’s coordinates. That list is called an <strong>embedding</strong>, and the model that makes it is an <strong>embedding model</strong>.':
    'Toh sentences ko map par kaun rakhta hai? Ek alag, chhota model. Aap use kuch text dete hain, aur woh numbers ki ek lambi list wapas deta hai, jo us text ke coordinates hain. Us list ko <strong>embedding</strong> kehte hain, aur jo model use banata hai woh <strong>embedding model</strong> hai.',
  'Once every chunk has a position, finding the relevant ones becomes a question of distance. You get the position of the question, then pick the chunks closest to it. Comparing two positions gives you one number that says how similar they are. Try it here:':
    'Jab har chunk ki ek jagah ho jaati hai, toh kaam ke chunks dhoondhna doori ka sawaal ban jaata hai. Aap sawaal ki jagah nikalte hain, phir uske sabse paas wale chunks chunte hain. Do jagahon ko compare karne par ek number milta hai jo batata hai ki woh kitne similar hain. Yahan try kijiye:',
  'A number between 0 and 1':
    '0 aur 1 ke beech ka ek number',
  'Predict before you check: <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share no words. How similar will they score?':
    'Check karne se pehle andaaza lagaiye: <em>when do I get my money back?</em> aur <em>disbursement of approved claim amounts</em> mein ek bhi word common nahi. Unka similarity score kitna aayega?',
  'High, usually above 0.6 and often near 0.8. The position comes from meaning, so two texts that mean the same thing land close together, however they are worded.':
    'Zyada, aksar 0.6 se upar aur kai baar 0.8 ke aas-paas. Jagah matlab se tay hoti hai, isliye jin do texts ka matlab ek hai woh paas-paas aate hain, chahe unhe kisi bhi tarah likha gaya ho.',
  'Be careful with this scale, though. The score can run from −1 to 1, but real text rarely scores below about 0.1. So 0.5 doesn’t mean “half similar”. It sits near the low end of the useful range. A similarity number tells you little unless you also know what clearly good and clearly bad matches score.':
    'Is scale ke saath thoda dhyaan rakhiye. Score −1 se 1 tak ja sakta hai, lekin asli text ka score shaayad hi kabhi 0.1 se neeche jaata hai. Isliye 0.5 ka matlab “aadha similar” nahi hai. Woh kaam ke range ke neeche wale hisse ke paas hai. Similarity number se kuch zyada pata nahi chalta, jab tak aapko yeh bhi na pata ho ki saaf achhe aur saaf kharab matches ka score kya aata hai.',
  'Build it in code':
    'Ise code mein banaiye',
  'Now let’s make the map real. In a moment you’ll type a few lines that create embeddings and measure how close two of them are.':
    'Ab is map ko asli banate hain. Thodi der mein aap kuch lines type karenge jo embeddings banati hain aur naapti hain ki do embeddings kitne paas hain.',
  'Create embeddings and compare them':
    'Embeddings banaiye aur compare kijiye',
  'Type this carefully. It’s the most important code in Part I. It turns text into an embedding, and then measures how similar two embeddings are.':
    'Ise dhyaan se type kijiye. Part I ka yeh sabse zaroori code hai. Yeh text ko embedding mein badalta hai, aur phir naapta hai ki do embeddings kitne similar hain.',
  'Each embedding has 1,024 numbers. The words <code>contract</code>, <code>agreement</code> and <code>MoU</code> score high with each other, around 0.5 to 0.8. Every pair that includes <code>sandwich</code> scores clearly lower. You’ve just measured meaning with one line of arithmetic.':
    'Har embedding mein 1,024 numbers hote hain. <code>contract</code>, <code>agreement</code> aur <code>MoU</code> ek-doosre ke saath zyada score karte hain, lagbhag 0.5 se 0.8. <code>sandwich</code> wala har pair saaf kam score karta hai. Aapne abhi arithmetic ki ek line se meaning naap liya.',
  'Questions and passages are embedded differently':
    'Sawaal aur passages alag tarah se embed hote hain',
  'There’s one detail to know before you search. A question is short and phrased as a question. The passage that answers it is longer and phrased as a statement.':
    'Search karne se pehle ek detail jaanna zaroori hai. Sawaal chhota hota hai aur sawaal ki tarah likha hota hai. Jis passage mein uska jawaab hai, woh lamba hota hai aur ek statement ki tarah likha hota hai.',
  'Good embedding models are trained with this difference in mind, so they expect you to say which one you’re embedding. That’s why the code above has an <code>input_type</code>. If you get it wrong, nothing breaks, but the results quietly get worse.':
    'Achhe embedding models ko is farq ko dhyaan mein rakh kar train kiya jaata hai, isliye woh chahte hain ki aap bataiye ki aap kaun sa embed kar rahe hain. Isliye upar ke code mein <code>input_type</code> hai. Agar aap ise galat dein, toh kuch toot-ta nahi, lekin results chupke se kharab ho jaate hain.',
  'Search your own chunks by meaning':
    'Apne chunks ko meaning se search kijiye',
  'Now for the moment this chapter has been building towards. You’ll take the questions that keyword search failed, and ask them again, this time by meaning.':
    'Ab woh pal aaya jiski taraf yeh chapter badh raha tha. Aap woh sawaal lenge jo keyword search ne galat kiye the, aur unhe is baar meaning se dobara poochenge.',
  'Rerun the questions keyword search failed':
    'Jo sawaal keyword search galat kar gaya, unhe dobara chalaiye',
  'Paste in the text of the cards you cut in Chapter 3, as a list, and create an embedding for each one.':
    'Chapter 3 mein aapne jo cards kaate the, unka text ek list ki tarah paste kijiye, aur har ek ka embedding banaiye.',
  'Questions that scored zero with keyword search may now rank the correct card much higher. Run all three harder questions and compare with your handwritten rankings. The second-language result depends on this model and your documents, so write down the actual ranks and scores.':
    'Jin sawaalon ka keyword search mein score zero tha, unme ab sahi card kaafi upar rank ho sakta hai. Teeno mushkil sawaal chalaiye aur apni haath se likhi rankings se compare kijiye. Doosri language ka result is model aur aapke documents par depend karta hai, isliye asli ranks aur scores note kijiye.',
  'One more check. Remember that search always returns something, even when the document has no answer. Let’s see whether meaning changes that.':
    'Ek aur check. Yaad rakhiye ki search hamesha kuch na kuch wapas karta hai, chahe document mein jawaab ho hi na. Dekhte hain ki meaning se kuch badalta hai ya nahi.',
  'Ask something the document does not cover':
    'Aisa kuch poochiye jo document mein nahi hai',
  'Ask a question the document cannot answer. It doesn’t need to be hard. An unrelated one is fine.':
    'Aisa sawaal poochiye jiska jawaab document de hi nahi sakta. Mushkil sawaal hona zaroori nahi. Koi bekaar ka, alag topic wala sawaal bhi chalega.',
  'Three chunks come back anyway, with scores around 0.2 to 0.4 that don’t obviously look wrong. Search still never says “nothing here”. And without a baseline, you can’t yet tell a low score from a normal one. Chapter 6 builds that baseline.':
    'Phir bhi teen chunks wapas aate hain, aur unke scores 0.2 se 0.4 ke aas-paas hote hain jo dekhne mein galat nahi lagte. Search ab bhi kabhi “yahan kuch nahi hai” nahi kehta. Aur ek baseline ke bina, aap abhi kam score aur normal score mein farq nahi bata sakte. Chapter 6 woh baseline banata hai.',
  'Where embeddings fail':
    'Embeddings kahan fail hote hain',
  'Embeddings are impressive, but they have limits. An embedding model is only as good as the text it learned from, and that was mostly English text from the internet.':
    'Embeddings kaafi accha kaam karte hain, lekin unki bhi limits hain. Ek embedding model utna hi accha hota hai jis text se usne seekha hai, aur woh zyadatar internet ka English text tha.',
  'If your vocabulary was rare in that text, the model places it badly. Two things your users see as different may end up close together. Or two things they see as the same may end up far apart.':
    'Agar aapki vocabulary us text mein kam thi, toh model use galat jagah rakhta hai. Do cheezein jinhe aapke users alag samajhte hain, paas-paas aa sakti hain. Ya do cheezein jinhe woh ek hi samajhte hain, door-door ho sakti hain.',
  'Think about your own domain and users. Where would a model trained mostly on English internet text put two things close together that your users see as different, or far apart when your users mean the same thing?':
    'Apne domain aur users ke baare mein sochiye. Zyadatar English internet text par train hua model kahan do aisi cheezein paas rakh dega jinhe aapke users alag samajhte hain, ya door rakh dega jab aapke users ka matlab ek hi hai?',
  'In our domain the model would get … wrong, because …':
    'Hamare domain mein model … galat karega, kyunki …',
  'Indian financial and legal vocabulary has many examples: <em>lakh</em> and <em>crore</em>, NEFT and IMPS, and government scheme names that differ by one word but mean very different amounts. Regional languages typed in English letters, such as <em>paisa kab milega</em>, are another. So are internal terms: two product codenames mean different things to you and nothing to the model, so it places them by spelling. Try to name these failures before a user finds them.':
    'Indian financial aur legal vocabulary mein kai example hain: <em>lakh</em> aur <em>crore</em>, NEFT aur IMPS, aur scheme ke woh naam jo sirf ek word se alag hain lekin amounts bahut alag hain. English letters mein likhi regional languages, jaise <em>paisa kab milega</em>, ek aur example hain. Internal terms bhi: do product codenames aapke liye alag hain, model ke liye kuch nahi, isliye woh unhe spelling se rakhta hai. User se pehle in failures ke naam le lijiye.',
  'Embeddings are the basis of most “chat with your documents” products, and they work well. But they still return the nearest chunks every time, even when nothing is close. So the problem from Chapter 4 is still there.':
    'Embeddings zyadatar “apne documents se chat karo” wale products ki buniyaad hain, aur woh achhe kaam karte hain. Lekin woh har baar sabse paas wale chunks wapas karte hain, chahe kuch bhi paas na ho. Isliye Chapter 4 wali problem ab bhi bani hui hai.',
  'Next, in Chapter 6, you’ll learn how to measure that problem, and how to tell whether your search is working.':
    'Agle chapter, Chapter 6 mein, aap seekhenge ki is problem ko kaise naapte hain, aur kaise pata karte hain ki aapka search sahi kaam kar raha hai ya nahi.',
  'Turn the rules into code, and compare them with finding by meaning':
    'Rules ko code mein badaliye, aur unhe meaning se dhoondhne ke saath compare kijiye',
  'So far your rules are written on paper. In this chapter you learned that a computer can compare the meaning of sentences, not just their words, by turning them into lists of numbers called embeddings. Now you’ll turn your pattern rules into code. Then you’ll use meaning to find the sentences the rules can’t, and compare the two approaches on your answer key.':
    'Ab tak aapke rules kaagaz par likhe hain. Is chapter mein aapne seekha ki computer sentences ke words hi nahi, unka matlab bhi compare kar sakta hai, unhe numbers ki list mein badal kar jise embeddings kehte hain. Ab aap apne pattern rules ko code mein badlenge. Phir meaning se woh sentences dhoondhenge jo rules nahi dhoondh paate, aur dono tareekon ko apne answer key par compare karenge.',
  'Your <code>chapter-5</code> notebook, for the code and the comparison, next to your hand-scored results from Chapter 4. Write up the comparison in the notes box below.':
    'Aapka <code>chapter-5</code> notebook, code aur comparison ke liye, Chapter 4 ke haath se score kiye results ke saath. Comparison ko neeche notes box mein likhiye.',
  'In your <code>chapter-5</code> notebook, turn your plain-word rules for PAN, Aadhaar, mobile number and email into code. Each one is a short pattern. Run them over the twelve rows of the answer key and print what each finds.':
    'Apne <code>chapter-5</code> notebook mein PAN, Aadhaar, mobile number aur email ke saade-words wale rules ko code mein badaliye. Har ek ek chhota pattern hai. Unhe answer key ki baarah rows par chalaiye aur print kijiye ki har ek kya dhoondhta hai.',
  'Score the code. In how many of the twelve rows did it give exactly the right answer? Which rows did it miss or get wrong? Compare this with your by-hand result from Chapter 4. Are they the same?':
    'Code ko score kijiye. Baarah rows mein se kitni mein usne bilkul sahi jawaab diya? Kaun si rows chhoot gayi ya galat nikli? Ise Chapter 4 ke apne haath wale result se compare kijiye. Kya dono same hain?',
  'Write five sentences that give away a person without any ID, such as “I am the only diabetic patient in my village who had a transplant last year”. Also write five harmless sentences, such as “What documents do I need to renew my driving licence?”.':
    'Paanch aise sentences likhiye jo bina kisi ID ke bhi kisi insaan ko pehchaan wala bana dete hain, jaise “I am the only diabetic patient in my village who had a transplant last year”. Saath mein paanch harmless sentences bhi likhiye, jaise “What documents do I need to renew my driving licence?”.',
  'Use the embedding function from the chapter to turn all ten sentences into numbers. For each of the ten sentences, find the closest of your five giveaway examples and print the similarity score.':
    'Chapter ke embedding function se saare das sentences ko numbers mein badaliye. Har sentence ke liye, apne paanch giveaway examples mein se sabse paas wala dhoondhiye aur similarity score print kijiye.',
  'Look at the scores. Where is the line between a harmless sentence and an identifying one? Choose a cut-off, and count how many of the ten it sorts correctly.':
    'Scores dekhiye. Harmless sentence aur pehchaan batane wale sentence ke beech line kahan hai? Ek cut-off chuniye, aur ginti kijiye ki woh das mein se kitne sahi sort karta hai.',
  'Write a comparison table for the rules and for meaning: what each finds well, what each misses, and what each costs. Include one case where meaning does worse than the rules.':
    'Rules aur meaning ke liye ek comparison table likhiye: har ek kya accha dhoondhta hai, kya chhod deta hai, aur uski cost kya hai. Ek aisa case zaroor daaliye jahan meaning rules se kharab kaam karta hai.',
  'Your pattern rules as working code, with the score on the twelve rows.':
    'Aapke pattern rules working code ki tarah, baarah rows par score ke saath.',
  'Ten sentences, five identifying and five harmless, with their similarity scores and your chosen cut-off.':
    'Das sentences, paanch pehchaan batane wale aur paanch harmless, unke similarity scores aur aapke chune hue cut-off ke saath.',
  'A comparison table of rules and meaning, including one case where meaning does worse.':
    'Rules aur meaning ki ek comparison table, jisme ek aisa case bhi ho jahan meaning kharab kaam karta hai.',

  /* ---- ch6: Evaluation: measuring whether search works ---- */
  'Evaluation: measuring whether search works':
    'Evaluation: search kaam karta hai ya nahi, yeh naapna',
  'A good demo is not evidence. You’ll write an answer key before testing, measure how often search finds the right chunk, and see how precision and recall pull against each other.':
    'Ek achha demo evidence nahi hota. Aap test karne se pehle ek answer key likhenge, naapenge ki search kitni baar sahi chunk dhoondhta hai, aur dekhenge ki precision aur recall ek-doosre ke khilaaf kaise khinchte hain.',
  'Predict how many of ten questions will find the right chunk at k=3. Write the number down and circle it.':
    'Andaaza lagaiye ki das mein se kitne sawaal k=3 par sahi chunk dhoondhenge. Number likhiye aur uske gird circle bana dijiye.',
  'Build your ground truth, including one question that can’t be answered. Then measure at k=1, k=3 and k=8.':
    'Apna ground truth banaiye, jisme ek aisa sawaal ho jiska jawaab nahi diya ja sakta. Phir k=1, k=3 aur k=8 par naapiye.',
  'Change one thing about how search works, and run the whole set again.':
    'Search ke kaam karne ke tareeke mein ek cheez badaliye, aur poora set dobara chalaiye.',
  'An evaluation table, a list of acceptance criteria, and a threshold that decides whether you release.':
    'Ek evaluation table, acceptance criteria ki ek list, aur ek threshold jo tay kare ki release karna hai ya nahi.',
  'Defend why the quality bar depends on what a failure costs, not on the technology.':
    'Samjhaiye ki quality ka bar technology par nahi, is par depend karta hai ki failure ki cost kya hai.',
  'It returns a ranked list whatever you ask.':
    'Chahe aap kuch bhi poochiye, woh ek ranked list wapas karta hai.',
  'Embeddings find the nearest chunks':
    'Embeddings sabse paas wale chunks dhoondhte hain',
  'Which is not the same as finding the right answer.':
    'Jo sahi jawaab dhoondhne jaisa nahi hai.',
  'Explain what a team must build before it can honestly claim an accuracy number.':
    'Samjha paana ki ek team ko accuracy ka number claim karne se pehle imaandaari se kya banana padta hai.',
  'Describe the two ways a search step fails, and why fixing one tends to make the other worse.':
    'Samjha paana ki search step do tareeke se fail hota hai, aur ek ko theek karne par doosra aksar kharab kyun ho jaata hai.',
  'Decide which failure is worse for a feature you work on, and defend the choice.':
    'Aap jis feature par kaam karte hain, uske liye tay kar paana ki kaun sa failure zyada kharab hai, aur apne faisle ko defend kar paana.',
  'You need a pen and paper, plus your <code>chapter-5</code> notebook for the measurements. Bring the document from Chapter 3 and the <code>retrieve</code> function from Chapter 5.':
    'Aapko pen aur paper chahiye, aur naapne ke liye apna <code>chapter-5</code> notebook. Chapter 3 ka document aur Chapter 5 ka <code>retrieve</code> function saath rakhiye.',
  'By now you have a search step that finds chunks by meaning, and it seems to work. But sooner or later, someone senior will ask: is it good? Often the answer is a demo of three questions that work. That doesn’t tell you how often the system is right.':
    'Ab tak aapke paas ek aisa search step hai jo meaning se chunks dhoondhta hai, aur woh kaam karta hua lagta hai. Lekin aaj nahi toh kal, koi senior poochega: kya yeh achha hai? Aksar jawaab hota hai teen sawaalon ka ek demo jo chal jaata hai. Isse yeh nahi pata chalta ki system kitni baar sahi hai.',
  'In this chapter you’ll learn how to measure it properly. It isn’t complicated. If you’ve ever written acceptance criteria, you already know most of it. It comes down to three ideas.':
    'Is chapter mein aap seekhenge ki ise sahi tareeke se kaise naapte hain. Yeh mushkil nahi hai. Agar aapne kabhi acceptance criteria likhe hain, toh aap zyadatar jaante hain. Yeh teen ideas par aata hai.',
  'Idea 1: Write the answers before you test':
    'Idea 1: Test karne se pehle jawaab likhiye',
  'Suppose you test a system by asking it questions and checking whether the answers look right. They will look right, because plausible text is exactly what a model produces. That test tells you nothing.':
    'Maan lijiye aap kisi system ko sawaal pooch kar test karte hain aur dekhte hain ki jawaab sahi lagte hain ya nahi. Woh sahi hi lagenge, kyunki model jo banata hai woh tarah-tarah ka plausible text hi hota hai. Aise test se kuch pata nahi chalta.',
  'So first write a list of real questions, each with its verified correct answer. This list is called <strong>ground truth</strong>. It’s simply an answer key, written before the test.':
    'Isliye pehle asli sawaalon ki ek list likhiye, har sawaal ke saath uska verified sahi jawaab. Is list ko <strong>ground truth</strong> kehte hain. Yeh bas ek answer key hai, jo test se pehle likhi gayi.',
  'Ten to thirty questions is enough to start. Use real questions, in the words users actually use. Questions written after reading the documents will use the documents’ words, and they make search look better than it is.':
    'Shuru karne ke liye das se tees sawaal kaafi hain. Asli sawaal lijiye, un words mein jo users asal mein use karte hain. Documents padhne ke baad likhe sawaal documents ke hi words use karte hain, aur search ko asli se behtar dikhate hain.',
  'Write the answer key':
    'Answer key likhiye',
  'Using your Chapter 3 document, write ten questions: the eight you already have, plus two new ones. One of the new questions must be unanswerable, about something the document doesn’t cover.':
    'Apne Chapter 3 ke document ke liye das sawaal likhiye: jo aath aapke paas pehle se hain, aur do naye. Naye sawaalon mein se ek aisa hona chahiye jiska jawaab nahi diya ja sakta, kisi aisi cheez ke baare mein jo document mein hai hi nahi.',
  'For each question, record the verified answer and the number of the card or cards that contain it. Verified means you checked, not that you remembered.':
    'Har sawaal ke liye verified jawaab note kijiye, aur us card ya cards ka number jisme woh hai. Verified matlab aapne check kiya, yaad se nahi likha.',
  'You now have a ten-row table, written before any measurement. This is your ground truth. Include an unanswerable row in every answer key you write.':
    'Ab aapke paas das rows ki ek table hai, jo kisi bhi measurement se pehle likhi gayi. Yahi aapka ground truth hai. Har answer key mein ek unanswerable row zaroor rakhiye.',
  'Before you measure anything, make one prediction. It’s quick, and it teaches you something.':
    'Kuch bhi naapne se pehle, ek andaaza lagaiye. Isme thoda hi time lagta hai, aur isse aap kuch seekhte hain.',
  'A fraction, like 6/10':
    'Ek fraction, jaise 6/10',
  'Predict: you build a search step, write ten honest questions and run them. How many will find the right chunk on the first try?':
    'Andaaza lagaiye: aap ek search step banate hain, das imaandaar sawaal likhte hain aur unhe chalate hain. Pehli koshish mein kitne sahi chunk dhoondhenge?',
  'Six or seven out of ten is a normal, healthy first result for a working system.':
    'Das mein se chhe ya saat ek chalte hue system ka normal, healthy pehla result hai.',
  'If you got nine or ten, the likely reason is that you wrote the questions after reading the documents. That tests whether search can find text using its own words, and that’s not what users do.':
    'Agar aapko nau ya das mile, toh sabse mumkin reason yeh hai ki aapne sawaal documents padhne ke baad likhe. Isse yeh test hota hai ki search text ko usi ke words se dhoondh sakta hai ya nahi, aur users aisa nahi karte.',
  'When a vendor quotes an accuracy number, ask: <em>against which answer key, written by whom, and can I see the questions?</em> If they can’t show you, the number is not evidence.':
    'Jab koi vendor accuracy ka number batata hai, toh poochiye: <em>kaun si answer key ke against, kisne likhi, aur kya main sawaal dekh sakta hoon?</em> Agar woh dikha nahi sakte, toh woh number evidence nahi hai.',
  'Now let’s put your own search to the test, starting with a guess.':
    'Ab chaliye apne search ko test karte hain, ek andaaze se shuru karke.',
  'Predict, then measure':
    'Pehle andaaza, phir measurement',
  'Before you run anything, predict: of the nine answerable questions, how many will return the right card with <code>k=3</code>? Write the number down.':
    'Kuch bhi chalane se pehle andaaza lagaiye: nau answerable sawaalon mein se kitne <code>k=3</code> par sahi card wapas karenge? Number likh lijiye.',
  'Grade the run against your answer key. Count how many of the nine succeeded. Count how many of the twenty-seven returned cards were relevant. Then look at what came back for the unanswerable question, and note its top score.':
    'Run ko apni answer key ke against grade kijiye. Ginti kijiye ki nau mein se kitne sahi nikle. Ginti kijiye ki wapas aaye 27 cards mein se kitne relevant the. Phir dekhiye ki unanswerable sawaal ke liye kya wapas aaya, aur uska top score note kijiye.',
  'Compare the result with your prediction. Most people predict too high. Write one sentence about the size of your gap. That gap is the reason a demo should not decide whether a system ships.':
    'Result ko apne andaaze se compare kijiye. Zyadatar log zyada andaaza lagate hain. Apne gap ki size ke baare mein ek sentence likhiye. Isi gap ki wajah se demo ko yeh tay nahi karna chahiye ki system ship hoga ya nahi.',
  'Idea 2: Precision and recall trade against each other':
    'Idea 2: Precision aur recall ek-doosre ke khilaaf kaam karte hain',
  'Imagine you ask an assistant to fetch the files for a meeting. They can go wrong in two ways. They can leave out something that mattered, or they can bring you a huge pile of things that didn’t.':
    'Sochiye aap kisi assistant se meeting ki files laane ko kehte hain. Woh do tareeke se galti kar sakte hain. Woh kuch zaroori cheez chhod sakte hain, ya woh aapke saamne cheezon ka dher laga sakte hain jo kaam ki nahi thin.',
  'Leaving out what mattered is poor <strong>recall</strong>. Bringing lots of irrelevant material is poor <strong>precision</strong>. In search, the setting that sits between the two is how many chunks you fetch per question. It’s usually called <strong>k</strong>.':
    'Jo zaroori tha use chhod dena kharab <strong>recall</strong> hai. Bahut saari irrelevant cheezein le aana kharab <strong>precision</strong> hai. Search mein, dono ke beech ki setting yeh hai ki aap har sawaal par kitne chunks laate hain. Ise aam taur par <strong>k</strong> kehte hain.',
  'A higher k usually improves recall and lowers precision. A lower k does the reverse. These are tendencies, not guarantees, so measure them on your own questions.':
    'Zyada k se aam taur par recall behtar hota hai aur precision kam. Kam k se ulta hota hai. Yeh jhukaav hain, guarantee nahi, isliye ise apne sawaalon par naapiye.',
  'You usually can’t maximise both at once. Try changing k and watch what happens:':
    'Aap aam taur par dono ko ek saath maximum nahi kar sakte. k badal kar dekhiye ki kya hota hai:',
  'Change k and compare':
    'k badaliye aur compare kijiye',
  'Grade the same ten questions again at <code>k=1</code> and at <code>k=8</code>, and fill in this table by hand:':
    'Wahi das sawaal <code>k=1</code> aur <code>k=8</code> par dobara grade kijiye, aur yeh table haath se bhariye:',
  'k':
    'k',
  'correct-card hits (of 9)':
    'sahi card mile (9 mein se)',
  'relevant / total fetched':
    'relevant / kul laye gaye',
  '1':
    '1',
  '… / 9':
    '… / 9',
  '3':
    '3',
  '… / 27':
    '… / 27',
  '8':
    '8',
  '… / 72':
    '… / 72',
  'A higher k often finds more correct cards, but a smaller share of what it returns is relevant. Measure both on your documents. More chunks also means more tokens per request, and the actual cost also depends on chunk sizes, prompt length, output length, caching and pricing. Record real token counts and latency before deciding.':
    'Zyada k se aksar zyada sahi cards mil jaate hain, lekin jo wapas aata hai usme relevant ka hissa kam ho jaata hai. Dono ko apne documents par naapiye. Zyada chunks ka matlab har request mein zyada tokens bhi hai, aur asli cost chunk sizes, prompt length, output length, caching aur pricing par bhi depend karti hai. Faisla karne se pehle asli token counts aur latency record kijiye.',
  'Idea 3: Which failure is worse depends on the product':
    'Idea 3: Kaun sa failure zyada kharab hai, yeh product par depend karta hai',
  'So if you can’t have both, which one should you protect? That’s a product decision, not an engineering one.':
    'Toh agar aap dono nahi paa sakte, toh kise bachana chahiye? Yeh product ka faisla hai, engineering ka nahi.',
  'Take a customer-facing bot that answers policy questions. Here, low precision is the dangerous failure. The model builds a confident, wrong answer from irrelevant material, and a wrong policy given to a customer is a liability. Missing an answer only creates a support ticket.':
    'Ek customer-facing bot lijiye jo policy ke sawaalon ka jawaab deta hai. Yahan kam precision khatarnaak failure hai. Model irrelevant material se ek confident, galat jawaab bana deta hai, aur customer ko di gayi galat policy ek liability hai. Jawaab chhoot jaane se bas ek support ticket banta hai.',
  'Now take a tool that helps a lawyer find precedents. It’s the opposite. A missed precedent can lose a case, while an extra irrelevant result costs thirty seconds of reading.':
    'Ab ek aisa tool lijiye jo vakeel ko precedents dhoondhne mein madad karta hai. Yahan ulta hai. Ek chhoota hua precedent case haraa sakta hai, jabki ek extra irrelevant result sirf 30 second ki padhai ka kharch hai.',
  'Choose the failure to minimise based on what happens to a real person when each one occurs. The product owner makes this decision, not the person who built the system.':
    'Jis failure se ek asli insaan ko zyada nuksaan hota hai, use kam karne ka target rakhiye. Yeh faisla product owner karta hai, system banane wala nahi.',
  'Think of something you work on. Which failure is cheap, and which is dangerous? Explain it in terms of what happens to a real user. Then say how many chunks you would fetch as a starting point.':
    'Aap jis cheez par kaam karte hain, uske baare mein sochiye. Kaun sa failure sasta hai, aur kaun sa khatarnaak? Ise ek asli user ke saath kya hota hai, is hisaab se samjhaiye. Phir batayiye ki shuruaat ke liye aap kitne chunks laayenge.',
  'For … the dangerous failure is … because … so I would start at k = …':
    '… ke liye khatarnaak failure … hai kyunki … isliye main k = … se shuru karunga',
  'A strong answer links the choice to a consequence. For example: “For our support assistant, irrelevant results are dangerous, because a wrong policy quoted to a customer creates a liability we then have to honour. Missing an answer only creates a ticket we were already getting. So we prioritise precision, start with a low k, and give the assistant a clear way to say it does not know.” The reasoning matters more than the number.':
    'Ek achhe jawaab mein choice ko ek nateeje se jod kar dikhaya jaata hai. Jaise: “Hamare support assistant ke liye irrelevant results khatarnaak hain, kyunki customer ko batayi galat policy ek liability banati hai jise humein nibhana padta hai. Jawaab chhoot jaane se bas ek ticket banta hai jo humein pehle se milta tha. Isliye hum precision ko pehle rakhte hain, kam k se shuru karte hain, aur assistant ko “mujhe nahi pata” kehne ka saaf tareeka dete hain.” Reasoning number se zyada zaroori hai.',
  'Most people discussing an AI feature don’t have an answer key. With one, you can say whether the system works, and back it with a number you measured yourself.':
    'AI feature par baat karne wale zyadatar logon ke paas answer key nahi hoti. Answer key ke saath aap bata sakte hain ki system kaam karta hai ya nahi, aur woh bhi ek aise number ke saath jo aapne khud naapa.',
  'You’ve now seen the whole search step: finding chunks by words, finding them by meaning, and measuring how well either one works. Next, in Chapter 7, you’ll put the pieces together with a model, and build your first retrieval-augmented generation (RAG) system.':
    'Ab tak aapne poora search step dekh liya: words se chunks dhoondhna, meaning se dhoondhna, aur naapna ki dono kitna accha kaam karte hain. Agle chapter, Chapter 7 mein, aap in sab ko ek model ke saath jodenge aur apna pehla retrieval-augmented generation (RAG) system banayenge.',
  'Build the scoreboard, and write a ship-or-not note':
    'Scoreboard banaiye, aur ek ship-karna-hai-ya-nahi ka note likhiye',
  'Until now you’ve judged the tool by looking at it. Now you’ll give it a number. In this chapter you learned that a search can fail in two ways: it can miss something that was there, or return something that wasn’t. For Bharat Privacy Guard, a missed detail is a leak, and a false alarm is an annoyance. Here you’ll measure both, for each kind of ID and each kind of writing, and decide whether this version is good enough to use.':
    'Ab tak aapne tool ko dekh kar judge kiya hai. Ab aap use ek number denge. Aapne seekha ki search do tareeke se fail hota hai: jo wahan tha woh chhod deta hai, ya jo wahan nahi tha woh wapas kar deta hai. Bharat Privacy Guard mein chhoota hua detail ek leak hai, aur false alarm ek pareshaani. Dono ko naapiye, har tarah ki ID aur writing ke liye, aur tay kijiye ki yeh version use karne layak hai ya nahi.',
  'Pen and paper for the thinking, plus your <code>chapter-5</code> notebook for the measurements. Write the note itself in the notes box below.':
    'Sochne ke liye pen aur paper, aur naapne ke liye aapka <code>chapter-5</code> notebook. Note khud neeche notes box mein likhiye.',
  'Grow the answer key to version 2, with about 30 rows spread evenly across English, Hindi and Hinglish. Include at least five tricky rows from the list on the project page. Save it as <code>evals/answer-key-v2.csv</code>.':
    'Answer key ko version 2 tak badhaiye, jisme lagbhag 30 rows English, Hindi aur Hinglish mein barabar baanti hui hon. Project page ki list mein se kam se kam paanch tricky rows rakhiye. Ise <code>evals/answer-key-v2.csv</code> ke naam se save kijiye.',
  'Run the pattern checker from Chapter 5 on all 30 rows. For every item that should be found, mark it found or missed. For every item the tool reported, mark it correct or a false alarm.':
    'Chapter 5 ka pattern checker saari 30 rows par chalaiye. Jo item milna chahiye tha, use found ya missed mark kijiye. Jo item tool ne report kiya, use correct ya false alarm mark kijiye.',
  'Calculate recall (the share of real items that were found) and precision (the share of reported items that were real) for each kind of ID, and for each kind of writing. Put the results in two small tables.':
    'Har tarah ki ID ke liye, aur har tarah ki writing ke liye, recall (asli items mein se kitne mile) aur precision (report kiye items mein se kitne asli the) nikaliye. Results ko do chhoti tables mein rakhiye.',
  'Run it at two settings of your choice, for example strict matching and loose matching. Record the numbers for both.':
    'Ise apni pasand ki do settings par chalaiye, jaise strict matching aur loose matching. Dono ke numbers record kijiye.',
  'Decide which failure is worse for this tool, a missed detail or a false alarm, and explain why in two sentences. Think about what happens to a real person in each case.':
    'Tay kijiye ki is tool ke liye kaun sa failure zyada kharab hai, chhoota hua detail ya false alarm, aur do sentences mein bataiye kyun. Sochiye ki har case mein ek asli insaan ke saath kya hota hai.',
  'Write the note. Recommend one setting, say which failure you’ve decided to accept and who made that decision, and say whether this version is good enough to use.':
    'Note likhiye. Ek setting recommend kijiye, bataiye ki aapne kaun sa failure accept karne ka faisla kiya hai aur yeh faisla kisne kiya, aur yeh bhi bataiye ki yeh version use karne ke liye kaafi accha hai ya nahi.',
  'The answer key, version 2, with about 30 rows, saved in your repository.':
    'Answer key, version 2, lagbhag 30 rows ke saath, aapki repository mein save ki hui.',
  'Two tables of recall and precision: one for each kind of ID and one for each kind of writing.':
    'Recall aur precision ki do tables: ek har tarah ki ID ke liye aur ek har tarah ki writing ke liye.',
  'The numbers for two settings.':
    'Do settings ke numbers.',
  'A note that recommends a setting, names the failure you accept and says whether this version is good enough.':
    'Ek note jo ek setting recommend kare, jis failure ko aap accept karte hain uska naam le, aur bataye ki yeh version kaafi accha hai ya nahi.',

  /* ---- ch7: Putting it together: retrieval-augmented generation (RAG) ---- */
  'Putting it together: retrieval-augmented generation (RAG)':
    'Sab kuch jodna: retrieval-augmented generation (RAG)',
  'You have already built every part of a RAG system in Chapters 1 to 6. In this chapter you join those parts into one function, give the pattern its name, and mark every place where it can fail without showing an error.':
    'Chapters 1 se 6 mein aap RAG system ka har hissa pehle hi bana chuke hain. Is chapter mein aap un sabko ek function mein jodenge, is pattern ko uska naam denge, aur woh har jagah mark karenge jahan system bina koi error dikhaye fail ho sakta hai.',
  'Draw the complete system from memory, and mark every failure you have personally watched happen.':
    'Poora system yaad se draw kijiye, aur jitni failures aapne khud hote dekhi hain, sab mark kijiye.',
  'Write the smallest end-to-end function that retrieves evidence and answers from it, with evidence ids and the usage block.':
    'Sabse chhota end-to-end function likhiye jo evidence retrieve kare aur usi se jawaab de, evidence ids aur usage block ke saath.',
  'Test a question that has no answer, test retrieved content that carries a planted instruction, and test the system with its instruction removed.':
    'Teen cheezein test kijiye: ek aisa sawaal jiska jawaab hai hi nahi, aisa retrieved content jisme planted instruction ho, aur woh system jisme se instruction hata di gayi ho.',
  'An architecture drawing with the failures marked in red, plus a working demo.':
    'Ek architecture drawing jisme failures red mein mark hon, aur saath mein ek chalta hua demo.',
  'You can explain every layer in your own words, without hiding behind a framework.':
    'Aap har layer apne shabdon mein samjha sakte hain, kisi framework ke peeche chhupe bina.',
  'You put the whole system together in this chapter.':
    'Is chapter mein aap poora system ek saath jodenge.',
  'This is because of the size limit and the cost.':
    'Kyunki size ki limit hai, aur cost bhi hai.',
  'Embeddings find relevant chunks':
    'Embeddings relevant chunks dhoondhte hain',
  'They match by meaning, not by shared words.':
    'Woh meaning ke hisaab se match karte hain, ek jaise words ke hisaab se nahi.',
  'An answer key shows whether it works':
    'Answer key batati hai ki system kaam kar raha hai ya nahi',
  'It also shows which failure you chose to accept.':
    'Aur yeh bhi batati hai ki aapne kaun si failure ko accept karna chuna.',
  'Draw the standard design behind most “chat with your documents” products.':
    'Zyadatar “chat with your documents” products ke peeche ka standard design draw kar paana.',
  'Point to each step and say what can go wrong there without any error appearing.':
    'Har step ko point karke bata paana ki wahan bina koi error aaye kya galat ho sakta hai.',
  'Rank the usual fixes by how much they help, and explain why a bigger model is rarely the best one.':
    'Aam fixes ko rank kar paana ki kaun kitni madad karta hai, aur samjha paana ki bada model aksar sabse achha fix kyun nahi hota.',
  'Open a new notebook called <code>chapter-7</code> and run the warm-up cells. Keep your <code>chapter-5</code> notebook open too, because you will copy across your <code>embed</code>, <code>cosine</code>, <code>chunks</code> and <code>chunk_vecs</code>. Nothing in this chapter is new. You are only joining things you already built.':
    '<code>chapter-7</code> naam ka ek naya notebook kholiye aur warm-up cells chalaiye. Apna <code>chapter-5</code> notebook bhi khula rakhiye, kyunki wahan se aap apne <code>embed</code>, <code>cosine</code>, <code>chunks</code> aur <code>chunk_vecs</code> copy karenge. Is chapter mein kuch bhi naya nahi hai. Aap sirf woh cheezein jod rahe hain jo aap pehle bana chuke hain.',
  'In the last chapter you measured whether your search works, using an answer key. So you now have all the parts of a system that answers questions from your own documents. This chapter puts them side by side, gives the whole thing its proper name, and shows you where it can go wrong quietly.':
    'Pichhle chapter mein aapne answer key ki madad se measure kiya tha ki aapka search kaam karta hai ya nahi. Toh ab aapke paas us system ke saare hisse hain jo aapke apne documents se sawaalon ke jawaab deta hai. Yeh chapter un sabko ek saath rakhta hai, poore system ko uska asli naam deta hai, aur dikhata hai ki woh chupchaap kahan galat ho sakta hai.',
  'The pattern has a name: RAG':
    'Is pattern ka ek naam hai: RAG',
  'Let’s start with what you have already built. You split your documents into chunks, and you create an embedding for each chunk. When a question comes in, you find the chunks closest to it. Then you send those chunks to the model together with the question, and the model answers from them.':
    'Pehle yaad kar lete hain ki aap kya bana chuke hain. Aap apne documents ko chunks mein split karte hain, aur har chunk ka ek embedding banate hain. Jab koi sawaal aata hai, toh aap us sawaal ke sabse paas wale chunks dhoondhte hain. Phir un chunks ko sawaal ke saath model ko bhejte hain, aur model unhi se jawaab deta hai.',
  'This pattern is called <strong>RAG</strong>, short for retrieval-augmented generation. <em>Generation</em> is the text model from Chapter 1. <em>Retrieval</em> is the search from Chapters 4 and 5. RAG is the most widely deployed pattern in applied AI, and most products that answer questions about your documents use it.':
    'Is pattern ko <strong>RAG</strong> kehte hain, matlab retrieval-augmented generation. <em>Generation</em> woh text model hai jo Chapter 1 mein tha. <em>Retrieval</em> woh search hai jo Chapters 4 aur 5 mein thi. RAG applied AI ka sabse zyada use hone wala pattern hai, aur aapke documents ke baare mein jawaab dene wale zyadatar products isi ko use karte hain.',
  'The course held back the name until now on purpose. You have built and broken every part of it. So the term points to something you have done, not something you memorised.':
    'Course ne yeh naam ab tak jaan-boojhkar rok kar rakha. Aapne iska har hissa khud banaya aur toda hai. Isliye yeh term kisi aisi cheez ki taraf ishaara karta hai jo aapne ki hai, kisi ratte hue shabd ki taraf nahi.',
  'Before we go further, try to see the whole thing in your head. Can you list the steps from a document arriving to an answer reaching a user, without looking back?':
    'Aage badhne se pehle, poori cheez ko apne dimaag mein dekhne ki koshish kijiye. Kya aap bina peeche dekhe bata sakte hain ki document ke aane se lekar user ke paas jawaab pahunchne tak kaun se steps hote hain?',
  'Without looking back, write the steps as a numbered list, from a document arriving to an answer reaching a user. Then star every step where a wrong answer can be produced <em>without any error appearing</em>.':
    'Bina peeche dekhe, document ke aane se lekar user tak jawaab pahunchne tak ke steps ek numbered list mein likhiye. Phir har us step par star lagaiye jahan <em>bina koi error aaye</em> galat jawaab ban sakta hai.',
  '1. … 2. … (star the silent failures)':
    '1. … 2. … (silent failures par star lagaiye)',
  'The steps: split into chunks → create embeddings → store them → embed the question → find the nearest chunks → send them with the question → generate the answer → show it with its sources. Almost every step can fail silently. Chunking can separate a rule from its exception. Search returns a top result even when your documents have no answer. The model writes fluently from an irrelevant chunk. None of these produce an error. The system does not crash; it just becomes wrong while every component reports success.':
    'Steps yeh hain: chunks mein split karna → embeddings banana → unhe store karna → sawaal ka embedding banana → sabse paas wale chunks dhoondhna → unhe sawaal ke saath bhejna → jawaab generate karna → jawaab sources ke saath dikhana. Lagbhag har step chupchaap fail ho sakta hai. Chunking kisi rule ko uske exception se alag kar sakta hai. Search tab bhi top result de deta hai jab aapke documents mein jawaab hai hi nahi. Model kisi irrelevant chunk se bhi fluently likh deta hai. In mein se kisi par error nahi aata. System crash nahi hota; woh bas galat ho jaata hai, jabki har component bol raha hota hai ki sab theek hai.',
  'Mark where it fails':
    'Dekhiye kahan fail hota hai',
  'That last point is the heart of this chapter. A normal program fails loudly, with a red error. A RAG system usually fails politely, with a smooth and confident answer that is wrong. So the best habit you can build is to know where each failure hides.':
    'Yeh aakhri baat is chapter ka asli dil hai. Normal program zor se fail hota hai, red error ke saath. RAG system aksar tameez se fail hota hai, ek smooth aur confident jawaab ke saath jo galat hota hai. Isliye sabse achhi aadat yeh hai ki aapko pata ho har failure kahan chhupti hai.',
  'Draw the pipeline and mark the failures':
    'Poora path draw kijiye aur failures mark kijiye',
  'Close everything. On paper, draw the whole path: documents → chunks → embeddings → storage → question → question embedding → nearest chunks → prompt assembled → answer. Next to each arrow, write what happens there.':
    'Sab kuch band kijiye. Kagaz par poora path draw kijiye: documents → chunks → embeddings → storage → sawaal → sawaal ka embedding → sabse paas wale chunks → prompt assemble hona → jawaab. Har arrow ke paas likhiye ki wahan kya hota hai.',
  'Then, in red, mark every place you have seen it fail yourself.':
    'Phir red mein woh har jagah mark kijiye jahan aapne khud ise fail hote dekha hai.',
  'You should find at least six. Candidates include the invented answer, the system prompt giving way under pressure, the split answer and the orphaned chunk. Others are keyword search missing meaning, search never returning “nothing”, the query-versus-passage mistake, felt versus measured quality, and the cost of every token. If you have fewer than six, check the earlier chapters again.':
    'Aapko kam se kam chhe milni chahiye. Kuch candidates yeh hain: invented jawaab, system prompt ka pressure mein jhuk jaana, split hua jawaab aur orphaned chunk. Baaki yeh hain: keyword search ka meaning miss karna, search ka kabhi “kuch nahi” return na karna, query-versus-passage wali galti, felt versus measured quality, aur har token ki cost. Agar aapko chhe se kam mile, toh pehle ke chapters dobara dekhiye.',
  'Assemble the system':
    'System ko jodiye',
  'Now let’s build the whole thing as one function. You won’t write anything new here. Each line comes from an earlier chapter, and the comments beside the code tell you which one.':
    'Ab hum poori cheez ko ek function mein bana lete hain. Yahan aap kuch naya nahi likhenge. Har line kisi pehle ke chapter se aati hai, aur code ke saath likhe comments batate hain ki kaun se chapter se.',
  'Build the RAG function':
    'RAG function banaiye',
  'Paste in your chunks from Chapter 5 first. Then add this function. Each line is something you built earlier, in the chapter noted beside it.':
    'Pehle Chapter 5 ke apne chunks paste kijiye. Phir yeh function add kijiye. Har line woh cheez hai jo aap pehle bana chuke hain, aur saath mein likha hai ki kaun se chapter mein.',
  'Run it three times, with three different kinds of question:':
    'Ise teen baar chalaiye, teen alag tarah ke sawaalon ke saath:',
  'Check the first answer against your source document. The second tests whether meaning search found evidence that keyword search missed. The third tests what happens when there is no answer. A refusal is not guaranteed, so record what actually happens. Retrieval plus instructions can reduce unsupported answers, not eliminate them.':
    'Pehle jawaab ko apne source document se check kijiye. Doosra test karta hai ki meaning search ko woh evidence mila ya nahi jo keyword search se chhoot gaya tha. Teesra test karta hai ki jab jawaab hai hi nahi, toh kya hota hai. Refusal ki guarantee nahi hai, isliye jo asal mein hota hai woh note kijiye. Retrieval plus instructions can reduce unsupported answers, not eliminate them.',
  'Treat the third run as a test result, not as proof of safety. Keep that question in your test set, and run it again whenever the model, the prompt, the retrieval or the documents change.':
    'Teesre run ko ek test result samajhiye, safety ka saboot nahi. Us sawaal ko apne test set mein rakhiye, aur jab bhi model, prompt, retrieval ya documents badlein, use dobara chalaiye.',
  'You have seen that the system needs two things to stay honest: the evidence, and the instruction. What happens if you take one of them away? Let’s find out.':
    'Aapne dekha ki system ko imaandaar rehne ke liye do cheezein chahiye: evidence, aur instruction. Agar inme se ek hata dein toh kya hoga? Chaliye dekhte hain.',
  'Remove the system prompt':
    'System prompt hata kar dekhiye',
  'Delete the system message and keep everything else. Ask about cricket again.':
    'System message delete kijiye aur baaki sab waisa hi rakhiye. Cricket ke baare mein dobara poochhiye.',
  'The model happily summarises whatever three irrelevant chunks ranked highest. Retrieval alone does not stop invented answers. You need both the evidence and the instruction; removing either one lets the problem back in. Put the system message back.':
    'Model khushi se un teen irrelevant chunks ka summary bana deta hai jo sabse upar rank hue the. Sirf retrieval invented jawaab ko nahi rokta. Aapko evidence aur instruction, dono chahiye; inme se koi ek bhi hata dein toh problem wapas aa jaati hai. System message wapas laga dijiye.',
  'Diagnose “bad answers”':
    '“Bad answers” ka diagnosis kijiye',
  'Sooner or later someone will tell you, “our AI assistant gives bad answers.” That is a symptom, not a diagnosis. At least four different problems look the same from the outside, and each one needs a different fix.':
    'Aaj nahi toh kal koi aapse kahega, “hamara AI assistant bad answers deta hai.” Yeh ek symptom hai, diagnosis nahi. Kam se kam chaar alag problems bahar se ek jaisi dikhti hain, aur har ek ka fix alag hota hai.',
  'The map below shows where each of them lives. Look at it with your red marks in mind.':
    'Neeche wala map dikhata hai ki inme se har ek kahan rehti hai. Ise apne red marks ko dhyaan mein rakhkar dekhiye.',
  'Now a question that every product person gets asked. If you have one quarter to improve answer quality, where should the effort go? Make your guess before reading on.':
    'Ab ek sawaal jo har product person se poochha jaata hai. Agar aapke paas answer quality sudharne ke liye ek quarter hai, toh mehnat kahan lagani chahiye? Aage padhne se pehle apna andaaza lagaiye.',
  'Your ranking, biggest impact first':
    'Aapki ranking, sabse zyada asar wala pehle',
  'You have one quarter to improve answer quality. Before reading on, rank these options: a more expensive model, better chunking, a reranking step, more work on the instructions, and cleaning up the documents.':
    'Aapke paas answer quality sudharne ke liye ek quarter hai. Aage padhne se pehle in options ko rank kijiye: ek mehnga model, behtar chunking, ek reranking step, instructions par zyada kaam, aur documents ki safai.',
  'Cleaning the documents and fixing the chunking usually help most. A reranking step is usually the next cheapest large improvement. A more expensive model usually costs the most and helps the least, because the model could already read; the right evidence was not reaching it.':
    'Documents ki safai aur chunking theek karna aksar sabse zyada madad karta hai. Reranking step aksar agla sabse sasta bada improvement hota hai. Mehnga model aksar sabse zyada kharch karata hai aur sabse kam madad karta hai, kyunki model ko padhna toh pehle se aata tha; sahi evidence uske paas pahunch hi nahi raha tha.',
  'This is a useful general rule: in a RAG system, quality problems are usually evidence problems, not model problems. Spend your effort on getting the right evidence to the model.':
    'Yeh ek kaam ka general rule hai: RAG system mein quality ki problems aksar evidence ki problems hoti hain, model ki nahi. Apni mehnat sahi evidence ko model tak pahunchane mein lagaiye.',
  'You have built a complete RAG system, from chunking to a grounded answer, and you have seen each part fail. You also know a useful rule: when answers are bad, look at the evidence before you blame the model.':
    'Aapne chunking se lekar grounded jawaab tak ka ek poora RAG system bana liya hai, aur har hisse ko fail hote bhi dekha hai. Aapko ek kaam ka rule bhi pata hai: jab jawaab bure hon, toh model ko dosh dene se pehle evidence dekhiye.',
  'Part II adds what this version still cannot do: structured output, tools, larger contexts and stronger retrieval. Next, you’ll test your system four ways and find those gaps yourself.':
    'Part II woh sab jodta hai jo yeh version abhi nahi kar sakta: structured output, tools, bade contexts aur zyada strong retrieval. Agle chapter mein aap apne system ko chaar tareekon se test karenge aur woh gaps khud dhoondhenge.',
  'Write the findings page for version 0':
    'Version 0 ka findings page likhiye',
  'You now have a first working version, which this course calls version 0, and a list of ways it fails. This capstone is not a build. It is the page you would want in front of you the next time someone demonstrates a privacy product and asks you to approve it. In this chapter you learned the standard parts of a system that answers from documents, and where each part can fail without any error appearing. Here you describe what you built in the same way.':
    'Ab aapke paas ek pehla chalta hua version hai, jise yeh course version 0 kehta hai, aur uske fail hone ke tareekon ki ek list. Yeh capstone koi build nahi hai. Yeh woh page hai jo aap tab apne saamne chahenge jab agli baar koi aapko privacy product ka demo dikhaye aur approve karne ko kahe. Is chapter mein aapne documents se jawaab dene wale system ke standard parts seekhe, aur yeh bhi ki har part bina koi error dikhaye kahan fail ho sakta hai. Yahan aap jo banaya hai usse isi tareeke se describe karenge.',
  'Written only. This capstone is not a build. Use your <code>chapter-7</code> notebook for the numbers, and write the page in the notes box below.':
    'Sirf likhna hai. Yeh capstone koi build nahi hai. Numbers ke liye apna <code>chapter-7</code> notebook use kijiye, aur page neeche wale notes box mein likhiye.',
  'Draw the tool as boxes and arrows on one page: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark which boxes exist today.':
    'Tool ko ek page par boxes aur arrows se draw kijiye: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark kijiye ki aaj kaun se boxes maujood hain.',
  'Under each box that exists, write what can go wrong without any error message appearing. For example: “A number split by a line break is silently missed.”':
    'Jo box maujood hai, uske neeche likhiye ki bina koi error message aaye kya galat ho sakta hai. Jaise: “Line break se toot gaya number chupchaap miss ho jaata hai.”',
  'Write the scoreboard numbers from Chapter 6 on the page.':
    'Chapter 6 ke scoreboard numbers page par likhiye.',
  'List the four biggest gaps you have seen. For each one, write what you saw when you triggered it.':
    'Aapne jo chaar sabse bade gaps dekhe, unki list banaiye. Har ek ke liye likhiye ki use trigger karne par aapne kya dekha.',
  'Rank the four gaps for a real user. In one line each, say what the failure would cost a real person.':
    'Chaaron gaps ko ek asli user ke hisaab se rank kijiye. Har ek ke liye ek line mein likhiye ki woh failure ek asli insaan ko kya cost karegi.',
  'Write what you will fix first and what it would take, in two sentences.':
    'Do sentences mein likhiye ki aap sabse pehle kya fix karenge aur uske liye kya lagega.',
  'A one-page drawing of the tool with the existing boxes marked.':
    'Tool ki ek page ki drawing, jisme maujood boxes mark hon.',
  'A silent failure written under each existing box.':
    'Har maujood box ke neeche likhi ek silent failure.',
  'The scoreboard numbers.':
    'Scoreboard numbers.',
  'The four biggest gaps, ranked, with the cost to a real person.':
    'Chaar sabse bade gaps, rank kiye hue, aur ek asli insaan ke liye unki cost ke saath.',
  'Two sentences on what you will fix first.':
    'Do sentences jisme likha ho ki aap sabse pehle kya fix karenge.'
});
