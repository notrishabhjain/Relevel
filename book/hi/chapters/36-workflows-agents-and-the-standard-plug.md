---
title: Workflows, Agents Aur Standard Plug
summary: Bank ka teller balance dekh sakta hai par kisi ke kehne par paisa nahi bhej sakta. Support console ke baare mein teen sawaal, model ko kitna tay karne dein, use kaise rokein, aur ek standard plug kya vaada karta hai aur kya nahi, cheezein kaatkar tay hote hain. Chapter tool contracts, idempotency, fixed workflows, bounded agents aur MCP samjhata hai.
course: ch12t ch13a ch14p
goals:
  - tool contract likhna, aur samjhana ki permissions server lagata hai, model nahi
  - idempotency samjhana aur yeh ki retry tabhi surakshit hai jab action surakshit ho
  - crossing-out test se agent ke bajaye fixed workflow chunna, aur jab agent chahiye ho toh use bound karna
  - batana ki MCP kya vaada karta hai aur kya nahi
terms:
  - tool contract | ek function jo model bula sakta hai uska theek-theek likhit samjhauta: uska naam, woh kya karta hai aur kya nahi, uske parameters, uski errors, uske side effects aur use kaun bula sakta hai | tool contracts
  - idempotency | kisi action ka woh gun ki use do baar chalana surakshit hai, ya aise surakshit kiya gaya hai ki do baar chalane ka sirf ek asar ho; yeh tay karta hai ki retry surakshit hai ya nahi | idempotent
  - fixed workflow | pehle se tay, code mein likhe charno ka ek kram, jisme model sirf unhi charno ke liye istemaal hota hai jinhe vivek chahiye | fixed workflows
  - bounded agent | ek AI agent jise kadmon, samay aur kharche par kadi seemayein, ek state jo woh saaf roop se rakhta hai, aur ek "tay nahi kar sakta" ant diya gaya hai, taaki woh hamesha ruk jaye | bounded agents
  - MCP | Model Context Protocol: AI applications ko tools aur data se jodne ka ek standard, taaki koi bhi compliant tool kisi bhi compliant application mein fit ho, plug aur socket ki tarah | Model Context Protocol
---

October ke pehle hafte mein, jab pilot chal raha tha, Farah Sheikh ne ek anurodh kiya jo bilkul vaajib lagta tha. Woh chahti thi ki support console ka apna ek assistant ho. Woh agent ko tez kaam karne mein madad karta. Woh orders dekhta. Agar agent ke paas achhi wajah ho toh woh ek chhupayi hui detail dobara dikhata. Agar sahi lagta, toh woh customer ko payment link bhejta. Yeh sab apne aap, ek saaf kadam mein hota.

Imran Qureshi ne ek aisi design review shuru ki jo kisi ne maangi nahi thi, ek tulna se. Ek bank ka teller aapka balance dekh sakta hai, usne kaha, aur aapke kehne par aapka paisa kahin nahi bhej sakta. Teller bharose ke laayak nahi hain aisa nahi hai. Kuch kaam aise hain jinke nateeje bank ke bahar hote hain, aur niyam kaam ke baare mein hai, insaan ke baare mein nahi. Usne board par Farah ke teen anurodh likhe aur ek heading bade akshar mein: yeh kya kar sakta hai, kis data ke saath, aur kaun jaanchta hai?

## Case: ek assistant jo sab kuch karta hai

Anurodh bahut alag kism ke kaamon ko milaate the. Yeh chapter unhe ek likhit anubandh, model ko kitna tay karna chahiye iske test, aur is jaanch se chhaantta hai ki ek standard connector kya guarantee karta hai aur kya nahi.

## Ek function, likhit

Machine ko kuch asli karne ke liye sabse pehle ek function chahiye jise woh maang sake. Doosra, us function ke baare mein ek likhit anubandh jo itna theek ho ki ek ajnabi bata sake ki woh kya kar sakta hai aur kya nahi. Yeh ek *tool contract* hai.

Anaya April mein iska ek roop dekh chuki thi, jab ek dhundhle vivaran ne model ko galat function chunwaya tha. Contract kahin aage jaata hai.

Table: Tool contract kya kehta hai
| Tatva | Kya kehta hai |
| --- | --- |
| Naam aur uddeshya | Function kya lautata hai aur kya nahi |
| Parameters | Kasi hui: jis field ki kuch hi vaidh values hain woh sirf wahi le |
| Errors | Aise roop mein soochibaddh jo program padh sake |
| Side effects | Use bulane ka kya nateeja badalta hai |
| Kaun bula sakta hai | Server tay karta hai, logged-in session ke aadhaar par, model ke kehne ke aadhaar par nahi |

Aakhri tatva par Imran ne samay bitaya. Model authorisation layer nahi hai. Agar look-up function order number leta hai, toh server tay karta hai ki yeh agent yeh order dekh sakta hai ya nahi, logged-in session ke aadhaar par. Team ne yeh pichhli garmiyon mein kiya tha, aur contract use bas likh deta hai.

### Agar woh do baar chale toh kya

Imran ne phir poochha ki agar ek call do baar chale toh kya hota hai. Anaya ne ek customer ki kalpana ki jo ek button dabata hai jab network lad-khada raha hai: request server tak pahunchi, jawaab wapas nahi aaya, aur app ne dobara koshish ki. Agar kaam "ek chhupayi detail dobara dikhao" tha, toh doosri koshish se koi nuksaan nahi hua. Agar woh "ek payment link bhejo" tha, toh customer ko do mile.

Jo kaam do baar surakshit chalaya ja sake uska naam *idempotency* hai. Kuch kaam swaabhaavik roop se idempotent hote hain. Doosre har request ko ek anokha number dekar banaye jaate hain, taaki server dohrai ko pehchaane aur kuch na kare. Retry tabhi surakshit hai jab kaam surakshit ho. Imran ne contract mein ek niyam joda: har kaam jo kuch badalta hai woh batata hai ki agar use dohraya jaaye toh kya hota hai.

## Jo rule kar sakta hai use kaat do

Imran ne phir poochha ki Farah ke teen anurodhon mein se kaun sa model ka chunaav hona chahiye, aur ek abhyaas rakha jisme paanch minute lage aur jisne project se ek mahina kaat diya. Har function likho jo assistant ke paas ho sakta hai, aur har us function ko kaat do jise ek saadha rule sau mein pachaanve se zyada baar sahi chun leta.

Table: Kaatne wala abhyaas
| Function | Kya faisle ki zaroorat hai? | Nateeja |
| --- | --- | --- |
| Order dekhna | Nahi: agent button dabata hai | Kaat diya |
| Chhupayi detail dobara dikhana | Nahi: ek aur button, ek box mein likha kaaran | Kaat diya |
| Payment link bhejna | Nahi: ek insaan faisla karta hai, hamesha | Kaat diya |

Jo list bachi woh khaali thi. Jawaab ek *fixed workflow* tha: kadam jaane hue hain, isliye woh code mein tay kiye jaate hain, aur model sirf woh hissa karta hai jise faisle ki zaroorat ho aur kuch nahi. Zyadatar asli products isi tarah bante hain, aur yeh model ko apna raasta khud chunne dene se surakshit hai, kyunki har kadam dikhta hai aur har failure ki ek jagah hoti hai. Model ko ek tool tabhi do jab uska chunaav kuch jodta ho, kyunki har tool ek naya hamle ka raasta, ek naya der, kharcha aur tootne ka tareeka jodta hai.

Fixed workflows aam taur par kuch shakl lete hain: ek kram, ek router jo message ko kai raaston mein se ek par bhejta hai, side-by-side chalne wale kadam jab woh ek doosre par nirbhar nahi, aur ek jodi jisme ek kadam likhta hai aur doosra jaanchta hai. Sabke liye niyam wahi hai ki sabse saadhi shakl lo jo acceptance criteria poore kare.

## Ek kaam jo alag tha

Sahaj mein ek kaam tay raaste mein fit nahi hota tha, aur Anaya ek mahine se uske chaaron taraf ghoom rahi thi. Har raat guard ek queue chhodta tha, un shak wale cases ki jinhe usne surakshit rehne ke liye chhupa diya tha, sau mein kuch. Har subah kisi ko ek-ek karke tay karna padta tha ki kya hona chahiye tha, aur har case mein alag matra mein dekhna padta tha. Ek tay kram uske liye theek nahi tha.

Unhone ek model ko use seema ke andar sambhalne diya. Ek AI agent ek loop hai: tay karo, karo, jaancho, phir tay karo. Loop use lachila aur khatarnaak banata hai, kyunki aisi cheez ka zyadatar galat hona rukne par hota hai. *Bounded agent* ki seemayein shuru karne se pehle likhi jaati hain.

Table: Agent ko kya bandhta hai
| Seema | Byora |
| --- | --- |
| Kadam | Ek adhiktam sankhya |
| Samay | Ek adhiktam avadhi |
| Kharcha | Ek chhat |
| Ant | "Cannot resolve" naam ka ek spasht nateeja, jise woh anumaan ke bajaye istemaal karne ko majboor hai |
| State | Lakshya, liye gaye kadam, jo usne dekha aur uski sthiti ka ek dikhta record, text ka badhta dher nahi jise use dobara padhna pade |
| Logging | Har run kyun khatam hua |

Yeh jaanne ke liye ki seemayein kaam karti hain, Imran ne kaha, saabit karo: aisa loop banao jo kabhi apna jawaab nahi dhoondh sakta aur use rukte dekho. Phir usne woh baat kahi jise Anaya ne chapter ka kendra maana.

::: key Har action ko chinhit karo, aur aakhri kism ke liye insaan ki maang karo
Har action ko ya toh read-only, ya ek aise write ki tarah chinhit karo jo undo ho sakta hai, ya aise write ki tarah jo undo nahi ho sakta. Aakhri kism ke liye ek insaan ki maang karo. Jo insaan manzoori deta hai use kuch theek-theek manzoor karna hoga, aur agar manzoori ke baad payload badal jaye toh action rokna chahiye. Nahi toh manzoori ek popup hai, control nahi.
:::

Raat ki queue ke liye har action read-only tha. Agent prastaav deta tha, aur subah ek insaan tay karta tha.

Anaya ne poochha ki agar kisi ne ise agent na kaha hota toh kya woh phir bhi ise chunti. Imran ne bees test raatein teen tareekon se chalayi thi: ek single call, ek fixed sequence aur bounded agent. Saadhaaran raaton mein sequence ne agent jitna hi achha kiya, chauthai kharche par. Agent sirf ajeeb raaton mein behtar tha, isliye use ajeeb raaton ke liye istemaal kiya jaayega. Usne poochha ki kya doosra agent madad kar sakta hai. Imran ne kaha ki extra jatilta ko kuch naapne laayak kharidna chahiye, aur kisi doosre agent se abhi tak aisa karne ko nahi kaha gaya tha.

## Deewaar par plug

Thursday ko console vendor ne ghoshna ki ki uska product ab MCP ke zariye AI assistants se jud sakta hai. *MCP*, Model Context Protocol, ek AI application ko tools aur data se jodne ka maanak tareeka hai. Jaise koi bhi upakaran ek aise wall socket mein fit hota hai jo standard maanta hai, waise hi standard par bana koi bhi tool standard par bani kisi bhi application mein fit hota hai. Ismein teen hisse hain: application jo baatcheet sambhalta hai, uske andar ek chhota connector, aur doosri taraf ek alag program jo batata hai ki woh kya kar sakta hai, uske tools, uske documents aur uske taiyaar instructions.

Anaya ne poochha ki standard kya vaada karta hai. Imran ne jawaab diya ki woh plug ke fit hone ka vaada karta hai. Woh vaada nahi karta ki tool surakshit hai, aur woh tay nahi karta ki use kaun on kar sakta hai. Usne vendor ka vivaran kholkar padha ki uska connector kya deta hai: ek order dekhna, ek customer ke payments ki list, ek refund jaari karna. "Dekho," usne kaha. "Woh refund ka vigyapan deta hai." Anaya ne poochha ki kya agent ke paas permission hai. Wahi sawaal hai, usne kaha. Kya koi tool khoja ja sakta hai aur kya use istemaal karne ki ijaazat hai, yeh alag baatein hain. Pehla protocol ka kaam hai, aur doosra company ka, jo server par tay hoga ki kaun logged in hai, model se poochhkar nahi.

::: watch Ek asurakshit tool ka maanak interface phir bhi asurakshit tool hai
Connector ke zariye jo kuch wapas aata hai woh bhi aisa text hai jo koi ajnabi likh sakta hai. Anaya ne ise garmiyon ki list mein joda, har document ko bharosa-heen maanne wale niyam ke neeche. Agents ke agents se baat karne ke liye bhi ek protocol hai, wahi samasya ki shakl, tools ki jagah pehchaan aur delegation ke saath. Woh yeh hal karta hai ki woh kaise baat karte hain. Woh yeh hal nahi karta ki woh jo kehte hain us par bharosa karna hai ya nahi.
:::

Hafte ke ant tak console ke paas apna koi assistant nahi tha. Uske paas raat ki ek queue thi jisme ek bounded agent prastaav deta tha aur kaam nahi karta tha, aur ek connector jisme refund tool band kiya gaya tha. Anaya ne kaha ki yeh Farah ke maange se kam hai. Imran ne kaha ki yeh woh hai jo use chahiye tha, aur ise banana aasaan hai.

## Saaraansh

Tool ek function hai jise model maang sakta hai, aur har ek ko ek tool contract chahiye jo theek-theek batata ho ki woh kya karta hai aur kya nahi, kya leta hai, kaun se errors lautata hai, kya badalta hai aur kaun use bula sakta hai.

- Permissions server lagata hai, model par kabhi nahi chhodi jaati. Jo kaam kuch badalta hai use batana chahiye ki agar woh do baar chale toh kya hota hai, yani idempotency.
- Kai features jo agent ki zaroorat jaise lagte hain woh ek fixed workflow ke roop mein behtar hain, jisme model sirf wahan istemaal hota hai jahan shabd samajhne padte hain. Ek tez test hai har us tool ko kaat dena jise ek saadha rule lagbhag hamesha sahi chun leta.
- Jab agent chahiye ho, toh use bound karo: seemit kadam, samay aur kharcha, spasht state, aur ek "cannot resolve" ant, jahan jo kuch undo nahi ho sakta use insaan manzoor kare.
- MCP ek maanak plug hai. Woh vaada karta hai ki cheezein fit hoti hain aur unki suraksha ke baare mein kuch nahi kehta, aur jo tool khoja ja sakta hai woh isliye authorised nahi hai.
