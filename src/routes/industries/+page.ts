import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/types/seo';
import { SITE } from '$lib/config/site';

export const load: PageLoad = ({ url }) => {
	const meta: PageMeta = {
		title: `Industries Served | ${SITE.shortName} Injection Molding CA`,
		description:
			'Plastic injection molding for aerospace, automotive, medical, agriculture, defense, food, and 20+ industries in Southern California. ISO compliant, NSF certified.',
		canonical: url.href,
		keywords:
			'aerospace injection molding California, medical plastic molding Los Angeles, automotive injection molding Southern California, defense plastic parts manufacturer'
	};
	return { meta };
};
