/* Hinglish for Summarisation: testing what a summary keeps (chapter:ch25), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A summary can drop the most important line and still read well. So this failure is easy to miss. It is like a neat tiffin box with the main dish missing. In this chapter you decide who a summary is for. Then you build a test that checks whether the facts that matter survive.':
    'Summary sabse zaroori line chhod de aur phir bhi achhi padhi ja sakti hai. Isliye yeh failure pakadna mushkil hai. Yeh ek saaf tiffin jaisa hai jisme mukhya sabzi gayab hai. Is chapter mein aap tay karte hain ki summary kiske liye hai. Phir aap ek test banate hain jo jaanchta hai ki zaroori facts bache ya nahin.',
  'Decide who a summary is for, and what they will do next, before you write the prompt.':
    'Prompt likhne se pehle tay kijiye ki summary kiske liye hai, aur woh aage kya karenge.',
  'Test a summariser for the failure that matters: what it left out.':
    'Summariser ko us failure ke liye jaanchiye jo maayne rakhta hai: usne kya chhod diya.',
  'Say why “it reads well” tells you almost nothing about a summary.':
    'Samjhaiye ki “yeh achha padhta hai” se summary ke baare mein lagbhag kuch pata nahin chalta.',
  'Write a short privacy report, and check it against the facts':
    'Chhoti privacy report likhiye, aur use facts se milaiye',
  'After the tool has cleaned a batch of messages, a manager wants a short report of what was found and how often. A summary can fail in a dangerous way. It leaves something out, or it makes something up. In this chapter you learned to decide who a summary is for, and to test what it leaves out. Now you build a summary of what the tool found, and test it.':
    'Tool ke messages saaf karne ke baad, ek manager chhoti report chahta hai ki kya mila aur kitni baar. Summary khatarnaak tareeke se fail ho sakti hai. Woh kuch chhod deti hai, ya kuch gadh deti hai. Is chapter mein aapne seekha ki summary kiske liye hai yeh kaise tay karein, aur usne kya chhoda yeh kaise jaanchein. Ab aap tool ne jo paaya uski ek summary banate hain, aur use jaanchte hain.',
  'Use your notebook (the page where you run code in boxes) for this chapter. Build the summary and its fact check there. Write what the check caught in the notes box below. Short version for the route, about 20 minutes: steps 1, 3, 4 and 5.':
    'Is chapter ke liye apna notebook (woh page jahan code dibbon mein chalta hai) use kijiye. Summary aur uski fact check wahin banaiye. Check ne kya pakda, yeh neeche ke notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: steps 1, 3, 4 aur 5.',
  'Make a batch of ten results by hand, using starter sentences 1 to 10. For each one, write the list of things the tool found and what it did to them.':
    'Starter sentences 1 se 10 lekar haath se das results ka ek batch banaiye. Har ek ke liye likhiye ki tool ko kya-kya mila aur usne unke saath kya kiya.',
  'Decide who will read the summary and what they will do next. For example: “A compliance manager reads it every Monday and decides whether to change a rule.” Write this in one line.':
    'Tay kijiye ki summary kaun padhega aur woh aage kya karega. Jaise: “A compliance manager reads it every Monday and decides whether to change a rule.” Yeh ek line mein likhiye.',
  'Write a prompt that asks a model to summarise the ten results in five lines for that reader.':
    'Aisa prompt likhiye jo model se kahe ki das results ko us padhne wale ke liye paanch lines mein summarise kare.',
  'Write down five facts the summary must contain. For example: how many Aadhaar numbers were found, how many sentences had nothing found, and which sentence the tool was unsure about.':
    'Paanch facts likhiye jo summary mein hone hi chahiye. Jaise: kitne Aadhaar number mile, kitne sentences mein kuch nahin mila, aur kis sentence ke baare mein tool ko shak tha.',
  'Run the summary. Tick off each of the five facts. Mark any line in the summary that is not in your ten results. That is an invented fact.':
    'Summary chalaiye. Paanchon facts par sahi ka nishan lagaiye. Summary ki woh koi bhi line chun lijiye jo aapke das results mein nahin hai. Yeh gadha hua fact hai.',
  'Run it again with one instruction changed. Did the missing or invented facts go away? Write what you changed and what happened.':
    'Ek nirdesh badalkar dobara chalaiye. Kya chhoote ya gadhe hue facts chale gaye? Likhiye ki aapne kya badla aur kya hua.',
  'Write one line on why “it reads well” was not a good test.':
    'Ek line likhiye ki “yeh achha padhta hai” achha test kyun nahin tha.',
  'Your ten results, made by hand.':
    'Haath se banaye aapke das results.',
  'The five facts the summary had to contain, ticked off for each run.':
    'Woh paanch facts jo summary mein hone the, har run ke liye nishan lagaye hue.',
  'Any invented facts you found.':
    'Jo bhi gadhe hue facts aapne paaye.',
  'What you changed on the second run, and what it did.':
    'Doosre run mein aapne kya badla, aur usse kya hua.',
  'The line on why “it reads well” is not a test.':
    'Woh line ki “yeh achha padhta hai” test kyun nahin hai.',
  'Some task types have no single right answer':
    'Kuch task types ka koi ek sahi jawaab nahin hota',
  'Summarising is the first one you meet.':
    'Summarising pehla hai jisse aap milte hain.',
  'Count each box, not one overall number':
    'Har dibba ginye, ek kul number nahin',
  'It is the same idea, now used where counting is harder.':
    'Yahi vichaar hai, ab wahan jahan ginna zyaada mushkil hai.',
  'You will summarise one document in several ways.':
    'Aap ek document ko kai tareeke se summarise karenge.',
  'Bring one real document with something important buried in it. It could be a deadline, an exception, a liability or a number that someone would be upset to miss. Add it with the Files panel, or paste it into a cell (one box of code). No document you can use? Use the Digital Personal Data Protection Act, 2023. It is public.':
    'Ek asli document laiye jisme kuch zaroori baat dabi ho. Woh ek deadline, ek apwaad, ek zimmedari ya aisa number ho sakta hai jiske chhootne se koi naraaz ho. Use Files panel se jodiye, ya ek cell (code ka ek dibba) mein paste kijiye. Koi document kaam ka nahin? Digital Personal Data Protection Act, 2023 use kijiye. Yeh public hai.',
  'Last chapter you graded a sorter. Every answer was plainly right or wrong. Summaries are different. They have no single right answer, so it is much harder to say if one is good. In this chapter you see how a summary can fail without anyone noticing. Then you build a simple way to catch it.':
    'Pichhle chapter mein aapne ek sorter jaancha. Har jawaab saaf sahi ya galat tha. Summaries alag hoti hain. Unka koi ek sahi jawaab nahin hota, isliye yeh kehna kahin mushkil hai ki ek achhi hai ya nahin. Is chapter mein aap dekhte hain ki summary bina kisi ke dekhe kaise fail ho sakti hai. Phir aap ise pakadne ka ek saada tareeka banate hain.',
  'How summaries fail':
    'Summaries kaise fail hoti hain',
  'Start by watching a summary go wrong. Summarise a document the simplest way you can. Then look for the detail you buried in it.':
    'Pehle ek summary ko galat hote dekhiye. Document ko sabse saade tareeke se summarise kijiye. Phir woh detail dhoondhiye jo aapne usme dabayi thi.',
  'Summarise with a plain instruction':
    'Saade nirdesh se summarise kijiye',
  'Summarise your document with the simplest instruction. Then check if the buried detail is in the summary.':
    'Apne document ko sabse saade nirdesh se summarise kijiye. Phir dekhiye ki dabi hui detail summary mein hai ya nahin.',
  'You get a neat, smooth summary. Often it leaves out the buried detail. Nothing in it is false. It cut every part down by the same amount, but the important part sat in one small spot. It is like trimming a whole page evenly and losing the one line you needed.':
    'Aapko ek saaf, sahaj summary milti hai. Aksar woh dabi hui detail chhod deti hai. Usme kuch jhoota nahin hota. Usne har hissa barabar chhota kiya, par zaroori hissa ek chhoti jagah tha. Yeh poore page ko barabar kaatne jaisa hai, aur wahi ek line kho dena jo chahiye thi.',
  'A summary that lost the most important line looks just like one that kept it. You must test for the missing detail directly.':
    'Jis summary ne sabse zaroori line kho di, woh bilkul waisi dikhti hai jisne rakhi. Chhooti detail ko aapko seedhe jaanchna hoga.',
  'Start from the reader':
    'Padhne wale se shuru kijiye',
  'Think how you would summarise a long meeting. You would tell your manager one thing and a new joiner something quite different. A good summary depends on who is reading it.':
    'Sochiye aap ek lambi meeting ka saransh kaise denge. Aap apne manager ko ek baat batayenge aur naye joiner ko bilkul alag. Achhi summary is par nirbhar hai ki use kaun padh raha hai.',
  'So before you write a summarising prompt, answer two questions: who reads this, and what will they do next? A summary is good or bad only for one reader and one decision.':
    'Isliye summarising prompt likhne se pehle do sawaalon ka jawaab dijiye: ise kaun padhega, aur woh aage kya karega? Summary sirf ek padhne wale aur ek faisle ke liye achhi ya buri hoti hai.',
  'Let us see that with your own document.':
    'Ise apne hi document par dekhte hain.',
  'Summarise for three different readers':
    'Teen alag padhne walon ke liye summarise kijiye',
  'Summarise the document three times. Each time, name a different reader and decision.':
    'Document ko teen baar summarise kijiye. Har baar ek alag padhne wala aur faisla bataiye.',
  'You get three different summaries. The lawyer’s version keeps the duties and drops the background. The new joiner’s version does the opposite. Neither is better. Each answers a different question. The plain version from the first step was not written for anyone in particular.':
    'Aapko teen alag summaries milti hain. Vakil wala version zimmedariyan rakhta hai aur background chhod deta hai. Naye joiner wala version ulta karta hai. Koi behtar nahin. Har ek alag sawaal ka jawaab deta hai. Pehle step ka saada version kisi khaas ke liye nahin likha gaya tha.',
  'Test what the summary keeps':
    'Jaanchiye ki summary ne kya rakha',
  'Once you know the reader, how do you check the summary? A program cannot grade how well it is written. But it can check whether certain facts made it through. It is like checking a packed bag against a list.':
    'Jab aap padhne wale ko jaan lein, to summary kaise jaanchein? Program yeh nahin jaanch sakta ki woh kitni achhi likhi hai. Par woh yeh jaanch sakta hai ki kuch facts pahunche ya nahin. Yeh pack kiye bag ko list se milane jaisa hai.',
  'For each document, list the facts a reader must not lose. Check every summary for them.':
    'Har document ke liye woh facts likhiye jo padhne wala kho nahin sakta. Har summary ko unke liye jaanchiye.',
  'Build a fact check':
    'Fact check banaiye',
  'Take five real documents. For each, write the two or three facts a reader must not lose. Then check each summary for them in code.':
    'Paanch asli documents lijiye. Har ek ke liye do-teen facts likhiye jo padhne wala kho nahin sakta. Phir code mein har summary ko unke liye jaanchiye.',
  'You get a miss rate for the thing that matters. The check is rough. A summary can hold a fact in different words, and this check will miss it. Even so, it is far more useful than reading five summaries and deciding they look fine.':
    'Aapko us cheez ki chhootne ki dar milti hai jo maayne rakhti hai. Yeh check mota hai. Summary kisi fact ko alag shabdon mein rakh sakti hai, aur yeh check use chhod dega. Phir bhi, paanch summaries padhkar “theek lagti hain” kehne se yeh kahin zyaada kaam ka hai.',
  'Now change one thing. Add <em>“keep every date, amount and named party exactly as written”</em> to the prompt. Run it again.':
    'Ab ek cheez badaliye. Prompt mein <em>“keep every date, amount and named party exactly as written”</em> jodiye. Dobara chalaiye.',
  'The miss rate usually drops sharply. The summaries get a little longer and a little harder to read. That is the trade-off, and now you have numbers for both sides.':
    'Chhootne ki dar aam taur par tezi se girti hai. Summaries thodi lambi aur thodi kam padhne layak ho jaati hain. Yahi sauda hai, aur ab aapke paas dono taraf ke numbers hain.',
  'Chapters 2.4 and 2.5 use the same method for two different task types. First decide what counts as failure. Then measure that one failure. Do not just read the answers and form a feeling.':
    'Chapter 2.4 aur 2.5 do alag task types ke liye ek hi tareeka use karte hain. Pehle tay kijiye ki failure kise kehte hain. Phir us ek failure ko naapiye. Bas jawaab padhkar andaaza mat banaiye.',
  'So far, every document fit into the request. But sometimes the answer is spread across a hundred documents, like a handbook, a policy library or five years of contracts. These methods do not help there, because the model has never seen those documents. In Chapter 3 you start solving that problem.':
    'Ab tak har document request mein samaa jaata tha. Par kabhi jawaab sau documents mein faila hota hai, jaise handbook, policy library ya paanch saal ke contracts. Yahan yeh tareeke madad nahin karte, kyunki model ne woh documents kabhi dekhe hi nahin. Chapter 3 mein aap us samasya ko hal karna shuru karte hain.',
});
