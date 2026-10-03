---
title: Workflows, Agents Aur Standard Plug
summary: Ek bank teller aapka balance dekh sakta hai lekin aapke kehne par aapka paisa kahin bhej nahi sakta. Support console ke baare mein teen sawaal, model ko kitna tay karne dein, use kaise rokein, aur ek standard plug kya waada karta hai aur kya nahi, kuch cheezein kaat kar tay kiye jaate hain.
course: ch12t ch13a ch14p
terms:
  - tool contract | ek function jo model bula sakta hai uska theek-theek likhit samjhauta: uska naam, woh kya karta hai aur kya nahi, uske parameters, uski errors, uske side effects aur use kaun bula sakta hai | tool contracts
  - idempotency | kisi action ka woh gun ki use do baar chalana surakshit hai, ya aise surakshit kiya gaya hai ki do baar chalane ka sirf ek asar ho; yeh tay karta hai ki retry surakshit hai ya nahi | idempotent
  - fixed workflow | pehle se tay, code mein likhe charno ka ek kram, jisme model sirf unhi charno ke liye istemaal hota hai jinhe vivek chahiye | fixed workflows
  - bounded agent | ek AI agent jise kadmon, samay aur kharche par kadi seemayein, ek state jo woh saaf roop se rakhta hai, aur ek "tay nahi kar sakta" ant diya gaya hai, taaki woh hamesha ruk jaye | bounded agents
  - MCP | Model Context Protocol: AI applications ko tools aur data se jodne ka ek standard, taaki koi bhi compliant tool kisi bhi compliant application mein fit ho, plug aur socket ki tarah | Model Context Protocol
---

"Ek bank teller," Imran ne kaha, "aapka balance dekh sakta hai. Ek bank teller aapke kehne par aapka paisa kahin nahi bhej sakta."

Usne yeh ek aise design review ki shuruaat mein kaha jo kisi ne maanga nahi tha. October ka pehla hafta tha, pilot chal raha tha, aur Farah uske paas ek request lekar aayi thi jo, pehli baar sunne par, bilkul vajib lagti thi. Woh chahti thi ki support console ka apna ek assistant ho. Woh ek agent ko tezi se kaam karne mein madad karega. Woh orders dhoondhega. Woh ek chhupi detail dobara dikhayega, agar agent ke paas achhi wajah ho. Woh, agar sahi lage, customer ko payment link bhejega. Sab kuch apne aap, ek saaf kadam mein.

"Teller aakhri wala akele nahi kar sakta," Imran ne aage kaha, "isliye nahi ki teller bharosemand nahi hote, balki isliye ki kuch actions ke nateeje bank ke bahar hote hain. Niyam action ke baare mein hai, insaan ke baare mein nahi."

Usne Farah ki teeno maangein board par likhin aur unke bagal mein bade akshron mein ek heading. *ISE KYA KARNE KI IJAAZAT HAI, KIS DATA KE SAATH, AUR JAANCHTA KAUN HAI?*

## Ek function, likha hua

Ek machine ko kuch asli karne ke liye pehli cheez jo chahiye woh ek function hai jise woh maang sake. Doosri us function ke baare mein ek likhit samjhauta hai itna theek ki ek ajnabi bata sake ki woh kya kar sakta hai aur kya nahi. Yeh ek *tool contract* hai.

Anaya vasant mein iska ek roop mil chuki thi, jab ek dhundhli description ne model ko galat function chunwa diya tha. Ek contract kahin aage jaata hai. Woh function ka naam batata hai aur kehta hai ki woh kya lautata hai aur kya nahi. Woh uske parameters sakhti se tay karta hai, taaki kuch vaidh values wala field sirf wahi le. Woh uski errors ko aise roop mein likhta hai jo ek program padh sake. Woh uske side effects batata hai, aur use kaun bula sakta hai.

Aakhri cheez woh thi jis par usne samay bitaya. "Model authorisation layer nahi hai," usne kaha. "Agar lookup function ek order number leta hai, toh server tay karta hai ki *yeh* agent *yeh* order dekh sakta hai ya nahi. Woh logged-in session par tay karta hai, model jo kehta hai us par nahi. Humne yeh garmiyon mein kiya. Contract bas ise likh deta hai."

Phir usne ek sawaal poochha jis par use sochna pada. "Agar call do baar chal jaye toh kya hota hai?"

Usne ek customer ke button dabane aur network ke ladkhadane ke baare mein socha. Request server tak pahunch gayi thi, aur jawaab kabhi wapas nahi aaya tha. App ne phir koshish ki. Agar action *yeh detail dobara dikhao* tha, toh doosri koshish se koi nuksaan nahi hua. Agar woh *payment link bhejo* tha, toh customer ko do mile.

Jis action ko do baar chalana surakshit hai uska ek naam hai, *idempotency*. Kuch actions swabhavik roop se idempotent hote hain. Doosre har request ko ek anokha number dekar aise banaye jaate hain, taaki server ek dohrav ko pehchaane aur kuch na kare. Ek retry tabhi surakshit hai jab action ho. Usne contract ke liye ek niyam likha: *har action jo kuch badalta hai, kehta hai ki agar woh dohraya jaye toh kya hota hai.*

## Jo niyam kar sake use kaat do

"Ab chaalaki wala hissa," Imran ne kaha. "Farah ki teeno mein se kaun sa model ka chunav hona chahiye?"

Usne use ek abhyaas karne ko kaha jisme paanch minute lage aur project ek mahine chhota ho gaya. Har function likho jo assistant ke paas ho sakta hai. Phir har woh kaat do jahan ek saada niyam sau mein pachaanbe baar se zyada sahi chunta. 

Order lookup: agent ek button dabata hai; vivek ki zaroorat nahi. Kat diya. Chhupi detail dobara dikhana: ek aur button, ek box mein likhi wajah ke saath. Kat diya. Payment link bhejna: ek insaan tay karta hai, hamesha. Kat diya.

Jo list bachi woh khaali thi.

"Yahi jawaab hai," Imran ne khushi se kaha. "Ek fixed workflow. Kadam pata hain, isliye hum unhe code mein fix karte hain. Model woh hissa karta hai jise vivek chahiye aur kuch nahi." Iska matlab tha pehle se tay kiya hua ek kram, jisme model sirf wahan bulaya jaata jahan shabd samajhne the. Zyadatar asli products isi tarah bante hain, aur yeh model ko apna raasta chunne dene se zyada surakshit hai, kyunki har kadam dikhta hai aur har failure ki ek jagah hoti hai. Model ko ek tool tabhi do jab uska chunav mulya jode. Har ek ek naya tareeka jodta hai jisse hamla ho, zyada der, zyada kharcha aur toot jaane ka ek naya tareeka.

Usne un shaklon ki list banayi jo fixed workflows aamtaur par leti hain. Ek kram, ek kadam ke baad doosra. Ek router, jo message ko kai raaston mein se ek par bhejta hai. Kadam jo saath-saath chalte hain jab woh ek doosre par nirbhar nahi. Aur ek jodi jisme ek kadam likhta hai aur doosra jaanchta hai. Sab ke liye niyam ek tha: sabse saral shape istemaal karo jo acceptance criteria poori kare.

## Woh ek kaam jo alag tha

Sahaj mein ek kaam tha jo ek tay raaste mein fit nahi hota tha, aur Anaya ek mahine se uske aas-paas ghoom rahi thi. Har raat guard anishchit cases ki ek queue chhodta tha, woh kuch sau mein jo usne surakshit rehne ke liye chhupaye the. Har subah kisi ko, ek-ek karke, tay karna padta tha ki kya hona chahiye tha. Isme har baar dhoondhne ki alag maatra thi. Ek tay kram uske liye theek nahi tha.

Isliye unhone ek model ko seemaon ke saath use sambhalne diya. Ek *AI agent*, jaisa usne seekha tha, ek loop hai: tay karo, karo, jaancho, phir tay karo. Loop use lachila banata hai. Woh use khatarnaak bhi banata hai, kyunki aisi cheez ke saath jo kuch galat hota hai woh zyadatar rukne par galat hota hai. "Model kharab nahi hua tha," jaise Imran ne kaha, "use galat hone ke asimit mauke diye gaye the."

Ek *bounded agent* ki seemayein shuru hone se pehle likhi hoti hain. Kadmon ki adhiktam sankhya. Ek samay. Ek kharche ki chhat. Ek saaf ant jise *cannot resolve* kehte hain, jise use andaaza lagane ki jagah istemaal karna padta hai. Woh apni sthiti ka ek dikhne wala record rakhta hai, ek state jisme lakshya, uthaye gaye kadam, jo usne dekha aur uski sthiti ho, text ka badhta dher nahi jise use dobara padhna pade. Aur woh log karta hai ki har run kyun khatam hua.

Anaya ne poochha ki kaise pata chale ki seemayein kaam karti hain. Imran ne kaha ki saabit karo: ek aisa loop banao jo kabhi apna jawaab nahi paa sakta aur use rukte dekho. Phir usne woh kaha jo woh ab poore chapter ka kendra maanne lagi thi. "Har action ko chinhit karo: sirf padhne wala, ek write jise palta ja sake, ya ek write jise nahi palta ja sakta. Aakhri ke liye ek insaan ki zaroorat rakho. Jo insaan manzoor karta hai use kuch theek-theek manzoor karna hota hai. Agar manzoori ke baad payload badal jaaye, toh action rok diya jaana chahiye. Warna tumhare paas ek popup hai, control nahi."

Raat ki queue ke liye, har action sirf padhne wala tha. Agent prastaav deta. Ek insaan subah tay karta.

"Aur kya tum ek agent chunogi," usne kaha, "agar use koi agent na kehta?"

"Achha. Yahi sawaal poochhna chahiye. Bees test raatein yahi kehti hain." Usne unhe teen tareeko se chalaya tha: ek single call, ek tay kram aur bounded agent. Kram ne aam raaton par agent ke lagbhag barabar kiya, chauthai kharche par. Agent ne behtar sirf ajeeb raaton par kiya. "Toh hum use ajeeb raaton ke liye istemaal karte hain."

Usne poochha ki kya doosra agent madad kar sakta hai. Imran ne kaha ki atirikt jatilta ko kuch naapne layak kharidna padta hai, aur ki ab tak kisi doosre agent se yeh nahi maanga gaya.

## Deewar par plug

Guruvaar ko console vendor ne ek ghoshna ke saath email kiya. Uske product ko ab MCP ke zariye AI assistants se joda ja sakta tha.

"Yeh kya hai?" Anaya ne poochha.

"Ek plug socket," Imran ne kaha, jo aisi upamayein pasand karta tha jo dilchasp nahi thin.

*MCP*, Model Context Protocol, ek AI application ko tools aur data se jodne ka ek standard tareeka hai. Koi bhi upkaran ek deewar ke socket mein fit hota hai jo standard ka paalan karta hai. Usi tarah, uske liye bana koi bhi tool uske liye bani kisi bhi application mein fit hota hai. Teen hisse hain: woh application jo baatcheet rakhta hai, uske andar ek chhota connector, aur doosri taraf ek alag program jo peshkash karta hai ki woh kya kar sakta hai, uske tools, uske documents aur uske taiyaar nirdesh.

"Standard kya waada karta hai?" Anaya ne kaha.

"Ki yeh fit hoga. Yeh waada nahi karta ki yeh surakshit hai. Aur yeh tay nahi karta ki ise on kaun kar sakta hai."

Usne vendor ka vivaran kholkar padha ki uska connector kya peshkash karta tha. *Ek order dhoondho. Ek customer ke payments ki list banao. Refund jaari karo.*

"Dekho," Imran ne kaha. "Yeh refund ka vigyapan deta hai."

"Kya agent ke paas ijaazat hai?"

"Yahi sawaal hai, hai na. Ek tool ka khoj mein aana aur aapko use istemaal karne ki ijaazat hona alag cheezein hain. Pehla protocol ka kaam hai. Doosra humara. Aur use server par tay hona chahiye, jo logged in hai usse, model se pyaar se poochhkar nahi." Usne *vigyapit* shabd ko gheraa. "Ek asurakshit tool ka standard interface phir bhi ek asurakshit tool hai."

Usne garmiyon ki list mein jod diya, har document ko bharose ka na maanne ke niyam ke neeche. Connector ke zariye jo kuch bhi wapas aata hai woh bhi woh text hai jo ek ajnabi likh sakta tha. Ek protocol hai, usne use bataya, agents ke agents se baat karne ke liye; usme wahi shape ki problem hai, tools ki jagah pehchaan aur pratinidhitva ke saath. "Yeh hal karta hai ki woh kaise baat karte hain. Yeh hal nahi karta ki jo woh kehte hain us par bharosa karna hai ya nahi."

Hafte ke ant tak console ka koi apna assistant nahi tha, aur ek raat ki queue thi jisme ek bounded agent prastaav deta tha aur karta nahi tha, aur ek connector jisme refund tool band tha.

"Yeh Farah ke maange se kam hai," Anaya ne kaha.

"Yeh woh hai jo use chahiye tha," Imran ne kaha. "Use bas nahi pata tha ki yeh banane mein aasaan cheez hai."

## Saath le jaane layak baatein

Tool ek function hai jo model maang sakta hai, aur har ek ko ek tool contract chahiye. Contract theek-theek kehta hai ki tool kya karta hai aur kya nahi, woh kya leta hai, kaun si errors lautata hai, uske nateeje mein kya badalta hai aur use kaun bula sakta hai. Permissions server dwara laagu hoti hain aur model ke bharose kabhi nahi chhodi jaati. Jo action kuch badalta hai use yeh bhi batana chahiye ki agar woh do baar chale toh kya hota hai, jo idempotency hai. Bahut se features jo agent maangte lagte hain woh fixed workflow ki tarah behtar hain, model ko sirf wahan istemaal karke jahan shabd samajhne hon, aur pata karne ka tez tareeka yeh hai ki har woh tool kaat do jise ek saada niyam lagbhag hamesha sahi chunta. Jab agent ki zaroorat ho toh use bounded hona chahiye: seemit kadam, samay aur kharcha, saaf state, aur ek "tay nahi kar sakta" ant, aur ek insaan jo kisi bhi aisi cheez ko manzoor kare jise palta nahi ja sakta. MCP ek standard plug hai, jo waada karta hai ki cheezein fit hongi aur unki suraksha ke baare mein kuch nahi, aur jo tool khoj mein aata hai woh isse adhikrit nahi ho jaata.
