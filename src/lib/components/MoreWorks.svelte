<script lang="ts">
	import CreativeCard from '$lib/components/CreativeCard.svelte';
	import JumpText from '$lib/components/JumpText.svelte';
	import { allCreatives } from '$lib/data/creatives';

	let { labels }: { labels: [string, string] } = $props();

	const items = labels.map((label) => allCreatives.find((item) => item.label === label)!);
</script>

<section class="bg-[#F5F3F0] px-6 py-16 sm:px-10 sm:py-20 lg:px-[120px] lg:py-[120px]">
	<h2
		class="font-display text-center text-5xl font-black tracking-tight text-black uppercase sm:text-7xl lg:text-8xl"
	>
		<JumpText text="More Works" />
	</h2>

	<div class="mx-auto mt-14 grid max-w-[1800px] grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-20">
		{#each items as item, i (item.label)}
			<CreativeCard item={{ ...item, aspect: 'aspect-[3/2]' }} direction={i === 0 ? 'left' : 'right'} />
		{/each}
	</div>
</section>
