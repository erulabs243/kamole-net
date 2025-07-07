<script lang="ts">
import type { Post } from "@/data/gql";

import { css, cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { cardSlotRecipe as card } from "$lib/components/ui/card";
import { badgeRecipe } from "$lib/components/ui/badge";

import Date from "$lib/components/widgets/date.svelte";
import Image from "$lib/components/widgets/image.svelte";

interface Props {
	post: Post;
}

let { post }: Props = $props();

let category = $derived(post.categories?.nodes.at(0));
</script>

<article class={cx(
		card({ size: "sm"}).root, "group",
		css({ p: "0"})
	)}>
	<!-- Image -->
	<div class={cx(
			card().image,
			css({ h: "60",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p: "0"
			})
		)}>
		<Image
			src={post.featuredImage?.node?.sourceUrl}
			alt={post.featuredImage?.node?.altText}
		/>
	</div>

	<!-- Content -->
	<div class={cx(
			card().body,
			css({ p: "0"})
		)}>
		<!-- Category & date-->
		<div class={hstack({ gap: "4", })}>
			{#if category}	
				<a
					class={badgeRecipe({ variant: "solid"})}
					href={`/${category.slug}`}
				>
					{category.name}
				</a>
			{/if}
			<Date date={post.date!} />
		</div>
		<a
			href={`/${category!.slug}/${post.slug}`}
			class={css({ _groupHover: { color: "fg.primary"}})}
		>
		<h3 class={cx(
				css({ textStyle: { base: "h5", sm: "h4"}, fontWeight: "bold"})
			)}>
			{post.title}
		</h3>
		</a>
	</div>
</article>
