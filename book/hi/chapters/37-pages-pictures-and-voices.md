---
title: Pages, Tasveerein Aur Awaazein
summary: Railway timetable ko shabd-ba-shabd zor se padhiye aur koi nahi sikhta ki train kab chhootti hai. Team aakhir photographs aur voice notes sambhalti hai, woh stage dhoondhti hai jahan matlab pehli baar galat hota hai, aur ek aisa test banati hai jo sunne ki galti ko sochne ki galti se alag kar sake. Chapter multimodal systems, speech-to-text, voice pipelines aur speaker attribution samjhata hai.
course: ch15mm
goals:
  - samjhana ki pages, tasveerein aur awaaz lene wala system unhe text ki tarah kyun nahi maan sakta
  - tasveer mein detail dhoondhna aur use mitana alag karna, taaki mitana bahas ke bahar rahe
  - voice pipeline ko stage-dar-stage batana, kahan matlab badal sakta hai aur samay kahan jaata hai
  - aisa test banana jo har tarah ke input ko kai levels par score kare, taaki dikhe ki kaun sa stage toota
terms:
  - multimodal | sirf text se zyada lene mein saksham, jaise pages, tasveerein, tables aur bhaashan, jo badal deta hai ki saboot kise kehte hain aur use kaise dhoondha jaata hai | 
  - speech-to-text | software jo record kiye hue bhaashan ko likhe hue shabdon mein badalta hai; yeh kisi bhi voice system ka pehla charan hai aur woh pehli jagah jahan matlab kho sakta hai | ASR
  - voice pipeline | alag charno ki woh zanjeer jisse ek voice system guzarta hai, awaaz pakadne se lekar us par karyavahi karne tak, har ek der jodta hai aur har ek matlab badal sakta hai | voice pipelines
  - speaker attribution | yeh pata lagana ki kisne kaun se shabd kahe, ek recording mein; yeh technical dikhta hai aur ek privacy faisle ki tarah behave karta hai | 
---

October ke doosre hafte mein Farah Sheikh ne ek voice note do baar baja ke dikhaya, aur doosri baar usne kisi ki taraf nahi dekha. Pilot ke shuruaati numbers tike hue the, aur Pune ke sweeps ek ank mein rahe. Lakshmi Iyer ne, us lahje mein jo woh un baaton ke liye istemaal karti thi jo woh dohrana nahi chahti thi, kaha tha ki woh khush hai. Isse voice note aur asahaj ho gaya. Woh lagbhag nau second ka tha, Kolhapur ki ek mahila ka, jo phone ko mooh se thoda zyada door pakde bol rahi thi.

"Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do." Farah ne kaha ki is hafte aise chaar aaye the. Usne April mein voice notes ko Won't list mein rakha tha aur woh sahi thi, par woh phir bhi aa rahe the, aur customers ko nahi pata tha ki woh ek Won't hain.

## Case: shabdon mein bola gaya number

Anaya ne bola hua number pehchaana. Usne ise June mein answer key mein ek alag row ki tarah rakha tha: jo rule ankon ko dhoondhta hai use aise vaakya mein kuch nahi milta jahan ank shabd hain. Use pata tha ki yeh din aayega aur ummeed thi ki thoda baad mein aayega.

## Timetable ko zor se padhna

Imran ne ek cheez se shuruaat ki. Ek railway timetable ki photograph lo, usne kaha, aur use phone par kisi dost ko padhkar sunao, sirf shabd, kram mein. Dost har station sunta hai aur har samay sunta hai, aur phir bhi nahi jaanta ki train kab chhootti hai, kyunki matlab columns mein tha aur padhne wala unke upar se nikal gaya.

Yahi *multimodal* ka pehla sabak hai, us system ka naam jo plain text se zyada kuch leta hai: pages, tasveerein, tables aur awaaz. Ek PDF text file nahi hai. Woh ek page hai, layout, columns, headings, tasveeron aur us jaankari ke saath jo dikhta hai uske peechhe chhupi hai. Sirf shabd nikaalne se zyadatar structure bina awaaz ke gayab ho jaata hai. Iske liye banaye gaye system ko badalna padta hai ki saboot ka kya matlab hai aur woh us tak kaise wapas ishaara karta hai.

Team ne pichhli garmiyon mein passbook photograph aur uski chapti table ke saath pehla aadha kaam kar liya tha. Naya kaam guard ko us par kaam karne laayak banana tha jo use tasveer mein mile, aur phir use sunna sikhana.

## Tasveer

Tasveer saral thi, aur woh jisse Anaya zyada darti thi. Ek rule text ki line mein akshar chhupa sakta hai, par yeh saaf nahi hai ki photograph mein kaise chhupayein.

Jawaab do kaam alag karna tha. Ek saksham model ko image dikhayi jaati hai aur poochha jaata hai ki personal details kahan hain, aur woh sthaanon se jawaab deta hai, har number ke chaaron taraf ek dabba. Phir saadhaaran code, model nahi, un dabbon par rang chadha deta hai. Model dhoondhta hai aur program mitata hai, isliye guard ko kisi number ko dikhta chhodne ke liye manaya nahi ja sakta, kyunki mitana uske faisle par nirbhar nahi karta.

::: key Drishya dawon ka saboot tasveer tak jaana chahiye
Vision bhi baaki sab ki tarah sambhaavit hai. Ek dhundhla card, number par chamak ya kone par haath, inme se koi bhi use chhod dene ko majboor kar sakta hai. Har dabbe ke liye record ne image, kshetra aur sawaal dikhaya, aur shuruaati hafton mein ek insaan ne har nateeja jaancha. Anaya ne specification mein ek niyam joda: agar card ki photograph dhundhli ya aadhi dhaki ho, toh anumaan mat lagao; poori image chhupao aur ek saaf image maango.
:::

## Awaaz

Voice note ek alag samasya thi. Jo system sunta hai woh kabhi ek model nahi hota. Woh ek zanjeer hai, aur Imran ne use board par kadi-kadi banaya.

Table: Voice pipeline
| Stage | Kya karta hai | Matlab kaise badal sakta hai |
| --- | --- | --- |
| Capture | Awaaz record karta hai | Door rakha phone ya pichhle shor |
| Speech-to-text | Awaaz ko likhe shabdon mein badalta hai | Accents, naamon aur sabse zyada, kai bhashaon mein mile vaakyon ke saath galtiyan, jo Sahaj ke zyadatar customers bolte hain |
| Tidying | Filler hataata hai; number ke shabdon ko ankon mein badalta hai | Shabdon ko galat ankon mein badalna, ya unhe chhod dena |
| Guard | Personal details dhoondhta aur chhupata hai | Pehle jaisa |
| Confirmation | Ek insaan ya program ko dikhaya jaata hai ki kya mila aur confirm karne ko kaha jaata hai | Confirmation ke liye dikhaya gaya galat saar |
| Action | Ab jaakar kuch hota hai | Galat samajh par kaam karna |

Yeh zanjeer *voice pipeline* hai, aur *speech-to-text*, jo awaaz ko transcribe karne wala software hai, uska pehla stage aur woh pehli jagah hai jahan matlab kho sakta hai.

Unhone note ko transcriber ko bajaya aur jo wapas aaya woh padha: "haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do." Sab sahi tha, aur usme ek bhi ank nahi tha. Tidying stage ne agla kaam kiya. Imran ne ek kadam likha tha jo Hindi ke number-shabd padhta tha, ek se nau aur shunya, aur jab woh ek run mein aate toh unhe ankon mein badalta tha. "Char teen do ek" 4321 ban gaya. Pattern checker ne, jisne woh ank kabhi shabdon mein nahi dekhe the, ab dekha, aur poora note number chhupa kar nikal gaya.

Anaya ne poochha ki agar customer "do hazaar" kahe toh kya. Woh akele ankon ki run nahi hai, Imran ne kaha, isliye use chhod diya jaayega, aur use key mein ek row ke roop mein joda jaayega. Yeh, usne kaha, is baare mein ek baatcheet hai ki number kise maana jaaye.

### Kiske shabd

Anaya ne ek aur baat uthayi, jaise baad mein socha gaya sawaal ho. Ek customer ke call centre ko phone karne ki recording mein agent ki awaaz bhi ho sakti thi, toh kiske shabd kiske the? Yeh tay karna ki kisne kya kaha *speaker attribution* hai. Yeh ek technical byora lagta hai aur ek privacy faisle ki tarah behave karta hai, kyunki yeh tay karta hai ki kiske shabd rakhe jaate hain, kitni der ke liye aur kiske naam se. Agar do log ek saath bolein toh kya hota hai? Usne uske paas teen sawaal likhe, Lakshmi ke liye: kiska naam liya jaata hai, transcript kitni der rakha jaata hai, aur overlap hone par kya hota hai.

## Samay ginna

Voice har cheez mein ek ghadi jodta hai. Text mein do second ka intezaar theek hai, jabki bolne mein do second ki khaamoshi baatcheet tod deti hai aur log ek doosre ke upar bolne lagte hain. Ek insaan ke vaakya ke ant se reply tak ki poori yatra ko usi ke andar fit hona chahiye.

Record kiye hue voice note ke liye intezaar maayne nahi rakhta tha. Ek live call ke liye, jo bhavishya ki baat thi aur Won't list mein thi, woh bahut zyada maayne rakhta. Imran ne phir bhi Anaya se stages naapne ko kaha, kyunki aadat hi maksad thi.

Table: Nau second ke note ke liye har stage ka samay
| Stage | Samay |
| --- | --- |
| Capture | Turant |
| Transcription | 0.9 second |
| Tidying | Na ke barabar |
| Guard | 0.15 second |
| Model, agar zaroorat ho | Lagbhag ek second |

Uska niyam tha ki sabse tez hisse ko tez karne mein na lago jab insaan kisi aur par intezaar kar raha ho. Transcription mein samay jaata tha.

## Aisa test jo toota hua link dhoondhe

Aakhri baat woh thi jiski Anaya ko sabse zyada parwaah thi: kaise pata chale ki yeh kaam karta hai. Sirf text se bana test set tasveeron aur awaaz ki har failure chhupa deta. Usne ek naya grid banaya, paanch text cases, paanch photographs aur tables, aur paanch voice notes, har ek mein sabse mushkil udaharan ke saath: ek kharab scan, ek shor wali recording aur kai bhashaon ka ek note. Usne har case ko ek nahi, teen tarah se score kiya. Kya saboot sahi padha gaya? Kya detail sahi nikali gayi? Kya kaam shuru se ant tak safal hua?

Table: Pehla multimodal grid
| | Saboot padha gaya | Detail nikali gayi | Kaam safal hua |
| --- | --- | --- | --- |
| Paanch text cases | 5 mein se 5 | 5 mein se 5 | 5 mein se 5 |
| Paanch photographs | 5 mein se 4 | 5 mein se 4 | 5 mein se 3 |
| Paanch voice notes | 5 mein se 3 | 5 mein se 3 | 5 mein se 2 |

Text ki row saaf thi. Photographs "nikali gayi" aur "safal hua" ke beech ek case kho gayi, jo dekhne ki nahi balki sochne ki galti thi. Voice notes ne do cases bilkul pehle column mein kho diye: guard ke dekhne se pehle shabd galat nikle the. Imran ne kaha ki score ko toota hua hissa dikhana chahiye, sirf antim jawaab nahi.

::: key Antim number bhramit kar sakta hai
Voice notes ka antim nateeja paanch mein se do tha, aur jo team sirf yahi figure dekhti woh guard dobara likhti. Grid ne dikhaya ki guard theek tha aur transcriber nahi. Iska matlab tha ki hafta kahan kharch karna hai, is baare mein kuch bilkul alag.
:::

## Saaraansh

Jo system pages, tasveerein aur awaaz leta hai woh unhe text nahi maan sakta, kyunki sirf shabd nikaalne se layout, tables aur sandarbh kho jaate hain, aur saboot ko original tak wapas jaane ka tareeka chahiye.

- Tasveeron ke liye, model ko batane do ki details kahan hain aur saadhaaran code ko unhe mitane do, taaki mitane par behas na ho sake.
- Voice system alag stages ki ek pipeline hai, capture se transcription aur tidying se action tak. Har ek ek jagah hai jahan matlab badal sakta hai aur samay lagta hai, aur sabse dheema dekhne wala hai.
- Kisne kya kaha yeh ek privacy faisla hai, technical byora nahi.
- Sirf text se bana test baaki roopon ki har failure chhupa deta hai. Har tarah ke input ko kai levels par score karo, jisse dikhta hai ki kaun sa stage toota.
