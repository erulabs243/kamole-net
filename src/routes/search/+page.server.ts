import { generateMetaTags } from '@/utils/seo';
import type { PageServerLoad } from './$types';

import { postClient } from '@/data/api';

export const load = (async ({ url }) => {
	const search = url.searchParams.get('search') ?? '';

	const posts = !search ? await postClient.getPosts(12) : await postClient.searchPosts(search, 12);

	const pageMetaTags = generateMetaTags({ title: 'Rechercher' });

	return { posts, pageMetaTags };
}) satisfies PageServerLoad;
