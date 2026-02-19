<script lang="ts">
	import type { PageProps } from './$types';
	import { page } from '$app/state';

	import { Avatar } from '@ark-ui/svelte/avatar';

	import { stack } from 'styled-system/patterns';
	import { prose } from 'styled-system/recipes';
	import { cx, css } from 'styled-system/css';

	import { DateWidget, Image } from '@/components/widgets';
	import { SectionWithHeader, PostsWithHighlight } from '@/components/partials';
	import { badgeRecipe } from '@/components/ui/badge';
	import { avatarSlotRecipe } from '@/components/ui/avatar';

	let { data }: PageProps = $props();
</script>

<div class={css({ spaceY: { base: '8', sm: '16'}})}>
	<!-- Header -->
	<header
		class={stack({
			direction: "column-reverse",
			gap: { base: '4', sm: '8' },
			px: "4",
			w: { base: "full", sm: "2/3" },
			mx: "auto"
		})}
	>
		<div
			class={stack({
				spaceY: '2',
				flexDir: 'column',
				w: { base: 'full', sm: '1/2' },
				flexGrow: 'grow'
			})}
		>
			<div
				class={stack({
					direction: 'row',
					gap: '0',
					spaceX: '2',
					flexWrap: 'wrap',
					alignItems: 'center'
				})}
			>
				{#if data.post.categories?.nodes.length > 0}
					{#each data.post.categories.nodes as category}
						<a href={`/${category.slug}`} class={badgeRecipe({ variant: 'solid' })}>
							{category.name}
						</a>
					{/each}
				{/if}

				<DateWidget date={data.post.date} />
			</div>

			<!-- Title, subtitle and author -->
			<div>
				<h1
					class={css({
						textStyle: { base: 'h4', sm: 'h3' },
						mb: "4"
					})}
				>
					{data.post.title}
				</h1>


				<!-- Author -->
				<a
					href={`/auteurs/${data.post.author.node.name}-${data.post.author.node.id}`}
					class={css({
						display: 'inline-flex',
						gap: '2',
						alignItems: 'center'
					})}
				>
					<Avatar.Root class={avatarSlotRecipe({ size: 'lg' }).root}>
						<Avatar.Fallback class={avatarSlotRecipe().fallback}>
							{data.post.author?.node.name?.substring(0, 2).toUpperCase()}
						</Avatar.Fallback>
						<Avatar.Image
							class={avatarSlotRecipe().image}
							src={data.post.author?.node.avatar.url}
							alt={data.post.author?.node.name}
						/>
					</Avatar.Root>
					<p>
						<span
							class={css({
								fontSize: 'sm',
								color: 'neutral.600'
							})}>Auteur</span
						><br />
						<span>
							{`${data.post.author?.node.firstName} ${data.post.author?.node.lastName}` ||
								data.post.author?.node.name}
						</span>
					</p>
				</a>
			</div>
		</div>

		<div
			class={css({
				w: "full",
				h: { base: "72", sm: "30rem" },
				overflow: 'hidden'
			})}
		>
			<Image
			    class="text"
				src={data.post.featuredImage?.node.sourceUrl}
				alt={data.post.featuredImage?.node.altText || data.post.title}
			/>
		</div>
	</header>

	<!-- Post -->
	<div class={css({ px: '4',
	w: { base: "full", sm: "2/3" },
	mx: "auto" })}>
		<article class={prose({ size: { sm: 'xl' } })}>
			{@html data.post.content}
		</article>
	</div>

	{#if data.post?.relatedPosts?.edges?.length > 0}
		<!-- Related posts -->
		<SectionWithHeader hasTopBorder title="Ils pourraient vous intéresser">
			<PostsWithHighlight posts={data.post.relatedPosts?.edges} />
		</SectionWithHeader>
	{/if}
</div>
