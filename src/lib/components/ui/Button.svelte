<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		variant = 'primary',
		href,
		type = 'button',
		class: extraClass = '',
		children,
		...rest
	}: {
		variant?: 'primary' | 'secondary' | 'ghost';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		children: Snippet;
		[key: string]: unknown;
	} = $props();

	const classes = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		ghost: 'btn-ghost'
	}[variant];
</script>

{#if href}
	<a {href} class="{classes} {extraClass}" {...rest}>
		{@render children()}
	</a>
{:else}
	<button {type} class="{classes} {extraClass}" {...rest}>
		{@render children()}
	</button>
{/if}
