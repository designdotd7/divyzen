import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coreServices } from "@/app/lib/siteConfig";
import { serviceButtonBg, serviceIconMap, serviceToneMap } from "@/app/lib/icons";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
	title: "Services | Divyzen Care Solutions",
	description: "ICU care, critical care, elder care, physiotherapy, sample collection and more home healthcare services from Divyzen Care Solutions.",
};

export default function ServicesPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Our Services</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">Our Home Healthcare Services</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">Professional Care &amp; Support, Right at Your Doorstep.</p>
				</Reveal>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{coreServices.map((s, i) => {
						const Icon = serviceIconMap[s.icon];
						return (
							<Reveal key={s.slug} delay={(i % 3) * 100}>
								<div className="h-full flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
									<ArtPanel
										icon={Icon}
										tone={serviceToneMap[s.icon]}
										seed={`divyzen-${s.slug}`}
										className="h-44 w-full rounded-none group-hover:scale-[1.03] transition-transform duration-500"
									/>
									<div className="p-8 flex flex-col flex-1">
										<h2 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h2>
										<p className="text-sm text-gray-600 leading-relaxed flex-1">{s.summary}</p>
										<Link
											href="/appointment"
											className={`group/btn inline-flex items-center gap-2 mt-6 rounded-full ${serviceButtonBg[s.icon]} text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95 self-start`}>
											{s.buttonLabel}
											<ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
										</Link>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</section>

			<section className="relative overflow-hidden max-w-7xl mx-auto my-16 md:my-20 rounded-4xl bg-brand-900">
				<BlobBackground variant="dark" />
				<Reveal className="relative px-6 py-16 text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-white">Ready to arrange care for your family?</h2>
					<p className="mt-3 text-white/70 max-w-xl mx-auto">Book a service and our team will get in touch to understand your needs and recommend the right plan.</p>
					<Link
						href="/appointment"
						className="group inline-flex items-center gap-2 mt-7 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-all duration-200 hover:scale-105 active:scale-95">
						Book a Service
						<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
