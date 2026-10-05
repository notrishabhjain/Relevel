---
title: Asli Log, Asli Istemaal
summary: Ek demonstration tab kaam karta hai jab aap use dekh rahe hote hain. Ek product ko tab kaam karna hota hai jab koi nahi dekh raha, un logon ke liye jo aapke kuch nahi lagte. Vasant mein Anaya guard ko ajnabiyon ke liye taiyaar karti hai, unhe imaandari se jodti hai, madad kiye bina unhe dekhti hai, aur jo dekha uske kaaran ek badlaav ship karti hai. Chapter design partners, informed consent, observation sessions, changelogs aur support logs samjhata hai.
course: b6
goals:
  - batana ki ajnabiyon ke product istemaal karne se pehle kya taiyaar hona chahiye, aur ek owner ka naam likhna
  - aise design partners dhoondhna jo prabhavit na hone ke liye aazaad hon, aur likhit informed consent lena
  - ek observation session chalana, aur logon ke kehne ko unke karne se tolna
  - samasyaon ko frequency, severity aur cost se score karna, ek badlaav ek likhi hui ummeed ke saath ship karna, aur changelog tatha support log rakhna
terms:
  - design partner | ek shuruaati user jo ek adhoore product ko istemaal karne aur aapko imaandari se batane par sahmat hota hai ki use kya mila, badle mein kuch nyayochit lekar | design partners
  - informed consent | ek insaan ki sahmati, saaf-saaf bataye jaane ke baad ki kya ikattha hota hai, kahan jaata hai, kya galat ho sakta hai aur kaise waapas ja sakte hain | written consent
  - observation session | ek meeting jisme aap kisi ko ek asli kaam dete hain aur use bina madad kiye karte dekhte hain, har baar wahi cheezein note karte hue | observation sessions
  - changelog | har release mein kya badla uski chhoti public list, users ke liye vyavaharik shabdon mein likhi gayi | release notes
  - support log | madad ke har anurodh ka chalta hua record, uski category aur jis account se aaya uske saath, jo saptahik roop se product ke baare mein saboot ki tarah padha jaata hai | 
---

April ke aakhri Thursday ko, raat ke do bajkar das minute par, Imran Qureshi ke phone ne ek chhote jaanwar ke kuchle jaane jaisi awaaz nikaali. Yeh alert usne khud isi kaam ke liye lagaya tha, aur woh andhere mein ek pal yeh sochkar khush hota raha ki woh kitna achha chal raha hai. Phir woh uth baitha. Alert ne bataya tha ki demonstration page par errors ek tay line paar kar gaye hain. Dhai baje tak use wajah mil gayi, ek certificate jo expire ho gaya tha. Paune teen baje tak usne use theek kar diya, teen baje log mein chaar line likhi, aur woh aise insaan ke santosh ke saath so gaya jiska smoke alarm wahi kar gaya jis kaam ke liye khareeda gaya tha.

Naashte par usne Anaya ko bataya ki "taiyaar" ka matlab yahi hota hai. Cheez bigdi thi, aur use kisi aur se pehle pata chal gaya tha.

## Case: taiyaar, aur kisi ke naam

Anaya ko yeh baat samajhne mein pichhla poora hafta lag gaya tha. Ek demonstration tab kaam karta hai jab koi use dekh raha ho. Ek product ko tab kaam karna hota hai jab koi nahi dekh raha, aur is farq ka bahut bada hissa us cheez ke bahar hota hai jo aapne banayi. Imran ne use ek chhoti list di, aur Anaya ne use ek table mein badal diya, jo saal bhar Imran ki desk ke upar chipka raha.

Table: Product ajnabiyon ke liye kab taiyaar hai
| Kshetra | Taiyaar tab, jab |
| --- | --- |
| Monitoring | Errors ya deri badhne par ek alert kisi insaan tak pahunche |
| Analytics | Tracking plan ke events live product se aa rahe hon |
| Privacy | Ek notice bataye ki kya ikattha hota hai, kyun, aur use mitane ka tareeka kya hai |
| Feedback | User ek click mein samasya report kar sake |
| Rollback | Pichhle version par lautna aazmaya ja chuka ho, sirf socha na gaya ho |
| Cost | Model provider ke paas kharch ki seema tay ho |

Har ek row par bahas hui thi, aur har ek aakhir mein ek dopahar ka kaam nikla. Sirf aakhri par kisi ne bahas nahi ki, kyunki July mein provider ka bill aisi rakam ke saath aaya tha ki Mr. Bhatia ne chai ka cup neeche rakh diya tha.

Har system ka ek owner bhi hota hai, ek naam wala insaan jo bure waqt par kuch tootne par jawaab de. Guard ke liye mahine ka pehla hafta Imran ka tha aur doosra Tanvi ka, aur unke number us page par likhe the jo batata tha ki kharabi kaise report karein. Product ki owner Anaya thi, yaani agar owners ko baar-baar jagana pade, to wajah dhoondhna uska kaam tha.

## Aise log jo sach batayenge

Kit ko sabse pehle aazmane waale ajnabi nahi the. Woh Anaya ki behen ki saheli, do purane colleagues aur uski building ka ek ladka tha jo computers mein achha tha, aur un sabne bahut pyaar se baat ki. "Bahut pyaara hai," saheli ne kaha. "Bahut hoshiyar." Kai din mein Anaya ne dekha ki unmein se kisi ki baat se product mein kuch nahi badla. Dost zyada shishtachaari hote hain, isliye kaam ke nahi hote. Woh banane waale ko wahi sunate hain jo woh sunna chahta hai, aur us cheez ko dobara istemaal nahi karte.

Usne wahi kiya jo woh doosre mahine mein seekh chuki thi. Woh un logon ke paas gayi jinka interview usne vasant mein kiya tha aur unke jaanne waalon ke paas, aur unhe dhoondha jinhein ab yeh samasya thi aur jo isi tarah ka software istemaal karte the. Use chhah teams mili: Kochi ki ek travel company jiski chat passport numbers se bhari thi, Indore ki ek clinic-booking service, Bengaluru ka ek chhota tutoring business aur teen aur. Usne unhe *design partners* kaha. Design partner ek shuruaati user hota hai jo adhoore product ko istemaal karne aur banane waale ko imaandari se batane par raazi hota hai ki use kya mila. Woh abhi customer nahi hota, aur sirf test karne waali bheed bhi nahi hota.

## Unhe pehle kya bataya gaya

Kisi ke kit ko chhune se pehle Anaya ne har ek ko ek akeli page bheji, jise Lakshmi Iyer ne do baar padha aur do jagah sudhaara.

Table: Page mein kya likha tha
| Page ne kaha | Saaf shabdon mein |
| --- | --- |
| Product shuruaati hai aur galat ho sakta hai | Kabhi-kabhi woh koi detail chhod dega jo use chhupani chahiye thi |
| Guard ko theek-theek kya milega | Aur woh kahan process hoga |
| Kya record hoga | Gintiyan aur kisme, kabhi message ka text nahi |
| Partner sab kuch kaise mitwa sakta hai | Bina bahas ke |
| Kuch bhi kisi aur kaam mein istemaal nahi hoga | Aur ek partner ke messages doosre ki madad nahi karenge |
| Partner chhote sample se shuru kare | Aise messages jo unhone khud chune aur taiyaar kiye, live feed nahi |
| Woh kabhi bhi ruk sakte hain | Bina kaaran bataye aur bina jhijhak |

Yahi *informed consent* hai: ek insaan ki sahmati, jo use saaf-saaf batane ke baad mili ho ki kya ikattha hota hai, kahan jaata hai, kya galat ho sakta hai aur kaise waapas ja sakte hain. Sahmati kisi dibbe par click karna nahi thi. Woh ek insaan ka yeh samajhna tha ki woh kis baat par haan keh raha hai, aur yeh jaanna ki woh kabhi bhi ja sakta hai.

Badle mein Anaya ne shuruaati access aur pehle saal ke liye kam daam ka prastav diya. Usne kuch bada dene ka socha, aur Lakshmi ne use roka: agar partners ko zyada diya jaye to unhe lagta hai ki unpar tareef ka qarz hai, aur team ko aise log chahiye jo prabhavit na hone ke liye aazaad hon.

## Haath baandhkar baithna

May ke pehle hafte mein Anaya ne chhah logon ko kit istemaal karte dekha, waise hi jaise January mein paanch developers ko dekha tha, haath peeche baandhkar. *Observation session* wahi hai: dekhne waala kisi ko ek asli kaam deta hai, chup rehta hai aur har baar wahi kuch cheezein likhta hai. Kaam mein kitna samay laga, insaan kahan ruka, usne zor se kya kaha, usne kya anokha aazmaya, aur kaam poora hua ya nahi.

Use yeh lagbhag sharirik roop se takleefdeh laga. Indore ka ek aadmi chalis second tak us setting ko ghoorta raha jo tay karti thi ki kis tarah ki detail chhupayi jaye, saaf dikh raha tha ki use pata nahi woh kya karti hai, aur Anaya ko bolne ki itni tadap thi ki usne apne gaal ka andar ka hissa daanton se dabaa liya.

Hafte ke ant tak use woh baat mil gayi jiska use der se andaaza tha par saboot nahi tha: log jo kehte hain aur jo karte hain woh do alag sources hain, aur aapas mein asehmat hote hain. Kochi ke Joseph ne call par kaha ki guard "bahut aakramak" hai aur bahut kuch chhupa deta hai. Analytics ne dikhaya ki uski team ne teen hafte mein restore button do hi baar dabaya tha. Ek aur partner ne kaha ki use yeh bahut pasand hai, aur usne baarah din mein kit ko sirf ek call kiya tha.

::: key Jab dono alag hon, to vyavahaar par bharosa karein
Karan, jo is ubaau hisse mein uske saath juda tha, ne niyam bataya: pehle vyavahaar par bharosa karo, phir kaaran poochho. Vyavahaar bata deta hai ki sach kya hai. Kaaran aapko poochhna padta hai. Jab Anaya ne Joseph se poochha ki use kyun laga ki yeh bahut zyada chhupata hai, to woh hans pada. "Maine ek baar ek postcode chhupte dekha tha," usne kaha, "aur maan liya ki yeh josheela hai."
:::

## Samasyayein zyada, samay kam

Do hafte ke ant tak uske paas samasyaon ka ek page tha. Kuch machine ki vifalta thi aur kuch ek button jo kisi ko nahi mila. Usne unhe alag-alag list mein rakhne ki aadat roki, kyunki ek galat faisla aur ek uljhi hui screen, dono user ka utna hi bharosa todte hain. Usne har ek ko teen cheezon par score kiya: kitne logon ne use dekha, jab dekha to kitna bura tha, aur use theek karne mein kya lagega.

Table: Samasyayein frequency, severity aur cost se score ki gayi
| Samasya | Kitni baar | Kitni buri | Theek karne ka cost | Kram |
| --- | --- | --- | --- | --- |
| Koi nahi bata sakta ki detail kyun chhupayi gayi | 6 mein se 4 teams | Zyada: bharosa tootta hai | Chhota | 1 |
| Paanch hazaar se zyada messages ki chat ka import fail hota hai | 1 team | Unke liye zyada | Madhyam | 2 |
| Detail ki kismon ke naam bahut lambe | 6 mein se 3 | Kam | Chhota | 3 |
| Kisi doosre chat system ka support chahiye | 2 sambhavit customers | Unhe poori tarah rok deta hai | Bada | Baad mein |

Table dekhna taazgi dene waala tha. Ek cheez jo ek customer ko poori tarah rok de, zaroori nahi ki us cheez se upar ho jo chaar ko chupchaap pareshan kar rahi hai. Frequency aur severity alag disha mein khinchte hain, aur cost tay karta hai ki kisi bhi ka jawaab kitni jaldi diya ja sakta hai.

## Ek badlaav, aur usse kya ummeed thi

Sabse upar ki row kehne mein aasaan thi aur theek se karne mein mushkil. Chhah mein se chaar teams ne kisi na kisi roop mein poochha tha ki detail kyun chhupayi gayi. Guard ko pata tha, aur usne kabhi bataya nahi tha. Anaya ne yojna ek card par likhi, usi roop mein jo Imran ne use sabhi yojnaon ke liye sikhaya tha.

::: example Card
Humne dekha ki chhah mein se chaar teams ne poochha ki detail kyun chhupayi gayi, aur reviewers ne chhupayi gayi details mein se sirf sau mein 58 ko theek maana. Hum ek "yeh kyun chhupaya gaya" link jodenge jo woh teen phrases dikhaye jinse faisla hua. Hum ummeed karte hain ki theek maane gaye ka hissa do hafte mein 65 se upar jayega, bina prati message ka samay badhe. Agar woh nahi hila, to ho sakta hai ki samasya faisle mein ho, samjhane mein nahi, aur hum kuch aur badalne se pehle pachaas vivadit cases haath se padhenge.
:::

Aakhri vaakya pehle likhna, kisi bhi natije se pehle, woh hissa tha jis par Anaya ko sabse zyada garv tha. Iska matlab tha ki agar number nahi hila, to use pehle se pata hoga ki use kya karna hai. Woh 67 tak pahunch gaya.

## Logon ko batana ki kya badla

Badlaav ek Thursday ko ship hua, aur Anaya ne uske baare mein waise hi likha jaise usne apne pasandida products se seekha tha. *Changelog* har release mein kya badla uski chhoti public list hoti hai, jo user ke liye likhi jaati hai, banane waale ke liye nahi.

::: example Changelog ki entry
Naya: "Yeh kyun chhupaya gaya?" Kisi bhi chhupaye gaye detail ke paas chhote sawaal ke nishaan par click karein aur woh teen phrases dekhein jinse faisla hua. Agar woh galat tha, to Restore dabayein, aur humein batayein.
:::

Isme likha tha ki kya naya hai, use kaise istemaal karna hai aur galat chale to kya karna hai. Isme yeh nahi likha tha ki "masking subsystem ki explainability behtar hui". Tanvi ne, jisne proofread kiya, sirf ek shabd kaata aur uski jagah chhota shabd rakha.

Anaya ne us hafte ek aur kaam kiya jiska shipping se koi lena-dena nahi tha. Usne ek *support log* shuru kiya: kisi bhi partner ka madad ka har anurodh ek sheet mein ek category aur ek account ke saath jaata tha. Isme kuch kharcha nahi tha, aur ek mahine baad use samajh aaya ki yeh uska ab tak ka sabse sasta research tha, kyunki users bina poochhe bata rahe the ki unhe kya chahiye. Somwar ko woh aur Karan log ko analytics ke saath padhte the. Jo samasya support log, observation sessions aur numbers, teeno mein ek saath dikhti, woh lagbhag pakka asli hoti. Jo sirf ek mein dikhti, use woh dekhte rehte.

## Saaraansh

Ek demonstration tab kaam karta hai jab koi dekh raha ho. Ek product ko tab kaam karna hota hai jab koi nahi dekh raha, aur uske liye use aise alerts chahiye jo kisi insaan tak pahunchein, live system se aate events, ek privacy notice, kharabi report karne ka ek-click tareeka, aazmaya hua rollback, kharch ki seema aur ek naam wala owner.

- Shuruaati users woh hon jinhein abhi yeh samasya hai aur jo banane waale ko nirash karne ke liye aazaad mehsoos karte hain, jo dost kam hi karte hain. Unhe saaf shabdon mein, likhit, bataya jaye ki kya ikattha hota hai, kahan jaata hai aur kaise chhodna hai, aur badle mein kuch nyayochit diya jaye, kuch bada nahi.
- Observation sessions mein dekhne waala ek asli kaam deta hai aur chup rehta hai, har baar wahi cheezein likhta hai. Jab log jo kehte hain aur jo karte hain woh alag ho, to vyavahaar par bharosa karein aur phir kaaran poochhein.
- Samasyayein is aadhaar par score hoti hain ki kitni baar, kitni buri aur kitni mehngi, machine ki vifalta aur uljhi screen ek hi list mein.
- Ek badlaav apne saboot, apni ummeed aur is yojna ke saath ship hota hai ki agar woh kaam na kare to kya hoga, aur use saaf shabdon mein bataya jaata hai. Madad ka har anurodh rakha jaata hai, kyunki jo samasya support requests, sessions aur numbers mein ek saath dikhe woh asli hoti hai.
