---
title: Aisa Plan Jis Par Doosre Bharosa Karein
summary: Strategy tab tak sirf ek vaakya hai jab tak doosre log us par amal na kar sakein. Anaya dates ki jagah nateejon ka waada karna seekhti hai, un logon ki list banana jo na keh sakte hain, aur project ko pehle se mara hua kalpana mein dekhna.
course: a6
terms:
  - roadmap | aisa plan jo dikhata hai ki team kis par kaam karegi aur lagbhag kab; kaam ka roadmap dates ki jagah teen column mein nateejon ka waada karta hai, Now, Next aur Later | outcome roadmap
  - kill criterion | pehle se likhi hui ek shart, jiske poora hone ka matlab hai ki aap kaam rok dete hain | kill criteria
  - OKR | objectives and key results: shabdon mein likha ek goal, kuch numbers ke saath jo dikhate hain ki aap wahan pahunche | OKRs, objectives and key results
  - key result | ek objective ke neeche ke teen-chaar numbers mein se ek jo dikhata hai ki aap wahan pahunche ya nahi; woh naapta hai ki logon ke liye kya badla, yeh nahi ki aapne kya ship kiya | key results
  - input metric | aisa number jise team seedha badal sakti hai aur jisse aap umeed karte hain ki nateeja hilega | input metrics
  - guardrail metric | aisa number jo key results ke peeche bhaagte hue kharab nahi hona chahiye | guardrail metrics, guardrail
  - stakeholder | koi bhi jo project ki madad ya rok kar sakta hai, ya jis par uska asar padta hai | stakeholders
  - decision memo | ek chhota document jo is tarah likha jaata hai ki vyast insaan uska pehla paragraph padh kar faisla kar sake | memo
  - pre-mortem | ek meeting jisme sab kalpana karte hain ki project fail ho gaya, aur shuru hone se pehle likhte hain ki kyun | 
  - dependency | koi bhi cheez jo aapko apni team ke bahar se chahiye khatam karne ke liye: doosri team ka kaam, supplier, data ka access, koi manzoori | dependencies
---

Anaya ki pehli manager ne use jo roadmap banana sikhaya tha woh train ke timetable jaisa dikhta tha. Side mein features, upar mahine, aur har ek ke liye ek saaf bar jo ek tareekh se shuru hota aur ek tareekh par khatam. Woh ek khoobsurat cheez thi. Usne aise darjan bhar roadmap banaye the, aur use ek bhi yaad nahi tha jo sach hua ho.

Dikkat yeh nahi thi ki dates galat thin, halanki woh thin. Dikkat yeh thi ki har bar kuch banane ka waada tha, aur kisi ne waada nahi kiya tha ki woh madad karega. Jab dates khisakti thin, jaisa hota tha, toh roadmap toote hue vaadon ki list ban jaata. Jab feature se kuch farak nahi pada, toh woh galat cheez ke toote hue vaadon ki list ban jaata.

Usne apni Sunday call ke baad Wednesday ko ek saaf page aur ek alag idea ke saath shuru kiya.

## Teen column, koi date nahi

Ek *outcome roadmap* mein calendar ki jagah teen column hote hain. **Now** woh hai jis par team abhi kaam kar rahi hai, aur woh pakka waada hai. **Next** woh hai jo woh uske baad karne ki umeed rakhti hai, mumkin hai par badal sakta hai. **Later** woh hai jo woh khoj rahi hai, mauzooda soch ke hisaab se kram mein, aur kisi se waada nahi. Har item feature nahi, ek nateeja hota hai, is mein badlaav ki log kya kar sakte hain, neeche kuch lines ke byore ke saath.

| Field | Pehle item ke liye uski entry |
| --- | --- |
| Outcome | Support staff ko chat mein pehchaan ke numbers ya tax numbers nahi dikhte, aur exports mein bhi nahi |
| Evidence | Ek hafte mein 400 mein se 37 conversations; paanch interviews |
| Owner | Anaya aur Imran |
| Depends on | Chat system ka read access; Lakshmi ki sign-off |
| Kill criterion | Roko agar chaar hafte mein agents das mein se do se zyada chats mein ise band kar dein |

Aakhri line woh thi jo usne pehle kabhi nahi likhi thi. *Kill criterion* ek pehle se tay ki hui shart hai jiska matlab hai ki aap ruk jaate hain. Yeh isliye kaam karta hai ki yeh manovaigyanik hai. Teen hafte ki mehnat ke baad koi bhi yeh kehne ka sahi insaan nahi hota ki kaam kharab chal raha hai, kyunki har kisi ke paas kehne ki wajah hoti hai ki sab theek hai. Shuru mein likh diya jaye, jab kisi ko abhi pyaar nahi hua, toh woh line saaf shabdon mein kehti hai *failure aisa dikhega*, itni saaf ki kisi ko behes nahi karni padti.

Yeh aur bhi zaroori hota hai jab kaam mein aisa software ho jo text padhta aur likhta hai. Koi pehle se nahi jaan sakta ki aisi cheez kaafi sahi hogi ya nahi, kyunki uski sahi hone ki kshamata aazma kar hi pata chalti hai. Pehle test se pehle waada ki gayi date suit pehna hua ek andaaza hai.

## Goal aur uske neeche ke numbers

Lakshmi ka sawaal abhi bhi uske desk par ek sticky note par tha: *Tumhein kaise pata chalega ki yeh kaam karta hai?*

Companies is tarah ke sawaal ka jawaab objectives aur key results se deti hain, jinhe aamtaur par *OKRs* kehte hain. Objective shabdon mein batata hai ki aap kya chahte hain. Uske neeche ke *key results* teen-chaar number hain jo dikhate hain ki aap wahan pahunche. Chaalaki yeh hai ki key result ko nateeja naapna chahiye, logon ke liye kya badla, output nahi, aapne kya ship kiya. "Privacy tool release karo" ek output hai; aap use kar sakte hain aur kuch nahi ho sakta. "Kam conversations personal detail ke saath chat se nikalti hain" ek nateeja hai.

Anaya ne likha:

*Objective: Sahaj ki support chat ko export karne ke liye surakshit banao.*

*Key result 1: Un conversations ka hissa jo chat se bina chhupayi personal detail ke nikalti hain, 91 percent se 99 percent tak jaaye.*

*Key result 2: Support agents batayein ki pachaas mein se ek se kam chat mein tool ne woh cheez chhupayi jo unhe chahiye thi.*

Do aur kism ke numbers inke saath baithe the. *Input metric* woh hai jise team seedha hila sakti hai, jis se nateeja hilne ki umeed hoti hai: uske liye, tool ne jitne fixed-shape numbers pakde unka hissa. Aap nateeje ko hukm nahi de sakte, lekin input ko behtar kar sakte hain. Aur *guardrail metric* woh number hai jo doosron ke peeche bhaagte hue kharab nahi hona chahiye. Yahi woh hai jo team ko aise jeetne se rokta hai jisse nuksaan ho. Uska tha false-alarm rate: tool ne jo chhupaya uska woh hissa jo personal tha hi nahi. Jo tool har message ka har number mita de, woh pehle key result par pura score karega aur bekaar hoga. Usne seema rakhi sau mein teen.

Ek aur farak tha jise use thaame rakhna tha, aur kaam jab technical ho jaye toh use khona aasaan tha. Tool ka apna score hoga, apne test par. Woh tool ka naap tha. Key results naapte the ki logon ke saath kya hua. Tool apne test par bahut achha kar sakta hai aur phir bhi un agents dwara ignore kiya ja sakta hai jinhe woh chidhaata hai, ya itni der se pahunch sakta hai ki farak na pade. Use dono tarah ke number chahiye the, aur use jaanna tha ki kaun sa kaun hai.

## Woh log jo na keh sakte hain

"Yeh padhega kaun?" Imran ne poochha tha. "Matlab sach mein padhega."

Yeh sahi sawaal tha, aur jiska jawaab use pata nahi tha. Koi bhi jo project ki madad ya rok kar sakta hai, ya jis par asar padega, woh *stakeholder* hai, aur unke baare mein kaam ki baat yeh hai ki woh barabar nahi hote. Usne do axes wala ek square banaya: kisi ke paas project par kitni taqat hai, aur use kitni parwaah hai. Phir usne kone mein naam rakhe.

| | Kam parwaah | Bahut parwaah |
| --- | --- | --- |
| **Taqat hai** | *Santusht rakho:* founders, Lakshmi | *Qareeb se kaam karo:* Imran, support ke head |
| **Kam taqat** | *Jaankari dete raho:* doosri product teams | *Shaamil rakho:* Farah ke agents, customers |

Har naam ke bagal mein usne do cheezein aur likhin. Unhe kis par naapa jaata hai, jo samjhaata hai ki woh kaise react karenge. Aur woh kya tay kar sakte the: woh chunte the, salaah dete the, ya veto kar sakte the.

Lakshmi galat kone mein thi. Uske paas asli taqat thi aur, jahan tak Anaya dekh sakti thi, dilchaspi lagbhag nahi, jo woh combination hai jo projects ko maarta hai. Is tarah ke kaam mein security, legal aur compliance ke logon ke paas aksar veto hota hai aur roz ki shaamilyat kam. Woh chupchaap upar-baayen kone mein baithe rehte hain jab tak launch se ek din pehle woh na nahi kehte, aur woh sahi hote hain. Ilaaj aasaan tha aur thoda sharmindagi bhara. Anaya ne uska naam daayen column mein sarka diya, saral tareeke se: har hafte use milne jaana aur poochhna ki use kya chahiye.

## Memo

Founders plan nahi padhenge. Woh memo ka pehla paragraph padhenge, aur shaayad doosra.

Usne use waise likha jaise use sikhaya gaya tha, pehle maang, phir wajah, phir kharcha, phir sabse bada risk, phir vikalp, kuch na karna bhi shaamil. *Decision memo* is tarah likha jaata hai ki vyast insaan sirf uski shuruaat padh kar kaam kar sake.

*Main Imran ka aadha samay aath hafte ke liye, aur lagbhag chaalees hazaar rupaye cloud kharch maang rahi hoon, ek chhota tool banane ke liye jo hamari support chat mein personal details ko aage jaane se pehle chhupa de. Ek hafte ki chats mein, 400 mein se 37 conversations mein pehchaan ka number, tax number, bank account ya pata tha, aur hamare logs, exports ya bahari company ke systems se unhe kuch hatata nahi. Sabse bada risk yeh hai ki tool Hinglish mein likhi cheezein chhod sakta hai. Hum ise kisi live chat ko chhoone se pehle asli udaharanon par test karenge, aur agar agents das mein se do se zyada chats mein ise band karte hain toh hum ruk jaayenge.*

Usne ise Imran ko padh kar sunaya, jisne "Hm" kaha, jo uske liye taareef thi.

## Antim sanskaar ki kalpana

Meeting se pehle usne ek jama-avada rakha jisse Imran darta tha aur Farah ko, sabki hairaani ke liye, maza aaya. Niyam saral tha. Sabko maan lena tha ki ab se chhe mahine baad hain aur project fail ho chuka hai. Unhe, alag-alag aur bina baat kiye, likhna tha ki kyun.

*Pre-mortem*, jaisa is abhyaas ko kehte hain, isliye kaam karta hai ki log ek kalpit failure mein woh risks batate hain jo woh us plan ke baare mein kabhi nahi uthate jise samarthan dene ki unse umeed ho.

Farah ne likha ki agents ne ise band kar diya kyunki usne baatcheet ke beech ek customer ka callback number chhupa diya, aur kisi ne unhe nahi bataya ki use wapas kaise laaya jaye. Lakshmi ne likha ki usne Hinglish mein likha ek pata chhod diya, ek screenshot export mein bahar chala gaya, aur ek regulator ne poochha ki yeh kaise mumkin hai. Imran ne likha ki usne har jawaab mein ek second jod diya, aur customers ne shikayat ki ki chatbot dheema lagta hai. Anaya ne likha ki test file kabhi update nahi hui, isliye koi nahi bata sakta tha ki version chaar version teen se behtar hai ya nahi.

Chaar failures. Usne har ek risk list mein likha, kitna sambhav tha, kitna nuksaan hota, kiska zimma tha, aur woh kya karenge.

| Risk | Sambhav | Nuksaan | Owner | Kya karna hai |
| --- | --- | --- | --- | --- |
| Agents ise band kar dete hain | Madhyam | Zyada | Farah | Agents ko dikhao ki woh kya chhupata hai, aur use dobara kaise dekhein |
| Hinglish pate chhod deta hai | Zyada | Zyada | Anaya | Launch se pehle asli Hinglish par test karo; fail ho toh scope chhota karo |
| Jawaab dheema karta hai | Madhyam | Madhyam | Imran | Pehle hafte se jodi hui der naapo |
| Test file purani ho jaati hai | Zyada | Madhyam | Anaya | Ek insaan ka zimma; har change par update |

Uske bagal mein usne ek chhoti list rakhi, un cheezon ki jo use doosre logon se chahiye thi. *Dependency* woh koi bhi cheez hai jo project ko team ke bahar se chahiye: kisi aur ka kaam, supplier ka sahyog, data ka access, koi manzoori. Yahin plans khisakte hain, kyunki team mein se koi unhe control nahi karta. Uske teen the: chat system ka read access, kuch bhi live hone se pehle Lakshmi ki sign-off, aur bahari company se waada ki unka software text lene ka tareeka nahi badlega. Pehla use Friday tak mil sakta tha. Teesre ke baare mein woh kam pakki thi.

## Wednesday dopahar

Founders ne gyarah minute liye. Unhone poochha kitna waqt, kitna paisa, aur kya Lakshmi sahmat hain. Anaya ne teesre sawaal ka jawaab pehle diya. Faisla us log mein gaya jo usne pehli raat shuru kiya tha, uske neeche ek nayi line ke saath.

*Main apna man badal doongi agar: Imran ka aadha samay teesre hafte ke baad nahi bachaya ja sakta.*

Woh corridor mein bahar nikli aur usne dekha ki uske haath sthir hain, jisse use hairaani hui. Aisa plan jis par doosre bharosa kar sakein, woh use samajh aane laga, woh plan nahi jo bharose se bhara lagta hai. Woh woh hai jisne unhe pehle hi bata diya ho ki woh kaise fail ho sakta hai.

## Saath le jaane layak baatein

Jo roadmap teen column mein nateejon ka waada karta hai, Now, Next aur Later, woh dates par features ka waada karne waale se kam tootta hai, aur shuru mein likhi hui rukne ki shart rukna aasaan bana deti hai. Goals ko ek objective ke roop mein kuch numbers ke saath likhna behtar hai, jahan numbers naapte hain ki logon ke liye kya badla, kya ship hua nahi. Unke saath woh numbers rakhe jaate hain jo team seedha hila sakti hai, aur woh numbers jo kharab nahi hone chahiye. Har project mein aise log hote hain jo use bacha ya rok sakte hain, aur khatarnaak woh hain jinke paas taqat hai aur dilchaspi nahi. Memo maang se shuru hota hai. Aur woh meeting jisme sab kalpana karte hain ki failure ho chuka hai, yeh jaanne ka sabse sasta tareeka hai ki woh kaise ho sakta hai.
