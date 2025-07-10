import type { PageServerLoad } from "./$types";
import type { MetaTagsProps } from "svelte-meta-tags";

import { postClient } from "@/data/api";

export const load = (async ({ url }) => {
	const search = url.searchParams.get("search") ?? "";

	const posts = !search
		? await postClient.getPosts(12)
		: await postClient.searchPosts(search, 12);

	const pageMetaTags = Object.freeze({
		title: "Rechercher",
	}) satisfies MetaTagsProps;

	return { posts, pageMetaTags };
}) satisfies PageServerLoad;
