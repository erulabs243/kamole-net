<script lang="ts">
	import { HomeIcon } from 'lucide-svelte';

	import { hstack } from 'styled-system/patterns';
	import { css, cx } from 'styled-system/css';

	interface Props {
		paths: Record<string, string>;
	}

	let { paths }: Props = $props();
</script>

<div></div>
