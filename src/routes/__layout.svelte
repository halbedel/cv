<script lang="ts">
	import "../styles/app.css";
	import { setGlobalOptions } from "svelte-scrolling";
	import { expoOut } from "svelte/easing";

	setGlobalOptions({
		easing: expoOut,
		offset: 0,
		duration: 800,
	});
</script>

<slot />
