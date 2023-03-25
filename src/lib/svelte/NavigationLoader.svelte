<script lang="ts">
	import { navigating } from '$app/stores';

	export let animationDuration = 800;
	export let color: string = '#7fffd4';

	let currentState: 'waiting' | 'loading' | 'doneLoading' | 'cleanupLoading' = 'waiting';

	let resetTimeout: number | undefined = undefined;

	$: {
		if ($navigating) {
			currentState = 'loading';
		} else {
			if (currentState == 'loading') {
				currentState = 'doneLoading';
				if (resetTimeout) {
					clearTimeout(resetTimeout);
					resetTimeout = undefined;
				}
				resetTimeout = window.setTimeout(() => {
					currentState = 'cleanupLoading';
					resetTimeout = window.setTimeout(() => {
						currentState = 'waiting';
					}, animationDuration);
				}, animationDuration);
			}
		}
	}
</script>

<div class="container">
	<div
		class="loading-bar {currentState}"
		style="transition: all ease-in-out {animationDuration}ms; background-color: {color}"
	/>
</div>

<style lang="scss">
	.container {
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100vw;
		width: 100%;
		height: 4px;

		.loading-bar {
			display: block;
			height: 100%;

			&.waiting {
				width: 0;
				opacity: 0;
			}

			&.loading {
				width: 20%;
				opacity: 1;
			}

			&.doneLoading {
				width: 100%;
				opacity: 1;
			}

			&.cleanupLoading {
				opacity: 0;
				width: 100%;
			}
		}
	}
</style>
