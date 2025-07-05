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
