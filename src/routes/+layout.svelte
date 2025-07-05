<script lang="ts">
import "../app.css";

import type { LayoutProps } from "./$types";

import { Header } from "$lib/components/partials/header";

let { children, data }: LayoutProps = $props();
</script>
<Header categories={data.categories.nodes} />
{@render children()}
