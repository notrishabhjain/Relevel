---
title: Kitna Achha Hai Achha
summary: Ek founder woh sawaal poochhta hai jo har AI project ko kabhi na kabhi sunna padta hai. Jawaab nikalta hai do numbers, unke beech ek choice jo engineer ka kaam nahi hai, aur ek figure jo Anaya ne bina check kiye bol diya tha. Chapter mein recall aur precision aate hain.
course: ch6
goals:
  - samjha paana ki kuch chalte hue examples ka demonstration saboot kyun nahi hota
  - bata paana ki recall aur precision kya hain, aur found, missed aur galat flag hui cheezon ki ginti se dono nikaal paana
  - yeh poochh kar tay kar paana ki kaun si failure ko favour karna hai, ki jab har failure hoti hai toh ek asli insaan ke saath kya hota hai
  - kisi aur ka bataya hua figure tab tak unverified maan paana jab tak aap uska test dekh na lein
terms:
  - recall | jitni asli cheezein dhoondhni thi, unmein se tool ne kitne percent dhoondhin; agar 100 thi aur tool ne 90 dhoondhin, toh recall 90 percent hai | 
  - precision | tool ne jitni cheezein flag ki, unmein se kitne percent asal mein wahi thi jo tool ne kaha; agar usne 100 flag ki aur 80 asli thi, toh precision 80 percent hai | 
---

May ke pehle hafte mein founders lunch par jaate hue glass room ke paas ruke. Unmein se ek, Mr. Bhatia, ne whiteboard aur scoreboard ko dekha. Phir usne woh sawaal poochha jo AI se kuch banane wali har company se kabhi na kabhi poochha jaata hai: "Is it good?"

Ek pause aaya, aur woh ek second zyada lamba chala. Imran Qureshi ne kaha ki pichhli run mein tool ne 17 mein se 15 dhoondhe. Mr. Bhatia ne kaha ki yeh achha hai.

Tabhi Anaya bol padi. Usne kaha ki yeh 17 mein se 15 un 10 sentences par hai jo team ne khud likhe the, aur use abhi nahi pata ki yeh achha hai ya nahi. Woh ek hafte mein ek number ke saath bata sakti hai. Mr. Bhatia ko aisa jawaab sunne ki aadat nahi thi. Baad mein usne kaha ki pehli baar kisi ne use aisa jawaab diya.

Yeh chapter wahi jawaab banata hai jiska Anaya ne waada kiya tha. Ismein teen hisse hain: woh do numbers jo cheezein dhoondhne wale tool ko naapte hain, un dono ke beech ki choice, aur kisi figure ko dohrane se pehle use check karne ki aadat.

## Case: ek sawaal jiska koi number nahi tha

Aam taur par "is it good?" ka jawaab hota hai 3 aise examples ka demonstration jo chale. Isse yeh lagbhag kuch nahi pata chalta ki system kitni baar sahi hota hai. Woh 3 chune hue the. Aur jo cases chune nahi gaye, wahi woh hain jinhe dekhna zaroori tha.

Imran isi tarah ke ek measurement par kaam kar raha tha. Woh guard ke liye nahi tha, balki uske peeche wale hisse ke liye tha: chatbot customer ke sawaal ke liye Sahaj ki policies ka sahi page kitni achhi tarah dhoondhta hai. Seekh lagbhag shabd-ba-shabd wahi thi.

## Demonstration saboot nahi hai

Is tareeke mein teen ideas hain. Pehla yeh hai ki test karne se pehle jawaab likh lijiye.

Aap kisi system se sawaal poochh kar aur yeh dekh kar usse judge nahi kar sakte ki jawaab sahi lagte hain ya nahi. Woh sahi lagenge. Machine wahi toh banati hai, plausible text. Isliye kaam asli sawaalon ki list se shuru hota hai, aur har ek ke verified sahi jawaab se. Yeh wahi answer key hai jo Anaya pehle hi bana chuki thi, jo test se pehle likhi gayi, baad mein nahi.

Farah ne chatbot ki search ke liye 10 sawaal likhe, un words mein jo uske customers use karte hain. Usne unhe policy document kholne se pehle likha. Jo sawaal document padhne ke baad likha jaata hai, woh document ke hi words use karne lagta hai, aur isse search asal se zyada achhi dikhti hai. Uske sawaalon mein "Paisa kab milega", "Double charge hua hai" aur "Mera loan reject kyun hua" the. Uske baad hi usne aur Imran ne pages dekhe aur har sawaal ke liye mark kiya ki jawaab kis page par hai.

Unhone test chalaya. 10 mein se 6 sawaalon ne pehli koshish mein sahi page dhoondh liya. Imran ne ise ek aise system ka bilkul normal pehla result kaha jo kaam karta hai. Usne jodd diya ki agar yeh 9 ya 10 hota, toh woh jaanna chahta ki kisi ne cheating toh nahi ki.

## Fail hone ke do tareeke

Doosra idea Anaya ko samajhne mein zyada waqt laga, kyunki woh saamne hi chhupa tha. Search step do ulte tareekon se galat ho sakta hai. Woh kuch aisa chhod sakta hai jo zaroori tha. Ya woh bahut saari aisi cheezein wapas la sakta hai jo zaroori nahi thi.

Imran ne use kaha ki socho ki aapne apne colleague ko meeting ki files lene bheja. Agar colleague us ek file ke bina wapas aata hai jo aapko chahiye thi, toh woh ek tarah ki failure hai. Agar colleague poori almari utha laata hai, toh aap baaki files ke beech wahi file dhoondh nahi paate. Woh doosri tarah ki failure hai.

::: def Recall aur precision
*Recall* woh percent hai jo dhoondhni wali asli cheezon mein se tool ne dhoondh nikaala. Agar 100 thi aur tool ne 90 dhoondhi, toh recall 90 percent hai. *Precision* woh percent hai jo tool ne flag kiya, aur jo asal mein wahi tha jo tool ne kaha. Agar usne 100 flag ki aur 80 asli thi, toh precision 80 percent hai.
:::

Dono ek doosre ko kheenchte hain. Jaal chauda kijiye, toh jo chahiye woh bhi zyada pakadta hai aur jo nahi chahiye woh bhi. Jaal tang kijiye, toh catch saaf hota hai, lekin zyada chhoot jaata hai.

Imran ne use karke dikhaya. Usne har sawaal ke liye search jitne pages wapas deti thi, woh badla: 1 se 3, phir 5. Figures waise hi hile jaise usne kaha tha. Zyada pages se recall behtar hua aur precision kharab. Kam pages se ulta hua. Yeh tendencies hain, laws nahi, aur inhe aapko apne asli sawaalon par naapna padega.

Anaya hafton se yeh ideas bina naam ke use kar rahi thi. Woh wapas scoreboard ke paas gayi.

Table: Pehla scoreboard, recall aur precision jodkar
| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Hisaab seedha hai. Recall matlab found ko found plus missed se bhaag dena. Precision matlab found ko found plus false alarms se bhaag dena. Matlab "missed" ka matlab hamesha se kharab recall tha, aur "false alarm" ka matlab kharab precision. Use naye ideas se zyada, purane ideas ko use karne ki ijaazat chahiye thi.

## Yeh faisla kiska hai

Teesra idea ek dopahar ke aakhir mein aaya. Imran ne poochha ki guard ke liye kaun si failure zyada buri hai: kuch miss kar dena, ya woh flag kar dena jo tha hi nahi.

Anaya ne turant jawaab diya. Miss karna zyada bura hai, kyunki jo number nikal jaata hai, woh 5 systems mein hamesha ke liye pahunch jaata hai. Imran ne kaha ki kisi aur product ke liye jawaab ulta hota hai.

Table: Kaun si failure zyada buri hai, yeh is par depend karta hai ki insaan ke saath kya hota hai
| Product | Zyada buri failure | Wajah |
| --- | --- | --- |
| Woh tool jo vakeel ke liye purane cases dhoondhta hai | Ek case miss kar dena | Miss hua case trial haara sakta hai; irrelevant case ke liye 30 second padhna padta hai |
| Chatbot jo policy ke sawaalon ke jawaab deta hai | Galat page wapas karna | Model usse ek confident jawaab bana leta hai, aur customer ko di gayi galat policy company ko bandhti hai. Jawaab na milne se bas ek support ticket banta hai, jo company ko waise bhi mil rahe the |
| Guard | Ek personal detail miss kar dena | Woh detail history, logs, exports aur bahar ki company ke system mein pahunch jaati hai |

Phir Imran ne woh baat kahi jo woh Anaya ko sabse zyada sunana chahta tha. Kaun si failure kam karni hai, yeh product ka faisla hai. Engineer ka nahi. Agar aap us engineer se poochhenge jisne tool banaya hai, toh woh aapko wahi jawaab dega jo uske liye dena sabse aasaan ho.

Ek mahine mein doosri baar Anaya ko aisa faisla mila tha jo technical skill se nahi liya ja sakta tha. Pehla, sasti galti ki taraf jhukne ke baare mein, informal tha. Yeh uska bada roop tha, naam aur percentages ke saath. Usne likh liya ki woh Thursday ko Lakshmi aur Farah ke saamne kya lekar jaayegi.

::: example Anaya ke tay kiye targets
Fixed shape wale identity numbers ke liye, recall kam se kam 100 mein 98. Tool jo 100 cheezein chhupaye, unmein zyada se zyada 3 false alarms. Agar dono takraayein, toh recall jeetega, aur main yeh likhit mein kahungi.
:::

Yeh statement likhna us se aasaan tha jitna ise defend karna hoga, aur Anaya ne yeh maan liya. Jis number par behas hui ho, woh us number se zyada kaam ka hai jise kisi ne kabhi sawaal nahi kiya.

## Ek number jo usne check nahi kiya tha

Ek aur baat thi jo asahaj thi. Anaya ne use Friday raat ko nipataya, jab office khaali tha.

Woh ek figure ke paas wapas gayi jo usne meetings mein 3 baar bola tha, aur strategy memo mein likha tha. Woh tha 100 mein 14: ek maujooda open tool Hindi personal details ka kitna hissa dhoondh sakta hai, uski apni published report ke hisaab se. Usne ise yeh dikhane ke liye use kiya tha ki market mein gap asli hai.

Ab uske dimaag mein Lakshmi ki awaaz mein ek sawaal aaya. Kis answer key ke against naapa gaya? Kisne likhi? Aur kya Lakshmi sawaal dekh sakti hai?

Anaya jawaab nahi de paayi. Usne ek document mein ek sentence padha tha aur use dohra diya tha. Ho sakta hai figure sahi ho. Ho sakta hai use aise sentences par naapa gaya ho jo Sahaj ke customers ke likhe se bilkul alag dikhte hon.

::: watch Bola gaya number saboot nahi hai
Vendor ka bataya hua number, chaahe kitni bhi imaandaari se bataya gaya ho, tab tak saboot nahi hai jab tak aap yeh na dekh lein ki use kis cheez ke against naapa gaya. Yeh doosron ke numbers par lagta hai, aur aapke apne numbers par bhi.
:::

Usne woh check us raat nahi chalayi. Usne use list ke sabse upar likh liya, jahan use chupchaap chhoda nahi ja sakta tha. Open tool ko team ki answer key par chalaiye, aur jo bhi number aaye, woh report kijiye, chaahe usse project ka case kamzor ho jaaye.

Yeh pehli baar tha jab usne aisa test likha jiske result se use darr tha. Usne pehchaana ki discipline isi ke liye hoti hai.

## Summary

Kuch chalte hue examples ka demonstration yeh lagbhag kuch nahi batata ki system kitni baar sahi hai. Ise naapne ke liye, system ka jawaab dekhne se pehle sawaal aur unke sahi jawaab likhiye, un words mein jo asli users use karte hain. Phir gin lijiye.

- Ek tool do tareekon se fail ho sakta hai. Woh un cheezon ko miss kar sakta hai jo zaroori thi, yaani kharab recall. Ya woh unhe wapas la sakta hai jo zaroori nahi thi, yaani kharab precision. Ek ko badhane se aam taur par doosra kam hota hai.
- Kise favour karna hai, yeh is par depend karta hai ki jab har failure hoti hai toh ek asli insaan ke saath kya hota hai. Yeh faisla product ke owner ka hai, banane wale ka nahi.
- Kisi aur ka bataya hua figure tab tak saboot nahi hai jab tak woh test dikh na jaaye jisse woh aaya.
