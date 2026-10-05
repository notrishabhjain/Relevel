---
title: Aap Kya Bhej Sakte Hain
summary: Ab tak sab kuch yeh maan kar chala ki text vendor ko bheja ja sakta hai. Teen documents aur ek tay kram mein teen sawaal tay karte hain ki bheja ja sakta hai ya nahi, aur vendor ki terms of service mein woh baatein nikalti hain jo kisi ne padhi nahi thi. Chapter retention aur data residency samjhata hai.
course: ch165
goals:
  - vendor ko text bhejna theek hai ya nahi yeh tay karne ke liye teen sawaal kram se lagana
  - vendor ki asli terms mein retention, data ko service sudharne mein istemaal karna, aur data residency padhna
  - aisa niyam likhna jise naye staff follow kar sakein, aur shak wale cases ke liye ek raasta dena
  - samjhana ki retrieval store mein kya jaata hai yeh chunaav har aane wale sawaal ka faisla kyun hai
terms:
  - retention | ek provider aapka bheja hua kitni der tak rakhta hai, jo jawaab dene mein lage samay se bahut zyada ho sakta hai | 
  - data residency | woh desh ya kshetra jahan ek provider aapka bheja hua store aur process karta hai | residency
---

July ke teesre Monday ko Lakshmi Iyer ne apne desk par teen documents rakhe, kinaare se barabar kiye hue, aur Anaya se kaha ki ek ko woh kisi ko bhi bhej degi, ek ko kabhi nahi, aur ek ke baare mein use nahi pata. Usne Anaya se kaha ki woh batayen ki kaun sa kaun sa hai, aur kyun. Anaya ne samjha ki yeh ek parikshaa hai, aur ki use vishay ke baare mein pakka nahi pata.

Pehla document Late Payment aur Refund Policy thi, woh baarah page jinhone glass room ke farsh par ek din tukdon mein bitaya tha. Woh Sahaj ki website par prakashit thi aur koi bhi use padh sakta tha. Doosra ek spreadsheet thi, loan applications ki, columns mein naam, pate, pehchaan ke number aur masik aay ke saath. Teesra pachaas support chats ka sangrah tha, analysis ke liye export kiya gaya aur haath se saaf kiya hua, ya aisa cover note ne kaha.

## 28.1 Case: teen documents

Anaya ne kaha ki pehla theek hai aur doosra nahi. Lakshmi ne poochha kyun. "Woh logon se bhara hai," Anaya ne kaha. Teesre ke baare mein woh pakki nahi thi. Usne naapa tha ki haath se saaf karne mein kya chhoot jaata hai, aur use cover note par bharosa nahi tha. Lakshmi ne sahmati di, aur kaha ki teesra upyogi tha. Yeh chapter ise theek se karta hai.

## 28.2 Teen sawaal, kram se

Pichhla har chapter maan kar chala tha ki text model ko bheja ja sakta hai, jiska vyavhaar mein matlab tha woh bahari company jo jawaab likhti thi, ya woh jo matlab ke naqshe banati thi, ya woh jo logs rakhti thi. Zyadatar features ke liye, Lakshmi ne kaha, yeh maanyata ya toh bilkul theek hoti hai ya ek gambhir samasya, aur dono mein se kaun si hai yeh technical masla nahi hai. Yeh teen sawaalon par aata hai. Woh kanooni vyakhyan nahi de rahi thi, aur uska Anaya ko kanoon sikhane ka irada nahi tha. Woh chahti thi ki Anaya jaane ki kaun se sawaal poochhne hain aur har ek ka jawaab kiska hai.

Table: Vendor ko text bhejne se pehle teen sawaal
| Kram | Sawaal | Kyun maayne rakhta hai | Jawaab kiska hai |
| --- | --- | --- | --- |
| 1 | Kya yeh kisi insaan ko pehchaanta hai? | Naam, sampark vivaran, case numbers, kuch bhi jo kisi ki taraf ishaara kare. Agar haan, toh niyam laagu hote hain, chahe aap kahin bhi hon, aur woh vaikalpik nahi hain | Compliance |
| 2 | Yeh kiski gopniya jaankari hai? | Agar aapki hai, toh bhejna ek business faisla hai. Agar woh kisi customer, supplier ya partner ki hai, toh yeh anubandh ka sawaal hai, aur jawaab "nahi" ho sakta hai chahe vendor kitna bhi saavdhaan ho. Sahaj ke un banks ke saath samjhaute, jinke zariye usne loan diye, ne kuch kaha tha ki kuch data kahan jaa sakta hai, aur Anaya ya Imran ne unhe nahi padha tha | Business, kanooni salah ke saath |
| 3 | Vendor iske saath kya karta hai? | Kitni der rakhta hai, kya usse seekhta hai, aur kis desh mein store karta hai | Product manager, jo yahan sabse zyada jodta hai, kyunki engineers maan lete hain ki yeh tay hai aur vendors aashwast karne wali bhasha mein varnan karte hain |

Isi kram mein poochhne se kam mehnat mein zyadatar cases tay ho jaate hain. Pehle sawaal ne spreadsheet ko ek line mein nipata diya.

## 28.3 Das minute ka padhna

Lakshmi ne Anaya se ek aisa kaam karne ko kaha jisme das minute lagte aur jo, jahan tak use pata tha, Sahaj mein kisi ne nahi kiya tha: bahari company ki asli terms padho, website nahi. Anaya ne use usi dopahar dhoondh liya. Woh lambi aur saadhaaran thi. Acceptable use ke section ke baad ek page aur aadhe mein teen cheezein thi jo usne ekdum waisi hi likh li.

Table: Vendor ki terms ki teen lines
| Terms ne kya kaha | Iska matlab |
| --- | --- |
| "Requests may be retained for up to thirty days for safety monitoring." | Yeh *retention* hai: ek provider ko bheji gayi cheez kitni der rakhta hai, jo jawaab dene mein lagne wale samay se kahin zyada ho sakta hai |
| "Requests may be used to improve the service unless the customer has agreed otherwise in writing." | Sahaj ne aisa nahi kiya tha. Kisi se poochha bhi nahi gaya tha |
| "Requests are processed in data centres in the following regions", ek list ke saath, jisme Bharat nahi tha | Yeh *data residency* hai: woh desh jahan jo kuch bheja jaata hai woh store aur sambhala jaata hai |

Teeno kharide gaye plan ke saath badal sakte the, aur Anaya ko shak tha ki Sahaj ne sabse sasta liya tha. Woh lines Lakshmi ke paas le gayi, jisne unhe khade hokar padha. "March se customer ka Aadhaar number isi ke adheen raha hai," usne kaha. Anaya ne kaha ki use pata hai. Lakshmi ne kaha ki yeh uski galti nahi hai. Anaya ne kaha ki use phir bhi March mein padhna chahiye tha. Lakshmi ne sahmati di aur kaha ki Anaya company ki pehli insaan hogi jisne padha hai.

## 28.4 Teesra document

Teeno documents par dobara vichaar kiya gaya. Policy teeno sawaal paas kar gayi: koi insaan nahi, public, kuch gopniya nahi. Spreadsheet pehle sawaal par fail hui.

Chats interesting case thi. Woh kisi sawaal mein poori tarah fail nahi hui aur paas bhi nahi hui. Unhe haath se saaf kiya gaya tha, aur Anaya jaanti thi ki haath se saaf karna kitna kaam karta hai, kuch hissa, kabhi-kabhi. Imaandaar jawaab yeh tha ki chats mein log ho sakte the, kisi bank ki gopniya jaankari ho sakti thi, aur woh us vendor ke paas jaati jiski terms page par thi. Woh bhejne ke liye surakshit nahi thi, ya kam se kam abhi nahi.

Lakshmi ne woh niyam maanga jo ek naya joiner bina poochhe follow karega. Anaya ne raaste mein is par socha tha. Jo niyam log follow kar sakte hain woh aam cases ko saaf shabdon mein tay karta hai, ek aisi category ka naam leta hai jo kabhi nahi bheji jaati, aur shak wale cases ke liye ek khaas raasta deta hai. "Apni samajh se kaam lo" kehne wala niyam fail hota hai, kyunki jo insaan shak mein hai aur jaldi mein hai woh use ijaazat samajhta hai.

::: example Anaya ka likha niyam
Aap bhej sakte hain: Sahaj ke prakashit help pages aur policies.
Kabhi nahi bhejna: pehchaan ke number, bank details, ya loan application ka kuch bhi.
Agar woh customer se aaya hai: pehle guard se guzarta hai.
Agar aapko pakka nahi hai: data channel mein Lakshmi se poochho, aur jawaab ka intezaar karo.
:::

Lakshmi ne chaar line do baar padhi aur ek shabd badla. Usne kaha ki yeh aisa niyam hai jo woh deewar par lagayegi.

## 28.5 Retrieval kya bhejta hai

Imran ne hafte mein ek aur cheez dekhi, jo baad mein spasht lagti thi. Chatbot ke documents ka store saavdhaani se chuna gaya tha, aur usme sirf policies aur help pages gaye the. Par chatbot ko banaya gaya tha ki woh sawaal ke liye prasangik kuch tukde dhoondhe aur unhe har request ke saath bahari company ko bheje. Store mein jo kuch bhi tha woh dhoondha ja sakta tha, aur jo dhoondha gaya woh bheja gaya. "Store ke baare mein hamara faisla," Imran ne kaha, "har us sawaal ka faisla hai jo kabhi poochha jaayega."

Anaya ne yeh diagrams se nahi samjha tha. Ek baar liya gaya chunaav, jab kisi ne ek folder system mein khinch kar daala, chat ki raftaar se saikdon hazaar baar dohraya jaane wala chunaav tha. Agar store mein kuch aisa tha jo jaana nahi chahiye, toh woh jaayega. Har tukde ke labels, jo June ka kaam the, ise rokne ka ek tareeka dete the, par yeh chunaav ki kya daalna hai, pehla chunaav tha aur ek insaan ka tha.

::: key Jo niyam yaaddasht par tika hai woh ek ichchha hai
Guard likhit niyam ko laagu karta hai. Niyam kehta hai ki pehchaan ka number kabhi nahi bhejna, aur guard woh hai jo kisi ko galti se aisa karne se rokta hai. Lakshmi ne kaha ki jo niyam is par tika hai ki log use yaad rakhein woh sirf ek ichchha hai.
:::

Anaya ne specification mein ek line joda ki saavdhaan judge kahan chalega, us jawaab ke saath jo niyam pehle hi de chuka tha. Agar jo vaakya use padhna tha usme pehchaan ka number ho sakta tha, toh woh building ke bahar kisi ke padhne ke liye nahi tha, jab tak terms likhit roop mein kuch aur nahi kehti, jo abhi nahi kehti thi. Woh aisa model hona chahiye jise Sahaj khud chalaye. Aise models the, woh samjhi, aur baad ke chapters batayenge ki woh kaise kaam karta hai.

## Saaraansh

Text vendor ko bhejna theek hai ya nahi, yeh teen sawaalon se tay hota hai, kram se: kya woh kisi insaan ko pehchaanta hai, woh kiski gopniya jaankari hai, aur vendor uske saath kya karta hai.

- Teesre sawaal par product manager sabse zyada jodta hai. Jawaab vendor ki asli terms mein hai: woh jo kuch bheja jaata hai use kitni der rakhta hai (retention), kya usse seekhta hai, aur kahan store karta hai (data residency). Sab kharide gaye plan ke saath badal sakte hain.
- Jo niyam log follow kar sakte hain woh aam cases ko saaf shabdon mein tay karta hai, jo kabhi nahi bheja jaata uska naam leta hai, aur shak wale cases ke liye ek khaas raasta deta hai.
- Retrieval jo kuch dhoondhta hai woh bhej deta hai, isliye store mein kya jaayega yeh faisla us par poochhe gaye har sawaal ka faisla hai.
- Jo niyam logon ke yaad rakhne par tika hai woh sirf ichchha hai. Jo tool use laagu karta hai woh ek control hai.
