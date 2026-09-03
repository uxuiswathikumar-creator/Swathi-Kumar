<script lang="ts">
	import './layout.css';
	import 'lenis/dist/lenis.css';
	import favicon from '$lib/assets/favicon.svg';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { initLenis, scrollToHash, resetScrollTop } from '$lib/lenis';

	let { children } = $props();

	// initialized synchronously at the top level (not inside an $effect) so it exists
	// before any child component's own effects run — components like Header lock/unlock
	// scroll via Lenis on mount, and would silently no-op against a not-yet-created instance.
	if (browser) {
		initLenis();
	}

	afterNavigate(({ to, type }) => {
		const hash = to?.url.hash;
		if (hash) {
			// let the new page's layout (fonts, measurements) settle before scrolling to it
			requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(hash)));
		} else if (type !== 'popstate') {
			// plain navigation to a new page (e.g. clicking a project card) — jump to the
			// top instantly. Skipped on back/forward so the browser's own scroll restoration
			// for that history entry isn't fought.
			resetScrollTop();
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
