---
title: Asli Log, Asli Use
summary: Demo tab tak chalta hai jab tak aap dekh rahe hote hain. Product ko tab chalna hota hai jab koi nahi dekh raha, un logon ke liye jinka aap par koi hisaab nahi. Spring mein Anaya guard ko ajnabiyon ke liye taiyaar karti hai, unhe imaandaari se judti hai, bina madad kiye dekhti hai, aur jo dekha uski wajah se ek change ship karti hai. Chapter mein design partner, informed consent, observation session, changelog aur support log aate hain.
course: b6
goals:
  - batana ki ajnabiyon ke product use karne se pehle kya taiyaar hona chahiye, aur ek owner ka naam likhna
  - aise design partners judna jo impress na hone ke liye azaad hon, aur likhit informed consent lena
  - ek observation session chalana, aur logon ki kahi baat ko unke kiye se tolna
  - problems ko frequency, severity aur cost se score karna, ek stated expectation ke saath ek change ship karna, aur ek changelog aur ek support log rakhna
terms:
  - design partner | ek early user jo ek adhoore product ko use karne aur aapko imaandaari se bataane par raazi ho ki use kya mila, kisi seedhi, fair cheez ke badle mein | design partners
  - informed consent | kisi insaan ki haan, jo use saaf-saaf bataane ke baad di gayi ho ki kya collect hota hai, kahan jaata hai, kya galat ho sakta hai aur wapas kaise liya jaye | written consent
  - observation session | ek meeting jisme aap kisi ko ek asli kaam dete hain aur bina madad kiye use karte dekhte hain, har baar wahi cheezein note karte hue | observation sessions
  - changelog | har release mein kya badla, iski chhoti public list, jo users ke liye practical shabdon mein likhi gayi ho | release notes
  - support log | madad ki har request ka ek chalta record, uski category aur jis account se aayi uske saath, jise har hafte product ke baare mein saboot ki tarah padha jaata hai | 
---

April ke aakhri Thursday ko, raat ke 2:10 par, Imran Qureshi ke phone se aisi awaaz aayi jaise kisi chhote jaanwar par paer pad gaya ho. Alert usne khud isi kaam ke liye set kiya tha. Ek pal ke liye woh andhere mein leta raha aur sochta raha ki woh kitna achha kaam kar raha hai. Phir woh uth baitha.

Alert ne kaha ki demo page par errors ek line paar kar gaye hain. 2:30 tak use cause mil gaya: ek certificate expire ho gaya tha. 2:45 tak usne use theek kar diya. 3 baje usne log mein chaar lines likhi aur wapas so gaya, us insaan ki tasalli ke saath jiska smoke alarm wahi kar gaya jiske liye khareeda gaya tha.

Naashte par usne Anaya ko bataya ki "ready" ka matlab yehi hota hai. Kuch galat hua tha, aur use kisi aur se pehle pata chal gaya tha.

## Case: ready, aur kisi ke naam

Anaya ko yeh baat samajhne mein pichhle hafte ka zyadatar hissa lag gaya tha. Demo tab chalta hai jab koi dekh raha ho. Product ko tab chalna hota hai jab koi nahi dekh raha, aur jo farq banata hai uska bada hissa us cheez ke bahar hota hai jo banayi gayi thi.

Imran ne use ek chhoti list di, aur Anaya ne use table bana diya. Woh saal ke baaki hisse mein uski desk ke upar chipki rahi.

Table: Jab product ajnabiyon ke liye ready ho
| Area | Ready kab hai |
| --- | --- |
| Monitoring | Jab errors ya delays badhein, toh alert kisi insaan tak pahunche |
| Analytics | Tracking plan ke events live product se aa rahe hon |
| Privacy | Ek notice batata ho ki kya collect hota hai, kyun, aur use delete kaise karwaya jaye |
| Feedback | User ek click mein problem report kar sake |
| Rollback | Pichhle version par wapas jaana try kiya gaya ho, sirf plan na kiya gaya ho |
| Cost | Model provider ke saath ek spending limit set ho |

Har row par ek jhagda hua tha, aur har ek ek dopahar ka kaam nikla. Jis par kisi ne behes nahi ki, woh aakhri thi. July mein provider ka bill ek aise figure ke saath aaya tha jisne Mr. Bhatia ke haath se chai ka cup neeche rakhwa diya tha.

Har system ko ek owner bhi chahiye: ek named insaan jo kharab waqt par kuch toote toh jawaab de. Guard ke liye har mahine ka pehla hafta Imran leta aur doosra Tanvi. Unke numbers us page par the jo batata tha ki fault kaise report karein. Product Anaya ka tha. Isliye agar owners ko zyada baar jagana pada, toh wajah dhoondhna uska kaam tha.

## Sach bolne wale log dhoondhna

Kit ko pehli baar try karne wale ajnabi nahi the. Woh Anaya ki behen ki dost, do purane colleagues aur uski building ka ek ladka the jo computers mein achha tha. Sabne is par pyaar se baat ki. "Yeh pyaara hai," uski dost ne kaha. "Bahut smart."

Kuch dinon mein Anaya ne dekha ki unmein se kisi ke kehne par product mein kuch nahi badla. Dost itne tameezdaar hote hain ki kaam ke nahi hote. Woh banane wale ko woh batate hain jo banane wala sunna chahta hai, aur phir woh cheez dobara use nahi karte.

Isliye usne woh kiya jo usne doosre mahine mein seekha tha. Woh un logon ke paas gayi jinke interviews usne spring mein kiye the, aur unke jaan-pehchaan walon ke paas. Usne woh logon ko dhoondha jinke paas problem abhi thi aur jo usi kisam ka software use karte the. Use chhe teams mili: Kochi ki ek travel company jiski chat passport numbers se bhari thi, Indore ka ek clinic-booking service, Bengaluru ka ek chhota tutoring business, aur teen aur.

Unhe usne *design partners* kaha. Design partner ek early user hai jo ek adhoore product ko use karne aur banane wale ko imaandaari se bataane par raazi hota hai ki use kya mila. Woh abhi customers nahi hain, aur woh sirf ek test audience bhi nahi hain.

## Usne unhe pehle kya bataya

Unmein se kisi ke kit ko chhune se pehle Anaya ne har ek ko ek page bheja. Lakshmi Iyer ne use do baar padha tha aur do jagah theek kiya tha. Table batati hai ki page mein kya tha, aur har line ka saaf shabdon mein kya matlab tha.

Table: Page mein kya likha tha
| Usme likha tha | Saaf shabdon mein |
| --- | --- |
| Product abhi early hai aur galat ho sakta hai | Woh kabhi-kabhi aisi detail chhod dega jo use hide karni chahiye thi |
| Guard ko theek-theek kya milega | Aur woh kahan process hoga |
| Kya record hoga | Counts aur kisam, message ka text kabhi nahi |
| Partner sab kuch delete kaise karwa sakta hai | Bina behes ke |
| Ki kuch bhi kisi aur kaam ke liye use nahi hoga | Aur ki kisi partner ke messages kisi doosre partner ki madad nahi karenge |
| Ki partner ko ek chhote sample se shuru karna chahiye | Woh messages jo unhone khud chune aur taiyaar kiye, live feed nahi |
| Ki woh kabhi bhi ruk sakte hain | Bina wajah bataye aur bina asahajta ke |

Yehi *informed consent* hai: kisi insaan ki haan, jo use saaf-saaf bataane ke baad di gayi ho ki kya collect hota hai, kahan jaata hai, kya galat ho sakta hai aur wapas kaise liya jaye. Yeh kisi box par click nahi tha. Yeh ek insaan tha jo samajh raha tha ki woh kis par haan keh raha hai, aur jise bataya gaya tha ki woh jaa sakta hai.

Badle mein Anaya ki offer early access aur pehle saal ke liye ek kam price thi. Usne kuch bada sochna chaha, aur Lakshmi ne use roka. Agar partners ko zyada paisa diya jaye, toh unhe lagta hai ki unpar taareef ka udhaar hai. Team ko aise log chahiye the jo impress na hone ke liye azaad hon.

## Haath dabaa kar baithna

May ke pehle hafte mein Anaya ne chhe logon ko kit use karte dekha, jaise usne January mein paanch developers ko dekha tha, peeche haath baandhe. Ise *observation session* kehte hain. Dekhne wala kisi ko ek asli kaam deta hai, chup rehta hai, aur har baar wahi kuch cheezein likhta hai: kaam mein kitna time laga, insaan kahan ruka, usne zor se kya kaha, usne kya ajeeb try kiya, aur kya usne khatam kiya.

Use yeh lagbhag jismani dard jaisa laga. Indore ka ek aadmi chaalis second tak us setting ko ghoorta raha jo tay karti thi ki kaun si kisam ki detail hide ho. Saaf tha ki use pata nahi tha ki woh kya karti hai. Anaya bolna itna chahti thi ki usne gaal ka andar ka hissa kaat liya.

Hafte ke ant tak use woh cheez mil gayi jiska use bahut pehle se shak tha lekin jo woh saabit nahi kar sakti thi. Log jo kehte hain aur jo karte hain, woh do alag sources hain, aur woh ek doosre se sahmat nahi hote. Kochi ke Joseph ne call par kaha ki guard "bahut aggressive" hai aur bahut saari cheezein hide karta hai. Analytics dikha rahe the ki uski team ne teen hafton mein restore button do baar dabaya tha. Ek aur partner ne kaha ki use yeh bahut pasand hai, aur usne baarah dinon mein kit ko ek call ki thi.

::: key Jab dono alag hon, toh behaviour par bharosa kijiye
Karan, jo uske saath boring hisse ke liye jud gaya tha, ne rule is tarah rakha: pehle behaviour par bharosa kijiye, phir poochiye kyun. Behaviour aapko batata hai ki sach kya hai. Wajah aapko poochni padti hai. Jab Anaya ne Joseph se poocha ki use kyun laga ki woh bahut zyada hide karta hai, toh woh hans pada. "Mujhe lagta hai maine ek baar ek postcode hide hota dekha tha," usne kaha, "aur maan liya ki yeh josh mein hai."
:::

## Samay se zyada problems

Do hafte ke ant tak uske paas problems ka ek page tha. Kuch machine ki failures thi. Kuch ek button tha jise koi dhoondh nahi paaya. Usne unhe alag-alag lists mein rakhne ki aadat ko roka, kyunki ek galat judgement aur ek confusing screen user ke bharose ko bilkul ek jitna nuksaan pahunchaate hain.

Usne har problem ko teen cheezon par score kiya: kitne logon ko mili, jab mili toh kitni buri thi, aur ise theek karne mein kitna cost aayega.

Table: Frequency, severity aur cost se score ki gayi problems
| Problem | Kitni baar | Kitni buri | Theek karne ka cost | Order |
| --- | --- | --- | --- | --- |
| Koi nahi bata sakta ki detail kyun hide hui | 6 mein se 4 teams | High: woh bharosa karna band kar dete hain | Chhota | 1 |
| 5,000 se zyada messages wali chats ka import fail hota hai | 1 team | Unke liye high | Medium | 2 |
| Detail ki kisam ke naam bahut lambe | 6 mein se 3 | Low | Chhota | 3 |
| Kisi aur chat system ka support chahiye | 2 prospects | Unhe poori tarah rok deta hai | Bada | Baad mein |

Table ko dekhna taza kar dene wala tha. Jo cheez ek customer ko poori tarah rok deti hai, woh apne aap us cheez se upar nahi hoti jo chupke se chaar ko pareshan karti hai. Frequency aur severity alag disha mein kheenchte hain, aur cost tay karta hai ki dono mein se kisi ka jawaab kitni jaldi diya ja sakta hai.

## Ek change, aur usse kya ummeed thi

Sabse upar wali row kehni aasaan thi aur sahi tarah karni mushkil. Chhe mein se chaar teams ne, kisi na kisi roop mein, poocha tha ki detail kyun hide hui. Guard ko wajah pata thi aur usne kabhi bataya nahi tha. Anaya ne plan ek card par likha, us form mein jo Imran ne use sabhi plans ke liye sikhaya tha.

::: example Card
Humne dekha ki chhe mein se chaar teams ne poocha ki detail kyun hide hui, aur reviewers ne hide hui details mein se sirf 100 mein 58 ko sahi mark kiya. Hum ek "yeh kyun hide hua" link jodenge jo woh teen phrases dikhata hai jinhone decide kiya. Hum ummeed karte hain ki do hafte ke andar sahi mark hone wala share 65 se upar jaayega, bina har message ke extra time ke. Agar woh nahi hilta, toh dikkat shayad explanation mein nahi decision mein hai, aur kuch aur badalne se pehle hum 50 disputed cases haath se padhenge.
:::

Anaya ko aakhri sentence par sabse zyada garv tha, aur is par ki usne use kisi result se pehle likha tha. Matlab agar number nahi hilta, toh use pehle se pata tha ki woh kya karegi. Number 67 tak badh gaya.

## Logon ko batana ki kya badla

Change ek Thursday ko ship hua. Anaya ne uspar woh seekh kar likha jo usne un products se seekha tha jo use sabse pasand the. Yeh *changelog* hai: har release mein kya badla, iski chhoti public list, jo user ke liye likhi gayi ho, banane wale ke liye nahi.

::: example Changelog entry
Naya: "Yeh kyun hide hua?" Kisi bhi masked detail ke paas chhote question mark par click kijiye aur woh teen phrases dekhiye jinse decision hua. Agar woh galat tha, toh Restore dabaiye, aur hume bataiye.
:::

Entry ne bataya ki kya naya hai, use kaise karein, aur agar woh galat chale toh kya karein. Usne yeh nahi likha ki "masking subsystem ki explainability improve ki gayi". Tanvi ne, jisne use proofread kiya, sirf ek word kaata aur uski jagah chhota word daal diya.

Anaya ne us hafte ek aur kaam bhi kiya jiska ship karne se koi lena-dena nahi tha. Usne ek *support log* shuru kiya. Kisi bhi partner ki madad ki har request ek sheet mein gayi, ek category aur ek account ke saath. Isme kuch cost nahi hua. Ek mahine baad use samajh aaya ki yeh uski ab tak ki sabse sasti research thi, kyunki users bina poochhe bata rahe the ki unhe kya chahiye.

Mondays ko woh aur Karan log ko analytics ke bagal mein rakhkar padhte the. Jo dikkat support log mein, observation sessions mein aur numbers mein, teeno mein ek saath dikhti, woh lagbhag pakka asli thi. Jo sirf ek mein dikhti, use woh nazar mein rakhti thi.

## Saar

Demo tab chalta hai jab koi dekh raha ho. Product ko tab chalna hota hai jab koi nahi dekhta. Uske liye use alerts chahiye jo kisi insaan tak pahunchen, live system se aate events, ek privacy notice, fault report karne ka ek-click tareeka, ek rollback jo try ho chuka ho, ek spending limit aur ek named owner.

- Early users woh log hone chahiye jinke paas abhi problem hai aur jo banane wale ko niraash karne mein azaad mehsoos karte hain, jo dost shayad hi karte hain. Unhe saaf-saaf, likhit mein bataya jaye ki kya collect hota hai, kahan jaata hai aur kaise nikla jaye. Unhe kuch seedha diya jaye, kuch bada nahi.
- Observation sessions mein dekhne wala ek asli kaam deta hai aur chup rehta hai, har baar wahi cheezein note karta hai. Jab log jo kehte hain aur jo karte hain wo alag ho, toh behaviour par bharosa kijiye, phir poochiye kyun.
- Problems ko is hisaab se score kijiye ki kitni baar, kitni buri aur kitni mehngi, machine failures aur confusing screens ko ek hi list mein rakhkar.
- Ek change apne saboot, apne expected effect aur is plan ke saath ship hota hai ki agar woh kaam na kare toh kya karna hai, aur use saaf shabdon mein announce kiya jaata hai. Madad ki har request rakhi jaati hai, kyunki jo problem support requests, sessions aur numbers, teeno mein dikhe, woh asli hai.

Aakhri chapter product se hat kar us insaan par aata hai jisne use banaya, aur is kaam par.
