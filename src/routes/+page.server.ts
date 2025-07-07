import type { PageServerLoad } from "./$types";

import { postClient } from "@/data/api";

export const load = (async () => {
	const latestPosts = await postClient.getPosts();

	// Three latest posts
	const firstPosts = latestPosts?.edges?.slice(0, 3) ?? [];

	// Next latest
	const remainingPosts = latestPosts?.edges?.slice(3, 8) ?? [];

	// Pinned posts
	const pinned = latestPosts?.edges?.filter((post) => post.node.isSticky);

	// Popular posts
	// TODO: make fetching popular async
	const popular = [];

	return {
		first: firstPosts,
		latest: remainingPosts,
		pinned: pinned?.slice(0, 5),
		popular: popular?.slice(0, 4) ?? [],
	};
}) satisfies PageServerLoad;
