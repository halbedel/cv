<div class="slider">
	<div class="slides">
		{#each Array(10) as _, index}
			<div>{index}</div>
		{/each}
	</div>

	<div class="description">Description</div>
</div>

<style lang="postcss">
	.slider {
		@apply flex flex-col w-full;
	}

	.slides {
		@apply flex justify-between;
	}

	.description {
		@apply flex items-center justify-center;
	}
</style>
