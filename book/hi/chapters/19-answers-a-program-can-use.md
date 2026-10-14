---
title: Aise Jawaab Jo Program Istemaal Kar Sake
summary: Ek paragraph insaan ke liye theek hai aur program ke kisi kaam ka nahi. Is chapter mein aap dekhenge ki JSON ke liye pyaar se kehna kaafi kyun nahi, schema galtiyon ki ek poori family kaise hata deta hai, sahi shape mein bhi galat cheez kyun aa sakti hai, aur aisa form kaise banate hain jisme invent karne ki jagah hi na ho.
course: ch8 ch85
goals:
  - bata paana ki jis model ka output kisi program ko jaata hai, woh paragraph nahi, fields mein hona chahiye
  - hisaab laga paana ki ek chhoti failure rate asli product ke scale par kitni badi ho jaati hai
  - bata paana ki schema aur structured output kya hain, aur schema kya guarantee karta hai aur kya nahi
  - fixed choices, "not stated" kehne ki jagah aur har value ke liye ek quotation wala form design kar paana, aur uske neeche validation lagana
terms:
  - structured output | naam wale aur tay type wale fields mein diya gaya jawaab, jise program padh sake, us paragraph ki jagah jo insaan padhta hai | structured outputs
  - schema | ek description ki jawaab ki shape bilkul kaisi honi chahiye, jise provider tab lagu karta hai jab model likh raha hota hai | schemas
  - validation | jawaab aane ke baad use rules se check karna, jaise kya zaroori field maujood hai, ya kya quote kiya hua phrase sach mein message mein hai | validate, validated
---

Teen hafte tak team ne jitne bhi jawaab dekhe, sab paragraph the, aur woh chal gaya kyunki padhne wala insaan tha. Phir Imran Qureshi ne finder ko rule-keeper se jod diya. Rule-keeper aam code ki kuch sau lines hai, aur woh bilkul pehli reply par fail ho gaya. Reply yeh thi: "I found the following personal details in this message. The customer's name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive."

Imran bola ki paragraph bahut pyaara hai. Lekin uske code ko jaanna hai ki PAN hai ya nahi, woh kahan shuru aur kahan khatam hota hai, aur uska kya karna hai. "Appears to be" code ko samajh nahi aata. Is chapter mein aap dekhenge ki program ko model se asal mein kya chahiye. Phir pehla aisa fix, jo problem ko sirf chhota nahi karta, balki hata deta hai. Aur yeh bhi ki aise fix ke baad bhi jawaab kaise galat reh sakta hai.

## Case: ek paragraph jo program padh nahi sakta

Pehle ek jaani-pehchani cheez se shuru karte hain. Bank mein form bharte waqt har box ka ek naam hota hai, aur zaroori boxes aap khaali nahi chhod sakte. Program ko model se yahi chahiye. Jab model ka output kisi doosre system ko jaata hai, jaise us system ko jo tay karta hai ki kya chhupana hai, toh program ko fields chahiye: ek kind, ek value, ek position aur ek decision. Har field ka ek naam aur ek type hota hai, aur woh har baar maujood hona chahiye.

Paragraph chahe kitna bhi achha likha ho, usme inme se kuch nahi hota. Insaan usme se PAN dhoondh leta hai. Program nahi dhoondh sakta.

## Pyaar se maangna

Sabse pehla kadam yahi lagta hai ki model se maang lo. Imran ne instruction mein ek line jodi: JSON mein reply do, fields kind, value aur action ke saath. Woh chal gaya, aur chalta raha. Yahi khatra hai. Ek din tak kisi ne iske baare mein socha bhi nahi.

Phir Imran ne ek hazaar test messages chalaye aur ginti ki ki kitni replies sahi bani hain. 968 sahi thi. 32 nahi.

Table: Woh 32 failures
| Ginti | Kya galat hua |
| --- | --- |
| 14 | Curly brace se pehle maafi mangi gayi: "Certainly! Here is the JSON." |
| 9 | Reply formatting symbols ke ek block mein lipti thi, jiski code ko ummeed nahi thi |
| 6 | List ke aakhir mein ek faltu comma, jo insaan ki nazar chhod deti hai aur program reject kar deta hai |
| 3 | Shape bilkul sahi, lekin "kind" field mein aisi value jo message mein thi hi nahi |

Anaya ne kaha ki 96.8 percent toh theek hi lagta hai. Imran ne napkin par agla hisaab likha. Maan lijiye roz 10,000 messages aate hain. 97 percent par yeh roz 300 failures hain. Chupchaap, ek aise field mein jis par doosra system bharosa karta hai.

Jo feature sau mein kuch baar fail hota hai, aur us "sau" ko koi dekh nahi raha, woh din bhar fail hota rehta hai.

## Maangne ki jagah rok lagana

Bharose wala fix yeh hai ki maangna band kijiye aur rok lagaiye. Providers developer ko ek *schema* dene dete hain. Schema is baat ka description hai ki jawaab ki shape bilkul kaisi honi chahiye. Usme har field ka naam hota hai, har field ka type hota hai, aur yeh bhi ki kaun se fields zaroori hain.

Jab model likh raha hota hai, tab provider ka apna software use aisa kuch banane hi nahi deta jo schema mein fit na ho. Brace se pehle maafi aa hi nahi sakti. Faltu comma aa hi nahi sakta. Is tarah mile jawaab ko *structured output* kehte hain. Woh "shayad sahi shape mein" nahi hota. Woh kisi aur shape mein ho hi nahi sakta.

::: key Aisa fix jo problem ko hata deta hai
Anaya ne dhyaan diya ki yeh pehla fix tha jisne problem ko hataya. Pehle wale fixes ne use sirf kam kiya tha. Schema galtiyon ki ek poori family ko delete kar deta hai, jabki system prompt mein likhi instruction unhe sirf kam karti hai. Imran ne kaha ki is kaam mein "woh ho hi nahi sakta" kehne ka mauka kam hi milta hai.
:::

## Shape sahi, cheez galat

Anaya ko is pakke bharose ka mazaa lagbhag ek din mila. Phir Imran ne ek aur hazaar messages chalaye aur use woh teen dikhaye jo bach nikle the.

Ek customer ne likha tha, "mera naam Suresh hai, loan ka status batao". Reply ki shape bilkul perfect thi: ek entry wali list, usme kind, value aur action. Lekin "address" field ki value thi "Pune".

Us message mein koi address nahi hai. Dikkat yeh thi ki woh field required tha, isliye model ko use khaali chhodne ki ijaazat kabhi mili hi nahi. Ek tarah se team ne model ko keh diya tha: customer kuch na bole, toh bhi kuch bana lo.

::: watch Schema shape ki guarantee deta hai, sach ki nahi
Schema format ki guarantee deta hai, content ki nahi. Amount field mein hamesha koi number hoga. Ho sakta hai woh sahi number na ho, aur ho sakta hai document mein koi number tha hi nahi. Achhi tarah banaya hua jhooth sabse khatarnaak hota hai, kyunki jo bhi check sirf shape dekhta hai, woh use paas kar deta hai.
:::

## Aisa form jisme jhooth ke liye jagah nahi

Iske baad ka kaam Anaya ko sabse zyada pasand aaya, kyunki usme hoshiyari nahi, bas dhyaan chahiye tha. Sawaal yeh nahi tha ki model ko behtar instructions kaise dein. Sawaal yeh tha ki aisa form kaise banayein jisme galti ko khade hone ki jagah hi na mile. Imran ne use teen tareeke bataye.

Table: Aise form ke teen tareeke jo kuch invent nahi kar sakta
| Tareeka | Kya karta hai | Guard mein example |
| --- | --- | --- |
| Free text ki jagah fixed choices | Free-text field bhatak jaata hai aur "Approved (pending)" jaisi entries bana deta hai, jinpar code gir jaata hai | Kind in mein se ek hona chahiye: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" mumkin hi nahi |
| "Not stated" kehne ki ijaazat | Required field tab bhi value invent karwata hai jab message chup ho | Address khaali ho sakta hai, aur ek alag haan-ya-nahi field batata hai ki address tha ya nahi. Isse "address nahi tha" ek fact ban jaata hai jo page par likha hai |
| Har baar ek quotation | Value jin exact words se aayi, unhe insaan ek second mein aur program ek line mein check kar sakta hai | Har detail ke liye model message se woh phrase copy karta hai jis par woh tiki hai. Code ki ek line poochhti hai ki woh phrase message mein hai ya nahi |

Ab zara socchiye ki teesra tareeka kya karta hai. Jo model koi detail invent karega, use ab quotation bhi invent karni padegi. Aur invent ki hui quotation message mein nahi milti, isliye check use pakad leta hai. Naya form aisa dikhta tha.

```
{
  "findings": [
    { "kind": "name",
      "quote": "Suresh",
      "action": "hide" }
  ],
  "address_present": false
}
```

Yeh Anaya ke darr se chhota nikla. Aur isme "Pune" ke liye kahin jagah nahi thi.

## Jo aaya use check karna

Imran ko phir bhi poora bharosa nahi tha. Har provider ka model likhte waqt schema se bandha nahi ja sakta. Isliye unke liye, aur baaki sab ke liye doosri suraksha ki tarah, usne *validation* joda. Validation ka matlab hai jawaab aane ke baad use rules se check karna.

Rules seedhe sawaal hain. Kya har zaroori field maujood hai? Kya kind allowed list mein se hai? Kya har quotation message mein milti hai? Agar kuch bhi fail ho, toh system ek baar error bata kar dobara poochhta hai. Agar woh bhi fail ho, toh message kisi insaan ko de diya jaata hai. Imran ne ise tar ke neeche ka jaal kaha, aur bola ki use umeed hai ki yeh jaal kabhi kuch nahi pakdega.

Anaya ne answer key mein ek column joda, jiska heading tha "quote kaisa hona chahiye". Saath mein ek nayi row jodi, us message ke liye jisme address jaisa phrase quotation marks ke andar tha. Maan lijiye ek customer kisi aur baat ke sentence mein likhta hai ki building "Sector 15" ke paas hai. Jo tool ise pakadega, use tay karna padega ki ab kya karna hai. Ek mahine pehle yeh edge case Anaya ke dhyaan mein bhi nahi aata.

Phir usne naam diya ki design ab bhi kya nahi pakad sakta: ek aisi quote jo sach mein message mein hai, sahi shape mein hai, lekin bilkul personal nahi hai, jaise order number. Form yeh nahi jaan sakta. Imran ne kaha ki answer key isi kaam ke liye hai.

## Summary

Jab koi program model ka output padhta hai, toh output fields mein hona chahiye, paragraph mein nahi. JSON ke liye pyaar se kehna lagbhag 100 mein se 97 baar kaam karta hai. Bade scale par iska matlab hai roz saikdon chupchaap failures.

- Schema ko provider model ke likhte waqt lagu karta hai. Woh galat shape ke output ko mumkin hi nahi rehne deta, isliye problem ko kam nahi karta, hata deta hai.
- Schema jawaab ki shape ki guarantee deta hai, uske sach hone ki nahi. Aur required field tab invention karwata hai jab input chup ho.
- Achhe forms mein fixed choices hote hain, "not stated" kehne ki ijaazat hoti hai, aur har value ke liye woh exact words maange jaate hain jinse woh aayi.
- Baad mein validation neeche ka jaal hai. Fields, allowed values aur quotations check kijiye, ek baar dobara try kijiye, phir kisi insaan ko de dijiye.
