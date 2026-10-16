export type SkillCategory = {
	id: string;
	label: string;
};

export type Skill = {
	name: string;
	icon: string;
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

export type CareerRole = {
	title: string;
	start: string;
	end: string | null;
};

export type Career = {
	company: string;
	initials: string;
	location: string;
	employment: string;
	arrangement: string;
	summary: string;
	highlights: string[];
	stack: string[];
	roles: CareerRole[];
	website: string;
	photo: string;
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
