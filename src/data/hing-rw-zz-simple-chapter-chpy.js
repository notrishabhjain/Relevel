/* Hinglish for Reading Python: just enough for this course (chapter:chpy), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'From the next chapter on, the hands-on steps are short pieces of Python (a language for giving a computer instructions). They run right here in the page. You do not write code from scratch. You read it, change one thing and run it again, like tweaking a recipe. This chapter teaches the few shapes you will meet, one at a time. It needs no key (a secret password for the model) and no account.':
    'Agle chapter se hands-on steps Python (computer ko hukm dene ki ek bhasha) ke chhote tukde hain. Woh yahin page mein chalte hain. Aapko shuru se code nahi likhna. Aap use padhte hain, ek cheez badalte hain aur dobara chalate hain, jaise recipe mein thoda badlav. Yeh chapter woh thode se shapes ek-ek karke sikhata hai jo aapko milenge. Ismein na key (model ka secret password) chahiye, na account.',
  'Read a line like <code>city = "Pune"</code> and say what it stores.':
    '<code>city = "Pune"</code> jaisi line padhkar bata paana ki woh kya sambhal kar rakhti hai.',
  'Tell a list (a row of boxes) from a dictionary (a phone book), and pick one item out of each.':
    'List (dibbon ki ek line) aur dictionary (phone book) mein farq bata paana, aur dono mein se ek item nikaal paana.',
  'Read every line of the first model call in the next chapter before you run it. A call is one message sent to the model.':
    'Agle chapter ki pehli model call ki har line, chalaane se pehle, padh paana. Call matlab model ko bheja gaya ek message.',
  'Chapter 0.5':
    'Chapter 0.5',
  'You have seen tokens (small pieces of words) and cost in the browser. Nothing else is needed. Python runs inside this page. No key, no account.':
    'Aap browser mein tokens (shabdon ke chhote tukde) aur cost dekh chuke hain. Aur kuch nahi chahiye. Python isi page ke andar chalta hai. Na key, na account.',
  'You need nothing for this chapter. No key, no account, no download. Python runs inside this page. Press <strong>Run</strong> under a block (one box of code) and the result appears below it. Nothing you type here can break anything. It is like a practice page you can rub out.':
    'Is chapter ke liye aapko kuch nahi chahiye. Na key, na account, na download. Python isi page ke andar chalta hai. Kisi block (code ka ek dabba) ke neeche <strong>Run</strong> dabaiye aur result uske neeche aa jaata hai. Aap yahan jo bhi type karein, usse kuch nahi tootega. Yeh mitane layak practice page jaisa hai.',
  'In the next chapter you send your first message to a real model (a program that writes replies). The message goes out as a few lines of Python. If you have never read code, those lines look like a wall of brackets and quotes.':
    'Agle chapter mein aap apna pehla message ek asli model (jo program jawaab likhta hai) ko bhejte hain. Woh message Python ki kuch lines ke roop mein jaata hai. Agar aapne kabhi code nahi padha, toh woh lines brackets aur quotes ki deewar jaisi lagti hain.',
  'This chapter takes the wall apart, one brick at a time. Each section shows one small piece. It runs the piece. Then it asks you to change one thing. By the end, you can read every line of the first example in the next chapter.':
    'Yeh chapter us deewar ko ek-ek eent karke kholta hai. Har section ek chhota hissa dikhata hai. Use chalata hai. Phir aapse ek cheez badalne ko kehta hai. Aakhir tak aap agle chapter ke pehle example ki har line padh payenge.',
  'You do not need to write Python for this course. You read it, change one thing, and run it again. It is like reading a train timetable: you do not have to build the train.':
    'Is course ke liye aapko Python likhna nahi hai. Aap use padhte hain, ek cheez badalte hain, aur dobara chalate hain. Yeh train ka time-table padhne jaisa hai: train banani nahi padti.',
  'A cell, and the Run button':
    'Ek cell, aur Run button',
  'Code here sits in boxes called <strong>cells</strong>. One cell is one box of code on the page. Press <strong>Run</strong> and the page runs the cell. Whatever the code prints (shows) appears just below it. That is the <em>output</em>. It is like pressing the button on a lift: you press, and something happens.':
    'Yahan code jin dibbon mein hota hai unhe <strong>cells</strong> kehte hain. Ek cell page par code ka ek dabba hai. <strong>Run</strong> dabaiye aur page us cell ko chalata hai. Code jo bhi print karta hai (dikhata hai), woh theek uske neeche aata hai. Use <em>output</em> kehte hain. Yeh lift ka button dabane jaisa hai: dabaya, aur kuch hua.',
  'The first run takes a few seconds, because the page has to load Python first. After that, runs are quick.':
    'Pehla run kuch second leta hai, kyunki page ko pehle Python load karna padta hai. Uske baad runs jaldi hote hain.',
  'Run your first cell':
    'Apna pehla cell chalaiye',
  'The words <code>Hello from Python</code> appear under the cell. <code>print</code> means “show this”. The text inside the quotes is shown exactly as written.':
    'Cell ke neeche <code>Hello from Python</code> shabd aate hain. <code>print</code> ka matlab hai “yeh dikhao”. Quotes ke andar ka text bilkul waisa hi dikhta hai jaisa likha hai.',
  'Now change the words inside the quotes to your own name. Press Run again. Keep the quotes.':
    'Ab quotes ke andar ke shabd badalkar apna naam likhiye. Dobara Run dabaiye. Quotes rehne dijiye.',
  'A name for a value':
    'Ek value ka naam',
  'The most common line in this course looks like <code>name = something</code>. It gives a value a name, so that later lines can use it. Think of a labelled box that holds one thing. Programmers call the name a <strong>variable</strong>.':
    'Is course mein sabse common line <code>name = something</code> jaisi dikhti hai. Yeh ek value ko naam deti hai, taaki aage ki lines use use kar sakein. Socho ek label laga dabba jisme ek cheez rakhi hai. Programmers us naam ko <strong>variable</strong> kehte hain.',
  'Read the equals sign as “is now”. So <code>city = "Pune"</code> reads as “city is now Pune”.':
    'Barabar ke nishaan ko “ab hai” padhiye. Toh <code>city = "Pune"</code> ka matlab hai “city ab Pune hai”.',
  'Store something and use it':
    'Kuch rakhiye aur use kaam mein lijiye',
  'You see <code>Pune</code> and then <code>120</code>. Text goes inside quotes. Numbers do not. Python did the sum because <code>price</code> holds a number.':
    'Aapko <code>Pune</code> aur phir <code>120</code> dikhta hai. Text quotes ke andar jaata hai. Numbers nahi. Python ne jod-ghataav isliye kiya kyunki <code>price</code> mein ek number hai.',
  'A name was used before any line gave it a value. It is like asking for a box nobody has made yet. Check the spelling too. <code>City</code> and <code>city</code> are two different names to Python.':
    'Ek naam use hua jabki kisi line ne use abhi value di hi nahi thi. Jaise aisa dabba maangna jo kisi ne banaya hi nahi. Spelling bhi check kijiye. Python ke liye <code>City</code> aur <code>city</code> do alag naam hain.',
  'What do you expect to see?':
    'Aapko kya dikhne ki ummeed hai?',
  'Guess first. After the cell above, what would <code>print("price")</code> show? Note that the word has quotes around it.':
    'Pehle andaaza lagaiye. Upar wale cell ke baad, <code>print("price")</code> kya dikhayega? Dhyaan dijiye, shabd ke chaaron taraf quotes hain.',
  'It shows the word <code>price</code>, not 40. Quotes mean “this exact text”. Without quotes, Python looks for the box with that name and shows what is inside.':
    'Yeh shabd <code>price</code> dikhata hai, 40 nahi. Quotes ka matlab hai “bilkul yahi text”. Quotes ke bina Python us naam ka dabba dhoondhta hai aur uske andar ki cheez dikhata hai.',
  'Quotes are the difference between a word and a name. Many first errors (mistakes that make the code stop) come from a missing or extra quote.':
    'Quotes hi shabd aur naam ka farq hain. Shuru ki bahut si errors (galtiyan jinse code ruk jaata hai) ek chhoote hue ya faltu quote se aati hain.',
  'A list: several things in order':
    'List: kram mein kai cheezein',
  'Square brackets hold a <strong>list</strong>. It is a row of boxes, in order, with commas between them, like seats in a train coach.':
    'Square brackets mein ek <strong>list</strong> hoti hai. Yeh dibbon ki ek line hai, kram mein, beech mein commas ke saath, jaise train ke dabbe ki seatein.',
  'To pick one item, put its place number in square brackets after the name. Python counts from 0, so <code>[0]</code> is the first item.':
    'Ek item nikaalne ke liye, naam ke baad square brackets mein uska number likhiye. Python 0 se ginta hai, isliye <code>[0]</code> pehla item hai.',
  'Pick an item from a list':
    'List se ek item nikaaliye',
  'You see <code>Pune</code>, the first item, and then <code>3</code>, the number of items. <code>len</code> is short for length.':
    'Aapko <code>Pune</code>, yaani pehla item, aur phir <code>3</code>, yaani items ki ginti, dikhti hai. <code>len</code> length ka chhota roop hai.',
  'Change <code>[0]</code> to <code>[2]</code> and run it again. Which city do you get?':
    '<code>[0]</code> ko <code>[2]</code> kar dijiye aur dobara chalaiye. Kaun sa shehar aata hai?',
  'A dictionary: labels and values':
    'Dictionary: labels aur values',
  'Curly braces hold a <strong>dictionary</strong>. It is like a phone book: you look up a name and get its value. It holds pairs of a label and a value, like a small form. The label goes in quotes, then a colon, then the value.':
    'Curly braces mein ek <strong>dictionary</strong> hoti hai. Yeh phone book jaisi hai: naam dekhiye, uski value milti hai. Isme label aur value ki jodiyan hoti hain, ek chhote form jaisi. Label quotes mein jaata hai, phir colon, phir value.',
  'To read one value, put its label in square brackets after the name.':
    'Ek value padhne ke liye, naam ke baad square brackets mein uska label likhiye.',
  'Read a value by its label':
    'Label se value padhiye',
  'You see <code>user</code> and then the question. This exact shape is how every message to a model is written: a role (who is speaking) and some content (what they say).':
    'Aapko <code>user</code> aur phir sawaal dikhta hai. Model ko har message isi shape mein likha jaata hai: ek role (kaun bol raha hai) aur kuch content (woh kya keh raha hai).',
  'A message to a model is only this: who is speaking, and what they say. A conversation is a list of these messages, in order, like a chat on your phone.':
    'Model ko bheja gaya message bas itna hai: kaun bol raha hai, aur kya keh raha hai. Ek conversation in messages ki kram mein bani list hai, jaise aapke phone ki chat.',
  'A list of dictionaries: a conversation':
    'Dictionaries ki list: ek conversation',
  'You see <code>3</code> and then <code>What is my name?</code>. Read <code>messages[2]["content"]</code> from left to right. First the list. Then its third item. Then that item’s content.':
    'Aapko <code>3</code> aur phir <code>What is my name?</code> dikhta hai. <code>messages[2]["content"]</code> ko baayein se daayein padhiye. Pehle list. Phir uska teesra item. Phir us item ka content.',
  'Asking Python to do a job':
    'Python se ek kaam karwana',
  'A word followed by round brackets, like <code>print(...)</code> or <code>len(...)</code>, asks Python to do a job with whatever is inside the brackets. That is a <strong>function</strong> call. A function is a recipe with a name: you give it things, it gives back a result.':
    'Gol brackets ke saath koi shabd, jaise <code>print(...)</code> ya <code>len(...)</code>, Python se brackets ke andar jo hai uske saath ek kaam karwata hai. Ise <strong>function</strong> call kehte hain. Function ek naam wali recipe hai: aap use cheezein dete hain, woh result wapas deti hai.',
  'Some jobs take named settings, written as <code>name=value</code> inside the brackets. Their order does not matter, because each one carries its own label, like name tags on a table.':
    'Kuch kaam naam wali settings lete hain, jo brackets ke andar <code>name=value</code> ki tarah likhi jaati hain. Unka kram matter nahi karta, kyunki har ek apna label saath rakhti hai, jaise mez par naam ki parchi.',
  'Use named settings':
    'Naam wali settings use kijiye',
  'You see <code>Pune and Delhi</code> and then <code>3.14</code>. <code>sep</code> is a named setting of print: what to put between the items. <code>ndigits</code> says how many places to keep after the decimal point.':
    'Aapko <code>Pune and Delhi</code> aur phir <code>3.14</code> dikhta hai. <code>sep</code> print ki ek naam wali setting hai: items ke beech kya rakhna hai. <code>ndigits</code> batata hai ki decimal point ke baad kitne ank rakhne hain.',
  'A dot reaches inside':
    'Dot andar tak pahunchta hai',
  'A dot reaches inside something, like opening a drawer. <code>response.usage</code> reads as “the usage part of the response”. Dots can be chained, like folders inside folders.':
    'Dot kisi cheez ke andar pahunchta hai, jaise daraaz kholna. <code>response.usage</code> ko “response ka usage wala hissa” padhiye. Dots ko jodkar aage badha sakte hain, jaise folders ke andar folders.',
  'Text has jobs of its own, reached the same way. <code>city.upper()</code> asks the text in <code>city</code> for a copy in capital letters.':
    'Text ke apne kaam hote hain, jinhe isi tarah pahuncha jaata hai. <code>city.upper()</code> <code>city</code> ke text se capital letters wali ek copy maangta hai.',
  'Reach inside with a dot':
    'Dot se andar pahunchiye',
  'You see <code>PUNE</code> and then <code>Pune</code>. The part before the dot says whose job it is. The brackets say what to do it with.':
    'Aapko <code>PUNE</code> aur phir <code>Pune</code> dikhta hai. Dot se pehle wala hissa batata hai ki kaam kiska hai. Brackets batate hain ki kis cheez ke saath karna hai.',
  'Now read the real thing':
    'Ab asli cheez padhiye',
  'Here is the first call you will make in the next chapter. Do not run it here. Read it with what you now know.':
    'Yeh woh pehli call hai jo aap agle chapter mein karenge. Ise yahan mat chalaiye. Jo aapne abhi seekha, uske saath ise padhiye.',
  '<code>response = …</code> gives the answer a name, so the next line can use it.':
    '<code>response = …</code> jawaab ko ek naam deta hai, taaki agli line use use kar sake.',
  '<code>client.chat.completions.create(…)</code> asks for a job. The dots reach inside <code>client</code> (the messenger that carries your note to the model) for its “write a chat reply” job.':
    '<code>client.chat.completions.create(…)</code> ek kaam maangta hai. Dots <code>client</code> (jo messenger aapki parchi model tak le jaata hai) ke andar pahunchte hain, aur uska “chat ka jawaab likho” wala kaam lete hain.',
  '<code>model="…"</code> and <code>messages=[…]</code> are named settings. They say which model to ask, and what the conversation is so far.':
    '<code>model="…"</code> aur <code>messages=[…]</code> naam wali settings hain. Yeh batati hain ki kis model se poochhna hai, aur ab tak ki conversation kya hai.',
  'The conversation is a list with one dictionary in it: a single message from the user.':
    'Conversation ek list hai jisme ek dictionary hai: user ka ek akela message.',
  '<code>response.choices[0].message.content</code> reaches inside the answer. It takes the first choice, then that choice’s message, then the message’s text.':
    '<code>response.choices[0].message.content</code> jawaab ke andar pahunchta hai. Woh pehla choice leta hai, phir us choice ka message, phir us message ka text.',
  'That is the whole of it. Every model call in this course has this shape. Only the words inside change.':
    'Bas itna hi hai. Is course ki har model call ka yahi shape hai. Sirf andar ke shabd badalte hain.',
  'Write, in plain words, what this line would show: <code>print(response.usage.prompt_tokens)</code>':
    'Saadhe shabdon mein likhiye ki yeh line kya dikhayegi: <code>print(response.usage.prompt_tokens)</code>',
  'One sentence.':
    'Ek sentence.',
  'It shows how many tokens (small pieces of words) of your text the model read. Read it left to right. First the response. Then its usage part, which is the bill that comes with each reply. Then the count of prompt tokens in it. You will run exactly this line in Chapter 1.':
    'Yeh dikhata hai ki model ne aapke text ke kitne tokens (shabdon ke chhote tukde) padhe. Ise baayein se daayein padhiye. Pehle response. Phir uska usage wala hissa, jo har jawaab ke saath aane wala bill hai. Phir usme prompt tokens ki ginti. Chapter 1 mein aap theek yahi line chalayenge.',
  'Three shapes you will meet later':
    'Teen shapes jo aapko baad mein milenge',
  'Three more shapes appear from Chapter 2.2 on. You do not need them today. Seeing them once now means they will not surprise you later.':
    'Teen aur shapes Chapter 2.2 se aate hain. Aaj aapko inki zaroorat nahi. Abhi ek baar dekh lene se baad mein yeh aapko chaunkaayenge nahi.',
  'A loop, a check and a recipe':
    'Ek loop, ek check aur ek recipe',
  'You see two “Checking” lines, then <code>not yet</code>, then <code>DONE!</code>. A <code>for</code> line is a loop: it repeats the indented lines (lines pushed in from the left) once for each item, like checking every plate. An <code>if</code> line runs its indented lines only when the test is true. A <code>def</code> line gives a small recipe a name, so you can use it again.':
    'Aapko do “Checking” lines, phir <code>not yet</code>, phir <code>DONE!</code> dikhta hai. <code>for</code> wali line ek loop hai: woh andar khiski hui lines (baayein se andar dhakeli hui lines) ko har item ke liye ek baar dohraati hai, jaise har plate ko check karna. <code>if</code> wali line apni andar khiski lines tabhi chalaati hai jab test sach ho. <code>def</code> wali line ek chhoti recipe ko naam deti hai, taaki aap use dobara use kar sakein.',
  'Change <code>score = 7</code> to <code>score = 9</code> and run it again.':
    '<code>score = 7</code> ko <code>score = 9</code> kar dijiye aur dobara chalaiye.',
  'The spaces matter':
    'Spaces matter karte hain',
  'The spaces at the start of a line tell Python which lines belong to a <code>for</code>, an <code>if</code> or a <code>def</code>. It is like the way a list is pushed in under its heading. If you edit a cell, keep those spaces as they are.':
    'Line ki shuruaat ke spaces Python ko batate hain ki kaun si lines kisi <code>for</code>, <code>if</code> ya <code>def</code> ki hain. Yeh heading ke neeche andar dhakeli hui list jaisa hai. Agar aap cell edit karein, toh woh spaces jaise hain waise hi rehne dijiye.',
  'When a cell goes red':
    'Jab cell laal ho jaaye',
  'Sooner or later a cell will show a red box. That is Python telling you which line it could not follow, and why. It is normal, and it costs nothing.':
    'Kabhi na kabhi koi cell ek red box dikhayega. Yeh Python bata raha hota hai ki woh kaun si line follow nahi kar paaya, aur kyun. Yeh normal hai, aur isme koi paisa nahi lagta.',
  '<strong>is not defined</strong>: a name was used before a line gave it a value. Run the cells above first, or check the spelling.':
    '<strong>is not defined</strong>: ek naam use hua jabki kisi line ne use value di hi nahi thi. Pehle upar ke cells chalaiye, ya spelling check kijiye.',
  '<strong>SyntaxError</strong>: a bracket or a quote is missing. The code is not written in a way Python can read. Count them: every opening one needs a closing one.':
    '<strong>SyntaxError</strong>: koi bracket ya quote chhoot gaya hai. Code aise nahi likha ki Python use padh sake. Ginti kijiye: har khulne wale ko ek band hone wala chahiye.',
  '<strong>IndentationError</strong>: the spaces at the start of a line have moved. Press <strong>Undo edits</strong> to get the original back.':
    '<strong>IndentationError</strong>: line ki shuruaat ke spaces khisak gaye hain. Original wapas paane ke liye <strong>Undo edits</strong> dabaiye.',
  'You can now read the five shapes behind almost every cell in this course. A name for a value. A list. A dictionary. A job with named settings. A dot that reaches inside.':
    'Ab aap woh paanch shapes padh sakte hain jo is course ke lagbhag har cell ke peeche hain. Value ka naam. List. Dictionary. Naam wali settings ke saath ek kaam. Andar tak pahunchne wala dot.',
  'In the next chapter you run the real call. You will not have to take any line on trust, because you can read each one. To run it, you need a model connected. That happens once, on the <a href="#/setup">Connect</a> page.':
    'Agle chapter mein aap asli call chalate hain. Aapko kisi line par aankh band karke bharosa nahi karna padega, kyunki aap har line padh sakte hain. Use chalane ke liye ek model connect hona chahiye. Woh ek baar hota hai, <a href="#/setup">Connect</a> page par.',
});
