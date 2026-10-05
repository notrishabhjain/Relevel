---
title: Aise Jawaab Jo Program Istemaal Kar Sake
summary: Ek paragraph insaan ke liye theek hai aur program ke liye bekaar. Chapter batata hai ki JSON ke liye vinamrata se kehna kaafi kyun nahi, schema ek poore parivaar ki galtiyan kaise hata deta hai, sahi shakl mein bhi galat cheez kyun ho sakti hai, aur aisa form kaise banayein jisme gadhne ki jagah na ho.
course: ch8 ch85
goals:
  - samjhana ki jis model ka output program ko jaata hai woh fields ka hona chahiye, gadya nahi
  - ginna ki ek chhoti failure dar asli product ke paimaane par kya matlab rakhti hai
  - schema aur structured output batana, aur yeh ki schema kya guarantee karta hai aur kya nahi
  - aisa form design karna jisme fixed choices, "not stated" kehne ka tareeka aur har value ke liye ek quotation ho, aur uske neeche validation lagana
terms:
  - structured output | naam wale, type wale fields mein diya gaya jawaab jise ek program padh sake, na ki ek paragraph jise insaan padhe | structured outputs
  - schema | is baat ka ek aupchaarik vivaran ki jawaab ki theek-theek kya shape honi chahiye, jise provider tab laagu karwata hai jab model likh raha hota hai | schemas
  - validation | jawaab aane ke baad use niyamon ke khilaaf jaanchna, jaise kya ek zaroori field maujood hai ya kya ek quote kiya hua phrase sach mein message mein hai | validate, validated
---

Teen hafte tak team ne jo bhi jawaab dekha woh ek paragraph tha, aur woh theek tha kyunki padhne wala insaan tha. Phir Imran Qureshi ne finder ko rule-keeper se joda, jo kuch sau line ka saadhaaran code hai, aur rule-keeper pehle hi reply par fail ho gaya. Reply yeh tha: "I found the following personal details in this message. The customer's name appears to be Amit Sharma. There is also a PAN, which looks like ABCDE1234F. I would also consider the bank name, HDFC, to be potentially sensitive."

Imran ne kaha ki yeh ek pyaara paragraph hai, aur uske code ko jaanna hai ki PAN hai ya nahi, kahan shuru aur kahan khatam hota hai, aur use kya karna hai. Woh "appears to be" nahi padh sakta. Yeh chapter batata hai ki program ko model se kya chahiye, woh pehla ilaaj jo samasya ko kam nahi balki hata deta hai, aur yeh ki aise ilaaj ke baad bhi jawaab kaise galat reh sakta hai.

## Case: ek paragraph jise program padh nahi sakta

Jab model ka output kisi doosre system ko jaata hai, jaise ek jo tay karta hai ki kya chhupana hai, toh program ko fields chahiye: ek kind, ek value, ek sthaan aur ek faisla. Har ek ka naam aur type hota hai, aur har ek hamesha maujood hona chahiye. Paragraph, chahe kitna bhi achha likha ho, inme se kuch nahi rakhta.

## Vinamrata se maangna

Pehla swaabhaavik kadam maangna hai. Imran ne instruction mein ek line joda: JSON mein reply karo, fields kind, value aur action ke saath. Woh kaam kiya, aur kaam karta raha, jo khatra hai. Ek din ke liye kisi ne iske baare mein nahi socha. Phir usne ek hazaar test messages chalaye aur ginti ki ki kitne replies sahi bane hue the. Nau sau adsath sahi the, aur battees nahi the.

Table: Battees failures
| Ginti | Kya galat hua |
| --- | --- |
| 14 | Curly brace se pehle ek maafi se shuru hui: "Certainly! Here is the JSON." |
| 9 | Formatting symbols ke ek block mein lipti hui jise code ne nahi socha tha |
| 6 | List ke ant mein ek bachi hui comma, jise insaan ki aankh chhod deti hai aur program rok deta hai |
| 3 | Bilkul sahi bani hui, par "kind" field mein aisi value jo message mein thi hi nahi |

Anaya ne dhyaan dilaya ki 96.8 percent theek lagta hai. Imran ne napkin par agla hisaab likha: din ke das hazaar messages par sattanve percent ka matlab teen sau failures roz hain, chupchaap, ek aise field mein jis par doosra system bharosa karta hai. Jo feature sau mein kuch baar fail hota hai, aur us sau ko koi dekh nahi raha, woh din bhar fail hota hai.

## Poochhne ke bajaye rok lagana

Bharose ka ilaaj poochhna band karna aur rok lagana hai. Providers developer ko ek *schema* dene dete hain, jo ek aupchaarik vivaran hai ki jawaab ki shakl theek-theek kya honi chahiye. Woh har field ka naam batata hai, har ek ka type batata hai, aur batata hai ki kaun se zaroori hain. Jab model likhta hai, provider ka apna software use aisa kuch banane se rokta hai jo fit nahi hota. Brace se pehle maafi nahi aa sakti. Koi bachi hui comma nahi aa sakti. Is tarah se mila jawaab *structured output* hai, aur woh "shayad sahi shakl mein" nahi hai. Woh kuch aur ho hi nahi sakta.

::: key Aisa ilaaj jo samasya hata deta hai
Anaya ne dhyaan diya ki yeh pehla ilaaj tha jisne samasya hata di. Pehle wale ne use bas kam kiya tha. Schema galtiyon ke ek poore parivaar ko hata deta hai, jabki system prompt ka instruction unhe kam karta hai. Imran ne kaha ki is kaam mein "yeh ho hi nahi sakta" kehne ka mauka kam milta hai.
:::

## Sahi shakl, galat cheez

Anaya ne us nishchintata ka ek din mazaa liya. Phir Imran ne ek aur hazaar messages chalaye aur use woh teen dikhaye jo bach gaye the. Ek customer ne likha tha, "mera naam Suresh hai, loan ka status batao". Reply ki shakl bilkul theek thi: ek entry ki list, ek kind, ek value aur ek action. "Address" field ki value "Pune" thi.

Message mein koi address nahi hai. Par field zaroori chinhit tha, isliye model ko use khaali chhodne ki ijaazat kabhi nahi thi. Team ne use, asal mein, kaha tha ki jab customer kuch na kahe tab kuch gadh lo.

::: watch Schema shakl ki guarantee deta hai, sach ki nahi
Schema format ki guarantee deta hai, content ki nahi. Amount field mein hamesha ek number hoga. Woh sahi number shayad na ho, aur ho sakta hai document mein koi number tha hi nahi. Ek theek se bana hua jhooth sabse khatarnaak hota hai, kyunki har jaanch jo sirf shakl dekhti hai use paas kar deti hai.
:::

## Aisa form jisme jhooth ki jagah nahi

Iske baad ka kaam woh tha jo Anaya ko sabse zyada pasand aaya, kyunki usme chaturai nahi, sirf dhyaan chahiye tha. Sawaal yeh nahi tha ki model ko behtar instruction kaise dein. Sawaal yeh tha ki aisa form kaise banayein jisme failure ke khade hone ki jagah hi na ho. Imran ne use teen tareeke diye.

Table: Aise form ke liye teen tareeke jo gadh nahi sakta
| Tareeka | Kya karta hai | Guard mein udaharan |
| --- | --- | --- |
| Free text ki jagah tay choices | Free-text field bhatakta hai aur "Approved (pending)" jaisi entries banata hai, jin par code gir jaata hai | Kind inme se ek hona chahiye: PAN, Aadhaar, mobile, email, bank account, name, address, other, unsure. "Aadhaar (probably)" mumkin nahi |
| "Not stated" kehne ki izaazat | Zaroori field tab ek gadhi hui value banata hai jab message chup ho | Address khaali ho sakta hai, aur ek alag haan-ya-nahi field record karta hai ki address maujood tha ya nahi, taaki gair-maujoodgi page par ek tathya ho |
| Har baar ek quotation | Value jahan se aayi uske sahi shabd insaan ek second mein aur program ek line mein jaanch sakta hai | Har detail ke liye model message mein se woh phrase copy karta hai jis par woh tika hai; code ki ek line poochhti hai ki woh phrase message mein hai ya nahi |

Jo model koi detail gadhta hai use ab ek quotation bhi gadhni padti hai, aur gadhi hui quotation message mein nahi hoti. Jaanch use pakad leti hai. Naya form aisa dikhta tha.

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

Woh Anaya ke darr se chhota tha, aur usme "Pune" ke liye koi jagah nahi thi.

## Jo aaya use jaanchna

Imran ko phir bhi us par poora bharosa nahi tha. Har provider ka model likhte waqt schema se bandha nahi ja sakta, aur unke liye, aur baaki ke liye doosri suraksha ki tarah, usne *validation* joda: jawaab aane ke baad use niyamon se milao. Kya har zaroori field maujood hai? Kya kind permitted mein se ek hai? Kya har quotation message mein hai? Agar kuch fail ho, toh system ek baar error likhkar dobara poochhta hai, aur agar woh bhi fail ho, toh message kisi insaan ko de deta hai. Usne ise tar ke neeche ka jaal kaha aur ummeed jatayi ki woh kabhi kuch pakadega nahi.

Anaya ne answer key mein ek column joda jiska heading tha "quote kaisa hona chahiye", aur ek nayi row us message ke liye joda jisme address jaisa phrase quotation marks ke andar tha, jaise ek customer kisi aur baat ke vaakya mein likhta hai ki building "Sector 15" ke paas hai. Jo tool ise dhoondhta use tay karna padta. Yeh ek edge case tha jo ek mahine pehle use nahi sujha hota.

Phir usne naam diya ki design ab bhi kya nahi pakad sakta tha: ek quote jo sach mein message mein hai, sahi shakl mein, par personal nahi, jaise order number. Form yeh nahi jaan sakta. Imran ne kaha ki answer key isi liye hai.

## Saaraansh

Jab program model ka output padhta hai, toh output fields hona chahiye, paragraph nahi. JSON ke liye vinamrata se kehna lagbhag sattanve baar kaam karta hai, jisse bade paimaane par roz saikdon khaamosh failures hoti hain.

- Schema, jise provider model ke likhte waqt lagu karta hai, galat bani hui output ko na-mumkin banata hai, jo samasya ko sirf kam nahi balki hata deta hai.
- Schema jawaab ki shakl ki guarantee deta hai, uske sach hone ki nahi, aur zaroori field tab invention majboor karta hai jab input chup ho.
- Achhe forms mein tay choices hote hain, "not stated" ki izaazat hoti hai, aur har value ke liye woh sahi shabd maange jaate hain jahan se woh aayi.
- Validation baad ka jaal hai: fields, permitted values aur quotations jaancho, ek baar dobara koshish karo, phir kisi insaan ko saunp do.
