import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/types/seo';
import { SITE } from '$lib/config/site';

export const load: PageLoad = ({ url }) => {
	const meta: PageMeta = {
		title: `Injection Molding Services Southern California | ${SITE.shortName}`,
		description:
			'Full-service plastic injection molding, mold design, CNC machining, EDM, and mold repair in Gardena, CA. All-electric presses 55–330 ton. Serving Los Angeles and Southern California.',
		canonical: url.href,
		keywords:
			'injection molding services Los Angeles, mold design California, CNC machining Gardena CA, EDM machining Los Angeles, mold repair Southern California'
	};
	return { meta };
};
