---
title: Ek Baar Mein Padhne Ke Liye Bahut Lamba
summary: Anaya jaanna chahti hai ki chatbot Sahaj ke apne documents se jawaab kaise deta hai. Woh ek policy ko kainchi se teen baar kaatti hai. Aap seekhte hain ki lambe documents tukdon mein kyun kaate jaate hain, chunking kya hai, aur kaatne ka koi ek tareeka sahi kyun nahi hota.
course: ch3
goals:
  - samajhna ki har sawaal ke saath model ko poori library kyun nahi di ja sakti
  - chunks aur chunking kya hain, aur bade, chhote aur structure wale chunks kaise fail hote hain
  - orphaned chunk pehchaanna
  - guard ko jo text kaatna padta hai, usmein bhi wahi savdhaani rakhna
terms:
  - chunk | lambi kitaab se kaate gaye ek index card jaisa; document ka ek tukda, itna chhota ki akele store aur send ho sake | chunks
  - chunking | lambi kitaab ko index cards mein kaatne jaisa; aap tay karte hain ki har cut kahan lagega | 
  - orphaned chunk | chitthi se phate ek page jaisa; woh pichhle tukde ki kisi cheez ki taraf ishaara karta hai, isliye akela uska matlab nahi nikalta | orphaned chunks, orphan chunk
---

April ke aakhir mein ek Friday Imran Qureshi ne Anaya ko ek kaam diya. Guard banane se pehle use jaanna chahiye ki chatbot ko cheezein pata kaise chalti hain. Yeh sawaal Anaya ke dimaag mein bus mein hi aa chuka tha. Chatbot ko Sahaj ke late-fee rules kisi ne kabhi sikhaye nahi the. Pehle hafte mein usne dekha tha ki model ko jawaab na pata ho toh woh gadh deta hai. Phir bhi zyadatar din chatbot sahi policy hi batata tha.

"Use sahi pages dikhaye jaate hain," Imran ne kaha. "Poori trick yahi hai. Sunne mein yeh aasaan lagta hai. Dekhne mein mushkil hai. Achhe se karne mein bahut mushkil hai."

Yeh chapter batata hai ki sahi pages chune kaise jaate hain. Shuruaat pehle kadam se hoti hai: lambe documents ko tukdon mein kaatna. Anaya ne yeh ek kainchi aur 12 page ke printout se seekha.

## Case: carpet par ek policy

Sahaj ki *Late Payment and Refund Policy* 12 page ki thi. Imran ne ek stapled printout glass room ke farsh par rakha. Uske bagal mein narangi handle wali ek kainchi rakhi. Woh chahta tha ki Anaya haath se kaate, bina kisi software ke. Tab use kaam mehsoos hota. Yeh aisa hai jaise lambi kitaab ko apne haathon se index cards mein kaatna.

Farah Sheikh udhar se guzar rahi thi. Woh carpet par aise baith gayi jaise bahane ka intezaar kar rahi thi. Uske baad ke teen rounds hi is chapter ka dil hain.

## Sab kuch kyun nahi bhej sakte

Sabse seedha plan yeh hai. Har sawaal ke saath model ko Sahaj ke saare documents de do. Use jawaab dhoondhne do. Do limits is plan ko rok dete hain.

Pehla limit context window hai. Yeh model ki mez hai: jo mez par aaye, wahi ek baar mein padha jaata hai. Sahaj ki poori library mein help pages, policies, terms aur circulars the. Woh lagbhag 400 page ki thi. Woh mez par fit hi nahi hoti.

Doosra limit cost hai. 400 page lagbhag 2 lakh tokens ke hote hain. Token lafz ka ek Lego ki eent jaisa tukda hai, aur paisa eent ginkar lagta hai. Imran ka maana hua price ₹250 per million tokens tha. Toh ek sawaal ka jawaab ₹50 mein padta. Mahine ke 1 lakh sawaalon par ₹50 lakh lagte. Ek chhote sawaal ke liye poori library bhejna aisa hai jaise ek chitthi pahunchane ke liye lorry kiraye par lena.

Isliye aam tareeka alag hai. Aap documents ko pehle se tukdon mein kaat kar store kar lete hain. Phir har sawaal ke liye sirf woh kuch tukde bhejte hain jo kaam ke lagte hain. In tukdon ko *chunks* kehte hain. Kaatne ke kaam ko *chunking* kehte hain. Soch lijiye, lambi kitaab se kaate gaye index cards. Idea batana aasaan hai. Mushkil yeh tay karna hai ki kahan kaatna hai.

## Ek policy ko kaatne ke 3 tareeke

Imran ne ek customer ki tarah sawaal poochhe. Anaya ne policy ko 3 alag tareekon se kaata. Table har round dikhati hai.

Table: Ek hi policy ko kaatne ke 3 tareeke
| Round | Kaise kaata gaya | Kya kaam kiya | Kya fail hua |
| --- | --- | --- | --- |
| 1 | 4-4 page ke 3 bade tukde | Bill do baar bharne ka sawaal page 6 ke ek paragraph se hal ho gaya | Ek paragraph ke liye 4 page bheje gaye. Yeh dheema, mehnga aur dhundhla hai. Kisi sarkari utility ko payment ke sawaal mein page 6 ka rule aur page 9 ka exception dono chahiye the. Woh alag tukdon mein pade the |
| 2 | Aadhe page ke 20 chhote tukde | Pehle sawaal ne sirf wahi paragraph nikaala jo chahiye tha, sasta aur saaf | Rule aur uska exception alag-alag parchiyon mein the. Kuch yeh pakka nahi karta tha ki dono chune jaayein. Agar sirf rule model tak pahunchta, toh woh poore confidence se adhura jawaab deta |
| 3 | Har section ka ek tukda, aur har section ke aakhri 2 sentences agle section ki shuruaat mein copy kiye gaye | Zyadatar tukdon ka context bacha raha. "Exceptions" apna alag section ban gaya, toh exceptions ke sawaal se woh mil sakta tha | Jis sawaal ko alag sections ka rule aur exception dono chahiye, woh ab bhi fail ho sakta tha |

Doosre round mein Farah ne ek parchi uthayi aur padhi. "The aforesaid amount shall be refunded within sixty days."

Anaya ne poochha, "Kaun si amount?"

"Bilkul yahi," Farah ne kaha. Kaun si amount? Kisko refund hogi? "Aforesaid" kya tha? Sentence achhi English mein tha, par uska koi matlab nahi tha. Use pichhle sentence se kaat diya gaya tha. Wahi sentence batata tha ki amount kya hai.

::: def Orphaned chunk
Chitthi se phate ek page ki tarah sochiye. Orphaned chunk ka document se kat jaane ke baad koi matlab nahi nikalta. Woh pichhle tukde ki kisi cheez ki taraf ishaara karta hai. Documents mein aise ishaare bhare hote hain, khaaskar legal documents mein: "the above", "this scheme", "such cases".
:::

Page padhne wale ke paas uske pehle ka paragraph bhi hota hai. Chunk ke paas nahi hota. Jab model ko koi orphan dikhaya jaata hai, toh woh wahi karta hai jo woh har gap ke saath karta hai. Woh gap ko bhar deta hai. Isi wajah se teesre round mein overlap tha. Har section ka aakhir agle section ki shuruaat mein dohraya gaya.

## Koi sahi size nahi hota

Anaya ko ummeed thi ki use chunk ka sahi size pata chalega. Use pata chala ki aisa koi size hai hi nahi. Har tareeka apne tareeke se fail hota hai.

Bade tukde mehnge aur dhundhle hote hain. Chhote tukde sasta aur saaf hote hain, par unka context kho jaata hai. Structure ke hisaab se kaatne par har tukde ke andar matlab bacha rehta hai. Lekin jo jawaab kisi boundary ke aar-paar hota hai, woh kho jaata hai. Yeh cake kaatne jaisa hai: har cut kahin na kahin kuch crumbs chhod deta hai. Sahi choice is par hai ki aapke documents kaise dikhte hain. Yeh is par bhi hai ki log asal mein kya poochhte hain.

::: key Jo failure aapne chuni, uska naam lijiye
Imran ka design review ke liye ek rule tha. Batao kaun si failure chuni gayi, aur kyun. Jo team apne tareeke ka nuksaan naam se nahi bata sakti, usne koi choice nahi ki. Usne bas ek default utha liya hai.

Farah ne Sahaj policy ke liye yeh line likhi aur board par laga di. Section ke hisaab se kaato, 2 sentences ke overlap ke saath. Isse ek clause ke sawaalon ke saaf jawaab milte hain. Aise jawaab kho jaate hain jinhe alag sections ka ek clause aur uska exception chahiye. Isliye unhe jaan-boojh kar test kiya jaata hai.
:::

## Wahi problem, guard mein

Us shaam lagbhag saat baje Anaya ne dekha ki guard ke saath bhi yahi problem hai. Kuch customers message nahi likhte. Woh poora email paste kar dete hain, 3,000 words ka pura thread. Guard ka jo hissa naam aur jagah dhoondhta hai, woh ek baar mein thoda hi text padhta hai. Toh use bhi thread ko tukdon mein kaatna padega.

Maan lijiye usne kisi number ke beech mein kaat diya. Ek tukda "4321 56" par khatam hoga. Agla "78 9012" se shuru hoga. Padhne wali kisi cheez ko koi bhi tukda Aadhaar number (12 digit ka identity number) jaisa nahi dikhega. Anaya ne whiteboard par woh number banaya, ek line ke aar-paar, jaise koi gaadi lane ki line par chadhi ho. Guard seedha uske paas se nikal jaata.

Yeh wahi failure thi jo rule aur exception ke saath thi. Ek hi cheez ke do aadhe hisse do alag jagah the, aur akele dono bematlab. Ilaaj bhi wahi tha. Anaya ne use rules ki tarah likha.

Table: Guard ko jo text padhna hai, use kaatne ke rules
| Rule | Wajah |
| --- | --- |
| Sentence ke aakhir mein ya khaali line par kaato | Har tukde ke andar matlab bacha rehta hai |
| Digits ki ek run ke beech mein kabhi mat kaato | Beech se tuta identity number dono hisson ko dikhai nahi deta |
| Lagataar tukde edge par thode words share karein | Jo cheez kaat ke aar-paar ho, woh kam se kam ek tukde mein poori dikhti hai |
| Boundary par bilkul rakhe numbers se test karo | Failures jaan-boojh kar pakdi jaati hain, ittefaq se nahi |

Imran ne use kaha ki ise answer key (jaise sawaalon ki list jinke sahi jawaab pehle se pata hain) mein row 11 bana de: ek number jo cut par hai.

## Summary

Har sawaal ke saath model ko poori library nahi di ja sakti. Woh mez par fit nahi hogi, aur har token ke paise dene padte hain. Aam jawaab yeh hai ki documents ko pehle se chunks mein kaat lo. Phir sirf woh kuch bhejo jo kaam ke lagte hain. Isliye kaatna hi sabse mushkil hissa ban jaata hai.

- Bade chunks mehnge aur dhundhle hote hain. Chhote chunks saaf hote hain par context kho dete hain. Jo chunk pichhle tukde ki kisi cheez ki taraf ishaara karta hai, woh orphan hai. Model us gap ko andaaze se bhar dega.
- Chunk ka koi sahi size nahi hota. Har choice kahin na kahin fail hoti hai. Jo failure aap maante hain, uska naam lijiye aur use jaan-boojh kar test kijiye.
- Wahi savdhaani us text par bhi lagti hai jise guard ko kaatna padta hai. Identity number ko kabhi beech se mat todiye. Bagal ke tukdon ko thoda overlap karne dijiye.

Agle chapter mein Anaya khud search engine ban jaati hai. Uske paas bees index cards hain, aur Farah customer hai.
