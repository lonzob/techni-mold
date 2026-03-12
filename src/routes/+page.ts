import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/types/seo';
import { SITE } from '$lib/config/site';

export const load: PageLoad = ({ url }) => {
	const meta: PageMeta = {
		title: `Plastic Injection Molding Los Angeles | ${SITE.name}`,
		description:
			'60+ years of custom plastic injection molding in Gardena, CA. ISO compliant, NSF certified. Serving aerospace, medical, automotive & industrial sectors across Southern California. 1–2 week delivery.',
		canonical: url.href,
		keywords:
			'plastic injection molding Los Angeles, injection molding Southern California, custom plastic molding California, mold design Los Angeles, injection mold repair Gardena CA'
	};
	return { meta };
};
