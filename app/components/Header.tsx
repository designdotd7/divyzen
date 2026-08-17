"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe, Mail, MessageCircle, Menu, MapPin, Phone, X } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/app/components/SocialIcons";

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const telHref = `tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`;
	const waHref = `https://wa.me/${siteConfig.whatsappNumber}`;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<header
				className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${
					scrolled ? "bg-white/85 border-white/50 shadow-md shadow-brand-900/5" : "bg-white/70 border-white/40 shadow-[0_1px_0_0_rgba(15,92,107,0.06)]"
				}`}>
				{/* Top info bar */}
				<div className="hidden lg:block bg-brand-900/85 backdrop-blur-xl text-white">
					<div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs py-2">
						<div className="flex items-center gap-6">
							<span className="flex items-center gap-1.5">
								<MapPin className="w-3.5 h-3.5 text-accent-500" />
								{siteConfig.address.line1}, {siteConfig.address.line2}
							</span>
							<span className="flex items-center gap-1.5">
								<Mail className="w-3.5 h-3.5 text-accent-500" />
								{siteConfig.email}
							</span>
							<span className="flex items-center gap-1.5">
								<Globe className="w-3.5 h-3.5 text-accent-500" />
								{siteConfig.website}
							</span>
						</div>
						<div className="flex items-center gap-5">
							<span className="flex items-center gap-1.5">
								<Phone className="w-3.5 h-3.5 text-accent-500" />
								{siteConfig.phonePrimary}
							</span>
							<div className="flex items-center gap-3 pl-4 border-l border-white/20">
								<a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-accent-500 transition-colors">
									<FacebookIcon className="w-3.5 h-3.5" />
								</a>
								<a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-accent-500 transition-colors">
									<InstagramIcon className="w-3.5 h-3.5" />
								</a>
								<a href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-accent-500 transition-colors">
									<XIcon className="w-3.5 h-3.5" />
								</a>
								<a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-accent-500 transition-colors">
									<LinkedinIcon className="w-3.5 h-3.5" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Main nav */}
				<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
					<Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
						<Image src="/logo.png" alt={siteConfig.name} width={1115} height={451} className="h-10 md:h-12 w-auto object-contain" priority />
					</Link>

					<nav className="hidden lg:flex items-center gap-8">
						{siteConfig.nav.map((item) => {
							const active = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`text-sm font-medium transition-colors ${active ? "text-brand-600" : "text-gray-600 hover:text-brand-600"}`}>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="hidden lg:flex items-center gap-3">
						<a
							href={telHref}
							className="inline-flex items-center gap-2 rounded-full border border-brand-200 text-brand-700 hover:bg-brand-50 text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95">
							<Phone className="w-4 h-4" />
							Call Now
						</a>
						<a
							href={waHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 transition-all duration-200 hover:scale-105 active:scale-95">
							<MessageCircle className="w-4 h-4" />
							WhatsApp
						</a>
					</div>

					<button
						onClick={() => setOpen((v) => !v)}
						aria-label="Toggle menu"
						className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-brand-700 hover:bg-brand-50">
						{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile menu */}
				{open && (
					<div className="lg:hidden border-t border-white/40 bg-white/85 backdrop-blur-xl px-6 py-4">
						<nav className="flex flex-col gap-1">
							{siteConfig.nav.map((item) => {
								const active = pathname === item.href;
								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setOpen(false)}
										className={`py-2.5 text-sm font-medium border-b border-gray-50 ${active ? "text-brand-600" : "text-gray-600"}`}>
										{item.label}
									</Link>
								);
							})}
						</nav>
					</div>
				)}
			</header>

			{/* Mobile sticky Call / WhatsApp bar */}
			<div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-gray-100 bg-white shadow-[0_-4px_16px_rgba(15,92,107,0.08)]">
				<a href={telHref} className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-brand-700 border-r border-gray-100">
					<Phone className="w-4 h-4" />
					Call Now
				</a>
				<a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-accent-500">
					<MessageCircle className="w-4 h-4" />
					WhatsApp Us
				</a>
			</div>
			<div className="lg:hidden h-14" aria-hidden="true" />
		</>
	);
}
