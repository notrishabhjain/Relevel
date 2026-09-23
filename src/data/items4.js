/* Question bank, part 4 — the decisions that outlive an architecture.
   [id, skill, difficulty, type, stem, options, answer, why] */
window.ITEMS4 = [

/* ---- S31 Adaptation strategy ---- */
['I138','S31',1,'mcq','Fine-tuning a model primarily teaches it:',
 ['New facts about your business','A behaviour — format, tone, structure, how to respond',
  'To retrieve documents more accurately','To reason through more steps'],1,
 'Fine-tuning adjusts the model’s behaviour from examples of inputs and desired outputs. It is extremely good at “always answer in this shape, in this register, following these conventions.” It is a poor and expensive way to add facts. Facts change, and a fine-tuned model must be retrained to learn that they did.'],

['I139','S31',2,'mcq','Users complain the assistant does not know your 2026 policy, which was published last month. Which lever is the right one?',
 ['Fine-tune on the new policy','Retrieval — index the policy and cite it',
  'A longer system prompt describing the policy','Switch to a larger model'],1,
 'This is a knowledge gap, and knowledge that changes belongs in retrieval where it can be updated, versioned and cited. Fine-tuning fixes it in place until the next training run. A system prompt works only until the policy is long enough to crowd the context. Neither gives the user a citation to check.'],

['I140','S31',2,'mcq','What is the strongest reason to exhaust prompting and retrieval before fine-tuning?',
 ['Fine-tuning is technically difficult',
  'They are reversible and measurable in hours; tuning adds a dataset, a training cycle and a dependency you must maintain',
  'Fine-tuning always performs worse','Providers discourage it'],1,
 'Fine-tuning is not bad. But the first two options are cheap to try and cheap to undo, so ruling them out costs about a day. Tuning commits you to building and maintaining a labelled dataset, re-running it on every model change, and losing the ability to switch providers easily. Spend that only after the cheap levers have failed against a measurement.'],

['I141','S31',3,'multi','Which of these must already exist before "should we fine-tune?" is a question that can be answered?',
 ['An eval suite with ground truth you trust',
  'A named failure mode, with counts, from real traffic',
  'A labelled dataset of inputs and desired outputs, and a plan to maintain it',
  'Evidence that prompting and retrieval did not fix it',
  'A budget approved by finance'],[0,1,2,3],
 'The first four make the decision. Without an eval, you cannot tell whether fine-tuning helped. Without a named failure with counts, you do not know what you are fixing. Without a dataset, there is nothing to train on and no way to repeat it after the next model is retired. And without trying the reversible options first, you pay the expensive price first. The budget follows from the decision.'],

['I142','S31',3,'judge','A senior stakeholder asks, in a roadmap review, "why aren’t we fine-tuning?" Write the reply that turns the question into a decision rather than a preference.',
 null,
 'A strong reply refuses both the yes and the no, and asks what kind of wrong the system currently is. Roughly: “Tell me the failure you want fixed and I will tell you which lever fixes it. If it does not know something, that is retrieval — and tuning would bake in a fact that changes. If it knows but answers in the wrong shape or register, that is prompting first and tuning second, and I can test prompting this week. If it cannot do the reasoning, that is a different model or a thinking budget. Right now our error taxonomy says the top cluster is retrieving the right document and the wrong clause, which no amount of tuning touches. When a cluster shows up that is behavioural, tuning is the right tool and I will need a labelled set and an owner to maintain it, because it has to be re-run every time the base model is deprecated.”'],

['I143','S31',3,'mcq','A distilled small model most reliably beats a frontier model when the task is:',
 ['Open-ended and varied, with high accuracy demands',
  'Narrow and repetitive, at high volume, where latency or cost dominates',
  'Novel, with no examples available','Reasoning-heavy with many dependent steps'],1,
 'Distillation trades generality for a narrow competence at a fraction of the cost and latency. That trade is excellent for classification, routing, extraction and other high-volume repetitive work, and poor everywhere the variety is the point. The economics only work when volume is high enough that the cost difference exceeds the effort of building and maintaining the smaller model.'],

/* ---- S32 Interface design for uncertainty ---- */
['I144','S32',1,'mcq','The primary purpose of showing sources beside an AI-generated answer is:',
 ['To signal sophistication','To let the user verify the claim cheaply',
  'To satisfy the legal team','To improve the model’s accuracy'],1,
 'Citations exist so that checking is cheaper than trusting. So a citation that does not open the actual passage is worse than none. It looks checkable but cannot be checked, and the user cannot tell the difference.'],

['I145','S32',2,'mcq','Which output should NOT be streamed token by token as it is generated?',
 ['A long explanatory answer','A drafted email the user will edit',
  'A number the model may revise as it continues — a total, an amount, a count',
  'A summary of a document'],2,
 'Streaming is a latency illusion that works because prose reads left to right. A figure that appears and then changes as generation continues is worse than a spinner: the user has already read it, and may have acted on it. Numbers, decisions and anything a user might screenshot should appear once, settled.'],

['I146','S32',3,'mcq','Your model returns a confidence score. What is the strongest way to use it in the interface?',
 ['Display it as a percentage next to the answer',
  'Colour the answer green, amber or red by threshold',
  'Route by it — high confidence answers directly, low confidence shows evidence first or asks a question',
  'Hide it; users find numbers confusing'],2,
 'A displayed confidence number asks the user to judge something they cannot calibrate. Model-reported confidence is also often poorly calibrated. Use the score as a routing signal inside your product. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.'],

['I147','S32',3,'multi','What makes a correction path valuable rather than decorative?',
 ['It captures what the user expected instead, not only that they were unhappy',
  'It records the retrieved evidence alongside the correction',
  'It is faster than abandoning the feature and doing the task manually',
  'It feeds the failure taxonomy that drives the roadmap',
  'It thanks the user for their feedback'],[0,1,2,3],
 'A thumbs-down with no context is close to worthless: it says something was wrong and nothing about what. A correction that captures the expected answer and the evidence the system was working from converts a complaint into an eval case. And if correcting is slower than doing it by hand, nobody corrects — so the path has to be cheaper than the workaround, or you collect nothing.'],

['I148','S32',3,'mcq','Which screen most determines whether users trust an AI feature over time?',
 ['The successful answer','The loading state',
  'The refusal or empty state — what it shows when it has nothing good to say',
  'The onboarding tour'],2,
 'Every system is impressive when it works. Trust depends on what happens when it cannot answer. A system that says “I don’t have that” and offers a route to a person is rightly trusted more than one that always produces something. This screen is designed last or not at all, which is why so many AI features feel unreliable despite good average accuracy.'],

['I149','S32',3,'judge','Write the interface contract for an AI feature you know. What does it show when it is confident, and when it is not? What can the user do when it is wrong? What does the feature still do when the AI is turned off?',
 null,
 'A strong answer treats uncertainty as a design input rather than an engineering embarrassment. Confident: the answer with resolvable citations, and an action the user can take directly. Unconfident: the evidence first with the answer framed as a draft, or a clarifying question rather than a guess — and never the same visual treatment as a confident answer. Wrong: an edit path that captures the expected answer and the evidence, faster than doing the task manually, feeding the failure taxonomy. Off: the feature degrades to something that still works — search without generated answers, a form without extraction, a queue without routing — because the kill switch is only usable if there is a product underneath it.']

];
