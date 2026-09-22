/* Hinglish: the v4.2 hands-on units, part 5 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'Never let an unvalidated judge silently become your release authority.':
    'Bina jaanche judge ko chupchaap apna release ka maalik mat bannne dijiye.',
  'Regression and CI gates':
    'Giravat aur CI ke gate',
  'Run evaluation automatically when prompts, models, indexes or tools change.':
    'Jab prompt, model, index ya tool badlein, evaluation apne-aap chalwaiye.',
  'AI systems can regress without a code compile error.':
    'AI system bina kisi code error ke bhi peechhe khisak sakta hai.',
  'Create a command that runs the golden set and outputs a summary.':
    'Ek command banaiye jo golden set chalaye aur ek saar nikaale.',
  'Set thresholds and fail the run when quality or safety falls below them.':
    'Seemaayein tay kijiye, aur gunvatta ya safety unse neeche jaate hi run ko fail kar dijiye.',
  'Change a prompt and verify CI catches the regression.':
    'Ek prompt badliye aur dekhiye ki CI giravat pakadta hai ya nahi.',
  'Automated Evaluation Suite + Release Gate.':
    'Apne-aap chalne wala evaluation suite aur release gate.',
  'What exact condition blocks release?':
    'Theek kaunsi shart release rok deti hai?',
  'This is the AI equivalent of a test suite with probabilistic behavior.':
    'Yeh AI ka woh test suite hai jiska vyavhaar sambhaavna par chalta hai.',
  'Evaluation release decision':
    'Release ka faisla',
  'Combine quality, safety, latency and cost into a release decision without hiding trade-offs.':
    'Gunvatta, safety, latency aur lagat ko ek release ke faisle mein jodiye — samjhaute chhupaye bina.',
  'Shipping is a multi-dimensional decision; one aggregate score can hide unacceptable failures.':
    'Ship karna kai paimaanon ka faisla hai; ek kul score naakabil-e-bardaasht galtiyan chhupa leta hai.',
  'Define quality threshold, safety threshold, latency SLO, cost ceiling and rollback trigger.':
    'Gunvatta ki seema, safety ki seema, latency ka SLO, lagat ki chhat aur rollback ka trigger tay kijiye.',
  'Run a candidate release through the gate.':
    'Ek sambhaavit release ko is gate se guzaariye.',
  'Create a model that improves quality but violates cost or safety.':
    'Ek aisa model banaiye jo gunvatta badhaye par lagat ya safety ki seema tode.',
  'Release Decision Record.':
    'Release ke faisle ka record.',
  'Which threshold is non-negotiable?':
    'Kaunsi seema par koi mol-bhaav nahi?',
  'A PM owns the decision framework even when engineers own the implementation.':
    'Banane ka zimma engineer ka ho tab bhi faisle ka dhaancha PM ka hota hai.',
  'Once evaluation exists, we need to observe the system continuously.':
    'Evaluation ban jaane ke baad humein system par lagaataar nazar rakhni hoti hai.',
  'Trace one request':
    'Ek request ka trace',
  'Build a structured trace for one AI request.':
    'Ek AI request ke liye dhaanche wala trace banaiye.',
  'A trace is a timeline and evidence bundle for one execution.':
    'Trace ek hi baar chalne ka samay-krama aur saboot ka pulinda hai.',
  'Record request ID, model, prompt version, retrieved IDs, tools, latency, tokens and outcome.':
    'Request ID, model, prompt ka version, laayi gayi ID, tool, latency, token aur nateeja likhiye.',
  'Persist the trace as JSON.':
    'Trace ko JSON mein sahej lijiye.',
  'Remove one field and ask whether you could still reproduce the incident.':
    'Ek field hataiye aur poochhiye ki kya aap ghatna ab bhi dobara bana sakte hain.',
  'Trace Schema v1.0.':
    'Trace Schema v1.0.',
  'What minimum evidence is required for debugging?':
    'Debug karne ke liye kam se kam kitna saboot chahiye?',
  'Observability requirements should be written before production incidents.':
    'Observability ki zaroortein production mein ghatna hone se pehle likh leni chahiye.',
  'Latency and throughput':
    'Latency aur throughput',
  'Measure stage-level latency and distinguish p50 from p95.':
    'Har charan ki latency naapiye aur p50 ko p95 se alag pehchaaniye.',
  'Average latency can hide slow tails that users experience.':
    'Ausat latency un dheemi poonchhon ko chhupa leti hai jo user sach mein jhelte hain.',
  'Measure retrieval, reranking, model and tool stages.':
    'Retrieval, reranking, model aur tool — chaaron charanon ko naapiye.',
  'Calculate p50 and p95 for a small run or larger sample where available.':
    'Ek chhote run, ya jahan mile wahan bade namoone, ke liye p50 aur p95 nikaaliye.',
  'Add an artificial slow dependency and identify its effect on p95.':
    'Ek nakli dheemi dependency jodiye aur p95 par uska asar pehchaaniye.',
  'Latency Budget + p50/p95 report.':
    'Latency ka budget aur p50/p95 ki report.',
  'Which stage owns the tail?':
    'Poonchh kis charan ki hai?',
  'SLOs should map to user experience, not just server metrics.':
    'SLO user ke anubhav se judne chahiye, sirf server ke metric se nahi.',
  'Token and cost telemetry':
    'Token aur lagat ki telemetry',
  'Track input/output tokens and other variable costs at task level.':
    'Input aur output ke token tatha baaki badalti lagat ko kaam ke star par naapiye.',
  'Cost is an architecture metric because context, model, retries and routing change spend.':
    'Lagat architecture ka metric hai, kyunki context, model, dobara koshish aur routing kharch badal dete hain.',
  'Calculate cost per request using current provider pricing when implementing the lab.':
    'Lab karte waqt provider ke abhi ke daam se har request ki lagat nikaaliye.',
  'Compare two model/context strategies.':
    'Do model ya context strategy ki tulna kijiye.',
  'Add retries and large context to see cost growth.':
    'Dobara koshish aur bada context jodiye, taaki lagat ka badhna dikhe.',
  'Unit Economics Model v1.0.':
    'Unit Economics Model v1.0.',
  'What is cost per successful task, not merely cost per call?':
    'Har safal kaam ki lagat kya hai — sirf har call ki nahi?',
  'Finance conversations become easier when every architecture choice has a measurable cost impact.':
    'Jab har architecture ke chunaav ki lagat naapi ja sakti ho, tab paise ki baatcheet aasaan ho jaati hai.',
  'Drift and feedback':
    'Behkaav aur feedback',
  'Detect quality changes after data, prompt, model or user behavior changes.':
    'Data, prompt, model ya user ke vyavhaar badalne ke baad gunvatta ka badalna pakadiye.',
  'AI degradation may occur without a code change.':
    'AI bina kisi code badlaav ke bhi kamzor pad sakta hai.',
  'Create a baseline evaluation and compare a later sample.':
    'Ek shuruati evaluation banaiye aur baad ke namoone se tulna kijiye.',
  'Track complaint type, no-answer rate, escalation and task success.':
    'Shikayat ka prakaar, jawaab-nahi ka anupaat, aage badhaye gaye maamle aur kaam ki safalta naapiye.',
  'Inject a changed document format or new user phrasing.':
    'Badla hua document format ya user ke bolne ka naya tareeka daaliye.',
  'Drift/Feedback Report.':
    'Behkaav aur feedback ki report.',
  'Which signal tells you quality changed before complaints explode?':
    'Kaunsa sanket shikayaton ke phatne se pehle bata deta hai ki gunvatta badal gayi?',
  'Online signals complement offline evaluation.':
    'Chalte system ke sanket offline evaluation ke saath milkar kaam karte hain.',
  'Versioning and rollback':
    'Version aur wapas lautna',
  'Version prompts, models, indexes, schemas and tool contracts.':
    'Prompt, model, index, schema aur tool contract — sab ke version rakhiye.',
  'If an AI system cannot be rolled back component-wise, debugging becomes guesswork.':
    'Agar AI system ke hisse alag-alag wapas nahi laute ja sakte, to debug karna sirf anumaan reh jaata hai.',
  'Create version IDs for prompt, model, index and tool schema.':
    'Prompt, model, index aur tool schema ke liye version ID banaiye.',
  'Run two versions side by side.':
    'Do version saath-saath chalaiye.',
  'Simulate a bad prompt release and roll back.':
    'Ek kharab prompt release ka abhyaas kijiye aur wapas lautiye.',
  'Version Matrix + Rollback Procedure.':
    'Version matrix aur wapas lautne ki prakriya.',
  'Can you identify exactly what changed?':
    'Kya aap theek-theek bata sakte hain ki kya badla?',
  'Versioning is a delivery-control mechanism, not paperwork.':
    'Version rakhna delivery par kaabu ka tareeka hai, kaagzi kaam nahi.',
  'Production dashboard':
    'Production ka dashboard',
  'Turn the telemetry into a six-panel operational view: quality, safety, latency, cost, traffic, failures.':
    'Telemetry ko chhah panel ke chalte-hue drishya mein badliye: gunvatta, safety, latency, lagat, traffic aur galtiyan.',
  'A dashboard should answer “is the system healthy?” and “where do I investigate?”':
    'Dashboard ko do sawaalon ka jawaab dena chahiye: “system theek hai?” aur “main kahan dekhoon?”',
  'Define metric, source, owner and threshold for each panel.':
    'Har panel ke liye metric, source, zimmedar aur seema tay kijiye.',
  'Create a mock dashboard or spreadsheet.':
    'Ek nakli dashboard ya spreadsheet banaiye.',
  'Remove one signal at a time and see which incident becomes harder to diagnose.':
    'Ek-ek kar ke sanket hataiye aur dekhiye kaunsi ghatna pakadna mushkil ho jaati hai.',
  'Six-Panel Observability Specification.':
    'Chhah panel wale observability ka specification.',
  'Which alerts should page a human and which should only be monitored?':
    'Kaunse alert par insaan ko jagana chahiye aur kaunse par sirf nazar rakhni chahiye?',
  'Operational clarity is a PM responsibility as much as a platform responsibility.':
    'Rozmarra ki saaf-saaf samajh jitni platform ki zimmedari hai utni hi PM ki.',
  'The next chapter treats the same system as an adversarial target.':
    'Agla chapter isi system ko hamle ke nishaane ki tarah dekhta hai.',
  'Understand direct and indirect prompt injection as untrusted-input attacks.':
    'Seedhe aur ghuma kar kiye gaye prompt injection ko bina-bharose ke input ka hamla maan kar samajhiye.',
  'Instructions embedded in user or retrieved content can compete with application instructions.':
    'User ke ya laaye gaye maal ke andar chhupe nirdesh application ke nirdeshon se hod kar sakte hain.',
  'Place malicious instructions in a document and test the RAG assistant.':
    'Kisi document mein nuksaan-bhare nirdesh rakhiye aur RAG assistant ko jaanchiye.',
  'Separate trusted control instructions from untrusted evidence.':
    'Bharose wale control nirdeshon ko bina-bharose ke saboot se alag rakhiye.',
  'Try to make the model reveal a secret or invoke a tool through retrieved text.':
    'Laaye gaye text ke zariye model se koi secret ugalwaane ya tool chalwaane ki koshish kijiye.',
  'Prompt Injection Test Report.':
    'Prompt injection ki test report.',
  'What control stopped the attack: model behavior or application policy?':
    'Hamla kis cheez ne roka: model ka vyavhaar ya application ki policy?',
  'Never describe prompt text alone as a security boundary.':
    'Sirf prompt ke text ko security ki lakeer kabhi mat kahiye.',
  'Sensitive information disclosure':
    'Sanvedansheel jaankari ka rista',
  'Protect secrets, PII and confidential data in prompts, retrieval and traces.':
    'Secret, niji jaankari aur gopniya data ko prompt, retrieval aur trace — teenon mein bachaiye.',
  'A model can only protect information if the application controls what it receives and can return.':
    'Model jaankari tabhi bacha sakta hai jab application yeh tay kare ki use kya milta hai aur woh kya lauta sakta hai.',
  'Create a test corpus with synthetic sensitive fields.':
    'Nakli sanvedansheel field wala ek test corpus banaiye.',
  'Apply filtering/redaction before model access and log access decisions.':
    'Model tak pahunchne se pehle chhaan-bin ya kaali lakeer lagaiye, aur pahunch ke faisle likh lijiye.',
  'Ask for another user’s data through natural language and tool calls.':
    'Saadhi bhasha se aur tool call se kisi dusre user ka data maang kar dekhiye.',
  'Data Leakage Test Matrix.':
    'Data riste ki test matrix.',
  'Where is authorization enforced?':
    'Permission kahan laagu hoti hai?',
  'Privacy requirements must be mapped to data flows, not just policy documents.':
    'Niji-ta ki zaroortein data ke bahaav se judni chahiye, sirf policy ke kaagzon se nahi.',
  'Improper output handling':
    'Output ko galat tareeke se sambhaalna',
  'Validate model output before passing it to downstream systems.':
    'Model ka output aage ke system ko dene se pehle jaanchiye.',
  'Generated text becomes dangerous when interpreted as trusted commands, SQL, HTML or business data.':
    'Banaya hua text tab khatarnaak ho jaata hai jab use bharose wala command, SQL, HTML ya business data maan liya jaaye.',
  'Create a structured output and validate it against allowed values.':
    'Ek dhaanche wala output banaiye aur use maanya maanon ke saamne jaanchiye.',
  'Use allowlists and typed interfaces before execution.':
    'Chalane se pehle allowlist aur type wale interface istemaal kijiye.',
  'Inject malicious strings into generated fields.':
    'Bani hui field mein nuksaan-bhare string daaliye.',
  'Output Validation Checklist + tests.':
    'Output jaanchne ki checklist aur test.',
  'What downstream component could interpret the output?':
    'Aage ka kaunsa hissa is output ko padh kar chala sakta hai?',
  'Treat model output as untrusted input.':
    'Model ke output ko bina-bharose ka input maaniye.',
  'Limit the tools and actions available to autonomous systems.':
    'Apne-aap chalne wale system ko mile tool aur kaam seemit kijiye.',
  'More permissions increase blast radius.':
    'Jitni zyada permission, utna bada nuksaan ka daayra.',
  'Classify each tool by privilege and reversibility.':
    'Har tool ko uske adhikaar aur palte jaa sakne ke hisaab se baantiye.',
  'Remove unnecessary tools and compare task success.':
    'Bekaar ke tool hataiye aur kaam ki safalta ki tulna kijiye.',
  'Try a task that requests an irreversible action.':
    'Ek aisa kaam aazmaiye jo na palat sakne wali cheez maangta ho.',
  'Agency Permission Matrix.':
    'Apne-aap chalne ki permission matrix.',
  'What is the maximum damage if the model is wrong?':
    'Agar model galat hua to adhiktam nuksaan kitna hoga?',
  'Autonomy should be bounded by business risk.':
    'Apne-aap chalne ki seema business ke khatre se tay honi chahiye.',
  'Retrieval authorization':
    'Retrieval ki permission',
  'Enforce ACLs and tenant boundaries before evidence reaches generation.':
    'Saboot ke generation tak pahunchne se pehle ACL aur tenant ki lakeerein laagu kijiye.',
  'Correct retrieval from the wrong tenant is a security breach.':
    'Galat tenant se sahi retrieval bhi security ki sendh hai.',
  'Create two users and two document groups.':
    'Do user aur do document samooh banaiye.',
  'Apply metadata filters server-side.':
    'Metadata ke filter server ki taraf lagaiye.',
  'Attempt cross-tenant and stale-permission retrieval.':
    'Ek tenant se dusre ka, aur purani permission wala retrieval aazmaiye.',
  'ACL Retrieval Test Report.':
    'ACL retrieval ki test report.',
  'Can the model ever see evidence it is not authorized to access?':
    'Kya model kabhi aisa saboot dekh sakta hai jiski use ijaazat nahi?',
  'The model should not be asked to “remember” authorization rules as the only control.':
    'Permission ke niyam “yaad rakhna” model ka akela control nahi hona chahiye.',
  'Audit logging':
    'Audit ka log',
  'Capture enough evidence to reconstruct security-relevant actions.':
    'Itna saboot sahej lijiye ki security se jude kaam dobara jode ja sakein.'

});
