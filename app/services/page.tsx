import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Baby, Dumbbell, HandHeart, Home as HomeIcon, Syringe, TestTube, Users, Users2 } from "lucide-react";
import { additionalOfferings, coreServices } from "@/app/lib/siteConfig";
import EditorialBlock from "@/app/components/EditorialBlock";

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
			<section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
				<div className="flex items-center justify-center gap-3 mb-6">
					<span className="w-8 h-px bg-accent" />
					<span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Services</span>
					<span className="w-8 h-px bg-accent" />
				</div>
				<h1 className="font-display text-5xl md:text-6xl tracking-tight text-ink">What care we provide</h1>
				<p className="mt-6 text-ink-muted leading-relaxed max-w-2xl mx-auto">
					Divyzen&apos;s home care services are built to cover a wide range of needs, from routine nursing support to advanced, closely monitored care —
					always centred on your family&apos;s comfort.
				</p>
			</section>

			<section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 border-t border-line">
				{coreServices.map((s, i) => {
					const Icon = serviceIcons[s.icon];
					const reversed = i % 2 === 1;
					return (
						<div key={s.slug} className={`grid md:grid-cols-2 gap-12 items-center py-14 ${i > 0 ? "border-t border-line" : ""}`}>
							<div className={reversed ? "md:order-2" : ""}>
								<EditorialBlock icon={Icon} tone={reversed ? "accent" : "ink"} index={`0${i + 1}`} className="h-72 w-full mr-4 mb-4" />
							</div>
							<div className={reversed ? "md:order-1" : ""}>
								<h2 className="font-display text-3xl md:text-4xl text-ink mb-4">{s.title}</h2>
								<p className="text-ink-muted leading-relaxed">{s.detail}</p>
							</div>
						</div>
					);
				})}
			</section>

			<section className="bg-cream-2 py-16 md:py-24 border-t border-line">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center gap-3 mb-5">
						<span className="w-8 h-px bg-accent" />
						<span className="text-xs font-semibold uppercase tracking-widest text-accent">More Ways We Help</span>
					</div>
					<h2 className="font-display text-4xl text-ink max-w-xl mb-14">Additional offerings</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
						{additionalOfferings.map((item) => {
							const Icon = offeringIcons[item];
							return (
								<div key={item} className="flex items-center gap-4 border-r border-b border-line px-6 py-6">
									<Icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
									<span className="text-sm font-medium text-ink">{item}</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="bg-ink text-cream py-16 md:py-20">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<h2 className="font-display text-3xl md:text-4xl">Ready to arrange care for your family?</h2>
					<p className="mt-4 text-cream/60 max-w-xl mx-auto">Book an appointment and our team will get in touch to understand your needs and recommend the right plan.</p>
					<Link
						href="/appointment"
						className="inline-flex items-center gap-2 mt-8 bg-accent hover:bg-cream hover:text-ink text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
						Make Appointment
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>
		</div>
	);
}
