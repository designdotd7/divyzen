import type { Metadata } from "next";
import { Baby, Clock, Dumbbell, HandHeart, PhoneCall, Syringe, TestTube, Users2 } from "lucide-react";
import { additionalOfferings, siteConfig } from "@/app/lib/siteConfig";
import AppointmentForm from "./AppointmentForm";
import BlobBackground from "@/app/components/BlobBackground";

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
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Make Appointment</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">Quality Home Care & Private Nursing, Just a Booking Away</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">
						At Divyzen, we prioritize not only healthcare but also a warm, caring environment for our patients. Share a few details and our team will take
						it from there.
					</p>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
				<div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
					<AppointmentForm />
				</div>

				<div className="space-y-6">
					<div className="relative overflow-hidden rounded-2xl bg-brand-900 text-white p-8">
						<BlobBackground variant="dark" />
						<div className="relative">
							<PhoneCall className="w-8 h-8 text-accent-500 mb-4" />
							<p className="text-sm text-white/70 mb-1">Emergency Call</p>
							<a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="text-2xl font-bold hover:text-accent-500 transition-colors">
								{siteConfig.emergencyPhone}
							</a>
							<p className="text-sm text-white/60 mt-4 leading-relaxed">
								We provide supportive, compassionate and highly qualified nurses for all your nursing and medical needs.
							</p>
						</div>
					</div>

					<div className="rounded-2xl border border-gray-100 bg-white p-8">
						<div className="flex items-center gap-2 mb-4">
							<Clock className="w-5 h-5 text-brand-600" />
							<h3 className="font-semibold text-gray-900">Availability</h3>
						</div>
						<p className="text-sm text-gray-600">Open 24 hours, all days of the week.</p>
					</div>

					<div className="rounded-2xl border border-gray-100 bg-white p-8">
						<h3 className="font-semibold text-gray-900 mb-5">What We Cover</h3>
						<ul className="space-y-3">
							{additionalOfferings.map((item) => {
								const Icon = offeringIcons[item];
								return (
									<li key={item} className="flex items-center gap-3 text-sm text-gray-700">
										<span className="w-8 h-8 shrink-0 rounded-lg bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center">
											<Icon className="w-4 h-4 text-white" />
										</span>
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
