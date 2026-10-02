---
title: Badalti Rehne Wali Cheez Ki Spec
summary: Ek model ke retire hone ka tees din ka notice dikhata hai ki jo software do baar ek jaisa behave nahi karta uski specification mein asal mein kya hona chahiye, aur AI ko band karne ka switch kya chalta chhodna chahiye.
course: ch18
terms:
  - rollback | code ke pichhle version par laut jaana, jiske liye nayi deployment chahiye aur jo madad nahi karta jab dono versions ek jaisa kharab vyavahaar saajha karte hain | rollbacks, roll back
  - kill switch | ek flag jo traffic ko turant ek saade non-AI raaste par bhej deta hai, bina nayi deployment ke; yeh tabhi kaam karta hai jab woh raasta maujood ho aur haal hi mein test kiya gaya ho | kill switches
  - pinned version | model ka woh version jise aapne naam se tay kar diya hai, taaki provider aapko bataye bina use aapke neeche se badal na sake | 
---

Email raat ke do bajkar das minute par aaya, Imran ne use forward kiya tha, ek subject line ke saath jo sirf kehti thi *Yeh padho.*

Woh us bahari company se tha jo chatbot ke jawaab likhti thi. *Hum aapko bata rahe hain,* woh shuru hua, bank ke patr ke lahje mein, *ki jis model ka aap abhi istemaal kar rahe hain woh tees din mein retire ho jayega. Us tareekh ke baad uski requests fail ho jayengi. Hum uske uttaradhikari par jaane ki salaah dete hain, jo behtar kshamata deta hai.*

Anaya ne use lete hue padha, phone ko haath ki doori par pakde hue. Woh ghabrayi nahi thi, theek se. Use jo mehsoos hua woh us insaan ka thanda ginit tha jise bataya gaya ho ki ek seedhi jis par woh rehti aa rahi hai ek khaas tareekh par hata di jaayegi. Usne bees minute is par socha. Phir woh uthi, chai banayi, aur specification kholi, kyunki use laga ki ab uski jaanch hone wali hai.

## Ek spec jo ek range ki umeed rakhti hai

Ek saadharan specification maanti hai ki wahi input wahi output deta hai. Yeh karo, woh paao. Ek test karne wala insaan jaanchta hai. Jab woh paas ho jaye, toh ho gaya. Jo machine text padhti aur likhti hai, uske liye isme se kuch nahi tikta. Wahi input outputs ki ek range paida karta hai, aur woh range tab hilti hai jab provider koi model badalta hai jise aap control nahi karte.

Isliye aise kisi ke liye specification ko kuch alag kehna padta hai. Woh vyavahaar ki ek naapi hui range batati hai, saboot ki kisi ne use naapa, aur kya hota hai jab woh bahak jaye. Anaya chhe mahine se ek likh rahi thi bina use yeh naam diye, aur jab agle din usne use mez par bichhaya toh woh chaar badlaavon par aaya.

Acceptance, jo saadharan spec mein paas ya fail hota hai, ek naam wali answer key par ek score ban gaya, tay settings par. Ek test plan cases ka ek tay set ban gaya jo har release par paas hone chahiye, muft code checks ke saath. "Jab features kaam karein tab ho gaya" ban gaya "jab ise in numbers par naapa jaye, gyaat failures likhe hue ke saath, tab ho gaya". Aur pichhle version par lautne ka saadharan khayal, jise engineers *rollback* kehte hain, kuch bada ban gaya: ek pinned version, versioned nirdesh, aur ek switch jo machine ko band kar deta hai.

Use inme se kuch ko gadhne ki zaroorat nahi thi. Har ek pehle se bana hua tha.

## Numbers kya kehte hain

Specification ka sabse zyada kaam karne wala hissa, usne seekha tha, beech ki table hai, aur achhi table ko ek sandehi jaanch sakta hai. Woh batati hai ki kya naapa ja raha hai, kaun si key ke khilaaf, kis seema par, aur agar woh chhoote toh kya hota hai. Usne use Lakshmi ki awaaz dimaag mein rakh kar likha.

| Kya naapa gaya | Kis ke khilaaf | Seema | Agar isse neeche aaye | 
| --- | --- | --- | --- |
| Fixed-shape numbers mile | Answer key, maujooda version | Sau mein kam se kam 98 | Release roko |
| Jo chhupa gaya jo personal nahi tha | Answer key, maujooda version | Sau mein 3 se zyada nahi | Anaya ko alert karo |
| Har message par jodi gayi der | Live timing | Aamtaur par 0.3 second se kam; sabse dheere 20 mein 1 ek second se kam | Imran ko alert karo |
| Hamle jo output badal dein | 50 injected messages | Koi nahi | Release roko |
| Prati message kharcha | Billing | 60 paise se kam | Anaya ko alert karo |

Sabse neeche, alag type mein, usne woh line likhi jo zyadatar specifications chhod deti hain. *Kill switch kya band karta hai, aur uske baad product phir bhi kya karta hai.*

## Wapas jaane jaisa nahi

Is line par use ummeed se zyada sochna pada, aur Imran ko madad karni padi.

Rollback pehle ke code par jaata hai. Yeh ek nayi deployment hai, aur ismein samay lagta hai. Yeh bilkul kaam ka nahi hota jab dono versions ek jaisa kharab vyavahaar saajha karte hon, jaise agar provider ne unke neeche model badal diya hai, kyunki naye model par purana code utna hi galat hoga. Us sthiti mein jo chahiye woh kuch tez aur seedha hai: ek switch, ek configuration file mein ek flag, jo traffic ko turant ek saade raaste par bhej de jo machine ka istemaal nahi karta. Yeh ek *kill switch* hai. Yeh tabhi kaam karta hai jab saada raasta abhi bhi maujood ho, aur jab kisi ne use haal hi mein chalaya ho. Jis kill switch ko kisi ne test nahi kiya woh ek umeed hai.

"Yeh traffic ko kahan bhejta hai?" Anaya ne poochha. "Chatbot ke liye, mujhe pata hai. Farah ki team haath se jawaab deti hai. Par guard ke liye?"

Imran ne dheere likha. "Agar tum guard ko poora band kar do, toh kuch nahi chhupta. Yeh sabse bura nateeja hai. Isliye kill switch guard ko band nahi kar sakta. Woh *models* ko band karta hai."

Safe mode sirf pattern checker chalayega, jo saade niyam the aur bahak nahi sakta tha, aur ek jaan-boojh kar bhonda atirikt niyam: nau ya zyada ankon ki koi bhi qataar chhupa do, chahe woh kuch bhi ho. Woh har naam aur har pata chhod dega. Answer key par woh fixed shape wale numbers mein se sau mein lagbhag chhiyaanbe pakad leta. Woh bahut false alarms utha deta. Woh istemaal karne mein kabhi sukhad nahi hoga. Lekin woh wahan hota, provider jo kuch karta usse achhoota, aur use raat ke teen baje koi aisa insaan chalu kar sakta tha jisne code kabhi dekha hi nahi.

Usne use specification mein poora likha, apne numbers ke saath. *Safe mode: sirf niyam. Fixed-shape numbers mein se sau mein lagbhag 96 dhoondhta hai. Koi naam ya pata nahi dhoondhta. Bahut false alarms. Har hafte test kiya jaata hai.* Usne *har hafte* ko underline kiya.

## Tees din

Notice, Imran ne kaha, jo unhone banaya tha uska ek nishpaksh test tha, aur usne use bataya ki kya, kram mein, dobara chalana hai. Model badalna settings ka badlaav nahi hai. Ek naya model purane ke khilaaf naapi har cheez ko amaanya kar deta hai.

Pehle, poori answer key, yeh dekhne ke liye ki guard ne kya kiya jab chatbot ke saar aur jawaab naye model se aaye. Doosre, hamlon ka tay set, yeh dekhne ke liye ki kya naye model ko ab bhi galat vyavahaar mein baatein karke laya ja sakta hai. Teesre, machine judge aur Anaya ki apni marking ke beech ki sahmati. Imran ne is par zor diya. Judge bhi ek model call hai, aur jo judge purane model ke khilaaf jaancha gaya tha woh naye ke khilaaf nahi jaancha gaya. Chauthe, naye daamon par kharcha. Paanchve, sabse dheeme jawaab.

"Tum kuch nahi chhodte," usne kaha. "Jin teams ke paas test set nahi hota woh tees din mein problems nahi dhoondhti. Woh unhe production mein dhoondhti hain."

Dono ko ek dopahar lagi, jise Imran ne saboot kaha ki vasant bekar nahi gaya tha. Naya model, jo apne saar thodi alag shaili mein likhta tha, phone numbers aise format mein daalta tha jo purane ne kabhi nahi kiya tha: ek plus chinh, ek country code aur ek dash ke saath, jaise +91-98765-43210. Pattern checker ne use nahi dekha tha. Answer key ki gyarah rows laal ho gayin.

"Ek dopahar mein mil gaya," Anaya ne kaha.

"Ek key ke saath ek dopahar mein mil gaya. Socho ise September mein ek customer se dhoondhna." Imran ne niyam joda. "Isi liye key hai. Yeh launch ke liye likha document nahi hai. Yeh infrastructure hai."

## Aisi feedback jise istemaal kiya ja sake

Specification mein ek aur cheez thi, aur woh Farah ki thi. Uske agents ke paas har chat par ek button tha, jisme likha tha *guard ne woh chhupa diya jo mujhe chahiye tha.* Ab tak usne ek click ke siwa kuch nahi bachaya tha.

"Akela thumbs-down lagbhag bekaar hai," Imran ne kaha. "Tum use dobara nahi bana sakte. Tum galat jawaab ko us sahi jawaab se alag nahi bata sakte jo user ko pasand nahi aaya. Lekin jo thumbs-down kya hua uske poore record ke saath aata hai woh ek taiyaar test case hai."

Record ka matlab tha message, guard ne kya dhoondha, usne kya tay kiya, aur har cheez ke kaun se versions chal rahe the. Do buttons ke beech ka farak, usne kaha, lagbhag do din ki engineering tha.

Anaya haan kehne wali thi jab usne problem dekhi, aur use jitni saralta se kah sakti thi usne kaha. "Record mein message hoga."

"Hoga."

"Aur agar guard us message par fail hua, toh record mein wahi hoga jo use chhupana tha."

"Haan." Imran peeche baitha. "Isliye record saaf store hona chahiye. Hum chhupa hua version aur positions save karte hain, aur kachcha version sirf wahan rakhte hain jahan bahut kam log pahunch sakein, thode samay ke liye, aur likh lete hain ki kisne dekha." Yeh ek saral idea mein ek chidhane wala jod tha, aur sahi tha. Debugging ki madad jo raaz store karti hai woh usi problem ko dobara banati hai jise hal karne ke liye woh bani hai.

## Kram mein rakhna

Hafte ke ant tak notice ek routine ban chuka tha. Model ko dono taraf ek naam wale version par pin kiya gaya tha. Safe mode likha gaya tha, ek test mein on kiya gaya, off kiya gaya, aur likha gaya. Key mein gyarah nayi rows thin. Aur specification, jo ek feature ke document ki tarah shuru hui thi, ab ek aise system ka document thi jo apne neeche badalta rahega, aur batati thi ki jab woh badle toh kya karna hai.

Anaya ne us log mein ek aakhri line jodi jo March mein shuru hua tha. *Main apna man badal doongi agar: provider guarantee de sake ki ek model kabhi nahi badlega.* Use umeed nahi thi ki koi koshish karega.

## Saath le jaane layak baatein

Jo cheez do baar ek jaisa behave nahi karti uski specification vyavahaar ki ek naapi hui range batati hai, saboot ki use kaise naapa gaya, aur kya hota hai jab woh bahak jaye. Uski beech ki table naap, answer key, seema, aur jab koi number kam pade toh karyavahi ka naam leti hai. Rollback pehle ke code par jaata hai, lekin jab model khud badal gaya ho, toh dono versions ek problem saajha karte hain, isliye aapko ek pinned version aur ek kill switch bhi chahiye jo traffic ko turant ek saade raaste par bheje, jo maujood aur test kiya hua hona chahiye. Jab ek provider koi model retire karta hai, toh uske khilaaf naapi har cheez dobara chalani padti hai, judge bhi shaamil. Aur feedback tabhi kaam ki hai jab woh jo hua uske poore record ke saath aaye, jo ek privacy tool mein khud saaf store hona chahiye.
