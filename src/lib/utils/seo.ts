import type { MetaTagsProps } from "svelte-meta-tags";

import type { TaxonomySEO } from "@/data/gql";
import { PUBLIC_WEBSITE_NAME } from "$env/static/public";

// FIXME: Seo POST type schema

export const generateMetaTags = (seo: TaxonomySEO, url?: string) => {
  return Object.freeze({
    title: seo.title,
    description: seo.metaDesc,
    canonical: url,
    openGraph: {
      title: seo.opengraphTitle ?? seo.title,
      url,
      description: seo.opengraphDescription ?? seo.metaDesc,
      siteName: PUBLIC_WEBSITE_NAME,
      type: seo.opengraphType,
    },

    // TODO: complete other metatags
  }) satisfies MetaTagsProps;
};
