import type { Metadata } from "next";
import { Baby, Clock, Dumbbell, HandHeart, PhoneCall, Syringe, TestTube, Users2 } from "lucide-react";
import { additionalOfferings, siteConfig } from "@/app/lib/siteConfig";
import AppointmentForm from "./AppointmentForm";

export const metadata: Metadata = {
	title: "Make Appointment | Divyzen Care Solutions",
	description: "Book a home nursing or private care appointment with Divyzen Care Solutions.",
};

const offeringIcons: Record<string, typeof Syringe> = {
	"Nursing Care": Syringe,
	"Patient Attendant Care": HandHeart,
	"Elder Care": Users2,
	"Baby & Postnatal Care": Baby,
	"Physiotherapy at Home": Dumbbell,
	"Home Sample Collection & Blood Tests": TestTube,
};

export default function AppointmentPage() {
	return (
		<div>
			<section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
				<div className="flex items-center justify-center gap-3 mb-6">
					<span className="w-8 h-px bg-accent" />
					<span className="text-xs font-semibold uppercase tracking-widest text-accent">Make Appointment</span>
					<span className="w-8 h-px bg-accent" />
				</div>
				<h1 className="font-display text-5xl md:text-6xl tracking-tight text-ink">Quality home care, just a booking away</h1>
				<p className="mt-6 text-ink-muted leading-relaxed max-w-2xl mx-auto">
					At Divyzen, we prioritize not only healthcare but also a warm, caring environment for our patients. Share a few details and our team will take
					it from there.
				</p>
			</section>

			<section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 border-t border-line pt-14 grid lg:grid-cols-[1fr_360px] gap-14 items-start">
				<div className="border border-line p-8 md:p-10">
					<AppointmentForm />
				</div>

				<div className="space-y-10">
					<div className="bg-ink text-cream p-8">
						<PhoneCall className="w-7 h-7 text-accent mb-5" strokeWidth={1.5} />
						<p className="text-xs uppercase tracking-widest text-cream/50 mb-1">Emergency Call</p>
						<a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="font-display text-2xl hover:text-accent transition-colors">
							{siteConfig.emergencyPhone}
						</a>
						<p className="text-sm text-cream/60 mt-5 leading-relaxed">
							We provide supportive, compassionate and highly qualified nurses for all your nursing and medical needs.
						</p>
					</div>

					<div className="border-t border-line pt-7">
						<div className="flex items-center gap-2 mb-3">
							<Clock className="w-4 h-4 text-accent" />
							<h3 className="text-xs font-semibold uppercase tracking-widest text-ink">Availability</h3>
						</div>
						<p className="text-sm text-ink-muted">Open 24 hours, all days of the week.</p>
					</div>

					<div className="border-t border-line pt-7">
						<h3 className="text-xs font-semibold uppercase tracking-widest text-ink mb-6">What We Cover</h3>
						<ul className="space-y-4">
							{additionalOfferings.map((item) => {
								const Icon = offeringIcons[item];
								return (
									<li key={item} className="flex items-center gap-3 text-sm text-ink">
										<Icon className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
										{item}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
