/* Question bank, part 4 — the decisions that outlive an architecture.
   [id, skill, difficulty, type, stem, options, answer, why] */
window.ITEMS4 = [

/* ---- S31 Adaptation strategy ---- */
['I138','S31',1,'mcq','What does fine-tuning mainly teach a model?',
 ['New facts about your business','A behaviour: the format, tone and structure of how it responds',
  'To retrieve documents more accurately','To reason through more steps'],1,
 'Fine-tuning is like coaching. You show the model many examples of an input and the answer you wanted. It picks up a habit. It is great for “always answer in this shape and this tone.” It is a poor, costly way to add facts. Facts change, and you must retrain the model each time.'],

['I139','S31',2,'mcq','Users say the assistant does not know your 2026 policy. You published it last month. Which fix fits best?',
 ['Fine-tune on the new policy','Retrieval: index the policy and cite it',
  'A longer system prompt describing the policy','Switch to a larger model'],1,
 'The assistant is missing a fact. A fact that keeps changing belongs in retrieval (finding the right page first). There you can update it and show a citation (the source). Fine-tuning freezes the fact until the next training run. A system prompt (the standing instructions) works only until the policy gets so long that it crowds the context. Neither gives the user a source to check.'],

['I140','S31',2,'mcq','Why should you try prompting and retrieval before fine-tuning?',
 ['Fine-tuning is technically difficult',
  'They are easy to undo and you can measure them in hours. Tuning adds a dataset, a training cycle and something you must maintain.',
  'Fine-tuning always performs worse','Providers discourage it'],1,
 'Fine-tuning is not bad. But the first two options are cheap to try and cheap to undo. Ruling them out costs about a day. Tuning means building a labelled dataset (examples with the right answers written on them). You must re-run it whenever the model changes. Switching provider also gets harder. Pay that price only after the cheap options fail on a measurement.'],

['I141','S31',3,'multi','Which of these should already exist before “should we fine-tune?” can even be answered?',
 ['An eval suite with ground truth you trust',
  'A named failure, with counts, from real traffic',
  'A labelled dataset of inputs and wanted outputs, and a plan to maintain it',
  'Evidence that prompting and retrieval did not fix it',
  'A budget approved by finance'],[0,1,2,3],
 'The first four make the decision. Without an eval (a test with an answer key), you cannot tell if fine-tuning helped. Without a named failure and counts, you do not know what you are fixing. Without a dataset, there is nothing to train on, and you cannot repeat it later. If you skip the options you can undo, you pay the high price first. The budget comes after the decision, not before.'],

['I142','S31',3,'judge','In a roadmap review, a senior stakeholder asks, “Why aren’t we fine-tuning?” Write a reply that turns the question into a decision, not a preference.',
 null,
 'A strong reply says neither yes nor no. It asks what kind of wrong the system is right now. Roughly: “Tell me the failure you want fixed. I will tell you which lever fixes it. If the model does not know something, that is retrieval. Tuning would bake in a fact that keeps changing. If it knows the answer but gives it in the wrong shape or tone, we try prompting first and tuning second. I can test prompting this week. If it cannot do the reasoning, we need a different model or a bigger thinking budget. Right now our error taxonomy (our sorted piles of mistakes) says the biggest cluster is this: it finds the right document but quotes the wrong clause. Tuning cannot touch that. When a cluster about behaviour shows up, tuning is the right tool. Then I will need a labelled set and an owner to maintain it. We must re-run it every time the base model is retired.”'],

['I143','S31',3,'mcq','When does a small distilled model most reliably beat a frontier model?',
 ['The task is open-ended and varied, and accuracy matters a lot',
  'The task is narrow and repetitive, at high volume, where speed or cost matters most',
  'The task is new and you have no examples','The task needs many dependent reasoning steps'],1,
 'Distillation (a small model learns from a big one) gives up breadth. In return you get one narrow skill at a fraction of the cost and delay. That is a good deal for classifying, routing, extracting and other repetitive work. It is a bad deal wherever variety is the point. It pays off only when volume is high. Then the savings beat the effort of building and maintaining the smaller model.'],

/* ---- S32 Interface design for uncertainty ---- */
['I144','S32',1,'mcq','Why do we show sources next to an AI-generated answer?',
 ['To look sophisticated','So the user can check the claim cheaply',
  'To keep the legal team happy','To make the model more accurate'],1,
 'A citation is there to make checking cheaper than trusting. So a citation that does not open the real passage is worse than none. It looks checkable but is not. The user cannot tell the difference.'],

['I145','S32',2,'mcq','Which output should NOT be streamed token by token as it is generated?',
 ['A long explanatory answer','A drafted email the user will edit',
  'A number the model may change as it goes on, such as a total, an amount or a count',
  'A summary of a document'],2,
 'Streaming feels fast because you read prose from left to right. But a number that appears and then changes is worse than a spinner. The user has already read it, and may have acted on it. Show numbers, decisions and anything a user might screenshot only once, when they are settled.'],

['I146','S32',3,'mcq','Your model returns a confidence score. What is the best way to use it in the interface?',
 ['Show it as a percentage next to the answer',
  'Colour the answer green, amber or red by threshold',
  'Use it to route: answer directly when confidence is high, show evidence first or ask a question when it is low',
  'Hide it, since users find numbers confusing'],2,
 'A confidence number on screen asks the user to judge something they cannot calibrate. The model’s own confidence is often off anyway. Use the score as a signal inside your product instead. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.'],

['I147','S32',3,'multi','What makes a correction path genuinely useful instead of decorative?',
 ['It captures what the user expected, not only that they were unhappy',
  'It records the retrieved evidence alongside the correction',
  'It is faster than giving up on the feature and doing the task by hand',
  'It feeds the failure taxonomy that drives the roadmap',
  'It thanks the user for their feedback'],[0,1,2,3],
 'A thumbs-down with no context says something was wrong, but not what. A correction that records the expected answer and the evidence the system used turns a complaint into an eval case. Also, if correcting is slower than doing the task by hand, nobody corrects. So the path must be cheaper than the workaround, or you collect nothing.'],

['I148','S32',3,'mcq','Which screen decides most whether users keep trusting an AI feature?',
 ['The successful answer','The loading state',
  'The refusal or empty state: what it shows when it has nothing good to say',
  'The onboarding tour'],2,
 'Every system looks good when it works. Trust depends on what happens when it cannot answer. A system that says “I don’t have that” and offers a route to a person earns more trust than one that always makes something up. Teams design this screen last, or not at all. That is why many AI features feel unreliable even with good average accuracy.'],

['I149','S32',3,'judge','Write the interface contract for an AI feature you know. What does it show when it is confident, and when it is not? What can the user do when it is wrong? What does the feature still do when the AI is switched off?',
 null,
 'A strong answer treats uncertainty as a design input, not an engineering embarrassment. Confident: show the answer with citations that open, and an action the user can take right there. Not confident: show the evidence first, with the answer as a draft. Or ask a clarifying question instead of guessing. Never give it the same look as a confident answer. Wrong: give an edit path that captures the expected answer and the evidence. It must be faster than doing the task by hand, and it feeds the failure taxonomy. Switched off: the feature falls back to something that still works. Examples are search without generated answers, a form without extraction, or a queue without routing. A kill switch (the off button) is usable only if a working product sits underneath it.']

];
