/* Hinglish: Part I, the interleaved rebuild.

   Same rule as the rest of the layer — the key is the English line exactly as
   the course shows it, and code is never translated. */
Object.assign(window.HING = window.HING || {}, {
  'Three facts about the machine. You will prove each one on your own screen before the next one arrives.':
    'Machine ke teen facts. Agla aane se pehle har ek ko aap apni screen par saabit karenge.',
  'Read the receipt on a call and say what a company is actually billed for.':
    'Ek call ki receipt padhkar batana ki company ka bill asal mein kis cheez ka banta hai.',
  'Build, with your own hands, the memory trick every chat product sells — and say what it costs.':
    'Woh memory wala khel apne haathon se banana jo har chat product bechta hai — aur batana ki uski keemat kya hai.',
  'Colab open and your key working':
    'Colab khula ho aur aapki key chal rahi ho',
  'The five minutes of setup, done once. Chapter 1 is the first thing that uses it.':
    'Paanch minute ka setup, ek baar. Chapter 1 pehli cheez hai jo use istemaal karta hai.',
  'Before you start':
    'Shuru karne se pehle',
  'Open a new Colab notebook and name it <code>chapter-1</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> — the key, the install, the client — so they are ready above everything you write today. From here on, every idea is followed by the code that proves it. Run each block before reading on; that is the whole method.':
    'Ek naya Colab notebook kholiye aur uska naam <code>chapter-1</code> rakhiye. <a href="#/setup">Setup</a> se teen warm-up cells chala lijiye — key, install, client — taaki aaj jo bhi likhen uske upar woh taiyaar rahein. Ab se har idea ke turant baad woh code aata hai jo use saabit karta hai. Aage padhne se pehle har block chalaiye; poora tareeka yahi hai.',
  'Make your first call':
    'Apna pehla call kijiye',
  'A fluent two-sentence answer. Notice what you did <em>not</em> do: you never gave it a database to search. It composed that from pattern. The first idea is now on your screen rather than on this page.':
    'Do sentence ka ek fluent jawaab. Dhyaan dijiye aapne kya <em>nahi</em> kiya: aapne use dhoondhne ke liye koi database diya hi nahi. Usne yeh pattern se banaya. Pehla idea ab is page par nahi, aapki screen par hai.',
  'Now the harder version. You ask it about a refund policy at a company that does not exist. It has never seen anything about it. What comes back?':
    'Ab mushkil roop. Aap ise ek aisi company ki refund policy ke baare mein poochhte hain jo hai hi nahi. Usne uske baare mein kabhi kuchh dekha hi nahi. Kya wapas aayega?',
  'This is why you cannot judge an AI answer by how confident it sounds. It sounds identical either way. Chapter 2 makes you order one of these lies deliberately.':
    'Isiliye aap AI ke jawaab ko uske confident lehje se nahi jaanch sakte. Dono haalat mein woh bilkul ek jaisa sunai deta hai. Chapter 2 mein aap aisa ek jhooth jaanbujhkar order karenge.',
  'What you just sent travelled as a structured envelope — labels and values in curly braces, a format called <strong>JSON</strong> — carrying a list called <code>messages</code>. Each entry is tagged with a role: <code>user</code> for you, <code>assistant</code> for the reply. Your app sends text, the AI sends text back, and you are billed for both.':
    'Aapne abhi jo bheja woh ek structured envelope ki tarah gaya — curly braces mein labels aur values, is format ka naam <strong>JSON</strong> hai — jisme <code>messages</code> naam ki ek list thi. Har entry par ek role laga hota hai: aapke liye <code>user</code>, jawaab ke liye <code>assistant</code>. Aapka app text bhejta hai, AI text wapas bhejta hai, aur bill dono ka banta hai.',
  'Read the receipt':
    'Receipt padhiye',
  'Every reply carries one, in a block called <code>usage</code>. Add this to the same cell:':
    'Har jawaab ke saath ek aati hai, <code>usage</code> naam ke block mein. Isi cell mein yeh jodiye:',
  'Two numbers, something like <code>tokens read: 18 / tokens written: 55</code>. That is the receipt, and it rides inside every single reply you will ever get.':
    'Do numbers, kuchh aise <code>tokens read: 18 / tokens written: 55</code>. Wahi receipt hai, aur woh aapko milne wale har ek jawaab ke andar aati hai.',
  'Not by the word, though. By something slightly smaller. Text gets chopped into pieces called <strong>tokens</strong> — roughly three-quarters of an English word each. Common words are usually one token; unusual words and other scripts break into several. This runs right here, no setup needed:':
    'Lekin shabd ke hisaab se nahi. Usse thodi chhoti cheez ke hisaab se. Text ko tukdon mein kaat diya jaata hai jinhe <strong>tokens</strong> kehte hain — har ek motamoti ek English word ka teen-chauthai. Aam shabd aksar ek token hote hain; anokhe shabd aur doosri lipiyan kai tukdon mein toot jaate hain. Yeh yahin chalta hai, koi setup nahi chahiye:',
  'Watch the bill move':
    'Bill ko hilte hue dekhiye',
  'Paste a long paragraph from one of your own corpus documents and ask for a summary:':
    'Apne corpus ke kisi document se ek lamba paragraph paste kijiye aur summary maangiye:',
  '<code>prompt_tokens</code> jumps into the hundreds. You just watched a bill grow in real time. Now do the opposite — ask a short question but demand a long answer (“explain in 400 words”) and watch <code>completion_tokens</code> jump instead. Both sides of the receipt are real to you now.':
    '<code>prompt_tokens</code> sau ke paar chala jaata hai. Aapne abhi bill ko asli waqt mein badhte dekha. Ab ulta kijiye — chhota sawaal poochhiye lekin lamba jawaab maangiye (“400 shabdon mein samjhaiye”) aur is baar <code>completion_tokens</code> ko uchhalte dekhiye. Receipt ke dono pehlu ab aapke liye asli hain.',
  'The AI forgets you completely the moment it replies. Every request starts from nothing. It has no idea you spoke to it a minute ago. The formal word is <strong>stateless</strong>.':
    'Jawaab dete hi AI aapko poori tarah bhool jaata hai. Har request shoonya se shuru hoti hai. Use andaaza bhi nahi ki ek minute pehle aap usse baat kar rahe the. Iska formal shabd hai <strong>stateless</strong>.',
  'Catch the amnesia red-handed':
    'Amnesia ko rangey haath pakadiye',
  'Two separate calls, one after the other:':
    'Do alag calls, ek ke baad ek:',
  'The second reply has no idea. Not a bug, not a setting — the machine really has nothing between one call and the next.':
    'Doosre jawaab ko kuchh pata hi nahi. Na yeh bug hai na koi setting — machine ke paas ek call aur agli call ke beech sach mein kuchh hota hi nahi.',
  'It does not. The app re-sends the entire conversation every single time. The memory is a trick performed by the app, not a property of the AI. And you are about to perform it yourself.':
    'Rehti nahi hai. App har baar poori conversation dobara bhejta hai. Yeh memory app ka kiya hua khel hai, AI ka gun nahi. Aur ab aap yeh khel khud karne wale hain.',
  'Perform the trick':
    'Khel khud kijiye',
  'Now it knows — Sam. And <code>prompt_tokens</code> is bigger than before, because you paid to re-send the whole history. Sit on that for a second: you have just built, by hand, the illusion every chat product in the world sells, and you can see exactly what it costs per message.':
    'Ab use pata hai — Sam. Aur <code>prompt_tokens</code> pehle se bada hai, kyunki aapne poori history dobara bhejne ka paisa diya. Ek pal ruk kar sochiye: aapne abhi apne haathon se woh bhram bana liya jo duniya ka har chat product bechta hai, aur aap saaf dekh sakte hain ki har message par uski keemat kya hai.',
  'Watch that cost curve without typing anything:':
    'Woh cost curve bina kuchh type kiye dekhiye:',
  'Write the two sentences you would say to a colleague who asks why a long chat with an AI costs more than a short one. Plain words — no jargon, and nothing you could not defend if they pushed back.':
    'Woh do sentence likhiye jo aap us saathi se kahenge jo poochhta hai ki AI se lambi chat chhoti chat se mehngi kyun padti hai. Saade shabd — koi jargon nahi, aur kuchh aisa nahi jise woh khodein to aap defend na kar paayein.',
  'The meter on a real feature':
    'Ek asli feature par meter',
  'Everything in this chapter exists to answer one question a finance director will eventually ask you: <em>what does this cost?</em> You now have every instrument needed to answer it with a number you produced yourself, rather than a number a vendor gave you.':
    'Is chapter ki har cheez ek hi sawaal ka jawaab dene ke liye hai, jo koi finance director aapse kabhi na kabhi poochhega: <em>iski cost kya hai?</em> Ab aapke paas har woh auzaar hai jisse aap jawaab apne nikaale hue number se de sakein, kisi vendor ke diye number se nahi.',
  'Pick one small feature you could imagine your own team shipping — a summariser for support tickets, a drafting aid, an FAQ answerer. One sentence describing what it does.':
    'Ek chhota feature chuniye jise aapki apni team ship kar sakti ho — support tickets ka summariser, draft banane wala sahayak, FAQ ka jawaab dene wala. Ek sentence mein likhiye ki woh kya karta hai.',
  'Write the actual request it would send, as a real call in your <code>chapter-1</code> notebook, using a real example from your work. Run it.':
    'Woh asli request likhiye jo yeh bhejta, apne <code>chapter-1</code> notebook mein ek asli call ki tarah, apne kaam ke ek asli udaharan ke saath. Use chalaiye.',
  'Record the receipt: <code>prompt_tokens</code> and <code>completion_tokens</code>. Do this for three different realistic inputs, not one, and take the average.':
    'Receipt likhiye: <code>prompt_tokens</code> aur <code>completion_tokens</code>. Yeh ek nahi, teen alag-alag asli jaise inputs ke liye kijiye, aur average lijiye.',
  'Now make it a conversation. Re-send the growing history five turns deep, printing <code>prompt_tokens</code> at every turn. Plot or simply list the five numbers.':
    'Ab ise conversation banaiye. Badhti hui history ko paanch turn tak dobara bhejiye, har turn par <code>prompt_tokens</code> print karte hue. Paanchon numbers ka chart banaiye ya bas list kar lijiye.',
  'Find your provider’s published rate per million tokens and turn your averages into a cost per query, then a cost per 1,000 conversations.':
    'Apne provider ka prati million tokens wala published rate dhoondhiye aur apne averages ko per query cost mein, phir 1,000 conversations ki cost mein badaliye.',
  'Write the one sentence you would say out loud in a budget meeting — the figure, and the single assumption most likely to make it wrong.':
    'Woh ek sentence likhiye jo aap budget meeting mein bolenge — aankda, aur woh ek assumption jiske galat hone ki sambhavna sabse zyada hai.',
  'You have five token counts from a five-turn conversation, and they go up.':
    'Aapke paas paanch turn ki conversation se paanch token counts hain, aur woh badhte jaate hain.',
  'You have a cost per query you can derive again in front of someone, from numbers on your own screen.':
    'Aapke paas ek per query cost hai jise aap kisi ke saamne, apni screen ke numbers se, dobara nikaal sakte hain.',
  'You can name the assumption that would break the estimate — and it is not “the model might change”.':
    'Aap us assumption ka naam le sakte hain jo estimate ko tod degi — aur woh “model badal sakta hai” nahi hai.'
});
