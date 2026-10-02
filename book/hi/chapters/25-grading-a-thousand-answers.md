---
title: Hazaar Jawaabon Ki Grading
summary: Haath se jaanchna lagbhag pachaas jawaabon par kaam karna band kar deta hai. Team marking par ek machine lagati hai, bharose se pehle marker ko jaanchti hai, aur phir woh kaam karti hai jo is kshetra mein sabse zyada kaam ka hai aur jisme kisi machine ki zaroorat nahi.
course: ch14 ch145
terms:
  - code check | aam code ki kuch lines jo apne aap jawaab ke ek pehlu ko test karti hain, jaise kya quote kiya hua phrase sach mein message mein hai; har badlaav par chalane ke liye muft | code checks
  - LLM judge | ek model jo doosre model ke output ko grade karta hai; sasta aur tez, lekin uske biases hote hain aur bharosa karne se pehle use aapki apni grading se jaanchna padta hai | LLM judges
  - error analysis | sau asli outputs padhna, har ek mein kya galat hua woh apne shabdon mein likhna, notes ko group karna, groups ko naam dena aur unhe ginna | 
---

June ke ant tak answer key mein ek sau bees rows ho gayi thin, aur Anaya ab use haath se mark nahi kar sakti thi.

Kar sakti thi, sakhti se kahein toh. Usme lagbhag teen ghante lagte, pencil ke saath, aur woh har Friday karti thi. Lekin key badh rahi thi, guard ke har badlaav par use chalana padta tha, aur guard hafte mein kai baar badalta tha. Har jawaab ko khud mark karne, ya sabko padhne tak ka khayal kuch kalpana jaisa ban gaya tha. Ek sau bees rows par yeh ek chore tha. Hazaaron par jo ek asli product ek hafte mein dekhta hai, yeh asambhav tha.

"Ek jawaab mark karne ke teen tareeke hain," Imran ne kaha, "aur har gambhir team teeno istemaal karti hai."

## Teen marker

Pehla ek program hai. *Code check* aam software ki kuch lines hain jo jawaab ke ek pehlu ko test karti hain. Iska kharcha lagbhag kuch nahi aur yeh har badlaav par hazaaron baar chal sakta hai. Kya output sahi form mein hai? Kya har kind permitted ones mein se ek hai? Kya har quote sach mein message mein hai? Kya yeh kaafi tez hai? Kya findings ki sankhya samajhdaar hai? Bahut se bure jawaab aise tareeko se fail hote hain jo ek program dekh sakta hai. "Zyadatar teams inka kaafi istemaal nahi karti," Imran ne kaha. "Yahan se shuru karo."

Doosra ek insaan hai. Ek insaan bahut mehnga aur dheema hai, aur do log aksar asahmat hote hain. Lekin ek insaan woh akela marker bhi hai jo keh sakta hai ki sahi *ka matlab* kya hai. System mein baaki sab kuch us cheez ke khilaaf calibrate hota hai jo ek insaan ne tay kiya.

Teesra ek model hai jo doosre model ko grade karta hai. Ise *LLM judge* kehte hain. Yeh sasta aur tez hai aur ek sau jawaab utne samay mein padh sakta hai jitne mein ek insaan ek padhta hai. Yeh *kya yeh jawaab source se samarthit hai?* aur *inme se kaun sa behtar hai?* jaise sawaalon mein achha hai. Yeh ek aisi cheez bhi hai jisme biases hain, jinhe naapna padta hai.

"Pehle ko jahan ho sake istemaal karo," Imran ne kaha. "Teesre ko un cheezon ke liye jo pehla dekh nahi sakta. Aur doosre ko teesre ko imaandaar rakhne ke liye."

## Mukadme par ek judge

Anaya ko ek khaas sawaal ke liye ek judge chahiye tha jiska jawaab koi program nahi de sakta tha: *guard ka kaam hone ke baad, kya message mein kuch personal bacha hai?* Code checks confirm kar sakte the ki ek quote maujood tha. Woh yeh nahi bata sakte the ki ek bacha hua tukda, *Karve Road par chemist ke upar wala flat*, ab bhi kisi insaan ki taraf ishaara karta hai ya nahi.

Imran ne ek dopahar mein ek judge likha. Woh saaf kiye gaye message ko padhta tha aur haan ya nahi mein jawaab deta tha, ek wajah ke saath. Woh shaandaar dikhta tha. Woh tez tha. Uski wajahein dhaaraapravah, achhe se vyavasthit, aur aksar, usne dekha, un jawaabon se lambi thin jin par woh tippani karti thin.

"Bharosa karne se pehle," Imran ne kaha, "tum use jaanchti ho. Pachaas khud grade karo. Use wahi pachaas grade karne do. Gino ki kitni baar sahmat hote ho."

Usne aur Farah ne Saturday ko pachaas saaf kiye gaye messages grade kiye, alag-alag, phir tulna ki. Woh ek doosre se pachaas mein se adtaalees par sahmat the, jo ek raahat thi. Judge, usi pachaas par chalaya gaya, unse taintees par sahmat tha.

"Chhiyaasath percent," Anaya ne kaha. "Yeh bura hai."

"Chhe ya saat das mein ek bahut saamanya pehla nateeja hai," Imran ne kaha. "Jo maayne rakhta hai woh asahmatiyon ka *pattern* hai. Unhe dekho."

Usne dekha. Satrah asahmatiyan. Aur jab usne unhe bichhaya, toh usne dekha, kyunki judge ki galtiyan bikhri nahi thin. Satrah mein se chaudah mein, judge ne ek aise message ko *saaf* kaha tha jisme ab bhi kuch personal tha, aur lagbhag un sab mein message ek lamba tha jisme ek mask tha. Judge ne mask dekha tha, aur message jitna lamba, utna hi woh santusht lagta tha.

Agar galtiyan bikhri hoti, toh iska matlab hota ki woh aur Farah khud is par sahmat nahi the ki "saaf" ka matlab kya hai, aur judge mein koi badlaav madad nahi kar sakta tha. Kyunki woh jame hue the, use pata tha ki use kuch mil gaya hai jise woh theek kar sakti hai.

## Judge kya galat karta hai

Imran ke paas ek list thi, aur woh chhoti aur befaayda thi. Judges lambe jawaabon ko zyada score dete hain, chahe atirikt shabd kuch na jodte hon. Jab do jawaabon ki tulna karne ko kaha jaye, toh woh us ko tarjeeh dete hain jo unhone pehle dekha. Aur "overall quality" ke baare mein poochha gaya judge us taraf bahne lagta hai jo vistrit sunayi deta hai.

Ilaaj saral the, aur kaam karte the. Judge se ek khaas cheez grade karne ko kaho, "quality" nahi: *kya koi aisi detail bachi hai jo ek insaan ko pehchaan sake?* Use ek score karne ki jagah do outputs ki tulna karne ko kaho, phir unhe badal kar dobara chalao. Use woh theek-theek shabd quote karne ko kaho jin par uska nirnay tika hai, taaki koi insaan quote ek pal mein jaanch sake, jaise finder ke saath.

Usne nirdesh un teen tareeko se dobara likha. Usi pachaas par, judge ab usse chauvaalees baar sahmat tha.

"Atthaasi percent," Farah ne kaha.

"Aur ab bhi logon ke barabar nahi," Imran ne kaha, "par ek naapne ka upkaran. Jis judge ko aapne apni marking ke khilaaf jaancha hai woh ek tool hai. Jise nahi, woh us machine se sahmat hone ki pravritti rakhta hai jise woh mark kar raha hai, kyunki dono ek hi kism ki cheez hain."

## Sau asli wale

Yeh sab use yeh nahi bata paaya ki *kya* galat ja raha tha. Judge report karta hai ki kuch kitni baar fail hota hai. Woh yeh nahi kehta ki kyun.

Iske liye, Imran ne poore project ka sabse feeka kaam kiya. Ek weekend par, usne guard ko, bina kuch badle, ek mahine ki exported chats par chalaya. Usne har message ke liye likha ki woh kya chhupata. Monday ko usne use una outputs ka ek dher thama diya, ek sau, chhape hue, yaadrichhik chune hue.

"Padho," usne kaha. "Jo bhi galat gaya uske liye apne shabdon mein likho ki kya galat gaya. Ek vaakya. Pehle category mat chuno. Baad mein chuno."

Mangalvaar ki raat thi, aur Meenakshi ne Sunday ko kaha tha ki woh sunne ke liye call karengi, aur unhone ki, billi doosre chhor par keyboard par sunayi dete roop se baithi hui. Anaya ne padha, aur Farah ne agli kursi par padha, aur do ghante tak sirf pannon ki aur pankhe ki dheemi shikayat ki awaaz thi.

Pehle vaakya ka niyam Meenakshi ne apne tareeke se uspar zor dekar kaha tha. "Agar tum pehle category chunti ho, toh tum sirf wahi dekhne lagti ho jo tumhari categories mein fit hota hai. Jo dekha woh likho. Phir poochho ki vaakyon mein kya saajha hai."

Jab unhone khatam kiya, toh unhone notes farsh par bichhaye aur unhe group kiya. Sau mein se ikatees kisi na kisi tarah se galat gaye the.

| Kya galat gaya | Ginti |
| --- | --- |
| Order number jo pehchaan ke number ki tarah chhupa diya gaya | 9 |
| Roman Hindi mein likha naam jiske baad *ji* hai, chhoot gaya | 8 |
| Ek pata sirf aadha chhupa | 5 |
| Do lines mein tooti ek number, chhoot gayi | 4 |
| Ek company ka naam jise insaan maana gaya | 3 |
| Anya | 2 |

Yeh error analysis tha, aur jisne bhi ise kiya hai, Imran ne kaha, wahi kehta hai: yeh is kshetra ka sabse keemti quality ka kaam hai, aur ismein na kisi model ki zaroorat hai na budget ki. Isse aapko jo milta hai woh aapke apne traffic se bani, ranked list hai ki kya theek karna hai. Ek aam benchmark yeh nahi kar sakta, kyunki uske paas aapke customers ya aapke documents nahi hain.

Is table ne plan ko us quarter ke kisi bhi aur kaam se zyada badla. Woh ek hafta addresses par lagane wali thi, kyunki woh zaroori lagte the. Data ne kaha ki badi problem ek akeli, bevakoof thi: order numbers.

## Ek loop

Har group answer key mein rows ban gaya. Order numbers ke baare mein nau aur rows, sahi jawaab pehle se likha hua. *Ji* ke baare mein aath. Line breaks ke baare mein chaar. Key ek sau bees rows se ek sau ikyaavan ho gayi.

Yahi iska aakaar tha, aur Anaya ne ise board par ek line mein banaya taaki woh bhool na jaye. *Asli messages, failures padho, rows jodo, theek karo, naapo, aur asli messages.* Har daur ne key ko asli istemaal ki ek behtar tasveer banaya. Tools har kuch mahine mein badlenge. Key aur failures ki list rahegi.

Ghar jaane se pehle, Meenakshi ne ek aur baat kahi, jaisa woh aamtaur par call ke ant mein karti thi. "Bahar jaane se pehle, tum poochhti ho ki kya yeh key paas karta hai. Bahar jaane ke baad, tum poochhti ho ki kya log behtar hain. Woh alag sawaal hain. Pehle mein paas hona doosre ko ankita chhod sakta hai."

Anaya ne use likh liya. Woh woh sawaal nikalne wala tha jo uske saath sabse lambe samay tak rahega.

## Saath le jaane layak baatein

Ek jawaab mark karne ke teen tareeke hain: ek program, jo lagbhag muft hai aur jitna ho sake istemaal karna chahiye; ek insaan, jo mehnga hai aur jo tay karta hai ki sahi ka matlab kya hai; aur ek model jo judge ki tarah kaam karta hai, jo tez aur sasta hai aur jiske biases hain. Judge ko usi jawaabon ko khud grade karke aur ginke ki aap kitni baar sahmat hote hain jaancha jaana chahiye, aur asahmati ka pattern number se zyada maayne rakhta hai: jame hue galtiyan theek ki ja sakti hain, bikhri hui ka matlab hai ki aapki apni paribhasha saaf nahi. Judges lambe jawaabon aur do mein se pehle ko pasand karte hain; ilaaj hain ek khaas cheez grade karna, kram badalna, aur ek quote maangna. Aur sabse kaam ka quality ka kaam hai sau asli outputs padhna, categories chunne se pehle apne shabdon mein likhna ki kya galat gaya, group karna aur ginna, aur sabse bade groups ko naye test cases mein badalna.
