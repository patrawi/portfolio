<script lang="ts">
	import { tilt } from '$lib/tilt';
	import Card from './ExperienceCard.svelte';
	import experienceData from '$lib/data/experience.json';
	import { getImgUrl } from '$lib/util';
	const { workExperience } = experienceData;

	let hoverStates: boolean[] = workExperience.map(() => false);

	const handleMouseEnter = (index: number) => {
		hoverStates[index] = true;

		hoverStates = [...hoverStates];
	};
	const handleMouseLeave = (index: number) => {
		hoverStates[index] = false;
		hoverStates = [...hoverStates];
	};
</script>

<div
	id="timeline"
	class="relative space-y-8 before:absolute before:bg-black before:w-0.5 rounded-lg
	before:h-full before:left-1/2 before:right-0 before:bottom-0 before:top-0 text-white"
>
	{#each workExperience as job, i}
		<div class="flex justify-center items-center w-full cursor-pointer" id="checkpoint">
			<div
				class={` w-1/2   ${i % 2 === 0 ? 'text-right pr-8' : ''}`}
				use:tilt={{ scale: 1.05, factor: 0.01 }}
				role="contentinfo"
				on:mouseenter={() => handleMouseEnter(i)}
				on:mouseleave={() => handleMouseLeave(i)}
			>
				{#if i % 2 == 0}
					<div
						class="relative bg-[#212A3C]/50 max-w-xl h-[300px] ml-auto p-4 rounded-lg text-right border-black border-2 shadow-xl flex justify-center items-center gap-4"
					>
						<img
							src={getImgUrl(job.image)}
							alt="An alt text"
							class="w-36 h-36 rounded-xl shadow-xl"
						/>

						{#if hoverStates[i]}
							<Card {job} />
						{/if}
					</div>
				{/if}
			</div>

			<div
				class={`absolute rounded-full ml-0.5 w-5 bg-blue-100 h-5 ${i === 0 ? 'top-0' : ''}`}
			></div>
			<div
				class={` w-1/2   ${i % 2 !== 0 ? 'text-left pl-8' : ''}`}
				role="contentinfo"
				use:tilt={{ scale: 1.05, factor: 0.01 }}
				on:mouseenter={() => handleMouseEnter(i)}
				on:mouseleave={() => handleMouseLeave(i)}
			>
				{#if i % 2 !== 0}
					<div
						class="relative bg-[#212A3C]/50 max-w-xl h-[300px] ml-auto p-4 rounded-lg text-left border-black border-2 shadow-xl flex justify-center items-center gap-4"
					>
						<img
							src={getImgUrl(job.image)}
							alt="An alt text"
							class="w-36 h-36 rounded-xl shadow-xl"
						/>

						{#if hoverStates[i]}
							<Card {job} />
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
