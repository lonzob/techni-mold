<script lang="ts">
	import { page } from '$app/stores';
	import { NAV_LINKS, SITE } from '$lib/config/site';

	let mobileOpen = $state(false);
	const toggleMobile = () => (mobileOpen = !mobileOpen);
	const closeMobile = () => (mobileOpen = false);
</script>

<header class="sticky top-0 z-50 bg-white border-b border-gray-200">
	<div class="section-container">
		<nav class="flex items-center justify-between h-16" aria-label="Main navigation">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 group" onclick={closeMobile}>
				<div class="flex items-center gap-1">
					<!-- Geometric logo mark inspired by original interlocking blocks -->
					<div class="grid grid-cols-2 gap-0.5 w-7 h-7">
						<div class="bg-brand-yellow rounded-[2px]"></div>
						<div class="bg-brand-yellow/60 rounded-[2px]"></div>
						<div class="bg-brand-yellow/60 rounded-[2px]"></div>
						<div class="bg-brand-yellow rounded-[2px]"></div>
					</div>
				</div>
				<div class="leading-tight">
					<span class="font-bold text-brand-navy text-sm tracking-wide uppercase">Techni-Mold</span>
					<span class="block text-gray-400 text-[10px] tracking-widest uppercase"
						>& Engineering</span
					>
				</div>
			</a>

			<!-- Desktop nav -->
			<ul class="hidden md:flex items-center gap-1" role="list">
				{#each NAV_LINKS as link}
					<li>
						<a
							href={link.href}
							class="px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-150
								{$page.url.pathname === link.href
								? 'text-brand-yellow'
								: 'text-gray-500 hover:text-brand-navy'}"
							aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="ml-4">
					<a href="/contact" class="btn-primary text-sm py-2">Get a Quote</a>
				</li>
			</ul>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
				onclick={toggleMobile}
				aria-expanded={mobileOpen}
				aria-label="Toggle navigation menu"
			>
				<span
					class="block h-0.5 bg-brand-navy transition-transform duration-200 {mobileOpen
						? 'rotate-45 translate-y-2'
						: ''}"
				></span>
				<span
					class="block h-0.5 bg-brand-navy transition-opacity duration-200 {mobileOpen
						? 'opacity-0'
						: ''}"
				></span>
				<span
					class="block h-0.5 bg-brand-navy transition-transform duration-200 {mobileOpen
						? '-rotate-45 -translate-y-2'
						: ''}"
				></span>
			</button>
		</nav>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden border-t border-brand-steel/40 bg-brand-charcoal">
			<ul class="section-container py-4 flex flex-col gap-1" role="list">
				{#each NAV_LINKS as link}
					<li>
						<a
							href={link.href}
							onclick={closeMobile}
							class="block px-4 py-3 text-sm font-medium rounded-sm transition-colors
								{$page.url.pathname === link.href
								? 'text-brand-yellow bg-brand-steel/30'
								: 'text-brand-muted hover:text-white hover:bg-brand-steel/20'}"
							aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="pt-2">
					<a href="/contact" onclick={closeMobile} class="btn-primary w-full text-sm">
						Get a Quote
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
