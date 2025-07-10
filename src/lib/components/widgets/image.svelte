<script lang="ts">
import { Image } from "@unpic/svelte";

import { css } from "styled-system/css";

interface Props {
	src?: string;
	alt?: string;
}

let { src, alt }: Props = $props();
</script>

{#if src}
	<Image
		{src}
		{alt}
		layout="constrained"
		loading="lazy"
		class={css({ objectFit: 'cover', objectPosition: 'center' })}
	/>
{:else}
	<img
		src="https://placehold.co/600x400?text=Kamole"
		alt="Kamole"
	/>
{/if}
