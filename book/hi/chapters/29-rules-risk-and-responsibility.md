---
title: Niyam, Risk Aur Zimmedaari
summary: Compliance head samjhati hai ki bank mein bees saal ne use kaagazi kaam ke baare mein kya sikhaya, aur team woh ek page ka document likhti hai jo batata hai ki guard kis cheez ke liye hai, kahan galat hota hai aur ise kis kaam mein kabhi nahi lena chahiye. Phir woh ek customer ko mitane ki koshish karte hain aur dekhte hain ki uska data kahan rehta hai. Chapter risk tiers, India ka data protection kanoon, system cards, deletion drills, human oversight aur shadow AI samjhata hai.
course: ch17
goals:
  - samjhana ki kisi system ka istemaal, uski technology nahi, uska risk tier kaise tay karta hai
  - batana ki India ka data protection kanoon kisi organisation se kya maangta hai, aur privacy tool ko kisi ko compliant banane wala kyun nahi kehna chahiye
  - saboot par aadhaarit known limitations ke saath ek page ka system card likhna
  - deletion drill chalana, aisa human oversight design karna jo asal mein reject kar sake, aur shadow AI ka jawaab behtar sanctioned tool se dena
terms:
  - risk tier | ek star, jo is baat se tay hota hai ki galat jawaab kitna nuksaan kar sakta hai, jo tay karta hai ki kisi system ko kitne documentation, jaanch aur saboot ki zaroorat hai; istemaal tier tay karta hai, technology nahi | risk tiers
  - system card | ek AI system ka ek page ka vivaran: woh kis liye hai, woh kaun sa data istemaal karta hai, use kaise test kiya gaya, woh kya galat karta hai aur use kis kaam ke liye istemaal nahi karna chahiye | system cards
  - deletion drill | yeh maan lena ki ek customer ne apna data delete karne ko kaha hai aur woh har jagah dhoondhna jahan woh rehta hai, yeh jaanne ke liye ki kaun si jagahon tak aap pahunch nahi sakte | 
  - human oversight | ek insaan jo kisi output ka saboot dekh sakta hai, aur use thukra sakta hai; outputs ko guzarte dekhna isme nahi ginta | 
  - shadow AI | staff ka khud se consumer AI tools istemaal karna, aksar internal documents paste karke, kyunki tools kaam ke hain aur koi manzoor shuda cheez utni achhi nahi | 
  - DPDP Act | India ka Digital Personal Data Protection Act, 2023, jo un sansthaon ke liye kartavya tay karta hai jo personal data sambhalti hain, use dhoondhne aur chhupane se kahin zyada | Digital Personal Data Protection Act
---

August ke pehle Tuesday ko Lakshmi Iyer ne ek lambi dopahar ki shuruaat bank mein apne saalon ki ek kahaavat se ki: agar woh likha nahi gaya, toh woh hua hi nahi. Imran Qureshi laptop laya tha, Anaya answer key laayi thi, jo ab do sau chaar rows par thi, aur Farah Sheikh bhune moongphali ka ek thaila lekar aayi thi jab ki use wahan hone ka koi khaas kaam nahi tha, aur use rukne diya gaya.

Lakshmi ne kaha ki woh bees saal se woh insaan rahi hai jo kaagaz maangta tha, aur log sochte the ki woh kaam dheema kar rahi hai. Woh asal mein yeh pakka kar rahi thi ki jab kuch galat ho, toh koi bata sake ki system kis cheez ke liye tha, use kya karna tha, aur kya test hua tha. Regulator galti ki parwaah nahi karta. Woh us galti ki parwaah karta hai jise koi samjha nahi sakta. Jo machine text padhti aur likhti hai woh ab aise sawaalon ke ek folder ke saath aati hai, aur zyadatar log maante hain ki legal team jawaab likhti hai. Folder ka lagbhag har sawaal ek product sawaal hai, aur Lakshmi vaakya likh sakti thi par sawaalon ka jawaab nahi de sakti thi.

## Case: product sawaalon ka ek folder

Folder poochhta tha ki system kis cheez ke liye hai, kise prabhaavit karta hai, galat hone par kya hota hai, aur kaun use jaanchta hai aur kis saboot ke saath. Anaya woh insaan thi jo jawaab de sakti thi. Neeche ke section dopahar ka anusaran karte hain.

## Istemaal risk tay karta hai

Ek system ko zimmedaar hone ke liye kitna karna chahiye, yeh technology par nirbhar nahi karta. Yeh is par nirbhar karta hai ki galat jawaab kitna nuksaan kar sakta hai. Lakshmi ne chaar row banaye.

Table: Risk ke chaar star
| Star | Istemaal ka prakaar | Kya zaroori hai |
| --- | --- | --- |
| Allowed nahi | Logon ko unke saamajik vyavhaar ke liye score karna; biometrics ke hisaab se kuch tarah ki chhaantni | Allowed nahi, chahe kitne bhi safeguards joden |
| High risk | Hiring, credit ke faisle, shiksha aur zaroori sevaon tak pahunch | Documentation, asli insaani jaanch, accuracy ka saboot, logging aur aupchaarik assessment |
| User ko batao | Chatbots, banayi gayi images | Itna kaafi hai ki user ko bataya jaaye ki woh machine se baat kar raha hai |
| Minimal | Zyadatar andar ke tools | Achha saadhaaran abhyaas |

Is tarah ke niyam pehle Europe mein phaile aur phir doosri jagah companies ke purchasing departments mein, aur woh *risk tier* ki tarah kaam karte hain: ek star jo galat jawaab ke nuksaan se tay hota hai, aur jo tay karta hai ki system ko kitna dikhana padega.

Do nateeje logon ko chaunkate hain. Pehla yeh ki istemaal tier tay karta hai, model nahi. Wahi system andar ke answer-finder ke roop mein kam-risk ho sakta hai aur high-risk ho sakta hai agar koi use yeh tay karne mein lagaye ki kise loan mile. Doosra yeh ki jab istemaal badalta hai toh tier badalta hai, jo aksar launch ke baad hota hai bina kisi ke documents update kiye.

Anaya ne poochha ki guard kahan baithta hai. Chat mein pehchaan ke numbers chhupane wale madadgaar ke roop mein, Lakshmi ne kaha, woh minimal hai, aur jis chatbot ke saamne woh khada hai use batana padega ki woh machine hai. Agar koi guard ki khojon ko yeh tay karne mein lagane lage ki customer bharose layak hai ya nahi, toh woh ek alag cheez hogi. Usne Anaya se ise likhne ko kaha: yeh folder ka sabse upyogi vaakya tha.

## India ka kanoon, aur guard kya nahi hai

Imran ne woh sawaal poochha jise Anaya taal rahi thi: kya guard compliant hai? Lakshmi ne poochha, kis cheez ke saath? Kanoon ke saath, Imran ne kaha, India ke.

*DPDP Act* 2023 ka Digital Personal Data Protection Act hai, jiske Rules 2025 mein notify hue. Woh har us organisation ke liye farz tay karta hai jo personal data sambhalta hai: saaf notices, sahmati, security safeguards, data kitni der rakha ja sakta hai ismein seema, breaches se nipatne ka tareeka, aur bahut kuch. Personal details dhoondhna aur chhupana kisi organisation ko kam ikattha karne aur aage bhejne mein madad karta hai. Yeh ek technical hissa hai. Yeh compliance nahi hai, aur koi tool compliance nahi hai.

::: watch Kabhi "compliant" mat kaho
Guard ke baare mein likhe har document mein use ek aisa privacy tool bataya jaata hai jo organisation ko kam personal data ikattha aur share karne mein madad karta hai. Use kabhi kisi ko compliant banane wala nahi bataya jaata, Sahaj, kisi customer ya kisi aur ko. Lakshmi ne kaha ki agar koi salesman kabhi guard ke baare mein woh vaakya likhega, toh use pata chal jaayega. Anaya ne niyam ek page ki pehli line par likha, aur baad mein specification, system card aur ek website ke saamne wale hisse mein, jo abhi tha hi nahi.
:::

## Ek page

Folder ke kendra ka document ek hi page hai, *system card*. Woh batata hai ki system kis cheez ke liye hai, kaun sa data istemaal karta hai, kaise test hua aur kya galat karta hai. Minimal tier se upar kisi bhi cheez ko ek chahiye. Anaya ne kabhi ek nahi likha tha, par woh chhe mahine se bina jaane uski cheezein ikatthi kar rahi thi. Usne ise ek ghante mein doosron ke saamne likha, answer key ke numbers ke saath.

::: case Bharat Privacy Guard: system card
**Yeh kis cheez ke liye hai.** Customer messages mein English, Hindi aur Hinglish mein personal details pehchaanna, aur unhe message store ya aage bheje jaane se pehle chhupana.

**Kya istemaal karta hai.** Customer chat messages. Woh apna koi message text store nahi karta.

**Kaise test hua.** 204 rows ki haath se chinhit answer key par, version 7, jisme scan kiye gaye aur mishrit-bhasha ke udaharan hain.

**Gyaat seemayein.** Roman Hindi mein "ji" ke saath likhe das mein se lagbhag ek naam chhod deta hai. Kuch order numbers galat chhupa deta hai. Photographs nahi padhta. Tamil, Bengali, Telugu, Marathi ya Gujarati par test nahi hua.

**Scope se bahar.** Ise customer ke baare mein kuch tay karne ke liye nahi lena chahiye. Woh Sahaj ko ya kisi user ko kisi kanoon ke saath compliant nahi banata.
:::

Lakshmi ne Anaya se seemayein zor se padhne ko kaha, aur phir kaha ki yahi hissa hai jo use baaki par bharosa dilata hai. Seemaon ka section nakal karne mein sabse mushkil aur sabse vishwaasneeya hai: koi bhi keh sakta hai ki system kya achha karta hai, aur asli failures ki ek list jiske peechhe saboot ho, padhne wale ko batati hai ki kisi ne dekha hai. Scope se bahar wali line sabse upyogi hai, kyunki woh istemaal ko bina kisi ke dhyaan diye ooncha tier mein bahne se rokti hai.

## Mr. Deshpande ko dhoondhna

Lakshmi ne phir abhyaas rakha. Usne mez par ek card sarkaya jis par ek asli customer ka naam tha, Mr. Deshpande, Satara ka ek buzurg jisne June mein Sahaj ko likha tha ki uska data hataya jaaye aur jise vaada kiya gaya tha ki hataya jaayega. Woh abhi nahi hua tha. Anaya ko kalpana karni thi ki anurodh abhi aaya hai aur woh jahan-jahan rehta hai woh sab dhoondhna tha.

*Deletion drill* ek insaan ka data jahan-jahan store hai woh sab dhoondhta hai, yeh jaanne ke liye ki kahan tak pahunch nahi hai. Ek insaan ka data saat jagah ho sakta hai: asli documents, unse kate chunks, search index, cache, provider ke logs, company ke apne logs, aur asli traffic se bana koi bhi test set. Kai teams ko pata chalta hai ki kam se kam do unki pahunch se bahar hain.

Table: Mr. Deshpande ka data kahan ho sakta tha
| Jagah | Kya Sahaj ise hata sakta tha? |
| --- | --- |
| Support system | Haan, ek row hata sakte hain |
| Chat history | Haan |
| Search index | Usme sirf policies thi, isliye hataane ko kuch nahi |
| Cache | Asthaayi |
| Sahaj ke apne logs | Haan, customer number se, ek din ke kaam mein |
| Bahari company ke logs | Nahi. Uski terms ke mutabik woh tees din rehte hain, aur Sahaj use chhota nahi kar sakta |

Phir Anaya ko kuch yaad aaya aur woh thithak gayi. June mein usne sau outputs chhapwaye the taaki woh aur Farah unhe padhkar chinhit kar sakein. Woh uske desk ke neeche ke daraaz mein pade the. Woh export kiye chats se aaye the aur unme asli naam the. Lakshmi ne kaha ki yahi hamesha wahi hota hai: kisi ne asli data kisi cheez mein copy kiya, kisi achhi wajah se, aur usme kuch bhi kisi insaan tak wapas nahi jaata. Test sets aur printouts woh jagahein hain jo sabse zyada bhuli jaati hain, aur provider ke caches dekhne mein sabse mushkil hain.

Anaya ne us shaam Farah ko gawah rakhkar printouts shred kiye aur log mein tareekh likhi. Phir usne us prakriya mein ek line joda jisne samasya paida ki thi: har data ka kahan se aaya yeh jab woh ikattha ho tab record karo, kyunki baad mein use banaya nahi ja sakta. Jo deletion anurodh poora nahi kiya ja sakta woh ek tareekh wali failure hai.

## Ek insaan jo "na" keh sake

Lakshmi ke paas do aur baatein thi, aur woh unhe jaldi se kar gayi.

Pehli human oversight thi. Sab likhte hain "har output ko ek insaan dekhta hai", aur Anaya ne PRD ke pehle draft mein yahi likha tha. Lakshmi ne poochha ki roz chaar hazaar outputs ke saath ek reviewer kitne din chalega. Uske anubhav mein lagbhag do hafte, jiske baad reviewer bina padhe approve karne lagta hai, aur document kehta hai ki ek insaan sab kuch jaanchta hai jabki koi nahi jaanchta. Yeh daava na karne se bhi bura hai.

Jo oversight kaam karta hai woh nishaane par hota hai. Woh un outputs ko insaan ke paas bhejta hai jo anishchit hain, ya sabse zyada nuksaan karenge, ya jahan jo mila woh jo jawaab diya gaya usse mel nahi khata. Woh reviewer ko jawaab ke saath saboot bhi dikhata hai. Aur woh reviewer ko reject karne deta hai, sirf dekhne nahi. Jo insaan dekh aur mana kar sakta hai woh *human oversight* hai. Jo insaan cheezein guzarte dekhta hai woh sajaavat hai. Guard ke liye iska matlab tha anishchit cases, sau mein kuch, vaakya aur prastaavit action saath-saath, aur do button.

Doosri baat woh thi jo Lakshmi ne har us company mein dekhi thi jahan usne kaam kiya. Staff apne aap consumer AI tools istemaal karte hain, aam taur par internal documents paste karke, kyunki tools upyogi hain aur company ka diya koi bhi utna achha nahi. Yeh *shadow AI* hai, aur ise mana karna shaayad hi kaam karta hai, kyunki yeh niyam badalta hai, vyavhaar nahi.

Farah ne sharmaate hue haath uthaya. Uski team customers ka Hinglish ek translation site par paste karti thi taaki pakka kar sake ki woh theek reply likh rahi hai. Usne unhe mana kiya tha aur unhone theek hai kaha tha, aur phir bhi karte the. Lakshmi ne kaha ki yeh isliye hai kyunki woh kaam karta hai, aur poochha ki kya cheez unhe rokegi. Anaya ne kaha ki ek aisa paste box jo utna hi achha ho aur jo paste ki hui cheez ko kahin jaane se pehle saaf kar de. "Toh tumhara doosra product hai," Lakshmi ne kaha, aur us dopahar pehli baar muskuraayi.

## Saaraansh

Ek system ko kitna dikhana padta hai yeh is par nirbhar karta hai ki galat jawaab kitna nuksaan kar sakta hai, aur use istemaal tay karta hai, technology nahi. Wahi tool ek istemaal mein nirdosh ho sakta hai aur doosre mein gambhir, aur jab istemaal badalta hai toh tier badal jaata hai.

- India ka data protection kanoon personal details dhoondhne aur chhupane se bahut zyada maangta hai, isliye privacy tool ko kabhi kisi ko compliant banane wala nahi kehna chahiye.
- Ek page ka system card batata hai ki system kis cheez ke liye hai, kaise test hua, kya galat karta hai aur ise kis kaam mein nahi lena chahiye. Asli failures ki uski list use vishwaasneeya banati hai.
- Deletion drill un jagahon ko dhoondhta hai jahan ek insaan ka data hai jahan tak pahunch nahi hai. Bhuli hui jagahein aam taur par ek achhi wajah se banayi gayi copies hoti hain.
- Human oversight tabhi kaam karta hai jab reviewer saboot dekhe aur "na" keh sake.
- Jahan log pehle se aise tools istemaal karte hain jinhe manzoori nahi mili, wahan ilaaj ek behtar sanctioned vikalp hai.
