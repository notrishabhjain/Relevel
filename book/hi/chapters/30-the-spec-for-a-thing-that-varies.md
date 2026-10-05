---
title: Badalti Rehne Wali Cheez Ki Spec
summary: Ek model ke retire hone ka tees din ka notice dikhata hai ki aise software ki specification mein kya hona chahiye jo do baar ek jaisa behave nahi karta, aur AI band karne wale switch ko kya chalta rehne dena chahiye. Chapter rollback, kill switch aur pinned versions samjhata hai.
course: ch18
goals:
  - samjhana ki badalne wale software ki specification saadhaaran se kaise alag hoti hai
  - specification ki kendriya table likhna: naap, answer key, threshold aur karwai
  - rollback aur kill switch mein antar karna, aur aisa safe mode design karna jo test hota rahe
  - batana ki jab provider model retire kare toh kya dobara chalana hai, aur feedback ko bina raaz store kiye upyogi banana
terms:
  - rollback | code ke pichhle version par laut jaana, jiske liye nayi deployment chahiye aur jo madad nahi karta jab dono versions ek jaisa kharab vyavahaar saajha karte hain | rollbacks, roll back
  - kill switch | ek flag jo traffic ko turant ek saade non-AI raaste par bhej deta hai, bina nayi deployment ke; yeh tabhi kaam karta hai jab woh raasta maujood ho aur haal hi mein test kiya gaya ho | kill switches
  - pinned version | model ka woh version jise aapne naam se tay kar diya hai, taaki provider aapko bataye bina use aapke neeche se badal na sake | 
---

Ek subah do bajkar das minute par ek email aaya, Imran Qureshi ke "Read this" subject ke saath forward kiya hua. Woh us bahari company se tha jo chatbot ke jawaab likhti thi. Jo model abhi istemaal mein tha, bank ke chitthi jaise lahje mein usme kaha gaya, woh tees din mein retire ho jaayega. Uske baad us par requests fail hongi, aur company uske uttaradhikari par jaane ki salah deti thi, jo behtar kshamta pesh karta tha.

Anaya ne use letkar, phone ko haath bhar door pakad kar padha. Use jo mehsoos hua woh us insaan ka thanda hisaab tha jise bataya gaya ho ki jis seedhi par woh rah rahi hai woh ek tay tareekh par hata di jaayegi. Bees minute baad woh uthi, chai banayi aur specification kholi, kyunki use shak tha ki use abhi parkha jaane wala hai.

## Case: ek seedhi jise hataane ki tareekh hai

Notice ne woh sawaal uthaya jiska jawaab saadhaaran specification nahi de sakti. Agar model product ke neeche badal jaaye, toh product kya vaada karta hai, aur team kaise jaanti hai ki woh ab bhi nibhta hai? Yeh chapter dikhata hai ki jis software ka vyavhaar do baar ek jaisa nahi hota uski specification mein kya hona chahiye.

## Ek specification jo ek range ki ummeed rakhti hai

Saadhaaran specification maanti hai ki wahi input wahi output deta hai. Ek tester ise jaanchta hai, aur jab woh paas hota hai toh kaam khatam. Jo machine text padhti aur likhti hai uske liye isme se kuch nahi tikta. Wahi input outputs ki ek range deta hai, aur woh range tab hilti hai jab provider aisa model badalta hai jo team ke haath mein nahi.

Aisi cheez ki specification ko isliye kuch alag kehna padta hai. Woh vyavhaar ki ek naapi hui range ka varnan karti hai, us saboot ka ki kisi ne use naapa, aur ki jab woh khisakti hai toh kya hota hai. Anaya ise chhe mahine se bina us naam ke likh rahi thi, aur agli subah jab usne ise rakha toh woh chaar badlaav the.

Table: Badalne wale software ke liye specification kaise badalti hai
| Saadhaaran specification mein | Is mein |
| --- | --- |
| Acceptance paas ya fail hai | Acceptance ek naam ki answer key par tay settings par ek score hai |
| Ek test plan | Tay cases ka ek set jo har release par paas hona chahiye, muft code checks ke saath |
| Features kaam karein toh done | Done tab jab in numbers par naapa gaya ho, gyaat failures likhi hon |
| Pichhle version par wapas jaana | Model ka ek pinned version, versioned instructions, aur machine ko band karne wala ek switch |

Use inme se kuch bhi khud gadhna nahi pada. Har ek project mein pehle se maujood tha.

## Numbers kya kehte hain

Specification ka kendriya hissa ek table hai jise koi shaki jaanch sake. Woh batati hai ki kya naapa gaya hai, kis key ke saamne, kis threshold par, aur agar result kam pade toh kya hota hai.

Table: Specification ki naap-table
| Kya naapa jaata hai | Kiske saamne | Threshold | Agar isse neeche aaye |
| --- | --- | --- | --- |
| Fixed-shape numbers jo mile | Answer key, maujooda version | Sau mein kam se kam 98 | Release roko |
| Nirdosh cheezein jo chhupayi gayi | Answer key, maujooda version | Sau mein 3 se zyada nahi | Anaya ko alert |
| Har message par jodi gayi der | Live timing | Aam taur par 0.3 second se kam; bees mein sabse dheeme ek ka 1 second se kam | Imran ko alert |
| Hamle jo output badalte hain | 50 injected messages | Koi nahi | Release roko |
| Har message ka kharcha | Billing | 60 paise se kam | Anaya ko alert |

Table ke neeche, alag type mein, usne woh line likhi jo zyadatar specifications chhod deti hain: kill switch kya band karta hai, aur uske baad product ab bhi kya karta hai.

## Wapas jaane se alag

Line ke baare mein use ummeed se zyada sochna pada, aur Imran ne madad ki. *Rollback* pehle ke code par wapas jaata hai. Woh ek naya deployment hai aur samay leta hai. Woh tab bilkul kaam ka nahi jab dono versions ek hi kharab vyavhaar baantte hain, jaise jab provider ne unke neeche model badal diya ho, kyunki naye model par puraana code utna hi galat hota. Us maamle mein kuch tez aur seedha chahiye: ek configuration file mein ek flag jo traffic ko turant ek saadhe raaste par bhej de jo machine ka istemaal nahi karta. Yeh *kill switch* hai.

::: key Jo kill switch kabhi jaancha nahi gaya woh ek ummeed hai
Woh tabhi kaam karta hai jab saadha raasta maujood ho aur kisi ne use haal mein chalaya ho.
:::

Anaya ne poochha ki switch traffic ko kahan bhejega. Chatbot ke liye woh jaanti thi: Farah ki team haath se jawaab deti. Par guard alag tha. Agar guard poori tarah band kar diya jaaye, toh kuch nahi chhupega, jo sabse bura nateeja hai. Imran ne nateeja nikala ki kill switch guard ko band nahi kar sakta. Woh models ko band karta hai.

Safe mode sirf pattern checker chalata, jo saadhe rules hain aur jo bhatak nahi sakte, ek jaanboojh kar motha extra rule ke saath: nau ya zyada ankon ki koi bhi run chhupao, chahe woh kuch bhi ho. Woh har naam aur pate ko chhod deta. Answer key par woh fixed shakl ke numbers mein se sau mein lagbhag chhiyaanve pakadta. Woh bahut false alarm banata aur istemaal mein kabhi achha nahi hota. Par woh wahan hota, kisi provider ke kiye se bina chhua hua, aur ek insaan jisne code kabhi nahi dekha woh teen baje raat ko use on kar sakta tha. Anaya ne use specification mein poore numbers ke saath likha: sirf rules, fixed-shape numbers mein se sau mein lagbhag 96, koi naam ya pate nahi, bahut false alarm, har hafte test. Usne "har hafte" ke neeche line kheenchi.

## Tees din

Imran ne kaha ki notice us cheez ka ek sahi test tha jo unhone banayi thi, aur kram mein bataya ki kya dobara chalana hai. Model badalna settings ka badlaav nahi hai. Naya model puraane ke saamne naapi hui har cheez ko ashudh kar deta hai.

Table: Jab model retire ho toh kya dobara chalana hai
| Kram | Dobara chalao | Kaaran |
| --- | --- | --- |
| 1 | Poori answer key | Yeh dekhne ke liye ki guard kya karta hai jab chatbot ke saar aur replies naye model se aate hain |
| 2 | Tay hamlon ka set | Yeh dekhne ke liye ki naye model ko ab bhi behkaya ja sakta hai ya nahi |
| 3 | Machine judge aur Anaya ki apni grading ke beech sahmati | Judge bhi ek model call hai, aur puraane model ke saamne jaancha gaya judge naye model ke saamne nahi jaancha gaya |
| 4 | Naye daamon par kharcha | Model ke saath daam badalte hain |
| 5 | Sabse dheeme jawaab | Naya model apne sabse bure cases mein dheema ho sakta hai |

"Kuch mat chhodo," Imran ne kaha. Jin teams ke paas test set nahi hota woh tees din mein samasyaayein nahi dhoondhti. Woh unhe production mein dhoondhti hain.

Kaam ne dono ko ek dopahar liya, jise Imran ne saboot maana ki pichhle mahinon ka kaam bekaar nahi gaya. Naye model ne apne saar thode alag andaaz mein likhe aur phone numbers ek aise format mein diye jo puraane ne kabhi nahi diya tha, plus chinh, desh ka code aur dashes ke saath, jaise +91-98765-43210. Pattern checker ne woh format nahi dekha tha, aur answer key ki gyarah rows laal ho gayi. Unhone samasya ek dopahar mein, ek key ke saath, dhoondh li, aur September mein ek customer se nahi. Answer key, Imran ne kaha, launch ke liye likha document nahi hai. Woh infrastructure hai.

## Aisi feedback jo istemaal ho sake

Specification ka ek aur item Farah ka tha. Uske agents ke paas har chat par ek button tha jis par likha tha "guard ne woh chhupa diya jo mujhe chahiye tha", aur ab tak usne ek click ke alawa kuch nahi bachaya tha. Akela thumbs-down lagbhag bekaar hota hai, Imran ne kaha. Use dohraya nahi ja sakta, aur woh ek galat jawaab ko ek sahi jawaab se alag nahi kar sakta jo user ko pasand nahi tha. Jo thumbs-down us ke saath poora record leke aata hai ki kya hua, woh ek tayyar test case hai. Record ka matlab hai message, guard ne kya dhoondha, kya tay kiya, aur har cheez ke kaun se versions chal rahe the. Do button ke beech ka antar lagbhag do din ki engineering tha.

Anaya ne maanne se pehle muskil dekh li. Record mein message hoga, aur agar guard us message par fail hua ho toh record mein woh cheez hogi jise woh chhupane ke liye bana tha. Imran ne nateeja nikala ki record saaf roop mein store hona chahiye. System chhupa hua version aur sthaan save karta hai, aur kaccha version sirf wahan rakhta hai jahan bahut kam log pahunch sakte hain, thode samay ke liye, yeh note karke ki kisne dekha.

::: watch Debugging ka saadhan samasya ko dobara bana sakta hai
Jo debugging ka saadhan raaz store karta hai woh wahi samasya dobara banata hai jise hal karne ke liye woh bana tha. Record ko uske saaf roop mein store hona chahiye.
:::

## Sab ko kram mein rakhna

Hafte ke ant tak notice ek abhyaas ban gaya tha. Model ko dono taraf ek naam ke version par pin kiya gaya tha, taaki provider bina batayein use na badal sake. Safe mode likha gaya, ek test mein on kiya gaya, off kiya gaya aur likh liya gaya. Key mein gyarah nayi rows thi. Specification, jo ek feature ke document ki tarah shuru hui thi, ab ek aise system ka document thi jo apne neeche badalta rahega, aur batati thi ki jab woh ho toh kya karna hai. Anaya ne March se rakhe log mein ek aakhri line joda: woh apni raay badal degi agar provider guarantee de sake ki model kabhi nahi badlega. Use ummeed nahi thi ki koi koshish karega.

## Saaraansh

Aisi cheez ki specification jo do baar ek jaisa behave nahi karti, vyavhaar ki ek naapi hui range, us saboot ka ki use naapa gaya, aur drift hone par kya hota hai, ka varnan karti hai. Uski kendriya table naap, answer key, threshold aur woh karwai batati hai jab koi number kam pade.

- Rollback pehle ke code par jaata hai. Jab model hi badal gaya ho, toh dono versions samasya baant te hain, isliye ek pinned model version aur ek kill switch bhi chahiye. Kill switch traffic ko turant ek saadhe raaste par bhejta hai, aur woh raasta maujood hona chahiye aur test hona chahiye.
- Jab provider model retire kare, toh uske saamne naapi har cheez dobara chalani chahiye, judge bhi.
- Feedback tabhi upyogi hai jab woh jo hua uske poore record ke saath aaye, aur privacy tool mein woh record khud saaf roop mein store hona chahiye.
