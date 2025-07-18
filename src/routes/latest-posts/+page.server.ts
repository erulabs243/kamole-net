import type { PageServerLoad } from "./$types";

import { postClient } from "@/data/api";
import { generateMetaTags } from "@/utils/seo";

export const load = (async ({ url }) => {
	const after = url.searchParams.get("after") || null;
	const before = url.searchParams.get("before") || null;

	const posts = await postClient.getPosts(12, after, before);

	// TODO: Add metatags
	const pageMetaTags = generateMetaTags({ title: "Dernières publications" });

	return { posts, pageMetaTags };
}) satisfies PageServerLoad;
