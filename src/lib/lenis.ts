import Lenis from 'lenis';

let lenis: Lenis | undefined;

// nav bar height (SiteNav) so smooth-scrolled anchors don't tuck their target under it
const ANCHOR_OFFSET = -88;

export function initLenis() {
	if (lenis) return lenis;
	lenis = new Lenis({
		autoRaf: true,
		anchors: { offset: ANCHOR_OFFSET }
	});
	return lenis;
}

export function getLenis() {
	return lenis;
}

export function scrollToHash(hash: string) {
	if (!lenis || !hash) return;
	lenis.scrollTo(hash, { offset: ANCHOR_OFFSET });
}

export function resetScrollTop() {
	// Lenis tracks its own scroll target independent of window.scrollY — on an SPA route
	// change, a plain window.scrollTo(0, 0) gets fought and dragged back by Lenis's own
	// raf loop unless its internal target is reset too. `immediate` skips the easing.
	lenis?.scrollTo(0, { immediate: true, force: true });
}

export function destroyLenis() {
	lenis?.destroy();
	lenis = undefined;
}
