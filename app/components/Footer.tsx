import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { coreServices, siteConfig } from "@/app/lib/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/app/components/SocialIcons";
import BlobBackground from "@/app/components/BlobBackground";

export default function Footer() {
	const year = new Date().getFullYear();
	const telHref = `tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`;
	const waHref = `https://wa.me/${siteConfig.whatsappNumber}`;

	return (
		<footer className="relative overflow-hidden bg-brand-900 text-white/80">
			<BlobBackground variant="dark" />
			<div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<Image src="/logo.png" alt={siteConfig.name} width={1115} height={451} className="h-10 w-auto object-contain bg-white rounded-md px-2 py-1.5 mb-4" />
					<p className="text-sm leading-relaxed text-white/60">&ldquo;{siteConfig.tagline}&rdquo;</p>
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
					<h3 className="text-white font-semibold mb-4">Our Services</h3>
					<ul className="text-sm text-white/60 space-y-2.5">
						{coreServices.map((s) => (
							<li key={s.slug}>
								<Link href="/services" className="hover:text-accent-500 transition-colors">
									{s.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-white font-semibold mb-4">Contact</h3>
					<p className="text-sm text-accent-500 font-medium mb-3">24/7 Availability</p>
					<ul className="text-sm text-white/60 space-y-2.5">
						<li className="flex gap-2">
							<MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent-500" />
							<span>
								{siteConfig.address.line1}
								<br />
								{siteConfig.address.line2}
							</span>
						</li>
						<li className="flex items-center gap-2">
							<Phone className="w-4 h-4 text-accent-500" />
							{siteConfig.phonePrimary}
						</li>
						<li className="flex items-center gap-2">
							<Mail className="w-4 h-4 text-accent-500" />
							{siteConfig.email}
						</li>
					</ul>
					<div className="flex items-center gap-3 mt-5">
						<a
							href={telHref}
							className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95">
							<Phone className="w-3.5 h-3.5" />
							Call Now
						</a>
						<a
							href={waHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95">
							<MessageCircle className="w-3.5 h-3.5" />
							WhatsApp
						</a>
					</div>
				</div>
			</div>

			<div className="relative border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/45 leading-relaxed">
					<strong className="text-white/60">Disclaimer:</strong> {siteConfig.disclaimer}
				</div>
			</div>

			<div className="relative border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
					<p>
						{siteConfig.name} — &ldquo;{siteConfig.tagline}&rdquo;
					</p>
					<p className="flex items-center gap-3">
						<span>
							Copyright © {siteConfig.shortName} {year}. All rights reserved.
						</span>
						<span className="hidden sm:inline text-white/20">|</span>
						<Link href="/privacy-policy" className="hover:text-accent-500 transition-colors">
							Privacy Policy
						</Link>
						<span className="text-white/20">|</span>
						<Link href="/terms" className="hover:text-accent-500 transition-colors">
							Terms &amp; Conditions
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
