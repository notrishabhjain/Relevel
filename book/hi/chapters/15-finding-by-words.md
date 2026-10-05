---
title: Shabdon Se Dhoondhna
summary: Product manager search box ka kirdaar nibhati hai aur seekhti hai ki text dhoondhne ka sabse puraana tareeka un customers ko kyun fail karta hai jinhe sabse zyada madad chahiye, aur pehchaan ke number ke liye woh bilkul sahi kyun hai. Chapter keyword search aur uski khaamosh failure ko samjhata hai.
course: ch4
goals:
  - samjhana ki keyword search text kaise dhoondhti hai aur woh kahan bilkul sahi tool hai
  - un teen jagahon ke naam batana jahan meaning ke bajaye spelling milane se failure hoti hai
  - dekhna ki fixed-shape rule keyword search ka ek roop kyun hai aur woh bole gaye numbers kyun chhod deta hai
  - samjhana ki jo search kabhi "kuch nahi mila" nahi kehti woh tab khatarnaak kyun hai jab koi us se mile nateeje padhta hai
terms:
  - keyword search | text ko sawaal ke shabdon ko documents ke shabdon se milaakar dhoondhna; yeh spelling ki tulna karta hai, matlab ki nahi | keyword matching
---

Ek barsaati Monday ko Anaya ne search engine ka kirdaar nibhaya, aur Farah Sheikh ne customer ka. Unke beech table par bees index cards the, pichhle hafte ke kataai ke tukde, har ek ek card par chipka aur numbered, jiske saamne Sahaj ki refund policy ka aadha page tha. Anaya ko ek hi niyam diya gaya tha: woh sirf wahi shabd dhoondh sakti thi jo Farah bole.

Farah ne woh thodi oonchi, chintit aawaaz banayi jo woh nakal ke liye istemaal karti thi aur kaha "Paisa kab milega?", yaani "Paisa kab aayega?" Anaya ne "paisa" dhoondha, phir "kab", phir "milega". Usne baaison card ek-ek karke palte aur teeno shabdon mein se koi kisi par nahi mila. Usne kaha ki kuch nahi hai. Farah ne kaha ki bilkul isi ke baare mein ek card hai, card saat. Usme likha tha: "Refund of an excess payment will be processed to the registered account within seven working days of the request being approved." Card sawaal ka jawaab deta tha, aur ek bhi shabd saajha nahi tha.

## 15.1 Case: bees card aur koi mel nahi

Yeh abhyaas dikhata hai ki sabse puraani aur sabse zyada phaili hui search kaise behave karti hai. Neeche ke section batate hain ki woh kya karti hai, kahan fail hoti hai, aur kahan woh sabse achha tool hai.

## 15.2 Spelling, matlab nahi

Text ke dher mein cheezein dhoondhne ka sabse puraana tareeka shabd milana hai. Koi "refund" type karta hai, aur system har woh chunk dhoondhta hai jisme "refund" ho. Yeh kai dashakon se search boxes ke dil mein hai aur tez, sasta aur achhe se samjha hua hai. Ise *keyword search* kehte hain.

Iski kami iske tareeke mein hi hai. Yeh matlab nahi balki spelling milata hai, isliye do vaakya jinka matlab ek ho par jinme koi shabd saajha na ho, bilkul nahi milte. Failure ittefaqi nahi hai. Woh teen jagah hoti hai, aur teeno business ke liye maayne rakhti hain.

Table: Keyword search kahan fail hoti hai
| Kahan | Kya hota hai | Udaharan |
| --- | --- | --- |
| Aupchaarik aur rozmarra ki bhasha | Document likhne wale visheshagya hote hain aur poochhne wale nahi | Policy "reimbursement" aur "credited to the registered account" kehti hai; customer "paisa wapas" kehta hai |
| Jo users pehle se uljhe hain | Jo product jaanta hai woh uski shabdawali istemaal karke jo chahta hai paa leta hai; jo uljha hai woh apne shabd istemaal karta hai aur kuch nahi paata | Tareeka un users ke liye sabse achha kaam karta hai jinhe sabse kam samasya hai aur unke liye sabse kharab jinhe sabse zyada |
| Sawaal aur kathan | Ek sawaal us passage se kam milta hai jo uska jawaab deta hai | "Mujhse do baar kyun charge kiya gaya?" ka ek duplicate authorisation hold ke paragraph se lagbhag kuch nahi milta |

Sahaj mein inke upar ek chauthi parat thi, aur Farah ko sabse zyada wahi chinta deti thi. Uske aadhe customers English akshar mein Hindi likhte the, aur policy aupchaarik English mein likhi thi. "Paisa" ki ek bilkul saaf search bhi kuch nahi dhoondhti.

## 15.3 Jahan yeh bilkul sahi hai

Anaya is tareeke ko khaarij karne wali thi. Farah aage jhuki aur apni aam aawaaz mein boli, "Clause 14.2." Card gyarah "14.2 Disputed charges" se shuru hota tha, aur Anaya ne use chaar second mein dhoondh liya.

::: key Keyword search kis kaam ki hai
Keyword search sahi cheezon ke liye bahut achhi hai: section number, policy ka identifier, part number, naam. Jo "clause 14.2" type karta hai use clause 14.2 chahiye, lagbhag wahi nahi, aur ek-ek shabd milana sahi tareeka hai. Woh kabhi koi sambandh gadhti bhi nahi. Agar shabd maujood hai toh milta hai, agar nahi toh nahi.
:::

Imran, jo mug lekar tahalta hua aaya tha, ne Anaya se pehle sambandh dekh liya. "Yeh tumhara pattern checker hai," usne kaha. PAN paanch akshar, chaar ank aur ek akshar hai, jo ek shakl ki khoj hai. Woh bilkul sahi, turant aur muft hai, aur use kisi cheez ke liye manaya nahi ja sakta. Woh us cheez ke liye sahi tool hai jo hamesha ek jaisi dikhti hai, aur galti hogi samajhdaar tareeke ko wahan istemaal karna jahan saadha kaam kar jaata hai.

## 15.4 Jahan saadha tareeka guard ko fail karta hai

Wahi seema guard par bhi lagti hai, aur Farah ne ek udaharan diya. Usne apne phone se pichhle mahine ka ek message padha, jo usne kisi ko dikhane se pehle khud saaf kiya tha: "Mera aadhaar number hai char teen do ek, paanch chhe saat aath, nau shunya ek do."

Yeh baarah ankon ka Aadhaar number hai, chaar-chaar ke groups mein, shabdon mein bola gaya: chaar teen do ek, paanch chhe saat aath, nau shunya ek do. Customer Hinglish mein voice keyboard ko dictate kar raha tha. Pattern checker ise nahi dekhta, kyunki message mein koi ank hai hi nahi, aur jo rule baarah ank dhoondhta hai use kuch nahi milta.

Shakl maujood hai, aur spelling nahi. Yeh shabdon se dhoondhne ki kamzori ulti taraf se hai: kisi bhi insaan ko matlab saaf hai, aur jo tareeka akshar milata hai woh use dekh nahi paata. Anaya ne ise answer key mein row baarah ke roop mein joda: bole gaye numbers.

## 15.5 Khaamosh failure

Farah ne tab keyword search ki ek aur khaasiyat ki taraf ishaara kiya, jo do saal pehle help centre mein pareshani ka kaaran bani thi. Usne Anaya se woh sawaal poochhne ko kaha jiska jawaab documents mein nahi tha.

Anaya ne poochha ki kya woh Diwali par credit card se bill bhar sakti hai. "Credit" shabd teen cards par tha, interest ke ek section mein. "Card" paanch par tha, aur "bill" lagbhag sab par. Usne cards ko is hisaab se rank kiya ki unme kitne shabd hain, aur card chhe sabse upar aaya. Card chhe late payment par credit-card interest ke baare mein tha. Uska Diwali ya is baat se koi sambandh nahi tha ki card se bhugtaan ki ijaazat hai ya nahi.

::: watch Aisi search jo kabhi "yahan kuch nahi" nahi kehti
Keyword search har document ko score karti hai aur use kram mein lagati hai, isliye woh hamesha kuch lautati hai. Sabse upar wala card ek kharab set mein sabse kam kharab hai. Chatbot us card ko lekar use saboot maanta hai. Search kabhi nahi batati ki use kuch nahi mila, aur jo model uska nateeja padhta hai woh farq nahi jaanta. Woh sabse kam prasangik card se, aise insaan ki aawaaz mein jisne sahi card padha ho, ek saaf jawaab likhta hai. Koi kadam error report nahi karta.
:::

Anaya ne cards ko unke numbered kram mein rakh diya aur kaha ki team ko ise naapne ka tareeka chahiye hoga. Imran ne sahmati di, aur kaha ki pehle use woh dekhna chahiye jo samasya ke doosre hisse ko theek karta hai.

## Saaraansh

Keyword search sawaal ke shabdon ko documents ke shabdon se milakar text dhoondhti hai. Woh tez aur sasta hai, kabhi koi sambandh nahi gadhti, aur sahi cheezon jaise section numbers, codes aur naamon ke liye, aur PAN jaisi fixed shakl wali details ke liye sahi tareeka hai.

- Woh spelling milati hai, matlab nahi, isliye wahan fail hoti hai jahan users document ke bajaye apne shabd istemaal karte hain. Isliye woh un logon ko fail karti hai jinhe sabse zyada madad chahiye.
- Jo rule ankon ko dhoondhta hai woh shabdon mein bole ya likhe number nahi dekh sakta.
- Woh hamesha apna sabse kam kharab nateeja lautati hai aur kabhi nahi batati ki use kuch nahi mila, isliye jo cheez us nateeje ko padhti hai woh use saboot maan sakti hai.
