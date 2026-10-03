---
title: Ek Dimaag Jise Kuch Yaad Nahi Rehta
summary: Ek mithai ki dukaan ka maalik, jise har regular yaad hai, ek product manager ko sikhata hai ki chatbot ko yaad kyun nahi rehta, aur is farak se uske bill aur uski problem par kya asar padta hai.
course: ch15b
terms:
  - stateless | requests ke beech kuch bhi na rakhna: har call shoonya se shuru hoti hai, aur model ko nahi pata ki aapne abhi ek pal pehle baat ki thi | 
  - conversation history | chat ke pichhle messages, jinhe app ko har naye message ke saath dobara bhejna padta hai agar woh chahta hai ki model ko yaad rakhta hua lage | 
---

Neeche wali mithai ki dukaan ke maalik ne unnees saal mein kabhi kisi regular se nahi poochha tha ki use kya chahiye.

Use pata tha. Mrs. Apte Thursday ko paav kilo kaju katli leti thi aur har baar daam sun kar hairaan hone ka natak karti thi. Bagal ki pharmacy ka ladka ek garam jalebi leta tha aur sikkon mein paise deta tha. Agar koi ajnabi "wahi jo hamesha" maangta, toh maalik use pyaar se dekhta aur kehta, "Maaf kijiye, mujhe abhi pata nahi woh kya hota hai."

Imran aur Anaya chaar baje neeche aaye the, jaisa woh kabhi-kabhi karte the, kuch talaa hua khaane, jab tak koi problem aaram kar rahi ho. Imran laptop laya tha aur use kaanch ke counter par barfi ki ek tray aur laal kapde wali ek bahi ke beech rakh diya tha.

"Maine waada kiya tha ki samjhaunga ki woh tumhe yaad kyun nahi rakh sakta," usne kaha. "Yeh building ki sabse achhi jagah hai iske liye."

## Machine se pehli baar milna, phir se

Usne kal raat wali window kholi. Usne type kiya: *Mera naam Anaya hai aur main loans par kaam karti hoon.* Jawaab dostana tha. *Aapse mil kar achha laga, Anaya! Aaj main aapke loans mein kya madad kar sakta hoon?*

Phir usne window saaf ki, jaise nayi baatcheet shuru ho rahi ho, aur type kiya: *Mera naam kya hai?*

*Maaf kijiye, mere paas aapka naam jaanne ka zariya nahi hai. Kya aap bata sakti hain?*

"Woh abhi ek second pehle tumse baat kar raha tha," Anaya ne kaha.

"Woh *kisi* se baat kar raha tha ek second pehle. Doosri call ko koi andaaza nahi tha." Usne maalik ki taraf haath hilaya, jo peeth karke laddoo tol raha tha. "Woh aadmi stateful hai. Woh kal ki baatein aaj mein le aata hai. Yeh iska ulta hai. Yeh *stateless* hai: ek request se doosri tak yeh kuch nahi rakhta. Har call shoonya se shuru hoti hai. Use nahi pata ki tumne use ek minute pehle bola tha, aur woh tumhe jaanta hi nahi."

"Lekin chatbot ko toh yaad rehta hai," Anaya ne kaha. "Maine uske saath baatcheet ki hai. Use yaad hai ki maine teen messages pehle kya kaha tha."

"Use nahi yaad. Humein yaad hai."

## Chaalaki

Usne counter se bahi uthayi, maalik ko sir hilakar, jisne kandhe uchka kar ijaazat di. Woh sakht kaathi wali ek lambi kitaab thi. Usne use kholi, columns se bhare ek page par palti, aur uthaya.

"Maan lo tum andar aayi aur us aadmi ko bilkul yaad nahi hai. Har baar jab tum usse bolti, tumhe pehle yeh bahi use thamani padti, sahi page par khuli hui, taaki woh padh sake ki kya kaha gaya tha. 'Achha. Mrs. Apte. Thursday. Kaju katli.' Yahi chaalaki hai. Model sirf wahi dekhta hai jo maujooda request mein mez par hai. Isliye jab tum apna paanchwaan message bhejti ho, toh app pehle chaar dobara bhejta hai, naya sabse ant mein."

Usne window mein type karke dikhaya. Pehle, *Mera naam Anaya hai aur main loans par kaam karti hoon.* Phir jo jawaab usne diya tha. Phir *Mera naam kya hai?* Sab ek hi request mein, teen messages lambi. Jawaab turant wapas aaya. *Aapka naam Anaya hai.*

Pichhle messages, har naye ke saath wapas paste kiye gaye, *conversation history* kehlate hain, aur machine ke yaad rakhne ka poora anubhav isi dobara bhejne se bana hai. Model ko is baare mein kuch nahi pata. Jo yaad jaisa dikhta hai woh app hai, saavdhaani se, bahi thamata hua.

## Yaad rakhne ki keemat

Anaya ne, jo pichhle mahine se kharch ke hisaab se soch rahi thi, use usse pehle dekh liya jab woh bola.

"Har message agle ko bada bana deta hai."

"Haan. Aur har baar uska paisa lagta hai." Imran ne napkin ki taraf haath badhaya; dukaan mein napkin kam pad rahe the. "Maan lo chatbot har request apne teen sau tokens ke nirdeshon se shuru karta hai. Maan lo har baatcheet, customer ka message aur jawaab, sau tokens jodti hai."

Usne ek chhota column likha.

| Message number | Kya bheja jaata hai | Tokens |
| --- | --- | --- |
| 1 | nirdesh aur pehla message | lagbhag 340 |
| 10 | nirdesh, nau pichhli baatcheet, naya message | lagbhag 1,240 |
| 20 | nirdesh, unnees pichhli baatcheet, naya message | lagbhag 2,240 |

"Bheesvaan message pehle se chhe guna se zyada mehnga hai. Aur poori bees-message ki baatcheet, jodkar, lagbhag 25,800 tokens bheje gaye. Agar use kuch yaad na rehta, toh lagbhag 6,800." Usne farak ko underline kiya. "Baatcheet ka kharcha woh nahi hai jo insaan ne type kiya. Woh hai jo app ko dhona padta hai."

Isi ginit mein ek doosri seema chhupi hai, aur Anaya ne use khud dhoondha. Context window ek tay size ki hai. Itni lambi chalne wali baatcheet fit hona band kar degi. Us waqt app ko tay karna padta hai ki kya chhodna hai, aur woh faisla app ka hota hai, model ka kabhi nahi. Woh sabse purane messages gira sakta hai. Woh unhe ek saar se badal sakta hai. Woh customer ke baare mein kuch saheje hue tathya dhoondh kar sirf wahi bhej sakta hai. Woh kaam ki sthiti ek database mein rakh kar wahi bhej sakta hai. Har product jo "memory" deta hai usne inmein se ek chuna hai aur banaya hai, aur model vendor ne ismein se kuch nahi diya.

## Jo cheez woh nahi dekh paayi thi

Usne apni jalebi chupchaap khatam ki. Phir usne napkin bahut saavdhaani se neeche rakha, jaise woh chhalak sakta ho.

"Agar poori history har baar bheji jaati hai," usne kaha, "toh customer ne doosre message mein jo number type kiya woh teesre message ke saath phir bheja jaata hai."

"Haan."

"Aur chauthe ke saath. Aur paanchve ke saath."

"Baatcheet ke ant tak. Haan."

"Toh agar koi bees messages tak chalne wali chat ke doosre message mein apna Aadhaar number type kar de..."

"Woh bahari company ko atharah baar aur bheja jaata hai." Imran ne use narmi se kaha, jaise log woh baatein kehte hain jo ve khud pehle samajh chuke hon. "Maine kal raat dekha tha, tumhare jaane ke baad. Main chahta tha ki tum use khud dhoondho."

Isne us mahine mein usne jo kuch seekha tha usse zyada problem ko badal diya. Woh guard ko aisi cheez maan rahi thi jo har naye message ko dekhti hai. Lekin doosre message mein chhupa diya gaya aur history mein dikhta chhoda gaya number har baad ke message ke saath, poora, dobara bheja jaata. Guard sirf sabse naye line ko nahi dekh sakta tha. Use poori bahi ko, har baar, aisi cheez maanna tha jisme raaz ho sakta hai; ya, behtar, use har line ko aane par ek baar saaf karna tha, taaki saaf kiya hua version hi history mein jaye. Usne ise design ke niyam ke roop mein likh liya: *Ise bhejne se pehle hi nahi, store karne se pehle saaf karo.*

Maalik ne, jo yeh sab nahi sun raha tha, counter par ek chhota kaagaz ka thaila rakha.

"Bibi ji ke liye," usne kaha. "Kaju katli. Aaj Thursday hai."

Anaya ne use dekha, aur Imran ko, aur kai hafton mein pehli baar hans padi.

## Saath le jaane layak baatein

Model requests ke beech kuch nahi rakhta; woh stateless hai, aur har call shoonya se shuru hoti hai. Jo chatbot ke yaad rakhne jaisa lagta hai woh app ka conversation history ko dobara bhejna hai, naye message ko ant mein rakhkar. Isse har message pichhle se zyada mehnga hota hai, aur kaafi lambi baatcheet context window mein fit hona band kar degi, jahan app ko, model ko nahi, chunna padta hai ki kya chhodna hai. Kisi bhi product mein memory woh cheez hai jo product banata hai aur jiska paisa deta hai. Aur uska ek privacy ka nateeja hai jise chhodna aasaan hai: ek baar type ki gayi detail har baad ke message ke saath dobara bheji jaati hai, jab tak use store karne se pehle saaf na kiya jaye.
