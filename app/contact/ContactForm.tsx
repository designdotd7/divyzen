"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const fieldClass = "w-full border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors";
const labelClass = "block text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
		e.currentTarget.reset();
		setTimeout(() => setSubmitted(false), 4000);
	}

	return (
		<form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
			<div className="sm:col-span-1">
				<label className={labelClass}>Full Name</label>
				<input type="text" required placeholder="Full Name" className={fieldClass} />
			</div>
			<div className="sm:col-span-1">
				<label className={labelClass}>Email Address</label>
				<input type="email" required placeholder="Email Address" className={fieldClass} />
			</div>
			<div className="sm:col-span-2">
				<label className={labelClass}>Subject</label>
				<input type="text" placeholder="How can we help?" className={fieldClass} />
			</div>
			<div className="sm:col-span-2">
				<label className={labelClass}>Message</label>
				<textarea required rows={5} placeholder="Your Message" className={`${fieldClass} resize-none`} />
			</div>
			<div className="sm:col-span-2">
				<button
					type="submit"
					disabled={submitted}
					className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-70 text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
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
				{submitted && <p className="text-sm text-ink-muted mt-3">Thanks for reaching out — we&apos;ll get back to you shortly.</p>}
			</div>
		</form>
	);
}
