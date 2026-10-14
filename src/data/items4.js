/* Question bank, part 4 — the decisions that outlive an architecture.
   [id, skill, difficulty, type, stem, options, answer, why] */
window.ITEMS4 = [

/* ---- S31 Adaptation strategy ---- */
['I138','S31',1,'mcq','What does fine-tuning mainly teach a model?',
 ['New facts about your business','A behaviour: the format, tone and structure of how it responds',
  'To retrieve documents more accurately','To reason through more steps'],1,
 'Fine-tuning shows the model many examples of an input and the answer you wanted, so it learns a habit. It’s great for “always answer in this shape and this tone.” It’s a poor, expensive way to add facts, because facts change and the model has to be retrained each time.'],

['I139','S31',2,'mcq','Users complain that the assistant doesn’t know your 2026 policy, which was published last month. Which fix fits best?',
 ['Fine-tune on the new policy','Retrieval: index the policy and cite it',
  'A longer system prompt describing the policy','Switch to a larger model'],1,
 'The assistant is missing a fact, and facts that change belong in retrieval, where you can update them and show a citation. Fine-tuning freezes the fact until the next training run. A system prompt works only until the policy gets long enough to crowd the context. Neither gives the user a source to check.'],

['I140','S31',2,'mcq','Why should you try prompting and retrieval before fine-tuning?',
 ['Fine-tuning is technically difficult',
  'They’re easy to undo and you can measure them in hours; tuning adds a dataset, a training cycle and something you must maintain',
  'Fine-tuning always performs worse','Providers discourage it'],1,
 'Fine-tuning isn’t bad. But the first two options are cheap to try and cheap to undo, so ruling them out costs about a day. Tuning means building a labelled dataset, re-running it whenever the model changes, and finding it harder to switch providers. Pay that price only after the cheap options have failed on a measurement.'],

['I141','S31',3,'multi','Which of these should already exist before “should we fine-tune?” can even be answered?',
 ['An eval suite with ground truth you trust',
  'A named failure, with counts, from real traffic',
  'A labelled dataset of inputs and wanted outputs, and a plan to maintain it',
  'Evidence that prompting and retrieval did not fix it',
  'A budget approved by finance'],[0,1,2,3],
 'The first four make the decision. Without an eval, you can’t tell whether fine-tuning helped. Without a named failure and counts, you don’t know what you’re fixing. Without a dataset, there’s nothing to train on and no way to repeat it later. And if you skip the reversible options, you pay the high price first. The budget comes after the decision, not before.'],

['I142','S31',3,'judge','A senior stakeholder asks in a roadmap review, “Why aren’t we fine-tuning?” Write a reply that turns the question into a decision instead of a preference.',
 null,
 'A strong reply says neither yes nor no. It asks what kind of wrong the system is right now. Roughly: “Tell me the failure you want fixed and I’ll tell you which lever fixes it. If it doesn’t know something, that’s retrieval, and tuning would bake in a fact that keeps changing. If it knows the answer but gives it in the wrong shape or tone, we try prompting first and tuning second, and I can test prompting this week. If it can’t do the reasoning, we need a different model or a bigger thinking budget. Right now our error taxonomy says the biggest cluster is finding the right document but quoting the wrong clause, and tuning can’t touch that. When a cluster shows up that is about behaviour, tuning is the right tool. I’ll then need a labelled set and an owner to maintain it, because it has to be re-run every time the base model is retired.”'],

['I143','S31',3,'mcq','When does a small distilled model most reliably beat a frontier model?',
 ['The task is open-ended and varied, and accuracy matters a lot',
  'The task is narrow and repetitive, at high volume, where speed or cost matters most',
  'The task is new and you have no examples','The task needs many dependent reasoning steps'],1,
 'Distillation gives up breadth to get a narrow skill at a fraction of the cost and delay. That’s a good deal for classifying, routing, extracting and other repetitive work, and a bad deal wherever variety is the point. It only pays off when volume is high enough that the savings beat the effort of building and maintaining the smaller model.'],

/* ---- S32 Interface design for uncertainty ---- */
['I144','S32',1,'mcq','Why do we show sources next to an AI-generated answer?',
 ['To look sophisticated','So the user can check the claim cheaply',
  'To keep the legal team happy','To make the model more accurate'],1,
 'A citation exists to make checking cheaper than trusting. So a citation that doesn’t open the actual passage is worse than none. It looks checkable but isn’t, and the user can’t tell the difference.'],

['I145','S32',2,'mcq','Which output should NOT be streamed token by token as it’s generated?',
 ['A long explanatory answer','A drafted email the user will edit',
  'A number the model may change as it goes on, such as a total, an amount or a count',
  'A summary of a document'],2,
 'Streaming feels fast because prose reads left to right. But a number that appears and then changes is worse than a spinner, because the user has already read it and may have acted on it. Show numbers, decisions and anything a user might screenshot only once, when they’re settled.'],

['I146','S32',3,'mcq','Your model returns a confidence score. What’s the best way to use it in the interface?',
 ['Show it as a percentage next to the answer',
  'Colour the answer green, amber or red by threshold',
  'Use it to route: answer directly when confidence is high, show evidence first or ask a question when it’s low',
  'Hide it, since users find numbers confusing'],2,
 'A visible confidence number asks the user to judge something they can’t calibrate, and model-reported confidence is often off anyway. Use the score as a signal inside your product instead. It should change what the interface does: answer, show evidence, ask a clarifying question, or hand the case to a person.'],

['I147','S32',3,'multi','What makes a correction path genuinely useful instead of decorative?',
 ['It captures what the user expected, not only that they were unhappy',
  'It records the retrieved evidence alongside the correction',
  'It’s faster than giving up on the feature and doing the task by hand',
  'It feeds the failure taxonomy that drives the roadmap',
  'It thanks the user for their feedback'],[0,1,2,3],
 'A thumbs-down with no context says something was wrong and nothing about what. A correction that records the expected answer and the evidence the system used turns a complaint into an eval case. And if correcting is slower than doing the task by hand, nobody corrects, so the path must be cheaper than the workaround or you collect nothing.'],

['I148','S32',3,'mcq','Which screen decides most whether users keep trusting an AI feature?',
 ['The successful answer','The loading state',
  'The refusal or empty state: what it shows when it has nothing good to say',
  'The onboarding tour'],2,
 'Every system looks good when it works. Trust depends on what happens when it can’t answer. A system that says “I don’t have that” and offers a route to a person earns more trust than one that always produces something. Teams design this screen last or not at all, which is why so many AI features feel unreliable even with good average accuracy.'],

['I149','S32',3,'judge','Write the interface contract for an AI feature you know. What does it show when it’s confident, and when it isn’t? What can the user do when it’s wrong? What does the feature still do when the AI is switched off?',
 null,
 'A strong answer treats uncertainty as a design input, not an engineering embarrassment. Confident: the answer with citations that open, and an action the user can take right there. Not confident: the evidence first with the answer shown as a draft, or a clarifying question instead of a guess, and never the same look as a confident answer. Wrong: an edit path that captures the expected answer and the evidence, faster than doing the task by hand, and feeding the failure taxonomy. Switched off: the feature falls back to something that still works, such as search without generated answers, a form without extraction, or a queue without routing. A kill switch is only usable if there’s a working product underneath it.']

];
