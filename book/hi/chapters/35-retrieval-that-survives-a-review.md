---
title: Review Mein Tikne Wala Retrieval
summary: Prototype isliye chalta hai kyunki aapne har document khud chuna hai aur aap hi uske akele user hain. Production dono aaraam cheen leta hai. Ek aisi review mein, jisme baithe log chahte hain ki chatbot fail ho, retrieval system ke chaar sawaal lagaye jaate hain. Chapter mein ingestion, parsers, access control aur abstention aate hain.
course: ch11r
goals:
  - retrieval system par chaar sawaal lagana: sahi padha gaya, user ko dekhne ki ijaazat, sahi tukda mila, aur source tak trace ho sakta hai
  - samjhana ki ingestion mein jo kho jaata hai woh hamesha ke liye kho jaata hai, aur parser kaise chupchaap table bigaad sakta hai
  - access control ko labels aur application ke filters se lagana, aur jaanboojh kar tay karna ki wapas liya hua document kitni jaldi gayab ho
  - abstention ko product behaviour ki tarah design karna, aur aise citations maangna jo source kholte hain
terms:
  - ingestion | documents ko system mein padhne ka step, jisme unhe scan karna, parse karna aur tukdon mein todna shamil hai; yahan jo kuch kho gaya, woh hamesha ke liye kho gaya | 
  - parser | woh program jo kisi file, jaise PDF, ko text aur structure mein badalta hai; uski galtiyan uske baad ki har cheez ko dikhti hi nahi | parsers
  - access control | rules jo tay karte hain ki kaun sa user kaun sa document ya chunk dekh sakta hai, jo application aur data layer mein lagu hote hain, model ke bharose nahi chhode jaate | access label, access labels
  - abstention | system ka jawaab na dene ka faisla karna, aur yeh saaf kehna, jab uske paas evidence nahi hai; yeh product behaviour hai jise design karna padta hai, instruction mein likha ek sentence nahi | abstain
---

Review doosri manzil ke bade kamre mein hui. Gyarah log aaye, aur biscuits ki ek plate bhi. Lakshmi Iyer ne yeh bulayi thi. Chatbot do saal se Imran Qureshi ka project tha, aur ab woh kuch aur banne wala tha.

Abhi tak woh ek lender ke products ko ek hi tareeke se serve karta tha. November mein Sahaj do aur lenders ko serve karne wala tha. Har ek ki apni terms aur rates thi, aur har ek ne likhit assurance maangi ki uske customers ke sawaalon ka jawaab sirf uske apne documents se diya jaayega, kisi aur ke nahi. Ek mahine pehle Anaya ne poochha tha ki kya chatbot ki search ko production-ready kaha ja sakta hai, aur use haan kaha gaya tha. Lekin yeh nahi bataya gaya tha ki kis aadhaar par.

Lakshmi ne ek statement se shuru kiya. Prototype isliye chalta hai kyunki aapne har document khud chuna hai aur aap hi akele user hain. Production dono aaraam cheen leta hai. Woh jaanna chahti thi ki phir bachta kya hai.

## Case: ek slide par chaar sawaal

Imran ne ek slide dikhayi jisme chaar sawaal the. Kya humne document sahi padha? Kya yeh user ise dekh sakta hai? Kya humne sahi tukda dhoondha? Aur kya hum dikha sakte hain ki jawaab kahan se aaya? Retrieval system mein chinta ki bahut si cheezein hoti hain, aur har ek in chaar mein se kisi ek ke andar aati hai.

Table ka aakhri column dikhata hai ki is chapter mein baad mein har sawaal ka hal kahan hua.

Table: Chaar sawaal
| Sawaal | Yeh kya check karta hai | Is chapter mein hal kahan hua |
| --- | --- | --- |
| Kya humne document sahi padha? | Documents ko andar padhne wala step | Parser ne rate card ko flatten kar diya |
| Kya yeh user ise dekh sakta hai? | Kaun sa tukda kaun dekh sakta hai | Access control aur wapas liya hua document |
| Kya humne sahi tukda dhoondha? | Search | Exact aur meaning-based search saath mein, rewriting, abstention |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Jawaab se page tak ka raasta | Citations jo khulte hain |

## Kya humne sahi padha?

Chain mein saat kadiyan hain. Documents andar padhe jaate hain, tode jaate hain, label hote hain aur meaning ke maps mein badle jaate hain. Phir unhe search kiya jaata hai, jo mila usse ek request banti hai, aur jawaab check hota hai. Har kadi ko tune kiya ja sakta hai. Isliye jab quality gire aur code na badla ho, toh har kadi par shak hota hai.

Pehli kadi par Imran ko sabse kam bharosa tha, aur usne wajah ek sentence mein di. Documents andar padhte waqt jo kho jaata hai, woh hamesha ke liye kho jaata hai.

**Ingestion** documents ko system mein padhne ka step hai. Isme unhe scan karna shamil hai, ek **parser** se guzaarna jo file ko text aur structure mein badalta hai, aur unhe tukdon mein todna. Behtar search us table ko wapas nahi la sakti jise parser ne flatten kar diya, ya us page ko jo woh chhod gaya. Galti baad ki har kadi ko dikhti nahi, kyunki parser ke baad kisi ko original dikhta hi nahi.

Imran ne wahi kiya tha jo Anaya se kabhi karne ko kaha gaya tha, aur jo use pasand nahi aaya tha. Usne partner documents mein se teen liye aur nikala hua text us ke bagal mein rakha jo ek insaan ko dikhta hai. Pehle do theek the. Teesra ek rate card tha, ek table jisme loan amount aur term ke hisaab se rates ke chaar columns the. Parser ne use numbers ki ek akeli line ki tarah padha tha.

::: watch Har figure bach gaya, koi rishta nahi bacha
Is system se poochhiye ki do lakh rupaye ke chaar saal ke loan ka rate kya hai, aur woh us line mein kahin se ek number utha lega aur poore yakeen ke saath bol dega. Kuch bhi use pakad nahi paata, kyunki har hissa kehta ki sab theek hai. Imran ne parser theek kiya taaki woh tables ko tables ki tarah padhe, aur ek check joda jo output mein figures ki ginti ko page par figures ki ginti se milata hai. Har project ke liye uski seekh yeh thi: jab retrieval kharab ho, toh meaning ke maps ko dosh dene se pehle parser ki quality ke baare mein poochhiye.
:::

## Kya yeh user ise dekh sakta hai?

Yeh Lakshmi ka sawaal tha. Usne kaha, jo sahi jawaab aise document se liya gaya ho jo user ko padhna hi nahi chahiye tha, woh phir bhi security failure hai.

Imran ne use badlaav dikhaya. Text ke har tukde par ab ek label tha, aisi identity ke saath jo badalti nahi. Label mein document, version, section, language, aur woh tareekh jab se woh lagu tha, yeh sab hota tha. Is autumn ek cheez aur judi: kaun ise dekh sakta hai. Yeh partner one ho sakta tha, partner two, saare customers, ya sirf staff.

Yeh hai **access control**. Imran ne jis baat ko do baar dohraya, woh yeh thi ki yeh rehta kahan hai. Yeh instruction ka sentence nahi ho sakta, jaise "sirf is lender ke documents se jawaab do". Instruction ek request hai, aur model use maane ya na maane. Yeh application mein ek filter hona chahiye, jo kisi bhi search se pehle lagta hai. Tab pehle lender ka customer doosre lender ke text ke kisi tukde tak pahunch hi nahi sakta, naam leke maangne par bhi nahi.

Uske paas ek test tha. Partner one ke ek customer ne, pehle tameez se aur phir rukhai se, partner two ka interest rate poochha. Chatbot ne kaha ki woh madad nahi kar sakta. Phir usne test user ko aisi role mein badla jiske paas koi access nahi tha, aur partner one ka rate poochha. Chatbot ne kaha ki kuch available nahi hai.

Doosre result par kisi ko shak nahi tha. Pehla utna zaroori nahi tha jitna dikhta tha. Zaroori yeh tha ki tukda kabhi pahunch ke andar tha hi nahi.

### Freshness

Lakshmi ka agla mudda freshness tha. Usne kaha, aaj subah dus baje partner two ne ek document wapas le liya. Ab kya hota hai? Imran ne kaha, document source folder se hata diya jaata hai. Kab tak, usne poochha? Raat ka rebuild use ek baje nikaalta hai. Toh dus baje se ek baje tak woh abhi bhi quote hota hai. "Yeh ek faisla hai," Lakshmi ne kaha. "Behtar hoga ki aap ise jaanboojh kar lein."

Table: Wapas liya hua document, pehle aur baad
| | Pehle | Baad mein |
| --- | --- | --- |
| Hatana kaise hota hai | Raat ka rebuild ise subah ek baje hatata hai | Source hatate hi document ke tukde store se turant delete ho jaate hain. Raat ka rebuild ek check hai, tareeka nahi |
| Window | Lagbhag pandrah ghante | Lagbhag ek minute |
| Recovery | Koi nahi | Har rebuild ek snapshot rakhta hai, isliye kharab rebuild minuton mein palta ja sakta hai |

## Kya humne sahi tukda dhoondha?

Teesre sawaal mein sabse zyada techniques thi. Imran ne unhe jaldi se dohraya, kyunki kamre ke zyadatar log unse mil chuke the.

Keyword search identifiers, names, codes aur exact phrases ke liye ab bhi keemti hai. Jo team ise isliye chhod de kyunki meaning-based search fashion mein hai, woh ek mazboot signal phenk deti hai. Meaning-based search tab madad karta hai jab wording alag ho, aur dono ko saath chalana sabse achha sabit hua tha. Cutting rule is baat ka andaaza hai ki users ko evidence ki kaun si unit chahiye hogi. Isliye use aise sawaal par test karna chahiye jiska jawaab ek boundary paar kare.

Reranking results ka order behtar karta hai, time aur paise ki keemat par. Iska rule yeh tha: das candidates laao aur unhe dobara score karo. Phir dekho ki das par recall aur top teen par precision itne badhe ki extra kharcha jaayaz ho. Koi step isliye nahi jodna chahiye ki kisi reference diagram mein hai. Use saabit karna chahiye.

Do cheezein Anaya ke liye zyada nayi thi. Pehli, search se pehle sawaal ko dobara likha ja sakta hai, kisi dhundhle sawaal se saaf aur explicit sawaal mein. Yeh theek hai, jab tak rewriting customer ke matlab ko nahi badalti. Imran ne ek example dikhaya jisme badal gaya tha. Ek customer ne "late charge" ke baare mein poochha, aur sawaal "late fee" ban gaya, jo partner ki terms mein ek alag cheez thi.

Doosri thi **abstention**, jise usne sabse aakhir mein rakha tha. Ek system abstain karta hai jab woh jawaab na dene ka faisla karta hai, aur yeh kehta hai, kyunki uske paas evidence nahi hai. Imran ne ise product behaviour bataya, instruction mein likha sentence nahi. Jab jawaab documents mein hai hi nahi, toh chatbot kya karta hai? Kya woh customer se poochhta hai ki uska matlab kya tha? Ya kehta hai ki use nahi pata, aur kisi insaan ka option deta hai?

Usne Farah ke saath ise doosre tareeke se design kiya tha, teen languages mein. Jawaab na dene ka rule ek number tha. Use aise sawaalon se test kiya gaya tha jinka koi jawaab nahi tha, jo pehle ki searches kabhi nahi kar paayi thi.

## Kya hum dikha sakte hain ki jawaab kahan se aaya?

Aakhri sawaal sabse chhota tha. Har jawaab ke saath us tukde ki identity thi jisse woh likha gaya, uska document, version aur section ke saath. Link page kholta tha. Agar page jawaab ko support nahi karta, toh check karne wala insaan ek pal mein dekh leta. Jo citation document ka naam batati hai par use kholti nahi, woh kuch na hone se bhi bura hai, kyunki woh checkable lagti hai aur hoti nahi.

## Aur guard

Review shaam ko chhe bajkar dus minute par khatam hui, aur biscuits khatam ho chuke the. Lakshmi ne kaha ki woh Friday ko apni report likhegi. Woh hostile nahi hogi, usne kaha, lekin usme do cheezon par kaam karna padega.

Apni desk ki taraf jaate hue Anaya ne khud se poochha ki kya yeh chaar sawaal uspar bhi lagte hain jo woh bana rahi hai. Jawaab bina koshish ke aa gaya.

Table: Guard par chaar sawaal
| Sawaal | Guard mein |
| --- | --- |
| Kya humne sahi padha? | Scanned cards aur unke look-alike characters |
| Kya yeh user ise dekh sakta hai? | Agents aur restore button: original kaun dekh sakta hai, kitni der tak, aur kise bataya jaata hai |
| Kya humne sahi tukda dhoondha? | Finder aur judge, aur woh answer key jisne unhe naapa |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Har faisle ka record, us code ke saath jisne faisla kiya |

Yeh wahi chaar sawaal the. Use shak tha ki woh uski baaki kaam-kaaji zindagi mein lautenge, alag order mein aur alag kapde pehne hue.

## Saaraansh

Prototype isliye chalta hai kyunki banane wale ne har document chuna hai aur woh akela user hai. Production dono cheen leta hai, aur chaar sawaal lagbhag har chinta ko cover karte hain.

- Kya documents sahi padhe gaye? Ingestion mein jo kho gaya, jaise parser ne flatten kiya hua table, woh hamesha ke liye kho gaya aur baad ki har cheez ko dikhta nahi.
- Kya yeh user jo mila use dekh sakta hai? Yeh application ke labels aur filters se lagu karna hai, model se poochh kar nahi. Iska matlab yeh bhi hai ki jaanboojh kar tay karna ki wapas liya hua document kitni jaldi gayab ho.
- Kya sahi tukda mila? Exact aur meaning-based search ko milaiye, cutting rule test kijiye, kisi bhi re-ordering step ki value saabit kijiye, aur design kijiye ki jawaab na ho toh system kya karta hai.
- Kya jawaab ko us exact page tak trace kiya ja sakta hai jahan se woh aaya?
