<script lang="ts">
import { hstack } from "styled-system/patterns";
import { css } from "styled-system/css";

import { buttonRecipe } from "../ui/button";

interface Props {
	url: string;
	before: string | null;
	after: string | null;
	hasNextPage?: boolean;
	hasPreviousPage?: boolean;
}

let {
	url,
	hasNextPage = false,
	hasPreviousPage = false,
	before = null,
	after = null,
}: Props = $props();
</script>
<div class={hstack({
    alignItems: "flex-end",
    justifyContent: "flex-end",
    py: "4",
    w: "full",
  })}>
  {#if hasPreviousPage}
    <a
      href={`${url}?before=${before}`}
      class={buttonRecipe({ variant: "outline", size: "sm"})}
    >
      Précédent
    </a>
  {/if}

  {#if hasNextPage}
    <a
      href={`${url}?after=${after}`}
      class={buttonRecipe({ variant: "outline", size: "sm"})}
    >
      Suivant
    </a>
  {/if}
</div>
