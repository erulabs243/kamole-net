import { WORDPRESS_BASE_URL } from '$env/static/private';

import { createClient } from '../gql';

export const client = createClient({
	url: `${WORDPRESS_BASE_URL}/graphql`
});

export const generatePaginationArgs = (
	limit: number,
	before?: string | null,
	after?: string | null
) => {
	const args: Record<'first' | 'after' | 'last' | 'before', number | string | null | undefined> = {
		first: limit as number,
		after: null,
		last: null,
		before: null
	};

	// For the first page
	if (!before && !after) return args;

	// For the previous page
	if (before) {
		args.last = limit as number;
		args.before = before as string;
		args.first = null;
		args.after = null;
	}

	// For the next page
	if (after) {
		args.first = limit as number;
		args.after = after as string;
		args.last = null;
		args.before = null;
	}

	return args;
};
