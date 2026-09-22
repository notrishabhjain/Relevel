/* Hinglish: the v4.2 hands-on units, part 4 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'Invoke it from a compatible client or local mock.':
    'Use kisi mel khaate client ya local nakli client se bulaiye.',
  'Return malformed arguments and server errors.':
    'Bigde hue argument aur server ki galtiyan lautaiye.',
  'MCP Mini-Demo repository.':
    'MCP chhote demo ki repository.',
  'Can you trace discovery, invocation and response?':
    'Kya aap dhoondhna, bulana aur jawaab — teenon ka peechha kar sakte hain?',
  'Keep the demo read-only to focus on protocol understanding.':
    'Demo ko sirf padhne wala rakhiye, taaki dhyaan protocol samajhne par rahe.',
  'Consent and authorization':
    'Sehmati aur permission',
  'Separate capability discovery from permission to act.':
    'Kshamta dhoondhne ko kaam karne ki ijaazat se alag rakhiye.',
  'A discoverable tool is not automatically an authorized tool.':
    'Jo tool dikh raha hai, woh apne-aap ijaazat-praapt tool nahi ho jaata.',
  'Create an authorization matrix for read, write and privileged tools.':
    'Padhne, likhne aur vishesh-adhikaar wale tool ke liye ek permission matrix banaiye.',
  'Add a policy check before invocation.':
    'Bulane se pehle ek policy ki jaanch jodiye.',
  'Attempt an unauthorized invocation and record the denial.':
    'Bina ijaazat bulane ki koshish kijiye aur inkaar ko likh lijiye.',
  'Authorization Matrix + test evidence.':
    'Permission matrix aur test ka saboot.',
  'Who makes the final authorization decision?':
    'Aakhri permission ka faisla kaun leta hai?',
  'Server-side authorization must not depend on the model following instructions.':
    'Server ki permission is bharose par nahi honi chahiye ki model nirdesh maan lega.',
  'MCP security and prompt injection':
    'MCP ki security aur prompt injection',
  'Treat resources and tool outputs as untrusted content.':
    'Resource aur tool ke output ko bharose se baahar ka maal maaniye.',
  'Interoperability can increase the number of external trust boundaries.':
    'Aapas mein judne se baahari bharosa-lakeeron ki ginti badh sakti hai.',
  'Inject a malicious instruction into a resource and test the client workflow.':
    'Kisi resource mein ek nuksaan-pahunchane wala nirdesh daaliye aur client ka workflow jaanchiye.',
  'Separate data from control instructions and enforce tool policies.':
    'Data ko control ke nirdeshon se alag kijiye aur tool ki policy laagu kijiye.',
  'Try indirect injection through a retrieved resource.':
    'Laaye gaye kisi resource ke zariye ghuma kar injection aazmaiye.',
  'MCP Security Test Sheet.':
    'MCP security ki test sheet.',
  'Can untrusted content cause a privileged action?':
    'Kya bina bharose wala maal koi vishesh-adhikaar wala kaam karwa sakta hai?',
  'This connects directly to the security chapter.':
    'Yeh seedhe security wale chapter se judta hai.',
  'Agent-to-agent interoperability':
    'Agent-se-agent aapasi mel',
  'Understand A2A-style concepts: identity, delegation, task exchange, trust and observability.':
    'A2A jaisi baatein samajhiye: pehchaan, kaam saunpna, kaam ka aadan-pradaan, bharosa aur observability.',
  'Inter-agent protocols solve interoperability problems, not fundamental autonomy risks.':
    'Agent ke beech ke protocol aapas mein judne ki samasya hal karte hain, apne-aap chalne ke mool khatre nahi.',
  'Draw a two-agent exchange with identity and delegation boundaries.':
    'Do agent ka aadan-pradaan banaiye, pehchaan aur kaam saunpne ki lakeeron ke saath.',
  'Define what data and authority may cross the boundary.':
    'Tay kijiye ki kaunsa data aur kaunsa adhikaar us lakeer ko paar kar sakta hai.',
  'Create a malicious or confused handoff and identify the control that should stop it.':
    'Ek nuksaan-bhara ya uljha hua kaam-saunpna banaiye aur pehchaaniye kaunsa control use rokna chahiye.',
  'Agent Interoperability Trust Model.':
    'Agent ke aapasi mel ka bharosa model.',
  'What does the receiving agent actually trust?':
    'Lene wala agent asal mein kis par bharosa kar raha hai?',
  'Keep the focus on architecture and governance, not protocol trivia.':
    'Dhyaan architecture aur governance par rakhiye, protocol ki chhoti baaton par nahi.',
  'The next chapter changes the input modality while preserving the same context/evaluation architecture.':
    'Agla chapter input ka roop badalta hai, lekin context aur evaluation ka wahi architecture bachaye rakhta hai.',
  'Understand why a PDF is a layout object, not just a text file.':
    'Samajhiye ki PDF ek layout ki cheez hai, sirf text ki file nahi.',
  'Text extraction can lose tables, reading order, images, headers and spatial meaning.':
    'Text nikaalne mein table, padhne ka kram, tasveerein, header aur jagah se banne wala arth — sab kho sakte hain.',
  'Compare extracted text with the rendered page.':
    'Nikaale gaye text ki tulna dikhte hue panne se kijiye.',
  'Record information lost and design a fallback.':
    'Jo jaankari khoyi woh likhiye, aur ek vikalp banaiye.',
  'Use a scan and a table-heavy page.':
    'Ek scan aur ek table se bhara panna lijiye.',
  'Document Understanding Gap Report.':
    'Document samajhne ki kami ki report.',
  'Which questions cannot be answered from plain text?':
    'Kaunse sawaalon ka jawaab saade text se nahi mil sakta?',
  'This is a retrieval-quality problem before it is an LLM problem.':
    'Yeh LLM ki samasya hone se pehle retrieval ki gunvatta ki samasya hai.',
  'Vision and image evidence':
    'Drishti aur tasveer ka saboot',
  'Use image evidence with explicit provenance and evaluation.':
    'Tasveer wale saboot ko saaf provenance aur evaluation ke saath istemaal kijiye.',
  'Vision models can interpret visual information, but interpretation is still probabilistic.':
    'Vision model tasveer ka matlab nikaal sakte hain, lekin woh matlab ab bhi sambhaavna par tika hai.',
  'Ask five questions about an image/table and label the evidence region.':
    'Kisi tasveer ya table par paanch sawaal poochhiye aur saboot wale hisse par nishaan lagaiye.',
  'Record source image, question, answer and human verification.':
    'Mool tasveer, sawaal, jawaab aur insaan ki pushti — chaaron likhiye.',
  'Use low-resolution or ambiguous images.':
    'Dhundhli ya kam saaf tasveerein lijiye.',
  'Vision Evaluation Set.':
    'Vision ka evaluation set.',
  'Which outputs require human verification?':
    'Kaunse output par insaan ki pushti zaroori hai?',
  'Visual claims should be traceable to the source image.':
    'Tasveer par aadharit daawe mool tasveer tak peechha kiye ja sakne chahiye.',
  'Audio and speech pipelines':
    'Audio aur bolne ki pipeline',
  'Understand capture ® ASR ® normalization ® extraction ® confirmation ® action.':
    'Samajhiye: rikord karna ® ASR ® seedha karna ® nikaalna ® pushti ® kaam.',
  'Voice AI is a pipeline with multiple failure surfaces, not one model call.':
    'Voice AI kai jagah tootne wali ek pipeline hai, ek model call nahi.',
  'Use a short audio sample and inspect transcript quality.':
    'Ek chhota audio namoona lijiye aur transcript ki gunvatta dekhiye.',
  'Extract tasks from the transcript into structured JSON.':
    'Transcript se kaam nikaal kar dhaanche wale JSON mein daaliye.',
  'Test accents, overlapping speech, names and mixed-language content.':
    'Alag lehje, ek saath bolna, naam aur mili-juli bhasha — sab jaanchiye.',
  'Voice Pipeline Spec + 10-case audio eval set.':
    'Voice pipeline ka spec aur dus case ka audio evaluation set.',
  'Where can an error first enter the pipeline?':
    'Galti pipeline mein sabse pehle kahan ghus sakti hai?',
  'For meeting/task automation, confirmation and privacy are part of the product.':
    'Meeting ya kaam apne-aap karne wale product mein pushti aur niji-ta product ka hissa hain.',
  'Streaming and latency':
    'Streaming aur latency',
  'Understand why voice and interactive multimodal systems care about partial results and time-to-first-response.':
    'Samajhiye ki voice aur baatcheet wale multimodal system adhoore nateejon aur pehle jawaab tak lagne wale samay ki parwah kyun karte hain.',
  'Users perceive latency differently from servers; streaming can improve perceived responsiveness without changing total work.':
    'User latency ko server se alag mehsoos karte hain; streaming kul kaam badle bina bhi tezi ka ehsaas badha deti hai.',
  'Measure stage-by-stage latency for a sample request.':
    'Ek namoona request ke liye har charan ki latency naapiye.',
  'Separate capture, transcription, model and action latency.':
    'Rikord karne, transcript banane, model aur kaam — chaaron ki latency alag kijiye.',
  'Add artificial delay to one stage and identify the UX effect.':
    'Ek charan mein nakli deri daaliye aur dekhiye user ko kaisa lagta hai.',
  'Latency Budget for Multimodal Flow.':
    'Multimodal bahaav ke liye latency ka budget.',
  'What latency target is actually user-visible?':
    'Kaunsa latency lakshya user ko sach mein dikhta hai?',
  'Do not optimize the fastest component while the user waits on another.':
    'Sabse tez hisse ko aur tez mat kijiye jab user kisi aur hisse ka intezaar kar raha ho.',
  'Multimodal RAG evaluation':
    'Multimodal RAG ka evaluation',
  'Design tests where the answer depends on modality-specific evidence.':
    'Aise test banaiye jinka jawaab kisi khaas modality ke saboot par tika ho.',
  'A text-only evaluation set can hide multimodal failures.':
    'Sirf text wala evaluation set multimodal galtiyon ko chhupa leta hai.',
  'Create five text-only, five visual/table and five audio cases.':
    'Paanch sirf-text, paanch tasveer ya table, aur paanch audio case banaiye.',
  'Score evidence correctness, extraction correctness and end-to-end task success.':
    'Saboot ki sahi-ta, nikaalne ki sahi-ta, aur poore kaam ki safalta — teenon ko score dijiye.',
  'Add a poor scan, noisy audio and multilingual case.':
    'Ek kharab scan, shor bhara audio aur kai bhasha wala case jodiye.',
  'Modality-specific Evaluation Matrix.':
    'Modality ke hisaab se evaluation matrix.',
  'Which failure belongs to extraction versus reasoning?':
    'Kaunsi galti nikaalne ki hai aur kaunsi soch ki?',
  'The metric stack should reveal the broken component, not just the final answer.':
    'Metric ki parton se toota hua hissa dikhna chahiye, sirf aakhri jawaab nahi.',
  'Now we need a systematic way to prove whether all these components work.':
    'Ab humein ek vyavasthit tareeka chahiye yeh sabit karne ka ki yeh saare hisse chalte hain ya nahi.',
  'Golden datasets':
    'Golden dataset',
  'Create a versioned set of representative, edge and failure cases.':
    'Pratinidhi, kinaare ke aur fail hone wale case ka ek version wala set banaiye.',
  'A golden dataset is the memory of what “good” means for your application.':
    'Golden dataset woh yaad hai jo batati hai ki aapke application ke liye “achha” kya hai.',
  'Create at least 30 cases across happy path, paraphrase, ambiguity, no-answer, multilingual, adversarial and tool-use.':
    'Kam se kam tees case banaiye: seedha raasta, ghuma kar poochhna, dhundhlapan, jawaab-nahi, kai bhasha, hamla aur tool ka istemaal.',
  'Store expected behavior and evidence IDs where possible.':
    'Jahan ho sake, apekshit vyavhaar aur saboot ki ID sahej lijiye.',
  'Remove a category and see which regressions become invisible.':
    'Ek shreni hataiye aur dekhiye kaunsi giravat ab dikhti hi nahi.',
  'Golden Dataset v1.0.':
    'Golden Dataset v1.0.',
  'Does the set represent actual user risk, not just easy demos?':
    'Kya yeh set asli user ke khatre ko dikhata hai, sirf aasaan demo ko nahi?',
  'The dataset becomes the product-quality contract.':
    'Yahi dataset product ki gunvatta ka contract ban jaata hai.',
  'Classify failures so fixes target causes rather than symptoms.':
    'Galtiyon ko aise baantiye ki sudhaar lakshan par nahi, kaaran par lage.',
  '“Wrong answer” is too coarse to guide engineering.':
    '“Jawaab galat hai” itna mota hai ki usse engineering ko raasta nahi milta.',
  'Create categories: retrieval miss, wrong chunk, stale data, instruction failure, schema failure, tool failure, authorization failure, hallucination.':
    'Shreniyan banaiye: retrieval chook, galat chunk, purana data, nirdesh ki galti, schema ki galti, tool ki galti, permission ki galti, aur gadha hua jawaab.',
  'Label 20 real failures.':
    'Bees asli galtiyon par naam lagaiye.',
  'Ask two people to label the same failures and compare disagreements.':
    'Do logon se wahi galtiyan naam-baddh karwaiye aur matbhed ki tulna kijiye.',
  'Error Taxonomy + labeled examples.':
    'Galtiyon ka vargikaran aur naam lage udaharan.',
  'Which categories are actionable?':
    'Kaunsi shreniyon par kuch kiya ja sakta hai?',
  'A useful taxonomy changes what the team does next.':
    'Kaam ka vargikaran wahi hai jo team ke agle kadam badal de.',
  'Retrieval metrics':
    'Retrieval ke metric',
  'Measure Recall@k, Precision@k and related ranking measures with explicit relevance labels.':
    'Recall@k, Precision@k aur kram ke dusre maap saaf relevance label ke saath naapiye.',
  'Metrics only mean something when the relevance definition is clear.':
    'Metric ka matlab tabhi hai jab relevance ki paribhasha saaf ho.',
  'For each query, mark which chunks are relevant. Calculate Recall@k and Precision@k.':
    'Har query ke liye nishaan lagaiye ki kaunse chunk kaam ke hain. Phir Recall@k aur Precision@k nikaaliye.',
  'Compare k=1, 3, 5 and 10.':
    'k=1, 3, 5 aur 10 ki tulna kijiye.',
  'Add distractor chunks and observe metric changes.':
    'Bhatkane wale chunk jodiye aur metric ka badalna dekhiye.',
  'Retrieval Evaluation Notebook.':
    'Retrieval evaluation ki notebook.',
  'What exactly counts as relevant?':
    'Theek-theek kya cheez kaam ki maani jaayegi?',
  'Never report a retrieval metric without its relevance policy.':
    'Retrieval ka koi metric uski relevance policy ke bina mat bataiye.',
  'Generation and task success':
    'Generation aur kaam ki safalta',
  'Evaluate whether the final answer is correct, grounded, complete and useful for the task.':
    'Jaanchiye ki aakhri jawaab sahi hai, saboot par tika hai, poora hai, aur us kaam ke liye kaam ka hai.',
  'A good retrieval score can coexist with a bad answer.':
    'Achha retrieval score aur kharab jawaab ek saath ho sakte hain.',
  'Define binary or graded criteria for answer correctness and groundedness.':
    'Jawaab ke sahi hone aur saboot par tike hone ke liye haan-naa ya star wale maapdand banaiye.',
  'Score a fixed sample with human labels.':
    'Ek tay namoone ko insaan ke label se score kijiye.',
  'Include partially correct and overconfident answers.':
    'Aadhe-sahi aur zaroorat se zyada aatmvishwaasi jawaab bhi rakhiye.',
  'Generation Rubric + labeled sample.':
    'Generation ka rubric aur naam laga namoona.',
  'Can two evaluators apply the rubric consistently?':
    'Kya do jaanchne wale is rubric ko ek jaisa laga paate hain?',
  'Acceptance criteria should be observable, not “sounds good.”':
    'Acceptance criteria dikhne laayak hone chahiye, “achha lagta hai” nahi.',
  'Use model-based judges where deterministic checks are insufficient, then validate them against human labels.':
    'Jahan nishchit jaanch kaafi na ho wahan model wale judge istemaal kijiye — phir unhen insaan ke label ke saamne jaanchiye.',
  'A judge is another probabilistic component, not an oracle.':
    'Judge bhi sambhaavna par chalne wala ek hissa hai, koi devvaani nahi.',
  'Have a judge score 20 examples for groundedness or relevance.':
    'Kisi judge se bees udaharan ko saboot par tike hone ya kaam ke hone par score karwaiye.',
  'Compare judge decisions with human labels and calculate disagreement.':
    'Judge ke faislon ki insaan ke label se tulna kijiye aur matbhed naapiye.',
  'Swap answer order or vary verbosity to test position/verbosity bias.':
    'Jawaabon ka kram badliye ya lambaai ghataiye-badhaiye, taaki jagah aur lambaai ka jhukaav jaancha ja sake.',
  'Judge Validation Report.':
    'Judge ki jaanch ki report.',
  'Where does the judge disagree and why?':
    'Judge kahan asehmat hota hai, aur kyun?'

});
