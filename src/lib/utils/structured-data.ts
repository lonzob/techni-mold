import { SITE } from '$lib/config/site';

export function buildLocalBusinessSchema() {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': ['LocalBusiness', 'ManufacturingBusiness'],
		'@id': `${SITE.baseUrl}/#business`,
		name: SITE.name,
		description:
			'Custom plastic injection molding, mold design, CNC machining, and EDM services in Gardena, CA. Serving Los Angeles and Southern California for 60+ years.',
		url: SITE.baseUrl,
		telephone: SITE.phone,
		email: SITE.email,
		foundingDate: SITE.foundingYear,
		address: {
			'@type': 'PostalAddress',
			streetAddress: SITE.address.street,
			addressLocality: SITE.address.city,
			addressRegion: SITE.address.state,
			postalCode: SITE.address.zip,
			addressCountry: SITE.address.country
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: SITE.geo.latitude,
			longitude: SITE.geo.longitude
		},
		areaServed: [
			{ '@type': 'City', name: 'Los Angeles' },
			{ '@type': 'State', name: 'California' }
		],
		hasCredential: ['ISO Compliant', 'NSF Certified'],
		knowsAbout: [
			'Plastic Injection Molding',
			'Mold Design',
			'CNC Machining',
			'EDM Machining',
			'Mold Repair',
			'Insert Molding'
		],
		image: `${SITE.baseUrl}${SITE.defaultOgImage}`,
		sameAs: [
			'https://www.techni-mold.com',
			'https://www.linkedin.com/company/techni-mold-&-engineering-inc.',
			'https://g.page/r/CUNzfSlQtKjaEBM/review',
			'https://www.facebook.com/technimoldeng/'
		]
	});
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: item.url
		}))
	});
}
