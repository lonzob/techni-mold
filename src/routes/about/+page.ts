import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/types/seo';
import { SITE } from '$lib/config/site';

export const load: PageLoad = ({ url }) => {
	const meta: PageMeta = {
		title: `About ${SITE.shortName} | 60+ Years Injection Molding Expertise`,
		description:
			`${SITE.name} — a family-owned plastic injection molder in Gardena, CA serving Los Angeles since the 1960s. ISO compliant, NSF certified, Made in America.`,
		canonical: url.href,
		keywords:
			'about Techni-Mold, plastic injection molding company Gardena CA, injection molding manufacturer Los Angeles history, ISO NSF certified molder'
	};
	return { meta };
};
