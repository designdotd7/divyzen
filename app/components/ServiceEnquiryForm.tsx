"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { coreServices } from "@/app/lib/siteConfig";

export default function ServiceEnquiryForm({ defaultService }: { defaultService?: string }) {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
		e.currentTarget.reset();
		setTimeout(() => setSubmitted(false), 6000);
	}

	if (submitted) {
		return (
			<div className="flex flex-col items-center justify-center text-center py-16 animate-[fade-in_0.4s_ease-out]">
				<div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-5">
					<CheckCircle2 className="w-8 h-8 text-brand-600" />
				</div>
				<h3 className="text-xl font-semibold text-gray-900">Thank You</h3>
				<p className="text-sm text-gray-500 mt-2 max-w-sm">
					Thank you for contacting Divyzen Care Solutions. Our team will get in touch with you shortly.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
				<input
					type="text"
					required
					placeholder="Full Name"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
				/>
			</div>
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number</label>
				<input
					type="tel"
					required
					placeholder="Mobile Number"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
				/>
			</div>
			<div className="sm:col-span-2">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Select Service</label>
				<select
					required
					defaultValue={defaultService ?? ""}
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 text-gray-700">
					<option value="" disabled>
						Select a service
					</option>
					{coreServices.map((s) => (
						<option key={s.slug} value={s.slug}>
							{s.title}
						</option>
					))}
				</select>
			</div>
			<div className="sm:col-span-2">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Patient Requirement / Message</label>
				<textarea
					rows={4}
					placeholder="Tell us a bit about the care needed"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 resize-none"
				/>
			</div>
			<div className="sm:col-span-2">
				<button
					type="submit"
					className="group inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 transition-all duration-200 hover:scale-105 active:scale-95">
					Submit Enquiry
					<Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
				</button>
			</div>
		</form>
	);
}
