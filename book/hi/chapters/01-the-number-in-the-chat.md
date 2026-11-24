---
title: Chat Mein Woh Number
summary: Ek product manager ko ek hafte ki customer chats mein pehchaan ke numbers milte hain. Use tay karna hai ki yeh ek saal ke kaam ke layak hai ya nahi. Aap seekhte hain ki personal data kya hai. Aap seekhte hain ki faisle se pehle ginti kyun karte hain, problems mein se kaise chunte hain, aur decision kaise likhte hain.
course: a1 a1g
goals:
  - aisi personal details pehchaanna jo ek insaan ki taraf ishaara karti hain, bhale hi woh milkar hi aisa karein
  - ek andaaze ko ginti mein badalna, aur bata paana ki ginti kya dikhati hai aur kya nahi
  - problems ko ek jaise chaar sawaal poochh kar compare karna
  - ek decision ko saboot ke saath likhna, aur woh baatein bhi jinse aap use badal denge
terms:
  - PII | kisi ki diary ka ek panna. Koi bhi aisi detail jo ek asli insaan ki taraf ishaara kar sake, jaise naam, phone number ya pehchaan ka number | personally identifiable information, personal data
  - decision log | bade faislon ki diary. Ek page jismein aap har bada decision, uska saboot, aur woh baat likhte hain jisse aap apna mind badal denge | decision-log
  - repository | ek almaari jo aapke notes ki har purani copy sambhalti hai. GitHub jaisi site par ek online folder, jismein project ka kaam aur uska har purana version rehta hai | repositories
---

March ke doosre hafte mein Anaya Deshmukh 400 conversations lekar baithi. Woh Pune ki company Sahaj mein product manager hai. Product manager tay karta hai ki company ko aage kya banana chahiye. Yeh conversations customers aur company ke support chatbot ke beech ki thin. Chatbot ek madadgaar hai jo type karke jawaab deta hai. Anaya jaanna chahti thi ki itne customers late fees ke baare mein kyun poochhte hain.

Conversation number 61 mein ek customer ne 12 ank ka pehchaan ka number type kar diya tha. Woh ek sentence ke beech mein tha. Kisi ne use maanga nahi tha. Shaam tak Anaya ko 400 mein se 37 conversations mili, jinmein koi nijee cheez thi. Woh pehchaan ka number, tax number, bank account ya poora ghar ka pata thi.

Yeh chapter batata hai ki Anaya ne aage kya kiya. Aap teen aadatein seekhenge. Poori kitaab inhi par tiki hai. Pehli, decision se pehle naapna. Doosri, problems ko ek hi tareeke se compare karna. Teesri, decision ko aise likhna ki baad mein use badla ja sake. Aap kitaab ka pehla technical term bhi seekhenge. Woh hai *personally identifiable information*.

## Case: ek hafte ki chats

Sahaj ka ek mobile app hai. Log usmein bijli ka bill bharte hain. Pichhle saal se woh chhote loan ke liye apply bhi kar sakte hain. App ke ek kone mein ek support chatbot hai. Woh kisi bhi time sawaalon ka jawaab deta hai. Yeh ek aise help desk jaisa hai jo kabhi band nahi hota.

Farah Sheikh support team ki lead hai. Usne ek hafte ki chatbot conversations ek file mein save kin. Woh file usne Anaya ko bhej di. Anaya ko yeh file ek wajah se chahiye thi. April tak Sahaj ke har product manager ko saal ka ek bada kaam sujhana tha. Anaya chats isliye padh rahi thi ki dekh sake, customers kahan atak rahe hain.

Conversation 61 kuch aisi dikhti thi.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

Aadhaar number woh pehchaan ka number hai jo Bharat sarkar har resident ko deti hai. Woh card par 4-4 ankon ke groups mein chhapa hota hai. Zyadatar adults ko pata hota hai ki unka card kahan rakha hai. Chatbot ne sirf mobile number poochha tha. Customer ne apni taraf se zyada keemti number de diya. Shayad woh madad karna chahta tha.

File mein aage Anaya ko aur cheezein mili. Ek PAN mila. PAN tax ka 10 akshar ka code hota hai. Woh late refund wale ek sentence ke beech capital letters mein likha tha. Ek poora ghar ka pata mila. Aur ek bank passbook ki photo mili. Passbook woh chhoti kitaab hai jismein aapke bank account ka hisaab likha hota hai. Chat window ne photo bina kisi warning ke le li thi.

## Type kiya hua number kahan jaata hai

Hum aksar maan lete hain ki chat window mein type kiya number wahin rehta hai. Aisa nahi hota. Ek busy office ki photocopy machine ke baare mein sochiye. Ek panna andar jaata hai. Kai copies bahar aati hain. Har copy alag-alag drawer mein jaati hai. Har drawer ka apna staff hota hai, apne backup hote hain (kuch kho jaaye toh bachi hui spare copies), aur apne rules hote hain ki kaun padh sakta hai.

Sahaj mein ek message paanch aise drawers se guzra.

1. Support system, jo history rakhta hai taaki agents use padh sakein.
2. Hafte ka export (data ki copy ko file mein nikaalna), jiske zariye numbers Anaya ke inbox tak pahunche.
3. Ek bahar ki company (vendor) ka software, jo chatbot ke replies likhta hai.
4. Analytics dashboard (numbers ki ek screen), jo conversations ginta hai.
5. Logs (computer ki chalti hui diary), jo engineers tab padhte hain jab kuch toot jaata hai.

Matlab ek baar type kiya gaya number paanch jagah store hota hai. Kam se kam do alag companies ke paas uski copy hoti hai.

Ab kisi insaan ki diary ke baare mein sochiye. Usmein ek hi insaan ki cheezein hoti hain. Kaun padhe, yeh sirf wahi tay karta hai. Yeh numbers us diary se phaade gaye pannon jaise hain. Ab hum inhe ek naam de sakte hain. Customer data par kaam karne wale har insaan ko yeh naam aana chahiye.

::: def Personally identifiable information (PII)
Kisi ki diary ke ek panne jaisa. PII koi bhi aisi detail hai jo ek asli insaan ki taraf ishaara kar sake. Woh akeli ho sakti hai, ya doosri details ke saath mili hui. Test ek sawaal hai. Kya yeh detail, baaki jo pata hai uske saath, bata sakti hai ki ek insaan kaun hai?
:::

Is test se samajh aata hai ki PII sirf saaf pehchaan ke numbers tak limited kyun nahi hai. Kuch details akeli hi kisi insaan ki taraf ishaara kar deti hain. Kuch details sirf group mein aisa karti hain. Group jitna chhota, ishaara utna hi pakka. School ki ek class ke baare mein sochiye. "Ek ladki" se koi nahi milta. "Peechhe baithne wali, hari dress pehne, bansuri bajane wali ladki" se ek bachchi mil jaati hai. Neeche ki table batati hai ki yeh kaise hota hai. Aakhri row ko sabse dhyaan se dekhiye.

Table: Kuch aam details kisi insaan ko kitni achhi tarah pehchaanti hain
| Detail | Akeli pehchaanti hai? | Comment |
| --- | --- | --- |
| Aadhaar number | Haan | Ek resident ka apna number |
| Mobile number | Haan | Aam taur par ek hi subscriber, seedha contact ho sakta hai |
| Poora ghar ka pata | Aksar | Ek ghar ko pehchaanta hai, yaani aksar ek insaan ko |
| Umar | Nahi | Lakhon logon ki ek jaisi hoti hai |
| Gaon | Nahi | Saikdon logon ka ek hi hota hai |
| Umar, gaon aur peshaa | Aksar | 800 logon ke gaon mein 52 saal ki dentist shayad ek hi insaan hai |

Asli kaam mein aakhri row sabse zaroori hai. Aap message se har saaf number hata sakte hain. Phir bhi woh anonymous nahi hota. Bachi hui details ek hi insaan ka naqsha kheench sakti hain. Chapter 28 aur 29 mein hum is par wapas aayenge. Wahan dekhenge ki company kanoon ke hisaab se kisi bahar ki service ko kya bhej sakti hai. Is kitaab mein kuch bhi legal advice nahi hai.

## Andaaze se ginti tak

Yahan Anaya ko pakka lag raha tha ki kuch galat hai. Par uske paas saboot nahi tha. Andaaza yeh tay karne mein madad karta hai ki kahan dekhna hai. Par use koi aur check nahi kar sakta. Use kisi doosre andaaze se tola bhi nahi ja sakta. Yeh waisa hai jaise kehna "yeh thaila bhaari lag raha hai". Taraazu kehta hai "chaar kilo". Isliye Anaya ka pehla step tha andaaze ko ginti mein badalna.

Usne spreadsheet mein ek column jodi. Uska heading tha "Kya yeh sirf ek insaan ki cheez hai?" Phir usne 400 conversations dobara padhin. Har line ke neeche woh ek ruler rakhti gayi. Doosri baar padhne mein do ghante lage.

37 conversations mein kam se kam ek pehchaan ka number, tax number, bank account ya poora ghar ka pata tha. Yeh 9.25 percent hai. Yaani lagbhag 11 mein se 1 conversation.

::: watch Ginti abhi finding nahi hai
Anaya ne number ke bilkul paas uski limits likh di. Yeh number sirf ek hafte ka tha. Sirf ek chatbot ka tha. Use ek hi insaan ne gina tha, aur woh bilkul isi cheez ko dhoondh rahi thi. Doosra hafta, doosra padhne wala, ya "personal" ka bada matlab, har ek alag number deta. Yeh number aur gehraai se dekhne ki achhi wajah tha. Isse koi conclusion nikalne ki wajah nahi banti thi.
:::

Number ke saath uski limits likhiye. Yeh ek achhi aadat hai. Jo number apni limits ke bina ghoomta hai, use agli meetings mein haisiyat se zyada bharosa milne lagta hai.

## Teen problems mein se chunaav

Ab Anaya ke paas teen possible projects the. Ek rasoiye ke baare mein sochiye jiske paas teen bhookhe mehmaan hain aur ek hi chulha. Woh pehle sirf ek dish bana sakta hai.

Pehla ek tool tha jo har hafte ke support tickets padhe (customers ki likhi shikayatein aur sawaal). Woh main themes bata deta. Isse Farah ko Monday subah haath se sort karne ka kaam nahi karna padta. Doosra ek feature tha jo salary slips ki photos padhe. Isse loan officers ki checking tez ho jaati.

Teesri problem chats wali thi. Anaya ne use chuna nahi tha. Woh khud use mil gayi thi. Anaya ne ise us par shak karne ki wajah maana.

Teeno ko seedhe tareeke se parakhne ke liye usne chaar sawaal use kiye. Yeh lagbhag har proposal par lagte hain.

1. Kya koi aisa user hai jis tak woh isi hafte pahunch sakti hai?
2. Kya koi aisa kaam hai jo woh kisi ko karte hue dekh sakti hai?
3. Kya koi aisi takleef hai jise woh gin sakti hai?
4. Kya koi sach mein wajah hai ki text padhne wala software madad kare, aam software nahi?

Table ko ek-ek column karke padhiye. Dekhiye ki usne har cell mein kya likha.

Table: Teeno candidates chaar sawaalon par
| | Hafte ke ticket themes | Salary-slip reader | Chats mein personal details |
| --- | --- | --- | --- |
| Aisa user jis tak isi hafte pahunch sake | Farah | Do loan officers | Farah, Imran, Lakshmi |
| Aisa kaam jo dekh sake | Har Monday | Ho sakta hai, arrange karna dheema | Transcripts uski screen par hain |
| Aisi takleef jo gin sake | Hafte mein 3 ghante | Har loan par kuch minute | 400 mein 37 |
| AI ki asli wajah | Shayad; tickets par pehle se tags hote hain | Haan, par kaagaz ki photos mushkil hoti hain | Kuch had tak |

Chautha sawaal sabse zyada imaandaari maangta hai. Aadhaar number ke baare mein sochiye. Usmein 12 ank hote hain, 4-4 ke groups mein. Isliye ek seedha rule use dhoondh sakta hai. 12 ank dekho aur groups check karo. Isme kisi intelligence ki zaroorat nahi.

Mushkil kahin aur hai. Log number hamesha waise nahi likhte jaise card par chhapa hota hai. Naam aur pate ka koi pattern hota hi nahi. Customers Hindi mein likhte hain, English mein likhte hain, aur dono ke us mix mein bhi jo raat ko phone ke keyboard par bharta hai. Ek rule problem ka ek hissa hal kar sakta tha. Baaki ke liye kuch zyada lacheela chahiye tha. Anaya ne dono hisse likh liye.

Product manager ke kaam ka ek hissa yeh hai ki shuru mein hi keh de, "is problem ko artificial intelligence ki zaroorat nahi hai." Yeh kehna kam logon ko pasand aata hai. Par yeh aksar sahi hota hai. Isse woh paisa bachta hai jo problem se bade hal par kharch ho jaata. Ek thaila uthane ke liye truck mat kharidiye.

Teesra option sabse upar aaya, par bahut kam farq se. Uski asli khoobi yeh thi ki Anaya uske column ke har cell ke liye apna kaam dikha sakti thi.

## Decision likh kar rakhna

Chunne ke baad Anaya ne ek naya document khola. Usne choice ko ek tay format mein likha. Usmein date thi, decision tha, saboot tha, aur woh halaat the jinmein woh decision palat degi. Is tarah rakhe gaye page ko *decision log* kehte hain. Ise faisle ka recipe card samjhiye. Usmein likha hota hai ki aapne kya pakaya, kyun, aur kab use alag tarah se pakaayenge.

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

Log ko kaam ka banane wali cheez aakhri line hai. Jis decision se nikalne ka koi raasta nahi hota, woh dheere-dheere ek belief ban jaata hai. Phir use lene wale log apne maan ke liye uska bachaav karne lagte hain. Jo decision apne palatne ki shartein khud likhta hai, use shaanti se dobara khola ja sakta hai. Poochhne wala sawaal pehle se likha hua hai.

Anaya ne yeh page apne laptop par nahi rakha. Imran ne use woh jagah dikhayi jahan engineers apna kaam rakhte the. Woh GitHub par ek *repository* thi. Repository ek online folder hota hai jo har file ka har version yaad rakhta hai. Yeh ek almaari jaisa hai jo aapke notes ki har purani copy sambhal kar rakhti hai.

Har baar badlaav save karte waqt woh ek line likhti. Usmein hota ki kya badla aur kyun. Purana version naye ke saath hi rehta. Wahan rakha decision log chupchaap apna mann nahi badal sakta. Har purana version kisi ke bhi padhne ke liye wahin rehta hai.

## Khud ko naapna

Us shaam ek kaam aur tha. Woh bhi saboot likhne ki isi aadat se nikla. Anaya ne product ke kaam ke saat areas mein apni skills ko khud score kiya. Yeh waisa hai jaise exam se pehle apni hi marksheet jaanch lena, baad mein nahi.

- Logon se baat karke asli problems dhoondhna.
- Tay karna ki kaun si problems solve karni hain.
- Technology ko itna samajhna ki engineers se behas kar sake.
- Decision ko aisi cheez mein badalna jise doosre bana sakein.
- Results naapna.
- Yeh dekhna ki product apna kharcha nikaal sakta hai ya nahi.
- Alag-alag goals wale logon ko saath chalana.

Har area ke liye usne ek simple scale use ki, jo neeche di hai.

Table: Har area ke liye istemaal hui scale
| Score | Matlab |
| --- | --- |
| 0 | Dikhane ko kuch nahi |
| 1 | Koshish ki, par saabit nahi kar sakte |
| 2 | Kaam layak kaam jise koi aur check kar sake |
| 3 | Asli logon ya asli data par aazmaya gaya, aur limits likhi hui |

Problems dhoondhne ko usne 2 diya, kyunki ab uske paas ek ginti thi. Strategy ko usne 1 diya (strategy yaani company ko kahan jaana chahiye, yeh chunna). Uski kisi strategy par kisi colleague ne kabhi amal nahi kiya tha.

Dono scores ke peeche ek kahani thi. Sahaj se pehle Anaya ne ek state electricity company ke bill-payment system ka rollout chalaya tha. Rollout yaani naye system ko uske users tak pahunchane ka plan. Usmein dates thi, status reports thi, aur senior officials ke saath mahine ki meeting thi. Woh project manager thi, aur achhi thi. Project manager dekhta hai ki train time par chhute. Product manager tay karta hai ki train kahan jaani chahiye. "Decision ko aisi cheez mein badalna jise doosre bana sakein" ke liye usne khud ko 3 diya. Par us project par kisi ne use nahi poochha tha ki rollout ko kaun si problem solve karni chahiye. Woh uske aane se pehle hi tay ho chuka tha.

Technology samajhne ke liye usne pehle 1 likha. Phir use kaata aur ek kam, zyada imaandaar number likha. Woh meeting mein keh sakti thi ki chatbot AI se chalta hai. Par yeh sentence woh ek jigyaasu 12 saal ke bachche ko samjha nahi sakti thi.

Yeh scores uske notes mein rahenge. Woh kitaab ke ant mein unhe dobara dekhegi. Page ke sabse upar uska apna rule likha tha, aur woh chhota tha: jab tak koi aur check na kar sake, tab tak kuch bhi count nahi hota.

Jaane se pehle usne lead engineer Imran Qureshi ko likha. Lead engineer woh hai jo software banane ka zimma sambhalta hai. Usne agle din ek ghante ka time maanga. Problem ka kitna hissa saadharan engineering hai aur kitna kuch naya? Is sawaal mein Imran madad kar sakta tha. Agla chapter yahin se shuru hota hai.

## Saaraansh

Photocopy machine yaad kijiye. Type kiya hua number us har system mein copy ho jaata hai jo conversation ko chhuta hai. Isliye ek entry ke kai stored copies ban jaate hain. Woh ek se zyada companies ke paas hote hain.

- PII woh koi bhi detail hai jo ek asli insaan ki taraf ishaara kar sakti hai, akeli ya group mein. Jo details akeli nirdosh lagti hain, woh jud kar kisi ko pehchaan sakti hain.
- Andaaza tab kaam ka banta hai jab aap use ginti mein badalte hain. Ginti ko uski limits ke saath batayiye: sample, padhne wala, aur jo matlab aapne use kiya.
- Problems ko ek jaise chaar sawaal poochh kar compare kijiye: pahunch mein aane wala user, dekha ja sakne wala kaam, gini ja sakne wali takleef, aur AI ki asli wajah.
- Decision log mein date, decision, saboot aur raasta badalne ki shartein likhi jaati hain.
- Ek tay scale par khud ko score karna ek aisi starting line deta hai jise baad mein dobara check kiya ja sakta hai.
