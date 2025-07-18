import type { PageServerLoad } from './$types';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = (async () => {
	const pageMetaTags = Object.freeze({
		title: 'Contactez-nous'
	}) satisfies MetaTagsProps;

	return { pageMetaTags };
}) satisfies PageServerLoad;
