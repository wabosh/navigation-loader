import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
	const simulateLoading = url.searchParams.has("load");

	try {
		console.log('Start load');
		if (simulateLoading) {
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});
		}
		return {
			status: 'ok'
		};
	} finally {
		console.log('Loading done');
	}
}) satisfies LayoutServerLoad;
