---
title: Chat Mein Woh Number
summary: Ek product manager ko ek hafte ki customer chats mein pehchaan ke numbers milte hain, aur use tay karna hai ki yeh khoj ek saal ke kaam laayak hai ya nahi. Chapter personal data, faisle se pehle ginti, samasyaon mein se chunaav aur likhe hue faisle ka parichay deta hai.
course: a1
goals:
  - personally identifiable information pehchaanna, un details ko bhi jo sirf milkar kisi insaan ko pehchaan dete hain
  - kisi andaze ko ginti mein badalna aur batana ki ginti kya dikhati hai aur kya nahi
  - chaar ek jaise sawaalon par alag-alag samasyaon ki tulna karna
  - ek faisle ko uske saboot aur use palatne ki shartein ke saath likh kar rakhna
terms:
  - PII | personally identifiable information: koi bhi aisi detail jo ek asli insaan ki taraf ishaara kar sake, jaise naam, phone number ya pehchaan ka number | personally identifiable information, personal data
  - decision log | ek chalta hua page jisme aap har zaroori faisla likhte hain, uske peeche ka saboot likhte hain, aur yeh bhi ki kya hone par aap apna faisla badal denge | decision-log
---

March ke doosre hafte mein Pune ki company Sahaj ki product manager Anaya Deshmukh ne company ke support chatbot aur customers ke beech ki chaar sau baatcheet padhi. Woh yeh jaanna chahti thi ki itne customers late fees ke baare mein kyun poochte hain. Ikyaasi number ki conversation mein ek customer ne baarah ankon ka pehchaan ka number vaakya ke beech mein type kar diya tha, aur kisi ne use maanga nahi tha. Shaam tak chaar sau mein se saintees conversations aisi nikleen jinmein pehchaan ka number, tax number, bank account ya poora ghar ka pata tha.

Yeh chapter dikhata hai ki Anaya ne is khoj ke saath kya kiya. Is case se teen aadatein samjhaayi gayi hain jin par kitaab ka baaki hissa tikta hai: faisle se pehle naapna, samasyaon ki ek jaise paimaane par tulna karna, aur faisle ko aise likhna ki use baad mein palta ja sake. Isi chapter mein kitaab ka pehla technical shabd bhi aata hai, *personally identifiable information*.

## 1.1 Case: ek hafte ki chats

Sahaj ek mobile app chalati hai jisme log bijli ka bill bharte hain aur pichhle saal se chhote loan ke liye apply bhi karte hain. App ke ek kone mein ek support chatbot hai jo kisi bhi samay sawaalon ke jawaab deta hai. Support team ki lead Farah Sheikh ne ek hafte ki baatcheet Anaya ke liye export kar di thi. Company chahti thi ki April tak har product manager saal ka ek bada kaam prastaav kare, aur Anaya yeh dekhne ke liye chats padh rahi thi ki customers kahan atakte hain.

Ikyaasi number ki conversation kuch aisi dikhti thi.

```
Customer: loan ka status batao, mera aadhaar 4321 5678 9012 hai
Bot:      Aapke loan ka status dekhne ke liye apna registered mobile number bataiye.
Customer: 9876543210
Bot:      Dhanyavaad. Aapka application review mein hai.
```

Aadhaar number woh pehchaan ka number hai jo Bharat sarkar nivasiyon ko deti hai. Woh card par chaar-chaar ankon ke groups mein chhapa hota hai, aur zyadatar baalig jaante hain ki unka card kahan rakha hai. Chatbot ne sirf mobile number poochha tha. Customer ne apni marzi se zyada keemti number bata diya, shayad madad karne ke irade se.

Export mein aage Anaya ko ek PAN mila, tax ka das akshar ka code, jo ek delayed refund ke baare mein likhe vaakya mein bade akshar mein type kiya gaya tha. Ek poora ghar ka pata mila, aur ek bank passbook ki photo mili jise chat window ne bina kisi chetavni ke le liya tha.

## 1.2 Type kiya hua number kahan jaata hai

Aksar maan liya jaata hai ki chat window mein type kiya number chat window mein hi rehta hai. Sach mein ek message kai jagah copy hota hai, aur har jagah ke apne staff, backup aur yeh tay karne ke apne niyam hote hain ki kaun padh sakta hai. Sahaj mein message paanch jagah se guzra.

1. Support system, jo history store karta hai taaki agents use padh sakein.
2. Hafte ka export, jiske zariye numbers Anaya ke inbox tak pahunche.
3. Ek bahari company ka software, jo chatbot ke jawaab likhta hai.
4. Analytics dashboard, jo conversations ginta hai.
5. Woh logs jo engineers tab padhte hain jab kuch toot jaata hai.

Ek baar type kiya gaya number is tarah paanch jagah save hota hai, aur kam se kam do alag organisations ke paas.

::: def Personally identifiable information (PII)
Koi bhi aisi detail jo ek asli insaan ki taraf ishaara kar sake, akeli ho ya doosri details ke saath milkar. Test ek sawaal hai: kya yeh detail, jo baaki jaana jaata hai uske saath, ek insaan ko pehchaan sakti hai?
:::

Is test se samajh aata hai ki PII pehchaan ke numbers se zyada bada kyun hai. Kuch details akeli hi pehchaan deti hain. Kuch sirf milkar pehchaanti hain, aur samooh jitna chhota ho, milkar pehchaan utni hi tez ho jaati hai.

Table: Kuch aam details kitni achhi tarah kisi insaan ko pehchaanti hain
| Detail | Akeli pehchaanti hai? | Tippani |
| --- | --- | --- |
| Aadhaar number | Haan | Ek nivasi ka apna |
| Mobile number | Haan | Aam taur par ek subscriber, seedhe sampark ho sakta hai |
| Poora ghar ka pata | Aksar | Ek ghar ko pehchaanta hai, yaani aksar ek insaan ko |
| Umar | Nahi | Lakhon logon ki ek hi hoti hai |
| Gaon | Nahi | Saikdon logon ka ek hi hota hai |
| Umar, gaon aur peshaa | Aksar | 800 logon ke gaon mein 52 saal ki dentist shayad ek hi insaan hai |

Aakhri row sabse zaroori hai. Message se saare saaf numbers hata dene ke baad bhi woh gumnaam nahi ho jaata, kyunki baaki details ab bhi ek hi insaan ka bayaan kar sakti hain. Chapter 28 aur 29 mein is baat par dobara baat hogi jab yeh dekha jaayega ki company bahari service ko kya bhej sakti hai. Is kitaab mein kuch bhi kanooni salah nahi hai.

## 1.3 Andaze se ginti tak

Is mod par Anaya ke paas ek majboot andaaza tha aur koi saboot nahi tha. Andaaza yeh tay karne mein kaam aata hai ki kahan dekhna hai, par use koi aur jaanch nahi sakta aur use doosre andaaze se tola nahi ja sakta. Isliye uska pehla kadam use ginti mein badalna tha.

Usne spreadsheet mein ek column jodi jiska heading tha "Kya yeh sirf ek insaan ki cheez hai?" aur chaaron sau conversations dobara padhin, har line ke neeche ek ruler rakh kar. Doosri baar padhne mein do ghante lage. Saintees conversations mein kam se kam ek pehchaan ka number, tax number, bank account ya poora ghar ka pata tha. Yeh 9.25 percent hai, yaani lagbhag gyarah mein se ek conversation.

::: watch Ginti abhi finding nahi hai
Anaya ne figure ke paas uski seemayein likhin. Yeh ek hafte ka, ek chatbot ka, ek aise insaan ka figure tha jo bilkul isi cheez ko dhoondh raha tha. Doosra hafta, doosra padhne wala, ya "personal" ki badi paribhasha alag number deti. Is figure se aur gehraai se dekhne ki wajah mili. Isse koi nateeja nikalne ki wajah nahi mili.
:::

Number ke saath uski seemaayein likhna is kaam ki ek aadat hai. Jo figure apni seemaon ke bina ghoomta hai, use agli meetingon mein uski haisiyat se zyada bharosa milne lagta hai.

## 1.4 Teen samasyaon mein se chunaav

Anaya ke paas ab teen kaam ke vikalp the. Pehla ek tool tha jo har hafte ke support tickets padhkar mukhya themes bata de, jisse Farah ko Monday subah haath se chhaantne ka kaam na karna pade. Doosra ek feature tha jo salary slips ki photos padhkar loan officers ki jaanch tez kar de. Teesra chats wali samasya thi, jise usne chuna nahi tha. Woh khud use mili thi, aur use iss baat par shak karne ki wajah lagi.

Usne unhe chaar sawaalon par parkha jo lagbhag har prastaav par lagte hain.

1. Kya koi aisa user hai jis tak woh isi hafte pahunch sakti hai?
2. Kya koi aisa kaam hai jise woh kisi ko karte hue dekh sakti hai?
3. Kya koi aisa dard hai jise woh gin sakti hai?
4. Kya koi sach mein wajah hai ki text padhne wala software madad kare, aam software ke bajaye?

Table: Teeno vikalp chaar sawaalon par
| | Hafte ke ticket themes | Salary-slip reader | Chats mein personal details |
| --- | --- | --- | --- |
| Aisa user jis tak isi hafte pahunch sake | Farah | Do loan officers | Farah, Imran, Lakshmi |
| Aisa kaam jo dekh sake | Har Monday | Ho sakta hai, arrange karna dheema | Transcripts uski screen par hain |
| Aisa dard jo gin sake | Hafte mein teen ghante | Har loan par kuch minute | 400 mein 37 |
| AI ki asli wajah | Shayad; tickets par pehle se tags hote hain | Haan, par kaagaz ki photos mushkil hoti hain | Kuch had tak |

Chautha sawaal sabse zyada imaandaari maangta hai. Chaar-chaar ke groups mein likhe baarah ankon ko ek simple rule dhoondh sakta hai: baarah ank dekho aur grouping jaancho. Isme koi samajh nahi chahiye. Mushkil kahin aur hai. Log hamesha number us tarah nahi likhte jaise card par chhapa hota hai, aur naam aur pate ka koi pattern nahi hota. Customers Hindi, English aur dono ke us mel mein bhi likhte hain jo raat ko phone ke keyboard par bharta hai. Ek rule samasya ka ek hissa hal kar sakta tha, baaki ke liye kuch zyada lachila chahiye tha. Anaya ne dono hisse likh liye.

Product manager ke kaam ka ek hissa yeh hai ki shuru mein hi kahe ki ek samasya ko artificial intelligence ki zaroorat nahi hai. Yeh baat kam pasand ki jaati hai aur aksar sahi hoti hai, aur yeh us paise ko bachaati hai jo samasya se mushkil hal par kharch ho jaata.

Teesra vikalp jeeta, par bahut kam farq se. Uski khoobi yeh thi ki Anaya uske column ke har cell ke liye apna kaam dikha sakti thi.

## 1.5 Faisla likh kar rakhna

Chunaav ke baad Anaya ne ek naya document khola aur faisle ko ek tay format mein likha: tareekh, faisla, uska saboot, aur woh haalaat jinmein woh faisla palat degi. Is tarah ke page ko *decision log* kehte hain.

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

Log ki keemat aakhri line se aati hai. Jis faisle mein nikalne ka koi raasta nahi likha hota, woh dheere-dheere vishwas ban jaata hai, aur use banane wale apne maan ke liye uska bachaav karte hain. Jo faisla apne palatne ki shart khud likhta hai, use shaanti se dobara kholna asaan hota hai, kyunki sawaal pehle se likha hota hai.

## 1.6 Khud ko naapna

Shaam ka aakhri kaam saboot likhne ki aadat se hi nikla. Anaya ne product ke saat kshetron mein apni khud ki yogyata ko score kiya: logon se baat karke asli samasyaen dhoondhna, unmein se chunna, technology ko itna samajhna ki engineers se behas kar sake, kisi faisle ko aisi cheez mein badalna jise doosre bana sakein, nateejon ko naapna, yeh jaanna ki product apna kharcha nikaal sakta hai ya nahi, aur alag-alag lakshyon wale logon ko saath chalana.

Table: Har kshetra ke liye istemaal hui scale
| Score | Matlab |
| --- | --- |
| 0 | Dikhane ko kuch nahi |
| 1 | Koshish ki, par saabit nahi kar sakte |
| 2 | Kaam ka aisa kaam jise koi aur jaanch sake |
| 3 | Asli logon ya asli data par aazmaya gaya, aur seemayein likhi hui |

Usne samasya dhoondhne ko 2 diya, kyunki ab uske paas ek ginti thi. Strategy ko 1 diya, kyunki uski kisi strategy par kisi saathi ne kabhi amal nahi kiya tha. Technology samajhne ko pehle 1 diya, phir use kaata aur ek kam imaandaar number likha. Woh meeting mein keh sakti thi ki chatbot AI se chalta hai. Woh ek jigyaasu baarah saal ke bachche ko is vaakya ka matlab nahi samjha sakti thi. Yeh scores uske notes mein rahenge aur kitaab ke ant mein dobara dekhe jaayenge. Page ke sabse upar likha uska niyam tha: jab tak koi aur jaanch na sake, tab tak kuch bhi ginti mein nahi aata.

Jaane se pehle usne lead engineer Imran Qureshi ko likha aur agle din ek ghante ka samay maanga. Samasya ka kitna hissa saadharan engineering hai aur kitna kuch naya, yeh uski madad se hi tay hota, aur yahi agle chapter ki shuruaat hai.

## Saaraansh

Type kiya hua number us har system mein copy ho jaata hai jo baatcheet ko chhuta hai, isliye ek entry ek se zyada organisation ke paas kai store kiye hue copy ban jaati hai.

- PII woh koi bhi detail hai jo ek asli insaan ki taraf ishaara kar sakti hai, akeli ya milkar. Jo details alag-alag nirdosh hain, woh jud kar kisi ko pehchaan sakti hain.
- Andaaza tab kaam ka banta hai jab use ginti mein badla jaye, aur ginti ko uski seemaon ke saath bataya jaye: sample, padhne wala aur paribhasha.
- Alag-alag samasyaon ki tulna ek jaise chaar sawaalon par hoti hai: pahunch mein aane wala user, dekha ja sakne wala kaam, gina ja sakne wala dard, aur AI ki asli wajah.
- Decision log mein tareekh, faisla, saboot aur raasta badalne ki shartein likhi jaati hain.
- Ek tay scale par khud ko aankna ek aisi shuruaati rekha deta hai jise baad mein dobara jaancha ja sake.
