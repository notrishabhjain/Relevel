---
title: Lambi Windows, Saavdhaan Kamre
summary: Ek vendor ka dawa hai ki bahut bada context window retrieval ko gair-zaroori bana deta hai, aur product manager do sawaal poochhti hai jo meeting khatam kar dete hain. Chapter dikhata hai ki request mein kya jaata hai yeh us se zyada zaroori hai ki kitna aa sakta hai, aur context engineering, token budget, caching aur compaction batata hai.
course: ch10
goals:
  - do kaaran batana ki bahut bada context window sahi material dhoondhne ki zaroorat kyun nahi hataata
  - context engineering batana aur ek maalik ke saath token budget likhna
  - samjhana ki caching dohrai jaane wali shuruaat ka kharcha kaise ghatati hai
  - compaction aur uske risk batana, personal data ke liye bhi
terms:
  - context engineering | har request mein kya jaayega, kis kram mein, aur kya chhoda jaayega, yeh tay karna: nirdesh, udaharan, saboot, history aur tool ke nateeje | 
  - token budget | ek plan jo request ke har hisse ko tokens ka uska hissa deta hai, ek aise insaan ke saath jo kul ka malik hai aur jaanta hai ki pehle kya kaatna hai | token budgets
  - caching | provider ko request ka process kiya hua shuruaati hissa yaad rakhne dena, taaki agar agli baar woh bilkul wahi ho toh baad ki request sasti aur tez ho | cache
  - compaction | ek lambi baatcheet ko chhota karna, uske beech ka saar likh kar aur shuruaat aur ant ko rakh kar | compact
---

May mein ek model vendor ke solutions architect ne, ek founder ke bulaye hue jo use ek conference mein mile the, glass room mein team ke saamne presentation diya. Uski slides ka title tha "Context is Everything". Ek slide mein ankon ki seedhi thi: battees hazaar, ek lakh, das lakh. Uski daleel thi ki puraana tareeka khatam ho chuka hai. Documents ko tukdon mein kaatna aur sahi tukde dhoondhna chhote windows ka ek jugaad tha. Uske vendor ka window das lakh token ka tha, isliye poori library har sawaal ke saath bheji ja sakti thi: na kaatna, na embeddings, na dhoondhna. Yeh aasaan, sasta aur behtar hota.

Dawa pichhle chhe hafton ko gair-zaroori bana deta. Anaya ne haath uthaya aur do sawaal poochhe: agar har baar poori library bheji jaaye toh ek sawaal ka kharcha kitna hoga, aur kya woh dikha sakta hai ki model kitna achha jawaab deta hai jab zaroori tathya poore window ke beech mein ho, usi tathya ke chhote request mein hone ke muqaable. Usne kaha ki use dekhna padega. Anaya ne use bhejne ko kaha jab woh pa le. Woh kabhi nahi bheja.

## Case: woh slide jiska daam nahi lag sakta tha

Anaya ka use sharminda karne ka irada nahi tha. Usne sawaal isliye poochhe kyunki poora dawa unhi par tika tha. Uske jaane ke baad Imran Qureshi ne kaam kiya aur Friday ko jawaab laaya.

## Slide ke galat hone ke do kaaran

Pehla kaaran kharcha hai. Bada request wohi kharcha deta hai jo bade request ka hota hai. Imran ne Sahaj ki poori policy library, lagbhag dedh lakh token, ₹250 dus lakh ke kalpanik rate par daam lagayi: ek sawaal ke liye ₹37.50. Teen prasangik tukde lane ka kharcha tees paise tha. Mahine ke ek lakh sawaalon par antar ₹37.5 lakh banaam ₹30,000 hai.

Doosra kaaran zyada sookshm hai. Model ki request mein jo hai use istemaal karne ki kshamta request ke bharne se kaafi pehle girne lagti hai. Imran ne policies se ek lamba document banaya aur ek anokha niyam teen jagahon par rakha: shuru ke paas, beech mein aur ant ke paas. Har jagah ke liye usne bees sawaal poochhe jo us niyam par nirbhar the.

Table: Sahi jawaab wale sawaal, niyam kahan tha uske hisaab se
| Niyam kahan tha | Sahi jawaab |
| --- | --- |
| Shuru ke paas | 20 mein se 19 |
| Beech mein | 20 mein se 11 |
| Ant ke paas | 20 mein se 18 |
| Wahi niyam, chhote request mein laaya gaya | 20 mein se 20 |

Nateeja ek model par ek din ka hai, aur doosra model alag hoga, par aakaar aam hai. Imran ne ise open-book exam se joda. Ek candidate poori library hall mein le jaa sakta hai aur uske paas ek ghanta hai. Use kitaab ke aage ki cheezein aur peechhe ki cheezein milti hain. Beech ka hissa woh pehle se dekh kar nikal jaata hai, aur koi use nahi batata ki kaun se jawaab usne isliye khoye. Koi error report nahi hota. Jawaab bas galat hote hain.

::: key Kshamta istemaal nahi hai
Ek document ka window mein fit hona yeh nahi hai ki uska istemaal hoga. Vendors kshamta batate hain. Team ko istemaal naapna padta hai.
:::

## Kamre mein kya jaata hai

Agar bada kamra samasya hal nahi karta, toh us mein kya jaata hai wahi poora sawaal hai. Imran ne is kaam ko ek naam diya. *Context engineering* yeh tay karna hai ki har request mein kya jaata hai, kis kram mein, aur kya chhodna hai. Hisse hain instructions, udaharan, saboot, pichhle messages aur tools ke jawaab. Iska zyadatar kisi ek instruction ke shabdon se zyada maayne rakhta hai, aur iska zyadatar technical chunaav nahi hai. Kitni history rakhni hai, kya customer ki puraani shikayatein shaamil karni hain, aur kya policy ka koi page payment ke baare mein request mein hona chahiye, yeh sab technical keemat wale product faisle hain.

Usne Anaya se ek aisa kaam karne ko kaha jo manoranjak nahi tha aur ek ghanta leta tha. Usne chatbot ke ek request ke liye *token budget* likha, har hisse ke hissa ke saath.

Table: Chatbot ki ek request ke liye token budget
| Request ka hissa | Tokens |
| --- | --- |
| Sthayi instructions | 400 |
| Un functions ke vivaran jinhe woh bula sakta hai | 300 |
| Policy ke teen tukde | 1,200 |
| Ab tak ki baatcheet | 600 |
| Jawaab | 200 |
| Kul | 2,700 |

Imran ne phir maana ki bill doguna ho gaya aur poochha ki woh sabse pehle kya kaategi. Policy ke tukde sabse bada hissa the aur sabse aasaani se ghatate the, ya toh teen ke bajaye do laakar ya nateejon ka kram behtar karke taaki kam tukdon mein sahi content ho, par unhe kaatne se un jawaabon ka risk tha jinhe kai sections ek saath chahiye the. Baatcheet ki history agli thi, aur use kaatne se follow-up sawaal toot gaye. Function vivaran ghatane ka matlab un kaamon ko hataana tha jo machine kar sakti thi. Anaya ne dekha ki jo bhi woh kaat sakti thi woh kuch tod deta.

::: key Budget ka maalik hona chahiye
Naam lo ki har kaat kis cheez ko risk mein daalti hai, aur phir use answer key se naapo. Jis budget ka koi maalik nahi, woh badhta jaata hai.
:::

## Wahi shuruaat, sasta bill

Ek tareeka Anaya ko lagbhag muft hone ki wajah se pasand aaya. Providers request ki process ki hui shuruaat yaad rakh sakte hain, aur agar aage ka hissa har baar ek jaisa ho, toh baad ki requests sasti aur tez hoti hain. Yeh *caching* hai. Yeh ek aadat ko inaam deti hai: sthayi hisse pehle jaate hain, jaise sthayi instructions aur reference text, aur jo badalte hain woh aakhir mein, jaise customer ka sawaal. Isne guard ke lambe instructions ko bhi utna mehnga nahi rakha jitna Anaya ko dar tha. Chaar sau token, har call par ek jaise aur aage rakhe gaye, cache ka achha istemaal hain.

## Baatcheet ko chhota karna

Aakhri vichaar tab aaya jab Anaya ne poochha ki bees message ki chat jo apne budget se bahar nikal jaaye uska kya hota hai. Aam jawaab *compaction* hai: baatcheet ke beech ka saar likho, shuru aur ant rakho, aur woh bhejo. Yeh kaam karta hai, aur beech ke khaas tathyon ko bharose se kho deta hai. Anaya ne ek vaade ke callback ka naam liya, aur Imran ne sahmati di ki yeh bilkul aise hi tathya ka udaharan hai, isliye must-keep list April mein likhi gayi thi. Saar jo bhi rakhe, jo kho nahi sakta woh list mein hona chahiye.

Ek doosri, chhupi samasya thi. Saar ek model ka likha naya text hai. Agar baatcheet ke beech mein koi pehchaan ka number tha jise guard ne andar jaate hue chhupa diya tha, toh saar chhupa hua roop le jaata. Agar use chhupaya nahi gaya tha, toh saar use copy kar leta. Dono tarah, guard ko saar ke saamne bhi baithna padta. Anaya ne diagram mein ek doosra chhota dabba joda, saar banane wale ke raaste mein.

Usne vendors ke saath baatcheet ke liye ek nateeja bhi nikala. Jab koi kehta hai ki uska assistant kisi user ko yaad rakhta hai, toh sawaal yeh hai ki yaaddasht kahan store hai. Woh ek store hai jo application sambhalta hai, har message ke saath bheja jaata hai, aur har baar uska paisa lagta hai.

## Saaraansh

Bahut bada context window sahi material dhoondhne ki zaroorat ko do kaaranon se nahi hataata. Bada request har sawaal par wohi kharcha deta hai jo woh deta hai, aur model ki jo bheja gaya use istemaal karne ki kshamta window ke bharne se kaafi pehle gir jaati hai, khaas taur par beech ke material ke liye.

- Jo matlab rakhta hai woh yeh hai ki har request mein kya jaata hai. Yeh context engineering hai, aur ise ek token budget ki tarah sambhalna behtar hai jiska ek maalik ho jo jaanta ho ki pehle kya kaatna hai aur har kaat kya todegi.
- Request ke sthayi hisse pehle rakhne se provider unhe cache kar sakta hai, jisse kharcha ghatta hai.
- Compaction lambi baatcheet ke beech ka saar likhta hai aur khaas tathya kho deta hai. Jo kuch model likhta hai, saar bhi, personal detail ke jaane ki ek aur jagah hai.
