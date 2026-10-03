---
title: Lambi Windows, Saavdhaan Kamre
summary: Ek salesman elaan karta hai ki bahut badi context window is sab mehnat ko gair-zaroori bana deti hai, aur ek product manager use woh ek sawaal poochhti hai jo meeting khatam kar deta hai. Kamre mein kya jaata hai woh us se zyada maayne rakhta hai ki kamra kitna bada hai.
course: ch10
terms:
  - context engineering | har request mein kya jaayega, kis kram mein, aur kya chhoda jaayega, yeh tay karna: nirdesh, udaharan, saboot, history aur tool ke nateeje | 
  - token budget | ek plan jo request ke har hisse ko tokens ka uska hissa deta hai, ek aise insaan ke saath jo kul ka malik hai aur jaanta hai ki pehle kya kaatna hai | token budgets
  - caching | provider ko request ka process kiya hua shuruaati hissa yaad rakhne dena, taaki agar agli baar woh bilkul wahi ho toh baad ki request sasti aur tez ho | cache
  - compaction | ek lambi baatcheet ko chhota karna, uske beech ka saar likh kar aur shuruaat aur ant ko rakh kar | compact
---

Salesman ke lanyard par likha tha *Solutions Architect*, aur uski slides par *Context is Everything*, aur chauthi slide tak Anaya ne likhna chhod diya tha.

Woh ek model vendor ki taraf se aaya tha, ek founder ke nyote par jo use ek conference mein mile the, aur uske paas ek laptop tha, ek clicker, aur ek shaanti jo batati thi ki usne yeh talk glass box se kahin kam mehmaan-nawaaz kamron mein diya hai. Imran peeche haath baandhe baitha tha. Farah sab ke liye chai laayi thi, jo woh kabhi-kabhi sunne ka waqt kharidne ke liye karti thi.

"Baat yeh hai," salesman ne kaha, "ki purana tareeka khatam ho gaya hai." Ek slide mein numbers ki seedhi thi: battees hazaar, ek lakh, das lakh. "Aap apne documents ko tukdon mein kaat rahe the aur sahi tukde la rahe the. Woh chhoti windows ka jugaad tha. Hamari window das lakh tokens rakhti hai. Aap har sawaal ke saath poori library bhej sakte hain. Na kaatna, na embeddings, na dhoondhna. Saral, sasta, behtar."

Yeh ek lubhaavni slide thi. Isne pichhle chhe hafte gair-zaroori kar diye hote.

Anaya ne haath uthaya, jo usne school ke baad kisi meeting mein nahi kiya tha.

"Do sawaal. Agar main har baar poori library bhejti hoon, toh ek sawaal ka kharcha kya hai?"

"Yeh volume par nirbhar karta hai—"

"Das lakh tokens, das lakh tokens hain. Jis bhi daam par aap chaahein. Har customer ke liye, har baar." Usne yeh bure tareeke se nahi kaha. "Aur doosra: kya aap dikha sakte hain ki model kitna achha jawaab deta hai jab use chahiye tathya ek bhari hui window ke beech mein ho, usi tathya ke muqable jo ek chhoti request mein rakha gaya ho?"

Clicker ruk gaya. "Mujhe isme dekhna hoga."

"Koi baat nahi," Anaya ne kaha. "Jab mil jaye toh please mujhe bhej dijiye."

Usne kabhi nahi bheja, aur use bura nahi laga; usne use sharminda karne ke liye nahi poochha tha. Usne isliye poochha tha ki wahi sawaal tha jis par poora daava tika tha.

## Slide galat kyun thi, do wajahein

Uske jaane ke baad Imran ne kaam kiya, aur nateeje ek Friday ko laaya.

Pehli wajah saral thi, aur woh use aadha keh chuki thi. Badi request ka kharcha utna hi hota hai jitna badi request ka hota hai. Usne Sahaj ki poori policy library li, lagbhag dedh lakh tokens, aur use dhai sau rupaye prati das lakh ke purane kalpit rate par daam lagaya. Ek sawaal ke saadhe saintees rupaye. Teen sambandhit tukde laane ka kharcha tees paise tha. Mahine ke ek lakh sawaal: saadhe saintees lakh rupaye bamuqabil tees hazaar.

Doosri baariki thi, aur usne shaam use is par lagayi thi. Request mein jo kuch hai use istemaal karne ki model ki kshamata request ke bharne se kaafi pehle gir jaati hai. Usne policies se ek lamba document banaya tha aur ek anokha niyam teen jagahon par chhupaya tha: shuru ke paas, beech mein, ant ke paas. Har jagah ke liye usne bees sawaal poochhe jo us par nirbhar the.

| Niyam kahan tha | Sahi jawaab wale sawaal |
| --- | --- |
| Shuru ke paas | 20 mein se 19 |
| Beech mein | 20 mein se 11 |
| Ant ke paas | 20 mein se 18 |
| Wahi niyam, ek chhoti request mein laaya hua | 20 mein se 20 |

"Yeh ek model hai ek din par," Imran ne kaha. "Tumhara alag hoga. Par shape aam hai." Usne ise open-book exam se milaya. Aapko poori library hall mein laane ki ijaazat hai. Aapke paas ek ghanta hai. Jo aap dhoondhte hain woh kitaab ke aage aur peeche ki cheezein hain, aur jo beech mein hai use aap sarsari taur par dekhte hain, aur nirikshak kabhi nahi batata ki aap kaun se sawaal isi wajah se galat kar gaye.

Koi error nahi tha. Jawaab bas galat the.

"Ek document ka window mein fit hona," Anaya ne dheere se kaha, "ka matlab yeh nahi ki use istemaal kiya jaayega."

"Vendors kshamata quote karte hain," usne kaha. "Jo tumhein naapna hai woh istemaal hai."

## Kamre mein kya jaata hai

Agar bada kamra problem hal nahi karta, toh usme kya jaata hai yahi poora sawaal hai, aur Imran ne use ek naam diya.

*Context engineering* yeh tay karne ka kaam hai ki har request mein kya jaayega, kis kram mein, aur kya chhoda jaayega. Nirdesh, udaharan, saboot, pichhle messages, tools ke jawaab. Isme se bahut kuch kisi ek nirdesh ke shabdon se zyada maayne rakhta hai. Aur isme se bahut kuch technical chunav hai hi nahi. Kitni history rakhni hai, kya customer ki purani shikayatein shaamil karni hain, kya ek policy page ek bhugtaan ki request mein hona chahiye: yeh technical keemat wale product faisle hain.

Usne use ek aisa kaam karne ko kaha jo chamak-damak wala nahi tha, aur isme ek ghanta laga. Usne chatbot ko ek request ke liye *token budget* likha, har hisse ko uske hissa ke saath.

| Request ka hissa | Tokens |
| --- | --- |
| Sthayi nirdesh | 400 |
| Un functions ke vivaran jo woh bula sakta hai | 300 |
| Policy ke teen tukde | 1,200 |
| Ab tak ki baatcheet | 600 |
| Jawaab | 200 |
| **Kul** | **2,700** |

"Ab," Imran ne kaha. "Bill doguna ho gaya. Tum pehle kya kaatogi?"

Usne column dekha. Policy ke tukde sabse bada hissa the, aur sabse aasani se chhote kiye ja sakte the: teen ki jagah do laao, ya nateejon ko behtar kram do taaki kam mein sahi content ho. Lekin unhe kaatne se un jawaabon ka jokhim tha jinhe ek saath kai sections ki zaroorat thi. Baatcheet ki history agli thi, aur use kaatne se follow-up sawaal toot jaate. Function ke vivaran tabhi hataye ja sakte the jab machine jo kar sakti thi woh cheezein hata di jaayein.

"Jo bhi main kaat sakti hoon woh kuch tod deta hai," usne kaha.

"Haan. Isliye batao ki har katauti kisko jokhim mein daalti hai," Imran ne kaha, "aur phir answer key se naapo. Budget ka ek malik hota hai. Agar nahi hai, toh woh badhta hai."

## Wahi shuruaat, sasta bill

Ek chaal thi jo use lagbhag muft hone ke liye pasand aayi. Providers request ka process kiya hua shuruaati hissa yaad rakh sakte hain. Agar aage ka hissa har baar bilkul ek jaisa hai, toh baad ki requests sasti aur tez hoti hain. Ise *caching* kehte hain. Yeh ek aadat ko inaam deta hai: sthir hisson ko pehle rakho, jaise sthayi nirdesh aur sandarbh text, aur badalte hisson ko aakhir mein, jaise customer ka sawaal.

Isne guard ke lambe nirdeshon ko uske dar se kam mehnga bana diya. Chaar sau tokens, har call par ek jaise, sabse aage: cache ka achha istemaal.

## Ek baatcheet ko chhota karna

Aakhri idea se woh ittefaq se mili, jab usne poochha ki ek bees-message ki chat ka kya hota hai jo apne budget ke liye bahut lambi ho gayi.

Aam jawaab, Imran ne kaha, *compaction* tha. Baatcheet ke beech ka saar likho, shuruaat aur ant rakho, aur woh bhejo. Yeh kaam karta hai. Yeh bharose se beech ke khaas byore bhi kho deta hai.

"Jaise waada kiya hua callback," Anaya ne kaha.

"Bilkul waada kiye hue callback ki tarah." Usne aankhein malin. "Isi liye tumne April mein list likhi thi. Saar jo bhi rakhe, jo cheez tumhein nahi khoni woh us list mein honi chahiye."

Ek doosri, shaant problem thi, aur Anaya ne use usse pehle dekh liya jab woh bola. Saar ek model ka likha naya text hai. Agar baatcheet ke beech mein koi pehchaan ka number tha jise guard ne andar aate waqt chhupa diya tha, toh saar chhupa hua version le jaata. Agar nahi chhupaya gaya tha, toh saar use copy kar leta. Dono sthitiyon mein guard ko saar ke saamne bhi baithna tha.

Usne ise deewar ke diagram mein joda, hashiye mein: ek doosra chhota dibba, summariser ke bahar jaane ke raaste par.

Jab koi kehta hai ki unka assistant ek user ko "yaad rakhta hai", usne socha, aapko poochhna chahiye ki yaad kahan store hai. Woh ek store hai jise app sambhalta hai, har message ke saath bheja jaata hai aur har baar uska paisa lagta hai. Usne yeh bhi likha, aur underline kiya, kyunki use shak tha ki use kai vendors se ulta sunna padega.

## Saath le jaane layak baatein

Bahut badi context window sahi material dhoondhna gair-zaroori nahi bana deti, do wajahon se: badi request bhejne ka kharcha har sawaal par utna hi hota hai, aur model ki bheji gayi cheez istemaal karne ki kshamata window bharne se kaafi pehle gir jaati hai, khaas kar beech ke material ke liye. Jo maayne rakhta hai woh yeh hai ki har request mein kya jaata hai, jise context engineering kehte hain, aur jise sabse achhe se ek token budget ke roop mein sambhala jaata hai, ek aise malik ke saath jo jaanta hai ki pehle kya kaatna hai aur har katauti kya todegi. Request ke sthir hisson ko pehle rakhne se provider unhe cache kar sakta hai, jo kharcha ghatata hai. Ek lambi baatcheet ke beech ka saar likhna, jise compaction kehte hain, khaas byore kho deta hai. Aur model jo kuch bhi likhta hai, saar bhi, woh ek aur jagah hai jahan personal detail pahunch sakti hai.
