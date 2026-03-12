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
	class="bg-white border border-gray-200 rounded-sm p-6
		{hover ? 'hover:border-brand-yellow transition-colors duration-200 hover:shadow-sm' : ''}
		{extraClass}"
>
	{@render children()}
</div>
