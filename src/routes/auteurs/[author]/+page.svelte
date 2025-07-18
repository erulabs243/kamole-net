<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	import { css } from 'styled-system/css';

	import { Posts, PageHeading } from '@/components/partials';
	import { Pagination } from '@/components/widgets';

	let { data }: PageProps = $props();
</script>

<PageHeading title={`${data.author.firstName} ${data.author.lastName}` ?? data.author.name} />

<section>
	<Posts posts={data.posts.edges} />

	<!-- TODO: pagination -->
	<Pagination
		url={page.url.pathname}
		before={data.posts?.pageInfo.startCursor || null}
		after={data.posts?.pageInfo.endCursor || null}
		hasNextPage={data.posts?.pageInfo.hasNextPage}
		hasPreviousPage={data.posts?.pageInfo.hasPreviousPage}
	/>
</section>
