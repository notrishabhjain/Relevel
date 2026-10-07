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
  { n: 1, name: 'Month 1: Foundations', from: 1, to: 4, dates: '7 Oct – 3 Nov 2026', goal: 'Explain LLM cost, context and structured output, and have one working repo.' },
  { n: 2, name: 'Month 2: RAG and evals', from: 5, to: 9, dates: '4 Nov – 8 Dec 2026', goal: 'Project A published with a 100+ case eval set and before/after metrics. This is the most important month of the plan.' },
  { n: 3, name: 'Month 3: Agents and MCP', from: 10, to: 13, dates: '9 Dec 2026 – 5 Jan 2027', goal: 'Project B published: a working MCP server and an agent that asks before acting. W12 and W13 are light holiday weeks (about 6 hours each).' },
  { n: 4, name: 'Month 4: Multimodal, Indic AI, behavior specs', from: 14, to: 17, dates: '6 Jan – 2 Feb 2027', goal: 'Project C published with a measured error-rate improvement and a behavior spec.' },
  { n: 5, name: 'Month 5: Governance, economics, build vs buy', from: 18, to: 21, dates: '3 Feb – 2 Mar 2027', goal: 'Project D published: PRD, risk assessment, build-vs-buy memo, acceptance-testing template.' },
  { n: 6, name: 'Month 6: Portfolio and interviews', from: 22, to: 26, dates: '3 Mar – 6 Apr 2027', goal: 'Live portfolio site and 10+ mock interviews. No new topics.' }
];

/* [n, dates, topic, complexity, learn keys, ship, how ids, light?] */
const W = [
  [1, '7–13 Oct', 'Dev setup; how LLMs work (tokens, context window, temperature)', 'Low', ['academy_fluency', 'academy_limits', 'academy_api', 'gh_codespaces', 'gh_devcontainer'], 'Repo `rj-ai-pm-lab` with a devcontainer and a green GitHub Actions workflow', ['setup']],
  [2, '14–20 Oct', 'Prompting, structured outputs (JSON schema), tool use', 'Medium', ['claude_prompting', 'claude_structured', 'claude_tools', 'openai_structured', 'huyen'], 'Sentinel AI Bridge v2: transcript to JSON tasks, plus a CSV log of tokens, latency and cost per call', ['log-calls']],
  [3, '21–27 Oct', 'Eval basics: why evals come before metrics', 'Medium', ['hamel_evals', 'hamel_faq', 'claude_pricing', 'huyen'], '30 synthetic Hinglish/Hindi/English transcripts run across 2–3 models; cost, latency and accuracy table', ['compare-models']],
  [4, '28 Oct – 3 Nov', 'Reading real AI products critically', 'Low', ['lenny_market', 'cpgrams_explainer', 'cpgrams'], 'Teardown #1 published (an Indian AI product); Month 1 gate review', ['teardown', 'publish']],
  [5, '4–10 Nov', 'RAG: chunking, embeddings, hybrid search, reranking, citations', 'Medium', ['huyen', 'chroma', 'bge_m3', 'sbert', 'rank_bm25', 'gigw', 'dpdp_rules', 'india_ai_summary'], 'RAG over a public corpus (GIGW 3.0, DPDP Act and Rules, India AI Governance Guidelines) with citations', ['rag']],
  [6, '11–17 Nov', 'Test sets and LLM-as-judge', 'Medium', ['hamel_judge', 'hamel_field', 'hamel_hub'], '100+ test queries (English, Hindi, Hinglish, adversarial, out-of-scope); traces collected', ['golden-set']],
  [7, '18–24 Nov', 'Error analysis: label failures, then group them', 'High', ['hamel_faq', 'hamel_field', 'phoenix'], '100 labeled traces and a failure taxonomy with counts', ['error-analysis']],
  [8, '25 Nov – 1 Dec', 'Fixing the top failures; evals as a CI gate', 'High', ['dlai_eval_agents', 'shreya_validators', 'gh_actions', 'gh_secrets', 'promptfoo_gha'], 'Top 2 failures fixed; judge validated against your labels; eval workflow that fails a PR on regression', ['eval-gate']],
  [9, '2–8 Dec', 'Writing up evidence', 'Low', ['gh_pages', 'hf_spaces'], 'Project A published: eval report and short demo video; Month 2 gate review', ['publish', 'demo-video']],
  [10, '9–15 Dec', 'Agent patterns; MCP tools, resources and prompts', 'Medium', ['dlai_agentic', 'academy_mcp', 'mcp_build', 'mcp_python'], 'MCP server exposing the Sentinel task store (create, list, update)', ['mcp-server']],
  [11, '16–22 Dec', 'Advanced MCP, agent security, prompt injection', 'High', ['academy_mcp_adv', 'mcp_docs', 'cc_mcp', 'mcp_inspector'], 'Project B agent: transcript, extract tasks, propose actions via MCP, approval step, execute', ['agent-approval']],
  [12, '23–29 Dec', 'Evaluating agents step by step', 'Medium', ['dlai_agentic', 'dlai_eval_agents', 'phoenix'], '30 traced runs with a step-level eval (right tool, right arguments, approval needed?)', ['agent-evals'], true],
  [13, '30 Dec – 5 Jan', 'Writing the autonomy rules', 'Low', ['pair'], 'Project B published: autonomy doc (auto / confirm / never) and a 3-minute demo; Month 3 gate review', ['autonomy-doc', 'publish', 'demo-video'], true],
  [14, '6–12 Jan', 'OCR and LLM post-correction for Indic scripts; BHASHINI APIs', 'Medium', ['tessdata', 'bhashini', 'bhashini_api', 'sarvam_docs'], 'OCR pipeline with LLM post-correction and confidence flags on public-domain scans', ['ocr-correct']],
  [15, '13–19 Jan', 'Measuring OCR and speech quality (CER, WER); voice products', 'Medium', ['jiwer', 'dlai_catalog', 'sarvam_hf'], '50-page ground-truth set; CER before and after correction; cost per page', ['cer-measure']],
  [16, '20–26 Jan', 'Writing how an AI product should behave', 'Medium', ['pair', 'cpgrams_explainer', 'dpdp_rules'], 'AI behavior spec, 3–5 pages, for a bilingual citizen assistant', ['behavior-spec']],
  [17, '27 Jan – 2 Feb', 'Writing up evidence', 'Low', ['gh_pages'], 'Project C published with the behavior spec as a case study; Month 4 gate review', ['publish', 'demo-video']],
  [18, '3–9 Feb', "India's AI governance approach, DPDP Rules, EU AI Act timelines", 'Medium', ['india_ai_summary', 'india_ai_guide', 'dpdp_rules', 'dpdp_may27', 'eu_omnibus', 'cpgrams_explainer'], 'PRD draft for an AI grievance triage assistant (CPGRAMS-style)', ['prd']],
  [19, '10–16 Feb', 'Risk assessment; governing agents', 'Medium', ['nist_rmf', 'model_cards', 'eu_ai_act', 'dlai_catalog'], 'Risk assessment, model card, and a table mapping each risk to DPDP, India\'s guidelines and the EU AI Act', ['risk-model-card']],
  [20, '17–23 Feb', 'Unit economics, caching, model routing, build vs buy', 'High', ['huyen', 'claude_pricing', 'claude_caching', 'sarvam_hf', 'bhashini_api'], 'Build-vs-buy memo (frontier API vs Sarvam open-weight vs BHASHINI plus small LLM) and a cost model at three scales', ['build-buy-cost']],
  [21, '24 Feb – 2 Mar', 'Turning AI quality into contract terms', 'Medium', ['marp', 'gigw'], 'Project D published: acceptance-testing and eval-SLA template plus a 6-slide stakeholder deck; Month 5 gate review', ['acceptance-template', 'publish']],
  [22, '3–9 Mar', 'Presenting your work in 3 minutes', 'Low to Medium', ['gh_pages'], 'Live portfolio site with 4 project pages and a 3-minute demo video for each', ['portfolio-site', 'demo-video']],
  [23, '10–16 Mar', 'AI product-sense and eval-design interview answers', 'Medium', ['interview_bank', 'exponent_ps'], '3 mock interviews (product sense and evals) with written answers in your own words', ['mock-interviews']],
  [24, '17–23 Mar', 'Technical depth and live prototyping', 'High', ['academy_cc101', 'gh_codespaces'], '2 timed 45-minute prototypes built from scratch', ['prototype-drill']],
  [25, '24–30 Mar', 'Behavioral interviews and take-homes', 'Medium', ['interview_bank'], '8 STAR stories; 1 mock take-home; a prepared answer to "why AI PM, given your project-management background?"', ['mock-interviews']],
  [26, '31 Mar – 6 Apr', 'Reviewing the six months', 'Low', [], 'Ship-log review and the post-April 3-hours-a-week learning loop', ['retro']]
];

export const WEEKS = W.map(([n, dates, topic, cx, learn, ship, how, light]) => ({ n, dates, topic, cx, learn, ship, how, light: !!light }));

export const GATES = [
  { id: 'M1', date: '3 Nov 2026', pass: 'Repo with green CI; Sentinel v2 with cost/latency log; model comparison table; Teardown #1 published. Decide whether to buy the evals cohort.', cut: 'Teardown #1 can slip to W5 if the table is done' },
  { id: 'M2', date: '8 Dec 2026', pass: 'Project A published: 100+ case golden set, failure taxonomy, before/after metrics, eval workflow in CI.', cut: 'Reduce to 50 cases and one iteration, but publish' },
  { id: 'M3', date: '5 Jan 2027', pass: 'Project B published: MCP server, approval step, 30+ traced runs, autonomy doc. Decide whether to un-freeze one side project.', cut: 'Cut run count to 30; skip the demo video until Month 6' },
  { id: 'M4', date: '2 Feb 2027', pass: 'Project C published: CER before and after; behavior spec.', cut: 'Turn Project C into a written case study with a smaller sample' },
  { id: 'M5', date: '2 Mar 2027', pass: 'Project D published: PRD, risk table, build-vs-buy memo, acceptance-testing template.', cut: 'Cut the stakeholder deck; keep the PRD and memo' },
  { id: 'M6', date: '6 Apr 2027', pass: 'Portfolio site live with 4 project pages and demos; 10+ mock interviews completed.', cut: 'Do not cut; extend into April and May instead' }
];

export const RULES = [
  'One row per week. The row is your only learning to-do.',
  "Ship before you learn more. No next week's learning until this week's ship item exists as a link or commit.",
  'One course at a time. No new course, bootcamp or certificate until the current row ships.',
  'Frozen stack until W9: Codespaces, GitHub Actions, one LLM API, one eval approach.',
  'Side projects count only if they are in the plan. Sentinel and TaskMind feed Project B; the OCR pipeline feeds Project C. Everything else waits for the Month 3 gate.',
  'Parking lot, not action. New ideas go in the parking lot and are reviewed only at the monthly gate.',
  'Minimum viable week: three 45-minute sessions plus one commit. A floor week counts, a zero week does not.',
  'Publish at 80%. Time-box write-ups to 2 hours.',
  'Public ship log. Every Sunday: one README line and one LinkedIn post.',
  'Tell one person who will ask every Monday, what did you ship?'
];
