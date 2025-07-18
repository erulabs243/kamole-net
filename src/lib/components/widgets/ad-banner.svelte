<script lang="ts">
	import { PUBLIC_WHATSAPP_URL } from '$env/static/public';

	import { vstack } from 'styled-system/patterns';
	import { css } from 'styled-system/css';

	import { buttonRecipe } from '../ui/button';
</script>

<section
	class={css({
		bg: 'neutral.700',
		rounded: 'sm',
		maxW: { base: '85vw', md: '80vw' },
		mx: 'auto',
		my: '8',
		p: '8'
	})}
>
	<div
		class={css({
			spaceY: '4',
			w: { base: 'full', md: '2/3' },
			mx: 'auto'
		})}
	>
		<h3
			class={css({
				textStyle: { base: 'h5', md: 'h4' },
				fontWeight: 'bold',
				color: 'neutral.50'
			})}
		>
			Besoin de vous faire connaitre ?
		</h3>
		<p
			class={css({
				color: 'neutral.100',
				fontSize: { base: 'sm', md: 'base' }
			})}
		>
			Cet espace est réservé à ceux qui désirent faire connaitre leur point de vue ou leur produit.
			C'est un espace de publicité...
		</p>

		<a
			href={PUBLIC_WHATSAPP_URL}
			class={buttonRecipe({
				variant: 'solid'
			})}
		>
			Contactez-nous
		</a>
	</div>
</section>
