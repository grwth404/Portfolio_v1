import type { Project } from "./types";

export const categories = [
	"All",
	"AI",
	"Web",
	"Mobile",
	"Web3",
] as const;

export const projects: Project[] = [
	{
		title: "Abev.ai — AI Social Media Management",
		category: "AI",
		date: "Sep 2025 — Feb 2026",
		description:
			"Simplifies content creation, scheduling, and analytics across multiple platforms. Integrates OpenAI APIs for automated, personalized content generation at scale.",
		techs: ["Next.js", "React.js", "NestJS", "PostgreSQL", "Strapi", "Redux", "OpenAI"],
		demo: "https://www.abev.ai/en",
		image: "/projects/abev.png",
		caseStudy: true,
	},
	{
		title: "Asify — AI Marketing Platform",
		category: "AI",
		date: "Sep 2025 — Feb 2026",
		description:
			"Full Stack Developer & AI engineer building agentic chat APIs with LangChain. Vue.js dashboard, NestJS backend, PostgreSQL, Docker, and CI/CD pipelines.",
		techs: ["Vue.js", "Nest.js", "PostgreSQL", "Tailwind CSS", "LangChain", "Docker"],
		demo: "https://app-sbx.aisfy.io",
		image: "/projects/asify.png",
		featured: true,
	},
	{
		title: "AI Voice Chatbot",
		category: "AI",
		date: "Sep 2025 — Feb 2026",
		description:
			"Implemented advanced algorithms for TTS and STT to achieve human-like voice quality and accuracy.",
		techs: ["Speech Synthesis", "API Integration", "AI", "Python", "Chatbot"],
		demo: "https://smart.sista.ai",
		image: "/projects/voice.png",
	},
	{
		title: "Mem0.ai - MCP for Memorization",
		category: "AI",
		date: "Sep 2025 — Feb 2026",
		description:
			"Mem0 remembers user preferences, adapts to individual needs, and continuously improves over time.",
		techs: ["LangFlow", "Next.js", "AWS", "Vercel"],
		demo: "https://mem0.ai",
		image: "/projects/mem0.png",
		openSource: true,
	},
	{
		title: "Tesla Website",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"An interactive dashboard for financial data visualization, portfolio management, and investment tracking with real-time updates.",
		techs: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Express.js"],
		demo: "https://www.tesla.com",
	},
	{
		title: "Thealtmanbrothers - Real Estate",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"The Altman Brothers is a real estate company that provides a wide range of services to their clients.",
		techs: ["React.js", "Next.js", "TailwindCSS", "Hubspot"],
		demo: "https://www.thealtmanbrothers.com",
		image: "/projects/altman.png",
	},
	{
		title: "ATV and Buggy — Desert Ride Booking",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Connects tourists with registered desert buggy companies. React frontend, Firebase/Firestore backend, Terraform infrastructure, Docker, and Grafana monitoring on GCP.",
		techs: ["React.js", "Node.js", "TailwindCSS", "Firebase", "Firestore", "Terraform"],
		demo: "https://www.atvandbuggy.com",
		image: "/projects/atv.png",
	},
	{
		title: "VOPA — Municipalities & Care Providers",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Built with Next.js and NestJS. Containerized with Docker, deployed on Kubernetes via Proxmox, with Grafana dashboards and CI/CD via GitHub Actions and Jenkins.",
		techs: ["Next.js", "NestJS", "PostgreSQL", "Material UI", "Kubernetes", "Grafana"],
		demo: "https://www.atvandbuggy.com",
		image: "/projects/atv.png",
	},
	{
		title: "Car Rental & Lease — Avis.sk / Rentcarnow.cz",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Multi-brand rental management supporting Avis.sk, Rentcarnow.cz, and Avislease.sk with Camasys fleet integration, Google Maps, and Firebase notifications.",
		techs: ["React.js", "Next.js", "Node.js", "Strapi", "Material UI", "Bootstrap"],
		demo: "https://www.avis.sk",
		image: "/projects/avis.png",
		caseStudy: true,
	},
	{
		title: "Justshare Media",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Just Share Media provides customizable videos for home services businesses, offering new content each month. Subscribers can personalize videos with branding and ensure regional exclusivity, making video marketing affordable​",
		techs: ["React.js", "Node.js", "AWS"],
		demo: "https://www.justsharemedia.com",
		image: "/projects/justshare.png",
		featured: true,
	},
	{
		title: "Shopify Store",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"This is a popular template I use for my clients. I can recreate this store with your colors, font, images, branding, etc",
		techs: ["React.js", "Next.js", "TailwindCSS", "Shopify", "Shopify Theme"],
		demo: "https://transport-store.myshopify.com",
	},
	{
		title: "Browcode",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Brow Code, founded by Melanie Marris in 2017, offers innovative brow styling products, including At-Home Styling Kits, and is distributed in over 150,000 salons ",
		techs: ["Shopify"],
		demo: "https://www.browcode.au",
		image: "/projects/browcode.png",
	},
	{
		title: "E-Commerce Platform",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"As a full-stack developer, I've meticulously crafted this premium WordPress WooCommerce website to deliver an exceptional shopping experience",
		techs: ["Ecommerce", "Bootstrap", "WordPress", "JavaScript", "Next.js"],
		demo: "https://wovenbyrd.com",
	},
	{
		title: "Learning Management System",
		category: "Web",
		date: "Sep 2025 — Feb 2026",
		description:
			"Developed a comprehensive Learning Management System (LMS) using Next.js and TypeScript to deliver a seamless and scalable platform.",
		techs: ["Next.js", "React", "TypeScript", "NestJS", "Redux"],
		demo: "https://www.kitahub.io/",
		image: "/projects/kita.png",
	},
	{
		title: "FlirtBox",
		category: "Mobile",
		date: "Sep 2025 — Feb 2026",
		description:
			"Flirt Box is a matchmaking app that combines audio rooms and live streams, offering a unique platform for real-time audience interaction through live audio.",
		techs: ["Flutter", "React Native", "Dart", "Firebase", "PostgreSQL"],
		demo: "https://apkpure.com/flirtbox/kg.megacom.flirtbox/download/1.0.35",
	},
	{
		title: "RAE Engineering - Web3",
		category: "Web3",
		date: "Sep 2025 — Feb 2026",
		description:
			"At RAE Engineering, our focus is on determining and managing the integrity of pressure equipment, pressure piping, tanks and related mechanical equipment.",
		techs: ["Web3", "Next.js", "TypeScript", "TailwindCSS", "ExpressJS"],
		demo: "https://raeengineering.ca/",
		image: "/projects/rae.png",
		featured: true,
	},
	{
		title: "Cash Coin Web3 Wallet",
		category: "Web3",
		date: "Sep 2023 — Feb 2024",
		description:
			"Full-stack Web3 wallet with custom client requirements. Built using Flutter and Python, deployed on cPanel for production use.",
		techs: ["Web3", "Python", "Flutter"],
		demo: "https://www.cashcoin.pro",
		openSource: true,
	},
	{
		title: "GAMMA",
		category: "Web3",
		date: "Sep 2025 — Feb 2026",
		description:
			"Gamma.xyz is a platform that provides tools and resources for the digital asset ecosystem in Web3 and blockchain, offering services like analytics and liquidity solutions to empower developers, creators, and users in managing and interacting with digital assets efficiently.",
		techs: ["Web3", "Next.js", "Express", "Ethers", "Moralis", "NFT"],
		demo: "https://www.gamma.xyz",
		image: "/projects/gamma.png",
		caseStudy: true,
	},
];
