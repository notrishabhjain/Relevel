---
title: The Spec for a Thing That Varies
summary: Ek notice kehta hai ki ek model tees din mein retire hoga. Isse dikhta hai ki spec (product ka recipe card) mein kya hona chahiye jab software do baar ek jaisa kaam nahi karta. Yeh bhi dikhta hai ki AI band karne wale switch ko kya chalta chhodna chahiye. Chapter mein rollback, kill switch aur pinned versions aate hain.
course: ch18
goals:
  - samajhna ki badalne wale software ki spec aam spec se kaise alag hoti hai
  - aisi spec ki beech wali table likhna: measurement, answer key, threshold aur action
  - rollback aur kill switch mein farq batana, aur ek tested safe mode banana
  - provider ke model retire karne par kya dobara chalana hai, uski list banana, aur secrets store kiye bina kaam aane wala feedback jama karna
terms:
  - rollback | code ke purane version par wapas jaana, jaise pichle saal ki recipe par lautna; iske liye nayi deployment chahiye, aur jab dono versions mein wahi bura behaviour ho toh yeh madad nahi karta | rollbacks, roll back
  - kill switch | board ka main switch: ek flag traffic ko turant ek saade, bina-AI wale raaste par bhej deta hai, nayi deployment ke bina; yeh tabhi chalta hai jab woh raasta maujood ho aur haal mein test hua ho | kill switches
  - pinned version | model ka woh version jo uske poore naam se fix kiya gaya hai, taaki provider use bina bataye badal na sake | 
---

Ek raat do bajkar das minute par ek email aaya. Imran Qureshi ne use subject line "Read this" ke saath forward kiya tha. Woh us bahar ki company se tha jo chatbot ke jawaab likhti thi. Jo model use ho raha tha, woh tees din mein retire ho jaayega, usme likha tha. Lehja bank ke patra jaisa tha. Us tareekh ke baad us model ko bheji requests fail ho jaayengi. Company ne agle model par jaane ki salaah di, jisme "behtar capability" thi.

Anaya ne use letkar padha, phone haath bhar door rakhkar. Use thandi ginti mehsoos hui. Jaise koi bataye ki jis seedhi par aap rehte hain, woh ek tay tareekh ko hata di jaayegi. Bees minute baad woh uthi, chai banayi aur spec kholi. Spec product ka recipe card hota hai. Use laga ki ab uski pariksha hone wali hai.

## Case: hatayi jaane wali seedhi

Ek rasoiye ko dekhiye jiske paas recipe card hai, aur dukaan bina bataye aata badal deti hai. Notice ne ek aisa sawaal uthaya jiska jawaab aam spec nahi de sakti. Agar product ke neeche model badal jaaye, toh product kya waada karta hai? Aur team ko kaise pata chale ki waada ab bhi sahi hai? Yeh chapter dikhata hai ki spec mein kya hona chahiye jab software do baar ek jaisa kaam nahi karta.

## Range maanne wali spec

Aam spec maanti hai ki wahi input wahi output dega. Tester use check karta hai, aur pass hone par kaam khatam. Text padhne aur likhne wali machine ke liye yeh sab sach nahi hai. Wahi input outputs ki ek range deta hai. Aur range tab khisakti hai jab provider koi aisa model badal de jis par team ka bas nahi.

Cricketer ke batting average ko dekhiye. Woh ek score nahi hai. Woh bahut matches par naapi gayi range hai. Aise software ki spec ko bhi yahi karna hota hai. Woh behaviour ki naapi hui range batati hai. Woh saboot dikhati hai ki kisi ne use naapa. Aur woh batati hai ki behaviour drift kare (khisak jaaye) toh kya hoga.

Anaya chhe mahine se aisi ek spec likh rahi thi, bina use yeh naam diye. Agli subah jab usne use failaya, toh woh chaar badlaavon par aa gayi.

Table: Badalne wale software ke liye specification kaise badalti hai
| Aam specification mein | Is wali mein |
| --- | --- |
| Acceptance pass ya fail hai | Acceptance ek named answer key par score hai, bataye hue settings par |
| Ek test plan | Cases ka ek fixed set jo har release par pass hona chahiye, free code checks ke saath |
| Jab features chalen tab done | Jab in numbers par naapa jaaye tab done, known failures likhe hue ke saath |
| Pichle version par wapas jaana | Model ka ek pinned version, versioned instructions, aur ek switch jo machine band kar de |

Use inme se kuch bhi nayi ijaad nahi karna pada. Har ek project mein pehle se tha.

## Numbers kya kehte hain

Spec ka beech ka hissa ek table hai jise shak karne wala bhi check kar sake. Woh batati hai ki kya naapa gaya, aur kis key ke saamne. Woh threshold deti hai (woh line jise number paar nahi karna chahiye). Aur woh batati hai ki result kam pade toh kya hoga.

Table: Specification ki measurement table
| Kya naapa gaya | Kiske saamne | Threshold | Agar isse neeche gaya |
| --- | --- | --- | --- |
| Fixed-shape numbers jo mile | Answer key, current version | Kam se kam 98 in 100 | Release block karo |
| Jo chhupaya gaya par personal nahi tha | Answer key, current version | 3 in 100 se zyada nahi | Anaya ko alert |
| Har message par jodha gaya time | Live timing | Aam taur par 0.3 second se kam; sabse dheema 20 mein se 1, 1 second se kam | Imran ko alert |
| Woh attacks jo output badal dein | 50 injected messages | Koi nahi | Release block karo |
| Har message ka cost | Billing | 60 paise se kam | Anaya ko alert |

Table ke neeche, alag type mein, usne woh line likhi jo zyadatar specs chhod deti hain. Usme likha tha ki kill switch kya band karta hai. Aur uske baad product phir bhi kya karta hai.

## Wapas jaane se alag

Us line par use socha jitna sochna pada, aur Imran ne madad ki. Usne badlaav ko undo karne ke aam tareeke se shuru kiya. **Rollback** purane code par wapas jaata hai. Yeh pichle saal ki recipe par wapas jaane jaisa hai. Yeh nayi deployment hai (code ko dobara live karna), toh time lagta hai. Jab dono versions mein wahi bura behaviour ho, tab bhi yeh madad nahi karta. Aisa tab hota hai jab provider aapke neeche model badal deta hai. Naye model par purana code utna hi galat hota hai.

Tab aapko kuch tez aur seedha chahiye. Electricity board ke main switch ko dekhiye. Aapko settings file mein ek flag (on/off setting) chahiye. Woh traffic ko turant ek saade raaste par bhej deta hai. Woh raasta machine use nahi karta. Yahi hai **kill switch**.

::: key Jis kill switch ko kisi ne test nahi kiya, woh ek umeed hai
Woh tabhi chalta hai jab saada raasta abhi bhi ho aur kisi ne haal mein use chalaya ho.
:::

Anaya ne poocha ki switch traffic ko kahan bhejega. Chatbot ke liye use pata tha. Farah ki team haath se jawaab degi. Lekin guard alag tha. Agar guard poora band ho jaaye, toh kuch bhi nahi chhupega. Yeh sabse bura nateeja hai. Isliye Imran ne tay kiya ki kill switch guard ko band nahi karega. Woh models ko band karta hai.

Safe mode sirf pattern checker chalayega (saade rules ka set jo drift nahi karta). Usme ek seedha rule jod diya jaayega: nau ya zyada digits ki koi bhi ladi chhupa do, chahe woh kuch bhi ho. Woh har naam aur address chhod dega. Answer key par woh fixed-shape numbers mein se lagbhag sau mein chhiyanve pakdega. Woh bahut false alarms dega. Use chalane mein kisi ko maza nahi aayega.

Lekin woh wahan hoga. Provider ka koi kadam use chhoo nahi sakta. Jis insaan ne code kabhi nahi dekha, woh bhi use raat ke teen baje chalu kar sakta hai. Anaya ne use spec mein uske numbers ke saath likha. Sirf rules. Fixed-shape numbers mein se lagbhag 96 in 100. Koi naam ya address nahi. Bahut false alarms. Har hafte test. Usne "har hafte" par line kheenchi.

## Tees din

Imran ne kaha ki notice unhone jo banaya tha uski sahi pariksha thi. Usne list banayi ki kya dobara chalana hai, order mein. Model badalna settings ka badlaav nahi hai. Naya model purane par naapi har cheez ko bekaar kar deta hai.

Table: Model retire hone par kya dobara chalana hai
| Order | Dobara chalao | Wajah |
| --- | --- | --- |
| 1 | Poori answer key | Yeh dekhne ke liye ki jab chatbot ke summaries aur replies naye model se aayen toh guard kya karta hai |
| 2 | Attacks ka fixed set | Yeh dekhne ke liye ki kya naye model ko ab bhi bahka kar galat karwaya ja sakta hai |
| 3 | Machine judge aur Anaya ke apne marking ke beech agreement | Judge bhi ek model call hai, aur purane model par check kiya gaya judge naye par check nahi hua |
| 4 | Naye prices par cost | Model ke saath prices badalte hain |
| 5 | Sabse dheeme responses | Naya model apne sabse bure cases mein dheema ho sakta hai |

"Kuch bhi mat chhodo," Imran ne kaha. Jin teams ke paas test set nahi hota, unhe yeh problems tees din mein nahi milti. Unhe woh production mein milti hain (live, asli customers ke saath).

Kaam mein dono ko ek dopahar lagi. Imran ne ise saboot maana ki pichle mahino ki mehnat bekaar nahi gayi. Naye model ne apne summaries thodi alag style mein likhe. Usne phone numbers aise format mein daale jo purane ne kabhi nahi use kiya. Usme plus sign, country code aur dashes the, jaise +91-98765-43210. Pattern checker ne yeh format kabhi nahi dekha tha. Answer key ki gyarah rows laal ho gayi.

Unhone problem ek dopahar mein dhoondh li, ek key ke saath. September mein kisi customer se nahi mili. Imran ne kaha ki answer key launch ke liye likha kaagaz nahi hai. Woh infrastructure hai (product ke neeche ke pipe aur taar).

## Kaam aane wala feedback

Spec mein ek aur cheez Farah ki thi. Uske agents ke paas har chat par ek button tha. Us par likha tha "guard ne woh chhupa diya jo mujhe chahiye tha". Ab tak usne ek click ke siwa kuch nahi bachaya tha.

Imran ne kaha ki akela thumbs-down lagbhag bekaar hai. Use dohraya nahi ja sakta. Aur woh galat jawaab ko us sahi jawaab se alag nahi kar sakta jo user ko bas pasand nahi aaya. Lekin jo thumbs-down poore record ke saath aata hai ki kya hua, woh ek taiyaar test case hai. Ise bill ke saath pin ki hui shikayat parchi samajhiye.

Record ka matlab hai message aur guard ne kya paaya. Iska matlab hai guard ne kya tay kiya. Aur iska matlab hai har cheez ke kaun se versions chal rahe the. Do buttons ke beech ka farq lagbhag do din ki engineering tha.

Anaya ne haami bharne se pehle ek dikkat dekhi. Record mein message hoga. Maan lijiye guard us message par fail hua. Tab record mein wahi cheez hogi jo guard ko chhupani thi.

Isliye Imran ne tay kiya ki record saaf karke store hoga. System chhupaya hua version aur positions save karta hai. Kaccha version woh sirf aisi jagah rakhta hai jahan bahut kam log pahunch saken. Woh use thode time ke liye rakhta hai, is note ke saath ki kisne dekha.

::: watch Debugging ka saadhan wahi problem dobara bana sakta hai
Jo debugging ka saadhan secrets store karta hai, woh wahi problem wapas laata hai jise suljhane ke liye woh bana hai. Record ko saaf roop mein store kijiye.
:::

## Sab ko order mein rakhna

Hafte ke ant tak notice ek routine ban chuka tha. Model ab ek **pinned version** tha. Woh dono taraf uske poore naam se fix tha, taaki provider use bina notice badal na sake. Safe mode likha gaya, ek test mein chalu kiya gaya, band kiya gaya aur likh liya gaya. Key mein gyarah nayi rows thi.

Spec ek feature ke kaagaz ke roop mein shuru hui thi. Ab woh ek aise system ka kaagaz thi jo apne paon ke neeche badlega. Usme likha tha ki tab kya karna hai. Anaya ne us log mein ek aakhri line jodi jo usne March mein shuru kiya tha. Woh apni raay tabhi badlegi jab koi provider waada kar sake ki model kabhi nahi badlega. Use ummeed nahi thi ki koi koshish bhi karega.

## Saaraansh

Batting average ko ek baar aur yaad kijiye. Jo cheez do baar ek jaisa kaam nahi karti, uski spec behaviour ki naapi hui range batati hai. Woh saboot dikhati hai ki use naapa gaya. Aur woh batati hai ki drift hone par kya hoga. Uski beech wali table measurement, answer key, threshold aur woh action batati hai jo number kam padne par hota hai.

- Rollback purane code par wapas jaata hai. Jab model hi badal gaya ho, toh dono versions mein problem hoti hai. Isliye aapko pinned model version aur kill switch bhi chahiye. Kill switch traffic ko turant saade raaste par bhejta hai, aur woh raasta maujood aur tested hona chahiye.
- Jab provider model retire kare, toh uske saamne naapi har cheez dobara chalaiye, judge samet.
- Feedback tabhi kaam ka hai jab woh kya hua uske poore record ke saath aaye. Privacy tool mein woh record khud saaf karke store hona chahiye.

Aage, ek vendor (aisi company jo aapko product bechti hai) Sahaj mein do log bhejta hai. Anaya ko tay karna hai ki agla hissa khud banaye ya khareede.
