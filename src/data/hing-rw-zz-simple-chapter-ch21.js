/* Hinglish for Writing prompts: four techniques that work (chapter:ch21), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'A good prompt is a spec, like a recipe card: it says exactly what you want. It is not a loose request. In this chapter you learn four techniques, from most helpful to least: show an example, name the job, break it into steps, and forbid the failures you have seen.':
    'Achha prompt ek spec hai, recipe card jaisa: usmein theek-theek likha hota hai ki aapko kya chahiye. Woh dhila-dhala request nahi hota. Is chapter mein aap chaar techniques seekhte hain, sabse madadgaar se kam madadgaar tak: example dikhaiye, kaam ka naam batayiye, use steps mein todiye, aur jo galtiyan dekhi hain unhe mana kijiye.',
  'Turn a loose request into a prompt that gives the same shape of answer every time.':
    'Ek dhile request ko aisa prompt banana ki har baar jawaab ka roop ek jaisa aaye.',
  'Tell which of the four techniques is doing the work in any prompt.':
    'Kisi bhi prompt mein bata paana ki chaar techniques mein se kaun sa kaam kar raha hai.',
  'Show the model the answer you want with a worked example, instead of describing it in words.':
    'Model ko jo jawaab chahiye, use words mein batane ke bajaye ek bhare hue example se dikhaiye.',
  'Improve the instructions until a stranger can use them':
    'Instructions tab tak sudhariye jab tak koi ajnabi unhe use na kar sake',
  'Your system prompt (the rules on the shop wall) from Chapter 2 works for you, because you know what you meant. A good prompt works for someone else with no explanation. In this chapter you learned four techniques: describe the reader and the job, show worked examples, break the task into steps, and add a few firm “never” rules. Now you use them on the context judge\'s prompt and test it on another person.':
    'Chapter 2 ka aapka system prompt (deewar par lage niyam) aapke liye kaam karta hai, kyunki aap jaante hain aapka matlab kya tha. Achha prompt kisi aur ke liye bhi bina samjhaye kaam karta hai. Is chapter mein aapne chaar techniques seekhi: padhne wale aur kaam ko bataiye, bhare hue examples dikhaiye, kaam ko steps mein todiye, aur kuch pakke “kabhi nahi” rules jodiye. Ab inhe context judge ke prompt par lagaiye aur kisi doosre insaan par test kijiye.',
  'Use this chapter\'s notebook (the page of code boxes). Write and run the prompt there. The notes box below is for what the other person said when they tried it without help. Short version for the route, about 20 minutes: steps 1, 3 and 5.':
    'Is chapter ka notebook (code ke dibbon wala page) use kijiye. Prompt wahin likhiye aur chalaiye. Neeche ka notes box is liye hai ki doosre insaan ne bina madad ke try kiya to usne kya kaha. Route ke liye chhota version, lagbhag 20 minute: steps 1, 3 aur 5.',
  'In this chapter\'s notebook, run your Chapter 2 system prompt on starter sentences 4, 5 and 8. See where it is weakest.':
    'Is chapter ke notebook mein apna Chapter 2 wala system prompt starter sentences 4, 5 aur 8 par chalaiye. Dekhiye woh kahan sabse kamzor hai.',
  'Add a short note on who reads the answer and what they do with it. For example: “A developer’s program reads your answer and decides whether to hide each item.”':
    'Ek chhota note jodiye ki jawaab kaun padhta hai aur woh use kya karta hai. Jaise: “A developer’s program reads your answer and decides whether to hide each item.”',
  'Add two worked examples. One is ordinary (starter sentence 3). One is awkward (starter sentence 4, where the mobile number is already partly hidden). For each one, write the answer you want, exactly as it should look.':
    'Do bhare hue examples jodiye. Ek aam (starter sentence 3). Ek ajeeb (starter sentence 4, jahan mobile number pehle se aadha chhupa hai). Har ek ke liye woh jawaab likhiye jo aap chahte hain, bilkul waisa jaisa dikhna chahiye.',
  'Add the steps in the order a careful person would take them. First look for numbers with a fixed shape. Then names and places. Then anything that points to one person without an ID.':
    'Steps waise jodiye jaise ek dhyan se kaam karne wala insaan lega. Pehle fixed shape wale numbers dhoondhiye. Phir naam aur jagah. Phir koi bhi cheez jo bina ID ke ek insaan ki taraf ishara kare.',
  'Add at most two “never” rules. Add them only for failures you have really seen. For example: “Never list a number that is already masked with x or *.”':
    'Zyada se zyada do “kabhi nahi” rules jodiye. Sirf un galtiyon ke liye jo aapne sach mein dekhi hain. Jaise: “Never list a number that is already masked with x or *.”',
  'Give the improved prompt and five starter sentences to a friend or colleague. Ask them to run it with no help from you. Write down anything that confused them.':
    'Sudhara hua prompt aur paanch starter sentences kisi dost ya colleague ko dijiye. Unse kahiye ki woh bina aapki madad ke chalaayein. Jo kuch unhe ulta-seedha laga, likh lijiye.',
  'Write one line for each of the four techniques. Say what difference it made.':
    'Chaaron techniques mein se har ek ke liye ek line likhiye. Batayiye ki usne kya fark daala.',
  'Your improved prompt. It has the reader, two examples, the steps and no more than two “never” rules.':
    'Aapka sudhara hua prompt. Usmein padhne wala, do examples, steps aur do se zyada “kabhi nahi” rules nahi hone chahiye.',
  'The answers on starter sentences 4, 5 and 8, before and after.':
    'Starter sentences 4, 5 aur 8 ke jawaab, pehle aur baad mein.',
  'What your friend or colleague found confusing.':
    'Aapke dost ya colleague ko kya uljhan bhara laga.',
  'One line for each technique, saying what it changed.':
    'Har technique ke liye ek line, ki usne kya badla.',
  'A system prompt changes how the model behaves':
    'System prompt model ke behaviour ko badalta hai',
  'In Chapter 2, one sentence of instruction clearly cut down the made-up answers.':
    'Chapter 2 mein instruction ke ek sentence ne banawati jawaabon ko saaf taur par kam kiya.',
  'Instructions can be talked around':
    'Instructions ko chakma diya ja sakta hai',
  'So the words of a prompt are a real tool, but a tool with real limits.':
    'Isliye prompt ke shabd ek asli auzaar hain, lekin asli seemaon wala auzaar.',
  'You will run six or seven prompts in this chapter.':
    'Is chapter mein aap chhe ya saat prompts chalayenge.',
  'The code runs right here, in order. Keep the system prompt from the Chapter 2 capstone close by. It is still in your notebook session. Or press <strong>Restore</strong> after a reload. You begin by testing it on a new kind of job.':
    'Code yahin, order mein chalta hai. Chapter 2 capstone ka system prompt paas rakhiye. Woh ab bhi aapke notebook session mein hai. Ya reload ke baad <strong>Restore</strong> dabaiye. Aap use ek naye tarah ke kaam par test karke shuru karte hain.',
  'In Chapter 2 you saw that one sentence in a system prompt can change how a model behaves. Now comes the part you will do most often at work: writing the prompt for one particular job. This chapter gives you four techniques for that, one at a time. You try each one on your own text.':
    'Chapter 2 mein aapne dekha ki system prompt ka ek sentence model ka behaviour badal sakta hai. Ab woh hissa aata hai jo aap kaam par sabse zyada karenge: ek khaas kaam ke liye prompt likhna. Yeh chapter iske liye chaar techniques deta hai, ek-ek karke. Har ek ko aap apne text par aazmate hain.',
  'First, let us see what your Chapter 2 system prompt can and cannot do.':
    'Pehle dekhte hain ki aapka Chapter 2 wala system prompt kya kar sakta hai aur kya nahi.',
  'Test your system prompt on a new task':
    'Apne system prompt ko ek naye kaam par test kijiye',
  'Use the system prompt you wrote at the end of Chapter 2. This time, do not ask about a fake scheme. Give it a real job. Pull three facts out of a paragraph from your own work.':
    'Chapter 2 ke ant mein likha system prompt use kijiye. Is baar kisi banawati yojana ke baare mein mat poochiye. Use ek asli kaam dijiye. Apne kaam ke ek paragraph se teen facts nikalwaiye.',
  'It does something sensible, in whatever shape it likes. Your system prompt controlled <em>tone and honesty</em>, which is what you wrote it for. But it said nothing about the shape of the answer. So you probably got a paragraph when you wanted three boxes filled in.':
    'Woh kuch samajhdaari ka karta hai, jis roop mein use theek lage. Aapka system prompt <em>lehja aur eemaandaari</em> sambhalta tha, jiske liye aapne use likha tha. Lekin jawaab ke roop ke baare mein usmein kuch nahi tha. Isliye shayad aapko ek paragraph mila jabki aap teen khaane bhare hue chahte the.',
  'A system prompt controls behaviour. The task prompt (the note for this one job) must say what the job is and what the answer should look like.':
    'System prompt behaviour sambhalta hai. Task prompt (is ek kaam ki parchi) mein likha hona chahiye ki kaam kya hai aur jawaab kaisa dikhna chahiye.',
  'So what makes a good task prompt? Think of how most people write their first one. They write a request, like <em>please summarise this and pull out the key dates.</em> Sometimes that works. Other times it fails, because it leaves four things unsaid. The four techniques below fill those gaps.':
    'To achha task prompt kaisa hota hai? Sochiye ki zyadatar log apna pehla prompt kaise likhte hain. Woh ek request likhte hain, jaise <em>please summarise this and pull out the key dates.</em> Kabhi yeh chal jaata hai. Baaki baar yeh fail hota hai, kyunki isme chaar baatein likhi hi nahi hoti. Neeche ki chaar techniques un khaali jagahon ko bharti hain.',
  'Treat a prompt as a spec, a recipe card. Most of its value is in the details people leave out.':
    'Prompt ko ek spec maniye, ek recipe card. Uski zyadatar keemat un details mein hai jo log chhod dete hain.',
  'Make a helper you will reuse':
    'Ek helper banaiye jise aap baar-baar use karenge',
  'You will send many prompts in this chapter. So wrap the call to the model in a small function (a recipe with a name) called <code>ask</code>. You give it a prompt. It gives back the reply. Run this cell (code box) once. It also sets the text the prompts work on. Swap in a paragraph from your own work whenever you like.':
    'Is chapter mein aap bahut se prompts bhejenge. Isliye model ko call karne ka kaam ek chhote function mein rakhiye (naam wali recipe), jiska naam <code>ask</code> hai. Aap use prompt dete hain. Woh reply wapas deta hai. Is cell (code ke dibbe) ko ek baar chalaiye. Yeh woh text bhi tay karta hai jis par prompts kaam karte hain. Jab chahein, apne kaam ka ek paragraph daal dijiye.',
  'Nothing prints. From now on <code>ask("…")</code> sends one prompt and gives back the reply. And <code>text</code> holds the paragraph the prompts below work on.':
    'Kuch print nahi hota. Ab se <code>ask("…")</code> ek prompt bhejta hai aur reply wapas deta hai. Aur <code>text</code> mein woh paragraph hai jis par neeche ke prompts kaam karte hain.',
  'Technique 1: Show an example instead of describing':
    'Technique 1: Batane ke bajaye example dikhaiye',
  'This technique helps the most, and people usually try it last. Here is why it works. If you describe the answer in words, the model copies your words. If you show a finished example, the model copies its shape. It is like showing a child a filled-in form instead of explaining the form.':
    'Yeh technique sabse zyada madad karti hai, aur log ise aksar aakhir mein aazmate hain. Yeh kyun chalti hai: agar aap jawaab ko words mein batate hain, to model aapke words ki nakal karta hai. Agar aap ek poora bhara example dikhate hain, to model uske roop ki nakal karta hai. Yeh waisa hai jaise bachche ko form samjhane ke bajaye bhara hua form dikha dena.',
  'Describe it, then show it':
    'Pehle batayiye, phir dikhaiye',
  'You run the same job twice. First, describe the answer you want in one sentence.':
    'Aap wahi kaam do baar chalate hain. Pehle, jo jawaab chahiye use ek sentence mein bataiye.',
  'Then delete the description. Show one finished example instead.':
    'Phir us vivaran ko hata dijiye. Uski jagah ek poora example dikhaiye.',
  'The described version changes from run to run. The labels change. Over five runs, the dates come back in three different styles. The shown version matches your shape, even the date style, though you never put it in words.':
    'Batane wala version har run mein badalta hai. Labels badalte hain. Paanch runs mein tareekhen teen alag style mein aati hain. Dikhane wala version aapke roop se milta hai, tareekh ka style bhi, jabki aapne use kabhi words mein nahi bataya.',
  'One worked example is often worth a whole paragraph of instructions. Examples placed inside a prompt are called <strong>few-shot examples</strong>. Two or three are usually enough.':
    'Ek bhara hua example aksar instructions ke poore paragraph ke barabar hota hai. Prompt ke andar rakhe examples ko <strong>few-shot examples</strong> kehte hain. Do ya teen aam taur par kaafi hote hain.',
  'Think about this before you read on. If one example helps this much, what happens when you add a second one?':
    'Aage padhne se pehle yeh sochiye. Agar ek example itni madad karta hai, to doosra jodne par kya hota hai?',
  'Better, worse or no change, and why':
    'Behtar, kharab ya koi fark nahi, aur kyun',
  'Make a guess. You add a second example, and you make it an awkward case on purpose, such as a document where the notice period is missing. What happens to the answers for <em>normal</em> documents?':
    'Andaaza lagaiye. Aap doosra example jodte hain, aur jaanboojhkar use ek ajeeb maamla banate hain, jaise ek document jisme notice period gayab hai. <em>Aam</em> documents ke jawaabon ka kya hota hai?',
  'They usually get better. The awkward example shows the model what to do when a box is empty. The tidy example cannot teach that.':
    'Woh aam taur par behtar ho jaate hain. Ajeeb example model ko dikhata hai ki khaali khaana ho to kya karna hai. Saaf-suthra example yeh nahi sikha sakta.',
  'So choosing the examples matters more than how many you have. Two well-chosen examples, one typical and one awkward, usually beat six that look alike. They also cost much less to send, because you pay for every token.':
    'Isliye examples chunna unki ginti se zyada maayne rakhta hai. Do soch-samajh kar chune examples, ek aam aur ek ajeeb, aam taur par chhe ek jaise examples se behtar hote hain. Woh bhejne mein bhi bahut sasta padte hain, kyunki aap har token ka paisa dete hain.',
  'Technique 2: Name the job and the reader':
    'Technique 2: Kaam aur padhne wale ka naam batayiye',
  'Imagine asking a colleague to “summarise this”. They would probably ask, “For whom? What for?” A model will not ask. It just guesses. So you have to tell it.':
    'Sochiye aap kisi colleague se kehte hain “isse summarise kar do”. Woh shayad poochhega, “Kiske liye? Kis kaam ke liye?” Model nahi poochhega. Woh bas andaaza lagata hai. Isliye aapko use batana padta hai.',
  '“Summarise this” is a request. “You are reading a support ticket and writing the one line a triage agent needs” is a job. Naming the job and the reader changes the answer a lot, for very little work.':
    '“Summarise this” ek request hai. “You are reading a support ticket and writing the one line a triage agent needs” ek kaam hai. Kaam aur padhne wale ka naam batane se jawaab bahut badal jaata hai, bahut kam mehnat mein.',
  'Give the same text a job description':
    'Wahi text ko ek kaam ka vivaran dijiye',
  'Take a paragraph from your work and prompt it twice. The first time, use just a bare verb (a one-word order like “summarise”). The second time, name the job and the reader.':
    'Apne kaam ka ek paragraph lijiye aur use do baar prompt kijiye. Pehli baar sirf ek akela kriya-shabd (ek shabd ka hukm jaise “summarise”) use kijiye. Doosri baar kaam aur padhne wale ka naam batayiye.',
  'The bare version gives a fair summary that shortens everything by the same amount. The job version drops most of the text and keeps the part that matters for the decision. That is because you said what the reader has to do next.':
    'Akela kriya wala version ek theek-thaak summary deta hai jo sab kuch barabar chhota karta hai. Kaam wala version zyadatar text hata deta hai aur faisle ke liye zaroori hissa rakhta hai. Aisa isliye kyunki aapne bataya ki padhne wale ko aage kya karna hai.',
  'Technique 3: Break the job into steps':
    'Technique 3: Kaam ko steps mein todiye',
  'Some jobs have several parts. If you ask only for the finished answer, the model does all the parts at once, and you cannot see how it got there. If you ask for the parts in order, it costs a few more tokens (bricks of text), but you get work you can check, like a student who shows their working.':
    'Kuch kaamon ke kai hisse hote hain. Agar aap sirf poora jawaab maangte hain, to model saare hisse ek saath karta hai, aur aap nahi dekh paate ki woh wahan kaise pahuncha. Agar aap hisse order mein maangte hain, to kuch aur tokens (text ki eenten) lagte hain, lekin aapko aisa kaam milta hai jise aap check kar sakte hain, us vidyarthi jaisa jo apna hisaab dikhata hai.',
  'Ask for the steps':
    'Steps maangiye',
  'Ask for a judgement from your own field, such as whether a claim is complete or whether a request meets a policy. First ask directly. Then ask again, in steps.':
    'Apne kshetra se ek faisla maangiye, jaise kya koi claim poora hai ya kya koi request policy par khari utarti hai. Pehle seedha poochiye. Phir steps mein dobara poochiye.',
  'The verdict is often the same. The difference is that now you can see <em>why</em>. You can check each step against the document. When the answer is wrong, you can point to the step that went wrong.':
    'Faisla aksar wahi rehta hai. Fark yeh hai ki ab aap <em>kyun</em> dekh sakte hain. Aap har step ko document se milakar check kar sakte hain. Jab jawaab galat ho, to aap us step par ungli rakh sakte hain jahan galti hui.',
  'Steps do not make the model smarter. They make its answer something you can check. That matters for anything a person has to stand behind.':
    'Steps model ko zyada hoshiyar nahi banate. Woh uske jawaab ko aisi cheez banate hain jise aap check kar saken. Yeh har us cheez ke liye maayne rakhta hai jiske peeche kisi insaan ko khada hona padta hai.',
  'Technique 4: Forbid what you have seen go wrong':
    'Technique 4: Jo galat hota dekha hai use mana kijiye',
  'The last technique is the weakest of the four. Chapter 2 showed that an instruction discourages a behaviour but does not stop it. So write one or two “never” rules, and only for failures you have really seen. Do not pile up a long list.':
    'Aakhri technique chaaron mein sabse kamzor hai. Chapter 2 ne dikhaya ki instruction kisi behaviour ko hatotsahit karti hai par rokti nahi. Isliye ek ya do “kabhi nahi” rules likhiye, aur sirf un galtiyon ke liye jo aapne sach mein dekhi hain. Lambi list mat banaiye.',
  'Now try all four together, one after another. This is the most useful exercise in the chapter.':
    'Ab chaaron ko saath aazmaiye, ek ke baad ek. Yeh chapter ki sabse kaam ki practice hai.',
  'Take a real request you would give an AI at work. Write it four times. Add one technique each time: the job, then the steps, then a worked example, then one “never” rule. After each version, note what changed.':
    'Kaam par AI ko dene wala ek asli request lijiye. Use chaar baar likhiye. Har baar ek technique jodiye: kaam, phir steps, phir ek bhara example, phir ek “kabhi nahi” rule. Har version ke baad likhiye ki kya badla.',
  'v1 the job … v2 the steps … v3 the example … v4 the one thing it must not do':
    'v1 kaam … v2 steps … v3 example … v4 woh ek cheez jo use kabhi nahi karni',
  'Most people find that the worked example makes the biggest difference, the job description comes second, and the “never” rule makes almost none. That is the opposite of the order people write them in. A first draft is usually a request plus a list of “never” rules. Also notice that version four is long. Every technique adds tokens, and you pay for those tokens on every call. Chapter 15 puts a number on that trade-off.':
    'Zyadatar logon ko lagta hai ki bhara example sabse bada fark daalta hai, kaam ka vivaran doosre number par aata hai, aur “kabhi nahi” rule lagbhag koi fark nahi daalta. Yeh us order ka ulta hai jisme log inhe likhte hain. Pehla draft aksar ek request aur “kabhi nahi” rules ki list hota hai. Yeh bhi dekhiye ki chautha version lamba hai. Har technique tokens jodti hai, aur un tokens ka paisa har call par lagta hai. Chapter 15 is len-den par ek number rakhta hai.',
  'Here is what you have learned. A prompt is a spec, and a good one has four parts. Use them in this order of impact:':
    'Aapne yeh seekha. Prompt ek spec hai, aur achhe prompt ke chaar hisse hote hain. Unhe asar ke is order mein use kijiye:',
  'Show an example, name the job, break it into steps, and forbid only what you have seen go wrong.':
    'Example dikhaiye, kaam ka naam batayiye, use steps mein todiye, aur sirf wahi mana kijiye jo galat hota dekha hai.',
  'You now have four versions of a prompt and a feeling that one of them is best. But a feeling from reading a few answers is weak proof, as Chapter 2 showed. Next you learn how to measure which version is really better, like checking with an answer key.':
    'Ab aapke paas prompt ke chaar versions hain aur ek ehsaas ki unmein se ek sabse achha hai. Lekin kuch jawaab padhkar bana ehsaas kamzor saboot hai, jaisa Chapter 2 ne dikhaya. Aage aap seekhte hain ki asli mein kaun sa version behtar hai, yeh answer key se milakar kaise naapein.',
});
