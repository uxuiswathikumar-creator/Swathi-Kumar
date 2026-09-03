<script lang="ts">
	import Signature from '$lib/components/Signature.svelte';
	import { WaterRipple, SplitReveal } from '$lib/motion-core';

	let photoEl: HTMLDivElement;
	let revealed = $state(false);

	$effect(() => {
		if (!photoEl) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			revealed = true;
			return;
		}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					revealed = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(photoEl);
		return () => observer.disconnect();
	});
</script>

<section class="relative overflow-hidden bg-[#F5F3F0] px-6 py-16 sm:px-10 sm:py-24 lg:px-[120px] lg:py-32">
	<div
		class="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20"
	>
		<div class="lg:max-w-md">
			<h2 class="font-display text-2xl font-black tracking-tight text-black uppercase sm:text-3xl">
				Hi! I'm Swathi Kumar
			</h2>

			<div class="mt-6 space-y-6 text-sm leading-relaxed text-black/70 uppercase sm:text-base">
				<p>
					<SplitReveal mode="lines" triggerOnScroll>
						I'm a product designer with a strong foundation in art, combining creativity, strategy,
						and user-centered thinking to design meaningful digital experiences.
					</SplitReveal>
				</p>
				<p>
					<SplitReveal mode="lines" triggerOnScroll>
						Over the past two years, I've worked on fintech and SaaS products, designing intuitive
						interfaces, scalable design systems, and seamless user journeys. My artistic background
						helps me bring a unique visual perspective to every project, balancing aesthetics with
						functionality to create products that are both beautiful and effective.
					</SplitReveal>
				</p>
			</div>

			<Signature class="mt-10 h-14 w-36" />
		</div>

		<div class="relative">
			<div
				class="pointer-events-none absolute top-3 left-3 z-10 h-24 w-24 lg:top-0 lg:left-0 lg:h-36 lg:w-36 lg:-translate-x-1/2 lg:-translate-y-1/2"
			>
				<img
					src="/images/Circular.png"
					alt=""
					class="h-full w-full animate-[spin_16s_linear_infinite]"
				/>
			</div>

			<div class="relative aspect-[6/7] overflow-hidden rounded-[12px]" bind:this={photoEl}>
				<WaterRipple
					src="/images/myprofile.png"
					class="grayscale transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
					style="transform: scale({revealed ? 1 : 1.15});"
				/>
				<div
					class="pointer-events-none absolute inset-0 border border-white/40 bg-white/25 transition-[opacity,backdrop-filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
					style="opacity: {revealed ? 0 : 1}; backdrop-filter: blur({revealed ? 0 : 24}px);"
				></div>
			</div>
		</div>
	</div>
</section>
