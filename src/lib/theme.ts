export const THEME_KEY = "theme";

export type Theme = "light" | "dark";

export function readTheme(): Theme {
	const current = document.documentElement.dataset.theme;
	if (current === "light" || current === "dark") return current;

	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === "light" || stored === "dark") return stored;
	} catch {
		/* Storage can be blocked. */
	}

	return "dark";
}

export function applyTheme(theme: Theme) {
	document.documentElement.dataset.theme = theme;
	document.documentElement.style.colorScheme = theme;

	const meta = document.querySelector('meta[name="theme-color"]');
	if (meta) {
		meta.setAttribute("content", theme === "light" ? "#f4f4f5" : "#18181b");
	}
}

export function toggleTheme(): Theme {
	const next: Theme = readTheme() === "light" ? "dark" : "light";

	try {
		localStorage.setItem(THEME_KEY, next);
	} catch {
		/* Storage can be blocked. */
	}

	applyTheme(next);
	return next;
}
