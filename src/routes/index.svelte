<script lang="ts">
	import { scrollTo, scrollRef } from "svelte-scrolling";
	import * as THREE from "three";
	import * as SC from "svelte-cubed";

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<section use:scrollRef={"home"}>
	<div class="flex flex-col">
		<div>
			<h1>
				Hi,<br />
				I'm Bernhard!
			</h1>
			<p>Full Stack Developer / Software Architect</p>
			<a href="#about" use:scrollTo={"about"}>next</a>
		</div>

		<div class="flex justify-center relative h-44">
			​<SC.Canvas antialias alpha>
				<SC.Mesh
					geometry={new THREE.BoxGeometry()}
					material={new THREE.MeshStandardMaterial({ color: 0xb48ead })}
					rotation={[0, spin, 0]}
				/>
				<SC.PerspectiveCamera position={[1, 1, 3]} zoom={1.5} />
				<SC.OrbitControls enableZoom={false} />
				<SC.AmbientLight intensity={0.75} />
				<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
				​</SC.Canvas
			>
		</div>
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
