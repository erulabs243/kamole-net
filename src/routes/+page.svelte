<script lang="ts">
import type { PageProps } from "./$types";

import { HomeMain } from "@/components/partials";

let { data }: PageProps = $props();
</script>

<main>
  <HomeMain posts={data.first} />
</main>
