<script lang="ts">
	let {
		value,
		active = false,
		class: className = ''
	}: { value: string; active?: boolean; class?: string } = $props();

	const rollSteps = 6;

	function randomDigits() {
		return String(Math.floor(Math.random() * 100)).padStart(2, '0');
	}

	let frames = $state([value]);
	let rolling = $state(false);

	function startRoll() {
		const next = Array.from({ length: rollSteps - 1 }, randomDigits);
		next.push(value);
		rolling = false;
		frames = next;
		requestAnimationFrame(() => requestAnimationFrame(() => (rolling = true)));
	}

	function resetRoll() {
		rolling = false;
		frames = [value];
	}

	$effect(() => {
		if (active) startRoll();
		else resetRoll();
	});
</script>

<span class="roll-number {className}">
	<span
		class="roll-track"
		class:rolling
		style="--end: {(-(frames.length - 1) / frames.length) * 100}%;"
	>
		{#each frames as frame, i (i)}
			<span class="roll-frame">{frame}</span>
		{/each}
	</span>
</span>

<style>
	.roll-number {
		display: inline-block;
		height: 1em;
		overflow: hidden;
		line-height: 1;
		vertical-align: top;
	}

	.roll-track {
		display: flex;
		flex-direction: column;
	}

	.roll-track.rolling {
		animation: roll-digits 0.6s steps(5, end) forwards;
	}

	.roll-frame {
		height: 1em;
		line-height: 1;
	}

	@keyframes roll-digits {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(var(--end));
		}
	}
</style>
