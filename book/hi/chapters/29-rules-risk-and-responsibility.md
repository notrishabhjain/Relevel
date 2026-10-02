---
title: Niyam, Risk Aur Zimmedaari
summary: Lakshmi batati hai ki bank mein bees saal ne use kaagazi kaam ke baare mein kya sikhaya, aur team woh ek-page ka document likhti hai jo kehta hai ki guard kis liye hai, woh kya galat karta hai, aur use kis kaam ke liye kabhi istemaal nahi karna chahiye. Phir woh ek customer ko delete karne ki koshish karte hain, aur dhoondhte hain ki woh kahan rehta hai.
course: ch17
terms:
  - risk tier | ek star, jo is baat se tay hota hai ki galat jawaab kitna nuksaan kar sakta hai, jo tay karta hai ki kisi system ko kitne documentation, jaanch aur saboot ki zaroorat hai; istemaal tier tay karta hai, technology nahi | risk tiers
  - system card | ek AI system ka ek page ka vivaran: woh kis liye hai, woh kaun sa data istemaal karta hai, use kaise test kiya gaya, woh kya galat karta hai aur use kis kaam ke liye istemaal nahi karna chahiye | system cards
  - deletion drill | yeh maan lena ki ek customer ne apna data delete karne ko kaha hai aur woh har jagah dhoondhna jahan woh rehta hai, yeh jaanne ke liye ki kaun si jagahon tak aap pahunch nahi sakte | 
  - human oversight | ek insaan jo kisi output ka saboot dekh sakta hai, aur use thukra sakta hai; outputs ko guzarte dekhna isme nahi ginta | 
  - shadow AI | staff ka khud se consumer AI tools istemaal karna, aksar internal documents paste karke, kyunki tools kaam ke hain aur koi manzoor shuda cheez utni achhi nahi | 
  - DPDP Act | India ka Digital Personal Data Protection Act, 2023, jo un sansthaon ke liye kartavya tay karta hai jo personal data sambhalti hain, use dhoondhne aur chhupane se kahin zyada | Digital Personal Data Protection Act
---

"Bank mein," Lakshmi ne kaha, "humari ek kahawat thi. Agar yeh likha nahi hai, toh hua hi nahi."

Usne yeh ek lambi dopahar ki shuruaat mein kaha, apne saamne paani ke glass ke saath aur kaanch ki mez par ek folder, ek alag folder. August ka pehla Tuesday tha. Imran laptop laya tha aur Anaya answer key laayi thi, jo ab do sau chaar rows ki thi. Farah, jiska wahan hone ka koi khaas kaam nahi tha, phir bhi bhune hue moongfali ke ek thaile ke saath aa gayi thi, aur use rukne diya gaya tha.

"Maine bees saal woh insaan banne mein bitaye jo kaagaz maangta hai," Lakshmi ne aage kaha. "Log sochte the main cheezein dheemi kar rahi hoon. Asal mein main yeh pakka kar rahi thi ki jab kuch galat ho, jo hamesha hota hai, toh koi keh sake ki system kis liye tha, use kya karna tha, aur kya test hua tha. Regulator ko failure se aitraaz nahi hota. Use woh failure khalta hai jise koi samjha nahi sakta."

Usne folder par haath rakha. "Ek machine jo text padhti aur likhti hai, ab aise folder ke saath aati hai. Zyadatar log maan lete hain ki legal team ise likhti hai. Woh galat hain. Isme lagbhag har sawaal ek product sawaal hai. Yeh kis liye hai? Yeh kise prabhavit karta hai? Jab yeh galat ho toh kya hota hai? Ise kaun jaanchta hai, aur kya dikhata hai ki yeh kaam karta hai? Main vaakya likh sakti hoon. Main sawaalon ke jawaab nahi de sakti. Tum de sakti ho."

## Istemaal risk tay karta hai

Uski pehli baat woh thi jiski Anaya ko aadhi umeed aur aadhi darr thi. Ek system ko zimmedaar hone ke liye kitna karna padta hai, woh technology par nirbhar nahi karta. Woh is par nirbhar karta hai ki galat jawaab kitna nuksaan kar sakta hai.

Usne chaar rows banayin. Sabse upar, woh istemaal jinki bilkul ijaazat nahi, chahe kitne bhi safeguards jode jayein: logon ko unke saamajik vyavahaar par score karna, biometrics ke aadhar par kuch tarah ki chhantai. Uske neeche, ucch jokhim wale istemaal, jaise bharti, credit faisle, shiksha aur zaroori sevaon tak pahunch, jinhe documentation, ek asli insaani jaanch, shuddhata ka saboot, logging aur aupchaarik aakalan chahiye. Uske neeche, woh istemaal jahan yeh kehna kaafi hai ki user ek machine se baat kar raha hai: chatbots, banaye gaye images. Aur sabse neeche, nyuntam jokhim, jahan achha saadharan abhyas kaafi hai: zyadatar internal tools. Is tarah ke niyam phail rahe hain, pehle Europe mein aur doosri jagahon par kharid vibhagon ki badhti sankhya mein, aur woh *risk tier* ke roop mein kaam karte hain: galat jawaab ke nuksaan se tay kiya gaya ek star, jo tay karta hai ki system ko kitna dikhana hoga.

"Do nateeje logon ko hairaan karte hain," Lakshmi ne kaha. "Pehla yeh ki istemaal tier tay karta hai, model nahi. Wahi system ek internal jawaab-dhoondhne wale ke roop mein kam-jokhim ho sakta hai aur ucch-jokhim agar koi use yeh tay karne mein istemaal karne lage ki loan kise milega. Doosra yeh ki istemaal badalne par tier badalta hai. Woh aksar launch ke baad hota hai, bina kisi ke documents update kiye."

"Guard kahan baithta hai?" Anaya ne poochha.

"Nyuntam, ek madadgaar ke roop mein jo chat mein pehchaan ke numbers chhupata hai. Jis chatbot ke saamne woh khada hai use kehna padta hai ki woh ek machine hai. Agar koi guard ke findings ko yeh tay karne mein istemaal karne lage ki customer bharosemand hai ya nahi, toh woh kuch aur hoga." Lakshmi ne use dekha. "Ise likh lo. Yeh is folder ka sabse kaam ka vaakya hai."

## India ka kanoon, aur guard kya nahi hai

Is mod par Imran ne woh sawaal poochha jisse Anaya bachti aa rahi thi, aur woh uski shukraguzaar thi.

"Toh kya guard compliant hai?"

"Kisse?" Lakshmi ne kaha.

"Kanoon se. India ke."

"*DPDP Act* hai," usne kaha: 2023 ka Digital Personal Data Protection Act, jiske Rules 2025 mein notify hue. "Yeh un sabhi sansthaon ke liye kartavya tay karta hai jo personal data sambhalti hain. Saaf notices. Sahmati. Suraksha upay. Data kitni der rakh sakte hain uski seemayein. Ullanghan se nipatne ka tareeka. Aur bahut kuch. Personal details dhoondhna aur chhupana sanstha ko kam ikattha karne aur kam aage bhejne mein madad karta hai. Yeh ek technical hissa hai. Yeh compliance nahi hai, aur koi tool nahi hai."

Woh ruki, aur use is tarah kaha ki galatfehmi ki koi jagah nahi chhodi.

"Isliye is baare mein likhe har document mein, tum kehti ho ki yeh ek privacy tool hai jo sanstha ko kam personal data ikattha karne aur saajha karne mein madad karta hai. Tum yeh nahi kehti ki yeh kisi ko compliant banata hai. Na Sahaj ko, na kisi customer ko, na kisi ko. Agar kabhi koi salesman guard ke baare mein yeh vaakya likhe, toh mujhe pata chal jaayega."

Anaya ne use ek page ki pehli line par likha, aur underline kiya, aur baad mein use specification, system card aur us website ke saamne ke hisse mein daala jo abhi tak thi nahi.

## Ek page

Folder ke dil mein jo document hai woh ek page ka hota hai. Use *system card* kehte hain. Yeh batata hai ki system kis liye hai, woh kaun sa data istemaal karta hai, use kaise test kiya gaya, aur woh kya galat karta hai. Nyuntam tier se upar kisi bhi cheez ke liye aapko ek chahiye. Anaya ne kabhi nahi likha tha, lekin woh chhe mahine se bina jaane uski vishay-vastu ikatthi kar rahi thi.

Usne use ek ghante mein unke saamne likha, answer key ke numbers ke saath.

> **Bharat Privacy Guard — system card.**
> *Yeh kis liye hai.* English, Hindi aur Hinglish mein customer messages mein personal details ko pehchaanna, aur unhe store ya aage bhejne se pehle chhupana.
> *Yeh kya istemaal karta hai.* Customer chat messages. Yeh apna koi message text store nahi karta.
> *Ise kaise test kiya gaya.* 204 rows ki haath se marked answer key par, version 7, jisme scanned aur mishrit-bhasha ke udaharan shaamil hain.
> *Gyaat seemayein.* Roman Hindi mein *ji* ke saath likhe lagbhag das mein se ek naam chhod deta hai. Kuch order numbers galat tareeke se chhupa deta hai. Photographs nahi padhta. Tamil, Bengali, Telugu, Marathi ya Gujarati par test nahi kiya gaya.
> *Daayre ke bahar.* Ise ek customer ke baare mein kuch bhi tay karne ke liye istemaal nahi karna chahiye. Yeh Sahaj ko, ya kisi user ko, kisi bhi kanoon ke saath compliant nahi banata.

"Seemayein zor se padho," Lakshmi ne kaha.

Anaya ne padhin.

"Yahi hissa hai jo mujhe baaki par bharosa dilata hai," Lakshmi ne kaha. "Gyaat seemaon wala hissa sabse mushkil nakli banane layak hai, aur sabse vishwasniya. Koi bhi keh sakta hai ki ek system kya achha karta hai. Asli failures ki list, har ek ke peeche saboot ke saath, mujhe batati hai ki kisi ne dekha hai. Aur *daayre ke bahar* wali line sabse kaam ki hai, kyunki yeh istemaal ko kisi ke dekhe bina uchch tier mein bahne se rokti hai."

## Mr. Deshpande ko dhoondhna

"Ab," Lakshmi ne kaha, "drill."

Usne mez par ek card khiskaya. Us par ek customer ka naam tha, ek asli, Mr. Deshpande, Satara ke ek boodhe aadmi, jinhone June mein Sahaj ko likha tha ki unka data hata diya jaye, aur unhe ek shishta jawaab aur ek waada mila tha. Woh abhi tak hua nahi tha. "Maan lo yeh abhi aaya hai. Dhoondho woh kahan-kahan rehta hai."

*Deletion drill* iska naam hai: kisi ek insaan ka data jahan-jahan store hai woh sab dhoondhna, yeh jaanne ke liye ki kaun si jagahon tak aap pahunch nahi sakte. Jab koi apna data delete karne ko kehta hai, toh woh saat jagahon mein ho sakta hai. Mool documents. Unse kate hue chunks. Search index. Cache. Provider ke logs. Aapke apne logs. Aur asli traffic se bana koi bhi test set. Bahut si teams paati hain ki inme se kam se kam do unki pahunch ke bahar hain.

Unhone ek marker ke saath unmein se guzra. Support system: haan, ek row hata sakte the. Chat history: haan. Search index mein sirf policies thin. Cache: asthayi. Sahaj ke apne logs: woh customer number se delete kar sakte the, ek din ke kaam se. Bahari company ke logs: woh, uski terms ke hisaab se, tees din door the, aur Sahaj use chhota nahi kar sakta tha.

Phir Anaya ko kuch yaad aaya aur woh thandi pad gayi.

"Printouts."

Imran ne use dekha.

"Woh sau outputs. June mein. Maine unhe print kiya tha taaki Farah aur main unhe padh kar mark kar saken. Woh meri desk ki neeche wali drawer mein hain. Woh exported chats se aaye the. Unme asli naam hain."

Kisi ne kuch nahi kaha. Farah ne ek moongfali rakh di.

"Yahi hai woh," Lakshmi ne kaha. "Hamesha yahi hota hai. Kisi ne ek achhi wajah se asli data kisi cheez mein copy kiya, aur usme kuch bhi kisi insaan ki taraf wapas ishaara nahi karta. Test sets aur printouts sabse zyada bhoole jaate hain, aur provider ke caches dekhna sabse mushkil hai."

Anaya ne unhe us shaam Farah ko gawaah rakhkar shred kiya, aur log mein tareekh likhi. Phir usne us prakriya mein ek line jodi jisne yeh hone diya tha. *Jab data ikattha ho tab likho ki har tukda kahan se aaya. Aap use baad mein punarnirmit nahi kar sakte.* Ek aisa deletion request jo aap poora nahi kar sakte, ek tareekh ke saath failure hai.

## Ek insaan jo na keh sake

Lakshmi ke paas do baatein aur thin, aur usne unhe tezi se liya.

Pehli human oversight thi. Sab yeh vaakya likhte hain: *har output ko ek insaan dekhta hai*. Anaya ne use PRD ke pehle draft mein likha tha.

"Roz chaar hazaar outputs," Lakshmi ne kaha. "Ek reviewer. Yeh kitna chalega?"

"Zyada nahi."

"Mere anubhav mein lagbhag do hafte. Phir reviewer bina padhe manzoor karne lagta hai, aur document kehta hai ki ek insaan sab kuch jaanchta hai, aur yeh sach nahi hai. Yeh daava na karne se bhi bura hai." Jo oversight kaam karta hai woh lakshit hota hai. Woh outputs ek insaan ko bhejo jo anishchit hon, ya sabse zyada nuksaan karenge, ya jahan jo mila woh jo jawaab diya gaya usse mel nahi khata. Reviewer ko jawaab ke saath saboot dikhao. Aur use thukrane do, sirf dekhne nahi. Ek insaan jo dekh aur mana kar sakta hai woh *human oversight* hai. Ek insaan jo cheezein guzarte dekhta hai woh sajaavat hai.

Guard ke liye iska matlab tha anishchit cases, sau mein kuch, vaakya aur prastaavit karyavahi saath-saath, aur do buttons ke saath.

Doosri woh thi jo usne har us company mein dekhi thi jahan usne kaam kiya. Staff khud se consumer AI tools istemaal karte hain, aamtaur par internal documents paste karke, kyunki tools kaam ke hain aur company jo deti hai woh utna achha nahi. Yeh *shadow AI* hai. Ise mana karna shaayad hi kaam karta hai. Yeh policy badalta hai par vyavahaar nahi.

"Humare paas aisa kya hai?" Anaya ne poochha.

Farah ne haath uthaya, thoda sharmate hue. "Meri team customers ka Hinglish ek translation site par paste karti hai. Yeh pakka karne ke liye ki woh theek se jawaab de rahe hain. Maine unhe mana kiya, aur unhone kaha theek hai, aur woh ab bhi karte hain."

"Kyunki woh kaam karta hai," Lakshmi ne kaha. "Unke rukne ke liye kya chahiye?"

Anaya ne socha. "Ek paste box jo utna hi achha ho. Jo paste kiye hue ko kahin jaane se pehle saaf kare."

"Toh tumhara doosra product mil gaya," Lakshmi ne kaha, aur, us dopahar mein pehli baar, woh muskurayi.

## Saath le jaane layak baatein

Ek system ko kitna dikhana padta hai woh is par nirbhar hai ki galat jawaab kitna nuksaan kar sakta hai, aur istemaal yeh tay karta hai, technology nahi. Wahi tool ek cheez ke roop mein nirdosh ho sakta hai aur doosre ke roop mein gambhir, aur jab uska istemaal badalta hai toh tier badal jaata hai. India ka data protection kanoon personal details dhoondhne aur chhupane se kahin zyada maangta hai, isliye ek privacy tool ko kabhi aisa nahi bataya jaana chahiye ki woh kisi ko compliant banata hai. Ek ek-page ka system card batata hai ki system kis liye hai, use kaise test kiya gaya, woh kya galat karta hai aur use kis kaam ke liye istemaal nahi karna chahiye, aur uski asli failures ki list ise vishwasniya banati hai. Ek deletion drill un jagahon ko dhoondhta hai jahan kisi insaan ka data rehta hai jin tak aap pahunch nahi sakte, aur bhooli hui jagahein aksar ek achhi wajah se banayi gayi copies hoti hain. Human oversight tabhi kaam karta hai jab reviewer saboot dekhe aur na keh sake. Aur jahan log pehle se aise tools istemaal kar rahe hain jinhe aapne manzoor nahi kiya, wahan ilaaj ek behtar manzoor shuda vikalp hai.
