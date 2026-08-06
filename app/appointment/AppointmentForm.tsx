"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { coreServices } from "@/app/lib/siteConfig";

const fieldClass = "w-full border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-ink transition-colors";
const labelClass = "block text-xs font-semibold uppercase tracking-widest text-ink-muted mb-2";

export default function AppointmentForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
		e.currentTarget.reset();
		setTimeout(() => setSubmitted(false), 5000);
	}

	if (submitted) {
		return (
			<div className="flex flex-col items-center justify-center text-center py-20">
				<div className="w-16 h-16 rounded-full bg-cream-2 border border-line flex items-center justify-center mb-6">
					<CheckCircle2 className="w-7 h-7 text-accent" />
				</div>
				<h3 className="font-display text-2xl text-ink">Appointment request received</h3>
				<p className="text-sm text-ink-muted mt-3 max-w-sm">Thank you for reaching out. Our care coordinator will call you shortly to confirm the details.</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
			<div>
				<label className={labelClass}>Full Name</label>
				<input type="text" required placeholder="Full Name" className={fieldClass} />
			</div>
			<div>
				<label className={labelClass}>Email Address</label>
				<input type="email" required placeholder="Email Address" className={fieldClass} />
			</div>
			<div>
				<label className={labelClass}>Mobile Number</label>
				<input type="tel" required placeholder="Mobile Number" className={fieldClass} />
			</div>
			<div>
				<label className={labelClass}>Preferred Date</label>
				<input type="date" required className={fieldClass} />
			</div>
			<div className="sm:col-span-2">
				<label className={labelClass}>Service Needed</label>
				<select required defaultValue="" className={`${fieldClass} text-ink`}>
					<option value="" disabled>
						Select a service
					</option>
					{coreServices.map((s) => (
						<option key={s.slug} value={s.title}>
							{s.title}
						</option>
					))}
					<option value="other">Other</option>
				</select>
			</div>
			<div className="sm:col-span-2">
				<label className={labelClass}>Message</label>
				<textarea rows={4} placeholder="Tell us a bit about the care needed" className={`${fieldClass} resize-none`} />
			</div>
			<div className="sm:col-span-2">
				<button
					type="submit"
					className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
					Make Appointment
					<Send className="w-4 h-4" />
				</button>
			</div>
		</form>
	);
}
