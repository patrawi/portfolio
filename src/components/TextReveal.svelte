<script lang="ts">
	import { onMount } from 'svelte';
	export let text = '';
	export let delay = 200;
	export let once = false;
	let isTextRevealed: HTMLElement;
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			for (let entry of entries) {
				if (once) {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal');
					}
				} else entry.target.classList.toggle('reveal', entry.isIntersecting);
			}
		});
		observer.observe(isTextRevealed);
		return () => {
			observer.unobserve(isTextRevealed);
		};
	});
</script>

<div bind:this={isTextRevealed} class="relative inline-block">
	<p id="text" class="opacity-0" style="animation-delay: {delay}ms">
		{@html text}
	</p>
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			id="cover"
			class="absolute inset-0 bg-current transform-gpu -translate-x-[101%]"
			style="animation-delay: {delay}ms"
		/>
	</div>
</div>
