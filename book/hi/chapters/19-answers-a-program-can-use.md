---
title: Aise Jawaab Jo Program Istemaal Kar Sake
summary: Ek paragraph insaan ke liye theek hai, par program use padh nahi sakta. Aap dekhte hain ki JSON ke liye pyaar se kehna kaafi kyun nahi. Schema fixed khaanon wale form jaisa hai, aur woh galtiyon ki ek poori family hata deta hai. Phir bhi khaane mein galat jawaab aa sakta hai, isliye form aisa banate hain ki invent karne ki jagah na bache.
course: ch8 ch85
goals:
  - bata paana ki program jab jawaab padhe, toh model ko paragraph nahi, fields bharne chahiye
  - samajh paana ki chhoti failure rate bhi bahut users wale asli product mein kitni badi hoti hai
  - bata paana ki schema aur structured output kya hain, aur schema kis cheez ka waada karta hai aur kis ka nahi
  - fixed choices, "not stated" kehne ka tareeka, aur har value ke liye ek quotation wala form design kar paana, aur neeche validation jodna
terms:
  - structured output | fixed khaanon wala form. Model naam wale khaane bharta hai, jinka type pehle se tay hota hai, taaki program padh sake. Insaan ke liye paragraph nahi likhta | structured outputs
  - schema | khaali form khud: usme har khaana likha hota hai, us mein kya jaayega, aur kaun se khaane bharna zaroori hain. Model likhte waqt model chalane wali company ise lagu karti hai | schemas
  - validation | jawaab aane ke baad doosri jaanch, jaise clerk aapka bhara form jaanchta hai. Kya har khaana bhara hai? Kya har quote kiya phrase message mein sach mein hai? | validate, validated
---

Teen hafte tak team ne jitne bhi jawaab dekhe, sab paragraph the. Woh chal gaya, kyunki padhne wala insaan tha. Phir Imran Qureshi ne finder ko rule-keeper se jod diya. Rule-keeper aam code ki kuch sau lines hai. Woh bilkul pehli reply par fail ho gaya.

Reply yeh thi: "I found the following personal details in this message. The customer's name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive." PAN kisi insaan ka tax ID number hota hai.

Imran bola ki paragraph bahut pyaara hai. Lekin uske code ko 3 baatein jaanni thi. Kya PAN hai? Woh kahan shuru aur kahan khatam hota hai? Uska kya karna hai? "Appears to be" code ko samajh nahi aata. Is chapter mein aap dekhenge ki program ko model se asal mein kya chahiye. Phir ek aisa pehla fix, jo problem ko sirf chhota nahi karta, hata deta hai. Phir yeh ki aise fix ke baad bhi jawaab kaise galat reh sakta hai.

## Case: ek paragraph jo program padh nahi sakta

Pehle ek jaani-pehchani cheez se shuru karte hain. Bank mein form bharte waqt har khaane ka ek naam hota hai. Zaroori khaane aap khaali nahi chhod sakte. Program ko model se yahi chahiye.

Maan lijiye model ka output kisi doosre system ko jaata hai, jaise us system ko jo tay karta hai ki kya chhupana hai. Us program ko fields chahiye. Field form ka ek naam wala khaana hota hai. Use ek kind, ek value, ek position aur ek decision chahiye. Har field ka ek naam aur ek type hota hai, aur woh har baar maujood hona chahiye.

Paragraph chahe kitna bhi achha likha ho, usme in khaanon mein se kuch nahi hota. Insaan usme se PAN dhoondh leta hai. Program nahi dhoondh sakta.

## Pyaar se maangna

Sabse pehla kadam yahi lagta hai ki model se maang lo. Imran ne instruction mein ek line jodi. Usme likha tha ki JSON mein reply do, fields kind, value aur action ke saath. JSON curly brackets ke andar labels aur values se bana form hai. Yeh tareeka chal gaya, aur chalta raha. Yahi khatra hai. Ek din tak kisi ne iske baare mein socha bhi nahi.

Phir Imran ne ek hazaar test messages chalaye. Usne ginti ki ki kitni replies sahi bani hain. 968 sahi thi. 32 nahi.

Table: Woh 32 failures
| Ginti | Kya galat hua |
| --- | --- |
| 14 | Curly brace se pehle maafi mangi gayi: "Certainly! Here is the JSON." |
| 9 | Reply formatting symbols ke ek block mein lipti thi, jiski code ko ummeed nahi thi |
| 6 | List ke aakhir mein ek faltu comma, jo insaan ki nazar chhod deti hai aur program reject kar deta hai |
| 3 | Shape bilkul sahi, lekin "kind" field mein aisi value jo message mein thi hi nahi |

Anaya ne kaha ki 96.8 percent toh theek hi lagta hai. Imran ne napkin par agla hisaab likha. Maan lijiye roz 10,000 messages aate hain. 97 percent par yeh roz 300 failures hain. Chupchaap. Woh ek aise field mein jaate hain jis par doosra system bharosa karta hai.

Jo feature sau mein kuch baar fail hota hai, woh din bhar fail hota rehta hai, agar un sau ko koi dekh nahi raha. Yeh us bus jaisa hai jo sau mein teen baar late hoti hai. Use 10,000 baar pakdo, toh 300 baar intezaar karna padega.

## Maangne ki jagah rok lagana

Bharose wala fix yeh hai ki maangna band kijiye aur rok lagaiye. Rok lagana matlab koi doosra raasta na chhodna. Providers (model chalane wali companies) developer ko ek *schema* dene dete hain. Schema khaali form khud hai. Usme har khaane ka naam hota hai. Usme likha hota hai ki har khaane mein kis type ki cheez jaayegi. Usme yeh bhi likha hota hai ki kaun se khaane bharna zaroori hain.

Jab model likh raha hota hai, tab provider ka apna software use aisa kuch likhne hi nahi deta jo form mein fit na ho. Brace se pehle maafi aa hi nahi sakti. Faltu comma aa hi nahi sakta. Is tarah bane jawaab ko *structured output* kehte hain. Woh "shayad sahi shape mein" nahi hota. Woh kisi aur shape mein ho hi nahi sakta.

::: key Aisa fix jo problem ko hata deta hai
Anaya ne dhyaan diya ki yeh pehla fix tha jisne problem ko hataya. Pehle wale fixes ne use sirf kam kiya tha. Schema galtiyon ki ek poori family ko delete kar deta hai. System prompt mein likhi instruction (deewar par lage niyam) unhe sirf kam karti hai. Imran ne kaha ki is kaam mein "woh ho hi nahi sakta" kehne ka mauka kam hi milta hai.
:::

## Shape sahi, cheez galat

Anaya ko is pakke bharose ka mazaa lagbhag ek din mila. Phir Imran ne ek aur hazaar messages chalaye. Usne use woh teen dikhaye jo bach nikle the.

Ek customer ne likha tha, "mera naam Suresh hai, loan ka status batao". Reply ki shape bilkul perfect thi. Ek entry wali list, usme kind, value aur action. Lekin "address" field ki value thi "Pune".

Us message mein koi address nahi hai. Dikkat yeh thi ki woh field required tha. Isliye model ko use khaali chhodne ki ijaazat kabhi mili hi nahi. Ek tarah se team ne model ko keh diya tha: customer kuch na bole, toh bhi kuch bana lo.

::: watch Schema shape ki guarantee deta hai, sach ki nahi
Schema format ki guarantee deta hai. Content ke baare mein woh kuch nahi kehta. Form yeh pakka kar sakta hai ki khaana bhara ho, par yeh nahi ki jawaab sach ho. Amount field mein hamesha koi number hoga. Ho sakta hai woh sahi number na ho. Ho sakta hai document mein koi number tha hi nahi. Achhi tarah banaya hua jhooth sabse khatarnaak hota hai. Jo bhi check sirf shape dekhta hai, woh use paas kar deta hai.
:::

## Aisa form jisme jhooth ke liye jagah nahi

Iske baad ka kaam Anaya ko sabse zyada pasand aaya. Usme hoshiyari nahi, dhyaan chahiye tha. Sawaal yeh nahi tha ki model ko behtar instructions kaise dein. Sawaal yeh tha ki aisa form kaise banayein jisme galti ko khade hone ki jagah hi na mile. Imran ne use teen tareeke bataye.

Table: Aise form ke teen tareeke jo kuch invent nahi kar sakta
| Tareeka | Kya karta hai | Guard mein example |
| --- | --- | --- |
| Free text ki jagah fixed choices | Free-text field bhatak jaata hai aur "Approved (pending)" jaisi entries bana deta hai, jinpar code gir jaata hai | Kind in mein se ek hona chahiye: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" mumkin hi nahi |
| "Not stated" kehne ki ijaazat | Required field tab bhi value invent karwata hai jab message chup ho | Address khaali ho sakta hai, aur ek alag haan-ya-nahi field batata hai ki address tha ya nahi. Isse "address nahi tha" ek fact ban jaata hai jo page par likha hai |
| Har baar ek quotation | Value jin exact words se aayi, unhe insaan ek second mein aur program ek line mein check kar sakta hai | Har detail ke liye model message se woh phrase copy karta hai jis par woh tiki hai. Code ki ek line poochhti hai ki woh phrase message mein hai ya nahi |

Ab zara socchiye ki teesra tareeka kya karta hai. Jo model koi detail gadhega, use ab quotation bhi gadhni padegi. Gadhi hui quotation message mein nahi milti, isliye check use pakad leta hai. Yeh us teacher jaisa hai jo poochhta hai, "Dikhao, woh baat kaun se page par padhi?" Naya form aisa dikhta tha.

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

Imran ko phir bhi poora bharosa nahi tha. Har provider ka model likhte waqt schema se bandha nahi ja sakta. Isliye un models ke liye usne *validation* joda. Baaki models ke liye bhi usne ise doosri suraksha ki tarah rakha. Validation ka matlab hai jawaab aane ke baad use rules se check karna. Us clerk ko sochiye jo stamp lagane se pehle aapka bhara form jaanchta hai.

Rules seedhe sawaal hain. Kya har zaroori field maujood hai? Kya kind allowed list mein se hai? Kya har quotation message mein milti hai? Agar kuch bhi fail ho, toh system ek baar dobara poochhta hai, aur bata deta hai ki galti kya thi. Agar woh bhi fail ho, toh message kisi insaan ko de diya jaata hai. Imran ne ise tar ke neeche ka jaal kaha, jaise circus mein rassi par chalne wale ke neeche jaal hota hai. Usne kaha ki use umeed hai ki yeh jaal kabhi kuch nahi pakdega.

Anaya ne answer key mein ek column joda, jiska heading tha "quote kaisa hona chahiye". Usne ek nayi row bhi jodi. Woh us message ke liye thi jisme address jaisa phrase quotation marks ke andar tha. Maan lijiye ek customer kisi aur baat ke sentence mein likhta hai ki building "Sector 15" ke paas hai. Jo tool ise pakadega, use tay karna padega ki ab kya karna hai. Ek mahine pehle yeh edge case (ek anokha, kam hone wala mamla) Anaya ke dhyaan mein bhi nahi aata.

Phir usne naam diya ki design ab bhi kya nahi pakad sakta. Ek quote sach mein message mein ho sakti hai, sahi shape mein, aur phir bhi bilkul personal nahi ho sakti. Order number ek example hai. Form yeh nahi jaan sakta. Imran ne kaha ki answer key isi kaam ke liye hai.

::: key Ab aap yeh keh sakte hain
Dhoondhne aur structure ke baare mein teen sentences. Jahan N aur M likha hai, wahan apne numbers rakhiye.
- Maine apne sawaalon par retrieval naapi: dus mein se N ko sahi passage mila, aur main bata sakta hoon ki chhoote hue sawaalon mein kya common tha.
- Main apne tool ka recall aur precision batata hoon, aur yeh bhi ki maine kisko tarjeeh di aur kyun.
- Mere tool ka output aise fields hain jinhe program check kar sakta hai, aur validation ne M mein se N kharab outputs pakde.
:::

## Summary

Jab koi program model ka output padhta hai, toh output fields mein hona chahiye, paragraph mein nahi. JSON ke liye pyaar se kehna lagbhag 100 mein se 97 baar kaam karta hai. Bahut users ho toh iska matlab hai roz saikdon chupchaap failures.

- Schema ko provider model ke likhte waqt lagu karta hai. Galat shape ka output mumkin hi nahi rehta. Isliye woh problem ko kam nahi karta, hata deta hai.
- Schema jawaab ki shape ki guarantee deta hai, uske sach hone ki nahi. Required field tab model se kuch bhi banwa leta hai jab input chup ho.
- Achhe forms mein fixed choices hote hain. Woh "not stated" kehne dete hain. Woh har value ke liye woh exact words maangte hain jinse woh aayi.
- Baad mein validation neeche ka jaal hai. Fields, allowed values aur quotations check kijiye. Ek baar dobara try kijiye. Phir kisi insaan ko de dijiye.

Agle chapter mein 12 digits ka ek number order bhi ho sakta hai aur Aadhaar number bhi. Team aisa tareeka dhoondhne nikalti hai jisse model look-up maang sake.
