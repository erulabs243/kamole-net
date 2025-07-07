<script lang="ts">
import { grid, gridItem } from "styled-system/patterns";

import type { Post as PostType } from "@/data/gql";
import Post from "$lib/components/cards/post.svelte";

interface Props {
	posts: Array<PostType>;
}

let { posts }: Props = $props();
</script>

<div class={grid({
    columns: { base: 1, sm: 2, md: 4},
    rowGap: "8",
    columnGap: "4"
  })}>
  {#each posts as post}
  	<div class={gridItem()}>
    	<Post post={post} />
    </div>
  {/each}
</div>


