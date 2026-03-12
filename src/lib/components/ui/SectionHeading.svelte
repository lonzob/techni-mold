<script lang="ts">
	let {
		title,
		subtitle,
		align = 'center',
		label
	}: {
		title: string;
		subtitle?: string;
		align?: 'left' | 'center';
		label?: string;
	} = $props();
</script>

<div class="mb-10 md:mb-14 {align === 'center' ? 'text-center' : 'text-left'}">
	{#if label}
		<p
			class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 {align === 'center'
				? 'text-center'
				: ''}"
		>
			{label}
		</p>
	{/if}
	<h2 class="text-3xl md:text-4xl font-bold text-white leading-tight">
		{title}
	</h2>
	{#if subtitle}
		<p class="mt-4 text-brand-muted text-lg max-w-2xl leading-relaxed {align === 'center' ? 'mx-auto' : ''}">
			{subtitle}
		</p>
	{/if}
</div>
