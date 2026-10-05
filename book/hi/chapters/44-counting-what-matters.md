---
title: Jo Maayne Rakhta Hai Use Ginna
summary: Jab asli log tool istemaal karte hain, toh sawaal "kya yeh kaam karta hai?" se "woh kya karte hain?" ban jaata hai, aur ek privacy product ko iska jawaab uss cheez ko record kiye bina dena hota hai jise chhupane ke liye woh bana hai. Ek sample-size ka hisaab phir samjhata hai ki ek jawaan company woh test kyun nahi chala sakti jo woh chahti hai. Chapter event taxonomies, tracking plans, cohorts, A/B tests aur minimum detectable effect samjhata hai.
course: b3
goals:
  - North Star ko un input metrics se jodna jinka maalik ek naamit team ho
  - ek event taxonomy aur tracking plan likhna jiski properties kabhi personal content nahi rakhti
  - funnel, cohort table aur segment padhna, aur batana ki ek table par bharosa karne ke liye kitni teams chahiye
  - ek A/B test ko kitna sample chahiye yeh ginna, aur samjhana ki ek pattern kaaran ka saboot kyun nahi hai
terms:
  - event taxonomy | ek product jo events record karta hai unki list, ek naming niyam ke saath jise sab follow karein, jaise lower case mein object_action aur bhoot kaal | taxonomy
  - tracking plan | woh saajha document jo har event, uske properties, woh kab fire hota hai aur uska malik kaun hai, list karta hai, jisse engineers banate hain aur analysts bharosa karte hain | 
  - cohort | users ka ek group jisne ek hi avadhi mein shuru kiya, samay ke saath saath dekha gaya | cohorts
  - A/B test | ek badlaav ko users ke ek yaadrichhik aadhe ko dikhana aur doosre aadhe se tulna karna; yaadrichhikta hi aapko kehne deti hai ki badlaav ne farak paida kiya | A/B tests
  - minimum detectable effect | sabse chhota badlaav jise pakadna kaam ka hai; yeh tay karta hai ki ek test ko kitne users chahiye | MDE
---

Karan, jo project mein aaya pehla analyst tha, February mein aaya, aur apni pehli subah mein usne Anaya se jo pehli baat kahi woh yeh thi: "Kripya mujhe bata do ki aap message text track nahi kar rahi." Woh lagbhag aahat hui aur usne kaha ki bilkul nahi. Karan ne kaha yeh achha hai, kyunki use har hafte yeh poochhna padega aur woh ek aise insaan se shuru karna chahta tha jo sahmat ho.

Yeh ek mazaak tha aur ek niyam bhi. Ek privacy tool jo yeh naapta ki woh kitna achha kaam karta hai us cheez ko record karke jise woh chhupa raha tha, apne aap ko ek hafte mein hara deta. Yeh chapter measurement ke pehle mahine ka anusaran karta hai, jisme Karan ka kaam mukhya roop se yeh saabit karna tha ki guard woh ginta tha jo log karte the, bina us cheez ka koi nishaan rakhe jo woh likhte the.

## Case: bina record kiye naapna

Neeche ke section ek ke baad ek mukhya number, un events ki list jo use khilati hai, us list ke views, aur ek aise test ko lete hain jo ek jawaan company chala nahi sakti thi.

## Ek number, aur uske neeche ke lever

April mein Anaya ne ek vaakya chuna tha jo batata tha ki guard kya value deta hai aur uske saath ek number: messages chat se is tarah nikalte hain ki unme kuch personal nahi bachta. Woh uska North Star tha. Woh achha tha, kyunki use gina ja sakta tha, par roz ke maarg-darshan ke liye bekaar tha.

Karan ne kaha ki North Star ko seedhe hilaya nahi ja sakta. Woh inputs ke zariye hilta hai, jo woh cheezein hain jo ek team is quarter badal sakti hai. Unhone teen likhe.

Table: Teen input metrics
| Input | Maalik | North Star se jod |
| --- | --- | --- |
| Naye integrations ka woh hissa jo pehle hafte ki jaanch paas karta hai | Ek naamit engineer | Ek integration jo kaam karta hai woh messages saaf karta hai |
| Shak wale cases ka woh hissa jo ek insaan ek din ke andar review karta hai | Ek naamit support lead | Review kiye gaye cases sahi karwai ke saath khatam hote hain |
| Una bhashaon ki ginti jo quality ki seema se upar naapi gayi hain | Anaya | Dhake hue bhashaon ke messages sahi saaf hote hain |

Karan ne woh vaakya joda jise usne kaha ki uski pichhli naukri ko bachaya tha: agar koi input badhta hai aur North Star nahi, toh jod galat hai, aur yeh seekhna upyogi hai.

## Hone wali cheezon ki ek list

Karan ne phir use woh kaha jise usne oobaau aur sabse zaroori hissa kaha. Ek product woh cheezein record karta hai jo hoti hain, jo events hain, aur jab tak koi convention nahi, chhe log ek hi event ko chhe tarah naam denge. Team ne jo convention chuna woh aam tha: pehle object, phir action, chhote akshar mein aur beete hue kaal mein. Poori list ek *event taxonomy* hai.

Table: Guard ki event taxonomy
| Event | Properties | Kaun sa sawaal hal karta hai |
| --- | --- | --- |
| kit_installed | host project ki bhasha, version | Kitne developers mushkil kadam paar karte hain? |
| message_checked | likhne ki kism, lambai ka band | Kitna traffic hai, aur kis likhawat mein? |
| detail_found | detail ki kism | Guard asal mein kya pakad raha hai? |
| detail_masked | detail ki kism, liya gaya action | Woh uske saath kya karta hai? |
| review_requested | kaaran | Use kitni baar shak hota hai? |
| restore_clicked | detail ki kism | Kya woh woh chhupa raha hai jo logon ko chahiye? |
| badge_clicked | koi nahi | Kya growth loop ghoomta hai? |

Anaya ne properties column ko neeche tak padha aur dekha ki har cell ek kism, ek band ya ek ginti thi. Koi bhi value nahi thi, aur koi bhi message, number ya naam ko phir se banane ke kaam nahi aa sakti thi. Karan ne samjhaya ki properties ek event mein byora jodti hain taaki nateeje baad mein baante ja sakein. Unhe zaroori cheezon tak seemit rakhna chahiye, aur unme kabhi text ya koi personal cheez nahi honi chahiye, na property mein aur na ek free-text notes field mein jise koi ek din bharega.

::: key Pehchaan ko bhi wahi dhyaan chahiye
Demonstration page par aane wale visitor ko ek anaam number se shuru kiya jaata tha. Jab woh sign up karta, toh number ek account se jod diya jaata taaki pehle ki visits uske itihaas ka hissa ban jaayein. Aur kyunki buyer companies the, har event company ka ek account number bhi leke chalta tha. Karan ne dekha ki buyer ko teams ki parwaah hoti hai, akele developers ki nahi, isliye analysis ko ek team dekhne mein sakshm hona chahiye.
:::

Sab kuch ek saajhe document mein gaya, *tracking plan*, jo har event, uski properties, woh kab chalta hai aur kiska hai, yeh batata hai. Engineers use dekhkar banate hain aur analysts us par bharosa karte hain. Jis din use manzoor kiya gaya, Karan ka pehla kaam har event khud chalana tha aur pakka karna tha ki woh ek baar, sahi properties ke saath pahuncha, aur phir bane accounts ki ginti ko accounts table ki rows se milana. Woh mel khate the, jo saboot tha jo woh chahta tha. Kharab data ek chart par bilkul achhe data jaisa dikhta hai, usne kaha, aur jaanchna padta hai.

## Teen nazariye

Teen nazariye zyadatar un sawaalon ka jawaab dete hain jo koi bhi poochhta hai. Ek funnel un users ka hissa dikhata hai jo har kadam poora karte hain, kram mein, aur isliye kahan woh gir jaate hain. *Cohort* un users ka samooh hai jo ek hi avadhi mein shuru hue, saath-saath dekhe gaye. Segment un users ka ek tukda hai jo koi property saajha karte hain, jaise woh kis kism ki likhawat sambhalte hain, jo dikhata hai ki product kiske liye theek hai.

Karan ne pehli retention table us hafte banayi jab use banane laayak data tha. Har row un teams ka ek cohort tha jo ek diye hafte mein shuru hui, aur har cell dikhata tha ki unme se kitni teams itne hafton baad bhi kit chala rahi hain.

Table: Pehli retention table
| Cohort | Teams | Hafta 1 | Hafta 2 | Hafta 4 | Hafta 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

Usne use do tareekon se padhne ko kaha. Ek row ke aar-paar, pehli line pachaas percent par chapti ho gayi, jo ek sthayi istemaal sujhati hai. Ek column ke neeche, naye cohorts thoda behtar tike, jo sujhata hai ki January ke badlaav ne madad ki. Anaya ne poochha ki kya use ispar bharosa karna chahiye. Usne Teams column ki taraf ishaara kiya. Aath teams ke saath ek team baarah points se zyada hai. Baarah points ke jhool ko asar nahi kaha ja sakta, aur dono tareeke se padhne ke liye bharosa karne se pehle bahut zyada users chahiye. Usne sujhaya ki table deewar par laga do aur uske baare mein kuch mat kaho.

## Woh test jo woh chala nahi sakti thi

Ek vichaar tha jiska Anaya intezaar kar rahi thi. Naye onboarding mein kit ek developer ko setup poora hone se pehle dikha sakta tha ki kya chhupaya jaayega. Use lagta tha ki isse zyada developers khatam karenge, aur woh is vichaar ko theek se test karna chahti thi.

*A/B test* ek change ko users ke ek random aadhe hisse ko dikhata hai aur unki doosre aadhe se tulna karta hai. Random karna hi woh hai jo vaakya "badlaav ne antar paida kiya" ki ijaazat deta hai. Aur test shuru hone se pehle ek design likha jaana chahiye: sawaal, kise baanta jaata hai, mukhya number, ek guardrail, dhoondhne laayak sabse chhota badlaav, kitne users chahiye aur kab rukna hai.

Dhoondhne laayak sabse chhota badlaav *minimum detectable effect* hai, aur woh baaki sab tay karta hai. Karan ne use haan-ya-nahi naap ke liye ek moti thumb rule di: har samooh mein chahiye users lagbhag solah guna dar guna (1 minus dar), jo dhoondhne laayak badlaav ke varg se bhaag diya gaya.

::: example Anaya ka sample-size ka hisaab
Activation tees percent hai, aur woh jaanna chahti thi ki kya preview use chaalis tak le jaata hai. Solah guna 0.30 guna 0.70, 0.01 se bhaag diya (das points ke badlaav ka varg), har samooh mein 336, yaani kul 672 deta hai. Company ko mahine mein lagbhag chaalis nayi teams milti hain. Us dar par test mein lagbhag dedh saal lagta.
:::

Karan ne kaha ki yeh imaandaar jawaab tha. Ek shuruaati company ke paas chaalis accounts hote hain, do hazaar nahi, aur woh yeh test nahi chala sakti. Woh yeh kehti hai, aur phir doosra saboot istemaal karti hai: paanch developers ko feature istemaal karte dekhna, pehle aur baad ki saavdhaani se tulna karna, bade asar dhoondhna, aur kehna ki saboot kamzor hai. Bahut chhota test, apne nateeje ki report ke saath, test na karne se bura hai, kyunki woh shor ko khabar ki tarah report karta hai.

Anaya ne us hafte paanch developers ke saath observation chalayi. Chaar ne preview ke saath poora kiya. Jin paanch ne puraane flow ka istemaal kiya tha unme se teen ne kiya tha. Yeh saboot nahi tha, aur usne ise ek sanket ki tarah chinhit kiya.

## X ka matlab Y kyun nahi

Ek aur chetavni March mein ek achhe lagne wale pattern ke roop mein aayi. Jo teams ek din ke andar shak wale cases ka review karti thi woh aath hafte baad kit istemaal karte rehne ki kahin zyada sambhavna rakhti thi. Anaya maanna chahti thi ki review unhe rokta hai. Karan ne kaha ki shaayad, ya shaayad jo teams review karne ki parwaah karti hain woh waise bhi tik jaati, kyunki lagi hui teams dono karti hain. Sirf ek random test kaaran dikhata hai, aur baaki sab ek aisa pattern hai jise test karna chahiye. Usne use ek vaakya diya: jo teams X karti hain woh Y bhi karti hain, aur "kyunki" kabhi nahi.

Usne do records ko alag bhi rakha jinhe log aksar milate hain. Product events record karte hain ki logon ne kya kiya. Models ke vyavhaar ke records, unke traces, timings aur scores, record karte hain ki system ne kya kiya. Usne unhe ek saajhe request number se joda, taaki koi ek se doosre par ja sake aur unhe kabhi mila na de.

## Saaraansh

North Star ko seedhe nahi hilaya ja sakta. Woh input metrics ke zariye hilta hai jinka maalik ek naamit team hai, aur agar ek input badhta hai aur mukhya number nahi, toh jod galat hai.

- Ek product jo record karta hai woh ek hi naam ke niyam ko maane aur ek tracking plan mein likha jaaye. Properties ek kism ya ginti rakhti hain, content kabhi nahi, aur jab buyer companies hon toh ek account pehchaan ek user pehchaan ke saath hoti hai.
- Funnels dikhate hain ki log kahan girte hain, cohorts un groups ko follow karte hain jo saath shuru hue, aur ek retention table par bharosa karne se pehle kaafi teams chahiye.
- A/B test ko ek minimum detectable effect aur use dhoondhne laayak kaafi bada sample chahiye. Ek shuruaati company aksar ek nahi chala sakti, aur use yeh kehna chahiye.
- Data ko maanne se pehle jaancha jaana chahiye, aur ek pattern jisme log jo ek kaam karte hain woh doosra bhi karte hain yeh saboot nahi hai ki ek doosre ka kaaran hai.
