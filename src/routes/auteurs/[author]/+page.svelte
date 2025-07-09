<script lang="ts">
import { page } from "$app/state";
import type { PageProps } from "./$types";

import { css } from "styled-system/css";

import { Posts, PageHeading } from "@/components/partials";
import { Pagination } from "@/components/widgets";

let { data }: PageProps = $props();
</script>

<PageHeading title={data.author.name} />

{#await data.posts}
	<!-- TODO: create loader -->
	<p>Loading posts</p>
{:then posts}
	<section>
		<Posts posts={posts.edges} />

		<p>{posts?.pageInfo.hasNextPage}</p>
		<p>{posts?.pageInfo.hasPreviousPage}</p>

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
