import type { TaxonomySEOGenqlSelection } from '../gql';

export const seo = {
	metaDesc: true,
	title: true,
	twitterDescription: true,
	twitterTitle: true,
	opengraphAuthor: true,
	opengraphDescription: true,
	opengraphSiteName: true,
	opengraphTitle: true,
	opengraphType: true
} satisfies TaxonomySEOGenqlSelection;
