<script lang="ts">
	import { page } from '$app/state';
	import type { PageProps } from './$types';

	import { Posts, PageHeading } from '$lib/components/partials';
	import { Pagination } from '$lib/components/widgets';
	import Form from './form.svelte';

	let { data }: PageProps = $props();
</script>

<PageHeading title="Rechercher..." />
<!-- Formulaire -->
<Form />

<!-- Results -->
<Posts posts={data.posts?.edges} />

<Pagination
	url={`${page.url.pathname}?search=${page.url.searchParams.get('search')}`}
	before={data?.posts?.pageInfo.startCursor || null}
	after={data?.posts?.pageInfo.endCursor || null}
	hasNextPage={data?.posts?.pageInfo.hasNextPage}
	hasPreviousPage={data?.posts?.pageInfo.hasPreviousPage}
/>
