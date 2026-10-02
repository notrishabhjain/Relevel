---
title: Poori Cheez Ko Ship Karna
summary: December mein, Anaya un logon ke saamne khadi hoti hai jinhone idea par sandeh kiya tha aur batati hai ki usne kya banaya, kya toota, kisne istemaal kiya, kitna kharcha aaya, aur use kya nahi pata. Jin gyarah charno ko usne follow kiya woh woh saal hai jo usne abhi jiya hai, naam ke saath.
course: ch21cap b8
terms:
  - SDK | software development kit: ek chhoti library aur ek demo jise koi doosra developer apne product mein jod sakta hai bina khud woh feature banaye | developer kit
  - findings document | kya toota, saboot, mool karan, ilaaj, aur jaan-boojh kar kya nahi suljhaya gaya, uska ek kachcha, tathyatmak record; brochure ka ulta | findings documents
  - failure class | ek kism ki failure, ek hi ghatna nahi; yahi das tests ko das kisson ki jagah arthpurn banata hai | failure classes
  - evidence pack | woh cheezein ka set jo kisi doosre ko aapke daavon par bharosa karne ki jagah unhe jaanchne deta hai | 
---

December ke doosre Friday ko, doosri manzil ke bade kamre mein, Anaya Deshmukh ek clicker lekar khadi hui jiski use zaroorat nahi thi, aur boli, "Main aapko bataungi ki mujhe kya lagta hai ki mujhe pata hai, aur phir main aapko bataungi ki nahi pata."

Mez par nau log the. Dono founders. Lakshmi, paani ke glass ke saath. Finance director, fountain pen ke saath. Farah aur uske do agents. Lending partners mein se ek ka technical lead, jo yeh dekhne aaya tha ki cheez asli hai ya nahi. Imran, kone mein, haath baandhe, jiska kaam, pehle se tay samjhaute ke tahat, kamre ka sabse mushkil insaan banna tha. Aur mez ke beech speakerphone par, Anaya ke anurodh par laaya gaya, Bengaluru ki ek retired teacher aur ek billi.

Uske paas talk ke do version the. Ek paanch minute ka, un logon ke liye jo faisla karenge. Ek bees minute ka, un logon ke liye jo sandeh karenge. Woh pehla degi aur phir, agar ijaazat mili, doosra.

## Gyarah charan

Jo cheez usne banayi thi uski ek shape thi jo usne tab tak nahi dekhi thi jab tak usne use bayaan nahi kiya, aur woh saal ki shape hi nikli.

Usne ek problem *dhoondhi* thi un users ke saath jin tak woh pahunch sakti thi, paanch interviews aur ek ginti. Usne use *paribhashit* kiya tha, ek specification ke saath jiske numbers test kiye ja sakte the. Usne product aur system ko ek saath *design* kiya tha, taaki har ek doosre ko sankra kare. Usne ek patla slice *banaya* tha jo shuru se ant tak kaam karta tha, aur threat model uske saath likha tha, baad mein nahi. Usne ise *aanka* tha, ek answer key ke saath jisme ab do sau ikatees rows thin. Usne ise das tareeko se jaan-boojh kar *toda* tha. Usne ise *dekhne yogya* banaya tha, taaki koi bhi poochh sake ki ek Tuesday ko kya hua aur use bataya jaye. Usne ise asli logon ko *ship* kiya tha. Usne *naapa* tha ki ismein kitna kharcha aaya aur kya bacha. Usne ek baar, sabse kam score karne wali row ke khilaaf, *iterate* kiya tha. Aur ab woh *defend* kar rahi thi.

Inme se koi bhi alag project nahi tha. Milakar woh ek yatra thi, aur iski antim jaanch, us document ne kaha tha jis par usne kaam kiya tha, yeh nahi tha ki kya woh kuch bana sakti hai balki yeh ki kya woh samjha aur bachaav kar sakti hai jo usne banaya.

## Kya toota

"Main sabse maayne rakhne wale hisse se shuru karungi," usne kamre se kaha. "Main shuru karungi jo galat gaya."

Ek portfolio zyada vishwasniya hota hai jab uska malik bata sake ki kya toota. *Findings document* uska roop hai: kya fail hua, saboot, mool karan, ilaaj, aur jaan-boojh kar kya nahi suljhaya gaya, uska ek kachcha, tathyatmak record. Yeh brochure ka ulta hai. Usne table screen par rakhi. Usme failures nahi thi, jinki darjanon thin, balki unki *classes*. Ek class ek kism ki failure hai, ek ghatna nahi, aur yahi das tests ko das kisson ki jagah arthpurn banata hai.

| Failure class | Kya hua | Ab ise kya rokta hai | Kya bacha |
| --- | --- | --- | --- |
| Ek sawaal jiska jawaab nahi | Search ne sabse qareebi card ko saboot ki tarah lautaya | Saboot zaroori; saaf "mujhe nahi pata" aur ek insaan tak ka raasta | Aise sawaal jo jawaab dene layak dikhte hain |
| Ek zehreela document | Ek message ne finder ko customer database chhapne ko kaha | Finder ke paas koi tool nahi; output ek tay form se jaancha jaata hai | Aise hamle jinke baare mein kisi ne socha nahi |
| Ek purani permission ya version | Chatbot ne pichhle saal ki late fee batayi | Search se pehle version aur audience filters | Galat likha hua ek label |
| Ek anadhikrit request | Ek customer ne doosre ka order manga | Customer session se liya jaata hai, model se nahi | Ek chori hua session |
| Mishrit-bhasha input | *Ji* wale naam, Devanagari ank, bole gaye numbers | Worked examples, number ki safai, 231 rows | Paanch bhashayein cover nahi |
| Kharab scans aur awaaz | Zero ki jagah bada O; ek transcription galti | Look-alike sudhaar; poori-image fallback | Ek bahut kharab photograph |
| Ek model badla gaya | Provider ne model retire kiya; ek naya phone format aaya | Pinned versions; gate dobara chalana; safe mode | Provider ka ek chupchaap badlaav |
| Traffic mein ek ubaal | Tyohar ka volume aam se das guna | Saavdhaan judge ke liye queue; safe mode | Aam se bees guna ubaal |
| Ek dependency badli | Ek field ka naam badla; do ghante tak har order number chhupa | Toote contracts pakdo aur ruko | Anjaane anjaana |
| Ek achhe irade ka edit | Ek nirdesh Friday raat narm kiya gaya | Release gate | Ek gap wala gate |

Partner ka technical lead pehla tha jo bola. "Aapne failures ko usi table mein ilaaj ke saath likha hai," usne kaha.

"Yahi akela imaandaar tareeka hai."

"Zyadatar log mujhe doosri table dete hain."

## Kisne istemaal kiya

Talk ke beech ke liye usne kuch chaalak taiyaar nahi kiya tha, kyunki use shak tha ki saboot khud sab kuch kah dega.

Jo product bahar gaya tha woh developer kit tha: ek chhoti library, aur ek demo page jahan ek developer ek message paste karta hai aur guard ko use saaf karte dekhta hai. Aisa developer kit, ek *SDK*, doosri team ko feature apne product mein jodne deta hai bina khud banaye. Woh ek sthir address par tha, aisi machine par jo uski nahi thi. Usme monitoring tha aur ek privacy notice aur samasyaon ki report karne ka ek button. Aur live jaane se pehle, Imran ne woh kiya tha jis par woh adi thi: ek harmless badlaav deploy kiya, use rollback kiya, aur ek stopwatch se samay naapa. Chaar minute das second. Ek rollback jo aapne kabhi aazmaya nahi, usne unhe bataya, sirf ek plan hai.

Chaar companies ke saat developers ne ise istemaal kiya tha, aur usne unmein se paanch ko saamne dekha tha. Teen ne ise ek ghante ke andar chala diya tha. Ek sign-in screen par ruk gaya tha aur usne likha tha *Main yahin chhod deta*, jise usne deewar par laga diya tha. Pichhle chaar hafton mein Pune ki support team ne ise har chat par chalaya tha, aur Lakshmi ka sweep paanch sau mein aath aur gyarah ke beech tika raha tha.

"Chaar companies ke saat developers," finance director ne kaha. "Zyada nahi."

"Nahi. Yeh ek shuruaat hai. Itna kehne ke liye kaafi ki maine asli logon ko ise istemaal karte dekha hai. Yeh kehne ke liye kaafi nahi ki yeh scale karega."

## Kharcha, aur jo use nahi pata

Numbers ek spreadsheet mein the aur usne use tezi se dikhaya. Saaf kiye gaye prati message ka kharcha, retries aur review samay ginke, ek kam, ek aadhar aur ek ucch volume par. Sabse unche par, tyohar ke bhaar ka das guna, margin tika raha. Usne jaancha tha.

Phir usne woh kiya jo usne shuru mein kamre se kaha tha ki woh karegi. Usne teen column wali ek slide lagayi. *Hum kya jaante hain. Hum abhi kya nahi jaante. Hum aage kya karenge.*

*Hum jaante hain ki yeh 231 rows ki haath se marked key par sau mein tirannave details dhoondhta hai. Hum jaante hain ki yeh paanch sau mein ab nau chhupata hai jahan pehle chhiyaalees chhupata tha. Hum jaante hain ki yeh kitne mein padta hai.*

*Hum nahi jaante ki yeh Tamil, Bengali, Telugu, Marathi ya Gujarati mein kaise behave karta hai. Hum nahi jaante ki yeh do shehron ke bahar customers ki likhai par kaam karta hai ya nahi. Hum nahi jaante ki ek leak ka humein asal mein kitna kharcha padta hai.*

*Aage: do aur bhashayein, usi shartein par naapi gayi. Pune ke bahar ek customer. Ek leak ki keemat ka number, Lakshmi ke records se.*

Use laga, yeh din ki akeli slide thi jis par koi behes nahi karna chahega.

## Sabse mushkil sawaal

Bees minute ke bindu par, Imran ne haath khole.

"Hum kyun maane ki yeh Pune aur Nashik teams ke bahar kaam karta hai?" usne kaha. "Aapne mujhe bataya ki yeh un messages par kaam karta hai jo humne ikatthe kiye. Jo log kit istemaal karte hain woh aapke dost hain. Aap khud ko bewakoof kyun nahi bana rahi?"

Yeh woh sawaal tha jiski use ummeed thi, aur woh October se ise trains mein dohra rahi thi.

"Main yeh nahi keh rahi ki yeh unke bahar kaam karta hai," usne kaha. "Main keh rahi hoon ki mujhe pata hai main kaise pata karungi. Answer key natijon ko dekhne se pehle likhi gayi thi. Sweeps Lakshmi ne chalaye, jo mere liye kaam nahi karti. Developers aise log the jinse main kabhi nahi mili thi, aur unme se ek ne kaha ki woh chhod deta. Aur yeh jo kuch maine kaha hai ki yeh kya dhoondhta hai woh un messages par naapa gaya hai jo humne khud likhe, kyunki main kisi asli customer ka message test ke liye istemaal nahi karungi. Meri jaankari ki yahi seema hai. Maine ise zor se kaha hai taaki koi ispar dabaav daal sake."

Ek pal kisi ne kuch nahi kaha. Phir Meenakshi ki awaaz speaker se aayi, patli, peeche ek khadkhadahat ke saath jo shaayad billi thi.

"Yeh bahut achha jawaab hai," unhone kaha, "aur main chahti hoon ki note kiya jaye ki maine madad nahi ki."

Founders hans pade. Lakshmi nahi hansi, lekin usne kuch likha.

## Pack kis liye hai

Baad mein, corridor mein, technical lead ne poochha ki woh khud uske daavon ko jaanchne ke liye kya dekh sakta hai.

Usne ek hafta ise ikattha karne mein bitaya tha. *Evidence pack* un cheezon ka set hai jo kisi doosre ko bharosa karne ki jagah jaanchne deta hai: repository, specification, answer key aur uski history, gate ke nateeje, risk register, findings, dashboard, cost model, aur decision log jo March ki chaudah tareekh ki raat shuru hua tha, uski pehli line sabse upar likhi hui. *Kuch bhi tab tak nahi ginta jab tak koi doosra use jaanch na sake.*

"Aap tab poore hote hain jab koi bhi ise dobara chala sake aur wahi numbers paaye," usne kaha. "Poori jaanch yahi hai."

Usne dheere sir hilaya. "Main answer key dekhna chahunga."

Woh muskurayi. Yeh ek anurodh tha jiske sunne ki woh nau mahine se ummeed kar rahi thi.

## Saath le jaane layak baatein

Ek system ka bachaav karne ke liye taiyaar hone ka matlab hai ki woh builder ki machine ke alawa kahin chalta hai. Koi bhi tests dobara chala sakta hai aur wahi numbers paa sakta hai. Use kai tareeko se jaan-boojh kar toda gaya hai, aur uske sudhaaron ke pehle-baad figures hain. Uski suraksha par hamla kiya gaya hai, uska rollback naapa gaya hai, aur asli logon ne use istemaal kiya hai. Jin gyarah charno se woh wahan pahunchta hai woh hain khojna, paribhashit karna, design karna, banana, aankna, todna, dekhne yogya banana, ship karna, naapna, iterate karna aur defend karna. Findings document failures ko class ke hisaab se saboot, ilaaj aur jo bacha uske saath record karta hai, jo ek demonstration se zyada kaayal karne wala hai. Ek saaf bayaan ki aap kya jaante hain, abhi kya nahi jaante aur aage kya karenge, sabse mushkil sawaal ka jawaab vishwas se behtar deta hai. Aur evidence pack woh cheez hai jo ek daave ko aisi cheez mein badalta hai jise doosra insaan jaanch sake.
