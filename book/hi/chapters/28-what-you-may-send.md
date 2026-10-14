---
title: Aap Kya Bhej Sakte Hain
summary: Ab tak hum maan kar chal rahe the ki text vendor ko bheja ja sakta hai. Teen documents aur teen sawaal, ek tay order mein, batate hain ki bheja ja sakta hai ya nahi. Aur vendor ki terms of service mein woh baatein nikalti hain jo kisi ne padhi hi nahi thi. Is chapter mein retention aur data residency samjhenge.
course: ch165
goals:
  - teen sawaal order mein poochh kar tay karna ki text vendor ko bhejna theek hai ya nahi
  - vendor ki asli terms padhna: retention, data ka service sudharne mein istemaal, aur data residency
  - aisa rule likhna jo naya staff bina poochhe follow kar sake, aur shak wale cases ke liye ek raasta dena
  - samjhana ki retrieval store mein kya jaayega, yeh chunaav aage aane wale har sawaal ka faisla kyun hai
terms:
  - retention | ek provider aapka bheja hua text kitni der tak rakhta hai, jo jawaab dene mein lage time se bahut zyada ho sakta hai | 
  - data residency | woh desh ya region jahan provider aapka bheja hua text store aur process karta hai | residency
---

July ke teesre Monday ko Lakshmi Iyer ne apne desk par teen documents rakhe, kinaare se barabar karke. Phir Anaya se bola: ek document woh kisi ko bhi bhej degi, ek ko kabhi nahi, aur ek ke baare mein use pata nahi. Anaya ko batana tha ki kaun sa kaun sa hai, aur kyun. Anaya samajh gayi ki yeh ek test hai. Aur use yeh bhi pata tha ki is subject par woh pakki nahi hai.

Pehla document Late Payment and Refund Policy thi. Yahi woh baarah page the jinhone ek din glass room ke farsh par tukdon mein bitaya tha. Woh Sahaj ki website par chhapi hui thi, koi bhi padh sakta tha. Doosra ek spreadsheet tha, loan applications ka. Columns mein naam, pate, pehchaan ke numbers aur monthly income. Teesra pachaas support chats ka set tha. Analysis ke liye export kiya gaya tha, aur cover note ke hisaab se haath se saaf kiya hua tha.

## Case: teen documents

Anaya ne kaha ki pehla theek hai, doosra nahi. Lakshmi ne poochha, kyun? "Isme sirf log hi log hain," Anaya ne kaha. Teesre ke baare mein woh pakki nahi thi. Usne khud naapa tha ki haath se saaf karne mein kya-kya chhoot jaata hai, isliye cover note par use bharosa nahi tha. Lakshmi ne haan mein sir hilaya, aur kaha ki teesra hi sabse kaam ka hai. Yeh chapter use theek se karke dikhata hai.

## Teen sawaal, order mein

Ab tak ke har chapter mein hum maan kar chale ki text model ko bheja ja sakta hai. Matlab asal mein ek bahari company ko, chahe woh jawaab likhne wali ho, ya meaning ke maps banane wali, ya logs rakhne wali. Lakshmi ne kaha, zyadatar features mein yeh maan lena ya bilkul theek hota hai, ya ek badi problem. Aur dono mein se kaun sa, yeh technical sawaal nahi hai. Yeh teen sawaalon par tikta hai. Woh koi legal lecture nahi de rahi thi, na Anaya ko kanoon sikhana chahti thi. Bas chahti thi ki Anaya ko pata ho ki kaun se sawaal poochhne hain, aur har ek ka jawaab kiske paas hai.

Table: Vendor ko text bhejne se pehle teen sawaal
| Order | Sawaal | Yeh kyun zaroori hai | Jawaab kiska hai |
| --- | --- | --- | --- |
| 1 | Kya isse kisi insaan ki pehchaan hoti hai? | Naam, contact details, case numbers, kuch bhi jo kisi ki taraf ishaara kare. Agar haan, toh rules lagu hote hain, aap kahin bhi ho, aur woh optional nahi hain | Compliance |
| 2 | Yeh kiski confidential jaankari hai? | Agar aapki apni hai, toh bhejna ek business decision hai. Agar kisi customer, supplier ya partner ki hai, toh yeh contract ka sawaal hai, aur jawaab "nahi" ho sakta hai, vendor chahe kitna bhi careful ho. Sahaj ne jin banks ke through loan diye the, un ke saath hue agreements mein likha tha ki kuch data kahan jaa sakta hai. Na Anaya ne woh padhe the, na Imran ne | Business, legal advice ke saath |
| 3 | Vendor iske saath kya karta hai? | Kitni der rakhta hai, kya isse seekhta hai, aur kis desh mein store karta hai | Product manager, kyunki yahan sabse zyada value woh jodti hai. Engineers maan lete hain ki yeh tay ho chuka hai, aur vendors isse aise shabdon mein batate hain jo tasalli dein |

Is order mein poochhne se kam mehnat mein zyadatar cases tay ho jaate hain. Pehle sawaal ne spreadsheet ka faisla ek line mein kar diya.

## Das minute ka padhna

Phir Lakshmi ne Anaya se ek kaam karne ko kaha jisme das minute lagte. Jahan tak use pata tha, Sahaj mein yeh kisi ne kiya nahi tha: bahari company ki asli terms padhna, website wali baatein nahi. Anaya ko woh usi dopahar mil gayi. Lambi thi, aur kuch khaas nahi lag rahi thi. Lekin acceptable use wale section ke baad, derh page ke andar, teen cheezein thi. Anaya ne unhe bilkul waisa hi likh liya.

Table: Vendor ki terms ki teen lines
| Terms mein kya likha tha | Iska matlab |
| --- | --- |
| "Requests may be retained for up to thirty days for safety monitoring." | Yeh *retention* hai: provider ko bheji gayi cheez kitni der rakhta hai. Yeh jawaab dene mein lage time se bahut zyada ho sakta hai |
| "Requests may be used to improve the service unless the customer has agreed otherwise in writing." | Sahaj ne kabhi "otherwise" nahi kaha tha. Kisi se poochha hi nahi gaya tha |
| "Requests are processed in data centres in the following regions", uske baad ek list, jisme India nahi tha | Yeh *data residency* hai: woh desh jahan bheji gayi cheez store aur process hoti hai |

Teeno cheezein kharide gaye plan ke saath badal sakti thi, aur Anaya ko lag raha tha ki Sahaj ne sabse sasta plan liya hoga. Woh lines lekar Lakshmi ke paas gayi. Lakshmi ne unhe khade-khade padha. "March se customer ka Aadhaar number isi sab ke under raha hai," usne kaha. Anaya ne kaha, haan, use pata hai. Lakshmi ne kaha, yeh tumhari galti nahi hai. Anaya ne kaha, phir bhi March mein use padhna chahiye tha. Lakshmi ne maana, aur joda ki Anaya company mein pehli insaan hogi jisne ise padha.

## Teesra document

Ab teeno documents ko dobara dekha gaya. Policy teeno sawaal paas kar gayi: usme koi insaan nahi, woh public hai, kuch confidential nahi. Spreadsheet pehle hi sawaal par fail ho gayi.

Chats sabse interesting case thi. Woh kisi sawaal par poori tarah fail nahi hui, aur paas bhi nahi hui. Unhe haath se saaf kiya gaya tha, aur Anaya ko pata tha ki haath ki safai kitna kaam karti hai: kuch hissa, kabhi-kabhi. Imaandaar jawaab yeh tha ki chats mein log ho sakte hain, kisi bank ki confidential jaankari ho sakti hai, aur woh us vendor ke paas jaayengi jiski terms ab page par thi. Matlab bhejna safe nahi tha, kam se kam abhi nahi.

Lakshmi ne ab woh rule maanga jo ek naya joiner bina poochhe follow kar le. Anaya ne raaste mein hi iske baare mein socha tha. Jo rule log sach mein follow kar paate hain, woh common cases ko saaf shabdon mein tay kar deta hai, ek category ka naam leta hai jo kabhi nahi bheji jaati, aur shak wale cases ke liye ek khaas raasta deta hai. "Apni samajh se kaam lo" jaisa rule fail hota hai, kyunki jo insaan shak mein hai aur jaldi mein bhi, woh use ijaazat samajh leta hai.

::: example Anaya ka likha rule
Aap bhej sakte hain: Sahaj ke chhape hue help pages aur policies.
Kabhi nahi bhejna: pehchaan ke numbers, bank details, ya loan application ka kuch bhi.
Agar woh customer se aaya hai: pehle guard se guzarega.
Agar aapko pakka nahi pata: data channel mein Lakshmi se poochhiye, aur jawaab aane tak ruke rahiye.
:::

Lakshmi ne yeh chaar lines do baar padhi aur ek word badla. Phir bola ki aisa rule woh deewar par lagayegi.

## Retrieval kya bhejta hai

Imran ne hafte ke baad mein ek cheez aur dekhi, jo baad mein saaf-saaf dikhne lagi. Chatbot ke documents ka store dhyaan se chuna gaya tha, usme sirf policies aur help pages gaye the. Lekin chatbot ka kaam hi yeh tha ki sawaal ke liye kaam ke chhote tukde dhoondhe aur har request ke saath bahari company ko bhej de. Store mein jo bhi tha, woh mil sakta tha. Aur jo mila, woh bheja gaya. "Store ke baare mein hamara faisla," Imran ne kaha, "un sab sawaalon ka faisla hai jo kabhi poochhe jaayenge."

Anaya ko yeh diagrams se samajh nahi aaya tha. Ek baar liya hua chunaav, jab kisi ne ek folder system mein khinch kar daal diya, chat ki raftaar se lakhon baar dohraya jaata hai. Agar store mein kuch aisa hai jo bahar nahi jaana chahiye, toh woh jaayega. Har tukde ke labels, jo June ka kaam the, ise rokne ka ek tareeka dete the. Lekin kya daalna hai, yeh chunaav sabse pehla tha, aur woh ek insaan ka tha.

::: key Jo rule yaad rakhne par tika hai, woh sirf ek ichchha hai
Guard likhe hue rule ko lagu karta hai. Rule kehta hai ki pehchaan ka number kabhi nahi bhejna, aur guard woh hai jo kisi ko galti se bhi aisa karne se rokta hai. Lakshmi ne kaha, jo rule is par tika hai ki log use yaad rakhenge, woh sirf ek ichchha hai.
:::

Anaya ne specification mein ek line aur jodi: saavdhaan judge kahan chalega, aur us sawaal ka jawaab jo rule pehle hi de chuka tha. Agar judge ko jo sentence padhna hai usme pehchaan ka number ho sakta hai, toh use building ke bahar koi nahi padh sakta, jab tak terms likhit mein kuch aur na kahein, aur abhi woh nahi kehti thi. Isliye judge ko aisa model hona padega jo Sahaj khud chalaye. Aise models hote hain, woh samajh gayi, aur aage ke chapters dikhayenge ki yeh kaise hota hai.

## Saaraansh

Text vendor ko bhejna theek hai ya nahi, yeh teen sawaal order mein poochh kar tay hota hai: kya isse kisi insaan ki pehchaan hoti hai, yeh kiski confidential jaankari hai, aur vendor iske saath kya karta hai.

- Teesre sawaal mein product manager sabse zyada kaam aati hai. Jawaab vendor ki asli terms mein hai: woh bheji hui cheez kitni der rakhta hai (retention), kya usse seekhta hai, aur kahan store karta hai (data residency). Yeh sab kharide gaye plan ke saath badal sakte hain.
- Jo rule log follow kar sakte hain, woh common cases ko saaf shabdon mein tay karta hai, kabhi na bheji jaane wali cheez ka naam leta hai, aur shak wale cases ke liye ek khaas raasta deta hai.
- Retrieval jo kuch dhoondhta hai woh bhej deta hai. Isliye store mein kya jaayega, yeh faisla us store se poochhe gaye har sawaal ka faisla hai.
- Jo rule logon ke yaad rakhne par tika hai, woh sirf ichchha hai. Jo tool use lagu karta hai, woh ek control hai.
