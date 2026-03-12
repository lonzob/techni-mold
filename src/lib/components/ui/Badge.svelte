<script lang="ts">
	let {
		label,
		variant = 'default'
	}: {
		label: string;
		variant?: 'default' | 'yellow' | 'outline';
	} = $props();

	const classes = {
		default: 'bg-gray-100 text-brand-muted',
		yellow: 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30',
		outline: 'border border-gray-300 text-brand-muted'
	}[variant];
</script>

<span class="inline-block text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider {classes}">
	{label}
</span>
