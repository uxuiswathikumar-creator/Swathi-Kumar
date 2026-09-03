<script lang="ts">
	import type { Creative } from '$lib/data/creatives';

	let { item, direction = 'left' }: { item: Creative; direction?: 'left' | 'right' } = $props();

	let rootEl: HTMLElement;
	let revealed = $state(false);

	$effect(() => {
		if (!rootEl) return;
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
			{ threshold: 0.2 }
		);
		observer.observe(rootEl);
		return () => observer.disconnect();
	});

	const offset = direction === 'left' ? '-3rem' : '3rem';
</script>

{#snippet card()}
	<div class="relative overflow-hidden rounded-[12px] {item.aspect}">
		<img
			src={item.src}
			alt={item.label}
			class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
		/>
		<img
			src={item.badge === 'arrow' ? '/images/Navigate arrow.png' : '/images/Group 2147229875.png'}
			alt=""
			class="pointer-events-none absolute top-4 right-4 h-14 w-14 origin-center scale-75 animate-[spin_10s_linear_infinite] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:h-16 sm:w-16"
		/>
	</div>
	<p class="font-display mt-4 text-base font-black tracking-[0.08em] text-black sm:text-lg">
		{item.label}
	</p>
{/snippet}

{#if item.href}
	<a
		bind:this={rootEl}
		href={item.href}
		class="group block transition-[opacity,translate] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
		style="opacity: {revealed ? 1 : 0}; translate: {revealed ? '0' : offset} 0;"
	>
		{@render card()}
	</a>
{:else}
	<div
		bind:this={rootEl}
		class="group transition-[opacity,translate] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
		style="opacity: {revealed ? 1 : 0}; translate: {revealed ? '0' : offset} 0;"
	>
		{@render card()}
	</div>
{/if}
