import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Baby, Dumbbell, HandHeart, Home as HomeIcon, Syringe, TestTube, Users, Users2 } from "lucide-react";
import { additionalOfferings, coreServices } from "@/app/lib/siteConfig";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";

export const metadata: Metadata = {
	title: "Services | Divyzen Care Solutions",
	description: "Home nursing, senior care and intensive care services from Divyzen Care Solutions.",
};

const serviceIcons = { Home: HomeIcon, Users, Activity };
const offeringIcons: Record<string, typeof Syringe> = {
	"Nursing Care": Syringe,
	"Patient Attendant Care": HandHeart,
	"Elder Care": Users2,
	"Baby & Postnatal Care": Baby,
	"Physiotherapy at Home": Dumbbell,
	"Home Sample Collection & Blood Tests": TestTube,
};

export default function ServicesPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Our Services</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">What Care We Provide</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">
						Divyzen&apos;s home care services are built to cover a wide range of needs, from routine nursing support to advanced, closely monitored care —
						always centred on your family&apos;s comfort.
					</p>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
				<div className="grid md:grid-cols-3 gap-8">
					{coreServices.map((s) => {
						const Icon = serviceIcons[s.icon];
						return (
							<div key={s.slug} className="rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
								<ArtPanel icon={Icon} tone="mixed" className="h-44 w-full rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
								<div className="p-8">
									<h2 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h2>
									<p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="max-w-2xl mx-auto text-center mb-12">
						<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">More Ways We Help</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Additional Offerings</h2>
						<p className="mt-4 text-gray-600">
							Beyond our core programs, we offer a growing set of in-home healthcare services designed to bring world-class care into your home.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{additionalOfferings.map((item) => {
							const Icon = offeringIcons[item];
							return (
								<div key={item} className="flex items-center gap-4 rounded-2xl glass px-5 py-5 shadow-sm">
									<div className="w-11 h-11 shrink-0 rounded-xl bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center">
										<Icon className="w-5 h-5 text-white" />
									</div>
									<span className="text-sm font-medium text-gray-800">{item}</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden max-w-7xl mx-auto my-16 md:my-20 rounded-4xl bg-brand-900">
				<BlobBackground variant="dark" />
				<div className="relative px-6 py-16 text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white">Ready to arrange care for your family?</h2>
					<p className="mt-3 text-white/70 max-w-xl mx-auto">Book an appointment and our team will get in touch to understand your needs and recommend the right plan.</p>
					<Link
						href="/appointment"
						className="inline-flex items-center gap-2 mt-7 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-colors">
						Make Appointment
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>
		</div>
	);
}
