---
title: Matlab Se Dhoondhna
summary: Ek bazaar jahan ek hi vyapaar ki dukaanein ek hi gali mein hain, product manager ko woh tasveer deta hai jiski use us vichaar ke liye zaroorat thi jisne search ko bachaya, aur ek number jis par shak karna hai. Chapter embeddings aur similarity scores samjhata hai.
course: ch5
goals:
  - samjhana ki embedding text ko matlab ke naqshe par kaise rakhti hai, taaki milte-julte matlab paas rahein
  - similarity score padhna aur batana ki akela score kam kyun maayne rakhta hai
  - un jagahon ke naam batana jahan Sahaj ke customers ke liye naqsha galat ho sakta hai
  - samjhana ki naqshe par paas hona risk ke barabar kyun nahi hai
terms:
  - embedding | numbers ki ek lambi list jo text ke ek tukde ko matlabon ke naqshe par ek jagah deti hai, taaki milte-julte matlab wale texts ko milte-julte numbers milein chahe unme koi shabd saajha na ho | embeddings
  - similarity score | lagbhag 0 se 1 ke beech ek number jo batata hai ki do embeddings kitne qareeb hain; iska kuch matlab tab tak nahi jab tak aap jaanein na ki saaf achhe aur saaf bure matches kitna score karte hain | similarity scores, similarity
---

Pune ke puraane hisse mein ek gali hai jisme har dukaan peetal bechti hai. Woh mukhya sadak ke peechhe hai, itni tang ki ek delivery cart ko ek scooter se maafi maangkar rukna padta hai, aur ek chhor se doosre tak ismein diye, ghantiyan, bartan, steel ki thaaliyan aur chhoti murtiyan hain, aisi dukaanon mein jo ek jaisi dikhti hain par ek jaisi nahi hain. Thodi door kapde ki gali hai, aur uske aage sookhe mewe ki. Jo naya aadmi kisi khaas diye ko dhoondh raha hai use dukaan ka naam jaanne ki zaroorat nahi. Use bas yeh pata hona chahiye ki kaun si gali mein jaana hai, aur gali mein woh milega jo woh dhoondh rahi hai aur uske kareeb ke rishtedaar bhi.

Imran Qureshi us gali se das minute door paida hua tha, aur usne ise samjhane ke liye istemaal kiya ki machine text ko uske matlab se kaise dhoondh sakti hai.

## Case: naqshe ki tarah bazaar

Imran ne Anaya se bazaar ko ek naqshe ki tarah sochne ko kaha, dukaanon ka nahi balki matlabon ka. Duniya ke har vaakya ki us par ek jagah hai. Milte-julte matlab wale vaakya ek hi gali mein khade hote hain. "Mera paisa kab wapas milega" aur "manzoor shuda claims ka reimbursement" padosi hain, chahe unme ek bhi shabd ek jaisa na ho. "Peru ki rajdhani kya hai" bahut door ki sair hai.

Anaya ne Farah ke bees cards ke baare mein socha jo table par pade the, har ek ko yeh pata nahi tha ki woh kisi cheez ke baare mein hai. Usne poochha ki naqsha kaun banata hai. Imran ne kaha ki ek machine, ek alag chhota model jo isi kaam ke liye bana hai. Use text ka ek tukda diya jaata hai aur woh ankon ki ek lambi list lautata hai, jo naqshe par text ke coordinates hain.

::: def Embedding
Ankon ki ek lambi list jo text ke ek tukde ko matlab ke naqshe par ek jagah deti hai, taaki milte-julte matlab wale texts ko milte-julte ank mile, chahe unme koi shabd saajha na ho. Machine ko sawaal samajhna nahi padta. Use use ek jagah rakhna hota hai.
:::

Jab har card ki ek jagah ho jaati hai, toh prasangik cards dhoondhna spelling ka nahi balki doori ka sawaal ban jaata hai. Customer ke sawaal ko naqshe par rakha jaata hai, sabse paas ke cards dhoondhe jaate hain, aur woh model ko bheje jaate hain.

## Wahi bees card

Imran ne bees cards ko ek baar embedding model se chalaya tha aur coordinates ek chhoti file mein rakh liye the. Usne woh sawaal type kiya jisne Monday ko Anaya ko haraya tha, "Paisa kab milega?" Woh intezaar, paise aur wapsi ke ilaake mein utra. Screen ne teen sabse paas ke cards ginaye, aur card saat, jo saat kaam ke dinon mein refund ke baare mein tha, sabse upar tha. Uske paas ek number tha: 0.71.

Woh number *similarity score* hai: sawaal card ke kitna paas hai, jo lagbhag shunya se ek tak chalta hai. Anaya ne 0.71 ko achha maana. Imran ne poochha ki kharab milan ka score kya hota hai, aur sawaal ko teen aprasangik cards ke saamne chalaya.

Table: Ek sawaal ka chaar cards ke saath similarity score
| Card | Prasangik? | Score |
| --- | --- | --- |
| Saat kaam ke dinon mein refund | Haan | 0.71 |
| Late payments par byaaj | Nahi | 0.38 |
| Registered mobile number badalna | Nahi | 0.31 |
| Company ka pata | Nahi | 0.12 |

Asli text kam hi kabhi lagbhag ek dahaai se neeche score karta hai, aur upyogi range sankari hai. Is system mein 0.51 ka matlab "aadha milta" nahi hai. Woh range ke tali ke paas hai.

::: watch Akela score kam maayne rakhta hai
Similarity score tab tak kam maayne rakhta hai jab tak yeh na pata ho ki saaf achhe milan kya score karte hain aur saaf kharab kya. Us sandarbh ke bina ek akela score batana koi saboot nahi hai.
:::

## Naqsha kahan kharab kaam karta hai

Naqsha utna hi achha hai jitna us text ne jisse embedding model ne seekha, aur zyadatar woh internet ka English text tha. Jo shabd usme dulabh the woh ajeeb jagahon par rakhe jaate hain. Jo do cheezein users ko alag dikhti hain woh padosi ban sakti hain, aur jo do ek jaisi dikhti hain woh door ho sakti hain. Imran ne Anaya se Sahaj ke customers ke istemaal kiye shabdon ke baare mein sochne ko kaha.

Table: Sahaj ke liye naqsha kahan galat hone ki sambhavna hai
| Shabd | Ye risky kyun hain |
| --- | --- |
| Lakh aur crore | Woh ikaaiyan jo model ne millions aur billions se kam dekhi hongi |
| NEFT aur IMPS | Do tarah ke transfer jinhe aam insaan ek maanta hai aur accountant kabhi nahi |
| Sarkari yojanaon ke naam | Woh ek shabd se alag ho sakte hain aur alag raashi ka matlab rakhte hain |
| English akshar mein Hindi, jaise "paisa kab milega" | Model ne ise "when will I be refunded" se kam dekha hai |
| Sahaj ke andar ke product naam | Do codename company ke andar bahut alag cheezein the aur model ke liye kuch nahi, jo unhe spelling se rakhta hai |

Imran ka niyam tha ki user ke dhoondhne se pehle failures ke naam likh lo. Ek aur sookshm baat yeh hai ki naqsha kaise istemaal hota hai. Sawaal chhota hota hai aur sawaal ki tarah likha jaata hai, aur jo passage uska jawaab deta hai woh lamba hota hai aur kathan ki tarah likha jaata hai. Achhe embedding models ko isi baat ke saath train kiya jaata hai aur unse ummeed ki jaati hai ki unhe bataya jaye ki woh dono mein se kise dekh rahe hain. Agar yeh galat kiya jaaye toh kuch nahi tootta. Nateeje bas kharab hote hain, aise tareeke se jiska koi error message zikr nahi karta.

## Naqshe par guard

Anaya ne dekha ki naqsha guard ke us hisse ki madad kar sakta hai jise woh nijee taur par mushkil kehti thi. Usne ek spreadsheet mein das vaakya likhe the. Paanch aise the jo bina number ya naam ke ek insaan ko pehchaante the, jaise "Main Wadgaon ka sarpanch hoon aur main fair-price shop bhi chalata hoon". Paanch nirdosh the. Usne naqshe se saare das ko rakhne ko kaha aur naapa ki har ek pehle vaakya, "Main apne gaon ka akela diabetic patient hoon jisne pichhle saal transplant karwaya", ke kitne paas khada hai.

Table: Chhe vaakyon ka pehle vaakya se paas hona
| Vaakya | Ek insaan ko pehchaanta hai? | Pehle ke saamne score |
| --- | --- | --- |
| Sarpanch jo dukaan bhi chalata hai | Haan | 0.74 |
| Chawl ka akela ladka jo IIT mein gaya | Haan | 0.66 |
| Ek aurat jo apne taluka ki akeli vet hai | Haan | 0.54 |
| Driving licence renew karne ke liye kaun se documents chahiye? | Nahi | 0.41 |
| Ration order par cash-on-delivery ka sawaal | Nahi | 0.58 |
| School fee refund ki shikayat | Nahi | 0.55 |

Sabse zyada score karne wala nirdosh vaakya, 0.58 par, pehle vaakya ke us pehchaanne wale vaakya se zyada paas tha jo 0.54 par tha. Aisa threshold jo teeno pehchaanne wale vaakya pakadta, do nirdosh bhi pakad leta. Naqsha vaakyon ko vishay ke hisaab se groups mein rakh raha tha. Pehla gaon, ek insaan aur ek aspataal ke baare mein hai, aur gaon mein ration order ka vaakya paas mein aata hai kyunki woh bhi gaon ke baare mein hai. Koi vaakya ek insaan ko pehchaanta hai ya nahi, yeh vishay ka sawaal nahi hai.

::: key Paas hona risk nahi hai
Naqsha woh cheezein dhoondhta hai jinka matlab sawaal ke matlab jaisa hai. Woh khud yeh nahi pehchaan sakta ki koi vaakya ek insaan ki taraf ishaara karta hai ya nahi. Anaya ko isse nirasha nahi hui. Use zyada saaf mehsoos hua. Us gun ke liye use kuch aur chahiye hoga, aur usne khoj ko ek table ki doosri row ke roop mein likha ki kahan rule-aadhaarit tareeka jeetta hai, kahan matlab-aadhaarit jeetta hai, aur kya dono nahi kar sakte.
:::

## Naqsha kya nahi keh sakta

Naqsha ek kamzori saadhe tareeke ke saath baantta hai. Use aisa sawaal diya jaaye jiska jawaab kisi card mein nahi hai, tab bhi woh sabse paas ka card ek score ke saath lautata hai, achhe milan se kam par shunya nahi. System mein koi nahi kehta ki yahan kisi ko pata nahi. Sabse kam kharab card phir bhi model ko saboot ki tarah de diya jaata. Anaya ne kaha ki Monday ko bhi yahi sach tha, aur Imran ne sahmati di ki woh ab bhi sach hai. Ab jab text matlab se bhi dhoondha ja sakta tha, toh yeh pata lagaya ja sakta tha ki system kitni baar galat hai, jo agla kaam tha aur zyada zaroori.

## Saaraansh

Embedding text ke ek tukde ko ankon ki lambi list ke roop mein matlab ke naqshe par rakhti hai, taaki milte-julte matlab wale texts paas khade hon, chahe unme koi shabd saajha na ho. Sahi tukdon ko dhoondhna doori ka sawaal ban jaata hai.

- Doori similarity score ke roop mein batayi jaati hai, jo tab tak maayne-heen hai jab tak yeh na pata ho ki saaf achhe aur saaf kharab milan kya score karte hain.
- Naqsha utna hi achha hai jitna us text ne jisse usne seekha, isliye woh sthaaniya shabdawali ko kharab rakh sakta hai. User ke dhoondhne se pehle failures ke naam likh lo.
- Naqshe par paas hona matlab aur vishay ke baare mein hai, har us gun ke baare mein nahi jo ek vaakya mein ho sakta hai. Jo tareeka ek hi vishay ke vaakya dhoondhta hai woh zaroori nahi ki woh vaakya dhoondhe jo ek insaan ko pehchaante hain.
