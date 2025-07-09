import { seo } from './seo';
import { client } from './client';

export const getAuthor = async (author: string) => {
	return (
		await client.query({
			users: {
				__args: {
					where: { nicename: author }
				},
				nodes: {
					name: true,
					firstName: true,
					lastName: true,
					id: true
				}
			}
		})
	).users;
};

export const getPostsByAuthor = async (
	author: string,
	limit: number = 12,
	after: string | null = null,
	before: string | null = null
) => {
	return (
		await client.query({
			posts: {
				__args: {
					first: limit,
					after,
					before,
					where: { authorName: author }
				},
				pageInfo: {
					hasNextPage: true,
					hasPreviousPage: true,
					endCursor: true,
					startCursor: true
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
								altText: true
							}
						},
						tags: {
							nodes: {
								name: true,
								slug: true
							}
						},
						categories: {
							nodes: {
								name: true,
								slug: true
							}
						},
						seo
					}
				}
			}
		})
	).posts;
};
