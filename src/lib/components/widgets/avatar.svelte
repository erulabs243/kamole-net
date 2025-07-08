<script lang="ts">
	import { Avatar } from '@ark-ui/svelte/avatar';

	interface Props {
		url: string;
		name: string;
	}

	let { url, name }: Props = $props();
</script>

<Avatar.Root>
	<Avatar.Fallback></Avatar.Fallback>
	<Avatar.Image src={url} alt={name} />
</Avatar.Root>
