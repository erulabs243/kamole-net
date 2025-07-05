<script lang="ts">
import "../app.css";

import type { LayoutProps } from "./$types";
import { container } from "styled-system/patterns";

import { Header } from "$lib/components/partials";

let { children, data }: LayoutProps = $props();
</script>
<Header categories={data.categories.nodes} />

<div class={container({
    maxW: { base: "full", md: "3/4"},
    my: "8",
  })}>
{@render children()}
</div>
