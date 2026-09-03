<script lang="ts">
	import Signature from '$lib/components/Signature.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import JumpText from '$lib/components/JumpText.svelte';
</script>

<footer
	id="connect"
	class="flex min-h-[85vh] flex-col bg-black px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-[120px] lg:py-14"
>
	<div class="flex flex-1 flex-col items-center justify-center text-center">
		<h2 class="font-display text-6xl font-black tracking-tight uppercase sm:text-7xl lg:text-8xl">
			<a href="/connect"><JumpText text="Let's Talk Mate" /></a>
		</h2>

		<Signature class="mt-10 h-16 w-40 invert sm:h-20 sm:w-48" />
	</div>

	<div class="flex shrink-0 items-center justify-between">
		<span class="text-sm font-black tracking-tight sm:text-base">SK-@ 2026</span>
		<SocialLinks />
	</div>
</footer>
