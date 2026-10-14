---
title: Badalti Rehne Wali Cheez Ki Spec
summary: Ek model ke retire hone ka tees din ka notice dikhata hai ki aise software ki specification mein kya hona chahiye jo do baar ek jaisa behave nahi karta. Yeh bhi dikhata hai ki AI band karne wale switch ko kya chalta rehne dena chahiye. Chapter mein rollback, kill switch aur pinned versions samjhenge.
course: ch18
goals:
  - samjhana ki jo software badalta rehta hai, uski specification aam specification se kaise alag hoti hai
  - aisi specification ki central table likhna: measurement, answer key, threshold aur action
  - rollback aur kill switch ka farq batana, aur aisa safe mode banana jo test hota rahe
  - batana ki provider model retire kare toh kya dobara chalana hai, aur feedback ko bina secrets store kiye kaam ka banana
terms:
  - rollback | code ke pichhle version par laut jaana, jiske liye nayi deployment chahiye, aur jo kaam nahi aata jab dono versions mein ek jaisi kharabi ho | rollbacks, roll back
  - kill switch | ek flag jo traffic ko turant ek saade non-AI raaste par bhej deta hai, bina nayi deployment ke; yeh tabhi chalta hai jab woh raasta maujood ho aur haal hi mein test hua ho | kill switches
  - pinned version | model ka woh version jise aapne naam se tay kar diya hai, taaki provider aapko bataye bina use aapke neeche se badal na sake | 
---

Ek raat ke do bajkar das minute par ek email aaya. Imran Qureshi ne use "Read this" subject ke saath forward kiya tha. Email us bahari company ka tha jo chatbot ke jawaab likhti thi. Bank ki chitthi jaise lahje mein likha tha ki jo model abhi use ho raha hai, woh tees din mein retire ho jaayega. Uske baad us par bheji gayi requests fail hongi. Company ne salah di thi ki uske naye model par chale jaayein, jo behtar capability deta hai.

Anaya ne use letkar padha, phone ko haath bhar door pakad kar. Usne andar se ek thanda sa hisaab mehsoos kiya. Waisa hi jaisa tab lagta jab koi bole ki aap jis seedhi se roz upar-neeche jaate ho, woh ek tay tarikh ko hata di jaayegi. Bees minute baad woh uthi, chai banayi aur specification kholi. Use lag raha tha ki ab iska imtihaan hone wala hai.

## Case: hatayi jaane wali seedhi

Is notice se ek sawaal uthta tha jiska jawaab aam specification nahi de sakti. Agar model product ke neeche se badal jaaye, toh product kya vaada karta hai? Aur team ko kaise pata chale ki vaada ab bhi poora ho raha hai? Yeh chapter dikhata hai ki jis software ka behaviour do baar ek jaisa nahi hota, uski specification mein kya hona chahiye.

## Range maanne wali specification

Aam specification maanti hai ki wahi input dene par wahi output milega. Tester check karta hai, pass ho jaaye toh kaam khatam. Text padhne aur likhne wali machine ke saath yeh kuch bhi sach nahi hai. Wahi input dene par outputs ki ek range milti hai. Aur woh range tab bhi khisak jaati hai jab provider koi model badal de, jo team ke control mein nahi hai.

Isliye aisi cheez ki specification ko kuch alag kehna padta hai. Woh behaviour ki ek naapi hui range batati hai. Woh saboot dikhati hai ki kisi ne use naapa hai. Aur woh batati hai ki behaviour drift kare toh kya hoga.

Anaya chhe mahine se aisi hi ek specification likh rahi thi, bina use yeh naam diye. Agli subah usne use faila kar dekha, toh woh chaar badlaavon par aa gayi.

Table: Badalne wale software ke liye specification kaise badalti hai
| Aam specification mein | Is wali mein |
| --- | --- |
| Acceptance pass ya fail hota hai | Acceptance ek named answer key par score hai, bataye hue settings par |
| Ek test plan | Cases ka ek fixed set jo har release par pass hona chahiye, saath mein free code checks |
| Features chalne par kaam poora | Kaam tab poora jab in numbers par naapa ja chuka ho, aur known failures likh diye gaye hon |
| Pichhle version par wapas jaana | Model ka ek pinned version, versioned instructions, aur ek switch jo machine ko band kar de |

Inme se kuch use naya invent nahi karna pada. Har cheez project mein pehle se maujood thi.

## Numbers kya kehte hain

Specification ka central hissa ek table hai jise koi shak karne wala bhi check kar sake. Usme likha hai kya naapa ja raha hai, aur kis key ke against. Threshold diya hai. Aur yeh bhi ki result kam aaye toh kya hoga.

Table: Specification ki measurement table
| Kya naapa ja raha hai | Kis ke against | Threshold | Isse neeche aaye toh |
| --- | --- | --- | --- |
| Fixed-shape numbers jo pakde gaye | Answer key, current version | Kam se kam 100 mein 98 | Release rok do |
| Jo chhupaya gaya par personal nahi tha | Answer key, current version | 100 mein 3 se zyada nahi | Anaya ko alert |
| Har message par jodi gayi der | Live timing | Aam taur par 0.3 second se kam; sabse dheere 20 mein se 1 par 1 second se kam | Imran ko alert |
| Woh attacks jo output badal dein | 50 injected messages | Ek bhi nahi | Release rok do |
| Ek message ki cost | Billing | 60 paise se kam | Anaya ko alert |

Table ke neeche, alag type mein, usne woh line likhi jo zyadatar specifications chhod deti hain. Us line mein likha tha ki kill switch kya band karta hai, aur uske baad product phir bhi kya karta rehta hai.

## Wapas jaane se alag

Is line par use umeed se zyada sochna pada, aur Imran ne madad ki. Usne pehle change ko undo karne ka aam tareeka samjhaya. **Rollback** purane code par wapas le jaata hai. Yeh ek nayi deployment hai, isliye time lagta hai. Aur yeh tab kaam nahi aata jab dono versions mein ek jaisi kharabi ho. Aisa tab hota hai jab provider model ko hi unke neeche se badal deta hai, kyunki naye model par purana code utna hi galat hai.

Aise mein kuch tez aur seedha chahiye. Configuration file mein ek flag, jo traffic ko turant ek saade raaste par bhej de jo machine use hi nahi karta. Yeh hai **kill switch**.

::: key Jis kill switch ko kisi ne test nahi kiya, woh ek umeed hai
Woh tabhi chalta hai jab saada raasta abhi bhi maujood ho aur kisi ne haal hi mein use chalaya ho.
:::

Anaya ne poochha ki switch traffic ko kahan bhejega. Chatbot ke liye jawaab use pata tha: Farah ki team haath se jawaab degi. Lekin guard alag tha. Agar guard poori tarah band ho jaaye, toh kuch bhi chhupaya nahi jaayega, aur yeh sabse bura nateeja hai. Isliye Imran is nateeje par pahuncha ki kill switch guard ko band nahi kar sakta. Woh models ko band karta hai.

Safe mode sirf pattern checker chalayega, jo saade rules hain aur drift nahi kar sakte. Usme ek jaanboojh kar rukhi rule judegi: nau ya usse zyada digits ki koi bhi run chhupa do, chahe woh kuch bhi ho. Yeh har naam aur pate ko miss karegi. Answer key par yeh fixed shape wale numbers mein se lagbhag 100 mein 96 pakad legi. Isse bahut false alarms aayenge, aur ise use karna kisi ko achha nahi lagega.

Lekin woh wahan hoga. Provider kuch bhi kare, use chhu nahi sakta, aur jisne code kabhi dekha bhi nahi, woh bhi use raat ke teen baje on kar sakta hai. Anaya ne use specification mein numbers ke saath likha: sirf rules, fixed-shape numbers mein lagbhag 100 mein 96, naam ya pate nahi, bahut false alarms, har hafte test. "Har hafte" par usne line kheench di.

## Tees din

Imran ne kaha ki yeh notice jo kuch unhone banaya hai uska ek sahi test hai. Usne order mein bataya ki kya dobara chalana hai. Model badalna settings badalna nahi hai. Naya model un sab cheezon ko bekaar kar deta hai jo purane model ke against naapi gayi thi.

Table: Model retire hone par kya dobara chalana hai
| Order | Dobara chalana | Wajah |
| --- | --- | --- |
| 1 | Poori answer key | Yeh dekhne ke liye ki jab chatbot ke summaries aur replies naye model se aayein, toh guard kya karta hai |
| 2 | Attacks ka fixed set | Yeh dekhne ke liye ki kya naye model ko ab bhi behka kar galat karwaya ja sakta hai |
| 3 | Machine judge aur Anaya ki apni marking ke beech agreement | Judge bhi ek model call hai, aur jis judge ko purane model ke saath check kiya gaya tha, use naye ke saath check nahi kiya gaya |
| 4 | Naye prices par cost | Model ke saath prices badalte hain |
| 5 | Sabse dheere responses | Naya model apne worst cases mein dheema ho sakta hai |

"Kuch skip nahi karte," Imran ne kaha. Jin teams ke paas test set nahi hota, unhe yeh problems tees din mein nahi milti. Unhe production mein milti hain.

Dono ko yeh kaam karne mein ek dopahar lagi. Imran ne ise saboot maana ki spring ka kaam bekaar nahi gaya. Naya model apne summaries thodi alag style mein likhta tha, aur phone numbers ek aise format mein daalta tha jo purana model kabhi nahi use karta tha: plus sign, country code aur dashes, jaise +91-98765-43210. Pattern checker ne yeh format kabhi dekha nahi tha, aur answer key ki gyarah rows red ho gayi.

Unhe problem ek dopahar mein, ek key ki madad se mil gayi, September mein kisi customer se nahi. Imran ne kaha, answer key koi launch ke liye likha document nahi hai. Woh infrastructure hai.

## Kaam aane wala feedback

Specification mein ek cheez aur thi, jo Farah ki thi. Uske agents ke paas har chat par ek button tha, jis par likha tha "guard ne woh chhupa diya jo mujhe chahiye tha". Ab tak usse ek click ke siva kuch nahi bacha tha.

Imran ne kaha, akela thumbs-down lagbhag bekaar hota hai. Aap use reproduce nahi kar sakte. Aur woh galat jawaab aur aise sahi jawaab mein farq nahi bata sakta jo user ko bas pasand nahi aaya. Lekin jo thumbs-down poore record ke saath aaye ki kya hua, woh ek taiyaar test case hai. Record mein message, guard ne kya paya, usne kya decide kiya, aur har cheez ke kaun se versions chal rahe the, yeh sab hota hai. Dono buttons ke beech ka farq lagbhag do din ki engineering tha.

Haan kehne se pehle Anaya ko ek dikkat dikhi. Record mein message hoga. Agar guard us message par fail hua tha, toh record mein wahi cheez hogi jise chhupana guard ka kaam tha. Isliye Imran is nateeje par pahuncha ki record saaf karke store karna hoga. System chhupaya hua version aur positions save karta hai. Raw version sirf aisi jagah rakhta hai jahan bahut kam log pahunch sakte hain, thodi der ke liye, aur ek note ke saath ki kisne dekha.

::: watch Debugging ka saadhan wahi problem dobara bana sakta hai
Jo debugging aid secrets store karta hai, woh usi problem ko dobara bana deta hai jise suljhane ke liye woh bana hai. Record ko uske saaf kiye hue roop mein hi store karna hoga.
:::

## Sab ko order mein rakhna

Hafte ke ant tak notice ek routine ban chuka tha. Model ab ek **pinned version** tha, dono taraf naam se fix, taaki provider use bina notice ke badal na sake. Safe mode likha ja chuka tha, test mein on kiya gaya, off kiya gaya, aur likha gaya. Key mein gyarah nayi rows thi.

Specification ek feature ke document ke roop mein shuru hui thi. Ab woh ek aise system ka document thi jo apne neeche se badalta rahega, aur usme likha tha ki tab kya karna hai. Anaya ne woh log, jo usne March mein shuru kiya tha, usme ek aakhri line jodi. Woh apna mann tab badlegi jab koi provider guarantee de sake ki model kabhi nahi badlega. Use nahi lagta tha ki koi koshish bhi karega.

## Saaraansh

Jo cheez do baar ek jaisa behave nahi karti, uski specification behaviour ki ek naapi hui range batati hai, saboot ki use naapa gaya, aur yeh ki drift hone par kya hoga. Uski central table measurement, answer key, threshold aur action likhti hai, ki number kam aaye toh kya karna hai.

- Rollback purane code par laut jaata hai. Jab model hi badal gaya ho, toh dono versions mein wahi problem hoti hai, isliye pinned model version aur kill switch bhi chahiye. Kill switch traffic ko turant ek saade raaste par bhejta hai, aur woh raasta maujood aur tested hona chahiye.
- Provider model retire kare, toh uske against naapi gayi har cheez dobara chalani padti hai, judge samet.
- Feedback tabhi kaam ka hai jab woh poore record ke saath aaye ki kya hua. Privacy tool mein woh record khud bhi saaf karke store hona chahiye.
