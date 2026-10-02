---
title: Aise Jawaab Jo Program Istemaal Kar Sake
summary: Ek paragraph insaan ke liye theek hai aur program ke liye bekaar. Team seekhti hai ki "JSON mein jawaab do, please" kaafi kyun nahi hai, aur ek form ko itna achha kaise banayein ki model ke paas gadhne ki jagah hi na rahe.
course: ch8 ch85
terms:
  - structured output | naam wale, type wale fields mein diya gaya jawaab jise ek program padh sake, na ki ek paragraph jise insaan padhe | structured outputs
  - schema | is baat ka ek aupchaarik vivaran ki jawaab ki theek-theek kya shape honi chahiye, jise provider tab laagu karwata hai jab model likh raha hota hai | schemas
  - validation | jawaab aane ke baad use niyamon ke khilaaf jaanchna, jaise kya ek zaroori field maujood hai ya kya ek quote kiya hua phrase sach mein message mein hai | validate, validated
---

Teen hafte se team ne jo bhi jawaab dekha tha woh ek paragraph tha, aur teen hafte se woh theek tha, kyunki padhne wala ek insaan tha.

Phir Imran ne finder ko rule-keeper se jodne ki koshish ki, aur rule-keeper, jo kuch sau lines ka aam code tha, pehle jawaab se aise guzra jaise deewar mein chamach.

*Mujhe is message mein ye personal details mili. Customer ka naam Amit Sharma lagta hai. Ek PAN bhi hai, jo ABCDE1234F jaisa dikhta hai. Main bank ke naam, HDFC, ko bhi sambhavtah sensitive maanunga.*

"Yeh ek pyaara paragraph hai," Imran ne kaha. "Mere code ko jaanna hai: kya PAN hai? Woh kahan shuru hota hai? Kahan khatam? Mujhe uske saath kya karna hai? Woh 'lagta hai' nahi padh sakta."

Insaan jo jawaab padhta hai aur program jo istemaal karta hai, unme yahi farak hai. Jab model ka output kisi doosre system ko khilata hai, jaise ek jo tay karta hai ki kya chhupana hai, toh program ko fields chahiye: ek kism, ek value, ek position, ek faisla. Har ek ka ek naam aur ek type hota hai, aur har ek hamesha maujood hona chahiye. Paragraph, chahe kitna bhi achha likha ho, mein inme se kuch nahi hota.

## JSON mein jawaab do, please

Pehla seedha kadam poochhna hai. Imran ne nirdesh mein ek line jodi.

*JSON mein jawaab do, fields kind, value aur action ke saath.*

Yeh chala, aur chalta raha, jo khatra hai. Ek din tak kisi ne iske baare mein socha nahi. Phir usne hazaar test messages chalaye aur gina ki kitne jawaab sahi bane the.

968 sahi the. Battees nahi.

Battees mein se chaudah curly brace se pehle ek maafi se shuru hue: *Zaroor! Yeh raha JSON.* Nau ek aise block mein lipte the jisme formatting symbols the jinki code ko umeed nahi thi. Chhe ke ek list ke ant mein ek bhatki hui comma thi, us tarah ki cheez jo insaani aankh chhod deti hai aur program atak jaata hai. Aur teen bilkul sahi bane the, har brace aur quote apni jagah, aur "kind" field mein ek aisi value jo message mein thi hi nahi.

"Chhiyaanbe point aath percent," Anaya ne kaha. "Yeh theek lagta hai."

"Lagta hai. Agla jod karo." Usne napkin par likha. "Roz das hazaar messages, sattanbe percent par, teen sau failures roz. Chupchaap. Ek aise field mein jis par doosra system bharosa karta hai."

Use teesri line ki zaroorat nahi thi. Usne purana ginit mehsoos kiya tha: failure rate jo chhota lagta hai aur woh number jisse woh guna hota hai. Aisa feature jo sau mein kuch baar galat jaata hai, aur sau ko koi dekh nahi raha, woh feature hai jo din bhar galat jaata hai.

## Poochho mat, baandho

Pakka ilaaj, Imran ne kaha, poochhna chhod kar baandhna tha.

Providers aapko ek *schema* dene dete hain: is baat ka aupchaarik vivaran ki jawaab ki theek-theek kya shape honi chahiye. Woh har field ka naam batata hai, kehta hai ki woh kaun sa type rakhta hai, aur kehta hai ki kaun se zaroori hain. Jab model likh raha hota hai, provider ka apna software use aisa kuch banane se rokta hai jo fit nahi hota. Brace se pehle maafi nahi aa sakti. Bhatki hui comma nahi aa sakti. Jo jawaab wapas aata hai woh "bahut sambhav hai ki theek bana ho" nahi hota. Woh kuch aur hone mein asamarth hota hai. Jawaab ko is shape mein paana *structured output* kehlata hai.

Baat Anaya se chhooti nahi, jiski ab farak ki lambi yaaddasht thi.

"Yeh pehla ilaaj hai jo problem ko hata deta hai," usne kaha. "Baaki ne use kam baar hone wala banaya tha."

"Haan. Main chahta tha tum yeh dekho. Schema galtiyon ke poore parivaar ko mita deta hai. System prompt ka nirdesh unhe sirf kam karta tha." Usne munh banaya. "Is kaam mein yeh kehne ka mauka kam milta hai ki 'woh ho hi nahi sakta'. Is ka maza lo."

## Sahi shape, galat cheez

Usne ek din tak uska maza liya. Phir Imran ne ek hazaar messages aur chalaye aur use woh teen dikhaye jo bach gaye the.

Ek message tha, *mera naam Suresh hai, loan ka status batao.* Jawaab ki shape bilkul sahi thi: ek entry wali list, ek kind, ek value, ek action. "Address" field mein value thi *Pune.*

"Is message mein koi address nahi hai," Anaya ne kaha.

"Nahi. Par field zaroori marked hai, isliye machine ko use khaali chhodne ki ijaazat kabhi nahi thi. Humne, asal mein, use kaha ki jab customer ne kuch nahi kaha ho tab bhi kuch gadh do." Woh peeche jhuka. "Schema format ki guarantee deta hai, content ki nahi. Amount field mein aapko hamesha ek number milega. Woh sahi number nahi ho sakta, aur ho sakta hai document mein koi number tha hi nahi."

Anaya ko ek pal laga yeh kitna jaanlewa vaakya hai. Jawaab ke format ke baare mein usne jo kuch seekha tha woh is baare mein tha ki use padha ja sakta hai ya nahi. Usme kuch bhi nahi kehta tha ki woh sach tha. Achhi tarah banaya hua jhooth sabse khatarnaak kism hai, kyunki har jaanch jo sirf shape dekhti hai use paas kar deti hai.

## Ek form jisme jhooth ke liye jagah nahi

Jo aaya woh kaam ka woh hissa tha jise woh sabse zyada pasand karne lagi, kyunki woh design ka ek aisa kism tha jisme koi chaalaki nahi chahiye thi, bas dhyaan. Sawaal yeh nahi tha ki machine ko behtar nirdesh kaise dein. Sawaal yeh tha ki aisa form kaise banayein jisme failure ke khade hone ki jagah na ho.

Imran ne use teen techniques di, aur unhone form dobara banaya.

**Free text ki jagah tay vikalp.** Detail ki "kind" ek chhoti list mein se ek ho sakti thi: PAN, Aadhaar, mobile, email, bank account, naam, pata, other, unsure. Woh *Aadhaar (shayad)* nahi ho sakti thi. Free-text field bhatak jaata hai: woh *Approved (pending)* paida karta hai, aur use padhne wala code gir jaata hai. Tay list use bhatakne ki jagah nahi deti.

**"Nahi bataya gaya" kehne ki ijaazat.** Agar ek field zaroori hai, toh aapne machine se kaha hai ki jab message chup ho toh ek value gadh de. Isliye pata khaali ho sakta tha. Ek alag haan-ya-nahi field record karta tha ki koi pata tha bhi ya nahi, taaki gair-maujoodgi page par ek tathya ho, bharne ke liye ek khaali jagah nahi.

**Har baar ek quote.** Har detail ke liye jo mili, machine ko message se woh theek-theek shabd copy karne the jin par woh aadhaarit thi. Yeh kisi bhi confidence score se behtar tha. Ek insaan ek quote ek second mein jaanch sakta tha, aur ek program bhi: code ki ek line poochh sakti thi, *kya yeh phrase sach mein message mein hai?* Agar machine koi detail gadhti, toh ab use ek quote bhi gadhna padta, aur gadha hua quote message mein nahi hota. Jaanch use pakad leti hai.

Naya form, aakhir mein, aisa dikhta tha.

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

Usne use kai baar padha. Woh uske dar se chhota tha. Usme *Pune* ke liye kahin jagah nahi thi.

## Jo aaya use jaanchna

Phir bhi Imran ko poora bharosa nahi tha, aur usne dikhaya kyun. Har provider ki machine ko likhte waqt schema ke saath nahi baandha ja sakta tha. Unke liye, aur baaki ke liye doosri raksha-rekha ke roop mein, usne ek chhota kadam joda jise *validation* kehte hain: jawaab aane ke baad use niyamon ke khilaaf jaancho. Kya har zaroori field maujood hai? Kya kind permitted ones mein se ek hai? Kya har quote message mein dikhta hai? Agar kuch fail ho, toh ek baar phir poochho, error ke saath, aur agar phir fail ho toh message kisi insaan ko saunp do.

"Yeh taar ke neeche ka jaal hai," usne kaha. "Main umeed karta hoon ki yeh kabhi kuch na pakde."

Anaya ne answer key mein ek column joda, jiska title usne rakha *quote kaisa hona chahiye*, aur neeche ke paas ek nayi row, jis par use halka sa garv tha: ek message jisme quote ke andar pate jaisa phrase tha, jaise ek customer ne kisi aur baat ke vaakya mein likha *building "Sector 15" ke paas hai*. Jo tool ise dhoondhta use tay karna padta. Yeh ek edge case tha jo ek mahine pehle use nahi sujhta.

"Ek aur baat," usne kaha. "Yeh abhi bhi kya nahi pakad sakta."

"Bolo."

"Ek quote jo sach mein message mein hai, sahi shape mein, par personal nahi hai. Ek order number. Form nahi jaan sakta."

"Nahi," usne kaha. "Isi ke liye answer key hai."

## Saath le jaane layak baatein

Jab koi program model ka output padhta hai, toh output ko fields hona chahiye, paragraph nahi. Tameez se JSON maangna sau mein lagbhag sattanbe baar kaam karta hai, aur bade paimane par yeh roz sainkdon chupchaap failures hain. Ek schema, jo provider model ke likhte waqt laagu karwata hai, kharab bane output ko asambhav bana deta hai, jo is kshetra mein durlabh hai: woh problem ko hata deta hai, bas kam nahi karta. Lekin schema jawaab ki shape ki guarantee deta hai, uske sach hone ki nahi, aur ek zaroori field input ke chup hone par kuch gadhne par majboor karta hai. Achhe forms tay vikalp istemaal karte hain, "nahi bataya gaya" ki ijaazat dete hain, aur har value ke liye woh theek-theek shabd maangte hain jahan se woh aayi, kyunki ek quote ko ek insaan ek second mein aur ek program ek line mein jaanch sakta hai. Baad mein validation neeche ka jaal hai.
