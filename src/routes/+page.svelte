<script lang="ts">
import type { PageProps } from "./$types";
import { css } from "styled-system/css";

import { HomeMain } from "@/components/partials";

let { data }: PageProps = $props();
</script>

<main>
  <HomeMain posts={data.first} />
  <div class={css({
      bg: "red.800"
    })}>
    <p>Title qui marche</p>
  </div>
</main>
