<script lang="ts">
	import { navigating } from '$app/stores';

	export let animationDuration = 250;
	export let color: string = '#7fffd4';
	export let height = 4;

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

				// Start cleanup animation
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

<div class="container" style="--height: {height}px">
	<div
		class="loading-bar {currentState}"
		style="background-color: {color}; --duration: {animationDuration}ms"
	/>
</div>

<style lang="scss">
	.container {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100vw;
		width: 100%;
		height: var(--height);

		.loading-bar {
			display: block;
			height: 100%;
			transition: opacity ease-in-out var(--duration);

			&.waiting {
				width: 0;
				opacity: 0;
			}

			&.loading {
				transition: width cubic-bezier(0, 0.55, 0.45, 1) 20s;
				width: 50%;
				opacity: 1;
			}

			&.doneLoading {
				transition: width ease-in-out var(--duration);
				width: 100%;
				opacity: 1;
			}

			&.cleanupLoading {
				transition: opacity ease-in-out var(--duration);
				opacity: 0;
				width: 100%;
			}
		}
	}
</style>
