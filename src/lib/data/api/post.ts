import { client } from "./client";
import { seo } from "./seo";

export const getPosts = async (limit: number = 10) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						featuredImage: {
							node: {
								sourceUrl: true,
								altText: true,
							},
						},
						tags: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						categories: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						seo,
					},
				},
			},
		})
	).posts;
};

export const getPinnedPosts = async (limit: number = 8) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
					where: {},
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						featuredImage: {
							node: {
								sourceUrl: true,
								altText: true,
							},
						},
						tags: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						categories: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						seo,
					},
				},
			},
		})
	).posts;
};

/**
 * Get posts by category
 */
export const getPostsByCategory = async (
	category: string,
	limit: number = 12,
	page: number = 1,
) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
					where: { categoryIn: [category] },
				},
				pageInfo: {
					hasNextPage: true,
					hasPreviousPage: true,
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						featuredImage: {
							node: {
								sourceUrl: true,
								altText: true,
							},
						},
						tags: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						categories: {
							nodes: {
								name: true,
								slug: true,
							},
						},
						seo,
					},
				},
			},
		})
	).posts;
};
