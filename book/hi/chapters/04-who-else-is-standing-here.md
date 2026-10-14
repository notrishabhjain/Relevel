---
title: Yahan Aur Kaun Khada Hai
summary: Compliance head ki ek shart wali haan tool ke liye ek kadi requirement tay kar deti hai. Uske baad product manager dekhti hai ki pehle se kya maujood hai, market ka size neeche se upar naapti hai, aur competition ko parakhti hai, us competitor ko bhi jo product nahi hai.
course: a4
goals:
  - shart wali approval ko design ki ek requirement ki tarah padhna
  - aise customers se market ka size naapna jinhe gina ja sake, aur har assumption ko jaana hua ya andaaza, aise mark karna
  - direct, indirect aur status quo competition pehchaanna, aur teardown mein alternatives ko compare karna
  - ek sentence mein product ki position batana, aur opportunity tree se ideas ko saboot ke hisaab se rank karna
terms:
  - bottom-up estimate | aisa size ka andaaza jo aise customers se banta hai jinhe aap gin sakte hain, aur har ek kitna dega usse guna kiya jaata hai, kisi industry report ka ek tukda lekar nahi | bottom-up
  - TAM | total addressable market: woh sab log jinhe yeh problem hai, us keemat par jo aap lagayenge | total addressable market
  - SAM | serviceable addressable market: TAM ka woh hissa jise aap apne paas jo hai usse sach mein sambhal sakte hain | serviceable addressable market
  - SOM | serviceable obtainable market: SAM ka woh hissa jo aap lagbhag teen saal mein sach mein jeet sakte hain | serviceable obtainable market
  - status quo | log aaj jo karte hain, kuch na karna bhi usmein shaamil; aksar sabse mazboot competitor | 
  - competitor teardown | har alternative ko saath-saath rakh kar dekhna: woh kiske liye hai, kitne ka hai, kahan mazboot hai, aur kahan customers shikayat karte hain | teardown
  - positioning statement | ek sentence jo batata hai ki product kiske liye hai aur doosre alternatives se alag kyun hai | positioning
  - opportunity tree | ek drawing jo us result se shuru hoti hai jo aap chahte hain, interviews mein logon ne jo zaroorat batayi usmein branches banati hai, aur possible solutions par khatam hoti hai | opportunity solution tree
---

Users se baatcheet ke baad wale Thursday ko Anaya apna saboot lekar Sahaj ki compliance head Lakshmi Iyer ke paas gayi. Lakshmi ne bees saal ek bank mein kaam kiya tha. Usne printout, 37 flags aur numbered notes aise padhe jaise woh insaan padhta hai jise documents pehle dhokha de chuke hon. Woh dekh rahi thi ki kya chhoot gaya hai.

Usne dhyaan dilaya ki 9 percent ka figure ek hafte aur ek chatbot se aaya hai. Anaya ne kaha ki notes mein yeh pehle se likha hai. "Sirf isi wajah se main abhi tak padh rahi hoon," Lakshmi ne kaha.

Anaya ne bataya ki woh kya banana chahti hai. Tool kisi message mein pehchaan ke numbers aur doosri personal details pehchanega, aur message ke aage jaane se pehle unhe chhupa dega. Saaf kiye hue messages phir bhi us bahar ki company ko jaayenge, jiska software chatbot ke replies likhta hai.

Lakshmi ka jawaab ek shart wali haan tha. Woh aise tool ko nahi rokengi jisse Sahaj kam data apne paas rakhe. Lekin jo tool zyada data bahar bheje, use woh rokengi. Agar cleaning company ke andar ho, kuch bhi bahar jaane se pehle, toh woh maan sakti hain. Agar woh kisi aur ke computer par ho, toh nahi.

Usne ek sawaal aur poochha. Anaya ko kaise pata chalega ki tool kaam karta hai? Anaya ko abhi nahi pata tha. Lakshmi ne kaha ki jab pata ho, tab wapas aana.

Is chapter mein hum agla kaam dekhenge. Anaya check karti hai ki tool pehle se maujood hai ya nahi. Phir woh naapti hai ki opportunity kitni badi hai, aur alternatives ko parakhti hai. Aakhir mein woh interviews ke notes ko rank kiye hue options ke ek set mein badalti hai.

## Case: shart wali haan

Is shart wali haan ne do kaam kiye. Pehla, usne pichhle chapter ka riskiest assumption pakka kar diya. Saaf kiya hua text bahar ki company ko bhejne ki permission mil gayi, bas ek shart poori honi chahiye.

Doosra, usne kisi design ke bante se pehle hi ek design requirement tay kar di. Tool ko Sahaj ki apni deewar ke andar chalna tha. Isse kai aasaan designs hat gaye, woh sab services bhi jo cleaning ke liye pehle kaccha message receive karti.

Aisi rukaavat shuru mein bahut kaam ki hoti hai. Woh bina cost ke options hata deti hai, jab tak woh sirf ideas hain aur unpar kaam shuru nahi hua.

## Kya yeh kaam kisi ne pehle kiya hai?

Agla sawaal woh tha jo Anaya ko hafton pehle poochhna chahiye tha: agar yeh tool pehle se maujood ho toh? Usne ek shaam dhoondhne mein bitai.

Use Rampart naam ka ek open tool mila. Woh free tha, kaabil logon ne banaya aur test kiya tha, aur uska maksad bilkul wahi tha jo Anaya ke dimaag mein tha: text mein personal details dhoondhna. Uske banane walon ne imaandaari se ek list chhapi thi ki tool kin languages par test hua aur kitna achha chala. List mein English thi aur Europe ki chhe languages, sab Latin alphabet mein likhi hui.

Anaya ne Hindi wala hissa do baar padha. Tool ke apne chhape results ke hisaab se, Devanagari script mein likhi Hindi ki personal details mein se woh 100 mein lagbhag 14 hi dhoondh paata tha.

Usne figure ke aage sawaaliya nishaan lagaya. Claims ke baare mein uska rule un claims par bhi lagta tha jo use pasand aate the. Woh ise baad mein khud check karegi. Bina check kiye bhi yeh figure dikhata tha ki tool ki pahunch kahan khatam hoti hai.

Aur Sahaj ke chatbot ko likhne wale log us limit ke andar nahi rehte the. Woh English mein likhte the, Hindi mein likhte the, aur us roop mein bhi jo Sanjay Patil ne bina chaahe dikha diya tha: English letters mein likhi Hindi, English words ke saath mili hui, aksar ek hi sentence mein. Jo tool ek hi writing system ke liye bana hai, use yahan teen tarah ka text milta.

## Opportunity kitni badi hai

Ab Anaya ne poochha ki yeh tool kaun chahega, aur jawaab numbers mein diya. Market ka size andaaza karne ke do tareeke hote hain.

Pehla tareeka kisi industry report se shuru hota hai. Woh kuch aisa sunai deta hai: "customer-support software 10 billion dollar ka market hai, toh agar hum 1 percent jeetein...". Yeh jaldi ho jaata hai, aur lagbhag bekaar hai. Kyunki koi nahi bata sakta ki woh 1 percent jeeta kaise jaayega.

Doosra tareeka un customers se shuru hota hai jinhe aap gin sakte hain, aur phir unhe upar ki taraf guna karta hai. Ise *bottom-up estimate* kehte hain. Iski badi khoobi yeh hai ki har assumption page par saamne rehta hai, jahan koi bhi us par sawaal utha sakta hai.

Anaya ne sabse bada woh group liya jiska woh bachaav kar sakti thi: India mein registered lenders aur finance apps. Ek public list mein lagbhag 9,000 naam the. Yeh ek fact tha. Phir usne andaaza lagaya ki ek chhoti firm aise tool ke liye saal mein lagbhag ₹1.2 lakh de sakti hai. Yeh assumption tha, aur usne ise assumption ki tarah hi mark kiya.

Yahan se teen nested sizes baar-baar kaam aate hain, isliye unke naam jaan lijiye.

::: def Teen nested sizes
*Total addressable market* (TAM) woh sab log hain jinhe yeh problem hai, us keemat par jo aap lenge. *Serviceable addressable market* (SAM) TAM ka woh hissa hai jise aap apne paas ke tareekaon se sambhal sakte hain. *Serviceable obtainable market* (SOM) SAM ka woh hissa hai jise aap lagbhag teen saal mein sach mein jeet sakte hain.
:::

Table mein Anaya ke numbers hain. Har row apne upar wali row se chhoti hai.

Table: Privacy tool ke liye Anaya ka bottom-up estimate
| Measure | Matlab | Hisaab |
| --- | --- | --- |
| TAM | Woh sab jinhe problem hai | 9,000 firms × ₹1.2 lakh = lagbhag ₹108 crore saal |
| SAM | Woh hissa jise woh sambhal sakti hai | 2,700 firms jo chat chalati hain aur mahine mein 5,000 ya zyada chats sambhalti hain = lagbhag ₹32 crore |
| SOM | Lagbhag teen saal mein woh jo jeet sakti hai | 2,700 ka 2 percent = 54 customers = lagbhag ₹65 lakh saal |

Aakhri figure ne Anaya ko sochne par majboor kiya. ₹65 lakh saal ek chhoti team ki aay hoti hai, company ki nahi. Lekin yeh woh figure tha jis par woh yakeen kar sakti thi. Pehle figure ke baare mein woh yeh nahi keh sakti thi.

Table ka maksad aakhri number nahi tha. Har line ek sawaal uthati thi. 9,000 firms ka pata kaise, ya 5,000 chats ka? Aur har sawaal ke paas jaane ki ek jagah thi. Har assumption jaana hua ya andaaza, aise mark tha, aur jo andaaza the unhe sabse pehle check kiya jaata.

## Teen tarah ki competition

Competition sochte hi log aksar rival products ki ek list dekhte hain. Anaya ne apni competition ko teen tarah mein baanta.

Table: Privacy tool ke liye teen tarah ki competition
| Kism | Kya hai | Sahaj mein |
| --- | --- | --- |
| Direct | Wahi kaam wahi tareeke se karta hai | Rampart jaise tools, aur kuch cloud services ke saath aane wale privacy features |
| Indirect | Wahi kaam doosre tareeke se karta hai | Koi insaan jo har export bahar jaane se pehle padhta hai; ek chat vendor ka software jo sirf card numbers chhupata hai |
| Status quo | Log aaj kya karte hain, kuch na karna bhi | Farah ki team jab yaad aaye tab haath se number mitati hai, aur handbook ki ek line jo customers se sensitive details share na karne ko kehti hai |

*Status quo* aksar sabse mazboot competitor hota hai. Woh free hai, jaana-pehchaana hai, aur kuch had tak kaam bhi karta hai. Naye product ko aisi dopahar ko harana padta hai jismein kuch galat nahi hua.

Organisations aksar aise dinon ko saboot maan lete hain ki sab theek hai. Isliye jab koi kehta hai ki uske product ka koi competitor nahi, toh aam taur par matlab yeh hota hai ki usne dekha hi nahi ki log aaj kya karte hain.

Har asli alternative ke liye Anaya ne ek *competitor teardown* banaya. Usne likha ki woh kiske liye hai, usmein kitna cost aata hai, woh kya achha karta hai, aur uske customers kis baat ki shikayat karte hain. Shikayaton ka sabse achha source public sites par users ke chhode hue reviews the. Kaam ki cheez woh shikayat thi jo baar-baar aati thi.

In tools ke baare mein teen shikayatein baar-baar aayi.

- Woh sirf English mein achhe chalte the.
- Woh ordinary product codes aur order numbers ko aise flag karte the jaise woh raaz hon.
- Weekend mein unhe set up karna mushkil tha.

## Position batana

Teardown se Anaya ko ek sentence ka maal mil gaya, jo product ko alternatives ke beech rakhta hai. Ise *positioning statement* kehte hain. Woh batata hai ki product kiske liye hai aur kaise alag hai. Ise likhne mein discipline lagti hai, kyunki dhundhla sentence likhna aasaan hai aur saaf sentence likhna mushkil.

::: example Guard ka pehla positioning statement
Un companies ke liye jo India mein customer chat chalati hain aur chahti hain ki pehchaan ke numbers zaroorat se zyada door na jaayein, guard ek chhoti privacy layer hai jo English, Hindi aur dono ke mix ko samajhti hai. Ek hi writing system ke text ke liye bane tools ke ulat, yeh isliye bani hai ki log sach mein kaise type karte hain.
:::

Iske liye ek seedha test hai. Agar sentence kisi competitor par bhi utna hi achha lagta hai, toh woh abhi position nahi hai. Anaya ne apna sentence zor se padha. Use raahat mili ki woh un tools mein se kisi par bhi fit nahi hota tha jo usne dekhe the.

## Baatcheeton se rank kiye hue ideas tak

"Mujhe problem mil gayi" se seedha "mujhe pata hai kya banana hai" par kood jaana bahut lubhaata hai. Zyadatar bekaar software isi kood se likha jaata hai. Isliye Anaya ne beech mein ek drawing rakhi.

Page ke sabse upar usne woh result likha jo woh chahti thi: chat se kam personal details bahar jaayein. Uske neeche, branches ki tarah, usne woh needs aur takleefein rakhin jo usne sach mein suni thi. Har ek ke saath us baatcheet ka number tha.

- Chatbot ka greeting details maangta hai (baatcheet 2 aur 3).
- Agents ke paas koi rule nahi (1 aur 5).
- Photos bina doosri nazar ke le li jaati hain (1).
- Numbers ajeeb tareeke se type hote hain (4).
- Helpers un logon ki taraf se type karte hain jinhe pata nahi ki number kahan jaata hai (5).

Har branch ke neeche usne kuch ideas likhe jo madad kar sakte the.

Is tarah ki drawing ko *opportunity tree* kehte hain. Yeh us result se shuru hoti hai jo aap chahte hain, logon ki batayi zaroorton mein branch karti hai, aur possible solutions par khatam hoti hai. Phir Anaya ne branches ko chaar sawaalon par rank kiya. Zaroorat kitne logon ko chhuti hai? Kitna dukhati hai? Saboot kitna mazboot hai? Aur kya woh sabse upar ke result ko hilati hai? Usne dhyaan rakha ki rank saboot ke hisaab se ho, josh ke hisaab se nahi.

Jo tool woh sabse zyada banana chahti thi, woh nahi jeeta. Greeting jeeta. Uske paas do baatcheeton ka saboot tha, ek free fix tha, aur result par seedha asar tha. Anaya ne hashiye mein likha "is hafte greeting dobara likho", aur usi dopahar Farah ko message kar diya.

Tool doosre number par aaya. Woh ek alag branch ka jawaab tha: agents ke paas koi madad nahi hai, aur greeting jo chhod de use koi pakadta nahi. Tree mein woh "agents ke paas koi rule nahi" ke neeche baitha tha, aur ek line "ek chhota tool jo personal details dhoondhe aur chhupaye" tak jaati thi.

::: key Tree kis kaam ka hai
Tree dikhata hai ki kab aapka pasandeeda solution sirf doosri sabse achhi branch hai. Woh yeh bhi record karta hai ki kyun. Har idea ko upar ki taraf ek need tak, aur neeche ki taraf saboot tak, trace kiya ja sakta hai.
:::

## Saaraansh

Shart wali approval ek design requirement hai. Sahaj mein usne tay kiya ki tool company ke andar chalega, jisse shuru mein hi kai designs hat gaye.

- Banane se pehle dekhiye ki pehle se kya maujood hai. Competitor ke chhape claims khud test kijiye, aur dekhiye ki unki pahunch kahan khatam hoti hai.
- Bottom-up estimate un customers ko gunta hai jinhe gina ja sake, aur har assumption ko jaana hua ya andaaza, aise mark karta hai. TAM, SAM aur SOM use un sab se, jinhe problem hai, ghata kar us tak laate hain jise jeeta ja sake.
- Competition direct, indirect ya status quo hoti hai, aur status quo aksar sabse mazboot hota hai. Teardown alternatives ko compare karta hai aur baar-baar aane wali shikayatein likhta hai.
- Positioning statement batata hai ki product kiske liye hai aur kaise alag hai, aur woh kisi competitor par utna hi achha nahi lagna chahiye.
- Opportunity tree result se need tak aur idea tak jaata hai. Woh branches ko saboot ke hisaab se rank karta hai, aur dikhata hai ki kab aapka pasandeeda idea sabse achha nahi hai.

Agle chapter mein Anaya ko chunna hai ki kya chhodna hai, kyunki tree ka sab kuch woh nahi kar sakti.
