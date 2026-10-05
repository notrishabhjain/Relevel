---
title: Ek Dimaag Jise Kuch Yaad Nahi Rehta
summary: Language model ek request se doosri tak kuch yaad nahi rakhta, aur chatbot ki jo yaaddasht dikhti hai woh application ka baatcheet ko dobara bhejna hai. Chapter batata hai ki yeh kaise kaam karta hai, ismein kya kharcha aata hai, aur yeh project ki kendriya privacy samasya ko kaise badalta hai.
course: ch15b
goals:
  - samjhana ki language model stateless kyun hai aur chatbot ki dikhne wali yaaddasht kahan se aati hai
  - ginna ki baatcheet ke lambe hone par uska kharcha kaise badhta hai
  - woh vikalp ginana jo application ke paas hain jab baatcheet context window se bada ho jaaye
  - history dobara bhejne ka privacy par kya asar hai, yeh batana
terms:
  - stateless | requests ke beech kuch bhi na rakhna: har call shoonya se shuru hoti hai, aur model ko nahi pata ki aapne abhi ek pal pehle baat ki thi | 
  - conversation history | chat ke pichhle messages, jinhe app ko har naye message ke saath dobara bhejna padta hai agar woh chahta hai ki model ko yaad rakhta hua lage | 
---

Office ke neeche ki mithai ki dukaan ke maalik ne unnees saal mein kabhi kisi regular se nahi poochha ki use kya chahiye. Use pata tha. Mrs. Apte naam ki ek customer Thursday ko paav kilo kaju katli leti thi, aur paas ki pharmacy ka ladka ek garam jalebi leta tha aur chhutte mein paise deta tha. Agar koi ajnabi "wahi jo hamesha" maangta, toh maalik pyaar se kehta ki use abhi nahi pata woh kya hai.

Imran aur Anaya ek dopahar laptop lekar wahin gaye, ek aise sawaal par baat karne jo Anaya ne pichhle din poochha tha: chatbot use yaad kyun nahi rakhta? Dukaan ek upyogi tulna deti hai, kyunki uska maalik apne customers ke baare mein sab kuch yaad rakhta hai aur model kisi ke baare mein kuch yaad nahi rakhta. Yeh antar har chatbot ka kharcha tay karta hai aur, jaisa chapter dikhata hai, us privacy samasya ko aakaar deta hai jis par project tika hai.

## Case: wahi machine, ek second baad

Imran ne pichhli shaam ki window kholi aur type kiya: "My name is Anaya and I work on loans." Model ne kaha ki use milkar achha laga aur poochha ki woh uske loans ke baare mein kaise madad kar sakta hai. Phir usne window saaf ki aur type kiya: "What is my name?" Model ne jawaab diya ki uske paas uska naam nahi hai aur use bataane ko kaha.

Anaya ne kaha ki model ek second pehle usse baat kar raha tha. Imran ke shabdon mein woh kisi se baat kar raha tha, aur doosri call ko pehli ka kuch pata nahi tha. Neeche ka maalik kal ko aaj mein le jaata hai. Model ulta karta hai. Woh *stateless* hai: woh ek request se doosri tak kuch nahi rakhta, isliye har call shuru se shuru hoti hai.

## Yaaddasht kahan se aati hai

Anaya ne etiraaz kiya ki chatbot toh yaad rakhta tha. Usne uske saath baatcheet ki thi, aur use pata tha ki teen message pehle usne kya kaha tha. Imran ne kaha ki chatbot yaad nahi rakhta. Application rakhta hai.

Usne dukaan ka ledger liya, ek lambi kitaab jiski jild kadi aur laal kapde ki thi, aur use khol kar pakda. Maan lijiye ek customer andar aaye aur maalik ko kuch yaad na ho. Har baar jab woh bole, use ledger sahi page par khol kar maalik ko dena padega, taaki woh padh sake ki kya kaha gaya tha. Model sirf wahi dekhta hai jo maujooda request mein table par hai. Jab Anaya ne apna paanchva message bheja, toh app ne pehle chaar dobara bheje, naya message aakhir mein jodkar.

Imran ne ise dikhaya. Usne ek hi request mein pehla message, model ka uska jawaab, aur sawaal "What is my name?" rakha. Jawaab turant aaya: "Your name is Anaya."

::: def Conversation history
Chat ke pehle ke messages, jinhe application ko har naye message ke saath dobara bhejna padta hai agar woh chahta hai ki model ko yaad lage. Model ko iska kuch pata nahi. Jo yaaddasht lagti hai woh application ka ledger saunpna hai.
:::

## Yaad rakhne ka kharcha

Kyunki history har baar bheji jaati hai, har message agle ko bada karta hai, aur har token har baar charge hota hai. Imran ne ek napkin liya aur ek udaharan likha. Maan lijiye chatbot har request ki shuruaat apne teen sau token ke instructions se karta hai, aur har exchange, customer ka message aur jawaab milkar, sau token jodta hai.

Table: Baatcheet mein request ka size kaise badhta hai
| Message number | Kya bheja jaata hai | Tokens |
| --- | --- | --- |
| 1 | Instructions aur pehla message | lagbhag 340 |
| 10 | Instructions, nau pichhle exchanges aur naya message | lagbhag 1,240 |
| 20 | Instructions, unnees pichhle exchanges aur naya message | lagbhag 2,240 |

Bisvan message pehle se chhe guna se zyada mehnga hai. Bees message ki baatcheet mein bheja gaya kul lagbhag 25,800 token hota hai. Agar chatbot kuch yaad na rakhta, toh kul lagbhag 6,800 hota. Isliye baatcheet ka kharcha woh nahi hai jo insaan ne type kiya. Woh woh hai jo application ko saath le jaana padta hai.

## Jab baatcheet fit nahi hoti

Wahi hisaab ek doosri seema chhupata hai, jo Anaya ne khud dhoondhi. Context window ek tay size ka hai, aur jo baatcheet kaafi lambi chale woh ab fit nahi hogi. Tab application ko tay karna hota hai ki kya chhodna hai, aur woh faisla application ka hota hai, model ka kabhi nahi.

Table: Lambi history ke saath application kya kar sakta hai
| Vikalp | Matlab | Kya khatra hai |
| --- | --- | --- |
| Sabse puraane messages hata do | Sirf sabse haal ke rakho | Customer ne shuru mein jo tathya diye woh kho jaate hain |
| Puraane messages ko saar se badal do | Jo kaha gaya uska chhota byora rakho | Saar mein kuch zaroori chhoot sakta hai |
| Customer ke bare mein save kiye tathya dhoondho | Sirf kuch store kiye tathya bhejo | Tathya sahi aur nijee rakhne padte hain |
| Kaam ki sthiti database mein rakho | Baatcheet ke bajaye sthiti bhejo | Kaam ko sthiti ke roop mein bayaan kiya ja sakna chahiye |

Yaaddasht dene wala har product inme se ek chunta hai aur use banata hai. Model dene wali company inme se kuch nahi deti.

## Jo Anaya ne nahi dekha tha

Anaya ne chuppi se apni jalebi khatam ki. Phir usne dhyaan dilaya ki agar poori history har baar bheji jaati hai, toh message do mein type kiya number message teen ke saath, phir message chaar ke saath, aur isi tarah dobara bheja jaata hai. Imran ne pushti ki ki woh baatcheet ke ant tak bheja jaata hai. Agar koi customer bees message wali chat ke doosre message mein Aadhaar number type karta hai, toh woh bahari company ke paas atthaarah baar aur jaata hai. Imran ne yeh pichhli raat dekh liya tha, jab Anaya chali gayi thi, aur intezaar kiya tha ki woh khud ise dhoondhe.

Is khoj ne guard ki uski tasveer badal di. Usne ise ek aise tool ki tarah socha tha jo har naye message ko aate hi dekhta hai. Par jo number sirf sabse naye message mein chhupa ho aur history mein dikhta rahe, woh har agle message ke saath poora dobara bheja jaata.

::: key Store karne se pehle saaf karo
Guard sirf sabse naye message ko nahi dekh sakta. Ya toh use har call par poori history ko aisi cheez maanna hoga jisme raaz ho sakta hai, ya har line ko aate hi ek baar saaf karna hoga, taaki jo saaf version hai wahi history mein jaaye. Anaya ne doosre vikalp ko design ke niyam ki tarah likh liya: store karne se pehle saaf karo, sirf bhejne se pehle nahi.
:::

Uthte hue maalik ne counter par ek chhota kaagaz ka packet rakha. "Madam ke liye," usne kaha. "Kaju katli. Aaj Thursday hai." Anaya kai hafton mein pehli baar hansi.

## Saaraansh

Language model stateless hai. Woh request ke beech kuch nahi rakhta, aur har call shuru se shuru hoti hai.

- Chatbot isliye yaad rakhta lagta hai kyunki application har naye message ke saath conversation history dobara bhejta hai. Kisi bhi product ki yaaddasht product khud banata hai aur uska paisa deta hai.
- Kyunki history dobara bheji jaati hai, har message pichhle se zyada mehnga hota hai, aur baatcheet ka kul kharcha uski lambai se bahut zyada tezi se badhta hai.
- Jo baatcheet context window se bada ho jaaye, usme application ko purane messages hataane, unhe saar mein badalne, save kiye tathya dhoondhne ya kaam ki sthiti rakhne ka faisla karna padta hai. Chunaav application ka hai.
- Ek baar type kiya gaya detail har agle message ke saath dobara jaata hai jab tak use store karne se pehle saaf na kiya jaaye.
