---
title: Banao, Kharido Ya Sikhao
summary: Ek vendor team ko woh bechne aaya jo team ne chhe mahine mein khud banaya hai, aur ek founder ne suggest kiya ki apna model hi train kar lo. Dono idea samajhdaar lagte hain, aur dono ko ek hi test paas karna hai. Chapter mein AI value chain, open-weight models, fine-tuning aur lock-in samjhenge.
course: ch185 ch19
goals:
  - vendor ke dave ko parakhna, uske product ko apni answer key par chala kar
  - chaar sawaalon se tay karna ki banana hai ya kharidna, aur woh shartein likhna jo faisla palat dengi
  - AI value chain ki layers batana, aur yeh ki product ka advantage kahan hota hai
  - failures ko chaar kism mein baantna, aur samjhana ki fine-tuning behaviour sikhati hai, facts nahi
terms:
  - AI value chain | un layers ka silsila jin par ek AI product bana hota hai: infrastructure, models, tooling aur sabse upar woh applications jo log use karte hain; har layer ka advantage kisi alag cheez se aata hai | value chain
  - open-weight model | aisa model jiske weights publish kiye gaye hain, taaki aap use download karke apne computers par chala sakein, kisi aur ka model call karne ke bajaay | open-weight models, open-weight
  - fine-tuning | model ko aapke apne examples par aur train karna, taaki woh ek jaise tareeke se behave kare; yeh behaviour sikhata hai, facts nahi | fine-tune, fine-tuned
  - lock-in | ek hi provider se bandh jaana, kyunki chhodna bahut mehnga padega: dobara likhna, dobara naapna, ya features kho dena | 
---

August ke teesre hafte mein VaultLeaf naam ke ek vendor ne Sahaj mein do log bheje: ek salesman aur ek engineer. Imran Qureshi ne kaha, do logon ka aana achha sanket hai. Lakshmi Iyer ne kaha, balki yeh bura sanket hai.

VaultLeaf aisa software bechta tha jo text mein personal data dhoondh kar chhupa deta hai, aur woh banks ko bechta tha. Pitch bahut polished thi. Graphs wala ek console tha, aur slide par ek certificate. Vaada tha ki teen hafte mein Sahaj mein chalne lagega, 99 percent accuracy ke saath.

Anaya ne poochha ki yeh 99 percent kis cheez ke against naapa gaya hai. Engineer ko lag raha tha ki yeh sawaal aayega. Usne bataya, VaultLeaf ke apne benchmark ke against. Toh Anaya ne poochha, kya Sahaj product ko apne benchmark par chala kar dekh sakta hai?

## Case: sab ke liye ek hi test

Jab koi aapko woh bechne aaye jo aapki team khud bana sakti hai, toh sabse pehle yahi karna chahiye. Aur yahi cheez zyadatar khareedne wale chhod dete hain. Baat aam taur par price aur demonstration par ghoomti hai, aur in dono se faisla nahi hota. Faisla is se hota hai ki vendor ke product ko waise hi naapa jaaye jaise aap apna naapte: apni answer key par, apne tarah ke text par.

VaultLeaf 204 rows chalane ko maan gaya. Lekin us tareeke se jisse lagta tha ki woh yeh aksar nahi karta. Ek hafte baad figures aaye.

English identity numbers par woh bahut achha tha, guard se thoda behtar. Hinglish names par, jis cheez ke liye guard bana tha, woh 100 mein 62 pakad paaya. Devanagari script mein Hindi par aur kharab tha, aur shabdon mein likhe number ko sambhalne ka uske paas koi tareeka nahi tha. Salesman ko hairani nahi hui. Usne kaha ki company ke zyadatar customers English-first hain. Anaya ne kaha, Sahaj ke nahi hain.

Reply mein ek doosra jawaab bhi tha, jise Lakshmi ne teen baar padha. Standard product text ko VaultLeaf ke cloud par process karne bhejta tha, India ke bahar ke ek region mein. Ek private deployment, jo Sahaj ke apne systems ke andar chalti, available thi, lagbhag teen guna price par.

## Aap asal mein kya khareed rahe hain

Imran shaant raha. Usne kaha, vendor theek hai, bas sabko pata ho ki paise kis cheez ke hain. Aap model shayad hi khareedte hain, kyunki zyadatar vendors wahi models use karte hain. Aap connectors khareedte hain, permissions, kisne kya kiya uska record, ek support contract, aur ek insaan jo raat ke do baje utha jab kuch toot jaaye. Yeh aakhri cheez aksar licence se zyada keemti hoti hai. Aur aksar hisaab se bahar rakh di jaati hai.

Usne board par chaar sawaal likhe. Uske tajurbe mein, faisla inhi se hota hai.

Table: Build ya buy ke chaar sawaal, aur Sahaj ke jawaab
| Sawaal | Sahaj ka jawaab |
| --- | --- |
| Product isi kaam ke liye hai, ya yeh plumbing hai? | Hinglish mein personal details dhoondhna poore case ki neev hai, isliye Sahaj ko isse apna rakhna chahiye |
| Ise kitni baar badalna padega? | Lagatar, kyunki answer key har hafte badhti hai aur failures asli customers se aati hain |
| Raat ke do baje kaun jaaga hoga? | Abhi tak koi nahi. Koi plan tha hi nahi, jise jaanna zaroori tha |
| Vendor bik jaaye ya band ho jaaye toh kya hoga? | VaultLeaf mein koi nahi bata paya ki chhodne mein kya lagega |

Phir team ne ek sheet par do saal ke estimates banaye. Private deployment kharidna lagbhag ₹58 lakh aaya. Guard ko banana aur chalana lagbhag ₹71 lakh. Farq itna chhota tha ki dono taraf bahas ho sakti thi, isliye hisaab ne faisla nahi kiya. Imran ke rule ne kiya: plumbing kharido, aur woh hissa banao jo product ko alag banata hai.

Plan yeh bana ki finder, answer key aur scoreboard khud banenge. Sirf commodity cheezein kiraye par lenge: India ke ek region mein models ki hosting, aur logs ke liye ek off-the-shelf console. Kuch bhi sign karne se pehle Anaya ne woh likha jo likhna usne seekha tha.

::: example Ek date wala faisla
Main kharidne par tab aaungi agar VaultLeaf hamari key par Hinglish names mein 90 tak pahunch jaaye, ya agar upkeep ka bojh ek insaan par uske time ke ek paanchve hisse se zyada pade. Main aur zyada banane ki taraf tab jaungi agar agle tier par price badhe. Review 1 December ko.
:::

Usne dekha tha ki jis faisle par date likhi ho, use palatna us se bahut aasaan hai jis par nahi likhi.

## Product ke neeche kya hai

Wapas chalte hue Anaya ne Imran se woh sawaal poochha jo woh March se dil mein liye ghoom rahi thi. Kya hum un logon se muqabla kar rahe hain jo bade models banate hain? Imran mithai ki dukaan ke saamne ruk gaya. Phir usne dukaan ke malik se pen udhaar liya aur ek invoice ke peeche jawaab bana diya.

AI products layers mein bante hain, aur har layer neeche wali par tiki hoti hai. Poore stack ko **AI value chain** kehte hain. Har layer ka advantage kisi alag cheez se aata hai.

Table: AI value chain ki layers
| Layer | Yeh kya hai | Advantage kahan se aata hai |
| --- | --- | --- |
| Infrastructure | Computers, chips aur cloud | Scale aur paisa |
| Models | Kuch un companies ke jo access bechti hain, kuch openly released | Scale aur paisa |
| Tooling | Meaning ke maps ke stores, testing aur tracking ke instruments | Scale aur paisa, aur use karne mein aasaani |
| Applications | Jo log asal mein use karte hain | Workflow, data aur bharosa |

Imran ne kaha, zyadatar teams sabse upar rehti hain. Aur upar model advantage nahi hota, kyunki competitors wahi model usi darwaze se call kar sakte hain. Jo copy karna mushkil hai, woh yeh hai ki product kisi ke kaam mein kitna gehra utra hua hai, aur woh data jo kisi aur ke paas nahi.

Anaya ne corrections ka example liya. Jab bhi Farah ka koi agent "guard ne woh chhupa diya jo mujhe chahiye tha" dabata hai, team ko kuch aisa pata chalta hai jo kisi competitor ko nahi pata. Lekin yeh tabhi sach hai jab data unique ho, product ko behtar banaye, aur mushkil se mile. Jis data advantage mein in teeno mein se koi ek kam ho, woh bas ek kahani hai.

Kuch models sabke liye khule hain. **Open-weight model** ke weights publish hote hain. Aap use download karke apne computers par chala sakte hain, kisi aur ka model call karne ke bajaay. Yeh models aam taur par sabse achhe closed models se thoda peeche hote hain. Badle mein, data kahan jaata hai aur cost kitni hai, is par aapka control zyada hota hai. Iski keemat aap hosting aur upkeep mein dete hain.

Jis company ne vaada kiya ho ki customer ka ek bhi sentence building ke bahar nahi jaayega, uske liye yeh chunaav aasaan tha. Isse Anaya ki specification ke margin wale sawaal ka jawaab bhi mil gaya. Saavdhaan judge ek open-weight model hoga, jo Sahaj ke apne servers par chalega.

Phir Imran ne ek shabd joda, jisne vendor ke office mein bahut wazan uthaya tha. **Lock-in** matlab ek hi provider se bandh jaana, kyunki chhodna bahut mehnga padega: dobara likhna, dobara naapna, ya features kho dena. Iska ilaaj answer key mein hai. Agar aapka test set kisi vendor par nirbhar nahi, toh switch karne mein kuch din lagte hain.

## Sikhaya jaaye

Monday ko founder, Mr. Bhatia, ne corridor mein Anaya ko roka. Unhone plane mein kuch padha tha. Company Hinglish par apna model train kyun nahi kar leti? Sab kar rahe hain, aur woh Sahaj ka apna hoga.

Har team se yeh poochha jaata hai, aksar planning meeting mein, aur aksar tab jab kisi ne abhi bataya bhi nahi ki galat kya hai. Haan kehne par ek poori quarter lag jaati hai. Na kehna unambitious lagta hai. Anaya ne Friday tak jawaab dene ka vaada kiya.

Is idea ka naam hai **fine-tuning**. Aap ek maujooda model lete hain aur use apne examples par aur train karte hain. Yeh aisa model paane ka seedha raasta lagta hai jo company ki duniya jaanta ho.

Anaya ke paas woh ek cheez thi jisse yeh sawaal suljh sakta tha: June ki ikatees failures ki list, unki counts ke saath. Usne har ek ko chaar kismon mein se ek mein daala. Chaar isliye, kyunki har kism ka ilaaj alag hota hai.

Table: Failure ki chaar kismein aur unke ilaaj
| Failure ki kism | Matlab | Sahaj ki count aur ilaaj |
| --- | --- | --- |
| Machine ko pata nahi | Jawaab missing hai, purana hai ya banaya hua hai | Ikatees mein se ek bhi nahi. Order numbers evidence ki problem the, jo lookup se suljhi |
| Pata hai, par behave galat karti hai | Content sahi hai lekin format ya rule galat hai | Woh aath naam jinke baad "ji" aata hai: machine ko yeh convention dikhayi hi nahi gayi thi, aur ek worked example ne zyadatar ek dopahar mein theek kar diye. Aadhe chhupe addresses bhi format ki problem the |
| Khud nikaal nahi paati | Kai steps, ya asli ambiguity | Lines mein toote hue numbers, jo cutting rule ki problem thi, machine ki nahi |
| Sahi hai par bahut mehngi | Jawaab sahi hai aur price galat | Abhi problem nahi |

Friday ko Mr. Bhatia ko uska jawaab yeh tha ki fine-tuning behaviour sikhati hai, facts nahi. Agar shikayat yeh hoti ki model Sahaj ki policy nahi jaanta, toh fine-tuning galat tool hota. Lekin Sahaj ki shikayatein behaviours ki thi. Aur team ne abhi sasta ilaaj try hi nahi kiya tha. Pehle do cheezein ghanton mein undo ho sakte the.

Usne woh costs bhi gini jo proposals chhod dete hain. Kisi ko examples banane padenge aur unhe current rakhna padega. Pehle ek test set chahiye, warna koi nahi bata sakta ki tuning se madad mili ya nahi, aur woh test set kabhi bhi un examples jaisa nahi hona chahiye jin se model ne seekha. Har baar base model retire hone par tuning dobara karni padegi. Aur sudhar ek hi provider ke system ke andar rehta hai, instructions aur index mein nahi. Yeh bhi lock-in ka ek roop hai.

Mr. Bhatia ne poochha, kya jawaab na hai? Anaya ne kaha, "abhi nahi", aur order bataya: pehle instructions, phir evidence, phir ek chhota model, phir fine-tuning. Agar "ji" wale naam pehle teen ke baad bhi fail hote rahe, toh team model ko sikhayegi. Aur use pata chal jaayega, kyunki uske paas key hai.

Chhota model woh option tha jis par usne bas halka sa socha tha. Imran ko lagta tha ki sabse zyada zaroori wahi ho sakta hai. Ek sasta, tez, narrow model, jo in-house chalta ho, aksar us feature ki economics tay kar deta hai jiska volume bada ho aur kaam narrow ho. Chhote messages mein naam dhoondhna bilkul aisa hi kaam tha.

## Saaraansh

Jab koi woh bechne aaye jo aapki team khud bana sakti hai, toh na price faisla karta hai na demonstration. Faisla is se hota hai ki vendor ke product ko apni answer key par naapa jaaye. Aur chaar sawaalon se: kya yeh product ke kaam ka core hai, ise kitni baar badalna padega, toote toh kaun jaagega, aur chhodne mein kya lagega?

- Aksar achha jawaab yeh hota hai ki plumbing kharido aur woh hissa banao jo product ko alag banata hai. Woh wajahein date ke saath likh lo jo faisla palat dengi.
- AI value chain ke upar model shayad hi advantage hota hai. Unique data, workflow aur bharosa hota hai.
- Open-weight model company ki apni machines par chalaya ja sakta hai. Lock-in ek cost hai, jise naapna chahiye.
- Jab model kam pade, toh failure ki chaar kismon ko alag pehchaniye. Fine-tuning behaviour sikhati hai, facts nahi. Woh instructions, evidence aur chhote model ke baad aati hai, aur use alag test set chahiye.
