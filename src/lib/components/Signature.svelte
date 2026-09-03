<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<img
	src="/images/signature 1 [Vectorized].svg"
	alt="Swathi Kumar's signature"
	class="signature {className}"
/>

<style>
	.signature {
		animation: signature-write-in 3.2s ease-in-out infinite;
	}

	@keyframes signature-write-in {
		0% {
			clip-path: inset(0 100% 0 0);
		}
		35% {
			clip-path: inset(0 0 0 0);
		}
		80% {
			clip-path: inset(0 0 0 0);
		}
		100% {
			clip-path: inset(0 100% 0 0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.signature {
			clip-path: inset(0 0 0 0);
			animation: none;
		}
	}
</style>
