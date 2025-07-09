import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { authorClient } from "@/data/api";

export const load = (async ({ params }) => {
	const response = await authorClient.getAuthor(params.author);
	// FIXME: change the name used to fetch the author

	if (!response?.nodes.length) {
		throw error(404, {
			message: "Auteur introuvable",
		});
	}

	const author = response.nodes[0];

	return {
		posts: authorClient.getPostsByAuthor(author.name!),
		author,
	};
}) satisfies PageServerLoad;
