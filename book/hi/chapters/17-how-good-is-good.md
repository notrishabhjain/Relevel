---
title: Kitna Achha Hai Achha
summary: Ek founder woh sawaal poochhta hai jo har AI project ko aakhir mein sunna padta hai. Jawaab nikalta hai do numbers, unke beech ek choice jo engineer ka kaam nahi hai, aur ek figure jo Anaya ne bina check kiye bol diya tha. Aap recall aur precision se milte hain.
course: ch6
goals:
  - samajhna ki kuch chalte hue examples ka demo saboot kyun nahi hai
  - jaanna ki recall aur precision kya hain, aur har ek ko found, missed aur galat flag ki ginti se nikalna
  - tay karna ki kaun si failure ko favour karna hai, yeh poochh kar ki har failure mein ek asli insaan ke saath kya hota hai
  - kisi aur ke bataye number ko tab tak jaanchna baaki maanna jab tak uska test dikh na jaaye
terms:
  - recall | jaal mein machhliyon jaisa; jitni asli cheezein dhoondhni thi, unmein se tool ne kitni dhoondhi. Agar 100 thi aur 90 mili, toh recall 90 percent hai | 
  - precision | jaal mein asli machhli gin kar dekhne jaisa; tool ne jo flag kiya, usmein se kitna sach mein wahi tha jo tool ne kaha. Agar 100 flag kiye aur 80 asli the, toh precision 80 percent hai | 
---

May ke pehle hafte mein founders lunch par jaate hue glass room ke paas ruke. Unmein se ek, Mr. Bhatia, ne whiteboard aur scoreboard ko dekha. Phir usne woh sawaal poochha jo AI se kuch banane wali har company se kabhi na kabhi poochha jaata hai. "Is it good?"

Ek pause aaya. Woh ek second zyada lamba chala. Imran Qureshi ne kaha ki pichhli run mein tool ne 17 mein se 15 dhoondhe. Mr. Bhatia ne kaha ki yeh achha hai.

Tabhi Anaya bol padi. Usne kaha ki yeh 17 mein se 15 un 10 sentences par hai jo team ne khud likhe the. Use abhi nahi pata ki yeh achha hai ya nahi. Woh ek hafte mein ek number ke saath bata sakti hai. Mr. Bhatia ko aisa jawaab sunne ki aadat nahi thi. Baad mein usne kaha ki pehle kisi ne use aisa jawaab nahi diya tha.

Yeh chapter wahi jawaab banata hai jiska Anaya ne waada kiya tha. Ismein teen hisse hain. Pehla, woh do numbers jo cheezein dhoondhne wale tool ko naapte hain. Doosra, un dono ke beech ki choice. Teesra, kisi number ko dohrane se pehle use check karne ki aadat.

## Case: ek sawaal jiska koi number nahi tha

Aam taur par "is it good?" ka jawaab hota hai 3 aise examples ka demo jo chale. Isse lagbhag kuch nahi pata chalta ki system kitni baar sahi hota hai. Un 3 ko kisi ne chuna tha. Jo cases kisi ne nahi chune, wahi woh hain jinhe dekhna zaroori tha.

Imran isi tarah ka ek measurement bana raha tha. Woh guard ke liye nahi tha. Woh uske peeche wale hisse ke liye tha: chatbot customer ke sawaal ke liye Sahaj ki policies ka sahi page kitni achhi tarah dhoondhta hai. Seekh lagbhag shabd-ba-shabd wahi thi.

## Demonstration saboot nahi hai

Is tareeke mein teen ideas hain. Pehla yeh hai ki test karne se pehle jawaab likh lijiye. Yeh teacher ki answer key jaisa hai: sahi jawaab exam se pehle tay ho jaate hain.

Aap kisi system se sawaal poochh kar aur yeh dekh kar usse judge nahi kar sakte ki jawaab sahi lagte hain ya nahi. Woh sahi lagenge. Machine wahi toh banati hai, yakeen dilane wala text. Isliye kaam asli sawaalon ki list se shuru hota hai. Har sawaal ka jaancha hua sahi jawaab hota hai. Yeh wahi answer key hai jo Anaya pehle hi bana chuki thi. Woh test se pehle likhi gayi thi, baad mein nahi.

Farah ne chatbot ki search ke liye 10 sawaal likhe. Usne wahi words use kiye jo uske customers use karte hain. Usne unhe policy document kholne se pehle likha. Jo sawaal document padhne ke baad likha jaata hai, woh document ke hi words use karne lagta hai. Isse search asal se zyada achhi dikhti hai.

Uske sawaalon mein "Paisa kab milega", "Double charge hua hai" aur "Mera loan reject kyun hua" the. Uske baad hi usne aur Imran ne pages dekhe. Unhone mark kiya ki har sawaal ka jawaab kis page par hai.

Unhone test chalaya. 10 mein se 6 sawaalon ne pehli koshish mein sahi page dhoondh liya. Imran ne ise ek aise system ka normal pehla result kaha jo kaam karta hai. Usne jodd diya ki 9 ya 10 hota, toh woh poochhta ki kisi ne cheating toh nahi ki.

## Fail hone ke do tareeke

Doosra idea samajhne mein Anaya ko zyada waqt laga. Woh saamne hi chhupa tha. Search step do ulte tareekon se galat ho sakta hai. Woh kuch aisa chhod sakta hai jo zaroori tha. Ya woh bahut saari aisi cheezein wapas la sakta hai jo zaroori nahi thi.

Imran ne use kaha ki sochiye aapne apne colleague ko meeting ki files lene bheja. Maan lijiye colleague us ek file ke bina wapas aata hai jo aapko chahiye thi. Yeh ek tarah ki failure hai. Maan lijiye colleague poori almari utha laata hai. Baaki files ke beech aap wahi file dhoondh nahi paate. Yeh doosri tarah ki failure hai.

::: def Recall aur precision
Pond mein ek jaal ki tarah sochiye. *Recall* poochhta hai: pond ki saari machhliyon mein se jaal ne kitni pakdi? Seedhe shabdon mein, jitni asli cheezein dhoondhni thi, unmein se tool ne kitni dhoondhi. Agar 100 thi aur tool ne 90 dhoondhi, toh recall 90 percent hai. *Precision* poochhta hai: jaal mein jo hai, usmein kitna sach mein machhli hai? Tool ne jo flag kiya, usmein se kitna sach mein wahi tha jo tool ne kaha. Agar usne 100 flag kiye aur 80 asli the, toh precision 80 percent hai.
:::

Dono ek doosre ko kheenchte hain. Jaal chauda kijiye, toh jo chahiye woh bhi zyada pakadta hai. Jo nahi chahiye woh bhi zyada pakadta hai. Jaal tang kijiye, toh catch saaf hota hai. Lekin zyada chhoot jaata hai.

Imran ne use karke dikhaya. Usne har sawaal ke liye search jitne pages wapas deti thi, woh badla: 1, phir 3, phir 5. Numbers waise hi hile jaise usne kaha tha. Zyada pages se recall badha aur precision gira. Kam pages se ulta hua. Yeh tendencies hain, laws nahi. Inhe aapko apne asli sawaalon par naapna padega.

Anaya hafton se yeh ideas bina naam ke use kar rahi thi. Woh wapas scoreboard ke paas gayi.

Table: Pehla scoreboard, recall aur precision jodkar
| Version | Found | Missed | False alarms | Recall | Precision |
| --- | --- | --- | --- | --- | --- |
| 1 | 11 | 6 | 5 | 65% | 69% |
| 3 | 15 | 2 | 2 | 88% | 88% |
| 4 | 14 | 3 | 1 | 82% | 93% |

Hisaab seedha hai. Recall matlab found ko found plus missed se bhaag dena. Precision matlab found ko found plus false alarms se bhaag dena. Matlab "missed" ka matlab hamesha kharab recall tha. "False alarm" ka matlab hamesha kharab precision tha. Use naye ideas se zyada, purane ideas ko use karne ki ijaazat chahiye thi.

## Yeh faisla kiska hai

Teesra idea ek dopahar ke aakhir mein aaya. Imran ne poochha ki guard ke liye kaun si failure zyada buri hai. Kuch miss kar dena, ya woh flag kar dena jo tha hi nahi?

Anaya ne turant jawaab diya. Miss karna zyada bura hai. Jo number nikal jaata hai, woh 5 systems mein hamesha ke liye pahunch jaata hai. Imran ne kaha ki kisi aur product ke liye jawaab ulta hota hai.

Table: Kaun si failure zyada buri hai, yeh is par depend karta hai ki insaan ke saath kya hota hai
| Product | Zyada buri failure | Wajah |
| --- | --- | --- |
| Woh tool jo vakeel ke liye purane cases dhoondhta hai | Ek case miss kar dena | Miss hua case trial haara sakta hai. Irrelevant case ke liye 30 second padhna padta hai |
| Chatbot jo policy ke sawaalon ke jawaab deta hai | Galat page wapas karna | Model usse ek confident jawaab bana leta hai, aur customer ko di gayi galat policy company ko bandhti hai. Jawaab na milne se bas ek support ticket banta hai, jo company ko waise bhi mil rahe the |
| Guard | Ek personal detail miss kar dena | Woh detail history, logs, exports aur bahar ki company ke system mein pahunch jaati hai |

Phir Imran ne woh baat kahi jo woh Anaya ko sabse zyada sunana chahta tha. Kaun si failure kam karni hai, yeh product ka faisla hai. Engineer ka nahi. Jisne tool banaya, use poochhenge toh woh wahi jawaab dega jo uske liye dena sabse aasaan ho. Farq yaad rakhiye: project manager dekhta hai ki train time par chhute. Product manager tay karta hai ki train kahan jaaye.

Ek mahine mein doosri baar Anaya ko aisa faisla mila tha jo technical skill se nahi liya ja sakta tha. Pehla, sasti galti ki taraf jhukne ke baare mein, aam baatcheet jaisa tha. Yeh uska bada roop tha, naam aur percentages ke saath. Usne likh liya ki woh Thursday ko Lakshmi aur Farah ke saamne kya lekar jaayegi.

::: example Anaya ke tay kiye targets
Fixed shape wale identity numbers ke liye, recall kam se kam 100 mein 98. Tool jo 100 cheezein chhupaye, unmein zyada se zyada 3 false alarms. Agar dono takraayein, toh recall jeetega, aur main yeh likhit mein kahungi.
:::

Yeh statement likhna us se aasaan tha jitna ise defend karna hoga. Anaya ne yeh maan liya. Jis number par behas hui ho, woh us number se zyada kaam ka hai jis par kisi ne sawaal nahi uthaya.

## Ek number jo usne check nahi kiya tha

Ek aur baat thi jo asahaj thi. Anaya ne use Friday raat ko nipataya, jab office khaali tha.

Woh ek figure ke paas wapas gayi jo usne meetings mein 3 baar bola tha. Use usne strategy memo (yojana likhne wala chhota paper) mein bhi likha tha. Woh tha 100 mein 14. Ek maujooda open tool Hindi personal details ka itna hissa dhoondh sakta hai, uski apni published report ke hisaab se. Usne ise yeh dikhane ke liye use kiya tha ki market mein gap asli hai.

Ab uske dimaag mein Lakshmi ki awaaz mein ek sawaal aaya. Kis answer key ke against naapa gaya? Kisne likhi? Aur kya Lakshmi sawaal dekh sakti hai?

Anaya jawaab nahi de paayi. Usne ek document mein ek sentence padha tha aur use dohra diya tha. Ho sakta hai figure sahi ho. Ho sakta hai use aise sentences par naapa gaya ho jo Sahaj ke customers ke likhe se bilkul alag dikhte hon.

::: watch Bola gaya number saboot nahi hai
Vendor (tool bechne wali company) ka bataya hua number saboot nahi hai, chaahe kitni bhi imaandaari se bataya gaya ho. Yeh tabhi saboot banta hai jab aap dekh lein ki use kis cheez ke against naapa gaya. Yeh doosron ke numbers par lagta hai, aur aapke apne numbers par bhi.
:::

Usne woh check us raat nahi chalayi. Usne use list ke sabse upar likh liya, jahan use chupchaap chhoda nahi ja sakta tha. Open tool ko team ki answer key par chalaiye. Jo bhi number aaye, woh report kijiye, chaahe usse project ka case kamzor ho jaaye.

Yeh pehli baar tha jab usne aisa test likha jiske result se use darr tha. Usne pehchaana ki discipline isi ke liye hoti hai.

## Summary

Kuch chalte hue examples ka demo lagbhag kuch nahi batata ki system kitni baar sahi hai. Ise naapne ke liye, system ka jawaab dekhne se pehle sawaal aur unke sahi jawaab likhiye. Wahi words use kijiye jo asli users use karte hain. Phir gin lijiye.

- Ek tool do tareekon se fail ho sakta hai. Woh un cheezon ko miss kar sakta hai jo zaroori thi. Yeh kharab recall hai. Ya woh unhe wapas la sakta hai jo zaroori nahi thi. Yeh kharab precision hai. Ek ko badhane se aam taur par doosra kam hota hai.
- Kise favour karna hai, yeh is par depend karta hai ki har failure mein ek asli insaan ke saath kya hota hai. Yeh faisla product ke owner ka hai, banane wale ka nahi.
- Kisi aur ka bataya hua number tab tak saboot nahi hai jab tak woh test dikh na jaaye jisse woh aaya.

Agle chapter mein Imran Anaya se poore chatbot ka naksha yaad se banwata hai. Use pata chalta hai ki uske kitne hisse bina awaaz kiye fail ho sakte hain.
