<script lang="ts">
	import { slideScale } from '$lib/slideScale';
	import { tilt } from '$lib/tilt';

	import { onMount } from 'svelte';

	import { typeIn } from '$lib/typeIn';
	import { fade } from 'svelte/transition';
	import { text } from '@sveltejs/kit';

	let reverse = false;
	let visible = false;
	let i = -1;

	const roles = ['Full-Stack Developer', 'IT Officer', 'Content Writer', 'Pirawat'];

	onMount(() => {
		visible = true;
		const defaultTime = roles[0].length / (0.75 * 0.01);

		setTimeout(() => {
			i = 0;
		}, 400);

		const interval = setInterval(
			() => {
				if (i < roles.length - 1) {
					i += 1;
					console.log('hello');
				}
			},
			i === -1 ? 4000 : roles[i].length / (0.75 * 0.01)
		);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if visible}
	<div
		id="card"
		transition:slideScale={{ y: '100%', duration: 400 }}
		use:tilt={{ scale: 1.1, reverse }}
		class="fixed inset-0 m-auto max-h-dvh max-w-[100vw] w-[600px] h-[300px] flex flex-col rounded-xl overflow-hidden shadow-lg border-[0.5px] border-solid border-black/30"
	>
		<div
			id="icon"
			class="bg-[#212A3C]/75 p-4 flex gap-2 items-center rounded-t-xl h-[50px] border-b-[1px] border-b-solid border-b-black/30"
		>
			<span class="w-3 h-3 bg-[#D94144] rounded-full hover:opacity-80 cursor-pointer"></span>
			<span class="w-3 h-3 bg-[#E0911B] rounded-full hover:opacity-80"></span>
			<span class="w-3 h-3 bg-[#19AA7A] rounded-full hover:opacity-80"></span>
		</div>
		<div
			id="content"
			class=" bg-[#31354F]/75 rounded-b-xl flex-grow p-2 flex flex-col justify-center items-center"
		>
			<!-- <div class="font-bold text-white text-2xl">
				Patrawi | <TypeWriter />
			</div> -->
			<div class="font-bold text-white text-2xl">
				Patrawi |
				{#key i}<span in:typeIn={{ speed: 0.75 }} out:fade={{ duration: 100 }}
						>{roles[i] || ''}</span
					>{/key}<span class=" inline-block w-1 h-[1.5rem] absolute mt-[5px] ml-[2px] animate-blink"
				></span>
			</div>
			<p class="text-white animate-pulse">Driving Innovation in the Public Sector</p>
		</div>
	</div>
{/if}

<style>
	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			background-color: #fff;
		}
		100% {
			opacity: 0;
		}
	}

	.animate-blink {
		animation: blink 0.8s infinite;
	}
</style>
