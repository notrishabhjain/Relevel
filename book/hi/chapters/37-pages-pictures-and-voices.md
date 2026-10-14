---
title: Pages, Tasveerein Aur Awaazein
summary: Railway timetable ko word-by-word zor se padh dijiye, phir bhi kisi ko nahi pata chalta ki train kab chhootti hai. Team aakhir mein photographs aur voice notes sambhalti hai. Woh woh stage dhoondhti hai jahan matlab pehli baar galat hota hai, aur aisa test banati hai jo sunne ki galti ko sochne ki galti se alag pehchaan sake. Chapter mein multimodal systems, speech-to-text, voice pipelines aur speaker attribution aate hain.
course: ch15mm
goals:
  - samjhana ki pages, tasveerein aur awaaz lene wala system unhe text ki tarah kyun nahi dekh sakta
  - tasveer mein detail dhoondhna aur use mitana alag-alag rakhna, taaki mitane par koi bahas na ho sake
  - voice pipeline ko stage-by-stage batana, kahan har stage matlab badal sakta hai, aur time kahan jaata hai
  - aisa test banana jo har tarah ke input ko kai levels par score kare, taaki dikhe ki kaun sa stage toota
terms:
  - multimodal | sirf text nahi, balki pages, tasveerein, tables aur speech bhi lene ke kaabil; isse badal jaata hai ki evidence kise kehte hain aur use wapas kaise trace karte hain | 
  - speech-to-text | woh software jo record ki hui speech ko likhe hue words mein badalta hai; yeh kisi bhi voice system ka pehla stage hai aur pehli jagah jahan matlab kho sakta hai | ASR
  - voice pipeline | alag-alag stages ki woh chain jisse voice system guzarta hai, awaaz capture karne se lekar us par action lene tak; har stage delay jodta hai aur har ek matlab badal sakta hai | voice pipelines
  - speaker attribution | recording mein yeh pata lagana ki kisne kaun se words kahe; yeh technical lagta hai, lekin privacy decision ki tarah behave karta hai | 
---

October ke doosre hafte mein Farah Sheikh ne ek voice note do baar chalaya, aur doosri baar usne kisi ki taraf nahi dekha. Pilot ke shuruaati numbers tik gaye the, aur Pune ke sweeps single figures mein rahe. Lakshmi Iyer ne kaha tha ki woh khush hain, usi lahje mein jo woh un baaton ke liye rakhti thi jo woh dohrana nahi chahti. Isi se voice note aur zyada bechain karne wala lag raha tha.

Woh lagbhag nau second ka tha. Kolhapur ki ek mahila ka, jo phone ko mooh se thoda zyada door pakad kar bol rahi thi.

"Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do."

Farah ne kaha, is hafte aise chaar aaye the. April mein usne voice notes ko Won't list mein rakha tha, aur sahi kiya tha. Lekin woh aa phir bhi rahe the, aur customers ko pata nahi tha ki woh Won't mein hain.

## Case: shabdon mein bola gaya number

Anaya ne bola hua number pehchaan liya. Usne June mein use answer key mein ek alag row ki tarah daala tha. Digits dhoondhne wala rule us sentence mein koi digit nahi pata jahan digits words mein hain. Use pata tha ki yeh din aayega, aur umeed thi ki thoda der se aayega.

## Timetable ko zor se padhna

Imran ne ek cheez se shuru kiya. Railway timetable ki photo kheenchiye, usne kaha, aur use phone par kisi dost ko padh kar sunaiye. Sirf words, order mein. Dost har station sunta hai, har time sunta hai, phir bhi use nahi pata ki train kab chhootti hai. Matlab columns mein tha, aur padhne wala seedha unke upar se guzar gaya.

Yeh kisi bhi **multimodal** cheez ka pehla sabak hai. Is shabd ka matlab hai woh system jo sirf plain text se zyada leta hai: pages, tasveerein, tables aur speech. PDF text file nahi hai. Woh ek page hai, jisme layout hai, columns, headings, images, aur woh jaankari jo aap jo dekhte hain uske peeche chhupi hai. Agar aap sirf words nikaalte hain, toh bina awaaz kiye aap zyadatar structure hata dete hain. Isliye aise kaam ke liye bane system ko badalna padta hai ki woh evidence kise kehta hai, aur use wapas kaise trace karta hai.

Team iska pehla aadha hissa garmiyon mein kar chuki thi, passbook ki photograph aur uski flatten hui table ke saath. Naya kaam do hisson mein tha. Pehle, guard ko woh kaabil banana ki tasveer mein jo mile, us par action le sake. Phir use sunna sikhana.

## Tasveer

Tasveer aasaan kaam thi, aur Anaya ko ussi se zyada dar tha. Rule text ki ek line mein characters chhupa sakta hai. Photograph mein unhe kaise chhupayein, yeh saaf nahi tha.

Jawaab tha do kaam alag karna. Ek capable model ko image dikhayi jaati hai aur poochha jaata hai ki personal details kahan hain. Woh positions se jawaab deta hai, har number ke aas-paas ek box. Phir ordinary code, model nahi, un boxes par rang chadha deta hai. Model dhoondhta hai, aur program mitata hai. Isliye guard ko samjha kar number dikhta chhodne par razi nahi kiya ja sakta, kyunki mitana uske judgement par tika hi nahi.

::: key Visual claims ka evidence tasveer tak trace hona chahiye
Vision bhi baaki sab ki tarah probabilistic hai. Blurry card, number par glare, ya kone par haath, inme se koi bhi use miss karwa sakta hai. Har box ke liye record mein image, region aur sawaal dikhte the, aur shuruaati hafton mein ek insaan har result check karta tha. Anaya ne specification mein ek rule joda: agar card ki photograph blurred hai ya aadhi dhaki hui hai, toh andaaza mat lagao; poori image chhupa do aur saaf image maango.
:::

## Awaaz

Voice note ek alag problem thi. Jo system sunta hai, woh kabhi ek model nahi hota. Woh ek chain hai, aur Imran ne use board par kadi-dar-kadi banaya.

Table: Voice pipeline
| Stage | Yeh kya karta hai | Matlab kaise badal sakta hai |
| --- | --- | --- |
| Capture | Awaaz record karta hai | Door rakha phone ya background noise |
| Speech-to-text | Awaaz ko likhe hue words mein badalta hai | Accents, names ki galtiyan, aur sabse zyada woh sentences jinme kai languages mix hoti hain, jo Sahaj ke customers ke zyadatar bolne ka tareeka hai |
| Tidying | Fillers hatata hai; number words ko digits mein badalta hai | Words ko galat digits mein badalna, ya chhod dena |
| Guard | Personal details dhoondhta aur chhupata hai | Pehle jaisa |
| Confirmation | Insaan ya program ko dikhaya jaata hai ki kya mila aur confirm karne ko kaha jaata hai | Confirm karne ke liye galat summary dikhayi jaana |
| Action | Ab jaake kuch hota hai | Galat samajh par action lena |

Yeh chain **voice pipeline** hai. Iska pehla stage **speech-to-text** hai, yaani woh software jo speech ko transcribe karta hai. Yahi woh pehli jagah bhi hai jahan matlab kho sakta hai.

Unhone note transcriber ko chalaya aur wapas kya aaya woh padha: "haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do." Sab kuch sahi tha, aur usme ek bhi digit nahi tha.

Phir tidying stage ne apna kaam kiya. Imran ne ek step likha tha jo Hindi number words padhta tha, ek se nau aur shunya, aur jab woh ek run mein aate the toh unhe figures mein badal deta tha. "Char teen do ek" 4321 ban gaya. Pattern checker ne yeh digits spelled out kabhi dekhe nahi the. Ab usne dekhe, aur poora note number chhupa hua nikla.

Anaya ne poochha, agar customer "do hazaar" kahe toh? Woh single digits ki run nahi hai, Imran ne kaha, isliye use chhod diya jaayega, aur woh key mein ek row ki tarah jodi jaayegi. Asal mein, usne kaha, yeh is baare mein baatcheet hai ki number kise kehte hain.

### Kiske words

Anaya ne ek aur baat uthayi, lagbhag baad ke khayal ki tarah. Call centre ko phone karte customer ki recording mein agent ki awaaz bhi ho sakti hai. Toh kiske words kaun se the?

Yeh pata lagana ki kisne kya kaha, **speaker attribution** kehlata hai. Yeh technical detail lagta hai, lekin privacy decision ki tarah behave karta hai. Isse tay hota hai ki kiske words rakhe jaayenge, kitni der tak, aur kiske naam se. Aur agar do log ek saath bolein toh? Usne Lakshmi ke liye iske bagal mein teen sawaal likhe: kiska naam aayega, transcript kitni der rakha jaayega, aur overlap hone par kya hoga.

## Time ginna

Voice har cheez mein ek ghadi jod deta hai. Text mein do second ka intezaar chal jaata hai. Speech mein do second ki khamoshi baatcheet tod deti hai, aur log beech mein bolna shuru kar dete hain. Insaan ka sentence khatam hone se lekar reply tak ka poora safar usi mein fit hona chahiye.

Recorded voice note ke liye intezaar se farq nahi padta tha. Live call ke liye, jo aage ki baat thi aur abhi Won't list mein thi, bahut padta. Imran ne phir bhi use stages naapne ko kaha, kyunki aadat hi asli cheez thi.

Table: Nau second ke note ke liye har stage ka time
| Stage | Time |
| --- | --- |
| Capture | Turant |
| Transcription | 0.9 second |
| Tidying | Na ke barabar |
| Guard | 0.15 second |
| Model, agar zaroorat ho | Lagbhag ek second |

Uska rule tha ki sabse tez hisse ko optimise mat kijiye jab insaan kisi aur hisse ka intezaar kar raha ho. Time transcription mein ja raha tha.

## Test jo toote hue link ko dhoondhe

Aakhri baat woh thi jiski Anaya ko sabse zyada parwaah thi: kaise pata chale ki yeh kaam kar raha hai. Sirf text se bana test set tasveeron aur awaaz ki har failure chhupa leta.

Isliye usne ek naya grid banaya. Usme paanch text cases the, paanch photographs aur tables, aur paanch voice notes. Har group mein uska sabse mushkil example tha: ek kharab scan, ek shor wali recording, aur kai languages mein ek note. Usne har case ko teen tareeke se score kiya. Kya evidence sahi padha gaya? Kya detail sahi nikali gayi? Kya kaam shuru se ant tak safal hua?

Table: Pehla multimodal grid
| | Evidence padha | Detail nikali | Kaam safal hua |
| --- | --- | --- | --- |
| Paanch text cases | 5 mein se 5 | 5 mein se 5 | 5 mein se 5 |
| Paanch photographs | 5 mein se 4 | 5 mein se 4 | 5 mein se 3 |
| Paanch voice notes | 5 mein se 3 | 5 mein se 3 | 5 mein se 2 |

Text wali row saaf thi. Photographs ne "nikali" aur "safal hua" ke beech ek case kho diya. Woh sochne ki galti thi, dekhne ki nahi. Voice notes ne do cases bilkul pehle column mein kho diye. Words hi galat nikle the, guard ke unhe dekhne se pehle. Imran ne kaha, scores ko toota hua component dikhana chahiye, sirf aakhri jawaab nahi.

::: key Aakhri number gumraah kar sakta hai
Voice notes ka aakhri result paanch mein se do tha, aur jis team ko sirf yahi figure dikhta woh guard dobara likh deti. Grid ne dikhaya ki guard theek hai aur transcriber nahi. Iska matlab tha ki hafta kahan lagana hai, yeh bilkul alag baat thi.
:::

## Saaraansh

Jo system pages, tasveerein aur speech leta hai, woh unhe text ki tarah nahi dekh sakta. Sirf words nikaalne se layout, tables aur context kho jaate hain, aur evidence ko original tak wapas jaane ka raasta chahiye.

- Tasveeron ke liye, model ko batane dijiye ki details kahan hain, aur ordinary code ko mitane dijiye, taaki mitane par koi bahas na ho sake.
- Voice system alag-alag stages ki ek pipeline hai, capture se transcription aur tidying se lekar action tak. Har stage ek jagah hai jahan matlab badal sakta hai aur time jaata hai, aur jo sabse slow hai, use dekhna chahiye.
- Kisne kya kaha, yeh privacy decision hai, technical detail nahi.
- Sirf text se bana test baaki forms ki har failure chhupa leta hai. Har tarah ke input ko kai levels par score kijiye, aur dikhega ki kaun sa stage toota.
