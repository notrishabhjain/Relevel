---
title: Kaun Paisa Deta Hai, Aur Kitna
summary: Ek lender ka technical lead poochta hai ki guard use kitne ka padega. Jawaab teen alag logon aur charge karne ke chaar tareekon par tikta hai. Ek aisi row par bhi, jo zyadatar price lists mein hoti hi nahi. Aap seat, usage, outcome aur hybrid pricing, contribution margin, flywheel aur gross margin se milte hain.
course: b1
goals:
  - user, buyer aur blocker ko alag pehchaan paana, aur pichhle kharch se jaanna ki product ki value kya hai
  - ek floor (aapke costs) aur ek ceiling (customer ka doosra raasta) ke beech price tay karna
  - seat, usage, outcome aur hybrid pricing ko is nazar se compare karna ki har ek kis taraf kitna risk daalti hai
  - low, base aur high usage par contribution margin nikaalna, teen kisam ke flywheel pehchaanna, aur supplier ke risk ki keemat lagana
terms:
  - seat pricing | cinema ke har ticket jaisa. Har user ke liye, har mahine, charge karte hain. Buyer ke liye plan karna aasaan hai. Lekin tab unfair hai jab heavy users ko serve karna light users se kahin zyada mehnga ho | per-seat
  - usage pricing | taxi ke meter jaisa. Jitna use hua, har unit ka charge, jaise har message ya call, taaki aapki kamayi cost ke saath chale. Buyer bill ka andaaza nahi laga paata, aur paisa bachane ke liye kam use kar sakta hai | usage-based
  - outcome pricing | sirf pakdi hui machhli ka paisa dene jaisa. Har achhe result ka charge, taaki price value ke saath chale. Dono taraf ko number mein tay karna padta hai ki achha result kya hai | outcome-based
  - hybrid pricing | data wale phone plan jaisa. Ek tay fee mein kuch use shamil hota hai, aur uske upar ka alag dena padta hai. Buyer plan kar sakta hai, aur aapka margin surakshit rehta hai | hybrid plan
  - contribution margin | customer ke diye har rupaye mein se, customer ke saath badhne wale costs ke baad, jo bachta hai. Samajhiye khane ki plate, saamaan ka paisa dene ke baad | 
  - flywheel | ek bhaari pahiye jaisa jo ek baar dhakka dene par ghoomta rehta hai. Product use karne se behtar hota hai, aur isse aur use aata hai. Workflow wala kisam aksar sabse mazboot hota hai | flywheels
  - gross margin | dukaandaar ke munafe jaisa, maal ka paisa dene ke baad. Yeh kamayi minus product deliver karne ka seedha cost hai. AI products mein is cost ka bada hissa aksar model ya hosting ka bill hota hai | 
---

Defence ke baad partner ka technical lead, Mr. Menon, seedhiyon par bola. Uska ek haath railing par tha. Usne poochha, "Guard mujhe kitne ka padega?" Defence ke baad ke teen hafton mein woh do baar demo page dekhne wapas aaya tha. Ek baar apne do colleagues ko bhi laaya tha. Usne woh sawaal aise poocha jaise koi poori dopahar use dabaye baitha ho.

Ek saal se Anaya "kya yeh kaam karta hai?" ka jawaab ek number se dena seekh rahi thi. "Isme kitna cost aata hai?" ek alag kisam ka sawaal tha. Uske paas koi aisa number nahi tha jis par use bharosa ho. Isliye usne ek hafta maanga. Usne ek asli number laane ka waada kiya. Yeh chapter batata hai ki use kya mila.

## Case: teen alag log

School bus kharidne ko sochiye. Jo bachcha usme baithta hai, jo principal paisa deta hai, aur jo officer manzoor karta hai, teeno alag log hain. Anaya ko pehle yeh pata karna tha ki Mr. Menon asal mein kaun hain.

Jis company mein dusron ke use ke liye software kharida jaata hai, wahan aam taur par teen log maayne rakhte hain. Woh shayad hi kabhi ek insaan hote hain. Table unke naam batati hai. Yeh bhi batati hai ki partner ke yahan har ek kaun tha.

Usi hafte ek doosra prospect saamne aaya tha (aisi company jo kharid sakti hai). Woh state electricity distribution company ki IT cell thi. Uske bills Sahaj pehle se collect karta tha. Cell ne poochha ki kya guard unki apni helpdesk chats saaf kar sakta hai. Table mein dono ke liye ek-ek column hai, kyunki wahi teen roles wahan kaafi alag dikhte the.

Table: User, buyer aur blocker
| Role | Kaun hai | Partner ke yahan | Electricity company ke yahan | Kya chahta hai |
| --- | --- | --- | --- | --- |
| User | Jo roz product ke saath kaam karta hai | Ek developer jo kit ko ek chat system mein jodega | Ek helpdesk contractor ki team, jisne tool khud nahi chuna | Ise Friday ko aasaani se jod dena |
| Buyer | Jiske paas budget hai aur jo kharch ke liye kisi ko jawaab deta hai | Head of engineering ya compliance | Ek department jo tender se kharidta hai aur terms poori karne wali sabse kam price chunta hai | Ek number jo woh apne manager ko dikha sake |
| Blocker | Jo na bol sakta hai aur use wajah batana zaroori nahi | Ek security lead, jise Mr. Menon ne afsos ke saath "the Wall" kaha | Ek security audit, aur ek clause ki data kahan rakha ja sakta hai | Yeh jaanna ki text kahan jaata hai aur use kaun padh sakta hai |

Blocker ka sawaal pichhle July mein nikaal liya gaya tha. Woh Anaya ke saal ki sabse lambi meeting mein aaya tha.

Phir usne Mr. Menon se poochha ki ek price unke liye kitni value rakhegi. Lekin phir woh ruk gayi. Woh yeh poochne wali thi ki kya woh ise kharidenge.

Project ke pehle mahine mein usne padha tha ki yeh sawaal galat kyun hai. Log tameez mein haan kehte hain. Us jawaab se kuch predict nahi hota. Isliye usne kuch aur poochha. Aaj is problem ke liye woh kya use karte hain? Uska cost kya hai? Kharch kisne approve kiya?

Woh ek vendor ko lagbhag 35,000 rupaye mahine deta tha. Vendor woh company hai jo use ek service bechti hai. Woh tool chat logs (chats ki saved copies) mein card numbers blank karta tha, aur kuch nahi karta tha. Ek analyst apna lagbhag chauthai time Lakshmi jaise ek weekly sweep mein lagati thi. Sweep sample chats ki niyamit jaanch hai. Uski salary ke hisaab se yeh lagbhag 30,000 rupaye mahine banta tha.

Vendor ka approval head of compliance ne sign kiya tha. Yeh woh insaan hai jo dekhta hai ki rules maane jaa rahe hain. Yeh sab facts the. Pichhla kharch saboot hai. Aage ki chaah saboot nahi hai.

## Ceiling aur floor

Bazaar mein mol-bhaav ko sochiye. Dukaandaar apne maal ki laagat se neeche nahi jaayega. Grahak agli dukaan se zyada nahi dega. Anaya ki price in dono ke beech honi thi.

Anaya ne dono figures ek card par likhe. Unke neeche usne woh likha jo use us dopahar tak samajh nahi aaya tha. Customer jo price dega, woh uske doosre raaste se aati hai, seller ke costs se nahi. Woh doosra raasta ceiling tay karta hai. Seller ke apne costs floor tay karte hain.

Sochiye iska uske liye kya matlab tha. Jo tool analyst ke chauthai time ka zyadatar hissa bacha deta hai, woh buyer ke liye 30,000 se kam ka hai. Ise apnaane mein bhi mehnat lagti hai. Lekin woh kuch hazaar se kaafi zyada ka bhi hai.

Beech ka raasta usne usi card par nikala. Ek theek price do figures ke beech thi. Ek 10,000 rupaye, jo uske costs cover karta. Doosra lagbhag 20,000. Uske upar Mr. Menon poochne lagte ki purana tareeka sasta toh nahi. Usne pehle andaaze ke taur par 24,000 chuna, yeh dekhne ke liye ki uska kya hota hai.

## Charge karne ke chaar tareeke

Sawaari ka kiraya dene ke chaar tareeke sochiye. Aap seat kharid sakte hain. Aap meter se de sakte hain. Aap tabhi de sakte hain jab pahunch jaayen. Ya mahine ka pass le sakte hain, jisme kuch sawaariyan shamil hon. Imran ne kaha ki AI product ke liye charge karne ke chaar aam tareeke hain. Har ek alag taraf alag risk daalta hai. Table dikhati hai ki har ek kaise kaam karta hai, kahan mazboot hai aur kahan kamzor.

Table: Charge karne ke chaar tareeke
| Method | Kaise kaam karta hai | Taakat | Kamzori |
| --- | --- | --- | --- |
| *Seat pricing* | Har user ke liye, har mahine, ek charge | Buyer ke liye budget karna aasaan | Yeh maan leta hai ki ek aur use seller ko lagbhag kuch nahi padta. Software ke liye yeh chaalis saal se sach raha hai, lekin text padhne aur likhne wali kisi bhi cheez ke liye galat hai. Guard ke koi matlab wale seats the hi nahi, aur flat price par ek heavy customer das light customers ka margin saaf kar sakta tha |
| *Usage pricing* | Har message ka ek charge | Revenue cost ke saath chalta hai | Buyer bill ka andaaza nahi laga paata aur use ration karne lagta hai, jo ek safety tool ke liye ulta hoga |
| *Outcome pricing* | Har successful result ka ek charge | Price value ke saath chalta hai | Buyer aur seller ko tay karna padta hai ki success kya hai, aur use bina behes ke naapna padta hai. Har verified clean message par price kisi din mumkin ho sakti thi, abhi nahi thi |
| *Hybrid pricing* | Ek platform fee jisme kuch use shamil hai, phir uske upar ek rate | Buyer ke paas budget ke liye ek number hota hai, aur seller ka margin bacha rehta hai | Price samjhana zyada mushkil hai |

## Woh row jo zyadatar price lists mein nahi hoti

Chai ki tapri ko sochiye. Chai-patti laagat ka sirf ek hissa hai. Doodh, gas, cups aur chai dene wala ladka bhi hai. Anaya ne sab ginaa. Uske paas Imran ke cost figures the. Usne ek customer ko ek mahine serve karne ka poora cost likha, sirf model ka bill nahi. Usmein model aur hosting thi (woh computers jo product chalate hain). Records aur traces ki storage thi (har step ke logs). Aur customer ko onboard karne (set up karne) aur sawaalon ka jawaab dene wale insaan ka time bhi tha. Use samajh aa raha tha ki support ka cost aksar machine se zyada hota hai. Usne hisaab teen baar kiya, low, base aur high usage par.

Table: Serve karne ka cost aur ₹24,000 flat par margin
| Usage | Mahine ke messages | Serve karne ka cost | ₹24,000 flat par margin |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | 144% ka loss |

Jis margin ko woh nikaal rahi thi, use *contribution margin* kehte hain. Customer ke saath badhne wale costs ke baad customer aapke paas jo chhodta hai, yahi hai. Ise customer ke diye paise ke share ke roop mein dikhate hain. Base row par yeh theek-thaak 56 percent tha. High row par loss tha. Ek busy chat system wala customer flat price par use, jo woh deta, uske doguna se zyada ka padta.

Imran ka rule tha ki har baar low, base aur high teeno model kijiye. Margin ki zyadatar problems sirf aakhri row mein dikhti hain.

Isliye usne price ko hybrid mein dobara banaya. 24,000 rupaye mahine mein 100,000 messages shamil honge. Uske baad har 100,000 ke 9,000 lagenge. 10 lakh messages par customer ek lakh se thoda zyada deta. Uska margin 44 percent hota. Ab bill us value ke saath chalta tha jo customer ko mil rahi thi. Customer ke badhne par uska margin phisalna band ho gaya.

## Woh buyer jo tender likhta hai

School ka ek notice sochiye: "Hamein 500 copies chahiye. Apni price bhejiye." School apni pasand ki copy nahi chunta. Woh list poori karne wali sabse sasti offer leta hai. Anaya ne dekha ki electricity company ke column ne badal diya ki woh kya bech sakti hai.

*Tender* ek published request hai jo suppliers se bid maangti hai. Wahan buyer product nahi chunta tha. Woh terms likhta tha. Phir un terms ko poora karne wali bids mein se sabse kam price leta tha. Isliye jis feature ko kisi ne list nahi kiya, uski koi ginti nahi thi.

Isse price badal gayi. Usage pricing fixed-price contract mein fit nahi hoti. Buyer ko total pehle se likhna padta hai. Woh aisa bill nahi le sakta jo festival traffic ke saath badhta jaye. Bade included volume wala hybrid plan sabse paas tha. Lekin woh tabhi chalta jab tender use allow kare.

Use nahi pata tha ki karta hai ya nahi. Usne uske baju mein "poochho" likha. Ek chhota paid pilot (chhota trial) ek samajhdaar pehla kadam tha. Use us raqam se neeche rakhna tha jahan company ke rules poora tender maangte hain. Woh raqam bhi use nahi pata thi, aur usne andaaza nahi lagaya.

Audit aur data clause us shart se mel khaate the jo Lakshmi ne March mein rakhi thi. Safai company ke andar hoti hai, kuch bhi bahar jaane se pehle. Is buyer ke liye yeh ab samjhaane wali limit nahi rahi. Yeh product ka woh akela hissa tha jis par audit behes nahi karta.

## Woh pahiya jo apne aap ghoomta hai

Kumhaar ke bhaari chaak ko sochiye. Kuch baar dhakka do, toh woh ghoomta rehta hai. Finance director ne table dekhi aur ek alag sawaal poochha. Company ke badhne par product ko behtar kya banayega?

Is sawaal ke peeche ka idea hai *flywheel*. Yeh ek loop hai jisme product use karne se product behtar hota hai, aur isse aur zyada use aata hai. Anaya ne un teen kisam ke flywheel dekhe jo AI mein aate hain. Table dikhati hai ki har ek kaise ghoomta hai aur aam taur par kitna mazboot hai.

Table: Teen kisam ke flywheel
| Kisam | Kaise ghoomta hai | Taakat |
| --- | --- | --- |
| Data | Agents jo corrections karte hain unse tool behtar hota hai, isliye use se woh sudharta hai | Aksar claim se kamzor. Kuch hazaar examples ke baad gains chapte ho jaate hain, aur contracts aksar ek customer ka data doosre ke saath milane se mana karte hain |
| Workflow | Product kisi ke weekly routine ka hissa ban jaata hai, aur doosra kaam us par depend karne lagta hai | Aam taur par sabse mazboot. Guard ke liye yeh monthly sweep tha |
| Platform | Doosre log product ke upar banate hain | Rare, aur pehle ek bheed chahiye |

Usne ek chetavni jodi jo ab tak woh darjan documents mein daal chuki thi. Jo flywheel customers ke data par tikta hai, woh tabhi chalta hai jab tak customers seller par us data ke liye bharosa karte hain.

Isliye seller ko batana chahiye ki kya store hota hai, usse kya seekha jaata hai, aur use kaun dekh sakta hai. Aur ek customer ke corrections ko doosre ki madad ke liye use karne se pehle poochna chahiye.

## Supplier aapke saath kya kar sakta hai

Ek dukaan sochiye jo saara doodh ek hi dairy se leti hai. Dairy price badha de, toh dukaan ki koi sunwaayi nahi. Anaya ko is tarah ke risk ka September mein pata chala tha. Aapka product kisi doosri company ke computers ya models par chal sakta hai. Woh company aapse poochhe bina apni prices aur quality badal sakti hai.

AI product mein delivery ke cost ka bada hissa kisi aur ka bill hota hai. Yeh cost *gross margin* ke andar baitha hai. Gross margin kamayi minus product deliver karne ka seedha cost hai.

Woh risk hata nahi sakti thi. Lekin uski keemat laga sakti thi. Uski recommendation mein likha tha ki agar hosting ki price doguni ho jaye toh kya hoga. Base margin 56 percent se girkar lagbhag 37 ho jaata. Ek tested doosre host par switch karne mein lagbhag ek hafta lagta.

Usmein likha tha ki agar koi model retire ho jaye toh woh kya karegi. Woh pinned versions use karegi, yaani tay kiye hue model versions jo badalte nahi. Saath mein gate bhi, yaani release se pehle ki jaanch. Aur yeh bhi likha tha ki agar koi rival wahi feature launch kar de toh woh kya karegi. Woh workflow aur relationship apne paas rakhegi.

Usne agle Thursday Mr. Menon ko woh page bhej diya. Pehla paragraph sabse upar tha. Usne use chaar baar likha tha.

::: example Mr. Menon ko Anaya ki recommendation
Meri recommendation hai ₹24,000 per month ka ek hybrid plan, jisme 100,000 messages shamil hon, aur har agle 100,000 ke ₹9,000. Aapka alternative aapko lagbhag ₹65,000 mahina padta hai. Yeh vendor aur analyst ke time ka milaa hua hai. Price value se kaafi neeche hai.

Hamara margin base use par 56 percent hai, aur us se 10 guna use par bhi 40 percent se upar rehta hai. Sabse bada risk hosting ki price hai. Agar woh doguni ho jaye, toh hamara base margin girkar lagbhag 37 percent ho jaayega. Hamare tested doosre host par switch karne mein lagbhag ek hafta lagta hai.
:::

## Saar

Phir bazaar ko sochiye. Customer tab paisa deta hai jab aapka product kaam ko uske doosre raaste se behtar ya sasta karta hai. Woh doosra raasta price ki ceiling tay karta hai. Aapke apne costs floor tay karte hain.

- Ek company mein user, buyer aur blocker aam taur par teen alag log hote hain. Kisi cheez ki value jaanne ke liye poochiye ki woh aaj kya use karte hain, uska cost kya hai, aur use kisne approve kiya. Pichhla kharch saboot hai. Waade saboot nahi hain.
- Seat, usage, outcome aur hybrid pricing, har ek alag taraf alag risk daalti hai. Jab har run mein paisa lagta ho, tab flat seat price khatarnaak hai.
- Ek customer ko serve karne ka poora cost low, base aur high usage par nikaaliye. Margin ki problem aam taur par aakhri row mein hoti hai.
- Likhiye ki agar supplier apni price doguni kar de toh margin ka kya hoga. Yeh bhi likhiye ki switch karne mein kitna time lagega.

Jab price tay ho jaye, toh agla sawaal yeh hai ki log product ko kaise dhoondhte hain, aur kyun tikte hain.
