<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import MoreWorks from '$lib/components/MoreWorks.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import JumpText from '$lib/components/JumpText.svelte';
	import { SplitReveal } from '$lib/motion-core';

	const meta = [
		{ label: 'Client', value: 'Flipopay' },
		{ label: 'Year', value: '@2024' },
		{ label: 'Services', value: 'Product Design' }
	];
</script>

<SiteNav />

<header class="flow-root bg-[#F9F9F9] px-6 pb-7 sm:px-10 sm:pb-9 lg:px-[120px] lg:pb-10">
	<h1
		class="font-display mt-10 text-center text-5xl font-black tracking-tight text-black uppercase sm:mt-16 sm:text-7xl lg:mt-20 lg:text-8xl"
	>
		<JumpText text="Design System" />
	</h1>

	<div class="h-16 sm:h-24 lg:h-32"></div>
</header>

<main class="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-[120px] lg:py-24">
	<div class="mx-auto grid max-w-[1800px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
		<div class="lg:max-w-md">
			<p class="text-sm font-bold tracking-wide text-black uppercase">Project Overview</p>

			<div class="mt-5 space-y-5 text-sm leading-relaxed text-black/70 uppercase">
				<p>
					<SplitReveal mode="lines" triggerOnScroll>
						Built a comprehensive design system from the ground up, creating a consistent and
						scalable foundation across the product. The system covers everything from foundational
						elements and buttons to complex data visualizations, dashboards, and reusable product
						components.
					</SplitReveal>
				</p>
				<p>
					<SplitReveal mode="lines" triggerOnScroll>
						I defined components, states, variants, typography, spacing, colors, and interaction
						patterns to create a cohesive experience across different flows and use cases. I also
						designed complex dashboard patterns and charts, ensuring that data-heavy experiences
						remain clear, intuitive, and easy to navigate.
					</SplitReveal>
				</p>
			</div>

			<dl class="mt-10 space-y-0">
				{#each meta as row (row.label)}
					<div class="flex items-center justify-between border-b border-black/15 py-4">
						<dt class="text-xs font-bold tracking-wide text-black uppercase">{row.label}</dt>
						<dd class="text-xs font-medium tracking-wide text-black uppercase">{row.value}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="group overflow-hidden rounded-[12px]" style="aspect-ratio: 2960 / 1944;">
			<img
				src="/images/DD.png"
				alt="Design System"
				class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			/>
		</div>
	</div>

	<div class="mx-auto mt-10 grid max-w-[1800px] grid-cols-1 gap-6 sm:grid-cols-2">
		<div class="group overflow-hidden rounded-[12px] bg-black/5" style="aspect-ratio: 3300 / 3000;">
			<img
				src="/images/ererer.png"
				alt="Toast notification component variants"
				class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			/>
		</div>
		<div class="group overflow-hidden rounded-[12px] bg-black/5" style="aspect-ratio: 3300 / 3000;">
			<img
				src="/images/456.png"
				alt="Chip and segmented tab component variants"
				class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			/>
		</div>
	</div>

	<div class="mx-auto mt-6 max-w-[1800px]">
		<div class="group overflow-hidden rounded-[12px] bg-black/5" style="aspect-ratio: 6720 / 3000;">
			<img
				src="/images/2222.png"
				alt="Search filter, form, and calendar component variants"
				class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			/>
		</div>
	</div>
</main>

<MoreWorks labels={['Flipopay', 'Ulaa']} />

<Footer />
