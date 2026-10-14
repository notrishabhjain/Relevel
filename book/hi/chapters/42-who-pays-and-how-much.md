---
title: Kaun Paisa Deta Hai, Aur Kitna
summary: Ek lender ka technical lead poochta hai ki guard use kitne ka padega. Jawaab teen alag logon, charge karne ke chaar tareekon, aur ek table ki ek aisi row par tikta hai jo zyadatar price lists mein hoti hi nahi. Chapter mein seat, usage, outcome aur hybrid pricing, contribution margin, flywheel aur gross margin aate hain.
course: b1
goals:
  - user, buyer aur blocker ko alag pehchaan paana, aur pichhle kharch se jaanna ki product ki value kya hai
  - apne costs se bane floor aur customer ke alternative se bane ceiling ke beech price tay karna
  - seat, usage, outcome aur hybrid pricing ko is nazar se compare karna ki har ek kis taraf kitna risk daalti hai
  - low, base aur high usage par contribution margin nikaalna, teen kisam ke flywheel pehchaanna, aur supplier ke risk ki keemat lagana
terms:
  - seat pricing | product ke har user ke liye, har mahine, charge karna; buyer ke liye budget karna aasaan, lekin tab unfair jab heavy users ko serve karna light users se kahin zyada mehnga ho | per-seat
  - usage pricing | jitna use hua, har unit ke liye charge karna, jaise har message ya call, taaki revenue cost ke saath chale; buyer bill ka andaaza nahi laga paata aur use ration kar sakta hai | usage-based
  - outcome pricing | har successful result ke liye charge karna, taaki price value ke saath chale; iske liye success ki ek tay, naapne layak definition chahiye | outcome-based
  - hybrid pricing | ek platform fee jisme kuch usage shamil ho, aur uske upar jo jaaye uska alag charge; buyer ke liye predictable aur aapke margin ki hifaazat karne wala | hybrid plan
  - contribution margin | jo costs customer ke saath badhte hain, unke baad customer aapke paas kitna chhodta hai, jo woh deta hai uske share ke roop mein | 
  - flywheel | ek loop jisme product use karne se product behtar hota hai, jo aur zyada use laata hai; workflow wala kisam aksar sabse mazboot hota hai | flywheels
  - gross margin | revenue minus product deliver karne ka direct cost; AI products mein is cost ka bada hissa aksar model ya hosting ka bill hota hai | 
---

Defence ke baad lending partner ka technical lead, Mr. Menon, seedhiyon par ek sawaal le kar aaya, ek haath railing par rakhe. Guard use kitne ka padega? Defence ke baad ke teen hafton mein woh do baar demo page dekhne wapas aaya tha, aur ek baar apne do colleagues ko laaya tha. Usne woh sawaal aise poocha jaise log tab poochte hain jab unhone use poori dopahar se dabaa kar rakha ho.

Anaya ne ek saal "kya yeh kaam karta hai?" ka jawaab ek number se dena seekha tha. "Isme kitna cost aata hai?" ek alag kisam ka sawaal tha, aur uske paas koi aisa number nahi tha jis par use bharosa ho. Isliye usne ek hafta maanga aur ek asli number laane ka waada kiya. Yeh chapter batata hai ki use kya mila.

## Case: teen alag log

Pehla kaam yeh pata karna tha ki Mr. Menon asal mein kaun hain. Jis company mein dusron ke use ke liye software kharida jaata hai, wahan aam taur par teen alag log maayne rakhte hain, aur woh shayad hi kabhi ek hi insaan hote hain. Table unke naam batati hai, aur yeh ki partner ke yahan har ek kaun tha.

Table: User, buyer aur blocker
| Role | Kaun hai | Partner ke yahan | Kya chahta hai |
| --- | --- | --- | --- |
| User | Jo roz product ke saath kaam karta hai | Ek developer jo kit ko ek chat system mein jodega | Ise Friday ko aasaani se jod dena |
| Buyer | Jiske paas budget hai aur jo kharch ke liye kisi ko jawaab deta hai | Head of engineering ya compliance | Ek number jo woh apne manager ko dikha sake |
| Blocker | Jo na bol sakta hai aur use wajah batana zaroori nahi | Ek security lead, jise Mr. Menon ne afsos ke saath "the Wall" kaha | Yeh jaanna ki text kahan jaata hai aur use kaun padh sakta hai |

Blocker ka sawaal pichhle July mein, Anaya ke saal ki sabse lambi meeting mein, nikaal liya gaya tha.

Phir usne Mr. Menon se poocha ki ek price unke liye kitni value rakhegi. Lekin phir woh ruk gayi, kyunki woh yeh poochne wali thi ki kya woh ise kharidenge. Project ke pehle mahine mein hi usne padh liya tha ki yeh galat sawaal kyun hai: log tameez mein haan kehte hain, aur us jawaab se kuch predict nahi hota. Isliye usne kuch aur poocha. Aaj woh is problem se nipatne ke liye kya use karte hain, uska cost kya hai, aur kharch kisne approve kiya?

Woh ek vendor ko lagbhag 35,000 rupaye mahine ka deta tha, ek aise tool ke liye jo chat logs mein card numbers blank karta tha aur aur kuch nahi karta tha. Ek analyst apna lagbhag chauthai time Lakshmi ke jaise ek weekly sweep mein lagati thi, jo uski salary ke hisaab se lagbhag 30,000 rupaye mahine banta tha. Vendor ka approval head of compliance ne sign kiya tha. Yeh sab facts the. Pichhla kharch saboot hai. Aage ka iraada saboot nahi hai.

## Ceiling aur floor

Anaya ne dono figures ek card par likhe. Unke neeche usne woh likha jo use us dopahar tak samajh nahi aaya tha: customer jo price dega, woh uske alternative se aata hai, seller ke costs se nahi. Alternative ceiling tay karta hai. Seller ke apne costs floor tay karte hain.

Sochiye iska uske liye kya matlab tha. Jo tool analyst ke quarter-time ka zyadatar hissa bacha deta hai, woh buyer ke liye 30,000 se kaafi kam ka hai, kyunki ise apnaane mein bhi mehnat lagti hai. Lekin woh kuch hazaar se kaafi zyada ka bhi hai.

Usne beech ka raasta usi card par nikala. Ek theek price 10,000 rupaye ke beech tha, jo uske costs cover karta, aur lagbhag 20,000 ke, jiske upar Mr. Menon poochne lagte ki purana tareeka sasta toh nahi. Usne pehle andaaze ke taur par 24,000 chuna, yeh dekhne ke liye ki uska kya hota hai.

## Charge karne ke chaar tareeke

Imran ne kaha ki AI product ke liye charge karne ke chaar aam tareeke hain, aur har ek alag taraf alag risk daalta hai. Table dikhati hai ki har ek kaise kaam karta hai, kahan mazboot hai aur kahan kamzor.

Table: Charge karne ke chaar tareeke
| Method | Kaise kaam karta hai | Taakat | Kamzori |
| --- | --- | --- | --- |
| *Seat pricing* | Har user ke liye, har mahine, ek charge | Buyer ke liye budget karna aasaan | Yeh maan leta hai ki ek aur use seller ko lagbhag kuch nahi padta. Software ke liye yeh chaalis saal se sach raha hai, lekin text padhne aur likhne wali kisi bhi cheez ke liye galat hai. Guard ke koi matlab wale seats the hi nahi, aur flat price par ek heavy customer das light customers ka margin saaf kar sakta tha |
| *Usage pricing* | Har message ka ek charge | Revenue cost ke saath chalta hai | Buyer bill ka andaaza nahi laga paata aur use ration karne lagta hai, jo ek safety tool ke liye ulta hoga |
| *Outcome pricing* | Har successful result ka ek charge | Price value ke saath chalta hai | Buyer aur seller ko tay karna padta hai ki success kya hai, aur use bina behes ke naapna padta hai. Har verified clean message par price kisi din mumkin ho sakti thi, abhi nahi thi |
| *Hybrid pricing* | Ek platform fee jisme kuch use shamil hai, phir uske upar ek rate | Buyer ke paas budget ke liye ek number hota hai, aur seller ka margin bacha rehta hai | Price samjhana zyada mushkil hai |

## Woh row jo zyadatar price lists mein nahi hoti

Anaya ke paas Imran ke cost figures the. Usne ek customer ko ek mahine serve karne ka poora cost likha, sirf model ka bill nahi. Usmein model aur hosting thi, records aur traces ki storage, aur customer ko onboard karne aur sawaalon ka jawaab dene wale insaan ka time. Jaisa use seekhne ko mil raha tha, support ka cost aksar machine se zyada hota hai. Usne hisaab teen baar kiya, low, base aur high usage par.

Table: Serve karne ka cost aur ₹24,000 flat par margin
| Usage | Mahine ke messages | Serve karne ka cost | ₹24,000 flat par margin |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | 144% ka loss |

Jis margin ko woh nikaal rahi thi, use *contribution margin* kehte hain. Jo costs customer ke saath badhte hain, unke baad customer aapke paas kitna chhodta hai, woh jo woh deta hai uske share ke roop mein. Base row par yeh theek-thaak 56 percent tha. High row par loss tha. Ek busy chat system wala customer flat price par use, jo woh deta, uske doguna se zyada ka padta.

Imran ka rule tha ki har baar low, base aur high teeno model kijiye, kyunki margin ki zyadatar problems sirf aakhri row mein dikhti hain.

Isliye usne price ko hybrid mein dobara banaya. 24,000 rupaye mahine mein 100,000 messages shamil honge. Uske baad har 100,000 ke 9,000 lagenge. 10 lakh messages par customer ek lakh se thoda zyada deta, aur uska margin 44 percent hota. Ab bill us value ke saath chalta tha jo customer ko mil rahi thi, aur customer ke badhne par uska margin phisalna band ho gaya.

## Woh pahiya jo apne aap ghoomta hai

Finance director ne, jise Anaya ne table dikhayi, ek alag sawaal poocha. Company ke badhne par product ko behtar kya banayega?

Is sawaal ke peeche ka idea hai *flywheel*: ek loop jisme product use karne se product behtar hota hai, jo aur zyada use laata hai. Anaya ne un teen kisam ke flywheel dekhe jo AI mein aate hain. Table unhe batati hai, ki har ek kaise ghoomta hai aur aam taur par kitna mazboot hai.

Table: Teen kisam ke flywheel
| Kisam | Kaise ghoomta hai | Taakat |
| --- | --- | --- |
| Data | Agents jo corrections karte hain unse tool behtar hota hai, isliye use se woh sudharta hai | Aksar claim se kamzor. Kuch hazaar examples ke baad gains chapte ho jaate hain, aur contracts aksar ek customer ka data doosre ke saath milane se mana karte hain |
| Workflow | Product kisi ke weekly routine ka hissa ban jaata hai, aur doosra kaam us par depend karne lagta hai | Aam taur par sabse mazboot. Guard ke liye yeh monthly sweep tha |
| Platform | Doosre log product ke upar banate hain | Rare, aur pehle ek bheed chahiye |

Usne ek chetavni jodi jo ab tak woh darjan documents mein daal chuki thi. Jo flywheel customers ke data par tikta hai, woh tabhi chalta hai jab tak customers seller par us data ke liye bharosa karte hain. Isliye seller ko batana chahiye ki kya store hota hai, usse kya seekha jaata hai, aur use kaun dekh sakta hai. Aur ek customer ke corrections ko doosre ki madad ke liye use karne se pehle poochna chahiye.

## Supplier aapke saath kya kar sakta hai

Sheet ki aakhri row ek aise risk ki thi jiske baare mein Anaya ko September mein pata chala tha. Agar koi product doosri company ke computers ya models par chalta hai, toh woh company aapse poochhe bina apni prices aur quality badal sakti hai. AI product mein delivery ke cost ka bada hissa kisi aur ka bill hota hai. Yeh cost *gross margin* ke andar baitha hai, jo revenue minus product deliver karne ka direct cost hai.

Woh risk hata nahi sakti thi, lekin uski keemat laga sakti thi. Uski recommendation mein likha tha ki agar hosting ki price doguni ho jaye toh kya hoga. Base margin 56 percent se girkar lagbhag 37 ho jaata, aur ek tested doosre host par switch karne mein lagbhag ek hafta lagta. Usmein likha tha ki agar koi model retire ho jaye toh woh kya karegi: pinned versions aur gate. Aur yeh bhi ki agar koi rival wahi feature launch kar de toh woh kya karegi: workflow aur relationship apne paas rakhegi.

Usne agle Thursday Mr. Menon ko woh page bhej diya, upar pehle paragraph ke saath, jo usne chaar baar likha tha.

::: example Mr. Menon ko Anaya ki recommendation
Meri recommendation hai ₹24,000 per month ka ek hybrid plan, jisme 100,000 messages shamil hon, aur har agle 100,000 ke ₹9,000. Aapka alternative vendor aur analyst ke time ko milakar aapko lagbhag ₹65,000 mahina padta hai, isliye price value se kaafi neeche hai. Hamara margin base use par 56 percent hai, aur us se 10 guna use par bhi 40 percent se upar rehta hai. Sabse bada risk hosting ki price hai. Agar woh doguni ho jaye, toh hamara base margin girkar lagbhag 37 percent ho jaayega, aur hamare tested doosre host par switch karne mein lagbhag ek hafta lagta hai.
:::

## Saar

Customer kisi product ke liye tab paisa deta hai jab woh uske alternative se ek kaam behtar ya sasta karta hai. Isliye alternative price ki ceiling tay karta hai, aur seller ke apne costs floor.

- Ek company mein user, buyer aur blocker aam taur par teen alag log hote hain. Kisi cheez ki value jaanne ke liye poochiye ki woh aaj kya use karte hain, uska cost kya hai, aur use kisne approve kiya. Pichhla kharch saboot hai, waade nahi.
- Seat, usage, outcome aur hybrid pricing, har ek alag taraf alag risk daalti hai. Jis cheez ko har baar chalane mein paisa lagta hai, uske liye flat seat price khatarnaak hai.
- Ek customer ko serve karne ka poora cost low, base aur high usage par nikaaliye, kyunki margin ki problem aam taur par aakhri row mein hoti hai.
- Likhiye ki agar supplier apni price doguni kar de toh margin ka kya hoga, aur switch karne mein kitna time lagega.

Jab price tay ho jaye, toh agla sawaal yeh hai ki log product ko kaise dhoondhte hain, aur kyun tikte hain.
