---
title: Ek Dimaag Jise Kuch Yaad Nahi Rehta
summary: Language model ek request se doosri request tak kuch yaad nahi rakhta. Chatbot mein jo yaaddasht dikhti hai, woh asal mein application ka poori baatcheet dobara bhej dena hai. Chapter batata hai ki yeh kaise hota hai, ismein kitna kharcha aata hai, aur yeh project ki sabse badi privacy problem ko kaise badal deta hai.
course: ch15b
goals:
  - samjha paana ki language model stateless kyun hai, aur chatbot ki dikhne wali yaaddasht kahan se aati hai
  - hisaab laga paana ki baatcheet lambi hone par uska kharcha kaise badhta hai
  - gina paana ki baatcheet context window se bahar nikal jaaye toh application ke paas kaun se options hain
  - bata paana ki history dobara bhejne ka privacy par kya asar padta hai
terms:
  - stateless | requests ke beech kuch bhi na rakhna: har call zero se shuru hoti hai, aur model ko nahi pata ki aapne abhi ek pal pehle usse baat ki thi | 
  - conversation history | chat ke pichhle messages, jinhe app ko har naye message ke saath dobara bhejna padta hai, agar woh chahta hai ki model ko sab yaad lage | 
---

Sahaj ke office ke neeche jo mithai ki dukaan hai, uske maalik ne 19 saal mein kabhi kisi regular se nahi poochha ki use kya chahiye. Use pata hota tha. Mrs. Apte har Thursday paav kilo kaju katli leti thi. Paas ki pharmacy ka ladka ek garam jalebi leta tha aur chhutte paise deta tha. Agar koi anjaan aadmi aakar "wahi jo hamesha" maangta, toh maalik pyaar se keh deta ki use abhi nahi pata ki woh kya hai.

Ek dopahar Imran aur Anaya laptop lekar wahin neeche gaye. Anaya ne pichhle din ek sawaal poochha tha: chatbot mujhe yaad kyun nahi rakhta? Dukaan is sawaal ke liye achhi misaal thi. Maalik apne customers ke baare mein sab kuch yaad rakhta hai, aur model kisi ke baare mein kuch yaad nahi rakhta. Yahi farq har chatbot ka kharcha tay karta hai. Aur aage dekhenge ki yahi farq us privacy problem ko bhi shape deta hai, jis par poora project tika hai.

## Case: wahi machine, ek second baad

Imran ne pichhli shaam wali window kholi aur type kiya: "My name is Anaya and I work on loans." Model ne kaha ki aapse milkar achha laga, aur poochha ki woh aapke loans mein kaise madad kar sakta hai. Phir Imran ne window saaf ki aur type kiya: "What is my name?" Model ne jawaab diya ki uske paas aapka naam nahi hai, aur aapse naam batane ko kaha.

Anaya ne kaha ki abhi ek second pehle toh model usi se baat kar raha tha. Imran ne kaha ki woh kisi se baat kar raha tha, haan. Lekin doosri call ko pehli call ka kuch pata hi nahi tha. Neeche wala maalik kal ki baatein aaj tak saath le aata hai. Model bilkul ulta karta hai. Woh *stateless* hai. Matlab woh ek request se doosri request tak kuch bhi nahi rakhta, isliye har call zero se shuru hoti hai.

## Yaaddasht aati kahan se hai

Anaya ko yeh baat jami nahi. Usne kaha ki chatbot toh yaad rakhta hai. Usne chatbot se poori baatcheet ki thi, aur chatbot ko pata tha ki teen message pehle usne kya kaha tha. Imran ne kaha ki chatbot yaad nahi rakhta. Application rakhta hai.

Phir usne dukaan ka ledger uthaya. Moti jild aur laal kapde ka cover wali ek lambi kitaab. Usne use kholkar pakda aur kaha, maan lijiye ek customer andar aaye aur maalik ko kuch bhi yaad na ho. Toh customer ko har baar bolne se pehle ledger sahi page par khol kar maalik ke saamne rakhna padega, taaki woh padh sake ki ab tak kya baat hui. Model ke saath bhi yahi hota hai. Woh sirf wahi dekhta hai jo is request mein table par rakha hai. Jab Anaya ne apna paanchva message bheja, toh app ne pehle chaar messages dobara bheje, aur naya message sabse aakhir mein jod diya.

Imran ne yeh karke dikhaya. Usne ek hi request mein pehla message, model ka uska jawaab, aur naya sawaal "What is my name?" daal diya. Jawaab turant aa gaya: "Your name is Anaya."

::: def Conversation history
Chat ke pichhle messages, jinhe application ko har naye message ke saath dobara bhejna padta hai, agar woh chahta hai ki model ko sab yaad lage. Model ko iske baare mein kuch pata nahi hota. Jo yaaddasht lagti hai, woh asal mein application ka ledger haath mein thama dena hai.
:::

## Yaad rakhne ki keemat

History har baar bheji jaati hai, isliye har message agle message ko bada bana deta hai. Aur har token ke paise har baar lagte hain, jitni baar woh bheja jaaye. Imran ne ek napkin li aur ek example likha. Maan lijiye chatbot har request ki shuruaat apni 300 token ki instructions se karta hai. Aur har exchange, yaani customer ka message plus uska jawaab, 100 token jodta hai.

Table: Baatcheet ke saath request ka size kaise badhta hai
| Message number | Kya bheja jaata hai | Tokens |
| --- | --- | --- |
| 1 | Instructions aur pehla message | lagbhag 340 |
| 10 | Instructions, 9 pichhle exchanges aur naya message | lagbhag 1,240 |
| 20 | Instructions, 19 pichhle exchanges aur naya message | lagbhag 2,240 |

Bheesvaan message, pehle message se 6 guna se zyada mehnga hai. 20 message ki baatcheet mein jodkar lagbhag 25,800 token bheje jaate hain. Agar chatbot kuch yaad na rakhta, toh kul lagbhag 6,800 token hi jaate. Isliye baatcheet ki keemat woh nahi hai jo insaan ne type kiya. Keemat woh hai jo application ko apne saath dhona padta hai.

## Jab baatcheet fit nahi hoti

Isi hisaab ke andar ek doosra limit bhi chhupa hai, jo Anaya ne khud pakda. Context window ka size tay hai. Jo baatcheet kaafi der tak chalti rahe, woh ek din usmein fit nahi hogi. Tab application ko tay karna padta hai ki kya chhodna hai. Aur yeh faisla application ka hota hai, model ka kabhi nahi.

Table: Lambi history ke saath application kya kar sakta hai
| Option | Matlab | Kya risk hai |
| --- | --- | --- |
| Sabse purane messages hata do | Sirf sabse haal ke messages rakho | Customer ne shuru mein jo baatein batayi thi, woh kho jaati hain |
| Purane messages ki jagah ek summary rakho | Jo kaha gaya uska chhota sa byora rakho | Summary mein kuch zaroori baat chhoot sakti hai |
| Customer ke baare mein save kiye facts dhoondho | Sirf kuch store kiye hue facts bhejo | Facts sahi rakhne padte hain, aur private bhi |
| Kaam ka state database mein rakho | Baatcheet ki jagah state bhejo | Kaam aisa hona chahiye jise state ke roop mein likha ja sake |

Jis bhi product mein memory milti hai, usne inmein se koi ek tareeka chuna hai aur use khud banaya hai. Model dene wali company inmein se kuch nahi deti.

## Jo Anaya ne abhi tak nahi dekha tha

Anaya ne chupchaap apni jalebi khatam ki. Phir usne kaha, agar poori history har baar bheji jaati hai, toh jo number message 2 mein type hua, woh message 3 ke saath bhi jaayega, phir message 4 ke saath, aur aise hi aage. Imran ne haan kaha. Woh baatcheet ke aakhir tak jaata rehta hai. Maan lijiye koi customer 20 message wali chat ke doosre message mein apna Aadhaar number type kar de. Toh woh number bahar ki company ke paas 18 baar aur pahunchega. Imran ne yeh pichhli raat dekh liya tha, Anaya ke jaane ke baad. Aur usne intezaar kiya tha ki Anaya ise khud dhoondhe.

Is khoj se guard ke baare mein Anaya ki soch badal gayi. Woh socha karti thi ki guard ek aisa tool hai jo har naye message ko aate hi dekh leta hai. Lekin agar koi number sirf sabse naye message mein chhupa ho, aur history mein khula pada rahe, toh woh har agle message ke saath poora ka poora dobara chala jaayega.

::: key Store karne se pehle saaf kijiye
Guard sirf sabse naye message ko dekhe, yeh kaafi nahi hai. Ya toh use har call par poori history ko aisi cheez maanna hoga jisme koi secret ho sakta hai. Ya phir har line ko aate hi ek baar saaf karna hoga, taaki history mein wahi jaaye jo saaf ho chuka hai. Anaya ne doosra raasta design rule ki tarah likh liya: store karne se pehle saaf karo, sirf bhejne se pehle nahi.
:::

Jab woh log uthne lage, toh maalik ne counter par ek chhota sa kaagaz ka packet rakha. "Madam ke liye," usne kaha. "Kaju katli. Aaj Thursday hai." Anaya hans padi. Kai hafton mein yeh uski pehli hansi thi.

## Summary

Language model stateless hai. Woh requests ke beech kuch nahi rakhta, aur har call zero se shuru hoti hai.

- Chatbot isliye yaad rakhta hua lagta hai, kyunki application har naye message ke saath conversation history dobara bhejta hai. Kisi bhi product ki memory product khud banata hai, aur uske paise bhi khud deta hai.
- History dobara bheji jaati hai, isliye har message pichhle se zyada mehnga padta hai. Isliye baatcheet ka kul kharcha uski lambai se kaafi tezi se badhta hai.
- Baatcheet context window se badi ho jaaye, toh application ko tay karna padta hai ki purane messages hataaye, unki summary banaye, saved facts dhoondhe, ya kaam ka state rakhe. Yeh chunaav application ka hota hai.
- Ek baar type ki gayi detail har agle message ke saath dobara jaati hai, jab tak use store karne se pehle saaf na kiya jaaye.
