---
title: Galat Jawaab Ke Liye Design
summary: Jo tool das mein se nau baar sahi hai, woh dasvi baar galat hota hai. Tab screen kya karti hai, usi se tay hota hai ki log bharosa karenge ya nahi. Phir ek pilot, jo fail hone ke liye bhi bana tha, ajeeb result deta hai. Tool kaam karta hai, aur kuch badalta nahi. Aap refusals, pilots aur failure thresholds se milte hain.
course: ch20 ch205
goals:
  - batana ki galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
  - aisa refusal design karna jo kisi insaan tak le jaaye, aur woh screen jo AI band hone par dikhe
  - ek pilot banana jisme ek aisa number ho jise business pehle se track karta hai, ek comparison group, ek failure threshold aur kaafi lamba window
  - kadam-dar-kadam samajhna ki pilot kaam karta hai lekin business number kyun nahi hilta
terms:
  - refusal | tool ka sabhya "na", jaise dukaandaar kahe "yahan nahi milta, us counter par jaiye"; woh saaf kehta hai ki yeh kaam nahi kar sakta aur kisi insaan tak ka raasta batata hai; ise jaanboojh kar design karte hain | refusals
  - pilot | ek chhota trial, jaise poori shaadi ka khana banane se pehle ek trial batch; woh dikhata hai ki feature se business ko madad milti hai ya nahi, aur pehle hi bata deta hai ki kaun sa result failure hoga | pilots
  - failure threshold | pass marks jo trial shuru hone se pehle likh lete hain; result usse neeche aaye toh trial ko failure kehte hain | 
---

August ke aakhri hafte mein Farah Sheikh glass room ke darwaaze par khadi thi. Haath mein chai ka cup tha. Usne ek sawaal poochha. Agar guard das mein se nau baar sahi hai, toh dasvi baar ke baare mein woh apni team ko kya bataye?

Anaya hafton se is sawaal ka intezaar kar rahi thi. Yahi sawaal tay karta hai ki tool use hoga ya nahi.

Ek calculator sochiye jo das mein se ek baar galat ho. Aap uspar bharosa chhod denge. Ab ek aisa calculator sochiye jo kahe "yahan main pakka nahi hoon, check kar lijiye". Aap use use karte rahenge. 90 percent par das mein se ek jawaab galat hota hai. Kitni bhi engineering ho, woh aakhri dasva hissa nahi hatta. Isliye aage kya hota hai, yeh screen tay karti hai. Yeh engineering ka faisla nahi hai. Engineer bata sakta hai ki confidence score maujood hai (ek number jo batata hai ki tool kitna pakka hai). Score kam ho toh agent ko kya dikhega, yeh product owner tay karta hai.

## Case: dasva jawaab

Anaya ne April mein agent ki screen kaagaz par banayi thi. Usne use phir banaya, ab tak jo seekha tha uske saath. Is baar baat chaar cheezon par aayi.

Table padhte waqt har row se ek hi sawaal poochhiye. Agent ko screen par kya dikhega?

Table: Galat jawaab ke baare mein screen ko kaun se chaar kaam karne chahiye
| Principle | Matlab | Guard mein |
| --- | --- | --- |
| Aisa evidence dikhao jo khule | Sirf ek dava bas "bharosa karo" kehta hai. Jis dave ko padhne wala ek second mein check kar le, woh evidence hai | "1 detail hidden. Click to see why" wala note bilkul wahi words kholta hai jo chhupaye gaye the, wajah ke saath. Isi liye form mein quotation zaroori tha |
| Speed ke baare mein sochiye | Aadha bana faisla khatra hai, isliye faisla stream nahi ho sakta | Jab tak guard khatam nahi hua, agent ki screen par kuch nahi aaya. Jo number dikhe aur phir badal jaaye, woh spinner se bhi bura hai |
| Confidence ko parde ke peeche use kijiye | Jawaab ke saath percentage dikhana agent se aisi cheez judge karwana hai jo woh judge nahi kar sakta. Machine ka apna confidence aksar kharab calibrated hota hai | High confidence: chhupa do aur bata do. Beech wala: chhupa do, "safe rehne ke liye chhupaya" kaho aur baad mein kisi insaan ke paas bhej do. Bahut kam: text ko mat chhedo, lekin message ko review ke liye mark karo |
| Sudhaarna tez banaiye | Tool galat ho toh agent jo karta hai, woh building ka sabse keemti data hai. Zyadatar products use phenk dete hain | Ek click aur ek line. Button sirf is chat ke liye original dikhata hai. Woh poochhta hai ki agent ko kya expect tha. Woh sawaal, evidence aur jawaab teeno ek saath record karta hai |

Maan lijiye jawaab sudhaarne mein haath se kaam karne se zyada time lagta hai. Tab koi sudhaarega nahi. Feedback table (jahan sudhaar save hote hain) khaali rahegi, aur khaali table dekh kar lagega ki sab khush hain.

Thumbs-down sirf itna kehta hai ki "kuch galat tha". Yeh us teacher jaisa hai jo bina kuch likhe cross laga de. Sudhaara hua record batata hai ki jawaab kya hona chahiye tha. Woh ek test case hai, jo Farah ki team ne muft mein likh diya.

Farah ne phir poochha ki dasve jawaab ke baare mein kya kahe. Anaya ke paas teen baatein thi. Pehli, guard dikhayega ki woh unsure hai, aur batayega kyun. Doosri, sudhaarna agent ke akele kaam karne se tez hoga. Teesri, jo galat jawaab agent kabhi dekhenge hi nahi, unhe doosre tareeke se dhoondha jaayega.

## Jab woh nahi kar sakta, tab kya kehta hai

Ek screen se Anaya bachti aa rahi thi. Usne ek Tuesday use design karne mein lagaya.

Har system tab achha dikhta hai jab woh kaam kar raha ho. Bharosa us screen par banta hai jo kehti hai "main nahi kar sakta". Bahut se products use sabse aakhir mein design karte hain, ya kabhi nahi.

Guard ke liye **refusal** woh hai jo woh tab karta hai jab kaam safely nahi kar sakta. Ek dukaan ka sahayak sochiye jo kahe, "Yeh hamare paas nahi milta. Bagal ki dukaan try kijiye." Aap us dukaan par zyada bharosa karenge. Ek misaal lijiye. Ek customer free chat mein Aadhaar card ki photo attach karta hai. Guard abhi tasveer ke andar ka number kaala nahi kar sakta.

Imaandaar design yeh tha ki dikhawa na kiya jaaye. Chat teeno languages mein bolegi. Words Farah ne likhe aur Lakshmi ne approve kiye. Unmein likha tha: please yahan identity cards share mat kijiye. Secure upload use kijiye, ya kisi insaan se baat karne ke liye yeh button dabaiye.

::: key Jo refusal insaan tak le jaaye, woh bharosa kamata hai
Jo refusal kisi insaan tak ka raasta deta hai, woh us system se zyada bharosa kamata hai jo hamesha kuch na kuch jawaab de deta hai. Log system ko is se bhi judge karte hain ki woh kis cheez ko mana karta hai. Jo feature kabhi mana nahi karta, woh unhe sikhata hai ki uske confidence ka koi matlab nahi.
:::

Aakhri screen tab ki thi jab machine band ho. Anaya safe mode pehle hi bana chuki thi (woh switch jo guard ko band karta hai). Ab usne design kiya ki mode on hone par agents ko kya dikhega. Upar ek patli peeli patti hai. Us par likha hai "Safe mode: names and addresses are not being hidden". Dukaan ke darwaaze par "band hai" ka board sochiye. Khaali screen log ko andaaza lagane par chhod deti. Switch bas ek failure ko doosre se badal deta.

## Ek test jo fail ho sakta tha

Mahine ke ant tak screens taiyaar thi. Lakshmi ne pilot maanga. Use launch nahi chahiye tha. Use test chahiye tha. Aur woh chahti thi ki Anaya pehle hi bata de ki use kya nirash karega.

Ab tak team ne sirf system ko naapa tha. Kya finder sahi tha? Kya judge par bharosa kiya ja sakta tha? Kya sorter har box mein kaam karta tha? Inmein se kisi ne us sawaal ka jawaab nahi diya jo agli quarter ka paisa tay karta hai. Kya feature se business ko madad mili?

Ek system 94 percent accurate ho sakta hai aur phir bhi kuch nahi badalta. Ho sakta hai koi use hi na kare. Ya jis step ko woh tez karta hai, woh kabhi slow hissa tha hi nahi. Yeh aisa hai jaise tez oven kharidna jabki line billing counter par lagi ho.

Isliye pehla kaam slow hissa dhoondhna tha. Anaya aur Farah ne support office mein ek hafte ka kaam time kiya. Unhone kuch nahi badla. Agents ne identity numbers par lagbhag koi time nahi lagaya. Na padha, na copy kiya, na parwaah ki.

Slow hissa kahin aur tha, aur usse Lakshmi ko chinta thi. Har mahine woh ek privacy sweep chalati thi. Woh logs (har chat ka likha hua record) se paanch sau chats ki spot check leti thi. Woh ginti thi ki kitnon mein abhi bhi koi unhidden identity number hai. July mein paanch sau mein se chhiyaalis mein tha.

Ek **pilot** chaar faislon par tikta hai. Shaadi ke khane se pehle ki trial batch sochiye. Aap ek dish chunte hain, chakhne wala ek group, ek pass mark, aur kaafi din.

Table: Pilot ke chaar faisle
| Faisla | Matlab | Sahaj ka chunaav |
| --- | --- | --- |
| Number | Ek aisa measure jise business pehle se track karta hai, is mauke ke liye banaya hua metric nahi | Sweep count |
| Comparison | Wahi team pehle aur baad mein, kamzor evidence hai. Ek hi dauraan do milte-julte groups, bahut mazboot | Ek hi chatbot par do support teams: Pune guard ke saath, Nashik bina guard ke |
| Failure threshold | Woh result jisse neeche pilot ko failure kaha jaayega, shuru hone se pehle likha hua | Chaar hafte baad, agar Pune ka sweep count Nashik ke count ka kam se kam aadha nahi hai, toh pilot fail hua. Pilot tab bhi fail hua jab Pune ke agents das mein se do se zyada chats mein guard band kar dein. Ek guardrail: agent handling time paanch percent se zyada nahi badhna chahiye |
| Time window | Itna lamba ki chamak utar jaaye. Har naya tool apne pehle pakhwade mein asli se behtar dikhta hai | Chhe hafte |

Lakshmi ne page padha. Usne sign nahi kiya. Usne use wapas diya aur ek line aur maangi. Agar yeh kaam kare aur number na hile, toh aap mujhe kya bataoge?

## Jo pilot kaam kar gaya

Pilot September ki pehli tareekh ko shuru hua. Doosre hafte ke ant tak Anaya ne dashboard (ek screen par saare numbers) padha. Us ehsaas par use bharosa nahi tha. Guard kaam kar raha tha. Pune mein woh roz chaalis se pachaas details chhupa raha tha. Button kam hi dabaya jaata tha. Answer key ke against scoreboard ab tak ke sabse achhe par tha. Handling time flat tha.

Lakshmi ne pakka karne ke liye sweep jaldi chalaya. Pune mein paanch sau mein ikatalees. Nashik mein tentalees. Kuch nahi badla tha.

Anaya ne un do numbers ko ek lambe minute tak dekha. System kaam karta tha. Business number nahi hila tha. Use pehle hi bataya gaya tha ki yeh ho sakta hai. Is field ka sabse uljhaane wala result yahi hai. Yeh aise hai jaise ek vidyarthi khoob padhe aur marks wahi rahein. Man yahi kehta hai ki wapas jaake system ko aur sudharo. Teams wahi naapna jaanti hain.

Usne apne ko roka. Lakshmi ki jodi hui line page par thi. Uske neeche Anaya ne teen sawaal likhe the. Woh us order mein the jisme jawaab milne ki sabse zyada sambhavna hai.

Table: Jab kaam karta hai par number nahi hilta, tab teen sawaal
| Order | Sawaal | Sahaj mein result |
| --- | --- | --- |
| 1 | Kya log ise use kar rahe hain? Kam use sabse aam wajah hai aur check karna sabse aasaan | Haan, guard har chat par chal raha tha |
| 2 | Kya iska output us jagah tak pahunchta hai jahan faisla hota hai? | Gyarah minute mein jawaab mila, neeche dekhiye |
| 3 | Jis step ko tez kiya gaya, kya woh critical path par tha bhi? | Zaroorat nahi padi |

Doosre sawaal mein use gyarah minute lage. Usne Imran se poochha ki sweep apne paanch sau chats kahan se leta hai. Imran ne bhaunhein sikodi. Usne ek diagram kholi aur chup ho gaya.

Raat ka job raw table se copy karta tha. Woh table guard se pehle se maujood tha. Guard un messages ko saaf karta tha jo agents dekhte the. Woh aage bheji jaane wali history ko bhi saaf karta tha. Lekin sweep jo logs padhta tha, woh original messages se bane the. Woh guard ke chalne se pehle likhe gaye the. Us table ko kisi ne chhua nahi tha. Guard har cheez ko bacha raha tha, siwaye us ek jagah ke jahan Lakshmi dekhti thi. Yeh aisa hai jaise ghar ke har darwaaze par taala lage aur khidki khuli reh jaaye.

"Store karne se pehle saaf karo," Anaya ne kaha. "Yeh maine April mein likha tha." Imran ne kaha, tumne yeh history ke liye likha tha. Maine ise log par lagaya nahi.

Use do din lage guard ko raw table ke aage le jaane mein. Teesre hafte mein Pune ka sweep count paanch sau mein nau par aa gaya. Nashik ka bayaalis par raha. Anaya yeh dekhne ke baad der tak corridor mein khadi rahi. Uske paas ek number tha, aur woh hila tha. Woh isliye hila kyunki usne aisa test likha jo fail ho sakta tha. Aur jab woh fail hua, tab bhi usne use maana.

::: key Ab aap kya keh sakte hain
Har N apne project se bhariye.
- Mere feature ki ek specification hai jisme ek table hai. Usme measurement hai, N rows ki answer key hai, N ki threshold hai, aur number kam pade toh kya karna hai.
- Message kisi vendor (bahar ki company jise hum paisa dete hain) ko dikhne se pehle main teen sawaal order mein poochhta hoon. Mera likha rule N cheezein batata hai jo kabhi nahi bheji jaatin.
- Maine ek aise number par pilot chalaya jise business pehle se track karta tha. Usme comparison group tha aur shuru hone se pehle likhi failure threshold thi. Number N se N par aaya.
:::

## Saaraansh

90 percent accuracy par das mein se ek jawaab galat hota hai. Us par screen kya karti hai, yeh product owner tay karta hai.

- Chaar cheezein zaroori hain. Aisa evidence dikhaiye jo khule. Speed ke baare mein sochiye. Confidence ko parde ke peeche use kijiye, taaki tay ho ki kya hoga, screen par number ki tarah nahi. Sudhaarna haath se kaam karne se tez banao.
- Refusal ek aisi screen hai jo aap jaanboojh kar design karte hain, aur woh kisi insaan tak ke raaste par khatam hoti hai. AI band hone par dikhne wali screen bhi aisi hi hai.
- Yeh jaanne ke liye ki system se business ko madad milti hai ya nahi, pehle slow hissa dhoondhiye. Phir ek pilot chalaiye. Ek aisa number lijiye jise business pehle se track karta hai, aur ek comparison group. Failure threshold pehle se likhiye. Window itna lamba rakhiye ki chamak utar jaaye.
- Jab kaam karta hai par number nahi hilta, toh order mein poochhiye. Kya use hota hai? Kya uska output wahan tak pahunchta hai jahan faisla hota hai? Kya wahi step slow tha?

Agle chapter mein September mein do ghante ke liye guard Pune ka har order number chhupa deta hai, aur dashboard hara hi rehta hai.
