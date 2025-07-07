<script lang="ts">
import { stack } from "styled-system/patterns";
import { cx, css } from "styled-system/css";

import type { Post } from "@/data/gql";

import { badgeRecipe } from "$lib/components/ui/badge";
import Image from "$lib/components/widgets/image.svelte";
import Date from "$lib/components/widgets/date.svelte";

interface Props {
	post: Post;
}

let { post }: Post = $props();
let category = $derived(post?.node?.categories?.nodes?.at(0));
</script>

<div class={cx(
    stack({
      direction: { base: "row", sm: "column"}
    }),
    "group"
  )}>
  <div class={css({ w: { base: "1/3", sm: "full"}})}>
    <a
      href={`/${category.slug}/${post.node.slug}`}
    >
    <Image
      src={post?.featuredImage?.node?.sourceUrl}
      alt={post?.featuredImage?.node?.altText}
    />
    </a>
  </div>

  <div class={css({
      px: "2",
      w: { base: "2/3", sm: "full"},
    })}>
    <div class={stack({
        direction: "row",
        spaceX: "2",
        mb: "1",
        flexWrap: "wrap",
        gap: "0"
      })}>
      {#if category }
      <a
        href={`/${category.slug}`}
        class={badgeRecipe({ variant: "solid", size: "sm"})}
      >
        {category.name}
      </a>
      {/if}
      <Date date={post.node.date} />
    </div>

    <a
      href={`/${post.node.slug}`}
    >
      <h3 class={css({
          textStyle: "h6",
          lineHeight: "1.1",
          fontWeight: "semibold",
          lineClamp: 3,
          _groupHover: { color: "fg.primary"}
        })}>
        {post.node.title}
      </h3>
    </a>
  </div>
</div>
