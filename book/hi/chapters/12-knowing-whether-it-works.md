---
title: Kaise Pata Chale Ki Yeh Kaam Karta Hai
summary: Team ab yeh dekhna band kar deti hai ki jawaab kaisa "lagta" hai. Woh tool ka jawaab dekhne se pehle sahi jawaab likh leti hai. Chapter mein test set, answer key, scoreboard, ek baar mein ek hi cheez badalna, aur request ke 5 tarah ke kaam aate hain.
course: ch22 ch23
goals:
  - samjha paana ki kuch outputs padh kar system ko judge karna bharose ka tareeka kyun nahi hai
  - tool chalane se pehle likhe hue sahi jawaabon ke saath test set banana, aur use numbered versions mein rakh paana
  - found, missed aur galat flag hui cheezon ka scoreboard padh paana
  - ek request ko 5 task types mein se kisi ek mein daal paana, aur bata paana ki kaun sa kaam program se grade ho sakta hai
terms:
  - test set | asli ya asli jaise examples ka ek collection, jisme har example ka sahi jawaab pehle se likha hota hai, aur jisse kisi system ko naapa jaata hai | test sets
  - answer key | guard ka test set: har example sentence ke liye theek-theek yeh ki kya milna chahiye aur uske saath kya hona chahiye, jo numbered versions mein rakha jaata hai | answer keys
  - scoreboard | woh table jo tool ke har version ke liye ginta hai ki usne kya dhoondha, kya chhod diya, aur kya galti se flag kar diya | scoreboards
  - task type | 5 tarah ke kaamon mein se kaun sa kaam ek request asal mein hai: classify, extract, summarise, rewrite ya generate | task types
---

Lakshmi Iyer ne 3 hafte pehle poochha tha ki Anaya ko kaise pata chalega ki tool kaam karta hai. Anaya ke paas abhi bhi iska jawaab nahi tha. April ke beech tak yeh sawaal aur taala nahi ja sakta tha.

Ek Wednesday dopahar usne glass room mein Imran Qureshi se yahi poochha. Peeche whiteboard par ab bhi laal rang mein likha tha, "Kam hona, theek hona nahi hai". Imran ka jawaab chhota tha. Tool ko aise examples par chalaiye jinka sahi jawaab pehle se pata ho, aur gin lijiye. Anaya ne kaha, aap bolte hain toh yeh itna mushkil kyun lagta hai? "Kyunki pehle kisi ko jawaab likhne padte hain," Imran ne kaha.

Yeh chapter usi likhne ke baare mein hai. Uske baad jo table bana, uske baare mein hai. Aur kaam ko chhaantne ke ek tareeke ke baare mein, jo tay karta hai ki kisi bhi result ko kaise naapa ja sakta hai.

## Case: woh version jo sabko pasand aaya

Team ke paas ab instruction ke 4 versions the, aur har version pichhle se thoda lamba tha. Sabse chhota version Imran ki seedhi si request thi. Sabse lambe version mein kaam, steps, do worked examples aur ek warning thi.

Pichhli shaam Neha ne, jisne paper test mein madad ki thi, paanch messages par chaaron versions ke outputs padhe. Usne kaha ki chautha version saaf taur par sabse achha hai. Woh achha padhne mein lagta tha. Usme saavdhaani dikhti thi, aur woh apni baat samjhata bhi tha. Anaya ne sir hila diya tha, aur ab use thodi sharm aa rahi thi ki usne kitni jaldi haan keh di.

## Sirf ehsaas kaafi kyun nahi hai

Kuch outputs padhna aur jo sahi lage use chun lena, kisi system ko judge karne ka sabse natural tareeka hai. Lekin yeh sabse kam bharose ka tareeka bhi hai. Jo outputs aap padhte hain, woh bas wahi hain jo padhe gaye. Jo demonstration achha chala, woh sirf yeh dikhata hai ki tool kisi achhe din par kya kar sakta hai. Aur jo jawaab lamba hota hai aur zyada saavdhaani se likha lagta hai, woh zyada achha lagta hai, chaahe woh sach mein achha ho ya na ho.

Iska ilaaj hai *test set*. Yeh asli ya asli jaise examples ka ek collection hota hai, jisme har example ka sahi jawaab pehle se likha hota hai.

::: key Do shabd sab kuch karte hain
"Pehle se" aur "likha hua". Yahi do shabd examples ke collection ko ek test banate hain. Agar aap pehle tool ka output padhein aur sahi jawaab baad mein tay karein, toh tool ne jo bhi kaha hoga, woh lagbhag theek hi lagega.
:::

## 10 sentences

Thursday ko Anaya aur Farah ne 10 sentences likhe. Unhone ye asli messages ki shakl mein khud banaye, aur in 10 mein main cases aa gaye. 3 English mein the, 1 Hindi script mein, 3 Hinglish mein, aur 3 mushkil the.

Ek jhalak dekhiye. Ek seedha message tha jisme ek naam aur ek mobile number tha. Ek Hinglish message tha jisme Aadhaar number ke bagal mein ek mobile number tha, jo pehle se aadha chhupa hua tha. Ek Devanagari sentence tha jisme ek naam aur ek identity number tha. Ek mein pita ka naam, Gurgaon ka ek address aur ek employer tha. Ek sentence kisi ek insaan ki taraf ishaara karta tha, bina naam ya number ke. Aur ek mein kuch bhi personal nahi tha, toh tool ko use chhod dena tha.

Har sentence ke liye unhone kuch bhi chalane se pehle spreadsheet mein 6 cheezein likhin: ek number, likhne ka tareeka, sentence, kya milna chahiye, uske saath kya hona chahiye, aur ek note.

Table: Pehli answer key ki 4 rows
| No. | Writing | Sentence | Kya milna chahiye | Kya hona chahiye |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | naam, mobile, email | teeno chhupa do |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | naam, mobile | dono chhupa do |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | koi fixed shape wali cheez nahi; poora sentence ek hi insaan ki taraf ishaara karta hai | flag karo, taaki koi insaan decide kare |
| 9 | English | What documents do I need to renew my driving licence? | kuch nahi | chhod do |

Yeh spreadsheet hi *answer key* hai. Isse ek version number mila. Yeh version 1 tha, aur kone mein date aur "das" shabd likha tha. Baaki project mein yeh badhta rahega. Har baar badhne par woh ek naye file ki tarah nahi, balki usi file ke naye version ki tarah save hoga. Aise koi bhi bata sakta hai ki koi score kaun si key ke against naapa gaya tha.

## Scoreboard

Team ne chaaron instructions ko saare 10 sentences par chalaya. Har run ke liye unhone 3 cheezein ginin.

Pehli, tool ne kitni asli details dhoondh nikaalin. Doosri, kitni chhod di, yaani jaane de di. Teesri, kitni galat flag ki. False alarm matlab woh case jahan tool ne kuch aisa chhupa diya jo personal tha hi nahi. 10 sentences mein key ke hisaab se 17 asli details thi.

Table: Pehla scoreboard
| Version | Found | Missed | False alarms |
| --- | --- | --- | --- |
| 1. Seedhi request | 11 | 6 | 5 |
| 2. Kaam aur padhne wale ka naam batao | 12 | 5 | 4 |
| 3. Worked examples joda | 15 | 2 | 2 |
| 4. Steps aur warning joda | 14 | 3 | 1 |

Aisi table ko, jisme har version ki ek row ho, *scoreboard* kehte hain. Uski koi raay nahi hoti. Use parwaah nahi ki chautha jawaab kitna sundar padhne mein lagta hai.

Ab dekhiye ki woh version 4 ke baare mein kya kehta hai, wahi jo Neha ne chuna tha. Version 3 ne ek detail zyada dhoondhi, aur ek false alarm bhi zyada diya. Is trade ke baare mein baat ho sakti hai. Lekin version 4 sabse achha nahi tha, aur woh lagbhag doguna lamba tha. "Hum ise ship kar dete," Anaya ne kaha.

### Ek baar mein ek badlaav

Phir Imran ko apne hi tareeke ki ek kami dikhi. Version 2 se version 4 tak usne ek saath 3 cheezein badli thi: kaam, steps aur warning. Isliye woh bata nahi sakta tha ki inmein se kisne madad ki. Ho sakta hai inmein se koi ek result ko kharab bhi kar raha ho, aur baaki do usse bharpaai kar rahe hon.

Usne laal line ke neeche whiteboard par likha, "ek baar mein ek badlaav". Yeh dheema tareeka hai, lekin sach pata karne ka yahi ek tareeka hai. Agli baar koi aapko bataye ki usne prompt tune kiya, toh poochhiye ki usne kitni cheezein badli.

## Yeh kaun sa kaam hai

Us shaam Imran ne napkin phir se nikaali. Usne kaha, log in machines se jo bhi maangte hain, uska lagbhag har request 5 kaamon mein se ek hota hai. Kaam ki shakl tay karti hai ki result ko program naap sakta hai ya sirf insaan. Isliye jab tak aapko kaam pata nahi, aap koi method chun hi nahi sakte.

Table: 5 task types
| Task type | Kya karta hai | Example | Kya program grade kar sakta hai? |
| --- | --- | --- | --- |
| Classify | Input ko pehle se tay dabbon mein se ek mein rakhta hai | Yeh message complaint hai, query hai ya request? | Haan |
| Extract | Input mein jo cheezein hain, unhe bahar nikaalta hai | Account number kya hai? Date kya hai? | Haan |
| Summarise | Input ko chhota karta hai, bina zaroori baatein khoye | Lambi chat ka chhota byora | Sirf kuch had tak |
| Rewrite | Matlab wahi rakhta hai, aur form ya tone badalta hai | Is reply ko aur polite banao | Nahi, insaan ko judge karna padega |
| Generate | Kuch naya banata hai | Is customer ko reply likho | Nahi, insaan ko judge karna padega |

Pehle do ke sahi jawaab hote hain. Value document mein hai, ya nahi hai. Isliye program unhe grade kar sakta hai. Baaki teen padhne wale par depend karte hain. Summary achhi hai ya nahi, yeh sirf insaan bata sakta hai.

Ise *task type* kehte hain. Anaya ne turant dekha ki chaar product risks ke baad yeh sabse kaam ka idea hai jo use mila.

Ab ise guard par lagaiye. Guard messages ke andar identity numbers aur naam dhoondhta hai, yaani extraction. Woh yeh bhi tay karta hai ki har detail kis tarah ki hai, yaani classification. Dono ke sahi jawaab hote hain, aur dono bina insaan ke grade ho sakte hain. Lagbhag ittefaq se, Anaya ne aisa project chun liya tha jiske results pehle din se ginne laayak the.

Chatbot alag tha. Uska kaam jawaab likhna tha, yaani generation. Aur use koi automatic tareeke se grade nahi kar sakta. Shayad isliye kisi ne kiya bhi nahi tha.

::: watch Ek request aksar coat pehne hue teen kaam hota hai
"Kya AI hamara inbox sambhaal sakta hai?" ek kaam nahi hai. Yeh kam se kam teen kaam hain. Message ko type ke hisaab se classify karo. Account number extract karo. Aur ek draft reply likho. Har kaam apne tareeke se fail hota hai, aur sirf pehle do bina insaan ke naape ja sakte hain. Jis request mein ek se zyada task type ho, use todna chahiye. Darwaaze se guzarte hue Farah ne poochha ki agar woh seedha keh de ki chat sambhaal lo, toh kya hoga. Imran ne poochha ki un teen kaamon mein se tumhara matlab kaun sa hai.
:::

## Lakshmi ke sawaal ka jawaab

Friday ko Anaya ne Lakshmi ko email likha. Usme likha tha ki team tool ke jawaab dekhne se pehle sahi jawaab likh legi. Abhi 10 hain, aur aage zyada aayenge, aur file ka har version rakha jaayega.

Tool ke har version ke liye team ginegi ki usne kya dhoondha, kya chhoda aur kya galat flag kiya, aur Lakshmi ko woh table dikhayegi. Agar koi number kharab hua, toh Lakshmi dekh legi. Team ko abhi nahi pata tha ki tool kitna achha hoga. Lekin use pata hoga ki woh kitna achha hai.

Jawaab ek hi shabd ka aaya: "Better."

## Summary

Kuch outputs padhna aur jo sahi lage use chun lena, bharose ka tareeka nahi hai, padhne wala chaahe kitna bhi imaandaar ho. Test set isse theek karta hai. Usmein asli jaise examples hote hain, jinke sahi jawaab pehle se likhe jaate hain aur numbered versions mein save hote hain.

- Guard ki answer key har example sentence ke liye likhti hai ki kya milna chahiye aur uske saath kya hona chahiye.
- Scoreboard ginta hai ki har version ne kya dhoondha, kya chhoda aur kya galat flag kiya. Isse progress dikhti hai, aur raay beech mein nahi aati.
- Ek baar mein ek hi cheez badaliye, warna pata nahi chalega ki kisne madad ki.
- Method chunne se pehle task type ka naam lijiye. Classify aur extract ko program grade kar sakta hai. Summarise, rewrite aur generate ke liye insaan chahiye. Aur jis request mein kai types mile hon, use todna chahiye.
