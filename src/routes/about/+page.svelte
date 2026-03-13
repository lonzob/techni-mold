<script lang="ts">
	import { SITE } from '$lib/config/site';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { Check } from 'lucide-svelte';

	const equipment = [
		{ machine: 'Milacron Roboshot (All-Electric)', tonnage: '55 ton', qty: '2' },
		{ machine: 'Milacron Roboshot (All-Electric)', tonnage: '110 ton', qty: '3' },
		{ machine: 'Milacron Roboshot (All-Electric)', tonnage: '165 ton', qty: '2' },
		{ machine: 'Milacron Roboshot (All-Electric)', tonnage: '220 ton', qty: '2' },
		{ machine: 'Milacron Roboshot (All-Electric)', tonnage: '330 ton', qty: '1' },
		{ machine: 'CNC Machining Center', tonnage: 'Up to 4,400 lb capacity', qty: '2' },
		{ machine: 'EDM Sinker', tonnage: '—', qty: '1' },
		{ machine: 'Surface Grinder', tonnage: '—', qty: '2' },
		{ machine: 'Ultrasonic Welder', tonnage: '—', qty: '1' }
	];

	const certifications = [
		{
			title: 'ISO Compliant',
			description: 'Quality management systems ensuring consistent, traceable production processes.'
		},
		{
			title: 'NSF Certified',
			description:
				'National Sanitation Foundation certification for food-contact and public health applications.'
		},
		{
			title: 'Made in America',
			description: 'All manufacturing performed at our Gardena, CA facility. No offshore outsourcing.'
		}
	];

	const milestones = [
		{ year: '1966', event: 'Techni-Mold & Engineering founded in Gardena, CA' },
		{ year: '1980s', event: 'Expanded capabilities to include EDM and CNC machining' },
		{ year: '1990s', event: 'Achieved NSF certification for food-contact applications' },
		{ year: '2000s', event: 'Transitioned to all-electric Milacron Roboshot machines' },
		{ year: '2010s', event: 'ISO compliance programs implemented across all operations' },
		{ year: '2024', event: 'Facility expanded with 4,000 sq ft of additional manufacturing space' }
	];
</script>

<!-- Hero -->
<section class="relative bg-brand-navy border-b border-gray-200 py-16 md:py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-top" style="background-image: url('/images/P1020677.JPG');" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>
	<div class="section-container relative z-10">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">Our Story</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
			60+ Years of Precision<br />
			<span class="text-brand-yellow">Made in America</span>
		</h1>
		<p class="text-white/70 text-lg max-w-2xl">
			{SITE.name} has been a trusted plastic injection molding partner for manufacturers across Los
			Angeles and Southern California since the 1960s.
		</p>
	</div>
</section>

<!-- Story -->
<section class="section-padding bg-white">
	<div class="section-container">
		<div class="grid md:grid-cols-2 gap-12 items-start mb-16">
			<div>
				<SectionHeading
					label="Who We Are"
					title="A Manufacturer You Can Rely On"
					align="left"
				/>
				<div class="space-y-4 text-brand-muted leading-relaxed">
					<p>
						Founded in Gardena, California, Techni-Mold & Engineering has grown from a regional mold
						shop into a full-service plastic injection molding manufacturer serving aerospace,
						medical, automotive, and industrial customers across the country.
					</p>
					<p>
						We operate entirely from our Gardena facility — no offshore outsourcing, no hidden
						subcontractors. When you work with Techni-Mold, you work directly with the engineers and
						technicians who build your parts.
					</p>
					<p>
						Our investment in all-electric Milacron Roboshot machines delivers superior precision,
						repeatability, and energy efficiency versus conventional hydraulic presses — translating
						directly to better part quality and lower cost for our customers.
					</p>
				</div>
			</div>

			<!-- Timeline -->
			<div>
				<h2 class="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-6">
					Company Milestones
				</h2>
				<img
					src="/images/TME-oldTime.png"
					alt="Techni-Mold early years"
					class="w-full rounded-sm mb-6 object-cover"
				/>
				<ol class="space-y-4">
					{#each milestones as milestone}
						<li class="flex gap-4">
							<span
								class="text-brand-yellow font-bold text-sm w-14 shrink-0 pt-0.5"
								>{milestone.year}</span
							>
							<span class="text-brand-muted text-sm leading-relaxed">{milestone.event}</span>
						</li>
					{/each}
				</ol>
			</div>
		</div>

		<!-- Certifications -->
		<div class="mb-16">
			<h2 class="text-brand-navy font-bold text-2xl mb-6 text-center">Certifications & Standards</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each certifications as cert}
					<div
						class="bg-white border border-gray-200 rounded-sm p-6 text-center hover:border-brand-yellow transition-colors"
					>
						<div
							class="w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/30 rounded-sm flex items-center justify-center mx-auto mb-4"
						>
							<Check size={18} class="text-brand-yellow" />
						</div>
						<h3 class="text-brand-navy font-bold mb-2">{cert.title}</h3>
						<p class="text-brand-muted text-sm leading-relaxed">{cert.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Equipment -->
		<div>
			<h2 class="text-brand-navy font-bold text-2xl mb-6 text-center">Equipment & Capabilities</h2>
			<div class="overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b border-gray-200">
							<th class="text-left text-brand-muted font-semibold py-3 pr-8">Machine / Equipment</th>
							<th class="text-left text-brand-muted font-semibold py-3 pr-8">Capacity / Spec</th>
							<th class="text-left text-brand-muted font-semibold py-3">Qty</th>
						</tr>
					</thead>
					<tbody>
						{#each equipment as row, i}
							<tr class="border-b border-gray-100 {i % 2 === 0 ? '' : 'bg-brand-section-alt'}">
								<td class="text-brand-navy py-3 pr-8">{row.machine}</td>
								<td class="text-brand-muted py-3 pr-8">{row.tonnage}</td>
								<td class="text-brand-muted py-3">{row.qty}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="bg-brand-section-alt section-padding border-t border-gray-200">
	<div class="section-container text-center">
		<h2 class="text-3xl font-bold text-brand-navy mb-4">Work With Us</h2>
		<p class="text-brand-muted mb-6 max-w-lg mx-auto">
			Ready to partner with a manufacturer that's been doing this for 60 years? Let's talk about
			your next project.
		</p>
		<div class="flex flex-col sm:flex-row justify-center gap-4">
			<a href="/contact" class="btn-primary">Get a Quote</a>
			<a href="/services" class="btn-secondary">Our Services</a>
		</div>
	</div>
</section>
