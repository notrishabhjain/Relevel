---
title: Kaise Pata Chale Ki Yeh Kaam Karta Hai
summary: Team jawaab kaisa lagta hai us par bharosa karna band kar deti hai aur tool ke jawaab dekhne se pehle sahi jawaab likh leti hai. Chapter test sets, answer keys, scoreboards, ek baar mein ek hi cheez badalna, aur request ke paanch tarah ke kaam batata hai.
course: ch22 ch23
goals:
  - samjhana ki kuch outputs padhna kisi system ko parakhne ka bharose layak tareeka kyun nahi hai
  - tool chalane se pehle likhe sahi jawaabon ke saath test set banana, aur use numbered versions mein rakhna
  - found, missed aur galat flagged cheezon ka scoreboard padhna
  - ek request ko paanch task types mein se ek mein daalna aur batana ki kaun sa program grade kar sakta hai
terms:
  - test set | asli ya yatharth udaharanon ka ek sangrah, har ek ke saath pehle se likha sahi jawaab, jo kisi system ko naapne ke kaam aata hai | test sets
  - answer key | guard ka test set: har udaharan vaakya ke liye, theek-theek kya milna chahiye aur uske saath kya hona chahiye, numbered versions mein rakha hua | answer keys
  - scoreboard | woh table jo tool ke har version ke liye gintaa hai ki usne kya dhoondha, kya chhoda aur galti se kya flag kiya | scoreboards
  - task type | paanch kismon ke kaam mein se kaun sa ek request asal mein hai: classify, extract, summarise, rewrite ya generate | task types
---

Lakshmi Iyer ne poochha tha ki Anaya kaise jaanegi ki tool kaam karta hai, usse teen hafte ho gaye the, aur Anaya ke paas abhi bhi jawaab nahi tha. April ke beech tak sawaal ab taala nahi ja sakta tha. Ek Wednesday dopahar usne use glass room mein Imran Qureshi ke saamne rakha, jahan whiteboard par laal rang mein "Kam hona, theek hona nahi hai" likha tha. Uska jawaab chhota tha: tool ko un udaharanon par chalao jinka sahi jawaab pehle se pata ho, aur gino. Anaya ne poochha ki jab woh kehta hai toh yeh itna mushkil kyun lagta hai. "Kyunki pehle kisi ko jawaab likhne padte hain," Imran ne kaha.

Yeh chapter us likhne ka, usse nikli table ka, aur kaam ke aise vargikaran ka vivaran deta hai jo tay karta hai ki koi bhi nateeja kaise naapa ja sakta hai.

## Case: woh version jo sabko pasand aaya

Team ke paas ab instruction ke chaar versions the, har ek pichhle se thoda lamba. Sabse chhota Imran ka saadha anurodh tha. Sabse lamba kaam, kadam, do worked examples aur ek chetavni leke tha. Pichhli shaam Neha ne, jisne paper test mein hissa liya tha, paanch messages par chaaron ke outputs padhe aur kaha ki chautha spasht roop se sabse achha tha. Woh achha padha jaata tha, saavdhaan lagta tha aur khud ko samjhata tha. Anaya ne sir hilaya tha, aur use apni jaldi par thodi sharm aayi.

## Ehsaas kaafi kyun nahi

Kuch outputs padhna aur jo sahi lage use chunna kisi system ko parakhne ka sabse swaabhaavik tareeka hai aur sabse kam bharose ka. Jo outputs padhe jaate hain woh wahi hain jo padhne mein aaye. Achha gaya demonstration yeh dikhata hai ki tool achhe din par kya kar sakta hai. Lamba, zyada vistrit sunayi dene wala jawaab zyada achha lagta hai, chaahe woh ho ya nahi.

Iska ilaj *test set* hai: asli ya asli jaise udaharanon ka ek sangrah, jinme se har ek ka sahi jawaab pehle se likha ho.

::: key Do shabd kaam karte hain
"Pehle se" aur "likha hua" ek test set ko test banate hain. Agar tool ka output pehle padha jaaye aur sahi jawaab baad mein tay ho, toh tool ne jo bhi kaha woh lagbhag theek lagega.
:::

## Das vaakya

Thursday ko Anaya aur Farah ne das vaakya likhe. Woh asli messages ki shakl mein banaye gaye the, aur mushkil cases ko kaabu mein karte the: teen English mein, ek Hindi lipi mein, teen Hinglish mein aur teen mushkil. Ek saadhaaran message tha jisme ek naam aur ek mobile number tha. Ek Hinglish message tha jisme ek Aadhaar number tha, aur uske paas ek mobile number jo pehle se aadha chhupa hua tha. Ek Devanagari vaakya tha jisme ek naam aur ek pehchaan ka number tha. Ek mein pita ka naam, Gurgaon ka ek pata aur ek employer tha. Ek ne kisi ek insaan ki taraf bina naam ya number ke ishaara kiya. Ek mein kuch bhi personal nahi tha, aur tool ko use chhodna tha.

Har vaakya ke liye unhone kuch bhi chalane se pehle spreadsheet mein chhe cheezein likhin: ek number, likhne ka tareeka, vaakya, kya milna chahiye, uske saath kya hona chahiye, aur ek note.

Table: Pehle answer key ki chaar rows
| No. | Likhna | Vaakya | Kya milna chahiye | Kya hona chahiye |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | naam, mobile, email | teeno chhupao |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | naam, mobile | dono chhupao |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | koi shakl wali cheez nahi; poora vaakya ek insaan ki taraf ishaara karta hai | kisi insaan ko tay karne ke liye flag karo |
| 9 | English | What documents do I need to renew my driving licence? | kuch nahi | chhod do |

Yeh spreadsheet *answer key* hai. Ispe ek version number hai, aur yeh version 1 tha, kone mein tareekh aur "das" shabd ke saath. Yeh baaki project ke saath badhta rahega. Har baar jab badhega, toh ek naye file ki tarah nahi balki usi file ke naye version ki tarah save hoga, taaki koi bhi bata sake ki ek score kaun si key ke saamne naapa gaya tha.

## Scoreboard

Team ne chaaron instructions ko das vaakyon par chalaya aur har run ke liye teen cheezein ginin: kitni asli details mili, kitni chhoot gayi kyunki tool ne unhe jaane diya, aur kitni cheezein galat flag ki gayi, yaani false alarm woh jagah jahan tool ne woh chhupaya jo personal tha hi nahi. Das vaakyon mein key ke paas satrah asli details thi.

Table: Pehla scoreboard
| Version | Mili | Chhoot gayi | False alarm |
| --- | --- | --- | --- |
| 1. Saadha anurodh | 11 | 6 | 5 |
| 2. Kaam aur padhne wale ka naam batao | 12 | 5 | 4 |
| 3. Worked examples joda | 15 | 2 | 2 |
| 4. Kadam aur chetavni joda | 14 | 3 | 1 |

Aise table ko, har version ek row ke saath, *scoreboard* kehte hain. Uski koi raay nahi hoti, aur use parwaah nahi ki chautha jawaab sundar padhta hai. Version chaar woh tha jo Neha ne chuna tha. Version teen ne ek detail zyada dhoondhi aur ek false alarm zyada diya, aur us vyapaar par charcha theek hai. Par version chaar sabse achha nahi tha, aur woh lagbhag doguna lamba tha. "Hum ise ship kar dete," Anaya ne kaha.

### Ek baar mein ek cheez

Imran ne phir apne tareeke ki ek kami pehchaani. Version do se chaar ke beech usne teen cheezein ek saath badli thi: kaam, kadam aur chetavni. Woh nahi bata sakta tha ki kisne madad ki, aur ho sakta hai koi ek natije ko kharab kar raha ho jabki baaki do bharpaai kar rahe the. Usne whiteboard par laal line ke neeche "ek baar mein ek badlaav" likha. Yeh dheema hai, aur jaanne ka yahi ek tareeka hai. Jab koi kehta hai ki usne prompt ko tune kiya, toh poochhne layak sawaal yeh hai ki usne kitni cheezein badli.

## Yeh kaun sa kaam hai

Us shaam Imran ne napkin dobara nikala. Log in machines se jo bhi anurodh karte hain unme lagbhag har ek paanch kaamon mein se ek hota hai, usne kaha. Kaam ka aakaar tay karta hai ki nateeja program se naapa ja sakta hai ya sirf haath se, isliye jab tak kaam pata na ho, tareeka nahi chuna ja sakta.

Table: Paanch task types
| Task type | Kya karta hai | Udaharan | Kya program grade kar sakta hai? |
| --- | --- | --- | --- |
| Classify | Input ko tay dabbon mein se ek mein rakhta hai | Kya yeh message shikayat, sawaal ya anurodh hai? | Haan |
| Extract | Input mein jo hai use bahar nikalta hai | Account number kya hai? Tareekh? | Haan |
| Summarise | Jo zaroori hai use khoye bina input chhota karta hai | Lambi chat ka chhota byora | Sirf kuch had tak |
| Rewrite | Matlab rakhta hai aur roop ya lahja badalta hai | Is reply ko aur shishta banao | Nahi, insaan ko tay karna padega |
| Generate | Kuch naya banata hai | Is customer ko reply likho | Nahi, insaan ko tay karna padega |

Pehle do ke sahi jawaab hote hain. Value document mein hai ya nahi hai, aur program use grade kar sakta hai. Baaki teen padhne wale par nirbhar hain, aur sirf insaan keh sakta hai ki saar achha hai ya nahi. Yeh *task type* hai, aur Anaya ne ise chaar product risks ke baad sabse upyogi vichaar maana.

Guard messages ke andar pehchaan ke numbers aur naam dhoondhta tha, jo extraction hai, aur tay karta tha ki har detail kis tarah ki hai, jo classification hai. Dono ke sahi jawaab the aur dono insaan ke bina grade ho sakte the. Usne, lagbhag ittefaq se, aisa project chuna tha jiske nateeje pehle din se ginte ja sakte the. Chatbot alag tha. Uska kaam jawaab likhna tha, jo generation hai, aur kisi ke paas use apne aap grade karne ka tareeka nahi tha. Shayad isliye kisi ne nahi kiya.

::: watch Ek anurodh aksar teen kaam hai, jo coat mein chhupe hain
"Kya AI hamara inbox sambhaal sakta hai?" ek kaam nahi hai. Woh kam se kam teen hai: message ko prakaar se classify karo, account number extract karo, aur ek draft reply likho. Har ek alag tarah se fail hota hai, aur sirf pehle do bina insaan ke naape ja sakte hain. Jis anurodh mein ek se zyada task type ho use baanta jaana chahiye. Farah ne darwaaze se guzarte hue poochha ki agar woh seedhe kehti ki chat sambhaal lo toh kya hoga. Imran ne poochha ki teen kaamon mein se woh kaun sa matlab rakhti hai.
:::

## Lakshmi ka sawaal, jawaab ke saath

Friday ko Anaya ne Lakshmi ko likha. Email mein kaha gaya ki team tool ke jawaab dekhne se pehle sahi jawaab likhegi, abhi das hain aur aur honge, aur file ka har version rakha jaayega. Tool ke har version ke liye woh ginenge ki usne kya paya, kya chhoda aur kya galat flag kiya, aur table dikhayenge. Agar koi number kharab hua, toh Lakshmi dekhegi. Team ko abhi nahi pata tha ki tool kitna achha hoga, par use pata hoga ki woh kitna achha hai. Jawaab ek shabd ka tha: "Behtar."

## Saaraansh

Kuch outputs padhna aur jo sahi lage use chunna bharose ka tareeka nahi hai, padhne wala kitna bhi imaandaar ho. Test set ise theek karta hai, aise asli udaharanon se jinke sahi jawaab pehle likhe gaye hon aur numbered versions mein rakhe gaye hon.

- Guard ka answer key har udaharan vaakya ke liye batata hai ki kya milna chahiye aur uske saath kya hona chahiye.
- Scoreboard har version ne kya paya, kya chhoda aur kya galat flag kiya yeh ginta hai, jisse pragati dikhti hai aur raay baahar rehti hai.
- Ek baar mein ek cheez badlo, nahi toh pata nahi chalega ki kisne madad ki.
- Method chunne se pehle task type batao. Classify aur extract program se grade ho sakte hain. Summarise, rewrite aur generate ke liye insaan chahiye, aur jo anurodh kai prakaar milata hai use baanta jaana chahiye.
