<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<div class=" container mx-auto relative flex flex-col w-full text-sm sm:text-base h-full">
	<Header />
	<section class="flex-grow px-8">
		<slot />
	</section>
	<Footer />
</div>
