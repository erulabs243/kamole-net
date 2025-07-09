<script lang="ts">
import { MenuIcon, SearchIcon } from "lucide-svelte";

import type { Category } from "@/data/gql";
import { stack } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import { buttonRecipe } from "$lib/components/ui/button";

interface Props {
	categories: Array<Category>;
}

let { categories }: Props = $props();
</script>

<header>
	<!-- Title with sidebar -->
	<div class={stack({
			px: { base: "4", sm: "8"},
			py: "2",
			flexDir: "row",
			alignItems: "center",
			justify: "space-between"
		})}>
		<!-- Drawer -->
		<div class={stack({
				flexDir: "row",
				gap: "2"
			})}>
			<a
				href="/search"
				class={css({
					display: "inline-flex",
					p: "2",
					rounded: "sm",
					hideBelow: "sm",
					_hover: { bg: "bg.subtle"}
				})}
			>
				<SearchIcon class={css({ w: "6", h: "6", color: "fg" })} />
			</a>
		</div>

		<!-- Logo -->
		<p>Logo</p>

		<!-- Right navigation -->
		<div class={stack({
					flexDir: "row",
				})}>

			<a
				href="/search"
				class={css({
					display: "inline-flex",
					p: "2",
					rounded: "sm",
					hideFrom: "sm",
					_hover: { bg: "bg.subtle"}
				})}
			>
				<SearchIcon class={css({ w: "6", h: "6", color: "fg" })} />
			</a>
		</div>
	</div>
	<!-- Navigation -->
	<nav
		class={stack({
			direction: 'row',
			py: '2',
			alignItems: 'center',
			justifyContent: 'center',
			hideBelow: 'md'
		})}
	>
		{#each categories as category}
			<a class={buttonRecipe({ variant: 'subtle' })} href={`/${category.slug}`}>
				{category.name}
			</a>
		{/each}
	</nav>
</header>
