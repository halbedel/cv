<script lang="ts">
	import Icon from "$lib/Icon/Icon.svelte";
	import Mail from "$lib/Icon/icons/Mail.svelte";
	import Home from "$lib/Icon/icons/Home.svelte";
	import Phone from "$lib/Icon/icons/Phone.svelte";
	import Cake from "$lib/Icon/icons/Cake.svelte";
	import Card from "$lib/Card/Card.svelte";
	import LockClosed from "$lib/Icon/icons/LockClosed.svelte";
</script>

<div class="flex flex-col">
	<div>
		<h1>Bernhard Mühl</h1>
		<p>Full Stack Developer / Software Architect</p>

		<Card>
			<div class="flex flex-col items-start">
				<div class="flex items-center mb-4">
					<Icon icon={Mail} />
					<a href="mailto:bernhard.muehl@gmail.com" class="ml-4"
						>bernhard.muehl@gmail.com</a
					>
				</div>
				<div class="flex items-center mb-4">
					<Icon icon={Phone} />
					<a href="tel:+436605090135" class="ml-4">+43 660 *********</a>
				</div>
				<div class="flex items-center mb-4">
					<Icon icon={Home} />
					<span class="ml-4">
						************** ******<br />
						1090 Vienna<br />
					</span>
				</div>
				<div class="flex items-center">
					<Icon icon={Cake} />
					<span class="ml-4">********</span>
				</div>
			</div>
		</Card>

		<p class="text-xs">
			Use unlock button (<Icon icon={LockClosed} size="xs" />) to show sensitive
			information.
		</p>
	</div>
</div>

<a sveltekit:prefetch href="/experience">next</a>
