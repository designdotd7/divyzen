import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import ContactForm from "./ContactForm";
import EditorialBlock from "@/app/components/EditorialBlock";

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
			<section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
				<div className="flex items-center justify-center gap-3 mb-6">
					<span className="w-8 h-px bg-accent" />
					<span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact Us</span>
					<span className="w-8 h-px bg-accent" />
				</div>
				<h1 className="font-display text-5xl md:text-6xl tracking-tight text-ink">We&apos;d love to hear from you</h1>
				<p className="mt-6 text-ink-muted leading-relaxed max-w-2xl mx-auto">Have a question about our services or ready to arrange care? Reach out and our team will respond promptly.</p>
			</section>

			<section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 border-t border-line">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-line mt-14 mb-16">
					{infoCards.map((c) => (
						<div key={c.title} className="border-r border-b border-line p-7">
							<c.icon className="w-5 h-5 text-accent mb-5" strokeWidth={1.5} />
							<h3 className="text-xs font-semibold uppercase tracking-widest text-ink mb-2">{c.title}</h3>
							{c.lines.map((line) => (
								<p key={line} className="text-sm text-ink-muted leading-relaxed">
									{line}
								</p>
							))}
						</div>
					))}
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-stretch">
					<div>
						<h2 className="font-display text-2xl text-ink mb-1">Send us a message</h2>
						<p className="text-sm text-ink-muted mb-8">Fill out the form and we&apos;ll get back to you as soon as possible.</p>
						<ContactForm />
					</div>

					<div className="relative min-h-80">
						<EditorialBlock icon={MapPin} tone="ink" className="w-full h-full mr-4 mb-4" />
						<div className="absolute bottom-8 left-2 right-8 bg-cream border border-line p-5">
							<p className="font-display text-lg text-ink">{siteConfig.address.line1}</p>
							<p className="text-sm text-ink-muted mt-0.5">{siteConfig.address.line2}</p>
							<p className="text-xs text-ink-muted/70 mt-3">Map preview — embed your location once your address is confirmed.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
