<script>
	import { slideScale } from '$lib/slideScale';
	import { tilt } from '$lib/tilt';
	import { typewriter } from '$lib/typewriter';

	import { onMount } from 'svelte';

	let reverse = false;
	let visible = false;

	onMount(async () => {
		visible = true;
	});
</script>

{#if visible}
	<!-- My profile image -->
	<div
		id="card"
		transition:slideScale={{ y: '100%', duration: 400, delay: 2 }}
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
			<div class="font-bold text-white text-2xl">
				Patrawi | <span transition:typewriter={{ speed: 1 }}>Full-Stack Developer & IT Officer</span
				>
			</div>
			<p class="text-white animate-pulse">Driving innovation in the public sector</p>
		</div>
	</div>
{/if}
