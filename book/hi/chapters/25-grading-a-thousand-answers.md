---
title: Hazaar Jawaabon Ko Marks Dena
summary: Haath se check karna lagbhag 50 jawaabon par kaam karna band kar deta hai. Is chapter mein jawaab ko marks dene ke teen tareeke hain, aisi model ko kaise test karein jo doosri models ko grade karti hai, aur error analysis. Yeh field ka sabse kaam ka quality-work hai, aur ismein kisi machine ki zaroorat nahi.
course: ch14 ch145
goals:
  - jawaab ko marks dene ke teen tareeke, yaani code checks, insaan aur LLM judges, ko tulna
  - ek judge ko insaan ki grading ke saath test karna, aur unke farq ka pattern padhna
  - judges ke aam biases aur unke ilaaj batana
  - error analysis karna aur failures ke sabse bade groups ko naye test cases mein badalna
terms:
  - code check | ek cheez ka paimana (ruler): aam code ki kuch lines jo jawaab ke ek fact ko test karti hain, jaise kya quote kiya phrase sach mein message mein hai; har badlaav par chalana free hai | code checks
  - LLM judge | homework ko marks dene wala doosra student; ek model jo doosri model ke jawaab grade karti hai, sasti aur tez, par uske biases hote hain, isliye bharosa karne se pehle marker ko teacher se check kijiye | LLM judges
  - error analysis | galat jawaabon ko ek-ek karke padhna aur unhe dher mein baantna, jaise complaints chhaantna; aap 100 asli outputs padhte hain, apne words mein likhte hain ki kya galat hua, notes ko group karte hain, groups ko naam dete hain aur ginte hain | 
---

June ke ant tak answer key (test sawaalon aur sahi jawaabon ki list) mein 120 rows ho gayi thi. Anaya ab use haath se mark nahi kar sakti thi. Kar sakti thi, agar koshish karti. Pencil se lagbhag teen ghante lagte the, aur woh har Friday karti thi. Lekin key badhti ja rahi thi. Guard mein har badlaav ke baad key dobara chalani padti thi. Aur guard hafte mein kai baar badalta tha.

120 rows par marking ek bojh thi. Ek asli product jitne hazaaron jawaab ek hafte mein banata hai, un par yeh namumkin hoti.

Imran Qureshi ne use bataya ki jawaab ko marks dene ke teen tareeke hain. Har gambhir team teeno istemaal karti hai. Aap unse milenge. Aap dekhenge ki ek par bharosa karne se pehle use kaise test kiya gaya. Aur aap ek weekend ka kaam dekhenge jisme koi software nahi laga.

## Case: itni badi key jo mark na ho sake

Badhti hui key ek achhi aadat se aayi thi. Har asli failure ek row ban gayi. Iski keemat yeh thi ki marking mein ab team ke paas jitna time tha usse zyada lagta tha. Yeh ek teacher jaisa hai jiske paas hazaar copies hain aur ek pen. Isliye kaam teen tarah ke markers mein baantna pada.

## Teen markers

Table: Jawaab ko marks dene ke teen tareeke
| Marker | Taakat | Kamzori | Kis kaam ke liye |
| --- | --- | --- | --- |
| Ek program (ek *code check*) | Aam software ki kuch lines jo jawaab ki ek cheez test karti hain. Lagbhag free, har badlaav par chalti hai, hazaaron baar | Sirf wahi test karti hai jo rule ki tarah likha ja sake | Kya output ka form sahi hai, kya har kind allowed kinds mein se ek hai, kya har quotation message mein hai, kya woh kaafi tez hai, kya findings ki sankhya samajhdaar hai |
| Ek insaan | Akela marker jo bata sakta hai ki "sahi" ka matlab kya hai. Baaki sab kuch isi se calibrate hota hai ki insaan ne kya tay kiya | Mehnga aur slow, aur do log aksar ek-doosre se asahmat hote hain | "Sahi" ko define karna, aur judge ko imaandaar rakhna |
| Ek model jo doosri model ko grade karti hai (ek *LLM judge*) | Sasta aur tez. Jitne time mein insaan ek jawaab padhta hai, woh 100 padh leti hai | Uske biases hote hain jinhe naapna padta hai | Aise sawaal jinka jawaab program nahi de sakta, jaise "kya yeh jawaab source se samarthit hai?" ya "in do mein se kaun behtar hai?" |

Ek ruler, ek teacher aur ek doosre student ko sochiye. Ruler ek cheez naapta hai aur kabhi thakta nahi. Teacher tay karta hai ki kya sahi hai. Doosra student dher mein haath bataata hai.

Bahut se bure jawaab aise tareeke se fail hote hain jo program dekh sakta hai. Imran ne kaha ki zyadatar teams code checks kaafi nahi istemaal karti. Uska order seedha tha. Jahan ho sake pehla marker istemaal kijiye. Jo pehla nahi dekh sakta, uske liye teesra. Aur teesre ko imaandaar rakhne ke liye doosra.

## Judge ka imtihaan

Anaya ko ek aise sawaal ke liye judge chahiye tha jisse koi program nahi sambhal sakta tha. Guard ka kaam hone ke baad, kya message mein ab bhi kuch personal bacha hai? Code checks pakka kar sakte the ki quotation maujood hai. Woh yeh nahi bata sakte the ki bacha hua tukda ab bhi kisi insaan ki taraf ishaara karta hai ya nahi. Ek example tha "Karve Road par chemist ke upar wala flat".

Imran ne ek dopahar mein judge likh diya. Woh saaf kiya hua message padhta tha. Woh haan ya na mein jawaab deta tha, wajah ke saath. Woh bahut achha dikhta tha. Woh tez tha. Uski wajahein saaf aur surili thi, aksar un jawaabon se lambi jinhe woh mark karti thi.

Isse bharosa karne se pehle, Imran ne kaha, ise check kijiye. 50 aap khud grade kijiye. Judge se wahi 50 grade karwaiye. Phir ginye ki kitni baar aap sahmat hain. Yeh ek naye student ki marking ko teacher ki answer key se milane jaisa hai.

Saturday ko Anaya aur Farah ne 50 saaf kiye hue messages grade kiye, har ek ne apne aap. Phir unhone milaya. Woh ek-doosre se 50 mein se 48 par sahmat thi. Judge, usi 50 par, unse 33 par sahmat tha. Yaani 66 percent.

Imran ne kaha ki das mein se chhe ya saat ek bahut aam pehla result hai. Figure se zyada zaroori asahmatiyon ka pattern hai. Anaya ne un 17 ko saamne rakha.

14 mein, judge ne aise message ko "clean" kaha jisme ab bhi kuch personal tha. Unme se lagbhag sab lambe messages the jinme ek mask tha. Judge ko mask dikha. Message jitna lamba, woh utna hi khush lagta tha.

::: key Ek jagah jama galtiyan theek ho sakti hain
Maan lijiye galtiyan bikhri hoti. Iska matlab hota ki Anaya aur Farah khud is par sahmat nahi the ki "clean" ka matlab kya hai. Judge mein koi badlaav madad nahi kar sakta tha. Lekin galtiyan ek jagah jama thi. Isliye use pata chala ki use kuch aisa mila hai jo woh theek kar sakti hai.
:::

## Judge kya galat karta hai

Imran ke paas jaane-pehchaane biases ki ek chhoti, kadwi list thi. Har ek ka ilaaj kaam karta tha.

Table: LLM judges ke biases aur unke ilaaj
| Bias | Ilaaj |
| --- | --- |
| Lambe jawaabon ko zyada score deta hai, chahe extra words kuch na jodein | "Quality" ke bajaye ek khaas cheez poochhiye: kya koi aisi detail bachi hai jo ek insaan ko pehchaan sakti hai? |
| Do jawaabon ki comparison mein, jo pehle dekha use pasand karta hai | Ek ko score dene ke bajaye do outputs compare kijiye, phir unki jagah badal kar dobara chalaiye |
| Jo kuch bhi thorough sunayi de, uski taraf bah jaata hai | Use majboor kijiye ki jin exact words par uska verdict tika hai unhe quote kare, taaki insaan ek pal mein check kar sake |

Yeh us marker jaisa hai jo lambe nibandh par zyada number deta hai. Ya jise dher ka pehla paper pasand aata hai. Anaya ne instruction in teeno tareekon se dobara likhi. Usi 50 messages par, judge ab 44 baar uski baat se sahmat tha. Yaani 88 percent.

Jis judge ko aapne apni marking ke saamne check kar liya hai, woh ek naapne ka tool hai. Jis judge ko aapne check nahi kiya, woh aksar usi machine se sahmat hota hai jise woh mark karta hai. Dono ek hi kism ki cheez hain.

## 100 asli outputs padhna

In sab se use yeh nahi pata chala ki galat kya ho raha hai. Judge batata hai ki kuch kitni baar fail hota hai. Kyun, yeh nahi batata. Uske liye Imran ne project ka sabse bina chamak wala kaam kiya.

Ek weekend mein usne guard ko ek mahine ki exported chats par chalaya (system se file mein nikaali gayi chats). Usne kuch badla nahi. Har message ke liye usne note kiya ki woh kya chhupata. Monday ko usne Anaya ko un outputs mein se 100 ka ek dher diya. Woh printed the aur random chune gaye the.

Uska kaam unhe padhna tha. Jo bhi galat gaya, uske liye usne apne words mein ek sentence likha. Kya galat hua? Use pehle categories nahi chunni thi. Dr. Meenakshi Rao ne us shaam phone par suna. Unhone wajah batayi. Agar aap pehle category chunte hain, toh aapko wahi dikhne lagta hai jo us mein fit ho. Pehle notes aate hain. Tab jaakar poochhte hain ki sentences mein kya saajha hai.

Anaya aur Farah ne do ghante padha. 100 outputs mein se 31 galat nikle. Unhone notes farsh par bichhaye aur dheron mein baant diye. Yeh complaints chhaantne jaisa hai.

Table: 100 mein se 31 outputs mein kya galat hua
| Kya galat hua | Count |
| --- | --- |
| Order number ko pehchaan number samajhkar chhupa diya | 9 |
| Roman Hindi mein likha naam, jiske baad "ji" tha, chhoot gaya | 8 |
| Address sirf aadha chhupa | 5 |
| Do lines mein tooti hui number, chhoot gayi | 4 |
| Company ke naam ko insaan samjha gaya | 3 |
| Baaki | 2 |

Yeh *error analysis* hai. Imran ne kaha ki jisne bhi ise kiya hai woh wahi kehta hai. Yeh field ka sabse keemti quality-work hai. Ismein na model chahiye na budget. Yeh aapko theek karne ki ek ranked list deta hai, aapke apne traffic se bani (jo asli messages aapke paas aate hain). Ek aam benchmark (aisa public test jo koi bhi chala sake) yeh nahi kar sakta. Uske paas aapke customers ya aapke documents nahi hote.

Table ne plan badal diya. Anaya addresses par ek hafta lagane wali thi, kyunki woh zaroori lagte the. Data ne kaha ki bada masla saada tha: order numbers.

## Ek loop

Har failure answer key ki ek row ban gayi. Sahi jawaab pehle se likha gaya. Key 120 rows se badhkar 151 rows ki ho gayi.

Anaya ne board par cycle ek line mein banayi, taaki woh bhoole nahi. Asli messages. Failures padho. Rows jodo. Theek karo. Naapo. Phir aur asli messages. Har round ke saath key asli istemaal ki behtar tasveer banti gayi. Tools har kuch mahine mein badal jaayenge. Key aur failures ki list rahegi.

Call ke ant mein Meenakshi ne ek baat jodi jo woh aksar kehti hain. Product bahar jaane se pehle poochhiye ki kya woh key paas karta hai. Bahar jaane ke baad poochhiye ki kya logon ka bhala hua. Yeh alag sawaal hain. Pehle mein paas hone se doosra chhua hi nahi jaata. Anaya ne use likh liya. Yeh sawaal uske saath sabse zyada der tak raha.

## Ek baar, ya har baar

Imran ke paas judge ke liye ek aur sawaal tha. Guard har baar ek hi jawaab nahi deta tha. Isliye team har mushkil case ko teen baar chalati thi.

"Teen runs ko score kaise karein?" unhone poochha. Anaya ne do column banaye. Pehla poochhta tha ki kya teen mein se kam se kam ek run sahi tha. Ise **pass@k** kehte hain, jahan k koshishon ki ginti hai. Doosra poochhta tha ki kya teeno sahi the. Ise **pass^k** kehte hain, bola jaata hai "pass hat k".

Unhone ek aise case ka hisaab lagaya jise guard 75% baar sahi karta tha. Teen mein se kam se kam ek sahi, lagbhag 98% aaya. Teeno sahi, 0.75 × 0.75 × 0.75, lagbhag 42% aaya.

"Customer ko ek koshish milti hai," unhone kaha. "Aur hazaar customers ko hazaar koshishein." Demo ke liye pass@k theek tha. Jis guard ko har baar Aadhaar number chhupana ho, uske liye maayne rakhne wala number pass^k tha.

*Aakhri baar jaancha gaya: November 2026. Sources aur unki taareekhein app mein, reference pages ke Appendix E mein di gayi hain.*

## Summary

Jawaab ko marks dene ke teen tareeke hain. Program lagbhag free hai, isliye jitna ho sake use kijiye. Insaan mehnga hai, aur "sahi" ka matlab tay karta hai. Judge ki tarah kaam karne wali model tez, sasti aur biased hai.

- Judge ko check kijiye: wahi jawaab khud grade kijiye aur ginye ki kitni baar sahmat hain. Asahmati ka pattern number se zyada zaroori hai. Ek jagah jama galtiyan theek ho sakti hain. Bikhri hui galtiyon ka matlab hai ki "sahi" ka matlab saaf nahi hai.
- Judges lambe jawaab aur do mein se pehle wale ko pasand karte hain. Ilaaj hai ek khaas cheez grade karna, order badalna aur quotation maangna.
- Error analysis ka matlab hai 100 asli outputs padhna. Categories chunne se pehle apne words mein likhiye ki kya galat hua. Group kijiye aur ginye. Sabse bade groups ko naye test cases banaiye.
- pass@k poochhta hai ki kya k koshishon mein se ek chali; pass^k poochhta hai ki kya saari chalin. 75% prati koshish par, lagatar teeno koshishein sirf lagbhag 42% baar chalti hain.

Agle chapter mein Anaya finance director ko plan dikhati hai, jo poochhta hai ki guard ko har mahine chalane mein kitna kharch aayega.
