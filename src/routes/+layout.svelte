<script lang="ts">
import "../app.css";

import type { LayoutProps } from "./$types";

import { Header } from "$lib/components/partials";

let { children, data }: LayoutProps = $props();
</script>
<Header categories={data.categories.nodes} />

<div class="w-[90vw] sm:w-3/4 mx-auto">
{@render children()}
</div>
