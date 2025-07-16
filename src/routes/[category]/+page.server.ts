import { error } from "@sveltejs/kit";
import type { MetaTagsProps } from "svelte-meta-tags";
import type { PageServerLoad } from "./$types";

import { categoryClient, postClient } from "@/data/api";
import { PUBLIC_WEBSITE_NAME } from "$env/static/public";

export const load = (async ({ params, url }) => {
	const response = await categoryClient.findCategory(params.category);
	if (response?.categories?.nodes.length <= 0) {
		throw error(404, {
			message: "Catégorie introuvable",
		});
	}

	const after = url.searchParams.get("after") || null;
	const before = url.searchParams.get("before") || null;

	const category = response.categories?.nodes[0];
	const posts = postClient.getPostsByCategory(category!.id, 8, after, before);

	// Metatags
	const pageMetaTags = Object.freeze({
		title: category?.seo.title ?? PUBLIC_WEBSITE_NAME,
		description: category?.seo?.metaDesc ?? "",
		openGraph: {
			title: category?.seo?.title,
			description:
				category?.seo?.opengraphDescription ?? category?.seo?.metaDesc,
			type: category?.seo?.opengraphType ?? "article",
		},
	}) satisfies MetaTagsProps;

	// FIXME: previous pagination
	return { posts, category, pageMetaTags };
}) satisfies PageServerLoad;
