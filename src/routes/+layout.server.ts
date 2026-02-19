import type { LayoutServerLoad } from "./$types";
import type { MetaTagsProps } from "svelte-meta-tags";
import { PUBLIC_WEBSITE_NAME, PUBLIC_WEBSITE_SLOGAN, PUBLIC_WEBSITE_URL } from "$env/static/public";

import { categoryClient } from "@/data/api";

export const load = (async ({ url }) => {
  const categories = await categoryClient.getCategories();

  // Base metatags
  const metatags = Object.freeze({
    title: "Accueil",
    titleTemplate: `%s | ${PUBLIC_WEBSITE_NAME}`,
    description: PUBLIC_WEBSITE_SLOGAN,
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: "website",
      url: new URL(url.pathname, url.origin).href,
      locale: "fr_FR",
      title: `Accueil | ${PUBLIC_WEBSITE_NAME}`,
      description: PUBLIC_WEBSITE_SLOGAN,
      siteName: PUBLIC_WEBSITE_NAME,
      images: [
        {
          url: `${PUBLIC_WEBSITE_URL}/kamole-card.png`,
          alt: PUBLIC_WEBSITE_NAME,
        },
      ],
    },
    twitter: {
      image: `${PUBLIC_WEBSITE_URL}/kamole-card.png`,
      alt: PUBLIC_WEBSITE_NAME,
    },
  }) satisfies MetaTagsProps;

  return { categories, metatags };
}) satisfies LayoutServerLoad;
