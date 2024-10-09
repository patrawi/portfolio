<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { IWorkExperience } from '$lib/types';
	export let job;
	const { company, duration, position, responsibilities } = job as IWorkExperience;
</script>

<div
	transition:slide={{ duration: 500 }}
	class="absolute left-0 top-0 bg-gray-800/85 backdrop-blur-xl h-full *:ml-auto p-4 rounded-lg text-left w-full overflow-y-auto overflow-x-hidden scrollbar-thin"
>
	<div class="space-y-2">
		<div id="position">
			<h2 class="text-xl font-bold">{position}</h2>
			<p class="text-orange-400">@{company}</p>
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
			<p>{duration}</p>
		</div>
		<ul class="list-disc px-4 space-y-1 text-sm break-words">
			{#each responsibilities as responsibilitie}
				<li>
					{responsibilitie}
				</li>
			{/each}
		</ul>
	</div>
</div>
