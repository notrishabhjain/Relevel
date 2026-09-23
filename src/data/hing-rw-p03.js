/* Hinglish: p03 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Writing prompts: four techniques that work':
    'Prompts likhna: chaar techniques jo kaam karti hain',
  'A good prompt is a specification, not a request. You will learn four techniques, in order of how much they help: show an example, name the job, break it into steps, and forbid the failures you have seen.':
    'Achha prompt ek specification hota hai, request nahi. Aap chaar techniques seekhenge, is kram mein ki woh kitni madad karti hain: example dikhaiye, kaam ka naam dijiye, use steps mein todiye, aur dekhe hue failures ko mana kijiye.',
  'Turn a vague request into a prompt that returns the same format every time.':
    'Ek dhundhli request ko aise prompt mein badalna jo har baar ek hi format lautaye.',
  'Identify which of the four techniques is doing the work in any prompt.':
    'Kisi bhi prompt mein pehchaan paana ki chaar mein se kaunsi technique kaam kar rahi hai.',
  'Show a model the output you want with a worked example, instead of describing it.':
    'Jo output chahiye use describe karne ki jagah ek worked example se model ko dikhana.',
  'Write a prompt someone else can use':
    'Aisa prompt likhiye jise koi aur use kar sake',
  'Build a prompt for a real task using the four techniques. Write down what each technique does, then hand it to someone else. A prompt that only works when you explain it is not finished.':
    'Chaar techniques se ek asli task ka prompt banaiye. Likhiye ki har technique kya karti hai, phir use kisi aur ko de dijiye. Jo prompt sirf aapke samjhaane par chale, woh abhi poora nahi hua.',
  'Name one real task at your work, and the decision its output feeds. One line each.':
    'Apne kaam ka ek asli task likhiye, aur woh decision jise uska output feed karta hai. Har ek ki ek line.',
  'Write the job description: who reads the output, what they do next, and what they can ignore.':
    'Job description likhiye: output kaun padhta hai, woh aage kya karta hai, aur kya ignore kar sakta hai.',
  'Choose two worked examples: one typical and one awkward. The awkward one should show what to do when something is missing.':
    'Do worked examples chuniye: ek typical aur ek pechida. Pechida wala dikhaye ki kuchh missing ho to kya karna hai.',
  'If the task has parts, add the steps, in the order a careful person would work.':
    'Agar task ke hisse hain, to steps jodiye, us kram mein jismein ek dhyaan se kaam karne wala insaan karega.',
  'Add at most two prohibitions, only for failures you have actually seen.':
    'Zyada se zyada do mana-hi jodiye, sirf un failures ke liye jo aapne sach mein dekhe hain.',
  'Give the prompt and five real inputs to a colleague. Have them run it without any explanation from you.':
    'Prompt aur paanch asli inputs ek colleague ko dijiye. Unhe bina aapke samjhaaye chalaane dijiye.',
  'Someone else ran it and got what you expected, without asking you a question.':
    'Kisi aur ne ise chalaya aur bina sawaal poochhe wahi mila jo aapne socha tha.',
  'You can point to each technique in your prompt and say what it does.':
    'Aap apne prompt ki har technique par ungli rakh kar bata sakte hain ki woh kya karti hai.',
  'You know roughly how many tokens your prompt costs before any input is added.':
    'Aapko mota-mota pata hai ki kisi input ke bina aapka prompt kitne tokens ka hai.',
  'A system prompt changes behaviour':
    'System prompt behaviour badalta hai',
  'One sentence of instruction visibly reduced invented answers.':
    'Instruction ke ek sentence ne banaaye hue jawab saaf taur par kam kiye.',
  'Instructions can be overridden':
    'Instructions ko palta ja sakta hai',
  'So wording is a real tool with real limits.':
    'To wording ek asli tool hai, asli seemaon ke saath.',
  'You will run six or seven prompts in this chapter.':
    'Is chapter mein aap chhe-saat prompts chalaayenge.',
  'Open a notebook called <code>chapter-2-1</code> and run the warm-up cells. Have the system prompt from the Chapter 2 capstone open. You will start by testing it on a new kind of task.':
    '<code>chapter-2-1</code> naam ka notebook kholiye aur warm-up cells chalaiye. Chapter 2 capstone ka system prompt khula rakhiye. Aap use ek naye tarah ke task par test karke shuru karenge.',
  'Test your system prompt on a new task':
    'Apne system prompt ko naye task par test kijiye',
  'Use the system prompt you wrote at the end of Chapter 2. This time, instead of asking about a fake scheme, give it a real job: pull three specific facts out of a paragraph from your own work.':
    'Chapter 2 ke ant mein likha system prompt use kijiye. Is baar fake scheme ke baare mein poochhne ki jagah use ek asli kaam dijiye: apne kaam ke ek paragraph se teen specific facts nikaalna.',
  'It does something reasonable, in whatever format it chooses. Your system prompt controlled <em>tone and honesty</em>, which is what you wrote it for. It said nothing about the format of the answer, so you got a paragraph when you probably wanted three fields.':
    'Woh kuchh theek-thaak karta hai, apne pasand ke format mein. Aapke system prompt ne <em>tone aur imaandari</em> ko control kiya, jiske liye aapne use likha tha. Usne jawab ke format ke baare mein kuchh nahi kaha, isliye aapko paragraph mila jab shayad aapko teen fields chahiye the.',
  'A system prompt controls behaviour. The task prompt has to specify the job and the output.':
    'System prompt behaviour control karta hai. Task prompt ko kaam aur output specify karna padta hai.',
  'Most people write their first prompt as a request: <em>please summarise this and pull out the key dates.</em> This works some of the time. It fails the rest of the time because it leaves four things unsaid. The four techniques below fill those gaps.':
    'Zyadatar log apna pehla prompt request ki tarah likhte hain: <em>please ise summarise karo aur zaroori dates nikaalo.</em> Yeh kabhi-kabhi chalta hai. Baaki samay fail hota hai kyunki isme chaar baatein ankahi reh jaati hain. Neeche ki chaar techniques woh kami bharti hain.',
  'Treat a prompt as a specification. Most of its value is in the details people leave out.':
    'Prompt ko specification maaniye. Uski zyadatar value un details mein hai jo log chhod dete hain.',
  'Technique 1: Show an example instead of describing':
    'Technique 1: Describe karne ki jagah example dikhaiye',
  'This technique helps the most, and people usually try it last. If you describe the output in words, the model imitates your words. If you show a finished example, the model copies its format.':
    'Yeh technique sabse zyada madad karti hai, aur log ise aksar sabse aakhir mein try karte hain. Agar aap output shabdon mein describe karte hain, to model aapke shabdon ki nakal karta hai. Agar aap poora example dikhate hain, to model uska format copy karta hai.',
  'Then delete the description and show one finished example instead.':
    'Phir description hataaiye aur uski jagah ek poora example dikhaiye.',
  'The described version varies: labels change, and dates come back in three different formats across five runs. The shown version matches your format, including the date style, even though you never described it in words.':
    'Describe kiya version badalta rehta hai: labels badalte hain, aur paanch runs mein dates teen alag formats mein aati hain. Dikhaya hua version aapke format se milta hai, date style samet, jabki aapne use kabhi shabdon mein describe nahi kiya.',
  'One worked example is often worth a paragraph of instructions. Examples in a prompt are called <strong>few-shot examples</strong>, and two or three are usually enough.':
    'Ek worked example aksar instructions ke ek paragraph jitna kaam karta hai. Prompt ke examples ko <strong>few-shot examples</strong> kehte hain, aur aam taur par do-teen kaafi hote hain.',
  'Better, worse or no change, and why':
    'Behtar, badtar ya koi badlaav nahi, aur kyun',
  'Predict: you add a second example, and you make it an awkward case on purpose, such as a document where the notice period is missing. What happens to the answers for <em>normal</em> documents?':
    'Andaaza lagaiye: aap doosra example jodte hain, aur jaan-boojh kar use pechida case banaate hain, jaise ek document jismein notice period missing hai. <em>Normal</em> documents ke jawabon ka kya hota hai?',
  'They usually get better. The awkward example shows the model what to do when a field is missing, which the tidy example cannot show.':
    'Woh aam taur par behtar hote hain. Pechida example model ko dikhata hai ki field missing ho to kya karna hai, jo saaf-suthra example nahi dikha sakta.',
  'Choosing the right examples matters more than adding more. Two well-chosen examples, one typical and one awkward, usually beat six similar ones, and cost much less to send.':
    'Zyada examples jodne se zyada zaroori sahi examples chunna hai. Do achhe chune examples, ek typical aur ek pechida, aam taur par chhe milte-julte examples se behtar hote hain, aur bhejne mein bahut sasta padte hain.',
  'Technique 2: Name the job and the reader':
    'Technique 2: Kaam aur padhne wale ka naam dijiye',
  '“Summarise this” is a request. “You are reading a support ticket and writing the one line a triage agent needs” is a job. Naming the job and the reader changes the output a lot, for very little extra effort.':
    '“Ise summarise karo” ek request hai. “Aap ek support ticket padh rahe hain aur woh ek line likh rahe hain jo triage agent ko chahiye” ek kaam hai. Kaam aur padhne wale ka naam dene se, bahut kam extra mehnat mein, output kaafi badal jaata hai.',
  'Take a paragraph from your work and prompt it twice: once with a bare verb, and once with the job and the reader named.':
    'Apne kaam ka ek paragraph lijiye aur use do baar prompt kijiye: ek baar sirf ek verb ke saath, aur ek baar kaam aur padhne wale ke naam ke saath.',
  'The bare version produces a competent summary that shortens everything equally. The job version drops most of the text and keeps the part that matters for the decision, because you said what the reader has to do next.':
    'Sirf verb wala version ek theek-thaak summary deta hai jo sab kuchh barabar chhota karta hai. Kaam wala version zyadatar text hata deta hai aur decision ke liye zaroori hissa rakhta hai, kyunki aapne bataya ki padhne wale ko aage kya karna hai.',
  'Technique 3: Break the job into steps':
    'Technique 3: Kaam ko steps mein todiye',
  'When a task has several parts, asking for the finished result makes the model do all the parts at once. Asking for the parts in order costs a few more tokens and produces work you can check.':
    'Jab task ke kai hisse hon, to poora result maangne se model saare hisse ek saath karta hai. Hisse kram se maangne mein kuchh tokens zyada lagte hain aur aisa kaam milta hai jise aap check kar sakte hain.',
  'Ask for the steps':
    'Steps maangiye',
  'Ask for a judgement from your own field, such as whether a claim is complete or a request meets a policy. Ask directly first, then in steps.':
    'Apne field se ek judgement maangiye, jaise koi claim poora hai ya nahi, ya koi request policy ke mutaabik hai ya nahi. Pehle seedha poochhiye, phir steps mein.',
  'The verdict is often the same. The difference is that you can now see <em>why</em>, and check each step against the document. When the answer is wrong, you can point to the step that went wrong.':
    'Faisla aksar wahi rehta hai. Farq yeh hai ki ab aap <em>kyun</em> dekh sakte hain, aur har step ko document se check kar sakte hain. Jab jawab galat ho, to aap us step par ungli rakh sakte hain jo galat hua.',
  'Steps do not make the model smarter. They make its answer checkable, which matters for anything a person has to stand behind.':
    'Steps model ko zyada samajhdaar nahi banaate. Woh uske jawab ko check karne laayak banaate hain, jo har us cheez ke liye zaroori hai jiske peechhe kisi insaan ko khade hona hai.',
  'Technique 4: Forbid what you have seen go wrong':
    'Technique 4: Jo galat hote dekha, use mana kijiye',
  'Prohibitions are the weakest of the four techniques. As Chapter 2 showed, an instruction discourages a behaviour but does not prevent it. Write one or two prohibitions for failures you have actually seen. Do not stack up a long list.':
    'Mana-hi chaaron techniques mein sabse kamzor hai. Jaisa Chapter 2 ne dikhaya, instruction behaviour ko hatotsaahit karti hai par rokti nahi. Sirf un failures ke liye ek-do mana-hi likhiye jo aapne sach mein dekhe hain. Lambi list mat banaiye.',
  'Take a real request you would give an AI at work. Write it four times, adding one technique each time: the job, then the steps, then a worked example, then one prohibition. After each version, note what changed.':
    'Kaam par AI ko di jaane wali ek asli request lijiye. Use chaar baar likhiye, har baar ek technique jodte hue: kaam, phir steps, phir worked example, phir ek mana-hi. Har version ke baad note kijiye ki kya badla.',
  'Most people find the worked example makes the biggest difference, the job description the second biggest, and the prohibition almost none. That is the reverse of the order most people write them in: a first draft is usually a request plus a list of prohibitions. Also notice that version four is long. Every technique adds tokens you pay for on every call. Chapter 15 puts a number on that trade-off.':
    'Zyadatar logon ko lagta hai ki worked example sabse bada farq laata hai, job description doosra sabse bada, aur mana-hi lagbhag kuchh nahi. Yeh us kram ka ulta hai jismein zyadatar log likhte hain: pehla draft aam taur par ek request aur mana-hi ki list hota hai. Yeh bhi dekhiye ki chautha version lamba hai. Har technique tokens jodti hai jinke paise har call par lagte hain. Chapter 15 is trade-off ko number deta hai.',
  'Use the four techniques in this order of impact: show an example, name the job, break it into steps, and forbid only what you have seen go wrong.':
    'Chaar techniques ko asar ke is kram mein use kijiye: example dikhaiye, kaam ka naam dijiye, steps mein todiye, aur sirf wahi mana kijiye jo galat hote dekha.',
  'You now have four versions of a prompt and a feeling that one is best. A feeling based on reading a few outputs is weak evidence, as Chapter 2 showed. The next chapter shows how to measure which version is better.':
    'Ab aapke paas ek prompt ke chaar versions hain aur yeh ehsaas ki ek sabse achha hai. Kuchh outputs padh kar bana ehsaas kamzor saboot hai, jaisa Chapter 2 ne dikhaya. Agla chapter dikhata hai ki kaunsa version behtar hai, yeh kaise naapein.',
  'Testing prompts: build a small test set':
    'Prompts test karna: ek chhota test set banaiye',
  'Reading a few outputs is not a reliable way to choose between prompts. You will build a ten-row test set from real inputs, score each prompt version against it, and change one thing at a time.':
    'Kuchh outputs padhna prompts ke beech chunne ka bharosemand tareeka nahi hai. Aap asli inputs se das rows ka test set banayenge, har prompt version ko us par score karenge, aur ek baar mein ek hi cheez badlenge.',
  'Change one thing at a time and measure whether it helped.':
    'Ek baar mein ek cheez badalna aur naapna ki usse madad mili ya nahi.',
  'A test set, and what it found':
    'Ek test set, aur usne kya pakda',
  'Build a test set for one real task, use it to make a decision, and keep it. You will rerun it every time the model or prompt changes.':
    'Ek asli task ka test set banaiye, usse ek decision lijiye, aur use sambhal kar rakhiye. Jab bhi model ya prompt badlega, aap ise dobara chalaayenge.',
  'Build a ten-row test set for a real task. Include two rows that should be refused, and the two messiest real inputs you can find.':
    'Ek asli task ke liye das rows ka test set banaiye. Do aisi rows rakhiye jinhe refuse hona chahiye, aur do sabse gande asli inputs jo aapko mil sakein.',
  'Score your current best prompt against it and write the number down. This is your baseline.':
    'Apne abhi ke sabse achhe prompt ko is par score kijiye aur number likh lijiye. Yeh aapki baseline hai.',
  'Make three improvements, one at a time, rescoring after each. Record all four numbers.':
    'Teen sudhaar kijiye, ek-ek karke, har baar dobara score karte hue. Chaaron numbers record kijiye.',
  'Run the whole set against a cheaper or smaller model, and record which rows fail.':
    'Poora set ek saste ya chhote model par chalaiye, aur record kijiye ki kaunsi rows fail hoti hain.',
  'Write half a page for a colleague: the prompt, its score, and the two rows it still fails.':
    'Colleague ke liye aadha page likhiye: prompt, uska score, aur woh do rows jo woh ab bhi fail karta hai.',
  'You removed something that did not help, and you know what that saves.':
    'Aapne kuchh aisa hataya jo madad nahi kar raha tha, aur aapko pata hai ki usse kitna bachta hai.',
  'You can say which rows your prompt still fails, and whether it is acceptable to ship it that way.':
    'Aap bata sakte hain ki aapka prompt ab bhi kaunsi rows fail karta hai, aur kya use aise hi ship karna theek hai.',
  'Four prompt techniques':
    'Chaar prompt techniques',
  'And four versions of one prompt, with no way yet to choose between them.':
    'Aur ek prompt ke chaar versions, jinke beech chunne ka abhi koi tareeka nahi.',
  'A confident answer is not evidence':
    'Confident jawab saboot nahi hai',
  'Fluent text is not proof of a correct answer.':
    'Fluent text sahi jawab ka saboot nahi hai.',
  'You will run one prompt many times.':
    'Aap ek prompt kai baar chalaayenge.',
  'Open a notebook called <code>chapter-2-2</code>, and bring the four prompt versions from the last chapter. You will find out which one is actually better, which may not be the one that felt better.':
    '<code>chapter-2-2</code> naam ka notebook kholiye, aur pichhle chapter ke chaar prompt versions le aaiye. Aap pata lagaayenge ki asal mein kaunsa behtar hai, jo shayad woh nahi jo behtar laga tha.',
  'Why reading a few outputs misleads you':
    'Kuchh outputs padhna aapko kyun bhatkaata hai',
  'Run one prompt five times':
    'Ek prompt paanch baar chalaiye',
  'Take your best prompt from the last chapter and run it on the <em>same input</em> five times. Print all five outputs.':
    'Pichhle chapter ka sabse achha prompt lijiye aur use <em>ek hi input</em> par paanch baar chalaiye. Paancho outputs print kijiye.',
  'The five outputs differ: different wording, sometimes a different emphasis, occasionally a different answer. If one prompt varies this much, comparing two prompts on one output each tells you very little.':
    'Paancho outputs alag hain: alag wording, kabhi alag zor, kabhi-kabhi alag jawab. Agar ek prompt itna badalta hai, to do prompts ko ek-ek output par compare karna bahut kam batata hai.',
  'Each output is one sample from a range of possible outputs. Judging a prompt from one sample is not reliable.':
    'Har output sambhavit outputs ki range ka ek sample hai. Ek sample se prompt ko parakhna bharosemand nahi hai.',
  'The fix is a small test set: a handful of real inputs, and what a good answer looks like for each. Chapter 6 builds a bigger version for retrieval. This one takes about twenty minutes.':
    'Iska fix ek chhota test set hai: kuchh asli inputs, aur har ek ke liye achha jawab kaisa dikhta hai. Chapter 6 retrieval ke liye iska bada version banata hai. Isme lagbhag bees minute lagte hain.',
  'Build a ten-row test set':
    'Das rows ka test set banaiye',
  'Collect ten real inputs for your task, including the two messiest you can find. Do not invent them. For each one, write down the two or three things a good answer must contain. You do not need the exact words.':
    'Apne task ke das asli inputs ikattha kijiye, do sabse gande samet. Unhe banaaiye mat. Har ek ke liye woh do-teen baatein likhiye jo achhe jawab mein honi hi chahiye. Exact shabdon ki zaroorat nahi.',
  'You have a ten-row table: each input, and what a good answer must contain. This table is the most useful thing you will make in this chapter. The rest of the chapter runs prompts against it.':
    'Aapke paas das rows ki table hai: har input, aur achhe jawab mein kya hona chahiye. Yeh table is chapter mein aapki banaayi sabse kaam ki cheez hai. Baaki chapter isi par prompts chalaata hai.',
  'Score all four versions':
    'Chaaron versions ko score kijiye',
  'Run each of your four prompt versions on all ten inputs. Mark each output pass or fail against what you wrote down. That is forty quick judgements by hand.':
    'Apne chaaron prompt versions ko das inputs par chalaiye. Har output ko aapke likhe ke hisaab se pass ya fail mark kijiye. Yeh haath se chaalees jaldi ke judgements hain.',
  'The ranking is often not the one you expected, and the gap between best and worst is often smaller than it felt. The versions differ most on the two refusal rows, and those are the cases people rarely demo.':
    'Ranking aksar woh nahi hoti jiski aapko ummeed thi, aur sabse achhe aur sabse bure ka farq aksar ehsaas se chhota hota hai. Versions sabse zyada do refusal rows par alag hote hain, aur yahi cases log shayad hi kabhi demo karte hain.',
  'Change one thing at a time':
    'Ek baar mein ek cheez badaliye',
  'Predict: you change the job description, add a third example and drop a prohibition, all at once. The score improves. What have you learned?':
    'Andaaza lagaiye: aap ek saath job description badalte hain, teesra example jodte hain aur ek mana-hi hataate hain. Score badh jaata hai. Aapne kya seekha?',
  'Only that the combination is better. You do not know which change helped, and one of the three may be making things worse while the other two make up for it.':
    'Sirf itna ki combination behtar hai. Aapko nahi pata ki kis badlaav ne madad ki, aur teen mein se ek cheezein bigaad bhi raha ho sakta hai jabki baaki do uski bharpaai kar rahe hon.',
  'So change one thing, rerun and record the score. It is slower, but it is the only way to know what helped. When someone says they “tuned the prompt”, ask how many things they changed at once.':
    'Isliye ek cheez badaliye, dobara chalaiye aur score record kijiye. Yeh dheema hai, lekin yahi ek tareeka hai jaanne ka ki kisse madad mili. Jab koi kahe ki unhone “prompt tune kiya”, to poochhiye ki unhone ek saath kitni cheezein badli.',
  'Make one change and rescore':
    'Ek badlaav kijiye aur dobara score kijiye',
  'Take the best version. Make exactly one change, such as swapping one example for a better one. Rerun all ten inputs and record the new score next to the old one.':
    'Sabse achha version lijiye. Theek ek badlaav kijiye, jaise ek example ko behtar se badalna. Das inputs dobara chalaiye aur naya score purane ke bagal mein record kijiye.',
  'The score moved, or it did not. Both are useful results. If a change does not move the score on ten real inputs, you can remove it, which makes the prompt cheaper on every call.':
    'Score badla, ya nahi badla. Dono kaam ke results hain. Agar das asli inputs par koi badlaav score nahi badalta, to aap use hata sakte hain, jisse prompt har call par sasta ho jaata hai.',
  'Keep the table. When your provider updates the model, rerun it. You will find out in an afternoon whether anything broke, instead of hearing it from a customer.':
    'Table sambhal kar rakhiye. Jab aapka provider model update kare, ise dobara chalaiye. Customer se sunne ki jagah aapko ek dopahar mein pata chal jaayega ki kuchh toota ya nahi.',
  'You now have a prompt chosen on evidence, and a way to recheck it whenever something changes. Many teams shipping AI features do not have this.':
    'Ab aapke paas saboot par chuna gaya prompt hai, aur kuchh bhi badalne par use dobara check karne ka tareeka. AI features ship karne wali kai teams ke paas yeh nahi hota.',
  'There is one limit. Everything so far works on text you paste into the prompt. When the answer depends on a document too big to paste, such as a policy, a contract or a handbook, none of these techniques help, because the model never sees the document. Chapter 3 starts on that problem.':
    'Ek seema hai. Ab tak sab kuchh us text par chalta hai jo aap prompt mein paste karte hain. Jab jawab kisi aise document par nirbhar ho jo paste karne ke liye bahut bada ho, jaise policy, contract ya handbook, to in mein se koi technique madad nahi karti, kyunki model ne document kabhi dekha hi nahi. Chapter 3 is problem par kaam shuru karta hai.'

});
