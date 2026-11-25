---
title: Jo Maayne Rakhta Hai Use Ginna
summary: Ab asli log tool use karte hain. Isliye sawaal "kya yeh kaam karta hai?" se badal kar "woh kya karte hain?" ho jaata hai. Privacy tool ko ginna hai, par woh cheez rakhni nahi jo woh chhupata hai. Phir ek chhota hisaab dikhata hai ki ek nayi company woh test kyun nahi chala sakti jo woh chahti hai. Chapter mein event taxonomy, tracking plan, cohort, A/B test aur minimum detectable effect aate hain.
course: b3
goals:
  - ek North Star ko input metrics se jodna, jinka ek named team owner ho
  - ek event taxonomy aur tracking plan likhna jiski properties mein personal content kabhi na aaye
  - funnel, cohort table aur segment padhna, aur bata paana ki table par bharosa karne se pehle kitni teams chahiye
  - A/B test ko kitne users chahiye yeh nikaalna, aur samjhana ki ek pattern cause ka saboot kyun nahi hai
terms:
  - event taxonomy | har us event ki naam likhi shelf jo product record karta hai, ek naming rule ke saath jise sab maanein, jaise object_action, lower case mein aur past tense mein | taxonomy
  - tracking plan | woh shared register jisme har event, uski properties, woh kab fire hota hai aur uska owner likha ho; engineers isse banate hain aur analysts isse maante hain | 
  - cohort | school ka ek batch: woh users jinhone ek hi period mein shuru kiya, aur jinhe saath-saath time ke saath follow kiya jaata hai | cohorts
  - A/B test | do chai ke stall saath-saath: aap badlaav ko users ke ek random aadhe hisse ko dikhate hain aur baaki aadhe se compare karte hain; random baant se hi aap keh paate hain ki badlaav ne farq paida kiya | A/B tests
  - minimum detectable effect | sabse chhota badlaav jise pakadna kaam ka hai; yeh tay karta hai ki test ko kitne users chahiye | MDE
---

Karan project se judne wala pehla analyst tha. Woh February mein aaya. Pehli subah usne Anaya se kaha: "Please bataiye ki aap message text track nahi kar rahi hain." Anaya ko lagbhag bura laga. Bilkul nahi, usne kaha. Karan ne kaha ki yeh achha hai. Use yeh har hafte poochhna padega. Woh shuru ek aise insaan se karna chahta tha jo sahmat ho.

Yeh mazaak tha, aur ek rule bhi. Sochiye ek taala banane wala jo har chaabi ki copy rakh leta hai. Jo privacy tool yeh naap kar apna kaam dekhe ki usne kya chhupaya, aur uske liye wohi record kare jo woh chhupa raha hai, woh ek hafte mein khud ko haraa deta. Yeh chapter measurement ke pehle mahine ke saath chalta hai. Karan ka kaam yeh saabit karna tha ki guard gin sakta hai ki log kya karte hain. Aur woh yeh bhi nahi rakhta ki unhone likha kya.

## Case: bina record kiye naapna

Neeche ke sections chaar cheezein ek-ek karke lete hain. Pehli, main number. Doosri, events ki list jo use khilati hai. Teesri, us list ke views. Chauthi, ek test jo ek nayi company chala hi nahi sakti thi. Yeh us dukaandaar jaisa hai jo gina leta hai ki kitne log andar aaye, bina unke thaile khole.

## Ek number, aur uske neeche ke levers

Spring mein Anaya ne ek sentence chuna tha jo batata tha ki guard kya value deta hai. Uske saath ek number tha: messages chat se is tarah nikalte hain ki unmein kuch personal nahi bachta. Yeh uska North Star tha (woh ek number jo dikhata hai ki product apna kaam kar raha hai). Achha tha, kyunki ise gina ja sakta tha. Lekin roz ke raaste dikhane ke liye woh kaam ka nahi tha.

Karan ne kaha ki North Star ko seedha dhakela nahi ja sakta. Yeh raat ke taare jaisa hai. Aap use hila nahi sakte, par uske sahare raasta tay kar sakte hain. Woh inputs ke zariye hilta hai. Yaani woh cheezein jinhe team is quarter badal sakti hai. Unhone teen likhe. Table mein har ek apne owner ke saath hai. Yeh bhi dikhta hai ki woh North Star se kaise judta hai.

Table: Teen input metrics
| Input | Owner | North Star se link |
| --- | --- | --- |
| Naye integrations ka share jo pehle hafte ka check paas karte hain | Ek named engineer | Jo integration kaam karta hai woh messages saaf karta hai |
| Unsure cases ka share jinhe ek insaan ek din ke andar review karta hai | Ek named support lead | Review kiye gaye cases sahi action par khatam hote hain |
| Quality bar se upar naapi gayi languages ka count | Anaya | Covered languages ke messages sahi tarah saaf hote hain |

Karan ne ek aur sentence jodha. Uske mutabik, isne uski pichhli job bachayi thi. Agar koi input badhe aur North Star nahi, toh link galat hai. Yeh jaanna kaam ki baat hai.

## Jo hota hai uski ek list

Phir Karan ne woh hissa samjhaya jise woh boring kehta tha. Yahi sabse zaroori bhi tha. Ek product jo hota hai use record karta hai. Har ek ko event kehte hain, jaise gate par visitor register ki ek line. Rule na ho, toh chhe log ek hi event ko chhe naam denge.

Team ne ek aam rule chuna. Pehle object likho, phir action. Lower case aur past tense rakho. Poori list *event taxonomy* hai. Ise naam likhi shelves samjhiye, jahan har event ki ek hi jagah hai. Neeche guard ki list hai, har event ke saath woh sawaal jiska woh jawaab deta hai.

Table: Guard ki event taxonomy
| Event | Properties | Kaunsa sawaal ka jawaab |
| --- | --- | --- |
| kit_installed | host project ki language, version | Kitne developers mushkil step paar karte hain? |
| message_checked | likhai ki kisam, length band | Kitna traffic hai, aur kaisi likhai mein? |
| detail_found | detail ki kisam | Guard asal mein kya pakad raha hai? |
| detail_masked | detail ki kisam, liya gaya action | Woh use ke saath kya karta hai? |
| review_requested | wajah | Woh kitni baar unsure hota hai? |
| restore_clicked | detail ki kisam | Kya woh woh cheezein hide kar raha hai jo logon ko chahiye? |
| badge_clicked | koi nahi | Kya growth loop ghoom raha hai? |

Anaya ne properties column ko upar se neeche padha. Har cell ek kisam, ek band ya ek count tha. Koi bhi value nahi thi. Isse koi message, number ya naam dobara nahi banaya ja sakta tha.

Karan ne wajah batayi. Properties event mein detail jodti hain, taaki baad mein results ko baanta ja sake. Sirf utna rakhiye jitna chahiye. Unmein kabhi text ya koi personal cheez mat aane dijiye. Free-text notes field mein bhi nahi. Ek din koi use bhar dega.

::: key Identity ko bhi utni hi saavdhaani chahiye
Demo page par aane wala visitor ek anonymous number se shuru hota tha. Sochiye cloakroom ka token. Jab visitor sign up karta, number ek account se jod diya jaata. Tab uske pehle ke visits uski history ka hissa ban jaate. Buyers companies the, isliye har event ke saath company ka ek account number bhi jaata tha. Karan ne kaha ki buyer ko teams ki parwaah hoti hai, akele developers ki nahi. Isliye analysis ko ek team dikhni chahiye.
:::

Yeh sab ek shared document mein gaya, jise *tracking plan* kehte hain. Yeh poori dukaan ke master register jaisa hai. Isme har event, uski properties, woh kab fire hota hai (bheja jaata hai) aur uska owner hota hai. Engineers isse banate hain. Analysts isse maante hain.

Plan jis din tay hua, Karan ne ek check kiya. Usne har event ko khud trigger kiya aur dekha ki woh ek hi baar sahi properties ke saath pahunchta hai. Phir usne bane hue accounts ka count accounts table ki rows se milaya. Dono mel khaaye. Yehi uska saboot tha. Karan ne kaha ki kharab data chart par bilkul achhe data jaisa dikhta hai. Isliye check karna padta hai.

## Teen views

Teen views zyadatar sawaalon ka jawaab de dete hain. Yeh ek hi school ko teen khidkiyon se dekhne jaisa hai.

Funnel dikhata hai ki kitne users order mein har step poora karte hain. Yeh dikhata hai ki woh kahan chhoot jaate hain, jaise baalti se paani rishta hai. *Cohort* school ka ek batch hai: users ka woh group jisne ek hi period mein shuru kiya, aur jise saath-saath follow kiya jaata hai. Segment users ka ek hissa hai jinki koi property same ho, jaise woh kis kisam ki likhai sambhalte hain. Yeh dikhata hai ki product kise suit karta hai.

Karan ne pehli retention table us hafte banayi jis hafte kaafi data ho gaya. Har row un teams ka ek cohort thi jinhone ek hafte mein shuru kiya tha. Har cell mein woh share tha jo itne hafte baad bhi kit chala raha tha.

Table: Pehli retention table
| Cohort | Teams | Week 1 | Week 2 | Week 4 | Week 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

Usne Anaya se ise do tareekon se padhne ko kaha. Row ke aar-paar, pehli line 50 percent par chapti ho gayi. Yeh tikne wale use ka ishara hai. Column ke upar se neeche, naye cohorts thoda behtar tike. Yeh ishara hai ki January ke badlaav se madad mili.

Anaya ne poocha ki kya woh ise maanta hai. Karan ne Teams column ki taraf ishara kiya. 8 teams ke saath, ek team 12 points se zyada hai. 12 points ka jhoola effect nahi hota. Dono readings par bharosa karne se pehle kaafi zyada users chahiye. Usne suggest kiya ki table ko deewar par laga dijiye aur uske baare mein kuch mat kahiye.

## Woh test jo woh chala nahi sakti thi

Anaya ek idea use karne ka intezaar kar rahi thi. Naye onboarding mein kit developer ko dikha sakta tha ki kya hide hoga. Yeh woh setup khatam hone se pehle dikhata. Use laga ki isse zyada developers setup poora karenge. Woh is idea ko theek se test karna chahti thi.

Sahi tool *A/B test* hai. Yeh do chai ke stall saath-saath chalane jaisa hai, jismein ek par ek chhota badlaav hai. Aap badlaav ko users ke random aadhe hisse ko dikhate hain. Phir unhe baaki aadhe se compare karte hain. Random baant se hi aap keh paate hain ki "badlaav ne farq paida kiya". Test shuru hone se pehle ek design likhiye. Usmein sawaal aur kise baanta ja raha hai, yeh hota hai. Main number aur ek guardrail (ek number jo bigadna nahi chahiye) hota hai. Sabse chhota badlaav jo pakadna hai, kitne users chahiye aur kab rukna hai, yeh bhi hota hai.

Sabse chhota badlaav jo pakadne layak hai, woh *minimum detectable effect* hai. Baaki sab isi se tay hota hai. Ise sabse chhoti dent samjhiye jo aap apne jaal mein pakadna chahte hain. Karan ne use haan-ya-na wale measure ke liye ek mota rule diya. 16 guna rate guna uska complement lijiye (ek minus rate). Use pakadne layak badlaav ke square se baant dijiye. Yeh har group ke liye chahiye users deta hai.

::: example Anaya ka sample-size hisaab
Activation 30 percent hai. Woh jaanna chahti thi ki kya preview use 40 tak le jaata hai. 16 guna 0.30 guna 0.70, ko 0.01 se baantiye (10 points ka badlaav, square kiya hua). Har group mein 336 aata hai. Yaani kul 672. Company mein mahine mein lagbhag 40 nayi teams aati hain. Is raftaar se test mein lagbhag derh saal lagta.
:::

Karan ne kaha ki yehi imaandaar jawaab tha. Ek early company ke paas 40 accounts hote hain, 2,000 nahi. Woh yeh test nahi chala sakti. Woh yeh bolti hai, aur phir doosra saboot use karti hai. Woh paanch developers ko feature use karte dekhti hai.

Woh before aur after ko saavdhaani se compare karti hai. Woh bade effects dhoondhti hai. Woh saaf kehti hai ki saboot kamzor hai. Bahut chhota test, jiska result report kiya jaye, bina test se bhi bura hai. Woh shor ko khabar bana deta hai.

Us hafte Anaya ne paanch developers ko dekha. Chaar ne preview ke saath khatam kiya. Purane flow wale paanch mein se teen ne kiya tha. Yeh saboot nahi tha. Usne ise ek signal ke taur par label kiya.

## X ka matlab Y kyun nahi

March mein ek aur chetavni aayi, ek achhe lagne wale pattern ke roop mein. Jin teams ne unsure cases ek din ke andar review kiye, woh 8 hafte baad bhi kit use karti rahi hone ke kahin zyada chance mein thi. Anaya maanna chahti thi ki review ne unhe roka.

Karan ne kaha ki shayad. Ya shayad jo teams review ki parwaah karti hain, woh waise bhi tik jaati. Engaged teams dono karti hain. Sochiye jo log chhatri lekar chalte hain aur aasmaan bhi dekhte hain. Chhatri baarish nahi laati. Cause sirf ek randomised test dikhata hai. Baaki sab ek pattern hai jise test karna chahiye. Usne use woh sentence diya jo use bolna chahiye: jo teams X karti hain, woh Y bhi karti hain. "Kyunki" kabhi nahi.

Usne do records ko bhi alag rakha jinhe log aksar jod dete hain. Product events record karte hain ki logon ne kya kiya. Models ne kaise behave kiya, iske records record karte hain ki system ne kya kiya. Yeh traces, timings aur scores hain. Usne unhe ek shared request number se joda. Koi bhi ek se doosre par ja sakta tha, bina unhe mila diye.

## Saar

North Star ko seedha hilaya nahi ja sakta. Woh input metrics se hilta hai jinka ek named team owner ho. Agar koi input badhe aur main number nahi, toh link galat hai.

- Product ko events ek hi naming rule se record karne chahiye, aur tracking plan mein likhne chahiye. Properties mein kisam ya count jaata hai, content kabhi nahi. Jab buyers companies hon, toh plan mein user identity ke saath account identity bhi hoti hai.
- Funnels dikhate hain ki log kahan chhoot jaate hain. Cohorts un groups ko follow karte hain jinhone saath shuru kiya. Retention table par bharosa karne se pehle kaafi teams chahiye.
- A/B test ko ek minimum detectable effect aur itna bada sample chahiye jo use pakad sake. Ek early company aksar ek nahi chala sakti, aur use yeh kehna chahiye.
- Data ko maanne se pehle check kijiye. Aisa pattern jisme log ek kaam karte hain aur doosra bhi, yeh saboot nahi ki ek doosre ka cause hai.

Ginne ke liye tools chahiye. Agla chapter un tools ko dekhta hai jinke saath ek team asal mein kaam karti hai.
