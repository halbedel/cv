<script lang="ts">
	import * as THREE from "three";
	import * as SC from "svelte-cubed";

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<div class="flex flex-col">
	<div>
		<h1>
			Hi,<br />
			I'm Bernhard!
		</h1>
		<p>Full Stack Developer / Software Architect</p>
	</div>

	<div class="flex justify-center relative h-44">
		​<SC.Canvas antialias alpha>
			<SC.Mesh
				geometry={new THREE.BoxGeometry()}
				material={new THREE.MeshStandardMaterial({ color: 0xb48ead })}
				rotation={[0, spin, spin + 0.04]}
			/>
			<SC.PerspectiveCamera position={[1, 1, 3]} zoom={1.5} />
			<SC.OrbitControls
				enableZoom={false}
				enableDamping={true}
				dampingFactor={0.05}
			/>
			<SC.AmbientLight intensity={0.75} />
			<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />
		</SC.Canvas>
	</div>
</div>
