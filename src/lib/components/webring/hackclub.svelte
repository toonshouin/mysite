<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { initWebring } from './hackclub';

	onMount(async () => {
		if (!browser) return;
		await initWebring();
	});
</script>

<div
	id="webring-wrapper"
	class="my-1.5 flex flex-col lg:flex-row items-center justify-center lg:space-x-1"
>
	<a
		href="https://webring.hackclub.com/"
		id="previousBtn"
		class="text-[24px] text-[#8492a6]/80 transition-colors duration-500 hover:text-[#8492a6]"
		title="Previous">‹</a
	>
	<a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring"
		><img
			class="mx-1 inline-block h-9 w-9"
			src="https://assets.hackclub.com/icon-rounded.svg"
			alt="Hack Club Webring"
		/></a
	>
	<a
		href="https://webring.hackclub.com/"
		id="nextBtn"
		class="text-[24px] text-[#8492a6]/80 transition-colors duration-500 hover:text-[#8492a6]"
		title="Next">›</a
	>
</div>

<style>
	@media (max-width: 767px) {
		#webring-wrapper {
			max-width: 50px;
		}
	}
</style>
