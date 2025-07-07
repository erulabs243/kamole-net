import { client } from "./client";
import { seo } from "./seo";

export const getCategories = async () => {
	return (
		await client.query({
			categories: {
				nodes: {
					name: true,
					slug: true,
					seo,
				},
			},
		})
	).categories;
};

export const findCategory = async (category: string, limit: number = 12) => {
	return await client.query({
		categories: {
			__args: {
				first: limit,
				where: {
					slug: [category],
				},
			},
			nodes: {
				id: true,
				name: true,
				slug: true,
				seo,
			},
		},
	});
};
