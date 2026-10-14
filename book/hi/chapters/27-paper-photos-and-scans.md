---
title: Kaagaz, Photos Aur Scans
summary: Ab tak guard ne jo bhi sentence padha, woh pehle se text tha. 50 attachments ka ek random sample dikhata hai ki asli traffic mein aisa kitni kam baar hota hai, aur zero ki jagah capital O ek number ko rule ke saamne se kaise nikaal sakta hai. Is chapter mein OCR aur document audit aate hain.
course: ch16
goals:
  - samjha paana ki jo project documents par tika hai, use document audit se kyun shuru karna chahiye
  - bata paana ki OCR kya karta hai aur uski aam galtiyan kaun si hain
  - pattern rule lagane se pehle milte-julte characters ko theek kar paana
  - page ko text ki tarah padhne aur page ko model ko picture ki tarah dikhane ki comparison karna, aur batana ki voice kya badalti hai
terms:
  - OCR | optical character recognition: aisa software jo text ki picture ko text mein badalta hai, aam taur par kuch galtiyon ke saath | text extraction, text extractor
  - document audit | kuch banane se pehle, ek random sample se ginna ki collection ka kitna hissa saaf digital text hai, kitna scan hai, aur kitne mein matlab tables aur layout mein chhupa hai | 
---

Saal ke pehle chhe mahine, Anaya ke dimaag mein customer ke message ki tasveer phone par kuch lines ka text thi. Usne kabhi use gaur se dekha nahi tha. Woh transcripts se aati thi, jo apne aap mein text hote hain, aur answer key se, jo sentences ka ek column thi. Team ne ab tak jo bhi banaya tha, har rule aur har test, ek chhupi hui dhaarna par tika tha. Kisi ne pehle hi customer ke words ko characters mein badal diya hai.

July ke ek Friday ko Farah Sheikh ne uske saamne ek aisi sheet rakhi jo bilkul sentence jaisi nahi dikhti thi. Woh ek photograph thi jo ek customer ne kitchen table par rakhi bank passbook ki khichi thi. Woh thodi tedhi thi, ek kone par khidki ki roshni padi thi, aur use chatbot ko "account number check karo" likhkar bheja gaya tha.

Usme kuch bhi text nahi tha. Woh pixels ka ek grid tha, jo ek insaan ko naam, account number aur branch wali table jaisa dikhta tha. "Humein aise bahut aate hain," Farah ne kaha. Anaya ne poochha ki kitne. Farah ne kaha use nahi pata, aur use laga ki Anaya khud pata karna chahegi.

## Case: kitchen table par rakhi passbook

Anaya ne samajhdaari wala kaam kiya aur ek random sample maanga. Is chapter mein aap dekhenge ki sample ne kya dikhaya, ek photograph se machine ke padhne par ek number ke saath kya hua, aur maujooda design ki limit kahan thi.

## 50 random attachments

Usne Farah se kaha ki pichhle mahine ki chats mein se 50 attachments random nikaalein. Woh dilchasp wale nahi hone the, ya woh jo koi utsahi colleague chunta. Ek number generator ne asli traffic mein se saare 50 chune. Anaya ne Saturday subah, garmi se bachne ke liye aadhi band shutters ke peeche, ek-ek karke unhe dekha.

::: def Document audit
Jis bhi project mein documents par bharosa karna ho, usse pehle teen numbers jaanna zaroori hai. Documents ka kitna hissa saaf digital text hai jise jaisa hai waisa padha ja sakta hai? Kitna scan ya photograph kiya hua hai, jise pehle text mein badalna padega? Aur logon ko jo jaankari chahiye uska kitna hissa tables, forms aur layouts ke andar band hai, jahan matlab is par tika hai ki kaun sa box kiske baju mein hai? Ek random sample se yeh pata karna *document audit* hai. Ismein ek dopahar lagti hai, aur lagbhag koi nahi karta.
:::

Unhone 50 ko dheron mein baant diya.

Table: 50 random attachments kya the
| Kya tha | Ginti |
| --- | --- |
| Saaf digital files, jaise bank se download ki gayi statement | 12 |
| Cards, cheques aur passbooks ki photographs | 31 |
| Doosre apps ke screenshots | 7 |

50 mein se 31, yaani 10 mein se 6 se thode zyada, photographs the. Lagbhag sab mein, pehli line mein hi woh detail thi jise dhoondhne ke liye guard bana hai.

Anaya ne kaha ki yahi woh hissa tha jisme woh galat thi. April mein usne cards ki photographs ko "Could" ke neeche rakha tha, kyunki use lagta tha ki woh kam aati hain. Imran ne kaha ki uske paas number nahi tha. Anaya ne kaha ki uske paas ek ehsaas tha. Usne line "Could" se "Should" mein kar di aur baju mein wajah likhi: random sample ka 62 percent, 12 July ko check kiya. Ek aise document mein jo bahut had tak itminaan wali impressions ki failure ke baare mein tha, yeh ek chhoti si nijee jeet thi.

## Step se pehle ka step

Ek rule picture nahi padh sakta. Pehle koi cheez picture ko text mein badalni padegi. Yahi *OCR* hai, yaani optical character recognition. Yeh aisa software hai jo likhe hue ki picture dekhta hai aur woh characters wapas deta hai jo use lagta hai ki woh dekh raha hai. Woh bahut achha hai lekin perfect nahi, aur uski galtiyan ek khaas aur dhokhebaaz kism ki hoti hain.

Imran ne ek dummy Aadhaar card liya jo building ke ek designer ne ek banaye hue number ke saath mock up kiya tha, aur use thoda tirchha karke photograph kiya. Usne photograph reader se guzaari. Card par number tha 4321 5678 9012. Jo text wapas aaya, usme likha tha "432l 5678 9O12". Reader ne digit 1 ki jagah chhota letter l diya tha, aur zero ki jagah capital O.

Bahut se typefaces mein 1 aur l lagbhag ek jaise dikhte hain, aur O aur zero bhi. Software shapes se andaaza lagata hai. Pattern checker 12 digits dhoondhta hai, aur yeh 10 digits aur 2 letters the. Toh checker ise pehchan nahi paata. Asli number saamne se nikal jaata, aur record bilkul saaf rehta jo dikhata ki rule ko kuch galat nahi laga.

PAN ko ulti taraf se wahi dikkat hoti hai. Usmein pehli 5 jagah letters hote hain aur agli 4 mein digits, toh jahan letter hona chahiye wahan digit shape ko tod deta hai.

Ilaaj chhota sa tha. Rule kisi number ko dekhe, usse pehle ek chhota step milte-julte characters ko wapas badal sakta tha. Jahan sirf digits allowed hain, wahan O zero hai, l ek hai, S paanch hai aur B aath hai. Kisi ne yeh rules mein daalne ka socha nahi tha, kyunki phone par type karne wala koi bhi yeh galti nahi karta. Sirf photograph padhne wali machine karti hai.

Anaya ne answer key mein rows ka ek naya parivaar joda, jiska label tha "scanned, with lookalikes". Yeh images se bani key ka pehla version tha.

## Page padhne ke do tareeke

Imran ne options saamne rakhe.

Table: Page padhne ke do tareeke
| Tareeka | Taakat | Kamzori |
| --- | --- | --- |
| Page ko pehle text mein badalna, phir text par kaam karna | Sasta. Ab tak jo bhi banaya hai woh sab lagu rehta hai: cutting, rules, search | Aksar structure bigaad deta hai. Teen column ki table aksar ek sapaat line ban jaati hai. Har value bachti hai, lekin kaun sa figure kaun si row ka hai yeh kho jaata hai |
| Ek capable model ko page ki picture dena | Layout bachaye rakhta hai, aur table ya form ke baare mein sawaal ka jawaab de sakta hai | Har page ki cost zyada hai, kabhi-kabhi code galat padh leta hai, aur use page tak wapas ishaara karne ka tareeka chahiye jo usne dekha |

Bahut se systems dono karte hain. Search ke liye text nikaalte hain, aur jab sawaal table ya form ke baare mein ho toh model ko picture dikhate hain.

::: watch Flatten karne ka chupa hua khatra
Maan lijiye ek table flatten ho gayi, aur sawaal ek column ke number ke baare mein hai. Search kaam karti hai, aur model fluently jawaab deta hai, galat column ka number quote karke. Aage koi cheez ise pakad nahi sakti, kyunki aage kisi ne page dekha hi nahi.
:::

Anaya ne passbook ki photograph ko dobara dekha. Usme ek naam tha, ek account number aur ek branch code. Agar reader ne unhe galat order mein rakh diya hota, toh woh nahi bata sakti thi ki kaun sa number kaun sa hai. Guard phir dono ko chhupa deta, jo safe hota, ya kisi ko nahi, jo safe nahi hota.

## Aur phir voice

Dopahar ke ant mein Farah ne ek aur source ka zikr kiya. Kuch customers ne voice notes bhejna shuru kar diya tha, aur call centre voice assistant ke baare mein poochh raha tha. Anaya ne dono ko Won't list mein rakha tha. Apne saath insaaf karne ke liye, usne poochha kyun.

Imran ne kaha ki voice main constraint ko badal deta hai. Text mein 2 second ka intezaar theek hai. Bolne mein 2 second ki khamoshi baatcheet tod deti hai, aur log ek doosre ke upar bolne lagte hain. Poora round trip isi ke andar fit hona chahiye: speech andar, thinking, aur speech bahar. Garmiyon ki thinking machines, aam taur par, bahut dheemi thi.

Voice mainly accuracy ka sawaal bhi nahi hai. Woh is baat ka sawaal hai ki insaan ne bolna kab khatam kiya, agar woh beech mein toke toh kya karna hai, aur system ke kaam karte waqt kya kehna hai. Woh ek alag problem aur alag project tha, aur Won't wahin raha jahan tha.

## Kya badla

Us raat Anaya ne board par, purani laal line ke baju mein aur nayi row ke neeche, likha ki audit ki cost kya thi aur usne kya diya. Cost thi ek dopahar, 50 files aur bahut saari chai. Usne photographs ko "Could" se "Should" mein pahunchaya, rules ko milte-julte characters ke baare mein sikhaya, aur use aage ke liye ek thumb rule diya: jis bhi project mein documents par bharosa karna ho, usse pehle saaf wale ginye.

Imran ne kaha ki chhe hafte baad ek project ke fail hone se bachne ka yeh sabse sasta tareeka hai. Saath hi yeh sabse zyada anadekha kiya jaata hai, kyunki Imran se kisi ne ise kabhi ek baar bhi nahi maanga.

## Summary

Asli documents saaf text se kahin zyada baar pages aur pictures hote hain.

- Picture ko characters mein badalne wale step ko OCR kehte hain. Uski galtiyan ek khaas kism ki hoti hain, jaise zero ki jagah letter O ya ek ki jagah l, aur yeh identity number ko us rule ke saamne se nikaal sakti hain jo digits dhoondhta hai.
- Tables is step ka sabse khamosh nuksaan hain, kyunki values bachti hain aur unke beech ke rishte nahi.
- Page ko pehle text mein badla ja sakta hai, jo sasta hai, ya ek capable model ko picture ki tarah dikhaya ja sakta hai, jo layout bachaye rakhta hai. Bahut se systems dono karte hain.
- Voice main constraint ko accuracy se time par le jaati hai.
- Kisi bhi document project ke shuru hone se pehle, document audit dikhata hai ki asal mein kya shaamil hai. Ismein 50 random files aur teen ginti lagti hain.

Agle chapter mein aap ek sawaal dekhenge jo shuru se hi background mein intezaar kar raha tha: model ko kya bhejna aapke liye legal aur samajhdaari dono nazar se theek hai.
