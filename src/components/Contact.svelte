<script>
	import TextReveal from './TextReveal.svelte';
</script>

<div id="contact" class="p-8 mx-auto flex justify-between space-x-10 rounded-xl bg-[#212A3C]/75">
	<div class=" text-white space-y-4 w-1/2">
		<div class="text-4xl">
			<TextReveal text="Love To Hear From You," />
			<TextReveal text="Get In Touch 👋" delay={600} />
		</div>
		<p>
			Send me a message, and I'll respond as quickly as I can. My email addresses are
			<strong>pirawat.w@led.mail.go.th</strong> and <strong>pirawatpatrawi@gmail.com</strong>
		</p>
	</div>
	<form class="w-1/2 space-y-4">
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="name"
			type="text"
			placeholder="Your name"
			required
		/>

		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="email"
			type="text"
			placeholder="Your email"
			required
		/>

		<textarea
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="email"
			placeholder="Your message"
			required
			rows={10}
		/>
		<div class="text-right">
			<button
				type="submit"
				class=" inline-flex gap-4 items-center px-4 py-2 rounded-sm transition-colors hover:bg-purple-400 bg-purple-200 shadow-md shadow-purple-400/20"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="size-5"
				>
					<path
						d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z"
					/>
				</svg>

				<p>Send</p>
			</button>
		</div>
	</form>
</div>
