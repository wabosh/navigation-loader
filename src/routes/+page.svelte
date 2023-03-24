<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<a href="/test">Test</a>
<h1>{data.loaded}</h1>
