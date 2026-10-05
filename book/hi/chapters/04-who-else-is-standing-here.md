---
title: Yahan Aur Kaun Khada Hai
summary: Compliance head ki ek shart wali haan tool ke liye ek kadi zaroorat tay karti hai. Uske baad product manager dekhti hai ki pehle se kya maujood hai, bazaar ka aakaar neeche se upar naapti hai, aur competitors ko parakhti hai, us competitor ko bhi jo product nahi hai.
course: a4
goals:
  - shart wali manzoori ko design ki ek zaroorat ki tarah padhna
  - aise customers se bazaar ka aakaar naapna jinhe gina ja sake, aur har maanyata ko jaani hui ya andaaza ke roop mein chinhit karna
  - direct, indirect aur status quo competition pehchaanna, aur teardown mein vikalpon ki tulna karna
  - ek vaakya mein product ki jagah batana, aur opportunity tree se idea ko saboot ke hisaab se rank karna
terms:
  - bottom-up estimate | aisa size ka andaaza jo aise customers se banta hai jinhe aap gin sakte hain, aur har ek kitna dega usse guna kiya jaata hai, na ki kisi industry report ka ek tukda | bottom-up
  - TAM | total addressable market: woh sab log jinhe yeh problem hai, us keemat par jo aap lagayenge | total addressable market
  - SAM | serviceable addressable market: TAM ka woh hissa jise aap apne paas jo hai usse sach-much sambhal sakte hain | serviceable addressable market
  - SOM | serviceable obtainable market: SAM ka woh hissa jo aap lagbhag teen saal mein sach mein jeet sakte hain | serviceable obtainable market
  - status quo | log aaj jo karte hain, kuch na karna bhi usme shaamil; aksar sabse mazboot competitor | 
  - competitor teardown | har vikalp ko saath-saath rakh kar dekhna: woh kiske liye hai, kitne ka hai, kahan mazboot hai, aur kahan customers shikayat karte hain | teardown
  - positioning statement | ek vaakya jo batata hai ki product kiske liye hai aur doosre vikalpon se alag kyun hai | positioning
  - opportunity tree | ek drawing jo us nateeje se shuru hoti hai jo aap chahte hain, interviews mein logon ne jo zaroorat batayi usme shaakhein banati hai, aur sambhaavit hal par khatam hoti hai | opportunity solution tree
---

Baatcheeton ke baad wale Thursday ko Anaya apna saboot lekar Sahaj ki compliance head Lakshmi Iyer ke paas gayi. Lakshmi ne bees saal ek bank mein kaam kiya tha. Usne printout, saintees flags aur numbered baatcheet ke notes aise padhe jaise woh vyakti padhta hai jise documents ne dhokha diya ho: yeh dekhte hue ki kya chhoot gaya hai. Usne dhyaan dilaya ki nau percent ka figure ek hafte aur ek chatbot se aaya tha. Anaya ne kaha ki notes mein yeh likha hai. "Sirf isi wajah se main abhi padh rahi hoon," Lakshmi ne kaha.

Anaya ne bataya ki woh kya banana chahti hai. Tool kisi message mein pehchaan ke numbers aur doosri personal details pehchanega aur message ko aage jaane se pehle chhupa dega. Saaf kiye hue messages phir bhi us bahari company ko jaayenge jiska software chatbot ke jawaab likhta hai. Lakshmi ka jawaab shart wala tha. Woh aise tool ko nahi rokengi jisse Sahaj kam data apne paas rakhe, par woh us tool ko rokengi jo zyada data bahar bheje. Agar saaf karna company ke andar hota hai, kuch bahar jaane se pehle, toh woh maan sakti hain. Agar woh kisi aur ke computer par hota hai, toh nahi. Usne ek sawaal aur joda: Anaya kaise jaanegi ki tool kaam karta hai? Anaya ko abhi nahi pata tha, aur Lakshmi ne use tab aane ko kaha jab pata ho.

Yeh chapter aage ke kaam ko batata hai: yeh dekhna ki tool pehle se maujood hai ya nahi, avsar kitna bada hai yeh naapna, vikalpon ko parakhna, aur interview ke notes ko ek rank kiye hue vikalpon ke set mein badalna.

## 4.1 Case: shart wali haan

Shart wali haan ne do kaam kiye. Usne pichhle chapter ki riskiest assumption ko pakka kiya, yaani saaf kiya hua text bahari company ko bhejne ki ijaazat, bashart ek shart poori ho. Usne kisi design se pehle hi ek design ki zaroorat bhi tay kar di: tool ko Sahaj ki apni deewar ke andar chalna tha. Is zaroorat ne kai aasaan designs rok diye, un sab services ko bhi jo kaccha message paakar use saaf karti.

Is tarah ki rukaavat shuru mein kaam ki hoti hai. Woh bina kharche ke vikalp hata deti hai, jab tak woh sirf ideas hain aur unpar kaam nahi hua.

## 4.2 Kya yeh kaam kisi ne pehle kiya hai?

Pehla sawaal woh tha jo Anaya ko hafton pehle poochhna chahiye tha: agar tool pehle se maujood ho toh? Usne ek shaam khoj mein bitai.

Use Rampart naam ka ek khula tool mila, jo istemaal ke liye muft tha, kaabil logon ne banaya aur jaancha tha, aur jiska maksad bilkul wahi tha jo uske dimaag mein tha: text mein personal details dhoondhna. Uske banane walon ne imaandaari se ek soochi chhapi thi ki tool kin bhashaon par test hua aur kitna achha chala. Soochi mein English aur chhe Europe ki bhashayein thi, sab Latin akshar mein likhi hui.

Usne Hindi wala hissa do baar padha. Uske apne chhape nateejon ke mutabik tool Devanagari mein likhi Hindi ki personal details mein se lagbhag chaudah hi sau mein se dhoondh paya. Usne figure ke aage sawaaliya nishaan lagaya, kyunki uska claims ke baare mein niyam un claims par bhi laagu hota tha jo use pasand aate the. Woh ise baad mein khud verify karegi. Bina verify hua bhi yeh figure dikhata tha ki tool ki pahunch kahan khatam hoti hai.

Jo log Sahaj ke chatbot ko likhte the, woh us seema ke andar nahi rehte the. Woh English mein likhte the, Hindi mein likhte the, aur us roop mein jo Sanjay Patil ne bina chaahe dikhaya tha: English akshar mein likhi Hindi, English shabdon ke saath mili hui, aksar ek hi vaakya mein. Jo tool ek hi lipi ke liye bana tha, use teen lipiyon ka text milta.

## 4.3 Avsar kitna bada hai

Anaya ne phir poochha ki yeh tool kaun chahega, aur jawaab aankdon mein diya. Bazaar ka aakaar naapne ke do tareeke hain.

Pehla tareeka kisi industry report se shuru hota hai. Woh kuch aise padhta hai: "customer-support software das arab dollar ka bazaar hai, toh agar hum ek percent jeetein...". Yeh jaldi hota hai aur lagbhag bekaar hai, kyunki koi nahi bata sakta ki woh ek percent kaise jeeta jaayega. Doosra tareeka un customers se shuru hota hai jinhe gina ja sake aur unhe upar ki taraf guna karta hai. Yeh *bottom-up estimate* hai, aur iski khoobi yeh hai ki har maanyata page par rehti hai jahan us par hamla kiya ja sake.

Usne sabse bada woh samooh liya jiska woh bachaav kar sakti thi: Bharat mein registered lenders aur finance apps. Ek public soochi mein lagbhag nau hazaar naam the, jo ek tathya tha. Usne andaaza lagaya ki ek chhoti firm aise tool ke liye saal ke lagbhag ₹1.2 lakh de sakti hai, jo ek maanyata thi aur use waisa hi chinhit kiya gaya.

::: def Teen ghule-mile aakaar
*Total addressable market* (TAM) woh sab hain jinhe yeh samasya hai, us keemat par jo aap lenge. *Serviceable addressable market* (SAM) TAM ka woh hissa hai jise aap apne paas ke saadhanon se sambhal sakte hain. *Serviceable obtainable market* (SOM) SAM ka woh hissa hai jise aap lagbhag teen saal mein sach mein jeet sakte hain.
:::

Table: Privacy tool ke liye Anaya ka bottom-up estimate
| Naap | Matlab | Hisaab |
| --- | --- | --- |
| TAM | Un sab ke liye jinhe samasya hai | 9,000 firms × ₹1.2 lakh = lagbhag ₹108 crore saal |
| SAM | Woh hissa jise woh sambhal sakti hai | 2,700 firms jo chat chalati hain aur mahine mein 5,000 ya zyada chats sambhalti hain = lagbhag ₹32 crore |
| SOM | Teen saal mein woh jo jeet sakti hai | 2,700 ka 2 percent = 54 customers = lagbhag ₹65 lakh saal |

Aakhri figure ne use sochne par majboor kiya. ₹65 lakh saal ek chhoti team ki aay hai, company ki nahi. Yeh woh figure bhi tha jis par woh yakeen kar sakti thi, jo pehle ke baare mein nahi kaha ja sakta tha. Table ka maksad aakhri number nahi tha. Har line ek sawaal bulaati thi, jaise nau hazaar firms kaise pata, ya paanch hazaar chats kaise, aur har sawaal ka jawaab dhoondhne ki jagah thi. Har maanyata jaani hui ya andaaza ke roop mein chinhit thi, aur jo andaaza thi unhe pehle check kiya jaata.

## 4.4 Teen tarah ki competition

Competitors ki list aam taur par rival products ki hoti hai. Anaya ne teen tarah ki competition alag ki.

Table: Privacy tool ki teen tarah ki competition
| Prakaar | Kya hai | Sahaj mein |
| --- | --- | --- |
| Direct | Wahi kaam wahi tareeke se karta hai | Rampart jaise tools, aur kuch cloud services ke saath aane wale privacy features |
| Indirect | Wahi kaam doosre tareeke se karta hai | Koi insaan jo har export jaane se pehle padhta hai; ek chat vendor ka software jo sirf card numbers chhupata hai |
| Status quo | Log aaj kya karte hain, kuch na karna bhi | Farah ki team jab yaad aaye toh haath se number mitati hai, aur handbook ki ek line jo customers se sensitive details share na karne ko kehti hai |

*Status quo* aam taur par sabse mazboot competitor hota hai. Woh muft hai, jaana-pehchaana hai aur kuch had tak kaam karta hai. Naye product ko aisi dopahar ko harana padta hai jisme kuch galat nahi hua, aur organisations aise dinon ko isliye saboot maanti hain ki kuch galat nahi hai. Jab koi kehta hai ki uske product ka koi competitor nahi, toh aam taur par matlab yeh hota hai ki usne dekha nahi ki log aaj kya karte hain.

Har asli vikalp ke liye Anaya ne *competitor teardown* banaya: woh kiske liye tha, uska kitna kharcha tha, woh kya achha karta tha, aur uske customers kis baat ki shikayat karte the. Shikayaton ka sabse upyogi srot public sites par users ke chhode reviews the, aur jo shikayat baar-baar aati thi wahi maayne rakhti thi. In tools ki teen shikayatein baar-baar thi. Woh sirf English mein achhe chalte the. Woh product codes aur order numbers ko aise flag karte the jaise woh raaz hon. Weekend par unhe set up karna mushkil tha.

## 4.5 Product ki jagah batana

Teardown se ek vaakya ka saamaan mila jo product ko vikalpon ke beech rakhta hai. *Positioning statement* batata hai ki product kiske liye hai aur kaise alag hai. Ise likhna ek anushaasan hai, kyunki dhundhla vaakya likhna aasaan hai aur saaf likhna nahi.

::: example Guard ka pehla positioning statement
Un companies ke liye jo Bharat mein customer chat chalati hain aur chahti hain ki pehchaan ke numbers jitna chahiye usse zyada door na jaayein, guard ek chhoti privacy layer hai jo English, Hindi aur dono ke mel ko samajhti hai. Ek hi lipi ke text ke liye bane tools ke ulat, yeh is liye bani hai ki log sach mein kaise type karte hain.
:::

Ek test uske baad aata hai. Agar vaakya kisi competitor par bhi utna hi achha lagta hai, toh woh abhi position nahi hai. Anaya ne apna vaakya zor se padha aur raahat mili ki woh us har tool par nahi lagta tha jo usne dekha tha.

## 4.6 Baatcheeton se rank kiye hue ideas tak

"Mujhe samasya mili" se seedha "mujhe pata hai kya banana hai" par kood jaana bahut lubhaata hai. Is kood se hi zyadatar bekaar software likha jaata hai. Anaya ne beech mein ek drawing rakhi. Page ke sabse upar usne woh nateeja likha jo woh chahti thi: chat se kam personal details bahar jaayein. Uske neeche shaakhaon ke roop mein usne woh zaroorat aur dard rakhe jo usne sach mein suna tha, har ek ke baatcheet numbers ke saath. Chatbot ka greeting details maangta hai (baatcheet 2 aur 3). Agents ke paas koi niyam nahi (1 aur 5). Photos bina ek aur nazar ke le li jaati hain (1). Numbers ajeeb tareeke se type hote hain (4). Madadgaar un logon ki taraf se type karte hain jinhe pata nahi ki woh kahan jaata hai (5). Har shaakha ke neeche usne kuch ideas likhe jo madad kar sakte the.

Yeh drawing *opportunity tree* hai. Phir usne shaakhaon ko chaar sawaalon par rank kiya: zaroorat kitne logon ko chhuti hai, kitna dukhati hai, saboot kitna majboot hai, aur kya woh sabse upar ke nateeje ko hilati hai. Usne dhyaan rakha ki rank saboot ke hisaab se ho, josh ke hisaab se nahi.

Jo tool woh sabse zyada banana chahti thi woh nahi jeeta. Greeting jeeta, do baatcheeton ke saboot, ek muft fix aur nateeje par seedhe asar ke saath. Usne hashiye mein "is hafte greeting dobara likho" likha aur usi dopahar Farah ko message kiya. Tool doosre number par aaya. Woh us shaakha ka jawaab tha jo kehti thi ki agents ke paas koi madad nahi aur greeting jo chhod de use koi nahi pakadta, aur ped mein woh "agents ke paas koi niyam nahi" ke neeche tha, "ek chhota tool jo personal details dhoondhe aur chhupaye" tak ek line ke saath.

::: key Ped kis kaam ka hai
Ped yeh dikhata hai ki kab aapka pasandeeda samadhaan sirf doosri sabse achhi shaakha hai. Woh yeh bhi record karta hai ki kyun: har idea ko upar zaroorat tak aur neeche saboot tak le jaaya ja sakta hai.
:::

## Saaraansh

Shart wali manzoori ek design ki zaroorat hai. Sahaj mein usne tay kiya ki tool company ke andar chalega, jisse shuru mein hi kai design hat gaye.

- Banane se pehle dekhiye ki pehle se kya maujood hai. Competitor ke chhape claims khud test kijiye, aur dekhiye ki unki pahunch kahan khatam hoti hai.
- Bottom-up estimate un customers ko gunta hai jinhe gina ja sake, aur har maanyata ko jaani hui ya andaaza chinhit karta hai. TAM, SAM aur SOM use un sab se jinhe samasya hai, us tak le aate hain jise jeeta ja sake.
- Competition direct, indirect ya status quo hoti hai, aur status quo aam taur par sabse mazboot hota hai. Teardown vikalpon ki tulna karta hai aur baar-baar aane wali shikayatein likhta hai.
- Positioning statement batata hai ki product kiske liye hai aur kaise alag hai, aur woh kisi competitor par utna hi achha nahi lagna chahiye.
- Opportunity tree nateeje se zaroorat tak aur idea tak jaata hai, shaakhaon ko saboot ke hisaab se rank karta hai, aur dikhata hai ki kab pasandeeda idea sabse achha nahi hai.
