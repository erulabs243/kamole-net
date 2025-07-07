<script lang="ts">
import type { Snippet } from "svelte";

import { vstack } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

interface Props {
	title: string;
	hasTopBorder?: boolean;
	children: Snippet;
}

let { title, hasTopBorder = false, children }: Props = $props();
</script>

<section class={cx(
			vstack({
				spaceY: "4",
				py: { base: "4", sm: "8"},
				px: { base: "2", sm: "4" }
			}),
			hasTopBorder && css({
				borderTopWidth: "2",
				borderColor: "neutral.500"
			})
	)}>
			<h2 class={css({
					w: "full",
					textStyle: { base: "h5", sm: "h4" },
					fontWeight: "bold",
					textAlign: "left"
				})}>
				{title}
			</h2>
		<div>
			{@render children()}
		</div>
</section>
