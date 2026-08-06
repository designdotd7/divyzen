import Link from "next/link";
import { Activity, ArrowRight, ArrowUpRight, HeartHandshake, Home as HomeIcon, ShieldCheck, Stethoscope, Users, Wallet } from "lucide-react";
import { careStats, coreServices, homeFeatures, siteConfig } from "@/app/lib/siteConfig";
import StatBar from "@/app/components/StatBar";
import EditorialBlock from "@/app/components/EditorialBlock";

const serviceIcons = { Home: HomeIcon, Users, Activity };
const featureIcons = { ShieldCheck, Stethoscope, Wallet };

export default function Home() {
	return (
		<div>
			{/* Hero */}
			<section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-20 grid md:grid-cols-2 gap-16 items-center">
				<div>
					<div className="flex items-center gap-3 mb-6">
						<span className="w-8 h-px bg-accent" />
						<span className="text-xs font-semibold uppercase tracking-widest text-accent">Trusted Home Nursing Care</span>
					</div>
					<h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink">We care for your family, right at home</h1>
					<p className="mt-6 text-ink-muted leading-relaxed max-w-lg">
						Divyzen brings compassionate, personalized home care to your doorstep. Our dedicated nurses and caregivers focus on the comfort, dignity and
						well-being of your loved ones, so they can heal and thrive in familiar surroundings.
					</p>
					<div className="mt-9 flex flex-wrap items-center gap-8">
						<Link
							href="/appointment"
							className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
							Make Appointment
							<ArrowRight className="w-4 h-4" />
						</Link>
						<a href={`tel:${siteConfig.phonePrimary.replace(/\s/g, "")}`} className="text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors">
							Call Us Today
						</a>
					</div>

					<div className="mt-14 flex items-center gap-8 pt-8 border-t border-line">
						<div>
							<p className="font-display text-3xl text-ink">24/7</p>
							<p className="text-xs uppercase tracking-widest text-ink-muted mt-1">Care availability</p>
						</div>
						<div className="w-px h-10 bg-line" />
						<div>
							<p className="font-display text-3xl text-ink">6+</p>
							<p className="text-xs uppercase tracking-widest text-ink-muted mt-1">In-home services</p>
						</div>
						<div className="w-px h-10 bg-line" />
						<div>
							<p className="font-display text-3xl text-ink">100%</p>
							<p className="text-xs uppercase tracking-widest text-ink-muted mt-1">Verified caregivers</p>
						</div>
					</div>
				</div>

				<EditorialBlock icon={HeartHandshake} tone="ink" caption="Compassionate care, every day" className="h-105 md:h-120 w-full mr-4 mb-4" />
			</section>

			{/* Features */}
			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-line">
				<div className="grid md:grid-cols-3">
					{homeFeatures.map((f, i) => {
						const Icon = featureIcons[f.icon];
						return (
							<div key={f.title} className={`p-8 md:py-2 ${i > 0 ? "md:border-l md:border-line" : ""}`}>
								<div className="flex items-center gap-3 mb-5">
									<span className="font-display text-2xl text-accent">0{i + 1}</span>
									<Icon className="w-5 h-5 text-ink-muted" strokeWidth={1.5} />
								</div>
								<h3 className="font-display text-xl text-ink mb-3">{f.title}</h3>
								<p className="text-sm text-ink-muted leading-relaxed">{f.text}</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* Services preview */}
			<section className="bg-cream-2 py-16 md:py-24 border-t border-line">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
						<div>
							<div className="flex items-center gap-3 mb-5">
								<span className="w-8 h-px bg-accent" />
								<span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Services</span>
							</div>
							<h2 className="font-display text-4xl md:text-5xl text-ink max-w-xl">What care we provide</h2>
						</div>
						<p className="text-ink-muted max-w-sm">
							Explore Divyzen&apos;s home care services, covering a range of needs and tailored to keep your family&apos;s well-being front and centre.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-10">
						{coreServices.map((s, i) => {
							const Icon = serviceIcons[s.icon];
							return (
								<div key={s.slug}>
									<EditorialBlock icon={Icon} tone={i === 1 ? "accent" : "ink"} index={`0${i + 1}`} className="h-52 w-full mr-3 mb-3" />
									<h3 className="font-display text-xl text-ink mt-6 mb-2">{s.title}</h3>
									<p className="text-sm text-ink-muted leading-relaxed">{s.summary}</p>
								</div>
							);
						})}
					</div>

					<div className="mt-14">
						<Link href="/appointment" className="inline-flex items-center gap-2 bg-ink hover:bg-accent text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
							Make Appointment
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* About preview */}
			<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-line grid md:grid-cols-2 gap-16">
				<div>
					<div className="flex items-center gap-3 mb-6">
						<span className="w-8 h-px bg-accent" />
						<span className="text-xs font-semibold uppercase tracking-widest text-accent">About Divyzen</span>
					</div>
					<blockquote className="font-display italic text-2xl md:text-3xl text-ink leading-snug">
						&ldquo;We approach every case with patience and precision — responding with a plan that brings real peace of mind.&rdquo;
					</blockquote>
					<p className="mt-6 text-ink-muted leading-relaxed max-w-md">
						Our team is committed to understanding your family&apos;s specific needs, treating every concern as our own.
					</p>
					<Link href="/about" className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors">
						Learn more about us
						<ArrowUpRight className="w-4 h-4" />
					</Link>
				</div>
				<div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 content-center">
					{careStats.map((s) => (
						<StatBar key={s.label} label={s.label} value={s.value} />
					))}
				</div>
			</section>

			{/* CTA / Emergency band */}
			<section className="bg-ink text-cream">
				<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
					<div>
						<h2 className="font-display text-3xl md:text-4xl">Supportive, compassionate &amp; qualified nursing care</h2>
						<p className="mt-4 text-cream/60 max-w-2xl leading-relaxed">
							We offer in-home healthcare services including nursing care, patient attendants, elder care, baby care, physiotherapy and diagnostic sample
							collection — with more services added as we grow.
						</p>
					</div>
					<div className="border border-cream/20 px-7 py-5 flex flex-col items-start md:items-end gap-1 shrink-0">
						<span className="text-xs uppercase tracking-widest text-cream/50">Emergency Call</span>
						<a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`} className="font-display text-2xl text-accent hover:text-cream transition-colors">
							{siteConfig.emergencyPhone}
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
