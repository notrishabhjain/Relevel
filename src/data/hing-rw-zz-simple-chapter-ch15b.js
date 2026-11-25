/* Hinglish for Context windows and statelessness: why models forget (chapter:ch15b), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Guess this first. Each time you chat, the old messages are sent again. Does the token count (the number of text bricks) go up or down?':
    'Pehle andaaza lagaiye. Har baar chat karne par purane messages dobara bheje jaate hain. Token count (text ki eenton ki ginti) badhegi ya ghategi?',
  'Make two separate calls (two separate messages to the model). Then make a third call that sends the old chat again. Compare the token counts of all three.':
    'Do alag-alag calls kijiye (model ko do alag message). Phir teesri call kijiye jisme purani chat dobara bhejni hai. Teenon ke token counts milaiye.',
  'Check if the model keeps anything between calls. It does not. You will catch it forgetting.':
    'Dekhiye ki model calls ke beech kuch yaad rakhta hai ya nahi. Nahi rakhta. Aap use bhoolte hue pakdenge.',
  'The same picture of a request as before. Now it also shows the context window (the model\'s desk) and statelessness (forgetting).':
    'Request ki wahi tasveer jo pehle thi. Ab usmein context window (model ki mez) aur statelessness (bhool jaana) bhi dikhte hain.',
  'Explain why a chat with fifty messages costs more per message than a chat with two.':
    'Samjhaiye ki pachaas message ki chat mein har message ki cost, do message ki chat se zyada kyun hoti hai.',
  'Every call has a size limit, like a desk that can hold only so many papers. And the model forgets everything between calls, like a goldfish. You will prove both in code. Then you will build a small chat memory yourself and see what it costs.':
    'Har call ki ek size limit hoti hai, jaise mez par ek hi had tak kaagaz aate hain. Aur model calls ke beech sab bhool jaata hai, goldfish jaisa. Dono baatein aap code se saabit karenge. Phir ek chhoti chat memory banayenge aur dekhenge ki uski cost kitni hai.',
  'Say what a context window (the model\'s desk) is, and what it does not protect you from.':
    'Bata paana ki context window (model ki mez) kya hai, aur woh aapko kis cheez se nahi bachati.',
  'Say how any chat “memory” feature really works.':
    'Bata paana ki chat ka koi bhi “memory” feature asal mein kaise kaam karta hai.',
  'Guess what a long chat will cost, before anyone builds it.':
    'Kuch banne se pehle andaaza laga paana ki ek lambi chat ki cost kitni hogi.',
  'Find out what it costs to check a long chat':
    'Pata kijiye ki ek lambi chat ko check karne mein kitna kharcha aata hai',
  'A model remembers nothing between calls. A chat only feels like one long talk because every old message is sent again. That makes long chats cost more. Bharat Privacy Guard will sit in front of chats like this. So you need to know what it costs to check one. In this chapter you learned how chat memory really works, and how to guess a cost before anything is built. Now you do that for the project.':
    'Model calls ke beech kuch yaad nahi rakhta. Chat ek lambi baat jaisi sirf isliye lagti hai kyunki har purana message dobara bheja jaata hai. Isse lambi chat mehngi ho jaati hai. Bharat Privacy Guard aisi chats ke aage baithega. Isliye aapko jaanna hai ki ek chat check karne mein kitna kharcha hoga. Is chapter mein aapne seekha ki chat memory asal mein kaise chalti hai, aur kuch banne se pehle cost ka andaaza kaise lagate hain. Ab wahi aap is project ke liye karte hain.',
  'Use this chapter\'s own notebook (the page of code boxes) for the calls and the token counts. Write your last sentence in the notes box below. Short version for the route, about 20 minutes: steps 2, 3 and 4.':
    'Calls aur token counts ke liye is chapter ka apna notebook (code ke dibbon wala page) use kijiye. Apna aakhri sentence neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 2, 3 aur 4.',
  'Picture a bank\'s chat window. Every customer message goes through Bharat Privacy Guard before it reaches an AI model. Say what this feature does in one sentence.':
    'Ek bank ki chat window sochiye. Har customer message AI model tak pahunchne se pehle Bharat Privacy Guard se guzarta hai. Is feature ka kaam ek sentence mein likhiye.',
  'In this chapter\'s own notebook, write a chat of five messages. Use starter sentences 1, 3, 6, 7 and 9, in that order, as the customer\'s messages. Send them one at a time. Each time, send all the earlier messages again too.':
    'Is chapter ke apne notebook mein paanch messages ki chat likhiye. Customer ke messages ke roop mein starter sentences 1, 3, 6, 7 aur 9 isi order mein lijiye. Ek-ek karke bhejiye. Har baar pichhle saare messages bhi dobara bhejiye.',
  'After each message, print the prompt_tokens (the bricks you sent). Put the five numbers in a list (a row of boxes) and see how they grow.':
    'Har message ke baad prompt_tokens print kijiye (aapne jitni eenten bheji). Paanchon numbers ek list mein rakhiye (dibbon ki ek line) aur dekhiye woh kaise badhte hain.',
  'Do it again. This time send only the newest message each time. Compare the total tokens for the whole chat both ways.':
    'Dobara kijiye. Is baar har baar sirf sabse naya message bhejiye. Poori chat ke total tokens dono tareekon se milaiye.',
  'Look up your provider\'s price per million tokens. Work out the cost of one chat, and the cost of 1,000 chats, for both ways.':
    'Apne provider ka price per million tokens dekhiye. Dono tareekon ke liye ek chat ki cost aur 1,000 chats ki cost nikaliye.',
  'Write the one sentence you would say in a budget meeting. It gives the cost per 1,000 conversations and the guess most likely to be wrong.':
    'Woh ek sentence likhiye jo aap budget meeting mein kahenge. Usmein 1,000 conversations ki cost ho, aur woh andaaza jiske galat hone ka sabse zyada darr hai.',
  'The five prompt_tokens numbers, one for each message.':
    'Paanch prompt_tokens numbers, har message ke liye ek.',
  'The total tokens for the whole chat, counted both ways.':
    'Poori chat ke total tokens, dono tareekon se ginte hue.',
  'The cost of 1,000 conversations, both ways.':
    'Dono tareekon se 1,000 conversations ki cost.',
  'Your one budget sentence.':
    'Aapka budget wala ek sentence.',
  'So a sure-sounding voice does not prove the answer is right.':
    'Isliye pakka lagne wala andaaz is baat ka saboot nahi ki jawaab sahi hai.',
  'You pay for every token (every small brick of text)':
    'Aap har token ka paisa dete hain (text ki har chhoti eent ka)',
  'You have already read the usage block (the bill that comes with each reply) yourself.':
    'Usage block (har reply ke saath aane wala bill) aap khud padh chuke hain.',
  'You will run a chat that keeps growing, and watch what it costs.':
    'Aap ek badhti hui chat chalayenge aur dekhenge ki uski cost kitni hoti hai.',
  'The cells (the boxes of code) here share one Python session with Chapter 1. So <code>response</code> and everything else you made there is still around. You will need the usage code from the last chapter. This time you run it again and again in a loop (the same step repeated), and watch the numbers grow.':
    'Yahan ke cells (code ke dibbe) Chapter 1 ke saath ek hi Python session share karte hain. Isliye <code>response</code> aur wahan banai har cheez ab bhi maujood hai. Pichhle chapter ka usage code aapko chahiye hoga. Is baar aap use baar-baar loop mein chalayenge (wahi step dohrana) aur numbers ko badhte dekhenge.',
  'In Chapter 1 you saw two facts. A model writes answers from patterns. And you pay for every token. Now for the third fact. A model remembers nothing between calls. And each call has a size limit.':
    'Chapter 1 mein aapne do baatein dekhi thi. Model patterns se jawaab likhta hai. Aur aap har token ka paisa dete hain. Ab teesri baat. Model calls ke beech kuch yaad nahi rakhta. Aur har call ki ek size limit hoti hai.',
  'This chapter proves both facts in code. Then you build a small chat memory yourself and see what it costs.':
    'Yeh chapter dono baatein code mein saabit karta hai. Phir aap khud ek chhoti chat memory banate hain aur dekhte hain ki uski cost kitni hai.',
  'The context window is a size limit':
    'Context window ek size limit hai',
  'Think of a desk. Only so many papers fit on it. Everything you send in one call must fit on that desk: your question, your instructions, any documents, and the answer that comes back. This desk size is called the <strong>context window</strong>.':
    'Ek mez sochiye. Us par bas utne hi kaagaz aate hain. Ek call mein jo kuch bhi aap bhejte hain, sab us mez par samana chahiye: aapka sawaal, aapke instructions, koi documents, aur wapas aane wala jawaab. Is mez ke size ko <strong>context window</strong> kehte hain.',
  'The context window is the size of one request. It is not memory. A big desk does not make a model remember yesterday. Keep this in mind, because the next part is all about memory.':
    'Context window ek request ka size hai. Woh memory nahi hai. Badi mez se model kal ki baat yaad nahi rakhne lagta. Yeh yaad rakhiye, kyunki agla hissa poora memory ke baare mein hai.',
  'The model does not remember between calls':
    'Model calls ke beech yaad nahi rakhta',
  'Think of a helpline where a new person picks up every time. You must explain everything from the start, each time. A model works a bit like that. It is like a goldfish: it forgets as soon as the call ends.':
    'Ek helpline sochiye jahan har baar nayi person phone uthati hai. Har baar aapko sab kuch shuru se batana padta hai. Model kuch aisa hi hai. Woh goldfish jaisa hai: call khatam hote hi bhool jaata hai.',
  'A model keeps nothing between calls. Each request starts from zero. So the model does not know you spoke to it a minute ago. The grown-up word for this is <strong>stateless</strong>.':
    'Model calls ke beech kuch nahi rakhta. Har request zero se shuru hoti hai. Isliye model ko pata nahi hota ki aapne use ek minute pehle message kiya tha. Iska bada shabd hai <strong>stateless</strong>.',
  'Do not trust my word. Let us catch the model forgetting.':
    'Meri baat par bharosa mat kijiye. Chaliye model ko bhoolte hue pakadte hain.',
  'Prove the model forgets':
    'Saabit kijiye ki model bhool jaata hai',
  'Make two separate calls, one after the other:':
    'Do alag calls kijiye, ek ke baad ek:',
  'The second reply does not know your name. This is not a bug (a mistake in the code) or a setting. Nothing is carried from one call to the next.':
    'Doosra reply aapka naam nahi jaanta. Yeh koi bug (code ki galti) ya setting nahi hai. Ek call se doosri call tak kuch nahi jaata.',
  'How chat apps create memory':
    'Chat apps memory kaise banate hain',
  'A chat assistant seems to remember what you said five messages ago. How? The app sends it again. The model only ever sees the messages in the call in front of it. It is like handing a new helpline person your old notes each time.':
    'Chat assistant ko lagta hai ki use paanch message pehle ki baat yaad hai. Kaise? App use dobara bhej deta hai. Model sirf wahi messages dekhta hai jo us call mein hote hain. Yeh waisa hai jaise har baar nayi helpline person ko aap apne purane notes thama dein.',
  'An app can do this in a few ways. It can send the whole old chat. It can send a short summary. It can look up saved facts about you, called persistent user memory. Or it can keep the state of a task outside the model, called task state externally. The next step uses the simplest way: sending the old chat again.':
    'App yeh kayi tareekon se kar sakta hai. Woh poori purani chat bhej sakta hai. Woh ek chhota summary bhej sakta hai. Woh aapke baare mein saved baatein dhoondh sakta hai, jise persistent user memory kehte hain. Ya woh kisi kaam ki halat model ke bahar rakh sakta hai, jise task state externally kehte hain. Agla step sabse seedha tareeka use karta hai: purani chat dobara bhejna.',
  'Build a simple chat memory':
    'Ek simple chat memory banaiye',
  'Now it knows your name is Sam. This call includes the earlier message. And <code>prompt_tokens</code> (the bricks you sent) is higher, because you sent the old chat again. You have just built the most common kind of memory, and measured what it costs. Real apps may use summaries, saved facts or task state instead.':
    'Ab use pata hai ki aapka naam Sam hai. Is call mein pichhla message bhi shaamil hai. Aur <code>prompt_tokens</code> (aapki bheji hui eenten) zyada hai, kyunki aapne purani chat dobara bheji. Aapne abhi sabse aam tarah ki memory banai aur uski cost naapi. Asli apps iski jagah summaries, saved facts ya task state use kar sakte hain.',
  'You saw the cost go up by one message. Now picture a whole long chat. It is like a taxi meter that counts every old stop again. This tool shows how the cost grows over many turns:':
    'Aapne ek message se cost badhte dekhi. Ab ek poori lambi chat sochiye. Yeh taxi ke meter jaisa hai jo har purane stop ko dobara ginta hai. Yeh tool dikhata hai ki bahut turns mein cost kaise badhti hai:',
  'You now have three facts. Each one changes what you decide for a product:':
    'Ab aapke paas teen baatein hain. Har ek aapke product ke faisle badal deti hai:',
  '<strong>Models generate text.</strong> A sure-sounding voice tells you nothing. So you need a way to check answers.':
    '<strong>Models text generate karte hain.</strong> Pakka lagne wala andaaz kuch saabit nahi karta. Isliye jawaabon ko check karne ka tareeka chahiye.',
  '<strong>There is a size limit.</strong> You cannot send everything you have, like a desk that is too small. So choosing what to send is a design choice.':
    '<strong>Ek size limit hai.</strong> Aap apna sab kuch nahi bhej sakte, jaise chhoti mez par sab kaagaz nahi aate. Isliye kya bhejna hai, yeh chunna ek design ka faisla hai.',
  '<strong>Models forget.</strong> Your product builds the memory, and you pay for it on every message. The model company does not give it to you.':
    '<strong>Models bhool jaate hain.</strong> Memory aapka product banata hai, aur aap har message par uska paisa dete hain. Model banane wali company yeh aapko nahi deti.',
  'Before you move on, say it in your own words. If you can explain it to someone else, you really have it.':
    'Aage badhne se pehle ise apne shabdon mein kahiye. Agar aap ise kisi aur ko samjha sakte hain, to aapne ise sach mein samajh liya hai.',
  'Write two sentences for a colleague. Tell them why a long chat with an AI costs more than a short one. Use plain words. Say only what you could defend if they asked a follow-up question.':
    'Ek colleague ke liye do sentence likhiye. Unhe batayiye ki AI ke saath lambi chat chhoti chat se mehngi kyun hoti hai. Saaf, seedhe shabd use kijiye. Wahi kahiye jiska aap agle sawaal par bachaav kar saken.',
  'A good answer says what happens and what it means. <strong>What happens:</strong> the model only sees what the app sends it, and a growing old chat makes every request bigger. <strong>What it means:</strong> the cost of a chat depends on how the app handles that old chat. So measure it. Do not just assume.':
    'Ek achha jawaab batata hai ki kya hota hai aur uska matlab kya hai. <strong>Kya hota hai:</strong> model sirf wahi dekhta hai jo app use bhejta hai, aur badhti purani chat har request ko bada kar deti hai. <strong>Iska matlab:</strong> chat ki cost is par tikti hai ki app purani chat ko kaise sambhalta hai. Isliye use naapiye. Sirf maan mat lijiye.',
  'You now know the model forgets, and the app has to carry the memory. Next you learn two ways to steer a model: the system prompt (the rules on the shop wall) and temperature (how adventurous it is). You will also make a model invent an answer on purpose.':
    'Ab aap jaante hain ki model bhool jaata hai aur memory app ko dhoni padti hai. Agle chapter mein model ko chalane ke do tareeke seekhenge: system prompt (deewar par lage niyam) aur temperature (woh kitna himmatwala hai). Aap ek model se jaanboojhkar banawati jawaab bhi likhwayenge.',
});
