import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, HeartPulse, Home as HomeIcon, ShieldCheck, Users } from "lucide-react";
import { careStats, siteConfig } from "@/app/lib/siteConfig";
import StatBar from "@/app/components/StatBar";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";

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
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">About Divyzen</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">We Take Care Of Your Problems Carefully</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">
						We handle every concern with attention and diligence. Our team takes a thoughtful, careful approach to your family&apos;s needs, offering
						solutions built around genuine well-being.
					</p>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-16 items-center">
				{/* Image collage */}
				<div className="relative h-[420px] md:h-[460px] order-2 md:order-1">
					<ArtPanel icon={HomeIcon} tone="brand" label="Home Nursing Visits" className="absolute top-0 left-0 w-[68%] h-[62%] shadow-xl shadow-brand-900/15" />
					<ArtPanel icon={Users} tone="accent" className="absolute bottom-0 right-0 w-[58%] h-[48%] shadow-xl shadow-accent-500/20 border-4 border-white" />
					<div className="glass absolute bottom-6 left-4 rounded-2xl p-4 shadow-lg flex items-center gap-3 w-52">
						<div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center shrink-0">
							<HeartPulse className="w-5 h-5 text-white" />
						</div>
						<div>
							<p className="text-sm font-bold text-brand-900">98% Satisfaction</p>
							<p className="text-[11px] text-gray-500">Across families we&apos;ve supported</p>
						</div>
					</div>
				</div>

				<div className="order-1 md:order-2">
					<h2 className="text-3xl font-bold text-brand-900">Where We Focus Our Care</h2>
					<p className="mt-4 text-gray-600 leading-relaxed">
						At Divyzen, your concerns are handled with precision and care. Our team is committed to understanding and resolving each case with close
						attention to detail, so your family has real peace of mind.
					</p>
					<div className="mt-8 flex items-center gap-4 rounded-2xl bg-brand-50 border border-brand-100 p-5">
						<div className="w-14 h-14 rounded-full bg-linear-to-br from-brand-600 to-accent-500 text-white flex items-center justify-center font-bold text-lg shrink-0">
							{siteConfig.founder.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</div>
						<div>
							<p className="font-semibold text-gray-900">{siteConfig.founder.name}</p>
							<p className="text-sm text-gray-500">
								{siteConfig.founder.role}, {siteConfig.shortName}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="max-w-2xl mx-auto text-center mb-12">
						<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Where We Focus</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Our Care, By The Numbers</h2>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 rounded-3xl glass p-8 md:p-10">
						{careStats.map((s) => (
							<StatBar key={s.label} label={s.label} value={s.value} />
						))}
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
				<div className="max-w-2xl mx-auto text-center mb-12">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">What Drives Us</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Our Values</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{values.map((v) => (
						<div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
							<div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center mb-5">
								<v.icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
							<p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="relative overflow-hidden max-w-7xl mx-auto px-6 pb-16 md:pb-20">
				<div className="relative overflow-hidden rounded-3xl bg-brand-900 text-white px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
					<BlobBackground variant="dark" />
					<div className="relative text-center md:text-left">
						<Award className="w-8 h-8 text-accent-500 mb-4 mx-auto md:mx-0" />
						<h2 className="text-2xl md:text-3xl font-bold">Quality Home Care & Private Nursing, Done Right</h2>
						<p className="mt-3 text-white/70 max-w-xl">We prioritize not just healthcare, but a warm and caring environment for every patient we support.</p>
					</div>
					<Link
						href="/appointment"
						className="relative shrink-0 inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-colors">
						Make Appointment
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</section>
		</div>
	);
}
