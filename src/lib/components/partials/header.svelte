<script lang="ts">
import type { Category } from "@/data/gql";

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
  <nav class="hidden sm:flex items-center justify-center gap-x-2 bg-neutral-900 py-2">
    {#each categories as category}
      <a
          href={`/${category.slug}`}
        >
        {category.name}
      </a>
    {/each}
  </nav>
</header>
