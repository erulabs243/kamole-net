<script lang="ts">
import type { PageProps } from "./$types";

import { stack } from "styled-system/patterns";
import { prose } from "styled-system/recipes";
import { css } from "styled-system/css";

import { DateWidget, Image } from "@/components/widgets";
import { SectionWithHeader, PostsWithHighlight } from "@/components/partials";
import { badgeRecipe } from "@/components/ui/badge";

let { data }: PageProps = $props();
console.dir(data.post.relatedPosts);
</script>

<div class={css({ spaceY: "8" })}>
  <!-- Header -->
  <header class={stack({
      direction: { base: "column", sm: "row" },
      gap: "4",
    })}>

    <div class={stack({
        spaceY: "2",
        w: { base: "full", sm: "1/2"},
        flexGrow: "grow"
      })}>
      <div class={stack({
          direction: "row",
          gap: "0",
          spaceX: "2",
          flexWrap: "wrap",
          alignItems: "center"
        })}>
        {#if data.post.categories?.nodes.length > 0}
          {#each data.post.categories.nodes as category}
            <a
              href={`/${category.slug}`}
              class={badgeRecipe({ variant: "solid"})}
            >
              {category.name}
            </a>
          {/each}
        {/if}

        <DateWidget date={data.post.date} />
      </div>

      <!-- Title, subtitle and author -->
      <div class={css({ spaceY: "2"})}>
        <h1 class={css({
            textStyle: { base: "h3", sm: "h2"}
          })}>
          {data.post.title}
        </h1>

        <p class={prose({ size: { base: "sm", sm: "lg" }})}>
          {@html data.post.excerpt}
        </p>

        <!-- Author -->
        
      </div>
    </div>

    <div class={css({
        w: { base: "1/2", sm: "full"},
        flexGrow: "grow",
      })}>
      <Image
        src={data.post.featuredImage?.node.sourceUrl}
        alt={data.post.featuredImage?.node.altText || data.post.title}
      />
    </div>
  </header>

  <!-- Post -->
  <article class={prose({ size: { base: "sm", sm: "lg" }})}>
    {@html data.post.content}
  </article>

  {#if data.post?.relatedPosts?.edges?.length > 0}
  <!-- Related posts -->
  <SectionWithHeader
    hasTopBorder
    title="Ils pourraient vous intéresser"
  >
    <PostsWithHighlight posts={data.post.relatedPosts?.edges} />
  </SectionWithHeader>
  {/if}
</div>
