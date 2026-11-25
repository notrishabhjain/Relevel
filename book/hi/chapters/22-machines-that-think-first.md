---
title: Pehle Sochne Wali Machines
summary: Kuch models jawaab dene se pehle kachche kaagaz par hisaab lagate hain. Woh mushkil cases sahi karte hain, lekin 11 second lete hain. Is chapter mein reasoning models, sochne ki cost, latency, streaming, aur ek aisa design hai jisme mehnga, dhyaan se judge karne wala kabhi customer ko intezaar nahi karwata.
course: ch11 ch115
goals:
  - bata paana ki reasoning model kya karta hai aur kin kaamon mein madad karta hai
  - reasoning se milne wali extra accuracy ko uski cost ke saath tolna, paise mein bhi aur intezaar mein bhi
  - latency kya hai yeh batana, aur intezaar ko aasaan banane ke teen tareeke batana
  - samjhana ki decision ko stream kyun nahi kar sakte, aur dhyaan se judge karne ka kaam main route se bahar rakhna
terms:
  - reasoning model | ek aise student jaisa jo final jawaab likhne se pehle kachche kaagaz par hisaab lagata hai; model ek tareeka try karta hai, use check karta hai, phir reply deta hai, aur us kachche kaam ke paise aap har request par dete hain, paise mein bhi aur intezaar mein bhi | reasoning models
  - latency | intezaar ka time, jaise chai order karke chai ka intezaar; poochhne aur jawaab milne ke beech ka gap, jise user speed ki tarah mehsoos karta hai | 
  - streaming | chai-wala jaise kaam karte hue "do minute" bol deta hai; jawaab likhte-likhte screen par thode-thode words mein aata hai, sab ek saath ant mein nahi | stream, streams
---

May ke ant mein Anaya company ke bankers ke saath meeting se train mein ghar laut rahi thi. Chhe bajkar das minute par train Lonavala ke paas ruk gayi. Woh 40 minute tak rukhi rahi. Kisi ne kuch nahi bataya. Saade chhe baje ek awaaz aayi ki aage signal kharab ho gaya hai. Train 10 se 15 minute mein chalegi.

Khabar achhi nahi thi. 40 minute chale gaye the, aur aur lagne wale the. Phir bhi poora dabba halka ho gaya. Intezaar chhota nahi hua tha. Par ab use ek shape mil gayi thi.

Woh abhi bhi isi baare mein soch rahi thi, tabhi Imran Qureshi ka phone aaya. Usne answer key (jawaab-sahit sawaalon ki list) ke sabse mushkil sentences par ek experiment kiya tha. Aap dekhenge ki usne kya paaya. Aap yeh bhi dekhenge ki train ka usse kya lena-dena tha.

## Case: 11 second

Ek mahine se Imran un sentences ko dekh raha tha jinhe sasta model baar-baar galat karta tha. Ek Aadhaar number tha jo words mein bola gaya tha. Ek 12 digits ka set tha jo shayad order number tha. Ek sentence tha jo kisi number ke bina bhi ek insaan ki taraf ishaara karta tha.

Us din usne unhe ek alag kism ke model par try kiya. Woh ek aise student jaisa hai jo final jawaab likhne se pehle kachche kaagaz par hisaab lagata hai. Model ek tareeka try karta hai. Use check karta hai. Zaroorat ho toh peeche hat jaata hai. Tab jaakar reply deta hai. Yeh kachcha kaagaz aam taur par user se chhupa rehta hai. Lekin uske paise lagte hain.

Aise model ko *reasoning model* kehte hain. Yeh isliye zaroori hai. Model ki accuracy (woh kitni baar sahi hota hai) model banate waqt hi tay nahi ho jaati. Aap har sawaal ke liye aur accuracy kharid sakte hain. Bas machine ko zyada der kaam karne dijiye.

## Sochne ki cost

Imran ne phone par results padhe.

Table: Wahi 30 mushkil aur 30 aasaan cases, reasoning ke saath aur uske bina
| | Ordinary model | Reasoning model |
| --- | --- | --- |
| Mushkil cases sahi (30 mein se) | 19 | 26 |
| Aasaan cases sahi (30 mein se) | 30 | 30 |
| Har case ka time | lagbhag 1.25 second | lagbhag 11 second |
| Har case ki relative cost | 1 | lagbhag 6, kyunki chhupa hua working bhi baaki output ki tarah charge hota hai |

Mushkil cases mein reasoning se bahut madad mili. Aasaan cases mein kuch nahi mila. Cost 6 guna lagi.

Us shaam Anaya ne train ticket ke peeche likha ki usne kya seekha. Reasoning har trip par taxi ka kiraya dene jaisa hai. Har baar paise bhi lagte hain aur time bhi. Bahut se kaamon mein usse kuch nahi milta.

Woh tab kaam aati hai jab jawaab ko nikaalna padta hai. Sochiye: ek doosre par tike steps, hisaab, plans, code, ya asli paheli jise suljhana ho. Woh tab bekaar hai jab jawaab pehle se input mein hai. Tab model ko bas use dhoondhna hai ya uska roop badalna hai.

Isme aata hai kuch dhoondhna, ek field (jaankari ka ek naam wala tukda) nikaalna, kisi group mein daalna, aur format theek karna. Aapke diye passage ka summary banana bhi isi mein aata hai. Words mein bole gaye 12 digits ko nikaalna padta tha. Mobile number aur email wale seedhe message ko nahi.

Imran ne ek message mein teen savdhaaniyan bheji.

Table: Reasoning models ke baare mein teen savdhaaniyan
| Savdhaani | Samjhaana |
| --- | --- |
| Reasoning se evidence nahi banta | Galat document dene par model us galat document ke baare mein der tak aur dhyaan se sochta hai. Woh sasta model se zyada qaayal karne wala galat jawaab deta hai |
| Intezaar product ki problem hai | User ko slow jawaab mehsoos hota hai, chahe wajah kuch bhi ho |
| Yeh all-or-nothing nahi hai | Zyadatar providers (model bechne wali companies) developer ko choose karne dete hain ki kitni reasoning chahiye. Isliye har tarah ki request ke liye alag tay kar sakte hain, poore product ke liye ek baar nahi |

## Woh decision jo ruk nahi sakta

Train Pune pahunchi, aur problem ki shape ban chuki thi. Saturday subah Anaya ne use Imran ke saamne rakha.

Guard dukaan ke darwaaze par baitha hai. Customer message type karta hai. Guard use check karta hai. Tabhi message aage jaata hai. Agar guard 11 second leta, toh customer har reply ke liye 11 second intezaar karta. Rule yeh tha ki guard zyada se zyada ek second ka teesra hissa jod sakta hai.

Poochhne aur jawaab milne ke beech ke intezaar ko *latency* kehte hain. Yeh chai order karke chai ka intezaar karne jaisa hai. User ise product ki lagbhag har cheez se zyada mehsoos karta hai. Anaya ne ek doosri mushkil bhi dekhi. Guard ka jawaab customer ko tukdon mein dikhaya nahi ja sakta tha.

## Intezaar ko aasaan banane ke tareeke

Reply kitni tez lagti hai, yeh zyadatar is par tikta hai ki kuch pehli baar screen par kab dikhta hai. Imran ne intezaar aasaan banane ke teen tareeke ginaye. Train ne doosra tareeka anjaane mein istemaal kiya tha.

Table: Intezaar ko aasaan banane ke teen tareeke
| Tareeka | Kya karta hai | Comment |
| --- | --- | --- |
| Jaldi shuru karna | Jawaab ko likhte-likhte, kuch words ke tukdon mein screen par bhejna. Yeh *streaming* hai | Poora jawaab utna hi time leta hai, lekin customer pehle second se padhna shuru kar deta hai. Isme kuch kharch nahi hota aur yeh sabse zyada madad karta hai |
| Batana ki kya ho raha hai | Spinner ki jagah kaam likhna, jaise "Reading six documents" | Jo intezaar kisi dikhte hue kaam se jud jaata hai, woh samajh mein aata hai. Train mein yahi announcement thi |
| Intezaar ko kahin aur le jaana | Lambe kaam ko background mein chalana aur khatam hone par insaan ko batana | Teams isse bachti hain kyunki yeh haar maanne jaisa lagta hai. Lagbhag 10 second se zyada ke kaam ke liye aksar yahi sahi hai, kyunki isse problem hi hat jaati hai |

Chai-wala ko sochiye. Woh "do minute" kehta hai aur chai daalna shuru kar deta hai. Yahi streaming hai. Guard ke liye kaun sa tareeka theek hai? Yeh ek sawaal par tikta hai. Kya aadha jawaab kaam ka hai?

Insaan explanation ka pehla sentence padhna shuru kar sakta hai. Decision alag hota hai. Woh kehta hai: chhupao, ya mat chhupao. Decision ka aadha hissa ek khatra hai. Jis field ka likhna abhi poora nahi hua, uspar koi action nahi lena chahiye.

::: key Hissa tabhi dikhaiye jab woh final ho
Isiliye schema (fixed khaanon wala form) pehle aana tha. Reply ka ek hissa dikhana tabhi safe hai jab woh hissa pehle se final ho. Isliye guard apna jawaab stream nahi kar sakta. Chat use istemaal kar sake, us se pehle woh poora ho jaana chahiye.
:::

## Kaun sa case kahan jaayega

Team ne poori dopahar us design par lagayi jo isse nikla. Isme woh sab tha jo unhone us mahine seekha tha.

Tez hisse har message par live chalte hain. Yeh hain pattern checker aur name-and-place finder. Dono milkar zyadatar messages ko second ke ek chhote se hisse mein sambhal lete hain.

Kuch messages saaf nahi hote. Inke liye guard dheemi, dhyaan se judge karne wali ka intezaar nahi karta. Woh sasti galti ki taraf jhukta hai, jaisa team ne April mein tay kiya tha. Woh shak wale hisse ko turant mask kar deta hai (dhak deta hai). Isse chat surakshit tarike se aage badhti hai.

Reasoning model in cases ko baad mein, background mein dekhta hai. Woh tay karta hai ki asal mein kya hona chahiye tha. Agar masked hissa harmless tha, toh koi insaan use wapas dikhwa sakta hai. Agar woh leak tha, toh woh pehle se dhaka hua hai.

Imran ne PRD (product ka recipe card) ke margin mein rule likha. Reasoning sirf unsure kuch cases ke liye hai, aur kabhi nahi jab customer intezaar kar raha ho. Team ko do haalaton mein pata chal jaata ki design galat hai. Ek: sasta path un cases par utna hi score karta. Doosra: dhyaan wale path ko reply bhejne se pehle poora karna padta.

Dono mein se kisi ne woh sawaal nahi bola jo dono ko pareshaan kar raha tha. Dhyaan se judge karne wala kahan chalega? Maan lijiye jo sentence woh padhta hai, woh mushkil wale sentences mein se ek hai. Usme wahi cheez ho sakti hai jise chhupane ke liye guard bana hai. Kya woh sentence building ke bahar ja sakta hai? Ya judge ko andar hi rehna padega? Yeh sawaal kisi aur din ka tha. Yeh lagbhag Lakshmi ka bhi sawaal tha.

## Summary

Reasoning model jawaab dene se pehle kachche kaagaz par kaam karta hai. Woh un problems mein behtar hai jinhe nikaalna padta hai. Jo cheez di gayi hai use dhoondhne, sort karne ya naye roop mein rakhne mein woh behtar nahi hai. Uske kachche kaam ke paise aur time dono har request par lagte hain.

- Woh evidence nahi banata. Galat document milne par woh galat document ke baare mein hi dhyaan se sochta hai.
- Latency user ko mehsoos hoti hai. Streaming jawaab jaldi dikhata hai. Kya ho raha hai yeh batane se intezaar samajh mein aata hai. Lamba kaam background mein jaa sakta hai.
- Decision ko stream nahi kar sakte, kyunki decision ka aadha hissa ek khatra hai.
- Samajhdaar design mehnge machine ko sirf unhi cases par lagata hai jinhe uski zaroorat hai. Customer ke intezaar ke dauran use kabhi nahi lagata.

Agle chapter mein Nashik ki ek customer ko late fee galat bataya jaata hai, aur Anaya wajah dhoondhne ke liye search par wapas jaati hai.
