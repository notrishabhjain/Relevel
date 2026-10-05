---
title: Paisa Kaun Deta Hai, Aur Kitna
summary: Ek lender ka technical lead poochhta hai ki guard use kitne mein padega, aur jawaab teen alag logon, charge karne ke chaar tareekon aur ek table ki us row par nirbhar hai jo zyadatar price lists mein kabhi nahi hoti. Chapter seat, usage, outcome aur hybrid pricing, contribution margin, flywheels aur gross margin samjhata hai.
course: b1
goals:
  - user, buyer aur blocker mein antar karna, aur past spending se jaanna ki koi cheez kitne ki hai
  - ek aisi keemat tay karna jo costs se bane floor aur customer ke vikalp se bane ceiling ke beech ho
  - seat, usage, outcome aur hybrid pricing ki tulna is par karna ki har ek kis paksh par kaun sa risk daalti hai
  - low, base aur high usage par contribution margin model karna, teen tarah ke flywheel pehchaanna, aur supplier ke risk ka daam lagana
terms:
  - seat pricing | product ke har user ke liye, prati mahine paisa lena; kharidar ke liye budget banana aasaan lekin anuchit jab zyada istemaal karne wale kam istemaal karne walon se kahin zyada mehnge padte hain | per-seat
  - usage pricing | har ikai ke liye paisa lena, jaise har message ya call, taaki aay kharche ke saath chale; kharidar bill ka andaaza nahi laga sakte aur istemaal rok sakte hain | usage-based
  - outcome pricing | har safal nateeje ke liye paisa lena, taaki daam value ke saath chale; ise safalta ki ek sahmat, naapne yogya paribhasha chahiye | outcome-based
  - hybrid pricing | ek platform fee jisme kuch istemaal shaamil hai, phir usse aage ke liye ek charge; kharidar ke liye andaaza lagane yogya aur aapke margin ki raksha karne wala | hybrid plan
  - contribution margin | ek customer aapke paas kya chhodta hai un kharchon ke baad jo unke saath badhte hain, jo woh dete hain uske hisse ke roop mein | 
  - flywheel | ek loop jisme product ka istemaal use behtar banata hai, jo zyada istemaal laata hai; workflow wala kism aamtaur par sabse mazboot hai | flywheels
  - gross margin | aay ghata product pahunchane ka seedha kharcha; AI products ke liye us kharche ka bahut hissa ek model ya hosting ka bill hota hai | 
---

Defence ke baad lending partner ke technical lead Mr. Menon ne seedhiyon par, ek haath railing par rakhe, poochha ki guard unhe kitne ka padega. Defence ke baad ke teen hafton mein woh demonstration page dekhne do baar aur ek baar do saathiyon ko lekar aaye the. Unhone yeh sawaal aise poochha jaise log tab poochhte hain jab sawaal poore din se unke dimaag mein ghoom raha ho.

Anaya ne ek saal "kya yeh kaam karta hai?" ka jawaab ek number se dena seekha tha. "Isme kitna kharcha hota hai?" ek alag tarah ka sawaal tha, aur uske paas koi aisa number nahi tha jis par use yakeen ho. Usne ek hafte ka samay maanga aur ek asli number laane ka vaada kiya. Yeh chapter batata hai ki use kya mila.

## Case: teen alag log

Pehla kaam yeh pata lagana tha ki Mr. Menon kaun hain. Jo company doosron ke istemaal ke liye software khareedti hai, usme teen alag log aam taur par maayne rakhte hain, aur woh shaayad hi ek hi insaan hote hain.

Table: User, buyer aur blocker
| Bhoomika | Kaun | Partner mein | Kya chahta hai |
| --- | --- | --- | --- |
| User | Jo roz product ke saath kaam karta hai | Ek developer jo kit ko chat system mein jodta | Ise Friday ko aasaani se jodna |
| Buyer | Jiske paas budget hai aur jo us kharche ke liye kisi ko jawaab deta hai | Engineering ya compliance ka head | Apne manager ko dikhane ke liye ek number |
| Blocker | Jo "na" keh sakta hai aur kaaran batane ko bandhya nahi | Ek security lead jise Mr. Menon ne dukhi lahje mein "the Wall" kaha | Yeh jaanna ki text kahan jaata hai aur use kaun padh sakta hai |

Blocker ka sawaal pichhle July mein, Anaya ke saal ki sabse lambi meeting mein, tay hua tha.

Usne Mr. Menon se poochha ki ek keemat unke liye kitne ki hogi, aur ruk gayi, kyunki woh poochhne wali thi ki kya woh ise khareedenge. Usne project ke pehle mahine mein padha tha ki yeh galat sawaal kyun hai: log shishtata ke liye haan kehte hain, aur jawaab kuch bhi saabit nahi karta. Usne uski jagah poochha ki woh abhi is samasya se nipatne ke liye kya istemaal karte hain, usme kitna kharcha hota hai aur us kharche ko kisne manzoor kiya.

Woh ek vendor ko mahine mein lagbhag paintees hazaar rupaye deta tha ek aise tool ke liye jo chat logs mein card numbers chhupata tha aur kuch nahi. Ek analyst apna lagbhag chauthai samay ek hafte ke sweep mein lagati thi jo Lakshmi ke jaisa tha, aur uski tankhwaah ke hisaab se woh mahine mein lagbhag tees hazaar rupaye the. Vendor ki manzoori compliance head ne di thi. Yeh sab tathya the. Pichhla kharcha saboot hai. Bhavishya ka irada nahi.

## Ceiling aur floor

Anaya ne dono figure ek card par likhe, aur unke neeche woh jo use us dopahar tak samajh nahi aaya tha: ek customer jo keemat dene ko taiyaar hai woh uske vikalp se aati hai, bechne wale ke kharche se nahi. Vikalp ceiling tay karta hai aur bechne wale ke apne kharche floor. Jo tool ek analyst ke chauthai samay ka zyadatar hissa bachata hai woh khareedne wale ke liye tees hazaar se kam ka hai, kyunki ise apnaane mein bhi mehnat lagti hai, aur kuch hazaar se kahin zyada ka hai.

Usne beech ka raasta usi card par dhoondha. Ek theek keemat das hazaar rupaye ke beech thi, jo uske kharche nikaalti, aur lagbhag bees hazaar ke ooper, jisse aage Mr. Menon yeh poochhna shuru karte ki kya puraana tareeka sasta hai. Usne pehla andaaza ke roop mein chaubees hazaar chuna, yeh dekhne ke liye ki uske saath kya hota hai.

## Charge karne ke chaar tareeke

Imran ne kaha ki ek AI product ke liye charge karne ke chaar aam tareeke hain, aur har ek ek alag paksh par ek alag risk daalta hai.

Table: Charge karne ke chaar tareeke
| Tareeka | Kaise kaam karta hai | Khoobi | Kamzori |
| --- | --- | --- | --- |
| *Seat pricing* | Har user ke liye, mahine mein ek charge | Buyer ke liye budget banana aasaan | Yeh maanta hai ki ek aur istemaal bechne wale ko lagbhag kuch nahi padta, jo chaalis saal software ke liye sach raha hai aur jo text padhne aur likhne wali cheez ke liye galat hai. Guard ke koi saarthak seats nahi the, aur ek flat keemat par bhaari customer das halke customers ka margin mita sakta tha |
| *Usage pricing* | Har message ke liye ek charge | Kamai kharche ke saath chalti hai | Buyer bill ka andaaza nahi laga sakta aur istemaal ko raashan karta hai, jo ek safety tool ke liye ulta hota |
| *Outcome pricing* | Har safal nateeje ke liye ek charge | Keemat value ke saath chalti hai | Buyer aur seller ko tay karna hoga ki safalta kya hai aur use bina behas ke naapna hoga. Har satyapit saaf message par ek keemat shaayad kabhi mumkin ho, aur abhi nahi thi |
| *Hybrid pricing* | Ek platform fee jisme kuch istemaal shaamil hai, phir uske aage ek rate | Buyer ke paas budget ke liye ek number hota hai aur seller apna margin rakhta hai | Keemat samjhana zyada mushkil hai |

## Woh row jo zyadatar price lists chhod deti hain

Anaya ke paas Imran ke kharche ke figure the. Usne ek customer ko ek mahine seva dene ka poora kharcha likha, sirf model bill nahi: model aur hosting, records aur traces ke liye storage, aur ek insaan ka samay jo customer ko onboard kare aur sawaalon ka jawaab de. Jaisa woh seekh rahi thi, support aksar machine se zyada mehnga padta hai. Usne hisaab teen baar kiya, low, base aur high usage par.

Table: Chaubees hazaar ke flat par seva ka kharcha aur margin
| Usage | Mahine ke messages | Seva ka kharcha | Chaubees hazaar ke flat par margin |
| --- | --- | --- | --- |
| Low | 20,000 | ₹5,900 | 75% |
| Base | 100,000 | ₹10,500 | 56% |
| High | 1,000,000 | ₹58,500 | 144% ka nuksaan |

Jis margin ka woh varnan kar rahi thi woh *contribution margin* hai: ek customer apne peechhe kya chhodta hai un kharchon ke baad jo uske saath badhte hain, jo woh dete hain uske hisse ke roop mein. Base row par woh ek achha chhappan percent tha. High row par woh nuksaan tha. Ek flat keemat par ek vyast chat system wala customer use us se doguna se zyada kharch karwata jo woh deta. Imran ka niyam tha ki har baar low, base aur high model karo, kyunki zyadatar margin ki samasyaayein sirf aakhri row mein dikhti hain.

Usne keemat ko ek hybrid ke roop mein dobara banaya. Chaubees hazaar rupaye mahine mein ek lakh messages shaamil honge, aur har agle ek lakh ke liye nau hazaar. Das lakh messages par ek customer ek lakh se thoda zyada dega aur uska margin chauvaalis percent hoga. Bill us value ke saath chalta tha jo customer paata tha, aur uska margin tab phisalna band ho gaya jab customer badhe.

## Woh chakra jo apne aap ghoomta hai

Finance director ne, jise Anaya ne table dikhayi, poochha ki company ke badhne par kya product ko behtar banayega. *Flywheel* ek chakra hai jisme product ka istemaal use behtar banata hai, jo aur istemaal laata hai. Anaya ne teen kism dekhe jo AI mein dikhte hain.

Table: Flywheel ki teen kism
| Kism | Kaise ghoomta hai | Taakat |
| --- | --- | --- |
| Data | Jo corrections agents karte hain woh tool ko behtar banate hain, isliye woh istemaal ke saath sudharta hai | Aksar daave se kamzor. Kuch hazaar udaharanon ke baad faayde chapte ho jaate hain, aur anubandh aksar ek customer ka data doosre ke saath milane se rokte hain |
| Workflow | Product kisi ke saptaahik routine ka hissa ban jaata hai, aur doosra kaam uspe nirbhar hone lagta hai | Aam taur par sabse mazboot. Guard ke liye woh mahine ka sweep tha |
| Platform | Doosre log product par banate hain | Dulabh, aur pehle ek bheed chahiye |

Usne ek chetavani joda jo woh tab tak ek darjan documents mein daal chuki thi. Jo flywheel customers ke data par nirbhar hai woh tabhi kaam karta hai jab tak customers seller par bharosa karte hain, isliye seller ko batana chahiye ki kya store hota hai, kisse seekha jaata hai aur kaun dekh sakta hai, aur ek customer ke sudhaaron ko doosre ki madad ke liye istemaal karne se pehle poochhna chahiye.

## Supplier aapke saath kya kar sakta hai

Sheet ki aakhri row ek aise risk ke baare mein thi jise Anaya ne September mein seekha tha. Agar koi product doosri company ke computers ya models par chalta hai, toh woh company bina poochhe apne daam aur apni quality badal sakti hai. Ek AI product ke liye seva dene ke kharche ka ek bada hissa, aur isliye *gross margin* ka, jo revenue minus seva dene ka seedha kharcha hai, kisi aur ka bill hota hai.

Woh us risk ko hata nahi sakti thi, par uska daam laga sakti thi. Uski sifarish ne kaha ki agar hosting ka daam doguna ho gaya toh kya hoga: base margin chhappan percent se girkar lagbhag saintees ho jaayega, aur ek test kiye hue doosre host par switch karne mein lagbhag ek hafta lagega. Usne kaha ki agar koi model retire hua toh woh kya karegi: pinned versions aur gate. Aur usne kaha ki agar koi rival wahi feature launch kare toh woh kya karegi: workflow aur rishte ko apna banao.

Usne agle Thursday page Mr. Menon ko bheja, pehle paragraph ke saath upar, jise usne chaar baar dobara likha tha.

::: example Mr. Menon ko Anaya ki sifarish
Main ₹24,000 mahine ka ek hybrid plan sujhati hoon, jisme 100,000 messages shaamil hon, aur har agle 100,000 ke liye ₹9,000. Aapka vikalp aapko vendor aur analyst ke samay ke beech lagbhag ₹65,000 mahine padta hai, isliye keemat value se kaafi neeche hai. Base istemaal par hamara margin 56 percent hai aur uske das guna par bhi 40 percent se upar rehta hai. Sabse bada risk hosting ki keemat hai. Agar woh doguni ho jaaye, toh hamara base margin lagbhag 37 percent par aa jaayega, aur hamare test kiye hue doosre host par switch karne mein lagbhag ek hafta lagta hai.
:::

## Saaraansh

Ek customer product ke liye tab paisa deta hai jab woh ek kaam ko apne vikalp se behtar ya sasta karta hai, isliye vikalp keemat ki ceiling tay karta hai aur bechne wale ke apne kharche floor.

- Ek company mein user, buyer aur blocker aam taur par teen alag log hote hain. Yeh jaanne ka tareeka ki koi cheez kitne ki hai yeh poochhna hai ki woh aaj kya istemaal karte hain, usme kitna kharcha hota hai aur use kisne manzoor kiya, kyunki pichhla kharcha saboot hai aur vaade nahi.
- Seat, usage, outcome aur hybrid pricing har ek alag paksh par alag risk daalti hai. Jo cheez har baar chalne par paise kharchti hai uske liye ek flat seat keemat khatarnaak hai.
- Ek customer ko seva dene ka poora kharcha low, base aur high usage par model karo, kyunki margin ki samasya aam taur par aakhri row mein hoti hai.
- Batao ki agar supplier apni keemat doguni kare toh margin ka kya hoga, aur badalne mein kitna samay lagega.
