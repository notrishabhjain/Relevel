/* Hinglish: the "do this" beats across Part V — the hands-on steps and what
   to expect from each. */
Object.assign(window.HING = window.HING || {}, {

  'Make request-response-JSON-field boring':
    'Request-response-JSON-field ko boring bana dijiye',
  'Call a public endpoint and pull one field out of what comes back. No AI involved. The point is to make the shape of the thing familiar enough to stop noticing it.':
    'Ek public endpoint ko call kijiye aur jo wapas aaye usme se ek field nikaal lijiye. Isme AI hai hi nahi. Maqsad yeh hai ki is cheez ki shakal itni jaani-pehchaani ho jaaye ki aapka dhyaan hi na jaaye.',
  '<code>200</code>, then <code>openai/openai-python</code>. That is the whole shape of every call you have made in this course: a status that says whether it worked, and a body you reach into for the part you wanted.':
    '<code>200</code>, phir <code>openai/openai-python</code>. Is course mein aapne jitni bhi call ki hain sabki bas yahi shakal hai: ek status jo batata hai ki kaam hua ya nahi, aur ek body jisme haath daalkar aap apna hissa nikaalte hain.',
  'Break a contract on purpose':
    'Jaanbujhkar ek contract todiye',
  'Reach for a field that is not there, and catch the failure rather than letting it travel.':
    'Aise field ko chhuiye jo hai hi nahi, aur us failure ko wahin pakad lijiye — aage jaane mat dijiye.',
  'A clear <code>KeyError</code>. That is the good outcome. The dangerous version is the system that finds nothing there, substitutes a blank, and carries on producing confident output built on a hole.':
    'Ek saaf <code>KeyError</code>. Yahi achcha nateeja hai. Khatarnaak version woh hai jisme system ko kuch nahi milta, woh khaali jagah bhar deta hai, aur ek gadde par khada pakka jawaab banata rehta hai.',
  'Build the recorder you will reuse for the rest of the track':
    'Woh recorder banaiye jo baaki poore track mein kaam aayega',
  'A small command-line tool that sends one prompt, saves the request metadata and the response to a JSON file, and can replay that request later. This is the first version of your experiment harness, and several later chapters run on it.':
    'Ek chhota command-line auzaar jo ek prompt bhejta hai, request ki jaankari aur jawaab ek JSON file mein save karta hai, aur baad mein wahi request dobara chala sakta hai. Yeh aapke experiment harness ka pehla roop hai, aur aage ke kai chapter isi par chalte hain.',
  'Record: an id, a timestamp, the model, the prompt, the full response, latency, token usage, and any error.':
    'Likhiye: ek id, samay, model, prompt, poora jawaab, latency, token ka istemaal, aur koi bhi error.',
  'Save one JSON file per run, named by id.':
    'Har run ki ek JSON file save kijiye, id ke naam se.',
  'Add a replay flag that re-sends a saved request and writes a second record.':
    'Ek replay ka option joriye jo save ki hui request dobara bhejta hai aur doosra record likhta hai.',
  'You can explain what every line does without asking an AI to explain your own code back to you. That is the bar for this chapter, and it is a real bar — code you cannot explain is code you cannot defend in a review.':
    'Aap har line ka kaam bina kisi AI se apna hi code samjhaye bata sakein. Is chapter ka bar yahi hai, aur yeh asli bar hai — jo code aap samjha nahi sakte use aap review mein defend bhi nahi kar sakte.',
  'Run a benchmark small enough that you will actually run it':
    'Benchmark itna chhota rakhiye ki aap use sach mein chalayein',
  'Five questions, two models, one table. Use the harness from chapter 21 so the records survive.':
    'Paanch sawaal, do model, ek table. Chapter 21 waala harness istemaal kijiye taaki record bache rahein.',
  'One factual question where you know the answer cold.':
    'Ek aisa fact waala sawaal jiska jawaab aapko poori tarah pata ho.',
  'One that needs a short chain of reasoning.':
    'Ek aisa jisme thoda sochne ki zaroorat ho.',
  'One extraction task — pull three fields out of a paragraph.':
    'Ek nikaalne waala kaam — ek paragraph se teen cheezein nikaaliye.',
  'One in a second language you can judge.':
    'Ek doosri bhasha mein, jise aap parakh sakein.',
  'One that should be refused or answered "I cannot verify that".':
    'Ek aisa jise mana kar dena chahiye ya "main ise jaanch nahi sakta" kehna chahiye.',
  'For each: latency, token usage, whether the answer was right, and what kind of wrong it was when it was wrong. The kind of wrong matters more than the count — a model that fails by refusing is a different product risk from one that fails by inventing.':
    'Har ek ke liye: latency, token ka istemaal, jawaab sahi tha ya nahi, aur galat tha to kis tarah ka galat. Kis tarah ka galat, yeh ginti se zyada maayne rakhta hai — jo model mana karke fail hota hai woh us model se alag product risk hai jo gadh kar fail hota hai.',
  'Watch sampling move the distribution':
    'Dekhiye sampling phailaav ko kaise hilaati hai',
  'Low sampling, less variation. High sampling, more. You saw this in chapter 2 — but the lesson this time is not "temperature equals creativity". It is that model outputs are <strong>distributions</strong>, and configuration changes the distribution rather than picking a different answer.':
    'Kam sampling, kam farak. Zyada sampling, zyada. Yeh aapne chapter 2 mein dekha tha — par is baar sabak yeh nahi hai ki "temperature matlab creativity". Sabak yeh hai ki model ke jawaab ek <strong>phailaav</strong> hote hain, aur setting us phailaav ko badalti hai, koi alag jawaab chunti nahi.',
  'Rewrite one vague instruction as a contract':
    'Ek dhundhle nirdesh ko contract ki tarah dobara likhiye',
  'Take an instruction you have actually used. Give it all six parts, and be specific about the last one — what should it do when it cannot comply?':
    'Koi aisa nirdesh lijiye jo aapne sach mein istemaal kiya ho. Use chhe hisse dijiye, aur aakhri ke baare mein saaf rahiye — jab woh maan na sake tab kya kare?',
  'The rewrite is longer, and it is the length that does the work. You will also notice you had to make decisions you had previously left to the model, which is precisely the point.':
    'Naya roop lamba hai, aur kaam wahi lambai karti hai. Aap yeh bhi dekhenge ki aapko woh faisle lene pade jo pehle aap model par chhod dete the — aur baat theek yahi hai.',
  'Demand a shape, then feed it an edge case':
    'Ek shakal maangiye, phir use ek tedha case dijiye',
  'Either your parser receives a predictable object, or it receives a clear schema-validation failure. Both are acceptable. What is not acceptable is a paragraph that happens to contain the answer somewhere inside it.':
    'Ya to aapke parser ko ek andaaze layak object milega, ya ek saaf schema ki galti. Dono chalega. Jo nahi chalega woh hai ek paragraph jiske andar kahin jawaab chhipa hua ho.',
  'Design three memories, on paper':
    'Teen memory design kijiye, kaagaz par',
  'Conversation history, a long-term user profile, and task state. For each one write down four things: where it is stored, how long it is kept, who can read it, and how it gets deleted.':
    'Baat-cheet ki history, lambe samay ka user profile, aur kaam ki state. Har ek ke liye chaar cheezein likhiye: kahan rakhi hai, kitne din rakhi jaati hai, kaun padh sakta hai, aur mitti kaise hai.',
  'Three different stores with three different retention rules — not one magical memory box. The deletion path is the row people forget, and it is the row a regulator asks about first.':
    'Teen alag store, teen alag niyam — koi ek jaadui memory ka dabba nahi. Mitaane ka raasta wahi panti hai jo log bhool jaate hain, aur wahi panti hai jo koi regulator sabse pehle poochhta hai.',
  'Inventory three real documents':
    'Teen asli documents ka byora banaiye',
  'For each one record: the parser you would use, the pages and sections, the metadata available, whether there are tables, the language, any identifiers, and the access-control label.':
    'Har ek ke liye likhiye: aap kaun sa parser istemaal karenge, kitne page aur section, kya metadata maujood hai, table hain ya nahi, bhasha, koi number ya code, aur access ka label.',
  'Most people discover at least one document whose access label is genuinely unclear. That document is a production incident waiting to happen, and you found it on paper instead of in a log.':
    'Zyadatar logon ko kam se kam ek aisa document milta hai jiska access label sach mein saaf nahi hai. Woh document ek production hadsa hai jo hone ka intezaar kar raha hai — aur aapne use log ki jagah kaagaz par pakad liya.',
  'Measure the three retrieval strategies against each other':
    'Teeno retrieval ke tareeke aamne-saamne naapiye',
  'Use your question set from chapters 3 to 5. Record the rank of the correct chunk under each strategy.':
    'Chapter 3 se 5 waale apne sawaal istemaal kijiye. Har tareeke mein sahi chunk ka rank likhiye.',
  'Exact identifiers tend to favour lexical retrieval. Paraphrases tend to favour semantic. Hybrid is usually the more robust baseline — but you now have the numbers to say so about <em>your</em> corpus rather than repeating it.':
    'Exact number aur code shabd-waale retrieval ko pasand karte hain. Ghuma-phira kar poochhe gaye sawaal matlab-waale ko. Dono ka mel aam taur par zyada mazboot aadhar hota hai — par ab aapke paas <em>apne</em> corpus ke baare mein yeh kehne ke numbers hain, sirf dohraane ki jagah.',
  'Rewrite a query and watch the problem change':
    'Ek sawaal dobara likhiye aur dekhiye samasya kaise badalti hai',
  'Take a short user question that is missing context — the kind real users actually type. Rewrite it into an explicit search query, and compare retrieval before and after.':
    'Ek chhota user sawaal lijiye jisme context adhoora hai — waisa jaisa asli user type karte hain. Use ek saaf search query mein badliye, aur pehle-baad ka retrieval milaiye.',
  'Query rewriting often beats a better index, for a fraction of the effort. It also introduces a new failure: a rewrite that changes what the user meant. Keep one example of each.':
    'Sawaal dobara likhna aksar behtar index ko hara deta hai, mehnat ke ek chhote hisse mein. Yeh ek nayi kharaabi bhi laata hai: aisa naya roop jo user ka matlab hi badal de. Dono ka ek-ek udaharan sambhaal kar rakhiye.',
  'Write one tool contract before writing any model code':
    'Model ka koi code likhne se pehle ek tool contract likhiye',
  'Take something small and real — <code>get_invoice_status(invoice_id)</code>. Write its JSON schema, its required fields, the error states it is allowed to return, and the access rule that governs it.':
    'Koi chhoti aur asli cheez lijiye — <code>get_invoice_status(invoice_id)</code>. Uska JSON schema likhiye, zaroori fields, woh error jo yeh lauta sakta hai, aur uspar laagu access ka niyam.',
  'You will find yourself deciding things the model would otherwise have decided by accident: what an invalid id does, whether a not-found is an error or a result, and who is allowed to ask.':
    'Aap paayenge ki aap woh cheezein tay kar rahe hain jo warna model ittefaaq se tay kar deta: galat id par kya hota hai, "mila nahi" error hai ya nateeja, aur poochhne ki ijazat kise hai.',
  'Build a three-step deterministic flow':
    'Teen kadam ka pakka flow banaiye',
  'Classify the request, retrieve the data, draft the response. Only the drafting is probabilistic. The order is not up for negotiation.':
    'Request pehchaaniye, data nikaaliye, jawaab ka draft banaiye. Sirf draft banana andaazon par chalta hai. Kram par koi bahas nahi.',
  'The flow is boring and it works. Keep this as your baseline: chapter 26 will ask you to prove that an agent beats it before you are allowed to build one.':
    'Yeh flow boring hai aur chalta hai. Ise apna aadhar bana lijiye: chapter 26 aapse yeh saabit karne ko kahega ki agent ise harata hai, uske baad hi agent banane ki ijazat milegi.',
  'Draw the loop before you write it':
    'Loop likhne se pehle use banaiye',
  'From memory: goal → model decision → tool call → observation → updated context → stop or continue. Then add the two things beginners leave out.':
    'Yaad se: lakshya → model ka faisla → tool call → nateeja → badla hua context → ruko ya aage badho. Phir woh do cheezein joriye jo naye log chhod dete hain.',
  'A diagram with explicit stopping conditions and explicit error paths. If your drawing has no arrow labelled “give up”, it is not finished.':
    'Aisa diagram jisme rukne ki shartein aur error ke raaste saaf likhe hon. Agar aapki drawing mein "haar maan lo" waala teer nahi hai, to woh adhoori hai.',
  'Build one with a hard ceiling':
    'Ek banaiye, pakki seema ke saath',
  'Three tool calls maximum, a timeout budget, and an explicit “cannot resolve” exit that is a normal outcome rather than a crash.':
    'Adhiktam teen tool call, ek timeout ka budget, aur ek saaf "hal nahi kar paaya" waala nikaas jo ek aam nateeja ho, koi crash nahi.',
  'The agent always has a bounded execution path. Run it on a task it cannot do and confirm it exits cleanly rather than circling.':
    'Agent ke paas hamesha ek bandha hua raasta ho. Use aisa kaam dijiye jo woh kar hi nahi sakta, aur pakka kijiye ki woh saaf-suthre tareeke se nikal jaaye, chakkar na kaate.',
  'Draw the flow and mark the controls':
    'Bahav banaiye aur controls mark kijiye',
  'Host → client → server → resource or tool. Then mark four things on the drawing: where consent is obtained, where authentication happens, where policy is applied, and where the audit record is written.':
    'Host → client → server → resource ya tool. Phir drawing par chaar cheezein mark kijiye: sehmati kahan li jaati hai, pehchaan kahan hoti hai, policy kahan lagti hai, aur record kahan likha jaata hai.',
  'You can point at the trust boundary and name the component that should be enforcing user authorisation. If the answer is “the model”, the drawing is wrong.':
    'Aap bharose ki seema par ungli rakh sakein aur us hisse ka naam le sakein jise user ki ijazat lagu karni chahiye. Agar jawaab "model" hai, to drawing galat hai.',
  'List what must be true before a tool executes':
    'Likhiye ki tool chalne se pehle kya-kya sach hona chahiye',
  'Take a hypothetical <code>send_email</code> tool. Write the checks required before it is allowed to run.':
    'Ek kalpanik <code>send_email</code> tool lijiye. Likhiye ki chalne ki ijazat milne se pehle kya-kya jaanchna hoga.',
  'Who is asking. Whether they are allowed to do this particular thing. Whether the details they gave make sense. A cap so nobody can do it a thousand times. A yes/no step if it cannot be undone. And a note in a log saying it happened. Now count how many of those the protocol gave you for free — none of them.':
    'Kaun poochh raha hai. Kya use yeh khaas kaam karne ki ijazat hai. Jo byora unhone diya woh tuk ka hai ya nahi. Ek seema taaki koi ise hazaar baar na kar sake. Ek haan/na ka kadam agar ise palta nahi jaa sakta. Aur log mein ek note ki yeh hua. Ab giniye ki inme se kitne protocol ne aapko muft mein diye — ek bhi nahi.',
  'Compare the extraction against what a human sees':
    'Nikale gaye text ko us cheez se milaiye jo ek insaan dekhta hai',
  'Take one real PDF from your corpus. Extract its text. Then put the extraction and the page side by side and find three pieces of information that did not survive.':
    'Apne corpus se ek asli PDF lijiye. Uska text nikaaliye. Phir nikala hua text aur asli page saath-saath rakhiye aur teen aisi jaankari dhoondhiye jo bach nahi payi.',
  'Typically: the table structure, the meaning carried by position — a heading over a column, a footnote marker — and anything that was in an image. Each of those is an answer your assistant will get wrong later.':
    'Aam taur par: table ka dhaancha, jagah se aane waala matlab — column ke upar ka heading, footnote ka nishaan — aur jo kuch bhi tasveer mein tha. Inme se har ek woh jawaab hai jo aapka assistant aage jaakar galat dega.',
  'Draw the voice pipeline and time it':
    'Voice ki pipeline banaiye aur uska samay naapiye',
  'The confirmation step is the one people try to remove to save time. It is also the only thing standing between a misheard name and an action taken on the wrong record.':
    'Confirmation waala kadam hi woh hai jise log samay bachane ke liye hataana chahte hain. Aur wahi ek cheez hai jo galat suney gaye naam aur galat record par hue kaam ke beech khadi hai.',
  'Build a modality-aware evaluation set':
    'Har madhyam ko dhyaan mein rakhkar evaluation set banaiye',
  'Write five questions: some answerable only from text, some only from a table or an image, some only from layout. For each, decide which component has to supply the ground truth.':
    'Paanch sawaal likhiye: kuch jinka jawaab sirf text se milta ho, kuch sirf table ya tasveer se, kuch sirf layout se. Har ek ke liye tay kijiye ki sahi jawaab kaun sa hissa dega.',
  'Build thirty cases, not five':
    'Tees case banaiye, paanch nahi',
  'Happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial, long-context, tool-use, and policy edge cases. Aim for thirty; the exact number matters less than the coverage.':
    'Sab theek waala raasta, ghuma-phira kar poochha gaya, dhundhla, bina-jawaab, doosri bhasha, hamla karne waala, lamba context, tool chalane waala, aur policy ke tedhe case. Tees ka lakshya rakhiye; theek ginti se zyada maayne yeh rakhta hai ki kitna kuch cover hua.',
  'A set of test cases you can run again after any change, kept with the code rather than on somebody’s laptop. A test set only one person has is not a test set.':
    'Aise test cases jo kisi bhi badlaav ke baad dobara chalaye jaa sakein, aur jo kisi ke laptop ki jagah code ke saath rakhe hon. Jo test set sirf ek aadmi ke paas hai woh test set hai hi nahi.',
  'Score one feature at three levels':
    'Ek feature ko teen level par number dijiye',
  'Retrieval, component behaviour, and the end-to-end answer. Record all three for the same run.':
    'Retrieval, hisson ka bartav, aur poore safar ka jawaab. Ek hi run ke liye teeno likhiye.',
  'When the end-to-end number is good and the retrieval number is bad, you have found a system that is guessing well. That is the most dangerous state a RAG product can be in, and only the layered score reveals it.':
    'Jab poore safar ka number achcha ho aur retrieval ka number bura, to aapne aisa system pakda hai jo achche andaaze laga raha hai. RAG product ki yeh sabse khatarnaak haalat hai, aur yeh sirf kai parton waale score se dikhti hai.',
  'Measure how much you can trust the judge':
    'Naapiye ki judge par kitna bharosa kiya jaa sakta hai',
  'Take twenty answers. Let a model mark them, then mark the same twenty yourself, and count how often the two of you disagree.':
    'Bees jawaab lijiye. Pehle model se unhe jaanchwaiye, phir wahi bees khud jaanchiye, aur giniye ki aap dono kitni baar alag rai rakhte hain.',
  'A number you can quote. LLM-as-judge is a scorer, not an oracle — and now you know, for your task, how far its scores can be trusted before a human has to look.':
    'Ek number jo aap bata sakein. Model waala judge number dene waala hai, bhagwaan nahi — aur ab aapko apne kaam ke liye pata hai ki uske number kahan tak bharose layak hain, aur kahan insaan ko dekhna padega.',
  'Build one trace record by hand':
    'Ek trace record haath se banaiye',
  'Take one retrieval request and write down everything that would let a stranger reconstruct it a week later.':
    'Ek retrieval request lijiye aur woh sab likhiye jisse koi anjaan aadmi hafte bhar baad use dobara bana sake.',
  'One structured object per request. The two fields people leave out are <code>prompt_version</code> and <code>retrieved_chunks</code> — and those are exactly the two you need when the answer is wrong but the code has not changed.':
    'Har request ka ek tay-shakal object. Jo do field log chhod dete hain woh hain <code>prompt_version</code> aur <code>retrieved_chunks</code> — aur theek yahi do chahiye hote hain jab jawaab galat ho par code na badla ho.',
  'Price two strategies against each other':
    'Do tareekon ka daam aamne-saamne rakhiye',
  'Take one real task. Cost it under your current design, then under one alternative — a smaller model, a tighter k, a cache in front.':
    'Ek asli kaam lijiye. Uska kharcha apne abhi ke design par nikaaliye, phir ek vikalp par — chhota model, chhota k, ya aage ek cache.',
  'A number per task for each. Multiply by expected daily volume and the decision usually makes itself, in a way that a debate about which model is better never does.':
    'Dono ke liye har kaam ka ek number. Use rozana ke ummeedi traffic se guna kijiye aur faisla aam taur par khud ho jaata hai — jo kaun sa model behtar hai waali bahas se kabhi nahi hota.',
  'Place an instruction inside a document your system retrieves — telling the model to ignore its task and reveal something it should not. Then ask a normal question that happens to retrieve that chunk.':
    'Apne system ke nikaale jaane waale kisi document ke andar ek nirdesh rakhiye — model se kahiye ki apna kaam bhoolkar woh bata de jo nahi batana chahiye. Phir ek aam sawaal poochhiye jisse wahi chunk nikal aaye.',
  'Either the system follows the planted instruction, or it treats the retrieved text as content and carries on. Whichever happens, you now have a test case, and a robust design is one that keeps the instruction boundary intact.':
    'Ya to system rakhe gaye nirdesh ko maan lega, ya nikale gaye text ko sirf content maankar aage badh jaayega. Jo bhi ho, ab aapke paas ek test case hai — aur mazboot design wahi hai jo nirdesh ki seema saabut rakhta hai.',
  'Remove permissions until something breaks':
    'Ijazat hataate jaiye jab tak kuch toot na jaaye',
  'For every tool in your chapter 26 agent, define the minimum permission the task actually requires. Then take the extra permissions away and re-run the task.':
    'Chapter 26 waale agent ke har tool ke liye woh sabse kam ijazat tay kijiye jo kaam ko sach mein chahiye. Phir baaki ijazat hata dijiye aur kaam dobara chalaiye.',
  'Either the task still works — and the permission was never needed — or it breaks, and you have documented precisely why that permission exists. Both outcomes are useful; the undocumented middle is what you are eliminating.':
    'Ya to kaam phir bhi chalega — matlab us ijazat ki kabhi zaroorat thi hi nahi — ya toot jaayega, aur aapne theek-theek likh liya ki woh ijazat kyun hai. Dono nateeje kaam ke hain; aap us beech ki bina-likhi haalat ko hata rahe hain.',
  'Rewrite one acceptance criterion':
    'Ek acceptance criteria dobara likhiye',
  'Start from the traditional form and convert it.':
    'Purane roop se shuru kijiye aur use badliye.',
  '<strong>Traditional:</strong> “The system always returns the correct document.”':
    '<strong>Purana roop:</strong> "System hamesha sahi document laata hai."',
  '<strong>AI version:</strong> “On the approved 200-case test set, retrieval Recall@5 ≥ 0.90 and no-answer precision ≥ 0.98; end-to-end grounded answer success ≥ 0.85.”':
    '<strong>AI waala roop:</strong> "Manzoor 200-case test set par, retrieval Recall@5 ≥ 0.90 aur jawaab-nahi ki precision ≥ 0.98; poore safar ka saboot-par-tika jawaab ≥ 0.85."',
  'A metric, a test set, and a stated tolerance for failure. Notice that the second version is the only one an engineer can actually build against, and the only one that can ever be shown to have been met.':
    'Ek number, ek test set, aur failure ke liye likhi hui chhoot. Dhyaan dijiye ki doosra roop hi ek aisa hai jispar engineer sach mein bana sakta hai, aur ek aisa hai jise poora hua dikhaya bhi jaa sakta hai.',
  'Design the three states':
    'Teen soortein design kijiye',
  'Sketch three screens: one where it is sure and shows you where it got that; one where the question was unclear and it asks you back; one where it is about to do something and waits for a yes.':
    'Teen screen banaiye: ek jahan use pakka pata hai aur woh dikhata hai ki kahan se mila; ek jahan sawaal saaf nahi tha aur woh aapse wapas poochhta hai; ek jahan woh kuch karne ja raha hai aur haan ka intezaar karta hai.',
  'The second and third states are where products are won or lost. Most teams design the first one beautifully and let the other two fall out of the code by accident.':
    'Doosri aur teesri soorat par hi product jeete ya haare jaate hain. Zyadatar teams pehli ko khoobsurat banati hain aur baaki do ko code se apne aap nikal aane deti hain.',
  'Write the production delta':
    'Production ki kami likhiye',
  'The list is longer than the thing you built. That ratio is normal, and being able to state it is most of what separates a demo from a proposal.':
    'Yeh list us cheez se lambi hai jo aapne banayi. Yeh anupaat aam hai, aur ise bata paana hi demo aur ek gambhir prastav ke beech ka zyadatar farak hai.',
  'Find where the time actually goes':
    'Pata lagaiye ki samay asal mein kahan jaata hai',
  'Estimate p50 and p95 for each stage, then measure them with the traces from chapter 30 and compare against your estimate.':
    'Har padav ke liye p50 aur p95 ka anumaan lagaiye, phir chapter 30 ke traces se unhe naapiye aur apne anumaan se milaiye.',
  'One stage dominates. Write down whether it was the one you expected — the gap between the estimate and the measurement is the same lesson chapter 6 taught about quality, arriving again in a different costume.':
    'Ek padav sab par bhaari padta hai. Likhiye ki woh wahi tha jiski aapko ummeed thi ya nahi — anumaan aur naap ke beech ka faasla wahi sabak hai jo chapter 6 ne quality ke baare mein sikhaya tha, bas naye kapdon mein wapas aaya hua.',
  'Write the findings page':
    'Findings ka page likhiye',
  'Exactly these columns, and nothing decorative: what broke, the evidence, the root cause, the fix, the residual risk, the metric before and after, and what you deliberately did not solve.':
    'Theek yeh column, aur koi sajawat nahi: kya tuta, saboot, asli wajah, ilaaj, bacha hua khatra, pehle aur baad ka number, aur woh jo aapne soch-samajh kar hal nahi kiya.',
  'Write ten assumptions before the demo':
    'Demo se pehle das maani-hui baatein likhiye',
  'A design review starts with assumptions, not slides. Write ten, then mark each one true, false or unproven as you test.':
    'Design review maani-hui baaton se shuru hota hai, slides se nahi. Das likhiye, phir test karte-karte har ek par sach, jhooth ya abhi-pata-nahi ka nishaan lagaiye.',
  'The false ones are the most valuable thing you will bring to the review, and the unproven ones are your next sprint.':
    'Jo jhooth nikleen woh sabse keemti cheez hain jo aap review mein le jaayenge, aur jo abhi pata nahi chali woh aapka agla sprint hain.'

});
