---
title: Apne Cases Par Model Chunna
summary: Ek founder us model par switch karna chahta hai jo pichhle hafte ke chart mein sabse upar tha. Team wahi karti hai jo aap gaadi ke saath karte hain, teen ko apni sadkon par chalakar dekhti hai, aur phir kehna seekhti hai ki har model jis kamre mein jaata hai usme theek-theek kya hai.
course: ch9m ch10c
terms:
  - leaderboard | models ki unke scores ke aadhar par ek prakashit ranking, kisi aur ke tests par | leaderboards
  - model selection card | ek chhota, versioned page jo kaam, quality ka lakshya, data, raftaar aur kharche ki seemayein, aazmaye gaye vikalp, saboot aur fallback record karta hai, taaki ek reviewer theek-theek dekh sake ki ek model kyun chuna gaya | selection card
  - routing | har request ko us sabse sasti model ke paas bhejna jo use sambhal sake, aur sirf mushkil wali ko ek mazboot aur mehnge ke paas | 
  - provenance | is baat ka record ki koi cheez kahan se aayi, taaki ek daava ya faisla uske source, version aur use paida karne wale code tak dhoondha ja sake | 
---

"Woh chart mein sabse upar tha," Mr. Bhatia ne kaha, "toh maine socha humein switch karna chahiye."

September ka chautha Monday tha, aur woh apne laptop ko ek bar chart par khole aaya tha jisme ek bar baaki se kaafi lamba tha. Anaya ne bar dekha. Woh ek model ka tha jo pichhle hafte jaari hua tha. Caption ke anusaar usne tests ki ek list par shaandaar pradarshan kiya tha jinke baare mein usne kabhi suna bhi nahi tha.

"Unhone use kis par test kiya?" usne kaha.

"Reasoning. Ganit. Coding. Bahut saari cheezein."

"Kya unhone Hinglish naamon par test kiya?"

Woh hans pada, bina buri tarah. "Nahi. Mujhe nahi lagta unhone kiya."

Ek *leaderboard* dikhata hai ki ek model ne kisi aur ke kaam par kaisa kiya. Woh bilkul imaandaar nateeja ho sakta hai aur aapke baare mein kuch nahi batata. Yeh waisa hi hai jaise ek gaadi isliye kharidna ki usne puraskar jeeta. Puraskar nahi batata ki woh aapke parivaar mein fit hoti hai ya nahi, aapki sadkon par chalti hai ya nahi, ya chalane mein kitna kharcha hai. Aap use chalakar dekhte. Bahut kam teams ek model ko chalakar dekhti hain.

"Switch karne se pehle," Anaya ne kaha, us awaaz mein jo usne bilkul isi pal ke liye practise ki thi, "humare kaun se cases par woh behtar hai, aur kis raftaar aur kharche par?"

Mr. Bhatia ne ek bhauh uthayi, aur phir, uski raahat ke liye, muskuraya. "Dikhao."

## Ek saath alag cheezein

Imran ko sawaal ka intezaar tha. Ek model ek aayam mein behtar ya bura nahi hota. Woh kai mein ek saath alag hote hain: woh kaam kitna achha kar sakte hain, kitni tezi se jawaab dete hain, kitna text le sakte hain, functions kitni bharose se bulate hain aur unka kharcha kitna hai. Jo pehle mein jeetta hai woh agle teen mein haar sakta hai. In mein se kaun sa sabse zyada maayne rakhta hai yeh aapke istemaal ke baare mein ek tathya hai, model ke baare mein nahi.

Isliye kaam, usne kaha, yeh tay karna tha ki *aapke* istemaal ko kya chahiye aur phir naapna. Usne runner kholi, jo intezaar kar raha tha.

Kaam finder ka tha: ek message padho, personal details ki list banao. Quality ki seema, jo May mein specification mein likhi gayi: fixed-shape numbers mein se sau mein kam se kam attaanve, aur naam jitne ho sakein. Data ka niyam, jo July mein likha gaya: koi asli cheez building ke bahar nahi bheji ja sakti. Raftaar ki seema: aamtaur par ek second ke ek tihaayi se kam. Kharche ki seema: kul mila kar prati message saath paise se kam.

## Teen ko chalakar dekhna

Benchmark saath cases ka ek set tha, aur Anaya ne ek weekend use banane mein bitaya tha. Yeh ek *benchmark* tha, cases ka ek tay set jisme apekshit jawaab hote hain, ek hi kaam par vikalpon ki nishpaksh tulna karne ke liye. Yeh answer key nahi tha; yeh usme se liya gaya tha, aur jaan-boojh kar un tareeko se mushkil banaya gaya tha jo maayne rakhte the. Bees English messages. Bees Hinglish mein. Das Devanagari mein. Aur das aise kism ke jinhe ek bholi test kabhi shaamil nahi karegi: aise messages jinka koi jawaab nahi tha, aise jo dwividha wale the, aur aise jinme ek injected nirdesh tha.

Yeh aakhri category thi jis par use sabse zyada garv tha. Ek benchmark ek naapne ka upkaran hai, aur aasaan cases se bana upkaran aasaan nishkarsh deta hai. Ek product manager ka kaam score ko chunauti dene se pehle test set ko chunauti dena hai. Usne khud se poochha ki kya uska benchmark woh failure pakad legi jisse use sabse zyada darr tha, aur usne pakka kiya ki pakad legi.

Unhone teen models ko isme chalaya, har baar sirf model badalte hue, wahi nirdesh aur wahi cases ke saath. Agar aap model aur prompt dono saath badlein aur score badh jaye, toh aap nahi kah sakte ki kisne madad ki.

| | Model A | Model B | Model C |
| --- | --- | --- | --- |
| Yeh kya hai | Chhota, open-weight, andar chalta hai | Madhyam, open-weight, andar chalta hai | Bada, closed, bahar hosted |
| Kul mila | 82% | 91% | 95% |
| Hinglish mein mila | 71% | 86% | 92% |
| Aam samay | 0.15 second | 0.4 second | 2.1 second |
| Prati call kharcha | lagbhag 3 paise | lagbhag 9 paise | lagbhag 40 paise |

"Kya mujhe Model C chalane ki ijaazat bhi hai?" Anaya ne kaha.

"Banaye hue vaakyon par, haan," Imran ne kaha. "Benchmark mein koi asli customer nahi hai. Isiliye humne ise gadhe hue text se banaya. Hum kisi bhi model ko, kahin bhi, yeh jaanne ke liye aazma sakte hain ki woh kaise behave karta hai. Niyam asli wale ke baare mein hai."

Usne table dekhi. Usne koi vijeta nahi diya, jisse woh kaam ki thi. Model C kaam mein sabse achha tha aur istemaal nahi kiya ja sakta tha, kyunki woh bahar tha aur dheema. Model A tez aur sasta tha aur akela kaafi achha nahi. Model B beech mein tha.

## Sabse sasta jo kaam kare

Numbers ne jo tareeka sujhaya woh woh tha jo team pehle hi istemaal kar chuki thi. *Routing* har request ko us sabse sasti model ke paas bhejta hai jo use sambhal sake, aur sirf mushkil wali ko ek mazboot aur mehnge ke paas. Model A har message padhega, tezi se aur sasti mein, aur unme se zyadatar ko tay kar dega. Model B sirf anishchit kuch ko dekhega.

Usne use benchmark par aazmaya. Combination ne kul milakar sau mein tirannave, Hinglish mein untaasi dhoondhe, 0.17 second ke aam samay mein, prati message lagbhag chaar paise ke kharche par. Model C jitna achha nahi. Specification poori karne ke liye kaafi achha. Aur ijaazat shuda.

Phir usne woh kiya jo Imran ne use karna sikhaya tha, yaani faisle ko kaagaz ka ek tukda banana. *Model selection card* ek chhota, versioned page hai jo kaam, quality ka lakshya, data, raftaar aur kharche ki seemayein, aazmaye gaye vikalp, saboot aur fallback record karta hai. Yeh isliye hai ki ek reviewer theek-theek dekh sake ki ek model kyun chuna gaya. Uska ek page mein aa gaya. Neeche usne fallback ki line bhari: *Sirf niyam wala safe mode, jaisa specification mein hai.*

"Ek aur test," Imran ne kaha. "Table dhako. Faisla karne ki koshish karo."

Usne use dhaka. Usne koshish ki. Saamne kuch na hone par usne khud ko us model ki taraf haath badhate paya jo chart mein sabse upar tha, bilkul wahi jo usne Mr. Bhatia ko na karne ko kaha tha. Numbers ke bina, faisla lagbhag tees second mein raay ban gaya.

"Isiliye yeh ek card par hai," Imran ne kaha.

## Folder mein kya jaata hai

Dopahar ka doosra aadha ek alag sawaal ka tha, aur woh ek upama se shuru hua jo Meenakshi ne use ek Sunday ko di thi.

"Kalpana karo," unhone kaha tha, "ki tumhare paas ek shaandaar naya saathi hai jise kal ka kuch yaad nahi rehta. Har subah tum use ek folder thamate ho. Sthayi nirdesh. Kuch udaharan. Aaj ki file jo use chahiye. Pichhle hafte ka ek note. Tum folder mein jo daalte ho wahi tay karta hai ki woh kitna achha karta hai."

Model chun liya gaya, agla sawaal tha ki folder mein theek-theek kya hai. Anaya yeh idea context ke naam se pehle mil chuki thi. Ab usne dekha ki kaam kitna usme tha.

Pehle, nirdesh, jinhe woh requests ke paragraph ki tarah maan rahi thi. Unhe application aur model ke beech ek anubandh ke roop mein sochna behtar hai: bhumika, kaam, seemayein, udaharan, output ki shape, aur jab woh jawaab na de sake toh kya karna hai. Aage ka code inme se har ek par nirbhar hai. Isliye nirdeshon ko woh milna chahiye tha jo har doosre interface ko milta hai, aur usne diya: ek version number, badlaavon ka record, aur kisi bhi edit se pehle aur baad mein wahi das cases.

Doosre, folder ke har hisse ka size kitna hai, taaki jab budget tight ho toh cheezein hatane ka ek kram ho. Zyadatar log history pehle hatate hain aur saboot aakhir mein. Agar aapka alag hai, toh wajah design hai.

Teesre, woh jisne use hairaan kiya. "Memory ek feature nahi hai," Imran ne kaha. "Yeh ek architecture hai." Kam se kam teen alag stores hain jo memory kehlate hain, aur unhe ghulna nahi chahiye. *Session history* woh hai jo is chat mein kaha gaya. Ek *user profile* woh hai jo company is insaan ke baare mein jaanti hai. *Task state* woh hai jahan yeh khaas kaam pahunch chuka hai. Har ek ka ek malik hai, ek retention avadhi, kaun padh sakta hai uske niyam, aur use mitane ka tareeka.

Usne teeno ko board par banaya aur ek-ek karke cells bhare. Har ek ke liye: usme kya hai; uska malik kaun hai; woh kitni der rakha jaata hai; kaun dekh sakta hai; use kaise mitayein. Pehle mein, history mein, woh *default roop se kya kabhi nahi daalna chahiye* wale cell par ruki, aur ek shabd likha. *Pehchaan ke numbers.* Guard pehle hi andar aate waqt history saaf karta tha. Ab woh store ke design ka hissa tha.

## Yeh kahan se aaya

Aakhri cheez shaant thi. Jab guard koi detail chhupata, toh woh likhta ki kyun. Har record message ka number, guard ke us hisse ko jisne faisla kiya, aur us hisse ka version le jaata. Baad mein koi bhi use dekhne wala faisle ko uske source tak, jis code ne use banaya aur jo nirdesh laagu the, dhoondh sakta tha. Yeh *provenance* hai: is baat ka record ki koi cheez kahan se aayi.

Yeh use ummeed se zyada maayne rakhta tha. Ek citation tabhi kaam ka hai jab woh padhne wale ko saboot tak pahunchne de. Jis faisle ko dohraya nahi ja sakta uska bachaav nahi kiya ja sakta. September mein, jab Lakshmi ne poochha ki August ke ek Tuesday ko ek khaas naam kyun chhupaya gaya tha, Anaya ko jawaab chaalees second mein mil gaya. Usne yeh zikr nahi kiya ki yeh pehli baar tha jab kisi ne poochha.

## Saath le jaane layak baatein

Ek leaderboard dikhata hai ki ek model ne kisi aur ke kaam par kaisa kiya. Models kai tareeko se ek saath alag hote hain, isliye kaam ki tulna aapka apna benchmark hai, un cases aur failures se bana jo aapke liye maayne rakhte hain, category breakdowns aur kuch jaan-boojh kar mushkil cases ke saath, runs ke beech sirf model badalta hua. Routing har request ko us sabse sasti model ke paas bhejta hai jo use sambhal sake, mehnga wala mushkil cases ke liye rakha jaata hai. Faisla ek model selection card par hona chahiye, kyunki saboot ke bina woh kuch second mein raay mein ghul jaata hai. Har model ko kya dikhta hai woh apne aap mein ek design hai: nirdeshon ko ek versioned anubandh ki tarah, hatane ke kram wala ek budget, aur memory ko kam se kam teen alag stores ki tarah samajhna, har ek ka ek malik, ek retention aur mitane ka tareeka. Aur har faisle ko apna provenance rakhna chahiye, taaki use uske code aur saboot tak dhoondha ja sake jisne use paida kiya.
