---
title: Ek Baar Mein Padhne Ke Liye Bahut Lamba
summary: Yeh dekhne ke liye ki chatbot Sahaj ke apne documents se sawaalon ke jawaab kaise deta hai, product manager ek policy ko teen baar kainchi se kaatati hai. Chapter batata hai ki documents kyun baante jaate hain, chunking kya hai, aur kaatne ka koi ek sahi tareeka kyun nahi.
course: ch3
goals:
  - samjhana ki model ko har sawaal ke saath poori library kyun nahi di ja sakti
  - chunks aur chunking batana, aur dekhna ki bade, chhote aur structure-aadhaarit chunks har ek kaise fail hote hain
  - orphaned chunk pehchaanna
  - wahi saavdhaani us text par lagana jo guard ko khud kaatna padta hai
terms:
  - chunk | ek lambe document ka ek tukda, itna chhota ki akela store kiya aur bheja ja sake | chunks
  - chunking | lambe documents ko chunks mein todna, yaani yeh tay karna ki kahan kaatna hai | 
  - orphaned chunk | aisa chunk jiska document se kaat dene ke baad koi matlab nahi nikalta, kyunki woh kisi aisi cheez ka zikr karta hai jo pichhle tukde mein thi | orphaned chunks, orphan chunk
---

April ke ek Friday ko Imran Qureshi ne Anaya se kaha ki guard banane se pehle use yeh jaanna chahiye ki chatbot kuch jaanta kaise hai. Sawaal use bus mein aaya tha. Chatbot ko Sahaj ke late-fee niyam kabhi sikhaye nahi gaye the, aur pehle hafte mein usne dekha tha ki jab model ke paas jawaab nahi hota toh woh gadh deta hai. Phir bhi zyadatar waqt chatbot sahi policy batata tha. "Use sahi pages dikhaye jaate hain," Imran ne kaha. "Poori chaal yahi hai. Yeh dikhne mein jitna lagta hai usse mushkil hai, aur achhe se karna aur bhi mushkil."

Yeh chapter batata hai ki sahi pages kaise chune jaate hain, us hisse se shuru karke jo pehle aata hai: lambe documents ko tukdon mein kaatna. Anaya ne ise ek kainchi aur baarah page ke printout se seekha.

## Case: farsh par ek policy

Sahaj ki *Late Payment and Refund Policy* baarah page ki thi. Imran ne ek stapled printout glass room ke farsh par rakha aur uske paas narangi haathon wali kainchi rakhi. Usne Anaya se kaha ki woh kaatna haath se kare, bina software ke, taaki use mehsoos ho ki isme kya lagta hai. Farah Sheikh, jo wahan se guzri, farsh par aise baith gayi jaise woh kisi bahaane ka intezaar kar rahi thi. Aage ke teen round chapter ka saar hain.

## Sab kuch kyun nahi bhejte

Sabse seedhi yojna yeh hai ki Sahaj ke saare documents har sawaal ke saath model ko de diye jaayein aur model jawaab dhoondh le. Do seemayein ise na-mumkin banati hain.

Pehli context window hai. Help pages, policies, terms aur circulars ki poori library lagbhag chaar sau page ki thi, aur woh fit nahi hoti. Doosri kharcha hai. Chaar sau page lagbhag do lakh token hote hain. Imran ke kalpanik daam ₹250 dus lakh token par, ek sawaal ka jawaab dene mein ₹50 lagte, aur ek lakh sawaal mahine mein ₹50 lakh. Ek chhote se sawaal ka jawaab dene ke liye poori library bhejna ek chitthi uthane ke liye lorry kiraye par lene jaisa hai.

Maanak tareeka yeh hai ki documents ko pehle se tukdon mein kaat liya jaaye, store kar liya jaaye, aur har sawaal ke liye sirf woh kuch tukde bheje jaayein jo prasangik lagte hain. Yeh tukde *chunks* hain, aur kaatna *chunking*. Vichaar kehna aasaan hai, aur mushkil poori tarah is mein hai ki kahan kaatna hai.

## Ek policy ko teen tarah kaatna

Imran ne customer ki tarah sawaal rakhe, aur Anaya ne policy ko teen tarah kaata.

Table: Ek hi policy ko kaatne ke teen tareeke
| Round | Kaise kaata | Kya kaam aaya | Kya fail hua |
| --- | --- | --- | --- |
| 1 | Chaar-chaar page ke teen bade tukde | Bill do baar bharne ka sawaal page chhe ke ek paragraph se hal ho gaya | Ek paragraph ke liye chaar page bheje gaye, jo dheema, mehnga aur dhundhla hai. Sarkari utility ko bhugtaan ke sawaal ke liye page chhe ka niyam aur page nau ka uska apvaad chahiye tha, jo alag tukde mein tha |
| 2 | Aadhe-aadhe page ke bees chhote tukde | Pehla sawaal sirf wahi paragraph le aaya jo chahiye tha, sasta aur saaf | Niyam aur uska apvaad alag parchiyon mein the, aur kuch ne yeh pakka nahi kiya ki dono chune jaayein. Agar sirf niyam model tak pahunchta, toh woh aatmavishwaas ke saath jawaab deta par adhoora |
| 3 | Har section ka ek tukda, har section ke aakhri do vaakya agle ke shuru par copy kiye gaye | Zyadatar tukdon ne apna sandarbh banaye rakha. "Exceptions" ek alag section ban gaya aur apvaadon ke sawaal se mil sakta tha | Jis sawaal ko alag-alag sections ke niyam aur apvaad ek saath chahiye hon, woh phir bhi fail ho sakta tha |

Doosre round mein Farah ne ek parchi uthayi aur zor se padhi: "The aforesaid amount shall be refunded within sixty days." Anaya ne poochha ki kaun si raashi. Farah ne kaha ki wahi toh uska sawaal tha: kaun si raashi, kisko refund, aur aforesaid kya? Vaakya achhi English mein tha aur bekaar tha, kyunki use pichhle vaakya se kaat diya gaya tha, jisme batata tha ki raashi kya hai.

::: def Orphaned chunk
Aisa chunk jo apne document se kat jaane ke baad koi maayne nahi rakhta, kyunki woh apne se pehle ke tukde mein kisi cheez ka zikr karta hai. Documents mein aise reference bhare hote hain, khaas taur par kanooni, jaise "the above", "this scheme", "such cases".
:::

Page padhne wale ke paas uske pehle ka paragraph hota hai. Chunk ke paas nahi hota. Jab model ko orphan dikhaya jaata hai, woh waisa hi karta hai jaisa woh khaali jagah ke saath hamesha karta hai: use bhar deta hai. Teesre round mein ek section ka ant agle ke shuru mein dohraane ka yahi kaaran tha.

## Koi sahi size nahi hai

Anaya ne ummeed ki thi ki use chunk ka sahi size pata chalega, aur uski jagah usne seekha ki koi hai hi nahi. Har tareeka apne dhang se fail hota hai. Bade tukde mehnge aur dhundhle hain. Chhote tukde sasta aur saaf hain par apna sandarbh kho dete hain. Structure ke saath kaatne se har tukde ke andar matlab bacha rehta hai aur woh jawaab kho jaate hain jo kisi seema ko paar karte hain. Sahi chunaav is par nirbhar hai ki documents kaise dikhte hain aur log sach mein kya poochhte hain.

::: key Jo failure chuna usse naam do
Imran ka design review ka niyam tha ki bataya jaaye ki kaun si failure chuni gayi aur kyun. Jo team apne tareeke ka nuksaan nahi bata sakti, usne chunaav nahi kiya. Usne ek default maan liya. Farah ne Sahaj policy ke liye vaakya likha aur board par chipka diya: section ke hisaab se kaato, do vaakya overlap ke saath, jisse ek clause ke baare mein ke sawaalon ke saaf jawaab milte hain aur woh jawaab chhootte hain jo alag sections ke clause aur uske apvaad ko ek saath maangte hain, isliye unhe jaanboojh kar test kiya jaata hai.
:::

## Wahi samasya, guard mein

Shaam ke lagbhag saat baje Anaya ko dikha ki guard ki bhi wahi samasya hai. Kuch customers message nahi likhte. Woh ek email paste kar dete hain, teen hazaar shabd ka poora thread. Guard ka woh hissa jo naam aur jagah dhoondhta hai ek baar mein sirf seemit text padh sakta hai, isliye use thread ko bhi tukdon mein kaatna padta.

Agar woh kisi number ke beech mein kaatta, toh ek tukda "4321 56" par khatam hota aur agla "78 9012" se shuru hota, aur dono mein se koi bhi padhne wale ko Aadhaar number nahi lagta. Usne number ko whiteboard par ek line ke upar se guzarte dikhaya, jaise gaadi lane ke nishaan par. Guard seedhe use paar kar jaata.

Failure wahi hai jo niyam aur apvaad ki thi: ek cheez ke do aadhe hisse do jagah, har ek akele maayne-heen. Upaay bhi wahi hai, aur Anaya ne use niyam ki tarah likha.

Table: Guard ko jo text padhna hai use kaatne ke niyam
| Niyam | Kaaran |
| --- | --- |
| Vaakya ke ant mein ya khaali line par kaato | Har tukde ke andar matlab banaye rakhta hai |
| Ankon ki ek run ke beech kabhi mat kaato | Tuta hua pehchaan ka number dono aadhe hisson ke liye dikhai nahi deta |
| Lagaataar tukdon ko kinaare par kuch shabd saajha karne do | Jo cheez kaat par faili ho woh kam se kam ek tukde mein poori dikhti hai |
| Seema par rakhe numbers ke saath test karo | Failure ittefaq se nahi, jaanboojh kar milti hai |

Imran ne Anaya se ise answer key mein row gyarah ke roop mein daalne ko kaha: kaat par ek number.

## Saaraansh

Model ko har sawaal ke liye poori library nahi di ja sakti, kyunki woh fit nahi hogi aur kyunki har token ka paisa lagta hai. Aam jawaab hai documents ko pehle se chunks mein kaatna aur sirf woh kuch bhejna jo prasangik lagte hain, jisse kaatna sabse mushkil hissa ban jaata hai.

- Bade chunks mehnge aur dhundhle hain. Chhote chunks saaf hain par sandarbh kho dete hain. Jo chunk apne se pehle ke tukde ki kisi cheez ka zikr karta hai woh orphan hai, aur model us khaali jagah ko anumaan se bharega.
- Chunk ka koi sahi size nahi hai. Har chunaav kahin fail hota hai, aur upyogi tareeka yeh hai ki jis failure ko sweekar kiya gaya use naam diya jaaye aur jaanboojh kar test kiya jaaye.
- Wahi saavdhaani us text par bhi lagti hai jo guard ko khud kaatna padta hai: pehchaan ke number ko kabhi beech se mat todo, aur padosi tukdon ko overlap karne do.
