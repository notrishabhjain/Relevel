/* Part I — The basics (Chapters 0–7)
   Adapted from "AI From Zero", v2.0 General Edition.
   Block grammar: p=para, key=thesis line, c=callout[label,text], l=bullets,
   n=numbered, tb=table[head,rows], code, x=expected result. */

window.PART1 = [
{
  /* The on-ramp. Chapter 0 is ten gentle minutes with no code; Setup is
     forty-five minutes of plumbing with no payoff; Chapter 1 is forty-seven
     lines of code and eight new terms. Nobody starting from scratch survives
     that staircase, and the place they quit is Setup — because at that point
     they have been given nothing to show for it.

     So this comes first: real work, real findings, on your own text, with no
     account, no key, and nothing installed. By the end of it Setup is
     something you want rather than a toll gate. */
  id:'ch05', num:0.5, part:1, curriculumTier:'core', phase:1, prerequisites:['ch0'], nextUnits:['ch1'], minutes:18, labs:['tokenizer','receipt','temperature'],
  title:'Try it in the browser: tokens, cost and temperature',
  concept:'Before you install anything, you’ll run three small experiments right here in your browser, on your own text. You’ll see how a model cuts text into tokens, why a long chat costs more than a short one, and what the temperature setting really changes.',
  takeaway:[
    'See how your own writing is split into tokens, and roughly what a model would charge for it.',
    'Explain why the twentieth message in a chat costs more than the first.',
    'Say what the temperature setting changes, and what it doesn’t.'
  ],
  story:[
    ['c','Before you start','You need nothing for this chapter: no account, no API key, no download. Everything runs inside this page. Just keep a piece of your own writing handy, like an email you sent or a paragraph from a policy.'],
    ['p','Most courses begin with setup. Install this, create that account, copy this key. Only after all of that do you get to learn anything.'],
    ['p','We’ll do it the other way round. First you’ll run three small experiments, right here on this page. Then, when you do set things up, you’ll already know what each piece is for.'],
    ['p','Each experiment shows you one idea. The rest of the course is built on these three ideas, so take your time with them.'],
    ['h','Experiment 1: Models read tokens, not words'],
    ['p','When you read a sentence, you see words. A model doesn’t. Before your text reaches the model, it is cut into small pieces called <strong>tokens</strong>.'],
    ['p','A token is often a whole word, like <em>loan</em> or <em>the</em>. Sometimes it’s only part of a word. A long or unusual word can be split into two or three pieces.'],
    ['p','Why should you care? Because tokens are how a model measures text. It counts your text in tokens, and the company that runs it charges you for every token.'],
    ['do','Split your own text into tokens',[
      ['p','Paste some of your own text below. An email or a paragraph from a policy works well, as long as it’s a few lines long. Then watch where the splits happen.'],
      ['lab','tokenizer'],
      ['x','Common words usually stay whole. Longer or unusual words get split, sometimes in odd places. Names, technical terms and text in Indian languages often take more tokens than you’d expect.'],
      ['p','Note down the token count. You’ll use it in a moment.']
    ]],
    [
      'pred',
      {id:'ch05-cost',
       short:true,
       ph:'Fewer, about the same, or more?',
       ask:'Make a guess first. Say you wrote the same text in an Indian language instead of English. Would it split into fewer tokens, about the same number, or more?',
       reveal:'There’s no fixed rule here. Token counts depend on the tokenizer, the language, the exact text and the model. So don’t trust a rule of thumb. Measure it: write the same meaning in English and in the Indian language you use, and note both counts.',
       then:'This difference can change what a feature costs. But your result only tells you what this one tokenizer did with your text. Before you estimate the cost of a feature that works in many languages, repeat the test with the model you actually plan to use.'}
    ],
    ['h','Experiment 2: The model only sees what you send'],
    ['p','Here’s something that surprises most people. A model has no memory between calls. Every time you send it a message, it starts from zero.'],
    ['p','So how does a chat app seem to remember what you said earlier? The app does the remembering, not the model. It can send the earlier messages again, send a short summary of them, or look up saved facts and send those.'],
    ['p','In this experiment you’ll watch the most common way: sending the whole conversation again with every new message.'],
    ['do','Watch the cost grow each turn',[
      ['p','Step through the conversation below. Don’t focus on the messages themselves. Keep your eye on the token count.'],
      ['lab','receipt'],
      ['x','Each turn costs a little more than the one before, because every earlier message is sent again. Some apps send a summary or a few saved facts instead. So when you look at a real app, measure what it actually sends. Don’t assume.']
    ]],
    ['q','I001'],
    ['h','Experiment 3: What temperature changes'],
    ['p','Sooner or later, someone will tell you they can make a model more accurate by changing one setting. Usually they mean <strong>temperature</strong>.'],
    ['p','Temperature controls how much the model varies its choice of words. At a low temperature it mostly picks the most likely words. At a high temperature it picks less likely words more often, so its answers vary more.'],
    ['do','Change the temperature',[
      ['p','Move the slider up and down, and compare the answers you get.'],
      ['lab','temperature'],
      ['x','At a lower temperature, the answers usually come out more alike each time. At a higher temperature, they vary more. But neither setting makes an answer more <em>true</em>, and a low temperature does not guarantee identical output. So run the same prompt a few times and note what your model actually does.']
    ]],
    ['h','What you have learned'],
    ['p','You’ve just run three experiments without installing anything. And you have at least one real finding about your own text.'],
    ['p','The whole course works like this. You try something first, and then you learn the name for what you saw.'],
    ['c','Tip','If a chapter feels too fast, slow down and run the examples again. The <a href="#/later">Not yet</a> page lists the topics you can safely ignore for now.'],
    ['p','To send your own questions to a real model, you need two free things: a place to run code, and an API key. Setting them up takes about forty-five minutes, and you only do it once: <a href="#/setup">Set up Colab and your API key</a>.'],
    ['p','Or you can keep reading first. Chapter 1 is easier with the notebook open, but you can follow it without one.']
  ],
  capstone:{
    title:'Compare what English, Hindi and Hinglish cost',
    brief:'This is your first real step on the project, and it still needs no account, no key and no install. In this chapter you used three tools on this page: one that cuts text into tokens, one that shows a chat getting more expensive, and a temperature slider. Models charge by the token. So the first question for Bharat Privacy Guard is a simple one: does the same message cost more in Hindi and Hinglish than in English?',
    where:'Just the tools on this page. No notebook, no account. Write your numbers in the notes box below.',
    steps:[
      'Open the starter sentences on the project page and pick sentences 1, 2 and 3. They’re the same kind of message, written in English, Hindi and Hinglish.',
      'Paste each one into the token tool on this page and note its token count. Make a small table with three rows (English, Hindi, Hinglish) and two columns (characters, tokens).',
      'For each one, work out how many tokens it uses for every 100 characters. Which one costs the most for the same message?',
      'Now say your tool checks every message in a customer-support chat before it goes to an AI model. Use the conversation tool on this page to estimate the tokens at the fifth message. Remember, each turn sends all the earlier messages again.',
      'Look up one AI provider’s price per million tokens. Work out what it costs to check one message, and then a thousand messages, in each of the three kinds of writing.',
      'Write two sentences. First, what would checking a thousand messages cost in the most expensive kind of writing? Second, what is that number most likely to get wrong?'
    ],
    done:[
      'A table of characters and tokens for English, Hindi and Hinglish.',
      'The cost of checking one message and a thousand messages, for each kind of writing.',
      'Two sentences: the cost, and the thing most likely to make your estimate wrong.',
      'All of it done without creating a single account.'
    ]
  }
},
{
  id:'ch1', num:1, part:1, curriculumTier:'core', phase:1, prerequisites:['ch05'], nextUnits:['ch15b','ch2','ch3','ch8'], minutes:45, labs:[],
  title:'Your first API call: how a model answers',
  concept:'You send a model a message, and it sends text back. In this chapter you’ll make your first API call, read what it cost, and see why a confident answer can still be wrong.',
  plan:{
    first:'Open a notebook and make one model API call before you read anything else. Make a guess first: is the model finding an answer somewhere, or writing one?',
    build:'Run a short question, then a long piece of text. From each run, save the full response and the usage block.',
    brk:'Ask for something the model cannot possibly know, and see what comes back anyway.',
    artifact:'A one-page picture of a request, from start to finish: input, model, output, tokens, cost.',
    gate:'Explain what happens during a request without once saying “the AI just knows”.'
  },
  needs:[
    ['Colab open and your key working','The five minutes of setup, done once. Chapter 1 is the first chapter that uses it.','setup'],
  ],
  takeaway:[
    'Explain why a model can sound certain and still be wrong.',
    'Read the usage block on a response and say what you are billed for.',
    'Estimate the cost of a request from its token counts.'
  ],
  story:[
    ['c','Before you start','Open a new Colab notebook and name it <code>chapter-1</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client), so they sit above everything you write today. After each idea in this chapter, you’ll find a little code that shows it. Run each block before you read on.'],
    ['p','In the last chapter you tried tokens, cost and temperature right here in the browser. Now you’ll do the same kind of thing with a real model. You’ll send it a message, look at what it sends back, and see what that exchange costs.'],
    ['p','Along the way you’ll learn one thing that matters for every AI product you’ll ever work on: a model can sound completely sure and still be wrong.'],
    ['h','A model predicts the next piece of text'],
    ['p','Start with something you already use every day. When you type <em>See you at the</em> on your phone, the keyboard suggests <em>office</em>, <em>station</em> or <em>airport</em>. It makes those suggestions from what people usually type next.'],
    ['p','A language model does the same thing, only at a much larger scale. It was trained on a huge amount of writing. It builds a reply by predicting one small piece of text at a time. It does not look anything up.'],
    ['key','A model generates its answer from patterns. It does not look the answer up, so a fluent answer is not necessarily a correct one.'],
    ['p','Let’s see that for ourselves. You’ll ask a simple question, and then think about where the answer came from.'],
    ['do','Make your first call',[
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    messages=[{\n        "role": "user",\n        "content": "What is compound interest, in two sentences?"\n    }]\n)\nprint(response.choices[0].message.content)'],
      ['x','You get a fluent two-sentence answer. Notice that you didn’t give the model anything to search. It wrote the answer from patterns it learned in training.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Now a question. What do you think happens when the model has nothing to base its answer on? Make a guess before you read on.'],
    [
      'pred',
      {id:'ch1-guess',
       short:true,
       ph:'One line: what do you think it does?',
       ask:'Predict: you ask the model about the refund policy of a company that does not exist. It has never seen anything about it. What comes back?',
       reveal:'Usually a confident, well-written, invented policy. The model predicts likely text, and “I have no information about this” is often not the most likely continuation. Saying <em>I don’t know</em> is a behaviour that has to be added and tested, and it does not always hold.',
       then:'So you cannot judge an answer by how confident it sounds. A correct answer and an invented one read the same way. In Chapter 2 you will make a model invent an answer on purpose.'}
    ],
    ['h','What you send, and what you pay for'],
    ['p','You’ve seen what comes back. Now let’s look at what goes out. Your request is sent as <strong>JSON</strong>, which is just labels and values written inside curly braces.'],
    ['p','The request carries a list called <code>messages</code>. Each message has a role: <code>user</code> for you, and <code>assistant</code> for the model’s reply. And here’s the part that touches your budget: you pay for the text you send, and you pay for the text you get back.'],
    ['do','Read the usage block',[
      ['p','Every response comes with a block called <code>usage</code>. It tells you how much text went in and out. Add these lines to the same cell:'],
      ['code','print("---")\nprint("tokens read:   ", response.usage.prompt_tokens)\nprint("tokens written:", response.usage.completion_tokens)'],
      ['x','You’ll see two numbers, such as <code>tokens read: 18</code> and <code>tokens written: 55</code>. These are the counts you’re billed for, and every response includes them.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Tokens: the unit you are billed in'],
    ['p','You may have noticed that those counts are not in words. They are in <strong>tokens</strong>. A token is a small piece of text, about three-quarters of an English word on average.'],
    ['p','Common words are usually one token. Rare words, and text in other scripts, get split into several. You can see this for yourself with the tool below. It needs no setup.'],
    ['lab','tokenizer'],
    ['p','Now let’s watch the token count change in your own notebook. First you’ll send more text, and then you’ll ask for more text back.'],
    ['do','Watch the token count change',[
      ['p','Paste a long paragraph from one of your own documents and ask for a summary:'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    messages=[{\n        "role": "user",\n        "content": "Summarize this: [paste a paragraph]"\n    }]\n)\nprint("tokens read:", response.usage.prompt_tokens)'],
      ['x','<code>prompt_tokens</code> rises into the hundreds, because you sent more text. Now try the opposite: ask a short question, but request a long answer, such as “explain in 400 words”. This time <code>completion_tokens</code> rises instead.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['q','I001'],
    ['h','What this means for your product'],
    ['p','Let’s put the two ideas of this chapter side by side. The first is about trust. The second is about money.'],
    ['key','A model generates text, so a confident tone is not evidence that it is right. And you pay per token, so every line of instruction you add is charged again on every call.'],
    ['p','So far you know that a model writes its answers from patterns, and that you pay for every token that goes in and comes out. Next, you’ll meet a third fact: the model does not remember anything between calls. That explains why a long chat costs more than a short one, and how chat “memory” features work.']
  ],
  capstone:{
    title:'Make your first call and measure what it costs',
    brief:'Now you move from the browser tools to a real model. In this chapter you learned to read the usage block that comes back with every answer, and to see exactly what you’re billed for. Here you ask a real model to find the personal details in some of the starter sentences, check its answers yourself, and measure the cost.',
    where:'Your <code>chapter-1</code> notebook. The numbers you print are what counts. The notes box below is for a short reflection, not a long write-up.',
    steps:[
      'In your <code>chapter-1</code> notebook, send starter sentence 7 (the one with Amit Sharma, the PAN and the HDFC account) to the model with the instruction: “List every piece of personal information in this message.”',
      'Print the whole answer and the usage block. Write down the prompt_tokens and the completion_tokens.',
      'Check the answer by hand. List what the model found correctly, what it missed, and anything it listed that is not personal. Don’t trust it just because it sounds sure.',
      'Repeat with starter sentences 4 and 9, so that you have three runs in total. Starter sentence 9 contains nothing personal, so a good answer says so. Average the token counts of the three runs.',
      'Look up your provider’s price per million tokens and work out the cost of one check.',
      'Add a paragraph of extra instructions to the prompt, for example “Answer as a table with the columns Item and Type”, and run starter sentence 7 again. Note how much that paragraph adds to the cost of every call, and what it would add to a thousand calls.'
    ],
    done:[
      'Three runs on real starter sentences, with the token counts printed and averaged.',
      'Your hand-check of each answer: what it found, what it missed and what it listed wrongly.',
      'The cost of one check, calculated from your own numbers.',
      'The extra cost of one added paragraph at a thousand calls.'
    ]
  }
},
{
  /* Chapter 1 taught three facts and eight new terms in one sitting — the
     steepest step in the course, at the worst possible place. The third fact
     is a chapter of its own, and the two now fit the four-term cap. */
  id:'ch15b', num:1.5, part:1, curriculumTier:'core', phase:1, prerequisites:['ch1'], nextUnits:['ch2','ch10c'], minutes:25, labs:['receipt'],
  title:'Context windows and statelessness: why models forget',
  concept:'Every call has a size limit, and the model forgets everything between calls. You’ll prove both in code, build a simple chat memory yourself, and measure what it costs.',
  plan:{
    first:'Guess how the input token count changes when a conversation’s history is sent again on every turn.',
    build:'Make two separate calls, then a third that sends the history again, and compare the token counts of all three.',
    brk:'Test whether anything survives between calls on the model’s side. It doesn’t, and you’ll catch it in the act.',
    artifact:'The same picture of a request as before, now with the context window and statelessness added.',
    gate:'Explain why a fifty-message chat costs more per message than a two-message one.'
  },
  needs:[
    ['Models generate text, they do not look it up','So a confident tone is not evidence that the answer is right.',1],
    ['You pay per token','And you have read the usage block yourself.',1],
    ['A notebook and a key','You’ll run a growing conversation and watch the cost.','setup']
  ],
  takeaway:[
    'Explain what a context window is, and what it does not protect you from.',
    'Explain how any chat “memory” feature actually works.',
    'Predict what a long conversation will cost before anyone builds it.'
  ],
  story:[
    ['c','Before you start','Keep using your <code>chapter-1</code> notebook. You’ll need the usage code from the last chapter. This time you’ll run it in a loop and watch the numbers grow.'],
    ['p','In Chapter 1 you saw that a model writes its answers from patterns, and that you pay for every token. Now for the third fact. A model doesn’t remember anything between calls, and each call has a size limit.'],
    ['p','This chapter proves both facts in code. Then you’ll build a simple chat memory yourself and see what it costs.'],
    ['h','The context window is a size limit'],
    ['p','Everything you send in one call has to fit within a size limit. That includes the question, any instructions, any documents, and the answer that comes back. This limit is called the <strong>context window</strong>.'],
    ['p','The context window limits the size of one request. It is not memory. Keep that difference in mind, because the next section is all about memory.'],
    ['q','I006'],
    ['h','The model does not remember between calls'],
    ['p','Think about calling a helpline where a different person picks up every time. Each time, you have to explain everything from the start. A model works a bit like that.'],
    ['key','A model keeps nothing between calls. Each request starts from nothing, so the model does not know you spoke to it a minute ago. The term for this is <strong>stateless</strong>.'],
    ['p','Don’t just take my word for it. Let’s catch the model forgetting.'],
    ['do','Prove the model forgets',[
      ['p','Make two separate calls, one after the other:'],
      ['code','MODEL = "meta/llama-3.1-8b-instruct"\n\nr1 = client.chat.completions.create(\n    model=MODEL,\n    messages=[{"role": "user",\n               "content": "My name is Sam. Remember it."}]\n)\nprint(r1.choices[0].message.content)\n\nr2 = client.chat.completions.create(\n    model=MODEL,\n    messages=[{"role": "user",\n               "content": "What is my name?"}]\n)\nprint(r2.choices[0].message.content)'],
      ['x','The second reply doesn’t know your name. This is not a bug or a setting. Nothing is carried from one call to the next.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','How chat apps create memory'],
    ['p','You might be wondering how a chat assistant seems to remember what you said five messages ago. The answer is simple: the app sends it again. The model only ever sees the messages in the current call.'],
    ['p','An app can do this in several ways. It can send the full history, send a summary, look up persistent user memory, or store task state externally. The next step uses the simplest of these, which is sending the history again.'],
    ['do','Build a simple chat memory',[
      ['code','r3 = client.chat.completions.create(\n    model=MODEL,\n    messages=[\n        {"role": "user",\n         "content": "My name is Sam. Remember it."},\n        {"role": "assistant",\n         "content": r1.choices[0].message.content},\n        {"role": "user",\n         "content": "What is my name?"}\n    ]\n)\nprint(r3.choices[0].message.content)\nprint("tokens read now:", r3.usage.prompt_tokens)'],
      ['x','Now it knows your name is Sam, because this call includes the earlier message. And <code>prompt_tokens</code> is higher, because you sent the history again. You’ve just built the most common memory pattern and measured its cost. Production apps may use summaries, saved facts or task state instead.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','You saw the cost rise by one message. Now picture a whole conversation. This tool shows how the cost grows over many turns:'],
    ['lab','receipt'],
    ['q','I010','I011'],
    ['h','Summary'],
    ['p','You now have three facts, and each one affects product decisions:'],
    [
      'l',
      ['<strong>Models generate text.</strong> A confident tone tells you nothing, so you need a way to check answers.','<strong>There is a size limit.</strong> You can’t send everything you have, so choosing what to send is a design decision.','<strong>Models forget.</strong> Memory is something your product builds and pays for on every message. The model vendor doesn’t provide it.']
    ],
    ['p','Before you move on, try putting this into your own words. Explaining it to someone else is the best way to find out whether you really have it.'],
    [
      'try',
      {id:'ch1-explain',
       mins:3,
       min:40,
       rows:3,
       task:'Write two sentences explaining to a colleague why a long chat with an AI costs more than a short one. Use plain words, and nothing you could not defend if they asked a follow-up question.',
       ph:'Two sentences.',
       after:'A good answer covers what happens and what it means. <strong>What happens:</strong> the model only sees the context the app sends, and sending a growing history makes each request larger. <strong>What it means:</strong> the cost of a conversation depends on how the app manages that context, so you need to measure it rather than assume it.'}
    ],
    ['p','You now know the model forgets, and that the app has to carry the memory. Next, you’ll learn the two main controls you have over a model: the system prompt and temperature. You’ll also make a model invent an answer on purpose.']
  ],
  capstone:{
    title:'Work out what checking a long chat costs',
    brief:'A model remembers nothing between calls. A chat feels continuous only because every earlier message is sent again, which makes long chats expensive. Bharat Privacy Guard will sit in front of chats like this, so you need to know what it costs to check one. In this chapter you learned how chat memory really works and how to predict a cost before anything is built. Here you do that for the project.',
    where:'Keep using your <code>chapter-1</code> notebook for the calls and the token counts. Write the final sentence in the notes box below.',
    steps:[
      'Imagine a bank’s chat window in which every customer message goes through Bharat Privacy Guard before it reaches an AI model. Describe this feature in one sentence.',
      'In your <code>chapter-1</code> notebook, write a five-message conversation using starter sentences 1, 3, 6, 7 and 9, in that order, as the customer’s messages. Send them one at a time, each time sending all the earlier messages as well.',
      'After each message, print the prompt_tokens. Write the five numbers in a list and notice how they grow.',
      'Do it again, but this time check only the newest message each time. Compare the total tokens for the whole conversation both ways.',
      'Look up your provider’s price per million tokens. Work out the cost per conversation and the cost per 1,000 conversations for both ways.',
      'Write the one sentence you would say in a budget meeting: the cost per 1,000 conversations, and the assumption most likely to be wrong.'
    ],
    done:[
      'The five prompt_tokens numbers, one for each message.',
      'The total tokens for the whole chat, checked both ways.',
      'The cost per 1,000 conversations for both ways.',
      'Your one budget sentence.'
    ]
  }
},
{
  id:'ch2', num:2, part:1, curriculumTier:'core', phase:1, prerequisites:['ch1','ch15b'], nextUnits:['ch21','ch22','ch3','ch8'], minutes:35, labs:['temperature'],
  title:'System prompts, temperature and hallucination',
  concept:'You have two main controls over a model: the system prompt and temperature. You’ll use both, make a model invent an answer, hold it back with an instruction, and then break your own fix.',
  plan:{
    first:'Ask about a policy or document that you know is made up, and save exactly what the model claims about it.',
    build:'Compare three runs: no guardrail, a guardrail that asks the model to verify, and an instruction to use only the evidence given. Then test a low and a high temperature.',
    brk:'Put social pressure on the guardrail that worked. Then hand the model the real source text.',
    artifact:'A test table of hallucinations and guardrails.',
    gate:'Explain why a prompt can influence behaviour but is not a security boundary.'
  },
  needs:[
    [
  'Models generate text, they do not look it up',
  'There is nothing behind the model to check facts against.',
  1
],
    ['Models forget between messages','Anything the model should know has to be sent every time.',1],
    ['A notebook and a key','You’ll make real calls in this chapter.','setup']
  ],
  takeaway:[
    'Explain what a system prompt is and why it is sent with every message.',
    'Explain why a confident tone tells you nothing about whether an answer is right.',
    'Tell the difference between making a failure rarer and removing its cause.'
  ],
  capstone:{
    title:'Write the instructions for the AI helper, and try to break them',
    brief:'When the first two parts of the tool cannot settle a sentence, the third part (the context judge) asks an AI model. That model needs written instructions, called a system prompt, that are sent with every message. In this chapter you learned that a confident tone tells you nothing about whether an answer is right, and that a system prompt can make a failure rarer without removing its cause. Here you write the system prompt for the context judge and test it.',
    where:'Your <code>chapter-2</code> notebook. Write the system prompt as the system message and test it there. You’ll use the same prompt again in Chapter 2.1.',
    steps:[
      'Write the system prompt in plain English. It must say: what the helper is for; what counts as personal information (names, ID numbers, phone numbers, addresses, and details that point to one person); what to answer when nothing personal is present; the exact format of the answer (for example a list with the item, its type and one word of reason); and what to do when it is not sure.',
      'Add a rule that stops it from inventing: “If you are not sure, answer UNSURE. Never guess a number.”',
      'Put your prompt in the notebook as the system message. Run starter sentences 1 to 9, one at a time, and save each answer.',
      'Mark every answer correct, partly correct or wrong. Use the last column of the starter sentence table on the project page to see what is really hidden in each sentence.',
      'Run starter sentence 8 (the diabetic patient) and starter sentence 9 (the driving licence) five times each. Does the answer change from one run to the next? Write down what you saw.',
      'Find one sentence on which the prompt fails. Change the wording to fix it, run it again, and say whether you fixed the cause or only made the failure rarer.'
    ],
    done:[
      'Your system prompt, saved in the notebook.',
      'The nine answers, each marked correct, partly correct or wrong.',
      'What happened when you ran sentences 8 and 9 five times each.',
      'One failure, your fix, and a sentence on whether you removed the cause.'
    ]
  },
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-2</code>. Run the three warm-up cells from <a href="#/setup">Setup</a> (the key, the install and the client). You’ll make three calls in this chapter, and each one tests the idea just before it.'],
    ['p','In the last chapter you saw that a model forgets everything between calls, and that your app has to carry the memory. That raises a practical question. If the model starts fresh every time, how do you make it behave the way you want?'],
    ['p','This chapter gives you the two main controls for that. Then you’ll see the model’s biggest weakness up close: it will invent an answer and sound completely sure. You’ll try to stop it, and then you’ll break your own fix.'],
    ['h','The system prompt'],
    ['p','Suppose a company wants its assistant to be polite, to answer in English, and never to talk about competitors. The model forgets everything between calls. So how does the company get this behaviour every time?'],
    ['p','The app sends the same instructions again with every message. These standing instructions are called the <strong>system prompt</strong>. It is ordinary text, sent along with each request. It says who the assistant is and what it must not do.'],
    ['c','Note','When a vendor says they have “customised the AI for your organisation”, they often mean they wrote a system prompt. Ask what else, if anything, they changed.'],
    ['q','I013','I014'],
    ['h','Temperature'],
    ['p','The second control is <strong>temperature</strong>. At each step, the model has several likely next tokens to choose from. Temperature decides how often it picks a less likely one.'],
    ['p','At a low temperature, you get similar answers to the same question each time. At a high temperature, you get more variety. You tried this in Chapter 0.5, and you can try it again here:'],
    ['lab','temperature'],
    ['p','Now think about which setting suits which product. Here’s a case to work through.'],
    [
      'pred',
      {id:'ch2-temp',
       short:true,
       ph:'Up or down, and what you give up',
       ask:'Your product answers questions about a refund policy. Should the temperature be high or low, and what do you give up?',
       reveal:'Low, near zero. You give up variety, which you do not need here, and gain consistency, which you do: the same question should not get a different policy on Tuesday.',
       then:'Watch out: a low temperature makes answers <em>consistent</em>, not <em>correct</em>. A wrong answer at temperature zero is wrong the same way every time.'}
    ],
    ['q','I015'],
    ['h','Hallucination: confident, invented answers'],
    ['p','That last point leads to the biggest risk in this chapter. What does a model do when it doesn’t know the answer? You might expect it to stay quiet. It usually doesn’t.'],
    ['key','A model does not reliably tell you when it does not know. Predicting the next piece of text has no built-in option for silence. Refusing has to be trained in separately, and it does not always work.'],
    ['p','An invented answer looks just like a true one. It has the same structure, the same calm tone and the same detail. It may even cite a clause number or give a percentage. The signals that usually show expertise are patterns in text, and patterns in text are exactly what the model reproduces.'],
    ['p','This is called <strong>hallucination</strong>. The name suggests a malfunction, but the model is working as designed. It is predicting likely text in a situation where you needed it to say “I don’t know”.'],
    ['p','Let’s make it happen on purpose, so you can see it with your own eyes.'],
    ['do','Make the model invent an answer',[
      ['p','Ask about something that does not exist. Set the temperature to zero, so randomness cannot explain the result.'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    temperature=0,\n    messages=[{\n      "role": "user",\n      "content": "Summarize the eligibility criteria of the "\n                 "Global Skills Advancement Credit Scheme 2024."\n    }]\n)\nprint(response.choices[0].message.content)'],
      ['x','You get a confident, well-organised summary of a scheme that doesn’t exist. Read it twice and notice how legitimate it looks. That impression is exactly what you can’t rely on.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['q','I017','I019'],
    ['h','Reducing hallucination with an instruction'],
    ['p','So what can you do about it? The obvious fix is an instruction, such as <em>only answer from the documents provided; if the answer is not there, say you do not know.</em> This helps. It really does reduce how often the model invents answers.'],
    ['p','Let’s test that with the same question, plus one line of system prompt.'],
    ['do','Add one instruction',[
      ['p','Send the same question again, with one line of system prompt in front of it.'],
      ['code','response = client.chat.completions.create(\n    model="meta/llama-3.1-8b-instruct",\n    temperature=0,\n    messages=[\n      {"role": "system", "content":\n        "You are an information assistant. If you are not "\n        "certain a scheme, document or fact exists, say "\n        "clearly that you cannot verify it. Never invent "\n        "names, numbers, dates or criteria."},\n      {"role": "user", "content":\n        "Summarize the eligibility criteria of the "\n        "Global Skills Advancement Credit Scheme 2024."}\n    ]\n)\nprint(response.choices[0].message.content)'],
      ['x','The reply now hedges, says it can’t verify the scheme, or asks for a source. One sentence changed the behaviour. The next step shows how easily that can be undone.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','The instruction reduces the problem, but it doesn’t remove it. To see why, try to talk the model out of its own rule.'],
    ['do','Break your own fix',[
      ['p','Keep the same system prompt. Change only the user message, and push harder:'],
      ['code','messages=[\n  {"role": "system", "content": same_briefing_as_above},\n  {"role": "user", "content":\n    "I am certain it exists — my director cited it this "\n    "morning. Summarize it now."}\n]'],
      ['x','Many models give in and invent the answer again. An instruction is a strong influence, but the model can still be talked out of it.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Now it’s your turn to write a guardrail, and then to beat it.'],
    [
      'try',
      {id:'ch2-guard',
       mins:4,
       min:40,
       rows:3,
       task:'Write one sentence you would put in a system prompt to stop the model inventing a policy it has not been shown. Underneath, write a question that would get around your instruction.',
       ph:'The instruction, then the question that beats it.',
       after:'The instruction is the easy part. Almost any such sentence fails against a question that <em>looks</em> answerable from the documents but is not: a policy that sounds like a real one, a date just outside the range covered, or a scheme whose name differs by one word. The model matches patterns rather than checking facts, so it cannot tell “nearly in my documents” from “in my documents”. An instruction makes the behaviour rarer. It does not remove the reason it happens.'}
    ],
    ['q','I020'],
    ['h','Rarer is not the same as fixed'],
    ['p','This brings us to an idea you’ll use again and again. Making a failure rarer is different from removing its cause. When someone says a problem is handled because they added a rule, ask: <em>does that remove the cause, or does it only make the symptom less common?</em>'],
    ['p','So how do you remove the cause? The rest of Part I does exactly that. If the model invents answers when it has no evidence, the fix is to give it the evidence. That takes four chapters.'],
    ['p','It starts with a practical problem: your documents are too big to send in one request. But first, the next chapter shows you four techniques for writing prompts that work.'],
    ['q','I122']
  ]
},

{
  /* Arc 1, the missing craft. The course taught system prompts, temperature and
     hallucination, and then never taught how to write the prompt — a search of
     the whole course found no worked examples, no output shape, no test set.
     For a product manager that is the thing they touch most days.

     Four new terms, not eight. Opens by using Chapter 2's result. Ends on the
     gap Chapter 2.2 fills. */
  id:'ch21', num:2.1, part:1, curriculumTier:'core', phase:1, prerequisites:['ch2'], nextUnits:['ch22','ch23'], minutes:25, labs:[],
  title:'Writing prompts: four techniques that work',
  concept:'A good prompt is a specification, not a request. In this chapter you’ll learn four techniques, in the order of how much they help: show an example, name the job, break it into steps, and forbid the failures you have seen.',
  needs:[
    ['A system prompt changes behaviour','In Chapter 2, one sentence of instruction visibly reduced invented answers.',2],
    ['Instructions can be overridden','So the wording of a prompt is a real tool, but a tool with real limits.',2],
    ['A notebook and a key','You’ll run six or seven prompts in this chapter.','setup']
  ],
  takeaway:[
    'Turn a vague request into a prompt that returns the same format every time.',
    'Tell which of the four techniques is doing the work in any prompt.',
    'Show a model the output you want with a worked example, instead of describing it.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-1</code> and run the warm-up cells. Keep the system prompt from the Chapter 2 capstone open too. You’ll begin by testing it on a new kind of task.'],
    ['p','In Chapter 2 you saw that one sentence in a system prompt can change how a model behaves. Now comes the part you’ll do most often at work: writing the prompt for a particular job. This chapter gives you four techniques for that, one at a time, and you’ll try each one on your own text.'],
    ['p','Let’s start by seeing what your Chapter 2 system prompt can and can’t do.'],
    ['do','Test your system prompt on a new task',[
      ['p','Use the system prompt you wrote at the end of Chapter 2. This time, don’t ask about a fake scheme. Give it a real job: pull three specific facts out of a paragraph from your own work.'],
      ['x','It does something reasonable, in whatever format it chooses. Your system prompt controlled <em>tone and honesty</em>, which is what you wrote it for. But it said nothing about the format of the answer. So you probably got a paragraph when you wanted three fields.'],
      ['key','A system prompt controls behaviour. The task prompt has to say what the job is and what the output should look like.']
    ]],
    ['p','So what makes a good task prompt? Think about how most people write their first one. They write a request, like <em>please summarise this and pull out the key dates.</em> Sometimes that works. The rest of the time it fails, because it leaves four things unsaid. The four techniques below fill those gaps.'],
    ['key','Treat a prompt as a specification. Most of its value is in the details people leave out.'],
    ['h','Technique 1: Show an example instead of describing'],
    ['p','This is the technique that helps the most, and people usually try it last. The reason is simple. If you describe the output in words, the model imitates your words. If you show a finished example, the model copies its format.'],
    ['do','Describe it, then show it',[
      ['p','You’ll run the same job twice. First, describe the output you want in a sentence.'],
      ['code','described = """Extract the parties, the effective date and\nthe notice period. Return it as a short structured\nsummary.\n\nText: {text}"""'],
      ['p','Then delete the description and show one finished example instead.'],
      ['code','shown = """Text: Acme Ltd and Baraka Traders agreed terms\non 3 March 2024, cancellable with 30 days notice.\nparties: Acme Ltd; Baraka Traders\neffective: 2024-03-03\nnotice_days: 30\n\nText: {text}"""'],
      ['x','The described version varies. The labels change, and over five runs the dates come back in three different formats. The shown version matches your format, even the date style, though you never described it in words.'],
      ['key','One worked example is often worth a paragraph of instructions. Examples inside a prompt are called <strong>few-shot examples</strong>, and two or three are usually enough.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Here’s a question to think about before you read on. If one example helps this much, what happens when you add a second one?'],
    [
      'pred',
      {id:'ch21-shots',
       short:true,
       ph:'Better, worse or no change, and why',
       ask:'Make a prediction. You add a second example, and you make it an awkward case on purpose, such as a document where the notice period is missing. What happens to the answers for <em>normal</em> documents?',
       reveal:'They usually get better. The awkward example shows the model what to do when a field is missing, and the tidy example cannot show that.',
       then:'So the choice of examples matters more than the number of them. Two well-chosen examples, one typical and one awkward, usually beat six similar ones. They also cost much less to send.'}
    ],
    ['h','Technique 2: Name the job and the reader'],
    ['p','Imagine asking a colleague to “summarise this”. They’d probably ask, “For whom? What for?” A model won’t ask. It just guesses, so you have to tell it.'],
    ['p','“Summarise this” is a request. “You are reading a support ticket and writing the one line a triage agent needs” is a job. Naming the job and the reader changes the output a lot, for very little extra effort.'],
    ['do','Give the same text a job description',[
      ['p','Take a paragraph from your work and prompt it twice. Use a bare verb the first time. The second time, name the job and the reader.'],
      ['code','bare = "Summarise this.\\n\\n{text}"\n\njob  = ("You are preparing a one-line note for a "\n        "colleague who has thirty seconds and has to "\n        "decide whether to escalate this today.\\n\\n{text}")'],
      ['x','The bare version gives a competent summary that shortens everything equally. The job version drops most of the text and keeps the part that matters for the decision. That’s because you said what the reader has to do next.']
    ]],
    ['h','Technique 3: Break the job into steps'],
    ['p','Some tasks have several parts. If you ask only for the finished result, the model does all the parts at once, and you can’t see how it got there. If you ask for the parts in order, it costs a few more tokens, but you get work you can check.'],
    ['do','Ask for the steps',[
      ['p','Ask for a judgement from your own field, such as whether a claim is complete or whether a request meets a policy. Ask directly first, then ask again in steps.'],
      ['code','steps = ("First list the conditions the policy requires.\\n"\n         "Then quote where the document meets each one.\\n"\n         "Then state which are unmet.\\n"\n         "Only then give the verdict.\\n\\n{text}")'],
      ['x','The verdict is often the same. The difference is that now you can see <em>why</em>, and you can check each step against the document. When the answer is wrong, you can point to the step that went wrong.'],
      ['key','Steps don’t make the model smarter. They make its answer checkable, and that matters for anything a person has to stand behind.']
    ]],
    ['h','Technique 4: Forbid what you have seen go wrong'],
    ['p','The last technique is the weakest of the four. As Chapter 2 showed, an instruction discourages a behaviour but doesn’t prevent it. So write one or two prohibitions, and only for failures you have actually seen. Don’t stack up a long list.'],
    ['p','Now try all four together, one after another. This is the most useful exercise in the chapter.'],
    [
      'try',
      {id:'ch21-four',
       mins:5,
       min:60,
       rows:4,
       task:'Take a real request you would give an AI at work. Write it four times, adding one technique each time: the job, then the steps, then a worked example, then one prohibition. After each version, note what changed.',
       ph:'v1 the job … v2 the steps … v3 the example … v4 the one thing it must not do',
       after:'Most people find that the worked example makes the biggest difference, the job description the second biggest, and the prohibition almost none. That’s the reverse of the order most people write them in. A first draft is usually a request plus a list of prohibitions. Also notice that version four is long. Every technique adds tokens, and you pay for those tokens on every call. Chapter 15 puts a number on that trade-off.'}
    ],
    ['q','I013','I014'],
    ['h','Summary'],
    ['p','Here’s what you’ve learned. A prompt is a specification, and a good one has four parts. Use them in this order of impact:'],
    ['key','Show an example, name the job, break it into steps, and forbid only what you have seen go wrong.'],
    ['p','You now have four versions of a prompt and a feeling that one of them is best. But a feeling based on reading a few outputs is weak evidence, as Chapter 2 showed. Next, you’ll learn how to measure which version is really better.']
  ],
  capstone:{
    title:'Improve the instructions until a stranger can use them',
    brief:'Your system prompt from Chapter 2 works for you, because you know what you meant. A good prompt works for someone else without any explanation. In this chapter you learned four techniques: describe the reader and the job, show worked examples, break the task into steps, and add a few firm “never” rules. Now you’ll apply them to the context judge’s prompt and test the result on another person.',
    where:'Your <code>chapter-2-1</code> notebook. Write and run the prompt there. The notes box below is for what the other person said when they tried it without help.',
    steps:[
      'Open your Chapter 2 system prompt in your <code>chapter-2-1</code> notebook and run it on starter sentences 4, 5 and 8 to see where it is weakest.',
      'Add a short description of who reads the answer and what they do with it. For example: “A developer’s program reads your answer and decides whether to hide each item.”',
      'Add two worked examples: one ordinary (starter sentence 3) and one awkward (starter sentence 4, where the mobile number is already partly hidden). For each one, write out the answer you want, exactly as it should appear.',
      'Add the steps in the order a careful person would take them. First look for numbers with a fixed shape, then names and places, then anything that points to one person without an ID.',
      'Add at most two “never” rules, and only for failures you have actually seen. For example: “Never list a number that is already masked with x or *.”',
      'Give the improved prompt and five starter sentences to a friend or colleague. Ask them to run it without any explanation from you, and write down anything that confused them.',
      'Write one line for each of the four techniques, saying what difference it made.'
    ],
    done:[
      'Your improved prompt, with the reader, two examples, the steps and no more than two “never” rules.',
      'The answers on starter sentences 4, 5 and 8, before and after.',
      'What your friend or colleague found confusing.',
      'One line for each technique, saying what it changed.'
    ]
  }
},
{
  /* Opens on the gap Chapter 2.1 ends on: four versions and an impression.
     Three new terms. The whole chapter is one hands-on loop. */
  id:'ch22', num:2.2, part:1, curriculumTier:'core', phase:1, prerequisites:['ch21','ch2'], nextUnits:['ch23','ch24'], minutes:25, labs:[],
  title:'Testing prompts: build a small test set',
  concept:'Reading a few outputs is not a reliable way to choose between prompts. In this chapter you’ll build a ten-row test set from real inputs, score each prompt version against it, and change one thing at a time.',
  needs:[
    ['Four prompt techniques','You have four versions of one prompt, and no way yet to choose between them.',2.1],
    ['A confident answer is not evidence','Fluent text is not proof of a correct answer.',2],
    ['A notebook and a key','You’ll run one prompt many times.','setup']
  ],
  takeaway:[
    'Build a small test set for a prompt in under half an hour, from real inputs.',
    'Change one thing at a time and measure whether it helped.',
    'Explain why a prompt that looked better in a demo often is not.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-2</code>, and bring the four prompt versions from the last chapter. You’ll find out which one is actually better, and it may not be the one that felt better.'],
    ['p','At the end of the last chapter you had four versions of a prompt and a feeling about which was best. This chapter turns that feeling into something you can check. You’ll build a small test set, score every version against it, and then improve the best one carefully.'],
    ['h','Why reading a few outputs misleads you'],
    ['p','First, let’s see the problem for yourself. You’ll run one prompt on the same input several times and look at what comes back.'],
    ['do','Run one prompt five times',[
      ['p','Take your best prompt from the last chapter and run it on the <em>same input</em> five times. Print all five outputs.'],
      ['code','for i in range(5):\n    out = ask(best_prompt.format(text=sample))\n    print(i, "|", out[:120])'],
      ['x','The five outputs differ. The wording changes, sometimes the emphasis changes, and occasionally the answer itself is different. If one prompt varies this much, then comparing two prompts on one output each tells you very little.'],
      ['key','Each output is one sample from a range of possible outputs. Judging a prompt from one sample is not reliable.']
    ]],
    ['p','The fix is a small test set. It’s a handful of real inputs, and for each one, a note on what a good answer looks like. Chapter 6 builds a bigger version for retrieval. This one takes about twenty minutes.'],
    ['h','Build the test set'],
    ['p','A test set doesn’t need to be fancy. Ten rows are enough to start. What matters is that the inputs are real and that you write down what “good” means before you look at the results.'],
    ['do','Build a ten-row test set',[
      ['p','Collect ten real inputs for your task, including the two messiest you can find. Don’t invent them. For each one, write down the two or three things a good answer must contain. You don’t need the exact words. Aim for this mix:'],
      [
        'n',
        ['Six ordinary cases, chosen without looking at how the prompt does on them.','Two awkward ones, with missing information, an unusual format or the wrong language.','Two that should be refused or escalated rather than answered.']
      ],
      ['x','You now have a ten-row table: each input, and what a good answer must contain. This table is the most useful thing you’ll make in this chapter. The rest of the chapter runs prompts against it.']
    ]],
    ['p','With the table ready, you can finally compare your four versions fairly.'],
    ['do','Score all four versions',[
      ['p','Run each of your four prompt versions on all ten inputs. Mark each output pass or fail against what you wrote down. That’s forty quick judgements by hand.'],
      ['code','for name, prompt in versions.items():\n    for row in testset:\n        out = ask(prompt.format(text=row["input"]))\n        print(name, "|", row["id"], "|", out[:90])'],
      ['x','The ranking is often not the one you expected, and the gap between best and worst is often smaller than it felt. The versions differ most on the two refusal rows, and those are the cases people rarely show in a demo.']
    ]],
    ['h','Change one thing at a time'],
    ['p','Once you have a best version, you’ll want to improve it. Here the temptation is to fix everything at once. Before you do, think about what that would tell you.'],
    [
      'pred',
      {id:'ch22-one',
       short:true,
       ph:'What goes wrong',
       ask:'Make a prediction. You change the job description, add a third example and drop a prohibition, all at once. The score improves. What have you learned?',
       reveal:'Only that the combination is better. You don’t know which change helped. One of the three may even be making things worse while the other two make up for it.',
       then:'So change one thing, rerun and record the score. It’s slower, but it’s the only way to know what helped. When someone says they “tuned the prompt”, ask how many things they changed at once.'}
    ],
    ['do','Make one change and rescore',[
      ['p','Take the best version. Make exactly one change, such as swapping one example for a better one. Rerun all ten inputs and record the new score next to the old one.'],
      ['x','The score moved, or it didn’t. Both are useful results. If a change doesn’t move the score on ten real inputs, you can remove it, and that makes the prompt cheaper on every call.'],
      ['c','Tip','Keep the table. When your provider updates the model, rerun it. You’ll find out in an afternoon whether anything broke, instead of hearing about it from a customer.']
    ]],
    ['q','I015','I020'],
    ['h','Summary'],
    ['p','You now have a prompt chosen on evidence, and a way to recheck it whenever something changes. Many teams that ship AI features don’t have this.'],
    ['p','There is one limit, though. Everything so far works on text you paste into the prompt. Sometimes the answer depends on a document that’s too big to paste, such as a policy, a contract or a handbook. Then none of these techniques help, because the model never sees the document. Chapter 3 starts on that problem.']
  ],
  capstone:{
    title:'Build the answer key (version 1)',
    brief:'Everything in this project is measured against one test file, the answer key. In this chapter you learned to build a small test set from real inputs, to change one thing at a time, and to score each change. Now you’ll build version 1 of the answer key from the ten starter sentences, and use it to choose between versions of your prompt.',
    where:'Your <code>chapter-2-2</code> notebook for scoring. The answer key itself is a spreadsheet that you save in your repository.',
    steps:[
      'Open the project page and copy the ten starter sentences into a spreadsheet. Add the columns described under “The answer key”: number, kind of writing, sentence, what should be found, what should happen, and a note.',
      'For each row, write by hand what should be found (the kind and the exact words) and what should happen to it: remove it, mask it, or leave the sentence alone. Starter sentence 9 should say “nothing found”.',
      'Add two more rows of your own that are messy. For example, a sentence with a spelling mistake in the word “Aadhaar”, and a sentence in which a number is split by spaces. Now you have twelve rows.',
      'Save the spreadsheet as <code>evals/answer-key-v1.csv</code> in your repository.',
      'Run your improved prompt from Chapter 2.1 on all twelve rows. Give one point for each row where the tool found everything and nothing extra. Write the score out of twelve. This is your baseline.',
      'Make three changes to the prompt, one at a time, and score again after each. Write all four scores in a small table.',
      'Find one change that made no difference and remove it. Write how much that saves per call. Then run the best prompt with a cheaper, smaller model and note which rows now fail.',
      'Write half a page for a colleague: your prompt, its score, and the two rows it still gets wrong.'
    ],
    done:[
      'The answer key, version 1, with twelve labelled rows, saved in your repository.',
      'A table with the baseline score and the three changes.',
      'The result with a cheaper model, and the rows that failed.',
      'A half-page note with the prompt, the score and the two rows it still gets wrong.'
    ]
  }
},
{
  /* Arc 2 opens. 2.2 ended on a limit — everything so far works on text you
     paste. That is still true here, deliberately: before the course spends
     five chapters teaching retrieval, it is worth knowing that a large share
     of real requests never needed it. */
  id:'ch23', num:2.3, part:1, curriculumTier:'core', phase:1, prerequisites:['ch21','ch22'], nextUnits:['ch24','ch25'], minutes:20, labs:[],
  title:'The five task types: classify, extract, summarise, rewrite, generate',
  concept:'Almost every request for AI falls into one of five task types. The type decides whether you can measure the result automatically, so name it before you design anything.',
  needs:[
    ['A prompt is a specification','Four techniques shape what comes back.',2.1],
    ['A test set, and one change at a time','This is how you tell a better prompt from a different one.',2.2]
  ],
  takeaway:[
    'Name which of the five task types a request is before you design anything.',
    'Explain why two of the types can be graded automatically and three cannot.',
    'Split a vague request into the narrowest task types that still solve the problem.'
  ],
  story:[
    ['c','Before you start','There’s no new setup. Bring the test set from Chapter 2.2. You’ll see why its rows were easy to grade.'],
    ['p','In the last chapter you built a test set and used it to compare prompts. Its rows were easy to mark pass or fail. That wasn’t luck. It depended on the kind of task you gave the model, and this chapter shows you how to tell the kinds apart.'],
    ['p','People usually describe AI requests as outcomes: <em>Can the AI handle our inbox? Can it help with contracts? Can it make the team faster?</em> None of those is a task yet. Underneath almost every one is one of five task types. And the type matters more than which model you pick.'],
    ['key','Choose the task type first. It takes one sentence, and it’s the design decision most often skipped.'],
    ['h','The five types'],
    ['p','Here are the five types. Read the last column closely, because it’s the one that matters most for your work. It tells you whether a program can mark the answer, or whether a person has to.'],
    [
      'tb',
      ['Task type','What it does','Can a program grade it?'],
      [
        ['<strong>Classify</strong>','Put the input into one of a set of categories','Yes: there is a right answer'],
        ['<strong>Extract</strong>','Pull specific fields out of the input','Yes: the value is in the document or it is not'],
        ['<strong>Summarise</strong>','Make it shorter without losing what matters','No: it depends on the reader'],
        ['<strong>Rewrite</strong>','Keep the meaning, change the form or tone','No, but you can check what must not change'],
        ['<strong>Generate</strong>','Produce something new','No, and most projects start here']
      ]
    ],
    ['p','Classify and extract have right answers. That means you can measure them on the first day. The other three need a person, or a carefully checked process, to judge the output.'],
    ['p','Now try this on requests you know. It’s easier to feel the difference with real examples than with definitions.'],
    ['do','Sort real requests into the five types',[
      ['p','Write down six things people at your work have asked AI to do. Use their words, including the vague ones. Then put each one into one of the five types.'],
      ['x','Two things usually happen. Several requests turn out to be the same type in different words. And at least one doesn’t fit any single type, which means it’s really two or three tasks combined.'],
      ['key','If a request doesn’t fit one type, split it into steps until each step does.']
    ]],
    ['h','Split mixed requests into steps'],
    ['p','Take “handle the inbox”. It usually hides three tasks. You <em>classify</em> the message by type, you <em>extract</em> the account number, and you <em>generate</em> a draft reply. Each step fails in a different way, and only the first two can be measured without a person reading the output.'],
    ['do','Split the request that did not fit',[
      ['p','Take the request that didn’t fit a single type. Break it into steps, each with exactly one type, in the order they would run.'],
      ['x','You get three or four steps. Usually only the last step is hard to measure. The earlier steps are classification and extraction, which are cheap and checkable. When they’re reliable, the last step has an easier job.'],
      ['p','This also lowers cost. A classification step can run on a small, cheap model. Only the last step needs an expensive model, and only for the cases that reach it.']
    ]],
    ['p','Let’s test your eye on one more example before the summary.'],
    [
      'pred',
      {id:'ch23-shape',
       short:true,
       ph:'Which type, and what changes',
       ask:'A colleague asks for “an AI that reviews contracts and flags risky clauses.” Which task type is that?',
       reveal:'Mostly classify, with extract underneath. Each clause goes into a category, such as standard, unusual or missing, and the risky clauses have their text extracted to show. Very little of it is generation.',
       then:'That changes how you build it. Classification has right answers, so you can build an answer key from a hundred clauses a lawyer has already reviewed, and measure quality before you ship. If you had built a generator instead, you’d have nothing to measure.'}
    ],
    ['q','I059'],
    ['h','Summary'],
    ['p','So the habit to keep is a simple one. Before you ask which model to use, ask which task type you’re dealing with.'],
    ['key','Ask “which task type?” before “which model?”. If the answer is more than one type, split the request into steps.'],
    ['p','The next two chapters cover the two types you’ll meet most often. Chapter 2.4 covers classification, the type with a right answer.']
  ],
  capstone:{
    title:'Break the whole tool down into small tasks',
    brief:'“Find and hide personal details” sounds like one job. It’s really several different jobs, and each one needs a different kind of test. In this chapter you learned the five task types (sorting into categories, picking out pieces, summarising, rewriting and writing something new) and which of them a computer can mark automatically. Now you’ll break Bharat Privacy Guard down in that way.',
    where:'Written only: pen and paper, or a document. No new code. You can look at your answer key for examples.',
    steps:[
      'Write the request in the plainest words: “Find and hide personal details in English, Hindi and Hinglish text before it reaches an AI model.” Do not tidy it up.',
      'Write one sentence about what a developer using the tool wants to be different in their week.',
      'Break the request into small steps, in the order they happen. For each step, write which of the five task types it is. For example, “decide whether a number is a PAN or an Aadhaar number” is sorting into categories; “pick out the exact words that are a name” is picking out pieces; “replace the details with [HIDDEN]” is rewriting.',
      'Mark each step as one that has a clearly right answer (you can mark it automatically against the answer key) or one that needs a person’s judgement.',
      'For each step that has a right answer, say where the answer key comes from: who decides what is correct, and on what basis.',
      'Write a short paragraph to your future self: which single step will you build first, and why is it the smallest useful piece?'
    ],
    done:[
      'The request in the plainest words, and the one-sentence aim.',
      'A list of small steps, each marked with its task type.',
      'Each step marked as automatically markable or needing judgement, with the source of the answer key.',
      'The paragraph naming the first step to build and the reason.'
    ]
  }
},
{
  id:'ch24', num:2.4, part:1, curriculumTier:'core', phase:1, prerequisites:['ch23','ch22'], nextUnits:['ch25'], minutes:25, labs:[],
  title:'Classification: sorting inputs into categories',
  concept:'Classification means putting each input into one of a fixed set of categories. Because it has a right answer, you can measure it and improve it on purpose. In this chapter you’ll build a classifier, score it one category at a time, and decide which kind of error is cheaper.',
  needs:[
    ['Five task types, and which have right answers','Classification is the kind of task that can be graded, so it’s a good place to start measuring.',2.3],
    ['A test set shows whether a change helped','Here your test set turns into an answer key with real numbers.',2.2],
    ['A notebook and a key','You’ll run one classifier many times, so you need both ready.','setup']
  ],
  takeaway:[
    'Build a classifier for a real set of categories and measure it honestly.',
    'Find the category your system is worst at, and say what that costs the business.',
    'Explain why an overall accuracy figure often hides the failure that matters.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-4</code> and run the warm-up cells. Also bring twenty real examples of something at your work that gets sorted into categories. It could be tickets by type, documents by department or requests by urgency.'],
    ['p','In the last chapter you met the five task types. One of them, classification, is the easiest to grade, because each answer is either right or wrong. In this chapter you’ll build a small classifier and measure it properly. You’ll also learn why one overall score can fool you, and that matters whenever you judge an AI feature.'],
    ['do','Look again at your test set',[
      ['p','First, open the ten-row test set you made in Chapter 2.2. Look at the “good answer contains” column.'],
      ['x','If your task was classification or extraction, those rows are precise. Each one holds a value, a category or a yes. If it was summarisation, they are vague, and grading them took judgement. The difference comes from the task type, not from how well you wrote them.']
    ]],
    ['h','What classification is'],
    ['p','Think of the person who sorts the post in an office. Every letter goes into exactly one pigeonhole. Classification is the same job. It puts each input into one of a fixed set of categories.'],
    ['p','Much of what useful software does is classification. A support ticket goes to billing or to technical help. An email is spam or not spam. The big advantage is that someone can say whether each answer was right.'],
    ['key','When there is a right answer, you can count errors. When you can count errors, you can improve the system on purpose.'],
    ['h','Build a first version'],
    ['p','Let’s build the simplest classifier we can, and see what goes wrong with it.'],
    ['do','Build the simplest classifier',[
      ['p','Write the simplest possible version. It has the categories, one line of instruction, and no examples.'],
      ['code','LABELS = ["billing", "technical", "account", "other"]\n\ndef classify(text):\n    out = ask(\n        "Classify the message into exactly one of: "\n        + ", ".join(LABELS)\n        + ". Reply with the label only.\\n\\n" + text)\n    return out.strip().lower()\n\nfor row in examples[:10]:\n    print(classify(row["text"]), "|", row["truth"])'],
      ['x','Most answers are right, and the wrong ones come in two kinds. Some are real misreadings. Others come back as <code>Billing.</code> or <code>the category is billing</code>. Those aren’t wrong, but your code can’t use them. You asked for a label and got a sentence.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','Now fix the format. Use the technique from Chapter 2.1: show an example instead of describing it. Add two worked examples, and make one of them an awkward case. The format stops varying. Chapter 8 shows how to make other formats impossible, but two examples get you most of the way.'],
    ['h','Measure each category separately'],
    ['p','Next comes the important step. It’s tempting to count how many answers were right out of twenty and stop there. But that single number can hide a lot, so you’ll count for each category instead.'],
    ['do','Score each category',[
      ['p','Grade all twenty against the answers you know. Count the results for each category, not just overall.'],
      ['code','from collections import Counter\nhit, miss = Counter(), Counter()\nfor row in examples:\n    got = classify(row["text"])\n    (hit if got == row["truth"] else miss)[row["truth"]] += 1\nfor c in LABELS:\n    n = hit[c] + miss[c]\n    if n: print(c, hit[c], "/", n)'],
      ['x','The overall figure looks good, yet one category is much worse than the rest. It’s usually the rarest category, or one whose boundary with another category is unclear.'],
      ['key','Report accuracy per category, not only overall. A system that is 92% right overall and 40% right on the urgent category is not good enough for urgent messages.']
    ]],
    ['p','So you’ve found where the system is weakest. The next question is what that weakness actually costs, because that’s what a product person has to decide.'],
    [
      'try',
      {id:'ch24-cost',
       mins:4,
       min:40,
       rows:3,
       task:'Take your worst category. Write what happens to a real person when a message in that category goes to the wrong place. Then write what happens in the other direction, when another message is wrongly put in that category.',
       ph:'When a … is missed, … . When something is wrongly marked …, … .',
       after:'The two directions rarely cost the same. Missing an urgent complaint and wrongly flagging a routine one as urgent are both errors, but one is much cheaper. Once you know which, you can tune the system to lean the cheaper way, by making borderline cases fall into the safer category. That is a product decision, based on numbers, and it is yours to make.'}
    ],
    ['q','I061'],
    ['h','Summary'],
    ['p','Most of this chapter wasn’t really about AI. An answer key, counts for each category, and a judgement about which error is cheaper are the same tools you’d use to evaluate a hiring process or a triage desk.'],
    ['p','Next, you’ll meet summarisation. It has no single right answer, which is exactly why many teams ship summarisers without knowing whether they work.']
  ],
  capstone:{
    title:'Build a sorter for the kind of ID, and measure it',
    brief:'Sometimes the tool finds a string of digits and has to decide what it is. It could be an Aadhaar number, a bank account number, a phone number or a PIN code. That is a sorting job. In this chapter you learned to measure a sorter honestly, one category at a time, and to look for the category it is worst at. Here you build a sorter and test it.',
    where:'Your <code>chapter-2-4</code> notebook. Build and measure the sorter there. Write the numbers for each category in the notes box below.',
    steps:[
      'Write down the categories: Aadhaar, PAN, mobile number, bank account, PIN code, and “something else”.',
      'Write twenty short examples, with at least three for each category. Use made-up values like those on the project page. Put some inside sentences (“call me on 9876543210”) and some on their own.',
      'Write the instruction that tells a model to sort a piece of text into exactly one category and to answer with only the name of the category.',
      'Run all twenty examples through the model, and record its answer next to the right answer.',
      'Count, for each category, how many it got right. Make a small table with these columns: category, examples, correct, wrong.',
      'Find the category it is worst at. Write one sentence on what a mistake there would cost. For example, a bank account number treated as a PIN code would pass through unhidden.',
      'Decide whether the sorter is good enough to act alone, or whether it should only suggest an answer for another part to check. Give your reason using the numbers.'
    ],
    done:[
      'Twenty examples with the right answer next to each.',
      'A table of examples, correct and wrong for each category.',
      'The worst category, and the cost of a mistake in it.',
      'A decision with a reason: act alone, or only suggest.'
    ]
  }
},
{
  id:'ch25', num:2.5, part:1, curriculumTier:'core', phase:1, prerequisites:['ch23','ch24'], nextUnits:['ch3'], minutes:25, labs:[],
  title:'Summarisation: testing what a summary keeps',
  concept:'A summary that drops the most important line can still read well, so this failure is easy to miss. In this chapter you’ll decide who a summary is for, and then build a test that checks whether the facts that matter survive.',
  needs:[
    ['Some task types have no right answer','Summarisation is the first one you meet.',2.3],
    ['Counting per category beats one overall number','It’s the same idea, now applied where counting is harder.',2.4],
    ['A notebook and a key','You’ll summarise one document in several ways.','setup']
  ],
  takeaway:[
    'Decide who a summary is for, and what they will do next, before writing the prompt.',
    'Test a summariser for the failure that matters: what it left out.',
    'Explain why “it reads well” tells you almost nothing about a summary.'
  ],
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-2-5</code>. Also bring one real document with something important buried in it. It could be a deadline, an exception, a liability or a number that someone would be upset to miss.'],
    ['p','In the last chapter you graded a classifier, where every answer was plainly right or wrong. Summaries are different. There is no single right answer, so it’s much harder to say whether one is good. In this chapter you’ll see how a summary can fail without anyone noticing, and then you’ll build a simple way to catch that failure.'],
    ['h','How summaries fail'],
    ['p','Let’s start by watching a summary go wrong. Summarise a document the simplest way you can, and then look for the detail you buried in it.'],
    ['do','Summarise with a plain instruction',[
      ['p','Summarise your document with the simplest instruction. Then check whether the buried detail is in the summary.'],
      ['code','print(ask("Summarise the following document.\\n\\n" + doc))'],
      ['x','You get a well-organised, fluent summary, and it often leaves out the buried detail. Nothing in it is false. It shortened every part of the document equally, but the important content was concentrated in one place.'],
      ['key','A summary that lost the most important line looks exactly like one that kept it. You have to test for the missing detail directly.']
    ]],
    ['h','Start from the reader'],
    ['p','Think about how you’d summarise a long meeting. You’d say one thing to your manager and something quite different to a new joiner. A good summary depends on who is reading it.'],
    ['p','So before you write a summarisation prompt, answer two questions: who reads this, and what will they do next? A summary is only good or bad for a particular reader and decision.'],
    ['p','Let’s see that happen with your own document.'],
    ['do','Summarise for three different readers',[
      ['p','Summarise the document three times, naming a different reader and decision each time.'],
      ['code','readers = [\n  "a manager deciding whether to escalate today",\n  "a lawyer checking what we are committed to",\n  "a new joiner who needs the background",\n]\nfor r in readers:\n    print("===", r)\n    print(ask(f"Summarise for {r}.\\n\\n{doc}")[:400])'],
      ['x','You get three different summaries. The lawyer’s version keeps the obligations and drops the background. The new joiner’s version does the opposite. Neither is better. Each one answers a different question. The plain version from the first step wasn’t written for anyone in particular.']
    ]],
    ['h','Test what the summary keeps'],
    ['p','Once you know the reader, how do you check the summary? You can’t grade the quality of the writing with a program. But you can check whether specific facts made it through.'],
    ['key','For each document, list the facts a reader must not lose, and check every summary for them.'],
    ['do','Build a fact check',[
      ['p','For five real documents, write down the two or three facts a reader must not lose. Then check each summary for them in code.'],
      ['code','must_keep = {\n  "doc1": ["30 days", "Baraka Traders", "auto-renew"],\n  # …five documents…\n}\nfor name, facts in must_keep.items():\n    s = summarise(docs[name])\n    missing = [f for f in facts if f.lower() not in s.lower()]\n    print(name, "missing:", missing or "none")'],
      ['x','You get a miss rate for the thing that matters. The check is crude. A summary can include a fact in different words, and this check will miss it. Even so, it’s far more useful than reading five summaries and deciding they look fine.'],
      ['p','Now change one thing. Add <em>“keep every date, amount and named party exactly as written”</em> to the prompt and run it again.'],
      ['x','The miss rate usually drops sharply, and the summaries get a little longer and a little less readable. That is the trade-off, and now you have numbers for both sides.']
    ]],
    ['q','I043'],
    ['h','Summary'],
    ['p','Chapters 2.4 and 2.5 use the same method for two different task types. First decide what counts as failure. Then measure that specific failure, instead of reading the outputs and forming an impression.'],
    ['p','Everything so far has worked on a document you can paste into the request. But sometimes the answer is spread across a hundred documents, such as a handbook, a policy library or five years of contracts. These methods don’t help there, because the model has never seen those documents. Next, in Chapter 3, you’ll start solving that problem.']
  ],
  capstone:{
    title:'Write a short privacy report, and check it against the facts',
    brief:'After the tool has cleaned a batch of messages, a manager will want a short report of what was found and how often. A summary has one dangerous failure: it leaves something out, or it invents something. In this chapter you learned to decide who a summary is for, and to test what it leaves out. Here you build a summary of what the tool found, and test it.',
    where:'Your <code>chapter-2-5</code> notebook. Build the summary and its fact check there. Write what the check caught in the notes box below.',
    steps:[
      'Make a batch of ten results by hand, using starter sentences 1 to 10. For each one, write the list of things the tool found and what it did to them.',
      'Decide who will read the summary and what they will do next. For example: “A compliance manager reads it every Monday and decides whether to change a rule.” Write this in one line.',
      'Write a prompt that asks a model to summarise the ten results in five lines for that reader.',
      'Write down five facts the summary must contain, such as how many Aadhaar numbers were found, how many sentences had nothing found, and which sentence the tool was unsure about.',
      'Run the summary and tick off each of the five facts. Mark any statement in the summary that is not in your ten results. That is an invented fact.',
      'Run it again with one instruction changed. Did the missing or invented facts go away? Write what you changed and what happened.',
      'Write one line explaining why “it reads well” was not a good test.'
    ],
    done:[
      'Your ten hand-made results.',
      'The five facts the summary had to contain, ticked off for each run.',
      'Any invented facts you found.',
      'What you changed on the second run, and what it did.',
      'The line about why “it reads well” is not a test.'
    ]
  }
},
{
  id:'ch3', num:3, part:1, curriculumTier:'core', phase:1, prerequisites:['ch1','ch2','ch25'], nextUnits:['ch4','ch7','ch10','ch13'], minutes:20, labs:['chunker'],
  title:'Chunking: splitting documents into pieces',
  concept:'Models can only read a limited amount of text at once, so long documents are split into smaller pieces called chunks. In this chapter you’ll split one document three ways by hand and see what each split loses.',
  plan:{
    first:"Pick a document of five to fifteen pages and write five questions. Cut it into three giant pieces and predict what retrieval will do.",
    build:"Re-cut into fifteen or twenty fixed-size pieces, then into human-sized ones. Record completeness and boundary damage each time.",
    brk:"Find a rule severed from its exception, or a procedure severed from its warning.",
    artifact:"A three-round chunking experiment sheet, and the rule you derived from it.",
    gate:"Defend your chunking strategy from the evidence, not from a default."
  },
  needs:[
    ['There is a size limit','Everything sent in one call has to fit in the context window.',1],
    ['You pay for everything you send','You pay per token, on every call.',1],
    ['Models invent answers when they have no evidence','So the fix is to give them real evidence.',2]
  ],
  takeaway:[
    'Give the two reasons you cannot send a model every document you have.',
    'Explain what is lost when a document is split into chunks, with a concrete example.',
    'Choose a chunking approach by naming the failure you accept, since no chunk size is right for every document.'
  ],
  capstone:{
    title:'Decide how to cut long text without splitting an ID in half',
    brief:'People will paste long messages and whole documents into the tool. A long text has to be cut into pieces before it is checked. A bad cut can split a number or a name in the middle, so that no piece contains the whole thing. In this chapter you learned why text must be cut, what a cut loses, and that no piece size suits every document. Here you work out a cutting rule for the project, by hand.',
    where:'Written, no code: pen, paper and scissors, as in the chapter. Write the rule in the notes box below.',
    steps:[
      'Write a realistic long message of about 15 lines, such as a customer complaint. Include a name, an address, an Aadhaar number written in groups of four (4321 5678 9012) and a mobile number, spread over different lines. Use made-up details. Print it.',
      'Cut it into pieces in three ways: every five lines, at every full stop, and at every blank line or paragraph. Use scissors.',
      'For each way of cutting, check every piece. Is any ID or name split across two pieces, so that neither piece contains the whole thing? Write down which cuts break what.',
      'Try one more way: pieces that overlap, so that the last two lines of each piece are repeated at the start of the next one. Does it fix the broken IDs? What does it cost?',
      'Write your cutting rule in three lines that someone else could follow on thousands of messages without asking you: the size of each piece, where a cut is allowed, and how much overlap to use.',
      'Test the rule on the messiest message you can make, for example one with a number broken across two lines. Say what still goes wrong.'
    ],
    done:[
      'Your long message, printed and cut in three ways.',
      'A note on which cuts broke which details.',
      'The overlap experiment and what it costs.',
      'A three-line cutting rule, and the one case it still gets wrong.'
    ]
  },
  story:[
    ['c','Before you start','There’s no code in this chapter. Print one real document you know well, such as a policy, a contract or a procedure of five to fifteen pages. Get a pair of scissors and a pen too. You’ll do every step by hand.'],
    ['p','So far, every document you gave a model was short enough to paste into the request. Real work isn’t like that. Companies have handbooks, policies and years of contracts. In this chapter you’ll see why we can’t just send all of that to a model, and what happens when we cut it into pieces instead.'],
    ['p','It’s a quick, hands-on chapter, and it sets up everything that follows.'],
    ['do','Write your test questions first',[
      ['p','Before you cut anything, write five specific questions a real user would ask about this document. Write real questions, the kind someone types when they’re in a hurry, not topics.'],
      ['x','Now you have five questions on paper. You’ll score every experiment in this chapter against them. Write them before cutting, so you can’t choose questions that suit your cuts.']
    ]],
    ['h','Why you cannot send everything'],
    ['p','Suppose you want a model to answer questions about your company’s documents. The obvious approach is to send it the documents. That fails for two reasons you already know.'],
    ['p','First, they won’t fit, because each request has a size limit. Second, you pay for every token you send, on every question. Even when a large document would fit, sending your whole library to answer one question costs far too much.'],
    ['q','I021'],
    ['p','So the standard approach is to split documents into pieces, store the pieces, and send only the few that look relevant to each question. The pieces are called <strong>chunks</strong>, and splitting them is called <strong>chunking</strong>.'],
    ['p','The hard part is deciding where to split. Try splitting a document three ways in this tool, and see what breaks.'],
    ['lab','chunker'],
    ['p','Now let’s do the same thing by hand, on your own document, in three rounds.'],
    ['h','Round 1: three large chunks'],
    ['do','Cut the document into thirds',[
      ['p','Cut your document into three rough pieces. Ignore its structure. Then take your five questions one at a time and find which piece holds each answer.'],
      ['x','Every answer is complete. But to deliver a two-line answer, you send a third of the document. Note roughly how much irrelevant text comes with each answer. You would pay for that text on every question.']
    ]],
    ['h','Round 2: twenty small chunks'],
    ['p','Big pieces are wasteful, so the next thing to try is small ones.'],
    ['do','Cut the document into small pieces',[
      ['p','Cut a fresh copy into fifteen or twenty pieces, roughly every 150 words, even if that splits a sentence. Run your five questions again, and look for two specific problems.'],
      [
        'l',
        ['<strong>A split answer:</strong> the answer is now spread across two pieces, such as a rule on one card and its exception on the next.','<strong>An orphan:</strong> a piece that means nothing on its own, such as “The aforesaid amount shall lapse.” Which amount?']
      ],
      ['x','You’ll find both problems in a document you chose yourself. Keep these cards. Chapters 4 and 5 use these exact pieces.']
    ]],
    [
      'pred',
      {id:'ch3-cut',
       rows:3,
       ph:'Your rule, and what it will get wrong',
       ask:'Take a document you know well, such as a policy, a contract or a spec. Write the rule you would give someone for splitting it. Then name one question your rule will answer badly.',
       reveal:'Most sensible rules, such as splitting at paragraphs, headings or numbered clauses, fail in the same place: a rule and its exception end up in different pieces. If only the rule is retrieved, the answer is confident and incomplete, which is worse than no answer.',
       then:'You cannot find a rule with no failures. Instead, know which questions your rule handles badly, and test those questions on purpose.'}
    ],
    ['q','I022','I023'],
    ['h','Orphaned chunks lose their meaning'],
    ['p','The second problem is harder to spot. Some pieces stop making sense once they are cut out. Take a chunk that starts <em>the aforesaid amount shall be disbursed within sixty days</em>. On its own, it’s useless. Which amount? Paid to whom? The answer is in the previous piece.'],
    ['p','Documents are full of these references, especially legal text. But so is anything that says “the above”, “this scheme” or “such cases”. A person reading the document has the previous paragraph in mind. A chunk doesn’t.'],
    ['h','Round 3: cut along the structure'],
    ['p','You’ve now seen what goes wrong with cuts that ignore the document. So for the last round, cut the way a sensible person would.'],
    ['do','Cut the way you think it should be cut',[
      ['p','Cut a fresh copy the way you think it should be cut. Don’t overthink it. Then look at what you did.'],
      ['x','You probably followed headings and clause numbers, and made pieces of very different sizes that each make sense on their own. Write one sentence describing the rule you used. This is <strong>structure-aware chunking</strong>, which follows the document’s layout. Semantic chunking is a different approach, which splits text where the topic changes.']
    ]],
    ['key','No chunk size is correct for every document. Each size fails in a different way, so choose based on what your documents look like and what your users ask.'],
    ['p','In a design review, say which failure you chose and why. People often want a single correct chunk size, and there isn’t one.'],
    [
      'try',
      {id:'ch3-scissors',
       mins:4,
       min:50,
       rows:3,
       task:'State your trade-off. For your document: what size are you cutting at, what does that gain, and what does it lose? Write the sentence you would say in a meeting.',
       ph:'We are cutting at … which gains … and loses …',
       after:'A strong answer names a real loss, specific to your documents. For example: “Clause by clause, with a couple of sentences of overlap. That gives precise answers to questions about one clause, but loses answers that span a clause and its exception, so we test those on purpose.” If you cannot name the loss, you have accepted a default rather than made a choice.'}
    ],
    ['q','I024'],
    ['h','Summary'],
    ['p','You can’t send a model everything, because of the size limit and the cost. So documents are cut into chunks. Every way of cutting loses something, whether it’s an answer split in two or a piece that means nothing alone. That’s why you choose a chunking approach by naming the failure you accept.'],
    ['p','Next, in Chapter 4, you’ll look at the simplest way to find the right chunk for a question, which is matching keywords, and see where it fails.']
  ]
},
{
  id:'ch4', num:4, part:1, curriculumTier:'core', phase:1, prerequisites:['ch3'], nextUnits:['ch5','ch6'], minutes:20, labs:[],
  title:'Keyword search: matching words, and where it fails',
  concept:'The first way to find the right chunk is to match the words in the question. You’ll run keyword search by hand on your own chunks, see exactly where it fails, and meet the one kind of question where it wins.',
  plan:{
    first:"Using only Ctrl-F and your own eyes, rank your Chapter 3 questions against your chunks. Don’t use common sense. Let the word matches decide.",
    build:"Add four new questions: one that uses a synonym, one in plain everyday language, one in a second language, and one that contains an exact identifier.",
    brk:"Ask something the document truly cannot answer, and find the chunk that still comes out on top.",
    artifact:"A map of where your search went wrong.",
    gate:"Explain why getting a result back does not mean an answer exists."
  },
  needs:[
    ['Documents are split into chunks','You store the chunks and send only the relevant few.',3],
    ['Some chunks lose their meaning','“The aforesaid amount” no longer says which amount.',3]
  ],
  takeaway:[
    'Explain why keyword search fails most for the users who need help the most.',
    'Name the kind of question that keyword search handles better than any other method.',
    'Explain what search returns when the answer is not in your documents, and why that is dangerous.'
  ],
  capstone:{
    title:'Write the pattern rules, and score them by hand',
    brief:'The pattern checker is the first and cheapest part of the tool. It looks for details that always have the same shape, such as a PAN. In this chapter you played the search engine yourself, matching words by hand and seeing where that breaks. Now you’ll write the pattern checker’s rules in plain words, apply them by hand to your answer key, and record exactly where they fail.',
    where:'Written work, with no code yet. You apply the rules by hand, just as you did in the chapter. In Chapter 5 you’ll turn them into code.',
    steps:[
      'Open the table of the eleven kinds of ID on the project page. For each kind, write a rule in plain words that someone could apply without thinking. For example: “A PAN is five capital letters, then four digits, then one capital letter.”',
      'Add to each rule one thing it must not match. For example: “A PIN code is six digits, but a six-digit number straight after the word ‘account’ is not a PIN code.”',
      'Take the twelve rows of your answer key (version 1). Read each sentence the way a machine would, applying your rules strictly. In a new column, write the items your rules would find.',
      'Compare your new column with the correct answers. Mark each row as one of three things: everything found, something missed, or something wrongly found.',
      'Pick the three failures that teach you the most. For each one, describe the sentence and say why a fixed rule cannot cope. Look especially at starter sentence 4 (the partly hidden number), starter sentence 6 (names and addresses) and starter sentence 8 (no ID at all).',
      'Write a short paragraph. For which kinds of detail do fixed rules work well, and for which should another approach take over?'
    ],
    done:[
      'A plain-words rule for each of the eleven kinds of ID, each with something it must not match.',
      'Your answer key with a new column of what the rules would find, and each row marked.',
      'Three failures described, each with the reason a fixed rule cannot cope.',
      'The paragraph on where rules work and where something else must take over.'
    ]
  },
  story:[
    ['c','Before you start','There’s no code in this chapter yet. Bring the twenty cards you cut in Chapter 3 and the five questions you wrote before cutting. Here, you’ll act as the search engine yourself.'],
    ['p','In the last chapter you split a document into twenty chunks. Now picture the next moment. A question arrives, and something has to decide which of those chunks to send to the model.'],
    ['p','The obvious method is to match words. Search boxes have worked this way for decades. If the question says <em>refund</em>, you find the chunks that contain <em>refund</em>. It’s fast and cheap, and it’s called <strong>keyword search</strong>.'],
    ['p','It sounds like it should just work. This chapter shows you where it does, and where it quietly lets people down.'],
    ['h','Keyword search matches spelling, not meaning'],
    ['p','Let’s start with a small problem. Suppose a user is looking for their money, and your document is a company policy. Will the two speak the same language?'],
    [
      'try',
      {id:'ch4-terms',
       mins:3,
       min:20,
       rows:2,
       task:'Try it by hand first. A user types: <em>when do I get my money back?</em> Your document is a company policy. Write down the words keyword search would look for. Then write down the words the policy probably uses instead.',
       ph:'What the user typed → what the document says',
       after:'The user wrote <em>money</em>, <em>back</em> and <em>get</em>. The policy says <em>reimbursement</em>, <em>disbursement</em>, <em>credited to the registered account</em> and <em>the aforesaid amount</em>. The two lists share no words at all. Yet the question is perfectly clear, and the paragraph answers it.'}
    ],
    ['key','Keyword search compares spelling, not meaning. Two sentences that mean the same thing but share no words do not match.'],
    ['q','I025'],
    ['h','Run keyword search by hand'],
    ['p','The best way to feel this is to be the search engine yourself. You’ll follow one simple rule: count matching words, and nothing else.'],
    ['do','Act as the search engine',[
      ['p','Run keyword search by hand on all five questions against all twenty cards. First underline the important words in each question. Then find those words in the cards and give one point for every match. Finally, rank the cards by score.'],
      ['c','Watch out','Don’t use your own understanding of the document. Only the scores count.'],
      ['p','For each question, record two things. Did the top-scoring card contain the answer? And if not, what rank did the right card get?'],
      ['x','You’ll probably find that clearly worded questions do surprisingly well. Don’t trust that result. You wrote these questions after reading the document, so you used its own vocabulary. Real users usually haven’t read it.']
    ]],
    ['p','So let’s make the test fairer. We’ll write questions the way real users would, and see what happens.'],
    ['do','Write three harder questions',[
      ['p','Write three new questions about the same document. Each one should be designed to make keyword search fail.'],
      [
        'n',
        ['<strong>A synonym question:</strong> take a formal term from the document and reword it the way most people would say it.','<strong>A plain-language question:</strong> write it the way a first-time user would type it, someone who doesn’t know the document’s vocabulary.','<strong>A second-language question:</strong> ask the same thing in another language your users actually use.']
      ],
      ['p','Score all three by hand, in the same way as before.'],
      ['x','You should see that the cards which clearly hold the answer score close to zero. And yet some card still comes out on top. For each question, write one sentence: what information did the scoring not have?']
    ]],
    ['h','Where keyword search fails'],
    ['p','You’ve just seen the failure happen. It isn’t random, either. It shows up in three predictable places, and all three matter to a business.'],
    ['p','The first is the gap between formal and everyday language. Documents say <em>termination for convenience</em>, while people say <em>cancel</em>. Specialists write the documents, and everyone else writes the questions.'],
    ['p','The second is the most uncomfortable one. Keyword search fails the users who most need help. Someone who knows your product uses your vocabulary, so they find what they need. Someone who is confused uses their own words and finds nothing. So it works worst for the people with the biggest problems.'],
    ['p','The third is plain questions. <em>Why was I charged twice?</em> shares almost no words with the paragraph that explains duplicate authorisation holds. The user asks in their own words, and the document answers in its own.'],
    ['q','I027'],
    ['h','Where keyword search wins'],
    ['p','It would be unfair to stop here, because keyword search is excellent at some things. Think of exact codes, section numbers, policy IDs, part numbers and names.'],
    ['p','If a user types <em>clause 14.2</em>, they want clause 14.2. Finding that exact text is the right approach, and spelling is all you need.'],
    ['do','Search for an exact code',[
      ['p','Ask a question that contains an exact code, section number or defined term, copied straight from the document.'],
      ['x','An exact code or defined term usually ranks high with keyword search. Record its actual rank instead of assuming. This is the strength that meaning-based search, in the next chapter, adds to rather than replaces.']
    ]],
    ['q','I026'],
    ['h','Search always returns something'],
    ['p','There’s one more property of search, and it causes serious problems later. Before we name it, try a guess.'],
    [
      'pred',
      {id:'ch4-norank',
       short:true,
       ph:'One line',
       ask:'Predict: a user asks something your documents do not cover at all. What does the search step return?',
       reveal:'Twenty chunks, ranked, with one at the top. Search has no idea of “nothing here”. It scores everything and sorts the list. For an unanswerable question, the top result is just the least bad of a bad set.',
       then:'Now put that together with Chapter 2. The irrelevant chunk is passed to the model as if it were evidence, and the model writes a fluent answer from it. No step reports an error. You get a confident, wrong answer, and nothing in the system notices.'}
    ],
    ['q','I028'],
    ['p','This is why a result coming back never proves an answer exists. Hold on to that thought. One last small exercise will pull the chapter together.'],
    ['do','Name the missing capability',[
      ['p','Look at your three harder questions. Write one sentence describing the ability that keyword search is missing. Describe the gap, not the fix.'],
      ['x','Something like: <em>it can compare spellings but not meanings.</em> Keep that sentence. Chapter 5 fills this gap. If you can, wait a day before reading it.']
    ]],
    ['h','Summary'],
    ['p','Keyword search has two weaknesses. It can’t see meaning, and it never tells you that it found nothing.'],
    ['p','Next, in Chapter 5, you’ll fix the first one by teaching search to compare meaning instead of spelling. Chapter 6 then deals with the second weakness, which is harder and more important.']
  ]
},

{
  id:'ch5', num:5, part:1, curriculumTier:'core', phase:1, prerequisites:['ch4'], nextUnits:['ch6','ch7','ch12'], minutes:25, labs:['meaningmap'],
  title:'Embeddings: searching by meaning',
  concept:'An embedding turns text into a list of numbers that places it on a map of meanings. Texts that mean similar things get similar numbers, even when they share no words. You’ll build this in code and use it on the questions that keyword search got wrong.',
  plan:{
    first:"Predict which of your Chapter 4 failures meaning-matching will cure, and which ones will survive it.",
    build:"Embed the chunks and the questions, score each pair by how near they are, retrieve the top few, and compare the ranks with the ones you got in Chapter 4.",
    brk:"Test three questions: the one with an exact identifier, the one that can’t be answered, and the one in a second language.",
    artifact:"A scoreboard of keyword search against meaning-based search, plus your own guess about mixing the two.",
    gate:"Explain embeddings from the results you saw, not from a definition."
  },
  needs:[
    ['A notebook and a key','This chapter turns the idea into real code.','setup'],
    ['Keyword search cannot see meaning','Two sentences with the same meaning and no shared words do not match.',4],
    ['Search always returns something','It ranks everything and returns a top result regardless.',4]
  ],
  takeaway:[
    'Explain in plain words how a computer can tell that two differently worded sentences mean the same thing.',
    'Say what a similarity score of 0.5 does and does not mean.',
    'Name a place where embeddings would fail on your own company’s vocabulary.'
  ],
  capstone:{
    title:'Turn the rules into code, and compare them with finding by meaning',
    brief:'So far your rules are written on paper. In this chapter you learned that a computer can compare the meaning of sentences, not just their words, by turning them into lists of numbers called embeddings. Now you’ll turn your pattern rules into code. Then you’ll use meaning to find the sentences the rules can’t, and compare the two approaches on your answer key.',
    where:'Your <code>chapter-5</code> notebook, for the code and the comparison, next to your hand-scored results from Chapter 4. Write up the comparison in the notes box below.',
    steps:[
      'In your <code>chapter-5</code> notebook, turn your plain-word rules for PAN, Aadhaar, mobile number and email into code. Each one is a short pattern. Run them over the twelve rows of the answer key and print what each finds.',
      'Score the code. In how many of the twelve rows did it give exactly the right answer? Which rows did it miss or get wrong? Compare this with your by-hand result from Chapter 4. Are they the same?',
      'Write five sentences that give away a person without any ID, such as “I am the only diabetic patient in my village who had a transplant last year”. Also write five harmless sentences, such as “What documents do I need to renew my driving licence?”.',
      'Use the embedding function from the chapter to turn all ten sentences into numbers. For each of the ten sentences, find the closest of your five giveaway examples and print the similarity score.',
      'Look at the scores. Where is the line between a harmless sentence and an identifying one? Choose a cut-off, and count how many of the ten it sorts correctly.',
      'Write a comparison table for the rules and for meaning: what each finds well, what each misses, and what each costs. Include one case where meaning does worse than the rules.'
    ],
    done:[
      'Your pattern rules as working code, with the score on the twelve rows.',
      'Ten sentences, five identifying and five harmless, with their similarity scores and your chosen cut-off.',
      'A comparison table of rules and meaning, including one case where meaning does worse.'
    ]
  },
  story:[
    ['c','Before you start','Open a notebook called <code>chapter-5</code> and run the three warm-up cells from <a href="#/setup">Setup</a>. Keep the twenty cards from Chapter 3 and the three harder questions from Chapter 4 ready. This is the longest hands-on chapter in Part I, so give it one full sitting.'],
    ['p','In the last chapter you saw keyword search fail. The user wrote <em>money back</em>, the document said <em>reimbursement</em>, and the match scored zero. Now we fix that. Here you’ll teach search to compare meaning instead of spelling, and then run your own failed questions through it.'],
    ['h','A map of meanings'],
    ['p','To match meaning, you might think the computer needs to truly understand language. It doesn’t. The method is simpler than that, and an everyday picture will show you how it works.'],
    ['p','Imagine a very large map where every sentence has a position. Sentences with similar meanings sit close together, and unrelated sentences sit far apart. <em>When do I get my money back</em> and <em>reimbursement of approved claims</em> are close neighbours, even though they share no words.'],
    ['p','So who places the sentences on the map? A separate, smaller model does. You give it some text, and it gives back a long list of numbers, which are the text’s coordinates. That list is called an <strong>embedding</strong>, and the model that makes it is an <strong>embedding model</strong>.'],
    ['q','I029'],
    ['p','Once every chunk has a position, finding the relevant ones becomes a question of distance. You get the position of the question, then pick the chunks closest to it. Comparing two positions gives you one number that says how similar they are. Try it here:'],
    ['lab','meaningmap'],
    [
      'pred',
      {id:'ch5-sim',
       short:true,
       ph:'A number between 0 and 1',
       ask:'Predict before you check: <em>when do I get my money back?</em> and <em>disbursement of approved claim amounts</em> share no words. How similar will they score?',
       reveal:'High, usually above 0.6 and often near 0.8. The position comes from meaning, so two texts that mean the same thing land close together, however they are worded.',
       then:'Be careful with this scale, though. The score can run from −1 to 1, but real text rarely scores below about 0.1. So 0.5 doesn’t mean “half similar”. It sits near the low end of the useful range. A similarity number tells you little unless you also know what clearly good and clearly bad matches score.'}
    ],
    ['q','I032'],
    ['h','Build it in code'],
    ['p','Now let’s make the map real. In a moment you’ll type a few lines that create embeddings and measure how close two of them are.'],
    ['do','Create embeddings and compare them',[
      ['p','Type this carefully. It’s the most important code in Part I. It turns text into an embedding, and then measures how similar two embeddings are.'],
      ['code','import numpy as np\n\ndef embed(texts, input_type):\n    resp = client.embeddings.create(\n        model="nvidia/nv-embedqa-e5-v5",\n        input=texts,\n        extra_body={"input_type": input_type,\n                    "truncate": "END"}\n    )\n    return [np.array(d.embedding) for d in resp.data]\n\ndef cosine(a, b):\n    return float(np.dot(a, b) /\n                 (np.linalg.norm(a) * np.linalg.norm(b)))\n\nwords = ["contract", "agreement", "MoU", "sandwich"]\nvecs = embed(words, "passage")\nprint("numbers per address:", len(vecs[0]))\nfor i in range(len(words)):\n    for j in range(i + 1, len(words)):\n        print(words[i], "vs", words[j],\n              round(cosine(vecs[i], vecs[j]), 3))'],
      ['x','Each embedding has 1,024 numbers. The words <code>contract</code>, <code>agreement</code> and <code>MoU</code> score high with each other, around 0.5 to 0.8. Every pair that includes <code>sandwich</code> scores clearly lower. You’ve just measured meaning with one line of arithmetic.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Questions and passages are embedded differently'],
    ['p','There’s one detail to know before you search. A question is short and phrased as a question. The passage that answers it is longer and phrased as a statement.'],
    ['p','Good embedding models are trained with this difference in mind, so they expect you to say which one you’re embedding. That’s why the code above has an <code>input_type</code>. If you get it wrong, nothing breaks, but the results quietly get worse.'],
    ['q','I030'],
    ['h','Search your own chunks by meaning'],
    ['p','Now for the moment this chapter has been building towards. You’ll take the questions that keyword search failed, and ask them again, this time by meaning.'],
    ['do','Rerun the questions keyword search failed',[
      ['p','Paste in the text of the cards you cut in Chapter 3, as a list, and create an embedding for each one.'],
      ['code','chunks = [\n    "…paste the text of card 1…",\n    "…card 2…",\n    # …all fifteen or twenty of them…\n]\nchunk_vecs = embed(chunks, "passage")\n\ndef retrieve(question, k=3):\n    q = embed([question], "query")[0]\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ranked = sorted(range(len(chunks)),\n                    key=lambda i: scores[i], reverse=True)\n    for i in ranked[:k]:\n        print(round(scores[i], 3), "| chunk", i,\n              "|", chunks[i][:80], "…")\n\nretrieve("your synonym assassin from Chapter 4")'],
      ['x','Questions that scored zero with keyword search may now rank the correct card much higher. Run all three harder questions and compare with your handwritten rankings. The second-language result depends on this model and your documents, so write down the actual ranks and scores.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','One more check. Remember that search always returns something, even when the document has no answer. Let’s see whether meaning changes that.'],
    ['do','Ask something the document does not cover',[
      ['p','Ask a question the document cannot answer. It doesn’t need to be hard. An unrelated one is fine.'],
      ['code','retrieve("what does this document say about cricket?")'],
      ['x','Three chunks come back anyway, with scores around 0.2 to 0.4 that don’t obviously look wrong. Search still never says “nothing here”. And without a baseline, you can’t yet tell a low score from a normal one. Chapter 6 builds that baseline.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Where embeddings fail'],
    ['p','Embeddings are impressive, but they have limits. An embedding model is only as good as the text it learned from, and that was mostly English text from the internet.'],
    ['p','If your vocabulary was rare in that text, the model places it badly. Two things your users see as different may end up close together. Or two things they see as the same may end up far apart.'],
    [
      'try',
      {id:'ch5-map',
       mins:4,
       min:40,
       rows:3,
       task:'Think about your own domain and users. Where would a model trained mostly on English internet text put two things close together that your users see as different, or far apart when your users mean the same thing?',
       ph:'In our domain the model would get … wrong, because …',
       after:'Indian financial and legal vocabulary has many examples: <em>lakh</em> and <em>crore</em>, NEFT and IMPS, and government scheme names that differ by one word but mean very different amounts. Regional languages typed in English letters, such as <em>paisa kab milega</em>, are another. So are internal terms: two product codenames mean different things to you and nothing to the model, so it places them by spelling. Try to name these failures before a user finds them.'}
    ],
    ['q','I031'],
    ['h','Summary'],
    ['p','Embeddings are the basis of most “chat with your documents” products, and they work well. But they still return the nearest chunks every time, even when nothing is close. So the problem from Chapter 4 is still there.'],
    ['p','Next, in Chapter 6, you’ll learn how to measure that problem, and how to tell whether your search is working.']
  ]
},
{
  id:'ch6', num:6, part:1, curriculumTier:'core', phase:1, prerequisites:['ch4','ch5'], nextUnits:['ch7','ch75','ch12','ch14'], minutes:25, labs:['prdial'],
  title:'Evaluation: measuring whether search works',
  concept:'A good demo is not evidence. You’ll write an answer key before testing, measure how often search finds the right chunk, and see how precision and recall pull against each other.',
  plan:{
    first:"Predict how many of ten questions will find the right chunk at k=3. Write the number down and circle it.",
    build:"Build your ground truth, including one question that can’t be answered. Then measure at k=1, k=3 and k=8.",
    brk:"Change one thing about how search works, and run the whole set again.",
    artifact:"An evaluation table, a list of acceptance criteria, and a threshold that decides whether you release.",
    gate:"Defend why the quality bar depends on what a failure costs, not on the technology."
  },
  needs:[
    ['Search always returns something','It returns a ranked list whatever you ask.',4],
    ['Embeddings find the nearest chunks','Which is not the same as finding the right answer.',5]
  ],
  takeaway:[
    'Explain what a team must build before it can honestly claim an accuracy number.',
    'Describe the two ways a search step fails, and why fixing one tends to make the other worse.',
    'Decide which failure is worse for a feature you work on, and defend the choice.'
  ],
  capstone:{
    title:'Build the scoreboard, and write a ship-or-not note',
    brief:'Until now you’ve judged the tool by looking at it. Now you’ll give it a number. In this chapter you learned that a search can fail in two ways: it can miss something that was there, or return something that wasn’t. For Bharat Privacy Guard, a missed detail is a leak, and a false alarm is an annoyance. Here you’ll measure both, for each kind of ID and each kind of writing, and decide whether this version is good enough to use.',
    where:'Pen and paper for the thinking, plus your <code>chapter-5</code> notebook for the measurements. Write the note itself in the notes box below.',
    steps:[
      'Grow the answer key to version 2, with about 30 rows spread evenly across English, Hindi and Hinglish. Include at least five tricky rows from the list on the project page. Save it as <code>evals/answer-key-v2.csv</code>.',
      'Run the pattern checker from Chapter 5 on all 30 rows. For every item that should be found, mark it found or missed. For every item the tool reported, mark it correct or a false alarm.',
      'Calculate recall (the share of real items that were found) and precision (the share of reported items that were real) for each kind of ID, and for each kind of writing. Put the results in two small tables.',
      'Run it at two settings of your choice, for example strict matching and loose matching. Record the numbers for both.',
      'Decide which failure is worse for this tool, a missed detail or a false alarm, and explain why in two sentences. Think about what happens to a real person in each case.',
      'Write the note. Recommend one setting, say which failure you’ve decided to accept and who made that decision, and say whether this version is good enough to use.'
    ],
    done:[
      'The answer key, version 2, with about 30 rows, saved in your repository.',
      'Two tables of recall and precision: one for each kind of ID and one for each kind of writing.',
      'The numbers for two settings.',
      'A note that recommends a setting, names the failure you accept and says whether this version is good enough.'
    ]
  },
  story:[
    ['c','Before you start','You need a pen and paper, plus your <code>chapter-5</code> notebook for the measurements. Bring the document from Chapter 3 and the <code>retrieve</code> function from Chapter 5.'],
    ['p','By now you have a search step that finds chunks by meaning, and it seems to work. But sooner or later, someone senior will ask: is it good? Often the answer is a demo of three questions that work. That doesn’t tell you how often the system is right.'],
    ['p','In this chapter you’ll learn how to measure it properly. It isn’t complicated. If you’ve ever written acceptance criteria, you already know most of it. It comes down to three ideas.'],
    ['h','Idea 1: Write the answers before you test'],
    ['p','Suppose you test a system by asking it questions and checking whether the answers look right. They will look right, because plausible text is exactly what a model produces. That test tells you nothing.'],
    ['p','So first write a list of real questions, each with its verified correct answer. This list is called <strong>ground truth</strong>. It’s simply an answer key, written before the test.'],
    ['p','Ten to thirty questions is enough to start. Use real questions, in the words users actually use. Questions written after reading the documents will use the documents’ words, and they make search look better than it is.'],
    ['q','I040'],
    ['do','Write the answer key',[
      ['p','Using your Chapter 3 document, write ten questions: the eight you already have, plus two new ones. One of the new questions must be unanswerable, about something the document doesn’t cover.'],
      ['p','For each question, record the verified answer and the number of the card or cards that contain it. Verified means you checked, not that you remembered.'],
      ['x','You now have a ten-row table, written before any measurement. This is your ground truth. Include an unanswerable row in every answer key you write.']
    ]],
    ['p','Before you measure anything, make one prediction. It’s quick, and it teaches you something.'],
    [
      'pred',
      {id:'ch6-first',
       short:true,
       ph:'A fraction, like 6/10',
       ask:'Predict: you build a search step, write ten honest questions and run them. How many will find the right chunk on the first try?',
       reveal:'Six or seven out of ten is a normal, healthy first result for a working system.',
       then:'If you got nine or ten, the likely reason is that you wrote the questions after reading the documents. That tests whether search can find text using its own words, and that’s not what users do.'}
    ],
    ['c','Tip','When a vendor quotes an accuracy number, ask: <em>against which answer key, written by whom, and can I see the questions?</em> If they can’t show you, the number is not evidence.'],
    ['q','I103'],
    ['p','Now let’s put your own search to the test, starting with a guess.'],
    ['do','Predict, then measure',[
      ['p','Before you run anything, predict: of the nine answerable questions, how many will return the right card with <code>k=3</code>? Write the number down.'],
      ['code','for q in questions:          # all ten\n    print("—", q)\n    retrieve(q, k=3)'],
      ['p','Grade the run against your answer key. Count how many of the nine succeeded. Count how many of the twenty-seven returned cards were relevant. Then look at what came back for the unanswerable question, and note its top score.'],
      ['x','Compare the result with your prediction. Most people predict too high. Write one sentence about the size of your gap. That gap is the reason a demo should not decide whether a system ships.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['h','Idea 2: Precision and recall trade against each other'],
    ['p','Imagine you ask an assistant to fetch the files for a meeting. They can go wrong in two ways. They can leave out something that mattered, or they can bring you a huge pile of things that didn’t.'],
    ['p','Leaving out what mattered is poor <strong>recall</strong>. Bringing lots of irrelevant material is poor <strong>precision</strong>. In search, the setting that sits between the two is how many chunks you fetch per question. It’s usually called <strong>k</strong>.'],
    ['p','A higher k usually improves recall and lowers precision. A lower k does the reverse. These are tendencies, not guarantees, so measure them on your own questions.'],
    ['p','You usually can’t maximise both at once. Try changing k and watch what happens:'],
    ['do','Change k and compare',[
      ['p','Grade the same ten questions again at <code>k=1</code> and at <code>k=8</code>, and fill in this table by hand:'],
      [
        'tb',
        ['k','correct-card hits (of 9)','relevant / total fetched'],
        [['1','… / 9','… / 9'],['3','… / 9','… / 27'],['8','… / 9','… / 72']]
      ],
      ['x','A higher k often finds more correct cards, but a smaller share of what it returns is relevant. Measure both on your documents. More chunks also means more tokens per request, and the actual cost also depends on chunk sizes, prompt length, output length, caching and pricing. Record real token counts and latency before deciding.']
    ]],
    ['lab','prdial'],
    ['q','I044','I045'],
    ['h','Idea 3: Which failure is worse depends on the product'],
    ['p','So if you can’t have both, which one should you protect? That’s a product decision, not an engineering one.'],
    ['p','Take a customer-facing bot that answers policy questions. Here, low precision is the dangerous failure. The model builds a confident, wrong answer from irrelevant material, and a wrong policy given to a customer is a liability. Missing an answer only creates a support ticket.'],
    ['p','Now take a tool that helps a lawyer find precedents. It’s the opposite. A missed precedent can lose a case, while an extra irrelevant result costs thirty seconds of reading.'],
    ['key','Choose the failure to minimise based on what happens to a real person when each one occurs. The product owner makes this decision, not the person who built the system.'],
    [
      'try',
      {id:'ch6-fatal',
       mins:5,
       min:50,
       rows:4,
       task:'Think of something you work on. Which failure is cheap, and which is dangerous? Explain it in terms of what happens to a real user. Then say how many chunks you would fetch as a starting point.',
       ph:'For … the dangerous failure is … because … so I would start at k = …',
       after:'A strong answer links the choice to a consequence. For example: “For our support assistant, irrelevant results are dangerous, because a wrong policy quoted to a customer creates a liability we then have to honour. Missing an answer only creates a ticket we were already getting. So we prioritise precision, start with a low k, and give the assistant a clear way to say it does not know.” The reasoning matters more than the number.'}
    ],
    ['q','I046'],
    ['h','Summary'],
    ['p','Most people discussing an AI feature don’t have an answer key. With one, you can say whether the system works, and back it with a number you measured yourself.'],
    ['p','You’ve now seen the whole search step: finding chunks by words, finding them by meaning, and measuring how well either one works. Next, in Chapter 7, you’ll put the pieces together with a model, and build your first retrieval-augmented generation (RAG) system.']
  ]
},

{
  id:'ch7', num:7, part:1, curriculumTier:'core', phase:1, prerequisites:['ch3','ch5','ch6'], nextUnits:['ch75','ch8f','ch11r'], minutes:25, labs:['redmap'],
  title:'Putting it together: retrieval-augmented generation (RAG)',
  concept:'You have already built every part of a RAG system in Chapters 1 to 6. In this chapter you join those parts into one function, give the pattern its name, and mark every place where it can fail without showing an error.',
  plan:{
    first:'Draw the complete system from memory, and mark every failure you have personally watched happen.',
    build:'Write the smallest end-to-end function that retrieves evidence and answers from it, with evidence ids and the usage block.',
    brk:'Test a question that has no answer, test retrieved content that carries a planted instruction, and test the system with its instruction removed.',
    artifact:'An architecture drawing with the failures marked in red, plus a working demo.',
    gate:'You can explain every layer in your own words, without hiding behind a framework.'
  },
  needs:[
    ['A notebook and a key','You put the whole system together in this chapter.','setup'],
    ['Documents are split into chunks','This is because of the size limit and the cost.',3],
    ['Embeddings find relevant chunks','They match by meaning, not by shared words.',5],
    ['An answer key shows whether it works','It also shows which failure you chose to accept.',6]
  ],
  takeaway:[
    'Draw the standard design behind most “chat with your documents” products.',
    'Point to each step and say what can go wrong there without any error appearing.',
    'Rank the usual fixes by how much they help, and explain why a bigger model is rarely the best one.'
  ],
  capstone:{
    title:'Write the findings page for version 0',
    brief:'You now have a first working version, which this course calls version 0, and a list of ways it fails. This capstone is not a build. It is the page you would want in front of you the next time someone demonstrates a privacy product and asks you to approve it. In this chapter you learned the standard parts of a system that answers from documents, and where each part can fail without any error appearing. Here you describe what you built in the same way.',
    where:'Written only. This capstone is not a build. Use your <code>chapter-7</code> notebook for the numbers, and write the page in the notes box below.',
    steps:[
      'Draw the tool as boxes and arrows on one page: text in, pattern checker, name-and-place finder, context judge, rule-keeper, safe text out. Mark which boxes exist today.',
      'Under each box that exists, write what can go wrong without any error message appearing. For example: “A number split by a line break is silently missed.”',
      'Write the scoreboard numbers from Chapter 6 on the page.',
      'List the four biggest gaps you have seen. For each one, write what you saw when you triggered it.',
      'Rank the four gaps for a real user. In one line each, say what the failure would cost a real person.',
      'Write what you will fix first and what it would take, in two sentences.'
    ],
    done:[
      'A one-page drawing of the tool with the existing boxes marked.',
      'A silent failure written under each existing box.',
      'The scoreboard numbers.',
      'The four biggest gaps, ranked, with the cost to a real person.',
      'Two sentences on what you will fix first.'
    ]
  },
  story:[
    ['c','Before you start','Open a new notebook called <code>chapter-7</code> and run the warm-up cells. Keep your <code>chapter-5</code> notebook open too, because you will copy across your <code>embed</code>, <code>cosine</code>, <code>chunks</code> and <code>chunk_vecs</code>. Nothing in this chapter is new. You are only joining things you already built.'],
    ['p','In the last chapter you measured whether your search works, using an answer key. So you now have all the parts of a system that answers questions from your own documents. This chapter puts them side by side, gives the whole thing its proper name, and shows you where it can go wrong quietly.'],
    ['h','The pattern has a name: RAG'],
    ['p','Let’s start with what you have already built. You split your documents into chunks, and you create an embedding for each chunk. When a question comes in, you find the chunks closest to it. Then you send those chunks to the model together with the question, and the model answers from them.'],
    ['p','This pattern is called <strong>RAG</strong>, short for retrieval-augmented generation. <em>Generation</em> is the text model from Chapter 1. <em>Retrieval</em> is the search from Chapters 4 and 5. RAG is the most widely deployed pattern in applied AI, and most products that answer questions about your documents use it.'],
    ['c','Note','The course held back the name until now on purpose. You have built and broken every part of it. So the term points to something you have done, not something you memorised.'],
    ['p','Before we go further, try to see the whole thing in your head. Can you list the steps from a document arriving to an answer reaching a user, without looking back?'],
    [
      'try',
      {id:'ch7-draw',
       mins:6,
       min:60,
       rows:6,
       task:'Without looking back, write the steps as a numbered list, from a document arriving to an answer reaching a user. Then star every step where a wrong answer can be produced <em>without any error appearing</em>.',
       ph:'1. … 2. … (star the silent failures)',
       after:'The steps: split into chunks → create embeddings → store them → embed the question → find the nearest chunks → send them with the question → generate the answer → show it with its sources. Almost every step can fail silently. Chunking can separate a rule from its exception. Search returns a top result even when your documents have no answer. The model writes fluently from an irrelevant chunk. None of these produce an error. The system does not crash; it just becomes wrong while every component reports success.'}
    ],
    ['q','I114','I116'],
    ['h','Mark where it fails'],
    ['p','That last point is the heart of this chapter. A normal program fails loudly, with a red error. A RAG system usually fails politely, with a smooth and confident answer that is wrong. So the best habit you can build is to know where each failure hides.'],
    ['do','Draw the pipeline and mark the failures',[
      ['p','Close everything. On paper, draw the whole path: documents → chunks → embeddings → storage → question → question embedding → nearest chunks → prompt assembled → answer. Next to each arrow, write what happens there.'],
      ['p','Then, in red, mark every place you have seen it fail yourself.'],
      ['x','You should find at least six. Candidates include the invented answer, the system prompt giving way under pressure, the split answer and the orphaned chunk. Others are keyword search missing meaning, search never returning “nothing”, the query-versus-passage mistake, felt versus measured quality, and the cost of every token. If you have fewer than six, check the earlier chapters again.']
    ]],
    ['h','Assemble the system'],
    ['p','Now let’s build the whole thing as one function. You won’t write anything new here. Each line comes from an earlier chapter, and the comments beside the code tell you which one.'],
    ['do','Build the RAG function',[
      ['p','Paste in your chunks from Chapter 5 first. Then add this function. Each line is something you built earlier, in the chapter noted beside it.'],
      ['code','def rag_answer(question, k=3):\n    q = embed([question], "query")[0]          # Ch 5\n    scores = [cosine(q, cv) for cv in chunk_vecs]\n    ranked = sorted(range(len(chunks)),\n                    key=lambda i: scores[i], reverse=True)\n    context = "\\n\\n".join(              # Ch 3 and 6 — the k dial\n        chunks[i] for i in ranked[:k])\n    resp = client.chat.completions.create(     # Ch 1\n        model="meta/llama-3.1-8b-instruct",\n        temperature=0,                         # Ch 2\n        messages=[\n          {"role": "system", "content":         # Ch 2 briefing\n            "Answer ONLY from the provided context. If the "\n            "answer is not in the context, reply exactly: "\n            "\'Not found in the provided documents.\' "\n            "Never invent details."},\n          {"role": "user", "content":\n            f"Context:\\n{context}\\n\\nQuestion: {question}"}\n        ]\n    )\n    return resp.choices[0].message.content'],
      ['p','Run it three times, with three different kinds of question:'],
      ['code','print(rag_answer("something your document CAN answer"))\nprint(rag_answer("your Chapter 4 synonym assassin"))\nprint(rag_answer("what does this say about cricket?"))'],
      ['x','Check the first answer against your source document. The second tests whether meaning search found evidence that keyword search missed. The third tests what happens when there is no answer. A refusal is not guaranteed, so record what actually happens. Retrieval plus instructions can reduce unsupported answers, not eliminate them.'],
      ['key','Treat the third run as a test result, not as proof of safety. Keep that question in your test set, and run it again whenever the model, the prompt, the retrieval or the documents change.'],
      [
        'snag',
        ['A red box saying something <em>is not defined</em>','You ran a cell that needs something from an earlier cell, but the earlier cell hasn’t run yet. Scroll to the top, run the warm-up cells in order, then come back here. This is the most common problem in a notebook. It happens to everyone, and it doesn’t mean your code is wrong.','An authentication error, or the number 401','Your key didn’t reach the code. Run the cell that loads the key again, and check that the name you saved it under matches <a href="#/setup">Setup</a> exactly. Capital letters count.','A message about a module not being found','The install cell hasn’t run in this session. A notebook forgets what it installed whenever it disconnects, and it disconnects after you leave it alone for a while. Run the install cell again and carry on.','It runs, but your numbers are not the ones printed above','That’s expected, not a mistake. Models change, and your text isn’t the same as ours. What matters is the direction and the rough size of the difference, not matching a number exactly. If your numbers move the same way, the experiment worked.']
      ]
    ]],
    ['p','You have seen that the system needs two things to stay honest: the evidence, and the instruction. What happens if you take one of them away? Let’s find out.'],
    ['do','Remove the system prompt',[
      ['p','Delete the system message and keep everything else. Ask about cricket again.'],
      ['x','The model happily summarises whatever three irrelevant chunks ranked highest. Retrieval alone does not stop invented answers. You need both the evidence and the instruction; removing either one lets the problem back in. Put the system message back.']
    ]],
    ['h','Diagnose “bad answers”'],
    ['p','Sooner or later someone will tell you, “our AI assistant gives bad answers.” That is a symptom, not a diagnosis. At least four different problems look the same from the outside, and each one needs a different fix.'],
    ['p','The map below shows where each of them lives. Look at it with your red marks in mind.'],
    ['lab','redmap'],
    ['p','Now a question that every product person gets asked. If you have one quarter to improve answer quality, where should the effort go? Make your guess before reading on.'],
    [
      'pred',
      {id:'ch7-spend',
       rows:3,
       ph:'Your ranking, biggest impact first',
       ask:'You have one quarter to improve answer quality. Before reading on, rank these options: a more expensive model, better chunking, a reranking step, more work on the instructions, and cleaning up the documents.',
       reveal:'Cleaning the documents and fixing the chunking usually help most. A reranking step is usually the next cheapest large improvement. A more expensive model usually costs the most and helps the least, because the model could already read; the right evidence was not reaching it.',
       then:'This is a useful general rule: in a RAG system, quality problems are usually evidence problems, not model problems. Spend your effort on getting the right evidence to the model.'}
    ],
    ['q','I117'],
    ['h','Summary'],
    ['p','You have built a complete RAG system, from chunking to a grounded answer, and you have seen each part fail. You also know a useful rule: when answers are bad, look at the evidence before you blame the model.'],
    ['p','Part II adds what this version still cannot do: structured output, tools, larger contexts and stronger retrieval. Next, you’ll test your system four ways and find those gaps yourself.'],
    ['q','I118']
  ]
}

];
