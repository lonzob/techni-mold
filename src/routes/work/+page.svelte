<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let selected = $state<{ src: string; alt: string } | null>(null);

	function open(img: { src: string; alt: string }) {
		selected = img;
	}

	function close() {
		selected = null;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}

	function next() {
		if (!selected) return;
		const idx = data.images.findIndex((i) => i.src === selected!.src);
		selected = data.images[(idx + 1) % data.images.length];
	}

	function prev() {
		if (!selected) return;
		const idx = data.images.findIndex((i) => i.src === selected!.src);
		selected = data.images[(idx - 1 + data.images.length) % data.images.length];
	}
</script>

<svelte:window onkeydown={onKeydown} />

<!-- Hero -->
<section class="relative bg-brand-navy border-b border-gray-200 py-16 md:py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-top" style="background-image: url('/images/IMG_0026.JPG');" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>
	<div class="section-container relative z-10">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">Photo Gallery</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
		<p class="text-white/70 text-lg max-w-2xl">
			A sample of the injection molded parts, tooling, and precision machined components we've
			produced for customers across aerospace, medical, automotive, and industrial sectors.
		</p>
	</div>
</section>

<!-- Gallery -->
<section class="section-padding bg-white">
	<div class="section-container">
		{#if data.images.length === 0}
			<div class="text-center py-20 text-brand-muted">
				<p class="text-lg font-medium mb-2">No images yet</p>
				<p class="text-sm">Add images to <code class="bg-gray-100 px-1 rounded">static/images/work/</code> to populate the gallery.</p>
			</div>
		{:else}
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
				{#each data.images as img}
					<button
						onclick={() => open(img)}
						class="group relative aspect-square overflow-hidden rounded-sm border border-gray-200 hover:border-brand-yellow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
						aria-label="View {img.alt}"
					>
						<img
							src={img.src}
							alt={img.alt}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-200 flex items-center justify-center">
							<span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-semibold uppercase tracking-wider">View</span>
						</div>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Lightbox -->
{#if selected}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
		onclick={close}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
	>
		<!-- Close -->
		<button
			onclick={close}
			class="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none"
			aria-label="Close"
		>&#x2715;</button>

		<!-- Prev -->
		{#if data.images.length > 1}
			<button
				onclick={(e) => { e.stopPropagation(); prev(); }}
				class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-2"
				aria-label="Previous image"
			>&#8249;</button>
			<button
				onclick={(e) => { e.stopPropagation(); next(); }}
				class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-2"
				aria-label="Next image"
			>&#8250;</button>
		{/if}

		<!-- Image -->
		<img
			src={selected.src}
			alt={selected.alt}
			class="max-h-[85vh] max-w-full object-contain rounded-sm"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
