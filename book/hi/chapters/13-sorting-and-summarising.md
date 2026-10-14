---
title: Chhaantna Aur Summary Likhna
summary: Ek kaam ka sahi jawaab hota hai, aur ek ka nahi. Team ek sorter ko naapti hai aur ek aisi failure pakadti hai jo ek single score chhupa raha tha. Phir ek summary ko check karti hai ki usne kaun se facts chhod diye. Chapter mein classifier, har tarah ki galti ki keemat, aur must-keep list aate hain.
course: ch24 ch25
goals:
  - bata paana ki classifier kya hota hai, aur ek single overall score kharab result ko kaise chhupa sakta hai
  - galti ki do directions ki keemat compare kar paana, aur tay kar paana ki kis taraf jhukna hai
  - summary ko uski bhasha dekh kar nahi, must-keep list se test kar paana
  - dekh paana ki system jo kuch bhi likhta hai, woh personal details ke store hone ki ek aur jagah ban jaata hai
terms:
  - classifier | ek program jo har input ko pehle se tay categories mein se kisi ek mein daalta hai, jaise PAN, Aadhaar, mobile number ya inmein se koi nahi | classifiers
  - must-keep list | har document ke liye woh facts jo padhne wale ko khone nahi chahiye; har summary ko isi list se check kiya jaata hai | must-keep lists
---

April ki ek subah Farah Sheikh ne ek printout se kaagaz ki 40 parchiyan kaati. Har parchi par digits ya letters ka ek string tha, bilkul waisa jaisa uske agents din bhar dekhte the. Kuch asli jaise dikhte the, kuch nahi. Har parchi ke peeche pencil se usne likha ki woh asal mein kya hai.

10 PAN the. 10 Aadhaar numbers the, jo logon ke likhne ke har tareeke mein likhe gaye the. 10 mobile numbers the. Aur 10 inmein se kuch nahi the: order numbers, loan reference numbers, ek account number, ek policy code. Anaya jaanna chahti thi ki team ka sorting program inhe chhaant sakta hai ya nahi.

Yeh chapter us hafte ke do tests ki kahani hai. Ek test aise kaam ka tha jiska sahi jawaab hota hai, aur doosra aise kaam ka jiska nahi hota. Pehle test ne dikhaya ki ek achha average failure ko kaise chhupa leta hai. Doosre ne dikhaya ki us text ko kaise test karein jise koi program grade nahi kar sakta.

## Case: 40 parchiyan

Imran Qureshi ne sorter ka pehla version do shaamon mein likha tha. Woh ek text dekhta tha aur batata tha ki woh 4 dabbon mein se kis mein jaayega.

Jo program har input ko pehle se tay categories mein se kisi ek mein daale, use *classifier* kehte hain. Bahut saara kaam ka software ek classifier hi hota hai. Ismein ek faayda hai jo machine ke zyadatar kaamon mein nahi hota. Koi bata sakta hai ki har jawaab sahi tha ya nahi. Jahan sahi jawaab hota hai, wahan galtiyan ginti ja sakti hain. Aur jab galtiyan gin sakte hain, toh system ko soch-samajh kar behtar bana sakte hain.

Imran ne pichhle 3 hafton mein team ne jo seekha tha, woh sab lagaya tha. Instruction mein kaam ka naam tha. Usmein 2 worked examples the, jinmein se ek mushkil tha. Aur output ka format tay kar diya gaya tha.

Unhone 40 parchiyan sorter se guzaari, aur scoreboard ne ek hi line print ki: 40 mein se 35 sahi, yaani 87.5 percent. Farah khush thi. Anaya ne kaha ki yeh ek number hai, aur use abhi nahi pata ki yeh achha number hai ya nahi. Usne kaha, mujhe yeh box-by-box dikhaiye.

## Us ek number ne kya chhupaya

Imran ne result ko 4 rows mein baant diya.

Table: Sorter ka result, box ke hisaab se
| Parchi asal mein kya thi | Sahi | Galat |
| --- | --- | --- |
| PAN | 10 | 0 |
| Mobile number | 10 | 0 |
| Aadhaar | 9 | 1 |
| Inmein se koi nahi | 6 | 4 |

Dikkat sabse neeche wali row mein thi. "Inmein se koi nahi" wali 10 parchiyon mein se 4 ko sorter ne Aadhaar number bata diya tha. Woh order numbers, account numbers aur reference codes the. Un sabme 12 digits the, aur sorter ne bas shape dekhi aur wahin ruk gaya.

Ek galti doosri taraf bhi thi. Ek asli Aadhaar number ko "inmein se koi nahi" bata diya gaya, kyunki customer ne dash aur space galat jagah laga diye the.

Matlab overall number ne teen boxes ke perfect result aur chauthe box ke kharab result ka average nikaal diya tha. Ek single accuracy number team ko achha mehsoos karane ka badhiya tareeka hai. Lekin woh yeh bahut kam batata hai ki galtiyan hain kahan.

::: key Do galtiyan ek barabar nahi hoti
Maan lijiye sorter ek order number ko Aadhaar number bata deta hai. Guard aisi cheez chhupa deta hai jo secret nahi thi. Agent ko order number ki jagah ek khaali jagah dikhti hai, aur woh customer se use dobara type karne ko kehta hai. Isme lagbhag 30 second lagte hain, aur thodi jhunjhalahat hoti hai.

Ab maan lijiye sorter ek Aadhaar number ko "inmein se koi nahi" bata deta hai. Woh number nikal jaata hai. Woh chat history mein, logs mein, weekly export mein aur bahar ki company ke system mein pahunch jaata hai, aur wahin reh jaata hai. Ek galti sirf jhunjhalahat hai. Doosri galti wahi cheez hai jise rokne ke liye yeh project bana hai.
:::

Isse jo rule nikla, woh seedha tha. Jab sorter ko pakka na ho, toh woh us number ko sensitive maane. Team zyada false alarms sehne ko taiyaar hai, badle mein kam misses ke liye.

Imran ne zor dekar kaha ki yeh ek preference ka faisla hai, technical faisla nahi. Anaya ne poochha ki yeh faisla kiska hai. Imran ne kaha, aapka, Lakshmi ka aur Farah ka. Kyunki khaali jagahein Farah ke agents ko padhni padegi.

Anaya ko ek mushkil turant dikh gayi. Apne plan mein usne guardrail ke taur par 100 mein 3 false alarms ki limit rakhi thi. Savdhani ki taraf jhukne se yeh number badh jaayega. Matlab dono targets ek doosre ko kheenchenge. Use is tension ko khulkar sambhalna padega, un logon ke saath jinhe dono taraf ki parwaah hai.

## Ek summary jo padhne mein achhi lagti hai

Hafte ka doosra kaam alag kism ka tha. Jab koi conversation chatbot ke liye bahut uljha ho jaati, toh chatbot customer ko ek human agent ke paas bhej deta tha. Sabse upar woh ek chhota sa summary likh deta tha, taaki agent ko 40 messages na padhne padein.

Farah ko bataya gaya tha ki summaries achhi kaam karti hain. Sab yahi kehte the, kyunki woh padhne mein bahut sundar lagti thi. Anaya ne dhyaan diya ki sab isliye kehte the kyunki unhone unhe padha tha. Usne poochha, inmein hai kya?

Summary ka koi ek sahi jawaab nahi hota. Isliye teams aksar summarisers ko ship kar dete hain bina jaane ki woh kaam karte hain ya nahi. Program bhasha ko grade nahi kar sakta, aur summary khoobsurat hone ke baad bhi woh ek line chhod sakti hai jo sabse zaroori thi. Lekin yeh check kiya ja sakta hai ki kuch khaas facts bache ya nahi.

Anaya ne us sawaal se shuru kiya jo hamesha pehle aana chahiye. Ise padhega kaun, aur uske baad kya karega? Padhne wala ek agent tha, jo ek naraaz customer se baat karne wala tha. Isliye jo facts khone nahi chahiye the, woh woh the jinke na hone se agent sharminda hota.

5 lambi conversations mein se har ek ke liye, usne aur Farah ne ek *must-keep list* likhi. Yeh un facts ki list hai jo padhne wale ko khone nahi chahiye. Pehli conversation ki list yeh thi: customer kehti hai ki usne 3 tareekh ko payment kiya tha; use Friday tak callback ka waada kiya gaya tha; complaint double charge ke baare mein hai; ek loan application number ka zikr hua tha.

Phir unhone paanchon summaries ko un lists ke saath rakhkar padha, aur facts par tick lagaye.

Table: 5 summaries ne kya rakha
| Summaries | Result |
| --- | --- |
| 3 | List ke har fact ko rakha |
| 1 | Promised callback chhod diya. Agent bina kuch jaane call karta, use pata hi nahi hota ki customer ko call ka intezaar karne ko kaha gaya hai |
| 1 | Achhi likhi hui thi, aur usne chat se customer ka poora Aadhaar number apni doosri line mein copy kar liya tha |

Aakhri wali dekhte hi Farah ne apna pen neeche rakh diya. Summary ne number ki ek copy rakh li thi.

Imran ne samjhaya ki iska kya matlab hai. Yeh number ke rehne ki ek doosri jagah hai. Summary store hoti hai, agent ke paas jaati hai, aur logs mein jaati hai. Isliye summary ko bhi saaf karna padega. Guard ko andar aane ke raaste par bhi rehna hoga, aur bahar jaane ke raaste par bhi.

::: key Jo andar jaaye use saaf kijiye, jo bahar aaye use bhi
System jo kuch bhi likhta hai, usmein woh personal details ho sakti hain jo usne padhte waqt copy kar li ho. Anaya ne ise design mein jod diya, history wale pichhle rule ke bagal mein: jo andar jaaye use saaf karo, aur jo bahar aaye use bhi saaf karo.
:::

## Dono kaamon mein kya common hai

Sunday ko Anaya ne apna hafta Dr. Meenakshi Rao ko sunaya. Bolte-bolte use laga ki woh kuch aisa samjha rahi hai jiska machines se zyada lena-dena nahi hai.

Pehle test mein team ne tay kiya tha ki failure kise maanenge: galat box. Unhone yeh bhi tay kiya tha ki kaun sa galat box zyada bura hai. Doosre test mein failure ek missing fact thi. Dono baar unhone wahi gina, woh nahi jo unki nazar mein aaya.

Meenakshi ne kaha ki is field ki zyadatar skill machine ke baare mein hai hi nahi. Woh is baare mein hai ki aap apne darr ke baare mein kitne exact ho.

## Summary

Classifier har input ko pehle se tay dabbon mein se kisi ek mein daalta hai. Kyunki sahi jawaab hota hai, isliye use naapa ja sakta hai.

- Ek single overall score kisi ek box ke kharab result ko chhupa sakta hai, isliye har category ko alag se gino.
- Galti ki do directions ki keemat shayad hi kabhi barabar hoti hai. Kis taraf jhukna hai, yeh product ka faisla hai. Yeh un logon ke saath mil kar liya jaata hai jo har keemat uthate hain, aur yeh kisi doosre target se takra sakta hai, jaise false alarms ki limit.
- Summary ka koi ek sahi jawaab nahi hota. Use test karne ke liye har document ke liye ek must-keep list likhiye, jisme woh facts hon jo padhne wale ko khone nahi chahiye, aur har summary ko usse check kijiye.
- System jo kuch bhi likhta hai, woh personal details ke rehne ki ek aur jagah hai. Isliye jo andar jaata hai, uske saath-saath jo bahar aata hai, use bhi saaf karna padta hai.
