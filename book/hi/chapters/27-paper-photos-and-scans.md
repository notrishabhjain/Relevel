---
title: Kaagaz, Photos Aur Scans
summary: Ab tak guard ne jo bhi vaakya padha woh pehle se text tha. Pachaas attachments ka random sample dikhata hai ki asli traffic mein yeh kitni kam sach hai, aur kaise bade O akshar ka zero ban jaana ek number ko rule ke paas se nikaal sakta hai. Chapter OCR aur document audit samjhata hai.
course: ch16
goals:
  - samjhana ki document par nirbhar project ko document audit se kyun shuru karna chahiye
  - OCR kya karta hai aur woh kaun si aam galtiyan karta hai, yeh batana
  - pattern rule lagane se pehle milte-julte akshar theek karna
  - page ko text ki tarah padhne aur use model ko tasveer ki tarah dikhane ki tulna karna, aur batana ki voice kya badalti hai
terms:
  - OCR | optical character recognition: software jo text ki tasveer ko text mein badalta hai, aamtaur par kuch galtiyon ke saath | text extraction, text extractor
  - document audit | kuch bhi banane se pehle, ek random namoone se ginna ki sangrah ka kitna hissa saaf digital text hai, kitna scan hai, aur kitne ka matlab tables aur layout mein hai | 
---

Saal ke pehle chhe mahine Anaya ke dimaag mein customer ke message ki tasveer phone par text ki kuch lines thi. Usne ise kabhi jaancha nahi tha. Woh transcripts se aayi thi, jo swabhaav se text hain, aur answer key se, jo vaakyon ka ek column thi. Team ne ab tak jo kuch banaya tha, har rule aur har test, ek chupi maanyata par tika tha: ki kisi ne pehle hi customer ke shabdon ko akshron mein badal diya hai.

July ke ek Friday ko Farah Sheikh ne uske saamne ek kaagaz rakha jo bilkul vaakya jaisa nahi dikhta tha. Woh ek photograph thi jo ek customer ne ek bank passbook ki kitchen ki table par kheenchi thi, thodi tirchhi, ek kone par khidki ki roshni ke saath, aur chatbot ko "account number check karo" shabdon ke saath bheji thi. Usme kuch bhi text nahi tha. Woh pixels ka ek grid tha jo ek insaan ko ek naam, ek account number aur ek branch wali table jaisa dikhta tha. "Hamein aisi bahut milti hain," Farah ne kaha. Anaya ne poochha ki kitni. Farah ne kaha ki use nahi pata aur socha tha ki Anaya jaanna chahegi.

## 27.1 Case: kitchen ki table par ek passbook

Anaya ne samajhdaari ka kaam kiya aur ek random sample maanga. Yeh chapter dikhata hai ki usne kya dikhaya, ek photograph se jab machine ne ek number padha toh uska kya hua, aur maujooda design ki seemayein kahan thi.

## 27.2 Random mein pachaas

Usne Farah se pichhle mahine ki chats mein se pachaas attachments random nikalne ko kaha: dilchasp nahi, aur woh nahi jo koi utsahi saathi chunta, balki ek number generator ke chune hue pachaas, asli traffic se. Usne unhe ek Saturday subah, garmi se bachne ke liye aadhe band shutters ke saath, ek-ek karke dekha.

::: def Document audit
Document par nirbhar kisi bhi project se pehle teen number kaam ke hain. Documents ka kitna hissa saaf digital text hai jo jaisa hai waisa padha ja sakta hai? Kitna hissa scan ya photo hai, jise pehle text banana padega? Aur logon ko chahiye jaankari ka kitna hissa tables, forms aur layouts ke andar band hai, jahan matlab is par nirbhar hai ki kaun sa dabba kiske paas hai? Ek random sample se yeh jaanna *document audit* hai. Ismein ek dopahar lagti hai, aur lagbhag koi ise karta nahi.
:::

Unhone pachaason ko dheron mein baanta.

Table: Pachaas random attachments kya the
| Kya tha | Ginti |
| --- | --- |
| Saaf digital files, jaise bank se download kiya statement | 12 |
| Cards, cheques aur passbooks ki photographs | 31 |
| Doosre apps ke screenshots | 7 |

Pachaas mein se ikatees, yaani das mein se chhe se zyada, photographs the, aur lagbhag sab ki pehli line mein wahi detail thi jise dhoondhne ke liye guard bana tha. Anaya ne kaha ki yahi hissa usne galat samjha tha. April mein usne cards ki photographs ko "Could" mein rakha tha kyunki use lagta tha ki woh dulabh hain. Imran ne kaha ki uske paas number nahi tha. Usne kaha ki uske paas ek ehsaas tha. Usne line "Could" se "Should" mein badal di aur kaaran uske paas likha: ek random sample ka baasath percent, 12 July ko jaancha gaya. Aise document mein jo zyadatar aatmavishwaas bhare andaazon ki failure ke baare mein tha, yeh ek chhoti nijee jeet thi.

## 27.3 Kadam se pehle ka kadam

Ek picture ko rule nahi padh sakta. Pehle use koi cheez text mein badalti hai. Woh *OCR* hai, optical character recognition: software jo likhe hue ki picture dekhta hai aur woh akshar lautata hai jo use lagta hai ki woh dekh raha hai. Woh bahut achha hai aur poora nahi, aur jo galtiyan karta hai woh ek khaas aur dhokhebaaz kism ki hain.

Imran ne ek dummy Aadhaar card liya jise building ke ek designer ne ek banaye hue number ke saath banaya tha, aur use ek halke kone par photograph kiya. Usne photograph ko reader se chalaya. Card ka number 4321 5678 9012 tha. Jo text wapas aaya usme "432l 5678 9O12" tha. Reader ne ek chhota akshar l lautaya jahan ank ek hona tha, aur ek bada O jahan shunya hona tha.

Kai typefaces mein ek ank aur l lagbhag ek jaise dikhte hain, aur O aur shunya bhi. Software shakl se andaaza lagata hai. Pattern checker baarah ank dhoondhta hai, aur yeh das ank aur do akshar the, isliye checker ise nahi pehchaanta. Asli number ek bilkul saaf record ke saath guzar jaata jo dikhata ki rule ko kuch galat nahi dikha. PAN ki bhi wahi mushkil ulti taraf hai: usme pehle paanch jagah par akshar aur agle chaar par ank hote hain, aur jahan akshar hona chahiye wahan ank shakl tod deta hai.

Upaay saadhaaran tha. Rule kisi number ko dekhne se pehle ek chhota kadam milte-julte akshar wapas badal sakta tha, is maanyata par ki jahan sirf ank allowed hain wahan O shunya hai, l ek hai, S paanch hai aur B aath hai. Yeh kisi ne rules mein daalne ka nahi socha tha, kyunki phone par type karne wala koi yeh galti nahi karta. Sirf photograph padhne wali machine karti hai. Anaya ne answer key mein "scan, milte-julte aksharon ke saath" ke naam se rows ka ek parivaar joda, aur dekha ki yeh key ka tasveeron se bana pehla version tha.

## 27.4 Ek page padhne ke do tareeke

Imran ne vikalp rakhe.

Table: Ek page padhne ke do tareeke
| Tareeka | Khoobiyan | Kamiyaan |
| --- | --- | --- |
| Pehle page ko text banao, phir text par kaam karo | Sasta. Ab tak jo banaya sab laagu hota hai: kaatna, rules, search | Aksar structure bigaad deta hai. Teen column ki table aksar ek chapti line ban jaati hai. Har value bachti hai, aur kaun sa figure kaun si row ka hai woh kho jaata hai |
| Ek saksham model ko page ki tasveer do | Layout rakhta hai aur table ya form ke baare mein sawaalon ka jawaab de sakta hai | Har page par zyada mehnga, kabhi-kabhi code galat padhta hai, aur use us page ki taraf ishaara karne ka tareeka chahiye jo usne dekha |

Kai systems dono karte hain. Woh search ke liye text nikalte hain aur model ko tasveer dikhate hain jab sawaal kisi table ya form ke baare mein ho.

::: watch Chapte hone ka khaamosh khatra
Maan lijiye ek table chapti ho gayi hai aur sawaal ek column ke number ke baare mein hai. Search kaam karti hai aur model aatmavishwaas se jawaab deta hai, galat column ka ek number quote karte hue. Peechhe ke kisi bhi kadam ko yeh pakadne ka tareeka nahi, kyunki peechhe ke kadam ne page kabhi dekha hi nahi.
:::

Anaya ne passbook ki photograph dobara dekhi. Usme ek naam, ek account number aur ek branch code tha. Agar koi reader unhe galat kram mein rakh deta, toh woh nahi bata sakti thi ki kaun sa number kaun sa hai. Tab guard ya toh dono chhupa deta, jo surakshit hota, ya koi nahi, jo nahi hota.

## 27.5 Aur phir awaaz

Dopahar ke ant mein Farah ne ek aur sroot ka zikr kiya. Kuch customers voice notes bhejne lage the, aur call centre ek voice assistant ke baare mein poochh raha tha. Anaya ne dono ko Won't list mein rakha tha, aur usne apne aap ko nyaay dene ke liye poochha, kyun.

Imran ne kaha ki voice mukhya seema badal deta hai. Text mein do second ka intezaar theek hai, jabki bolne mein do second ki khaamoshi baatcheet tod deti hai aur log ek doosre ke upar bolne lagte hain. Poori yatra, awaaz ka andar aana, sochna aur awaaz ka bahar aana, usi ke andar fit honi chahiye. Garmiyon wali sochne wali machines aam taur par bahut dheemi thi. Voice mukhya roop se accuracy ka sawaal bhi nahi hai. Yeh is baare mein hai ki ek insaan kab bol chuka, agar woh beech mein tokein toh kya karna hai, aur system ke kaam karte waqt kya kehna hai. Yeh ek alag samasya aur alag project tha, aur Won't wahin raha.

## 27.6 Kya badla

Us raat Anaya ne board par, puraani laal line ke paas aur nayi row ke neeche, likha ki audit ne kya kharch kiya aur kya kharida. Ismein ek dopahar, pachaas files aur bahut saari chai lagi thi. Isne photographs ko "Could" se "Should" mein badal diya, rules ko milte-julte aksharon ke baare mein sikhaya, aur use bhavishya ke liye ek thumb rule diya: document par nirbhar kisi bhi project se pehle, saaf wale gino. Imran ne kaha ki yeh woh sabse sasta tareeka hai jisse chhe hafte baad project fail hone se bacha ja sakta hai, aur sabse zyada anadekha kiya jaane wala bhi, kyunki usse kabhi yeh poochha nahi gaya tha.

## Saaraansh

Asli documents saaf text se kahin zyada baar pages aur tasveerein hote hain.

- Tasveer ko akshron mein badalne wala kadam OCR hai. Uski galtiyan ek khaas kism ki hain, jaise shunya ki jagah O akshar ya ek ki jagah l, jo ankon ko dhoondhne wale rule ke paas se pehchaan ke number ko nikal sakti hain.
- Tables is kadam ki sabse khaamosh shikaar hain, kyunki values bach jaati hain aur unke beech ke rishte nahi.
- Page ko pehle text mein badla ja sakta hai, jo sasta hai, ya ek saksham model ko tasveer ki tarah dikhaya ja sakta hai, jo uska layout rakhta hai. Kai systems dono karte hain.
- Voice mukhya seema ko accuracy se samay mein badal deta hai.
- Kisi bhi document project ke shuru hone se pehle, ek document audit, pachaas random files aur teen ginti, dikhata hai ki asal mein kya hai.
