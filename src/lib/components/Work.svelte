<script lang="ts">
	import CreativeCard from '$lib/components/CreativeCard.svelte';
	import JumpText from '$lib/components/JumpText.svelte';
	import { leftItems, rightItems } from '$lib/data/creatives';
</script>

<section id="creatives" class="bg-[#F9F9F9] px-6 py-16 sm:px-10 sm:py-20 lg:px-[120px] lg:py-[120px]">
	<h2
		class="font-display text-center text-5xl font-black tracking-tight text-black uppercase sm:text-7xl lg:text-8xl"
	>
		<JumpText text="My Creatives" />
	</h2>

	<div
		class="mx-auto mt-14 grid max-w-[1800px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-10 lg:mt-[160px]"
	>
		<div class="flex flex-col gap-10">
			{#each leftItems as item (item.label)}
				<CreativeCard {item} direction="left" />
			{/each}
		</div>

		<div class="flex flex-col gap-10">
			{#each rightItems as item (item.label)}
				<CreativeCard {item} direction="right" />
			{/each}
		</div>
	</div>
</section>
