<script lang="ts">
import { css } from "styled-system/css";

interface Props {
	title: string;
}

let { title }: Props = $props();
</script>

<header
	class={css({
		py: { base: '4', sm: '8' }
	})}
>
	<h1
		class={css({
			textStyle: { base: "h4", md: "h2"},
			textAlign: 'center',
			fontWeight: 'bold'
		})}
	>
		{title}
	</h1>
</header>
