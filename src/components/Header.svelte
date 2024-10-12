<script lang="ts">
	import { page } from '$app/stores';

	export let y: number;

	let tabs: { name: string; href: string }[] = [
		{ name: '/Projects', href: '/projects' },
		{ name: '/About', href: '/about' },
		{ name: '/Blogs', href: 'https://patrawi.com' }
	];
</script>

<header
	class={'sticky z-[10] w-full top-0 duration-200 px-6 flex items-center justify-between ' +
		(y > 50 ? '  py-4  backdrop-blur-md ' : ' py-6 bg-transparent border-transparent')}
>
	<a class="font-medium cursor-pointer text-white" href="/">
		<b class="font-bold text-lg">Pirawat</b> <span class="">P</span>
	</a>
	<div class="sm:flex items-center gap-4 hidden">
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
</header>
