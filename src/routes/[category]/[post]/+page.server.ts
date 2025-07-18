import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { postClient } from "@/data/api";
import { generateMetaTags } from "@/utils/seo";

export const load = (async ({ params }) => {
	const post = await postClient.getPost(params.post);

	if (!post) {
		throw error(404, {
			message: "Article introuvable",
		});
	}

	// Metatags
	const pageMetaTags = generateMetaTags(post?.seo);

	return { post, pageMetaTags };
}) satisfies PageServerLoad;
