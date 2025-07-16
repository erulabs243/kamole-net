<script lang="ts">
import { grid, gridItem } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import type { Post as PostType } from "@/data/gql";

import SimplePost from "../cards/simple-post.svelte";

interface Props {
	posts: Array<PostType>;
}

let { posts }: Props = $props();
</script>

<div>
	<section
		class={grid({
			columns: { base: 1, sm: 3 },
			gap: { base: "4", sm: "8"}
		})}
	>
		<!-- First line -->
		{#if posts[0]}
				<div class={gridItem({ colSpan: 2})}>
					<SimplePost post={posts[0]} hasExcerpt />
				</div>
		{/if}
		<div class={gridItem()}>
		{#if posts.slice(1).length > 0}
			{#each posts.slice(1) as post}
				<SimplePost {post} />
			{/each}
		{/if}
		</div>
	</section>
</div>
