<script lang="ts">
	let { text, class: className = '' }: { text: string; class?: string } = $props();
	const words = text.split(' ');
</script>

<span class={className}>
	{#each words as word, wi (wi)}
		{#if wi > 0}<span>{' '}</span>{/if}<span class="inline-block whitespace-nowrap"
			>{#each word.split('') as ch, ci (ci)}<span class="jump-letter inline-block">{ch}</span
				>{/each}</span
		>
	{/each}
</span>

<style>
	.jump-letter {
		transition: translate 480ms cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.jump-letter:hover {
		translate: 0 -0.3em;
	}
	@media (prefers-reduced-motion: reduce) {
		.jump-letter {
			transition: none;
		}
		.jump-letter:hover {
			translate: 0 0;
		}
	}
</style>
