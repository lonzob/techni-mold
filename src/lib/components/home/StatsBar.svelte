<script lang="ts">
	const stats = [
		{ value: '60+', label: 'Years of Experience', detail: 'Founded in the 1960s' },
		{ value: 'ISO', label: 'Compliant', detail: 'Quality management systems' },
		{ value: 'NSF', label: 'Certified', detail: 'Safety & public health' },
		{ value: '1–2wk', label: 'Delivery on Molding', detail: 'Fast turnaround times' }
	];
</script>

<section class="bg-brand-yellow py-10" aria-label="Key statistics">
	<div class="section-container">
		<dl class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-brand-navy/20">
			{#each stats as stat}
				<div class="text-center md:px-6">
					<dt class="sr-only">{stat.label}</dt>
					<div class="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
					<div class="text-white font-bold text-sm uppercase tracking-wide">{stat.label}</div>
					<div class="text-white/60 text-xs mt-0.5">{stat.detail}</div>
				</div>
			{/each}
		</dl>
	</div>
</section>
