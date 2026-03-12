import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/types/seo';
import { SITE } from '$lib/config/site';

export const load: PageLoad = ({ url }) => {
	const meta: PageMeta = {
		title: `Contact ${SITE.shortName} | Plastic Injection Molder Los Angeles`,
		description: `Contact ${SITE.name} at ${SITE.phone}. Request a quote for plastic injection molding, mold design, or CNC machining in Gardena, CA 90247.`,
		canonical: url.href,
		keywords:
			'contact Techni-Mold, injection molding quote Los Angeles, plastic molder Gardena CA contact, request quote injection molding Southern California'
	};
	return { meta };
};
