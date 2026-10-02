---
title: Likh Kar Rakhna Taaki Doosre Bana Sakein
summary: Ek engineer guard ko napkin par banata hai, ek product manager use aisi specification mein badalti hai jisse ek ajnabi bana sake, aur ek support agent dikhata hai ki kaagaz ka mock-up woh dhoondh leta hai jo meeting nahi dhoondh paati.
course: a7
terms:
  - PRD | product requirements document: woh kaagaz jo batata hai ki kya banana hai aur kyun, problem aur uske saboot se shuru karke | product requirements document
  - acceptance criteria | woh shartein jo kaam ke ek tukde ko "ho gaya" maane jaane ke liye poori karni hoti hain, har ek aise likhi gayi ki jaanchi ja sake | acceptance criterion
  - user story | value ka ek hissa user ki taraf se bataya gaya: woh kaun hain, kya chahte hain, aur kyun | user stories, job story
  - edge case | ek anokha input ya halat jo woh cheezein tod deta hai jinhe aam cases kabhi chhoote nahi | edge cases
  - MVP | minimum viable product: sabse chhoti cheez jo asli users ke saath aapki sabse risky assumption ko aazmaye | minimum viable product
  - vertical slice | ek patla chalta hua version jo system ki har layer se guzarta hai, taaki ek asli user jaldi kuch aazma sake | vertical slices, thin slice
  - sprint | ek tay avadhi, aamtaur par ek ya do hafte, jisme team plan karti hai, banati hai, dikhati hai aur review karti hai | sprints
  - time-box | anishchit kaam ko diya gaya tay samay, jiske ant mein faisla hota hai | time-boxes, time-boxed
  - prototype | ek mota, sasta version jo asli ke bante se pehle kuch seekhne ke liye banaya jaata hai | prototypes
  - usability test | ek asli insaan ko prototype se koi kaam poora karte hue dekhna, bina use madad diye | usability tests
  - quasi-identifier | aisi detail jo akeli nirdosh hai par doosron ke saath milkar ek insaan ki taraf ishaara kar sakti hai, jaise umar, gaon aur ek durlabh bimari | quasi-identifiers
  - redact | kisi detail ko poori tarah hata dena, jaise use [PAN] shabd se badal kar | redaction
  - mask | kisi detail ka ek hissa chhupana par uski shape rakhna, jaise 98******12 | masking, masked
  - pattern checker | guard ka pehla hissa: yeh un details ko dhoondhta hai jo hamesha ek hi shape ki hoti hain, jaise PAN ya mobile number, tay niyamon se | pattern checkers
  - name-and-place finder | guard ka doosra hissa: yeh un details ko dhoondhta hai jinki koi tay shape nahi, jaise kisi insaan ka naam, pata ya employer | name-and-place finders
  - context judge | guard ka teesra hissa: yeh un chhote vaakyon ko padhta hai jinhe pehle do hisse tay nahi kar paaye aur faisla karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | context judges
  - rule-keeper | guard ka chautha hissa: yeh tay karta hai ki mili hui har detail ke saath kya karna hai, jaise hata do, mask karo, jaane do ya poochho | rule-keepers
---

Imran ne guard ko neeche ki mithai ki dukaan ke ek napkin par banaya, ek aisi pencil se jise baar-baar chaatna padta tha.

Isme chaar minute lage. Baayen ek lambe dibbe par usne likha *message*. Daayen ek lambe dibbe par *safe message*. Dono ke beech chaar chhote dibbe ek line mein aaye, aur har ek ke neeche usne teen shabd likhe, ek aise insaan ke befikr bade akshron mein jo pandrah saal se architecture diagrams banata raha ho aur ek baar bhi use pasand na aaya ho.

"Mujhe yeh lagta hai ki yeh yahi hai," usne kaha. "Mujhe sudhaaro."

Anaya napkin ko der tak dekhti rahi. Yeh pehli baar tha ki kisi ne uska idea draw kiya tha, aur woh uske dimaag mein jitna tha usse chhota bhi lag raha tha aur thos bhi.

## Guard kin cheezon se bana hai

Pehla dibba, Imran ne samjhaya, woh sab pakadta tha jiski ek tay shape ho. PAN hamesha paanch bade akshar, chaar ank aur ek bada akshar hota hai. Aadhaar number barah ank ka hota hai. Mobile number das ank ka hota hai aur chhe, saat, aath ya nau se shuru hota hai. Ek rule inhe waise hi pakka dhoondh leta hai jaise scale seedhi line ko dhoondhta hai, aur woh turant, muft, har baar ek jaisa karta hai. Unhone ise *pattern checker* kaha.

Doosra dibba un details ke liye tha jinki koi shape hi nahi. "Ramesh Jain" ya "14 Sector 15, Gurgaon" ya "Acme Bank" mein kuch bhi kisi pattern ka nahi hota, isliye koi tay rule unhe nahi dhoondh sakta. Kisi ko vaakya padhna aur samajhna padega ki yeh shabd ek insaan hai aur woh ek jagah. Is dibbe ko usne *name-and-place finder* kaha.

Teesra dibba woh tha jiske baare mein use sabse kam yakeen tha. Kuch vaakyon mein na koi number hota hai na koi naam, phir bhi woh bilkul ek insaan ki taraf ishaara karte hain: *Main apne gaon ka akela diabetic patient hoon jiska pichhle saal transplant hua.* Is tarah ki details, akeli nirdosh aur saath mein tez, ka ek naam hai: woh *quasi-identifiers* hain. Jo dibba inhe padhe aur parakhe woh dheema aur mehnga hoga, isliye plan yeh tha ki use sirf unhi kuch vaakyon ke baare mein poochha jaye jo pehle do dibbe tay nahi kar paaye. Usne ise *context judge* kaha.

Aakhri dibba kuch dhoondhta nahi tha. Woh faisla karta tha. Baaki dibbon ne jo kuch dhoondha, uske baad woh har detail ke liye chaar cheezon mein se ek chunta tha. Woh detail ko *redact* kar sakta tha, jiska matlab hai use poori tarah hata dena aur uski jagah [PAN] jaisa label chhod dena. Woh use *mask* kar sakta tha, jo ek hissa chhupata hai aur shape rakhta hai, taaki mobile number 98******12 ban jaye aur agent phir bhi dekh sake ki wahan ek number tha. Woh detail ko jaane de sakta tha. Ya woh insaan se poochh sakta tha. Chunav is par tikta tha ki number kyun ikattha kiya ja raha hai. Delivery ke liye delivery ka pata chahiye. Late fees ke baare mein poochhne ke liye pehchaan ka number nahi chahiye. Yeh tha *rule-keeper*.

"Pattern checker, name-and-place finder, context judge, rule-keeper," Anaya ne unhe aazmate hue kaha. "Yeh toh parivaar jaisa lagta hai."

"Yeh ek pipeline hai," Imran ne kaha. "Par theek hai. Parivaar."

## Problem se shuruaat

Napkin ek sketch tha, aur sketch se doosra insaan bana nahi sakta. Use chahiye tha ek *PRD*, product requirements document, jo batata hai ki kya banana hai aur kyun. "Kyun" jitna lagta hai usse zyada zaroori hai. Engineers behtar faisle tab karte hain jab unhe problem pata ho, aur bure faisle tab jab unhe bina wajah ke features ki list thama di jaaye.

Usne wahin se shuru kiya jahan document shuru hona chahiye, problem aur uske saboot se: saintees conversations, interview numbers, greeting jo details ka nyota deti thi. Uske baad kiske liye tha tool, aur kiske liye nahi. Uske baad scope, ek section ke saath jise usne asli dhyaan se likha: jaan-boojh kar kya chhoda gaya. Usne strategy ki Won't list seedhe usme utaar di. Phir user ko kya dikhega jab yeh kaam kare, jab yeh anishchit ho, jab yeh fail ho, aur jab yeh mana kar de. Phir woh tests jo ise paas karne the, safalta kaise naapi jayegi, release kaise hoga, aur use abhi kya nahi pata tha.

Achhe document ki jaanch ek hi sawaal tha: *kya ek ajnabi ise bana sakta hai aur jaan sakta hai ki woh kab poora hua?* Yeh lagbhag poori tarah ek section par tika tha.

## Poora hua, aise jisse jaancha ja sake

PRD ka sabse zyada kaam karne wala hissa "poora hua" ki shartein hain. Inhe *acceptance criteria* kehte hain, aur inme se har ek aisi honi chahiye jo test ki ja sake, aur sabse aam galti ek aisi likhna hai jo na ki ja sake.

| Jo test nahi ho sakti | Jo test ho sakti hai |
| --- | --- |
| Yeh pehchaan ke numbers sahi dhoondhta hai | Asli conversations ke ek set mein, jo pehle se haath se marked hai, har sau pehchaan ke numbers mein se kam se kam 95 chhupe jaate hain |
| Yeh tez hai | Yeh jawaab mein ek second ke ek tihaayi se zyada nahi jodta |
| Yeh bure input ko sambhalta hai | Agar message khaali ho ya sirf emoji ho, toh woh bina badle nikal jaata hai aur kuch error ke roop mein log nahi hota |

Usne pehli ki shape par dhyaan diya. Usme yeh nahi likha tha ki *har* number mil jayega, kyunki nahi milega. Usme likha tha kitne, kitne mein se, kis se mila kar. Jo tool text padhta aur likhta hai, uske liye "poora hua" ek sahi jawaab ka waada nahi hota. Yeh ek rate hota hai, un udaharanon par naapa gaya jinhe kisi ne pehle se mark kiya ho, seema likhi hui ke saath. Jo cheez rate ko arthpurn banati hai woh marked udaharan hain, aur uske paas abhi woh nahi the, aur usne yeh open-questions list mein bade akshron mein likha.

## Anokhe cases

Kaam ke har tukde ko ek chhoti kahani chahiye, user ki taraf se, apni shartein ke saath. *User story* value ka ek hissa bayaan karti hai: *Ek support agent ke roop mein, main chahta hoon ki chat padhte hue pehchaan ke numbers chhupe rahein, taaki main woh na dekhoon jiski mujhe zaroorat nahi.* Uska ek rishtedar, job story, role ki jagah halat se shuru karta hai, aur engineers ko zyada kaam ka milta hai: *Jab main loan ke baare mein poochhne wale customer ki chat kholta hoon, main chahta hoon ki koi bhi pehchaan ka number chhupa ho, taaki main use sambhale bina madad kar sakoon.*

Stories ko agla jo chahiye, aur jahan zyadatar museebat rehti hai, woh hain *edge cases*: woh anokhe inputs jinhe aam cases kabhi chhoote nahi. Farah ki team aur Imran ki yaaddasht ne ek list di jo Anaya ko pehle darawani aur phir mazedaar lagi.

| Case | Kya hona chahiye |
| --- | --- |
| Spaces ya dash ke saath likha number: 4321-5678-9012 | Ise waise chhupao jaise woh aam tareeke se likha ho |
| Ek number do lines mein toota hua | Dono hisse chhupao |
| Number ke bagal mein galat spelling "adhar" ya "mobil" | Phir bhi number chhupao |
| Aadha chhupa hua mobile number: 98xxxxxx12 | Ise chhod do, aur report mat karo |
| Barah ank ka order number jo pehchaan ka number nahi hai | Ise mat chhupao, warna agent apna kaam nahi kar sakta |
| Hindi lipi mein Hindi ankon ke saath message | Ise chhupao |
| Tool tay nahi kar paata | Yeh kahe, aur kisi insaan ko tay karne de |

Aakhri row woh thi jo usne khud jodi, aur wahi product aur juae ke beech ka farak thi. Jo software text padhta hai woh kabhi-kabhi anishchit hoga, aur product ko batana padta hai ki tab woh kya karta hai.

## Sabse patli cheez jo kaam karti hai

"Kahan se shuru karein?" Imran ne poochha. "Main poora layers mein bana sakta hoon. Pehle woh hissa jo chat padhta hai, phir dhoondhna, phir chhupana, phir agent ko kya dikhta hai. Chhathe hafte tak sab ek saath chalne lagega."

"Aur paanchve hafte mein?"

"Kuch nahi chalega."

Kaam ko layers mein kaatna aur slices mein kaatna, yahi farak hai. Pehla ek-ek layer banata hai, aur aakhri khatam hone tak kuch istemaal-layak nahi hota. Doosra har layer ka ek patla version banata hai, taaki shuruaat se kuch kaam kare. Ek *vertical slice* sab kuch ke aar-paar jaata hai, patla. Anaya ne likha ki pehla kaisa hona chahiye: ek kism ka number, use likhne ka ek tareeka, message ke aane se lekar agent ko woh chhupa dikhne tak, ek log line ke saath jo bataye ki kya kiya gaya.

Aisa slice *MVP* ka kendra hai, minimum viable product, jo sabse chhoti cheez hai jo asli users ke saath aapki sabse risky assumption ko aazmati hai. Yeh sab kuch ka chhota version nahi hai. Yeh us ek cheez ka ek chhota version hai jo sach honi hi chahiye.

## Do-do hafte mein

Imran ki team *sprints* mein kaam karti thi, do hafte ke tay daur. Har ek plan se shuru hota hai aur demonstration aur ek chhoti meeting par khatam, ki kya achha gaya aur kya badalna chahiye. Demonstration chalte software ka hota hai, kabhi slides ka nahi.

Estimate karna, par, dikkat tha. Imran bata sakta tha ki barah ankon ka rule kitna time lega. Woh nahi bata sakta tha ki Hinglish mein naam dhoondhne wali cheez banane mein kitna lagega, kyunki use pata nahi tha ki yeh ho bhi sakta hai ya nahi. Isliye unhone *time-box* use kiya: ek tay samay, ant mein ek faisle ke saath. *Teen din. Agar asli conversations mein yeh har sau naam mein se sattar se kam dhoondhta hai, toh ruko aur dobara socho.* Time-box avadhi ke andaaze ko ek faisle ke bindu mein badal deta hai.

## Pehle kaagaz par

Anaya ne agent ki screen chaar kaagaz par banayi: chat jisme ek number mask hai, wahi chat ek note ke saath jo kehta hai *1 detail chhupi, wajah dekhne ke liye click karein*, ek chat jahan tool anishchit hai, aur ek chat jahan usne woh chhupa diya jo agent ko chahiye tha. Kuch seekhne ke liye banayi gayi ek mota, sasti cheez *prototype* hai, aur use kitni dekhbhaal chahiye yeh sawaal par tikta hai. Kaagaz bata sakta hai ki flow samajh aata hai ya nahi. Clickable mock-up bata sakta hai ki log apna raasta dhoondh lete hain ya nahi. Asli output par chalne wali cheez bata sakti hai ki woh us par bharosa karte hain ya nahi.

Friday ko usne Farah ki saathi Neha ko chaar kaagajon ke saath ek mez par bithaya aur use nirdesh nahi, ek kaam diya: "Ek customer kehti hai ki uska callback number chhupa diya gaya. Pata lagao kya hua."

Is tarah ka *usability test* bayaan karna aasaan aur karna mushkil hai, kyunki poora anushasan madad na karne mein hai. Neha ne doosra kaagaz uthaya, use gyarah second dekha, teesra uthaya, rakh diya, aur kaha, "Ise wapas laane ke liye kahan click karun?"

Anaya ki pen hawa mein ruk gayi. Uska poora vajood ishaara karna chahta tha. Woh chupchaap baithi rahi.

"Ise wapas laane ka koi tareeka nahi hai," Neha ne madadgaar andaaz mein khud se kaha. "Toh mujhe Imran se poochhna padega."

Yeh us hafte ke sabse keemti gyarah second the. Neha jaise teen se paanch log aapko design ki zyadatar gambhir problems dikha denge, aur har hichkichahat ek finding hai. Anaya ne PRD mein ek line jodi: *Agent chhupi hui detail ko ek chat ke liye dekh sakta hai, wajah record hone ke saath.* Yeh use sujhi hi nahi thi, aur kisi meeting ko kabhi nahi sujhti.

## Saath le jaane layak baatein

Specification problem se shuru hoti hai, batati hai ki kya chhoda gaya hai, aur "poora hua" ko aisi shartein mein kehti hai jinhe test kiya ja sake. Jo kuch text padhta aur likhta hai, uske liye "poora hua" ek rate hai jo un udaharanon par naapa gaya jinhe kisi ne pehle se mark kiya ho. Stories, apne anokhe cases ke saath, wahin hain jahan zyadatar asli kaam chhupa hai. Sabse chhota kaam ka pehla version har hisse ke aar-paar ek patla slice hai, ek poori layer nahi. Tay do-do hafte ke sprints team ko imaandaar rakhte hain, aur time-box anishchit kaam ko ek ant deta hai. Aur kuch banane se pehle, ek asli insaan ke saamne rakha gaya kaagaz ka version, kuch na bolne ke anushasan ke saath, woh problems dhoondh leta hai jo koi meeting nahi dhoondh sakti.
