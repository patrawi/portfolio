<script lang="ts">
	import { onMount } from 'svelte';
	export let text = '';
	export let delay = 200;
	export let type = 'text';
	export let once = false;
	let isTextRevealed: HTMLElement;
	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			for (let entry of entries) {
				if (once) {
					if (entry.isIntersecting) {
						entry.target.classList.add('reveal-slide');
					}
				} else entry.target.classList.toggle('reveal-slide', entry.isIntersecting);
			}
		});
		observer.observe(isTextRevealed);
		return () => {
			observer.unobserve(isTextRevealed);
		};
	});
</script>

<div bind:this={isTextRevealed} class="relative inline-block">
	{#if text !== ''}
		<p id={type} class={`opacity-0  delay-${delay} `}>
			{@html text}
		</p>
	{/if}
	<slot id={type} />
</div>
