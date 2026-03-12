<script lang="ts">
	import { SITE } from '$lib/config/site';
</script>

<section
	class="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy"
	aria-label="Hero"
>
	<!-- Background photo -->
	<div
		class="absolute inset-0 bg-cover bg-top"
		style="background-image: url('/images/60_sample.JPG');"
		aria-hidden="true"
	></div>

	<!-- Navy overlay -->
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>

	<!-- Accent gradient -->
	<div
		class="absolute top-0 right-0 w-1/2 h-full opacity-10"
		style="background: radial-gradient(ellipse at 80% 20%, #c49a00 0%, transparent 60%);"
		aria-hidden="true"
	></div>

	<!-- Left accent bar -->
	<div class="absolute left-0 top-0 h-full w-1 bg-brand-yellow opacity-60" aria-hidden="true"></div>

	<div class="section-container relative z-10 py-24">
		<div class="max-w-3xl">
			<p class="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-4">
				Gardena, CA — Los Angeles & Southern California
			</p>

			<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
				Precision Plastic<br />
				<span class="text-brand-yellow">Injection Molding</span><br />
				Experts
			</h1>

			<p class="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
				{SITE.name} delivers custom injection molding, mold design, CNC machining, and EDM services
				for aerospace, medical, automotive, and industrial applications. ISO compliant. NSF certified.
				Made in America.
			</p>

			<div class="flex flex-wrap gap-4 mb-10">
				<a href="/contact" class="btn-primary text-base px-8 py-4">Get a Quote</a>
				<a href="/services" class="btn-secondary text-base px-8 py-4">Our Services</a>
			</div>

			<div class="flex flex-wrap gap-x-8 gap-y-3">
				{#each ['60+ Years Experience', 'ISO Compliant', 'NSF Certified', '1–2 Week Delivery'] as badge}
					<div class="flex items-center gap-2 text-sm text-white/60">
						<span class="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true"
						></span>
						{badge}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
