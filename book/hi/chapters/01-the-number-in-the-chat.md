---
title: Chat Mein Woh Number
summary: Ek product manager ko ek hafte ki customer chats mein pehchaan ke numbers milte hain, aur use tay karna hai ki is khoj par ek saal ka kaam banta hai ya nahi. Chapter mein personal data, faisle se pehle ginti, problems ke beech chunaav aur likhe hue decision ki baat hoti hai.
course: a1
goals:
  - personally identifiable information pehchaan paana, un details ko bhi jo sirf milkar kisi insaan ko pehchaanti hain
  - kisi andaaze ko ginti mein badalna, aur bata paana ki woh ginti kya dikhati hai aur kya nahi
  - alag-alag problems ko ek jaise chaar sawaalon par compare karna
  - ek decision ko uske saboot aur use palatne ki shartein ke saath likh kar rakhna
terms:
  - PII | personally identifiable information: koi bhi aisi detail jo ek asli insaan ki taraf ishaara kar sake, jaise naam, phone number ya pehchaan ka number | personally identifiable information, personal data
  - decision log | ek chalta hua page jismein aap har zaroori decision likhte hain, uske peeche ka saboot likhte hain, aur yeh bhi ki kya hone par aap apna mind badal denge | decision-log
---

March ke doosre hafte ki baat hai. Pune ki company Sahaj ki product manager Anaya Deshmukh ne company ke support chatbot aur customers ke beech ki 400 conversations padhin. Woh yeh samajhna chahti thi ki itne customers late fees ke baare mein kyun poochte hain.

Conversation number 61 mein ek customer ne 12 ank ka pehchaan ka number ek sentence ke beech mein type kar diya tha. Kisi ne use maanga bhi nahi tha. Shaam tak Anaya ko 400 mein se 37 conversations aisi mili, jinmein pehchaan ka number, tax number, bank account ya poora ghar ka pata tha.

Yeh chapter batata hai ki Anaya ne is khoj ke saath kya kiya. Ismein aap teen aadatein seekhenge, jin par poori kitaab tiki hai. Pehli, decision se pehle naapna. Doosri, problems ko ek jaise scale par compare karna. Teesri, decision ko aise likhna ki baad mein use badla ja sake. Saath hi kitaab ka pehla technical term bhi aayega, *personally identifiable information*.

## Case: ek hafte ki chats

Sahaj ka ek mobile app hai. Log usmein bijli ka bill bharte hain, aur pichhle saal se chhote loan ke liye apply bhi karte hain. App ke ek kone mein ek support chatbot hai, jo kisi bhi time sawaalon ke jawaab deta hai.

Support team ki lead Farah Sheikh ne ek hafte ki conversations Anaya ke liye export kar di thi. Company chahti thi ki April tak har product manager saal ka ek bada kaam propose kare. Anaya isliye chats padh rahi thi ki dekh sake, customers kahan atak rahe hain.

Conversation 61 kuch aisi dikhti thi.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

Aadhaar number woh pehchaan ka number hai jo sarkar residents ko deti hai. Woh card par 4-4 ankon ke groups mein chhapa hota hai, aur zyadatar adults ko pata hota hai ki unka card kahan rakha hai. Chatbot ne sirf mobile number poochha tha. Customer ne apni taraf se zyada keemti number de diya, shayad madad karne ke irade se.

Export mein aage Anaya ko ek PAN mila. PAN tax ka 10 akshar ka code hota hai, aur yeh delayed refund wale ek sentence ke beech capital letters mein type kiya gaya tha. Ek poora ghar ka pata mila. Aur ek bank passbook ki photo mili, jise chat window ne bina kisi warning ke le liya tha.

## Type kiya hua number kahan jaata hai

Hum aksar maan lete hain ki chat window mein type kiya number chat window mein hi rehta hai. Asal mein ek message kai jagah copy hota hai. Har jagah ka apna staff hota hai, apne backup hote hain, aur yeh tay karne ke apne rules hote hain ki kaun padh sakta hai. Sahaj mein ek message paanch jagah se guzra.

1. Support system, jo history store karta hai taaki agents use padh sakein.
2. Hafte ka export, jiske zariye numbers Anaya ke inbox tak pahunche.
3. Ek bahar ki company ka software, jo chatbot ke replies likhta hai.
4. Analytics dashboard, jo conversations ginta hai.
5. Woh logs, jo engineers tab padhte hain jab kuch toot jaata hai.

Matlab ek baar type kiya gaya number paanch jagah store hota hai, aur kam se kam do alag organisations ke paas.

::: def Personally identifiable information (PII)
Koi bhi aisi detail jo ek asli insaan ki taraf ishaara kar sake, akeli ho ya doosri details ke saath milkar. Test ek sawaal hai: kya yeh detail, baaki jo pata hai uske saath, ek insaan ko pehchaan sakti hai?
:::

Isi test se samajh aata hai ki PII sirf pehchaan ke numbers tak limited kyun nahi hai. Kuch details akeli hi kisi ko pehchaan deti hain. Kuch details sirf milkar pehchaanti hain. Aur group jitna chhota ho, milkar pehchaan utni hi pakki ho jaati hai.

Neeche ki table dekhiye. Dhyaan dijiye ki kaun si detail akeli kaafi hai aur kaun si nahi.

Table: Kuch aam details kisi insaan ko kitni achhi tarah pehchaanti hain
| Detail | Akeli pehchaanti hai? | Comment |
| --- | --- | --- |
| Aadhaar number | Haan | Ek resident ka apna number |
| Mobile number | Haan | Aam taur par ek hi subscriber, seedha contact ho sakta hai |
| Poora ghar ka pata | Aksar | Ek ghar ko pehchaanta hai, yaani aksar ek insaan ko |
| Umar | Nahi | Lakhon logon ki ek jaisi hoti hai |
| Gaon | Nahi | Saikdon logon ka ek hi hota hai |
| Umar, gaon aur peshaa | Aksar | 800 logon ke gaon mein 52 saal ki dentist shayad ek hi insaan hai |

Aakhri row sabse zaroori hai. Message se saare saaf numbers hata dene par bhi woh anonymous nahi ho jaata, kyunki bachi hui details ab bhi ek hi insaan ka naqsha kheench sakti hain. Chapter 28 aur 29 mein hum is baat par wapas aayenge, jab dekhenge ki company kisi bahar ki service ko kya bhej sakti hai. Is kitaab mein kuch bhi legal advice nahi hai.

## Andaaze se ginti tak

Yahan Anaya ke paas ek mazboot andaaza tha, lekin saboot koi nahi. Andaaza yeh tay karne mein kaam aata hai ki kahan dekhna hai. Par use koi aur check nahi kar sakta, aur use kisi doosre andaaze se tola bhi nahi ja sakta. Isliye Anaya ka pehla step tha use ginti mein badalna.

Usne spreadsheet mein ek column jodi, jiska heading tha "Kya yeh sirf ek insaan ki cheez hai?" Phir usne 400 conversations dobara padhin, har line ke neeche ek ruler rakhkar. Doosri baar padhne mein do ghante lage.

37 conversations mein kam se kam ek pehchaan ka number, tax number, bank account ya poora ghar ka pata tha. Yeh 9.25 percent hai, yaani lagbhag 11 mein se 1 conversation.

::: watch Ginti abhi finding nahi hai
Anaya ne figure ke saath uski limits likh di. Yeh ek hafte ka figure tha, ek hi chatbot ka, aur ek aise insaan ne gina tha jo bilkul isi cheez ko dhoondh raha tha. Doosra hafta, doosra padhne wala, ya "personal" ki badi definition, har ek alag number deti. Is figure se itna hi pata chala ki aur gehraai se dekhna chahiye. Isse koi conclusion nikalna sahi nahi tha.
:::

Number ke saath uski limits likhna is kaam ki ek achhi aadat hai. Jo figure apni limits ke bina ghoomta hai, use agli meetings mein apni haisiyat se zyada bharosa milne lagta hai.

## Teen problems mein se chunaav

Ab Anaya ke paas teen possible projects the. Pehla ek tool tha jo har hafte ke support tickets padhkar main themes bata de. Isse Farah ko Monday subah haath se sort karne ka kaam nahi karna padta. Doosra ek feature tha jo salary slips ki photos padhkar loan officers ki checking tez kar de.

Teesri problem chats wali thi, jo Anaya ne chuni nahi thi. Woh khud use mil gayi thi, aur Anaya ko isi baat par shak hua.

Usne teeno ko chaar sawaalon par parkha, jo lagbhag har proposal par lagte hain.

1. Kya koi aisa user hai jis tak woh isi hafte pahunch sakti hai?
2. Kya koi aisa kaam hai jo woh kisi ko karte hue dekh sakti hai?
3. Kya koi aisi takleef hai jise woh gin sakti hai?
4. Kya koi sach mein wajah hai ki text padhne wala software madad kare, aam software ke bajaye?

Table: Teeno candidates chaar sawaalon par
| | Hafte ke ticket themes | Salary-slip reader | Chats mein personal details |
| --- | --- | --- | --- |
| Aisa user jis tak isi hafte pahunch sake | Farah | Do loan officers | Farah, Imran, Lakshmi |
| Aisa kaam jo dekh sake | Har Monday | Ho sakta hai, arrange karna dheema | Transcripts uski screen par hain |
| Aisi takleef jo gin sake | Hafte mein 3 ghante | Har loan par kuch minute | 400 mein 37 |
| AI ki asli wajah | Shayad; tickets par pehle se tags hote hain | Haan, par kaagaz ki photos mushkil hoti hain | Kuch had tak |

Chautha sawaal sabse zyada imaandaari maangta hai. 4-4 ke groups mein likhe 12 ankon ko ek simple rule bhi dhoondh sakta hai: 12 ank dekho aur grouping check karo. Isme kisi intelligence ki zaroorat nahi.

Mushkil kahin aur hai. Log number hamesha waise nahi likhte jaise card par chhapa hota hai. Naam aur pate ka toh koi pattern hota hi nahi. Aur customers Hindi, English, aur dono ke us mix mein likhte hain jo raat ko phone ke keyboard par bharta hai. Ek rule problem ka ek hissa hal kar sakta tha, baaki ke liye kuch zyada flexible chahiye tha. Anaya ne dono hisse likh liye.

Product manager ke kaam ka ek hissa yeh bhi hai ki shuru mein hi bol de, "is problem ko artificial intelligence ki zaroorat nahi hai." Yeh baat zyada logon ko pasand nahi aati, lekin aksar sahi hoti hai. Yeh us paise ko bachati hai jo problem se zyada mushkil solution par kharch ho jaata.

Teesra option jeeta, par bahut kam farq se. Uski khoobi yeh thi ki Anaya uske column ke har cell ke liye apna kaam dikha sakti thi.

## Decision likh kar rakhna

Chunne ke baad Anaya ne ek naya document khola aur decision ko ek tay format mein likha: date, decision, uska saboot, aur woh halaat jinmein woh decision palat degi. Is tarah ke page ko *decision log* kehte hain.

::: example Anaya ke decision log ki pehli entry
```
14 March
Decision:  Work on the personal-details problem first. Ticket themes second.
Evidence:  37 of 400 conversations in one week contained an identity number,
           a tax number, a bank account or a full address. My count; Farah
           can check it.
I would change my mind if:  Lakshmi says this is a known, accepted risk, or
           Imran says it cannot be fixed without rebuilding the chatbot.
```
:::

Log ki asli keemat aakhri line mein hai. Jis decision mein nikalne ka koi raasta likha nahi hota, woh dheere-dheere ek belief ban jaata hai. Phir use lene wale log apne maan ke liye uska bachaav karne lagte hain.

Jo decision apne palatne ki shart khud likhta hai, use shaanti se dobara kholna asaan hota hai. Kyunki poochhne wala sawaal pehle se likha hua hai.

## Khud ko naapna

Shaam ka aakhri kaam bhi saboot likhne ki isi aadat se nikla. Anaya ne product ke saat areas mein apni khud ki skills ko score kiya.

Woh saat areas yeh the: logon se baat karke asli problems dhoondhna, unmein se chunna, technology ko itna samajhna ki engineers se behas kar sake, decision ko aisi cheez mein badalna jise doosre bana sakein, results naapna, yeh dekhna ki product apna kharcha nikaal sakta hai ya nahi, aur alag-alag goals wale logon ko saath chalana.

Table: Har area ke liye istemaal hui scale
| Score | Matlab |
| --- | --- |
| 0 | Dikhane ko kuch nahi |
| 1 | Koshish ki, par saabit nahi kar sakte |
| 2 | Kaam ka aisa kaam jise koi aur check kar sake |
| 3 | Asli logon ya asli data par aazmaya gaya, aur limits likhi hui |

Problems dhoondhne ko usne 2 diya, kyunki ab uske paas ek ginti thi. Strategy ko 1 diya, kyunki uski kisi strategy par kisi colleague ne kabhi amal nahi kiya tha.

Technology samajhne ko pehle 1 diya, phir use kaata aur ek kam, zyada imaandaar number likha. Woh meeting mein keh sakti thi ki chatbot AI se chalta hai. Lekin yeh sentence woh ek jigyaasu 12 saal ke bachche ko samjha nahi sakti thi.

Yeh scores uske notes mein rahenge, aur kitaab ke ant mein dobara dekhe jaayenge. Page ke sabse upar uska apna rule likha tha: jab tak koi aur check na kar sake, tab tak kuch bhi count nahi hota.

Jaane se pehle usne lead engineer Imran Qureshi ko likha aur agle din ek ghante ka time maanga. Problem ka kitna hissa saadharan engineering hai aur kitna kuch naya, yeh Imran ki madad se hi tay hota. Yahin se agla chapter shuru hota hai.

## Saaraansh

Type kiya hua number us har system mein copy ho jaata hai jo conversation ko chhuta hai. Isliye ek entry ek se zyada organisations ke paas kai stored copies ban jaati hai.

- PII woh koi bhi detail hai jo ek asli insaan ki taraf ishaara kar sakti hai, akeli ya milkar. Jo details alag-alag nirdosh lagti hain, woh jud kar kisi ko pehchaan sakti hain.
- Andaaza tab kaam ka banta hai jab use ginti mein badla jaaye, aur ginti ko uski limits ke saath bataya jaaye: sample, padhne wala aur definition.
- Alag-alag problems ko ek jaise chaar sawaalon par compare kiya jaata hai: pahunch mein aane wala user, dekha ja sakne wala kaam, gini ja sakne wali takleef, aur AI ki asli wajah.
- Decision log mein date, decision, saboot aur raasta badalne ki shartein likhi jaati hain.
- Ek tay scale par khud ko score karna ek aisi starting line deta hai jise baad mein dobara check kiya ja sakta hai.
