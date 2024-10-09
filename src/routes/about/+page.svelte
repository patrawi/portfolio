<script>
	import profile from '$lib/assets/test.webp?enhanced';
	import Timeline from '../../components/Timeline.svelte';
</script>

<section class="space-y-8">
	<div class="font-bold">
		<p class="drop-shadow-xl text-right uppercase text-white text-5xl mb-8">about me</p>
	</div>
	<div id="content" class="flex flex-col lg:flex lg:flex-row items-center justify-center gap-20">
		<div class="">
			<enhanced:img src={profile} alt="An alt text" class="max-w-sm h-auto rounded-xl shadow-xl" />
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
			<p class="uppercase text-5xl">Experience</p>
			<p class="max-w-md indent-6">
				I have more than 3 years of work experience and counting. Here are some companies I have had
				the privilege to work at.
			</p>
		</div>
		<Timeline />
	</div>
</section>

<style>
</style>
