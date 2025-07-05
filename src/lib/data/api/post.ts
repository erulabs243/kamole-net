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
