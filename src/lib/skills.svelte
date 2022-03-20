<script lang="ts">
	import { browser } from "$app/env";

	import { onDestroy, onMount } from "svelte";
	import TagCloud from "TagCloud";
	import type { Event } from "three";
	import Icon from "./Icon/Icon.svelte";
	import ChevronDown from "./Icon/icons/ChevronDown.svelte";
	import ChevronUp from "./Icon/icons/ChevronUp.svelte";
	import Slider from "./Slider/Slider.svelte";

	let tagCloud: HTMLDivElement;

	const tagClick = (e: Event) => {
		if (e.target.className === "tagcloud--item") {
			alert(e.target.innerText);
		}
	};

	onMount(() => {
		const container = ".tagcloud";
		const texts = [
			"Vue",
			"React",
			"Svelte",
			"CSS",
			"SASS",
			"postCSS",
			"JAVA",
			"Python",
			"PHP",
			"Wordpress",
			"Spring",
			"Node",
			"Magento2",
			"Sharepoint",
			"Azure Cloud",
			"Azure DevOps",
			"Git",
			"Jenkins",
			"AWS",
			"WebGL",
			"Postgres",
			"MySQL",
			"Googel Cloud",
			"Kubernetes",
			"IaC",
		];
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

<h1>Skills</h1>
<div class="w-full mt-4">
	<div
		bind:this={tagCloud}
		class="tagcloud max-w-[500px] mx-auto my-5 relative"
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
</div>
<p>Logo Slider (TODO)</p>
<Slider />

<style lang="postcss">
	.overlay {
		@apply absolute left-0 right-0 top-0 bottom-0 content-[''];
		@apply rounded-full border-2 border-nord4 transition-all duration-300 pointer-events-none scale-105;

		:global(.icon) {
			@apply absolute -m-6 items-center justify-center;
			@apply opacity-0;
		}
	}

	:global(div.tagcloud:hover > .overlay) {
		@apply scale-100;
	}

	:global(div.tagcloud:hover .icon) {
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
