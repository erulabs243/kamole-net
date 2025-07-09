<script lang="ts">
	import { Dialog, Portal, Positioner } from '@ark-ui/svelte';
	import { MenuIcon, XIcon } from 'lucide-svelte';

	import { css, cx } from 'styled-system/css';
	import { vstack, center, hstack } from 'styled-system/patterns';

	import type { Category } from '@/data/gql';

	import { drawer } from '$lib/components/ui/drawer';
	import { buttonRecipe } from '../ui/button';

	interface Props {
		categories: Array<Category>;
	}

	let { categories }: Props = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={css({
			display: 'inline-flex',
			p: '2',
			rounded: 'sm',
			_hover: { bg: 'bg.subtle', cursor: 'pointer' }
		})}
	>
		<MenuIcon
			class={css({
				w: '6',
				h: '6',
				color: 'fg'
			})}
		/>
	</Dialog.Trigger>

	<Portal>
		<Dialog.Backdrop class={drawer().backdrop} />
		<Dialog.Positioner class={drawer({ variant: 'left' }).positioner}>
			<Dialog.Content class={drawer().content}>
				<div class={drawer().body}>
					<div
						class={center({
							w: 'full',
							h: 'full'
						})}
					>
						<nav
							class={vstack({
								gap: '1'
							})}
						>
							<div
								class={hstack({
									justifyContent: 'space-around',
									w: 'full',
									mb: '4'
								})}
							>
								<p
									class={css({
										textStyle: 'h6'
									})}
								>
									Menu
								</p>

								<Dialog.CloseTrigger
									class={css({
										display: 'inline-flex',
										p: '2',
										rounded: 'sm',
										_hover: { bg: 'bg.subtle', cursor: 'pointer' }
									})}
								>
									<XIcon
										class={css({
											w: '4',
											h: '4',
											color: 'fg'
										})}
									/>
								</Dialog.CloseTrigger>
							</div>
							<a
								href="/"
								class={cx(
									buttonRecipe({
										variant: 'subtle'
									}),
									css({ w: 'full', justifyContent: 'flex-start' })
								)}
							>
								Accueil
							</a>
							{#each categories as category}
								<a
									href={`/${category.slug}`}
									class={cx(
										buttonRecipe({
											variant: 'subtle'
										}),
										css({ w: 'full', justifyContent: 'flex-start' })
									)}
								>
									{category.name}
								</a>
							{/each}
							<a
								href="/search"
								class={cx(
									buttonRecipe({
										variant: 'subtle'
									}),
									css({ w: 'full', justifyContent: 'flex-start' })
								)}
							>
								Recherche
							</a>
							<a
								href="/a-propos"
								class={cx(
									buttonRecipe({
										variant: 'subtle'
									}),
									css({ w: 'full', justifyContent: 'flex-start' })
								)}
							>
								A propos de nous
							</a>
						</nav>
					</div>
				</div>
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog.Root>
