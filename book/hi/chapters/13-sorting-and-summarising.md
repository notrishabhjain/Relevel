---
title: Chhaantna Aur Saar Likhna
summary: Ek kaam jiska sahi jawaab hai aur ek jiska nahi. Team ek sorter ko naapti hai, woh failure dhoondhti hai jise uska ek akela score chhupa raha tha, aur phir ek saar mein jaanchti hai ki usne kya chhod diya.
course: ch24 ch25
terms:
  - classifier | ek program jo har input ko tay categories ke set mein se ek mein daalta hai, jaise PAN, Aadhaar, mobile number ya inmein se koi nahi | classifiers
  - must-keep list | har document ke liye woh tathya jo padhne wale ko nahi khone chahiye, jiske khilaaf har saar jaancha jaata hai | must-keep lists
---

Farah ke desk par ek chhoti peetal ki Ganesh murti thi, ek mug jis par likha tha *World's Okayest Team Lead*, aur us pal, chaar dheron mein kaagaz ki chaalees parchiyan.

Unhe usne subah ek printout se kaat kar banaya tha. Har parchi par ankon ya akshron ki ek string thi, us tarah ki jo uske agents din bhar dekhte the, kuch shape mein asli aur kuch nahi, aur peeche pencil se jawaab likha tha: woh asal mein kya tha. Das PAN the, paanch akshar, chaar ank aur ant mein ek akshar ke saath. Das Aadhaar numbers the, un sab tareeko se likhe jinse log likhte hain. Das mobile numbers. Aur das inmein se koi nahi: order numbers, loan reference numbers, ek account number, ek policy code.

"Theek hai," Anaya ne kaha. "Dekhte hain sorter chhaant sakta hai ya nahi."

## Ek sorter jiska sahi jawaab hai

Imran ne pehla version do shaamon mein likha tha. Woh text ke ek tukde ko dekhta tha aur batata tha ki woh chaar dibbon mein se kaun sa hai. Jo program yeh karta hai, har input ko tay categories ke set mein se ek mein daalna, use *classifier* kehte hain, aur bahut saara kaam ka software ek classifier hai. Zyadatar cheezon jo ek machine karti hai unke muqable iska bada fayda yeh hai ki koi keh sakta hai ki har jawaab sahi tha ya nahi. Jab sahi jawaab hota hai, aap galtiyan gin sakte hain. Jab aap galtiyan gin sakte hain, aap system ko jaan-boojh kar behtar bana sakte hain.

Usne pichhle teen hafton mein jo seekha tha wahi istemaal kiya tha. Nirdesh ne kaam ka naam liya. Usne do worked examples dikhaye, ek tedha. Format har baar ek jaisa nikla.

Unhone chaalees parchiyan chalayin. Scoreboard ne ek line chhapi.

*40 mein se 35 sahi. 87.5 percent.*

"Yeh achha hai," Farah ne khush hote hue kaha.

"Yeh ek number hai," Anaya ne kaha. "Mujhe abhi nahi pata ki achha hai ya nahi." Woh April ki shuruaat se is baat ko lekar saavdhaan thi, jab usne seekha tha ki ek akela figure kitni baar woh failure chhupa leta hai jo maayne rakhta hai. "Dibbe ke hisaab se dikhao."

## Ek number ne kya chhupaya

Imran ne nateeje ko chaar rows mein baanta.

| Parchi asal mein kya thi | Sahi | Galat |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| Inmein se koi nahi | 6 | 4 |

Failure sabse neeche ki row mein tha. "Inmein se koi nahi" ki das parchiyon mein se chaar, order numbers aur account numbers aur reference codes, Aadhaar numbers ke roop mein chhaante gaye the. Woh barah ank lambe the, aur sorter ne shape dekhi aur wahin ruk gaya. Aur ek asli Aadhaar number "inmein se koi nahi" mein chhaanta gaya tha, kyunki customer ne use galat jagahon par dash aur space ke saath likha tha.

Kul figure ne teen dibbon par bedaag pradarshan ko chauthe par kharab pradarshan ke saath ausat kar diya tha. Ek akela accuracy number team ko behtar mehsoos karwane ka achha tareeka hai. Woh bahut kam batata hai ki woh kahan galat ja rahi hai.

"Do tarah ki galtiyan," Imran ne kaha, "ek jitni badi nahi hain."

Farah ne dheron ko dekha. "Nahi. Nahi hain."

Jab sorter ne order number ko Aadhaar number kaha, toh guard kuch aisa chhupa deta jo raaz nahi tha. Agent, chat padhte hue, wahan ek khaali jagah dekhta jahan order number tha. Use customer se use dobara type karwana padta. Isme lagbhag tees second aur thodi chidchidahat lagti. Jab usne Aadhaar number ko "inmein se koi nahi" kaha, toh number nikal gaya. Woh chat history mein gaya, logs mein, hafte ke export mein aur bahari company ke system mein, aur hamesha ke liye. Ek galti ek asuvidha thi; doosri woh cheez thi jise rokne ke liye poora project tha.

"Toh hum sasti galti ki taraf jhukte hain," Anaya ne kaha.

"Jab woh pakka nahi hota, toh woh number ko sensitive maanta hai." Imran ne use board par ek line mein likha. "Hum kam chhoote paane ke liye zyada false alarm sweekar karte hain. Yeh ek niyam hai ki hum kya pasand karte hain. Yeh technical faisla nahi hai."

"Faisla kiska hai?"

"Tumhara," Imran ne kaha. "Aur Lakshmi ka. Aur Farah ka, kyunki khaali jagahein use hi padhni hain."

Shaayad yeh hafte ka sabse zaroori pal tha, halanki kuch hota nahi dikha. Anaya ne samjha ki use ek aisa chunav thama diya gaya hai jo koi engineer uske liye nahi kar sakta, kyunki yeh is baare mein tha ki kitni asuvidha kitne risk ke badle mein dena hai. Usne ek mushkil bhi samjhi. Plan mein usne false alarms par ek seema rakhi thi, sau mein teen, ek guardrail ke taur par. Saavdhaani ki taraf jhukne se woh upar jaate. Dono number ek doosre ke khilaaf kheenchte, aur us kheenchne ko use khule mein sambhalna hoga, un logon ke saath jo har taraf ki parwaah karte the.

## Ek saar jo achha padhta hai

Hafte ka doosra kaam bilkul alag kism ka tha.

Chatbot mein ek feature tha jo Farah ki team bahut istemaal karti thi. Jab koi baatcheet chatbot ke sambhalne ke liye bahut uljhi ho jaati, toh woh customer ko insaani agent ko saunp deta, aur, taaki agent ko chaalees messages na padhne padein, upar ek chhota saar likh deta. Farah ko bataya gaya tha ki woh achha kaam karta hai. Sab yahi kehte the. Woh khoobsurati se padha jaata tha.

"Sab isliye kehte hain kyunki woh use padhte hain," Anaya ne kaha. "Chalo dekhte hain ismein hai kya."

Saar ka koi akela sahi jawaab nahi hota, isliye teams bina jaane summarisers ship kar deti hain ki woh kaam karte hain ya nahi. Aap program se gadya ko grade nahi kar sakte, aur saar sundar ho sakta hai aur phir bhi woh line chhod sakta hai jo maayne rakhti thi. Lekin aap yeh jaanch sakte hain ki khaas tathya bache ya nahi.

Isliye koi saar padhne se pehle, usne woh list banayi jo use pehle banani chahiye thi. Woh ek saral sawaal se shuru hoti hai: ise padhega kaun, aur woh agle kya karega? Padhne wala ek naraaz customer se baat karne wala agent tha, aur agent agle kya karega: unse kuch kahega. Isliye jo tathya nahi khone chahiye the woh woh the jinki gair-maujoodgi agent ko sharminda karti. Paanch lambi baatcheet mein se har ek ke liye, usne aur Farah ne ek *must-keep list* likhi: woh tathya jo padhne wale ko nahi khone chahiye.

Pehli baatcheet ke liye woh yeh thi: *Customer kehti hai usne 3 tareekh ko bhugtaan kiya. Customer se Friday tak callback ka waada kiya gaya tha. Double charge ki shikayat. Loan application number ka zikr.*

Phir unhone paanchon saar padhe, shaili ke liye nahi, balki listein bagal mein rakh kar, tick karte hue.

Teen ne sab kuch rakha. Ek ne waada kiya hua callback chhod diya. Us saar ko padhne wala agent customer ko bina jaane-bujhe call karta aur use andaaza nahi hota ki use call ka intezaar karne ko kaha gaya tha. Aur ek saar, jo bahut pyaara tha, ne chat se customer ka poora Aadhaar number apni doosri line mein copy kar liya tha.

Farah ne apni pen rakh di. "Saar mein number ki ek copy hai."

"Yeh uske rehne ki ek doosri jagah hai," Imran ne kaha. "Saar store hota hai. Woh agent ke paas jaata hai. Woh logs mein jaata hai. Hamein saar ko bhi saaf karna hoga, matlab guard ko bahar jaane ke raaste par bhi baithna hoga, andar aane ke raaste par bhi."

Anaya ne ise design mein jod diya, history wale pehle niyam ke neeche, usi haath mein: *jo andar jaata hai use saaf karo; jo bahar aata hai use saaf karo.* Usne woh sukhad kasaav mehsoos kiya jise woh ab pehchaanne lagi thi ki yeh ek problem ke aur sahi hokar chhota hone ka ehsaas hai.

## Do kaamon mein kya saajha hai

Jab usne Sunday ko Meenakshi ko hafte ka byora diya, toh usne paya ki woh kuch aisa samjha rahi hai jo machines ke baare mein mushkil se tha.

"Tumne tay kiya ki failure kise gina jaaye," Meenakshi ne kaha. "Pehle mamle mein, ek galat dibba, aur kaun sa galat dibba zyada bura. Doosre mamle mein, ek chhoota hua tathya. Phir tumne use gina, aur woh nahi jo tumne ittefaq se dekh liya."

"Mujhe lagta rehta hai ki hum isi tareeke ko kisi bhi cheez ko parakhne mein istemaal kar sakte the. Bharti ki prakriya. Ek triage desk."

"Kar sakte the." Billi ne kuch kaha, aur Meenakshi ne usse dhyaan nahi diya. "Is kshetra ka zyadatar hunar machine ke baare mein nahi hai. Yeh is baare mein hai ki aap kis cheez se darte hain, uske baare mein exact hona."

## Saath le jaane layak baatein

Classifier har input ko tay dibbon ke set mein se ek mein daalta hai, aur kyunki sahi jawaab hota hai, use naapa ja sakta hai. Ek akela kul score ek dibbe ka kharab nateeja chhupa sakta hai, isliye har category ko alag ginna chahiye, aur galti ki dono dishaon ki tulna karni chahiye, kyunki unki keemat shaayad hi ek jaisi hoti hai. Kis galti ki taraf jhukna hai yeh tay karna ek product faisla hai jo un logon ke saath kiya jaata hai jo har ki keemat uthate hain. Saar ka koi akela sahi jawaab nahi hota, isliye use test karne ka tareeka yeh hai ki har document ke liye woh tathya likho jo padhne wale ko nahi khone chahiye, aur har saar ko us list se jaancho. Aur jo kuch bhi system likhta hai woh personal details ke rehne ki ek aur jagah hai, isliye jo bahar aata hai use bhi saaf karna chahiye, utna hi jitna jo andar jaata hai.
