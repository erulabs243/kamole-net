import { WORDPRESS_BASE_URL } from '$env/static/private';

import { createClient } from '../gql';

export const client = createClient({
	url: `${WORDPRESS_BASE_URL}/graphql`
});
