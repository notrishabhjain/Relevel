---
title: Apne Cases Par Model Chunna
summary: Ek founder us model par switch karna chahta hai jo pichhle hafte ke chart mein sabse upar tha. Team wahi karti hai jo aap car kharidne se pehle karte hain. Woh teen models ko apni sadkon par test drive karte hain, faisla ek card par likhte hain, aur tay karte hain ki har model kya dekhega. Aap leaderboards, routing, model selection cards aur provenance se milte hain.
course: ch9m ch10c
goals:
  - samjhana ki leaderboard yeh nahi batata ki aapke kaam ke liye kaun sa model theek hai
  - apne cases se benchmark banana, mushkil cases ke saath, aur models ko compare karna jab sirf model badle
  - routing samjhana aur faisla ek model selection card par likhna
  - tay karna ki har request mein kya jaata hai, memory ko alag-alag stores ki tarah dekhna, aur faislon ka provenance rakhna
terms:
  - leaderboard | school ki rank list jaisa, par models ke liye; woh kisi aur ke tests par scores dikhata hai, aapke nahi | leaderboards
  - model selection card | faisle ka ek page ka file card: kaam, quality target, data, speed aur cost ki limits, try kiye options, evidence aur fallback; isse reviewer dekh leta hai ki aapne woh model kyun chuna | selection card
  - routing | ek front desk jo aasaan requests sasti madadgaar ko bhejta hai aur sirf mushkil wali mehngi expert ko; har request us sabse sasti model ke paas jaati hai jo use sambhal sake | 
  - provenance | woh kaagazi nishaan jo batata hai ki koi cheez kahan se aayi, taaki aap ek claim ya decision ko uske source, version aur banane wale code tak trace kar sakein | 
---

September ke chauthe Monday ko founder, Mr. Bhatia, office aaye. Unka laptop ek bar chart par khula tha. Ek bar baaki sab se bahut lamba tha. Woh ek aise model ka tha jo pichhle hafte aaya tha. Woh us par switch karna chahte the.

Anaya ne poochha ki use kis cheez par test kiya gaya tha. Reasoning, mathematics, coding aur bahut kuch, unhone kaha. Usne poochha ki kya Hinglish names par test hua tha. Woh hans diye. Unhe lagta hai nahi hua.

Woh chart ek **leaderboard** hai. Yeh school ki rank list jaisa hai. Woh dikhata hai ki model ne kisi aur ke kaam par kaisa kiya. Result imaandaar ho sakta hai aur phir bhi aapke kaam ke baare mein kuch nahi batata.

Ek car ko isliye kharidne ka sochiye ki usne award jeeta. Award yeh nahi batata ki car aapke parivaar ke liye theek hai ya nahi. Woh nahi batata ki woh aapki sadkon par chalegi ya aap uska kharch utha sakte hain. Aap car ko test drive par le jaate. Bahut kam teams model ko test drive par le jaati hain.

## Case: chart ka ek lamba bar

Anaya ne apna sawaal us awaaz mein poochha jo usne isi pal ke liye practise ki thi. Company ke kaun se cases mein model behtar tha? Aur kis speed aur cost par? Mr. Bhatia ne bhaunh uthayi. Phir woh muskuraye. "Dikhao," unhone kaha.

Yeh aisa hai jaise customer dukaandaar se kahe, "Mere kitchen mein chala kar dikhao." Yeh poochhna bilkul jaayaz hai.

## Kai farq ek saath

Imran isi sawaal ka intezaar kar raha tha. Model bas behtar ya kharab nahi hota. Cricket team sochiye. Ek khiladi achha batting karta hai, ek tez bowling, ek achhi fielding. Models kai tareeke se ek saath alag hote hain. Kaam kitna achha karte hain. Kitni tez jawaab dete hain. Kitna text le sakte hain. Functions kitni bharosemand tarah se call karte hain (tool chalane ko kehte hain). Aur kitne mein padte hain.

Jo pehle mein jeete, woh agle teen mein haar sakta hai. Aur sabse zaroori kaun sa hai, yeh use ke baare mein ek fact hai, model ke baare mein nahi.

Isliye kaam yeh tha ki pehle likhein ki Sahaj ke use ko kya chahiye. Phir naapein.

Table: Finder ko kya chahiye tha
| Zaroorat | Source | Value |
| --- | --- | --- |
| Quality | May mein likhi specification | Fixed-shape numbers mein kam se kam 100 mein 98, aur jitne zyada ho sakein utne names |
| Data | July mein likha rule | Koi asli cheez building ke bahar nahi jaa sakti |
| Speed | Specification | Aam taur par ek tihaai second se kam |
| Cost | Specification | Kul milakar ek message par 60 paise se kam |

## Teen ko chala kar dekhna

Benchmark mein 60 cases the. Anaya ne use ek weekend mein banaya tha. **Benchmark** sahi jawaabon ke saath cases ka ek fixed set hota hai. Yeh practice paper jaisa hai jiske peeche answers hote hain. Isse aap options ko ek hi kaam par barabari se compare karte hain. Yeh answer key nahi thi.

Yeh answer key se nikali gayi thi. Ise jaanboojh kar un tarah se mushkil banaya gaya tha jo kaam ki thi. Isme bees English messages the, bees Hinglish ke, aur das Devanagari ke. Aakhri das woh the jo ek aalsi test kabhi shamil nahi karta. Kuch messages ka koi jawaab hi nahi tha. Kuch saaf nahi the. Kuch mein ek injected instruction tha (text mein chupke se ghusaya hukm).

::: key Score se pehle test set ko challenge kijiye
Benchmark ek naapne wala fita hai. Aasaan cases se bana fita aasaan jawaab deta hai. Product manager score se pehle test set ko challenge karta hai. Anaya ne poochha ki kya uska benchmark woh failure pakad lega jiska use sabse zyada dar tha. Phir usne pakka kiya ki woh pakdega.
:::

Unhone teen models ko ek-ek karke chalaya. Har baar sirf model badla. Instructions aur cases wahi rahe. Yeh zaroori hai. Maan lijiye aap model aur instructions ek saath badlein aur score badh jaaye. Koi nahi bata sakta ki kisne madad ki. Yeh bat aur batsman dono ek saath badalne jaisa hai.

Table: 60 cases par teen models
| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| Yeh kya hai | Chhota, open-weight, andar chalta hai | Medium, open-weight, andar chalta hai | Bada, closed, bahar hosted |
| Overall mila | 82% | 91% | 95% |
| Hinglish mein mila | 71% | 86% | 92% |
| Aam time | 0.15 second | 0.4 second | 2.1 second |
| Ek call ki cost | lagbhag 3 paise | lagbhag 9 paise | lagbhag 40 paise |

Anaya ne poochha, kya use Model C chalane ki ijaazat bhi hai? Banaye hue sentences par hai, Imran ne kaha. Benchmark mein koi asli customer nahi tha. Isiliye use invented text se banaya gaya tha. Koi bhi model kahin bhi chala kar dekha ja sakta hai ki woh kaise behave karta hai. Rule asli data ke baare mein tha.

Table ne koi saaf winner nahi diya. Yahi use kaam ka banata hai. Model C kaam sabse achha karta tha, lekin use use nahi kiya ja sakta tha. Woh bahar chalta tha aur slow tha. Model A tez aur sasta tha, lekin akela kaafi achha nahi. Model B dono ke beech mein tha.

## Sabse sasta jo kaam kar de

Numbers ek aise tareeke ki taraf ishaara kar rahe the jo team pehle se jaanti thi. **Routing** har request ko us sabse sasti model ke paas bhejta hai jo use sambhal sake. Hospital ka front desk sochiye. Ek nurse pehle har mareez ko dekhti hai. Sirf mushkil cases senior doctor ke paas jaate hain, jo mehnga hai. Yahan Model A har message padhta, tez aur sasta. Woh bahut zyada messages nipta deta. Model B sirf unsure kuch ko dekhta.

Anaya ne use benchmark par aazmaya. Dono milkar overall 100 mein 93 mile. Hinglish mein 100 mein 89 mile. Aam time 0.17 second tha, lagbhag chaar paise ek message par. Yeh Model C jitna achha nahi tha. Lekin yeh specification poori karta tha, aur iski ijaazat thi.

Phir usne woh kiya jo Imran ne sikhaya tha. Usne faisle ko kaagaz ka ek tukda bana diya. **Model selection card** ek chhota, versioned page hai. Yeh aspatal ke bed ke end par laga card jaisa hai. Usme kaam, quality target, data, speed aur cost ki limits, try kiye options, evidence aur fallback (kuch toote toh plan) likha hota hai.

Isse reviewer dekh sakta hai ki woh model kyun chuna gaya. Uska card ek page par aa gaya. Neeche usne fallback ki line bhari: rules-only safe mode, jaisa specification mein tha.

Imran ne use table dhakne ko kaha aur faisla karne ko kaha. Usne kiya, aur khud ko us model ki taraf haath badhate paya jo chart mein sabse upar tha. Wahi cheez jo usne Mr. Bhatia se na karne ko kaha tha. Numbers ke bina, tees second ke andar faisla ek raay ban gaya. "Isiliye yeh card par hai," Imran ne kaha.

## Folder mein kya jaata hai

Dopahar ka doosra aadha hissa ek alag sawaal ka tha. Shuruaat Dr. Meenakshi Rao ki ek misaal se hui. Ek bahut smart naya colleague kal ka kuch yaad nahi rakhta. Isliye har subah manager use ek folder deta hai. Usme hamesha wali instructions hoti hain, kuch examples, aaj ki zaroori file, aur pichhle hafte ka ek note. Folder mein kya hai, yahi tay karta hai ki colleague kitna achha kaam karega.

Model chun liya gaya tha. Ab sawaal yeh tha ki folder mein exactly kya hai. Anaya is idea se context ke naam se mil chuki thi (jo model ki mez par rakha hota hai). Ab usne dekha ki kaam ka kitna bada hissa isi mein hai.

Table: Folder ke teen hisse
| Hissa | Kaise dekhein |
| --- | --- |
| Instructions | Inhe app aur model ke beech contract ki tarah dekhiye. Inme role, kaam, limits, examples, output ka shape, aur jawaab na de paaye toh kya karna hai, sab aata hai. Neeche ka code har ek par nirbhar hai. Inhe wahi milna chahiye jo har interface ko milta hai: ek version number, badlaavon ka record, aur har edit ke pehle aur baad wahi das cases chalana |
| Har hisse ka size | Pehle se tay kijiye ki budget kam pade toh pehle kya hatayenge. Zyadatar log history pehle hatate hain aur evidence sabse aakhir mein. Aapka design alag ho, toh wajah design hoti hai |
| Memory | Yeh feature nahi, architecture hai. Kam se kam teen alag stores ko memory kehte hain aur unhe mix nahi karna chahiye |

Teesri row ko zara gaur se dekhna padega. "Memory" shabd teen alag stores ke liye use hota hai. Ek hi mez ki teen daraazein sochiye.

Table: Memory kehlane wale teen stores
| Store | Isme kya hota hai | Har ek ke liye kaun se sawaal |
| --- | --- | --- |
| Session history | Is chat mein ab tak kya kaha gaya | Usme kya hai, kiska hai, kitni der rakhi jaati hai, kaun dekh sakta hai, kaise delete hogi |
| User profile | Company is insaan ke baare mein kya jaanti hai | Wahi paanch sawaal |
| Task state | Is khaas kaam mein ab tak kahan pahunche | Wahi paanch sawaal |

Session history ke liye Anaya us cell par ruki jisme likha tha ki default se kya kabhi inject nahi hona chahiye. Usne ek word likha: identity numbers. Guard history ko andar aate waqt pehle hi saaf kar deta tha. Ab woh store ke design ka hissa ban gaya.

## Yeh kahan se aaya

Aakhri baat shaant thi. Jab guard koi detail chhupata, woh likh leta ki kyun. Har record mein message ka number hota. Usme guard ka woh hissa hota jisne faisla kiya, aur us hisse ka version. Koi bhi baad mein dekh kar faisle ko uske source tak trace kar sakta tha. Matlab woh code jisne use banaya, aur us waqt ki instructions.

Yeh hai **provenance**. Yeh woh kaagazi nishaan hai jo batata hai ki koi cheez kahan se aayi. Phone ke saath aane wale bill aur warranty card ko sochiye.

Yeh uski ummeed se zyada kaam ka nikla. Citation tabhi kaam ki hai jab padhne wala evidence tak pahunch sake. Aur jis faisle ko dohra nahi sakte, use bachaya nahi ja sakta. September mein Lakshmi ne poochha ki August ke ek Tuesday ko ek khaas naam kyun chhupaya gaya tha. Anaya ko jawaab chaalis second mein mil gaya. Usne yeh nahi kaha ki pehle kisi ne poochha hi nahi tha.

## Saaraansh

Leaderboard dikhata hai ki model ne kisi aur ke kaam par kaisa kiya. Models kai tareeke se ek saath alag hote hain. Isliye kaam ki tulna aapka apna benchmark hai. Use un cases aur failures se banaiye jo maayne rakhte hain. Kuch cases mushkil rakhiye. Runs ke beech sirf model badliye.

- Routing har request ko us sabse sasti model ke paas bhejta hai jo use sambhal sake, aur mehnge model ko mushkil cases ke liye bachaata hai.
- Faisla model selection card par jaata hai. Evidence ke bina woh kuch second mein raay mein ghul jaata hai.
- Har model kya dekhta hai, yeh apne aap mein ek design hai. Instructions ek versioned contract hain. Budget kam pade toh hatane ka ek order hota hai. Memory kam se kam teen alag stores hai. Har ek ka ek maalik, ek retention period aur delete karne ka ek tareeka hota hai.
- Har faisle ke saath uska provenance hona chahiye. Tab aap use us code aur evidence tak trace kar sakte hain jisne use banaya.

Agle chapter mein gyarah log bade kamre mein milte hain. Woh poochhte hain ki kya retrieval un logon ke sawaalon se bach sakta hai jinhone use banaya nahi.
