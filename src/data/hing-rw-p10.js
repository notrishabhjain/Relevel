/* Hinglish: p10 (coding-book rewrite and playbook tracks). Keyed on the exact English line. */
Object.assign(window.HING = window.HING || {}, {

  'Latency: designing for the wait':
    'Latency: intezaar ke liye design karna',
  'The same number of seconds can feel fast or broken, depending on what the screen shows. You will time a request, stream it, and choose between streaming, progress messages and background processing.':
    'Utne hi seconds tez ya toote hue lag sakte hain, is par nirbhar ki screen kya dikhati hai. Aap ek request ka time naapenge, use stream karenge, aur streaming, progress messages aur background processing mein se chunenge.',
  'Explain why streaming changes how fast a response feels without changing how fast it is.':
    'Samjhaana ki streaming response kitna tez lagta hai yeh badalti hai, woh kitna tez hai yeh nahi.',
  'Choose what to show during a wait for a specific feature, and say what it costs to get it wrong.':
    'Ek khaas feature ke intezaar mein kya dikhana hai chunna, aur galat hone ki keemat batana.',
  'Name a wait in your product you cannot shorten, and what you would do instead.':
    'Apne product ka ek aisa intezaar batana jise aap chhota nahi kar sakte, aur uski jagah aap kya karenge.',
  'Design the wait for your slowest feature':
    'Apne sabse dheeme feature ke intezaar ka design',
  'Take the slowest thing you would ship and design its wait properly, starting from a measured number rather than a spinner.':
    'Jo sabse dheemi cheez aap ship karenge use lijiye aur uske intezaar ka theek design kijiye, spinner se nahi, ek naape hue number se shuru karke.',
  'Measure the spread, not one run: time twenty realistic requests, and write down the median and the slowest.':
    'Ek run nahi, failaav naapiye: bees realistic requests ka time naapiye, aur median aur sabse dheema likhiye.',
  'Split the total into parts, such as retrieval, reasoning and generation, and mark which parts you could shorten.':
    'Kul ko hisson mein baantiye, jaise retrieval, reasoning aur generation, aur mark kijiye ki kaunse hisse aap chhote kar sakte hain.',
  'Decide whether a partial answer is useful. That decides streaming or background. Write down why.':
    'Tay kijiye ki aadha jawab kaam ka hai ya nahi. Yahi streaming ya background tay karta hai. Kyun, yeh likhiye.',
  'Design what the screen shows at second one, second three and second ten. Write the actual words.':
    'Design kijiye ki screen pehle, teesre aur dasve second par kya dikhati hai. Asli shabd likhiye.',
  'Decide what happens in the slowest case, and what the user can do about it.':
    'Tay kijiye ki sabse dheeme case mein kya hota hai, aur user uske baare mein kya kar sakta hai.',
  'Write the acceptance line: at what measured time does this feature stop being interactive and move to the background?':
    'Acceptance line likhiye: kis naape hue samay par yeh feature interactive nahi rehta aur background mein chala jaata hai?',
  'Your numbers are a median and a slowest case from twenty runs, not an average of three.':
    'Aapke numbers bees runs ka median aur sabse dheema case hain, teen ka average nahi.',
  'You can state the time at which you would change the whole interaction, as a number.':
    'Aap woh samay number ki tarah bata sakte hain jis par aap poora interaction badal denge.',
  'Reasoning is a purchase':
    'Reasoning ek khareed hai',
  'A schema fixes the format of a reply':
    'Schema reply ka format tay karta hai',
  'Open a notebook called <code>chapter-11-5</code>. Use the feature you costed in Chapter 11. You will time the same call twice without making it any faster.':
    '<code>chapter-11-5</code> naam ka notebook kholiye. Chapter 11 mein jis feature ki cost nikaali use use kijiye. Aap wahi call do baar time karenge, use tez kiye bina.',
  'Streaming changes how fast it feels':
    'Streaming badalti hai ki kitna tez lagta hai',
  'Time a request, then stream it':
    'Request ka time naapiye, phir use stream kijiye',
  'Run one realistic request and time it from start to finish. Then run the same request with streaming, and time when the <em>first</em> characters arrive.':
    'Ek realistic request chalaiye aur shuru se ant tak time naapiye. Phir wahi request streaming ke saath chalaiye, aur naapiye ki <em>pehle</em> characters kab aate hain.',
  'The total time is the same or slightly longer. The first words arrive in a fraction of that time. Nothing got faster, but it feels very different, because the user can see that something is happening.':
    'Kul samay wahi ya thoda zyada hai. Pehle shabd uske chhote se hisse mein aa jaate hain. Kuchh tez nahi hua, lekin bahut alag lagta hai, kyunki user dekh sakta hai ki kuchh ho raha hai.',
  'How fast a response feels depends mostly on when something first appears. Most improvements to a wait happen at the start.':
    'Response kitna tez lagta hai yeh zyadatar is par nirbhar hai ki pehli cheez kab dikhti hai. Intezaar ke zyadatar sudhaar shuruaat mein hote hain.',
  'Three ways to handle a wait':
    'Intezaar sambhaalne ke teen tareeke',
  '<strong>Start early.</strong> Stream the answer, or show each step of a multi-step job as it finishes. This costs nothing and helps most.':
    '<strong>Jaldi shuru kijiye.</strong> Jawab stream kijiye, ya multi-step kaam ka har step khatam hote hi dikhaiye. Iski koi keemat nahi aur yeh sabse zyada madad karta hai.',
  '<strong>Say what is happening.</strong> Show the actual step instead of a spinner. “Reading 6 documents” tells the user the wait matches the job.':
    '<strong>Bataiye kya ho raha hai.</strong> Spinner ki jagah asli step dikhaiye. “6 documents padh raha hai” user ko batata hai ki intezaar kaam ke mutaabik hai.',
  '<strong>Move the wait somewhere else.</strong> If it is really long, stop treating it as interactive. Run it in the background and notify the user when it is done.':
    '<strong>Intezaar ko kahin aur le jaaiye.</strong> Agar yeh sach mein lamba hai, to ise interactive maanna band kijiye. Ise background mein chalaiye aur poora hone par user ko bataiye.',
  'Teams often avoid the third option because it feels like admitting defeat. For anything over about ten seconds, it is usually the right choice, because it removes the problem.':
    'Teams aksar teesre vikalp se bachti hain kyunki yeh haar maanne jaisa lagta hai. Lagbhag das second se zyada ki kisi bhi cheez ke liye yeh aam taur par sahi choice hai, kyunki yeh problem hi hata deta hai.',
  'Compare a spinner with a progress message':
    'Spinner ko progress message se compare kijiye',
  'Run your slowest realistic request while watching a clock. Now imagine two screens: one with a spinner, and one with the words <em>reading 6 documents · comparing against policy</em> and a step counter.':
    'Ghadi dekhte hue apni sabse dheemi realistic request chalaiye. Ab do screens sochiye: ek spinner wali, aur ek jisme likha ho <em>6 documents padh raha hai · policy se compare kar raha hai</em> aur ek step counter.',
  'The wait is the same. With the spinner, the user cannot tell a slow answer from a broken one, so at eight seconds they reload. That cancels the call and starts it again. With the progress message, they can see it is working and roughly how far along it is.':
    'Intezaar wahi hai. Spinner ke saath user dheeme jawab ko toote se alag nahi kar sakta, isliye aath second par woh reload karta hai. Isse call cancel hoti hai aur phir se shuru hoti hai. Progress message ke saath woh dekh sakta hai ki kaam chal raha hai aur mota-mota kitna hua.',
  'A plain spinner teaches users to reload, and every reload is a call you pay for twice.':
    'Saada spinner users ko reload karna sikhaata hai, aur har reload ek aisi call hai jiske paise aap do baar dete hain.',
  'Stream or run in the background?':
    'Stream karein ya background mein chalaayein?',
  'Your feature takes nine seconds and cannot be made faster. You can stream the answer, or run it in the background and notify the user. Which, and what does it depend on?':
    'Aapka feature nau second leta hai aur tez nahi ho sakta. Aap jawab stream kar sakte hain, ya background mein chala kar user ko bata sakte hain. Kaunsa, aur yeh kis par nirbhar hai?',
  'It depends on whether a partial answer is useful. If reading the first sentence lets the person start working, as with a draft, an explanation or a summary, stream it. If the answer is only useful when complete, as with a decision, a routed ticket or a filled form, streaming shows a half-answer they must not act on. Use the background.':
    'Yeh is par nirbhar hai ki aadha jawab kaam ka hai ya nahi. Agar pehla sentence padh kar insaan kaam shuru kar sakta hai, jaise draft, explanation ya summary mein, to stream kijiye. Agar jawab sirf poora hone par kaam ka hai, jaise decision, route kiya ticket ya bhara form, to streaming ek aadha jawab dikhati hai jis par unhe kaam nahi karna chahiye. Background use kijiye.',
  'This is why the schema chapter comes first. A partial reply is safe to show only when the visible part is already final. A half-streamed <em>decision</em> field is a hazard, not a decision.':
    'Isiliye schema wala chapter pehle aata hai. Aadha reply dikhana tabhi surakshit hai jab dikhne wala hissa pehle se final ho. Aadha stream hua <em>decision</em> field decision nahi, khatra hai.',
  'None of this made anything faster. It changed whether nine seconds is acceptable, which is the question your users actually care about.':
    'Isme se kisi ne kuchh tez nahi kiya. Isne badla ki nau second sweekaar hain ya nahi, aur yahi sawaal aapke users ke liye maayne rakhta hai.',
  'Better retrieval: hybrid search, reranking, context and filters':
    'Behtar retrieval: hybrid search, reranking, context aur filters',
  'Your Part I retrieval is the simplest version that works. You will add four improvements, measure each against the same answer key, and find that the least exciting one, metadata filtering, prevents failures the others cannot.':
    'Aapka Part I retrieval sabse simple chalne wala version hai. Aap chaar sudhaar jodenge, har ek ko usi answer key par naapenge, aur paayenge ki sabse kam romaanchak, metadata filtering, woh failures rokta hai jo baaki nahi rok sakte.',
  'Combine keyword search and meaning search instead of choosing between them.':
    'Keyword search aur matlab wale search mein se chunne ki jagah unhe jodna.',
  'Say which technique improves both recall and precision at once, and what it costs.':
    'Batana ki kaunsi technique recall aur precision dono ek saath sudhaarti hai, aur uski keemat kya hai.',
  'Name the failure no ranking technique can fix, and the simple step that does.':
    'Woh failure batana jise koi ranking technique theek nahi kar sakti, aur woh simple step jo karta hai.',
  'Improve retrieval and measure each change':
    'Retrieval sudhaariye aur har badlaav naapiye',
  'Chapter 6 gave you a way to measure retrieval. This chapter gave you four ways to improve it. Improve it on your own documents and show which change actually helped.':
    'Chapter 6 ne retrieval naapne ka tareeka diya. Is chapter ne use sudhaarne ke chaar tareeke diye. Apne documents par ise sudhaariye aur dikhaiye ki kis badlaav ne sach mein madad ki.',
  'Start from your Chapter 6 answer key and record today’s baseline: correct-card hits and share of relevant chunks at k=3.':
    'Apni Chapter 6 answer key se shuru kijiye aur aaj ki baseline record kijiye: k=3 par sahi-card hits aur relevant chunks ka hissa.',
  'Add keyword scoring alongside meaning scoring and combine the two. Measure again.':
    'Matlab wali scoring ke saath keyword scoring jodiye aur dono ko milaaiye. Phir naapiye.',
  'Fix the orphaned chunks by adding enough context for each to make sense alone. Measure again.':
    'Anaath chunks ko itna context dekar theek kijiye ki har ek akele samajh aaye. Phir naapiye.',
  'Fetch many chunks and rerank to a few. Measure again, and record what it costs in response time.':
    'Bahut saare chunks laaiye aur rerank karke kuchh rakhiye. Phir naapiye, aur response time mein iski keemat record kijiye.',
  'Add a metadata filter that removes chunks that can never be relevant. Measure again.':
    'Ek metadata filter jodiye jo un chunks ko hataaye jo kabhi relevant nahi ho sakte. Phir naapiye.',
  'Rank the four changes by how much each improved your number, and by what each costs to run.':
    'Chaaron badlaavon ko rank kijiye: har ek ne aapka number kitna sudhaara, aur har ek ko chalaane ki keemat kya hai.',
  'The ranking is based on measured results on your documents, not on reputation.':
    'Ranking aapke documents par naape results par aadharit hai, reputation par nahi.',
  'You can name the change that helped least, and say whether you would still ship it.':
    'Aap sabse kam madad karne wala badlaav bata sakte hain, aur kya aap use phir bhi ship karenge.',
  'The limit from Chapter 7.5. This chapter improves it.':
    'Chapter 7.5 ki seema. Yeh chapter use sudhaarta hai.',
  'Keyword and meaning search fail differently':
    'Keyword aur matlab wala search alag tarah fail hote hain',
  'One misses meaning; the other misses exact strings.':
    'Ek matlab chookta hai; doosra exact strings.',
  'Fetching more also fetches more irrelevant chunks':
    'Zyada laane se zyada faaltu chunks bhi aate hain',
  'The trade-off from Chapter 6.':
    'Chapter 6 ka trade-off.',
  'Open a new notebook called <code>chapter-12</code>. Bring your chunks, <code>chunk_vecs</code> and your Chapter 6 answer key.':
    '<code>chapter-12</code> naam ka naya notebook kholiye. Apne chunks, <code>chunk_vecs</code> aur Chapter 6 answer key le aaiye.',
  'This chapter covers four ways to improve retrieval, roughly in order of how much they help. Measure each one against your Chapter 6 answer key.':
    'Yeh chapter retrieval sudhaarne ke chaar tareeke cover karta hai, mota-mota is kram mein ki woh kitni madad karte hain. Har ek ko apni Chapter 6 answer key se naapiye.',
  'Technique 1: Hybrid search':
    'Technique 1: Hybrid search',
  'Keyword search is good at exact strings and bad at meaning. Meaning search is the reverse. <strong>Hybrid search</strong> runs both and combines the two rankings, so you no longer have to choose.':
    'Keyword search exact strings mein achha aur matlab mein kamzor hai. Matlab wala search ulta hai. <strong>Hybrid search</strong> dono chalaata hai aur dono rankings milaata hai, taaki aapko chunna na pade.',
  'Write keyword search in code':
    'Keyword search code mein likhiye',
  'First, write the keyword scoring you did by hand in Chapter 4, this time in code.':
    'Pehle Chapter 4 mein haath se ki keyword scoring is baar code mein likhiye.',
  'Run it on your Chapter 4 questions. Check that it roughly reproduces your handwritten rankings, including the same failures on the three harder questions.':
    'Ise apne Chapter 4 sawaalon par chalaiye. Check kijiye ki yeh mota-mota aapki haath ki rankings dohrata hai, teen mushkil sawaalon par wahi failures samet.',
  'Combine the two rankings':
    'Dono rankings milaaiye',
  'Grade your full Chapter 6 answer key three ways at k=3: meaning search only, keyword search only, and hybrid.':
    'Apni poori Chapter 6 answer key ko k=3 par teen tarah grade kijiye: sirf matlab wala search, sirf keyword search, aur hybrid.',
  'Hybrid usually matches or beats the better of the two. In particular, it fixes your exact-code question without losing the synonym question. If it does not, write down which question hybrid got wrong and why.':
    'Hybrid aam taur par dono mein behtar wale ke barabar ya usse behtar hota hai. Khaas kar, yeh samanarthi wala sawaal khoye bina aapka exact-code sawaal theek karta hai. Agar nahi, to likhiye ki hybrid ne kaunsa sawaal galat kiya aur kyun.',
  'Technique 2: Reranking':
    'Technique 2: Reranking',
  '<strong>Reranking</strong> gives a large improvement for a modest cost. First fetch many chunks cheaply, for example fifty. Then a second, slower model reads the question and each chunk together, scores them again, and you keep the best five.':
    '<strong>Reranking</strong> thodi si keemat par bada sudhaar deta hai. Pehle saste mein bahut saare chunks laaiye, jaise pachaas. Phir ek doosra, dheema model sawaal aur har chunk ko saath padhta hai, unhe phir se score karta hai, aur aap sabse achhe paanch rakhte hain.',
  'Predict: you add a reranking step to a working system. How much does quality change?':
    'Andaaza lagaiye: aap chalte system mein reranking step jodte hain. Quality kitni badalti hai?',
  'Usually a large, immediate improvement, and both recall and precision improve at once. You find more because you fetched fifty chunks instead of five. And fewer irrelevant chunks survive, because the second model actually read them.':
    'Aam taur par bada, turant sudhaar, aur recall aur precision dono ek saath sudhrte hain. Aap zyada dhoondhte hain kyunki paanch ki jagah pachaas chunks laaye. Aur kam faaltu chunks bachte hain, kyunki doosre model ne unhe sach mein padha.',
  'The cost is extra waiting time and a second model call on the shortlist. That is why it runs on fifty chunks and not on your whole document set.':
    'Keemat hai extra intezaar aur shortlist par ek doosri model call. Isiliye yeh pachaas chunks par chalta hai, poore document set par nahi.',
  'Fetch many, rerank to a few':
    'Bahut laaiye, kuchh tak rerank kijiye',
  'If a reranker endpoint is available, shortlist 20 chunks with hybrid search and rescore them. If not, simulate it by asking an LLM to score each question-and-chunk pair from 0 to 10. This is slower and rougher, but it shows the same pattern.':
    'Agar reranker endpoint uplabdh hai, to hybrid search se 20 chunks shortlist karke unhe phir score kijiye. Nahi to LLM se har sawaal-aur-chunk jode ko 0 se 10 tak score karwa kar simulate kijiye. Yeh dheema aur mota hai, lekin wahi pattern dikhata hai.',
  'Precision at k=3 improves: the top three are clearly more on-topic. Record the response time too, because you added 20 model calls per question. That trade-off is the whole reranking decision.':
    'k=3 par precision sudhrti hai: top teen saaf taur par zyada vishay par hain. Response time bhi record kijiye, kyunki aapne har sawaal par 20 model calls jodi. Yahi trade-off poora reranking decision hai.',
  'Technique 3: Contextual retrieval':
    'Technique 3: Contextual retrieval',
  '<strong>Contextual retrieval</strong> fixes the orphaned chunks from Chapter 3, such as the one starting “the aforesaid amount”. Before storing each chunk, ask a model to write one sentence describing where it sits in the document, and store that sentence with the chunk.':
    '<strong>Contextual retrieval</strong> Chapter 3 ke anaath chunks theek karta hai, jaise “the aforesaid amount” se shuru hone wala. Har chunk store karne se pehle model se ek sentence likhwaaiye ki woh document mein kahan baitha hai, aur woh sentence chunk ke saath store kijiye.',
  'Add context to orphaned chunks':
    'Anaath chunks mein context jodiye',
  'Find the orphaned chunks you counted in Chapter 3. Generate a context sentence for each one and create new embeddings.':
    'Chapter 3 mein gine anaath chunks dhoondhiye. Har ek ke liye context sentence banaiye aur naye embeddings banaiye.',
  'Grade again. Questions that failed because of orphaned chunks should now succeed. Record the before and after for those questions. This is the clearest cause-and-effect result in the chapter, because you identified the problem yourself in Chapter 3.':
    'Phir grade kijiye. Jo sawaal anaath chunks ki wajah se fail hue the woh ab safal hone chahiye. Un sawaalon ka pehle aur baad record kijiye. Yeh chapter ka sabse saaf kaaran-aur-prabhaav wala result hai, kyunki problem aapne khud Chapter 3 mein pehchaani thi.',
  'Technique 4: Metadata filtering':
    'Technique 4: Metadata filtering',
  '<strong>Metadata filtering</strong> removes chunks that cannot be right before any scoring happens: an old version of a policy, a document this user may not see, or something that expired last year. No ranking technique can stop a repealed 2024 policy from outranking the current one, because relevance and correctness are different questions.':
    '<strong>Metadata filtering</strong> kisi bhi scoring se pehle un chunks ko hataata hai jo sahi ho hi nahi sakte: policy ka purana version, aisa document jo yeh user nahi dekh sakta, ya pichhle saal expire hui cheez. Koi ranking technique radd ki gayi 2024 policy ko current se upar rank hone se nahi rok sakti, kyunki relevance aur sahi hona alag sawaal hain.',
  'Filtering is the only technique in this chapter that guarantees a result. The others improve the odds.':
    'Is chapter mein filtering akeli technique hai jo result ki guarantee deti hai. Baaki sambhavna sudhaarti hain.',
  'Before any document is stored, list the labels you would require on every chunk. Next to each label, write the specific failure it prevents. Only include labels where you can name a failure.':
    'Kisi bhi document ko store karne se pehle woh labels list kijiye jo aap har chunk par zaroori maanenge. Har label ke bagal mein woh specific failure likhiye jo woh rokta hai. Sirf woh labels rakhiye jinke liye aap failure bata sakein.',
  'A strong list is short, and each line prevents a failure nothing else can. Document ID and version, because better ranking cannot stop last year’s policy from winning. Effective and expiry dates, for the same reason over time. Who is allowed to see it, because filtering is the only thing between a user and a document they must not read. Source and date added, so you can remove a source you no longer trust. Filtering happens <em>before</em> scoring, which is why it can make these failures impossible rather than unlikely.':
    'Mazboot list chhoti hoti hai, aur har line woh failure rokti hai jo aur kuchh nahi rok sakta. Document ID aur version, kyunki behtar ranking pichhle saal ki policy ko jeetne se nahi rok sakti. Laagu hone aur khatam hone ki dates, samay ke saath isi wajah se. Ise kaun dekh sakta hai, kyunki filtering hi user aur us document ke beech akeli cheez hai jo use nahi padhna chahiye. Source aur jodne ki date, taaki aap us source ko hata sakein jis par ab bharosa nahi. Filtering scoring se <em>pehle</em> hoti hai, isiliye yeh in failures ko kam sambhav nahi, namumkin bana sakti hai.',
  'Test a filter on an outdated policy':
    'Purani policy par filter test kijiye',
  'Add metadata to each chunk: document, section, effective date and status. Then add an old, replaced version of one policy to your documents, and ask a question it answers.':
    'Har chunk mein metadata jodiye: document, section, laagu hone ki date aur status. Phir apne documents mein ek policy ka purana, badla hua version jodiye, aur aisa sawaal poochhiye jiska woh jawab deta hai.',
  'Without a filter, the old chunk is retrieved with a high score, and your pipeline quotes a rule that is no longer in force. With a <code>status=current</code> filter, the problem disappears. No embedding model can detect that a policy was repealed.':
    'Filter ke bina purana chunk ooche score ke saath retrieve hota hai, aur aapki pipeline aisa rule quote karti hai jo ab laagu nahi. <code>status=current</code> filter ke saath problem gaayab ho jaati hai. Koi embedding model yeh nahi pehchaan sakta ki policy radd ho chuki hai.',
  'One more: agentic search':
    'Ek aur: agentic search',
  'You can also let the model run several searches itself, read the results and refine its query, using the loop from Chapter 9. This can find better evidence, and it multiplies the cost in the way Chapter 9 described.':
    'Aap model ko khud kai searches chalaane, results padhne aur apni query sudhaarne bhi de sakte hain, Chapter 9 ke loop se. Isse behtar saboot mil sakta hai, aur yeh cost ko usi tarah guna karta hai jaisa Chapter 9 ne bataya.'

});
