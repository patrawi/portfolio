<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
	<Header />
	<section class="flex-grow">
		<slot />
	</section>
	<Footer />
</div>
