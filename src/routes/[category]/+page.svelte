<script lang="ts">
import type { PageProps } from "./$types";

import { css } from "styled-system/css";

import { Posts, PageHeading } from "@/components/partials";

let { data }: PageProps = $props();
</script>

<PageHeading title={data.category.name} />

{#await data.posts}
  <!-- TODO: create loader -->
  <p>Loading posts</p>
{:then posts} 
  <section>
    <Posts posts={posts.edges} />

    <!-- TODO: pagination -->
  </section>
{/await}
