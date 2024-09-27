<script lang="ts">
	import { onMount } from 'svelte';

	let caret: HTMLSpanElement;
	let textDisplayed = '';
	let timeout: ReturnType<typeof setTimeout>;
	const roles = ['Full-Stack Developer', 'IT Officer'];
	const sleep = (ms: number) => {
		return new Promise((resolve) => {
			timeout = setTimeout(resolve, ms);
		});
	};
	onMount(() => {
		typewriter(roles);
	});
	const blink = (iterations: number) => {
		return caret.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], {
			iterations,
			duration: 600,
			delay: 150,
			easing: 'steps(2)'
		}).finished;
	};
	async function typewriter(textArr: string[]) {
		if (!textArr.length) return;

		while (true) {
			for (let j = 0; j < textArr.length; j++) {
				const isLast = j === textArr.length - 1;
				const text = textArr[j]!;

				for (let k = 0; k <= text.length; k++) {
					textDisplayed = text.slice(0, k);
					await sleep(100);
				}

				await blink(3 - 0.5);
				for (let k = 0; k <= text.length; k++) {
					textDisplayed = text.slice(0, text.length - k);
					await sleep(100);
				}

				clearTimeout(timeout);
				// Finish the last iteration with text typed out
			}
			await sleep(1000);
		}
	}
</script>

<span
	>{textDisplayed}
	{#if textDisplayed.length !== 0}<span class="text-pink-300" bind:this={caret}>|</span>{/if}</span
>
