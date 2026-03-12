<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { SERVICES, SITE } from '$lib/config/site';
	import { Check } from 'lucide-svelte';

	const icons: Record<string, string> = {
		cad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
		mold: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
		cnc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
		edm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
		repair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
		prototype: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
		insert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>`,
		sonic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="2" y2="12"/><line x1="5" y1="9" x2="5" y2="15"/><line x1="8" y1="6" x2="8" y2="18"/><line x1="11" y1="3" x2="11" y2="21"/><line x1="14" y1="6" x2="14" y2="18"/><line x1="17" y1="9" x2="17" y2="15"/><line x1="20" y1="11" x2="20" y2="13"/></svg>`
	};

	const serviceDetails: Record<string, { capabilities: string[]; detail: string }> = {
		'cad-mold-design': {
			detail:
				'Our engineering team uses the latest CAD software to develop products from concept sketches to production-ready mold designs. We optimize designs for manufacturability to minimize cycle time and material usage.',
			capabilities: [
				'3D solid modeling',
				'Mold flow analysis',
				'Parting line & gate optimization',
				'DFM review',
				'Engineering change management'
			]
		},
		'injection-molding': {
			detail:
				'We operate all-electric Milacron Roboshot injection molding machines from 55 to 330 tons. All-electric machines deliver precise repeatability, faster cycles, and reduced energy consumption versus hydraulic alternatives.',
			capabilities: [
				'55 to 330 ton capacity',
				'Milacron Roboshot machines',
				'Single and multi-cavity molds',
				'Engineering resins & commodity plastics',
				'1–2 week delivery on orders'
			]
		},
		'cnc-machining': {
			detail:
				'Our CNC machining centers handle precision mold components and parts up to 4,400 pounds. We machine complex geometries with tight tolerances required for high-performance injection molds.',
			capabilities: [
				'3 and 4-axis CNC milling',
				'Components up to 4,400 lbs',
				'Tight tolerance work (±0.0005")',
				'Hardened tool steel machining',
				'Surface grinding & finishing'
			]
		},
		'edm-machining': {
			detail:
				'Electrical Discharge Machining (EDM) allows us to create features that conventional cutting tools cannot reach — deep cavities, sharp internal corners, and complex core/cavity geometry.',
			capabilities: [
				'Sinker (ram) EDM',
				'Wire EDM',
				'Complex cavity work',
				'Micro-feature capability',
				'Hardened steel after heat treat'
			]
		},
		'mold-repair': {
			detail:
				'Extending the life of your existing tooling is often more cost-effective than building new molds. Our technicians diagnose and repair mold damage, worn components, and perform engineering modifications.',
			capabilities: [
				'Cavity & core repair',
				'Mold rebuild & refurbishment',
				'Engineering modifications',
				'Weld & re-machine',
				'Steel safe to engineering dimensions'
			]
		},
		'sla-prototyping': {
			detail:
				'Stereolithography (SLA) prototyping lets you validate form, fit, and function before committing to hard tooling. Reduce risk and accelerate time to market with rapid physical prototypes.',
			capabilities: [
				'Functional prototypes',
				'Form & fit verification',
				'Customer approval samples',
				'Appearance models',
				'Design iteration support'
			]
		},
		'insert-molding': {
			detail:
				'Insert molding combines metal inserts — threaded, press-fit, or electrical — directly into molded plastic parts in a single operation, eliminating secondary assembly steps.',
			capabilities: [
				'Threaded metal inserts',
				'Electrical contacts',
				'Over-molding onto substrates',
				'Reduced assembly cost',
				'Stronger than press-in inserts'
			]
		},
		'sonic-welding': {
			detail:
				'Ultrasonic (sonic) welding uses high-frequency vibration to bond plastic components without adhesives or fasteners, creating clean, strong hermetic joints ideal for medical and consumer applications.',
			capabilities: [
				'Hermetic seals',
				'No adhesives or solvents',
				'Fast cycle times',
				'Suitable for medical parts',
				'Consistent, repeatable welds'
			]
		}
	};
</script>

<!-- Hero -->
<section class="relative bg-brand-navy border-b border-gray-200 py-16 md:py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-top" style="background-image: url('/images/15_sample.JPG');" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>
	<div class="section-container relative z-10">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">What We Do</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
			Plastic Injection Molding Services<br />
			<span class="text-brand-yellow">Southern California</span>
		</h1>
		<p class="text-white/70 text-lg max-w-2xl">
			Full in-house capabilities from CAD design through production molding, CNC machining, EDM, and
			secondary operations — all at our Gardena, CA facility.
		</p>
	</div>
</section>

<!-- Services detail -->
<section class="section-padding bg-white">
	<div class="section-container space-y-12">
		{#each SERVICES as service}
			<article
				id={service.id}
				class="grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-gray-100 last:border-0 last:pb-0"
			>
				<div>
					<div class="w-12 h-12 text-brand-yellow mb-4">
						{@html icons[service.icon]}
					</div>
					<h2 class="text-2xl font-bold text-brand-navy mb-2">{service.title}</h2>
					<p class="text-brand-muted text-sm">{service.description}</p>
				</div>
				<div>
					<p class="text-brand-navy/70 mb-5 leading-relaxed">
						{serviceDetails[service.id]?.detail}
					</p>
					<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
						{#each serviceDetails[service.id]?.capabilities ?? [] as cap}
							<li class="flex items-start gap-2 text-sm text-brand-muted font-semibold">
								<Check size={14} class="text-brand-yellow mt-0.5 shrink-0" />
								{cap}
							</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="bg-brand-section-alt section-padding border-t border-gray-200">
	<div class="section-container text-center">
		<h2 class="text-3xl font-bold text-brand-navy mb-4">Need a Custom Quote?</h2>
		<p class="text-brand-muted mb-6 max-w-lg mx-auto">
			Contact our team to discuss your project requirements. We'll respond quickly.
		</p>
		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<a href="/contact" class="btn-primary">Get a Quote</a>
			<a href="tel:{SITE.phoneTel}" class="btn-secondary">Call {SITE.phone}</a>
		</div>
	</div>
</section>
