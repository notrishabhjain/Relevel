---
title: Hazaar Jawaabon Ko Marks Dena
summary: Haath se check karna lagbhag 50 jawaabon ke baad kaam karna band kar deta hai. Is chapter mein jawaab ko marks dene ke teen tareeke hain, aisi model ko test karna jo doosri models ko grade karti hai, aur error analysis, jo is field ka sabse kaam ka quality kaam hai aur jisme kisi machine ki zaroorat nahi.
course: ch14 ch145
goals:
  - jawaab ko marks dene ke teen tareekon, code checks, human grading aur LLM judges, ki comparison kar paana
  - ek judge ko human grading ke saamne test karna, aur uski asahmatiyon ka pattern padh paana
  - judges ke aam biases aur unke ilaaj batana
  - error analysis karna, aur failures ke sabse bade groups ko naye test cases mein badalna
terms:
  - code check | aam code ki kuch lines jo jawaab ki ek cheez ko apne aap test karti hain, jaise kya quote kiya hua phrase sach mein message mein hai; har badlaav par chalana free hai | code checks
  - LLM judge | ek model jo doosre model ke output ko grade karta hai; sasta aur tez hai, lekin uske biases hote hain aur use apni grading ke saamne check kiye bina bharosa nahi karna chahiye | LLM judges
  - error analysis | 100 asli outputs padhna, har ek mein kya galat hua yeh apne words mein likhna, notes ko group karna, groups ko naam dena aur unhe ginna | 
---

June ke ant tak answer key mein 120 rows ho chuki thi, aur Anaya ab use haath se mark nahi kar sakti thi. Sach kahein toh kar sakti thi. Pencil se lagbhag teen ghante lagte the, aur woh har Friday yeh karti thi. Lekin key badhti ja rahi thi, guard mein har badlaav ke baad key dobara chalani padti thi, aur guard hafte mein kai baar badalta tha.

120 rows par marking ek chore thi. Ek asli product jitne hazaaron jawaab ek hafte mein banata hai, un par yeh mumkin hi nahi hota.

Imran Qureshi ne use bataya ki jawaab ko marks dene ke teen tareeke hain, aur har serious team aakhir mein teeno istemaal karti hai. Is chapter mein aap teeno se milenge, dekhenge ki ek ko bharosa karne se pehle kaise test kiya gaya, aur ant mein ek weekend ka kaam dekhenge jisme koi software nahi laga.

## Case: itni badi key jo mark na ho sake

Badhti hui key ek achhi aadat se aayi thi. Har asli failure ek row ban gayi thi. Us aadat ki keemat yeh thi ki ab marking mein team ke paas jitna time tha usse zyada lagta tha. Isliye kaam teen tarah ke markers mein baantna padta.

## Teen markers

Table: Jawaab ko marks dene ke teen tareeke
| Marker | Taakat | Kamzori | Kis kaam ke liye |
| --- | --- | --- | --- |
| Ek program (ek *code check*) | Aam software ki kuch lines jo jawaab ki ek cheez test karti hain. Lagbhag free, har badlaav par chalti hai, hazaaron baar | Sirf wahi test karti hai jo rule ke roop mein likha ja sake | Output ka form sahi hai ya nahi, har kind allowed list mein se hai ya nahi, har quotation message mein milti hai ya nahi, kya yeh kaafi tez hai, aur findings ki ginti samajhdaar hai ya nahi |
| Ek insaan | Akela marker jo bata sakta hai ki "sahi" ka matlab kya hai. Baaki sab kuch isi se calibrate hota hai ki insaan ne kya tay kiya | Mehnga aur dheema, aur do log aksar ek-doosre se sahmat nahi hote | "Sahi" ko define karna, aur judge ko imaandaar rakhna |
| Ek model jo doosri model ko grade karti hai (ek *LLM judge*) | Sasta aur tez. Jitne time mein insaan ek jawaab padhta hai, woh 100 padh leti hai | Uske biases hote hain jinhe naapna padta hai | Aise sawaal jinka jawaab program nahi de sakta, jaise "kya yeh jawaab source se support hota hai?" ya "in dono mein behtar kaun sa hai?" |

Bahut se bure jawaab aise tareeke se fail hote hain jo program dekh sakta hai. Imran ne kaha ki zyadatar teams code checks kaafi nahi istemaal karti. Uski preference seedhi thi. Jahan ho sake pehla marker lagaiye. Jo pehla nahi dekh sakta, uske liye teesra. Aur teesre ko imaandaar rakhne ke liye doosra.

## Judge ka imtihaan

Anaya ko ek aise sawaal ke liye judge chahiye tha jiska jawaab koi program nahi de sakta. Guard apna kaam kar le, uske baad kya message mein ab bhi kuch personal bacha hai? Code checks confirm kar sakte the ki quotation maujood thi. Lekin woh yeh nahi bata sakte the ki bacha hua tukda, jaise "Karve Road par chemist ke upar wala flat", ab bhi kisi insaan ki taraf ishaara karta hai ya nahi.

Imran ne ek dopahar mein judge likh liya. Woh saaf kiya hua message padhta aur haan ya nahi mein jawaab deta, ek wajah ke saath. Woh bahut achha dikhta tha. Woh tez tha, aur uski wajahein fluent aur saaf-suthri thi, aksar un jawaabon se lambi jin par woh comment karti thi.

Imran ne kaha ki bharosa karne se pehle use check kijiye. 50 khud grade kijiye. Wahi 50 judge se grade karwaiye. Phir ginye ki aap kitni baar sahmat hain.

Anaya aur Farah ne Saturday ko 50 saaf kiye hue messages alag-alag grade kiye, aur phir compare kiye. Dono aapas mein 50 mein se 48 par sahmat the. Judge, usi 50 par chalaya gaya, unse 33 par sahmat tha. Yaani 66 percent.

Imran ne kaha ki 10 mein se 6 ya 7 ek bahut aam pehla result hai. Figure se zyada zaroori asahmatiyon ka pattern hai. Anaya ne 17 asahmatiyan saamne rakhin. 14 mein judge ne ek aise message ko "clean" kaha tha jisme ab bhi kuch personal tha. Lagbhag sab mein message lamba tha aur usme ek mask tha. Judge ko mask dikha, aur message jitna lamba tha, woh utna hi zyada khush lagta tha.

::: key Jo galtiyan ek jagah jama hon, unhe theek kiya ja sakta hai
Agar galtiyan idhar-udhar bikhri hoti, toh iska matlab hota ki Anaya aur Farah khud is par sahmat nahi the ki "clean" ka matlab kya hai, aur judge mein koi badlaav madad nahi kar sakta tha. Kyunki galtiyan ek jagah jama thi, use pata chal gaya ki use kuch aisa mila hai jise woh theek kar sakti hai.
:::

## Judge kya galat karta hai

Imran ke paas jaane-pehchane biases ki ek chhoti aur kam khushnuma list thi, aise ilaajon ke saath jo kaam karte the.

Table: LLM judges ke biases aur unke ilaaj
| Bias | Ilaaj |
| --- | --- |
| Lambe jawaabon ko zyada score deta hai, chahe extra words kuch na jodein | "Quality" ke bajaye ek khaas cheez poochhiye: kya koi aisi detail bachi hai jo ek insaan ko pehchaan sakti hai? |
| Do jawaabon ki comparison mein, jo pehle dekha use pasand karta hai | Ek ko score dene ke bajaye do outputs compare kijiye, phir unki jagah badal kar dobara chalaiye |
| Jo kuch bhi thorough sunayi de, uski taraf bah jaata hai | Use majboor kijiye ki jin exact words par uska verdict tika hai unhe quote kare, taaki insaan ek pal mein check kar sake |

Anaya ne instruction in teeno tareekon se dobara likhi. Usi 50 messages par, judge ab 44 baar uski baat se sahmat tha. Yaani 88 percent.

Jis judge ko aapne apni marking ke saamne check kar liya hai, woh ek measuring instrument hai. Jis judge ko aapne check nahi kiya, woh us machine se sahmat hone ki taraf jhukega jise woh mark kar raha hai, kyunki dono ek hi kism ki cheez hain.

## 100 asli outputs padhna

In sab se use yeh nahi pata chal sakta tha ki galat kya ho raha hai. Judge batata hai ki kuch kitni baar fail hota hai, kyun, yeh nahi batata. Uske liye Imran ne project ka sabse bina chamak wala kaam kiya.

Ek weekend mein usne guard ko, bina kuch badle, ek mahine ki exported chats par chalaya. Har message ke liye usne note kiya ki woh kya chhupata. Monday ko usne Anaya ko un outputs mein se 100 ka ek dher diya, print kiye hue, random chune hue.

Anaya ka kaam tha unhe padhna, aur jo bhi galat gaya, uske liye apne words mein ek sentence likhna ki kya galat hua. Use pehle categories nahi chunni thi. Dr. Meenakshi Rao, jo us shaam phone par sun rahi thi, ne samjhaya kyun. Jo categories pehle chunta hai, woh sirf wahi cheezein dekhne lagta hai jo categories mein fit hoti hain. Pehle notes aate hain. Uske baad poochhiye ki in sentences mein common kya hai.

Anaya aur Farah ne do ghante padha. 100 outputs mein se 31 galat gaye the. Unhone notes farsh par bichhaye aur group kiye.

Table: 100 mein se 31 outputs mein kya galat hua
| Kya galat hua | Ginti |
| --- | --- |
| Order number identity number samajh kar chhupa diya gaya | 9 |
| Roman Hindi mein likha naam jiske baad "ji" tha, miss ho gaya | 8 |
| Address sirf aadha chhupa | 5 |
| Do lines mein tooti hui number, miss ho gayi | 4 |
| Company ka naam insaan samjha gaya | 3 |
| Baaki | 2 |

Yeh hai *error analysis*. Imran ne kaha ki jisne bhi ise kiya hai, wahi kehta hai: yeh is field ka sabse keemti quality kaam hai, aur isme na model chahiye na budget. Yeh aapke apne traffic se bani hui, kya theek karna hai uski ranked list deti hai. Ek general benchmark yeh nahi kar sakta, kyunki uske paas aapke customers ya aapke documents nahi hain.

Is table ne plan badal diya. Anaya ek hafta addresses par lagane wali thi, kyunki woh zaroori lagte the. Data ne kaha ki bada problem ek simple cheez thi: order numbers.

## Ek loop

Har failure answer key mein ek row ban gayi, sahi jawaab pehle se likhe hue. Key 120 rows se badhkar 151 rows ki ho gayi.

Anaya ne board par cycle ek line mein banayi taaki bhool na jaaye: asli messages, failures padhna, rows jodna, fix karna, measure karna, aur phir aur asli messages. Har round se key asli istemaal ki behtar tasveer banti thi. Tools har kuch mahine mein badlenge, lekin key aur failures ki list rahegi.

Call ke ant mein Meenakshi ne ek baat jodi jo woh aksar kehti hai. Product nikalne se pehle aap poochhte hain ki kya woh key paas karta hai. Nikalne ke baad aap poochhte hain ki kya logon ka bhala hua. Yeh alag sawaal hain, aur pehle mein paas hone se doosra chhua bhi nahi jaata. Anaya ne use likh liya. Woh sawaal sabse der tak uske saath raha.

## Summary

Jawaab ko marks dene ke teen tareeke hain. Program lagbhag free hai, aur jitna ho sake use istemaal karna chahiye. Insaan mehnga hai, aur woh tay karta hai ki "sahi" ka matlab kya hai. Judge ki tarah kaam karne wali model tez, sasti aur biased hai.

- Judge ko check karna padta hai: wahi jawaab khud grade kijiye aur ginye ki kitni baar sahmat hain. Asahmati ka pattern number se zyada zaroori hai. Jama hui galtiyan theek ki ja sakti hain, aur bikhri hui galtiyon ka matlab hai ki definition saaf nahi hai.
- Judges lambe jawaab aur do mein se pehle ko pasand karte hain. Ilaaj hain: ek khaas cheez ko grade karna, order badalna aur quotation maangna.
- Error analysis ka matlab hai 100 asli outputs padhna, categories chunne se pehle apne words mein likhna ki kya galat hua, group karna aur ginna, aur sabse bade groups ko naye test cases mein badalna.

Agle chapter mein aap finance director ke saath ek baatcheet mein dekhenge ki yeh sab chalane mein kitna kharch aata hai.
