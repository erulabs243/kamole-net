import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { authorClient } from "@/data/api";
import { generateMetaTags } from "@/utils/seo";

export const load = (async ({ params, url }) => {
  const authorId = params.author.substring(params.author.lastIndexOf("-") + 1);

  const after = url.searchParams.get("after") || null;
  const before = url.searchParams.get("before") || null;

  const response = await authorClient.getAuthor(authorId, 12, after, before);

  if (!response?.user) {
    throw error(404, {
      message: "Auteur introuvable",
    });
  }

  const author = response.user;
  const pageMetaTags = generateMetaTags({
    title: `${author.firstName} ${author.lastName}`,
  });

  return {
    author,
    posts: author.posts,
    pageMetaTags,
  };
}) satisfies PageServerLoad;
