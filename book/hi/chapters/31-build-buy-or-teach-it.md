---
title: Banao, Kharido Ya Sikhao
summary: Ek vendor team ko woh bechne ki peshkash karta hai jo usne chhe mahine mein banaya, aur ek founder apna model train karne ka prastaav rakhta hai. Dono prastaav samajhdaar lagte hain, aur dono ko ek hi test paas karna hai. Chapter AI value chain, open-weight models, fine-tuning aur lock-in samjhata hai.
course: ch185 ch19
goals:
  - vendor ke dawe ko uske product ko apni answer key par chalakar parakhna
  - banane ya khareedne ka faisla chaar sawaalon se karna, aur woh shartein likhna jo use palat dengi
  - AI value chain ki parton ka varnan karna aur batana ki product ka phayda kahan hai
  - failures ko chaar kismon mein baantna aur samjhana ki fine-tuning behaviour sikhati hai, tathya nahi
terms:
  - AI value chain | un layers ki shrinkhala jin par ek AI product bana hota hai: infrastructure, models, tooling aur, sabse upar, woh applications jo log istemaal karte hain; har layer ka fayda kisi alag cheez se aata hai | value chain
  - open-weight model | aisa model jiske weights prakashit hain, taaki aap use download karke apne computers par chala sakein, kisi aur ka bulane ki jagah | open-weight models, open-weight
  - fine-tuning | model ko aapke apne udaharanon par aur train karna, taaki woh ek jaise tareeke se behave kare; yeh vyavahaar sikhata hai, tathya nahi | fine-tune, fine-tuned
  - lock-in | ek provider se bandh jaana kyunki chhodna bahut mehnga padega, dobara likhne, dobara naapne ya khoye hue features mein | 
---

August ke teesre hafte mein VaultLeaf naam ke ek vendor ne Sahaj mein do log bheje, ek salesman aur ek engineer. Imran Qureshi ne kaha ki do bhejna ek achha sanket hai, aur Lakshmi Iyer ne kaha ki yeh ek bura sanket hai. VaultLeaf aisa software bechta tha jo text mein personal data dhoondhta aur chhupata tha, aur woh banks ko bechta tha. Uska pitch chamakdaar tha: graphs wala console, ek slide par ek certificate, vaada ki woh teen hafte mein Sahaj mein chalne lagega, aur ninyaanve percent ki accuracy.

Anaya ne poochha ki ninyaanve percent kis par naapa gaya hai. Engineer ne, jo is sawaal ki ummeed mein lagta tha, kaha ki VaultLeaf ke apne benchmark par. Usne poochha ki kya Sahaj product ko apne par chalaa sakta hai.

## 31.1 Case: sab ke liye wahi test

Jab koi woh bechne ka prastaav rakhta hai jo team bana sakti thi, toh sabse pehle yahi karna chahiye, aur zyadatar kharidaar ise chhod dete hain. Charcha aam taur par daam aur demonstration par ghoomti hai, aur dono faisla nahi karte. Faisla is baat se hota hai ki vendor ke product ko usi tarah naapa jaye jaise koi apna product naapta: team ki answer key par, team ke text par.

VaultLeaf ne, aise andaaz mein jisse lagta tha ki woh aisa aksar nahi karta, do sau chaar rows chalane ko maan liya. Ek hafte baad figure wapas aaye. English pehchaan ke numbers par woh bahut achha tha, guard se thoda behtar. Hinglish naamon par, jis kaam ke liye guard bana tha, woh sau mein baasath dhoondh paya. Devanagari lipi mein Hindi par woh aur kharab tha, aur shabdon mein likhe number ko sambhaalne ka usme koi tareeka nahi tha. Salesman ko aashchary nahi hua, aur usne kaha ki company ke customers zyadatar English-first the. Anaya ne jawaab diya ki Sahaj ke nahi hain.

Jawaab mein ek doosra jawaab tha, aur Lakshmi ne use teen baar padha. Maanak product text ko VaultLeaf ke cloud mein process karne ke liye bhejta tha, India ke bahar ke ek region mein. Ek private deployment, jo Sahaj ke apne systems ke andar chalti, lagbhag teen guna daam par uplabdh thi.

## 31.2 Aap asal mein kya khareed rahe hain

Imran shaant tha. Vendor theek hai, usne kaha, jab tak sab samjhein ki paise kis cheez ke liye hain. Aam taur par model nahi khareeda jaata, kyunki zyadatar vendors wahi models istemaal karte hain. Aap connectors, permissions, kisne kya kiya uska record, ek support contract, aur woh insaan khareed rahe hain jo raat ko do baje khaaye jaane par bistar se uthta hai. Woh aakhri cheez aam taur par licence se zyada keemti hoti hai aur aam taur par hisaab se chhoot jaati hai.

Usne board par chaar sawaal likhe, jo uske anubhav mein faisla karte hain.

Table: Banao ya kharido ke chaar sawaal, Sahaj ke jawaabon ke saath
| Sawaal | Sahaj ka jawaab |
| --- | --- |
| Kya yeh woh cheez hai jiske liye product bana hai, ya yeh plumbing hai? | Hinglish mein personal details dhoondhna poore case ka aadhaar hai, isliye Sahaj ko ise apna rakhna chahiye |
| Ise kitni baar badalna padega? | Lagaataar, kyunki answer key har hafte badhti hai aur failures asli customers se aati hain |
| Raat ko do baje kaun jaaga hai? | Abhi koi nahi. Koi plan nahi tha, jo jaanna upyogi tha |
| Agar vendor khareed liya jaaye ya band ho jaaye toh kya hoga? | VaultLeaf mein koi nahi bata sakta tha ki use chhodne mein kya lagega |

Team ne ek hi kaagaz par do saal ke andaaze banaye. Private deployment khareedna lagbhag ₹58 lakh ka aaya. Guard ko banana aur chalana lagbhag ₹71 lakh ka. Antar itna chhota tha ki dono taraf behas ki ja sake, aur jo tay hua woh hisaab nahi tha. Imran ka niyam tha plumbing khareedo aur product ko alag banane wala hissa khud banao.

Yojna yeh thi ki finder, answer key aur scoreboard khud banaye jaayein, aur sirf commodity cheezein kiraye par li jaayein: India ke ek region mein models ki hosting, aur logs ke liye ek off-the-shelf console. Kuch bhi sign karne se pehle Anaya ne woh likha jo usne likhna seekha tha.

::: example Tareekh wala faisla
Main khareedne par badal jaungi agar VaultLeaf hamari key par Hinglish naamon par nabbe tak pahunchta hai, ya agar upkeep ek insaan ke samay ke paanchve hisse se zyada par aati hai. Main zyada banane par badal jaungi agar agle tier par daam badhta hai. 1 December ko review.
:::

Tareekh wala faisla, usne paaya, bina tareekh wale se kahin aasaani se palta ja sakta hai.

## 31.3 Product ke neeche kya hai

Meeting se lautte hue Anaya ne Imran se ek sawaal poochha jo March se uske dimaag mein tha: kya hum un logon se muqabla kar rahe hain jo bade models banate hain? Woh mithai ki dukaan ke saamne ruka aur dukaan ke maalik se udhaar liye pen se ek invoice ke peechhe jawaab banaya.

AI products parton mein bante hain, har ek apne neeche wale par tika. Poora stack *AI value chain* hai, aur har part ka phayda alag cheez se aata hai.

Table: AI value chain ki parton
| Part | Yeh kya hai | Iska phayda kahan se aata hai |
| --- | --- | --- |
| Infrastructure | Computers, chips aur cloud | Maatra aur paisa |
| Models | Kuch un companies ke jo access bechti hain, kuch khule roop se chhode gaye | Maatra aur paisa |
| Tooling | Matlab ke naqshe ke liye stores, jaanch aur tracking ke saadhan | Maatra aur paisa, aur istemaal mein aasaani |
| Applications | Jo log asal mein istemaal karte hain | Workflow, data aur bharosa |

Zyadatar teams, Imran ne kaha, sabse upar rehti hain, aur sabse upar model phayda nahi hai, kyunki competitors wahi model usi darwaaze se bula sakte hain. Jo nakal karna mushkil hai woh yeh hai ki product kisi ke kaam mein kitna gehra ghula hai, aur aisa data jo kisi aur ke paas nahi. Anaya ne corrections ka naam liya: jab bhi Farah ka koi agent "guard ne woh chhupa diya jo mujhe chahiye tha" dabata hai, team kuch aisa seekhti hai jo kisi competitor ko nahi pata. Yeh tabhi sach hai jab data anokha ho, product ko behtar banaye aur paana mushkil ho. Jis data ke phayde mein inme se koi bhi kami ho woh ek kahani hai.

Kuch models sabke liye khule hain. *Open-weight model* ke weights chhape hote hain, isliye use download karke apne computers par chalaya ja sakta hai, kisi aur ko bulane ke bajaye. Woh aam taur par sabse achhe closed models se thode peechhe hote hain. Woh data kahan jaata hai aur kitna kharcha hota hai us par zyada niyantran dete hain, aur uski keemat hosting aur upkeep mein chukayi jaati hai. Jis company ne vaada kiya hai ki kisi customer ka vaakya building se kabhi bahar nahi jaayega, uske liye yeh aasaan chunaav tha, aur isne Anaya ki specification ke hashiye ke sawaal ka jawaab diya: saavdhaan judge ek open-weight model hoga, jo Sahaj ke apne servers par chalega.

Imran ne ek shabd joda jisne vendor ke office mein bahut bojh uthaya tha. *Lock-in* ek hi provider se bandhe hona hai kyunki chhodna bahut mehnga hoga, dobara likhne, dobara naapne ya khoye hue features mein. Ilaaj answer key mein hai: agar test set kisi vendor par nirbhar nahi karta, toh badalne mein kuch din lagte hain.

## 31.4 Use sikhao

Monday ko founder, Mr. Bhatia, ne Anaya ko galiyare mein roka. Usne ek plane mein kuch padha tha. Usne poochha ki company Hinglish par apna model train kyun nahi karti: sab yahi kar rahe hain, aur woh Sahaj ka apna hoga. Har team se yeh sawaal poochha jaata hai, aam taur par planning meeting mein aur aam taur par pehle ki kisi ne bataya ho ki galat kya hai. Haan kehne se ek quarter bandh jaata hai, aur na kehna mahatvakanksha-heen lagta hai. Anaya ne Friday tak jawaab dene ka vaada kiya.

Vichaar hai *fine-tuning*: ek maujooda model ko apne udaharanon par aur train karna. Yeh us model ki taraf ka swaabhaavik raasta lagta hai jo company ki duniya jaanta ho. Anaya ke paas woh ek cheez thi jo sawaal ko jawaab dene laayak banati hai, jo June ki ikatees failures ki list thi unki ginti ke saath. Usne har ek ko chaar kismon mein se ek mein rakha, kyunki chaar hain, aur har ek ka ilaaj alag hai.

Table: Failure ki chaar kisme aur unke ilaaj
| Failure ki kism | Matlab | Sahaj ki ginti aur ilaaj |
| --- | --- | --- |
| Machine ko pata nahi | Jawaab ghaayab hai, puraana hai ya gadha hua | Ikatees mein se koi nahi. Order numbers saboot ki samasya the, jise look-up ne hal kiya |
| Use pata hai par vyavhaar galat | Content sahi hai par format ya niyam galat | "ji" ke saath aath naam: machine ko ya rivaaz dikhaya nahi gaya tha, aur ek worked example ne zyadatar ko ek dopahar mein theek kar diya. Aadhe chhupe pate bhi format the |
| Woh nikaal nahi paati | Kai kadam, ya asli uljhan | Do lines mein tute numbers, jo kaatne ke niyam ke the, machine ke nahi |
| Sahi hai par bahut mehnga | Jawaab sahi hai aur daam galat | Abhi samasya nahi |

Mr. Bhatia ko Friday ko uska jawaab yeh tha ki fine-tuning behaviour sikhati hai, tathya nahi. Agar shikayat yeh hoti ki model Sahaj ki policy nahi jaanta, toh woh galat tool hota. Sahaj ki shikayatein vyavhaar thi, aur team ne abhi sasti upaay nahi aazmaaye the, jinme se pehle do ghanton mein palte ja sakte the.

Usne woh kharche bhi ginaye jo prastaav chhod dete hain. Kisi ko udaharan banane aur unhe taaza rakhne padte hain. Pehle ek test set chahiye, nahi toh koi nahi bata sakta ki tuning ne madad ki, aur woh kabhi un udaharanon jaisa nahi hona chahiye jinse model ne seekha. Har baar jab base model retire hota hai tuning dobara karni padti hai. Aur sudhaar ek provider ke system ke andar rehta hai, instructions aur index mein nahi, jo lock-in ka ek roop hai.

Mr. Bhatia ne poochha ki kya jawaab na hai. Woh "abhi nahi" hai, usne kaha, is kram mein: instructions, phir saboot, phir ek chhota model, phir fine-tuning. Agar pehle teen ke baad bhi "ji" wale naam fail hote hain, toh team model ko sikhayegi, aur woh jaanegi, kyunki uske paas ek key hai.

Chhota model woh vikalp tha jis par Anaya ne bahut kam socha tha, aur Imran use sabse zyada maayne rakhne wala maanta tha. Ek sasta, tez, sankra model jo andar chalta hai, aksar aise feature ka arthshaastra tay karta hai jisme maatra zyada ho aur kaam sankra ho, aur chhote messages mein naam dhoondhna bilkul aisa hi kaam tha.

## Saaraansh

Jab koi woh bechne ka prastaav rakhta hai jo team bana sakti thi, toh na daam faisla karta hai na demonstration. Vendor ke product ko team ki apni answer key par naapna faisla karta hai, aur chaar sawaal bhi: kya yeh product ke kaam ka kendra hai, ise kitni baar badalna padega, jab yeh tootega toh kaun jaaga hoga, aur ise chhodne mein kya lagega.

- Achha jawaab aksar plumbing khareedna aur product ko alag banane wala hissa khud banana hota hai, un wajahon ko, tareekh ke saath, likhkar jo faisla palat denge.
- AI value chain ke upar model shayad hi phayda hota hai. Anokha data, workflow aur bharosa hota hai.
- Open-weight model company ki apni machines par chalaya ja sakta hai. Lock-in ek keemat hai jise naapna chahiye.
- Jab model kam pade, toh failure ki chaar kismon mein antar karna padta hai. Fine-tuning behaviour sikhati hai, tathya nahi, instructions, saboot aur ek chhote model ke baad aati hai, aur use ek alag test set chahiye.
