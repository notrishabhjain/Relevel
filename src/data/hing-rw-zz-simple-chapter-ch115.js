/* Hinglish for Latency: designing for the wait (chapter:ch115), in simple words.
   Written by tools/sheet.mjs apply; keyed on the English line. Loads last, so it wins. */
Object.assign(window.HING = window.HING || {}, {
  'The same number of seconds can feel quick or feel broken. It depends on what the screen shows. Think of waiting for chai: you wait happily if the chai-wala says “two minutes”. You will time a request. You will stream it (show words as they come). Then you will choose between streaming, progress messages and background work.':
    'Seconds wahi hote hain, phir bhi wait tez lag sakta hai ya kharab. Yeh is par depend karta hai ki screen par kya dikhta hai. Chai ka intezaar socchiye: chai-wala “do minute” bol de toh aap araam se rukte hain. Aap ek request ko time karenge. Use stream karenge (shabd aate hi dikhana). Phir chunenge ki streaming, progress messages aur background work mein se kab kya kaam aata hai.',
  'Explain why streaming makes a reply feel faster without making it faster.':
    'Samjha paana ki streaming reply ko tez feel karwati hai, jabki reply asal mein utna hi tez rehta hai.',
  'For one feature, choose what to show during a wait. Say what it costs if you choose wrong.':
    'Ek feature ke liye chun paana ki wait ke dauran kya dikhana hai. Aur galat chunne par kya keemat chukani padti hai, yeh bata paana.',
  'Name one wait in your product that you cannot shorten, and say what you would do instead.':
    'Apne product ka ek aisa wait bata paana jise aap chhota nahi kar sakte, aur uski jagah aap kya karenge.',
  'Design the wait for a live chat':
    'Live chat ke liye wait design kijiye',
  'In a live chat, a person types and expects a reply at once. If the privacy check makes them wait too long, the website will switch the tool off. You learned that streaming makes an answer feel faster, not be faster. You also learned that some waits cannot be shortened. Now you will measure the real delay. Then you will design what the person sees while they wait.':
    'Live chat mein insaan type karta hai aur turant reply chahta hai. Agar privacy check use bahut der rokta hai, toh website tool band kar degi. Aapne seekha ki streaming se jawaab tez feel hota hai, tez hota nahi. Yeh bhi seekha ki kuch waits chhote nahi ho sakte. Ab aap asli delay naapenge. Phir design karenge ki wait ke dauran insaan ko kya dikhega.',
  'Use your notebook for this chapter to time the twenty requests. Write the speed rule in the notes box below. Short version for the route, about 20 minutes: steps 1, 2 and 4.':
    'Bees requests ko time karne ke liye is chapter ka notebook use kijiye. Speed rule neeche notes box mein likhiye. Route ke liye chhota version, lagbhag 20 minute: step 1, 2 aur 4.',
  'Time twenty requests through your pipeline (the chain of steps from message to answer). Use rows from your answer key. Write down the median time (the middle one) and the slowest one.':
    'Apni pipeline se bees requests time kijiye (message se answer tak ke steps ki zanjeer). Apne answer key ki rows use kijiye. Median time (beech wala) aur sabse slow wala likhiye.',
  'Split the time into parts. For example: the pattern checker, the call to the model, and writing the cleaned text. Mark which parts you could make shorter.':
    'Time ko hisson mein baantiye. Jaise: pattern checker, model ko call, aur cleaned text likhna. Mark kijiye ki kaun se hisse aap chhote kar sakte hain.',
  'Decide if a half-finished answer is useful here. If yes, the cleaned text can show as it arrives (streaming). If no, run the check in the background. Write down your reason.':
    'Tay kijiye ki yahan adhoora jawaab kaam ka hai ya nahi. Agar haan, toh cleaned text aate hue dikh sakta hai (streaming). Agar nahi, toh check background mein chalaiye. Apni wajah likhiye.',
  'Write exactly what the screen shows after one second, after three seconds and after ten seconds. Write the real words, not a description of them.':
    'Bilkul sahi likhiye ki ek second, teen seconds aur das seconds ke baad screen par kya dikhta hai. Asli words likhiye, unka description nahi.',
  'Write what happens in the slowest case, and what the person can do about it.':
    'Likhiye ki sabse slow case mein kya hota hai, aur insaan uske baare mein kya kar sakta hai.',
  'Write the rule. How many milliseconds (thousandths of a second) can the check take? Past that, the person stops waiting, and the check must move to the background.':
    'Rule likhiye. Check kitne milliseconds (second ka hazaarwan hissa) le sakta hai? Uske baad insaan wait karna band kar deta hai, aur check ko background mein jaana padta hai.',
  'The median and the slowest of twenty timed requests.':
    'Bees timed requests ka median aur sabse slow wala.',
  'The time split into parts, with the parts you could shorten marked.':
    'Time hisson mein baata hua, jin hisson ko chhota kiya ja sakta hai woh mark kiye hue.',
  'The exact words shown at one, three and ten seconds.':
    'Ek, teen aur das seconds par dikhne wale exact words.',
  'Your speed rule, as a number.':
    'Aapka speed rule, ek number ke roop mein.',
  'Thinking is something you buy':
    'Sochna ek kharidari hai',
  'You measured what it costs in money and in seconds.':
    'Aapne naapa tha ki isme paise aur seconds kitne lagte hain.',
  'A schema (a form with fixed boxes) fixes the shape of a reply':
    'Schema (fixed khaanon wala form) reply ka roop tay kar deta hai',
  'That is what makes a half-finished reply safe to show.':
    'Isi wajah se adhoora reply dikhana safe hota hai.',
  'Use the feature whose cost you worked out in Chapter 11. You will time the same call twice, without making it any faster. To watch the first words arrive, open the <a href="#/playground">Playground</a> and tick <em>Stream the answer</em>. It shows when they came.':
    'Wahi feature use kijiye jiski cost aapne Chapter 11 mein nikaali thi. Aap ek hi call ko do baar time karenge, use tez kiye bina. Pehle words aate hue dekhne ke liye <a href="#/playground">Playground</a> kholiye aur <em>Stream the answer</em> tick kijiye. Woh dikhata hai ki words kab aaye.',
  'Last chapter you measured what thinking costs, in money and in seconds. But a person sits on the other side of the screen. They wait while all this happens. This chapter is about that person. The same wait can feel quick or feel broken. It depends on what you show them.':
    'Pichhle chapter mein aapne naapa ki sochne mein paise aur seconds kitne lagte hain. Lekin screen ke doosri taraf ek insaan baitha hai. Yeh sab hote waqt woh intezaar karta hai. Yeh chapter us insaan ke baare mein hai. Wahi wait tez lag sakta hai ya kharab. Yeh is par depend karta hai ki aap use kya dikhate hain.',
  'Streaming changes how fast it feels':
    'Streaming se wait ka feel badal jaata hai',
  'Think of a WhatsApp chat. When you see “typing…”, you wait happily. When you see nothing, you wonder if your message even went. The wait is the same, but it feels very different.':
    'WhatsApp ki chat yaad kijiye. Jab “typing…” dikhta hai, aap araam se wait karte hain. Jab kuch nahi dikhta, aap sochne lagte hain ki message gaya bhi ya nahi. Wait wahi hai, lekin feel bilkul alag hai.',
  'A model can work the same way. It does not have to send the whole answer at the end. It can send a few words at a time, as it writes. This is called <strong>streaming</strong>. It is like the chai-wala telling you “two minutes” while he makes it. Let’s measure what it changes.':
    'Model bhi aise kaam kar sakta hai. Use poora jawaab ant mein ek saath bhejna zaroori nahi. Woh likhte-likhte, kuch words ek baar mein bhej sakta hai. Isko <strong>streaming</strong> kehte hain. Jaise chai-wala chai banate hue aapko “do minute” bolta rehta hai. Chaliye naapte hain ki isse kya badalta hai.',
  'Time a request, then stream it':
    'Ek request ko time kijiye, phir use stream kijiye',
  'Run one realistic request. Time it from start to finish. Then run the same request with streaming. This time, time when the <em>first</em> characters arrive.':
    'Ek asli jaisi request chalaiye. Shuru se end tak ka time naapiye. Phir wahi request streaming ke saath chalaiye. Is baar naapiye ki <em>pehle</em> characters kab aate hain.',
  'The total time is the same, or a little longer. But the first words arrive in a tiny part of that time. Nothing got faster, yet it feels very different. The user can see that something is happening.':
    'Total time wahi rehta hai, ya thoda zyada. Lekin pehle words uske ek chhote se hisse mein aa jaate hain. Kuch tez nahi hua, phir bhi feel bahut alag hai. User dekh sakta hai ki kuch ho raha hai.',
  'Your provider or model does not stream':
    'Aapka provider ya model stream nahi karta',
  'Some providers, and some thinking modes, send back only the finished answer. That is a finding in itself. It means this feature cannot use the cheapest trick for making a wait feel shorter. The rest of the chapter shows what to do instead.':
    'Kuch providers, aur kuch sochne wale modes, sirf poora taiyaar jawaab bhejte hain. Yeh apne aap mein ek finding hai. Matlab is feature mein wait chhota feel karwane ka sabse sasta tareeka kaam nahi karega. Chapter ka baaki hissa batata hai ki uski jagah kya karna hai.',
  'So what did you just see? The speed of the answer did not change, but the wait did.':
    'Toh aapne abhi kya dekha? Jawaab ki speed nahi badli, lekin wait badal gaya.',
  'How fast a reply feels depends mostly on when something first shows up. Most wins in a wait come at the start.':
    'Reply kitna tez lagta hai, yeh zyadatar is par depend karta hai ki kuch pehli baar kab dikhta hai. Wait mein zyadatar jeet shuruaat mein hi milti hai.',
  'Three ways to handle a wait':
    'Wait sambhalne ke teen tareeke',
  'Streaming is one way to handle a wait. It is not the only way. You really have three choices, from the cheapest to the boldest.':
    'Streaming wait sambhalne ka ek tareeka hai. Yeh akela nahi hai. Asal mein aapke paas teen choices hain, sabse sasti se sabse bold tak.',
  '<strong>Start early.</strong> Stream the answer. Or, for a job with many steps, show each step as soon as it finishes. This costs nothing, and it helps the most.':
    '<strong>Jaldi shuru kijiye.</strong> Jawaab ko stream kijiye. Ya kai steps wale job mein har step khatam hote hi dikha dijiye. Isme kuch cost nahi lagta, aur sabse zyada fayda yahi deta hai.',
  '<strong>Say what is happening.</strong> Show the real step instead of a spinner (the little wheel that just goes round). A line like “Reading 6 documents” tells the user the wait fits the job.':
    '<strong>Batayiye ki kya ho raha hai.</strong> Spinner (woh chhota ghoomta pahiya) ki jagah asli step dikhaiye. “Reading 6 documents” jaisi line user ko batati hai ki wait kaam ke hisaab se hai.',
  '<strong>Move the wait somewhere else.</strong> If the job is really long, stop treating it like a chat. Run it in the background (out of sight), and tell the user when it is done. It is like a tailor saying “come back on Friday”.':
    '<strong>Wait ko kahin aur le jaaiye.</strong> Agar job sach mein bahut lambi hai, toh use chat jaisa maanna band kijiye. Use background mein chalaiye (nazar se door), aur khatam hone par user ko bataiye. Jaise darzi bole “shukravar ko aana”.',
  'Teams often skip the third choice because it feels like giving up. But for anything over about ten seconds, it is usually the right choice. It removes the problem instead of hiding it.':
    'Teams aksar teesri choice chhod deti hain, kyunki lagta hai jaise haar maan li. Lekin lagbhag 10 seconds se zyada ke kaam ke liye aksar yahi sahi choice hai. Yeh problem ko chhupane ki jagah khatam kar deta hai.',
  'Let’s look closely at the second choice, because people undervalue it.':
    'Doosri choice ko dhyaan se dekhte hain, kyunki log use kam aankte hain.',
  'Compare a spinner with a progress message':
    'Spinner aur progress message ka comparison kijiye',
  'Run your slowest realistic request. Watch a clock while it runs. Now picture two screens. One has a spinner. The other has the words <em>reading 6 documents · comparing against policy</em> and a step counter.':
    'Apni sabse slow asli jaisi request chalaiye. Chalte waqt ghadi dekhiye. Ab do screens socchiye. Ek par spinner hai. Doosri par yeh words hain: <em>reading 6 documents · comparing against policy</em>, aur ek step counter.',
  'The wait is the same on both. With the spinner, the user cannot tell a slow answer from a broken one. So at eight seconds they reload. That cancels the call and starts it again. With the progress message, they can see the work going on, and about how far it has got.':
    'Dono par wait same hai. Spinner ke saath user slow jawaab aur kharab jawaab mein farq nahi bata sakta. Isliye aath seconds par woh reload kar deta hai. Isse call cancel ho jaati hai aur dobara shuru ho jaati hai. Progress message ke saath woh kaam chalta dekh sakta hai, aur lagbhag kitna aage badha hai.',
  'A plain spinner teaches users to reload. Every reload is a call you pay for twice.':
    'Sirf spinner users ko reload karna sikha deta hai. Har reload ek aisi call hai jiska paisa aap do baar dete hain.',
  'Stream or run in the background?':
    'Stream kijiye ya background mein chalaiye?',
  'Now a harder choice. Streaming and background work both help, but they suit different features. How do you pick? Try it on a case with a nine-second wait.':
    'Ab ek mushkil choice. Streaming aur background, dono madad karte hain, lekin alag-alag features ke liye. Aap kaise chunenge? 9 seconds ke wait wale ek case par try kijiye.',
  'What you would change':
    'Aap kya badlenge',
  'Your feature takes nine seconds and cannot be made faster. You can stream the answer. Or you can run it in the background and tell the user later. Which one will you pick, and what does it depend on?':
    'Aapka feature 9 seconds leta hai aur use tez nahi kiya ja sakta. Aap jawaab stream kar sakte hain. Ya use background mein chalakar user ko baad mein bata sakte hain. Aap kaun sa chunenge, aur yeh kis par depend karta hai?',
  'It depends on whether a half-finished answer is useful. Say the first sentence lets the person start work, as with a draft, an explanation or a summary. Then stream it. Say the answer helps only when it is complete, as with a decision, a routed ticket or a filled form. Then streaming shows a half-answer that the person must not act on. Use the background.':
    'Yeh is par depend karta hai ki adhoora jawaab kaam ka hai ya nahi. Maan lijiye pehla sentence padhte hi insaan kaam shuru kar sakta hai, jaise draft, explanation ya summary mein. Tab stream kijiye. Maan lijiye jawaab tabhi kaam ka hai jab poora ho, jaise decision, routed ticket ya bhara hua form. Tab streaming ek adhoora jawaab dikhayegi jis par insaan ko action nahi lena chahiye. Background use kijiye.',
  'This is why the schema chapter comes first. A half-finished reply is safe to show only when the part you can see is already final. A <em>decision</em> field shown half-way is a danger, not a decision.':
    'Isi wajah se schema wala chapter pehle aata hai. Adhoora reply dikhana tabhi safe hai jab jo hissa dikh raha hai woh pehle se final ho. Aadha dikha hua <em>decision</em> field ek khatra hai, decision nahi.',
  'Nothing in this chapter made anything faster. It only changed whether nine seconds is acceptable, and that is what your users really care about. Start early. Say what is happening. Move the wait away when it is long. And if a half-finished answer is not safe to act on, do not stream it.':
    'Is chapter ki kisi cheez ne kuch tez nahi kiya. Unhone sirf yeh badla ki 9 seconds ka wait chalega ya nahi, aur aapke users ko asal mein isi ki parwah hai. Jaldi shuru kijiye. Batayiye ki kya ho raha hai. Wait lamba ho toh use door le jaaiye. Aur agar adhoore jawaab par action lena safe nahi, toh use stream mat kijiye.',
  'Next we go back to the quality of what the model finds. In Chapter 12 you will improve your retrieval (finding the right page) step by step. You will check each improvement against the same answer key.':
    'Ab hum wapas is par aate hain ki model jo dhoondhta hai, uski quality kaisi hai. Chapter 12 mein aap apni retrieval (sahi page dhoondhna) ko step by step behtar karenge. Har sudhaar ko usi answer key se jaanchenge.',
});
