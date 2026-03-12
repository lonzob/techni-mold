<script lang="ts">
	import { NAV_LINKS, SITE } from '$lib/config/site';

	const year = new Date().getFullYear();
</script>

<footer class="bg-brand-charcoal border-t border-brand-steel/40">
	<div class="section-container py-12 md:py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
			<!-- Brand column -->
			<div>
				<div class="flex items-center gap-3 mb-4">
					<img src="/images/tm-icon-lg.png" alt="{SITE.name}" class="h-10 w-auto" />
					<div class="leading-tight">
						<span class="font-bold text-white text-sm tracking-wide uppercase">Techni-Mold</span>
						<span class="block text-white/50 text-[10px] tracking-widest uppercase">& Engineering, Inc.</span>
					</div>
				</div>
				<p class="text-brand-muted text-sm leading-relaxed mb-4">
					A leader in plastic injection molding, mold design, and CNC machining in Los Angeles since
					the 1960s.
				</p>
				<div class="flex gap-2 flex-wrap">
					<span
						class="text-[10px] font-bold uppercase tracking-wider bg-brand-steel/50 text-brand-yellow px-2 py-1 rounded-sm"
						>ISO Compliant</span
					>
					<span
						class="text-[10px] font-bold uppercase tracking-wider bg-brand-steel/50 text-brand-yellow px-2 py-1 rounded-sm"
						>NSF Certified</span
					>
					<span
						class="text-[10px] font-bold uppercase tracking-wider bg-brand-steel/50 text-brand-yellow px-2 py-1 rounded-sm"
						>Made in America</span
					>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
				<ul class="space-y-2" role="list">
					{#each NAV_LINKS as link}
						<li>
							<a
								href={link.href}
								class="text-brand-muted hover:text-brand-yellow text-sm transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
				<address class="not-italic space-y-3 text-sm text-brand-muted">
					<div>
						<p>{SITE.address.street}</p>
						<p>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
					</div>
					<div>
						<a
							href="tel:{SITE.phoneTel}"
							class="hover:text-brand-yellow transition-colors block"
							aria-label="Call us"
						>
							Phone: {SITE.phone}
						</a>
						<p>Fax: {SITE.fax}</p>
					</div>
					<a
						href="mailto:{SITE.email}"
						class="hover:text-brand-yellow transition-colors block"
						aria-label="Email us"
					>
						{SITE.email}
					</a>
				</address>
			</div>
		</div>

		<div class="border-t border-brand-steel/40 pt-6 flex flex-col sm:flex-row justify-between gap-2">
			<p class="text-brand-muted text-xs">
				&copy; {year}
				{SITE.name}. All rights reserved.
			</p>
			<p class="text-brand-muted text-xs">Gardena, CA 90247 — Serving Southern California</p>
		</div>
	</div>
</footer>
