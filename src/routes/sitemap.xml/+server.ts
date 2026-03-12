import { SITE } from '$lib/config/site';
import type { RequestHandler } from './$types';

const pages = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/services', changefreq: 'monthly', priority: '0.9' },
	{ path: '/industries', changefreq: 'monthly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.7' },
	{ path: '/work', changefreq: 'monthly', priority: '0.7' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.8' }
];

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${SITE.baseUrl}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=0, s-maxage=86400'
		}
	});
};
