export const site = {
	name: "James Walker",
	shortName: "JAMES W",
	title: "James Walker — Senior Software Engineer",
	tagline:
		"Senior software engineer — AI/ML, web, DevOps & security. Based in London, UK. Remote across US, CA & EU.",
	year: 2026,
	contact: {
		email: "jameswalker.swt@gmail.com",
		phone: "+44 7575 466691",
		github: "https://github.com/jameswalker",
		linkedin: "https://linkedin.com/in/jameswalker",
	},
	nav: [
		{ label: "About", href: "#about" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Career", href: "#career" },
		{ label: "Reviews", href: "#testimonials" },
		{ label: "Contact", href: "#get-in-touch" },
	],
	bootLog: [
		"initializing neural core",
		"loading language model",
		"compiling shaders",
		"establishing sync link",
		"system ready",
	],
};

export const iconUrl = (icon: string, color = "8b3a2a") => {
	const path = icon.replace(":", "/");
	return `https://api.iconify.design/${path}.svg?color=%23${color}`;
};
