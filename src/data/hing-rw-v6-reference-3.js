/* Hinglish: appendix and rules, plain-language rewrite (v6). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {
  'What does the model already know, and what must you retrieve or give it?':
    'Model ko pehle se kya pata hai, aur kya aapko retrieve karke ya khud dena padega?',
  'What exactly goes into the model’s context?':
    'Model ke context mein exactly kya jaata hai?',
  'What is the ground truth, and how do you keep it up to date?':
    'Ground truth kya hai, aur use up to date kaise rakhenge?',
  'When the prompt, model or index changes, how will you re-test that nothing got worse?':
    'Jab prompt, model ya index badle, toh aap kaise dobara test karenge ki kuch kharab nahi hua?',
  'What happens to latency and cost with ten times the traffic, and with a hundred times?':
    'Traffic 10 guna ho jaaye, ya 100 guna, toh latency aur cost ka kya hoga?',
  'How do we go back to the old model, prompt, tool schema or index if a change goes wrong?':
    'Agar koi change galat ho jaaye, toh hum purane model, prompt, tool schema ya index par wapas kaise jaayenge?',
  'What evidence backs up what the vendor says?':
    'Vendor jo kehta hai, uske peeche kya evidence hai?',
  'What is our exit plan if the model or provider changes its terms or its quality?':
    'Agar model ya provider apni terms ya apni quality badal de, toh hamara exit plan kya hai?',
  'Applied AI PM and AI engineering roles. These show what the market asks for, not what the standards say':
    'Applied AI PM aur AI engineering roles. Yeh dikhate hain ki market kya maangti hai, standards kya kehte hain woh nahi',
  'Building Effective Agents: when to use a workflow and when to use an agent, and how to design tools':
    'Building Effective Agents: workflow kab use karein aur agent kab, aur tools ko kaise design karein',
  'Building Effective AI Agents: the longer write-up':
    'Building Effective AI Agents: lamba write-up',
  'Seven foundation notebooks, and an experiment harness you can run again.':
    'Saat foundation notebooks, aur ek experiment harness jise aap baar baar dobara chala sakte hain.',
  'A Model Selection Card, a context budget, and a design for memory and state.':
    'Ek Model Selection Card, ek context budget, aur memory aur state ka ek design.',
  'Retrieval, the way real products do it':
    'Retrieval, jaise asli products mein hota hai',
  'A measurement for each part of retrieval: chunking, retrieval, hybrid search, reranking, permissions and provenance.':
    'Retrieval ke har hisse ka ek measurement: chunking, retrieval, hybrid search, reranking, permissions aur provenance.',
  'A tool contract, a workflow, and a bounded agent that you measure against that workflow.':
    'Ek tool contract, ek workflow, aur ek bounded agent, jise aap us workflow ke saamne measure karte hain.',
  'A multimodal pipeline, and an evaluation set with cases that only this kind of input can fail.':
    'Ek multimodal pipeline, aur ek evaluation set jisme aise cases hain jo sirf isi tarah ka input fail kar sakta hai.',
  'One capstone that takes you through discover, build, break, measure, ship and defend':
    'Ek capstone jo aapko discover, build, break, measure, ship aur defend, sab se guzaarta hai',
  'The complete portfolio evidence pack, all in one repository: technical, product, business and real-user evidence.':
    'Poora portfolio evidence pack, ek hi repository mein: technical, product, business aur real-user evidence.',
  'One notebook for each foundation chapter. Each is the smallest thing that works, and you keep it.':
    'Har foundation chapter ke liye ek notebook. Har ek sabse chhoti cheez hai jo kaam karti hai, aur aap use sambhal kar rakhte hain.',
  'Your chunking strategy, some worked examples, a set of questions, and how much the chunking changed retrieval.':
    'Aapki chunking strategy, kuch worked examples, sawaalon ka ek set, aur yeh ki chunking ne retrieval ko kitna badla.',
  'Lexical, dense and hybrid search compared, with a score for each query instead of one overall average.':
    'Lexical, dense aur hybrid search ka comparison, har query ka alag score ke saath, ek overall average ke bajaay.',
  'Candidate recall, precision at k, the extra latency, and the decision you took.':
    'Candidate recall, precision at k, extra latency, aur woh decision jo aapne liya.',
  'A flow where the code decides every step, with each change of state written down.':
    'Aisa flow jisme har step code tay karta hai, aur state ka har change likha hua hai.',
  'How the client finds what a server can do and then calls it, plus proof of where the trust boundary sits.':
    'Client kaise pata lagata hai ki server kya kar sakta hai aur phir use call karta hai, aur saath mein proof ki trust boundary kahaan hai.',
  'Extraction, provenance, and tests that only this kind of input can fail.':
    'Extraction, provenance, aur aise tests jo sirf isi tarah ka input fail kar sakta hai.',
  'Failures with labels, grouped by their root cause instead of by what they looked like.':
    'Labels ke saath failures, root cause ke hisaab se group kiye hue, yeh dekh kar nahi ki woh dikhte kaise the.',
  'Fill one in every time you change one thing and measure the result. That is what separates an experiment from an afternoon of trying things.':
    'Jab bhi aap ek cheez badalkar result measure karein, ek record bhariye. Yahi ek experiment ko ek dopahar ki idhar-udhar koshish se alag karta hai.',
  'Fill one in for each failure you find yourself. A pile of these is the most convincing thing you can bring to a review.':
    'Jo failure aapko khud mile, har ek ke liye ek bhariye. Aise kai records ka dher review mein laane ke liye sabse convincing cheez hai.',
  'Write one when a decision would be expensive to reverse. Six months later, it is the only record of why you chose what you chose.':
    'Jab koi decision palatna mehenga ho, tab ek likhiye. Chhe mahine baad yahi akela record hota hai ki aapne yeh kyun chuna tha.',
  'What this now forces or rules out later on':
    'Isse aage chalkar kya karna zaroori ho jaata hai, aur kya nahi ho sakta',
  'This is the specification for a system whose behaviour is probabilistic, which means its answers can vary. Most of these rows are not in an ordinary PRD, and they decide whether the product ships.':
    'Yeh aise system ki specification hai jiska behaviour probabilistic hai, matlab uske jawaab badal sakte hain. In mein se zyada tar rows ek aam PRD mein nahi hoti, aur yahi tay karti hain ki product ship hoga ya nahi.',
  'The non-goals matter most, because they hold the scope up':
    'Non-goals sabse zaroori hain, kyunki wahi scope ko thaame rakhte hain',
  'What goes into the model, and what gets dropped first':
    'Model mein kya jaata hai, aur sabse pehle kya hataya jaata hai',
  'Or write "none", on purpose':
    'Ya jaan-boojhkar "none" likhiye',
  'A metric, a test set and a tolerance. You need all three':
    'Ek metric, ek test set aur ek tolerance. Teenon chahiye',
  'One row per risk. The field that matters most is residual risk, because a register without it is just a wish list.':
    'Har risk ke liye ek row. Sabse zaroori field residual risk hai, kyunki uske bina register sirf wish list hai.',
  'What actually stops it: a boundary that is enforced, not just a prompt':
    'Use asal mein kya rokta hai: ek enforce ki hui boundary, sirf ek prompt nahi',
  'Fill one in per option, then compare them. Exit cost is here on purpose. It is the row nobody scores until the price changes.':
    'Har option ke liye ek bhariye, phir unka comparison kijiye. Exit cost jaan-boojhkar yahaan hai. Yeh woh row hai jise price badalne tak koi score nahi karta.',
  'One row per case in your golden set. Write the expected behaviour before you see what the model does. If you write it afterwards, it is not evaluation.':
    'Aapke golden set ke har case ke liye ek row. Expected behaviour pehle likhiye, model ka output dekhne se pehle. Baad mein likha, toh woh evaluation nahi hai.',
  'This is not a form you fill in by hand. It is a list of fields your system must send out on its own. Design it here, then check a real trace against it.':
    'Yeh haath se bharne wala form nahi hai. Yeh un fields ki list hai jo aapka system khud bhejta hai. Isse yahaan design kijiye, phir ek asli trace ko isse check kijiye.',
  'Agree on these numbers before the release meeting. A gate that gets negotiated during the meeting is not a gate.':
    'Yeh numbers release meeting se pehle tay kar lijiye. Jis gate par meeting ke beech bargaining ho, woh gate nahi hota.',
  'Explain the model, API and context lifecycle from start to finish.':
    'Model, API aur context ka lifecycle shuru se aakhir tak samjhaiye.',
  'Define an evaluation set that has ground truth behind it.':
    'Ek evaluation set define kijiye jiske peeche ground truth ho.',
  'Choose between a direct call, RAG, a workflow and an agent, and back the choice with evidence.':
    'Direct call, RAG, workflow aur agent mein se chuniye, aur apne choice ko evidence se support kijiye.',
  'Explain the trade-offs twice: once to an engineer, and once, in different words, to a business stakeholder.':
    'Trade-offs do baar samjhaiye: ek baar engineer ko, aur ek baar alag shabdon mein business stakeholder ko.',
  'The final artifact is your repository plus the evidence pack. It shows what you built, what broke, what you measured, what you changed, and what is still unresolved.':
    'Aakhri artifact aapki repository aur evidence pack hai. Isme dikhta hai ki aapne kya banaya, kya toota, kya measure kiya, kya badla, aur kya abhi bhi suljha nahi hai.',
});
