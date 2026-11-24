/* Hinglish for Your first API call: how a model answers (chapter:ch1), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'Before you read anything, press <strong>Run</strong> on the first code block (one box of code) in this chapter. Guess first. Does the model (the program that writes replies) find an answer somewhere, or write one itself?':
    'Kuch padhne se pehle, is chapter ke pehle code block (code ka ek dabba) par <strong>Run</strong> dabaiye. Pehle andaaza lagaiye. Model (jo program jawaab likhta hai) kahin se jawaab dhoondhta hai, ya khud likhta hai?',
  'Run a short question. Then run a long piece of text. For each run, save the full response (the reply that comes back) and the usage block (the bill that comes with each reply: bricks in, bricks out).':
    'Pehle ek chhota sawaal run kijiye. Phir ek lamba text run kijiye. Har run ka poora response (jo jawaab wapas aata hai) aur usage block (har jawaab ke saath aane wala bill: kitni eenten gayi, kitni aayi) save kar lijiye.',
  'Ask the model for something it cannot possibly know. See what comes back anyway.':
    'Model se aisi cheez poochhiye jo woh jaan hi nahi sakta. Dekhiye ki phir bhi kya wapas aata hai.',
  'A one-page picture of one request (one message sent to the model), start to finish: input, model, output, tokens, cost.':
    'Ek request (model ko bheja gaya ek message) ki ek page ki tasveer, shuru se aakhir tak: input, model, output, tokens, cost.',
  'Explain what happens in one request. Do not say “the AI just knows” even once.':
    'Samjhaiye ki ek request mein kya hota hai. Ek baar bhi yeh mat kahiye ki “AI ko sab pata hai”.',
  'A model is like a parrot that has read a whole library. You send it a message. It sends words back. In this chapter you send your first message. Sending a message to a model over the internet and getting a reply is called an API call. It is like an SMS that costs a few paise. You will see what it cost. You will also see why an answer that sounds sure can still be wrong.':
    'Model ek aise tote jaisa hai jisne poori library padh li ho. Aap use message bhejte hain. Woh shabd wapas bhejta hai. Is chapter mein aap apna pehla message bhejenge. Internet par model ko message bhejna aur jawaab paana API call kehlata hai. Yeh kuch paise ke SMS jaisa hai. Aap dekhenge ki iska kharch kitna hua. Aap yeh bhi dekhenge ki pakka lagne wala jawaab bhi galat kyun ho sakta hai.',
  'Say why a model can sound sure and still be wrong.':
    'Bata paana ki model pakka lagne par bhi galat kyun ho sakta hai.',
  'Read the usage block (the bill that comes with each reply) on a response. Say what you pay for.':
    'Response ka usage block (har jawaab ke saath aane wala bill) padh paana. Bata paana ki aap kis cheez ka paisa dete hain.',
  'Work out what a request costs, using its token counts (how many small pieces of words went in and out).':
    'Token counts (kitne shabdon ke tukde andar gaye aur bahar aaye) se ek request ka kharcha nikaal paana.',
  'Make your first call and see what it costs':
    'Apni pehli call kijiye aur dekhiye ki usmein kitna kharch hota hai',
  'Now you move from the browser tools to a real model. Every answer comes with a usage block, which is a small bill. You learned to read it. It shows exactly what you pay for. Here you ask a real model to find personal details (like names and ID numbers) in some starter sentences. You check its answers yourself, like a teacher marking homework. Then you work out the cost.':
    'Ab aap browser tools se asli model par aate hain. Har jawaab ke saath ek usage block aata hai, yaani chhota sa bill. Aapne use padhna seekha. Woh theek-theek dikhata hai ki aap kis cheez ka paisa dete hain. Yahan aap ek asli model se kuch starter sentences mein personal details (jaise naam aur ID numbers) dhoondhne ko kahenge. Uske jawaab aap khud check karenge, jaise teacher copy jaanchta hai. Phir kharcha nikaalenge.',
  'Your notebook (a page where you run code) for this chapter is at the end of the page. The numbers you print are what count. The notes box below is for a short thought, not a long write-up. Short version for the route, about 20 minutes: steps 1, 2 and 5.':
    'Is chapter ka aapka notebook (jis page par code chalta hai) page ke aakhir mein hai. Jo numbers aap print karte hain, wahi asli cheez hain. Neeche ka notes box chhoti si soch likhne ke liye hai, lamba likhne ke liye nahi. Route ke liye chhota version, lagbhag 20 minute: step 1, 2 aur 5.',
  'In your notebook for this chapter, send starter sentence 7 to the model. It is the one with Amit Sharma, the PAN and the HDFC account. Give this instruction: “List every piece of personal information in this message.”':
    'Is chapter ke apne notebook mein starter sentence 7 model ko bhejiye. Isme Amit Sharma, PAN aur HDFC account hai. Yeh instruction dijiye: “List every piece of personal information in this message.”',
  'Print the whole answer and the usage block. Write down the prompt_tokens (bricks you sent) and the completion_tokens (bricks you got back).':
    'Poora jawaab aur usage block print kijiye. prompt_tokens (jo eenten aapne bhejin) aur completion_tokens (jo eenten wapas aayin) likh lijiye.',
  'Check the answer by hand, line by line. Write what the model found correctly. Write what it missed. Write anything it listed that is not personal. Do not trust it only because it sounds sure.':
    'Jawaab ko haath se, line by line check kijiye. Likhiye ki model ne kya sahi dhoondha. Likhiye ki kya chhoda. Aur kya aisa list kiya jo personal hai hi nahi. Sirf isliye bharosa mat kijiye ki woh pakka lagta hai.',
  'Repeat with starter sentences 4 and 9. Now you have three runs in all. Starter sentence 9 has nothing personal in it, so a good answer says so. Add up the token counts of the three runs and divide by three. That is the average.':
    'Starter sentences 4 aur 9 ke saath dobara kijiye. Ab kul teen runs ho gaye. Starter sentence 9 mein kuch personal nahi hai, isliye achha jawaab yahi bataega. Teeno runs ke token counts jodiye aur teen se bhaag dijiye. Yahi average hai.',
  'Look up your provider’s price per million tokens. A provider is the company whose model you use. Work out the cost of one check.':
    'Apne provider (jis company ka model aap use karte hain) ki price per million tokens dekhiye. Ek check ka kharcha nikaliye.',
  'Add a paragraph of extra instructions to the prompt (the note you hand the model), for example “Answer as a table with the columns Item and Type”. Run starter sentence 7 again. Note how much that paragraph adds to the cost of every call. Then note what it adds over a thousand calls.':
    'Prompt (model ko di gayi parchi) mein extra instructions ka ek paragraph jodiye, jaise “Answer as a table with the columns Item and Type”. Starter sentence 7 dobara run kijiye. Note kijiye ki woh paragraph har call ke kharche mein kitna jodta hai. Phir note kijiye ki ek hazaar calls mein kitna jodega.',
  'Three runs on real starter sentences, with the token counts printed and averaged.':
    'Asli starter sentences par teen runs, token counts print kiye hue aur average nikale hue.',
  'Your hand-check of each answer: what the model found, what it missed and what it listed wrongly.':
    'Har jawaab ki aapki hand-check: model ne kya dhoondha, kya chhoda, aur kya galat list kiya.',
  'The cost of one check, worked out from your own numbers.':
    'Ek check ka kharcha, aapke apne numbers se nikala hua.',
  'The extra cost of one added paragraph over a thousand calls.':
    'Ek jodi gayi paragraph ka ek hazaar calls par extra kharcha.',
  'Chapter 0.8':
    'Chapter 0.8',
  'You can read a short piece of Python (a language for giving a computer instructions). You know a name for a value (a labelled box), a list (a row of boxes), a dictionary (a phone book) and a dot (it reaches inside a thing). The first model call below uses all four.':
    'Aap Python (computer ko hukm dene ki bhasha) ka ek chhota tukda padh sakte hain. Aap value ka naam (label laga dabba), list (dibbon ki line), dictionary (phone book) aur dot (jo cheez ke andar pahunchta hai) jaante hain. Neeche ki pehli model call chaaron use karti hai.',
  'A model connected on the setup page':
    'Setup page par ek model connect ho',
  'The five minutes of setup, done once. Chapter 1 is the first chapter that uses it.':
    'Setup ke woh paanch minute, jo sirf ek baar karne hote hain. Chapter 1 pehla chapter hai jo isse kaam leta hai.',
  'The code here runs right in the page. Press <strong>Run</strong> under each block, top to bottom. Before your first block runs, the page does the three warm-up steps from <a href="#/setup">Setup</a> for you: the key (a secret password for the model), the library (ready-made code, like a borrowed recipe book) and the client (the messenger that carries your note to the model). Run each block before you read on.':
    'Yahan ka code seedha page mein chalta hai. Har block ke neeche <strong>Run</strong> dabaiye, upar se neeche. Pehla block chalne se pehle page <a href="#/setup">Setup</a> ke teeno warm-up steps khud kar deta hai: key (model ka secret password), library (tayyar code, jaise udhaar li recipe ki kitaab) aur client (woh messenger jo aapki parchi model tak le jaata hai). Aage padhne se pehle har block run kijiye.',
  'In Chapter 0.5 you tried tokens, cost and temperature right in the browser. In the last chapter you learned to read a few lines of Python. Now you use both with a real model. You send it a message. You look at what comes back. You see what that costs.':
    'Chapter 0.5 mein aapne tokens, cost aur temperature browser mein hi try kiye the. Pichhle chapter mein aapne Python ki kuch lines padhna seekha. Ab aap dono ko ek asli model ke saath kaam mein laate hain. Aap use message bhejte hain. Dekhte hain ki kya wapas aata hai. Aur dekhte hain ki isme kitna kharch hota hai.',
  'Along the way you learn one thing that matters in every AI product you will work on. A model can sound completely sure and still be wrong. It is like a parrot that says a wrong thing in a calm voice.':
    'Saath mein aap ek aisi baat seekhte hain jo har AI product mein zaroori hai. Model poori tarah pakka sunayi de sakta hai aur phir bhi galat ho sakta hai. Jaise tota shaant awaaz mein galat baat bol de.',
  'A model guesses the next piece of text':
    'Model agla text guess karta hai, yaani andaaza lagata hai',
  'Start with something you use every day. Type <em>See you at the</em> on your phone. The keyboard suggests <em>office</em>, <em>station</em> or <em>airport</em>. It picks these from what people usually type next.':
    'Ek aisi cheez se shuru karte hain jo aap roz use karte hain. Phone par <em>See you at the</em> type kijiye. Keyboard <em>office</em>, <em>station</em> ya <em>airport</em> suggest karta hai. Woh yeh isliye chunta hai ki log aksar uske baad yahi type karte hain.',
  'A language model does the same, at a much bigger size. Think of a parrot that has read a whole library. It learned from a huge amount of writing. That learning is called training. It builds a reply one small piece of text at a time. Each time it guesses the next piece. It does not look anything up.':
    'Language model bhi yahi karta hai, bahut bade size par. Ek tota sochiye jisne poori library padh li ho. Usne bahut saara likha hua text padh kar seekha. Is seekhne ko training kehte hain. Woh reply ek-ek chhote tukde mein banata hai. Har baar woh agla tukda guess karta hai. Woh kuch bhi look up nahi karta.',
  'A model makes its answer from patterns. It does not look the answer up, like a book. So a smooth-sounding answer is not always a correct one.':
    'Model apna jawaab patterns se banata hai. Woh jawaab kisi kitaab ki tarah kahin se dhoondhta nahi. Isliye mulayam sunayi dene wala jawaab hamesha sahi nahi hota.',
  'Let us see this for ourselves. You ask a simple question. Then you think about where the answer came from.':
    'Chaliye ise khud dekhte hain. Aap ek simple sawaal poochhenge. Phir sochenge ki jawaab kahan se aaya.',
  'Make your first call':
    'Apni pehli call kijiye',
  'You get a smooth two-sentence answer. You gave the model nothing to search. It wrote the answer from patterns it learned in training.':
    'Aapko do sentence ka ek mulayam jawaab milta hai. Aapne model ko dhoondhne ke liye kuch diya hi nahi. Usne jawaab un patterns se likha jo usne training mein seekhe.',
  'Now a question. What happens when the model has nothing to base its answer on? Guess before you read on.':
    'Ab ek sawaal. Jab model ke paas jawaab banane ke liye kuch hai hi nahi, tab kya hota hai? Aage padhne se pehle andaaza lagaiye.',
  'One line: what do you think it does?':
    'Ek line mein: aapko kya lagta hai woh kya karega?',
  'You saw this in the book. Now guess what your own model sends back. Ask it about the refund policy of a company you made up. It has never seen anything about that company. What comes back?':
    'Yeh aapne book mein dekha. Ab andaaza lagaiye ki aapka apna model kya wapas bhejta hai. Use ek aisi company ki refund policy poochhiye jo aapne khud gadhi hai. Usne us company ke baare mein kabhi kuch nahi dekha. Kya wapas aata hai?',
  'Usually a confident, well-written, made-up policy. It is like a parrot saying a made-up thing with a straight face. The model guesses likely text. “I have no information about this” is often not the most likely next piece. Saying <em>I don’t know</em> is a habit that has to be added and tested. It does not always hold.':
    'Aksar ek pakki, achhi likhi hui, banayi hui policy. Jaise tota seedha chehra rakh kar banawati baat bol de. Model sabse mumkin text guess karta hai. “Mere paas is baare mein koi information nahi hai” aksar sabse mumkin agla tukda nahi hota. <em>Mujhe nahi pata</em> kehna ek aadat hai jo alag se jodni aur test karni padti hai. Woh hamesha kaam nahi karti.',
  'So you cannot judge an answer by how sure it sounds. A correct answer and a made-up one read the same. In Chapter 2 you make a model invent an answer on purpose.':
    'Isliye aap jawaab ko is se nahi parakh sakte ki woh kitna pakka lagta hai. Sahi jawaab aur banaya hua jawaab padhne mein ek jaise lagte hain. Chapter 2 mein aap ek model se jaanbujhkar jawaab banwayenge.',
  'What you send, and what you pay for':
    'Aap kya bhejte hain, aur kis cheez ka paisa dete hain',
  'You have seen what comes back. Now look at what goes out. Your request is sent as <strong>JSON</strong>. That is a form written as labels and values inside curly braces, like a form with fixed boxes.':
    'Aapne dekh liya ki wapas kya aata hai. Ab dekhiye ki bahar kya jaata hai. Aapki request <strong>JSON</strong> mein bheji jaati hai. Yeh curly braces ke andar likhe labels aur values ka ek form hai, fixed khaanon wale form jaisa.',
  'The request carries a list called <code>messages</code>. Each message has a role (who is speaking). <code>user</code> is you. <code>assistant</code> is the model’s reply. The message you send is the prompt, the note you hand the model. Now the part that touches your budget. You pay for the text you send. You also pay for the text you get back, like an SMS billed both ways.':
    'Request mein <code>messages</code> naam ki ek list hoti hai. Har message ka ek role (kaun bol raha hai) hota hai. <code>user</code> aap hain. <code>assistant</code> model ka reply hai. Jo message aap bhejte hain use prompt kehte hain, yaani model ko di gayi parchi. Ab budget se judi baat. Jo text aap bhejte hain, uska paisa lagta hai. Jo text wapas aata hai, uska bhi, jaise SMS dono taraf ka bill banta hai.',
  'Read the usage block':
    'Usage block padhiye',
  'Every response comes with a block called <code>usage</code>. It is the bill for that reply. It tells you how much text went in and how much came out. Add these lines to the same cell:':
    'Har response ke saath <code>usage</code> naam ka ek block aata hai. Yeh us jawaab ka bill hai. Woh batata hai ki kitna text andar gaya aur kitna bahar aaya. Isi cell (code ke dabbe) mein yeh lines jodiye:',
  'You see two numbers, such as <code>tokens read: 18</code> and <code>tokens written: 55</code>. These are the counts you are billed for. Every response includes them.':
    'Aapko do numbers dikhte hain, jaise <code>tokens read: 18</code> aur <code>tokens written: 55</code>. Inhi counts ka aapse paisa liya jaata hai. Har response mein yeh aate hain.',
  'Tokens: the unit you are billed in':
    'Tokens: woh unit jisme aapse paisa liya jaata hai',
  'Those counts are not in words. They are in <strong>tokens</strong>. A token is a small piece of text, like one Lego brick of text. On average, it is about three-quarters of an English word. You pay per brick.':
    'Yeh counts words mein nahi hain. Yeh <strong>tokens</strong> mein hain. Token text ka ek chhota tukda hai, text ki ek Lego ki eent jaisa. Ausat mein yeh English word ka lagbhag teen-chauthai hissa hota hai. Aap har eent ka paisa dete hain.',
  'Common words are usually one brick. Rare words break into several. So does text in other scripts. See it yourself with the tool below. It needs no setup.':
    'Aam words aksar ek eent hote hain. Anokhe words kayi eenton mein toot jaate hain. Doosri scripts ka text bhi. Neeche ke tool se khud dekhiye. Isme koi setup nahi chahiye.',
  'Now watch the token count change in your own notebook. First you send more text. Then you ask for more text back.':
    'Ab apne notebook mein token count ko badalte dekhiye. Pehle aap zyada text bhejte hain. Phir zyada text wapas maangte hain.',
  'Watch the token count change':
    'Token count badalte hue dekhiye',
  'Paste a long paragraph from one of your own documents. Ask for a summary (a short version):':
    'Apne kisi document ka ek lamba paragraph paste kijiye. Uska summary (chhota roop) maangiye:',
  '<code>prompt_tokens</code> (the bricks you send) rises into the hundreds, because you sent more text. Now try the opposite. Ask a short question, but ask for a long answer, such as “explain in 400 words”. This time <code>completion_tokens</code> (the bricks you get back) rises instead.':
    '<code>prompt_tokens</code> (jo eenten aap bhejte hain) sainkdon mein pahunch jaata hai, kyunki aapne zyada text bheja. Ab ulta try kijiye. Chhota sawaal poochhiye, lekin lamba jawaab maangiye, jaise “explain in 400 words”. Is baar <code>completion_tokens</code> (jo eenten wapas aati hain) badhta hai.',
  'What this means for your product':
    'Yeh aapke product ke liye kya matlab rakhta hai',
  'Put the two ideas of this chapter side by side. The first is about trust. The second is about money.':
    'Chaliye is chapter ke dono ideas ek saath rakhte hain. Pehla bharose ke baare mein hai. Doosra paise ke baare mein.',
  'A model writes text, so a sure tone is no proof that it is right. And you pay per token, so every line of instruction you add is charged again on every call. It is like paying per SMS: a longer message costs more, every time.':
    'Model text likhta hai, isliye pakka lehja is baat ka saboot nahi ki jawaab sahi hai. Aur aap har token ka paisa dete hain, isliye instruction ki har nayi line har call mein dobara charge hoti hai. Yeh SMS ke paise jaisa hai: lamba message har baar zyada mehnga padta hai.',
  'So far you know two things. A model writes its answers from patterns. You pay for every token that goes in and comes out. Next comes a third fact. The model does not remember anything between calls, like a goldfish. That explains why a long chat costs more than a short one. It also shows how chat “memory” features work.':
    'Ab tak aap do baatein jaante hain. Model apne jawaab patterns se likhta hai. Jo token andar jaata hai ya bahar aata hai, har ek ka paisa lagta hai. Agla chapter teesra fact dikhata hai. Model calls ke beech kuch yaad nahi rakhta, ek goldfish ki tarah. Isi se samajh aata hai ki lambi chat chhoti chat se mehngi kyun padti hai. Isse chat ke “memory” features ka kaam bhi samajh aata hai.',
});
