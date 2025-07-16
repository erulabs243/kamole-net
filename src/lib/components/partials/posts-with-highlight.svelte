<script lang="ts">
import { grid, gridItem } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import type { Post as PostType } from "@/data/gql";

import Post from "../cards/post.svelte";

interface Props {
	posts: Array<PostType>;
}

let { posts }: Props = $props();
</script>

<div>
	<section
		class={grid({
			columns: { base: 1, sm: 2 },
			gap: '4'
		})}
	>
		<!-- First line -->
		{#if posts.slice(0, 2).length > 0}
			{#each posts.slice(0, 2) as post}
				<div class={gridItem()}>
					<Post {post} />
				</div>
			{/each}
		{/if}
	</section>
	<section
		class={grid({
			columns: { base: 1, sm: 3 },
			mt: '8',
			gap: '4'
		})}
	>
		{#if posts.slice(2).length > 0}
			{#each posts.slice(2) as post}
				<Post {post} />
			{/each}
		{/if}
	</section>
</div>
