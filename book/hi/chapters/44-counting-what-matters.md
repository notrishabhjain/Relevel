---
title: Jo Maayne Rakhta Hai Use Ginna
summary: Jab asli log tool use karne lagte hain, toh sawaal "kya yeh kaam karta hai?" se badal kar "woh kya karte hain?" ho jaata hai. Ek privacy product ko iska jawaab bina us cheez ko record kiye dena hota hai jise chhupane ke liye woh bana hai. Phir sample-size ka ek hisaab dikhata hai ki ek jawaan company woh test kyun nahi chala sakti jo woh chahti hai. Chapter mein event taxonomy, tracking plan, cohort, A/B test aur minimum detectable effect aate hain.
course: b3
goals:
  - ek North Star ko input metrics se jodna, jinka ek named team owner ho
  - ek event taxonomy aur tracking plan likhna jiski properties mein personal content kabhi na aaye
  - funnel, cohort table aur segment padhna, aur bata paana ki table par bharosa karne se pehle kitni teams chahiye
  - A/B test ko kitna sample chahiye yeh nikaalna, aur samjhana ki ek pattern cause ka saboot kyun nahi hai
terms:
  - event taxonomy | un events ki list jo product record karta hai, ek naming rule ke saath jise sab follow karein, jaise object_action, lower case mein aur past tense mein | taxonomy
  - tracking plan | woh shared document jisme har event, uski properties, woh kab fire hota hai aur uska owner likha ho; engineers isse banate hain aur analysts isse maante hain | 
  - cohort | users ka ek group jisne ek hi period mein shuru kiya, aur jise saath-saath time ke saath follow kiya jaata hai | cohorts
  - A/B test | kisi badlaav ko users ke ek random aadhe hisse ko dikhana aur unhe baaki aadhe se compare karna; random karna hi aapko yeh kehne deta hai ki badlaav ne farq paida kiya | A/B tests
  - minimum detectable effect | sabse chhota badlaav jise pakadna kaam ka hai; yeh tay karta hai ki test ko kitne users chahiye | MDE
---

Karan, project se judne wala pehla analyst, February mein aaya. Apne pehle din ki subah Anaya se usne sabse pehle yeh kaha: "Please bataiye ki aap message text track nahi kar rahi hain." Anaya ko lagbhag bura laga. Bilkul nahi, usne kaha. Karan ne kaha ki yeh achha hai. Use yeh baat har hafte poochhni padegi, aur woh shuru ek aise insaan se karna chahta tha jo sahmat ho.

Yeh mazaak tha, aur ek rule bhi. Jo privacy tool apna kaam yeh dekh kar naapta ho ki usne kya hide kiya, aur uske liye wohi record kare jo woh chhupa raha hai, woh ek hafte mein khud ko haraa deta. Yeh chapter measurement ke pehle mahine ke saath chalta hai. Karan ka kaam zyadatar yeh saabit karna tha ki guard yeh gin sakta hai ki log kya karte hain, bina yeh rakhe ki unhone likha kya.

## Case: bina record kiye naapna

Neeche ke sections chaar cheezein ek-ek karke lete hain: main number, uska ghar banane wali events ki list, us list ke views, aur ek test jo ek jawaan company chala hi nahi sakti thi.

## Ek number, aur uske neeche ke levers

Spring mein Anaya ne ek sentence chuna tha jo batata tha ki guard kya value deta hai, aur uske saath ek number: messages chat se is tarah nikalte hain ki unmein kuch personal nahi bachta. Yeh uska North Star tha. Achha tha, kyunki ise gina ja sakta tha. Lekin roz ke raaste dikhane ke liye woh kaam ka nahi tha.

Karan ne kaha ki North Star ko seedha hilaya nahi ja sakta. Woh inputs ke zariye hilta hai, yaani woh cheezein jinhe team is quarter badal sakti hai. Unhone teen likhe. Table mein har ek apne owner ke saath hai, aur dikhata hai ki woh North Star se kaise judta hai.

Table: Teen input metrics
| Input | Owner | North Star se link |
| --- | --- | --- |
| Naye integrations ka share jo pehle hafte ka check paas karte hain | Ek named engineer | Jo integration kaam karta hai woh messages saaf karta hai |
| Unsure cases ka share jinhe ek insaan ek din ke andar review karta hai | Ek named support lead | Review kiye gaye cases sahi action par khatam hote hain |
| Quality bar se upar naapi gayi languages ka count | Anaya | Covered languages ke messages sahi tarah saaf hote hain |

Karan ne woh sentence jodha jisne, uske mutabik, uski pichhli job bachayi thi: agar koi input badhe aur North Star nahi, toh link galat hai, aur yeh jaanna ek kaam ki baat hai.

## Jo hota hai uski ek list

Phir Karan ne woh hissa samjhaya jise woh boring kehta tha, aur jo sabse zaroori tha. Ek product jo hota hai use record karta hai. Inhe events kehte hain. Jab tak koi convention na ho, chhe log ek hi event ko chhe tareeke se naam denge.

Team ne jo convention chuni, woh aam thi: pehle object, phir action, lower case mein aur past tense mein. Poori list *event taxonomy* hai. Neeche guard ki hai, har event ke saath woh sawaal jiska woh jawaab deta hai.

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

Anaya ne properties column ko upar se neeche padha aur dekha ki har cell ek kisam, ek band ya ek count tha. Koi bhi value nahi thi. Isse koi message, number ya naam dobara nahi banaya ja sakta tha.

Karan ne wajah batayi. Properties ek event mein detail jodti hain, taaki baad mein results ko baanta ja sake. Unhe sirf utna rakhiye jitna chahiye. Aur unmein kabhi text ya koi personal cheez mat aane dijiye, na property mein, na kisi free-text notes field mein jise ek din koi bhar dega.

::: key Identity ko bhi utni hi saavdhaani chahiye
Demo page par aane wale visitor ko shuru mein ek anonymous number milta tha. Jab woh sign up karta, toh woh number ek account se jod diya jaata, taaki uske pehle ke visits uski history ka hissa ban jaayein. Aur kyunki buyers companies the, har event ke saath company ka ek account number bhi jaata tha. Karan ne dhyaan dilaya ki buyer ko teams ki parwaah hoti hai, akele developers ki nahi, isliye analysis ko ek team dikhni chahiye.
:::

Yeh sab ek shared document mein gaya, jise *tracking plan* kehte hain. Isme har event, uski properties, woh kab fire hota hai aur uska owner hota hai. Engineers isse banate hain, aur analysts isse maante hain.

Plan jis din tay hua, Karan ne sabse pehle khud har event ko trigger kiya aur check kiya ki woh ek hi baar sahi properties ke saath pahunchta hai. Phir usne bane hue accounts ka count accounts table ki rows se milaya. Dono mel khaaye, jo uska saboot tha. Karan ne kaha ki kharab data chart par bilkul achhe data jaisa dikhta hai, isliye check karna padta hai.

## Teen views

Teen views zyadatar sawaalon ka jawaab de dete hain. Ek funnel dikhata hai ki kitne users order mein har step poora karte hain, aur isliye kahan woh chhoot jaate hain. *Cohort* users ka woh group hai jisne ek hi period mein shuru kiya, aur jise saath-saath follow kiya jaata hai. Segment users ka ek hissa hai jinki koi property same ho, jaise woh kis kisam ki likhai sambhalte hain. Yeh dikhata hai ki product kise suit karta hai.

Karan ne pehli retention table us hafte banayi jis hafte ise banane layak data ho gaya. Har row un teams ka ek cohort thi jinhone ek diye hue hafte mein shuru kiya tha. Har cell mein woh share tha jo itne hafte baad bhi kit chala raha tha.

Table: Pehli retention table
| Cohort | Teams | Week 1 | Week 2 | Week 4 | Week 8 |
| --- | --- | --- | --- | --- | --- |
| 5 Feb | 8 | 75% | 63% | 50% | 50% |
| 12 Feb | 11 | 73% | 64% | 55% | |
| 19 Feb | 9 | 78% | 67% | | |

Usne Anaya se ise do tareekon se padhne ko kaha. Row ke aar-paar, pehli line 50 percent par chapti ho gayi, jo ek tikne wale use ka signal hai. Column ke upar se neeche, naye cohorts thoda behtar tike, jo signal hai ki January mein kiye gaye badlaav se madad mili.

Anaya ne poocha ki kya woh ise maanta hai. Karan ne Teams column ki taraf ishara kiya. 8 teams ke saath, ek team 12 points se zyada hai. 12 points ke jhoole ko effect nahi kaha ja sakta, aur dono readings ko bharose layak banne se pehle kaafi zyada users chahiye. Usne suggest kiya ki table ko deewar par laga dijiye aur uske baare mein kuch mat kahiye.

## Woh test jo woh chala nahi sakti thi

Ek idea tha jiske use karne ka Anaya intezaar kar rahi thi. Naye onboarding mein kit developer ko setup khatam hone se pehle dikha sakta tha ki kya hide hoga. Use laga ki isse zyada developers khatam karenge, aur woh is idea ko theek se test karna chahti thi.

Sahi tool *A/B test* hai. Yeh badlaav ko users ke random aadhe hisse ko dikhata hai aur unhe baaki aadhe se compare karta hai. Random karna hi aapko "badlaav ne farq paida kiya" kehne deta hai. Test shuru hone se pehle ek design likhna padta hai. Usmein sawaal, kise baanta ja raha hai, main number, ek guardrail, sabse chhota badlaav jo pakadne layak hai, kitne users chahiye aur kab rukna hai, yeh sab hota hai.

Sabse chhota badlaav jo pakadne layak hai, woh *minimum detectable effect* hai, aur baaki sab isi se tay hota hai. Karan ne use haan-ya-na wale measure ke liye ek mota rule diya. Har group mein chahiye users lagbhag 16 guna rate guna uska complement, jisko pakadne layak badlaav ke square se baanta jaye.

::: example Anaya ka sample-size hisaab
Activation 30 percent hai, aur woh jaanna chahti thi ki kya preview use 40 tak le jaata hai. 16 guna 0.30 guna 0.70, ko 0.01 se baantiye (10 points ka badlaav, square kiya hua), toh har group mein 336 aata hai, yaani kul 672. Company mein mahine mein lagbhag 40 nayi teams aati hain. Is raftaar se test mein lagbhag derh saal lagta.
:::

Karan ne kaha ki yehi imaandaar jawaab tha. Ek early company ke paas 40 accounts hote hain, 2,000 nahi, aur woh yeh test nahi chala sakti. Woh yeh bolti hai, aur phir doosra saboot use karti hai. Woh paanch developers ko feature use karte dekhti hai. Woh before aur after ko saavdhaani se compare karti hai. Woh bade effects dhoondhti hai, aur saaf kehti hai ki saboot kamzor hai. Bahut chhota test, jiska result report kiya jaye, bina test se bhi bura hai, kyunki woh shor ko khabar bana deta hai.

Anaya ne us hafte paanch developers ke saath observation chalaya. Chaar ne preview ke saath khatam kiya. Purane flow wale paanch mein se teen ne kiya tha. Yeh saboot nahi tha, aur usne ise ek signal ke taur par label kiya.

## X ka matlab Y kyun nahi

March mein ek aur chetavni aayi, ek achhe lagne wale pattern ke roop mein. Jin teams ne unsure cases ek din ke andar review kiye, woh 8 hafte baad bhi kit use karti rahi hone ke kahin zyada chance mein thi. Anaya maanna chahti thi ki review ne unhe roka.

Karan ne kaha ki shayad. Ya shayad yeh ho ki jo teams review ki parwaah karti hain, woh waise bhi tik jaati, kyunki engaged teams dono karti hain. Cause sirf ek randomised test dikhata hai. Baaki sab ek pattern hai jise test karna chahiye. Usne use woh sentence diya jo use bolna chahiye: jo teams X karti hain, woh Y bhi karti hain. "Kyunki" kabhi nahi.

Usne do records ko bhi alag rakha jinhe log aksar jod dete hain. Product events record karte hain ki logon ne kya kiya. Models ne kaise behave kiya, iske records, yaani traces, timings aur scores, record karte hain ki system ne kya kiya. Usne unhe ek shared request number se joda, taaki koi bhi ek se doosre par ja sake bina unhe mila diye.

## Saar

North Star ko seedha hilaya nahi ja sakta. Woh input metrics se hilta hai jinka ek named team owner ho. Agar koi input badhe aur main number nahi, toh link galat hai.

- Jo product record karta hai, woh ek hi naming rule follow kare aur ek tracking plan mein likha ho. Properties mein kisam ya count jaata hai, content kabhi nahi. Jab buyers companies hon, toh plan mein user identity ke saath account identity bhi hoti hai.
- Funnels dikhate hain ki log kahan chhoot jaate hain, cohorts un groups ko follow karte hain jinhone saath shuru kiya, aur retention table par bharosa karne se pehle kaafi teams chahiye.
- A/B test ko ek minimum detectable effect aur itna bada sample chahiye jo use pakad sake. Ek early company aksar ek nahi chala sakti, aur use yeh kehna chahiye.
- Data ko maanne se pehle check kijiye. Aisa pattern jisme log ek kaam karte hain aur doosra bhi, yeh saboot nahi ki ek doosre ka cause hai.

Ginne ke liye tools chahiye. Agla chapter un tools ko dekhta hai jinke saath ek team asal mein kaam karti hai.
