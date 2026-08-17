import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, MessageCircle, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { coreServices, howItWorks, siteConfig, whyChooseUs } from "@/app/lib/siteConfig";
import { serviceIconMap, whyChooseIconMap } from "@/app/lib/icons";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";
import Reveal from "@/app/components/Reveal";

export default function Home() {
	const telHref = `tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`;
	const waHref = `https://wa.me/${siteConfig.whatsappNumber}`;

	return (
		<div>
			{/* Hero */}
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
					<Reveal direction="left">
						<span className="inline-flex items-center gap-2 rounded-full glass text-brand-700 text-sm font-semibold px-4 py-1.5 shadow-sm">
							<Sparkles className="w-3.5 h-3.5 text-accent-500 animate-pulse" />
							Trusted Home Healthcare &amp; Care Services
						</span>
						<h1 className="mt-5 text-4xl md:text-5xl font-bold text-brand-900 leading-tight">Care That Feels Like Home</h1>
						<p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-lg">Trusted Home Healthcare &amp; Care Services for You and Your Loved Ones</p>
						<p className="mt-2 text-lg text-brand-700 font-medium">आपके अपनों की देखभाल, भरोसे और अपनेपन के साथ।</p>
						<div className="mt-8 flex flex-wrap items-center gap-4">
							<a
								href={telHref}
								className="group inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
								<PhoneCall className="w-4 h-4" />
								Call Now
							</a>
							<a
								href={waHref}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full glass text-brand-700 font-semibold px-6 py-3.5 transition-all duration-200 hover:bg-white/80 hover:scale-105 active:scale-95">
								<MessageCircle className="w-4 h-4" />
								WhatsApp Us
							</a>
						</div>

						<div className="mt-10 flex items-center gap-8">
							<div>
								<p className="text-2xl font-bold text-brand-900">24/7</p>
								<p className="text-sm text-gray-500">Care availability</p>
							</div>
							<div className="w-px h-10 bg-gray-200" />
							<div>
								<p className="text-2xl font-bold text-brand-900">10</p>
								<p className="text-sm text-gray-500">Care services</p>
							</div>
							<div className="w-px h-10 bg-gray-200" />
							<div>
								<p className="text-2xl font-bold text-brand-900">100%</p>
								<p className="text-sm text-gray-500">Verified caregivers</p>
							</div>
						</div>
					</Reveal>

					<Reveal direction="right" delay={150} className="relative pb-8 pr-6 md:pb-10 md:pr-10">
						<ArtPanel icon={HeartHandshake} tone="mixed" seed="divyzen-hero" priority className="h-105 md:h-120 w-full shadow-2xl shadow-brand-900/20" />

						<div className="glass absolute -bottom-2 -left-2 md:left-4 rounded-2xl p-5 w-57.5 shadow-xl transition-transform duration-300 hover:-translate-y-1">
							<div className="flex items-center gap-2.5 mb-3">
								<div className="w-9 h-9 rounded-full bg-brand-600/10 flex items-center justify-center">
									<ShieldCheck className="w-4.5 h-4.5 text-brand-700" />
								</div>
								<p className="text-base font-semibold text-brand-900">Verified Care Team</p>
							</div>
							<ul className="space-y-2">
								{coreServices.slice(0, 4).map((s) => (
									<li key={s.slug} className="flex items-center gap-2 text-sm text-gray-700">
										<CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
										{s.title}
									</li>
								))}
							</ul>
						</div>

						<div className="hidden md:block glass-dark absolute -top-6 right-0 rounded-2xl text-white px-6 py-4 shadow-lg">
							<p className="text-2xl font-bold">24/7</p>
							<p className="text-sm text-white/70">Care Availability</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* Introduction */}
			<section className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
				<Reveal>
					<span className="text-accent-600 text-base font-semibold uppercase tracking-wide">Introduction</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Compassionate Care, Right at Your Home</h2>
					<div className="mt-6 space-y-4 text-lg text-gray-600 leading-relaxed text-left md:text-center">
						<p>
							Divyzen Care Solutions का उद्देश्य जरूरतमंद लोगों और उनके परिवारों तक भरोसेमंद, compassionate और personalized home healthcare &amp;
							support services पहुँचाना है।
						</p>
						<p>
							हम मानते हैं कि अपने घर के परिचित और आरामदायक वातावरण में मिलने वाली देखभाल व्यक्ति और उसके परिवार दोनों के लिए अधिक सहज होती है।
						</p>
						<p>
							हमारी सेवाएँ patient की जरूरत और परिवार की requirements के अनुसार व्यवस्थित की जाती हैं, ताकि उन्हें उचित support, comfort और peace
							of mind मिल सके।
						</p>
					</div>
					<Link
						href="/services"
						className="group inline-flex items-center gap-2 mt-8 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-brand-900/20 transition-all duration-200 hover:scale-105 active:scale-95">
						Explore Our Services
						<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Link>
				</Reveal>
			</section>

			{/* Our Services */}
			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6">
					<Reveal className="max-w-2xl mx-auto text-center mb-12">
						<span className="text-accent-600 text-base font-semibold uppercase tracking-wide">Our Services</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Our Home Healthcare Services</h2>
						<p className="mt-4 text-lg text-gray-600">Professional Care &amp; Support, Right at Your Doorstep</p>
					</Reveal>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{coreServices.map((s, i) => {
							const Icon = serviceIconMap[s.icon];
							return (
								<Reveal key={s.slug} delay={(i % 3) * 100}>
									<div className="h-full flex flex-col rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
										<ArtPanel
											icon={Icon}
											tone="accent"
											seed={`divyzen-${s.slug}`}
											className="h-40 w-full rounded-none group-hover:scale-[1.03] transition-transform duration-500"
										/>
										<div className="p-7 flex flex-col flex-1">
											<h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
											<p className="text-base text-gray-600 leading-relaxed flex-1">{s.summary}</p>
											<Link
												href="/appointment"
												className="group/btn inline-flex items-center gap-1.5 mt-5 text-base font-semibold text-brand-600 hover:text-brand-700">
												{s.buttonLabel}
												<ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
											</Link>
										</div>
									</div>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section id="why-choose-us" className="max-w-7xl mx-auto px-6 py-16 md:py-20 scroll-mt-24">
				<Reveal className="max-w-2xl mx-auto text-center mb-12">
					<span className="text-accent-600 text-base font-semibold uppercase tracking-wide">Why Choose Divyzen?</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Because Care Is More Than Just a Service.</h2>
				</Reveal>
				<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
					{whyChooseUs.map((f, i) => {
						const Icon = whyChooseIconMap[f.icon];
						return (
							<Reveal key={f.title} delay={i * 100}>
								<div className="group h-full rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
									<div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-5 shadow-md shadow-brand-900/15 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
										<Icon className="w-6 h-6 text-white" />
									</div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
									<p className="text-base text-gray-600 leading-relaxed">{f.text}</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</section>

			{/* How It Works */}
			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-6xl mx-auto px-6">
					<Reveal className="max-w-2xl mx-auto text-center mb-12">
						<span className="text-accent-600 text-base font-semibold uppercase tracking-wide">How It Works</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">How Our Service Works</h2>
					</Reveal>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{howItWorks.map((step, i) => (
							<Reveal key={step.step} delay={i * 100}>
								<div className="h-full rounded-2xl glass p-7 shadow-sm">
									<span className="text-3xl font-bold text-accent-500/70">{step.step}</span>
									<h3 className="mt-3 text-lg font-semibold text-gray-900">{step.title}</h3>
									<p className="mt-2 text-base text-gray-600 leading-relaxed">{step.text}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden bg-brand-900 text-white">
				<BlobBackground variant="dark" />
				<Reveal className="relative max-w-4xl mx-auto px-6 py-16 text-center">
					<h2 className="text-2xl md:text-3xl font-bold">Need Care at Home? We&apos;re Here to Help.</h2>
					<p className="mt-3 text-lg text-white/70 max-w-2xl mx-auto">
						अपने या अपने परिवार के लिए home healthcare या care service की जरूरत है? हमसे संपर्क करें और अपनी requirement के बारे में बात करें।
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<a
							href={telHref}
							className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-all duration-200 hover:scale-105 active:scale-95">
							<PhoneCall className="w-4 h-4" />
							Call Now
						</a>
						<a
							href={waHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full glass-dark text-white font-semibold px-6 py-3.5 transition-all duration-200 hover:scale-105 active:scale-95">
							<MessageCircle className="w-4 h-4" />
							WhatsApp Us
						</a>
					</div>
				</Reveal>
			</section>
		</div>
	);
}
