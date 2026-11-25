---
title: Kaise Pata Chale Ki Yeh Kaam Karta Hai
summary: Team ab yeh dekhna band kar deti hai ki jawaab kaisa "lagta" hai. Woh tool ka jawaab dekhne se pehle sahi jawaab likh leti hai. Aap test set, answer key, scoreboard, ek baar mein ek hi cheez badalna, aur request ke 5 tarah ke kaam seekhte hain.
course: ch22 ch23
goals:
  - samjha paana ki kuch outputs padh kar system ko judge karna kamzor tareeka kyun hai
  - tool chalane se pehle likhe sahi jawaabon ke saath test set banana, aur use numbered versions mein rakh paana
  - found, missed aur galat flag hui cheezon ka scoreboard padh paana
  - ek request ko 5 task types mein se ek mein daal paana, aur bata paana ki kaun se kaam program grade kar sakta hai
terms:
  - test set | teacher ka question paper, jisme sahi jawaab pehle se likhe hon: asli ya asli jaise examples jinse system ko naapa jaata hai | test sets
  - answer key | guard ke liye teacher ki answer key: har example sentence ke liye theek-theek yeh ki kya milna chahiye aur uske saath kya hona chahiye, jo numbered versions mein save hoti hai | answer keys
  - scoreboard | woh table jo tool ke har version ke liye ginta hai ki usne kya dhoondha, kya chhod diya, aur kya galti se flag kar diya | scoreboards
  - task type | 5 tarah ke kaamon mein se kaun sa kaam ek request asal mein hai: classify, extract, summarise, rewrite ya generate | task types
---

Lakshmi Iyer ne 3 hafte pehle poochha tha ki Anaya ko kaise pata chalega ki tool kaam karta hai. Anaya ke paas abhi bhi jawaab nahi tha. April ke beech tak woh yeh sawaal aur taal nahi sakti thi.

Ek Wednesday dopahar usne glass room mein Imran Qureshi se poochha. Uske peeche whiteboard tha. Usme ab bhi laal rang mein likha tha, "Kam hona, theek hona nahi hai". Imran ka jawaab chhota tha. Tool ko aise examples par chalaiye jinka sahi jawaab pehle se pata ho, aur gin lijiye. Anaya ne poochha ki aap bolte hain toh yeh itna mushkil kyun lagta hai. "Kyunki pehle kisi ko jawaab likhne padte hain," Imran ne kaha.

Yeh chapter usi likhne ke baare mein hai. Isme woh table hai jo usse nikla. Aur kaamon ko chhaantne ka ek tareeka bhi, jo tay karta hai ki kisi bhi result ko kaise naapa jaaye.

## Case: woh version jo sabko pasand aaya

Team ke paas ab instruction ke 4 versions the. Har ek pichhle se thoda lamba tha. Sabse chhota Imran ki seedhi request thi. Sabse lambe mein kaam, steps, do worked examples aur ek warning thi. (Worked example matlab chahe gaye output ka ek poora bana hua sample.)

Pichhli shaam Neha ne chaaron versions ke outputs paanch messages par padhe the. Usne paper test mein madad ki thi. Usne kaha ki chautha saaf taur par sabse achha hai. Woh achha padhta tha. Woh dhyaan se likha hua lagta tha, aur khud ko samjhata tha. Anaya ne sar hilaya tha. Use thodi sharm aayi ki usne kitni jaldi haan kar di.

## Sirf ehsaas kaafi kyun nahi hai

Kuch outputs padhna aur jo sahi lage use chunna, system ko judge karne ka sabse swaabhaavik tareeka hai. Yahi sabse kam bharose ka bhi hai. Yeh aise hai jaise teacher sirf teen sabse sundar dikhne wali answer sheets check kare. Aap wahi outputs padhte hain jo padhe gaye. Achha demonstration sirf yeh dikhata hai ki tool achhe din par kya kar sakta hai. Aur lamba, dhyaan se likha hua jawaab zyada achha lagta hai, chahe woh ho ya na ho.

Ilaaj hai *test set*. Ise exam ka question paper samjhiye. Yeh asli ya asli jaise examples ka collection hai. Har ek ka sahi jawaab pehle se likha hota hai.

::: key Do shabd sab kuch karte hain
"Pehle se" aur "likha hua" examples ke dher ko test bana dete hain. Pehle tool ka output padha, aur baad mein sahi jawaab tay kiya? Toh tool ne jo bhi kaha, woh lagbhag theek lagega.
:::

## 10 sentences

Thursday ko Anaya aur Farah ne 10 sentences likhe. Unhone unhe asli messages ke shape mein banaya. Milakar dasson ne mukhya cases cover kiye. 3 English mein the, 1 Hindi script mein, 3 Hinglish mein, aur 3 mushkil the.

Mix ki ek jhalak dekhiye. Ek seedha message tha jisme naam aur mobile number tha. Ek Hinglish message tha jisme Aadhaar number aise mobile number ke saath tha jo pehle se aadha chhupa tha. Ek Devanagari sentence tha jisme naam aur identity number tha.

Ek mein pita ka naam, Gurgaon ka pata aur employer tha. Ek ek insaan ki taraf ishaara karta tha, bina naam ya number diye. Aur ek mein kuch bhi personal nahi tha, isliye tool ko use chhod dena tha.

Har sentence ke liye unhone spreadsheet mein chhe cheezein likhin, kuch bhi chalane se pehle. Number, likhne ka tarika, sentence, kya milna chahiye, uske saath kya hona chahiye, aur ek note.

Table: Pehli answer key ki 4 rows
| No. | Writing | Sentence | Kya milna chahiye | Kya hona chahiye |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | naam, mobile, email | teeno chhupa do |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | naam, mobile | dono chhupa do |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | koi fixed shape wali cheez nahi; poora sentence ek hi insaan ki taraf ishaara karta hai | flag karo, taaki koi insaan decide kare |
| 9 | English | What documents do I need to renew my driving licence? | kuch nahi | chhod do |

Yeh spreadsheet *answer key* hai. Yeh guard ke liye teacher ki answer key hai. (Guard woh tool hai jo personal details dhoondhta aur chhupata hai.) Us par ek version number tha. Yeh version 1 thi, kone mein date aur "ten" shabd ke saath. Woh baaki project mein badhti rehti. Har baar badhne par woh usi file ka naya version ban kar save hoti, kabhi nayi file nahi. Is tarah koi bhi bata sakta tha ki score kaun si key se naapa gaya.

## Scoreboard

Team ne chaaron instructions ko dasson sentences par chalaya. Har run mein unhone teen cheezein ginin.

Pehli, tool ne kitni asli details dhoondhi. Doosri, kitni chhod di, kyunki woh nikal gayi. Teesri, kitni galat flag ki. Yeh false alarm hai: tool ne kuch aisa chhupa diya jo personal tha hi nahi. Dasson sentences mein key ke hisaab se 17 asli details thi.

Table: Pehla scoreboard
| Version | Found | Missed | False alarms |
| --- | --- | --- | --- |
| 1. Seedhi request | 11 | 6 | 5 |
| 2. Kaam aur padhne wale ka naam batao | 12 | 5 | 4 |
| 3. Worked examples joda | 15 | 2 | 2 |
| 4. Steps aur warning joda | 14 | 3 | 1 |

Aise table ko, jisme har version ki ek row ho, *scoreboard* kehte hain. Yeh cricket match ke board jaisa hai. Ismein koi raay nahi hoti. Use farq nahi padta ki chautha jawaab kitna sundar padhta hai.

Dekhiye woh version chaar ke baare mein kya kehta hai, jo Neha ne chuna tha. Version teen ne ek detail zyada dhoondhi aur ek false alarm zyada diya. Is sauda par baat ho sakti hai. Lekin version chaar sabse achha nahi tha, aur woh lagbhag doguna lamba tha. "Hum ise ship kar dete," Anaya ne kaha.

### Ek baar mein ek badlaav

Phir Imran ko apne hi tareeke mein ek kami dikhi. Version do se chaar ke beech usne teen cheezein ek saath badli thi. Kaam, steps aur warning. Isliye woh nahi bata sakta tha ki kisne madad ki. Ho sakta hai ek cheez results bigaad rahi ho, aur baaki do use sambhal rahi hon.

Usne board par laal line ke neeche "ek baar mein ek badlaav" likha. Yeh aise hai jaise cook sirf namak badle, phir chakhe. Yeh dheema hai, aur jaanne ka yahi ek tareeka hai. Agli baar koi kahe ki usne prompt tune kiya, toh poochhiye ki usne kitni cheezein badli.

## Yeh kaun sa kaam hai

Us shaam Imran ne phir napkin nikaali. Un machines se log jo bhi maangte hain, usme se lagbhag har request paanch kaamon mein se ek hai. Kaam ka shape tay karta hai ki result kaun check kar sakta hai. Kabhi program kar sakta hai. Kabhi sirf insaan. Isliye jab tak kaam pata na ho, tareeka nahi chun sakte.

Table: 5 task types
| Task type | Kya karta hai | Example | Kya program grade kar sakta hai? |
| --- | --- | --- | --- |
| Classify | Input ko pehle se tay dabbon mein se ek mein rakhta hai | Yeh message complaint hai, query hai ya request? | Haan |
| Extract | Input mein jo cheezein hain, unhe bahar nikaalta hai | Account number kya hai? Date kya hai? | Haan |
| Summarise | Input ko chhota karta hai, bina zaroori baatein khoye | Lambi chat ka chhota byora | Sirf kuch had tak |
| Rewrite | Matlab wahi rakhta hai, aur form ya tone badalta hai | Is reply ko aur polite banao | Nahi, insaan ko judge karna padega |
| Generate | Kuch naya banata hai | Is customer ko reply likho | Nahi, insaan ko judge karna padega |

Pehle do ke sahi jawaab hote hain. Cheez document mein hai, ya nahi hai. Isliye program unhe grade kar sakta hai, jaise machine multiple-choice sheet check karti hai. Baaki teen padhne wale par tikte hain. Summary achhi hai ya nahi, yeh sirf insaan bata sakta hai.

Ise *task type* kehte hain. Anaya ne turant dekha ki chaar product risks ke baad yeh sabse kaam ka vichar hai.

Ab ise guard par lagaiye. Guard messages ke andar identity numbers aur naam dhoondhta hai. Yeh extraction hai. Woh yeh bhi tay karta hai ki har detail kis tarah ki hai. Yeh classification hai. Dono ke sahi jawaab hain. Dono bina insaan ke grade ho sakte hain. Lagbhag ittefaq se, usne aisa project chuna tha jiske results pehle din se ginne laayak the.

Chatbot alag tha. Uska kaam jawaab likhna tha. Yeh generation hai, aur ise koi automatically grade nahi kar sakta. Shayad isiliye kisi ne kiya nahi tha.

::: watch Ek request aksar coat pehne hue teen kaam hota hai
"Kya AI hamara inbox sambhal sakta hai?" ek kaam nahi hai. Yeh kam se kam teen kaam hain. Message ko type se classify karo. Account number extract karo. Reply ka draft likho. Har ek apne tareeke se fail hota hai. Sirf pehle do insaan ke bina naape ja sakte hain.

Jis request mein ek se zyada task type ho, use todiye. Farah darwaze se guzar rahi thi. Usne poochha ki agar woh bas keh de ki chat sambhal lo toh kya hoga. Imran ne poochha ki teeno mein se kaun sa kaam.
:::

## Lakshmi ke sawaal ka jawaab

Friday ko Anaya ne Lakshmi ko likha. Email mein tha ki team tool ka jawaab dekhne se pehle sahi jawaab likh legi. Abhi 10 the, aur aage aur aayenge. File ka har version rakha jaayega.

Tool ke har version ke liye team ginegi ki usne kya dhoondha, kya chhoda, aur kya galat flag kiya. Phir woh table unhe dikhayegi. Agar koi number kharab hua, toh woh dekh lengi. Team ko abhi nahi pata tha ki tool kitna achha hoga. Lekin use pata hoga ki woh kitna achha hai.

Jawaab ek shabd ka tha: "Better."

## Summary

Kuch outputs padhna aur jo sahi lage use chunna kamzor tareeka hai, padhne wala kitna bhi imaandaar ho. Test set ise theek karta hai. Usme asli jaise examples hote hain jinke sahi jawaab pehle se likhe aur numbered versions mein save hote hain.

- Guard ki answer key har example sentence ke liye likhti hai ki kya milna chahiye aur uske saath kya hona chahiye.
- Scoreboard ginta hai ki har version ne kya dhoondha, kya chhoda, aur kya galat flag kiya. Yeh progress dikhata hai aur raay ko bahar rakhta hai.
- Ek baar mein ek hi cheez badlo, warna pata nahi chalega ki kisne madad ki.
- Tareeka chunne se pehle task type ka naam lo. Classify aur extract program grade kar sakta hai. Summarise, rewrite aur generate ke liye insaan chahiye. Jis request mein kai types milein, use todo.

Agle chapter mein Anaya answer key ko model ke do rozmarra ke kaamon par lagati hai: messages ko dabbon mein chhaantna aur unki summary banana.
