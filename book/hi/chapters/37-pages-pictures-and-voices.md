---
title: Pages, Tasveerein Aur Awaazein
summary: Railway timetable ko shabd-shabd zor se padh dijiye, phir bhi kisi ko nahi pata chalta ki train kab chhootti hai. Team aakhir mein photographs aur voice notes sambhalti hai. Woh us stage ko dhoondhti hai jahan matlab pehli baar galat hota hai. Woh aisa test banati hai jo sunne ki galti ko sochne ki galti se alag pehchaan sake. Chapter mein multimodal systems, speech-to-text, voice pipelines aur speaker attribution aate hain.
course: ch15mm
goals:
  - samjhana ki pages, tasveerein aur awaaz lene wala system unhe text ki tarah kyun nahi dekh sakta
  - tasveer mein detail dhoondhna aur use mitana alag rakhna, taaki mitane par koi bahas na kar sake
  - voice pipeline ko stage-by-stage batana, har stage kahan matlab badal sakta hai, aur time kahan jaata hai
  - aisa test banana jo har tarah ke input ko kai levels par score kare, taaki dikhe ki kaun sa stage toota
terms:
  - multimodal | padhne, dekhne aur sunne wale insaan jaisa: sirf text nahi, pages, tasveerein, tables aur speech bhi lene ke kaabil; isse badal jaata hai ki evidence kise kehte hain aur use wapas kaise trace karte hain | 
  - speech-to-text | bolne wale ko type karte clerk jaisa: woh software jo record ki hui speech ko likhe hue words mein badalta hai; yeh kisi bhi voice system ka pehla stage hai aur pehli jagah jahan matlab kho sakta hai | ASR
  - voice pipeline | kai daudne walon ki relay race jaisa: alag-alag stages ki chain jisse voice system guzarta hai, awaaz pakadne se lekar us par action lene tak; har stage delay jodta hai aur har ek matlab badal sakta hai | voice pipelines
  - speaker attribution | natak ki script mein har line ke bagal mein naam likhne jaisa: recording mein yeh pata lagana ki kisne kaun se words kahe; yeh technical lagta hai, lekin privacy decision ki tarah behave karta hai | 
---

October ke doosre hafte mein Farah Sheikh ne ek voice note do baar chalaya. Doosri baar usne kisi ki taraf nahi dekha. Pilot ke shuruaati numbers tik gaye the. Pune ke sweeps single figures mein rahe. Lakshmi Iyer ne kaha tha ki woh khush hain, usi lahje mein jo woh un baaton ke liye rakhti thi jo woh dohrana nahi chahti. Isi se voice note aur zyada bechain karne wala lag raha tha.

Woh lagbhag nau second ka tha. Kolhapur ki ek mahila ka, jo phone ko mooh se thoda zyada door pakad kar bol rahi thi.

"Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do."

Farah ne kaha, is hafte aise chaar aaye the. March mein Anaya ne voice notes ko Won't list mein rakha tha, aur sahi kiya tha. Won't list mein woh hota hai jo team abhi nahi banayegi. Lekin woh phir bhi aa rahe the. Customers ko pata nahi tha ki woh Won't mein hain.

## Case: shabdon mein bola gaya number

Anaya is bole hue number ko pehchaanti thi. Usne ise June mein answer key mein apni ek alag row ki tarah daala tha. Digits dhoondhne wala rule us sentence mein kuch nahi paata jahan digits shabd hain. Use pata tha ki yeh din aayega. Use ummeed thi ki yeh der se aayega.

## Timetable ko zor se padhna

Imran ne ek cheez se shuru kiya. Railway timetable ki photo kheenchiye, usne kaha. Phir use telephone par dost ko padh kar sunaiye. Sirf shabd, kram se. Dost har station aur har samay sunta hai. Phir bhi use nahi pata ki train kab chhootti hai. Matlab columns mein tha. Padhne wala unhe seedha laangh gaya.

Yeh kisi bhi **multimodal** cheez ka pehla sabak hai. Is shabd ka matlab hai woh system jo sirf saade text se zyada leta hai. Woh pages, tasveerein, tables aur speech leta hai. Yeh padhne, dekhne aur sunne wale insaan jaisa hai. PDF text file nahi hai. Woh ek page hai. Usme layout, columns, headings aur images hoti hain. Usme woh jaankari bhi hoti hai jo dikhne wali cheez ke peeche chhupi hai.

Sirf shabd nikaalenge, toh aap chupchaap zyadatar structure phenk denge. Isliye is kaam ke liye bane system ko evidence ka matlab badalna hoga. Use yeh bhi badalna hoga ki woh uski taraf wapas kaise ishaara kare.

Team garmiyon mein iska pehla aadha hissa kar chuki thi. Woh passbook ki photograph aur uski flatten ki hui table thi. Naya kaam do hisson mein tha. Pehla, guard ko is layak banana ki woh tasveer mein jo mile, us par action le. Phir use sunna sikhana.

## Tasveer

Tasveer ka kaam aasaan tha, aur Anaya ko usse zyada dar tha. Rule text ki ek line mein characters chhupa sakta hai. Photograph mein unhe chhupana kaise hai, yeh saaf nahi tha.

Jawaab tha kaam ko do mein baantna. Ek insaan jo ungli se dikhaye, aur ek jo marker pakde. Ek kaabil model ko image dikhayi jaati hai. Usse poochha jaata hai ki personal details kahan hain. Woh positions batata hai, har number ke gird ek box. Phir saadha code un boxes par rang pot deta hai. Model rang nahi potta. Model dhoondhta hai, aur program mitaata hai. Isliye guard ko samjha kar number dikhta hua nahi chhodwaya ja sakta. Mitana uske judgement par nirbhar nahi hai.

::: key Dekhne wale daavon ka evidence tasveer tak trace hona chahiye
Vision bhi andaaze par chalta hai, jaise model ki har cheez. Dhundhla card use chuka sakta hai. Number par chamak bhi. Ya kone par rakha haath bhi. Har box ke liye record mein image, region aur sawaal dikhte the. Shuruaati hafton mein har result ko ek insaan ne check kiya.

Anaya ne specification mein ek rule joda. Agar card ki photograph dhundhli ho ya adhoori dhaki ho, toh andaaza mat lagao. Poori image chhupa do aur saaf photo maango.
:::

## Awaaz

Voice note ek alag samasya thi. Jo system sunta hai, woh kabhi ek model nahi hota. Woh ek chain hai. Yeh kai daudne walon ki relay race jaisa hai. Imran ne use board par kadi-kadi banaya.

Table: Voice pipeline
| Stage | Yeh kya karta hai | Matlab kaise badal sakta hai |
| --- | --- | --- |
| Capture | Awaaz record karta hai | Door rakha phone ya background shor |
| Speech-to-text | Awaaz ko likhe hue shabdon mein badalta hai | Accents, naamon ke saath galtiyan, aur sabse zyada un sentences ke saath jo kai languages milate hain, jo Sahaj ke zyadatar customers bolte hain |
| Tidying | Filler hataata hai; number words ko digits mein badalta hai | Shabdon ko galat digits mein badalna, ya chhod dena |
| The guard | Personal details dhoondhta aur chhupata hai | Pehle jaisa |
| Confirmation | Insaan ya program ko dikhaya jaata hai ki kya mila aur confirm karne ko kaha jaata hai | Confirm karne ke liye galat summary dikhayi jaana |
| Action | Ab jaakar kuch hota hai | Galat samajh par action lena |

Yeh chain ek **voice pipeline** hai. Iska pehla stage **speech-to-text** hai. Yeh software hai jo bole hue ko type kar deta hai, dictation lete clerk jaisa. Yeh pehli jagah bhi hai jahan matlab kho sakta hai.

Unhone note transcriber ko chalaya aur jo wapas aaya use padha. "haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do." Sab kuch sahi tha. Aur usme ek bhi digit nahi tha.

Phir tidying stage ne apna kaam kiya. Imran ne ek step likha tha jo Hindi number words padhta tha, ek se nau aur shunya. Jab woh ek saath aate, toh woh unhe figures mein badal deta. "Char teen do ek" 4321 ban gaya. Pattern checker ne yeh digits shabdon mein likhe kabhi dekhe nahi the. Ab usne dekhe. Poora note number chhupa kar nikla.

Anaya ne poochha ki agar customer "do hazaar" bole toh kya hoga. Woh akele digits ki ladi nahi hai, Imran ne kaha. Isliye use chhod diya jaayega. Woh use key mein ek row ki tarah jodega. Asal mein, usne kaha, yeh is baat par charcha hai ki number kise kehte hain.

### Kiske shabd

Anaya ne ek aur baat uthayi, lagbhag baad ke khayal ki tarah. Call centre ko phone karne wale customer ki recording mein agent ki awaaz bhi ho sakti thi. Toh kiske shabd kiske the?

Yeh pata lagana ki kisne kya kaha, **speaker attribution** kehlata hai. Yeh natak ki script mein har line ke bagal mein naam likhne jaisa hai. Yeh technical detail lagta hai. Yeh privacy decision ki tarah behave karta hai. Yeh tay karta hai ki kiske shabd rakhe jaate hain, kitni der tak, aur kiske naam se. Aur agar do log ek saath bolein toh? Usne iske bagal mein Lakshmi ke liye teen sawaal likhe. Kiska naam liya jaata hai? Transcript kitni der rakha jaata hai? Awaazein overlap karein toh kya hota hai?

## Waqt ginna

Voice har cheez par ek ghadi laga deti hai. Text mein do second ka intezaar theek hai. Bolchaal mein do second ki chuppi baat tod deti hai. Log uske upar bolne lagte hain. Poora safar isi ke andar aana chahiye. Woh insaan ke sentence ke ant se jawaab tak chalta hai.

Record kiye hue voice note ke liye intezaar se farak nahi padta tha. Live call ke liye bahut padta. Live call aage ki baat thi, abhi Won't list mein thi. Imran ne phir bhi use stages naapne ko kaha, kyunki aadat hi asli baat thi.

Table: Nau second ke note ke liye har stage ka time
| Stage | Time |
| --- | --- |
| Capture | Turant |
| Transcription | 0.9 second |
| Tidying | Na ke barabar |
| The guard | 0.15 second |
| Model, agar zaroorat ho | Lagbhag ek second |

Uska rule saadha tha. Sabse tez hisse ko tez mat kijiye jab insaan kisi aur hisse ka intezaar kar raha ho. Yeh aisa hai jaise queue gate par atki ho aur aap samne ka darwaza chamka rahe hon. Time transcription mein ja raha tha.

## Toote hue link ko dhoondhne wala test

Aakhri baat woh thi jiski Anaya ko sabse zyada parwah thi. Kaise pata chale ki yeh kaam kiya? Sirf text ka test set tasveeron aur awaaz ki har failure chhupa leta. Yeh aisi school exam jaisa hai jo sirf padhna parakhti hai, sunna nahi.

Toh usne ek naya grid banaya. Usme paanch text cases the, paanch photographs aur tables, aur paanch voice notes. Har group mein uska sabse mushkil example tha: kharab scan, shor wali recording, aur kai languages wala note. Usne har case ko teen tareeke se score kiya. Kya evidence sahi padha gaya? Kya detail sahi nikali gayi? Kya kaam shuru se ant tak safal hua?

Table: Pehla multimodal grid
| | Evidence padha | Detail nikali | Kaam safal |
| --- | --- | --- | --- |
| Paanch text cases | 5 mein se 5 | 5 mein se 5 | 5 mein se 5 |
| Paanch photographs | 5 mein se 4 | 5 mein se 4 | 5 mein se 3 |
| Paanch voice notes | 5 mein se 3 | 5 mein se 3 | 5 mein se 2 |

Text ki row saaf thi. Photographs ne "nikali" aur "safal" ke beech ek case khoya. Yeh sochne ki galti thi, dekhne ki nahi. Voice notes ne do cases bilkul pehle column mein khoye. Guard ke dekhne se pehle hi shabd galat nikle the. Imran ne kaha ki scores toote hue hisse ko dikhayein, sirf aakhri jawaab ko nahi.

::: key Aakhri number bhatka sakta hai
Voice notes ka aakhri result paanch mein se do tha. Sirf yahi figure dekhne wali team guard ko dobara likh deti. Grid ne dikhaya ki guard theek tha. Transcriber theek nahi tha. Iska matlab tha ki hafta kahan lagana hai, woh bilkul alag baat thi.
:::

## Saaraansh

Pages, tasveerein aur speech lene wala system unhe text ki tarah nahi dekh sakta. Sirf shabd nikaalne se layout, tables aur context kho jaate hain. Evidence ko original tak wapas jaane ka raasta bhi chahiye.

- Tasveeron ke liye, model ko batane dijiye ki details kahan hain. Saade code ko unhe mitane dijiye. Tab mitane par koi bahas nahi kar sakta.
- Voice system alag stages ki pipeline hai. Woh capture se transcription aur tidying se hote hue action tak chalti hai. Har stage matlab badal sakta hai, aur har ek time kharch karta hai. Sabse dheemi par pehle dekhiye.
- Kisne kya kaha, yeh privacy decision hai, technical detail nahi.
- Sirf text ka test baaki roopon ki har failure chhupa leta hai. Har tarah ke input ko kai levels par score kijiye. Tab dikhega ki kaun sa stage toota.

Agle chapter mein doosri team ka ek engineer Friday raat paune gyarah baje guard ke instructions ki ek line narm kar deta hai.
