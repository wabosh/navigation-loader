<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<a href="/">Zurueck</a>
<h1>{data.loaded}</h1>
