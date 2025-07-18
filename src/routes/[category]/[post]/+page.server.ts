import { error } from '@sveltejs/kit';
import type { MetaTagsProps } from 'svelte-meta-tags';
import { PUBLIC_WEBSITE_NAME } from '$env/static/public';
import type { PageServerLoad } from './$types';

import { postClient } from '@/data/api';

export const load = (async ({ params }) => {
	const post = await postClient.getPost(params.post);

	if (!post) {
		throw error(404, {
			message: 'Article introuvable'
		});
	}

	// Metatags
	const pageMetaTags = Object.freeze({
		title: post?.seo.title ?? PUBLIC_WEBSITE_NAME,
		description: post?.seo?.metaDesc,
		openGraph: {
			title: post?.seo?.title,
			description: post?.seo?.opengraphDescription ?? post?.seo?.metaDesc,
			type: post?.seo?.opengraphType ?? 'article'
		}
	}) satisfies MetaTagsProps;

	return { post, pageMetaTags };
}) satisfies PageServerLoad;
