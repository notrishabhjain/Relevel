/* Hinglish for the Phase 2 updates (November 2026): latency numbers, pass^k, cost per
   successful answer, the DPDP Rules 2025, EU dates and standards, OWASP Agentic Top 10, CERT-In.
   Keyed on the English. */
Object.assign(window.HING = window.HING || {}, {
  "Last verified: November 2026":
    "Aakhri baar jaancha gaya: November 2026",
  "Two numbers for the wait: TTFT and TPOT":
    "Intezaar ke do number: TTFT aur TPOT",
  "Streaming splits one wait into two parts, and each part has its own name. Teams that run models measure both.":
    "Streaming ek intezaar ko do hisson mein baant deta hai, aur har hisse ka apna naam hai. Models chalane wali teams dono ko naapti hain.",
  "<strong>TTFT (time to first token).</strong> How long until the first word arrives. The model must first read your whole prompt. This reading step is called <em>prefill</em>. So a longer prompt means a longer TTFT.":
    "<strong>TTFT (time to first token).</strong> Pehla shabd aane mein kitna samay lagta hai. Model ko pehle aapka poora prompt padhna padta hai. Is padhne wale kadam ko <em>prefill</em> kehte hain. Isliye lamba prompt, lamba TTFT.",
  "<strong>TPOT (time per output token).</strong> The average gap between one word and the next, once words start to flow. This writing step is called <em>decode</em>. Some tools call the same idea ITL (inter-token latency).":
    "<strong>TPOT (time per output token).</strong> Shabd aana shuru hone ke baad, ek shabd aur agle shabd ke beech ka ausat faasla. Is likhne wale kadam ko <em>decode</em> kehte hain. Kuch tools isi baat ko ITL (inter-token latency) kehte hain.",
  "The total time is TTFT plus the time to write the rest. Say a reply has 300 tokens, a TTFT of 0.8 seconds and a TPOT of 20 milliseconds. It takes about 0.8 + 6 = 6.8 seconds.":
    "Kul samay TTFT plus baaki likhne ka samay hai. Maan lijiye ek jawaab mein 300 tokens hain, TTFT 0.8 second hai aur TPOT 20 millisecond. Use lagbhag 0.8 + 6 = 6.8 second lagenge.",
  "A busy server also shares its time between many users. A new long prompt can make everyone else’s words pause while it is read. Many servers now cut long prompts into pieces and read them between other people’s words. This is called <em>chunked prefill</em>. Your first word may come a little later, but nobody’s reply freezes.":
    "Ek vyast server apna samay kai users mein baant’ta hai. Ek naya lamba prompt padhe jaate samay baaki sabke shabd ruk sakte hain. Ab kai servers lambe prompts ko tukdon mein kaat kar doosron ke shabdon ke beech mein padhte hain. Ise <em>chunked prefill</em> kehte hain. Aapka pehla shabd thoda der se aa sakta hai, par kisi ka jawaab atakta nahi.",
  "Which number, and what you would change":
    "Kaunsa number, aur aap kya badlenge",
  "Users say your chat “takes ages to start”, but once it starts it reads fast. Last week you added a long policy document to every prompt. Which number got worse, TTFT or TPOT? What would you change first?":
    "Users kehte hain ki aapka chat “shuru hone mein bahut der lagata hai”, par shuru hone ke baad tezi se chalta hai. Pichhle hafte aapne har prompt mein ek lamba policy document jod diya. Kaunsa number bigda, TTFT ya TPOT? Aap pehle kya badlenge?",
  "TTFT got worse. The model reads the whole policy before it writes the first word, so the longer prompt adds to the start. TPOT barely changes. Send fewer pages, or cache the fixed part of the prompt (prompt caching, Chapter 10). Then measure TTFT again.":
    "TTFT bigda. Model pehla shabd likhne se pehle poori policy padhta hai, isliye lamba prompt shuruaat mein samay jodta hai. TPOT lagbhag nahi badalta. Kam pages bhejiye, ya prompt ke fixed hisse ko cache kijiye (prompt caching, Chapter 10). Phir TTFT dobara naapiye.",
  "Report both numbers at p50 and p95, not only the total. A fast TPOT cannot rescue a slow start.":
    "Dono number p50 aur p95 par report kijiye, sirf kul samay nahi. Tez TPOT dheemi shuruaat ko nahi bacha sakta.",
  "The names TTFT, TPOT and ITL follow the NVIDIA NIM and vLLM benchmarking guides. Chunked prefill comes from the Sarathi-Serve paper (Agrawal and others, 2024, arXiv:2403.02310). Tools average these numbers in slightly different ways, so read your own tool’s definition.":
    "TTFT, TPOT aur ITL ke naam NVIDIA NIM aur vLLM ki benchmarking guides se liye gaye hain. Chunked prefill Sarathi-Serve paper (Agrawal aur saathi, 2024, arXiv:2403.02310) se aaya hai. Tools in numbers ka ausat thode alag tareeke se nikaalte hain, isliye apne tool ki definition padhiye.",
  "One try or every try: pass@k and pass^k":
    "Ek koshish ya har koshish: pass@k aur pass^k",
  "A model or an agent does not give the same answer every time. So you often run each test case several times. There are two ways to score those runs, and they answer different questions.":
    "Model ya agent har baar ek hi jawaab nahi deta. Isliye aap aksar har test case kai baar chalate hain. Un runs ko score karne ke do tareeke hain, aur dono alag sawaalon ka jawaab dete hain.",
  "<strong>pass@k.</strong> Did at least one of k tries succeed? Use it when one good answer is enough, for example when a person picks the best of three drafts.":
    "<strong>pass@k.</strong> Kya k koshishon mein se kam se kam ek safal hui? Ise tab use kijiye jab ek achha jawaab kaafi ho, jaise jab koi insaan teen drafts mein se sabse achha chunta hai.",
  "<strong>pass^k</strong> (say “pass hat k”). Did all k tries succeed? Use it when every user must get it right every time, for example an agent that files a refund.":
    "<strong>pass^k</strong> (boliye “pass hat k”). Kya saari k koshishein safal huin? Ise tab use kijiye jab har user ko har baar sahi milna zaroori ho, jaise refund file karne wala agent.",
  "The two numbers move apart fast. Say one try succeeds 75% of the time, and the tries do not affect each other. Then pass@3 is 1 − 0.25³, about 98%. But pass^3 is 0.75³, about 42%. The same system looks great on one number and shaky on the other.":
    "Dono number tezi se alag hote hain. Maan lijiye ek koshish 75% baar safal hoti hai, aur koshishein ek doosre par asar nahi daaltin. Tab pass@3 hai 1 − 0.25³, lagbhag 98%. Par pass^3 hai 0.75³, lagbhag 42%. Wahi system ek number par shandaar dikhta hai aur doosre par kamzor.",
  "For a feature real users rely on, report pass^k. A demo can live on pass@k. A product cannot.":
    "Jis feature par asli users bharosa karte hain, uske liye pass^k report kijiye. Demo pass@k par chal sakta hai. Product nahi.",
  "What you would report":
    "Aap kya report karenge",
  "Your support agent solves a test case on 80% of tries. A manager wants to say “it works 99% of the time”, because pass@3 is above 99%. What would you report instead, and why?":
    "Aapka support agent ek test case 80% koshishon mein hal karta hai. Ek manager kehna chahte hain ki “yeh 99% baar chalta hai”, kyunki pass@3 99% se upar hai. Aap uski jagah kya report karenge, aur kyun?",
  "Report pass^3, which is 0.8³, about 51%. A customer gets one try, not three. pass@3 says the agent <em>can</em> solve the case. pass^3 says how often it solves it every time. Give both numbers, and say which one the customer feels.":
    "pass^3 report kijiye, jo 0.8³ hai, lagbhag 51%. Customer ko ek koshish milti hai, teen nahi. pass@3 batata hai ki agent case hal <em>kar sakta</em> hai. pass^3 batata hai ki woh kitni baar har baar hal karta hai. Dono number dijiye, aur bataiye ki customer kaunsa mehsoos karta hai.",
  "The τ-bench paper (Yao and others, 2024) introduced pass^k to measure this kind of reliability.":
    "τ-bench paper (Yao aur saathi, 2024) ne is tarah ki bharosemandi naapne ke liye pass^k shuru kiya.",
  "pass^k comes from the τ-bench paper (arXiv:2406.12045). Anthropic’s engineering guide “Demystifying evals for AI agents” explains when to use each one. The 75% and 80% examples are this course’s own arithmetic.":
    "pass^k τ-bench paper (arXiv:2406.12045) se aata hai. Anthropic ki engineering guide “Demystifying evals for AI agents” samjhati hai ki kab kaunsa use karein. 75% aur 80% ke udaharan is course ka apna hisaab hain.",
  "Cost per successful answer":
    "Cost per successful answer (har safal jawaab ka kharcha)",
  "Cost per query counts every call. But a call that fails and must run again buys nothing. So also track the <strong>cost per successful answer</strong>: the cost of one try, divided by the share of tries that work.":
    "Cost per query har call ko ginta hai. Par jo call fail ho aur dobara chalani pade, woh kuch nahi khareedti. Isliye <strong>cost per successful answer</strong> bhi track kijiye: ek koshish ka kharcha, bhaag safal koshishon ka hissa.",
  "The second model looks cheaper per try. Per good answer, the two cost the same. And the cheaper one makes more users wait for a retry.":
    "Doosra model har koshish par sasta dikhta hai. Har achhe jawaab par dono ka kharcha barabar hai. Aur sasta wala zyada users ko retry ka intezaar karwata hai.",
  "Cache prices changed in 2026, so check them each time. On Anthropic’s API, writing a prompt to the cache costs more than normal input: 1.25 times for a five-minute cache, or 2 times for a one-hour cache. Reading it back costs a tenth, and less on the newest models. On OpenAI’s API, from GPT-5.6, writing to the cache is charged too. An old rule like “cached input is half price” is now wrong.":
    "Cache ke daam 2026 mein badle, isliye har baar jaanchiye. Anthropic ke API par, prompt ko cache mein likhna normal input se mehenga hai: paanch minute ke cache ke liye 1.25 guna, ya ek ghante ke cache ke liye 2 guna. Wapas padhne ka kharcha dasvaan hissa hai, aur naye models par isse bhi kam. OpenAI ke API par, GPT-5.6 se, cache mein likhne ka bhi paisa lagta hai. “Cached input aadhe daam par” jaisa purana niyam ab galat hai.",
  "Agents add one more cost: the loop. An agent that retries a tool again and again can spend a month’s budget in an hour. Give every agent a hard cap on steps and on spend for each task. Stop it when it reaches the cap.":
    "Agents ek aur kharcha jodte hain: loop. Jo agent ek tool ko baar baar retry karta hai, woh ek ghante mein mahine ka budget kharch kar sakta hai. Har agent ko har task ke liye steps aur kharche ki pakki seema (cap) dijiye. Seema par pahunchte hi use rok dijiye.",
  "Set budgets in three stages, like learning to ride a cycle. <strong>Crawl:</strong> a small daily cap, and a person reads every bill. <strong>Walk:</strong> a cap for each team and each feature, with an alert at 80%. <strong>Run:</strong> costs split by feature and by customer, and checked against value every week.":
    "Budget teen charanon mein tay kijiye, jaise cycle chalana seekhna. <strong>Crawl:</strong> chhoti rozana seema, aur ek insaan har bill padhta hai. <strong>Walk:</strong> har team aur har feature ki seema, 80% par alert ke saath. <strong>Run:</strong> kharcha feature aur customer ke hisaab se baanta hua, aur har hafte value se milaya hua.",
  "To split costs by feature, many finance teams use one shared format for bills, the <strong>FOCUS billing format</strong> from the FinOps Foundation. Version 1.4 is current. Today AI calls appear in it like any other line on the bill. Version 1.5, planned for December 2026, is meant to add model names and token counts.":
    "Kharche ko feature ke hisaab se baantne ke liye kai finance teams ek saajha bill dhaancha use karti hain, FinOps Foundation ka <strong>FOCUS billing format</strong>. Version 1.4 abhi ka hai. Aaj AI calls usmein bill ki kisi bhi aur line jaisi dikhti hain. Version 1.5, jo December 2026 ke liye planned hai, model ke naam aur token counts jodne ke liye hai.",
  "Your working":
    "Aapka hisaab",
  "Model A costs ₹0.30 per try and works 60% of the time. Model B costs ₹0.45 per try and works 90% of the time. Which is cheaper per successful answer?":
    "Model A ki ek koshish ₹0.30 ki hai aur 60% baar chalta hai. Model B ki ek koshish ₹0.45 ki hai aur 90% baar chalta hai. Har safal jawaab par kaunsa sasta hai?",
  "They cost the same: ₹0.30 ÷ 0.6 = ₹0.50, and ₹0.45 ÷ 0.9 = ₹0.50. So cost does not decide it. Model B wins, because fewer users wait for a retry, and every retry also adds time. Always divide by the success rate before you compare prices.":
    "Dono ka kharcha barabar hai: ₹0.30 ÷ 0.6 = ₹0.50, aur ₹0.45 ÷ 0.9 = ₹0.50. Isliye kharcha faisla nahi karta. Model B jeet’ta hai, kyunki kam users retry ka intezaar karte hain, aur har retry samay bhi jodta hai. Daam milaane se pehle hamesha success rate se bhaag dijiye.",
  "Put cost per successful answer next to cost per query in your cost model.":
    "Apne cost model mein cost per query ke bagal mein cost per successful answer rakhiye.",
  "Cache prices: Anthropic’s pricing and prompt-caching pages, and OpenAI’s prompt-caching guide. FOCUS: focus.finops.org (version 1.4, ratified on 4 June 2026) and the FOCUS release plan for 1.5. Prices change often, so check the official page on the day you quote one.":
    "Cache ke daam: Anthropic ke pricing aur prompt-caching pages, aur OpenAI ki prompt-caching guide. FOCUS: focus.finops.org (version 1.4, 4 June 2026 ko manzoor) aur 1.5 ka FOCUS release plan. Daam aksar badalte hain, isliye jis din daam bataayein, us din official page jaanchiye.",
  "The DPDP Rules 2025: how and when":
    "DPDP Rules 2025: kaise aur kab",
  "The Act says what you must do. The <strong>DPDP Rules 2025</strong> say how, and when. The government notified them on 13 November 2025. They start in three steps.":
    "Act batata hai ki aapko kya karna hai. <strong>DPDP Rules 2025</strong> batate hain kaise, aur kab. Sarkar ne inhe 13 November 2025 ko notify kiya. Yeh teen kadamon mein shuru hote hain.",
  "<strong>13 November 2025.</strong> Definitions, and the Data Protection Board (the body that hears complaints and can fine).":
    "<strong>13 November 2025.</strong> Paribhashayein, aur Data Protection Board (woh sanstha jo shikayatein sunti hai aur jurmana laga sakti hai).",
  "<strong>13 November 2026.</strong> Consent Managers: registered companies that help people give, see and take back their consent.":
    "<strong>13 November 2026.</strong> Consent Managers: registered companies jo logon ko consent dene, dekhne aur wapas lene mein madad karti hain.",
  "<strong>13 May 2027.</strong> Most duties: notices, security, breach reporting, keeping and deleting data, children’s data, and people’s rights.":
    "<strong>13 May 2027.</strong> Zyadatar duties: notice, suraksha, breach reporting, data rakhna aur mitana, bachchon ka data, aur logon ke adhikar.",
  "Three rules matter most for an AI tool.":
    "AI tool ke liye teen niyam sabse zyada maayne rakhte hain.",
  "<strong>Report a breach fast.</strong> Tell the affected people without delay, in plain words. Tell the Board without delay too, then send it a full report within 72 hours.":
    "<strong>Breach jaldi report kijiye.</strong> Prabhavit logon ko bina der kiye, saral shabdon mein bataiye. Board ko bhi bina der kiye bataiye, phir 72 ghante ke andar use poori report bhejiye.",
  "<strong>Children need a parent’s consent.</strong> Before you use a child’s data, check that a real adult parent or guardian has agreed.":
    "<strong>Bachchon ke liye maata-pita ka consent chahiye.</strong> Bachche ka data use karne se pehle jaanchiye ki ek asli vayask maata-pita ya guardian ne haan kahi hai.",
  "<strong>Big data handlers have extra duties.</strong> The government can name an organisation a <strong>Significant Data Fiduciary (SDF)</strong>. An SDF must do a data protection impact assessment and an audit every year. It must also check that its algorithms do not put people’s rights at risk.":
    "<strong>Bade data sambhalne walon ki extra duties hain.</strong> Sarkar kisi sanstha ko <strong>Significant Data Fiduciary (SDF)</strong> ghoshit kar sakti hai. SDF ko har saal data protection impact assessment aur audit karna hota hai. Use yeh bhi jaanchna hota hai ki uske algorithms logon ke adhikaron ko khatre mein na daalein.",
  "Who you tell, and when":
    "Aap kise batayenge, aur kab",
  "On a Friday evening, your team finds that the tool’s log lines kept full customer messages, and an outside vendor could read them. The main duties of the Rules are in force. Who must you tell, and how soon?":
    "Ek Friday shaam aapki team ko pata chalta hai ki tool ki log lines ne customers ke poore messages rakhe, aur ek bahari vendor unhe padh sakta tha. Rules ki mukhya duties laagu hain. Aapko kise batana hai, aur kitni jaldi?",
  "Tell the affected customers without delay, in plain words: what happened, what it means for them, what you are doing, and whom to contact. Tell the Data Protection Board without delay too. Then send the Board a full report within 72 hours. Do not wait for Monday: the 72 hours start when you learn of the breach. Also tell your security team, because CERT-In, India’s cyber agency, has its own 6-hour reporting rule.":
    "Prabhavit customers ko bina der kiye, saral shabdon mein bataiye: kya hua, unke liye iska kya matlab hai, aap kya kar rahe hain, aur kisse sampark karein. Data Protection Board ko bhi bina der kiye bataiye. Phir 72 ghante ke andar Board ko poori report bhejiye. Monday ka intezaar mat kijiye: 72 ghante tab se shuru hote hain jab aapko breach ka pata chalta hai. Apni security team ko bhi bataiye, kyunki CERT-In, India ki cyber agency, ka apna 6 ghante ka reporting niyam hai.",
  "This is why the log line in the next exercise matters. A leak nobody planned for still has a clock.":
    "Isiliye agle exercise ki log line maayne rakhti hai. Jis leak ki kisi ne planning nahi ki, uski bhi ghadi chalti hai.",
  "Dates and duties: PIB’s release on the DPDP Rules 2025 (14 November 2025) and MeitY’s note on the Rules. The 13 May 2027 date may come sooner: in January 2026, MeitY asked for views on a shorter timeline. Check the eGazette before you quote a date.":
    "Taareekhein aur duties: DPDP Rules 2025 par PIB ki release (14 November 2025) aur Rules par MeitY ka note. 13 May 2027 ki taareekh pehle bhi aa sakti hai: January 2026 mein MeitY ne chhoti samay-seema par raay maangi thi. Koi taareekh bataane se pehle eGazette jaanchiye.",
  "The EU AI Act came into force on 1 August 2024. Bans and a duty to train staff in AI basics began on 2 February 2025. Rules for general-purpose models began on 2 August 2025. Most other parts, including the duty to say “this is AI”, apply from 2 August 2026.":
    "EU AI Act 1 August 2024 ko laagu hua. Pabandiyaan aur staff ko AI ki buniyadi training dene ki duty 2 February 2025 se shuru huin. General-purpose models ke niyam 2 August 2025 se shuru hue. Baaki zyadatar hisse, jismein “yeh AI hai” batane ki duty bhi hai, 2 August 2026 se laagu hain.",
  "In July 2026, a new EU law, the Digital Omnibus, moved some dates. High-risk uses such as hiring and loans now apply from 2 December 2027. High-risk AI built into products, such as machines and medical devices, applies from 2 August 2028. Anything that still says “high risk from August 2026” is out of date.":
    "July 2026 mein ek naye EU kaanoon, Digital Omnibus, ne kuch taareekhein aage kar deen. Hiring aur loans jaise high-risk upyog ab 2 December 2027 se laagu hain. Products mein bane high-risk AI, jaise machines aur medical devices, 2 August 2028 se laagu hain. Jo bhi ab tak “high risk August 2026 se” kehta hai, woh purana hai.",
  "EU dates: the EU AI Act Service Desk timeline, and Regulation (EU) 2026/1744 on EUR-Lex. Standards: the iso.org pages for ISO/IEC 42001 and 42005. India: PIB’s release of 5 November 2025 on the guidelines, and RBI’s FREE-AI report of 13 August 2025. Rules change, so check each date against the official source before an interview, and say only what you checked.":
    "EU ki taareekhein: EU AI Act Service Desk ki timeline, aur EUR-Lex par Regulation (EU) 2026/1744. Standards: ISO/IEC 42001 aur 42005 ke iso.org pages. India: guidelines par PIB ki 5 November 2025 ki release, aur RBI ki 13 August 2025 ki FREE-AI report. Niyam badalte hain, isliye interview se pehle har taareekh official source se milaiye, aur sirf wahi kahiye jo aapne jaancha.",
  "Standards, and India’s own guidance":
    "Standards, aur India ka apna margdarshan",
  "Buyers often ask for a standard, not a law. Two ISO standards come up again and again.":
    "Khareedne wale aksar kaanoon nahi, standard maangte hain. Do ISO standards baar baar saamne aate hain.",
  "<strong>ISO/IEC 42001</strong> (2023), the <strong>AI management system standard (ISO 42001)</strong>. It sets out how an organisation runs its AI work: roles, risks, checks and steady improvement. An organisation can be certified against it, like a quality certificate.":
    "<strong>ISO/IEC 42001</strong> (2023), <strong>AI management system standard (ISO 42001)</strong>. Yeh batata hai ki ek sanstha apna AI kaam kaise chalaye: bhoomikayein, khatre, jaanch aur lagatar sudhaar. Sanstha iske against certify ho sakti hai, jaise quality certificate.",
  "<strong>ISO/IEC 42005</strong> (2025), the <strong>AI impact assessment standard (ISO 42005)</strong>. It guides you to judge what one AI system could do to people and to society. It is guidance only, so nobody is certified against it.":
    "<strong>ISO/IEC 42005</strong> (2025), <strong>AI impact assessment standard (ISO 42005)</strong>. Yeh margdarshan deta hai ki ek AI system logon aur samaaj par kya asar daal sakta hai, ise kaise aankein. Yeh sirf margdarshan hai, isliye iske against koi certify nahi hota.",
  "India has chosen guidance first. In November 2025, MeitY published the <strong>India AI Governance Guidelines</strong>. They set out seven principles, starting with “Trust is the Foundation” and “People First”. They are not a law, and they favour voluntary steps such as standards and audits. Binding duties still come from laws such as the DPDP Act and the IT Act, and from sector regulators.":
    "India ne pehle margdarshan chuna hai. November 2025 mein MeitY ne <strong>India AI Governance Guidelines</strong> prakashit keen. Inmein saat siddhant hain, jo “Trust is the Foundation” aur “People First” se shuru hote hain. Yeh kaanoon nahi hain, aur standards aur audits jaise svaichhik kadamon ko badhava dete hain. Zaroori duties ab bhi DPDP Act aur IT Act jaise kaanoonon se, aur sector regulators se aati hain.",
  "In banking and finance":
    "Banking aur finance mein",
  "The Reserve Bank of India’s FREE-AI report (August 2025) uses the same seven principles, with 26 recommendations for banks and lenders. If you build for a bank, read it before the first meeting.":
    "Reserve Bank of India ki FREE-AI report (August 2025) wahi saat siddhant use karti hai, banks aur lenders ke liye 26 sifarishon ke saath. Agar aap bank ke liye bana rahe hain, to pehli meeting se pehle ise padhiye.",
  "Your two sentences":
    "Aapke do vaakya",
  "A client in Pune says: “India has no AI law, so we have no AI duties.” What would you say back, in two sentences?":
    "Pune ke ek client kehte hain: “India mein koi AI kaanoon nahi hai, isliye hamari koi AI duties nahi hain.” Aap do vaakyon mein kya jawaab denge?",
  "India has no single AI law yet, but your tool still handles personal data, so the DPDP Act and its Rules apply, and a bank or insurer also answers to its regulator. The MeitY guidelines are voluntary, but buyers and auditors already ask about them, and about standards such as ISO/IEC 42001.":
    "India mein abhi koi ek AI kaanoon nahi hai, par aapka tool phir bhi personal data sambhalta hai, isliye DPDP Act aur uske Rules laagu hain, aur bank ya insurer apne regulator ko bhi jawaabdeh hai. MeitY guidelines svaichhik hain, par khareedne wale aur auditors unke baare mein, aur ISO/IEC 42001 jaise standards ke baare mein, pehle se poochhte hain.",
  "Keep what is binding apart from what is expected. Both shape the project plan.":
    "Jo zaroori hai aur jo apeksha hai, unhe alag rakhiye. Dono project plan ko aakaar dete hain.",
  "When the eval stops teaching you":
    "Jab eval sikhana band kar de",
  "A test the whole class scores full marks on no longer tells you who is better. Evals (your sets of test cases) have the same problem. When your system passes nearly every case, the eval stops giving you new information. This is called <strong>eval saturation</strong>.":
    "Jis test mein poori class ko poore number milte hain, woh ab nahi batata ki kaun behtar hai. Evals (aapke test cases ke set) ki bhi yahi samasya hai. Jab aapka system lagbhag har case pass kar leta hai, eval naya kuch batana band kar deta hai. Ise <strong>eval saturation</strong> kehte hain.",
  "Do not delete a saturated eval. Move its cases into your regression suite (the checks every release must pass), where a score near 100% is exactly what you want. Then write new, harder cases for the capability eval, so it starts low again and has room to show progress.":
    "Saturated eval ko mitaiye mat. Uske cases ko apne regression suite (woh checks jo har release ko pass karne hote hain) mein daaliye, jahan 100% ke paas ka score bilkul wahi hai jo aap chahte hain. Phir capability eval ke liye naye, mushkil cases likhiye, taaki woh phir neeche se shuru ho aur progress dikhane ki jagah ho.",
  "Kind of eval":
    "Eval ka prakaar",
  "Score you want":
    "Aapko kaisa score chahiye",
  "What it tells you":
    "Yeh kya batata hai",
  "Capability eval":
    "Capability eval",
  "Starts low, then climbs":
    "Neeche se shuru, phir upar chadhta hai",
  "Can the system do something new?":
    "Kya system kuch naya kar sakta hai?",
  "Regression suite":
    "Regression suite",
  "Near 100%":
    "100% ke paas",
  "Did a change break something that worked?":
    "Kya kisi badlaav ne chalti hui cheez tod di?",
  "What you keep, and what you add":
    "Aap kya rakhenge, aur kya jodenge",
  "Your answer key now scores 99% on every release, and the last three changes all scored the same. A teammate says “evals are done”. What do you do with the answer key, and what do you add?":
    "Aapki answer key ab har release par 99% score karti hai, aur pichhle teen badlaavon ka score bhi wahi raha. Ek saathi kehte hain “evals ho gaye”. Aap answer key ka kya karenge, aur kya jodenge?",
  "The answer key is saturated, so it can no longer tell a good change from a bad one. Keep it as a regression suite, so a release that drops below about 99% is stopped. Then write new cases from real failures, such as your error-analysis piles from Chapter 14.5, so the capability eval starts low again. Also check pass^k on the hardest cases.":
    "Answer key saturated hai, isliye ab woh achhe aur bure badlaav mein farq nahi bata sakti. Ise regression suite ki tarah rakhiye, taaki lagbhag 99% se neeche girne wali release ruk jaaye. Phir asli failures se naye cases likhiye, jaise Chapter 14.5 ke aapke error-analysis ke dher, taaki capability eval phir neeche se shuru ho. Sabse mushkil cases par pass^k bhi jaanchiye.",
  "A flat score is a signal to write harder cases, not a sign that the work is finished.":
    "Sapaat score mushkil cases likhne ka sanket hai, kaam khatam hone ka nahi.",
  "The split between capability evals and regression evals, and the idea of saturation, follow Anthropic’s engineering guide “Demystifying evals for AI agents”.":
    "Capability evals aur regression evals ka bantwara, aur saturation ka vichaar, Anthropic ki engineering guide “Demystifying evals for AI agents” se liye gaye hain.",
  "A list for agent risks, and a clock for incidents":
    "Agent ke khatron ki list, aur incidents ki ghadi",
  "In December 2025, the OWASP security community published the <strong>OWASP Agentic Top 10</strong>: the ten main security risks of AI agents. Use it as a checklist for your risk register. Five of them matter for almost every agent you will build.":
    "December 2025 mein OWASP security community ne <strong>OWASP Agentic Top 10</strong> prakashit ki: AI agents ke das mukhya security khatre. Ise apne risk register ki checklist ki tarah use kijiye. Inmein se paanch lagbhag har us agent ke liye maayne rakhte hain jo aap banayenge.",
  "<strong>ASI01 Agent Goal Hijack.</strong> Hidden text changes what the agent is trying to do. It is prompt injection aimed at the goal.":
    "<strong>ASI01 Agent Goal Hijack.</strong> Chhupa hua text badal deta hai ki agent kya karne ki koshish kar raha hai. Yeh goal par nishana saadhne wala prompt injection hai.",
  "<strong>ASI02 Tool Misuse and Exploitation.</strong> The agent uses a real tool in a harmful way, such as a refund tool used to send money out.":
    "<strong>ASI02 Tool Misuse and Exploitation.</strong> Agent ek asli tool ko nuksaandeh tareeke se use karta hai, jaise refund tool se paisa bahar bhejna.",
  "<strong>ASI03 Identity and Privilege Abuse.</strong> The agent acts with more keys than the task needs.":
    "<strong>ASI03 Identity and Privilege Abuse.</strong> Agent task ki zaroorat se zyada chaabiyon ke saath kaam karta hai.",
  "<strong>ASI06 Memory and Context Poisoning.</strong> Bad notes saved in the agent’s memory steer its later tasks.":
    "<strong>ASI06 Memory and Context Poisoning.</strong> Agent ki memory mein save hue galat notes uske baad ke tasks ko galat disha dete hain.",
  "<strong>ASI08 Cascading Failures.</strong> One agent’s mistake flows into the next agent, and grows.":
    "<strong>ASI08 Cascading Failures.</strong> Ek agent ki galti agle agent tak behti hai, aur badhti jaati hai.",
  "The other five are ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI07 Insecure Inter-Agent Communication, ASI09 Human-Agent Trust Exploitation and ASI10 Rogue Agents.":
    "Baaki paanch hain ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI07 Insecure Inter-Agent Communication, ASI09 Human-Agent Trust Exploitation aur ASI10 Rogue Agents.",
  "In India, an incident also starts a clock. Under the <strong>CERT-In 6-hour rule</strong> of April 2022, many organisations must report certain cyber incidents to CERT-In, India’s cyber-security agency, within 6 hours of noticing them. They must keep their system logs for 180 days, in India. Their clocks must match the official time servers of NIC or NPL. And they must name one contact person for CERT-In.":
    "India mein ek incident ghadi bhi shuru kar deta hai. April 2022 ke <strong>CERT-In 6-hour rule</strong> ke tahat kai sansthaon ko kuch cyber incidents dhyaan mein aane ke 6 ghante ke andar CERT-In, India ki cyber-security agency, ko report karne hote hain. Unhe apne system logs 180 din tak, India mein, rakhne hote hain. Unki ghadiyan NIC ya NPL ke official time servers se milni chahiye. Aur unhe CERT-In ke liye ek sampark vyakti tay karna hota hai.",
  "Your agent’s traces are logs too. If you do not keep them for 180 days, with correct times, you cannot answer CERT-In or your own incident review.":
    "Aapke agent ke traces bhi logs hain. Agar aap unhe 180 din tak, sahi samay ke saath, nahi rakhte, to aap CERT-In ko ya apne incident review ko jawaab nahi de sakte.",
  "The risk, and the deadline":
    "Khatra, aur deadline",
  "At 10 a.m., your support agent is caught sending customer files to an outside address, after a poisoned web page told it to. Name the OWASP risk, and say what must happen before 4 p.m.":
    "Subah 10 baje aapka support agent customer files ek bahari address par bhejte hue pakda jaata hai, ek zehreele web page ke kehne par. OWASP khatre ka naam bataiye, aur bataiye ki shaam 4 baje se pehle kya hona chahiye.",
  "This is ASI01 Agent Goal Hijack, and it led to ASI02 Tool Misuse and Exploitation. If CERT-In lists this kind of incident, report it within 6 hours, so before 4 p.m., through your named contact person. Keep the agent’s traces and logs, with their timestamps. Personal data also leaked, so the DPDP breach duties apply as well.":
    "Yeh ASI01 Agent Goal Hijack hai, aur isse ASI02 Tool Misuse and Exploitation hua. Agar CERT-In is tarah ke incident ko list karta hai, to ise 6 ghante ke andar, yaani 4 baje se pehle, apne tay sampark vyakti ke zariye report kijiye. Agent ke traces aur logs unke timestamps ke saath rakhiye. Personal data bhi leak hua, isliye DPDP breach duties bhi laagu hoti hain.",
  "Write the 6-hour step into your incident runbook now. Nobody should read the rules for the first time during an incident.":
    "6 ghante wala kadam abhi apni incident runbook mein likhiye. Kisi ko bhi incident ke dauraan pehli baar niyam nahi padhne chahiye.",
  "OWASP: genai.owasp.org, Top 10 for Agentic Applications (December 2025). CERT-In: Directions No. 20(3)/2022-CERT-In of 28 April 2022, and its FAQs, on cert-in.org.in.":
    "OWASP: genai.owasp.org, Top 10 for Agentic Applications (December 2025). CERT-In: 28 April 2022 ke Directions No. 20(3)/2022-CERT-In, aur unke FAQs, cert-in.org.in par.",
  "DPDP Rules 2025: notified on 13 November 2025, with duties starting in steps up to 13 May 2027":
    "DPDP Rules 2025: 13 November 2025 ko notify hue, duties 13 May 2027 tak kadamon mein shuru hoti hain",
  "India AI Governance Guidelines (5 November 2025): seven principles, non-binding":
    "India AI Governance Guidelines (5 November 2025): saat siddhant, kaanooni roop se zaroori nahi",
  "FREE-AI framework report (13 August 2025): seven principles and 26 recommendations for finance":
    "FREE-AI framework report (13 August 2025): finance ke liye saat siddhant aur 26 sifarishein",
  "Cyber Security Directions of 28 April 2022: 6-hour reporting, 180-day logs, clock sync, a named contact":
    "28 April 2022 ke Cyber Security Directions: 6 ghante mein reporting, 180 din ke logs, ghadi sync, ek tay sampark vyakti",
  "EU AI Act implementation timeline":
    "EU AI Act laagu hone ki timeline",
  "Regulation (EU) 2026/1744, the Digital Omnibus on AI: the new high-risk dates":
    "Regulation (EU) 2026/1744, AI par Digital Omnibus: high-risk ki nayi taareekhein",
  "ISO/IEC 42001:2023, AI management system (certifiable)":
    "ISO/IEC 42001:2023, AI management system (certify ho sakta hai)",
  "ISO/IEC 42005:2025, AI system impact assessment (guidance)":
    "ISO/IEC 42005:2025, AI system impact assessment (margdarshan)",
  "Top 10 for Agentic Applications (December 2025), ASI01 to ASI10":
    "Top 10 for Agentic Applications (December 2025), ASI01 se ASI10",
  "FOCUS billing specification: version 1.4 is current; 1.5, with AI token support, is planned":
    "FOCUS billing specification: version 1.4 abhi ka hai; 1.5, AI token support ke saath, planned hai",
  "Demystifying evals for AI agents: pass@k, pass^k and saturation":
    "Demystifying evals for AI agents: pass@k, pass^k aur saturation",
  "τ-bench, the paper that introduced pass^k":
    "τ-bench, woh paper jisne pass^k shuru kiya",
  "NIM benchmarking metrics: TTFT and inter-token latency":
    "NIM benchmarking metrics: TTFT aur inter-token latency",
  "Sarathi-Serve, the paper behind chunked prefill":
    "Sarathi-Serve, chunked prefill ke peeche ka paper",
  "Prompt caching prices: cache writes and reads by model":
    "Prompt caching ke daam: model ke hisaab se cache likhna aur padhna",
  "Prompt caching guide: write and read prices by model":
    "Prompt caching guide: model ke hisaab se likhne aur padhne ke daam",
  "Last verified":
    "Aakhri baar jaancha gaya",
  "Government of India (PIB)":
    "Bharat Sarkar (PIB)",
  "MeitY":
    "MeitY",
  "Reserve Bank of India":
    "Reserve Bank of India",
  "CERT-In":
    "CERT-In",
  "European Commission":
    "European Commission",
  "EUR-Lex":
    "EUR-Lex",
  "ISO":
    "ISO",
  "FinOps Foundation":
    "FinOps Foundation",
  "Yao and others (2024)":
    "Yao aur saathi (2024)",
  "NVIDIA":
    "NVIDIA",
  "Agrawal and others (2024)":
    "Agrawal aur saathi (2024)",
  "OpenAI":
    "OpenAI",
  "OWASP":
    "OWASP",
  "Anthropic":
    "Anthropic",
});
