<script lang="ts">
	import type { IProjectCard } from '$lib/types';
	import { getImgUrl, images } from '$lib/util';

	export let project: IProjectCard;
	const { excerpt, image, link, tags, title } = project;
</script>

<a
	href={link}
	target="_blank"
	class="relative w-full rounded-lg bg-white drop-shadow-lg flex flex-col sm:flex-row no-underline hover:scale-105 hover:shadow-lg transition-all duration-400"
>
	<img src={getImgUrl(image)} alt={title} class="w-full sm:max-w-xs sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none" />
	<div class="w-full p-4 flex flex-col gap-4">
		<div class="flex-grow">
			<p class="text-xl sm:text-2xl font-bold">{project.title}</p>
			<p class="text-sm sm:text-base">{excerpt}</p>
		</div>
		<div class="">
			{#each tags as tag}
				<div
					class="hover:text-white rounded-lg py-1 sm:py-2 px-2 sm:px-4 border-2 border-black text-black inline-block hover:bg-black transition-colors duration-400 text-xs sm:text-sm"
				>
					<p class="">{tag}</p>
				</div>
			{/each}
		</div>
	</div>
</a>
