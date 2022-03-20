<script lang="ts">
	import type { SvelteComponent } from "svelte";

	export let icon: typeof SvelteComponent;
	export let size: "l" | "base" | "xs" = "base";
</script>

<span
	class={`${$$props.class} inline-flex`}
	class:h-14={size === "l"}
	class:w-14={size === "l"}
	class:h-5={size === "base"}
	class:w-5={size === "base"}
	class:h-3={size === "xs"}
	class:w-3={size === "xs"}
>
	<svelte:component this={icon} />
</span>
