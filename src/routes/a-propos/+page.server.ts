import type { MetaTagsProps } from 'svelte-meta-tags';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const pageMetaTags = Object.freeze({
		title: 'A propos de nous'
	}) satisfies MetaTagsProps;

	return { pageMetaTags };
}) satisfies PageServerLoad;
