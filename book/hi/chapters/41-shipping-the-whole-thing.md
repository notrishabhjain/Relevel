---
title: Poori Cheez Ko Ship Karna
summary: December mein Anaya un logon ke saamne khadi hoti hai jinhone idea par shak kiya tha aur batati hai ki usne kya banaya, kya toota, kisne istemaal kiya, kitna kharcha hua aur use kya nahi pata. Jin gyarah stages ka usne paalan kiya woh us saal ka naam hain jo woh jee chuki hai. Chapter SDKs, findings documents, failure classes aur evidence packs samjhata hai.
course: ch21cap b8
goals:
  - discovery se defence tak project ke gyarah stages ke naam batana
  - failure class ke hisaab se saboot, fix aur jo bacha uske saath ek findings document likhna
  - batana ki developer kit kya hai, aur use banane ke alawa ship karne ke liye kya chahiye
  - batana ki kya jaana gaya hai, kya nahi jaana gaya aur aage kya kiya jaayega, aur ek evidence pack banana
terms:
  - SDK | software development kit: ek chhoti library aur ek demo jise koi doosra developer apne product mein jod sakta hai bina khud woh feature banaye | developer kit
  - findings document | kya toota, saboot, mool karan, ilaaj, aur jaan-boojh kar kya nahi suljhaya gaya, uska ek kachcha, tathyatmak record; brochure ka ulta | findings documents
  - failure class | ek kism ki failure, ek hi ghatna nahi; yahi das tests ko das kisson ki jagah arthpurn banata hai | failure classes
  - evidence pack | woh cheezein ka set jo kisi doosre ko aapke daavon par bharosa karne ki jagah unhe jaanchne deta hai | 
---

December ke doosre Friday ko, doosri manzil ke bade kamre mein, Anaya nau logon ke saamne ek clicker lekar khadi hui jiski use zaroorat nahi thi aur boli: woh bataegi ki use kya lagta hai ki use pata hai, aur phir yeh ki kya nahi pata. Mez par dono founders the, Lakshmi Iyer, finance director, Farah Sheikh aur uske do agents, aur ek lending partner ka technical lead jo yeh dekhne aaya tha ki yeh asli hai ya nahi. Kone mein, haath baandhe, Imran Qureshi tha, jiska kaam, pehle se tay hui baat ke mutabik, kamre ka sabse kathor insaan banna tha. Speakerphone par, Anaya ke kehne par laaye gaye, Bengaluru ki ek retired teacher aur ek billi thi.

Usne bhaashan ke do version tayyar kiye the, paanch minute ka un logon ke liye jo faisla karenge, aur bees minute ka un logon ke liye jo shak karenge. Woh pehla degi aur phir, agar use ijaazat mili, doosra.

## Case: defence

Bhaashan ek upyogi adhyayan hai kyunki ismein saal ne jo kuch banaya woh sab un logon ke saamne rakhna pada jinke paas asahmat hone ki wajah thi. Yeh chapter use anusaran karta hai, kyunki jin stages ka Anaya zikr karti hai woh poore project ka dhaancha hain.

## Gyarah stages

Anaya ne jo banaya tha uski ek aisi shakl thi jise usne tab tak nahi dekha tha jab tak use bayaan nahi kiya, aur woh shakl saal ki shakl nikli.

Table: Gyarah stages
| Stage | Guard ke liye iska matlab |
| --- | --- |
| Discover | Ek samasya jo un users ke saath mili jinse woh mil sakti thi: paanch baatcheetein aur ek ginti |
| Define | Ek specification jiske numbers test ho sakte the |
| Design | Product aur system ek saath design kiye gaye, taaki har ek doosre ko seemit kare |
| Build | Ek patli slice jo shuru se ant tak chali, threat model ke saath jo saath mein likha gaya, baad mein nahi |
| Evaluate | Ek answer key jisme ab do sau ikatees rows thi |
| Break | Product par jaanboojh kar das tareekon se hamla kiya gaya |
| Observe | Dekhne laayak banaya gaya, taaki koi poochh sake ki ek Tuesday ko kya hua aur use bataya jaaye |
| Ship | Asli logon tak pahunchaya gaya |
| Measure | Isme kya kharcha hua aur kya bacha |
| Iterate | Ek sudhaar, sabse kam score wali row par |
| Defend | Woh stage jisme woh ab thi |

In mein se koi bhi alag project nahi tha. Milkar ye ek yatra thi, aur uska antim test yeh nahi tha ki woh kuch bana sakti hai ya nahi balki yeh ki woh jo banaya hai use samjha aur bacha sakti hai ya nahi.

## Kya toota

Anaya ne kamre ko bataya ki woh sabse maayne rakhne wale hisse se shuru karegi, jo yeh tha ki kya galat hua. Ek portfolio tab zyada vishwaasneeya hota hai jab uska maalik bata sake ki kya toota. Isi ka roop ek *findings document* hai: kya fail hua, saboot, mool kaaran, fix aur jo jaanboojh kar hal nahi kiya gaya, ek kaccha, tathyatmak record. Yeh brochure ka ulta hai.

Uski table mein failures nahi the, jinme darjanon thi, balki unki *failure classes*. Class ek tarah ki failure hai, ek ghatna nahi, aur yahi das tests ko das kisson ke bajaye maayne dene wala banati hai.

Table: Guard ki failure classes
| Failure class | Kya hua | Ab kya rokta hai | Kya bacha |
| --- | --- | --- | --- |
| Aisa sawaal jiska jawaab nahi | Search ne sabse paas ka card saboot ki tarah lautaya | Saboot zaroori; saaf "mujhe nahi pata" aur ek insaan ka raasta | Aise sawaal jo jawaab dene laayak dikhte hain |
| Ek zehreela document | Ek message ne finder ko customer database chhapne ko kaha | Finder ke paas koi tool nahi; output ek tay form se jaancha jaata hai | Aise hamle jinke baare mein kisi ne nahi socha |
| Ek puraani permission ya version | Chatbot ne pichhle saal ki late fee quote ki | Search se pehle version aur audience ke filters | Galat darj kiya label |
| Ek bina-adhikaar ki request | Ek customer ne doosre ka order maanga | Customer session se liya jaata hai, model se nahi | Ek chori hua session |
| Mishrit-bhasha ka input | "ji" wale naam, Devanagari ank, bole gaye numbers | Worked examples, number tidying, 231 rows | Paanch bhashayein jo cover nahi |
| Kharab scan aur awaaz | Zero ki jagah O; transcription ki galti | Milte-julte aksharon ka sudhaar; poori-image fallback | Bahut kharab photograph |
| Ek model badal gaya | Provider ne ek model retire kiya; ek naya phone format aaya | Pinned versions; gate dobara chalaya; safe mode | Provider ka ek khaamosh badlaav |
| Traffic ka uchhaal | Tyohaar ka volume saamaanya se das guna | Saavdhaan judge ke liye queue; safe mode | Bees guna ka uchhaal |
| Ek dependency badli | Ek field ka naam badla aur har order number do ghante chhupaya gaya | Toote contracts pehchaano aur ruko | Anjaani baatein |
| Ek achhi neeyat ka edit | Ek Friday raat instruction naram kiya gaya | Release gate | Gate mein ek kami |

Partner ke technical lead ne sabse pehle kaha. Usne dekha ki usne failures ko fixes wali hi table mein likha hai. Anaya ne kaha ki yeh aisa karne ka akela imaandaar tareeka hai. Usne kaha ki zyadatar log use doosri table dete hain.

## Kisne istemaal kiya

Bhaashan ke beech ke liye Anaya ne kuch chaturai se tayyar nahi kiya tha, kyunki use shak tha ki saboot hi kaam karega. Jo product bahar gaya woh developer kit tha: ek chhoti library aur ek demonstration page jahan ek developer ek message paste karta hai aur guard ko use saaf karte dekhta hai. Is tarah ka kit, ek *SDK*, doosri team ko bina khud banaye feature apne product mein jodne deta hai. Woh ek sthir pate par tha, aise machine par jo uski nahi thi, monitoring, ek privacy notice aur samasya report karne ke button ke saath.

Live jaane se pehle Imran ne woh kiya tha jiska Anaya ne zor diya tha. Usne ek nirdosh badlaav deploy kiya, use rolled back kiya aur stopwatch se samay liya: chaar minute das second. Jis rollback ko kabhi aazmaya nahi gaya woh sirf ek yojna hai, usne kamre se kaha.

Saat developers ne, chaar companies se, kit istemaal kiya tha, aur Anaya ne unme se paanch ko saamne dekha tha. Teen ne ise ek ghante ke andar chala liya. Ek sign-in screen par ruk gaya aur usne likha "Main yahin chhod deta", jise usne deewar par laga diya tha. Pichhle chaar hafton mein Pune ki support team ne guard har chat par chalaya tha, aur Lakshmi ka sweep paanch sau mein aath se gyarah ke beech tika tha. Finance director ne dhyaan dilaya ki chaar companies ke saat developers bahut nahi hain. Anaya ne sahmati di. Yeh ek shuruaat thi, itna kehne ke liye kaafi ki usne asli logon ko ise istemaal karte dekha hai, aur yeh kehne ke liye kaafi nahi ki yeh scale hoga.

## Use kya nahi pata

Kharcha ke figure ek spreadsheet mein the, jo usne jaldi dikhayi: saaf kiye gaye message ka kharcha, retries aur review samay ginkar, ek kam, ek aadhaar aur ek zyada volume par. Sabse zyada par, tyohaar ke bhaar ke das guna par, margin tika raha. Usne jaanch kiya tha.

Phir usne woh kiya jo usne shuru mein kaha tha ki woh karegi. Usne teen column wali ek slide rakhi.

Table: Kya jaana gaya hai, kya nahi, aur aage kya
| Hum kya jaante hain | Hum abhi kya nahi jaante | Hum aage kya karenge |
| --- | --- | --- |
| Yeh haath se chinhit 231 rows ki key par details mein se sau mein tirannave dhoondhta hai | Tamil, Bengali, Telugu, Marathi ya Gujarati mein yeh kaise behave karta hai | Do aur bhashayein, usi tareeke se naapi hui |
| Yeh paanch sau mein se nau ko unhidden chhodta hai jahan pehle chhiyaalis chhodta tha | Kya yeh do shehron ke bahar ke customers ki likhawat par kaam karta hai | Pune ke bahar ka ek customer |
| Ise chalane ka kharcha | Ek leak asal mein company ko kitne ka padta hai | Ek leak ke kharche ka figure, Lakshmi ke records se |

Anaya ne socha ki yeh us din ki akeli slide thi jiske saath koi behas nahi karna chahega.

## Sabse kathor sawaal

Bees minute par Imran ne apne haath khole. Kamre ko yeh kyun maanna chahiye ki guard Pune aur Nashik ki teams ke bahar kaam karta hai, usne poochha. Woh un messages par kaam karta tha jo company ne ikatthe kiye the, aur kit istemaal karne wale uske dost the. Woh khud ko dhokha kyun nahi de rahi?

Yeh woh sawaal tha jiski use ummeed thi, aur woh October se trains mein is jawaab ka abhyaas kar rahi thi. Usne kaha ki woh yeh nahi keh rahi ki yeh unke bahar kaam karta hai. Woh keh rahi hai ki use pata hai ki woh yeh kaise pata lagaayegi. Answer key results dekhne se pehle likhi gayi thi. Sweeps Lakshmi ne chalaye the, jo uske liye kaam nahi karti. Developers aise log the jinse woh kabhi nahi mili thi, aur unme se ek ne kaha tha ki woh chhod deta. Guard jo kuch dhoondhta hai uske baare mein jo kuch usne kaha tha woh un messages par naapa gaya tha jo team ne khud likhe the, kyunki woh test ke liye kisi asli customer ke message ka istemaal nahi karegi. Yahi uske gyaan ki seema thi, aur usne ise zor se kaha tha taaki koi us par dabaav daal sake.

Kisi ne kuch nahi kaha. Phir speaker se Meenakshi ki aawaaz patli si aayi, uske peechhe ek khadkhadaahat ke saath jo shaayad billi thi. Yeh bahut achha jawaab tha, usne kaha, aur woh chahegi ki likha jaaye ki usne madad nahi ki. Founders hanse. Lakshmi nahi hansi, par usne kuch likha.

## Pack kis kaam ka hai

Baad mein galiyare mein partner ke technical lead ne poochha ki woh khud uske dawon ko jaanchne ke liye kya dekh sakta hai. Anaya ne ek hafta ise ikattha karne mein bitaya tha. *Evidence pack* un cheezon ka set hai jo kisi aur ko sirf bharosa nahi balki jaanch karne deti hain. Usme repository, specification, answer key aur uska itihaas, gate ke nateeje, risk register, findings, dashboard aur cost model tha. Usme woh decision log bhi tha jo chaudah March ki raat shuru hua tha, uski pehli line ab bhi upar likhi thi: jab tak koi aur jaanch na sake kuch ginti mein nahi aata.

Usne kaha ki koi tab poora hota hai jab koi bhi kaam dobara chalakar wahi numbers pa sake. Usne dhire se sir hilaya aur kaha ki woh answer key dekhna chahega. Woh muskuraayi. Yeh woh anurodh tha jiski use nau mahine se ummeed thi.

## Saaraansh

Ek system ka bachaav karne ke liye woh tab taiyaar hai jab woh kisi aisi jagah chalta ho jo banane wale ki machine nahi hai. Koi bhi tests dobara chalakar wahi numbers pa sake. Use kai tareekon se jaanboojh kar toda gaya ho, aur uske fixes ke pehle-baad ke figure hon. Uske safeguards par hamla kiya gaya ho, uska rollback naapa gaya ho, aur asli logon ne ise istemaal kiya ho.

- Wahan tak le jaane wale gyarah stage hain: discover, define, design, build, evaluate, break, observe, ship, measure, iterate aur defend.
- Findings document failures ko class ke hisaab se saboot, fix aur jo bacha uske saath darj karta hai, jo ek demonstration se zyada vishwaasneeya hai.
- Kya jaana gaya hai, kya abhi nahi jaana gaya aur aage kya kiya jaayega, iska saaf bayaan sabse kathor sawaal ka jawaab aatmavishwaas se behtar deta hai.
- Evidence pack woh cheez hai jo ek dawe ko aisi cheez banati hai jise doosra insaan jaanch sake.
