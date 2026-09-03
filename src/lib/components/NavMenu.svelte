<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import RollingNumber from '$lib/components/RollingNumber.svelte';
	import { fade } from 'svelte/transition';
	import { lockScroll, unlockScroll } from '$lib/scrollLock';

	let open = $state(false);

	function close() {
		open = false;
	}

	const links = [
		{ href: '/#home', label: 'Home', num: '01' },
		{ href: '/#creatives', label: 'Creatives', num: '02' },
		{ href: '/connect', label: 'Connect Me', num: '03' }
	];

	let hoveredHref = $state<string | null>(null);

	$effect(() => {
		if (!open) return;
		lockScroll();
		return () => {
			unlockScroll();
		};
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<button
	type="button"
	aria-label="Open menu"
	aria-expanded={open}
	onclick={() => (open = !open)}
	class="relative z-20 flex flex-col items-end gap-1.5 p-1"
>
	<span class="block h-[3px] w-8 bg-black sm:w-9"></span>
	<span class="block h-[3px] w-8 bg-black sm:w-9"></span>
</button>

{#if open}
	<button
		type="button"
		aria-label="Close menu"
		onclick={close}
		class="fixed inset-0 z-40 cursor-default bg-black/30 backdrop-blur-md"
		transition:fade
	></button>
{/if}

<aside
	class="fixed top-0 right-0 z-50 flex h-screen w-[85%] max-w-[420px] flex-col justify-between bg-black px-8 py-7 text-white transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] sm:px-10 sm:py-9 {open
		? 'translate-x-0'
		: 'translate-x-full'}"
	aria-hidden={!open}
>
	<div class="flex flex-col">
		<div class="flex justify-end">
			<button
				type="button"
				aria-label="Close menu"
				onclick={close}
				class="p-1"
			>
				<span class="block h-[3px] w-9 bg-white"></span>
			</button>
		</div>

		<nav class="mt-10 border-t border-white/20">
			{#each links as link (link.href)}
				<a
					href={link.href}
					onclick={close}
					onmouseenter={() => (hoveredHref = link.href)}
					onmouseleave={() => (hoveredHref = null)}
					class="font-display relative flex items-center justify-between overflow-hidden py-5"
				>
					<span class="flex items-center gap-3">
						<span
							class="inline-block text-xl transition-all duration-200 ease-out sm:text-2xl {hoveredHref ===
							link.href
								? 'w-[1em] translate-x-0 opacity-100'
								: '-ml-3 w-0 -translate-x-2 opacity-0'}"
						>
							&rarr;
						</span>
						<span class="text-2xl font-black tracking-tight uppercase sm:text-3xl">
							{link.label}
						</span>
					</span>

					<RollingNumber
						value={link.num}
						active={hoveredHref === link.href}
						class="text-sm font-normal tracking-normal text-white/50 sm:text-base"
					/>

					<span
						class="absolute bottom-0 left-0 h-px w-full origin-left bg-white transition-transform duration-200 ease-out {hoveredHref ===
						link.href
							? 'scale-x-100'
							: 'scale-x-0'}"
					></span>
					<span class="absolute bottom-0 left-0 h-px w-full bg-white/20"></span>
				</a>
			{/each}
		</nav>
	</div>

	<div class="flex flex-col gap-4">
		<SocialLinks />
		<span class="text-xs text-white/60 sm:text-sm">@2026 Swathi kumar</span>
	</div>
</aside>
