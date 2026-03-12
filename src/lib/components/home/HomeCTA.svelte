<script lang="ts">
	import { SITE } from '$lib/config/site';
</script>

<section class="bg-brand-navy section-padding" aria-label="Call to action">
	<div class="section-container text-center">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">
			Start Your Project
		</p>
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
			Ready to Bring Your Part to Life?
		</h2>
		<p class="text-white/70 text-lg mb-6 max-w-xl mx-auto">
			Get a fast, competitive quote from our experienced team. We serve customers across Los Angeles
			and all of Southern California.
		</p>
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
			<a href="/contact" class="btn-primary text-base px-8 py-4">Request a Quote</a>
			<a href="tel:{SITE.phoneTel}" class="btn-secondary text-base px-8 py-4">
				Call {SITE.phone}
			</a>
		</div>
		<p class="text-white/40 text-sm">
			1–2 week delivery on molding &nbsp;·&nbsp; ISO Compliant &nbsp;·&nbsp; Made in America
		</p>
	</div>
</section>
