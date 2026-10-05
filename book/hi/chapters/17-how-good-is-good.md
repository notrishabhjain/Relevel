---
title: Kitna Achha, Achha Hota Hai
summary: Ek founder woh sawaal poochhta hai jo har AI project ko kabhi na kabhi milta hai. Jawaab do number hain, unke beech ka ek chunaav jo engineer ka nahi hai, aur ek figure jo Anaya ne bina jaanche bol diya tha. Chapter recall aur precision samjhata hai.
course: ch6
goals:
  - samjhana ki kuch chale hue udaharanon ka demonstration saboot kyun nahi hai
  - found, missed aur galat flagged ginti se recall aur precision nikalna
  - yeh dekh kar tay karna ki kis failure ko tarjeeh deni hai ki har ek hone par ek asli insaan ke saath kya hota hai
  - kisi aur ke quote kiye figure ko tab tak unverified maanna jab tak uska test dikhe nahi
terms:
  - recall | jitni asli cheezein dhoondhni thin, unmein se tool ne kitne ka hissa dhoondha; agar 100 thin aur usne 90 dhoondhin, toh recall 90 percent hai | 
  - precision | tool ne jitna flag kiya, usme se kitna sach mein wahi tha jo usne kaha; agar usne 100 flag kiye aur 80 asli the, toh precision 80 percent hai | 
---

May ke pehle hafte mein founders glass room par se guzarte hue ruke. Unme se ek, Mr. Bhatia, ne whiteboard aur scoreboard ko dekha aur wahi sawaal poochha jo har us company mein kabhi na kabhi poochha jaata hai jo AI ke saath banati hai: "Kya yeh achha hai?"

Ek second zyada lambi chuppi rahi. Imran Qureshi ne kaha ki pichhle run mein satrah mein se pandrah mile the. Mr. Bhatia ne kaha ki yeh achha hai. Anaya ne dhyaan dilaya ki yeh satrah mein se pandrah un das vaakyon par the jo team ne khud likhe the, aur use abhi nahi pata tha ki yeh achha hai ya nahi. Woh ek hafte mein, ek number ke saath, bata sakti thi. Mr. Bhatia ko is jawaab ki aadat nahi thi, aur unhone baad mein kaha ki kisi ne unhe pehli baar aise jawaab diya.

Yeh chapter us jawaab ko vistaar se batata hai jo Anaya ne dene ka vaada kiya tha: woh do number jo koi cheez dhoondhne wale tool ko naapte hain, unke beech ka chunaav, aur kuch bolne se pehle figure ko jaanchne ki aadat.

## Case: ek sawaal jiske saath koi number nahi

Aam taur par "kya yeh achha hai?" ka jawaab teen udaharanon ka demonstration hota hai jo kaam kiye. Aisa demonstration bahut kam batata hai ki system kitni baar sahi hai, kyunki teen chune gaye the, aur jo cases nahi chune gaye woh woh hain jinhe dekhne ki zaroorat thi.

Imran isi tarah ke naap par kaam kar raha tha, guard ke liye nahi balki us hisse ke liye jo uske peechhe khada hai: chatbot ne kitni achhi tarah Sahaj ki policies ka sahi page customer ke sawaal ke liye dhoondha. Seekh lagbhag shabd-ba-shabd laagu hui.

## Demonstration saboot nahi hai

Tareeke mein teen vichaar hain, aur pehla hai test karne se pehle jawaab likhna. Kisi system ko sawaal poochhkar aur dekh kar ki jawaab sahi lagte hain, parkha nahi ja sakta, kyunki woh sahi lagenge: saaf-suthra text hi toh machine banati hai. Isliye kaam asli sawaalon ki list aur har ek ke satyapit sahi jawaab se shuru hota hai. Yeh wahi answer key hai jo Anaya pehle hi bana chuki thi, test ke baad nahi balki pehle likhi gayi.

Farah ne chatbot ki search ke liye das sawaal likhe, apne customers ke shabdon mein, policy document kholne se pehle. Document padhne ke baad likha gaya sawaal document ke shabdon mein khatam hota hai aur search ko asli se behtar dikhata hai. Uske sawaalon mein "Paisa kab milega", "Double charge hua hai" aur "Mera loan reject kyun hua" the. Tabhi usne aur Imran ne pages mein jaakar chinhit kiya ki har ek ka jawaab kis page par tha.

Unhone test chalaya. Das mein se chhe sawaalon ne pehli koshish mein sahi page dhoondha. Imran ne ise ek aise system ka bilkul saamaanya pehla nateeja kaha jo kaam karta hai, aur kaha ki agar nau ya das hote, toh woh jaanna chahta ki kisi ne dhokha toh nahi diya.

## Fail hone ke do tareeke

Doosra vichaar Anaya ko samajhne mein zyada waqt laga, kyunki woh saamne chhupa tha. Search ka ek kadam do ulte tareekon se galat ho sakta hai. Woh woh cheez chhod sakta hai jo maayne rakhti thi, ya woh bahut saari cheezein la sakta hai jo nahi rakhti thi. Imran ne Anaya se ek saathi ko meeting ki files laane bhejne ki kalpana karne ko kaha. Agar saathi us ek file ke bina lautta hai jo chahiye thi, toh yeh ek tarah ki failure hai. Agar saathi poori almaari le aata hai, toh baaki ke beech chahiye file dhoondhi nahi ja sakti, aur yeh doosri tarah ki failure hai.

::: def Recall aur precision
*Recall* un asli cheezon ka hissa hai jo dhoondhni thi aur tool ne paayi. Agar sau thi aur nabbe mili, toh recall nabbe percent hai. *Precision* un cheezon ka hissa hai jo tool ne flag ki aur jo sach mein woh thi jo usne kaha. Agar usne sau flag ki aur assi sahi thi, toh precision assi percent hai.
:::

Dono ek doosre ke khilaaf khinchte hain. Jaal chauda karne se jo chahiye uska zyada hissa milta hai aur jo nahi chahiye uska bhi. Use sankara karne se saaf pakad milti hai aur zyada chhoot jaata hai. Imran ne har sawaal ke liye search jitne pages lautati thi unki ginti ek se teen se paanch tak badli, aur figure waise hi hile jaise usne kaha tha: zyada pages se recall behtar aur precision kharab hui, aur kam pages se ulta. Yeh pravritti hain, niyam nahi, aur unhe asli sawaalon par naapna padta hai.

Anaya inhe hafton se bina shabdon ke istemaal kar rahi thi. Woh scoreboard par lauti.

Table: Pichhla scoreboard, recall aur precision ke saath
| Version | Mili | Chhoot gayi | False alarm | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Recall mili ko mili aur chhoot gayi ke jod se bhaag dene par aata hai. Precision mili ko mili aur false alarm ke jod se bhaag dene par. "Chhoot gayi" hamesha se kharab recall tha aur "false alarm" kharab precision. Use naye vichaaron ki utni zaroorat nahi thi jitni purane vichaaron ko sahi naam dene ki.

## Faisla kiska hai

Teesra vichaar ek dopahar ke ant mein aaya. Imran ne poochha ki guard ke liye kaun si failure zyada buri hai: kuch chhoot jaana, ya aisa kuch flag karna jo tha hi nahi. Anaya ne turant kaha ki chhoot jaana zyada bura hai, kyunki jo number nikal jaata hai woh paanch systems mein hamesha ke liye rehta hai. Imran ne kaha ki kisi aur product ke liye jawaab ulta hota hai.

Table: Kaun si failure zyada buri hai yeh is par nirbhar hai ki insaan ke saath kya hota hai
| Product | Zyada buri failure | Kyun |
| --- | --- | --- |
| Tool jo vakeel ko puraane cases dhoondh kar deta hai | Ek case chhodna | Ek chhoota case trial haara sakta hai; ek aprasangik case padhne mein tees second lagte hain |
| Chatbot jo policy ke sawaalon ka jawaab deta hai | Galat page lautana | Model usse aatmavishwaas se jawaab banata hai, aur customer ko di gayi galat policy company ko bandh deti hai. Chhoota jawaab sirf ek support ticket banata hai, jo company waise bhi paa rahi thi |
| Guard | Ek personal detail chhodna | Detail history, logs, exports aur bahari company ke system mein jaati hai |

Imran ne phir woh baat kahi jo woh sabse zyada saaf karna chahta tha. Kaun si failure kam karni hai yeh product faisla hai, engineer ka nahi. Agar jis engineer ne tool banaya usse poochha jaye, toh jawaab woh hoga jise dena uske liye sabse aasaan hai. Pichhle mahine mein yeh doosri baar tha jab Anaya ko aisa faisla saunpa gaya jo technical kaushal nahi le sakta tha. Pehla, sasti galti ki taraf jhukne ke baare mein, anaupchaarik tha. Yeh uska parinat roop tha, naam aur percent ke saath. Usne likha ki woh Thursday ko Lakshmi aur Farah ke paas kya lekar jaayegi.

::: example Anaya ke likhe lakshya
Fixed shakl ke pehchaan ke numbers ke liye, sau mein se kam se kam 98 ka recall. Tool jo sau cheezein chhupaye unme se 3 tak false alarm. Agar dono takraayein, toh recall jeetega, aur main ise likhit roop mein kahungi.
:::

Bayaan likhna us se aasaan tha jitna use bachaav karna hoga, jo usne maan liya. Jis number par behas ho chuki ho woh us number se zyada keemti hai jis par kabhi sawaal nahi uthaya gaya.

## Ek number jo usne jaancha nahi tha

Ek aur baat asahaj thi, aur Anaya ne ise ek Friday raat khaali office mein nipataya. Woh ek figure par lauti jo usne meetings mein teen baar quote kiya tha aur strategy memo mein likha tha: sau mein se chaudah, yaani ek maujooda khule tool ki apni chhapi report ke mutabik Hindi personal details ka woh hissa jo woh dhoondh sakta tha. Usne ise yeh kehne ke liye istemaal kiya tha ki bazaar mein khaali jagah asli hai.

Uske dimaag mein Lakshmi ki aawaaz mein ek sawaal aaya: kaun si answer key ke saamne, kisne likhi, aur kya Lakshmi sawaal dekh sakti hai? Anaya jawaab nahi de saki. Usne ek document mein ek vaakya padha tha aur use dohraya tha. Figure sahi ho sakta tha. Woh aise vaakyon par bhi naapa gaya ho sakta tha jo Sahaj ke customers ke likhne se bilkul alag dikhte the.

::: watch Quote kiya hua number saboot nahi hai
Vendor ka quote kiya number, chahe kitni bhi imaandaari se, tab tak saboot nahi hai jab tak koi dekh na sake ki woh kis par naapa gaya. Yeh doosron ke numbers par laagu hota hai aur apne numbers par bhi.
:::

Usne us raat jaanch nahi chalayi. Usne use list ke sabse upar likha, jahan woh chupchaap chhoot na sake: team ki answer key par khula tool chalao, aur jo bhi number nikle woh batao, chahe woh project ke paksh ko kamzor kare. Yeh pehli baar tha jab usne aisa test likha jiske nateeje se woh darti thi, aur usne pehchaana ki yahi anushaasan ka maksad hai.

## Saaraansh

Kuch chale hue udaharanon ka demonstration bahut kam batata hai ki system kitni baar sahi hai. Naapne ke liye, system ke kehne se pehle sawaal aur unke sahi jawaab likho, asli users ke shabdon mein, aur phir gino.

- Tool do ulte tareekon se fail ho sakta hai: woh cheezein chhodkar jo maayne rakhti thi, jo kharab recall hai, ya woh cheezein lautakar jo nahi rakhti thi, jo kharab precision hai. Ek ko badhane se aam taur par doosra ghatata hai.
- Kis ko tarjeeh deni hai yeh is par nirbhar hai ki har failure hone par ek asli insaan ke saath kya hota hai. Yeh product ke maalik ka faisla hai, banane wale ka nahi.
- Kisi aur ka quote kiya figure tab tak saboot nahi hai jab tak woh test dikhe jisse woh aaya.
