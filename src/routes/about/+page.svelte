<script>
	import profile from '$lib/assets/test.webp?enhanced';
	import { slide } from 'svelte/transition';
	import Timeline from '../../components/Timeline.svelte';
	import TextReveal from '../../components/TextReveal.svelte';
	import ContentReveal from '../../components/ContentReveal.svelte';
	let intersecting = false;
</script>

<section class="space-y-8">
	<div class="font-bold drop-shadow-xl text-right uppercase text-white text-5xl mb-8">
		<TextReveal text="About  Me" />
	</div>

	<div
		id="content"
		class=" relative flex flex-col lg:flex lg:flex-row items-center justify-center gap-20"
	>
		<div class="bg-gray-50 p-2 rounded-xl relative overflow-hidden">
			<ContentReveal delay={300}>
				<enhanced:img
					src={profile}
					alt="An alt text"
					id="image"
					class="  max-w-sm h-auto rounded-xl shadow-xl"
				/>
			</ContentReveal>
		</div>
		<div class="bg-[#212A3C]/75 rounded-xl max-w-sm p-8 text-white flex flex-col gap-4">
			<p>
				<span class="text-3xl">H</span>ello 👋 I'm PIrawat Wareetanyarat, an IT officer at Legal
				Execution Department dedicated to serving the public sector, born in the eastern part of
				Thailand, Rayong, with a passion for learning and sharing my ideas based on what I learn.
				Welcome to my small island in the big sea of the internet!
			</p>
			<p class="indent-6">
				My expert area is about web development, but I try to be a generalist so that I could use
				various skills to drive technology in public sector. Recently, I have been intrigue with
				data science skill and classical machine learning.
			</p>
			<p class="indent-6">
				Aside from coding, I currently learn French in Duolingo, playing tennis, reading books, and
				playing the piano.
			</p>
		</div>
	</div>
	<div id="experience" class="space-y-8">
		<div class="font-bold space-y-4 drop-shadow-xl text-white">
			<div class="font-bold drop-shadow-xl tex uppercase text-white text-5xl mb-8">
				<TextReveal text="experience" />
			</div>
			<ContentReveal
				text="I have more than 3 years of work experience and counting. Here are some companies I have
					had the privilege to work at."
				type="text"
			/>
		</div>
		<Timeline />
	</div>
</section>

<style>
</style>
