<script lang="ts">
	let {
		label,
		variant = 'default'
	}: {
		label: string;
		variant?: 'default' | 'yellow' | 'outline';
	} = $props();

	const classes = {
		default: 'bg-brand-steel/50 text-brand-muted',
		yellow: 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20',
		outline: 'border border-brand-steel text-brand-muted'
	}[variant];
</script>

<span class="inline-block text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider {classes}">
	{label}
</span>
