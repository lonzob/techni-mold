export const SITE = {
	name: 'Techni-Mold & Engineering, Inc.',
	shortName: 'Techni-Mold',
	baseUrl: 'https://www.techni-mold.com',
	phone: '(310) 323-7758',
	phoneTel: '+13103237758',
	fax: '(310) 323-6793',
	email: 'info@techni-mold.com',
	address: {
		street: '1320 W 130th St',
		city: 'Gardena',
		state: 'CA',
		zip: '90247',
		country: 'US',
		full: '1320 W 130th St, Gardena, CA 90247'
	},
	geo: {
		latitude: 33.8883,
		longitude: -118.31
	},
	defaultOgImage: '/og-default.jpg',
	foundingYear: '1966'
} as const;

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/industries', label: 'Industries' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' }
] as const;

export const SERVICES = [
	{
		id: 'cad-mold-design',
		title: 'CAD & Mold Design',
		description: 'Full CAD product development and precision mold design from concept to production.',
		icon: 'cad'
	},
	{
		id: 'injection-molding',
		title: 'Injection Molding',
		description:
			'All-electric injection molding with presses from 55 to 330 tons. 1–2 week delivery.',
		icon: 'mold'
	},
	{
		id: 'cnc-machining',
		title: 'CNC Machining',
		description: 'Precision CNC centers capable of handling components up to 4,400 pounds.',
		icon: 'cnc'
	},
	{
		id: 'edm-machining',
		title: 'EDM Machining',
		description: 'Electrical discharge machining for complex geometries and tight tolerances.',
		icon: 'edm'
	},
	{
		id: 'mold-repair',
		title: 'Mold Repair & Rebuild',
		description: 'Complete mold repairs, rebuilds, and modifications to extend tool life.',
		icon: 'repair'
	},
	{
		id: 'sla-prototyping',
		title: 'SLA Prototyping',
		description: 'Rapid prototype fabrication via stereolithography for design validation.',
		icon: 'prototype'
	},
	{
		id: 'insert-molding',
		title: 'Insert Molding',
		description: 'Metal or threaded insert encapsulation within molded plastic components.',
		icon: 'insert'
	},
	{
		id: 'sonic-welding',
		title: 'Sonic Welding',
		description: 'Ultrasonic welding for clean, strong plastic assembly without adhesives.',
		icon: 'sonic'
	}
] as const;

export const INDUSTRIES = [
	{ name: 'Aerospace', icon: '✈' },
	{ name: 'Automotive', icon: '🚗' },
	{ name: 'Agriculture', icon: '🌾' },
	{ name: 'Bio-Medical', icon: '🧬' },
	{ name: 'Construction', icon: '🏗' },
	{ name: 'Defense', icon: '🛡' },
	{ name: 'Energy', icon: '⚡' },
	{ name: 'Eyewear', icon: '👓' },
	{ name: 'Food & Beverage', icon: '🍽' },
	{ name: 'Healthcare', icon: '🏥' },
	{ name: 'Marine', icon: '⚓' },
	{ name: 'Telecommunications', icon: '📡' },
	{ name: 'Electronics', icon: '💡' },
	{ name: 'Consumer Goods', icon: '📦' },
	{ name: 'Industrial', icon: '🏭' },
	{ name: 'Safety Equipment', icon: '🦺' }
] as const;
