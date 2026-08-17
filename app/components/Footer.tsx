import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/app/components/SocialIcons";
import BlobBackground from "@/app/components/BlobBackground";

export default function Footer() {
	const year = new Date().getFullYear();
	const hoursUniform = siteConfig.hours.every((h) => h.value === siteConfig.hours[0].value);

	return (
		<footer className="relative overflow-hidden bg-brand-900 text-white/80">
			<BlobBackground variant="dark" />
			<div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<Image src="/logo.png" alt={siteConfig.name} width={1115} height={451} className="h-10 w-auto object-contain bg-white rounded-md px-2 py-1.5 mb-4" />
					<p className="text-sm leading-relaxed text-white/60">
						Supportive, compassionate and highly qualified nursing care for all your family&apos;s medical and daily-living needs, delivered at home.
					</p>
					<div className="flex items-center gap-3 mt-5">
						<a href={siteConfig.social.facebook} aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-200 hover:-translate-y-0.5">
							<FacebookIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.instagram} aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-200 hover:-translate-y-0.5">
							<InstagramIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.twitter} aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-200 hover:-translate-y-0.5">
							<XIcon className="w-4 h-4" />
						</a>
						<a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-all duration-200 hover:-translate-y-0.5">
							<LinkedinIcon className="w-4 h-4" />
						</a>
					</div>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4">Office Address</h3>
					<p className="text-sm text-white/60 flex gap-2">
						<MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent-500" />
						<span>
							{siteConfig.address.line1}
							<br />
							{siteConfig.address.line2}
						</span>
					</p>
					<h3 className="text-white font-semibold mt-6 mb-3">Business Hours</h3>
					{hoursUniform ? (
						<p className="text-sm text-white/60 flex justify-between gap-4 max-w-50">
							<span>All Days</span>
							<span>{siteConfig.hours[0].value}</span>
						</p>
					) : (
						<ul className="text-sm text-white/60 space-y-1.5">
							{siteConfig.hours.map((h) => (
								<li key={h.day} className="flex justify-between gap-4">
									<span>{h.day.slice(0, 3)}:</span>
									<span>{h.value}</span>
								</li>
							))}
						</ul>
					)}
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4">Quick Links</h3>
					<ul className="text-sm text-white/60 space-y-2.5">
						{siteConfig.nav.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className="hover:text-accent-500 transition-colors">
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4">Contacts</h3>
					<p className="text-sm text-accent-500 font-medium mb-3">24/7 Availability</p>
					<ul className="text-sm text-white/60 space-y-2.5">
						<li className="flex items-center gap-2">
							<Mail className="w-4 h-4 text-accent-500" />
							{siteConfig.email}
						</li>
						<li className="flex items-center gap-2">
							<Phone className="w-4 h-4 text-accent-500" />
							{siteConfig.phonePrimary}
						</li>
						<li className="flex items-center gap-2">
							<Phone className="w-4 h-4 text-accent-500" />
							{siteConfig.phoneSecondary}
						</li>
					</ul>
					<a
						href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`}
						className="inline-block mt-5 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95">
						Call Us Today
					</a>
				</div>
			</div>

			<div className="relative border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
					<p>{siteConfig.name} — {siteConfig.tagline}</p>
					<p>
						Copyright © {siteConfig.shortName} {year}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
