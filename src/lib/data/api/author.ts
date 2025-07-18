import { client, generatePaginationArgs } from './client';

export const getAuthor = async (
	author: string,
	limit: number = 12,
	after: string | null = null,
	before: string | null = null
) => {
	const args = generatePaginationArgs(limit, before, after);
	return await client.query({
		user: {
			__args: {
				id: author
			},
			name: true,
			firstName: true,
			lastName: true,
			posts: {
				__args: {
					...args
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
						excerpt: true,
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
						}
					}
				}
			}
		}
	});
};
