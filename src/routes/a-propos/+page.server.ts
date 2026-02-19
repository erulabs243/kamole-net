import type { PageServerLoad } from "./$types";
import { generateMetaTags } from "@/utils/seo";

export const load = (async () => {
  const pageMetaTags = generateMetaTags({ title: "A propos de nous" });

  return { pageMetaTags };
}) satisfies PageServerLoad;
