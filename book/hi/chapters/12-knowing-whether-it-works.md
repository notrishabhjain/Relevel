---
title: Kaise Pata Chale Ki Yeh Kaam Karta Hai
summary: Team yeh dekhna chhod deti hai ki jawaab kaisa lagta hai, tool ke jawaab dekhne se pehle sahi jawaab likh leti hai, aur paati hai ki jo version sabko pasand tha woh sabse achha nahi tha.
course: ch22 ch23
terms:
  - test set | asli ya yatharth udaharanon ka ek sangrah, har ek ke saath pehle se likha sahi jawaab, jo kisi system ko naapne ke kaam aata hai | test sets
  - answer key | guard ka test set: har udaharan vaakya ke liye, theek-theek kya milna chahiye aur uske saath kya hona chahiye, numbered versions mein rakha hua | answer keys
  - scoreboard | woh table jo tool ke har version ke liye gintaa hai ki usne kya dhoondha, kya chhoda aur galti se kya flag kiya | scoreboards
  - task type | paanch kismon ke kaam mein se kaun sa ek request asal mein hai: classify, extract, summarise, rewrite ya generate | task types
---

"Tumhein kaise pata chalega ki yeh kaam karta hai?"

Lakshmi ne yeh teen hafte pehle poochha tha, ek aise kamre mein jiski khidki deewar ki taraf khulti thi, aur Anaya ne kaha tha ki use abhi nahi pata. Use ab bhi nahi pata tha. Lekin sawaal uske andar waise rehne laga tha jaise jute mein ek kankar rehta hai, aur April ke beech tak usne uske aas-paas chalne ki koshish karna chhod diya tha.

Usne Wednesday dopahar ise Imran ke saamne rakha, glass room mein, us whiteboard ke saamne jis par laal rang mein *Rarer is not fixed* likha tha.

"Hum use aise udaharanon par chalate hain jinke jawaab hamein pehle se pata hain," usne kaha, jaise koi recipe padh raha ho. "Phir hum ginte hain."

"Tum jab kehte ho toh yeh itna mushkil kyun lagta hai?"

"Kyunki iska matlab hai ki kisi ko pehle jawaab likhne honge."

## Ehsaas kaafi kyun nahi hain

Unke paas ab tak nirdesh ke chaar version the, har ek pichhle se thoda lamba. Sabse chhota Imran ka saral request tha. Sabse lamba mein kaam tha, charan the, do worked examples the aur ek chetawani.

Pichhli shaam Neha, jo agent paper test mein shaamil thi, ne paanch messages par chaaron ke outputs padhe the aur kaha tha ki chauthi saaf-saaf sabse achhi hai. Woh achhi padhi jaati thi. Woh saavdhaan lagti thi. Woh khud ko samjhati thi. Anaya ne sir hilaya tha, aur use thodi sharm thi ki kitni aasaani se.

Kuch outputs padhna aur jo sahi lage use chunna kisi system ko parakhne ka sabse prakritik tareeka hai aur sabse kam bharosemand. Jo kuch aap padhte hain woh wahi hote hain jo aapne padh liye. Jo demo achha jaata hai woh bataata hai ki tool achhe din par kya kar sakta hai. Aur zyada lamba, zyada vistrit sunayi dene wala jawaab behtar lagta hai chahe woh ho ya na ho.

Ilaaj hai *test set*: asli ya yatharth udaharanon ka ek sangrah, har ek ke saath sahi jawaab pehle se likha hua. "Pehle se" aur "likha hua" shabd saara kaam karte hain. Agar aap pehle dekhte hain ki tool kya kehta hai aur baad mein tay karte hain ki sahi kya tha, toh aap paayenge ki jo kuch usne kaha woh lagbhag theek tha.

## Das vaakya

Thursday ko Anaya aur Farah ne das likhe.

Woh asli customers ke messages nahi the; yeh tay ho chuka tha. Woh banaye gaye the, asli jaise dhaale gaye, aur milkar unhone mukhya cases cover kiye. Teen English mein, ek Hindi lipi mein, teen Hinglish mein, aur teen tedhe. Ek saada message ek naam aur mobile number ke saath. Ek Hinglish message jisme Aadhaar number ek aise mobile number ke bagal mein hai jo pehle se aadha chhupa hua hai. Devanagari mein ek vaakya ek naam aur pehchaan ke number ke saath. Ek message jisme pita ka naam, Gurgaon ka pata aur employer hai. Ek vaakya jo bina naam ya number ke ek insaan ki taraf ishaara karta hai. Ek vaakya jisme kuch bhi personal nahi hai, jise tool ko chhod dena tha.

Har ek ke liye unhone, ek spreadsheet mein aur kuch chalaye bina, chhe cheezein likhin: ek number, likhne ka tareeka, vaakya khud, kya milna chahiye (detail ka kism aur theek-theek shabd), uske saath kya hona chahiye, aur ek note.

| No. | Likhne ka tareeka | Vaakya | Kya milna chahiye | Kya hona chahiye |
| --- | --- | --- | --- | --- |
| 1 | English | Hi, I am Rahul Verma. My mobile number is 9876543210 and my email is rahul.verma@example.com. | naam, mobile, email | teenon chhupao |
| 3 | Hinglish | mera naam Rishabh Jain hai, mera mobile number 9876543210 hai | naam, mobile | dono chhupao |
| 8 | English | I am the only diabetic patient in my village who had a transplant last year. | koi shape wali cheez nahi; poora vaakya ek insaan ki taraf ishaara karta hai | kisi insaan ke tay karne ke liye flag karo |
| 9 | English | What documents do I need to renew my driving licence? | kuch nahi | ise chhod do |

Yeh spreadsheet *answer key* hai. Isme ek version number hai, aur yeh pehla hai. Unhone ise version 1 kaha, aur Anaya ne kone mein tareekh aur shabd *das* type kiya. Yeh baaki project ke liye badhne wali thi. Jab bhi badhti, use usi file ke naye version ke roop mein save kiya jaata, kabhi nayi file ke roop mein nahi, taaki koi bhi keh sake ki kaun si key ke khilaaf score naapa gaya tha.

## Scoreboard

Phir unhone chaaron nirdesh saare das vaakyon par chalaye, aur gina.

Har run ke liye teen number maayne rakhte the. Kitni asli details mili. Kitni asli details *chhoot gayin*, yaani tool ne unhe jaane diya. Aur kitni cheezein galti se flag hui: ek *false alarm*, ek aisa case jahan tool ne kuch aisa chhupa diya jo personal tha hi nahi. Das vaakyon mein answer key mein satrah asli details thin.

| Version | Mili | Chhooti | False alarms |
| --- | --- | --- | --- |
| 1. Saada request | 11 | 6 | 5 |
| 2. Kaam aur padhne wale ka naam lo | 12 | 5 | 4 |
| 3. Worked examples jodo | 15 | 2 | 2 |
| 4. Charan aur chetawani jodo | 14 | 3 | 1 |

Is tarah ki table, har version ki ek row, *scoreboard* hai. Ismein koi raay nahi hoti. Use parwaah nahi ki chauthi jawaab khoobsurati se padha jaata hai.

"Chauthi version Neha ne chuna tha," Farah ne kaha.

"Aur teesra ek zyada dhoondhta hai," Anaya ne kaha, "aur ek zyada false alarm uthata hai. Hum us par behes kar sakte hain. Lekin chauthi sabse achha nahi hai, aur woh lagbhag doguna lamba hai." Usne upar dekha. "Hum use ship kar dete."

Imran pehle se woh hissa likh raha tha jo use sabse kam pasand tha. "Maine do aur chaar ke beech teen cheezein badli. Kaam, charan aur chetawani, ek saath. Toh main tumhe nahi bata sakta ki kisne madad ki. Ho sakta hai inmein se ek ise bura kar raha ho aur baaki do bharpayi kar rahe hon." Usne laal line ke neeche *ek baar mein ek badlaav* likha. "Yeh dheema hai. Jaanne ka yahi ek tareeka hai. Jab koi kahe ki unhone 'prompt tune kiya', toh unse poochho ki unhone kitni cheezein badli."

## Yeh kaun sa kaam hai

Us shaam, jab baaki log chale gaye, Imran ne napkin dobara nikala. Woh thakne laga tha.

"Ek cheez hai jo mujhe tumhein key likhne se pehle batani chahiye thi," usne kaha. "In machines se log jo bhi request karte hain woh lagbhag har ek paanch kaamon mein se ek hota hai. Kaam ki shape tay karti hai ki aap nateeje ko program se naap sakte hain ya sirf haath se. Aap tab tak tareeka nahi chun sakte jab tak aapko pata na ho ki woh kaun sa hai."

Usne side mein paanch shabd likhe aur har ek ke bagal mein woh kya karta hai.

**Classify**: input ko tay set ke dibbon mein se ek mein daalo. *Kya yeh message shikayat hai, sawaal hai ya request?* **Extract**: input mein jo khaas cheezein hain unhe nikaalo. *Account number kya hai? Tareekh?* **Summarise**: use chhota karo bina woh khoye jo zaroori hai. **Rewrite**: matlab rakho aur roop ya lahja badlo. **Generate**: kuch naya banao.

"Pehle do ke sahi jawaab hote hain," usne kaha. "Value document mein hai ya nahi. Ek program unhe grade kar sakta hai. Baaki teen padhne wale par nirbhar hain, aur sirf ek insaan keh sakta hai ki saar achha hai ya nahi."

Yeh *task type* tha, aur Anaya ne kuch hairaani se mehsoos kiya ki chaar risks ke baad yeh sabse kaam ka idea tha. Usne guard ko dekha. Woh messages ke andar pehchaan ke numbers aur naam dhoondhta tha: yeh extraction tha. Woh tay karta tha ki har detail kis kism ki hai: yeh classification tha. Dono ke sahi jawaab the. Dono ko bina kisi insaan ke grade kiya ja sakta tha. Usne, lagbhag ittefaq se, aisa project chuna tha jiske nateeje pehle din se gine ja sakte the.

Chatbot, usne dekha, ek alag baat thi. Uska kaam jawaab likhna tha, aur likhna generation hai, jiska koi sahi jawaab nahi. Koi use apne aap grade nahi kar sakta tha, jisse shaayad samajh aata tha ki kisi ne kiya kyun nahi.

"Ek chetawani," Imran ne kaha. "Log nateejon ki baat karte hain. 'Kya AI hamara inbox sambhal sakta hai?' Yeh ek kaam nahi hai. Yeh teen kaam hain jo ek coat pehne hue hain. Message ko type se classify karo. Account number extract karo. Reply ka draft likho. Har ek alag tareeke se fail hota hai, aur sirf pehle do bina insaan ke naape ja sakte hain. Agar koi aisi request de jisme ek se zyada kism ho, toh use todo."

Farah, jo apna chhaata lene wapas aayi thi, darwaze par ruki. "Agar main kahun ki bas chat sambhal lo?"

"Toh main poochunga ki teeno kaamon mein se tumhara matlab pehle kaun sa hai," Imran ne kaha, aur woh hansi, aur chali gayi.

## Lakshmi ka sawaal, jawaab ke saath

Friday ko Anaya ne Lakshmi ko likha. Yeh ek chhota email tha, aur yeh pehla tha jise usne likha aur jiske peeche woh khadi ho sakti thi.

*Aapne poochha tha ki hamein kaise pata chalega ki yeh kaam karta hai. Hum tool ke jawaab dekhne se pehle sahi jawaab likhenge. Abhi hamare paas das hain, aur hum aur jodenge. Hum us file ka har version rakhenge. Hum, tool ke har version ke liye, ginenge ki usne kya dhoondha, kya chhoda aur kya galti se flag kiya, aur aapko table dikhayenge. Agar koi number kharab hoga, toh aap dekhengi.*

*Hamein abhi nahi pata ki yeh kitna achha hoga. Hamein pata hoga ki yeh kitna achha hai.*

Jawaab ek shabd ka tha, aur woh tha *Better.*

## Saath le jaane layak baatein

Kuch outputs padhna aur jo sahi lage use chunna bharosemand nahi hai, padhne wala chahe kitna bhi imaandaar ho. Test set isse theek karta hai: yatharth udaharan jinke sahi jawaab pehle se likhe gaye hon aur numbered versions mein saheje gaye hon. Ek system ne kya dhoondha, kya chhoda aur kya galti se flag kiya, yeh version-dar-version ek table mein ginna, pragati ko dikhane yogya banata hai aur raayon ko bahar rakhta hai. Ek baar mein ek cheez badlo, warna aapko pata nahi chalega ki kisne madad ki. Aur tareeka chunne se pehle, kaam ka naam lo: har request classify, extract, summarise, rewrite aur generate ka koi na koi mishran hai, aur pehle do program se grade ho sakte hain.
