import type { PageServerLoad } from "./$types";
import type { MetaTagsProps } from "svelte-meta-tags";

import { postClient } from "@/data/api";

export const load = (async () => {
	const latestPosts = await postClient.getPosts(11);

	// Three latest posts
	const firstPosts = latestPosts?.edges?.slice(0, 3) ?? [];

	// Next latest
	const remainingPosts = latestPosts?.edges?.slice(3, 11) ?? [];

	// Pinned posts
	// TODO: extends WPGraphql
	// TODO: make this fetch async
	const pinned = latestPosts?.edges?.filter((post) => post.node.isSticky);

	// Popular posts
	// TODO: make fetching popular async
	const popular = [];

	// Metatags
	const pageMetaTags = Object.freeze({}) satisfies MetaTagsProps;

	return {
		first: firstPosts,
		latest: remainingPosts,
		pinned: pinned?.slice(0, 3),
		popular: popular?.slice(0, 4) ?? [],
		pageMetaTags,
	};
}) satisfies PageServerLoad;
