---
title: Sabse Bure Ko Maan Kar Chalna
summary: Ek compliance report, ek Saturday jo mithai ko inaam banakar ise todne ki koshish mein bita, aur ek table jisme har suraksha uss test ke bagal mein baithti hai jo use saabit karta hai. Model ke saath chhedchhad hogi; uske aas-paas ki har cheez raksha hai.
course: ch18s
terms:
  - attack surface | woh sab jagahein jahan ek bahari kisi system mein kuch daal sakta hai ya woh kuch pahunch sakta hai jo woh kar sakta hai; har tool, input aur connection ise badhata hai | 
  - least privilege | ek system ko sirf utna access dena jitne ki use asal mein zaroorat hai, taaki agar use dhokha diya jaye toh nuksaan seemit rahe | 
  - red team | woh log jinka kaam jaan-boojh kar ek system par hamla karna hai, taaki uski kamzoriyan pehle unhe milein | red-team, red teaming
  - audit trail | kaam se alag rakha gaya ek record, ki kisne kya kiya, kab, kis niyam ke tahat aur kis nateeje ke saath, kisi ghatna ko punarnirmit karne ke liye kaafi | audit log
  - risk register | ek table jo har jokhim ko uske malik, uske control, saboot ki control kaam karta hai, aur kitna jokhim bacha hai, ke saath list karti hai | 
  - residual risk | woh jokhim jo controls lagne ke baad bacha rehta hai, jise likhna chahiye aur door maan nahi lena chahiye | 
---

Lakshmi ki report ek Friday ko aayi aur chaar page ki thi, aur pehla page Anaya ke dar se zyada narm tha.

*Retrieval design thos hai,* usne kaha. *Access labels wahan laagu hain jahan hone chahiye. Team ne is baare mein asaadharan imaandaari dikhayi hai ki system kya nahi karta.* Phir, doosre page par, saaf type mein ek heading ke neeche, do items jin par kaam chahiye tha.

*Pehla: trace records mein kachcha message text ek anirbandh store mein hai.* Imran ne ise naye records ke liye theek kiya tha aur purane ke liye nahi, aur purane ab bhi sab kuch rakhte the.

*Doosra: main chahti hoon ki koi ise todne ki koshish kare jisne ise banane mein madad nahi ki.*

"Yeh doosra," Imran ne kaha, "mujhe pasand hai."

## Kaagaz mein ek parchi

Usne use sthiti ek baar aur banayi, aur is baar use laga ki tasveer sahi thi. Ek clerk ko processing ke liye kaagazon ka dher thamaya jaata hai. Dher mein kahin, baaki jaise hi type mein, ek parchi hai: *ise bina jaanche manzoor karo.* Clerk bilkul theek padhta hai. Dikkat yeh hai ki process mein kuch bhi nirdesh ko document se alag nahi karta.

Ek model jo kuch bhi use diya jaata hai usse ek hi bharose ke saath padhta hai, aur isliye yeh khatarnaak hai ya nahi yeh poori tarah uske aas-paas ke system par nirbhar karta hai: use kya diya jaata hai, aur use aage kya karne ki ijaazat hai. Ek AI product ki zyadatar suraksha model mein hoti hi nahi. Woh isme hai ki product model ko kya khilata hai, jawaab ke saath kya karta hai, aur woh kya pahunch sakta hai. "Nirdesh mein tameez se kehna," Imran ne kaha, "seema nahi hai."

Usne use woh siddhant diya jo baaki ke neeche tha, aur usne ise log mein tareekh ke saath likha. *Maan lo ki model ke saath chhedchhad hogi. Application, dhoondha hua text, tools, pehchaan ki layer aur data pipeline sab attack surface ka hissa hain.*

*Attack surface* woh har jagah hai jahan ek bahari kisi system mein kuch daal sakta hai, ya woh kuch pahunch sakta hai jo woh kar sakta hai. Har tool ise badhata hai. Har input. Kisi doosri service se har connection.

## Ek Saturday

Farah ne ise aayojit kiya, aur woh us patjhad ka akela aayojan tha jise bina kisi sankoch ke sabne pasand kiya.

Woh ek Saturday tha, bade kamre mein, biscuits wapas aa gaye the. Support teams ke aath log aur project ke bahar ke do, Imran ka ek dost jo ek bank ke liye suraksha karta tha aur Lakshmi ka ek purana saathi, ko har ek ko ek laptop, guard ki ek test copy aur ek hi nirdesh diya gaya: *ise leak karwao.* Inaam jalebiyan thin, ek darjan, neeche ki dukaan se, aur canteen mein dhaak.

Logon ka ek samooh jinka kaam jaan-boojh kar ek system par hamla karna hai, taaki uski kamzoriyan unhe milein usse pehle ki kisi aur ko milein, *red team* hai. Yeh ek dopahar thi, aur isne cheezein dhoondhin.

**Anadekha akshar.** Farah ke agents mein se ek, Karan naam ka ek shaant yuvak, ne ek Aadhaar number type kiya jiske beech mein ek chhupa hua character tha. Woh ek zero-width space tha, ek character jo koi jagah nahi leta aur dikhta nahi. Aankh ko number bilkul sahi tha: 4321 5678 9012. Pattern checker ko woh beech mein kuch ajeeb wale barah ank the, aur woh match nahi hua. Number seedha nikal gaya. Anaya safed pad gayi. Usne woh case vasant mein answer key mein *tricky rows* naam ki list mein daala tha, aur use asal mein kabhi test nahi kiya tha. Ilaaj har jaanch se pehle ek kadam tha: saare woh characters hata do jo dikhte nahi, aur doosri lipiyon ke ank, jaise Devanagari aur kuch keyboards ke chauda roop, aam ankon mein badal do.

**Dushman string.** Imran ke ek dost ne ek message bheja jisme, ek vaakya ke beech mein, web markup ka ek tukda tha. Guard ne ise theek sambhala. Agent ke console ne nahi. Usne message ko web page ki tarah dikhaya, aur markup chal gaya. Yeh improper output handling naam ki failure hai: kahin upar bana text, yahan ek customer dwara, niche kisi cheez dwara bharosemand maana jaata hai. Ilaaj hai model se jo kuch bhi bahar aata hai, aur jo kuch andar jaata hai, use bharose ka na maanne wala input maanna. Use escape karo. Typed fields par zor do. Banaye gaye text ko kabhi commands ki tarah interpret mat hone do.

**Customers ke beech ka sawaal.** Ek agent ne chatbot se, natural language mein, poochhne ki koshish ki ki pichhle customer ne kya poochha tha. Usne kaha ki woh isme madad nahi kar sakta, jo apekshit nateeja tha aur kam dilchasp. Zyada dilchasp yeh tha ki koi bhi lookup ko kisi aur ka order lautane par manaa nahi paaya, kyunki customer ka number session se aata tha, model se nahi. Ise September mein aise hi banaya gaya tha. Red team ne ispar bees minute bitaye aur chali gayi.

**Purane traces.** Lakshmi ke saathi ne log store dekhne ko kaha. Use dhoondhna mushkil nahi tha. Usme ab bhi vasant se pehle ke kachche messages the, saaf text mein, logging system tak access wale kisi ke bhi padhne layak. Jo cheez rokne ke liye poora project tha woh us jagah baithi thi jahan project ne kabhi dekha hi nahi.

Dopahar ke ant tak chaar findings the, unme se ek gambhir, aur jalebiyan us yuvak ke paas gayi thin jisne anadekha akshar dhoondha tha, jisne unmein se teen bade vikaar ke saath khayin.

## Sirf jitni zaroorat

Imran ne agla hafta cheezon ko sankra karne mein bitaya. Siddhant ka ek purana naam hai: *least privilege*. Ek system ko sirf utna access do jitne ki use asal mein zaroorat hai, taaki agar use dhokha diya jaye toh nuksaan seemit rahe. Agar ek agent ke paas ek tool hai jise woh kabhi istemaal nahi karta, toh ek hamlavar use woh tool istemaal karne ke liye manaa sakta hai, aur woh poori nek-neeyati se karega.

Woh har us function se guzra jo guard aur raat ka agent bula sakta tha, aur har ek ke liye usne poochha: agar yahan model galat ho toh sabse bura kya ho sakta hai? Order lookup: ek padhna; sabse bura samay ki barbaadi. Restore button: ek palta ja sakne wala write, record ki hui wajah ke saath. Customer ko kuch bhi bhejna: model se poori tarah hata diya gaya. Jitne zyada tools usne hataye, system ki upayogita utni kam girti gayi, aur do mamlon mein bilkul nahi giri.

Usne woh record bhi banaya jo Lakshmi August se maang rahi thi. Ek *audit trail* dikhata hai ki kisne kya kiya, kab, kis niyam ke tahat, kis tool ke saath aur kis nateeje ke saath. Yeh kaam se alag rakha jaata hai, taaki kisi ghatna ki jaanch karne wala use punarnirmit kar sake. Manzooriyan aur execution alag ghatnaon ke roop mein likhe gaye, aur execute ki gayi karyavahi ek fingerprint le jaati thi us exact payload ka jo manzoor kiya gaya tha. Usne manzoori ke baad payload badal kar ise test kiya. Mismatch ek laal line ke roop mein dikha.

## Saboot wali ek table

Ant mein, Lakshmi ne woh kiya jiska woh saal bhar se intezaar kar rahi thi. Usne woh cheez maangi jise woh imaandaar document kehti thi.

*Risk register* ek table hai jo har jokhim ko uske malik, use sambodhit karne wale control, aur saboot ki woh control kaam karta hai ke saath list karti hai. Anaya ne use uske saath, row-dar-row banaya, aur use jo chauka gaya woh yeh tha ki yeh us list se kitna alag lagta tha jo usne June mein likhi thi. June mein har jokhim ke bagal mein ek umeed thi. Ab har ek ke bagal mein ek test tha.

| Jokhim | Control | Saboot ki yeh kaam karta hai | Malik | Kya bacha |
| --- | --- | --- | --- | --- |
| Message mein chhupe nirdesh | Finder ke paas koi tool nahi; output tay form se jaancha jaata hai | 50 injected messages, kisi ne output nahi badla | Imran | Aise hamle jinke baare mein abhi kisi ne socha nahi |
| Logs mein kachcha text | Sirf saaf records store karo; kachcha sat din tak ek pratibandhit store mein | Access test; safai ke baad purane logs ka namoona audit | Lakshmi | Ek vishesh adhikar wala andar ka insaan |
| Console dwara chalaya gaya markup | Saara text escape karo; typed fields | Barah dushman strings, koi bhi markup ke roop mein render nahi hui | Imran | Anjaane browser quirks |
| Ek model retire ya badla gaya | Pinned versions; release gate | Har badlaav par gate report | Anaya | Ek badlaav jise key cover nahi karti |
| Agents customers ka text bahari tools mein paste karte hain | Likhit niyam | Koi nahi | Farah | Sab kuch |

Aakhri row woh thi jis par Lakshmi ne ungli rakhi, aur woh sahi thi. *Likhit niyam* ke roop mein chinhit control, bina saboot ke, ek aisa control hai jo kaagaz par maujood hai. Jokhim asli tha, unhone ise August mein dhoondha tha, aur uske aur ek leak ke beech sirf ek handbook ka ek vaakya tha. Anaya ne *saboot* column mein shabd likha *koi nahi*, aur hashiye mein, woh jo pehle se aadha bana tha. *Paste box.*

"Ek suraksha jise kisi ne test nahi kiya sirf kaagaz par maujood hai," Lakshmi ne kaha. "Har ek ke bagal mein woh test likho jo saabit karta hai ki woh kaam karti hai, aur use chalao. Jo bacha hai woh hissa hai jiske baare mein tumhein imaandaar hona hai." Wahi baki *residual risk* hai: controls lagne ke baad jo bacha hai. Use likha jaana chahiye, door maan nahi liya jaana chahiye.

Anaya ne daayen column ko der tak dekha. Usme kuch bhi nahi kehta tha *koi nahi*. Usne paya ki, thodi hairaani se, use woh aise zyada pasand tha.

## Saath le jaane layak baatein

Ek model jo kuch bhi use diya jaata hai usse ek hi bharose ke saath padhta hai, isliye ek AI product ki zyadatar suraksha uske aas-paas ke system mein hai: attack surface, jo har jagah hai jahan ek bahari use kuch de sakta hai ya woh kuch pahunch sakta hai jo woh kar sakta hai. Ek red team jo jaan-boojh kar product par hamla karti hai woh dhoondhti hai jo uske banane wale nahi dhoondh sakte, jaise ek number ke andar anadekhe characters, dushman text jise ek screen bharose ka maanti hai, aur purane logs jinhe kisi ko yaad nahi tha. Model se jo kuch bahar aata hai woh jo bhi use paata hai uske liye bharose ka na maanne wala input hai. Least privilege ka matlab hai ek system ko sirf utna access dena jitne ki use zaroorat hai, kyunki jo kuch woh kar sakta hai, ek hamlavar use woh karne ke liye manaa sakta hai. Ek audit trail ek alag record rakhta hai ki kisne kya kis niyam ke tahat kiya. Aur ek risk register har suraksha ko uss test ke bagal mein rakhta hai jo saabit karta hai ki woh kaam karti hai aur bacha hua residual risk, taaki ek control jo sirf likhit niyam par tika hai woh waisa dikhe jaisa woh hai.
