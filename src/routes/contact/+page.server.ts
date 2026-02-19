import { generateMetaTags } from "@/utils/seo";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const pageMetaTags = generateMetaTags({ title: "Contactez-nous" });

  return { pageMetaTags };
}) satisfies PageServerLoad;
