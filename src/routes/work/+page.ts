import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const imageModules = import.meta.glob(
		'/static/images/work/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,WEBP,GIF}',
		{ eager: true }
	);

	const images = Object.keys(imageModules).map((path) => ({
		src: path.replace('/static', ''),
		alt: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? ''
	}));

	return {
		meta: {
			title: 'Our Work | Techni-Mold & Engineering',
			description:
				'Gallery of injection molded parts, mold tooling, and CNC machined components produced by Techni-Mold & Engineering in Gardena, CA.'
		},
		images
	};
};
