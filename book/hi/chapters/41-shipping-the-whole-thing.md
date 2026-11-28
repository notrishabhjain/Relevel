---
title: Poori Cheez Ship Karna
summary: December mein Anaya un logon ke saamne khadi hoti hai jinhone uske idea par shak kiya tha. Ise school ke oral exam jaisa samajhiye. Woh bataati hai ki usne kya banaya, kya toota, kisne use kiya, kitna kharch aaya, aur use kya nahi pata. Jin gyarah stages ko usne follow kiya, woh wahi saal hai jo woh abhi jee kar aayi hai. Aap SDK, findings document, failure class aur evidence pack se milte hain.
course: ch21cap
goals:
  - ek project ke gyarah stages ke naam bata paana, discovery se defence tak
  - failure class ke hisaab se findings document likhna, jisme saboot, fix aur jo bacha hai woh ho
  - bata paana ki developer kit kya hota hai, aur use sirf banana nahi, ship karne mein bhi kya lagta hai
  - bata paana ki aap kya jaante hain, kya nahi jaante, aur aage kya karenge, aur ek evidence pack taiyaar karna
terms:
  - SDK | software development kit: doosre builder ko dene wale toolbox jaisa. Ek chhoti library (ready-made code) aur ek demo, jise doosra developer apne product mein jod sakta hai, bina feature khud banaye | developer kit
  - findings document | mechanic ke repair log jaisa. Isme saaf likha hota hai kya toota, saboot, root cause, fix, aur jaan-boojhkar kya unsolved chhoda gaya. Yeh brochure ka ulta hai | findings documents
  - failure class | kharabi ki ek kisam, kisi ek kharabi ka instance nahi. Tab das tests ka matlab banta hai, das kahaniyon ka nahi | failure classes
  - evidence pack | rasidon ke dabbe jaisa. Isme woh sab hota hai jisse koi aur aapke claims check kar sake, sirf bharosa na kare | 
---

December ke doosre Friday ko Anaya doosri manzil ke bade room mein khadi hui. Uske saamne nau log baithe the. Haath mein ek clicker tha jiski use zaroorat nahi thi. Usne kaha ki pehle woh bataegi ki use kya lagta hai ki woh jaanti hai. Phir bataegi ki kya nahi jaanti.

Table par dono founders the. Lakshmi Iyer bhi thi, finance director. Farah Sheikh apne do agents ke saath baithi thi. Ek lending partner ka technical lead bhi aaya tha. Woh dekhna chahta tha ki cheez asli hai ya nahi.

Imran Qureshi kone mein haath baandhe baitha tha. Yeh pehle se tay tha. Uska kaam tha room ka sabse mushkil insaan banna. Speakerphone par Bengaluru ki ek retired teacher aur ek billi judi thi. Anaya ne kehkar unhe bulwaya tha.

Anaya ne talk ke do versions banaye the. Ek paanch minute ka, un logon ke liye jo decide karenge. Doosra bees minute ka, un logon ke liye jo shak karenge. Pehla woh degi. Agar izaazat mili, toh doosra bhi.

## Case: defence

School ke oral exam ko sochiye. Teacher sawaal poochhta hai, aur aapko apne shabdon mein jawaab dena hota hai. Yeh talk bhi waisi hi thi. Isne poora saal un logon ke saamne rakh diya jinke paas asahmat hone ki wajah thi. Chapter isi talk ke saath chalta hai. Anaya jin stages ko batati hai, wahi poore project ki shape hain.

## Gyarah stages

Anaya ko apne kaam ki shape tab dikhi jab usne use zor se bola. Woh shape poore saal ki shape thi. Ise gyarah stations wali train ke safar jaisa sochiye. Table mein har station hai, aur guard ke liye uska kya matlab tha. Yeh course app ke capstone chapter (aakhri project) ke gyarah stages hain. Wahan ka project page isi kaam ko terah mein baantta hai.

Table: Gyarah stages
| Stage | Guard ke liye iska matlab |
| --- | --- |
| Discover | Ek problem, jo un users ke saath mili jinse woh mil sakti thi: paanch interviews aur ek count |
| Define | Ek specification jiske numbers test kiye ja sakte the |
| Design | Product aur system ek saath design hue, taaki har ek doosre ko shape de |
| Build | Ek patla slice jo end to end chalta tha, threat model ke saath likha hua, baad mein nahi |
| Evaluate | Ek answer key jisme ab 231 rows thi |
| Break | Product par jaan-boojhkar hamla, das tareekon se |
| Observe | Observable banaya gaya, taaki koi bhi poochh sake ki Tuesday ko kya hua aur use jawaab mile |
| Ship | Asli logon tak pahunchaya gaya |
| Measure | Isme kitna cost aaya aur isne kitna bachaya |
| Iterate | Ek improvement, sabse kam score wali row par |
| Defend | Woh stage jisme woh ab thi |

Inmein se koi station alag safar nahi tha. Saath milkar yeh ek safar tha. Is safar ka aakhri test yeh nahi tha ki woh kuch bana sakti hai. Test yeh tha ki jo usne banaya, use woh samjha sakti hai, aur uske peeche khadi ho sakti hai.

## Kya toota

Anaya ne kaha ki woh sabse zaroori hisse se shuru karegi. Woh hissa tha jo galat hua tha. Portfolio (apne kaam ka showcase) par tab zyada bharosa hota hai jab uska maalik bata sake ki kya toota.

Iska tool hai *findings document*. Ise mechanic ke repair log jaisa sochiye. Yeh ek saada record hai ki kya fail hua. Isme saboot hota hai, root cause (kharabi ki asli wajah), fix, aur jaan-boojhkar kya unsolved chhoda gaya. Yeh brochure ka ulta hai.

Uski table mein har failure nahi tha. Woh darjanon the. Usmein *failure classes* thi. Class kharabi ki ek kisam hai, jaise machine mein ek tarah ki kharabi. Yeh kisi ek kharabi ka instance nahi hai. Isi se das tests ka matlab banta hai, das kahaniyon ka nahi. Table ko row ke hisaab se padhiye. Har row mein class hai, kya hua, ab use kya rokta hai, aur kya bacha hai.

Table: Guard mein failure classes
| Failure class | Kya hua | Ab use kya rokta hai | Kya bacha hai |
| --- | --- | --- | --- |
| Ek sawaal jiska jawaab nahi | Search ne sabse paas wala card aise de diya jaise woh saboot ho | Evidence zaroori; saaf "mujhe nahi pata" aur kisi insaan tak ka raasta | Aise sawaal jo answerable lagte hain |
| Ek poisoned document | Ek message ne finder ko kaha ki customer database print kar do | Finder ke paas koi tool nahi; uska output ek fixed form se check hota hai | Aise attacks jinke baare mein kisi ne socha nahi |
| Ek purani permission ya version | Chatbot ne pichhle saal ki late fee batayi | Search se pehle version aur audience filters | Galat bhari hui ek label |
| Ek unauthorised request | Ek customer ne kisi aur ka order maanga | Customer session se liya jaata hai, model se nahi | Ek churaya hua session |
| Mixed-language input | "ji" wale naam, Devanagari digits, bolkar likhe numbers | Worked examples, number tidying, 231 rows | Paanch languages jo cover nahi hain |
| Kharab scans aur sound | Letter O ko zero padh liya; ek transcription error | Look-alike correction; poori image par fallback | Bahut kharab photograph |
| Ek model badal gaya | Provider ne ek model retire kar diya; ek naya phone format aaya | Pinned versions; gate dobara chalna; safe mode | Provider ka chupchaap badlaav |
| Traffic spike | Festival volume normal ka 10 guna | Careful judge ke liye queue; safe mode | Normal ka 20 guna spike |
| Ek dependency badli | Ek field ka naam badla aur do ghante tak har order number hide hota raha | Toote hue contracts pakdo aur ruk jao | Jo hume pata hi nahi |
| Ek achhe iraade wala edit | Friday raat ek instruction narm kar di gayi | Release gate | Gap wala gate |

Partner ke technical lead ne sabse pehle bola. Usne dekha ki Anaya ne failures aur fixes ek hi table mein rakhe hain. Anaya ne kaha ki yehi akela imaandaar tareeka hai. Usne kaha ki zyadatar log use doosri wali table dete hain.

## Kisne use kiya

Beech ke hisse ke liye Anaya ne kuch hoshiyaar taiyaar nahi kiya tha. Use lagta tha ki saboot khud bol dega.

Jo product bahar gaya, woh developer kit tha. Team ne 20 November ko ise offer karne par haami bhari thi. Isme ek chhoti library (ready-made code) thi aur ek demo page. Page par developer ek message paste karta hai aur dekhta hai ki guard use kaise saaf karta hai.

Aise kit ko *SDK* kehte hain. Ise doosre builder ko diye jaane wale toolbox jaisa sochiye. Isse doosri team yeh feature apne product mein jod sakti hai, bina khud banaye. Uska kit ek sthir web address par tha, ek aisi machine par jo uski nahi thi. Saath mein monitoring thi (kaisa chal raha hai, us par nazar), privacy notice thi aur problem report karne ka button tha.

Live jaane se pehle Imran ne woh kiya jiski Anaya ne zid ki thi. Usne ek harmless badlaav release kiya. Phir use rollback kiya (purana version wapas rakha) aur stopwatch se time kiya. Isme 4 minute 10 second lage. Anaya ne room ko bataya ki jis rollback ko kabhi try nahi kiya gaya, woh sirf ek plan hai.

Chaar companies ke saat developers ne kit use kiya tha. Paanch ko Anaya ne khud baith kar dekha tha. Teen ne ise ek ghante ke andar chalu kar liya. Ek sign-in screen par ruk gaya. Usne likha "main yahin se chala jaata". Anaya ne woh note deewar par laga diya tha.

Pichhle chaar hafton se Pune ki support team har chat par guard chala rahi thi. Lakshmi ka sweep (sample chats ki uski niyamit jaanch) 500 mein 8 se 11 ke beech tika raha tha.

Finance director ne kaha ki chaar companies ke saat developers zyada nahi hain. Anaya sahmat thi. Yeh ek shuruaat thi. Itna kehne ke liye kaafi tha ki asli logon ne ise use kiya. Yeh kehne ke liye kaafi nahi tha ki yeh bade size par bhi chalega.

## Use kya nahi pata

Ek naksha sochiye jisme kuch jagah khaali hain. Achha naksha banane wala un jagahon ko nishaan lagata hai. Anaya ne bhi yahi kiya.

Cost ke figures ek spreadsheet mein the, jo usne jaldi dikhayi. Usmein ek message saaf karne ka cost tha. Retries aur review time bhi ginte gaye the. Low, base aur high volume ke liye alag figure the. Sabse zyada par, yaani festival load ka 10 guna, margin tika raha. Usne check kiya tha.

Phir usne woh kiya jo shuru mein kaha tha ki woh karegi. Usne teen columns wali ek slide lagayi. Pehla column: jo pata hai. Doosra: jo abhi nahi pata. Teesra: aage woh kya karegi.

Table: Jo pata hai, jo nahi pata, aur aage kya
| Hume kya pata hai | Hume abhi kya nahi pata | Aage hum kya karenge |
| --- | --- | --- |
| Haath se mark ki hui 231 rows ki key par yeh 100 mein se 93 details dhoondh leta hai | Tamil, Bengali, Telugu, Marathi ya Gujarati mein yeh kaisa behave karta hai | Do aur languages, usi tareeke se naapi hui |
| 500 mein se 9 unhidden chhodta hai, jahan pehle 46 chhodta tha | Kya yeh do shehron ke bahar customers ki likhai par kaam karta hai | Pune ke bahar ka ek customer |
| Isme kitna cost aata hai | Ek leak se company ko asal mein kitna nuksaan hota hai | Lakshmi ke records se leak ke cost ka ek figure |

Anaya ko laga ki aaj ki yehi akeli slide thi jis par koi behes nahi karna chahega.

## Sabse mushkil sawaal

Bees minute ke point par Imran ne haath khole. Usne poocha ki room ko yeh kyun maanna chahiye ki guard Pune aur Nashik ki teams ke bahar kaam karta hai. Yeh un messages par chala jo company ne jama kiye the. Kit use karne wale log Anaya ke dost the. Woh khud ko dhokha kyun nahi de rahi?

Anaya ko isi sawaal ki ummeed thi. October se woh trains mein iska jawaab rehearse kar rahi thi. Usne kaha ki woh yeh claim nahi kar rahi ki yeh unke bahar kaam karta hai. Woh yeh keh rahi hai ki use pata hai ki woh yeh kaise pata karegi.

Teacher ki answer key ko sochiye. Woh test se pehle likhi jaati hai, taaki koi use jawaabon ke hisaab se mod na sake. Anaya ki answer key bhi results dekhne se pehle likhi gayi thi. Sweeps Lakshmi chalati thi, aur Lakshmi uske liye kaam nahi karti. Developers aise log the jinse woh kabhi mili nahi thi. Unmein se ek ne kaha tha ki woh chala jaata.

Guard kya dhoondhta hai, is baare mein usne jo kuch kaha, woh sab un messages par naapa gaya tha jo team ne khud likhe the. Woh test ke liye kisi asli customer ka message use nahi karegi. Uske jaanne ki limit yehi thi. Usne yeh zor se kaha, taaki koi us par dhakka maar sake.

Kisi ne kuch nahi kaha. Phir Meenakshi ki awaaz speaker se patli si aayi. Peeche ek khadakhad thi, shayad billi. Usne kaha ki yeh bahut achha jawaab tha. Woh chahti hai ki note kiya jaye ki usne koi madad nahi ki. Founders hans pade. Lakshmi nahi hansi, lekin usne kuch likha.

## Pack kis kaam ka hai

Baad mein corridor mein partner ke technical lead ne ek sawaal poochha. Woh khud Anaya ke claims check karne ke liye kya dekh sakta hai? Anaya ne ek hafta isi mein lagaya tha. Ise *evidence pack* kehte hain. Ise rasidon ke dabbe jaisa sochiye. Isme woh sab hota hai jisse koi aur check kar sake, sirf bharosa na kare.

Dabbe mein repository thi (woh online folder jo har badlaav yaad rakhta hai), specification, answer key aur uski history, aur gate ke results. Risk register, findings, dashboard aur cost model bhi the. Aur decision log (faislon ki diary) bhi tha, jo 14 March ki raat shuru hua tha. Uski pehli line ab bhi sabse upar thi: jab tak koi aur check na kar sake, kuch bhi count nahi karta.

Anaya ne kaha ki aap tab done hain jab koi bhi aapka kaam dobara chalaye aur wahi numbers paaye. Usne dheere se sar hilaya. Usne kaha ki woh answer key dekhna chahega. Anaya muskuraayi. Is request ka use nau mahine se intezaar tha.

## March wala page

Us raat Anaya ne 14 March ke scores wala page kholkar dekha. Ise purane school report card jaisa sochiye. Teen number ab bhi uski likhai mein the. Problems dhoondhne ke liye 2. Kaunsi solve karni hai yeh chunne ke liye 1. Technology samajhne ke liye 1 se neeche ka ek kata hua figure.

Usne saare saat areas ko usi scale par phir se score kiya. Har score ke baju mein usne saboot ki ek line likhi. Yeh uska apna rule tha: jab tak koi aur check na kar sake, kuch bhi count nahi karta.

Table: Saat areas, dobara score kiye hue
| Area | Score | Saboot jo koi aur check kar sake |
| --- | --- | --- |
| Asli problems dhoondhna | 3 | Paanch interviews, 400 mein 37 ka count, aur Lakshmi ke chalaye mahine ke sweeps |
| Kaunsi problems solve karni hain yeh chunna | 2 | Won't list, aur saboot ke saath likha hua ek palatna |
| Technology samajhna | 3 | Findings document, uski failure classes aur jo bacha hai uske saath |
| Ek decision ko aisi cheez banana jo doosre bana saken | 3 | Ek specification jiske numbers Imran ke gate ne test kiye |
| Results naapna | 3 | 231 rows ki answer key, apni history ke saath |
| Apna kharcha khud nikaalna | 2 | Cost model, aur ek aise customer ki price jisne abhi sign nahi kiya tha |
| Logon ko saath chalana | 2 | Lakshmi ke sweeps aur Farah ki team, lekin company ke bahar koi nahi |

Technology wala score sabse zyada badla tha, 1 se neeche se 3 tak. Jis document ka woh naam le sakti thi, woh table mein tha. Do 2 wahan the jahan uske paas dikhane ko sabse kam tha.

## Saar

Khulne se pehle ke pul ko sochiye. Engineer use jaanchte hain aur us par bojh daalte hain. Phir log us par chalte hain. Ek system bhi isi tarah defend karne ke laayak hota hai. Woh aisi jagah chalta hai jo banane wale ki machine nahi hai. Koi bhi tests dobara chalakar wahi numbers pa sakta hai. Use kai tareekon se jaan-boojhkar toda gaya hai, aur har fix ke before-and-after figures hain. Uske safeguards par hamla ho chuka hai. Uska rollback time ho chuka hai. Asli logon ne use use kiya hai.

- Wahan tak le jaane wale gyarah stages hain: discover, define, design, build, evaluate, break, observe, ship, measure, iterate aur defend.
- Findings document failures ko class ke hisaab se likhta hai, saboot, fix aur jo bacha hai uske saath. Yeh demo se zyada convince karta hai.
- Jo pata hai, jo abhi nahi pata, aur aage kya karenge, iska saada bayaan sabse mushkil sawaal ka jawaab confidence se behtar deta hai.
- Evidence pack ek claim ko aisi cheez bana deta hai jise doosra insaan check kar sake.

Jo product ship ho gaya, use apna kharcha khud nikaalna hota hai. Agla chapter dekhta hai ki paisa kaun deta hai, aur kitna.
