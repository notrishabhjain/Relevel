# How to do the work, and how to ship it

The [Plan & tracker tab](#plan) lists every step of the route. The steps themselves live in the playbook and the book. They explain each idea and the hands-on work in full. This tab covers what sits around them: how to take a chapter on its first pass, the one-time setup, and how to publish what you make so other people can see it.

## What "shipped" means

Think of posting a letter. It is not sent until it is in the box. A thing is shipped when a stranger can open one link and see it. Anything less is still a draft. Use this checklist when a week asks you to publish:

1. **A public link.** This can be a GitHub repo (an online folder for your files), a GitHub Pages page, a Hugging Face Space or a published post. A file on your machine does not count. A private repo does not count either.
2. **A page that opens with the result.** Put the number first, for example "the sorter got 47 of 50 right". Then explain how it works.
3. **One honest failure.** Show a case where it still breaks. This is what makes it an evaluated product and not a demo.
4. **Public data only.** Use the made-up records the course gives you. Never use client data. Never use anything covered by an employer or client NDA (a promise to keep things secret).
5. **A ship-log line.** Write one line in your log every Sunday: the date, the week, and what you finished ([recipe](#ship-log)).

If you run out of time, publish at 80%. A decent page that people can see is better than a perfect one that nobody can see.

## A chapter on its first pass {#first-pass}

**Weeks 1–24 and 26. Ships:** the week’s steps ticked. **Time:** what the route says for each step.

Every week on the route is a few steps in order. First a book chapter. Then the playbook chapter that practises it. Sometimes a small try. Then a look back on Friday. Read the story first. Do its chapter the same day or the next, while the story is fresh. Here is how to take each kind of step.

1. **A book chapter.** Read it in the book, in English or Hinglish. It ticks by itself when you reach the end, on every page of the site and in your account. If a chapter is split over two days, the first half ticks when you reach the second.
2. **A playbook chapter.** Read it and answer the boxes as you go. Do the hands-on steps that run in the browser. Then do the short version of its project task: a few lines in your notes. The minutes on the route include it. At the end, press “Mark chapter complete”. That press ticks the step.
3. **A first pass.** Track A and Track B have long “Build it” sections. On the route, you read the chapter, answer its boxes and mark it complete. Write “later” next to the Build in your notepad. Come back to it when you have time. For a core chapter, a first pass means the same: read it, answer the boxes, run the page’s own tools, and write “later” beside the project task.
4. **A try.** This is a small task off the page. Do it, then tick it on the route page or on this tab.
5. **The look back.** Write three lines in your notepad: what made sense, what did not, and one question. If you keep a photo log, take the photo now. Tick it.

**Done when:** every step of the week shows a tick. If a week runs over, start next week from the first open step. The dates are a guide, not a judge.

## The one-time setup {#setup}

**Week 5. Ships:** a model connected and the test call working. **Time:** about 15 minutes, once.

The setup lives in one place: the [setup page in the playbook](../app/#/setup). You get a free API key (a secret password for the model). You paste it in once. Then you press the test button. After that, the code in every chapter runs right there in the page. You install nothing and open no other window. This comes right after Chapter 0.5, where you saw tokens and cost on your own text. So you know what the key pays for.

1. Do one section at a time. Stop after any section if the day’s ten minutes are up.
2. If a step fails, the page tells you why. Copy the exact error message into your notes, with the step you were on.
3. The key stays in the setup page, in your browser. Never paste it into a code cell (one box of code) or a chat.

**Done when:** the setup page’s test cell prints `setup works`.

## Publish a project {#publish}

**Week 25. Ships:** a public write-up with a link anyone can open. **Time:** 2 hours, with a strict time limit.

Publishing turns finished work into something other people can see. In Weeks 8, 12, 15 and 21 you publish a small version ([small publish](#small-publish)). In Week 25 you publish the capstone in full. Keep to the two hours. Stop when the time is up.

1. Put the write-up in the repo README (or `docs/report.md`). Use this order: **Result** (one headline number), **Problem**, **What I built** (one diagram or screenshot), **How I evaluated it** (data, metrics, method), **What failed** (two examples and the counts), **Cost and latency**, **What I would do next**, **Reproduce**.
2. Tag a release (`v1.0`). This freezes the version you describe.
3. If the project has a visual or a demo, publish it for free. Use a static page on [GitHub Pages](https://docs.github.com/en/pages/quickstart), or an app on [Hugging Face Spaces](https://huggingface.co/docs/hub/spaces-overview).
4. Record a short demo ([demo-video](#demo-video)). Link it at the top of the README.
5. Post on LinkedIn in three sentences: the result with its number, one thing that surprised you, and the link. Write it in English. Add a Hinglish example if it helps.
6. Add the Sunday ship-log line ([ship-log](#ship-log)).

**Done when:** you can send one link to a stranger, and they understand the result in 60 seconds.

## Small publish: three sentences and a link {#small-publish}

**Weeks 8, 12, 15 and 21. Ships:** one short public post or a README. **Time:** 20 to 30 minutes.

A small publish is not a launch. It shows one result with its number, early, so that a recruiter could see it today. There is no `v1.0` tag and no video.

1. Write three sentences: the result with its number, one thing that surprised you, and a link. Write in English. Add a Hinglish example if it helps.
2. Put them in the README of your repository, or in a LinkedIn post, or both.
3. Check that every example uses made-up data. Before you make the repository public, search its history for keys and real personal details. If you find one, remove it and ask for help to rotate it (cancel it and make a new one).
4. In Week 12 only: move the findings page from the notes box into the README, and make the repository public.
5. Add the Sunday ship-log line ([ship-log](#ship-log)).

**Done when:** a stranger can open one link and read the number in 30 seconds.

## Demo video: three minutes, no editing {#demo-video}

**Week 25.** Use any screen recorder (Loom, or your phone recording the screen). You need only the screen, not your face. Keep the video to three minutes. Follow this plain script:

1. 0:00–0:20: the problem, in one sentence, and the result number.
2. 0:20–2:00: a live run on two inputs. One works. One fails or is refused.
3. 2:00–2:40: the eval table, or the CI gate (the automatic check that blocks bad changes) turning red and green.
4. 2:40–3:00: what you would do next. Do one take, and leave small stumbles in.

Upload it as unlisted, and link it at the top of the README.

## Portfolio site {#portfolio-site}

**Weeks 26 and 27. Ships:** a live page for Bharat Privacy Guard. **Time:** about 2 hours in Week 27, after the 60-minute start in Week 26.

This is the front door to your work. Keep it plain, quick to read, and honest about numbers. In Week 26 you put the project where people can see it. In Week 27 you finish the page and link the case study from it.

1. Create a repo named `<your-username>.github.io`, or any repo with Pages enabled ([quickstart](https://docs.github.com/en/pages/quickstart)). Plain HTML or Markdown is enough.
2. Give the project one page, in this order: problem, approach, evals, result number, failure example, what you would do next, and links to the findings document and demo video.
3. Add a short home page: who you are in two sentences, the project as a card with its headline number, and how to reach you. Add later projects as cards when they exist.
4. Open it on a phone, and fix anything that spills off the screen. Then ask one person to find your best result in under 30 seconds.

**Done when:** the link works in a private browser window and the project card shows a number.

## Mock interviews {#mock-interviews}

**Weeks 13, 23 and 28. Ships:** practice answers spoken aloud, six career stories written on the look backs, and a timed build. **Time:** 15 minutes in Weeks 13 and 23, about two hours in Week 28.

You practise out loud. It is far easier to answer in your head than in words. Week 13 and Week 23 each give you one question. By Week 28 you have written most of your stories, so that week goes to speaking them. The questions are the nineteen on the Curriculum tab.

1. Use the [question bank](https://github.com/landedjobs/ai-pm-interview-prep) and [Exponent's product sense guide](https://www.tryexponent.com/blog/product-sense-interview). Pick questions you would find hard. Ask Claude or Gemini to interview you with a rubric (a marking list: problem framing, why AI, metrics, evals, failure handling, cost) and to score you. Then repeat your worst answer.
2. Answer out loud, and record yourself. Write your final answer to each question in your own words. The written answers are what you hand in.
3. Use this structure: user and problem, why AI or not, approach, behavior in failure, metrics (product, model, guardrail), evals, cost and latency, risks, launch plan.
4. Write your career stories as STAR stories (Situation, Task, Action, Result with a number). Write one on each look back in Weeks 4, 8, 12, 16, 20 and 24. Cover a killed feature, a disagreement with a senior stakeholder, shipping when things were unclear, a failure and how you recovered, and a time you used data to change a decision. Week 9 adds one government project, written in product words.
5. Prepare a direct answer to "why AI PM, given your project-management background?" Start it with what you shipped and evaluated on this route.
6. Week 23 gives you a 45-minute timed requirements document. If you are interviewing, add one mock take-home after the route: a 3-hour product task, written up in 2 pages.
7. Week 28 adds a 45-minute timed build. Make a paste-and-clean screen for Bharat Privacy Guard in a free prototyping tool, and talk aloud as you work. Say what you will not ship, and test one failure case. Record it.

**Done when:** you have spoken at least four answers aloud, written your career stories, and recorded the timed build.

## Retro: review the 28 weeks {#retro}

**Week 28. Ships:** a one-page review and the next learning loop. **Time:** about 90 minutes.

This is the last week. Look back at what you did. Take what worked forward. Decide what comes next.

1. Read your ship log. Count what shipped, what slipped and what you cut.
2. Update the portfolio site with any metric that changed.
3. Write down what worked, and what you would change for the next 28 weeks.
4. Set the loop for after the route at 3 hours a week: 60 minutes of reading release notes; a monthly session that runs your capstone test set again on a new model and notes the difference; and the second pass on one Track A or Track B “Build it” each month.

**Done when:** the review is written and the next three Sundays are decided.

## Ship log: one line every Sunday {#ship-log}

Keep the log wherever you write every day. The easiest place is the Note field of the week on the plan. Your notepad, a private note or a `SHIPLOG.md` file also work. It looks like this:

```
2026-10-25  W1  Start here, the preface and book chapters 1-2. First three lines.
2026-11-15  W4  Ten test messages: the chat assistant got 8/10. Missed the phone number written in words.
```

A ten-minute week still gets a line. A missing line means a zero week.
