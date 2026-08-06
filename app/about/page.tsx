import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Home as HomeIcon, ShieldCheck, Users } from "lucide-react";
import { careStats, siteConfig } from "@/app/lib/siteConfig";
import StatBar from "@/app/components/StatBar";
import EditorialBlock from "@/app/components/EditorialBlock";

export const metadata: Metadata = {
	title: "About Us | Divyzen Care Solutions",
	description: "Learn about Divyzen Care Solutions and our approach to home nursing and family care.",
};

const values = [
	{ icon: HeartPulse, title: "Patient First", text: "Every decision starts with what's best for the person in our care, not the schedule." },
	{ icon: ShieldCheck, title: "Verified & Trained", text: "Every caregiver is background-checked, trained and supervised throughout their placement." },
	{ icon: Users, title: "Family Partnership", text: "We keep families informed and involved, treating care as a shared responsibility." },
];

export default function AboutPage() {
	return (
		<div>
			<section className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
				<div className="flex items-center justify-center gap-3 mb-6">
					<span className="w-8 h-px bg-accent" />
					<span className="text-xs font-semibold uppercase tracking-widest text-accent">About Divyzen</span>
					<span className="w-8 h-px bg-accent" />
				</div>
				<h1 className="font-display text-5xl md:text-6xl tracking-tight text-ink">We take care of your problems carefully</h1>
				<p className="mt-6 text-ink-muted leading-relaxed max-w-2xl mx-auto">
					We handle every concern with attention and diligence. Our team takes a thoughtful, careful approach to your family&apos;s needs, offering
					solutions built around genuine well-being.
				</p>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-line grid md:grid-cols-2 gap-16 items-center">
				<div className="relative h-105 md:h-115 order-2 md:order-1">
					<div className="absolute top-0 left-0 w-[64%] h-[58%]">
						<EditorialBlock icon={HomeIcon} tone="ink" caption="Home Nursing Visits" className="w-full h-full mr-4 mb-4" />
					</div>
					<div className="absolute bottom-0 right-0 w-[54%] h-[44%]">
						<EditorialBlock icon={Users} tone="accent" className="w-full h-full" />
					</div>
					<div className="absolute bottom-8 left-2 bg-cream border border-line px-5 py-4 flex items-center gap-3 w-52 shadow-sm">
						<HeartPulse className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
						<div>
							<p className="font-display text-lg text-ink leading-none">98%</p>
							<p className="text-[11px] text-ink-muted mt-1">Families satisfied with our care</p>
						</div>
					</div>
				</div>

				<div className="order-1 md:order-2">
					<h2 className="font-display text-3xl text-ink mb-5">Where we focus our care</h2>
					<p className="text-ink-muted leading-relaxed">
						At Divyzen, your concerns are handled with precision and care. Our team is committed to understanding and resolving each case with close
						attention to detail, so your family has real peace of mind.
					</p>
					<div className="mt-9 flex items-center gap-4 border-t border-line pt-7">
						<div className="w-14 h-14 rounded-full bg-ink text-cream flex items-center justify-center font-display text-lg shrink-0">
							{siteConfig.founder.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</div>
						<div>
							<p className="font-semibold text-ink">{siteConfig.founder.name}</p>
							<p className="text-sm text-ink-muted">
								{siteConfig.founder.role}, {siteConfig.shortName}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-cream-2 py-16 md:py-24 border-t border-line">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex items-center gap-3 mb-14">
						<span className="w-8 h-px bg-accent" />
						<span className="text-xs font-semibold uppercase tracking-widest text-accent">Where We Focus</span>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
						{careStats.map((s) => (
							<StatBar key={s.label} label={s.label} value={s.value} />
						))}
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-line">
				<div className="flex items-center gap-3 mb-14">
					<span className="w-8 h-px bg-accent" />
					<span className="text-xs font-semibold uppercase tracking-widest text-accent">What Drives Us</span>
				</div>
				<div className="grid md:grid-cols-3 border-t border-l border-line">
					{values.map((v, i) => (
						<div key={v.title} className="border-r border-b border-line p-9">
							<span className="font-display text-2xl text-accent">0{i + 1}</span>
							<v.icon className="w-6 h-6 text-ink-muted mt-5 mb-5" strokeWidth={1.5} />
							<h3 className="font-display text-xl text-ink mb-3">{v.title}</h3>
							<p className="text-sm text-ink-muted leading-relaxed">{v.text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-ink text-cream py-16 md:py-20">
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
					<div>
						<h2 className="font-display text-3xl md:text-4xl">Quality home care &amp; private nursing, done right</h2>
						<p className="mt-4 text-cream/60 max-w-xl leading-relaxed">We prioritize not just healthcare, but a warm and caring environment for every patient we support.</p>
					</div>
					<Link
						href="/appointment"
						className="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-cream hover:text-ink text-cream text-xs font-semibold uppercase tracking-widest px-7 py-4 transition-colors">
						Make Appointment
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>
		</div>
	);
}
