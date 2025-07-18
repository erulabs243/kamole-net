import type { MetaTagsProps } from 'svelte-meta-tags';
import type { PageServerLoad } from './$types';
import { PUBLIC_WEBSITE_NAME } from '$env/static/public';

import { postClient } from '@/data/api';

export const load = (async ({ url }) => {
	const after = url.searchParams.get('after') || null;
	const before = url.searchParams.get('before') || null;

	const posts = await postClient.getPosts(12, after, before);

	// TODO: Add metatags
	const pageMetaTags = Object.freeze({}) satisfies MetaTagsProps;

	return { posts, pageMetaTags };
}) satisfies PageServerLoad;
