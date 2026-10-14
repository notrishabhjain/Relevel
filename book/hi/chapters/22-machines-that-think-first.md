---
title: Pehle Sochne Wali Machines
summary: Jo model jawaab dene se pehle uska hisaab khud likh leta hai, woh mushkil cases sahi karta hai, lekin uske liye 11 second leta hai. Is chapter mein reasoning models, thinking ki cost, latency, streaming, aur ek aisa design hai jisme mehnga judgement kabhi kisi customer ko intezaar nahi karwata.
course: ch11 ch115
goals:
  - bata paana ki reasoning model kya karta hai aur kin kaamon mein madad karta hai
  - reasoning se milne wali extra accuracy ko uski cost ke saath tolna, paise mein bhi aur intezaar mein bhi
  - latency kya hai yeh samjhana, aur intezaar ko aasaan banane ke teen tareeke batana
  - samjha paana ki decision ko stream kyun nahi kar sakte, aur aisa path design kar paana jisme dhyaan se kiya gaya judgement critical route se bahar ho
terms:
  - reasoning model | aisa model jo jawaab dene se pehle apna working likhta hai, ek tareeka try karta hai, use check karta hai, aur phir answer deta hai; us working ke paise aap har request par dete hain, aur intezaar bhi karte hain | reasoning models
  - latency | poochhne aur jawaab milne ke beech ka time, jise user speed ki tarah mehsoos karta hai | 
  - streaming | jawaab ko screen par tukdon mein bhejna, jaise-jaise woh likha ja raha hai, poora hone ka intezaar kiye bina | stream, streams
---

May ke ant mein Anaya company ke bankers ke saath meeting se train mein laut rahi thi. Chhe bajkar das minute par train Lonavala ke paas ruk gayi, aur 40 minute tak rukhi rahi. Kisi ne kuch nahi bataya. Saade chhe baje ek awaaz aayi ki aage signal kharab ho gaya hai, aur train 10 se 15 minute mein chalegi.

Khabar achhi nahi thi. 40 minute pehle hi chale gaye the aur aur lagne wale the. Phir bhi poora dabba saaf taur par halka ho gaya. Intezaar chhota nahi hua tha. Bas use ek shape mil gayi thi.

Woh abhi bhi isi baare mein soch rahi thi jab Imran Qureshi ka phone aaya. Woh answer key ke sabse mushkil sentences par ek experiment ka result batana chahta tha. Is chapter mein aap dekhenge ki usne kya paaya, aur train ka usse kya lena-dena tha.

## Case: 11 second

Ek mahine se Imran un sentences ko dekh raha tha jinhe sasta model baar-baar galat karta tha. Ek Aadhaar number tha jo words mein bola gaya tha, aur woh 12 digits jo shayad order number the. Aur ek sentence tha jo kisi number ke bina bhi ek insaan ko pehchaan deta tha.

Us din usne unhe ek alag kism ke model par try kiya, jo jawaab dene se pehle apna working likhta hai. Woh ek tareeka try karta hai, use check karta hai, zaroorat padne par peeche hat jaata hai, aur tab jaakar reply deta hai. Yeh working aam taur par user se chhupa rehta hai, lekin uske paise lagte hain.

Aise model ko *reasoning model* kehte hain. Yeh isliye zaroori hai: accuracy ka tay hona ki model banate waqt hi ho gayi, aisa zaroori nahi. Aap har sawaal ke liye aur accuracy kharid sakte hain, machine ko zyada der kaam karne dekar.

## Sochne ki cost

Imran ne phone par results padhe.

Table: Wahi 30 mushkil aur 30 aasaan cases, reasoning ke saath aur uske bina
| | Ordinary model | Reasoning model |
| --- | --- | --- |
| Mushkil cases sahi (30 mein se) | 19 | 26 |
| Aasaan cases sahi (30 mein se) | 30 | 30 |
| Har case ka time | lagbhag 1.25 second | lagbhag 11 second |
| Har case ki relative cost | 1 | lagbhag 6, kyunki chhupa hua working bhi baaki output ki tarah charge hota hai |

Mushkil cases mein reasoning se bada sudhaar aaya. Aasaan cases mein usse kuch nahi mila, aur cost 6 guna lagi.

Us shaam Anaya ne apne train ticket ke peeche likha ki usne kya samjha. Reasoning ek aisi khareedari hai jo aap har request par karte hain, aur uski keemat paise aur time dono mein dete hain. Bahut se kaamon mein usse kuch nahi milta.

Woh tab kaam aati hai jab jawaab ko nikaalna padta hai. Jaise aise steps jo ek doosre par tike hon, hisaab, plans, code, aur asli ambiguity jise suljhana ho. Woh tab bekaar hai jab jawaab pehle se input mein maujood hai aur use bas dhoondhna ya naye roop mein rakhna hai. Isme aata hai kuch dhoondhna, ek field nikaalna, kisi category mein daalna, formatting, aur aapke diye hue passage ka summary banana. Words mein bole gaye 12 digits ko nikaalna padta tha. Mobile number aur email wala aam message ko nahi.

Imran ne ek message mein teen savdhaaniyan bheji.

Table: Reasoning models ke baare mein teen savdhaaniyan
| Savdhaani | Samjhaana |
| --- | --- |
| Reasoning se evidence nahi banta | Galat document dene par model dhyaan se aur der tak us galat document se reasoning karta hai. Woh sasta model se zyada qaayal karne wala galat jawaab deta hai |
| Intezaar product ki problem hai | User ko slow jawaab mehsoos hota hai, chahe uski wajah kuch bhi ho |
| Yeh all-or-nothing nahi hai | Zyadatar providers developer ko choose karne dete hain ki kitni reasoning chahiye. Isliye har type ki request ke liye alag tay kar sakte hain, poore product ke liye ek baar nahi |

## Woh decision jo ruk nahi sakta

Train Pune pahunchte-pahunchte problem ki shape ban chuki thi. Saturday subah Anaya ne use Imran ke saamne rakha.

Guard darwaaze par baitha hai. Customer message type karta hai, guard use dekhta hai, aur tabhi message aage jaata hai. Agar guard 11 second leta, toh customer har reply ke liye 11 second intezaar karta. Requirement yeh thi ki guard teen mein se ek second se zyada na jodey.

Poochhne aur jawaab milne ke beech ke time ko *latency* kehte hain. Product ki lagbhag har cheez mein se user ise sabse tez mehsoos karta hai. Anaya ne ek doosri mushkil bhi dekhi. Guard ka output customer ko tukdon mein dikhaya nahi ja sakta tha.

## Intezaar ko aasaan banane ke tareeke

Response kitni tez lagti hai, yeh zyadatar is par tikta hai ki kuch pehli baar screen par kab dikhta hai. Imran ne intezaar aasaan banane ke teen tareeke ginaye. Train ne doosra tareeka bina socche istemaal kiya tha.

Table: Intezaar ko aasaan banane ke teen tareeke
| Tareeka | Kya karta hai | Comment |
| --- | --- | --- |
| Jaldi shuru karna | Jawaab ko likhte-likhte, kuch words ke tukdon mein screen par bhejna. Yeh *streaming* hai | Poora jawaab utna hi time leta hai, lekin customer pehle second se padhna shuru kar deta hai. Isme kuch kharch nahi hota aur yeh sabse zyada madad karta hai |
| Batana ki kya ho raha hai | Spinner ki jagah kaam likhna, jaise "Reading six documents" | Jo intezaar kisi dikhte hue kaam se jud jaata hai, woh samajh mein aata hai. Train mein yahi announcement thi |
| Intezaar ko kahin aur le jaana | Lambe kaam ko background mein chalana aur khatam hone par insaan ko batana | Teams isse bachti hain kyunki yeh haar maanne jaisa lagta hai. Lagbhag 10 second se zyada ke kaam ke liye aksar yahi sahi hai, kyunki isse problem hi hat jaati hai |

Guard ke liye kaun sa tareeka theek hai, yeh ek sawaal par tikta hai. Kya adhoora jawaab kaam ka hai? Insaan ek explanation ka pehla sentence padhna shuru kar sakta hai. Decision alag hota hai: ise chhupao, ya mat chhupao. Decision ka aadha hissa ek khatra hai, aur jis field ka likhna poora nahi hua, uspar koi action nahi lena chahiye.

::: key Adhoora output tabhi dikhaiye jab woh final ho
Isiliye schema pehle aana tha. Reply ka ek hissa dikhana tabhi safe hai jab jo hissa aap dekh rahe hain woh pehle se final ho. Isliye guard apna jawaab stream nahi kar sakta. Chat use istemaal kar sake, us se pehle woh poora ho jaana chahiye.
:::

## Kaun sa case kahan jaayega

Team ne poori dopahar us design par lagayi jo isse nikla. Isme woh sab kuch tha jo unhone us mahine seekha tha.

Tez hisse har message par live chalenge: pattern checker aur name-and-place finder. Dono milkar zyadatar messages ko second ke ek chhote se hisse mein sambhal lete the. Jin gine-chune messages par woh faisla nahi kar paate, unke liye guard dheemi, dhyaan se sochne wali judge ka intezaar nahi karega. Woh sasti galti ki taraf jhukega, jaisa team ne April mein tay kiya tha, aur shak wale hisse ko turant mask kar dega taaki chat surakshit tarike se aage badh sake.

Reasoning model in cases ko baad mein, background mein dekhega, aur tay karega ki asal mein kya hona chahiye tha. Agar masked hissa harmless nikla, toh koi insaan use wapas dikhwa sakta hai. Agar woh leak nikla, toh woh pehle se dhaka hua hai.

Imran ne PRD ke margin mein rule likha: reasoning sirf unsure kuch cases ke liye, aur kabhi nahi jab customer intezaar kar raha ho. Team ko pata chal jaayega ki design galat hai, agar sasta path un cases par utna hi score kare. Ya agar kabhi dhyaan wala path reply bhejne se pehle poora hona pade.

Dono mein se kisi ne woh sawaal nahi uthaya jo dono ko pareshaan kar raha tha. Dhyaan se sochne wali judge kahan chalegi? Jo sentence woh padhegi, agar woh mushkil wale sentences mein se ek hua, toh usme wahi cheez ho sakti hai jise chhupane ke liye guard bana hai. Kya use building ke bahar jaane diya ja sakta hai, ya use andar hi rehna padega? Yeh sawaal kisi aur din ka tha, aur lagbhag Lakshmi ka bhi.

## Summary

Reasoning model jawaab dene se pehle apna working likhta hai. Woh un problems mein behtar hai jinhe nikaalna padta hai. Jo cheez di gayi hai use dhoondhne, sort karne ya naye roop mein rakhne mein woh behtar nahi hai. Uske working ke paise aur time dono har request par lagte hain.

- Woh evidence nahi banata. Galat document milne par woh dhyaan se, galat document se hi reasoning karta hai.
- Latency user ko mehsoos hoti hai. Streaming jawaab jaldi dikhata hai, kya ho raha hai yeh batane se intezaar samajh mein aata hai, aur lamba kaam background mein jaa sakta hai.
- Decision ko stream nahi kar sakte, kyunki decision ka aadha hissa ek khatra hai.
- Samajhdaar design mehnge machine ko sirf unhi cases par lagata hai jinhe uski zaroorat hai, aur kabhi tab nahi jab customer intezaar kar raha ho.

Agle chapter mein aap search par wapas jaayenge aur dekhenge ki use behtar kaise banate hain, aur kaun sa sudhaar sach mein result ka vaada kar sakta hai.
