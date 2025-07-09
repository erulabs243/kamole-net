<script lang="ts">
import type { PageProps } from "./$types";

import { Avatar } from "@ark-ui/svelte/avatar";

import { stack } from "styled-system/patterns";
import { prose } from "styled-system/recipes";
import { cx, css } from "styled-system/css";

import { DateWidget, Image } from "@/components/widgets";
import { SectionWithHeader, PostsWithHighlight } from "@/components/partials";
import { badgeRecipe } from "@/components/ui/badge";
import { avatarSlotRecipe } from "@/components/ui/avatar";

let { data }: PageProps = $props();
console.dir(data.post.author);
</script>

<div class={css({ spaceY: { base: "8", sm: "16"} })}>
	<!-- Header -->
	<header
		class={stack({
			direction: { base: 'column', sm: 'row' },
			gap: '2'
		})}
	>
		<div
			class={stack({
				spaceY: '2',
				flexDir: "column",
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
						textStyle: { base: 'h3', sm: 'h2' }
					})}
				>
					{data.post.title}
				</h1>

				<p class={prose({ size: { base: 'base', sm: 'lg' } })}>
					{@html data.post.excerpt}
				</p>

				<!-- Author -->
					<a
						href={`/auteurs/${data.post.author.node.username}`}
						class={css({
							display: "inline-flex",
							gap: "2",
							alignItems: "center"
						})}
					>
						<Avatar.Root class={avatarSlotRecipe({ size: "lg"}).root}>
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
							<span class={css({
									fontSize: "sm",
									color: "neutral.600"
								})}>Auteur</span><br />
							<span>
								{data.post.author?.node.name ||
									`${data.post.author?.node.firstName} ${data.post.author?.node.lastName}`}
							</span>
						</p>
					</a>
			</div>
		</div>

		<div
			class={css({
				w: { base: "full", sm: '1/2' },
				flexGrow: 'grow'
			})}
		>
			<Image
				src={data.post.featuredImage?.node.sourceUrl}
				alt={data.post.featuredImage?.node.altText || data.post.title}
			/>
		</div>
	</header>

	<!-- Post -->
	<article class={prose({ size: { base: 'sm', sm: 'lg' } })}>
		{@html data.post.content}
	</article>

	{#if data.post?.relatedPosts?.edges?.length > 0}
		<!-- Related posts -->
		<SectionWithHeader hasTopBorder title="Ils pourraient vous intéresser">
			<PostsWithHighlight posts={data.post.relatedPosts?.edges} />
		</SectionWithHeader>
	{/if}
</div>
