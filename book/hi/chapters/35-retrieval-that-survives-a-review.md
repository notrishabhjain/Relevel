---
title: Review Mein Tikne Wala Retrieval
summary: Ek prototype isliye kaam karta hai ki aapne har document chuna hai aur aap akele user hain. Production dono sukh chheen leta hai. Har retrieval system par laagu hone wale chaar sawaal chatbot se un logon ke kamre mein poochhe jaate hain jo chahte hain ki woh fail ho.
course: ch11r
terms:
  - ingestion | documents ko system mein padhne ka kadam, jisme unhe scan karna, parse karna aur todna shaamil hai; yahan jo kuch kho jaata hai woh hamesha ke liye kho jaata hai | 
  - parser | woh program jo kisi file, jaise PDF, ko text aur sanrachna mein badalta hai; uski galtiyan baad ki har cheez ke liye adrishya hoti hain | parsers
  - access control | niyam jo tay karte hain ki kaun sa user kaun sa document ya chunk dekh sakta hai, application aur data layer mein laagu kiye gaye, model se nahi poochhe gaye | access label, access labels
  - abstention | ek system ka jawaab na dene ka faisla karna, aur yeh kehna, jab uske paas saboot nahi hai; yeh ek product vyavahaar hai jise design kiya jaana hai, nirdesh mein ek vaakya nahi | abstain
---

Review doosri manzil ke bade kamre mein hua, us kamre mein jis ki mez ke aas-paas koi kabhi theek se fit nahi ho paata tha, aur usme gyarah log aur biscuits ki ek plate thi.

Lakshmi ne ise bulaya tha. Chatbot, jo do saal se Imran ka project tha, kuch aur banne wala tha. Ab tak usne ek lender ke products ko ek tareeke se serve kiya tha. November mein, Sahaj do aur ko serve karna shuru karega, har ek ki apni shartein aur apni dar, aur har ek ek likhit aashwaasan par zor de raha tha ki uske customers ke sawaalon ke jawaab uske apne documents se diye jayenge aur kisi aur ke nahi. Anaya ne ek mahine pehle poochha tha ki kya chatbot ke search ko production-ready kaha ja sakta hai. Use bataya gaya tha ki kaha ja sakta hai. Use yeh nahi bataya gaya tha ki kis aadhar par.

"Ek prototype kaam karta hai," Lakshmi ne shuruaat mein kaha, "kyunki tumne har document chuna hai aur tum akele user ho. Production in dono sukhon ko chheen leta hai. Main jaanna chahti hoon ki kya bacha hai."

Imran ne ek slide lagayi. Usme chaar sawaal the, aur Anaya ne, jisne woh chaar garmiyon mein uske whiteboard par likhe dekhe the, khud ko muskurate paya.

*Kya humne document sahi padha? Kya yeh user ise dekh sakta hai? Kya humne sahi tukda dhoondha? Kya hum dikha sakte hain ki jawaab kahan se aaya?*

"Ek retrieval system mein chinta karne ki cheezon ki ek lambi list hai," usne kaha. "Main ek ghante mein un sab ko nahi nipta sakta. Lekin har cheez in chaar mein se kisi ek ke neeche aati hai. Main unhe kram se loonga."

## Kya humne sahi padha?

Zanjeer mein saat kadiyan hain. Documents andar padhe jaate hain. Unhe toda jaata hai. Unhe labels diye jaate hain. Unhe matlabon ke naqshe mein badla jaata hai. Unhe dhoondha jaata hai. Jo mila use ek request mein banaya jaata hai. Aur jawaab ko jaancha jaata hai. Har kadi ko tune kiya ja sakta hai, jiska matlab yeh bhi hai ki jab quality girti hai aur koi code nahi badla, toh har ek sandehi hai.

Pehli kadi woh thi jis par Imran ko sabse kam bharosa tha, ek wajah ke liye jo usne agli slide par ek vaakya mein rakhi. *Documents ko andar padhte waqt jo kuch kho jaata hai woh hamesha ke liye kho jaata hai.*

*Ingestion* documents ko system mein padhne ka kadam hai: unhe scan karna, ek *parser* se guzarna, jo ek file ko text aur sanrachna mein badalta hai, aur unhe tukdon mein todna. Behtar search ek aisi table ko wapas nahi la sakta jise parser ne sapaat kar diya ya woh page jo woh chhod gaya. Galti baad ki har kadi ke liye adrishya hai, kyunki parser ke baad kuch bhi original nahi dekhta.

Usne woh kiya tha jo Anaya ko kabhi karne ko kaha gaya tha aur jo use pasand nahi aaya tha. Usne partner documents mein se teen liye aur nikala hua text saath-saath rakha jo ek insaan dekhta tha. Pehla aur doosra theek the. Teesra ek rate card tha, aur woh ek table thi: loan ki rakam aur avadhi ke hisaab se dar ke chaar columns. Parser ne use ankon ki ek hi line ki tarah padha tha.

"Har figure bach gaya," usne kaha, aur kamra shaant ho gaya. "Koi sambandh nahi bacha. Is system se poochho ki do lakh ke chaar saal ke loan ki dar kya hai, aur woh us line mein kahin se ek number chun leta aur poore vishwas se bol deta."

"Aur kuch nahi pakadta," Anaya ne kaha.

"Kuch nahi, kyunki har hissa safalta report karta." Usne ise theek kar diya tha: parser ab tables ko tables ki tarah padhta tha, aur ek jaanch output mein figures ki sankhya ko page par ki sankhya se milati thi. Lekin jo sabak usne slide par rakha woh har project ke liye tha. Jab retrieval kamzor ho, toh matlabon ke naqshe ko doshi thehrane se pehle parser ki quality poochho.

## Kya yeh user ise dekh sakta hai?

Yeh Lakshmi ka sawaal tha, aur woh iska intezaar kar rahi thi.

"Ek document se sahi jawaab jo user ko nahi padhna chahiye," usne kaha, "phir bhi ek suraksha failure hai. Mujhe dikhao tum ise kaise rokte ho."

Imran ne use dikhaya. Text ke har tukde ke saath ab ek label tha jisme ek pehchaan thi jo badalti nahi thi: ek document, ek version, ek section, ek bhasha, ek tareekh jisse woh laagu tha, aur, is patjhad ke naya, use kaun dekh sakta hai. *Partner ek. Partner do. Sabhi customers. Sirf staff.* Yeh *access control* tha, aur jo baat usne do baar kahi woh yeh thi ki woh kahan rehta tha. Woh ek nirdesh ka vaakya nahi ho sakta tha, *sirf is lender ke documents se jawaab do*, kyunki nirdesh ek anurodh hai aur model use maan bhi sakta hai ya nahi. Woh application mein ek filter hona chahiye tha, kisi bhi search se pehle laagu, taaki pehle lender ka ek customer doosre lender ke text ka ek tukda tak na pahunch sake chahe woh use naam lekar maange.

"Kya tum ise saabit kar sakte ho?"

Uske paas ek test tha. Partner ek ke ek customer ne, pehle tameez se aur phir rukhai se, partner do ki byaaj dar poochhi. Chatbot ne kaha ki woh isme madad nahi kar sakta. Phir usne test user ko bina access wali bhumika mein badla aur partner ek ki dar ke baare mein poochha. Usne kaha ki kuch uplabdh nahi. Kamre mein doosre nateeje par kisi ko sandeh nahi tha. Pehla, usne bataya, dikhne se kam zaroori tha. Jo maayne rakhta tha woh yeh tha ki chunk kabhi pahunch mein tha hi nahi.

Lakshmi ki list ke agle item ko usne *freshness* kaha. "Aaj subah das baje, partner do ne ek document wapas le liya. Mujhe batao kya hota hai."

Imran ne kaha: "Das baje, document source folder se hata diya jaata hai. Phir..."

"Kab tak?"

Use ummeed se zyada samay laga. "Raat ka rebuild ise ek baje subah nikaal deta hai."

"Toh das baje se ek baje tak use abhi bhi quote kiya jaata hai."

"Haan."

"Yeh ek faisla hai," Lakshmi ne kaha. "Behtar hai ki tum ise jaan-boojh kar lo."

Unhone ise jaan-boojh kar liya. Ek hataav document ke tukdon ko store se usi pal mita deta jab source badalta, aur raat ka rebuild ek jaanch hota, tareeka nahi. Khidki pandrah ghanton se lagbhag ek minute ho gayi. Unhone bahaal karna bhi sambhav banaya: har rebuild ek snapshot rakhta, taaki kharab wale ko minuton mein palta ja sake.

## Kya humne sahi tukda dhoondha?

Teesra sawaal woh tha jisme sabse zyada techniques thin, aur Imran ne ise tezi se nipta diya kyunki kamra unme se zyadatar se mil chuka tha.

Keyword search, usne kaha, keemti bana raha. Identifiers, naam, codes aur exact phrases wahan hain jahan woh jeetta hai, aur jo team ise isliye badal deti hai ki meaning-based search chalan mein hai usne ek mazboot sanket phenk diya. Meaning-based search tab madad karta hai jab shabd alag hon. Dono chalana woh tha jo pichhla kaam sabse achha dikha chuka tha. Kaatne ka niyam is baare mein ek parikalpana hai ki users ko saboot ki kaun si ikai chahiye hogi, isliye ise aise sawaal par test karo jiska jawaab ek seema paar karta ho. Aur reranking nateejon ka kram behtar karta hai, samay aur paise mein kharche par. Uski slide chhoti thi: *das ummeedwaar laao, unhe dobara score karo, aur dekho ki das par recall aur sabse upar ke teen par precision itna badhe ki atirikt ka kharcha jayaz ho. Kabhi koi kadam isliye mat jodo ki kisi reference diagram mein hai. Saabit karo.*

Do idea Anaya ke liye naye the. Pehla yeh ki sawaal ko search se pehle dobara likha ja sakta hai, kisi dhundhli cheez se saaf cheez mein, bashart dobara likhna badle nahi ki customer ka matlab kya tha. Usne use ek udaharan dikhaya jisme usne badla tha: ek customer jo "late charge" ke baare mein poochh raha tha use "late fee" ke roop mein dobara likha gaya tha, jo partner ki shartein mein ek alag cheez thi.

Doosra *abstention* tha, jise usne aakhir ke liye rakha tha. Iska matlab hai ek system ka jawaab na dene ka faisla karna, aur yeh kehna, jab uske paas saboot nahi hai. "Abstention ek product vyavahaar hai, nirdesh mein ek vaakya nahi," usne kaha. "Jab jawaab documents mein nahi hota toh chatbot kya karta hai? Kya woh poochhta hai ki aapka matlab kya tha? Kya woh kehta hai ki use nahi pata, aur ek insaan ki peshkash karta hai?" Usne, Farah ke saath, ise doosra karne ke liye design kiya tha, teen bhashaon mein. Kab chhodna hai uska niyam ek number tha, aur use aise sawaalon se test kiya gaya tha jinka koi jawaab nahi tha, jo woh cheez thi jo pehle ke searches kabhi nahi kar paaye the.

## Kya hum dikha sakte hain ki yeh kahan se aaya?

Aakhri sawaal sabse chhota tha. Har jawaab us tukde ki pehchaan le jaata tha jisse woh likha gaya tha, uska document, version aur section, aur link page kholta tha. Agar page jawaab ko support nahi karta, toh ise jaanchne wala insaan ek pal mein dekh sakta tha. Ek citation jo ek document ka naam leti hai par use kholti nahi, kuch nahi se bhi buri hai, kyunki woh jaanchne layak lagti hai aur hai nahi.

## Aur guard

Review dus baje chhe minute par khatam hua. Biscuits khatam ho chuke the. Lakshmi ne kaha ki woh Friday ko apni report likhegi aur woh virodhi nahi hogi, aur ki usme do cheezon par kaam karna padega, aur ki woh batayegi kaun si do. Anaya ne, thodi hairaani se, paya ki woh ghabrayi nahi thi.

Apni desk ki taraf jaate hue usne khud se poochha ki kya chaar sawaal us par laagu hote hain jo woh bana rahi hai, aur jawaab bina mehnat aa gaya.

*Kya humne sahi padha?* Look-alike akshron wale scanned cards. *Kya yeh user ise dekh sakta hai?* Agents aur restore button; kaun ek original dekh sakta hai, kitni der ke liye, aur kise bataya jaata hai. *Kya humne sahi tukda dhoondha?* Finder aur judge, aur answer key jisne unhe naapa. *Kya hum dikha sakte hain ki jawaab kahan se aaya?* Har faisle ka record, us code ke saath jisne use banaya.

Woh wahi chaar sawaal the. Woh, use shak tha, uski baaki kaam ki zindagi mein aate rahenge, alag kram mein aur alag kapdon mein.

## Saath le jaane layak baatein

Ek prototype isliye kaam karta hai ki aapne har document chuna hai aur aap akele user hain; production dono chheen leta hai, aur chaar sawaal lagbhag har chinta ko cover karte hain. Pehla, kya documents sahi padhe gaye, kyunki ingestion mein jo kuch kho jaata hai, jaise parser dwara sapaat ki gayi table, woh hamesha ke liye kho jaata hai aur baad ki har cheez ke liye adrishya hota hai. Doosra, kya yeh user wo dekh sakta hai jo mila, jo model se poochhkar nahi balki application mein labels aur filters se laagu hona chahiye, aur jisme jaan-boojh kar yeh tay karna shaamil hai ki ek wapas liya gaya document kitni tezi se gayab hota hai. Teesra, kya sahi tukda mila, exact aur meaning-based search ko milakar, kaatne ke niyam ko test karke, kisi bhi dobara-kram karne wale kadam ki keemat saabit karke, aur yeh design karke ki jab jawaab nahi hota toh system kya karta hai. Aur chautha, kya jawaab ko us exact page tak dhoondha ja sakta hai jahan se woh aaya.
