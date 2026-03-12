<script lang="ts">
	import { INDUSTRIES } from '$lib/config/site';
	import { Factory } from 'lucide-svelte';
</script>

<section class="bg-brand-section-alt border-y border-gray-200 py-12 overflow-hidden" aria-label="Industries we serve">
	<div class="section-container mb-8 text-center">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-2">Industries Served</p>
		<h2 class="text-2xl font-bold text-brand-navy">Trusted Across 20+ Sectors</h2>
	</div>

	<div class="relative" aria-label="Scrolling list of industries">
		<!-- Fade edges -->
		<div class="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-brand-section-alt to-transparent z-10 pointer-events-none" aria-hidden="true"></div>
		<div class="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-brand-section-alt to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

		<div class="flex gap-3 marquee-track" role="marquee" aria-label="Industries: {INDUSTRIES.map(i => i.name).join(', ')}">
			<!-- First set -->
			{#each INDUSTRIES as industry}
				<div class="flex items-center gap-2 shrink-0 bg-brand-steel/30 border border-brand-steel/50 rounded-sm px-4 py-2">
					<Factory size={13} class="text-brand-yellow shrink-0" aria-hidden="true" />
					<span class="text-sm font-medium text-brand-navy whitespace-nowrap">{industry.name}</span>
				</div>
			{/each}
			<!-- Duplicate for seamless loop -->
			{#each INDUSTRIES as industry}
				<div class="flex items-center gap-2 shrink-0 bg-brand-steel/30 border border-brand-steel/50 rounded-sm px-4 py-2" aria-hidden="true">
					<Factory size={13} class="text-brand-yellow shrink-0" aria-hidden="true" />
					<span class="text-sm font-medium text-brand-navy whitespace-nowrap">{industry.name}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-8 text-center">
		<a href="/industries" class="text-brand-yellow text-sm font-semibold hover:underline">
			See all industries →
		</a>
	</div>
</section>

<style>
	.marquee-track {
		animation: marquee 30s linear infinite;
		width: max-content;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			flex-wrap: wrap;
			justify-content: center;
			width: auto;
		}
	}
</style>
