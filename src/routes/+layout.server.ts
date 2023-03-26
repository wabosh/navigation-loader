import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	try {
		console.log('Start load');
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		return {
			status: 'ok'
		};
	} finally {
		console.log('Loading done');
	}
}) satisfies LayoutServerLoad;
