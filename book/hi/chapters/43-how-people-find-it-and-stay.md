---
title: Log Ise Kaise Dhoondhte Hain Aur Kyun Rukte Hain
summary: Jo tool koi dhoondhta nahi woh kisi ki raksha nahi karta. Paanch developers ko ek README diya jaata hai aur kuch nahi, ek stopwatch dikhata hai ki woh kahan chhod dete hain, aur ek spelling checker product manager ko batata hai ki value ka pehla pal kahan aana chahiye. Chapter AARRR, activation, time-to-value, Fogg behaviour model, product-led growth, growth loops, network effects, virality aur dark patterns samjhata hai.
course: b2
goals:
  - AARRR ke paanch stages batana aur har ek ko ek ginne laayak event dena
  - activation moment dhoondhna aur time-to-value naapna, phir value ko mehnat se aage laana
  - Fogg behaviour model laagu karna: prompt, ability aur motivation ko ulte kram mein jaanchna
  - virality ko network effect se alag karna, customer tak ka raasta chunna, aur dark patterns se inkaar karna
terms:
  - AARRR | growth ke paanch charan, har ek ko ek ginti yogya event diya gaya: acquisition, activation, retention, referral aur revenue | 
  - activation moment | woh pehli baar jab ek user ko woh value milti hai jiska product waada karta hai; uske pehle ka sab kuch user ke liye kharcha hai | 
  - time-to-value | ek naye user ko activation moment tak pahunchne mein kitna samay lagta hai, sign-up se naapa gaya | 
  - Fogg behaviour model | yeh idea ki ek vyavahaar tab hota hai jab motivation, kshamata aur ek prompt ek hi pal par milte hain; agar woh nahi ho raha, toh unhe ulte kram mein jaancho | 
  - product-led growth | users ko khud sign up karne aur value paane dekar customers jeetna, kuch ke upgrade karne ke saath; yeh tab fit hota hai jab value minuton mein dikhe aur keemat kam ho | PLG
  - growth loop | ek chakra jisme ek user ke kaam agle user ko laate hain, taaki output wapas input mein jaaye | growth loops
  - network effect | product ka sabke liye behtar hona jaise zyada log use istemaal karte hain, jo users dwara doosre users ko laane se alag hai | network effects
  - virality | users ka doosre users ko laana | viral
  - dark pattern | aisa design jo users ko unke apne hit ke khilaaf kaam karne ke liye bahkata hai, jaise pehle se tick kiya hua box, jhoothi kami ya chhupa hua cancellation | dark patterns
---

January ke teesre hafte mein paanch developers ek table ke ek taraf ek kataar mein baithe the, har ek ek laptop par, har ek ke chehre par un logon jaisi halki apradhi nazar jinhe ek prayog mein hissa lene ko kaha gaya ho aur jinhe pata nahi ki unhe kis cheez par naapa ja raha hai. Anaya ne unhe kaagaz ka ek page diya tha: README, developer kit ke nirdeshon ka pehla page, aur kuch nahi. Koi demonstration nahi, koi call nahi, koi madad nahi. Table par ek stopwatch rakhi thi. Usne kaha tha: ise ek chhote chat program mein jodo aur ek message saaf karo, aur jab ho jaaye mujhe batao; main madad nahi karungi. Phir woh khidki ke paas haath peechhe baandhe khadi ho gayi thi, kyunki unhe sthir rakhne ka yahi ek tareeka tha.

Kit live tha aur Mr. Menon ki company ne ek trial sign kiya tha. Us pal mein jo maayne rakhta tha woh yeh tha ki kya koi aur ise istemaal kar sakta hai. Yeh chapter batata hai ki stopwatch ne kya dikhaya aur usne seekha ki log ek product ko kaise dhoondhte hain aur uske saath kaise bane rehte hain.

## Case: paanch developers aur ek stopwatch

Imran Qureshi ne use chetavni di thi ki use kya seekhna padega, ek vaakya mein jo use pasand tha: agar woh tike nahi, toh aur sign-ups ka matlab sirf logon ko aur tezi se khona hai.

## Ek funnel aur uski seemayein

Growth ke paanch stages hain jinke liye ek yaad rakhne laayak chhota naam hai, *AARRR*: acquisition, activation, retention, referral aur revenue. Har ek mein pehla kaam ek aisa event chunna hai jise gina ja sake.

Table: Paanch stages aur guard ka har ek ke liye event
| Stage | Sawaal | Guard ka event |
| --- | --- | --- |
| Acquisition | Kya woh pahunche? | Ek developer demo page kholta hai aur ek message paste karta hai |
| Activation | Kya unhe value mili? | Kit unke apne project ke andar ek message saaf karta hai |
| Retention | Kya woh wapas aaye? | Woh chaar hafte baad bhi chal raha hai aur messages saaf kar raha hai |
| Referral | Kya woh doosron ko laaye? | Ek saathi ek shared link ke baad doosri company mein demo page kholta hai |
| Revenue | Kya unhone paisa diya? | Woh trial se ek plan par jaate hain |

Anaya jaanti thi ki tasveer ek saralikaran hai. Woh ek seedhi rekha sujhati hai, jabki asli log shared links se aate hain aur mahino baad lautte hain. Woh team ko funnel ke upar se theek karna shuru karne ka nyauta bhi deti hai. Aam taur par jo stage tay karta hai ki product kaam karta hai ya nahi woh retention hai, aur funnel use chautha rakhta hai.

## Value ka pehla pal

Us subah Anaya ko jis naap ki sabse zyada parwaah thi woh woh tha jo tay karta hai ki koi kabhi baaki stages tak pahunchta hai ya nahi. *Activation moment* woh pehla pal hai jab ek user ko woh value milti hai jiska product vaada karta hai. Guard ke liye woh ek developer ka apna message, jisme ek Aadhaar number tha, doosri taraf se number ke bina nikalte dekhna tha. Us pal se pehle ka sab kuch user par kharcha hai: us se pehle ki mehnat jab tak kuch achha hua nahi. Use pahunchne mein jitna samay lagta hai woh *time-to-value* hai, us pal se naapa jab woh shuru karte hain.

Stopwatch ne use samay diya, aur usne unhe aate hue likh liya.

Table: Paancho developers kahan tak pahunche
| Kadam | Kitne developers ne poora kiya | Median samay |
| --- | --- | --- |
| README kholna | 5 mein se 5 | 1 minute |
| Account banana aur key paana | 5 mein se 4 | 7 minute |
| Kit install karna | 5 mein se 4 | 11 minute |
| Pehla message saaf karna | 5 mein se 3 | 24 minute |

Ek developer account par ruk gaya. Doosra chauthe kadam par kho gaya. Teen value ke pal tak pahunche, median par chaubees minute ke baad. Jo pehli rukawat par chala gaya tha usne ek chhota note likha tha, jo Anaya ne unke jaane ke baad padha: "Main bhi yahin chhod deta." Imran ne, uske kandhe ke upar se dekhte hue, kaha ki log mushkil hisse par nahi chhodte. Woh usse pehle chhodte hain.

Upaay use agle kuch dinon mein sujha. Agar value ka pehla pal account se pehle aa jaaye toh? Demonstration page kisi developer ko apna ek message paste karne aur use saaf hote dekhne de sakta tha, bina kuch sign kiye. Activation ka pal mushkil kadam se aage aa jaata, aur jab tak unse email maanga jaata, woh pehle hi dekh chuke hote ki yeh kaam karta hai.

## Raat ke khane par ek teardown

Us hafte Anaya ne woh kiya jo woh teen mahine se taal rahi thi: usne ek aise product ko khol kar dekha jisne yeh samasya hal ki thi. Usne woh chuna jise Farah lagaataar istemaal karti thi, ek spelling aur writing assistant jo woh jo kuch bhi type kar rahi hoti uske andar baitha rehta. Unhone ise stage-dar-stage dekha, Farah ke sofa par uske laptop ko beech mein rakhkar, yeh note karte hue ki kya hua aur kya copy kiya ja sakta hai.

Table: Ek writing assistant ka teardown
| Stage | Kya hua |
| --- | --- |
| Acquisition | Logon ne uske sujhaav un tools mein dekhe jo woh pehle se istemaal karte the, aur ek muft plan ne ise phailaya |
| Activation | Uske apne likhe mein pehla underline kiya sujhaav, kuch second mein |
| Retention | Woh wahin rehta tha jahan log pehle se likhte hain, isliye koi nayi aadat nahi banani thi |
| Revenue | Zyada vikasit sujhaav ek paid plan ke peechhe the |

Farah ne poochha ki Anaya kya copy karegi. "Value ka pal," usne dheere se kaha. Woh user ke apne kaam mein hota hai, ek alag page par nahi aur kisi setup ke baad nahi. Kit ki value, usne samjha, developer ke apne chat program mein thi. Demonstration page uski jagah khada tha, aur ek achha vikalp tha, par asli activation tab hota jab kit code mein hota. Maksad pehle aur doosre ke beech ke raaste ko chhota karna tha.

## Koi kaam karne kab lagta hai

Retention ke liye Anaya ek model ki taraf mudi jo Dr. Meenakshi Rao ne vyavhaar ke adhyayan se bataya tha. Ek insaan kuch tab karta hai jab teen cheezein ek hi pal milti hain: woh chahta hai, woh kar sakta hai, aur kuch use prompt karta hai. Yeh *Fogg behaviour model* hai, aur jab koi vyavhaar nahi ho raha, toh uska niyam hai ki teeno ko ulte kram mein jaancho. Ek gayab prompt sabse sasta theek hota hai. Phir ability. Aakhir mein motivation, jise hilaana sabse mushkil hai.

Ek compliance buyer ke liye prompt dekhna aasaan tha: Monday ka ek email jisme ek line ho, jaise "Is hafte guard ne 87,000 messages mein 1,204 details chhupayin. Do review ke liye flag hui." Use kholne mein koi mehnat nahi thi aur woh buyer ko yaad dilata ki uske paas yeh tool kyun hai. Ek developer ke liye prompt woh sabse achha README tha jo unhone kabhi padha ho, aur ability yeh ki kitna kam karna baaki tha.

Team har hafte ke naye users ke liye retention curve bhi dekhti thi. Jo rekha girkar chapti ho jaati hai uska matlab hai ki kisi ne ek sthayi istemaal paaya. Jo rekha shunya tak girti hai uska matlab hai ki nahi paaya.

## Ek customer kaise pahunchta hai

Anaya ne woh teen raaste banaye jinse ek customer kisi product ke baare mein sunne se uske liye paisa dene tak ja sakta hai.

Table: Ek paying customer tak teen raaste
| Raasta | Kaise kaam karta hai | Kab theek baithta hai |
| --- | --- | --- |
| Product-led growth | Log sign up karte hain aur apne aap value paate hain, aur kuch upgrade karte hain | Value kuch minute mein dikhti hai aur keemat kam hai |
| Sales-led | Ek insaan demonstration aur ek contract chalata hai | Deal bada hai ya security review zaroori hai |
| Beech wala | Log pehle product apnaate hain aur jab unki team badhti hai tab ek salesperson aata hai | Aisa product jise ek insaan aazma sakta hai par ek team ko manzoor karna padta hai |

Guard beech mein tha. Ek akela developer demonstration ko akela aazma sakta tha. Ek poore chat system ko jodne mein woh security lead aata tha jise Mr. Menon "the Wall" kehte the, aur wahi, usne dekha, woh waqt tha jab ek insaan upyogi hota.

## Ek badge, aur ek line jo woh paar nahi karegi

Aakhri baat ek chakra thi. *Growth loop* ek chakra hai jisme ek user ke kaam agle ko laate hain, taaki output wapas input mein jaaye. Anaya ne chat window ke neeche ek chhote nishaan ki kalpana ki, "Protected by Bharat Privacy Guard", ek link ke saath. Ek customer ka customer use dekhta, aur ek aur developer link par ja sakta tha.

Woh do shabdon ke saath saavdhaan thi. Users ka doosre users ko laana *virality* hai. Ek product ka sab ke liye behtar hona jaise-jaise zyada log use istemaal karte hain *network effect* hai. Bahut se products mein pehla hota hai aur doosra nahi, aur use shak tha ki uska ek aisa hi tha. Positioning tay karti thi ki kaun sa loop kaam kar sakta hai: badge tabhi maayne rakhta tha kyunki woh un companies ke liye guard thi jo Bharat mein customers se baat karti hain, aur ek company jo saavdhaan dikhna chahti thi use nishaan lagakar khush hoti.

Phir usne hashiye mein ek niyam likha, usi haath mein jisme "kam hona, theek hona nahi hai" likha tha.

::: watch Dark patterns baahar hain
*Dark pattern* ek aisi design hai jo user ko apne hi hit ke khilaaf kaam karne par dhokhe se majboor karti hai: pehle se tick kiya hua box, banaya hua kami ka dava, ek cancel button jise koi nahi dhoondh paata. Aisi designs ek quarter ke liye ek number badha sakti hain. Woh us bharose ko bhi tod deti hain jis par poora product tika hai. Anaya ne Imran se kaha ki customer badge ko bina poochhe band kar sakta hai. Usne kaha ki isse kuch visibility jaayegi. "Haan," usne kaha. "Hum ek privacy tool hain. Hume woh nahi hona chahiye jo bahar nikalne ka raasta chhupaye."
:::

## Saaraansh

Growth ke paanch stages ginne laayak hain: acquisition, activation, retention, referral aur revenue, aur jo aam taur par tay karta hai ki product kaam karta hai ya nahi woh chautha hai.

- Activation moment woh pehla pal hai jab user ko vaada ki gayi value milti hai. Use jitna jaldi ho sake aana chahiye, kyunki us se pehle ka sab kuch user par kharcha hai. Time-to-value raaste ko naapta hai, aur us pal ke liye sabse achhi jagah user ka apna kaam hai.
- Ek vyavhaar tab hota hai jab motivation, ability aur ek prompt milte hain. Jab woh nahi ho raha, toh teeno ko ulte kram mein jaancho.
- Customers khud, ek salesperson ke zariye, ya dono se aa sakte hain, aur sahi raasta is par nirbhar hai ki value kitni jaldi dikhti hai aur deal kitna bada hai.
- Growth loop users ko laa sakta hai, par virality network effect nahi hai. Aisi design jo logon ko dhokha deti hai, dark pattern, ek number badha sakti hai aur us bharose ko tod deti hai jis par retention nirbhar hai.
