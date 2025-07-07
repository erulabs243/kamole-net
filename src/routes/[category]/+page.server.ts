import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { categoryClient, postClient } from "@/data/api";

export const load = (async ({ params }) => {
	const response = await categoryClient.findCategory(params.category);
	if (response?.categories?.nodes.length <= 0) {
		throw error(404, {
			message: "Catégorie introuvable",
		});
	}

	const category = response.categories?.nodes[0];
	const posts = postClient.getPostsByCategory(category!.id);

	return { posts, category };
}) satisfies PageServerLoad;
