<script lang="ts">
import { page } from "$app/state";
import type { PageProps } from "./$types";

import { css } from "styled-system/css";

import { Posts, PageHeading } from "@/components/partials";
import { Pagination } from "@/components/widgets";

let { data }: PageProps = $props();
</script>

<PageHeading title={data.category.name} />

{#await data.posts}
	<!-- TODO: create loader -->
	<p>Loading posts</p>
{:then posts}
	<section class={css({
			spaceY: { base: "4", sm: "8"}
		})}>
		<Posts posts={posts.edges} />

		<!-- TODO: pagination -->
		<Pagination
			url={page.url.pathname}
			before={posts?.pageInfo.startCursor || null}
			after={posts?.pageInfo.endCursor || null}
			hasNextPage={posts?.pageInfo.hasNextPage}
			hasPreviousPage={posts?.pageInfo.hasPreviousPage}
		/>
	</section>
{/await}
