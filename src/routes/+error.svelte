<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — Techni-Mold & Engineering</title>
</svelte:head>

<section class="section-padding section-container flex flex-col items-center justify-center text-center min-h-[60vh]">
	<p class="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2">
		{$page.status}
	</p>
	<h1 class="text-4xl font-bold text-brand-navy mb-4">
		{$page.status === 404 ? 'Page Not Found' : 'Something Went Wrong'}
	</h1>
	<p class="text-brand-muted text-lg mb-8 max-w-md">
		{$page.status === 404
			? "The page you're looking for doesn't exist or has been moved."
			: 'An unexpected error occurred. Please try again.'}
	</p>
	<a href="/" class="btn-primary">Back to Home</a>
</section>
