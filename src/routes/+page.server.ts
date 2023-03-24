import type { PageServerLoad } from './$types';

export const load = (async () => {
	try {
		console.log('Start load');
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
		return {
			loaded: true
		};
	} finally {
		console.log('Loading done');
	}
}) satisfies PageServerLoad;
