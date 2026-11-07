/* The plan's data. Since 21 October 2026 the plan IS the course: its weeks
   come from the route (src/data/route.mjs), the same list the playbook, the
   book and the 12:00 reminder follow. Nothing here repeats a week's contents.

   What this file adds on top of the route:
     FURTHER   optional outside reading for a week, for going deeper (keys into RESOURCES)
     GATES     the monthly review, one per month
     RULES     the rules that keep the plan from drifting
   weeks[].how are ids of recipes in plan/ship.md ("## Title {#id}"). */
import { WEEKS as ROUTE_WEEKS, MONTHS as ROUTE_MONTHS, START } from '../src/data/route.mjs';

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

/* Going further, by week. Optional: the course is the plan, these are for a
   week with spare energy. */
export const FURTHER = {
  5: ['academy_fluency', 'academy_limits'],
  6: ['academy_api', 'ai_studio'],
  7: ['claude_prompting'],
  8: ['gemini_structured'],
  10: ['sbert'],
  11: ['hamel_evals'],
  12: ['hamel_field', 'claude_structured', 'openai_structured'],
  13: ['claude_caching'],
  14: ['rank_bm25', 'bge_m3'],
  15: ['hamel_judge', 'shreya_validators'],
  16: ['claude_pricing', 'dpdp_rules'],
  17: ['india_ai_summary', 'nist_rmf', 'model_cards'],
  18: ['pair'],
  19: ['gh_actions'],
  20: ['huyen'],
  21: ['dlai_agentic', 'academy_mcp', 'mcp_docs'],
  22: ['dlai_eval_agents', 'phoenix', 'promptfoo_gha'],
  23: ['eu_ai_act', 'india_ai_guide'],
  25: ['gh_pages', 'hf_spaces'],
  26: ['interview_bank', 'exponent_ps', 'lenny_market']
};

export { START };
export const MONTHS = ROUTE_MONTHS;
export const WEEKS = ROUTE_WEEKS.map(w => ({ ...w, further: FURTHER[w.n] || [] }));

export const GATES = [
  { id: 'M1', month: 1, pass: 'The first four weeks ticked, or nearly: the book’s first seven chapters read, and A1 to A7 done on a first pass right after each one.', cut: 'If you missed days, do not catch up in one go. Carry on from the first open step and let the dates slide.' },
  { id: 'M2', month: 2, pass: 'A model connected, your first model call costed, a system prompt tested, your first answer key, and a sorter with a score.', cut: 'Never cut the first model call. If time is short, keep the answer key and do the summary chapter on a first pass.' },
  { id: 'M3', month: 3, pass: 'Search by words and by meaning compared on a scoreboard, version 0 of the findings page published with a link, and an extractor that says “not sure”.', cut: 'Publish the findings page with whatever numbers you have. An honest short page beats a perfect missing one.' },
  { id: 'M4', month: 4, pass: 'The attack on your own tool, a checked automatic marker, a cost model, the system card, the requirements and the build-or-buy call.', cut: 'Do the chapters on a first pass and keep one hands-on result per week.' },
  { id: 'M5', month: 5, pass: 'Your model choice with a back-up, the tool access policy, the release gate, the risk register and the decision pack.', cut: 'If time is short, keep the release gate and the risk register; the others can be one page each.' },
  { id: 'M6', month: 6, pass: 'Bharat Privacy Guard shipped with its findings document and demo, a portfolio page, and three practice interviews.', cut: 'Do not cut this one. Move it into May rather than skip it.' }
].map(g => ({ ...g, date: ROUTE_MONTHS[g.month - 1].dates.split(' – ')[1] }));

export const RULES = [
  'One route. The playbook, the book, this plan and the 12:00 reminder follow the same steps in the same order. If two of them ever disagree, the route page in the playbook wins, and that is a bug to report.',
  'Story first, then the chapter. Read a chapter’s story in the book before you do the chapter in the playbook.',
  'Ten minutes is a real day. On a bad day do one page and tick it. A small day counts; a zero day does not.',
  'Never miss twice. One missed day is life. Two in a row is a new habit.',
  'Behind is fine. Carry on from the first open step; the dates are a guide, not a judge. Never skip a step to catch up.',
  'First pass now, the long build later. The “Build it” sections in Track A and Track B are optional on the route. Write “later” next to them and move on.',
  'Parking lot, not action. New courses, tools and side projects go in the parking lot and wait for the monthly review.',
  'Friday look back. Three lines in your notepad every week: what made sense, what didn’t, one question.'
];
