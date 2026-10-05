---
title: Apne Cases Par Model Chunna
summary: Ek founder us model par switch karna chahta hai jo pichhle hafte ke chart mein sabse upar tha. Team wahi karti hai jo gaadi ke saath karte hain: teen models ko apni sadakon par chalakar dekhti hai, faisla ek card par likhti hai, aur phir tay karti hai ki har model kya dekhta hai. Chapter leaderboards, routing, model selection cards aur provenance samjhata hai.
course: ch9m ch10c
goals:
  - samjhana ki leaderboard yeh kyun nahi batata ki aapke kaam ke liye kaun sa model theek hai
  - apne cases se, mushkil cases ke saath, ek benchmark banana aur sirf model badal kar models ki tulna karna
  - routing batana aur faisla ek model selection card par likhna
  - tay karna ki har request mein kya jaata hai, memory ko alag stores ki tarah dekhna, aur faislon ka provenance rakhna
terms:
  - leaderboard | models ki unke scores ke aadhar par ek prakashit ranking, kisi aur ke tests par | leaderboards
  - model selection card | ek chhota, versioned page jo kaam, quality ka lakshya, data, raftaar aur kharche ki seemayein, aazmaye gaye vikalp, saboot aur fallback record karta hai, taaki ek reviewer theek-theek dekh sake ki ek model kyun chuna gaya | selection card
  - routing | har request ko us sabse sasti model ke paas bhejna jo use sambhal sake, aur sirf mushkil wali ko ek mazboot aur mehnge ke paas | 
  - provenance | is baat ka record ki koi cheez kahan se aayi, taaki ek daava ya faisla uske source, version aur use paida karne wale code tak dhoondha ja sake | 
---

September ke chauthe Monday ko founder Mr. Bhatia apna laptop leke office aaye, jisme ek bar chart khula tha aur usme ek bar baaki se bahut oonchi thi. Woh ek model ki thi jo pichhle hafte nikla tha, aur unhone prastaav rakha ki us par switch kiya jaaye. Anaya ne poochha ki use kis par test kiya gaya tha. Reasoning, ganit, coding aur bahut kuch, unhone kaha. Usne poochha ki kya Hinglish naamon par bhi test hua tha. Woh hanse aur bole ki unhe lagta hai nahi hua hoga.

*Leaderboard* dikhata hai ki ek model ne kisi aur ke kaam par kaisa kiya. Woh ek imaandaar nateeja ho sakta hai aur padhne wale ko uske apne kaam ke baare mein kuch nahi batata, jaise ek gaadi sirf isliye khareedna ki usne inaam jeeta, jabki yeh nahi pata ki woh parivaar ke liye theek hai, sadakon par chalti hai ya chalane mein kitni mehngi hai. Koi use chalakar dekhta, aur bahut kam teams ek model ko chalakar dekhti hain.

## Case: chart par ek oonchi bar

Anaya ne, us aawaaz mein jo usne bilkul isi pal ke liye abhyaas ki thi, poochha ki company ke kin cases par model behtar hai, aur kis speed aur kharche par. Mr. Bhatia ne bhaunh uthayi aur phir muskuraaye. "Mujhe dikhao," unhone kaha.

## Ek saath kai antar

Imran ko is sawaal ka intezaar tha. Model ek hi aayaam mein behtar ya kharab nahi hota. Models kai mein ek saath alag hote hain: kaam kitna achha karte hain, kitni tez jawaab dete hain, kitna text le sakte hain, functions kitni bharose se bulate hain aur unka kharcha kya hai. Jo pehle par jeetta hai woh agle teen par haar sakta hai, aur kaun sa zyada maayne rakhta hai yeh model ke baare mein nahi balki istemaal ke baare mein tathya hai. Kaam yeh tha ki tay kiya jaaye ki Sahaj ke istemaal ko kya chahiye aur phir naapa jaaye.

Table: Finder ko kya chahiye tha
| Zaroorat | Sroot | Maan |
| --- | --- | --- |
| Quality | May mein likhi specification | Fixed-shape numbers mein sau mein kam se kam 98, aur jitne zyada naam ho sakein |
| Data | July mein likha niyam | Kuch bhi asli building ke bahar nahi ja sakta |
| Speed | Specification | Aam taur par ek second ke teesre hisse se kam |
| Kharcha | Specification | Kul milakar 60 paise ek message se kam |

## Teen ko chalakar dekhna

Benchmark saath cases ka ek set tha jo Anaya ne ek weekend mein banaya tha. *Benchmark* tay cases ka ek set hai, expected jawaabon ke saath, jo ek hi kaam par vikalpon ki nishpaksh tulna ke liye istemaal hota hai. Yeh answer key nahi tha. Woh uske andar se liya gaya tha, aur jaanboojh kar un tareekon se mushkil banaya gaya tha jo maayne rakhte the: bees English messages, bees Hinglish mein, das Devanagari mein, aur das aise jo ek saadhaaran test kabhi shaamil nahi karta, jaise bina jawaab ke messages, uljhe hue messages aur injected instruction wale messages.

::: key Score se pehle test set ko chunauti do
Benchmark ek naapne ka saadhan hai, aur aasaan cases se bana saadhan aasaan nateeje deta hai. Product manager ka kaam score ko chunauti dene se pehle test set ko chunauti dena hai. Anaya ne poochha ki kya uska benchmark us failure ko pakdega jisse woh sabse zyada darti thi, aur pakka kiya ki woh pakdega.
:::

Unhone teen models ko benchmark par chalaya, har baar sirf model badal kar, wahi instructions aur wahi cases ke saath. Agar model aur instructions ek saath badlein aur score sudhre, toh koi nahi bata sakta ki kisne madad ki.

Table: Saath cases par teen models
| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| Yeh kya hai | Chhota, open-weight, andar chalta hai | Madhyam, open-weight, andar chalta hai | Bada, closed, bahar host hota hai |
| Kul mila | 82% | 91% | 95% |
| Hinglish mein mila | 71% | 86% | 92% |
| Aam samay | 0.15 second | 0.4 second | 2.1 second |
| Ek call ka kharcha | lagbhag 3 paise | lagbhag 9 paise | lagbhag 40 paise |

Anaya ne poochha ki kya use Model C chalane ki ijaazat hai. Banaye hue vaakyon par haan, Imran ne kaha. Benchmark mein koi asli customer nahi tha, isliye use banaye hue text se banaya gaya tha, taaki koi bhi model kahin bhi chalakar yeh jaana ja sake ki woh kaise behave karta hai. Niyam asli data ke baare mein tha.

Table ne koi vijeta nahi diya, aur wahi use upyogi banata tha. Model C kaam mein sabse achha tha aur istemaal nahi ho sakta tha, kyunki woh bahar tha aur dheema tha. Model A tez aur sasta tha par akele kaafi achha nahi tha. Model B beech mein tha.

## Sabse sasta jo kaam kare

Numbers ne ek aisa tareeka sujhaya jo team pehle se istemaal karti thi. *Routing* har request ko sabse sasta model dikhata hai jo use sambhaal sakta hai aur sirf mushkil wale ko ek zyada majboot aur mehnge ke paas bhejta hai. Model A har message ko jaldi aur saste mein padhta aur zyadatar ko tay kar leta. Model B sirf shak wale kuch ko dekhta.

Anaya ne ise benchmark par aazmaya. Milan ne kul milakar sau mein tirannave aur Hinglish mein sau mein navaasi dhoondhe, aam taur par 0.17 second mein, lagbhag chaar paise ek message par. Woh Model C jitna achha nahi tha, specification ko poora karne ke liye kaafi achha tha, aur allowed tha.

Phir usne woh kiya jo Imran ne use sikhaya tha, jo faisla ko ek kaagaz ka tukda banana tha. *Model selection card* ek chhota, versioned page hai jo kaam, quality ka lakshya, data, speed aur kharche ki seemayein, aazmaye vikalp, saboot aur fallback record karta hai, taaki koi reviewer dekh sake ki ek model kyun chuna gaya. Uska ek page par aa gaya. Neeche usne fallback line poori ki: specification ke anusaar sirf-rules safe mode.

Imran ne Anaya se table dhaank kar faisla karne ki koshish karne ko kaha. Usne ki, aur apne ko us model ki taraf haath badhate paaya jo chart mein sabse upar tha, jo bilkul wahi tha jo usne Mr. Bhatia ko na karne ko kaha tha. Numbers ke bina faisla tees second mein raay mein badal gaya tha. "Isiliye yeh ek card par hai," Imran ne kaha.

## Folder mein kya jaata hai

Dopahar ka doosra aadha hissa ek alag sawaal ka tha, jo Dr. Meenakshi Rao ki ek tulna se shuru hua. Ek shaandaar naya saathi pichhle din ka kuch yaad nahi rakhta. Har subah manager ek folder deta hai: sthayi instructions, kuch udaharan, aaj ki zaroori file, pichhle hafte ke bare mein ek note. Folder mein kya jaata hai woh tay karta hai ki saathi kitna achha karta hai.

Model chun liye jaane ke baad agla sawaal yeh tha ki folder mein theek-theek kya hai. Anaya is vichaar se context ke naam se mil chuki thi, aur ab usne dekha ki kaam ka kitna hissa usme hai.

Table: Folder ke teen hisse
| Hissa | Vyavhaar |
| --- | --- |
| Instructions | Unhe application aur model ke beech ke ek anubandh ki tarah maano: bhoomika, kaam, seemayein, udaharan, output ki shakl, aur jab woh jawaab nahi de sakta toh kya karna hai. Peechhe ka code har ek par nirbhar karta hai. Woh woh paane layak hain jo har interface paata hai: ek version number, badlaavon ka record, aur har edit se pehle aur baad wahi das cases ka chalna |
| Har hisse ka size | Pehle se tay karo ki jab budget tang ho toh kya kis kram mein hataya jaaye. Zyadatar log pehle history hataate hain aur saboot sabse aakhir mein. Agar design alag hai toh kaaran design hai |
| Memory | Woh feature nahi hai, ek architecture hai. Kam se kam teen alag stores ko memory kaha jaata hai aur unhe milana nahi chahiye |

Table: Memory kehlaye jaane wale teen stores
| Store | Ismein kya hai | Har ek ke liye jawaab dene wale sawaal |
| --- | --- | --- |
| Session history | Is chat mein kya kaha gaya | Ismein kya hai, iska maalik kaun hai, kitni der rakha jaata hai, kaun dekh sakta hai, ise kaise hataana hai |
| User profile | Company is insaan ke baare mein kya jaanti hai | Wahi paanch sawaal |
| Task state | Yeh khaas kaam kahan tak pahuncha hai | Wahi paanch sawaal |

Session history ke liye Anaya "default roop se kya kabhi inject nahi hona chahiye" wale cell par ruki aur ek shabd likha: pehchaan ke numbers. Guard pehle se history ko andar jaate hue saaf karta tha. Ab woh store ke design ka hissa tha.

## Yeh kahan se aaya

Aakhri baat ek shaant baat thi. Jab guard koi detail chhupata tha, toh woh likhta tha ki kyun. Har record message ka number, guard ka woh hissa jisne faisla kiya, aur us hisse ka version leke chalta tha. Baad mein ise dekhne wala faisla ko uske sroot tak khoj sakta tha, us code tak jisne use liya aur un instructions tak jo lagu the. Yeh *provenance* hai: yeh record ki koi cheez kahan se aayi.

Yeh Anaya ki ummeed se zyada maayne rakhta tha. Ek citation tabhi upyogi hai jab woh padhne wale ko saboot tak pahunchne de, aur jis faisle ko dohraya nahi ja sakta uska bachaav nahi ho sakta. September mein Lakshmi ne poochha ki August ke ek Tuesday ko ek khaas naam kyun chhupaya gaya tha, aur Anaya ne jawaab chaalis second mein dhoondh liya. Usne nahi bataya ki pehle kisi ne nahi poochha tha.

## Saaraansh

Leaderboard dikhata hai ki ek model ne kisi aur ke kaam par kaisa kiya. Models kai tareekon se ek saath alag hote hain, isliye upyogi tulna apna benchmark hai, un cases aur failures se bana jo maayne rakhte hain, kuch jaanboojh kar mushkil cases ke saath, aur runs ke beech sirf model badalte hue.

- Routing har request ko sabse sasta model dikhata hai jo use sambhaal sake, aur mehnga wala mushkil cases ke liye rakhta hai.
- Faisla model selection card par jaata hai, kyunki saboot ke bina woh kuch second mein raay mein ghul jaata hai.
- Har model kya dekhta hai yeh khud ek design hai: instructions ek versioned anubandh ki tarah, budget tang hone par hataane ka ek kram, aur memory kam se kam teen alag stores ki tarah, har ek ka ek maalik, ek retention period aur hataane ka tareeka.
- Har faisle ko apna provenance rakhna chahiye, taaki use us code aur saboot tak khoja ja sake jisne use banaya.
