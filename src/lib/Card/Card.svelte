<script>
	import Icon from "$lib/Icon/Icon.svelte";
	import LockClosed from "$lib/Icon/icons/LockClosed.svelte";
</script>

<div class="shadow-lg">
	<div class="bg-nord1 rounded-lg overflow-hidden flex flex-col md:flex-row">
		<img
			src="./assets/Passfoto.jpeg"
			class="h-full max-h-64 object-cover"
			alt="card"
		/>
		<div class="relative">
			<div class="p-8 sm:p-9 md:p-7 xl:p-9">
				<slot />
			</div>
			<div class="flex items-center bottom-5 right-5 absolute">
				<button>
					<Icon icon={LockClosed} />
				</button>
			</div>
		</div>
	</div>
</div>
