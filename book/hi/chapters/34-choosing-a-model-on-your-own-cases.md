---
title: Apne Cases Par Model Chunna
summary: Ek founder us model par switch karna chahta hai jo pichhle hafte ke chart mein sabse upar tha. Team wahi karti hai jo aap gaadi ke saath karte hain: teen models ko apni sadakon par chala kar dekhti hai, faisla ek card par likhti hai, aur phir tay karti hai ki har model ko exactly kya dikhega. Chapter mein leaderboards, routing, model selection cards aur provenance aate hain.
course: ch9m ch10c
goals:
  - samjhana ki leaderboard yeh nahi batata ki aapke kaam ke liye kaun sa model theek hai
  - apne cases se benchmark banana, mushkil cases ke saath, aur models ko compare karna jab sirf model badle
  - routing samjhana aur faisla ek model selection card par likhna
  - tay karna ki har request mein kya jaata hai, memory ko alag-alag stores ki tarah dekhna, aur faislon ka provenance rakhna
terms:
  - leaderboard | models ki ek published ranking, jo kisi aur ke tests par unke scores se bani hoti hai | leaderboards
  - model selection card | ek chhota, versioned page jisme kaam, quality target, data, speed aur cost ki limits, try kiye gaye options, evidence aur fallback likhe hote hain, taaki reviewer dekh sake ki model kyun chuna gaya | selection card
  - routing | har request ko us sabse sasti model ke paas bhejna jo use sambhal sake, aur sirf mushkil wali ko ek zyada strong aur mehnge model ke paas | 
  - provenance | is baat ka record ki koi cheez kahan se aayi, taaki ek claim ya decision ko uske source, version aur use banane wale code tak trace kiya ja sake | 
---

September ke chauthe Monday ko founder, Mr. Bhatia, laptop kholkar office aaye. Screen par ek bar chart tha, jisme ek bar baaki sabse bahut lamba tha. Woh bar ek aise model ka tha jo pichhle hafte release hua tha, aur Mr. Bhatia us par switch karna chahte the.

Anaya ne poochha ki use kis cheez par test kiya gaya tha. Reasoning, mathematics, coding aur bahut kuch, unhone kaha. Anaya ne poochha, kya Hinglish names par bhi test hua? Woh hans diye aur bole ki shayad nahi hua.

Is chart ko **leaderboard** kehte hain. Yeh dikhata hai ki model ne kisi aur ke kaam par kaisa kiya. Result imaandaar ho sakta hai, aur phir bhi aapke apne kaam ke baare mein kuch nahi batata. Ise aise sochiye ki aap koi gaadi isliye khareed lein kyunki usne award jeeta. Award yeh nahi batata ki gaadi aapke parivaar ke liye theek hai, aapki sadakon par chalegi, ya chalana afford kar sakte hain. Aap gaadi ko chala kar dekhte. Bahut kam teams model ko chala kar dekhti hain.

## Case: chart ka ek lamba bar

Anaya ne apna sawaal us awaaz mein poochha jiski usne isi pal ke liye practice ki thi. Company ke kin cases par yeh model behtar tha, aur kis speed aur cost par? Mr. Bhatia ne bhaunh uthayi, phir muskuraye. "Dikhao," unhone kaha.

## Kai farq ek saath

Imran isi sawaal ka intezaar kar raha tha. Model bas behtar ya kharab nahi hota. Models kai tareeke se ek saath alag hote hain: kaam kitna achha karte hain, kitni tez jawaab dete hain, kitna text le sakte hain, functions kitni bharosemand tarah se call karte hain, aur kitne mein padte hain. Jo pehle mein jeete, woh agle teen mein haar sakta hai. Aur sabse zaroori kaun sa hai, yeh use ke baare mein ek fact hai, model ke baare mein nahi.

Isliye kaam yeh tha ki pehle tay karein ki Sahaj ke use ko kya chahiye, aur phir naapein.

Table: Finder ko kya chahiye tha
| Zaroorat | Source | Value |
| --- | --- | --- |
| Quality | May mein likhi specification | Fixed-shape numbers mein kam se kam 100 mein 98, aur jitne zyada ho sakein utne names |
| Data | July mein likha rule | Koi asli cheez building ke bahar nahi jaa sakti |
| Speed | Specification | Aam taur par ek tihaai second se kam |
| Cost | Specification | Kul milakar ek message par 60 paise se kam |

## Teen ko chala kar dekhna

Benchmark mein 60 cases the, jo Anaya ne ek weekend mein banaye the. **Benchmark** cases ka ek fixed set hota hai, expected answers ke saath, jisse options ko ek hi kaam par barabari se compare kiya jaata hai. Yeh answer key nahi thi. Yeh us se nikali gayi thi, aur jaanboojh kar un tarah se mushkil banayi gayi thi jo kaam ki thi. Isme bees English messages the, bees Hinglish ke, aur das Devanagari ke. Aakhri das woh the jo koi naive test kabhi shamil nahi karta: aise messages jinka koi jawaab hi nahi, ambiguous messages, aur woh jinme ek injected instruction hai.

::: key Score se pehle test set ko challenge kijiye
Benchmark ek naapne ka instrument hai, aur aasaan cases se bana instrument aasaan conclusions deta hai. Product manager ka kaam hai ki score ko challenge karne se pehle test set ko challenge kare. Anaya ne poochha ki kya uska benchmark woh failure pakad lega jisse use sabse zyada dar tha, aur pakka kiya ki pakad le.
:::

Unhone teen models ko ek-ek karke chalaya. Har baar sirf model badla, instructions aur cases wahi rahe. Yeh zaroori hai. Agar aap model aur instructions ek saath badlein aur score sudhar jaaye, toh koi nahi bata sakta ki kisne madad ki.

Table: 60 cases par teen models
| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| Yeh kya hai | Chhota, open-weight, andar chalta hai | Medium, open-weight, andar chalta hai | Bada, closed, bahar hosted |
| Overall mila | 82% | 91% | 95% |
| Hinglish mein mila | 71% | 86% | 92% |
| Aam time | 0.15 second | 0.4 second | 2.1 second |
| Ek call ki cost | lagbhag 3 paise | lagbhag 9 paise | lagbhag 40 paise |

Anaya ne poochha, kya use Model C chalane ki ijaazat bhi hai? Banaye hue sentences par hai, Imran ne kaha. Benchmark mein koi asli customer nahi tha. Isiliye use invented text se banaya gaya tha: koi bhi model kahin bhi chala kar dekha ja sakta tha ki woh kaise behave karta hai. Rule asli data ke baare mein tha.

Table ne koi saaf winner nahi diya, aur yahi use kaam ka banata hai. Model C kaam mein sabse achha tha, lekin use use nahi kiya ja sakta tha, kyunki woh bahar chalta tha aur slow tha. Model A tez aur sasta tha, lekin akela kaafi achha nahi. Model B dono ke beech mein tha.

## Sabse sasta jo kaam kar de

Numbers us tareeke ki taraf ishaara kar rahe the jo team pehle se use karti thi. **Routing** har request ko us sabse sasti model ke paas bhejti hai jo use sambhal sake. Sirf mushkil wali ek zyada strong aur mehnge model ke paas jaati hain. Yahan Model A har message padhta, tezi se aur sasta, aur zyadatar ko wahi nipta deta. Model B sirf unsure thode se messages dekhta.

Anaya ne benchmark par aazmaya. Dono saath mein overall 100 mein 93 aur Hinglish mein 100 mein 89 pakad rahe the. Aam time 0.17 second tha, lagbhag chaar paise ek message par. Yeh Model C jitna achha nahi tha. Lekin specification poori karne ke liye kaafi achha tha, aur iski ijaazat thi.

Phir usne woh kiya jo Imran ne sikhaya tha. Usne faisle ko kaagaz ka ek tukda bana diya. **Model selection card** ek chhota, versioned page hota hai. Usme kaam, quality target, data, speed aur cost ki limits, try kiye gaye options, evidence aur fallback likhe jaate hain. Phir reviewer dekh sakta hai ki model kyun chuna gaya. Uska card ek page mein aa gaya. Neeche usne fallback wali line poori ki: rules-only safe mode, jaise specification mein tha.

Imran ne use table dhakne ko kaha aur faisla karne ko kaha. Usne kiya, aur khud ko us model ki taraf haath badhate paya jo chart mein sabse upar tha. Wahi cheez jo usne Mr. Bhatia se na karne ko kaha tha. Numbers ke bina, tees second ke andar faisla ek raay ban gaya tha. "Isiliye yeh card par hai," Imran ne kaha.

## Folder mein kya jaata hai

Dopahar ka doosra aadha hissa ek alag sawaal ka tha. Shuruaat Dr. Meenakshi Rao ki ek misaal se hui. Ek bahut smart naya colleague kal ka kuch yaad nahi rakhta. Isliye har subah manager use ek folder deta hai: hamesha wali instructions, kuch examples, aaj ki zaroori file, aur pichhle hafte ka ek note. Folder mein kya hai, yahi tay karta hai ki colleague kitna achha kaam karega.

Model chun liya gaya, toh agla sawaal yeh tha ki folder mein exactly kya hai. Anaya is idea se context ke naam se mil chuki thi, aur ab usne dekha ki kaam ka kitna bada hissa isi mein hai.

Table: Folder ke teen hisse
| Hissa | Kaise dekhein |
| --- | --- |
| Instructions | Inhe app aur model ke beech contract ki tarah dekhiye: role, kaam, limits, examples, output ka shape, aur jawaab na de paaye toh kya karna hai. Neeche ka code har ek par nirbhar hai. Inhe wahi milna chahiye jo har interface ko milta hai: ek version number, badlaavon ka record, aur har edit ke pehle aur baad wahi das cases chalana |
| Har hisse ka size | Pehle se tay kijiye ki budget kam pade toh cheezein kis order mein hatayenge. Zyadatar log history pehle hatate hain aur evidence sabse aakhir mein. Design alag ho, toh wajah design hoti hai |
| Memory | Yeh feature nahi, architecture hai. Kam se kam teen alag stores ko memory kehte hain aur unhe mix nahi karna chahiye |

Teesri row ko zara gaur se dekhna padega, kyunki "memory" shabd teen alag stores ke liye use hota hai.

Table: Memory kehlane wale teen stores
| Store | Isme kya hota hai | Har ek ke liye kaun se sawaal |
| --- | --- | --- |
| Session history | Is chat mein ab tak kya kaha gaya | Usme kya hai, kiska hai, kitni der rakhi jaati hai, kaun dekh sakta hai, kaise delete hogi |
| User profile | Company is insaan ke baare mein kya jaanti hai | Wahi paanch sawaal |
| Task state | Is khaas kaam mein ab tak kahan pahunche | Wahi paanch sawaal |

Session history ke liye Anaya us cell par ruki jisme likha tha ki default se kya kabhi inject nahi hona chahiye. Usne ek word likha: identity numbers. Guard history ko andar aate waqt pehle hi saaf kar deta tha. Ab woh store ke design ka hissa ban gaya.

## Yeh kahan se aaya

Aakhri baat ek shaant si thi. Jab guard koi detail chhupata tha, toh woh likh deta tha ki kyun. Har record mein message ka number hota tha, guard ka woh hissa jisne faisla kiya, aur us hisse ka version. Baad mein koi bhi dekh kar faisle ko uske source tak trace kar sakta tha: woh code jisne faisla kiya, aur woh instructions jo us waqt lagu thi. Yeh hai **provenance**, yaani is baat ka record ki koi cheez kahan se aayi.

Yeh uski umeed se zyada zaroori nikla. Citation tabhi kaam ka hai jab padhne wala evidence tak pahunch sake. Aur jo faisla reproduce nahi ho sakta, uska bachaav nahi kiya ja sakta. September mein Lakshmi ne poochha ki August ke ek Tuesday ko ek khaas naam kyun chhupaya gaya tha. Anaya ko jawaab chaalis second mein mil gaya. Usne yeh nahi kaha ki pehle kisi ne poochha hi nahi tha.

## Saaraansh

Leaderboard dikhata hai ki model ne kisi aur ke kaam par kaisa kiya. Models kai tareeke se ek saath alag hote hain. Isliye kaam ki tulna apna khud ka benchmark hai, un cases aur failures se bana jo maayne rakhte hain, kuch cases jaanboojh kar mushkil rakhkar, aur runs ke beech sirf model badal kar.

- Routing har request ko us sabse sasti model ke paas bhejti hai jo use sambhal sake, aur mehnga model mushkil cases ke liye rakhti hai.
- Faisla model selection card par hona chahiye, kyunki evidence ke bina woh seconds mein raay mein ghul jaata hai.
- Har model ko kya dikhta hai, yeh apne aap mein ek design hai. Instructions ek versioned contract hain. Budget kam pade toh cheezein hatane ka ek order hota hai. Aur memory kam se kam teen alag stores hain, har ek ka owner, retention period aur delete karne ka tareeka.
- Har faisle ke saath uska provenance hona chahiye, taaki use us code aur evidence tak trace kiya ja sake jisne use banaya.
