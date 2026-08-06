"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mail, Menu, MapPin, Phone, X } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/app/components/SocialIcons";

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-cream">
			{/* Top info bar */}
			<div className="hidden lg:block bg-ink text-cream/70">
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[11px] uppercase tracking-wider py-2.5">
					<div className="flex items-center gap-6">
						<span className="flex items-center gap-1.5">
							<MapPin className="w-3 h-3 text-accent" />
							{siteConfig.address.line1}, {siteConfig.address.line2}
						</span>
						<span className="flex items-center gap-1.5">
							<Mail className="w-3 h-3 text-accent" />
							{siteConfig.email}
						</span>
					</div>
					<div className="flex items-center gap-5">
						<span className="flex items-center gap-1.5">
							<Phone className="w-3 h-3 text-accent" />
							{siteConfig.phonePrimary}
						</span>
						<div className="flex items-center gap-3 pl-4 border-l border-white/15">
							<a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-cream transition-colors">
								<FacebookIcon className="w-3 h-3" />
							</a>
							<a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-cream transition-colors">
								<InstagramIcon className="w-3 h-3" />
							</a>
							<a href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-cream transition-colors">
								<XIcon className="w-3 h-3" />
							</a>
							<a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-cream transition-colors">
								<LinkedinIcon className="w-3 h-3" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Main nav */}
			<div className="border-b border-line">
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
					<Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
						<Image src="/logo.png" alt={siteConfig.name} width={1115} height={451} className="h-9 md:h-10 w-auto object-contain" priority />
					</Link>

					<nav className="hidden lg:flex items-center gap-9">
						{siteConfig.nav.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`text-xs font-medium uppercase tracking-widest transition-colors ${active ? "text-accent" : "text-ink/70 hover:text-ink"}`}>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="hidden lg:flex items-center gap-5">
						<a href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 text-xs font-medium text-ink/70 hover:text-ink transition-colors">
							<Phone className="w-3.5 h-3.5" />
							Call Us
						</a>
						<Link
							href="/appointment"
							className="border border-ink text-ink hover:bg-ink hover:text-cream text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-colors">
							Make Appointment
						</Link>
					</div>

					<button
						onClick={() => setOpen((v) => !v)}
						aria-label="Toggle menu"
						className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-ink">
						{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className="lg:hidden border-b border-line bg-cream px-6 py-4">
					<nav className="flex flex-col gap-1">
						{siteConfig.nav.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className={`py-2.5 text-xs font-semibold uppercase tracking-widest border-b border-line ${active ? "text-accent" : "text-ink/70"}`}>
									{item.label}
								</Link>
							);
						})}
					</nav>
					<div className="flex flex-col gap-3 mt-4">
						<a href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-ink">
							<Phone className="w-4 h-4" />
							{siteConfig.phonePrimary}
						</a>
						<Link
							href="/appointment"
							onClick={() => setOpen(false)}
							className="text-center border border-ink text-ink text-xs font-semibold uppercase tracking-widest px-5 py-3">
							Make Appointment
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
