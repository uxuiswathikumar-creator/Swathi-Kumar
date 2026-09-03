<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte';
</script>

<div class="sticky top-0 z-30 w-full">
	<div
		class="pointer-events-none absolute inset-0 backdrop-blur-xl"
		style="mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);"
	></div>

	<div class="relative flex w-full items-center justify-between px-6 py-5 sm:px-10 sm:py-6 lg:px-[120px]">
		<a href="/" class="text-base font-black tracking-tight text-black sm:text-lg">SK-@</a>
		<NavMenu />
	</div>
</div>
