---
title: Rules, Risk Aur Zimmedaari
summary: Lakshmi batati hai ki bank mein bees saal kaam karke usne paperwork ke baare mein kya seekha. Phir team ek page ka document likhti hai: guard kis kaam ke liye hai, kahan galat hota hai, aur use kis kaam mein kabhi nahi lena chahiye. Uske baad woh ek customer ko delete karne ki koshish karte hain aur dekhte hain ki uska data kahan-kahan rehta hai. Chapter mein risk tiers, India ka data protection law, system cards, deletion drills, human oversight aur shadow AI aate hain.
course: ch17
goals:
  - samjhana ki system ka risk tier uski technology se nahi, uske istemaal se tay hota hai
  - batana ki India ka data protection law kisi organisation se kya maangta hai, aur privacy tool ko kisi ko compliant banane wala kyun nahi kehna chahiye
  - ek page ka system card likhna, jiski known limitations ki list saboot par tiki ho
  - deletion drill chalana, aisa human oversight banana jo asal mein na keh sake, aur shadow AI ka jawaab ek behtar approved tool se dena
terms:
  - risk tier | ek level, jo is se tay hota hai ki galat jawaab kitna nuksaan kar sakta hai, aur jo tay karta hai ki system ko kitna documentation, checking aur saboot chahiye; tier istemaal se tay hota hai, technology se nahi | risk tiers
  - system card | AI system ka ek page ka description: woh kis kaam ke liye hai, kaun sa data use karta hai, use kaise test kiya gaya, woh kya galat karta hai, aur use kis kaam mein nahi lena chahiye | system cards
  - deletion drill | maan lena ki ek customer ne apna data delete karne ko kaha hai, aur phir woh har jagah dhoondhna jahan uska data rehta hai, taaki pata chale ki kin jagahon tak aap pahunch nahi sakte | 
  - human oversight | ek insaan jo output ke peeche ka saboot dekh sakta hai aur use reject kar sakta hai; outputs ko bas guzarte dekhna isme nahi ginta | 
  - shadow AI | staff ka apni marzi se consumer AI tools istemaal karna, aksar internal documents paste karke, kyunki woh tools kaam ke hain aur company ka approved koi tool utna achha nahi | 
  - DPDP Act | India ka Digital Personal Data Protection Act, 2023, jo personal data sambhalne wali organisations ke liye duties tay karta hai, aur woh data dhoondhne aur chhupane se kahin zyada hain | Digital Personal Data Protection Act
---

August ke pehle Tuesday ko Lakshmi Iyer ne ek lambi dopahar ki shuruaat apne bank ke dinon ki ek kahawat se ki: agar likha nahi gaya, toh hua hi nahi. Imran Qureshi laptop laya tha. Anaya answer key laayi thi, jisme ab do sau chaar rows ho chuki thi. Farah Sheikh bhune hue peanuts ka ek packet lekar aayi thi, bina kisi khaas wajah ke, aur use rukne di gayi thi.

Lakshmi ne kaha ki woh bees saal tak woh insaan rahi hai jo paperwork maangta hai. Log sochte the ki woh kaam dheema kar rahi hai. Asal mein woh yeh pakka kar rahi thi ki jab kuch galat ho, toh koi bata sake ki system kis kaam ke liye tha, use kya karna chahiye tha, aur kya test hua tha. Regulator ko failure se dikkat nahi hoti. Dikkat us failure se hoti hai jise koi samjha na sake.

Aaj text padhne aur likhne wali machine ek aise hi sawaalon ke folder ke saath aati hai. Zyadatar log maan lete hain ki jawaab legal team likhegi. Lekin us folder ke lagbhag har sawaal ek product ka sawaal hai. Lakshmi sentences likh sakti thi, lekin sawaalon ke jawaab nahi de sakti thi.

## Case: product sawaalon ka folder

Folder chaar cheezein poochhta tha. System kis kaam ke liye hai? Kispar asar daalta hai? Galat hone par kya hota hai? Aur kaun check karta hai, kis saboot ke saath? Inka jawaab Anaya de sakti thi. Neeche ke sections us dopahar ka hisaab hain.

## Istemaal risk tay karta hai

Ek seedhi baat se shuru kijiye. Ek system ko kitna zimmedaar hona padega, yeh technology par nahi tikta. Yeh is par tikta hai ki galat jawaab kitna nuksaan kar sakta hai. Lakshmi ne yeh dikhane ke liye chaar rows banayi.

Table: Risk ke chaar levels
| Level | Kaise istemaal | Kya zaroori hai |
| --- | --- | --- |
| Allowed nahi | Logon ko unke social behaviour par score karna; biometrics se kuch tarah ki sorting | Allowed nahi hai, kitne bhi safeguards daalo |
| High risk | Hiring, credit decisions, education aur zaroori services tak pahunch | Documentation, asli human check, accuracy ka saboot, logging aur formal assessment |
| User ko batao | Chatbots, generated images | Itna batana kaafi hai ki user ek machine se baat kar raha hai |
| Minimal | Zyadatar internal tools | Achhi aam practice |

Aise rules Europe mein shuru hue. Ab woh doosri jagah ki bahut si companies ke purchasing departments tak pahunch gaye hain. Yeh ek **risk tier** ki tarah kaam karte hain, yaani ek level jo is se tay hota hai ki galat jawaab kitna nuksaan kar sakta hai. Tier tay karta hai ki system ko kitna kuch dikhana padega.

Tiers ke baare mein do baatein logon ko hairaan karti hain. Pehli, tier model se nahi, istemaal se tay hota hai. Wahi system ek internal answer-finder ki tarah low-risk ho sakta hai, aur agar koi use yeh tay karne mein lagaye ki loan kise milega, toh woh high-risk ho jaata hai. Doosri, istemaal badalta hai toh tier bhi badalta hai. Aksar yeh launch ke baad hota hai, aur documents koi update nahi karta.

Anaya ne poochha ki guard kahan baithta hai. Lakshmi ne kaha, chat mein identity numbers chhupane wale helper ki tarah woh minimal hai. Uske peeche jo chatbot hai, use bas batana hoga ki woh ek machine hai. Lekin agar koi guard ke findings se yeh tay karne lage ki customer bharose ke laayak hai ya nahi, toh woh kuch aur hi cheez ban jaayega. Usne Anaya se kaha ki yeh likh le. Pure folder ka sabse kaam ka sentence yahi tha.

## India ka law, aur guard kya nahi hai

Phir Imran ne woh sawaal poochha jisse Anaya bachti aa rahi thi. Kya guard compliant hai? Lakshmi ne poochha, kis cheez ke saath? Law ke saath, Imran ne kaha. India ke law ke saath.

Usne samjhaya ki **DPDP Act** matlab Digital Personal Data Protection Act, 2023 hai, jiske Rules 2025 mein notify hue. Yeh har us organisation par duties lagata hai jo personal data sambhalti hai. In duties mein saaf notices, consent, security safeguards, data kitni der rakha jaaye uski limit, breach se nipatne ka tareeka, aur bahut kuch aur shamil hai.

Personal details dhoondhna aur chhupana madad zaroor karta hai. Isse organisation kam collect karti hai aur kam aage bhejti hai. Lekin yeh sirf ek technical hissa hai. Yeh compliance nahi hai, aur koi bhi tool compliance nahi hota.

::: watch Kabhi "compliant" mat kahiye
Guard ke baare mein jo bhi document likha jaaye, usme use ek privacy tool kaha jaaye jo organisation ko kam personal data collect aur share karne mein madad karta hai. Use kabhi aisa nahi kaha jaayega ki woh kisi ko compliant banata hai, chahe Sahaj ho, koi customer ho, ya koi aur. Lakshmi ne kaha, agar kisi salesman ne guard ke baare mein yeh sentence kabhi likha, toh use pata chal jaayega. Anaya ne yeh rule ek page ki pehli line mein rakha, aur baad mein specification, system card aur ek aisi website ke front par bhi, jo abhi bani nahi thi.
:::

## Ek page

Folder ke beech mein jo document hai, woh bas ek page ka hai. Use **system card** kehte hain. Usme likha hota hai ki system kis kaam ke liye hai, kaun sa data use karta hai, kaise test hua aur kya galat karta hai. Minimal tier se upar ke har system ko ek chahiye.

Anaya ne kabhi system card likha nahi tha. Lekin woh chhe mahine se uski cheezein jama kar rahi thi, bina jaane. Usne sabke saamne ek ghante mein likh diya, answer key ke numbers use karke.

::: case Bharat Privacy Guard: system card
**Kis kaam ke liye hai.** Customer messages mein English, Hindi aur Hinglish ki personal details pakadna, aur messages store ya aage bheje jaane se pehle unhe chhupa dena.

**Kya use karta hai.** Customer chat messages. Yeh apna koi message text store nahi karta.

**Kaise test hua.** 204 rows ki haath se marked answer key par, version 7, jisme scanned aur mixed-language examples bhi hain.

**Known limitations.** Roman Hindi mein "ji" ke saath likhe lagbhag das mein se ek naam miss ho jaate hain. Kuch order numbers galat chhupa deta hai. Photographs nahi padhta. Tamil, Bengali, Telugu, Marathi ya Gujarati par test nahi hua hai.

**Out of scope.** Ise customer ke baare mein koi bhi decision lene ke liye use nahi karna chahiye. Yeh Sahaj ko, ya kisi bhi user ko, kisi law ke saath compliant nahi banata.
:::

Lakshmi ne Anaya se limitations zor se padhne ko kaha. Phir boli ki isi hisse se use baaki par bharosa hota hai. Koi bhi bata sakta hai ki system kya achha karta hai. Lekin asli failures ki list, har ek ke peeche saboot ke saath, padhne wale ko batati hai ki kisi ne sach mein dekha hai. Isliye limitations ka section sabse mushkil hai nakli banana, aur sabse zyada bharose ke laayak.

Out-of-scope wali line sabse kaam ki hai. Woh istemaal ko chupke se ek upar ke tier mein khisakne se rokti hai.

## Mr. Deshpande ko dhoondhna

Phir Lakshmi ne ek drill di. Usne table par ek card sarkaya, jis par ek asli customer ka naam tha. Mr. Deshpande Satara ke ek bujurg the. June mein unhone Sahaj ko likha tha ki unka data hata diya jaaye, aur unse vaada kiya gaya tha ki hata diya jaayega. Abhi tak hua nahi tha. Anaya ko maan lena tha ki request abhi-abhi aayi hai, aur dhoondhna tha ki woh kahan-kahan rehte hain.

Isse **deletion drill** kehte hain. Aap woh har jagah dhoondhte hain jahan ek insaan ka data store hai, taaki pata chale ki kin jagahon tak aap pahunch nahi sakte. Ek insaan ka data saat jagah ho sakta hai: original documents, unse kaate gaye chunks, search index, cache, provider ke logs, company ke apne logs, aur asli traffic se bana koi bhi test set. Bahut si teams ko pata chalta hai ki inme se kam se kam do jagah unki pahunch ke bahar hain.

Table: Mr. Deshpande ka data kahan ho sakta tha
| Jagah | Kya Sahaj ise delete kar sakta tha? |
| --- | --- |
| Support system | Haan, ek row delete ho sakti hai |
| Chat history | Haan |
| Search index | Usme sirf policies thi, isliye delete karne ko kuch nahi |
| Cache | Temporary |
| Sahaj ke apne logs | Haan, customer number se, ek din ke kaam mein |
| Bahari company ke logs | Nahi. Uski terms ke hisaab se woh tees din rehte hain, aur Sahaj use chhota nahi kar sakta |

Phir Anaya ko kuch yaad aaya, aur woh thanda pad gayi. June mein usne sau outputs print kiye the, taaki woh aur Farah unhe padh kar mark kar sakein. Woh uske desk ki neeche wali drawer mein the. Woh exported chats se aaye the, aur unme asli naam the.

Lakshmi ne kaha ki hamesha yahi wala hota hai. Koi ek achhi wajah se asli data kisi cheez mein copy kar leta hai, aur us copy mein aisa kuch nahi jo wapas kisi insaan tak le jaaye. Test sets aur printouts sabse aksar bhoole jaate hain. Provider ke caches dekhna sabse mushkil hai.

Anaya ne usi shaam Farah ko witness banakar printouts shred kiye, aur log mein date likhi. Phir usne us process mein ek line jodi jisse yeh problem hui thi. Jab data collect karo, toh likh lo ki har tukda kahan se aaya, kyunki baad mein yeh dobara banaya nahi ja sakta. Ek deletion request jo poori nahi ho sakti, woh ek failure hai jis par date padi hai.

## Ek insaan jo na keh sake

Lakshmi ke paas do baatein aur thi, aur usne unhe jaldi se nipta diya.

Pehli thi **human oversight**. Sab likhte hain "har output ko ek insaan review karta hai", aur Anaya ne bhi PRD ke pehle draft mein yahi likha tha. Lakshmi ne poochha, ek reviewer chaar hazaar outputs roz ke saath kitne din tikega? Uske tajurbe mein, lagbhag do hafte. Uske baad reviewer bina padhe approve karna shuru kar deta hai. Document tab bhi kehta rehta hai ki insaan sab kuch check karta hai, jabki asal mein koi nahi karta. Yeh us dave ko na karne se bhi zyada bura hai.

Jo oversight kaam karta hai woh targeted hota hai. Woh insaan ko wohi outputs bhejta hai jo uncertain hain, ya jinse sabse zyada nuksaan ho sakta hai, ya jahan jo mila aur jo jawaab diya gaya woh match nahi karte. Woh reviewer ko jawaab ke saath saboot bhi dikhata hai. Aur reviewer ko reject karne deta hai, sirf dekhne nahi. Jo insaan dekh bhi sake aur mana bhi kar sake, woh human oversight hai. Jo insaan cheezein guzarte dekhta hai, woh sajawat hai. Guard ke liye iska matlab tha unsure cases, sau mein kuch hi, sentence aur proposed action side by side, aur do buttons.

Doosri baat woh thi jo Lakshmi ne har company mein dekhi thi jahan usne kaam kiya. Staff apni marzi se consumer AI tools use karta hai, aksar internal documents paste karke. Woh isliye karte hain kyunki tools kaam ke hain aur company ka diya hua koi bhi tool utna achha nahi. Isse **shadow AI** kehte hain. Ban lagane se aksar kuch nahi badalta, kyunki ban policy badalta hai, behaviour nahi.

Farah ne thoda jhijhakte hue haath uthaya. Uski team customers ka Hinglish ek translation website mein paste karti thi, taaki reply sahi ho. Usne unhe mana kiya tha, unhone kaha theek hai, aur phir bhi karte rahe. Lakshmi ne kaha, kyunki woh kaam karta hai. Phir poochha ki unhe rokne ke liye kya chahiye hoga.

Anaya ne kaha, ek aisa paste box jo utna hi achha ho, aur jo paste kiye text ko kahin bhejne se pehle saaf kar de. "Toh aapka doosra product mil gaya," Lakshmi ne kaha. Us dopahar mein pehli baar woh muskuraayi.

## Saaraansh

Ek system ko kitna dikhana padega, yeh is par tikta hai ki galat jawaab kitna nuksaan kar sakta hai. Yeh istemaal tay karta hai, technology nahi. Wahi tool ek istemaal mein harmless ho sakta hai aur doosre mein serious, aur istemaal badalne par uska tier badalta hai.

- India ka data protection law personal details dhoondhne aur chhupane se bahut zyada maangta hai. Isliye privacy tool ko kabhi aisa nahi kehna chahiye ki woh kisi ko compliant banata hai.
- Ek page ka system card batata hai ki system kis kaam ke liye hai, kaise test hua, kya galat karta hai aur use kis kaam mein nahi lena chahiye. Asli failures ki list hi use bharose ke laayak banati hai.
- Deletion drill un jagahon ko dhoondhta hai jahan insaan ka data rehta hai aur jahan aap pahunch nahi sakte. Bhoole hue aksar woh copies hote hain jo kisi achhi wajah se bani thi.
- Human oversight tabhi kaam karta hai jab reviewer saboot dekhe aur na keh sake.
- Jahan log pehle se unapproved tools use kar rahe hain, wahan ilaaj ek behtar approved alternative hai.
