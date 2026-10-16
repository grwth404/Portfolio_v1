export const GRID_REGULAR = 6;
export const LIST_PAGE = 6;
export const DENSE_PAGE = 9;

export function paginateGrid<T>(
	items: T[],
	isFeatured: (item: T) => boolean,
): T[][] {
	const pages: T[][] = [];
	let index = 0;
	while (index < items.length) {
		const feature: T[] = [];
		const regular: T[] = [];
		while (index < items.length && regular.length < GRID_REGULAR) {
			const item = items[index];
			index += 1;
			if (feature.length === 0 && isFeatured(item)) feature.push(item);
			else regular.push(item);
		}
		pages.push([...feature, ...regular]);
	}
	return pages.length > 0 ? pages : [[]];
}
