import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const firstName = (data.get('firstName') as string)?.trim();
		const lastName = (data.get('lastName') as string)?.trim();
		const email = (data.get('email') as string)?.trim();
		const subject = (data.get('subject') as string)?.trim();
		const message = (data.get('message') as string)?.trim();

		// Basic validation
		const errors: Record<string, string> = {};

		if (!firstName) errors.firstName = 'First name is required.';
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			errors.email = 'A valid email address is required.';
		if (!message || message.length < 10) errors.message = 'Please include a message (min 10 chars).';

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				values: { firstName, lastName, email, subject, message }
			});
		}

		// TODO: send email via Resend
		console.log('Contact form submission:', { firstName, lastName, email, subject, message });

		return { success: true };
	}
};
