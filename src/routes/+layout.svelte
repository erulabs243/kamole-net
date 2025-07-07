<script lang="ts">
import "../app.css";

import type { LayoutProps } from "./$types";
import { container } from "styled-system/patterns";
import { css } from "styled-system/css";

import { Header } from "$lib/components/partials";

let { children, data }: LayoutProps = $props();
</script>
<div class={css({ color: "fg"})}>
<Header categories={data.categories.nodes} />

<main class={container({
    maxW: { base: "full", md: "4/5"},
    my: "8",
    spaceY: { base: "8", md: "12"}
  })}>
{@render children()}
</main>
</div>
