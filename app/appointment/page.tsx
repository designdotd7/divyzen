import type { Metadata } from "next";
import { Clock, MessageCircle, PhoneCall } from "lucide-react";
import { coreServices, siteConfig } from "@/app/lib/siteConfig";
import { serviceIconBg, serviceIconMap } from "@/app/lib/icons";
import ServiceEnquiryForm from "@/app/components/ServiceEnquiryForm";
import BlobBackground from "@/app/components/BlobBackground";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
	title: "Book a Service | Divyzen Care Solutions",
	description: "Request a home healthcare or care service from Divyzen Care Solutions.",
};

export default function AppointmentPage() {
	const telHref = `tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`;
	const waHref = `https://wa.me/${siteConfig.whatsappNumber}`;

	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Request a Service</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">Care at Home, Just a Request Away</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">Share a few details and our team will take it from there.</p>
				</Reveal>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
				<Reveal direction="left" className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
					<ServiceEnquiryForm />
				</Reveal>

				<div className="space-y-6">
					<Reveal direction="right" delay={100} className="relative overflow-hidden rounded-2xl bg-brand-900 text-white p-8">
						<BlobBackground variant="dark" />
						<div className="relative space-y-3">
							<PhoneCall className="w-8 h-8 text-accent-500" />
							<p className="text-sm text-white/70">Call Now</p>
							<a href={telHref} className="block text-2xl font-bold hover:text-accent-500 transition-colors">
								{siteConfig.phonePrimary}
							</a>
							<a
								href={waHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 mt-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-4 py-2 transition-all duration-200">
								<MessageCircle className="w-4 h-4" />
								WhatsApp Us
							</a>
						</div>
					</Reveal>

					<Reveal direction="right" delay={200} className="rounded-2xl border border-gray-100 bg-white p-8">
						<div className="flex items-center gap-2 mb-4">
							<Clock className="w-5 h-5 text-brand-600" />
							<h3 className="font-semibold text-gray-900">Availability</h3>
						</div>
						<p className="text-sm text-gray-600">Open 24 hours, all days of the week.</p>
					</Reveal>

					<Reveal direction="right" delay={300} className="rounded-2xl border border-gray-100 bg-white p-8">
						<h3 className="font-semibold text-gray-900 mb-5">What We Cover</h3>
						<ul className="space-y-3">
							{coreServices.map((s) => {
								const Icon = serviceIconMap[s.icon];
								return (
									<li key={s.slug} className="flex items-center gap-3 text-sm text-gray-700">
										<span className={`w-8 h-8 shrink-0 rounded-lg ${serviceIconBg[s.icon]} flex items-center justify-center`}>
											<Icon className="w-4 h-4 text-white" />
										</span>
										{s.title}
									</li>
								);
							})}
						</ul>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
