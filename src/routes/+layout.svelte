<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';

	import type { LayoutProps } from './$types';
	import { container } from 'styled-system/patterns';
	import { css } from 'styled-system/css';

	import { Header, Footer } from '$lib/components/partials';

	let { children, data }: LayoutProps = $props();

	let metaTags = $derived(deepMerge(data.metatags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

<div class={css({ color: 'fg' })}>
	<Header categories={data.categories.nodes} />

	<main
		class={container({
			maxW: { base: 'full', md: '4/5' },
			my: '8',
			spaceY: { base: '8', md: '12' }
		})}
	>
		{@render children()}
	</main>

	<Footer />
</div>
