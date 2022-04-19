<script lang="ts">
	import { skillsKey } from "$lib/context";
	import { setContext } from "svelte";
	import type { Skill } from ".";
	import Slider from "$lib/Slider/Slider.svelte";
	import TagCloud from "$lib/TagCloud/TagCloud.svelte";

	export let skills: Skill[];

	setContext(skillsKey, skills);
</script>

<h1>Skills</h1>
<div class="w-full mt-5">
	<TagCloud />
</div>
<Slider />

<a sveltekit:prefetch href="/private">next</a>
