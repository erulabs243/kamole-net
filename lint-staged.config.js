/**
 * @type {import("lint-staged").Config}
 */
export default {
	'*.{svelte,ts,js}': ['oxlint', 'prettier --write .']
};
