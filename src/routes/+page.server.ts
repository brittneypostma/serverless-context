import type { RequestEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: RequestEvent) => {
	const context = event.platform?.context;

	return {
		context
	};
};
