import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { categoryClient, postClient } from '@/data/api';

export const load = (async ({ params, url }) => {
	const response = await categoryClient.findCategory(params.category);
	if (response?.categories?.nodes.length <= 0) {
		throw error(404, {
			message: 'Catégorie introuvable'
		});
	}

	const after = url.searchParams.get('after') || null;
	const before = url.searchParams.get('before') || null;

	const category = response.categories?.nodes[0];
	const posts = postClient.getPostsByCategory(category!.id, 8, after, before);

	// FIXME: previous pagination
	return { posts, category };
}) satisfies PageServerLoad;
