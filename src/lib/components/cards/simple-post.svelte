<script lang="ts">
import type { Post } from "@/data/gql";

interface Props {
	post: Post;
}

let { post }: Props = $props();
</script>
