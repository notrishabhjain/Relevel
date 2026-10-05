---
title: Asal Mein Kitna Kharcha Hota Hai
summary: Finance director ko "yeh tokens par nirbhar hai" jawaab nahi hota. Product manager guard ki sahi keemat lagati hai, ek hi tool ke teen bahut alag totals dekhti hai, aur samajhti hai ki guard ke hisse kis kram mein chalte hain yeh sabse sasta design faisla hai. Chapter cascade samjhata hai.
course: ch15
goals:
  - samjhana ki saadhaaran kharche ka hisaab aam taur par kam kyun hota hai
  - ek asli design jo chaar guna jodta hai unki list banana, aur batana ki har ek ek chunaav kyun hai
  - ek hi tool ke teen designs ki tulna karna aur samjhana ki cascade kya bachata hai
  - kharche ko speed ke saath report karna, aur batana ki jis value ko woh bachata hai uske bina kharche ka figure kya chhodta hai
terms:
  - cascade | aisa design jo har request ko us sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf jo jaanch mein fail hota hai use agle, mehnge ke paas bhejta hai | cascades
---

July ke pehle hafte mein Anaya ne Sahaj ki finance director ko guard ka plan diya. Woh ek sateek mahila thi jo fountain pen se likhti thi aur bahut kam bolti thi. Das minute baad director ne pen ka dhakkan lagaya aur poochha ki company ki maatra par guard ko chalane mein mahine ka kitna kharcha hoga. Anaya ne jawaab diya ki lagbhag sattar hazaar rupaye: lagbhag teis paise ek message, teen lakh messages par.

"Yeh model call ka kharcha hai," director ne kaha. "Kya yeh system ka kharcha hai?" Anaya ek pal ruki, utni der jitni der mein koi samajhta hai ki usne ek shabd laparwaahi se istemaal kiya, aur kaha ki use jaanna padega. Yeh chapter batata hai ki use kya mila.

## 26.1 Case: ek number maanga gaya, do diye

Anaya ne director ko do figure diye the, ek message ka kharcha aur ek mahine ka kul, aur shaam woh yeh mehsoos karte hue bitayi ki woh galat do the. Neeche ke section unhe dobara ginte hain.

## 26.2 Saadhaaran hisaab, aur woh kam kyun hai

Har kharche ka case ek hi hisaab se shuru hota hai, aur woh sahi hai: tokens in guna token in ka daam, jod tokens out guna tokens out ka daam. Saavdhaan judge ko ek saaf call ke liye, chhe sau token andar aur assi bahar, saal bhar istemaal hue kalpanik daamon par, woh teis paise aaya.

Galti us cheez mein hai jis par hisaab lagaya jaata hai. Woh ek saaf call ka daam lagata hai, aur ek asli feature lagbhag kabhi ek saaf call nahi hoti. Is tarah bane business cases aam taur par teen se bees guna kam hote hain, chaar kaaranon se jinhe Anaya pichhle chapters mein mil chuki thi.

Table: Chaar guna jo saadhaaran hisaab chhod deta hai
| Gunak | Kyun maayne rakhta hai | Guard ka figure |
| --- | --- | --- |
| Kitna bheja jaata hai | Teen ke bajaye aath tukde bhejne se input lagbhag teen guna ho jaata hai. Guard kuch laata nahi tha, par lambe messages ko tukdon mein kaatna padta tha, aur do mein kata message padhne mein doguna mehnga hai | Ek message ka ausat lagbhag savaa tukda tha |
| Retries | Jab koi jawaab jaanch mein fail hota hai aur dobara maanga jaata hai, toh poori request doosri baar bheji jaati hai | Barah mein se ek message dobara bheja gaya |
| Kadam | Loop har round par poori baatcheet dobara bhejta hai, isliye chhe round chhe nahi balki ek call ke das guna ke paas pade | Ek shak wale message ke lagbhag chaar round lage, yaani ek call ka lagbhag saadhe paanch guna |
| Chhupi sochna | Reasoning model ka kaam output ki tarah charge hota hai, aur dikhne wale jawaab se aam taur par bahut zyada hota hai | Saavdhaan judge ke liye lagbhag chhe guna |

In mein se har ek Anaya ka kiya hua chunaav tha, jiska matlab tha ki har ek ko badla ja sakta tha.

## 26.3 Ek tool ke liye teen number

Us raat usne hisaab dobara kiya aur ek ki jagah teen jawaab aaye. Har ek sach tha, aur woh teen alag tools ka varnan karte the.

Pehla woh figure tha jo usne diya tha: saavdhaan judge ko ek saaf call teis paise par, teen lakh messages mein se har ek ke liye, yaani lagbhag ₹69,000 mahine. Yeh us tool ka daam tha jo tha hi nahi.

Doosra woh guard tha jo aasaan tareeke se banaya gaya, har message saavdhaan judge ko bheja jaata aur chaar rounds ke look-ups aur chhupe reasoning se guzarta. Teis paise, saadhe paanch guna rounds ke liye, chhe guna sochne ke liye, lagbhag ₹7.60 ek message, yaani ₹22.8 lakh mahine. Yeh pehle figure se tetees guna hai. Yeh aisi cheez bhi hai jo ek team banati agar usne is par socha na hota.

Teesra woh guard tha jaisa woh asal mein tha. Pattern checker, jo fixed shakl wali har cheez dhoondhta tha, ka kuch kharcha nahi tha. Naam aur jagah ka finder ek chhota model tha, jiska daam ek message par lagbhag chaar paise tha, aur extra tukdon aur retries ke saath woh paanch se thoda upar pahunchta tha. Sirf shak wale messages, sau mein lagbhag chhe, saavdhaan judge tak pahunchte the, aur unke liye woh poora ₹7.60 deti thi. ₹7.60 ka chhe percent chhiyaalis paise hai. Paanch paise aur chhiyaalis paise milkar lagbhag ikyaavan paise ek message, yaani ₹1.53 lakh mahine.

Table: Ek hi tool ke teen designs
| Design | Ek message | Ek mahina |
| --- | --- | --- |
| Ek saaf call, jaisa pehle bataya | 23 paise | lagbhag ₹69,000 |
| Sab kuch saavdhaan judge ko | lagbhag ₹7.60 | lagbhag ₹22.8 lakh |
| Guard jaisa banaya gaya, sasti cheezein pehle | lagbhag 51 paise | lagbhag ₹1.53 lakh |

Pehla figure sach se aadhe se kam tha, aur doosra sach se pandrah guna zyada. Doosre aur teesre ke beech ka antar kuch nahi tha siwaye us kram ke jisme hisse chalte the.

## 26.4 Pehle sasti cheez

Us kram ka ek naam hai. *Cascade* har request ko pehle us sabse sasti cheez ke paas bhejta hai jo kaam kar sakti hai, aur sirf jo jaanch mein fail hota hai use agle, mehnge ke paas bhejta hai. Guard ek cascade tha, ek alag kaaran se banaya gaya, jo raftaar thi aur saavdhaan judge ko un cases ke liye rakhna jinhe nikaalna padta tha. Bachat bina bulaye saath aa gayi.

::: key Cascades kyun kaam karte hain
Zyadatar asli requests saadhaaran hoti hain. Ek chhota model, ya guard mein ek saadha rule, unhe achhe se sambhaal leta hai. Mehnga wala mushkil kuch ke liye rakha jaata hai. Imran ne ise kharche ke baare mein team ke karne wali sabse prabhaavi cheez kaha.
:::

Usne chaar aur upaay ginaye, bachat ke lagbhag kram mein.

Table: Kharcha ghatane ke aur tareeke, bachat ke lagbhag kram mein
| Upaay | Tippani |
| --- | --- |
| Model chuno | Ek hi provider ki range mein daam das ya sau guna alag hote hain, jo is list ki kisi bhi cheez se zyada maayne rakhta hai |
| Kam bhejo | Jo token nahi bheja jaata uska kuch kharcha nahi, aur behtar kram ki shortlist kam tukde bhejne deti hai |
| Request ke ek jaise aage ke hisse ko cache karo | Wahi shuruaat, sasta bill |
| Jo kaam intezaar kar sakta hai woh karo | Raat bhar, batches mein kiya kaam sasta hota hai. Saavdhaan judge ki doosri nazar, jo pehle se background mein chalti thi, batch ki ja sakti thi |

## 26.5 Ek nahi, teen number

Mangalwar ko Anaya table aur ek bayaan ke saath director ke paas lauti jo usne ek ghante mein likha tha. Tool teen lakh messages par mahine mein lagbhag ek lakh pachaas hazaar rupaye mein padta hai, lagbhag ikyaavan paise ek message. Kharcha saavdhaan judge se tay hota hai, jo sau mein se chhe messages dekhta hai. Figure galat hai agar yeh chhe se badhkar das se upar chala jaaye, agar retries paanch mein se ek se upar jaayein, ya agar provider apne daam badal de. Director ne kaha ki woh us number ka bachaav kar sakti hai.

Anaya ne joda ki speed bhi ek kharcha hai, kyunki ek sasta tool jo dheema hai woh utni hi poori tarah fail ho sakta hai jaise ek tez tool jo mehnga hai. Woh hamesha teen cheezein saath report karegi: kharcha, ek message mein aam taur par kitna samay laga, jo ek second ka chhota hissa tha, aur dheeme messages mein kitna laga, jo background mein jaate the. Ek akela average dheemi poonchh ko chhupa dega.

## 26.6 Hisaab ka doosra hissa

Director ne phir poochha ki tool kya bachata hai, aur Anaya ke paas jawaab nahi tha. Uske paas ek kharcha tha aur koi phayda nahi, jo us dopahar ka asli maksad tha. Jo sawaal zyadatar aise features ko tay karta hai uska tokens se koi lena-dena nahi hai. Woh yeh hai ki kya feature bade paimaane par maayne rakhta hai. Agar ek query ka kharcha teen rupaye hai aur jo value woh bachati hai woh do hai, toh koi bhi tuning use nahi bachayegi.

Usne pehle hisse ka daam saavdhaani se lagaya tha aur doosre ke liye uske paas koi number nahi tha. Sahaj ko tab kitna kharcha hota hai jab ek pehchaan ka number leak ho jaata hai? Ek jaanch hogi, ek notice, shayad ek customer jo chala jaye, aur ek regulator ka dhyaan agar baat bigad jaaye. Uske paas koi figure nahi the aur use shak tha ki kisi ke paas nahi honge. Usne director se kaha ki woh pata lagayegi, ya pata lagayegi ki kisi ko nahi pata, aur yeh bata degi. Director ne yeh maan liya aur pen par dhakkan wapas lagaya. Anaya ne specification mein jo abhi jaana nahi gaya uske section mein ek line joda: ek leak ki keemat kya hai, aur Lakshmi se poochho.

## Saaraansh

Saadhaaran kharche ka hisaab, tokens in aur out guna unke daam, sahi hai aur aam taur par teen se bees guna kam hai, kyunki woh ek saaf call ka daam lagata hai.

- Ek asli design ise guna karta hai har baar kitna bheja jaata hai, kitni baar request retry hoti hai, loop kitne round leta hai aur reasoning model kitna chhupa sochta hai. Har ek design ka ek chunaav hai aur badla ja sakta hai.
- Cascade sabse sasta tareeka pehle chalata hai aur sirf failures ko mehnge ke paas bhejta hai. Woh us tool mein jo ek lakh ka padta hai aur jo bees lakh ka padta hai, in dono mein antar la sakta hai.
- Kharcha speed ke saath report hona chahiye, dheeme cases ke saath bhi.
- Jis value ko woh bachata hai uske bina kharcha sirf aadha hisaab hai.
