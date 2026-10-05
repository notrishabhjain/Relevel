---
title: Hazaar Jawaabon Ki Grading
summary: Haath se jaanch lagbhag pachaas jawaabon par kaam karna band kar deti hai. Chapter jawaab ko jaanchne ke teen tareeke, doosre models ko grade karne wale model ko bharose se pehle kaise parkhein, aur error analysis, is kshetra ka sabse upyogi kaam jise kisi machine ki zaroorat nahi, samjhata hai.
course: ch14 ch145
goals:
  - code checks, insaani grading aur LLM judges ko jawaab jaanchne ke tareekon ke roop mein tolna
  - judge ko insaani grading ke saamne parkhna aur uski asahmatiyon ka pattern padhna
  - judges ke aam biases aur unke upaay batana
  - error analysis karna aur failures ke sabse bade groups ko naye test cases mein badalna
terms:
  - code check | aam code ki kuch lines jo apne aap jawaab ke ek pehlu ko test karti hain, jaise kya quote kiya hua phrase sach mein message mein hai; har badlaav par chalane ke liye muft | code checks
  - LLM judge | ek model jo doosre model ke output ko grade karta hai; sasta aur tez, lekin uske biases hote hain aur bharosa karne se pehle use aapki apni grading se jaanchna padta hai | LLM judges
  - error analysis | sau asli outputs padhna, har ek mein kya galat hua woh apne shabdon mein likhna, notes ko group karna, groups ko naam dena aur unhe ginna | 
---

June ke ant tak answer key mein ek sau bees rows ho gayi thi, aur Anaya ab use haath se nahi jaanch sakti thi. Seedhe kehne par jaanch sakti thi. Pencil se tab teen ghante lagte the, aur woh har Friday karti thi. Par key badh rahi thi, guard mein har badlaav par use chalana padta tha, aur guard hafte mein kai baar badalta tha. Ek sau bees rows par jaanch ek jhanjhat thi. Hazaaron jawaabon par jo ek asli product ek hafte mein banata hai, woh na-mumkin hota.

Imran Qureshi ne use bataya ki jawaab jaanchne ke teen tareeke hain, aur har gambhir team teeno istemaal karne lagti hai. Yeh chapter unhe batata hai, dikhata hai ki ek ko bharose se pehle kaise parkha gaya, aur ek aise hafte ke kaam se khatam hota hai jisme koi software nahi laga.

## Case: ek key jo haath se jaanchne ke liye bahut badi hai

Badhti hui key sahi pravritti ko dikhati thi, kyunki har asli failure ek row ban gayi thi. Pravritti ki keemat yeh thi ki jaanch ab us se zyada samay leti thi jitna team de sakti thi. Neeche ke section dikhate hain ki jaanch teen tarah ke jaanchne walon mein kaise baanti gayi.

## Teen jaanchne wale

Table: Jawaab jaanchne ke teen tareeke
| Jaanchne wala | Taakat | Kamzori | Kis kaam ke liye |
| --- | --- | --- | --- |
| Ek program (*code check*) | Jawaab ke ek hi pehlu ko jaanchne wali kuch lines ka saadhaaran software. Lagbhag muft; har badlaav par, hazaaron baar chalta hai | Sirf woh jaanchta hai jise rule ki tarah likha ja sake | Output ka form sahi hai ya nahi, har kind permitted hai ya nahi, har quotation message mein hai ya nahi, kya yeh kaafi tez hai, kya dhoondhi cheezon ki ginti thik hai |
| Ek insaan | Akela jaanchne wala jo bata sakta hai ki "sahi" ka matlab kya hai; baaki sab kuch uske tay kiye ke saamne naapa jaata hai | Mehnga aur dheema, aur do log aksar asahmat hote hain | Sahi ko paribhashit karna, aur judge ko imaandaar rakhna |
| Ek model jo doosre model ko grade karta hai (*LLM judge*) | Sasta aur tez; ek insaan jitne mein ek jawaab padhta hai utne mein sau padhta hai | Biases jinhe naapna padta hai | Woh sawaal jinka jawaab program nahi de sakta, jaise "kya yeh jawaab source se samarthit hai?" ya "inme se kaun sa behtar hai?" |

Bahut se kharab jawaab aise tareeke se fail hote hain jo program dekh sakta hai, aur Imran ne kaha ki zyadatar teams code checks kaafi nahi istemaal karti. Uski pasand ka kram yeh tha: jahan sambhav ho pehla jaanchne wala, jo pehla nahi dekh sakta uske liye teesra, aur teesre ko imaandaar rakhne ke liye doosra.

## Ek judge ki jaanch

Anaya ko ek aise sawaal ke liye judge chahiye tha jiska jawaab koi program nahi de sakta tha: guard apna kaam karne ke baad, kya message mein kuch personal bacha hai? Code checks pakka kar sakte the ki ek quotation maujood tha. Woh yeh nahi bata sakte the ki ek bacha hua tukda, jaise "Karve Road par chemist ke upar wala flat", ab bhi kisi insaan ki taraf ishaara karta hai ya nahi.

Imran ne ek dopahar mein judge likh liya. Woh saaf kiye hue message ko padhta aur haan ya nahi mein jawaab deta, ek kaaran ke saath. Woh bahut achha dikhta tha. Woh tez tha, aur uske kaaran saaf-suthre aur vyavasthit the, aur aksar un jawaabon se lambe the jin par woh tippani karte the. Us par bharosa karne se pehle, usne kaha, use parkha jaana chahiye: pachaas apne aap grade karo, judge se wahi pachaas grade karwao, aur ginti karo ki kitni baar aap sahmat hue.

Anaya aur Farah ne Saturday ko pachaas saaf kiye hue messages alag-alag grade kiye, aur phir milaya. Woh ek doosre se pachaas mein se adtaalees par sahmat the. Judge, wahi pachaas par chalaya gaya, unse tetees par sahmat hua, jo chhiyaasath percent hai.

Imran ne kaha ki das mein se chhe ya saat ka match ek bilkul saamaanya pehla nateeja hai, aur asahmatiyon ka pattern figure se zyada maayne rakhta hai. Anaya ne satrah asahmatiyan rakhin. Unme se chaudah mein judge ne ek aise message ko "saaf" kaha tha jisme ab bhi kuch personal tha, aur lagbhag sab mein message lamba tha aur usme ek mask tha. Judge mask dekhta tha, aur message jitna lamba, woh utna santusht lagta.

::: key Ek saath pade galtiyan theek ki ja sakti hain
Agar galtiyan bikhri hoti, toh iska matlab hota ki Anaya aur Farah khud is par sahmat nahi the ki "saaf" ka matlab kya hai, aur judge mein koi badlaav madad nahi kar sakta tha. Kyunki galtiyan ek saath thi, use pata tha ki use woh mila hai jise woh sudhaar sakti hai.
:::

## Judge kya galat karta hai

Imran ke paas jaane-pehchaane biases ki ek chhoti aur kam pasand ki list thi, aur upaay jo kaam karte the.

Table: LLM judges ke biases aur unke upaay
| Bias | Upaay |
| --- | --- |
| Lambe jawaab ko zyada score deta hai, chahe extra shabd kuch na jodein | "Quality" ke bajaye ek khaas cheez ke baare mein poochho: kya koi aisi detail bachi hai jo ek insaan ko pehchaan sake? |
| Do jawaabon ki tulna karte waqt jo pehle dekha use pasand karta hai | Ek ko score karne ke bajaye do outputs ki tulna karo, phir unhe badalkar dobara chalao |
| Jo vistrit dikhta hai uski taraf behta hai | Use un shabdon ko quote karne ko kaho jin par uska faisla tika hai, taaki insaan ek pal mein jaanch sake |

Anaya ne instruction in teen tareekon se dobara likha. Wahi pachaas messages par judge ab uske saath chavaalees baar sahmat hua, yaani atthaasi percent. Jo judge apni grading ke saamne jaancha gaya hai woh ek naapne ka saadhan hai. Jo judge jaancha nahi gaya woh us machine se sahmat hoga jise woh jaanch raha hai, kyunki dono ek hi tarah ki cheez hain.

## Sau asli outputs padhna

Is mein se kuch bhi use yeh nahi bata saka ki kya galat ho raha tha. Judge batata hai ki kuch kitni baar fail hota hai, par yeh nahi batata ki kyun. Uske liye Imran ne project ka sabse saadhaaran kaam kiya. Ek hafte ke ant mein usne guard ko, bina kuch badle, ek mahine ke export kiye chats par chalaya, aur har message ke liye record kiya ki woh kya chhupata. Monday ko usne Anaya ko un outputs ka ek dher diya, sau, chhapa hua aur random chuna hua.

Use unhe padhna tha aur jo bhi galat hua uske liye ek vaakya apne shabdon mein likhna tha ki kya galat hua. Use pehle categories nahi chunni thi. Dr. Meenakshi Rao ne, jo us shaam phone par sun rahi thi, kaaran dohraya: jo pehle category chunta hai woh sirf wahi dekhne lagta hai jo categories mein fit hota hai. Pehle notes aate hain, aur phir poochha jaata hai ki vaakyon mein kya saajha hai.

Anaya aur Farah ne do ghante padha. Sau outputs mein se ikatees galat hue the. Unhone notes farsh par bichhaye aur unhe groups mein rakha.

Table: Sau mein se ikatees outputs mein kya galat hua
| Kya galat hua | Ginti |
| --- | --- |
| Order number ko pehchaan ka number maan kar chhupa diya | 9 |
| "ji" ke saath Roman Hindi mein likha naam, chhoot gaya | 8 |
| Ek pata aadha chhupa | 5 |
| Do lines mein tuta number, chhoot gaya | 4 |
| Ek company ke naam ko insaan maana | 3 |
| Doosre | 2 |

Yeh *error analysis* hai, aur Imran ne kaha ki jisne bhi ise kiya hai woh wahi kehta hai: yeh is kshetra ka sabse keemti quality ka kaam hai, aur ise kisi model ya budget ki zaroorat nahi. Yeh team ke apne traffic se bana ek rank ki hui list deta hai ki kya theek karna hai. Koi aam benchmark yeh nahi kar sakta, kyunki uske paas team ke customers ya documents nahi hote.

Table ne yojna badal di. Anaya ek hafta pate par bitaane wali thi kyunki woh zaroori lagte the. Data ne kaha ki bada masla ek saadhi cheez thi: order numbers.

## Ek chakra

Har failure answer key mein ek row ban gayi, sahi jawaab pehle se likha hua, aur key ek sau bees rows se ek sau ikyaavan tak badh gayi. Anaya ne chakra board par ek line mein banaya taaki woh use bhool na jaye: asli messages, failures padho, rows jodo, theek karo, naapo, aur phir aur asli messages. Har round ne key ko asli istemaal ki behtar tasveer banaya. Tools har kuch mahine mein badlenge, par key aur failures ki list rahegi.

Call ke ant mein Meenakshi ne ek baat aur joda jo woh aksar kehti thi. Product bahar jaane se pehle poochhte hain ki kya woh key paas karta hai. Bahar jaane ke baad poochhte hain ki kya logon ke liye halaat behtar hue. Yeh alag sawaal hain, aur pehle ko paas karne se doosra wahin ka wahin reh sakta hai. Anaya ne use likh liya, aur yahi woh sawaal tha jo uske saath sabse lamba raha.

## Saaraansh

Jawaab jaanchne ke teen tareeke hain: ek program, jo lagbhag muft hai aur jitna ho sake istemaal karna chahiye; ek insaan, jo mehnga hai aur "sahi" ka matlab tay karta hai; aur ek model jo judge ka kaam karta hai, jo tez, sasta aur biased hai.

- Judge ko wahi jawaab khud grade karke aur ginte hue ki kitni baar sahmat hue, jaancha jaana chahiye. Asahmati ka pattern number se zyada maayne rakhta hai: ek saath padi galtiyan theek ki ja sakti hain, aur bikhri hui galtiyon ka matlab hai ki paribhasha dhundhli hai.
- Judges lambe jawaab aur do mein se pehle ko pasand karte hain. Upaay hain ek khaas cheez ko grade karna, kram badalna aur quotation maangna.
- Error analysis ka matlab hai sau asli outputs padhna, categories chunne se pehle apne shabdon mein likhna ki kya galat hua, groups banakar ginna, aur sabse bade groups ko naye test cases mein badalna.
