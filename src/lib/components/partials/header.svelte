<script lang="ts">
import { Button } from "@/components/ui/button";
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
      <Button
          href={`/${category.slug}`}
          variant="link"
          class="text-white"
        >
        {category.name}
      </Button>
    {/each}
  </nav>
</header>
