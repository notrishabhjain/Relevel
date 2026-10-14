---
title: Machine Ko Haath Dena
summary: 12 digits ka order number bilkul Aadhaar number jaisa dikhta hai, aur dono mein farq karne ka ek hi tareeka hai, use look up karna. Is chapter mein tool calling, tool descriptions, AI agents aur step limits aate hain, dikhta hai ki ek loop ki cost kaise badhti hai, aur woh actions alag kiye jaate hain jo padhte hain aur woh jo kuch karte hain.
course: ch9
goals:
  - bata paana ki tool calling ek model aur ek program ke beech ka loop kaise hai
  - samjha paana ki tool description English mein likha hua code kyun hai
  - hisaab laga paana ki ek agent ki cost uske steps ke saath kaise badhti hai
  - bata paana ki step limit kyun zaroori hai aur loop mein insaan ki jagah kahan hai
terms:
  - tool calling | model ko yeh karne dena ki woh aapke program se ek function chalane ko kahe, function ka naam aur arguments batakar; program use chalata hai aur result wapas bhej deta hai | tool call, tool calls
  - tool description | text ki woh kuch lines jo model ko batati hain ki function kya karta hai, kya wapas deta hai aur kya nahi; model unhe padhkar function chunta hai, isliye vague description ek bug hai | tool descriptions
  - AI agent | ek model, functions ka ek set jo woh maang sakta hai, ek loop, aur kab rukna hai uska ek rule | AI agents
  - step limit | zyada se zyada kitne rounds ek AI agent le sakta hai rukne se pehle, jo program tay karta hai, model par kabhi nahi chhoda jaata | step limits
---

12 digits ka ek order number team ke kaam mein baar-baar laut kar aa raha tha. Woh sorting test mein aaya, jahan chaar order numbers ko Aadhaar number kaha gaya tha aur guard unhe chhupa deta. Woh edge cases ki list mein dobara aaya. Farah ke agents ko apna kaam karne ke liye order numbers dekhne padte the, aur customers unhe hamesha type karte the.

Dikkat yeh thi ki aankh ko bhi aur kisi bhi rule ko bhi, order number aur Aadhaar number ek jaise dikhte the. Dono 12 digits ke hote hain, kabhi 4-4 ke groups mein, aur digits mein kuch bhi nahi batata ki kaun sa kaun hai.

Ek Tuesday ko Imran Qureshi ne kaha ki jaanne ka sirf ek tareeka hai. Order system se poochhiye. Is chapter mein aap dekhenge ki model ko yeh karne kaise diya jaata hai, isme kya kharch lagta hai, aur use kahan rokna padta hai.

## Case: ek number jo do cheezon mein se kuch bhi ho sakta hai

Ab tak model ne sirf ek tarah ka kaam kiya tha. Woh text padhta hai aur text likhta hai, aur phir koi insaan ya program uska likha padhta hai. Imran kuch alag chahta tha. Woh chahta tha ki model keh sake, "Mujhe pakka nahi pata ki yeh number kya hai," aur phir orders table mein look-up maange.

## Aisa model jo maang sakta hai

Yeh asli baat hai. Model kuch chala nahi sakta. Woh sirf maang sakta hai. Ek aise colleague ko socchiye jiske paas system ka access nahi hai, toh woh aapko ek note bhejta hai: "Please mere liye order 4521 check kar do." Aap check chalate hain aur jawaab wapas bhejte hain. Model bhi aise hi kaam karta hai, aur intezaam simple hai. Imran ne ise ek card par paanch steps mein likha.

1. Request model ko available functions bata deti hai. Har ek ka ek naam, ek kaam aur woh arguments hote hain jo woh leta hai. Yeh description bhi bas aur text hai.
2. Agar model ko koi function chahiye, toh woh prose ki jagah ek request ke saath reply karta hai: yeh function in arguments ke saath chalao.
3. Function program chalata hai, model nahi.
4. Program result ko ek aur message ki tarah wapas bhejta hai.
5. Model ya toh ek aur call maangta hai ya apna final jawaab likhta hai. Loop tab tak chalta hai jab tak model ruk na jaye ya program use rok na de.

::: def Tool calling
Model ko yeh karne dena ki woh kisi program se ek function chalane ko kahe, function ka naam aur arguments batakar. Program use chalata hai aur result wapas bhej deta hai. Jo kuch bhi "AI actions leta hai" kehkar bataya jaata hai, jaise kuch look up karna, slot book karna ya record update karna, uske peeche yahi mechanism hai. Andar se yeh sirf text ka aana-jaana hai, jisme beech mein aam code kaam karta hai.
:::

Sab ek saath jodiye toh ek model, functions ka ek set jo woh maang sakta hai, ek loop, aur kab rukna hai uska rule, milkar ek *AI agent* banate hain. Sahaj mein yeh word pehle se kuch matlab rakhta tha, kyunki Farah ke staff support agents the. Anaya ne turant faisla kar diya. Uske log support agents hain, aur machine ke AI agents.

## Label par likhe words

Pehla function Imran ne khud likha. Woh ek number leta tha aur wapas deta tha ki us number ka order maujood hai ya nahi, aur woh kis customer ka hai. Usne use ek line ka description diya aur chalaya. Model ne galat function maanga.

Toolbox mein do the: ek jo order look up karta tha, aur ek jo payment. Pehle ka description poora yeh tha, "Looks up information about a customer’s number." Model ne use ek seedha sentence padha aur doosra chun liya.

"Woh label padhta hai," Imran ne kaha. "Chunne ka mechanism bas itna hi hai." Agar label vague hai, toh model galat function chunta hai. Yeh likhne ki galti hai. Yeh intelligence ki failure nahi hai.

Table: Ek vague aur ek achha tool description
| | Description |
| --- | --- |
| Vague | Looks up information about a customer’s number |
| Achha | Returns whether an order exists with this exact number, and the customer it belongs to. Does not return payment history, amounts or addresses. For payments, use look_up_payment instead |

Ek achha *tool description* batata hai ki function kya wapas deta hai, kya wapas nahi deta, aur kab doosra function use karna hai. Description ke andar milte-julte function ka naam likhne se woh gadbad pehle hi ruk jaati hai jo zyadatar teams launch ke baad dhoondhti hain. Imran ne ise system ki sabse underrated line of code kaha, kyunki tool description English mein likha code hai.

## Har round pichhle se zyada mehnga

Loop chal gaya. 12 digits ke number wala ek message aaya, aur finder ne kaha ki yeh Aadhaar number ya order number ho sakta hai. Model ne lookup maanga, aur program ne use chalaya. Jawaab aaya: is number ka ek order maujood hai. Model ne tay kiya ki yeh order number hai, aur guard ne use chhod diya.

Phir Anaya ne poochha ki iski cost kya hai. Ek call lagbhag 1,200 tokens ki hoti hai, Imran ne kaha, lekin yeh ek se zyada call thi. Loop ke har round mein ab tak ki poori conversation dobara bheji jaati hai, aur tool ka jawaab ant mein jud jaata hai.

Table: 6 steps ke loop mein bheje gaye tokens
| Step | Bheje gaye tokens |
| --- | --- |
| 1 | 1,200 |
| 2 | 1,500 |
| 3 | 1,800 |
| 4 | 2,100 |
| 5 | 2,400 |
| 6 | 2,700 |
| Total | 11,700 |

6 steps ki cost ek call se lagbhag 10 guna hai. Yeh figures Imran ke hain, aur isi example ke hain. Zaroori woh aam rule hai. Input steps ki ginti se tez badhta hai, kyunki har step apne saath pichhle sab steps ko le aata hai.

Toh ek agent jo plan se do step zyada leta hai, bill ko double kar sakta hai. Aap kitne steps allow karte hain, yeh ek decision hai, aur uski ek keemat hai.

## Chaar bure din

Agli dopahar Imran ne loop ko jaanbujh kar chaar tarah se tod diya. Woh dikhana chahta tha ki aisi machine galat hone par kya karti hai.

Table: Loop ke fail hone ke chaar tareeke
| Failure | Model ne kya kiya |
| --- | --- |
| Order system dheema tha aur lookup time out ho gaya | Usne baar-baar dobara koshish ki. 14vi koshish tak bhi woh wahi lookup maang raha tha, badhti cost ke saath |
| Function ne ek error message wapas diya | Usne error ko result ki tarah padha, aur usse ek confident sentence likh diya |
| Model ne aisa function call kiya jo tha hi nahi | Usne function invent kar liya, sahi dikhne wale arguments ke saath |
| Do functions ek doosre ko undo kar rahe the | Woh dono ke beech bina ant ke aata-jaata raha |

"In mein se har ek control ki problem hai," Imran ne kaha. Model kam capable nahi ho gaya tha. Use bas galat hone ke unlimited mauke de diye gaye the. Usne ek file kholi aur upar ke paas ek line jodi: zyada se zyada 5 rounds, aur uske baad ruko aur bolo ki woh tay nahi kar paaya.

::: key Loop mein sabse pehle kya likhna hai
Woh line *step limit* hai. Model ise tay nahi karta, aur us par bharosa nahi kiya ja sakta, isliye program ko karna padta hai. Teams ise hairaan karne wali baar bhool jaati hain. Jis loop mein rukne ka rule nahi hai, woh agent nahi hai. Woh ek leak hai.
:::

## Padhna aur karna

Hafte ke ant mein Farah ne ek suggestion di. Agar model ek order look up kar sakta hai, toh kya woh customer ko message bhi bhej sakta hai? Jab guard koi number chhupaye, toh woh turant keh sakta hai, "Please yahan apna Aadhaar share mat kijiye." Anaya ko is idea ka kheench mehsoos hua. Jo customer identity number type karta hai, use pyaar se bataya jaana chahiye ki iski zaroorat nahi hai.

Imran ne sir hilaya. Woh idea ke khilaaf nahi tha. Woh uske kehne ke tareeke ke khilaaf tha. Functions do tarah ke hote hain, usne kaha.

Jo functions padhte hain, unse ubar sakte hain. Zyada se zyada, machine ko galat jaankari milti hai aur team dobara koshish karti hai. Jo functions kuch karte hain, jaise message bhejna, bill bharna, row delete karna ya slot book karna, unhe wapas nahi liya ja sakta. Message ja chuka hai, aur customer ne use dekh liya hai.

Table: Jo functions padhte hain aur jo functions kuch karte hain
| | Padhte hain | Karte hain |
| --- | --- | --- |
| Examples | Order look up karna; table padhna | Message bhejna; bill bharna; row delete karna |
| Agar galat ho jaye | Model ko galat jaankari milti hai, aur aap dobara koshish karte hain | Action ho chuka hai aur undo nahi ho sakta |
| Control | Chalne dijiye, step limit ke andar | Har ek ko ek insaan approve kare, ya action itna chhota aur fixed ho ki galat ho hi na sake |

Model message bhej sakta hai ya nahi, yeh ek product decision hai. Asli sawaal yeh hai ki loop mein insaan kahan khada hai. Team ne ise jaldi tay kar liya, kyunki unke paas doosra option khula tha. Guard customers ko kuch likhega hi nahi. Uski jagah Farah pehle se ek chhota fixed notice likhegi, teeno languages mein, aur Lakshmi use approve karegi. Jab bhi koi number chhupaya jaayega, woh dikhaya jaayega.

Toh machine tay karti hai ki notice kab dikhana hai, aur insaan tay karte hain ki usme kya likha hai. Anaya ko yeh design us design se bahut behtar laga jo usne maangi thi.

## Summary

Model kuch chala nahi sakta; woh sirf maang sakta hai. Tool calling mein program available functions batata hai. Model ek ko call karne ki request ke saath reply karta hai. Program use chalata hai aur result wapas bhejta hai. Yeh tab tak dohrata hai jab tak model final jawaab na likh de ya koi cheez use rok na de.

- Model functions ke beech unke descriptions padhkar chunta hai, isliye vague description ek bug hai.
- Is tarah ka loop ek AI agent hai. Har round pichhla sab kuch dobara bhejta hai, isliye cost steps ki ginti se tez badhti hai.
- Zyadatar agent failures control ki failures hain, intelligence ki nahi, isliye program ka tay kiya hua step limit sabse pehle likhne ki cheez hai.
- Jo functions sirf padhte hain unhe chalne diya ja sakta hai. Jo functions kuch karte hain unhe undo nahi kiya ja sakta, aur wahan ek insaan, ya pehle se likha fixed message, hona chahiye.

Agle chapter mein aap dekhenge ki jab aap is sab ko model ko bahut zyada padhne ke liye bhejkar hal karne ki koshish karte hain, toh kya hota hai.
