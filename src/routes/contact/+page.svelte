<script lang="ts">
	import { enhance } from '$app/forms';
	import { SITE } from '$lib/config/site';
	import { Phone, Printer, Mail } from 'lucide-svelte';

	let { form } = $props();
</script>

<!-- Hero -->
<section class="relative bg-brand-navy border-b border-gray-200 py-16 md:py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-top" style="background-image: url('/images/pexels-olly-3756678.jpg');" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-brand-navy/80" aria-hidden="true"></div>
	<div class="section-container relative z-10">
		<p class="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3">Get in Touch</p>
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Contact Techni-Mold</h1>
		<p class="text-white/70 text-lg max-w-2xl">
			Request a quote, ask a technical question, or simply introduce yourself. We respond quickly.
		</p>
	</div>
</section>

<section class="section-padding bg-white">
	<div class="section-container">
		<div class="grid md:grid-cols-[2fr_1fr] gap-12">
			<!-- Form -->
			<div>
				{#if form?.success}
					<div
						class="bg-green-900/20 border border-green-500/30 rounded-sm p-6 text-center"
						role="alert"
					>
						<p class="text-green-400 font-semibold text-lg mb-1">Message Sent!</p>
						<p class="text-brand-muted text-sm">
							Thank you for reaching out. We'll be in touch shortly.
						</p>
					</div>
				{:else}
					<form
						method="POST"
						use:enhance
						class="space-y-5"
						novalidate
						aria-label="Contact form"
					>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div>
								<label for="firstName" class="block text-sm font-medium text-brand-navy mb-1.5">
									First Name <span class="text-brand-yellow" aria-label="required">*</span>
								</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									autocomplete="given-name"
									value={form?.values?.firstName ?? ''}
									class="w-full bg-white border {form?.errors?.firstName
										? 'border-red-500'
										: 'border-gray-300'} rounded-sm px-4 py-3 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors text-sm"
									placeholder="Jane"
									aria-required="true"
									aria-describedby={form?.errors?.firstName ? 'firstName-error' : undefined}
								/>
								{#if form?.errors?.firstName}
									<p id="firstName-error" class="mt-1 text-red-400 text-xs" role="alert">
										{form.errors.firstName}
									</p>
								{/if}
							</div>
							<div>
								<label for="lastName" class="block text-sm font-medium text-brand-navy mb-1.5">
									Last Name
								</label>
								<input
									id="lastName"
									name="lastName"
									type="text"
									autocomplete="family-name"
									value={form?.values?.lastName ?? ''}
									class="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors text-sm"
									placeholder="Smith"
								/>
							</div>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-brand-navy mb-1.5">
								Email Address <span class="text-brand-yellow" aria-label="required">*</span>
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								value={form?.values?.email ?? ''}
								class="w-full bg-white border {form?.errors?.email
									? 'border-red-500'
									: 'border-gray-300'} rounded-sm px-4 py-3 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors text-sm"
								placeholder="jane@company.com"
								aria-required="true"
								aria-describedby={form?.errors?.email ? 'email-error' : undefined}
							/>
							{#if form?.errors?.email}
								<p id="email-error" class="mt-1 text-red-400 text-xs" role="alert">
									{form.errors.email}
								</p>
							{/if}
						</div>

						<div>
							<label for="subject" class="block text-sm font-medium text-brand-navy mb-1.5">
								Subject
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								value={form?.values?.subject ?? ''}
								class="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors text-sm"
								placeholder="Quote Request — Injection Molding"
							/>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-brand-navy mb-1.5">
								Message <span class="text-brand-yellow" aria-label="required">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								class="w-full bg-white border {form?.errors?.message
									? 'border-red-500'
									: 'border-gray-300'} rounded-sm px-4 py-3 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow transition-colors text-sm resize-none"
								placeholder="Describe your project, part requirements, quantities, and any other details..."
								aria-required="true"
								aria-describedby={form?.errors?.message ? 'message-error' : undefined}
							>{form?.values?.message ?? ''}</textarea>
							{#if form?.errors?.message}
								<p id="message-error" class="mt-1 text-red-400 text-xs" role="alert">
									{form.errors.message}
								</p>
							{/if}
						</div>

						<button type="submit" class="btn-primary w-full sm:w-auto">Send Message</button>
					</form>
				{/if}
			</div>

			<!-- Contact info + map -->
			<div class="space-y-6">
				<div class="bg-brand-steel border border-brand-yellow-dark/40 rounded-sm p-6">
					<h2 class="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
						Contact Information
					</h2>
					<address class="not-italic space-y-4 text-sm text-white/70">
						<div>
							<p class="text-white font-medium mb-1">{SITE.name}</p>
							<p>{SITE.address.street}</p>
							<p>{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
						</div>
						<div class="space-y-1">
							<a
								href="tel:{SITE.phoneTel}"
								class="flex items-center gap-2 hover:text-brand-yellow transition-colors"
							>
								<Phone size={14} class="shrink-0" />
								{SITE.phone}
							</a>
							<p class="flex items-center gap-2">
								<Printer size={14} class="shrink-0" />
								{SITE.fax}
							</p>
							<a
								href="mailto:{SITE.email}"
								class="flex items-center gap-2 hover:text-brand-yellow transition-colors"
							>
								<Mail size={14} class="shrink-0" />
								{SITE.email}
							</a>
						</div>
					</address>
				</div>

				<!-- Google Maps embed -->
				<div class="rounded-sm overflow-hidden border border-brand-steel/40">
					<iframe
						title="Techni-Mold & Engineering location map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d-118.31!3d33.888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ca!2s1320+W+130th+St%2C+Gardena%2C+CA+90247!5e0!3m2!1sen!2sus!4v1"
						width="100%"
						height="220"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div class="bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm p-4">
					<p class="text-brand-yellow font-semibold text-sm mb-1">Fast Response</p>
					<p class="text-brand-muted text-xs leading-relaxed">
						We typically respond to quote requests within one business day. For urgent needs, call us
						directly at {SITE.phone}.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
