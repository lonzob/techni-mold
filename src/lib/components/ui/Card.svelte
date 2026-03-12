<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: extraClass = '',
		hover = true,
		children
	}: {
		class?: string;
		hover?: boolean;
		children: Snippet;
	} = $props();
</script>

<div
	class="bg-brand-charcoal border border-brand-steel/40 rounded-sm p-6
		{hover ? 'hover:border-brand-yellow/40 transition-colors duration-200' : ''}
		{extraClass}"
>
	{@render children()}
</div>
