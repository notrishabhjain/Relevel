---
title: Galat Jawaab Ke Liye Design
summary: Nabbe percent par, das mein se ek jawaab galat hota hai, aur us ek par screen jo karti hai wahi tay karta hai ki tool par bharosa kiya jaata hai ya nahi. Phir ek pilot, jo fail hone ke liye design kiya gaya tha, kuch ajeeb karta hai: woh safal hota hai, aur kuch nahi badalta.
course: ch20 ch205
terms:
  - refusal | system ka saaf kehna ki woh kuch nahi kar sakta aur ek insaan tak ka raasta dena, jo jaan-boojh kar design kiya jaata hai aur ittefaq par nahi chhoda jaata | refusals
  - pilot | ek seemit trial jo yeh dikhane ke liye design kiya gaya ho ki ek feature business ki madad karta hai ya nahi, aur jo pehle se batata hai ki kaun sa nateeja failure maana jaayega | pilots
  - failure threshold | woh nateeja, pilot shuru hone se pehle likha hua, jisse neeche aap use failure kahenge | 
---

"Agar yeh das mein se nau baar sahi hai," Farah ne kaha, "toh main apni team ko dasven ke baare mein kya bataun?"

Usne yeh khade-khade poochha, chai ke cup ke saath, glass room ke darwaze mein. August ka aakhri hafta tha aur umas toot chuki thi, aur blinds se ek nayi, patli roshni aa rahi thi. Anaya hafton se is sawaal ka intezaar kar rahi thi. Yahi woh tha jo tay karta tha ki jo unhone banaya hai use istemaal kiya jaayega ya nahi.

Nabbe percent par, das mein se ek galat hai, aur koi engineering aakhri dasve hisse ko poori tarah nahi hata sakti. Jab woh galat ho toh screen kya karti hai yahi tay karta hai ki tool par bharosa kiya jaata hai ya use chhod diya jaata hai. Aur yeh engineering ka faisla nahi hai. Ek engineer keh sakta hai ki confidence score maujood hai. Product ka malik tay karta hai ki jab woh kam ho toh agent ko kya dikhta hai.

## Screen par chaar cheezein

Anaya ne agent ki screen April mein kaagaz par banayi thi. Ab usne use dobara banaya, jo usne seekha tha usse, aur paya ki woh chaar cheezon par aati hai.

**Saboot dikhao.** Jab guard koi number chhupata, toh agent ko ek chhota note dikhta: *1 detail chhupi. Wajah dekhne ke liye click karein.* Click un theek-theek shabdon ko kholta jo chhupaye gaye the, aur wajah. Ek nanga daava, *kuch chhupaya gaya*, sirf bharosa karne ki maang hai. Ek daava jise padhne wala ek second mein jaanch sake saboot hai. Isiliye usne form mein quote par zor diya tha: saboot ko khulna chahiye tha.

**Raftaar ke baare mein socho.** Yeh usne train par seekha tha. Kuch chhupane ka faisla stream nahi kiya ja sakta tha, kyunki aadha faisla ek khatra hai. Isliye agent ki screen par kuch bhi tab tak nahi dikha jab tak guard ne khatam nahi kiya. Jo number dikhta hai aur phir likhe jaate waqt badal jaata hai woh spinner se bura hai.

**Confidence ka istemaal karo tay karne ke liye ki kya karna hai, use dikhao mat.** Finder har finding ke liye ek confidence figure banata tha. Use dikhana aasaan hota. *Chhupa: naam (73%).* Lekin jawaab ke bagal mein ek percentage agent se kuch aisa parakhne ko kehta hai jise woh calibrate nahi kar sakta, aur machine ka khud ka andaaza ki woh kitni pakki hai aksar buri tarah calibrate hota hai. Parde ke peeche istemaal hone par, hamesha, woh badal sakta tha ki screen kya karti hai. Ucch confidence: chhupao aur kaho. Madhyam: chhupao, kaho *surakshit rehne ke liye chhupaya*, aur baad mein ek insaan ko bhejo. Bahut kam: text ko rehne do lekin message ko review ke liye chinhit karo. Confidence ek dekhne wala number nahi, vyavaharon ke beech ek chunav ban gaya.

**Sudhaar tezi se karwao.** Jab guard galat hota, toh agent agle kadam mein jo karta woh building ka sabse keemti data tha, aur zyadatar products use phenk dete hain. Anaya ke paas button tha, *guard ne woh chhupa diya jo mujhe chahiye tha*. Usne use tez kiya. Ab woh is chat ke liye original dikhane ki peshkash karta, poochhta ki agent ne uski jagah kya umeed ki thi, aur sawaal, saboot aur jawaab ek saath likh leta. Agar sudhaarne mein haath se kaam karne se zyada samay lagta, toh koi nahi sudharta, aur ek khaali feedback table santusht lagti. Uske mein ek click aur ek line lagti thi.

"Thumbs-down batata hai ki kuch galat tha," usne Farah se kaha. "Yeh batata hai ki use kya kehna chahiye tha. Yeh ek test case hai, tumhari team dwara likha hua, muft mein."

Farah ne socha. "Toh dasve ke baare mein main kya kahun?"

"Tum kehti ho: kuch ke baare mein woh saaf anishchit dikhega, woh batayega kyun, aur tum use khud karne se tez sudhaar sakte ho. Aur jo woh galat karta hai aur tum kabhi dekhte nahi, unhe hum kisi aur tareeke se dhoondhenge."

## Jab woh nahi kar sakta tab woh kya kehta hai

Ek screen thi jise usne design nahi kiya tha, aur usne samjha ki woh us se bachti aa rahi thi.

Har system achha lagta hai jab kaam karta hai. Bharosa us screen par banta hai jo kehti hai *main nahi kar sakta*. Bahut se products ise sabse aakhir mein design karte hain, ya kabhi nahi. Usne ek Tuesday ise diya.

Guard ke liye, ek *refusal* ka matlab tha woh pal jab woh surakshit roop se woh kaam nahi kar sakta tha. Ek customer free chat mein Aadhaar card ki photograph attach karta hai. Guard abhi tasveer mein number ko kaala nahi kar sakta. Imaandaar design ka matlab dikhawa nahi karna tha. Chat teeno bhashaon mein kehti, Farah ka likha aur Lakshmi ka manzoor kiya: *Kripya yahan pehchaan card share na karein. Secure upload istemaal karein, ya kisi insaan se baat karne ke liye yeh button dabayein.* Ek refusal jo kisi insaan ka raasta deta hai woh us system se zyada bharosa kamata hai jo hamesha kuch na kuch paida karta hai, kyunki users ise aanshik roop se is aadhar par parakhte hain ki woh kya mana karta hai. Jo feature kabhi mana nahi karta woh unhe sikhata hai ki uske vishwas ka koi matlab nahi.

Aakhri screen woh thi jab machine band thi. Woh pehle hi safe mode bana chuki thi. Ab usne design kiya ki agents ko tab kya dikhta jab woh on ho: upar ek patli peeli patti, *Safe mode: naam aur pate chhupaye nahi ja rahe*. Agar machine ko band karne se screen khaali ho jaye, toh switch ek failure ko doosre se badal dega.

## Ek test jo fail ho sakta tha

Mahine ke ant tak screens ho chuki thin, aur Lakshmi ne ek pilot maanga.

"Mujhe launch nahi chahiye," usne kaha. "Mujhe ek test chahiye. Aur main chahti hoon tum mujhe pehle batao ki kya tumhein niraash karega."

Team ne ab tak jo kuch naapa tha woh system ke baare mein tha: kya finder sahi tha, kya judge par bharosa kiya ja sakta tha, kya sorter har dibbe mein kaam karta tha. Sab zaroori. Inme se koi us sawaal ka jawaab nahi deta tha jo tay karta hai ki koi agle quarter ke liye paisa dega ya nahi: kya isne business ki madad ki? Ek system chauraanbe percent sahi ho sakta hai aur kuch nahi badalta. Ho sakta hai koi use istemaal hi na kare. Ya jis kadam ko woh tez karta hai woh kabhi dheema hissa tha hi nahi.

Isliye, pehle, dheema hissa dhoondho. Anaya aur Farah ne support office mein ek hafte ka kaam naapa, bina kuch badle. Agents ne pehchaan ke numbers par lagbhag koi samay nahi bitaya. Unhone unhe padha nahi, copy nahi kiya, parwaah nahi ki. Jo dheema tha, aur jo Lakshmi ko chinta mein daalta tha, woh kahin aur tha. Har mahine woh ek privacy sweep chalati thi, logs se paanch sau chats ki spot check, yeh ginne ke liye ki kitnon mein ab bhi ek unhidden pehchaan ka number tha. July mein, paanch sau mein chhiyaalees mein tha.

Wahi number tha. Pilot chaar faislon par tikta hai.

*Number.* Ek naap jise business pehle se track karta hai. Is mauke ke liye ijaad kiya hua koi naya metric nahi. Sweep ki ginti kaam karegi.

*Tulna.* Wahi team pehle aur baad mein kamzor saboot hai. Ek hi avadhi mein do tulna-yogya groups bahut mazboot hai. Sahaj ki do support teams thin: Pune aur Nashik, ek hi chatbot par ek jaisa kaam karti hui. Pune guard ke saath chalegi. Nashik bina.

*Failure threshold.* Yeh woh nateeja hai jisse neeche pilot ko failure kaha jaata hai, shuru hone se pehle likha hua. Uska padhta tha: *Agar chaar hafte baad Pune ki sweep ginti Nashik ki kam se kam aadhi nahi hai, ya agar Pune ke agents das mein se do se zyada chats mein guard ko band kar dete hain, toh pilot fail ho gaya.* Usne ek guardrail jodi: agent handling time paanch percent se zyada nahi badh sakta.

*Samay ki khidki.* Itni lambi ki navinata mit jaye. Koi bhi naya tool apne pehle pakhwade mein jitna hai usse behtar dikhta hai. Chhe hafte.

Lakshmi ne page padha aur, dastakhat karne ki jagah, use wapas thama diya. "Ek aur line jodo. Tum mujhe kya batogi agar yeh kaam kare aur number na hile?"

## Woh pilot jo kaam kar gaya

Pilot pehli September ko shuru hua. Doosre hafte ke ant tak Anaya dashboard ko ek aise ehsaas ke saath padh rahi thi jis par use bharosa nahi tha.

Guard kaam kar raha tha. Woh use dekh sakti thi. Pune mein woh roz chaalees se pachaas details chhupata tha. Agents button kam hi istemaal karte the. Answer key ke khilaaf scoreboard ab tak ke sabse achhe par tha. Handling time sapaat thi.

Sweep, jo Lakshmi ne pakka karne ke liye jaldi chalayi, ne kaha ki Pune mein paanch sau mein ikataalis the, aur Nashik mein taintaalis.

Kuch nahi badla tha.

Ek lambe pal ke liye usne do numbers ko dekha. System kaam karta tha, aur business ka number nahi hila tha, aur use pehle se bataya gaya tha ki yeh sambhav hai. Yeh is kshetra ka sabse disorienting nateeja hai, aur pravritti, hamesha, wapas jaakar system ko behtar karne ki hoti hai, kyunki woh teams ko naapna aata hai.

Usne ise rok liya. Lakshmi ki line page par thi, aur uske neeche usne jaanch ka ek kram likha tha, teen sawaal, us kram mein jo anubhav kehta hai ki jawaab dhoondhne ki sabse zyada sambhavna rakhta hai.

*Pehla: kya log ise istemaal kar rahe hain? Kam adoption sabse aam karan hai aur jaanchna sabse aasaan.* Woh kar rahe the. Guard har chat par chal raha tha.

*Doosra: kya output us jagah pahunchta hai jahan faisla hota hai?* Woh bilkul shaant baith gayi.

*Teesra: kya jis kadam ko humne tez kiya woh critical path par tha bhi?*

Doosre sawaal mein use gyarah minute lage. Usne Imran se poochha ki sweep apni paanch sau chats kahan se kheenchta hai. Woh bhauhein sikodkar, ek diagram kholkar, chup ho gaya.

"Raat ka job," usne kaha. "Woh raw table se copy karta hai. Wahi jo guard se pehle thi. Guard woh messages saaf karta hai jo agents dekhte hain. Woh woh history saaf karta hai jo hum aage bhejte hain. Lekin sweep jo logs padhta hai woh original messages se bane hain, guard ke chalne se pehle likhe gaye. Humne us table ko chhua hi nahi."

Guard har us cheez ki raksha kar raha tha siwa us jagah ke jahan Lakshmi dekhti thi.

"Store karne se pehle saaf karo," Anaya ne sapaat awaaz mein kaha. "Maine yeh April mein likha tha."

"Tumne use history ke liye likha tha. Maine use log par laagu nahi kiya."

Usse guard ko raw table ke saamne le jaane mein do din lage. Teesre hafte mein, Pune ki sweep ginti paanch sau mein nau tak gir gayi. Nashik ki byaaleeso par rahi.

Anaya use dekhne ke baad corridor mein der tak khadi rahi. Uske paas ek number tha, aur number hila tha, aur woh isliye hila tha ki usne ek aisa test likha tha jo fail ho sakta tha aur phir jab woh hua toh us par vishwas karne par adi rahi.

## Saath le jaane layak baatein

Nabbe percent par, das mein se ek jawaab galat hai, aur product ka malik tay karta hai ki screen us par kya karti hai. Chaar cheezein maayne rakhti hain: saboot dikhao jo khule, raftaar ke baare mein socho, confidence ka andar vyavahaar chunne ke liye istemaal karo, screen par number ke roop mein nahi, aur sudhaar haath se karne se tez banao. Ek refusal ek aisi screen hai jise jaan-boojh kar design karna chahiye, ek insaan ke raaste par khatam hoti hui, aur wahi AI ke band hone ki screen ke liye. Yeh jaanne ke liye ki koi system business ki madad karta hai, pehle dheema hissa dhoondho, phir ek pilot chalao ek aise number ke saath jise business pehle se track karta hai, ek tulna group, pehle se likha failure threshold, aur navinata mitne ke liye kaafi lambi khidki. Aur jab yeh kaam kare par number na hile, toh kram se teen cheezein poochho: kya ise istemaal kiya ja raha hai, kya uska output wahan pahunchta hai jahan faisla hota hai, aur kya woh kadam dheema tha.
