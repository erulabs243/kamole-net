import path from 'node:path';
import { generate } from '@genql/cli';

generate({
	endpoint: `${process.env.WORDPRESS_BASE_URL}/graphql`,
	output: path.join(__dirname, 'gql')
}).catch(console.error);
