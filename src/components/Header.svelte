<script lang="ts">
	import { page } from '$app/stores';

	export let y: number;

	let mobileMenuOpen = false;

	let tabs: { name: string; href: string }[] = [
		{ name: '/Projects', href: '/projects' },
		{ name: '/About', href: '/about' },
		{ name: '/Blogs', href: 'https://patrawi.com' }
	];
</script>

<header
	class={'sticky z-[10] w-full top-0 duration-200 px-4 sm:px-6 flex items-center justify-between ' +
		(y > 50 ? '  py-4  backdrop-blur-md ' : ' py-6 bg-transparent border-transparent')}
>
	<a class="font-medium cursor-pointer text-white" href="/">
		<b class="font-bold text-lg">Pirawat</b> <span class="">P</span>
	</a>

	<!-- Desktop Navigation -->
	<div class="hidden sm:flex items-center gap-4">
		{#each tabs as { name, href } (name)}
			<a
				{href}
				target={name === '/Blogs' ? '_blank' : ''}
				class={`text-white hover:text-black/50   ${$page.url.pathname === href ? 'p-1 rounded-md shadow-md bg-slate-200/25' : ''}`}
			>
				<p>{name}</p>
			</a>
		{/each}
		<button
			class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
		>
			<div
				class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
			/>
			<h4 class="relative z-9">Get in touch</h4>
		</button>
	</div>

	<!-- Mobile Menu Button -->
	<button
		class="sm:hidden text-white p-2"
		on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
		aria-label="Toggle menu"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			{#if mobileMenuOpen}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			{:else}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			{/if}
		</svg>
	</button>
</header>

<!-- Mobile Menu -->
{#if mobileMenuOpen}
	<div
		class="sm:hidden fixed top-16 left-0 right-0 z-[9] bg-[#212A3C]/95 backdrop-blur-md border-b border-white/10"
	>
		<div class="flex flex-col p-4 gap-4">
			{#each tabs as { name, href } (name)}
				<a
					{href}
					target={name === '/Blogs' ? '_blank' : ''}
					class={`text-white hover:text-black/50 ${$page.url.pathname === href
						? 'p-2 rounded-md shadow-md bg-slate-200/25'
						: ''}`}
					on:click={() => (mobileMenuOpen = false)}
				>
					<p>{name}</p>
				</a>
			{/each}
			<a
				href="/#contact"
				class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950 text-center"
				on:click={() => (mobileMenuOpen = false)}
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
				/>
				<h4 class="relative z-9">Get in touch</h4>
			</a>
		</div>
	</div>
{/if}
