---
title: Jo Maayne Rakhta Hai Use Ginna
summary: Jab asli log product istemaal karte hain, sawaal "kya yeh kaam karta hai?" se badal kar "woh kya karte hain?" ho jaata hai, aur ek privacy product ko iska jawaab bina ek bhi woh cheez record kiye dena hota hai jo use chhupani hai. Phir ek sample-size ka jod samjhata hai ki ek jawan company woh test kyun nahi chala sakti jo woh chahti hai.
course: b3
terms:
  - event taxonomy | ek product jo events record karta hai unki list, ek naming niyam ke saath jise sab follow karein, jaise lower case mein object_action aur bhoot kaal | taxonomy
  - tracking plan | woh saajha document jo har event, uske properties, woh kab fire hota hai aur uska malik kaun hai, list karta hai, jisse engineers banate hain aur analysts bharosa karte hain | 
  - cohort | users ka ek group jisne ek hi avadhi mein shuru kiya, samay ke saath saath dekha gaya | cohorts
  - A/B test | ek badlaav ko users ke ek yaadrichhik aadhe ko dikhana aur doosre aadhe se tulna karna; yaadrichhikta hi aapko kehne deti hai ki badlaav ne farak paida kiya | A/B tests
  - minimum detectable effect | sabse chhota badlaav jise pakadna kaam ka hai; yeh tay karta hai ki ek test ko kitne users chahiye | MDE
---

Karan, jisne December mein ek anadekhe character ko dhoondhne ke liye teen jalebiyan khayin thi, February mein project mein uske pehle analyst ke roop mein shaamil hua, aur pehli cheez jo usne Anaya se, apni pehli subah kahi woh thi: "Please bataiye ki aap message text track nahi kar rahi hain."

Woh lagbhag naraaz ho gayi. "Bilkul nahi."

"Achha. Kyunki mujhe yeh har hafte kehna padega, aur main kisi aise se shuru karna chahta hoon jo sahmat ho."

Yeh ek mazaak tha, aur ek niyam bhi. Ek privacy tool jo yeh naapta ki woh kitna achha kaam karta hai use record karke jise woh chhupa raha tha, pehle hafte mein khud ko haraa deta. Karan woh mahina yeh saabit karne mein bitane wala tha ki usne aisa nahi kiya.

## Ek number, aur uske neeche ke levers

Unhone wahin se shuru kiya jahan strategy shuru hui thi. Vasant mein, Anaya ne ek vaakya chuna tha jo batata tha ki guard kya value deta hai, aur uske saath ek number: *messages chat se aise nikalte hain ki unme kuch personal bacha nahi.* Woh uska North Star tha. Woh achha tha, kyunki use ginna ja sakta tha, lekin woh roz ki dishaa dene ke liye bekaar tha.

"North Star ko tum seedhe nahi hila sakti," Karan ne kaha. "Tum use inputs ke zariye hilati ho. Woh cheezein jo ek team is quarter badal sakti hai."

Unhone teen likhe. Naye integrations ka hissa jo pehle hafte ki jaanch paas karte hain. Anishchit cases ka hissa jise ek insaan ek din ke andar review karta hai. Un bhashaon ki sankhya jo quality ki seema se upar naapi gayi hain. Har ek aisi cheez thi jiska ek naam wala malik tha. Har ek ka mukhya number se ek saaf rishta tha. Aur Karan ne woh vaakya joda jisne, usne kaha, uski purani naukri bachayi thi. *Agar koi input upar jaye aur North Star nahi, toh tumhara rishta galat hai, aur yeh seekhna kaam ki baat hai.*

## Hone wali cheezon ki ek list

"Ab," Karan ne kaha, "feeka hissa. Aur sabse zaroori."

Anaya ne socha tha ki woh kya hoga. Woh ek naming niyam tha. Ek product un cheezon ko record karta hai jo hoti hain, events, aur jab tak koi convention na ho, chhe log ek hi cheez ko chhe tareeko se naam denge. Jo convention unhone chuna woh aam tha: object, phir action, lower case mein, bhoot kaal. Poori list *event taxonomy* hai.

| Event | Properties | Woh kis sawaal ka jawaab deta hai |
| --- | --- | --- |
| kit_installed | host project ki bhasha, version | Kitne developers mushkil kadam paar karte hain? |
| message_checked | likhne ka kism, lambai ka band | Kitna traffic hai, aur kis tarah ki likhai mein? |
| detail_found | detail ka kism | Guard asal mein kya pakad raha hai? |
| detail_masked | detail ka kism, kiya gaya action | Woh uske saath kya karta hai? |
| review_requested | wajah | Woh kitni baar anishchit hota hai? |
| restore_clicked | detail ka kism | Kya woh woh chhupa raha hai jo logon ko chahiye? |
| badge_clicked | koi nahi | Kya growth loop ghoomta hai? |

Anaya ne *properties* column ko padha aur paya ki har cell ek kism tha ya ek band ya ek ginti. Koi value nahi thi. Unme se koi bhi ek message, ek number, ek naam ko punarnirmit karne ke liye istemaal nahi kiya ja sakta tha.

"Properties ek event mein byora jodte hain," Karan ne kaha, "taaki tum baad mein nateeje baant sako. Tum unhe utna hi rakhti ho jitna zaroori hai. Aur tum kabhi text, ya kuch bhi personal, unme nahi daalti. Ek property mein nahi. Ek free-text 'notes' field mein nahi jise koi ek din bhar dega."

Pehchaan ko bhi utni hi dekhbhaal chahiye thi. Demonstration page ka ek visitor ek anaam number se shuru karta tha. Jab woh sign up karte, woh number ek account se jod diya jaata, taaki unke pehle ke visits unki history ka hissa ban jaate. Aur kyunki kharidar companies the, har event company ke liye ek account number bhi le jaata tha. "Tumhara buyer teams ki parwaah karta hai, akele developers ki nahi," Karan ne kaha. "Tumhare analysis ko ek team dekhne mein saksham hona chahiye."

Sab ek saajha document mein gaya, *tracking plan*, jo har event, uske properties, woh kab fire hota hai aur uska malik kaun hai, list karta hai. Engineers isse banate hain. Analysts isspe bharosa karte hain. Jis din woh tay hua, Karan ka pehla kaam har event ko khud trigger karna tha aur confirm karna tha ki woh ek baar sahi properties ke saath pahuncha, aur phir banaye gaye accounts ki ginti ko accounts table ki rows se milana. Woh mel khaate the. Yahi saboot tha jo woh chahta tha. "Kharab data bilkul achhe data jaisa chart par dikhta hai," usne kaha. "Tumhein jaanchna padta hai."

## Teen nazariye

Teen nazariye zyadatar un sawaalon ka jawaab dete hain jo koi bhi poochhta hai.

Ek funnel har charan poora karne wale users ka hissa kram mein dikhata hai, aur isliye woh kahan girte hain. Ek *cohort* users ka ek group hai jisne ek hi avadhi mein shuru kiya, saath-saath dekha gaya. Aur ek segment users ka ek tukda hai jo ek property saajha karte hain, jaise woh kis kism ki likhai sambhalte hain, jo dikhata hai ki product kise suit karta hai.

Usne pehli retention table us hafte banayi jis hafte ise banane ke liye kaafi data tha. Har row un teams ka ek cohort tha jinhone ek diye gaye hafte mein shuru kiya tha, aur har cell ne dikhaya ki kitne abhi bhi utne hafte baad kit chala rahe the.

| Cohort | Teams | Hafta 1 | Hafta 2 | Hafta 4 | Hafta 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

"Ise do tareeko se padho," Karan ne kaha. "Ek row ke aar-paar, pehli line pachaas percent par sapaat ho jaati hai. Yeh ek sthayi istemaal ka sujhav hai. Ek column ke neeche, naye cohorts thoda behtar tik rahe hain, jo sujhata hai ki jo badlaav tumne January mein kiye unhone madad ki."

"Kya main iska yakeen karun?"

"*Teams* column dekho." Anaya ne dekha. "Aath teams ke saath, ek team barah points se zyada hai. Tum barah point ke swing ko asar nahi keh sakti. Dono padhne ke liye aur bahut zyada users chahiye usse pehle ki tum bharosa karo. Main table deewar par laga dunga aur ek shabd nahi kahunga."

## Woh test jo woh nahi chala sakti thi

Ek idea tha jise istemaal karne ka woh intezaar kar rahi thi. Naye onboarding mein, kit ek developer ko setup khatam karne se pehle dikha sakta tha ki kya chhupaya jayega ka ek preview. Anaya ko laga ki isse zyada log khatam karenge. Yeh ek parikalpana thi jise woh theek se aazmana chahti thi.

Ek *A/B test* ek badlaav ko users ke ek yaadrichhik aadhe ko dikhata hai aur doosre aadhe se tulna karta hai. Yaadrichhikta hi us vaakya ki ijaazat deta hai *badlaav ne farak paida kiya*. Aur ek design shuru hone se pehle likha jaana chahiye: sawaal, kise baanta gaya, mukhya number, ek guardrail, sabse chhota badlaav jo pakadne layak hai, kitne users chahiye, aur aap kab rukenge.

Us sabse chhote badlaav ka ek naam hai, *minimum detectable effect*, aur yeh baaki sab tay karta hai. Karan ne use ek haan-ya-nahi naap ke liye ek mota niyam diya. Har group mein jitne users chahiye woh lagbhag solah guna dar guna dar ka poorak hain, aur phir us badlaav ke varg se bhaag diya jaata hai jise pakadna kaam ka hai.

"Activation tees percent hai," Anaya ne kaha. "Main jaanna chahti hoon ki kya preview ise chaalees tak le jaata hai."

Usne jod ek card par kiya. Solah, guna 0.30, guna 0.70, bhaag 0.01 (das point ke badlaav ka varg). Yeh har group ke liye 336 aaya. Kul chha sau bahattar.

"Humein mahine mein lagbhag chaalees naye teams milte hain," Karan ne kaha.

Usne agla jod bina poochhe kiya. Ismein dedh saal lagta.

"Yeh imaandaar jawaab hai," usne kaha. "Ek shuruaati company ke paas chaalees accounts hote hain, do hazaar nahi. Woh yeh test nahi chala sakti. Tum yeh kehti ho. Phir tum doosre saboot istemaal karti ho: paanch developers ko ise karte dekho, dhyaan se pehle aur baad ki tulna karo, bade asar dhoondho, aur kaho ki yeh kamzor hai." Woh ruka. "Ek bahut chhota test chalana aur nateeja report karna test na karne se bhi bura hai. Tum shor ko khabar ki tarah report kar rahi hongi."

Usne us hafte paanch developers ke saath nirikshan chalaya. Chaar ne preview ke saath khatam kiya. Un paanch mein se jinhone purana flow istemaal kiya tha, teen ne kiya tha. Yeh saboot nahi tha. Yeh ek sanket tha, aise hi label kiya hua.

## Kyun X ka matlab Y nahi

March mein ek aur chetawani ek sukhad pattern ke roop mein aayi. Jin teams ne anishchit cases ko ek din ke andar review kiya, unke aath hafte baad bhi kit istemaal karte rehne ki sambhavna kahin zyada thi.

"Review unhe rokta hai," Anaya ne kaha, jo chahti thi ki yeh sach ho.

"Shayad," Karan ne kaha. "Ya jo teams review karne ki parwaah karti hain woh wahi hain jo waise bhi rukti. Engaged teams dono karti hain." Sirf ek yaadrichhik test karan dikhata hai. Baaki sab, usne kaha, ek aisa pattern hai jise test karna chahiye. Usne woh vaakya likha jo use istemaal karna tha. *Jo teams X karti hain woh Y karne ki pravritti bhi rakhti hain.* *Kyunki* nahi.

Aur, aakhir mein, usne do cheezein alag rakhin jinhe log aksar jodte hain. Product events record karte hain ki logon ne kya kiya. Models ne kaise behave kiya uske records, unke traces aur samay aur scores, record karte hain ki system ne kya kiya. Usne unhe ek saajha request number se joda, taaki koi bhi ek se doosre mein ja sake aur unhe kabhi ghulta nahi.

## Saath le jaane layak baatein

Ek North Star ko seedhe nahi hilaya ja sakta; woh input metrics ke zariye hilta hai jinka ek naam wali team malik hai, aur agar ek input badhta hai jabki mukhya number nahi, toh rishta galat hai. Ek product jo record karta hai woh ek hi naming niyam follow kare aur ek tracking plan mein likha jaye, properties ke saath jo ek kism ya ek ginti le jaati hain aur kabhi content nahi, aur ek user pehchaan ke saath-saath ek account pehchaan bhi jab kharidar companies hon. Funnels dikhate hain log kahan girte hain, cohorts ek saath shuru hue groups ko follow karte hain, aur ek retention table ko bharosa karne se pehle kaafi teams chahiye. Ek A/B test ko ek minimum detectable effect aur use dhoondhne ke liye kaafi bada sample chahiye, aur ek shuruaati company aksar ek nahi chala sakti aur use yeh kehna chahiye. Data ko maanne se pehle jaancha jaana chahiye. Aur aisa pattern jisme jo log ek kaam karte hain woh doosra bhi karte hain, saboot nahi hai ki ek doosre ka karan hai.
