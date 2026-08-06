"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
		e.currentTarget.reset();
		setTimeout(() => setSubmitted(false), 4000);
	}

	return (
		<form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
			<div className="sm:col-span-1">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
				<input
					type="text"
					required
					placeholder="Full Name"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
				/>
			</div>
			<div className="sm:col-span-1">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
				<input
					type="email"
					required
					placeholder="Email Address"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
				/>
			</div>
			<div className="sm:col-span-2">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
				<input
					type="text"
					placeholder="How can we help?"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500"
				/>
			</div>
			<div className="sm:col-span-2">
				<label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
				<textarea
					required
					rows={5}
					placeholder="Your Message"
					className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500 resize-none"
				/>
			</div>
			<div className="sm:col-span-2">
				<button
					type="submit"
					disabled={submitted}
					className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 disabled:opacity-70 text-white font-semibold px-6 py-3 transition-colors">
					{submitted ? (
						<>
							<CheckCircle2 className="w-4 h-4" />
							Message Sent
						</>
					) : (
						<>
							Send Message
							<Send className="w-4 h-4" />
						</>
					)}
				</button>
				{submitted && <p className="text-sm text-brand-600 mt-3">Thanks for reaching out — we&apos;ll get back to you shortly.</p>}
			</div>
		</form>
	);
}
