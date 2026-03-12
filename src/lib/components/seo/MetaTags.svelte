<script lang="ts">
	import type { PageMeta } from '$lib/types/seo';
	import { SITE } from '$lib/config/site';

	let { meta, jsonLd }: { meta: PageMeta; jsonLd?: string } = $props();

	const ogImage = $derived(meta.ogImage ?? SITE.defaultOgImage);
	const fullOgImage = $derived(ogImage.startsWith('http') ? ogImage : `${SITE.baseUrl}${ogImage}`);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	{#if meta.keywords}
		<meta name="keywords" content={meta.keywords} />
	{/if}
	<link rel="canonical" href={meta.canonical} />
	{#if meta.noindex}
		<meta name="robots" content="noindex,nofollow" />
	{/if}

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:url" content={meta.canonical} />
	<meta property="og:image" content={fullOgImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
	<meta name="twitter:image" content={fullOgImage} />

	<!-- JSON-LD Structured Data -->
	{#if jsonLd}
		{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
	{/if}
</svelte:head>
