---
title: Banane Se Pehle Chaar Sawaal
summary: Ek engineer ek achhe lagte idea ko woh chaar tareeke jaanchta hai jinse products fail hote hain, aur udaharan ek aisa feature hai jise kisi ne dhoonda hi nahi. Chapter product banane ke teen stages, chaar product risks, aur logon ko bechne aur companies ko bechne ke antar ko samjhata hai.
course: a2
goals:
  - un teen stages ke naam batana jinse har product guzarta hai, aur kaun sa stage sabse pehle fail hota hai
  - kisi idea ko chaar product risks par jaanchna
  - paise dene wale, istemaal karne wale aur "na" kehne wale mein antar karna
  - apne customers ke baare mein AI assistant ki baat ko saboot chahiye wala draft maanna
terms:
  - discovery | product banane ka woh hissa jahan aap pata lagate hain ki problem asli hai ya nahi aur hal karne layak hai ya nahi | 
  - delivery | product banane ka woh hissa jahan aap use achhe se banate hain: plan, specification, code, quality | 
  - distribution | product banane ka woh hissa jahan log use dhoondhte hain, aazmate hain aur istemaal karte rehte hain | 
  - B2C | business to consumer: aisa product jo ek-ek insaan ko becha jaata hai, jo khareedne wale bhi hain aur istemaal karne wale bhi | business to consumer
  - B2B | business to business: aisa product jo companies ko becha jaata hai, jahan paisa dene wala aksar wahi insaan nahi hota jo use chalata hai | business to business
  - product risk | un chaar cheezon mein se ek jo product ko doba sakti hain: koi use chahta nahi, koi use chala nahi sakta, use banaya nahi ja sakta, ya woh apna kharcha nahi nikaal sakta | product risks
  - usability | kya log bina madad ke khud samajh sakte hain ki cheez kaise istemaal karni hai | 
  - feasibility | kya team sach-much use bana sakti hai, jitna time, hunar, data aur paisa uske paas hai usmein | 
  - viability | kya product business ke liye kaam karta hai: uski kamaai, uska kharcha, kanoon, aur uski saakh | 
---

Chat export ki raat ke agle din Anaya ne Imran Qureshi ko printout dikhaya: saintees peele flags, har ek us conversation ke liye jisme personal details thi. Imran lead engineer hai, aur chatbot ka zyadatar infrastructure usne hi banaya tha. Usne ek-ek flag chupchaap padha. Ek flag ek customer ka tha jisne attachment mein cheque ki photo bheji thi. "Attachment sambhalne wala hissa maine likha tha," usne kaha, "aur mujhe kabhi socha hi nahi ki log usmein kya daalenge."

Anaya ne poochha ki is samasya ko theek karne ke liye tool banana achha idea hai ya nahi, aur kaha ki woh yeh bhi bataye ki shayad kyun nahi. Imran ka jawaab ek aise feature se shuru hua jo company ne dedh saal pehle banaya tha aur jise kisi ne dhoondha nahi. Yeh chapter us feature ke zariye batata hai ki product kaise banta hai, kaise fail hota hai, aur kaam shuru karne se pehle ek idea ko kin sawaalon ka saamna karna chahiye.

## 2.1 Case: woh reminder jo kisi ko nahi mila

Pichhle saal Sahaj ne dekha ki customers bill bharna bhool jaate hain aur late fee dena padta hai. Customers ko late fee pasand nahi thi, aur company bhi use zyada vasool karna nahi chahti thi. Ek chhoti team ne ek reminder banaya jo bill ki last date se do din pehle message bhejta tha. Kaam saavdhaani se hua. Shabd kuch customers par test kiye gaye, messages sahi samay par pahunche, aur Imran ne khud dekha ki raat ke beech mein koi message nahi gaya.

Launch ke teen mahine baad sau mein se do se bhi kam customers ne reminder on kiya tha. On karne ka switch settings mein tha, teen screens neeche, aur lagbhag koi settings tak jaata hi nahi tha.

Team ne poochha tha ki reminder achha hai ya nahi, aur woh achha tha. Usne yeh nahi poochha tha ki kisi ko pata hai ki reminder hai bhi. Anaya ne ek vaakya likha jo baad mein bhi kaam aaya: jis feature ko koi dhoondh nahi paata, uska asar waisa hi hota hai jaise woh kabhi bana hi nahi.

## 2.2 Product ke teen stages

Reminder bhi har product ki tarah teen stages se guzra, chahe banane waale unhe alag-alag maane ya na maane.

::: key Teen stages
*Discovery* yeh jaanna hai ki samasya asli hai ya nahi, kiski hai, aur kitni gehri hai. *Delivery* samadhaan ko achhe se banana hai: plan, likhi hui specification, code aur jaanch. *Distribution* logon ko product tak pahunchana hai taaki woh use dhoondhein, aazmaayein aur istemaal karte rahein.
:::

Reminder pehle do stages mein safal raha aur teesre mein fail hua, aur us ek failure ne baaki kaam ka asar mita diya. Product aam taur par apne sabse kamzor stage par fail hota hai, aur teams usi stage mein sabse majboot hoti hain jo unhe pasand hai. Engineers delivery pasand karte hain. Researchers discovery. Distribution dono se chhoot jaata hai, jabki wahi stage woh saboot deta hai jo discovery ko dobara khilata hai: kaun ruka, kaun gaya, aur kyun.

## 2.3 Chaar product risks

Imran ne printout wale idea ko parakhne ke liye whiteboard par chaar shabd likhe: *value*, *usability*, *feasibility* aur *viability*. Har shabd ek *product risk* batata hai, yaani product ke fail hone ka ek alag tareeka, aur inmein se koi ek bhi use doobane ke liye kaafi hai.

Table: Chaar product risks, aur privacy tool par Anaya ka pehla aankalan
| Risk | Sawaal | Uska aankalan |
| --- | --- | --- |
| Value | Kya koi ise apne abhi ke tareeke se behtar chunega? | Shayad. Abhi zyadatar staff kuch nahi karta, aur kuch na karna aisa competitor hai jise hataana mushkil hai |
| *Usability* | Kya istemaal karne waale bina madad ke samajh sakte hain? | Saaf nahi. Customers tool ko kabhi dekhenge nahi. Support staff uska asar dekhega, aur engineers ko ise jodna padega |
| *Feasibility* | Kya team apne samay, hunar, data aur paise se ise bana sakti hai? | Kuch had tak. Chaar-chaar ke group mein baarah ank, haan. English letters mein likhe Hindi naam, pata nahi |
| *Viability* | Kya yeh us business ke liye chalta hai: kamai, kharcha, kanoon, saakh? | Pata nahi. Kisi ne abhi nahi poochha tha ki ek istemaal par kitna kharcha aayega, ya compliance head kya kahengi |

Table ke shabdon ke khaas matlab hain. *Usability* yeh hai ki log bina madad ke samajh sakein ki cheez kaise chalti hai. *Feasibility* yeh hai ki team ke paas jo samay, hunar, data aur paisa hai, usse woh sach mein bana sakti hai ya nahi. *Viability* yeh hai ki product use offer karne wale business ke liye chalta hai ya nahi.

Table mein do baatein dhyaan dene layak hain. Pehli, is tool ke liye usability ka matlab buttons nahi hai. Istemaal karne waale engineers hote jo ise doosre software se jodte, isliye sawaal yeh bana: kya koi engineer jo Anaya se kabhi mila nahi, Friday dopahar ise bina use message kiye jod sakta hai? Doosri, feasibility mein likha "pata nahi" kaam ka hai. Yeh sabse mehnge kism ka anjaan batata hai, aur ise pehle likh dene se koi use pehle hi test kar leta hai.

::: watch Teams wahi risk jaanchti hain jo unhe pasand hai
Kai fail hue features team ke dhyaan wale test mein paas hue aur jise unhone chhoda us mein fail. Jo review sirf ek risk dekhta hai, woh aksar yahi nateeja nikalta hai ki idea theek hai.
:::

### Text padhne wale software ke do khaas risks

Jo software text padhta aur likhta hai, usme feasibility aur viability mein ek-ek aur sawaal judta hai.

Feasibility ka sawaal yeh hai ki software kitni baar sahi hai. Jo tool paanch mein se chaar baar sahi hai, woh birthday card ka title sujhane ke liye bilkul theek hai. Jahan ek galti ek customer ki jama-poonji khaa sakti hai, wahan woh kaam ka nahi. Ek hi sahi hone ki dar ek kaam ke liye kaafi ho sakti hai aur doosre ke liye bekaar, aur tool khud nahi batata ki kaun sa kaam hai.

Viability ka sawaal kharche ka hai. Aam feature par har click ka kharcha lagbhag zero hota hai. Jo feature text padhta aur likhta hai, use har baar chalane par asli paisa lagta hai. Isliye viability is par tikti hai ki feature kitni baar chalta hai aur har istemaal par customer se kitna liya ja sakta hai.

## 2.4 Paisa kaun deta hai, kaun istemaal karta hai, kaun "na" kehta hai

Sahaj individual logon ko bechti hai: ek aurat jo bijli ka bill bharti hai, ek aadmi jo loan ke liye apply karta hai. Isse *B2C* kehte hain, business to consumer. Paisa dene wala wahi hai jo istemaal karta hai, aur faisla kuch minutes mein hota hai, zyadatar is par ki product aasaan lagta hai ya nahi.

Agar privacy tool safal hota, toh doosri companies jinke paas chat windows hain use chahtin: lenders, insurers, clinics, schools. Unhe bechna *B2B* hota, business to business, aur is bikri ka dhaancha alag hai.

Table: Logon ko bechna aur companies ko bechna kaise alag hai
| | B2C | B2B |
| --- | --- | --- |
| Paisa kaun deta hai | Istemaal karne wala | Ek company, aksar aise budget se jo user ke haath mein nahi |
| Faisla kaun karta hai | Istemaal karne wala, jaldi | Kai log, hafton ya mahino mein |
| Bikri kaun rok sakta hai | Istemaal karne wale ke alawa koi nahi | Security ya legal staff, jinka user ke prati koi farz nahi |
| Bada customer kya karta hai | Kuch khaas nahi | Supplier ki priorities badal sakta hai, sign karne se pehle koi feature maang kar |

Vyavhaarik niyam yeh hai ki har customer ke baare mein teen sawaal poochiye: paisa kaun deta hai, istemaal kaun karta hai, aur "na" kaun keh sakta hai. Sahaj ke liye jawaab yeh the ki company paisa dengi, support staff aur engineers istemaal karenge, aur "na" Lakshmi Iyer, compliance head, keh sakti hain. Anaya ne jaana ki woh aadha ghanta us ek insaan ke chaaron taraf product design karti rahi jo use rok sakta hai, aur usse uski raay poochhi tak nahi.

## 2.5 Assistant ke aatmavishwaas bhare paragraph

Apni seat par jaate hue Anaya ne woh kiya jo woh kai mahinon se kar rahi thi. Usne ek AI assistant se chhota overview maanga ki Bharat mein log chat mein pehchaan ke number kyun share karte hain. Assistant ne chaar saaf-suthre paragraph diye. Ek mein likha tha ki customers "low digital literacy aur official-sounding services par zyada bharosa" ki wajah se zyada share karte hain. Doosre mein likha tha ki yeh pravritti "pehli baar loan lene waalon mein khaas taur par zyada hai".

Usne socha ki assistant yeh kahan se jaan sakta tha. Usne Farah ke transcripts kabhi dekhe hi nahi. Paragraph aise lage jaise kisi sochne waale insaan ne dinner par kuch kaha ho: sahi lagne wale, jaise koi average raay sahi lagti hai. Woh zaroori nahi ki galat hon, par unki jaanch nahi hui thi.

::: key Draft ek nateeja nahi hai
Assistant draft likh sakta hai, saar bana sakta hai, sawaal sujha sakta hai aur plan ki aalochna kar sakta hai. Woh aapke customers ke saamne baith nahi sakta. Aapke bazaar ke baare mein woh jo kehta hai woh us cheez ka mishran hai jo usne padha hai, aur jab tak koi asli cheez use jaanch nahi leti, woh aapke khaas users ke baare mein sirf ek anumaan hai.
:::

Anaya ne pehle niyam ke neeche doosra niyam joda: uske notes ka har dawa saboot tak jaana chahiye, ya anumaan ki tarah chinhit hona chahiye. Pehli baar loan lene waalon wale vaakya ke paas usne likha: "Saboot nahi. Kya tay karega: kya woh 37 zyadatar pehli baar loan lene wale hain. Farah das minute mein bata sakti hai." Jaanch par aam taur par ek chhoti baatcheet se zyada kharcha nahi aata.

## 2.6 Jo abhi anjaan tha

Shaam tak whiteboard par chaar risks the aur unke neeche un sawaalon ki soochi jinka jawaab abhi kisi ke paas nahi tha. Kya tool English letters mein likhe Hindi naam dhoondh sakta hai? Lakshmi kya kahengi? Yeh numbers asal mein kaun type karta hai, aur kyun? Aakhri sawaal technical nahi tha. Anaya ke paas saintees conversations thi aur yeh andaaza nahi tha ki saintees-wi conversation mein type karne wala kya soch raha tha. Use yeh bhi pata tha ki woh aise sawaal poochhti hai jinme haan ki ummeed hoti hai. Agla chapter is aadat ko theek karne ke baare mein hai.

## Saaraansh

Har product discovery, delivery aur distribution se guzarta hai, aur sabse kamzor stage par fail hota hai. Sahaj ka reminder feature achha bana tha par teesre stage par aazmaya nahi gaya, isliye bekaar tha.

- Idea ko chaar product risks par jaancha jaata hai: value, usability, feasibility aur viability. Koi ek bhi use doob sakta hai, aur teams sirf wahi dekhti hain jo unhe pasand hai.
- Jo software text padhta aur likhta hai, usme feasibility mein yeh sawaal judta hai ki woh kaam ke liye kitni baar sahi hai, aur viability mein yeh ki har istemaal ka kitna kharcha hai.
- B2C aur B2B is mein alag hain ki paisa kaun deta hai, faisla kaun karta hai aur kaun rok sakta hai. Har customer ke liye poochhiye: paisa kaun deta hai, istemaal kaun karta hai, "na" kaun keh sakta hai.
- Apne customers ke baare mein AI assistant ka kuch bhi kehna draft hai jab tak saboot use jaanch na le, aur notes ka har dawa saboot tak jaana chahiye ya anumaan chinhit hona chahiye.
