<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

{#snippet tooltip(label: string)}
	<span
		class="pointer-events-none absolute bottom-full left-1/2 mb-3 origin-bottom -translate-x-1/2 translate-y-2 scale-50 rounded-md bg-white px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
	>
		{label}
		<span class="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-white"></span>
	</span>
{/snippet}

<div class="flex items-center gap-2 {className}">
	<div class="group relative">
		{@render tooltip('Instagram')}
		<a
			href="https://www.instagram.com/artique_nomad?igsi=MWFkOHhmY2RqOG9wZA%3D%3D&utm_source=qr"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Instagram"
			class="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black transition-opacity hover:opacity-80 sm:h-10 sm:w-10"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
				<rect x="2" y="2" width="20" height="20" rx="5" />
				<circle cx="12" cy="12" r="4" />
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-linecap="round" />
			</svg>
		</a>
	</div>

	<div class="group relative">
		{@render tooltip('LinkedIn')}
		<a
			href="https://www.linkedin.com/in/swathi-kumar-a88210257/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
			class="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black transition-opacity hover:opacity-80 sm:h-10 sm:w-10"
		>
			<svg viewBox="0 0 24 24" fill="currentColor" class="h-4.5 w-4.5">
				<path
					d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.86c0-1.64-.03-3.75-2.29-3.75-2.3 0-2.65 1.79-2.65 3.63V23h-4.5V8.25z"
				/>
			</svg>
		</a>
	</div>

	<div class="group relative">
		{@render tooltip('Dribbble')}
		<a
			href="https://dribbble.com/DesignGirly_4302"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Dribbble"
			class="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black transition-opacity hover:opacity-80 sm:h-10 sm:w-10"
		>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
				<circle cx="12" cy="12" r="10" />
				<path d="M5.2 8.4c4 1.6 9 1.7 13.4.3" />
				<path d="M4.3 14.9c5-1 10.4-.4 14.6 2.6" />
				<path d="M9.7 3c3 3.7 4.8 8.4 4.9 13.3" />
			</svg>
		</a>
	</div>
</div>
