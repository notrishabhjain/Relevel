---
title: Machine Ko Haath Dena
summary: Baarah ank ka order number bilkul Aadhaar number jaisa dikhta hai, aur unhe alag karne ka ek hi tareeka hai use dhoondhna. Chapter tool calling, tool descriptions, AI agents aur step limits, loop ka badhta kharcha, aur jo kaam padhte hain unme aur jo karte hain unme antar samjhata hai.
course: ch9
goals:
  - batana ki tool calling model aur program ke beech ke loop ki tarah kaise kaam karti hai
  - samjhana ki tool description angrezi mein likha code kyun hai
  - ginna ki ek agent ka kharcha uske kadamon ke saath kaise badhta hai
  - batana ki step limit kyun chahiye aur loop mein insaan kahan hona chahiye
terms:
  - tool calling | model ko apne program se kisi function ko chalwane ke liye kehne dena, function aur uske arguments ka naam lekar; program use chalata hai aur nateeja wapas bhej deta hai | tool call, tool calls
  - tool description | text ki woh kuch lines jo model ko batati hain ki function kya karta hai, kya lautata hai aur kya nahi; model unhe padh kar function chunta hai, isliye dhundhli description ek bug hai | tool descriptions
  - AI agent | ek model, function ka ek set jo woh maang sakta hai, ek loop, aur kab rukna hai uska ek niyam | AI agents
  - step limit | ek AI agent rukne se pehle zyada se zyada kitne daur le sakta hai, jo program tay karta hai, model ke bharose nahi chhoda jaata | step limits
---

Baarah ank ka order number team ke kaam mein baar-baar laut kar aa raha tha. Woh sorting test mein aaya tha, jahan chaar order numbers ko Aadhaar numbers kaha gaya tha aur guard unhe chhupa deta. Woh edge cases ki list mein dobara aaya tha. Farah ke agents ko apna kaam karne ke liye order numbers dekhne padte the, aur customers unhe lagaataar type karte the. Aankh ko aur kisi bhi rule ko, order number aur Aadhaar number ek jaise the: baarah ank, kabhi chaar-chaar ke groups mein, aur unme aisa kuch nahi jo batata ki kaun sa kaun hai.

Ek Tuesday Imran Qureshi ne kaha ki jaanne ka sirf ek tareeka hai. Order system se poochho. Yeh chapter samjhata hai ki model ko aisa karne ki ijaazat kaise di jaati hai, is vyavastha ka kharcha kya hai, aur use kahan rokna hai.

## Case: ek number jo do cheezon mein se ek hai

Model ne ab tak ek hi tarah ka kaam kiya tha: woh text padhta tha aur text likhta tha, aur ek insaan ya program use padhta tha. Imran ne kuch alag prastaav diya. Woh chahta tha ki model keh sake ki use nahi pata ki yeh number kya hai aur orders table mein look-up maang sake.

## Ek model jo maang sakta hai

Model kuch chala nahi sakta. Woh sirf maang sakta hai. Imran ne ek card par yeh vyavastha paanch kadamon mein likhi, aur woh saadhi hai.

1. Request model ko upalabdh functions ka vivaran deti hai, har ek ka naam, uddeshya aur woh kaun se arguments leta hai. Vivaran bhi aur text hi hai.
2. Agar model ko koi function chahiye, toh woh gadya ke bajaye ek anurodh se jawaab deta hai: is function ko in arguments ke saath call karo.
3. Program, model nahi, function chalata hai.
4. Program nateeja ek aur message ke roop mein wapas bhejta hai.
5. Model ya toh ek aur call maangta hai ya apna antim jawaab likhta hai. Loop tab tak chalta hai jab tak model ruk nahi jaata ya program use rok nahi deta.

::: def Tool calling
Model ko program se ek function chalane ko kehne dena, function ka naam aur uske arguments bata kar. Program use chalata hai aur nateeja wapas bhejta hai. Yahi woh tantra hai jiske peechhe woh sab hai jise AI ke kaam karne ki tarah bataya jaata hai: kuch dhoondhna, slot book karna, record update karna. Yeh sirf text ka aana-jaana hai, beech mein saadhaaran code jo asli kaam karta hai.
:::

Ek model, uske maang sakne wale functions ka ek set, ek loop aur rukne ka ek niyam milkar ek *AI agent* banate hain. Sahaj mein is shabd ka pehle se ek matlab tha, kyunki Farah ke staff support agents the. Anaya ne turant tay kar diya: uske log support agents the aur machine ke AI agents.

## Label par likhe shabd

Imran ne pehla function khud likha. Woh ek number leta tha aur batata tha ki us number ka order maujood hai ya nahi, aur kis customer ka hai. Usne use ek line ka vivaran diya aur chalaya, aur model ne galat function maanga. Toolbox mein do the, ek jo order dekhta tha aur ek jo payment dekhta tha. Pehle ke vivaran mein poora yeh likha tha: "Customer ke number ke baare mein jaankari dekhta hai." Model ne use saadhe vaakya ki tarah padha aur doosra chuna.

"Woh label padhta hai," Imran ne kaha. "Chunne ka bas yahi tantra hai." Agar label dhundhla hai toh model galat function chunta hai, jo ek likhne ki galti hai, samajh ki failure nahi.

Table: Ek dhundhla aur ek achha tool description
| | Vivaran |
| --- | --- |
| Dhundhla | Customer ke number ke baare mein jaankari dekhta hai |
| Achha | Batata hai ki is theek number ka order maujood hai ya nahi, aur woh kis customer ka hai. Payment history, raashi ya pate nahi lautata. Payments ke liye look_up_payment istemaal karo |

Achha *tool description* batata hai ki function kya lautata hai, kya nahi lautata, aur kab doosra istemaal karna hai. Milte-julte function ka naam vivaran ke andar likhne se woh uljhan pehle hi rok di jaati hai jo zyadatar teams launch ke baad dhoondhti hain. Imran ne ise system ki sabse kam sarahi gayi code ki line kaha, kyunki tool description angrezi mein likha code hai.

## Har round pichhle se mehnga

Loop kaam kiya. Ek baarah ankon ka number wala message aaya, aur finder ne kaha ki woh Aadhaar number ya order number ho sakta hai. Model ne ek look-up maanga, program ne use chalaya, aur jawaab aaya: us number ka ek order maujood hai. Model ne tay kiya ki woh order number hai, aur guard ne use chhod diya.

Anaya ne phir poochha ki isme kharcha kitna hai. Ek call lagbhag baarah sau token ki hai, Imran ne kaha, par yeh ek se zyada call thi. Loop mein har round par ab tak ki poori baatcheet dobara bheji jaati hai, tool ke jawaab ke saath.

Table: Chhe kadamon ke loop mein bheje gaye tokens
| Kadam | Bheje gaye tokens |
| --- | --- |
| 1 | 1,200 |
| 2 | 1,500 |
| 3 | 1,800 |
| 4 | 2,100 |
| 5 | 2,400 |
| 6 | 2,700 |
| Kul | 11,700 |

Chhe kadam ek call se lagbhag das guna mehnge pade. Figure Imran ke hain aur is udaharan ke hain. Aam niyam yeh hai ki input kadamon se zyada tezi se badhta hai, kyunki har kadam pichhle sab ko saath le jaata hai. Jo agent plan se do kadam zyada leta hai woh bill doguna kar sakta hai, isliye kitne kadam ki ijaazat hai yeh ek faisla hai, aur uski keemat hai.

## Chaar kharab din

Agle din Imran ne loop ko jaanboojh kar chaar tareekon se toda, yeh dikhane ke liye ki jab cheezein galat hoti hain toh aisi machine kya karti hai.

Table: Loop chaar tareekon se fail hua
| Failure | Model ne kya kiya |
| --- | --- |
| Order system dheema tha aur look-up time out ho gaya | Phir koshish ki, aur phir, aur chaudahvin koshish tak wahi look-up maang raha tha, badhte kharche par |
| Function ne ek error message lautaya | Error ko nateeja samajhkar usse ek aatmavishwaas bhara vaakya likh diya |
| Model ne aisa function bulaya jo tha hi nahi | Function gadh liya, sahi lagne wale arguments ke saath |
| Do functions ne ek doosre ka kaam ulta kiya | Un dono ke beech bina ant ke aata-jaata raha |

"In mein se har ek ek control ki samasya hai," Imran ne kaha. Model kam samajhdaar nahi hua. Use galat hone ke asimit mauke diye gaye. Usne ek file kholi aur sabse upar ek line joda: adhiktam paanch round, uske baad ruko aur kaho ki tay nahi kar paaya.

::: key Loop mein sabse pehle jo likhna hai
Wahi line *step limit* hai. Model use tay nahi karta aur uspe bharosa nahi kiya ja sakta, isliye program ko karna padta hai. Teams ise aksar bhool jaati hain. Jis loop mein rukne ka niyam nahi, woh agent nahi hai. Woh ek leak hai.
:::

## Padhna aur karna

Hafte ke ant mein Farah ne ek prastaav rakha. Agar model ek order dekh sakta hai, toh kya woh customer ko message bhi bhej sakta hai? Jab guard koi number chhupaye, toh woh turant keh sakta tha, "kripya yahan Aadhaar share na karein". Anaya ko is vichaar ki khinchaav mehsoos hui. Jo customer pehchaan ka number type karta hai use pyaar se bataya jaana chahiye ki woh zaroori nahi hai.

Imran ne sir hilaya, vichaar par nahi balki kehne ke tareeke par. Functions do tarah ke hote hain. Jo padhte hain woh theek ho sakte hain: sabse bura yeh hai ki machine ko kharab jaankari mili aur team phir koshish karti hai. Jo karte hain, jaise message bhejna, bill bharna, row mitana ya slot book karna, wapas nahi liye ja sakte. Message ja chuka hai aur customer ne use dekh liya hai.

Table: Jo functions padhte hain aur jo karte hain
| | Padhte hain | Karte hain |
| --- | --- | --- |
| Udaharan | Order dekhna; table padhna | Message bhejna; bill bharna; row mitana |
| Agar galat hua | Model ko kharab jaankari milti hai; phir koshish karo | Kaam ho chuka hai aur wapas nahi ho sakta |
| Niyantran | Step limit ke andar chalne do | Har ek ko insaan manzoor kare, ya kaam itna chhota aur tay ho ki galat ho hi na sake |

Model message bhej sakta hai ya nahi yeh ek product faisla hai, aur sawaal yeh hai ki loop mein insaan kahan khada hota hai. Team ne ise jaldi tay kar liya, kyunki doosra vikalp maujood tha. Guard customers ko kabhi nahi likhega. Ek chhota tay notice, Farah ka likha teeno bhashaon mein aur Lakshmi ka manzoor kiya hua, jab bhi koi number chhupaya jaayega tab dikhaya jaayega. Machine tay karegi ki kab dikhana hai. Insaanon ne tay kiya tha ki woh kya kehta hai. Anaya ko yeh us design se kaafi behtar laga jo usne maanga tha.

## Saaraansh

Model kuch chala nahi sakta; woh sirf maang sakta hai. Tool calling mein program upalabdh functions batata hai, model ek ko bulaane ka anurodh karta hai, program use chalata hai aur nateeja wapas bhejta hai, aur yeh tab tak dohraata hai jab tak model antim jawaab nahi likhta ya koi cheez use rok nahi deti.

- Model functions ko unke vivaran padhkar chunta hai, isliye dhundhla vivaran ek bug hai.
- Is tarah ka loop ek AI agent hai. Har round pichhla sab bhejta hai, isliye kharcha kadamon se zyada tezi se badhta hai.
- Agent ki zyadatar failures control ki failures hain, samajh ki nahi, isliye program ka tay kiya step limit pehli cheez hai jo likhni chahiye.
- Jo functions sirf padhte hain unhe chalne diya ja sakta hai. Jo karte hain unhe wapas nahi liya ja sakta, aur wahan insaan, ya pehle se likha tay message, hona chahiye.
