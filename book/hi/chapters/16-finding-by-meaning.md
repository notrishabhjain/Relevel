---
title: Matlab Se Dhoondhna
summary: Ek bazaar jahan ek hi vyapar ki dukaanein ek hi gali mein hoti hain, ek product manager ko woh tasveer deta hai jo use us idea ke liye chahiye jisne search ko bachaya, aur ek aisa number jis par shak karna chahiye.
course: ch5
terms:
  - embedding | numbers ki ek lambi list jo text ke ek tukde ko matlabon ke naqshe par ek jagah deti hai, taaki milte-julte matlab wale texts ko milte-julte numbers milein chahe unme koi shabd saajha na ho | embeddings
  - similarity score | lagbhag 0 se 1 ke beech ek number jo batata hai ki do embeddings kitne qareeb hain; iska kuch matlab tab tak nahi jab tak aap jaanein na ki saaf achhe aur saaf bure matches kitna score karte hain | similarity scores, similarity
---

Pune ke purane hisse mein ek gali hai jahan har dukaan peetal bechti hai.

Woh main sadak ke peeche se jaati hai, itni sankri ki delivery cart ko ruk kar scooter se maafi maangni padti hai, aur ek chhor se doosre tak diye, ghantiyan, bartan, steel ki thaliyan aur chhoti murtiyan hain, aisi dukaanon mein jo ek jaisi dikhti hain aur alag hain. Thoda aage kapde ki gali hai. Uske aage sookhe mewe ki gali. Jo naya aane wala koi khaas diya chahta hai use dukaan ka naam jaanne ki zaroorat nahi. Use bas yeh jaanna hai ki kaun si gali mein jaana hai, aur gali mein woh milega jo woh dhoondh rahi hai, aur uske qareebi rishtedaar bhi.

Imran ka janm wahan se das minute ki doori par hua tha, aur usne use, bina sharmaye, samjhane ke liye istemaal kiya ki aage kya aane wala hai.

## Ek naqsha jahan paas hona matlab hai

"Kalpana karo ki bazaar ek naqsha hai," usne kaha. "Dukaanon ka nahi, matlabon ka. Duniya ke har vaakya ki us par ek jagah hai. Milte-julte matlab wale vaakya ek hi gali mein khade hote hain. *Mera paisa kab wapas milega* aur *manzoor dawon ki pratipoorti* padosi hain, chahe unme ek bhi shabd saajha na ho. *Peru ki rajdhani kya hai* bahut lambi paidal doori par hai."

Anaya ne Farah ke bees cards ke baare mein socha, jo Monday se mez par pade the, har ek ko is baat ka pata nahi tha ki woh kisi cheez ke baare mein hai.

"Naqsha banata kaun hai?"

"Ek machine. Bada wala nahi. Ek alag, chhota model, sirf isi ke liye bana." Usne page par thapki di. "Tum use text ka ek tukda dete ho. Woh numbers ki ek lambi list wapas deta hai, jo naqshe par us text ke coordinates hain. Us list ko *embedding* kehte hain. Poori chaal bas yahi hai. Machine ko tumhara sawaal samajhne ki zaroorat nahi. Use bas use ek jagah par rakhna hai."

Jab har card ko ek jagah mil jaaye, toh kaam ke cards dhoondhna spelling ka maamla nahi rehta, doori ka ho jaata hai. Customer ke sawaal ko naqshe par rakho, uske sabse qareeb khade cards dhoondho, aur woh bhejo.

## Wahi bees cards

Usne yeh pehle hi kar liya tha. Usne saare bees cards machine se ek baar guzaare the, aur coordinates ek chhoti file mein rakh liye the, aur ab usne woh sawaal type kiya jisne Monday ko Anaya ko haraya tha.

*Paisa kab milega?*

Sawaal usi naqshe se guzra. Woh, jaisa aise sawaal karte hain, intezaar, paisa aur wapsi ke mohalle mein utra. Ek second baad screen ne teen sabse qareeb cards ki list di. Sabse upar card saat tha, woh jo saat kaam ke dinon mein refund process hone ke baare mein tha. Uske bagal mein ek number tha.

*0.71.*

"Yeh similarity score hai," Imran ne kaha. "Sawaal us card ke kitna qareeb hai. Yeh, lagbhag, shoonya se ek tak chalta hai. Ek ke paas ka matlab matlab mein lagbhag ek jaisa. Shoonya ke paas ka matlab asambandhit."

"Ikhattar. Yeh achha hai."

"Hai kya?" Woh khush lagta tha ki usne poochha. "Bina yeh poochhe ki ek bura match kitna score karta hai, mujhe nahi pata."

Usne wahi sawaal late payments par byaaj wale card se milaya, jo saaf-saaf asambandhit tha. *0.38.* Registered mobile number badalne wale card se: *0.31.* Aise card se jo sirf company ka pata batata tha: *0.12.*

"Toh asli text shaayad hi kabhi lagbhag ek-dahaai se neeche score karta hai," usne kaha. "Aur kaam ki range sankri hai. Ikyaavan ka matlab *aadha milta-julta* nahi hai. Is system mein ikyaavan range ke neeche ke paas hai. Similarity number ka kuch matlab tab tak nahi jab tak aap na jaanein ki saaf achhe matches kitna score karte hain aur saaf bure kitna. Main kisi ka bharosa nahi karunga jo mujhe ek akela number bataye."

## Cheezein jo naqsha buri tarah karta hai

Anaya ko ek *lekin* ki umeed hone lagi thi, aur woh aaya jaise hamesha aata hai, bina jaldi ke.

"Naqsha utna hi achha hai jitna us text se jo machine ne seekha. Zyadatar woh internet ka English text tha. Agar tumhare shabd usme durlabh the, toh woh unhe ajeeb jagahon par rakhta hai. Do cheezein jo tumhare users alag dekhte hain padosi ban sakti hain. Do jo woh ek jaisi dekhte hain door ho sakti hain."

Usne use Sahaj ke customers ke shabdon ke baare mein sochne ko kaha. *Lakh* aur *crore.* NEFT aur IMPS, transfer ke do kism jinhe aam insaan ek maan leta hai aur accountant kabhi nahi. Sarkari yojanaon ke naam, jo ek shabd se alag ho sakte hain aur alag rakam ka matlab. English akshron mein likhi Hindi, jaise *paisa kab milega*, jisse machine kam mili thi, *when will I be refunded* ke muqable. Aur Sahaj ke apne internal naam: do product codenames jinka building ke logon ke liye bahut alag matlab tha aur machine ke liye kuch nahi, jo unhe unki spelling ke hisaab se rakh deta.

"Failures ko naam do usse pehle ki koi user tumhare liye dhoondh de," Imran ne kaha.

Naqshe ke istemaal ke baare mein ek doosri, bareek baat kehni thi. Sawaal chhota hota hai aur sawaal ki tarah likha hota hai. Jo passage use jawaab deta hai woh lamba hota hai aur bayaan ki tarah likha hota hai. Achhe embedding models ko yeh dhyaan mein rakh kar train kiya jaata hai aur unse umeed ki jaati hai ki unhe bataya jaaye ki woh kise dekh rahe hain. Agar aap yeh galat karte hain, toh kuch tootta nahi. Nateeje bas aise tareeke se kharab hote hain jiska koi error message zikr nahi karta.

## Naqshe par guard

Isi baatcheet ke dauran Anaya ne dekha ki naqsha guard ke us hisse ki kaise madad kar sakta hai jise woh nijee taur par mushkil wala kehti thi.

Usne apni khud ki spreadsheet mein das vaakya likhe the. Paanch aise the jo bina ek bhi number ya naam ke ek insaan ko pehchaan dete hain. *Main apne gaon ka akela diabetic patient hoon jiska pichhle saal transplant hua. Main Wadgaon ka sarpanch hoon aur saath mein fair-price shop bhi chalata hoon. Mera beta hamari chawl ka akela ladka hai jiska is saal IIT Bombay mein hua.* Paanch nirdosh the: *Mere driving licence ko renew karne ke liye mujhe kaun se documents chahiye?* aur aise hi doosre.

Usne naqshe se saare das ko rakhwaya, phir naapa ki har ek pehle se kitna qareeb khada hai.

| Vaakya | Kya ek insaan ko pehchaanta hai? | Pehle ke khilaaf score |
| --- | --- | --- |
| Sarpanch jo dukaan bhi chalata hai | Haan | 0.74 |
| Chawl ka akela ladka jo IIT mein hua | Haan | 0.66 |
| Ek mahila jo apne taluka ki akeli vet hai | Haan | 0.54 |
| Mere driving licence ko renew karne ke liye mujhe kaun se documents chahiye? | Nahi | 0.41 |
| Ration order par cash-on-delivery ka ek sawaal | Nahi | 0.58 |
| School fee refund ki ek shikayat | Nahi | 0.55 |

Usne use dekha. Sabse zyada score karne wala nirdosh vaakya, 0.58, pehle ke un pehchaanne wale vaakyon mein se ek, 0.54, se zyada qareeb khada tha. Aisa threshold jo teeno pehchaanne wale vaakyon ko pakadta, woh do nirdosh ko bhi pakad leta.

"Yeh unhe topic ke hisaab se group kar raha hai," usne kaha. "Pehla vaakya ek gaon, ek insaan, aur ek aspatal ke baare mein hai. Naqsha padosiyon ko ek hi gali mein rakhta hai. Gaon mein ration order ke baare mein ek vaakya iske paas utarta hai, kyunki woh ek gaon ke baare mein hai. Lekin vaakya ek insaan ko pehchaanta hai ya nahi yeh topic ka sawaal nahi hai."

"Nahi," Imran ne kaha. "Woh ek alag cheez hai. Paas hona risk nahi hai."

Use haar ka ehsaas nahi hua. Agar kuch hua toh woh aur exact mehsoos karne lagi. Naqsha un cheezein dhoondhne ka achha tool tha jinka matlab sawaal ke matlab jaisa hai. Isse yeh nahi nikalta tha ki woh *ek insaan ki taraf ishaara karta hai* jaisi koi gunvatta pakad sakta hai. Uske liye use kuch aur chahiye hoga, ya kam se kam kuch jodna padega, aur use abhi nahi pata tha ki kya.

Phir bhi use pata tha ki is finding ka kya karna hai. Usne ise board par laal line ke neeche likha, us table ki doosri row ke roop mein jo usne us hafte shuru ki thi: jahan niyam-aadharit tareeka jeetta hai, aur jahan matlab-aadharit tareeka jeetta hai, aur jo dono nahi kar sakte.

## Jo naqsha nahi keh sakta

Ek cheez thi jo naqsha saade tareeke ke saath saajha karta tha. Ise aisa sawaal poochho jiska kisi card ne jawaab nahi diya, aur woh phir bhi sabse qareeb card lauta deta tha, ek score ke saath, aur score kam hota tha par shoonya nahi. System mein kuch nahi kehta tha ki *yahan kisi ko nahi pata*. Sabse kam bura card phir bhi machine ko saboot ki tarah thama diya jaata.

"Toh Monday wali baat ab bhi sach hai," Anaya ne kaha.

"Hai," Imran ne kaha. "Aur ab jab hum cheezein shabdon ke saath-saath matlab se bhi dhoondh sakte hain, toh hum aakhirkaar pata kar sakte hain ki hum kitni baar galat hote hain. Agla kaam yahi hai. Aur yeh zyada zaroori hai."

## Saath le jaane layak baatein

Embedding text ke ek tukde ko matlabon ke naqshe par numbers ki ek lambi list ke roop mein ek jagah deta hai, taaki milte-julte matlab wale texts paas-paas khade hon chahe unme koi shabd saajha na ho. Sahi tukde dhoondhna doori ka maamla ban jaata hai, aur doori similarity score ke roop mein batayi jaati hai, jo tab tak arthheen hai jab tak aap na jaanein ki saaf achhe aur saaf bure matches kitna score karte hain. Naqsha utna hi achha hai jitne text se usne seekha, isliye woh sthaaniya shabdavali ko buri tarah rakh sakta hai. Naqshe par paas hona matlab ke baare mein hai, har us gunvatta ke baare mein nahi jo vaakya mein ho sakti hai, aur jo tareeka ek hi topic ke vaakya dhoondhta hai woh zaroori nahi ki unhe dhoondhe jo ek insaan ko pehchaante hain.
