import type { PageServerLoad } from "./$types";

import { postClient } from "@/data/api";

export const load = (async () => {
	const latestPosts = await postClient.getPosts();

	console.dir(latestPosts);

	return {
		first: latestPosts?.edges.slice(0, 3),
		latest: latestPosts?.edges.slice(3),
	};
}) satisfies PageServerLoad;
