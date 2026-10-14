---
title: Matlab Se Dhoondhna
summary: Ek bazaar jahan ek hi dhandhe ki dukaanein ek gali mein hoti hain, product manager ko wahi tasveer deta hai jo use us idea ke liye chahiye jisne search ko bachaya, aur ek aise number ke liye bhi jis par shak karna chahiye. Chapter mein embeddings aur similarity scores aate hain.
course: ch5
goals:
  - samjha paana ki embedding text ko meanings ke ek map par kaise rakhti hai, taaki milte-julte matlab wale texts paas-paas baithein
  - similarity score padh paana, aur bata paana ki akela ek score kuch kyun nahi batata
  - un jagahon ke naam bata paana jahan Sahaj ke customers ke liye map ke galat hone ka darr hai
  - samjha paana ki map par paas hona aur kisi insaan ke liye risk hona, ek hi baat nahi hai
terms:
  - embedding | numbers ki ek lambi list jo kisi text ko meanings ke map par ek jagah de deti hai, taaki milte-julte matlab wale texts ke numbers bhi milte-julte hon, chaahe unme ek bhi word common na ho | embeddings
  - similarity score | lagbhag 0 se 1 ke beech ka ek number jo batata hai ki do embeddings kitni paas hain; jab tak aapko na pata ho ki bilkul achhe aur bilkul bure matches kitna score karte hain, tab tak iska matlab bahut kam hai | similarity scores, similarity
---

Pune ke purane hisse mein ek gali hai jahan har dukaan peetal bechti hai. Woh badi sadak ke peeche hai, aur itni tang hai ki delivery cart ko scooter se maafi maangte hue rukna padta hai. Ek chhor se doosre chhor tak usmein diye, ghantiyan, bartan, steel ki plates aur chhoti murtiyan milti hain, aisi dukaanon mein jo ek jaisi dikhti hain par hain nahi.

Thodi door aage kapde ki gali hai. Uske aage sookhe mewe ki gali. Jo nayi aane wali ek khaas diya dhoondh rahi hai, use dukaan ka naam jaanne ki zaroorat nahi. Use bas yeh pata hona chahiye ki kaun si gali mein jaana hai. Gali mein wahi milega jo woh dhoondh rahi hai, aur uske kareebi rishtedaar bhi.

Imran Qureshi us gali se dus minute ki doori par paida hua tha. Usne isi gali se samjhaya ki machine text ko uske matlab se kaise dhoondh sakti hai.

## Case: bazaar ek map ki tarah

Imran ne Anaya se kaha ki bazaar ko ek map ki tarah soche. Yeh dukaanon ka map nahi hai, usne kaha, yeh matlabon ka map hai. Duniya ke har sentence ki is par ek jagah hai. Jin sentences ka matlab milta-julta hai, woh ek hi gali mein khade hote hain. "When do I get my money back" aur "reimbursement of approved claims" padosi hain, chaahe unme ek bhi word common nahi. "What is the capital of Peru" kaafi door ka paidal safar hai.

Anaya ko table par padi Farah ki 20 cards yaad aayi, jinme se har ek ko pata hi nahi tha ki woh kis baare mein hai. Phir usne wahi sawaal poochha jo koi bhi poochhta. Yeh map banata kaun hai?

Machine banati hai, Imran ne kaha. Yeh ek alag, chhota model hai jo sirf isi kaam ke liye banaya gaya hai. Aap use text ka ek tukda dete hain, aur woh numbers ki ek lambi list wapas deta hai. Yeh numbers map par us text ke coordinates hain.

::: def Embedding
Numbers ki ek lambi list jo kisi text ko meanings ke map par ek jagah de deti hai, taaki milte-julte matlab wale texts ke numbers bhi milte-julte hon, chaahe unme ek bhi word common na ho. Machine ko sawaal samajhne ki zaroorat nahi. Use bas usse ek jagah par rakhna hota hai.
:::

Jab har card ko ek jagah mil jaati hai, toh sahi cards dhoondhna spelling ka sawaal nahi rehta. Woh doori ka sawaal ban jaata hai. Customer ka sawaal map par rakha jaata hai, sabse paas ke cards dhoondhe jaate hain, aur wahi model ko bheje jaate hain.

## Wahi 20 cards

Imran ne 20 cards ko pehle hi ek baar embedding model se guzaar diya tha. Coordinates ek chhoti si file mein save the. Ab usne wahi sawaal type kiya jisne Monday ko Anaya ko haraya tha: "Paisa kab milega?"

Woh intezaar, paise aur wapsi ke ilaake mein ja gira. Screen par sabse paas ke 3 cards ki list aayi. Sabse upar card 7 tha, jo kehta tha ki refund 7 working days mein process hota hai. Uske bagal mein ek number tha: 0.71.

Yeh number *similarity score* hai. Yeh dikhata hai ki sawaal card se kitna paas hai, ek aise scale par jo lagbhag zero se ek tak chalta hai. Anaya ne 0.71 ko achha maana. Imran ne poochha ki bura match kitna score karega, aur use dikhane ke liye sawaal ko 3 irrelevant cards ke saath chalaya.

Table: Ek sawaal ka 4 cards ke saath similarity score
| Card | Kaam ka hai? | Score |
| --- | --- | --- |
| Refund 7 working days mein process hota hai | Haan | 0.71 |
| Late payments par interest | Nahi | 0.38 |
| Registered mobile number badalna | Nahi | 0.31 |
| Company ka address | Nahi | 0.12 |

Asli text shayad hi kabhi lagbhag 0.1 se neeche score karta hai, isliye kaam ki range tang hai. Is system mein 0.51 ka matlab "aadha similar" nahi hai. Woh range ke neeche ke paas hai.

::: watch Akela score kuch nahi batata
Similarity score ka matlab tab tak kam hai jab tak aapko na pata ho ki bilkul achhe matches kitna score karte hain, aur bilkul bure matches kitna. Is context ke bina akela ek score bata dena kisi cheez ka saboot nahi hai.
:::

## Map kahan kharab hai

Map utna hi achha hai jitna woh text jisse embedding model ne seekha, aur woh zyadatar internet ka English text tha. Jo words us text mein kam the, woh ajeeb jagahon par pad jaate hain. Jo do cheezein users ko alag lagti hain, woh padosi ban sakti hain. Jo do cheezein users ko ek jaisi lagti hain, woh door-door pad sakti hain.

Imran ne Anaya se kaha ki Sahaj ke customers jo words use karte hain, unke baare mein socho. Table batati hai ki map kahan galat ho sakta hai.

Table: Sahaj ke liye map kahan galat ho sakta hai
| Words | Yeh risky kyun hain |
| --- | --- |
| Lakh aur crore | Aise units jo model ne million aur billion se kam dekhe hon |
| NEFT aur IMPS | Do tarah ke transfer jinhe aam insaan ek hi maanta hai aur accountant kabhi nahi maanta |
| Sarkari schemes ke naam | Woh sirf ek word se alag ho sakte hain aur unka matlab alag-alag amounts hota hai |
| Roman letters mein Hindi, jaise "paisa kab milega" | Model ne ise "when will I be refunded" se kam dekha hai |
| Sahaj ke internal product names | Do codenames company ke andar bahut alag cheezein the, aur model ke liye kuch nahi, jo unhe spelling ke hisaab se rakhta hai |

Imran ka rule tha ki users ke dhoondhne se pehle failures ke naam le lo.

Map ke use ke baare mein ek aur baarik baat bhi hai. Sawaal chhota hota hai aur sawaal ki tarah likha hota hai. Jis passage mein jawaab hai, woh lamba hota hai aur statement ki tarah likha hota hai. Achhe embedding models is baat ko dhyaan mein rakhkar train hote hain, aur unhe batana padta hai ki woh kis ko dekh rahe hain. Agar yeh galat kar diya jaaye, toh kuch toot-ta nahi. Results bas kharab ho jaate hain, aur koi error message iska zikr nahi karta.

## Map par guard

Phir Anaya ne dekha ki map guard ke us hisse mein madad kar sakta hai, jise woh apne mann mein mushkil wala hissa kehti thi. Ek spreadsheet mein usne 10 sentences likhe the. 5 kisi ek insaan ko pehchaan dete the, bina koi number ya naam diye, jaise "I am the sarpanch of Wadgaon and I also run the fair-price shop". 5 beezarar the.

Usne map se un saare 10 ko rakhwaya. Phir usne naapa ki har ek pehle sentence ke kitna paas khada hai: "I am the only diabetic patient in my village who had a transplant last year".

Table: 6 sentences ka pehle sentence se paas hona
| Sentence | Kya ek insaan ko pehchaanta hai? | Pehle ke saath score |
| --- | --- | --- |
| Sarpanch jo dukaan bhi chalata hai | Haan | 0.74 |
| Chawl ka akela ladka jo IIT mein hai | Haan | 0.66 |
| Ek aurat jo apne taluka ki akeli vet hai | Haan | 0.54 |
| What documents do I need to renew my driving licence? | Nahi | 0.41 |
| Ration order ke liye cash-on-delivery ka sawaal | Nahi | 0.58 |
| School fee refund ki complaint | Nahi | 0.55 |

0.58 ko dekhiye. Sabse zyada score karne wala beezarar sentence, pehle sentence ke un sentences se bhi zyada paas khada tha jo ek insaan ko pehchaante the, aur jinka score 0.54 tha. Matlab agar koi threshold un 3 pehchaan wale sentences ko pakad leta, toh woh 2 beezarar sentences ko bhi pakad leta.

Aisa kyun hua? Map sentences ko topic ke hisaab se group kar raha tha. Pehla sentence ek gaon, ek insaan aur ek hospital ke baare mein hai. Gaon mein ration order ka sentence paas hi girta hai, kyunki woh bhi ek gaon ke baare mein hai. Lekin sentence kisi ek insaan ko pehchaanta hai ya nahi, yeh topic ka sawaal nahi hai.

::: key Paas hona, risk hona nahi hai
Map woh cheezein dhoondhta hai jinka matlab sawaal ke matlab jaisa ho. Woh akela yeh nahi bata sakta ki koi sentence ek insaan ki taraf ishaara karta hai ya nahi. Anaya ko isse haar nahi lagi. Use zyada saaf dikha. Is quality ke liye use kuch aur jodna padega. Usne yeh finding ek table ki doosri row mein likhi, jisme dikhta hai ki har tareeka kahan jeetta hai: rule-based tareeka kahan jeetta hai, matlab-based tareeka kahan jeetta hai, aur kya kaam dono ke bas ka nahi.
:::

## Map kya nahi keh sakta

Map mein seedhe tareeke wali ek kamzori hai. Aap use aisa sawaal dein jiska jawaab kisi card mein nahi, toh bhi woh sabse paas ka card ek score ke saath wapas de deta hai. Score achhe match se kam hota hai, lekin zero nahi hota. System mein kuch nahi kehta ki yahan kisi ko nahi pata. Sabse kam bura card phir bhi model ko saboot ki tarah de diya jaayega.

Anaya ne kaha ki Monday ko bhi yahi sach tha. Imran sehmat hua ki yeh ab bhi sach hai.

Lekin ab text ko words ke saath-saath matlab se bhi dhoondha ja sakta tha. Toh yeh pata lagana mumkin tha ki system kitni baar galat hota hai. Agla kaam yahi tha, aur zyada zaroori bhi.

## Summary

Embedding text ke ek tukde ko meanings ke map par rakhti hai, numbers ki ek lambi list ke roop mein. Milte-julte matlab wale texts paas-paas khade hote hain, chaahe unme ek bhi word common na ho. Sahi tukde dhoondhna doori ka sawaal ban jaata hai.

- Doori ko similarity score ke roop mein bataya jaata hai. Jab tak aapko na pata ho ki bilkul achhe aur bilkul bure matches kitna score karte hain, iska koi matlab nahi.
- Map utna hi achha hai jitna text jisse usne seekha. Isliye woh local vocabulary ko galat jagah rakh sakta hai. Users ke dhoondhne se pehle failures ke naam le lijiye.
- Map par paas hona matlab aur topic ki baat hai, har woh quality nahi jo ek sentence mein ho sakti hai. Jo tareeka ek hi topic ke sentences dhoondhta hai, woh zaroori nahi ki unhe bhi dhoondhe jo kisi insaan ko pehchaante hain.
