<script lang="ts">
	import '../app.css';

	import NavigationLoader from '$lib/svelte/NavigationLoader.svelte';
</script>

<NavigationLoader animationDuration={1000} color="#fa8e0e" />
<div class="w-screen flex">asd</div>
<slot />
