const MONTHS: Record<string, number> = {
	jan: 0,
	feb: 1,
	mar: 2,
	apr: 3,
	may: 4,
	jun: 5,
	jul: 6,
	aug: 7,
	sep: 8,
	oct: 9,
	nov: 10,
	dec: 11,
};

const STOP = new Set(["ai", "the", "and", "for", "of", "a", "an", "to"]);

export function projectYear(date: string) {
	const found = date.match(/\d{4}/g);
	const year = found?.length ? Number(found[found.length - 1]) : NaN;
	return Number.isFinite(year) ? year : new Date().getFullYear();
}

export function projectSortKey(date: string) {
	const matches = [...date.matchAll(/([A-Za-z]{3,})\s+(\d{4})/g)];
	const last = matches[matches.length - 1];
	if (!last) return projectYear(date) * 12;
	const month = MONTHS[last[1].slice(0, 3).toLowerCase()] ?? 0;
	return Number(last[2]) * 12 + month;
}

export function projectInitials(title: string) {
	const head = title.split(/\s[—–-]\s/)[0] ?? title;
	const words = head
		.replace(/[.&/]/g, " ")
		.replace(/[-_]/g, " ")
		.replace(/[^A-Za-z0-9\s]/g, " ")
		.split(/\s+/)
		.filter((word) => word.length > 0 && !STOP.has(word.toLowerCase()));
	const source = words.length > 0 ? words : ["PR"];
	if (source.length === 1) return source[0].slice(0, 2).toUpperCase();
	return `${source[0][0]}${source[1][0]}`.toUpperCase();
}

export type ChartPoint = {
	year: number;
	value: number;
	x: number;
	y: number;
	r: number;
	now: boolean;
	seat: boolean;
};

export type ChartTick = {
	value: number;
	y: number;
};

export type ChartGridLine = {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	axis: boolean;
};

export type ProjectChart = {
	width: number;
	height: number;
	padL: number;
	plot: { x: number; y: number; width: number; height: number };
	line: string;
	points: ChartPoint[];
	ticks: ChartTick[];
	grid: ChartGridLine[];
};

function axisTop(peak: number) {
	if (peak <= 4) return 4;
	const step = peak <= 6 ? 1 : peak <= 12 ? 2 : peak <= 24 ? 4 : 5;
	return Math.ceil(peak / step) * step;
}

function tickStep(max: number) {
	if (max <= 6) return 1;
	if (max <= 12) return 2;
	if (max <= 24) return 4;
	return 5;
}

const START_YEAR = 2017;

export function buildProjectChart(years: number[]): ProjectChart {
	const now = new Date().getFullYear();
	const present = years.filter((year) => Number.isFinite(year));
	const lastYear = Math.max(
		now,
		START_YEAR,
		...present.filter((year) => year >= START_YEAR),
	);
	const seatYear = lastYear + 1;
	const axisYears: number[] = [];
	for (let year = START_YEAR; year <= seatYear; year += 1) axisYears.push(year);

	const counts = new Map<number, number>();
	for (const year of axisYears) counts.set(year, 0);
	for (const year of present) {
		if (year === seatYear || !counts.has(year)) continue;
		counts.set(year, (counts.get(year) ?? 0) + 1);
	}

	const peak = Math.max(0, ...axisYears.map((year) => counts.get(year) ?? 0));
	const yMax = Math.max(axisTop(peak), 1);
	const width = 760;
	const height = 268;
	const padL = 48;
	const padR = 48;
	const padT = 22;
	const padB = 32;
	const plotX = padL;
	const plotY = padT;
	const plotW = width - padL - padR;
	const plotH = height - padT - padB;

	const points = axisYears.map((year, index) => {
		const seat = year === seatYear;
		const value = seat ? 0 : (counts.get(year) ?? 0);
		const x =
			axisYears.length === 1
				? plotX + plotW / 2
				: plotX + (index / (axisYears.length - 1)) * plotW;
		const y = plotY + (1 - value / yMax) * plotH;
		return {
			year,
			value,
			x,
			y,
			r: value >= 10 ? 13 : 11,
			now: year === now,
			seat,
		};
	});

	const plotted = points.filter((point) => !point.seat);
	const line = plotted
		.map(
			(point, index) =>
				`${index === 0 ? "M" : "L"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`,
		)
		.join(" ");

	const step = tickStep(yMax);
	const ticks: ChartTick[] = [];
	for (let value = 0; value <= yMax; value += step) {
		ticks.push({
			value,
			y: plotY + (1 - value / yMax) * plotH,
		});
	}

	const bottom = plotY + plotH;
	const grid: ChartGridLine[] = [
		{ x1: plotX, y1: plotY, x2: plotX, y2: bottom, axis: true },
		{ x1: plotX, y1: bottom, x2: plotX + plotW, y2: bottom, axis: true },
	];
	for (const tick of ticks) {
		if (Math.abs(tick.y - bottom) < 0.5) continue;
		grid.push({
			x1: plotX,
			y1: tick.y,
			x2: plotX + plotW,
			y2: tick.y,
			axis: false,
		});
	}
	for (const point of points) {
		if (Math.abs(point.x - plotX) < 0.5) continue;
		grid.push({
			x1: point.x,
			y1: plotY,
			x2: point.x,
			y2: bottom,
			axis: false,
		});
	}

	return {
		width,
		height,
		padL,
		plot: { x: plotX, y: plotY, width: plotW, height: plotH },
		line,
		points,
		ticks,
		grid,
	};
}
