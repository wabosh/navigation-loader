<script lang="ts">
	import '../app.css';

	import NavigationLoader from '$lib/svelte/NavigationLoader.svelte';
	import { page } from '$app/stores';

	$: target = $page.url.pathname == '/next' ? '/?load' : '/next?load';

	// Color
	let color = '#66cc8a';
	$: loaderColor = (color.length - 1) % 3 === 0 ? color : '#66cc8a';

	$: {
		if (!color.startsWith('#')) {
			color = '#' + color;
		}
		if (color.length > 7) {
			color = color.slice(0, 7);
		}
	}

	// Size (bar height)
	let size = '4';
	let loaderSize = Number(size.replace(/\D/g, ''));

	$: {
		loaderSize = Number(size.replace(/\D/g, ''));
		size = loaderSize.toString();
	}

	// Duration
	let duration = '1000';
	let loaderDuration = Number(duration.replace(/\D/g, ''));

	$: {
		loaderDuration = Number(duration.replace(/\D/g, ''));
		duration = loaderDuration.toString();
	}

	// Code preview
	$: codePreview = `
<!-- +layout.svelte -->
\<script\>
	import { NavigationLoader } from '@wabosh/navigation-loader';
\</script\>

<NavigationLoader 
	animationDuration={${loaderDuration}} 
	color="${loaderColor}" 
	height={${loaderSize}} 
/>`.split('\n');
</script>

<NavigationLoader animationDuration={loaderDuration} color={loaderColor} height={loaderSize} />
<div class="p-8 flex flex-col gap-8 justify-between min-h-screen">
	<!-- Controls -->
	<div class="flex flex-col lg:flex-row gap-8 justify-between">
		<h1 class="self-center mr-4">Navigation Loader</h1>

		<div class="flex flex-col lg:flex-row gap-8">
			<div class="form-control w-full max-w-xs">
				<label for="color" class="label">
					<span class="label-text">Color</span>
				</label>
				<input
					name="color"
					type="text"
					placeholder="#66cc8a"
					class="input input-bordered w-full max-w-xs"
					bind:value={color}
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<label for="size" class="label">
					<span class="label-text">Size</span>
				</label>
				<div class="relative">
					<input
						name="size"
						type="text"
						class="input input-bordered w-full max-w-xs"
						bind:value={size}
					/>
					<span class="absolute right-4 top-1/2 -translate-y-1/2 leading-none text-base-300"
						>px</span
					>
				</div>
			</div>

			<div class="form-control w-full max-w-xs">
				<label for="duration" class="label">
					<span class="label-text">Animation Duration</span>
				</label>
				<div class="relative">
					<input
						name="duration"
						type="text"
						class="input input-bordered w-full max-w-xs"
						bind:value={duration}
					/>
					<span class="absolute right-4 top-1/2 -translate-y-1/2 leading-none text-base-300"
						>ms</span
					>
				</div>
				<label for="duration" class="label">
					<span class="label-text">How long does each animation step take</span>
				</label>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-4">
		<div>
			<h2>Step 1: Install</h2>
			<div class="mockup-code">
				<pre data-prefix="$">npm install @wabosh/navigation-loader</pre>
				<div class="divider">OR</div>
				<pre data-prefix="$">yarn add @wabosh/navigation-loader</pre>
				<div class="divider">OR</div>
				<pre data-prefix="$">pnpm add @wabosh/navigation-loader</pre>
			</div>
		</div>
		<div>
			<h2>Step 2: Import</h2>
			<div class="mockup-code">
				{#each codePreview as codeLine, i}
					{#if i > 0}
						<pre data-prefix={i}>{codeLine}</pre>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<slot />

	<!-- Navigation -->
	<a href={target} class="btn btn-primary">Try out!</a>
</div>
