import type { Testimonial } from "./types";

const avatar = (name: string) =>
	`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=8b3a2a&color=c8c4bc&size=128&bold=true`;

export const testimonials: (Testimonial & { avatar: string })[] = [
	{
		name: "Sarah Mitchell",
		role: "Engineering Manager, Centrax",
		quote:
			"James delivered our AI energy platform ahead of schedule. His ability to bridge ML research and production deployment is rare — the system has been running flawlessly in prod for months.",
		rating: 5,
		avatar: avatar("Sarah Mitchell"),
	},
	{
		name: "David Okonkwo",
		role: "CTO, Pathfinder Systems",
		quote:
			"We brought James in to architect our enterprise integration layer. He navigated SharePoint, Graph API and legacy systems with precision — clean code, clear docs, zero drama.",
		rating: 5,
		avatar: avatar("David Okonkwo"),
	},
	{
		name: "Elena Vasquez",
		role: "Product Lead, MediConnect",
		quote:
			"The patient portal he built exceeded our HIPAA compliance requirements while still feeling fast and intuitive. Stakeholders still reference his work as the gold standard.",
		rating: 5,
		avatar: avatar("Elena Vasquez"),
	},
	{
		name: "Marcus Chen",
		role: "Founder, InsightSaaS",
		quote:
			"From multi-tenant architecture to Stripe billing integration — James owned the full stack. Our analytics product launched on time and scaled to 40+ B2B clients without rewrites.",
		rating: 5,
		avatar: avatar("Marcus Chen"),
	},
	{
		name: "Priya Sharma",
		role: "DevOps Lead, CloudMigrate",
		quote:
			"His Terraform modules and CI/CD pipelines cut our cloud migration time in half. James thinks in systems — every deployment had rollback plans, cost reports and validation baked in.",
		rating: 5,
		avatar: avatar("Priya Sharma"),
	},
	{
		name: "Tom Bradley",
		role: "Director of AI, FleetTrack",
		quote:
			"The RAG knowledge assistant James built transformed how our ops team finds information. Vector search, LLM orchestration, admin analytics — all production-ready from day one.",
		rating: 5,
		avatar: avatar("Tom Bradley"),
	},
];
