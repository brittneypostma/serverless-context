import type { RequestEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event: RequestEvent) => {
	const context = event.platform?.context;
	console.log(context);
	return {
		context: context.clientContext
	};
};
