<script lang="ts">
	import { skillsKey } from "$lib/context";
	import type { Skill } from "src/routes/skills";
	import { getContext, onMount } from "svelte";

	const skills = getContext<Skill[]>(skillsKey);
	let slides: HTMLDivElement;

	onMount(() => {
		const loop = () => {
			if (slides) {
				slides.scrollLeft += 2;

				if (slides.scrollWidth - slides.clientWidth === slides.scrollLeft) {
					slides.scrollLeft = 0;
				}
			}
			requestAnimationFrame(loop);
		};
		loop();
	});
</script>

<div class="slider">
	<div class="slides" bind:this={slides}>
		{#each skills as skill}
			<div class="slide">
				<img src={skill.logo} alt={skill.name} class="w-full" />
			</div>
		{/each}
	</div>

	<div class="description">Description</div>
</div>

<style lang="postcss">
	.slider {
		@apply flex flex-col w-screen relative;
		@apply before:left-0 before:bg-gradient-to-r after:right-0 after:bg-gradient-to-l;

		&::before,
		&::after {
			@apply content-[''] absolute top-0 bottom-0 w-20 md:w-60 from-nord0 to-transparent z-10;
			@apply pointer-events-none;
			--tw-gradient-to: rgba(46, 52, 64, 0); /* fix for safari */
		}
	}

	.slides {
		@apply flex w-full overflow-y-hidden overflow-x-scroll;
		/* animation: 30s linear 0s infinite normal none running slide; */
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
	}

	.slides::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	.slide {
		@apply flex flex-shrink-0 justify-center items-center w-[160px] p-10;

		img {
			@apply hover:scale-150 transition-transform cursor-pointer select-none;
		}
	}

	.description {
		@apply flex items-center justify-center;
	}

	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
