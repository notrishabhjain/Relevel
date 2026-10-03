---
title: Ek Baar Mein Padhne Ke Liye Bahut Lamba
summary: Yeh samajhne ke liye ki chatbot Sahaj ke apne documents se sawaalon ke jawaab kaise deta hai, ek product manager ek policy ko kainchi se teen baar tukdon mein kaatti hai, aur seekhti hai ki kaatne ka koi tareeka sahi nahi hota.
course: ch3
terms:
  - chunk | ek lambe document ka ek tukda, itna chhota ki akela store kiya aur bheja ja sake | chunks
  - chunking | lambe documents ko chunks mein todna, yaani yeh tay karna ki kahan kaatna hai | 
  - orphaned chunk | aisa chunk jiska document se kaat dene ke baad koi matlab nahi nikalta, kyunki woh kisi aisi cheez ka zikr karta hai jo pichhle tukde mein thi | orphaned chunks, orphan chunk
---

"Chatbot ke liye guard banane se pehle," Imran ne kaha, "tumhein jaanna chahiye ki chatbot ko kuch pata kaise hota hai."

April ke aakhir ka ek Friday tha, aur yeh sawaal Anaya ko bus mein aaya tha: yeh cheez Sahaj ke apne late-fee ke niyamon ke baare mein sawaalon ke jawaab kaise deti hai? Use yeh sikhaya nahi gaya tha. Usne pehle hafte mein dekha tha ki jab model ke paas jawaab nahi hota toh woh gadh deta hai. Phir bhi chatbot, zyadatar baar, sahi policy deta tha.

"Use sahi pages dikhaye jaate hain," Imran ne kaha. "Poori chaal bas yahi hai. Yeh dikhna mushkil ho jaata hai aur achhe se karna usse bhi mushkil."

## Sab kuch kyun nahi bhej dete

Aasaan plan yeh hai ki machine ko har sawaal ke saath Sahaj ke saare documents de do, aur use jawaab dhoondhne do. Anaya do wajahein pehle hi dekh chuki thi ki yeh kaam kyun nahi kar sakta.

Pehli hai size ki seema. Request ko context window ke andar fit hona hota hai, aur help pages, policies, terms aur circulars ki poori library lagbhag chaar sau pages thi. Woh fit nahi hogi.

Doosri kharcha hai, jo woh ab dimaag mein hi nikaal sakti thi. Chaar sau pages lagbhag do lakh tokens hain. Imran ke pasandeeda kalpit daam par, das lakh ke dhai sau rupaye, ek sawaal ka jawaab dene mein pachaas rupaye lagte. Mahine ke ek lakh sawaalon ka kharcha pachaas lakh hota. Jahan document fit ho bhi jaye, ek chhote sawaal ke liye sab kuch bhejna ek chitthi laane ke liye lorry kiraye par lene jaisa hai.

Isliye standard tareeka yeh hai ki documents ko pehle se tukdon mein kaat do, unhe store kar lo, aur har sawaal ke liye sirf woh kuch tukde bhejo jo kaam ke lagte hain. In tukdon ko *chunks* kehte hain, aur kaatne ko *chunking*. Idea kehna aasaan hai. Mushkil poori tarah isme hai ki kahan kaatna hai.

## Kainchi

Glass room ke farsh par Imran ne ek printout rakha, barah pages, ek kone par staple kiya hua. Woh Sahaj ki *Late Payment and Refund Policy* thi. Uske bagal mein usne stationery ki almari se udhaar li hui narangi hatthe wali ek kainchi rakhi.

"Yeh hissa tum haath se karo," usne kaha. "Koi software nahi. Main chahta hoon tum ise mehsoos karo."

Farah ne, guzarte hue, unhe wahan ghutne tek kar baithe dekha aur khud bhi carpet par bhaanti-pagdi maar kar baith gayi, jaise woh kisi bahane ka intezaar kar rahi thi.

**Pehla daur teen bade tukdon ka tha.** Anaya ne barah pages ko tihaayi mein kaata, chaar-chaar pages. Phir Imran ne ek customer ki tarah sawaal poochha. *Maine galti se apna bijli ka bill do baar bhar diya. Kya mujhe extra wapas mil sakta hai?*

Jawaab doosre tukde mein tha, page chhe ke ek paragraph mein. Toh machine ko doosra tukda bheja jata. Woh chal gaya, par iska matlab tha ek paragraph istemaal karne ke liye chaar pages bhejna: dheema, mehnga, aur dhundhla, kyunki bahut saara gair-zaroori text saath aa gaya. Aur jab Imran ne doosra sawaal poochha, ek sarkari utility ko jaane wale bhugtaan ke refund ke baare mein, toh niyam page chhe par tha aur uska apvaad page nau par, jo teesre tukde mein tha. Machine ko niyam dikhaya jaata, apvaad nahi.

**Doosra daur bees chhote tukdon ka tha.** Anaya ne phir kaata, aadhe page ek baar mein, bahut zyada katar-katar ke saath aur carpet par bahut zyada gandagi ke saath. Ab pehla sawaal sirf wahi paragraph kheench laya jo use chahiye tha, jo sasta aur dhaardaar tha. Lekin doosra sawaal ab bhi fail hua. Niyam ek parchi mein tha aur apvaad agli mein, aur kuch bhi guarantee nahi karta tha ki sahi parchi doosri ke bina chuni jaayegi.

Agar sirf niyam machine tak pahunchta, toh woh vishwas ke saath aur adhoora jawaab deti, jo koi jawaab na dene se bhi bura hai.

Phir Farah ne ek parchi uthayi aur zor se padhi. "*Pehle kahi gayi rakam sath din ke andar lautai jayegi.*"

"Kaun si rakam?" Anaya ne kaha.

"Wahi toh," Farah ne kaha. "Main yahi keh rahi hoon. Kaun si rakam? Kisko lautai jayegi? Kya pehle kahi gayi?"

Unhone us tukde ko dekha. Woh bilkul sahi bhasha thi aur poori tarah arthheen, ek vaakya jo pichhle vaakya se kat gaya tha, jisme bataya gaya tha ki rakam kya hai. Documents aise zikron se bhare hote hain, khaas kar kanooni text mein, lekin kisi bhi aise text mein bhi jo kehta hai "upar likhit", "yeh yojana" ya "aise mamle". Page padhne wale ke paas pichhla paragraph hota hai. Chunk ke paas nahi. Jis tukde ka akele mein koi matlab nahi nikalta woh *orphaned chunk* hai, aur machine, jise aisa ek diya jaye, woh karti hai jo woh hamesha kisi khaali jagah ke saath karti hai: use bhar deti hai.

**Teesra daur document ki sanrachna ke saath chala.** Is baar Anaya ne headings par kaata, har section ke liye ek tukda, aur har section ke aakhri do vaakyon ki ek photocopy banakar agle ke upar staple ki, taaki ek zikr ke paas kuch ho jis ki taraf woh ishaara kare. Zyadatar anaathon ko apne maa-baap wapas mil gaye. Niyam aur uska apvaad, pages chhe aur nau par, ab bhi alag sections mein gire, lekin headings kam se kam is tarah set the ki "Apvaad" apna alag section tha, aur apvaadon ke baare mein sawaal use kheench laata.

"Lo," Imran ne kaha. "Ek vaajib katai."

"Kya yeh sahi hai?"

"Yeh vaajib hai. Mujhse poochho ki yeh kya galat karta hai."

Usne socha. "Aise sawaal jo ek niyam aur uske apvaad ko cover karte hain jo alag sections mein hain."

"Haan. Aur tum ise naam de sakti ho. Matlab tum ise jaan-boojh kar test kar sakti ho."

## Koi sahi jawaab nahi

Yeh sabak tha, aur woh us se ulta tha jiski use umeed thi. Use umeed thi ki chunk ka sahi size seekhegi. Uski jagah usne seekha ki koi nahi hai. Kaatne ka har tareeka alag tareeke se fail hota hai. Bade tukde mehnge aur dhundhle hote hain. Chhote tukde sasta aur dhaardaar hote hain aur apna sandarbh kho dete hain. Sanrachna ke saath kaatna har tukde ke andar matlab bacha leta hai aur woh jawaab kho deta hai jo seema paar karte hain. Chunav is par nirbhar hai ki documents kaise dikhte hain aur log asal mein kya poochhte hain.

Design review ke liye Imran ka niyam woh tha jo usne apni notebook ke andar ke cover par utaar liya. *Batao tumne kaun si failure chuni, aur kyun.* Log aksar ek sahi chunk size chahte hain, aur koi nahi hai. Jo team apne tareeke ka nuksaan naam nahi le sakti usne chunav nahi kiya. Usne ek default sweekar kiya hai.

Farah ne Sahaj policy ke liye vaakya likha aur board par laga diya. *Hum section ke hisaab se kaatte hain, do vaakyon ke overlap ke saath. Isse ek clause ke baare mein sawaalon ke sateek jawaab milte hain. Isme woh jawaab khote hain jinhe alag sections se ek clause aur uske apvaad ki zaroorat hoti hai, isliye hum unhe jaan-boojh kar test karte hain.*

## Wahi problem, ulti taraf se

Saat baajne ko the jab Anaya ne use dekha, aur usne use zor se kaha, pen ke liye haath badhate hue parchiyan bikhra deti hui.

"Guard ki bhi wahi problem hai."

Imran ne use dekha.

"Kuch customers message nahi likhte. Woh ek email paste kar dete hain. Poora thread, teen hazaar shabd. Guard ka jo hissa naam aur jagah dhoondhta hai woh ek baar mein sirf utna hi padh sakta hai. Toh use bhi thread ko tukdon mein kaatna padega."

"Aur agar woh kisi number ke beech mein kaate toh?"

"Toh ek tukda *4321 56* par khatam hota hai aur agla *78 9012* se shuru, aur jo bhi unhe padhe uske liye dono mein se koi Aadhaar number nahi hai." Usne use whiteboard par banaya, ek number jo ek line ko paar kar raha tha, jaise sadak ki lane ke aar-paar khadi gaadi. "Woh seedha paas se nikal jaayega."

Woh nikal jaata, usi wajah se jis wajah se niyam aur uska apvaad: ek cheez ke do aadhe hisse, do jagah, har ek akele mein arthheen. Ilaaj bhi wahi tha, aur usne use niyam ki tarah likha. Vaakya ke ant mein ya khaali line par kaato, ankon ki ek chhoti qatar ke beech mein kabhi nahi. Lagatar tukdon ko kinaare par kuch shabd saajha karne do, taaki jo kuch kaat ke aar-paar ho woh kam se kam ek mein poora dikhe. Aur phir use jaan-boojh kar test karo, ankon ko theek sarhad par rakh kar.

Imran ne ek chhoti awaaz nikali jisse woh seekh chuki thi ki iska matlab hai ki usne ek engineer ke andaaz mein sach baat kahi. "Ise answer key mein daalo," usne kaha. "Row gyarah. Kaat par ek number."

## Saath le jaane layak baatein

Model ko har sawaal ke liye poori library nahi di ja sakti, kyunki woh fit nahi hogi aur kyunki har token ka paisa lagta hai. Aam jawaab hai documents ko pehle se chunks mein kaat dena aur sirf woh kuch bhejna jo kaam ke lagte hain, jo kaatne ko mushkil hissa banata hai. Bade chunks mehnge aur dhundhle hain, chhote dhaardaar hain aur apna sandarbh kho dete hain, aur jo chunk pichhle tukde ki kisi cheez ka zikr karta hai woh anaath hai. Koi sahi size nahi hai; har chunav kahin fail hota hai, aur kaam ki baat yeh hai ki woh failure naam lo jo aap sweekar karte hain aur use jaan-boojh kar test karo. Yahi dhyaan kisi bhi us text par laagu hota hai jise guard ko khud kaatna padta hai: kisi pehchaan ke number ko kabhi aadha mat todo.
