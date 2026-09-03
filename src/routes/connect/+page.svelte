<script lang="ts">
	import SiteNav from '$lib/components/SiteNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { WaterRipple } from '$lib/motion-core';
	import JumpText from '$lib/components/JumpText.svelte';
	import emailjs from '@emailjs/browser';
	import {
		PUBLIC_EMAILJS_SERVICE_ID,
		PUBLIC_EMAILJS_TEMPLATE_ID,
		PUBLIC_EMAILJS_PUBLIC_KEY
	} from '$env/static/public';

	let photoEl: HTMLDivElement;
	let revealed = $state(false);
	let formEl: HTMLFormElement;
	let sendState = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

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

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (sendState === 'sending' || !formEl) return;
		sendState = 'sending';
		try {
			await emailjs.sendForm(PUBLIC_EMAILJS_SERVICE_ID, PUBLIC_EMAILJS_TEMPLATE_ID, formEl, {
				publicKey: PUBLIC_EMAILJS_PUBLIC_KEY
			});
			sendState = 'sent';
			formEl.reset();
		} catch (err) {
			console.error('EmailJS send failed:', err);
			sendState = 'error';
		}
	}
</script>

<SiteNav />

<header class="flow-root bg-[#F9F9F9] px-6 pb-7 sm:px-10 sm:pb-9 lg:px-[120px] lg:pb-10">
	<h1
		class="font-display mt-10 text-center text-5xl font-black tracking-tight text-black uppercase sm:mt-16 sm:text-7xl lg:mt-20 lg:text-8xl"
	>
		<JumpText text="Connect Me" />
	</h1>

	<div class="h-16 sm:h-24 lg:h-32"></div>
</header>

<main class="bg-[#F5F3F0] px-6 py-16 sm:px-10 sm:py-20 lg:px-[120px] lg:py-24">
	<div class="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
		<div>
			<h2 class="font-display text-5xl font-black tracking-tight text-[#1B1B4D] sm:text-6xl">
				Hi , Mate
			</h2>

			<form class="mt-[80.5px] space-y-[80.5px]" onsubmit={onSubmit} bind:this={formEl}>
				<div class="border-b border-black/25 pb-6">
					<input
						type="text"
						name="name"
						placeholder="NAME"
						required
						class="w-full bg-transparent text-lg text-black uppercase placeholder:text-black/80 focus:outline-none"
					/>
				</div>
				<div class="border-b border-black/25 pb-6">
					<input
						type="tel"
						name="mobile"
						placeholder="YOUR MOBILE NO"
						required
						class="w-full bg-transparent text-lg text-black uppercase placeholder:text-black/80 focus:outline-none"
					/>
				</div>
				<div class="border-b border-black/25 pb-6">
					<input
						type="email"
						name="email"
						placeholder="YOUR MAIL"
						required
						class="w-full bg-transparent text-lg text-black uppercase placeholder:text-black/80 focus:outline-none"
					/>
				</div>
				<div class="border-b border-black/25 pb-6">
					<input
						type="text"
						name="message"
						placeholder="MESSAGE"
						required
						class="w-full bg-transparent text-lg text-black uppercase placeholder:text-black/80 focus:outline-none"
					/>
				</div>

				<button
					type="submit"
					disabled={sendState === 'sending'}
					class="w-full bg-black py-5 text-center text-base font-medium tracking-wide text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
				>
					{sendState === 'sending' ? 'Sending…' : 'Submit'}
				</button>

				{#if sendState === 'sent'}
					<p class="text-sm font-medium tracking-wide text-black uppercase">
						Thanks — your message is on its way.
					</p>
				{:else if sendState === 'error'}
					<p class="text-sm font-medium tracking-wide text-red-600 uppercase">
						Something went wrong. Please try again.
					</p>
				{/if}
			</form>
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
</main>

<Footer />
