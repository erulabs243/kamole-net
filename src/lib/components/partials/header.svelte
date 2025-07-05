<script lang="ts">
import type { Category } from "@/data/gql";
import { stack } from "styled-system/patterns";

import { buttonRecipe } from "$lib/components/ui/button";

interface Props {
	categories: Array<Category>;
}

let { categories }: Props = $props();
</script>
<header>
  <!-- Title with sidebar -->
  <div>

  </div>
  <!-- Navigation -->
  <nav class={stack({
      direction: "row",
      py: "2",
      alignItems: "center",
      justifyContent: "center",
      hideBelow: "md"
    })}>
    {#each categories as category}
      <a
          class={buttonRecipe({ variant: "subtle"})}
          href={`/${category.slug}`}
        >
        {category.name}
      </a>
    {/each}
  </nav>
</header>
