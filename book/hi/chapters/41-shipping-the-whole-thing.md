---
title: Poori Cheez Ship Karna
summary: December mein Anaya un logon ke saamne khadi hoti hai jinhone is idea par shak kiya tha, aur bataati hai ki usne kya banaya, kya toota, kisne use kiya, uska cost kya hai, aur use kya nahi pata. Jin gyarah stages ko usne follow kiya, woh wahi saal hai jo woh abhi jee kar aayi hai. Chapter mein SDK, findings document, failure class aur evidence pack aate hain.
course: ch21cap b8
goals:
  - ek project ke gyarah stages ke naam bata paana, discovery se defence tak
  - failure class ke hisaab se ek findings document likhna, jisme saboot, fix aur jo bacha hai woh ho
  - bata paana ki developer kit kya hota hai, aur use banane ke baad ship karne mein aur kya lagta hai
  - jo pata hai, jo nahi pata, aur aage kya karenge, yeh present karna, aur ek evidence pack taiyaar karna
terms:
  - SDK | software development kit: ek chhoti library aur ek demo, jise doosra developer apne product mein jod sakta hai bina yeh feature khud banaye | developer kit
  - findings document | kya toota, uska saboot, root cause, fix, aur jaan-boojhkar kya unsolved chhoda gaya, iska saada aur factual record; brochure ka ulta | findings documents
  - failure class | failure ki ek kisam, kisi ek failure ka instance nahi; isi se das tests ka matlab banta hai, das kahaniyon ka nahi | failure classes
  - evidence pack | woh set jisse koi aur aapke claims check kar sake, sirf bharosa na kare | 
---

December ke doosre Friday ko, doosri manzil ke bade room mein, Anaya nau logon ke saamne khadi hui. Haath mein ek clicker tha jiski use zaroorat nahi thi. Usne kaha ki pehle woh bataegi ki use kya lagta hai ki woh jaanti hai, aur phir yeh ki kya nahi jaanti.

Table par dono founders the, Lakshmi Iyer, finance director, Farah Sheikh aur uske do agents, aur ek lending partner ka technical lead, jo dekhne aaya tha ki cheez asli hai ya nahi. Kone mein, haath baandhe, Imran Qureshi baitha tha. Pehle se tay tha ki room mein sabse mushkil insaan woh banega. Anaya ke kehne par speakerphone par Bengaluru ki ek retired teacher aur ek billi bhi judi thi.

Anaya ne talk ke do versions taiyaar kiye the. Ek paanch minute ka, un logon ke liye jo decide karenge. Doosra bees minute ka, un logon ke liye jo shak karenge. Pehla woh degi, aur phir, agar izaazat mili, toh doosra.

## Case: defence

Is talk ko samajhna isliye kaam ka hai ki isne saal bhar ki sari kamayi un logon ke saamne rakh di jinke paas asahmat hone ki wajah thi. Yeh chapter usi talk ke saath chalta hai, kyunki Anaya jin stages ko batati hai, wahi poore project ka structure hain.

## Gyarah stages

Anaya ne jo banaya tha, uski ek shape thi jo use tab tak dikhi nahi thi jab tak usne use bayaan nahi kiya. Pata chala ki woh shape poore saal ki shape thi. Table mein gyarah stages hain, aur guard ke liye har ek ka kya matlab tha.

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

In stages mein se koi bhi alag project nahi tha. Saath milkar yeh ek safar the. Aur is safar ka aakhri test yeh nahi tha ki woh kuch bana sakti hai ya nahi. Test yeh tha ki jo usne banaya, use woh samjha aur defend kar sakti hai ya nahi.

## Kya toota

Anaya ne room ko bataya ki woh sabse zaroori hisse se shuru karegi, yaani jo galat hua tha. Portfolio tab zyada bharose ka lagta hai jab uska maalik bata sake ki kya toota.

Iska roop hai *findings document*. Yeh ek saada, factual record hai: kya fail hua, saboot kya hai, root cause kya tha, fix kya hua, aur jaan-boojhkar kya unsolved chhoda gaya. Yeh brochure ka ulta hai.

Uski table mein failures khud nahi the, kyunki woh darjanon the. Usmein unki *failure classes* thi. Class failure ki ek kisam hai, kisi ek instance ka nahi. Isi se das tests ka matlab banta hai, das kahaniyon ka nahi. Table ko row ke hisaab se padhiye: har class, kya hua, ab use kya rokta hai, aur kya bacha hai.

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

Partner ke technical lead ne sabse pehle bola. Usne dhyaan dilaya ki Anaya ne failures ko fixes ke saath ek hi table mein rakha hai. Anaya ne kaha ki yehi akela imaandaar tareeka hai. Usne kaha ki zyadatar log use doosri wali table dete hain.

## Kisne use kiya

Beech ke hisse ke liye Anaya ne kuch hoshiyaar taiyaar nahi kiya tha. Use shak tha ki saboot hi kaam kar dega.

Jo product bahar gaya tha, woh developer kit tha: ek chhoti library aur ek demo page, jahan developer ek message paste karta hai aur dekhta hai ki guard use kaise saaf karta hai. Aise kit ko *SDK* kehte hain. Isse doosri team yeh feature apne product mein bina khud banaye jod sakti hai. Uska kit ek stable address par tha, ek aisi machine par jo uski nahi thi, monitoring, privacy notice aur problem report karne ke button ke saath.

Live jaane se pehle Imran ne woh kiya tha jiski Anaya ne zid ki thi. Usne ek harmless badlaav deploy kiya, use rollback kiya, aur stopwatch se time kiya: 4 minute 10 second. Anaya ne room ko bataya ki jis rollback ko kabhi try nahi kiya gaya, woh sirf ek plan hai.

Chaar companies ke saat developers ne kit use kiya tha, aur paanch ko usne khud baith kar dekha tha. Teen ne ise ek ghante ke andar chalu kar liya. Ek sign-in screen par ruk gaya aur usne likha "main yahin se chala jaata", jise Anaya ne deewar par laga diya tha. Pichhle chaar hafton se Pune ki support team har chat par guard chala rahi thi, aur Lakshmi ka sweep 500 mein 8 se 11 ke beech tika raha tha.

Finance director ne kaha ki chaar companies ke saat developers zyada nahi hain. Anaya sahmat thi. Yeh ek shuruaat thi. Itna kehne ke liye kaafi tha ki usne asli logon ko ise use karte dekha hai, lekin itna kehne ke liye kaafi nahi tha ki yeh scale karega.

## Use kya nahi pata

Cost ke figures ek spreadsheet mein the, jo usne jaldi dikhayi. Usmein ek saaf hue message ka cost tha, retries aur review time ginkar, low, base aur high volume par. Sabse zyada par, yaani festival load ka 10 guna, margin tika raha. Usne check kiya tha.

Phir usne woh kiya jo usne shuru mein kaha tha ki woh karegi. Usne teen columns wali ek slide lagayi: jo pata hai, jo abhi nahi pata, aur aage woh kya karegi.

Table: Jo pata hai, jo nahi pata, aur aage kya
| Hume kya pata hai | Hume abhi kya nahi pata | Aage hum kya karenge |
| --- | --- | --- |
| Haath se mark ki hui 231 rows ki key par yeh 100 mein se 93 details dhoondh leta hai | Tamil, Bengali, Telugu, Marathi ya Gujarati mein yeh kaisa behave karta hai | Do aur languages, usi tareeke se naapi hui |
| 500 mein se 9 unhidden chhodta hai, jahan pehle 46 chhodta tha | Kya yeh do shehron ke bahar customers ki likhai par kaam karta hai | Pune ke bahar ka ek customer |
| Isme kitna cost aata hai | Ek leak se company ko asal mein kitna nuksaan hota hai | Lakshmi ke records se leak ke cost ka ek figure |

Anaya ko laga ki aaj ki yehi akeli slide thi jis par koi behes nahi karna chahega.

## Sabse mushkil sawaal

Bees minute ke point par Imran ne haath khole. Usne poocha, room ko yeh kyun maanna chahiye ki guard Pune aur Nashik ki teams ke bahar kaam karta hai? Yeh un messages par chala jo company ne jama kiye the, aur kit use karne wale log Anaya ke dost the. Woh khud ko dhokha kyun nahi de rahi?

Yeh wahi sawaal tha jiski use ummeed thi. October se woh trains mein iska jawaab rehearse kar rahi thi. Usne kaha ki woh yeh claim nahi kar rahi ki yeh unke bahar kaam karta hai. Woh yeh keh rahi hai ki use pata hai ki woh yeh kaise pata karegi.

Answer key results dekhne se pehle likhi gayi thi. Sweeps Lakshmi chalati thi, jo Anaya ke liye kaam nahi karti. Developers aise log the jinse woh kabhi mili nahi thi, aur unmein se ek ne kaha tha ki woh chala jaata. Guard kya dhoondhta hai, is baare mein usne jo kuch kaha, woh sab un messages par naapa gaya tha jo team ne khud likhe the, kyunki woh test ke liye kisi asli customer ka message use nahi karegi. Jitna woh jaanti thi, uski limit yehi thi, aur usne yeh zor se kaha taaki koi usse dhakka maar sake.

Kisi ne kuch nahi kaha. Phir Meenakshi ki awaaz speaker se patli si aayi, aur peeche ek khadakhad, jo shayad billi thi. Usne kaha ki yeh bahut achha jawaab tha, aur woh chahti hai ki note kiya jaye ki usne koi madad nahi ki. Founders hans pade. Lakshmi nahi hansi, lekin usne kuch likha.

## Pack kis kaam ka hai

Baad mein corridor mein partner ke technical lead ne poocha ki woh khud Anaya ke claims check karne ke liye kya dekh sakta hai. Anaya ne ek hafta isi mein lagaya tha. Ise *evidence pack* kehte hain: woh set jisse koi aur check kar sake, sirf bharosa na kare.

Usmein repository thi, specification, answer key aur uski history, gate ke results, risk register, findings, dashboard aur cost model. Usmein woh decision log bhi tha jo 14 March ki raat shuru hua tha, aur uski pehli line ab bhi sabse upar thi: jab tak koi aur check na kar sake, kuch bhi count nahi karta.

Anaya ne kaha ki aap tab done hain jab koi bhi aapka kaam dobara chalaye aur wahi numbers paaye. Usne dheere se sar hilaya aur kaha ki woh answer key dekhna chahega. Anaya muskuraayi. Yeh woh request thi jiska use nau mahine se intezaar tha.

## Saar

Ek system tab defend karne ke laayak hai jab woh kisi aisi jagah chalta ho jo banane wale ki machine nahi hai, aur koi bhi tests dobara chalakar wahi numbers pa sake. Use kai tareekon se jaan-boojhkar toda gaya ho, aur har fix ke before-and-after figures hon. Uske safeguards par hamla kiya gaya ho, uska rollback time kiya gaya ho, aur asli logon ne use use kiya ho.

- Wahan tak le jaane wale gyarah stages hain: discover, define, design, build, evaluate, break, observe, ship, measure, iterate aur defend.
- Findings document failures ko class ke hisaab se likhta hai, saboot, fix aur jo bacha hai uske saath. Yeh demo se zyada convince karta hai.
- Jo pata hai, jo abhi nahi pata, aur aage kya karenge, iska saada bayaan sabse mushkil sawaal ka jawaab confidence se behtar deta hai.
- Evidence pack woh cheez hai jo ek claim ko aisi cheez bana deta hai jise doosra insaan check kar sake.

Jo product ship ho gaya, use apna kharcha khud nikaalna hota hai. Agla chapter dekhta hai ki paisa kaun deta hai, aur kitna.
