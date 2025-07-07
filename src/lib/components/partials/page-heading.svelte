<script lang="ts">
import { css } from "styled-system/css";

interface Props {
	title: string;
}

let { title }: Props = $props();
</script>

<header class={css({
    py: { base: "12", sm: "24"}
  })}>
  <h1 class={css({
      textStyle: "h2",
      textAlign: "center",
      fontWeight: "bold"
    })}>
    {title}
  </h1>
</header>
