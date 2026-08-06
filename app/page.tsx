import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, HeartHandshake, Home as HomeIcon, PhoneCall, ShieldCheck, Sparkles, Stethoscope, Users, Wallet } from "lucide-react";
import { additionalOfferings, careStats, coreServices, homeFeatures, siteConfig } from "@/app/lib/siteConfig";
import StatBar from "@/app/components/StatBar";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";

const serviceIcons = { Home: HomeIcon, Users, Activity };
const featureIcons = { ShieldCheck, Stethoscope, Wallet };

export default function Home() {
	return (
		<div>
			{/* Hero */}
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full glass text-brand-700 text-xs font-semibold px-4 py-1.5 shadow-sm">
							<Sparkles className="w-3.5 h-3.5 text-accent-500" />
							Trusted Home Nursing Care
						</span>
						<h1 className="mt-5 text-4xl md:text-5xl font-bold text-brand-900 leading-tight">We Care For Your Family, Right At Home</h1>
						<p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
							Divyzen brings compassionate, personalized home care to your doorstep. Our dedicated nurses and caregivers focus on the comfort, dignity and
							well-being of your loved ones, so they can heal and thrive in familiar surroundings.
						</p>
						<div className="mt-8 flex flex-wrap items-center gap-4">
							<Link
								href="/appointment"
								className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-colors">
								Make Appointment
								<ArrowRight className="w-4 h-4" />
							</Link>
							<a
								href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`}
								className="inline-flex items-center gap-2 rounded-full glass text-brand-700 font-semibold px-6 py-3.5 hover:bg-white/80 transition-colors">
								<PhoneCall className="w-4 h-4" />
								Call Us Today
							</a>
						</div>

						<div className="mt-10 flex items-center gap-8">
							<div>
								<p className="text-2xl font-bold text-brand-900">24/7</p>
								<p className="text-xs text-gray-500">Care availability</p>
							</div>
							<div className="w-px h-10 bg-gray-200" />
							<div>
								<p className="text-2xl font-bold text-brand-900">6+</p>
								<p className="text-xs text-gray-500">In-home services</p>
							</div>
							<div className="w-px h-10 bg-gray-200" />
							<div>
								<p className="text-2xl font-bold text-brand-900">100%</p>
								<p className="text-xs text-gray-500">Verified caregivers</p>
							</div>
						</div>
					</div>

					<div className="relative pb-8 pr-6 md:pb-10 md:pr-10">
						<ArtPanel icon={HeartHandshake} tone="mixed" className="h-105 md:h-120 w-full shadow-2xl shadow-brand-900/20" />

						<div className="glass absolute -bottom-2 -left-2 md:left-4 rounded-2xl p-5 w-57.5 shadow-xl">
							<div className="flex items-center gap-2.5 mb-3">
								<div className="w-9 h-9 rounded-full bg-brand-600/10 flex items-center justify-center">
									<ShieldCheck className="w-4.5 h-4.5 text-brand-700" />
								</div>
								<p className="text-sm font-semibold text-brand-900">Verified Care Team</p>
							</div>
							<ul className="space-y-2">
								{additionalOfferings.slice(0, 4).map((item) => (
									<li key={item} className="flex items-center gap-2 text-xs text-gray-700">
										<CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="hidden md:block glass-dark absolute -top-6 right-0 rounded-2xl text-white px-6 py-4 shadow-lg">
							<p className="text-2xl font-bold">24/7</p>
							<p className="text-xs text-white/70">Care Availability</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="relative overflow-hidden max-w-7xl mx-auto px-6 py-16 md:py-20">
				<div className="grid md:grid-cols-3 gap-6">
					{homeFeatures.map((f) => {
						const Icon = featureIcons[f.icon];
						return (
							<div
								key={f.title}
								className="rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-1 transition-all duration-300">
								<div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-5 shadow-md shadow-brand-900/15">
									<Icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
								<p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* Services preview */}
			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="max-w-2xl mx-auto text-center mb-12">
						<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Our Services</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">What Care We Provide</h2>
						<p className="mt-4 text-gray-600">
							Explore Divyzen&apos;s home care services, covering a range of needs and tailored to keep your family&apos;s well-being front and centre.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{coreServices.map((s) => {
							const Icon = serviceIcons[s.icon];
							return (
								<div key={s.slug} className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
									<ArtPanel icon={Icon} tone="accent" className="h-40 w-full rounded-none group-hover:scale-[1.03] transition-transform duration-500" />
									<div className="p-7">
										<h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
										<p className="text-sm text-gray-600 leading-relaxed">{s.summary}</p>
									</div>
								</div>
							);
						})}
					</div>

					<div className="text-center mt-10">
						<Link
							href="/appointment"
							className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-brand-900/20 transition-colors">
							Make Appointment
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* About preview with stats */}
			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-14 items-center">
				<div>
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">About Divyzen</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">We Handle Your Family&apos;s Care With Genuine Attention</h2>
					<p className="mt-4 text-gray-600 leading-relaxed">
						We approach every case with patience and precision. Our team is committed to understanding your family&apos;s specific needs and responding with a
						plan that brings real peace of mind.
					</p>
					<Link href="/about" className="inline-flex items-center gap-2 mt-6 text-brand-600 font-semibold hover:text-brand-700">
						Learn more about us
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
				<div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
					<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
						{careStats.map((s) => (
							<StatBar key={s.label} label={s.label} value={s.value} />
						))}
					</div>
				</div>
			</section>

			{/* CTA / Emergency band */}
			<section className="relative overflow-hidden bg-brand-900 text-white">
				<BlobBackground variant="dark" />
				<div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold">Supportive, Compassionate &amp; Qualified Nursing Care</h2>
						<p className="mt-3 text-white/70 max-w-2xl">
							We offer in-home healthcare services including nursing care, patient attendants, elder care, baby care, physiotherapy and diagnostic sample
							collection — with more services added as we grow.
						</p>
					</div>
					<div className="glass-dark rounded-2xl px-6 py-4 flex flex-col items-start md:items-end gap-1">
						<span className="text-xs text-white/60 uppercase tracking-wide">Emergency Call</span>
						<a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="text-2xl font-bold text-accent-500 hover:text-accent-400">
							{siteConfig.emergencyPhone}
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
