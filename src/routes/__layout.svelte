<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ params, fetch }) => {
		const response = await fetch("/jokes");
		return {
			props: {
				joke: await response.text(),
			},
		};
	};
</script>

<script lang="ts">
	import "../styles/app.css";
	import { setGlobalOptions } from "svelte-scrolling";
	import { expoOut } from "svelte/easing";

	setGlobalOptions({
		easing: expoOut,
		offset: 0,
		duration: 800,
	});

	const fetchJoke = async () => {
		const response = await fetch("/jokes");
		joke = await response.text();
	};

	export let joke: string;
</script>

<div class="container mx-auto">
	<slot />
</div>

<footer class="py-6 flex items-center flex-col bg-nord1">
	{@html joke}

	<p class="text-xs text-center">
		Not funny? <button on:click={fetchJoke}>[try again!]</button>
	</p>
</footer>
