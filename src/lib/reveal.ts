const REVEAL_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export function animateElements(
	elements: Iterable<HTMLElement>,
	options?: { duration?: number; y?: number },
) {
	const { duration = 700, y = 24 } = options ?? {};

	for (const el of elements) {
		const delay = parseInt(el.style.getPropertyValue("--d") || "0", 10);
		el.animate(
			[
				{ opacity: 0, transform: `translateY(${y}px)` },
				{ opacity: 1, transform: "translateY(0)" },
			],
			{ duration, delay, easing: REVEAL_EASING, fill: "both" },
		);
	}
}

export function observeSectionReveal(
	sectionId: string,
	selector: string,
	options?: { threshold?: number; onReveal?: () => void },
) {
	const section = document.getElementById(sectionId);
	if (!section) return;

	const { threshold = 0.12, onReveal } = options ?? {};
	const reveals = section.querySelectorAll<HTMLElement>(selector);

	const observer = new IntersectionObserver(
		(entries) => {
			if (!entries.some((e) => e.isIntersecting)) return;
			animateElements(reveals);
			onReveal?.();
			observer.disconnect();
		},
		{ threshold },
	);

	observer.observe(section);
}
