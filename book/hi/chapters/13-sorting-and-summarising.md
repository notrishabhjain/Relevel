---
title: Chhaantna Aur Saar Likhna
summary: Ek kaam ka sahi jawaab hota hai aur doosre ka nahi. Team ek sorter ko naapti hai aur woh failure dhoondhti hai jise ek score chhupa raha tha, phir ek saar ko us cheez ke liye jaanchti hai jo woh chhod gaya. Chapter classifiers, galtiyon ki keemat aur must-keep list samjhata hai.
course: ch24 ch25
goals:
  - classifier batana aur samjhana ki ek overall score kharab nateeja kaise chhupa sakta hai
  - galti ki do dishaon ki keemat ki tulna karna aur tay karna ki kis taraf jhukna hai
  - saar ko uske gadya ke bajaye must-keep list se test karna
  - pehchaanna ki system jo kuch bhi likhta hai woh personal details ke store hone ki ek aur jagah hai
terms:
  - classifier | ek program jo har input ko tay categories ke set mein se ek mein daalta hai, jaise PAN, Aadhaar, mobile number ya inmein se koi nahi | classifiers
  - must-keep list | har document ke liye woh tathya jo padhne wale ko nahi khone chahiye, jiske khilaaf har saar jaancha jaata hai | must-keep lists
---

April ki ek subah Farah Sheikh ne ek printout se kaagaz ki chaalis parchiyan kaatin. Har ek par ankon ya akshron ka ek string tha, jaisa uske agents din bhar dekhte the, kuch asli shakl ke aur kuch nahi, aur peeche pencil mein likha tha ki woh asal mein kya hai. Das PAN the, das Aadhaar numbers the jo logon ke likhne ke har tareeke mein likhe the, das mobile numbers the, aur das in mein se koi nahi the: order numbers, loan reference numbers, ek account number, ek policy code. Anaya ne prastaav rakha ki dekhein ki team ka sorting program unhe chhaant sakta hai ya nahi.

Yeh chapter us hafte kiye gaye do tests ka anusaran karta hai. Ek ek aise kaam ka tha jiska sahi jawaab hota hai, aur doosra aise kaam ka jiska nahi hota. Pehle ne dikhaya ki ek achha average ek failure kaise chhupa sakta hai, aur doosre ne dikhaya ki woh text kaise test karein jise program grade nahi kar sakta.

## Case: chaalis parchiyan

Imran Qureshi ne sorter ka pehla version do shaamon mein likha tha. Woh text ka ek tukda dekhta aur batata ki woh chaar dabbon mein se kis mein jaata hai. Jo program har input ko tay categories mein se ek mein rakhta hai woh *classifier* hai, aur bahut saara upyogi software ek hota hai. Machine ke zyadatar kaamon se iska phayda yeh hai ki koi bata sakta hai ki har jawaab sahi tha ya nahi. Jab sahi jawaab hota hai, galtiyan gini ja sakti hain, aur jab galtiyan gini ja sakti hain, toh system jaanboojh kar behtar kiya ja sakta hai.

Usne pichhle teen hafton mein jo seekha tha woh istemaal kiya. Instruction ne kaam ka naam liya, do worked examples diye, jinme se ek mushkil tha, aur output ka format tay kiya. Chaalis parchiyan chalayin gayi aur scoreboard ne ek line chhapi: 40 mein se 35 sahi, yaani 87.5 percent. Farah khush thi. Anaya ne kaha ki yeh ek number hai aur use abhi pata nahi ki woh achha hai ya nahi, aur use dabbon ke hisaab se dekhne ko kaha.

## Ek number ne kya chhupaya

Imran ne nateeje ko chaar rows mein baanta.

Table: Sorter ke nateeje dabbon ke hisaab se
| Parchi asal mein kya thi | Sahi | Galat |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| Inme se koi nahi | 6 | 4 |

Failure neeche wali row mein thi. "Inme se koi nahi" ki das mein se chaar parchiyan, jo order numbers, account numbers aur reference codes the, Aadhaar numbers ki tarah sort ho gayi thi. Woh baarah ank ke the, aur sorter ne shakl dekhkar ruk gaya tha. Ek asli Aadhaar number "inme se koi nahi" ki tarah sort hua kyunki customer ne use galat jagah dash aur space ke saath likha tha.

Overall figure ne teen dabbon ke bekar nateeje ko chauthe ke kharab nateeje ke saath average kar diya tha. Ek single accuracy number team ko behtar mehsoos karwane ka achha tareeka hai, aur yeh bahut kam batata hai ki galtiyan kahan hain.

::: key Dono galtiyan ek jitni badi nahi hain
Jab sorter order number ko Aadhaar number kehta hai, toh guard woh cheez chhupata hai jo raaz nahi hai. Agent ek order number ki jagah khaali dekhta hai aur customer se use dobara type karne ko kehta hai, jisme lagbhag tees second aur thodi chidh lagti hai. Jab sorter Aadhaar number ko "inme se koi nahi" kehta hai, toh number nikal jaata hai. Woh chat history, logs, hafte ke export aur bahari company ke system mein jaata hai, aur wahin rehta hai. Ek galti pareshani hai. Doosri woh cheez hai jise rokne ke liye project bana hai.
:::

Niyam yeh nikla ki jab sorter ko shak ho toh woh number ko sensitive maane. Team zyada false alarm sweekar karti hai, kam chhoot ke badle. Imran ne zor diya ki yeh pasand ka bayaan hai, technical faisla nahi. Anaya ne poochha ki yeh faisla kiska hai. Uska jawaab tha: uska, Lakshmi ka, aur Farah ka, kyunki Farah ke agents blank dekhenge.

Is baatcheet mein ek mushkil thi jise Anaya ne turant pehchaana. Plan mein usne guardrail ki tarah sau mein teen false alarm ki seema rakhi thi. Saavdhaani ki taraf jhukne se woh number badhta. Dono number ek doosre ko khinchenge, aur use us tension ko un logon ke saath khulkar sambhaalna hoga jo har taraf ki parwaah karte hain.

## Ek saar jo achha padha jaata hai

Hafte ka doosra kaam alag tarah ka tha. Jab koi baatcheet chatbot ke liye bahut uljhi ho jaati, toh woh customer ko insaan agent ke paas bhejta aur upar ek chhota saar likhta, taaki agent ko chalis messages padhne na padein. Farah ko bataya gaya tha ki woh achha kaam karta hai. Sab yahi kehte the, kyunki woh bahut achha padha jaata tha, aur Anaya ne dhyaan dilaya ki sab yahi isliye kehte the kyunki unhone use padha tha, aur poochha ki usme asal mein kya hai.

Saar ka koi ek sahi jawaab nahi hota, isliye teams aksar summarisers ko bina jaane ship kar deti hain ki woh kaam karte hain ya nahi. Program gadya ko grade nahi kar sakta, aur saar sundar ho kar bhi woh line chhod sakta hai jo maayne rakhti thi. Par yeh jaancha ja sakta hai ki khaas tathya bache ya nahi.

Anaya ne ek sawaal se shuru kiya jo pehle aana chahiye: yeh kaun padhta hai, aur uske baad woh kya karega? Padhne wala ek agent tha jo ek pareshaan customer se baat karne wala tha, isliye jo tathya kho nahi jaane chahiye woh woh the jinki ghairmaujoodgi agent ko sharminda karti. Paanch lambi conversations mein se har ek ke liye usne aur Farah ne *must-keep list* likhi, yaani un tathyon ki list jo padhne wale ko kho nahi dene chahiye. Pehli conversation ki list yeh thi: customer kehti hai ki usne 3 tareekh ko bhugtaan kiya; usse Friday tak callback ka vaada kiya gaya tha; shikayat double charge ke baare mein hai; ek loan application number ka zikr hua.

Phir unhone paancho saar list ko saath rakhkar padhe, tick karte hue.

Table: Paanch saaron ne kya rakha
| Saar | Nateeja |
| --- | --- |
| Teen | List ka har tathya rakha |
| Ek | Vaade ka callback chhod diya. Agent bina jaane ki customer se callback ka vaada kiya gaya tha, thande dil se call karta |
| Ek | Achha likha tha, aur usne chat se customer ka poora Aadhaar number apni doosri line mein copy kar diya tha |

Aakhri dekhkar Farah ne pen neeche rakh diya. Saar ke paas number ki ek copy thi. Imran ne dhyaan dilaya ki yeh number ke rehne ki doosri jagah thi: saar store hota hai, agent ko jaata hai aur logs mein jaata hai. Isliye saar ko bhi saaf karna padta, jiska matlab tha ki guard ko andar jaane ke raaste par bhi aur bahar aane ke raaste par bhi baithna padta.

::: key Jo andar jaaye use saaf karo, aur jo bahar aaye use bhi
System jo kuch bhi likhta hai usme us text se copy ki hui personal details ho sakti hain jo usne padha. Anaya ne ise history ke pichhle niyam ke paas design mein jodaa: andar jaane waale ko saaf karo; bahar aane waale ko bhi saaf karo.
:::

## Dono kaamon mein kya samaan hai

Jab Anaya ne Sunday ko Dr. Meenakshi Rao ko hafte ka vivaran diya, toh usne paaya ki woh kuch aisa samjha rahi hai jo machines ke baare mein kam hai. Pehle case mein team ne tay kiya tha ki failure kya maana jaayega, galat dabba, aur kaun sa galat dabba zyada kharab hai. Doosre case mein failure ek chhoota hua tathya tha. Dono mein unhone wahi ginta jo unka dhyaan gaya, uski jagah nahi jo unhe dikha. Meenakshi ne kaha ki is kshetra ka zyadatar kaushal machine ke baare mein nahi hai. Woh is baare mein hai ki aap kis cheez se darte hain, yeh theek-theek tay karna.

## Saaraansh

Classifier har input ko tay dabbon mein se ek mein rakhta hai, aur kyunki sahi jawaab hota hai, use naapa ja sakta hai.

- Ek overall score ek dabbe mein kharab nateeja chhupa sakta hai, isliye har category ko alag gina jaana chahiye.
- Galti ki do dishaon ki keemat aksar ek jaisi nahi hoti. Kis taraf jhukna hai yeh ek product faisla hai, un logon ke saath liya jaata hai jo har keemat uthate hain, aur woh doosre lakshya jaise false alarms ki seema se khinch sakta hai.
- Saar ka koi ek sahi jawaab nahi hota. Use test karne ke liye har document ke liye must-keep list likho jisme woh tathya hon jo padhne wale ko nahi khone chahiye, aur har saar ko us list se milao.
- System jo kuch bhi likhta hai woh personal details ke rehne ki ek aur jagah hai, isliye jo bahar aaye use bhi saaf karna padta hai, sirf jo andar jaaye use hi nahi.
