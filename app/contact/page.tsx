import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import ContactForm from "./ContactForm";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
	title: "Contact Us | Divyzen Care Solutions",
	description: "Get in touch with Divyzen Care Solutions for home nursing and family care services.",
};

const infoCards = [
	{ icon: MapPin, title: "Office Address", lines: [siteConfig.address.line1, siteConfig.address.line2] },
	{ icon: Phone, title: "Phone", lines: [siteConfig.phonePrimary, siteConfig.phoneSecondary] },
	{ icon: Mail, title: "Email", lines: [siteConfig.email] },
	{ icon: Clock, title: "Availability", lines: ["Open 24 Hours", "All Days of the Week"] },
];

export default function ContactPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Contact Us</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">We&apos;d Love To Hear From You</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">Have a question about our services or ready to arrange care? Reach out and our team will respond promptly.</p>
				</Reveal>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
					{infoCards.map((c, i) => (
						<Reveal key={c.title} delay={i * 80}>
							<div className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
								<div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center mb-4">
									<c.icon className="w-5 h-5 text-white" />
								</div>
								<h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
								{c.lines.map((line) => (
									<p key={line} className="text-sm text-gray-500 leading-relaxed">
										{line}
									</p>
								))}
							</div>
						</Reveal>
					))}
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-stretch">
					<Reveal direction="left" className="rounded-2xl border border-gray-100 bg-white p-8">
						<h2 className="text-xl font-semibold text-gray-900 mb-1">Send Us a Message</h2>
						<p className="text-sm text-gray-500 mb-6">Fill out the form and we&apos;ll get back to you as soon as possible.</p>
						<ContactForm />
					</Reveal>

					<Reveal direction="right" delay={150} className="relative min-h-80">
						<ArtPanel icon={MapPin} tone="brand" seed="divyzen-office" className="absolute inset-0 w-full h-full" />
						<div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5">
							<p className="font-semibold text-brand-900">{siteConfig.address.line1}</p>
							<p className="text-sm text-gray-600 mt-0.5">{siteConfig.address.line2}</p>
							<p className="text-xs text-gray-500 mt-3">See the full map at the bottom of the page.</p>
						</div>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
