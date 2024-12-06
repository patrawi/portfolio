<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	let y: number = 0;
	let innerWidth = 0;
	let innerHeight = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="relative flex flex-col w-full text-sm sm:text-base min-h-screen">
	<Header {y} />
	<section class="px-8 container mx-auto flex-grow">
		<slot />
	</section>

	<Footer />
</div>
