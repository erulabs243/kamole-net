import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { authorClient } from '@/data/api';

export const load = (async ({ params, url }) => {
	const authorId = params.author.substring(params.author.lastIndexOf('-') + 1);

	const after = url.searchParams.get('after') || null;
	const before = url.searchParams.get('before') || null;

	const response = await authorClient.getAuthor(authorId, 12, after, before);

	if (!response?.user) {
		throw error(404, {
			message: 'Auteur introuvable'
		});
	}

	const author = response.user;

	return {
		author,
		posts: author.posts
	};
}) satisfies PageServerLoad;
