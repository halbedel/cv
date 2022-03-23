<script lang="ts">
	import { skillsKey } from "$lib/context";
	import type { Skill } from "src/routes/skills";
	import { getContext } from "svelte";

	const skills = getContext<Skill[]>(skillsKey);
</script>

<div class="slider">
	<div class="slides">
		{#each skills as skill}
			<div class="slide">
				<img src={skill.logo} alt={skill.name} />
			</div>
		{/each}

		{#each skills as skill}
			<div class="slide">
				<img src={skill.logo} alt={skill.name} />
			</div>
		{/each}
	</div>

	<div class="description">Description</div>
</div>

<style lang="postcss">
	.slider {
		@apply flex flex-col w-screen relative;
		@apply overflow-hidden;
		@apply before:left-0 before:bg-gradient-to-r after:right-0 after:bg-gradient-to-l;

		&::before,
		&::after {
			@apply content-[''] absolute top-0 bottom-0 w-20 md:w-60 from-nord0 to-transparent z-10;
		}
	}

	.slides {
		@apply flex w-[3520px];
		animation: 30s linear 0s infinite normal none running slide;
	}

	.slide {
		@apply flex flex-shrink-0 justify-center items-center w-[160px] p-10;
	}

	.description {
		@apply flex items-center justify-center;
	}

	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-4000px);
		}
	}
</style>
