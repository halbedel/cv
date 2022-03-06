<script lang="ts">
	import { scrollTo, scrollRef } from "svelte-scrolling";
</script>

<section use:scrollRef={"home"}>
	<div>
		<h1>
			Hi,<br />
			I'm Bernhard!
		</h1>
		<p>Full Stack Developer / Software Architect</p>
		<a href="#about" use:scrollTo={"about"}>next</a>
	</div>
</section>
<section use:scrollRef={"about"}>
	<h1>About</h1>
	<a href="#home" use:scrollTo={"home"}>got to top</a>
</section>

<style lang="postcss">
	section {
		@apply h-screen w-screen;
		@apply flex flex-col items-center justify-center;
	}
</style>
