<script lang="ts">
import type { PageProps } from "./$types";
import { css } from "styled-system/css";

import { buttonRecipe } from "@/components/ui/button";

import {
	HomeMain,
	Posts,
	SectionWithHeader,
	PostsWithHighlight,
} from "@/components/partials";

let { data }: PageProps = $props();
</script>

<HomeMain posts={data.first} />

<!-- Latest posts -->
{#if data.latest?.length > 0}
	<SectionWithHeader title="Dernières publications" hasTopBorder>
		<Posts posts={data.latest} />

		<div class={css({
				w: "full",
				mt: "4",
				py: "2",
				display: "flex",
				justifyContent: "flex-end"
			})}>
			<a
				href="/latest-posts"
				class={buttonRecipe({ variant: "outline"})}
			>
				Plus de publications
			</a>
		</div>
	</SectionWithHeader>
{/if}

{#if data.pinned?.length > 0}
	<!-- Pinned posts -->
	<SectionWithHeader hasTopBorder title="Choix de la rédaction">
		<PostsWithHighlight posts={data.pinned} />
	</SectionWithHeader>
{/if}

{#if data.popular?.length > 9}
	<!-- Popular posts -->
	<SectionWithHeader hasTopBorder title="Les plus populaires">
		<Posts posts={data.popular} />
	</SectionWithHeader>
{/if}
