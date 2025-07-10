<script lang="ts">
import { MenuIcon, SearchIcon } from "lucide-svelte";
import { PUBLIC_WEBSITE_SLOGAN } from "$env/static/public";

import Kamole from "$lib/assets/kamole.png?enhanced";

import type { Category } from "@/data/gql";
import { stack } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import { buttonRecipe } from "$lib/components/ui/button";
import Drawer from "./drawer.svelte";

interface Props {
	categories: Array<Category>;
}

let { categories }: Props = $props();
</script>

<header>
	<!-- Title with sidebar -->
	<div
		class={stack({
			px: { base: '4', sm: '12' },
			py: '2',
			flexDir: 'row',
			alignItems: 'center',
			justify: 'space-between'
		})}
	>
		<!-- Drawer -->
		<div
			class={stack({
				flexDir: 'row',
				gap: '2'
			})}
		>
			<Drawer {categories} />
			<a
				href="/search"
				class={css({
					display: 'inline-flex',
					p: '2',
					rounded: 'sm',
					hideBelow: 'sm',
					_hover: { bg: 'bg.subtle' }
				})}
			>
				<SearchIcon class={css({ w: '6', h: '6', color: 'fg' })} />
			</a>
		</div>

		<!-- Logo -->
		<a href="/" aria-label="Kamole - Page d'accueil">
			<enhanced:img src={Kamole} alt="Kamole" class={css({ w: '24' })} />
		</a>

		<!-- Right navigation -->
		<div
			class={stack({
				flexDir: 'row'
			})}
		>
			<div class={css({ hideBelow: 'sm' })}>
				<p
					class={css({
						textStyle: 'paragraph',
						fontSize: 'sm',
						fontWeight: 'semibold'
					})}
				>
					{PUBLIC_WEBSITE_SLOGAN}
				</p>
			</div>

			<a
				href="/search"
				class={css({
					display: 'inline-flex',
					p: '2',
					rounded: 'sm',
					hideFrom: 'sm',
					_hover: { bg: 'bg.subtle' }
				})}
			>
				<SearchIcon class={css({ w: '6', h: '6', color: 'fg' })} />
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
