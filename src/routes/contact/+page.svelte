<script lang="ts">
	import { stack } from 'styled-system/patterns';
	import { css } from 'styled-system/css';

	import { PageHeading } from '$lib/components/partials';
</script>

<PageHeading title="Contact" />

<div
	class={stack({
		flexDir: 'column',
		gap: '4',
		w: { base: 'full', sm: '2/3' },
		mx: 'auto'
	})}
>
	<div class={css({ spaceY: '2' })}>
		<p class={css({ textStyle: 'h6', fontWeight: 'bold' })}>89, Av. ISGEA, Bukavu</p>
	</div>
</div>
