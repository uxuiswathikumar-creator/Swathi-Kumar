<script lang="ts">
	import { onMount } from 'svelte';
	import { lockScroll, unlockScroll } from '$lib/scrollLock';
	import JumpText from '$lib/components/JumpText.svelte';
	import { getLenis } from '$lib/lenis';
	import { WaterRipple } from '$lib/motion-core';

	let pinWrapEl: HTMLDivElement;
	let rowEl: HTMLDivElement;
	let swathiEl: HTMLSpanElement;
	let kumarEl: HTMLSpanElement;

	const WORD_SLIDE_MS = 900;
	const IMAGE_POP_DELAY = 650;
	const IMAGE_POP_MS = 850;
	const START_IMG_SCALE = 0.15;

	let prefersReduced = $state(false);
	let wordsReady = $state(false);
	let imagePop = $state(false);
	let subtextReady = $state(false);
	let heroSettled = $state(false);

	let baseImgWidthPx = $state(320);
	let imgLeftPx = $state(0);
	let growWidthPx = $state(600);
	let maxExtra = $state(140);
	let stage4Progress = $state(0);

	let scrollLocked = false;

	const introTransitioning = $derived(!heroSettled);
	const swathiTranslate = $derived(wordsReady ? -maxExtra * stage4Progress : -96);
	const kumarTranslate = $derived(wordsReady ? maxExtra * stage4Progress : 96);
	const imgWidthPx = $derived(baseImgWidthPx + (growWidthPx - baseImgWidthPx) * stage4Progress);
	const imgRotateDeg = $derived(8 * (1 - stage4Progress));

	function releaseScrollLock() {
		if (!scrollLocked) return;
		scrollLocked = false;
		unlockScroll();
	}

	function computeNaturalImageLeft() {
		if (!swathiEl || !kumarEl) return;
		const swathiRight = swathiEl.offsetLeft + swathiEl.offsetWidth;
		const kumarLeft = kumarEl.offsetLeft;
		imgLeftPx = (swathiRight + kumarLeft) / 2;
	}

	function captureStage4Base() {
		const vw = window.innerWidth;
		maxExtra = Math.min(vw * 0.14, 200);
		growWidthPx = Math.max(baseImgWidthPx + 40, Math.min(vw * 0.42, 860));
	}

	function updateStage4() {
		if (!heroSettled || !pinWrapEl) return;
		const rect = pinWrapEl.getBoundingClientRect();
		const pinDistance = pinWrapEl.offsetHeight - window.innerHeight;
		stage4Progress = pinDistance > 0 ? Math.min(1, Math.max(0, -rect.top / pinDistance)) : 0;
	}

	function onImageTransitionEnd(e: TransitionEvent) {
		if (e.propertyName === 'scale' && !heroSettled) {
			heroSettled = true;
			captureStage4Base();
			updateStage4();
			releaseScrollLock();
		}
	}

	function handleResize() {
		if (!heroSettled) {
			computeNaturalImageLeft();
		} else {
			baseImgWidthPx = Math.min(Math.max(window.innerWidth * 0.29, 176), 688);
			computeNaturalImageLeft();
			captureStage4Base();
			updateStage4();
		}
	}

	onMount(() => {
		prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		baseImgWidthPx = Math.min(Math.max(window.innerWidth * 0.29, 176), 688);
		computeNaturalImageLeft();

		const timers: number[] = [];
		let rafId = 0;
		const unsubScroll = getLenis()?.on('scroll', updateStage4);
		window.addEventListener('resize', handleResize);

		if (prefersReduced) {
			wordsReady = true;
			imagePop = true;
			subtextReady = true;
			heroSettled = true;
			captureStage4Base();
		} else {
			scrollLocked = true;
			lockScroll();
			rafId = requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					wordsReady = true;
				});
			});
			timers.push(
				window.setTimeout(() => {
					imagePop = true;
				}, IMAGE_POP_DELAY),
				window.setTimeout(() => {
					subtextReady = true;
				}, 500)
			);
		}

		return () => {
			unsubScroll?.();
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(rafId);
			timers.forEach(clearTimeout);
			releaseScrollLock();
		};
	});
</script>

<div bind:this={pinWrapEl} class="relative {prefersReduced ? 'h-screen' : 'h-[200vh]'}">
	<header
		id="home"
		class="sticky top-0 flex h-screen flex-col overflow-hidden bg-[#F9F9F9] px-6 pb-7 sm:px-10 sm:pb-9 lg:px-[120px] lg:pb-10"
	>
		<div
			class="relative mx-auto flex w-full max-w-[1800px] flex-1 items-center"
			bind:this={rowEl}
		>
			<h1
				class="font-display relative z-0 flex w-full items-center justify-between leading-[0.82] font-black tracking-tight text-black uppercase"
				style="font-size: clamp(2.75rem, 10.5vw, 12.5rem);"
			>
				<span
					bind:this={swathiEl}
					style="translate: {swathiTranslate}px 0; transition: {introTransitioning
						? `translate ${WORD_SLIDE_MS}ms cubic-bezier(0.22,1,0.36,1)`
						: 'none'};"
				>
					<JumpText text="Swathi" />
				</span>
				<span
					bind:this={kumarEl}
					style="translate: {kumarTranslate}px 0; transition: {introTransitioning
						? `translate ${WORD_SLIDE_MS}ms cubic-bezier(0.22,1,0.36,1)`
						: 'none'};"
				>
					<JumpText text="Kumar" />
				</span>
			</h1>

			<div
				ontransitionend={onImageTransitionEnd}
				class="pointer-events-auto absolute z-10 aspect-[3432/3412] -translate-x-1/2 -translate-y-1/2"
				style="left: {imgLeftPx}px; top: 50%; width: {imgWidthPx}px; rotate: {imgRotateDeg}deg; opacity: {imagePop
					? 1
					: 0}; scale: {imagePop ? 1 : START_IMG_SCALE}; transition: {introTransitioning
					? `opacity ${IMAGE_POP_MS}ms ease-out, scale ${IMAGE_POP_MS}ms cubic-bezier(0.16,1,0.3,1)`
					: 'none'};"
			>
				<WaterRipple src="/images/myprofile.png" class="grayscale" />
			</div>
		</div>

		<div
			class="relative mx-auto flex w-full max-w-[1800px] shrink-0 flex-col justify-between gap-8 transition-[opacity,translate] duration-700 ease-out sm:flex-row sm:items-start"
			style="opacity: {subtextReady ? 1 : 0}; translate: 0 {subtextReady ? '0' : '1rem'};"
		>
			<div class="max-w-[19rem] space-y-6 text-xs sm:text-sm">
				<div>
					<p class="font-bold tracking-wide uppercase">Product Designer</p>
					<p class="mt-2 leading-relaxed text-black/70 uppercase">
						Crafting digital products that solve real business problems
					</p>
				</div>
				<div>
					<p class="font-bold tracking-wide uppercase">Chennai, India</p>
					<p class="mt-2 leading-relaxed text-black/70 uppercase">Available for<br />Full-time · Freelance</p>
				</div>
			</div>

			<ul class="space-y-1 text-right text-xs font-medium tracking-wide text-black uppercase sm:text-sm">
				<li>Product Design</li>
				<li>UI/UX Design</li>
				<li>Design Systems</li>
				<li>Fintech</li>
			</ul>
		</div>
	</header>
</div>
