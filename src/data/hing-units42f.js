/* Hinglish: the v4.2 hands-on units, part 6 of 7. */
Object.assign(window.HING = window.HING || {}, {

  'An audit trail should show who, what, when, which policy, which tool, and what happened.':
    'Audit ke nishaan se dikhna chahiye: kisne, kya, kab, kis policy ke tehat, kis tool se, aur phir kya hua.',
  'Design an audit record for a tool action.':
    'Kisi tool ke kaam ke liye ek audit record banaiye.',
  'Write approval and execution events separately.':
    'Manzoori aur kaam hone ki ghatna alag-alag likhiye.',
  'Modify a payload after approval and verify the mismatch is visible.':
    'Manzoori ke baad payload badliye aur dekhiye ki bemel saaf dikh raha hai.',
  'Audit Log Schema + sample trail.':
    'Audit log ka schema aur ek namoona nishaan.',
  'Could an incident responder reconstruct the action?':
    'Kya ghatna sambhaalne wala us kaam ko dobara jod paayega?',
  'Auditability is part of production readiness.':
    'Jaancha ja sakna production ke liye taiyaar hone ka hissa hai.',
  'Governance and risk register':
    'Governance aur risk register',
  'Translate security and AI risks into owners, controls and evidence.':
    'Security aur AI ke khatron ko zimmedar, control aur saboot mein badliye.',
  'Governance becomes useful when each risk has a testable control and owner.':
    'Governance tab kaam ki hoti hai jab har khatre ke saath jaancha ja sakne wala control aur ek zimmedar ho.',
  'Create risk, impact, likelihood, control, owner, evidence and residual risk fields.':
    'Khatra, asar, sambhaavna, control, zimmedar, saboot aur bacha hua khatra — yeh field banaiye.',
  'Review the register with the capstone architecture.':
    'Register ko capstone ke architecture ke saath rakh kar dekhiye.',
  'Mark one control “policy only” and ask what evidence is missing.':
    'Ek control par “sirf policy” ka nishaan lagaiye aur poochhiye ki kaunsa saboot gayab hai.',
  'AI Risk Register.':
    'AI Risk Register.',
  'Which risks remain after controls?':
    'Control ke baad kaunse khatre bache rehte hain?',
  'A risk register is an operational artifact, not a compliance decoration.':
    'Risk register rozmarra ke kaam ki cheez hai, compliance ki sajaavat nahi.',
  'Security release gate':
    'Security ka release gate',
  'Turn red-team findings into release criteria.':
    'Red-team ki findings ko release ke maapdand mein badliye.',
  'Security tests must block release when the residual risk exceeds the agreed threshold.':
    'Jab bacha hua khatra tay seema paar kar jaaye, security test ko release rok dena chahiye.',
  'Define mandatory checks for injection, leakage, authorization and unsafe actions.':
    'Injection, riste, permission aur asurakshit kaamon ke liye anivaarya jaanch tay kijiye.',
  'Run the test suite before and after a prompt/model change.':
    'Prompt ya model badalne se pehle aur baad — dono baar test suite chalaiye.',
  'Create a change that improves quality but weakens security.':
    'Ek aisa badlaav banaiye jo gunvatta badhaye par security kamzor kar de.',
  'Security Go/No-Go Checklist.':
    'Security ki haan-ya-naa checklist.',
  'What is an automatic blocker?':
    'Kaunsi cheez apne-aap raasta rok deti hai?',
  'Security belongs in the same release process as quality and cost.':
    'Security ko gunvatta aur lagat wali usi release prakriya mein hona chahiye.',
  'Now convert the technical system into a product specification.':
    'Ab is technical system ko ek product ke specification mein badliye.',
  'AI problem framing':
    'AI ki samasya ko baandhna',
  'Decide whether AI is justified and define the user outcome.':
    'Tay kijiye ki AI sahi hai ya nahi, aur user ko kya milega yeh likhiye.',
  'Start with the workflow and pain, not the model.':
    'Shuruaat kaam ke tareeke aur takleef se kijiye, model se nahi.',
  'Write current process, user pain, baseline and measurable outcome.':
    'Abhi ka tareeka, user ki takleef, baseline aur naapa ja sakne wala nateeja likhiye.',
  'Build a non-AI baseline where possible.':
    'Jahan ho sake, bina AI ka ek baseline banaiye.',
  'Compare the AI idea with a deterministic alternative.':
    'AI wale vichaar ki tulna ek nishchit vikalp se kijiye.',
  'Problem Framing One-Pager.':
    'Samasya ko baandhne ka ek panna.',
  'Why AI instead of ordinary software?':
    'Saadharan software ke bajaay AI kyun?',
  'This prevents “AI-first” solutioning.':
    'Yeh “pehle AI” wali soch se bachata hai.',
  'AI acceptance criteria':
    'AI ke acceptance criteria',
  'Convert vague “correctness” into measurable thresholds.':
    'Dhundhle “sahi hona” ko naapi ja sakne wali seemaon mein badliye.',
  'AI output is variable, so “done” must define distributions and tolerances.':
    'AI ka output badalta rehta hai, isliye “ho gaya” ko bantvaara aur chhoot ki seema batani hogi.',
  'Write retrieval, generation, safety, latency and cost criteria.':
    'Retrieval, generation, safety, latency aur lagat ke maapdand likhiye.',
  'Attach each criterion to a test set and measurement method.':
    'Har maapdand ko ek test set aur naapne ke tareeke se jodiye.',
  'Create a case where quality improves but latency violates the SLO.':
    'Ek aisa case banaiye jismein gunvatta badhe par latency SLO tod de.',
  'AI Acceptance Criteria Sheet.':
    'AI acceptance criteria ki sheet.',
  'Can engineering run the test without asking what “good” means?':
    'Kya engineering yeh test bina poochhe chala sakti hai ki “achha” kya hai?',
  'Acceptance criteria are the contract between product and engineering.':
    'Acceptance criteria product aur engineering ke beech ka contract hain.',
  'Failure-first UX':
    'Pehle galti ko dhyaan mein rakh kar banaya gaya UX',
  'Design around uncertainty, ambiguity and failure rather than hiding them.':
    'Anishchitta, dhundhlepan aur galti ko chhupane ke bajaay unke aas-paas design kijiye.',
  'A good AI UX makes the system’s limits understandable and actionable.':
    'Achha AI UX system ki seemaon ko samajhne aur unpar kuch karne laayak bana deta hai.',
  'Design confident, uncertain and failed states.':
    'Bharosemand, dhundhli aur fail — teenon sthitiyon ka design kijiye.',
  'Add citations, clarification and fallback paths.':
    'Hawaale, saaf karne wale sawaal aur vikalp raaste jodiye.',
  'Remove citations/uncertainty cues and compare user interpretation.':
    'Hawaale aur anishchitta ke sanket hataiye aur dekhiye user ka matlab kaise badalta hai.',
  'Failure-First UX Flow.':
    'Galti-pehle wale UX ka bahaav.',
  'What does the user do when the AI cannot answer?':
    'Jab AI jawaab na de paaye, tab user kya karta hai?',
  'The fallback is part of the feature, not an afterthought.':
    'Vikalp raasta feature ka hissa hai, baad mein soochne wali cheez nahi.',
  'Human-in-the-loop UX':
    'Insaan ko beech mein rakhne wala UX',
  'Specify when a human reviews, approves, edits or overrides AI output.':
    'Tay kijiye ki insaan kab AI ka output dekhta, manzoori deta, sudhaarta ya palat deta hai.',
  'Human involvement should be targeted at high-risk or ambiguous transitions.':
    'Insaan ko wahan lagaiye jahan khatra bhaari ho ya baat dhundhli ho.',
  'Map decision points and approval payloads.':
    'Faisle ke bindu aur manzoori ke payload ka naksha banaiye.',
  'Measure review time and override rate.':
    'Jaanch mein lagne wala samay aur palatne ka anupaat naapiye.',
  'Create an approval that no longer matches the action.':
    'Ek aisi manzoori banaiye jo ab us kaam se mel nahi khaati.',
  'HITL Decision Map.':
    'Insaan-beech-mein wale faislon ka naksha.',
  'What does the human uniquely contribute?':
    'Insaan aisa kya deta hai jo aur koi nahi de sakta?',
  'HITL should reduce risk without becoming meaningless rubber-stamping.':
    'Insaan ka beech mein hona khatra ghataye, bas bina soche mohar lagana na ban jaaye.',
  'Metrics and experimentation':
    'Metric aur experiment',
  'Separate business outcomes from model and operational metrics.':
    'Business ke nateejon ko model aur rozmarra ke metric se alag rakhiye.',
  'Task completion is not the same as groundedness, and both differ from cost.':
    'Kaam poora hona aur saboot par tika hona ek baat nahi, aur dono lagat se alag hain.',
  'Create a metric tree with business, quality, safety, latency and cost layers.':
    'Ek metric ka ped banaiye jismein business, gunvatta, safety, latency aur lagat ki parten hon.',
  'Define an A/B or controlled comparison where appropriate.':
    'Jahan theek lage, ek A/B ya niyantrit tulna tay kijiye.',
  'Improve a model metric while worsening the business outcome.':
    'Model ka ek metric sudhaariye aur business ka nateeja bigaad dijiye.',
  'Metric Map + Experiment Plan.':
    'Metric ka naksha aur experiment ki yojana.',
  'Which metric decides whether the product is useful?':
    'Kaunsa metric tay karta hai ki product kaam ka hai ya nahi?',
  'A PM must prevent teams from optimizing a proxy.':
    'PM ko team ko kisi naqli metric ke peechhe bhaagne se rokna hota hai.',
  'Unit economics':
    'Unit economics',
  'Model token, retrieval, tool, infrastructure and human-review costs.':
    'Token, retrieval, tool, infrastructure aur insaani jaanch — sab ki lagat ka model banaiye.',
  'The real unit is often cost per successful task, not cost per request.':
    'Asli naap aksar har safal kaam ki lagat hoti hai, har request ki nahi.',
  'Create a spreadsheet with volume, token usage, model cost, retries, tools and review time.':
    'Ek spreadsheet banaiye jismein maatra, token, model ki lagat, dobara koshish, tool aur jaanch ka samay ho.',
  'Compare model routing and caching scenarios.':
    'Model routing aur caching ki alag sthitiyon ki tulna kijiye.',
  'Increase context or retry rate and see the margin effect.':
    'Context ya dobara koshish badhaiye aur munafe par asar dekhiye.',
  'AI Unit Economics Model.':
    'AI ka unit economics model.',
  'What happens at 10× volume?':
    'Das guna maatra par kya hoga?',
  'Cost belongs in architecture decisions from day one.':
    'Lagat pehle din se architecture ke faislon mein honi chahiye.',
  'AI PRD and release plan':
    'AI PRD aur release ki yojana',
  'Write a PRD an engineer can implement and a leader can evaluate.':
    'Aisa PRD likhiye jise engineer bana sake aur ek neta parakh sake.',
  'An AI PRD must specify context, failure behavior, evaluation and operating constraints.':
    'AI PRD mein context, galti par vyavhaar, evaluation aur chalane ki bandishein likhi honi chahiye.',
  'Complete problem, scope, inputs, context, tools, model behavior, failures, human role, metrics, safety, latency, cost, rollout and rollback.':
    'Samasya, daayra, input, context, tool, model ka vyavhaar, galtiyan, insaan ka kaam, metric, safety, latency, lagat, rollout aur rollback — sab poora kijiye.',
  'Run a review against the system you built.':
    'Jo system aapne banaya, uske saamne rakh kar ek review kijiye.',
  'Ask a reviewer to find a failure your PRD did not specify.':
    'Kisi se kahiye ki aisi galti dhoondhe jo aapke PRD mein likhi hi nahi thi.',
  'AI PRD + Release Gate + Metric Map.':
    'AI PRD, release gate aur metric ka naksha.',
  'Can the PRD answer “what happens when it is wrong?”':
    'Kya PRD “galat hone par kya hoga?” ka jawaab deta hai?',
  'This becomes one of your strongest portfolio artifacts.':
    'Yeh aapke portfolio ki sabse majboot cheezon mein se ek ban jaata hai.',
  'Next, we turn the product into a production architecture and delivery plan.':
    'Aage hum is product ko production ke architecture aur delivery ki yojana mein badalte hain.',
  'Inventory everything missing between notebook and service.':
    'Notebook aur chalti hui service ke beech jo kuch bhi gayab hai, uski soochi banaiye.',
  'Production adds identity, persistence, retries, queues, monitoring, secrets, deployment, backups, ACLs and rollback.':
    'Production mein pehchaan, bhandaaran, dobara koshish, kataar, nigraani, secret, deployment, backup, ACL aur rollback — sab jud jaate hain.',
  'Write a production delta list from your prototype.':
    'Apne prototype se production tak ka antar-soochi likhiye.',
  'Group items by must-have, should-have and later.':
    'Cheezon ko baantiye: zaroori, honi chahiye, aur baad mein.',
  'Remove one control and describe the resulting failure.':
    'Ek control hataiye aur usse hone wali galti likhiye.',
  'Production Delta Checklist.':
    'Production antar ki checklist.',
  'What would prevent you from going live tomorrow?':
    'Kal live jaane se aapko kya rokega?',
  'Reliability and resilience':
    'Bharosa aur sambhal paane ki taakat',
  'Design for provider errors, dependency failures, retries and graceful degradation.':
    'Provider ki galtiyan, dependency ka fail hona, dobara koshish aur shaalinta se kamzor padna — sab ke liye design kijiye.',
  'AI systems depend on services outside your control.':
    'AI system un service par tike hote hain jo aapke haath mein nahi.',
  'Create failure scenarios for model, retrieval, tool and network.':
    'Model, retrieval, tool aur network ke liye galti ki sthitiyan banaiye.',
  'Define timeout, retry, fallback and user-visible behavior.':
    'Timeout, dobara koshish, vikalp raasta aur user ko dikhne wala vyavhaar tay kijiye.',
  'Simulate provider outage and rate limiting.':
    'Provider ke band hone aur rate limit ka abhyaas kijiye.',
  'Reliability/Fallback Matrix.':
    'Bharose aur vikalp raaste ki matrix.',
  'What is the user experience during partial failure?':
    'Aadhi-adhoori galti ke waqt user ko kya mehsoos hota hai?',
  'A graceful degraded mode can be more valuable than a larger model.':
    'Shaalinta se kam kaam karne wali haalat bade model se zyada kaam ki ho sakti hai.',
  'Scalability and queues':
    'Badhne ki kshamta aur kataarein',
  'Understand synchronous versus asynchronous work and scaling bottlenecks.':
    'Saath-saath aur alag-alag samay chalne wale kaam, aur badhne mein aane wali rukaavatein samajhiye.',
  'Not every AI task belongs in the request/response path.':
    'Har AI kaam request aur response ke raaste par nahi hona chahiye.',
  'Map a long-running document ingestion job.':
    'Lambe chalne wale document ingestion kaam ka naksha banaiye.',
  'Separate upload, processing, indexing and status reporting.':
    'Upload, prakriya, index banana aur status batana — chaaron alag kijiye.',
  'Simulate 10× workload and identify the bottleneck.':
    'Das guna bojh ka abhyaas kijiye aur rukaavat pehchaaniye.',
  'Scalability Sketch + Capacity Assumptions.':
    'Badhne ki kshamta ka khaaka aur kshamta ke anumaan.',
  'Which component scales first and why?':
    'Kaunsa hissa sabse pehle badhta hai, aur kyun?',
  'Capacity planning should include model limits and external quotas.':
    'Kshamta ki yojana mein model ki seemaayein aur baahari quota bhi hone chahiye.',
  'Deployment and environments':
    'Deployment aur environment',
  'Separate development, staging and production with controlled configuration.':
    'Development, staging aur production ko niyantrit configuration ke saath alag rakhiye.',
  'A production AI system needs reproducible configuration and safe rollout.':
    'Production ke AI system ko dobara banaya ja sakne wala configuration aur surakshit rollout chahiye.',
  'Define environment variables, model versions, prompts and index versions per environment.':
    'Har environment ke liye environment variable, model ka version, prompt aur index ka version tay kijiye.'

});
