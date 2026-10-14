---
title: Ek Baar Mein Padhne Ke Liye Bahut Lamba
summary: Chatbot Sahaj ke apne documents se jawaab kaise deta hai, yeh samajhne ke liye ek product manager ek policy ko kainchi se teen baar kaatti hai. Chapter batata hai ki documents ko todna kyun padta hai, chunking kya hoti hai, aur kaatne ka koi ek tareeka sahi kyun nahi hota.
course: ch3
goals:
  - samjha paana ki har sawaal ke saath model ko poori library kyun nahi di ja sakti
  - bata paana ki chunks aur chunking kya hain, aur bade, chhote aur structure ke hisaab se kate chunks kaise fail hote hain
  - orphaned chunk pehchaan paana
  - wahi savdhaani us text par bhi laga paana jise guard ko khud kaatna padta hai
terms:
  - chunk | kisi lambe document ka ek tukda, itna chhota ki use akele store kiya jaa sake aur bheja jaa sake | chunks
  - chunking | lambe documents ko chunks mein todna, yaani yeh tay karna ki kahan kaatna hai | 
  - orphaned chunk | woh chunk jiska document se kaat dene ke baad koi matlab nahi nikalta, kyunki woh kisi aisi cheez ki baat karta hai jo pichhle tukde mein thi | orphaned chunks, orphan chunk
---

April ke aakhir mein ek Friday Imran Qureshi ne Anaya se kaha ki guard banane se pehle use yeh jaanna chahiye ki chatbot ko kuch pata kaise chalta hai. Yeh sawaal Anaya ke dimaag mein bus mein hi aa chuka tha. Chatbot ko Sahaj ke late-fee rules kisi ne kabhi sikhaye nahi the. Aur pehle hafte mein usne dekha tha ki jab model ko jawaab nahi pata hota, toh woh gadh deta hai. Phir bhi zyadatar baar chatbot sahi policy hi bata deta tha.

"Use sahi pages dikhaye jaate hain," Imran ne kaha. "Poori trick yahi hai. Sunne mein yeh jitna lagta hai, dekhne mein usse mushkil hai, aur achhe se karne mein toh kaafi mushkil."

Yeh chapter batata hai ki sahi pages chune kaise jaate hain. Shuruaat us hisse se hoti hai jo sabse pehle aata hai: lambe documents ko tukdon mein kaatna. Anaya ne yeh ek kainchi aur 12 page ke printout se seekha.

## Case: carpet par ek policy

Sahaj ki *Late Payment and Refund Policy* 12 page ki thi. Imran ne ek stapled printout glass room ke farsh par rakha, aur uske bagal mein narangi handle wali ek kainchi. Woh chahta tha ki Anaya haath se kaate, bina kisi software ke, taaki use mehsoos ho ki isme kya lagta hai.

Farah Sheikh udhar se guzar rahi thi. Woh carpet par aise baith gayi jaise bahane ka intezaar kar rahi thi. Uske baad jo teen rounds hue, wahi is chapter ka dil hain.

## Sab kuch kyun nahi bhej sakte

Sabse seedha plan yeh lagta hai ki har sawaal ke saath model ko Sahaj ke saare documents de do, aur use jawaab dhoondhne do. Do limits is plan ko namumkin bana dete hain.

Pehla limit context window hai. Sahaj ki poori library, yaani help pages, policies, terms aur circulars, lagbhag 400 page ki thi. Woh fit hi nahi hoti.

Doosra limit cost hai. 400 page lagbhag 2 lakh tokens ke hote hain. Imran ke maane hue price ₹250 per million tokens par, ek sawaal ka jawaab dene mein ₹50 lagte. Mahine ke 1 lakh sawaalon par ₹50 lakh lagte. Ek chhote se sawaal ke liye poori library bhejna aisa hai jaise ek chitthi pahunchane ke liye lorry kiraye par lena.

Isliye standard tareeka alag hai. Aap documents ko pehle se tukdon mein kaat kar store kar lete hain. Phir har sawaal ke liye sirf woh kuch tukde bhejte hain jo kaam ke lagte hain. In tukdon ko *chunks* kehte hain, aur kaatne ke kaam ko *chunking*. Idea batana aasaan hai. Saari mushkil yeh tay karne mein hai ki kahan kaatna hai.

## Ek policy ko kaatne ke 3 tareeke

Imran ne ek customer ki tarah sawaal poochhe, aur Anaya ne policy ko 3 alag tareekon se kaata. Table dikhati hai ki har round mein kya hua.

Table: Ek hi policy ko kaatne ke 3 tareeke
| Round | Kaise kaata gaya | Kya kaam kiya | Kya fail hua |
| --- | --- | --- | --- |
| 1 | 4-4 page ke 3 bade tukde | Bill do baar bharne ka sawaal page 6 ke ek paragraph se hal ho gaya | Ek paragraph ke liye 4 page bheje gaye, jo dheema, mehnga aur dhundhla hai. Kisi sarkari utility ko payment ke sawaal mein page 6 ka rule aur page 9 ka exception dono chahiye the, aur woh alag tukdon mein pade the |
| 2 | Aadhe page ke 20 chhote tukde | Pehle sawaal ne sirf wahi paragraph nikaala jo chahiye tha, sasta aur saaf | Rule aur uska exception alag-alag parchiyon mein the, aur kuch yeh pakka nahi karta tha ki dono chune jaayein. Agar sirf rule model tak pahunchta, toh woh poore confidence se adhura jawaab deta |
| 3 | Har section ka ek tukda, aur har section ke aakhri 2 sentences agle section ki shuruaat mein copy kiye gaye | Zyadatar tukdon ka context bacha raha. "Exceptions" apna alag section ban gaya, aur exceptions ke baare mein poochhe sawaal se mil sakta tha | Jis sawaal ko alag sections ka rule aur exception dono chahiye, woh ab bhi fail ho sakta tha |

Doosre round mein Farah ne ek parchi uthayi aur padhi: "The aforesaid amount shall be refunded within sixty days."

Anaya ne poochha, "Kaun si amount?"

"Bilkul yahi," Farah ne kaha. Kaun si amount, kisko refund hogi, aur aforesaid kya? Sentence achhi English mein tha, aur uska koi matlab nahi tha. Use pichhle sentence se kaat diya gaya tha, jisme likha tha ki amount kya hai.

::: def Orphaned chunk
Woh chunk jiska document se kaat dene ke baad koi matlab nahi nikalta, kyunki woh kisi aisi cheez ki baat karta hai jo pichhle tukde mein thi. Documents mein aisi baatein bhari hoti hain, khaaskar legal documents mein: "the above", "this scheme", "such cases".
:::

Page padhne wale insaan ke paas uske pehle ka paragraph hota hai. Chunk ke paas nahi hota. Jab model ko koi orphan dikhaya jaata hai, toh woh wahi karta hai jo woh har gap ke saath karta hai. Woh gap ko bhar deta hai. Isi wajah se teesre round mein overlap rakha gaya, jisme har section ka aakhir agle section ki shuruaat mein dohraya gaya.

## Koi sahi size nahi hota

Anaya ko ummeed thi ki use chunk ka sahi size pata chal jaayega. Use yeh pata chala ki aisa koi size hai hi nahi. Har tareeka apne tareeke se fail hota hai.

Bade tukde mehnge aur dhundhle hote hain. Chhote tukde sasta aur saaf hote hain, lekin unka context kho jaata hai. Structure ke hisaab se kaatne par har tukde ke andar matlab bacha rehta hai, lekin jo jawaab kisi boundary ke aar-paar hota hai, woh kho jaata hai. Sahi choice is par depend karti hai ki aapke documents kaise dikhte hain, aur log asal mein kya poochhte hain.

::: key Jo failure aapne chuni, uska naam lijiye
Imran ka design review ka rule tha ki batao kaun si failure chuni gayi, aur kyun. Jo team apne tareeke ka nuksaan naam se nahi bata sakti, usne koi choice nahi ki. Usne bas ek default maan liya hai.

Farah ne Sahaj policy ke liye yeh sentence likha aur board par laga diya. Section ke hisaab se kaato, 2 sentences ke overlap ke saath. Isse ek clause ke sawaalon ke sahi jawaab milte hain. Aise jawaab kho jaate hain jinhe alag sections ka ek clause aur uska exception chahiye. Isliye unhe jaan-boojh kar test kiya jaata hai.
:::

## Wahi problem, guard mein

Shaam ke lagbhag saat baje Anaya ne dekha ki guard ke saath bhi yahi problem hai. Kuch customers message nahi likhte. Woh poora email paste kar dete hain, 3,000 words ka pura thread. Guard ka jo hissa naam aur jagah dhoondhta hai, woh ek baar mein sirf limited text padh sakta hai. Toh use bhi thread ko tukdon mein kaatna padega.

Maan lijiye usne kisi number ke beech mein kaat diya. Ek tukda "4321 56" par khatam hoga aur agla "78 9012" se shuru. Padhne wali kisi bhi cheez ko koi tukda Aadhaar number jaisa nahi dikhega. Anaya ne whiteboard par woh number banaya, ek line ke aar-paar, jaise koi gaadi lane ki line par chadhi ho. Guard seedha uske paas se nikal jaata.

Yeh wahi failure thi jo rule aur exception ke saath thi: ek hi cheez ke do aadhe hisse, do alag jagah, aur akele dono bematlab. Ilaaj bhi wahi tha, aur Anaya ne use rules ki tarah likha.

Table: Guard ko jo text padhna hai, use kaatne ke rules
| Rule | Wajah |
| --- | --- |
| Sentence ke aakhir mein ya khaali line par kaato | Har tukde ke andar matlab bacha rehta hai |
| Digits ki ek run ke beech mein kabhi mat kaato | Beech se tuta identity number dono hisson ko dikhai nahi deta |
| Lagataar tukde edge par thode words share karein | Jo cheez kaat ke aar-paar ho, woh kam se kam ek tukde mein poori dikhti hai |
| Boundary par bilkul rakhe numbers se test karo | Failures jaan-boojh kar pakdi jaati hain, ittefaq se nahi |

Imran ne use kaha ki ise answer key mein row 11 bana de: ek number jo cut par hai.

## Summary

Har sawaal ke saath model ko poori library nahi di ja sakti. Woh fit nahi hogi, aur har token ke paise dene padte hain. Aam jawaab yeh hai ki documents ko pehle se chunks mein kaat lo, aur sirf woh kuch bhejo jo kaam ke lagte hain. Isliye kaatna hi sabse mushkil hissa ban jaata hai.

- Bade chunks mehnge aur dhundhle hote hain. Chhote chunks saaf hote hain lekin context kho dete hain. Jo chunk pichhle tukde ki kisi cheez ki baat karta hai, woh orphan hai, aur model us gap ko andaaze se bhar dega.
- Chunk ka koi sahi size nahi hota. Har choice kahin na kahin fail hoti hai, isliye jo failure aap maante hain, uska naam lijiye aur use jaan-boojh kar test kijiye.
- Wahi savdhaani us text par bhi lagti hai jise guard ko khud kaatna padta hai. Identity number ko kabhi beech se mat todiye, aur bagal ke tukdon ko thoda overlap karne dijiye.
