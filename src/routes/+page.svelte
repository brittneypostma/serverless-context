<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<pre>{JSON.stringify(data.context, null, 2)}</pre>

<style>
	pre {
		max-width: 20ch;
	}
</style>
