import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
	h1: { value: { fontSize: '5xl', fontWeight: 'bold', lineHeight: '1.2' } },
	h2: { value: { fontSize: '4xl', fontWeight: 'bold', lineHeight: '1.1' } },
	h3: { value: { fontSize: '3xl', fontWeight: 'bold', lineHeight: '1.1' } },
	h4: { value: { fontSize: '2xl' } },
	h5: { value: { fontSize: 'xl' } },
	h6: { value: { fontSize: 'lg' } },
	paragraph: { value: { fontSize: 'md' } }
});
