---
title: Words Se Dhoondhna
summary: Anaya search box ka role nibhati hai. Use pata chalta hai ki text dhoondhne ka sabse purana tareeka un customers ko kyun fail karta hai jinhe sabse zyada madad chahiye. Yeh bhi pata chalta hai ki identity number ke liye woh bilkul sahi kyun hai. Aap keyword search aur uski chupchaap failure se milte hain.
course: ch4
goals:
  - samajhna ki keyword search text kaise dhoondhti hai, aur kahan woh bilkul sahi tool hai
  - un teen jagahon ke naam jaanna jahan matlab ki jagah spelling milane se search fail hoti hai
  - dekhna ki fixed-shape rule bhi keyword search ka ek roop hai, aur woh bole gaye numbers kyun nahi pakadta
  - samajhna ki jo search kabhi "kuch nahi mila" nahi kehti, woh tab khatarnaak kyun hai jab koi aur uske results padhe
terms:
  - keyword search | Ctrl+F dabane jaisa; woh sawaal ke exact words ko documents ke words se milakar text dhoondhti hai, isliye spelling compare karti hai, matlab nahi | keyword matching
---

Ek barish wale Monday ko Anaya search engine bani. Farah Sheikh customer bani. Dono ke beech table par 20 index cards padi thi. Yeh pichhle hafte ki kaatne ki parchiyan thi. Har parchi ek card par chipki thi aur us par number tha. Har card par Sahaj ki refund policy ka aadha page tha. Anaya ko ek hi rule diya gaya tha. Woh sirf wahi words dhoondh sakti thi jo Farah bolti.

Farah ne apni thodi unchi, ghabrayi hui awaaz nikaali. Woh nakal utaarte waqt yahi awaaz use karti thi. "Paisa kab milega?" usne kaha. Matlab: "Paisa kab aayega?"

Anaya ne pehle "paisa" dhoondha, phir "kab", phir "milega". Usne saare 20 cards palte. Un teeno words mein se ek bhi kisi card par nahi tha. Toh usne kaha ki kuch nahi mila.

Farah ne kaha ki iske baare mein toh ek card hai. Card 7. Usmein likha tha: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." Card us sawaal ka jawaab de raha tha. Lekin sawaal ke saath uska ek bhi word common nahi tha.

## Case: 20 cards aur koi match nahi

Anaya aur Farah ne search ka sabse purana aur sabse aam tareeka karke dikhaya. Ise page par Ctrl+F dabane jaisa samajhiye. Aage ke sections batate hain ki woh kya karta hai, kahan fail hota hai, aur kahan woh sabse achha tool hai.

## Matlab nahi, spelling

Text ke dher mein cheezein dhoondhne ka sabse purana tareeka hai words milana. Koi "refund" type karta hai. System har woh chunk (document se kaata hua tukda) nikaal deta hai jisme "refund" likha ho. Search boxes dashakon se aise hi chalte aa rahe hain. Yeh tez hai, sasta hai, aur sabko achhe se samajh aata hai. Ise *keyword search* kehte hain. Yeh aisa hai jaise kisi page ko uske exact word se dhoondhna.

Iski kamzori iske tareeke mein hi hai. Yeh spelling compare karta hai, matlab nahi. Do sentences ka matlab ek ho sakta hai, par ek bhi word common na ho. Tab woh bilkul match nahi hote. Yeh failure random nahi hai. Yeh teen jagah hoti hai, aur teeno business ke liye maayne rakhti hain.

Table: Keyword search kahan fail hoti hai
| Kahan | Kya hota hai | Example |
| --- | --- | --- |
| Formal bhasha aur roz ki bhasha | Document likhne wale experts hote hain. Poochhne wale nahi | Policy mein "reimbursement" aur "credited to the registered account" likha hai. Customer kehta hai "money back" |
| Woh users jo pehle se confused hain | Jo product jaanta hai, woh uske words use karta hai aur jo chahiye paa leta hai. Jo confused hai, woh apne words use karta hai aur use kuch nahi milta | Yeh tareeka un users ke liye sabse achha chalta hai jinhe sabse kam problems hain. Un ke liye sabse kharab, jinhe sabse zyada hain |
| Sawaal aur statements | Sawaal ke words us passage se kam milte hain jo uska jawaab deta hai | "Why was I charged twice?" ka duplicate authorisation hold ke paragraph se lagbhag kuch common nahi hai |

Sahaj mein iske upar ek chauthi parat bhi thi. Farah ko woh sabse zyada pareshaan karti thi. Uske aadhe customers Roman letters mein Hindi likhte the. Policy formal English mein thi. "Paisa" ki bilkul sahi search bhi kuch nahi dhoondh paati.

## Jahan yeh bilkul sahi hai

Anaya is tareeke ko khaarij karne ko taiyaar thi. Tabhi Farah aage jhuki aur apni aam awaaz mein boli, "Clause 14.2."

Card 11 "14.2 Disputed charges" se shuru hota tha. Anaya ne use 4 second mein dhoondh liya.

::: key Keyword search kis kaam ki hai
Keyword search exact cheezon ke liye bahut achhi hai. Section number. Policy code. Part number. Naam. Jo "clause 14.2" type karta hai, use clause 14.2 chahiye. Use woh nahi chahiye jo lagbhag usi jaisa ho. Exact text milana sahi tareeka hai. Yeh kabhi jhooti kadi bhi nahi banata. Word maujood hai, toh mil jaata hai. Nahi hai, toh nahi milta.
:::

Imran mug lekar wahan aa gaya. Woh Anaya se pehle hi kadi samajh gaya. "Yeh toh aapka pattern checker hai," usne kaha.

Woh sahi tha. PAN mein 5 letters, 4 digits aur 1 letter hota hai. Use dhoondhna ek shape ki search hai. Yeh search exact hai, turant hai, free hai. Ise kisi baat mein bahkaya nahi ja sakta. Jo cheez hamesha ek jaisi dikhti hai, uske liye yahi sahi tool hai. Galti tab hoti jab seedha tool kaam kar raha ho aur aap koi hoshiyar tool laga dein.

## Jahan seedha tareeka guard ko fail kar deta hai

Guard par bhi yahi limit lagti hai. Farah ke paas iska example tha. Usne phone se pichhle mahine ka ek message padha. Use usne kisi ko dikhane se pehle khud saaf kar diya tha. "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

Yeh ek Aadhaar number (12 digit ka identity number) hai, 4-4 ke groups mein, words mein bola gaya. Char teen do ek, paanch chhe saat aath, nau shunya ek do. Customer Hinglish mein voice keyboard se bol raha tha.

Pattern checker ise nahi dekh paata. Message mein koi digit hai hi nahi. 12 digits dhoondhne wala rule kuch nahi paata.

Matlab shape maujood hai, lekin spelling nahi. Yeh words se dhoondhne ki kamzori ka ulta roop hai. Koi bhi insaan matlab dekh sakta hai. Jo tareeka characters compare karta hai, woh nahi dekh sakta. Anaya ne ise answer key (jaise sawaalon ki list jinke sahi jawaab pehle se pata hain) mein row 12 ke roop mein jod diya: bole gaye numbers.

## Chupchaap failure

Phir Farah ne keyword search ki ek aur baat batayi. Usne do saal pehle help centre mein ise pareshaani karte dekha tha. Usne Anaya se kaha ki ek aisa sawaal poochhe jiska jawaab documents mein nahi hai.

Anaya ne poochha ki kya woh Diwali ke din credit card se apna bill bhar sakti hai. "Credit" word 3 cards par tha, interest wale section mein. "Card" word 5 par tha. "Bill" word lagbhag sab par tha. Usne cards ko rank kiya: kis card mein kitne words mile. Card 6 sabse upar aaya.

Card 6 late payments par credit-card interest ke baare mein tha. Uska Diwali se koi lena-dena nahi tha. Usmein yeh bhi nahi tha ki card se payment ki ijaazat hai ya nahi.

::: watch Woh search jo kabhi "yahan kuch nahi hai" nahi kehti
Keyword search har document ko score karti hai aur sort karti hai, isliye woh hamesha kuch na kuch wapas deti hai. Sabse upar wala card bas bure cards mein se sabse kam bura hota hai. Aisi dukaan ki tarah sochiye jo kabhi "yeh nahi hai" nahi kehta aur sabse paas ka dabba thama deta hai. Chatbot us card ko saboot maan leta hai.

Search kabhi nahi kehti ki use kuch nahi mila. Result padhne wala model farq nahi bata sakta. Woh sabse kam kaam ke card se ek saaf-suthra jawaab likh deta hai, aise insaan ki awaaz mein jisne sahi card padha ho. Kisi step par koi error nahi aata.
:::

Anaya ne cards wapas number ke order mein rakh diye. Usne kaha ki team ko iska measure karne ka tareeka chahiye hoga. Imran sehmat hua. Usne jodd diya ki pehle woh dekh le ki problem ke doosre aadhe hisse ko kya theek karta hai.

## Summary

Keyword search sawaal ke words ko documents ke words se milakar text dhoondhti hai. Yeh tez aur sasti hai. Yeh kabhi jhooti kadi nahi banati. Exact cheezon ke liye woh sahi tareeka hai, jaise section numbers, codes aur naam. PAN jaisi fixed shape wali details ke liye bhi woh theek hai.

- Woh spelling compare karti hai, matlab nahi. Isliye jahan users document ke nahi, apne words use karte hain, wahan woh fail hoti hai. Matlab woh unhi ko fail karti hai jinhe sabse zyada madad chahiye.
- Digits dhoondhne wala rule us number ko nahi dekh paata jo bola gaya ho ya words mein likha ho.
- Woh hamesha apna sabse kam bura match wapas deti hai. Woh kabhi nahi kehti ki use kuch nahi mila. Isliye jo bhi us match ko padhta hai, woh use saboot maan sakta hai.

Agle chapter mein Anaya text ko uske matlab se dhoondhne ka tareeka talaashti hai. Spelling milana us customer ke kaam nahi aaya jo apne shabdon mein likhti hai.
