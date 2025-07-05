<script lang="ts">
import type { Post } from "@/data/gql";

import * as Card from "$lib/components/ui/card";
import { Badge } from "$lib/components/ui/badge";

interface Props {
	post: Post;
}

let { post }: Props = $props();
</script>
<Card.Root class="p-0 gap-0">
  <Card.Header class="p-2">
    <div class="h-64 bg-red-500 w-full rounded-lg" />
  </Card.Header>
  <Card.Content class="p-2">
    <h3 class="text-[1.35rem] font-semibold tracking-tight">
      {post.title}
    </h3>
  </Card.Content>
</Card.Root>
