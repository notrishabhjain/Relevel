---
title: Galat Jawaab Ke Liye Design
summary: Nabbe percent accuracy par das mein se ek jawaab galat hota hai, aur us ek par screen kya karti hai yeh tay karta hai ki tool par bharosa hoga ya nahi. Phir ek pilot jo fail hone ke liye banaya gaya tha ek ajeeb nateeja deta hai: system kaam karta hai aur kuch nahi badalta. Chapter refusals, pilots aur failure thresholds samjhata hai.
course: ch20 ch205
goals:
  - batana ki galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
  - ek aisa refusal design karna jisme kisi insaan ka raasta ho, aur AI band hone par dikhne wali screen
  - ek aisa pilot banana jisme ek maujooda business number, ek comparison group, ek failure threshold aur kaafi lamba window ho
  - aise pilot ko sahi kram mein parakhna jo kaam karta hai par business number nahi hilata
terms:
  - refusal | system ka saaf kehna ki woh kuch nahi kar sakta aur ek insaan tak ka raasta dena, jo jaan-boojh kar design kiya jaata hai aur ittefaq par nahi chhoda jaata | refusals
  - pilot | ek seemit trial jo yeh dikhane ke liye design kiya gaya ho ki ek feature business ki madad karta hai ya nahi, aur jo pehle se batata hai ki kaun sa nateeja failure maana jaayega | pilots
  - failure threshold | woh nateeja, pilot shuru hone se pehle likha hua, jisse neeche aap use failure kahenge | 
---

August ke aakhri hafte mein Farah Sheikh chai ka cup lekar glass room ke darwaaze par khadi hui aur ek sawaal poochha. Agar guard nau baar sahi hai aur dasvi baar nahi, toh woh apni team ko dasvi ke baare mein kya bataye? Anaya hafton se is sawaal ka intezaar kar rahi thi, kyunki yahi tay karta hai ki tool istemaal hoga ya nahi.

Nabbe percent par das mein se ek galat hota hai, aur koi engineering aakhri dasve hisse ko nahi mitaati. Jab tool galat ho toh screen kya karti hai, yahi tay karta hai ki tool par bharosa kiya jaata hai ya use chhod diya jaata hai. Yeh engineering faisla nahi hai. Engineer bata sakta hai ki confidence score maujood hai. Jab score kam ho toh agent kya dekhta hai, yeh product ka maalik tay karta hai.

## Case: dasvaan jawaab

Anaya ne April mein agent ki screen kaagaz par banayi thi. Usne use phir se banaya, jo woh tab se seekh chuki thi uske saath, aur paaya ki woh chaar cheezon par aa gayi.

Table: Galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
| Siddhant | Matlab | Guard mein |
| --- | --- | --- |
| Aisa saboot dikhao jo khule | Sirf dawa bharose ki maang hai. Jo dawa padhne wala ek second mein jaanch sake woh saboot hai | Note "1 detail chhupayi gayi. Kyun dekhne ke liye click karein" un theek shabdon ko khol deta hai jo chhupaye gaye the, kaaran ke saath. Isi liye form ko quotation chahiye thi |
| Speed ke baare mein socho | Adhoora faisla khatra hai, isliye faisla stream nahi kiya ja sakta | Guard ke khatam hone tak agent ki screen par kuch nahi aaya. Number jo aata hai aur phir badalta hai, spinner se bura hai |
| Confidence ko parde ke peechhe istemaal karo | Jawaab ke saath percentage agent ko kuch aisa tolne ko kehta hai jise woh calibrate nahi kar sakta, aur machine ka apna confidence aksar buri tarah calibrate hota hai | Zyada confidence: chhupao aur batao. Madhyam: chhupao, "surakshit rehne ke liye chhupaya" kaho aur baad mein ek insaan ke paas bhejo. Bahut kam: text ko waisa hi chhodo par message ko review ke liye chinhit karo |
| Sudhaarna tez banao | Jab tool galat ho tab agent kya karta hai, woh building ka sabse keemti data hai, aur zyadatar products use fenk dete hain | Ek click aur ek line. Button is chat ke liye original dikhata hai, poochhta hai ki agent ne kya socha tha, aur sawaal, saboot aur jawaab ek saath record karta hai |

Agar sudhaarna haath se kaam karne se zyada samay leta hai, toh koi nahi sudhaarega, aur khaali feedback table santosh jaisi dikhegi. Thumbs-down team ko batata hai ki kuch galat tha. Sudhaara hua record batata hai ki jawaab kya hona chahiye tha, jo Farah ki team ka bina kuch kharch kiye likha hua test case hai.

Farah ne phir poochha ki woh dasve ke baare mein kya kahe. Anaya ka jawaab tha ki guard kuch jawaabon ke baare mein dikhai dega ki use shak hai, kaaran bataayega, aur use agent ke akele kaam karne se tez sudhaara ja sakta hai. Jo galat jawaab agents ne dekhe hi nahi unhe kisi aur tareeke se dhoondha jaayega.

## Jab woh nahi kar sakta

Anaya ne ek screen se bachne ki koshish ki thi, aur usne ek Tuesday use design karne mein bitaya. Har system tab achha dikhta hai jab woh kaam karta hai. Bharosa us screen par bante hain jo kehti hai "main nahi kar sakta", aur kai products use sabse aakhir mein design karte hain, ya kabhi nahi.

Guard ke liye *refusal* un pal ko dhakta hai jab woh surakshit tareeke se kaam nahi kar sakta. Ek customer free chat mein ek Aadhaar card ki photograph lagata hai, aur guard abhi tasveer mein number ko kaala nahi kar sakta. Imaandaar design yeh dikhawa nahi karna tha. Chat teeno bhashaon mein kehti, Farah ke likhe aur Lakshmi ke manzoor shabdon mein: kripya pehchaan ke cards yahan share na karein; secure upload istemaal karein, ya kisi insaan se baat karne ke liye yeh button dabayein.

::: key Insaan ka raasta dene wala refusal bharosa kamata hai
Jo refusal insaan tak ka raasta deta hai woh us system se zyada bharosa kamata hai jo hamesha kuch nikaalta hai, kyunki users system ko is baat se bhi parakhte hain ki woh kya mana karta hai. Jo feature kabhi mana nahi karta woh unhe sikhata hai ki uske aatmavishwaas ka koi matlab nahi.
:::

Aakhri screen tab ki thi jab machine band thi. Anaya safe mode pehle hi bana chuki thi, aur ab usne woh design kiya jo agents tab dekhte jab woh on tha: screen ke upar ek patli peeli patti, "Safe mode: naam aur pate chhupaye nahi ja rahe". Agar machine band karne se screen khaali rehti, toh switch ek failure ki jagah doosri rakh deta.

## Ek test jo fail ho sakta tha

Mahine ke ant tak screens ban chuki thi, aur Lakshmi ne ek pilot maanga. Woh launch nahi chahti thi. Woh ek test chahti thi, aur Anaya se chahti thi ki woh pehle se bataye ki kya use nirash karega.

Team ne ab tak jo kuch naapa tha woh system ke baare mein tha: kya finder sahi tha, kya judge par bharosa ho sakta tha, kya sorter har dabbe mein kaam karta tha. Kuch bhi us sawaal ka jawaab nahi deta jo tay karta hai ki agle quarter ke liye koi paisa dega ya nahi: kya feature ne business ki madad ki? Ek system chauraanve percent accurate ho sakta hai aur kuch nahi badal sakta. Ho sakta hai koi use istemaal hi na kare, ya jis kadam ko woh tez karta hai woh kabhi dheema hissa tha hi nahi.

Pehla kaam dheema hissa dhoondhna tha. Anaya aur Farah ne support office mein ek hafte ke kaam ko bina kuch badle naapa. Agents pehchaan ke numbers par lagbhag koi samay nahi lagate the: woh unhe padhte nahi, copy nahi karte aur unki parwaah nahi karte. Jo dheema tha, aur jo Lakshmi ko chinta deta tha, woh kahin aur tha. Har mahine woh ek privacy sweep chalati thi, logs se paanch sau chats ki ek random jaanch, yeh ginne ke liye ki kitnon mein ab bhi ek unhidden pehchaan ka number tha. July mein paanch sau mein se chhiyaalis mein tha.

*Pilot* chaar faislon par tika hai.

Table: Pilot ke chaar faisle
| Faisla | Matlab | Sahaj ka chunaav |
| --- | --- | --- |
| Number | Ek aisa naap jo business pehle se track karta hai, is mauke ke liye banaya naya metric nahi | Sweep ki ginti |
| Tulna | Wahi team pehle aur baad mein kamzor saboot hai. Ek hi samay mein do tulaneey samooh kahin mazboot hain | Ek hi chatbot par do support teams: Pune guard ke saath, Nashik uske bina |
| Failure threshold | Woh nateeja jiske neeche pilot ko failure kaha jaata hai, shuru hone se pehle likha hua | Chaar hafton ke baad, agar Pune ka sweep count Nashik ke aadhe se kam nahi hai, ya agar Pune ke agents das mein se do se zyada chats mein guard band karte hain, toh pilot fail hai. Ek guardrail: agent ka handling time paanch percent se zyada nahi badh sakta |
| Samay ki khidki | Itni lambi ki naya hone ka asar utar jaaye, kyunki koi bhi naya tool apne pehle pakhwaade mein jitna hai usse behtar dikhta hai | Chhe hafte |

Lakshmi ne page padha, aur use sign karne ke bajaye wapas kar diya aur ek line aur maangi: agar yeh kaam kare aur number na hile toh aap mujhe kya batayengi?

## Pilot jo kaam kar gaya

Pilot September ki pehli tareekh ko shuru hua. Doosre hafte ke ant tak Anaya dashboard ko aise ehsaas ke saath padh rahi thi jis par use bharosa nahi tha. Guard kaam kar raha tha. Pune mein woh roz chaalis se pachaas details chhupata tha, button kam istemaal hua, answer key ke saamne scoreboard apne sabse achhe par tha, aur handling time chapta tha. Lakshmi ne pakka karne ke liye sweep jaldi chalaya. Pune mein paanch sau mein ikataalis the aur Nashik mein taitaalis. Kuch nahi badla tha.

Anaya ne do number ko ek lambe minute tak dekha. System kaam kar raha tha, business number nahi hila tha, aur use pehle se bataya gaya tha ki yeh sambhav hai. Yeh is kshetra ka sabse bhramit karne wala nateeja hai, aur pravritti, hamesha, system ko behtar karne wapas jaane ki hoti hai, kyunki teams yahi naapna jaanti hain. Usne rok liya. Lakshmi ki extra line page par thi, aur Anaya ne uske neeche jaanch ka kram teen sawaalon mein likha tha, us kram mein jo anubhav batata hai ki jawaab dhoondhne ke sabse kareeb hai.

Table: Teen sawaal jab kaam kare par number nahi hile
| Kram | Sawaal | Sahaj ka nateeja |
| --- | --- | --- |
| 1 | Kya log ise istemaal kar rahe hain? Kam adoption sabse aam kaaran hai aur jaanchna sabse aasaan | Haan, guard har chat par chal raha tha |
| 2 | Kya uska output us jagah pahunchta hai jahan faisla hota hai? | Gyarah minute mein jawaab mila, neeche |
| 3 | Kya jis kadam ko tez kiya gaya woh critical raaste par tha bhi? | Zaroorat nahi padi |

Doosre sawaal mein use gyarah minute lage. Usne Imran se poochha ki sweep apni paanch sau chats kahan se leta hai. Woh bhaunhein sikod kar, ek diagram kholkar, chup ho gaya. Raat ka kaam us raw table se copy karta tha jo guard se pehle ka tha. Guard agents ke dekhe messages ko saaf karta tha, aur aage bheji gayi history ko. Par sweep jo logs padhta tha woh un original messages se bane the jo guard ke chalne se pehle likhe gaye the. Us table ko kisi ne nahi chhua tha. Guard har cheez ki raksha kar raha tha siwaye us jagah ke jahan Lakshmi dekhti thi.

"Store karne se pehle saaf karo," Anaya ne kaha. "Maine April mein yeh likha tha." Imran ne kaha ki usne ise history ke liye likha tha aur usne ise log par lagaya nahi tha.

Use guard ko raw table ke saamne rakhne mein do din lage. Teesre hafte mein Pune ka sweep count paanch sau mein nau par aa gaya, jabki Nashik ka bayaalis par raha. Anaya galiyaare mein bahut der khadi rahi jab usne yeh dekha. Uske paas ek number tha, woh hila tha, aur woh isliye hila tha kyunki usne aisa test likha jo fail ho sakta tha aur jab woh hua toh use maanne par adig rahi.

## Saaraansh

Nabbe percent accuracy par ek jawaab dasvi baar galat hota hai, aur screen us par kya karti hai yeh product ka maalik tay karta hai.

- Chaar baatein maayne rakhti hain: saboot dikhao jo khule, speed ke baare mein socho, confidence ko andar se behaviour chunne ke liye istemaal karo na ki screen par ek number ke roop mein, aur sudhaarna haath se karne se tez banao.
- Refusal ek aisi screen hai jo jaanboojh kar design ki jaati hai, jo kisi insaan ke raaste par khatam hoti hai. AI band hone par dikhne wali screen bhi.
- Yeh jaanne ke liye ki system business ki madad karta hai ya nahi, pehle dheema hissa dhoondho, phir ek pilot chalao jisme ek aisa number ho jo business pehle se track karta hai, ek comparison group, pehle se likhi failure threshold, aur itni lambi window ki naya hone ka asar mit jaaye.
- Jab kaam kare par number na hile, toh kram mein poochho ki kya ise istemaal kiya jaata hai, kya uska output us jagah pahunchta hai jahan faisla hota hai, aur kya woh kadam dheema tha.
