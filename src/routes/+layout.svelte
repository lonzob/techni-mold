<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MetaTags from '$lib/components/seo/MetaTags.svelte';
	import { buildLocalBusinessSchema } from '$lib/utils/structured-data';
	import { SITE } from '$lib/config/site';
	import type { PageMeta } from '$lib/types/seo';

	let { children } = $props();

	const defaultMeta: PageMeta = {
		title: `Plastic Injection Molding Los Angeles | ${SITE.name}`,
		description:
			'Custom plastic injection molding, mold design, and CNC machining in Gardena, CA. 60+ years experience. ISO compliant, NSF certified. Serving Los Angeles and Southern California.',
		canonical: SITE.baseUrl,
		keywords: 'plastic injection molding Los Angeles, injection molding Southern California'
	};

	const jsonLd = buildLocalBusinessSchema();
</script>

<MetaTags meta={$page.data.meta ?? defaultMeta} {jsonLd} />

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
