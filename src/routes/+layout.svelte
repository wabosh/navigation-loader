<script lang="ts">
	import '../app.css';

	import NavigationLoader from '$lib/svelte/NavigationLoader.svelte';
</script>

<NavigationLoader animationDuration={1000} color="#fa8e0e" />
<div class="p-4 grid grid-cols-4 gap-4 bg-blue-200 m-4 rounded-xl">
	<div class="flex flex-col">
		<h2>Height</h2>
	</div>
	<div class="flex flex-col">
		<h2>Color</h2>
	</div>
	<div class="flex flex-col">
		<h2>Progress percentage</h2>
	</div>
	<div class="flex flex-col">
		<h2>Duration</h2>
	</div>
</div>
<slot />
