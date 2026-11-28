---
title: Rules, Risk Aur Zimmedaari
summary: Lakshmi batati hai ki bank mein bees saal kaam karke usne paperwork ke baare mein kya seekha. Phir team ek page ka document likhti hai. Usme likha hai ki guard kis kaam ka hai, kya galat karta hai aur use kis kaam mein kabhi nahi lena. Uske baad woh ek customer ko delete karne ki koshish karte hain aur dekhte hain ki uska data kahan-kahan rehta hai. Chapter mein risk tiers, India ka data protection law, system cards, deletion drills, human oversight aur shadow AI aate hain.
course: ch17
goals:
  - samajhna ki system ka risk tier uski technology se nahi, uske istemaal se tay hota hai
  - batana ki India ka data protection law kisi organisation se kya maangta hai, aur privacy tool ko kisi ko compliant banane wala kyun nahi kehna chahiye
  - ek page ka system card likhna, jiski known limitations ki list saboot par tiki ho
  - deletion drill chalana, aisa human oversight banana jo asal mein na keh sake, aur shadow AI ka jawaab ek behtar approved tool se dena
terms:
  - risk tier | system ki speed limit jaisa: galat jawaab jitna zyada nuksaan kar sakta hai, system ko utne zyada documents, checks aur saboot chahiye; tier istemaal se tay hota hai, technology se nahi | risk tiers
  - system card | AI system ka ek page ka label, dawai ki patti ke label jaisa: woh kis kaam ka hai, kaun sa data use karta hai, kaise test hua, kya galat karta hai aur use kis kaam mein nahi lena | system cards
  - deletion drill | data ki fire drill: maan lijiye ek customer ne apna data delete karne ko kaha, phir woh har jagah dhoondhiye jahan data rehta hai, aur dekhiye kin jagahon tak aap pahunch nahi sakte | 
  - human oversight | ek insaan jo output ke peeche ka saboot dekh sakta hai aur use na keh sakta hai; outputs ko bas guzarte dekhna isme nahi ginta | 
  - shadow AI | staff ka chupke se free consumer AI tools chalana, aksar office ke documents paste karke, kyunki woh tools kaam ke hain aur koi approved tool utna achha nahi | 
  - DPDP Act | India ka Digital Personal Data Protection Act, 2023, jo batata hai ki logon ki diary (personal data) ke saath kaise pesh aana hai; yeh data dhoondhne aur chhupane se kahin zyada maangta hai | Digital Personal Data Protection Act
---

August ke pehle Tuesday ko Lakshmi Iyer ne ek lambi dopahar ki shuruaat apne bank ke dinon ki ek kahawat se ki. Agar likha nahi gaya, toh hua hi nahi. Imran Qureshi laptop laya tha. Anaya answer key (teacher ki sahi jawaabon ki list) laayi thi. Ab usme do sau chaar rows thi. Farah Sheikh bhune hue peanuts ka packet lekar aayi thi, bina kisi wajah ke. Use rukne di gayi.

Lakshmi bees saal tak woh insaan rahi jo paperwork maangta hai. Log sochte the ki woh kaam dheema karti hai. Woh aisa nahi sochti thi. Use bas ek cheez chahiye thi. Jab kuch galat ho, toh koi bata sake ki system kis kaam ka tha. Woh yeh bhi bataye ki system ko kya karna chahiye tha, aur kya test hua tha.

Regulator (woh sarkari sanstha jo dekhti hai ki niyam maane ja rahe hain) ko failure se dikkat nahi hoti. Dikkat us failure se hoti hai jise koi samjha na sake.

Aaj text padhne aur likhne wali machine aise hi sawaalon ke folder ke saath aati hai. Zyadatar log sochte hain ki jawaab legal team likhegi. Lekin folder ka lagbhag har sawaal ek product ka sawaal hai. Lakshmi sentences likh sakti thi. Sawaalon ke jawaab nahi de sakti thi.

## Case: product sawaalon ka folder

Folder ko sarkari counter ke form jaisa samajhiye. Jab tak har khaana nahi bharta, us par mohar nahi lagti. Usme chaar sawaal the. System kis kaam ka hai? Kispar asar daalta hai? Galat hone par kya hota hai? Kaun check karta hai, kis saboot ke saath? Inke jawaab Anaya de sakti thi. Neeche ke sections us dopahar ka hisaab hain.

## Istemaal risk tay karta hai

Ek system ko kitna savdhaan hona hai, yeh technology par nahi tikta. Yeh is par tikta hai ki galat jawaab kitna nuksaan kar sakta hai. Speed limit ko dekhiye. School ke saamne ki sadak par limit highway se kam hoti hai, gaadi chahe wahi ho. Lakshmi ne yeh dikhane ke liye chaar rows banayi.

Table: Risk ke chaar levels
| Level | Kaise istemaal | Kya zaroori hai |
| --- | --- | --- |
| Allowed nahi | Logon ko unke social behaviour par score karna; biometrics se kuch tarah ki sorting | Allowed nahi hai, kitne bhi safeguards daalo |
| High risk | Hiring, credit decisions, education aur zaroori services tak pahunch | Documentation, asli human check, accuracy ka saboot, logging aur formal assessment |
| User ko batao | Chatbots, generated images | Itna batana kaafi hai ki user ek machine se baat kar raha hai |
| Minimal | Zyadatar internal tools | Achhi aam practice |

Aise rules Europe mein shuru hue, EU AI Act ke saath. Ab woh doosre deshon ki kai companies ke buying teams tak pahunch gaye hain. Har level ek **risk tier** hai (galat jawaab ke nuksaan se tay hui speed limit). Tier tay karta hai ki system ko kitna saboot dikhana hoga.

Tiers ki do baatein logon ko hairaan karti hain. Pehli, tier istemaal se tay hota hai, model se nahi. Wahi system internal answer-finder ke roop mein low risk ho sakta hai. Agar koi use loan dene ka faisla karne mein lagaye, toh woh high risk ban jaata hai. Doosri, istemaal badalne par tier badal jaata hai. Aisa aksar launch ke baad hota hai, aur koi papers update nahi karta.

Anaya ne poocha ki guard kahan baithta hai. Lakshmi ne kaha ki woh chat mein identity numbers chhupata hai. Toh woh minimal hai. Uske peeche ke chatbot ko batana hoga ki woh ek machine hai. Lekin maan lijiye koi guard ke findings se tay kare ki customer bharosemand hai ya nahi. Tab woh kuch aur ban jaayega. Lakshmi ne Anaya se kaha ki yeh likh le. Yeh folder ka sabse kaam ka sentence tha.

## India ka law, aur guard kya nahi hai

Phir Imran ne woh sawaal poocha jisse Anaya bach rahi thi. Kya guard compliant hai (kya woh law ko maanta hai)? Lakshmi ne poocha, "Kiske saath?" Law ke saath, Imran ne kaha. India ke law ke saath.

Usne **DPDP Act** samjhaya. Yeh 2023 ka Digital Personal Data Protection Act hai, aur uske Rules 2025 mein aaye. Personal data ko kisi ki diary samajhiye. Act batata hai ki organisation us diary ka kaise istemaal kar sakti hai. Woh yeh bhi batata hai ki diary kab lauta deni hai ya nasht kar deni hai. Duties mein saaf notices aur consent (insaan ki saaf haan) aate hain. Security aur data kitne time rakhna hai uski limit bhi aati hai. Breach (leak) ke liye plan bhi aata hai. Aur bhi bahut kuch hai.

Personal details dhoondhna aur chhupana madad zaroor karta hai. Organisation kam collect karti hai aur kam aage bhejti hai. Lekin yeh ek technical hissa hai, ghar ke ek taale jaisa. Yeh compliance nahi hai, aur koi tool compliance nahi hota.

::: watch Kabhi "compliant" mat kahiye
Guard ke baare mein jab bhi likhiye, use privacy tool kahiye. Woh organisation ko kam personal data collect aur share karne mein madad karta hai. Yeh kabhi mat kahiye ki woh kisi ko compliant banata hai, chahe Sahaj ho, customer ho ya koi aur.

Lakshmi ne kaha ki agar kisi salesman ne kabhi guard ke baare mein yeh sentence likha, toh use pata chal jaayega. Anaya ne yeh rule ek page ki pehli line par rakha. Baad mein woh specification aur system card mein gaya. Woh ek aisi website ke aage bhi gaya jo abhi bani nahi thi.
:::

## Ek page

Folder ke beech ka kaagaz sirf ek page ka hai. Use **system card** kehte hain. Dawai ki patti ka label dekhiye. Usme likha hota hai ki dawai kis kaam ki hai, usme kya hai aur kya dhyaan rakhna hai. System card batata hai ki system kis kaam ka hai aur kaun sa data use karta hai. Woh yeh bhi batata hai ki use kaise test kiya gaya aur woh kya galat karta hai. Minimal tier se upar har cheez ko ek chahiye.

Anaya ne kabhi ek nahi likha tha. Lekin woh chhe mahine se uski cheezein jama kar rahi thi, bina jaane. Usne use sabke saamne ek ghante mein likha. Usne answer key ke numbers use kiye.

::: case Bharat Privacy Guard: system card
**Yeh kis kaam ka hai.** Customer messages mein English, Hindi aur Hinglish ke personal details pehchaanna. Messages store hone ya aage jaane se pehle unhe chhupana.

**Yeh kya use karta hai.** Customer chat messages. Yeh apna koi message text store nahi karta.

**Kaise test hua.** 204 rows ki haath se mark ki hui answer key par, version 7, jisme scanned aur mixed-language examples shaamil hain.

**Known limitations.** Roman Hindi mein "ji" ke saath likhe lagbhag har das mein se ek naam ko chhod deta hai. Kuch order numbers galat chhupata hai. Photographs nahi padhta. Tamil, Bengali, Telugu, Marathi ya Gujarati par test nahi hua.

**Scope ke bahar.** Ise customer ke baare mein kuch bhi tay karne ke liye use nahi karna. Yeh Sahaj ko, ya kisi bhi user ko, kisi law ke hisaab se compliant nahi banata.
:::

Lakshmi ne Anaya se limitations zor se padhne ko kaha. Phir usne kaha ki isi hisse se use baaki par bharosa hota hai. System kya achha karta hai, yeh koi bhi bata sakta hai. Asli failures ki list, har ek ke peeche saboot ke saath, dikhati hai ki kisi ne sach mein dekha hai. Isliye limitations ka section sabse mushkil se naqli banta hai, aur sabse aasaani se maana jaata hai.

Scope ke bahar wali line sabse kaam ki hai. Woh istemaal ko bina kisi ke dekhe upar ke tier mein khisakne se rokti hai.

## Mr. Deshpande ko dhoondhna

Phir Lakshmi ne ek drill rakhi. Usne mez par ek card sarkaya. Us par ek asli customer ka naam tha. Mr. Deshpande Satara ke ek buzurg the. June mein unhone Sahaj ko likha tha ki unka data hata diya jaaye. Unse waada kiya gaya tha ki hata diya jaayega. Hua nahi tha. Anaya ko maanna tha ki request abhi aayi hai. Use woh har jagah dhoondhni thi jahan woh rehte the.

Yeh hai **deletion drill**. Yeh data ki fire drill jaisa hai. Aap woh har jagah dhoondhte hain jahan ek insaan ka data rakha hai. Phir aapko pata chalta hai ki kin jagahon tak aap pahunch nahi sakte. Ek insaan ka data saat jagah ho sakta hai. Original documents aur unse kaate gaye chunks (index cards). Phir search index aur cache (kuch der ki copy). Phir provider ke logs (har request ki uski diary) aur company ke apne logs. Aakhir mein asli traffic se bana koi bhi test set. Kai teams paati hain ki inme se kam se kam do jagah unki pahunch se bahar hain.

Table: Mr. Deshpande ka data kahan ho sakta tha
| Jagah | Kya Sahaj ise delete kar sakta tha? |
| --- | --- |
| Support system | Haan, ek row delete ho sakti hai |
| Chat history | Haan |
| Search index | Usme sirf policies thi, toh delete karne ko kuch nahi |
| Cache | Temporary |
| Sahaj ke apne logs | Haan, customer number se, ek din ke kaam mein |
| Bahar ki company ke logs | Nahi. Uski terms ke hisaab se woh tees din rehte hain, aur Sahaj use chhota nahi kar sakta |

Phir Anaya ko kuch yaad aaya, aur woh thandi pad gayi. June mein usne sau outputs print kiye the, taaki woh aur Farah unhe padh kar mark kar saken. Woh uski desk ke neeche wale drawer mein the. Woh exported chats (system se bahar copy ki hui chats) se aaye the, aur unme asli naam the.

Lakshmi ne kaha ki hamesha yahi hota hai. Koi asli data kisi cheez mein copy kar leta hai, achhi wajah se. Copy mein kuch aisa nahi hota jo kisi insaan tak wapas le jaaye. Test sets aur printouts sabse zyada bhoolne wali jagahein hain. Provider ke caches dekhna sabse mushkil hai.

Anaya ne us shaam printouts shred kiye, Farah gawaah thi. Usne log mein tareekh likhi. Phir usne us process mein ek line jodi jisse yeh problem hui thi. Data collect karte waqt likhiye ki har tukda kahan se aaya, kyunki baad mein yeh dobara nahi bana sakte. Jo deletion request poori na ho sake, woh tareekh wali ek failure hai.

## Ek insaan jo na keh sake

Lakshmi ke paas do baatein aur thi, aur usne unhe jaldi nipta diya.

Pehli thi **human oversight**. Sab likhte hain "ek insaan har output dekhta hai". Anaya ne PRD (product ka recipe card) ke pehle draft mein yahi likha tha. Lakshmi ne poocha ki roz chaar hazaar outputs ke saath ek reviewer kitne din chalega. Uske tajurbe mein, lagbhag do hafte. Uske baad reviewer bina padhe approve karne lagta hai. Document phir bhi kehta hai ki insaan sab check karta hai, lekin asal mein koi nahi karta. Yeh daawa na karne se bhi bura hai.

Railway crossing ke gatekeeper ko dekhiye. Agar woh sirf trains guzarte dekhe, toh bekaar hai. Woh isliye kaam ka hai ki woh phatak gira sakta hai. Jo oversight kaam karta hai, woh aisa hi hota hai. Woh insaan ko sirf kuch outputs bhejta hai. Yeh woh hain jo unsure hain aur jo sabse zyada nuksaan kar sakte hain. Saath mein woh bhi jahan jo paaya gaya aur jo jawaab diya gaya, aapas mein nahi milte. Woh reviewer ko jawaab ke saath saboot bhi dikhata hai. Aur reviewer ko reject karne deta hai, sirf dekhne nahi.

Jo insaan dekh sake aur mana kar sake, woh human oversight hai. Jo insaan cheezein guzarte dekhe, woh sajaawat hai. Guard ke liye iska matlab tha unsure cases, har sau mein kuch. Har ek mein sentence aur proposed action saath-saath dikhta tha, aur do buttons.

Doosri baat woh thi jo Lakshmi ne har company mein dekhi thi jahan usne kaam kiya. Staff apni marzi se free consumer AI tools chalate hain. Aksar woh office ke documents paste karte hain. Woh aisa isliye karte hain ki tools kaam ke hain, aur company ka diya koi tool utna achha nahi. Yeh hai **shadow AI**. Sochiye ki staff apni almari use kar raha hai kyunki office ki almari toot gayi hai. Ban lagana kam hi kaam karta hai. Ban kaagaz par rule badalta hai, logon ka kaam nahi.

Farah ne thoda sharmate hue haath uthaya. Uski team customers ka Hinglish ek translation site par paste karti thi, taaki sahi jawaab de saken. Usne unhe mana kiya tha. Unhone theek hai kaha, aur phir bhi karte rahe. Lakshmi ne kaha ki woh isliye ki woh kaam karta hai. Phir usne poocha ki unhe kya rokega.

Anaya ne kaha ki ek aisa paste box chahiye jo utna hi achha ho. Woh text ko kahin jaane se pehle saaf bhi kare. "Toh aapka doosra product mil gaya," Lakshmi ne kaha. Us dopahar mein pehli baar woh muskuraayi.

## Taareekhein, standards aur margdarshan

Lakshmi ka aakhri page taareekhon ki ek list tha. "Sirf wahi kahiye jo aapne jaancha hai," unhone kaha, "aur bataiye ki kab jaancha."

EU AI Act 1 August 2024 ko laagu hua. Iski pabandiyaan February 2025 mein shuru huin, aur general-purpose models ke niyam August 2025 mein. Logon ko yeh batane ki duty ki woh AI se baat kar rahe hain, 2 August 2026 se laagu hai. July 2026 mein ek naye EU kaanoon, Digital Omnibus, ne high-risk ki taareekhein aage kar deen. Hiring aur loans jaise upyog ab 2 December 2027 se laagu hain, aur products mein bana AI 2 August 2028 se.

Phir aaye do standards jinke baare mein khareedne wale poochhte hain. ISO/IEC 42001 batata hai ki ek sanstha apna AI kaam kaise chalaye, aur sanstha iske against certify ho sakti hai. ISO/IEC 42005 ek system ke impact assessment ka margdarshan deta hai, aur yeh sirf margdarshan hai.

Aakhir mein aaya India ka apna margdarshan. November 2025 mein MeitY ne India AI Governance Guidelines prakashit keen. Inmein saat siddhant hain, jo bharose aur logon ko pehle rakhne se shuru hote hain. Yeh kaanoon nahi hain, aur svaichhik kadamon ko badhava dete hain. Zaroori duties ab bhi DPDP Act aur sector regulators se aati hain. Bank ke liye iska matlab hai Reserve Bank, jiski FREE-AI report wahi saat siddhant use karti hai.

"Svaichhik ka matlab vaikalpik nahi hai," Lakshmi ne kaha. "Bank ke auditors phir bhi inhe maangenge."

*Aakhri baar jaancha gaya: November 2026. Sources aur unki taareekhein app mein, reference pages ke Appendix E mein di gayi hain.*

## Saaraansh

Speed limit wali baat dobara yaad kijiye. Ek system ko kitna dikhana hoga, yeh is par tikta hai ki galat jawaab kitna nuksaan kar sakta hai. Yeh istemaal tay karta hai, technology nahi. Wahi tool ek istemaal mein harmless aur doosre mein gambhir ho sakta hai. Istemaal badalne par uska tier badal jaata hai.

- India ka data protection law personal details dhoondhne aur chhupane se bahut zyada maangta hai. Isliye privacy tool ko kabhi kisi ko compliant banane wala nahi kehna chahiye.
- Ek page ka system card batata hai ki system kis kaam ka hai aur kaise test hua. Woh yeh bhi batata hai ki woh kya galat karta hai aur use kis kaam mein nahi lena. Asli failures ki list use bharosemand banati hai.
- Deletion drill un jagahon ko dhoondhti hai jahan kisi ka data rehta hai aur aap pahunch nahi sakte. Bhooli hui jagahein aksar achhi wajah se bani copies hoti hain.
- Human oversight tabhi kaam karta hai jab reviewer saboot dekhe aur na keh sake.
- Jahan log pehle se aise tools chala rahe hain jinhe kisi ne approve nahi kiya, wahan ilaaj ek behtar approved tool hai.
- Niyamon ki taareekh wali list rakhiye, aur bataiye ki kab jaanchi. EU high-risk duties ab December 2027 se shuru hoti hain. India ki AI guidelines svaichhik hain, par zaroori duties ab bhi DPDP Act aur sector regulators se aati hain.

Aage, raat ko do bajkar das minute par ek email aata hai. Jis model par guard tika hai, woh tees din mein retire hone wala hai.
