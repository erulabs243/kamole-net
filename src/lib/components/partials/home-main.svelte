<script lang="ts">
import type { Post } from "@/data/gql";

import { SimplePost } from "../cards";

interface Props {
	posts: Array<Post>;
}

let { posts }: Props = $props();
</script>

<div class="grid sm:grid-cols-3 gap-4 sm:gap-8 my-4 sm:my-8">
  {#if posts[0]}
    <div class="col-span-2">
      <SimplePost post={posts[0].node} />
    </div>
  {/if}
  <div class="space-y-4">
  {#each posts.slice(1) as post}
    <SimplePost post={post.node} />
  {/each}
  </div>
</div>
