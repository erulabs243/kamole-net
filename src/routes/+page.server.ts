import type { PageServerLoad } from './$types';

import { postClient } from '@/data/api';

export const load = (async () => {
	const latestPosts = await postClient.getPosts(13);

	// Three latest posts
	const firstPosts = latestPosts?.edges?.slice(0, 5) ?? [];

	// Next latest
	const remainingPosts = latestPosts?.edges?.slice(5, 8) ?? [];

	// Pinned posts
	// TODO: extends WPGraphql
	// TODO: make this fetch async
	const pinned = latestPosts?.edges?.filter((post) => post.node.isSticky);

	// Popular posts
	// TODO: make fetching popular async
	const popular = [];

	return {
		first: firstPosts,
		latest: remainingPosts,
		pinned: pinned?.slice(0, 5),
		popular: popular?.slice(0, 4) ?? []
	};
}) satisfies PageServerLoad;
