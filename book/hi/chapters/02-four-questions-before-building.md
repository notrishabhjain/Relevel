---
title: Banane Se Pehle Chaar Sawaal
summary: Ek engineer ek achhe lagte idea ko un chaar tareekon par parakhta hai jinse products fail hote hain. Example ek aisa feature hai jise kisi ne dhoondha hi nahi. Aap product banane ke teen stages, chaar product risks, aur logon ko bechne aur companies ko bechne ka farq samjhenge.
course: a2
goals:
  - un teen stages ke naam bata paana jinse har product guzarta hai, aur yeh ki kaun sa stage aksar sabse pehle fail hota hai
  - kisi idea ko chaar product risks par parakhna
  - paisa dene wale, istemaal karne wale aur "na" kehne wale mein farq kar paana
  - apne customers ke baare mein AI assistant ki baat ko ek draft maanna, jise saboot chahiye
terms:
  - discovery | product banane ka woh hissa jahan aap pata lagate hain ki problem asli hai ya nahi, aur hal karne layak hai ya nahi | 
  - delivery | product banane ka woh hissa jahan aap use achhe se banate hain: plan, specification, code, quality | 
  - distribution | product banane ka woh hissa jahan log use dhoondhte hain, try karte hain aur istemaal karte rehte hain | 
  - B2C | business to consumer: aisa product jo ek-ek insaan ko becha jaata hai, jo khareedne wale bhi hain aur istemaal karne wale bhi | business to consumer
  - B2B | business to business: aisa product jo companies ko becha jaata hai, jahan paisa dene wala aksar wahi insaan nahi hota jo use chalata hai | business to business
  - product risk | un chaar cheezon mein se ek jo product ko doba sakti hain: koi use chahta nahi, koi use chala nahi sakta, use banaya nahi ja sakta, ya woh apna kharcha nahi nikaal sakta | product risks
  - usability | kya log bina madad ke khud samajh sakte hain ki cheez kaise istemaal karni hai | 
  - feasibility | kya team sach mein use bana sakti hai, jitna time, skills, data aur paisa uske paas hai usmein | 
  - viability | kya product business ke liye kaam karta hai: uski kamaai, uska cost, kanoon, aur uski saakh | 
---

Chat export wali shaam ke agle din Anaya ne Imran Qureshi ko ek printout dikhaya. Usmein 37 peele flags the, har ek us conversation ke liye jismein personal details thi. Imran lead engineer hai, aur chatbot ka zyadatar infrastructure usi ne banaya tha. Usne ek-ek flag chupchaap padha.

Ek flag ek customer ka tha, jisne attachment mein cheque ki photo bheji thi. "Attachments sambhalne wala hissa maine likha tha," Imran ne kaha, "aur maine kabhi socha hi nahi ki log usmein kya daalenge."

Anaya ne seedha sawaal poochha. Is problem ko theek karne ke liye tool banana kya achha idea hai? Aur kya Imran bata sakta hai ki shayad kyun nahi? Imran ne jawaab ek aise feature se shuru kiya jo company ne dedh saal pehle banaya tha, aur jise kisi ne dhoondha hi nahi. Is chapter mein hum usi feature se dekhenge ki product kaise banta hai, kaise fail hota hai, aur kaam shuru karne se pehle ek idea ko kin sawaalon se guzarna chahiye.

## Case: woh reminder jo kisi ko nahi mila

Pichhle saal Sahaj ne dekha ki customers bill bharna bhool jaate hain, aur unhe late fee deni padti hai. Customers ko late fee pasand nahi thi. Company bhi use vasool karna nahi chahti thi. Toh ek chhoti team ne ek reminder banaya, jo bill ki last date se do din pehle message bhejta tha.

Kaam dhyaan se hua. Team ne wording kuch customers par test ki. Messages time par pahunche. Imran ne toh khud check kiya ki raat ke beech mein koi message na jaaye.

Launch ke teen mahine baad, 100 mein se 2 se bhi kam customers ne reminder on kiya tha. On karne ka switch settings mein tha, teen screens neeche. Aur lagbhag koi settings mein jaata hi nahi.

Team ne poochha tha ki reminder achha hai ya nahi, aur woh achha tha. Lekin team ne yeh kabhi nahi poochha ki kisi ko pata bhi hai ki reminder hai. Anaya ne ek sentence likh liya, jo baad mein bhi kaam aaya: jis feature ko koi dhoondh nahi paata, uska asar bilkul waisa hi hai jaise woh kabhi bana hi nahi.

## Product ke teen stages

Reminder bhi har product ki tarah teen stages se guzra. Banane waale unhe alag-alag sochein ya na sochein, stages wahi rehte hain. Chaliye unhe seedhe shabdon mein dekhte hain.

::: key Teen stages
*Discovery* matlab yeh pata lagana ki problem asli hai ya nahi, kiski hai, aur kitni gehri hai. *Delivery* matlab solution ko achhe se banana: plan, likhi hui specification, code aur checking. *Distribution* matlab logon ko product tak pahunchana, taaki woh use dhoondhein, try karein aur istemaal karte rahein.
:::

Reminder pehle do stages mein achha tha, aur teesre mein fail ho gaya. Us ek failure ne baaki saari mehnat ka asar mita diya.

Yeh aam baat hai. Product aksar apne sabse kamzor stage par fail hota hai, aur teams jis stage ko pasand karti hain, usi mein sabse mazboot hoti hain. Engineers ko delivery pasand hai. Researchers ko discovery. Distribution dono se chhoot jaata hai, jabki wahi stage woh saboot deta hai jo wapas discovery ko khilata hai: kaun ruka, kaun gaya, aur kyun.

## Chaar product risks

Whiteboard ke saamne Imran ne printout wale idea ko parakhne ka ek tareeka bataya. Usne chaar shabd likhe: *value*, *usability*, *feasibility* aur *viability*. Har shabd ek *product risk* batata hai, yaani product ke fail hone ka ek alag tareeka. Inmein se ek bhi kaafi hai use doobane ke liye.

Anaya ne privacy tool ke liye ek-ek karke chaaron dekhe. Table mein uska pehla aankalan hai. Daayein column ko dheere padhiye, kyunki usmein kuch imaandaar "pata nahi" bhi hain.

Table: Chaar product risks, aur privacy tool par Anaya ka pehla aankalan
| Risk | Sawaal | Uska aankalan |
| --- | --- | --- |
| Value | Kya koi ise apne abhi ke tareeke se behtar chunega? | Shayad. Abhi zyadatar staff kuch nahi karta, aur kuch na karna aisa competitor hai jise hataana mushkil hai |
| *Usability* | Kya jinke liye bana hai, woh bina madad ke samajh sakte hain ki ise kaise chalana hai? | Saaf nahi. Customers tool ko kabhi dekhenge nahi. Support staff uska asar dekhega, aur engineers ko ise jodna padega |
| *Feasibility* | Kya team apne time, skills, data aur paise se ise bana sakti hai? | Kuch had tak. 4-4 ke group mein 12 ank, haan. English letters mein likhe Hindi naam, pata nahi |
| *Viability* | Kya yeh business ke liye chalta hai: kamai, cost, kanoon, saakh? | Pata nahi. Kisi ne abhi tak nahi poochha tha ki ek use ka cost kitna aayega, ya compliance head kya kahengi |

Teen shabdon ka seedha matlab samajh lijiye. *Usability* yeh hai ki log bina madad ke samajh sakein ki cheez kaise chalani hai. *Feasibility* yeh hai ki team ke paas jo time, skills, data aur paisa asal mein hai, usse woh ise bana sakti hai ya nahi. *Viability* yeh hai ki product us business ke liye chalta hai ya nahi jo use offer karega.

Table mein do baatein dhyaan dene layak hain. Pehli, is tool ke liye usability ka matlab buttons nahi hai. Ise istemaal karne wale engineers honge, jo ise doosre software se jodenge. Toh asli sawaal yeh bana: kya ek engineer, jo Anaya se kabhi mila nahi, Friday dopahar ise bina use message kiye jod sakta hai?

Doosri baat, feasibility wali row ka "pata nahi" kaam ka hai. Yeh sabse mehnge kism ka anjaan dikhata hai. Ise pehle hi likh diya, toh koi na koi ise pehle hi test kar lega.

::: watch Teams wahi risk check karti hain jo unhe pasand hai
Kai fail hue features us test mein paas hue jis par team ka dhyaan tha, aur us test mein fail hue jise team ne chhod diya. Jo review sirf ek risk dekhta hai, woh aksar yahi conclusion nikalta hai ki idea theek hai.
:::

### Text padhne wale software ke do extra sawaal

Jo software text padhta aur likhta hai, usmein feasibility ke saath ek aur sawaal judta hai, aur viability ke saath ek aur.

Feasibility ka sawaal yeh hai ki software kitni baar sahi hota hai. Jo tool paanch mein se chaar baar sahi hai, woh birthday card ka title sujhane ke liye bilkul theek hai. Lekin jahan ek galti kisi customer ki saari jama-poonji kha sakti hai, wahan woh kaam ka nahi. Yaani same accuracy ek kaam ke liye kaafi ho sakti hai aur doosre ke liye bekaar. Aur tool khud nahi batata ki kaun sa kaam kaisa hai.

Viability ka sawaal cost ka hai. Aam feature par har click ka cost lagbhag zero hota hai. Lekin jo feature text padhta aur likhta hai, use har baar chalane par asli paisa lagta hai. Isliye viability is par tikti hai ki log feature ko kitni baar use karte hain, aur har use ke liye aap kitna charge kar sakte hain.

## Paisa kaun deta hai, kaun use karta hai, kaun "na" kehta hai

Sahaj individual logon ko bechti hai: ek aurat jo bijli ka bill bharti hai, ek aadmi jo loan ke liye apply karta hai. Ise *B2C* kehte hain, yaani business to consumer. Yahan paisa dene wala wahi hai jo use karta hai. Decision kuch minute mein ho jaata hai, aur zyadatar is par tikta hai ki product aasaan lagta hai ya nahi.

Ab maan lijiye privacy tool achha chal gaya. Doosri companies, jinke paas chat windows hain, use chahengi: lenders, insurers, clinics, schools. Unhe bechna *B2B* hoga, yaani business to business, aur bikri ka dhaancha alag hota hai. Neeche ki table dono ko saath rakhti hai.

Table: Logon ko bechna aur companies ko bechna kaise alag hai
| | B2C | B2B |
| --- | --- | --- |
| Paisa kaun deta hai | Istemaal karne wala | Ek company, aksar aise budget se jo user ke haath mein nahi hota |
| Decision kaun leta hai | Istemaal karne wala, jaldi | Kai log, hafton ya mahino mein |
| Bikri kaun rok sakta hai | Istemaal karne wale ke alawa koi nahi | Security ya legal staff, jinki user ke prati koi zimmedaari nahi |
| Bada customer kya karta hai | Kuch khaas nahi | Sign karne se pehle koi feature maang kar supplier ki priorities badal sakta hai |

Isse ek kaam ka rule nikalta hai. Har customer ke baare mein teen sawaal poochhiye: paisa kaun deta hai, use kaun karta hai, aur "na" kaun keh sakta hai.

Sahaj ke liye jawaab yeh the. Company paisa degi. Support staff aur engineers tool use karenge. Aur "na" compliance head, Lakshmi Iyer, keh sakti hain. Anaya ko ehsaas hua ki woh aadha ghanta ek aise product ko design karti rahi, jise rokne wala ek hi insaan hai, aur usse usne ek baar bhi raay nahi poochhi.

## Assistant ke confident paragraphs

Apni seat par wapas jaate hue Anaya ne woh kiya jo woh kai mahinon se karti aa rahi thi. Usne ek AI assistant se chhota overview maanga: India mein log chats mein pehchaan ke numbers kyun share karte hain. Assistant ne chaar saaf-suthre paragraphs diye.

Ek mein likha tha ki customers "low digital literacy aur official-sounding services par zyada bharosa" ki wajah se zyada share karte hain. Doosre mein likha tha ki yeh tendency "pehli baar loan lene walon mein khaas taur par zyada hai."

Anaya ne khud se poochha, assistant ko yeh kahan se pata chala hoga? Usne Farah ke transcripts kabhi dekhe hi nahi. Woh paragraphs aise lage jaise dinner table par kisi samajhdaar insaan ne koi baat kah di ho. Woh sahi lagte hain, jaise kisi average raay mein sahi lagne wali baat hoti hai. Zaroori nahi ki woh galat hon, lekin kisi ne unhe check nahi kiya tha.

::: key Draft koi finding nahi hai
Assistant draft likh sakta hai, summary bana sakta hai, sawaal sujha sakta hai aur plan ki khaamiyan bata sakta hai. Lekin woh aapke customers ke saamne baith nahi sakta. Aapke market ke baare mein woh jo kehta hai, woh us cheez ka mix hai jo usne padha hai. Aapke khaas users ke liye woh sirf ek hypothesis hai, jab tak koi asli cheez use check na kar le.
:::

Isliye Anaya ne pehle rule ke neeche ek doosra working rule joda. Uske notes ka har claim ya toh saboot tak jaana chahiye, ya assumption ke roop mein mark hona chahiye.

"Pehli baar loan lene walon" wale sentence ke paas usne likha: "Saboot nahi. Kya tay karega: kya woh 37 zyadatar pehli baar loan lene wale hain. Farah das minute mein bata sakti hai." Check karne mein aksar ek chhoti baatcheet se zyada kharcha nahi aata.

## Jo abhi anjaan tha

Shaam tak whiteboard par chaar risks the. Unke neeche un sawaalon ki list thi jinka jawaab abhi kisi ke paas nahi tha. Kya tool English letters mein likhe Hindi naam dhoondh sakta hai? Lakshmi kya kahengi? Yeh numbers asal mein kaun type karta hai, aur kyun?

Aakhri sawaal technical nahi hai. Anaya ke paas 37 conversations thi, lekin 37wi conversation mein type karne wala kya soch raha tha, yeh usse bilkul nahi pata tha. Use yeh bhi pata tha ki woh aise sawaal poochhne ki aadi hai jinmein woh "haan" ki ummeed rakhti hai. Agla chapter isi aadat ko theek karne ke baare mein hai.

## Saaraansh

Har product discovery, delivery aur distribution se guzarta hai, aur aksar sabse kamzor stage par fail hota hai. Sahaj ka reminder feature achha bana tha, par teesre stage ko kisi ne test nahi kiya. Isliye woh bekaar ho gaya.

- Idea ko chaar product risks par parakhte hain: value, usability, feasibility aur viability. Koi ek bhi use doba sakta hai, aur teams aksar sirf wahi check karti hain jo unhe pasand hai.
- Jo software text padhta aur likhta hai, usmein feasibility ka matlab yeh bhi hai ki woh kaam ke liye kitni baar sahi hai. Viability mein yeh bhi aata hai ki har use ka cost kya hai.
- B2C aur B2B mein farq yeh hai ki paisa kaun deta hai, decision kaun leta hai aur kaun rok sakta hai. Har customer ke liye poochhiye: paisa kaun deta hai, use kaun karta hai, "na" kaun keh sakta hai.
- Apne customers ke baare mein AI assistant ka kehna ek draft hai, jab tak saboot use check na kar le. Notes ka har claim saboot tak jaana chahiye, ya assumption ke roop mein mark hona chahiye.

Agle chapter mein Anaya customers se yeh poochhna seekhegi ki unhone asal mein kya kiya, yeh nahi ki woh kya kar sakte hain.
