export type SkillCategory = {
	id: string;
	label: string;
};

export type Skill = {
	name: string;
	abbr: string;
	category: string;
	since: number;
};

export type Project = {
	title: string;
	category: string;
	date: string;
	description: string;
	techs: string[];
	demo: string;
	image?: string;
	featured?: boolean;
	caseStudy?: boolean;
	openSource?: boolean;
};

export type Career = {
	company: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	highlights: string[];
	website: string;
	intro: string;
	logoIcon: string;
};

export type Testimonial = {
	name: string;
	role: string;
	quote: string;
	rating: number;
};

export type InfoCard = {
	label: string;
	front: string;
	back: string;
};

export type ContactLink = {
	label: string;
	value: string;
	href: string;
	note: string;
	icon: string;
	external: boolean;
};
