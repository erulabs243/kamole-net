<script lang="ts">
import { css } from "styled-system/css";

interface Props {
	date: string;
}

let { date }: Props = $props();
let parsedDate = $derived(new Date(date));
</script>

<p class={css({
		fontSize: "sm",
		color: "fg.muted"
	})}>
  {parsedDate.toLocaleDateString("fr-FR", {
  	day: "2-digit",
  	month: "short",
  	year: "numeric"
  })}
</p>
