---
title: Chhaantna Aur Summary Likhna
summary: Ek kaam ka sahi jawaab hota hai, aur ek ka nahi. Team ek sorter ko test karti hai aur ek aisi failure pakadti hai jo ek score chhupa raha tha. Phir ek summary mein dekhti hai ki usne kaun se facts chhod diye. Aap classifier, har tarah ki galti ki keemat, aur must-keep list seekhte hain.
course: ch24 ch25
goals:
  - bata paana ki classifier kya hota hai, aur ek overall score kharab result ko kaise chhupa sakta hai
  - galti ki do kisme ki keemat compare kar paana, aur tay kar paana ki kis taraf jhukna hai
  - summary ko woh kitni achhi padhti hai yeh dekh kar nahi, must-keep list se test kar paana
  - dekh paana ki system jo kuch likhta hai, woh personal details ke rehne ki ek aur jagah ban sakta hai
terms:
  - classifier | fixed dabbon wala sorter, jaise post office pin code se chitthiyan chhaanta hai: ek program jo har input ko pehle se tay categories mein se ek mein daalta hai, jaise PAN, Aadhaar, mobile number ya inmein se koi nahi | classifiers
  - must-keep list | woh facts jo padhne wale ko khone nahi chahiye, har document ke liye likhe hue; har summary ko is par tick kiya jaata hai, shopping list ki tarah | must-keep lists
---

April ki ek subah Farah Sheikh ne ek printout se kaagaz ki 40 parchiyan kaati. Har parchi par digits ya letters ka ek string tha, un jaisa jo uske agents din bhar dekhte the. Kuch asli jaise dikhte the, kuch nahi. Har parchi ke peeche pencil se usne likha ki woh asal mein kya hai.

10 PAN the. 10 Aadhaar numbers the, jo logon ke likhne ke har tareeke mein likhe gaye the. 10 mobile numbers the. Aur 10 inmein se kuch nahi the: order numbers, loan reference numbers, ek account number, ek policy code. Anaya jaanna chahti thi ki team ka sorting program inhe chhaant sakta hai ya nahi.

Yeh chapter us hafte ke do tests ki kahani hai. Ek aise kaam ka tha jiska sahi jawaab hota hai. Doosra aise kaam ka jiska nahi hota. Pehle test ne dikhaya ki achha average failure ko kaise chhupa leta hai. Doosre ne dikhaya ki us text ko kaise test karein jise koi program grade nahi kar sakta.

## Case: 40 parchiyan

Imran Qureshi ne sorter ka pehla version do shaamon mein likha tha. Woh ek text dekhta tha. Phir batata tha ki woh 4 dabbon mein se kis mein jaayega.

Jo program har input ko pehle se tay dabbon mein se ek mein daale, use *classifier* kehte hain. Post office ko sochiye jo chitthiyan pin code se chhaanta hai. Bahut saara kaam ka software aise hi chalta hai. Ismein ek faayda hai jo machine ke zyadatar kaamon mein nahi hota. Koi bata sakta hai ki har jawaab sahi tha ya nahi. Jahan sahi jawaab hai, wahan galtiyan gin sakte hain. Aur galtiyan gin sakein, toh system ko soch-samajh kar behtar bana sakte hain.

Imran ne pichhle 3 hafton mein team ne jo seekha, woh sab lagaya tha. Instruction mein kaam ka naam tha. Usme 2 worked examples the (chahe gaye output ke poore bane sample), aur ek mushkil tha. Output ka format bhi tay tha.

Unhone 40 parchiyan sorter se guzaari. Scoreboard (woh table jo ginta hai ki kya mila aur kya chhoota) ne ek line print ki: 40 mein se 35 sahi, yaani 87.5 percent. Farah khush thi. Anaya ne kaha ki yeh ek number hai. Use abhi nahi pata ki yeh achha hai ya nahi. Usne kaha, mujhe yeh box-by-box dikhaiye.

## Us ek number ne kya chhupaya

Imran ne result ko 4 rows mein baant diya.

Table: Sorter ka result, box ke hisaab se
| Parchi asal mein kya thi | Sahi | Galat |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| Inmein se koi nahi | 6 | 4 |

Dikkat sabse neeche wali row mein thi. "Inmein se koi nahi" wali 10 parchiyon mein se 4 ko sorter ne Aadhaar number bata diya tha. Woh order numbers, account numbers aur reference codes the. Sab 12 digits ke the. Sorter ne bas shape dekhi aur wahin ruk gaya.

Ek rule inmein se zyadatar look-alikes pakad leta. Asli Aadhaar number 0 ya 1 se shuru nahi hota. Uska aakhri digit check digit hota hai, jo baaki gyarah digits se nikalta hai.

Ek galti doosri taraf bhi thi. Ek asli Aadhaar number ko "inmein se koi nahi" bata diya gaya. Customer ne dash aur space galat jagah laga diye the.

Matlab overall number ne teen boxes ke perfect result aur chauthe box ke kharab result ka average nikaal diya tha. Yeh aise hai jaise student ke teen subjects mein poore number aur chauthe mein fail. Average theek dikhta hai. Ek number team ko achha mehsoos karane ka badhiya tareeka hai. Lekin woh bahut kam batata hai ki galtiyan hain kahan.

::: key Do galtiyan ek barabar nahi hoti
Maan lijiye sorter ek order number ko Aadhaar number bata deta hai. Guard aisi cheez chhupa deta hai jo secret nahi thi. (Guard woh tool hai jo personal details dhoondhta aur chhupata hai.) Agent ko order number ki jagah khaali jagah dikhti hai. Agent customer se use dobara type karne ko kehta hai. Isme lagbhag 30 second lagte hain, aur thodi jhunjhalahat hoti hai.

Ab maan lijiye sorter ek Aadhaar number ko "inmein se koi nahi" bata deta hai. Woh number nikal jaata hai. Woh chat history mein jaata hai. Woh logs mein jaata hai (logs tool ki likhi hui diary hain ki kya hua). Woh weekly export mein jaata hai (export matlab data ki woh copy jo system se bahar bheji jaati hai). Woh bahar ki company ke system mein jaata hai. Aur wahin reh jaata hai. Ek galti sirf jhunjhalahat hai. Doosri galti wahi cheez hai jise rokne ke liye yeh project bana hai.
:::

Isse jo rule nikla, woh seedha tha. Jab sorter ko pakka na ho, woh us number ko sensitive maane. Team zyada false alarms sehne ko taiyaar hai, badle mein kam misses ke liye.

Imran ne zor diya ki yeh pasand ka bayaan hai. Yeh technical faisla nahi hai. Anaya ne poochha ki yeh faisla kiska hai. Uska jawaab tha: Anaya, Lakshmi aur Farah ka. Khaali jagahein Farah ke agents hi padhenge.

Anaya ko turant ek dikkat dikhi. Apne plan mein usne 100 mein 3 false alarms ki seema rakhi thi. Woh ek guardrail thi, pul ki railing jaisi. Savdhani ki taraf jhukne se woh number badhega. Dono targets ek-doosre ko kheenchenge. Use yeh khulkar sambhalna hoga, un logon ke saath jinhe har taraf ki fikar hai.

## Ek summary jo padhne mein achhi lagti hai

Hafte ka doosra kaam alag kism ka tha. Kabhi baatcheet chatbot ke liye bahut uljhi ho jaati thi. Tab woh customer ko insaan agent ko de deta tha. Upar woh ek chhoti summary likhta tha, taaki agent ko 40 messages na padhne padein.

Farah ko bataya gaya tha ki summaries achhi chalti hain. Sab yahi kehte the, kyunki woh bahut achha padhti thi. Anaya ne dekha ki sab isliye kehte the kyunki unhone unhe padha tha. Usne poochha ki unmein hai kya.

Summary ka koi ek sahi jawaab nahi hota. Isiliye teams aksar bina jaane summarisers ship kar deti hain ki woh kaam karte hain ya nahi. Koi program bhasha ko grade nahi kar sakta. Summary sundar ho sakti hai, aur phir bhi woh ek zaroori line chhod sakti hai. Lekin aap yeh check kar sakte hain ki kuch khaas facts bache ya nahi.

Anaya ne us sawaal se shuru kiya jo hamesha pehle aana chahiye. Ise kaun padhega, aur phir woh kya karega? Padhne wala ek agent tha jo naraaz customer se baat karne wala tha. Isliye jo facts nahi khone chahiye, woh woh the jinke na hone se agent sharminda hota.

5 lambi baatcheeton mein se har ek ke liye usne aur Farah ne ek *must-keep list* likhi. Ise shopping list sochiye jise aap dukaan par tick karte hain. Isme woh facts hain jo padhne wale ko khone nahi chahiye. Pehli baatcheet ki list yeh thi: customer kehti hai ki usne 3 tareekh ko bhugtaan kiya; use Friday tak callback ka waada kiya gaya tha; shikayat double charge ki hai; ek loan application number ka zikr hua tha.

Phir unhone paanchon summaries ko lists ke saath rakh kar padha. Unhone facts par tick lagaye.

Table: 5 summaries ne kya rakha
| Summaries | Result |
| --- | --- |
| 3 | List ke har fact ko rakha |
| 1 | Promised callback chhod diya. Agent bina kuch jaane call karta, use pata hi nahi hota ki customer ko call ka intezaar karne ko kaha gaya hai |
| 1 | Achhi likhi hui thi, aur usne chat se customer ka poora Aadhaar number apni doosri line mein copy kar liya tha |

Aakhri wali dekh kar Farah ne pen rakh diya. Summary mein number ki ek copy thi.

Imran ne samjhaya ki iska matlab kya hai. Number ke rehne ki yeh ek doosri jagah thi. Summary store hoti hai. Woh agent ke paas jaati hai. Woh logs mein jaati hai. Isliye summary ko bhi saaf karna padta. Guard ko andar aane ke raaste par bhi baithna tha, aur bahar jaane ke raaste par bhi.

::: key Jo andar jaaye use saaf kijiye, jo bahar aaye use bhi
System jo bhi likhta hai, usme woh personal details ho sakti hain jo usne padhi thi. Anaya ne ise design mein jodha, history wale pehle rule ke saath: jo andar jaaye use saaf karo, aur jo bahar aaye use bhi.
:::

## Dono kaamon mein kya common hai

Sunday ko Anaya ne apna hafta Dr. Meenakshi Rao ko sunaya. Bolte-bolte use laga ki woh kuch aisa samjha rahi hai jiska machines se zyada lena-dena nahi.

Pehle test mein team ne tay kiya tha ki failure kya hai: galat box. Unhone yeh bhi tay kiya tha ki kaun sa galat box zyada bura hai. Doosre test mein failure ek chhooti hui fact thi. Dono mein unhone wahi gina, woh nahi jo bas unhe dikh gaya.

Meenakshi ne kaha ki is field ki zyadatar skill machine ke baare mein hai hi nahi. Woh is baare mein hai ki aap apne darr ke baare mein kitne exact ho.

::: key Ab aap yeh keh sakte hain
Naapne ke baare mein teen sentences. Jahan N aur M likha hai, wahan apne numbers rakhiye.
- Maine tool chalane se pehle answer key likhi: N rows, numbered versions mein rakhi hui.
- Maine ek baar mein ek hi cheez badli, aur scoreboard ne dikhaya ki har version ne kya dhoondha, kya chhoda aur kya galat flag kiya.
- Maine tay kiya ki kis galti ki taraf jhukna hai, un logon ke saath jo use jhelenge: N missed ke muqable M false alarms.
:::

## Summary

Classifier har input ko pehle se tay dabbon mein se ek mein daalta hai. Sahi jawaab hota hai, isliye aap use naap sakte hain.

- Ek overall score ek box ka kharab result chhupa sakta hai. Har category ko alag ginye.
- Do tarah ki galtiyon ki keemat shayad hi kabhi ek jaisi hoti hai. Kis taraf jhukna hai, yeh product ka faisla hai. Use un logon ke saath kijiye jo har keemat jhelte hain. Yeh kisi aur target se takra sakta hai, jaise false alarms ki seema.
- Summary ka koi ek sahi jawaab nahi. Use test karne ke liye har document ki must-keep list likhiye. Har summary ko us par check kijiye.
- System jo bhi likhta hai, woh personal details ke rehne ki ek aur jagah hai. Isliye jo bahar aaye use bhi saaf kijiye, jo andar jaaye use bhi.

Agle chapter mein Imran poochhta hai ki chatbot ko Sahaj ke baare mein jaankari kahan se milti hai, aur jawaab hai documents ki ek library jo ek saath padhne ke liye bahut lambi hai.
