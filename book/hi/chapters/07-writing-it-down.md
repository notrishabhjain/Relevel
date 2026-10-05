---
title: Likh Kar Rakhna Taaki Doosre Bana Sakein
summary: Ek engineer guard ko ek napkin par banata hai, aur product manager us sketch ko aisi specification mein badalti hai jisse koi ajnabi bana sake. Chapter guard ke chaar hisse, requirements aur acceptance criteria, patle pehle versions, aur kaagaz par test se woh baat jo meeting nahi dikha sakti, yeh sab samjhata hai.
course: a7
goals:
  - guard ke chaar hisson ke naam batana aur har ek ki zimmedaari batana
  - aisa product requirements document likhna jiski "done" ki shartein test ki ja sakein
  - edge cases ki list banana aur tay karna ki jab product ko shak ho toh woh kya kare
  - ek patla pehla version banana, anishchit kaam ko time-box dena, aur asli insaan ke saath kaagaz ka prototype test karna
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

Founders ke project manzoor karne par Imran Qureshi ne guard ko neeche ki mithai ki dukaan ke ek napkin par banaya. Drawing mein chaar minute lage. Baayein taraf ek lamba dabba "message" likha tha aur daayein taraf "safe message". Beech mein chaar chhote dabbe ek line mein the, har ek ke neeche teen shabd.

Napkin ka sketch structure ke baare mein ek parikalpna hai. Isse koi cheez banayi nahi ja sakti, kyunki yeh nahi batata ki har dabba kya karega, kaise pata chalega ki dabba kaam karta hai, ya jab woh fail ho toh kya hoga. Yeh chapter us sketch ko aise document mein badalne ko dikhata hai jisse koi ajnabi bana sake, aur design ki kaagaz par pehli jaanch.

## Case: napkin par chaar dabbe

Imran ke sketch ne kaam ko chaar hisson mein baanta. Anaya ka kaam tha ki har hissa kis cheez ke liye zimmedaar hai yeh theek-theek kahe, yeh likhe ki kaun si shartein poori hone par har hissa pura maana jaayega, aur koi code likhe jaane se pehle yeh jaane ki jo log nateeja istemaal karenge woh use samajh sakte hain ya nahi.

## Guard kin cheezon se bana hai

Sketch har tarah ki personal detail ko us hisse ko deta hai jo use dhoondhne mein sabse achha hai.

Table: Guard ke chaar hisse
| Hissa | Kya karta hai | Alag kyun hai |
| --- | --- | --- |
| Pattern checker | Woh details dhoondhta hai jinki shakl hamesha ek jaisi hoti hai: PAN (paanch bade akshar, chaar ank, ek bada akshar), Aadhaar number (baarah ank), mobile number (das ank jo 6, 7, 8 ya 9 se shuru hon) | Ek tay rule inhe turant, bina kharche, har baar ek hi tarah dhoondh leta hai |
| Name-and-place finder | Woh details dhoondhta hai jinki koi tay shakl nahi: kisi insaan ka naam, pata ya employer | Koi rule "Ramesh Jain" ya "14 Sector 15, Gurgaon" ka varnan nahi kar sakta; kuch ko vaakya padhkar insaan ya jagah pehchaanni padegi |
| Context judge | Woh kuch vaakya padhta hai jinhe pehle do hisse tay nahi kar paaye, aur tay karta hai ki woh kisi insaan ki taraf ishaara karte hain ya nahi | Sandarbh mein padhna dheema aur mehnga hai, isliye usse sirf bachi hui cheezon ke baare mein poochha jaata hai |
| Rule-keeper | Jo detail mili hai uske saath kya karna hai yeh tay karta hai | Woh khud kuch nahi dhoondhta; woh har tarah ki detail ke niyam lagata hai |

*Pattern checker* pehla hissa hai. *Name-and-place finder* doosra hai. *Context judge* teesra hai, aur uska case *quasi-identifier* hai: ek aisi detail jo akeli nirdosh hai par milkar ek insaan ko pehchaan sakti hai, jaise is vaakya mein: "Main apne gaon ka akela diabetic patient hoon jisne pichhle saal transplant karwaya." Is vaakya mein na number hai na naam, aur phir bhi yeh kisi ek insaan ko pehchaanta hai.

*Rule-keeper* har detail ke liye chaar mein se ek kaam chunta hai. Woh detail ko *redact* kar sakta hai, yaani use poori tarah hata kar uski jagah [PAN] jaisa label rakh sakta hai. Woh use *mask* kar sakta hai, yaani aadha chhupa kar shakl rakhta hai, jaise mobile number 98******12 ban jaaye aur agent dekh sake ki wahan number tha. Woh detail ko jaane de sakta hai, ya kisi insaan se poochh sakta hai. Chunaav is par nirbhar hai ki jaankari kyun ikatthi ki gayi thi. Delivery ke liye delivery address chahiye, aur late fees poochhne ke liye pehchaan ka number nahi chahiye.

## Samasya se shuru karna

*PRD*, yaani product requirements document, batata hai ki kya banana hai aur kyun. "Kyun" isliye zaroori hai ki engineers samasya jaante hon toh behtar faisle karte hain, aur bina maksad ki features ki list milne par kharab.

Anaya wahin se shuru hui jahan PRD ko shuru hona chahiye, samasya aur uske saboot se: saintees conversations, baatcheet ke numbers, aur woh greeting jo details ko nyauta deta tha. Uske baad yeh ki tool kiske liye hai aur kiske liye nahi. Phir scope, jisme ek section is par tha ki jaanboojh kar kya chhoda gaya, jo usne strategy ki Won't list se bhara. Uske baad yeh ki user kya dekhega jab tool kaam kare, jab shak ho, jab fail ho aur jab mana kar de. Baaki sections mein woh tests the jinhe tool ko paas karna tha, safalta kaise naapi jaayegi, release kaise hoga, aur kya abhi jaana nahi gaya.

Document ki jaanch ek sawaal thi: kya koi ajnabi ise bana sakta hai aur jaan sakta hai ki kab woh khatam kar chuka? Jawaab lagbhag poori tarah ek section par tha.

## "Done", jise jaancha ja sake

PRD ka sabse zyada kaam karne wala hissa "done" ki shartein hain. Yeh *acceptance criteria* hain, aur har ek aisi cheez honi chahiye jise test kiya ja sake. Sabse aam galti aisi shart likhna hai jise test na kiya ja sake.

Table: Acceptance criteria jinhe test nahi kiya ja sakta, aur wahi dobara likhe hue
| Test nahi ho sakte | Test ho sakte hain |
| --- | --- |
| Yeh pehchaan ke numbers sahi tarah dhoondhta hai | Asli conversations ke ek set mein jo pehle se haath se chinhit hain, har 100 pehchaan ke numbers mein se kam se kam 95 chhupa diye jaate hain |
| Yeh tez hai | Yeh reply mein ek second ke teesre hisse se zyada nahi jodta |
| Yeh kharab input sambhalta hai | Agar message khaali ya sirf emoji ho, toh woh bina badle nikal jaata hai aur kuch bhi error ki tarah log nahi hota |

Pehli dobara likhi hui shart yeh nahi kehti ki har number mil jaayega, kyunki woh sach nahi hota. Woh batati hai ki kitne, kis mein se, aur kis ke saamne. Jo tool text padhta aur likhta hai, uske liye "done" ek sahi jawaab ka vaada nahi hai. Woh ek dar hai jo un udaharanon par naapi jaati hai jinhe kisi ne pehle hi chinhit kar liya ho, aur ek seema likhi hui hoti hai. Chinhit udaharan hi dar ko maayne dete hain. Anaya ke paas abhi woh nahi the, aur usne ise open-questions list mein bade akshar mein daala.

## Kahaniyan aur ajeeb cases

Kaam ke har tukde ko user ki taraf se ek chhota vivaran chahiye, apni shartein ke saath. *User story* value ke ek tukde ko batati hai: ek support agent ke roop mein, main chahta hoon ki chat padhte waqt pehchaan ke numbers chhupe rahein, taaki main woh na dekhoon jo mujhe nahi chahiye. Ek variant, job story, role ke bajaye haalat se shuru hoti hai aur engineers ko zyada deti hai: jab main loan ke baare mein poochhne wale customer ki chat kholta hoon, mujhe chahiye ki koi pehchaan ka number chhupa ho, taaki main use sambhaale bina madad kar sakoon.

Kahaniyon ke baad *edge cases* aate hain, woh ajeeb input jinhe aam cases chhute nahi, aur asli kaam ka zyadatar hissa unhi mein chhupa hota hai. Farah ki team aur Imran ki yaaddasht se ek list bani.

Table: Guard ke edge cases
| Case | Kya hona chahiye |
| --- | --- |
| Space ya dash ke saath likha number: 4321-5678-9012 | Isse waise hi chhupao jaise yeh saamaanya likha ho |
| Do lines mein tuta hua number | Dono aadhe hisse chhupao |
| Number ke paas galat spelling mein "adhar" ya "mobil" | Phir bhi number chhupao |
| Aadha chhupa mobile number: 98xxxxxx12 | Use waise hi chhodo aur report mat karo |
| Baarah ank ka order number jo pehchaan ka number nahi hai | Use mat chhupao, nahi toh agent kaam nahi kar sakta |
| Hindi lipi mein aur Hindi ankon ke saath message | Chhupao |
| Tool tay nahi kar paata | Kaho ki nahi kar paaya aur kisi insaan ko tay karne do |

Aakhri row Anaya ne khud joda, aur yahi product ko juye se alag karti hai. Jo software text padhta hai use kabhi-kabhi shak hoga, aur product ko pehle se likhna hoga ki us waqt woh kya karta hai.

## Sabse patli cheez jo kaam karti hai

Imran ne guard ko parton mein banane ka prastaav rakha: pehle woh hissa jo chat padhta hai, phir dhoondhna, phir chhupana, phir woh jo agent ko dikhta hai. Chhathe hafte tak sab saath mein kaam karne lagta. Anaya ne poochha ki paanchve hafte mein kya kaam karega. "Kuch nahi," usne kaha.

Kaam ko parton mein kaatne par jab tak aakhri part khatam nahi hota, kuch istemaal ke laayak nahi hota. Use tukdon mein kaatne par har part ka ek patla version banta hai, isliye shuru se kuch kaam karta hai. *Vertical slice* sab parton se patli tarah guzarti hai. Anaya ne pehli slice tay ki: ek hi tarah ka number, ek hi tarah likha hua, us pal se jab message aata hai us pal tak jab agent use chhupa hua dekhta hai, aur ek log line jo batati hai ki kya kiya gaya.

::: def Minimum viable product
*MVP* sabse chhoti cheez hai jo asli users ke saath sabse jokhim-bhari maanyata ko test kare. Woh har cheez ka chhota version nahi hai. Woh us ek cheez ka ek chhota version hai jo sach honi chahiye.
:::

## Do hafte ek baar

Imran ki team *sprints* mein kaam karti thi, yaani do-do hafte ke tay samay mein. Har sprint plan se shuru hota hai aur ek demonstration aur ek chhoti meeting par khatam hota hai ki kya achha gaya aur kya badalna chahiye. Demonstration kaam karte software ko dikhata hai, slides ko kabhi nahi.

Andaaza lagana zyada mushkil tha. Imran bata sakta tha ki baarah ankon ke rule mein kitna samay lagega. Woh nahi bata sakta tha ki Hinglish mein naam dhoondhne mein kitna lagega, kyunki use pata nahi tha ki yeh ho bhi sakta hai ya nahi. Isliye team ne *time-box* istemaal kiya, ek tay samay jiske ant mein ek faisla hota hai: teen din, aur agar asli conversations mein se sau mein se sattar se kam naam mile, toh ruko aur dobara socho. Time-box samay ke andaaze ko faisle ke ek bindu mein badal deta hai.

## Pehle kaagaz

Anaya ne agent ki screen chaar kaagaz par banayi: chat jisme ek number masked ho, wahi chat ek note ke saath jo kehta ho "1 detail chhupayi gayi. Kyun dekhne ke liye click karein", ek chat jahan tool ko shak tha, aur ek chat jahan usne woh chhupa diya tha jo agent ko chahiye tha. Kuch seekhne ke liye banayi gayi ek kaccha, sasta version *prototype* hai, aur use kitni dekhbhaal chahiye yeh sawaal par nirbhar hai. Kaagaz dikha sakta hai ki flow samajh aata hai ya nahi. Clickable mock-up dikha sakta hai ki log raasta dhoondh paate hain ya nahi. Asli output par chalne wala version dikha sakta hai ki woh us par bharosa karte hain ya nahi.

Friday ko usne Farah ki ek saathi Neha ko chaar kaagazon ke saath ek table par baithaya aur use nirdesh dene ke bajaye ek kaam diya: ek customer kehti hai ki uska callback number chhupa diya gaya, pata karo kya hua. Yeh *usability test* hai. Ise batana aasaan hai aur karna mushkil, kyunki iska poora anushaasan hai madad na karna.

Neha ne doosra kaagaz uthaya aur gyarah second tak use dekha. Usne teesra uthaya, rakh diya, aur poochha ki number wapas paane ke liye kahan click kare. Anaya ka bahut mann tha ki ishaara kar de, par woh chup rahi. "Number wapas paane ka koi raasta nahi hai," Neha ne apne aap se kaha. "Toh mujhe Imran se poochhna padega."

::: key Gyarah second ne kya dhoondha
Neha jaise teen se paanch logon ke saath ek test design ki zyadatar gambhir samasyaon ko dikha deta hai, aur har hichkichahat ek khoj hai. Anaya ne PRD mein ek line joda: agent ek chat ke liye chhupi hui detail dekh sakta hai, ek wajah record karke. Kisi meeting ne yeh uthaya nahi tha.
:::

## Saaraansh

Specification samasya se shuru hoti hai, batati hai ki kya chhoda gaya, aur "done" ko aisi shartein ki tarah likhti hai jinhe test kiya ja sake. Jo software text padhta aur likhta hai, uske liye "done" un udaharanon par naapi gayi dar hai jinhe kisi ne pehle se chinhit kiya ho.

- Guard ke chaar hisse hain: fixed shakl ke liye pattern checker, bina shakl ki details ke liye name-and-place finder, bache hue ke liye context judge, aur woh rule-keeper jo tay karta hai ki kya karna hai. Har detail ko redact, mask, paas ya poochha jaata hai.
- Kahaniyan user ki taraf se value batati hain, aur edge cases wahin hain jahan zyadatar asli kaam chhupa hai. Product ko pehle batana hona chahiye ki shak hone par woh kya karta hai.
- Pehla version ek vertical slice hai jo har part se patli tarah guzarta hai, aur MVP sabse jokhim-bhari maanyata ko test karta hai. Sprints team ko kaam karte software ke saath rakhte hain, aur time-box anishchit kaam ko ek faisle ke saath khatam karta hai.
- Asli insaan par, jise madad nahi di jaati, test kiya gaya kaagaz ka prototype woh samasyaayein dhoondhta hai jo meeting nahi dhoondhti.
