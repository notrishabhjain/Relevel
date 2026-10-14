---
title: Galat Jawaab Ke Liye Design
summary: 90 percent accuracy par das mein se ek jawaab galat hota hai, aur us jawaab par screen kya karti hai, yahi tay karta hai ki log tool par bharosa karenge ya nahi. Phir ek pilot, jo fail hone ke liye bhi design kiya gaya tha, ek ajeeb result deta hai: system kaam karta hai aur kuch badalta nahi. Chapter mein refusals, pilots aur failure thresholds aate hain.
course: ch20 ch205
goals:
  - batana ki galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
  - aisa refusal design karna jo kisi insaan tak le jaaye, aur woh screen jo AI band hone par dikhe
  - ek pilot banana jisme ek maujooda business number, ek comparison group, ek failure threshold aur kaafi lamba window ho
  - sahi order mein samajhna ki pilot kaam karta hai lekin business number kyun nahi hilta
terms:
  - refusal | system ka saaf kehna ki woh yeh kaam nahi kar sakta, aur saath mein kisi insaan tak ka raasta dena; yeh jaanboojh kar design hota hai, qismat par nahi chhoda jaata | refusals
  - pilot | ek chhota, limited trial jo dikhane ke liye bana hai ki ek feature se business ko madad milti hai ya nahi, aur jo pehle hi bata deta hai ki kaun sa result failure maana jaayega | pilots
  - failure threshold | woh result, pilot shuru hone se pehle likha hua, jisse neeche aap use failure kahenge | 
---

August ke aakhri hafte mein Farah Sheikh chai ka cup liye glass room ke darwaaze par khadi hui aur ek sawaal poochha. Agar guard das mein se nau baar sahi hai, toh dasvi baar ke baare mein woh apni team ko kya bataye? Anaya is sawaal ka hafton se intezaar kar rahi thi. Yahi woh sawaal hai jo tay karta hai ki tool use hoga ya nahi.

90 percent par das mein se ek jawaab galat hota hai. Kitni bhi engineering ho, woh aakhri dasva hissa nahi hatta. Isliye jab tool galat ho, tab screen kya karti hai, yahi tay karta hai ki log us par bharosa karenge ya use chhod denge. Yeh engineering ka faisla nahi hai. Engineer bata sakta hai ki confidence score maujood hai. Lekin score kam ho toh agent ko kya dikhega, yeh product owner tay karta hai.

## Case: dasva jawaab

Anaya ne April mein agent ki screen kaagaz par banayi thi. Usne use phir banaya, ab tak jo seekha tha uske saath. Is baar woh chaar cheezon par aa ke tiki.

Table padhte waqt har row se ek hi cheez poochhiye: agent ko screen par kya dikhega?

Table: Galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
| Principle | Matlab | Guard mein |
| --- | --- | --- |
| Aisa evidence dikhao jo khule | Sirf ek dava bas "bharosa karo" ki maang hai. Jis dave ko padhne wala ek second mein check kar le, woh evidence hai | "1 detail hidden. Click to see why" wala note bilkul wahi words kholta hai jo chhupaye gaye the, wajah ke saath. Isi liye form mein quotation zaroori tha |
| Speed ke baare mein sochiye | Aadha faisla khatarnak hota hai, isliye faisla stream nahi ho sakta | Jab tak guard khatam nahi hua, agent ki screen par kuch nahi aaya. Jo number dikhe aur phir badal jaaye, woh spinner se bhi bura hai |
| Confidence ko parde ke peeche use kijiye | Jawaab ke saath percentage dikhana agent se aisi cheez judge karwana hai jise woh calibrate nahi kar sakta, aur machine ka apna confidence aksar kharab calibrated hota hai | High confidence: chhupa do aur bata do. Beech wala: chhupa do, "safe rehne ke liye chhupaya" kaho aur baad mein kisi insaan ke paas bhej do. Bahut kam: text ko mat chhedo, lekin message ko review ke liye mark karo |
| Sudhaarna tez banaiye | Tool galat ho toh agent jo karta hai, woh building ka sabse keemti data hai, aur zyadatar products use phenk dete hain | Ek click aur ek line. Button sirf is chat ke liye original dikhata hai, poochhta hai ki agent ko kya expect tha, aur sawaal, evidence aur jawaab teeno ek saath record karta hai |

Agar sudhaarne mein haath se kaam karne se zyada time lage, toh koi sudhaarega nahi. Aur tab khaali feedback table dekh kar lagega ki sab khush hain. Thumbs-down team ko sirf itna batata hai ki kuch galat tha. Sudhaara hua record batata hai ki jawaab kya hona chahiye tha. Woh ek test case hai, jo Farah ki team ne muft mein likh diya.

Farah ne phir poochha ki dasve ke baare mein kya kahe. Anaya ka jawaab yeh tha. Kuch jawaabon ke baare mein guard saaf dikhega ki woh unsure hai, aur batayega kyun. Use sudhaarna agent ke akele kaam karne se tez hoga. Aur jo galat jawaab agent kabhi dekhenge hi nahi, unhe doosre tareeke se dhoondha jaayega.

## Jab woh nahi kar sakta, tab kya kehta hai

Ek screen se Anaya bachti aa rahi thi, aur usne ek Tuesday use design karne mein lagaya. Har system tab achha dikhta hai jab woh kaam kar raha ho. Bharosa us screen par banta hai jo kehti hai "main nahi kar sakta", aur bahut se products use sabse aakhir mein design karte hain, ya kabhi nahi.

Guard ke liye, **refusal** un lamhon ko cover karta hai jab woh yeh kaam safely nahi kar sakta. Maan lijiye ek customer free chat mein Aadhaar card ki photograph attach karta hai. Guard abhi tasveer ke andar ka number kaala nahi kar sakta. Imaandaar design yeh tha ki dikhawa na kiya jaaye. Chat teeno languages mein kahegi, Farah ke likhe aur Lakshmi ke approve kiye words mein: please yahan identity cards share mat kijiye; secure upload use kijiye, ya kisi insaan se baat karne ke liye yeh button dabaiye.

::: key Jo refusal insaan tak le jaaye, woh bharosa kamata hai
Jo refusal kisi insaan tak ka raasta deta hai, woh us system se zyada bharosa kamata hai jo hamesha kuch na kuch bana deta hai. Kyunki users system ko is se bhi judge karte hain ki woh kya mana karta hai. Jo feature kabhi mana nahi karta, woh unhe sikhata hai ki uske confidence ka koi matlab nahi.
:::

Aakhri screen tab ki thi jab machine band ho. Anaya safe mode pehle hi bana chuki thi. Ab usne design kiya ki agents ko woh mode on hone par kya dikhega: upar ek patli peeli patti, jis par likha "Safe mode: names and addresses are not being hidden". Agar machine band karne par screen khaali ho jaaye, toh switch bas ek failure ko doosre se badal dega.

## Ek test jo fail ho sakta tha

Mahine ke ant tak screens taiyaar thi, aur Lakshmi ne pilot maanga. Use launch nahi chahiye tha. Use test chahiye tha, aur woh chahti thi ki Anaya pehle hi bata de ki use kya nirash karega.

Ab tak team ne jo kuch naapa tha, woh system ke baare mein tha. Kya finder sahi tha? Kya judge par bharosa kiya ja sakta tha? Kya sorter har box mein kaam karta tha? In mein se kisi ne us sawaal ka jawaab nahi diya jo tay karta hai ki agli quarter ka paisa milega ya nahi: kya feature se business ko madad mili? Ek system 94 percent accurate ho sakta hai aur phir bhi kuch nahi badalta. Ho sakta hai koi use hi na kare. Ya jis step ko woh tez karta hai, woh kabhi slow hissa tha hi nahi.

Isliye pehla kaam slow hissa dhoondhna tha. Anaya aur Farah ne support office mein ek hafte ka kaam time kiya, bina kuch badle. Agents ne identity numbers par lagbhag koi time nahi lagaya. Na padha, na copy kiya, na parwaah ki.

Jo slow tha, aur jisse Lakshmi ko chinta thi, woh kahin aur tha. Har mahine woh ek privacy sweep chalati thi. Logs se paanch sau chats ki ek spot check leti thi aur ginti thi ki kitnon mein abhi bhi koi unhidden identity number hai. July mein paanch sau mein se chhiyaalis mein tha.

Ek **pilot** chaar faislon par tikta hai.

Table: Pilot ke chaar faisle
| Faisla | Matlab | Sahaj ka chunaav |
| --- | --- | --- |
| Number | Ek aisa measure jise business pehle se track karta hai, is mauke ke liye banaya hua metric nahi | Sweep count |
| Comparison | Wahi team pehle aur baad mein, kamzor evidence hai. Do comparable groups ek hi dauraan, bahut mazboot | Ek hi chatbot par do support teams: Pune guard ke saath, Nashik bina guard ke |
| Failure threshold | Woh result jisse neeche pilot ko failure kaha jaayega, shuru hone se pehle likha hua | Chaar hafte baad, agar Pune ka sweep count Nashik ke count ka kam se kam aadha nahi hai, ya agar Pune ke agents das mein se do se zyada chats mein guard band kar dete hain, toh pilot fail hua. Ek guardrail: agent handling time paanch percent se zyada nahi badhna chahiye |
| Time window | Itna lamba ki novelty khatam ho jaaye, kyunki har naya tool apne pehle pakhwade mein asli se behtar dikhta hai | Chhe hafte |

Lakshmi ne page padha. Sign karne ki jagah usne use wapas diya aur ek line aur maangi. Agar yeh kaam kare aur number na hile, toh aap mujhe kya bataoge?

## Jo pilot kaam kar gaya

Pilot September ki pehli tareekh ko shuru hua. Doosre hafte ke ant tak Anaya dashboard ko aise ehsaas ke saath padh rahi thi jis par use bharosa nahi tha. Guard kaam kar raha tha. Pune mein woh roz chaalis se pachaas details chhupa raha tha. Button kam hi dabaya jaata tha. Answer key ke against scoreboard ab tak ke sabse achhe par tha, aur handling time flat tha.

Lakshmi ne pakka karne ke liye sweep jaldi chalaya. Pune mein paanch sau mein ikatalees, Nashik mein tentalees. Kuch nahi badla tha.

Anaya ne un do numbers ko ek lambe minute tak dekha. System kaam karta tha. Business number nahi hila tha. Aur use pehle hi bataya gaya tha ki yeh ho sakta hai. Is field ka sabse bhatkane wala result yahi hai. Instinct hamesha yahi kehta hai ki wapas jaake system ko aur sudharo, kyunki teams wahi naap sakti hain.

Usne apne ko roka. Lakshmi ki jodi hui line page par thi. Uske neeche Anaya ne teen sawaal likhe the, us order mein jisme tajurba kehta hai ki jawaab milne ki sabse zyada sambhavna hai.

Table: Jab kaam karta hai par number nahi hilta, tab teen sawaal
| Order | Sawaal | Sahaj mein result |
| --- | --- | --- |
| 1 | Kya log ise use kar rahe hain? Kam adoption sabse aam wajah hai aur check karna sabse aasaan | Haan, guard har chat par chal raha tha |
| 2 | Kya iska output us jagah tak pahunchta hai jahan faisla hota hai? | Gyarah minute mein jawaab mila, neeche dekhiye |
| 3 | Jis step ko tez kiya gaya, kya woh critical path par tha bhi? | Zaroorat nahi padi |

Doosre sawaal mein use gyarah minute lage. Usne Imran se poochha ki sweep apne paanch sau chats kahan se leta hai. Imran ne bhaunhein sikodi, ek diagram kholi aur chup ho gaya.

Raat ka job raw table se copy karta tha, jo guard se pehle se maujood tha. Guard un messages ko saaf karta tha jo agents dekhte the, aur aage bheji jaane wali history ko. Lekin sweep jo logs padhta tha, woh original messages se bane the, jo guard ke chalne se pehle likhe gaye the. Us table ko kisi ne chhua nahi tha. Guard har cheez ko bacha raha tha, siwaye us ek jagah ke jahan Lakshmi dekhti thi.

"Store karne se pehle saaf karo," Anaya ne kaha. "Yeh maine April mein likha tha." Imran ne kaha, tumne yeh history ke liye likha tha, aur maine ise log par lagaya nahi.

Guard ko raw table ke aage le jaane mein use do din lage. Teesre hafte mein Pune ka sweep count paanch sau mein nau par aa gaya, jabki Nashik ka bayaalis par raha. Yeh dekhne ke baad Anaya corridor mein bahut der khadi rahi. Uske paas ek number tha, aur woh hila tha. Woh isliye hila kyunki usne ek aisa test likha tha jo fail ho sakta tha, aur jab woh fail hua toh usne use maanne par zid ki.

## Saaraansh

90 percent accuracy par das mein se ek jawaab galat hota hai, aur us par screen kya karegi, yeh product owner tay karta hai.

- Chaar cheezein zaroori hain. Aisa evidence dikhao jo khule. Speed ke baare mein socho. Confidence ko screen par number ki tarah nahi, behaviour chunne ke liye andar use karo. Aur sudhaarna haath se karne se tez banao.
- Refusal ek jaanboojh kar design ki gayi screen hai, jo kisi insaan ke raaste par khatam hoti hai. AI band hone par dikhne wali screen bhi waise hi design hoti hai.
- Yeh jaanne ke liye ki system se business ko madad milti hai ya nahi, pehle slow hissa dhoondhiye. Phir ek pilot chalaiye jisme ek aisa number ho jise business pehle se track karta hai, ek comparison group, pehle se likhi failure threshold, aur itna lamba window ki novelty khatam ho jaaye.
- Jab kaam karta hai par number nahi hilta, toh order mein poochhiye: kya use hota hai, kya uska output wahan tak pahunchta hai jahan faisla hota hai, aur kya wahi step slow tha?
