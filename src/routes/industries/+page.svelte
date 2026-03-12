<script lang="ts">
	import { INDUSTRIES, SITE } from '$lib/config/site';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const industryDetails: Record<string, string> = {
		Aerospace: 'FAA-compliant plastic components for interior, structural, and systems applications.',
		Automotive: 'Under-hood, interior trim, and functional parts for OEM and aftermarket.',
		Agriculture: 'Durable housings, irrigation fittings, and equipment components.',
		'Bio-Medical': 'Clean-room compatible parts for diagnostic and therapeutic devices.',
		Construction: 'Conduit fittings, fasteners, and structural components.',
		Defense: 'Mission-critical parts built to MIL-spec requirements.',
		Energy: 'Components for solar, wind, and traditional energy infrastructure.',
		Eyewear: 'Precision frames, lenses, and accessories.',
		'Food & Beverage': 'NSF-certified food-contact components and dispensing parts.',
		Healthcare: 'Hospital equipment housings, disposables, and medical device components.',
		Marine: 'Corrosion-resistant deck hardware, fittings, and equipment enclosures.',
		Telecommunications: 'Connector housings, cable management, and equipment enclosures.',
		Electronics: 'Precision enclosures, connectors, and thermal management components.',
		'Consumer Goods': 'High-volume production for retail and consumer product brands.',
		Industrial: 'Heavy-duty machine components, guards, and housings.',
		'Safety Equipment': 'ANSI-compliant protective gear and safety device components.'
	};
</script>

<!-- Hero -->
<section class="relative bg-brand-navy border-b border-gray-200 py-16 md:py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-top" style="background-image: url('/images/tm-front.jpg');" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>
	<div class="section-container relative z-10">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">Who We Serve</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Industries Served</h1>
		<p class="text-white/70 text-lg max-w-2xl">
			{SITE.shortName} has manufactured plastic injection molded parts for virtually every industrial
			sector. Our ISO compliant processes and NSF certification qualify us for the most demanding applications.
		</p>
	</div>
</section>

<!-- Industries grid -->
<section class="section-padding bg-white">
	<div class="section-container">
		<SectionHeading
			label="Sectors"
			title="20+ Industries — One Trusted Partner"
			subtitle="From prototypes to high-volume production runs, we serve customers across Southern California and beyond."
		/>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each INDUSTRIES as industry}
				<div
					class="bg-white border border-gray-200 rounded-sm p-5 hover:border-brand-yellow transition-colors duration-200"
				>
					<div class="text-3xl mb-3" aria-hidden="true">{industry.icon}</div>
					<h2 class="text-white font-semibold mb-2 text-sm">{industry.name}</h2>
					<p class="text-brand-muted text-xs leading-relaxed">
						{industryDetails[industry.name] ?? 'Precision plastic parts for demanding applications.'}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-brand-section-alt section-padding border-t border-gray-200">
	<div class="section-container text-center">
		<h2 class="text-3xl font-bold text-brand-navy mb-4">Don't See Your Industry?</h2>
		<p class="text-brand-muted mb-6 max-w-lg mx-auto">
			We work with customers across a wide range of sectors. Contact us to discuss your specific
			application requirements.
		</p>
		<a href="/contact" class="btn-primary">Contact Us</a>
	</div>
</section>
