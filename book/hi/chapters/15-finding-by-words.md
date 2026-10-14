---
title: Words Se Dhoondhna
summary: Ek product manager search box ka role nibhati hai. Use pata chalta hai ki text dhoondhne ka sabse purana tareeka un customers ko kyun fail karta hai jinhe sabse zyada madad chahiye, aur identity number ke liye woh bilkul sahi kyun hai. Chapter mein keyword search aur uski chupchaap failure aati hai.
course: ch4
goals:
  - samjha paana ki keyword search text kaise dhoondhti hai, aur kahan woh bilkul sahi tool hai
  - un teen jagahon ke naam bata paana jahan matlab ki jagah spelling milane se search fail hoti hai
  - dekh paana ki fixed-shape rule bhi keyword search ka ek roop hai, aur woh bole gaye numbers kyun nahi pakad paata
  - samjha paana ki jo search kabhi "kuch nahi mila" nahi kehti, woh tab khatarnaak kyun hai jab uske results ko koi aur padh raha ho
terms:
  - keyword search | text dhoondhne ka woh tareeka jisme sawaal ke words ko documents ke words se milaya jaata hai; woh spelling compare karta hai, matlab nahi | keyword matching
---

Ek barish wale Monday ko Anaya search engine bani, aur Farah Sheikh customer. Dono ke beech table par 20 index cards padi thi. Yeh pichhle hafte ki kaatne ki parchiyan thi. Har parchi ek card par chipkayi gayi thi, us par number tha, aur uske saamne Sahaj ki refund policy ka aadha page tha. Anaya ko ek hi rule diya gaya tha. Woh sirf wahi words dhoondh sakti thi jo Farah bolti.

Farah ne apni thodi unchi, ghabraayi hui awaaz nikaali, jo woh nakal utaarte waqt use karti thi. "Paisa kab milega?" usne kaha.

Anaya ne pehle "paisa" dhoondha, phir "kab", phir "milega". Usne saare 20 cards ek-ek karke palte. Un teeno words mein se ek bhi kisi card par nahi tha. Toh usne kaha ki kuch nahi mila.

Farah ne kaha ki iske baare mein toh ek card hai. Card 7. Usmein likha tha: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." Card us sawaal ka jawaab de raha tha, lekin sawaal ke saath uska ek bhi word common nahi tha.

## Case: 20 cards aur koi match nahi

Anaya aur Farah ne jo abhi karke dikhaya, woh search ka sabse purana aur sabse aam tareeka aise hi kaam karta hai. Aage ke sections batate hain ki woh kya karta hai, kahan fail hota hai, aur kahan woh sabse achha tool hai.

## Matlab nahi, spelling

Text ke dher mein cheezein dhoondhne ka sabse purana tareeka hai words milana. Koi "refund" type karta hai, aur system har woh chunk nikaal deta hai jisme "refund" likha ho. Search boxes dashakon se aise hi chalte aa rahe hain. Yeh tez hai, sasta hai, aur sabko achhe se samajh mein aata hai. Ise *keyword search* kehte hain.

Iski kamzori iske tareeke mein hi hai. Yeh spelling compare karta hai, matlab nahi. Isliye do sentences jinka matlab ek hai lekin ek bhi word common nahi, woh bilkul match nahi hote. Yeh failure random nahi hai. Yeh teen jagah hoti hai, aur teeno business ke liye maayne rakhti hain.

Table: Keyword search kahan fail hoti hai
| Kahan | Kya hota hai | Example |
| --- | --- | --- |
| Formal bhasha aur roz ki bhasha | Document likhne wale specialist hote hain aur poochhne wale nahi | Policy mein "reimbursement" aur "credited to the registered account" likha hai; customer kehta hai "money back" |
| Woh users jo pehle se confused hain | Jo product jaanta hai, woh uski vocabulary use karta hai aur jo chahiye woh paa leta hai; jo confused hai, woh apne words use karta hai aur use kuch nahi milta | Yeh tareeka un users ke liye sabse achha chalta hai jinhe sabse kam problems hain, aur unke liye sabse kharab jinhe sabse zyada hain |
| Sawaal aur statements | Sawaal ke words us passage se kam milte hain jo uska jawaab deta hai | "Why was I charged twice?" ka duplicate authorisation hold ke paragraph se lagbhag kuch common nahi hai |

Sahaj mein iske upar ek chauthi parat bhi thi, aur Farah ko woh sabse zyada pareshaan karti thi. Uske aadhe customers Roman letters mein Hindi likhte the, aur policy formal English mein likhi thi. "Paisa" ki bilkul sahi search bhi kuch nahi dhoondh paati.

## Jahan yeh bilkul sahi hai

Anaya is tareeke ko khaarij karne ko taiyaar thi. Tabhi Farah aage jhuki aur apni aam awaaz mein boli, "Clause 14.2."

Card 11 "14.2 Disputed charges" se shuru hota tha. Anaya ne use 4 second mein dhoondh liya.

::: key Keyword search kis kaam ki hai
Keyword search exact cheezon ke liye bahut achhi hai: section number, policy identifier, part number, naam. Jo "clause 14.2" type karta hai, use clause 14.2 chahiye. Use woh nahi chahiye jo lagbhag usi jaisa matlab rakhta ho. Exact text milana sahi tareeka hai. Aur yeh kabhi koi jhooti kadi nahi banata. Agar word maujood hai, toh mil jaata hai. Agar nahi hai, toh nahi milta.
:::

Imran, jo mug lekar tahalta hua wahan aa gaya tha, Anaya se pehle hi baat samajh gaya. "Yeh toh aapka pattern checker hai," usne kaha.

Woh sahi tha. PAN mein 5 letters, 4 digits aur 1 letter hota hai, aur use dhoondhna ek shape ki search hai. Yeh search exact hai, turant hoti hai, free hai, aur ise kisi baat mein bahkaya nahi ja sakta. Jo cheez hamesha ek jaisi dikhti hai, uske liye yahi sahi tool hai. Galti tab hoti jab sidha tareeka kaam kar raha ho aur aap koi hoshiyar tareeka laga dein.

## Jahan seedha tareeka guard ko fail kar deta hai

Yahi limit guard par bhi lagti hai, aur Farah ke paas iska example tha. Usne apne phone se pichhle mahine ka ek message padha, jise usne kisi ko dikhane se pehle khud saaf kar diya tha: "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

Yeh ek Aadhaar number hai, 12 digits, 4-4 ke groups mein, jo words mein bole gaye hain: char teen do ek, paanch chhe saat aath, nau shunya ek do. Customer Hinglish mein voice keyboard ko dictate kar raha tha.

Pattern checker ise nahi dekh paata. Message mein koi digit hai hi nahi, aur 12 digits dhoondhne wala rule kuch nahi paata.

Matlab shape toh maujood hai, lekin spelling nahi. Yeh words se dhoondhne ki kamzori ka ulta roop hai. Koi bhi insaan matlab dekh sakta hai. Jo tareeka characters compare karta hai, woh nahi dekh sakta. Anaya ne ise answer key mein row 12 ke roop mein jod diya: bole gaye numbers.

## Chupchaap failure

Phir Farah ne keyword search ki ek aur khaasiyat batayi. Usne do saal pehle help centre mein ise pareshaani karte dekha tha. Usne Anaya se kaha ki ek aisa sawaal poochhe jiska jawaab documents mein nahi hai.

Anaya ne poochha ki kya woh Diwali ke din credit card se apna bill bhar sakti hai. "Credit" word 3 cards par tha, interest wale section mein. "Card" word 5 par tha, aur "bill" lagbhag sab par. Usne cards ko is hisaab se rank kiya ki har card mein kitne words mile, aur card 6 sabse upar aaya.

Card 6 late payments par credit-card interest ke baare mein tha. Uska Diwali se koi lena-dena nahi tha, aur is baat se bhi nahi ki card se payment ki ijaazat hai ya nahi.

::: watch Woh search jo kabhi "yahan kuch nahi hai" nahi kehti
Keyword search har document ko score karti hai aur unhe sort karti hai, isliye woh hamesha kuch na kuch wapas deti hai. Sabse upar wala card bas bure cards mein se sabse kam bura hota hai. Chatbot us card ko uthakar use saboot maan leta hai. Search kabhi nahi kehti ki use kuch nahi mila, aur result padhne wala model farq nahi bata sakta. Woh sabse kam kaam ke card se ek flowing jawaab likh deta hai, aise insaan ki awaaz mein jisne sahi card padha ho. Kisi step par koi error nahi aata.
:::

Anaya ne cards wapas unke numbered order mein rakh diye. Usne kaha ki team ko iska measure karne ka tareeka chahiye hoga. Imran sehmat hua. Usne jodd diya ki pehle woh yeh dekh le ki problem ke doosre aadhe hisse ko kya theek karta hai.

## Summary

Keyword search sawaal ke words ko documents ke words se milakar text dhoondhti hai. Yeh tez aur sasti hai, aur kabhi koi jhooti kadi nahi banati. Exact cheezon ke liye woh sahi tareeka hai, jaise section numbers, codes aur naam, aur PAN jaisi fixed shape wali details ke liye bhi.

- Woh spelling compare karti hai, matlab nahi. Isliye jahan users document ke nahi, apne words use karte hain wahan woh fail hoti hai. Matlab woh unhi logon ko fail karti hai jinhe sabse zyada madad chahiye.
- Digits dhoondhne wala rule us number ko nahi dekh paata jo bola gaya ho ya words mein likha ho.
- Woh hamesha apna sabse kam bura match wapas deti hai, aur kabhi nahi kehti ki use kuch nahi mila. Isliye jo bhi us match ko padhta hai, woh use saboot maan sakta hai.
