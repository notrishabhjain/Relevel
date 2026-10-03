---
title: Asal Mein Kitna Kharcha Hota Hai
summary: Finance director ko "yeh tokens par nirbhar karta hai" jawaab nahi hai. Ek product manager guard ki sahi keemat nikaalti hai, ek hi tool ke teen bahut alag kul paati hai, aur dekhti hai ki uske chaar dibbon ke chalne ka kram sabse sasta design faisla kyun hai.
course: ch15
terms:
  - cascade | aisa design jo har request ko us sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf jo jaanch mein fail hota hai use agle, mehnge ke paas bhejta hai | cascades
---

Finance director ne ek number maanga, aur Anaya ne do diye, aur phir shaam yeh mehsoos karte hue bitayi ki usne galat wale diye the.

Yeh ek chhoti meeting thi, July ke pehle hafte ke ek Monday ko, ek aise kamre mein jahan se mithai ki dukaan ka shamiyana dikhta tha. Director ek sateek mahila thi jo fountain pen se likhti thi aur bahut kam bolti thi. Usne das minute plan suna tha. Phir usne pen ka dhakkan lagaya tha aur bina kisi dushmani ke poochha tha, "Ise chalane mein kitna kharcha aata hai? Mahine ke hisaab se, humare volume par."

"Lagbhag sattar hazaar rupaye," Anaya ne kaha. Usne use us subah ek price list se nikaala tha. "Lagbhag teevees paise ek message, teen lakh messages par."

"Yeh model call ka kharcha hai."

"Haan."

"Kya yeh system ka kharcha hai?"

Anaya ruki, utni der jitni der ek insaan ko yeh ehsaas hone mein lagti hai ki usne ek shabd laaparwahi se istemaal kiya. "Mujhe lagta hai mujhe pata karna hoga."

## Saral jod, aur woh kam kyun hai

Har cost case usi jod se shuru hota hai, aur woh sahi hai. Andar gaye tokens, andar ke prati token daam se guna, aur bahar aaye tokens, bahar ke prati token daam se guna. Saavdhaan judge ke liye ek saaf call ke liye, chhe sau tokens andar aur assi bahar, un kalpit daamon par jo saal bhar istemaal hue the, yeh teevees paise aaya.

Jod sahi hai. Jo galat hai woh woh cheez hai jis par ise laagu kiya gaya. Yeh ek saaf call ki keemat lagata hai, aur ek asli feature lagbhag kabhi ek saaf call nahi hota. Is tarah banaye gaye business cases aamtaur par teen se bees guna kam hote hain, aur wajahein hamesha wahi chaar hain, jinme se har ek se woh apne saal ke ek chapter mein mil chuki thi.

Pehli hai kitna bheja jaata hai. Jo system teen ki jagah aath text ke tukde laata hai woh har request par andar jaane wale ko lagbhag tigunaa kar deta hai. Guard kuch laata nahi tha. Lekin uska apna version tha: lambe messages ko tukdon mein kaatna padta tha, jaisa usne vasant mein dekha tha, aur do mein kata message padhne mein doguna kharcha karta tha. Chats ke namoone mein, ausat mein, ek message lagbhag savaa tukde ka tha.

Doosri hai retries. Jab ek jawaab jaanch mein fail hota hai aur use dobara maangna padta hai, toh poori request doosri baar bheji jaati hai. Imran ke logs ne dikhaya ki barah mein se lagbhag ek message dobara try hota tha.

Teesri hai kadam. Ek loop har daur mein poori baatcheet dobara bhejta hai, isliye chhe daur ek call ke chhe guna nahi, das guna ke qareeb padte hain. Saavdhaan judge ke liye, jo kabhi-kabhi ek order number dhoondhta tha, ek anishchit message mein lagbhag chaar daur lagte the, aur chaar daur ek call ke lagbhag saadhe paanch guna the.

Chauthi hai woh sochna jo user kabhi nahi dekhta. Reasoning model ka chhupa kaam output ki tarah charge hota hai, aur dikhne wale jawaab se aamtaur par kahin zyada hota hai. Saavdhaan judge ke liye yeh lagbhag chhe guna tha.

In sab mein se har ek ek chunav tha jo usne kiya tha, jiska matlab tha ki har ek ko badla ja sakta tha.

## Ek tool ke teen number

Us raat usne jod dobara, theek se, kiya, aur ek ki jagah teen jawaab paaye. Har ek sach tha. Woh teen alag tools ka vivaran dete the.

**Pehla woh tha jo usne diya tha.** Saavdhaan judge ko ek saaf call, teevees paise, teen lakh messages mein se har ek ke liye: mahine ke lagbhag unhattar hazaar rupaye. Yeh aise tool ki keemat thi jo tha hi nahi.

**Doosra woh tha jo hota agar guard aasaan tareeke se banaya jaata**, har message saavdhaan judge ko bheja jaata, lookups aur chhupi reasoning ke chaar daur se guzarte hue. Teevees paise guna rounds ke saadhe paanch, guna sochne ke chhe: lagbhag saadhe saat rupaye aur saath paise prati message. Unme se teen lakh: bais lakh assi hazaar rupaye mahine.

Usne doosre number ko kuch der dekha. Woh pehle se taintees guna tha. Woh, ek arth mein, aisi cheez thi jo ek team bina soche banaa hi leti.

**Teesra woh tha jo guard asal mein tha**, aur yahi wajah thi ki dibbon ka kram itna maayne rakhta tha. Pattern checker, jo har fixed shape ki cheez dhoondhta tha, ka kharcha bilkul nahi tha. Naam aur jagah dhoondhne wala ek chhota model tha, jiski keemat usne lagbhag chaar paise prati message lagayi, aur atirikt tukdon aur retries ke saath yeh paanch se thoda upar aaya. Sirf anishchit messages, har sau mein lagbhag chhe, kabhi saavdhaan judge tak pahunchte the, aur unke liye usne poore saadhe saat rupaye saath paise diye. Saadhe saat rupaye saath ka chhe percent chhiyaalees paise tha.

Paanch paise jodakar chhiyaalees: lagbhag ikyaavan paise prati message. Unme se teen lakh: ek lakh tirpan hazaar rupaye mahine.

| Design | Prati message | Prati mahine |
| --- | --- | --- |
| Ek saaf call, jaisa pehle quote kiya | 23 paise | lagbhag ₹69,000 |
| Sab kuch saavdhaan judge ko | lagbhag ₹7.60 | lagbhag ₹22.8 lakh |
| Guard jaisa bana, sasti dibbe pehle | lagbhag 51 paise | lagbhag ₹1.53 lakh |

Pehla number sach ke aadhe se kam tha. Doosra sach ka pandrah guna tha. Doosre aur teesre ke beech ka farak is baat ke siwa kuch nahi tha ki dibbe kis kram mein chalte the.

## Sasti cheez pehle

Us kram ka ek naam hai. *Cascade* har request ko us sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf jo jaanch mein fail hota hai use agle, mehnge ke paas bhejta hai. Guard ek cascade tha, aur use is roop mein paise bachane se alag wajah se banaya gaya tha: woh tez tha, aur usne saavdhaan judge ko un cases ke liye rakha jinhe kaam karke nikalna tha. Bachat bin bulaye saath aa gayi thi.

Imran ne, table padhte hue, kaha ki yeh woh sabse prabhaavshali cheez hai jo ek team kar sakti hai. Zyadatar asli requests saral hoti hain. Ek chhota model, ya guard ke mamle mein ek saada niyam, unhe achhe se sambhalta hai. Mehnga wala mushkil kuch ke liye rakha jaata hai.

Aur chaar cheezein thin, usne kaha, bachat ke lagbhag kram mein. Model chunna: ek provider ki range mein daam das ya sau guna alag hote hain, jo list mein kisi bhi cheez se zyada maayne rakhta hai. Kam bhejna: jo token nahi bheja jaata uska kuch kharcha nahi, aur behtar kram wali shortlist aapko kam tukde bhejne deti hai. Request ke na badalne wale aage ke hisse ko cache karna. Aur woh kaam karna jo raat bhar ruk sakta hai, kam daam par, batches mein. Anaya ne dekha ki saavdhaan judge ki doosri nazar, jo background mein chalti thi, batches mein ki ja sakti thi. Usne ise page par likh liya.

## Teen number, ek nahi

Jab woh Tuesday ko director ke paas wapas gayi, toh woh table aur ek vaakya lekar gayi jis par usne ek ghanta lagaya tha.

*Tool ka kharcha teen lakh messages par lagbhag ek lakh pachaas hazaar rupaye mahine hai, lagbhag ikyaavan paise prati message. Isme saavdhaan judge haavi hai, jo har sau mein chhe messages dekhta hai. Yeh number galat ho jayega agar woh chhe das se upar jaye, ya retries paanch mein ek se upar jaayein, ya provider apne daam badle.*

"Yeh woh number hai jiska main bachaav kar sakti hoon," director ne kaha.

"Iske saath do aur dene hain." Anaya ne yeh bhi Imran se seekha tha. Raftaar bhi ek kharcha hai. Ek sasta tool jo dheema hai utni hi poori tarah fail ho sakta hai jitna ek tez jo mehnga hai. Isliye usne kharche ke bagal mein report kiya ki ek message mein aamtaur par kitna samay laga, ek second ka ek chhota hissa, aur dheeme wale mein kitna laga, jo background mein jaate the. Woh teeno hamesha saath dengi. Ek akela ausat, usne kaha, dheeli poonchh ko chhupa dega.

Director ne pad par likha, jo woh kam hi karti thi. Phir usne woh sawaal poochha jiska Anaya ko pata tha ki aayega aur jiska uske paas jawaab nahi tha.

"Isse humein kya bachta hai?"

## Jod ka doosra aadha

Uske paas ek kharcha tha aur koi fayda nahi. Yahi dopahar ka asli mudda tha, aur use pet ke bhaaripan se pata tha.

Woh sawaal jo in zyadatar features ko tay karta hai uska tokens se koi lena-dena nahi. Yeh hai ki kya cheez scale par sahi baithti hai. Agar ek query ka kharcha teen rupaye hai aur woh jis value ko bachati hai woh do ki hai, toh koi tuning use nahi bachayegi. Usne pehle aadhe ki keemat saavdhaani se lagayi thi. Doosre ke liye uske paas koi number nahi tha. Sahaj ko kya kharcha padta tha jab ek pehchaan ka number leak ho jaata? Ek jaanch. Ek notice. Ek customer jo chala gaya. Ek regulator ka dhyaan, agar galat ho gaya. Uske paas koi figures nahi the, aur use shak tha ki kisi ke paas nahi the.

"Main pata karungi," usne director se kaha, "ya pata karungi ki kisi ko nahi pata. Aur main yeh kahungi."

"Yeh sweekaar hai," director ne kaha, aur pen par dhakkan wapas laga diya.

Bahar jaate hue Anaya ne specification mein ek line jodi, us section mein jisme woh sab tha jo use abhi nahi pata tha, aur use do baar underline kiya. *Ek leak ka kharcha kitna hai? Lakshmi se poochho.*

## Saath le jaane layak baatein

Saral kharche ka jod, tokens andar aur bahar guna unke daam, sahi hai aur aamtaur par teen se bees guna kam hota hai, kyunki yeh ek saaf call ki keemat lagata hai. Ek asli design ise guna karta hai har baar kitna bheja jaata hai, ek request kitni baar dobara try hoti hai, ek loop kitne daur leta hai, aur ek reasoning model kitna chhupa sochta hai, aur in sab mein se har ek ek design chunav hai jo badla ja sakta hai. Ek cascade, jo sabse sasta tareeka pehle chalata hai aur sirf failures ko mehnge tareeke ko deta hai, ek aise tool ke beech farak ban sakta hai jo ek lakh ka kharcha karta hai aur ek jo bees ka. Kharcha hamesha raftaar ke saath report hona chahiye, dheeme cases shaamil karke. Aur woh value jise woh bachata hai, uske bina kharcha sirf aadha jod hai.
