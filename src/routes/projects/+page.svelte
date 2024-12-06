<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';
	import TextReveal from '../../components/TextReveal.svelte';
	import ProjectData from '../../lib/data/project.json';
	const { projects } = ProjectData;
</script>

<section class="w-full relative">
	<div class="mb-8 space-y-2 text-white">
		<div class="font-bold drop-shadow-xl uppercase text-white text-5xl">
			<TextReveal text="Projects" />
		</div>
		<TextReveal
			text="Explore the creative ideas I've brought to life on my sharing blog! ✨






"
		/>
	</div>
	<div class="grid grid-cols-2 auto-rows-max gap-4">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
