---
title: Pages, Tasveerein Aur Awaazein
summary: Ek rail ke timetable ko shabd-dar-shabd zor se padhiye aur kisi ko pata nahi chalta ki train kab jaati hai. Team aakhirkaar photographs aur voice notes lene lagti hai, woh charan dhoondhti hai jahan matlab pehli baar bigadta hai, aur ek aisa test banati hai jo sunne ki galti ko sochne ki galti se alag bata sake.
course: ch15mm
terms:
  - multimodal | sirf text se zyada lene mein saksham, jaise pages, tasveerein, tables aur bhaashan, jo badal deta hai ki saboot kise kehte hain aur use kaise dhoondha jaata hai | 
  - speech-to-text | software jo record kiye hue bhaashan ko likhe hue shabdon mein badalta hai; yeh kisi bhi voice system ka pehla charan hai aur woh pehli jagah jahan matlab kho sakta hai | ASR
  - voice pipeline | alag charno ki woh zanjeer jisse ek voice system guzarta hai, awaaz pakadne se lekar us par karyavahi karne tak, har ek der jodta hai aur har ek matlab badal sakta hai | voice pipelines
  - speaker attribution | yeh pata lagana ki kisne kaun se shabd kahe, ek recording mein; yeh technical dikhta hai aur ek privacy faisle ki tarah behave karta hai | 
---

Farah ne voice note do baar bajaya, aur doosri baar usne kisi ko nahi dekha.

October ka doosra hafta tha aur pilot ke shuruaati numbers tike hue the. Pune ke sweeps ikai ankon mein rahe. Lakshmi ne, us lahje mein jo woh un cheezon ke liye istemaal karti thi jo woh dohrane wali nahi thi, kaha tha ki woh santusht hai. Isliye voice note itna asuvidhajanak tha. Woh lagbhag nau second lamba tha, Kolhapur ki ek mahila ka, ek aisi awaaz mein jo saaf taur par ek phone se baat kar rahi thi jo thoda zyada door pakda gaya tha.

*Haan, mera Aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do. Loan ka status bata do.*

"Is hafte hamein chaar aise mile hain," Farah ne kaha. "Maine voice notes ko April mein *Won't* list mein rakha tha, aur main sahi thi. Lekin woh phir bhi aa rahe hain, aur customers ko nahi pata ki yeh *Won't* hai."

Anaya bole gaye number ke baare mein soch rahi thi, jise woh jaanti thi. Usne ise June mein answer key mein, apni alag row ke roop mein, rakha tha. Ankon ko dhoondhne wala rule us vaakya mein ek bhi nahi paata jahan ank shabd hain. Use pata tha ki yeh din aayega; woh bas ummeed karti thi ki baad mein aayega.

## Timetable ko zor se padhna

Imran ne, jaisa woh aksar karta tha, ek cheez se shuruaat ki.

"Ek rail ke timetable ki photo kheencho," usne kaha. "Ab use phone par ek dost ko padh kar sunao, sirf shabd, kram mein. Woh har station sunte hain. Woh har samay sunte hain. Aur phir bhi unhe nahi pata ki train kab chalti hai, kyunki matlab columns mein tha, aur tum columns ke paas se seedhe nikal gayi."

Yeh *multimodal* har cheez ka pehla sabak tha, jo us system ka naam hai jo saadhe text se zyada leta hai: pages, tasveerein, tables aur bhaashan. Ek PDF text file nahi hai. Woh ek page hai, layout, columns, headings, images aur jo dikhta hai uske peeche chhupi jaankari ke saath. Sirf shabd nikaalo aur zyadatar sanrachna bina awaaz ke gayab ho jaati hai. Iske liye bane system ko badalna padta hai ki saboot se uska kya matlab hai, aur woh use wapas kaise dhoondhta hai.

Unhone iska pehla aadha garmiyon mein kiya tha, passbook ki photograph aur uski sapaat table ke saath. Naya kaam doosra aadha karna tha: guard ko us par amal karne mein saksham banana jo use ek tasveer mein mile, aur phir use sunna sikhana.

## Tasveer

Tasveer in dono mein saral thi, aur woh, Anaya ki hairaani ke liye, wahi thi jisse use sabse zyada darr tha. Ek rule text ki ek line mein characters chhupa sakta hai. Aap unhe ek photograph mein kaise chhupate hain?

Jawaab, Imran ne kaha, do kaamon ko alag karna tha. Ek saksham model ko tasveer dikhayi ja sakti thi aur poochha ja sakta tha ki personal details usme kahan hain. Woh positions ke saath jawaab dega, har number ke charon taraf ek dibba. Phir aam code, model nahi, un dibbon ko rang dega. Machine dhoondhti; program mitata. Is tarah guard ko ek number dikhta chhodne ke liye manaya nahi ja sakta tha, kyunki mitana uske vivek par nirbhar nahi tha.

Vision bhi baaki sab ki tarah sambhavnatmak hai. Ek dhundhla card, number ke aar-paar ek chamak, ek kone par haath: inme se koi bhi use chhodne par majboor kar sakta tha. Isliye saboot dhoondhne yogya hona chahiye tha. Har dibbe ke liye, record ne tasveer, kshetra aur sawaal dikhaya, aur shuruaati hafton mein har nateeje ko ek insaan ne jaancha. Dekhne wale daave, Imran ne kaha, hamesha us tasveer tak dhoondhe ja sakne chahiye jisse woh aaye. Usne specification mein apna ek niyam joda. *Agar kisi card ki photograph dhundhli ya aanshik roop se dhaki ho, toh andaaza mat lagao. Poori image chhupao aur ek saaf maango.*

## Awaaz

Voice note bilkul alag cheez thi.

Jo system sunta hai woh kabhi ek model nahi hota. Woh ek zanjeer hai, aur Imran ne use board par dheere-dheere, kadi-dar-kadi banaya, har ek ke baad ek roke ke saath taaki woh dekh sake. Awaaz pakdi jaati hai. Use *speech-to-text* dwara likhe shabdon mein badla jaata hai, software jo bhaashan ko transcribe karta hai. Shabd saaf kiye jaate hain: filler hataye jaate hain, shabdon mein bole numbers ko ankon mein badla jaata hai. Phir guard woh karta hai jo woh hamesha karta aaya hai. Phir ek insaan, ya ek program, ko dikhaya jaata hai ki kya mila aur confirm karne ko kaha jaata hai. Tabhi kuch hota hai.

Is zanjeer ko *voice pipeline* kehte hain. Isme kai failure ke bindu hain, aur har ek matlab badal sakta hai. Pehla transcription hai, jo accents mein, naamon mein, aur, sabse zyada, un vaakyon mein galtiyan karta hai jo bhashaon ko milate hain, jo Sahaj ke customers ke zyadatar kehne ka varnan hai.

Unhone note ko transcriber ko bajaya, aur jo wapas aaya woh padha. Usne kaha: *haan mera aadhaar number hai char teen do ek paanch chhe saat aath nau shunya ek do loan ka status bata do.* Sab sahi, aur usme ek bhi ank nahi.

"Yahan safai ka charan apna kaam kar raha hai," Imran ne kaha. Usne ek kadam likha tha jo Hindi number shabd, ek se nau, aur shoonya, padhta tha, aur unhe ankon mein badalta tha jab woh ek qataar mein aate. *Char teen do ek* 4321 ban gaya. Pattern checker, jisne un ankon ko shabdon mein likha kabhi nahi dekha tha, ab unhe dekhta tha, aur poora note number chhupa hua guzar gaya.

"Aur agar customer *do hazaar* kahe?"

"Toh woh ank ki qataar nahi hai aur hum use chhod dete hain. Aur hum use ek row ke roop mein jodte hain." Woh halka sa muskuraya. "Tum dekhogi ki yeh is baare mein baatcheet hai ki number kise kehte hain."

Ek aur mudda tha, aur woh ek sawaal se aaya jo Anaya ne baad ke vichaar ke roop mein poochha. Call centre mein ring karne wale customer ki recording mein agent ki awaaz bhi ho sakti hai. Kiske shabd kiske the? Yeh pata lagana ki kisne kya kaha *speaker attribution* kehlata hai. Yeh technical vivaran lagta hai aur privacy ke faisle ki tarah behave karta hai, kyunki yeh tay karta hai ki kiske shabd rakhe jaate hain, kitni der ke liye, aur kiske naam se. Agar do log ek saath bolein, toh kya hota hai? Usne uske bagal mein teen sawaal likhe aur Lakshmi ke liye chhod diye: *kiska naam liya jaata hai, transcript kitni der rakha jaata hai, aur overlap hone par kya hota hai.*

## Samay ginna

Voice ne har cheez mein ek ghadi jod di. Text mein, do second ka intezaar sweekaar tha. Bolne mein, do second ki khamoshi baatcheet tod deti hai, aur log uske upar bolne lagte hain. Ek insaan ke vaakya ke ant se jawaab tak ki poori yatra ko usme fit hona hai.

Ek voice *note* ke liye, jo record hota hai aur bheja jaata hai, intezaar maayne nahi rakhta tha. Ek live call ke liye, jo bhavishya ki cheez thi aur abhi bhi *Won't* list mein thi, woh bahut maayne rakhta. Lekin Imran ne use phir bhi charno ko naapne diya, kyunki aadat hi maqsad thi. Capture: turant. Transcription: nau second ke note ke liye 0.9 second. Safai: na ke barabar. Guard: 0.15. Model: ek second agar zaroorat ho.

"Sabse tez hisse ko optimise mat karo," usne kaha, "jab insaan kisi aur par intezaar kar raha ho." Samay transcription mein ja raha tha.

## Ek test jo toota hua link dhoondhe

Aakhri cheez woh thi jiski Anaya ko sabse zyada parwaah thi: kaise pata chale ki yeh kaam karta hai.

Text se bana test set tasveeron aur awaaz ki har failure ko chhupa deta. Isliye usne ek naya grid banaya. Paanch text cases, paanch photographs aur tables, paanch voice notes, har ek mein sabse mushkil ke saath: ek kharab scan, ek shorgul wali recording, ek multilingual note. Aur usne har case ko teen tareeko se score kiya, ek nahi. Kya saboot sahi padha gaya? Kya detail sahi nikali gayi? Kya kaam shuru se ant tak safal hua?

| | Saboot padha gaya | Detail nikali gayi | Kaam safal hua |
| --- | --- | --- | --- |
| Paanch text cases | 5 mein se 5 | 5 mein se 5 | 5 mein se 5 |
| Paanch photographs | 5 mein se 4 | 5 mein se 4 | 5 mein se 3 |
| Paanch voice notes | 5 mein se 3 | 5 mein se 3 | 5 mein se 2 |

Usne grid ko dekha. Text row saaf thi. Tasveeron ne "nikali gayi" aur "safal hua" ke beech kahin ek case khoya, jo sochne ki galti thi, dekhne ki nahi. Voice notes ne pehle hi column mein do khoye: shabd khud galat nikle the, guard ke unhe dekhne se pehle.

"Metric stack ko toota hua hissa dikhana chahiye," Imran ne kaha. "Sirf antim jawaab nahi."

Isne dikhaya. Voice notes ka antim jawaab paanch mein se do tha, aur sirf wahi number dekhne wali team ne guard ko dobara likha hota. Grid ne kaha ki guard theek hai aur transcriber nahi. Iska matlab tha kuch bilkul alag ki hafta kahan kharch karna hai.

## Saath le jaane layak baatein

Jo system pages, tasveerein aur bhaashan leta hai woh unhe text ki tarah nahi le sakta, kyunki sirf shabd nikaalne se layout, tables aur sandarbh kho jaata hai, aur saboot ko original tak wapas jaane ka raasta chahiye. Tasveeron ke liye, model ko batane do ki details kahan hain aur aam code ko unhe mitane do, taaki mitane par behes na ho sake. Ek voice system alag charno ka pipeline hai, capture se transcription aur safai se karyavahi tak, aur har ek ek jagah hai jahan matlab badal sakta hai aur samay kharch hota hai, sabse dheema charan dekhne layak hai. Kisne kya kaha yeh ek privacy faisla hai, technical vivaran nahi. Aur sirf text se bana test baaki roopon ki har failure chhupa deta hai, isliye har kism ke input ko kai staron par score karo, jo dikhata hai ki kaun sa charan toota.
