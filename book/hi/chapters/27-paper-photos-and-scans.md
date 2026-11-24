---
title: Paper, Photos Aur Scans
summary: Ab tak guard sirf text padhta tha. Anaya pachaas random attachments dekhti hai aur paati hai ki asli traffic zyadatar photographs hai. Woh yeh bhi dekhti hai ki zero ki jagah capital O ek number ko rule se bacha kar nikal sakta hai. Is chapter mein OCR aur document audit aate hain.
course: ch16
goals:
  - samajhna ki documents par nirbhar project document audit se kyun shuru hona chahiye
  - batana ki OCR kya karta hai, aur woh aam taur par kaun si galtiyaan karta hai
  - pattern rule chalne se pehle look-alike characters theek karna
  - page ko text ki tarah padhne aur model ko page ki picture dikhane mein compare karna, aur batana ki voice kya badalti hai
terms:
  - OCR | us clerk jaisa jo photo dekh kar bol-bol kar type karta hai; optical character recognition woh software hai jo text ki picture ko text mein badalta hai, aam taur par kuch galtiyon ke saath | text extraction, text extractor
  - document audit | godown ka maal ginne jaisa, shelves banane se pehle; aap random sample lekar ginte hain ki kitna saaf digital text hai, kitna scanned hai, aur kitne mein matlab tables aur layout mein chhupa hai | 
---

Chaar mahine tak Anaya ne customer ke message ko phone par kuch lines ke text ki tarah dekha. Usne kabhi jaanch nahi ki. Yeh tasveer transcripts (saved chats) se aayi thi, jo text hote hain. Yeh answer key se bhi aayi thi, jo sentences ka ek column tha. Team ne jo kuch banaya tha, woh ek chupe andaze par khada tha. Kisi ne pehle hi customer ke shabdon ko characters mein badal diya hoga.

July ke ek Friday ko Farah Sheikh ne uske saamne ek sheet rakhi. Woh bilkul sentence jaisi nahi dikhti thi. Woh ek bank passbook (bank ki di hui chhoti kitaab) ki photograph thi, kitchen table par. Woh thodi tedhi thi. Ek kone par khidki ki roshni padi thi. Ek customer ne use chatbot ko bheja tha, in shabdon ke saath: "account number check karo".

Usmein kuch bhi text nahi tha. Woh pixels naam ke chhote rangeen bindiyon ki grid thi. Insaan ko woh ek table jaisi dikhti thi, jisme naam, account number aur branch tha. "Humein aise bahut aate hain," Farah ne kaha. Anaya ne poochha kitne. Farah ko nahi pata tha. Usne socha tha ki Anaya khud pata karna chahegi.

## Case: kitchen table par passbook

Anaya ne samajhdaari ka kaam kiya. Usne ek random sample maanga. Is chapter mein aap dekhte hain ki usne kya dikhaya. Aap dekhte hain ki ek machine ne photograph se number padha toh us number ka kya hua. Aur aap dekhte hain ki purane design ki hadd kahan thi.

## Pachaas, random

Bori se chaawal chakhne ko sochiye. Aap alag-alag jagah se mutthi bhar lete hain, sirf upar se nahi. Random sample bhi aise hi kaam karta hai.

Usne Farah se kaha ki pichhle mahine ki chats se pachaas attachments random nikaale jaayein. Woh dilchasp wale nahi hone the. Kisi josheele colleague ke chune hue bhi nahi. Ek number generator ne asli traffic se saare pachaas chune. Saturday subah Anaya ne ek-ek karke unhe dekha. Garmi se bachne ke liye shutters aadhe gire the.

::: def Document audit
Documents par tika kisi bhi project se pehle teen number nikaaliye. Pehla, kitna saaf digital text hai jo jaisa hai waisa padha ja sakta hai? Doosra, kitna scanned ya photographed hai, jise pehle text mein badalna padega?

Teesra, logon ko jo chahiye uska kitna hissa tables, forms aur layouts ke andar hai? Wahan matlab is par depend karta hai ki kaun sa dabba kiske bagal mein hai. Random sample se yeh ginna *document audit* hai. Ismein ek dopahar lagti hai. Lagbhag koi nahi karta.
:::

Unhone pachaas ko dhereon mein baanta.

Table: Pachaas random attachments kya the
| Woh kya tha | Ginti |
| --- | --- |
| Saaf digital files, jaise bank se download kiya statement | 12 |
| Cards, cheques aur passbooks ki photographs | 31 |
| Doosre apps ke screenshots | 7 |

Pachaas mein se ikatees photographs thi. Yaani chhe se thodi zyada, har das mein. Lagbhag sabki pehli line mein wahi jaankari thi jise dhoondhne ke liye guard bana tha.

Anaya ne kaha ki isme usse galti hui thi. April mein usne cards ki photographs "Could" mein rakhi thi. Use laga tha ki woh kam aati hain. Imran ne kaha ki uske paas number nahi tha. Anaya ne kaha ki uske paas ek andaaza tha.

Usne woh line "Could" se "Should" mein kar di. Uske bagal mein wajah likhi: random sample ka baasath percent, 12 July ko check kiya. Uska document zyadatar pakka lagne wale andaazon ke fail hone ke baare mein tha. Isliye yeh ek chhoti, nijee jeet jaisa laga.

## Step se pehle ka step

Rule picture nahi padh sakta. Pehle koi cheez picture ko text mein badalti hai. Yahi *OCR* hai, yaani optical character recognition. Ek clerk sochiye jo photo dekhta hai, bol-bol kar padhta hai aur jo bolta hai woh type karta hai. OCR aisa hi software hai. Woh likhai ki picture dekhta hai aur jo characters use dikhte hain woh wapas deta hai. Woh bahut achha hai, lekin perfect nahi. Uski galtiyan ek ajeeb aur dhokhebaaz kism ki hoti hain.

Imran ne ek dummy Aadhaar card liya. Building ke ek designer ne use ek banaye hue number ke saath banaya tha. Usne use thode tedhe angle se photograph kiya. Photograph reader se chalayi. Card par number tha 4321 5678 9012. Jo text wapas aaya woh tha "432l 5678 9O12". Reader ne jahan digit ek tha wahan chhota letter l diya. Jahan zero tha wahan capital O diya.

Kai typefaces (akshar ke styles) mein ek aur l lagbhag ek jaise dikhte hain. O aur zero bhi. Software shapes se andaza lagata hai. Pattern checker barah digits dhoondhta hai. Yeh das digits aur do letters the. Isliye checker ne ise nahi dekha. Asli number nikal jaata. Record bilkul saaf dikhta, jaise rule ko kuch galat mila hi nahi.

PAN mein yahi dikkat doosri taraf se hoti hai. Uske pehle paanch jagah mein letters hote hain aur agle chaar mein digits. Letter ki jagah digit aa jaaye toh shape toot jaati hai.

Ilaaj chhota tha. Rule kisi number ko dekhe, usse pehle ek chhota step look-alikes ko wapas badal sakta hai. Jahan sirf digits allowed hain, wahan O zero hai. l ek hai. S paanch hai. B aath hai. Kisi ne yeh rules mein daala nahi tha. Phone par type karne wala koi yeh galti nahi karta. Sirf photograph padhne wali machine karti hai.

Anaya ne answer key mein rows ka ek set jodha. Usne unhe "scanned, with lookalikes" label kiya. Yeh us key ka pehla version tha jo images se bana tha.

## Page padhne ke do tareeke

Form ki copy banane ke do tareeke sochiye. Aap uske shabd notebook mein type kar sakte hain. Ya poore page ki photocopy kar sakte hain. Imran ne dono options rakhe.

Table: Page padhne ke do tareeke
| Tareeka | Taakat | Kamzori |
| --- | --- | --- |
| Pehle page ko text mein badaliye, phir text par kaam kijiye | Sasta. Ab tak jo banaya sab chalta hai: cutting, rules, search | Aksar structure bigaad deta hai. Teen columns ka table aksar ek sapaat line ban jaata hai. Har value bach jaati hai. Kaun sa figure kis row ka hai, yeh kho jaata hai |
| Page ki picture ek capable model ko dijiye | Layout bacha rehta hai. Table ya form ke baare mein sawaal ka jawaab de sakta hai | Per page zyada kharch. Kabhi-kabhi code galat padhta hai. Jis page ko usne dekha, us par wapas ishaara karne ka tareeka chahiye |

Kai systems dono karte hain. Search ke liye text nikaalte hain. Jab sawaal table ya form ke baare mein ho, toh model ko picture dikhate hain.

::: watch Flatten karne ka chhupa khatra
Maan lijiye ek table flatten ho gaya. Sawaal ek column ke number ke baare mein hai. Search chalti hai. Model saaf-suthra jawaab deta hai, lekin galat column ka number quote karta hai. Aage ki koi cheez ise pakad nahi sakti. Aage ki koi cheez page ko kabhi dekhti hi nahi.
:::

Anaya ne passbook ki photograph ko phir dekha. Usmein ek naam, ek account number aur ek branch code tha. Maan lijiye reader ne unhe galat order mein rakh diya hota. Woh bata nahi paati ki kaun sa number kaun sa hai. Tab guard ya toh dono chhupa deta, jo safe hai. Ya dono mein se koi nahi, jo safe nahi hai.

## Aur phir voice

Dopahar ke ant mein Farah ne ek aur source ka naam liya. Kuch customers voice notes bhejne lage the. Call centre voice assistant ke baare mein poochh raha tha. Anaya ne dono ko Won't list mein rakha tha. Apne saath nyay karne ke liye usne poochha ki kyun.

Imran ne kaha ki voice sabse badi hadd badal deta hai. Phone call sochiye. Text mein do second ka intezaar theek hai. Bolne mein do second ki khamoshi baatcheet tod deti hai. Log ek doosre ke upar bolne lagte hain. Poora round trip is gap ke andar fit hona chahiye: speech andar, thinking, speech bahar. Us garmi ki thinking machines zyadatar bahut dheemi thi.

Voice mukhya roop se sahi hone ki baat bhi nahi hai. Yeh jaanne ki baat hai ki insaan ne kab bolna khatam kiya. Agar woh beech mein bol de toh kya karna hai. Aur system kaam karte waqt kya kahe. Yeh ek alag problem aur alag project tha. Won't wahin raha jahan tha.

## Kya badla

Us raat Anaya ne board par likha. Usne use purani laal line ke bagal mein, naye row ke neeche rakha. Usne likha ki audit mein kya laga aur usne kya diya. Ek dopahar, pachaas files aur bahut saari chai lagi. Usne photographs ko "Could" se "Should" mein kiya. Usne rules ko look-alikes ke baare mein sikhaya. Aur aage ke liye ek thumb rule diya: documents par nirbhar kisi bhi project se pehle, saaf wale ginye.

Imran ne kaha ki yeh project ko chhe hafte baad fail hone se bachane ka sabse sasta tareeka hai. Yeh sabse zyada andekha bhi kiya jaata hai. Uske itne saalon mein kisi ne ek baar bhi use nahi maanga.

## Summary

Asli documents saaf text se kahin zyada pages aur pictures hote hain.

- Jo step picture ko characters mein badalta hai woh OCR hai. Uski galtiyan ek kism ki hoti hain, jaise zero ki jagah letter O ya ek ki jagah l. Woh identity number ko us rule se bacha kar nikal sakti hain jo digits dhoondhta hai.
- Tables ko sabse zyada, aur chupke se, nuksaan hota hai. Values bach jaati hain. Unke beech ke rishte nahi bachte.
- Aap page ko pehle text mein badal sakte hain, jo sasta hai. Ya capable model ko picture ki tarah dikha sakte hain, jo layout bachata hai. Kai systems dono karte hain.
- Voice sabse badi hadd ko sahi hone se samay par hone mein badal deta hai.
- Document project shuru hone se pehle, document audit dikhata hai ki asal mein kya shaamil hai. Ismein random chune pachaas files aur teen ginti lagti hain.

Agle chapter mein Lakshmi apni desk par teen documents rakhti hai. Woh Anaya se poochhti hai ki kaun sa vendor (bahar ki company) ko bheja ja sakta hai, aur kyun.
