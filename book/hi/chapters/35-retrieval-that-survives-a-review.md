---
title: Review Mein Tikne Wala Retrieval
summary: Ek prototype isliye chalta hai kyunki aapne har document chuna hai aur aap hi uske akele user hain. Production dono sahuliyatein hata deti hai. Retrieval system par lagne wale chaar sawaal ek aisi review mein chatbot se poochhe jaate hain jisme baithe log chahte hain ki woh fail ho. Chapter ingestion, parsers, access control aur abstention samjhata hai.
course: ch11r
goals:
  - retrieval system par chaar sawaal lagana: sahi padha gaya, dekhne ki ijaazat, sahi tukda, traceable
  - samjhana ki ingestion mein jo kho jaata hai woh hamesha ke liye kho jaata hai, aur parser kaise chupchaap table bigaad sakta hai
  - access control labels aur application ke filters se lagana, aur jaanboojh kar tay karna ki vaapas liya hua document kitni jaldi gayab ho
  - abstention ko product ke vyavhaar ki tarah design karna aur aise citations maangna jo source kholte hon
terms:
  - ingestion | documents ko system mein padhne ka kadam, jisme unhe scan karna, parse karna aur todna shaamil hai; yahan jo kuch kho jaata hai woh hamesha ke liye kho jaata hai | 
  - parser | woh program jo kisi file, jaise PDF, ko text aur sanrachna mein badalta hai; uski galtiyan baad ki har cheez ke liye adrishya hoti hain | parsers
  - access control | niyam jo tay karte hain ki kaun sa user kaun sa document ya chunk dekh sakta hai, application aur data layer mein laagu kiye gaye, model se nahi poochhe gaye | access label, access labels
  - abstention | ek system ka jawaab na dene ka faisla karna, aur yeh kehna, jab uske paas saboot nahi hai; yeh ek product vyavahaar hai jise design kiya jaana hai, nirdesh mein ek vaakya nahi | abstain
---

Review doosri manzil ke bade kamre mein hua aur usme gyarah log aur biscuits ki ek plate thi. Lakshmi Iyer ne ise bulaya tha. Chatbot, jo Imran Qureshi ka do saal ka project tha, kuch aur banne wala tha. Us waqt tak woh ek lender ke products ki ek tarah se seva karta tha. November mein Sahaj do aur lenders ki seva shuru karne wali thi, har ek ke apne terms aur rates ke saath, aur har ek likhit aashwasan maang raha tha ki uske customers ke sawaalon ke jawaab uske apne documents se diye jaayenge, kisi aur ke nahi. Ek mahine pehle Anaya ne poochha tha ki kya chatbot ki search ko production-ready kaha ja sakta hai, aur use bataya gaya tha ki haan. Use yeh nahi bataya gaya tha ki kis aadhaar par.

Lakshmi ne ek kathan se shuruaat ki: ek prototype isliye chalta hai kyunki aapne har document chuna hai aur aap hi uske akele user hain, production in dono sahuliyaton ko le leta hai, aur woh jaanna chahti thi ki kya bacha hai.

## Case: ek slide par chaar sawaal

Imran ne ek slide dikhayi jisme chaar sawaal the: kya humne document sahi padha, kya yeh user ise dekh sakta hai, kya humne sahi tukda dhoondha, aur kya hum dikha sakte hain ki jawaab kahan se aaya? Ek retrieval system mein chinta karne ke liye bahut kuch hai, aur har cheez in chaar mein se ek ke neeche aati hai.

Table: Chaar sawaal
| Sawaal | Kya jaanchta hai | Is chapter mein kahan tay hua |
| --- | --- | --- |
| Kya humne document sahi padha? | Woh kadam jo documents ko andar padhta hai | Rate card jise parser ne chapta kar diya |
| Kya yeh user ise dekh sakta hai? | Kaun sa tukda kaun dekh sakta hai | Access control aur vaapas liya hua document |
| Kya humne sahi tukda dhoondha? | Search | Exact aur matlab wali search saath, sawaal ko dobara likhna, abstention |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Jawaab se page tak ka nishaan | Citations jo khulte hain |

## Kya humne sahi padha?

Zanjeer mein saat kadiyaan hain. Documents andar padhe jaate hain, baante jaate hain, label kiye jaate hain aur matlab ke naqshon mein badle jaate hain. Unhe search kiya jaata hai, jo mila use request mein banaya jaata hai, aur jawaab jaancha jaata hai. Har kadi ko tune kiya ja sakta hai, aur isliye jab quality girti hai aur code nahi badla, toh har ek par shak hota hai.

Pehli kadi woh thi jis par Imran ko sabse kam bharosa tha, aur usne wajah ek vaakya mein di: documents ko andar padhte waqt jo kho jaata hai woh hamesha ke liye kho jaata hai. *Ingestion* woh kadam hai jo documents ko system mein padhta hai, unhe scan karta hai, ek *parser* se guzaarta hai jo ek file ko text aur structure mein badalta hai, aur unhe tukdon mein baanta hai. Behtar search us table ko wapas nahi la sakti jise parser ne chapta kar diya ya woh page jise usne chhod diya. Galti har agli kadi ke liye dikhti nahi, kyunki parser ke baad koi bhi original nahi dekhta.

Imran ne woh kiya jo Anaya se kabhi kaha gaya tha aur jise usne pasand nahi kiya tha. Usne partner documents mein se teen liye aur nikala hua text us cheez ke saath rakha jo ek insaan dekhta tha. Pehle do theek the. Teesra ek rate card tha, ek table ke roop mein, loan ki raashi aur avadhi ke hisaab se rates ke chaar columns ke saath, aur parser ne use numbers ki ek line ki tarah padha tha.

::: watch Har figure bach gaya aur koi rishta nahi bacha
Is system se poochho ki do lakh rupaye ke chaar saal ke loan par rate kya hai aur woh line mein kahin se ek number chunega aur use poore aatmavishwaas se bata dega. Kuch use pakadta nahi, kyunki har hissa safalta report karta. Imran ne parser theek kiya taaki woh tables ko tables ki tarah padhe, aur ek jaanch joda jo output ke figures ki ginti ko page par figures se milati thi. Har project ke liye uska sabak yeh tha ki jab retrieval kharab ho, toh matlab ke naqshe ko doshi thahrane se pehle parser ki quality ke baare mein poochho.
:::

## Kya yeh user ise dekh sakta hai?

Yeh Lakshmi ka sawaal tha. Ek sahi jawaab jo aise document se aaya jise user ko padhna nahi chahiye, tab bhi ek security failure hai, usne kaha.

Imran ne use badlaav dikhaya. Text ke har tukde par ab ek label tha jiski pehchaan badalti nahi: ek document, ek version, ek section, ek bhasha, woh tareekh jab se woh laagu hai aur, is patjhad mein naya, kaun use dekh sakta hai: partner one, partner two, sab customers ya sirf staff. Yeh *access control* hai. Jo baat usne do baar kahi woh yeh thi ki woh kahan rehta hai. Woh instruction ka ek vaakya nahi ho sakta, jaise "sirf is lender ke documents se jawaab do", kyunki instruction ek anurodh hai aur model use nahi maan sakta. Woh application mein ek filter hona chahiye, kisi bhi search se pehle laagu, taaki pehle lender ka customer doosre lender ke text ka tukda tak na pahunch sake chahe woh use naam lekar maange.

Uske paas ek test tha. Partner one ke ek customer ne, pehle shishtata se aur phir rukhai se, partner two ke byaaj dar ke baare mein poochha, aur chatbot ne kaha ki woh madad nahi kar sakta. Phir usne test user ko aise role par badla jiske paas koi access nahi tha aur partner one ki dar ke baare mein poochha, aur chatbot ne kaha ki kuch uplabdh nahi. Kisi ko doosre nateeje par shak nahi tha. Pehla utna zaroori nahi tha jitna dikhta tha, aur zaroori yeh tha ki tukda kabhi pahunch mein tha hi nahi.

### Taazgi

Lakshmi ka agla item taazgi tha. Aaj subah das baje, usne kaha, partner two ne ek document vaapas le liya, aur usne poochha ki phir kya hota hai. Document source folder se hata diya jaata hai, Imran ne kaha. Kab tak? Raat ka rebuild use ek baje subah hata deta hai. Toh das baje se ek baje tak woh ab bhi quote hota hai. "Yeh ek faisla hai," Lakshmi ne kaha. "Behtar hai ki aap ise jaanboojh kar karein."

Table: Vaapas liya hua document, pehle aur baad mein
| | Pehle | Baad mein |
| --- | --- | --- |
| Hataana kaise kaam karta hai | Raat ka rebuild ise subah ek baje hataata hai | Source hataane se document ke tukde store se turant hat jaate hain. Raat ka rebuild ek jaanch hai, tantra nahi |
| Khidki | Lagbhag pandrah ghante | Lagbhag ek minute |
| Wapsi | Koi nahi | Har rebuild ek snapshot rakhta hai, isliye kharab wale ko kuch minute mein palta ja sakta hai |

## Kya humne sahi tukda dhoondha?

Teesre sawaal ke paas sabse zyada techniques thi, aur Imran ne use jaldi nipataya kyunki kamre ne unmein se zyadatar dekhi thi. Keyword search pehchaan, naam, codes aur sahi phrases ke liye keemti bani rehti hai, aur jo team ise isliye hataati hai kyunki matlab wali search chalan mein hai woh ek mazboot sanket phenk deti hai. Matlab wali search tab madad karti hai jab shabd alag hon, aur dono ko saath chalana sabse achha saabit hua tha. Kaatne ka niyam is baare mein ek parikalpna hai ki users ko saboot ki kaun si ikaayi chahiye hogi, isliye ise aise sawaal par test karna chahiye jiska jawaab kisi seema ko paar kare. Reranking natijon ka kram sudhaarti hai, samay aur paise ki keemat par, aur uska niyam tha das candidates lao, unhe dobara score karo, aur dekho ki das par recall aur sheersh teen par precision itna badhe ki extra ko jaayaz thahraye. Koi kadam isliye kabhi nahi jodna chahiye kyunki ek reference diagram mein hai. Use saabit karna chahiye.

Do vichaar Anaya ke liye naye the. Pehla yeh ki search se pehle sawaal ko dobara likha ja sakta hai, kisi dhundhle se kuch saaf mein, bashart dobara likhne se woh na badle jo customer ka matlab tha. Imran ne ek udaharan dikhaya jisme woh badal gaya: ek customer ne "late charge" ke baare mein poochha aur sawaal "late fee" ke roop mein likha gaya, jo partner ke terms mein alag cheez thi.

Doosra *abstention* tha, jise usne sabse aakhir ke liye rakha tha. Ek system abstention karta hai jab woh jawaab nahi dene ka faisla karta hai, aur kehta hai ki saboot nahi hai. Imran ne ise product ka vyavhaar kaha, instruction mein ek vaakya nahi. Jab jawaab documents mein nahi hota toh chatbot kya karta hai? Kya woh poochhta hai ki customer ka matlab kya tha, ya kehta hai ki use nahi pata aur kisi insaan ko pesh karta hai? Usne ise Farah ke saath doosre vikalp ke liye design kiya tha, teen bhashaon mein. Chhodne ka niyam ek number tha, aur use aise sawaalon se test kiya gaya tha jinka koi jawaab nahi tha, jo pehle ki searches kabhi nahi kar paayin.

## Kya hum dikha sakte hain ki yeh kahan se aaya?

Aakhri sawaal sabse chhota tha. Har jawaab us tukde ki pehchaan leke chalta tha jisse woh likha gaya tha, uske document, version aur section ke saath, aur link page kholta tha. Agar page jawaab ka samarthan nahi karta, toh jaanchne wala insaan ek pal mein dekh leta. Jo citation document ka naam leta hai par use kholta nahi woh kuch na hone se bhi bura hai, kyunki woh jaanchne laayak lagta hai aur hai nahi.

## Aur guard

Review chhe baj kar das minute par khatam hui aur biscuits khatam ho chuke the. Lakshmi ne kaha ki woh Friday ko apni report likhegi, ki woh dushmani bhari nahi hogi, aur ki usme do cheezein kaam maangengi. Apne desk par jaate hue Anaya ne khud se poochha ki kya chaar sawaal us par bhi laagu hote hain jo woh bana rahi thi, aur jawaab bina mehnat ke aa gaya.

Table: Guard par chaar sawaal
| Sawaal | Guard mein |
| --- | --- |
| Kya humne sahi padha? | Scan kiye gaye cards aur unke milte-julte akshar |
| Kya yeh user ise dekh sakta hai? | Agents aur restore button: kaun original dekh sakta hai, kitni der, aur kise bataya jaata hai |
| Kya humne sahi tukda dhoondha? | Finder aur judge, aur woh answer key jisne unhe naapa |
| Kya hum dikha sakte hain ki jawaab kahan se aaya? | Har faisle ka record, us code ke saath jisne use liya |

Woh wahi chaar sawaal the, aur use shak tha ki woh uske kaam ke baaki jeevan mein baar-baar aayenge, alag kram mein aur alag kapdon mein.

## Saaraansh

Prototype isliye chalta hai kyunki banane wale ne har document chuna hai aur woh akela user hai. Production dono ko hata deta hai, aur chaar sawaal lagbhag har chinta ko dhak lete hain.

- Kya documents sahi padhe gaye? Ingestion mein jo kho jaata hai, jaise parser se chapta hua table, hamesha ke liye kho jaata hai aur uske baad ke har kadam se dikhta nahi.
- Kya yeh user dekh sakta hai jo mila? Yeh application ke labels aur filters se lagana padta hai, model se kehkar nahi, aur isme jaanboojh kar tay karna shaamil hai ki vaapas liya hua document kitni jaldi gayab ho.
- Kya sahi tukda mila? Exact aur matlab wali search ko milao, kaatne ke niyam ko test karo, kisi bhi kram badalne wale kadam ki keemat saabit karo, aur design karo ki jab jawaab na ho toh system kya karta hai.
- Kya jawaab ko us theek page tak khoja ja sakta hai jahan se woh aaya?
