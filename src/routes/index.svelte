<script lang="ts">
	import { scrollTo, scrollRef } from "svelte-scrolling";
	import Intro from "$lib/intro.svelte";
	import Experience from "$lib/experience.svelte";
	import Skills from "$lib/skills.svelte";
	import Private from "$lib/private.svelte";

	const sections = [
		{ name: "intro", component: Intro },
		{ name: "experience", component: Experience },
		{ name: "skills", component: Skills },
		{ name: "private", component: Private },
	];
</script>

{#each sections as section, index (index)}
	<section use:scrollRef={section.name}>
		<svelte:component this={section.component} />

		{#if index === sections.length - 1}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="mt-6" use:scrollTo={sections[0].name}>go to top</a>
		{:else}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="mt-6" use:scrollTo={sections[index + 1].name}>next</a>
		{/if}
	</section>
{/each}

<style lang="postcss">
	section {
		@apply h-screen;
		@apply flex flex-col items-center justify-center;
	}
</style>
