<script>
	import { tilt } from '$lib/tilt';
	import motorhub from '$lib/assets/motorhub_icon.jpg';
	import Card from './Card.svelte';
	let hovering = false;
	const handleMouseEnter = () => {
		hovering = true;
	};
	const handleMouseLeave = () => {
		hovering = false;
	};
</script>

<div
	id="timeline"
	class="relative space-y-8 before:absolute before:bg-black before:w-0.5 rounded-lg before:h-full before:left-1/2 before:right-0 before:bottom-0 before:top-0 text-white"
>
	<div class="flex justify-center items-center w-full cursor-pointer" id="checkpoint">
		<div
			class=" w-1/2 text-right pr-8"
			role="contentinfo"
			use:tilt={{ scale: 1.05, factor: 0.01 }}
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
		>
			<div
				class="relative bg-[#212A3C]/50 max-w-xl h-[300px] ml-auto p-4 rounded-lg text-left border-black border-2 shadow-xl flex justify-center items-center gap-4"
			>
				<img src={motorhub} alt="An alt text" class="w-36 h-36 rounded-xl shadow-xl" />
				<div class="">
					<div>
						<h2 class="text-xl font-bold">Fullstack Developer</h2>
						<div>tag</div>
					</div>
					<div class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
							/>
						</svg>
						<p>October 2024 - Present</p>
					</div>
				</div>
				{#if hovering}
					<Card />
				{/if}
			</div>
		</div>

		<div class="absolute top-0 rounded-full ml-0.5 w-5 bg-blue-100 h-5"></div>
		<div class="w-1/2" />
	</div>

	<div class="flex justify-center items-center w-full">
		<div class="w-1/2"></div>
		<div class="absolute rounded-full w-5 bg-blue-100 h-5"></div>
		<div id="checkpoint" class="w-1/2 text-left pl-8">
			<div class="">
				<h2>Day 1: Helsinki, Finland</h2>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
		</div>
	</div>
	<div class="flex justify-center items-center w-full">
		<div id="checkpoint" class=" w-1/2 text-right pr-8">
			<div class="">
				<h2>Day 1: Helsinki, Finland</h2>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
		</div>

		<div class="absolute rounded-full ml-0.5 w-5 bg-blue-100 h-5"></div>
		<div class="w-1/2" />
	</div>
</div>
