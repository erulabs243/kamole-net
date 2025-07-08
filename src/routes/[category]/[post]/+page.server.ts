import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { postClient } from "@/data/api";

export const load = (async ({ params }) => {
	const post = await postClient.getPost(params.post);

	if (!post) {
		throw error(404, {
			message: "Article introuvable",
		});
	}

	return { post };
}) satisfies PageServerLoad;
