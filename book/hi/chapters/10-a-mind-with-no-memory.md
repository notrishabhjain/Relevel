---
title: Ek Dimaag Jise Kuch Yaad Nahi Rehta
summary: Language model ek goldfish jaisa hai. Har message ke baad woh sab bhool jaata hai. Chatbot ko bas yaad rakhta hua lagta hai, kyunki app har baar poori chat dobara bhej deta hai. Aap dekhte hain ki yeh kaise hota hai, ismein kitna kharcha aata hai, aur privacy problem kaise badi ho jaati hai.
course: ch15b
goals:
  - samjha paana ki language model kyun bhool jaata hai, aur chatbot ki yaaddasht asal mein kahan se aati hai
  - hisaab laga paana ki chat lambi hone par uska kharcha kaise badhta hai
  - gina paana ki chat model ki mez se badi ho jaaye toh app kya kar sakta hai
  - bata paana ki purani chat dobara bhejne ka privacy par kya asar padta hai
terms:
  - stateless | goldfish jaisa bhulakkad: requests ke beech kuch nahi rakhta, isliye har call zero se shuru hoti hai, aur model ko nahi pata ki aapne abhi ek pal pehle usse baat ki thi | 
  - conversation history | chat ke pichhle messages, ledger ke pannon jaise; model ko sab yaad lage, iske liye app ko inhe har naye message ke saath dobara bhejna padta hai | 
---

Sahaj ke office ke neeche jo mithai ki dukaan hai, uske maalik ne kabhi kisi regular se nahi poochha ki use kya chahiye. 19 saal mein ek baar bhi nahi. Use bas pata hota tha. Mrs. Apte har Thursday paav kilo kaju katli leti thi. Paas ki pharmacy ka ladka ek garam jalebi leta tha aur chhutte paise deta tha. Koi anjaan aadmi "wahi jo hamesha" maangta, toh maalik muskura deta. Woh kehta ki use abhi nahi pata ki "wahi" kya hai.

Ek dopahar Imran aur Anaya laptop lekar wahin neeche gaye. Pichhle din Anaya ne ek seedha sawaal poochha tha. Chatbot mujhe yaad kyun nahi rakhta? Dukaan is sawaal par sochne ki achhi jagah thi. Maalik apne customers ke baare mein sab yaad rakhta hai. Model kisi ke baare mein kuch yaad nahi rakhta. Yahi ek farq har chatbot ka kharcha tay karta hai. Aur yahi project ki privacy problem ko Anaya ke socha hua se bada bana deta hai.

## Case: wahi machine, ek second baad

Imran ne pichhli shaam wali window kholi. Usne type kiya, "My name is Anaya and I work on loans." Model ne kaha ki aapse milkar achha laga. Phir poochha ki woh aapke loans mein kaise madad kar sakta hai.

Phir Imran ne window saaf ki aur type kiya, "What is my name?" Model ne kaha ki uske paas aapka naam nahi hai. Usne aapse naam batane ko kaha.

Anaya ne bhaunhein sikodi. Ek second pehle model usi se baat kar raha tha. Imran ne kaha ki woh kisi se baat kar raha tha, haan. Doosri call ko pehli call ka kuch pata hi nahi tha.

Neeche wala maalik kal ki baatein aaj tak saath laata hai. Model bilkul ulta karta hai. Woh goldfish jaisa hai. Woh *stateless* hai. Matlab woh ek request se doosri request tak kuch nahi rakhta. Har call zero se shuru hoti hai.

## Yaaddasht aati kahan se hai

Anaya ka ek jaayaz aitraaz tha. Usne chatbot use kiya tha. Usne usse lambi chat ki thi, aur use pata tha ki teen message pehle usne kya kaha tha. Toh use yaad toh rehta hi hai.

Imran ne kaha ki chatbot yaad nahi rakhta. Application rakhta hai. (Application, yaani app, model ke aas-paas ka program hai.)

Usne dukaan ka ledger uthaya. Moti jild aur laal kapde ke cover wali ek bhaari kitaab. Usne use khol kar pakda aur kaha, maan lijiye maalik ko kuch bhi yaad nahi. Toh har customer ko ledger sahi page par khol kar uske saamne rakhna padega. Tab woh padh sakta hai ki ab tak kya baat hui.

Model bhi isi haal mein hai. Woh sirf wahi dekhta hai jo is ek request mein table par rakha hai. Isliye jab Anaya ne apna paanchva message bheja, app ne pehle chaar message dobara bheje. Naya message sabse aakhir mein laga diya.

Phir Imran ne karke dikhaya. Usne ek hi request mein teen cheezein daali: pehla message, model ka jawaab, aur sawaal "What is my name?" Jawaab turant aa gaya. "Your name is Anaya."

::: def Conversation history
Chat ke pichhle messages, ledger ke pannon jaise. Model ko sab yaad lage, iske liye app ko inhe har naye message ke saath dobara bhejna padta hai. Model ko iske baare mein kuch pata nahi hota. Jo yaaddasht lagti hai, woh asal mein app ka ledger haath mein thama dena hai.
:::

## Yaad rakhne ki keemat

Ab agli baat. History har baar saath jaati hai. Isliye har message agli request ko bada bana deta hai. Aur har token ke paise lagte hain (token matlab shabd ka chhota tukda, Lego ki ek eent jaisa). Jitni baar woh bheja jaaye, utni baar lagte hain.

Imran ne ek napkin li aur ek example banaya. Maan lijiye chatbot har request ki shuruaat apni 300 token ki instructions se karta hai. Aur har exchange 100 token aur jodta hai. Exchange yaani customer ka message aur uska jawaab. Table dekhiye ki kya hota hai.

Table: Baatcheet ke saath request ka size kaise badhta hai
| Message number | Kya bheja jaata hai | Tokens |
| --- | --- | --- |
| 1 | Instructions aur pehla message | lagbhag 340 |
| 10 | Instructions, 9 pichhle exchanges aur naya message | lagbhag 1,240 |
| 20 | Instructions, 19 pichhle exchanges aur naya message | lagbhag 2,240 |

Aakhri row dekhiye. 20va message pehle message se 6 guna se zyada mehnga hai. 20 message ki poori chat jodiye. Lagbhag 25,800 token bheje gaye. Agar chatbot kuch yaad na rakhta, toh kul lagbhag 6,800 hota.

Yeh aise hai jaise har SMS ke peeche poori purani chat chipka kar bhejna. Isliye chat ki keemat woh nahi jo insaan ne type kiya. Keemat woh hai jo app apne saath dhota hai.

## Jab baatcheet fit nahi hoti

Isi hisaab mein ek doosri problem chhupi hai. Anaya ne use khud pakda. Context window model ki mez jaisi hai. Uska size tay hai. Chat kaafi lambi ho jaaye, toh woh mez par nahi samayegi.

Kuch na kuch chhodna padega. Yeh chunaav model nahi karta. App karta hai. Table mein aam options hain, aur har ek mein kya jokhim hai.

Table: Lambi history ke saath application kya kar sakta hai
| Option | Matlab | Kya risk hai |
| --- | --- | --- |
| Sabse purane messages hata do | Sirf sabse haal ke messages rakho | Customer ne shuru mein jo baatein batayi thi, woh kho jaati hain |
| Purane messages ki jagah ek summary rakho | Jo kaha gaya uska chhota sa byora rakho | Summary mein kuch zaroori baat chhoot sakti hai |
| Customer ke baare mein save kiye facts dhoondho | Sirf kuch store kiye hue facts bhejo | Facts sahi rakhne padte hain, aur private bhi |
| Kaam ka state database mein rakho | Baatcheet ki jagah state bhejo | Kaam aisa hona chahiye jise state ke roop mein likha ja sake |

Ise bhari mez saaf karne jaisa samajhiye. Aap sabse purane kaagaz phenk sakte hain. Ya unki jagah ek chhota note laga sakte hain. Jis bhi product mein memory milti hai, usne inmein se koi ek tareeka chuna aur banaya hai. Model dene wali company inmein se kuch nahi deti.

## Jo Anaya ne abhi tak nahi dekha tha

Anaya ne chupchaap apni jalebi khatam ki. Phir woh dheere se boli, jaise sochte hue. Poori history har baar saath jaati hai. Toh message 2 mein type hua number message 3 ke saath phir jaata hai. Phir message 4 ke saath. Aur aise hi aage.

Imran ne sar hilaya. Woh chat ke aakhir tak jaata rehta hai. Maan lijiye koi customer 20 message ki chat ke message 2 mein apna Aadhaar number type kare. Woh number bahar ki company ke paas 18 baar aur pahunchega. Imran ne yeh pichhli raat dekh liya tha, Anaya ke jaane ke baad. Aur usne intezaar kiya tha ki Anaya ise khud dhoondhe.

Isse guard ke baare mein Anaya ki soch badal gayi. (Guard woh tool hai jo personal details dhoondhta aur chhupata hai.) Woh sochti thi ki guard har naya message aate hi dekh leta hai. Lekin maan lijiye koi number sirf sabse naye message mein pakda gaya. Agar woh history mein khula pada rahe, toh har agle message ke saath phir chala jaata hai. Yeh ledger mein chipke ek raaz bhare parche jaisa hai. Har customer ke saath woh phir se padh diya jaata hai.

::: key Store karne se pehle saaf kijiye
Guard sirf sabse naya line dekhe, yeh kaafi nahi hai. Uske paas do raaste hain. Woh poori history ko aisi cheez maane jisme raaz ho sakta hai, aur har call par check kare.

Ya woh har line ko aate hi ek baar saaf kar de. Tab history mein wahi jaata hai jo saaf ho chuka hai. Anaya ne doosra raasta chuna. Usne use design rule ki tarah likh liya: store karne se pehle saaf karo, sirf bhejne se pehle nahi.
:::

Jab woh log uthne lage, maalik ne counter par kaagaz ka ek chhota packet rakha. "Madam ke liye," usne kaha. "Kaju katli. Aaj Thursday hai." Anaya hans padi. Kai hafton mein yeh uski pehli hansi thi.

## Summary

Language model stateless hai. Woh goldfish jaisa hai. Woh requests ke beech kuch nahi rakhta, aur har call zero se shuru hoti hai.

- Chatbot isliye yaad rakhta lagta hai, kyunki app har naye message ke saath chat history dobara bhejta hai. Product yeh memory khud banata hai, aur uske paise bhi deta hai.
- History dobara bheji jaati hai, isliye har message pichhle se zyada mehnga padta hai. Chat ka kharcha uski lambai se kaafi tezi se badhta hai.
- Chat context window se badi ho jaaye, toh app purane messages hata sakta hai, unki summary bana sakta hai, saved facts dhoondh sakta hai, ya kaam ka state rakh sakta hai. Chunaav app ka hota hai.
- Ek baar type ki gayi detail har agle message ke saath dobara jaati hai, jab tak use store karne se pehle saaf na kiya jaaye.

Agle chapter mein Anaya un shabdon par aati hai jinhe woh khud badal sakti hai: woh model ko kya karne ko kehti hai, aur kaise kehti hai.
