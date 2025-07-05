import type { LayoutServerLoad } from "./$types";

import { categoryClient } from "@/data/api";

export const load = (async () => {
	const categories = await categoryClient.getCategories();

	return { categories };
}) satisfies LayoutServerLoad;
