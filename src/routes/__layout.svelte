<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ params, fetch, url }) => {
		const response = await fetch("/jokes");

		return {
			props: {
				joke: await response.text(),
				url,
			},
		};
	};
</script>

<script lang="ts">
	import "../styles/app.css";
	import PageTransition from "$lib/PageTransition/PageTransition.svelte";

	const fetchJoke = async () => {
		const response = await fetch("/jokes");
		joke = await response.text();
	};

	export let joke: string;
	export let url: URL;
</script>

<div class="container mx-auto">
	<PageTransition {url}>
		<slot />
	</PageTransition>
</div>

<footer class="py-6 flex items-center flex-col bg-nord1">
	{@html joke}

	<p class="text-xs text-center">
		Not funny? <button on:click={fetchJoke}>[try again!]</button>
	</p>
</footer>
