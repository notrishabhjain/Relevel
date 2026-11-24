---
title: Review Mein Tikne Wala Retrieval
summary: Prototype isliye chalta hai kyunki aapne har document khud chuna hai aur aap hi uske akele user hain. Production dono aaraam cheen leta hai. Ek aisi review mein, jahan sab chahte hain ki chatbot fail ho, chaar sawaal puchhe jaate hain. Yeh har retrieval system par lagte hain. Chapter mein ingestion, parsers, access control aur abstention aate hain.
course: ch11r
goals:
  - kisi bhi retrieval system se chaar sawaal puchhna: sahi padha gaya, user ko dekhne ki ijaazat, sahi tukda mila, aur trace ho sakta hai
  - samajhna ki ingestion mein jo kho jaata hai woh hamesha ke liye kho jaata hai, aur parser chupchaap table kaise bigaad deta hai
  - har user ko sirf uske apne pages dena, application ke labels aur filters se, aur jaanboojh kar tay karna ki wapas liya hua document kitni jaldi gayab ho
  - abstention ko product behaviour ki tarah plan karna, aur aise citations maangna jo source kholte hain
terms:
  - ingestion | us clerk jaisa jo kagaz scan karke office computer mein daalta hai: documents ko system mein padhne ka step, jisme scan karna, parse karna aur tukdon mein todna shamil hai; yahan jo kho gaya, woh hamesha ke liye kho gaya | 
  - parser | photocopier jaisa program jo kisi file, jaise PDF, ko saade text aur structure mein badalta hai; uski galtiyan uske baad ki har cheez ko dikhti hi nahi | parsers
  - access control | har almari ke apne taale jaisa: rules jo tay karte hain ki kaun sa user kaun sa document ya chunk dekh sakta hai, jo application aur data layer mein lagte hain, model ke bharose nahi chhode jaate | access label, access labels
  - abstention | us student jaisa jo andaaza lagane ki jagah "mujhe nahi pata" likhta hai: system jawaab na dene ka faisla karta hai, aur yeh kehta hai, jab uske paas evidence nahi hai; yeh product behaviour hai jise design karna padta hai, instruction ka ek sentence nahi | abstain
---

Review doosri manzil ke bade kamre mein hui. Gyarah log aaye, aur biscuits ki ek plate bhi. Lakshmi Iyer ne yeh bulayi thi. Chatbot do saal se Imran Qureshi ka project tha. Ab woh kuch aur banne wala tha.

Abhi tak woh ek lender ke products serve karta tha, ek hi tareeke se. Lender woh company hai jo loan deti hai. November mein Sahaj do aur lenders ko serve karne wala tha. Har ek ki apni terms aur rates thi. Har ek ne likhit vaada maanga. Uske customers ke sawaalon ka jawaab sirf uske apne documents se aayega, kisi aur ke nahi.

Ek mahine pehle Anaya ne ek sawaal poochha tha. Kya chatbot ki search ko production-ready kaha ja sakta hai? Production matlab asli customers, test nahi. Use haan kaha gaya. Par kyun, yeh kisi ne nahi bataya.

Lakshmi ne ek sentence se shuru kiya. Prototype isliye chalta hai kyunki aapne har document khud chuna hai aur aap hi akele user hain. Production dono aaraam cheen leta hai. Woh jaanna chahti thi ki phir bachta kya hai.

## Case: ek slide par chaar sawaal

Dukaan ke inspector ki chhoti checklist jaisa sochiye. Imran ne ek slide dikhayi jisme chaar sawaal the. Kya humne document sahi padha? Kya yeh user ise dekh sakta hai? Kya humne sahi tukda dhoondha? Kya hum dikha sakte hain ki jawaab kahan se aaya? Retrieval system mein chinta ki bahut cheezein hoti hain. Har ek in chaar mein se kisi ek ke andar aati hai.

Table ka aakhri column dikhata hai ki is chapter mein har sawaal ka hal kahan hua.

Table: Chaar sawaal
| Sawaal | Yeh kya check karta hai | Is chapter mein hal kahan hua |
| --- | --- | --- |
| Kya humne document sahi padha? | Documents ko andar padhne wala step | Parser ne rate card ko flatten kar diya |
| Kya yeh user ise dekh sakta hai? | Kaun sa tukda kaun dekh sakta hai | Access control aur wapas liya hua document |
| Kya humne sahi tukda dhoondha? | Search | Exact aur meaning-based search saath mein, rewriting, abstention |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Jawaab se page tak ka raasta | Citations jo khulte hain |

## Kya humne sahi padha?

Chain mein saat kadiyan hain, cycle ki chain jaisi. Documents andar padhe jaate hain. Unhe tukdon mein todkar label lagaya jaata hai. Phir woh meaning ke maps mein badalte hain. Phir unhe search kiya jaata hai. Jo mila, usse ek request banti hai. Aakhir mein jawaab check hota hai. Har kadi ko tune kiya ja sakta hai. Isliye jab quality gire aur code na badla ho, toh har kadi par shak hota hai.

Pehli kadi par Imran ko sabse kam bharosa tha. Usne wajah ek sentence mein di. Documents andar padhte waqt jo kho jaata hai, woh hamesha ke liye kho jaata hai.

**Ingestion** documents ko system mein padhne ka step hai. Ek clerk jaisa sochiye jo kagaz scan karke office computer mein daalta hai. Isme scan karna aata hai. Isme ek **parser** se guzaarna aata hai, jo file ko text aur structure mein badalta hai. Isme tukdon mein todna bhi aata hai. Behtar search us table ko wapas nahi la sakti jise parser ne flatten kar diya. Woh us page ko bhi wapas nahi la sakti jo parser chhod gaya. Baad ki har kadi is galti se anjaan hai, kyunki parser ke baad kisi ko original dikhta hi nahi.

Imran ne wahi kiya jo Anaya se kabhi karne ko kaha gaya tha, aur jo use pasand nahi aaya tha. Usne partner ke teen documents liye. Parser ne jo text nikala, use us ke bagal mein rakha jo insaan page par dekhta hai.

Pehle do theek the. Teesra ek rate card tha. Yeh ek table hai jisme loan amount aur term ke hisaab se rates ke chaar columns the. Parser ne use numbers ki ek lambi line ki tarah padha tha.

::: watch Har figure bach gaya, koi rishta nahi bacha
System se poochhiye ki do lakh rupaye ke chaar saal ke loan ka rate kya hai. Woh us line mein kahin se ek number utha lega. Woh use poore yakeen ke saath bol dega. Kuch bhi use pakad nahi paata, kyunki har hissa kehta ki sab theek hai.

Imran ne parser theek kiya taaki woh tables ko tables ki tarah padhe. Phir ek check joda. Woh output mein figures ki ginti ko page par figures ki ginti se milata hai. Har project ke liye uski seekh yeh thi. Jab retrieval kharab ho, toh meaning ke maps ko dosh dene se pehle parser ke baare mein poochhiye.
:::

## Kya yeh user ise dekh sakta hai?

Yeh Lakshmi ka sawaal tha. Bank ke locker room jaisa sochiye. Har customer ke paas sirf apne locker ki chaabi hoti hai. Usne kaha ki jo sahi jawaab aise document se liya gaya ho jo user ko padhna hi nahi chahiye tha, woh phir bhi security failure hai.

Imran ne use badlaav dikhaya. Text ke har tukde par ab ek label tha. Label ki identity kabhi badalti nahi thi. Usme document, version, section aur language hoti thi. Usme woh tareekh hoti thi jab se tukda lagu tha. Is autumn ek cheez aur judi: kaun ise dekh sakta hai. Yeh partner one ho sakta tha, partner two, saare customers, ya sirf staff.

Yeh hai **access control**. Imran ne ek baat do baar kahi. Baat yeh thi ki yeh rule rehta kahan hai. Yeh instruction ka sentence nahi ho sakta, jaise "sirf is lender ke documents se jawaab do". Instruction sirf ek request hai. Model use maane ya na maane.

Rule application mein ek filter hona chahiye. Woh kisi bhi search se pehle chalta hai. Tab pehle lender ka customer doosre lender ke text ke kisi tukde tak pahunch hi nahi sakta. Naam leke maangne par bhi nahi.

Uske paas ek test tha. Partner one ke ek customer ne partner two ka interest rate poochha. Pehle tameez se, phir rukhai se. Chatbot ne kaha ki woh madad nahi kar sakta. Phir usne test user ko aisi role mein badla jiske paas koi access nahi tha. Usne partner one ka rate poochha. Chatbot ne kaha ki kuch available nahi hai.

Doosre result par kisi ko shak nahi tha. Pehla utna zaroori nahi tha jitna dikhta tha. Zaroori yeh tha ki tukda kabhi pahunch ke andar tha hi nahi.

### Freshness

Lakshmi ka agla mudda freshness tha. Matlab system purane document ko kitni jaldi chhodta hai. Usne kaha, aaj subah dus baje partner two ne ek document wapas le liya. Ab kya hota hai? Imran ne kaha, document source folder se hata diya jaata hai. Kab tak, usne poochha? Raat ka rebuild use ek baje nikaalta hai. Rebuild matlab poora store source se dobara banana. Toh dus baje se ek baje tak chatbot use abhi bhi quote karta hai. "Yeh ek faisla hai," Lakshmi ne kaha. "Ise jaanboojh kar lijiye."

Table: Wapas liya hua document, pehle aur baad
| | Pehle | Baad mein |
| --- | --- | --- |
| Hatana kaise hota hai | Raat ka rebuild ise subah ek baje hatata hai | Source hatate hi document ke tukde store se turant delete ho jaate hain. Raat ka rebuild ek check hai, tareeka nahi |
| Window | Lagbhag pandrah ghante | Lagbhag ek minute |
| Recovery | Koi nahi | Har rebuild ek snapshot rakhta hai, isliye kharab rebuild minuton mein palta ja sakta hai |

Snapshot ek bachayi hui copy hai, badlaav se pehle store ki photo jaisi.

## Kya humne sahi tukda dhoondha?

Teesre sawaal mein sabse zyada techniques thi. Ek bahut badi kitaab mein ek page dhoondhne jaisa sochiye. Imran ne unhe jaldi se dohraya. Kamre ke zyadatar log unse mil chuke the.

Keyword search identifiers, names, codes aur exact phrases ke liye ab bhi kaam ki hai. Yeh Ctrl+F jaisi hai. Jo team ise isliye chhod de kyunki meaning-based search fashion mein hai, woh ek mazboot signal phenk deti hai. Meaning-based search tab madad karta hai jab wording alag ho. Dono ko saath chalana sabse achha sabit hua tha.

Cutting rule ek andaaza hai. Woh andaaza lagata hai ki users ko kitne bade tukde ka evidence chahiye, jaise roti ka slice kitna motha kaatein. Isliye use aise sawaal par test karo jiska jawaab do tukdon ki seema paar kare.

Reranking results ko behtar order mein lagata hai. Isme time aur paisa lagta hai. Ek teacher jaisa sochiye jo top das jawaab dobara check kar rahi ho. Iska rule yeh tha. Das candidates laao aur unhe dobara score karo. Phir dekho ki das par recall aur top teen par precision itne badhe ki extra kharcha jaayaz ho. Recall poochhta hai ki sahi tukdon mein se kitne pakde. Precision poochhta hai ki jo pakda, usme se kitna sahi hai. Koi step isliye mat jodo ki kisi reference diagram mein hai. Use saabit karo.

Do cheezein Anaya ke liye zyada nayi thi. Pehli, search se pehle sawaal ko dobara likha ja sakta hai. Dhundhla sawaal saaf sawaal ban jaata hai. Yeh theek hai, jab tak rewriting customer ka matlab nahi badalti. Imran ne ek example dikhaya jisme matlab badal gaya tha. Ek customer ne "late charge" ke baare mein poochha. Sawaal "late fee" ban gaya. Partner ki terms mein woh ek alag cheez thi.

Doosri thi **abstention**, jise usne sabse aakhir ke liye rakha tha. Ek system abstain karta hai jab woh jawaab na dene ka faisla karta hai, aur yeh kehta hai, kyunki uske paas evidence nahi hai. Yeh us student jaisa hai jo andaaza lagane ki jagah "mujhe nahi pata" likhta hai. Imran ne ise product behaviour bataya. Yeh instruction ka sentence nahi hai. Jab jawaab documents mein hai hi nahi, toh chatbot kya karta hai? Kya woh customer se poochhta hai ki uska matlab kya tha? Ya kehta hai ki use nahi pata, aur kisi insaan ka option deta hai?

Usne Farah ke saath ise doosre tareeke se design kiya tha, teen languages mein. Jawaab na dene ka rule ek number tha. Use aise sawaalon se test kiya gaya jinka koi jawaab nahi tha. Pehle ki searches yeh kabhi nahi kar paayi thi.

## Kya hum dikha sakte hain ki jawaab kahan se aaya?

Aakhri sawaal sabse chhota tha. Yeh akhbaar ki khabar ke neeche likhi source line jaisa hai. Har jawaab ke saath us tukde ki identity thi jisse woh likha gaya. Usme document, version aur section tha. Link page kholta tha. Agar page jawaab ko support nahi karta, toh check karne wala insaan ek pal mein dekh leta. Jo citation document ka naam batati hai par use kholti nahi, woh kuch na hone se bhi bura hai. Woh checkable lagti hai, aur hoti nahi.

## Aur guard

Review shaam ko chhe bajkar dus minute par khatam hui. Biscuits khatam ho chuke the. Lakshmi ne kaha ki woh Friday ko apni report likhegi. Woh hostile nahi hogi, usne kaha. Usme do cheezon par kaam karna padega.

Apni desk ki taraf jaate hue Anaya ne khud se ek sawaal poochha. Kya yeh chaar sawaal uspar bhi lagte hain jo woh bana rahi hai? Jawaab bina koshish ke aa gaya.

Table: Guard par chaar sawaal
| Sawaal | Guard mein |
| --- | --- |
| Kya humne sahi padha? | Scanned cards aur unke look-alike characters |
| Kya yeh user ise dekh sakta hai? | Agents aur restore button: original kaun dekh sakta hai, kitni der tak, aur kise bataya jaata hai |
| Kya humne sahi tukda dhoondha? | Finder aur judge, aur woh answer key jisne unhe naapa |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Har faisle ka record, us code ke saath jisne faisla kiya |

Yeh wahi chaar sawaal the. Use shak tha ki woh uski baaki kaam-kaaji zindagi mein lautenge. Alag order mein, alag kapde pehne hue.

## Saaraansh

Prototype isliye chalta hai kyunki banane wale ne har document chuna hai aur woh akela user hai. Production dono cheen leta hai. Chaar sawaal lagbhag har chinta ko cover karte hain.

- Kya documents sahi padhe gaye? Ingestion mein jo kho gaya, jaise parser ka flatten kiya hua table, woh hamesha ke liye kho gaya. Uske baad ki koi cheez use dekh nahi sakti.
- Kya yeh user jo mila use dekh sakta hai? Ise application ke labels aur filters se lagu kijiye. Model se mat poochhiye. Jaanboojh kar yeh bhi tay kijiye ki wapas liya hua document kitni jaldi gayab ho.
- Kya sahi tukda mila? Exact aur meaning-based search ko milaiye. Cutting rule test kijiye. Kisi bhi re-ordering step ki value saabit kijiye. Design kijiye ki jawaab na ho toh system kya karta hai.
- Kya jawaab ko us exact page tak trace kiya ja sakta hai jahan se woh aaya?

Agle chapter mein Farah support console mein ek aisa assistant maangti hai jo sab kuch khud kare. Imran poochhta hai ki woh kya kar sakta hai, kis data ke saath, aur kaun check karega.
