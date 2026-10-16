import type { Skill, SkillCategory } from "./types";

/** First professional year. Timeline axis and bar math start here. */
export const EXPERIENCE_START = 2017;

export const skillCategories: SkillCategory[] = [
	{ id: "languages", label: "Languages" },
	{ id: "frontend", label: "Frontend" },
	{ id: "backend", label: "Backend" },
	{ id: "databases", label: "Databases" },
	{ id: "devops", label: "DevOps" },
	{ id: "ai", label: "AI & LLM" },
	{ id: "ml", label: "ML & Data" },
	{ id: "testing", label: "Testing" },
	{ id: "security", label: "Security" },
	{ id: "tools", label: "Tools" },
	{ id: "agile", label: "Agile" },
];

export const skills: Skill[] = [
	{ name: "JavaScript", abbr: "JS", category: "languages", since: 2017 },
	{ name: "SQL", abbr: "SQ", category: "languages", since: 2017 },
	{ name: "TypeScript", abbr: "TS", category: "languages", since: 2018 },
	{ name: "Python", abbr: "PY", category: "languages", since: 2019 },
	{ name: "Dart", abbr: "DA", category: "languages", since: 2021 },

	{ name: "React", abbr: "RC", category: "frontend", since: 2018 },
	{ name: "Next.js", abbr: "NX", category: "frontend", since: 2020 },
	{ name: "Tailwind CSS", abbr: "TW", category: "frontend", since: 2021 },
	{ name: "Vue.js", abbr: "VU", category: "frontend", since: 2023 },

	{ name: "REST APIs", abbr: "RA", category: "backend", since: 2017 },
	{ name: "Node.js", abbr: "NO", category: "backend", since: 2018 },
	{ name: "NestJS", abbr: "NE", category: "backend", since: 2021 },
	{ name: "FastAPI", abbr: "FA", category: "backend", since: 2022 },

	{ name: "PostgreSQL", abbr: "PO", category: "databases", since: 2017 },
	{ name: "MongoDB", abbr: "MO", category: "databases", since: 2018 },
	{ name: "Redis", abbr: "RE", category: "databases", since: 2019 },
	{ name: "Qdrant", abbr: "QD", category: "databases", since: 2024 },

	{ name: "Docker", abbr: "DO", category: "devops", since: 2017 },
	{ name: "AWS", abbr: "AW", category: "devops", since: 2018 },
	{ name: "GitHub Actions", abbr: "GA", category: "devops", since: 2019 },
	{ name: "Kubernetes", abbr: "KU", category: "devops", since: 2020 },
	{ name: "Terraform", abbr: "TE", category: "devops", since: 2021 },

	{ name: "LLM APIs", abbr: "LA", category: "ai", since: 2023 },
	{ name: "Prompt Engineering", abbr: "PE", category: "ai", since: 2023 },
	{ name: "RAG Search", abbr: "RS", category: "ai", since: 2023 },
	{ name: "AI Agents", abbr: "AA", category: "ai", since: 2024 },
	{ name: "MCP Servers", abbr: "MS", category: "ai", since: 2025 },

	{ name: "NumPy", abbr: "NP", category: "ml", since: 2020 },
	{ name: "Pandas", abbr: "PD", category: "ml", since: 2020 },
	{ name: "PyTorch", abbr: "PT", category: "ml", since: 2022 },
	{ name: "Hugging Face", abbr: "HF", category: "ml", since: 2023 },

	{ name: "Jest", abbr: "JE", category: "testing", since: 2018 },
	{ name: "Pytest", abbr: "PQ", category: "testing", since: 2021 },
	{ name: "Playwright", abbr: "PW", category: "testing", since: 2023 },

	{ name: "OWASP", abbr: "OW", category: "security", since: 2018 },
	{ name: "OAuth 2.0", abbr: "OA", category: "security", since: 2019 },
	{ name: "IAM", abbr: "IA", category: "security", since: 2021 },

	{ name: "Git", abbr: "GT", category: "tools", since: 2017 },
	{ name: "Linux", abbr: "LX", category: "tools", since: 2017 },
	{ name: "Firebase", abbr: "FB", category: "tools", since: 2020 },
	{ name: "Grafana", abbr: "GR", category: "tools", since: 2022 },

	{ name: "Scrum", abbr: "SC", category: "agile", since: 2017 },
	{ name: "Code Review", abbr: "CR", category: "agile", since: 2017 },
	{ name: "CI/CD", abbr: "CD", category: "agile", since: 2018 },
	{ name: "TDD", abbr: "TD", category: "agile", since: 2019 },
];
