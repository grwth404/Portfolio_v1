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
	{ name: "JavaScript", icon: "skill-icons:javascript", category: "languages", since: 2017 },
	{ name: "SQL", icon: "vscode-icons:file-type-sql", category: "languages", since: 2017 },
	{ name: "TypeScript", icon: "skill-icons:typescript", category: "languages", since: 2018 },
	{ name: "Python", icon: "skill-icons:python-dark", category: "languages", since: 2019 },
	{ name: "Dart", icon: "skill-icons:dart-dark", category: "languages", since: 2021 },

	{ name: "React", icon: "skill-icons:react-dark", category: "frontend", since: 2018 },
	{ name: "Next.js", icon: "skill-icons:nextjs-dark", category: "frontend", since: 2020 },
	{ name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark", category: "frontend", since: 2021 },
	{ name: "Vue.js", icon: "skill-icons:vuejs-dark", category: "frontend", since: 2023 },

	{ name: "REST APIs", icon: "logos:swagger", category: "backend", since: 2017 },
	{ name: "Node.js", icon: "skill-icons:nodejs-dark", category: "backend", since: 2018 },
	{ name: "NestJS", icon: "skill-icons:nestjs-dark", category: "backend", since: 2021 },
	{ name: "FastAPI", icon: "skill-icons:fastapi", category: "backend", since: 2022 },

	{ name: "PostgreSQL", icon: "skill-icons:postgresql-dark", category: "databases", since: 2017 },
	{ name: "MongoDB", icon: "skill-icons:mongodb", category: "databases", since: 2018 },
	{ name: "Redis", icon: "skill-icons:redis-dark", category: "databases", since: 2019 },
	{ name: "Qdrant", icon: "logos:qdrant-icon", category: "databases", since: 2024 },

	{ name: "Docker", icon: "skill-icons:docker", category: "devops", since: 2017 },
	{ name: "AWS", icon: "skill-icons:aws-dark", category: "devops", since: 2018 },
	{ name: "GitHub Actions", icon: "skill-icons:githubactions-dark", category: "devops", since: 2019 },
	{ name: "Kubernetes", icon: "skill-icons:kubernetes", category: "devops", since: 2020 },
	{ name: "Terraform", icon: "skill-icons:terraform-dark", category: "devops", since: 2021 },

	{ name: "LLM APIs", icon: "logos:google-gemini-icon", category: "ai", since: 2023 },
	{ name: "Prompt Engineering", icon: "logos:claude-icon", category: "ai", since: 2023 },
	{ name: "RAG Search", icon: "simple-icons:perplexity", category: "ai", since: 2023 },
	{ name: "AI Agents", icon: "logos:openai-icon", category: "ai", since: 2024 },
	{ name: "MCP Servers", icon: "simple-icons:modelcontextprotocol", category: "ai", since: 2025 },

	{ name: "NumPy", icon: "devicon:numpy", category: "ml", since: 2020 },
	{ name: "Pandas", icon: "devicon:pandas", category: "ml", since: 2020 },
	{ name: "PyTorch", icon: "skill-icons:pytorch-dark", category: "ml", since: 2022 },
	{ name: "Hugging Face", icon: "logos:hugging-face-icon", category: "ml", since: 2023 },

	{ name: "Jest", icon: "skill-icons:jest", category: "testing", since: 2018 },
	{ name: "Pytest", icon: "devicon:pytest", category: "testing", since: 2021 },
	{ name: "Playwright", icon: "logos:playwright", category: "testing", since: 2023 },

	{ name: "OWASP", icon: "simple-icons:owasp", category: "security", since: 2018 },
	{ name: "OAuth 2.0", icon: "logos:oauth", category: "security", since: 2019 },
	{ name: "IAM", icon: "flat-color-icons:data-protection", category: "security", since: 2021 },

	{ name: "Git", icon: "skill-icons:git", category: "tools", since: 2017 },
	{ name: "Linux", icon: "skill-icons:linux-dark", category: "tools", since: 2017 },
	{ name: "Firebase", icon: "logos:firebase-icon", category: "tools", since: 2020 },
	{ name: "Grafana", icon: "skill-icons:grafana-dark", category: "tools", since: 2022 },

	{ name: "Scrum", icon: "flat-color-icons:collaboration", category: "agile", since: 2017 },
	{ name: "Code Review", icon: "flat-color-icons:inspection", category: "agile", since: 2017 },
	{ name: "CI/CD", icon: "flat-color-icons:flow-chart", category: "agile", since: 2018 },
	{ name: "TDD", icon: "flat-color-icons:ok", category: "agile", since: 2019 },
];
