<script lang="ts">
	import { browser } from "$app/env";

	import { getContext, onDestroy, onMount } from "svelte";
	import TagCloud from "TagCloud";
	import type { Event } from "three";
	import Icon from "$lib/Icon/Icon.svelte";
	import ChevronDown from "$lib/Icon/icons/ChevronDown.svelte";
	import ChevronUp from "$lib/Icon/icons/ChevronUp.svelte";
	import type { Skill } from "src/routes/skills";
	import { skillsKey } from "$lib/context";

	let tagCloud: HTMLDivElement;

	const tagClick = (e: Event) => {
		if (e.target.className === "tagcloud--item") {
			alert(e.target.innerText);
		}
	};

	const skills = getContext<Skill[]>(skillsKey);

	onMount(() => {
		const container = ".tagcloud";
		const texts = skills.map((s) => s.name);
		const options = {
			radius: tagCloud.clientWidth / 2,
			keep: false,
			initSpeed: "fast",
			maxSpeed: "fast",
		};

		TagCloud(container, texts, options);

		document.addEventListener("click", tagClick);
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener("click", tagClick);
		}
	});
</script>

<div
	bind:this={tagCloud}
	class="tagcloud max-w-[500px] mx-auto my-5 relative overflow-hidden md:overflow-visible"
>
	<div class="overlay">
		<Icon
			icon={ChevronUp}
			size="l"
			class="-rotate-45 translate-y-1 translate-x-1 left-0 top-0 icon"
		/>
		<Icon
			icon={ChevronUp}
			size="l"
			class="rotate-45 translate-y-1 -translate-x-1 right-0 top-0 icon"
		/>
		<Icon
			icon={ChevronDown}
			size="l"
			class="rotate-45 -translate-y-1 translate-x-1 left-0 bottom-0 icon"
		/>
		<Icon
			icon={ChevronDown}
			size="l"
			class="-rotate-45 -translate-y-1 -translate-x-1 right-0 bottom-0 icon"
		/>
	</div>
</div>

<style lang="postcss">
	.overlay {
		@apply absolute left-0 right-0 top-0 bottom-0 content-[''];
		@apply rounded-full border-2 border-nord4 transition-all duration-300 pointer-events-none scale-105;
		@apply opacity-0 md:opacity-100;

		:global(.icon) {
			@apply absolute -m-6 items-center justify-center;
			@apply opacity-0;
		}
	}

	:global(div.tagcloud:hover > .overlay, div.tagcloud:focus
			> .overlay, div.tagcloud:active > .overlay) {
		@apply scale-100 opacity-100;
	}

	:global(div.tagcloud:hover .icon, div.tagcloud:focus
			.icon, div.tagcloud:active .icon) {
		animation: bounce2 1s infinite;
	}

	:global(span.tagcloud--item) {
		@apply antialiased hover:cursor-pointer hover:bg-nord14 hover:p-2 hover:rounded-md hover:text-nord0 select-none;
	}

	@keyframes bounce2 {
		0%,
		100% {
			transform: translateY(var(--tw-translate-y))
				translateX(var(--tw-translate-x)) rotate(var(--tw-rotate));
			opacity: 0.5;
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateY(0) translateX(0) rotate(var(--tw-rotate));
			opacity: 1;
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
</style>
