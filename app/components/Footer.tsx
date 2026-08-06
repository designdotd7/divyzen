import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/app/components/SocialIcons";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-ink text-cream/60">
			<div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
				<div>
					<Image src="/logo.png" alt={siteConfig.name} width={1115} height={451} className="h-9 w-auto object-contain bg-cream px-2 py-1.5 mb-5" />
					<p className="text-sm leading-relaxed">
						Supportive, compassionate and highly qualified nursing care for all your family&apos;s medical and daily-living needs, delivered at home.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-accent transition-colors">
							<FacebookIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-accent transition-colors">
							<InstagramIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-accent transition-colors">
							<XIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-accent transition-colors">
							<LinkedinIcon className="w-4 h-4" />
						</a>
					</div>
				</div>

				<div>
					<h3 className="font-display text-cream text-lg mb-5">Office Address</h3>
					<p className="text-sm flex gap-2.5">
						<MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
						<span>
							{siteConfig.address.line1}
							<br />
							{siteConfig.address.line2}
						</span>
					</p>
					<h3 className="font-display text-cream text-lg mt-8 mb-4">Business Hours</h3>
					<ul className="text-sm space-y-2">
						{siteConfig.hours.map((h) => (
							<li key={h.day} className="flex justify-between gap-4">
								<span>{h.day.slice(0, 3)}</span>
								<span>{h.value}</span>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="font-display text-cream text-lg mb-5">Quick Links</h3>
					<ul className="text-sm space-y-3">
						{siteConfig.nav.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className="hover:text-accent transition-colors">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="font-display text-cream text-lg mb-5">Contacts</h3>
					<p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">24/7 Availability</p>
					<ul className="text-sm space-y-3">
						<li className="flex items-center gap-2.5">
							<Mail className="w-4 h-4 text-accent" />
							{siteConfig.email}
						</li>
						<li className="flex items-center gap-2.5">
							<Phone className="w-4 h-4 text-accent" />
							{siteConfig.phonePrimary}
						</li>
						<li className="flex items-center gap-2.5">
							<Phone className="w-4 h-4 text-accent" />
							{siteConfig.phoneSecondary}
						</li>
					</ul>
					<a
						href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`}
						className="inline-block mt-6 border border-cream/30 hover:border-accent hover:text-accent text-cream text-xs font-semibold uppercase tracking-widest px-5 py-3 transition-colors">
						Call Us Today
					</a>
				</div>
			</div>

			<div className="border-t border-cream/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/40">
					<p>{siteConfig.name.toUpperCase()} — (Home Nursing Services)</p>
					<p>
						Copyright © {siteConfig.shortName} {year}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
