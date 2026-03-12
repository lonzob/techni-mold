<script lang="ts">
	import { SERVICES } from '$lib/config/site';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';

	const icons: Record<string, string> = {
		cad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
		mold: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
		cnc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
		edm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
		repair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
		prototype: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
		insert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>`,
		sonic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
	};
</script>

<section class="section-padding bg-white" aria-label="Our services">
	<div class="section-container flex flex-col items-center">
		<SectionHeading
			label="What We Do"
			title="Full-Service Injection Molding & Machining"
			subtitle="From CAD design through production molding and secondary operations — everything under one roof in Gardena, CA."
		/>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
			{#each SERVICES as service}
				<a
					href="/services#{service.id}"
					class="group bg-brand-section-alt border border-gray-200 rounded-sm p-6 hover:border-brand-yellow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm flex flex-col justify-center"
				>
					<div
						class="w-10 h-10 text-brand-yellow mb-4 group-hover:scale-110 transition-transform duration-200"
					>
						{@html icons[service.icon]}
					</div>
					<h3 class="text-brand-navy font-semibold mb-2 text-sm">{service.title}</h3>
					<p class="text-brand-muted text-xs leading-relaxed">{service.description}</p>
				</a>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<a href="/services" class="btn-secondary">View All Services</a>
		</div>
	</div>
</section>
