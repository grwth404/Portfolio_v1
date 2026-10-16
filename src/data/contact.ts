import { site } from "./site";
import type { ContactLink } from "./types";

const { email, phone, github, linkedin } = site.contact;

export const formSubjects = [
	"Project Inquiry",
	"Job Opportunity",
	"Collaboration",
	"Consulting",
	"Other",
];

export const contactLinks: ContactLink[] = [
	{
		label: "Gmail",
		value: email,
		href: `mailto:${email}`,
		note: "Best way to reach me",
		icon: "simple-icons:gmail",
		external: false,
	},
	{
		label: "Phone",
		value: phone,
		href: `tel:${phone.replace(/\s/g, "")}`,
		note: "Available during UK hours",
		icon: "solar:phone-linear",
		external: false,
	},
	{
		label: "GitHub",
		value: github.replace("https://", ""),
		href: github,
		note: "Open-source & projects",
		icon: "simple-icons:github",
		external: true,
	},
	{
		label: "LinkedIn",
		value: linkedin.replace("https://", ""),
		href: linkedin,
		note: "Professional network",
		icon: "simple-icons:linkedin",
		external: true,
	},
];
