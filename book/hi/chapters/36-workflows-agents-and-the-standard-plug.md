---
title: Workflows, Agents Aur Standard Plug
summary: Bank ka teller balance dekh sakta hai, lekin kisi ke kehne par paisa kahin nahi bhej sakta. Support console ke teen sawaal cheezein kaat kar tay hote hain: model ko kitna tay karne dein, use kaise rokein, aur ek standard plug kya vaada karta hai aur kya nahi. Chapter mein tool contracts, idempotency, fixed workflows, bounded agents aur MCP aate hain.
course: ch12t ch13a ch14p
goals:
  - tool contract likhna, aur samjhana ki permissions server lagata hai, model nahi
  - idempotency samjhana, aur yeh ki retry tabhi safe hai jab action safe ho
  - crossing-out test se agent ke bajaay fixed workflow chunna, aur jab sach mein agent chahiye ho toh use bound karna
  - batana ki MCP kya vaada karta hai aur kya nahi
terms:
  - tool contract | ek function, jo model bula sakta hai, uska theek-theek likha hua agreement: uska naam, woh kya karta hai aur kya nahi, uske parameters, errors, side effects, aur use kaun bula sakta hai | tool contracts
  - idempotency | kisi action ki woh khoobi ki use do baar chalana safe hai, ya use aise protect kiya gaya hai ki do baar chalne ka sirf ek hi asar ho; yeh tay karti hai ki retry safe hai ya nahi | idempotent
  - fixed workflow | pehle se tay steps ka ek sequence, jo code mein likha hota hai, aur model sirf un steps mein use hota hai jinhe judgement chahiye | fixed workflows
  - bounded agent | aisa AI agent jise steps, time aur cost par hard limits di gayi hon, ek state jo woh saaf-saaf rakhta hai, aur ek "cannot resolve" ending, taaki woh hamesha ruke | bounded agents
  - MCP | Model Context Protocol: AI applications ko tools aur data se jodne ka ek standard, jisse koi bhi compliant tool kisi bhi compliant application mein lag jaata hai, plug aur socket ki tarah | Model Context Protocol
---

October ke pehle hafte mein, jab pilot chal raha tha, Farah Sheikh ne ek request ki jo bilkul vajib lagti thi. Woh chahti thi ki support console ka apna ek assistant ho. Woh agent ko tez kaam karne mein madad kare. Orders look up kare. Agar agent ke paas achhi wajah ho, toh kisi hidden detail ko dobara dikhaye. Aur agar theek lage, toh customer ko payment link bhej de. Yeh sab apne aap, ek smooth step mein.

Imran Qureshi ne ek design review bulayi jo kisi ne maangi nahi thi, aur ek misaal se shuru kiya. Bank ka teller aapka balance dekh sakta hai, usne kaha, lekin aapke kehne par aapka paisa kahin nahi bhej sakta. Teller par bharosa kam nahi hai. Bas kuch actions ke nateeje bank ke bahar tak jaate hain, aur rule action ke baare mein hai, insaan ke baare mein nahi. Usne Farah ki teen requests board par likhi, ek capital letters wali heading ke neeche: yeh kya kar sakta hai, kis data ke saath, aur check kaun karta hai?

## Case: ek assistant jo sab kuch kare

Farah ki requests mein alag-alag kism ke actions mile hue the. Yeh chapter unhe teen steps mein suljhata hai. Pehla, har function ke liye ek likhit agreement. Doosra, ek test ki model ko kitna tay karna chahiye. Aur teesra, yeh check ki standard connector kya guarantee karta hai aur kya nahi.

## Ek function, likha hua

Agar machine ko asli kuch karna hai, toh pehle use ek function chahiye jo woh maang sake. Phir us function ke baare mein ek likha hua agreement, itna exact ki koi ajnabi bhi bata sake ki function kya kar sakta hai aur kya nahi. Yeh hai **tool contract**.

Anaya spring mein iska ek roop dekh chuki thi, jab ek dhundhli description ki wajah se model ne galat function chun liya tha. Contract usse kaafi aage jaata hai.

Table: Tool contract mein kya likha hota hai
| Hissa | Yeh kya kehta hai |
| --- | --- |
| Naam aur purpose | Function kya lautata hai aur kya nahi |
| Parameters | Tight rakha hua, taaki jis field ki kuch hi legal values hon woh sirf wahi le |
| Errors | Aise form mein listed jise program padh sake |
| Side effects | Ise call karne se kya badalta hai |
| Kaun call kar sakta hai | Server tay karta hai, logged-in session ke hisaab se, model ke kuch kehne ke hisaab se nahi |

Imran ne aakhri row par sabse zyada time lagaya. Model authorisation layer nahi hai. Maan lijiye lookup function order number leta hai. Server tay karta hai ki yeh agent yeh order dekh sakta hai ya nahi, logged-in session ke aadhaar par. Team garmiyon mein yeh kar chuki thi, aur contract bas use likh deta hai.

### Do baar chal jaaye toh

Phir Imran ne poochha ki agar ek call do baar chal jaaye toh kya hota hai. Anaya ne socha: ek customer button dabata hai aur network lad-khada raha hai. Request server tak pahunch gayi, reply wapas nahi aaya, aur app ne dobara try kiya. Agar action "yeh detail dobara dikhao" tha, toh doosri koshish se koi nuksaan nahi hua. Agar "payment link bhejo" tha, toh customer ko do mile.

Jo action do baar chalaya jaaye toh bhi safe ho, uska ek naam hai: **idempotency**. Kuch actions apne aap idempotent hote hain. Baaki ko aise banaya jaata hai ki har request ko ek unique number diya jaaye. Phir server repeat pehchaan leta hai aur kuch nahi karta. Retry tabhi safe hai jab action safe ho. Isliye Imran ne contract mein ek rule joda: jo bhi action kuch badalta hai, usse likhna hoga ki repeat hone par kya hota hai.

## Woh kaato jo rule kar sakta hai

Phir Imran ne poochha ki Farah ki teen requests mein se kaun si model ki choice honi chahiye. Usne ek exercise di jisme paanch minute lage aur project ek mahina chhota ho gaya. Un sab functions ko likho jo assistant ke paas ho sakte hain. Phir har us function ko kaat do jise ek saada rule 100 mein se 95 baar se zyada sahi chunta hai.

Table: Kaatne wali exercise
| Function | Judgement chahiye? | Result |
| --- | --- | --- |
| Order look up karna | Nahi: agent ek button dabata hai | Kat gaya |
| Hidden detail dobara dikhana | Nahi: ek aur button, jisme reason box mein type hota hai | Kat gaya |
| Payment link bhejna | Nahi: hamesha insaan tay karta hai | Kat gaya |

Jo list bachi, woh khaali thi. Jawaab tha **fixed workflow**. Steps pata hain, isliye woh code mein fix kar diye jaate hain, aur model sirf wahi hissa karta hai jisme judgement chahiye, aur kuch nahi. Zyadatar asli products aise hi bante hain. Yeh model ko apna raasta khud chunne dene se safe hai, kyunki har step dikhta hai aur har failure ki ek jagah hoti hai. Model ko tool tabhi milna chahiye jab uski choice se value judti ho, kyunki har tool attack hone ka ek naya tareeka, aur delay, cost aur toot-phoot ka ek naya source jodta hai.

Fixed workflows aam taur par kuch shape mein aate hain. Ek sequence hota hai. Ek router jo message ko kai raaston mein se ek par bhejta hai. Steps jo saath-saath chalte hain jab ek doosre par nirbhar nahi. Aur ek jodi jisme ek step likhta hai aur doosra check karta hai. Sab ka rule yahi hai ki sabse saada shape lijiye jo acceptance criteria poore kare.

## Woh ek kaam jo alag tha

Sahaj mein ek kaam fixed raaste mein fit nahi hota tha, aur Anaya ek mahine se uske aas-paas ghoom rahi thi. Har raat guard unsure cases ki ek queue chhod deta tha, woh sau mein se kuch jinhe usne safe rehne ke liye chhupa diya tha. Har subah kisi ko ek-ek karke tay karna hota tha ki kya hona chahiye tha. Har case mein alag-alag kitna look-up chahiye tha. Fixed sequence yahan nahi jamta tha.

Isliye unhone ek model ko limits ke andar yeh sambhalne diya. AI agent ek loop hai: decide, act, check, phir decide. Loop use flexible banata hai, aur khatarnaak bhi, kyunki aise kisi bhi cheez mein jo kuch galat hota hai woh zyadatar rukne par galat hota hai. **Bounded agent** ki limits shuru hone se pehle likhi hoti hain.

Table: Agent ko kya bound karta hai
| Bound | Detail |
| --- | --- |
| Steps | Ek maximum number |
| Time | Ek maximum duration |
| Cost | Ek ceiling |
| Ending | "Cannot resolve" naam ka ek explicit result, jo use andaaza lagane ki jagah dena hoga |
| State | Goal, liye gaye steps, jo dekha, aur status ka ek dikhne wala record, na ki text ka badhta dhera jo use dobara padhna pade |
| Logging | Har run kyun khatam hua |

Imran ne kaha, yeh jaanne ke liye ki limits kaam karti hain, saabit kijiye. Aisa loop banaiye jise jawaab kabhi mil hi nahi sakta, aur dekhiye ki woh ruk jaata hai. Phir usne woh baat kahi jo Anaya ko chapter ka centre lagi.

::: key Har action ko mark kijiye, aur aakhri kism ke liye insaan ko zaroori banaiye
Har action ko mark kijiye: read-only, aisa write jo undo ho sakta hai, ya aisa write jo undo nahi ho sakta. Aakhri kism ke liye insaan ki approval zaroori rakhiye. Jo insaan approve kare, use kuch exact approve karna chahiye, aur agar approval ke baad payload badal jaaye toh action block hona chahiye. Warna approval ek popup hai, control nahi.
:::

Night queue ke liye har action read-only tha. Agent propose karta tha, aur subah insaan faisla karta tha.

Anaya ne poochha, agar kisi ne ise agent kaha hi na hota, toh kya phir bhi agent chuna jaata? Imran ne bees test raatein teen tareeke se chalayi thi: ek single call, ek fixed sequence aur bounded agent. Aam raaton mein sequence agent ke lagbhag barabar raha, chauthai cost par. Agent sirf ajeeb raaton mein behtar raha. Isliye agent ajeeb raaton ke liye use hoga.

Usne poochha, kya doosra agent madad karega? Imran ne kaha, extra complexity ko kuch naapne layak kharidna padta hai, aur abhi tak kisi doosre agent se yeh maanga nahi gaya.

## Deewar ka plug

Thursday ko console vendor ne announce kiya ki uska product ab MCP ke zariye AI assistants se joda ja sakta hai. **MCP**, yaani Model Context Protocol, AI application ko tools aur data se jodne ka ek standard tareeka hai. Deewar ke socket ke baare mein sochiye. Jo bhi appliance standard follow karta hai, usme lag jaata hai. Waise hi, MCP standard par bana koi bhi tool us par bani kisi bhi application mein lag jaata hai.

Isme teen hisse hain. Pehla woh application jo conversation sambhalti hai. Doosra uske andar ek chhota connector. Teesra doosri taraf ek alag program jo batata hai ki woh kya kar sakta hai: uske tools, uske documents aur uske pehle se tayyar instructions.

Anaya ne poochha ki standard kya vaada karta hai. Imran ne kaha, woh vaada karta hai ki plug fit hoga. Woh yeh vaada nahi karta ki tool safe hai, aur yeh tay nahi karta ki use on kaun karega. Usne vendor ka description kholi ki uska connector kya offer karta hai: order look up karo, customer ke payments list karo, refund issue karo. "Dekhiye," usne kaha. "Woh refund ka vaada kar raha hai."

Anaya ne poochha, kya agent ke paas permission hai? Imran ne kaha, sawaal yahi hai. Tool ko discover kiya ja sakta hai, aur use aapko use karne ki ijaazat hai, yeh alag baatein hain. Pehla protocol ka kaam hai. Doosra company ka, jo server par tay hota hai ki kaun logged in hai, model se poochh kar nahi.

::: watch Unsafe tool ka standard interface bhi unsafe tool hi hai
Connector se jo kuch bhi wapas aata hai, woh bhi aisa text hai jo koi ajnabi likh sakta tha. Anaya ne yeh garmiyon wali list mein joda, har document ko untrusted maanne wale rule ke neeche. Agents ke aapas mein baat karne ka bhi ek protocol hai, jiski problem usi shape ki hai, tools ki jagah identity aur delegation ke saath. Woh yeh suljhata hai ki woh baat kaise karte hain. Yeh nahi suljhata ki woh jo kehte hain us par bharosa karna chahiye ya nahi.
:::

Hafte ke ant tak console ka apna koi assistant nahi tha. Uske paas ek night queue thi jisme bounded agent propose karta tha aur act nahi karta tha, aur ek connector jisme refund tool band tha. Anaya ne kaha ki yeh Farah ne jo maanga tha usse kam hai. Imran ne kaha, yeh wahi hai jo use chahiye tha, aur banane mein aasaan bhi.

## Saaraansh

Tool ek function hai jo model maang sakta hai. Har ek ko ek tool contract chahiye jo exactly bataye ki woh kya karta hai aur kya nahi, kya leta hai, kaun si errors deta hai, kya badalta hai aur use kaun call kar sakta hai.

- Permissions server lagata hai, model ke bharose kabhi nahi chhodte. Jo action kuch badalta hai, use batana hoga ki do baar chalne par kya hota hai, yahi idempotency hai.
- Bahut se features jo agent maangte lagte hain, fixed workflow ke roop mein behtar hote hain, jisme model sirf wahan lagta hai jahan words samajhne padte hain. Ek tez test hai: har us tool ko kaat dijiye jise ek saada rule lagbhag hamesha sahi chunta hai.
- Jab sach mein agent chahiye, toh use bound kijiye: limited steps, time aur cost, explicit state, aur ek "cannot resolve" ending. Jo cheez undo nahi ho sakti, use ek insaan approve karta hai.
- MCP ek standard plug hai. Woh vaada karta hai ki cheezein fit hongi, aur unki safety ke baare mein kuch nahi kehta, aur jo tool discover ho sakta hai woh isliye authorised nahi ho jaata.
