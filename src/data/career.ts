import type { Career } from "./types";

export const careers: Career[] = [
	{
		company: "Accenture",
		initials: "AC",
		location: "London, UK",
		employment: "Full-time",
		arrangement: "Hybrid",
		summary:
			"Leading delivery of enterprise AI and cloud-native platforms for global clients — from architecture through production deployment.",
		highlights: [
			"AI/ML platform engineering",
			"Cloud migration & DevOps",
			"Cross-functional client delivery",
		],
		stack: ["TypeScript", "Python", "AWS", "Docker", "Kubernetes", "LLM APIs"],
		roles: [
			{
				title: "Senior Software Engineer",
				start: "2022-01",
				end: null,
			},
		],
		website: "https://www.accenture.com",
		photo: "/career/accenture.jpg",
	},
	{
		company: "CGI",
		initials: "CG",
		location: "London, UK",
		employment: "Full-time",
		arrangement: "Hybrid",
		summary:
			"Built and maintained mission-critical systems for public sector and enterprise clients, with a focus on backend services and integration.",
		highlights: [
			"Enterprise backend systems",
			"API & integration layers",
			"Agile delivery at scale",
		],
		stack: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Docker", "GitHub Actions"],
		roles: [
			{
				title: "Software Engineer",
				start: "2019-01",
				end: "2022-01",
			},
		],
		website: "https://www.cgi.com",
		photo: "/career/cgi.jpg",
	},
	{
		company: "Endava",
		initials: "EN",
		location: "London, UK",
		employment: "Full-time",
		arrangement: "On-site",
		summary:
			"Started my professional journey shipping web applications and learning modern engineering practices alongside senior mentors on fintech projects.",
		highlights: [
			"Full-stack web development",
			"Fintech & digital products",
			"Test-driven development",
		],
		stack: ["JavaScript", "React", "Node.js", "PostgreSQL", "Jest", "Docker"],
		roles: [
			{
				title: "Junior Software Developer",
				start: "2016-01",
				end: "2019-01",
			},
		],
		website: "https://www.endava.com",
		photo: "/career/endava.jpg",
	},
];
