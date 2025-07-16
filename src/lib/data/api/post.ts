import { client } from "./client";
import { seo } from "./seo";

export const getPosts = async (
	limit: number = 12,
	after: string | null = null,
	before: string | null = null,
) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
					after,
					before,
				},
				pageInfo: {
					hasNextPage: true,
					hasPreviousPage: true,
					endCursor: true,
					startCursor: true,
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						excerpt: true,
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
						excerpt: true,
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
	after: string | null = null,
	before: string | null = null,
) => {
	console.dir({
		category,
		after,
		before,
		limit,
	});
	return (
		await client.query({
			posts: {
				__args: {
					first: after ? limit : null,
					after,
					last: before ? limit : null,
					before,
					where: { categoryIn: [category] },
				},
				pageInfo: {
					hasNextPage: true,
					hasPreviousPage: true,
					endCursor: true,
					startCursor: true,
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						excerpt: true,
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
					},
				},
			},
		})
	).posts;
};

/**
 * Get single post by slug
 */
export const getPost = async (slug: string) => {
	return (
		await client.query({
			post: {
				__args: {
					id: slug,
					idType: "SLUG",
				},
				title: true,
				excerpt: true,
				slug: true,
				date: true,
				content: true,
				isSticky: true,
				featuredImage: {
					node: {
						sourceUrl: true,
						altText: true,
					},
				},
				categories: {
					nodes: {
						name: true,
						slug: true,
						id: true,
					},
				},
				tags: {
					nodes: {
						name: true,
						slug: true,
						id: true,
					},
				},
				author: {
					node: {
						name: true,
						firstName: true,
						lastName: true,
						avatar: {
							url: true,
						},
					},
				},
				seo,
				relatedPosts: {
					__args: {
						where: {
							limit: 5,
						},
					},
					edges: {
						node: {
							title: true,
							slug: true,
							date: true,
							featuredImage: {
								node: {
									sourceUrl: true,
									altText: true,
								},
							},
							categories: {
								nodes: {
									name: true,
									slug: true,
								},
							},
						},
					},
				},
			},
		})
	).post;
};

/**
 * Search post
 */
export const searchPosts = async (
	term: string,
	limit: number = 12,
	after: string | null = null,
	before: string | null = null,
) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
					after,
					before,
					where: { search: term },
				},
				pageInfo: {
					hasNextPage: true,
					hasPreviousPage: true,
					endCursor: true,
					startCursor: true,
				},
				edges: {
					node: {
						title: true,
						slug: true,
						isSticky: true,
						date: true,
						excerpt: true,
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
					},
				},
			},
		})
	).posts;
};
