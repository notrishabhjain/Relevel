/* Single source of truth for the Applied AI PM plan.

   The weekly plan, the curriculum phase tables and the shipping playbook all read
   from here, so a week's topic, links and "how to ship it" cannot differ between
   pages. plan/build.mjs fails the build if they do (see check() there).

   weeks[].learn   keys into RESOURCES (verified to load on 7 Oct 2026)
   weeks[].how     ids of recipes in plan/ship.md ("## Title {#id}") */

export const RESOURCES = {
  /* Claude Academy */
  academy_fluency: ['Claude Academy: AI Fluency', 'https://academy.claude.com/courses/ai-fluency-framework-foundations'],
  academy_limits: ['Claude Academy: AI capabilities and limitations', 'https://academy.claude.com/courses/ai-capabilities-and-limitations'],
  academy_api: ['Claude Academy: Building with the Claude API', 'https://academy.claude.com/courses/building-with-the-claude-api'],
  academy_mcp: ['Claude Academy: Introduction to MCP', 'https://academy.claude.com/courses/introduction-to-model-context-protocol'],
  academy_mcp_adv: ['Claude Academy: MCP advanced topics', 'https://academy.claude.com/courses/model-context-protocol-advanced-topics'],
  academy_cc101: ['Claude Academy: Claude Code 101', 'https://academy.claude.com/courses/claude-code-101'],
  /* Model provider docs */
  claude_prompting: ['Claude docs: prompt engineering', 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview'],
  claude_tools: ['Claude docs: tool use', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview'],
  claude_structured: ['Claude docs: structured outputs', 'https://platform.claude.com/docs/en/build-with-claude/structured-outputs'],
  claude_caching: ['Claude docs: prompt caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching'],
  claude_pricing: ['Claude docs: pricing', 'https://platform.claude.com/docs/en/about-claude/pricing'],
  openai_structured: ['OpenAI docs: structured outputs', 'https://developers.openai.com/api/docs/guides/structured-outputs'],
  openai_cookbook: ['OpenAI Cookbook', 'https://developers.openai.com/cookbook'],
  anthropic_cookbook: ['Anthropic Cookbook (GitHub)', 'https://github.com/anthropics/anthropic-cookbook'],
  /* Books, posts, courses */
  huyen: ['Chip Huyen, AI Engineering', 'https://huyenchip.com/books/'],
  hamel_hub: ['Hamel and Shreya: free evals material', 'https://hamelhusain.substack.com/p/ai-evals-for-engineers-and-product'],
  hamel_evals: ['Hamel: Your AI Product Needs Evals', 'https://hamel.dev/blog/posts/evals/'],
  hamel_faq: ['Hamel and Shreya: AI Evals FAQ', 'https://hamel.dev/blog/posts/evals-faq/'],
  hamel_judge: ['Hamel: LLM-as-a-Judge, a complete guide', 'https://hamel.dev/blog/posts/llm-judge/'],
  hamel_field: ['Hamel: A field guide to rapidly improving AI products', 'https://hamel.dev/blog/posts/field-guide/'],
  shreya_validators: ['Shankar et al.: Who Validates the Validators?', 'https://arxiv.org/abs/2404.12272'],
  lenny_market: ["Lenny's: state of the product job market", 'https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-ee9'],
  dlai_agentic: ['DeepLearning.AI: Agentic AI (Andrew Ng)', 'https://www.deeplearning.ai/courses/agentic-ai'],
  dlai_eval_agents: ['DeepLearning.AI: Evaluating AI Agents', 'https://learn.deeplearning.ai/courses/evaluating-ai-agents'],
  dlai_catalog: ['DeepLearning.AI short courses', 'https://learn.deeplearning.ai'],
  /* Google: Colab and Gemini */
  colab: ['Google Colab', 'https://colab.research.google.com/'],
  colab_secrets: ['Colab Secrets: store and read an API key (guide)', 'https://www.analyticsvidhya.com/blog/2024/12/api-keys-in-google-colab/'],
  ai_studio: ['Google AI Studio (get a Gemini API key, try prompts)', 'https://aistudio.google.com/'],
  gemini_quickstart: ['Gemini API quickstart', 'https://ai.google.dev/gemini-api/docs/quickstart'],
  gemini_structured: ['Gemini API: structured output', 'https://ai.google.dev/gemini-api/docs/structured-output'],
  gemini_functions: ['Gemini API: function calling', 'https://ai.google.dev/gemini-api/docs/function-calling'],
  gemini_pricing: ['Gemini API: models, free tier and pricing', 'https://ai.google.dev/gemini-api/docs/pricing'],
  gemini_cli: ['Gemini CLI (GitHub)', 'https://github.com/google-gemini/gemini-cli'],
  gemini_cli_mcp: ['Gemini CLI: MCP servers', 'https://geminicli.com/docs/tools/mcp-server/'],
  /* Tooling */
  gh_codespaces: ['GitHub Codespaces docs', 'https://docs.github.com/en/codespaces'],
  gh_devcontainer: ['Dev containers (GitHub Docs)', 'https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers'],
  gh_cs_billing: ['Codespaces billing and free quota', 'https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces'],
  gh_actions: ['GitHub Actions quickstart', 'https://docs.github.com/en/actions/writing-workflows/quickstart'],
  gh_secrets: ['Using secrets in GitHub Actions', 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions'],
  gh_pages: ['GitHub Pages quickstart', 'https://docs.github.com/en/pages/quickstart'],
  phoenix: ['Arize Phoenix docs', 'https://arize.com/docs/phoenix'],
  promptfoo_gha: ['promptfoo: evals in GitHub Actions', 'https://www.promptfoo.dev/docs/integrations/github-action/'],
  chroma: ['Chroma docs', 'https://docs.trychroma.com'],
  sbert: ['Sentence Transformers docs', 'https://www.sbert.net'],
  bge_m3: ['BGE-M3 multilingual embeddings', 'https://huggingface.co/BAAI/bge-m3'],
  rank_bm25: ['rank_bm25 (keyword search)', 'https://github.com/dorianbrown/rank_bm25'],
  hf_spaces: ['Hugging Face Spaces', 'https://huggingface.co/docs/hub/spaces-overview'],
  marp: ['Marp (slides from Markdown)', 'https://marp.app'],
  /* MCP */
  mcp_docs: ['Model Context Protocol docs', 'https://modelcontextprotocol.io'],
  mcp_build: ['MCP: build a server', 'https://modelcontextprotocol.io/docs/develop/build-server'],
  mcp_python: ['MCP Python SDK', 'https://github.com/modelcontextprotocol/python-sdk'],
  mcp_inspector: ['MCP Inspector', 'https://github.com/modelcontextprotocol/inspector'],
  cc_mcp: ['Claude Code: connect MCP servers', 'https://code.claude.com/docs/en/mcp'],
  /* Indic and OCR */
  bhashini: ['BHASHINI', 'https://bhashini.gov.in'],
  bhashini_api: ['BHASHINI API docs', 'https://bhashini.gitbook.io/bhashini-apis'],
  sarvam_docs: ['Sarvam API docs', 'https://docs.sarvam.ai'],
  sarvam_hf: ['Sarvam models on Hugging Face', 'https://huggingface.co/sarvamai'],
  tessdata: ['Tesseract trained data (hin, and others)', 'https://github.com/tesseract-ocr/tessdata_best'],
  jiwer: ['jiwer: WER and CER in Python', 'https://github.com/jitsi/jiwer'],
  /* Policy and governance */
  pair: ['Google PAIR People + AI Guidebook', 'https://pair.withgoogle.com/guidebook-v2/'],
  model_cards: ['Mitchell et al.: Model Cards for Model Reporting', 'https://arxiv.org/abs/1810.03993'],
  nist_rmf: ['NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
  india_ai_summary: ['DSCI: summary of the India AI Governance Guidelines', 'https://www.dsci.in/resource/content/summary-india-ai-governance-guidelines'],
  india_ai_guide: ['CASRAI: India AI Governance Guidelines guide', 'https://casrai.org/guides/india-ai-governance-guidelines'],
  dpdp_rules: ['DPDP Rules 2025 explainer (timeline)', 'https://lexplosion.in/meity-notifies-digital-personal-data-protection-rules-2025/'],
  dpdp_may27: ['DPDP compliance guide: what is due by May 2027', 'https://www.privybyidfy.com/blog/dpdp-compliance-guide-2026-what-indian-enterprises-must-do-before-may-2027'],
  eu_ai_act: ['EU AI Act: explorer and analysis', 'https://artificialintelligenceact.eu'],
  eu_omnibus: ['Gibson Dunn: EU AI Act Digital Omnibus', 'https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/'],
  gigw: ['GIGW 3.0 (guidelines for government websites and apps)', 'https://guidelines.india.gov.in'],
  cpgrams: ['CPGRAMS portal', 'https://pgportal.gov.in'],
  cpgrams_explainer: ['Drishti: CPGRAMS explained', 'https://www.drishtiias.com/daily-updates/daily-news-analysis/centralised-public-grievance-redress-and-monitoring-system-cpgrams'],
  /* Interviews */
  interview_bank: ['AI PM interview bank (GitHub)', 'https://github.com/landedjobs/ai-pm-interview-prep'],
  exponent_ps: ['Exponent: product sense interviews', 'https://www.tryexponent.com/blog/product-sense-interview']
};

export const MONTHS = [
  { n: 1, name: 'Month 1: Foundations', from: 1, to: 4, dates: '7 Oct – 3 Nov 2026', goal: 'You can explain LLM cost, context and structured output in plain words, and you have one working repo.' },
  { n: 2, name: 'Month 2: RAG and evals', from: 5, to: 9, dates: '4 Nov – 8 Dec 2026', goal: 'Project A is published, with a test set of 100+ cases and before/after numbers. This is the most important month of the plan.' },
  { n: 3, name: 'Month 3: Agents and MCP', from: 10, to: 13, dates: '9 Dec 2026 – 5 Jan 2027', goal: 'Project B is published: a working MCP server, and an agent that asks before it acts. W12 and W13 are light holiday weeks (about 6 hours each).' },
  { n: 4, name: 'Month 4: Multimodal, Indic AI, behavior specs', from: 14, to: 17, dates: '6 Jan – 2 Feb 2027', goal: 'Project C is published, with a measured drop in error rate and a behavior spec.' },
  { n: 5, name: 'Month 5: Governance, economics, build vs buy', from: 18, to: 21, dates: '3 Feb – 2 Mar 2027', goal: 'Project D is published: a PRD, a risk assessment, a build-vs-buy memo and an acceptance-testing template.' },
  { n: 6, name: 'Month 6: Portfolio and interviews', from: 22, to: 26, dates: '3 Mar – 6 Apr 2027', goal: 'Your portfolio site is live and you have done 10+ mock interviews. No new topics this month.' }
];

/* [n, dates, topic, complexity, learn keys, ship, how ids, light?] */
const W = [
  [1, '7–13 Oct', 'Set up your tools (Codespaces for the repo, Colab for notebooks), and learn how LLMs work: tokens, the context window and temperature', 'Low', ['academy_fluency', 'academy_limits', 'academy_api', 'gh_codespaces', 'gh_devcontainer', 'colab', 'ai_studio'], 'A repo called `rj-ai-pm-lab` with a devcontainer and a green GitHub Actions workflow, and one model call that works from both Codespaces and Colab', ['tools', 'setup']],
  [2, '14–20 Oct', 'Prompting, structured outputs (JSON schema) and tool use', 'Medium', ['claude_prompting', 'claude_structured', 'claude_tools', 'gemini_structured', 'openai_structured', 'huyen'], 'Sentinel AI Bridge v2, which turns a transcript into JSON tasks, plus a CSV log of tokens, latency and cost for every call', ['log-calls']],
  [3, '21–27 Oct', 'Eval basics: why you build evals before you pick metrics', 'Medium', ['hamel_evals', 'hamel_faq', 'claude_pricing', 'gemini_pricing', 'huyen'], '30 made-up Hinglish, Hindi and English transcripts, run through 2–3 models, with a table of cost, latency and accuracy', ['compare-models']],
  [4, '28 Oct – 3 Nov', 'Reading real AI products with a critical eye', 'Low', ['lenny_market', 'cpgrams_explainer', 'cpgrams'], 'Teardown #1 published (of an Indian AI product), and the Month 1 gate review done', ['teardown', 'publish']],
  [5, '4–10 Nov', 'RAG: chunking, embeddings, hybrid search, reranking and citations', 'Medium', ['huyen', 'chroma', 'bge_m3', 'sbert', 'rank_bm25', 'colab', 'gigw', 'dpdp_rules', 'india_ai_summary'], 'A RAG system over a public set of documents (GIGW 3.0, the DPDP Act and Rules, and the India AI Governance Guidelines), with citations', ['rag']],
  [6, '11–17 Nov', 'Test sets, and using an LLM as a judge', 'Medium', ['hamel_judge', 'hamel_field', 'hamel_hub'], '100+ test queries (English, Hindi, Hinglish, adversarial and out-of-scope), with the traces collected', ['golden-set']],
  [7, '18–24 Nov', 'Error analysis: label the failures, then group them', 'High', ['hamel_faq', 'hamel_field', 'phoenix', 'colab'], '100 labeled traces, and a failure taxonomy with a count for each type', ['error-analysis']],
  [8, '25 Nov – 1 Dec', 'Fix the top failures, and make evals a gate in CI', 'High', ['dlai_eval_agents', 'shreya_validators', 'gh_actions', 'gh_secrets', 'promptfoo_gha'], 'The top 2 failures fixed, the judge checked against your own labels, and an eval workflow that fails a PR when quality drops', ['eval-gate']],
  [9, '2–8 Dec', 'Writing up your evidence', 'Low', ['gh_pages', 'hf_spaces'], 'Project A published, with an eval report and a short demo video, and the Month 2 gate review done', ['publish', 'demo-video']],
  [10, '9–15 Dec', 'Agent patterns, and MCP tools, resources and prompts', 'Medium', ['dlai_agentic', 'academy_mcp', 'mcp_build', 'mcp_python', 'gemini_cli_mcp'], 'An MCP server that exposes the Sentinel task store (create, list, update)', ['mcp-server']],
  [11, '16–22 Dec', 'Advanced MCP, agent security and prompt injection', 'High', ['academy_mcp_adv', 'mcp_docs', 'cc_mcp', 'mcp_inspector', 'gemini_functions'], 'The Project B agent: it reads a transcript, extracts tasks, proposes actions through MCP, waits for approval, then executes', ['agent-approval']],
  [12, '23–29 Dec', 'Evaluating agents, one step at a time', 'Medium', ['dlai_agentic', 'dlai_eval_agents', 'phoenix'], '30 traced runs, checked step by step: did it pick the right tool, use the right arguments, and ask for approval when it should?', ['agent-evals'], true],
  [13, '30 Dec – 5 Jan', 'Writing the autonomy rules', 'Low', ['pair'], 'Project B published, with an autonomy doc (auto / confirm / never) and a 3-minute demo, and the Month 3 gate review done', ['autonomy-doc', 'publish', 'demo-video'], true],
  [14, '6–12 Jan', 'OCR for Indic scripts, fixing its mistakes with an LLM, and the BHASHINI APIs', 'Medium', ['tessdata', 'colab', 'bhashini', 'bhashini_api', 'sarvam_docs'], 'An OCR pipeline that uses an LLM to correct its output and flags low-confidence text, tested on public-domain scans', ['ocr-correct']],
  [15, '13–19 Jan', 'Measuring OCR and speech quality (CER and WER), and voice products', 'Medium', ['jiwer', 'dlai_catalog', 'sarvam_hf'], 'A ground-truth set of 50 pages, the CER before and after correction, and the cost per page', ['cer-measure']],
  [16, '20–26 Jan', 'Writing down how an AI product should behave', 'Medium', ['pair', 'cpgrams_explainer', 'dpdp_rules'], 'An AI behavior spec of 3–5 pages, for a bilingual citizen assistant', ['behavior-spec']],
  [17, '27 Jan – 2 Feb', 'Writing up your evidence', 'Low', ['gh_pages'], 'Project C published, with the behavior spec as a case study, and the Month 4 gate review done', ['publish', 'demo-video']],
  [18, '3–9 Feb', "India's approach to AI governance, the DPDP Rules, and the EU AI Act timelines", 'Medium', ['india_ai_summary', 'india_ai_guide', 'dpdp_rules', 'dpdp_may27', 'eu_omnibus', 'cpgrams_explainer'], 'A draft PRD for an AI assistant that sorts grievances (CPGRAMS-style)', ['prd']],
  [19, '10–16 Feb', 'Risk assessment, and governing agents', 'Medium', ['nist_rmf', 'model_cards', 'eu_ai_act', 'dlai_catalog'], 'A risk assessment, a model card, and a table that maps each risk to the DPDP rules, India\'s guidelines and the EU AI Act', ['risk-model-card']],
  [20, '17–23 Feb', 'Unit economics, caching, model routing, and build vs buy', 'High', ['huyen', 'claude_pricing', 'claude_caching', 'sarvam_hf', 'bhashini_api'], 'A build-vs-buy memo (frontier API vs Sarvam open-weight vs BHASHINI plus a small LLM), and a cost model at three scales', ['build-buy-cost']],
  [21, '24 Feb – 2 Mar', 'Turning AI quality into contract terms', 'Medium', ['marp', 'gigw'], 'Project D published: an acceptance-testing and eval-SLA template, plus a 6-slide stakeholder deck. Month 5 gate review done', ['acceptance-template', 'publish']],
  [22, '3–9 Mar', 'Presenting your work in 3 minutes', 'Low to Medium', ['gh_pages'], 'A live portfolio site with 4 project pages, and a 3-minute demo video for each', ['portfolio-site', 'demo-video']],
  [23, '10–16 Mar', 'Answering AI product-sense and eval-design interview questions', 'Medium', ['interview_bank', 'exponent_ps'], '3 mock interviews (product sense and evals), with written answers in your own words', ['mock-interviews']],
  [24, '17–23 Mar', 'Technical depth and live prototyping', 'High', ['academy_cc101', 'gemini_cli', 'gh_codespaces'], '2 timed 45-minute prototypes, each built from scratch', ['prototype-drill']],
  [25, '24–30 Mar', 'Behavioral interviews and take-homes', 'Medium', ['interview_bank'], '8 STAR stories, 1 mock take-home, and a prepared answer to "why AI PM, given your project-management background?"', ['mock-interviews']],
  [26, '31 Mar – 6 Apr', 'Looking back over the six months', 'Low', [], 'A review of your ship log, and a plan for the learning loop after April (3 hours a week)', ['retro']]
];

export const WEEKS = W.map(([n, dates, topic, cx, learn, ship, how, light]) => ({ n, dates, topic, cx, learn, ship, how, light: !!light }));

export const GATES = [
  { id: 'M1', date: '3 Nov 2026', pass: 'A repo with green CI, Sentinel v2 with its cost and latency log, the model comparison table, and Teardown #1 published. Also decide whether to buy the evals cohort.', cut: 'Teardown #1 can slip to W5 if the table is done' },
  { id: 'M2', date: '8 Dec 2026', pass: 'Project A is published: a golden set of 100+ cases, a failure taxonomy, before/after metrics, and an eval workflow in CI.', cut: 'Reduce to 50 cases and one round of fixes, but still publish' },
  { id: 'M3', date: '5 Jan 2027', pass: 'Project B is published: the MCP server, the approval step, 30+ traced runs and the autonomy doc. Also decide whether to un-freeze one side project.', cut: 'Cut the run count to 30, and skip the demo video until Month 6' },
  { id: 'M4', date: '2 Feb 2027', pass: 'Project C is published: CER before and after, and the behavior spec.', cut: 'Turn Project C into a written case study with a smaller sample' },
  { id: 'M5', date: '2 Mar 2027', pass: 'Project D is published: the PRD, the risk table, the build-vs-buy memo and the acceptance-testing template.', cut: 'Cut the stakeholder deck, and keep the PRD and the memo' },
  { id: 'M6', date: '6 Apr 2027', pass: 'The portfolio site is live with 4 project pages and demos, and you have completed 10+ mock interviews.', cut: 'Do not cut this one. Extend into April and May instead' }
];

export const RULES = [
  'One row per week. The row is your only learning to-do.',
  "Ship before you learn more. Don't start next week's learning until this week's ship item exists as a link or a commit.",
  'One course at a time. Start no new course, bootcamp or certificate until the current row ships.',
  'Keep your stack frozen until W9: Codespaces, GitHub Actions, one LLM API and one eval approach.',
  'Side projects count only if they are in the plan. Sentinel and TaskMind feed Project B, and the OCR pipeline feeds Project C. Everything else waits for the Month 3 gate.',
  'Parking lot, not action. New ideas go in the parking lot, and you review them only at the monthly gate.',
  'Minimum viable week: three 45-minute sessions plus one commit. A floor week counts. A zero week does not.',
  'Publish at 80%. Time-box each write-up to 2 hours.',
  'Keep a public ship log. Every Sunday, write one README line and one LinkedIn post.',
  'Tell one person who will ask you every Monday: what did you ship?'
];
